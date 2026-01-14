from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector
import bcrypt
from flask_jwt_extended import (JWTManager, create_access_token, jwt_required, get_jwt_identity)

def my_db():
    return mysql.connector.connect(user='melofi_user', password='melofi', host='localhost', database='melofi')

app = Flask(__name__)
app.config["JWT_SECRET_KEY"] = "melofi"
jwt = JWTManager(app)
CORS(app)


@app.route("/api/register", methods=["POST"])
def register():
    data = request.get_json()
    email = data.get("email")
    username = data.get("username")
    password = data.get("password")
    bytes_pw = password.encode('utf-8')
    salt = bcrypt.gensalt()
    hash_pw = bcrypt.hashpw(bytes_pw, salt)

    print(f"Email(reg): {email}")
    print(f"Username(reg): {username}")
    print(f"Password(reg): {password}")

    db = my_db()
    cursor = db.cursor()

    try:
        cursor.execute("INSERT INTO users (email, username, password) VALUES (%s, %s, %s)", (email, username, hash_pw))
        db.commit()
        return jsonify({"message": "Registered Successfully"}), 200
    except mysql.connector.IntegrityError:
        return jsonify({"message": "Email already exists"}), 409

    finally:
        cursor.close()
        db.close()
    

@app.route("/api/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")
    if not email or not password:
        return jsonify({"message": "Missing Fields"}), 401

    bytes_pw = password.encode('utf-8')

    print(f"Email: {email}")
    print(f"Password: {password}")


    db = my_db()
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM users WHERE email=%s", (email,))
    user = cursor.fetchone()
    cursor.close()
    db.close()

    
    
    if not user:
        return jsonify({"message": "Invalid Credentials"}), 401

    if bcrypt.checkpw(bytes_pw, user['password'].encode('utf-8')):
        access_token = create_access_token(identity=str(user['id']))
        return jsonify({"message": "Login Successful", "token": access_token}), 200
    
    return jsonify({"message": "Login Failed"}), 401


@app.route("/api/dashboard", methods=["GET"])
@jwt_required()
def dashboard():
    user_id = get_jwt_identity()
    return jsonify({"message": "welcome to dashboard", "user_id": user_id}), 200


@app.route("/api/library", methods=["GET"])
@jwt_required()
def library():
    user_id = get_jwt_identity()
    return jsonify({"message": "welcome to library", "user_id": user_id}), 200






    

    

    



if __name__ == "__main__":
    app.run(debug=True)
    
