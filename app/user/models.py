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


class Todo(db.Model):
    __tablename__ = "todos"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    completed = db.Column(db.Boolean, nullable=False, default=False)
    description = db.Column(db.String(), nullable=False)
    due_date = db.Column(db.DateTime, nullable=True)

    def __init__(self, completed, description):
        self.completed = completed
        self.description = description

    def __repr__(self):
        return f"<Todo {self.id}, {self.completed}, {self.description}>"

