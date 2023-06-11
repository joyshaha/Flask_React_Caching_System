from app.extensions import db


class User(db.Model):
    __tablename__ = 'user'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(150))
    email = db.Column(db.String(150))

    def __init__(self, username, email):
        self.username = username
        self.email = email

    def __repr__(self):
        return f'<User "{self.username}">'

# db.create_all()
