!function (n) {
    var e = false || document.getElementById("newBridge");
    speedLogTime = (new Date).getTime(), speedLogId = speedLogTime + (1e7 * Math.random()).toString(16).substr(0, 4) + "_" + (new Date).getTime() + "_" + Math.random().toString().substr(2, 5), function (n) {
        function e(n, e) {
            return _(n, e)
        }

        function t(n, e, t) {
            if (null == t && (null == e ? (t = n, n = null) : (t = e, e = null, n instanceof Array && (e = n, n = null))), null != t) {
                var r = window.opera;
                if (!n && document.attachEvent && (!r || "[object Opera]" !== r.toString())) {
                    var a = S();
                    n = a && a.getAttribute("data-require-id")
                }
                n ? (i(n, e, t), z && clearTimeout(z)) : C[0] = { deps: e, factory: t }
            }
        }

        function r() {
            var n = H.config[this.id];
            return n && "object" == typeof n ? n : {}
        }

        function i(n, e, t) {
            T[n] || (T[n] = {
                id: n,
                depsDec: e,
                deps: e || ["require", "exports", "module"],
                factoryDeps: [],
                factory: t,
                exports: {},
                config: r,
                state: O,
                require: w(n),
                depMs: [],
                depMkv: {},
                depRs: [],
                depPMs: []
            })
        }

        function a(n) {
            var e = T[n];
            if (e && !f(n, j)) {
                var t = e.deps, r = e.factory, i = 0;
                "function" == typeof r && (i = Math.min(r.length, t.length), !e.depsDec && r.toString().replace(/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm, "").replace(/require\(\s*(['"'])([^'"]+)\1\s*\)/g, function (n, e, r) {
                    t.push(r)
                }));
                var a = [];
                $(t, function (t, r) {
                    var o, u, c = I(t), f = q(c.mod, n);
                    f && !P[f] ? (c.res && (u = {
                        id: t,
                        mod: f,
                        res: c.res
                    }, B[f] = 1, e.depPMs.push(f), e.depRs.push(u)), (o = e.depMkv[f]) || (o = {
                        id: c.mod,
                        absId: f,
                        hard: i > r
                    }, e.depMs.push(o), e.depMkv[f] = o, a.push(f))) : o = { absId: f }, i > r && e.factoryDeps.push(u || o)
                }), e.state = j, c(n), g(a)
            }
        }

        function o() {
            for (var n in B) u(n), s(n)
        }

        function u(n) {
            function e(n) {
                if (!f(n, j)) return !1;
                if (f(n, F) || t[n]) return !0;
                t[n] = 1;
                var r = T[n], i = !0;
                return $(r.depMs, function (n) {
                    return i = e(n.absId)
                }), i && $(r.depRs, function (n) {
                    return i = !(!n.absId || !f(n.absId, L))
                }), i && (r.state = F), i
            }

            var t = {};
            e(n)
        }

        function c(e) {
            function t() {
                if (!r && i.state === F) {
                    r = 1;
                    var t = 1, a = [];
                    if ($(i.factoryDeps, function (n) {
                        var e = n.absId;
                        return P[e] || (s(e), f(e, L)) ? void a.push(e) : (t = 0, !1)
                    }), t) {
                        try {
                            var o = l(a, { require: i.require, exports: i.exports, module: i }), u = i.factory,
                                c = "function" == typeof u ? u.apply(n, o) : u;
                            null != c && (i.exports = c), i.invokeFactory = null, delete B[e]
                        } catch (n) {
                            if (r = 0, /^\[MODULE_MISS\]"([^"]+)/.test(n.message)) {
                                var d = i.depMkv[RegExp.$1];
                                return void (d && (d.hard = 1))
                            }
                            throw n
                        }
                        p(e)
                    }
                }
            }

            var r, i = T[e];
            i.invokeFactory = t, $(i.depPMs, function (n) {
                d(n, function () {
                    $(i.depRs, function (t) {
                        t.absId || t.mod !== n || (t.absId = q(t.id, e), g([t.absId], o))
                    })
                })
            })
        }

        function f(n, e) {
            return T[n] && T[n].state >= e
        }

        function s(n) {
            var e = T[n];
            e && e.invokeFactory && e.invokeFactory()
        }

        function l(n, e) {
            var t = [];
            return $(n, function (n, r) {
                t[r] = e[n] || m(n)
            }), t
        }

        function d(n, e) {
            if (f(n, L)) return void e();
            var t = N[n];
            t || (t = N[n] = []), t.push(e)
        }

        function p(n) {
            var e = N[n] || [];
            T[n].state = L;
            for (var t = e.length; t--;) e[t]();
            e.length = 0, delete N[n]
        }

        function m(n) {
            return f(n, L) ? T[n].exports : null
        }

        function v(n) {
            $(C, function (e) {
                i(n, e.deps, e.factory)
            }), C.length = 0, a(n)
        }

        function g(e, t, r, i) {
            function u() {
                if (!c) {
                    var r = 1;
                    $(e, function (n) {
                        return P[n] ? void 0 : r = !!f(n, L)
                    }), r && (c = 1, "function" == typeof t && t.apply(n, l(e, P)))
                }
            }

            if ("string" == typeof e) {
                if (s(e), !f(e, L)) throw new Error('[MODULE_MISS]"' + e + '" is not exists!');
                return m(e)
            }
            i = i || {};
            var c = 0;
            e instanceof Array && (u(), c || ($(e, function (n) {
                P[n] || f(n, L) || (d(n, u), i[n] || (n.indexOf("!") > 0 ? y : h)(n, r), a(n))
            }), o()))
        }

        function h(n) {
            function e() {
                var e = t.readyState;
                if (void 0 === e || /^(loaded|complete)$/.test(e)) {
                    t.onload = t.onreadystatechange = null, t = null, v(n);
                    for (var r in B) a(r);
                    o()
                }
            }

            if (!G[n] && !T[n]) {
                G[n] = 1;
                var t = document.createElement("script");
                t.setAttribute("charset", "utf-8"), t.setAttribute("data-require-id", n), t.src = M(n + ".js"), t.async = !0, t.readyState ? t.onreadystatechange = e : t.onload = e, R(t)
            }
        }

        function y(n, e) {
            function t(e) {
                o.exports = e || !0, p(n)
            }

            function i(i) {
                var o = e ? T[e].require : _;
                i.load(a.res, o, t, r.call({ id: n }))
            }

            if (!T[n]) {
                var a = I(n), o = { id: n, state: j };
                T[n] = o, t.fromText = function (n, e) {
                    B[n] = 1, new Function(e)(), v(n)
                }, i(m(a.mod))
            }
        }

        function b(n, e) {
            var t = A(n, 1, e);
            return t.sort(D), t
        }

        function x() {
            H.baseUrl = H.baseUrl.replace(/\/$/, "") + "/", J = b(H.paths), Q = b(H.map, 1), $(Q, function (n) {
                n.v = b(n.v)
            }), K = [], $(H.packages, function (n) {
                var e = n;
                "string" == typeof n && (e = {
                    name: n.split("/")[0],
                    location: n,
                    main: "main"
                }), e.location = e.location || e.name, e.main = (e.main || "main").replace(/\.js$/i, ""), e.reg = U(e.name), K.push(e)
            }), K.sort(D), V = b(H.urlArgs, 1), W = b(H.noRequests), $(W, function (n) {
                var e = n.v, t = {};
                n.v = t, e instanceof Array || (e = [e]), $(e, function (n) {
                    t[n] = 1
                })
            })
        }

        function k(n, e, t) {
            $(e, function (e) {
                return e.reg.test(n) ? (t(e.v, e.k, e), !1) : void 0
            })
        }

        function M(n) {
            var e = /(\.[a-z0-9]+)$/i, t = /(\?[^#]*)$/, r = "", i = n, a = "";
            t.test(n) && (a = RegExp.$1, n = n.replace(t, "")), e.test(n) && (r = RegExp.$1, i = n.replace(e, ""));
            var o, u = i;
            return k(i, J, function (n, e) {
                u = u.replace(e, n), o = 1
            }), o || k(i, K, function (n, e, t) {
                u = u.replace(t.name, t.location)
            }), /^([a-z]{2,10}:\/)?\//i.test(u) || (u = H.baseUrl + u), u += r + a, k(i, V, function (n) {
                u += (u.indexOf("?") > 0 ? "&" : "?") + n
            }), u
        }

        function w(n) {
            function e(e, r) {
                if ("string" == typeof e) return t[e] || (t[e] = g(q(e, n))), t[e];
                if (e instanceof Array) {
                    var i = [], a = [], o = [];
                    $(e, function (e, t) {
                        var r = I(e), u = q(r.mod, n);
                        a.push(u), B[u] = 1, r.res ? (i.push(u), o[t] = null) : o[t] = u
                    });
                    var u = {};
                    $(a, function (n) {
                        var e;
                        k(n, W, function (n) {
                            e = n
                        }), e && (e["*"] ? u[n] = 1 : $(a, function (t) {
                            return e[t] ? (u[n] = 1, !1) : void 0
                        }))
                    }), g(a, function () {
                        $(o, function (t, r) {
                            null == t && (o[r] = q(e[r], n))
                        }), g(o, r, n)
                    }, n, u)
                }
            }

            var t = {};
            return e.toUrl = function (e) {
                return M(q(e, n))
            }, e
        }

        function q(n, e) {
            if (!n) return "";
            e = e || "";
            var t = I(n);
            if (!t) return n;
            var r = t.res, i = E(t.mod, e);
            if ($(K, function (n) {
                var e = n.name;
                return e === i ? (i = e + "/" + n.main, !1) : void 0
            }), k(e, Q, function (n) {
                k(i, n, function (n, e) {
                    i = i.replace(e, n)
                })
            }), r) {
                var a = m(i);
                r = a.normalize ? a.normalize(r, function (n) {
                    return q(n, e)
                }) : q(r, e), i += "!" + r
            }
            return i
        }

        function E(n, e) {
            if (0 === n.indexOf(".")) {
                var t = e.split("/"), r = n.split("/"), i = t.length - 1, a = r.length, o = 0, u = 0;
                n: for (var c = 0; a > c; c++) {
                    var f = r[c];
                    switch (f) {
                        case "..":
                            if (!(i > o)) break n;
                            o++, u++;
                            break;
                        case ".":
                            u++;
                            break;
                        default:
                            break n
                    }
                }
                return t.length = i - o, r = r.slice(u), t.concat(r).join("/")
            }
            return n
        }

        function I(n) {
            var e = n.split("!");
            return e[0] ? { mod: e[0], res: e[1] } : null
        }

        function A(n, e, t) {
            var r = [];
            for (var i in n) if (n.hasOwnProperty(i)) {
                var a = { k: i, v: n[i] };
                r.push(a), e && (a.reg = "*" === i && t ? /^/ : U(i))
            }
            return r
        }

        function S() {
            if (X) return X;
            if (Y && "interactive" === Y.readyState) return Y;
            for (var n = document.getElementsByTagName("script"), e = n.length; e--;) {
                var t = n[e];
                if ("interactive" === t.readyState) return Y = t, t
            }
        }

        function R(n) {
            X = n, nn ? Z.insertBefore(n, nn) : Z.appendChild(n), X = null
        }

        function U(n) {
            return new RegExp("^" + n + "(/|$)")
        }

        function $(n, e) {
            if (n instanceof Array) for (var t = 0, r = n.length; r > t && !1 !== e(n[t], t); t++);
        }

        function D(n, e) {
            var t = n.k || n.name, r = e.k || e.name;
            return "*" === r ? -1 : "*" === t ? 1 : r.length - t.length
        }

        var T = {}, B = {}, O = 1, j = 2, F = 3, L = 4, _ = w();
        e.version = "1.8.6", e.loader = "esl", e.toUrl = _.toUrl;
        var z;
        t.amd = {};
        var N = {}, P = { require: e, exports: 1, module: 1 }, C = [], G = {},
            H = { baseUrl: "./", paths: {}, config: {}, map: {}, packages: [], noRequests: {}, urlArgs: {} };
        e.config = function (n) {
            function e(n) {
                i.push(n)
            }

            if (n) {
                for (var t in H) {
                    var r = n[t], i = H[t];
                    if (r) if ("urlArgs" === t && "string" == typeof r) H.urlArgs["*"] = r; else if (i instanceof Array) $(r, e); else if ("object" == typeof i) for (var t in r) i[t] = r[t]; else H[t] = r
                }
                x()
            }
        }, x();
        var J, K, Q, V, W, X, Y, Z = document.getElementsByTagName("head")[0],
            nn = document.getElementsByTagName("base")[0];
        nn && (Z = nn.parentNode), n.define || (n.define = t, n.require || (n.require = e), n.esl = e)
    }(e);
    var require = e.require, define = e.define;
    require.config({
        'baseUrl': '//sgoutong.baidu.com/embed/1588057042/asset/',
        'paths': { 'cl': 'common/css' },
        'packages': [{ 'name': 'lib', 'location': 'common', 'main': 'lib' }, {
            'name': 'bull',
            'location': '../dep/bull/asset',
            'main': 'main'
        }, { 'name': 'im-lib', 'location': '../dep/im-lib/0.1.0/asset/pc', 'main': 'main' }, {
            'name': 'im-core',
            'location': '../dep/im-core/0.2.0/asset',
            'main': 'main'
        }, { 'name': 'im-editor', 'location': '../dep/im-editor/0.1.0/asset', 'main': 'main' }, {
            'name': 'im-filter',
            'location': '../dep/im-filter/0.1.0/asset',
            'main': 'main'
        }]
    }), define("bull/aop/JointPoint", ["require"], function (require) {
        function e(e, t, n, i, o, r) {
            this.thisp = e, this.args = t, this.modName = n, this.funcName = i, this.func = o, this.returnValue = r
        }

        return e.prototype = {
            constructor: e, getThis: function () {
                return this.thisp
            }, getArgs: function () {
                return this.args
            }, getModName: function () {
                return this.modName
            }, getFuncName: function () {
                return this.funcName
            }, getFunc: function () {
                return this.func
            }, setReturnValue: function (e) {
                this.returnValue = e
            }, getReturnValue: function () {
                return this.returnValue
            }
        }, e
    }), define("bull/aop/aopEmitter", ["require", "./main"], function (require) {
        function e(e, n, i) {
            var o = [], r = t;
            if (r = r[e] || {}, r = r[n] || {}, r = r[i] || [], "[object Array]" === {}.toString.call(r)) for (var s = 0; s < r.length; s++) o.push(r[s]);
            return o
        }

        var exports = {}, t = {};
        return exports.on = function (e, n, i, o) {
            var r = t;
            r[e] = r[e] || {}, r = r[e], r[n] = r[n] || {}, r = r[n], r[i] = r[i] || [], r = r[i], r.push({
                func: o.func,
                funcName: o.funcName,
                modName: o.modName
            })
        }, exports.getBefore = function (t, n) {
            return e(require("./main").TypeEnum.BEFORE, t, n)
        }, exports.queryBefore = function (e, t) {
            var n = exports.getBefore();
            if (console.log("method before " + e + " -> " + t + ":"), !n.length) return void console.log("none");
            for (var i = 0; i < n.length; i++) console.log(n[i].modName + " -> " + n[i].funcName);
            console.log("-----------------------------------")
        }, exports.getAfter = function (t, n) {
            return e(require("./main").TypeEnum.AFTER, t, n)
        }, exports.queryAfter = function (e, t) {
            var n = exports.getAfter();
            if (!n.length) return void console.log("none");
            console.log("method after " + e + " -> " + t + ":");
            for (var i = 0; i < n.length; i++) console.log(n[i].modName + " -> " + n[i].funcName);
            console.log("-----------------------------------")
        }, exports.getRegisterAop = function (e) {
            var n = {}, i = [], o = t[e];
            for (var r in o) if (o.hasOwnProperty(r)) {
                var s = o[r];
                for (var a in s) if (s.hasOwnProperty(a)) {
                    if (!n[a]) n[a] = !0, i.push({ modName: r, funcName: a, from: s[a][0].modName })
                }
            }
            return i
        }, exports.emit = function (t, n, i, o) {
            for (var r = e(t, n, i), s = 0; s < r.length; s++) r[s].func(o)
        }, exports
    }), define("bull/microPromise/microPromise", ["require"], function (require) {
        function e() {
            for (var e = arguments.length, n = 0, i = t(), o = [], r = 0; r < e; r++) {
                var s = arguments[r];
                !function (t) {
                    s.then(function (r) {
                        if (n++, o[t] = r, n === e) i.resolve.apply(i, o)
                    }, function () {
                        i.reject()
                    })
                }(r)
            }
            return i.promise()
        }

        var t = function () {
            function e() {
                for (var e = this, t = 0; t < o.length; t++) !function (t) {
                    if (s && s[0] && s[0].then) s[0].then(function () {
                        o[t].apply(e, arguments)
                    }); else setTimeout(function () {
                        o[t].apply(e, s)
                    }, 0)
                }(t)
            }

            function n() {
                for (var e = this, t = 0; t < r.length; t++) !function (t) {
                    setTimeout(function () {
                        r[t].apply(e, s)
                    }, 0)
                }(t)
            }

            function i(e, n) {
                var i = t();
                if (u === c.resolved) {
                    var d = this;
                    setTimeout(function () {
                        e.apply(d, s)
                    }, 0)
                } else if (u === c.reject) {
                    var d = this;
                    setTimeout(function () {
                        n.call(d, a)
                    }, 0)
                } else {
                    if (e) o.push(function () {
                        i.resolve(e.apply(d, arguments))
                    });
                    if (n) r.push(function (e) {
                        n(e), i.reject()
                    })
                }
                return i.promise()
            }

            if (!this instanceof t) return new t;
            var o = [], r = [], s = [], a = "", c = { pendding: 1, resolved: 2, rejected: 3 }, u = c.pendding;
            return {
                resolve: function () {
                    var t = Array.prototype.slice.call(arguments, 0);
                    if (u === c.pendding) s = t, u = c.resolved, e.call(this)
                }, reject: function (e) {
                    if (u === c.pendding) a = e, u = c.rejected, n.call(this)
                }, then: i, promise: function () {
                    return { then: i }
                }
            }
        };
        return { Deferred: t, when: e }
    }), define("bull/aop/main", ["require", "./JointPoint", "./aopEmitter", "../loader", "../microPromise/microPromise"], function (require) {
        function e(e, t, n) {
            r.emit(s.BEFORE, e, t, n)
        }

        function t(e, t, n) {
            r.emit(s.AFTER, e, t, n)
        }

        function n(e) {
            return e = e || "", e.replace(/^\s|\s$/g, "")
        }

        function i(e) {
            e = e || "";
            var t = e.split(","), i = n(t[0] || ""), o = n(t[1]), r = n(t[2]);
            return t = i.split("."), { packageName: t[0], modName: t[1], funcName: t[2], before: o, after: r }
        }

        var exports = {}, o = require("./JointPoint"), r = require("./aopEmitter"),
            s = exports.TypeEnum = { BEFORE: "type1", AFTER: "type2" };
        return exports.createAopProxy = function (n, i, r) {
            var s = require("../loader"), a = require("../microPromise/microPromise");
            return function () {
                var c = [], u = Array.prototype.slice.call(arguments, 0), d = new o(this, u, n, i, r),
                    l = { jointPoint: d, microPromise: a };
                e(n, i, d);
                var f = s.getInjection(n) || {}, m = f[i] || [];
                if ("[object Array]" === {}.toString.call(m)) for (var p = 0; p < m.length; p++) {
                    var g = m[p];
                    if (g in l) c.push(l[g]); else c.push(s.get(g))
                }
                c = c.concat(u);
                var h = r.apply(this, c);
                if (h && h.then) h.then(function (e) {
                    d.setReturnValue(e), t(n, i, d)
                }); else d.setReturnValue(h), t(n, i, d);
                return h
            }
        }, exports.aspectRegister = function (e, t, n) {
            var o = require("../loader");
            if (-1 === e.indexOf(".")) e = t + "." + e;
            for (var a = 0; a < n.length; a++) !function (t) {
                t.before && r.on(s.BEFORE, t.packageName + "." + t.modName, t.funcName, {
                    modName: e,
                    funcName: t.before,
                    func: function (n) {
                        var i = o.get(e)[t.before];
                        if (!i) throw 'module "' + e + "\" don't have method " + t.before;
                        i.apply(n.getThis(), n.getArgs())
                    }
                }), t.after && r.on(s.AFTER, t.packageName + "." + t.modName, t.funcName, {
                    modName: e,
                    funcName: t.after,
                    func: function (n) {
                        var i = o.get(e)[t.after];
                        if (!i) throw 'module "' + e + "\" don't have method " + t.after;
                        i.apply(n.getThis(), n.getArgs())
                    }
                })
            }(i(n[a]))
        }, exports
    }), define("bull/loader", ["require", "./aop/main"], function (require) {
        function e(t, n) {
            var i;
            if ("function" == typeof n) {
                e(t, n.prototype);
                var o = c(t, r, n);
                return o.prototype = n.prototype, o
            } else {
                for (var r in n) if (n.hasOwnProperty(r)) if ("function" == typeof (i = n[r])) n[r] = c(t, r, i);
                return n
            }
        }

        function t(e) {
            e = e || [];
            for (var t = 0; t < e.length; t++) exports.init(e[t])
        }

        function n(t, n) {
            for (var i in t) if (t.hasOwnProperty(i)) {
                var o = t[i];
                if (i = n + "." + i, r.hasOwnProperty(i)) {
                    if (o._belong && i !== o._belong) throw 'module conflict: module "' + i + '" is already register to "' + o._belong + '"'
                } else {
                    if (o._belong) throw 'module "' + i + '" already register to "' + o._belong + '"';
                    o._belong = i, r[i] = e(i, o)
                }
            }
        }

        function i(e, t) {
            e = e || [];
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                s[i.id] = s[i.id] || {};
                var o = s[i.id], r = i.method;
                for (var a in r) o[a] = r[a]
            }
        }

        function o(e, t) {
            for (var n = 0; n < e.length; n++) {
                var i = e[n];
                u(i.id, t, i.pointCut)
            }
        }

        var exports = {}, r = {}, s = {}, a = require("./aop/main"), c = a.createAopProxy, u = a.aspectRegister;
        return exports.init = function (e) {
            if (!e._initialized) {
                e._initialized = !0;
                var r = e.package;
                if (!r && (e.resource || e.aspect)) throw "package name not found";
                t(e.importConfig), e.resource && n(e.resource, r), e.aspect && o(e.aspect, r), e.injection && i(e.injection, r)
            }
        }, exports.getInjection = function (e) {
            return s[e]
        }, exports.getDeps = function (e) {
            var t = s[e], n = {};
            for (var i in t) if (t.hasOwnProperty(i)) for (var o = t[i], r = 0; r < o.length; r++) n[o[r]] = !0;
            delete n[e];
            var a = [];
            for (var i in n) if (i.indexOf(".") > -1) a.push(i);
            return a
        }, exports.queryDep = function (e) {
            var t = exports.getDeps(e);
            if (console.log("deps of " + e + " is:"), !t.length) console.log("none");
            for (var n = 0; n < t.length; n++) console.log(t[n]);
            console.log("-----------------------------------")
        }, exports.getModules = function (e) {
            e = e || "";
            var t = [];
            for (var n in r) if (r.hasOwnProperty(n)) if (e) {
                if (n.indexOf(e) > -1) t.push(n)
            } else t.push(n);
            return t
        }, exports.queryModule = function (e) {
            var t = exports.getModules(e);
            if (e) console.log('modules contains "' + e + '":'); else console.log("all modules:");
            for (var n = 0; n < t.length; n++) console.log(t[n]);
            console.log("-----------------------------------")
        }, exports.queryInvoke = function (e) {
            var t = [], n = {};
            for (var i in s) if (s.hasOwnProperty(i)) {
                var o = s[i];
                for (var r in o) if (o.hasOwnProperty(r)) for (var a = o[r], c = 0; c < a.length; c++) {
                    var u = a[c];
                    if (u === e) {
                        var d = i + u;
                        if (d in n) continue; else n[d] = !0;
                        t.push({ modName: i, funcName: r })
                    }
                }
            }
            if (t.length) {
                console.log("module " + e + " used by these method:");
                for (var c = 0; c < t.length; c++) console.log(t[c].modName + " -> " + r)
            } else console.log("module" + e + " used nowhere");
            console.log("-----------------------------------")
        }, exports.checkDep = function () {
            var e, t = 0;
            console.log("checking deps:");
            for (var n in r) if (r.hasOwnProperty(n)) {
                e = exports.getDeps(n);
                for (var i = 0; i < e.length; i++) if (!exports.has(e[i])) if (e[i].indexOf(".") > -1) t++, console.log(e[i] + " is required by " + n + " but now missing")
            }
            if (!t) console.log("all dependencies is ready");
            console.log("-----------------------------------")
        }, exports.has = function (e) {
            return e in r
        }, exports.get = function (e) {
            if (e in r) return r[e]; else throw 'module "' + e + '" not found'
        }, exports
    }), define("bull/main", ["require", "./loader", "./aop/aopEmitter"], function (require) {
        function e() {
            var e = document.createElement("div"), t = e.style;
            t.position = "fixed", t.right = "20px", t.top = "20px", t.border = "solid 1px black", t.backgroundColor = "#eee", e.innerHTML = "\u70b9\u6b64\u67e5\u770b<br/>\u6a21\u5757\u5173\u7cfb";
            var n = !1;
            e.onclick = function () {
                if (!n) n = !0, require(["bull/debug"], function (e) {
                    n = !1, e.entry()
                })
            }, document.body.insertBefore(e, document.body.firstChild)
        }

        function t() {
            if (location.hash.indexOf("bullDebug") > -1) e()
        }

        var exports = {}, n = require("./loader"), i = require("./aop/aopEmitter");
        return exports.get = n.get, exports.queryBefore = i.queryBefore, exports.queryAfter = i.queryAfter, exports.queryInvoke = n.queryInvoke, exports.queryDep = n.queryDep, exports.checkDep = n.checkDep, exports.queryModule = n.queryModule, exports.init = function (e) {
            t(), n.init(e)
        }, exports
    }), define("bull", ["bull/main"], function (e) {
        return e
    }), define("embed/data/config", ["require"], function (require) {
        var exports = {};
        return exports.staticDomain = "//sgoutong.baidu.com", exports.getServer = function (e, t) {
            var n = e.getWrap();
            return n = { configBox: n.config, siteObj: n.siteConfig, startTime: n.startTime }, n[t] || n
        }, exports.isAutoInvite = function () {
            return !!(exports.getServer("configBox").inviteBox.autoInvite - 0)
        }, exports
    }), define("embed/data/bullConfig", ["require", "./config"], function (require) {
        return {
            package: "data",
            resource: { config: require("./config") },
            injection: [{ id: "data.config", method: { getServer: ["common.view"] } }]
        }
    }), define("im-lib/lang/isObject", [], function () {
        return function (e) {
            return "[object Object]" == Object.prototype.toString.call(e)
        }
    }), define("im-lib/lang/isArray", [], function () {
        return function (e) {
            return "[object Array]" == Object.prototype.toString.call(e)
        }
    }), define("im-lib/lang/extend", [], function () {
        return function (e, t) {
            for (var n in t) if (t.hasOwnProperty(n)) e[n] = t[n];
            return e
        }
    }), define("im-lib/lang/each", ["require", "./isArray"], function (require) {
        return function (e, t, n) {
            if (require("./isArray")(e)) {
                for (var i = e.length, o = 0; o < i; o++) if ("function" == typeof t) t.call(n, e[o], o, e)
            } else for (var r in e) if (e.hasOwnProperty(r)) t.call(n, r, e[r], e)
        }
    }), define("im-lib/lang", ["require", "./lang/isObject", "./lang/isArray", "./lang/extend", "./lang/each"], function (require) {
        var exports = {};
        return exports.isObject = require("./lang/isObject"), exports.isArray = require("./lang/isArray"), exports.extend = require("./lang/extend"), exports.each = require("./lang/each"), exports
    }), define("im-lib/json", [], function () {
        function e(e) {
            if (/["\\\x00-\x1f]/.test(e)) e = e.replace(/["\\\x00-\x1f]/g, function (e) {
                var t = r[e];
                if (t) return t; else return t = e.charCodeAt(), "\\u00" + Math.floor(t / 16).toString(16) + (t % 16).toString(16)
            });
            return '"' + e + '"'
        }

        function t(e) {
            var t, n, i, r = ["["], s = e.length;
            for (n = 0; n < s; n++) switch (typeof (i = e[n])) {
                case "undefined":
                case "function":
                case "unknown":
                    break;
                default:
                    if (t) r.push(",");
                    r.push(o(i)), t = 1
            }
            return r.push("]"), r.join("")
        }

        function n(e) {
            return e < 10 ? "0" + e : e
        }

        function i(e) {
            return '"' + e.getFullYear() + "-" + n(e.getMonth() + 1) + "-" + n(e.getDate()) + "T" + n(e.getHours()) + ":" + n(e.getMinutes()) + ":" + n(e.getSeconds()) + '"'
        }

        function o(n) {
            switch (typeof n) {
                case "undefined":
                    return "undefined";
                case "number":
                    return isFinite(n) ? String(n) : "null";
                case "string":
                    return e(n);
                case "boolean":
                    return String(n);
                default:
                    if (null === n) return "null"; else if (n instanceof Array) return t(n); else if (n instanceof Date) return i(n); else {
                        var r, s, a = ["{"], c = o;
                        for (var u in n) if (Object.prototype.hasOwnProperty.call(n, u)) switch (typeof (s = n[u])) {
                            case "undefined":
                            case "unknown":
                            case "function":
                                break;
                            default:
                                if (r) a.push(",");
                                r = 1, a.push(c(u) + ":" + c(s))
                        }
                        return a.push("}"), a.join("")
                    }
            }
        }

        var exports = {};
        exports.parse = function (e) {
            if (window.JSON && JSON.parse) return JSON.parse(e); else return new Function("return (" + e + ")")()
        }, exports.stringify = function (e) {
            if (window.JSON && JSON.stringify) return JSON.stringify(e); else return o(e)
        };
        var r = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" };
        return exports
    }), define("im-lib/net", [], function () {
        function e() {
            if (window.ActiveXObject) try {
                return new ActiveXObject("Msxml2.XMLHTTP")
            } catch (e) {
                try {
                    return new ActiveXObject("Microsoft.XMLHTTP")
                } catch (e) {
                }
            }
            if (window.XMLHttpRequest) return new XMLHttpRequest
        }

        var exports = {};
        return exports.imgRequest = function (e) {
            document.createElement("img").src = e
        }, exports.jsonp = function (e, t) {
            function n() {
                return (new Date).getTime()
            }

            function i() {
                return Math.random().toString().substr(2)
            }

            function o(e) {
                if (e) {
                    var t = e.parentNode;
                    if (t && 11 !== t.nodeType) t.removeChild(e)
                }
            }

            function r(e) {
                var t = "";
                if ("string" == typeof e) t = e; else if ("object" == typeof e) for (var i in e) if (e.hasOwnProperty(i)) t += "&" + i + "=" + encodeURIComponent(e[i]);
                return t += "&_time=" + n(), t = t.substr(1)
            }

            function s(e, s, a, c) {
                var u, d = (s.op, s.l);
                s = null, e = e + (-1 === e.indexOf("?") ? "?" : "&") + r(s);
                var l = /callback=(\w+)/.exec(e);
                if (l && l[1]) u = l[1]; else u = "jsonp_bridge_" + n() + "_" + i(), e = e.replace("?", "?" + t.key + "=" + u + "&");
                var f = document.createElement("script");
                f.type = "text/javascript", f.src = e, f.id = "id_" + u, f.charset = "utf-8";
                var m = !0, p = null;
                if (window[u] = function (e) {
                    clearTimeout(p), window[u] = void 0;
                    var t = document.getElementById("id_" + u);
                    setTimeout(function () {
                        o(t)
                    }, 0), a(e), m = !1
                }, "onerror" in f) f.onerror = function () {
                    c && c(), o(f)
                }, m = !1;
                var g = 1e4;
                if (1 === d) g += 2e4;
                p = setTimeout(function () {
                    if (m) c && c(), o(f)
                }, g);
                var h = document.getElementsByTagName("head")[0];
                if (h) setTimeout(function () {
                    h.appendChild(f)
                }, 0)
            }

            s(e, t, t.success, t.failure)
        }, exports.request = function (t, n) {
            var i = e(), o = 3e4, r = setTimeout(function () {
                i.onreadystatechange = null, i.abort(), n.failure && n.failure()
            }, o);
            return i.open(n.method || "GET", t), i.onreadystatechange = function () {
                if (4 === i.readyState) if (clearTimeout(r), i.status >= 200 && i.status < 300 || 304 === i.status) {
                    if (n.success) n.success(i.responseText)
                } else if (n.failure) n.failure()
            }, i.send(n.data), i
        }, exports.upload = function (e, t, n, i, o) {
            function r() {
                i(), l.onload = function () {
                }, l.parentNode.removeChild(l)
            }

            function s() {
                o(), l.onerror = function () {
                }, l.parentNode.removeChild(l)
            }

            if ("/" === e.charAt(0) && !/^\/\//.test(e)) e = location.protocol + "//" + location.host + e;
            if ("[object String]" === Object.prototype.toString.call(t) && window.clouda) {
                var a = t;
                clouda.device.fs.post(a, e, {
                    onsuccess: function (e) {
                        if (i) i(e)
                    }, onfail: function () {
                        if (o) o()
                    }, uploadKey: n, param: {}
                })
            } else if (t.nodeName) {
                var c = "upload_iframe" + parseInt(1e4 * Math.random(), 10),
                    u = '<iframe id="' + c + '" name="' + c + '" width="0" height="0" border="0" style="width: 0; height: 0; border: none;">',
                    d = document.createElement("div");
                d.innerHTML = u;
                var l = d.getElementsByTagName("iframe")[0];
                if (document.body.appendChild(l), t.setAttribute("target", c), t.setAttribute("action", e), t.setAttribute("method", "post"), t.setAttribute("enctype", "multipart/form-data"), t.setAttribute("encoding", "multipart/form-data"), l.attachEvent) l.attachEvent("onload", r), l.attachEvent("onerror", s); else l.onload = r, l.onerror = s;
                t.submit()
            } else if (window.FormData) {
                var f = new FormData;
                f.append(n, t), exports.request(e, { success: i, failure: o, data: f, method: "post" })
            }
        }, exports.initWs = function (e, t, n) {
            e.init(t, n)
        }, exports.ws = function (e, t, n, i) {
            e.sendMsg(t, n, i)
        }, exports
    }), define("im-lib/util", [], function () {
        var exports = {}, e = "0123456789ABCDEF";
        return exports.uuid = function () {
            for (var t = [], n = 0; n < 32; n++) t[n] = e.substr(Math.floor(16 * Math.random()), 1);
            t[12] = "4", t[16] = e.substr(3 & t[16] | 8, 1);
            var i = t.join("").toLowerCase();
            return i = i.toLowerCase(), i = i.replace(/^(\w{8})(\w{4})(\w{4})(\w{4})(\w{12})$/, "$1-$2-$3-$4-$5")
        }, exports.decodeHTML = function (e) {
            return e = e || "", e.replace("&lt;", "<").replace("&gt;", ">").replace("&amp;", "&").replace("&quot;", '"').replace("&nbsp;", " ")
        }, exports.encodeHTML = function (e) {
            return e = e || "", e.replace(/</g, "&lt").replace(/>/g, "&gt").replace(/&/g, "&amp").replace(/"/g, "&quot").replace(/ /g, "&nbsp")
        }, exports.getText = function (e) {
            var t = "";
            if (3 === e.nodeType || 4 === e.nodeType) t += exports.decodeHTML(e.nodeValue); else if ("IMG" === e.tagName) if (e.getAttribute("data-face-id")) return "[" + e.getAttribute("data-face-text") + "]"; else return "[\u56fe\u7247]"; else if (8 !== e.nodeType) for (var n = 0; n < e.childNodes.length; n++) t += exports.getText(e.childNodes[n]);
            return t
        }, exports.isSupportWs = function () {
            return "function" == typeof window.WebSocket && "function" == typeof window.WebSocket.prototype.send
        }(), exports.padLeft = function (e, t, n) {
            n = n || "0";
            for (var i = e.toString().length; i < t;) e = n + e, i++;
            return e
        }, exports.msgid = function () {
            for (var e = [], t = 0; t < 5; t++) e[t] = Math.floor(10 * Math.random());
            return (new Date).getTime() + e.join("")
        }, exports.getCookie = function (e, t) {
            var n = e + "=", i = "";
            if (document.cookie.length > 0) {
                var o = document.cookie.indexOf(n);
                if (o > -1) {
                    o += n.length;
                    var r = document.cookie.indexOf(";", o);
                    if (-1 === r) r = document.cookie.length;
                    i = t ? unescape(document.cookie.substring(o, r)) : document.cookie.substring(o, r)
                }
            }
            return i
        }, exports
    }), define("im-lib/Emitter", [], function () {
        function e() {
        }

        var t = e.prototype;
        return t._getEvents = function () {
            if (!this._events) this._events = {};
            return this._events
        }, t._getMaxListeners = function () {
            if (isNaN(this.maxListeners)) this.maxListeners = 10;
            return this.maxListeners
        }, t.on = function (e, t) {
            var n = this._getEvents(), i = this._getMaxListeners();
            n[e] = n[e] || [];
            var o = n[e].length;
            if (o >= i && 0 !== i) throw new RangeError("Warning: possible Emitter memory leak detected. " + o + " listeners added.");
            return n[e].push(t), this
        }, t.once = function (e, t) {
            function n() {
                i.off(e, n), t.apply(this, arguments)
            }

            var i = this;
            return n.listener = t, this.on(e, n), this
        }, t.off = function (e, t) {
            var n = this._getEvents();
            if (0 === arguments.length) return this._events = {}, this;
            var i = n[e];
            if (!i) return this;
            if (1 === arguments.length) return delete n[e], this;
            for (var o, r = 0; r < i.length; r++) if ((o = i[r]) === t || o.listener === t) {
                i.splice(r, 1);
                break
            }
            return this
        }, t.emit = function (e) {
            var t = this._getEvents(), n = t[e], i = Array.prototype.slice.call(arguments, 1);
            if (n) {
                n = n.slice(0);
                for (var o = 0, r = n.length; o < r; o++) n[o].apply(this, i)
            }
            return this
        }, t.listeners = function (e) {
            return this._getEvents()[e] || []
        }, t.setMaxListeners = function (e) {
            return this.maxListeners = e, this
        }, e.mixin = function (t) {
            for (var n in e.prototype) t[n] = e.prototype[n];
            return t
        }, e
    }), define("im-lib/userData", [], function () {
        function e(e) {
            return e.replace(o, "___")
        }

        function t() {
        }

        function n() {
            if (!i) try {
                return i = document.createElement("input"), i.type = "hidden", i.addBehavior("#default#userData"), document.body.appendChild(i), !0
            } catch (e) {
                return i = { load: t, save: t, getAttribute: t, setAttribute: t, removeAttribute: t }, !1
            }
            return !0
        }

        var exports = {}, i = null, o = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g"),
            r = location.hostname + "_bridge_im";
        return exports.setItem = function (t, o) {
            if (n()) {
                t = e(t);
                var s = new Date;
                s.setDate(s.getDate() + 365), i.expires = s.toUTCString(), i.load(r), i.setAttribute(t, o), i.save(r)
            }
        }, exports.getItem = function (t) {
            if (!n()) return ""; else return t = e(t), i.load(r), i.getAttribute(t)
        }, exports.removeItem = function () {
            if (n()) key = e(key), i.load(r), i.removeAttribute(key), i.save(r)
        }, exports.clear = function () {
            var e = new Date;
            e.setDate(e.getDate() - 1), i.expires = e.toUTCString()
        }, exports
    }), define("im-lib/localStorage", ["require", "./userData"], function (require) {
        var e, exports = {};
        try {
            e = window.localStorage || require("./userData")
        } catch (t) {
            e = require("./userData")
        }
        return exports.setItem = function (t, n) {
            try {
                e.setItem(t, n)
            } catch (e) {
            }
        }, exports.getItem = function (t) {
            return e.getItem(t)
        }, exports.removeItem = function (t) {
            e.removeItem(t)
        }, exports.clear = function () {
            e.clear()
        }, exports
    }), define("im-lib/main", ["require", "./lang", "./json", "./net", "./util", "./Emitter", "./localStorage"], function (require) {
        return {
            lang: require("./lang"),
            json: require("./json"),
            net: require("./net"),
            util: require("./util"),
            Emitter: require("./Emitter"),
            localStorage: require("./localStorage")
        }
    }), define("im-lib", ["im-lib/main"], function (e) {
        return e
    }), define("im-core/main", ["require", "im-lib", "im-lib/Emitter", "bull", "./bullConfig"], function (require) {
        function e(module, e, t) {
            module.on(e, function () {
                var n = Array.prototype.slice.call(arguments);
                n.unshift(t || e), exports.emit.apply(exports, n)
            })
        }

        var t = require("im-lib"), n = require("im-lib/Emitter"), exports = {};
        n.mixin(exports);
        var i = !1;
        return exports.messageHandler = function (e, n) {
            var i = n.adata && t.json.parse(n.adata) || {},
                o = i.displayName || i.nickname || e.sinfo.nickname || n.from, r = 1e3 * n.time;
            exports.decode(n, function (e) {
                exports.emit("message", e, o, r, n.msgHandlerType || "")
            })
        }, exports.decode = function (e, t) {
        }, exports.init = function (e) {
            var t = require("bull"), n = require("./bullConfig");
            t.init(n), exports.initCore(e)
        }, exports.initCore = function (t, n, i, o, r) {
            i.extend(exports, o), exports.addPlugin(), i.extend(n, r || {}), n.anonym = n.bid ? 0 : 1, t.on("message", exports.messageHandler);
            var s = ["error", "reconnect", "connected", "disconnect", "offline", "csoffline", "invitefail", "queueing", "otherwebimalive", "fetchhistorysuccess", "fetchhistoryfail", "fetchhistoryfinish", "visitorblock", "autoendtalk", "currentIR", "showMsgRemind", "csonline", "transferError", "fininshIR", "updateNewCSR", "visitorTransfer", "unknownMsg"];
            i.each(s, function (n) {
                e(t, n)
            })
        }, exports.addPlugin = function () {
            for (var e = 0; e < arguments.length; e++) exports.plugin(arguments[e])
        }, exports.connect = function (e, t, n, o, r) {
            function s(s) {
                if (n.isBlocked()) return i = {
                    type: o,
                    options: r
                }, exports.emit("visitorblock", { blocktype: n.isBlocked() }), void exports.emit("blocked", { blocktype: n.isBlocked() });
                if (s.invited) s.status = 3;
                switch (s.status) {
                    case 0:
                    case 1:
                    case 2:
                        e.connect(o, r);
                        break;
                    case 3:
                        if (r.invited || s.invited) s.invited = 1, s.from = r.from, e.connect(o, s); else s.reason = "talk to other", e.disconnect(s, function (n) {
                            if (t.usingWs) e.wsPickSucc(n), e.wsPick()
                        }), e.setStopPick(!1), e.pick();
                        break;
                    case 4:
                        e.connect(o, r);
                        break;
                    default:
                        e.connect(o, r)
                }
            }

            if (exports.emit("startconnect"), n.isLogin()) s(t); else n.login(s, function () {
                exports.emit("error", { type: "init" })
            }, function (e) {
                exports.emit("visitorblock", { blocktype: e })
            })
        }, exports.checkcode = function (e, t) {
            e.checkcode(t, function () {
                if (i) exports.connect(i.type, i.options), i = !1
            })
        }, exports.confirm = function (e) {
            e.confirm(function () {
                if (i) exports.connect(i.type, i.options), i = !1
            })
        }, exports.auth = function (e, t, n) {
            if (e.isLogin()); else e.login(function () {
                exports.emit("connected")
            }, function () {
                exports.emit("error", { type: "init" })
            })
        }, exports.send = function (e, t, n, i) {
            function o(e, t) {
                if (t && t.extra && 0 == +t.extra.riskType && 1 == +t.extra.riskResult) exports.emit("checkUpHF", n, t.extra);
                exports.emit("sendfinish", n), exports.emit("sendsuccess", n)
            }

            function r() {
                exports.emit("sendfail", n)
            }

            if (exports.emit("trysendmsg"), !e.isConnected()) return exports.emit("sendfail", n), !1; else return exports.emit("sendMobileData", n), t.encode(n, function (t) {
                t.adata = i, e.send(t, o, r)
            }, r), !0
        }, exports.falseFeedback = function (e, t, n, i) {
            function o() {
                exports.emit("falseFeedbackSuccess", n, i)
            }

            function r() {
                exports.emit("falseFeedbackFail", n, i)
            }

            return e.falseFeedback(n, i, o, r), !0
        }, exports.preSend = function (e, t, n) {
            if (!e.isConnected()) return !1;
            e.preSend({ mtype: 0, content: n.text })
        }, exports.disconnect = function (e, t, n, i) {
            if (exports.emit("sessioncut"), !1 !== i) e.disconnect();
            if (!1 !== n) t.logout()
        }, exports.plugin = function (e, t) {
            if (t.encoder) e.addEncoder(t.encoder);
            if (t.decoder) e.addDecoder(t.decoder);
            if (t.emit) t.emit = function () {
                var e = Array.prototype.slice.call(arguments);
                exports.emit.apply(exports, e)
            }
        }, exports.get = function (e, t) {
            return e.get(t)
        }, exports.getConfig = function (e, t) {
            return e[t]
        }, exports.isConnected = function (e) {
            return e.isConnected()
        }, exports.sendOfflineMsg = function (e, t, n, i) {
            function o() {
                exports.emit("sendofflinemsgfinish", n), exports.emit("sendofflinemsgsuccess", n)
            }

            function r() {
                exports.emit("sendofflinemsgfail", n)
            }

            if (e.isConnected()) return exports.emit("sendofflinemsgfail", n), !1; else return t.encode(n, function (t) {
                t.adata = i, e.send(t, o, r)
            }, r), !0
        }, exports.fetchHistory = function (e, t) {
            e.fetchHistory(t)
        }, exports.isBlocked = function (e) {
            return e.isBlocked()
        }, exports
    }), define("im-core", ["im-core/main"], function (e) {
        return e
    }), define("im-core/plugin/fileTransfer", ["require", "../main"], function (require) {
        var e = 1, exports = {};
        exports.encoder = {};
        var t = exports.encoder;
        t.fileAccept = function (t, n) {
            n({
                mtype: e,
                content: { type: "file", data: { bcsName: t.bcsName, name: t.name, size: t.size, type: "accept" } }
            })
        }, t.fileVUpload = function (t, n) {
            n({
                mtype: e,
                content: {
                    type: "file",
                    msgInfo: t.msgInfo,
                    data: { status: t.status, bcsName: t.bcsName, name: t.name, size: t.size, type: "vUpload" }
                }
            })
        }, t.fileVDownLoad = function (t, n) {
            n({
                mtype: e,
                content: { type: "file", data: { status: t.status, bcsName: t.bcsName, name: t.name, type: "vDownLoad" } }
            })
        }, t.fileVCancelSend = function (t, n) {
            n({ mtype: e, content: { type: "file", data: { bcsName: t.bcsName, name: t.name, type: "vCancelSend" } } })
        }, exports.decoder = {};
        var n = require("../main");
        return exports.decoder.fileTransfer = function (e, t) {
            e = e || {};
            var i = e.content || {}, o = i.data || {}, r = i.msgInfo || {}, s = { bcsName: o.bcsName, name: o.name },
                a = "";
            switch (o.type) {
                case "accept":
                    a = "fileAccept", s.status = o.status;
                    break;
                case "sDownLoad":
                    a = "fileSDownLoad", s.status = o.status;
                    break;
                case "sUpLoad":
                    a = "fileSUpload", s.size = o.size;
                    break;
                case "vCancelSend":
                    a = "vCancelSend";
                    break;
                case "vDownLoad":
                    a = "vDownLoad", s.status = o.status;
                    break;
                case "vUpload":
                    a = "vUpload"
            }
            n.emit(a, s, r, e.msgHandlerType || "")
        }, exports
    }), define("qiao-im-msdk/plugin/fileTransfer", ["im-core/plugin/fileTransfer"], function (e) {
        return e
    }), define("im-core/const", [], function () {
        var exports = {};
        return exports.PLATFORM_PC = 0, exports.PLATFORM_MOBILE = 1, exports.SERVER_TIEXIN = 1, exports.SERVER_DUZHAN = 2, exports.SERVER_QIAO = 3, exports.AUTH_TYPE_LOCAL = 0, exports.AUTH_TYPE_QIAO = 4, exports.AUTH_TYPE_DUZHAN = 5, exports.CHAT_TYPE_USER = 0, exports.CHAT_TYPE_GROUP = 1, exports.CHAT_TYPE_IR = 4, exports.PUSH_TYPE_BYE = 2, exports.PUSH_TYPE_CHAT = 3, exports.PUSH_TYPE_OFFLINE = 4, exports.PUSH_TYPE_FETCH_HISTORY = 5, exports.PUSH_TYPE_PRE_SEND = 6, exports.PUSH_TYPE_FETCH_SESSION_MESSAGE = 7, exports.PUSH_TYPE_MSG_SYNC = 9, exports.CHART_START_TYPE = "vsturl:u", exports.BLOCK_TYPE = {
            IP_BLOCK: 1,
            BID_BLOCK: 2,
            CONFIRM_BLOCK: 3,
            CODE_BLOCK: 4,
            DIRECT_BLOCK: 5
        }, exports
    }), define("qiao-im-msdk/const", ["im-core/const"], function (e) {
        return e
    }), define("im-core/config", ["require", "./const"], function (require) {
        var e = require("./const");
        return {
            bid: "",
            siteid: "",
            eid: "",
            likeCrm: "1",
            filterAdvertisement: "1",
            csrfToken: "",
            crossDomain: !1,
            platform: e.PLATFORM_PC,
            server: e.SERVER_QIAO,
            authType: e.AUTH_TYPE_QIAO,
            authToken: "bridge",
            urlRoot: "/",
            sid: "-100",
            tid: "-1",
            fromType: 1,
            ttype: 1,
            reasons: ["vstreq:u", "vstsys:u", "vstwtr:u", "vsturl:u", "vstwtr:f", "vstreq:f", "vstsys:f", "vstsys:i"],
            isPageOnload: !0,
            isSessionConnected: !1,
            webSocket: !1,
            usingWs: !1,
            wsUrl: "/"
        }
    }), define("qiao-im-msdk/config", ["im-core/config"], function (e) {
        return e
    }), define("im-core/plugin/unknownMsg", ["require", "im-lib", "../config", "im-core"], function (require) {
        function e(e, t) {
            t({
                content: { content: { data: e.content, msgInfo: e.msgInfo || {}, type: e.msgType || "" }, type: s },
                mtype: r
            })
        }

        function t(e, t) {
            e = e || {};
            var s = e.content || {}, c = s.content;
            if (s.mtype === o || s.mtype === r) try {
                c = n.json.parse(s.content), c.msgInfo = c.msgInfo || {};
                var u = e.adata && n.json.parse(e.adata) || {};
                c.nickname = u.nickname || a
            } catch (e) {
                c = s.content
            }
            c.role = e.from === i.bid ? 0 : 1, require("im-core").emit("unknownMsg", c)
        }

        var exports = {}, n = require("im-lib"), i = require("../config"), o = 1, r = 4, s = "unable message",
            a = "\u5bf9\u65b9";
        return exports.encoder = {}, exports.encoder[s] = e, exports.decoder = {}, exports.decoder["unable message"] = t, exports
    }), define("qiao-im-msdk/plugin/unknownMsg", ["im-core/plugin/unknownMsg"], function (e) {
        return e
    }), define("base/pc/lib", ["require"], function (require) {
        function e(e, t) {
            var n = "", i = e < 0, o = Math.abs(e) + "";
            if (o.length < t) n = new Array(t - o.length + 1).join("0");
            return (i ? "-" : "") + n + o
        }

        var exports = {}, t = /\{\s*\[(?:native code|function)\]\s*\}/i;
        return exports.isType = function (e, t) {
            return {}.toString.call(e).indexOf("[object " + t) >= 0
        }, exports.isNative = function (e) {
            return !(!e || !t.test(e))
        }, exports.instanceOf = function (e, t) {
            return e && e.hasOwnProperty && e instanceof t
        }, exports.extend = function (e, t) {
            for (var n in t) if (t.hasOwnProperty(n) && "_belong" !== n) e[n] = t[n];
            return e
        }, exports.getBid = function () {
            var e, t = (+new Date).toString(), n = Math.floor(1e5 * Math.random()).toString(), i = 5 - n.length;
            if (i > 0) for (e = 0; e < i; e++) n += "0";
            return t + n
        }, exports.uuid = function () {
            for (var e = [], t = "0123456789abcdef", n = 0; n < 36; n++) e[n] = t.substr(Math.floor(16 * Math.random()), 1);
            return e[14] = "4", e[19] = t.substr(3 & e[19] | 8, 1), e[8] = e[13] = e[18] = e[23] = "-", e.join("")
        }, exports.parseTime = function (t, n) {
            function i(e, t) {
                n = n.replace(e, t)
            }

            if ("string" != typeof n) return t.toString();
            var o = t.getFullYear(), r = t.getMonth() + 1, s = t.getDate(), a = t.getHours(), c = t.getMinutes(),
                u = t.getSeconds();
            return i(/yyyy/g, e(o, 4)), i(/yy/g, e(parseInt(o.toString().slice(2), 10), 2)), i(/MM/g, e(r, 2)), i(/M/g, r), i(/dd/g, e(s, 2)), i(/d/g, s), i(/HH/g, e(a, 2)), i(/H/g, a), i(/hh/g, e(a % 12, 2)), i(/h/g, a % 12), i(/mm/g, e(c, 2)), i(/m/g, c), i(/ss/g, e(u, 2)), i(/s/g, u), n
        }, exports.trim = function (e) {
            var t = new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
            return String(e).replace(t, "")
        }, exports.transferDate = function (e) {
            if (e = +e, isNaN(e)) return e;
            var t = +new Date(e), n = ["\u4eca\u5929", "\u6628\u5929"], i = 864e5, o = new Date,
                r = parseInt((+o - 6e4 * o.getTimezoneOffset()) / i, 10),
                s = r - parseInt((t - 6e4 * o.getTimezoneOffset()) / i, 10);
            if ((s = Math.abs(s)) < n.length) return n[s]; else return exports.parseTime(new Date(e), "yyyy-MM-dd")
        }, exports
    }), define("embed/log/main", ["require", "../../base/pc/lib"], function (require) {
        function e(e) {
            return !a[e] && (a[e] = "uuid_" + r.uuid()), a[e]
        }

        function t() {
            return !a.tabid && (a.tabid = "tabid_" + (new Date).getTime()), a.tabid
        }

        function n(e) {
            return (new Date).getTime() - s[e]
        }

        function i(e, t) {
            s[e] = t || +new Date
        }

        function o(e) {
            var t = 1, n = e.match(/(iPad).*OS\s([\d_]+)/), i = !n && e.match(/(iPhone\sOS)\s([\d_]+)/),
                o = e.match(/(Android);?[\s\/]+([\d.]+)?/);
            if (n || i) t = 3; else if (o) t = 2;
            return t
        }

        var r = require("../../base/pc/lib"), exports = {}, s = {},
            a = { pushTotalMsg: 0, pushFailMsg: 0, pickMsg: 0, pushMsg: 0, ifLoopStart: !1 }, c = {};
        exports.componentIsShow = { icon: 0, toolbar: 0 }, exports.smartInvite = {
            expGroup: "",
            text: "",
            isUse: 0,
            ideaType: -1,
            query: -1,
            startObj: {}
        }, exports.smartCommunication = {
            isAutoDirectCom: -1,
            getIntelWelLan: -1,
            showIntelWelLan: -1
        }, exports.isInviteOrCom = -1;
        var u = 1, d = 0, l = 0, f = 0, m = 0, p = ["m2005", "m2021"];
        return exports.init = function (e, t, n) {
            var i = e.getServer(), r = i.siteObj;
            s.eid = r.eid, s.siteid = r.siteId, s.platform = r.platform, n.bid = t.init(r.siteId, r.bid || n.bid, r.session), s.bid = n.bid, s.logRoot = e.staticDomain, s.startTime = i.startTime, exports.smartInvite.likeCrm = i.configBox.inviteBox.likeCrm, exports.smartInvite.inviteBox = i.configBox.inviteBox;
            var a = i.configBox;
            if (0 == +a.inviteBox.likeCrm && 1 == +o(navigator.userAgent)) if (0 == +a.isWebim && 1 == +a.webimConfig.isOpenAutoDirectCom && 1 != +a.seekIcon.iconType && 1 == +i.siteObj.isCsOnline) exports.isInviteOrCom = 2; else if (1 == +a.inviteBox.autoInvite || 1 == +a.inviteBox.smartBoxEnable && 0 != +a.inviteBox.smartBoxOpen) exports.isInviteOrCom = 1
        }, exports.addLightMsg = function (e) {
            if ("sub" == (e.role ? "sub" : "custom")) a.pickMsg++; else a.pushMsg++, a.pushTotalMsg++
        }, exports.sendFailMsg = function () {
            a.pushFailMsg++
        }, exports.logQueue = function () {
            exports.sendLog(t(), {
                uuid: e("openUUID"),
                cncttype: "queue",
                brgeyemid: "m2007",
                winType: "webimLight",
                cost: c.render + n("m2013"),
                queueCost: n("m2013")
            })
        }, exports.logConnect = function () {
            if (exports.sendLog(t(), {
                uuid: e("openUUID"),
                cncttype: "connected",
                brgeyemid: "m2007",
                winType: "webimLight",
                cost: c.render + n("m2013"),
                transferCost: n("m2013")
            }), !a.ifLoopStart) exports.logPickMsg(), exports.logPushMsg(), a.ifLoopStart = !0
        }, exports.logTransferFail = function () {
            exports.sendLog(t(), {
                uuid: e("openUUID"),
                cncttype: "failed",
                brgeyemid: "m2007",
                winType: "webimLight",
                cost: c.render + n("m2013"),
                transferCost: n("m2013")
            })
        }, exports.logOpenWebim = function () {
            exports.sendLog(t(), { cncttype: "openWebim", uuid: e("openUUID"), brgeyemid: "m2006" })
        }, exports.logClickSeek = function (e, n, i, o) {
            var r = { brgeyemid: "m2005", url: document.URL, referrer: document.referrer, bclid: n.get("BCLID") };
            if (exports.smartInvite.isPcSmart && "accept" === i && o) if (+exports.smartInvite.smartButtonType) {
                for (var s = !1, a = o.target.className.split(" "), c = 0; c < a.length; c++) if ("nb-invite-ok-show" === a[c]) s = !0;
                if (s) f += 1, r.smartNthClickBtnInvite = f
            } else m += 1, r.smartNthClickBgInvite = m;
            i && (r.type = i), exports.sendLog(t(), r)
        }, exports.logPickMsg = function () {
            var e = function () {
                var e = a.pickMsg;
                if (a.pickMsg = 0, e > 0) exports.sendLog(t(), { num: e, brgeyemid: "m2004" });
                setTimeout(arguments.callee, 5e3)
            };
            setTimeout(e, 5e3)
        }, exports.logPushMsg = function () {
            var e = function () {
                var e = a.pushMsg;
                if (a.pushMsg = 0, e > 0) exports.sendLog(t(), {
                    num: e,
                    brgeyemid: "m2003",
                    isAutoDirectCom: exports.smartCommunication.isAutoDirectCom
                });
                setTimeout(arguments.callee, 5e3)
            };
            setTimeout(e, 5e3)
        }, exports.logEndNb = function () {
            exports.sendLog(t(), { uuid: e("nbUUID"), brgeyemid: "m2002" })
        }, exports.logStartNb = function () {
            exports.sendLog(t(), { uuid: e("nbUUID"), brgeyemid: "m2001" })
        }, exports.logRenderStart = function () {
            i("m2008", s.startTime), exports.sendLog(t(), { uuid: e("renderUUID"), brgeyemid: "m2008" })
        }, exports.logRenderEnd = function () {
            c.render = n("m2008"), exports.sendLog(t(), {
                cncttype: "renderFinish",
                uuid: e("renderUUID"),
                brgeyemid: "m2009",
                cost: c.render,
                icon: exports.componentIsShow.icon,
                toolbar: exports.componentIsShow.toolbar
            })
        }, exports.logEnterStart = function () {
            i("m2010"), exports.sendLog(t(), {
                cncttype: "startSite",
                uuid: e("enterUUID"),
                brgeyemid: "m2010",
                isInviteOrCom: exports.isInviteOrCom
            })
        }, exports.logEnterEnd = function () {
            exports.sendLog(t(), {
                cncttype: "finishSite",
                uuid: e("enterUUID"),
                brgeyemid: "m2011",
                cost: n("m2008"),
                siteCost: n("m2010")
            })
        }, exports.logStartTransfer = function () {
            i("m2013")
        }, exports.leaveSite = function () {
            exports.sendLog(t(), {
                uuid: e("enterUUID"),
                brgeyemid: "m2012",
                totalMsgCount: a.pushTotalMsg,
                failMsgCount: a.pushFailMsg
            }), exports.sendLog(t(), {
                uuid: e("msgFailRate"),
                brgeyemid: "m2014",
                totalMsgCount: a.pushTotalMsg,
                failMsgCount: a.pushFailMsg
            })
        }, exports.logForceTalk = function () {
            exports.sendLog(t(), { cncttype: "forceTalk", uuid: e("openUUID"), brgeyemid: "m2015" })
        }, exports.logClickUnread = function () {
            exports.sendLog(t(), { cncttype: "clickUnread", uuid: e("openUUID"), brgeyemid: "m2015" })
        }, exports.logClickMsgLite = function () {
            exports.sendLog(t(), { cncttype: "clickMsgLite", uuid: e("openUUID"), brgeyemid: "m2015" })
        }, exports.logClickOnlineConsult = function () {
            exports.sendLog(t(), { cncttype: "clickOnlineConsult", uuid: e("openUUID"), brgeyemid: "m2016" })
        }, exports.logClickDial = function () {
            exports.sendLog(t(), { cncttype: "clickDial", uuid: e("openUUID"), brgeyemid: "m2016" })
        }, exports.logClickGetConnect = function () {
            exports.sendLog(t(), { cncttype: "clickGetConnect", uuid: e("openUUID"), brgeyemid: "m2016" })
        }, exports.logMessageAutoShow = function (n) {
            exports.sendLog(t(), {
                cncttype: "messageAutoShow",
                uuid: e("openUUID"),
                brgeyemid: "m2017",
                url: document.URL,
                referrer: document.referrer,
                bclid: n.get("BCLID")
            })
        }, exports.logMessageClickShow = function (n) {
            exports.sendLog(t(), {
                cncttype: "messageClickShow",
                uuid: e("openUUID"),
                brgeyemid: "m2017",
                url: document.URL,
                referrer: document.referrer,
                bclid: n.get("BCLID")
            })
        }, exports.logInviteShow = function (n, i) {
            if (1 === u) {
                if (0 !== exports.smartInvite.likeCrm) u = 0;
                d += 1;
                var o = {
                    cncttype: "inviteShow",
                    uuid: e("openUUID"),
                    brgeyemid: "m2018",
                    isSmart: n,
                    text: exports.smartInvite.text,
                    from: i,
                    nthShowInvite: d
                };
                exports.sendLog(t(), o)
            }
        }, exports.logMsgBubbleShow = function () {
            exports.sendLog(t(), { cncttype: "msgBubbleShow", uuid: e("openUUID"), brgeyemid: "m2019" })
        }, exports.logClickIcon = function () {
            exports.sendLog(t(), { cncttype: "clickIcon", uuid: e("openUUID"), brgeyemid: "m2020" })
        }, exports.logClickInvite = function (n) {
            l += 1;
            var i = {
                cncttype: "clickInvite",
                uuid: e("openUUID"),
                brgeyemid: "m2021",
                from: n,
                text: exports.smartInvite.text
            };
            exports.sendLog(t(), i)
        }, exports.logClickMsgBubble = function () {
            exports.sendLog(t(), { cncttype: "clickMsgBubble", uuid: e("openUUID"), brgeyemid: "m2023" })
        }, exports.logClickSmartLogo = function () {
            exports.sendLog(t(), { cncttype: "clickSmartLogo", uuid: e("openUUID"), brgeyemid: "m4001" })
        }, exports.logCloseSmartInvite = function () {
            exports.sendLog(t(), { cncttype: "closeSmartInvite", uuid: e("openUUID"), brgeyemid: "m4002" })
        }, exports.logStopSmartInvite = function (n) {
            exports.sendLog(t(), {
                cncttype: "stopSmartInvite",
                uuid: e("openUUID"),
                brgeyemid: "m4003",
                stopSmartInviteType: n
            })
        }, exports.logAutoDirectCom = function () {
            exports.smartCommunication.isAutoDirectCom = 1, exports.sendLog(t(), {
                cncttype: "autoDirectCom",
                uuid: e("openUUID"),
                brgeyemid: "m4004",
                getIntelWelLan: exports.smartCommunication.getIntelWelLan
            })
        }, exports.logShowIntelWelLan = function () {
            exports.smartCommunication.showIntelWelLan = 1, exports.sendLog(t(), {
                cncttype: "showIntelWelLan",
                uuid: e("openUUID"),
                brgeyemid: "m4005",
                isAutoDirectCom: exports.smartCommunication.isAutoDirectCom
            })
        }, exports.logStopACOrIW = function (n, i) {
            exports.sendLog(t(), {
                cncttype: "stopACOrIW",
                uuid: e("openUUID"),
                brgeyemid: "m4006",
                isInviteOrCom: exports.isInviteOrCom,
                getIntelWelLan: exports.smartCommunication.getIntelWelLan,
                stopAutoCom: n || -1,
                stopIntelWel: i || -1
            })
        }, exports.sendLog = function (e, t, n, i, r) {
            var a = r || {};
            if (a.t = (new Date).getTime(), a.ip = "", a.dtype = o(navigator.userAgent), a.ucid = n.eid || s.eid, a.uid = t.get("to") || n.tid || "", a.siteid = n.siteid || s.siteid, a.tabid = i, a.bid = n.bid || s.bid, a.sessionid = t.get("sid") || n.sid || "", a.originType = 0, exports.smartInvite.expGroup) a.siExpGroup = exports.smartInvite.expGroup, a.welcome = exports.smartInvite.text;
            a.likeCrm = exports.smartInvite.likeCrm, a.ideaType = exports.smartInvite.ideaType, a.query = exports.smartInvite.query;
            for (var c in exports.smartInvite.startObj) if (exports.smartInvite.startObj.hasOwnProperty(c)) if ("type" !== c && "query" !== c) a[c] = exports.smartInvite.startObj[c];
            if (r && r.brgeyemid && -1 !== p.indexOf(r.brgeyemid)) a.from = n.fromType;
            e.send(s.logRoot, a)
        }, exports
    }), define("im-core/net", ["require", "im-lib"], function (require) {
        function e() {
        }

        var exports = {};
        require("im-lib").Emitter.mixin(exports);
        var t = { INITIAL: 0, INITIALIZED: 1, DISABLED: 2 }, n = t.INITIAL;
        return exports.canUseWs = function (e, i, o, r, s, a, c) {
            return e.isSupportWs && i.webSocket && n !== t.DISABLED
        }, exports.successFactory = function (e, t, n, i, o, r) {
            var s = e;
            return function (e) {
                try {
                    if (-1 !== Object.prototype.toString.call(e).indexOf("String")) e = t.parse(e)
                } catch (e) {
                    return void i()
                }
                if (s.set("sn", e.n_sn), !e.status || 2 === e.status) exports.emit("response", o || e.method, e.body || e), n(e.body || e, e); else {
                    if (void 0 === r) r = !0;
                    if (r) exports.emit("auth invalid");
                    i(e)
                }
            }
        }, exports.wsCommands = function (e, i, o, r) {
            return {
                getComCallback: function (e) {
                    return {
                        "site/poll": {
                            success: exports.successFactory(o.pickSuccess, o.pickFailure),
                            failure: o.pickFailure
                        },
                        "chat/poll": {
                            success: exports.successFactory(r.wsPickSucc, r.wsPickFail),
                            failure: r.wsPickFail
                        }
                    }
                }, changeStatus: function (i) {
                    n = i.status, e.usingWs = n === t.INITIALIZED
                }, getBaseBody: function (t) {
                    return { auth: i.get(), e: e.eid, s: e.siteid, v: e.bid }
                }, setAuth: function (t) {
                    i.set("key", t.key), e.bid = t.bid
                }, request: function (e) {
                    exports.request(e.path, e.options, "downgrade")
                }
            }
        }, exports.getJsonp = function (e) {
            function t(e) {
                var t = e.jsonp, i = document.getElementsByTagName("head")[0];
                e.data.callback = t;
                var o = n(e.data), r = document.createElement("script");
                if (i.appendChild(r), window[t] = function (n) {
                    i.removeChild(r), clearTimeout(r.timer), window[t] = null, e.success && e.success(n)
                }, r.src = e.url + "?" + o, e.time) r.timer = setTimeout(function () {
                    window[t] = null, i.removeChild(r), e.error && e.error({ message: "\u8d85\u65f6" })
                }, time)
            }

            function n(e) {
                var t = [];
                for (var n in e) t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
                return t.push("v=" + i()), t.join("&")
            }

            function i() {
                return Math.floor(1e4 * Math.random() + 500)
            }

            e = e || {}, e.data = e.data || {}, t(e)
        }, exports.wsCallBack = function (e) {
            return exports.wsCommands()[e.type](e.data)
        }, exports.jsonToQuery = function (e, t, n) {
            var i = [];
            return t.each(n, function (n, o) {
                if (t.isObject(o)) o = e.stringify(o);
                if ("number" != typeof o) o = encodeURIComponent(o);
                i.push(n + "=" + o)
            }), i.join("&")
        }, exports.request = function (i, o, r, s, a, c, u) {
            var d = i.urlRoot + a;
            if (c.fullPath && !0 === c.fullPath) d = a;
            c = c || {}, c.data.sign = o.get("sign") || "";
            var l = c.failure || e, f = c.success || e;
            if ("downgrade" === u) c.success = c.success; else if (!1 === c.isneedlogout) c.success = exports.successFactory(f, l, a, !1); else c.success = exports.successFactory(f, l, a);
            var m = c.data || {};
            if (exports.emit("request", a, m), m.v = i.bid, m.s = i.siteid, m.e = i.eid, m.isAFF = 0 == +i.likeCrm ? "1" : "0", m.filterAdvertisement = "" + i.filterAdvertisement, m.dev = i.platform, m.auth = o.get(), "chat/st" === a && o.get("code_token")) m.code_token = o.get("code_token");
            if ("site/st" === a) m.siteToken = i.siteToken || "";
            if (c.data = null, exports.canUseWs(m, a, f, l, u)) {
                if (n === t.INITIAL) r.initWs(i.wsUrl + "?v=" + m.v, exports.wsCallBack);
                r.ws(a, m, c)
            } else if (i.crossDomain || c.crossDomain) {
                if (d += d.indexOf("?") >= 0 ? "&" : "?", d += exports.jsonToQuery(m), c.type = m.type, c.key = "cb", c.op = m.op, c.l = m.l, 2 === m.type && "chat/push" === a && !f && !l || 3 === m.op && "site/auth" === a && !f && !l || 1 === m.op && "site/st" === a && !f && !l) {
                    var p = document.createElement("img");
                    return void (p.src = d)
                }
                if ("imgCross" === u) r.imgRequest(d); else r.jsonp(d, c)
            } else {
                if (c.method = c.method || "POST", "POST" === c.method) c.data = s.stringify(m), d = d + "?v=" + m.v; else d += d.indexOf("?") >= 0 ? "&" : "?", d += exports.jsonToQuery(m), d += "&v=" + m.v;
                if (c.setCookie) d = d + "&s=" + m.s, d = d + "&t=" + c.setCookie;
                r.request(d, c)
            }
        }, exports.auth = function (e, t, n, i, o) {
            var r;
            if (0 === e.visitType) r = t ? 0 : 1; else r = t ? 2 : 3;
            var s, a = { success: i, failure: o, data: { op: r, dev: e.platform, ser: e.server, s_info: n } };
            if (!t) a.method = "GET", s = "imgCross";
            exports.request("site/auth", a, s)
        }, exports.poll = function (e, t, n) {
            var i = { success: t, failure: n, data: { l: e ? 1 : 0 } };
            exports.request("site/poll", i)
        }, exports.site = function (e, t, n, i) {
            var o, r = { success: n, failure: i, data: { op: e ? 0 : 1, s_info: t, url: location.href } };
            if (!e) r.method = "GET", o = "imgCross";
            exports.request("site/st", r, o)
        }, exports.chat = function (e, t, n) {
            var i = { success: t, failure: n, data: e };
            exports.request("chat/st", i)
        }, exports.pick = function (e, t, n, i) {
            var o = { success: n, failure: i, data: { l: 1, sid: t || "" } };
            if (e.isPageOnload || !e.isSessionConnected) exports.request("chat/poll", o); else o.data.l = 0, setTimeout(function () {
                exports.request("chat/poll", o)
            }, 3e3)
        }, exports.push = function (e, t, n) {
            var i = { success: t, failure: n, data: e || {} };
            if (2 === e.type) i.method = "GET";
            exports.request("chat/push", i)
        }, exports.falseFeedback = function (e, t, n) {
            var i = { success: t, failure: n, data: e || {} };
            exports.request("nbcps-web/suggest/addContentSuggest.action", i)
        }, exports.node = function (e, t, n) {
            var i = { success: t, failure: n, data: e || {} };
            exports.request("bookmanage/saveBook.action", i)
        }, exports.validate = function (e, t, n) {
            var i = { method: "GET", success: t, failure: n, data: e || {}, isneedlogout: !1 };
            exports.request("protection/validate", i)
        }, exports.upload = function (e, t, n, i, o, r) {
            t.upload(e.urlRoot + n, i, "file", o, r)
        }, exports.getUploadUrl = function (e, t, n, i) {
            return i = i || t.uuid(), e.urlRoot + "wupload/" + i + "/" + n.get("sid")
        }, exports.getDownloadUrl = function (e, t, n, i, o) {
            return i = i || t.uuid(), o = o || i, e.urlRoot + "wdownload/" + i + "/" + n.get("sid") + "/" + i + "?response-content-disposition=attachment;filename=" + o
        }, exports.getDomain = function (e) {
            e = e || "";
            var t = /https?:\/\/([^\/]+)/i, n = e.match(t);
            return null != n && n.length > 1 ? n[1] : ""
        }, exports.getParam = function (e, t) {
            t = t || "";
            var n = t.substr(t.indexOf("?")), i = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
                o = n.substr(1).match(i);
            return o && o.length > 2 ? decodeURIComponent(o[2]) : ""
        }, exports.getXstFromLink = function (e) {
            var t = "";
            if (!e) return t;
            var n = exports.getDomain(e);
            if (!n || n.indexOf("baidu.com") < 0) return t;
            if (!(t = exports.getParam("xst", e))) {
                var i = exports.getParam("reqParam", e) || "";
                try {
                    i = JSON.parse(i)
                } catch (e) {
                    i = {}
                }
                if (i.xst) t = i.xst
            }
            return t
        }, exports.getXst = function () {
            var e = exports.getXstFromLink(location.href);
            if (!e && exports.getParam("referer", location.href)) e = exports.getXstFromLink(exports.getParam("referer", location.href));
            if (!e && document.referrer) e = exports.getXstFromLink(document.referrer);
            return e
        }, exports.log = function (e, t, n) {
            var i = t + "/eye/log/js/stat.gif?";
            i += exports.jsonToQuery(n), e.imgRequest(i)
        }, exports
    }), define("qiao-im-msdk/net", ["im-core/net"], function (e) {
        return e
    }), define("im-core/chat", ["require", "im-lib", "embed/log/main", "./config", "./net"], function (require) {
        function e(e) {
            if (!e && S.connected) exports.emit("disconnect");
            if (S.stopPick = !0, S.connected = !1, S.sid = "", S.options && 1 === S.options.invited) S.options.invited = 0
        }

        function t() {
            if (!S.connected) if (S.csonline) if (!S.csonline || S.online) S.connected = !0, exports.emit("connected", { sid: S.sid }), g.each(S.msgPool, function (e) {
                exports.emit("message", e)
            }), S.msgPool = []
        }

        function n(t, n) {
            var i = { type: t };
            if (n) i.data = n;
            exports.emit("error", i), e()
        }

        function i(e, t) {
            if (!e.pickType) S.sid = e.sid, S.to = e.uid, S.authType = e.authtype, S.csonline = !0, S.ttype = e.ttype;
            if (t) v.sinfo = e.sinfo && m.json.parse(e.sinfo) || {}
        }

        function o() {
            A = { ifIR: !1, count: 0, id: null }
        }

        function r(e) {
            var t = {}, n = e.length - 1;
            return g.each(e, function (i, o) {
                var r = i.content.bcsName;
                if ("img" === i.content.type && !t[r]) {
                    if (o >= n) return D.push(e[n]), e;
                    g.each(e, function (n, i) {
                        if ("string" == typeof n.content) {
                            var s = document.createElement("div");
                            s.innerHTML = n.content;
                            var a = s.getElementsByTagName("img")[0];
                            if (a && a.tagName && "IMG" === a.tagName.toUpperCase() && a.id === r) {
                                var c = e.splice(o, 1);
                                e.splice(i, 0, c[0]), t[r] = 1
                            }
                        }
                    })
                }
            }), e
        }

        function s(e) {
            var t;
            if (e && 1 === e.status && "auth invalid" === e.errinfo) n("offline"), t = !0;
            return t
        }

        function a(e) {
            if (B = 0, j) j = !1, exports.emit("reconnect");
            if (exports.isConnected()) {
                var t = S.options.siteid;
                if (t) m.localStorage.setItem("ACTIVE_" + t, +new Date)
            }
            g.each(e, function (e) {
                var t = e.msg.detail ? e.msg.detail.length : 0, n = function (e) {
                    var t = document.createElement("div");
                    t.innerHTML = e;
                    var n = t.getElementsByClassName("chat-area-service-translation-content"),
                        i = t.getElementsByClassName("chat-area-service-reply-box"),
                        o = t.getElementsByClassName("chat-area-service-reply-text");
                    if (n.length && i.length && o.length) return i[0].removeChild(o[0]), t.innerHTML; else return e
                };
                if (e.msg.content) {
                    if ("" === (e.msg.adata && JSON.parse(e.msg.adata)["__CONFIDENTIAL-REASON__"]) && 1 == +v.filterAdvertisement) v.filterAdvertisement = "0";
                    e.msg.content = n(e.msg.content)
                } else if (t > 0) for (var i = 0; i < t; i++) e.msg.detail[i].content = n(e.msg.detail[i].content);
                var o = e.type, r = exports.pickHandler[o];
                if (r) r(e.msg);
                c(e)
            })
        }

        function c(e) {
            function t() {
            }

            function n(t) {
                c(e)
            }

            function i(e, t) {
                var n = "", i = e < 0, o = Math.abs(e) + "";
                if (o.length < t) n = new Array(t - o.length + 1).join("0");
                return (i ? "-" : "") + n + o
            }

            function o(e) {
                if (e = +e, isNaN(e)) return e;
                var t = +new Date(e), n = ["\u4eca\u5929", "\u6628\u5929"], i = 864e5, o = new Date,
                    s = parseInt((+o - 6e4 * o.getTimezoneOffset()) / i, 10),
                    a = s - parseInt((t - 6e4 * o.getTimezoneOffset()) / i, 10);
                if ((a = Math.abs(a)) < n.length) return n[a]; else return r(new Date(e), "yyyy-MM-dd")
            }

            function r(e, t) {
                function n(e, n) {
                    t = t.replace(e, n)
                }

                if ("string" != typeof t) return e.toString();
                var o = e.getFullYear(), r = e.getMonth() + 1, s = e.getDate(), a = e.getHours(), c = e.getMinutes(),
                    u = e.getSeconds();
                return n(/yyyy/g, i(o, 4)), n(/yy/g, i(parseInt(o.toString().slice(2), 10), 2)), n(/MM/g, i(r, 2)), n(/M/g, r), n(/dd/g, i(s, 2)), n(/d/g, s), n(/HH/g, i(a, 2)), n(/H/g, a), n(/hh/g, i(a % 12, 2)), n(/h/g, a % 12), n(/mm/g, i(c, 2)), n(/m/g, c), n(/ss/g, i(u, 2)), n(/s/g, u), t
            }

            var s = { transferDate: o, parseTime: r };
            if (e) if (e.msg && +e.msg.msgid && +e.ack) {
                var a = { adata: void 0, content: "", mtype: 0, msgid: e.msg.msgid, ack: e.ack }, u = new Date,
                    d = s.transferDate(u) + " " + s.parseTime(u, "HH:mm:ss");
                a.name = "\u6211", a.timeStr = d, exports.send(a, t, n, 10)
            }
        }

        function u(e) {
            if (++B > q && !j) j = !0, exports.emit("offline")
        }

        function d(e) {
            a(e), f()
        }

        function l(e) {
            if (u(e), !s(e)) setTimeout(function () {
                f()
            }, 3e3)
        }

        function f() {
            if (!S.stopPick) setTimeout(function () {
                y.pick(S.sid, d, l)
            }, 0)
        }

        var m = require("im-lib"), p = m.Emitter, g = m.lang, h = require("embed/log/main"), b = 1,
            v = require("./config"), y = require("./net"), I = !0;
        window.newBlinkNewMsgRecord = [];
        var T, w = "",
            S = { connected: !1, stopPick: !1, csonline: !1, msgPool: [], presend: { sending: !1, content: "" } },
            E = { INVITE: 18, ACCEPT: 20, BYE: 28 }, x = { OVER: 4, TAKE_OVER: 3, TRANSFER: 6, RECEIVE: 2 }, C = "blocked",
            k = "auto", O = { SUCCESS: 0, FAILURE: 1 }, P = { QUEUEING: 2, TALKING: 4 }, N = 10,
            A = { ifIR: !1, count: 1, id: null }, L = { CSR: 0, GROUP: 1, IR: 4 },
            _ = { READY: 0, BUSY: 1, LEAVE: 2, UNLOGIN: 3 }, M = { TRANSFER: 0, CONVERSATION: 1 },
            R = { COUNT: 0, LIST: 1, MSG_SYNC: 0, END_TIME: 0, PAGE: 20, DEFAULT: 5, DELAY: 2e3 }, D = [], exports = {};
        p.mixin(exports), y.on("auth invalid", function () {
            S.stopPick = !0
        }), exports.pickHandler = {}, exports.pickHandler[100] = function (e) {
            if (e.op === E.ACCEPT) if (e.st === O.SUCCESS) R.END_TIME = e.systime || 0, S.sid = e.sid, S.to = e.uid, S.authType = e.authtype, S.csonline = !0, S.online = !0, v.sinfo = e.sinfo && m.json.parse(e.sinfo) || {}, exports.fetchOfflineMsg(), R.MSG_SYNC = e.systime || 0; else exports.bye();
            if (e.op === E.BYE) if (e.st === O.SUCCESS) {
                var t = S.options || {};
                if ("talk to other" === e.reason) S.stopPick = !1, t.invited = 0, t.tid = v.tid, t.ttype = 1, t.sid = "", t.from = 5, exports.connect(t.ttype, t, !1)
            } else exports.emit("invitefail");
            if (e.op === E.INVITE) {
                if (R.END_TIME = e.systime || 0, "queue" === e.reason) return void (I = !1);
                if (e.ttype === L.IR) A.ifIR = !0, A.id = e.uid, exports.emit("currentIR");
                if ("re_invite" === e.reason && v.status === P.QUEUEING) return exports.emit("queueing"), void (I = !1);
                if ("re_invite" === e.reason) {
                    if (v.sinfo = e.sinfo && m.json.parse(e.sinfo) || {}, S.sid = e.sid, S.to = e.uid, S.authType = e.authtype, S.tid = v.tid || "", S.ttype = e.ttype, S.csonline = !0, S.online = !0, v.syncSessionHistory) exports.fetchSessionMessage();
                    return void exports.fetchOfflineMsg()
                }
                if (e.st === O.SUCCESS) S.sid = e.sid, S.to = e.uid, S.authType = e.authtype, S.csonline = !0, S.ttype = e.ttype, v.sinfo = e.sinfo && m.json.parse(e.sinfo) || {}; else {
                    var n = m.json.parse(e.adata || "{}");
                    return S.to = n.uid || "-1", S.authType = e.authtype, S.csonline = !1, exports.emit("csoffline"), void exports.fetchOfflineMsg()
                }
                exports.fetchOfflineMsg()
            }
        }, exports.pickHandler[101] = function (t) {
            if (t.msgHandlerType = t.msgHandlerType || "", t.opr === x.OVER) if (t.reason && -1 !== t.reason.indexOf(C)) exports.emit("visitorblock", t), e(); else if (t.reason && -1 !== t.reason.indexOf(k)) exports.emit("autoendtalk", t), e(); else n("forceover"); else if (t.opr === x.TAKE_OVER) if (i(t, !0), A.ifIR) o(), exports.emit("fininshIR", { type: "invite" }); else exports.emit("updateNewCSR", v.sinfo); else if (t.opr === x.TRANSFER) if (i(t, !0), A.ifIR) o(), exports.emit("fininshIR", { type: "online" }); else exports.emit("updateNewCSR", v.sinfo); else if (t.opr === x.RECEIVE) {
                var r = t.detail || {};
                if (r.join_action === M.TRANSFER) {
                    var s = !1, a = t.adata && m.json.parse(t.adata) || {}, c = a.transfer || {},
                        u = t.sinfo && m.json.parse(t.sinfo) || {};
                    if (c.status) s = !0, exports.emit("visitorTransfer", { nickname: u.nickname || "" }, t.msgHandlerType);
                    i(t, s)
                }
            }
        }, exports.pickHandler[103] = function (e) {
            if (S.connected) {
                for (var t = window.newBlinkNewMsgRecord, n = 0; n < t.length; n++) if (t[n] == e.msgid) return;
                if (t.push(e.msgid), exports.emit("message", e), A.ifIR && e.from === A.id && A.count) if (++A.count >= 5) exports.emit("showMsgRemind", A.count), A.count = 0
            } else S.msgPool.push(e)
        }, exports.pickHandler[104] = function (e) {
            if (v.status = e.status, e.status === P.QUEUEING) {
                if (1 == +b && 2 == +h.isInviteOrCom) b = 2, h.logStopACOrIW(-1, 3);
                S.sid = e.sid, S.queueing = !0, exports.emit("queueing")
            }
            if (e.status === P.TALKING) if (S.queueing = !1, S.sid = e.sid, S.online = !0, t(), A.ifIR) if ("" !== e.reason) exports.emit("transferError", e)
        }, exports.pickHandler[105] = function (e) {
            if (T) clearTimeout(T), T = null;
            var t = e.detail || [];
            if (e.type === R.COUNT) {
                var n = 0;
                if (g.each(t, function (e, t) {
                    n += e.count
                }), n < R.DEFAULT) n = R.DEFAULT;
                if (n > R.PAGE) n = R.PAGE;
                exports.fetchHistory({ count: n })
            } else if (e.type === R.LIST) {
                var i = t.length;
                if (t[0]) R.MSG_SYNC = t[0].systime || R.MSG_SYNC;
                if (t[i - 1]) R.END_TIME = t[i - 1].systime || R.END_TIME;
                t = D.concat(t), D = [], t = r(t), g.each(t, function (e, t) {
                    e.msgHandlerType = "insertBefore", exports.emit("message", e)
                }), exports.fetchHisFinish(!0, e)
            }
        }, exports.pickHandler[106] = function (e) {
            S.sid = e.sid, S.to = e.uid, S.authType = e.authtype, S.csonline = !0, v.sinfo = e.sinfo && m.json.parse(e.sinfo) || {}, exports.fetchOfflineMsg()
        }, exports.pickHandler[107] = function (e) {
            if (e.webmsg) {
                for (var t = window.newBlinkNewMsgRecord, n = 0; n < t.length; n++) if (t[n] == e.msgid) return;
                t.push(e.msgid);
                var i = m.json.parse(e.webmsg);
                i.body.reverse(), g.each(i.body, function (e) {
                    var t = e.msg;
                    t.msgHandlerType = "insertBefore", t.time = parseInt(+t.time / 1e3, 10);
                    var n = e.msg.content;
                    if (m.lang.isArray(n)) g.each(n, function (e) {
                        var n = e.pickType;
                        if (n) {
                            var i = exports.pickHandler[n];
                            if (e.msgHandlerType = "insertBefore", i) i(e)
                        } else t.content = e.content || e, t.mtype = e.mtype || 0, exports.emit("message", t)
                    })
                })
            }
        }, exports.pickHandler[108] = function (e) {
            if (A.ifIR && e.status === _.READY) exports.emit("csonline", e, "IR"); else if (!S.connected && e.status === _.READY) exports.emit("csonline", e, "OFFLINE_MSG")
        }, exports.receiveOfflineMsg = function (e) {
            var t = {
                sid: "",
                tid: S.tid,
                type: e.PUSH_TYPE_MSG_SYNC,
                tid_authtype: v.authType,
                param: { systime: R.MSG_SYNC }
            };
            y.push(t, null, null)
        }, exports.fetchHisFinish = function (e, n) {
            if (n = n || {}, e) exports.receiveOfflineMsg(), exports.emit("fetchhistorysuccess"); else exports.emit("fetchhistoryfail");
            exports.emit("fetchhistoryfinish", n), t()
        }, exports.fetchHistory = function (e, t) {
            t = t || {};
            var n = v.offlineMsgGetType || 0, i = n ? "" : S.sid, o = n ? "-1" : S.tid, r = n ? v.bid : S.to, s = {
                sid: i,
                tid: o,
                type: e.PUSH_TYPE_FETCH_HISTORY,
                tid_authtype: v.authType,
                param: {
                    type: 1,
                    gettype: n,
                    from: r,
                    max_count: t.count || N,
                    from_authtype: S.authType,
                    endtime: R.END_TIME
                }
            };
            y.push(s, null, exports.fetchHisFinish)
        }, exports.fetchSessionMessage = function (e) {
            var t = S.tid || "", n = t, i = "";
            if (t.indexOf(":")) {
                var o = t.split(":");
                n = o[0], i = o[1] || ""
            }
            var r = m.json.stringify({ tag: 1, type: 2, userId: n - 0, subId: i - 0, bid: v.bid }), s = {
                sid: S.sid,
                tid: S.tid,
                type: e.PUSH_TYPE_FETCH_SESSION_MESSAGE,
                tid_authtype: v.authType,
                param: { webmsg: r }
            };
            y.push(s)
        }, exports.bye = function (e) {
            var t = {
                sid: S.options.sid,
                tid: S.tid,
                type: e.PUSH_TYPE_BYE,
                tid_authtype: v.authType,
                param: { reason: "bye for invite error" }
            };
            y.push(t)
        };
        var B = 0, j = !1, q = 3;
        return exports.wsPickSucc = function (e) {
            a(e)
        }, exports.wsPickFail = function (e) {
            u(e)
        }, exports.pick = f, exports.connect = function (e, t, i, o, r) {
            o = o || {}, S.tid = o.tid || "", S.options = o;
            var s = {
                op: 0,
                sid: o.sid || "",
                tid: S.tid,
                tid_authtype: t.authType,
                invited: o.invited - 0 ? 1 : 0,
                rtype: o.route || 0,
                ttype: i,
                inviterefer: location.href,
                sp_refer: o.sp_refer || "",
                reason: t.reasons[o.from] || e.CHART_START_TYPE
            };
            if (t.adata && 1 !== o.noshowSmartInvite) s.adata = t.adata;
            y.chat(s, function (e) {
                if (!1 !== r) if (S.stopPick = !1, t.usingWs) exports.wsPickSucc(e), exports.wsPick(); else f()
            }, function () {
                n("connect")
            })
        }, exports.wsPick = function (e) {
            if (f(), e.usingWs) setTimeout(exports.wsPick, 3e4)
        }, exports.talking = function (e, n) {
            if (n = n || {}, e = e || {}, v.sinfo = e.sinfo && m.json.parse(e.sinfo) || {}, S.sid = e.sid, S.to = n.tid, S.authType = e.authtype, S.csonline = !0, S.online = !0, S.tid = e.tid || "", S.options = n, S.stopPick = !1, v.syncSessionHistory) exports.fetchSessionMessage();
            t(), f()
        }, exports.queue = function (e, t) {
            t = t || {}, e = e || {}, v.sinfo = e.sinfo && m.json.parse(e.sinfo) || {}, S.sid = e.sid, S.to = e.uid, S.authType = e.authtype, S.csonline = !0, S.tid = e.tid || "", S.options = t, S.stopPick = !1, exports.emit("queueing"), f()
        }, exports.preSend = function (e, t) {
            if (t.content && !0 !== S.presend.sending && t.content !== S.presend.content) {
                t.mtype = 0, t.to = S.to, t.time = (new Date).getTime(), t.rtype = S.ttype;
                var n = { sid: S.sid || "", tid: S.to, type: e.PUSH_TYPE_PRE_SEND, tid_authtype: S.authType, param: t };
                y.push(n, function (e) {
                    S.presend.sending = !1
                }, function (e) {
                    S.presend.sending = !1
                }), S.presend.sending = !0, S.presend.content = t.content
            }
        }, exports.send = function (e, t, n, i, o) {
            t.from = v.bid, t.to = S.to, t.time = (new Date).getTime(), t.rtype = S.ttype;
            var r = v.eid + String((new Date).getTime()).substring(4), a = {
                sid: S.sid || "",
                tid: S.to,
                type: S.csonline ? e.PUSH_TYPE_CHAT : e.PUSH_TYPE_OFFLINE,
                tid_authtype: S.authType,
                param: t,
                logId: r
            };
            if (void 0 !== t.adata) a.adata = t.adata, delete t.adata;
            if (o && 10 === o) a.type = 10, a.msgid = t.msgid, a.ack = t.ack;
            y.push(a, n, function (e) {
                if (s(e), i) i()
            })
        }, exports.falseFeedback = function (e, t, n, i, o) {
            w = v.sid;
            var r = S.to.indexOf(":") > -1 ? S.to.split(":")[1] : 0,
                s = { type: t.type, info: t.text, riskType: t.extra.riskType, riskResult: t.extra.riskResult }, a = {
                    content: JSON.stringify(s),
                    deviceType: 4,
                    contentType: 1,
                    bid: v.bid,
                    siteId: v.siteid,
                    chatId: v.sid || w,
                    userId: v.eid,
                    subUserId: r
                };
            y.falseFeedback(a, i, o)
        }, exports.disconnect = function (t, n, i) {
            t = t || {};
            var o = void 0 === t.tid_authtype ? S.authType : t.tid_authtype;
            o = o || 4, y.push({
                type: 2,
                sid: t.sid || S.sid,
                tid: t.tid || S.to || -1,
                reason: t.reason || "",
                tid_authtype: o
            }, n, i), e(!0)
        }, exports.isConnected = function () {
            return S.connected
        }, exports.get = function (e) {
            return S[e]
        }, exports.setStopPick = function (e) {
            S.stopPick = e
        }, exports.fetchOfflineMsg = function (e) {
            if (v.syncFetchOfflineMsg) {
                var n = {
                    sid: "",
                    tid: "-1",
                    type: e.PUSH_TYPE_FETCH_HISTORY,
                    tid_authtype: v.authType,
                    param: { type: R.COUNT, from: S.to, from_authtype: S.authType }
                };
                y.push(n, null, exports.fetchHisFinish), T = setTimeout(function () {
                    t()
                }, R.DELAY)
            } else t()
        }, exports
    }), define("qiao-im-msdk/chat", ["im-core/chat"], function (e) {
        return e
    }), define("im-core/plugin/img", ["require", "im-lib", "../chat", "../net", "im-core/chat", "../main"], function (require) {
        function e(e) {
            return e = e.split(l ? "\\" : "/"), e.pop()
        }

        function t(e) {
            return "wupload/" + e + "/" + s.get("sid")
        }

        function n(e, t) {
            var n = require("im-core/chat");
            return t = t || "a.jpg", "wdownload/" + e + "/" + n.get("sid") + "/" + t
        }

        function i(n, i) {
            var o = (e(n.path), n.bcsName), r = t(o);
            c[r] = { msg: n, done: i };
            var s = '<img id="' + o + '" data-uploaded="1" data-bcsName="' + o + '"/>', l = { mtype: 0, content: s },
                f = { mtype: d, content: { type: u, bcsName: o } }, m = require("../main");
            a.upload(r, n.form || n.path, function () {
                i(l), m.emit("imgsendsuccess", { bcsName: o, id: n.mid, status: "success" })
            }, function () {
                f.content.status = 1, i(f), m.emit("imgsendfail", { bcsName: o, id: n.mid, status: "fail" })
            })
        }

        function o(e, t) {
            var i = e.content, o = i.bcsName, r = n(o, "img");
            t({ type: u, bcsName: o, bcsUrl: r, status: i.status })
        }

        var r = require("im-lib").Emitter, s = require("../chat"), a = require("../net"), c = {}, u = "img", d = 1,
            l = / window nt/i.test(navigator.userAgent), exports = {};
        return r.mixin(exports), exports.encoder = {}, exports.encoder[u] = i, exports.decoder = {}, exports.decoder[u] = o, exports
    }), define("qiao-im-msdk/plugin/img", ["im-core/plugin/img"], function (e) {
        return e
    }), define("im-core/plugin/shake", ["require", "../main"], function (require) {
        function e(e, t) {
            t({ mtype: i, content: { type: n } })
        }

        function t(e, t) {
            require("../main").emit("shake", e.msgHandlerType || ""), t()
        }

        var exports = {}, n = "shake", i = 4;
        return exports.encoder = {}, exports.encoder[n] = e, exports.decoder = {}, exports.decoder[n] = t, exports
    }), define("qiao-im-msdk/plugin/shake", ["im-core/plugin/shake"], function (e) {
        return e
    }), define("im-core/plugin/text", ["require", "../chat", "../config", "im-lib", "im-core/chat"], function (require) {
        function e(e, t) {
            var n = document.createElement("div");
            n.innerHTML = e.text || "";
            for (var i = n.getElementsByTagName("img"), o = i.length; o; o--) {
                var r = i[o - 1];
                if (r.getAttribute("data-bcsName")) {
                    var s = document.createElement("img");
                    s.setAttribute("data-bcsName", r.getAttribute("data-bcsName")), s.setAttribute("data-uploaded", r.getAttribute("data-uploaded")), s.id = r.id, r.id = "";
                    var c = r.parentNode;
                    c.insertBefore(s, r), c.removeChild(r)
                }
            }
            t({ mtype: a, content: n.innerHTML.replace(/\r|\n/gi, "") || "" })
        }

        function t(e, t) {
            var n = require("im-core/chat");
            return t = t || "a.jpg", o.urlRoot = o.urlRoot || "", o.urlRoot + "wdownload/" + e + "/" + n.get("sid") + "/" + t
        }

        function n(e) {
            var n = document.createElement("div");
            n.innerHTML = e;
            for (var i = n.getElementsByTagName("img"), o = 0; o < i.length; o++) {
                var r = i[o], s = r.getAttribute("data-bcsName"), a = r.getAttribute("data-bcsUrl");
                if (s && !a) a = t(s, s), r.setAttribute("data-bcsUrl", a)
            }
            return n.innerHTML
        }

        function i(e, t) {
            var i = (require("../chat"), e.adata && r.json.parse(e.adata) || {}), a = n(e.content),
                c = e.from === o.bid ? 0 : 1;
            t({ confidentialreason: i["__CONFIDENTIAL-REASON__"], type: s, role: c, time: 1e3 * e.time, text: a || "" })
        }

        var o = (require("../chat"), require("../config")), r = require("im-lib"), s = "text", a = 0, exports = {};
        return exports.encoder = {}, exports.encoder[s] = e, exports.decoder = {}, exports.decoder[a] = i, exports
    }), define("qiao-im-msdk/plugin/text", ["im-core/plugin/text"], function (e) {
        return e
    }), define("im-core/plugin/transfer", [], function () {
        function e(e, t) {
            t({ mtype: i, content: { type: n } })
        }

        function t(e, t) {
            t()
        }

        var exports = {}, n = "transfer", i = 4;
        return exports.encoder = {}, exports.encoder[n] = e, exports.decoder = {}, exports.decoder[i] = t, exports
    }), define("qiao-im-msdk/plugin/transfer", ["im-core/plugin/transfer"], function (e) {
        return e
    }), define("im-core/plugin/uploaded", [], function () {
        function e(e, t) {
            t({ mtype: i, content: { type: n, bcsName: e.bcsName, status: 0 } })
        }

        function t(e, t) {
            t()
        }

        var exports = {}, n = "img", i = 1;
        return exports.encoder = {}, exports.encoder.uploaded = e, exports.decoder = {}, exports.decoder.uploaded = t, exports
    }), define("qiao-im-msdk/plugin/uploaded", ["im-core/plugin/uploaded"], function (e) {
        return e
    }), define("im-core/plugin/voice", ["require", "../config"], function (require) {
        function e(e, t) {
            t({ mtype: o, content: e })
        }

        function t(e, t) {
            var o = e.content, a = e.from === n.bid ? 0 : 1;
            t({
                type: i,
                role: a,
                text: r + o.text,
                bcsName: o.bcsName,
                fetchURL: s.replace(/#{bcsName}/g, o.bcsName),
                duration: o.duration,
                token: o.token
            })
        }

        var n = require("../config"), i = "voice", o = 2, r = "\u8bed\u97f3\u8f6c\u8bd1\uff1a",
            s = '//p.qiao.baidu.com/cps/audio/getAudio?reqParam={"audioName": "#{bcsName}"}', exports = {};
        return exports.encoder = {}, exports.encoder[i] = e, exports.decoder = {}, exports.decoder[i] = t, exports
    }), define("qiao-im-msdk/plugin/voice", ["im-core/plugin/voice"], function (e) {
        return e
    }), define("im-core/plugin/location", ["require", "../config"], function (require) {
        function e(e, t) {
            t({ mtype: o, content: e })
        }

        function t(e, t) {
            var o = e.from === n.bid ? 0 : 1;
            e.content.type = i, e.content.role = o, e.content.text = r, t(e.content)
        }

        var n = require("../config"), i = "location", o = 4, r = "[\u5730\u7406\u4f4d\u7f6e]", exports = {};
        return exports.encoder = {}, exports.encoder[i] = e, exports.decoder = {}, exports.decoder[i] = t, exports
    }), define("qiao-im-msdk/plugin/location", ["im-core/plugin/location"], function (e) {
        return e
    }), define("im-core/plugin/config", ["require", "./fileTransfer", "./unknownMsg", "./img", "./shake", "./text", "./transfer", "./uploaded", "./voice", "./location"], function (require) {
        return {
            package: "coreplugin",
            resource: {
                fileTransfer: require("./fileTransfer"),
                unknownMsg: require("./unknownMsg"),
                img: require("./img"),
                shake: require("./shake"),
                text: require("./text"),
                transfer: require("./transfer"),
                uploaded: require("./uploaded"),
                voice: require("./voice"),
                location: require("./location")
            }
        }
    }), define("qiao-im-msdk/plugin/config", ["im-core/plugin/config"], function (e) {
        return e
    }), define("im-lib/websocket/config", [], function () {
        return { wsUrl: "/", majorVer: "1", minorVer: "0", protocol: "0", reqTimeout: 2e4, wsTimeout: 3e4 }
    }), define("im-lib/websocket/const", [], function () {
        return {
            MSGINITSTATUS: { INITIAL: 0, INITIALIZED: 1 },
            WSINITSTATUS: { INITIAL: 0, INITIALIZING: 1, INITIALIZED: 2 },
            WSSTATUS: { CONNECTING: 0, OPEN: 1, CLOSING: 2, CLOSED: 3 },
            REQMSGTYPE: { CONTROL: 0, BEAT: 1, TEXT: 2 },
            REQPROTYPE: { BEAT: 0, REQUEST: 2, ACK: 5 },
            REQSTATUS: { UNSENT: 0, SENT: 1, CONFIRMED: 2 },
            RESPPROTYPE: { BEATACK: 1, ACK: 3, REQUEST: 4 }
        }
    }), define("im-lib/websocket/index", ["require", "./const"], function (require) {
        function e(e) {
            return p[e.type](e.data)
        }

        function t(e) {
            return { seqId: parseInt(e.substr(2, 8), 10), type: parseInt(e.substr(10, 1), 10) }
        }

        var exports = {}, n = require("./const"), i = 1, o = 1, r = n.MSGINITSTATUS.INITIAL, s = {}, a = {}, c = {},
            u = {}, d = null, l = null, f = {
                "site/auth": n.REQMSGTYPE.CONTROL,
                "site/st": n.REQMSGTYPE.CONTROL,
                "site/poll": n.REQMSGTYPE.BEAT,
                "chat/st": n.REQMSGTYPE.CONTROL,
                "chat/poll": n.REQMSGTYPE.BEAT,
                "chat/push": n.REQMSGTYPE.TEXT,
                ack: n.REQMSGTYPE.ACK
            }, m = {
                "site/auth": n.REQPROTYPE.REQUEST,
                "site/st": n.REQPROTYPE.REQUEST,
                "site/poll": n.REQPROTYPE.BEAT,
                "chat/st": n.REQPROTYPE.REQUEST,
                "chat/poll": n.REQPROTYPE.BEAT,
                "chat/push": n.REQPROTYPE.REQUEST,
                ack: n.REQPROTYPE.ACK
            }, p = {
                disabled: function (e) {
                    d({ type: "changeStatus", data: { status: 2 } });
                    for (var t in a) if (a.hasOwnProperty(t)) {
                        var n = a[t];
                        clearTimeout(n.timeOut);
                        var i = n.data.substr(20);
                        try {
                            i = JSON.parse(i);
                            var o = n.options, r = i.method.substr(1);
                            delete i.method, delete i.header, delete i.msgid, o.data = i, d({
                                type: "request",
                                data: { path: r, options: o }
                            })
                        } catch (e) {
                        }
                    }
                }, message: function (e) {
                    exports.dealMsg(e)
                }
            };
        return exports.generateHead = function (e, t, n) {
            return t.majorVer + t.minorVer + e.padLeft(n.seqId, 8) + n.type + t.protocol + "00001111"
        }, exports.generateCookie = function (e) {
            for (var t = ["H_BDCLCKID_SF", "BAIDUID", "BDSFRCVID", "eqid"], n = [], i = 0; i < t.length; i++) {
                var o = t[i], r = e.getCookie(o, !1);
                if (r) n.push(o + "=" + r + ";")
            }
            if (n.length > 0) n = n.join(" ");
            return n
        }, exports.encodeMsg = function (e, t, o, r) {
            var s = {};
            if (s.type = m[t], s.msgType = f[t], s.status = n.REQSTATUS.UNSENT, s.msgid = e.msgid(), s.type === n.REQPROTYPE.ACK) s.seqId = r.seqId; else s.seqId = i++;
            o.msgid = s.msgid, o.method = "/" + t, o.header = {
                cookie: exports.generateCookie(),
                userAgent: window.navigator.userAgent || ""
            };
            var a = exports.generateHead(s);
            return s.data = a + JSON.stringify(o), s.options = r, s
        }, exports.sendMsg = function (e, t, i, o, r) {
            function s() {
                t.send(c.data), c.timeOut = setTimeout(s, e.reqTimeout)
            }

            var c = exports.encodeMsg(i, o, r);
            if (c.type === n.REQPROTYPE.REQUEST) a[c.seqId] = c, u[c.msgid] = c, s(), c.status = n.REQSTATUS.SENT; else t.send(c.data)
        }, exports.decodeMsg = function (e) {
            var n = {}, i = t(e.substr(0, 20));
            if (n.seqId = i.seqId, n.type = i.type, n.body = "" === e.substr(20) ? {} : JSON.parse(e.substr(20)), null === l && n.body.body) {
                var o = n.body.body[0];
                d({ type: "setAuth", data: { key: o.key, bid: o.msg.v } })
            }
            return n
        }, exports.dealMsg = function (e) {
            var t = exports.decodeMsg(e);
            if (t.type === n.RESPPROTYPE.ACK) {
                var i = a[t.seqId];
                clearTimeout(i.timeOut), i.status = n.REQSTATUS.CONFIRMED, delete a[t.seqId]
            } else if (t.type === n.RESPPROTYPE.REQUEST) {
                if (null === l) l = d({ type: "getBaseBody", data: {} });
                if (exports.sendMsg("ack", l, { seqId: t.seqId }), t.seqId === o) do {
                    try {
                        if (u[t.body.msgid]) {
                            var i = u[t.body.msgid];
                            i.options.success(t.body), delete u[t.body.msgid]
                        } else s[t.body.method].success(t.body);
                        delete c[o]
                    } catch (e) {
                    } finally {
                        o++
                    }
                } while (t = c[o]); else if (t.seqId > o) c[t.seqId] = t
            }
        }, exports.init = function (t, i, o, a) {
            if (r === n.MSGINITSTATUS.INITIAL) i.wsUrl = o, d = a, s = d({ type: "getComCallback" }), t.init(e), r = n.MSGINITSTATUS.INITIALIZED, d({
                type: "changeStatus",
                data: { status: 1 }
            })
        }, exports
    }), define("im-lib/websocket/websocket", ["require", "./const"], function (require) {
        function e(e) {
            if (s.readyState === r.WSSTATUS.OPEN) u = r.WSINITSTATUS.INITIALIZED, a = 3, exports.pushAllMsgs()
        }

        function t(e) {
            d({ type: "message", data: e.data })
        }

        function n(e) {
        }

        function i(e) {
            if (u = r.WSINITSTATUS.INITIAL, a-- > 0) exports.init(d); else d({ type: "disabled", data: c })
        }

        function o() {
            s.addEventListener("open", e), s.addEventListener("message", t), s.addEventListener("error", n), s.addEventListener("close", i)
        }

        var exports = {}, r = require("./const"), s = null, a = 3, c = [], u = r.WSINITSTATUS.INITIAL, d = null;
        return exports.pushAllMsgs = function () {
            for (var e = null; e = c.shift();) s.send(e)
        }, exports.send = function (e) {
            if (u === r.WSINITSTATUS.INITIALIZED) s.send(e); else c.push(e)
        }, exports.close = function () {
            s.close()
        }, exports.init = function (e, t) {
            if (u === r.WSINITSTATUS.INITIAL) u = r.WSINITSTATUS.INITIALIZING, s = new WebSocket(e.wsUrl), setTimeout(function () {
                if (u === r.WSINITSTATUS.INITIALIZING) exports.close()
            }, e.wsTimeout), d = t, o()
        }, exports
    }), define("im-lib/config", ["require", "./lang", "./json", "./net", "./util", "./Emitter", "./localStorage", "./main", "./websocket/config", "./websocket/const", "./websocket/index", "./websocket/websocket"], function (require) {
        return {
            package: "imLib",
            resource: {
                lang: require("./lang"),
                json: require("./json"),
                net: require("./net"),
                util: require("./util"),
                Emitter: require("./Emitter"),
                localStorage: require("./localStorage"),
                main: require("./main"),
                wsConf: require("./websocket/config"),
                wsConst: require("./websocket/const"),
                ws: require("./websocket/index"),
                wssocket: require("./websocket/websocket")
            },
            injection: [{ id: "imLib.net", method: { initWs: ["imLib.ws"], ws: ["imLib.ws"] } }, {
                id: "imLib.ws",
                method: {
                    generateHead: ["imLib.util", "imLib.wsConf"],
                    generateCookie: ["imLib.util"],
                    encodeMsg: ["imLib.util"],
                    sendMsg: ["imLib.wsConf", "imLib.wssocket"],
                    init: ["imLib.wssocket", "imLib.wsConf"]
                }
            }, { id: "imLib.wssocket", method: { init: ["imLib.wsConf"] } }]
        }
    }), define("im-core/auth", ["require"], function (require) {
        var e = {}, exports = {};
        return exports.get = function (t, n) {
            var i = {
                anonym: t.anonym,
                key: e.key || "",
                sn: e.sn || "",
                id: t.bid || "",
                from: t.authType,
                token: t.authToken || ""
            };
            if (n) return i[n] || e[n]; else return i
        }, exports.set = function (t, n) {
            e[t] = n
        }, exports
    }), define("qiao-im-msdk/auth", ["im-core/auth"], function (e) {
        return e
    }), define("im-core/message", ["require"], function (require) {
        function e() {
        }

        function t(t, n) {
            return t = t || e, n = n || e, function (e) {
                if (!1 === e) n(); else if (e) t(e)
            }
        }

        var n = {}, i = {}, exports = {};
        return exports.encode = function (e, i, o) {
            var r = n[e.type];
            if (!r) throw e.type + " message not supported";
            r(e, t(i, o))
        }, exports.decode = function (e, n, o) {
            var r = e.mtype;
            if (1 === r || 4 === r || 2 === r) if (e.content && e.content.type) if ("file" === (r = e.content.type)) r = "fileTransfer";
            var s = i[r];
            if (s) s(e, t(n, o)); else if (o) o()
        }, exports.addEncoder = function (e, t) {
            e.each(t, function (e, t) {
                n[e] = t
            })
        }, exports.addDecoder = function (e, t) {
            e.each(t, function (e, t) {
                i[e] = t
            })
        }, exports
    }), define("qiao-im-msdk/message", ["im-core/message"], function (e) {
        return e
    }), define("im-core/site", ["require"], function (require) {
        var exports = {};
        return exports.init = function (e, t, n) {
            t.extend(e, n || {}), e.anonym = e.bid ? 0 : 1
        }, exports.enter = function (e, t, n) {
            if (t = t || function () {
            }, n = n || function () {
            }, e.isLogin()) t(); else e.login(t, n)
        }, exports.leave = function (e) {
            if (e.isLogin()) e.logout()
        }, exports
    }), define("qiao-im-msdk/site", ["im-core/site"], function (e) {
        return e
    }), define("im-core/user", ["require", "./net"], function (require) {
        function e() {
            clearTimeout(t), t = null, n = !1
        }

        var exports = {};
        require("./net").on("auth invalid", function () {
            e()
        });
        var t, n, i = { INVITE: 1, AUTH: 2 }, o = null, r = !1;
        exports.heartBeat = function (e) {
            function n() {
                t = setTimeout(exports.heartBeat, 15e3)
            }

            e.poll(!1, n, n)
        }, exports.wsHeartBeat = function (e, t) {
            if (t.poll(!1, exports.refresh, exports.refresh), e.usingWs) o = setTimeout(exports.wsHeartBeat, 3e4)
        };
        var s = {};
        return exports.pickSuccess = function (e, t) {
            e.each(t, function (e) {
                var t = s[e.type + ""];
                if (t) t(e.msg)
            })
        }, exports.pickFailure = function () {
        }, exports.refresh = function (e, t, i) {
            function o() {
                t.poll(r, function (t) {
                    e.each(t, function (e) {
                        var t = s[e.type + ""];
                        if (t) t(e.msg)
                    }), exports.refresh()
                }, function () {
                    setTimeout(exports.refresh, 3e3)
                })
            }

            if (n) {
                var r = Boolean(i.isPageOnload);
                if (r) o(); else setTimeout(o, 3e3)
            }
        }, exports.pickHandler1 = function (e, t, n, i) {
            if ("invite" === i.reason) n.sid = i.sid, n.tid = i.uid, n.fromType = 2, n.ttype = 0, e.emit("initiative", i); else if ("chat" === i.reason) n.sid = i.sid, n.tid = i.uid, n.ttype = i.ttype, n.invited = 1, n.sinfo = i.sinfo && t.parse(i.sinfo) || {}, e.emit("forcetalk", i)
        }, exports.pickHandler104 = function (e, t, n, i) {
            if (t.status = i.status, e.emit("watchStatus", i), t.usingWs) n.pickHandler[104](i)
        }, s[1] = function (e) {
            exports.pickHandler1(e)
        }, s[104] = function (e) {
            exports.pickHandler104(e)
        }, exports.getInfo = function (e, t) {
            function n() {
                var e = (new Date).getTimezoneOffset(), t = parseInt(e / 60, 10), n = e % 60, i = "-";
                if (t < 0 || n < 0) if (i = "+", t = -t, n < 0) n = -n;
                return t += "", n += "", "UTC" + i + t + ":" + n
            }

            var i = window.navigator, o = window.screen;
            return {
                lang: i.language || i.systemLanguage,
                cbit: o.colorDepth,
                rsl: o.width + "*" + o.height,
                tz: n(),
                xst: encodeURIComponent(t.getXst()),
                referrer: encodeURIComponent(document.referrer),
                xstlink: encodeURIComponent(location.href)
            }
        }, exports.enter = function (e, t, n) {
            e.site(!0, exports.getInfo(), function (e) {
                if (!exports.checkEnterResult(e, t, n)) exports.getEnterResult(t, n)
            }, n)
        }, exports.checkEnterResult = function (e, t, i, o, r) {
            var s = !1;
            if (!i.length) return s; else return e.each(i, function (i) {
                if (100 === i.type) {
                    var a = i.msg || {};
                    if (3 === a.status && 0 === t.visitType) {
                        var c = t.tid || "", u = t.sid || "";
                        e.extend(t, a), t.tid = c, t.sid = u
                    } else e.extend(t, a);
                    if (s = !0, n = !0, t.usingWs) exports.wsHeartBeat(); else exports.refresh();
                    o(i.msg)
                } else r()
            }), s
        }, exports.checkAuthResult = function (e, t, n, o, s, a, c, u) {
            var d = !1;
            return n.each(s, function (n) {
                if (n.type === i.AUTH) {
                    if (d = !0, n = n.msg || {}, !n.valid && (n.blocktype === t.BLOCK_TYPE.IP_BLOCK || n.blocktype === t.BLOCK_TYPE.BID_BLOCK || n.blocktype === t.BLOCK_TYPE.DIRECT_BLOCK)) return u && u(n.blocktype), r = n.blocktype, void e.emit("blocked", { blocktype: n.blocktype });
                    if (!n.valid && (n.blocktype === t.BLOCK_TYPE.CONFIRM_BLOCK || n.blocktype === t.BLOCK_TYPE.CODE_BLOCK)) return r = n.blocktype, o.bid = n.v, void exports.enter(a, c);
                    if (n.valid) o.bid = n.v, exports.enter(a, c); else c()
                }
            }), d
        }, exports.getEnterResult = function (e, t, n) {
            e.poll(!0, function (e) {
                if (!exports.checkEnterResult(e, t, n)) exports.getEnterResult(t, n)
            }, n)
        }, exports.getAuthResult = function (e, t, n, i, o) {
            t.poll(!0, function (e) {
                if (!exports.checkAuthResult(e, n, i, o)) exports.getAuthResult(n, i, o); else window.directConnectKey = 1
            }, i)
        }, exports.isLogin = function () {
            return !!t || n
        }, exports.login = function (e, t, n, i, o, r) {
            if (!exports.isLogin()) e.auth(!0, exports.getInfo(), function (e) {
                if (e.sign) t.set("sign", e.sign || e[0].sign);
                if (t.set("key", e.key || e[0].key), n.bid = e.v || e[0].msg.v, !exports.checkAuthResult(e, i, !1, r)) exports.getAuthResult(i, o, r)
            }, o); else i()
        }, exports.checkcode = function (e, t, n, i, o, s) {
            var a = function () {
                e.emit("codeinvalidated")
            }, c = function (t) {
                if (t && 0 === t.status) n.set("code_token", t.data.code_token), r = !1, e.emit("codevalidated"), s(); else a()
            };
            t.validate({ from: "chat", code: o, bid: i.bid }, c, a)
        }, exports.confirm = function (e, t, n) {
            t.set("code_token", "CONFIRM_CLICK"), r = !1, n()
        }, exports.logout = function (t) {
            e(), t.site(!1), t.auth(!1)
        }, exports.extendPickHandler = function (e, t) {
            e.extend(s, t.pickHandler)
        }, exports.isBlocked = function () {
            return r
        }, exports
    }), define("qiao-im-msdk/user", ["im-core/user"], function (e) {
        return e
    }), define("im-core/log", ["require"], function (require) {
        var exports = {};
        return exports.send = function () {
        }, exports
    }), define("qiao-im-msdk/log", ["im-core/log"], function (e) {
        return e
    }), define("im-core/bullConfig", ["require", "./plugin/config", "im-lib/config", "./main", "./auth", "./config", "./const", "./chat", "./message", "./site", "./user", "./net", "./log"], function (require) {
        return {
            package: "core",
            importConfig: [require("./plugin/config"), require("im-lib/config")],
            resource: {
                main: require("./main"),
                auth: require("./auth"),
                config: require("./config"),
                consts: require("./const"),
                chat: require("./chat"),
                message: require("./message"),
                site: require("./site"),
                user: require("./user"),
                net: require("./net"),
                log: require("./log")
            },
            injection: [{
                id: "core.main",
                method: {
                    initCore: ["core.chat", "core.config", "imLib.lang", "core.consts"],
                    connect: ["core.chat", "core.config", "core.user"],
                    auth: ["core.user"],
                    checkcode: ["core.user"],
                    confirm: ["core.user"],
                    send: ["core.chat", "core.message"],
                    falseFeedback: ["core.chat", "core.message"],
                    addPlugin: ["coreplugin.fileTransfer", "coreplugin.img", "coreplugin.unknownMsg", "coreplugin.shake", "coreplugin.text", "coreplugin.transfer", "coreplugin.uploaded", "coreplugin.voice", "coreplugin.location"],
                    preSend: ["core.chat", "core.message"],
                    plugin: ["core.message"],
                    disconnect: ["core.chat", "core.user"],
                    messageHandler: ["core.config"],
                    get: ["core.chat"],
                    getConfig: ["core.config"],
                    bindEvent: ["core.main", "communicate.handler"],
                    isConnected: ["core.chat"],
                    sendOfflineMsg: ["core.chat", "core.message"],
                    fetchHistory: ["core.chat"],
                    isBlocked: ["core.user"]
                }
            }, { id: "core.auth", method: { get: ["core.config"] } }, {
                id: "core.chat",
                method: {
                    fetchHistory: ["core.consts"],
                    connect: ["core.consts", "core.config"],
                    fetchSessionMessage: ["core.consts"],
                    bye: ["core.consts"],
                    preSend: ["core.consts"],
                    send: ["core.consts"],
                    falseFeedback: ["core.consts"],
                    fetchOfflineMsg: ["core.consts"],
                    receiveOfflineMsg: ["core.consts"],
                    wsPick: ["core.config"]
                }
            }, { id: "core.message", method: { addEncoder: ["imLib.lang"], addDecoder: ["imLib.lang"] } }, {
                id: "core.net",
                method: {
                    jsonToQuery: ["imLib.json", "imLib.lang"],
                    getUploadUrl: ["core.config", "imLib.util", "core.main"],
                    getDownloadUrl: ["core.config", "imLib.util", "core.main"],
                    request: ["core.config", "core.auth", "imLib.net", "imLib.json"],
                    auth: ["core.config"],
                    authOut: ["core.user"],
                    upload: ["core.config", "imLib.net"],
                    initLog: ["core.config", "data.config"],
                    log: ["imLib.net"],
                    pick: ["core.config"],
                    canUseWs: ["imLib.util", "core.config"],
                    wsCommands: ["core.config", "core.auth", "core.user", "core.chat"],
                    successFactory: ["core.auth", "imLib.json"]
                }
            }, {
                id: "core.site",
                method: { init: ["core.config", "imLib.lang"], enter: ["core.user"], leave: ["core.user"] }
            }, {
                id: "core.user",
                method: {
                    refresh: ["imLib.lang", "core.net", "core.config"],
                    getInfo: ["imLib.lang", "core.net"],
                    enter: ["core.net"],
                    checkEnterResult: ["imLib.lang", "core.config"],
                    getAuthResult: ["core.main", "core.net"],
                    checkcode: ["core.main", "core.net", "core.auth", "core.config"],
                    confirm: ["core.main", "core.auth"],
                    login: ["core.net", "core.auth", "core.config"],
                    logout: ["core.net"],
                    getEnterResult: ["core.net"],
                    pickHandler1: ["core.main", "imLib.json", "core.config"],
                    pickHandler104: ["core.main", "core.config", "core.chat"],
                    heartBeat: ["core.net"],
                    checkAuthResult: ["core.main", "core.consts", "imLib.lang", "core.config"],
                    pickSuccess: ["imLib.lang"],
                    wsHeartBeat: ["core.config", "core.net"]
                }
            }],
            aspect: [{ id: "core.message", pointCut: ["core.main.decode, , decode"] }, {
                id: "core.net",
                pointCut: ["core.log.send, ,log"]
            }]
        }
    }), define("qiao-im-msdk/bullConfig", ["im-core/bullConfig"], function (e) {
        return e
    }), define("embed/log/config", ["require", "./main"], function (require) {
        return {
            package: "log",
            resource: { main: require("./main") },
            injection: [{
                id: "log.main",
                method: {
                    init: ["data.config", "pchat.bid", "core.config"],
                    sendLog: ["core.log", "core.chat", "core.config"],
                    logClickSeek: ["core.main", "common.cookie"],
                    logMessageAutoShow: ["common.cookie"],
                    logMessageClickShow: ["common.cookie"]
                }
            }],
            aspect: [{
                id: "log.main",
                pointCut: ["messagecontainer.main.renderMessage,,addLightMsg", "communicate.handler.connected, ,logConnect", "communicate.handler.queueing, ,logQueue", "communicate.handler.transferError, ,logTransferFail", "communicate.handler.transferErrorLog, ,logTransferFail", "icon.handle.acceptClick, ,logClickSeek", "invite.operation.clickInvite, ,logClickSeek", "pmessage.main.init, logRenderStart, ", "pinvite.main.init, , logRenderEnd", "pchat.chat.builtComunicate, logEnterStart, ", "pchat.chat.enterSuccess, ,logEnterEnd", "pchat.chat.openWebimLight,logOpenWebim, ", "communicate.handler.sendfail, ,sendFailMsg", "communicate.handler.imgsendfail, ,sendFailMsg", "webimlight.entry.connect, logStartTransfer, ", "pchat.leave.pageLeave, , leaveSite", "picon.phandler.acceptClick, ,logClickSeek", "pinvite.phandler.clickInvite, ,logClickSeek", "pmessage.phandler.showInCenter, ,logMessageClickShow"]
            }]
        }
    }), define("embed/mobilelite/lib/string", ["require"], function (require) {
        var e = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'" }, exports = {};
        return exports.encodeHTML = function (e) {
            if (!e) return ""; else return String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
        }, exports.decodeHTML = function (t) {
            if (!t) return ""; else return (t + "").replace(/\&([^;]+);/g, function (t, n) {
                var i;
                if (n in e) return e[n]; else if (i = n.match(/^#x([\da-fA-F]+)$/)) return String.fromCharCode(parseInt(i[1], 16)); else if (i = n.match(/^#(\d+)$/)) return String.fromCharCode(parseInt(i[1], 10));
                return t
            })
        }, exports.format = function (e, t) {
            if (!e) return "";
            if (null == t) return e;
            var n = "function" == typeof t ? t : function (e) {
                var n = t[e];
                return null == n ? "" : n
            };
            return (e + "").replace(/\$\{(.+?)\}/g, function (e, t) {
                return n(t)
            })
        }, exports.objectToString = function (e) {
            var t = [], n = function (e) {
                if ("object" == typeof e && null !== e) return this.objectToString(e); else return /^(string|number)$/.test(typeof e) ? '"' + e + '"' : e
            };
            for (var i in e) if (e.hasOwnProperty(i)) t.push('"' + i + '":' + n(e[i]));
            return "{" + t.join(",") + "}"
        }, exports
    }), define("embed/mobilelite/lib/object", ["require", "./string"], function (require) {
        var e = require("./string"), exports = {};
        exports.extend = function (e, t) {
            for (var n = arguments.length, i = 1; i < n; i++) if (t = arguments[i]) for (var o in t) if (t.hasOwnProperty(o) && void 0 !== t[o]) e[o] = t[o];
            return e
        }, exports.extendOwn = function (e, t) {
            for (var n = 1, i = arguments.length; n < i; n++) if (t = arguments[n]) for (var o in t) if (t.hasOwnProperty(o) && e.hasOwnProperty(o) && void 0 !== t[o]) e[o] = t[o];
            return e
        }, exports.clone = function (e) {
            for (var t = {}, n = 0, i = arguments.length; n < i; n++) if (e = arguments[n]) for (var o in e) if (e.hasOwnProperty(o) && void 0 !== e[o]) t[o] = e[o];
            return t
        }, exports.jsonToQuery = function (t) {
            var n, i, o = [];
            for (var r in t) if (t.hasOwnProperty(r)) if (n = t[r], exports.isArray(n)) for (i = n.length; i--;) o.push(r + "=" + encodeURIComponent(n[i])); else if (exports.isObject(n)) o.push(r + "=" + encodeURIComponent(e.objectToString(n))); else o.push(r + "=" + encodeURIComponent(n));
            return o.join("&")
        };
        var t = Object.prototype.toString;
        return exports.isObject = function (e) {
            return "[object Object]" === t.call(e)
        }, exports.isString = function (e) {
            return "[object String]" === t.call(e)
        }, exports.isArray = function (e) {
            return "[object Array]" === t.call(e)
        }, exports.isNumber = function (e) {
            return !!/^[0-9]+$/.test(e)
        }, exports
    }), define("embed/mobilelite/lib/net/img", ["require", "../object"], function (require) {
        var e = require("../object"), t = function () {
            var e = 0;
            return function () {
                var t = (new Date).getTime();
                return t += "_" + e++
            }
        }(), exports = {};
        return exports.request = function (n, i, o, r) {
            if ("function" == typeof i) r = o, o = i, i = null;
            (i = i || {}).t = t(), n += (n.indexOf("?") > -1 ? "&" : "?") + e.jsonToQuery(i);
            var s = new Image;
            s.onload = function () {
                s.onload = null, s.onerror = null, s = null, o && o()
            }, s.onerror = function () {
                s.onload = null, s.onerror = null, s = null, r && r()
            }, s.src = n
        }, exports
    }), define("embed/mobilelite/lib/net/ajax", ["require", "../object", "./img"], function (require) {
        function e() {
        }

        function t(n, i) {
            function o() {
                if (4 === l.readyState) {
                    try {
                        var t = l.status
                    } catch (e) {
                        return void c("failure")
                    }
                    if (c(t), t >= 200 && t < 300 || 304 === t || 1223 === t) c("success"); else c("failure");
                    window.setTimeout(function () {
                        if (l.onreadystatechange = e, m) l = null
                    }, 0)
                }
            }

            function r() {
                if (window.ActiveXObject) try {
                    return new ActiveXObject("Msxml2.XMLHTTP")
                } catch (e) {
                    try {
                        return new ActiveXObject("Microsoft.XMLHTTP")
                    } catch (e) {
                    }
                }
                if (window.XMLHttpRequest) return new XMLHttpRequest
            }

            function c(e) {
                e = "on" + e;
                var o = y[e], r = t[e];
                if (o) {
                    if (u) clearTimeout(u);
                    if ("onsuccess" !== e) o(l); else try {
                        var c = l.responseText;
                        c = new Function("return (" + c + ")")(), i.onsuccess(c)
                    } catch (e) {
                        return s.request(a, {
                            errMsg: e.message || "",
                            name: e.name || "",
                            fileName: e.fileName || "",
                            url: n,
                            stack: e.stack || ""
                        }), i.onfailure(l)
                    }
                } else if (r) {
                    if ("onsuccess" === e) return;
                    r(l)
                }
            }

            i = i || {};
            var u, d, l, f = i.data || "", m = !(!1 === i.async), p = i.username || "", g = i.password || "",
                h = (i.method || "GET").toUpperCase(), b = i.headers || {}, v = i.timeout || 0, y = {};
            for (d in i) if (i.hasOwnProperty(d)) y[d] = i[d];
            if (0 !== n.indexOf("http")) b["X-Requested-With"] = "XMLHttpRequest";
            try {
                if (l = r(), "GET" === h) {
                    if (f) n += (n.indexOf("?") >= 0 ? "&" : "?") + f, f = null;
                    if (i.noCache) n += (n.indexOf("?") >= 0 ? "&" : "?") + "b" + +new Date + "=1"
                }
                if (p) l.open(h, n, m, p, g); else l.open(h, n, m);
                if (m) l.onreadystatechange = o;
                if ("POST" === h) b["Content-Type"] = b["Content-Type"] || "application/x-www-form-urlencoded", l.setRequestHeader("Content-Type", b["Content-Type"]), delete b["Content-Type"];
                for (d in b) if (b.hasOwnProperty(d)) l.setRequestHeader(d, b[d]);
                if (c("beforerequest"), v) u = setTimeout(function () {
                    l.onreadystatechange = e, l.abort(), c("timeout")
                }, v);
                if (l.send(f), !m) o()
            } catch (e) {
                c("failure")
            }
            return l
        }

        function n() {
            return (new Date).getTime().toString(36)
        }

        function i(i, s) {
            var a = s.onsuccess || e, c = s.onfailure || e;
            s.onsuccess = a, s.onfailure = c;
            var u = s.data || {};
            if (s.method === r) i += (i.indexOf("?") >= 0 ? "&" : "?") + "_t=" + n(), s.data = o(u); else u._t = n(), i += (i.indexOf("?") >= 0 ? "&" : "?") + o(u), s.data = null;
            return t(i, s)
        }

        var o = require("../object").jsonToQuery, r = "POST", s = require("./img"),
            a = "http://sc.qiao.baidu.com/front/ajaxError.gif", exports = {};
        return exports.post = function (e, t, n, o) {
            return i(e, { method: r, data: t, onsuccess: n, onfailure: o })
        }, exports.get = function (e, t, n, o) {
            return i(e, { method: "GET", data: t, onsuccess: n, onfailure: o })
        }, exports
    }), define("embed/mobilelite/lib/net/jsonp", ["require", "../object", "./img"], function (require) {
        "use strict";

        function e(e, i) {
            var a = r(), c = null, h = i.timeout || null, b = i.callbackKey || f, v = a, y = i.data || {};
            y.t = (new Date).getTime();
            var I = i.charset || m, T = function (e) {
                i.onsuccess && i.onsuccess(e), n(c), o(v)
            }, w = function () {
                i.onfail && i.onfail(), n(c), o(v)
            }, S = s({ url: e + t(e, y, b, v), charset: I, id: a });
            if (d[a] = u[a] = function () {
                try {
                    T.apply(null, arguments)
                } catch (t) {
                    p.request(g, {
                        type: "jsonp",
                        errMsg: t.message || "",
                        name: t.name || "",
                        fileName: t.fileName || "",
                        url: e,
                        stack: t.stack || ""
                    }), w.apply(null, arguments)
                }
            }, l[a] = function () {
                w.apply(null, arguments)
            }, h) c = setTimeout(function () {
                c = null, S.abort(), w.call(null)
            }, h);
            return S.send(), S
        }

        function t(e, t, n, i) {
            var o = {}.toString.call(t), r = "?";
            if (e.indexOf("?") > -1) r = "&";
            var s = r + n + "=" + i;
            if ("[object Object]" === o) s += "&" + a(t);
            return s
        }

        function n(e) {
            if (e) clearTimeout(e), e = null
        }

        function i(e) {
            if (u[e]) u[e] = h(e), d[e] = null, delete d[e]
        }

        function o(e) {
            try {
                d[e] = null, u[e] = null, delete d[e], delete u[e]
            } catch (e) {
            }
        }

        function r() {
            return "cxxxxxxx_xxxx_4xxx_yxxx_xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                var t = 16 * Math.random() | 0;
                return ("x" === e ? t : 3 & t | 8).toString(16)
            })
        }

        function s(e) {
            var t, n = c.head || c.getElementsByTagName("head") && c.getElementsByTagName("head")[0] || c.body;
            return {
                send: function () {
                    t = c.createElement("script"), t.async = !0, t.charset = e.charset, t.src = e.url, t.id = e.id, t.onload = t.onreadystatechange = function (n) {
                        if (!0 === n || !t.readyState || /loaded|complete/.test(t.readyState)) {
                            if (t.onload = t.onreadystatechange = null, t.parentNode) t.parentNode.removeChild(t);
                            if (t = null, !0 === n) i(e.id)
                        }
                    }, t.onerror = function () {
                        if (t.parentNode) t.parentNode.removeChild(t);
                        if (l[t.id]) l[t.id].call(null);
                        t = null
                    }, n.insertBefore(t, n.firstChild)
                }, abort: function () {
                    if (t) t.onload(!0)
                }
            }
        }

        var a = require("../object").jsonToQuery, c = document, u = window, d = {}, l = {}, f = "callback", m = "utf-8",
            p = require("./img"), g = "http://sc.qiao.baidu.com/front/ajaxError.gif", h = function (e) {
                return function () {
                    try {
                        u[e] = null, delete u[e]
                    } catch (e) {
                    }
                }
            };
        return { request: e }
    }), define("embed/mobilelite/lib/ajax", ["require", "./net/ajax", "./net/jsonp", "./net/img"], function (require) {
        var e = require("./net/ajax"), t = require("./net/jsonp"), n = require("./net/img"),
            i = window.location.protocol + "//p.qiao.baidu.com", exports = {};
        return exports.ajax = function (n, o) {
            if ("jsonp" === o.type) if (-1 !== n.indexOf("/smartBox/") || -1 !== n.indexOf("aifanfan.baidu.com/p.gif")) return t.request(n, o); else return t.request(i + n, o);
            if ("post" === o.method) return e.post(n, o.data, o.onsuccess, o.onfail); else return e.get(n, o.data, o.onsuccess, o.onfail)
        }, exports.img = function (e, o) {
            if ("jsonp" === o.type) return t.request(i + e, o);
            n.request(e, o.data, o.onsuccess, o.onfail)
        }, exports
    }), define("embed/icon/iconMain", ["require", "../mobilelite/lib/ajax"], function (require) {
        var exports = {}, e = require("../mobilelite/lib/ajax");
        return exports.renderHtml = function (e, t, n, i, o, r) {
            var s = e.getIconTplData(), a = n.template(t, s);
            i.appendHTML(a, o.getWrap()), r.componentIsShow.icon = 1
        }, exports.init = function (t, n) {
            var i = n.getServer("configBox").seekIcon;
            if (0 != +i.width && 0 != +i.height) {
                exports.renderHtml(), t.init();
                var o = (new Date).getTime() - window.speedLogTime, r = {
                    type: "jsonp",
                    data: {
                        type: 1,
                        duration: o,
                        logId: window.speedLogId,
                        userId: n.getServer("siteObj").eid,
                        sourceId: "AFFSpeed",
                        time: (new Date).getTime()
                    }
                };
                e.ajax("https://aifanfan.baidu.com/p.gif", r)
            }
        }, exports
    }), define("embed/icon/iconHandler", ["require"], function (require) {
        var exports = {};
        return exports.handleAccept = function (e, t) {
            e.clickIcon(t)
        }, exports.bindEvent = function (e, t) {
            e.domOn("nb_icon_wrap", "click", exports.handleAccept, !1), t.bindEvent()
        }, exports.init = function () {
            exports.bindEvent()
        }, exports
    }), define("embed/icon/iconData", ["require"], function (require) {
        var exports = {};
        return exports.getIconTplData = function (e, t) {
            var n = e.getServer("configBox").seekIcon, i = t.dataProcess(n);
            if (1 == +n.isCustomerStyle) i.backImg = "background-image: url(" + i.customerStyle.backImg + ");";
            return i
        }, exports
    }), define("embed/icon/pc/iconPc.tpl", [], function () {
        return '\x3c!-- target: iconIcon --\x3e<% if (+data.isCustomerStyle === 1) { %><% if (+data.isFixedPosition === 1) { %><ins class="nb-icon-wrap nb-icon-base icon-<%position%> nb-icon-skin-<%skinIndex%> nb-icon-<%iconType%> nb-customer-icon-style" id="nb_icon_wrap" style="<%bottomDistance%>;width:<%width%>px;"><% } else { %><ins class="nb-icon-wrap nb-icon-base nb-icon-skin-<%skinIndex%> nb-icon-<%iconType%> nb-customer-icon-style" id="nb_icon_wrap" style="<%horizontalAttr%>:<%horizontalPixel%>px;<%verticalAttr%>:<%verticalPixel%>px;width:<%width%>px;"><% } %><% } else { %><% if (+data.isCustomerStyle === 0) {%><% if (+data.isFixedPosition === 1) { %><ins class="nb-icon-wrap nb-icon-base icon-<%position%> nb-icon-skin-<%skinIndex%> nb-icon-<%iconType%>" id="nb_icon_wrap" style="<%bottomDistance%>;width:<%width%>px;"><% } else { %><ins class="nb-icon-wrap nb-icon-base nb-icon-skin-<%skinIndex%> nb-icon-<%iconType%>" id="nb_icon_wrap" style="<%horizontalAttr%>:<%horizontalPixel%>px;<%verticalAttr%>:<%verticalPixel%>px;width:<%width%>px;"><% } %><% } else { %><% if (+data.isFixedPosition === 1) { %><ins class="nb-icon-wrap nb-icon-base icon-<%position%> nb-icon-skin-xc-<%skinIndex%> nb-icon-<%iconType%>" id="nb_icon_wrap" style="<%bottomDistance%>;width:<%width%>px;"><% } else { %><ins class="nb-icon-wrap nb-icon-base nb-icon-skin-xc-<%skinIndex%> nb-icon-<%iconType%>" id="nb_icon_wrap" style="<%horizontalAttr%>:<%horizontalPixel%>px;<%verticalAttr%>:<%verticalPixel%>px;width:<%width%>px;"><% } %><% } %><% } %><% if (data.iconType === \'group\') { %><ins class="nb-icon-group"><% } %><ins class="nb-icon-inner-wrap" style="height:<%height%>px;width:<%width%>px;<%backImg%>;"><ins class="nb-icon-bridge0 nb-icon-bridge-base" data-type="iconInvite"></ins></ins><% if (data.iconType === \'group\') { %><% if (+data.isCustomerStyle === 1) {%><ins class="nb-icon-groups nb-show" style="background-color:<%groupStyle.bgColor%>;<%groupsMargin%>;" id="nb_icon_groups"><% } else { %><ins class="nb-icon-groups nb-show" style="<%groupsMargin%>;" id="nb_icon_groups"><% } %><% for(var i = 0, l = data.groups.length; i < l; i++) {data.group = data.groups[i]; %><% if(data.group.isSelected){ %><% if (+data.isCustomerStyle === 1) {%><ins class="nb-icon-groups-item nb-clearfix" data-id="<%group.groupId%>" style="background-color:<%groupStyle.buttonColor%>;"><ins class="nb-group-icon"></ins><ins class="nb-group-text" style="color:<%groupStyle.fontColor%>"><%group.groupName%></ins></ins><% } else { %><ins class="nb-icon-groups-item nb-clearfix" data-id="<%group.groupId%>"><ins class="nb-group-icon"></ins><ins class="nb-group-text"><%group.groupName%></ins></ins><% } %><% } else { %><ins class="nb-icon-groups-item icon-disable nb-clearfix" data-id=""><ins class="nb-group-icon"></ins><ins class="nb-group-text"><%group.groupName%></ins></ins><% } %><% } %><% } %></ins><% if (data.iconType === \'group\') { %></ins><% } %></ins>\x3c!-- end --\x3e'
    }), define("embed/icon/pc/iconPHandler", ["require"], function (require) {
        var exports = {};
        exports.getIconItemEle = function (e, t, n) {
            var i = e.g(t.PREFIXID + "groups");
            if (!e.contain(n, i)) return n;
            var o = null;
            if (n.className.match(t.CLASSREG)) o = n; else o = exports.getIconItemEle(n.parentNode, e);
            return o
        };
        var e = !0;
        return exports.clickIcon = function (t, n, i, o, r) {
            var s = n.getServer("configBox").seekIcon;
            if ("false" !== n.getServer("siteObj").online) {
                if (!e) return;
                if (e = !1, s.iconType) {
                    var a = t.getTarget(r);
                    a = exports.getIconItemEle(a, t);
                    var c = a.className;
                    if (-1 !== c.indexOf("icon-disable")) i.showInCenter(); else if (o.CLASSREG.test(c)) exports.acceptClick(a.getAttribute("data-id"))
                } else exports.acceptClick(0)
            } else i.showInCenter();
            var u = setTimeout(function () {
                e = !0, clearTimeout(u)
            }, 300)
        }, exports.acceptClick = function (e, t, n) {
            if (e.accept(0, n), t.hide(["nb_invite_wrap"]), 0 == +n) t.hide(["msgTip"])
        }, exports.bindEvent = function () {
        }, exports
    }), define("embed/icon/pc/iconPData", ["require"], function (require) {
        function e(e, t) {
            var n = +e.width, i = +e.height + (t || 0), o = +e.marginTop, r = +e.marginLeft,
                s = document.documentElement.clientWidth, a = document.documentElement.clientHeight;
            if (n + r > s) e.horizontalAttr = "right", e.horizontalPixel = 20; else e.horizontalAttr = "left", e.horizontalPixel = r;
            if (i + o > a) e.verticalAttr = "bottom", e.verticalPixel = 20; else e.verticalAttr = "top", e.verticalPixel = o
        }

        var exports = {};
        return exports.dataProcess = function (t, n) {
            var i = t.extend({}, n);
            if (1 == +n.iconType) {
                if (i.isShowGroup = "nb-show", i.iconType = "group", 1 == +i.skinIndex && 0 == +i.isCustomerStyle) i.groupsMargin = "margin-left:19px"; else i.groupsMargin = "margin-left:0";
                var o = n.groups;
                if (1 == +i.isFixedPosition) {
                    if (o.length) {
                        var r = 43 * o.length + 10 + 20;
                        if ("right-center" === n.position || "left-center" === n.position) i.bottomDistance = "margin-top:-" + Math.ceil((r + n.height) / 2) + "px"
                    }
                } else {
                    var s = 0;
                    if (o.length) s = 43 * o.length + 10 + 20;
                    e(i, s)
                }
            } else if (i.isShowGroup = "nb-hide", i.iconType = "icon", 1 == +i.isFixedPosition) {
                if ("left-center" === n.position || "right-center" === n.position) i.bottomDistance = "margin-top:-" + Math.ceil(n.height / 2) + "px"
            } else e(i);
            return i
        }, exports
    }), define("embed/icon/pc/iconConst", ["require"], function (require) {
        return { PREFIXID: "nb_icon_", CLASSREG: /icon-groups-item/ }
    }), define("embed/icon/iconPConfig", ["require", "./iconMain", "./iconHandler", "./iconData", "./pc/iconPc.tpl", "./pc/iconPHandler", "./pc/iconPData", "./pc/iconConst"], function (require) {
        return {
            package: "picon",
            resource: {
                main: require("./iconMain"),
                handler: require("./iconHandler"),
                data: require("./iconData"),
                tpl: require("./pc/iconPc.tpl"),
                phandler: require("./pc/iconPHandler"),
                pdata: require("./pc/iconPData"),
                consts: require("./pc/iconConst")
            },
            injection: [{
                id: "picon.phandler",
                method: {
                    clickIcon: ["pbase.dom", "data.config", "pmessage.pmain", "picon.consts"],
                    acceptClick: ["pchat.chat", "pbase.dom"],
                    bindEvent: ["pbase.events"],
                    getIconItemEle: ["pbase.dom", "picon.consts"]
                }
            }, { id: "picon.pdata", method: { dataProcess: ["pbase.lib"] } }, {
                id: "picon.main",
                method: {
                    init: ["picon.handler", "data.config"],
                    renderHtml: ["picon.data", "picon.tpl", "common.util", "pbase.dom", "common.view", "log.main"]
                }
            }, { id: "picon.data", method: { getIconTplData: ["data.config", "picon.pdata"] } }, {
                id: "picon.handler",
                method: { bindEvent: ["pbase.events", "picon.phandler"], handleAccept: ["picon.phandler"] }
            }],
            aspect: [{ id: "picon.main", pointCut: ["pmessage.main.init, , init"] }]
        }
    }), define("embed/invite/inviteMain", ["require"], function (require) {
        var exports = {};
        return window.GetQueryValue = function (e) {
            var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"), n = window.location.search.substr(1).match(t);
            if (null != n) return decodeURI(n[2]); else return null
        }, window.acceptSmartInvite = function (e, t) {
            var n = exports.getServerConfig(), i = e;
            if (navigator.userAgent.match(/(Android);?[\s\/]+([\d.]+)?/) && +n.getServer("configBox").webim.isMobileWebim) i = e.replace(/\"/g, '\\"');
            exports.setSmartChat(i, t, 1)
        }, exports.getServerConfig = function (e) {
            return e
        }, exports.setSmartChat = function (e, t, n, i, o) {
            if (e.adata) e.adata.IntelligentInviteMsg = n; else e.adata = { IntelligentInviteMsg: n };
            if (i) t.acceptInvite(o)
        }, exports.renderHtml = function (e, t, n, i, o, r) {
            var s = t.getWrap(), a = n.getInviteStyle(), c = i.template(o, a);
            e.appendHTML(c, s), r.process()
        }, exports.init = function (e) {
            exports.renderHtml(), e.init()
        }, exports
    }), define("embed/invite/inviteData", ["require"], function (require) {
        var exports = {};
        return exports.getInviteStyle = function (e, t) {
            var n = e.getServer("configBox").inviteBox;
            return t.dataProcess(n)
        }, exports
    }), define("embed/invite/inviteHandler", ["require"], function (require) {
        var exports = {};
        return exports.bindEvent = function (e, t, n) {
            n.process();
            var i = n.getClickEle();
            e.domOn(i, "click", n.acceptInvite, !1), e.domOn([t.PREFIXID + "cancel", t.PREFIXID + "tool", t.PREFIXIDSMART + "cancel", t.PREFIXIDSMART + "tool"], "click", n.refuseInvite, !1)
        }, exports.init = function () {
            exports.bindEvent()
        }, exports
    }), define("embed/invite/pc/invitePMain", ["require"], function (require) {
        var exports = {}, e = !1, t = "";
        return window.showOrdinaryInvite = function () {
            if (e) exports.delayToShow(t)
        }, exports.inviteWindowGuard = function (n, i, o, r, s) {
            var a = n.getServer("configBox").inviteBox, c = +n.getServer("configBox").webimConfig.isOpenAutoDirectCom,
                u = n.getServer("configBox").isWebim;
            if (n.isAutoInvite()) {
                if (+a.startPage === r.ALL_PAGE) e = !0;
                if (+a.startPage === r.ONLY_STARTPAGE) {
                    var d = i.get(r.INVITE_START_PAGE_COOKIE);
                    if (!d) e = !0; else if (d === location.href) e = !0; else if (document.referrer) {
                        var l = o.getHost(document.referrer);
                        if (l !== location.hostname) e = !0
                    } else {
                        var f = i.get(r.INVITE_COOKIE_NAME);
                        if (f) {
                            if (f !== location.hostname) e = !0
                        } else e = !0
                    }
                }
                if (e) {
                    var m = 1 == +n.getServer("configBox").seekIcon.iconType, p = +n.getServer("siteObj").isCsOnline;
                    if (0 == +a.likeCrm && 0 == +u && !m && c && p) return void (e = !1);
                    t = s
                }
            }
            var g = n.getServer("siteObj"), h = g.siteId, b = g.userId;
            if (0 == +a.likeCrm && (!c || 0 != +u)) {
                var v = document.createElement("script"), y = window.location.href, I = window.GetQueryValue("env");
                if ((y.indexOf("http://p.qiao.baidu.com/cps/web/pc_invite.html") > -1 || y.indexOf("http://p.qiao.baidu.com/cps/web/mobile_invite.html") > -1 || y.indexOf("http://proqiao.baidu.com") > -1) && I && "preonline" === I) v.src = "https://aifanfan.baidu-int.com/invite.js?appId=1&siteId=" + h + "&userId=" + b; else v.src = "https://aifanfan.baidu.com/invite.js?appId=1&siteId=" + h + "&userId=" + b;
                v.charset = "UTF-8", v.type = "text/javascript", v.onerror = function () {
                    window.showOrdinaryInvite()
                };
                var T = document.getElementsByTagName("head")[0] || document.body;
                T.insertBefore(v, T.firstElement || null)
            } else window.showOrdinaryInvite()
        }, exports.delayToShow = function (e, t, n, i) {
            var o = e.getServer("configBox").inviteBox, r = o.stayTime;
            if ("number" != typeof r || r < 0) r = 0; else r *= 1e3;
            t.set(n.INVITE_COOKIE_NAME, location.hostname, { path: "/" }), t.set(n.INVITE_START_PAGE_COOKIE, location.href, { path: "/" }), setTimeout(function () {
                exports.startCircleShow(i)
            }, r)
        }, exports.startCircleShow = function (e, t) {
            if (t && 4 !== t.status) e.visibleControl(1); else e.clearTimer(), e.visibleControl(1)
        }, exports.setStyle = function (e, t, n, i) {
            if (e.ie && !(e.ie > 7)) {
                var o = t.g("nb_invite_welcome"), r = i || o.firstChild, s = r.childNodes;
                if (s.length) for (var a = 0, c = s.length; a < c; a++) {
                    var u = s[a];
                    if (3 != +u.nodeType) {
                        for (var d = r.currentStyle, l = n.PLAIN_STYLE_CONFIG, f = 0, m = l.length; f < m; f++) {
                            var p = l[f];
                            if (d[p] && !u.style[p]) u.style[p] = d[p]
                        }
                        if ("STRONG" === u.nodeName) u.style.fontWeight = "bold"; else if ("EM" === u.nodeName) u.style.fontStyle = "italic";
                        if (u.childNodes.length) exports.setStyle(u)
                    }
                }
            }
        }, exports.process = function (e, t, n, i) {
            if (exports.setStyle(), 2 == +e.getServer("configBox").inviteBox.buttonType) t.init(i.g("nb_invite_input"));
            n.on("circleShowInvite", exports.inviteWindowGuard)
        }, exports
    }), define("embed/invite/pc/inviteHandler", ["require"], function (require) {
        var exports = {}, e = null, t = {};
        return exports.clearTimer = function () {
            clearTimeout(e)
        }, exports.countToShow = function (n) {
            clearTimeout(e);
            var i = +t.inviteInterval;
            if (t.reInvite === n.ALLOW_REINVITE && !isNaN(i) && +t.inviteInterval >= 0) e = setTimeout(function () {
                exports.visibleControl(1)
            }, 1e3 * i)
        }, exports.countToHide = function (n) {
            clearTimeout(e);
            var i = +t.closeTime;
            if (t.autoHide === n.ALLOW_AUTO_HIDE && !isNaN(i) && +t.closeTime >= 0) e = setTimeout(function () {
                exports.visibleControl(0)
            }, 1e3 * i)
        }, exports.visibleControl = function (e, n, i, o, r, s) {
            var a = n.getServer(), c = a.configBox, u = c.inviteBox, d = e.g(i.INVITEID);
            if (1 === s) {
                if (e.show([d]), r.logInviteShow(0, o.fromType), t.autoHide === i.ALLOW_AUTO_HIDE) exports.countToHide()
            } else if (0 === s) {
                if (e.hide([d]), 0 == +u.likeCrm && 0 == +c.isWebim && 1 == +c.webimConfig.isOpenAutoDirectCom && 1 != +c.seekIcon.iconType && 1 == +a.siteObj.isCsOnline) return !1;
                if (t.reInvite === i.ALLOW_REINVITE && t.autoInvite === i.ALLOW_AUTO_INVITE) exports.countToShow()
            }
        }, exports.refuseInvite = function (e, t, n, i) {
            if (2 === e.fromType) t.refuse();
            exports.visibleControl(0), exports.clickInvite("reject"), n.domStop(i)
        }, exports.acceptInvite = function (e, n, i, o, r, s) {
            if ("false" === o.getServer("siteObj").online) r.showInCenter(); else {
                if (2 == +t.buttonType && 3 !== t.isCustomerStyle) {
                    var a = i.g("nb_invite_input").value;
                    a = n.trim(a), t.inviteTxt = n.filterXSS(a)
                }
                e.accept()
            }
            if (s && 1 === s); else exports.visibleControl(0), exports.clickInvite("accept")
        }, exports.getClickEle = function (e) {
            var n = "";
            if (0 == +t.buttonType) n = e.PREFIXID + "wrap"; else n = e.PREFIXID + "ok";
            return n
        }, exports.clickInvite = function (e) {
        }, exports.process = function (e) {
            var n = e.getServer();
            t = n.configBox.inviteBox
        }, exports
    }), define("embed/invite/pc/invitePc.tpl", [], function () {
        return '\x3c!-- target: invite --\x3e<% if (data.hasOwnProperty(\'customerStylePro\') && +data.customerStylePro.isInviteFixed === 0) {%><ins class="nb-invite-wrap nb-invite-wrap-base nb-position-base <%customerStyleClass%> <%talkTypeStyle%>" id="nb_invite_wrap" style="width:<%width%>px;display:none;left:<%customerStylePro.inviteLeft%>px;top:<%customerStylePro.inviteTop%>px;"><% } else { %><ins class="nb-invite-wrap nb-invite-wrap-base nb-position-base nb-<%position%> <%customerStyleClass%> <%talkTypeStyle%>" id="nb_invite_wrap" style="width:<%width%>px;display:none;<%extraPostion%>;"><% } %><% if (+data.isCustomerStyle === 3) {%><ins class="nb-invite-body" style="background:url(<%customerStylePro.bgImgUrl%>) no-repeat;height:<%height%>px;background-size: 100% 100%;"><% if (+data.customerStylePro.isShowCloseBtn === 1) {%><ins class="blank-talk-style" id="nb_invite_tool" style="width:<%customerStylePro.closeBtnStyle.width%>;height:<%customerStylePro.closeBtnStyle.height%>;position: absolute;top:<%customerStylePro.closeBtnStyle.y%>;left:<%customerStylePro.closeBtnStyle.x%>;z-index: 1;"></ins><% } %><% if (+data.customerStylePro.isShowLaterBtn === 1) {%><ins class="blank-talk-style" id="nb_invite_cancel"style="width:<%customerStylePro.laterBtnStyle.width%>;height:<%customerStylePro.laterBtnStyle.height%>;position: absolute;top:<%customerStylePro.laterBtnStyle.y%>;left:<%customerStylePro.laterBtnStyle.x%>;z-index: 2;"></ins><% } %><% if (+data.customerStylePro.isShowConsultBtn === 1) {%><ins class="blank-talk-style" id="nb_invite_ok" style="width:<%customerStylePro.consultBtnStyle.width%>;height:<%customerStylePro.consultBtnStyle.height%>;position: absolute;top:<%customerStylePro.consultBtnStyle.y%>;left:<%customerStylePro.consultBtnStyle.x%>;z-index: 3;"></ins><% } %></ins><% } else { %><% if (+data.isCustomerStyle === 2) {%><ins class="nb-invite-body nb-invite-skin-xc-<%skinIndex%>" style="height:<%height%>px;"><% } else if (+data.isCustomerStyle === 1) { %><ins class="nb-invite-body nb-invite-skin-<%skinIndex%>" style="height:<%height%>px;<%customerStyle.backImg%>;background-size: 100% 100%;"><% } else { %><ins class="nb-invite-body nb-invite-skin-<%skinIndex%>" style="height:<%height%>px;<%customerStyle.backImg%>;"><% } %><ins class="nb-invite-tool nb-invite-tool-base" id="nb_invite_tool" style=""></ins><ins class="nb-invite-text nb-invite-text-base"><ins class="nb-invite-welcome nb-invite-welcome-base <%isShowText%>" id="nb_invite_welcome"><%welcome%></ins></ins><% if (data.buttonType === 1) { %><ins class="nb-invite-btn-base nb-invte-btns-<%skinIndex%>"><ins class="nb-invite-cancel nb-invite-cancel-base" id="nb_invite_cancel">\u7a0d\u540e\u518d\u8bf4</ins><%if (data.isCustomerStyle == 1) { %><ins class="nb-invite-ok nb-invite-ok-base" id="nb_invite_ok" style="<%customerStyle.acceptBgColor%>;<%customerStyle.acceptFontColor%>;">\u73b0\u5728\u54a8\u8be2</ins><% } else { %><ins class="nb-invite-ok nb-invite-ok-base" id="nb_invite_ok">\u73b0\u5728\u54a8\u8be2</ins><% } %></ins><% } %></ins><% if (data.buttonType == 2) { %><ins class="nb-invite-btn-skin-<%skinIndex%> nb-invte-btns-<%buttonType%>"><%if (data.isCustomerStyle == 1) { %><ins class="nb-invite-ok nb-invite-ok-base nb-direct-send-btn" id="nb_invite_ok" style="<%customerStyle.acceptBgColor%>;<%customerStyle.acceptFontColor%>;">\u53d1\u9001</ins><% } else { %><ins class="nb-invite-ok nb-invite-ok-base nb-direct-send-btn" id="nb_invite_ok">\u53d1\u9001</ins><% } %><ins class="nb-invite-input-wrap"><input type="text" class="nb-invite-input" id="nb_invite_input" maxlength="200" placeholder="\u60a8\u53ef\u4ee5\u76f4\u63a5\u5728\u8fd9\u91cc\u548c\u6211\u4eec\u8054\u7cfb" data-ph="\u60a8\u53ef\u4ee5\u76f4\u63a5\u5728\u8fd9\u91cc\u548c\u6211\u4eec\u8054\u7cfb"></ins></ins><% } %><% } %></ins>\x3c!-- end --\x3e'
    }), define("embed/invite/pc/invitePcData", ["require"], function (require) {
        var exports = {};
        return exports.dataProcess = function (e, t, n) {
            var i = t.extend({}, n);
            if (n.hasOwnProperty("customerStylePro") && 0 === n.customerStylePro.isInviteFixed) {
                var o = parseInt(n.customerStylePro.inviteLeft, 10), r = parseInt(n.customerStylePro.inviteTop, 10);
                o = o > window.innerWidth - n.width - 35 ? window.innerWidth - n.width - 35 : o, o = o < 35 ? 35 : o, r = r > window.innerHeight - n.height - 35 ? window.innerHeight - n.height - 35 : r, r = r < 35 ? 35 : r, n.customerStylePro.inviteLeft = o, n.customerStylePro.inviteTop = r
            }
            var s = "";
            if ("middle" === n.position) s = "margin-left: -" + Math.ceil(n.width / 2) + "px;margin-top: -" + Math.ceil(n.height / 2) + "px";
            if (i.extraPostion = s, i.isCustomerStyle) {
                i.customerStyleClass = "customer-invite-style";
                var a = i.customerStyle;
                if (a.backImg = "background:url(" + a.backImg + ")", a.acceptBgColor = "background-color:" + n.customerStyle.acceptBgColor, a.acceptFontColor = "color:" + n.customerStyle.acceptFontColor, 2 == +n.buttonType) a.acceptBgColor = "background-color:" + n.sendButton.bgColor, a.acceptFontColor = "color:" + n.sendButton.fontColor
            }
            if (2 == +n.buttonType) {
                if (i.talkTypeStyle = "driect-talk-style", "right-bottom" === n.position || "left-bottom" === n.position) i.position = n.position + "-direct"
            } else if (0 == +n.buttonType) i.talkTypeStyle = "blank-talk-style";
            if (i.isShowText = ["nb-hide", "nb-show"][+n.isShowText], "false" === e.getServer("siteObj").online) i.isStop = !0;
            return i
        }, exports
    }), define("embed/invite/pc/inviteConsts", [], function () {
        return {
            INVITEID: "nb_invite_wrap",
            WRAPID: "newBridge",
            PREFIXID: "nb_invite_",
            ALLOW_REINVITE: 1,
            DENY_REINVITE: 0,
            ALLOW_AUTO_HIDE: 1,
            DENY_AUTO_HIDE: 0,
            ALLOW_AUTO_INVITE: 1,
            ONLY_STARTPAGE: 0,
            ALL_PAGE: 1,
            INVITE_COOKIE_NAME: "nb-referrer-hostname",
            INVITE_START_PAGE_COOKIE: "nb-start-page-url",
            PLAIN_STYLE_CONFIG: ["fontSize", "fontStyle", "fontWeight", "textDecoration", "fontFamily", "color"]
        }
    }), define("embed/mobilelite/lib/md5.min", ["require"], function (require) {
        function e(e, t) {
            var n = (65535 & e) + (65535 & t);
            return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
        }

        function t(e, t) {
            return e << t | e >>> 32 - t
        }

        function n(n, i, o, r, s, a) {
            return e(t(e(e(i, n), e(r, a)), s), o)
        }

        function i(e, t, i, o, r, s, a) {
            return n(t & i | ~t & o, e, t, r, s, a)
        }

        function o(e, t, i, o, r, s, a) {
            return n(t & o | i & ~o, e, t, r, s, a)
        }

        function r(e, t, i, o, r, s, a) {
            return n(t ^ i ^ o, e, t, r, s, a)
        }

        function s(e, t, i, o, r, s, a) {
            return n(i ^ (t | ~o), e, t, r, s, a)
        }

        function a(t, n) {
            t[n >> 5] |= 128 << n % 32, t[14 + (n + 64 >>> 9 << 4)] = n;
            var a, c, u, d, l, f = 1732584193, m = -271733879, p = -1732584194, g = 271733878;
            for (a = 0; a < t.length; a += 16) c = f, u = m, d = p, l = g, f = i(f, m, p, g, t[a], 7, -680876936), g = i(g, f, m, p, t[a + 1], 12, -389564586), p = i(p, g, f, m, t[a + 2], 17, 606105819), m = i(m, p, g, f, t[a + 3], 22, -1044525330), f = i(f, m, p, g, t[a + 4], 7, -176418897), g = i(g, f, m, p, t[a + 5], 12, 1200080426), p = i(p, g, f, m, t[a + 6], 17, -1473231341), m = i(m, p, g, f, t[a + 7], 22, -45705983), f = i(f, m, p, g, t[a + 8], 7, 1770035416), g = i(g, f, m, p, t[a + 9], 12, -1958414417), p = i(p, g, f, m, t[a + 10], 17, -42063), m = i(m, p, g, f, t[a + 11], 22, -1990404162), f = i(f, m, p, g, t[a + 12], 7, 1804603682), g = i(g, f, m, p, t[a + 13], 12, -40341101), p = i(p, g, f, m, t[a + 14], 17, -1502002290), m = i(m, p, g, f, t[a + 15], 22, 1236535329), f = o(f, m, p, g, t[a + 1], 5, -165796510), g = o(g, f, m, p, t[a + 6], 9, -1069501632), p = o(p, g, f, m, t[a + 11], 14, 643717713), m = o(m, p, g, f, t[a], 20, -373897302), f = o(f, m, p, g, t[a + 5], 5, -701558691), g = o(g, f, m, p, t[a + 10], 9, 38016083), p = o(p, g, f, m, t[a + 15], 14, -660478335), m = o(m, p, g, f, t[a + 4], 20, -405537848), f = o(f, m, p, g, t[a + 9], 5, 568446438), g = o(g, f, m, p, t[a + 14], 9, -1019803690), p = o(p, g, f, m, t[a + 3], 14, -187363961), m = o(m, p, g, f, t[a + 8], 20, 1163531501), f = o(f, m, p, g, t[a + 13], 5, -1444681467), g = o(g, f, m, p, t[a + 2], 9, -51403784), p = o(p, g, f, m, t[a + 7], 14, 1735328473), m = o(m, p, g, f, t[a + 12], 20, -1926607734), f = r(f, m, p, g, t[a + 5], 4, -378558), g = r(g, f, m, p, t[a + 8], 11, -2022574463), p = r(p, g, f, m, t[a + 11], 16, 1839030562), m = r(m, p, g, f, t[a + 14], 23, -35309556), f = r(f, m, p, g, t[a + 1], 4, -1530992060), g = r(g, f, m, p, t[a + 4], 11, 1272893353), p = r(p, g, f, m, t[a + 7], 16, -155497632), m = r(m, p, g, f, t[a + 10], 23, -1094730640), f = r(f, m, p, g, t[a + 13], 4, 681279174), g = r(g, f, m, p, t[a], 11, -358537222), p = r(p, g, f, m, t[a + 3], 16, -722521979), m = r(m, p, g, f, t[a + 6], 23, 76029189), f = r(f, m, p, g, t[a + 9], 4, -640364487), g = r(g, f, m, p, t[a + 12], 11, -421815835), p = r(p, g, f, m, t[a + 15], 16, 530742520), m = r(m, p, g, f, t[a + 2], 23, -995338651), f = s(f, m, p, g, t[a], 6, -198630844), g = s(g, f, m, p, t[a + 7], 10, 1126891415), p = s(p, g, f, m, t[a + 14], 15, -1416354905), m = s(m, p, g, f, t[a + 5], 21, -57434055), f = s(f, m, p, g, t[a + 12], 6, 1700485571), g = s(g, f, m, p, t[a + 3], 10, -1894986606), p = s(p, g, f, m, t[a + 10], 15, -1051523), m = s(m, p, g, f, t[a + 1], 21, -2054922799), f = s(f, m, p, g, t[a + 8], 6, 1873313359), g = s(g, f, m, p, t[a + 15], 10, -30611744), p = s(p, g, f, m, t[a + 6], 15, -1560198380), m = s(m, p, g, f, t[a + 13], 21, 1309151649), f = s(f, m, p, g, t[a + 4], 6, -145523070), g = s(g, f, m, p, t[a + 11], 10, -1120210379), p = s(p, g, f, m, t[a + 2], 15, 718787259), m = s(m, p, g, f, t[a + 9], 21, -343485551), f = e(f, c), m = e(m, u), p = e(p, d), g = e(g, l);
            return [f, m, p, g]
        }

        function c(e) {
            var t, n = "", i = 32 * e.length;
            for (t = 0; t < i; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
            return n
        }

        function u(e) {
            var t, n = [];
            for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
            var i = 8 * e.length;
            for (t = 0; t < i; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
            return n
        }

        function d(e) {
            return c(a(u(e), 8 * e.length))
        }

        function l(e, t) {
            var n, i, o = u(e), r = [], s = [];
            if (r[15] = s[15] = void 0, o.length > 16) o = a(o, 8 * e.length);
            for (n = 0; n < 16; n += 1) r[n] = 909522486 ^ o[n], s[n] = 1549556828 ^ o[n];
            return i = a(r.concat(u(t)), 512 + 8 * t.length), c(a(s.concat(i), 640))
        }

        function f(e) {
            var t, n, i = "0123456789abcdef", o = "";
            for (n = 0; n < e.length; n += 1) t = e.charCodeAt(n), o += i.charAt(t >>> 4 & 15) + i.charAt(15 & t);
            return o
        }

        function m(e) {
            return unescape(encodeURIComponent(e))
        }

        function p(e) {
            return d(m(e))
        }

        function g(e) {
            return f(p(e))
        }

        function h(e, t) {
            return l(m(e), m(t))
        }

        function b(e, t) {
            return f(h(e, t))
        }

        var exports = {};
        return exports.md5 = function (e, t, n) {
            if (!t) if (!n) return g(e); else return p(e);
            if (!n) return b(t, e); else return h(t, e)
        }, exports.md5
    }), define("embed/invite/pc/smartyInvitePC", ["require", "../../mobilelite/lib/md5.min", "../../mobilelite/lib/ajax"], function (require) {
        function e() {
            var e;
            if (/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(navigator.userAgent)) e = 2; else e = 1;
            return e
        }

        function t() {
            if ("" === (d = document.referrer)) return !1;
            var e = ["www.baidu.com", "www.so.com", "www.sogou.com"], t = d.split("/")[2];
            if (-1 !== e.indexOf(t)) return !0; else return !1
        }

        function n(e, t) {
            var n = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"), i = t.match(n);
            if (null != i) return decodeURIComponent(i[2]); else return null
        }

        function i() {
            if (!t()) return l = "";
            var e = d.split("/")[2], i = d.split("?")[1];
            if ("www.baidu.com" === e) return l = n("word", i), f = n("eqid", i), l || f || ""; else if ("www.so.com" === e) return (l = n("q", i)) || ""; else if ("www.sogou.com" === e) return (l = n("query", i)) || "";
            return ""
        }

        function o(e, t) {
            var n = e + "=", i = "";
            if (document.cookie.length > 0) {
                var o = document.cookie.indexOf(n);
                if (o > -1) {
                    o += n.length;
                    var r = document.cookie.indexOf(";", o);
                    if (-1 === r) r = document.cookie.length;
                    i = t ? unescape(document.cookie.substring(o, r)) : document.cookie.substring(o, r)
                }
            }
            return i
        }

        function r() {
            var e = new Date, t = e.getFullYear(), n = e.getMonth() + 1;
            n = n < 10 ? "0" + n : n;
            var i = e.getDate();
            i = i < 10 ? "0" + i : i;
            var o = e.getHours();
            return o = o < 10 ? "0" + o : o, u("" + t + n + i + o)
        }

        function s() {
            var e = d;
            if (t()) {
                if (0 === e.indexOf("https://www.baidu.com")) {
                    var n = "", i = "", o = e.indexOf("url");
                    if (-1 !== o) {
                        n = e.slice(0, o);
                        var r = e.indexOf("&", o);
                        if (-1 !== r) i = e.slice(r + 1);
                        e = n + i
                    }
                }
                return e
            }
            return e
        }

        function a(e, t) {
            if (e.stayTime = +e.stayTime, e.inviteInterval = +e.inviteInterval, e.closeTime = +e.closeTime, 0 == +e.likeCrm && 1 !== t && "[object Object]" === Object.prototype.toString.call(e.smartBaseSetting)) a(e.smartBaseSetting, 1)
        }

        function c(e, t) {
            e.logStopSmartInvite(t)
        }

        var u = require("../../mobilelite/lib/md5.min"), exports = {}, d = "", l = "", f = "", m = "",
            p = require("../../mobilelite/lib/ajax"), g = [], h = 0, b = "";
        return exports.getIntelWelLan = function (t, a, c, u, l) {
            var f = n("link", d), m = i(), g = {
                query: m,
                title: "",
                creative: "",
                ucid: u.userId,
                trade: c.tradeId,
                siteid: u.siteId,
                baiduid: o("BAIDUID"),
                bid: a.bid,
                refer: s()
            };
            if (g.time = (new Date).getTime(), g.token = r(), g.device = e(), g.funtype = 2, f) g.sublink = f;
            var h = {
                data: g, type: "jsonp", timeout: 5e3, onsuccess: function (e) {
                    if (0 == +e.status) {
                        e = e.data;
                        var n = e.smartText || [];
                        if (n.length > 0) {
                            t.smartCommunication.getIntelWelLan = 1;
                            var i = Math.floor(Math.random() * n.length), o = n[i];
                            if (a.adata) a.adata.IntelWelLanMsg = o; else a.adata = { IntelWelLanMsg: o }
                        } else t.logStopACOrIW(-1, 4)
                    }
                    l && l()
                }, onfail: function (e) {
                    t.logStopACOrIW(-1, 5), l && l()
                }
            };
            p.ajax("/smartbox/wise/query", h)
        }, exports.hasShowInvite = 0, exports.isFininshGetPoint = 0, exports.ideaType = -1, exports.smartBackImg = "", exports.diyAutoInvite = -1, exports.isHasSmartAccess = 0, exports.isFinshGetSmartAccessWise = 0, exports.isShowInIconUp = !1, exports.timeStart = 0, exports.timeEnd = 0, exports.timeSTE = 0, exports.isUseSmartyInvite = 0, exports.setFinshAccessAndWise = function (e, t) {
            if (exports.isFinshGetSmartAccessWise = 1, exports.timeEnd = (new Date).getTime(), exports.timeSTE = (exports.timeEnd - exports.timeStart) / 1e3, 1 == +e.delayToShowTimer) e.inviteWindowGuard1(); else e.delayToShowTimer = 1
        }, exports.init = function (e, t, o) {
            exports.timeStart = (new Date).getTime();
            var r = e.getServer(), s = r.configBox;
            a(s.inviteBox);
            var u;
            if (0 == +s.inviteBox.likeCrm && 0 == +s.isWebim && 1 == +s.webimConfig.isOpenAutoDirectCom && 1 != +s.seekIcon.iconType && 1 == +r.siteObj.isCsOnline) {
                if (o.adata) o.adata.vstDirectChat = "\u7cfb\u7edf\u53d1\u8d77\u76f4\u63a5\u6c9f\u901a"; else o.adata = { vstDirectChat: "\u7cfb\u7edf\u53d1\u8d77\u76f4\u63a5\u6c9f\u901a" };
                return u = 10, c(t, u), exports.setFinshAccessAndWise(), !1
            }
            if (0 == +s.inviteBox.likeCrm) if (1 == +s.inviteBox.smartBoxEnable && 0 != +s.inviteBox.smartBoxOpen) exports.diyAutoInvite = s.inviteBox.autoInvite, s.inviteBox.autoInvite = 1;
            if (0 != +s.inviteBox.likeCrm) return u = 7, c(t, u), exports.setFinshAccessAndWise(), !1;
            if (1 !== s.inviteBox.smartBoxEnable || 0 === s.inviteBox.smartBoxOpen) {
                if (1 !== s.inviteBox.smartBoxEnable) u = 3; else if (0 === s.inviteBox.smartBoxOpen) u = 4;
                return c(t, u), exports.setFinshAccessAndWise(), !1
            }
            var l = r.siteObj, f = i();
            m = n("link", d);
            var p = s.inviteBox;
            if (void 0 !== p.license) {
                p.license = String(p.license);
                var g = p.license.split("").reverse();
                if (0 == +(h = g[0])) p.smartBaseSetting.isCustomerStyle = 0, p.tradeId = 0
            } else h = 0, p.smartBaseSetting.isCustomerStyle = 0, p.tradeId = 0;
            getWiseQuery(o, t, f, m, s.inviteBox, l)
        }, exports.getSmartInviteClass = function () {
            if (1 === exports.isShowWithToolbar) return "nb-invite-wrap-smartInvite-0--1"; else return "nb-invite-wrap-smartInvite-"
        }, exports.hideInvite = function (e) {
            exports.isHideInvite = 1
        }, exports.getSmartInviteText = function (e) {
            if (g.length > 0) {
                var t = Math.floor(Math.random() * g.length);
                return g[t]
            }
            return "\u6b22\u8fce\u60a8\u6765\u54a8\u8be2"
        }, exports.updateWelcomText = function (e, t, n, i, o) {
            if (1 === this.isUseSmartyInvite && 1 === this.isHasSmartAccess) {
                exports.hasShowInvite = 1;
                var r = this.getSmartInviteText(i), s = r;
                if (-1 !== s.indexOf('"') && g.length > 0) {
                    var a = s.match(/".*?"/)[0], c = s.split(a), u = '<ins class="nb-invite-point">' + a + "</ins>";
                    s = c[0] + u + c[1]
                }
                if (i.smartBaseSetting && i.smartBaseSetting.welcome && "" !== exports.smartBackImg) s = i.smartBaseSetting.welcome.replace("\u60a8\u662f\u5426\u60f3\u54a8\u8be2\u5173\u4e8eâ€œxxxâ€\u76f8\u5173\u7684\u5185\u5bb9\uff1f", s);
                b = r;
                var d = document.querySelector(".nb-smartInvite-text");
                if (d) d.innerHTML = s;
                if (n.smartInvite.text = r, e.adata) e.adata.IntelligentInviteMsg = r; else e.adata = { IntelligentInviteMsg: r }
            }
        }, exports.getNowWelcomText = function () {
            return b
        }, exports.getAdata = function () {
            return { IntelligentInviteMsg: b }
        }, exports.getPosition = function () {
            return { invite: "", arrow: 0 }
        }, exports
    }), define("embed/invite/invitePConfig", ["require", "./inviteMain", "./inviteData", "./inviteHandler", "./pc/invitePMain", "./pc/inviteHandler", "./pc/invitePc.tpl", "./pc/invitePcData", "./pc/inviteConsts", "./pc/smartyInvitePC"], function (require) {
        return {
            package: "pinvite",
            resource: {
                main: require("./inviteMain"),
                data: require("./inviteData"),
                handler: require("./inviteHandler"),
                pmain: require("./pc/invitePMain"),
                phandler: require("./pc/inviteHandler"),
                tpl: require("./pc/invitePc.tpl"),
                pdata: require("./pc/invitePcData"),
                consts: require("./pc/inviteConsts"),
                smartyInvite: require("./pc/smartyInvitePC")
            },
            injection: [{
                id: "pinvite.main",
                method: {
                    init: ["pinvite.handler"],
                    renderHtml: ["pbase.dom", "common.view", "pinvite.data", "common.util", "pinvite.tpl", "pinvite.pmain"],
                    setSmartChat: ["core.config", "pinvite.phandler"]
                }
            }, { id: "pinvite.data", method: { getInviteStyle: ["data.config", "pinvite.pdata"] } }, {
                id: "pinvite.handler",
                method: { bindEvent: ["pbase.events", "pinvite.consts", "pinvite.phandler"] }
            }, {
                id: "pinvite.pmain",
                method: {
                    setStyle: ["pbase.browser", "pbase.dom", "pinvite.consts"],
                    inviteWindowGuard: ["data.config", "common.cookie", "common.util", "pinvite.consts"],
                    delayToShow: ["data.config", "common.cookie", "pinvite.consts"],
                    startCircleShow: ["pinvite.phandler"],
                    process: ["data.config", "common.placeHolder", "core.main", "pbase.dom"]
                }
            }, { id: "pinvite.pdata", method: { dataProcess: ["data.config", "pbase.lib"] } }, {
                id: "pinvite.phandler",
                method: {
                    process: ["data.config"],
                    acceptInvite: ["pchat.chat", "common.util", "pbase.dom", "data.config", "pmessage.pmain"],
                    refuseInvite: ["core.config", "pchat.chat", "pbase.events"],
                    visibleControl: ["pbase.dom", "data.config", "pinvite.consts", "core.config", "log.main"],
                    countToHide: ["pinvite.consts"],
                    countToShow: ["pinvite.consts"],
                    getClickEle: ["pinvite.consts"]
                }
            }, { id: "pinvite.smartyInvite", method: { getIntelWelLan: ["log.main"] } }],
            aspect: [{ id: "pinvite.main", pointCut: ["picon.main.init, , init"] }]
        }
    }), define("embed/message/messageMain", ["require"], function (require) {
        var exports = {}, e = { SHOW: "nb-show", HIDE: "nb-hide" };
        return exports.renderHtml = function (t, n, i, o, r, s, a) {
            var c = n.getMessagetyle();
            if (c.isShow === e.SHOW) a.logMessageAutoShow();
            var u = r.getWrap(), d = i.template(t, c);
            o.appendHTML(d, u), s.process(c)
        }, exports.init = function (e) {
            exports.renderHtml(), e.init()
        }, exports
    }), define("embed/message/messageData", ["require"], function (require) {
        var exports = {};
        return exports.getMessagetyle = function (e, t) {
            var n = e.getServer("configBox").noteBoard;
            return t.dataProcess(n)
        }, exports
    }), define("embed/message/messageHandler", ["require"], function (require) {
        var exports = {};
        return exports.sendMessage = function (e) {
            e.sendMessage()
        }, exports.closeMessage = function (e) {
            e.closeMessage()
        }, exports.bindEvent = function (e, t, n) {
            e.domOn(t.PREFIXNODEID + "send", "click", exports.sendMessage, !0), e.domOn(t.PREFIXNODEID + "close", "click", exports.closeMessage, !0), e.domOn(t.PREFIXNODEID + "return", "click", exports.closeMessage, !0), e.domOn(t.PREFIXNODEID + "verifyimg", "click", n.setVerifyCode, !0), n.process()
        }, exports.init = function () {
            exports.bindEvent()
        }, exports
    }), define("embed/message/pc/messagePMain", ["require"], function (require) {
        var exports = {};
        return exports.showInCenter = function (e) {
            e.showInCenter()
        }, exports.hide = function (e) {
            e.hide(["nb-nodeboard"])
        }, exports.show = function (e) {
            e.show(["nb-nodeboard"])
        }, exports.initExtSelect = function (e, t, n, i) {
            if (i) for (var o = 0, r = i.length; o < r; o++) {
                var s = [];
                if (i[o].subItems) {
                    s = s.concat(i[o].subItems);
                    var a = new n;
                    a.init({
                        id: "node_select_wrap_" + i[o].index,
                        layerCont: "nb_nodeboard",
                        name: i[o].name,
                        content: s,
                        readonly: "readonly",
                        selectIndex: 0,
                        zIndex: 99,
                        style: { width: 220, maxHeight: 300, zIndex: 99 }
                    });
                    var c = e.getElementsByClass("custom-select-title-input", a.container)[0];
                    if (c) e.addClass(c, t.INPUTSELECTOR)
                }
            }
        }, exports.process = function (e, t) {
            exports.initExtSelect(e, t.itemsExt)
        }, exports
    }), define("embed/message/pc/messagePData", ["require"], function (require) {
        var exports = {};
        return exports.getMsgText = function (e, t) {
            return e.MESSAGERESULTTIP[t]
        }, exports.getNodeText = function (e, t) {
            var n = e.MESSAGWTIP;
            if (t) n = n[t];
            return n
        }, exports.dataProcess = function (e, t, n, i, o) {
            var r = i.extend({}, o);
            r.nodeBtnSkinStyle = "nb-nodeboard-send-btn-" + o.skinIndex;
            for (var s = [].concat(r.items, r.itemsExt), a = 0, c = s.length; a < c; a++) {
                var u = s[a];
                if (u.index = c - a, u.required) u.requireTxt = "\uff08\u5fc5\u586b\uff09"
            }
            var d = e.getServer("siteObj"), l = d.online;
            if (1 == +o.isAlwaysDisplay) r.isShow = "nb-show"; else if (2 == +o.isAlwaysDisplay) r.isShow = "nb-hide"; else r.isShow = "true" === l ? "nb-hide" : "nb-show";
            if (r.companyStyle = 1 === o.displayCompany ? "block" : "none", r.cpyInfo = n.filterXSS(o.cpyInfo), r.cpyTel = n.filterXSS(o.cpyTel), t.ie < 10) {
                var f = this.getNodeText();
                r.content = f.content.text, r.name = f.visitorName.text, r.phone = f.visitorPhone.text, r.email = f.visitorEmail.text, r.address = f.visitorAddress.text
            }
            if (t.ie) r.color = "color: #ababab";
            return r.userId = d.userId, r.domain = d.webRoot, r
        }, exports
    }), define("embed/message/pc/messagePc.tpl", [], function () {
        return '\x3c!-- target: nodeBoard --\x3e<ins class="nb-nodeboard-base nb-nodeboard-position-base nb-nodeboard-<%position%> <%isShow%>" id="nb_nodeboard"><ins class="nb-nodeboard-contain-base nb-nodeboard-contain"><% if (!data.themeType) { %><ins class="nb-nodeboard-top nb-nodeboard-top-<%skinIndex%>" style="background-color: transparent;"><% } %><% if (data.themeType == 1) { %><ins class="nb-nodeboard-top" style="background-color: <%customerColor%>;background-image: none;"><% } %><ins class="nb-head-title">\u8bf7\u60a8\u7559\u8a00</ins><ins class="nb-nodeboard-close" id="nb_nodeboard_close" data-type="min"></ins></ins><% if (data.displayCompany == 1) { %><ins id="nb_nodeboard_text" class="nb-nodeboard-text"><p class="nb-nodeboard-company"><%cpyInfo%></p><p class="nb-nodeboard-link"><%cpyTel%></p></ins><% } %><form id="nb_nodeboard_form" autocomplete="off" class="nb-board-form" action="<%domain%>/bookmanage/saveBook.action?userId=<%userId%>" method="post" accept-charset="utf-8"><ins id="nb_nodeboard_set" class="nb-nodeboard-set"><ins class="nb-nodeboard-content"><textarea id="nb-nodeboard-set-content-js" name="content" data-ph="\u8bf7\u5728\u6b64\u8f93\u5165\u7559\u8a00\u5185\u5bb9\uff0c\u6211\u4eec\u4f1a\u5c3d\u5feb\u4e0e\u60a8\u8054\u7cfb\u3002\uff08\u5fc5\u586b\uff09" placeholder="\u8bf7\u5728\u6b64\u8f93\u5165\u7559\u8a00\u5185\u5bb9\uff0c\u6211\u4eec\u4f1a\u5c3d\u5feb\u4e0e\u60a8\u8054\u7cfb\u3002\uff08\u5fc5\u586b\uff09" class="nb-nodeboard-set-content nb-nodeboard-param"><%content%></textarea></ins><% for (var i = 0, l = data.items.length; i < l; i++) { %><% if (data.items[i].isShow == 1 && data.items[i].name == \'visitorName\') { %><ins class="nb-nodeboard-name" style="z-index:<%items[i].index%>;"><ins class="nb-nodeboard-icon nodeName"></ins><input id="nb_nodeboard_set_name" data-write="<%items[i].required%>" name="visitorName" maxlength="30" class="nb-nodeboard-input nb-nodeboard-param" type="text" data-ph="\u59d3\u540d<%items[i].requireTxt%>" placeholder="\u59d3\u540d<%items[i].requireTxt%>"></ins><% } %><% if (data.items[i].isShow == 1 && data.items[i].name == \'visitorPhone\') { %><ins class="nb-nodeboard-name" id="nb_nodeboard_phone" style="z-index:<%items[i].index%>;"><ins class="nb-nodeboard-icon nodePhone"></ins><input id="nb_nodeboard_set_phone" name="visitorPhone" maxlength="30" class="nb-nodeboard-input nb-nodeboard-param" data-write="<%items[i].required%>" type="text" data-ph="\u7535\u8bdd<%items[i].requireTxt%>" placeholder="\u7535\u8bdd<%items[i].requireTxt%>"></ins><% } %><% if (data.items[i].isShow == 1 && data.items[i].name == \'visitorEmail\') { %><ins class="nb-nodeboard-name" id="nb_nodeboard_mail" style="z-index:<%items[i].index%>;"><ins class="nb-nodeboard-icon nodeMail"></ins><input id="nb_nodeboard_set_email" name="visitorEmail" maxlength="50" class="nb-nodeboard-input nb-nodeboard-param" type="text" data-write="<%items[i].required%>" data-ph="\u90ae\u7bb1<%items[i].requireTxt%>" placeholder="\u90ae\u7bb1<%items[i].requireTxt%>"></ins><% } %><% if (data.items[i].isShow == 1 && data.items[i].name == \'visitorAddress\') { %><ins class="nb-nodeboard-name" style="z-index:<%items[i].index%>;"><ins class="nb-nodeboard-icon nodeAddress"></ins><input id="nb_nodeboard_set_address" name="visitorAddress" class="nb-nodeboard-input nb-nodeboard-param" maxlength="50" type="text" data-write="<%items[i].required%>" data-ph="\u5730\u5740<%items[i].requireTxt%>" placeholder="\u5730\u5740<%items[i].requireTxt%>"></ins><% } %><% } %><% for (var j = 0, h = data.itemsExt.length; j < h; j++) { %><% if (data.itemsExt[j].subItems && data.itemsExt[j].isShow) { %><ins class="nb-nodeboard-ext-select" style="z-index:<%itemsExt[j].index%>;"><ins class="nb-nodeboard-select-title"><%itemsExt[j].question%></ins><ins class="nb-nodeboard-select-wrap" id="node_select_wrap_<%itemsExt[j].index%>"></ins></ins><% } %><% if (!data.itemsExt[j].subItems && data.itemsExt[j].isShow) { %><ins class="nb-nodeboard-name nb-nodeboard-ext-input" style="z-index:<%itemsExt[j].index%>;"><ins class="nb-nodeboard-icon nodeExt"></ins><input id="nb_nodeboard_ext_<%itemsExt[j].index%>" name="<%itemsExt[j].name%>" class="nb-nodeboard-input nb-nodeboard-param" maxlength="50" type="text" data-write="<%itemsExt[j].required%>" data-ph="<%itemsExt[j].question%><%itemsExt[j].requireTxt%>" placeholder="<%itemsExt[j].question%><%itemsExt[j].requireTxt%>"></ins><% } %><% } %></ins></form><ins class="nb-nodeboard-success" id="nb_nodeboard_success"><ins class="nb-success-box"><ins class="nb-success-icon"></ins><ins class="nb-success-title" id="nb_node_messagetitle">\u611f\u8c22\u7559\u8a00</ins><ins class="nb-success-content" id="nb_node_messagecontent">\u6211\u4eec\u4f1a\u5c3d\u5feb\u4e0e\u60a8\u8054\u7cfb</ins><% if (!data.themeType) { %><ins id="nb_nodeboard_return" needVerifyCode="<%needVerifyCode%>" class="nb-sucess-close" needVerifyCode=${data.needVerifyCode}>\u5173\u95ed</ins><% } %><% if (data.themeType == 1) { %><ins id="nb_nodeboard_return" needVerifyCode="<%needVerifyCode%>" class="nb-sucess-close" style="background-color: <%customerColor%>;background-image: none;">\u5173\u95ed</ins><% } %></ins></ins><ins class="nb-nodeboard-send" id="nb_node_contain"><% if (!data.themeType) { %><ins id="nb_nodeboard_send" needVerifyCode="<%needVerifyCode%>" class="nb-nodeboard-send-btn <%nodeBtnSkinStyle%>">\u53d1\u9001</ins><% } %><% if (data.themeType == 1) { %><ins id="nb_nodeboard_send" needVerifyCode="<%needVerifyCode%>" class="nb-nodeboard-send-btn <%nodeBtnSkinStyle%>" style="background-color: <%customerColor%>;background-image: none;">\u53d1\u9001</ins><% } %></ins></ins></ins>\x3c!-- end --\x3e'
    }), define("embed/message/pc/messagePHandler", ["require"], function (require) {
        function e(e, t) {
            if (i = {
                nodeContain: e.g("nb_nodeboard"),
                tipsEle: e.g(t.PREFIXNODEID + "tips"),
                nodeTool: e.g(t.PREFIXNODEID + "close"),
                nodeText: e.g(t.PREFIXNODEID + "text"),
                nodeSet: e.g(t.PREFIXNODESET),
                nodeSend: e.g(t.PREFIIXNODE + "contain"),
                nodeSendBtn: e.g(t.PREFIXNODEID + "send"),
                nodeVerifyImg: e.g(t.PREFIXNODEID + "verifyimg"),
                nodeSuccesss: e.g(t.PREFIXNODEID + "success"),
                messageTitle: e.g(t.PREFIIXNODE + "messagetitle"),
                messageContent: e.g(t.PREFIIXNODE + "messagecontent"),
                messageBtn: e.g(t.PREFIXNODEID + "return")
            }, i.nodeContain.className.indexOf("left") >= 0) o = { left: "1px", right: "auto" }; else o = {
                left: "auto",
                right: "1px"
            }
        }

        function t(e, t) {
            if ("enable" === t) e.removeClass(i.nodeSendBtn, "message-disable"); else e.addClass(i.nodeSendBtn, "message-disable")
        }

        var n, exports = {}, i = {}, o = {}, r = !1;
        exports.setVerifyCode = function (e, t, n, o) {
            var r = { bid: t.bid, t: (new Date).getTime() }, s = e.getServer("siteObj"),
                a = s.webRoot + n.GETCODEURL + "?" + o.jsonToQuery(r);
            if (i.nodeVerifyImg) i.nodeVerifyImg.setAttribute("style", "background-image: url(" + a + ")")
        }, exports.hideMessage = function (e, t) {
            var n = i;
            n.nodeTool["data-type"] = "max", n.nodeTool.className = n.nodeTool.className + " " + t.PREFIXCLASS + "max", e.hide([n.nodeText, n.nodeSet, n.nodeSend])
        }, exports.showMessage = function (e, t, n) {
            var o = t.getServer("configBox").noteBoard, r = i;
            if (r.nodeTool["data-type"] = "min", r.nodeTool.className = r.nodeTool.className.replace(n.PREFIXCLASS + "max", ""), 1 === o.displayCompany) e.show([r.nodeText]);
            e.show([r.nodeSet, r.nodeSend])
        }, exports.closeMessage = function (e) {
            var t = i;
            if (e.hide([t.nodeSuccesss]), "\u8fd4\u56de" === t.messageBtn.innerText) exports.setVerifyCode(), exports.showMessage(), t.messageBtn.innerHTML = ""; else if ("min" === t.nodeTool["data-type"] || void 0 === t.nodeTool["data-type"]) exports.hideMessage(); else exports.showMessage();
            exports.resetPosition()
        }, exports.resetPosition = function (e, t) {
            e.setStyles(i.nodeContain, t.extend([{
                top: "auto",
                bottom: "1px",
                marginLeft: 0,
                marginTop: 0,
                height: "auto"
            }, o]))
        }, exports.getExtendNode = function (e, t, n) {
            return {
                bid: e.bid,
                siteid: e.siteid,
                csrfToken: e.csrfToken,
                v: e.bid,
                s: e.siteid,
                e: e.eid,
                client: n.stringify(t.getInfo()),
                referrer: document.referrer,
                origin: document.title || document.URL
            }
        }, exports.sendMessage = function (e, n, o, r, s, a) {
            var c = e.validateForm(n.g(r.PREFIXNODEID + "form")), u = n.hasClass(i.nodeSendBtn, "message-disable"),
                d = document.getElementById("nb_nodeboard_send"), l = d.getAttribute("needVerifyCode");
            if (c && !u) {
                if (1 == +l) return void exports.aiCode();
                t(n, "disable");
                for (var f = exports.getExtendNode(), m = n.g(r.PREFIXNODEID + "form"), p = n.getElementsByClass(r.INPUTSELECTOR, m), g = 0; g < p.length; g++) {
                    var h = p[g];
                    if (!h.disabled) if (h.value === h.getAttribute("data-ph")) f[h.name] = ""; else f[h.name] = h.value
                }
                var b = o.urlRoot + r.SAVEURL + "?" + a.jsonToQuery(f),
                    v = { success: exports.sendSucess, failure: exports.sendFail, key: "cb" };
                s.jsonp(b, v)
            }
        }, exports.resetForm = function (e, t) {
            for (var n = e.g(t.PREFIXNODEID + "form"), i = e.getElementsByClass(t.INPUTSELECTOR, n), o = 0; o < i.length; o++) {
                var s = i[o];
                if (!s.disable && s.value !== s.getAttribute("data-ph")) if (r) s.value = s.getAttribute("data-ph"), s.focus(), s.blur(); else s.value = ""
            }
            exports.setVerifyCode()
        }, exports.sendSucess = function (e, o, r) {
            if (0 === r.status) {
                var s = e.getMsgText("success");
                o.show([i.nodeSuccesss]), i.messageTitle.innerHTML = s.title, i.messageContent.innerHTML = s.msg, i.messageBtn.innerHTML = s.btn, exports.resetForm(), o.hide([i.nodeSet, i.nodeSend])
            } else {
                var s = e.getMsgText("fail");
                o.show([i.nodeSuccesss]), i.messageTitle.innerHTML = s.title, i.messageContent.innerHTML = r.statusInfo || s.msg, i.messageBtn.innerHTML = s.btn, o.hide([i.nodeSet, i.nodeSend]), t(o, "enable")
            }
            t(o, "enable"), n.removeMask()
        }, exports.sendFail = function (e, o, r) {
            var s = e.getMsgText("fail");
            o.show([i.nodeSuccesss]), i.messageTitle.innerHTML = s.title, i.messageContent.innerHTML = s.msg, o.hide([i.nodeSet, i.nodeSend]), t(o, "enable"), n.removeMask()
        }, exports.aiCode = function () {
            var e, t = 8 + document.getElementsByClassName("nb-nodeboard-contain")[0].offsetHeight + "px !important",
                i = function () {
                    if (window.PassMachine && window.PassMachine.mkd) {
                        var e = window.PassMachine.mkd;
                        n = new e({
                            maskModule: !0,
                            id: "aiCodeMsg",
                            ak: "5509ba02827e33313d5802a9b902fd5e",
                            spinConfig: {
                                headTitle: "\u5b89\u5168\u9a8c\u8bc1",
                                conTitle: "\u62d6\u52a8\u6ed1\u5757, \u4f7f\u56fe\u7247\u89d2\u5ea6\u4e3a\u6b63",
                                color: "#4d4d4d"
                            },
                            slideConfig: {
                                headTitle: "\u5b89\u5168\u9a8c\u8bc1",
                                conTitle: "\u6ed1\u81f3\u6700\u53f3",
                                bottomTitle: "\u4e3a\u4e86\u4f60\u7684\u5e10\u53f7\u5b89\u5168\uff0c\u672c\u6b21\u64cd\u4f5c\u9700\u8981\u8fdb\u884c\u5b89\u5168\u9a8c\u8bc1",
                                color: "#4d4d4d",
                                finishTitle: "\u6ed1\u52a8\u6210\u529f"
                            },
                            verifySuccessFn: function (e) {
                                var t = document.createElement("input");
                                t.type = "hidden", t.name = "ds", t.className = "nb-nodeboard-param", t.value = e.ds;
                                var n = document.createElement("input");
                                n.type = "hidden", n.name = "tk", n.className = "nb-nodeboard-param", n.value = e.tk;
                                var i = document.getElementById("nb-nodeboard-set-content-js");
                                i.parentNode.insertBefore(t, i), i.parentNode.insertBefore(n, i);
                                var o = document.getElementById("nb_nodeboard_send");
                                o.setAttribute("needVerifyCode", "0"), setTimeout(function () {
                                    if (document.all) o.click(); else {
                                        var e = document.createEvent("MouseEvents");
                                        e.initEvent("click", !0, !0), o.dispatchEvent(e)
                                    }
                                    setTimeout(function () {
                                        o.setAttribute("needVerifyCode", "1")
                                    }, 300)
                                }, 0)
                            },
                            closeFn: function () {
                                console.log("\u6211\u5173\u95ed\u4e86\u6ed1\u5757\u9a8c\u8bc1\u7801")
                            },
                            initApiSuccessFn: function () {
                                n.initVcode({}, function () {
                                    setTimeout(function () {
                                        document.getElementsByClassName("vcode-body")[0].style = "min-height:" + t + ";left:" + o.left + ";right:" + o.right
                                    }, 0)
                                })
                            }
                        })
                    }
                };
            if (!document.getElementById("aiCodeMsg")) {
                var r = document.createElement("dev");
                r.id = "aiCodeMsg";
                var s = document.getElementsByClassName("nb-nodeboard-contain")[0];
                s.parentNode.insertBefore(r, s), setTimeout(function () {
                    e = document.createElement("script"), e.charset = "UTF-8", e.type = "text/javascript", e.src = "https://wappass.baidu.com/static/machine/js/api/mkd.js", e.onload = e.onreadystatechange = function () {
                        i()
                    };
                    var t = document.getElementsByTagName("script")[0];
                    t.parentNode.insertBefore(e, t)
                }, 0)
            } else i()
        };
        var s = { height: 0, width: 0 };
        return exports.showInCenter = function (t, n) {
            var o = i;
            if (t.show([o.nodeContain]), !o.nodeTool) e(t, n);
            if ("max" === o.nodeTool["data-type"]) exports.showMessage();
            if (!s.width) s.width = o.nodeContain.offsetWidth / 2, s.height = o.nodeContain.offsetHeight / 2;
            t.setStyles(o.nodeContain, {
                top: "50%",
                left: "50%",
                marginLeft: -s.width + "px",
                marginTop: -s.height + "px",
                height: 2 * s.height + "px"
            })
        }, exports.process = function (t, n, o, s) {
            if (e(t, o), i.nodeVerifyImg) exports.setVerifyCode();
            s.registValidate(t.g(o.PREFIXNODEID + "form")), n.init(t.g(o.PREFIXNODEID + "form"));
            var a = document.getElementById("nb-nodeboard-set-content-js");
            if (a && a.value === a.getAttribute("data-ph")) r = !0
        }, exports
    }), define("embed/message/pc/messagePConsts", [], function () {
        return {
            SAVEURL: "bookmanage/saveBook.action",
            GETCODEURL: "/bookmanage/genCode.action",
            WRAPID: "newBridge",
            NODEID: "nb-nodeboard",
            PREFIIXNODE: "nb_node_",
            PREFIXNODEID: "nb_nodeboard_",
            PREFIXCLASS: "nb-nodeboard-",
            ERROR_ID: "nb-nodeboard-tips-js",
            PREFIX_NODEID: "nb-nodeboard-",
            PREFIXNODESET: "nb_nodeboard_set",
            INPUTSELECTOR: "nb-nodeboard-param",
            MESSAGWTIP: {
                content: {
                    text: "\u8bf7\u5728\u6b64\u8f93\u5165\u7559\u8a00\u5185\u5bb9\uff0c\u6211\u4eec\u4f1a\u5c3d\u5feb\u4e0e\u60a8\u8054\u7cfb\u3002\uff08\u5fc5\u586b\uff09",
                    errorTip: "\u7559\u8a00\u5185\u5bb9\u4e0d\u53ef\u4e3a\u7a7a"
                },
                visitorName: { text: "\u59d3\u540d", errorTip: "" },
                visitorPhone: {
                    text: "\u7535\u8bdd",
                    errorTip: "\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u7535\u8bdd\u53f7\u7801"
                },
                visitorEmail: { text: "\u90ae\u7bb1", errorTip: "\u90ae\u7bb1\u683c\u5f0f\u8f93\u5165\u6709\u8bef" },
                visitorAddress: { text: "\u5730\u5740", errorTip: "\u5730\u5740\u6570\u636e\u8fc7\u957f" },
                overstep: { text: "\u8d85\u6570", errorTip: "\u7559\u8a00\u5185\u5bb9\u8f93\u5165\u6709\u8bef" },
                verifyCode: { text: "\u9a8c\u8bc1\u7801", errorTip: "\u9a8c\u8bc1\u7801\u683c\u5f0f\u6709\u8bef" }
            },
            MESSAGERESULTTIP: {
                success: {
                    title: "\u611f\u8c22\u7559\u8a00",
                    msg: "\u6211\u4eec\u4f1a\u5c3d\u5feb\u4e0e\u60a8\u8054\u7cfb",
                    btn: "\u5173\u95ed"
                },
                fail: {
                    title: "\u63d0\u4ea4\u5931\u8d25",
                    msg: "\u8bf7\u5237\u65b0\u9875\u9762\u91cd\u65b0\u63d0\u4ea4!",
                    btn: "\u8fd4\u56de"
                }
            }
        }
    }), define("embed/message/pc/messageValidate", ["require"], function (require) {
        function e(e) {
            for (var t = !0, n = 0, i = e.length; n < i; n++) if (+e[n].getAttribute("data-write") && (/^[\s\uFEFF\xA0]*$/.test(e[n].value) || e[n].value === e[n].getAttribute("placeholder"))) {
                t = !1;
                var o = e[n].getAttribute("data-ph").replace("\uff08\u5fc5\u586b\uff09", "");
                exports.showErrorTip(e[n], o + "\u4e0d\u80fd\u4e3a\u7a7a!");
                break
            }
            return t
        }

        var exports = {};
        return exports.baseRegex = {
            content: /^[\s\S]*$/,
            visitorName: /^.{0,30}$/,
            visitorPhone: /^1\d{10}$|^0\d{10,11}$|^[4]00\d{7}$|^[2356789]\d{6,7}$|^4[123456789]\d{5,6}$|^4\d{1}[123456789]\d{4,5}$/,
            visitorEmail: /^(?!.{50,})(\w+([-.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/,
            visitorAddress: /^.{0,50}$/,
            verifyCode: /^[0-9a-zA-Z]{4}$/
        }, exports.showErrorTip = function (e, t, n, i) {
            var o = n.parentNode, r = document.createElement("ins");
            r.className = e.PREFIX_NODEID + "tips", r.id = e.PREFIX_NODEID + "tips-js", r.innerHTML = i, t.setStyle(r, "top", o.clientHeight + "px"), t.addClass(o, e.PREFIX_NODEID + "err"), o.appendChild(r)
        }, exports.removeErrorTip = function (e, t, n) {
            var i = e.g(t.ERROR_ID);
            if (i) {
                e.removeClass(i.parentNode, t.PREFIX_NODEID + "err"), i.parentNode.removeChild(i);
                for (var o, r = n.elements, s = 0; o = r[s]; s++) o.className = o.className.replace("error-tips", "")
            }
        }, exports.validateForm = function (t, n, i, o) {
            this.removeErrorTip(o);
            var r = !0, s = n.getNodeText(), a = i.g("nb-nodeboard-set-content-js"), c = a.value;
            if (c === a.getAttribute("data-ph") || "" === c) return this.showErrorTip(a, s.content.errorTip), !1;
            if (!(r = e(o))) return !1;
            for (var u, d = o.elements, l = 0; u = d[l]; l++) {
                var f = u.value, m = u.name;
                if ("content" === m && (f === u.getAttribute("data-ph") || "" === f)) {
                    this.showErrorTip(u, s.content.errorTip), r = !1;
                    break
                }
                if (f && !f.match(this.baseRegex[m]) && f !== u.getAttribute("data-ph")) {
                    if ("content" === m) this.showErrorTip(u, s.overstep.errorTip); else this.showErrorTip(u, s[m].errorTip);
                    u.className = u.className + " error-tips", r = !1;
                    break
                }
            }
            return r
        }, exports.registValidate = function (e, t) {
            for (var n, i = t.elements, o = 0; n = i[o]; o++) n.name, e.domOn([n], "click", function () {
                exports.removeErrorTip(t)
            })
        }, exports
    }), define("embed/message/messagePConfig", ["require", "./messageMain", "./messageData", "./messageHandler", "./pc/messagePMain", "./pc/messagePData", "./pc/messagePc.tpl", "./pc/messagePHandler", "./pc/messagePConsts", "./pc/messageValidate"], function (require) {
        return {
            package: "pmessage",
            resource: {
                main: require("./messageMain"),
                data: require("./messageData"),
                handler: require("./messageHandler"),
                pmain: require("./pc/messagePMain"),
                pdata: require("./pc/messagePData"),
                tpl: require("./pc/messagePc.tpl"),
                phandler: require("./pc/messagePHandler"),
                consts: require("./pc/messagePConsts"),
                validate: require("./pc/messageValidate")
            },
            injection: [{
                id: "pmessage.main",
                method: {
                    init: ["pmessage.handler"],
                    renderHtml: ["pmessage.tpl", "pmessage.data", "common.util", "pbase.dom", "common.view", "pmessage.pmain", "log.main"]
                }
            }, {
                id: "pmessage.data",
                method: { getMessagetyle: ["data.config", "pmessage.pdata"] }
            }, {
                id: "pmessage.handler",
                method: {
                    bindEvent: ["pbase.events", "pmessage.consts", "pmessage.phandler"],
                    sendMessage: ["pmessage.phandler"],
                    closeMessage: ["pmessage.phandler"]
                }
            }, {
                id: "pmessage.pmain",
                method: {
                    process: ["common.CustomSelect"],
                    initExtSelect: ["pbase.dom", "pmessage.consts"],
                    showInCenter: ["pmessage.phandler"],
                    hide: ["pbase.dom"],
                    show: ["pbase.dom"]
                }
            }, {
                id: "pmessage.pdata",
                method: {
                    dataProcess: ["data.config", "pbase.browser", "common.util", "pbase.lib"],
                    getNodeText: ["pmessage.consts"],
                    getMsgText: ["pmessage.consts"]
                }
            }, {
                id: "pmessage.phandler",
                method: {
                    process: ["pbase.dom", "common.placeHolder", "pmessage.consts", "pmessage.validate"],
                    showInCenter: ["pbase.dom", "pmessage.consts"],
                    sendMessage: ["pmessage.validate", "pbase.dom", "core.config", "pmessage.consts", "imLib.net", "core.net"],
                    resetForm: ["pbase.dom", "pmessage.consts"],
                    sendSucess: ["pmessage.pdata", "pbase.dom"],
                    sendFail: ["pmessage.pdata", "pbase.dom"],
                    closeMessage: ["pbase.dom"],
                    getExtendNode: ["core.config", "pbase.client", "pbase.JSON"],
                    hadnleColseNode: ["pbase.dom", "pmessage.consts"],
                    resetPosition: ["pbase.dom", "common.util"],
                    showMessage: ["pbase.dom", "data.config", "pmessage.consts"],
                    hideMessage: ["pbase.dom", "pmessage.consts"],
                    setVerifyCode: ["data.config", "core.config", "pmessage.consts", "core.net"]
                }
            }, {
                id: "pmessage.validate",
                method: {
                    validateForm: ["pbase.lib", "pmessage.pdata", "pbase.dom"],
                    removeErrorTip: ["pbase.dom", "pmessage.consts"],
                    registValidate: ["pbase.events"],
                    showErrorTip: ["pmessage.consts", "pbase.dom"]
                }
            }],
            aspect: [{ id: "pmessage.main", pointCut: ["log.main.init, , init"] }]
        }
    }), define("embed/embedChat/bid", ["require"], function (require) {
        function e(e, t, n) {
            var i = n.OLDBIDKEY + e + "_BID", o = t.getItem(i);
            if (!o) return o; else return o = parseInt(o.substr(0, 13), 16).toString()
        }

        var exports = {};
        return exports.init = function (t, n, i, o, r, s, a) {
            if (n.isObject(a) && void 0 !== s && "" !== s) return s;
            var c = o.BIDPRE + r;
            if (!s) s = t.getItem(c) || e(r, t, o) || i.getBid();
            return t.setItem(c, s), s
        }, exports
    }), define("embed/embedChat/pc/chat", ["require", "exports", "../../mobilelite/lib/ajax"], function (require, exports) {
        function e(e, t) {
            var n = window.screen.availWidth, i = window.screen.availHeight;
            return { left: Math.ceil((n - e) / 2), top: Math.ceil((i - t) / 2) }
        }

        function t(e) {
        }

        function n(e) {
            var t = e;
            if (/^http:/.test(e)) t = e.replace(/^http/, "https"); else if (/^\/\//.test(e)) t = "https:" + e;
            return t
        }

        function i(e) {
        }

        function o(e) {
            exports.openWebimLight(!0)
        }

        var r = null, s = require("../../mobilelite/lib/ajax"), a = null, c = {};
        exports.initSystemInvite = function (e) {
            e.sid = "-100", e.tid = "-1", e.fromType = 1, e.ttype = 1
        }, exports.refuseSuccess = function (e, t) {
            t.hide([a]), e.fromType = 1
        }, exports.sendInviteMessage = function (e, t, n, i, o) {
            var r = i.getServer("configBox").inviteBox;
            if (r.inviteTxt) {
                new t({ main: o.g("nbWebimLightEditor"), styles: { fontSize: "9pt" } }).setContent(r.inviteTxt);
                var s = o.g("nbwlSendBtn");
                n.domTrigger(s, "click")
            }
        }, exports.openWebimLight = function (e, t, n, i) {
            if (!n.getServer("siteObj").isWebim || i) (0, (false || document.getElementById("newBridge")).require)(["embed/webimlight/main"], function (e) {
                e.init()
            })
        }, exports.autoOpenWebimLight = function (e, t) {
            var n = e.getServer("siteObj").siteId, i = "webimLightAlive" + n, o = t.localStorage.getItem(i) - 0;
            if (new Date - o < 2e3) exports.openWebimLight()
        }, exports.setVisitorFrom = function (e, t, n, i) {
            var o = t.getServer("siteObj");
            if (e.tid && "-1" !== e.tid && !i) o.from = 4; else if (0 === n) o.from = 5; else o.from = 6
        }, exports.openWebimWindow = function (t, i, o, u, d, l) {
            var f = o.getServer(), m = f.siteObj, p = f.configBox.inviteBox,
                g = { from: 0, sid: "-100", tid: l || "-1", ttype: 1, siteId: m.siteId, userId: m.userId };
            if (0 !== d) {
                if (g = {
                    from: t.fromType,
                    sessionid: t.sid,
                    siteId: m.siteId,
                    tid: t.tid || "-1",
                    userId: m.userId,
                    ttype: t.ttype,
                    messageText: p.inviteTxt
                }, 1 == +p.smartBoxEnable && 1 == +p.smartBoxOpen && 0 == +p.likeCrm && 1 == +p.autoInvite) u.hide([a]);
                exports.initSystemInvite()
            }
            if (0 == +p.likeCrm && t.adata) g.siteConfig = {}, g.siteConfig.likeCrm = p.likeCrm, g.siteConfig.adata = t.adata;
            g.pageId = m.pageId;
            var h = i.getXst();
            if (h) g.xst = h;
            c.reqParam = g;
            var b = m.webRoot + "chatIndex";
            b = n(b);
            var v = 750, y = 634, I = e(v, y),
                T = "left=" + I.left + ",top=" + I.top + ",resizable=1,width=" + v + ",height=" + y, w = {
                    type: "jsonp",
                    data: {
                        type: 2,
                        time: (new Date).getTime(),
                        logId: window.speedLogId,
                        userId: m.eid,
                        sourceId: "AFFSpeed"
                    }
                };
            s.ajax("https://aifanfan.baidu.com/p.gif", w);
            var S = m.siteToken || "0";
            if (!r && 4 !== t.siteStatus || 0 === t.siteStatus) {
                var E = "pcNBBridage" + (new Date).getTime();
                r = window.open(b + "?siteToken=" + S + "&speedLogId=" + window.speedLogId + "&eid=" + m.eid + "&" + i.jsonToQuery(c), E, T)
            } else if (!r || r.closed || !r.window) r = window.open(b + "?siteToken=" + S + "&speedLogId=" + window.speedLogId + "&eid=" + m.eid + "&" + i.jsonToQuery(c), "pcNBBridage", T); else r.focus()
        }, exports.accept = function (e, t, n, i, o) {
            var r = n.getServer("siteObj");
            n.getServer("configBox").inviteBox;
            if (this.setVisitorFrom(i, o), !r.isWebim) {
                if (0 !== i) {
                    if (r.invited = 0, 4 === r.from) r.invited = 1
                } else if (0 === i) if (e.gid = o || -1, e.invited = 0, e.tid = "-1", o) e.tid = o;
                return void exports.openWebimLight()
            }
            this.openWebimWindow(i, o)
        }, exports.enterSuccess = function (e, t, n, i, o, r, s, c, u) {
            var d = o.getServer("siteObj");
            if (3 === u.status) c.show([a]), i.sid = u.sid, i.tid = u.tid, i.fromType = 2, i.ttype = 0; else if (4 === u.status) c.hide([a]), i.siteStatus = u.status;
            if (e.emit("circleShowInvite", u), exports.autoOpenWebimLight(), exports.initSystemInvite(), 4 !== u.status) n.localStorage.removeItem(r.TALKTYPEPRE + d.siteId);
            var l = s.getItem(r.TALKTYPEPRE + d.siteId);
            if (l && -1 !== l.indexOf("webimlight")) exports.openWebimLight(!0);
            if (4 === u.status) {
                var f = u.sid, l = n.localStorage.getItem(r.TALKTYPEPRE + d.siteId) || "";
                if (!d.isWebim && !t.isConnected() && -1 !== l.indexOf(f)) d.from = 5, exports.openWebimLight()
            } else n.localStorage.removeItem(r.TALKTYPEPRE + d.siteId);
            if (i.siteStatus = u.status, -1 !== "3".indexOf(u.status)) c.show([a]); else {
                if (c.hide([a]), "iconBox" === d.clcikType && 0 !== u.status) return;
                exports.initSystemInvite()
            }
        }, exports.builtComunicate = function (e, t, n, r, s, c) {
            var u = e.getServer("siteObj"), d = e.getServer().configBox.inviteBox;
            n.siteid = u.siteId, n.csrfToken = u.csrfToken, n.eid = u.eid, n.urlRoot = u.webRoot, n.siteToken = u.siteToken, n.crossDomain = !0, n.likeCrm = d.likeCrm, n.webSocket = "true" === u.isGray, n.wsUrl = u.wsUrl, n.syncSessionHistory = !0, n.visitType = 1, t.init(n), s.init(n), exports.pageOnload(), s.enter(exports.enterSuccess, i), t.on("initiative", exports.initiative), t.on("forcetalk", o), t.on("watchStatus", exports.watchStatus), t.on("csoffline", exports.csoffline), a = c.g("nb_invite_wrap")
        }, exports.initiative = function (e, t, n) {
            if (2 === e.fromType) t.show([a])
        }, exports.watchStatus = function (e, t, n, i, o, r, s) {
            var c = t.getServer("siteObj");
            if (a) {
                var u = r.g("nb_invite_smart_wrap");
                if (4 === s.status) {
                    if (!c.isWebim && !n.isConnected()) exports.openWebimLight()
                } else o.removeItem(i.TALKTYPEPRE + c.siteId);
                if (e.siteStatus = s.status, -1 !== "3".indexOf(s.status)) {
                    if (a) r.show([a]);
                    if (u) r.hide([u])
                } else {
                    if (r.hide([a]), u) r.hide([u]);
                    exports.initSystemInvite()
                }
            }
        }, exports.csoffline = function (e) {
            e.showInCenter()
        }, exports.refuse = function (e, n, i) {
            var o = e.getServer("siteObj"),
                r = { v: o.userId, s: o.siteId, dev: "0", type: 1, sid: n.sid, tid: n.tid, tid_authtype: 4 };
            i.push(r, exports.refuseSuccess, t)
        }, exports.pageOnload = function (e, t, n) {
            if (t.isPageOnload = !1, n.checkLoad()) t.isPageOnload = !0; else e.domOn(window, "load", function () {
                t.isPageOnload = !0
            })
        }
    }), define("embed/embedChat/pc/leave", ["require"], function (require) {
        var e, exports = {};
        return exports.pageLeave = function (t, n, i, o, r) {
            if (!e) {
                var s = i.getServer("siteObj"), a = 4 == +n.siteStatus;
                if (!o.getItem(r.TALKTYPEPRE + n.siteid)) {
                    if (a && 1 === s.isWebim) t.disconnect(); else t.disconnect(void 0, !1);
                    e = !0
                }
            }
        }, exports.init = function (e) {
            e.domOn(window, "pagehide", exports.pagehideHandler), e.domOn(window, "unload", exports.unloadHandler)
        }, exports.pagehideHandler = function (e) {
            e.domOff(window, "unload", exports.unloadHandler), exports.pageLeave()
        }, exports.unloadHandler = function (e) {
            e.domOff(window, "pagehide", exports.pagehideHandler), exports.pageLeave()
        }, exports
    }), define("embed/embedChat/consts", [], function () {
        return {
            OLDBIDKEY: "QIAO_LS_",
            BIDPRE: "NEWBRIDGE_BID_",
            TALKTYPEPRE: "NEWBRIDGE_TALK_TYPE_",
            DOMAIN: "//sgoutong.baidu.com"
        }
    }), define("embed/embedChat/config", ["require", "./bid", "./pc/chat", "./pc/leave", "./consts"], function (require) {
        return {
            package: "pchat",
            resource: {
                bid: require("./bid"),
                chat: require("./pc/chat"),
                leave: require("./pc/leave"),
                consts: require("./consts")
            },
            injection: [{
                id: "pchat.chat",
                method: {
                    setVisitorFrom: ["core.config", "data.config"],
                    openWebimWindow: ["core.config", "core.net", "data.config", "pbase.dom"],
                    accept: ["core.config", "core.net", "data.config"],
                    builtComunicate: ["data.config", "core.main", "core.config", "pchat.bid", "core.site", "pbase.dom", "pchat.leave"],
                    enterSuccess: ["core.main", "core.chat", "imLib.main", "core.config", "data.config", "pchat.consts", "imLib.localStorage", "pbase.dom"],
                    autoOpenWebimLight: ["data.config", "imLib.main"],
                    openWebimLight: ["pchat.consts", "imLib.localStorage", "data.config"],
                    initSystemInvite: ["core.config"],
                    watchStatus: ["core.config", "data.config", "core.chat", "pchat.consts", "imLib.localStorage", "pbase.dom"],
                    refuse: ["data.config", "core.config", "core.net"],
                    initiative: ["core.config", "pbase.dom"],
                    refuseSuccess: ["core.config", "pbase.dom"],
                    sendInviteMessage: ["common.util", "imEditor.main", "pbase.events", "data.config", "pbase.dom"],
                    csoffline: ["pmessage.pmain"],
                    pageOnload: ["pbase.events", "core.config", "common.util"]
                }
            }, {
                id: "pchat.leave",
                method: {
                    pageLeave: ["core.main", "core.config", "data.config", "imLib.localStorage", "pchat.consts"],
                    init: ["pbase.events"],
                    pagehideHandler: ["pbase.events"],
                    unloadHandler: ["pbase.events"]
                }
            }, { id: "pchat.bid", method: { init: ["imLib.localStorage", "imLib.lang", "pbase.lib", "pchat.consts"] } }],
            aspect: [{
                id: "pchat.chat",
                pointCut: ["pinvite.main.init, , builtComunicate", "toolbar.main.enableSendBtn, ,sendInviteMessage"]
            }, { id: "pchat.leave", pointCut: ["pchat.chat.builtComunicate, , init"] }]
        }
    }), define("lib/util", [], function () {
        function e(e, t) {
            for (var n, i = /<%([^%>]+)?%>/g, o = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g, r = "var r = [];\n", s = 0, a = function (e, t) {
                return t ? r += e.match(o) ? e + "\n" : "r.push(data." + e + ");\n" : r += "" !== e ? 'r.push("' + e.replace(/"/g, '\\"') + '");\n' : "", a
            }; n = i.exec(e);) a(e.slice(s, n.index))(n[1], !0), s = n.index + n[0].length;
            return a(e.substr(s, e.length - s)), r += 'return r.join("");', new Function("data", r.replace(/[\r\t\n]/g, ""))(t)
        }

        function t(e) {
            for (var t = {}, n = e.length; n--;) {
                var i = e[n];
                if (-1 !== Object.prototype.toString.call(i).indexOf("Object")) for (var o in i) if (i.hasOwnProperty(o)) t[o] = i[o]
            }
            return t
        }

        function n(e, t) {
            if (e) {
                for (var n = "", i = e.split("\x3c!-- end --\x3e"), o = i.length; o--;) {
                    var r = i[o];
                    if (r) {
                        if (1 === arguments.length) t = r.match(/\w{0,}( \-\->)/g)[0].match(/\w/g).join("");
                        var s = "\x3c!-- target: " + t + " --\x3e";
                        if (-1 !== r.indexOf(s)) n = r
                    }
                }
                return n
            }
            return ""
        }

        function i(e, t) {
            var n = {};
            if (n.phoneReg = /(^(\d{3,4}(-?))?\d{7,8})$|^((\+86)|(86))?(1[0-9][0-9]{9})/, n.emailReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, null != t.match(n[e])) return !0; else return !1
        }

        function o(e) {
            if ("string" != typeof e) return e; else return e = e.replace(/</g, "&lt;"), e = e.replace(/>/g, "&gt;"), e = e.replace(/\"/g, "&quot;"), e = e.replace(/\'/g, "&apos;")
        }

        function r(e) {
            var t = {};
            if ("object" == typeof e) for (var n in e) if (e.hasOwnProperty && e.hasOwnProperty(n)) if ("object" == typeof e[n]) t[n] = r(e[n]); else t[n] = e[n];
            return t
        }

        return {
            template: e, pickHtml: n, regext: i, filterXSS: o, extend: t, cloneObj: r, getHost: function (e) {
                if ("string" != typeof e) return "";
                var t = document.createElement("a");
                return t.href = e, t.hostname
            }, isNativeFun: function (e) {
                return /\{\s*\[native code\]\s*\}/.test("" + e)
            }, trim: function (e) {
                var t = new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
                return String(e).replace(t, "")
            }, getLocationUrl: function (e) {
                if (e = e || {}, !e.x || !e.y) return ""; else return "//map.baidu.com/mobile/webapp/place/marker/qt=inf&vt=map&act=read_share&code=/point=" + encodeURIComponent(e.x + "|" + e.y) + "&title=" + encodeURIComponent(e.name || "") + "&content=" + encodeURIComponent(e.alias || "")
            }, getLocationImgUrl: function (e) {
                if (e = e || {}, !e.x || !e.y) return "";
                var t = e.x, n = e.y, i = e.zoom || 15;
                return "//api.map.baidu.com/staticimage?width=" + (e.width || 220) + "&height=" + (e.height || 110) + "&center=" + t + "," + n + "&markers=" + t + "," + n + "&zoom=" + i + "&markerStyles=" + (e.style || "-1,//qiao.baidu.com/site/pinpc.png,-1")
            }, isNaN: function (e) {
                return "number" == typeof e && +e != +e
            }, checkLoad: function () {
                var e = !1;
                if (e = "complete" === document.readyState, document.documentElement.doScroll) try {
                    document.documentElement.doScroll("left"), e = !0
                } catch (t) {
                    e = !1
                }
                return e
            }
        }
    }), define("common/util", ["lib/util"], function (e) {
        return e
    }), define("lib/tpl", [], function () {
        var exports = {}, e = {};
        return exports.parse = function (t) {
            t = t || "";
            var n = 0, i = "";
            t.replace(/<\!\-\-\s*target:\s*(\w+)\s*\-\->/g, function (o, r, s) {
                if (0 !== s) e[i] = t.substring(n, s);
                i = r, n = s
            }), e[i] = t.substring(n, t.length)
        }, exports.get = function (t) {
            return e[t] || ""
        }, exports
    }), define("common/tpl", ["lib/tpl"], function (e) {
        return e
    }), define("lib/pc/fixed_2", [], function () {
        function e() {
            for (var e = 0; e < t.length; e++) exports.setFixedPos(t[e])
        }

        var exports = {}, t = [];
        return exports.setFixedPos = function (e) {
            var t, n = "CSS1Compat" === document.compatMode ? document.documentElement : document.body;
            if (e.style.position = "absolute", void 0 === e.fixedTop) {
                if (!(t = e.style.top || e.currentStyle.top) || "auto" === t) if ((t = e.style.bottom || e.currentStyle.bottom) && t.indexOf("%") >= 0) t = n.clientHeight * (100 - parseInt(t, 10)) / 100 - e.offsetHeight; else if ("auto" === t) t = void 0; else if (t) t = n.clientHeight - e.offsetHeight - parseInt(t, 10);
                if (t) {
                    if ("string" == typeof t && t.indexOf("%") >= 0) t = n.clientHeight * parseInt(t, 10) / 100; else t = parseInt(t, 10);
                    e.fixedTop = t
                } else e.fixedTop = void 0
            }
            if (void 0 !== e.fixedTop) e.style.top = Math.max(document.documentElement.scrollTop, document.body.scrollTop) + e.fixedTop + "px"
        }, exports.setFixed = function (n, i) {
            if (i) if (n.ie <= 6 || 7 === n.ie && !n.isStrict()) {
                if (i.fixedTop) return void exports.setFixedPos(i);
                if (!t.length) {
                    var o = document.documentElement;
                    o.style.backgroundImage = "url(about:blank)", o.style.backgroundAttachment = "fixed", document.execCommand("BackgroundImageCache", !1, !0), window.attachEvent("onscroll", e), window.attachEvent("onresize", e)
                }
                t.push(i), exports.setFixedPos(i)
            }
        }, exports
    }), define("common/pc/fixed_2", ["lib/pc/fixed_2"], function (e) {
        return e
    }), define("base/pc/brower", [], function () {
        var e, t = document, n = new RegExp("msie (\\d+\\.\\d+)|trident", "i");
        return {
            ie: function () {
                return n.test(navigator.userAgent) ? t.documentMode || +RegExp.$1 : e
            }(),
            isBDBox: / baiduboxapp\//i.test(navigator.userAgent),
            opera: /opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i.test(navigator.userAgent) ? +(RegExp.$6 || RegExp.$2) : void 0,
            isStrict: function () {
                return "CSS1Compat" === t.compatMode
            },
            isMobile: function () {
                return !!navigator.userAgent.match(/.*Mobile.*/) || "ontouchstart" in window
            }()
        }
    }), define("base/pc/dom", ["require"], function (require) {
        var exports = {};
        return exports.setStyles = function (e, t) {
            for (var n in t) if (t.hasOwnProperty(n)) this.setStyle(e, n, t[n])
        }, exports.setStyle = function (e, t, n) {
            e.style[t] = n
        }, exports.hide = function (e, t) {
            if (e.isType(t, "Array")) for (var n = t.length; n--;) {
                var i = t[n];
                if ("string" == typeof i) i = this.g(i);
                if (i) i.style.display = "none"
            }
        }, exports.show = function (e, t) {
            if (e.isType(t, "Array")) for (var n = t.length; n--;) {
                var i = t[n];
                if ("string" == typeof i) i = this.g(i);
                i.style.display = "block"
            }
        }, exports.attributeName = function (e, t) {
            var n = e.ie, i = {};
            if (n < 8) i = { htmlFor: "htmlFor", className: "className" }; else i = { htmlFor: "for", className: "class" };
            return i[t] || t
        }, exports.createDom = function (e, t, n) {
            var i = document.createElement(e);
            for (var o in t) if (t.hasOwnProperty(o)) if ("styles" === o) this.setStyles(i, t[o]); else i.setAttribute(this.attributeName(o), t[o]);
            if (n) n.appendChild(i);
            return i
        }, exports.hasClass = function (e, t) {
            for (var n = e.className.split(" "), i = 0; i < n.length; i++) if (t === n[i]) return !0;
            return !1
        }, exports.modifyClass = function (e, t, n) {
            for (var i = e.className, o = i.split(/\s/), r = {}, s = 0; s < o.length; s++) r[o[s]] = !0;
            if (n) r[t] = !0; else delete r[t];
            o = [];
            for (var a in r) if (r.hasOwnProperty(a)) o.push(a);
            e.className = o.join(" ")
        }, exports.addClass = function (e, t) {
            this.modifyClass(e, t, !0)
        }, exports.removeClass = function (e, t) {
            this.modifyClass(e, t, !1)
        }, exports.appendHTML = function (e, t) {
            e = e || "";
            var n = document.createElement("div");
            if (n.innerHTML = e, t) for (; n.firstChild;) t.appendChild(n.firstChild);
            return n.childNodes
        }, exports.appendNodes = function (e, t) {
            for (e = e || []; e[0];) t.appendChild(e[0])
        }, exports.createIframe = function (e, t, n, i) {
            var o = e.ie, r = o < 9 ? '<iframe name="' + n + '">' : "iframe", s = document.createElement(r);
            if (s.setAttribute("id", t), s.setAttribute("name", n), s.style.display = "none", s.setAttribute("src", "about:blank"), i) i.appendChild(s);
            return s
        }, exports.g = function (e, t) {
            var n = null;
            if ("string" == typeof t) n = document.getElementById(t); else if (e.isType(t, "HTML") || "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName) n = t; else if (t === window) n = t;
            return n
        }, exports.getElementsByClass = function (e, t) {
            var n = [];
            if (!e) return n;
            if (t = t || document.body, t.querySelectorAll) n = t.querySelectorAll("." + e); else for (var i = t.getElementsByTagName("*"), o = 0; o < i.length; o++) {
                var r = i[o];
                if (exports.hasClass(r, e)) n.push(r)
            }
            return n
        }, exports.isParentNode = function (e, t) {
            for (var n = e === t, i = document.body; !n && (e = e.parentNode) !== i;) n = e === t;
            return n
        }, exports.contain = function (e, t) {
            if (e === t) return !0;
            if (e === document.body) return !1;
            if (!e) return !1; else return this.contain(e.parentNode, t)
        }, exports.getTarget = function (e) {
            return e = e || window.event, e.target || e.srcElement
        }, exports.scrollToBottom = function (e) {
            e.scrollTop = e.scrollHeight - e.offsetHeight
        }, exports.prependNodes = function (e, t) {
            for (e = e || []; e[0];) t.insertBefore(e[0], t.firstChild || null)
        }, exports.prependHTML = function (e, t) {
            e = e || "";
            var n = document.createElement("div");
            if (n.innerHTML = e, t) for (; n.firstChild;) t.insertBefore(n.firstChild, t.firstChild || null);
            return n.childNodes
        }, exports
    }), define("lib/pc/Fixed", ["require", "../../base/pc/brower", "../../base/pc/dom"], function (require) {
        function e() {
            if (6 === a.ie) d.execCommand("BackgroundImageCache", !1, !0)
        }

        function t() {
            return Math.max(d.documentElement.scrollTop, d.body.scrollTop)
        }

        function n() {
            var e = d.documentElement, t = d.body;
            return (u ? e : t).clientHeight
        }

        function i() {
            return Math.max(d.documentElement.scrollLeft, d.body.scrollLeft)
        }

        function o() {
            var e = d.documentElement, t = d.body;
            return (u ? e : t).clientWidth
        }

        function r(e, t) {
            if (e.indexOf("%") > -1) e = parseInt(e, 10) / 100, e *= t;
            return e = parseInt(e, 10)
        }

        function s(t, n) {
            var i = this;
            if (e(), !t.instanceOf(i, s)) i = new s(n); else i.init(n);
            return i
        }

        var a = require("../../base/pc/brower"), c = require("../../base/pc/dom"), u = a.isStrict(), d = document;
        return s.prototype = {
            constructor: s, init: function (e) {
                if (!(a.ie <= 6 || 7 === a.ie && !a.isStrict()) || !e) return null;
                var t = this;
                return t.el = c.g(e), t.el.style.position = "absolute", t.set(), t
            }, set: function () {
                var e = this;
                if (e.isReady()) return e.getNodeRect(), e.analyze(), e.setHtml(), void e.bindEvent()
            }, bindEvent: function () {
                var e = this;
                window.attachEvent("onscroll", function () {
                    e.fix()
                }), window.attachEvent("onresize", function () {
                    e.resizeFix()
                })
            }, resizeFix: function () {
                var e = this;
                if (a.ie <= 6) e.getNodeRect(), e.analyze()
            }, analyzeTop: function () {
                var e, t = this, i = t.rect, o = n();
                if (!i.bottom || "auto" === i.bottom) return e = r(i.top, o), void (t.top = e);
                e = o - r(i.bottom, o) - t.el.offsetHeight, t.top = e
            }, analyzeLeft: function () {
                var e, t = this, n = t.rect, i = o();
                if (!n.right || "auto" === n.right) return e = r(n.left, i), void (t.left = e);
                e = i - r(n.right, i) - t.el.offsetWidth, t.left = e
            }, analyze: function () {
                var e = this;
                if (e.isReady()) e.analyzeTop(), e.analyzeLeft(), e.fix()
            }, isReady: function () {
                if (this.el) return !0; else return !1
            }, setHtml: function () {
                var e = d.documentElement;
                e.style.backgroundImage = "url(about:blank)", e.style.backgroundAttachment = "fixed"
            }, getNodeRect: function () {
                var e = this, t = e.el, n = t.style, i = t.currentStyle;
                e.rect = {
                    top: n.top || i.top,
                    left: n.left || i.left,
                    right: n.right || i.right,
                    bottom: n.bottom || i.bottom
                }
            }, fix: function () {
                var e = this, n = e.el;
                if (e.isReady()) {
                    var o = t(), r = i();
                    n.style.top = o + e.top + "px", n.style.left = r + e.left + "px", n.style.bottom = "auto", n.style.right = "auto"
                }
            }
        }, s
    }), define("common/pc/Fixed", ["lib/pc/Fixed"], function (e) {
        return e
    }), define("lib/view", ["require"], function (e) {
        var exports = {};
        return exports.getWrap = function (e) {
            return e.g("newBridge")
        }, exports
    }), define("common/view", ["lib/view"], function (e) {
        return e
    }), define("lib/pc/placeholder", ["require"], function (require) {
        var exports = {}, e = "placeholder" in document.createElement("input"), t = "data-ph", n = "mess-placeholder",
            i = "place-style";
        return exports.ctrlFocus = function (e, o) {
            var r = o || window.event, s = r.target || r.srcElement;
            if (s.getAttribute(t) === e.trim(s.value)) s.className = s.className.replace(n, i), s.value = ""
        }, exports.ctrlBlur = function (e, o) {
            var r = o || window.event, s = r.target || r.srcElement, a = s.getAttribute(t);
            if ("" === e.trim(s.value)) s.className = s.className.replace(i, n), s.value = a
        }, exports.init = function (e, i, o, r) {
            if (e.ie && !(e.ie > 9)) for (var s, a = r.elements || [r], c = 0; s = a[c]; c++) if ("INPUT" === s.tagName || "TEXTAREA" === s.tagName) {
                var u = s.getAttribute(t);
                if (!u) continue;
                o.domOn(s, "focus", exports.ctrlFocus), o.domOn(s, "blur", exports.ctrlBlur), s.className += " " + n, s.value = u
            }
        }, exports.getValue = function (n) {
            var i = n.value;
            if (!e && n.getAttribute(t) === i) return n.value = "", ""; else return i
        }, exports.getPh = function (e) {
            return e.getAttribute(t)
        }, exports
    }), define("common/pc/placeholder", ["lib/pc/placeholder"], function (e) {
        return e
    }), define("lib/cookie", [], function () {
        var exports = {};
        return exports.get = function (e) {
            var t = new RegExp("(^| )" + e + "=([^;]*)(;|$)"), n = t.exec(document.cookie);
            return n ? decodeURIComponent(n[2]) : null
        }, exports.set = function (e, t, n) {
            n = n || {};
            var i;
            if (n.expires) if ("number" == typeof (i = n.expires)) i = new Date, i.setTime(n.expires + i.getTime());
            document.cookie = e + "=" + encodeURIComponent(t) + (n.path ? "; path=" + n.path : "") + (n.expires ? "; expires=" + n.expires.toGMTString() : "") + (n.domain ? "; domain=" + n.domain : "") + (n.secure ? "; secure" : "")
        }, exports
    }), define("common/cookie", ["lib/cookie"], function (e) {
        return e
    }), define("lib/pc/CustomSelect", ["require"], function (require) {
        function e() {
            this.options = { selectIndex: 0, content: [], style: {} }
        }

        function t(e) {
            return document.createElement(e)
        }

        function n(e, n) {
            var i = t(e);
            return i.className = "custom-select-" + n, i
        }

        function i(e, t) {
            for (var n in t) if (t.hasOwnProperty(n)) e[n] = t[n];
            return e
        }

        function o(e) {
            for (; e.hasChildNodes();) e.removeChild(e.firstChild)
        }

        function r(e, t) {
            for (; e;) {
                if (e === t) return !0;
                e = e.parentNode
            }
            return !1
        }

        function s(e) {
            var t = e || window.event;
            return t.target || t.srcElement
        }

        function a(e, t, n) {
            if (e.addEventListener) e.addEventListener(t, n, !1); else if (e.attachEvent) e.attachEvent("on" + t, n); else e[t] = n
        }

        function c(e, t) {
            return e[t] ? e[t].split(":")[0] || "" : ""
        }

        function u(e, t) {
            return e[t] ? e[t].split(":")[1] || "" : ""
        }

        function d(e) {
            if (!r(s(e), this.main)) this.hideLayer()
        }

        function l(e) {
            if ("block" === this.body.style.display) this.hideLayer(); else this.showLayer(), p.apply(this)
        }

        function f(e) {
            var t = s(e);
            if (t.className.indexOf("custom-select-" + v) > -1) this.setProperties({ selectIndex: t.index });
            this.hideLayer()
        }

        function m(e) {
            var t = this.container.offsetWidth;
            this.options.style.width = t, this.setProperties({ style: this.options }), this.hideLayer()
        }

        function p() {
            var e = this.title.getBoundingClientRect(), t = this.body.offsetHeight, n = this.title.offsetHeight,
                i = document.documentElement.clientHeight, o = i - (e.top + n),
                r = h(this.title, b(this.options.layerCont));
            if (t >= o) g(this.body, {
                top: r.top - t + y + "px",
                left: r.left + "px"
            }); else g(this.body, { top: r.top + n - y + "px", left: r.left + "px" })
        }

        function g(e, t) {
            for (var n in t) if (t.hasOwnProperty(n)) e.style[n] = t[n]
        }

        function h(e, t) {
            for (var n = 0, i = 0; e;) if (e !== t) n += e.offsetTop, i += e.offsetLeft, e = e.offsetParent; else e = null;
            return { top: n, left: i }
        }

        function b(e) {
            if ("string" == typeof e) return document.getElementById(e); else return null
        }

        var v = "list-item", y = 1;
        return e.prototype.init = function (e) {
            var t = this.container = b(e.id);
            if (t) {
                if (e._self = this, this.options = i(this.options, e), !this.options.style.width) this.options.style.width = t.offsetWidth;
                this.initHtml(this.options), this.initEvent(), t.customSelect = this
            }
        }, e.prototype.initHtml = function (e) {
            if (this.container) {
                this.main = n("ins", "main"), this.title = n("ins", "title"), this.titleContent = n("ins", "title-content"), this.titleInput = n("input", "title-input"), this.body = n("ins", "body"), this.bodyContent = n("ins", "body-content"), this.bodyList = n("ins", "body-list"), this.title.appendChild(this.titleContent), this.title.appendChild(this.titleInput), this.bodyContent.appendChild(this.bodyList), this.body.appendChild(this.bodyContent), this.main.appendChild(this.title), g(this.titleInput, { display: "none" });
                (e.layerCont ? b(e.layerCont) : document.getElementsByTagName("body")[0]).appendChild(this.body), this.setProperties(e), this.container.appendChild(this.main)
            }
        }, e.prototype.initEvent = function () {
            var e = this;
            a(this.main, "click", function (t) {
                l.call(e, t)
            }), a(this.body, "click", function (t) {
                f.call(e, t)
            }), a(document, "click", function (t) {
                d.call(e, t)
            }), a(window, "resize", function (t) {
                m.call(e, t)
            }), a(window, "scroll", function (t) {
                e.hideLayer()
            })
        }, e.prototype.showLayer = function () {
            this.body.style.display = "block"
        }, e.prototype.hideLayer = function () {
            this.body.style.display = "none"
        }, e.prototype.setProperties = function (e) {
            var t = [];
            for (var n in e) if (e.hasOwnProperty(n)) t.push(n);
            e = this.options = i(this.options, e);
            for (var o = 0, r = t.length; o < r; o++) {
                var s = t[o];
                if ("function" == typeof this.repaint[s]) this.repaint[s](e)
            }
        }, e.prototype.getSelectText = function () {
            return this.getText(this.options.selectIndex)
        }, e.prototype.getSelectValue = function () {
            return this.getValue(this.options.selectIndex)
        }, e.prototype.getText = function (e) {
            return this.options.content[e] ? this.options.content[e].split(":")[0] || "" : ""
        }, e.prototype.getValue = function (e) {
            return this.options.content[e] ? this.options.content[e].split(":")[1] || "" : ""
        }, e.prototype.repaint = {
            name: function (e) {
                e._self.titleInput.setAttribute("name", e.name)
            }, style: function (e) {
                var t = e._self, n = e.style;
                for (var i in n) if (n.hasOwnProperty(i)) switch (i) {
                    case "width":
                        var o = parseInt(n.width, 10);
                        t.main.style.width = o + "px", t.title.style.width = o - 2 * y + "px", t.body.style.width = o - 2 * y + "px";
                        break;
                    case "maxHeight":
                        t.bodyList.style.maxHeight = parseInt(n.maxHeight, 10) + "px";
                        break;
                    case "zIndex":
                        t.body.style.zIndex = n.zIndex
                }
            }, title: function (e) {
                var t = e._self, n = e.selectIndex, i = c(e.content, n);
                t.titleContent.innerHTML = i, t.titleInput.value = i;
                var o = t.bodyList.firstChild ? t.bodyList.firstChild.childNodes : [];
                if (o.length) {
                    for (var r = 0, s = o.length; r < s; r++) o[r].className = "custom-select-list-item";
                    o[n].className = "custom-select-list-item active"
                }
            }, content: function (e) {
                for (var t = e._self, i = n("ins", "body-list-cont"), r = e.content || [], s = 0, a = r.length; s < a; s++) {
                    var d = n("ins", v);
                    d.innerHTML = c(r, s), d.setAttribute("value", u(r, s)), d.index = s, i.appendChild(d)
                }
                o(t.bodyList), t.bodyList.appendChild(i)
            }, selectIndex: function (e) {
                this.title(e)
            }
        }, e
    }), define("common/pc/CustomSelect", ["lib/pc/CustomSelect"], function (e) {
        return e
    }), define("lib/convert", [], function () {
        function e(e) {
            var t, r;
            e[0] = o(e[0], -180, 180), e[1] = i(e[1], -74, 74), t = e.slice(0);
            for (var a = 0; a < s.length; a++) if (t[1] >= s[a]) {
                r = c[a];
                break
            }
            if (!r) for (a = s.length - 1; a >= 0; a--) if (t[1] <= -s[a]) {
                r = c[a];
                break
            }
            var u = n(e, r);
            return e = [u[0].toFixed(2), u[1].toFixed(2)]
        }

        function t(e) {
            var t, i;
            t = [Math.abs(e[0]), Math.abs(e[1])];
            for (var o = 0; o < r.length; o++) if (t[1] >= r[o]) {
                i = a[o];
                break
            }
            var s = n(e, i);
            return e = [s[0].toFixed(6), s[1].toFixed(6)]
        }

        function n(e, t) {
            if (e && t) {
                var n = t[0] + t[1] * Math.abs(e[0]), i = Math.abs(e[1]) / t[9],
                    o = t[2] + t[3] * i + t[4] * i * i + t[5] * i * i * i + t[6] * i * i * i * i + t[7] * i * i * i * i * i + t[8] * i * i * i * i * i * i;
                return n *= e[0] < 0 ? -1 : 1, o *= e[1] < 0 ? -1 : 1, [n, o]
            }
        }

        function i(e, t, n) {
            if (null != t) e = Math.max(e, t);
            if (null != n) e = Math.min(e, n);
            return e
        }

        function o(e, t, n) {
            for (; e > n;) e -= n - t;
            for (; e < t;) e += n - t;
            return e
        }

        var exports = {}, r = [12890594.86, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
            s = [75, 60, 45, 30, 15, 0],
            a = [[1.410526172116255e-8, 898305509648872e-20, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -.03801003308653, 17337981.2], [-7.435856389565537e-9, 8983055097726239e-21, -.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 10260144.86], [-3.030883460898826e-8, 898305509983578e-20, .30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, .32710905363475, 6856817.37], [-1.981981304930552e-8, 8983055099779535e-21, .03278182852591, 40.31678527705744, .65659298677277, -4.44255534477492, .85341911805263, .12923347998204, -.04625736007561, 4482777.06], [3.09191371068437e-9, 8983055096812155e-21, 6995724062e-14, 23.10934304144901, -.00023663490511, -.6321817810242, -.00663494467273, .03430082397953, -.00466043876332, 2555164.4], [2.890871144776878e-9, 8983055095805407e-21, -3.068298e-8, 7.47137025468032, -353937994e-14, -.02145144861037, -1234426596e-14, .00010322952773, -323890364e-14, 826088.5]],
            c = [[-.0015702102444, 111320.7020616939, 0x60e374c3105a3, -0x24bb4115e2e164, 0x5cc55543bb0ae8, -0x7ce070193f3784, 0x5e7ca61ddf8150, -0x261a578d8b24d0, 0x665d60f3742ca, 82.5], [.0008277824516172526, 111320.7020463578, 647795574.6671607, -4082003173.641316, 10774905663.51142, -15171875531.51559, 12053065338.62167, -5124939663.577472, 913311935.9512032, 67.5], [.00337398766765, 111320.7020202162, 4481351.045890365, -23393751.19931662, 79682215.47186455, -115964993.2797253, 97236711.15602145, -43661946.33752821, 8477230.501135234, 52.5], [.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5], [-.0003441963504368392, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5], [-.0003218135878613132, 111320.7020701615, .00369383431289, 823725.6402795718, .46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, .37238884252424, 7.45]];
        return exports.pixelToLngLat = function (e, n, i) {
            return t([e / Math.pow(2, i - 18), n / Math.pow(2, i - 18)])
        }, exports.lngLatToPixel = function (t, n, i) {
            var o = e([t, n]), r = o[0] * Math.pow(2, i - 18), s = o[1] * Math.pow(2, i - 18);
            return [Math.ceil(r), Math.ceil(s)]
        }, exports
    }), define("common/convert", ["lib/convert"], function (e) {
        return e
    }), define("lib/pcConfig", ["require", "./util", "./tpl", "./pc/fixed_2", "./pc/Fixed", "./view", "./pc/placeholder", "./cookie", "./pc/CustomSelect", "./convert"], function (require) {
        return {
            package: "common",
            resource: {
                util: require("./util"),
                tpl: require("./tpl"),
                fixed: require("./pc/fixed_2"),
                fix: require("./pc/Fixed"),
                view: require("./view"),
                placeHolder: require("./pc/placeholder"),
                cookie: require("./cookie"),
                CustomSelect: require("./pc/CustomSelect"),
                convert: require("./convert")
            },
            injection: [{
                id: "common.fixed",
                method: { Fixed: ["pbase.lib"], setFixed: ["pbase.browser"] }
            }, { id: "common.view", method: { getWrap: ["pbase.dom"] } }, {
                id: "common.placeHolder",
                method: {
                    init: ["pbase.browser", "pbase.lib", "pbase.events"],
                    ctrlFocus: ["pbase.lib"],
                    ctrlBlur: ["pbase.lib"]
                }
            }]
        }
    }), define("common/pcConfig", ["lib/pcConfig"], function (e) {
        return e
    }), define("base/pc/event", ["require"], function (require) {
        var exports = {}, e = {};
        return exports.on = function (t, n) {
            (e[t] = e[t] || []).push(n)
        }, exports.off = function (t, n) {
            var i = [].slice.call(arguments, 0).length;
            if (0 === i.length) return void (e = []);
            if (1 === i.length) return delete e[t], e; else return
        }, exports.trigger = function (t) {
            var n = [].slice.call(arguments, 1), i = e[t];
            if (i) for (var o = i.length; o--;) i[o].call(this, n)
        }, exports.debounce = function (e, t, n) {
            var i;
            return function () {
                var o = this, r = arguments, s = function () {
                    if (i = null, !n) e.apply(o, r)
                }, a = n && !i;
                if (clearTimeout(i), i = setTimeout(s, t), a) e.apply(o, r)
            }
        }, exports.throttle = function (e, t) {
            var n = null, i = !0;
            return t = t || 100, function () {
                var o = this, r = arguments;
                if (i) e.apply(o, r), i = !1;
                var s = function () {
                    clearTimeout(n), n = null, e.apply(o, r)
                };
                if (!n) n = setTimeout(s, t)
            }
        }, exports.domOn = function (e, t, n, i, o, r) {
            var s = [];
            if (t.isType(n, "Array")) for (var a = n.length; a--;) s.push(n[a]); else s.push(n);
            for (var c = s.length; c--;) {
                var u = e.g(s[c]) || s[c];
                if (u) if (u.addEventListener) u.addEventListener(i, o, !1); else if (u.attactEvent) u.attachEvent("on" + i, o); else u["on" + i] = o
            }
        }, exports.domTrigger = function (e, t) {
            var n, i = null;
            if (document.createEventObject) n = document.createEventObject(), i = e.fireEvent("on" + t, n); else n = document.createEvent("HTMLEvents"), n.initEvent(t, !0, !0), i = !e.dispatchEvent(n);
            return i
        }, exports.domOff = function (e, t, n, i) {
            var o = e.g(t);
            if (o) if (o.removeEventListener) o.removeEventListener(n, i, !1); else if (o.detactEvent) o.detachEvent("on" + n, i); else o["on" + n] = void 0
        }, exports.domStop = function (e) {
            if (e = e || window.event, e.stopPropagation) e.stopPropagation(); else e.cancelBubble = !0
        }, exports.domPrevent = function (e) {
            if (e = e || window.event, e.preventDefault) e.preventDefault();
            e.returnValue = !1
        }, exports
    }), define("base/pc/post", ["require"], function (require) {
        function e(e) {
            var t = {}, n = e || window.event, i = n.target || n.srcElement;
            if (t.status = 0, 0 === t.status) exports.sucess(t); else exports.fail(t);
            i.parentNode.removeChild(i), i.onreadystatechange = null, i.onload = null
        }

        function t() {
        }

        function n(e, t) {
            var n = document.getElementById(t);
            if (!n.hidden) {
                for (var i in e) if (e.hasOwnProperty(i)) {
                    var o = document.createElement("input");
                    o.type = "hidden", o.name = i, o.value = e[i], n.appendChild(o)
                }
                n.hidden = !0
            }
        }

        var exports = {};
        return exports.postAjax = function (i, o, r, s, a, c, u, d, l) {
            var f = o.getWrap();
            exports.sucess = d || t, exports.fail = l || t;
            var m = "nb-board-iframe-js", p = document.getElementById(m);
            if (!p) p = i.createIframe(m, m, f);
            var g;
            if ("object" == typeof p.onload || "object" == typeof p.onreadystatechange) p.onreadystatechange = function () {
                if (/^loaded|complete$/.test(this.readyState)) this.onreadystatechange = null, e.call(this)
            }, p.onload = e;
            if (r.ie) g = document.charset, document.charset = "utf-8";
            var h = document.getElementById(u);
            if (!h) h = i.createDom("form", { id: u, action: a, method: "post", "accept-charset": "utf-8" }, f);
            if (n(c, u), h.target = m, r.ie && r.ie < 10) h.onsubmit = function () {
                for (var e, t = h.elements, n = 0; e = t[n]; n++) e.value = s.getValue(e);
                for (h.submit(), n = 0; e = t[n]; n++) if ("" === e.value) e.value = s.getPh(e)
            }, h.onsubmit(); else h.submit();
            document.charset = g
        }, exports
    }), define("base/pc/client", ["require"], function (require) {
        var exports = {};
        return exports.getInfo = function () {
            function e() {
                var e = (new Date).getTimezoneOffset(), t = parseInt(e / 60, 10), n = e % 60, i = "-";
                if (t < 0 || n < 0) if (i = "+", t = -t, n < 0) n = -n;
                return t += "", n += "", "UTC" + i + t + ":" + n
            }

            var t = window.navigator, n = window.screen;
            return {
                language: t.language || t.systemLanguage,
                color: n.colorDepth + "",
                ppi: n.width + "*" + n.height,
                timeZone: e()
            }
        }, exports
    }), define("base/pc/json", [], function () {
        function e(e) {
            var t = {}.toString.call(e);
            return t = t.substring(8, t.length - 1), t.toLowerCase()
        }

        function t(t) {
            var i = n[e(t)];
            return i ? i(t) : "" + t
        }

        var n = {};
        return n.array = function (e) {
            var n = [];
            n.push("[");
            for (var i = 0, o = e.length; i < o; i++) n.push(t(e[i])), n.push(",");
            return n.splice(n.length - 1, 1), n.push("]"), n.join("")
        }, n.object = function (e) {
            if (null === e) return "null";
            var n = [];
            n.push("{");
            for (var i in e) if (e.hasOwnProperty(i)) n = n.concat(['"' + i + '":', t(e[i]), ","]);
            return n.splice(n.length - 1, 1), n.push("}"), n.join("")
        }, n.string = function (e) {
            return '"' + e + '"'
        }, {
            parse: function (e) {
                var t = null;
                try {
                    if (window.JSON && window.JSON.parse) t = window.JSON.parse(e); else t = new Function("return (" + e + ");")()
                } catch (e) {
                }
                return t
            }, stringify: function (e) {
                var n;
                if (window.JSON && window.JSON.stringify) n = window.JSON.stringify(e); else n = t(e);
                return n
            }
        }
    }), define("base/basePcConfig", ["require", "./pc/brower", "./pc/dom", "./pc/lib", "./pc/event", "./pc/post", "./pc/client", "./pc/json"], function (require) {
        return {
            package: "pbase",
            resource: {
                browser: require("./pc/brower"),
                dom: require("./pc/dom"),
                lib: require("./pc/lib"),
                events: require("./pc/event"),
                post: require("./pc/post"),
                client: require("./pc/client"),
                JSON: require("./pc/json")
            },
            injection: [{
                id: "pbase.post",
                method: { postAjax: ["pbase.dom", "common.view", "pbase.browser", "common.placeHolder"] }
            }, {
                id: "pbase.dom",
                method: {
                    hide: ["pbase.lib"],
                    show: ["pbase.lib"],
                    g: ["pbase.lib"],
                    attributeName: ["pbase.browser"],
                    createIframe: ["pbase.browser"]
                }
            }, { id: "pbase.events", method: { domOn: ["pbase.dom", "pbase.lib"], domOff: ["pbase.dom"] } }]
        }
    }), define("embed/entry/pc/pcConfig", ["require", "../../data/bullConfig", "im-core/bullConfig", "im-lib/config", "../../log/config", "../../icon/iconPConfig", "../../invite/invitePConfig", "../../message/messagePConfig", "../../embedChat/config", "lib/pcConfig", "../../../common/pcConfig", "../../../base/basePcConfig"], function (require) {
        return {
            package: "embed",
            importConfig: [require("../../data/bullConfig"), require("im-core/bullConfig"), require("im-lib/config"), require("../../log/config"), require("../../icon/iconPConfig"), require("../../invite/invitePConfig"), require("../../message/messagePConfig"), require("../../embedChat/config"), require("lib/pcConfig"), require("../../../common/pcConfig"), require("../../../base/basePcConfig")]
        }
    }), define("cl", ["require", "./base/pc/brower"], function (require) {
        var exports = {}, e = require("./base/pc/brower");
        return exports.load = function (t, n, i, o) {
            var r = document.createElement("link");
            if (r.setAttribute("rel", "stylesheet"), r.setAttribute("type", "text/css"), r.setAttribute("href", n.toUrl(t)), ("object" == typeof r.onload || "object" == typeof r.onreadystatechange) && !e.isBDBox) {
                var s = !1;
                r.onload = function () {
                    r.onreadystatechange = null, r.onload = null, i(!0), s = !0
                }, r.onreadystatechange = function () {
                    if (/^loaded|complete$/.test(this.readyState)) this.onreadystatechange = null, r.onload = null, i(!0), s = !0
                }, setTimeout(function () {
                    if (!s) i(!0)
                }, 3e3)
            } else i(!0);
            (document.getElementsByTagName("head")[0] || document.body).appendChild(r)
        }, exports
    }), define("lib/css", ["cl"], function (e) {
        return e
    }), define("common/css", ["cl"], function (e) {
        return e
    }), define("embed/entry/pc/main", ["require", "bull", "./pcConfig", "cl!../../css/pc/main.css"], function (require) {
        var e = require("bull"), t = require("./pcConfig"), exports = {};
        return exports.init = function () {
            e.init(t), e.get("log.main").init(), e.get("log.main").logStartNb(), require("cl!../../css/pc/main.css");
            var n = e.get("data.config");
            if (!n.getServer().configBox.isWebim) (0, (false || document.getElementById("newBridge")).require)(["embed/webimlight/main"], function () {
                var t = n.getServer("configBox"), i = n.getServer("siteObj"), o = +t.webimConfig.isOpenAutoDirectCom,
                    r = 1 == +t.seekIcon.iconType, s = +t.webimConfig.isShowIntelWelLan, a = +i.isCsOnline;
                if (0 == +t.inviteBox.likeCrm && !r && o && a) {
                    var c = e.get("core.config");
                    i.from = 7;
                    var u = t.inviteBox, d = t.webimConfig;
                    if (void 0 !== d.license) {
                        d.license = String(d.license);
                        var l = d.license.split("").reverse(), f = l[2];
                        if (1 == +f && 1 == +s) return void e.get("pinvite.smartyInvite").getIntelWelLan(c, u, i, exports.directConnect);
                        if (1 != +f) e.get("log.main").logStopACOrIW(-1, 1); else if (1 != +s) e.get("log.main").logStopACOrIW(-1, 2)
                    } else e.get("log.main").logStopACOrIW(-1, 1);
                    exports.directConnect()
                } else {
                    var m = -1;
                    if (1 == +r) m = 1; else if (1 != +o) m = 2; else if (1 != +a) m = 3;
                    e.get("log.main").logStopACOrIW(m)
                }
            });
            e.get("log.main").logEndNb()
        }, exports.directConnect = function () {
            if (window.directConnectKey) {
                if (document.getElementById("nbWebImLightContainer")) return;
                e.get("log.main").logAutoDirectCom(), e.get("pchat.chat").openWebimLight(!0)
            } else setTimeout(function () {
                exports.directConnect()
            }, 800)
        }, exports
    }), require(["embed/entry/pc/main"], function (n) {
        document.getElementById("newBridge").deferOnce.on(n.init)
    })
}();