"""
File: foo.py
Description: Contains the blueprint for routes used for foo
"""
from http import HTTPStatus
from flask import Blueprint, jsonify

foo = Blueprint("foo", __name__)


@foo.route("/foo")
def get():
    """
    Used as a basic get request

    :return: 200 status code with a json object of the result
    """
    return jsonify({
        "name": "foo",
        "message": "The foo route is running.",
        "status": HTTPStatus.OK
    }), HTTPStatus.OK
