const _0x19aaef = _0x4537;
(function (_0x1d361e, _0x525527) {
    const _0x3b0f5d = _0x4537, _0x23f559 = _0x1d361e();
    while (!![]) {
        try {
            const _0x4b22b0 = parseInt(_0x3b0f5d(0x21b)) / (0x18f8 + -0x8af + -0x824 * 0x2) + parseInt(_0x3b0f5d(0x1d8)) / (-0x20e1 + -0x1180 + 0x3263) * (-parseInt(_0x3b0f5d(0x313)) / (-0x1fe6 + 0x45a + 0x1b8f)) + -parseInt(_0x3b0f5d(0x23d)) / (-0x73e * -0x1 + -0x1 * -0x1a49 + -0x2183 * 0x1) * (-parseInt(_0x3b0f5d(0x1ca)) / (-0x1926 + 0x977 + 0x1e * 0x86)) + -parseInt(_0x3b0f5d(0x34d)) / (0x150c * 0x1 + -0x1b19 + -0x5 * -0x137) * (parseInt(_0x3b0f5d(0x279)) / (0x3 * -0xf + 0x6e * 0x47 + -0x1e4e)) + -parseInt(_0x3b0f5d(0x1ee)) / (0xacf * -0x1 + 0x5b8 + 0x1b5 * 0x3) + parseInt(_0x3b0f5d(0x38b)) / (-0xd43 + 0x1 * 0x1e9d + 0x193 * -0xb) + parseInt(_0x3b0f5d(0x20c)) / (0x1097 + -0x60d * 0x2 + -0x473) * (parseInt(_0x3b0f5d(0x2a4)) / (-0x5 * 0x6b0 + -0xd1f * 0x1 + 0x2e9a));
            if (_0x4b22b0 === _0x525527)
                break;
            else
                _0x23f559['push'](_0x23f559['shift']());
        } catch (_0x1b3a75) {
            _0x23f559['push'](_0x23f559['shift']());
        }
    }
}(_0x3edd, -0x69711 + 0x98717 + 0x38ae2));
import _0x2216a9 from 'fs';
import {
    exec,
    execSync
} from 'child_process';
import _0x3cf8f3 from 'http';
import _0x5ef2b7 from 'https';
import _0x3cdff2 from 'os';
const {default: inquirer} = await import(_0x19aaef(0x1b1)), {default: ora} = await import(_0x19aaef(0x267)), {default: axios} = await import(_0x19aaef(0x27c)), {default: getPassword} = await import('password-prompt'), {default: crypto} = await import(_0x19aaef(0x2c6)), {addCooldown, checkCooldown} = await import(_0x19aaef(0x33d)), cooldownJSON = _0x19aaef(0x242);
let cooldownData = {};
const fontDir = _0x19aaef(0x292), yellow = _0x19aaef(0x34e), green = _0x19aaef(0x355), red = _0x19aaef(0x2b7), white = _0x19aaef(0x37c), blue = _0x19aaef(0x37e), cyan = _0x19aaef(0x251), magenta = _0x19aaef(0x1a7), orange = '\x1b[1;38;5;208m', underline = _0x19aaef(0x202), reset = '\x1b[0m', cookieJSONLocate = _0x19aaef(0x217);
let cookiesJSON, cookiesJSONParsed, icon;
const font = 'InconsolataNerdFont-Bold.ttf', $HOME = _0x3cdff2[_0x19aaef(0x243)](), $termux = _0x19aaef(0x37b), $termuxttf = _0x19aaef(0x314);
function updateCooldownData() {
    const _0x342cd5 = _0x19aaef, _0x476051 = {
            'mBVgI': function (_0x40c299, _0x228189) {
                return _0x40c299 + _0x228189;
            },
            'uVyNc': function (_0x51fd9f) {
                return _0x51fd9f();
            }
        };
    try {
        cooldownData = JSON[_0x342cd5(0x284)](_0x2216a9[_0x342cd5(0x237)](cooldownJSON));
    } catch (_0x3602e7) {
        console[_0x342cd5(0x24c)](_0x476051[_0x342cd5(0x2af)](_0x476051['uVyNc'](getTimeStamp), _0x3602e7[_0x342cd5(0x305)])), process['exit']();
    }
}
function UpdateCookies() {
    const _0x4dbd0e = _0x19aaef, _0x1f19e5 = {
            'yZYsB': _0x4dbd0e(0x239),
            'vGgsx': _0x4dbd0e(0x37f),
            'rJkSC': function (_0x53fee1, _0x49004a) {
                return _0x53fee1 + _0x49004a;
            },
            'dHfFS': function (_0x51a262) {
                return _0x51a262();
            }
        };
    try {
        cookiesJSON = _0x2216a9[_0x4dbd0e(0x237)](cookieJSONLocate, _0x1f19e5[_0x4dbd0e(0x1e4)]), cookiesJSONParsed = JSON[_0x4dbd0e(0x284)](cookiesJSON), icon = cookiesJSONParsed[_0x1f19e5[_0x4dbd0e(0x272)]][_0x4dbd0e(0x235)];
    } catch (_0x1096d8) {
        console[_0x4dbd0e(0x24c)](_0x1f19e5[_0x4dbd0e(0x390)](_0x1f19e5[_0x4dbd0e(0x2fd)](getTimeStamp), _0x1096d8[_0x4dbd0e(0x305)])), process['exit']();
    }
}
updateCooldownData(), UpdateCookies();
const info = '' + blue + (icon ? '\x20' : _0x19aaef(0x1af)) + white + '\x20', error = '' + red + (icon ? '\x20' : '[!]') + white + '\x20', ask = '' + yellow + (icon ? '\x20' : _0x19aaef(0x343)) + white + '\x20', api = 'https://flikers.net/android/android_get_react.php', httpAgent = new _0x3cf8f3[(_0x19aaef(0x2cf))]({ 'keepAlive': !![] }), httpsAgent = new _0x5ef2b7[(_0x19aaef(0x2cf))]({ 'keepAlive': !![] }), deleteCookieHelp = '\x0a' + green + _0x19aaef(0x346) + (info + yellow) + (icon ? _0x19aaef(0x334) : '') + _0x19aaef(0x1cc) + green + '(BACK)\x0a' + (info + yellow) + (icon ? _0x19aaef(0x199) : '') + 'A\x20-\x20' + green + _0x19aaef(0x2fc), urlHelp = '\x0a' + green + _0x19aaef(0x346) + (info + yellow) + (icon ? '\x20\x20' : '') + '\x20B\x20-\x20' + green + _0x19aaef(0x362) + green + _0x19aaef(0x359) + info + _0x19aaef(0x29c);
String['prototype'][_0x19aaef(0x257)] = function () {
    const _0x37521 = _0x19aaef, _0xd8c724 = this[_0x37521(0x2c7)](-0x1ee8 + 0xc71 * 0x1 + 0x1277, 0x949 + 0x24a * 0x3 + 0x3 * -0x562)['toUpperCase']();
    return _0xd8c724 + this['slice'](-0x1b5e + 0xb6 + 0x1aa9, undefined);
};
function setClear() {
    const _0x189515 = _0x19aaef, _0x27a9af = {
            'PxgAD': function (_0xff9af3, _0x14cdd4) {
                return _0xff9af3 === _0x14cdd4;
            },
            'XAjzJ': function (_0x30233e, _0x59e282, _0x4b70fc) {
                return _0x30233e(_0x59e282, _0x4b70fc);
            },
            'eMrsW': _0x189515(0x300),
            'wJXjx': _0x189515(0x354)
        };
    if (_0x27a9af[_0x189515(0x30a)](process[_0x189515(0x370)], _0x189515(0x2c8))) {
        _0x27a9af['XAjzJ'](execSync, _0x27a9af[_0x189515(0x1d4)], { 'stdio': _0x189515(0x354) });
        return;
    }
    execSync(_0x189515(0x369), { 'stdio': _0x27a9af[_0x189515(0x338)] });
}
function getTimeStamp() {
    const _0x4b705a = _0x19aaef, _0x3f9b7d = {
            'HNhpw': function (_0xab9420, _0x469db4) {
                return _0xab9420(_0x469db4);
            },
            'UtLxg': function (_0x498127, _0x247eb1) {
                return _0x498127(_0x247eb1);
            }
        }, _0x452272 = new Date(), _0x5ed48f = String(_0x452272['getHours']())[_0x4b705a(0x32f)](-0x1b45 + -0x2694 + 0x1 * 0x41db, '0'), _0x124ebe = _0x3f9b7d[_0x4b705a(0x383)](String, _0x452272[_0x4b705a(0x25a)]())[_0x4b705a(0x32f)](-0xdeb * 0x1 + -0x54 * -0x1 + 0xd99, '0'), _0x2b445e = _0x3f9b7d[_0x4b705a(0x2cd)](String, _0x452272[_0x4b705a(0x349)]())[_0x4b705a(0x32f)](0x1ec4 + -0x2 * -0x1274 + -0x43aa * 0x1, '0');
    return yellow + '[' + _0x5ed48f + ':' + _0x124ebe + ':' + _0x2b445e + ']' + reset + '\x20';
}
function _0x3edd() {
    const _0x430f7 = [
        'wM9Kv3G',
        'rMfJzwjVB2SGugfZC3DVCMr+jca',
        'AwnVBG',
        'z2zNCwe',
        'CMvHzezPBgvtEw5J',
        'y29VA2LLCY5QC29UlI4U',
        'DxrMoa',
        'te9wrsa',
        'D0vuAKG',
        'rNvUy3rPB24GkeLUC2vYDgLVBKnVB2TPzsKGrxjYB3i',
        'mZa4qwPLzxfV',
        'uxP2s3C',
        'rMz3zuS',
        'u0LnueXfia',
        'yxnRqMfJAW',
        'lI9JB29Szg93BI5QC29U',
        'Ag9TzwrPCG',
        'thPOB0e',
        'vw5HyMXLihrVihn0yxj0ihrOzsbbueK',
        'v09x',
        'tgjvAfm',
        'suHKDei',
        'utjInxnJmerTyJfhrwfjq2HZvJvYDdKXyxPssNu1C0TXthjfwwSZofPVqt0',
        'AwHJyKu',
        'zvPODvG',
        'Bg9N',
        'rw1HAwWVsuqVtNvTyMvYiW',
        'zgvpAwy',
        '87giLca',
        'qLfTv1y',
        'g1SXoZm2Bq',
        'ChP2wuC',
        'DgTYy2u',
        'su5gtW',
        'tfLrsuu',
        'BMXrswC',
        'Dg9uAxrSzq',
        'CgLWmYbPBNn0ywXSigzSyxnR',
        'sw52ywXPzcbvuKW',
        'z2v0twLUDxrLCW',
        'Eurvq24',
        'yMfZzty0',
        'wvDkug8',
        's2fPCNuG',
        'u3rHCNrPBMCUlI4',
        'q29VA2LLCW',
        'zxHPDa',
        'wwr2qLu',
        'uLDhChe',
        'EwXWuuC',
        'q2fUj3qGywrKihbYzwrPy3rPB24Gy29VBgrVD24GzM9Yia',
        'Dg9mB3DLCKnHC2u',
        'B3jH',
        '87cgMca',
        'zeTwzxu',
        'DgvZDa',
        'Eg1As0G',
        'CwzyDMy',
        'rMXHC2S',
        'zg9gCfG',
        'vgvSzwDYyw0',
        'DJeUnW',
        'ExvnBLm',
        'DKDNC3G',
        'uNnQwxC',
        'u0rfBhm',
        'D2DLDwG',
        'kenOyw5NzsbmB2DNAw5Nifn5BwjVBhmPcG',
        'zxjYy3q',
        'rMvLzgjHy2SG',
        'odyXqNfYrxnw',
        'ls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tlq',
        'vw5PzgvUDgLMAwvK',
        'yxHPB3m',
        'zxLrze8',
        'ENr2wg0',
        'C3rHCNrZv2L0Aa',
        'y29VA2LLCY5QC29Uia',
        '7OIxica',
        'ls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tls0Tlq',
        'z2v0uMvHy3rPB24',
        'CgfYC2u',
        'C2HHmJu2',
        'lIbtzwuGDgHLigvYCM9YigrLDgfPBhmGyMvSB3C',
        'ywrKqwDHAw4',
        'z3vkveu',
        'u0fe',
        'wNLgC2e',
        'vur1sKS',
        'tM92zw1Izxi',
        'qeTHAxj1rgv2',
        'ywrKq29VA2LL',
        'zwTSsMy',
        'tK9urtOG',
        '87cXQca',
        'lI9MB250CW',
        'rvnhy0W',
        'BwLU',
        'Cu11Dvu',
        'q29VA2LLtwfUywDLBwvUDh4K',
        'C2Tesfy',
        'sgDXwwS',
        'q0fsrsa',
        'swfSrhK',
        'ANDutLm',
        're9oj1qGvvnfifrirsbgqunfqK9psYbbufbmsunbveLptIbutYbdt1bzifrirsbmsu5lie9gifrirsbqt1nulcbvu0uGrKfdrujpt0SGteLursbpuIbdsfjptuuGsu5tvevbrc4k',
        'vgXqtMm',
        'tu9nCNi',
        'refuuG',
        'zNHqzxu',
        'zxzKv2y',
        'A2vKEuK',
        'Bu54qwW',
        'ntvlB25LExC',
        'DhzIyLe',
        'wurjEfa',
        'AvPVs1i',
        'i1nvq0nfu1mGFca',
        'CgLWmYbZAg93igzSyxnR',
        'wgnhsKm',
        'EwryAgy',
        'CgTNigLUC3rHBgWGChL0Ag9UmYaTEq',
        'kerLBgv0zsbgywnLyM9VAYbdB29RAwuPcG',
        'ifjLBw92zwqGu3vJy2vZC2z1BgX5',
        'Bujwz0K',
        'qxvtC1K',
        'z2v0ChjVCcbYBY5ZExn0zw0UyNvPBgqUzgf0zq',
        'C1HluM8',
        'y191C2vY',
        'rNnNDey',
        'rKfjteve',
        'u0Lhsu5u',
        'g1SXoZmXBq',
        'B2fqCgW',
        'ChjVBxb0',
        'ChvZAa',
        'lI4U',
        'z2v0ChjVCcbYBY5ZExn0zw0UyNvPBgqUAwq',
        'vu9fqvC',
        'u2PTCNa',
        'rw1AuMm',
        'wMHVsxm',
        'kdyPia',
        'vLbwt0e',
        'B1rZuxG',
        'z2L0igXVzYaTmsaTlxbYzxr0Et0LqG',
        'y1P6EMC',
        'y3j5ChrV',
        'C2XPy2u',
        'D2LUmZi',
        'rMfJzwjVB2SGkevTywLSl0Lel1bOB25Lkx4K',
        'CMfUzg9T',
        'z0vwvvC',
        'y29VA2LLq29TBwfUza',
        'vxrmEgC',
        'C3bSAxq',
        'qwDLBNq',
        'v2HLCMuGD291BgqGEw91igXPA2uGDg8GBgvHDMuGEw91CIbMzwvKyMfJAZ8',
        's2vLCc1bBgL2zq',
        'D0f6Dgy',
        'ugXLyxnLihjLC3rHCNqGEw91CIbuzxjTDxGGyxbWBgLJyxrPB24Gyw5KihrOzw4GCNvUoIa',
        'tMDgu3q',
        'C3bSAwnL',
        'y3jLyxrLsgfZAa',
        'sw52ywXPzcbpChrPB24',
        'rNHmEfC',
        'zevowwC',
        'tM90iezVDw5K',
        'sM5JEwm',
        'qwXSignVB2TPzxmGCMvTB3zLzcbZDwnJzxnZzNvSBhKU',
        '87cxUsa',
        'z3rYBLm',
        'yxbWBgLJyxrPB24VANnVBG',
        'ALPxqLi',
        'ELHguKC',
        'v3LjDfi',
        'vwjIC0m',
        'Ahr0Chm6lY93D3CUzMfJzwjVB2SUy29TlW',
        'Afr4DhG',
        'tKTqz1G',
        'tw9fvuK',
        'Dg9vChbLCKnHC2u',
        'tLfpDvK',
        'Aw5WDxq',
        'qw4GzxjYB3iGB2nJDxjYzwqGD2HPBguGzMv0y2HPBMCGC3LZDgvTigLUzM9YBwf0Aw9UlcbIDxqGDgHLigfWCgXPy2f0Aw9UihjLBwfPBNmGzNvUy3rPB25HBc4',
        'q2HLy2TPBMCGzM9YihvWzgf0zxmUlI4',
        'qxbYAwW',
        'if9FxYaGx19FicbFicaGif8Gif8Gia',
        'C3rYAw5NAwz5',
        'Aw9bzLi',
        'u3rHCNrPBMCGqvbj',
        'qwrKienVB2TPzsbeyxrYia',
        'A29mrvu',
        'tgTSDee',
        'u1vdq0vtuW',
        'vxnPBMCGq29VA2LLierHDhiJ',
        'kdqPia',
        'v0fstKLorZOG',
        'A3zLv2K',
        'q2fUj3qGChjLzgLJDcbJB29Szg93BIbMB3iG',
        'B3bTvuq',
        'kerftevursbbteWGq09ps0LfkqO',
        'zeHMrLm',
        'm3WYFdz8nxW0Fdf8ma',
        'rMvICNvHCNK',
        'y2XZ',
        'vgfYz2v0id4G',
        'sMfUDwfYEq',
        'z1Lrt1q',
        'A0ftAKC',
        'BwvZC2fNzq',
        'BgLZDa',
        'rgfSDMLRlZiUms4WicHmAw51EdSGvtSGqw5KCM9PzdaGmti7ifyYmtm0iej1AwXKl1nqmueUmJeWodeYlJaWmYK',
        'r2vsq2e',
        'uwjvEhi',
        'uhHNquq',
        'zwfSqvq',
        'D2fPDa',
        'r1HqrxC',
        'uvjryuK',
        'D3jPDgvgAwXLu3LUyW',
        'kerLzMf1BhqP',
        'Cg1utum',
        'kefKzcbgywnLyM9VAYbdB29RAwuPcG',
        'ou1PqxLpta',
        'zM9UDc50Dgy',
        'yLf6zhe',
        'tKDVCwG',
        'CNfwqw0',
        'ywDvDhe',
        'uufXAhe',
        'rw1HAwXZ',
        'rxjYB3iGrgv0ywLSCZOG',
        'Au5KAui',
        'u0veAvC',
        'qMfJAW',
        '87cXQsa',
        'uwvfu3e',
        'y1PxBhq',
        'y21K',
        'wM1euMm',
        'rgvSzxrLienVB2TPzsbeyxrYia',
        'A0fWyKG',
        'rxHPDca',
        'rK56qwu',
        'rLPsD20',
        'CgLWmYaTvG',
        'D3jPDgu',
        'CgD2Bxq',
        'EfftBNy',
        'vMXku1q',
        'rwzXr3G',
        'CgfKu3rHCNq',
        'rNjLzsb1BNrPBca',
        'y29VA2LLsw5KzxG',
        'C09xrvK',
        'uKTLrMC',
        '74gkica',
        't3rqrvO',
        'mJaZmc0Wns0Xoq',
        'DxnLCG',
        'D0PyANG',
        'uw50CxK',
        'yuTVtMO',
        'ueXfqvnfifvqrefursbzt1vsienpt0Tjrq',
        'BM9KzsbPBMrLEc5QCW',
        'lI9WCMvKAwn0q29VBgrVD24UANm',
        'CwrgvLO',
        'EwnAyuq',
        'rg8GEw91ihnLzsb0AguGCgvUz3vPBIbPy29UpYaOEs9UktO',
        'tMv3ienVB2TPzsbbzgrLzcb8ifrVDgfSienVB2TPzxOGoIa',
        'qu5huLKG',
        'wZ9D',
        'idOG',
        'CfjXwNm',
        'kIPdt01nqu5euYOQcG',
        'sefiqq',
        'AwDUB3jL',
        'z2v0u2vJB25KCW',
        'u29TzxrOAw5NifDLBNqGv3jVBMCG',
        'tM8Gq29VA2LLCYbgB3vUzc4',
        'ywntq2W',
        'mZy0nZrYCxH1C04',
        'g1SXoZmZBq',
        'wsb1igrVihrOAxm',
        'uMvXlG',
        'CgTNigLUC3rHBgWGChL0Ag9UlxbPCcaTEq',
        'BeD1sK0',
        'rNvUy3rPB24GkgXVz2DPBMDtEw1IB2XZksbfCNjVCG',
        'Aw5OzxjPDa',
        'g1SXoZmYBq',
        'tg9Nz2LUzYbtEw1IB2XZFIq',
        'DhHOzLy',
        'wwnuwxO',
        'kIPot1rfkIOk',
        'D2T4C1i',
        'lI9JB29RAwvhzxr0zxiUANm',
        'suDoia',
        'uKPPzue',
        'yLrrDK0',
        '74kAica',
        'zMrzqLa',
        'mxWZFdb8nhWYFdD8nxW2',
        'kejbq0SPcGO',
        't2n0B2jLCG',
        'rMDluwG',
        'zgvSzxrLq29VA2LL',
        'z2v0vgLTzq',
        't2DTz2q',
        'AvLlsgu',
        'y2XLyxi',
        'ywDHAw4',
        'ru5tvvjfifriqvqGwu9vuIbgqunfqK9psYbqt1nuieLtifnfvcbutYbqvujmsum',
        'q0roqKS',
        'AM9dCKK',
        'rKjmAwTLCNmG',
        'uNbns1m',
        'CgXHDgzVCM0',
        'thjKqxe',
        'BgjXre8',
        'rLjuEeC',
        'rgvSzxrLienVB2TPzsaOChjLC3mGAcbMB3iGAgvSCcL+ja',
        's0vmuvO',
        'qvbjifn0yxj0zwqGu3vJy2vZC2z1BgX5',
        'kduPia',
        'z0Tbtvy',
        'sNvSEq',
        'uxb0DMS',
        'lNrLCM11Ea',
        'g1SXoZm3Bq',
        'rNDQs2q',
        'g1SXoZm0Bq',
        'zxH0CMeTy29UzMLNCW',
        'z2L0ihb1BgW',
        'r1HHy2m',
        'BMLbA2C',
        'se5OChC',
        'CM1IDMq',
        'zxjYB3jnC2C',
        'yMfJAW',
        'D3bSyKK',
        'wMnpAhq',
        'wvrbrfa',
        'rKjm',
        'ndu0oty5oeL4EMnNtq',
        'tM8GDxbKyxrLCYbMB3vUzc4',
        'rMfJzwjVB2S',
        'zw1HAwW',
        'EwHSr0O',
        'CKPRu0m',
        'ywrKzwq',
        'mJaYnc0WnI0Zma',
        'kevYCM9Yicm0oYbvBMTUB3DUkq',
        '87gBQIa',
        'uKTszLC',
        '87gBMcaG',
        'vvLHy2e',
        'ueXfqvnfierpie5pvcbvu0uGwu9vuIbqrvjtt05btcbbq0npvu5uieLgifLpvsbxqu5uifrpiefwt0Leifnvu1bftKrjtKCGwu9vuIbbq0npvu5ulIbjtLnurufelcbvu0uGqsborvCGqundt1vovc4GveHfiefvveHpuIbjuYbot1qGuKvtue9ou0LcteuGrK9siefdq09vtLqGu1vtuevou0LptLmU',
        '87cXTIa',
        'Bvn1tha',
        'tMvYzcbgB250CYbjBNn0ywXSzwqGu3vJy2vZC2z1BgX5lG',
        'vgHLigfJy2vZCYbWzxjPB2qGAgfZigv4CgLYzwqU',
        'z2v0rNvSBfLLyxi',
        'y2Pcuva',
        'yLbQzvm',
        'shbAtgG',
        'BMX1y1q',
        'DhjPBq',
        'rgf0CIG',
        'g1SXoZm1Bq',
        'sunptG',
        'qxvNDxn0',
        'suyGwu9vievoq09vtLrfuIbbtLKGqLvhuYbpuIbju1nvrvmSifbmruftrsbgruveqKfdsYbzt1vsie1fu1nbr0uGsvmGvKfmvufcteuGve8GvvmGoIK',
        'ChL0Ag9UmYbHCgKUChKG',
        'sLPxuee',
        'qu5huLK',
        'Bwf0y2G',
        'wYTD',
        'EgrNlw9Wzw4GAhr0CdOVl3D3DY5MywnLyM9VAY5JB20Vs2fPCNv4rgv2',
        'Aw5XDwLYzxi',
        'kfjLCs4GtMvYzezVBNrZkq',
        'rKD1qxO',
        'Aw5JBhvKzxm',
        'u2vSzwn0zwqGuMvHy3rPB24GpIa',
        'uMvXDwvZDhm',
        'ihWG',
        'D3nitw4',
        'kevYCM9YicmXoYbpDxrKyxrLzcK',
        'BKXZAhu',
        'ie1VzhvSzq',
        'z1flr2G',
        'Dg9tDhjPBMC',
        'uMvHBgX5ie5Pz2DH',
        'io+dGsa',
        'rLHpt0e',
        'CgLWmYbPBNn0ywXSihjLCxvLC3rZ',
        'rwzky3a',
        'zMXVB3i',
        'sw5ZDgfSBgLUzYbqExrOB24',
        'u3LgzKS',
        're9kA3i',
        'DM1Kue4',
        'v2fjv28',
        'wwzXCvi',
        'mtCYmtvttwPxEu8',
        'sgTvvue',
        'qIaTia',
        'z2v0rgf0zq',
        'EMXyA0S',
        'rMfJzwjVB2TmAwTLCNn+ja',
        'u2vSzwn0zwqGuMvHy3rPB25+ja',
        't0nkvvi',
        'DgvYBxv4lw9Wzw4GAhr0CdOVl3qUBwuVs2fPCNvezxy',
        '87ctVIa',
        'zu1YC1C',
        'vgnWCxe',
        'A1H4ueS',
        'vg90ywWGtgLRzxmGq291BNq',
        'mZeWmJe2CK1VwK1I',
        '87gBKca',
        'tg9Nz2LUz1n5BwjVBhmG',
        'twfYy2G',
        'AuLKr08',
        'DfPfr2K',
        'BwTKAxiGlxaG',
        'z2v0q29VA2LLq29TBwfUza',
        'q2jZyKe',
        'A0vYyM0',
        'BwfPBNrLBMfUy2u',
        'wvnrz3y',
        'EvPzC0i',
        'mxW0Fdn8mhW2Fdv8mG',
        're9oj1qGvvnfifrirsbgqunfqK9psYbbufbmsunbveLptIbutYbdt1bzifrirsbmsu5lie9gifrirsbqt1nulcbvu0uGrKfdrujpt0SGteLursbpuIbdsfjptuuGsu5tvevbrc4',
        'u2vWDgvTyMvY',
        'B05iq1a',
        'swTOrve',
        'Ee5KBgq',
        'rxLWD3y',
        'z2v0ug9ZDfvsta',
        'wxjcEey',
        'mJy2odyWofbssKTfAq',
        'DxHUqNO',
        'vxbKyxrLie1LC3nHz2uGoIa',
        'kdiPia',
        'kdePia',
        '87cPIcaG',
        'teLlrsa',
        'rg8GEw91ihnLzsbHihbLBMD1Aw4GAwnVBIbIzwXVDZ8GswyGEw91ihnLzsbHigjVEcbVCIbZB21LDgHPBMCGzwXZzsWGAxqGBwvHBNmGDgHHDcbozxjKiezVBNrZigfYzsbUB3qGAw5ZDgfSBgvKlG',
        'qKfdsYa',
        'zxnRsge',
        'txLxr2W',
        'kenOyxqGv2L0AcbezxzLBg9WzxiPcG',
        'u2HJr0e',
        'sLrKy0q',
        'z3jLzw4',
        'kevYCM9YicmZoYbvBMTUB3DUkq',
        'qwrKiefNywLUpYaOEs9UlcbKzwzHDwX0oIbUktO',
        'DgvZDfvZzxjjy29U',
        '87gBLIaG',
        's0f0r1C',
        'g1S0Bq',
        'm3WYFdf8nhWW',
        'vvHUEvC',
        'sw52ywXPzcbpChrPB24Uie91DcbVzIbsyw5Nzq',
        'DePuy3y',
        'zgf0yq',
        'kfvZzwqP',
        'z2v0twfPBKnVBw1HBMq',
        'C3rHDhvZ',
        'ugXLyxnLigvUDgvYicD5jYbVCIaNBICU',
        'odu2mJiWy3fjsK1S',
        'BMLrr04',
        'ie5LEhqGu3vIBwL0ia',
        'B1zkDfa',
        'EeXOzui',
        'zgLNzxn0',
        'BK1qAhy',
        'C25uAxO',
        'wuTfr2G',
        'CgLWmYbZAg93ihjLCxvLC3rZ',
        'rMz4BNm',
        'lI9JB29RAwvZlMPZB24',
        'zejzvxm',
        'tKTpz3m',
        'uNvKEuC',
        'nZCYntu0zgjMwuX4',
        'BgvUz3rO',
        'ugXLyxnLigfKzcbHignVB2TPzsbMAxjZDcbZBYb5B3uGy2fUihvZzsbgqKXPA2vYCY4',
        'q3v2DuW',
        'vwnzvMK',
        'kefKzenVB2TPzsWGrgvSzxrLq29VA2LLkqO',
        'zxHPC3rZu3LUyW',
        'iaP8if9FpNWGlIa+Fcb8ica8xZ58ihXFxYbFx18Gif8GxYaGx19FicakFcbFpIb8ic4GxhWGFf8GFcb8FcaVic8Vic5FpNWGj18+pf8TpaP8x3WGihXFx18VFf9Fx3X8x3X8x1XFxf9FxY4GFf98icaVx18Via',
        'BKX5yNG',
        'EgPuuNC',
        'thn0CuW',
        'reTYzuu',
        'yNb6ENK',
        'y2HHBMDLtg9Nz2LUz1n5Bq',
        'tMzTDKC',
        'vefbzu4',
        'sw5ZDgfSBgLUzYbqExrOB24G',
        'uNvUidOG',
        'Cxf2AK0',
        'sw52ywXPzcbpChrPB24U',
        'tgLACvq',
        'tg9Nz2LUzYbtEw1IB2XZienOyw5NzwqGu3vJy2vZC2z1BgX5',
        'CuzhAfi',
        'ugrJwuK'
    ];
    _0x3edd = function () {
        return _0x430f7;
    };
    return _0x3edd();
}
class prompts {
    static [_0x19aaef(0x209)] = {
        'type': _0x19aaef(0x2ea),
        'name': _0x19aaef(0x322),
        'prefix': '',
        'message': ask + _0x19aaef(0x1cf),
        'validate': cmd => {
            const _0x5b1ca6 = _0x19aaef, tLXgIW = {
                    'ihcbE': '2|3|0|4|1',
                    'wplbI': function (callee, param1) {
                        return callee(param1);
                    },
                    'rIaTl': function (x, y) {
                        return x === y;
                    },
                    'YrBxF': function (x, y) {
                        return x + y;
                    },
                    'QzvKw': function (x, y) {
                        return x <= y;
                    }
                }, ihYPjR = tLXgIW[_0x5b1ca6(0x24a)][_0x5b1ca6(0x2ce)]('|');
            let waZhAA = 0x1673 + -0x7cf + -0xea4;
            while (!![]) {
                switch (ihYPjR[waZhAA++]) {
                case '0':
                    cmd = tLXgIW[_0x5b1ca6(0x387)](parseInt, cmd);
                    continue;
                case '1':
                    return !![];
                case '2':
                    if (tLXgIW['rIaTl'](cmd[_0x5b1ca6(0x1a5)](), ''))
                        return tLXgIW[_0x5b1ca6(0x1ed)](error, _0x5b1ca6(0x22e));
                    continue;
                case '3':
                    if (!/^\d+$/[_0x5b1ca6(0x26a)](cmd))
                        return error + 'Invalid\x20Option.\x20Please\x20Enter\x20Only\x20Numbers';
                    continue;
                case '4':
                    if (tLXgIW[_0x5b1ca6(0x23e)](cmd, -0xcb3 * 0x1 + 0x1096 + -0x1 * 0x3e3) || cmd >= -0x1d6b + 0x979 + 0x13f9)
                        return tLXgIW[_0x5b1ca6(0x1ed)](error, _0x5b1ca6(0x205));
                    continue;
                }
                break;
            }
        }
    };
    static ['getPostURL'] = {
        'type': _0x19aaef(0x2ea),
        'name': 'url',
        'prefix': '',
        'message': ask + 'Facebook\x20Post\x20URL\x20(press\x20h\x20for\x20help)~$',
        'validate': url => {
            const _0x2f5479 = _0x19aaef, qjNOyB = {
                    'RWGpq': '2|1|4|3|0',
                    'xmZKH': function (x, y) {
                        return x === y;
                    },
                    'QEQXX': _0x2f5479(0x2e4),
                    'aEtWu': 'http://www.facebook.com/',
                    'DTVfJ': function (x, y) {
                        return x + y;
                    },
                    'YDIxP': _0x2f5479(0x259),
                    'SrKXy': function (x, y) {
                        return x + y;
                    }
                }, KvribH = qjNOyB[_0x2f5479(0x263)][_0x2f5479(0x2ce)]('|');
            let FWFZUV = -0x2b * 0x56 + 0x4 * -0x535 + 0x2346;
            while (!![]) {
                switch (KvribH[FWFZUV++]) {
                case '0':
                    return !![];
                case '1':
                    if (qjNOyB[_0x2f5479(0x26b)](url[_0x2f5479(0x266)](), 'b'))
                        return !![];
                    continue;
                case '2':
                    if (url['toLowerCase']() === 'h')
                        return urlHelp;
                    continue;
                case '3':
                    if (!url['startsWith'](qjNOyB['QEQXX']) && !url[_0x2f5479(0x27f)](qjNOyB['aEtWu']))
                        return qjNOyB['DTVfJ'](error, qjNOyB[_0x2f5479(0x2a6)]);
                    continue;
                case '4':
                    if (url[_0x2f5479(0x1a5)]() === '')
                        return qjNOyB['SrKXy'](error, qjNOyB['YDIxP']);
                    continue;
                }
                break;
            }
        }
    };
    static [_0x19aaef(0x283)] = {
        'type': _0x19aaef(0x306),
        'name': 'react_type',
        'prefix': '',
        'message': ask + _0x19aaef(0x1d0),
        'choices': [
            cyan + (_0x19aaef(0x1f4) + (icon ? '\x20' : '')) + reset,
            magenta + (_0x19aaef(0x23a) + (icon ? '\x20' : '')) + reset,
            yellow + ('HAHA\x20' + (icon ? _0x19aaef(0x24f) : '')) + reset,
            orange + ('WOW\x20' + (icon ? '󰱫\x20' : '')) + reset,
            blue + ('SAD\x20' + (icon ? _0x19aaef(0x19c) : '')) + reset,
            red + (_0x19aaef(0x342) + (icon ? _0x19aaef(0x31f) : '')) + reset,
            green + (_0x19aaef(0x299) + (icon ? '\x20' : '')) + reset
        ]
    };
    static [_0x19aaef(0x1df)] = {
        'type': 'input',
        'name': _0x19aaef(0x2cc),
        'prefix': '',
        'message': ask + _0x19aaef(0x296),
        'validate': cookieCommand => {
            const _0x101365 = _0x19aaef, eEtpGH = {
                    'MoEUI': _0x101365(0x203),
                    'ydXhf': function (x, y) {
                        return x + y;
                    },
                    'sHVAH': function (x, y) {
                        return x === y;
                    },
                    'TlPNc': function (x, y) {
                        return x + y;
                    },
                    'QRQaI': function (x, y) {
                        return x >= y;
                    }
                }, pRaAkG = eEtpGH[_0x101365(0x2e7)][_0x101365(0x2ce)]('|');
            let TOVCIg = 0x65 + -0x54b + 0x4e6;
            while (!![]) {
                switch (pRaAkG[TOVCIg++]) {
                case '0':
                    return !![];
                case '1':
                    cookieCommand = parseInt(cookieCommand);
                    continue;
                case '2':
                    if (!/^\d+$/[_0x101365(0x26a)](cookieCommand))
                        return eEtpGH[_0x101365(0x2ab)](error, 'Invalid\x20Option.\x20Please\x20Enter\x20Only\x20Numbers');
                    continue;
                case '3':
                    if (eEtpGH['sHVAH'](cookieCommand[_0x101365(0x1a5)](), ''))
                        return eEtpGH[_0x101365(0x29d)](error, _0x101365(0x22e));
                    continue;
                case '4':
                    if (cookieCommand <= -0x3e8 + 0x1 * 0x69d + -0x2b5 || eEtpGH[_0x101365(0x30e)](cookieCommand, -0xb3f * -0x2 + 0x3 * -0x70b + -0x159))
                        return error + _0x101365(0x205);
                    continue;
                }
                break;
            }
        }
    };
    static [_0x19aaef(0x28e)] = {
        'type': _0x19aaef(0x2ea),
        'name': _0x19aaef(0x38e),
        'prefix': '',
        'message': ask + _0x19aaef(0x2c9),
        'validate': email => {
            const _0x30175d = _0x19aaef, gDTGPS = {
                    'AuSsY': function (x, y) {
                        return x === y;
                    },
                    'pURXK': function (x, y) {
                        return x + y;
                    },
                    'NsQSf': function (x, y) {
                        return x === y;
                    }
                };
            if (gDTGPS[_0x30175d(0x2b0)](email[_0x30175d(0x1a5)](), ''))
                return gDTGPS['pURXK'](error, _0x30175d(0x1be));
            if (gDTGPS['NsQSf'](email[_0x30175d(0x266)](), 'b'))
                return !![];
            return !![];
        }
    };
    static [_0x19aaef(0x365)] = {
        'type': _0x19aaef(0x2ea),
        'name': _0x19aaef(0x331),
        'prefix': '',
        'message': ask + _0x19aaef(0x374),
        'validate': cookieIndex => {
            const _0x1ea959 = _0x19aaef, sRcebF = {
                    'rqVAm': _0x1ea959(0x260),
                    'YKEGh': function (x, y) {
                        return x + y;
                    },
                    'eZhuX': function (x, y) {
                        return x === y;
                    },
                    'QbUxr': function (x, y) {
                        return x === y;
                    },
                    'LAwAt': function (x, y) {
                        return x === y;
                    },
                    'mSuLp': function (callee, param1) {
                        return callee(param1);
                    },
                    'koLEU': function (x, y) {
                        return x === y;
                    }
                }, BvcFKs = '2|3|5|7|4|6|1|0'[_0x1ea959(0x2ce)]('|');
            let gNsFRz = -0x1 * -0x24ff + 0x25ee + 0x1 * -0x4aed;
            while (!![]) {
                switch (BvcFKs[gNsFRz++]) {
                case '0':
                    return !![];
                case '1':
                    if (cookieIndex < 0x466 + -0x16 * -0x115 + -0x1c33 || cookieIndex > cookiesJSONParsed[sRcebF[_0x1ea959(0x317)]][_0x1ea959(0x21c)])
                        return sRcebF['YKEGh'](error, _0x1ea959(0x205));
                    continue;
                case '2':
                    if (sRcebF[_0x1ea959(0x24b)](cookieIndex[_0x1ea959(0x266)](), 'h'))
                        return deleteCookieHelp;
                    continue;
                case '3':
                    if (sRcebF[_0x1ea959(0x309)](cookieIndex[_0x1ea959(0x1a5)](), ''))
                        return sRcebF[_0x1ea959(0x214)](error, _0x1ea959(0x2d7));
                    continue;
                case '4':
                    if (!/^\d+$/[_0x1ea959(0x26a)](cookieIndex))
                        return sRcebF[_0x1ea959(0x214)](error, 'Invalid\x20Option.\x20Please\x20Enter\x20Only\x20Numbers');
                    continue;
                case '5':
                    if (sRcebF['LAwAt'](cookieIndex[_0x1ea959(0x266)](), 'b'))
                        return !![];
                    continue;
                case '6':
                    cookieIndex = sRcebF[_0x1ea959(0x19d)](parseInt, cookieIndex);
                    continue;
                case '7':
                    if (sRcebF[_0x1ea959(0x2f3)](cookieIndex[_0x1ea959(0x266)](), 'a'))
                        return !![];
                    continue;
                }
                break;
            }
        }
    };
    static ['askBack'] = {
        'type': _0x19aaef(0x2ea),
        'name': _0x19aaef(0x386),
        'prefix': '',
        'message': ask + 'Do\x20You\x20Want\x20To\x20Go\x20Back?\x20(y/n,\x20default:\x20y):'
    };
    static ['askToContinue'] = {
        'type': 'input',
        'name': '_',
        'prefix': '',
        'message': ask + 'Press\x20Enter\x20To\x20Continue~$'
    };
    static [_0x19aaef(0x287)] = {
        'type': _0x19aaef(0x2ea),
        'name': _0x19aaef(0x36a),
        'prefix': '',
        'message': ask + _0x19aaef(0x1fe)
    };
    static [_0x19aaef(0x228)] = {
        'type': 'list',
        'name': 'loggingSym',
        'prefix': '',
        'message': ask + _0x19aaef(0x356),
        'choices': [
            '' + yellow + (icon ? '\x20' : '') + 'ICON\x20' + green + (icon ? _0x19aaef(0x208) : _0x19aaef(0x1b2)) + reset,
            '' + yellow + (icon ? _0x19aaef(0x291) : '') + _0x19aaef(0x240) + green + (icon ? _0x19aaef(0x310) : _0x19aaef(0x208)) + reset,
            '' + yellow + (icon ? '\x20\x20' : '') + _0x19aaef(0x1f6) + green + '(Previous\x20Menu)' + reset
        ]
    };
    static [_0x19aaef(0x1ff)] = {
        'type': _0x19aaef(0x2ea),
        'name': _0x19aaef(0x337),
        'prefix': '',
        'message': ask + _0x19aaef(0x340),
        'validate': user => {
            const _0x323776 = _0x19aaef, AlnIov = {
                    'cWnvl': function (x, y) {
                        return x === y;
                    },
                    'yRKYD': function (x, y) {
                        return x + y;
                    },
                    'wkxsR': _0x323776(0x20b),
                    'iVJUB': function (x, y) {
                        return x !== y;
                    },
                    'iIdGO': function (x, y) {
                        return x !== y;
                    },
                    'WaIWo': function (x, y) {
                        return x + y;
                    }
                };
            if (AlnIov['cWnvl'](user['trim'](), ''))
                return AlnIov['yRKYD'](error, AlnIov[_0x323776(0x35a)]);
            if (AlnIov['iVJUB'](user['toLowerCase']()['trim'](), 'y') && AlnIov[_0x323776(0x1dc)](user[_0x323776(0x266)]()[_0x323776(0x1a5)](), 'n'))
                return AlnIov[_0x323776(0x1c8)](error, AlnIov[_0x323776(0x35a)]);
            return !![];
        }
    };
}
function delay(_0x482290) {
    return new Promise(_0x742637 => setTimeout(_0x742637, _0x482290));
}
async function animate(_0x3c4912, _0x4c6630 = 0x2233 + 0x1cfa + -0x3f29) {
    const _0x411a31 = _0x19aaef, _0x522bd5 = {
            'niAkg': function (_0x429eac, _0x3b9a65) {
                return _0x429eac(_0x3b9a65);
            },
            'xjTRw': _0x411a31(0x32a)
        };
    _0x3c4912 = _0x3c4912['toString']();
    for (const _0x44ac22 of _0x3c4912) {
        await _0x522bd5[_0x411a31(0x382)](delay, _0x4c6630), process['stdout'][_0x522bd5[_0x411a31(0x224)]](_0x44ac22);
    }
    console[_0x411a31(0x24c)]();
}
async function exit() {
    const _0x28ecbf = _0x19aaef, _0x56bc40 = {
            'ylpQG': function (_0x2b1437, _0x43fdc6, _0x38beee) {
                return _0x2b1437(_0x43fdc6, _0x38beee);
            },
            'qdFVZ': function (_0x4451f4, _0x233d36) {
                return _0x4451f4 + _0x233d36;
            },
            'CbsbA': function (_0x237998) {
                return _0x237998();
            },
            'nLshu': function (_0x200fbe) {
                return _0x200fbe();
            }
        };
    await _0x56bc40[_0x28ecbf(0x264)](animate, _0x56bc40['qdFVZ'](_0x56bc40[_0x28ecbf(0x1e0)](getTimeStamp) + info, _0x28ecbf(0x1aa)), -0x2284 + -0x2197 * 0x1 + 0x4 * 0x110d), await animate(_0x56bc40[_0x28ecbf(0x33e)](_0x56bc40[_0x28ecbf(0x33e)](_0x56bc40[_0x28ecbf(0x1ba)](getTimeStamp), info), 'THANKS\x20FOR\x20USING'), 0x2555 + -0x238e + -0x1ae), process[_0x28ecbf(0x261)]();
}
try {
    console[_0x19aaef(0x24c)](getTimeStamp() + info + _0x19aaef(0x2ec));
    const response = execSync(_0x19aaef(0x380))[_0x19aaef(0x1bd)]();
    if (response['includes']('Already\x20up\x20to\x20date.'))
        console[_0x19aaef(0x24c)](getTimeStamp() + info + _0x19aaef(0x38c));
    else {
        const commitMessage = execSync(_0x19aaef(0x2c4))[_0x19aaef(0x1bd)]();
        console[_0x19aaef(0x24c)](getTimeStamp() + info + 'Update\x20successful.\x20Please\x20run\x20the\x20script\x20again\x20using:\x20' + yellow + _0x19aaef(0x33c)), console['log'](getTimeStamp() + info + (_0x19aaef(0x1f0) + (green + commitMessage))), process[_0x19aaef(0x261)]();
    }
} catch (_0xde990b) {
    console[_0x19aaef(0x24c)](getTimeStamp() + error + 'Update\x20failed.\x20Please\x20ensure\x20that\x20git\x20is\x20installed.'), console[_0x19aaef(0x24c)](getTimeStamp() + error + _0xde990b[_0x19aaef(0x305)]), process['exit']();
}
const getSystemHash = () => {
    const _0x5066ec = _0x19aaef, _0x42c99c = {
            'Qntqy': function (_0x23afc7, _0x3a89b4) {
                return _0x23afc7(_0x3a89b4);
            },
            'pmTMC': _0x5066ec(0x2b1),
            'nMPhv': function (_0x29c3d0, _0x277a01) {
                return _0x29c3d0 + _0x277a01;
            },
            'gCTTV': _0x5066ec(0x285),
            'IHdtB': _0x5066ec(0x25c)
        };
    try {
        const _0x3b20e5 = _0x42c99c['Qntqy'](execSync, _0x5066ec(0x2bc))[_0x5066ec(0x1bd)](), _0x194e49 = _0x42c99c[_0x5066ec(0x339)](execSync, _0x42c99c[_0x5066ec(0x311)])[_0x5066ec(0x1bd)](), _0x21b5e3 = _0x42c99c[_0x5066ec(0x212)](_0x3b20e5[_0x5066ec(0x1bd)]()['trim'](), _0x194e49[_0x5066ec(0x1bd)]()['trim']()), _0x1b006f = crypto[_0x5066ec(0x2d6)](_0x42c99c['gCTTV'])['update'](_0x21b5e3)[_0x5066ec(0x211)](_0x42c99c[_0x5066ec(0x248)]);
        return _0x1b006f;
    } catch (_0x4d9766) {
        return { 'errorMsg': _0x5066ec(0x2eb) };
    }
};
function _0x4537(_0x573810, _0x175e8f) {
    const _0x288073 = _0x3edd();
    return _0x4537 = function (_0x169008, _0x4b6c06) {
        _0x169008 = _0x169008 - (0x7c7 + 0x4cb * -0x1 + 0x165 * -0x1);
        let _0x3077ca = _0x288073[_0x169008];
        if (_0x4537['lHSyxW'] === undefined) {
            var _0x201701 = function (_0x2b4e54) {
                const _0xcc81dd = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let _0x2fbae0 = '', _0x36b289 = '';
                for (let _0x55f41f = 0x155 * 0x3 + 0x11b6 + 0x1 * -0x15b5, _0x3c4865, _0x937d03, _0x5a4c39 = 0x1 * -0xf5b + 0x14 * 0x68 + -0x1 * -0x73b; _0x937d03 = _0x2b4e54['charAt'](_0x5a4c39++); ~_0x937d03 && (_0x3c4865 = _0x55f41f % (0x88 + 0x229 * -0x3 + 0x5f7) ? _0x3c4865 * (-0x1 * -0xcbd + -0x1 * 0x1348 + -0x6cb * -0x1) + _0x937d03 : _0x937d03, _0x55f41f++ % (-0xfdd + 0x9c9 + 0x618)) ? _0x2fbae0 += String['fromCharCode'](0x1471 * 0x1 + -0x1c5a * -0x1 + -0x2fcc & _0x3c4865 >> (-(0x102b * -0x1 + -0x282 + 0x1 * 0x12af) * _0x55f41f & -0x1e76 + -0xf86 * -0x2 + -0x90)) : -0x3f0 + -0x7 * 0x2b + -0x4d * -0x11) {
                    _0x937d03 = _0xcc81dd['indexOf'](_0x937d03);
                }
                for (let _0x30dc6c = 0x1bf4 + -0x192 * -0x2 + -0x638 * 0x5, _0x11cf8a = _0x2fbae0['length']; _0x30dc6c < _0x11cf8a; _0x30dc6c++) {
                    _0x36b289 += '%' + ('00' + _0x2fbae0['charCodeAt'](_0x30dc6c)['toString'](0x7e8 + 0x1b79 + -0x2351 * 0x1))['slice'](-(0x1df * 0x7 + 0x2543 + -0x325a));
                }
                return decodeURIComponent(_0x36b289);
            };
            _0x4537['nMjOMc'] = _0x201701, _0x573810 = arguments, _0x4537['lHSyxW'] = !![];
        }
        const _0x18cf42 = _0x288073[0x1 * -0x5c9 + 0x1fa0 + -0x19d7], _0x244f34 = _0x169008 + _0x18cf42, _0x4c7afb = _0x573810[_0x244f34];
        return !_0x4c7afb ? (_0x3077ca = _0x4537['nMjOMc'](_0x3077ca), _0x573810[_0x244f34] = _0x3077ca) : _0x3077ca = _0x4c7afb, _0x3077ca;
    }, _0x4537(_0x573810, _0x175e8f);
}
let currentUTCDate = new Date(), offset = -0x1 * 0x18d5 + -0x78b * 0x3 + -0x17bf * -0x2, currentDate = new Date(currentUTCDate['getTime']() + offset * (-0x99f + -0x1b73 + 0x1991 * 0x2) * (-0x4 * -0x17f + -0x8b * 0x15 + 0x953)), expirationDate = new Date(_0x19aaef(0x392));
const millisecondsPerDay = (0x29b * 0x3 + 0x985 * -0x4 + -0x222b * -0x1) * (-0x579 + 0x1 * 0x1307 + -0x16 * 0x9b) * (0x1 * -0x140e + -0x5ab * -0x5 + 0x80d * -0x1) * (-0x210b + 0x2204 + -0xe1), monthNames = [
        _0x19aaef(0x302),
        _0x19aaef(0x2ff),
        _0x19aaef(0x1db),
        _0x19aaef(0x2ed),
        'May',
        'June',
        _0x19aaef(0x379),
        _0x19aaef(0x1a9),
        _0x19aaef(0x1e7),
        _0x19aaef(0x363),
        _0x19aaef(0x28c),
        'December'
    ];
