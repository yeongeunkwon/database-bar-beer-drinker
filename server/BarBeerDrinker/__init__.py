from flask import Flask
from flask import jsonify
from flask import make_response
from flask import request
import json

from BarBeerDrinker import database

app = Flask(__name__)

@app.route('/api/bar', methods=["GET"])
def get_bars():
    return jsonify(database.get_bars())

@app.route('/api/bar/<name>', methods=["GET"])
def find_bar(name):
    try:
        if name is None:
            raise ValueError("Bar is not specified.")
        bar = database.find_bar(name)
        if bar is None:
            return make_response("No bar found with the given name.", 404)
        return jsonify(bar)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/menu/<name>', methods=["GET"])
def get_menu(name):
    try:
        if name is None:
            raise ValueError("Bar is not specified.")
        bar = database.find_bar(name)
        if bar is None:
            return make_response("No bar found with the given name.", 404)
        return jsonify(database.get_bar_menu(name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/beer', methods=["GET"])
def get_beers():
    return jsonify(database.get_beers())

@app.route('/api/beer/<name>', methods=["GET"])
def find_beer(name):
    try:
        if name is None:
            raise ValueError("Beer is not specified.")
        beer = database.find_beer(name)
        if beer is None:
            return make_response("No beer found with the given name.", 404)
        return jsonify(beer)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/drinker', methods=["GET"])
def get_drinker():
    return jsonify(database.get_drinker())

@app.route('/api/drinker/<name>', methods=["GET"])
def find_drinker(name):
    try:
        if name is None:
            raise ValueError("Drinker is not specified.")
        beer = database.find_drinker(name)
        if beer is None:
            return make_response("No drinker found with the given name.", 404)
        return jsonify(beer)
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/top_drinkers/<name>', methods=['GET'])
def top_drinkers(name):
    try:
        return jsonify(database.top_drinkers(name))
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/most_popular_beers/<name>', methods=['GET'])
def most_popular_beers(name):
    try:
        return jsonify(database.most_popular_beers(name))
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/most_popular_manf/<name>', methods=['GET'])
def most_popular_manf(name):
    try:
        return jsonify(database.most_popular_manf(name))
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/busiest_in_day/<name>', methods=['GET'])
def busiest_in_day(name):
    try:
        return jsonify(database.busiest_in_day(name))
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/busiest_of_week/<name>', methods=['GET'])
def busiest_of_week(name):
    try:
        return jsonify(database.busiest_of_week(name))
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/beer_bars/<name>', methods=["GET"])
def get_beer_bars(name):
    try:
        if name is None:
            raise ValueError("Beer is not specified.")
        beer = database.get_beer_bars(name)
        if beer is None:
            return make_response("No beer found with the given name.", 404)
        return jsonify(database.get_beer_bars(name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/beer_most_bars/<name>', methods=['GET'])
def beer_most_bars(name):
    try:
        return jsonify(database.beer_most_bars(name))
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/beer_most_drinkers/<name>', methods=['GET'])
def beer_most_drinkers(name):
    try:
        return jsonify(database.beer_most_drinkers(name))
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/beer_hour_dist/<name>', methods=['GET'])
def beer_hour_dist(name):
    try:
        return jsonify(database.beer_hour_dist(name))
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/beer_day_dist/<name>', methods=['GET'])
def beer_day_dist(name):
    try:
        return jsonify(database.beer_day_dist(name))
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/beer_week_dist/<name>', methods=['GET'])
def beer_week_dist(name):
    try:
        return jsonify(database.beer_week_dist(name))
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/drinker_trans/<name>', methods=["GET"])
def get_drinker_trans(name):
    try:
        if name is None:
            raise ValueError("Drinker is not specified.")
        drinker = database.drinker_trans(name)
        if drinker is None:
            return make_response("No drinker found with the given name.", 404)
        return jsonify(database.drinker_trans(name))
    except ValueError as e:
        return make_response(str(e), 400)
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/drinker_beer/<name>', methods=['GET'])
def drinker_beer(name):
    try:
        return jsonify(database.drinker_beer(name))
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/spending_bars/<name>', methods=['GET'])
def spending_bars(name):
    try:
        return jsonify(database.spending_bars(name))
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/spending_dates/<name>', methods=['GET'])
def spending_dates(name):
    try:
        return jsonify(database.spending_dates(name))
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/spending_weeks/<name>', methods=['GET'])
def spending_weeks(name):
    try:
        return jsonify(database.spending_weeks(name))
    except Exception as e:
        return make_response(str(e), 500)

@app.route('/api/spending_months/<name>', methods=['GET'])
def spending_months(name):
    try:
        return jsonify(database.spending_months(name))
    except Exception as e:
        return make_response(str(e), 500)

# For Modification page. Page does not work

from flask_mysqldb import MySQL
from flask import request, render_template

app.config['MYSQL_HOST'] = 'yk9326.cklxlhrly6br.us-east-2.rds.amazonaws.com'
app.config['MYSQL_USER'] = 'admin'
app.config['MYSQL_PASSWORD'] = 'Aa111111'
app.config['MYSQL_DB'] = 'BarBeerDrinker'
mysql = MySQL(app)

@app.route('/api/modification/beer', methods=['GET', 'POST'])
def beerMod():
    if request.method == 'POST':
        cur = mysql.connection.cursor()
        old_name = request.form['beer_old_name']
        new_name = request.form['beer_new_name']
        new_manf = request.form['beer_new_manf']
        cur.execute("UPDATE beer SET name = (%s), manf = (%s) \
            WHERE name = (%s)", (new_name, new_manf, old_name))
        mysql.connection.commit()
        cur.close()
        return 'Success'

@app.route('/api/modification/bar', methods=['GET', 'POST'])
def barMod():
    if request.method == 'POST':
        cur = mysql.connection.cursor()
        old_name = request.form['bar_old_name']
        new_name = request.form['bar_new_name']
        new_addr = request.form['bar_new_addr']
        new_city = request.form['bar_new_city']
        new_state = request.form['bar_new_state']
        new_license = request.form['bar_new_license']
        new_openingTime = request.form['bar_new_openingTime']
        new_closingTime = request.form['bar_new_closingTime']
        cur.execute("UPDATE bar SET name = (%s), addr = (%s), city = (%s), state = (%s), license = (%s), \
            openingTime = (%s), closingTime = (%s) \
            WHERE name = (%s)", (new_name, new_addr, new_city, new_state, new_license, new_openingTime, new_closingTime, old_name))
        mysql.connection.commit()
        cur.close()
        return 'Success'

@app.route('/api/modification/drinker', methods=['GET', 'POST'])
def drinkerMod():
    if request.method == 'POST':
        cur = mysql.connection.cursor()
        old_name = request.form['drinker_old_name']
        new_name = request.form['drinker_new_name']
        new_state = request.form['drinker_new_state']
        new_phone = request.form['drinker_new_phone']
        cur.execute("UPDATE drinker SET name = (%s), state = (%s), phone = (%s) \
            WHERE name = (%s)", (new_name, new_state, new_phone, old_name))
        mysql.connection.commit()
        cur.close()
        return 'Success'

@app.route('/api/modification/food', methods=['GET', 'POST'])
def foodMod():
    if request.method == 'POST':
        cur = mysql.connection.cursor()
        old_name = request.form['food_old_name']
        new_name = request.form['food_new_name']
        cur.execute("UPDATE food SET name = (%s) \
            WHERE name = (%s)", (new_name, old_name))
        mysql.connection.commit()
        cur.close()
        return 'Success'

@app.route('/api/modification/frequents', methods=['GET', 'POST'])
def frequentsMod():
    if request.method == 'POST':
        cur = mysql.connection.cursor()
        old_drinker = request.form['frequents_old_drinker']
        old_bar = request.form['frequents_old_bar']
        new_drinker = request.form['frequents_new_drinker']
        new_bar = request.form['frequents_new_bar']
        cur.execute("UPDATE frequents SET drinker = (%s), bar = (%s) \
            WHERE drinker = (%s) AND bar = (%s)", (new_drinker, new_bar, old_drinker, old_bar))
        mysql.connection.commit()
        cur.close()
        return 'Success'

@app.route('/api/modification/generates', methods=['GET', 'POST'])
def generatesMod():
    if request.method == 'POST':
        cur = mysql.connection.cursor()
        old_transactionID = request.form['generates_old_transactionID']
        old_bar = request.form['generates_old_bar']
        old_drinker = request.form['generates_old_drinker']
        new_transactionID = request.form['generates_new_transactionID']
        new_bar = request.form['generates_new_bar']
        new_drinker = request.form['generates_new_drinker']
        cur.execute("UPDATE generates SET transactionID = (%s), bar = (%s), drinker = (%s) \
            WHERE transactionID = (%s) AND bar = (%s) AND drinker = (%s)", 
            (new_transactionID, new_bar, new_drinker, old_transactionID, old_bar, old_drinker))
        mysql.connection.commit()
        cur.close()
        return 'Success'

@app.route('/api/modification/item', methods=['GET', 'POST'])
def itemMod():
    if request.method == 'POST':
        cur = mysql.connection.cursor()
        old_name = request.form['item_old_name']
        new_name = request.form['item_new_name']
        cur.execute("UPDATE item SET name = (%s) \
            WHERE name = (%s)", (new_name, old_name))
        mysql.connection.commit()
        cur.close()
        return 'Success'

@app.route('/api/modification/likes', methods=['GET', 'POST'])
def likesMod():
    if request.method == 'POST':
        cur = mysql.connection.cursor()
        old_drinker = request.form['item_old_drinker']
        old_beer = request.form['item_old_beer']
        new_drinker = request.form['item_new_drinker']
        new_beer = request.form['item_new_beer']
        cur.execute("UPDATE likes SET drinker = (%s), beer = (%s) \
            WHERE drinker = (%s) AND beer = (%s)", (new_drinker, new_beer, old_drinker, old_beer))
        mysql.connection.commit()
        cur.close()
        return 'Success'

@app.route('/api/modification/orders', methods=['GET', 'POST'])
def ordersMod():
    if request.method == 'POST':
        cur = mysql.connection.cursor()
        old_transactionID = request.form['orders_old_transactionID']
        old_bar = request.form['orders_old_bar']
        old_item = request.form['orders_old_item']
        new_transactionID = request.form['orders_new_transactionID']
        new_bar = request.form['orders_new_bar']
        new_item = request.form['orders_new_item']
        cur.execute("UPDATE orders SET transactionID = (%s), bar = (%s), item = (%s) \
            WHERE transactionID = (%s) AND bar = (%s) AND item = (%s)", 
            (new_transactionID, new_bar, new_item, old_transactionID, old_bar, old_item))
        mysql.connection.commit()
        cur.close()
        return 'Success'

@app.route('/api/modification/sellsResult', methods=['GET', 'POST'])
def sellsResultMod():
    if request.method == 'POST':
        cur = mysql.connection.cursor()
        old_bar = request.form['sellsResult_old_bar']
        old_item = request.form['sellsResult_old_item']
        new_bar = request.form['sellsResult_new_bar']
        new_item = request.form['sellsResult_new_item']
        new_price = request.form['sellsResult_new_price']
        cur.execute("UPDATE sellsResult SET bar = (%s), item = (%s), price = (%s) \
            WHERE bar = (%s) AND item = (%s)", (new_bar, new_item, new_price, old_bar, old_item))
        mysql.connection.commit()
        cur.close()
        return 'Success'

@app.route('/api/modification/transactions', methods=['GET', 'POST'])
def transactionsMod():
    if request.method == 'POST':
        cur = mysql.connection.cursor()
        old_bar = request.form['transactions_old_bar']
        old_transactionID = request.form['transactions_old_transactionID']
        new_bar = request.form['sellsResult_new_bar']
        new_transactionID = request.form['transactions_new_transactionID']
        new_date = request.form['sellsResult_new_date']
        new_time = request.form['sellsResult_new_time']
        new_bill = request.form['sellsResult_new_bill']
        new_tax = request.form['sellsResult_new_tax']
        new_tip = request.form['sellsResult_new_tip']
        new_totalPrice = request.form['sellsResult_new_totalPrice']
        cur.execute("UPDATE transactions SET bar = (%s), transactionID = (%s), date = (%s), time = (%s), \
            bill = (%s), tax = (%s), tip = (%s), totalPrice = (%s) \
            WHERE bar = (%s) AND transactionID = (%s)", 
            (new_bar, new_transactionID, new_date, new_time, new_bill, new_tax, new_tip, new_totalPrice, old_bar, old_transactionID))
        mysql.connection.commit()
        cur.close()
        return 'Success'



# SQL Query Interface
@app.route('/api/interface/<query>')
def interface(query): 
    cur = mysql.connection.cursor()
    cur.execute(query)
    mysql.connection.commit()
    result = cur.fetchall()
    cur.close()
    return jsonify(result)