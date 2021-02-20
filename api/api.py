import time
from flask import Flask, jsonify, request
import os

app = Flask(__name__)

@app.route("/")
def hello_world():
    return jsonify(message="Hello from React Flask CRUD"), 200

