from sqlalchemy import create_engine
from sqlalchemy import sql
from BarBeerDrinker import config

engine = create_engine(config.database_uri)





def get_bars():
    with engine.connect() as con:
        rs = con.execute("SELECT name, addr, city, state, license, convert(openingTime, char) AS openingTime, convert(closingTime, char) AS closingTime \
            FROM bar;")
        return [dict(row) for row in rs]
        
def find_bar(name):
    with engine.connect() as con:
        query = sql.text("SELECT name, addr, city, state, license \
        FROM bar WHERE name = :name;")
        rs = con.execute(query, name=name)
        result = rs.first()
    if result is None:
        return None
    return dict(result)

def get_bar_menu(bar_name):
    with engine.connect() as con:
        query = sql.text("SELECT a.bar, a.item, a.price \
        FROM sellsResult as a \
        WHERE a.bar = :bar; \
        ")
        rs = con.execute(query, bar=bar_name)
        results = [dict(row) for row in rs]
        for i, _ in enumerate(results):
            results[i]['price'] = float(results[i]['price'])
        return results

def get_beers():
    with engine.connect() as con:
        rs = con.execute("SELECT name, manf FROM beer;")
        return [dict(row) for row in rs]
        
def find_beer(name):
    with engine.connect() as con:
        query = sql.text("SELECT name, manf FROM beer WHERE name = :name;")
        rs = con.execute(query, name=name)
        result = rs.first()
    if result is None:
        return None
    return dict(result)

def get_drinker():
    with engine.connect() as con:
        rs = con.execute("SELECT name, state, phone FROM drinker;")
        return [dict(row) for row in rs]
        
def find_drinker(name):
    with engine.connect() as con:
        query = sql.text("SELECT name, state, phone FROM drinker WHERE name = :name;")
        rs = con.execute(query, name=name)
        result = rs.first()
    if result is None:
        return None
    return dict(result)

def top_drinkers(name):
    with engine.connect() as con:
        query = sql.text("SELECT g.drinker AS Drinker, sum(t.totalPrice) AS Spendings \
            FROM generates g, transactions t \
            WHERE t.bar = :name \
            AND t.bar = g.bar \
            AND t.transactionID = g.transactionID \
            GROUP BY g.drinker \
            ORDER BY sum(t.totalPrice) DESC \
            LIMIT 0, 10;")
        rs = con.execute(query, name=name)
        results = [dict(row) for row in rs]
    return results

def most_popular_beers(name):
    with engine.connect() as con:
        query = sql.text("SELECT item AS beer, count(*) AS count \
            FROM orders \
            WHERE bar = :name \
            AND item IN (SELECT name FROM beer) \
            GROUP BY item \
            ORDER BY count DESC \
            LIMIT 0, 10;")
        rs = con.execute(query, name=name)
        results = [dict(row) for row in rs]
    return results

def most_popular_manf(name):
    with engine.connect() as con:
        query = sql.text("SELECT b.manf AS Manufacturer, count(*) AS Count \
            FROM orders o, beer b \
            WHERE o.bar = :name \
            AND o.item IN (SELECT name FROM beer) \
            AND o.item = b.name \
            GROUP BY Manufacturer \
            ORDER BY Count DESC \
            LIMIT 0, 10;")
        rs = con.execute(query, name=name)
        results = [dict(row) for row in rs]
    return results

def busiest_in_day(name):
    with engine.connect() as con:
        query = sql.text("SELECT hour(t.time) AS Hour, count(*) AS Count \
            FROM transactions t \
            WHERE t.bar = :name \
            GROUP BY hour(t.time) \
            ORDER BY Count DESC \
            LIMIT 0, 8;")
        rs = con.execute(query, name=name)
        results = [dict(row) for row in rs]
    return results

def busiest_of_week(name):
    with engine.connect() as con:
        query = sql.text("SELECT dayofweek(t.date) AS Day, count(*) AS Count \
            FROM transactions t \
            WHERE t.bar = :name \
            GROUP BY dayofweek(t.date) \
            ORDER BY Count DESC;")
        rs = con.execute(query, name=name)
        results = [dict(row) for row in rs]
    return results

def get_beer_bars(name):
    with engine.connect() as con:
        query = sql.text("SELECT bar, price \
            FROM sellsResult \
            WHERE item = :name;")
        rs = con.execute(query, name=name)
        results = [dict(row) for row in rs]
        for i, _ in enumerate(results):
            results[i]['price'] = float(results[i]['price'])
        return results

def beer_most_bars(name):
    with engine.connect() as con:
        query = sql.text("SELECT bar, count(*) AS count \
        FROM orders \
        WHERE item = :name \
        GROUP BY bar \
        ORDER By Count DESC \
        LIMIT 0, 10;")
        rs = con.execute(query, name=name)
        results = [dict(row) for row in rs]
    return results

def beer_most_drinkers(name):
    with engine.connect() as con:
        query = sql.text("SELECT g.drinker as Drinker, count(*) AS Count \
        FROM orders o, generates g \
        WHERE o.item = :name \
        AND o.transactionID = g.transactionID \
        AND o.bar = g.bar \
        GROUP BY g.drinker \
        ORDER BY Count DESC \
        LIMIT 0, 5;")
        rs = con.execute(query, name=name)
        results = [dict(row) for row in rs]
    return results

