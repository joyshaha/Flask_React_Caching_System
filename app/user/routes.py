from flask import (
    render_template,
    request,
    redirect,
    url_for,
    jsonify,
)
from app.user import bp
from app.user.models import User
from app.extensions import db, redis_client


@bp.route("/get", methods=['GET'])
def get_users():
    is_cached = False
    users = []
    check_users = redis_client.get("users")
    # print(check_user)
    if check_users:
        is_cached = True
        users = eval(check_users)
    else:
        for user in User.query.all():
            del user.__dict__['_sa_instance_state']
            users.append(user.__dict__)
        _ = redis_client.set('users', str(users))
        # print(_)
    return {
        "is_cached": is_cached,
        "result": users
        }


@bp.route('/create', methods=['POST'])
def add_user():
    if request.method == 'POST':
        name = request.form.get('username')
        email = request.form.get('email')
        print(name, email)
        # data = request.values
        # print(data)
        # data_name = data.get('username')
        # data_email = data.get('email')
        # print(data_name, data_email)
        try:
            user = User(username=name, email=email)
            db.session.add(user)
            db.session.commit()

            _ = redis_client.delete('users')  # output 1/0
            # print(_)
        except Exception as ex:
            return {"error": str(ex)}

        return {"message": "User created successfully!"}
    else:
        return {"message": "method is not allowed"}


@bp.route('/<id>/update', methods=['PUT'])
def update_user(id):
    if request.method == 'PUT':
        name = request.form.get('username')
        email = request.form.get('email')
        # print(name, email)
        try:
            db.session.query(User).filter_by(id=id).update(
                dict(username=name, email=email)
            )
            db.session.commit()
            _ = redis_client.delete(id, "users")
        except Exception as ex:
            return {"error": str(ex)}

        return {"message": "User is updated successfully!"}
    else:
        return {"message": "method is not allowed"}


@bp.route('/<id>/get', methods=['GET'])
def get_user_detail(id):
    is_cached = False
    try:
        check_user = redis_client.get(id)
        if check_user:
            is_cached = True
            result = eval(check_user)
        else:
            user = User.query.get(id)
            del user.__dict__['_sa_instance_state']
            # return jsonify(user.__dict__)
            result = user.__dict__
            _ = redis_client.set(id, str(result))
        return {
            "is_cached": is_cached,
            "result": result
        }
    except Exception as ex:
        return {"error": str(ex)}


@bp.route('/<id>/delete', methods=['DELETE'])
def delete_user(id):
    try:
        db.session.query(User).filter_by(id=id).delete()
        db.session.commit()
        _ = redis_client.delete(id, "users")
        return {"message": "User is deleted successfully!"}
    except Exception as ex:
        return {"error": str(ex)}


# @bp.route("/redis", methods=['GET'])
# def redis_data():
#     r = redis_client.get("users")
#     return f'{r}'
#
#
# @bp.route("/channel", methods=['GET'])
# def redis_channel():
#     p = redis_client.publish("channel", "hi")
#     print(p)
#     r = redis_client.pubsub()
#     r.subscribe("channel")
#     print(r.connection, r.channels)
#
#     return f'{p} - {r.get_message()}'
