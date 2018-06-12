# -*- coding: utf-8 -*-
"""Default api blueprints for Demo application."""

from flask import Blueprint, jsonify, request
from flask_restful import Api, Resource
from flask_cors import CORS, cross_origin
import requests
import json
from json import dumps

route = Blueprint('default', __name__)
api= Api(route)

CORS(route)

@route.route("/api")
def hello():
    return "Hello from Flask using Python 3.6.2!!"

@route.route("/api/ping")
def ping():
    return jsonify({"status": 200, "msg":"This message is coming from Flask backend!"})

@route.route("/api/tickets")
def tickets():
    url = "https://projectintern.zendesk.com/api/v2/tickets.json"
    r = requests.get(url, auth=("codemalhotra@gmail.com"+"/token", "Uv55d2V7t1tCzZnN2Omyc4rIGCi1lksDBCpWjUSC"))
    # new_dict = json.loads(r.text)
    # print(new_dict)
    return jsonify(r.text)
    

# class Tickets(Resource):
#     def get(self):
#         url = "https://projectintern.zendesk.com/api/v2/tickets.json"
#         r = requests.get(url, auth=("codemalhotra@gmail.com"+"/token", "Uv55d2V7t1tCzZnN2Omyc4rIGCi1lksDBCpWjUSC"))
#         new_dict = json.loads(r.text)
#         return new_dict

# class temp(Resource):
#     def tempfunc():
#         return "this is A temp msg"

# api.add_resource(Tickets, '/tickets') #Route 1
