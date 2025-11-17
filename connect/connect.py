from flask import Flask, jsonify, request, render_template
import mysql.connector
from mysql.connector import Error

app = Flask(__name__)

# ================================
# DATABASE CONFIG
# ================================
DB_CONFIG = {
    "host": "localhost",
    "user": "yuan",
    "password": "password",
    "database": "MotoristDB"
}

def db_connect():
    try:
        conn = mysql.connector.connect(**DB_CONFIG)
        return conn
    except:
        return None

def query(sql, params=None, fetch=True):
    conn = db_connect()
    if conn is None:
        return None
    
    cursor = conn.cursor(dictionary=True)
    cursor.execute(sql, params or ())

    if fetch:
        result = cursor.fetchall()
        cursor.close()
        conn.close()
        return result
    else:
        conn.commit()
        last_id = cursor.lastrowid
        cursor.close()
        conn.close()
        return last_id


# ===============================================================
#                           HOME
# ===============================================================
@app.route("/test")
def test():
    return "Server is working!"

@app.route("/")
def index():
    return render_template("index.html")



@app.route("/")
def home():
    return jsonify({"message": "LTO Management System API Running"})


# ===============================================================
#                       MOTORISTS CRUD
# ===============================================================

@app.route("/motorists", methods=["GET"])
def get_motorists():
    data = query("SELECT * FROM Motorists")
    return jsonify(data)


@app.route("/motorists/<int:id>", methods=["GET"])
def get_motorist(id):
    data = query("SELECT * FROM Motorists WHERE MotoristID=%s", (id,))
    return jsonify(data[0] if data else {})


@app.route("/motorists", methods=["POST"])
def add_motorist():
    data = request.json
    sql = """
        INSERT INTO Motorists
        (LastName, FirstName, MiddleName, Nationality, Sex, DateOfBirth, Weight, Height,
         Address, LicenseNumber, ExpirationDate, AgencyCode, BloodType, EyeColor, DLCodes,
         Conditions, LicenseType)
        VALUES (%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)
    """
    params = (
        data["LastName"], data["FirstName"], data.get("MiddleName"),
        data.get("Nationality", "Filipino"), data["Sex"], data["DateOfBirth"],
        data.get("Weight"), data.get("Height"), data["Address"],
        data["LicenseNumber"], data["ExpirationDate"], data.get("AgencyCode"),
        data["BloodType"], data.get("EyeColor"), data.get("DLCodes"),
        data.get("Conditions"), data["LicenseType"]
    )
    new_id = query(sql, params, fetch=False)
    return jsonify({"success": True, "MotoristID": new_id})


@app.route("/motorists/<int:id>", methods=["PUT"])
def update_motorist(id):
    data = request.json
    sql = """
    UPDATE Motorists SET
        LastName=%s, FirstName=%s, MiddleName=%s, Nationality=%s, Sex=%s,
        DateOfBirth=%s, Weight=%s, Height=%s, Address=%s, LicenseNumber=%s,
        ExpirationDate=%s, AgencyCode=%s, BloodType=%s, EyeColor=%s,
        DLCodes=%s, Conditions=%s, LicenseType=%s
    WHERE MotoristID=%s
    """
    params = (
        data["LastName"], data["FirstName"], data.get("MiddleName"),
        data.get("Nationality"), data["Sex"], data["DateOfBirth"],
        data.get("Weight"), data.get("Height"), data["Address"],
        data["LicenseNumber"], data["ExpirationDate"], data.get("AgencyCode"),
        data["BloodType"], data.get("EyeColor"), data.get("DLCodes"),
        data.get("Conditions"), data["LicenseType"], id
    )
    query(sql, params, fetch=False)
    return jsonify({"success": True})


@app.route("/motorists/<int:id>", methods=["DELETE"])
def delete_motorist(id):
    query("DELETE FROM Motorists WHERE MotoristID=%s", (id,), fetch=False)
    return jsonify({"success": True})


# ===============================================================
#                        MEDICAL CRUD
# ===============================================================

@app.route("/medical/<int:motorist_id>", methods=["GET"])
def get_medical(motorist_id):
    data = query("SELECT * FROM Medical WHERE MotoristID=%s", (motorist_id,))
    return jsonify(data[0] if data else {})

