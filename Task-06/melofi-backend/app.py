from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector
import bcrypt

def my_db():
    return mysql.connector.connect(user='melofi_user', password='melofi', host='localhost', database='melofi')

app = Flask(__name__)
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
        return jsonify({"message": "Login Successful"}), 200
    
    return jsonify({"message": "Login Failed"}), 401

    

    

    



if __name__ == "__main__":
    app.run(debug=True)
    
