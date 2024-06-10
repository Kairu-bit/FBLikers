const _0x58829a = _0x41ff;
(function (_0x1a0fcb, _0x1fa8a8) {
    const _0x129123 = _0x41ff, _0x11f292 = _0x1a0fcb();
    while (!![]) {
        try {
            const _0x2370ed = parseInt(_0x129123(0x18f)) / (-0x2036 + 0x1 * 0x2bf + 0x1d78) * (-parseInt(_0x129123(0x140)) / (0x2f5 * -0xd + -0x12c + 0x279f)) + parseInt(_0x129123(0x128)) / (-0x1 * -0x1ecb + -0x77 * -0xf + -0x5 * 0x78d) * (parseInt(_0x129123(0x10f)) / (-0x1fa9 + 0x2170 + -0xb * 0x29)) + -parseInt(_0x129123(0x152)) / (-0x1121 + -0x2701 + -0x19 * -0x23f) + -parseInt(_0x129123(0x28b)) / (-0x1fe0 + -0xd1d * 0x1 + 0x2d03) * (parseInt(_0x129123(0x177)) / (-0xe67 * -0x2 + -0x210f + 0x448)) + -parseInt(_0x129123(0x170)) / (0x177 + -0x58b + -0x1 * -0x41c) + parseInt(_0x129123(0x196)) / (0x1a24 + 0x7 * 0xac + -0x21 * 0xef) + parseInt(_0x129123(0x26b)) / (-0xa31 * 0x3 + -0x1 * 0x1e4a + 0x1 * 0x3ce7);
            if (_0x2370ed === _0x1fa8a8)
                break;
            else
                _0x11f292['push'](_0x11f292['shift']());
        } catch (_0x3a5aee) {
            _0x11f292['push'](_0x11f292['shift']());
        }
    }
}(_0x37cf, -0x19516 + 0x4a66b + 0x67df));
import _0x2e2032 from 'fs';
import {
    exec,
    execSync
} from 'child_process';
import _0x3ce003 from 'http';
import _0x26b508 from 'https';
import _0x2a54a0 from 'os';
const {default: inquirer} = await import(_0x58829a(0x130)), {default: ora} = await import(_0x58829a(0x2a3)), {default: axios} = await import(_0x58829a(0xbd)), {default: getPassword} = await import(_0x58829a(0xd8)), {default: crypto} = await import(_0x58829a(0x154)), {addCooldown, checkCooldown} = await import(_0x58829a(0x21d)), cooldownJSON = _0x58829a(0x12b);
let cooldownData = {};
const fontDir = './fonts', yellow = _0x58829a(0x104), green = '\x1b[1;32m', red = _0x58829a(0xd2), white = _0x58829a(0x12d), blue = _0x58829a(0xff), cyan = '\x1b[1;36m', magenta = _0x58829a(0x1c7), orange = _0x58829a(0xf1), underline = '\x1b[4m', reset = '\x1b[0m', cookieJSONLocate = './cookies.json';
let cookiesJSON, cookiesJSONParsed, icon;
function _0x41ff(_0x11d7cc, _0x51df1e) {
    const _0x188869 = _0x37cf();
    return _0x41ff = function (_0x4c2350, _0x4f70c7) {
        _0x4c2350 = _0x4c2350 - (0x26 * -0xb0 + -0x131f * -0x1 + -0x7b2 * -0x1);
        let _0x1ac0b = _0x188869[_0x4c2350];
        if (_0x41ff['TiYhJO'] === undefined) {
            var _0x2201b0 = function (_0x4925fb) {
                const _0x5d733a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let _0x46ec90 = '', _0x317c92 = '';
                for (let _0x19e5d9 = -0xcaa + 0x1198 + -0x4ee, _0x2ebf88, _0x588106, _0x59a033 = 0xb86 + 0x1 * 0x1c33 + -0x27b9; _0x588106 = _0x4925fb['charAt'](_0x59a033++); ~_0x588106 && (_0x2ebf88 = _0x19e5d9 % (-0x8 * 0x48a + -0x47 * -0x5f + 0x7 * 0x16d) ? _0x2ebf88 * (0xe6a + -0x6 * 0x3fb + 0x8 * 0x137) + _0x588106 : _0x588106, _0x19e5d9++ % (-0x15f9 + 0x102a + 0x5d3)) ? _0x46ec90 += String['fromCharCode'](0x7c3 + 0x1e05 + 0x1 * -0x24c9 & _0x2ebf88 >> (-(0x989 * 0x1 + -0x9 * 0x19f + 0x510) * _0x19e5d9 & 0x1df3 * 0x1 + -0x21 + -0x1dcc)) : -0x197d + 0x1afa + -0x17d) {
                    _0x588106 = _0x5d733a['indexOf'](_0x588106);
                }
                for (let _0x479ef4 = -0x1 * 0xe19 + -0x122b + 0x49c * 0x7, _0x5aa17d = _0x46ec90['length']; _0x479ef4 < _0x5aa17d; _0x479ef4++) {
                    _0x317c92 += '%' + ('00' + _0x46ec90['charCodeAt'](_0x479ef4)['toString'](0x25ff + -0x20e1 * -0x1 + -0x46d0))['slice'](-(0xf6 * -0x11 + 0x61 * -0x52 + -0x2f6a * -0x1));
                }
                return decodeURIComponent(_0x317c92);
            };
            _0x41ff['IhevaR'] = _0x2201b0, _0x11d7cc = arguments, _0x41ff['TiYhJO'] = !![];
        }
        const _0x52d0a2 = _0x188869[-0x26ef + -0x4 * 0x66a + 0x5 * 0xceb], _0x53580e = _0x4c2350 + _0x52d0a2, _0x4a5d40 = _0x11d7cc[_0x53580e];
        return !_0x4a5d40 ? (_0x1ac0b = _0x41ff['IhevaR'](_0x1ac0b), _0x11d7cc[_0x53580e] = _0x1ac0b) : _0x1ac0b = _0x4a5d40, _0x1ac0b;
    }, _0x41ff(_0x11d7cc, _0x51df1e);
}
const font = _0x58829a(0xde), $HOME = _0x2a54a0['homedir'](), $termux = '.termux', $termuxttf = _0x58829a(0x187);
function updateCooldownData() {
    const _0x1a8705 = _0x58829a, _0x28e230 = {
            'oNGJk': function (_0x333068, _0x298b42) {
                return _0x333068 + _0x298b42;
            },
            'oZJlK': function (_0x153631) {
                return _0x153631();
            }
        };
    try {
        cooldownData = JSON['parse'](_0x2e2032[_0x1a8705(0xb3)](cooldownJSON));
    } catch (_0x4fab59) {
        console[_0x1a8705(0xb1)](_0x28e230[_0x1a8705(0xe8)](_0x28e230[_0x1a8705(0xda)](getTimeStamp), _0x4fab59['message'])), process['exit']();
    }
}
function UpdateCookies() {
    const _0x11ff3d = _0x58829a, _0x3311c0 = {
            'zWYxq': function (_0x26fad0, _0x28b512) {
                return _0x26fad0 + _0x28b512;
            },
            'mqyqn': function (_0x4c5d71) {
                return _0x4c5d71();
            }
        };
    try {
        cookiesJSON = _0x2e2032[_0x11ff3d(0xb3)](cookieJSONLocate, _0x11ff3d(0x10d)), cookiesJSONParsed = JSON['parse'](cookiesJSON), icon = cookiesJSONParsed['extra-configs']['icon'];
    } catch (_0x33e632) {
        console['log'](_0x3311c0[_0x11ff3d(0x258)](_0x3311c0['mqyqn'](getTimeStamp), _0x33e632['message'])), process[_0x11ff3d(0x19f)]();
    }
}
updateCooldownData(), UpdateCookies();
const info = '' + blue + (icon ? '\x20' : '[+]') + white + '\x20', error = '' + red + (icon ? '\x20' : _0x58829a(0x153)) + white + '\x20', ask = '' + yellow + (icon ? '\x20' : _0x58829a(0x23c)) + white + '\x20', api = _0x58829a(0x2a6), httpAgent = new _0x3ce003[(_0x58829a(0x1b8))]({ 'keepAlive': !![] }), httpsAgent = new _0x26b508[(_0x58829a(0x1b8))]({ 'keepAlive': !![] }), deleteCookieHelp = '\x0a' + green + _0x58829a(0xf8) + (info + yellow) + (icon ? _0x58829a(0x1fa) : '') + _0x58829a(0x1fc) + green + _0x58829a(0x11e) + (info + yellow) + (icon ? '󱛘\x20\x20' : '') + _0x58829a(0x137) + green + _0x58829a(0x156), urlHelp = '\x0a' + green + '**COMMANDS**\x0a' + (info + yellow) + (icon ? _0x58829a(0x1fa) : '') + _0x58829a(0x235) + green + _0x58829a(0x12c) + green + _0x58829a(0x226) + info + _0x58829a(0x2a8);
String['prototype'][_0x58829a(0x103)] = function () {
    const _0xd8791a = _0x58829a, _0x3dd1fd = {
            'STPEa': function (_0x47643f, _0x40786a) {
                return _0x47643f + _0x40786a;
            }
        }, _0x42d638 = this[_0xd8791a(0x23f)](-0x3 + -0x26ef + 0x26f2, 0x413 + -0x2591 + 0xf5 * 0x23)['toUpperCase']();
    return _0x3dd1fd[_0xd8791a(0x239)](_0x42d638, this[_0xd8791a(0x23f)](-0x1c7b * 0x1 + -0x1fa3 + -0x3c1f * -0x1, undefined));
};
function setClear() {
    const _0x48c2b7 = _0x58829a, _0x34bf7e = {
            'TTONd': function (_0x517167, _0x15c8b5, _0x36d0c3) {
                return _0x517167(_0x15c8b5, _0x36d0c3);
            },
            'ozWWN': _0x48c2b7(0x1e2),
            'kiZuw': function (_0xc9fefb, _0x459c1b, _0x436268) {
                return _0xc9fefb(_0x459c1b, _0x436268);
            },
            'rBaaw': 'clear'
        };
    if (process[_0x48c2b7(0xc7)] === _0x48c2b7(0x191)) {
        _0x34bf7e[_0x48c2b7(0x281)](execSync, _0x34bf7e[_0x48c2b7(0x1bc)], { 'stdio': 'inherit' });
        return;
    }
    _0x34bf7e[_0x48c2b7(0x237)](execSync, _0x34bf7e[_0x48c2b7(0xcd)], { 'stdio': 'inherit' });
}
function getTimeStamp() {
    const _0x36c7c8 = _0x58829a, _0x347c11 = {
            'RxsEy': function (_0x144b37, _0x59c859) {
                return _0x144b37(_0x59c859);
            }
        }, _0x3c8204 = new Date(), _0x155400 = _0x347c11[_0x36c7c8(0x1c8)](String, _0x3c8204['getHours']())[_0x36c7c8(0x14b)](0x2 * 0xba4 + -0x24d7 + -0x97 * -0x17, '0'), _0xe12b67 = String(_0x3c8204[_0x36c7c8(0xdd)]())[_0x36c7c8(0x14b)](0x837 + -0x254d + -0x38 * -0x85, '0'), _0x1a3632 = _0x347c11[_0x36c7c8(0x1c8)](String, _0x3c8204[_0x36c7c8(0x24d)]())[_0x36c7c8(0x14b)](-0x1e28 + 0x2327 + -0x4fd, '0');
    return yellow + '[' + _0x155400 + ':' + _0xe12b67 + ':' + _0x1a3632 + ']' + reset + '\x20';
}
class prompts {
    static [_0x58829a(0x27f)] = {
        'type': _0x58829a(0x260),
        'name': _0x58829a(0xd4),
        'prefix': '',
        'message': ask + 'FacebookLikers~$',
        'validate': cmd => {
            const _0x3a2067 = _0x58829a, eLhsMt = {
                    'jPIBZ': function (callee, param1) {
                        return callee(param1);
                    },
                    'xqgzq': function (x, y) {
                        return x <= y;
                    },
                    'bADMN': function (x, y) {
                        return x + y;
                    }
                };
            if (cmd[_0x3a2067(0x131)]() === '')
                return error + _0x3a2067(0x1a9);
            if (!/^\d+$/[_0x3a2067(0x1c5)](cmd))
                return error + 'Invalid\x20Option.\x20Please\x20Enter\x20Only\x20Numbers';
            cmd = eLhsMt[_0x3a2067(0x25c)](parseInt, cmd);
            if (eLhsMt[_0x3a2067(0x142)](cmd, 0x1 * -0x25 + -0x975 * -0x1 + -0x950) || cmd >= -0x4 * 0x255 + -0x989 * -0x1 + 0x2 * -0x17)
                return eLhsMt[_0x3a2067(0x1db)](error, _0x3a2067(0x16f));
            return !![];
        }
    };
    static ['getPostURL'] = {
        'type': _0x58829a(0x260),
        'name': _0x58829a(0x1dd),
        'prefix': '',
        'message': ask + 'Facebook\x20Post\x20URL\x20(press\x20h\x20for\x20help)~$',
        'validate': url => {
            const _0x2745ec = _0x58829a, AdErQm = {
                    'ZQHIv': function (x, y) {
                        return x === y;
                    },
                    'ftShK': function (x, y) {
                        return x === y;
                    },
                    'dTQfo': function (x, y) {
                        return x + y;
                    },
                    'eMTiC': 'Invalid\x20URL',
                    'AipFy': _0x2745ec(0x1bf),
                    'wVahw': _0x2745ec(0x1e6)
                };
            if (AdErQm['ZQHIv'](url[_0x2745ec(0x24f)](), 'h'))
                return urlHelp;
            if (url[_0x2745ec(0x24f)]() === 'b')
                return !![];
            if (AdErQm[_0x2745ec(0x2ac)](url[_0x2745ec(0x131)](), ''))
                return AdErQm[_0x2745ec(0x1a5)](error, AdErQm[_0x2745ec(0x175)]);
            if (!url['startsWith'](AdErQm[_0x2745ec(0x139)]) && !url['startsWith'](AdErQm[_0x2745ec(0x2a1)]))
                return AdErQm[_0x2745ec(0x1a5)](error, AdErQm['eMTiC']);
            return !![];
        }
    };
    static ['getReaction'] = {
        'type': _0x58829a(0x197),
        'name': _0x58829a(0x23d),
        'prefix': '',
        'message': ask + _0x58829a(0xcc),
        'choices': [
            cyan + ('LIKE\x20' + (icon ? '\x20' : '')) + reset,
            magenta + (_0x58829a(0xc9) + (icon ? '\x20' : '')) + reset,
            yellow + ('HAHA\x20' + (icon ? _0x58829a(0x241) : '')) + reset,
            orange + (_0x58829a(0x223) + (icon ? _0x58829a(0x173) : '')) + reset,
            blue + ('SAD\x20' + (icon ? _0x58829a(0x228) : '')) + reset,
            red + ('ANGRY\x20' + (icon ? _0x58829a(0xbc) : '')) + reset,
            green + (_0x58829a(0xed) + (icon ? '\x20' : '')) + reset
        ]
    };
    static [_0x58829a(0x1cb)] = {
        'type': _0x58829a(0x260),
        'name': _0x58829a(0x1a0),
        'prefix': '',
        'message': ask + 'CookieManagement~$',
        'validate': cookieCommand => {
            const _0x5ea5c6 = _0x58829a, XACuUd = {
                    'hLcaz': _0x5ea5c6(0x111),
                    'iUOBe': function (x, y) {
                        return x === y;
                    },
                    'pZseu': function (x, y) {
                        return x + y;
                    },
                    'cNMew': function (x, y) {
                        return x >= y;
                    }
                }, uZlBGm = XACuUd[_0x5ea5c6(0x253)][_0x5ea5c6(0xd1)]('|');
            let HcURBQ = 0xec4 + 0x1a69 + -0x7f * 0x53;
            while (!![]) {
                switch (uZlBGm[HcURBQ++]) {
                case '0':
                    if (XACuUd[_0x5ea5c6(0x29a)](cookieCommand[_0x5ea5c6(0x131)](), ''))
                        return XACuUd['pZseu'](error, _0x5ea5c6(0x1a9));
                    continue;
                case '1':
                    if (!/^\d+$/['test'](cookieCommand))
                        return XACuUd[_0x5ea5c6(0x12e)](error, _0x5ea5c6(0x25f));
                    continue;
                case '2':
                    cookieCommand = parseInt(cookieCommand);
                    continue;
                case '3':
                    if (cookieCommand <= -0x17f3 + -0xb5d * -0x1 + 0xc96 || XACuUd[_0x5ea5c6(0x13c)](cookieCommand, -0x148f + -0x1236 + -0x1 * -0x26c9))
                        return XACuUd['pZseu'](error, 'Invalid\x20Option.\x20Out\x20of\x20Range');
                    continue;
                case '4':
                    return !![];
                }
                break;
            }
        }
    };
    static [_0x58829a(0x2ae)] = {
        'type': _0x58829a(0x260),
        'name': _0x58829a(0x244),
        'prefix': '',
        'message': ask + _0x58829a(0x1b4),
        'validate': email => {
            const _0x3e2da8 = _0x58829a, qpBNkl = {
                    'hZaDS': function (x, y) {
                        return x + y;
                    },
                    'lCVTs': function (x, y) {
                        return x === y;
                    }
                };
            if (email[_0x3e2da8(0x131)]() === '')
                return qpBNkl['hZaDS'](error, _0x3e2da8(0x166));
            if (qpBNkl[_0x3e2da8(0x236)](email['toLowerCase'](), 'b'))
                return !![];
            return !![];
        }
    };
    static [_0x58829a(0x1ad)] = {
        'type': _0x58829a(0x260),
        'name': _0x58829a(0x11b),
        'prefix': '',
        'message': ask + _0x58829a(0x26d),
        'validate': cookieIndex => {
            const _0x3f4e45 = _0x58829a, ilWVll = {
                    'GoYuH': function (x, y) {
                        return x === y;
                    },
                    'IlxUr': function (x, y) {
                        return x + y;
                    },
                    'CURlO': function (x, y) {
                        return x === y;
                    },
                    'UevDl': function (x, y) {
                        return x + y;
                    },
                    'CAXrx': function (x, y) {
                        return x < y;
                    }
                }, CpQdLe = '2|1|3|5|4|7|6|0'[_0x3f4e45(0xd1)]('|');
            let LuXTTh = -0x1730 + 0x1d * -0xce + 0x2e86 * 0x1;
            while (!![]) {
                switch (CpQdLe[LuXTTh++]) {
                case '0':
                    return !![];
                case '1':
                    if (ilWVll[_0x3f4e45(0x21b)](cookieIndex[_0x3f4e45(0x131)](), ''))
                        return ilWVll['IlxUr'](error, 'Invalid\x20Option');
                    continue;
                case '2':
                    if (ilWVll[_0x3f4e45(0x21b)](cookieIndex[_0x3f4e45(0x24f)](), 'h'))
                        return deleteCookieHelp;
                    continue;
                case '3':
                    if (ilWVll[_0x3f4e45(0x28e)](cookieIndex[_0x3f4e45(0x24f)](), 'b'))
                        return !![];
                    continue;
                case '4':
                    if (!/^\d+$/[_0x3f4e45(0x1c5)](cookieIndex))
                        return ilWVll[_0x3f4e45(0x219)](error, 'Invalid\x20Option.\x20Please\x20Enter\x20Only\x20Numbers');
                    continue;
                case '5':
                    if (cookieIndex[_0x3f4e45(0x24f)]() === 'a')
                        return !![];
                    continue;
                case '6':
                    if (ilWVll[_0x3f4e45(0x1be)](cookieIndex, -0x1b3e + 0xc17 + 0xf28) || cookieIndex > cookiesJSONParsed['Cookies'][_0x3f4e45(0x1ef)])
                        return ilWVll['IlxUr'](error, _0x3f4e45(0x16f));
                    continue;
                case '7':
                    cookieIndex = parseInt(cookieIndex);
                    continue;
                }
                break;
            }
        }
    };
    static [_0x58829a(0x208)] = {
        'type': 'input',
        'name': 'back',
        'prefix': '',
        'message': ask + _0x58829a(0x1ae)
    };
    static [_0x58829a(0x162)] = {
        'type': _0x58829a(0x260),
        'name': '_',
        'prefix': '',
        'message': ask + _0x58829a(0x214)
    };
    static [_0x58829a(0x19c)] = {
        'type': _0x58829a(0x260),
        'name': _0x58829a(0x290),
        'prefix': '',
        'message': ask + _0x58829a(0x10a)
    };
    static [_0x58829a(0x257)] = {
        'type': 'list',
        'name': _0x58829a(0x198),
        'prefix': '',
        'message': ask + 'Logging\x20Symbols~$',
        'choices': [
            '' + yellow + (icon ? '\x20' : '') + _0x58829a(0x147) + green + (icon ? _0x58829a(0x15e) : _0x58829a(0x1c0)) + reset,
            '' + yellow + (icon ? _0x58829a(0x120) : '') + _0x58829a(0x299) + green + (icon ? _0x58829a(0x248) : '(Used)') + reset,
            '' + yellow + (icon ? _0x58829a(0x1fa) : '') + _0x58829a(0x1e3) + green + _0x58829a(0x144) + reset
        ]
    };
    static [_0x58829a(0x14d)] = {
        'type': _0x58829a(0x260),
        'name': _0x58829a(0x268),
        'prefix': '',
        'message': ask + _0x58829a(0x1af),
        'validate': user => {
            const _0x3d5c07 = _0x58829a, uYmYIV = {
                    'cEaVu': function (x, y) {
                        return x === y;
                    },
                    'CBCvj': function (x, y) {
                        return x + y;
                    },
                    'pLUST': 'Please\x20enter\x20\x27y\x27\x20or\x20\x27n\x27.',
                    'nEmcS': function (x, y) {
                        return x !== y;
                    },
                    'imCcR': function (x, y) {
                        return x + y;
                    }
                };
            if (uYmYIV[_0x3d5c07(0xe4)](user[_0x3d5c07(0x131)](), ''))
                return uYmYIV[_0x3d5c07(0x10c)](error, uYmYIV['pLUST']);
            if (user['toLowerCase']()[_0x3d5c07(0x131)]() !== 'y' && uYmYIV[_0x3d5c07(0x29b)](user[_0x3d5c07(0x24f)]()[_0x3d5c07(0x131)](), 'n'))
                return uYmYIV['imCcR'](error, 'Please\x20enter\x20\x27y\x27\x20or\x20\x27n\x27.');
            return !![];
        }
    };
}
function delay(_0x42dcc9) {
    return new Promise(_0x38394c => setTimeout(_0x38394c, _0x42dcc9));
}
async function animate(_0x5242f1, _0x2b4b04 = -0x3 * -0xcd4 + -0xe22 + -0x1856) {
    const _0x4f7465 = _0x58829a, _0x1e1d1e = {
            'RtKxl': function (_0x283886, _0x437c88) {
                return _0x283886(_0x437c88);
            },
            'rPxNq': _0x4f7465(0x229)
        };
    _0x5242f1 = _0x5242f1['toString']();
    for (const _0x35479e of _0x5242f1) {
        await _0x1e1d1e['RtKxl'](delay, _0x2b4b04), process[_0x1e1d1e[_0x4f7465(0x112)]][_0x4f7465(0x202)](_0x35479e);
    }
    console[_0x4f7465(0xb1)]();
}
async function exit() {
    const _0x1f7a69 = _0x58829a, _0x25e8dd = {
            'vXsAV': function (_0x2e4580, _0xc3d100) {
                return _0x2e4580 + _0xc3d100;
            },
            'PvcBT': function (_0xe2f0ea, _0x36e067, _0x19c688) {
                return _0xe2f0ea(_0x36e067, _0x19c688);
            },
            'wKGHD': function (_0x3adc90, _0x181363) {
                return _0x3adc90 + _0x181363;
            },
            'ewmES': function (_0x176d15) {
                return _0x176d15();
            }
        };
    await animate(_0x25e8dd[_0x1f7a69(0x18a)](_0x25e8dd[_0x1f7a69(0x18a)](getTimeStamp(), info), _0x1f7a69(0x222)), 0x1 * -0x2449 + 0x205c + 0x203 * 0x2), await _0x25e8dd['PvcBT'](animate, _0x25e8dd['wKGHD'](_0x25e8dd['vXsAV'](_0x25e8dd[_0x1f7a69(0xe3)](getTimeStamp), info), 'THANKS\x20FOR\x20USING'), 0xb * -0x272 + 0xb1b + 0xfe4), process[_0x1f7a69(0x19f)]();
}
try {
    console[_0x58829a(0xb1)](getTimeStamp() + info + _0x58829a(0x1e0));
    const response = execSync(_0x58829a(0x1b2))['toString']();
    if (response['includes'](_0x58829a(0x17f)))
        console[_0x58829a(0xb1)](getTimeStamp() + info + _0x58829a(0x179));
    else {
        const commitMessage = execSync(_0x58829a(0x1cd))[_0x58829a(0x28a)]();
        console[_0x58829a(0xb1)](getTimeStamp() + info + _0x58829a(0xdf) + yellow + 'node\x20index.js'), console[_0x58829a(0xb1)](getTimeStamp() + info + (_0x58829a(0x243) + (green + commitMessage))), process['exit']();
    }
} catch (_0x52aa03) {
    console[_0x58829a(0xb1)](getTimeStamp() + error + _0x58829a(0x16d)), console[_0x58829a(0xb1)](getTimeStamp() + error + _0x52aa03[_0x58829a(0x1f0)]), process['exit']();
}
const getSystemHash = () => {
    const _0x211255 = _0x58829a, _0x43c841 = {
            'tADwK': _0x211255(0x28d),
            'nrMsU': function (_0x362ac9, _0x1e94b7) {
                return _0x362ac9(_0x1e94b7);
            },
            'LVKcv': _0x211255(0x217),
            'wrHFp': function (_0xf19247, _0x2ddfed) {
                return _0xf19247 + _0x2ddfed;
            },
            'ROabH': _0x211255(0xb6)
        };
    try {
        const _0x3840c6 = execSync(_0x43c841[_0x211255(0x15f)])[_0x211255(0x28a)](), _0x5bf4ed = _0x43c841[_0x211255(0x2a7)](execSync, _0x43c841[_0x211255(0x252)])['toString'](), _0x7fe7c5 = _0x43c841['wrHFp'](_0x3840c6['toString']()[_0x211255(0x131)](), _0x5bf4ed['toString']()[_0x211255(0x131)]()), _0x3a8b2a = crypto['createHash'](_0x43c841[_0x211255(0x207)])[_0x211255(0x294)](_0x7fe7c5)[_0x211255(0x201)](_0x211255(0x2a5));
        return _0x3a8b2a;
    } catch (_0x12fec5) {
        return { 'errorMsg': _0x211255(0xb5) };
    }
};
let currentUTCDate = new Date(), offset = -0x19ba + 0x11f7 + 0x7cb, currentDate = new Date(currentUTCDate[_0x58829a(0x160)]() + offset * (0xf80 + 0x35f * 0x1 + -0x4cf) * (-0x8 + -0xb * -0x247 + -0x17 * 0xeb)), expirationDate = new Date(_0x58829a(0x245));
function _0x37cf() {
    const _0x38bb1a = [
        'DeztDMe',
        'zwD6CNu',
        'ueXfqvnfierpie5pvcbvu0uGwu9vuIbqrvjtt05btcbbq0npvu5uieLgifLpvsbxqu5uifrpiefwt0Leifnvu1bftKrjtKCGwu9vuIbbq0npvu5ulIbjtLnurufelcbvu0uGqsborvCGqundt1vovc4GveHfiefvveHpuIbjuYbot1qGuKvtue9ou0LcteuGrK9siefdq09vtLqGu1vtuevou0LptLmU',
        'vxbKyxrLigzHAwXLzc4GugXLyxnLigvUC3vYzsb0Agf0igDPDcbPCYbPBNn0ywXSzwqU',
        'CK9yD08',
        'sw52ywXPzcbpChrPB24Uie91DcbVzIbsyw5Nzq',
        'mtG2odG0mfHfsMz1vG',
        'keXjs0uSieXpvKuSieHbseeSifDpvYWGu0felcbdqvjflcbbtKDswsKk',
        'DJeUnW',
        '87cXQYa',
        'CM5OEw8',
        'zu1uAum',
        'v09x',
        'mtrNrwj4A0K',
        'v0TVu0W',
        'tM8GDxbKyxrLCYbMB3vUzc4',
        'vgjMBMu',
        'rgPytem',
        'qMfJAYa',
        'DK9RDfe',
        'twXxCvy',
        'qwXYzwfKEsb1Ccb0BYbKyxrLlG',
        'sxLyC3G',
        '87cLLca',
        'yKnnzMe',
        'z3PPCa',
        'B1Her0u',
        'y191C2vY',
        'q2fUj3qGywrKihbYzwrPy3rPB24Gy29VBgrVD24GzM9Yia',
        'zM9UDc50Dgy',
        'qwrKienVB2TPzsbeyxrYia',
        'BwfZAW',
        'DLHZqvy',
        'svruCfy',
        'CLLOv1y',
        'Cg9PBNq',
        'CvHOEvm',
        'mtGYnZK0CeLUzuzd',
        'z2vZuha',
        'D2LUmZi',
        'sxPptKW',
        'n3WWFdz8mxWYFdv8m3W0',
        's2v5yM9HCMqGsw50zxjYDxb0',
        'idOG',
        'mta2mde1nwTvqNrfwq',
        'BgLZDa',
        'Bg9Nz2LUz1n5Bq',
        'kefKzcbgywnLyM9VAYbdB29RAwuPcG',
        'kevYCM9YicmZoYbvBMTUB3DUkq',
        'vMf5CK0',
        'ywrKqwDHAw4',
        'zvnnBeK',
        'suDoia',
        'zxHPDa',
        'y29VA2LLq29TBwfUza',
        'wg5XsNy',
        'AuTmvha',
        'CgTNigLUC3rHBgWGChL0Ag9UlxbPCcaTEq',
        'kenOyxqGv2L0AcbezxzLBg9WzxiPcG',
        'zfrrzM8',
        'D3vOtKi',
        'wKvPDKu',
        'u2vWDgvTyMvY',
        'sw52ywXPzcbpChrPB24U',
        'kduPia',
        'ChjVBxb0',
        'vgnbAKm',
        'zgvSzxrLq29VA2LL',
        'rg8Gww91ifDHBNqGvg8Gr28GqMfJAZ8GkhKVBIWGzgvMyxvSDdOGEsK6',
        'rg8GEw91ihnLzsb0AguGCgvUz3vPBIbPy29UpYaOEs9UktO',
        'Cej4zNK',
        'sefiqq',
        'z2L0ihb1BgW',
        'AM9TrfK',
        'rMfJzwjVB2SGkevTywLSl0Lel1bOB25Lkx4K',
        'kevYCM9YicmXoYbpDxrKyxrLzcK',
        'CgLWmYaTvG',
        'tgflDLu',
        'qwDLBNq',
        'sw52ywXPza',
        'v29mC0y',
        'zxPmAM0',
        'B3Pxv04',
        'zxDtBwS',
        'q0fyCNG',
        'Ahr0Chm6lY93D3CUzMfJzwjVB2SUy29TlW',
        'kfjLCs4GtMvYzezVBNrZkq',
        'kfbYzxzPB3vZie1LBNuPcG',
        'zKjhy3e',
        'rfflAwK',
        'Be1nBKG',
        'DgvZDa',
        'zMXVB3i',
        'g1SXoZm1Bq',
        'uNHZrxK',
        'su5gtW',
        'z2v0tw9UDgG',
        'z2v0q29VA2LLq29TBwfUza',
        'kdiPia',
        'z2L0igXVzYaTmsaTlxbYzxr0Et0LqG',
        'C3bSAwnL',
        'r3nYwwm',
        'io+dGsa',
        'rfvKBuS',
        '87gBLcaG',
        'wuHPAvq',
        'DgX2rfi',
        'tg9Nz2LUz1n5BwjVBhmG',
        'kdePia',
        'tfzWyMC',
        'wsb1igrVihrOAxm',
        'tLrTthK',
        'BunvAwK',
        'yKfetu4',
        'ls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tlq',
        'DxjS',
        'vw5PzgvUDgLMAwvK',
        'q3v2teq',
        'q2HLy2TPBMCGzM9YihvWzgf0zxmUlI4',
        'rMvLzgjHy2SG',
        'y2XZ',
        'qKfdsYa',
        'sffMuu0',
        'rgf0CIG',
        'Ahr0CdOVl3D3DY5MywnLyM9VAY5JB20V',
        'Cg9ZDa',
        'DNH0EMe',
        'DxP6ruC',
        'nNWZFdf8nhWYFdv8ma',
        'Cg9OB2S',
        'tgfWreC',
        'tMvYzcbgB250CYbjBNn0ywXSzwqGu3vJy2vZC2z1BgX5lG',
        'z3jLzw4',
        'BgvUz3rO',
        'BwvZC2fNzq',
        'tM8Gq29VA2LLCYbgB3vUzc4',
        'D3jPDgvgAwXLu3LUyW',
        'DJmUma',
        'wxDZre8',
        'DNLbwwK',
        'DfPIuvC',
        'rNnTDhq',
        'DwXyBge',
        'qu5Vy2i',
        '74gkica',
        'ywrKzwq',
        'qIaTia',
        '87gBPcaG',
        'CgLWmYbZAg93igzSyxnR',
        'u3rHCNrPBMCGqvbj',
        'BwTKAxiGlxaG',
        'zgLNzxn0',
        'D3jPDgu',
        'mJaYnc0WnY0Xoq',
        'qvbjifn0yxj0zwqGu3vJy2vZC2z1BgX5',
        'tK9urtOG',
        'rKjmAwTLCNmG',
        'uK9HyKG',
        'yxnRqMfJAW',
        'A1bgEKW',
        'wunuCxy',
        'B3zQtfu',
        'tgP3svq',
        'tunVvey',
        'vgvSzwDYyw0',
        '87gBKca',
        'ihWG',
        'zNbbvfm',
        'CgTNigLUC3rHBgWGChL0Ag9UmYaTEq',
        'CxbQvKu',
        'uhjLC3mGrw50zxiGvg8Gq29UDgLUDwv+ja',
        'zfj6qK0',
        'vhbtsxi',
        'z2v0ChjVCcbYBY5ZExn0zw0UyNvPBgqUzgf0zq',
        'vw5HyMXLihrVihn0yxj0ihrOzsbbueK',
        'vwv2rgW',
        'u1bwEfu',
        'r29zDuG',
        'C011uva',
        'lI9WCMvKAwn0q29VBgrVD24UANm',
        's21JweC',
        'AujPr1i',
        'wfjOvge',
        '87cgMca',
        'suyGwu9vievoq09vtLrfuIbbtLKGqLvhuYbpuIbju1nvrvmSifbmruftrsbgruveqKfdsYbzt1vsie1fu1nbr0uGsvmGvKfmvufcteuGve8GvvmGoIK',
        'v09xia',
        'C25wvfu',
        'EMfoyMC',
        'kIPot1rfkIOk',
        'vw5jsNu',
        '87cXTIa',
        'C3rKB3v0',
        'yNfjseG',
        'yvjxEuO',
        'qeTHAxj1rgv2',
        'AuL2yvG',
        's3z4Ege',
        'qvzWChG',
        'y29VA2LLCY5QC29Uia',
        'Aw5JBhvKzxm',
        'vKfPz1C',
        'yLHmwLq',
        'Dg9vChbLCKnHC2u',
        'ieiGlsa',
        'Benwvhm',
        'A2LADxC',
        'r2H4D0u',
        'u1rqrwe',
        'qujTt3y',
        'EgrNlw9Wzw4GAhr0CdOVl3D3DY5MywnLyM9VAY5JB20Vs2fPCNv4rgv2',
        'wZ9D',
        'CMvHy3rFDhLWzq',
        'u0fe',
        'C2XPy2u',
        'ALHWy2K',
        '87giLca',
        '87cPIcaG',
        'vxbKyxrLie1LC3nHz2uGoIa',
        'zw1HAwW',
        'mJaYnc0WnI0Zma',
        'C1bbAM0',
        'CLLQsxK',
        'kerLzMf1BhqP',
        'q29VA2LLCW',
        'zgHbufy',
        'zLLfENG',
        'yujQEvq',
        'z2v0u2vJB25KCW',
        'y2vPBa',
        'Dg9mB3DLCKnHC2u',
        'rxLisNG',
        'rgvSzxrLienVB2TPzsbeyxrYia',
        'tfzly3y',
        'AeXJyxO',
        'rgv2zwXVCgvYoIa',
        'AuDLqMW',
        'AwDUB3jL',
        'y2HHBMDLtg9Nz2LUz1n5Bq',
        'ELDzEhe',
        'qxvNDxn0',
        'rwXKvu8',
        'rLHeu0O',
        'ALbjqLO',
        'z0fLEeq',
        'zgf0yq',
        'sw52ywXPzcbpChrPB24UifbSzwfZzsbfBNrLCIbpBMX5ie51BwjLCNm',
        'Aw5WDxq',
        'shDurLK',
        'sNvUzq',
        'rMvICNvHCNK',
        'sKTgwxi',
        'CMP3r2q',
        'twfYy2G',
        'kerPC3bSyxKGq29VA2LLieLUzM9YBwf0Aw9UkqO',
        'DxnLCG',
        'yu5wANG',
        'vgfYz2v0id4G',
        'nZG4nZGYmhHdALryyq',
        'D0Ltrg8',
        'rgvSzxrLienVB2TPzsaOChjLC3mGAcbMB3iGAgvSCcL+ja',
        'iaP8if9FpNWGlIa+Fcb8ica8xZ58ihXFxYbFx18Gif8GxYaGx19FicakFcbFpIb8ic4GxhWGFf8GFcb8FcaVic8Vic5FpNWGj18+pf8TpaP8x3WGihXFx18VFf9Fx3X8x3X8x1XFxf9FxY4GFf98icaVx18Via',
        'uMvXlG',
        's1PiBK4',
        '74kAica',
        'q2fUj3qGChjLzgLJDcbJB29Szg93BIbMB3iG',
        'yNvUv0S',
        'DgvYBxv4lw9Wzw4GAhr0CdOVl3qUBwuVs2fPCNvezxy',
        'u2HVD0nVB2TPzsa',
        'ih4G',
        'C3rYAw5NAwz5',
        'lIbtzwuGDgHLigvYCM9YigrLDgfPBhmGyMvSB3C',
        'rMjrDhu',
        'CgLWmYbPBNn0ywXSigzSyxnR',
        'zxH0CMeTy29UzMLNCW',
        'z0jbwfi',
        'kerLBgv0zsbgywnLyM9VAYbdB29RAwuPcG',
        'CgHRveC',
        'z2v0twfPBKnVBw1HBMq',
        'u2f2Aw5NienVB2TPzsbeyxrYigLUia',
        'vfrptMq',
        'rMX0s3a',
        'sfvpyxe',
        'tujtrve',
        't1Hzu0u',
        'rw1HAwWVsuqVtNvTyMvYiW',
        'u2vSzwn0zwqGuMvHy3rPB24GpIa',
        'y3jfzu0',
        'zKzswMK',
        'Dg9tDhjPBMC',
        'otu4nJi2ChbIwerf',
        'rLbZyLC',
        'z2v0ChjVCcbYBY5ZExn0zw0UyNvPBgqUAwq',
        'q1vsBe8',
        'ie1VzhvSzq',
        'ywDHAw4',
        'utjInxnJmerTyJfhrwfjq2HZvJvYDdKXyxPssNu1C0TXthjfwwSZofPVqt0',
        'AgfoywG',
        'yxvotLG',
        'DxbKyxrL',
        's2vLCc1bBgL2zq',
        'u3PKqLq',
        'kev4CgLYzxmGAw46ia',
        'y29VA2LLCY5QC29UlI4U',
        'u0LnueXfia',
        'AvvpqMu',
        'BKvTy1m',
        'rhzpthi',
        'sK5rquG',
        't1Hbzee',
        'tNf0zM8',
        'EgrNlw9Wzw4GAhr0CdOVl3qUBwuVs2fPCNvezxy',
        'D1zHAhC',
        'lI4U',
        'B3jH',
        'sfLJwNe',
        'yMfZzty0',
        'Ahr0Chm6lY9MBgLRzxjZlM5LDc9HBMrYB2LKl2fUzhjVAwrFz2v0x3jLywn0lNbOCa',
        'BNjnC1u',
        're9oj1qGvvnfifrirsbgqunfqK9psYbbufbmsunbveLptIbutYbdt1bzifrirsbmsu5lie9gifrirsbqt1nulcbvu0uGrKfdrujpt0SGteLursbpuIbdsfjptuuGsu5tvevbrc4k',
        'ChL0Ag9UmYbHCgKUChKG',
        'vgHLigfJy2vZCYbWzxjPB2qGAgfZigv4CgLYzwqU',
        'kevYCM9YicmYoYbnywLUDgvUyw5JzsK',
        'zNrtAeS',
        'vMPnr0u',
        'ywrKq29VA2LL',
        '87gBLIaG',
        'Bg9N',
        'ChnyExy',
        'CMvHzezPBgvtEw5J',
        '87ctVIa',
        'qw4GzxjYB3iGB2nJDxjYzwqGD2HPBguGzMv0y2HPBMCGC3LZDgvTigLUzM9YBwf0Aw9UlcbIDxqGDgHLigfWCgXPy2f0Aw9UihjLBwfPBNmGzNvUy3rPB25HBc4',
        'C2HHmJu2',
        'rMXHC2S',
        'r2f2AKS',
        'qxbYAwW',
        'ie5LEhqGu3vIBwL0ia',
        'sw5ZDgfSBgLUzYbqExrOB24G',
        '87cXQsa',
        'yxHPB3m',
        'u1vdq0vtuW',
        '7OIxica',
        'tgngqKW',
        'u29TzxrOAw5NifDLBNqGv3jVBMC',
        'uwruD20',
        'nhW1Fdf8mhWZFdj8nG',
        'tM90iezVDw5K',
        'rKjm',
        'zxHPC3rZu3LUyW',
        'CgXHDgzVCM0',
        'ugXLyxnLigfKzcbHignVB2TPzsbMAxjZDcbZBYb5B3uGy2fUihvZzsbgqKXPA2vYCY4',
        'te9wrsa',
        'AhrdrMO',
        'quzvExe',
        'u2vSzwn0zwqGuMvHy3rPB25+ja',
        'CKjHyxC',
        'sMnOrgu',
        'whzlEfK',
        '87gBMcaG',
        'C3bSAxq',
        'g1SXoZmXBq',
        'rNvUy3rPB24GkeLUC2vYDgLVBKnVB2TPzsKGrxjYB3i',
        'y21K',
        'ywvAs04',
        'DejJv0m',
        'ls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tlq',
        'CgfZC3DVCMqTChjVBxb0',
        'kefKzenVB2TPzsWGrgvSzxrLq29VA2LLkqO',
        'B1PkBeS',
        'C0X1rMi',
        'v2nnB1i',
        'z2v0twLUDxrLCW',
        'sw5JB25ZB2XHDgfozxjKrM9UDc1cB2XKlNr0zG',
        'vxbKyxrLihn1y2nLC3nMDwWUifbSzwfZzsbYDw4GDgHLihnJCMLWDcbHz2fPBIb1C2LUzZOG',
        'C2n4C0y',
        'qK1mseW',
        'kdqPia',
        'zxDTrvm',
        'y0vHvNu',
        'rxjYB3iGrgv0ywLSCZOG',
        'DNftD2S',
        'CufUyKG',
        'B05hsMS',
        'Bwf0y2G',
        'DxzwA20',
        'zMvLzgjHy2TuExbL',
        'rffkDw0',
        'q0fsrsa',
        'wgvUy20',
        'BwLU',
        'zxjYB3jnC2C',
        'g1SXoZm4oZu7mJa4Bq',
        'twf5',
        'CgLWmYbZAg93ihjLCxvLC3rZ',
        'rNvUy3rPB24GkgXVz2DPBMDtEw1IB2XZksbfCNjVCG',
        'z3ndqMO',
        'Eff4DM4',
        'thHzrM4',
        'kIPdt01nqu5euYOQcG',
        'D0LNuhO',
        'u1fMAuu',
        'Bgnttxi',
        'u29TzxrOAw5NifDLBNqGv3jVBMCG',
        '87cxUsa',
        'DKjtDgy',
        'g1SXoZm0Bq',
        'lI9JB29RAwvhzxr0zxiUANm',
        'AwnVBG',
        'CeTLDNy',
        'Dg9uAxrSzq',
        'g1SXoZmZBq',
        'vg90ywWGtgLRzxmGq291BNq',
        'ueXfqvnfifvqrefursbzt1vsienpt0Tjrq',
        'wLzOt1C',
        'tgHTyLG',
        'BwnvrKu',
        'qwrKiefNywLUpYaOEs9UlcbKzwzHDwX0oIbUktO',
        'BMXUyKe',
        'q0jdDMO',
        'DxrMoa',
        'tu9srsbdt09lsuvtie1puKuGteLlrvmGoKq',
        'mte5odm2ne1Rv1r0tq',
        'uxPSCxO',
        'mhWXFdj8m3W0',
        'CLb4tNe',
        'Aw5OzxjPDa',
        'C3rVCa',
        'DgvYBxv4lw9Wzw4GAhr0CdOVl3D3DY5MywnLyM9VAY5JB20Vs2fPCNv4rgv2',
        'vLjcAha',
        'rxHPDca',
        'vhjtAuC',
        'v0jfzLK',
        't1zcuem',
        'y29VA2LLsw5KzxG',
        'whfbzu4',
        'kev4AxqGvgHLifbYB2DYyw0PcG',
        'kejbq0SPcG',
        'C0nlvhy',
        '87cXQca',
        'ru5tvvjfifriqvqGwu9vuIbgqunfqK9psYbqt1nuieLtifnfvcbutYbqvujmsum',
        'kevYCM9Yicm0oYbvBMTUB3DUkq',
        's09ps2K',
        'wu1xre8',
        'uMvXDwvZDhm',
        '87gBKIa',
        'qxv0AgvUDgLJyxrPBMC',
        'm0zUu2LIsW',
        '87gBQIa',
        's0PICNu',
        'lI9JB29Szg93BI5QC29U',
        'kejbq0SPcGO',
        'g1SXoZm3Bq',
        'CfPZzxu',
        'uNvUidOG',
        'Aw5XDwLYzxi',
        'DhjPBq',
        'q3nQD3e',
        'v2HLCMuGD291BgqGEw91igXPA2uGDg8GBgvHDMuGEw91CIbMzwvKyMfJAZ8',
        'v2LwqLK',
        'rw1HAwXZ',
        'C1zctui',
        'qsaTia',
        'u3ryAM4',
        'qwLWrNK',
        'z1zvB2m',
        'rMzxDem',
        'y05nzxC',
        'v0fstKLorZOG',
        'rMfJzwjVB2SGugfZC3DVCMr+jca',
        'tMzfsM4',
        'mNDcEunfrG',
        'z2v0rgf0zq',
        'EhfNENe',
        '7Q6wica',
        'kfbYzxzPB3vZie1LBNuP',
        'Ae9cr1e',
        'sujezvm',
        'sunptIa',
        'rNjLzsb1BNrPBca',
        '87gBPca',
        'rMfJzwjVB2S',
        'CgfKu3rHCNq',
        'r2TcDxm',
        'DgvZDfvZzxjjy29U',
        'B3v0zgf0zwq',
        'qMfJAW',
        'qwXSignVB2TPzxmGCMvTB3zLzcbZDwnJzxnZzNvSBhKU',
        'yvjKqLe',
        'mtiXmJK1nvvNweTcyG',
        'wYfD',
        'y3j5ChrV',
        'y3aG',
        'kerftevursbbteWGq09ps0LfkqO',
        'C3rHDhvZ',
        'i1nvq0nfu1mGFca',
        'u3rHCNrPBMCUlI4',
        'tMfOsMe',
        're13Cvu',
        'q0fut3m',
        'Ewr1rM4',
        'kfvZzwqP',
        'DefeD0S',
        'z2v0vgLTzq',
        'rgfSDMLRlZiUms4WicHmAw51EdSGvtSGqw5KCM9PzdaGmti7ifyYmtm0iej1AwXKl1nqmueUmJeWodeYlJaWmYK',
        'yxnRvg9dB250Aw51zq',
        'rejZvuW',
        'sef5Aey',
        'CvDRA3O',
        'uMvHBgX5ie5Pz2DH',
        'sw5ZDgfSBgLUzYbqExrOB24',
        'D1DgzeG',
        'q0zVzhG'
    ];
    _0x37cf = function () {
        return _0x38bb1a;
    };
    return _0x37cf();
}
const millisecondsPerDay = (0x1184 + 0x41c * -0x4 + 0x2d4) * (-0x1ae7 * -0x1 + 0x14e9 + -0x3 * 0xfdc) * (0x14e4 + -0x2193 + -0xceb * -0x1) * (-0x7 * -0x44b + -0x463 + -0x1992), monthNames = [
        'January',
        _0x58829a(0x263),
        _0x58829a(0x266),
        _0x58829a(0xb9),
        _0x58829a(0xf2),
        _0x58829a(0x262),
        'July',
        _0x58829a(0x259),
        _0x58829a(0x1a8),
        'October',
        'November',
        'December'
    ];
