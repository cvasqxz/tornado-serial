from tornado import ioloop, web, websocket, template
from serial import Serial
import os

#HANDLER DEL WEBSOCKET
class Handler(websocket.WebSocketHandler):
    def open(self):
        print "user conectado"

        self.calceta = Serial('/dev/ttyAMA0',9600, timeout=0)

        while True:
            msg = calceta.readline()

            if len(msg) > 0:
                self.write_message(msg)

    def on_close(self):
        self.calceta.close()
        print '> desconectado'

#HANDLER DE PETICIONES WEB
class Main(web.RequestHandler):
    def get(self):
        loader = template.Loader(os.path.dirname(__file__))
        aux = loader.load('template.html')
        self.write(aux.generate())

#INICIO DEL SCRIPT
if __name__ == '__main__':
    static_dir = os.path.join(os.path.dirname(__file__), 'static')
    application = web.Application([(r'/', Main), 
                                   (r'/websocket', Handler), 
                                   (r'/static/(.*)', web.StaticFileHandler, {'path': static_dir}),])

    application.listen(80)
    ioloop.IOLoop.instance().start()