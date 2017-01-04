from tornado import ioloop, web, websocket, template
from serial import Serial
import os

if __name__ == '__main__':
    static_dir = os.path.join(os.path.dirname(__file__), 'static')
    application = web.Application([(r'/', Main), 
                                   (r'/websocket', Handler), 
                                   (r'/static/(.*)', web.StaticFileHandler, {'path': static_dir}),])

    application.listen(80)
    ioloop.IOLoop.instance().start()

    class Handler(websocket.WebSocketHandler):
        def open(self):
            self.calceta = Serial('/dev/ttyAMA0',9600, timeout=0)

        def on_message(self, message):
            print self.calceta.readline()

        def on_close(self):
            self.calceta.close()
            print '> desconectado'

class Main(web.RequestHandler):
    def get(self):
        loader = template.Loader(os.path.dirname(__file__))
        aux = loader.load('template.html')
        self.write(aux.generate())