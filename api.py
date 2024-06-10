# XXX: PLEASE DO NOT MODIFY

import re
import random
import string
import sys
from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

def get_ua():
    return f"Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S{random.randrange(100, 9999)}/{random.randrange(100, 9999)}{random.choice(string.ascii_uppercase)}{random.choice(string.ascii_uppercase)}{random.choice(string.ascii_uppercase)}{random.choice(string.ascii_uppercase)}{random.randrange(1, 9)}; U; Bada/1.2; en-us) AppleWebKit/533.1 (KHTML, like Gecko) Dolfin/{random.randrange(1, 9)}.{random.randrange(1, 9)} Mobile WVGA SMM-MMS/1.2.0 OPN-B"

def getCookies(uid, password):
    session = requests.Session()
    _ua = get_ua()
    _fb = session.get('https://m.facebook.com').text
    _data = {
        "lsd": re.search('name="lsd" value="(.*?)"', str(_fb)).group(1),
        "jazoest": re.search('name="jazoest" value="(.*?)"', str(_fb)).group(1),
        "m_ts": re.search('name="m_ts" value="(.*?)"', str(_fb)).group(1),
        "li": re.search('name="li" value="(.*?)"', str(_fb)).group(1),
        "try_number":"0",
        "unrecognized_tries":"0",
        "email": uid,
        "pass": password,
        "login": "Log In"
    }
    _header = {
        'authority': 'p.facebook.com',
        'upgrade-insecure-requests': '1',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'accept-language': 'en-PK,en-GB,en-US;q=0.9,en;q=0.8,en;q=0.7', 
        'dnt': '1', 
        'x-requested-with': 'mark.via.gp', 
        'sec-fetch-site': 'none',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-user': '?1',
        'sec-fetch-dest': 'document',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9',
        'cache-control': 'max-age=0',
        'user-agent': _ua
    }
    _res = session.post('https://p.facebook.com/login/device-based/login/async/?refsrc=deprecated&lwv=100', data=_data, headers=_header).text
    cookies = session.cookies.get_dict()
    cookies = {"datr": cookies.pop("datr", None), **cookies}  
    return cookies
@app.route('/api/getCookie')
def get_cookie():
    email = request.args.get('email')
    password = request.args.get('password')   
    if not email or not password:
        return jsonify({"error": "Email and password are required."}), 400   
    cookies = getCookies(email, password)
    formatted_cookies = "; ".join([f"{key}={value}" for key, value in cookies.items()])    
    return formatted_cookies

if __name__ == '__main__':
    if len(sys.argv) > 1:
        port = int(sys.argv[1])
        app.run(debug=False, port=port)
