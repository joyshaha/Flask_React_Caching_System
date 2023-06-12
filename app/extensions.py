from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
import redis

from config import Config

db = SQLAlchemy()
migrate = Migrate()
bcrypt = Bcrypt()
cors = CORS()

redis_client = redis.Redis(host=Config.REDIS_HOST, port=Config.REDIS_PORT, db=0)



