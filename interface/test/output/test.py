import pika 
import json

credentials = pika.PlainCredentials('user_edge51', 'user_edge51')
connection = pika.BlockingConnection(pika.ConnectionParameters('192.168.1.161','5672','electroplating',credentials))
channel=connection.channel()
with open("output.txt",'r') as f:
    for line in f.readlines():
        channel.basic_publish(exchange = '',routing_key = 'hello',body = line)

# for line in f.readlines():
# line = "hello"

connection.close()

