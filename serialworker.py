import serial
import time
from multiprocessing import Process

class SerialProcess(Process):
 
    def __init__(self, output_queue):
        Process.__init__(self)
        self.output_queue = output_queue
        self.sp = serial.Serial('/dev/ttyACM0', 9600)
 
    def close(self):
        self.sp.close()
 
    def writeSerial(self, data):
        self.sp.write(data)
        # time.sleep(1)
        
    def readSerial(self):
        return self.sp.readline().replace("\n", "")
 
    def run(self):
 
    	self.sp.flushInput()
 
        while True:
            # look for incoming serial data
            if (self.sp.inWaiting() > 0):
            	data = self.readSerial()
                print "reading from serial: " + data
                # send it back to tornado
            	self.output_queue.put(data)