def beer_hour_dist(name):
    with engine.connect() as con:
        query = sql.text("SELECT hour(t.time) AS Hour, count(*) AS Count \
        FROM orders o, transactions t \
        WHERE o.item = :name \
        AND o.transactionID = t.transactionID \
        AND o.bar = t.bar \
        GROUP BY Hour \
        ORDER BY Count DESC \
        LIMIT 0, 8;")
        rs = con.execute(query, name=name)
        results = [dict(row) for row in rs]
    return results

def beer_day_dist(name):
    with engine.connect() as con:
        query = sql.text("SELECT dayofweek(t.date) as Day, count(*) AS Count \
        FROM orders o, transactions t \
        WHERE o.item = :name \
        AND o.transactionID = t.transactionID \
        AND o.bar = t.bar \
        GROUP BY Day \
        ORDER BY Count DESC;")
        rs = con.execute(query, name=name)
        results = [dict(row) for row in rs]
    return results

def beer_week_dist(name):
    with engine.connect() as con:
        query = sql.text("SELECT week(t.date) AS Week, count(*) AS Count \
        FROM orders o, transactions t \
        WHERE o.item = :name \
        AND o.transactionID = t.transactionID \
        AND o.bar = t.bar \
        GROUP BY Week \
        ORDER BY Count DESC \
        LIMIT 0, 10;")
        rs = con.execute(query, name=name)
        results = [dict(row) for row in rs]
    return results

def drinker_trans(name):
    with engine.connect() as con:
        query = sql.text("SELECT t.bar AS bar, t.transactionID AS transactionID, convert(t.date, char) AS date, \
        convert(t.time, char) AS time, t.bill AS bill, t.tax AS tax, t.tip AS tip, t.totalPrice AS totalPrice \
        FROM transactions t, generates g \
        WHERE g.drinker = :name \
        AND t.transactionID = g.transactionID \
        AND t.bar = g.bar \
        ORDER BY t.date, hour(t.time)")
        rs = con.execute(query, name=name)
        results = [dict(row) for row in rs]
        for i, _ in enumerate(results):
            results[i]['tax'] = float(results[i]['tax'])
            results[i]['bill'] = float(results[i]['bill'])
            results[i]['tip'] = float(results[i]['tip'])
            results[i]['totalPrice'] = float(results[i]['totalPrice'])
        return results

def drinker_beer(name):
    with engine.connect() as con:
        query = sql.text("SELECT o.item AS Beer, count(*) AS Count \
        FROM generates g, orders o \
        WHERE g.drinker = :name \
        AND o.item IN (SELECT name FROM beer) \
        AND g.transactionID = o.transactionID \
        AND g.bar = o.bar \
        GROUP BY o.item \
        ORDER BY Count DESC \
        LIMIT 0, 8;")
        rs = con.execute(query, name=name)
        results = [dict(row) for row in rs]
    return results

def spending_bars(name):
    with engine.connect() as con:
        query = sql.text("SELECT t.bar AS Bar, sum(totalPrice) AS Spending \
        FROM generates g, transactions t \
        WHERE g.drinker = :name \
        AND g.transactionID = t.transactionID \
        AND g.bar = t.bar \
        GROUP BY Bar \
        ORDER BY Spending DESC \
        LIMIT 0, 8;")
        rs = con.execute(query, name=name)
        results = [dict(row) for row in rs]
    return results

def spending_dates(name):
    with engine.connect() as con:
        query = sql.text("SELECT t.date AS Day, sum(totalPrice) AS Spending \
        FROM generates g, transactions t \
        WHERE g.drinker = :name \
        AND g.transactionID = t.transactionID \
        AND g.bar = t.bar \
        GROUP BY t.date \
        ORDER BY Spending DESC \
        LIMIT 0, 10;")
        rs = con.execute(query, name=name)
        results = [dict(row) for row in rs]
    return results

def spending_weeks(name):
    with engine.connect() as con:
        query = sql.text("SELECT week(t.date) AS Week, sum(totalPrice) AS Spending \
        FROM generates g, transactions t \
        WHERE g.drinker = :name \
        AND g.transactionID = t.transactionID \
        AND g.bar = t.bar \
        GROUP BY Week \
        ORDER BY Spending DESC \
        LIMIT 0, 5;")
        rs = con.execute(query, name=name)
        results = [dict(row) for row in rs]
    return results

def spending_months(name):
    with engine.connect() as con:
        query = sql.text("SELECT month(t.date) AS Months, sum(totalPrice) AS Spending \
        FROM generates g, transactions t \
        WHERE g.drinker = :name \
        AND g.transactionID = t.transactionID \
        AND g.bar = t.bar \
        GROUP BY Months \
        ORDER BY Spending DESC \
        LIMIT 0, 5;")
        rs = con.execute(query, name=name)
        results = [dict(row) for row in rs]
    return results
