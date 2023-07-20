from flask import Flask, render_template, jsonify
import pandas as pd


app = Flask(__name__)
app.debug = True

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/read-servers', methods=['GET'])
def readServer():
    # Lendo o arquivo CSV com pandas
    df = pd.read_csv("files/ServersLast24H.csv")

    # Convertendo o DataFrame para um dicionário
    data = df.to_dict(orient='records')

    # Enviando os dados como JSON
    return jsonify(data)

@app.route('/read-users', methods=['GET'])
def readUsers():
    # Lendo o arquivo CSV com pandas
    df = pd.read_csv("files/usuariosdash.csv")

    df = df.fillna(" ")
    # Convertendo o DataFrame para um dicionário
    data = df.to_dict(orient='records')

    # Enviando os dados como JSON
    return jsonify(data)   

if __name__ == "__main__":
    app.run(debug=True)