let daysLeft;
const hash = getSystemHash(), adminKey = _0x19aaef(0x249);
export const vusers = [];
!hash[_0x19aaef(0x385)] ? adminKey === hash && (expirationDate = new Date(_0x19aaef(0x336))) : console[_0x19aaef(0x24c)](getTimeStamp() + error + hash[_0x19aaef(0x385)]);
currentDate >= expirationDate && (console[_0x19aaef(0x24c)](getTimeStamp() + error + _0x19aaef(0x19f)), process[_0x19aaef(0x261)]());
console['log'](getTimeStamp() + info + (_0x19aaef(0x330) + (yellow + underline + monthNames[expirationDate['getMonth']()]) + '\x20' + expirationDate[_0x19aaef(0x1cd)]() + '\x20' + (expirationDate[_0x19aaef(0x1a0)]() + reset))), daysLeft = Math['ceil']((expirationDate['getTime']() - currentDate[_0x19aaef(0x366)]()) / millisecondsPerDay);
const version = 'v3.0', banner = green + _0x19aaef(0x2ee) + yellow + (icon ? '\x20' : '') + 'Developer:\x20' + blue + _0x19aaef(0x25e) + (red + underline) + (icon ? '\x20' : '') + '(#' + version + ')' + reset + green + _0x19aaef(0x222) + cyan + (icon ? '󰥔\x20' : '') + '(Expires\x20in:\x20' + daysLeft + 'd)';
try {
    execSync(_0x19aaef(0x329), { 'stdio': _0x19aaef(0x348) });
} catch (_0x4888fa) {
    console['log'](info + _0x19aaef(0x1c4)), execSync(_0x19aaef(0x2ac), { 'stdio': 'inherit' }), execSync(_0x19aaef(0x351), { 'stdio': _0x19aaef(0x354) });
}
try {
    execSync(_0x19aaef(0x215), { 'stdio': 'ignore' }), execSync(_0x19aaef(0x2a9), { 'stdio': 'ignore' });
} catch (_0xdfa575) {
    try {
        console['log'](info + (_0x19aaef(0x22b) + (yellow + underline) + _0x19aaef(0x1b6) + (reset + white) + _0x19aaef(0x1bb))), execSync(_0x19aaef(0x1c1), { 'stdio': _0x19aaef(0x354) }), console[_0x19aaef(0x24c)](info + (_0x19aaef(0x22b) + (yellow + underline) + _0x19aaef(0x26d) + (reset + white) + _0x19aaef(0x1bb))), execSync(_0x19aaef(0x258), { 'stdio': _0x19aaef(0x354) });
    } catch (_0x3c85ab) {
        console[_0x19aaef(0x24c)](getTimeStamp() + error + _0x3c85ab), process['exit']();
    }
}
console['log'](getTimeStamp() + info + _0x19aaef(0x2f1)), await delay(-0x22c + -0x1cf9 + 0x26f5);
const port = Math[_0x19aaef(0x1c3)](Math[_0x19aaef(0x2ca)]() * (0xbf95 + 0x11677 * 0x1 + 0x1 * -0xd60d - (0x2309 + 0x25a1 + -0x44a9) + (-0x17e5 + -0x489 + -0x1 * -0x1c6f))) + (0x79 * 0x1d + 0xea * -0x15 + 0x6 * 0x195);
exec(_0x19aaef(0x1ab) + port, (_0x35bba7, _0x5bcca6, _0xbc1059) => {
    const _0x55444e = _0x19aaef, _0x40a74d = {
            'vmdPN': function (_0x28e146, _0x4457ea) {
                return _0x28e146 + _0x4457ea;
            }
        };
    _0x35bba7 && (console[_0x55444e(0x24c)](getTimeStamp() + error + _0x55444e(0x245)), console[_0x55444e(0x24c)](_0x40a74d['vmdPN'](_0x40a74d[_0x55444e(0x1c7)](getTimeStamp(), error), _0x55444e(0x31b)) + _0x35bba7[_0x55444e(0x305)]), process[_0x55444e(0x261)]());
}), console['log'](getTimeStamp() + info + _0x19aaef(0x376)), await delay(0xe * 0x174 + -0x1f94 + 0x1ec4);
const {getCookie} = await import(_0x19aaef(0x35b));
let loading = ora({
    'spinner': 'point',
    'prefixText': getTimeStamp() + info + 'Authenticating',
    'interval': 0x50,
    'color': _0x19aaef(0x1fc)
});
async function Goback() {
    const _0x2e302e = _0x19aaef, _0x292706 = {
            'Qptvk': function (_0x5837c2) {
                return _0x5837c2();
            }
        }, {back: _0x47d5cc} = await inquirer[_0x2e302e(0x2b9)](prompts[_0x2e302e(0x241)]);
    _0x47d5cc[_0x2e302e(0x266)]() === 'n' && await exit(), _0x292706[_0x2e302e(0x37a)](main);
}
async function Feedback() {
    const _0x2864d1 = _0x19aaef, _0x3ee866 = {
            'ZhoIs': 'feedbackType',
            'FfweK': _0x2864d1(0x306),
            'ZyFsa': function (_0x5da1b6, _0x44e52f) {
                return _0x5da1b6 + _0x44e52f;
            },
            'OUofs': _0x2864d1(0x2d0),
            'SDEls': function (_0x1a25ec, _0x34267b) {
                return _0x1a25ec + _0x34267b;
            },
            'LzhoA': _0x2864d1(0x35f),
            'RJieA': function (_0x3f6961, _0x56fa99) {
                return _0x3f6961 + _0x56fa99;
            },
            'qfXvf': _0x2864d1(0x281),
            'eyQdO': _0x2864d1(0x334),
            'JAryU': _0x2864d1(0x38d),
            'GXPEw': 'termux-open\x20http://www.facebook.com/KairuxDev',
            'Hsync': _0x2864d1(0x1b0),
            'guJTE': function (_0x41df63, _0x2281df) {
                return _0x41df63(_0x2281df);
            },
            'OCJUR': _0x2864d1(0x1d2),
            'XcGJC': 'xdg-open\x20http://t.me/KairuDev'
        };
    setClear();
    const {feedbackType: _0x5ad6c2} = await inquirer[_0x2864d1(0x2b9)]({
        'name': _0x3ee866[_0x2864d1(0x2c0)],
        'type': _0x3ee866[_0x2864d1(0x23f)],
        'prefix': '',
        'message': _0x3ee866[_0x2864d1(0x28a)](ask, _0x3ee866['OUofs']),
        'choices': [
            _0x3ee866[_0x2864d1(0x274)](_0x3ee866[_0x2864d1(0x28a)](cyan, (icon ? _0x3ee866[_0x2864d1(0x244)] : '') + _0x2864d1(0x38d)), reset),
            _0x3ee866[_0x2864d1(0x35d)](blue + ((icon ? _0x3ee866[_0x2864d1(0x26c)] : '') + _0x2864d1(0x26f)), reset),
            _0x3ee866[_0x2864d1(0x28a)](red, (icon ? _0x3ee866[_0x2864d1(0x27d)] : '') + _0x2864d1(0x31e)) + reset
        ]
    });
    if (_0x5ad6c2[_0x2864d1(0x1b4)](_0x3ee866['JAryU']))
        try {
            execSync(_0x3ee866[_0x2864d1(0x30d)]);
        } catch (_0x3a693e) {
            execSync(_0x3ee866['Hsync']);
        }
    else {
        if (_0x5ad6c2['includes'](_0x2864d1(0x26f)))
            try {
                _0x3ee866[_0x2864d1(0x288)](execSync, _0x3ee866[_0x2864d1(0x1d1)]);
            } catch (_0x385d10) {
                _0x3ee866[_0x2864d1(0x288)](execSync, _0x3ee866[_0x2864d1(0x2aa)]);
            }
    }
    main();
}
async function Continue() {
    const _0x25b937 = _0x19aaef;
    await inquirer[_0x25b937(0x2b9)](prompts['askToContinue']);
}
async function ShowCookie() {
    const _0x23bf3b = _0x19aaef, _0x166c00 = {
            'deOif': function (_0x529b52, _0x1cc1f8) {
                return _0x529b52 + _0x1cc1f8;
            },
            'LEvpz': function (_0x956f6d, _0x2fd4fc) {
                return _0x956f6d === _0x2fd4fc;
            },
            'UOEAW': _0x23bf3b(0x260),
            'fuMvO': _0x23bf3b(0x2fe),
            'nGwpT': function (_0x70c9bf, _0x349929) {
                return _0x70c9bf + _0x349929;
            },
            'CuvuL': function (_0x1b0875, _0x36c43d) {
                return _0x1b0875 + _0x36c43d;
            },
            'ESGcL': function (_0x33ae3d) {
                return _0x33ae3d();
            },
            'amCxW': function (_0x1a538c, _0x496fc4) {
                return _0x1a538c + _0x496fc4;
            },
            'LkltA': function (_0x1b6091, _0x2ee064) {
                return _0x1b6091 < _0x2ee064;
            },
            'iYKHe': function (_0x11e34d, _0x49ec80) {
                return _0x11e34d + _0x49ec80;
            },
            'UbbsC': function (_0x2e702f) {
                return _0x2e702f();
            },
            'jZWBR': function (_0x4e67d3, _0x19caf5) {
                return _0x4e67d3 + _0x19caf5;
            },
            'gQKGh': _0x23bf3b(0x31a),
            'kXxPK': function (_0x537642) {
                return _0x537642();
            },
            'LbUhS': function (_0x92f3a2, _0x21a90d) {
                return _0x92f3a2 + _0x21a90d;
            },
            'gtrnS': _0x23bf3b(0x268),
            'IalDy': function (_0x2903e5, _0x53d01a) {
                return _0x2903e5 >= _0x53d01a;
            }
        };
    setClear(), console[_0x23bf3b(0x24c)](_0x166c00[_0x23bf3b(0x24e)](_0x166c00[_0x23bf3b(0x24e)](getTimeStamp(), info), green + 'NOTE:\x20' + white + 'MORE\x20COOKIES\x20MORE\x20LIKES\x20:D')), console['log'](cyan + _0x23bf3b(0x27a));
    if (_0x166c00['LEvpz'](cookiesJSONParsed[_0x166c00[_0x23bf3b(0x2bd)]][_0x23bf3b(0x21c)], 0xa * 0xa1 + 0x111f + -0x1769)) {
        const _0x2dd97a = _0x166c00['fuMvO'][_0x23bf3b(0x2ce)]('|');
        let _0x1c4e86 = 0xf2b + 0x10d5 * -0x1 + -0x6 * -0x47;
        while (!![]) {
            switch (_0x2dd97a[_0x1c4e86++]) {
            case '0':
                return;
            case '1':
                await CookieManagement();
                continue;
            case '2':
                console['log'](_0x166c00['nGwpT'](_0x166c00[_0x23bf3b(0x21e)](_0x166c00[_0x23bf3b(0x293)](getTimeStamp), info), _0x23bf3b(0x21d)));
                continue;
            case '3':
                console[_0x23bf3b(0x24c)](_0x166c00['amCxW'](_0x166c00[_0x23bf3b(0x293)](getTimeStamp), error) + 'No\x20Cookies\x20Found.');
                continue;
            case '4':
                await Continue();
                continue;
            case '5':
                console[_0x23bf3b(0x24c)]();
                continue;
            case '6':
                console[_0x23bf3b(0x24c)](cyan + _0x23bf3b(0x27a));
                continue;
            }
            break;
        }
    }
    for (let _0x441113 = -0x2 * -0x1039 + 0x1395 * 0x1 + 0x1 * -0x3407; _0x166c00[_0x23bf3b(0x2f4)](_0x441113, cookiesJSONParsed[_0x166c00[_0x23bf3b(0x2bd)]]['length']); _0x441113++) {
        console[_0x23bf3b(0x24c)](_0x166c00[_0x23bf3b(0x368)](_0x166c00[_0x23bf3b(0x2e3)](getTimeStamp) + info, yellow + _0x23bf3b(0x24d) + _0x166c00['jZWBR'](_0x441113, -0x4e * 0x22 + -0x267e + 0x30db * 0x1) + '\x20' + green + (icon ? '\x20' : '') + cookiesJSONParsed[_0x166c00[_0x23bf3b(0x1bc)]][_0x441113][_0x23bf3b(0x2c7)](-0x231a + 0x82a + 0x1af0, 0xddd + -0x7 * -0x21b + -0x8 * 0x392) + '...')), console[_0x23bf3b(0x24c)](_0x166c00[_0x23bf3b(0x2e0)](_0x166c00[_0x23bf3b(0x1d6)](getTimeStamp) + info, green + 'DATR' + yellow + '(' + _0x166c00[_0x23bf3b(0x247)](_0x441113, -0x195a + 0x2207 + -0x8ac) + ')\x20' + green + (icon ? _0x166c00[_0x23bf3b(0x2de)] : '') + (_0x166c00[_0x23bf3b(0x29a)](cookiesJSONParsed[_0x166c00['UOEAW']][_0x441113][_0x23bf3b(0x21c)], -0xd * 0x53 + -0xc0b + 0x1056) ? cookiesJSONParsed['Cookies'][_0x441113]['slice'](-0x2612 * 0x1 + 0x7da + 0x1e38, 0x20aa + 0x11c + -0x21b2) : cookiesJSONParsed[_0x166c00[_0x23bf3b(0x2bd)]][_0x441113]) + _0x23bf3b(0x2bb)));
    }
    console['log'](cyan + _0x23bf3b(0x27a)), console['log'](), await Continue(), _0x166c00[_0x23bf3b(0x293)](main);
}
async function CookieManagement() {
    const _0x52329a = _0x19aaef, _0x3f40d2 = {
            'lbqDO': function (_0x1613ab) {
                return _0x1613ab();
            },
            'uxuqW': function (_0x1a870f, _0x5e051f) {
                return _0x1a870f(_0x5e051f);
            },
            'UYaca': _0x52329a(0x200),
            'pgvmt': '󱛘\x20\x20',
            'ZodWx': _0x52329a(0x334),
            'bTQvM': function (_0x34e1d0, _0x38c5f2) {
                return _0x34e1d0 === _0x38c5f2;
            }
        };
    _0x3f40d2[_0x52329a(0x372)](setClear), await _0x3f40d2['uxuqW'](animate, banner), await animate('\x0a' + yellow + _0x52329a(0x1f2) + blue + (icon ? _0x3f40d2[_0x52329a(0x19a)] : '') + _0x52329a(0x2f2) + green + _0x52329a(0x312) + yellow + '(2)\x20' + blue + (icon ? _0x3f40d2[_0x52329a(0x32b)] : '') + _0x52329a(0x324) + green + _0x52329a(0x2ad) + yellow + '(3)\x20' + blue + (icon ? _0x3f40d2[_0x52329a(0x233)] : '') + 'Back\x20' + green + '(Previous\x20Menu)\x0a');
    let {cookieCommand: _0x2df52c} = await inquirer[_0x52329a(0x2b9)](prompts[_0x52329a(0x1df)]);
    _0x2df52c = parseInt(_0x2df52c);
    if (_0x2df52c === -0xf85 * 0x1 + -0x42a * -0x1 + 0xb5c * 0x1)
        _0x3f40d2['lbqDO'](InsertCookie);
    else {
        if (_0x3f40d2[_0x52329a(0x35e)](_0x2df52c, -0x1d * -0x13 + -0x1cfb + -0x8f2 * -0x3))
            DeleteCookie();
        else
            _0x3f40d2['bTQvM'](_0x2df52c, -0x253c + 0x1 * -0x1e02 + 0x4341) && _0x3f40d2['lbqDO'](main);
    }
}
async function InsertCookie() {
    const _0x4823d7 = _0x19aaef, _0x544fcb = {
            'RsjYw': function (_0x3ae240) {
                return _0x3ae240();
            },
            'DOJkr': function (_0x1cdb04, _0x2a0e3b) {
                return _0x1cdb04 + _0x2a0e3b;
            },
            'FJjyy': function (_0x1b442c, _0x58de5b) {
                return _0x1b442c(_0x58de5b);
            },
            'jwTNS': function (_0x175c14, _0x2845f4, _0x429c26) {
                return _0x175c14(_0x2845f4, _0x429c26);
            },
            'gVaOj': function (_0x803490, _0xd89184) {
                return _0x803490 + _0xd89184;
            },
            'bPjeS': function (_0x18b740, _0x2da1dc, _0x36a25e) {
                return _0x18b740(_0x2da1dc, _0x36a25e);
            },
            'UcYVi': function (_0x592768, _0x2f5a07) {
                return _0x592768 + _0x2f5a07;
            },
            'HgqYk': _0x4823d7(0x234),
            'rDlcX': 'mask',
            'CDNBK': _0x4823d7(0x2b3),
            'bpzzy': function (_0x32a515, _0x205e24) {
                return _0x32a515 + _0x205e24;
            },
            'evdWf': function (_0x53f311) {
                return _0x53f311();
            },
            'DKreE': function (_0x289307, _0x228769) {
                return _0x289307 + _0x228769;
            },
            'ioAfR': function (_0x3f08c0) {
                return _0x3f08c0();
            },
            'smFWL': 'Cookies',
            'gKAMV': 'Emails',
            'agUtq': 'utf8',
            'EmZRc': function (_0x1e8f92) {
                return _0x1e8f92();
            },
            'qFGhR': function (_0x3f459c, _0x3528ad) {
                return _0x3f459c + _0x3528ad;
            },
            'Jncyc': function (_0x4994e6, _0x2d2dfc) {
                return _0x4994e6 === _0x2d2dfc;
            },
            'jbvlb': function (_0x3dd50f) {
                return _0x3dd50f();
            },
            'SEDiW': function (_0x5e9fca, _0x327d94) {
                return _0x5e9fca + _0x327d94;
            },
            'kApbH': function (_0x309d20, _0xaddb2) {
                return _0x309d20 + _0xaddb2;
            }
        };
    try {
        _0x544fcb[_0x4823d7(0x273)](setClear), console['log'](_0x544fcb['DOJkr'](getTimeStamp(), info) + ('PLEASE\x20WAIT\x20FOR\x20THE\x20COUNTDOWN\x20|\x20' + green + '5s')), await _0x544fcb['FJjyy'](delay, 0x25 * 0x1 + -0x2ee * -0x3 + 0xa99 * 0x1), _0x544fcb['RsjYw'](setClear), await animate(banner), console[_0x4823d7(0x24c)](), await _0x544fcb[_0x4823d7(0x29b)](animate, _0x544fcb['gVaOj'](_0x544fcb['RsjYw'](getTimeStamp) + error, yellow + _0x4823d7(0x2f8) + red + _0x4823d7(0x19b)), -0x1 * -0xb9 + 0x1aa + 0x259 * -0x1), console[_0x4823d7(0x24c)]();
        const {email: _0x100e06} = await inquirer[_0x4823d7(0x2b9)](prompts[_0x4823d7(0x28e)]), _0x56b443 = await _0x544fcb[_0x4823d7(0x1a2)](getPassword, _0x544fcb['UcYVi'](ask, _0x544fcb[_0x4823d7(0x298)]), { 'method': _0x544fcb['rDlcX'] });
        loading['start']();
        const _0x4f5f88 = await getCookie(_0x100e06, _0x56b443, port);
        loading['stop']();
        if (!_0x4f5f88[_0x4823d7(0x1b4)](_0x544fcb[_0x4823d7(0x36c)])) {
            console[_0x4823d7(0x24c)](_0x544fcb[_0x4823d7(0x227)](getTimeStamp() + error, _0x4f5f88)), await Continue(), await _0x544fcb['evdWf'](CookieManagement);
            return;
        }
        console[_0x4823d7(0x24c)](_0x544fcb[_0x4823d7(0x226)](_0x544fcb[_0x4823d7(0x226)](_0x544fcb[_0x4823d7(0x2f0)](getTimeStamp), info), 'Saving\x20Cookie\x20Datr\x20in\x20' + yellow + _0x4823d7(0x238)));
        if (_0x2216a9[_0x4823d7(0x221)](cookieJSONLocate)) {
            cookiesJSONParsed[_0x544fcb['smFWL']]['push'](_0x4f5f88), cookiesJSONParsed[_0x544fcb[_0x4823d7(0x378)]][_0x4823d7(0x2ba)](_0x100e06), _0x2216a9[_0x4823d7(0x30f)](cookieJSONLocate, JSON[_0x4823d7(0x2ef)](cookiesJSONParsed, null, -0x1993 + 0x1cd0 + -0x33b), _0x544fcb[_0x4823d7(0x318)]), _0x544fcb[_0x4823d7(0x2bf)](UpdateCookies), console[_0x4823d7(0x24c)](_0x544fcb[_0x4823d7(0x231)](_0x544fcb[_0x4823d7(0x21f)](_0x544fcb[_0x4823d7(0x273)](getTimeStamp), info), _0x4823d7(0x341) + cookiesJSONParsed[_0x544fcb['smFWL']][_0x4823d7(0x21c)]));
            const {again: _0x22773b} = await inquirer[_0x4823d7(0x2b9)](prompts[_0x4823d7(0x287)]);
            if (_0x544fcb[_0x4823d7(0x2db)](_0x22773b[_0x4823d7(0x266)](), 'y')) {
                await InsertCookie();
                return;
            }
            await _0x544fcb['jbvlb'](CookieManagement);
        } else
            console[_0x4823d7(0x24c)](_0x544fcb[_0x4823d7(0x1c6)](getTimeStamp() + error, yellow + _0x4823d7(0x280) + white + _0x4823d7(0x2da))), console[_0x4823d7(0x24c)](_0x544fcb[_0x4823d7(0x31d)](_0x544fcb[_0x4823d7(0x2a1)](getTimeStamp) + info, _0x4823d7(0x34f))), process[_0x4823d7(0x261)]();
    } catch (_0x598c00) {
        console[_0x4823d7(0x24c)](_0x544fcb[_0x4823d7(0x325)](getTimeStamp(), error) + _0x4823d7(0x23c)), console[_0x4823d7(0x24c)](_0x544fcb[_0x4823d7(0x31d)](_0x544fcb[_0x4823d7(0x226)](_0x544fcb['jbvlb'](getTimeStamp), error), _0x598c00[_0x4823d7(0x305)])), process['exit']();
    }
}
async function DeleteCookie() {
    const _0xf271a2 = _0x19aaef, _0x40e396 = {
            'Ffxns': function (_0x414096, _0x43d65f) {
                return _0x414096(_0x43d65f);
            },
            'FXOOA': function (_0x268dca, _0x2ca49c) {
                return _0x268dca === _0x2ca49c;
            },
            'EfqGx': 'Cookies',
            'evFgU': '5|6|4|1|3|0|2',
            'FsgtF': function (_0x11f768) {
                return _0x11f768();
            },
            'LYQIE': function (_0x46648f, _0x2b99d5) {
                return _0x46648f + _0x2b99d5;
            },
            'ZcOht': function (_0x7bee14, _0x1bec8f) {
                return _0x7bee14 + _0x1bec8f;
            },
            'xNdld': function (_0x4e538e) {
                return _0x4e538e();
            },
            'VlJST': function (_0x519652, _0x19b2d7) {
                return _0x519652 + _0x19b2d7;
            },
            'SyFfK': function (_0x2ad8e9, _0x21586a) {
                return _0x2ad8e9 + _0x21586a;
            },
            'yuMnS': function (_0x545f69, _0x568f4d) {
                return _0x545f69 + _0x568f4d;
            },
            'wgeuh': _0xf271a2(0x268),
            'ShcGA': function (_0x5767e2, _0x87f53b) {
                return _0x5767e2 >= _0x87f53b;
            },
            'RudyG': 'Emails',
            'dBYUs': _0xf271a2(0x239),
            'YcTYz': function (_0x14697c, _0x874f93) {
                return _0x14697c + _0x874f93;
            },
            'NgFSt': function (_0x284e2e, _0x139741) {
                return _0x284e2e + _0x139741;
            },
            'rmbvd': function (_0x23a2af) {
                return _0x23a2af();
            },
            'RpMKS': function (_0x5489c9, _0x1f3ce2) {
                return _0x5489c9 === _0x1f3ce2;
            },
            'yhlGJ': function (_0x1cb07b) {
                return _0x1cb07b();
            },
            'FNzAe': _0xf271a2(0x361),
            'XFaXI': function (_0x549b4e, _0xf64add) {
                return _0x549b4e - _0xf64add;
            },
            'GGnXO': function (_0x4f1da5) {
                return _0x4f1da5();
            },
            'AEWYU': function (_0x4dc8eb, _0x1fcd15) {
                return _0x4dc8eb + _0x1fcd15;
            },
            'fdYBP': function (_0x3947c1) {
                return _0x3947c1();
            }
        };
    setClear(), await _0x40e396['Ffxns'](animate, banner), console[_0xf271a2(0x24c)](), console['log'](cyan + _0xf271a2(0x282));
    if (_0x40e396[_0xf271a2(0x1c0)](cookiesJSONParsed[_0x40e396[_0xf271a2(0x32e)]][_0xf271a2(0x21c)], 0x1cb6 + 0x9ca + -0x2680)) {
        const _0x148ee3 = _0x40e396['evFgU'][_0xf271a2(0x2ce)]('|');
        let _0x109586 = 0x8 * 0x1c1 + 0x230c * -0x1 + 0x1504;
        while (!![]) {
            switch (_0x148ee3[_0x109586++]) {
            case '0':
                await _0x40e396[_0xf271a2(0x2b4)](CookieManagement);
                continue;
            case '1':
                console['log']();
                continue;
            case '2':
                return;
            case '3':
                await _0x40e396['FsgtF'](Continue);
                continue;
            case '4':
                console[_0xf271a2(0x24c)](cyan + _0xf271a2(0x282));
                continue;
            case '5':
                console['log'](getTimeStamp() + error + _0xf271a2(0x34b));
                continue;
            case '6':
                console[_0xf271a2(0x24c)](_0x40e396[_0xf271a2(0x255)](_0x40e396[_0xf271a2(0x388)](_0x40e396[_0xf271a2(0x1ea)](getTimeStamp), info), _0xf271a2(0x21d)));
                continue;
            }
            break;
        }
    }
    for (let _0x3ec70e = 0x4 * -0x2ef + -0x2 * 0x31a + 0x11f0; _0x3ec70e < cookiesJSONParsed[_0x40e396[_0xf271a2(0x32e)]][_0xf271a2(0x21c)]; _0x3ec70e++) {
        console['log'](_0x40e396[_0xf271a2(0x255)](_0x40e396[_0xf271a2(0x32d)](getTimeStamp(), info), yellow + _0xf271a2(0x24d) + _0x40e396[_0xf271a2(0x1c5)](_0x3ec70e, 0x7 * -0xfe + 0x2198 + -0x1aa5) + '\x20' + green + (icon ? '\x20' : '') + cookiesJSONParsed[_0xf271a2(0x31a)][_0x3ec70e]['slice'](-0x2493 * 0x1 + -0xa * -0x36c + 0x25b, -0x2152 + 0x1a35 + 0x727) + _0xf271a2(0x2bb))), console[_0xf271a2(0x24c)](_0x40e396['ZcOht'](_0x40e396[_0xf271a2(0x388)](getTimeStamp(), info), green + _0xf271a2(0x29f) + yellow + '(' + _0x40e396[_0xf271a2(0x271)](_0x3ec70e, 0x63 * 0x31 + 0x214d + -0x343f) + ')\x20' + green + (icon ? _0x40e396[_0xf271a2(0x275)] : '') + (_0x40e396[_0xf271a2(0x1fa)](cookiesJSONParsed[_0x40e396[_0xf271a2(0x32e)]][_0x3ec70e][_0xf271a2(0x21c)], -0x14b * -0x1d + 0x21b5 * -0x1 + 0xa * -0x5f) ? cookiesJSONParsed[_0x40e396[_0xf271a2(0x32e)]][_0x3ec70e]['slice'](-0x1755 + 0x48 * 0x74 + -0x94b, 0x1ff7 + -0xf7a + -0x1069) : cookiesJSONParsed[_0x40e396[_0xf271a2(0x32e)]][_0x3ec70e]) + '...'));
    }
    console[_0xf271a2(0x24c)](cyan + '-------------------------------------------------'), console[_0xf271a2(0x24c)]();
    let {cookieIndex: _0x4736b7} = await inquirer[_0xf271a2(0x2b9)](prompts[_0xf271a2(0x365)]);
    if (_0x4736b7['toLowerCase']() === 'a')
        try {
            const _0x2584c0 = _0xf271a2(0x1e5)[_0xf271a2(0x2ce)]('|');
            let _0x171227 = -0xde2 + -0x22ea + 0x24 * 0x15b;
            while (!![]) {
                switch (_0x2584c0[_0x171227++]) {
                case '0':
                    _0x40e396[_0xf271a2(0x2b4)](UpdateCookies);
                    continue;
                case '1':
                    cookiesJSONParsed[_0x40e396[_0xf271a2(0x21a)]] = [];
                    continue;
                case '2':
                    await CookieManagement();
                    continue;
                case '3':
                    _0x2216a9['writeFileSync'](cookieJSONLocate, JSON[_0xf271a2(0x2ef)](cookiesJSONParsed, null, 0x1 * -0x1797 + -0x26e3 + -0xc * -0x535), _0x40e396['dBYUs']);
                    continue;
                case '4':
                    cookiesJSONParsed['Cookies'] = [];
                    continue;
                case '5':
                    await _0x40e396[_0xf271a2(0x1ea)](Continue);
                    continue;
                case '6':
                    console[_0xf271a2(0x24c)](_0x40e396[_0xf271a2(0x358)](_0x40e396[_0xf271a2(0x1c5)](_0x40e396[_0xf271a2(0x1ea)](getTimeStamp), info), _0xf271a2(0x2dc)));
                    continue;
                }
                break;
            }
        } catch (_0xf01dd8) {
            console['log'](_0x40e396['YcTYz'](_0x40e396[_0xf271a2(0x2d4)](_0x40e396[_0xf271a2(0x384)](getTimeStamp), error), _0xf01dd8['message'])), process['exit']();
        }
    else {
        if (_0x40e396[_0xf271a2(0x36f)](_0x4736b7[_0xf271a2(0x266)](), 'b'))
            await _0x40e396[_0xf271a2(0x38f)](CookieManagement);
        else
            try {
                const _0xe73b8c = _0x40e396[_0xf271a2(0x327)][_0xf271a2(0x2ce)]('|');
                let _0x39440b = 0x16df + -0x1d7 + 0x1508 * -0x1;
                while (!![]) {
                    switch (_0xe73b8c[_0x39440b++]) {
                    case '0':
                        cookiesJSONParsed[_0x40e396[_0xf271a2(0x21a)]][_0xf271a2(0x2d5)](_0x4736b7 - (0x1098 + 0xd9d + 0x78d * -0x4), -0x8db + 0x175a + -0x23 * 0x6a);
                        continue;
                    case '1':
                        _0x4736b7 = _0x40e396[_0xf271a2(0x216)](parseInt, _0x4736b7);
                        continue;
                    case '2':
                        _0x40e396[_0xf271a2(0x38f)](UpdateCookies);
                        continue;
                    case '3':
                        cookiesJSONParsed[_0x40e396[_0xf271a2(0x32e)]][_0xf271a2(0x2d5)](_0x40e396['XFaXI'](_0x4736b7, 0x3a * -0x8a + -0x24ae + 0x5 * 0xd97), -0x2204 + -0x128f * -0x2 + -0x319);
                        continue;
                    case '4':
                        _0x2216a9[_0xf271a2(0x30f)](cookieJSONLocate, JSON[_0xf271a2(0x2ef)](cookiesJSONParsed, null, -0x1 * 0xa09 + 0x7ca * 0x3 + -0xd53), _0x40e396[_0xf271a2(0x218)]);
                        continue;
                    case '5':
                        await _0x40e396['GGnXO'](Continue);
                        continue;
                    case '6':
                        await _0x40e396['GGnXO'](CookieManagement);
                        continue;
                    case '7':
                        console['log'](_0x40e396[_0xf271a2(0x32d)](_0x40e396['AEWYU'](_0x40e396[_0xf271a2(0x360)](getTimeStamp), info), yellow + _0xf271a2(0x1a6) + _0x4736b7 + ')' + white + _0xf271a2(0x2ae)));
                        continue;
                    }
                    break;
                }
            } catch (_0x4596fb) {
                console['log'](_0x40e396['SyFfK'](_0x40e396['NgFSt'](getTimeStamp(), error), _0x4596fb['message'])), process[_0xf271a2(0x261)]();
            }
    }
}
async function FBLikers() {
    const _0x55bbea = _0x19aaef, _0x3c1b82 = {
            'FxLxW': function (_0x442379) {
                return _0x442379();
            },
            'ztvXm': function (_0x5203ca, _0x98a116, _0x556026) {
                return _0x5203ca(_0x98a116, _0x556026);
            },
            'snTiz': function (_0x476a49, _0x1c0df7) {
                return _0x476a49 + _0x1c0df7;
            },
            'NKPgX': function (_0x45b25f, _0x58411e) {
                return _0x45b25f + _0x58411e;
            },
            'QAqhq': function (_0x1ba419) {
                return _0x1ba419();
            },
            'iZoKR': function (_0x2987a9, _0x1a2ab9, _0x16b5c5) {
                return _0x2987a9(_0x1a2ab9, _0x16b5c5);
            },
            'tkrce': function (_0x809ccb, _0x2e163d) {
                return _0x809ccb + _0x2e163d;
            },
            'gEVUW': function (_0x433993, _0x4b66fe) {
                return _0x433993 + _0x4b66fe;
            },
            'KELQZ': function (_0x5cf164) {
                return _0x5cf164();
            },
            'tvbbQ': function (_0x31a519) {
                return _0x31a519();
            },
            'eklJf': function (_0x35ae7a, _0xa21b43) {
                return _0x35ae7a === _0xa21b43;
            },
            'Tcpqq': function (_0x4b91e7) {
                return _0x4b91e7();
            },
            'zXFRG': _0x55bbea(0x260),
            'txhfV': '4|0|3|1|2',
            'bQzdq': function (_0x506aa6) {
                return _0x506aa6();
            },
            'NKOgs': function (_0xd8316f) {
                return _0xd8316f();
            },
            'LstqL': _0x55bbea(0x246),
            'oVJtP': _0x55bbea(0x347),
            'kErbm': _0x55bbea(0x289),
            'YWJPo': _0x55bbea(0x1ad),
            'tKDwS': function (_0x468e9f, _0x210ac0) {
                return _0x468e9f + _0x210ac0;
            },
            'lGuJM': function (_0x4df4a5, _0x3934f3) {
                return _0x4df4a5 + _0x3934f3;
            },
            'yDUCn': function (_0x2c85fe, _0x151c54) {
                return _0x2c85fe >= _0x151c54;
            },
            'EfJcp': function (_0x555198, _0x828d5a) {
                return _0x555198 + _0x828d5a;
            },
            'ZmDRc': function (_0x37ed8b) {
                return _0x37ed8b();
            },
            'KAtGW': 'Emails',
            'cZWlt': _0x55bbea(0x307),
            'tZFbu': _0x55bbea(0x2d1),
            'IkhEQ': 'gzip',
            'Eypwv': _0x55bbea(0x2df),
            'QeESq': _0x55bbea(0x2b5),
            'FwjKd': 'Invalid',
            'MOMrr': function (_0x355158) {
                return _0x355158();
            },
            'JTdcD': _0x55bbea(0x1d9),
            'eskHa': function (_0x17ba40, _0x52913b) {
                return _0x17ba40 + _0x52913b;
            },
            'Sjmrp': _0x55bbea(0x30c),
            'qqvjM': function (_0x468f7e, _0x4557f1) {
                return _0x468f7e(_0x4557f1);
            },
            'oTsQx': function (_0x2af989, _0x5ecfd6) {
                return _0x2af989 + _0x5ecfd6;
            },
            'dKVeu': function (_0x5237bd, _0xc45282) {
                return _0x5237bd + _0xc45282;
            },
            'FGuAz': function (_0x3d7c5e, _0x4f2274) {
                return _0x3d7c5e + _0x4f2274;
            },
            'FZRwm': function (_0x13a680, _0x5a542b) {
                return _0x13a680 + _0x5a542b;
            },
            'nlQIg': _0x55bbea(0x268),
            'WyItR': function (_0x1e3cc9, _0x403192) {
                return _0x1e3cc9 + _0x403192;
            },
            'nLybx': function (_0x551427) {
                return _0x551427();
            },
            'gYQOT': _0x55bbea(0x197),
            'mNxAl': function (_0x571baf, _0x3a0928) {
                return _0x571baf + _0x3a0928;
            },
            'pzvYG': function (_0x1161d1) {
                return _0x1161d1();
            },
            'NfmvG': _0x55bbea(0x2f5),
            'wAztf': function (_0x163100, _0x3f5e7e) {
                return _0x163100(_0x3f5e7e);
            },
            'WegcB': function (_0x1e7a7b, _0x578fa7) {
                return _0x1e7a7b + _0x578fa7;
            },
            'TAAeN': '󱛒\x20',
            'NGoqh': function (_0x327abc, _0x5c93c7) {
                return _0x327abc + _0x5c93c7;
            },
            'doFpX': function (_0x2fc41c, _0x471c78) {
                return _0x2fc41c + _0x471c78;
            },
            'iNdiB': function (_0x2df08b) {
                return _0x2df08b();
            },
            'RKeFg': function (_0x2c9caa, _0x1f926f) {
                return _0x2c9caa + _0x1f926f;
            },
            'sOWEY': function (_0x510527, _0x7d50aa) {
                return _0x510527 + _0x7d50aa;
            },
            'cjBQP': function (_0x4f2d11, _0x422e44) {
                return _0x4f2d11 === _0x422e44;
            },
            'tZEGi': function (_0x444044, _0xbc4364) {
                return _0x444044 + _0xbc4364;
            },
            'PdcYI': function (_0x26200c) {
                return _0x26200c();
            },
            'FRTxG': _0x55bbea(0x1e2),
            'opmUD': function (_0x5da9ab, _0x5a3b78) {
                return _0x5da9ab + _0x5a3b78;
            },
            'Ogmgd': function (_0x317fd7, _0x19de31) {
                return _0x317fd7 + _0x19de31;
            },
            'GXacc': function (_0x3e9ca9) {
                return _0x3e9ca9();
            },
            'dENYg': function (_0x1a55bf) {
                return _0x1a55bf();
            },
            'gfgqa': function (_0x48156b, _0x22b3a9) {
                return _0x48156b + _0x22b3a9;
            },
            'OtPEZ': _0x55bbea(0x35c),
            'ecHmO': _0x55bbea(0x239),
            'sXKRo': function (_0x1a1708) {
                return _0x1a1708();
            },
            'kedyI': function (_0x4e7261, _0x52e617) {
                return _0x4e7261 + _0x52e617;
            },
            'fxPeu': function (_0x32389d, _0x4033e0) {
                return _0x32389d + _0x4033e0;
            },
            'JZWPA': function (_0x48c6a3) {
                return _0x48c6a3();
            },
            'nlucT': function (_0x582ad0, _0x56d6e5) {
                return _0x582ad0 + _0x56d6e5;
            },
            'ycZaD': function (_0x264086, _0x3bff10) {
                return _0x264086 + _0x3bff10;
            },
            'pRqZs': _0x55bbea(0x2dd),
            'niQGN': function (_0x13b8a2, _0x394e44) {
                return _0x13b8a2 + _0x394e44;
            },
            'egWGU': function (_0x302531) {
                return _0x302531();
            },
            'skDHV': function (_0x1e4b1e, _0x4f98b8) {
                return _0x1e4b1e + _0x4f98b8;
            }
        };
    _0x3c1b82[_0x55bbea(0x2d8)](setClear), await _0x3c1b82[_0x55bbea(0x27e)](animate, _0x3c1b82[_0x55bbea(0x213)](_0x3c1b82['NKPgX'](_0x3c1b82[_0x55bbea(0x319)](getTimeStamp), info), green + _0x55bbea(0x290) + white + _0x55bbea(0x36b)), -0x1e37 + -0x3cd * 0x5 + 0x3142), await _0x3c1b82[_0x55bbea(0x2a7)](animate, _0x3c1b82['tkrce'](_0x3c1b82[_0x55bbea(0x2cb)](_0x3c1b82[_0x55bbea(0x375)](getTimeStamp), info), green + _0x55bbea(0x290) + white + _0x55bbea(0x1e6)), -0xa94 * 0x2 + -0x20dc + 0x32e * 0x11), await _0x3c1b82['tvbbQ'](Continue), _0x3c1b82[_0x55bbea(0x2a5)](setClear), await animate(banner), console['log']();
    const {url: _0x52d5e5} = await inquirer[_0x55bbea(0x2b9)](prompts[_0x55bbea(0x1ec)]);
    if (_0x3c1b82[_0x55bbea(0x28f)](_0x52d5e5[_0x55bbea(0x266)](), 'b')) {
        await _0x3c1b82[_0x55bbea(0x1d5)](main);
        return;
    }
    let {react_type: _0x4e10f5} = await inquirer['prompt'](prompts['getReaction']);
    if (_0x3c1b82['eklJf'](cookiesJSONParsed[_0x3c1b82[_0x55bbea(0x2e1)]][_0x55bbea(0x21c)], 0x9f * -0x1 + -0x2112 + 0x3 * 0xb3b)) {
        const _0x11b571 = _0x3c1b82[_0x55bbea(0x357)][_0x55bbea(0x2ce)]('|');
        let _0xe565e = 0x1491 + -0xf3f + 0x2 * -0x2a9;
        while (!![]) {
            switch (_0x11b571[_0xe565e++]) {
            case '0':
                console[_0x55bbea(0x24c)](_0x3c1b82[_0x55bbea(0x2cb)](_0x3c1b82['snTiz'](getTimeStamp(), info), 'Please\x20add\x20a\x20cookie\x20first\x20so\x20you\x20can\x20use\x20FBLikers.'));
                continue;
            case '1':
                await _0x3c1b82[_0x55bbea(0x2a5)](CookieManagement);
                continue;
            case '2':
                return;
            case '3':
                await _0x3c1b82['bQzdq'](Continue);
                continue;
            case '4':
                console['log'](_0x3c1b82[_0x55bbea(0x213)](_0x3c1b82[_0x55bbea(0x219)](getTimeStamp) + error, 'No\x20Cookies\x20Found.'));
                continue;
            }
            break;
        }
    }
    await _0x3c1b82[_0x55bbea(0x27e)](logInfo, _0x52d5e5, _0x4e10f5);
    let _0x3f7119 = 0x549 + -0xf05 * -0x2 + -0x2353, _0x4b278e = 0x2 * 0x6a1 + -0xc * 0x238 + 0xd5f, _0x976215;
    icon ? _0x4e10f5['includes'](_0x3c1b82[_0x55bbea(0x225)]) ? (_0x976215 = _0x4e10f5['slice'](-(-0xa * 0x388 + 0x1 * -0x1aad + 0x3e05), undefined), _0x4e10f5 = _0x4e10f5[_0x55bbea(0x2c7)](0x14c2 + 0x648 + -0x1afd, -(0x137c + 0x23d7 + 0x95 * -0x5f))) : (_0x976215 = _0x4e10f5[_0x55bbea(0x1b4)](_0x3c1b82[_0x55bbea(0x20f)]) || _0x4e10f5[_0x55bbea(0x1b4)](_0x3c1b82[_0x55bbea(0x1e1)]) || _0x4e10f5[_0x55bbea(0x1b4)](_0x3c1b82[_0x55bbea(0x25d)]) ? _0x4e10f5[_0x55bbea(0x2c7)](-(0x9 * 0x447 + 0xfd5 + -0x364c), undefined) : _0x4e10f5[_0x55bbea(0x2c7)](-(-0xc2b * 0x3 + 0x1 * 0x1c37 + 0x1 * 0x851), undefined), _0x4e10f5 = _0x4e10f5['includes'](_0x3c1b82[_0x55bbea(0x20f)]) || _0x4e10f5[_0x55bbea(0x1b4)](_0x3c1b82[_0x55bbea(0x1e1)]) || _0x4e10f5[_0x55bbea(0x1b4)](_0x55bbea(0x1ad)) ? _0x4e10f5[_0x55bbea(0x2c7)](-0x1 * -0x1c13 + 0x5e1 * 0x5 + 0x361 * -0x11, -(0x1927 + -0x2cf * 0x1 + 0x3b8 * -0x6)) : _0x4e10f5[_0x55bbea(0x2c7)](0x1 * 0x11c + -0x1e16 + -0x1ef * -0xf, -(-0x18 * 0x48 + -0x1508 + -0x15 * -0x153))) : _0x4e10f5[_0x55bbea(0x1b4)](_0x3c1b82[_0x55bbea(0x225)]) ? _0x4e10f5 = _0x4e10f5['slice'](-0x6 * -0x274 + -0x1229 * 0x1 + -0x1 * -0x37e, -(-0xa6f * -0x2 + 0x1 * 0x5d5 + -0x1aae)) : _0x4e10f5 = _0x4e10f5[_0x55bbea(0x2c7)](-0x19 * 0x12 + 0xd8f + 0x16 * -0x89, -(-0x610 + -0x9 * 0x435 + 0x4e2 * 0x9));
    _0x976215 = _0x976215 ? _0x976215[_0x55bbea(0x1a5)]() : null;
    let _0xdd03b1;
    for (let _0x2a65ad = 0x4b3 * 0x7 + -0x1cdf * -0x1 + -0x3dc4; _0x2a65ad < cookiesJSONParsed[_0x3c1b82[_0x55bbea(0x2e1)]][_0x55bbea(0x21c)]; _0x2a65ad++) {
        try {
            console[_0x55bbea(0x24c)](_0x3c1b82['tKDwS'](_0x3c1b82[_0x55bbea(0x352)](getTimeStamp(), info), yellow + _0x55bbea(0x2f6) + _0x4b278e + '\x20~\x20' + green + (icon ? '󰆘\x20' : '') + (_0x3c1b82[_0x55bbea(0x25b)](cookiesJSONParsed[_0x3c1b82[_0x55bbea(0x2e1)]][_0x2a65ad][_0x55bbea(0x21c)], 0x472 * -0x5 + -0x78d * -0x4 + -0x7e6) ? cookiesJSONParsed[_0x3c1b82['zXFRG']][_0x2a65ad][_0x55bbea(0x2c7)](0x18 * 0x97 + -0x1 * -0xdad + 0xf * -0x1db, -0x139e + -0x24c5 + 0xf5 * 0x3b) : cookiesJSONParsed[_0x3c1b82[_0x55bbea(0x2e1)]][_0x2a65ad][_0x55bbea(0x2c7)](-0x1 * -0x1093 + -0x49 * -0x73 + -0xb2 * 0x47, 0x3e8 + -0x1 * 0x26bd + 0x4f * 0x71)) + _0x55bbea(0x2bb))), console['log'](_0x3c1b82[_0x55bbea(0x253)](_0x3c1b82['EfJcp'](_0x3c1b82[_0x55bbea(0x323)](getTimeStamp), info), '' + green + (icon ? '\x20' : '') + _0x55bbea(0x25f))), _0xdd03b1 = cookiesJSONParsed[_0x3c1b82[_0x55bbea(0x201)]][_0x2a65ad];
            const _0x3c01da = {
                    'headers': {
                        'User-Agent': _0x3c1b82[_0x55bbea(0x321)],
                        'Connection': _0x3c1b82['tZFbu'],
                        'Accept-Encoding': _0x3c1b82[_0x55bbea(0x1e9)],
                        'Content-Type': _0x3c1b82[_0x55bbea(0x1eb)],
                        'Cookie': cookiesJSONParsed[_0x55bbea(0x260)][_0x2a65ad]
                    },
                    'httpAgent': httpAgent,
                    'httpsAgent': httpsAgent,
                    'timeout': 0x0
                }, _0x31afc3 = {
                    'post_id': _0x52d5e5,
                    'react_type': _0x4e10f5,
                    'version': _0x55bbea(0x270)
                }, _0x18f078 = await axios['post'](api, _0x31afc3, _0x3c01da), _0x2ecaf8 = _0x18f078[_0x55bbea(0x207)];
            if (_0x3c1b82[_0x55bbea(0x28f)](_0x2ecaf8[_0x55bbea(0x20a)], _0x3c1b82[_0x55bbea(0x320)])) {
                if (_0x2ecaf8[_0x55bbea(0x305)]['includes'](_0x3c1b82[_0x55bbea(0x37d)]))
                    console[_0x55bbea(0x24c)](_0x3c1b82[_0x55bbea(0x2cb)](_0x3c1b82[_0x55bbea(0x1c2)](_0x3c1b82[_0x55bbea(0x29e)](getTimeStamp), error), '' + yellow + (icon ? _0x3c1b82[_0x55bbea(0x1fb)] : '') + _0x55bbea(0x1a6) + _0x4b278e + ')\x20' + _0x3c1b82[_0x55bbea(0x213)](_0x3c1b82['snTiz'](red, '#'), _0x2ecaf8[_0x55bbea(0x20a)]) + '\x20|\x20' + blue + '@KairuDev')), console['log'](_0x3c1b82[_0x55bbea(0x213)](_0x3c1b82[_0x55bbea(0x1d5)](getTimeStamp), error) + _0x2ecaf8[_0x55bbea(0x305)]['toUpperCase']()), console['log'](_0x3c1b82[_0x55bbea(0x253)](_0x3c1b82[_0x55bbea(0x1f7)](getTimeStamp(), info), _0x55bbea(0x33b)));
                else {
                    if (_0x2ecaf8['message']['includes'](_0x3c1b82[_0x55bbea(0x2be)])) {
                        const _0x6cf868 = _0x3c1b82['qqvjM'](checkCooldown, _0xdd03b1);
                        console[_0x55bbea(0x24c)](_0x3c1b82[_0x55bbea(0x2c3)](_0x3c1b82[_0x55bbea(0x253)](getTimeStamp(), error), '' + yellow + (icon ? '󱛤\x20' : '') + _0x55bbea(0x1a6) + _0x4b278e + ')\x20' + _0x3c1b82[_0x55bbea(0x269)](_0x3c1b82[_0x55bbea(0x1b3)](red, '#'), _0x2ecaf8[_0x55bbea(0x20a)]) + _0x55bbea(0x1b7) + blue + _0x55bbea(0x28d))), console[_0x55bbea(0x24c)](_0x3c1b82[_0x55bbea(0x269)](_0x3c1b82['KELQZ'](getTimeStamp), error) + _0x2ecaf8[_0x55bbea(0x305)]['toUpperCase']()), _0x6cf868[_0x55bbea(0x294)] && _0x6cf868['hr'] ? console[_0x55bbea(0x24c)](_0x3c1b82[_0x55bbea(0x2cb)](_0x3c1b82[_0x55bbea(0x328)](_0x3c1b82[_0x55bbea(0x2d8)](getTimeStamp), info), '' + yellow + (icon ? _0x3c1b82[_0x55bbea(0x256)] : '') + _0x55bbea(0x1a6) + _0x4b278e + ')' + green + '\x20Next\x20Submit\x20' + white + ':\x20' + _0x3c1b82[_0x55bbea(0x1f7)](green, _0x6cf868['hr']))) : (console[_0x55bbea(0x24c)](_0x3c1b82[_0x55bbea(0x2e2)](_0x3c1b82[_0x55bbea(0x253)](_0x3c1b82['ZmDRc'](getTimeStamp), info), _0x55bbea(0x2fa) + _0xdd03b1 + '.\x20See\x20the\x20error\x20details\x20below')), console[_0x55bbea(0x24c)](_0x3c1b82[_0x55bbea(0x352)](_0x3c1b82[_0x55bbea(0x328)](_0x3c1b82['nLybx'](getTimeStamp), error), _0x6cf868[_0x55bbea(0x385)]) ? _0x6cf868[_0x55bbea(0x385)] : _0x55bbea(0x27b)));
                    } else
                        console[_0x55bbea(0x24c)](_0x3c1b82[_0x55bbea(0x213)](_0x3c1b82['NKPgX'](_0x3c1b82[_0x55bbea(0x223)](getTimeStamp), error), '' + yellow + (icon ? _0x3c1b82[_0x55bbea(0x303)] : '') + _0x55bbea(0x1a6) + _0x4b278e + ')\x20' + _0x3c1b82[_0x55bbea(0x2a3)](red + '#', _0x2ecaf8[_0x55bbea(0x20a)]) + _0x55bbea(0x1b7) + blue + _0x55bbea(0x28d))), console['log'](_0x3c1b82[_0x55bbea(0x1b3)](_0x3c1b82[_0x55bbea(0x252)](getTimeStamp) + error, _0x2ecaf8['message'][_0x55bbea(0x2e8)]()[_0x55bbea(0x1a5)]()));
                }
            } else {
                if (_0x2ecaf8[_0x55bbea(0x20a)] === _0x3c1b82[_0x55bbea(0x229)]) {
                    const _0x11a72c = /\d+/g;
                    let _0x46e628 = _0x2ecaf8[_0x55bbea(0x305)][_0x55bbea(0x1ae)](_0x11a72c)[0x965 + -0x266 + -0x9 * 0xc7];
                    _0x46e628 = _0x3c1b82['qqvjM'](parseInt, _0x46e628), _0x3f7119 += _0x46e628;
                    const _0x21e4fe = _0x3c1b82[_0x55bbea(0x2d2)](addCooldown, _0xdd03b1);
                    console[_0x55bbea(0x24c)](_0x3c1b82[_0x55bbea(0x1b3)](_0x3c1b82['WegcB'](getTimeStamp(), info), '' + yellow + (icon ? _0x3c1b82[_0x55bbea(0x22a)] : '') + _0x55bbea(0x1a6) + _0x4b278e + ')\x20' + _0x3c1b82[_0x55bbea(0x316)](green + '#', _0x2ecaf8[_0x55bbea(0x20a)]) + _0x55bbea(0x1b7) + yellow + _0x4e10f5 + '\x20' + (_0x976215 ? _0x976215 : '') + yellow + _0x55bbea(0x344) + _0x3c1b82[_0x55bbea(0x2e2)](green, _0x46e628) + _0x55bbea(0x1b7) + blue + _0x55bbea(0x28d)));
                    if (_0x21e4fe[_0x55bbea(0x391)])
                        console[_0x55bbea(0x24c)](_0x3c1b82[_0x55bbea(0x2e6)](_0x3c1b82[_0x55bbea(0x26e)](_0x3c1b82[_0x55bbea(0x31c)](getTimeStamp), info), '' + yellow + (icon ? _0x55bbea(0x268) : '') + _0x55bbea(0x1a6) + _0x4b278e + ')' + green + _0x55bbea(0x20e) + white + ':\x20' + _0x3c1b82[_0x55bbea(0x333)](green, _0x21e4fe['hr'])));
                    else
                        _0x21e4fe[_0x55bbea(0x385)] && (console['log'](_0x3c1b82[_0x55bbea(0x332)](_0x3c1b82[_0x55bbea(0x375)](getTimeStamp), info) + ('Can\x27t\x20add\x20prediction\x20cooldown\x20for\x20' + _0xdd03b1 + _0x55bbea(0x286))), console[_0x55bbea(0x24c)](_0x3c1b82[_0x55bbea(0x1c2)](getTimeStamp() + error, _0x21e4fe['errorMsg'])));
                } else {
                    if (_0x3c1b82[_0x55bbea(0x1a1)](_0x2ecaf8[_0x55bbea(0x20a)], _0x55bbea(0x254))) {
                        if (_0x2ecaf8[_0x55bbea(0x305)][_0x55bbea(0x1b4)]('outdated'))
                            console[_0x55bbea(0x24c)](_0x3c1b82[_0x55bbea(0x1dd)](_0x3c1b82[_0x55bbea(0x253)](_0x3c1b82[_0x55bbea(0x232)](getTimeStamp), error), _0x55bbea(0x34a) + red + _0x55bbea(0x1b9)));
                        else
                            _0x2ecaf8['message']['includes'](_0x3c1b82[_0x55bbea(0x373)]) ? console[_0x55bbea(0x24c)](_0x3c1b82[_0x55bbea(0x2fb)](_0x3c1b82[_0x55bbea(0x29e)](getTimeStamp), error) + (_0x55bbea(0x34a) + red + '(Error\x20#2;\x20Maintenance)')) : console[_0x55bbea(0x24c)](_0x3c1b82[_0x55bbea(0x2fb)](_0x3c1b82[_0x55bbea(0x2e2)](_0x3c1b82[_0x55bbea(0x319)](getTimeStamp), error), _0x55bbea(0x34a) + red + _0x55bbea(0x1fd)));
                    } else
                        console['log'](_0x3c1b82['EfJcp'](_0x3c1b82[_0x55bbea(0x367)](_0x3c1b82[_0x55bbea(0x381)](getTimeStamp), error), _0x55bbea(0x34a) + red + _0x55bbea(0x393)));
                }
            }
            _0x4b278e++;
        } catch (_0x532f70) {
            console[_0x55bbea(0x24c)](_0x3c1b82['opmUD'](_0x3c1b82[_0x55bbea(0x352)](_0x3c1b82[_0x55bbea(0x2d9)](getTimeStamp), info), '' + yellow + (icon ? _0x3c1b82['nlQIg'] : '') + _0x55bbea(0x1a6) + _0x4b278e + ')\x20' + green + _0x55bbea(0x2a8) + yellow + _0x4e10f5 + '\x20' + (_0x976215 ? _0x976215 : '') + white + _0x55bbea(0x344) + green + 'Unidentified\x20|\x20' + blue + _0x55bbea(0x28d))), console[_0x55bbea(0x24c)](_0x3c1b82[_0x55bbea(0x1dd)](_0x3c1b82[_0x55bbea(0x236)](_0x3c1b82[_0x55bbea(0x2a5)](getTimeStamp), error), _0x3c1b82[_0x55bbea(0x335)]) + _0x532f70[_0x55bbea(0x305)]), delete cooldownData[_0xdd03b1];
            try {
                _0x2216a9[_0x55bbea(0x30f)](cooldownJSON, JSON[_0x55bbea(0x2ef)](cooldownData, null, 0x8af + -0x16df + -0x9e * -0x17), _0x3c1b82['ecHmO']), _0x3c1b82[_0x55bbea(0x2b2)](updateCooldownData);
                const _0x5088c0 = _0x3c1b82[_0x55bbea(0x22d)](addCooldown, _0xdd03b1);
                _0x5088c0['errorMsg'] && (console['log'](_0x3c1b82[_0x55bbea(0x2a2)](_0x3c1b82[_0x55bbea(0x2a0)](_0x3c1b82[_0x55bbea(0x1ac)](getTimeStamp), info), _0x55bbea(0x265) + _0xdd03b1 + '.')), console['log'](getTimeStamp() + error + _0x5088c0[_0x55bbea(0x385)]));
            } catch (_0x588f82) {
                console[_0x55bbea(0x24c)](_0x3c1b82[_0x55bbea(0x1a4)](_0x3c1b82[_0x55bbea(0x213)](_0x3c1b82[_0x55bbea(0x315)](getTimeStamp), error), _0x588f82['message']));
            }
            _0x4b278e++;
        }
    }
    !_0x3f7119 ? console[_0x55bbea(0x24c)](_0x3c1b82[_0x55bbea(0x33f)](_0x3c1b82[_0x55bbea(0x26e)](_0x3c1b82[_0x55bbea(0x2a5)](getTimeStamp), info), '' + yellow + (_0x976215 ? _0x976215 : '') + yellow + 'Total\x20Likes\x20Count' + white + _0x55bbea(0x344) + green + (icon ? _0x3c1b82[_0x55bbea(0x345)] : '') + _0x55bbea(0x27b))) : console[_0x55bbea(0x24c)](_0x3c1b82[_0x55bbea(0x20d)](_0x3c1b82['egWGU'](getTimeStamp), info) + ('' + yellow + (_0x976215 ? _0x976215 : '') + yellow + _0x55bbea(0x1d7) + white + _0x55bbea(0x344) + _0x3c1b82[_0x55bbea(0x297)](green, _0x3f7119))), await _0x3c1b82[_0x55bbea(0x31c)](Goback);
}
async function logInfo(_0x11a054, _0x5de846) {
    const _0x49681b = _0x19aaef, _0x57b9e2 = {
            'BQmWV': function (_0x2061e7, _0x49440c, _0x5769da) {
                return _0x2061e7(_0x49440c, _0x5769da);
            },
            'oNHCP': function (_0x4376bd, _0x5abb3e) {
                return _0x4376bd + _0x5abb3e;
            },
            'oaPpl': function (_0xa11764, _0x402f1c) {
                return _0xa11764 + _0x402f1c;
            },
            'FgKQh': function (_0x4e32fc) {
                return _0x4e32fc();
            },
            'tJTcv': _0x49681b(0x1d3),
            'jJvTR': function (_0x229055, _0x25ba76) {
                return _0x229055 + _0x25ba76;
            },
            'YdvBU': _0x49681b(0x1bf),
            'YyeyG': function (_0x20ee64, _0x55b232) {
                return _0x20ee64 + _0x55b232;
            }
        };
    await _0x57b9e2[_0x49681b(0x250)](animate, _0x57b9e2[_0x49681b(0x1e8)](_0x57b9e2[_0x49681b(0x2b8)](_0x57b9e2[_0x49681b(0x364)](getTimeStamp), info), (icon ? _0x57b9e2[_0x49681b(0x206)] : '') + _0x49681b(0x301) + _0x57b9e2['jJvTR'](green, _0x11a054) + (icon ? _0x57b9e2[_0x49681b(0x262)] : '')), -0x252e * 0x1 + -0x16a + 0x7bb * 0x5), await _0x57b9e2[_0x49681b(0x250)](animate, _0x57b9e2[_0x49681b(0x2b8)](_0x57b9e2[_0x49681b(0x364)](getTimeStamp), info) + ((icon ? '\x20' : '') + _0x49681b(0x1b5) + _0x57b9e2['YyeyG'](green, _0x5de846)), -0x22f * -0xd + -0xe82 + -0xdd2);
}
async function loggingSymbols() {
    const _0x86d4d5 = _0x19aaef, _0x7703aa = {
            'joCrI': function (_0x288b84) {
                return _0x288b84();
            },
            'UDuJK': function (_0x5190ec, _0x299865) {
                return _0x5190ec(_0x299865);
            },
            'uxnBz': 'BACK',
            'KXZZj': _0x86d4d5(0x1a8),
            'LrdAq': _0x86d4d5(0x350),
            'NQOuY': function (_0xf5d67b, _0x58589b) {
                return _0xf5d67b + _0x58589b;
            },
            'YTADP': function (_0x1efbc3, _0xcc90cf) {
                return _0x1efbc3 + _0xcc90cf;
            },
            'wsHMn': function (_0xb38da6) {
                return _0xb38da6();
            },
            'RKRfW': function (_0x152b7e, _0x3fb622) {
                return _0x152b7e + _0x3fb622;
            },
            'zlXkK': function (_0x46ce45, _0x1a83d3) {
                return _0x46ce45 + _0x1a83d3;
            },
            'kASjG': function (_0x583d43, _0x15141c) {
                return _0x583d43 === _0x15141c;
            },
            'GeRCa': function (_0x50e0f6, _0x357a8a) {
                return _0x50e0f6 + _0x357a8a;
            },
            'YfqqR': function (_0x10b6d7, _0x3ca344) {
                return _0x10b6d7(_0x3ca344);
            },
            'hTxtx': function (_0x3b2d22, _0x57a575) {
                return _0x3b2d22 + _0x57a575;
            },
            'wETjH': _0x86d4d5(0x37f),
            'qMuuU': 'icon',
            'errct': function (_0x475573, _0x2b1145, _0xa4c918) {
                return _0x475573(_0x2b1145, _0xa4c918);
            },
            'ealAT': function (_0x3bad14, _0x42d0aa) {
                return _0x3bad14 + _0x42d0aa;
            },
            'HpZLh': function (_0x46fb86, _0x409a78, _0x3262d8) {
                return _0x46fb86(_0x409a78, _0x3262d8);
            },
            'aKoNj': _0x86d4d5(0x239),
            'mnkxJ': function (_0x31b8f5) {
                return _0x31b8f5();
            },
            'xQSnv': function (_0x23ca8c) {
                return _0x23ca8c();
            },
            'dDzwa': function (_0x4bad08) {
                return _0x4bad08();
            }
        };
    try {
        _0x7703aa[_0x86d4d5(0x36d)](setClear), await _0x7703aa['UDuJK'](animate, banner), console[_0x86d4d5(0x24c)]();
        const {loggingSym: _0x3e14c1} = await inquirer[_0x86d4d5(0x2b9)](prompts[_0x86d4d5(0x228)]);
        if (_0x3e14c1[_0x86d4d5(0x1b4)](_0x7703aa[_0x86d4d5(0x1ef)])) {
            await _0x7703aa[_0x86d4d5(0x36d)](main);
            return;
        }
        let _0xe3cc9 = _0x3e14c1['includes'](_0x7703aa['KXZZj']);
        if (_0xe3cc9 && _0x3e14c1[_0x86d4d5(0x1b4)](_0x7703aa[_0x86d4d5(0x371)])) {
            await _0x7703aa[_0x86d4d5(0x28b)](animate, _0x7703aa[_0x86d4d5(0x2e9)](_0x7703aa[_0x86d4d5(0x389)](_0x7703aa['wsHMn'](getTimeStamp), info), _0x86d4d5(0x1f5))), console[_0x86d4d5(0x24c)](_0x7703aa[_0x86d4d5(0x198)](_0x7703aa[_0x86d4d5(0x1ce)](_0x7703aa[_0x86d4d5(0x1b8)](getTimeStamp), info), '\x20'));
            let {user: _0x419bfd} = await inquirer[_0x86d4d5(0x2b9)](prompts['testUserIcon']);
            if (_0x7703aa[_0x86d4d5(0x304)](_0x419bfd['toLowerCase'](), 'y'))
                _0xe3cc9 = !![];
            else {
                if (_0x7703aa['kASjG'](_0x419bfd[_0x86d4d5(0x266)](), 'n')) {
                    const _0x3c1d4 = _0x7703aa[_0x86d4d5(0x2e9)](_0x7703aa[_0x86d4d5(0x1ce)](fontDir, '/'), font), _0xc6e7f8 = _0x7703aa['GeRCa'](_0x7703aa['GeRCa']($HOME, '/'), $termux);
                    !_0x2216a9[_0x86d4d5(0x221)](_0xc6e7f8) && _0x7703aa[_0x86d4d5(0x1c9)](execSync, _0x86d4d5(0x1de) + _0xc6e7f8), _0x7703aa[_0x86d4d5(0x28b)](execSync, 'cp\x20' + _0x3c1d4 + '\x20' + _0x7703aa['GeRCa'](_0x7703aa[_0x86d4d5(0x2e5)](_0xc6e7f8, '/'), $termuxttf)), cookiesJSONParsed[_0x7703aa[_0x86d4d5(0x23b)]][_0x7703aa['qMuuU']] = !![], _0x2216a9[_0x86d4d5(0x30f)](cookieJSONLocate, JSON[_0x86d4d5(0x2ef)](cookiesJSONParsed, null, 0x1711 + 0x1f00 + -0x360f), _0x86d4d5(0x239)), await _0x7703aa[_0x86d4d5(0x277)](animate, _0x7703aa[_0x86d4d5(0x30b)](_0x7703aa[_0x86d4d5(0x2e5)](getTimeStamp(), info), _0x86d4d5(0x19e)), -0x4ec + -0xb68 + 0x1d1 * 0x9), await _0x7703aa[_0x86d4d5(0x1a3)](animate, _0x7703aa[_0x86d4d5(0x30b)](_0x7703aa[_0x86d4d5(0x1b8)](getTimeStamp) + info, _0x86d4d5(0x2d3) + green + _0x86d4d5(0x38a)), -0x24af * 0x1 + 0xc62 + 0x236 * 0xb), process[_0x86d4d5(0x261)]();
                }
            }
        }
        cookiesJSONParsed[_0x86d4d5(0x37f)][_0x7703aa[_0x86d4d5(0x295)]] = _0xe3cc9, _0x2216a9['writeFileSync'](cookieJSONLocate, JSON['stringify'](cookiesJSONParsed, null, 0x1599 + 0x3c1 + -0x1958), _0x7703aa[_0x86d4d5(0x33a)]), _0x7703aa['mnkxJ'](UpdateCookies), console['log']('' + _0x7703aa[_0x86d4d5(0x32c)](getTimeStamp) + info + _0x86d4d5(0x230)), console['log']('' + _0x7703aa['dDzwa'](getTimeStamp) + info + _0x86d4d5(0x22c) + green + _0x86d4d5(0x38a)), process['exit']();
    } catch (_0x35510d) {
        console[_0x86d4d5(0x24c)](_0x7703aa[_0x86d4d5(0x308)](_0x7703aa[_0x86d4d5(0x1ce)](_0x7703aa[_0x86d4d5(0x36d)](getTimeStamp), error), _0x86d4d5(0x353))), console['log'](_0x7703aa[_0x86d4d5(0x308)](_0x7703aa['xQSnv'](getTimeStamp) + error, _0x35510d[_0x86d4d5(0x305)])), process['exit']();
    }
}
async function main() {
    const _0x5cf22f = _0x19aaef, _0x5c94a8 = {
            'DTrsL': function (_0x2738c5, _0x1de774, _0x206aa3) {
                return _0x2738c5(_0x1de774, _0x206aa3);
            },
            'VPVOA': _0x5cf22f(0x35f),
            'LiZqT': '󱛤\x20\x20',
            'cZzzg': '󱛔\x20\x20',
            'tWzBn': '\x20\x20',
            'MyWGl': '󱔁\x20\x20',
            'acSCl': _0x5cf22f(0x1f3),
            'kveWi': function (_0x36cbc7, _0x2a177c) {
                return _0x36cbc7 === _0x2a177c;
            },
            'HkUUA': function (_0x2195c5) {
                return _0x2195c5();
            },
            'pMGSg': function (_0x30be7f, _0x46fd75) {
                return _0x30be7f === _0x46fd75;
            },
            'wALDc': function (_0x504db4) {
                return _0x504db4();
            },
            'UXnyW': function (_0x2692f4) {
                return _0x2692f4();
            }
        };
    setClear(), await animate(banner), await _0x5c94a8['DTrsL'](animate, '\x0a' + yellow + '(1)\x20' + blue + (icon ? _0x5c94a8[_0x5cf22f(0x2c2)] : '') + _0x5cf22f(0x36e) + green + '(LIKE,\x20LOVE,\x20HAHA,\x20WOW,\x20SAD,\x20CARE,\x20ANGRY)\x0a' + yellow + _0x5cf22f(0x1f1) + blue + (icon ? _0x5c94a8[_0x5cf22f(0x22f)] : '') + 'ShowCookie\x20' + green + '(Display\x20Cookie\x20Information)\x0a' + yellow + '(3)\x20' + blue + (icon ? _0x5c94a8[_0x5cf22f(0x2c5)] : '') + 'CookieManagement\x20' + green + _0x5cf22f(0x220) + yellow + _0x5cf22f(0x2f7) + blue + (icon ? _0x5c94a8['tWzBn'] : '') + _0x5cf22f(0x278) + green + _0x5cf22f(0x1f9) + yellow + _0x5cf22f(0x377) + blue + (icon ? _0x5c94a8[_0x5cf22f(0x1f8)] : '') + _0x5cf22f(0x1da) + green + _0x5cf22f(0x276) + yellow + _0x5cf22f(0x2c1) + blue + (icon ? _0x5c94a8[_0x5cf22f(0x34c)] : '') + _0x5cf22f(0x326) + green + '(Exit\x20The\x20Program)\x0a', 0x2077 + -0x9d6 + -0x169f);
    let {cmd: _0x278e74} = await inquirer[_0x5cf22f(0x2b9)](prompts['getMainCommand']);
    _0x278e74 = parseInt(_0x278e74);
    if (_0x278e74 === 0x1ef1 + -0x1864 + -0x68c * 0x1)
        FBLikers();
    else {
        if (_0x5c94a8[_0x5cf22f(0x2f9)](_0x278e74, 0x1222 + 0x2c2 * -0xb + 0xc36))
            _0x5c94a8[_0x5cf22f(0x1cb)](ShowCookie);
        else {
            if (_0x5c94a8['pMGSg'](_0x278e74, 0x1f * -0xc1 + -0x23f7 + -0x3b59 * -0x1))
                _0x5c94a8['HkUUA'](CookieManagement);
            else {
                if (_0x278e74 === -0x1 * 0xfef + 0x9df * -0x2 + -0x1 * -0x23b1)
                    _0x5c94a8[_0x5cf22f(0x1cb)](Feedback);
                else {
                    if (_0x5c94a8['kveWi'](_0x278e74, -0xf3 * 0x1 + -0xcde + -0x142 * -0xb))
                        _0x5c94a8['wALDc'](loggingSymbols);
                    else
                        _0x5c94a8['kveWi'](_0x278e74, 0x1c * 0xc5 + -0x914 + 0x76 * -0x1b) && await _0x5c94a8[_0x5cf22f(0x204)](exit);
                }
            }
        }
    }
}
main(), process['on'](_0x19aaef(0x2b6), () => {
    const _0x4cc03f = _0x19aaef, _0x194ce6 = {
            'YSQgv': function (_0x8de06b, _0x486452) {
                return _0x8de06b + _0x486452;
            },
            'xLheB': function (_0x1b2d32, _0x59d6f8) {
                return _0x1b2d32 + _0x59d6f8;
            },
            'oKhcP': function (_0x1dfeca) {
                return _0x1dfeca();
            }
        };
    console[_0x4cc03f(0x24c)](_0x194ce6[_0x4cc03f(0x1e3)](_0x194ce6[_0x4cc03f(0x210)]('\x0a', _0x194ce6['oKhcP'](getTimeStamp)), info) + 'Keyboard\x20Interrupt'), process['exit']();
});