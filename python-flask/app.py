"""
File: app.py
Description: Contains functions to create & start a Flask server.
"""
from routes import foo
from flask import Flask
from routes.errors import bad_request, not_found, internal_server_error, unauthorized


def start_app(app=None):
    """
    Starts the given application. If the application isn't present a new one is created.

    :param app: Application that will be started.
    """
    if not app:
        app = create_app()

    app.run()


def create_app():
    """
    Creates a new application and adds and initializes an api with all namespaces.

    :return: Newly created application.
    """
    app = Flask(__name__)

    # Register routes
    app.register_blueprint(foo, url_prefix='/api/v1/')

    # Register errors
    app.register_error_handler(400, bad_request)
    app.register_error_handler(401, unauthorized)
    app.register_error_handler(404, not_found)
    app.register_error_handler(500, internal_server_error)

    return app


if __name__ == '__main__':
    flask_app = create_app()
    start_app(flask_app)
