from app import create_app, db

app = create_app()
db.create_all()

if __name__ == '__main__':
    # app.run()
    app.run(debug=True, host='0.0.0.0', port=5000)
