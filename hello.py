from __future__ import print_function
import time
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World! This is powered by Python backend."

if __name__ == "__main__":
   print(12)
   time.sleep(5)
   app.run(host='127.0.0.1', port=5000)