@app.route("/medical", methods=["POST"])
def add_medical():
    data = request.json
    sql = """
    INSERT INTO Medical (MotoristID, Vision, MedicalCondition, DateOfExamination)
    VALUES (%s, %s, %s, %s)
    """
    params = (
        data["MotoristID"], data.get("Vision"), data.get("MedicalCondition"),
        data["DateOfExamination"]
    )
    new_id = query(sql, params, fetch=False)
    return jsonify({"success": True, "MedicalID": new_id})


# ===============================================================
#                        VEHICLE CRUD
# ===============================================================

@app.route("/vehicles", methods=["GET"])
def get_vehicles():
    data = query("SELECT * FROM Vehicles")
    return jsonify(data)

@app.route("/vehicles", methods=["POST"])
def add_vehicle():
    data = request.json
    sql = """
    INSERT INTO Vehicles (MotoristID, PlateNumber, ChassisNumber, Status)
    VALUES (%s, %s, %s, %s)
    """
    params = (
        data["MotoristID"], data["PlateNumber"],
        data["ChassisNumber"], data["Status"]
    )
    new_id = query(sql, params, fetch=False)
    return jsonify({"success": True, "VehicleID": new_id})


# ===============================================================
#                        INSURANCE CRUD
# ===============================================================

@app.route("/insurance/<int:vehicle_id>", methods=["GET"])
def get_insurance(vehicle_id):
    data = query("SELECT * FROM Insurance WHERE VehicleID=%s", (vehicle_id,))
    return jsonify(data)


@app.route("/insurance", methods=["POST"])
def add_insurance():
    data = request.json
    sql = """
    INSERT INTO Insurance (VehicleID, PolicyNumber, Provider, StartDate, EndDate, PremiumAmount, Status)
    VALUES (%s,%s,%s,%s,%s,%s,%s)
    """
    params = (
        data["VehicleID"], data["PolicyNumber"], data["Provider"],
        data["StartDate"], data["EndDate"], data["PremiumAmount"],
        data["Status"]
    )
    new_id = query(sql, params, fetch=False)
    return jsonify({"success": True, "InsuranceID": new_id})


# ===============================================================
#                       VIOLATIONS CRUD
# ===============================================================

@app.route("/violations", methods=["GET"])
def get_violations():
    data = query("""
        SELECT v.*, m.FirstName, m.LastName, ve.PlateNumber
        FROM Violations v
        JOIN Motorists m ON v.MotoristID = m.MotoristID
        JOIN Vehicles ve ON v.VehicleID = ve.VehicleID
    """)
    return jsonify(data)


@app.route("/violations", methods=["POST"])
def add_violation():
    data = request.json
    sql = """
    INSERT INTO Violations (MotoristID, VehicleID, ViolationType, ViolationDate, Status)
    VALUES (%s,%s,%s,%s,%s)
    """
    params = (
        data["MotoristID"], data["VehicleID"], data["ViolationType"],
        data["ViolationDate"], data["Status"]
    )
    new_id = query(sql, params, fetch=False)
    return jsonify({"success": True, "ViolationID": new_id})


# ===============================================================
#          FINES & PAYMENTS CRUD
# ===============================================================

@app.route("/fines/<int:violation_id>", methods=["GET"])
def get_fines(violation_id):
    data = query("SELECT * FROM FinesAndPayments WHERE ViolationID=%s", (violation_id,))
    return jsonify(data)


@app.route("/fines", methods=["POST"])
def add_fine():
    data = request.json
    sql = """
    INSERT INTO FinesAndPayments (ViolationID, Amount, DueDate, PaymentStatus, PaymentDate)
    VALUES (%s,%s,%s,%s,%s)
    """
    params = (
        data["ViolationID"], data["Amount"], data["DueDate"],
        data["PaymentStatus"], data.get("PaymentDate")
    )
    new_id = query(sql, params, fetch=False)
    return jsonify({"success": True, "FineID": new_id})


# ===============================================================
#                RUN SERVER
# ===============================================================
if __name__ == "__main__":
    app.run(debug=True)
