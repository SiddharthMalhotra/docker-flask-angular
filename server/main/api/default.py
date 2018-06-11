# -*- coding: utf-8 -*-
"""Default api blueprints for Demo application."""

from flask import Blueprint, jsonify
from flask_restful import Api, Resource

route = Blueprint('default', __name__)


@route.route("/api")
def hello():
    return "Hello from Flask using Python 3.6.2!!"

@route.route("/api/ping")
def ping():
    return jsonify({"status": 200, "msg":"This message is coming from Flask backend!"})