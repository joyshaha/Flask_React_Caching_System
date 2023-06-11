from flask import Blueprint

bp = Blueprint('user', __name__, url_prefix="/users")

from app.user import routes

