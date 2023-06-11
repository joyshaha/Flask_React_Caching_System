from flask import Flask

from config import Config
from app.extensions import db


def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)
    # app.config.from_pyfile('settings.py')

    db.init_app(app)

    from app.user import bp as user_bp
    app.register_blueprint(user_bp)

    @app.route('/')
    def hello():
        return "Welcome Boss!"

    @app.route('/test')
    def test():
        # print(Config.SECRET_KEY, Config.SQLALCHEMY_DATABASE_URI, Config.SQLALCHEMY_TRACK_MODIFICATIONS)
        return "hi, welcome for testing!!!!"

    @app.route('/env')
    def index():
        return f'REDIS_HOST = {app.config.get("REDIS_HOST")}, DB = {app.config.get("SQLALCHEMY_DATABASE_URI")}, '

    return app
