! function (e) {
    function t(t) {
        for (var n, r, s = t[0], i = t[1], _ = t[2], u = 0, d = []; u < s.length; u++) r = s[u], Object.prototype.hasOwnProperty.call(c, r) && c[r] && d.push(c[r][0]), c[r] = 0;
        for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
        for (l && l(t); d.length;) d.shift()();
        return o.push.apply(o, _ || []), a()
    }

    function a() {
        for (var e, t = 0; t < o.length; t++) {
            for (var a = o[t], n = !0, r = 1; r < a.length; r++) {
                var i = a[r];
                0 !== c[i] && (n = !1)
            }
            n && (o.splice(t--, 1), e = s(s.s = a[0]))
        }
        return e
    }
    var n = {},
        r = {
            app: 0
        },
        c = {
            app: 0
        },
        o = [];

    function s(t) {
        return n[t].exports;
        if (n[t]) return n[t].exports;
        // var a = n[t] = {
        //     i: t,
        //     l: !1,
        //     exports: {}
        // };
        // return e[t].call(a.exports, a, a.exports, s), a.l = !0, a.exports
    }
    s.e = function (e) {
        var t = [];
        r[e] ? t.push(r[e]) : 0 !== r[e] && {
            "chunk-21b98daa": 1,
            "chunk-5979c0e8": 1,
            "chunk-53b2f106": 1,
            "chunk-ac1ecc8a": 1
        } [e] && t.push(r[e] = new Promise((function (t, a) {
            for (var n = "css/" + ({} [e] || e) + "." + {
                    "chunk-0f765c28": "31d6cfe0",
                    "chunk-2ccfc9c1": "31d6cfe0",
                    "chunk-2d0b724a": "31d6cfe0",
                    "chunk-035fe573": "31d6cfe0",
                    "chunk-0ff20e17": "31d6cfe0",
                    "chunk-1b613fa8": "31d6cfe0",
                    "chunk-21b98daa": "83f2b813",
                    "chunk-2bd53673": "31d6cfe0",
                    "chunk-40345724": "31d6cfe0",
                    "chunk-3de452c0": "31d6cfe0",
                    "chunk-5979c0e8": "21090a01",
                    "chunk-60a97f3a": "31d6cfe0",
                    "chunk-95ef1cbc": "31d6cfe0",
                    "chunk-bcf69a06": "31d6cfe0",
                    "chunk-2d0c1949": "31d6cfe0",
                    "chunk-2d0e6323": "31d6cfe0",
                    "chunk-2d21f0f5": "31d6cfe0",
                    "chunk-2d2301a0": "31d6cfe0",
                    "chunk-308394ca": "31d6cfe0",
                    "chunk-3b6443de": "31d6cfe0",
                    "chunk-02fff800": "31d6cfe0",
                    "chunk-2d0def14": "31d6cfe0",
                    "chunk-3a401db5": "31d6cfe0",
                    "chunk-4db0e8fe": "31d6cfe0",
                    "chunk-446197e5": "31d6cfe0",
                    "chunk-53b2f106": "61e33c39",
                    "chunk-56a0d4e8": "31d6cfe0",
                    "chunk-58306597": "31d6cfe0",
                    "chunk-5cc32478": "31d6cfe0",
                    "chunk-8624371a": "31d6cfe0",
                    "chunk-99a2a278": "31d6cfe0",
                    "chunk-abdb8090": "31d6cfe0",
                    "chunk-ac1ecc8a": "4f17309c",
                    "chunk-c923218e": "31d6cfe0",
                    "chunk-df9d098c": "31d6cfe0"
                } [e] + ".css", c = s.p + n, o = document.getElementsByTagName("link"), i = 0; i < o.length; i++) {
                var _ = (l = o[i]).getAttribute("data-href") || l.getAttribute("href");
                if ("stylesheet" === l.rel && (_ === n || _ === c)) return t()
            }
            var u = document.getElementsByTagName("style");
            for (i = 0; i < u.length; i++) {
                var l;
                if ((_ = (l = u[i]).getAttribute("data-href")) === n || _ === c) return t()
            }
            var d = document.createElement("link");
            d.rel = "stylesheet", d.type = "text/css", d.onload = t, d.onerror = function (t) {
                var n = t && t.target && t.target.src || c,
                    o = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
                o.code = "CSS_CHUNK_LOAD_FAILED", o.request = n, delete r[e], d.parentNode.removeChild(d), a(o)
            }, d.href = c, document.getElementsByTagName("head")[0].appendChild(d)
        })).then((function () {
            r[e] = 0
        })));
        var a = c[e];
        if (0 !== a)
            if (a) t.push(a[2]);
            else {
                var n = new Promise((function (t, n) {
                    a = c[e] = [t, n]
                }));
                t.push(a[2] = n);
                var o, i = document.createElement("script");
                i.charset = "utf-8", i.timeout = 120, s.nc && i.setAttribute("nonce", s.nc), i.src = function (e) {
                    return s.p + "js/" + ({} [e] || e) + "." + {
                        "chunk-0f765c28": "9a022a20",
                        "chunk-2ccfc9c1": "97aa778b",
                        "chunk-2d0b724a": "4fadf3a9",
                        "chunk-035fe573": "752ea458",
                        "chunk-0ff20e17": "7dc21a31",
                        "chunk-1b613fa8": "96cbeeba",
                        "chunk-21b98daa": "db06cfe9",
                        "chunk-2bd53673": "8e19dc02",
                        "chunk-40345724": "0104eaeb",
                        "chunk-3de452c0": "27b35999",
                        "chunk-5979c0e8": "4cba4aef",
                        "chunk-60a97f3a": "38be1c08",
                        "chunk-95ef1cbc": "35e279b2",
                        "chunk-bcf69a06": "c410b228",
                        "chunk-2d0c1949": "4907f176",
                        "chunk-2d0e6323": "017fab59",
                        "chunk-2d21f0f5": "f65f03a8",
                        "chunk-2d2301a0": "4819d183",
                        "chunk-308394ca": "4531b410",
                        "chunk-3b6443de": "0fdda0ca",
                        "chunk-02fff800": "a6286e85",
                        "chunk-2d0def14": "2b0b2cca",
                        "chunk-3a401db5": "3b0c1d83",
                        "chunk-4db0e8fe": "e0b878ab",
                        "chunk-446197e5": "feb2fe5f",
                        "chunk-53b2f106": "57c28666",
                        "chunk-56a0d4e8": "d3a56b8d",
                        "chunk-58306597": "792adf1c",
                        "chunk-5cc32478": "2affc495",
                        "chunk-8624371a": "281d8653",
                        "chunk-99a2a278": "5fc4e334",
                        "chunk-abdb8090": "1a290db8",
                        "chunk-ac1ecc8a": "9ad04247",
                        "chunk-c923218e": "6abebf37",
                        "chunk-df9d098c": "5fc53b55"
                    } [e] + ".js"
                }(e);
                var _ = new Error;
                o = function (t) {
                    i.onerror = i.onload = null, clearTimeout(u);
                    var a = c[e];
                    if (0 !== a) {
                        if (a) {
                            var n = t && ("load" === t.type ? "missing" : t.type),
                                r = t && t.target && t.target.src;
                            _.message = "Loading chunk " + e + " failed.\n(" + n + ": " + r + ")", _.name = "ChunkLoadError", _.type = n, _.request = r, a[1](_)
                        }
                        c[e] = void 0
                    }
                };
                var u = setTimeout((function () {
                    o({
                        type: "timeout",
                        target: i
                    })
                }), 12e4);
                i.onerror = i.onload = o, document.head.appendChild(i)
            } return Promise.all(t)
    }, s.m = e, s.c = n, s.d = function (e, t, a) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }, s.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.t = function (e, t) {
        if (1 & t && (e = s(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (s.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) s.d(a, n, function (t) {
                return e[t]
            }.bind(null, n));
        return a
    }, s.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return s.d(t, "a", t), t
    }, s.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, s.p = "https://jt-asia.guojilx.com/newap/game/", s.oe = function (e) {
        throw console.error(e), e
    };
    var i = window.webpackJsonp = window.webpackJsonp || [],
        _ = i.push.bind(i);
    i.push = t, i = i.slice();
    for (var u = 0; u < i.length; u++) t(i[u]);
    var l = _;
    o.push([0, "chunk-vendors"]), a()
}({
    0: function (e, t, a) {
        a("db4d"), e.exports = a("56d7")
    },
    "0e0b": function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.d(__webpack_exports__, "a", (function () {
            return adaptive
        })), __webpack_require__.d(__webpack_exports__, "b", (function () {
            return checkScreen
        })), __webpack_require__.d(__webpack_exports__, "i", (function () {
            return getLocationValue
        })), __webpack_require__.d(__webpack_exports__, "f", (function () {
            return fillZero
        })), __webpack_require__.d(__webpack_exports__, "m", (function () {
            return minToast
        })), __webpack_require__.d(__webpack_exports__, "l", (function () {
            return maxToast
        })), __webpack_require__.d(__webpack_exports__, "c", (function () {
            return dateForHMS
        })), __webpack_require__.d(__webpack_exports__, "d", (function () {
            return dateForYMD
        })), __webpack_require__.d(__webpack_exports__, "h", (function () {
            return getDay
        })), __webpack_require__.d(__webpack_exports__, "s", (function () {
            return today
        })), __webpack_require__.d(__webpack_exports__, "q", (function () {
            return thisToday
        })), __webpack_require__.d(__webpack_exports__, "B", (function () {
            return yestoday
        })), __webpack_require__.d(__webpack_exports__, "r", (function () {
            return thisWeek
        })), __webpack_require__.d(__webpack_exports__, "k", (function () {
            return lastWeek
        })), __webpack_require__.d(__webpack_exports__, "o", (function () {
            return setGameNotice
        })), __webpack_require__.d(__webpack_exports__, "A", (function () {
            return transferZodiac
        })), __webpack_require__.d(__webpack_exports__, "v", (function () {
            return transferGameType
        })), __webpack_require__.d(__webpack_exports__, "z", (function () {
            return transferResult
        })), __webpack_require__.d(__webpack_exports__, "x", (function () {
            return transferK3Trend
        })), __webpack_require__.d(__webpack_exports__, "u", (function () {
            return transferGameOrder
        })), __webpack_require__.d(__webpack_exports__, "t", (function () {
            return transferGameName
        })), __webpack_require__.d(__webpack_exports__, "n", (function () {
            return permutation
        })), __webpack_require__.d(__webpack_exports__, "w", (function () {
            return transferK
        })), __webpack_require__.d(__webpack_exports__, "g", (function () {
            return findIndex
        })), __webpack_require__.d(__webpack_exports__, "y", (function () {
            return transferLuckyColor
        })), __webpack_require__.d(__webpack_exports__, "p", (function () {
            return setSession
        })), __webpack_require__.d(__webpack_exports__, "j", (function () {
            return getSession
        })), __webpack_require__.d(__webpack_exports__, "e", (function () {
            return delSession
        }));
        var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("99af"),
            core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__),
            core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cb29"),
            core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(core_js_modules_es_array_fill__WEBPACK_IMPORTED_MODULE_1__),
            core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("a630"),
            core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_2__),
            core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("caad"),
            core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_3__),
            core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("a15b"),
            core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(core_js_modules_es_array_join__WEBPACK_IMPORTED_MODULE_4__),
            core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("13d5"),
            core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_5__),
            core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("fb6a"),
            core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__),
            core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("45fc"),
            core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_7__),
            core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("b0c0"),
            core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_8__),
            core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("a9e3"),
            core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_9___default = __webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_9__),
            core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("d3b7"),
            core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = __webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__),
            core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("4d63"),
            core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_11___default = __webpack_require__.n(core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_11__),
            core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("ac1f"),
            core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_12___default = __webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_12__),
            core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("25f0"),
            core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13___default = __webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_13__),
            core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("6062"),
            core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_14___default = __webpack_require__.n(core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_14__),
            core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("2532"),
            core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_15___default = __webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_15__),
            core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("3ca3"),
            core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16___default = __webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_16__),
            core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("466d"),
            core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_17___default = __webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_17__),
            core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("1276"),
            core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_18___default = __webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_18__),
            core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("ddb0"),
            core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_19___default = __webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_19__),
            _Users_badgateway_Desktop_network_Vue_lottery_RM_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("2909");

        function adaptive() {
            var e = document.documentElement,
                t = "orientationchange" in window ? "orientationchange" : "resize",
                a = function () {
                    var t = e.clientWidth;
                    t && (e.style.fontSize = "".concat(t / 750 * 100, "px"))
                };
            document.addEventListener && (window.addEventListener(t, a, !1), document.addEventListener("DOMContentLoaded", a, !1), document.body.addEventListener("touchmove", (function (e) {
                return e.preventDefault()
            }), {
                passive: !1
            }))
        }

        function getDay(e, t) {
            var a = new Date(e.getTime() + 24 * t * 3600 * 1e3),
                n = a.getFullYear(),
                r = a.getMonth() + 1,
                c = a.getDate();
            r = fillZero(r), c = fillZero(c);
            var o = new Date(e.getTime() + 24 * (t + 1) * 3600 * 1e3),
                s = o.getFullYear(),
                i = o.getMonth() + 1,
                _ = o.getDate();
            return i = fillZero(i), _ = fillZero(_), {
                beginTime: "".concat(n, "-").concat(r, "-").concat(c, " 08:00:00"),
                endTime: "".concat(s, "-").concat(i, "-").concat(_, " 08:00:00")
            }
        }

        function transferForSix(e) {
            var t = e.getFullYear(),
                a = fillZero(e.getMonth() + 1),
                n = fillZero(e.getDate());
            return "".concat(t, "-").concat(a, "-").concat(n, " 08:00:00")
        }

        function today() {
            return transferForSix(new Date).split(" ")[0]
        }

        function thisToday() {
            var e = new Date,
                t = new Date(e.getTime() + 864e5);
            return {
                beginTime: transferForSix(e),
                endTime: transferForSix(t)
            }
        }

        function yestoday() {
            var e = new Date;
            return {
                beginTime: transferForSix(new Date(e.getTime() - 864e5)),
                endTime: transferForSix(e)
            }
        }

        function thisWeek() {
            var e, t, a = (new Date).getDay() - 1;
            return a >= 0 ? (e = new Date((new Date).getTime() - 24 * a * 3600 * 1e3), t = new Date((new Date).getTime() + 24 * (7 - a) * 3600 * 1e3)) : (e = new Date((new Date).getTime() - 24 * (7 + a) * 3600 * 1e3), t = new Date((new Date).getTime() - 24 * a * 3600 * 1e3)), {
                beginTime: transferForSix(e),
                endTime: transferForSix(t)
            }
        }

        function halfMonth() {
            var e = new Date;
            return {
                beginTime: transferForSix(new Date(e.getTime() - 1296e6)),
                endTime: transferForSix(e)
            }
        }

        function lastWeek() {
            var e, t, a = (new Date).getDay() - 1;
            return a >= 0 ? (e = new Date((new Date).getTime() - 24 * a * 3600 * 1e3), t = new Date(e.getTime() - 6048e5)) : (t = new Date((new Date).getTime() - 11232e5), e = new Date((new Date).getTime() - 5184e5)), {
                beginTime: transferForSix(t),
                endTime: transferForSix(e)
            }
        }

        function getSevenDays(e) {
            var t = new Date(e.getTime() + 24 * e.getDay() * 3600 * 1e3),
                a = new Date(e.getTime() - 24 * (7 - e.getDay()) * 3600 * 1e3),
                n = a.getFullYear(),
                r = a.getMonth() + 1,
                c = a.getDate();
            r = fillZero(r), c = fillZero(c);
            var o = t.getFullYear(),
                s = t.getMonth() + 1,
                i = t.getDate();
            return s = fillZero(s), i = fillZero(i), {
                beginTime: "".concat(n, "-").concat(r, "-").concat(c, " 08:00:00"),
                endTime: "".concat(o, "-").concat(s, "-").concat(i, " 08:00:00")
            }
        }

        function checkScreen() {
            /Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent) ? setSession("DEVICE", 5) : setSession("DEVICE", 1)
        }

        function getLocationValue(e) {
            var t = new RegExp("(^|&)".concat(e, "=([^&]*)(&|$)")),
                a = window.apiHostSettings.HOST_URL.substr(1).match(t);
            if (a) return decodeURI(a[2])
        }

        function fadeIn(e, t) {
            e.style.opacity = 0, e.style.display = t || "block",
                function t() {
                    var a = parseFloat(e.style.opacity);
                    (a += .1) > 1 || (e.style.opacity = a, requestAnimationFrame(t))
                }()
        }

        function fadeOut(e) {
            e.style.opacity = 1,
                function t() {
                    (e.style.opacity -= .1) < 0 ? e.style.display = "none" : requestAnimationFrame(t)
                }()
        }

        function minToast(e, t) {
            t = t || 3e4;
            var a, n, r = document.getElementById("minToast");
            r ? r.innerText = e : ((a = document.createElement("div")).innerHTML = '<div id="minToast" style="background:rgba(0,0,0,.68); height: 1rem; line-height: 1rem; text-align: center; font-size: .28rem; color: #fff; width: 4.8rem; position: fixed; top: 40vh; left: 1.75rem; z-index: 999; border-radius: .5rem; box-shadow: 0 .04rem .1rem #fff; display: none;">'.concat(e, "</div>"), document.body.appendChild(a)), fadeIn(n = document.getElementById("minToast")), setTimeout((function () {
                return fadeOut(n)
            }), t)
        }

        function maxToast(e, t) {
            t = t || 3e4;
            var a, n, r = document.getElementById("maxToast");
            r ? r.innerText = e : ((a = document.createElement("div")).innerHTML = '<div id="maxToast" style="background:rgba(0,0,0,.68); height: 32px; line-height: 32px; text-align: center; font-size: 14px; color: #fff; width: 160px; position: fixed; top: calc(50vh - 16px); left: calc(50% - 80px); z-index: 999; border-radius: 16px; box-shadow: 0 .04rem .1rem #a69b91; display: none;">'.concat(e, "</div>"), document.body.appendChild(a)), fadeIn(n = document.getElementById("maxToast")), setTimeout((function () {
                return fadeOut(n)
            }), t)
        }

        function dateForHMS(e) {
            var t, a;
            return [t = fillZero(Math.floor(e / 3600)), a = fillZero(Math.floor((e - 3600 * t) / 60)), fillZero(e - 3600 * t - 60 * a)]
        }

        function dateForYMD(e) {
            var t, a = new Date,
                n = [];
            if (0 === e) n.push("".concat(a.getFullYear(), "-").concat(fillZero(a.getMonth() + 1), "-").concat(fillZero(a.getDate())));
            else
                for (var r = 0; r <= Math.abs(e); r++) t = e < 0 ? new Date(a.getTime() - 24 * r * 3600 * 1e3) : new Date(a.getTime() + 24 * r * 3600 * 1e3), n.push("".concat(t.getFullYear(), "-").concat(fillZero(t.getMonth() + 1), "-").concat(fillZero(t.getDate())));
            return n.sort()
        }

        function fillZero(e) {
            return e < 10 ? "0".concat(e) : e
        }

        function setSession(e, t) {
            window.sessionStorage.setItem(e, t)
        }

        function getSession(e) {
            return window.sessionStorage.getItem(e)
        }

        function delSession(e) {
            window.sessionStorage.removeItem(e)
        }

        function setLocal(e, t) {
            window.localStorage.setItem(e, t)
        }

        function getLocal(e) {
            return window.localStorage.getItem(e)
        }

        function delLocal(e) {
            return window.localStorage.removeItem(e)
        }

        function ascendingOrder(e, t) {
            return e - t
        }

        function descending(e, t) {
            return t - e
        }

        function setGameNotice(e, t) {
            var a = "";
            return e.reverse().some((function (e) {
                e.content && (e.content = JSON.parse(e.content), a += "".concat(e.content[t] ? e.content[t] : e.content.kr, " "))
            })), a
        }

        function takeThree(e, t) {
            var a = t.slice(e, e + 3).sort(ascendingOrder),
                n = new Array(2);
            return a.some((function (e) {
                e = Number(e)
            })), n[0] = a[2] - a[1] == 0 ? 1 : 0, n[0] = a[1] - a[0] == 0 ? ++n[0] : n[0], n[1] = a[2] - a[1] == 1 ? 1 : 0, n[1] = a[1] - a[0] == 1 ? ++n[1] : n[1], n[1] = a[2] - a[0] == 9 ? ++n[1] : n[1], 2 == n[0] ? "豹子" : 2 == n[1] ? "顺子" : 1 == n[0] ? "对子" : 1 == n[1] ? "半顺" : "杂六"
        }

        function stud(e) {
            var t = [],
                a = Array.from(new Set(e)).length;
            switch (a) {
                case 1:
                    return "五条";
                case 2:
                case 3:
                    return Array.from(new Set(e)).some((function (a) {
                        t.push(e.reduce((function (e, t) {
                            return a === t ? e + 1 : e
                        }), 0))
                    })), 4 === Math.max.apply(null, t) ? "四条" : 3 === Math.max.apply(null, t) && 2 === a ? "葫芦" : 3 === Math.max.apply(null, t) && 3 === a ? "三条" : "两对";
                case 4:
                    return "一对";
                default:
                    var n = e.slice(0);
                    n.sort(ascendingOrder), n.some((function (e) {
                        e = Number(e)
                    }));
                    for (var r = new Array, c = 0; c < n.length; c++)
                        for (var o = c; o < n.length; o++) n[o] - n[c] != 9 && n[o] - n[c] != 1 || r.push(n[o]);
                    return 4 == r.length ? "顺子" : "散号"
            }
        }

        function bullFight(result) {
            var bullFightResult = function () {
                for (var x = 0; x < 3; x++)
                    for (var y = x + 1; y < 4; y++)
                        for (var z = y + 1; z < 5; z++)
                            if (eval([result[x], result[y], result[z]].join("+")) % 10 == 0) return [eval(result.join("+")) - eval([result[x], result[y], result[z]].join("+")), !0];
                return [0, !1]
            }();
            return bullFightResult[1] ? bullFightResult[0] % 10 == 0 ? "牛牛" : bullFightResult[0] > 10 ? "牛".concat(bullFightResult[0] - 10) : "牛".concat(bullFightResult[0]) : "没牛"
        }

        function transferZodiac(e) {
            switch (e) {
                case 1:
                    return "鼠";
                case 2:
                    return "猪";
                case 3:
                    return "狗";
                case 4:
                    return "鸡";
                case 5:
                    return "猴";
                case 6:
                    return "羊";
                case 7:
                    return "马";
                case 8:
                    return "蛇";
                case 9:
                    return "龙";
                case 10:
                    return "兔";
                case 11:
                    return "虎";
                case 12:
                    return "牛"
            }
        }

        function transferGameName(e) {
            switch (e) {
                case "FC3D":
                    return "福彩3D";
                case "PL3":
                    return "排列三";
                case "BJPK10":
                    return "北京PK10";
                case "PK102":
                    return "极速PK10";
                case "PK103":
                    return "朱雀PK10";
                case "PK104":
                    return "三分PK10";
                case "PK105":
                    return "五分PK10";
                case "XYFT":
                    return "168幸运飞艇";
                case "XYSC":
                    return "幸运赛车";
                case "JSFT":
                    return "极速飞艇";
                case "JSSC2":
                    return "极速赛车";
                case "MSSC":
                    return "秒速赛车";
                case "AZXY10":
                    return "澳洲幸运10";
                case "XYF3":
                    return "F3赛车";
                case "AZLFC":
                    return "澳洲两分彩";
                case "XYFTAP":
                    return "幸运飞艇";
                case "JSFTAP":
                    return "700K极速飞艇";
                case "ETHSC":
                    return "ETH赛车";
                case "YNSC":
                    return "VR赛车";
                case "DMKL":
                    return "丹麦快乐彩";
                case "BJKL8":
                    return "北京快乐8";
                case "JNDBS":
                    return "加拿大卑斯";
                case "CQSS":
                    return "重庆时时彩";
                case "TJSS":
                    return "天津时时彩";
                case "XJSS":
                    return "新疆时时彩";
                case "SS4":
                    return "极速时时彩";
                case "SS5":
                    return "朱雀时时彩";
                case "SS6":
                    return "腾讯分分彩";
                case "SS7":
                    return "极速两分彩";
                case "SS8":
                    return "朱雀两分彩";
                case "SS9":
                    return "三分时时彩";
                case "SS10":
                    return "五分时时彩";
                case "MSSS":
                    return "秒速时时彩";
                case "AZXY5":
                    return "168澳洲幸运5";
                case "JSSS":
                    return "极速时时彩";
                case "AZXY5AP":
                    return "澳洲幸运5";
                case "YN5D":
                    return "VR五星";
                case "CQKL10":
                    return "重庆快乐十分";
                case "GDKL10":
                    return "广东快乐十分";
                case "JSKS":
                    return "江苏快三";
                case "GXKS":
                    return "广西快三";
                case "AHK3":
                    return "安徽快三";
                case "KS4":
                    return "极速快三";
                case "KS5":
                    return "朱雀快三";
                case "KS6":
                    return "两分快三";
                case "KS7":
                    return "三分快三";
                case "KS8":
                    return "五分快三";
                case "GD115":
                    return "广东11选5";
                case "SD115":
                    return "山东11选5";
                case "JX115":
                    return "江西11选5";
                case "1154":
                    return "极速11选5";
                case "1155":
                    return "朱雀11选5";
                case "1156":
                    return "两分11选5";
                case "1157":
                    return "三分11选5";
                case "1158":
                    return "五分11选5";
                case "BJPK28":
                    return "北京PK28";
                case "PCDD":
                    return "PC蛋蛋";
                case "JND28":
                    return "加拿大28";
                case "284":
                    return "极速28";
                case "285":
                    return "朱雀28";
                case "286":
                    return "两分28";
                case "LHCAI":
                    return "六合彩";
                case "LH2":
                    return "极速六合彩";
                case "LH3":
                    return "朱雀六合彩";
                case "LH4":
                    return "三分六合彩";
                case "LH5":
                    return "五分六合彩";
                case "PL5":
                    return "排列5";
                case "PL55":
                    return "五分排列5";
                case "QXC":
                    return "七星彩"
            }
        }

        function transferGameType(e) {
            switch (e) {
                case "fc":
                    return "福彩";
                case "pk10":
                    return "PK10";
                case "ssc":
                    return "时时彩";
                case "k3":
                    return "快三";
                case "x5":
                    return "11选5";
                case "lucky":
                    return "幸运彩";
                case "lhc":
                    return "六合彩";
                case "pl5":
                    return "排列5";
                case "qxc":
                    return "七星彩"
            }
        }

        function transferResult(tableId, object) {
            var obj = {};
            if (tableId > 70200 && tableId < 70300) return 1 === object.result.length ? {
                gyh: "-",
                totalBS: "-",
                totalOE: "-",
                lh: "- - - - -",
                result: new Array(10).fill("-")
            } : (obj.gyh = Number(object.result[0]) + Number(object.result[1]), obj.totalBS = obj.gyh > 11 ? "大" : "小", obj.totalOE = obj.gyh % 2 == 0 ? "双" : "单", obj.lh = "".concat(object.result[0] < object.result[9] ? "虎" : "龙", ",").concat(object.result[1] < object.result[8] ? "虎" : "龙", ",").concat(object.result[2] < object.result[7] ? "虎" : "龙", ",").concat(object.result[3] < object.result[6] ? "虎" : "龙", ",").concat(object.result[4] < object.result[5] ? "虎" : "龙"), obj);
            if (tableId > 70400 && tableId < 70500) return 1 === object.result.length ? {
                total: "-",
                totalBS: "-",
                totalOE: "-",
                lh: "-",
                before3: "-",
                middle3: "-",
                after3: "-",
                bull: "-",
                stud: "-"
            } : (obj.total = eval(object.result.join("+")), obj.totalBS = obj.total >= 23 ? "总和大" : "总和小", obj.totalOE = obj.total % 2 == 0 ? "总和双" : "总和单", obj.lh = object.result[0] > object.result[4] ? "龙" : object.result[0] === object.result[4] ? "和" : "虎", obj.before3 = takeThree(0, object.result), obj.middle3 = takeThree(1, object.result), obj.after3 = takeThree(2, object.result), obj.bull = bullFight(object.result), obj.stud = stud(object.result), obj);
            if (tableId > 70600 && tableId < 70611) return 1 === object.result.length ? {
                total: "-",
                totalBS: "-",
                totalOE: "-"
            } : (obj.total = eval(object.result.join("+")), 1 !== Object(_Users_badgateway_Desktop_network_Vue_lottery_RM_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_20__.a)(new Set(object.result)).length && (obj.totalBS = obj.total < 11 ? "和小" : "和大", obj.totalOE = obj.total % 2 == 0 ? "和双" : "和单"), obj);
            if (tableId > 70800 && tableId < 70811) return 1 === object.result.length ? {
                total: "-",
                totalBS: "-",
                totalOE: "-",
                result: new Array(5).fill("-")
            } : (obj.total = eval(object.result.join("+")), obj.totalBS = obj.total > 13 ? "总和大" : "总和小", obj.totalOE = obj.total % 2 == 0 ? "总和双" : "总和单", obj);
            if (tableId > 70900 && tableId < 70911) {
                if (1 === object.result.length) return {
                    total: "-",
                    zfOE: "-",
                    zfBS: "-",
                    temaOE: "-",
                    temaBS: "-",
                    hsOE: "-",
                    hsBS: "-",
                    wsBS: "-"
                };
                var total = 0,
                    last = "";
                return object.result.some((function (e, t) {
                    t < object.result.length - 1 ? "+" !== e && (total += Number(e)) : last = e
                })), obj.total = total, obj.zfOE = total % 2 == 0 ? "总和双" : "总和单", obj.zfBS = total > 149 ? "总和大" : "总和小", obj.temaOE = last % 2 == 0 ? "双" : 49 == last ? "和" : "单", obj.temaBS = last <= 24 ? "小" : 49 == last ? "和" : "大", obj.hsOE = (Number(last[0]) + Number(last[1])) % 2 == 0 ? "合双" : "合单", obj.hsBS = "49" === last ? "合" : Number(last[0]) + Number(last[1]) > 6 ? "合大" : "合小", obj.wsBS = "49" === last ? "和" : Number(last[1]) > 4 ? "尾大" : "尾小", obj
            }
        }

        function transferK3Trend(e) {
            var t = e.join("");
            switch ((e = new Set(e)).size) {
                case 3:
                    return /^(0(?=1)|1(?=2)|2(?=3)|3(?=4)|4(?=5)|5(?=6)|6(?=7)|7(?=8)|8(?=9)){2}\d$/.test(t) ? 3 : 0;
                case 2:
                    return 1;
                case 1:
                    return 2
            }
        }

        function transferGameOrder(e) {
            switch (e) {
                case "1021101":
                    return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"];
                case "1021201":
                    return [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
                case "1021202":
                    return ["冠亚大", "冠亚小", "冠亚单", "冠亚双"];
                case "1041101":
                    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
                case "1041201":
                    return ["豹子", "顺子", "对子", "半顺", "杂六"];
                case "1041401":
                    return ["龙", "虎", "和"];
                case "1041501":
                    return ["没牛", "牛1", "牛2", "牛3", "牛4", "牛5", "牛6", "牛7", "牛8", "牛9", "牛牛"];
                case "1041502":
                    return ["牛大", "牛小", "牛单", "牛双"];
                case "1041601":
                    return ["五条", "四条", "葫芦", "顺子", "三条", "两对", "一对", "散号"];
                case "1041801":
                    return "一中一";
                case "1041802":
                    return "二中二";
                case "1041803":
                    return "三中三";
                case "1041804":
                    return "四中四";
                case "1041805":
                    return "五中五";
                case "1061101":
                    return [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
                case "1061201":
                    return ["1,2", "1,3", "1,4", "1,5", "1,6", "2,3", "2,4", "2,5", "2,6", "3,4", "3,5", "3,6", "4,5", "4,6", "5,6"];
                case "1061301":
                    return [1, 2, 3, 4, 5, 6];
                case "1061401":
                    return ["1,1", "2,2", "3,3", "4,4", "5,5", "6,6"];
                case "1061501":
                    return ["1,1,1", "2,2,2", "3,3,3", "4,4,4", "5,5,5", "6,6,6"];
                case "1061502":
                    return "任意豹子";
                case "1081101":
                    return "特码包三";
                case "1081201":
                    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];
                case "1041301":
                case "1061102":
                case "1081202":
                    return ["总和大", "总和小", "总和单", "总和双"];
                case "1081301":
                    return ["极小", "极大"];
                case "1081501":
                    return ["豹子", "顺子", "对子"];
                case "1091101":
                case "1091201":
                case "1091301":
                case "1091401":
                case "1092101":
                case "1092102":
                case "1092103":
                case "1092104":
                case "1092105":
                case "1092106":
                case "1092107":
                case "1092108":
                    return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49"];
                case "1021102":
                case "1041102":
                case "1091102":
                case "1091402":
                    return ["大", "小", "单", "双"];
                case "1091103":
                case "1091403":
                    return ["合大", "合小", "合单", "合双"];
                case "1091104":
                case "1091404":
                    return ["尾大", "尾小"];
                case "1021104":
                case "1081203":
                case "1091105":
                    return ["大单", "大双", "小单", "小双"];
                case "1091106":
                    return ["家禽", "野兽"];
                case "1081401":
                case "1091107":
                case "1091405":
                    return ["绿波", "蓝波", "红波"];
                case "1091108":
                    return ["1-10", "11-20", "21-30", "31-40", "41-49"];
                case "1091801":
                case "1091802":
                case "1091803":
                case "1091804":
                case "1091805":
                case "1091806":
                case "1091807":
                case "1091808":
                case "1091809":
                case "1091810":
                    return [{
                        name: "鼠",
                        value: ["01", 13, 25, 37]
                    }, {
                        name: "牛",
                        value: [12, 24, 36, 48]
                    }, {
                        name: "虎",
                        value: [11, 23, 35, 47]
                    }, {
                        name: "兔",
                        value: [10, 22, 34, 46]
                    }, {
                        name: "龙",
                        value: ["09", 21, 33, 45]
                    }, {
                        name: "蛇",
                        value: ["08", 20, 32, 44]
                    }, {
                        name: "马",
                        value: ["07", 19, 31, 43]
                    }, {
                        name: "羊",
                        value: ["06", 18, 30, 42]
                    }, {
                        name: "猴",
                        value: ["05", 17, 29, 41]
                    }, {
                        name: "鸡",
                        value: ["04", 16, 28, 40]
                    }, {
                        name: "狗",
                        value: ["03", 15, 27, 39]
                    }, {
                        name: "猪",
                        value: ["02", 14, 26, 38]
                    }];
                case "1091109":
                case "1091701":
                case "1091901":
                case "1091902":
                case "1091903":
                case "1091904":
                case "1091905":
                case "1091906":
                case "1091907":
                    return [{
                        name: "鼠",
                        value: ["01", 13, 25, 37, 49]
                    }, {
                        name: "牛",
                        value: [12, 24, 36, 48]
                    }, {
                        name: "虎",
                        value: [11, 23, 35, 47]
                    }, {
                        name: "兔",
                        value: [10, 22, 34, 46]
                    }, {
                        name: "龙",
                        value: ["09", 21, 33, 45]
                    }, {
                        name: "蛇",
                        value: ["08", 20, 32, 44]
                    }, {
                        name: "马",
                        value: ["07", 19, 31, 43]
                    }, {
                        name: "羊",
                        value: ["06", 18, 30, 42]
                    }, {
                        name: "猴",
                        value: ["05", 17, 29, 41]
                    }, {
                        name: "鸡",
                        value: ["04", 16, 28, 40]
                    }, {
                        name: "狗",
                        value: ["03", 15, 27, 39]
                    }, {
                        name: "猪",
                        value: ["02", 14, 26, 38]
                    }];
                case "1091302":
                    return ["总大", "总小", "总单", "总双"];
                case "1091303":
                    return ["总尾大", "总尾小"];
                case "1021103":
                case "1091304":
                    return ["龙", "虎"];
                case "1092201":
                    return ["大", "小", "单", "双", "绿波", "蓝波", "红波"];
                case "1091702":
                case "1092001":
                case "1092002":
                case "1092003":
                case "1092004":
                case "1092005":
                case "1092006":
                    return [{
                        name: "0尾",
                        value: ["10", "20", "30", "40"]
                    }, {
                        name: "1尾",
                        value: ["01", "11", "21", "31", "41"]
                    }, {
                        name: "2尾",
                        value: ["02", "12", "22", "32", "42"]
                    }, {
                        name: "3尾",
                        value: ["03", "13", "23", "33", "43"]
                    }, {
                        name: "4尾",
                        value: ["04", "14", "24", "34", "44"]
                    }, {
                        name: "5尾",
                        value: ["05", "15", "25", "35", "45"]
                    }, {
                        name: "6尾",
                        value: ["06", "16", "26", "36", "46"]
                    }, {
                        name: "7尾",
                        value: ["07", "17", "27", "37", "47"]
                    }, {
                        name: "8尾",
                        value: ["08", "18", "28", "38", "48"]
                    }, {
                        name: "9尾",
                        value: ["09", "19", "29", "39", "49"]
                    }]
            }
        }

        function permutationAndCombination() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments.length > 1 ? arguments[1] : void 0,
                a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                n = arguments.length > 3 ? arguments[3] : void 0,
                r = [],
                c = e.length;
            t = t > c ? c : t;
            var o = function o() {
                for (var s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], _ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, u = s.length, l = a ? 0 : _; l < c && !(u > t - 1); l++)
                    if (!i.includes(l)) {
                        var d = e[l],
                            m = [].concat(Object(_Users_badgateway_Desktop_network_Vue_lottery_RM_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_20__.a)(s), [d]).sort(ascendingOrder);
                        u === t - 1 && r.push(m.join(n)), u < t - 1 && o(m, [].concat(Object(_Users_badgateway_Desktop_network_Vue_lottery_RM_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_20__.a)(i), [l]), _++)
                    }
            };
            if (e.length) {
                if (!a && t === c) return [e.sort(ascendingOrder).join(n)];
                o()
            }
            return Object(_Users_badgateway_Desktop_network_Vue_lottery_RM_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_20__.a)(new Set(r))
        }

        function permutation(e, t) {
            for (var a = [], n = 0; n < Math.pow(2, e); n++) {
                for (var r = 0, c = [], o = 0; o < e; o++) n >> o & 1 && (r++, c.push(o));
                r === t && a.push(c)
            }
            return a
        }

        function transferK(e, t, a, n) {
            switch (e) {
                case "1091101":
                case "1091201":
                case "1091301":
                case "1091401":
                    return t;
                case "1091102":
                case "1091103":
                case "1091104":
                case "1091106":
                case "1091107":
                case "1091108":
                case "1091302":
                case "1091303":
                case "1091304":
                case "1091402":
                case "1091403":
                case "1091404":
                case "1091405":
                case "1091702":
                case "1091105":
                    return a;
                case "1091109":
                case "1091701":
                    return n[a].value.join(",");
                case "1092201":
                    return a > 3 ? a - 4 : a;
                default:
                    return ""
            }
        }

        function findIndex(e, t) {
            switch (e) {
                case "1061101":
                case "1061301":
                case "1061501":
                case "1061401":
                case "1061201":
                case "1041101":
                case "1021101":
                case "1021201":
                case "1041801":
                case "1041802":
                case "1041803":
                case "1041804":
                case "1041805":
                case "1081201":
                    return t;
                case "1081101":
                    return "特码包三".concat(t);
                case "1061502":
                    return "任意豹子";
                case "1091101":
                case "1091201":
                case "1091301":
                case "1091401":
                case "1092101":
                case "1092102":
                case "1092103":
                case "1092104":
                case "1092105":
                case "1092106":
                case "1092107":
                case "1092108":
                    return t;
                case "1091102":
                case "1091103":
                case "1091104":
                case "1091106":
                case "1091107":
                case "1091108":
                case "1091302":
                case "1091303":
                case "1091304":
                case "1091402":
                case "1091403":
                case "1091404":
                case "1091405":
                case "1061102":
                case "1041102":
                case "1041201":
                case "1041301":
                case "1041401":
                case "1041501":
                case "1041502":
                case "1041601":
                case "1021102":
                case "1021103":
                case "1021104":
                case "1081202":
                case "1081301":
                case "1081203":
                case "1081401":
                case "1021202":
                case "1091105":
                case "1081501":
                    return transferGameOrder(e)[Number(t)];
                case "1091702":
                    return "".concat(t, "尾");
                case "1091109":
                case "1091701":
                    return transferGameOrder(e).some((function (e) {
                        if (e.value.join(",") === t) return t = e.name, !0
                    })), t;
                case "1091801":
                case "1091802":
                case "1091803":
                case "1091804":
                case "1091805":
                case "1091806":
                case "1091807":
                case "1091808":
                case "1091809":
                case "1091810":
                case "1091901":
                case "1091902":
                case "1091903":
                case "1091904":
                case "1091905":
                case "1091906":
                case "1091907":
                    var a = "";
                    return t.split("#").some((function (t) {
                        transferGameOrder(e).some((function (e) {
                            t === e.value.join(",") && (a += "".concat(e.name, ","))
                        }))
                    })), a.substr(0, a.length - 1);
                case "1092001":
                case "1092002":
                case "1092003":
                case "1092004":
                case "1092005":
                case "1092006":
                    var n = [];
                    return t.split(",").some((function (e) {
                        n.push("".concat(e, "尾"))
                    })), n.join(",")
            }
        }

        function transferLuckyColor(e) {
            switch (e) {
                case 0:
                case 27:
                case 13:
                case 14:
                    return 4;
                case 1:
                case 4:
                case 7:
                case 10:
                case 16:
                case 19:
                case 22:
                case 25:
                    return 3;
                case 2:
                case 5:
                case 8:
                case 11:
                case 17:
                case 20:
                case 23:
                case 26:
                    return 2;
                case 3:
                case 6:
                case 9:
                case 12:
                case 15:
                case 18:
                case 21:
                case 24:
                    return 1
            }
        }
    },
    "0ea5": function (e, t, a) {},
    "101c": function (e, t, a) {},
    "2d9f": function (e, t, a) {
        "use strict";
        t.a = {
            "code.id.1": "参数错误",
            "code.id.2": "token验证失败",
            "code.id.4": "非法操作",
            "code.id.10": "日期格式错误",
            "code.id.11": "数据格式错误",
            "code.id.12": "时间范围错误",
            "code.id.28": "验证码错误",
            "code.id.29": "推荐码无效",
            "code.id.97": "没有权限",
            "code.id.98": "操作失败",
            "code.id.99": "未知错误",
            "code.id.100": "账号被锁定",
            "code.id.101": "账号格式错误",
            "code.id.102": "未知账号",
            "code.id.103": "账号被占用",
            "code.id.104": "密码格式错误",
            "code.id.105": "密码错误",
            "code.id.106": "新旧密码相同",
            "code.id.107": "账号禁用",
            "code.id.108": "登入失败",
            "code.id.109": "注册失败",
            "code.id.112": "账号已登出",
            "code.id.113": "非法的代理账号",
            "code.id.114": "会员不存在",
            "code.id.115": "账号已登出",
            "code.id.116": "账号被占用",
            "code.id.120": "余额不足",
            "code.1d.122": "会员佣金设置失败",
            "code.id.124": "系统登出",
            "code.id.200": "游戏已关闭",
            "code.id.201": "游戏停止计时",
            "code.id.202": "游戏暂未结算",
            "code.id.203": "正在洗牌，请稍后",
            "code.id.204": "游戏大厅关闭",
            "code.id.205": "游戏暂不支持试玩",
            "code.id.206": "游戏暂不支持试玩",
            "code.id.207": "暂无开奖结果",
            "code.id.208": "游戏维护中",
            "code.id.209": "即将上线",
            "code.id.211": "游戏超过台红",
            "code.id.212": "游戏超过限红",
            "code.id.213": "连接超时，请稍后投注",
            "code.id.215": "游戏期号错误",
            "code.id.218": "游戏超过限红",
            "code.id.410": "下注失败",
            "code.id.503": "请求超时",
            "code.id.10001": "请先绑定银行卡",
            "code.id.10002": "请勿重复绑定银行卡",
            "code.id.10003": "取款码错误",
            "code.id.10004": "存在未处理的存取款申请"
        }
    },
    3537: function (e, t, a) {
        e.exports = a.p + "media/betSuccess_cn.a7a26d06.mp3"
    },
    "3ebd": function (e, t, a) {
        "use strict";
        a("99af");
        var n = a("0e0b"),
            r = a("2d9f"),
            c = a("4194"),
            o = a.n(c),
            s = (a("5373"), a("8237")),
            i = a.n(s),
            _ = a("2b0e"),
            u = {
                data: function () {
                    return {
                        isLog: !1
                    }
                },
                methods: {
                    backLogIn: function () {
                        A.Logout(), Object(n.e)("FROM_URL"), Object(n.e)("SESSION_TOKEN"), Object(n.e)("audioController"), window.apiHostSettings.FROM_URL && (this.isLog = !1, window.location.href = window.apiHostSettings.FROM_URL)
                    }
                }
            },
            l = (a("59a1"), a("2877")),
            d = Object(l.a)(u, (function () {
                var e = this.$createElement,
                    t = this._self._c || e;
                return this.isLog ? t("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [t("div", {
                    staticClass: "mask-layer flex txt-center log-toast"
                }, [t("div", [t("p", [this._v("连接已断开，请重新登录")]), t("input", {
                    attrs: {
                        type: "button",
                        value: "返回首页"
                    },
                    on: {
                        click: this.backLogIn
                    }
                })])])]) : this._e()
            }), [], !1, null, "d67300f4", null).exports,
            m = {
                SocketObject: null,
                Ws: null,
                WsTimer: null,
                RefreshTimer: null,
                Send: function (e) {
                    try {
                        this.Ws.send((new o.a.TextEncoder).encode(JSON.stringify(e)))
                    } catch (e) {
                        console.log("error: ".concat(e))
                    }
                },
                HeartBeat: function () {
                    this.Send({
                        cmd: 99
                    })
                },
                InitMember: function (e) {
                    this.Send({
                        codeId: 0,
                        cmd: 1,
                        token: Object(n.j)("SESSION_TOKEN"),
                        tableId: e,
                        type: 0
                    })
                },
                GameBetting: function (e, t, a, r) {
                    var c = i()("ksr15fuvghrzd1pa6m1rdf51ho3whr0g".concat(t).concat(e).concat(a));
                    this.Send({
                        cmd: 6,
                        token: Object(n.j)("SESSION_TOKEN"),
                        gameNo: e,
                        tableId: t,
                        list: ["", c, r]
                    })
                },
                SearchBalance: function () {
                    this.Send({
                        cmd: 9,
                        token: Object(n.j)("SESSION_TOKEN")
                    })
                },
                SearchUnsettlementReport: function (e, t) {
                    this.Send({
                        cmd: 10,
                        token: Object(n.j)("SESSION_TOKEN"),
                        gameNo: e,
                        tableId: t
                    })
                },
                Logout: function () {
                    this.Send({
                        cmd: 12,
                        token: Object(n.j)("SESSION_TOKEN")
                    })
                },
                SearchReport: function (e, t, a, r, c, o) {
                    var s = {
                        cmd: 13,
                        token: Object(n.j)("SESSION_TOKEN"),
                        tableId: e,
                        type: t
                    };
                    s.list = c || 0 === c ? [o.beginTime, o.endTime, a, String(r), c] : [o.beginTime, o.endTime, a, String(r)], this.Send(s)
                },
                Transfer: function (e, t, a, r, c) {
                    this.Send({
                        cmd: 13,
                        token: Object(n.j)("SESSION_TOKEN"),
                        type: 9,
                        list: [e, t, a, r],
                        object: JSON.stringify({
                            type: c
                        })
                    })
                },
                SetMemberInfo: function (e, t) {
                    t = 1 === e ? i()(t) : t, this.Send({
                        cmd: 14,
                        token: Object(n.j)("SESSION_TOKEN"),
                        type: e,
                        object: t
                    })
                },
                CheckLimit: function (e, t) {
                    this.Send({
                        cmd: 19,
                        token: Object(n.j)("SESSION_TOKEN"),
                        tableId: e,
                        list: t
                    })
                },
                InitGame: function (e) {
                    this.Send({
                        cmd: 2001,
                        token: Object(n.j)("SESSION_TOKEN"),
                        tableId: e
                    })
                },
                SearchHistory: function (e, t, a) {
                    this.Send({
                        cmd: 2002,
                        tableId: e,
                        mid: t,
                        object: a
                    })
                },
                InitLobby: function () {
                    this.Send({
                        cmd: 2003,
                        token: Object(n.j)("SESSION_TOKEN")
                    })
                },
                GameNotice: function () {
                    this.Send({
                        cmd: 2004,
                        token: Object(n.j)("SESSION_TOKEN")
                    })
                },
                NewHistory: function (e) {
                    this.Send({
                        cmd: 2005,
                        tableId: e
                    })
                },
                ResultAnalysis: function (e, t) {
                    this.Send({
                        cmd: 2006,
                        lobbyId: t,
                        tableId: e
                    })
                },
                SendSingal: function (e) {
                    window.dispatchEvent(e)
                },
                InitWebsocket: function (e, t) {
                    var a = this;
                    this.SocketObject = new WebSocket(e), this.SocketObject.binaryType = "arraybuffer", this.SocketObject.onopen = function (e) {
                        a.Ws = e.srcElement, a.InitMember(t), a.WsTimer = setInterval((function () {
                            return a.HeartBeat()
                        }), 15e3)
                    }, this.SocketObject.onmessage = function (e) {
                        var t = JSON.parse((new o.a.TextDecoder).decode(e.data));
                        if (99 !== t.cmd)
                            if (0 === t.codeId) switch (t.cmd) {
                                case 1:
                                    var c = new CustomEvent("INITMEMBER", {
                                        detail: JSON.parse(t.object)
                                    });
                                    a.SendSingal(c);
                                    break;
                                case 6:
                                    var s = new CustomEvent("BETTINGGAME", {
                                        detail: t.dList
                                    });
                                    a.SendSingal(s);
                                    break;
                                case 9:
                                    var i = new CustomEvent("SEARCHBALANCE", {
                                        detail: t.dList
                                    });
                                    a.SendSingal(i);
                                    break;
                                case 10:
                                    var _ = new CustomEvent("UNSETTLEMENTREPORT", {
                                        detail: JSON.parse(t.object)
                                    });
                                    a.SendSingal(_);
                                    break;
                                case 13:
                                    if (9 === t.type) {
                                        var u = new CustomEvent("ACCOUNTDETAIL", {
                                            detail: t
                                        });
                                        a.SendSingal(u)
                                    } else {
                                        var l = new CustomEvent("SEARCHREPORT", {
                                            detail: t
                                        });
                                        a.SendSingal(l)
                                    }
                                    break;
                                case 14:
                                    var d = new CustomEvent("SETMEMBERINFO", {
                                        detail: t
                                    });
                                    a.SendSingal(d);
                                    break;
                                case 19:
                                    var m = new CustomEvent("CHECKLIMIT", {
                                        detail: t
                                    });
                                    a.SendSingal(m);
                                    break;
                                case 1002:
                                    var A = new CustomEvent("TABLEINFO", {
                                        detail: t.table
                                    });
                                    a.SendSingal(A);
                                    break;
                                case 1003:
                                    var b = new CustomEvent("TABLERESULT", {
                                        detail: t
                                    });
                                    a.SendSingal(b);
                                    break;
                                case 2001:
                                    var f = new CustomEvent("INITGAME", {
                                        detail: t
                                    });
                                    a.SendSingal(f);
                                    break;
                                case 2002:
                                    var p = new CustomEvent("SEARCHHISTORY", {
                                        detail: JSON.parse(t.object)
                                    });
                                    a.SendSingal(p);
                                    break;
                                case 2003:
                                    var h = new CustomEvent("INITLOBBY", {
                                        detail: JSON.parse(t.object)
                                    });
                                    a.SendSingal(h);
                                    break;
                                case 2004:
                                    if (t.object) {
                                        var g = new CustomEvent("GAMENOTICE", {
                                            detail: JSON.parse(t.object)
                                        });
                                        a.SendSingal(g)
                                    }
                                    break;
                                case 2005:
                                    var k;
                                    k = t.object ? JSON.parse(t.object) : {
                                        result: "0"
                                    };
                                    var E = new CustomEvent("NEWHISTORY", {
                                        detail: k
                                    });
                                    a.SendSingal(E);
                                    break;
                                case 2006:
                                    var w = new CustomEvent("RESULTANALYSIS", {
                                        detail: t
                                    });
                                    a.SendSingal(w)
                            } else console.log("cmd: ".concat(t.cmd, ", codeId: ").concat(t.codeId, ", msg: ").concat(r.a["code.id." + t.codeId])), 112 === t.codeId || 115 === t.codeId || 124 === t.codeId ? ("1" === Object(n.j)("DEVICE") ? Object(n.l)(r.a["code.id." + t.codeId], 1500) : Object(n.m)(r.a["code.id." + t.codeId], 1500), Object(n.p)("isLogOut", 1), clearInterval(a.WsTimer), a.WsTimer = null, Object(n.e)("FROM_URL"), Object(n.e)("audioController"), window.apiHostSettings.FROM_URL && (window.location.href = window.apiHostSettings.FROM_URL)) : 503 === t.codeId ? "1" === Object(n.j)("DEVICE") ? Object(n.l)(r.a["code.id." + t.codeId], 1500) : Object(n.m)(r.a["code.id." + t.codeId], 1500) : 1 !== t.cmd && 6 !== t.cmd || ("1" === Object(n.j)("DEVICE") ? Object(n.l)(r.a["code.id." + t.codeId], 1500) : Object(n.m)(r.a["code.id." + t.codeId], 1500))
                    }, this.SocketObject.onerror = function (e) {
                        console.log(e)
                    }, this.SocketObject.onclose = function () {
                        if ("0" == Object(n.j)("isLogOut")) a.RefreshTimer && (clearTimeout(a.RefreshTimer), a.RefreshTimer = null), a.SocketObject.close(), a.SocketObject = null, a.RefreshTimer = setTimeout((function () {
                            a.InitWebsocket(window.apiHostSettings.SOCKET_URL, 0)
                        }), 2e3);
                        else if (clearInterval(a.WsTimer), a.WsTimer = null, Object(n.e)("FROM_URL"), Object(n.e)("audioController"), window.apiHostSettings.FROM_URL) window.location.href = window.apiHostSettings.FROM_URL;
                        else if ("1" === Object(n.j)("DEVICE")) {
                            var e = new(_.default.extend(d))({
                                el: document.createElement("div")
                            });
                            document.body.appendChild(e.$el), e.isLog = !0
                        } else Object(n.m)("连接已断开，请刷新页面")
                    }
                }
            },
            A = t.a = m
    },
    "47c2": function (e, t, a) {
        e.exports = a.p + "media/downTimer.c77f9472.mp3"
    },
    "4dcb": function (e, t, a) {},
    "56d7": function (e, t, a) {
        "use strict";
        a.r(t);
        a("6611"), a("450d");
        var n = a("e772"),
            r = a.n(n),
            c = (a("1f1a"), a("4e4b")),
            o = a.n(c),
            s = (a("826b"), a("c263")),
            i = a.n(s),
            _ = (a("e260"), a("e6cf"), a("cca6"), a("a79d"), a("2b0e")),
            u = (a("a9e3"), a("b680"), a("b64b"), a("0e0b")),
            l = a("ef81"),
            d = a("3ebd"),
            m = a("ecaf"),
            A = {
                data: function () {
                    return {
                        serviceUrl: ""
                    }
                },
                created: function () {
                    var e = this;
                    (Object(u.i)("f") || Object(u.j)("FROM_URL")) && (window.apiHostSettings.FROM_URL = Object(u.i)("f") ? Object(u.i)("f") : Object(u.j)("FROM_URL"), Object(u.p)("FROM_URL", window.apiHostSettings.FROM_URL)), this.$router.push("/"), Object(u.b)();
                    var t = window.apiHostSettings.SOCKET_URL,
                        a = Object(u.i)("token") ? Object(u.i)("token") : Object(u.j)("SESSION_TOKEN") ? Object(u.j)("SESSION_TOKEN") : null;
                    a && t ? (Object(u.p)("SESSION_TOKEN", a), Object(u.p)("isLogOut", "0"), d.a.InitWebsocket(t, 0), window.addEventListener("INITMEMBER", this.initMember), m.a.OnlineService().then((function (t) {
                        console.log(t), e.serviceUrl = t.object.kfUrl
                    })), "5" === Object(u.j)("DEVICE") && Object(u.a)()) : Object(u.l)("请先登录", 1500)
                },
                beforeDestroy: function () {
                    window.removeEventListener("INITMEMBER", this.initMember)
                },
                watch: {
                    "$store.state.isTurn": function () {
                        var e = this;
                        this.$store.state.isPlay && !document.hidden && (this.$refs.audio.muted = this.$store.state.isMuted, this.$refs.audio.play(), this.$store.state.isMuted && (this.$refs.audio1.muted = this.$store.state.isMuted, this.$refs.audio2.muted = this.$store.state.isMuted, this.$refs.audio3.muted = this.$store.state.isMuted, this.$refs.audio1.play(), this.$refs.audio2.play(), this.$refs.audio3.play(), setTimeout((function () {
                            e.$store.commit("safariPlay", !1)
                        }), 3e3)))
                    },
                    "$store.state.isButton": function () {
                        this.$store.state.isPlay && !document.hidden && (this.$refs.audio1.muted = !1, this.$refs.audio1.play())
                    },
                    "$store.state.isDown": function () {
                        this.$store.state.isPlay && !document.hidden && (this.$refs.audio2.muted = !1, this.$refs.audio2.play())
                    },
                    "$store.state.isSuccess": function () {
                        this.$store.state.isPlay && (this.$refs.audio3.muted = !1, this.$refs.audio3.play())
                    }
                },
                methods: {
                    openNewWin: function () {
                        window.open(this.serviceUrl, "newwindow")
                    },
                    initMember: function (e) {
                        var t = this;
                        console.log(e.detail.tables), e.detail.member.balance = Number(e.detail.member.balance).toFixed(2), this.$store.commit("updateMember", e.detail.member);
                        var a = {},
                            n = {},
                            r = {},
                            c = {},
                            o = {},
                            s = {},
                            i = {},
                            _ = {};
                        if (e.detail.tables) {
                            for (var d in e.detail.tables) _[d] = l.b[d], a[d] = l.b[d], /702[0-9][0-9]/.test(e.detail.tables[d][0]) && (r[d] = a[d]), /704[0-9][0-9]/.test(e.detail.tables[d][0]) && (c[d] = a[d]), /706[0-9][0-9]/.test(e.detail.tables[d][0]) && (o[d] = a[d]), /708[0-9][0-9]/.test(e.detail.tables[d][0]) && (s[d] = a[d]), /709[0-9][0-9]/.test(e.detail.tables[d][0]) && (i[d] = a[d]);
                            Object.keys(r).length > 0 && (n.pk10 = r), Object.keys(c).length > 0 && (n.ssc = c), Object.keys(o).length > 0 && (n.k3 = o), Object.keys(s).length > 0 && (n.lucky = s), Object.keys(i).length > 0 && (n.lhc = i)
                        }
                        this.$store.commit("updateGames", a), this.$store.commit("updatePcGames", n), this.$store.commit("updateGameChart", _), this.$nextTick((function () {
                            t.$Load(!1), "1" === Object(u.j)("DEVICE") ? t.$router.push("/pc") : t.$router.push("/wap")
                        }))
                    }
                }
            },
            b = a("2877"),
            f = Object(b.a)(A, (function () {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", {
                    attrs: {
                        id: "app"
                    }
                }, [t("router-view"), t("audio", {
                    ref: "audio",
                    attrs: {
                        src: a("f2b0"),
                        controls: "",
                        hidden: "true"
                    }
                }), t("audio", {
                    ref: "audio1",
                    attrs: {
                        src: a("c94c"),
                        controls: "",
                        hidden: "true"
                    }
                }), t("audio", {
                    ref: "audio2",
                    attrs: {
                        src: a("47c2"),
                        controls: "",
                        hidden: "true"
                    }
                }), t("audio", {
                    ref: "audio3",
                    attrs: {
                        src: a("3537"),
                        controls: "",
                        hidden: "true"
                    }
                })], 1)
            }), [], !1, null, null, null).exports,
            p = (a("d3b7"), a("8c4f")),
            h = (a("dd42"), Object(b.a)({}, (function () {
                var e = this.$createElement;
                this._self._c;
                return this._m(0)
            }), [function () {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", {
                    staticClass: "flex col-center loading"
                }, [t("div", {
                    staticClass: "txt-center"
                }, [t("div", [t("div")]), t("p", [t("i", [this._v("Loading...")])])])])
            }], !1, null, "44fca3bc", null).exports);
        _.default.use(p.a);
        var g = p.a.prototype.push;
        p.a.prototype.push = function (e) {
            return g.call(this, e).catch((function (e) {
                return e
            }))
        };
        var k = [{
                path: "",
                name: "loading",
                component: h
            }, {
                path: "/pc",
                component: function () {
                    return a.e("chunk-53b2f106").then(a.bind(null, "f08a"))
                },
                redirect: {
                    name: "index"
                },
                children: [{
                    name: "index",
                    path: "/pc/index",
                    component: function () {
                        return Promise.all([a.e("chunk-2d0b724a"), a.e("chunk-40345724"), a.e("chunk-5979c0e8")]).then(a.bind(null, "3136"))
                    }
                }, {
                    path: "/pc/trend",
                    component: function () {
                        return Promise.all([a.e("chunk-40345724"), a.e("chunk-3a401db5")]).then(a.bind(null, "b639"))
                    },
                    redirect: {
                        name: "basic"
                    },
                    children: [{
                        name: "basic",
                        path: "/pc/trend/basic",
                        component: function () {
                            return Promise.all([a.e("chunk-2d0b724a"), a.e("chunk-95ef1cbc")]).then(a.bind(null, "fe20"))
                        }
                    }, {
                        name: "kLine",
                        path: "/pc/trend/KLine",
                        component: function () {
                            return a.e("chunk-0f765c28").then(a.bind(null, "3793"))
                        }
                    }, {
                        name: "historical",
                        path: "/pc/trend/historical",
                        component: function () {
                            return a.e("chunk-2d21f0f5").then(a.bind(null, "d7e1"))
                        }
                    }]
                }, {
                    name: "pcCentre",
                    path: "centre",
                    component: function () {
                        return a.e("chunk-abdb8090").then(a.bind(null, "67c2"))
                    },
                    redirect: {
                        name: "pcCentreSetting"
                    },
                    children: [{
                        name: "pcCentreSetting",
                        path: "setting",
                        component: function () {
                            return a.e("chunk-58306597").then(a.bind(null, "6bbb"))
                        }
                    }, {
                        name: "pcCentreTopup",
                        path: "topup",
                        component: function () {
                            return Promise.all([a.e("chunk-40345724"), a.e("chunk-2d0def14")]).then(a.bind(null, "8897"))
                        },
                        redirect: {
                            name: "pcCentreTopupWechat"
                        },
                        children: [{
                            name: "pcCentreTopupWechat",
                            path: "wechat",
                            component: function () {
                                return a.e("chunk-2d2301a0").then(a.bind(null, "eb9f"))
                            }
                        }]
                    }, {
                        name: "pcCentreWithdrawal",
                        path: "withdrawal",
                        component: function () {
                            return a.e("chunk-2d0c1949").then(a.bind(null, "473c"))
                        }
                    }, {
                        name: "pcCentreReport",
                        path: "report",
                        component: function () {
                            return a.e("chunk-2d0e6323").then(a.bind(null, "985c"))
                        }
                    }, {
                        name: "pcCentreAgent",
                        path: "agent",
                        component: function () {
                            return a.e("chunk-2ccfc9c1").then(a.bind(null, "b550"))
                        },
                        redirect: {
                            name: "pcCentreAgentBrokerage"
                        },
                        children: [{
                            name: "pcCentreAgentBrokerage",
                            path: "brokerage",
                            component: function () {
                                return a.e("chunk-3b6443de").then(a.bind(null, "e63a"))
                            }
                        }, {
                            name: "pcCentreAgentSub",
                            path: "report",
                            component: function () {
                                return a.e("chunk-99a2a278").then(a.bind(null, "a791"))
                            }
                        }, {
                            name: "pcCentreAgentList",
                            path: "list",
                            component: function () {
                                return a.e("chunk-8624371a").then(a.bind(null, "9e0b"))
                            }
                        }]
                    }]
                }]
            }, {
                path: "/wap",
                component: function () {
                    return a.e("chunk-ac1ecc8a").then(a.bind(null, "aebd"))
                },
                redirect: {
                    name: "wapIndex"
                },
                children: [{
                    name: "wapIndex",
                    path: "index",
                    meta: {
                        index: 1
                    },
                    component: function () {
                        return Promise.all([a.e("chunk-2d0b724a"), a.e("chunk-40345724"), a.e("chunk-3de452c0")]).then(a.bind(null, "87bf"))
                    }
                }, {
                    name: "game",
                    path: "game/:key",
                    meta: {
                        index: 2
                    },
                    component: function () {
                        return Promise.all([a.e("chunk-2d0b724a"), a.e("chunk-21b98daa")]).then(a.bind(null, "3d14"))
                    }
                }, {
                    name: "report",
                    path: "report",
                    meta: {
                        index: 2
                    },
                    component: function () {
                        return Promise.all([a.e("chunk-2d0b724a"), a.e("chunk-1b613fa8")]).then(a.bind(null, "2776"))
                    }
                }, {
                    name: "account",
                    path: "account",
                    meta: {
                        index: 2
                    },
                    component: function () {
                        return Promise.all([a.e("chunk-2d0b724a"), a.e("chunk-2bd53673")]).then(a.bind(null, "6955"))
                    }
                }, {
                    name: "trend",
                    path: "trend",
                    meta: {
                        index: 2
                    },
                    component: function () {
                        return Promise.all([a.e("chunk-2d0b724a"), a.e("chunk-0ff20e17")]).then(a.bind(null, "e310"))
                    }
                }, {
                    name: "result",
                    path: "result",
                    meta: {
                        index: 2
                    },
                    component: function () {
                        return Promise.all([a.e("chunk-2d0b724a"), a.e("chunk-60a97f3a")]).then(a.bind(null, "ee53"))
                    }
                }, {
                    name: "centre",
                    path: "centre",
                    meta: {
                        index: 2
                    },
                    component: function () {
                        return Promise.all([a.e("chunk-40345724"), a.e("chunk-02fff800")]).then(a.bind(null, "8fef"))
                    }
                }, {
                    name: "centreTopup",
                    path: "centre/topup",
                    meta: {
                        index: 3
                    },
                    component: function () {
                        return Promise.all([a.e("chunk-40345724"), a.e("chunk-4db0e8fe")]).then(a.bind(null, "c09b"))
                    }
                }, {
                    name: "centreWithdrawal",
                    path: "centre/withdrawal",
                    meta: {
                        index: 3
                    },
                    component: function () {
                        return a.e("chunk-446197e5").then(a.bind(null, "5ab3"))
                    }
                }, {
                    name: "centreSetting",
                    path: "centre/setting",
                    meta: {
                        index: 3
                    },
                    component: function () {
                        return a.e("chunk-56a0d4e8").then(a.bind(null, "1713"))
                    }
                }, {
                    name: "centrePassword",
                    path: "centre/password",
                    meta: {
                        index: 3
                    },
                    component: function () {
                        return a.e("chunk-df9d098c").then(a.bind(null, "3c79"))
                    }
                }, {
                    name: "centreBank",
                    path: "centre/bank",
                    meta: {
                        index: 3
                    },
                    component: function () {
                        return a.e("chunk-c923218e").then(a.bind(null, "1c32"))
                    }
                }, {
                    name: "centreReport",
                    path: "centre/report",
                    meta: {
                        index: 3
                    },
                    component: function () {
                        return a.e("chunk-308394ca").then(a.bind(null, "1a69"))
                    }
                }, {
                    name: "centreAgentBrokerage",
                    path: "centre/AgentBrokerage",
                    meta: {
                        index: 3
                    },
                    component: function () {
                        return a.e("chunk-5cc32478").then(a.bind(null, "a228"))
                    }
                }, {
                    name: "centreAgentList",
                    path: "centre/agentList",
                    meta: {
                        index: 3
                    },
                    component: function () {
                        return Promise.all([a.e("chunk-2d0b724a"), a.e("chunk-035fe573")]).then(a.bind(null, "a009"))
                    }
                }, {
                    name: "centreAgentSub",
                    path: "centre/agentSub",
                    meta: {
                        index: 3
                    },
                    component: function () {
                        return Promise.all([a.e("chunk-2d0b724a"), a.e("chunk-bcf69a06")]).then(a.bind(null, "4ba8"))
                    }
                }]
            }],
            E = new p.a({
                mode: "history",
                routes: k
            }),
            w = a("2f62");
        _.default.use(w.a);
        var O = new w.a.Store({
                state: {
                    gameChart: {},
                    member: {},
                    games: {},
                    isPlay: !!Object(u.j)("audioController") && Object(u.j)("audioController"),
                    isTurn: null,
                    isMuted: !1,
                    isButton: null,
                    isDown: null,
                    isSuccess: null,
                    pcGames: {},
                    wapCentreType: null
                },
                mutations: {
                    updateWapCentreType: function (e, t) {
                        e.wapCentreType = t
                    },
                    updateGameChart: function (e, t) {
                        e.gameChart = t
                    },
                    updatePcGames: function (e, t) {
                        e.pcGames = t
                    },
                    audioController: function (e, t) {
                        e.isPlay = t, Object(u.p)("audioController", t)
                    },
                    turnAudio: function (e, t) {
                        e.isTurn = t
                    },
                    safariPlay: function (e, t) {
                        e.isMuted = t
                    },
                    buttonAudio: function (e, t) {
                        e.isButton = t
                    },
                    downAudio: function (e, t) {
                        e.isDown = t
                    },
                    successAudio: function (e, t) {
                        e.isSuccess = t
                    },
                    updateBalance: function (e, t) {
                        e.member.balance = t
                    },
                    updateMember: function (e, t) {
                        e.member = t
                    },
                    updateGames: function (e, t) {
                        e.games = t
                    }
                }
            }),
            T = (a("4dcb"), a("a342"), {
                data: function () {
                    return {
                        isLoad: !1
                    }
                }
            }),
            j = (a("9c5d"), Object(b.a)(T, (function () {
                var e = this.$createElement,
                    t = this._self._c || e;
                return this.isLoad ? t("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [t("div", {
                    staticClass: "mask-layer flex txt-center load"
                }, [t("div", {
                    staticClass: "loader-wrapper"
                }, [t("div", {
                    staticClass: "loader"
                }, [t("div", {
                    staticClass: "roller"
                }), t("div", {
                    staticClass: "roller"
                })]), t("div", {
                    staticClass: "loader loader2"
                }, [t("div", {
                    staticClass: "roller"
                }), t("div", {
                    staticClass: "roller"
                })]), t("div", {
                    staticClass: "loader loader3"
                }, [t("div", {
                    staticClass: "roller"
                }), t("div", {
                    staticClass: "roller"
                })])])])]) : this._e()
            }), [], !1, null, "76632a65", null).exports),
            I = {
                install: function (e) {
                    var t = new(e.extend(j))({
                        el: document.createElement("div")
                    });
                    document.body.appendChild(t.$el), e.prototype.$Load = function (e) {
                        e ? t.isLoad = e : setTimeout((function () {
                            t.isLoad = e
                        }), 300)
                    }
                }
            },
            y = a("58ca");
        _.default.use(I), _.default.use(y.a), _.default.use(i.a), _.default.use(o.a), _.default.use(r.a), _.default.config.productionTip = !1, new _.default({
            router: E,
            store: O,
            render: function (e) {
                return e(f)
            }
        }).$mount("#app")
    },
    "59a1": function (e, t, a) {
        "use strict";
        a("a81d")
    },
    "9c5d": function (e, t, a) {
        "use strict";
        a("0ea5")
    },
    a342: function (e, t, a) {},
    a81d: function (e, t, a) {},
    c94c: function (e, t) {
        e.exports = "data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4LjIzLjEwMQAAAAAAAAAAAAAA//PgwAAAAAAAAAAAAEluZm8AAAAPAAAABAAACjQAZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmczMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz/////////////////////////////////AAAAAExhdmM1OC40MAAAAAAAAAAAAAAAACQCrAAAAAAAAAo0Oo0Y8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//PgxABrLBZYK1zIACECZWLBl4zGcD0aAQxoZAGdjIZIDBh1Am5YSeUxB3aiHAFsZwGQsAWDGBg0YoFhioPGJw2YbDJhUHmBwCWbLTlky47T5LPOAsIqRYj8TLW0xFBGIOQ5DOF2KAKCIPororpFqDrHceX5St22drvYm79+IOQsdd7X4fl/frxt2GcLscSUrnSHU3kTK13rvYeoGmOoO+achhhlo2TxxyH4sRBhiAcvGg+oO1+0+jDExC8aD7B5UrYX8LSF4GCQ+ytIdAOmG87SC4BhBGaaZp5nnmimaq5rqmmWLBhYA12TbXNM8zSzLJMkkxxTDDMUMzBgMI0EueY5pnomeeZppljmgYZhhlCIUJlmOea7JtrmiOZARiEGYgaSRpIGYQChGAmKeckRvKAJBIgGAGQgaixpFJwF7CzBaQABGMQZhxmEJQmSue2x4RBDgVNNuc7bztpOV01SzMEAQBbRMBrjkP5OQ2xCQOGu9x4MR4AAxlFGyua6ppomeWZI5ihgYNB9Y7LKKG4fmlbEJBdh9S2CABtJt/5fccBYRFdItdb90+crcNQMuQXgQcTEVIsRlktXOiAAkgADA0DTEIsSYGlgSYIuGgypmbk2mAgHmEg8/sxCiI40PIyeF0xLPKwrcchsSaGimYABwY3EOZkvManreoCW6MBA3KBEJQBAwEmSh5mf//PixFB8PBZ80Z3oACWJj6D5gmGQQGRhWVyklKkY2iqWqbJ2P4Y1DOYlh4Ch0RsW0ypD0cAxiVZv4i/zfDQOQSrC7V9b0EPuo4KAOIAIDgMlsRa4thkbaKVRKVzV+pWwTJAoBAUEDAMCQIBTAwKAkKBoEKmuQh23CTRabYZL3Kln67vWaSWodDAcEwsAoJBotMFQCMIAAMFQ4MEgGCABL7GFANmEwCp7DwBYqrAkBlgkhhUABGABgKASPyXzU4eiDsMna5Lc5qZ5KIKpygMzB0ATD4OwsCxg6CJgSA5iMBpgcIoNFAwJFdQQwPBIweCcwiH8HCaYDBoX3QDo+AAARoACoBamrLUEwFAikDgNMCwuMAgDDgdMCwiUNXy6i0lpQuX0zrOo7sELOZdATPjAYIyUHTBUHx4fDC8DwwixoTDCcFwEDSeRhsGhgiGIQNoYFxgkBxaoaAEwFANd46BJgiB5QAKbxgGGZgCABg2DgAB0wDBhMJAQ6o0ArWzBUIiUARgFTBEFErgEBw0DqwZEHbSFnN1g2Evs3FuDvTjwsyTSTtfAusnqmEYCgE+j5zmcUMEmRfxgUKqDlxGCO268EynCfxlFLG7kdoqs0zp2otD0iZUpso6YKCphgKg4AGJScZ7ThqVKDR1MfmIzCOhGMzMyFNEHMx0CjOK+N2xA18rzOA/MRCMxsWzPSf/z4MRdffwWJAHc4AATSiLM9Hc0MnTTRVMdMs5JFTOyWORvIwNGzpB7N21w1etzjBNNVK8YLgoYTARkMdj0xULBkkmAyAPBkHFwDEMFBQlEYMByGhMLldAwAUQYFY2X+QWdG4jsDgNIEEyXTKVhW4POjaYCA64wYATAQBZYoEwaOqHGAQMWtWUgGZuXdaYDQQYTCAKByjxcZpzhJzLOXKkSsguS1ELgIFApxy/qnkTkflDkATllnVuo3AIBNTh16UVXABIGMFgJp5e0ujQaXkn0jaYAAqhJboBAJda6pOw1RIwGBAMCk/zAQBLsshfhhzbBQCgoCrCGBwcYJADXC0zbO8lsCgMvswIFzDgRaEFAKEAmGYSsCloYLBhhMMIiGAQMYLBScboRt/gQDTBQJBQGCwFUi9hcZCaiaJAkwCApWoALBIwIAQoCQcFDDoMCoIMBhEmGRWBgsLTCgyMlgQKjAwoxzWCEOYm42++DDp1MYAIwcFzFJIMCgdWcxoNVAAwBEQFMMhRG4iDQOCoyCTEwhMPDkFEYwAATBwlJhitYwGFh4HA0AU4zhmPzTYCTMtUrIxYwKjCWERMRwIkwUQnjCDBGGQMwECFFU5kXzdEtYeeBDzlNQcHBbI0suKgQATkCzINtwYNA0ucuKKsxWaWeQKRiLKp6F0lgVmtaj8FtNWkzdTVlTY16lv/z4sRieuwVyAD2OnzIus00mMGpMJQKMNAzMMRcMChvAg1GAQqGFYYiw2GG4aGCA9mKhHGg4IGvCxmgMWGMzGGsofmYADGOYpmdxGmUKNGVosmahTmCA6GPgpmC4zGK4FGDgXkwWg4Bi4IXAwKgCr+MNZRuRfSYLbNzUtVtZgzdTV4oenmGvhJHRbtD7+wlUywKjjCGnuTAqwzY34icGRJkKjzN1NXoXU3GBLMMwQ+biw08L0RuZfaI0Epf5gKhyj7RWFKyrCLea7SM6Upaq7kNvo+bu5S1pUEOs8LuOcpqhkk6tBsDdW5MxZ9AbhFzRCBBKAiVa0GVuw2VjS+2iJ7JupuJfpAF+kVUJxIAK71BWcIHF2S2xgMB5gOEwUC8UCcLAsIQHReLcmAoFGDAVmEotGDg6mDQ6jorBQOTBsNDDgRzFccDG4vTGNCjCRMQIi5jMYxjqNZikGxhOFpgMGxCJ4qNwXIECjSYTBsYJgmKAkWAZEQIEgKmAoYGAwmgwTTA4NjB0GTBwABYNxINTB0CjBgKQCGFTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU="
    },
    dd42: function (e, t, a) {
        "use strict";
        a("101c")
    },
    ecaf: function (e, t, a) {
        "use strict";
        a("99af"), a("d3b7");
        var n = a("0e0b"),
            r = a("2d9f"),
            c = a("bc3a"),
            o = a.n(c).a.create({
                baseURL: window.apiHostSettings.API,
                headers: {
                    "Content-Type": "application/json"
                },
                timeout: 1e4
            });
        o.interceptors.response.use((function (e) {
            if (200 === e.status) return Promise.resolve(e);
            Promise.reject(e)
        }), (function (e) {
            return e.response && (e.response.status, console.log(e.response.data)), Promise.reject(e.response)
        }));
        var s = {
            HandleError: function (e) {
                "1" !== sessionStorage.getItem("DEVICE") ? Object(n.m)(r.a["code.id." + e.codeId], 1500) : Object(n.l)(r.a["code.id." + e.codeId], 1500)
            },
            AxiosInterceptors: function () {
                o.interceptors.request.use((function (e) {
                    return e.headers.token = sessionStorage.getItem("SESSION_TOKEN"), e
                }), (function (e) {
                    return Promise.reject(e)
                }))
            },
            Get: function (e, t, a) {
                var n = this;
                return e && this.AxiosInterceptors(), new Promise((function (e, r) {
                    o.get("".concat(window.apiHostSettings.API).concat(t), {
                        params: a
                    }).then((function (t) {
                        t.data.codeId ? n.HandleError(t.data) : e(t.data)
                    })).catch((function (e) {
                        return r(e)
                    }))
                }))
            },
            Post: function (e, t, a) {
                var n = this;
                return e && this.AxiosInterceptors(), new Promise((function (e, r) {
                    o.post("".concat(window.apiHostSettings.API).concat(t), a).then((function (t) {
                        t.data.codeId ? n.HandleError(t.data) : e(t.data)
                    })).catch((function (e) {
                        return r(e)
                    }))
                }))
            },
            OnlineService: function () {
                return this.Post("token", "logo", {
                    object: location.host
                })
            },
            GetUserInformation: function () {
                return this.Post("token", "web/getUserInfo", {})
            },
            ModifyUserInformation: function (e) {
                return this.Post("token", "web/updateUserInfo", {
                    object: e
                })
            },
            GetUserBank: function () {
                return this.Post("token", "web/getUserBank", {})
            },
            BindBank: function (e, t, a, n, r) {
                return this.Post("token", "web/bindUserBank", {
                    object: {
                        realName: e,
                        bankName: t,
                        bankAddres: a,
                        bankCardNo: n,
                        withdrawCode: r
                    }
                })
            },
            GetPromotionCode: function () {
                return this.Post("token", "web/getPromote", {})
            },
            ModifyMemberCommission: function (e) {
                return this.Post("token", "web/updatePromote", {
                    object: {
                        comm: e
                    }
                })
            },
            GetSubordinateReport: function (e, t, a, n) {
                return this.Post("token", "web/commReport", {
                    object: {
                        beginTime: e,
                        endTime: t,
                        username: a,
                        isRevocation: n
                    }
                })
            },
            GetSubordinateMember: function (e) {
                return this.Post("token", "web/subMembers", {
                    object: {
                        username: e
                    }
                })
            },
            ModifySubordinateCommission: function (e, t) {
                return this.Post("token", "web/updateMember", {
                    object: {
                        id: e,
                        comm: t
                    }
                })
            },
            GetBank: function () {
                return this.Post("token", "web/bankInfo", {})
            },
            Withdrawal: function (e, t) {
                return this.Post("token", "web/withraw", {
                    amount: e,
                    code: t
                })
            },
            Deposit: function (e, t, a, n) {
                return this.Post("token", "web/deposit", {
                    realName: e,
                    amount: t,
                    depositTime: a,
                    orderNo: n
                })
            }
        };
        t.a = s
    },
    ef81: function (e, t, a) {
        "use strict";
        a.d(t, "b", (function () {
            return n
        })), a.d(t, "h", (function () {
            return c
        })), a.d(t, "j", (function () {
            return o
        })), a.d(t, "c", (function () {
            return s
        })), a.d(t, "g", (function () {
            return i
        })), a.d(t, "e", (function () {
            return _
        })), a.d(t, "d", (function () {
            return r
        })), a.d(t, "i", (function () {
            return u
        })), a.d(t, "f", (function () {
            return l
        })), a.d(t, "a", (function () {
            return d
        }));
        var n = {
                fc_3d: {
                    gameName: "福彩3D",
                    gameType: 1,
                    tableId: 70101
                },
                pl_3: {
                    gameName: "排列三",
                    gameType: 1,
                    tableId: 70102
                },
                bj_pk_10: {
                    gameName: "北京PK10",
                    gameType: 2,
                    tableId: 70201
                },
                pk10_2: {
                    gameName: "极速PK10",
                    gameType: 2,
                    tableId: 70202
                },
                pk10_3: {
                    gameName: "朱雀PK10",
                    gameType: 2,
                    tableId: 70203
                },
                pk10_4: {
                    gameName: "三分PK10",
                    gameType: 2,
                    tableId: 70204
                },
                pk10_5: {
                    gameName: "五分PK10",
                    gameType: 2,
                    tableId: 70205
                },
                xyft: {
                    gameName: "168幸运飞艇",
                    gameType: 2,
                    tableId: 70206
                },
                xysc: {
                    gameName: "幸运赛车",
                    gameType: 2,
                    tableId: 70207
                },
                jsft: {
                    gameName: "极速飞艇",
                    gameType: 2,
                    tableId: 70208
                },
                jssc2: {
                    gameName: "极速赛车",
                    gameType: 2,
                    tableId: 70209
                },
                mssc: {
                    gameName: "秒速赛车",
                    gameType: 2,
                    tableId: 70210
                },
                azxy10: {
                    gameName: "澳洲幸运10",
                    gameType: 2,
                    tableId: 70211
                },
                xyf3: {
                    gameName: "F3赛车",
                    gameType: 2,
                    tableId: 70212
                },
                azlfc: {
                    gameName: "澳洲两分彩",
                    gameType: 2,
                    tableId: 70213
                },
                xyftap: {
                    gameName: "幸运飞艇",
                    gameType: 2,
                    tableId: 70214
                },
                jsftap: {
                    gameName: "700K极速飞艇",
                    gameType: 2,
                    tableId: 70215
                },
                ethsc: {
                    gameName: "ETH赛车",
                    gameType: 2,
                    tableId: 70216
                },
                ynsc: {
                    gameName: "VR赛车",
                    gameType: 2,
                    tableId: 70220
                },
                dm_kl: {
                    gameName: "丹麦快乐彩",
                    gameType: 3,
                    tableId: 70301
                },
                bj_kl8: {
                    gameName: "北京快乐8",
                    gameType: 3,
                    tableId: 70302
                },
                jnd_bs: {
                    gameName: "加拿大卑斯",
                    gameType: 3,
                    tableId: 70303
                },
                cq_ss: {
                    gameName: "重庆时时彩",
                    gameType: 4,
                    tableId: 70401
                },
                tj_ss: {
                    gameName: "天津时时彩",
                    gameType: 4,
                    tableId: 70402
                },
                xj_ss: {
                    gameName: "新疆时时彩",
                    gameType: 4,
                    tableId: 70403
                },
                ss_4: {
                    gameName: "极速时时彩",
                    gameType: 4,
                    tableId: 70404
                },
                ss_5: {
                    gameName: "朱雀时时彩",
                    gameType: 4,
                    tableId: 70405
                },
                ss_6: {
                    gameName: "腾讯分分彩",
                    gameType: 4,
                    tableId: 70406
                },
                ss_7: {
                    gameName: "极速两分彩",
                    gameType: 4,
                    tableId: 70407
                },
                ss_8: {
                    gameName: "朱雀两分彩",
                    gameType: 4,
                    tableId: 70408
                },
                ss_9: {
                    gameName: "三分时时彩",
                    gameType: 4,
                    tableId: 70409
                },
                ss_10: {
                    gameName: "五分时时彩",
                    gameType: 4,
                    tableId: 70410
                },
                msss: {
                    gameName: "秒速时时彩",
                    gameType: 4,
                    tableId: 70411
                },
                azxy5: {
                    gameName: "168澳洲幸运5",
                    gameType: 4,
                    tableId: 70412
                },
                jsss: {
                    gameName: "极速时时彩",
                    gameType: 4,
                    tableId: 70413
                },
                azxy5ap: {
                    gameName: "澳洲幸运5",
                    gameType: 4,
                    tableId: 70414
                },
                yn5d: {
                    gameName: "VR五星",
                    gameType: 4,
                    tableId: 70420
                },
                cq_kl10: {
                    gameName: "重庆快乐十分",
                    gameType: 5,
                    tableId: 70501
                },
                gd_kl10: {
                    gameName: "广东快乐十分",
                    gameType: 5,
                    tableId: 70502
                },
                js_ks: {
                    gameName: "江苏快三",
                    gameType: 6,
                    tableId: 70601
                },
                gx_ks: {
                    gameName: "广西快三",
                    gameType: 6,
                    tableId: 70602
                },
                ah_ks: {
                    gameName: "安徽快三",
                    gameType: 6,
                    tableId: 70603
                },
                ks_4: {
                    gameName: "极速快三",
                    gameType: 6,
                    tableId: 70604
                },
                ks_5: {
                    gameName: "朱雀快三",
                    gameType: 6,
                    tableId: 70605
                },
                ks_6: {
                    gameName: "两分快三",
                    gameType: 6,
                    tableId: 70606
                },
                ks_7: {
                    gameName: "三分快三",
                    gameType: 6,
                    tableId: 70607
                },
                ks_8: {
                    gameName: "五分快三",
                    gameType: 6,
                    tableId: 70608
                },
                gd_11_5: {
                    gameName: "广东11选5",
                    gameType: 7,
                    tableId: 70701
                },
                sd_11_5: {
                    gameName: "山东11选5",
                    gameType: 7,
                    tableId: 70702
                },
                jx_11_5: {
                    gameName: "江西11选5",
                    gameType: 7,
                    tableId: 70703
                },
                "11_5_4": {
                    gameName: "极速11选5",
                    gameType: 7,
                    tableId: 70704
                },
                "11_5_5": {
                    gameName: "朱雀11选5",
                    gameType: 7,
                    tableId: 70705
                },
                "11_5_6": {
                    gameName: "两分11选5",
                    gameType: 7,
                    tableId: 70706
                },
                "11_5_7": {
                    gameName: "三分11选5",
                    gameType: 7,
                    tableId: 70707
                },
                "11_5_8": {
                    gameName: "五分11选5",
                    gameType: 7,
                    tableId: 70708
                },
                bj_pk_28: {
                    gameName: "北京PK28",
                    gameType: 8,
                    tableId: 70801
                },
                pc_dd: {
                    gameName: "PC蛋蛋",
                    gameType: 8,
                    tableId: 70802
                },
                jnd28: {
                    gameName: "加拿大28",
                    gameType: 8,
                    tableId: 70803
                },
                "28_4": {
                    gameName: "极速28",
                    gameType: 8,
                    tableId: 70804
                },
                "28_5": {
                    gameName: "朱雀28",
                    gameType: 8,
                    tableId: 70805
                },
                "28_6": {
                    gameName: "两分28",
                    gameType: 8,
                    tableId: 70806
                },
                lh_cai: {
                    gameName: "六合彩",
                    gameType: 9,
                    tableId: 70901
                },
                lh_2: {
                    gameName: "极速六合彩",
                    gameType: 9,
                    tableId: 70902
                },
                lh_3: {
                    gameName: "朱雀六合彩",
                    gameType: 9,
                    tableId: 70903
                },
                lh_4: {
                    gameName: "三分六合彩",
                    gameType: 9,
                    tableId: 70904
                },
                lh_5: {
                    gameName: "五分六合彩",
                    gameType: 9,
                    tableId: 70905
                },
                pl5: {
                    gameName: "排列5",
                    gameType: 10,
                    tableId: 71001
                },
                pl5_5: {
                    gameName: "五分排列5",
                    gameType: 10,
                    tableId: 71002
                },
                qxc: {
                    gameName: "七星彩",
                    gameType: 11,
                    tableId: 71101
                }
            },
            r = {
                "01": {
                    color: 1,
                    zodiac: 1
                },
                "02": {
                    color: 1,
                    zodiac: 2
                },
                "03": {
                    color: 2,
                    zodiac: 3
                },
                "04": {
                    color: 2,
                    zodiac: 4
                },
                "05": {
                    color: 3,
                    zodiac: 5
                },
                "06": {
                    color: 3,
                    zodiac: 6
                },
                "07": {
                    color: 1,
                    zodiac: 7
                },
                "08": {
                    color: 1,
                    zodiac: 8
                },
                "09": {
                    color: 2,
                    zodiac: 9
                },
                10: {
                    color: 2,
                    zodiac: 10
                },
                11: {
                    color: 3,
                    zodiac: 11
                },
                12: {
                    color: 1,
                    zodiac: 12
                },
                13: {
                    color: 1,
                    zodiac: 1
                },
                14: {
                    color: 2,
                    zodiac: 2
                },
                15: {
                    color: 2,
                    zodiac: 3
                },
                16: {
                    color: 3,
                    zodiac: 4
                },
                17: {
                    color: 3,
                    zodiac: 5
                },
                18: {
                    color: 1,
                    zodiac: 6
                },
                19: {
                    color: 1,
                    zodiac: 7
                },
                20: {
                    color: 2,
                    zodiac: 8
                },
                21: {
                    color: 3,
                    zodiac: 9
                },
                22: {
                    color: 3,
                    zodiac: 10
                },
                23: {
                    color: 1,
                    zodiac: 11
                },
                24: {
                    color: 1,
                    zodiac: 12
                },
                25: {
                    color: 2,
                    zodiac: 1
                },
                26: {
                    color: 2,
                    zodiac: 2
                },
                27: {
                    color: 3,
                    zodiac: 3
                },
                28: {
                    color: 3,
                    zodiac: 4
                },
                29: {
                    color: 1,
                    zodiac: 5
                },
                30: {
                    color: 1,
                    zodiac: 6
                },
                31: {
                    color: 2,
                    zodiac: 7
                },
                32: {
                    color: 3,
                    zodiac: 8
                },
                33: {
                    color: 3,
                    zodiac: 9
                },
                34: {
                    color: 1,
                    zodiac: 10
                },
                35: {
                    color: 1,
                    zodiac: 11
                },
                36: {
                    color: 2,
                    zodiac: 12
                },
                37: {
                    color: 2,
                    zodiac: 1
                },
                38: {
                    color: 3,
                    zodiac: 2
                },
                39: {
                    color: 3,
                    zodiac: 3
                },
                40: {
                    color: 1,
                    zodiac: 4
                },
                41: {
                    color: 2,
                    zodiac: 5
                },
                42: {
                    color: 2,
                    zodiac: 6
                },
                43: {
                    color: 3,
                    zodiac: 7
                },
                44: {
                    color: 3,
                    zodiac: 8
                },
                45: {
                    color: 1,
                    zodiac: 9
                },
                46: {
                    color: 1,
                    zodiac: 10
                },
                47: {
                    color: 2,
                    zodiac: 11
                },
                48: {
                    color: 2,
                    zodiac: 12
                },
                49: {
                    color: 3,
                    zodiac: 1
                }
            },
            c = [{
                name: "冠亚和",
                list: ["1021202", "1021201"],
                selected: []
            }, {
                name: "冠军",
                list: ["1021102", "1021103", "1021101", "1021104"],
                selected: []
            }, {
                name: "亚军",
                list: ["1021102", "1021103", "1021101", "1021104"],
                selected: []
            }, {
                name: "第三名",
                list: ["1021102", "1021103", "1021101", "1021104"],
                selected: []
            }, {
                name: "第四名",
                list: ["1021102", "1021103", "1021101", "1021104"],
                selected: []
            }, {
                name: "第五名",
                list: ["1021102", "1021103", "1021101", "1021104"],
                selected: []
            }, {
                name: "第六名",
                list: ["1021102", "1021101", "1021104"],
                selected: []
            }, {
                name: "第七名",
                list: ["1021102", "1021101", "1021104"],
                selected: []
            }, {
                name: "第八名",
                list: ["1021102", "1021101", "1021104"],
                selected: []
            }, {
                name: "第九名",
                list: ["1021102", "1021101", "1021104"],
                selected: []
            }, {
                name: "第十名",
                list: ["1021102", "1021101", "1021104"],
                selected: []
            }],
            o = [{
                name: "第一球",
                list: ["1041102", "1041101"],
                selected: []
            }, {
                name: "第二球",
                list: ["1041102", "1041101"],
                selected: []
            }, {
                name: "第三球",
                list: ["1041102", "1041101"],
                selected: []
            }, {
                name: "第四球",
                list: ["1041102", "1041101"],
                selected: []
            }, {
                name: "第五球",
                list: ["1041102", "1041101"],
                selected: []
            }, {
                name: "前三球",
                list: ["1041201"],
                selected: []
            }, {
                name: "中三球",
                list: ["1041201"],
                selected: []
            }, {
                name: "后三球",
                list: ["1041201"],
                selected: []
            }, {
                name: "总和*龙虎",
                list: ["1041301", "1041401"],
                selected: []
            }, {
                name: "斗牛",
                list: ["1041501", "1041502"],
                selected: []
            }, {
                name: "梭哈",
                list: ["1041601"],
                selected: []
            }, {
                name: "中",
                list: ["1041801", "1041802", "1041803", "1041804", "1041805"],
                selected: []
            }],
            s = [{
                name: "和值",
                list: ["1061102", "1061101"],
                selected: []
            }, {
                name: "独胆",
                list: ["1061301"],
                selected: []
            }, {
                name: "豹子",
                list: ["1061501", "1061502"],
                selected: []
            }, {
                name: "对子",
                list: ["1061401"],
                selected: []
            }, {
                name: "两连",
                list: ["1061201"],
                selected: []
            }],
            i = [{
                name: "全部",
                list: ["1081202", "1081301", "1081201", "1081203", "1081401", "1081501", "1081101"],
                selected: []
            }],
            _ = [{
                name: "特码",
                list: [{
                    name: "特码A",
                    list: ["1091101", "1091102", "1091103", "1091105", "1091104", "1091106", "1091107", "1091108"],
                    selected: []
                }, {
                    name: "特码B",
                    list: ["1091201"],
                    selected: []
                }],
                selected: []
            }, {
                name: "特肖",
                list: [{
                    name: "特肖",
                    list: ["1091109"],
                    selected: []
                }],
                selected: []
            }, {
                name: "正码",
                list: [{
                    name: "正码",
                    list: ["1091301", "1091302", "1091303", "1091304"],
                    selected: []
                }],
                selected: []
            }, {
                name: "正码特",
                list: [{
                    name: "正1特",
                    list: ["1091401"],
                    selected: []
                }, {
                    name: "正2特",
                    list: ["1091401"],
                    selected: []
                }, {
                    name: "正3特",
                    list: ["1091401"],
                    selected: []
                }, {
                    name: "正4特",
                    list: ["1091401"],
                    selected: []
                }, {
                    name: "正5特",
                    list: ["1091401"],
                    selected: []
                }, {
                    name: "正6特",
                    list: ["1091401"],
                    selected: []
                }],
                selected: []
            }, {
                name: "正码1-6",
                list: [{
                    name: "正码1",
                    list: ["1091402", "1091403", "1091404", "1091405"],
                    selected: []
                }, {
                    name: "正码2",
                    list: ["1091402", "1091403", "1091404", "1091405"],
                    selected: []
                }, {
                    name: "正码3",
                    list: ["1091402", "1091403", "1091404", "1091405"],
                    selected: []
                }, {
                    name: "正码4",
                    list: ["1091402", "1091403", "1091404", "1091405"],
                    selected: []
                }, {
                    name: "正码5",
                    list: ["1091402", "1091403", "1091404", "1091405"],
                    selected: []
                }, {
                    name: "正码6",
                    list: ["1091402", "1091403", "1091404", "1091405"],
                    selected: []
                }],
                selected: []
            }, {
                name: "一肖尾数",
                list: [{
                    name: "一肖",
                    list: ["1091701"],
                    selected: []
                }, {
                    name: "尾数",
                    list: ["1091702"],
                    selected: []
                }],
                selected: []
            }, {
                name: "合肖",
                list: [{
                    name: "二肖",
                    list: ["1091801"],
                    selected: []
                }, {
                    name: "三肖",
                    list: ["1091802"],
                    selected: []
                }, {
                    name: "四肖",
                    list: ["1091803"],
                    selected: []
                }, {
                    name: "五肖",
                    list: ["1091804"],
                    selected: []
                }, {
                    name: "六肖",
                    list: ["1091805"],
                    selected: []
                }, {
                    name: "七肖",
                    list: ["1091806"],
                    selected: []
                }, {
                    name: "八肖",
                    list: ["1091807"],
                    selected: []
                }, {
                    name: "九肖",
                    list: ["1091808"],
                    selected: []
                }, {
                    name: "十肖",
                    list: ["1091809"],
                    selected: []
                }, {
                    name: "十一肖",
                    list: ["1091810"],
                    selected: []
                }],
                selected: []
            }, {
                name: "生肖连",
                list: [{
                    name: "二肖连中",
                    list: ["1091901"],
                    selected: []
                }, {
                    name: "三肖连中",
                    list: ["1091902"],
                    selected: []
                }, {
                    name: "四肖连中",
                    list: ["1091903"],
                    selected: []
                }, {
                    name: "五肖连中",
                    list: ["1091904"],
                    selected: []
                }, {
                    name: "二肖连不中",
                    list: ["1091905"],
                    selected: []
                }, {
                    name: "三肖连不中",
                    list: ["1091906"],
                    selected: []
                }, {
                    name: "四肖连不中",
                    list: ["1091907"],
                    selected: []
                }],
                selected: []
            }, {
                name: "尾数连",
                list: [{
                    name: "二尾连中",
                    list: ["1092001"],
                    selected: []
                }, {
                    name: "三尾连中",
                    list: ["1092002"],
                    selected: []
                }, {
                    name: "四尾连中",
                    list: ["1092003"],
                    selected: []
                }, {
                    name: "二尾连不中",
                    list: ["1092004"],
                    selected: []
                }, {
                    name: "三尾连不中",
                    list: ["1092005"],
                    selected: []
                }, {
                    name: "四尾连不中",
                    list: ["1092006"],
                    selected: []
                }],
                selected: []
            }, {
                name: "全不中",
                list: [{
                    name: "五不中",
                    list: ["1092101"],
                    selected: []
                }, {
                    name: "六不中",
                    list: ["1092102"],
                    selected: []
                }, {
                    name: "七不中",
                    list: ["1092103"],
                    selected: []
                }, {
                    name: "八不中",
                    list: ["1092104"],
                    selected: []
                }, {
                    name: "九不中",
                    list: ["1092105"],
                    selected: []
                }, {
                    name: "十不中",
                    list: ["1092106"],
                    selected: []
                }, {
                    name: "十一不中",
                    list: ["1092107"],
                    selected: []
                }, {
                    name: "十二不中",
                    list: ["1092108"],
                    selected: []
                }],
                selected: []
            }],
            u = [
                [{
                    name: "红大",
                    value: ["29", "30", "34", "35", "40", "45", "46"]
                }, {
                    name: "红合单",
                    value: ["01", "07", "12", "18", "23", "29", "30", "34", "45"]
                }, {
                    name: "红双",
                    value: ["02", "08", "12", "18", "24", "30", "34", "40", "46"]
                }],
                [{
                    name: "红小",
                    value: ["01", "02", "07", "08", "12", "13", "18", "19", "23", "24"]
                }, {
                    name: "红合双",
                    value: ["02", "08", "13", "19", "24", "35", "40"]
                }, {
                    name: "红单",
                    value: ["01", "07", "13", "19", "23", "29", "35", "45"]
                }],
                [{
                    name: "绿大",
                    value: ["27", "28", "32", "33", "38", "39", "43", "44"]
                }, {
                    name: "绿合单",
                    value: ["05", "16", "21", "27", "32", "38", "43", "49"]
                }, {
                    name: "绿双",
                    value: ["06", "16", "22", "28", "32", "38", "44"]
                }],
                [{
                    name: "绿单",
                    value: ["05", "11", "17", "21", "27", "33", "39", "43", "49"]
                }, {
                    name: "绿合双",
                    value: ["06", "11", "17", "22", "28", "33", "39", "44"]
                }, {
                    name: "绿小",
                    value: ["05", "06", "11", "16", "17", "21", "22"]
                }],
                [{
                    name: "蓝大",
                    value: ["25", "26", "31", "36", "37", "41", "42", "47", "48"]
                }, {
                    name: "蓝合单",
                    value: ["03", "09", "10", "14", "25", "36", "41", "47"]
                }, {
                    name: "蓝双",
                    value: ["04", "10", "14", "20", "26", "36", "42", "48"]
                }],
                [{
                    name: "蓝单",
                    value: ["03", "09", "15", "25", "31", "37", "41", "47"]
                }, {
                    name: "蓝合双",
                    value: ["04", "15", "20", "26", "31", "37", "42", "48"]
                }, {
                    name: "蓝小",
                    value: ["03", "04", "09", "10", "14", "15", "20"]
                }],
                [{
                    name: "大",
                    value: ["25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49"]
                }, {
                    name: "小",
                    value: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"]
                }, {
                    name: "单",
                    value: ["01", "03", "05", "07", "09", "11", "13", "15", "17", "19", "21", "23", "25", "27", "29", "31", "33", "35", "37", "39", "41", "43", "45", "47", "49"]
                }, {
                    name: "双",
                    value: ["02", "04", "06", "08", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38", "40", "42", "44", "46", "48"]
                }],
                [{
                    name: "鼠",
                    value: ["01", "13", "25", "37", "49"]
                }, {
                    name: "牛",
                    value: ["12", "24", "36", "48"]
                }, {
                    name: "虎",
                    value: ["11", "23", "35", "47"]
                }, {
                    name: "兔",
                    value: ["10", "22", "34", "46"]
                }],
                [{
                    name: "龙",
                    value: ["09", "21", "33", "45"]
                }, {
                    name: "蛇",
                    value: ["08", "20", "32", "44"]
                }, {
                    name: "马",
                    value: ["07", "19", "31", "43"]
                }, {
                    name: "羊",
                    value: ["06", "18", "30", "42"]
                }],
                [{
                    name: "猴",
                    value: ["05", "17", "29", "41"]
                }, {
                    name: "鸡",
                    value: ["04", "16", "28", "40"]
                }, {
                    name: "狗",
                    value: ["03", "15", "27", "39"]
                }, {
                    name: "猪",
                    value: ["02", "14", "26", "38"]
                }]
            ],
            l = {
                banker: "庄",
                banker1: "庄1",
                banker2: "庄2",
                banker3: "庄3",
                banker4: "庄4",
                banker5: "庄5",
                banker6: "庄6",
                player: "闲",
                player1: "闲1",
                player2: "闲2",
                player3: "闲3",
                player4: "闲4",
                player5: "闲5",
                player6: "闲6",
                tie: "和",
                pPair: "闲对",
                bPair: "庄对",
                super6: "幸运6",
                anyPair: "任意对子",
                perfectPair: "完美对子",
                bBonus: "庄龙宝",
                pBonus: "闲龙宝",
                big: "大",
                small: "小",
                odd: "单",
                even: "双",
                bBX: "庄保险",
                pBX: "闲保险",
                pMulti: "闲保险倍数",
                bMulti: "庄保险倍数",
                dragon: "龙",
                tiger: "虎",
                dragonRed: "龙红",
                dragonBlack: "龙黑",
                tigerRed: "虎红",
                tigerBlack: "虎黑",
                dragonOdd: "龙单",
                tigerOdd: "虎单",
                dragonEven: "龙双",
                tigerEven: "虎双",
                direct: "直注",
                separate: "分注",
                street: "街注",
                angle: "角注",
                line: "线注",
                three: "三个号",
                four: "四个号",
                firstRow: "行一",
                sndRow: "行二",
                thrRow: "行三",
                firstCol: "打注1",
                sndCol: "打注2",
                thrCol: "打注3",
                red: "红",
                black: "黑",
                low: "小",
                high: "大",
                allDices: "全围",
                threeForces: "三军",
                nineWayGards: "短牌",
                pairs: "长牌",
                surroundDices: "围骰",
                points: "点数",
                fan: "番",
                jiao: "角",
                sanmen: "三门",
                nian: "念",
                tong: "通",
                player1Double: "闲一翻倍",
                player2Double: "闲二翻倍",
                player3Double: "闲三翻倍",
                player1Equal: "闲一平倍",
                player2Equal: "闲二平倍",
                player3Equal: "闲三平倍",
                player1Many: "闲一多倍",
                player2Many: "闲二多倍",
                player3Many: "闲三多倍",
                banker1Double: "庄一翻倍",
                banker2Double: "庄二翻倍",
                banker3Double: "庄三翻倍",
                banker1Equal: "庄一平倍",
                banker2Equal: "庄二平倍",
                banker3Equal: "庄三平倍",
                banker1Many: "庄一多倍",
                banker2Many: "庄二多倍",
                banker3Many: "庄三多倍"
            },
            d = {
                result: {
                    1: "庄赢",
                    2: "庄赢庄对",
                    3: "庄赢闲对",
                    4: "庄赢庄对闲对",
                    5: "闲赢",
                    6: "闲赢庄对",
                    7: "闲赢闲对",
                    8: "闲赢庄对闲对",
                    9: "和赢",
                    10: "和赢庄对",
                    11: "和赢闲对",
                    12: "和赢庄对闲对"
                }
            }
    },
    f2b0: function (e, t, a) {
        e.exports = a.p + "media/tip.a5f4f97a.wav"
    }
});