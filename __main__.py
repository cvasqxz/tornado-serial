from tornado import httpserver, ioloop, web, websocket, gen
from tornado.options import define, options
import os
import time
import multiprocessing
import serialworker

clients = [] 

output_queue = multiprocessing.Queue()
 
class IndexHandler(web.RequestHandler):
	def get(self):
		self.render('template.html')
 
class WebSocketHandler(websocket.WebSocketHandler):
	def open(self):
		print 'new connection'
		clients.append(self)
 
	def on_close(self):
		print 'connection closed'
		clients.remove(self)


## check the queue for pending messages, and rely that to all connected clients
def checkQueue():
	if not output_queue.empty():
		message = output_queue.get()
		for c in clients:
			c.write_message(message)


if __name__ == '__main__':
	## start the serial worker in background (as a deamon)
	sp = serialworker.SerialProcess(output_queue)
	sp.daemon = True
	sp.start()
	options.parse_command_line()
	
	static_dir = os.path.join(os.path.dirname(__file__), 'static')
	
	app = web.Application(
		handlers=[
			(r"/", IndexHandler),
			(r'/static/(.*)', web.StaticFileHandler, {'path': static_dir}),
			(r"/ws", WebSocketHandler)
		]
	)
	httpServer = httpserver.HTTPServer(app)
	httpServer.listen(80)
	print "Listening on port: 80"

	mainLoop = ioloop.IOLoop.instance()
	## adjust the scheduler_interval according to the frames sent by the serial port
	scheduler_interval = 100
	scheduler = ioloop.PeriodicCallback(checkQueue, scheduler_interval, io_loop = mainLoop)
	scheduler.start()
	mainLoop.start()