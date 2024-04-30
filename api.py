# Rui
# WARNING: PLEASE DO NOT MODIFY IF YOU DONT WANT ANY PROBLEMS
from flask import Flask, request, jsonify
import requests
from bs4 import BeautifulSoup as bs
import sys

app = Flask(__name__)


def get_user_cookie(user_email, user_password):
    url = 'https://n.facebook.com'
    xurl = url + '/login.php'
    user_agent = "Mozilla/5.0 (Linux; Android 4.1.2; GT-I8552 Build/JZO54K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.125 Mobile Safari/537.36"
    req = requests.Session()
    req.headers.update({
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'accept-language': 'en_US',
        'cache-control': 'max-age=0',
        'sec-ch-ua': '"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': "Windows",
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
        'user-agent': user_agent
    })
    with req.get(url) as response_body:
        inspect = bs(response_body.text, 'html.parser')
        lsd_key = inspect.find('input', {'name': 'lsd'})['value']
        jazoest_key = inspect.find('input', {'name': 'jazoest'})['value']
        m_ts_key = inspect.find('input', {'name': 'm_ts'})['value']
        li_key = inspect.find('input', {'name': 'li'})['value']
        try_number_key = inspect.find('input', {'name': 'try_number'})['value']
        unrecognized_tries_key = inspect.find('input', {'name': 'unrecognized_tries'})['value']
        bi_xrwh_key = inspect.find('input', {'name': 'bi_xrwh'})['value']
        data = {
            'lsd': lsd_key, 'jazoest': jazoest_key,
            'm_ts': m_ts_key, 'li': li_key,
            'try_number': try_number_key,
            'unrecognized_tries': unrecognized_tries_key,
            'bi_xrwh': bi_xrwh_key, 'email': user_email,
            'pass': user_password, 'login': "submit"
        }
        response_body2 = req.post(xurl, data=data, allow_redirects=True, timeout=300)
        cookie = str(req.cookies.get_dict())[1:-1].replace("'", "").replace(",", ";").replace(":", "=")


        if 'c_user' in cookie:
            return cookie
        else:
            return None


@app.route('/api/getCookie', methods=['GET'])
def api_get_cookie():
    email = request.args.get('email')
    password = request.args.get('password')
    if email and password:
        cookie = get_user_cookie(email, password)
        if cookie:
            return jsonify({'cookie': cookie})
        else:
            return jsonify({'error': 'Login failed. Invalid email or password.'}), 400
    else:
        return jsonify({'error': 'Missing email or password parameters.'}), 400


if __name__ == '__main__':
    if len(sys.argv) > 1:
        port = int(sys.argv[1])
        app.run(debug=False, port=port)
