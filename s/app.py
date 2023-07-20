from flask import Flask, request, jsonify, render_template
import requests
import hashlib

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def check_password():
    message = ''
    if request.method == 'POST':
        password = request.form['password']
        hashed_password = hashlib.sha1(password.encode()).hexdigest().upper()
        prefix, tail = hashed_password[:5], hashed_password[5:]
        response = requests.get(f'https://api.pwnedpasswords.com/range/{prefix}', verify=False)
        hashes = (line.split(':') for line in response.text.splitlines())
        count = next((int(count) for t, count in hashes if t == tail), 0)
        if count:
            message = f'Sua senha foi exposta {count} vezes!'
        else:
            message = 'Sua senha não foi exposta ainda.'
        return jsonify({'message': message})

    return render_template('index.html')

if __name__ == '__main__':
    app.config['TEMPLATES_AUTO_RELOAD'] = True
    app.run(debug=True, use_reloader=True)