let daysLeft;
const hash = getSystemHash(), adminKey = _0x58829a(0x291);
export const vusers = [];
!hash[_0x58829a(0xf0)] ? adminKey === hash && (expirationDate = new Date(_0x58829a(0x203))) : console[_0x58829a(0xb1)](getTimeStamp() + error + hash[_0x58829a(0xf0)]);
currentDate >= expirationDate && (console['log'](getTimeStamp() + error + _0x58829a(0x2aa)), process[_0x58829a(0x19f)]());
console[_0x58829a(0xb1)](getTimeStamp() + info + (_0x58829a(0x148) + (yellow + underline + monthNames[expirationDate[_0x58829a(0x1ca)]()]) + '\x20' + expirationDate[_0x58829a(0x141)]() + '\x20' + (expirationDate['getFullYear']() + reset))), daysLeft = Math[_0x58829a(0x24e)]((expirationDate[_0x58829a(0x160)]() - currentDate[_0x58829a(0x160)]()) / millisecondsPerDay);
const version = _0x58829a(0x1f3), banner = green + '\x20___\x20\x20___\x20\x20_\x20\x20\x20\x20_\x20\x20_\x20\x20' + yellow + (icon ? '\x20' : '') + _0x58829a(0x254) + blue + 'Kairu\x20' + (red + underline) + (icon ? '\x20' : '') + '(#' + version + ')' + reset + green + _0x58829a(0x26e) + cyan + (icon ? _0x58829a(0x181) : '') + _0x58829a(0x297) + daysLeft + 'd)';
try {
    execSync(_0x58829a(0x1b6), { 'stdio': _0x58829a(0x256) });
} catch (_0x1514b8) {
    console[_0x58829a(0xb1)](info + _0x58829a(0x167)), execSync(_0x58829a(0x212), { 'stdio': _0x58829a(0x113) }), execSync(_0x58829a(0x1a3), { 'stdio': _0x58829a(0x113) });
}
try {
    execSync(_0x58829a(0xf3), { 'stdio': _0x58829a(0x256) }), execSync(_0x58829a(0x1fe), { 'stdio': _0x58829a(0x256) });
} catch (_0x597187) {
    try {
        console['log'](info + (_0x58829a(0xbb) + (yellow + underline) + _0x58829a(0x125) + (reset + white) + _0x58829a(0x28f))), execSync('pip3\x20install\x20requests', { 'stdio': _0x58829a(0x113) }), console['log'](info + (_0x58829a(0xbb) + (yellow + underline) + _0x58829a(0xb7) + (reset + white) + '\x20Module')), execSync(_0x58829a(0x27a), { 'stdio': _0x58829a(0x113) });
    } catch (_0x13d1c6) {
        console[_0x58829a(0xb1)](getTimeStamp() + error + _0x13d1c6), process['exit']();
    }
}
console[_0x58829a(0xb1)](getTimeStamp() + info + _0x58829a(0x1ff));
const port = Math[_0x58829a(0x1c6)](Math['random']() * (0x40d * -0x1f + -0x833c + -0x24a1 * -0xe - (-0x1bdc * -0x1 + 0xf29 + -0x2704) + (0xd * -0x24b + -0x104 + -0x1ed4 * -0x1))) + (-0x1 * 0x301 + -0x75f + 0xe61);
exec(_0x58829a(0x2a9) + port, (_0x536470, _0x5990de, _0x5f3e22) => {
    const _0x2c2216 = _0x58829a, _0x382ae1 = {
            'DGpZh': function (_0x33955e) {
                return _0x33955e();
            },
            'wWFdH': function (_0x4cedc7, _0x25b7fe) {
                return _0x4cedc7 + _0x25b7fe;
            }
        };
    _0x536470 && (console[_0x2c2216(0xb1)](_0x382ae1['DGpZh'](getTimeStamp) + error + _0x2c2216(0x218)), console[_0x2c2216(0xb1)](_0x382ae1[_0x2c2216(0x168)](_0x382ae1[_0x2c2216(0x168)](_0x382ae1['DGpZh'](getTimeStamp), error) + _0x2c2216(0xe5), _0x536470['message'])), process[_0x2c2216(0x19f)]());
}), console[_0x58829a(0xb1)](getTimeStamp() + info + _0x58829a(0x204)), await delay(0x15a * 0xe + 0x1946 + -0x18aa);
const {getCookie} = await import(_0x58829a(0x100));
let loading = ora({
    'spinner': _0x58829a(0x18d),
    'prefixText': getTimeStamp() + info + _0x58829a(0x127),
    'interval': 0x50,
    'color': _0x58829a(0x1ee)
});
async function Goback() {
    const _0x47655e = _0x58829a, _0x532bb = {
            'Csjwq': function (_0x24e881, _0xdaa4e1) {
                return _0x24e881 === _0xdaa4e1;
            },
            'jXpci': function (_0x418396) {
                return _0x418396();
            }
        }, {back: _0x1d7dae} = await inquirer[_0x47655e(0x1ab)](prompts[_0x47655e(0x208)]);
    _0x532bb[_0x47655e(0x132)](_0x1d7dae[_0x47655e(0x24f)](), 'n') && await _0x532bb[_0x47655e(0x240)](exit), _0x532bb['jXpci'](main);
}
async function Feedback() {
    const _0x46b72a = _0x58829a, _0x47f371 = {
            'tFSva': function (_0x39b140) {
                return _0x39b140();
            },
            'fFRZi': _0x46b72a(0x197),
            'FfWtC': function (_0x51392a, _0x2452e0) {
                return _0x51392a + _0x2452e0;
            },
            'tiyKS': _0x46b72a(0x133),
            'Xencm': _0x46b72a(0x271),
            'CATOs': function (_0x4f92ca, _0x384d30) {
                return _0x4f92ca + _0x384d30;
            },
            'fpATS': _0x46b72a(0xbf),
            'wIgPz': 'Facebook',
            'OXAdA': function (_0x3f6e39, _0x399d11) {
                return _0x3f6e39(_0x399d11);
            },
            'ulXla': function (_0x41cb18, _0x267acd) {
                return _0x41cb18(_0x267acd);
            },
            'xkzmb': _0x46b72a(0x23b),
            'sVBMB': _0x46b72a(0x20e),
            'VAigW': function (_0x2c6d54, _0x2cd160) {
                return _0x2c6d54(_0x2cd160);
            }
        };
    _0x47f371[_0x46b72a(0x16a)](setClear);
    const {feedbackType: _0x455dd2} = await inquirer[_0x46b72a(0x1ab)]({
        'name': _0x46b72a(0xeb),
        'type': _0x47f371[_0x46b72a(0x289)],
        'prefix': '',
        'message': _0x47f371[_0x46b72a(0x13b)](ask, _0x47f371['tiyKS']),
        'choices': [
            _0x47f371[_0x46b72a(0x13b)](cyan, (icon ? _0x47f371[_0x46b72a(0xee)] : '') + _0x46b72a(0x14a)) + reset,
            _0x47f371[_0x46b72a(0x13b)](_0x47f371[_0x46b72a(0x15c)](blue, (icon ? _0x47f371[_0x46b72a(0x211)] : '') + _0x46b72a(0x20e)), reset),
            red + ((icon ? _0x46b72a(0x1fa) : '') + _0x46b72a(0x14f)) + reset
        ]
    });
    if (_0x455dd2[_0x46b72a(0x231)](_0x47f371[_0x46b72a(0xf9)]))
        try {
            _0x47f371[_0x46b72a(0x29e)](execSync, _0x46b72a(0x115));
        } catch (_0x105a4c) {
            _0x47f371[_0x46b72a(0x1f8)](execSync, _0x47f371['xkzmb']);
        }
    else {
        if (_0x455dd2['includes'](_0x47f371[_0x46b72a(0x136)]))
            try {
                _0x47f371[_0x46b72a(0x232)](execSync, _0x46b72a(0x274));
            } catch (_0xece32f) {
                _0x47f371['OXAdA'](execSync, _0x46b72a(0x2a0));
            }
    }
    _0x47f371[_0x46b72a(0x16a)](main);
}
async function Continue() {
    const _0x5910f0 = _0x58829a;
    await inquirer['prompt'](prompts[_0x5910f0(0x162)]);
}
async function ShowCookie() {
    const _0x362538 = _0x58829a, _0x2be473 = {
            'uvVkm': function (_0x4293a5) {
                return _0x4293a5();
            },
            'wISDo': function (_0x549083, _0x1fa05b) {
                return _0x549083 + _0x1fa05b;
            },
            'ITTpV': function (_0x101c1a, _0x4c155b) {
                return _0x101c1a + _0x4c155b;
            },
            'rOXwO': function (_0x2fe31a, _0x307cdd) {
                return _0x2fe31a === _0x307cdd;
            },
            'VRBhp': _0x362538(0x249),
            'lMMnH': function (_0x933f4b, _0x506209) {
                return _0x933f4b + _0x506209;
            },
            'uCiZL': function (_0x2034da) {
                return _0x2034da();
            },
            'nlnbA': function (_0x1b63da, _0x387d65) {
                return _0x1b63da + _0x387d65;
            },
            'zaNbg': function (_0x15d911) {
                return _0x15d911();
            },
            'sCKTv': function (_0xe93d72, _0xf01cd7) {
                return _0xe93d72 + _0xf01cd7;
            },
            'MCoTF': _0x362538(0x135),
            'sLuFb': function (_0x2501d4, _0x317816) {
                return _0x2501d4 + _0x317816;
            },
            'pBxfy': function (_0x2c40fc) {
                return _0x2c40fc();
            },
            'phkTG': _0x362538(0x221),
            'NTmLy': function (_0x10ebab) {
                return _0x10ebab();
            }
        };
    _0x2be473[_0x362538(0xea)](setClear), console[_0x362538(0xb1)](_0x2be473[_0x362538(0x26c)](_0x2be473[_0x362538(0x18b)](_0x2be473[_0x362538(0xea)](getTimeStamp), info), green + _0x362538(0x205) + white + _0x362538(0x10e))), console[_0x362538(0xb1)](cyan + _0x362538(0x1dc));
    if (_0x2be473[_0x362538(0x16e)](cookiesJSONParsed[_0x2be473[_0x362538(0x116)]][_0x362538(0x1ef)], -0x9ea + 0x6c0 + -0x87 * -0x6)) {
        console[_0x362538(0xb1)](_0x2be473[_0x362538(0x18b)](_0x2be473[_0x362538(0x1c4)](getTimeStamp(), error), _0x362538(0x1f1))), console[_0x362538(0xb1)](_0x2be473['wISDo'](_0x2be473['wISDo'](_0x2be473[_0x362538(0xea)](getTimeStamp), info), 'Please\x20add\x20a\x20cookie\x20first\x20so\x20you\x20can\x20use\x20FBLikers.')), console[_0x362538(0xb1)](cyan + '----------------------------------------------'), console[_0x362538(0xb1)](), await Continue(), await _0x2be473['uCiZL'](CookieManagement);
        return;
    }
    for (let _0x481d5e = -0x8 * 0x36 + 0x1c55 + -0x1 * 0x1aa5; _0x481d5e < cookiesJSONParsed[_0x2be473[_0x362538(0x116)]][_0x362538(0x1ef)]; _0x481d5e++) {
        console['log'](_0x2be473[_0x362538(0x10b)](_0x2be473[_0x362538(0x26c)](_0x2be473[_0x362538(0x225)](getTimeStamp), info), yellow + _0x362538(0x286) + _0x2be473[_0x362538(0x11f)](_0x481d5e, -0x639 + -0x1885 + 0x1ebf) + '\x20' + green + (icon ? '\x20' : '') + cookiesJSONParsed[_0x2be473[_0x362538(0x20d)]][_0x481d5e]['slice'](-0x2015 + -0x9d3 * 0x3 + 0x2 * 0x1ec7, 0x21f5 + -0x8eb + -0x140 * 0x14) + '...')), console[_0x362538(0xb1)](_0x2be473[_0x362538(0xdb)](_0x2be473['sCKTv'](_0x2be473[_0x362538(0x1b0)](getTimeStamp), info), green + 'DATR' + yellow + '(' + _0x2be473[_0x362538(0x10b)](_0x481d5e, -0x91c * -0x3 + -0x1c3 * -0xc + -0x3077 * 0x1) + ')\x20' + green + (icon ? _0x2be473[_0x362538(0x27e)] : '') + (cookiesJSONParsed[_0x2be473[_0x362538(0x116)]][_0x481d5e][_0x362538(0x1ef)] >= -0x2231 + -0x16 * -0xc5 + 0x1157 ? cookiesJSONParsed[_0x2be473[_0x362538(0x116)]][_0x481d5e][_0x362538(0x23f)](-0x1 * 0xa58 + -0x1d7d * 0x1 + 0x27d5, -0x284 + 0xb * -0x11b + 0x4eb * 0x3) : cookiesJSONParsed[_0x2be473[_0x362538(0x116)]][_0x481d5e]) + _0x362538(0x2a2)));
    }
    console['log'](cyan + _0x362538(0x1dc)), console[_0x362538(0xb1)](), await _0x2be473[_0x362538(0x1d9)](Continue), _0x2be473[_0x362538(0xea)](main);
}
async function CookieManagement() {
    const _0x55d8b4 = _0x58829a, _0x45bd90 = {
            'ZEivE': function (_0x20cee1) {
                return _0x20cee1();
            },
            'kPFzL': function (_0x38c3c6, _0x5ca7d1) {
                return _0x38c3c6(_0x5ca7d1);
            },
            'tlvDR': function (_0x3d17bf, _0x389f7b) {
                return _0x3d17bf(_0x389f7b);
            },
            'maZoi': _0x55d8b4(0x2af),
            'gVUoc': _0x55d8b4(0xd0),
            'vBStf': _0x55d8b4(0x1fa),
            'KOOKi': function (_0x3eeca9, _0x346545) {
                return _0x3eeca9(_0x346545);
            },
            'GhxwE': function (_0x2da26d, _0x69dfc2) {
                return _0x2da26d === _0x69dfc2;
            }
        };
    _0x45bd90[_0x55d8b4(0x1a7)](setClear), await _0x45bd90[_0x55d8b4(0x209)](animate, banner), await _0x45bd90[_0x55d8b4(0x1d4)](animate, '\x0a' + yellow + _0x55d8b4(0x1d6) + blue + (icon ? _0x45bd90['maZoi'] : '') + _0x55d8b4(0x188) + green + _0x55d8b4(0x199) + yellow + _0x55d8b4(0x1cc) + blue + (icon ? _0x45bd90[_0x55d8b4(0x13a)] : '') + _0x55d8b4(0x251) + green + _0x55d8b4(0x27d) + yellow + '(3)\x20' + blue + (icon ? _0x45bd90[_0x55d8b4(0xfe)] : '') + _0x55d8b4(0x17c) + green + _0x55d8b4(0x1c1));
    let {cookieCommand: _0x1dddf5} = await inquirer['prompt'](prompts['getCookieCommand']);
    _0x1dddf5 = _0x45bd90[_0x55d8b4(0x123)](parseInt, _0x1dddf5);
    if (_0x45bd90[_0x55d8b4(0x238)](_0x1dddf5, 0x132d + 0x5 * 0x67f + -0x33a7))
        _0x45bd90[_0x55d8b4(0x1a7)](InsertCookie);
    else {
        if (_0x1dddf5 === -0x17f9 * 0x1 + 0x49b * -0x4 + 0x5 * 0x87b)
            _0x45bd90[_0x55d8b4(0x1a7)](DeleteCookie);
        else
            _0x1dddf5 === -0x5 * -0x40f + 0x1 * -0xa7 + -0x13a1 && main();
    }
}
async function InsertCookie() {
    const _0x548ffa = _0x58829a, _0x2e2666 = {
            'Fsmtt': function (_0xad3c02, _0x533829) {
                return _0xad3c02 + _0x533829;
            },
            'qWkkz': function (_0x448939, _0x310571) {
                return _0x448939 + _0x310571;
            },
            'EAfse': function (_0x30ef22) {
                return _0x30ef22();
            },
            'aRdBQ': function (_0x2d8d6b) {
                return _0x2d8d6b();
            },
            'SPGip': function (_0x14cee5, _0x2e152c) {
                return _0x14cee5(_0x2e152c);
            },
            'iKLTp': function (_0x3bd72f, _0x8cf3d2, _0x1a029d) {
                return _0x3bd72f(_0x8cf3d2, _0x1a029d);
            },
            'vAkcN': _0x548ffa(0x189),
            'CFodx': function (_0x287508, _0x4cb68d, _0x33b3c7, _0x496ede) {
                return _0x287508(_0x4cb68d, _0x33b3c7, _0x496ede);
            },
            'hOBGQ': function (_0x43573c, _0x45c5fe) {
                return _0x43573c + _0x45c5fe;
            },
            'yduFn': function (_0x42d750, _0x3006a9) {
                return _0x42d750 + _0x3006a9;
            },
            'gesPp': function (_0x580549) {
                return _0x580549();
            },
            'rjwGd': function (_0x396b88) {
                return _0x396b88();
            },
            'UNkEy': _0x548ffa(0x249),
            'iIvaX': _0x548ffa(0x135),
            'XnqJv': function (_0x2ef406, _0x14a94f) {
                return _0x2ef406 + _0x14a94f;
            },
            'DMwqU': function (_0x349254, _0x568034) {
                return _0x349254 === _0x568034;
            },
            'bunWK': function (_0x21d71c) {
                return _0x21d71c();
            },
            'htCFj': function (_0x4ad9f8) {
                return _0x4ad9f8();
            },
            'FPsbW': function (_0x2adec3, _0x46c4cb) {
                return _0x2adec3 + _0x46c4cb;
            },
            'pKevv': function (_0x1710fe) {
                return _0x1710fe();
            },
            'IyXsx': function (_0x5e0aa0, _0x5decf9) {
                return _0x5e0aa0 + _0x5decf9;
            },
            'LnWix': function (_0x4a0ad7) {
                return _0x4a0ad7();
            }
        };
    try {
        setClear(), console[_0x548ffa(0xb1)](_0x2e2666[_0x548ffa(0x1f7)](_0x2e2666['qWkkz'](_0x2e2666['EAfse'](getTimeStamp), info), 'PLEASE\x20WAIT\x20FOR\x20THE\x20COUNTDOWN\x20|\x20' + green + '5s')), await delay(0x2329 + 0x3bf * 0x5 + -0x225c), _0x2e2666[_0x548ffa(0x151)](setClear), await _0x2e2666['SPGip'](animate, banner), console[_0x548ffa(0xb1)](), await _0x2e2666[_0x548ffa(0x1a2)](animate, _0x2e2666[_0x548ffa(0x165)](_0x2e2666['Fsmtt'](_0x2e2666[_0x548ffa(0x151)](getTimeStamp), error), yellow + _0x548ffa(0x13d) + red + _0x548ffa(0x16c)), -0x75e + -0xe * -0x17b + 0x1 * -0xd52), console[_0x548ffa(0xb1)]();
        const {email: _0xaf380a} = await inquirer[_0x548ffa(0x1ab)](prompts[_0x548ffa(0x2ae)]), _0x194178 = await _0x2e2666[_0x548ffa(0x1a2)](getPassword, _0x2e2666[_0x548ffa(0x1f7)](ask, _0x548ffa(0x13e)), { 'method': _0x2e2666['vAkcN'] });
        loading['start']();
        const _0x249812 = await _0x2e2666[_0x548ffa(0x169)](getCookie, _0xaf380a, _0x194178, port);
        loading[_0x548ffa(0x114)]();
        if (!_0x249812[_0x548ffa(0x231)](_0x548ffa(0x185))) {
            console[_0x548ffa(0xb1)](_0x2e2666[_0x548ffa(0x145)](_0x2e2666[_0x548ffa(0x15d)](_0x2e2666[_0x548ffa(0x190)](getTimeStamp), error), _0x249812)), await _0x2e2666[_0x548ffa(0x265)](Continue), await _0x2e2666[_0x548ffa(0x265)](CookieManagement);
            return;
        }
        console[_0x548ffa(0xb1)](_0x2e2666[_0x548ffa(0x15d)](_0x2e2666[_0x548ffa(0x1f7)](_0x2e2666['rjwGd'](getTimeStamp), info), _0x548ffa(0x280) + yellow + _0x548ffa(0x298)));
        if (_0x2e2032[_0x548ffa(0xc6)](cookieJSONLocate)) {
            cookiesJSONParsed[_0x2e2666['UNkEy']]['push'](_0x249812), cookiesJSONParsed[_0x2e2666[_0x548ffa(0x22d)]]['push'](_0xaf380a), _0x2e2032[_0x548ffa(0x1f2)](cookieJSONLocate, JSON['stringify'](cookiesJSONParsed, null, 0x54 * -0x1e + 0x1a3 * 0x17 + -0x1bcb * 0x1), _0x548ffa(0x10d)), UpdateCookies(), console[_0x548ffa(0xb1)](_0x2e2666['XnqJv'](getTimeStamp(), info) + ('New\x20Cookie\x20Added\x20|\x20Total\x20Cookiez\x20:\x20' + cookiesJSONParsed[_0x548ffa(0x249)][_0x548ffa(0x1ef)]));
            const {again: _0x2f1632} = await inquirer['prompt'](prompts[_0x548ffa(0x19c)]);
            if (_0x2e2666[_0x548ffa(0x15b)](_0x2f1632[_0x548ffa(0x24f)](), 'y')) {
                await _0x2e2666[_0x548ffa(0x273)](InsertCookie);
                return;
            }
            await _0x2e2666[_0x548ffa(0xca)](CookieManagement);
        } else
            console[_0x548ffa(0xb1)](_0x2e2666[_0x548ffa(0x28c)](_0x2e2666['EAfse'](getTimeStamp) + error, yellow + _0x548ffa(0x230) + white + _0x548ffa(0xc4))), console[_0x548ffa(0xb1)](_0x2e2666[_0x548ffa(0x1a1)](_0x2e2666[_0x548ffa(0x102)](getTimeStamp) + info, _0x548ffa(0x1d8))), process[_0x548ffa(0x19f)]();
    } catch (_0x43eaaf) {
        console[_0x548ffa(0xb1)](_0x2e2666[_0x548ffa(0x165)](getTimeStamp(), error) + _0x548ffa(0xd3)), console['log'](_0x2e2666['Fsmtt'](_0x2e2666[_0x548ffa(0x180)](_0x2e2666['LnWix'](getTimeStamp), error), _0x43eaaf[_0x548ffa(0x1f0)])), process['exit']();
    }
}
async function DeleteCookie() {
    const _0x2d92d0 = _0x58829a, _0x18dfb3 = {
            'LapDG': function (_0x54fd7a) {
                return _0x54fd7a();
            },
            'Yammb': function (_0x5f0442, _0x700a2a) {
                return _0x5f0442(_0x700a2a);
            },
            'VQYyi': function (_0x29e5ad, _0x40ffc6) {
                return _0x29e5ad === _0x40ffc6;
            },
            'scxsF': 'Cookies',
            'QdTwm': _0x2d92d0(0x1ea),
            'IBDeS': function (_0x145369) {
                return _0x145369();
            },
            'rYhWV': function (_0x4bd9d9, _0x4015c4) {
                return _0x4bd9d9 + _0x4015c4;
            },
            'WoLsF': function (_0x4c5dfa) {
                return _0x4c5dfa();
            },
            'TrSiG': function (_0x1c5e9a, _0x49940a) {
                return _0x1c5e9a + _0x49940a;
            },
            'aBjyT': function (_0x1d22c0) {
                return _0x1d22c0();
            },
            'dhAPV': function (_0x187032, _0x36fcbf) {
                return _0x187032 < _0x36fcbf;
            },
            'HQfQM': function (_0x5b2416, _0x485e01) {
                return _0x5b2416 + _0x485e01;
            },
            'sMuQP': function (_0x5efcbe) {
                return _0x5efcbe();
            },
            'SPVxU': function (_0xf80d7f, _0x4dbb5b) {
                return _0xf80d7f + _0x4dbb5b;
            },
            'GsrYc': _0x2d92d0(0x135),
            'gsCBj': function (_0x5ca31e, _0x75b456) {
                return _0x5ca31e + _0x75b456;
            },
            'MBSEQ': function (_0x553ba5, _0x368e03) {
                return _0x553ba5 + _0x368e03;
            },
            'SzdBT': _0x2d92d0(0x221),
            'DUdmK': function (_0x26dda6, _0x5cecea) {
                return _0x26dda6 >= _0x5cecea;
            },
            'FwRTE': _0x2d92d0(0xc3),
            'XqAeN': function (_0x259a83) {
                return _0x259a83();
            },
            'vyAYi': 'utf8',
            'psXyv': function (_0x51a1c2) {
                return _0x51a1c2();
            },
            'qAnbH': function (_0x28adce, _0x55e820) {
                return _0x28adce + _0x55e820;
            },
            'mcUFE': function (_0x17b021, _0x29911b) {
                return _0x17b021 + _0x29911b;
            },
            'vxtza': function (_0x35afea, _0x581777) {
                return _0x35afea + _0x581777;
            },
            'pohok': function (_0x55293d) {
                return _0x55293d();
            },
            'XvKxY': function (_0x127948, _0x5b7b27) {
                return _0x127948 - _0x5b7b27;
            },
            'mCUii': function (_0x27e972) {
                return _0x27e972();
            },
            'LxYFn': function (_0x14e00e, _0x50b8e7) {
                return _0x14e00e(_0x50b8e7);
            },
            'YwsDO': function (_0x137ee0, _0x500004) {
                return _0x137ee0 + _0x500004;
            }
        };
    _0x18dfb3['LapDG'](setClear), await _0x18dfb3['Yammb'](animate, banner), console[_0x2d92d0(0xb1)](), console[_0x2d92d0(0xb1)](cyan + _0x2d92d0(0xd7));
    if (_0x18dfb3['VQYyi'](cookiesJSONParsed[_0x18dfb3[_0x2d92d0(0xe0)]][_0x2d92d0(0x1ef)], -0x4ed + -0x1d42 + -0x1 * -0x222f)) {
        const _0x76b577 = _0x18dfb3[_0x2d92d0(0xc2)][_0x2d92d0(0xd1)]('|');
        let _0x3cd4bf = -0x84 * -0x41 + -0x1 * -0x18fd + -0x3a81;
        while (!![]) {
            switch (_0x76b577[_0x3cd4bf++]) {
            case '0':
                return;
            case '1':
                console[_0x2d92d0(0xb1)](cyan + _0x2d92d0(0xd7));
                continue;
            case '2':
                await _0x18dfb3[_0x2d92d0(0x146)](Continue);
                continue;
            case '3':
                console['log'](_0x18dfb3[_0x2d92d0(0x18c)](_0x18dfb3['rYhWV'](getTimeStamp(), info), _0x2d92d0(0xc8)));
                continue;
            case '4':
                console[_0x2d92d0(0xb1)]();
                continue;
            case '5':
                await _0x18dfb3[_0x2d92d0(0x1ba)](CookieManagement);
                continue;
            case '6':
                console['log'](_0x18dfb3['TrSiG'](_0x18dfb3[_0x2d92d0(0x24c)](getTimeStamp) + error, 'No\x20Cookies\x20Found.'));
                continue;
            }
            break;
        }
    }
    for (let _0x4d6b71 = 0x211b + -0x167 * 0x1 + -0x2 * 0xfda; _0x18dfb3[_0x2d92d0(0x24a)](_0x4d6b71, cookiesJSONParsed[_0x18dfb3[_0x2d92d0(0xe0)]][_0x2d92d0(0x1ef)]); _0x4d6b71++) {
        console[_0x2d92d0(0xb1)](_0x18dfb3[_0x2d92d0(0x1e4)](_0x18dfb3[_0x2d92d0(0x21c)](getTimeStamp), info) + (yellow + 'Email/ID/Number#' + _0x18dfb3[_0x2d92d0(0x21a)](_0x4d6b71, 0xf29 + -0xaa9 * -0x1 + -0x89b * 0x3) + '\x20' + green + (icon ? '\x20' : '') + cookiesJSONParsed[_0x18dfb3[_0x2d92d0(0x1cf)]][_0x4d6b71][_0x2d92d0(0x23f)](-0xb9c + 0x2a9 * -0x5 + 0x18e9, -0xb12 * -0x3 + -0x224 * 0x4 + -0x189c) + '...')), console[_0x2d92d0(0xb1)](_0x18dfb3[_0x2d92d0(0xf5)](_0x18dfb3[_0x2d92d0(0x284)](_0x18dfb3['IBDeS'](getTimeStamp), info), green + 'DATR' + yellow + '(' + _0x18dfb3['MBSEQ'](_0x4d6b71, -0x2057 + -0x11 * 0x133 + -0x34bb * -0x1) + ')\x20' + green + (icon ? _0x18dfb3[_0x2d92d0(0x296)] : '') + (_0x18dfb3[_0x2d92d0(0x1d1)](cookiesJSONParsed[_0x18dfb3[_0x2d92d0(0xe0)]][_0x4d6b71]['length'], -0x403 * -0x3 + -0x2 * -0x25f + -0x10b3) ? cookiesJSONParsed[_0x18dfb3[_0x2d92d0(0xe0)]][_0x4d6b71][_0x2d92d0(0x23f)](0x101a * 0x1 + -0x11dd * -0x1 + -0x2f * 0xb9, 0x19 * 0x125 + -0x168b + -0x5fe * 0x1) : cookiesJSONParsed[_0x18dfb3[_0x2d92d0(0xe0)]][_0x4d6b71]) + '...'));
    }
    console[_0x2d92d0(0xb1)](cyan + _0x2d92d0(0xd7)), console[_0x2d92d0(0xb1)]();
    let {cookieIndex: _0xe124a1} = await inquirer[_0x2d92d0(0x1ab)](prompts[_0x2d92d0(0x1ad)]);
    if (_0x18dfb3['VQYyi'](_0xe124a1[_0x2d92d0(0x24f)](), 'a'))
        try {
            const _0x17fd91 = _0x18dfb3['FwRTE'][_0x2d92d0(0xd1)]('|');
            let _0x2fb086 = -0x242a + -0x1931 + 0x3d5b;
            while (!![]) {
                switch (_0x17fd91[_0x2fb086++]) {
                case '0':
                    _0x18dfb3['XqAeN'](UpdateCookies);
                    continue;
                case '1':
                    _0x2e2032[_0x2d92d0(0x1f2)](cookieJSONLocate, JSON[_0x2d92d0(0x277)](cookiesJSONParsed, null, 0x7 * -0x44f + -0x15 * 0xec + 0x3187), _0x18dfb3[_0x2d92d0(0x1f5)]);
                    continue;
                case '2':
                    await _0x18dfb3[_0x2d92d0(0xb2)](Continue);
                    continue;
                case '3':
                    console[_0x2d92d0(0xb1)](_0x18dfb3[_0x2d92d0(0x118)](_0x18dfb3[_0x2d92d0(0xe7)](getTimeStamp(), info), _0x2d92d0(0x150)));
                    continue;
                case '4':
                    cookiesJSONParsed[_0x18dfb3['GsrYc']] = [];
                    continue;
                case '5':
                    cookiesJSONParsed[_0x2d92d0(0x249)] = [];
                    continue;
                case '6':
                    await CookieManagement();
                    continue;
                }
                break;
            }
        } catch (_0x1a78d2) {
            console[_0x2d92d0(0xb1)](_0x18dfb3[_0x2d92d0(0x109)](_0x18dfb3[_0x2d92d0(0x1e8)](_0x18dfb3[_0x2d92d0(0x11c)](getTimeStamp), error), _0x1a78d2['message'])), process[_0x2d92d0(0x19f)]();
        }
    else {
        if (_0x18dfb3['VQYyi'](_0xe124a1[_0x2d92d0(0x24f)](), 'b'))
            await _0x18dfb3[_0x2d92d0(0x1eb)](CookieManagement);
        else
            try {
                const _0x4f2b4d = _0x2d92d0(0x193)[_0x2d92d0(0xd1)]('|');
                let _0x2de727 = -0xae0 + -0x1acf + -0x25af * -0x1;
                while (!![]) {
                    switch (_0x4f2b4d[_0x2de727++]) {
                    case '0':
                        cookiesJSONParsed[_0x2d92d0(0x249)][_0x2d92d0(0x1ce)](_0x18dfb3[_0x2d92d0(0xcf)](_0xe124a1, 0x2021 + -0x1 * -0x248e + -0x44ae), 0x8 * -0x30a + 0x512 * -0x1 + -0x1 * -0x1d63);
                        continue;
                    case '1':
                        _0x2e2032[_0x2d92d0(0x1f2)](cookieJSONLocate, JSON[_0x2d92d0(0x277)](cookiesJSONParsed, null, -0x1ff7 * 0x1 + -0x191f + 0x1d * 0x1f8), _0x18dfb3[_0x2d92d0(0x1f5)]);
                        continue;
                    case '2':
                        _0x18dfb3[_0x2d92d0(0x1da)](UpdateCookies);
                        continue;
                    case '3':
                        await Continue();
                        continue;
                    case '4':
                        await CookieManagement();
                        continue;
                    case '5':
                        console['log'](getTimeStamp() + info + (yellow + 'Datr(' + _0xe124a1 + ')' + white + '\x20Removed\x20Successfully'));
                        continue;
                    case '6':
                        cookiesJSONParsed[_0x2d92d0(0x135)][_0x2d92d0(0x1ce)](_0xe124a1 - (0x152a + -0xb4c * -0x3 + 0x370d * -0x1), -0x245 * -0x9 + -0x1d31 + 0x8c5);
                        continue;
                    case '7':
                        _0xe124a1 = _0x18dfb3[_0x2d92d0(0xf7)](parseInt, _0xe124a1);
                        continue;
                    }
                    break;
                }
            } catch (_0xe56640) {
                console[_0x2d92d0(0xb1)](_0x18dfb3[_0x2d92d0(0x1f4)](_0x18dfb3[_0x2d92d0(0x1ec)](getTimeStamp), error) + _0xe56640['message']), process['exit']();
            }
    }
}
async function FBLikers() {
    const _0x176b16 = _0x58829a, _0x352851 = {
            'iBiGR': function (_0x19d2e9) {
                return _0x19d2e9();
            },
            'bCMfa': function (_0x4ad0ef, _0x4bd274, _0x3f781f) {
                return _0x4ad0ef(_0x4bd274, _0x3f781f);
            },
            'fBGcq': function (_0x382542, _0x5e0edc) {
                return _0x382542 + _0x5e0edc;
            },
            'dRzBM': function (_0x44d9ea) {
                return _0x44d9ea();
            },
            'auNNX': function (_0x3d94bd, _0x54dd9f) {
                return _0x3d94bd + _0x54dd9f;
            },
            'bqIHH': function (_0x1c0cd6, _0x4f36b8) {
                return _0x1c0cd6 + _0x4f36b8;
            },
            'VjMGE': function (_0x25a6ea) {
                return _0x25a6ea();
            },
            'HwTFY': function (_0x30658f, _0xea3fab) {
                return _0x30658f === _0xea3fab;
            },
            'GkBus': function (_0x389ea9) {
                return _0x389ea9();
            },
            'sPAjm': '3|4|0|2|1',
            'wuhNB': function (_0x440b7b) {
                return _0x440b7b();
            },
            'rYjIy': function (_0x3d06f6, _0xac0140) {
                return _0x3d06f6 + _0xac0140;
            },
            'NfEJn': _0x176b16(0x176),
            'snVTU': _0x176b16(0x1b1),
            'YMWDO': _0x176b16(0x23e),
            'DQKii': 'ANGRY',
            'aeZKN': function (_0xf6b5f8, _0x1ce500) {
                return _0xf6b5f8 < _0x1ce500;
            },
            'vqSwk': function (_0x4d7403, _0x3141d3) {
                return _0x4d7403 + _0x3141d3;
            },
            'jomDY': _0x176b16(0x221),
            'CuvLD': function (_0x5d3d42, _0x47b9ee) {
                return _0x5d3d42 >= _0x47b9ee;
            },
            'DvOLr': _0x176b16(0x249),
            'OXYSE': function (_0x418750, _0x280559) {
                return _0x418750 + _0x280559;
            },
            'DjXLC': function (_0x4d84c6) {
                return _0x4d84c6();
            },
            'VayrM': _0x176b16(0x161),
            'mgQfP': _0x176b16(0x183),
            'SQfiE': 'application/json',
            'DBsUL': _0x176b16(0x172),
            'uzzEG': function (_0x24663d, _0x33bc5f) {
                return _0x24663d === _0x33bc5f;
            },
            'aRWyJ': 'FAILED',
            'GFgnm': _0x176b16(0x1b9),
            'haNah': _0x176b16(0x20f),
            'LcFBL': function (_0x2269f3, _0x24c1c3) {
                return _0x2269f3 + _0x24c1c3;
            },
            'Tbfne': function (_0x1b91f1, _0x1934d1) {
                return _0x1b91f1 + _0x1934d1;
            },
            'BSnpD': 'wait',
            'StXjn': function (_0x22ab66, _0x1c1fa2) {
                return _0x22ab66 + _0x1c1fa2;
            },
            'LVpbg': _0x176b16(0x149),
            'LjwIT': function (_0x4e65f5, _0x53c95a) {
                return _0x4e65f5 + _0x53c95a;
            },
            'KZHnN': function (_0x2331f1, _0x5ca4ee) {
                return _0x2331f1 + _0x5ca4ee;
            },
            'Nqtfo': function (_0x218ac8, _0x39e585) {
                return _0x218ac8 + _0x39e585;
            },
            'iGeBl': function (_0x53337d, _0x316495) {
                return _0x53337d + _0x316495;
            },
            'WcMoR': function (_0x350acb, _0x56d621) {
                return _0x350acb + _0x56d621;
            },
            'qpjVE': _0x176b16(0x129),
            'ZVhOW': function (_0x1ef83b, _0x2bb56d) {
                return _0x1ef83b + _0x2bb56d;
            },
            'grUTm': function (_0x1fca43) {
                return _0x1fca43();
            },
            'rnhyo': function (_0x1313d8, _0x5c65ea) {
                return _0x1313d8 === _0x5c65ea;
            },
            'lRIQt': _0x176b16(0xbe),
            'aNVjx': function (_0x4b52e1, _0x5023ec) {
                return _0x4b52e1(_0x5023ec);
            },
            'kDqJe': function (_0x209306, _0x311ae3) {
                return _0x209306(_0x311ae3);
            },
            'NahJa': _0x176b16(0x126),
            'JchDe': function (_0x259059, _0x4f8ea0) {
                return _0x259059 + _0x4f8ea0;
            },
            'Kvxxa': function (_0x5f17c5, _0x3c0e66) {
                return _0x5f17c5 + _0x3c0e66;
            },
            'Qzlqz': function (_0x274bc6) {
                return _0x274bc6();
            },
            'KJbru': function (_0x45dcd7, _0x4190af) {
                return _0x45dcd7 + _0x4190af;
            },
            'qXhyS': function (_0x172e1d, _0x10a813) {
                return _0x172e1d === _0x10a813;
            },
            'vOktQ': _0x176b16(0x1c9),
            'crEeM': _0x176b16(0x14e),
            'MlWqV': 'maintenance',
            'xQxvn': function (_0x414448, _0xb2d8b1) {
                return _0x414448 + _0xb2d8b1;
            },
            'flxnx': function (_0x5863e3, _0x739212) {
                return _0x5863e3 + _0x739212;
            },
            'HUOaq': function (_0x548f63, _0x4a5508) {
                return _0x548f63 + _0x4a5508;
            },
            'FbQtu': function (_0x5cb235, _0x4a33ca) {
                return _0x5cb235 + _0x4a33ca;
            },
            'WKoSL': function (_0xb6d24f, _0x4dcd47) {
                return _0xb6d24f + _0x4dcd47;
            },
            'tZbQW': function (_0xe3df56) {
                return _0xe3df56();
            },
            'ezLjm': _0x176b16(0x19e),
            'BMLHL': function (_0x9613b4) {
                return _0x9613b4();
            },
            'eSMlI': function (_0x560874) {
                return _0x560874();
            },
            'WiVBY': function (_0x1bf30d) {
                return _0x1bf30d();
            },
            'DQJum': function (_0x3f6fea, _0x248e38) {
                return _0x3f6fea + _0x248e38;
            },
            'YCTqv': function (_0x48ffcd, _0x4aaa48) {
                return _0x48ffcd + _0x4aaa48;
            },
            'OPWKB': _0x176b16(0xfd),
            'LhmbX': function (_0x23c885, _0x410205) {
                return _0x23c885 + _0x410205;
            },
            'ClRTj': function (_0xc356f5) {
                return _0xc356f5();
            }
        };
    _0x352851['iBiGR'](setClear), await _0x352851['bCMfa'](animate, _0x352851[_0x176b16(0x1c2)](_0x352851[_0x176b16(0x215)](getTimeStamp), info) + (green + _0x176b16(0x205) + white + _0x176b16(0x121)), 0x149f + -0x36d * -0xa + -0x1 * 0x36d7), await _0x352851['bCMfa'](animate, _0x352851[_0x176b16(0x293)](_0x352851[_0x176b16(0x22a)](_0x352851['iBiGR'](getTimeStamp), info), green + _0x176b16(0x205) + white + 'DON\x27T\x20USE\x20THE\x20FACEBOOK\x20APPLICATION\x20TO\x20COPY\x20THE\x20LINK\x20OF\x20THE\x20POST,\x20USE\x20FACEBOOK\x20LITE\x20OR\x20CHROME\x20INSTEAD.'), -0x1 * 0x1dbf + 0x1d * 0xd0 + 0x639), await _0x352851[_0x176b16(0x215)](Continue), _0x352851['VjMGE'](setClear), await animate(banner), console[_0x176b16(0xb1)]();
    const {url: _0x34fe2c} = await inquirer[_0x176b16(0x1ab)](prompts['getPostURL']);
    if (_0x352851[_0x176b16(0x261)](_0x34fe2c[_0x176b16(0x24f)](), 'b')) {
        await _0x352851[_0x176b16(0x14c)](main);
        return;
    }
    let {react_type: _0x11046e} = await inquirer[_0x176b16(0x1ab)](prompts['getReaction']);
    if (_0x352851['HwTFY'](cookiesJSONParsed['Cookies'][_0x176b16(0x1ef)], 0x1f * -0xd3 + 0x669 * 0x1 + 0x1c * 0xaf)) {
        const _0x4e8fa2 = _0x352851[_0x176b16(0x246)]['split']('|');
        let _0x5f1d91 = 0x158b * 0x1 + 0xc4f + -0x4d6 * 0x7;
        while (!![]) {
            switch (_0x4e8fa2[_0x5f1d91++]) {
            case '0':
                await _0x352851[_0x176b16(0x1a6)](Continue);
                continue;
            case '1':
                return;
            case '2':
                await _0x352851['iBiGR'](CookieManagement);
                continue;
            case '3':
                console[_0x176b16(0xb1)](_0x352851[_0x176b16(0x1c2)](_0x352851[_0x176b16(0x247)](_0x352851[_0x176b16(0x21f)](getTimeStamp), error), 'No\x20Cookies\x20Found.'));
                continue;
            case '4':
                console[_0x176b16(0xb1)](_0x352851['auNNX'](getTimeStamp(), info) + _0x176b16(0xc8));
                continue;
            }
            break;
        }
    }
    await _0x352851[_0x176b16(0x182)](logInfo, _0x34fe2c, _0x11046e);
    let _0x4ec5a1 = 0x282 * 0x7 + -0x1902 + -0xd4 * -0x9, _0x57b135 = -0xe11 + -0x22cd + 0x30df, _0x431e0b;
    icon ? _0x11046e[_0x176b16(0x231)](_0x352851['NfEJn']) ? (_0x431e0b = _0x11046e[_0x176b16(0x23f)](-(-0xa53 * 0x1 + -0xe5 + -0x5 * -0x240), undefined), _0x11046e = _0x11046e['slice'](0x1b2d + -0xd9a + 0x6 * -0x241, -(0x164c + 0x685 + -0x1cc9))) : (_0x431e0b = _0x11046e[_0x176b16(0x231)](_0x352851[_0x176b16(0x224)]) || _0x11046e[_0x176b16(0x231)](_0x352851[_0x176b16(0x124)]) || _0x11046e[_0x176b16(0x231)](_0x352851[_0x176b16(0x1c3)]) ? _0x11046e['slice'](-(-0x3c7 * 0x9 + -0x2 * -0x6f3 + 0x1 * 0x1421), undefined) : _0x11046e[_0x176b16(0x23f)](-(-0x1 * -0xebf + 0x6f * -0xa + -0xa62), undefined), _0x11046e = _0x11046e[_0x176b16(0x231)](_0x352851[_0x176b16(0x224)]) || _0x11046e['includes'](_0x352851[_0x176b16(0x124)]) || _0x11046e[_0x176b16(0x231)](_0x352851[_0x176b16(0x1c3)]) ? _0x11046e['slice'](0x5af * 0x6 + -0x1ad2 + -0x3 * 0x26b, -(-0x16d * 0x5 + 0x98c + -0x263 * 0x1)) : _0x11046e[_0x176b16(0x23f)](0x24c2 * -0x1 + 0x1 * -0x192 + 0x265b, -(-0x113a + -0x1 * -0xd87 + 0x3ba))) : _0x11046e['includes'](_0x352851[_0x176b16(0x13f)]) ? _0x11046e = _0x11046e[_0x176b16(0x23f)](0x9 * -0x38b + -0x8ac + 0x289c, -(0x69b * -0x1 + 0xb7b + -0x4db)) : _0x11046e = _0x11046e['slice'](0x1ac2 + 0x10f0 + -0x2bab, -(-0x2 * 0x31d + -0x8d4 + -0xe3 * -0x11));
    _0x431e0b = _0x431e0b ? _0x431e0b[_0x176b16(0x131)]() : null;
    let _0x38e2aa;
    for (let _0x58a713 = -0x139 * -0x9 + 0x32a * 0x3 + -0x147f; _0x352851[_0x176b16(0xd5)](_0x58a713, cookiesJSONParsed[_0x176b16(0x249)]['length']); _0x58a713++) {
        try {
            console[_0x176b16(0xb1)](_0x352851[_0x176b16(0x1c2)](_0x352851[_0x176b16(0xe6)](getTimeStamp(), info), yellow + 'Using\x20Cookie\x20Datr#' + _0x57b135 + _0x176b16(0x276) + green + (icon ? _0x352851[_0x176b16(0x1b3)] : '') + (_0x352851[_0x176b16(0x1df)](cookiesJSONParsed[_0x352851[_0x176b16(0x29c)]][_0x58a713][_0x176b16(0x1ef)], -0x11da + -0xb * -0x184 + -0x1 * -0x142) ? cookiesJSONParsed[_0x352851['DvOLr']][_0x58a713]['slice'](-0x1 * 0x13b3 + -0x125 * -0x6 + 0xcd5, 0x11be + -0x5ca + -0xbe0) : cookiesJSONParsed[_0x352851['DvOLr']][_0x58a713]['slice'](-0xb3a + -0xadb + 0x1615 * 0x1, 0xf0 * -0x13 + 0x2545 + -0x136b)) + '...')), console[_0x176b16(0xb1)](_0x352851[_0x176b16(0x285)](_0x352851[_0x176b16(0x285)](_0x352851[_0x176b16(0x17b)](getTimeStamp), info), '' + green + (icon ? '\x20' : '') + _0x176b16(0x159))), _0x38e2aa = cookiesJSONParsed['Emails'][_0x58a713];
            const _0x3ff38f = {
                    'headers': {
                        'User-Agent': _0x352851[_0x176b16(0x19b)],
                        'Connection': _0x176b16(0x295),
                        'Accept-Encoding': _0x352851['mgQfP'],
                        'Content-Type': _0x352851[_0x176b16(0xfa)],
                        'Cookie': cookiesJSONParsed[_0x352851[_0x176b16(0x29c)]][_0x58a713]
                    },
                    'httpAgent': httpAgent,
                    'httpsAgent': httpsAgent,
                    'timeout': 0x0
                }, _0x4f3e36 = {
                    'post_id': _0x34fe2c,
                    'react_type': _0x11046e,
                    'version': _0x352851[_0x176b16(0x163)]
                }, _0x572c04 = await axios[_0x176b16(0x1e7)](api, _0x4f3e36, _0x3ff38f), _0x48cacc = _0x572c04[_0x176b16(0x25e)];
            if (_0x352851[_0x176b16(0x1e9)](_0x48cacc[_0x176b16(0x157)], _0x352851[_0x176b16(0x22b)])) {
                if (_0x48cacc[_0x176b16(0x1f0)]['includes'](_0x352851['GFgnm']))
                    console['log'](_0x352851[_0x176b16(0x215)](getTimeStamp) + error + ('' + yellow + (icon ? _0x352851[_0x176b16(0x292)] : '') + _0x176b16(0x1e5) + _0x57b135 + ')\x20' + _0x352851['OXYSE'](_0x352851['fBGcq'](red, '#'), _0x48cacc['status']) + '\x20|\x20' + blue + '@KairuDev')), console[_0x176b16(0xb1)](_0x352851['auNNX'](_0x352851[_0x176b16(0xc0)](getTimeStamp(), error), _0x48cacc[_0x176b16(0x1f0)]['toUpperCase']())), console[_0x176b16(0xb1)](_0x352851[_0x176b16(0x17a)](_0x352851[_0x176b16(0x17b)](getTimeStamp) + info, _0x176b16(0x106)));
                else {
                    if (_0x48cacc[_0x176b16(0x1f0)][_0x176b16(0x231)](_0x352851['BSnpD'])) {
                        const _0x141ca3 = checkCooldown(_0x38e2aa);
                        console[_0x176b16(0xb1)](_0x352851['StXjn'](getTimeStamp() + error, '' + yellow + (icon ? _0x352851[_0x176b16(0x1d7)] : '') + _0x176b16(0x1e5) + _0x57b135 + ')\x20' + _0x352851[_0x176b16(0x20c)](_0x352851[_0x176b16(0x20c)](red, '#'), _0x48cacc['status']) + _0x176b16(0x210) + blue + _0x176b16(0x22c))), console[_0x176b16(0xb1)](_0x352851['OXYSE'](_0x352851[_0x176b16(0x1a6)](getTimeStamp), error) + _0x48cacc[_0x176b16(0x1f0)][_0x176b16(0x234)]()), _0x141ca3[_0x176b16(0xef)] && _0x141ca3['hr'] ? console[_0x176b16(0xb1)](_0x352851[_0x176b16(0x20c)](_0x352851[_0x176b16(0x270)](getTimeStamp(), info), '' + yellow + (icon ? _0x352851[_0x176b16(0x1b3)] : '') + 'Datr(' + _0x57b135 + ')' + green + _0x176b16(0xba) + white + ':\x20' + _0x352851[_0x176b16(0x29f)](green, _0x141ca3['hr']))) : (console[_0x176b16(0xb1)](_0x352851[_0x176b16(0x22a)](_0x352851[_0x176b16(0x255)](_0x352851[_0x176b16(0x21f)](getTimeStamp), info), _0x176b16(0x272) + _0x38e2aa + _0x176b16(0x278))), console[_0x176b16(0xb1)](_0x352851[_0x176b16(0x138)](_0x352851[_0x176b16(0x247)](getTimeStamp(), error), _0x141ca3['errorMsg']) ? _0x141ca3[_0x176b16(0xf0)] : _0x176b16(0x1de)));
                    } else
                        console[_0x176b16(0xb1)](_0x352851[_0x176b16(0xdc)](getTimeStamp(), error) + ('' + yellow + (icon ? _0x352851[_0x176b16(0x213)] : '') + _0x176b16(0x1e5) + _0x57b135 + ')\x20' + _0x352851[_0x176b16(0x29f)](_0x352851[_0x176b16(0x1c2)](red, '#'), _0x48cacc[_0x176b16(0x157)]) + _0x176b16(0x210) + blue + _0x176b16(0x22c))), console[_0x176b16(0xb1)](_0x352851[_0x176b16(0x107)](_0x352851['Nqtfo'](_0x352851['grUTm'](getTimeStamp), error), _0x48cacc[_0x176b16(0x1f0)][_0x176b16(0x234)]()[_0x176b16(0x131)]()));
                }
            } else {
                if (_0x352851[_0x176b16(0x174)](_0x48cacc[_0x176b16(0x157)], _0x352851['lRIQt'])) {
                    const _0x5136e9 = /\d+/g;
                    let _0x5566ce = _0x48cacc[_0x176b16(0x1f0)][_0x176b16(0xe9)](_0x5136e9)[0xf07 + -0xda0 + -0x167];
                    _0x5566ce = _0x352851[_0x176b16(0x269)](parseInt, _0x5566ce), _0x4ec5a1 += _0x5566ce;
                    const _0x1ec8e9 = _0x352851['kDqJe'](addCooldown, _0x38e2aa);
                    console[_0x176b16(0xb1)](_0x352851[_0x176b16(0x255)](getTimeStamp(), info) + ('' + yellow + (icon ? _0x352851[_0x176b16(0x15a)] : '') + _0x176b16(0x1e5) + _0x57b135 + ')\x20' + _0x352851[_0x176b16(0x1c2)](_0x352851['fBGcq'](green, '#'), _0x48cacc[_0x176b16(0x157)]) + '\x20|\x20' + yellow + _0x11046e + '\x20' + (_0x431e0b ? _0x431e0b : '') + yellow + '\x20:\x20' + _0x352851[_0x176b16(0xce)](green, _0x5566ce) + _0x176b16(0x210) + blue + _0x176b16(0x22c))), console[_0x176b16(0xb1)](_0x352851[_0x176b16(0x22e)](_0x352851[_0x176b16(0x17b)](getTimeStamp), info) + ('' + yellow + (icon ? '󰆘\x20' : '') + _0x176b16(0x1e5) + _0x57b135 + ')' + green + _0x176b16(0xba) + white + ':\x20' + green + '\x20' + (_0x1ec8e9[_0x176b16(0x1fb)] ? _0x1ec8e9['hr'] : _0x1ec8e9['errorMsg'] ? _0x1ec8e9[_0x176b16(0xf0)] : _0x176b16(0xc1)))), _0x1ec8e9[_0x176b16(0xf0)] && (console[_0x176b16(0xb1)](_0x352851['vqSwk'](_0x352851[_0x176b16(0x110)](getTimeStamp) + info, _0x176b16(0x186) + _0x38e2aa + _0x176b16(0x278))), console[_0x176b16(0xb1)](_0x352851[_0x176b16(0x12a)](_0x352851[_0x176b16(0x215)](getTimeStamp) + error, _0x1ec8e9[_0x176b16(0xf0)])));
                } else {
                    if (_0x352851[_0x176b16(0x18e)](_0x48cacc[_0x176b16(0x157)], _0x352851[_0x176b16(0x17d)])) {
                        if (_0x48cacc[_0x176b16(0x1f0)][_0x176b16(0x231)](_0x352851[_0x176b16(0x288)]))
                            console[_0x176b16(0xb1)](_0x352851[_0x176b16(0x270)](_0x352851[_0x176b16(0x2ad)](getTimeStamp), error) + (_0x176b16(0xfc) + red + _0x176b16(0x1b5)));
                        else
                            _0x48cacc['message']['includes'](_0x352851[_0x176b16(0x17e)]) ? console[_0x176b16(0xb1)](_0x352851['LjwIT'](_0x352851[_0x176b16(0x22a)](getTimeStamp(), error), _0x176b16(0xfc) + red + _0x176b16(0x2ab))) : console[_0x176b16(0xb1)](_0x352851[_0x176b16(0xf6)](_0x352851[_0x176b16(0x215)](getTimeStamp), error) + (_0x176b16(0xfc) + red + _0x176b16(0x19a)));
                    } else
                        console['log'](_0x352851[_0x176b16(0x255)](_0x352851['flxnx'](_0x352851['VjMGE'](getTimeStamp), error), _0x176b16(0xfc) + red + _0x176b16(0x122)));
                }
            }
            _0x57b135++;
        } catch (_0x315cb3) {
            console['log'](_0x352851[_0x176b16(0x283)](_0x352851[_0x176b16(0x279)](getTimeStamp(), info), '' + yellow + (icon ? _0x352851['jomDY'] : '') + _0x176b16(0x1e5) + _0x57b135 + ')\x20' + green + _0x176b16(0x158) + yellow + _0x11046e + '\x20' + (_0x431e0b ? _0x431e0b : '') + white + '\x20:\x20' + green + 'Unidentified\x20|\x20' + blue + _0x176b16(0x22c))), console[_0x176b16(0xb1)](_0x352851[_0x176b16(0x178)](_0x352851[_0x176b16(0xce)](_0x352851[_0x176b16(0x107)](_0x352851[_0x176b16(0x1f6)](getTimeStamp), error), _0x352851[_0x176b16(0x1bb)]), _0x315cb3['message'])), delete cooldownData[_0x38e2aa];
            try {
                _0x2e2032[_0x176b16(0x1f2)](cooldownJSON, JSON[_0x176b16(0x277)](cooldownData, null, 0xa05 + 0x245 + -0xc48), _0x176b16(0x10d)), _0x352851[_0x176b16(0xe1)](updateCooldownData);
                const _0x5fed1f = addCooldown(_0x38e2aa);
                _0x5fed1f[_0x176b16(0xf0)] && (console[_0x176b16(0xb1)](_0x352851['Tbfne'](_0x352851[_0x176b16(0x19d)](getTimeStamp) + info, _0x176b16(0x186) + _0x38e2aa + '.')), console['log'](_0x352851[_0x176b16(0xdc)](_0x352851['iGeBl'](getTimeStamp(), error), _0x5fed1f[_0x176b16(0xf0)])));
            } catch (_0x1be15a) {
                console['log'](_0x352851[_0x176b16(0x279)](_0x352851[_0x176b16(0x134)](getTimeStamp) + error, _0x1be15a['message']));
            }
            _0x57b135++;
        }
    }
    !_0x4ec5a1 ? console[_0x176b16(0xb1)](_0x352851[_0x176b16(0xec)](_0x352851[_0x176b16(0x20a)](_0x352851['BMLHL'](getTimeStamp), info), '' + yellow + (_0x431e0b ? _0x431e0b : '') + yellow + _0x176b16(0x105) + white + _0x176b16(0x195) + green + (icon ? _0x352851['OPWKB'] : '') + _0x176b16(0x1de))) : console[_0x176b16(0xb1)](_0x352851[_0x176b16(0x108)](_0x352851[_0x176b16(0x20c)](_0x352851['ClRTj'](getTimeStamp), info), '' + yellow + (_0x431e0b ? _0x431e0b : '') + yellow + _0x176b16(0x105) + white + _0x176b16(0x195) + (green + _0x4ec5a1))), await _0x352851[_0x176b16(0x110)](Goback);
}
async function logInfo(_0x263eb3, _0x30e787) {
    const _0x5f42d0 = _0x58829a, _0x539f58 = {
            'XRhTa': function (_0x4d5cff, _0x2e5a7c) {
                return _0x4d5cff + _0x2e5a7c;
            },
            'HAyhF': function (_0x57ee22) {
                return _0x57ee22();
            },
            'oXDGE': _0x5f42d0(0xb4),
            'egzru': _0x5f42d0(0x1d0)
        };
    await animate(_0x539f58[_0x5f42d0(0x220)](_0x539f58[_0x5f42d0(0x164)](getTimeStamp) + info, (icon ? _0x539f58[_0x5f42d0(0x184)] : '') + _0x5f42d0(0x26a) + (green + _0x263eb3) + (icon ? _0x539f58[_0x5f42d0(0x16b)] : '')), -0x92d + 0xa * -0x23c + 0x1f94), await animate(_0x539f58[_0x5f42d0(0x220)](getTimeStamp() + info, (icon ? '\x20' : '') + _0x5f42d0(0x287) + (green + _0x30e787)), 0x15b * 0x19 + -0x2518 + -0x4c * -0xb);
}
async function loggingSymbols() {
    const _0x2d39e5 = _0x58829a, _0x18ad4d = {
            'AFUyq': function (_0x10fcff) {
                return _0x10fcff();
            },
            'VQaYp': 'BACK',
            'gBAXR': function (_0x5bfacf) {
                return _0x5bfacf();
            },
            'ABmOv': 'ICON',
            'UnIJu': function (_0x3fd2d8, _0x31eba2) {
                return _0x3fd2d8(_0x31eba2);
            },
            'HYcZq': function (_0x2cceae, _0x3c9d64) {
                return _0x2cceae + _0x3c9d64;
            },
            'GavjK': function (_0x5d8b9d, _0x4ee846) {
                return _0x5d8b9d + _0x4ee846;
            },
            'WBEfY': function (_0x1e8c78) {
                return _0x1e8c78();
            },
            'LaKvU': function (_0x1441fc, _0x5d2b4f) {
                return _0x1441fc === _0x5d2b4f;
            },
            'JNQAH': _0x2d39e5(0x27b),
            'tBcWC': _0x2d39e5(0x101),
            'fYEzx': _0x2d39e5(0x10d),
            'srEfz': function (_0x13d1f1, _0x5b6138, _0x5aa69d) {
                return _0x13d1f1(_0x5b6138, _0x5aa69d);
            },
            'OVBPC': function (_0x1c961f, _0x5df85d) {
                return _0x1c961f + _0x5df85d;
            },
            'ewSmk': function (_0x573d6e) {
                return _0x573d6e();
            },
            'TpSIr': function (_0x77a1c4, _0x49edb0) {
                return _0x77a1c4 + _0x49edb0;
            },
            'JKFYr': function (_0x528ce0) {
                return _0x528ce0();
            },
            'TcAjC': function (_0x26da2a, _0x73794d) {
                return _0x26da2a + _0x73794d;
            },
            'ovjLU': function (_0x41970e, _0x391558) {
                return _0x41970e + _0x391558;
            },
            'Yyelw': function (_0x292ffc) {
                return _0x292ffc();
            }
        };
    try {
        _0x18ad4d[_0x2d39e5(0xcb)](setClear), await animate(banner), console['log']();
        const {loggingSym: _0x433ec3} = await inquirer['prompt'](prompts[_0x2d39e5(0x257)]);
        if (_0x433ec3[_0x2d39e5(0x231)](_0x18ad4d['VQaYp'])) {
            await _0x18ad4d[_0x2d39e5(0x27c)](main);
            return;
        }
        let _0x10fec4 = _0x433ec3[_0x2d39e5(0x231)](_0x18ad4d[_0x2d39e5(0x23a)]);
        if (_0x10fec4 && _0x433ec3[_0x2d39e5(0x231)](_0x2d39e5(0x26f))) {
            await _0x18ad4d[_0x2d39e5(0x227)](animate, _0x18ad4d[_0x2d39e5(0x2a4)](_0x18ad4d[_0x2d39e5(0x2a4)](getTimeStamp(), info), 'Do\x20you\x20see\x20a\x20penguin\x20icon\x20below?\x20If\x20you\x20see\x20a\x20box\x20or\x20something\x20else,\x20it\x20means\x20that\x20Nerd\x20Fonts\x20are\x20not\x20installed.')), console[_0x2d39e5(0xb1)](_0x18ad4d[_0x2d39e5(0xb8)](_0x18ad4d[_0x2d39e5(0xb8)](_0x18ad4d[_0x2d39e5(0x119)](getTimeStamp), info), '\x20'));
            let {user: _0x4dd99c} = await inquirer['prompt'](prompts['testUserIcon']);
            if (_0x18ad4d[_0x2d39e5(0x1b7)](_0x4dd99c[_0x2d39e5(0x24f)](), 'y'))
                _0x10fec4 = !![];
            else {
                if (_0x18ad4d[_0x2d39e5(0x1b7)](_0x4dd99c[_0x2d39e5(0x24f)](), 'n')) {
                    const _0x2bd4fd = _0x18ad4d['GavjK'](fontDir, '/') + font, _0x6ba642 = $HOME + '/' + $termux;
                    !_0x2e2032['existsSync'](_0x6ba642) && _0x18ad4d[_0x2d39e5(0x227)](execSync, _0x2d39e5(0x200) + _0x6ba642), _0x18ad4d['UnIJu'](execSync, _0x2d39e5(0x155) + _0x2bd4fd + '\x20' + _0x18ad4d[_0x2d39e5(0x2a4)](_0x6ba642 + '/', $termuxttf)), cookiesJSONParsed[_0x18ad4d[_0x2d39e5(0x29d)]][_0x18ad4d[_0x2d39e5(0xd6)]] = !![], _0x2e2032[_0x2d39e5(0x1f2)](cookieJSONLocate, JSON['stringify'](cookiesJSONParsed, null, -0x9f * 0x2b + 0x1999 + 0xb * 0x1a), _0x18ad4d[_0x2d39e5(0x24b)]), await _0x18ad4d['srEfz'](animate, _0x18ad4d[_0x2d39e5(0x2a4)](getTimeStamp(), info) + _0x2d39e5(0x1ed), -0x2 * -0x4a9 + 0x1cc5 + -0x2612), await animate(_0x18ad4d[_0x2d39e5(0x11a)](_0x18ad4d[_0x2d39e5(0x2a4)](_0x18ad4d['AFUyq'](getTimeStamp), info), 'Please\x20restart\x20your\x20Termux\x20application\x20and\x20then\x20run:\x20' + green + _0x2d39e5(0xc5)), 0x1ab4 + -0x163d + 0x1 * -0x472), process[_0x2d39e5(0x19f)]();
                }
            }
        }
        cookiesJSONParsed[_0x18ad4d[_0x2d39e5(0x29d)]][_0x18ad4d[_0x2d39e5(0xd6)]] = _0x10fec4, _0x2e2032[_0x2d39e5(0x1f2)](cookieJSONLocate, JSON[_0x2d39e5(0x277)](cookiesJSONParsed, null, 0xf5 * 0x21 + -0x8 * 0x230 + -0xe13), _0x2d39e5(0x10d)), _0x18ad4d[_0x2d39e5(0x27c)](UpdateCookies), console[_0x2d39e5(0xb1)]('' + _0x18ad4d[_0x2d39e5(0x1bd)](getTimeStamp) + info + 'Logging\x20Symbols\x20Changed\x20Successfully'), console[_0x2d39e5(0xb1)]('' + getTimeStamp() + info + _0x2d39e5(0x12f) + green + _0x2d39e5(0xc5)), process[_0x2d39e5(0x19f)]();
    } catch (_0x32e611) {
        console[_0x2d39e5(0xb1)](_0x18ad4d[_0x2d39e5(0x216)](_0x18ad4d[_0x2d39e5(0x264)](getTimeStamp) + error, _0x2d39e5(0xf4))), console[_0x2d39e5(0xb1)](_0x18ad4d[_0x2d39e5(0x1ac)](_0x18ad4d[_0x2d39e5(0x20b)](_0x18ad4d['Yyelw'](getTimeStamp), error), _0x32e611[_0x2d39e5(0x1f0)])), process[_0x2d39e5(0x19f)]();
    }
}
async function main() {
    const _0x268cd9 = _0x58829a, _0x370f78 = {
            'AVppx': function (_0x583d99) {
                return _0x583d99();
            },
            'FltKp': function (_0x177f1d, _0x5e88bd) {
                return _0x177f1d(_0x5e88bd);
            },
            'KmcXG': function (_0x27e6c7, _0x544e0c, _0x2740d0) {
                return _0x27e6c7(_0x544e0c, _0x2740d0);
            },
            'lcSMr': _0x268cd9(0x1fd),
            'gAexD': _0x268cd9(0x1d2),
            'FXDSJ': _0x268cd9(0x143),
            'EyHJx': '󱔁\x20\x20',
            'EldUO': function (_0x8461f3, _0x282776) {
                return _0x8461f3(_0x282776);
            },
            'ANocb': function (_0xc6b3a4, _0x2dee04) {
                return _0xc6b3a4 === _0x2dee04;
            },
            'XXDZC': function (_0x23cd9b, _0x7caf23) {
                return _0x23cd9b === _0x7caf23;
            },
            'TMKBm': function (_0x4da7f2) {
                return _0x4da7f2();
            },
            'IzONL': function (_0x23282e, _0x887eb6) {
                return _0x23282e === _0x887eb6;
            },
            'YHiiT': function (_0x192e4a) {
                return _0x192e4a();
            },
            'memYS': function (_0x5400aa, _0x52dfba) {
                return _0x5400aa === _0x52dfba;
            }
        };
    _0x370f78[_0x268cd9(0x22f)](setClear), await _0x370f78[_0x268cd9(0x282)](animate, banner), await _0x370f78[_0x268cd9(0x21e)](animate, '\x0a' + yellow + _0x268cd9(0x1d6) + blue + (icon ? '\x20\x20' : '') + _0x268cd9(0x206) + green + _0x268cd9(0x171) + yellow + _0x268cd9(0x1cc) + blue + (icon ? _0x370f78[_0x268cd9(0xfb)] : '') + _0x268cd9(0x275) + green + _0x268cd9(0x267) + yellow + '(3)\x20' + blue + (icon ? _0x370f78[_0x268cd9(0x25d)] : '') + 'CookieManagement\x20' + green + _0x268cd9(0xd9) + yellow + _0x268cd9(0xe2) + blue + (icon ? _0x370f78[_0x268cd9(0x25b)] : '') + _0x268cd9(0x1e1) + green + _0x268cd9(0x1a4) + yellow + _0x268cd9(0x1aa) + blue + (icon ? _0x370f78[_0x268cd9(0x250)] : '') + _0x268cd9(0x1d5) + green + '(Change\x20Logging\x20Symbols)\x0a' + yellow + '(6)\x20' + blue + (icon ? _0x268cd9(0x242) : '') + _0x268cd9(0x117) + green + _0x268cd9(0x11d), 0x1836 + -0x634 + -0x1200);
    let {cmd: _0x377932} = await inquirer[_0x268cd9(0x1ab)](prompts[_0x268cd9(0x27f)]);
    _0x377932 = _0x370f78[_0x268cd9(0x25a)](parseInt, _0x377932);
    if (_0x370f78[_0x268cd9(0x1f9)](_0x377932, 0x3e * 0x61 + 0x1aea + 0x187 * -0x21))
        _0x370f78[_0x268cd9(0x22f)](FBLikers);
    else {
        if (_0x370f78['XXDZC'](_0x377932, 0xf88 * -0x2 + -0xf94 + 0x2ea6))
            _0x370f78['TMKBm'](ShowCookie);
        else {
            if (_0x370f78[_0x268cd9(0x192)](_0x377932, -0x1de8 + 0x8cb * 0x4 + -0x541))
                CookieManagement();
            else {
                if (_0x370f78['ANocb'](_0x377932, 0x225a + -0x2 * -0xa2b + -0x36ac))
                    _0x370f78[_0x268cd9(0x1d3)](Feedback);
                else {
                    if (_0x377932 === -0x1 * 0x1175 + 0xb58 + 0x622)
                        loggingSymbols();
                    else
                        _0x370f78['memYS'](_0x377932, 0x11c4 + -0x100c * 0x1 + -0x1b2) && await _0x370f78[_0x268cd9(0x1d3)](exit);
                }
            }
        }
    }
}
main(), process['on']('SIGINT', () => {
    const _0x28169 = _0x58829a, _0x49e41c = {
            'bXLZT': function (_0x21bde6, _0x39e5ab) {
                return _0x21bde6 + _0x39e5ab;
            },
            'AOivt': function (_0x28358f) {
                return _0x28358f();
            }
        };
    console[_0x28169(0xb1)](_0x49e41c[_0x28169(0x233)]('\x0a' + _0x49e41c['AOivt'](getTimeStamp), info) + _0x28169(0x194)), process['exit']();
});