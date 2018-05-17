!function (e) { var t = {}; function n(r) { if (t[r]) return t[r].exports; var o = t[r] = { i: r, l: !1, exports: {} }; return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports } n.m = e, n.c = t, n.d = function (e, t, r) { n.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: r }) }, n.r = function (e) { Object.defineProperty(e, "__esModule", { value: !0 }) }, n.n = function (e) { var t = e && e.__esModule ? function () { return e.default } : function () { return e }; return n.d(t, "a", t), t }, n.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "", n(n.s = 1) }([function (e, t) { getText = function () { return "Data from getText function in lib.js" } }, function (e, t, n) { n(0), document.getElementById("fillthis").innerHTML = getText() }]);


//Immediately invoking function
//! function(){}();=(function(e){}();)=!function func1(e){}();=function expression 
//!,()   turns function into an expression
! function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, n.r = function (e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 1)
}([function (e, t) {
    getText = function () {
        return "Data from getText function in lib.js"
    }
}, function (e, t, n) {
    n(0), document.getElementById("fillthis").innerHTML = getText()
        }]);


//Webpack generate

(function (modules) {
    // The module cache
    var installedModules = {};

    // The require function
    function __webpack_require__(moduleId) {
        // Check if module is in cache
        // Create a new module (and put it into the cache)
        // Execute the module function
        // Flag the module as loaded
        // Return the exports of the module
    }


    // expose the modules object (__webpack_modules__)
    // expose the module cache
    // Load entry module and return exports
    return __webpack_require__(0);
})
    /************************************************************************/
    ([
        // index.js - our application logic
        /* 0 */
        function (module, exports, __webpack_require__) {

            var multiply = __webpack_require__(1);
            var sum = __webpack_require__(2);

            var totalMultiply = multiply(5, 3);
            var totalSum = sum(5, 3);

            console.log('Product of 5 and 3 = ' + totalMultiply);
            console.log('Sum of 5 and 3 = ' + totalSum);
        },
        // multiply.js
        /* 1 */
        function (module, exports, __webpack_require__) {

            var sum = __webpack_require__(2);

            var multiply = function (a, b) {
                var total = 0;
                for (var i = 0; i < b; i++) {
                    total = sum(a, total);
                }
                return total;
            };
            module.exports = multiply;
        },
        // sum.js
        /* 2 */
        function (module, exports) {

            var sum = function (a, b) {
                return a + b;
            };
            module.exports = sum;
        }
    ]);