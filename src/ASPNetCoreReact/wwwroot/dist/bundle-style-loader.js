﻿! function (t) {
    var e = {};

    function o(r) {
        if (e[r]) return e[r].exports;
        var n = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(n.exports, n, n.exports, o), n.l = !0, n.exports
    }
    o.m = t, o.c = e, o.d = function (t, e, r) {
        o.o(t, e) || Object.defineProperty(t, e, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, o.r = function (t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, o.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return o.d(e, "a", e), e
    }, o.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o.p = "", o(o.s = 11)
}([function (t, e, o) {
    var r, n, i = {},
        a = (r = function () {
            return window && document && document.all && !window.atob
        }, function () {
            return void 0 === n && (n = r.apply(this, arguments)), n
        }),
        l = function (t) {
            var e = {};
            return function (t) {
                if ("function" == typeof t) return t();
                if (void 0 === e[t]) {
                    var o = function (t) {
                        return document.querySelector(t)
                    }.call(this, t);
                    if (window.HTMLIFrameElement && o instanceof window.HTMLIFrameElement) try {
                        o = o.contentDocument.head
                    } catch (t) {
                        o = null
                    }
                    e[t] = o
                }
                return e[t]
            }
        }(),
        s = null,
        d = 0,
        c = [],
        p = o(6);

    function m(t, e) {
        for (var o = 0; o < t.length; o++) {
            var r = t[o],
                n = i[r.id];
            if (n) {
                n.refs++;
                for (var a = 0; a < n.parts.length; a++) n.parts[a](r.parts[a]);
                for (; a < r.parts.length; a++) n.parts.push(x(r.parts[a], e))
            } else {
                var l = [];
                for (a = 0; a < r.parts.length; a++) l.push(x(r.parts[a], e));
                i[r.id] = {
                    id: r.id,
                    refs: 1,
                    parts: l
                }
            }
        }
    }

    function f(t, e) {
        for (var o = [], r = {}, n = 0; n < t.length; n++) {
            var i = t[n],
                a = e.base ? i[0] + e.base : i[0],
                l = {
                    css: i[1],
                    media: i[2],
                    sourceMap: i[3]
                };
            r[a] ? r[a].parts.push(l) : o.push(r[a] = {
                id: a,
                parts: [l]
            })
        }
        return o
    }

    function u(t, e) {
        var o = l(t.insertInto);
        if (!o) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var r = c[c.length - 1];
        if ("top" === t.insertAt) r ? r.nextSibling ? o.insertBefore(e, r.nextSibling) : o.appendChild(e) : o.insertBefore(e, o.firstChild), c.push(e);
        else if ("bottom" === t.insertAt) o.appendChild(e);
        else {
            if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var n = l(t.insertInto + " " + t.insertAt.before);
            o.insertBefore(e, n)
        }
    }

    function g(t) {
        if (null === t.parentNode) return !1;
        t.parentNode.removeChild(t);
        var e = c.indexOf(t);
        e >= 0 && c.splice(e, 1)
    }

    function b(t) {
        var e = document.createElement("style");
        return void 0 === t.attrs.type && (t.attrs.type = "text/css"), h(e, t.attrs), u(t, e), e
    }

    function h(t, e) {
        Object.keys(e).forEach(function (o) {
            t.setAttribute(o, e[o])
        })
    }

    function x(t, e) {
        var o, r, n, i;
        if (e.transform && t.css) {
            if (!(i = e.transform(t.css))) return function () { };
            t.css = i
        }
        if (e.singleton) {
            var a = d++;
            o = s || (s = b(e)), r = w.bind(null, o, a, !1), n = w.bind(null, o, a, !0)
        } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (o = function (t) {
            var e = document.createElement("link");
            return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", h(e, t.attrs), u(t, e), e
        }(e), r = function (t, e, o) {
            var r = o.css,
                n = o.sourceMap,
                i = void 0 === e.convertToAbsoluteUrls && n;
            (e.convertToAbsoluteUrls || i) && (r = p(r));
            n && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */");
            var a = new Blob([r], {
                type: "text/css"
            }),
                l = t.href;
            t.href = URL.createObjectURL(a), l && URL.revokeObjectURL(l)
        }.bind(null, o, e), n = function () {
            g(o), o.href && URL.revokeObjectURL(o.href)
        }) : (o = b(e), r = function (t, e) {
            var o = e.css,
                r = e.media;
            r && t.setAttribute("media", r);
            if (t.styleSheet) t.styleSheet.cssText = o;
            else {
                for (; t.firstChild;) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(o))
            }
        }.bind(null, o), n = function () {
            g(o)
        });
        return r(t),
            function (e) {
                if (e) {
                    if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                    r(t = e)
                } else n()
            }
    }
    t.exports = function (t, e) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
        var o = f(t, e);
        return m(o, e),
            function (t) {
                for (var r = [], n = 0; n < o.length; n++) {
                    var a = o[n];
                    (l = i[a.id]).refs-- , r.push(l)
                }
                t && m(f(t, e), e);
                for (n = 0; n < r.length; n++) {
                    var l;
                    if (0 === (l = r[n]).refs) {
                        for (var s = 0; s < l.parts.length; s++) l.parts[s]();
                        delete i[l.id]
                    }
                }
            }
    };
    var v, y = (v = [], function (t, e) {
        return v[t] = e, v.filter(Boolean).join("\n")
    });

    function w(t, e, o, r) {
        var n = o ? "" : r.css;
        if (t.styleSheet) t.styleSheet.cssText = y(e, n);
        else {
            var i = document.createTextNode(n),
                a = t.childNodes;
            a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i)
        }
    }
}, function (t, e) {
    t.exports = function (t) {
        var e = [];
        return e.toString = function () {
            return this.map(function (e) {
                var o = function (t, e) {
                    var o = t[1] || "",
                        r = t[3];
                    if (!r) return o;
                    if (e && "function" == typeof btoa) {
                        var n = (a = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
                            i = r.sources.map(function (t) {
                                return "/*# sourceURL=" + r.sourceRoot + t + " */"
                            });
                        return [o].concat(i).concat([n]).join("\n")
                    }
                    var a;
                    return [o].join("\n")
                }(e, t);
                return e[2] ? "@media " + e[2] + "{" + o + "}" : o
            }).join("")
        }, e.i = function (t, o) {
            "string" == typeof t && (t = [
                [null, t, ""]
            ]);
            for (var r = {}, n = 0; n < this.length; n++) {
                var i = this[n][0];
                "number" == typeof i && (r[i] = !0)
            }
            for (n = 0; n < t.length; n++) {
                var a = t[n];
                "number" == typeof a[0] && r[a[0]] || (o && !a[2] ? a[2] = o : o && (a[2] = "(" + a[2] + ") and (" + o + ")"), e.push(a))
            }
        }, e
    }
}, function (t, e) {
    getText = function () {
        return "Data from getText function in lib.js"
    }
}, function (t, e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = function () {
        function t(t, e) {
            for (var o = 0; o < e.length; o++) {
                var r = e[o];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }
        return function (e, o, r) {
            return o && t(e.prototype, o), r && t(e, r), e
        }
    }();
    var r = function () {
        function t() {
            ! function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.text = "Data from ES6 class"
        }
        return o(t, [{
            key: "getData",
            value: function () {
                return this.text
            }
        }]), t
    }();
    e.default = r
}, function (t, e, o) {
    (t.exports = o(1)(!1)).push([t.i, "h1 {\r\n    color: red;\r\n}\r\n", ""])
}, function (t, e, o) {
    var r = o(4);
    "string" == typeof r && (r = [
        [t.i, r, ""]
    ]);
    var n = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    o(0)(r, n);
    r.locals && (t.exports = r.locals)
}, function (t, e) {
    t.exports = function (t) {
        var e = "undefined" != typeof window && window.location;
        if (!e) throw new Error("fixUrls requires window.location");
        if (!t || "string" != typeof t) return t;
        var o = e.protocol + "//" + e.host,
            r = o + e.pathname.replace(/\/[^\/]*$/, "/");
        return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
            var n, i = e.trim().replace(/^"(.*)"$/, function (t, e) {
                return e
            }).replace(/^'(.*)'$/, function (t, e) {
                return e
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? t : (n = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? o + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(n) + ")")
        })
    }
}, function (t, e, o) {
    (t.exports = o(1)(!1)).push([t.i, '/*!\n * Bootstrap v4.1.1 (https://getbootstrap.com/)\n * Copyright 2011-2018 The Bootstrap Authors\n * Copyright 2011-2018 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */:root{--blue:#007bff;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#dc3545;--orange:#fd7e14;--yellow:#ffc107;--green:#28a745;--teal:#20c997;--cyan:#17a2b8;--white:#fff;--gray:#6c757d;--gray-dark:#343a40;--primary:#007bff;--secondary:#6c757d;--success:#28a745;--info:#17a2b8;--warning:#ffc107;--danger:#dc3545;--light:#f8f9fa;--dark:#343a40;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";--font-family-monospace:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}*,::after,::before{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-ms-overflow-style:scrollbar;-webkit-tap-highlight-color:transparent}@-ms-viewport{width:device-width}article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}[tabindex="-1"]:focus{outline:0!important}hr{box-sizing:content-box;height:0;overflow:visible}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}abbr[data-original-title],abbr[title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;border-bottom:0}address{margin-bottom:1rem;font-style:normal;line-height:inherit}dl,ol,ul{margin-top:0;margin-bottom:1rem}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}dfn{font-style:italic}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:#007bff;text-decoration:none;background-color:transparent;-webkit-text-decoration-skip:objects}a:hover{color:#0056b3;text-decoration:underline}a:not([href]):not([tabindex]){color:inherit;text-decoration:none}a:not([href]):not([tabindex]):focus,a:not([href]):not([tabindex]):hover{color:inherit;text-decoration:none}a:not([href]):not([tabindex]):focus{outline:0}code,kbd,pre,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;font-size:1em}pre{margin-top:0;margin-bottom:1rem;overflow:auto;-ms-overflow-style:scrollbar}figure{margin:0 0 1rem}img{vertical-align:middle;border-style:none}svg:not(:root){overflow:hidden}table{border-collapse:collapse}caption{padding-top:.75rem;padding-bottom:.75rem;color:#6c757d;text-align:left;caption-side:bottom}th{text-align:inherit}label{display:inline-block;margin-bottom:.5rem}button{border-radius:0}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=date],input[type=datetime-local],input[type=month],input[type=time]{-webkit-appearance:listbox}textarea{overflow:auto;resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:none}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}summary{display:list-item;cursor:pointer}template{display:none}[hidden]{display:none!important}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{margin-bottom:.5rem;font-family:inherit;font-weight:500;line-height:1.2;color:inherit}.h1,h1{font-size:2.5rem}.h2,h2{font-size:2rem}.h3,h3{font-size:1.75rem}.h4,h4{font-size:1.5rem}.h5,h5{font-size:1.25rem}.h6,h6{font-size:1rem}.lead{font-size:1.25rem;font-weight:300}.display-1{font-size:6rem;font-weight:300;line-height:1.2}.display-2{font-size:5.5rem;font-weight:300;line-height:1.2}.display-3{font-size:4.5rem;font-weight:300;line-height:1.2}.display-4{font-size:3.5rem;font-weight:300;line-height:1.2}hr{margin-top:1rem;margin-bottom:1rem;border:0;border-top:1px solid rgba(0,0,0,.1)}.small,small{font-size:80%;font-weight:400}.mark,mark{padding:.2em;background-color:#fcf8e3}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;list-style:none}.list-inline-item{display:inline-block}.list-inline-item:not(:last-child){margin-right:.5rem}.initialism{font-size:90%;text-transform:uppercase}.blockquote{margin-bottom:1rem;font-size:1.25rem}.blockquote-footer{display:block;font-size:80%;color:#6c757d}.blockquote-footer::before{content:"\\2014   \\A0"}.img-fluid{max-width:100%;height:auto}.img-thumbnail{padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.25rem;max-width:100%;height:auto}.figure{display:inline-block}.figure-img{margin-bottom:.5rem;line-height:1}.figure-caption{font-size:90%;color:#6c757d}code{font-size:87.5%;color:#e83e8c;word-break:break-word}a>code{color:inherit}kbd{padding:.2rem .4rem;font-size:87.5%;color:#fff;background-color:#212529;border-radius:.2rem}kbd kbd{padding:0;font-size:100%;font-weight:700}pre{display:block;font-size:87.5%;color:#212529}pre code{font-size:inherit;color:inherit;word-break:normal}.pre-scrollable{max-height:340px;overflow-y:scroll}.container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:720px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1140px}}.container-fluid{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.no-gutters{margin-right:0;margin-left:0}.no-gutters>.col,.no-gutters>[class*=col-]{padding-right:0;padding-left:0}.col,.col-1,.col-10,.col-11,.col-12,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-auto,.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-auto,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-auto,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-auto{position:relative;width:100%;min-height:1px;padding-right:15px;padding-left:15px}.col{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:none}.col-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-first{-ms-flex-order:-1;order:-1}.order-last{-ms-flex-order:13;order:13}.order-0{-ms-flex-order:0;order:0}.order-1{-ms-flex-order:1;order:1}.order-2{-ms-flex-order:2;order:2}.order-3{-ms-flex-order:3;order:3}.order-4{-ms-flex-order:4;order:4}.order-5{-ms-flex-order:5;order:5}.order-6{-ms-flex-order:6;order:6}.order-7{-ms-flex-order:7;order:7}.order-8{-ms-flex-order:8;order:8}.order-9{-ms-flex-order:9;order:9}.order-10{-ms-flex-order:10;order:10}.order-11{-ms-flex-order:11;order:11}.order-12{-ms-flex-order:12;order:12}.offset-1{margin-left:8.333333%}.offset-2{margin-left:16.666667%}.offset-3{margin-left:25%}.offset-4{margin-left:33.333333%}.offset-5{margin-left:41.666667%}.offset-6{margin-left:50%}.offset-7{margin-left:58.333333%}.offset-8{margin-left:66.666667%}.offset-9{margin-left:75%}.offset-10{margin-left:83.333333%}.offset-11{margin-left:91.666667%}@media (min-width:576px){.col-sm{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-sm-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:none}.col-sm-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-sm-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-sm-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-sm-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-sm-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-sm-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-sm-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-sm-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-sm-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-sm-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-sm-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-sm-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-sm-first{-ms-flex-order:-1;order:-1}.order-sm-last{-ms-flex-order:13;order:13}.order-sm-0{-ms-flex-order:0;order:0}.order-sm-1{-ms-flex-order:1;order:1}.order-sm-2{-ms-flex-order:2;order:2}.order-sm-3{-ms-flex-order:3;order:3}.order-sm-4{-ms-flex-order:4;order:4}.order-sm-5{-ms-flex-order:5;order:5}.order-sm-6{-ms-flex-order:6;order:6}.order-sm-7{-ms-flex-order:7;order:7}.order-sm-8{-ms-flex-order:8;order:8}.order-sm-9{-ms-flex-order:9;order:9}.order-sm-10{-ms-flex-order:10;order:10}.order-sm-11{-ms-flex-order:11;order:11}.order-sm-12{-ms-flex-order:12;order:12}.offset-sm-0{margin-left:0}.offset-sm-1{margin-left:8.333333%}.offset-sm-2{margin-left:16.666667%}.offset-sm-3{margin-left:25%}.offset-sm-4{margin-left:33.333333%}.offset-sm-5{margin-left:41.666667%}.offset-sm-6{margin-left:50%}.offset-sm-7{margin-left:58.333333%}.offset-sm-8{margin-left:66.666667%}.offset-sm-9{margin-left:75%}.offset-sm-10{margin-left:83.333333%}.offset-sm-11{margin-left:91.666667%}}@media (min-width:768px){.col-md{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-md-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:none}.col-md-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-md-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-md-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-md-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-md-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-md-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-md-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-md-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-md-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-md-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-md-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-md-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-md-first{-ms-flex-order:-1;order:-1}.order-md-last{-ms-flex-order:13;order:13}.order-md-0{-ms-flex-order:0;order:0}.order-md-1{-ms-flex-order:1;order:1}.order-md-2{-ms-flex-order:2;order:2}.order-md-3{-ms-flex-order:3;order:3}.order-md-4{-ms-flex-order:4;order:4}.order-md-5{-ms-flex-order:5;order:5}.order-md-6{-ms-flex-order:6;order:6}.order-md-7{-ms-flex-order:7;order:7}.order-md-8{-ms-flex-order:8;order:8}.order-md-9{-ms-flex-order:9;order:9}.order-md-10{-ms-flex-order:10;order:10}.order-md-11{-ms-flex-order:11;order:11}.order-md-12{-ms-flex-order:12;order:12}.offset-md-0{margin-left:0}.offset-md-1{margin-left:8.333333%}.offset-md-2{margin-left:16.666667%}.offset-md-3{margin-left:25%}.offset-md-4{margin-left:33.333333%}.offset-md-5{margin-left:41.666667%}.offset-md-6{margin-left:50%}.offset-md-7{margin-left:58.333333%}.offset-md-8{margin-left:66.666667%}.offset-md-9{margin-left:75%}.offset-md-10{margin-left:83.333333%}.offset-md-11{margin-left:91.666667%}}@media (min-width:992px){.col-lg{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-lg-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:none}.col-lg-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-lg-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-lg-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-lg-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-lg-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-lg-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-lg-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-lg-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-lg-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-lg-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-lg-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-lg-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-lg-first{-ms-flex-order:-1;order:-1}.order-lg-last{-ms-flex-order:13;order:13}.order-lg-0{-ms-flex-order:0;order:0}.order-lg-1{-ms-flex-order:1;order:1}.order-lg-2{-ms-flex-order:2;order:2}.order-lg-3{-ms-flex-order:3;order:3}.order-lg-4{-ms-flex-order:4;order:4}.order-lg-5{-ms-flex-order:5;order:5}.order-lg-6{-ms-flex-order:6;order:6}.order-lg-7{-ms-flex-order:7;order:7}.order-lg-8{-ms-flex-order:8;order:8}.order-lg-9{-ms-flex-order:9;order:9}.order-lg-10{-ms-flex-order:10;order:10}.order-lg-11{-ms-flex-order:11;order:11}.order-lg-12{-ms-flex-order:12;order:12}.offset-lg-0{margin-left:0}.offset-lg-1{margin-left:8.333333%}.offset-lg-2{margin-left:16.666667%}.offset-lg-3{margin-left:25%}.offset-lg-4{margin-left:33.333333%}.offset-lg-5{margin-left:41.666667%}.offset-lg-6{margin-left:50%}.offset-lg-7{margin-left:58.333333%}.offset-lg-8{margin-left:66.666667%}.offset-lg-9{margin-left:75%}.offset-lg-10{margin-left:83.333333%}.offset-lg-11{margin-left:91.666667%}}@media (min-width:1200px){.col-xl{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.col-xl-auto{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:none}.col-xl-1{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.col-xl-2{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.col-xl-3{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-xl-4{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.col-xl-5{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.col-xl-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-xl-7{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.col-xl-8{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.col-xl-9{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.col-xl-10{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.col-xl-11{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.col-xl-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.order-xl-first{-ms-flex-order:-1;order:-1}.order-xl-last{-ms-flex-order:13;order:13}.order-xl-0{-ms-flex-order:0;order:0}.order-xl-1{-ms-flex-order:1;order:1}.order-xl-2{-ms-flex-order:2;order:2}.order-xl-3{-ms-flex-order:3;order:3}.order-xl-4{-ms-flex-order:4;order:4}.order-xl-5{-ms-flex-order:5;order:5}.order-xl-6{-ms-flex-order:6;order:6}.order-xl-7{-ms-flex-order:7;order:7}.order-xl-8{-ms-flex-order:8;order:8}.order-xl-9{-ms-flex-order:9;order:9}.order-xl-10{-ms-flex-order:10;order:10}.order-xl-11{-ms-flex-order:11;order:11}.order-xl-12{-ms-flex-order:12;order:12}.offset-xl-0{margin-left:0}.offset-xl-1{margin-left:8.333333%}.offset-xl-2{margin-left:16.666667%}.offset-xl-3{margin-left:25%}.offset-xl-4{margin-left:33.333333%}.offset-xl-5{margin-left:41.666667%}.offset-xl-6{margin-left:50%}.offset-xl-7{margin-left:58.333333%}.offset-xl-8{margin-left:66.666667%}.offset-xl-9{margin-left:75%}.offset-xl-10{margin-left:83.333333%}.offset-xl-11{margin-left:91.666667%}}.table{width:100%;max-width:100%;margin-bottom:1rem;background-color:transparent}.table td,.table th{padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6}.table thead th{vertical-align:bottom;border-bottom:2px solid #dee2e6}.table tbody+tbody{border-top:2px solid #dee2e6}.table .table{background-color:#fff}.table-sm td,.table-sm th{padding:.3rem}.table-bordered{border:1px solid #dee2e6}.table-bordered td,.table-bordered th{border:1px solid #dee2e6}.table-bordered thead td,.table-bordered thead th{border-bottom-width:2px}.table-borderless tbody+tbody,.table-borderless td,.table-borderless th,.table-borderless thead th{border:0}.table-striped tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.table-hover tbody tr:hover{background-color:rgba(0,0,0,.075)}.table-primary,.table-primary>td,.table-primary>th{background-color:#b8daff}.table-hover .table-primary:hover{background-color:#9fcdff}.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th{background-color:#9fcdff}.table-secondary,.table-secondary>td,.table-secondary>th{background-color:#d6d8db}.table-hover .table-secondary:hover{background-color:#c8cbcf}.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th{background-color:#c8cbcf}.table-success,.table-success>td,.table-success>th{background-color:#c3e6cb}.table-hover .table-success:hover{background-color:#b1dfbb}.table-hover .table-success:hover>td,.table-hover .table-success:hover>th{background-color:#b1dfbb}.table-info,.table-info>td,.table-info>th{background-color:#bee5eb}.table-hover .table-info:hover{background-color:#abdde5}.table-hover .table-info:hover>td,.table-hover .table-info:hover>th{background-color:#abdde5}.table-warning,.table-warning>td,.table-warning>th{background-color:#ffeeba}.table-hover .table-warning:hover{background-color:#ffe8a1}.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th{background-color:#ffe8a1}.table-danger,.table-danger>td,.table-danger>th{background-color:#f5c6cb}.table-hover .table-danger:hover{background-color:#f1b0b7}.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th{background-color:#f1b0b7}.table-light,.table-light>td,.table-light>th{background-color:#fdfdfe}.table-hover .table-light:hover{background-color:#ececf6}.table-hover .table-light:hover>td,.table-hover .table-light:hover>th{background-color:#ececf6}.table-dark,.table-dark>td,.table-dark>th{background-color:#c6c8ca}.table-hover .table-dark:hover{background-color:#b9bbbe}.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th{background-color:#b9bbbe}.table-active,.table-active>td,.table-active>th{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover{background-color:rgba(0,0,0,.075)}.table-hover .table-active:hover>td,.table-hover .table-active:hover>th{background-color:rgba(0,0,0,.075)}.table .thead-dark th{color:#fff;background-color:#212529;border-color:#32383e}.table .thead-light th{color:#495057;background-color:#e9ecef;border-color:#dee2e6}.table-dark{color:#fff;background-color:#212529}.table-dark td,.table-dark th,.table-dark thead th{border-color:#32383e}.table-dark.table-bordered{border:0}.table-dark.table-striped tbody tr:nth-of-type(odd){background-color:rgba(255,255,255,.05)}.table-dark.table-hover tbody tr:hover{background-color:rgba(255,255,255,.075)}@media (max-width:575.98px){.table-responsive-sm{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive-sm>.table-bordered{border:0}}@media (max-width:767.98px){.table-responsive-md{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive-md>.table-bordered{border:0}}@media (max-width:991.98px){.table-responsive-lg{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive-lg>.table-bordered{border:0}}@media (max-width:1199.98px){.table-responsive-xl{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive-xl>.table-bordered{border:0}}.table-responsive{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;-ms-overflow-style:-ms-autohiding-scrollbar}.table-responsive>.table-bordered{border:0}.form-control{display:block;width:100%;padding:.375rem .75rem;font-size:1rem;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media screen and (prefers-reduced-motion:reduce){.form-control{transition:none}}.form-control::-ms-expand{background-color:transparent;border:0}.form-control:focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.form-control::-webkit-input-placeholder{color:#6c757d;opacity:1}.form-control::-moz-placeholder{color:#6c757d;opacity:1}.form-control:-ms-input-placeholder{color:#6c757d;opacity:1}.form-control::-ms-input-placeholder{color:#6c757d;opacity:1}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}select.form-control:not([size]):not([multiple]){height:calc(2.25rem + 2px)}select.form-control:focus::-ms-value{color:#495057;background-color:#fff}.form-control-file,.form-control-range{display:block;width:100%}.col-form-label{padding-top:calc(.375rem + 1px);padding-bottom:calc(.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.col-form-label-lg{padding-top:calc(.5rem + 1px);padding-bottom:calc(.5rem + 1px);font-size:1.25rem;line-height:1.5}.col-form-label-sm{padding-top:calc(.25rem + 1px);padding-bottom:calc(.25rem + 1px);font-size:.875rem;line-height:1.5}.form-control-plaintext{display:block;width:100%;padding-top:.375rem;padding-bottom:.375rem;margin-bottom:0;line-height:1.5;color:#212529;background-color:transparent;border:solid transparent;border-width:1px 0}.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm,.input-group-lg>.form-control-plaintext.form-control,.input-group-lg>.input-group-append>.form-control-plaintext.btn,.input-group-lg>.input-group-append>.form-control-plaintext.input-group-text,.input-group-lg>.input-group-prepend>.form-control-plaintext.btn,.input-group-lg>.input-group-prepend>.form-control-plaintext.input-group-text,.input-group-sm>.form-control-plaintext.form-control,.input-group-sm>.input-group-append>.form-control-plaintext.btn,.input-group-sm>.input-group-append>.form-control-plaintext.input-group-text,.input-group-sm>.input-group-prepend>.form-control-plaintext.btn,.input-group-sm>.input-group-prepend>.form-control-plaintext.input-group-text{padding-right:0;padding-left:0}.form-control-sm,.input-group-sm>.form-control,.input-group-sm>.input-group-append>.btn,.input-group-sm>.input-group-append>.input-group-text,.input-group-sm>.input-group-prepend>.btn,.input-group-sm>.input-group-prepend>.input-group-text{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.input-group-sm>.input-group-append>select.btn:not([size]):not([multiple]),.input-group-sm>.input-group-append>select.input-group-text:not([size]):not([multiple]),.input-group-sm>.input-group-prepend>select.btn:not([size]):not([multiple]),.input-group-sm>.input-group-prepend>select.input-group-text:not([size]):not([multiple]),.input-group-sm>select.form-control:not([size]):not([multiple]),select.form-control-sm:not([size]):not([multiple]){height:calc(1.8125rem + 2px)}.form-control-lg,.input-group-lg>.form-control,.input-group-lg>.input-group-append>.btn,.input-group-lg>.input-group-append>.input-group-text,.input-group-lg>.input-group-prepend>.btn,.input-group-lg>.input-group-prepend>.input-group-text{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.input-group-lg>.input-group-append>select.btn:not([size]):not([multiple]),.input-group-lg>.input-group-append>select.input-group-text:not([size]):not([multiple]),.input-group-lg>.input-group-prepend>select.btn:not([size]):not([multiple]),.input-group-lg>.input-group-prepend>select.input-group-text:not([size]):not([multiple]),.input-group-lg>select.form-control:not([size]):not([multiple]),select.form-control-lg:not([size]):not([multiple]){height:calc(2.875rem + 2px)}.form-group{margin-bottom:1rem}.form-text{display:block;margin-top:.25rem}.form-row{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-5px;margin-left:-5px}.form-row>.col,.form-row>[class*=col-]{padding-right:5px;padding-left:5px}.form-check{position:relative;display:block;padding-left:1.25rem}.form-check-input{position:absolute;margin-top:.3rem;margin-left:-1.25rem}.form-check-input:disabled~.form-check-label{color:#6c757d}.form-check-label{margin-bottom:0}.form-check-inline{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;padding-left:0;margin-right:.75rem}.form-check-inline .form-check-input{position:static;margin-top:0;margin-right:.3125rem;margin-left:0}.valid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#28a745}.valid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.5rem;margin-top:.1rem;font-size:.875rem;line-height:1;color:#fff;background-color:rgba(40,167,69,.8);border-radius:.2rem}.custom-select.is-valid,.form-control.is-valid,.was-validated .custom-select:valid,.was-validated .form-control:valid{border-color:#28a745}.custom-select.is-valid:focus,.form-control.is-valid:focus,.was-validated .custom-select:valid:focus,.was-validated .form-control:valid:focus{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.custom-select.is-valid~.valid-feedback,.custom-select.is-valid~.valid-tooltip,.form-control.is-valid~.valid-feedback,.form-control.is-valid~.valid-tooltip,.was-validated .custom-select:valid~.valid-feedback,.was-validated .custom-select:valid~.valid-tooltip,.was-validated .form-control:valid~.valid-feedback,.was-validated .form-control:valid~.valid-tooltip{display:block}.form-control-file.is-valid~.valid-feedback,.form-control-file.is-valid~.valid-tooltip,.was-validated .form-control-file:valid~.valid-feedback,.was-validated .form-control-file:valid~.valid-tooltip{display:block}.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label{color:#28a745}.form-check-input.is-valid~.valid-feedback,.form-check-input.is-valid~.valid-tooltip,.was-validated .form-check-input:valid~.valid-feedback,.was-validated .form-check-input:valid~.valid-tooltip{display:block}.custom-control-input.is-valid~.custom-control-label,.was-validated .custom-control-input:valid~.custom-control-label{color:#28a745}.custom-control-input.is-valid~.custom-control-label::before,.was-validated .custom-control-input:valid~.custom-control-label::before{background-color:#71dd8a}.custom-control-input.is-valid~.valid-feedback,.custom-control-input.is-valid~.valid-tooltip,.was-validated .custom-control-input:valid~.valid-feedback,.was-validated .custom-control-input:valid~.valid-tooltip{display:block}.custom-control-input.is-valid:checked~.custom-control-label::before,.was-validated .custom-control-input:valid:checked~.custom-control-label::before{background-color:#34ce57}.custom-control-input.is-valid:focus~.custom-control-label::before,.was-validated .custom-control-input:valid:focus~.custom-control-label::before{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(40,167,69,.25)}.custom-file-input.is-valid~.custom-file-label,.was-validated .custom-file-input:valid~.custom-file-label{border-color:#28a745}.custom-file-input.is-valid~.custom-file-label::before,.was-validated .custom-file-input:valid~.custom-file-label::before{border-color:inherit}.custom-file-input.is-valid~.valid-feedback,.custom-file-input.is-valid~.valid-tooltip,.was-validated .custom-file-input:valid~.valid-feedback,.was-validated .custom-file-input:valid~.valid-tooltip{display:block}.custom-file-input.is-valid:focus~.custom-file-label,.was-validated .custom-file-input:valid:focus~.custom-file-label{box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.invalid-feedback{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#dc3545}.invalid-tooltip{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.5rem;margin-top:.1rem;font-size:.875rem;line-height:1;color:#fff;background-color:rgba(220,53,69,.8);border-radius:.2rem}.custom-select.is-invalid,.form-control.is-invalid,.was-validated .custom-select:invalid,.was-validated .form-control:invalid{border-color:#dc3545}.custom-select.is-invalid:focus,.form-control.is-invalid:focus,.was-validated .custom-select:invalid:focus,.was-validated .form-control:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.custom-select.is-invalid~.invalid-feedback,.custom-select.is-invalid~.invalid-tooltip,.form-control.is-invalid~.invalid-feedback,.form-control.is-invalid~.invalid-tooltip,.was-validated .custom-select:invalid~.invalid-feedback,.was-validated .custom-select:invalid~.invalid-tooltip,.was-validated .form-control:invalid~.invalid-feedback,.was-validated .form-control:invalid~.invalid-tooltip{display:block}.form-control-file.is-invalid~.invalid-feedback,.form-control-file.is-invalid~.invalid-tooltip,.was-validated .form-control-file:invalid~.invalid-feedback,.was-validated .form-control-file:invalid~.invalid-tooltip{display:block}.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label{color:#dc3545}.form-check-input.is-invalid~.invalid-feedback,.form-check-input.is-invalid~.invalid-tooltip,.was-validated .form-check-input:invalid~.invalid-feedback,.was-validated .form-check-input:invalid~.invalid-tooltip{display:block}.custom-control-input.is-invalid~.custom-control-label,.was-validated .custom-control-input:invalid~.custom-control-label{color:#dc3545}.custom-control-input.is-invalid~.custom-control-label::before,.was-validated .custom-control-input:invalid~.custom-control-label::before{background-color:#efa2a9}.custom-control-input.is-invalid~.invalid-feedback,.custom-control-input.is-invalid~.invalid-tooltip,.was-validated .custom-control-input:invalid~.invalid-feedback,.was-validated .custom-control-input:invalid~.invalid-tooltip{display:block}.custom-control-input.is-invalid:checked~.custom-control-label::before,.was-validated .custom-control-input:invalid:checked~.custom-control-label::before{background-color:#e4606d}.custom-control-input.is-invalid:focus~.custom-control-label::before,.was-validated .custom-control-input:invalid:focus~.custom-control-label::before{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(220,53,69,.25)}.custom-file-input.is-invalid~.custom-file-label,.was-validated .custom-file-input:invalid~.custom-file-label{border-color:#dc3545}.custom-file-input.is-invalid~.custom-file-label::before,.was-validated .custom-file-input:invalid~.custom-file-label::before{border-color:inherit}.custom-file-input.is-invalid~.invalid-feedback,.custom-file-input.is-invalid~.invalid-tooltip,.was-validated .custom-file-input:invalid~.invalid-feedback,.was-validated .custom-file-input:invalid~.invalid-tooltip{display:block}.custom-file-input.is-invalid:focus~.custom-file-label,.was-validated .custom-file-input:invalid:focus~.custom-file-label{box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.form-inline{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-align:center;align-items:center}.form-inline .form-check{width:100%}@media (min-width:576px){.form-inline label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin-bottom:0}.form-inline .form-group{display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-align:center;align-items:center;margin-bottom:0}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-plaintext{display:inline-block}.form-inline .custom-select,.form-inline .input-group{width:auto}.form-inline .form-check{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-left:0}.form-inline .form-check-input{position:relative;margin-top:0;margin-right:.25rem;margin-left:0}.form-inline .custom-control{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.form-inline .custom-control-label{margin-bottom:0}}.btn{display:inline-block;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media screen and (prefers-reduced-motion:reduce){.btn{transition:none}}.btn:focus,.btn:hover{text-decoration:none}.btn.focus,.btn:focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.btn.disabled,.btn:disabled{opacity:.65}.btn:not(:disabled):not(.disabled){cursor:pointer}.btn:not(:disabled):not(.disabled).active,.btn:not(:disabled):not(.disabled):active{background-image:none}a.btn.disabled,fieldset:disabled a.btn{pointer-events:none}.btn-primary{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:hover{color:#fff;background-color:#0069d9;border-color:#0062cc}.btn-primary.focus,.btn-primary:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-primary.disabled,.btn-primary:disabled{color:#fff;background-color:#007bff;border-color:#007bff}.btn-primary:not(:disabled):not(.disabled).active,.btn-primary:not(:disabled):not(.disabled):active,.show>.btn-primary.dropdown-toggle{color:#fff;background-color:#0062cc;border-color:#005cbf}.btn-primary:not(:disabled):not(.disabled).active:focus,.btn-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-secondary{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:hover{color:#fff;background-color:#5a6268;border-color:#545b62}.btn-secondary.focus,.btn-secondary:focus{box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.btn-secondary.disabled,.btn-secondary:disabled{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-secondary:not(:disabled):not(.disabled).active,.btn-secondary:not(:disabled):not(.disabled):active,.show>.btn-secondary.dropdown-toggle{color:#fff;background-color:#545b62;border-color:#4e555b}.btn-secondary:not(:disabled):not(.disabled).active:focus,.btn-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.btn-success{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:hover{color:#fff;background-color:#218838;border-color:#1e7e34}.btn-success.focus,.btn-success:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-success.disabled,.btn-success:disabled{color:#fff;background-color:#28a745;border-color:#28a745}.btn-success:not(:disabled):not(.disabled).active,.btn-success:not(:disabled):not(.disabled):active,.show>.btn-success.dropdown-toggle{color:#fff;background-color:#1e7e34;border-color:#1c7430}.btn-success:not(:disabled):not(.disabled).active:focus,.btn-success:not(:disabled):not(.disabled):active:focus,.show>.btn-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-info{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:hover{color:#fff;background-color:#138496;border-color:#117a8b}.btn-info.focus,.btn-info:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-info.disabled,.btn-info:disabled{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-info:not(:disabled):not(.disabled).active,.btn-info:not(:disabled):not(.disabled):active,.show>.btn-info.dropdown-toggle{color:#fff;background-color:#117a8b;border-color:#10707f}.btn-info:not(:disabled):not(.disabled).active:focus,.btn-info:not(:disabled):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-warning{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning:hover{color:#212529;background-color:#e0a800;border-color:#d39e00}.btn-warning.focus,.btn-warning:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-warning.disabled,.btn-warning:disabled{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-warning:not(:disabled):not(.disabled).active,.btn-warning:not(:disabled):not(.disabled):active,.show>.btn-warning.dropdown-toggle{color:#212529;background-color:#d39e00;border-color:#c69500}.btn-warning:not(:disabled):not(.disabled).active:focus,.btn-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-danger{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:hover{color:#fff;background-color:#c82333;border-color:#bd2130}.btn-danger.focus,.btn-danger:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-danger.disabled,.btn-danger:disabled{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-danger:not(:disabled):not(.disabled).active,.btn-danger:not(:disabled):not(.disabled):active,.show>.btn-danger.dropdown-toggle{color:#fff;background-color:#bd2130;border-color:#b21f2d}.btn-danger:not(:disabled):not(.disabled).active:focus,.btn-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-light{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:hover{color:#212529;background-color:#e2e6ea;border-color:#dae0e5}.btn-light.focus,.btn-light:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-light.disabled,.btn-light:disabled{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-light:not(:disabled):not(.disabled).active,.btn-light:not(:disabled):not(.disabled):active,.show>.btn-light.dropdown-toggle{color:#212529;background-color:#dae0e5;border-color:#d3d9df}.btn-light:not(:disabled):not(.disabled).active:focus,.btn-light:not(:disabled):not(.disabled):active:focus,.show>.btn-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-dark{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:hover{color:#fff;background-color:#23272b;border-color:#1d2124}.btn-dark.focus,.btn-dark:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-dark.disabled,.btn-dark:disabled{color:#fff;background-color:#343a40;border-color:#343a40}.btn-dark:not(:disabled):not(.disabled).active,.btn-dark:not(:disabled):not(.disabled):active,.show>.btn-dark.dropdown-toggle{color:#fff;background-color:#1d2124;border-color:#171a1d}.btn-dark:not(:disabled):not(.disabled).active:focus,.btn-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-outline-primary{color:#007bff;background-color:transparent;background-image:none;border-color:#007bff}.btn-outline-primary:hover{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary.focus,.btn-outline-primary:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-outline-primary.disabled,.btn-outline-primary:disabled{color:#007bff;background-color:transparent}.btn-outline-primary:not(:disabled):not(.disabled).active,.btn-outline-primary:not(:disabled):not(.disabled):active,.show>.btn-outline-primary.dropdown-toggle{color:#fff;background-color:#007bff;border-color:#007bff}.btn-outline-primary:not(:disabled):not(.disabled).active:focus,.btn-outline-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-primary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.btn-outline-secondary{color:#6c757d;background-color:transparent;background-image:none;border-color:#6c757d}.btn-outline-secondary:hover{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-outline-secondary.focus,.btn-outline-secondary:focus{box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.btn-outline-secondary.disabled,.btn-outline-secondary:disabled{color:#6c757d;background-color:transparent}.btn-outline-secondary:not(:disabled):not(.disabled).active,.btn-outline-secondary:not(:disabled):not(.disabled):active,.show>.btn-outline-secondary.dropdown-toggle{color:#fff;background-color:#6c757d;border-color:#6c757d}.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-secondary.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.btn-outline-success{color:#28a745;background-color:transparent;background-image:none;border-color:#28a745}.btn-outline-success:hover{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-success.focus,.btn-outline-success:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-outline-success.disabled,.btn-outline-success:disabled{color:#28a745;background-color:transparent}.btn-outline-success:not(:disabled):not(.disabled).active,.btn-outline-success:not(:disabled):not(.disabled):active,.show>.btn-outline-success.dropdown-toggle{color:#fff;background-color:#28a745;border-color:#28a745}.btn-outline-success:not(:disabled):not(.disabled).active:focus,.btn-outline-success:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-success.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.btn-outline-info{color:#17a2b8;background-color:transparent;background-image:none;border-color:#17a2b8}.btn-outline-info:hover{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info.focus,.btn-outline-info:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-outline-info.disabled,.btn-outline-info:disabled{color:#17a2b8;background-color:transparent}.btn-outline-info:not(:disabled):not(.disabled).active,.btn-outline-info:not(:disabled):not(.disabled):active,.show>.btn-outline-info.dropdown-toggle{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.btn-outline-info:not(:disabled):not(.disabled).active:focus,.btn-outline-info:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-info.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.btn-outline-warning{color:#ffc107;background-color:transparent;background-image:none;border-color:#ffc107}.btn-outline-warning:hover{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning.focus,.btn-outline-warning:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-outline-warning.disabled,.btn-outline-warning:disabled{color:#ffc107;background-color:transparent}.btn-outline-warning:not(:disabled):not(.disabled).active,.btn-outline-warning:not(:disabled):not(.disabled):active,.show>.btn-outline-warning.dropdown-toggle{color:#212529;background-color:#ffc107;border-color:#ffc107}.btn-outline-warning:not(:disabled):not(.disabled).active:focus,.btn-outline-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-warning.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.btn-outline-danger{color:#dc3545;background-color:transparent;background-image:none;border-color:#dc3545}.btn-outline-danger:hover{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger.focus,.btn-outline-danger:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-outline-danger.disabled,.btn-outline-danger:disabled{color:#dc3545;background-color:transparent}.btn-outline-danger:not(:disabled):not(.disabled).active,.btn-outline-danger:not(:disabled):not(.disabled):active,.show>.btn-outline-danger.dropdown-toggle{color:#fff;background-color:#dc3545;border-color:#dc3545}.btn-outline-danger:not(:disabled):not(.disabled).active:focus,.btn-outline-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-danger.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.btn-outline-light{color:#f8f9fa;background-color:transparent;background-image:none;border-color:#f8f9fa}.btn-outline-light:hover{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light.focus,.btn-outline-light:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-outline-light.disabled,.btn-outline-light:disabled{color:#f8f9fa;background-color:transparent}.btn-outline-light:not(:disabled):not(.disabled).active,.btn-outline-light:not(:disabled):not(.disabled):active,.show>.btn-outline-light.dropdown-toggle{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.btn-outline-light:not(:disabled):not(.disabled).active:focus,.btn-outline-light:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-light.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.btn-outline-dark{color:#343a40;background-color:transparent;background-image:none;border-color:#343a40}.btn-outline-dark:hover{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark.focus,.btn-outline-dark:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-outline-dark.disabled,.btn-outline-dark:disabled{color:#343a40;background-color:transparent}.btn-outline-dark:not(:disabled):not(.disabled).active,.btn-outline-dark:not(:disabled):not(.disabled):active,.show>.btn-outline-dark.dropdown-toggle{color:#fff;background-color:#343a40;border-color:#343a40}.btn-outline-dark:not(:disabled):not(.disabled).active:focus,.btn-outline-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-dark.dropdown-toggle:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.btn-link{font-weight:400;color:#007bff;background-color:transparent}.btn-link:hover{color:#0056b3;text-decoration:underline;background-color:transparent;border-color:transparent}.btn-link.focus,.btn-link:focus{text-decoration:underline;border-color:transparent;box-shadow:none}.btn-link.disabled,.btn-link:disabled{color:#6c757d;pointer-events:none}.btn-group-lg>.btn,.btn-lg{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.btn-group-sm>.btn,.btn-sm{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:.5rem}input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{width:100%}.fade{transition:opacity .15s linear}@media screen and (prefers-reduced-motion:reduce){.fade{transition:none}}.fade:not(.show){opacity:0}.collapse:not(.show){display:none}.collapsing{position:relative;height:0;overflow:hidden;transition:height .35s ease}@media screen and (prefers-reduced-motion:reduce){.collapsing{transition:none}}.dropdown,.dropleft,.dropright,.dropup{position:relative}.dropdown-toggle::after{display:inline-block;width:0;height:0;margin-left:.255em;vertical-align:.255em;content:"";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.dropdown-toggle:empty::after{margin-left:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.dropdown-menu-right{right:0;left:auto}.dropup .dropdown-menu{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.dropup .dropdown-toggle::after{display:inline-block;width:0;height:0;margin-left:.255em;vertical-align:.255em;content:"";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.dropup .dropdown-toggle:empty::after{margin-left:0}.dropright .dropdown-menu{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.dropright .dropdown-toggle::after{display:inline-block;width:0;height:0;margin-left:.255em;vertical-align:.255em;content:"";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.dropright .dropdown-toggle:empty::after{margin-left:0}.dropright .dropdown-toggle::after{vertical-align:0}.dropleft .dropdown-menu{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.dropleft .dropdown-toggle::after{display:inline-block;width:0;height:0;margin-left:.255em;vertical-align:.255em;content:""}.dropleft .dropdown-toggle::after{display:none}.dropleft .dropdown-toggle::before{display:inline-block;width:0;height:0;margin-right:.255em;vertical-align:.255em;content:"";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.dropleft .dropdown-toggle:empty::after{margin-left:0}.dropleft .dropdown-toggle::before{vertical-align:0}.dropdown-menu[x-placement^=bottom],.dropdown-menu[x-placement^=left],.dropdown-menu[x-placement^=right],.dropdown-menu[x-placement^=top]{right:auto;bottom:auto}.dropdown-divider{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.dropdown-item{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.dropdown-item:focus,.dropdown-item:hover{color:#16181b;text-decoration:none;background-color:#f8f9fa}.dropdown-item.active,.dropdown-item:active{color:#fff;text-decoration:none;background-color:#007bff}.dropdown-item.disabled,.dropdown-item:disabled{color:#6c757d;background-color:transparent}.dropdown-menu.show{display:block}.dropdown-header{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.dropdown-item-text{display:block;padding:.25rem 1.5rem;color:#212529}.btn-group,.btn-group-vertical{position:relative;display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;-ms-flex:0 1 auto;flex:0 1 auto}.btn-group-vertical>.btn:hover,.btn-group>.btn:hover{z-index:1}.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus{z-index:1}.btn-group .btn+.btn,.btn-group .btn+.btn-group,.btn-group .btn-group+.btn,.btn-group .btn-group+.btn-group,.btn-group-vertical .btn+.btn,.btn-group-vertical .btn+.btn-group,.btn-group-vertical .btn-group+.btn,.btn-group-vertical .btn-group+.btn-group{margin-left:-1px}.btn-toolbar{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:start;justify-content:flex-start}.btn-toolbar .input-group{width:auto}.btn-group>.btn:first-child{margin-left:0}.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.dropdown-toggle-split{padding-right:.5625rem;padding-left:.5625rem}.dropdown-toggle-split::after,.dropright .dropdown-toggle-split::after,.dropup .dropdown-toggle-split::after{margin-left:0}.dropleft .dropdown-toggle-split::before{margin-right:0}.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split{padding-right:.375rem;padding-left:.375rem}.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split{padding-right:.75rem;padding-left:.75rem}.btn-group-vertical{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:center;justify-content:center}.btn-group-vertical .btn,.btn-group-vertical .btn-group{width:100%}.btn-group-vertical>.btn+.btn,.btn-group-vertical>.btn+.btn-group,.btn-group-vertical>.btn-group+.btn,.btn-group-vertical>.btn-group+.btn-group{margin-top:-1px;margin-left:0}.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle){border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.btn-group-toggle>.btn,.btn-group-toggle>.btn-group>.btn{margin-bottom:0}.btn-group-toggle>.btn input[type=checkbox],.btn-group-toggle>.btn input[type=radio],.btn-group-toggle>.btn-group>.btn input[type=checkbox],.btn-group-toggle>.btn-group>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.input-group{position:relative;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:stretch;align-items:stretch;width:100%}.input-group>.custom-file,.input-group>.custom-select,.input-group>.form-control{position:relative;-ms-flex:1 1 auto;flex:1 1 auto;width:1%;margin-bottom:0}.input-group>.custom-file:focus,.input-group>.custom-select:focus,.input-group>.form-control:focus{z-index:3}.input-group>.custom-file+.custom-file,.input-group>.custom-file+.custom-select,.input-group>.custom-file+.form-control,.input-group>.custom-select+.custom-file,.input-group>.custom-select+.custom-select,.input-group>.custom-select+.form-control,.input-group>.form-control+.custom-file,.input-group>.form-control+.custom-select,.input-group>.form-control+.form-control{margin-left:-1px}.input-group>.custom-select:not(:last-child),.input-group>.form-control:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-select:not(:first-child),.input-group>.form-control:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.input-group>.custom-file{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input-group>.custom-file:not(:last-child) .custom-file-label,.input-group>.custom-file:not(:last-child) .custom-file-label::after{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.custom-file:not(:first-child) .custom-file-label{border-top-left-radius:0;border-bottom-left-radius:0}.input-group-append,.input-group-prepend{display:-ms-flexbox;display:flex}.input-group-append .btn,.input-group-prepend .btn{position:relative;z-index:2}.input-group-append .btn+.btn,.input-group-append .btn+.input-group-text,.input-group-append .input-group-text+.btn,.input-group-append .input-group-text+.input-group-text,.input-group-prepend .btn+.btn,.input-group-prepend .btn+.input-group-text,.input-group-prepend .input-group-text+.btn,.input-group-prepend .input-group-text+.input-group-text{margin-left:-1px}.input-group-prepend{margin-right:-1px}.input-group-append{margin-left:-1px}.input-group-text{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:.375rem .75rem;margin-bottom:0;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.25rem}.input-group-text input[type=checkbox],.input-group-text input[type=radio]{margin-top:0}.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group>.input-group-append:last-child>.input-group-text:not(:last-child),.input-group>.input-group-append:not(:last-child)>.btn,.input-group>.input-group-append:not(:last-child)>.input-group-text,.input-group>.input-group-prepend>.btn,.input-group>.input-group-prepend>.input-group-text{border-top-right-radius:0;border-bottom-right-radius:0}.input-group>.input-group-append>.btn,.input-group>.input-group-append>.input-group-text,.input-group>.input-group-prepend:first-child>.btn:not(:first-child),.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child),.input-group>.input-group-prepend:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.input-group-text{border-top-left-radius:0;border-bottom-left-radius:0}.custom-control{position:relative;display:block;min-height:1.5rem;padding-left:1.5rem}.custom-control-inline{display:-ms-inline-flexbox;display:inline-flex;margin-right:1rem}.custom-control-input{position:absolute;z-index:-1;opacity:0}.custom-control-input:checked~.custom-control-label::before{color:#fff;background-color:#007bff}.custom-control-input:focus~.custom-control-label::before{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-control-input:active~.custom-control-label::before{color:#fff;background-color:#b3d7ff}.custom-control-input:disabled~.custom-control-label{color:#6c757d}.custom-control-input:disabled~.custom-control-label::before{background-color:#e9ecef}.custom-control-label{position:relative;margin-bottom:0}.custom-control-label::before{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:1rem;pointer-events:none;content:"";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:#dee2e6}.custom-control-label::after{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:1rem;content:"";background-repeat:no-repeat;background-position:center center;background-size:50% 50%}.custom-checkbox .custom-control-label::before{border-radius:.25rem}.custom-checkbox .custom-control-input:checked~.custom-control-label::before{background-color:#007bff}.custom-checkbox .custom-control-input:checked~.custom-control-label::after{background-image:url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3E%3Cpath fill=\'%23fff\' d=\'M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z\'/%3E%3C/svg%3E")}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::before{background-color:#007bff}.custom-checkbox .custom-control-input:indeterminate~.custom-control-label::after{background-image:url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 4\'%3E%3Cpath stroke=\'%23fff\' d=\'M0 2h4\'/%3E%3C/svg%3E")}.custom-checkbox .custom-control-input:disabled:checked~.custom-control-label::before{background-color:rgba(0,123,255,.5)}.custom-checkbox .custom-control-input:disabled:indeterminate~.custom-control-label::before{background-color:rgba(0,123,255,.5)}.custom-radio .custom-control-label::before{border-radius:50%}.custom-radio .custom-control-input:checked~.custom-control-label::before{background-color:#007bff}.custom-radio .custom-control-input:checked~.custom-control-label::after{background-image:url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3E%3Ccircle r=\'3\' fill=\'%23fff\'/%3E%3C/svg%3E")}.custom-radio .custom-control-input:disabled:checked~.custom-control-label::before{background-color:rgba(0,123,255,.5)}.custom-select{display:inline-block;width:100%;height:calc(2.25rem + 2px);padding:.375rem 1.75rem .375rem .75rem;line-height:1.5;color:#495057;vertical-align:middle;background:#fff url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 5\'%3E%3Cpath fill=\'%23343a40\' d=\'M2 0L0 2h4zm0 5L0 3h4z\'/%3E%3C/svg%3E") no-repeat right .75rem center;background-size:8px 10px;border:1px solid #ced4da;border-radius:.25rem;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-select:focus{border-color:#80bdff;outline:0;box-shadow:inset 0 1px 2px rgba(0,0,0,.075),0 0 5px rgba(128,189,255,.5)}.custom-select:focus::-ms-value{color:#495057;background-color:#fff}.custom-select[multiple],.custom-select[size]:not([size="1"]){height:auto;padding-right:.75rem;background-image:none}.custom-select:disabled{color:#6c757d;background-color:#e9ecef}.custom-select::-ms-expand{opacity:0}.custom-select-sm{height:calc(1.8125rem + 2px);padding-top:.375rem;padding-bottom:.375rem;font-size:75%}.custom-select-lg{height:calc(2.875rem + 2px);padding-top:.375rem;padding-bottom:.375rem;font-size:125%}.custom-file{position:relative;display:inline-block;width:100%;height:calc(2.25rem + 2px);margin-bottom:0}.custom-file-input{position:relative;z-index:2;width:100%;height:calc(2.25rem + 2px);margin:0;opacity:0}.custom-file-input:focus~.custom-file-label{border-color:#80bdff;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.custom-file-input:focus~.custom-file-label::after{border-color:#80bdff}.custom-file-input:lang(en)~.custom-file-label::after{content:"Browse"}.custom-file-label{position:absolute;top:0;right:0;left:0;z-index:1;height:calc(2.25rem + 2px);padding:.375rem .75rem;line-height:1.5;color:#495057;background-color:#fff;border:1px solid #ced4da;border-radius:.25rem}.custom-file-label::after{position:absolute;top:0;right:0;bottom:0;z-index:3;display:block;height:2.25rem;padding:.375rem .75rem;line-height:1.5;color:#495057;content:"Browse";background-color:#e9ecef;border-left:1px solid #ced4da;border-radius:0 .25rem .25rem 0}.custom-range{width:100%;padding-left:0;background-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}.custom-range:focus{outline:0}.custom-range::-moz-focus-outer{border:0}.custom-range::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-.25rem;background-color:#007bff;border:0;border-radius:1rem;-webkit-appearance:none;appearance:none}.custom-range::-webkit-slider-thumb:focus{outline:0;box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range::-webkit-slider-thumb:active{background-color:#b3d7ff}.custom-range::-webkit-slider-runnable-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.custom-range::-moz-range-thumb{width:1rem;height:1rem;background-color:#007bff;border:0;border-radius:1rem;-moz-appearance:none;appearance:none}.custom-range::-moz-range-thumb:focus{outline:0;box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range::-moz-range-thumb:active{background-color:#b3d7ff}.custom-range::-moz-range-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.custom-range::-ms-thumb{width:1rem;height:1rem;background-color:#007bff;border:0;border-radius:1rem;appearance:none}.custom-range::-ms-thumb:focus{outline:0;box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.custom-range::-ms-thumb:active{background-color:#b3d7ff}.custom-range::-ms-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:transparent;border-color:transparent;border-width:.5rem}.custom-range::-ms-fill-lower{background-color:#dee2e6;border-radius:1rem}.custom-range::-ms-fill-upper{margin-right:15px;background-color:#dee2e6;border-radius:1rem}.nav{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.nav-link{display:block;padding:.5rem 1rem}.nav-link:focus,.nav-link:hover{text-decoration:none}.nav-link.disabled{color:#6c757d}.nav-tabs{border-bottom:1px solid #dee2e6}.nav-tabs .nav-item{margin-bottom:-1px}.nav-tabs .nav-link{border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover{border-color:#e9ecef #e9ecef #dee2e6}.nav-tabs .nav-link.disabled{color:#6c757d;background-color:transparent;border-color:transparent}.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.nav-pills .nav-link{border-radius:.25rem}.nav-pills .nav-link.active,.nav-pills .show>.nav-link{color:#fff;background-color:#007bff}.nav-fill .nav-item{-ms-flex:1 1 auto;flex:1 1 auto;text-align:center}.nav-justified .nav-item{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;text-align:center}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.navbar{position:relative;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding:.5rem 1rem}.navbar>.container,.navbar>.container-fluid{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.navbar-brand{display:inline-block;padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap}.navbar-brand:focus,.navbar-brand:hover{text-decoration:none}.navbar-nav{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.navbar-nav .nav-link{padding-right:0;padding-left:0}.navbar-nav .dropdown-menu{position:static;float:none}.navbar-text{display:inline-block;padding-top:.5rem;padding-bottom:.5rem}.navbar-collapse{-ms-flex-preferred-size:100%;flex-basis:100%;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center}.navbar-toggler{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem}.navbar-toggler:focus,.navbar-toggler:hover{text-decoration:none}.navbar-toggler:not(:disabled):not(.disabled){cursor:pointer}.navbar-toggler-icon{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;content:"";background:no-repeat center center;background-size:100% 100%}@media (max-width:575.98px){.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid{padding-right:0;padding-left:0}}@media (min-width:576px){.navbar-expand-sm{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-sm .navbar-nav{-ms-flex-direction:row;flex-direction:row}.navbar-expand-sm .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-sm .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-sm .navbar-collapse{display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-sm .navbar-toggler{display:none}}@media (max-width:767.98px){.navbar-expand-md>.container,.navbar-expand-md>.container-fluid{padding-right:0;padding-left:0}}@media (min-width:768px){.navbar-expand-md{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-md .navbar-nav{-ms-flex-direction:row;flex-direction:row}.navbar-expand-md .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-md .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-md>.container,.navbar-expand-md>.container-fluid{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-md .navbar-collapse{display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-md .navbar-toggler{display:none}}@media (max-width:991.98px){.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid{padding-right:0;padding-left:0}}@media (min-width:992px){.navbar-expand-lg{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-lg .navbar-nav{-ms-flex-direction:row;flex-direction:row}.navbar-expand-lg .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-lg .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-lg .navbar-collapse{display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-lg .navbar-toggler{display:none}}@media (max-width:1199.98px){.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid{padding-right:0;padding-left:0}}@media (min-width:1200px){.navbar-expand-xl{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand-xl .navbar-nav{-ms-flex-direction:row;flex-direction:row}.navbar-expand-xl .navbar-nav .dropdown-menu{position:absolute}.navbar-expand-xl .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand-xl .navbar-collapse{display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand-xl .navbar-toggler{display:none}}.navbar-expand{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start}.navbar-expand>.container,.navbar-expand>.container-fluid{padding-right:0;padding-left:0}.navbar-expand .navbar-nav{-ms-flex-direction:row;flex-direction:row}.navbar-expand .navbar-nav .dropdown-menu{position:absolute}.navbar-expand .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem}.navbar-expand>.container,.navbar-expand>.container-fluid{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.navbar-expand .navbar-collapse{display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.navbar-expand .navbar-toggler{display:none}.navbar-light .navbar-brand{color:rgba(0,0,0,.9)}.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover{color:rgba(0,0,0,.9)}.navbar-light .navbar-nav .nav-link{color:rgba(0,0,0,.5)}.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover{color:rgba(0,0,0,.7)}.navbar-light .navbar-nav .nav-link.disabled{color:rgba(0,0,0,.3)}.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .show>.nav-link{color:rgba(0,0,0,.9)}.navbar-light .navbar-toggler{color:rgba(0,0,0,.5);border-color:rgba(0,0,0,.1)}.navbar-light .navbar-toggler-icon{background-image:url("data:image/svg+xml;charset=utf8,%3Csvg viewBox=\'0 0 30 30\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath stroke=\'rgba(0, 0, 0, 0.5)\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' d=\'M4 7h22M4 15h22M4 23h22\'/%3E%3C/svg%3E")}.navbar-light .navbar-text{color:rgba(0,0,0,.5)}.navbar-light .navbar-text a{color:rgba(0,0,0,.9)}.navbar-light .navbar-text a:focus,.navbar-light .navbar-text a:hover{color:rgba(0,0,0,.9)}.navbar-dark .navbar-brand{color:#fff}.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover{color:#fff}.navbar-dark .navbar-nav .nav-link{color:rgba(255,255,255,.5)}.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{color:rgba(255,255,255,.75)}.navbar-dark .navbar-nav .nav-link.disabled{color:rgba(255,255,255,.25)}.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .nav-link.show,.navbar-dark .navbar-nav .show>.nav-link{color:#fff}.navbar-dark .navbar-toggler{color:rgba(255,255,255,.5);border-color:rgba(255,255,255,.1)}.navbar-dark .navbar-toggler-icon{background-image:url("data:image/svg+xml;charset=utf8,%3Csvg viewBox=\'0 0 30 30\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath stroke=\'rgba(255, 255, 255, 0.5)\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-miterlimit=\'10\' d=\'M4 7h22M4 15h22M4 23h22\'/%3E%3C/svg%3E")}.navbar-dark .navbar-text{color:rgba(255,255,255,.5)}.navbar-dark .navbar-text a{color:#fff}.navbar-dark .navbar-text a:focus,.navbar-dark .navbar-text a:hover{color:#fff}.card{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem}.card>hr{margin-right:0;margin-left:0}.card>.list-group:first-child .list-group-item:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card>.list-group:last-child .list-group-item:last-child{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.card-body{-ms-flex:1 1 auto;flex:1 1 auto;padding:1.25rem}.card-title{margin-bottom:.75rem}.card-subtitle{margin-top:-.375rem;margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1.25rem}.card-header{padding:.75rem 1.25rem;margin-bottom:0;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125)}.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-header+.list-group .list-group-item:first-child{border-top:0}.card-footer{padding:.75rem 1.25rem;background-color:rgba(0,0,0,.03);border-top:1px solid rgba(0,0,0,.125)}.card-footer:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.card-header-tabs{margin-right:-.625rem;margin-bottom:-.75rem;margin-left:-.625rem;border-bottom:0}.card-header-pills{margin-right:-.625rem;margin-left:-.625rem}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem}.card-img{width:100%;border-radius:calc(.25rem - 1px)}.card-img-top{width:100%;border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card-img-bottom{width:100%;border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card-deck{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.card-deck .card{margin-bottom:15px}@media (min-width:576px){.card-deck{-ms-flex-flow:row wrap;flex-flow:row wrap;margin-right:-15px;margin-left:-15px}.card-deck .card{display:-ms-flexbox;display:flex;-ms-flex:1 0 0%;flex:1 0 0%;-ms-flex-direction:column;flex-direction:column;margin-right:15px;margin-bottom:0;margin-left:15px}}.card-group{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.card-group>.card{margin-bottom:15px}@media (min-width:576px){.card-group{-ms-flex-flow:row wrap;flex-flow:row wrap}.card-group>.card{-ms-flex:1 0 0%;flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:first-child{border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:first-child .card-header,.card-group>.card:first-child .card-img-top{border-top-right-radius:0}.card-group>.card:first-child .card-footer,.card-group>.card:first-child .card-img-bottom{border-bottom-right-radius:0}.card-group>.card:last-child{border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:last-child .card-header,.card-group>.card:last-child .card-img-top{border-top-left-radius:0}.card-group>.card:last-child .card-footer,.card-group>.card:last-child .card-img-bottom{border-bottom-left-radius:0}.card-group>.card:only-child{border-radius:.25rem}.card-group>.card:only-child .card-header,.card-group>.card:only-child .card-img-top{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card-group>.card:only-child .card-footer,.card-group>.card:only-child .card-img-bottom{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.card-group>.card:not(:first-child):not(:last-child):not(:only-child){border-radius:0}.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-footer,.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-header,.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-img-bottom,.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-img-top{border-radius:0}}.card-columns .card{margin-bottom:.75rem}@media (min-width:576px){.card-columns{-webkit-column-count:3;-moz-column-count:3;column-count:3;-webkit-column-gap:1.25rem;-moz-column-gap:1.25rem;column-gap:1.25rem;orphans:1;widows:1}.card-columns .card{display:inline-block;width:100%}}.accordion .card:not(:first-of-type):not(:last-of-type){border-bottom:0;border-radius:0}.accordion .card:not(:first-of-type) .card-header:first-child{border-radius:0}.accordion .card:first-of-type{border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.accordion .card:last-of-type{border-top-left-radius:0;border-top-right-radius:0}.breadcrumb{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:.75rem 1rem;margin-bottom:1rem;list-style:none;background-color:#e9ecef;border-radius:.25rem}.breadcrumb-item+.breadcrumb-item{padding-left:.5rem}.breadcrumb-item+.breadcrumb-item::before{display:inline-block;padding-right:.5rem;color:#6c757d;content:"/"}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:underline}.breadcrumb-item+.breadcrumb-item:hover::before{text-decoration:none}.breadcrumb-item.active{color:#6c757d}.pagination{display:-ms-flexbox;display:flex;padding-left:0;list-style:none;border-radius:.25rem}.page-link{position:relative;display:block;padding:.5rem .75rem;margin-left:-1px;line-height:1.25;color:#007bff;background-color:#fff;border:1px solid #dee2e6}.page-link:hover{z-index:2;color:#0056b3;text-decoration:none;background-color:#e9ecef;border-color:#dee2e6}.page-link:focus{z-index:2;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.page-link:not(:disabled):not(.disabled){cursor:pointer}.page-item:first-child .page-link{margin-left:0;border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.page-item:last-child .page-link{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.page-item.active .page-link{z-index:1;color:#fff;background-color:#007bff;border-color:#007bff}.page-item.disabled .page-link{color:#6c757d;pointer-events:none;cursor:auto;background-color:#fff;border-color:#dee2e6}.pagination-lg .page-link{padding:.75rem 1.5rem;font-size:1.25rem;line-height:1.5}.pagination-lg .page-item:first-child .page-link{border-top-left-radius:.3rem;border-bottom-left-radius:.3rem}.pagination-lg .page-item:last-child .page-link{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}.pagination-sm .page-link{padding:.25rem .5rem;font-size:.875rem;line-height:1.5}.pagination-sm .page-item:first-child .page-link{border-top-left-radius:.2rem;border-bottom-left-radius:.2rem}.pagination-sm .page-item:last-child .page-link{border-top-right-radius:.2rem;border-bottom-right-radius:.2rem}.badge{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.badge-pill{padding-right:.6em;padding-left:.6em;border-radius:10rem}.badge-primary{color:#fff;background-color:#007bff}.badge-primary[href]:focus,.badge-primary[href]:hover{color:#fff;text-decoration:none;background-color:#0062cc}.badge-secondary{color:#fff;background-color:#6c757d}.badge-secondary[href]:focus,.badge-secondary[href]:hover{color:#fff;text-decoration:none;background-color:#545b62}.badge-success{color:#fff;background-color:#28a745}.badge-success[href]:focus,.badge-success[href]:hover{color:#fff;text-decoration:none;background-color:#1e7e34}.badge-info{color:#fff;background-color:#17a2b8}.badge-info[href]:focus,.badge-info[href]:hover{color:#fff;text-decoration:none;background-color:#117a8b}.badge-warning{color:#212529;background-color:#ffc107}.badge-warning[href]:focus,.badge-warning[href]:hover{color:#212529;text-decoration:none;background-color:#d39e00}.badge-danger{color:#fff;background-color:#dc3545}.badge-danger[href]:focus,.badge-danger[href]:hover{color:#fff;text-decoration:none;background-color:#bd2130}.badge-light{color:#212529;background-color:#f8f9fa}.badge-light[href]:focus,.badge-light[href]:hover{color:#212529;text-decoration:none;background-color:#dae0e5}.badge-dark{color:#fff;background-color:#343a40}.badge-dark[href]:focus,.badge-dark[href]:hover{color:#fff;text-decoration:none;background-color:#1d2124}.jumbotron{padding:2rem 1rem;margin-bottom:2rem;background-color:#e9ecef;border-radius:.3rem}@media (min-width:576px){.jumbotron{padding:4rem 2rem}}.jumbotron-fluid{padding-right:0;padding-left:0;border-radius:0}.alert{position:relative;padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.alert-heading{color:inherit}.alert-link{font-weight:700}.alert-dismissible{padding-right:4rem}.alert-dismissible .close{position:absolute;top:0;right:0;padding:.75rem 1.25rem;color:inherit}.alert-primary{color:#004085;background-color:#cce5ff;border-color:#b8daff}.alert-primary hr{border-top-color:#9fcdff}.alert-primary .alert-link{color:#002752}.alert-secondary{color:#383d41;background-color:#e2e3e5;border-color:#d6d8db}.alert-secondary hr{border-top-color:#c8cbcf}.alert-secondary .alert-link{color:#202326}.alert-success{color:#155724;background-color:#d4edda;border-color:#c3e6cb}.alert-success hr{border-top-color:#b1dfbb}.alert-success .alert-link{color:#0b2e13}.alert-info{color:#0c5460;background-color:#d1ecf1;border-color:#bee5eb}.alert-info hr{border-top-color:#abdde5}.alert-info .alert-link{color:#062c33}.alert-warning{color:#856404;background-color:#fff3cd;border-color:#ffeeba}.alert-warning hr{border-top-color:#ffe8a1}.alert-warning .alert-link{color:#533f03}.alert-danger{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}.alert-danger hr{border-top-color:#f1b0b7}.alert-danger .alert-link{color:#491217}.alert-light{color:#818182;background-color:#fefefe;border-color:#fdfdfe}.alert-light hr{border-top-color:#ececf6}.alert-light .alert-link{color:#686868}.alert-dark{color:#1b1e21;background-color:#d6d8d9;border-color:#c6c8ca}.alert-dark hr{border-top-color:#b9bbbe}.alert-dark .alert-link{color:#040505}@-webkit-keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:1rem 0}to{background-position:0 0}}.progress{display:-ms-flexbox;display:flex;height:1rem;overflow:hidden;font-size:.75rem;background-color:#e9ecef;border-radius:.25rem}.progress-bar{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;color:#fff;text-align:center;white-space:nowrap;background-color:#007bff;transition:width .6s ease}@media screen and (prefers-reduced-motion:reduce){.progress-bar{transition:none}}.progress-bar-striped{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:1rem 1rem}.progress-bar-animated{-webkit-animation:progress-bar-stripes 1s linear infinite;animation:progress-bar-stripes 1s linear infinite}.media{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start}.media-body{-ms-flex:1;flex:1}.list-group{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding-left:0;margin-bottom:0}.list-group-item-action{width:100%;color:#495057;text-align:inherit}.list-group-item-action:focus,.list-group-item-action:hover{color:#495057;text-decoration:none;background-color:#f8f9fa}.list-group-item-action:active{color:#212529;background-color:#e9ecef}.list-group-item{position:relative;display:block;padding:.75rem 1.25rem;margin-bottom:-1px;background-color:#fff;border:1px solid rgba(0,0,0,.125)}.list-group-item:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.list-group-item:last-child{margin-bottom:0;border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.list-group-item:focus,.list-group-item:hover{z-index:1;text-decoration:none}.list-group-item.disabled,.list-group-item:disabled{color:#6c757d;background-color:#fff}.list-group-item.active{z-index:2;color:#fff;background-color:#007bff;border-color:#007bff}.list-group-flush .list-group-item{border-right:0;border-left:0;border-radius:0}.list-group-flush:first-child .list-group-item:first-child{border-top:0}.list-group-flush:last-child .list-group-item:last-child{border-bottom:0}.list-group-item-primary{color:#004085;background-color:#b8daff}.list-group-item-primary.list-group-item-action:focus,.list-group-item-primary.list-group-item-action:hover{color:#004085;background-color:#9fcdff}.list-group-item-primary.list-group-item-action.active{color:#fff;background-color:#004085;border-color:#004085}.list-group-item-secondary{color:#383d41;background-color:#d6d8db}.list-group-item-secondary.list-group-item-action:focus,.list-group-item-secondary.list-group-item-action:hover{color:#383d41;background-color:#c8cbcf}.list-group-item-secondary.list-group-item-action.active{color:#fff;background-color:#383d41;border-color:#383d41}.list-group-item-success{color:#155724;background-color:#c3e6cb}.list-group-item-success.list-group-item-action:focus,.list-group-item-success.list-group-item-action:hover{color:#155724;background-color:#b1dfbb}.list-group-item-success.list-group-item-action.active{color:#fff;background-color:#155724;border-color:#155724}.list-group-item-info{color:#0c5460;background-color:#bee5eb}.list-group-item-info.list-group-item-action:focus,.list-group-item-info.list-group-item-action:hover{color:#0c5460;background-color:#abdde5}.list-group-item-info.list-group-item-action.active{color:#fff;background-color:#0c5460;border-color:#0c5460}.list-group-item-warning{color:#856404;background-color:#ffeeba}.list-group-item-warning.list-group-item-action:focus,.list-group-item-warning.list-group-item-action:hover{color:#856404;background-color:#ffe8a1}.list-group-item-warning.list-group-item-action.active{color:#fff;background-color:#856404;border-color:#856404}.list-group-item-danger{color:#721c24;background-color:#f5c6cb}.list-group-item-danger.list-group-item-action:focus,.list-group-item-danger.list-group-item-action:hover{color:#721c24;background-color:#f1b0b7}.list-group-item-danger.list-group-item-action.active{color:#fff;background-color:#721c24;border-color:#721c24}.list-group-item-light{color:#818182;background-color:#fdfdfe}.list-group-item-light.list-group-item-action:focus,.list-group-item-light.list-group-item-action:hover{color:#818182;background-color:#ececf6}.list-group-item-light.list-group-item-action.active{color:#fff;background-color:#818182;border-color:#818182}.list-group-item-dark{color:#1b1e21;background-color:#c6c8ca}.list-group-item-dark.list-group-item-action:focus,.list-group-item-dark.list-group-item-action:hover{color:#1b1e21;background-color:#b9bbbe}.list-group-item-dark.list-group-item-action.active{color:#fff;background-color:#1b1e21;border-color:#1b1e21}.close{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5}.close:focus,.close:hover{color:#000;text-decoration:none;opacity:.75}.close:not(:disabled):not(.disabled){cursor:pointer}button.close{padding:0;background-color:transparent;border:0;-webkit-appearance:none}.modal-open{overflow:hidden}.modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;display:none;overflow:hidden;outline:0}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal-dialog{position:relative;width:auto;margin:.5rem;pointer-events:none}.modal.fade .modal-dialog{transition:-webkit-transform .3s ease-out;transition:transform .3s ease-out;transition:transform .3s ease-out,-webkit-transform .3s ease-out;-webkit-transform:translate(0,-25%);transform:translate(0,-25%)}@media screen and (prefers-reduced-motion:reduce){.modal.fade .modal-dialog{transition:none}}.modal.show .modal-dialog{-webkit-transform:translate(0,0);transform:translate(0,0)}.modal-dialog-centered{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;min-height:calc(100% - (.5rem * 2))}.modal-content{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;outline:0}.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000}.modal-backdrop.fade{opacity:0}.modal-backdrop.show{opacity:.5}.modal-header{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:justify;justify-content:space-between;padding:1rem;border-bottom:1px solid #e9ecef;border-top-left-radius:.3rem;border-top-right-radius:.3rem}.modal-header .close{padding:1rem;margin:-1rem -1rem -1rem auto}.modal-title{margin-bottom:0;line-height:1.5}.modal-body{position:relative;-ms-flex:1 1 auto;flex:1 1 auto;padding:1rem}.modal-footer{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;padding:1rem;border-top:1px solid #e9ecef}.modal-footer>:not(:first-child){margin-left:.25rem}.modal-footer>:not(:last-child){margin-right:.25rem}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:576px){.modal-dialog{max-width:500px;margin:1.75rem auto}.modal-dialog-centered{min-height:calc(100% - (1.75rem * 2))}.modal-sm{max-width:300px}}@media (min-width:992px){.modal-lg{max-width:800px}}.tooltip{position:absolute;z-index:1070;display:block;margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;opacity:0}.tooltip.show{opacity:.9}.tooltip .arrow{position:absolute;display:block;width:.8rem;height:.4rem}.tooltip .arrow::before{position:absolute;content:"";border-color:transparent;border-style:solid}.bs-tooltip-auto[x-placement^=top],.bs-tooltip-top{padding:.4rem 0}.bs-tooltip-auto[x-placement^=top] .arrow,.bs-tooltip-top .arrow{bottom:0}.bs-tooltip-auto[x-placement^=top] .arrow::before,.bs-tooltip-top .arrow::before{top:0;border-width:.4rem .4rem 0;border-top-color:#000}.bs-tooltip-auto[x-placement^=right],.bs-tooltip-right{padding:0 .4rem}.bs-tooltip-auto[x-placement^=right] .arrow,.bs-tooltip-right .arrow{left:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=right] .arrow::before,.bs-tooltip-right .arrow::before{right:0;border-width:.4rem .4rem .4rem 0;border-right-color:#000}.bs-tooltip-auto[x-placement^=bottom],.bs-tooltip-bottom{padding:.4rem 0}.bs-tooltip-auto[x-placement^=bottom] .arrow,.bs-tooltip-bottom .arrow{top:0}.bs-tooltip-auto[x-placement^=bottom] .arrow::before,.bs-tooltip-bottom .arrow::before{bottom:0;border-width:0 .4rem .4rem;border-bottom-color:#000}.bs-tooltip-auto[x-placement^=left],.bs-tooltip-left{padding:0 .4rem}.bs-tooltip-auto[x-placement^=left] .arrow,.bs-tooltip-left .arrow{right:0;width:.4rem;height:.8rem}.bs-tooltip-auto[x-placement^=left] .arrow::before,.bs-tooltip-left .arrow::before{left:0;border-width:.4rem 0 .4rem .4rem;border-left-color:#000}.tooltip-inner{max-width:200px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}.popover{position:absolute;top:0;left:0;z-index:1060;display:block;max-width:276px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem}.popover .arrow{position:absolute;display:block;width:1rem;height:.5rem;margin:0 .3rem}.popover .arrow::after,.popover .arrow::before{position:absolute;display:block;content:"";border-color:transparent;border-style:solid}.bs-popover-auto[x-placement^=top],.bs-popover-top{margin-bottom:.5rem}.bs-popover-auto[x-placement^=top] .arrow,.bs-popover-top .arrow{bottom:calc((.5rem + 1px) * -1)}.bs-popover-auto[x-placement^=top] .arrow::after,.bs-popover-auto[x-placement^=top] .arrow::before,.bs-popover-top .arrow::after,.bs-popover-top .arrow::before{border-width:.5rem .5rem 0}.bs-popover-auto[x-placement^=top] .arrow::before,.bs-popover-top .arrow::before{bottom:0;border-top-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=top] .arrow::after,.bs-popover-top .arrow::after{bottom:1px;border-top-color:#fff}.bs-popover-auto[x-placement^=right],.bs-popover-right{margin-left:.5rem}.bs-popover-auto[x-placement^=right] .arrow,.bs-popover-right .arrow{left:calc((.5rem + 1px) * -1);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[x-placement^=right] .arrow::after,.bs-popover-auto[x-placement^=right] .arrow::before,.bs-popover-right .arrow::after,.bs-popover-right .arrow::before{border-width:.5rem .5rem .5rem 0}.bs-popover-auto[x-placement^=right] .arrow::before,.bs-popover-right .arrow::before{left:0;border-right-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=right] .arrow::after,.bs-popover-right .arrow::after{left:1px;border-right-color:#fff}.bs-popover-auto[x-placement^=bottom],.bs-popover-bottom{margin-top:.5rem}.bs-popover-auto[x-placement^=bottom] .arrow,.bs-popover-bottom .arrow{top:calc((.5rem + 1px) * -1)}.bs-popover-auto[x-placement^=bottom] .arrow::after,.bs-popover-auto[x-placement^=bottom] .arrow::before,.bs-popover-bottom .arrow::after,.bs-popover-bottom .arrow::before{border-width:0 .5rem .5rem .5rem}.bs-popover-auto[x-placement^=bottom] .arrow::before,.bs-popover-bottom .arrow::before{top:0;border-bottom-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=bottom] .arrow::after,.bs-popover-bottom .arrow::after{top:1px;border-bottom-color:#fff}.bs-popover-auto[x-placement^=bottom] .popover-header::before,.bs-popover-bottom .popover-header::before{position:absolute;top:0;left:50%;display:block;width:1rem;margin-left:-.5rem;content:"";border-bottom:1px solid #f7f7f7}.bs-popover-auto[x-placement^=left],.bs-popover-left{margin-right:.5rem}.bs-popover-auto[x-placement^=left] .arrow,.bs-popover-left .arrow{right:calc((.5rem + 1px) * -1);width:.5rem;height:1rem;margin:.3rem 0}.bs-popover-auto[x-placement^=left] .arrow::after,.bs-popover-auto[x-placement^=left] .arrow::before,.bs-popover-left .arrow::after,.bs-popover-left .arrow::before{border-width:.5rem 0 .5rem .5rem}.bs-popover-auto[x-placement^=left] .arrow::before,.bs-popover-left .arrow::before{right:0;border-left-color:rgba(0,0,0,.25)}.bs-popover-auto[x-placement^=left] .arrow::after,.bs-popover-left .arrow::after{right:1px;border-left-color:#fff}.popover-header{padding:.5rem .75rem;margin-bottom:0;font-size:1rem;color:inherit;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.popover-header:empty{display:none}.popover-body{padding:.5rem .75rem;color:#212529}.carousel{position:relative}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-item{position:relative;display:none;-ms-flex-align:center;align-items:center;width:100%;transition:-webkit-transform .6s ease;transition:transform .6s ease;transition:transform .6s ease,-webkit-transform .6s ease;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:1000px;perspective:1000px}@media screen and (prefers-reduced-motion:reduce){.carousel-item{transition:none}}.carousel-item-next,.carousel-item-prev,.carousel-item.active{display:block}.carousel-item-next,.carousel-item-prev{position:absolute;top:0}.carousel-item-next.carousel-item-left,.carousel-item-prev.carousel-item-right{-webkit-transform:translateX(0);transform:translateX(0)}@supports ((-webkit-transform-style:preserve-3d) or (transform-style:preserve-3d)){.carousel-item-next.carousel-item-left,.carousel-item-prev.carousel-item-right{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.active.carousel-item-right,.carousel-item-next{-webkit-transform:translateX(100%);transform:translateX(100%)}@supports ((-webkit-transform-style:preserve-3d) or (transform-style:preserve-3d)){.active.carousel-item-right,.carousel-item-next{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}.active.carousel-item-left,.carousel-item-prev{-webkit-transform:translateX(-100%);transform:translateX(-100%)}@supports ((-webkit-transform-style:preserve-3d) or (transform-style:preserve-3d)){.active.carousel-item-left,.carousel-item-prev{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}.carousel-fade .carousel-item{opacity:0;transition-duration:.6s;transition-property:opacity}.carousel-fade .carousel-item-next.carousel-item-left,.carousel-fade .carousel-item-prev.carousel-item-right,.carousel-fade .carousel-item.active{opacity:1}.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right{opacity:0}.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-prev,.carousel-fade .carousel-item-next,.carousel-fade .carousel-item-prev,.carousel-fade .carousel-item.active{-webkit-transform:translateX(0);transform:translateX(0)}@supports ((-webkit-transform-style:preserve-3d) or (transform-style:preserve-3d)){.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-prev,.carousel-fade .carousel-item-next,.carousel-fade .carousel-item-prev,.carousel-fade .carousel-item.active{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.carousel-control-next,.carousel-control-prev{position:absolute;top:0;bottom:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:.5}.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover{color:#fff;text-decoration:none;outline:0;opacity:.9}.carousel-control-prev{left:0}.carousel-control-next{right:0}.carousel-control-next-icon,.carousel-control-prev-icon{display:inline-block;width:20px;height:20px;background:transparent no-repeat center center;background-size:100% 100%}.carousel-control-prev-icon{background-image:url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'%23fff\' viewBox=\'0 0 8 8\'%3E%3Cpath d=\'M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z\'/%3E%3C/svg%3E")}.carousel-control-next-icon{background-image:url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'%23fff\' viewBox=\'0 0 8 8\'%3E%3Cpath d=\'M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z\'/%3E%3C/svg%3E")}.carousel-indicators{position:absolute;right:0;bottom:10px;left:0;z-index:15;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.carousel-indicators li{position:relative;-ms-flex:0 1 auto;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:rgba(255,255,255,.5)}.carousel-indicators li::before{position:absolute;top:-10px;left:0;display:inline-block;width:100%;height:10px;content:""}.carousel-indicators li::after{position:absolute;bottom:-10px;left:0;display:inline-block;width:100%;height:10px;content:""}.carousel-indicators .active{background-color:#fff}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}.align-baseline{vertical-align:baseline!important}.align-top{vertical-align:top!important}.align-middle{vertical-align:middle!important}.align-bottom{vertical-align:bottom!important}.align-text-bottom{vertical-align:text-bottom!important}.align-text-top{vertical-align:text-top!important}.bg-primary{background-color:#007bff!important}a.bg-primary:focus,a.bg-primary:hover,button.bg-primary:focus,button.bg-primary:hover{background-color:#0062cc!important}.bg-secondary{background-color:#6c757d!important}a.bg-secondary:focus,a.bg-secondary:hover,button.bg-secondary:focus,button.bg-secondary:hover{background-color:#545b62!important}.bg-success{background-color:#28a745!important}a.bg-success:focus,a.bg-success:hover,button.bg-success:focus,button.bg-success:hover{background-color:#1e7e34!important}.bg-info{background-color:#17a2b8!important}a.bg-info:focus,a.bg-info:hover,button.bg-info:focus,button.bg-info:hover{background-color:#117a8b!important}.bg-warning{background-color:#ffc107!important}a.bg-warning:focus,a.bg-warning:hover,button.bg-warning:focus,button.bg-warning:hover{background-color:#d39e00!important}.bg-danger{background-color:#dc3545!important}a.bg-danger:focus,a.bg-danger:hover,button.bg-danger:focus,button.bg-danger:hover{background-color:#bd2130!important}.bg-light{background-color:#f8f9fa!important}a.bg-light:focus,a.bg-light:hover,button.bg-light:focus,button.bg-light:hover{background-color:#dae0e5!important}.bg-dark{background-color:#343a40!important}a.bg-dark:focus,a.bg-dark:hover,button.bg-dark:focus,button.bg-dark:hover{background-color:#1d2124!important}.bg-white{background-color:#fff!important}.bg-transparent{background-color:transparent!important}.border{border:1px solid #dee2e6!important}.border-top{border-top:1px solid #dee2e6!important}.border-right{border-right:1px solid #dee2e6!important}.border-bottom{border-bottom:1px solid #dee2e6!important}.border-left{border-left:1px solid #dee2e6!important}.border-0{border:0!important}.border-top-0{border-top:0!important}.border-right-0{border-right:0!important}.border-bottom-0{border-bottom:0!important}.border-left-0{border-left:0!important}.border-primary{border-color:#007bff!important}.border-secondary{border-color:#6c757d!important}.border-success{border-color:#28a745!important}.border-info{border-color:#17a2b8!important}.border-warning{border-color:#ffc107!important}.border-danger{border-color:#dc3545!important}.border-light{border-color:#f8f9fa!important}.border-dark{border-color:#343a40!important}.border-white{border-color:#fff!important}.rounded{border-radius:.25rem!important}.rounded-top{border-top-left-radius:.25rem!important;border-top-right-radius:.25rem!important}.rounded-right{border-top-right-radius:.25rem!important;border-bottom-right-radius:.25rem!important}.rounded-bottom{border-bottom-right-radius:.25rem!important;border-bottom-left-radius:.25rem!important}.rounded-left{border-top-left-radius:.25rem!important;border-bottom-left-radius:.25rem!important}.rounded-circle{border-radius:50%!important}.rounded-0{border-radius:0!important}.clearfix::after{display:block;clear:both;content:""}.d-none{display:none!important}.d-inline{display:inline!important}.d-inline-block{display:inline-block!important}.d-block{display:block!important}.d-table{display:table!important}.d-table-row{display:table-row!important}.d-table-cell{display:table-cell!important}.d-flex{display:-ms-flexbox!important;display:flex!important}.d-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}@media (min-width:576px){.d-sm-none{display:none!important}.d-sm-inline{display:inline!important}.d-sm-inline-block{display:inline-block!important}.d-sm-block{display:block!important}.d-sm-table{display:table!important}.d-sm-table-row{display:table-row!important}.d-sm-table-cell{display:table-cell!important}.d-sm-flex{display:-ms-flexbox!important;display:flex!important}.d-sm-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:768px){.d-md-none{display:none!important}.d-md-inline{display:inline!important}.d-md-inline-block{display:inline-block!important}.d-md-block{display:block!important}.d-md-table{display:table!important}.d-md-table-row{display:table-row!important}.d-md-table-cell{display:table-cell!important}.d-md-flex{display:-ms-flexbox!important;display:flex!important}.d-md-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:992px){.d-lg-none{display:none!important}.d-lg-inline{display:inline!important}.d-lg-inline-block{display:inline-block!important}.d-lg-block{display:block!important}.d-lg-table{display:table!important}.d-lg-table-row{display:table-row!important}.d-lg-table-cell{display:table-cell!important}.d-lg-flex{display:-ms-flexbox!important;display:flex!important}.d-lg-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:1200px){.d-xl-none{display:none!important}.d-xl-inline{display:inline!important}.d-xl-inline-block{display:inline-block!important}.d-xl-block{display:block!important}.d-xl-table{display:table!important}.d-xl-table-row{display:table-row!important}.d-xl-table-cell{display:table-cell!important}.d-xl-flex{display:-ms-flexbox!important;display:flex!important}.d-xl-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}@media print{.d-print-none{display:none!important}.d-print-inline{display:inline!important}.d-print-inline-block{display:inline-block!important}.d-print-block{display:block!important}.d-print-table{display:table!important}.d-print-table-row{display:table-row!important}.d-print-table-cell{display:table-cell!important}.d-print-flex{display:-ms-flexbox!important;display:flex!important}.d-print-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}}.embed-responsive{position:relative;display:block;width:100%;padding:0;overflow:hidden}.embed-responsive::before{display:block;content:""}.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-21by9::before{padding-top:42.857143%}.embed-responsive-16by9::before{padding-top:56.25%}.embed-responsive-4by3::before{padding-top:75%}.embed-responsive-1by1::before{padding-top:100%}.flex-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-fill{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-grow-0{-ms-flex-positive:0!important;flex-grow:0!important}.flex-grow-1{-ms-flex-positive:1!important;flex-grow:1!important}.flex-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-center{-ms-flex-align:center!important;align-items:center!important}.align-items-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}@media (min-width:576px){.flex-sm-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-sm-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-sm-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-sm-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-sm-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-sm-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-sm-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-sm-fill{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-sm-grow-0{-ms-flex-positive:0!important;flex-grow:0!important}.flex-sm-grow-1{-ms-flex-positive:1!important;flex-grow:1!important}.flex-sm-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-sm-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-sm-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-sm-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-sm-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-sm-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-sm-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-sm-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-sm-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-sm-center{-ms-flex-align:center!important;align-items:center!important}.align-items-sm-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-sm-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-sm-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-sm-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-sm-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-sm-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-sm-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-sm-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-sm-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-sm-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-sm-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-sm-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-sm-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-sm-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}}@media (min-width:768px){.flex-md-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-md-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-md-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-md-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-md-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-md-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-md-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-md-fill{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-md-grow-0{-ms-flex-positive:0!important;flex-grow:0!important}.flex-md-grow-1{-ms-flex-positive:1!important;flex-grow:1!important}.flex-md-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-md-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-md-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-md-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-md-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-md-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-md-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-md-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-md-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-md-center{-ms-flex-align:center!important;align-items:center!important}.align-items-md-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-md-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-md-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-md-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-md-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-md-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-md-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-md-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-md-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-md-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-md-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-md-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-md-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-md-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}}@media (min-width:992px){.flex-lg-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-lg-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-lg-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-lg-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-lg-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-lg-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-lg-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-lg-fill{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-lg-grow-0{-ms-flex-positive:0!important;flex-grow:0!important}.flex-lg-grow-1{-ms-flex-positive:1!important;flex-grow:1!important}.flex-lg-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-lg-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-lg-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-lg-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-lg-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-lg-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-lg-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-lg-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-lg-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-lg-center{-ms-flex-align:center!important;align-items:center!important}.align-items-lg-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-lg-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-lg-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-lg-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-lg-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-lg-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-lg-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-lg-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-lg-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-lg-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-lg-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-lg-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-lg-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-lg-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}}@media (min-width:1200px){.flex-xl-row{-ms-flex-direction:row!important;flex-direction:row!important}.flex-xl-column{-ms-flex-direction:column!important;flex-direction:column!important}.flex-xl-row-reverse{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.flex-xl-column-reverse{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.flex-xl-wrap{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.flex-xl-nowrap{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.flex-xl-wrap-reverse{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.flex-xl-fill{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.flex-xl-grow-0{-ms-flex-positive:0!important;flex-grow:0!important}.flex-xl-grow-1{-ms-flex-positive:1!important;flex-grow:1!important}.flex-xl-shrink-0{-ms-flex-negative:0!important;flex-shrink:0!important}.flex-xl-shrink-1{-ms-flex-negative:1!important;flex-shrink:1!important}.justify-content-xl-start{-ms-flex-pack:start!important;justify-content:flex-start!important}.justify-content-xl-end{-ms-flex-pack:end!important;justify-content:flex-end!important}.justify-content-xl-center{-ms-flex-pack:center!important;justify-content:center!important}.justify-content-xl-between{-ms-flex-pack:justify!important;justify-content:space-between!important}.justify-content-xl-around{-ms-flex-pack:distribute!important;justify-content:space-around!important}.align-items-xl-start{-ms-flex-align:start!important;align-items:flex-start!important}.align-items-xl-end{-ms-flex-align:end!important;align-items:flex-end!important}.align-items-xl-center{-ms-flex-align:center!important;align-items:center!important}.align-items-xl-baseline{-ms-flex-align:baseline!important;align-items:baseline!important}.align-items-xl-stretch{-ms-flex-align:stretch!important;align-items:stretch!important}.align-content-xl-start{-ms-flex-line-pack:start!important;align-content:flex-start!important}.align-content-xl-end{-ms-flex-line-pack:end!important;align-content:flex-end!important}.align-content-xl-center{-ms-flex-line-pack:center!important;align-content:center!important}.align-content-xl-between{-ms-flex-line-pack:justify!important;align-content:space-between!important}.align-content-xl-around{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.align-content-xl-stretch{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.align-self-xl-auto{-ms-flex-item-align:auto!important;align-self:auto!important}.align-self-xl-start{-ms-flex-item-align:start!important;align-self:flex-start!important}.align-self-xl-end{-ms-flex-item-align:end!important;align-self:flex-end!important}.align-self-xl-center{-ms-flex-item-align:center!important;align-self:center!important}.align-self-xl-baseline{-ms-flex-item-align:baseline!important;align-self:baseline!important}.align-self-xl-stretch{-ms-flex-item-align:stretch!important;align-self:stretch!important}}.float-left{float:left!important}.float-right{float:right!important}.float-none{float:none!important}@media (min-width:576px){.float-sm-left{float:left!important}.float-sm-right{float:right!important}.float-sm-none{float:none!important}}@media (min-width:768px){.float-md-left{float:left!important}.float-md-right{float:right!important}.float-md-none{float:none!important}}@media (min-width:992px){.float-lg-left{float:left!important}.float-lg-right{float:right!important}.float-lg-none{float:none!important}}@media (min-width:1200px){.float-xl-left{float:left!important}.float-xl-right{float:right!important}.float-xl-none{float:none!important}}.position-static{position:static!important}.position-relative{position:relative!important}.position-absolute{position:absolute!important}.position-fixed{position:fixed!important}.position-sticky{position:-webkit-sticky!important;position:sticky!important}.fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}.fixed-bottom{position:fixed;right:0;bottom:0;left:0;z-index:1030}@supports ((position:-webkit-sticky) or (position:sticky)){.sticky-top{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}.sr-only{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto;white-space:normal}.shadow-sm{box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important}.shadow{box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important}.shadow-lg{box-shadow:0 1rem 3rem rgba(0,0,0,.175)!important}.shadow-none{box-shadow:none!important}.w-25{width:25%!important}.w-50{width:50%!important}.w-75{width:75%!important}.w-100{width:100%!important}.w-auto{width:auto!important}.h-25{height:25%!important}.h-50{height:50%!important}.h-75{height:75%!important}.h-100{height:100%!important}.h-auto{height:auto!important}.mw-100{max-width:100%!important}.mh-100{max-height:100%!important}.m-0{margin:0!important}.mt-0,.my-0{margin-top:0!important}.mr-0,.mx-0{margin-right:0!important}.mb-0,.my-0{margin-bottom:0!important}.ml-0,.mx-0{margin-left:0!important}.m-1{margin:.25rem!important}.mt-1,.my-1{margin-top:.25rem!important}.mr-1,.mx-1{margin-right:.25rem!important}.mb-1,.my-1{margin-bottom:.25rem!important}.ml-1,.mx-1{margin-left:.25rem!important}.m-2{margin:.5rem!important}.mt-2,.my-2{margin-top:.5rem!important}.mr-2,.mx-2{margin-right:.5rem!important}.mb-2,.my-2{margin-bottom:.5rem!important}.ml-2,.mx-2{margin-left:.5rem!important}.m-3{margin:1rem!important}.mt-3,.my-3{margin-top:1rem!important}.mr-3,.mx-3{margin-right:1rem!important}.mb-3,.my-3{margin-bottom:1rem!important}.ml-3,.mx-3{margin-left:1rem!important}.m-4{margin:1.5rem!important}.mt-4,.my-4{margin-top:1.5rem!important}.mr-4,.mx-4{margin-right:1.5rem!important}.mb-4,.my-4{margin-bottom:1.5rem!important}.ml-4,.mx-4{margin-left:1.5rem!important}.m-5{margin:3rem!important}.mt-5,.my-5{margin-top:3rem!important}.mr-5,.mx-5{margin-right:3rem!important}.mb-5,.my-5{margin-bottom:3rem!important}.ml-5,.mx-5{margin-left:3rem!important}.p-0{padding:0!important}.pt-0,.py-0{padding-top:0!important}.pr-0,.px-0{padding-right:0!important}.pb-0,.py-0{padding-bottom:0!important}.pl-0,.px-0{padding-left:0!important}.p-1{padding:.25rem!important}.pt-1,.py-1{padding-top:.25rem!important}.pr-1,.px-1{padding-right:.25rem!important}.pb-1,.py-1{padding-bottom:.25rem!important}.pl-1,.px-1{padding-left:.25rem!important}.p-2{padding:.5rem!important}.pt-2,.py-2{padding-top:.5rem!important}.pr-2,.px-2{padding-right:.5rem!important}.pb-2,.py-2{padding-bottom:.5rem!important}.pl-2,.px-2{padding-left:.5rem!important}.p-3{padding:1rem!important}.pt-3,.py-3{padding-top:1rem!important}.pr-3,.px-3{padding-right:1rem!important}.pb-3,.py-3{padding-bottom:1rem!important}.pl-3,.px-3{padding-left:1rem!important}.p-4{padding:1.5rem!important}.pt-4,.py-4{padding-top:1.5rem!important}.pr-4,.px-4{padding-right:1.5rem!important}.pb-4,.py-4{padding-bottom:1.5rem!important}.pl-4,.px-4{padding-left:1.5rem!important}.p-5{padding:3rem!important}.pt-5,.py-5{padding-top:3rem!important}.pr-5,.px-5{padding-right:3rem!important}.pb-5,.py-5{padding-bottom:3rem!important}.pl-5,.px-5{padding-left:3rem!important}.m-auto{margin:auto!important}.mt-auto,.my-auto{margin-top:auto!important}.mr-auto,.mx-auto{margin-right:auto!important}.mb-auto,.my-auto{margin-bottom:auto!important}.ml-auto,.mx-auto{margin-left:auto!important}@media (min-width:576px){.m-sm-0{margin:0!important}.mt-sm-0,.my-sm-0{margin-top:0!important}.mr-sm-0,.mx-sm-0{margin-right:0!important}.mb-sm-0,.my-sm-0{margin-bottom:0!important}.ml-sm-0,.mx-sm-0{margin-left:0!important}.m-sm-1{margin:.25rem!important}.mt-sm-1,.my-sm-1{margin-top:.25rem!important}.mr-sm-1,.mx-sm-1{margin-right:.25rem!important}.mb-sm-1,.my-sm-1{margin-bottom:.25rem!important}.ml-sm-1,.mx-sm-1{margin-left:.25rem!important}.m-sm-2{margin:.5rem!important}.mt-sm-2,.my-sm-2{margin-top:.5rem!important}.mr-sm-2,.mx-sm-2{margin-right:.5rem!important}.mb-sm-2,.my-sm-2{margin-bottom:.5rem!important}.ml-sm-2,.mx-sm-2{margin-left:.5rem!important}.m-sm-3{margin:1rem!important}.mt-sm-3,.my-sm-3{margin-top:1rem!important}.mr-sm-3,.mx-sm-3{margin-right:1rem!important}.mb-sm-3,.my-sm-3{margin-bottom:1rem!important}.ml-sm-3,.mx-sm-3{margin-left:1rem!important}.m-sm-4{margin:1.5rem!important}.mt-sm-4,.my-sm-4{margin-top:1.5rem!important}.mr-sm-4,.mx-sm-4{margin-right:1.5rem!important}.mb-sm-4,.my-sm-4{margin-bottom:1.5rem!important}.ml-sm-4,.mx-sm-4{margin-left:1.5rem!important}.m-sm-5{margin:3rem!important}.mt-sm-5,.my-sm-5{margin-top:3rem!important}.mr-sm-5,.mx-sm-5{margin-right:3rem!important}.mb-sm-5,.my-sm-5{margin-bottom:3rem!important}.ml-sm-5,.mx-sm-5{margin-left:3rem!important}.p-sm-0{padding:0!important}.pt-sm-0,.py-sm-0{padding-top:0!important}.pr-sm-0,.px-sm-0{padding-right:0!important}.pb-sm-0,.py-sm-0{padding-bottom:0!important}.pl-sm-0,.px-sm-0{padding-left:0!important}.p-sm-1{padding:.25rem!important}.pt-sm-1,.py-sm-1{padding-top:.25rem!important}.pr-sm-1,.px-sm-1{padding-right:.25rem!important}.pb-sm-1,.py-sm-1{padding-bottom:.25rem!important}.pl-sm-1,.px-sm-1{padding-left:.25rem!important}.p-sm-2{padding:.5rem!important}.pt-sm-2,.py-sm-2{padding-top:.5rem!important}.pr-sm-2,.px-sm-2{padding-right:.5rem!important}.pb-sm-2,.py-sm-2{padding-bottom:.5rem!important}.pl-sm-2,.px-sm-2{padding-left:.5rem!important}.p-sm-3{padding:1rem!important}.pt-sm-3,.py-sm-3{padding-top:1rem!important}.pr-sm-3,.px-sm-3{padding-right:1rem!important}.pb-sm-3,.py-sm-3{padding-bottom:1rem!important}.pl-sm-3,.px-sm-3{padding-left:1rem!important}.p-sm-4{padding:1.5rem!important}.pt-sm-4,.py-sm-4{padding-top:1.5rem!important}.pr-sm-4,.px-sm-4{padding-right:1.5rem!important}.pb-sm-4,.py-sm-4{padding-bottom:1.5rem!important}.pl-sm-4,.px-sm-4{padding-left:1.5rem!important}.p-sm-5{padding:3rem!important}.pt-sm-5,.py-sm-5{padding-top:3rem!important}.pr-sm-5,.px-sm-5{padding-right:3rem!important}.pb-sm-5,.py-sm-5{padding-bottom:3rem!important}.pl-sm-5,.px-sm-5{padding-left:3rem!important}.m-sm-auto{margin:auto!important}.mt-sm-auto,.my-sm-auto{margin-top:auto!important}.mr-sm-auto,.mx-sm-auto{margin-right:auto!important}.mb-sm-auto,.my-sm-auto{margin-bottom:auto!important}.ml-sm-auto,.mx-sm-auto{margin-left:auto!important}}@media (min-width:768px){.m-md-0{margin:0!important}.mt-md-0,.my-md-0{margin-top:0!important}.mr-md-0,.mx-md-0{margin-right:0!important}.mb-md-0,.my-md-0{margin-bottom:0!important}.ml-md-0,.mx-md-0{margin-left:0!important}.m-md-1{margin:.25rem!important}.mt-md-1,.my-md-1{margin-top:.25rem!important}.mr-md-1,.mx-md-1{margin-right:.25rem!important}.mb-md-1,.my-md-1{margin-bottom:.25rem!important}.ml-md-1,.mx-md-1{margin-left:.25rem!important}.m-md-2{margin:.5rem!important}.mt-md-2,.my-md-2{margin-top:.5rem!important}.mr-md-2,.mx-md-2{margin-right:.5rem!important}.mb-md-2,.my-md-2{margin-bottom:.5rem!important}.ml-md-2,.mx-md-2{margin-left:.5rem!important}.m-md-3{margin:1rem!important}.mt-md-3,.my-md-3{margin-top:1rem!important}.mr-md-3,.mx-md-3{margin-right:1rem!important}.mb-md-3,.my-md-3{margin-bottom:1rem!important}.ml-md-3,.mx-md-3{margin-left:1rem!important}.m-md-4{margin:1.5rem!important}.mt-md-4,.my-md-4{margin-top:1.5rem!important}.mr-md-4,.mx-md-4{margin-right:1.5rem!important}.mb-md-4,.my-md-4{margin-bottom:1.5rem!important}.ml-md-4,.mx-md-4{margin-left:1.5rem!important}.m-md-5{margin:3rem!important}.mt-md-5,.my-md-5{margin-top:3rem!important}.mr-md-5,.mx-md-5{margin-right:3rem!important}.mb-md-5,.my-md-5{margin-bottom:3rem!important}.ml-md-5,.mx-md-5{margin-left:3rem!important}.p-md-0{padding:0!important}.pt-md-0,.py-md-0{padding-top:0!important}.pr-md-0,.px-md-0{padding-right:0!important}.pb-md-0,.py-md-0{padding-bottom:0!important}.pl-md-0,.px-md-0{padding-left:0!important}.p-md-1{padding:.25rem!important}.pt-md-1,.py-md-1{padding-top:.25rem!important}.pr-md-1,.px-md-1{padding-right:.25rem!important}.pb-md-1,.py-md-1{padding-bottom:.25rem!important}.pl-md-1,.px-md-1{padding-left:.25rem!important}.p-md-2{padding:.5rem!important}.pt-md-2,.py-md-2{padding-top:.5rem!important}.pr-md-2,.px-md-2{padding-right:.5rem!important}.pb-md-2,.py-md-2{padding-bottom:.5rem!important}.pl-md-2,.px-md-2{padding-left:.5rem!important}.p-md-3{padding:1rem!important}.pt-md-3,.py-md-3{padding-top:1rem!important}.pr-md-3,.px-md-3{padding-right:1rem!important}.pb-md-3,.py-md-3{padding-bottom:1rem!important}.pl-md-3,.px-md-3{padding-left:1rem!important}.p-md-4{padding:1.5rem!important}.pt-md-4,.py-md-4{padding-top:1.5rem!important}.pr-md-4,.px-md-4{padding-right:1.5rem!important}.pb-md-4,.py-md-4{padding-bottom:1.5rem!important}.pl-md-4,.px-md-4{padding-left:1.5rem!important}.p-md-5{padding:3rem!important}.pt-md-5,.py-md-5{padding-top:3rem!important}.pr-md-5,.px-md-5{padding-right:3rem!important}.pb-md-5,.py-md-5{padding-bottom:3rem!important}.pl-md-5,.px-md-5{padding-left:3rem!important}.m-md-auto{margin:auto!important}.mt-md-auto,.my-md-auto{margin-top:auto!important}.mr-md-auto,.mx-md-auto{margin-right:auto!important}.mb-md-auto,.my-md-auto{margin-bottom:auto!important}.ml-md-auto,.mx-md-auto{margin-left:auto!important}}@media (min-width:992px){.m-lg-0{margin:0!important}.mt-lg-0,.my-lg-0{margin-top:0!important}.mr-lg-0,.mx-lg-0{margin-right:0!important}.mb-lg-0,.my-lg-0{margin-bottom:0!important}.ml-lg-0,.mx-lg-0{margin-left:0!important}.m-lg-1{margin:.25rem!important}.mt-lg-1,.my-lg-1{margin-top:.25rem!important}.mr-lg-1,.mx-lg-1{margin-right:.25rem!important}.mb-lg-1,.my-lg-1{margin-bottom:.25rem!important}.ml-lg-1,.mx-lg-1{margin-left:.25rem!important}.m-lg-2{margin:.5rem!important}.mt-lg-2,.my-lg-2{margin-top:.5rem!important}.mr-lg-2,.mx-lg-2{margin-right:.5rem!important}.mb-lg-2,.my-lg-2{margin-bottom:.5rem!important}.ml-lg-2,.mx-lg-2{margin-left:.5rem!important}.m-lg-3{margin:1rem!important}.mt-lg-3,.my-lg-3{margin-top:1rem!important}.mr-lg-3,.mx-lg-3{margin-right:1rem!important}.mb-lg-3,.my-lg-3{margin-bottom:1rem!important}.ml-lg-3,.mx-lg-3{margin-left:1rem!important}.m-lg-4{margin:1.5rem!important}.mt-lg-4,.my-lg-4{margin-top:1.5rem!important}.mr-lg-4,.mx-lg-4{margin-right:1.5rem!important}.mb-lg-4,.my-lg-4{margin-bottom:1.5rem!important}.ml-lg-4,.mx-lg-4{margin-left:1.5rem!important}.m-lg-5{margin:3rem!important}.mt-lg-5,.my-lg-5{margin-top:3rem!important}.mr-lg-5,.mx-lg-5{margin-right:3rem!important}.mb-lg-5,.my-lg-5{margin-bottom:3rem!important}.ml-lg-5,.mx-lg-5{margin-left:3rem!important}.p-lg-0{padding:0!important}.pt-lg-0,.py-lg-0{padding-top:0!important}.pr-lg-0,.px-lg-0{padding-right:0!important}.pb-lg-0,.py-lg-0{padding-bottom:0!important}.pl-lg-0,.px-lg-0{padding-left:0!important}.p-lg-1{padding:.25rem!important}.pt-lg-1,.py-lg-1{padding-top:.25rem!important}.pr-lg-1,.px-lg-1{padding-right:.25rem!important}.pb-lg-1,.py-lg-1{padding-bottom:.25rem!important}.pl-lg-1,.px-lg-1{padding-left:.25rem!important}.p-lg-2{padding:.5rem!important}.pt-lg-2,.py-lg-2{padding-top:.5rem!important}.pr-lg-2,.px-lg-2{padding-right:.5rem!important}.pb-lg-2,.py-lg-2{padding-bottom:.5rem!important}.pl-lg-2,.px-lg-2{padding-left:.5rem!important}.p-lg-3{padding:1rem!important}.pt-lg-3,.py-lg-3{padding-top:1rem!important}.pr-lg-3,.px-lg-3{padding-right:1rem!important}.pb-lg-3,.py-lg-3{padding-bottom:1rem!important}.pl-lg-3,.px-lg-3{padding-left:1rem!important}.p-lg-4{padding:1.5rem!important}.pt-lg-4,.py-lg-4{padding-top:1.5rem!important}.pr-lg-4,.px-lg-4{padding-right:1.5rem!important}.pb-lg-4,.py-lg-4{padding-bottom:1.5rem!important}.pl-lg-4,.px-lg-4{padding-left:1.5rem!important}.p-lg-5{padding:3rem!important}.pt-lg-5,.py-lg-5{padding-top:3rem!important}.pr-lg-5,.px-lg-5{padding-right:3rem!important}.pb-lg-5,.py-lg-5{padding-bottom:3rem!important}.pl-lg-5,.px-lg-5{padding-left:3rem!important}.m-lg-auto{margin:auto!important}.mt-lg-auto,.my-lg-auto{margin-top:auto!important}.mr-lg-auto,.mx-lg-auto{margin-right:auto!important}.mb-lg-auto,.my-lg-auto{margin-bottom:auto!important}.ml-lg-auto,.mx-lg-auto{margin-left:auto!important}}@media (min-width:1200px){.m-xl-0{margin:0!important}.mt-xl-0,.my-xl-0{margin-top:0!important}.mr-xl-0,.mx-xl-0{margin-right:0!important}.mb-xl-0,.my-xl-0{margin-bottom:0!important}.ml-xl-0,.mx-xl-0{margin-left:0!important}.m-xl-1{margin:.25rem!important}.mt-xl-1,.my-xl-1{margin-top:.25rem!important}.mr-xl-1,.mx-xl-1{margin-right:.25rem!important}.mb-xl-1,.my-xl-1{margin-bottom:.25rem!important}.ml-xl-1,.mx-xl-1{margin-left:.25rem!important}.m-xl-2{margin:.5rem!important}.mt-xl-2,.my-xl-2{margin-top:.5rem!important}.mr-xl-2,.mx-xl-2{margin-right:.5rem!important}.mb-xl-2,.my-xl-2{margin-bottom:.5rem!important}.ml-xl-2,.mx-xl-2{margin-left:.5rem!important}.m-xl-3{margin:1rem!important}.mt-xl-3,.my-xl-3{margin-top:1rem!important}.mr-xl-3,.mx-xl-3{margin-right:1rem!important}.mb-xl-3,.my-xl-3{margin-bottom:1rem!important}.ml-xl-3,.mx-xl-3{margin-left:1rem!important}.m-xl-4{margin:1.5rem!important}.mt-xl-4,.my-xl-4{margin-top:1.5rem!important}.mr-xl-4,.mx-xl-4{margin-right:1.5rem!important}.mb-xl-4,.my-xl-4{margin-bottom:1.5rem!important}.ml-xl-4,.mx-xl-4{margin-left:1.5rem!important}.m-xl-5{margin:3rem!important}.mt-xl-5,.my-xl-5{margin-top:3rem!important}.mr-xl-5,.mx-xl-5{margin-right:3rem!important}.mb-xl-5,.my-xl-5{margin-bottom:3rem!important}.ml-xl-5,.mx-xl-5{margin-left:3rem!important}.p-xl-0{padding:0!important}.pt-xl-0,.py-xl-0{padding-top:0!important}.pr-xl-0,.px-xl-0{padding-right:0!important}.pb-xl-0,.py-xl-0{padding-bottom:0!important}.pl-xl-0,.px-xl-0{padding-left:0!important}.p-xl-1{padding:.25rem!important}.pt-xl-1,.py-xl-1{padding-top:.25rem!important}.pr-xl-1,.px-xl-1{padding-right:.25rem!important}.pb-xl-1,.py-xl-1{padding-bottom:.25rem!important}.pl-xl-1,.px-xl-1{padding-left:.25rem!important}.p-xl-2{padding:.5rem!important}.pt-xl-2,.py-xl-2{padding-top:.5rem!important}.pr-xl-2,.px-xl-2{padding-right:.5rem!important}.pb-xl-2,.py-xl-2{padding-bottom:.5rem!important}.pl-xl-2,.px-xl-2{padding-left:.5rem!important}.p-xl-3{padding:1rem!important}.pt-xl-3,.py-xl-3{padding-top:1rem!important}.pr-xl-3,.px-xl-3{padding-right:1rem!important}.pb-xl-3,.py-xl-3{padding-bottom:1rem!important}.pl-xl-3,.px-xl-3{padding-left:1rem!important}.p-xl-4{padding:1.5rem!important}.pt-xl-4,.py-xl-4{padding-top:1.5rem!important}.pr-xl-4,.px-xl-4{padding-right:1.5rem!important}.pb-xl-4,.py-xl-4{padding-bottom:1.5rem!important}.pl-xl-4,.px-xl-4{padding-left:1.5rem!important}.p-xl-5{padding:3rem!important}.pt-xl-5,.py-xl-5{padding-top:3rem!important}.pr-xl-5,.px-xl-5{padding-right:3rem!important}.pb-xl-5,.py-xl-5{padding-bottom:3rem!important}.pl-xl-5,.px-xl-5{padding-left:3rem!important}.m-xl-auto{margin:auto!important}.mt-xl-auto,.my-xl-auto{margin-top:auto!important}.mr-xl-auto,.mx-xl-auto{margin-right:auto!important}.mb-xl-auto,.my-xl-auto{margin-bottom:auto!important}.ml-xl-auto,.mx-xl-auto{margin-left:auto!important}}.text-monospace{font-family:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}.text-justify{text-align:justify!important}.text-nowrap{white-space:nowrap!important}.text-truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-left{text-align:left!important}.text-right{text-align:right!important}.text-center{text-align:center!important}@media (min-width:576px){.text-sm-left{text-align:left!important}.text-sm-right{text-align:right!important}.text-sm-center{text-align:center!important}}@media (min-width:768px){.text-md-left{text-align:left!important}.text-md-right{text-align:right!important}.text-md-center{text-align:center!important}}@media (min-width:992px){.text-lg-left{text-align:left!important}.text-lg-right{text-align:right!important}.text-lg-center{text-align:center!important}}@media (min-width:1200px){.text-xl-left{text-align:left!important}.text-xl-right{text-align:right!important}.text-xl-center{text-align:center!important}}.text-lowercase{text-transform:lowercase!important}.text-uppercase{text-transform:uppercase!important}.text-capitalize{text-transform:capitalize!important}.font-weight-light{font-weight:300!important}.font-weight-normal{font-weight:400!important}.font-weight-bold{font-weight:700!important}.font-italic{font-style:italic!important}.text-white{color:#fff!important}.text-primary{color:#007bff!important}a.text-primary:focus,a.text-primary:hover{color:#0062cc!important}.text-secondary{color:#6c757d!important}a.text-secondary:focus,a.text-secondary:hover{color:#545b62!important}.text-success{color:#28a745!important}a.text-success:focus,a.text-success:hover{color:#1e7e34!important}.text-info{color:#17a2b8!important}a.text-info:focus,a.text-info:hover{color:#117a8b!important}.text-warning{color:#ffc107!important}a.text-warning:focus,a.text-warning:hover{color:#d39e00!important}.text-danger{color:#dc3545!important}a.text-danger:focus,a.text-danger:hover{color:#bd2130!important}.text-light{color:#f8f9fa!important}a.text-light:focus,a.text-light:hover{color:#dae0e5!important}.text-dark{color:#343a40!important}a.text-dark:focus,a.text-dark:hover{color:#1d2124!important}.text-body{color:#212529!important}.text-muted{color:#6c757d!important}.text-black-50{color:rgba(0,0,0,.5)!important}.text-white-50{color:rgba(255,255,255,.5)!important}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.visible{visibility:visible!important}.invisible{visibility:hidden!important}@media print{*,::after,::before{text-shadow:none!important;box-shadow:none!important}a:not(.btn){text-decoration:underline}abbr[title]::after{content:" (" attr(title) ")"}pre{white-space:pre-wrap!important}blockquote,pre{border:1px solid #adb5bd;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}@page{size:a3}body{min-width:992px!important}.container{min-width:992px!important}.navbar{display:none}.badge{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #dee2e6!important}.table-dark{color:inherit}.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th{border-color:#dee2e6}.table .thead-dark th{color:inherit;border-color:#dee2e6}}', ""])
}, function (t, e, o) {
    var r = o(7);
    "string" == typeof r && (r = [
        [t.i, r, ""]
    ]);
    var n = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    o(0)(r, n);
    r.locals && (t.exports = r.locals)
}, function (t, e) {
    t.exports = function (t) {
        return t.webpackPolyfill || (t.deprecate = function () { }, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function () {
                return t.l
            }
        }), Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function () {
                return t.i
            }
        }), t.webpackPolyfill = 1), t
    }
}, function (t, e, o) {
    (function (t) {
        var o, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        };
        /*!
         * jQuery JavaScript Library v3.3.1
         * https://jquery.com/
         *
         * Includes Sizzle.js
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://jquery.org/license
         *
         * Date: 2018-01-20T17:24Z
         */
        ! function (e, o) {
            "use strict";
            "object" === r(t) && "object" === r(t.exports) ? t.exports = e.document ? o(e, !0) : function (t) {
                if (!t.document) throw new Error("jQuery requires a window with a document");
                return o(t)
            } : o(e)
        }("undefined" != typeof window ? window : void 0, function (n, i) {
            "use strict";
            var a = [],
                l = n.document,
                s = Object.getPrototypeOf,
                d = a.slice,
                c = a.concat,
                p = a.push,
                m = a.indexOf,
                f = {},
                u = f.toString,
                g = f.hasOwnProperty,
                b = g.toString,
                h = b.call(Object),
                x = {},
                v = function (t) {
                    return "function" == typeof t && "number" != typeof t.nodeType
                },
                y = function (t) {
                    return null != t && t === t.window
                },
                w = {
                    type: !0,
                    src: !0,
                    noModule: !0
                };

            function k(t, e, o) {
                var r, n = (e = e || l).createElement("script");
                if (n.text = t, o)
                    for (r in w) o[r] && (n[r] = o[r]);
                e.head.appendChild(n).parentNode.removeChild(n)
            }

            function j(t) {
                return null == t ? t + "" : "object" === (void 0 === t ? "undefined" : r(t)) || "function" == typeof t ? f[u.call(t)] || "object" : void 0 === t ? "undefined" : r(t)
            }
            var C = function t(e, o) {
                return new t.fn.init(e, o)
            },
                T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

            function E(t) {
                var e = !!t && "length" in t && t.length,
                    o = j(t);
                return !v(t) && !y(t) && ("array" === o || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
            }
            C.fn = C.prototype = {
                jquery: "3.3.1",
                constructor: C,
                length: 0,
                toArray: function () {
                    return d.call(this)
                },
                get: function (t) {
                    return null == t ? d.call(this) : t < 0 ? this[t + this.length] : this[t]
                },
                pushStack: function (t) {
                    var e = C.merge(this.constructor(), t);
                    return e.prevObject = this, e
                },
                each: function (t) {
                    return C.each(this, t)
                },
                map: function (t) {
                    return this.pushStack(C.map(this, function (e, o) {
                        return t.call(e, o, e)
                    }))
                },
                slice: function () {
                    return this.pushStack(d.apply(this, arguments))
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                eq: function (t) {
                    var e = this.length,
                        o = +t + (t < 0 ? e : 0);
                    return this.pushStack(o >= 0 && o < e ? [this[o]] : [])
                },
                end: function () {
                    return this.prevObject || this.constructor()
                },
                push: p,
                sort: a.sort,
                splice: a.splice
            }, C.extend = C.fn.extend = function () {
                var t, e, o, n, i, a, l = arguments[0] || {},
                    s = 1,
                    d = arguments.length,
                    c = !1;
                for ("boolean" == typeof l && (c = l, l = arguments[s] || {}, s++), "object" === (void 0 === l ? "undefined" : r(l)) || v(l) || (l = {}), s === d && (l = this, s--); s < d; s++)
                    if (null != (t = arguments[s]))
                        for (e in t) o = l[e], l !== (n = t[e]) && (c && n && (C.isPlainObject(n) || (i = Array.isArray(n))) ? (i ? (i = !1, a = o && Array.isArray(o) ? o : []) : a = o && C.isPlainObject(o) ? o : {}, l[e] = C.extend(c, a, n)) : void 0 !== n && (l[e] = n));
                return l
            }, C.extend({
                expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (t) {
                    throw new Error(t)
                },
                noop: function () { },
                isPlainObject: function (t) {
                    var e, o;
                    return !(!t || "[object Object]" !== u.call(t)) && (!(e = s(t)) || "function" == typeof (o = g.call(e, "constructor") && e.constructor) && b.call(o) === h)
                },
                isEmptyObject: function (t) {
                    var e;
                    for (e in t) return !1;
                    return !0
                },
                globalEval: function (t) {
                    k(t)
                },
                each: function (t, e) {
                    var o, r = 0;
                    if (E(t))
                        for (o = t.length; r < o && !1 !== e.call(t[r], r, t[r]); r++);
                    else
                        for (r in t)
                            if (!1 === e.call(t[r], r, t[r])) break;
                    return t
                },
                trim: function (t) {
                    return null == t ? "" : (t + "").replace(T, "")
                },
                makeArray: function (t, e) {
                    var o = e || [];
                    return null != t && (E(Object(t)) ? C.merge(o, "string" == typeof t ? [t] : t) : p.call(o, t)), o
                },
                inArray: function (t, e, o) {
                    return null == e ? -1 : m.call(e, t, o)
                },
                merge: function (t, e) {
                    for (var o = +e.length, r = 0, n = t.length; r < o; r++) t[n++] = e[r];
                    return t.length = n, t
                },
                grep: function (t, e, o) {
                    for (var r = [], n = 0, i = t.length, a = !o; n < i; n++) !e(t[n], n) !== a && r.push(t[n]);
                    return r
                },
                map: function (t, e, o) {
                    var r, n, i = 0,
                        a = [];
                    if (E(t))
                        for (r = t.length; i < r; i++) null != (n = e(t[i], i, o)) && a.push(n);
                    else
                        for (i in t) null != (n = e(t[i], i, o)) && a.push(n);
                    return c.apply([], a)
                },
                guid: 1,
                support: x
            }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = a[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
                f["[object " + e + "]"] = e.toLowerCase()
            });
            var S =
                /*!
                 * Sizzle CSS Selector Engine v2.3.3
                 * https://sizzlejs.com/
                 *
                 * Copyright jQuery Foundation and other contributors
                 * Released under the MIT license
                 * http://jquery.org/license
                 *
                 * Date: 2016-08-08
                 */
                function (t) {
                    var e, o, r, n, i, a, l, s, d, c, p, m, f, u, g, b, h, x, v, y = "sizzle" + 1 * new Date,
                        w = t.document,
                        k = 0,
                        j = 0,
                        C = at(),
                        T = at(),
                        E = at(),
                        S = function (t, e) {
                            return t === e && (p = !0), 0
                        },
                        z = {}.hasOwnProperty,
                        A = [],
                        N = A.pop,
                        D = A.push,
                        L = A.push,
                        q = A.slice,
                        M = function (t, e) {
                            for (var o = 0, r = t.length; o < r; o++)
                                if (t[o] === e) return o;
                            return -1
                        },
                        O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                        H = "[\\x20\\t\\r\\n\\f]",
                        R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                        I = "\\[" + H + "*(" + R + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + H + "*\\]",
                        P = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)",
                        B = new RegExp(H + "+", "g"),
                        F = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
                        U = new RegExp("^" + H + "*," + H + "*"),
                        $ = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
                        W = new RegExp("=" + H + "*([^\\]'\"]*?)" + H + "*\\]", "g"),
                        _ = new RegExp(P),
                        X = new RegExp("^" + R + "$"),
                        V = {
                            ID: new RegExp("^#(" + R + ")"),
                            CLASS: new RegExp("^\\.(" + R + ")"),
                            TAG: new RegExp("^(" + R + "|[*])"),
                            ATTR: new RegExp("^" + I),
                            PSEUDO: new RegExp("^" + P),
                            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
                            bool: new RegExp("^(?:" + O + ")$", "i"),
                            needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i")
                        },
                        G = /^(?:input|select|textarea|button)$/i,
                        J = /^h\d$/i,
                        Y = /^[^{]+\{\s*\[native \w/,
                        Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                        K = /[+~]/,
                        Z = new RegExp("\\\\([\\da-f]{1,6}" + H + "?|(" + H + ")|.)", "ig"),
                        tt = function (t, e, o) {
                            var r = "0x" + e - 65536;
                            return r != r || o ? e : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                        },
                        et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                        ot = function (t, e) {
                            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                        },
                        rt = function () {
                            m()
                        },
                        nt = xt(function (t) {
                            return !0 === t.disabled && ("form" in t || "label" in t)
                        }, {
                                dir: "parentNode",
                                next: "legend"
                            });
                    try {
                        L.apply(A = q.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType
                    } catch (t) {
                        L = {
                            apply: A.length ? function (t, e) {
                                D.apply(t, q.call(e))
                            } : function (t, e) {
                                for (var o = t.length, r = 0; t[o++] = e[r++];);
                                t.length = o - 1
                            }
                        }
                    }

                    function it(t, e, r, n) {
                        var i, l, d, c, p, u, h, x = e && e.ownerDocument,
                            k = e ? e.nodeType : 9;
                        if (r = r || [], "string" != typeof t || !t || 1 !== k && 9 !== k && 11 !== k) return r;
                        if (!n && ((e ? e.ownerDocument || e : w) !== f && m(e), e = e || f, g)) {
                            if (11 !== k && (p = Q.exec(t)))
                                if (i = p[1]) {
                                    if (9 === k) {
                                        if (!(d = e.getElementById(i))) return r;
                                        if (d.id === i) return r.push(d), r
                                    } else if (x && (d = x.getElementById(i)) && v(e, d) && d.id === i) return r.push(d), r
                                } else {
                                    if (p[2]) return L.apply(r, e.getElementsByTagName(t)), r;
                                    if ((i = p[3]) && o.getElementsByClassName && e.getElementsByClassName) return L.apply(r, e.getElementsByClassName(i)), r
                                }
                            if (o.qsa && !E[t + " "] && (!b || !b.test(t))) {
                                if (1 !== k) x = e, h = t;
                                else if ("object" !== e.nodeName.toLowerCase()) {
                                    for ((c = e.getAttribute("id")) ? c = c.replace(et, ot) : e.setAttribute("id", c = y), l = (u = a(t)).length; l--;) u[l] = "#" + c + " " + ht(u[l]);
                                    h = u.join(","), x = K.test(t) && gt(e.parentNode) || e
                                }
                                if (h) try {
                                    return L.apply(r, x.querySelectorAll(h)), r
                                } catch (t) { } finally {
                                        c === y && e.removeAttribute("id")
                                    }
                            }
                        }
                        return s(t.replace(F, "$1"), e, r, n)
                    }

                    function at() {
                        var t = [];
                        return function e(o, n) {
                            return t.push(o + " ") > r.cacheLength && delete e[t.shift()], e[o + " "] = n
                        }
                    }

                    function lt(t) {
                        return t[y] = !0, t
                    }

                    function st(t) {
                        var e = f.createElement("fieldset");
                        try {
                            return !!t(e)
                        } catch (t) {
                            return !1
                        } finally {
                            e.parentNode && e.parentNode.removeChild(e), e = null
                        }
                    }

                    function dt(t, e) {
                        for (var o = t.split("|"), n = o.length; n--;) r.attrHandle[o[n]] = e
                    }

                    function ct(t, e) {
                        var o = e && t,
                            r = o && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                        if (r) return r;
                        if (o)
                            for (; o = o.nextSibling;)
                                if (o === e) return -1;
                        return t ? 1 : -1
                    }

                    function pt(t) {
                        return function (e) {
                            return "input" === e.nodeName.toLowerCase() && e.type === t
                        }
                    }

                    function mt(t) {
                        return function (e) {
                            var o = e.nodeName.toLowerCase();
                            return ("input" === o || "button" === o) && e.type === t
                        }
                    }

                    function ft(t) {
                        return function (e) {
                            return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && nt(e) === t : e.disabled === t : "label" in e && e.disabled === t
                        }
                    }

                    function ut(t) {
                        return lt(function (e) {
                            return e = +e, lt(function (o, r) {
                                for (var n, i = t([], o.length, e), a = i.length; a--;) o[n = i[a]] && (o[n] = !(r[n] = o[n]))
                            })
                        })
                    }

                    function gt(t) {
                        return t && void 0 !== t.getElementsByTagName && t
                    }
                    for (e in o = it.support = {}, i = it.isXML = function (t) {
                        var e = t && (t.ownerDocument || t).documentElement;
                        return !!e && "HTML" !== e.nodeName
                    }, m = it.setDocument = function (t) {
                        var e, n, a = t ? t.ownerDocument || t : w;
                        return a !== f && 9 === a.nodeType && a.documentElement ? (u = (f = a).documentElement, g = !i(f), w !== f && (n = f.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", rt, !1) : n.attachEvent && n.attachEvent("onunload", rt)), o.attributes = st(function (t) {
                            return t.className = "i", !t.getAttribute("className")
                        }), o.getElementsByTagName = st(function (t) {
                            return t.appendChild(f.createComment("")), !t.getElementsByTagName("*").length
                        }), o.getElementsByClassName = Y.test(f.getElementsByClassName), o.getById = st(function (t) {
                            return u.appendChild(t).id = y, !f.getElementsByName || !f.getElementsByName(y).length
                        }), o.getById ? (r.filter.ID = function (t) {
                            var e = t.replace(Z, tt);
                            return function (t) {
                                return t.getAttribute("id") === e
                            }
                        }, r.find.ID = function (t, e) {
                            if (void 0 !== e.getElementById && g) {
                                var o = e.getElementById(t);
                                return o ? [o] : []
                            }
                        }) : (r.filter.ID = function (t) {
                            var e = t.replace(Z, tt);
                            return function (t) {
                                var o = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                                return o && o.value === e
                            }
                        }, r.find.ID = function (t, e) {
                            if (void 0 !== e.getElementById && g) {
                                var o, r, n, i = e.getElementById(t);
                                if (i) {
                                    if ((o = i.getAttributeNode("id")) && o.value === t) return [i];
                                    for (n = e.getElementsByName(t), r = 0; i = n[r++];)
                                        if ((o = i.getAttributeNode("id")) && o.value === t) return [i]
                                }
                                return []
                            }
                        }), r.find.TAG = o.getElementsByTagName ? function (t, e) {
                            return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : o.qsa ? e.querySelectorAll(t) : void 0
                        } : function (t, e) {
                            var o, r = [],
                                n = 0,
                                i = e.getElementsByTagName(t);
                            if ("*" === t) {
                                for (; o = i[n++];) 1 === o.nodeType && r.push(o);
                                return r
                            }
                            return i
                        }, r.find.CLASS = o.getElementsByClassName && function (t, e) {
                            if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t)
                        }, h = [], b = [], (o.qsa = Y.test(f.querySelectorAll)) && (st(function (t) {
                            u.appendChild(t).innerHTML = "<a id='" + y + "'></a><select id='" + y + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && b.push("[*^$]=" + H + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || b.push("\\[" + H + "*(?:value|" + O + ")"), t.querySelectorAll("[id~=" + y + "-]").length || b.push("~="), t.querySelectorAll(":checked").length || b.push(":checked"), t.querySelectorAll("a#" + y + "+*").length || b.push(".#.+[+~]")
                        }), st(function (t) {
                            t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var e = f.createElement("input");
                            e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && b.push("name" + H + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && b.push(":enabled", ":disabled"), u.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && b.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), b.push(",.*:")
                        })), (o.matchesSelector = Y.test(x = u.matches || u.webkitMatchesSelector || u.mozMatchesSelector || u.oMatchesSelector || u.msMatchesSelector)) && st(function (t) {
                            o.disconnectedMatch = x.call(t, "*"), x.call(t, "[s!='']:x"), h.push("!=", P)
                        }), b = b.length && new RegExp(b.join("|")), h = h.length && new RegExp(h.join("|")), e = Y.test(u.compareDocumentPosition), v = e || Y.test(u.contains) ? function (t, e) {
                            var o = 9 === t.nodeType ? t.documentElement : t,
                                r = e && e.parentNode;
                            return t === r || !(!r || 1 !== r.nodeType || !(o.contains ? o.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
                        } : function (t, e) {
                            if (e)
                                for (; e = e.parentNode;)
                                    if (e === t) return !0;
                            return !1
                        }, S = e ? function (t, e) {
                            if (t === e) return p = !0, 0;
                            var r = !t.compareDocumentPosition - !e.compareDocumentPosition;
                            return r || (1 & (r = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !o.sortDetached && e.compareDocumentPosition(t) === r ? t === f || t.ownerDocument === w && v(w, t) ? -1 : e === f || e.ownerDocument === w && v(w, e) ? 1 : c ? M(c, t) - M(c, e) : 0 : 4 & r ? -1 : 1)
                        } : function (t, e) {
                            if (t === e) return p = !0, 0;
                            var o, r = 0,
                                n = t.parentNode,
                                i = e.parentNode,
                                a = [t],
                                l = [e];
                            if (!n || !i) return t === f ? -1 : e === f ? 1 : n ? -1 : i ? 1 : c ? M(c, t) - M(c, e) : 0;
                            if (n === i) return ct(t, e);
                            for (o = t; o = o.parentNode;) a.unshift(o);
                            for (o = e; o = o.parentNode;) l.unshift(o);
                            for (; a[r] === l[r];) r++;
                            return r ? ct(a[r], l[r]) : a[r] === w ? -1 : l[r] === w ? 1 : 0
                        }, f) : f
                    }, it.matches = function (t, e) {
                        return it(t, null, null, e)
                    }, it.matchesSelector = function (t, e) {
                        if ((t.ownerDocument || t) !== f && m(t), e = e.replace(W, "='$1']"), o.matchesSelector && g && !E[e + " "] && (!h || !h.test(e)) && (!b || !b.test(e))) try {
                            var r = x.call(t, e);
                            if (r || o.disconnectedMatch || t.document && 11 !== t.document.nodeType) return r
                        } catch (t) { }
                        return it(e, f, null, [t]).length > 0
                    }, it.contains = function (t, e) {
                        return (t.ownerDocument || t) !== f && m(t), v(t, e)
                    }, it.attr = function (t, e) {
                        (t.ownerDocument || t) !== f && m(t);
                        var n = r.attrHandle[e.toLowerCase()],
                            i = n && z.call(r.attrHandle, e.toLowerCase()) ? n(t, e, !g) : void 0;
                        return void 0 !== i ? i : o.attributes || !g ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
                    }, it.escape = function (t) {
                        return (t + "").replace(et, ot)
                    }, it.error = function (t) {
                        throw new Error("Syntax error, unrecognized expression: " + t)
                    }, it.uniqueSort = function (t) {
                        var e, r = [],
                            n = 0,
                            i = 0;
                        if (p = !o.detectDuplicates, c = !o.sortStable && t.slice(0), t.sort(S), p) {
                            for (; e = t[i++];) e === t[i] && (n = r.push(i));
                            for (; n--;) t.splice(r[n], 1)
                        }
                        return c = null, t
                    }, n = it.getText = function (t) {
                        var e, o = "",
                            r = 0,
                            i = t.nodeType;
                        if (i) {
                            if (1 === i || 9 === i || 11 === i) {
                                if ("string" == typeof t.textContent) return t.textContent;
                                for (t = t.firstChild; t; t = t.nextSibling) o += n(t)
                            } else if (3 === i || 4 === i) return t.nodeValue
                        } else
                            for (; e = t[r++];) o += n(e);
                        return o
                    }, (r = it.selectors = {
                        cacheLength: 50,
                        createPseudo: lt,
                        match: V,
                        attrHandle: {},
                        find: {},
                        relative: {
                            ">": {
                                dir: "parentNode",
                                first: !0
                            },
                            " ": {
                                dir: "parentNode"
                            },
                            "+": {
                                dir: "previousSibling",
                                first: !0
                            },
                            "~": {
                                dir: "previousSibling"
                            }
                        },
                        preFilter: {
                            ATTR: function (t) {
                                return t[1] = t[1].replace(Z, tt), t[3] = (t[3] || t[4] || t[5] || "").replace(Z, tt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                            },
                            CHILD: function (t) {
                                return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || it.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && it.error(t[0]), t
                            },
                            PSEUDO: function (t) {
                                var e, o = !t[6] && t[2];
                                return V.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : o && _.test(o) && (e = a(o, !0)) && (e = o.indexOf(")", o.length - e) - o.length) && (t[0] = t[0].slice(0, e), t[2] = o.slice(0, e)), t.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function (t) {
                                var e = t.replace(Z, tt).toLowerCase();
                                return "*" === t ? function () {
                                    return !0
                                } : function (t) {
                                    return t.nodeName && t.nodeName.toLowerCase() === e
                                }
                            },
                            CLASS: function (t) {
                                var e = C[t + " "];
                                return e || (e = new RegExp("(^|" + H + ")" + t + "(" + H + "|$)")) && C(t, function (t) {
                                    return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                                })
                            },
                            ATTR: function (t, e, o) {
                                return function (r) {
                                    var n = it.attr(r, t);
                                    return null == n ? "!=" === e : !e || (n += "", "=" === e ? n === o : "!=" === e ? n !== o : "^=" === e ? o && 0 === n.indexOf(o) : "*=" === e ? o && n.indexOf(o) > -1 : "$=" === e ? o && n.slice(-o.length) === o : "~=" === e ? (" " + n.replace(B, " ") + " ").indexOf(o) > -1 : "|=" === e && (n === o || n.slice(0, o.length + 1) === o + "-"))
                                }
                            },
                            CHILD: function (t, e, o, r, n) {
                                var i = "nth" !== t.slice(0, 3),
                                    a = "last" !== t.slice(-4),
                                    l = "of-type" === e;
                                return 1 === r && 0 === n ? function (t) {
                                    return !!t.parentNode
                                } : function (e, o, s) {
                                    var d, c, p, m, f, u, g = i !== a ? "nextSibling" : "previousSibling",
                                        b = e.parentNode,
                                        h = l && e.nodeName.toLowerCase(),
                                        x = !s && !l,
                                        v = !1;
                                    if (b) {
                                        if (i) {
                                            for (; g;) {
                                                for (m = e; m = m[g];)
                                                    if (l ? m.nodeName.toLowerCase() === h : 1 === m.nodeType) return !1;
                                                u = g = "only" === t && !u && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (u = [a ? b.firstChild : b.lastChild], a && x) {
                                            for (v = (f = (d = (c = (p = (m = b)[y] || (m[y] = {}))[m.uniqueID] || (p[m.uniqueID] = {}))[t] || [])[0] === k && d[1]) && d[2], m = f && b.childNodes[f]; m = ++f && m && m[g] || (v = f = 0) || u.pop();)
                                                if (1 === m.nodeType && ++v && m === e) {
                                                    c[t] = [k, f, v];
                                                    break
                                                }
                                        } else if (x && (v = f = (d = (c = (p = (m = e)[y] || (m[y] = {}))[m.uniqueID] || (p[m.uniqueID] = {}))[t] || [])[0] === k && d[1]), !1 === v)
                                            for (;
                                                (m = ++f && m && m[g] || (v = f = 0) || u.pop()) && ((l ? m.nodeName.toLowerCase() !== h : 1 !== m.nodeType) || !++v || (x && ((c = (p = m[y] || (m[y] = {}))[m.uniqueID] || (p[m.uniqueID] = {}))[t] = [k, v]), m !== e)););
                                        return (v -= n) === r || v % r == 0 && v / r >= 0
                                    }
                                }
                            },
                            PSEUDO: function (t, e) {
                                var o, n = r.pseudos[t] || r.setFilters[t.toLowerCase()] || it.error("unsupported pseudo: " + t);
                                return n[y] ? n(e) : n.length > 1 ? (o = [t, t, "", e], r.setFilters.hasOwnProperty(t.toLowerCase()) ? lt(function (t, o) {
                                    for (var r, i = n(t, e), a = i.length; a--;) t[r = M(t, i[a])] = !(o[r] = i[a])
                                }) : function (t) {
                                    return n(t, 0, o)
                                }) : n
                            }
                        },
                        pseudos: {
                            not: lt(function (t) {
                                var e = [],
                                    o = [],
                                    r = l(t.replace(F, "$1"));
                                return r[y] ? lt(function (t, e, o, n) {
                                    for (var i, a = r(t, null, n, []), l = t.length; l--;)(i = a[l]) && (t[l] = !(e[l] = i))
                                }) : function (t, n, i) {
                                    return e[0] = t, r(e, null, i, o), e[0] = null, !o.pop()
                                }
                            }),
                            has: lt(function (t) {
                                return function (e) {
                                    return it(t, e).length > 0
                                }
                            }),
                            contains: lt(function (t) {
                                return t = t.replace(Z, tt),
                                    function (e) {
                                        return (e.textContent || e.innerText || n(e)).indexOf(t) > -1
                                    }
                            }),
                            lang: lt(function (t) {
                                return X.test(t || "") || it.error("unsupported lang: " + t), t = t.replace(Z, tt).toLowerCase(),
                                    function (e) {
                                        var o;
                                        do {
                                            if (o = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (o = o.toLowerCase()) === t || 0 === o.indexOf(t + "-")
                                        } while ((e = e.parentNode) && 1 === e.nodeType);
                                        return !1
                                    }
                            }),
                            target: function (e) {
                                var o = t.location && t.location.hash;
                                return o && o.slice(1) === e.id
                            },
                            root: function (t) {
                                return t === u
                            },
                            focus: function (t) {
                                return t === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                            },
                            enabled: ft(!1),
                            disabled: ft(!0),
                            checked: function (t) {
                                var e = t.nodeName.toLowerCase();
                                return "input" === e && !!t.checked || "option" === e && !!t.selected
                            },
                            selected: function (t) {
                                return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                            },
                            empty: function (t) {
                                for (t = t.firstChild; t; t = t.nextSibling)
                                    if (t.nodeType < 6) return !1;
                                return !0
                            },
                            parent: function (t) {
                                return !r.pseudos.empty(t)
                            },
                            header: function (t) {
                                return J.test(t.nodeName)
                            },
                            input: function (t) {
                                return G.test(t.nodeName)
                            },
                            button: function (t) {
                                var e = t.nodeName.toLowerCase();
                                return "input" === e && "button" === t.type || "button" === e
                            },
                            text: function (t) {
                                var e;
                                return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                            },
                            first: ut(function () {
                                return [0]
                            }),
                            last: ut(function (t, e) {
                                return [e - 1]
                            }),
                            eq: ut(function (t, e, o) {
                                return [o < 0 ? o + e : o]
                            }),
                            even: ut(function (t, e) {
                                for (var o = 0; o < e; o += 2) t.push(o);
                                return t
                            }),
                            odd: ut(function (t, e) {
                                for (var o = 1; o < e; o += 2) t.push(o);
                                return t
                            }),
                            lt: ut(function (t, e, o) {
                                for (var r = o < 0 ? o + e : o; --r >= 0;) t.push(r);
                                return t
                            }),
                            gt: ut(function (t, e, o) {
                                for (var r = o < 0 ? o + e : o; ++r < e;) t.push(r);
                                return t
                            })
                        }
                    }).pseudos.nth = r.pseudos.eq, {
                            radio: !0,
                            checkbox: !0,
                            file: !0,
                            password: !0,
                            image: !0
                        }) r.pseudos[e] = pt(e);
                    for (e in {
                        submit: !0,
                        reset: !0
                    }) r.pseudos[e] = mt(e);

                    function bt() { }

                    function ht(t) {
                        for (var e = 0, o = t.length, r = ""; e < o; e++) r += t[e].value;
                        return r
                    }

                    function xt(t, e, o) {
                        var r = e.dir,
                            n = e.next,
                            i = n || r,
                            a = o && "parentNode" === i,
                            l = j++;
                        return e.first ? function (e, o, n) {
                            for (; e = e[r];)
                                if (1 === e.nodeType || a) return t(e, o, n);
                            return !1
                        } : function (e, o, s) {
                            var d, c, p, m = [k, l];
                            if (s) {
                                for (; e = e[r];)
                                    if ((1 === e.nodeType || a) && t(e, o, s)) return !0
                            } else
                                for (; e = e[r];)
                                    if (1 === e.nodeType || a)
                                        if (c = (p = e[y] || (e[y] = {}))[e.uniqueID] || (p[e.uniqueID] = {}), n && n === e.nodeName.toLowerCase()) e = e[r] || e;
                                        else {
                                            if ((d = c[i]) && d[0] === k && d[1] === l) return m[2] = d[2];
                                            if (c[i] = m, m[2] = t(e, o, s)) return !0
                                        } return !1
                        }
                    }

                    function vt(t) {
                        return t.length > 1 ? function (e, o, r) {
                            for (var n = t.length; n--;)
                                if (!t[n](e, o, r)) return !1;
                            return !0
                        } : t[0]
                    }

                    function yt(t, e, o, r, n) {
                        for (var i, a = [], l = 0, s = t.length, d = null != e; l < s; l++)(i = t[l]) && (o && !o(i, r, n) || (a.push(i), d && e.push(l)));
                        return a
                    }

                    function wt(t, e, o, r, n, i) {
                        return r && !r[y] && (r = wt(r)), n && !n[y] && (n = wt(n, i)), lt(function (i, a, l, s) {
                            var d, c, p, m = [],
                                f = [],
                                u = a.length,
                                g = i || function (t, e, o) {
                                    for (var r = 0, n = e.length; r < n; r++) it(t, e[r], o);
                                    return o
                                }(e || "*", l.nodeType ? [l] : l, []),
                                b = !t || !i && e ? g : yt(g, m, t, l, s),
                                h = o ? n || (i ? t : u || r) ? [] : a : b;
                            if (o && o(b, h, l, s), r)
                                for (d = yt(h, f), r(d, [], l, s), c = d.length; c--;)(p = d[c]) && (h[f[c]] = !(b[f[c]] = p));
                            if (i) {
                                if (n || t) {
                                    if (n) {
                                        for (d = [], c = h.length; c--;)(p = h[c]) && d.push(b[c] = p);
                                        n(null, h = [], d, s)
                                    }
                                    for (c = h.length; c--;)(p = h[c]) && (d = n ? M(i, p) : m[c]) > -1 && (i[d] = !(a[d] = p))
                                }
                            } else h = yt(h === a ? h.splice(u, h.length) : h), n ? n(null, a, h, s) : L.apply(a, h)
                        })
                    }

                    function kt(t) {
                        for (var e, o, n, i = t.length, a = r.relative[t[0].type], l = a || r.relative[" "], s = a ? 1 : 0, c = xt(function (t) {
                            return t === e
                        }, l, !0), p = xt(function (t) {
                            return M(e, t) > -1
                        }, l, !0), m = [function (t, o, r) {
                            var n = !a && (r || o !== d) || ((e = o).nodeType ? c(t, o, r) : p(t, o, r));
                            return e = null, n
                        }]; s < i; s++)
                            if (o = r.relative[t[s].type]) m = [xt(vt(m), o)];
                            else {
                                if ((o = r.filter[t[s].type].apply(null, t[s].matches))[y]) {
                                    for (n = ++s; n < i && !r.relative[t[n].type]; n++);
                                    return wt(s > 1 && vt(m), s > 1 && ht(t.slice(0, s - 1).concat({
                                        value: " " === t[s - 2].type ? "*" : ""
                                    })).replace(F, "$1"), o, s < n && kt(t.slice(s, n)), n < i && kt(t = t.slice(n)), n < i && ht(t))
                                }
                                m.push(o)
                            }
                        return vt(m)
                    }
                    return bt.prototype = r.filters = r.pseudos, r.setFilters = new bt, a = it.tokenize = function (t, e) {
                        var o, n, i, a, l, s, d, c = T[t + " "];
                        if (c) return e ? 0 : c.slice(0);
                        for (l = t, s = [], d = r.preFilter; l;) {
                            for (a in o && !(n = U.exec(l)) || (n && (l = l.slice(n[0].length) || l), s.push(i = [])), o = !1, (n = $.exec(l)) && (o = n.shift(), i.push({
                                value: o,
                                type: n[0].replace(F, " ")
                            }), l = l.slice(o.length)), r.filter) !(n = V[a].exec(l)) || d[a] && !(n = d[a](n)) || (o = n.shift(), i.push({
                                value: o,
                                type: a,
                                matches: n
                            }), l = l.slice(o.length));
                            if (!o) break
                        }
                        return e ? l.length : l ? it.error(t) : T(t, s).slice(0)
                    }, l = it.compile = function (t, e) {
                        var o, n = [],
                            i = [],
                            l = E[t + " "];
                        if (!l) {
                            for (e || (e = a(t)), o = e.length; o--;)(l = kt(e[o]))[y] ? n.push(l) : i.push(l);
                            (l = E(t, function (t, e) {
                                var o = e.length > 0,
                                    n = t.length > 0,
                                    i = function (i, a, l, s, c) {
                                        var p, u, b, h = 0,
                                            x = "0",
                                            v = i && [],
                                            y = [],
                                            w = d,
                                            j = i || n && r.find.TAG("*", c),
                                            C = k += null == w ? 1 : Math.random() || .1,
                                            T = j.length;
                                        for (c && (d = a === f || a || c); x !== T && null != (p = j[x]); x++) {
                                            if (n && p) {
                                                for (u = 0, a || p.ownerDocument === f || (m(p), l = !g); b = t[u++];)
                                                    if (b(p, a || f, l)) {
                                                        s.push(p);
                                                        break
                                                    }
                                                c && (k = C)
                                            }
                                            o && ((p = !b && p) && h-- , i && v.push(p))
                                        }
                                        if (h += x, o && x !== h) {
                                            for (u = 0; b = e[u++];) b(v, y, a, l);
                                            if (i) {
                                                if (h > 0)
                                                    for (; x--;) v[x] || y[x] || (y[x] = N.call(s));
                                                y = yt(y)
                                            }
                                            L.apply(s, y), c && !i && y.length > 0 && h + e.length > 1 && it.uniqueSort(s)
                                        }
                                        return c && (k = C, d = w), v
                                    };
                                return o ? lt(i) : i
                            }(i, n))).selector = t
                        }
                        return l
                    }, s = it.select = function (t, e, o, n) {
                        var i, s, d, c, p, m = "function" == typeof t && t,
                            f = !n && a(t = m.selector || t);
                        if (o = o || [], 1 === f.length) {
                            if ((s = f[0] = f[0].slice(0)).length > 2 && "ID" === (d = s[0]).type && 9 === e.nodeType && g && r.relative[s[1].type]) {
                                if (!(e = (r.find.ID(d.matches[0].replace(Z, tt), e) || [])[0])) return o;
                                m && (e = e.parentNode), t = t.slice(s.shift().value.length)
                            }
                            for (i = V.needsContext.test(t) ? 0 : s.length; i-- && (d = s[i], !r.relative[c = d.type]);)
                                if ((p = r.find[c]) && (n = p(d.matches[0].replace(Z, tt), K.test(s[0].type) && gt(e.parentNode) || e))) {
                                    if (s.splice(i, 1), !(t = n.length && ht(s))) return L.apply(o, n), o;
                                    break
                                }
                        }
                        return (m || l(t, f))(n, e, !g, o, !e || K.test(t) && gt(e.parentNode) || e), o
                    }, o.sortStable = y.split("").sort(S).join("") === y, o.detectDuplicates = !!p, m(), o.sortDetached = st(function (t) {
                        return 1 & t.compareDocumentPosition(f.createElement("fieldset"))
                    }), st(function (t) {
                        return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                    }) || dt("type|href|height|width", function (t, e, o) {
                        if (!o) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                    }), o.attributes && st(function (t) {
                        return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                    }) || dt("value", function (t, e, o) {
                        if (!o && "input" === t.nodeName.toLowerCase()) return t.defaultValue
                    }), st(function (t) {
                        return null == t.getAttribute("disabled")
                    }) || dt(O, function (t, e, o) {
                        var r;
                        if (!o) return !0 === t[e] ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
                    }), it
                }(n);
            C.find = S, C.expr = S.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = S.uniqueSort, C.text = S.getText, C.isXMLDoc = S.isXML, C.contains = S.contains, C.escapeSelector = S.escape;
            var z = function (t, e, o) {
                for (var r = [], n = void 0 !== o;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (n && C(t).is(o)) break;
                        r.push(t)
                    }
                return r
            },
                A = function (t, e) {
                    for (var o = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && o.push(t);
                    return o
                },
                N = C.expr.match.needsContext;

            function D(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            }
            var L = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

            function q(t, e, o) {
                return v(e) ? C.grep(t, function (t, r) {
                    return !!e.call(t, r, t) !== o
                }) : e.nodeType ? C.grep(t, function (t) {
                    return t === e !== o
                }) : "string" != typeof e ? C.grep(t, function (t) {
                    return m.call(e, t) > -1 !== o
                }) : C.filter(e, t, o)
            }
            C.filter = function (t, e, o) {
                var r = e[0];
                return o && (t = ":not(" + t + ")"), 1 === e.length && 1 === r.nodeType ? C.find.matchesSelector(r, t) ? [r] : [] : C.find.matches(t, C.grep(e, function (t) {
                    return 1 === t.nodeType
                }))
            }, C.fn.extend({
                find: function (t) {
                    var e, o, r = this.length,
                        n = this;
                    if ("string" != typeof t) return this.pushStack(C(t).filter(function () {
                        for (e = 0; e < r; e++)
                            if (C.contains(n[e], this)) return !0
                    }));
                    for (o = this.pushStack([]), e = 0; e < r; e++) C.find(t, n[e], o);
                    return r > 1 ? C.uniqueSort(o) : o
                },
                filter: function (t) {
                    return this.pushStack(q(this, t || [], !1))
                },
                not: function (t) {
                    return this.pushStack(q(this, t || [], !0))
                },
                is: function (t) {
                    return !!q(this, "string" == typeof t && N.test(t) ? C(t) : t || [], !1).length
                }
            });
            var M, O = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (C.fn.init = function (t, e, o) {
                var r, n;
                if (!t) return this;
                if (o = o || M, "string" == typeof t) {
                    if (!(r = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : O.exec(t)) || !r[1] && e) return !e || e.jquery ? (e || o).find(t) : this.constructor(e).find(t);
                    if (r[1]) {
                        if (e = e instanceof C ? e[0] : e, C.merge(this, C.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : l, !0)), L.test(r[1]) && C.isPlainObject(e))
                            for (r in e) v(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
                        return this
                    }
                    return (n = l.getElementById(r[2])) && (this[0] = n, this.length = 1), this
                }
                return t.nodeType ? (this[0] = t, this.length = 1, this) : v(t) ? void 0 !== o.ready ? o.ready(t) : t(C) : C.makeArray(t, this)
            }).prototype = C.fn, M = C(l);
            var H = /^(?:parents|prev(?:Until|All))/,
                R = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };

            function I(t, e) {
                for (;
                    (t = t[e]) && 1 !== t.nodeType;);
                return t
            }
            C.fn.extend({
                has: function (t) {
                    var e = C(t, this),
                        o = e.length;
                    return this.filter(function () {
                        for (var t = 0; t < o; t++)
                            if (C.contains(this, e[t])) return !0
                    })
                },
                closest: function (t, e) {
                    var o, r = 0,
                        n = this.length,
                        i = [],
                        a = "string" != typeof t && C(t);
                    if (!N.test(t))
                        for (; r < n; r++)
                            for (o = this[r]; o && o !== e; o = o.parentNode)
                                if (o.nodeType < 11 && (a ? a.index(o) > -1 : 1 === o.nodeType && C.find.matchesSelector(o, t))) {
                                    i.push(o);
                                    break
                                }
                    return this.pushStack(i.length > 1 ? C.uniqueSort(i) : i)
                },
                index: function (t) {
                    return t ? "string" == typeof t ? m.call(C(t), this[0]) : m.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                },
                add: function (t, e) {
                    return this.pushStack(C.uniqueSort(C.merge(this.get(), C(t, e))))
                },
                addBack: function (t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                }
            }), C.each({
                parent: function (t) {
                    var e = t.parentNode;
                    return e && 11 !== e.nodeType ? e : null
                },
                parents: function (t) {
                    return z(t, "parentNode")
                },
                parentsUntil: function (t, e, o) {
                    return z(t, "parentNode", o)
                },
                next: function (t) {
                    return I(t, "nextSibling")
                },
                prev: function (t) {
                    return I(t, "previousSibling")
                },
                nextAll: function (t) {
                    return z(t, "nextSibling")
                },
                prevAll: function (t) {
                    return z(t, "previousSibling")
                },
                nextUntil: function (t, e, o) {
                    return z(t, "nextSibling", o)
                },
                prevUntil: function (t, e, o) {
                    return z(t, "previousSibling", o)
                },
                siblings: function (t) {
                    return A((t.parentNode || {}).firstChild, t)
                },
                children: function (t) {
                    return A(t.firstChild)
                },
                contents: function (t) {
                    return D(t, "iframe") ? t.contentDocument : (D(t, "template") && (t = t.content || t), C.merge([], t.childNodes))
                }
            }, function (t, e) {
                C.fn[t] = function (o, r) {
                    var n = C.map(this, e, o);
                    return "Until" !== t.slice(-5) && (r = o), r && "string" == typeof r && (n = C.filter(r, n)), this.length > 1 && (R[t] || C.uniqueSort(n), H.test(t) && n.reverse()), this.pushStack(n)
                }
            });
            var P = /[^\x20\t\r\n\f]+/g;

            function B(t) {
                return t
            }

            function F(t) {
                throw t
            }

            function U(t, e, o, r) {
                var n;
                try {
                    t && v(n = t.promise) ? n.call(t).done(e).fail(o) : t && v(n = t.then) ? n.call(t, e, o) : e.apply(void 0, [t].slice(r))
                } catch (t) {
                    o.apply(void 0, [t])
                }
            }
            C.Callbacks = function (t) {
                t = "string" == typeof t ? function (t) {
                    var e = {};
                    return C.each(t.match(P) || [], function (t, o) {
                        e[o] = !0
                    }), e
                }(t) : C.extend({}, t);
                var e, o, r, n, i = [],
                    a = [],
                    l = -1,
                    s = function () {
                        for (n = n || t.once, r = e = !0; a.length; l = -1)
                            for (o = a.shift(); ++l < i.length;) !1 === i[l].apply(o[0], o[1]) && t.stopOnFalse && (l = i.length, o = !1);
                        t.memory || (o = !1), e = !1, n && (i = o ? [] : "")
                    },
                    d = {
                        add: function () {
                            return i && (o && !e && (l = i.length - 1, a.push(o)), function e(o) {
                                C.each(o, function (o, r) {
                                    v(r) ? t.unique && d.has(r) || i.push(r) : r && r.length && "string" !== j(r) && e(r)
                                })
                            }(arguments), o && !e && s()), this
                        },
                        remove: function () {
                            return C.each(arguments, function (t, e) {
                                for (var o;
                                    (o = C.inArray(e, i, o)) > -1;) i.splice(o, 1), o <= l && l--
                            }), this
                        },
                        has: function (t) {
                            return t ? C.inArray(t, i) > -1 : i.length > 0
                        },
                        empty: function () {
                            return i && (i = []), this
                        },
                        disable: function () {
                            return n = a = [], i = o = "", this
                        },
                        disabled: function () {
                            return !i
                        },
                        lock: function () {
                            return n = a = [], o || e || (i = o = ""), this
                        },
                        locked: function () {
                            return !!n
                        },
                        fireWith: function (t, o) {
                            return n || (o = [t, (o = o || []).slice ? o.slice() : o], a.push(o), e || s()), this
                        },
                        fire: function () {
                            return d.fireWith(this, arguments), this
                        },
                        fired: function () {
                            return !!r
                        }
                    };
                return d
            }, C.extend({
                Deferred: function (t) {
                    var e = [
                        ["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
                        ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
                    ],
                        o = "pending",
                        i = {
                            state: function () {
                                return o
                            },
                            always: function () {
                                return a.done(arguments).fail(arguments), this
                            },
                            catch: function (t) {
                                return i.then(null, t)
                            },
                            pipe: function () {
                                var t = arguments;
                                return C.Deferred(function (o) {
                                    C.each(e, function (e, r) {
                                        var n = v(t[r[4]]) && t[r[4]];
                                        a[r[1]](function () {
                                            var t = n && n.apply(this, arguments);
                                            t && v(t.promise) ? t.promise().progress(o.notify).done(o.resolve).fail(o.reject) : o[r[0] + "With"](this, n ? [t] : arguments)
                                        })
                                    }), t = null
                                }).promise()
                            },
                            then: function (t, o, i) {
                                var a = 0;

                                function l(t, e, o, i) {
                                    return function () {
                                        var s = this,
                                            d = arguments,
                                            c = function () {
                                                var n, c;
                                                if (!(t < a)) {
                                                    if ((n = o.apply(s, d)) === e.promise()) throw new TypeError("Thenable self-resolution");
                                                    c = n && ("object" === (void 0 === n ? "undefined" : r(n)) || "function" == typeof n) && n.then, v(c) ? i ? c.call(n, l(a, e, B, i), l(a, e, F, i)) : (a++ , c.call(n, l(a, e, B, i), l(a, e, F, i), l(a, e, B, e.notifyWith))) : (o !== B && (s = void 0, d = [n]), (i || e.resolveWith)(s, d))
                                                }
                                            },
                                            p = i ? c : function () {
                                                try {
                                                    c()
                                                } catch (r) {
                                                    C.Deferred.exceptionHook && C.Deferred.exceptionHook(r, p.stackTrace), t + 1 >= a && (o !== F && (s = void 0, d = [r]), e.rejectWith(s, d))
                                                }
                                            };
                                        t ? p() : (C.Deferred.getStackHook && (p.stackTrace = C.Deferred.getStackHook()), n.setTimeout(p))
                                    }
                                }
                                return C.Deferred(function (r) {
                                    e[0][3].add(l(0, r, v(i) ? i : B, r.notifyWith)), e[1][3].add(l(0, r, v(t) ? t : B)), e[2][3].add(l(0, r, v(o) ? o : F))
                                }).promise()
                            },
                            promise: function (t) {
                                return null != t ? C.extend(t, i) : i
                            }
                        },
                        a = {};
                    return C.each(e, function (t, r) {
                        var n = r[2],
                            l = r[5];
                        i[r[1]] = n.add, l && n.add(function () {
                            o = l
                        }, e[3 - t][2].disable, e[3 - t][3].disable, e[0][2].lock, e[0][3].lock), n.add(r[3].fire), a[r[0]] = function () {
                            return a[r[0] + "With"](this === a ? void 0 : this, arguments), this
                        }, a[r[0] + "With"] = n.fireWith
                    }), i.promise(a), t && t.call(a, a), a
                },
                when: function (t) {
                    var e = arguments.length,
                        o = e,
                        r = Array(o),
                        n = d.call(arguments),
                        i = C.Deferred(),
                        a = function (t) {
                            return function (o) {
                                r[t] = this, n[t] = arguments.length > 1 ? d.call(arguments) : o, --e || i.resolveWith(r, n)
                            }
                        };
                    if (e <= 1 && (U(t, i.done(a(o)).resolve, i.reject, !e), "pending" === i.state() || v(n[o] && n[o].then))) return i.then();
                    for (; o--;) U(n[o], a(o), i.reject);
                    return i.promise()
                }
            });
            var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            C.Deferred.exceptionHook = function (t, e) {
                n.console && n.console.warn && t && $.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
            }, C.readyException = function (t) {
                n.setTimeout(function () {
                    throw t
                })
            };
            var W = C.Deferred();

            function _() {
                l.removeEventListener("DOMContentLoaded", _), n.removeEventListener("load", _), C.ready()
            }
            C.fn.ready = function (t) {
                return W.then(t).catch(function (t) {
                    C.readyException(t)
                }), this
            }, C.extend({
                isReady: !1,
                readyWait: 1,
                ready: function (t) {
                    (!0 === t ? --C.readyWait : C.isReady) || (C.isReady = !0, !0 !== t && --C.readyWait > 0 || W.resolveWith(l, [C]))
                }
            }), C.ready.then = W.then, "complete" === l.readyState || "loading" !== l.readyState && !l.documentElement.doScroll ? n.setTimeout(C.ready) : (l.addEventListener("DOMContentLoaded", _), n.addEventListener("load", _));
            var X = function t(e, o, r, n, i, a, l) {
                var s = 0,
                    d = e.length,
                    c = null == r;
                if ("object" === j(r))
                    for (s in i = !0, r) t(e, o, s, r[s], !0, a, l);
                else if (void 0 !== n && (i = !0, v(n) || (l = !0), c && (l ? (o.call(e, n), o = null) : (c = o, o = function (t, e, o) {
                    return c.call(C(t), o)
                })), o))
                    for (; s < d; s++) o(e[s], r, l ? n : n.call(e[s], s, o(e[s], r)));
                return i ? e : c ? o.call(e) : d ? o(e[0], r) : a
            },
                V = /^-ms-/,
                G = /-([a-z])/g;

            function J(t, e) {
                return e.toUpperCase()
            }

            function Y(t) {
                return t.replace(V, "ms-").replace(G, J)
            }
            var Q = function (t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            };

            function K() {
                this.expando = C.expando + K.uid++
            }
            K.uid = 1, K.prototype = {
                cache: function (t) {
                    var e = t[this.expando];
                    return e || (e = {}, Q(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                        value: e,
                        configurable: !0
                    }))), e
                },
                set: function (t, e, o) {
                    var r, n = this.cache(t);
                    if ("string" == typeof e) n[Y(e)] = o;
                    else
                        for (r in e) n[Y(r)] = e[r];
                    return n
                },
                get: function (t, e) {
                    return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][Y(e)]
                },
                access: function (t, e, o) {
                    return void 0 === e || e && "string" == typeof e && void 0 === o ? this.get(t, e) : (this.set(t, e, o), void 0 !== o ? o : e)
                },
                remove: function (t, e) {
                    var o, r = t[this.expando];
                    if (void 0 !== r) {
                        if (void 0 !== e) {
                            o = (e = Array.isArray(e) ? e.map(Y) : (e = Y(e)) in r ? [e] : e.match(P) || []).length;
                            for (; o--;) delete r[e[o]]
                        } (void 0 === e || C.isEmptyObject(r)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                    }
                },
                hasData: function (t) {
                    var e = t[this.expando];
                    return void 0 !== e && !C.isEmptyObject(e)
                }
            };
            var Z = new K,
                tt = new K,
                et = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                ot = /[A-Z]/g;

            function rt(t, e, o) {
                var r;
                if (void 0 === o && 1 === t.nodeType)
                    if (r = "data-" + e.replace(ot, "-$&").toLowerCase(), "string" == typeof (o = t.getAttribute(r))) {
                        try {
                            o = function (t) {
                                return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : et.test(t) ? JSON.parse(t) : t)
                            }(o)
                        } catch (t) { }
                        tt.set(t, e, o)
                    } else o = void 0;
                return o
            }
            C.extend({
                hasData: function (t) {
                    return tt.hasData(t) || Z.hasData(t)
                },
                data: function (t, e, o) {
                    return tt.access(t, e, o)
                },
                removeData: function (t, e) {
                    tt.remove(t, e)
                },
                _data: function (t, e, o) {
                    return Z.access(t, e, o)
                },
                _removeData: function (t, e) {
                    Z.remove(t, e)
                }
            }), C.fn.extend({
                data: function (t, e) {
                    var o, n, i, a = this[0],
                        l = a && a.attributes;
                    if (void 0 === t) {
                        if (this.length && (i = tt.get(a), 1 === a.nodeType && !Z.get(a, "hasDataAttrs"))) {
                            for (o = l.length; o--;) l[o] && 0 === (n = l[o].name).indexOf("data-") && (n = Y(n.slice(5)), rt(a, n, i[n]));
                            Z.set(a, "hasDataAttrs", !0)
                        }
                        return i
                    }
                    return "object" === (void 0 === t ? "undefined" : r(t)) ? this.each(function () {
                        tt.set(this, t)
                    }) : X(this, function (e) {
                        var o;
                        if (a && void 0 === e) return void 0 !== (o = tt.get(a, t)) ? o : void 0 !== (o = rt(a, t)) ? o : void 0;
                        this.each(function () {
                            tt.set(this, t, e)
                        })
                    }, null, e, arguments.length > 1, null, !0)
                },
                removeData: function (t) {
                    return this.each(function () {
                        tt.remove(this, t)
                    })
                }
            }), C.extend({
                queue: function (t, e, o) {
                    var r;
                    if (t) return e = (e || "fx") + "queue", r = Z.get(t, e), o && (!r || Array.isArray(o) ? r = Z.access(t, e, C.makeArray(o)) : r.push(o)), r || []
                },
                dequeue: function (t, e) {
                    e = e || "fx";
                    var o = C.queue(t, e),
                        r = o.length,
                        n = o.shift(),
                        i = C._queueHooks(t, e);
                    "inprogress" === n && (n = o.shift(), r--), n && ("fx" === e && o.unshift("inprogress"), delete i.stop, n.call(t, function () {
                        C.dequeue(t, e)
                    }, i)), !r && i && i.empty.fire()
                },
                _queueHooks: function (t, e) {
                    var o = e + "queueHooks";
                    return Z.get(t, o) || Z.access(t, o, {
                        empty: C.Callbacks("once memory").add(function () {
                            Z.remove(t, [e + "queue", o])
                        })
                    })
                }
            }), C.fn.extend({
                queue: function (t, e) {
                    var o = 2;
                    return "string" != typeof t && (e = t, t = "fx", o--), arguments.length < o ? C.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                        var o = C.queue(this, t, e);
                        C._queueHooks(this, t), "fx" === t && "inprogress" !== o[0] && C.dequeue(this, t)
                    })
                },
                dequeue: function (t) {
                    return this.each(function () {
                        C.dequeue(this, t)
                    })
                },
                clearQueue: function (t) {
                    return this.queue(t || "fx", [])
                },
                promise: function (t, e) {
                    var o, r = 1,
                        n = C.Deferred(),
                        i = this,
                        a = this.length,
                        l = function () {
                            --r || n.resolveWith(i, [i])
                        };
                    for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)(o = Z.get(i[a], t + "queueHooks")) && o.empty && (r++ , o.empty.add(l));
                    return l(), n.promise(e)
                }
            });
            var nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                it = new RegExp("^(?:([+-])=|)(" + nt + ")([a-z%]*)$", "i"),
                at = ["Top", "Right", "Bottom", "Left"],
                lt = function (t, e) {
                    return "none" === (t = e || t).style.display || "" === t.style.display && C.contains(t.ownerDocument, t) && "none" === C.css(t, "display")
                },
                st = function (t, e, o, r) {
                    var n, i, a = {};
                    for (i in e) a[i] = t.style[i], t.style[i] = e[i];
                    for (i in n = o.apply(t, r || []), e) t.style[i] = a[i];
                    return n
                };

            function dt(t, e, o, r) {
                var n, i, a = 20,
                    l = r ? function () {
                        return r.cur()
                    } : function () {
                        return C.css(t, e, "")
                    },
                    s = l(),
                    d = o && o[3] || (C.cssNumber[e] ? "" : "px"),
                    c = (C.cssNumber[e] || "px" !== d && +s) && it.exec(C.css(t, e));
                if (c && c[3] !== d) {
                    for (s /= 2, d = d || c[3], c = +s || 1; a--;) C.style(t, e, c + d), (1 - i) * (1 - (i = l() / s || .5)) <= 0 && (a = 0), c /= i;
                    c *= 2, C.style(t, e, c + d), o = o || []
                }
                return o && (c = +c || +s || 0, n = o[1] ? c + (o[1] + 1) * o[2] : +o[2], r && (r.unit = d, r.start = c, r.end = n)), n
            }
            var ct = {};

            function pt(t) {
                var e, o = t.ownerDocument,
                    r = t.nodeName,
                    n = ct[r];
                return n || (e = o.body.appendChild(o.createElement(r)), n = C.css(e, "display"), e.parentNode.removeChild(e), "none" === n && (n = "block"), ct[r] = n, n)
            }

            function mt(t, e) {
                for (var o, r, n = [], i = 0, a = t.length; i < a; i++)(r = t[i]).style && (o = r.style.display, e ? ("none" === o && (n[i] = Z.get(r, "display") || null, n[i] || (r.style.display = "")), "" === r.style.display && lt(r) && (n[i] = pt(r))) : "none" !== o && (n[i] = "none", Z.set(r, "display", o)));
                for (i = 0; i < a; i++) null != n[i] && (t[i].style.display = n[i]);
                return t
            }
            C.fn.extend({
                show: function () {
                    return mt(this, !0)
                },
                hide: function () {
                    return mt(this)
                },
                toggle: function (t) {
                    return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                        lt(this) ? C(this).show() : C(this).hide()
                    })
                }
            });
            var ft = /^(?:checkbox|radio)$/i,
                ut = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
                gt = /^$|^module$|\/(?:java|ecma)script/i,
                bt = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };

            function ht(t, e) {
                var o;
                return o = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && D(t, e) ? C.merge([t], o) : o
            }

            function xt(t, e) {
                for (var o = 0, r = t.length; o < r; o++) Z.set(t[o], "globalEval", !e || Z.get(e[o], "globalEval"))
            }
            bt.optgroup = bt.option, bt.tbody = bt.tfoot = bt.colgroup = bt.caption = bt.thead, bt.th = bt.td;
            var vt, yt, wt = /<|&#?\w+;/;

            function kt(t, e, o, r, n) {
                for (var i, a, l, s, d, c, p = e.createDocumentFragment(), m = [], f = 0, u = t.length; f < u; f++)
                    if ((i = t[f]) || 0 === i)
                        if ("object" === j(i)) C.merge(m, i.nodeType ? [i] : i);
                        else if (wt.test(i)) {
                            for (a = a || p.appendChild(e.createElement("div")), l = (ut.exec(i) || ["", ""])[1].toLowerCase(), s = bt[l] || bt._default, a.innerHTML = s[1] + C.htmlPrefilter(i) + s[2], c = s[0]; c--;) a = a.lastChild;
                            C.merge(m, a.childNodes), (a = p.firstChild).textContent = ""
                        } else m.push(e.createTextNode(i));
                for (p.textContent = "", f = 0; i = m[f++];)
                    if (r && C.inArray(i, r) > -1) n && n.push(i);
                    else if (d = C.contains(i.ownerDocument, i), a = ht(p.appendChild(i), "script"), d && xt(a), o)
                        for (c = 0; i = a[c++];) gt.test(i.type || "") && o.push(i);
                return p
            }
            vt = l.createDocumentFragment().appendChild(l.createElement("div")), (yt = l.createElement("input")).setAttribute("type", "radio"), yt.setAttribute("checked", "checked"), yt.setAttribute("name", "t"), vt.appendChild(yt), x.checkClone = vt.cloneNode(!0).cloneNode(!0).lastChild.checked, vt.innerHTML = "<textarea>x</textarea>", x.noCloneChecked = !!vt.cloneNode(!0).lastChild.defaultValue;
            var jt = l.documentElement,
                Ct = /^key/,
                Tt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                Et = /^([^.]*)(?:\.(.+)|)/;

            function St() {
                return !0
            }

            function zt() {
                return !1
            }

            function At() {
                try {
                    return l.activeElement
                } catch (t) { }
            }

            function Nt(t, e, o, n, i, a) {
                var l, s;
                if ("object" === (void 0 === e ? "undefined" : r(e))) {
                    for (s in "string" != typeof o && (n = n || o, o = void 0), e) Nt(t, s, o, n, e[s], a);
                    return t
                }
                if (null == n && null == i ? (i = o, n = o = void 0) : null == i && ("string" == typeof o ? (i = n, n = void 0) : (i = n, n = o, o = void 0)), !1 === i) i = zt;
                else if (!i) return t;
                return 1 === a && (l = i, (i = function (t) {
                    return C().off(t), l.apply(this, arguments)
                }).guid = l.guid || (l.guid = C.guid++)), t.each(function () {
                    C.event.add(this, e, i, n, o)
                })
            }
            C.event = {
                global: {},
                add: function (t, e, o, r, n) {
                    var i, a, l, s, d, c, p, m, f, u, g, b = Z.get(t);
                    if (b)
                        for (o.handler && (o = (i = o).handler, n = i.selector), n && C.find.matchesSelector(jt, n), o.guid || (o.guid = C.guid++), (s = b.events) || (s = b.events = {}), (a = b.handle) || (a = b.handle = function (e) {
                            return void 0 !== C && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0
                        }), d = (e = (e || "").match(P) || [""]).length; d--;) f = g = (l = Et.exec(e[d]) || [])[1], u = (l[2] || "").split(".").sort(), f && (p = C.event.special[f] || {}, f = (n ? p.delegateType : p.bindType) || f, p = C.event.special[f] || {}, c = C.extend({
                            type: f,
                            origType: g,
                            data: r,
                            handler: o,
                            guid: o.guid,
                            selector: n,
                            needsContext: n && C.expr.match.needsContext.test(n),
                            namespace: u.join(".")
                        }, i), (m = s[f]) || ((m = s[f] = []).delegateCount = 0, p.setup && !1 !== p.setup.call(t, r, u, a) || t.addEventListener && t.addEventListener(f, a)), p.add && (p.add.call(t, c), c.handler.guid || (c.handler.guid = o.guid)), n ? m.splice(m.delegateCount++, 0, c) : m.push(c), C.event.global[f] = !0)
                },
                remove: function (t, e, o, r, n) {
                    var i, a, l, s, d, c, p, m, f, u, g, b = Z.hasData(t) && Z.get(t);
                    if (b && (s = b.events)) {
                        for (d = (e = (e || "").match(P) || [""]).length; d--;)
                            if (f = g = (l = Et.exec(e[d]) || [])[1], u = (l[2] || "").split(".").sort(), f) {
                                for (p = C.event.special[f] || {}, m = s[f = (r ? p.delegateType : p.bindType) || f] || [], l = l[2] && new RegExp("(^|\\.)" + u.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = m.length; i--;) c = m[i], !n && g !== c.origType || o && o.guid !== c.guid || l && !l.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (m.splice(i, 1), c.selector && m.delegateCount-- , p.remove && p.remove.call(t, c));
                                a && !m.length && (p.teardown && !1 !== p.teardown.call(t, u, b.handle) || C.removeEvent(t, f, b.handle), delete s[f])
                            } else
                                for (f in s) C.event.remove(t, f + e[d], o, r, !0);
                        C.isEmptyObject(s) && Z.remove(t, "handle events")
                    }
                },
                dispatch: function (t) {
                    var e, o, r, n, i, a, l = C.event.fix(t),
                        s = new Array(arguments.length),
                        d = (Z.get(this, "events") || {})[l.type] || [],
                        c = C.event.special[l.type] || {};
                    for (s[0] = l, e = 1; e < arguments.length; e++) s[e] = arguments[e];
                    if (l.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, l)) {
                        for (a = C.event.handlers.call(this, l, d), e = 0;
                            (n = a[e++]) && !l.isPropagationStopped();)
                            for (l.currentTarget = n.elem, o = 0;
                                (i = n.handlers[o++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !l.rnamespace.test(i.namespace) || (l.handleObj = i, l.data = i.data, void 0 !== (r = ((C.event.special[i.origType] || {}).handle || i.handler).apply(n.elem, s)) && !1 === (l.result = r) && (l.preventDefault(), l.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, l), l.result
                    }
                },
                handlers: function (t, e) {
                    var o, r, n, i, a, l = [],
                        s = e.delegateCount,
                        d = t.target;
                    if (s && d.nodeType && !("click" === t.type && t.button >= 1))
                        for (; d !== this; d = d.parentNode || this)
                            if (1 === d.nodeType && ("click" !== t.type || !0 !== d.disabled)) {
                                for (i = [], a = {}, o = 0; o < s; o++) void 0 === a[n = (r = e[o]).selector + " "] && (a[n] = r.needsContext ? C(n, this).index(d) > -1 : C.find(n, this, null, [d]).length), a[n] && i.push(r);
                                i.length && l.push({
                                    elem: d,
                                    handlers: i
                                })
                            }
                    return d = this, s < e.length && l.push({
                        elem: d,
                        handlers: e.slice(s)
                    }), l
                },
                addProp: function (t, e) {
                    Object.defineProperty(C.Event.prototype, t, {
                        enumerable: !0,
                        configurable: !0,
                        get: v(e) ? function () {
                            if (this.originalEvent) return e(this.originalEvent)
                        } : function () {
                            if (this.originalEvent) return this.originalEvent[t]
                        },
                        set: function (e) {
                            Object.defineProperty(this, t, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: e
                            })
                        }
                    })
                },
                fix: function (t) {
                    return t[C.expando] ? t : new C.Event(t)
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    focus: {
                        trigger: function () {
                            if (this !== At() && this.focus) return this.focus(), !1
                        },
                        delegateType: "focusin"
                    },
                    blur: {
                        trigger: function () {
                            if (this === At() && this.blur) return this.blur(), !1
                        },
                        delegateType: "focusout"
                    },
                    click: {
                        trigger: function () {
                            if ("checkbox" === this.type && this.click && D(this, "input")) return this.click(), !1
                        },
                        _default: function (t) {
                            return D(t.target, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function (t) {
                            void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                        }
                    }
                }
            }, C.removeEvent = function (t, e, o) {
                t.removeEventListener && t.removeEventListener(e, o)
            }, C.Event = function (t, e) {
                if (!(this instanceof C.Event)) return new C.Event(t, e);
                t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? St : zt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && C.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[C.expando] = !0
            }, C.Event.prototype = {
                constructor: C.Event,
                isDefaultPrevented: zt,
                isPropagationStopped: zt,
                isImmediatePropagationStopped: zt,
                isSimulated: !1,
                preventDefault: function () {
                    var t = this.originalEvent;
                    this.isDefaultPrevented = St, t && !this.isSimulated && t.preventDefault()
                },
                stopPropagation: function () {
                    var t = this.originalEvent;
                    this.isPropagationStopped = St, t && !this.isSimulated && t.stopPropagation()
                },
                stopImmediatePropagation: function () {
                    var t = this.originalEvent;
                    this.isImmediatePropagationStopped = St, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
                }
            }, C.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (t) {
                    var e = t.button;
                    return null == t.which && Ct.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Tt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
                }
            }, C.event.addProp), C.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function (t, e) {
                C.event.special[t] = {
                    delegateType: e,
                    bindType: e,
                    handle: function (t) {
                        var o, r = t.relatedTarget,
                            n = t.handleObj;
                        return r && (r === this || C.contains(this, r)) || (t.type = n.origType, o = n.handler.apply(this, arguments), t.type = e), o
                    }
                }
            }), C.fn.extend({
                on: function (t, e, o, r) {
                    return Nt(this, t, e, o, r)
                },
                one: function (t, e, o, r) {
                    return Nt(this, t, e, o, r, 1)
                },
                off: function (t, e, o) {
                    var n, i;
                    if (t && t.preventDefault && t.handleObj) return n = t.handleObj, C(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                    if ("object" === (void 0 === t ? "undefined" : r(t))) {
                        for (i in t) this.off(i, e, t[i]);
                        return this
                    }
                    return !1 !== e && "function" != typeof e || (o = e, e = void 0), !1 === o && (o = zt), this.each(function () {
                        C.event.remove(this, t, o, e)
                    })
                }
            });
            var Dt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                Lt = /<script|<style|<link/i,
                qt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Mt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

            function Ot(t, e) {
                return D(t, "table") && D(11 !== e.nodeType ? e : e.firstChild, "tr") && C(t).children("tbody")[0] || t
            }

            function Ht(t) {
                return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
            }

            function Rt(t) {
                return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
            }

            function It(t, e) {
                var o, r, n, i, a, l, s, d;
                if (1 === e.nodeType) {
                    if (Z.hasData(t) && (i = Z.access(t), a = Z.set(e, i), d = i.events))
                        for (n in delete a.handle, a.events = {}, d)
                            for (o = 0, r = d[n].length; o < r; o++) C.event.add(e, n, d[n][o]);
                    tt.hasData(t) && (l = tt.access(t), s = C.extend({}, l), tt.set(e, s))
                }
            }

            function Pt(t, e, o, r) {
                e = c.apply([], e);
                var n, i, a, l, s, d, p = 0,
                    m = t.length,
                    f = m - 1,
                    u = e[0],
                    g = v(u);
                if (g || m > 1 && "string" == typeof u && !x.checkClone && qt.test(u)) return t.each(function (n) {
                    var i = t.eq(n);
                    g && (e[0] = u.call(this, n, i.html())), Pt(i, e, o, r)
                });
                if (m && (i = (n = kt(e, t[0].ownerDocument, !1, t, r)).firstChild, 1 === n.childNodes.length && (n = i), i || r)) {
                    for (l = (a = C.map(ht(n, "script"), Ht)).length; p < m; p++) s = n, p !== f && (s = C.clone(s, !0, !0), l && C.merge(a, ht(s, "script"))), o.call(t[p], s, p);
                    if (l)
                        for (d = a[a.length - 1].ownerDocument, C.map(a, Rt), p = 0; p < l; p++) s = a[p], gt.test(s.type || "") && !Z.access(s, "globalEval") && C.contains(d, s) && (s.src && "module" !== (s.type || "").toLowerCase() ? C._evalUrl && C._evalUrl(s.src) : k(s.textContent.replace(Mt, ""), d, s))
                }
                return t
            }

            function Bt(t, e, o) {
                for (var r, n = e ? C.filter(e, t) : t, i = 0; null != (r = n[i]); i++) o || 1 !== r.nodeType || C.cleanData(ht(r)), r.parentNode && (o && C.contains(r.ownerDocument, r) && xt(ht(r, "script")), r.parentNode.removeChild(r));
                return t
            }
            C.extend({
                htmlPrefilter: function (t) {
                    return t.replace(Dt, "<$1></$2>")
                },
                clone: function (t, e, o) {
                    var r, n, i, a, l, s, d, c = t.cloneNode(!0),
                        p = C.contains(t.ownerDocument, t);
                    if (!(x.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || C.isXMLDoc(t)))
                        for (a = ht(c), r = 0, n = (i = ht(t)).length; r < n; r++) l = i[r], s = a[r], void 0, "input" === (d = s.nodeName.toLowerCase()) && ft.test(l.type) ? s.checked = l.checked : "input" !== d && "textarea" !== d || (s.defaultValue = l.defaultValue);
                    if (e)
                        if (o)
                            for (i = i || ht(t), a = a || ht(c), r = 0, n = i.length; r < n; r++) It(i[r], a[r]);
                        else It(t, c);
                    return (a = ht(c, "script")).length > 0 && xt(a, !p && ht(t, "script")), c
                },
                cleanData: function (t) {
                    for (var e, o, r, n = C.event.special, i = 0; void 0 !== (o = t[i]); i++)
                        if (Q(o)) {
                            if (e = o[Z.expando]) {
                                if (e.events)
                                    for (r in e.events) n[r] ? C.event.remove(o, r) : C.removeEvent(o, r, e.handle);
                                o[Z.expando] = void 0
                            }
                            o[tt.expando] && (o[tt.expando] = void 0)
                        }
                }
            }), C.fn.extend({
                detach: function (t) {
                    return Bt(this, t, !0)
                },
                remove: function (t) {
                    return Bt(this, t)
                },
                text: function (t) {
                    return X(this, function (t) {
                        return void 0 === t ? C.text(this) : this.empty().each(function () {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                        })
                    }, null, t, arguments.length)
                },
                append: function () {
                    return Pt(this, arguments, function (t) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ot(this, t).appendChild(t)
                    })
                },
                prepend: function () {
                    return Pt(this, arguments, function (t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var e = Ot(this, t);
                            e.insertBefore(t, e.firstChild)
                        }
                    })
                },
                before: function () {
                    return Pt(this, arguments, function (t) {
                        this.parentNode && this.parentNode.insertBefore(t, this)
                    })
                },
                after: function () {
                    return Pt(this, arguments, function (t) {
                        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                    })
                },
                empty: function () {
                    for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (C.cleanData(ht(t, !1)), t.textContent = "");
                    return this
                },
                clone: function (t, e) {
                    return t = null != t && t, e = null == e ? t : e, this.map(function () {
                        return C.clone(this, t, e)
                    })
                },
                html: function (t) {
                    return X(this, function (t) {
                        var e = this[0] || {},
                            o = 0,
                            r = this.length;
                        if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                        if ("string" == typeof t && !Lt.test(t) && !bt[(ut.exec(t) || ["", ""])[1].toLowerCase()]) {
                            t = C.htmlPrefilter(t);
                            try {
                                for (; o < r; o++) 1 === (e = this[o] || {}).nodeType && (C.cleanData(ht(e, !1)), e.innerHTML = t);
                                e = 0
                            } catch (t) { }
                        }
                        e && this.empty().append(t)
                    }, null, t, arguments.length)
                },
                replaceWith: function () {
                    var t = [];
                    return Pt(this, arguments, function (e) {
                        var o = this.parentNode;
                        C.inArray(this, t) < 0 && (C.cleanData(ht(this)), o && o.replaceChild(e, this))
                    }, t)
                }
            }), C.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function (t, e) {
                C.fn[t] = function (t) {
                    for (var o, r = [], n = C(t), i = n.length - 1, a = 0; a <= i; a++) o = a === i ? this : this.clone(!0), C(n[a])[e](o), p.apply(r, o.get());
                    return this.pushStack(r)
                }
            });
            var Ft = new RegExp("^(" + nt + ")(?!px)[a-z%]+$", "i"),
                Ut = function (t) {
                    var e = t.ownerDocument.defaultView;
                    return e && e.opener || (e = n), e.getComputedStyle(t)
                },
                $t = new RegExp(at.join("|"), "i");

            function Wt(t, e, o) {
                var r, n, i, a, l = t.style;
                return (o = o || Ut(t)) && ("" !== (a = o.getPropertyValue(e) || o[e]) || C.contains(t.ownerDocument, t) || (a = C.style(t, e)), !x.pixelBoxStyles() && Ft.test(a) && $t.test(e) && (r = l.width, n = l.minWidth, i = l.maxWidth, l.minWidth = l.maxWidth = l.width = a, a = o.width, l.width = r, l.minWidth = n, l.maxWidth = i)), void 0 !== a ? a + "" : a
            }

            function _t(t, e) {
                return {
                    get: function () {
                        if (!t()) return (this.get = e).apply(this, arguments);
                        delete this.get
                    }
                }
            } ! function () {
                function t() {
                    if (c) {
                        d.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", jt.appendChild(d).appendChild(c);
                        var t = n.getComputedStyle(c);
                        o = "1%" !== t.top, s = 12 === e(t.marginLeft), c.style.right = "60%", a = 36 === e(t.right), r = 36 === e(t.width), c.style.position = "absolute", i = 36 === c.offsetWidth || "absolute", jt.removeChild(d), c = null
                    }
                }

                function e(t) {
                    return Math.round(parseFloat(t))
                }
                var o, r, i, a, s, d = l.createElement("div"),
                    c = l.createElement("div");
                c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", x.clearCloneStyle = "content-box" === c.style.backgroundClip, C.extend(x, {
                    boxSizingReliable: function () {
                        return t(), r
                    },
                    pixelBoxStyles: function () {
                        return t(), a
                    },
                    pixelPosition: function () {
                        return t(), o
                    },
                    reliableMarginLeft: function () {
                        return t(), s
                    },
                    scrollboxSize: function () {
                        return t(), i
                    }
                }))
            }();
            var Xt = /^(none|table(?!-c[ea]).+)/,
                Vt = /^--/,
                Gt = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                },
                Jt = {
                    letterSpacing: "0",
                    fontWeight: "400"
                },
                Yt = ["Webkit", "Moz", "ms"],
                Qt = l.createElement("div").style;

            function Kt(t) {
                var e = C.cssProps[t];
                return e || (e = C.cssProps[t] = function (t) {
                    if (t in Qt) return t;
                    for (var e = t[0].toUpperCase() + t.slice(1), o = Yt.length; o--;)
                        if ((t = Yt[o] + e) in Qt) return t
                }(t) || t), e
            }

            function Zt(t, e, o) {
                var r = it.exec(e);
                return r ? Math.max(0, r[2] - (o || 0)) + (r[3] || "px") : e
            }

            function te(t, e, o, r, n, i) {
                var a = "width" === e ? 1 : 0,
                    l = 0,
                    s = 0;
                if (o === (r ? "border" : "content")) return 0;
                for (; a < 4; a += 2) "margin" === o && (s += C.css(t, o + at[a], !0, n)), r ? ("content" === o && (s -= C.css(t, "padding" + at[a], !0, n)), "margin" !== o && (s -= C.css(t, "border" + at[a] + "Width", !0, n))) : (s += C.css(t, "padding" + at[a], !0, n), "padding" !== o ? s += C.css(t, "border" + at[a] + "Width", !0, n) : l += C.css(t, "border" + at[a] + "Width", !0, n));
                return !r && i >= 0 && (s += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - i - s - l - .5))), s
            }

            function ee(t, e, o) {
                var r = Ut(t),
                    n = Wt(t, e, r),
                    i = "border-box" === C.css(t, "boxSizing", !1, r),
                    a = i;
                if (Ft.test(n)) {
                    if (!o) return n;
                    n = "auto"
                }
                return a = a && (x.boxSizingReliable() || n === t.style[e]), ("auto" === n || !parseFloat(n) && "inline" === C.css(t, "display", !1, r)) && (n = t["offset" + e[0].toUpperCase() + e.slice(1)], a = !0), (n = parseFloat(n) || 0) + te(t, e, o || (i ? "border" : "content"), a, r, n) + "px"
            }

            function oe(t, e, o, r, n) {
                return new oe.prototype.init(t, e, o, r, n)
            }
            C.extend({
                cssHooks: {
                    opacity: {
                        get: function (t, e) {
                            if (e) {
                                var o = Wt(t, "opacity");
                                return "" === o ? "1" : o
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {},
                style: function (t, e, o, n) {
                    if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                        var i, a, l, s = Y(e),
                            d = Vt.test(e),
                            c = t.style;
                        if (d || (e = Kt(s)), l = C.cssHooks[e] || C.cssHooks[s], void 0 === o) return l && "get" in l && void 0 !== (i = l.get(t, !1, n)) ? i : c[e];
                        "string" === (a = void 0 === o ? "undefined" : r(o)) && (i = it.exec(o)) && i[1] && (o = dt(t, e, i), a = "number"), null != o && o == o && ("number" === a && (o += i && i[3] || (C.cssNumber[s] ? "" : "px")), x.clearCloneStyle || "" !== o || 0 !== e.indexOf("background") || (c[e] = "inherit"), l && "set" in l && void 0 === (o = l.set(t, o, n)) || (d ? c.setProperty(e, o) : c[e] = o))
                    }
                },
                css: function (t, e, o, r) {
                    var n, i, a, l = Y(e);
                    return Vt.test(e) || (e = Kt(l)), (a = C.cssHooks[e] || C.cssHooks[l]) && "get" in a && (n = a.get(t, !0, o)), void 0 === n && (n = Wt(t, e, r)), "normal" === n && e in Jt && (n = Jt[e]), "" === o || o ? (i = parseFloat(n), !0 === o || isFinite(i) ? i || 0 : n) : n
                }
            }), C.each(["height", "width"], function (t, e) {
                C.cssHooks[e] = {
                    get: function (t, o, r) {
                        if (o) return !Xt.test(C.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? ee(t, e, r) : st(t, Gt, function () {
                            return ee(t, e, r)
                        })
                    },
                    set: function (t, o, r) {
                        var n, i = Ut(t),
                            a = "border-box" === C.css(t, "boxSizing", !1, i),
                            l = r && te(t, e, r, a, i);
                        return a && x.scrollboxSize() === i.position && (l -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(i[e]) - te(t, e, "border", !1, i) - .5)), l && (n = it.exec(o)) && "px" !== (n[3] || "px") && (t.style[e] = o, o = C.css(t, e)), Zt(0, o, l)
                    }
                }
            }), C.cssHooks.marginLeft = _t(x.reliableMarginLeft, function (t, e) {
                if (e) return (parseFloat(Wt(t, "marginLeft")) || t.getBoundingClientRect().left - st(t, {
                    marginLeft: 0
                }, function () {
                    return t.getBoundingClientRect().left
                })) + "px"
            }), C.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function (t, e) {
                C.cssHooks[t + e] = {
                    expand: function (o) {
                        for (var r = 0, n = {}, i = "string" == typeof o ? o.split(" ") : [o]; r < 4; r++) n[t + at[r] + e] = i[r] || i[r - 2] || i[0];
                        return n
                    }
                }, "margin" !== t && (C.cssHooks[t + e].set = Zt)
            }), C.fn.extend({
                css: function (t, e) {
                    return X(this, function (t, e, o) {
                        var r, n, i = {},
                            a = 0;
                        if (Array.isArray(e)) {
                            for (r = Ut(t), n = e.length; a < n; a++) i[e[a]] = C.css(t, e[a], !1, r);
                            return i
                        }
                        return void 0 !== o ? C.style(t, e, o) : C.css(t, e)
                    }, t, e, arguments.length > 1)
                }
            }), C.Tween = oe, oe.prototype = {
                constructor: oe,
                init: function (t, e, o, r, n, i) {
                    this.elem = t, this.prop = o, this.easing = n || C.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = r, this.unit = i || (C.cssNumber[o] ? "" : "px")
                },
                cur: function () {
                    var t = oe.propHooks[this.prop];
                    return t && t.get ? t.get(this) : oe.propHooks._default.get(this)
                },
                run: function (t) {
                    var e, o = oe.propHooks[this.prop];
                    return this.options.duration ? this.pos = e = C.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), o && o.set ? o.set(this) : oe.propHooks._default.set(this), this
                }
            }, oe.prototype.init.prototype = oe.prototype, oe.propHooks = {
                _default: {
                    get: function (t) {
                        var e;
                        return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = C.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
                    },
                    set: function (t) {
                        C.fx.step[t.prop] ? C.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[C.cssProps[t.prop]] && !C.cssHooks[t.prop] ? t.elem[t.prop] = t.now : C.style(t.elem, t.prop, t.now + t.unit)
                    }
                }
            }, oe.propHooks.scrollTop = oe.propHooks.scrollLeft = {
                set: function (t) {
                    t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
                }
            }, C.easing = {
                linear: function (t) {
                    return t
                },
                swing: function (t) {
                    return .5 - Math.cos(t * Math.PI) / 2
                },
                _default: "swing"
            }, C.fx = oe.prototype.init, C.fx.step = {};
            var re, ne, ie = /^(?:toggle|show|hide)$/,
                ae = /queueHooks$/;

            function le() {
                ne && (!1 === l.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(le) : n.setTimeout(le, C.fx.interval), C.fx.tick())
            }

            function se() {
                return n.setTimeout(function () {
                    re = void 0
                }), re = Date.now()
            }

            function de(t, e) {
                var o, r = 0,
                    n = {
                        height: t
                    };
                for (e = e ? 1 : 0; r < 4; r += 2 - e) n["margin" + (o = at[r])] = n["padding" + o] = t;
                return e && (n.opacity = n.width = t), n
            }

            function ce(t, e, o) {
                for (var r, n = (pe.tweeners[e] || []).concat(pe.tweeners["*"]), i = 0, a = n.length; i < a; i++)
                    if (r = n[i].call(o, e, t)) return r
            }

            function pe(t, e, o) {
                var r, n, i = 0,
                    a = pe.prefilters.length,
                    l = C.Deferred().always(function () {
                        delete s.elem
                    }),
                    s = function () {
                        if (n) return !1;
                        for (var e = re || se(), o = Math.max(0, d.startTime + d.duration - e), r = 1 - (o / d.duration || 0), i = 0, a = d.tweens.length; i < a; i++) d.tweens[i].run(r);
                        return l.notifyWith(t, [d, r, o]), r < 1 && a ? o : (a || l.notifyWith(t, [d, 1, 0]), l.resolveWith(t, [d]), !1)
                    },
                    d = l.promise({
                        elem: t,
                        props: C.extend({}, e),
                        opts: C.extend(!0, {
                            specialEasing: {},
                            easing: C.easing._default
                        }, o),
                        originalProperties: e,
                        originalOptions: o,
                        startTime: re || se(),
                        duration: o.duration,
                        tweens: [],
                        createTween: function (e, o) {
                            var r = C.Tween(t, d.opts, e, o, d.opts.specialEasing[e] || d.opts.easing);
                            return d.tweens.push(r), r
                        },
                        stop: function (e) {
                            var o = 0,
                                r = e ? d.tweens.length : 0;
                            if (n) return this;
                            for (n = !0; o < r; o++) d.tweens[o].run(1);
                            return e ? (l.notifyWith(t, [d, 1, 0]), l.resolveWith(t, [d, e])) : l.rejectWith(t, [d, e]), this
                        }
                    }),
                    c = d.props;
                for (! function (t, e) {
                    var o, r, n, i, a;
                    for (o in t)
                        if (n = e[r = Y(o)], i = t[o], Array.isArray(i) && (n = i[1], i = t[o] = i[0]), o !== r && (t[r] = i, delete t[o]), (a = C.cssHooks[r]) && "expand" in a)
                            for (o in i = a.expand(i), delete t[r], i) o in t || (t[o] = i[o], e[o] = n);
                        else e[r] = n
                }(c, d.opts.specialEasing); i < a; i++)
                    if (r = pe.prefilters[i].call(d, t, c, d.opts)) return v(r.stop) && (C._queueHooks(d.elem, d.opts.queue).stop = r.stop.bind(r)), r;
                return C.map(c, ce, d), v(d.opts.start) && d.opts.start.call(t, d), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always), C.fx.timer(C.extend(s, {
                    elem: t,
                    anim: d,
                    queue: d.opts.queue
                })), d
            }
            C.Animation = C.extend(pe, {
                tweeners: {
                    "*": [function (t, e) {
                        var o = this.createTween(t, e);
                        return dt(o.elem, t, it.exec(e), o), o
                    }]
                },
                tweener: function (t, e) {
                    v(t) ? (e = t, t = ["*"]) : t = t.match(P);
                    for (var o, r = 0, n = t.length; r < n; r++) o = t[r], pe.tweeners[o] = pe.tweeners[o] || [], pe.tweeners[o].unshift(e)
                },
                prefilters: [function (t, e, o) {
                    var r, n, i, a, l, s, d, c, p = "width" in e || "height" in e,
                        m = this,
                        f = {},
                        u = t.style,
                        g = t.nodeType && lt(t),
                        b = Z.get(t, "fxshow");
                    for (r in o.queue || (null == (a = C._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
                        a.unqueued || l()
                    }), a.unqueued++ , m.always(function () {
                        m.always(function () {
                            a.unqueued-- , C.queue(t, "fx").length || a.empty.fire()
                        })
                    })), e)
                        if (n = e[r], ie.test(n)) {
                            if (delete e[r], i = i || "toggle" === n, n === (g ? "hide" : "show")) {
                                if ("show" !== n || !b || void 0 === b[r]) continue;
                                g = !0
                            }
                            f[r] = b && b[r] || C.style(t, r)
                        }
                    if ((s = !C.isEmptyObject(e)) || !C.isEmptyObject(f))
                        for (r in p && 1 === t.nodeType && (o.overflow = [u.overflow, u.overflowX, u.overflowY], null == (d = b && b.display) && (d = Z.get(t, "display")), "none" === (c = C.css(t, "display")) && (d ? c = d : (mt([t], !0), d = t.style.display || d, c = C.css(t, "display"), mt([t]))), ("inline" === c || "inline-block" === c && null != d) && "none" === C.css(t, "float") && (s || (m.done(function () {
                            u.display = d
                        }), null == d && (c = u.display, d = "none" === c ? "" : c)), u.display = "inline-block")), o.overflow && (u.overflow = "hidden", m.always(function () {
                            u.overflow = o.overflow[0], u.overflowX = o.overflow[1], u.overflowY = o.overflow[2]
                        })), s = !1, f) s || (b ? "hidden" in b && (g = b.hidden) : b = Z.access(t, "fxshow", {
                            display: d
                        }), i && (b.hidden = !g), g && mt([t], !0), m.done(function () {
                            for (r in g || mt([t]), Z.remove(t, "fxshow"), f) C.style(t, r, f[r])
                        })), s = ce(g ? b[r] : 0, r, m), r in b || (b[r] = s.start, g && (s.end = s.start, s.start = 0))
                }],
                prefilter: function (t, e) {
                    e ? pe.prefilters.unshift(t) : pe.prefilters.push(t)
                }
            }), C.speed = function (t, e, o) {
                var n = t && "object" === (void 0 === t ? "undefined" : r(t)) ? C.extend({}, t) : {
                    complete: o || !o && e || v(t) && t,
                    duration: t,
                    easing: o && e || e && !v(e) && e
                };
                return C.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in C.fx.speeds ? n.duration = C.fx.speeds[n.duration] : n.duration = C.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
                    v(n.old) && n.old.call(this), n.queue && C.dequeue(this, n.queue)
                }, n
            }, C.fn.extend({
                fadeTo: function (t, e, o, r) {
                    return this.filter(lt).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, o, r)
                },
                animate: function (t, e, o, r) {
                    var n = C.isEmptyObject(t),
                        i = C.speed(e, o, r),
                        a = function () {
                            var e = pe(this, C.extend({}, t), i);
                            (n || Z.get(this, "finish")) && e.stop(!0)
                        };
                    return a.finish = a, n || !1 === i.queue ? this.each(a) : this.queue(i.queue, a)
                },
                stop: function (t, e, o) {
                    var r = function (t) {
                        var e = t.stop;
                        delete t.stop, e(o)
                    };
                    return "string" != typeof t && (o = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function () {
                        var e = !0,
                            n = null != t && t + "queueHooks",
                            i = C.timers,
                            a = Z.get(this);
                        if (n) a[n] && a[n].stop && r(a[n]);
                        else
                            for (n in a) a[n] && a[n].stop && ae.test(n) && r(a[n]);
                        for (n = i.length; n--;) i[n].elem !== this || null != t && i[n].queue !== t || (i[n].anim.stop(o), e = !1, i.splice(n, 1));
                        !e && o || C.dequeue(this, t)
                    })
                },
                finish: function (t) {
                    return !1 !== t && (t = t || "fx"), this.each(function () {
                        var e, o = Z.get(this),
                            r = o[t + "queue"],
                            n = o[t + "queueHooks"],
                            i = C.timers,
                            a = r ? r.length : 0;
                        for (o.finish = !0, C.queue(this, t, []), n && n.stop && n.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === t && (i[e].anim.stop(!0), i.splice(e, 1));
                        for (e = 0; e < a; e++) r[e] && r[e].finish && r[e].finish.call(this);
                        delete o.finish
                    })
                }
            }), C.each(["toggle", "show", "hide"], function (t, e) {
                var o = C.fn[e];
                C.fn[e] = function (t, r, n) {
                    return null == t || "boolean" == typeof t ? o.apply(this, arguments) : this.animate(de(e, !0), t, r, n)
                }
            }), C.each({
                slideDown: de("show"),
                slideUp: de("hide"),
                slideToggle: de("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function (t, e) {
                C.fn[t] = function (t, o, r) {
                    return this.animate(e, t, o, r)
                }
            }), C.timers = [], C.fx.tick = function () {
                var t, e = 0,
                    o = C.timers;
                for (re = Date.now(); e < o.length; e++)(t = o[e])() || o[e] !== t || o.splice(e--, 1);
                o.length || C.fx.stop(), re = void 0
            }, C.fx.timer = function (t) {
                C.timers.push(t), C.fx.start()
            }, C.fx.interval = 13, C.fx.start = function () {
                ne || (ne = !0, le())
            }, C.fx.stop = function () {
                ne = null
            }, C.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, C.fn.delay = function (t, e) {
                return t = C.fx && C.fx.speeds[t] || t, e = e || "fx", this.queue(e, function (e, o) {
                    var r = n.setTimeout(e, t);
                    o.stop = function () {
                        n.clearTimeout(r)
                    }
                })
            },
                function () {
                    var t = l.createElement("input"),
                        e = l.createElement("select").appendChild(l.createElement("option"));
                    t.type = "checkbox", x.checkOn = "" !== t.value, x.optSelected = e.selected, (t = l.createElement("input")).value = "t", t.type = "radio", x.radioValue = "t" === t.value
                }();
            var me, fe = C.expr.attrHandle;
            C.fn.extend({
                attr: function (t, e) {
                    return X(this, C.attr, t, e, arguments.length > 1)
                },
                removeAttr: function (t) {
                    return this.each(function () {
                        C.removeAttr(this, t)
                    })
                }
            }), C.extend({
                attr: function (t, e, o) {
                    var r, n, i = t.nodeType;
                    if (3 !== i && 8 !== i && 2 !== i) return void 0 === t.getAttribute ? C.prop(t, e, o) : (1 === i && C.isXMLDoc(t) || (n = C.attrHooks[e.toLowerCase()] || (C.expr.match.bool.test(e) ? me : void 0)), void 0 !== o ? null === o ? void C.removeAttr(t, e) : n && "set" in n && void 0 !== (r = n.set(t, o, e)) ? r : (t.setAttribute(e, o + ""), o) : n && "get" in n && null !== (r = n.get(t, e)) ? r : null == (r = C.find.attr(t, e)) ? void 0 : r)
                },
                attrHooks: {
                    type: {
                        set: function (t, e) {
                            if (!x.radioValue && "radio" === e && D(t, "input")) {
                                var o = t.value;
                                return t.setAttribute("type", e), o && (t.value = o), e
                            }
                        }
                    }
                },
                removeAttr: function (t, e) {
                    var o, r = 0,
                        n = e && e.match(P);
                    if (n && 1 === t.nodeType)
                        for (; o = n[r++];) t.removeAttribute(o)
                }
            }), me = {
                set: function (t, e, o) {
                    return !1 === e ? C.removeAttr(t, o) : t.setAttribute(o, o), o
                }
            }, C.each(C.expr.match.bool.source.match(/\w+/g), function (t, e) {
                var o = fe[e] || C.find.attr;
                fe[e] = function (t, e, r) {
                    var n, i, a = e.toLowerCase();
                    return r || (i = fe[a], fe[a] = n, n = null != o(t, e, r) ? a : null, fe[a] = i), n
                }
            });
            var ue = /^(?:input|select|textarea|button)$/i,
                ge = /^(?:a|area)$/i;

            function be(t) {
                return (t.match(P) || []).join(" ")
            }

            function he(t) {
                return t.getAttribute && t.getAttribute("class") || ""
            }

            function xe(t) {
                return Array.isArray(t) ? t : "string" == typeof t && t.match(P) || []
            }
            C.fn.extend({
                prop: function (t, e) {
                    return X(this, C.prop, t, e, arguments.length > 1)
                },
                removeProp: function (t) {
                    return this.each(function () {
                        delete this[C.propFix[t] || t]
                    })
                }
            }), C.extend({
                prop: function (t, e, o) {
                    var r, n, i = t.nodeType;
                    if (3 !== i && 8 !== i && 2 !== i) return 1 === i && C.isXMLDoc(t) || (e = C.propFix[e] || e, n = C.propHooks[e]), void 0 !== o ? n && "set" in n && void 0 !== (r = n.set(t, o, e)) ? r : t[e] = o : n && "get" in n && null !== (r = n.get(t, e)) ? r : t[e]
                },
                propHooks: {
                    tabIndex: {
                        get: function (t) {
                            var e = C.find.attr(t, "tabindex");
                            return e ? parseInt(e, 10) : ue.test(t.nodeName) || ge.test(t.nodeName) && t.href ? 0 : -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }), x.optSelected || (C.propHooks.selected = {
                get: function (t) {
                    var e = t.parentNode;
                    return e && e.parentNode && e.parentNode.selectedIndex, null
                },
                set: function (t) {
                    var e = t.parentNode;
                    e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
                }
            }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                C.propFix[this.toLowerCase()] = this
            }), C.fn.extend({
                addClass: function (t) {
                    var e, o, r, n, i, a, l, s = 0;
                    if (v(t)) return this.each(function (e) {
                        C(this).addClass(t.call(this, e, he(this)))
                    });
                    if ((e = xe(t)).length)
                        for (; o = this[s++];)
                            if (n = he(o), r = 1 === o.nodeType && " " + be(n) + " ") {
                                for (a = 0; i = e[a++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                                n !== (l = be(r)) && o.setAttribute("class", l)
                            }
                    return this
                },
                removeClass: function (t) {
                    var e, o, r, n, i, a, l, s = 0;
                    if (v(t)) return this.each(function (e) {
                        C(this).removeClass(t.call(this, e, he(this)))
                    });
                    if (!arguments.length) return this.attr("class", "");
                    if ((e = xe(t)).length)
                        for (; o = this[s++];)
                            if (n = he(o), r = 1 === o.nodeType && " " + be(n) + " ") {
                                for (a = 0; i = e[a++];)
                                    for (; r.indexOf(" " + i + " ") > -1;) r = r.replace(" " + i + " ", " ");
                                n !== (l = be(r)) && o.setAttribute("class", l)
                            }
                    return this
                },
                toggleClass: function (t, e) {
                    var o = void 0 === t ? "undefined" : r(t),
                        n = "string" === o || Array.isArray(t);
                    return "boolean" == typeof e && n ? e ? this.addClass(t) : this.removeClass(t) : v(t) ? this.each(function (o) {
                        C(this).toggleClass(t.call(this, o, he(this), e), e)
                    }) : this.each(function () {
                        var e, r, i, a;
                        if (n)
                            for (r = 0, i = C(this), a = xe(t); e = a[r++];) i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
                        else void 0 !== t && "boolean" !== o || ((e = he(this)) && Z.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Z.get(this, "__className__") || ""))
                    })
                },
                hasClass: function (t) {
                    var e, o, r = 0;
                    for (e = " " + t + " "; o = this[r++];)
                        if (1 === o.nodeType && (" " + be(he(o)) + " ").indexOf(e) > -1) return !0;
                    return !1
                }
            });
            var ve = /\r/g;
            C.fn.extend({
                val: function (t) {
                    var e, o, r, n = this[0];
                    return arguments.length ? (r = v(t), this.each(function (o) {
                        var n;
                        1 === this.nodeType && (null == (n = r ? t.call(this, o, C(this).val()) : t) ? n = "" : "number" == typeof n ? n += "" : Array.isArray(n) && (n = C.map(n, function (t) {
                            return null == t ? "" : t + ""
                        })), (e = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, n, "value") || (this.value = n))
                    })) : n ? (e = C.valHooks[n.type] || C.valHooks[n.nodeName.toLowerCase()]) && "get" in e && void 0 !== (o = e.get(n, "value")) ? o : "string" == typeof (o = n.value) ? o.replace(ve, "") : null == o ? "" : o : void 0
                }
            }), C.extend({
                valHooks: {
                    option: {
                        get: function (t) {
                            var e = C.find.attr(t, "value");
                            return null != e ? e : be(C.text(t))
                        }
                    },
                    select: {
                        get: function (t) {
                            var e, o, r, n = t.options,
                                i = t.selectedIndex,
                                a = "select-one" === t.type,
                                l = a ? null : [],
                                s = a ? i + 1 : n.length;
                            for (r = i < 0 ? s : a ? i : 0; r < s; r++)
                                if (((o = n[r]).selected || r === i) && !o.disabled && (!o.parentNode.disabled || !D(o.parentNode, "optgroup"))) {
                                    if (e = C(o).val(), a) return e;
                                    l.push(e)
                                }
                            return l
                        },
                        set: function (t, e) {
                            for (var o, r, n = t.options, i = C.makeArray(e), a = n.length; a--;)((r = n[a]).selected = C.inArray(C.valHooks.option.get(r), i) > -1) && (o = !0);
                            return o || (t.selectedIndex = -1), i
                        }
                    }
                }
            }), C.each(["radio", "checkbox"], function () {
                C.valHooks[this] = {
                    set: function (t, e) {
                        if (Array.isArray(e)) return t.checked = C.inArray(C(t).val(), e) > -1
                    }
                }, x.checkOn || (C.valHooks[this].get = function (t) {
                    return null === t.getAttribute("value") ? "on" : t.value
                })
            }), x.focusin = "onfocusin" in n;
            var ye = /^(?:focusinfocus|focusoutblur)$/,
                we = function (t) {
                    t.stopPropagation()
                };
            C.extend(C.event, {
                trigger: function (t, e, o, i) {
                    var a, s, d, c, p, m, f, u, b = [o || l],
                        h = g.call(t, "type") ? t.type : t,
                        x = g.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (s = u = d = o = o || l, 3 !== o.nodeType && 8 !== o.nodeType && !ye.test(h + C.event.triggered) && (h.indexOf(".") > -1 && (h = (x = h.split(".")).shift(), x.sort()), p = h.indexOf(":") < 0 && "on" + h, (t = t[C.expando] ? t : new C.Event(h, "object" === (void 0 === t ? "undefined" : r(t)) && t)).isTrigger = i ? 2 : 3, t.namespace = x.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = o), e = null == e ? [t] : C.makeArray(e, [t]), f = C.event.special[h] || {}, i || !f.trigger || !1 !== f.trigger.apply(o, e))) {
                        if (!i && !f.noBubble && !y(o)) {
                            for (c = f.delegateType || h, ye.test(c + h) || (s = s.parentNode); s; s = s.parentNode) b.push(s), d = s;
                            d === (o.ownerDocument || l) && b.push(d.defaultView || d.parentWindow || n)
                        }
                        for (a = 0;
                            (s = b[a++]) && !t.isPropagationStopped();) u = s, t.type = a > 1 ? c : f.bindType || h, (m = (Z.get(s, "events") || {})[t.type] && Z.get(s, "handle")) && m.apply(s, e), (m = p && s[p]) && m.apply && Q(s) && (t.result = m.apply(s, e), !1 === t.result && t.preventDefault());
                        return t.type = h, i || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(b.pop(), e) || !Q(o) || p && v(o[h]) && !y(o) && ((d = o[p]) && (o[p] = null), C.event.triggered = h, t.isPropagationStopped() && u.addEventListener(h, we), o[h](), t.isPropagationStopped() && u.removeEventListener(h, we), C.event.triggered = void 0, d && (o[p] = d)), t.result
                    }
                },
                simulate: function (t, e, o) {
                    var r = C.extend(new C.Event, o, {
                        type: t,
                        isSimulated: !0
                    });
                    C.event.trigger(r, null, e)
                }
            }), C.fn.extend({
                trigger: function (t, e) {
                    return this.each(function () {
                        C.event.trigger(t, e, this)
                    })
                },
                triggerHandler: function (t, e) {
                    var o = this[0];
                    if (o) return C.event.trigger(t, e, o, !0)
                }
            }), x.focusin || C.each({
                focus: "focusin",
                blur: "focusout"
            }, function (t, e) {
                var o = function (t) {
                    C.event.simulate(e, t.target, C.event.fix(t))
                };
                C.event.special[e] = {
                    setup: function () {
                        var r = this.ownerDocument || this,
                            n = Z.access(r, e);
                        n || r.addEventListener(t, o, !0), Z.access(r, e, (n || 0) + 1)
                    },
                    teardown: function () {
                        var r = this.ownerDocument || this,
                            n = Z.access(r, e) - 1;
                        n ? Z.access(r, e, n) : (r.removeEventListener(t, o, !0), Z.remove(r, e))
                    }
                }
            });
            var ke = n.location,
                je = Date.now(),
                Ce = /\?/;
            C.parseXML = function (t) {
                var e;
                if (!t || "string" != typeof t) return null;
                try {
                    e = (new n.DOMParser).parseFromString(t, "text/xml")
                } catch (t) {
                    e = void 0
                }
                return e && !e.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + t), e
            };
            var Te = /\[\]$/,
                Ee = /\r?\n/g,
                Se = /^(?:submit|button|image|reset|file)$/i,
                ze = /^(?:input|select|textarea|keygen)/i;

            function Ae(t, e, o, n) {
                var i;
                if (Array.isArray(e)) C.each(e, function (e, i) {
                    o || Te.test(t) ? n(t, i) : Ae(t + "[" + ("object" === (void 0 === i ? "undefined" : r(i)) && null != i ? e : "") + "]", i, o, n)
                });
                else if (o || "object" !== j(e)) n(t, e);
                else
                    for (i in e) Ae(t + "[" + i + "]", e[i], o, n)
            }
            C.param = function (t, e) {
                var o, r = [],
                    n = function (t, e) {
                        var o = v(e) ? e() : e;
                        r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == o ? "" : o)
                    };
                if (Array.isArray(t) || t.jquery && !C.isPlainObject(t)) C.each(t, function () {
                    n(this.name, this.value)
                });
                else
                    for (o in t) Ae(o, t[o], e, n);
                return r.join("&")
            }, C.fn.extend({
                serialize: function () {
                    return C.param(this.serializeArray())
                },
                serializeArray: function () {
                    return this.map(function () {
                        var t = C.prop(this, "elements");
                        return t ? C.makeArray(t) : this
                    }).filter(function () {
                        var t = this.type;
                        return this.name && !C(this).is(":disabled") && ze.test(this.nodeName) && !Se.test(t) && (this.checked || !ft.test(t))
                    }).map(function (t, e) {
                        var o = C(this).val();
                        return null == o ? null : Array.isArray(o) ? C.map(o, function (t) {
                            return {
                                name: e.name,
                                value: t.replace(Ee, "\r\n")
                            }
                        }) : {
                                name: e.name,
                                value: o.replace(Ee, "\r\n")
                            }
                    }).get()
                }
            });
            var Ne = /%20/g,
                De = /#.*$/,
                Le = /([?&])_=[^&]*/,
                qe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Me = /^(?:GET|HEAD)$/,
                Oe = /^\/\//,
                He = {},
                Re = {},
                Ie = "*/".concat("*"),
                Pe = l.createElement("a");

            function Be(t) {
                return function (e, o) {
                    "string" != typeof e && (o = e, e = "*");
                    var r, n = 0,
                        i = e.toLowerCase().match(P) || [];
                    if (v(o))
                        for (; r = i[n++];) "+" === r[0] ? (r = r.slice(1) || "*", (t[r] = t[r] || []).unshift(o)) : (t[r] = t[r] || []).push(o)
                }
            }

            function Fe(t, e, o, r) {
                var n = {},
                    i = t === Re;

                function a(l) {
                    var s;
                    return n[l] = !0, C.each(t[l] || [], function (t, l) {
                        var d = l(e, o, r);
                        return "string" != typeof d || i || n[d] ? i ? !(s = d) : void 0 : (e.dataTypes.unshift(d), a(d), !1)
                    }), s
                }
                return a(e.dataTypes[0]) || !n["*"] && a("*")
            }

            function Ue(t, e) {
                var o, r, n = C.ajaxSettings.flatOptions || {};
                for (o in e) void 0 !== e[o] && ((n[o] ? t : r || (r = {}))[o] = e[o]);
                return r && C.extend(!0, t, r), t
            }
            Pe.href = ke.href, C.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: ke.href,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ke.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": Ie,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": C.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function (t, e) {
                    return e ? Ue(Ue(t, C.ajaxSettings), e) : Ue(C.ajaxSettings, t)
                },
                ajaxPrefilter: Be(He),
                ajaxTransport: Be(Re),
                ajax: function (t, e) {
                    "object" === (void 0 === t ? "undefined" : r(t)) && (e = t, t = void 0), e = e || {};
                    var o, i, a, s, d, c, p, m, f, u, g = C.ajaxSetup({}, e),
                        b = g.context || g,
                        h = g.context && (b.nodeType || b.jquery) ? C(b) : C.event,
                        x = C.Deferred(),
                        v = C.Callbacks("once memory"),
                        y = g.statusCode || {},
                        w = {},
                        k = {},
                        j = "canceled",
                        T = {
                            readyState: 0,
                            getResponseHeader: function (t) {
                                var e;
                                if (p) {
                                    if (!s)
                                        for (s = {}; e = qe.exec(a);) s[e[1].toLowerCase()] = e[2];
                                    e = s[t.toLowerCase()]
                                }
                                return null == e ? null : e
                            },
                            getAllResponseHeaders: function () {
                                return p ? a : null
                            },
                            setRequestHeader: function (t, e) {
                                return null == p && (t = k[t.toLowerCase()] = k[t.toLowerCase()] || t, w[t] = e), this
                            },
                            overrideMimeType: function (t) {
                                return null == p && (g.mimeType = t), this
                            },
                            statusCode: function (t) {
                                var e;
                                if (t)
                                    if (p) T.always(t[T.status]);
                                    else
                                        for (e in t) y[e] = [y[e], t[e]];
                                return this
                            },
                            abort: function (t) {
                                var e = t || j;
                                return o && o.abort(e), E(0, e), this
                            }
                        };
                    if (x.promise(T), g.url = ((t || g.url || ke.href) + "").replace(Oe, ke.protocol + "//"), g.type = e.method || e.type || g.method || g.type, g.dataTypes = (g.dataType || "*").toLowerCase().match(P) || [""], null == g.crossDomain) {
                        c = l.createElement("a");
                        try {
                            c.href = g.url, c.href = c.href, g.crossDomain = Pe.protocol + "//" + Pe.host != c.protocol + "//" + c.host
                        } catch (t) {
                            g.crossDomain = !0
                        }
                    }
                    if (g.data && g.processData && "string" != typeof g.data && (g.data = C.param(g.data, g.traditional)), Fe(He, g, e, T), p) return T;
                    for (f in (m = C.event && g.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !Me.test(g.type), i = g.url.replace(De, ""), g.hasContent ? g.data && g.processData && 0 === (g.contentType || "").indexOf("application/x-www-form-urlencoded") && (g.data = g.data.replace(Ne, "+")) : (u = g.url.slice(i.length), g.data && (g.processData || "string" == typeof g.data) && (i += (Ce.test(i) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (i = i.replace(Le, "$1"), u = (Ce.test(i) ? "&" : "?") + "_=" + je++ + u), g.url = i + u), g.ifModified && (C.lastModified[i] && T.setRequestHeader("If-Modified-Since", C.lastModified[i]), C.etag[i] && T.setRequestHeader("If-None-Match", C.etag[i])), (g.data && g.hasContent && !1 !== g.contentType || e.contentType) && T.setRequestHeader("Content-Type", g.contentType), T.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + Ie + "; q=0.01" : "") : g.accepts["*"]), g.headers) T.setRequestHeader(f, g.headers[f]);
                    if (g.beforeSend && (!1 === g.beforeSend.call(b, T, g) || p)) return T.abort();
                    if (j = "abort", v.add(g.complete), T.done(g.success), T.fail(g.error), o = Fe(Re, g, e, T)) {
                        if (T.readyState = 1, m && h.trigger("ajaxSend", [T, g]), p) return T;
                        g.async && g.timeout > 0 && (d = n.setTimeout(function () {
                            T.abort("timeout")
                        }, g.timeout));
                        try {
                            p = !1, o.send(w, E)
                        } catch (t) {
                            if (p) throw t;
                            E(-1, t)
                        }
                    } else E(-1, "No Transport");

                    function E(t, e, r, l) {
                        var s, c, f, u, w, k = e;
                        p || (p = !0, d && n.clearTimeout(d), o = void 0, a = l || "", T.readyState = t > 0 ? 4 : 0, s = t >= 200 && t < 300 || 304 === t, r && (u = function (t, e, o) {
                            for (var r, n, i, a, l = t.contents, s = t.dataTypes;
                                "*" === s[0];) s.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
                            if (r)
                                for (n in l)
                                    if (l[n] && l[n].test(r)) {
                                        s.unshift(n);
                                        break
                                    }
                            if (s[0] in o) i = s[0];
                            else {
                                for (n in o) {
                                    if (!s[0] || t.converters[n + " " + s[0]]) {
                                        i = n;
                                        break
                                    }
                                    a || (a = n)
                                }
                                i = i || a
                            }
                            if (i) return i !== s[0] && s.unshift(i), o[i]
                        }(g, T, r)), u = function (t, e, o, r) {
                            var n, i, a, l, s, d = {},
                                c = t.dataTypes.slice();
                            if (c[1])
                                for (a in t.converters) d[a.toLowerCase()] = t.converters[a];
                            for (i = c.shift(); i;)
                                if (t.responseFields[i] && (o[t.responseFields[i]] = e), !s && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), s = i, i = c.shift())
                                    if ("*" === i) i = s;
                                    else if ("*" !== s && s !== i) {
                                        if (!(a = d[s + " " + i] || d["* " + i]))
                                            for (n in d)
                                                if ((l = n.split(" "))[1] === i && (a = d[s + " " + l[0]] || d["* " + l[0]])) {
                                                    !0 === a ? a = d[n] : !0 !== d[n] && (i = l[0], c.unshift(l[1]));
                                                    break
                                                }
                                        if (!0 !== a)
                                            if (a && t.throws) e = a(e);
                                            else try {
                                                e = a(e)
                                            } catch (t) {
                                                return {
                                                    state: "parsererror",
                                                    error: a ? t : "No conversion from " + s + " to " + i
                                                }
                                            }
                                    }
                            return {
                                state: "success",
                                data: e
                            }
                        }(g, u, T, s), s ? (g.ifModified && ((w = T.getResponseHeader("Last-Modified")) && (C.lastModified[i] = w), (w = T.getResponseHeader("etag")) && (C.etag[i] = w)), 204 === t || "HEAD" === g.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = u.state, c = u.data, s = !(f = u.error))) : (f = k, !t && k || (k = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (e || k) + "", s ? x.resolveWith(b, [c, k, T]) : x.rejectWith(b, [T, k, f]), T.statusCode(y), y = void 0, m && h.trigger(s ? "ajaxSuccess" : "ajaxError", [T, g, s ? c : f]), v.fireWith(b, [T, k]), m && (h.trigger("ajaxComplete", [T, g]), --C.active || C.event.trigger("ajaxStop")))
                    }
                    return T
                },
                getJSON: function (t, e, o) {
                    return C.get(t, e, o, "json")
                },
                getScript: function (t, e) {
                    return C.get(t, void 0, e, "script")
                }
            }), C.each(["get", "post"], function (t, e) {
                C[e] = function (t, o, r, n) {
                    return v(o) && (n = n || r, r = o, o = void 0), C.ajax(C.extend({
                        url: t,
                        type: e,
                        dataType: n,
                        data: o,
                        success: r
                    }, C.isPlainObject(t) && t))
                }
            }), C._evalUrl = function (t) {
                return C.ajax({
                    url: t,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    throws: !0
                })
            }, C.fn.extend({
                wrapAll: function (t) {
                    var e;
                    return this[0] && (v(t) && (t = t.call(this[0])), e = C(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                        for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                        return t
                    }).append(this)), this
                },
                wrapInner: function (t) {
                    return v(t) ? this.each(function (e) {
                        C(this).wrapInner(t.call(this, e))
                    }) : this.each(function () {
                        var e = C(this),
                            o = e.contents();
                        o.length ? o.wrapAll(t) : e.append(t)
                    })
                },
                wrap: function (t) {
                    var e = v(t);
                    return this.each(function (o) {
                        C(this).wrapAll(e ? t.call(this, o) : t)
                    })
                },
                unwrap: function (t) {
                    return this.parent(t).not("body").each(function () {
                        C(this).replaceWith(this.childNodes)
                    }), this
                }
            }), C.expr.pseudos.hidden = function (t) {
                return !C.expr.pseudos.visible(t)
            }, C.expr.pseudos.visible = function (t) {
                return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
            }, C.ajaxSettings.xhr = function () {
                try {
                    return new n.XMLHttpRequest
                } catch (t) { }
            };
            var $e = {
                0: 200,
                1223: 204
            },
                We = C.ajaxSettings.xhr();
            x.cors = !!We && "withCredentials" in We, x.ajax = We = !!We, C.ajaxTransport(function (t) {
                var e, o;
                if (x.cors || We && !t.crossDomain) return {
                    send: function (r, i) {
                        var a, l = t.xhr();
                        if (l.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                            for (a in t.xhrFields) l[a] = t.xhrFields[a];
                        for (a in t.mimeType && l.overrideMimeType && l.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) l.setRequestHeader(a, r[a]);
                        e = function (t) {
                            return function () {
                                e && (e = o = l.onload = l.onerror = l.onabort = l.ontimeout = l.onreadystatechange = null, "abort" === t ? l.abort() : "error" === t ? "number" != typeof l.status ? i(0, "error") : i(l.status, l.statusText) : i($e[l.status] || l.status, l.statusText, "text" !== (l.responseType || "text") || "string" != typeof l.responseText ? {
                                    binary: l.response
                                } : {
                                        text: l.responseText
                                    }, l.getAllResponseHeaders()))
                            }
                        }, l.onload = e(), o = l.onerror = l.ontimeout = e("error"), void 0 !== l.onabort ? l.onabort = o : l.onreadystatechange = function () {
                            4 === l.readyState && n.setTimeout(function () {
                                e && o()
                            })
                        }, e = e("abort");
                        try {
                            l.send(t.hasContent && t.data || null)
                        } catch (t) {
                            if (e) throw t
                        }
                    },
                    abort: function () {
                        e && e()
                    }
                }
            }), C.ajaxPrefilter(function (t) {
                t.crossDomain && (t.contents.script = !1)
            }), C.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function (t) {
                        return C.globalEval(t), t
                    }
                }
            }), C.ajaxPrefilter("script", function (t) {
                void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
            }), C.ajaxTransport("script", function (t) {
                var e, o;
                if (t.crossDomain) return {
                    send: function (r, n) {
                        e = C("<script>").prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", o = function (t) {
                            e.remove(), o = null, t && n("error" === t.type ? 404 : 200, t.type)
                        }), l.head.appendChild(e[0])
                    },
                    abort: function () {
                        o && o()
                    }
                }
            });
            var _e, Xe = [],
                Ve = /(=)\?(?=&|$)|\?\?/;
            C.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var t = Xe.pop() || C.expando + "_" + je++;
                    return this[t] = !0, t
                }
            }), C.ajaxPrefilter("json jsonp", function (t, e, o) {
                var r, i, a, l = !1 !== t.jsonp && (Ve.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ve.test(t.data) && "data");
                if (l || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = v(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, l ? t[l] = t[l].replace(Ve, "$1" + r) : !1 !== t.jsonp && (t.url += (Ce.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function () {
                    return a || C.error(r + " was not called"), a[0]
                }, t.dataTypes[0] = "json", i = n[r], n[r] = function () {
                    a = arguments
                }, o.always(function () {
                    void 0 === i ? C(n).removeProp(r) : n[r] = i, t[r] && (t.jsonpCallback = e.jsonpCallback, Xe.push(r)), a && v(i) && i(a[0]), a = i = void 0
                }), "script"
            }), x.createHTMLDocument = ((_e = l.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === _e.childNodes.length), C.parseHTML = function (t, e, o) {
                return "string" != typeof t ? [] : ("boolean" == typeof e && (o = e, e = !1), e || (x.createHTMLDocument ? ((r = (e = l.implementation.createHTMLDocument("")).createElement("base")).href = l.location.href, e.head.appendChild(r)) : e = l), n = L.exec(t), i = !o && [], n ? [e.createElement(n[1])] : (n = kt([t], e, i), i && i.length && C(i).remove(), C.merge([], n.childNodes)));
                var r, n, i
            }, C.fn.load = function (t, e, o) {
                var n, i, a, l = this,
                    s = t.indexOf(" ");
                return s > -1 && (n = be(t.slice(s)), t = t.slice(0, s)), v(e) ? (o = e, e = void 0) : e && "object" === (void 0 === e ? "undefined" : r(e)) && (i = "POST"), l.length > 0 && C.ajax({
                    url: t,
                    type: i || "GET",
                    dataType: "html",
                    data: e
                }).done(function (t) {
                    a = arguments, l.html(n ? C("<div>").append(C.parseHTML(t)).find(n) : t)
                }).always(o && function (t, e) {
                    l.each(function () {
                        o.apply(this, a || [t.responseText, e, t])
                    })
                }), this
            }, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
                C.fn[e] = function (t) {
                    return this.on(e, t)
                }
            }), C.expr.pseudos.animated = function (t) {
                return C.grep(C.timers, function (e) {
                    return t === e.elem
                }).length
            }, C.offset = {
                setOffset: function (t, e, o) {
                    var r, n, i, a, l, s, d = C.css(t, "position"),
                        c = C(t),
                        p = {};
                    "static" === d && (t.style.position = "relative"), l = c.offset(), i = C.css(t, "top"), s = C.css(t, "left"), ("absolute" === d || "fixed" === d) && (i + s).indexOf("auto") > -1 ? (a = (r = c.position()).top, n = r.left) : (a = parseFloat(i) || 0, n = parseFloat(s) || 0), v(e) && (e = e.call(t, o, C.extend({}, l))), null != e.top && (p.top = e.top - l.top + a), null != e.left && (p.left = e.left - l.left + n), "using" in e ? e.using.call(t, p) : c.css(p)
                }
            }, C.fn.extend({
                offset: function (t) {
                    if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                        C.offset.setOffset(this, t, e)
                    });
                    var e, o, r = this[0];
                    return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), o = r.ownerDocument.defaultView, {
                        top: e.top + o.pageYOffset,
                        left: e.left + o.pageXOffset
                    }) : {
                            top: 0,
                            left: 0
                        } : void 0
                },
                position: function () {
                    if (this[0]) {
                        var t, e, o, r = this[0],
                            n = {
                                top: 0,
                                left: 0
                            };
                        if ("fixed" === C.css(r, "position")) e = r.getBoundingClientRect();
                        else {
                            for (e = this.offset(), o = r.ownerDocument, t = r.offsetParent || o.documentElement; t && (t === o.body || t === o.documentElement) && "static" === C.css(t, "position");) t = t.parentNode;
                            t && t !== r && 1 === t.nodeType && ((n = C(t).offset()).top += C.css(t, "borderTopWidth", !0), n.left += C.css(t, "borderLeftWidth", !0))
                        }
                        return {
                            top: e.top - n.top - C.css(r, "marginTop", !0),
                            left: e.left - n.left - C.css(r, "marginLeft", !0)
                        }
                    }
                },
                offsetParent: function () {
                    return this.map(function () {
                        for (var t = this.offsetParent; t && "static" === C.css(t, "position");) t = t.offsetParent;
                        return t || jt
                    })
                }
            }), C.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function (t, e) {
                var o = "pageYOffset" === e;
                C.fn[t] = function (r) {
                    return X(this, function (t, r, n) {
                        var i;
                        if (y(t) ? i = t : 9 === t.nodeType && (i = t.defaultView), void 0 === n) return i ? i[e] : t[r];
                        i ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset) : t[r] = n
                    }, t, r, arguments.length)
                }
            }), C.each(["top", "left"], function (t, e) {
                C.cssHooks[e] = _t(x.pixelPosition, function (t, o) {
                    if (o) return o = Wt(t, e), Ft.test(o) ? C(t).position()[e] + "px" : o
                })
            }), C.each({
                Height: "height",
                Width: "width"
            }, function (t, e) {
                C.each({
                    padding: "inner" + t,
                    content: e,
                    "": "outer" + t
                }, function (o, r) {
                    C.fn[r] = function (n, i) {
                        var a = arguments.length && (o || "boolean" != typeof n),
                            l = o || (!0 === n || !0 === i ? "margin" : "border");
                        return X(this, function (e, o, n) {
                            var i;
                            return y(e) ? 0 === r.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + t], i["scroll" + t], e.body["offset" + t], i["offset" + t], i["client" + t])) : void 0 === n ? C.css(e, o, l) : C.style(e, o, n, l)
                        }, e, a ? n : void 0, a)
                    }
                })
            }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
                C.fn[e] = function (t, o) {
                    return arguments.length > 0 ? this.on(e, null, t, o) : this.trigger(e)
                }
            }), C.fn.extend({
                hover: function (t, e) {
                    return this.mouseenter(t).mouseleave(e || t)
                }
            }), C.fn.extend({
                bind: function (t, e, o) {
                    return this.on(t, null, e, o)
                },
                unbind: function (t, e) {
                    return this.off(t, null, e)
                },
                delegate: function (t, e, o, r) {
                    return this.on(e, t, o, r)
                },
                undelegate: function (t, e, o) {
                    return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", o)
                }
            }), C.proxy = function (t, e) {
                var o, r, n;
                if ("string" == typeof e && (o = t[e], e = t, t = o), v(t)) return r = d.call(arguments, 2), (n = function () {
                    return t.apply(e || this, r.concat(d.call(arguments)))
                }).guid = t.guid = t.guid || C.guid++ , n
            }, C.holdReady = function (t) {
                t ? C.readyWait++ : C.ready(!0)
            }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = D, C.isFunction = v, C.isWindow = y, C.camelCase = Y, C.type = j, C.now = Date.now, C.isNumeric = function (t) {
                var e = C.type(t);
                return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
            }, void 0 === (o = function () {
                return C
            }.apply(e, [])) || (t.exports = o);
            var Ge = n.jQuery,
                Je = n.$;
            return C.noConflict = function (t) {
                return n.$ === C && (n.$ = Je), t && n.jQuery === C && (n.jQuery = Ge), C
            }, i || (n.jQuery = n.$ = C), C
        })
    }).call(this, o(9)(t))
}, function (t, e, o) {
    (function (t) {
        o(8), o(5);
        var e, r = o(3),
            n = (e = r) && e.__esModule ? e : {
                default: e
            };
        o(2), document.getElementById("fillthis").innerHTML = getText(), t("#fillthiswithjquery").html("Filled by Jquery!");
        var i = new n.default;
        document.getElementById("fillthiswithes6lib").innerHTML = i.getData()
    }).call(this, o(10))
}]);