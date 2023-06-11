import os

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
print(BASE_DIR)

from pathlib import Path
from dotenv import load_dotenv

dotenv_path = Path(__file__).resolve().parent.parent.parent / ".env"
print(dotenv_path)
load_dotenv(dotenv_path=dotenv_path)


class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY', 'your secret key')
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URI', 'postgresql://root:password@db:5432/my_db')
    SQLALCHEMY_TRACK_MODIFICATIONS = os.environ.get('TRACK_MODIFICATIONS', False)
    REDIS_HOST = os.environ.get('REDIS_HOST', 'localhost')
    REDIS_PORT = os.environ.get('REDIS_PORT', 6379)

