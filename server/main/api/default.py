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
    return jsonify({"status": 200, "owner":"Siddharth Malhotra"})

@route.route("/api/tickets")
def tickets():
	try:
	    url = "https://projectintern.zendesk.com/api/v2/tickets.json"
	    page_number = request.args["page"]
	    queryparam={ 'per_page': 25, 'page': page_number}
	    r = requests.get(url, auth=("codemalhotra@gmail.com"+"/token", "Uv55d2V7t1tCzZnN2Omyc4rIGCi1lksDBCpWjUSC"), params=queryparam)
	    if r.status_code == 401:
	    	print ("Not authorized.")
	    elif r.status_code == 404: 
	    	print ("API not found")
	    elif r.status_code == 503:
	    	print ("API is unavailable")
	    else:
	    	return r.text

	except ConnectionError:
		print("API is not valid.") 
	except Exception:
		print("Please try again.")

    # return jsonify(r.text)
    

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
