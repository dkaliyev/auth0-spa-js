!(function (t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define(e)
    : ((t =
        'undefined' != typeof globalThis
          ? globalThis
          : t || self).createAuth0Client = e());
})(this, function () {
  'use strict';
  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */ var t = function (
    e,
    n
  ) {
    return (t =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, e) {
          t.__proto__ = e;
        }) ||
      function (t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
      })(e, n);
  };
  function e(e, n) {
    function i() {
      this.constructor = e;
    }
    t(e, n),
      (e.prototype =
        null === n ? Object.create(n) : ((i.prototype = n.prototype), new i()));
  }
  var n = function () {
    return (n =
      Object.assign ||
      function (t) {
        for (var e, n = 1, i = arguments.length; n < i; n++)
          for (var r in (e = arguments[n]))
            Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        return t;
      }).apply(this, arguments);
  };
  function i(t, e) {
    var n = {};
    for (var i in t)
      Object.prototype.hasOwnProperty.call(t, i) &&
        e.indexOf(i) < 0 &&
        (n[i] = t[i]);
    if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
      var r = 0;
      for (i = Object.getOwnPropertySymbols(t); r < i.length; r++)
        e.indexOf(i[r]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, i[r]) &&
          (n[i[r]] = t[i[r]]);
    }
    return n;
  }
  function r(t, e, n, i) {
    return new (n || (n = Promise))(function (r, o) {
      function c(t) {
        try {
          a(i.next(t));
        } catch (t) {
          o(t);
        }
      }
      function s(t) {
        try {
          a(i.throw(t));
        } catch (t) {
          o(t);
        }
      }
      function a(t) {
        t.done
          ? r(t.value)
          : new n(function (e) {
              e(t.value);
            }).then(c, s);
      }
      a((i = i.apply(t, e || [])).next());
    });
  }
  function o(t, e) {
    var n,
      i,
      r,
      o,
      c = {
        label: 0,
        sent: function () {
          if (1 & r[0]) throw r[1];
          return r[1];
        },
        trys: [],
        ops: []
      };
    return (
      (o = { next: s(0), throw: s(1), return: s(2) }),
      'function' == typeof Symbol &&
        (o[Symbol.iterator] = function () {
          return this;
        }),
      o
    );
    function s(o) {
      return function (s) {
        return (function (o) {
          if (n) throw new TypeError('Generator is already executing.');
          for (; c; )
            try {
              if (
                ((n = 1),
                i &&
                  (r =
                    2 & o[0]
                      ? i.return
                      : o[0]
                      ? i.throw || ((r = i.return) && r.call(i), 0)
                      : i.next) &&
                  !(r = r.call(i, o[1])).done)
              )
                return r;
              switch (((i = 0), r && (o = [2 & o[0], r.value]), o[0])) {
                case 0:
                case 1:
                  r = o;
                  break;
                case 4:
                  return c.label++, { value: o[1], done: !1 };
                case 5:
                  c.label++, (i = o[1]), (o = [0]);
                  continue;
                case 7:
                  (o = c.ops.pop()), c.trys.pop();
                  continue;
                default:
                  if (
                    !((r = c.trys),
                    (r = r.length > 0 && r[r.length - 1]) ||
                      (6 !== o[0] && 2 !== o[0]))
                  ) {
                    c = 0;
                    continue;
                  }
                  if (3 === o[0] && (!r || (o[1] > r[0] && o[1] < r[3]))) {
                    c.label = o[1];
                    break;
                  }
                  if (6 === o[0] && c.label < r[1]) {
                    (c.label = r[1]), (r = o);
                    break;
                  }
                  if (r && c.label < r[2]) {
                    (c.label = r[2]), c.ops.push(o);
                    break;
                  }
                  r[2] && c.ops.pop(), c.trys.pop();
                  continue;
              }
              o = e.call(t, c);
            } catch (t) {
              (o = [6, t]), (i = 0);
            } finally {
              n = r = 0;
            }
          if (5 & o[0]) throw o[1];
          return { value: o[0] ? o[1] : void 0, done: !0 };
        })([o, s]);
      };
    }
  }
  var c =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : 'undefined' != typeof self
      ? self
      : {};
  function s(t) {
    return t &&
      t.__esModule &&
      Object.prototype.hasOwnProperty.call(t, 'default')
      ? t.default
      : t;
  }
  function a(t, e) {
    return t((e = { exports: {} }), e.exports), e.exports;
  }
  var u = function (t) {
      return t && t.Math == Math && t;
    },
    l =
      u('object' == typeof globalThis && globalThis) ||
      u('object' == typeof window && window) ||
      u('object' == typeof self && self) ||
      u('object' == typeof c && c) ||
      Function('return this')(),
    d = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    },
    g = !d(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          }
        })[1]
      );
    }),
    f = {}.propertyIsEnumerable,
    I = Object.getOwnPropertyDescriptor,
    h = {
      f:
        I && !f.call({ 1: 2 }, 1)
          ? function (t) {
              var e = I(this, t);
              return !!e && e.enumerable;
            }
          : f
    },
    p = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e
      };
    },
    y = {}.toString,
    b = function (t) {
      return y.call(t).slice(8, -1);
    },
    m = ''.split,
    B = d(function () {
      return !Object('z').propertyIsEnumerable(0);
    })
      ? function (t) {
          return 'String' == b(t) ? m.call(t, '') : Object(t);
        }
      : Object,
    C = function (t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    },
    v = function (t) {
      return B(C(t));
    },
    F = function (t) {
      return 'object' == typeof t ? null !== t : 'function' == typeof t;
    },
    U = function (t, e) {
      if (!F(t)) return t;
      var n, i;
      if (e && 'function' == typeof (n = t.toString) && !F((i = n.call(t))))
        return i;
      if ('function' == typeof (n = t.valueOf) && !F((i = n.call(t)))) return i;
      if (!e && 'function' == typeof (n = t.toString) && !F((i = n.call(t))))
        return i;
      throw TypeError("Can't convert object to primitive value");
    },
    V = {}.hasOwnProperty,
    S = function (t, e) {
      return V.call(t, e);
    },
    Z = l.document,
    X = F(Z) && F(Z.createElement),
    x = function (t) {
      return X ? Z.createElement(t) : {};
    },
    w =
      !g &&
      !d(function () {
        return (
          7 !=
          Object.defineProperty(x('div'), 'a', {
            get: function () {
              return 7;
            }
          }).a
        );
      }),
    G = Object.getOwnPropertyDescriptor,
    A = {
      f: g
        ? G
        : function (t, e) {
            if (((t = v(t)), (e = U(e, !0)), w))
              try {
                return G(t, e);
              } catch (t) {}
            if (S(t, e)) return p(!h.f.call(t, e), t[e]);
          }
    },
    Q = function (t) {
      if (!F(t)) throw TypeError(String(t) + ' is not an object');
      return t;
    },
    R = Object.defineProperty,
    J = {
      f: g
        ? R
        : function (t, e, n) {
            if ((Q(t), (e = U(e, !0)), Q(n), w))
              try {
                return R(t, e, n);
              } catch (t) {}
            if ('get' in n || 'set' in n)
              throw TypeError('Accessors not supported');
            return 'value' in n && (t[e] = n.value), t;
          }
    },
    H = g
      ? function (t, e, n) {
          return J.f(t, e, p(1, n));
        }
      : function (t, e, n) {
          return (t[e] = n), t;
        },
    L = function (t, e) {
      try {
        H(l, t, e);
      } catch (n) {
        l[t] = e;
      }
      return e;
    },
    W = '__core-js_shared__',
    k = l[W] || L(W, {}),
    E = Function.toString;
  'function' != typeof k.inspectSource &&
    (k.inspectSource = function (t) {
      return E.call(t);
    });
  var T,
    N,
    Y,
    K = k.inspectSource,
    O = l.WeakMap,
    j = 'function' == typeof O && /native code/.test(K(O)),
    P = a(function (t) {
      (t.exports = function (t, e) {
        return k[t] || (k[t] = void 0 !== e ? e : {});
      })('versions', []).push({
        version: '3.6.5',
        mode: 'global',
        copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
      });
    }),
    z = 0,
    _ = Math.random(),
    D = function (t) {
      return (
        'Symbol(' +
        String(void 0 === t ? '' : t) +
        ')_' +
        (++z + _).toString(36)
      );
    },
    M = P('keys'),
    q = function (t) {
      return M[t] || (M[t] = D(t));
    },
    $ = {},
    tt = l.WeakMap;
  if (j) {
    var et = new tt(),
      nt = et.get,
      it = et.has,
      rt = et.set;
    (T = function (t, e) {
      return rt.call(et, t, e), e;
    }),
      (N = function (t) {
        return nt.call(et, t) || {};
      }),
      (Y = function (t) {
        return it.call(et, t);
      });
  } else {
    var ot = q('state');
    ($[ot] = !0),
      (T = function (t, e) {
        return H(t, ot, e), e;
      }),
      (N = function (t) {
        return S(t, ot) ? t[ot] : {};
      }),
      (Y = function (t) {
        return S(t, ot);
      });
  }
  var ct,
    st = {
      set: T,
      get: N,
      has: Y,
      enforce: function (t) {
        return Y(t) ? N(t) : T(t, {});
      },
      getterFor: function (t) {
        return function (e) {
          var n;
          if (!F(e) || (n = N(e)).type !== t)
            throw TypeError('Incompatible receiver, ' + t + ' required');
          return n;
        };
      }
    },
    at = a(function (t) {
      var e = st.get,
        n = st.enforce,
        i = String(String).split('String');
      (t.exports = function (t, e, r, o) {
        var c = !!o && !!o.unsafe,
          s = !!o && !!o.enumerable,
          a = !!o && !!o.noTargetGet;
        'function' == typeof r &&
          ('string' != typeof e || S(r, 'name') || H(r, 'name', e),
          (n(r).source = i.join('string' == typeof e ? e : ''))),
          t !== l
            ? (c ? !a && t[e] && (s = !0) : delete t[e],
              s ? (t[e] = r) : H(t, e, r))
            : s
            ? (t[e] = r)
            : L(e, r);
      })(Function.prototype, 'toString', function () {
        return ('function' == typeof this && e(this).source) || K(this);
      });
    }),
    ut = l,
    lt = function (t) {
      return 'function' == typeof t ? t : void 0;
    },
    dt = function (t, e) {
      return arguments.length < 2
        ? lt(ut[t]) || lt(l[t])
        : (ut[t] && ut[t][e]) || (l[t] && l[t][e]);
    },
    gt = Math.ceil,
    ft = Math.floor,
    It = function (t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? ft : gt)(t);
    },
    ht = Math.min,
    pt = function (t) {
      return t > 0 ? ht(It(t), 9007199254740991) : 0;
    },
    yt = Math.max,
    bt = Math.min,
    mt = function (t) {
      return function (e, n, i) {
        var r,
          o = v(e),
          c = pt(o.length),
          s = (function (t, e) {
            var n = It(t);
            return n < 0 ? yt(n + e, 0) : bt(n, e);
          })(i, c);
        if (t && n != n) {
          for (; c > s; ) if ((r = o[s++]) != r) return !0;
        } else
          for (; c > s; s++)
            if ((t || s in o) && o[s] === n) return t || s || 0;
        return !t && -1;
      };
    },
    Bt = { includes: mt(!0), indexOf: mt(!1) },
    Ct = Bt.indexOf,
    vt = function (t, e) {
      var n,
        i = v(t),
        r = 0,
        o = [];
      for (n in i) !S($, n) && S(i, n) && o.push(n);
      for (; e.length > r; ) S(i, (n = e[r++])) && (~Ct(o, n) || o.push(n));
      return o;
    },
    Ft = [
      'constructor',
      'hasOwnProperty',
      'isPrototypeOf',
      'propertyIsEnumerable',
      'toLocaleString',
      'toString',
      'valueOf'
    ],
    Ut = Ft.concat('length', 'prototype'),
    Vt = {
      f:
        Object.getOwnPropertyNames ||
        function (t) {
          return vt(t, Ut);
        }
    },
    St = { f: Object.getOwnPropertySymbols },
    Zt =
      dt('Reflect', 'ownKeys') ||
      function (t) {
        var e = Vt.f(Q(t)),
          n = St.f;
        return n ? e.concat(n(t)) : e;
      },
    Xt = function (t, e) {
      for (var n = Zt(e), i = J.f, r = A.f, o = 0; o < n.length; o++) {
        var c = n[o];
        S(t, c) || i(t, c, r(e, c));
      }
    },
    xt = /#|\.prototype\./,
    wt = function (t, e) {
      var n = At[Gt(t)];
      return n == Rt || (n != Qt && ('function' == typeof e ? d(e) : !!e));
    },
    Gt = (wt.normalize = function (t) {
      return String(t).replace(xt, '.').toLowerCase();
    }),
    At = (wt.data = {}),
    Qt = (wt.NATIVE = 'N'),
    Rt = (wt.POLYFILL = 'P'),
    Jt = wt,
    Ht = A.f,
    Lt = function (t, e) {
      var n,
        i,
        r,
        o,
        c,
        s = t.target,
        a = t.global,
        u = t.stat;
      if ((n = a ? l : u ? l[s] || L(s, {}) : (l[s] || {}).prototype))
        for (i in e) {
          if (
            ((o = e[i]),
            (r = t.noTargetGet ? (c = Ht(n, i)) && c.value : n[i]),
            !Jt(a ? i : s + (u ? '.' : '#') + i, t.forced) && void 0 !== r)
          ) {
            if (typeof o == typeof r) continue;
            Xt(o, r);
          }
          (t.sham || (r && r.sham)) && H(o, 'sham', !0), at(n, i, o, t);
        }
    },
    Wt =
      !!Object.getOwnPropertySymbols &&
      !d(function () {
        return !String(Symbol());
      }),
    kt = Wt && !Symbol.sham && 'symbol' == typeof Symbol.iterator,
    Et = P('wks'),
    Tt = l.Symbol,
    Nt = kt ? Tt : (Tt && Tt.withoutSetter) || D,
    Yt = function (t) {
      return (
        S(Et, t) ||
          (Wt && S(Tt, t) ? (Et[t] = Tt[t]) : (Et[t] = Nt('Symbol.' + t))),
        Et[t]
      );
    },
    Kt = Yt('match'),
    Ot = function (t) {
      if (
        (function (t) {
          var e;
          return F(t) && (void 0 !== (e = t[Kt]) ? !!e : 'RegExp' == b(t));
        })(t)
      )
        throw TypeError("The method doesn't accept regular expressions");
      return t;
    },
    jt = Yt('match'),
    Pt = function (t) {
      var e = /./;
      try {
        '/./'[t](e);
      } catch (n) {
        try {
          return (e[jt] = !1), '/./'[t](e);
        } catch (t) {}
      }
      return !1;
    },
    zt = A.f,
    _t = ''.startsWith,
    Dt = Math.min,
    Mt = Pt('startsWith'),
    qt = !(
      Mt || ((ct = zt(String.prototype, 'startsWith')), !ct || ct.writable)
    );
  Lt(
    { target: 'String', proto: !0, forced: !qt && !Mt },
    {
      startsWith: function (t) {
        var e = String(C(this));
        Ot(t);
        var n = pt(Dt(arguments.length > 1 ? arguments[1] : void 0, e.length)),
          i = String(t);
        return _t ? _t.call(e, i, n) : e.slice(n, n + i.length) === i;
      }
    }
  );
  var $t,
    te,
    ee = function (t) {
      if ('function' != typeof t)
        throw TypeError(String(t) + ' is not a function');
      return t;
    },
    ne = function (t, e, n) {
      if ((ee(t), void 0 === e)) return t;
      switch (n) {
        case 0:
          return function () {
            return t.call(e);
          };
        case 1:
          return function (n) {
            return t.call(e, n);
          };
        case 2:
          return function (n, i) {
            return t.call(e, n, i);
          };
        case 3:
          return function (n, i, r) {
            return t.call(e, n, i, r);
          };
      }
      return function () {
        return t.apply(e, arguments);
      };
    },
    ie = Function.call,
    re = function (t, e, n) {
      return ne(ie, l[t].prototype[e], n);
    },
    oe =
      (re('String', 'startsWith'),
      Array.isArray ||
        function (t) {
          return 'Array' == b(t);
        }),
    ce = function (t) {
      return Object(C(t));
    },
    se = function (t, e, n) {
      var i = U(e);
      i in t ? J.f(t, i, p(0, n)) : (t[i] = n);
    },
    ae = Yt('species'),
    ue = function (t, e) {
      var n;
      return (
        oe(t) &&
          ('function' != typeof (n = t.constructor) ||
          (n !== Array && !oe(n.prototype))
            ? F(n) && null === (n = n[ae]) && (n = void 0)
            : (n = void 0)),
        new (void 0 === n ? Array : n)(0 === e ? 0 : e)
      );
    },
    le = dt('navigator', 'userAgent') || '',
    de = l.process,
    ge = de && de.versions,
    fe = ge && ge.v8;
  fe
    ? (te = ($t = fe.split('.'))[0] + $t[1])
    : le &&
      (!($t = le.match(/Edge\/(\d+)/)) || $t[1] >= 74) &&
      ($t = le.match(/Chrome\/(\d+)/)) &&
      (te = $t[1]);
  var Ie = te && +te,
    he = Yt('species'),
    pe = Yt('isConcatSpreadable'),
    ye = 9007199254740991,
    be = 'Maximum allowed index exceeded',
    me =
      Ie >= 51 ||
      !d(function () {
        var t = [];
        return (t[pe] = !1), t.concat()[0] !== t;
      }),
    Be = (function (t) {
      return (
        Ie >= 51 ||
        !d(function () {
          var e = [];
          return (
            ((e.constructor = {})[he] = function () {
              return { foo: 1 };
            }),
            1 !== e[t](Boolean).foo
          );
        })
      );
    })('concat'),
    Ce = function (t) {
      if (!F(t)) return !1;
      var e = t[pe];
      return void 0 !== e ? !!e : oe(t);
    };
  Lt(
    { target: 'Array', proto: !0, forced: !me || !Be },
    {
      concat: function (t) {
        var e,
          n,
          i,
          r,
          o,
          c = ce(this),
          s = ue(c, 0),
          a = 0;
        for (e = -1, i = arguments.length; e < i; e++)
          if (Ce((o = -1 === e ? c : arguments[e]))) {
            if (a + (r = pt(o.length)) > ye) throw TypeError(be);
            for (n = 0; n < r; n++, a++) n in o && se(s, a, o[n]);
          } else {
            if (a >= ye) throw TypeError(be);
            se(s, a++, o);
          }
        return (s.length = a), s;
      }
    }
  );
  var ve = {};
  ve[Yt('toStringTag')] = 'z';
  var Fe = '[object z]' === String(ve),
    Ue = Yt('toStringTag'),
    Ve =
      'Arguments' ==
      b(
        (function () {
          return arguments;
        })()
      ),
    Se = Fe
      ? b
      : function (t) {
          var e, n, i;
          return void 0 === t
            ? 'Undefined'
            : null === t
            ? 'Null'
            : 'string' ==
              typeof (n = (function (t, e) {
                try {
                  return t[e];
                } catch (t) {}
              })((e = Object(t)), Ue))
            ? n
            : Ve
            ? b(e)
            : 'Object' == (i = b(e)) && 'function' == typeof e.callee
            ? 'Arguments'
            : i;
        },
    Ze = Fe
      ? {}.toString
      : function () {
          return '[object ' + Se(this) + ']';
        };
  Fe || at(Object.prototype, 'toString', Ze, { unsafe: !0 });
  var Xe,
    xe =
      Object.keys ||
      function (t) {
        return vt(t, Ft);
      },
    we = g
      ? Object.defineProperties
      : function (t, e) {
          Q(t);
          for (var n, i = xe(e), r = i.length, o = 0; r > o; )
            J.f(t, (n = i[o++]), e[n]);
          return t;
        },
    Ge = dt('document', 'documentElement'),
    Ae = q('IE_PROTO'),
    Qe = function () {},
    Re = function (t) {
      return '<script>' + t + '</' + 'script>';
    },
    Je = function () {
      try {
        Xe = document.domain && new ActiveXObject('htmlfile');
      } catch (t) {}
      var t, e;
      Je = Xe
        ? (function (t) {
            t.write(Re('')), t.close();
            var e = t.parentWindow.Object;
            return (t = null), e;
          })(Xe)
        : (((e = x('iframe')).style.display = 'none'),
          Ge.appendChild(e),
          (e.src = String('javascript:')),
          (t = e.contentWindow.document).open(),
          t.write(Re('document.F=Object')),
          t.close(),
          t.F);
      for (var n = Ft.length; n--; ) delete Je.prototype[Ft[n]];
      return Je();
    };
  $[Ae] = !0;
  var He =
      Object.create ||
      function (t, e) {
        var n;
        return (
          null !== t
            ? ((Qe.prototype = Q(t)),
              (n = new Qe()),
              (Qe.prototype = null),
              (n[Ae] = t))
            : (n = Je()),
          void 0 === e ? n : we(n, e)
        );
      },
    Le = Vt.f,
    We = {}.toString,
    ke =
      'object' == typeof window && window && Object.getOwnPropertyNames
        ? Object.getOwnPropertyNames(window)
        : [],
    Ee = {
      f: function (t) {
        return ke && '[object Window]' == We.call(t)
          ? (function (t) {
              try {
                return Le(t);
              } catch (t) {
                return ke.slice();
              }
            })(t)
          : Le(v(t));
      }
    },
    Te = { f: Yt },
    Ne = J.f,
    Ye = function (t) {
      var e = ut.Symbol || (ut.Symbol = {});
      S(e, t) || Ne(e, t, { value: Te.f(t) });
    },
    Ke = J.f,
    Oe = Yt('toStringTag'),
    je = function (t, e, n) {
      t &&
        !S((t = n ? t : t.prototype), Oe) &&
        Ke(t, Oe, { configurable: !0, value: e });
    },
    Pe = [].push,
    ze = function (t) {
      var e = 1 == t,
        n = 2 == t,
        i = 3 == t,
        r = 4 == t,
        o = 6 == t,
        c = 5 == t || o;
      return function (s, a, u, l) {
        for (
          var d,
            g,
            f = ce(s),
            I = B(f),
            h = ne(a, u, 3),
            p = pt(I.length),
            y = 0,
            b = l || ue,
            m = e ? b(s, p) : n ? b(s, 0) : void 0;
          p > y;
          y++
        )
          if ((c || y in I) && ((g = h((d = I[y]), y, f)), t))
            if (e) m[y] = g;
            else if (g)
              switch (t) {
                case 3:
                  return !0;
                case 5:
                  return d;
                case 6:
                  return y;
                case 2:
                  Pe.call(m, d);
              }
            else if (r) return !1;
        return o ? -1 : i || r ? r : m;
      };
    },
    _e = {
      forEach: ze(0),
      map: ze(1),
      filter: ze(2),
      some: ze(3),
      every: ze(4),
      find: ze(5),
      findIndex: ze(6)
    }.forEach,
    De = q('hidden'),
    Me = 'Symbol',
    qe = Yt('toPrimitive'),
    $e = st.set,
    tn = st.getterFor(Me),
    en = Object.prototype,
    nn = l.Symbol,
    rn = dt('JSON', 'stringify'),
    on = A.f,
    cn = J.f,
    sn = Ee.f,
    an = h.f,
    un = P('symbols'),
    ln = P('op-symbols'),
    dn = P('string-to-symbol-registry'),
    gn = P('symbol-to-string-registry'),
    fn = P('wks'),
    In = l.QObject,
    hn = !In || !In.prototype || !In.prototype.findChild,
    pn =
      g &&
      d(function () {
        return (
          7 !=
          He(
            cn({}, 'a', {
              get: function () {
                return cn(this, 'a', { value: 7 }).a;
              }
            })
          ).a
        );
      })
        ? function (t, e, n) {
            var i = on(en, e);
            i && delete en[e], cn(t, e, n), i && t !== en && cn(en, e, i);
          }
        : cn,
    yn = function (t, e) {
      var n = (un[t] = He(nn.prototype));
      return (
        $e(n, { type: Me, tag: t, description: e }), g || (n.description = e), n
      );
    },
    bn = kt
      ? function (t) {
          return 'symbol' == typeof t;
        }
      : function (t) {
          return Object(t) instanceof nn;
        },
    mn = function (t, e, n) {
      t === en && mn(ln, e, n), Q(t);
      var i = U(e, !0);
      return (
        Q(n),
        S(un, i)
          ? (n.enumerable
              ? (S(t, De) && t[De][i] && (t[De][i] = !1),
                (n = He(n, { enumerable: p(0, !1) })))
              : (S(t, De) || cn(t, De, p(1, {})), (t[De][i] = !0)),
            pn(t, i, n))
          : cn(t, i, n)
      );
    },
    Bn = function (t, e) {
      Q(t);
      var n = v(e),
        i = xe(n).concat(Un(n));
      return (
        _e(i, function (e) {
          (g && !Cn.call(n, e)) || mn(t, e, n[e]);
        }),
        t
      );
    },
    Cn = function (t) {
      var e = U(t, !0),
        n = an.call(this, e);
      return (
        !(this === en && S(un, e) && !S(ln, e)) &&
        (!(n || !S(this, e) || !S(un, e) || (S(this, De) && this[De][e])) || n)
      );
    },
    vn = function (t, e) {
      var n = v(t),
        i = U(e, !0);
      if (n !== en || !S(un, i) || S(ln, i)) {
        var r = on(n, i);
        return (
          !r || !S(un, i) || (S(n, De) && n[De][i]) || (r.enumerable = !0), r
        );
      }
    },
    Fn = function (t) {
      var e = sn(v(t)),
        n = [];
      return (
        _e(e, function (t) {
          S(un, t) || S($, t) || n.push(t);
        }),
        n
      );
    },
    Un = function (t) {
      var e = t === en,
        n = sn(e ? ln : v(t)),
        i = [];
      return (
        _e(n, function (t) {
          !S(un, t) || (e && !S(en, t)) || i.push(un[t]);
        }),
        i
      );
    };
  if (
    (Wt ||
      (at(
        (nn = function () {
          if (this instanceof nn)
            throw TypeError('Symbol is not a constructor');
          var t =
              arguments.length && void 0 !== arguments[0]
                ? String(arguments[0])
                : void 0,
            e = D(t),
            n = function (t) {
              this === en && n.call(ln, t),
                S(this, De) && S(this[De], e) && (this[De][e] = !1),
                pn(this, e, p(1, t));
            };
          return g && hn && pn(en, e, { configurable: !0, set: n }), yn(e, t);
        }).prototype,
        'toString',
        function () {
          return tn(this).tag;
        }
      ),
      at(nn, 'withoutSetter', function (t) {
        return yn(D(t), t);
      }),
      (h.f = Cn),
      (J.f = mn),
      (A.f = vn),
      (Vt.f = Ee.f = Fn),
      (St.f = Un),
      (Te.f = function (t) {
        return yn(Yt(t), t);
      }),
      g &&
        (cn(nn.prototype, 'description', {
          configurable: !0,
          get: function () {
            return tn(this).description;
          }
        }),
        at(en, 'propertyIsEnumerable', Cn, { unsafe: !0 }))),
    Lt({ global: !0, wrap: !0, forced: !Wt, sham: !Wt }, { Symbol: nn }),
    _e(xe(fn), function (t) {
      Ye(t);
    }),
    Lt(
      { target: Me, stat: !0, forced: !Wt },
      {
        for: function (t) {
          var e = String(t);
          if (S(dn, e)) return dn[e];
          var n = nn(e);
          return (dn[e] = n), (gn[n] = e), n;
        },
        keyFor: function (t) {
          if (!bn(t)) throw TypeError(t + ' is not a symbol');
          if (S(gn, t)) return gn[t];
        },
        useSetter: function () {
          hn = !0;
        },
        useSimple: function () {
          hn = !1;
        }
      }
    ),
    Lt(
      { target: 'Object', stat: !0, forced: !Wt, sham: !g },
      {
        create: function (t, e) {
          return void 0 === e ? He(t) : Bn(He(t), e);
        },
        defineProperty: mn,
        defineProperties: Bn,
        getOwnPropertyDescriptor: vn
      }
    ),
    Lt(
      { target: 'Object', stat: !0, forced: !Wt },
      { getOwnPropertyNames: Fn, getOwnPropertySymbols: Un }
    ),
    Lt(
      {
        target: 'Object',
        stat: !0,
        forced: d(function () {
          St.f(1);
        })
      },
      {
        getOwnPropertySymbols: function (t) {
          return St.f(ce(t));
        }
      }
    ),
    rn)
  ) {
    var Vn =
      !Wt ||
      d(function () {
        var t = nn();
        return (
          '[null]' != rn([t]) || '{}' != rn({ a: t }) || '{}' != rn(Object(t))
        );
      });
    Lt(
      { target: 'JSON', stat: !0, forced: Vn },
      {
        stringify: function (t, e, n) {
          for (var i, r = [t], o = 1; arguments.length > o; )
            r.push(arguments[o++]);
          if (((i = e), (F(e) || void 0 !== t) && !bn(t)))
            return (
              oe(e) ||
                (e = function (t, e) {
                  if (
                    ('function' == typeof i && (e = i.call(this, t, e)), !bn(e))
                  )
                    return e;
                }),
              (r[1] = e),
              rn.apply(null, r)
            );
        }
      }
    );
  }
  nn.prototype[qe] || H(nn.prototype, qe, nn.prototype.valueOf),
    je(nn, Me),
    ($[De] = !0),
    Ye('asyncIterator');
  var Sn = J.f,
    Zn = l.Symbol;
  if (
    g &&
    'function' == typeof Zn &&
    (!('description' in Zn.prototype) || void 0 !== Zn().description)
  ) {
    var Xn = {},
      xn = function () {
        var t =
            arguments.length < 1 || void 0 === arguments[0]
              ? void 0
              : String(arguments[0]),
          e = this instanceof xn ? new Zn(t) : void 0 === t ? Zn() : Zn(t);
        return '' === t && (Xn[e] = !0), e;
      };
    Xt(xn, Zn);
    var wn = (xn.prototype = Zn.prototype);
    wn.constructor = xn;
    var Gn = wn.toString,
      An = 'Symbol(test)' == String(Zn('test')),
      Qn = /^Symbol\((.*)\)[^)]+$/;
    Sn(wn, 'description', {
      configurable: !0,
      get: function () {
        var t = F(this) ? this.valueOf() : this,
          e = Gn.call(t);
        if (S(Xn, t)) return '';
        var n = An ? e.slice(7, -1) : e.replace(Qn, '$1');
        return '' === n ? void 0 : n;
      }
    }),
      Lt({ global: !0, forced: !0 }, { Symbol: xn });
  }
  Ye('hasInstance'),
    Ye('isConcatSpreadable'),
    Ye('iterator'),
    Ye('match'),
    Ye('matchAll'),
    Ye('replace'),
    Ye('search'),
    Ye('species'),
    Ye('split'),
    Ye('toPrimitive'),
    Ye('toStringTag'),
    Ye('unscopables'),
    je(Math, 'Math', !0),
    je(l.JSON, 'JSON', !0);
  ut.Symbol;
  var Rn,
    Jn,
    Hn,
    Ln = function (t) {
      return function (e, n) {
        var i,
          r,
          o = String(C(e)),
          c = It(n),
          s = o.length;
        return c < 0 || c >= s
          ? t
            ? ''
            : void 0
          : (i = o.charCodeAt(c)) < 55296 ||
            i > 56319 ||
            c + 1 === s ||
            (r = o.charCodeAt(c + 1)) < 56320 ||
            r > 57343
          ? t
            ? o.charAt(c)
            : i
          : t
          ? o.slice(c, c + 2)
          : r - 56320 + ((i - 55296) << 10) + 65536;
      };
    },
    Wn = { codeAt: Ln(!1), charAt: Ln(!0) },
    kn = !d(function () {
      function t() {}
      return (
        (t.prototype.constructor = null),
        Object.getPrototypeOf(new t()) !== t.prototype
      );
    }),
    En = q('IE_PROTO'),
    Tn = Object.prototype,
    Nn = kn
      ? Object.getPrototypeOf
      : function (t) {
          return (
            (t = ce(t)),
            S(t, En)
              ? t[En]
              : 'function' == typeof t.constructor && t instanceof t.constructor
              ? t.constructor.prototype
              : t instanceof Object
              ? Tn
              : null
          );
        },
    Yn = Yt('iterator'),
    Kn = !1;
  [].keys &&
    ('next' in (Hn = [].keys())
      ? (Jn = Nn(Nn(Hn))) !== Object.prototype && (Rn = Jn)
      : (Kn = !0)),
    null == Rn && (Rn = {}),
    S(Rn, Yn) ||
      H(Rn, Yn, function () {
        return this;
      });
  var On = { IteratorPrototype: Rn, BUGGY_SAFARI_ITERATORS: Kn },
    jn = {},
    Pn = On.IteratorPrototype,
    zn = function () {
      return this;
    },
    _n =
      Object.setPrototypeOf ||
      ('__proto__' in {}
        ? (function () {
            var t,
              e = !1,
              n = {};
            try {
              (t = Object.getOwnPropertyDescriptor(
                Object.prototype,
                '__proto__'
              ).set).call(n, []),
                (e = n instanceof Array);
            } catch (t) {}
            return function (n, i) {
              return (
                Q(n),
                (function (t) {
                  if (!F(t) && null !== t)
                    throw TypeError(
                      "Can't set " + String(t) + ' as a prototype'
                    );
                })(i),
                e ? t.call(n, i) : (n.__proto__ = i),
                n
              );
            };
          })()
        : void 0),
    Dn = On.IteratorPrototype,
    Mn = On.BUGGY_SAFARI_ITERATORS,
    qn = Yt('iterator'),
    $n = 'keys',
    ti = 'values',
    ei = 'entries',
    ni = function () {
      return this;
    },
    ii = function (t, e, n, i, r, o, c) {
      !(function (t, e, n) {
        var i = e + ' Iterator';
        (t.prototype = He(Pn, { next: p(1, n) })), je(t, i, !1), (jn[i] = zn);
      })(n, e, i);
      var s,
        a,
        u,
        l = function (t) {
          if (t === r && h) return h;
          if (!Mn && t in f) return f[t];
          switch (t) {
            case $n:
            case ti:
            case ei:
              return function () {
                return new n(this, t);
              };
          }
          return function () {
            return new n(this);
          };
        },
        d = e + ' Iterator',
        g = !1,
        f = t.prototype,
        I = f[qn] || f['@@iterator'] || (r && f[r]),
        h = (!Mn && I) || l(r),
        y = ('Array' == e && f.entries) || I;
      if (
        (y &&
          ((s = Nn(y.call(new t()))),
          Dn !== Object.prototype &&
            s.next &&
            (Nn(s) !== Dn &&
              (_n ? _n(s, Dn) : 'function' != typeof s[qn] && H(s, qn, ni)),
            je(s, d, !0))),
        r == ti &&
          I &&
          I.name !== ti &&
          ((g = !0),
          (h = function () {
            return I.call(this);
          })),
        f[qn] !== h && H(f, qn, h),
        (jn[e] = h),
        r)
      )
        if (((a = { values: l(ti), keys: o ? h : l($n), entries: l(ei) }), c))
          for (u in a) (Mn || g || !(u in f)) && at(f, u, a[u]);
        else Lt({ target: e, proto: !0, forced: Mn || g }, a);
      return a;
    },
    ri = Wn.charAt,
    oi = 'String Iterator',
    ci = st.set,
    si = st.getterFor(oi);
  ii(
    String,
    'String',
    function (t) {
      ci(this, { type: oi, string: String(t), index: 0 });
    },
    function () {
      var t,
        e = si(this),
        n = e.string,
        i = e.index;
      return i >= n.length
        ? { value: void 0, done: !0 }
        : ((t = ri(n, i)), (e.index += t.length), { value: t, done: !1 });
    }
  );
  var ai = function (t, e, n, i) {
      try {
        return i ? e(Q(n)[0], n[1]) : e(n);
      } catch (e) {
        var r = t.return;
        throw (void 0 !== r && Q(r.call(t)), e);
      }
    },
    ui = Yt('iterator'),
    li = Array.prototype,
    di = function (t) {
      return void 0 !== t && (jn.Array === t || li[ui] === t);
    },
    gi = Yt('iterator'),
    fi = function (t) {
      if (null != t) return t[gi] || t['@@iterator'] || jn[Se(t)];
    },
    Ii = Yt('iterator'),
    hi = !1;
  try {
    var pi = 0,
      yi = {
        next: function () {
          return { done: !!pi++ };
        },
        return: function () {
          hi = !0;
        }
      };
    (yi[Ii] = function () {
      return this;
    }),
      Array.from(yi, function () {
        throw 2;
      });
  } catch (t) {}
  var bi = function (t, e) {
      if (!e && !hi) return !1;
      var n = !1;
      try {
        var i = {};
        (i[Ii] = function () {
          return {
            next: function () {
              return { done: (n = !0) };
            }
          };
        }),
          t(i);
      } catch (t) {}
      return n;
    },
    mi = !bi(function (t) {
      Array.from(t);
    });
  Lt(
    { target: 'Array', stat: !0, forced: mi },
    {
      from: function (t) {
        var e,
          n,
          i,
          r,
          o,
          c,
          s = ce(t),
          a = 'function' == typeof this ? this : Array,
          u = arguments.length,
          l = u > 1 ? arguments[1] : void 0,
          d = void 0 !== l,
          g = fi(s),
          f = 0;
        if (
          (d && (l = ne(l, u > 2 ? arguments[2] : void 0, 2)),
          null == g || (a == Array && di(g)))
        )
          for (n = new a((e = pt(s.length))); e > f; f++)
            (c = d ? l(s[f], f) : s[f]), se(n, f, c);
        else
          for (
            o = (r = g.call(s)).next, n = new a();
            !(i = o.call(r)).done;
            f++
          )
            (c = d ? ai(r, l, [i.value, f], !0) : i.value), se(n, f, c);
        return (n.length = f), n;
      }
    }
  );
  ut.Array.from;
  var Bi,
    Ci = 'undefined' != typeof ArrayBuffer && 'undefined' != typeof DataView,
    vi = J.f,
    Fi = l.Int8Array,
    Ui = Fi && Fi.prototype,
    Vi = l.Uint8ClampedArray,
    Si = Vi && Vi.prototype,
    Zi = Fi && Nn(Fi),
    Xi = Ui && Nn(Ui),
    xi = Object.prototype,
    wi = xi.isPrototypeOf,
    Gi = Yt('toStringTag'),
    Ai = D('TYPED_ARRAY_TAG'),
    Qi = Ci && !!_n && 'Opera' !== Se(l.opera),
    Ri = {
      Int8Array: 1,
      Uint8Array: 1,
      Uint8ClampedArray: 1,
      Int16Array: 2,
      Uint16Array: 2,
      Int32Array: 4,
      Uint32Array: 4,
      Float32Array: 4,
      Float64Array: 8
    },
    Ji = function (t) {
      return F(t) && S(Ri, Se(t));
    };
  for (Bi in Ri) l[Bi] || (Qi = !1);
  if (
    (!Qi || 'function' != typeof Zi || Zi === Function.prototype) &&
    ((Zi = function () {
      throw TypeError('Incorrect invocation');
    }),
    Qi)
  )
    for (Bi in Ri) l[Bi] && _n(l[Bi], Zi);
  if ((!Qi || !Xi || Xi === xi) && ((Xi = Zi.prototype), Qi))
    for (Bi in Ri) l[Bi] && _n(l[Bi].prototype, Xi);
  if ((Qi && Nn(Si) !== Xi && _n(Si, Xi), g && !S(Xi, Gi)))
    for (Bi in (!0,
    vi(Xi, Gi, {
      get: function () {
        return F(this) ? this[Ai] : void 0;
      }
    }),
    Ri))
      l[Bi] && H(l[Bi], Ai, Bi);
  var Hi = function (t) {
      if (Ji(t)) return t;
      throw TypeError('Target is not a typed array');
    },
    Li = function (t) {
      if (_n) {
        if (wi.call(Zi, t)) return t;
      } else
        for (var e in Ri)
          if (S(Ri, Bi)) {
            var n = l[e];
            if (n && (t === n || wi.call(n, t))) return t;
          }
      throw TypeError('Target is not a typed array constructor');
    },
    Wi = function (t, e, n) {
      if (g) {
        if (n)
          for (var i in Ri) {
            var r = l[i];
            r && S(r.prototype, t) && delete r.prototype[t];
          }
        (Xi[t] && !n) || at(Xi, t, n ? e : (Qi && Ui[t]) || e);
      }
    },
    ki = Yt('species'),
    Ei = Hi,
    Ti = Li,
    Ni = [].slice;
  Wi(
    'slice',
    function (t, e) {
      for (
        var n = Ni.call(Ei(this), t, e),
          i = (function (t, e) {
            var n,
              i = Q(t).constructor;
            return void 0 === i || null == (n = Q(i)[ki]) ? e : ee(n);
          })(this, this.constructor),
          r = 0,
          o = n.length,
          c = new (Ti(i))(o);
        o > r;

      )
        c[r] = n[r++];
      return c;
    },
    d(function () {
      new Int8Array(1).slice();
    })
  );
  var Yi = Yt('unscopables'),
    Ki = Array.prototype;
  null == Ki[Yi] && J.f(Ki, Yi, { configurable: !0, value: He(null) });
  var Oi = function (t) {
      Ki[Yi][t] = !0;
    },
    ji = Object.defineProperty,
    Pi = {},
    zi = function (t) {
      throw t;
    },
    _i = Bt.includes,
    Di = (function (t, e) {
      if (S(Pi, t)) return Pi[t];
      e || (e = {});
      var n = [][t],
        i = !!S(e, 'ACCESSORS') && e.ACCESSORS,
        r = S(e, 0) ? e[0] : zi,
        o = S(e, 1) ? e[1] : void 0;
      return (Pi[t] =
        !!n &&
        !d(function () {
          if (i && !g) return !0;
          var t = { length: -1 };
          i ? ji(t, 1, { enumerable: !0, get: zi }) : (t[1] = 1),
            n.call(t, r, o);
        }));
    })('indexOf', { ACCESSORS: !0, 1: 0 });
  Lt(
    { target: 'Array', proto: !0, forced: !Di },
    {
      includes: function (t) {
        return _i(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    }
  ),
    Oi('includes');
  re('Array', 'includes');
  Lt(
    { target: 'String', proto: !0, forced: !Pt('includes') },
    {
      includes: function (t) {
        return !!~String(C(this)).indexOf(
          Ot(t),
          arguments.length > 1 ? arguments[1] : void 0
        );
      }
    }
  );
  re('String', 'includes');
  var Mi = !d(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    }),
    qi = a(function (t) {
      var e = J.f,
        n = D('meta'),
        i = 0,
        r =
          Object.isExtensible ||
          function () {
            return !0;
          },
        o = function (t) {
          e(t, n, { value: { objectID: 'O' + ++i, weakData: {} } });
        },
        c = (t.exports = {
          REQUIRED: !1,
          fastKey: function (t, e) {
            if (!F(t))
              return 'symbol' == typeof t
                ? t
                : ('string' == typeof t ? 'S' : 'P') + t;
            if (!S(t, n)) {
              if (!r(t)) return 'F';
              if (!e) return 'E';
              o(t);
            }
            return t[n].objectID;
          },
          getWeakData: function (t, e) {
            if (!S(t, n)) {
              if (!r(t)) return !0;
              if (!e) return !1;
              o(t);
            }
            return t[n].weakData;
          },
          onFreeze: function (t) {
            return Mi && c.REQUIRED && r(t) && !S(t, n) && o(t), t;
          }
        });
      $[n] = !0;
    }),
    $i =
      (qi.REQUIRED,
      qi.fastKey,
      qi.getWeakData,
      qi.onFreeze,
      a(function (t) {
        var e = function (t, e) {
          (this.stopped = t), (this.result = e);
        };
        (t.exports = function (t, n, i, r, o) {
          var c,
            s,
            a,
            u,
            l,
            d,
            g,
            f = ne(n, i, r ? 2 : 1);
          if (o) c = t;
          else {
            if ('function' != typeof (s = fi(t)))
              throw TypeError('Target is not iterable');
            if (di(s)) {
              for (a = 0, u = pt(t.length); u > a; a++)
                if (
                  (l = r ? f(Q((g = t[a]))[0], g[1]) : f(t[a])) &&
                  l instanceof e
                )
                  return l;
              return new e(!1);
            }
            c = s.call(t);
          }
          for (d = c.next; !(g = d.call(c)).done; )
            if (
              'object' == typeof (l = ai(c, f, g.value, r)) &&
              l &&
              l instanceof e
            )
              return l;
          return new e(!1);
        }).stop = function (t) {
          return new e(!0, t);
        };
      })),
    tr = function (t, e, n) {
      if (!(t instanceof e))
        throw TypeError('Incorrect ' + (n ? n + ' ' : '') + 'invocation');
      return t;
    },
    er = function (t, e, n) {
      for (var i in e) at(t, i, e[i], n);
      return t;
    },
    nr = Yt('species'),
    ir = J.f,
    rr = qi.fastKey,
    or = st.set,
    cr = st.getterFor,
    sr =
      ((function (t, e, n) {
        var i = -1 !== t.indexOf('Map'),
          r = -1 !== t.indexOf('Weak'),
          o = i ? 'set' : 'add',
          c = l[t],
          s = c && c.prototype,
          a = c,
          u = {},
          g = function (t) {
            var e = s[t];
            at(
              s,
              t,
              'add' == t
                ? function (t) {
                    return e.call(this, 0 === t ? 0 : t), this;
                  }
                : 'delete' == t
                ? function (t) {
                    return !(r && !F(t)) && e.call(this, 0 === t ? 0 : t);
                  }
                : 'get' == t
                ? function (t) {
                    return r && !F(t) ? void 0 : e.call(this, 0 === t ? 0 : t);
                  }
                : 'has' == t
                ? function (t) {
                    return !(r && !F(t)) && e.call(this, 0 === t ? 0 : t);
                  }
                : function (t, n) {
                    return e.call(this, 0 === t ? 0 : t, n), this;
                  }
            );
          };
        if (
          Jt(
            t,
            'function' != typeof c ||
              !(
                r ||
                (s.forEach &&
                  !d(function () {
                    new c().entries().next();
                  }))
              )
          )
        )
          (a = n.getConstructor(e, t, i, o)), (qi.REQUIRED = !0);
        else if (Jt(t, !0)) {
          var f = new a(),
            I = f[o](r ? {} : -0, 1) != f,
            h = d(function () {
              f.has(1);
            }),
            p = bi(function (t) {
              new c(t);
            }),
            y =
              !r &&
              d(function () {
                for (var t = new c(), e = 5; e--; ) t[o](e, e);
                return !t.has(-0);
              });
          p ||
            (((a = e(function (e, n) {
              tr(e, a, t);
              var r = (function (t, e, n) {
                var i, r;
                return (
                  _n &&
                    'function' == typeof (i = e.constructor) &&
                    i !== n &&
                    F((r = i.prototype)) &&
                    r !== n.prototype &&
                    _n(t, r),
                  t
                );
              })(new c(), e, a);
              return null != n && $i(n, r[o], r, i), r;
            })).prototype = s),
            (s.constructor = a)),
            (h || y) && (g('delete'), g('has'), i && g('get')),
            (y || I) && g(o),
            r && s.clear && delete s.clear;
        }
        (u[t] = a),
          Lt({ global: !0, forced: a != c }, u),
          je(a, t),
          r || n.setStrong(a, t, i);
      })(
        'Set',
        function (t) {
          return function () {
            return t(this, arguments.length ? arguments[0] : void 0);
          };
        },
        {
          getConstructor: function (t, e, n, i) {
            var r = t(function (t, o) {
                tr(t, r, e),
                  or(t, {
                    type: e,
                    index: He(null),
                    first: void 0,
                    last: void 0,
                    size: 0
                  }),
                  g || (t.size = 0),
                  null != o && $i(o, t[i], t, n);
              }),
              o = cr(e),
              c = function (t, e, n) {
                var i,
                  r,
                  c = o(t),
                  a = s(t, e);
                return (
                  a
                    ? (a.value = n)
                    : ((c.last = a = {
                        index: (r = rr(e, !0)),
                        key: e,
                        value: n,
                        previous: (i = c.last),
                        next: void 0,
                        removed: !1
                      }),
                      c.first || (c.first = a),
                      i && (i.next = a),
                      g ? c.size++ : t.size++,
                      'F' !== r && (c.index[r] = a)),
                  t
                );
              },
              s = function (t, e) {
                var n,
                  i = o(t),
                  r = rr(e);
                if ('F' !== r) return i.index[r];
                for (n = i.first; n; n = n.next) if (n.key == e) return n;
              };
            return (
              er(r.prototype, {
                clear: function () {
                  for (var t = o(this), e = t.index, n = t.first; n; )
                    (n.removed = !0),
                      n.previous && (n.previous = n.previous.next = void 0),
                      delete e[n.index],
                      (n = n.next);
                  (t.first = t.last = void 0),
                    g ? (t.size = 0) : (this.size = 0);
                },
                delete: function (t) {
                  var e = this,
                    n = o(e),
                    i = s(e, t);
                  if (i) {
                    var r = i.next,
                      c = i.previous;
                    delete n.index[i.index],
                      (i.removed = !0),
                      c && (c.next = r),
                      r && (r.previous = c),
                      n.first == i && (n.first = r),
                      n.last == i && (n.last = c),
                      g ? n.size-- : e.size--;
                  }
                  return !!i;
                },
                forEach: function (t) {
                  for (
                    var e,
                      n = o(this),
                      i = ne(
                        t,
                        arguments.length > 1 ? arguments[1] : void 0,
                        3
                      );
                    (e = e ? e.next : n.first);

                  )
                    for (i(e.value, e.key, this); e && e.removed; )
                      e = e.previous;
                },
                has: function (t) {
                  return !!s(this, t);
                }
              }),
              er(
                r.prototype,
                n
                  ? {
                      get: function (t) {
                        var e = s(this, t);
                        return e && e.value;
                      },
                      set: function (t, e) {
                        return c(this, 0 === t ? 0 : t, e);
                      }
                    }
                  : {
                      add: function (t) {
                        return c(this, (t = 0 === t ? 0 : t), t);
                      }
                    }
              ),
              g &&
                ir(r.prototype, 'size', {
                  get: function () {
                    return o(this).size;
                  }
                }),
              r
            );
          },
          setStrong: function (t, e, n) {
            var i = e + ' Iterator',
              r = cr(e),
              o = cr(i);
            ii(
              t,
              e,
              function (t, e) {
                or(this, {
                  type: i,
                  target: t,
                  state: r(t),
                  kind: e,
                  last: void 0
                });
              },
              function () {
                for (var t = o(this), e = t.kind, n = t.last; n && n.removed; )
                  n = n.previous;
                return t.target && (t.last = n = n ? n.next : t.state.first)
                  ? 'keys' == e
                    ? { value: n.key, done: !1 }
                    : 'values' == e
                    ? { value: n.value, done: !1 }
                    : { value: [n.key, n.value], done: !1 }
                  : ((t.target = void 0), { value: void 0, done: !0 });
              },
              n ? 'entries' : 'values',
              !n,
              !0
            ),
              (function (t) {
                var e = dt(t),
                  n = J.f;
                g &&
                  e &&
                  !e[nr] &&
                  n(e, nr, {
                    configurable: !0,
                    get: function () {
                      return this;
                    }
                  });
              })(e);
          }
        }
      ),
      {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
      }),
    ar = 'Array Iterator',
    ur = st.set,
    lr = st.getterFor(ar),
    dr = ii(
      Array,
      'Array',
      function (t, e) {
        ur(this, { type: ar, target: v(t), index: 0, kind: e });
      },
      function () {
        var t = lr(this),
          e = t.target,
          n = t.kind,
          i = t.index++;
        return !e || i >= e.length
          ? ((t.target = void 0), { value: void 0, done: !0 })
          : 'keys' == n
          ? { value: i, done: !1 }
          : 'values' == n
          ? { value: e[i], done: !1 }
          : { value: [i, e[i]], done: !1 };
      },
      'values'
    );
  (jn.Arguments = jn.Array), Oi('keys'), Oi('values'), Oi('entries');
  var gr = Yt('iterator'),
    fr = Yt('toStringTag'),
    Ir = dr.values;
  for (var hr in sr) {
    var pr = l[hr],
      yr = pr && pr.prototype;
    if (yr) {
      if (yr[gr] !== Ir)
        try {
          H(yr, gr, Ir);
        } catch (t) {
          yr[gr] = Ir;
        }
      if ((yr[fr] || H(yr, fr, hr), sr[hr]))
        for (var br in dr)
          if (yr[br] !== dr[br])
            try {
              H(yr, br, dr[br]);
            } catch (t) {
              yr[br] = dr[br];
            }
    }
  }
  ut.Set;
  function mr(t) {
    var e = this.constructor;
    return this.then(
      function (n) {
        return e.resolve(t()).then(function () {
          return n;
        });
      },
      function (n) {
        return e.resolve(t()).then(function () {
          return e.reject(n);
        });
      }
    );
  }
  var Br = setTimeout;
  function Cr(t) {
    return Boolean(t && void 0 !== t.length);
  }
  function vr() {}
  function Fr(t) {
    if (!(this instanceof Fr))
      throw new TypeError('Promises must be constructed via new');
    if ('function' != typeof t) throw new TypeError('not a function');
    (this._state = 0),
      (this._handled = !1),
      (this._value = void 0),
      (this._deferreds = []),
      xr(t, this);
  }
  function Ur(t, e) {
    for (; 3 === t._state; ) t = t._value;
    0 !== t._state
      ? ((t._handled = !0),
        Fr._immediateFn(function () {
          var n = 1 === t._state ? e.onFulfilled : e.onRejected;
          if (null !== n) {
            var i;
            try {
              i = n(t._value);
            } catch (t) {
              return void Sr(e.promise, t);
            }
            Vr(e.promise, i);
          } else (1 === t._state ? Vr : Sr)(e.promise, t._value);
        }))
      : t._deferreds.push(e);
  }
  function Vr(t, e) {
    try {
      if (e === t)
        throw new TypeError('A promise cannot be resolved with itself.');
      if (e && ('object' == typeof e || 'function' == typeof e)) {
        var n = e.then;
        if (e instanceof Fr) return (t._state = 3), (t._value = e), void Zr(t);
        if ('function' == typeof n)
          return void xr(
            ((i = n),
            (r = e),
            function () {
              i.apply(r, arguments);
            }),
            t
          );
      }
      (t._state = 1), (t._value = e), Zr(t);
    } catch (e) {
      Sr(t, e);
    }
    var i, r;
  }
  function Sr(t, e) {
    (t._state = 2), (t._value = e), Zr(t);
  }
  function Zr(t) {
    2 === t._state &&
      0 === t._deferreds.length &&
      Fr._immediateFn(function () {
        t._handled || Fr._unhandledRejectionFn(t._value);
      });
    for (var e = 0, n = t._deferreds.length; e < n; e++) Ur(t, t._deferreds[e]);
    t._deferreds = null;
  }
  function Xr(t, e, n) {
    (this.onFulfilled = 'function' == typeof t ? t : null),
      (this.onRejected = 'function' == typeof e ? e : null),
      (this.promise = n);
  }
  function xr(t, e) {
    var n = !1;
    try {
      t(
        function (t) {
          n || ((n = !0), Vr(e, t));
        },
        function (t) {
          n || ((n = !0), Sr(e, t));
        }
      );
    } catch (t) {
      if (n) return;
      (n = !0), Sr(e, t);
    }
  }
  (Fr.prototype.catch = function (t) {
    return this.then(null, t);
  }),
    (Fr.prototype.then = function (t, e) {
      var n = new this.constructor(vr);
      return Ur(this, new Xr(t, e, n)), n;
    }),
    (Fr.prototype.finally = mr),
    (Fr.all = function (t) {
      return new Fr(function (e, n) {
        if (!Cr(t)) return n(new TypeError('Promise.all accepts an array'));
        var i = Array.prototype.slice.call(t);
        if (0 === i.length) return e([]);
        var r = i.length;
        function o(t, c) {
          try {
            if (c && ('object' == typeof c || 'function' == typeof c)) {
              var s = c.then;
              if ('function' == typeof s)
                return void s.call(
                  c,
                  function (e) {
                    o(t, e);
                  },
                  n
                );
            }
            (i[t] = c), 0 == --r && e(i);
          } catch (t) {
            n(t);
          }
        }
        for (var c = 0; c < i.length; c++) o(c, i[c]);
      });
    }),
    (Fr.resolve = function (t) {
      return t && 'object' == typeof t && t.constructor === Fr
        ? t
        : new Fr(function (e) {
            e(t);
          });
    }),
    (Fr.reject = function (t) {
      return new Fr(function (e, n) {
        n(t);
      });
    }),
    (Fr.race = function (t) {
      return new Fr(function (e, n) {
        if (!Cr(t)) return n(new TypeError('Promise.race accepts an array'));
        for (var i = 0, r = t.length; i < r; i++) Fr.resolve(t[i]).then(e, n);
      });
    }),
    (Fr._immediateFn =
      ('function' == typeof setImmediate &&
        function (t) {
          setImmediate(t);
        }) ||
      function (t) {
        Br(t, 0);
      }),
    (Fr._unhandledRejectionFn = function (t) {
      'undefined' != typeof console &&
        console &&
        console.warn('Possible Unhandled Promise Rejection:', t);
    });
  var wr = (function () {
    if ('undefined' != typeof self) return self;
    if ('undefined' != typeof window) return window;
    if ('undefined' != typeof global) return global;
    throw new Error('unable to locate global object');
  })();
  'Promise' in wr
    ? wr.Promise.prototype.finally || (wr.Promise.prototype.finally = mr)
    : (wr.Promise = Fr),
    (function (t) {
      function e() {}
      function n(t, e) {
        if (
          ((t = void 0 === t ? 'utf-8' : t),
          (e = void 0 === e ? { fatal: !1 } : e),
          -1 === r.indexOf(t.toLowerCase()))
        )
          throw new RangeError(
            "Failed to construct 'TextDecoder': The encoding label provided ('" +
              t +
              "') is invalid."
          );
        if (e.fatal)
          throw Error(
            "Failed to construct 'TextDecoder': the 'fatal' option is unsupported."
          );
      }
      function i(t) {
        for (
          var e = 0,
            n = Math.min(65536, t.length + 1),
            i = new Uint16Array(n),
            r = [],
            o = 0;
          ;

        ) {
          var c = e < t.length;
          if (!c || o >= n - 1) {
            if ((r.push(String.fromCharCode.apply(null, i.subarray(0, o))), !c))
              return r.join('');
            (t = t.subarray(e)), (o = e = 0);
          }
          if (0 == (128 & (c = t[e++]))) i[o++] = c;
          else if (192 == (224 & c)) {
            var s = 63 & t[e++];
            i[o++] = ((31 & c) << 6) | s;
          } else if (224 == (240 & c)) {
            s = 63 & t[e++];
            var a = 63 & t[e++];
            i[o++] = ((31 & c) << 12) | (s << 6) | a;
          } else if (240 == (248 & c)) {
            65535 <
              (c =
                ((7 & c) << 18) |
                ((s = 63 & t[e++]) << 12) |
                ((a = 63 & t[e++]) << 6) |
                (63 & t[e++])) &&
              ((c -= 65536),
              (i[o++] = ((c >>> 10) & 1023) | 55296),
              (c = 56320 | (1023 & c))),
              (i[o++] = c);
          }
        }
      }
      if (t.TextEncoder && t.TextDecoder) return !1;
      var r = ['utf-8', 'utf8', 'unicode-1-1-utf-8'];
      Object.defineProperty(e.prototype, 'encoding', { value: 'utf-8' }),
        (e.prototype.encode = function (t, e) {
          if ((e = void 0 === e ? { stream: !1 } : e).stream)
            throw Error(
              "Failed to encode: the 'stream' option is unsupported."
            );
          e = 0;
          for (
            var n = t.length,
              i = 0,
              r = Math.max(32, n + (n >>> 1) + 7),
              o = new Uint8Array((r >>> 3) << 3);
            e < n;

          ) {
            var c = t.charCodeAt(e++);
            if (55296 <= c && 56319 >= c) {
              if (e < n) {
                var s = t.charCodeAt(e);
                56320 == (64512 & s) &&
                  (++e, (c = ((1023 & c) << 10) + (1023 & s) + 65536));
              }
              if (55296 <= c && 56319 >= c) continue;
            }
            if (
              (i + 4 > o.length &&
                ((r += 8),
                (r = ((r *= 1 + (e / t.length) * 2) >>> 3) << 3),
                (s = new Uint8Array(r)).set(o),
                (o = s)),
              0 == (4294967168 & c))
            )
              o[i++] = c;
            else {
              if (0 == (4294965248 & c)) o[i++] = ((c >>> 6) & 31) | 192;
              else if (0 == (4294901760 & c))
                (o[i++] = ((c >>> 12) & 15) | 224),
                  (o[i++] = ((c >>> 6) & 63) | 128);
              else {
                if (0 != (4292870144 & c)) continue;
                (o[i++] = ((c >>> 18) & 7) | 240),
                  (o[i++] = ((c >>> 12) & 63) | 128),
                  (o[i++] = ((c >>> 6) & 63) | 128);
              }
              o[i++] = (63 & c) | 128;
            }
          }
          return o.slice ? o.slice(0, i) : o.subarray(0, i);
        }),
        Object.defineProperty(n.prototype, 'encoding', { value: 'utf-8' }),
        Object.defineProperty(n.prototype, 'fatal', { value: !1 }),
        Object.defineProperty(n.prototype, 'ignoreBOM', { value: !1 });
      var o = i;
      'function' == typeof Buffer && Buffer.from
        ? (o = function (t) {
            return Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString(
              'utf-8'
            );
          })
        : 'function' == typeof Blob &&
          'function' == typeof URL &&
          'function' == typeof URL.createObjectURL &&
          (o = function (t) {
            var e = URL.createObjectURL(
              new Blob([t], { type: 'text/plain;charset=UTF-8' })
            );
            try {
              var n = new XMLHttpRequest();
              return n.open('GET', e, !1), n.send(), n.responseText;
            } catch (e) {
              return i(t);
            } finally {
              URL.revokeObjectURL(e);
            }
          }),
        (n.prototype.decode = function (t, e) {
          if ((e = void 0 === e ? { stream: !1 } : e).stream)
            throw Error(
              "Failed to decode: the 'stream' option is unsupported."
            );
          return (
            (t =
              t instanceof Uint8Array
                ? t
                : t.buffer instanceof ArrayBuffer
                ? new Uint8Array(t.buffer)
                : new Uint8Array(t)),
            o(t)
          );
        }),
        (t.TextEncoder = e),
        (t.TextDecoder = n);
    })('undefined' != typeof window ? window : c),
    (function () {
      function t(t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function');
      }
      function e(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      function n(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t;
      }
      function i(t, e) {
        if ('function' != typeof e && null !== e)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (t.prototype = Object.create(e && e.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 }
        })),
          e && o(t, e);
      }
      function r(t) {
        return (r = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function o(t, e) {
        return (o =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function s() {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      }
      function a(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function u(t, e) {
        return !e || ('object' != typeof e && 'function' != typeof e)
          ? a(t)
          : e;
      }
      function l(t) {
        var e = s();
        return function () {
          var n,
            i = r(t);
          if (e) {
            var o = r(this).constructor;
            n = Reflect.construct(i, arguments, o);
          } else n = i.apply(this, arguments);
          return u(this, n);
        };
      }
      function d(t, e) {
        for (
          ;
          !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = r(t));

        );
        return t;
      }
      function g(t, e, n) {
        return (g =
          'undefined' != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (t, e, n) {
                var i = d(t, e);
                if (i) {
                  var r = Object.getOwnPropertyDescriptor(i, e);
                  return r.get ? r.get.call(n) : r.value;
                }
              })(t, e, n || t);
      }
      var f = (function () {
          function e() {
            t(this, e),
              Object.defineProperty(this, 'listeners', {
                value: {},
                writable: !0,
                configurable: !0
              });
          }
          return (
            n(e, [
              {
                key: 'addEventListener',
                value: function (t, e) {
                  t in this.listeners || (this.listeners[t] = []),
                    this.listeners[t].push(e);
                }
              },
              {
                key: 'removeEventListener',
                value: function (t, e) {
                  if (t in this.listeners)
                    for (
                      var n = this.listeners[t], i = 0, r = n.length;
                      i < r;
                      i++
                    )
                      if (n[i] === e) return void n.splice(i, 1);
                }
              },
              {
                key: 'dispatchEvent',
                value: function (t) {
                  var e = this;
                  if (t.type in this.listeners) {
                    for (
                      var n = function (n) {
                          setTimeout(function () {
                            return n.call(e, t);
                          });
                        },
                        i = this.listeners[t.type],
                        r = 0,
                        o = i.length;
                      r < o;
                      r++
                    )
                      n(i[r]);
                    return !t.defaultPrevented;
                  }
                }
              }
            ]),
            e
          );
        })(),
        I = (function (e) {
          i(c, e);
          var o = l(c);
          function c() {
            var e;
            return (
              t(this, c),
              (e = o.call(this)).listeners || f.call(a(e)),
              Object.defineProperty(a(e), 'aborted', {
                value: !1,
                writable: !0,
                configurable: !0
              }),
              Object.defineProperty(a(e), 'onabort', {
                value: null,
                writable: !0,
                configurable: !0
              }),
              e
            );
          }
          return (
            n(c, [
              {
                key: 'toString',
                value: function () {
                  return '[object AbortSignal]';
                }
              },
              {
                key: 'dispatchEvent',
                value: function (t) {
                  'abort' === t.type &&
                    ((this.aborted = !0),
                    'function' == typeof this.onabort &&
                      this.onabort.call(this, t)),
                    g(r(c.prototype), 'dispatchEvent', this).call(this, t);
                }
              }
            ]),
            c
          );
        })(f),
        h = (function () {
          function e() {
            t(this, e),
              Object.defineProperty(this, 'signal', {
                value: new I(),
                writable: !0,
                configurable: !0
              });
          }
          return (
            n(e, [
              {
                key: 'abort',
                value: function () {
                  var t;
                  try {
                    t = new Event('abort');
                  } catch (e) {
                    'undefined' != typeof document
                      ? document.createEvent
                        ? (t = document.createEvent('Event')).initEvent(
                            'abort',
                            !1,
                            !1
                          )
                        : ((t = document.createEventObject()).type = 'abort')
                      : (t = { type: 'abort', bubbles: !1, cancelable: !1 });
                  }
                  this.signal.dispatchEvent(t);
                }
              },
              {
                key: 'toString',
                value: function () {
                  return '[object AbortController]';
                }
              }
            ]),
            e
          );
        })();
      function p(t) {
        return t.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL
          ? (console.log(
              '__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill'
            ),
            !0)
          : ('function' == typeof t.Request &&
              !t.Request.prototype.hasOwnProperty('signal')) ||
              !t.AbortController;
      }
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        ((h.prototype[Symbol.toStringTag] = 'AbortController'),
        (I.prototype[Symbol.toStringTag] = 'AbortSignal')),
        (function (t) {
          p(t) && ((t.AbortController = h), (t.AbortSignal = I));
        })('undefined' != typeof self ? self : c);
    })();
  var Gr = a(function (t, e) {
    Object.defineProperty(e, '__esModule', { value: !0 });
    var n = (function () {
      function t() {
        var t = this;
        (this.locked = new Map()),
          (this.addToLocked = function (e, n) {
            var i = t.locked.get(e);
            void 0 === i
              ? void 0 === n
                ? t.locked.set(e, [])
                : t.locked.set(e, [n])
              : void 0 !== n && (i.unshift(n), t.locked.set(e, i));
          }),
          (this.isLocked = function (e) {
            return t.locked.has(e);
          }),
          (this.lock = function (e) {
            return new Promise(function (n, i) {
              t.isLocked(e) ? t.addToLocked(e, n) : (t.addToLocked(e), n());
            });
          }),
          (this.unlock = function (e) {
            var n = t.locked.get(e);
            if (void 0 !== n && 0 !== n.length) {
              var i = n.pop();
              t.locked.set(e, n), void 0 !== i && setTimeout(i, 0);
            } else t.locked.delete(e);
          });
      }
      return (
        (t.getInstance = function () {
          return void 0 === t.instance && (t.instance = new t()), t.instance;
        }),
        t
      );
    })();
    e.default = function () {
      return n.getInstance();
    };
  });
  s(Gr);
  var Ar = s(
    a(function (t, e) {
      var n =
          (c && c.__awaiter) ||
          function (t, e, n, i) {
            return new (n || (n = Promise))(function (r, o) {
              function c(t) {
                try {
                  a(i.next(t));
                } catch (t) {
                  o(t);
                }
              }
              function s(t) {
                try {
                  a(i.throw(t));
                } catch (t) {
                  o(t);
                }
              }
              function a(t) {
                t.done
                  ? r(t.value)
                  : new n(function (e) {
                      e(t.value);
                    }).then(c, s);
              }
              a((i = i.apply(t, e || [])).next());
            });
          },
        i =
          (c && c.__generator) ||
          function (t, e) {
            var n,
              i,
              r,
              o,
              c = {
                label: 0,
                sent: function () {
                  if (1 & r[0]) throw r[1];
                  return r[1];
                },
                trys: [],
                ops: []
              };
            return (
              (o = { next: s(0), throw: s(1), return: s(2) }),
              'function' == typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );
            function s(o) {
              return function (s) {
                return (function (o) {
                  if (n) throw new TypeError('Generator is already executing.');
                  for (; c; )
                    try {
                      if (
                        ((n = 1),
                        i &&
                          (r =
                            2 & o[0]
                              ? i.return
                              : o[0]
                              ? i.throw || ((r = i.return) && r.call(i), 0)
                              : i.next) &&
                          !(r = r.call(i, o[1])).done)
                      )
                        return r;
                      switch (((i = 0), r && (o = [2 & o[0], r.value]), o[0])) {
                        case 0:
                        case 1:
                          r = o;
                          break;
                        case 4:
                          return c.label++, { value: o[1], done: !1 };
                        case 5:
                          c.label++, (i = o[1]), (o = [0]);
                          continue;
                        case 7:
                          (o = c.ops.pop()), c.trys.pop();
                          continue;
                        default:
                          if (
                            !((r = c.trys),
                            (r = r.length > 0 && r[r.length - 1]) ||
                              (6 !== o[0] && 2 !== o[0]))
                          ) {
                            c = 0;
                            continue;
                          }
                          if (
                            3 === o[0] &&
                            (!r || (o[1] > r[0] && o[1] < r[3]))
                          ) {
                            c.label = o[1];
                            break;
                          }
                          if (6 === o[0] && c.label < r[1]) {
                            (c.label = r[1]), (r = o);
                            break;
                          }
                          if (r && c.label < r[2]) {
                            (c.label = r[2]), c.ops.push(o);
                            break;
                          }
                          r[2] && c.ops.pop(), c.trys.pop();
                          continue;
                      }
                      o = e.call(t, c);
                    } catch (t) {
                      (o = [6, t]), (i = 0);
                    } finally {
                      n = r = 0;
                    }
                  if (5 & o[0]) throw o[1];
                  return { value: o[0] ? o[1] : void 0, done: !0 };
                })([o, s]);
              };
            }
          };
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = 'browser-tabs-lock-key';
      function o(t) {
        return new Promise(function (e) {
          return setTimeout(e, t);
        });
      }
      function s(t) {
        for (
          var e =
              '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz',
            n = '',
            i = 0;
          i < t;
          i++
        ) {
          n += e[Math.floor(Math.random() * e.length)];
        }
        return n;
      }
      var a = (function () {
        function t() {
          (this.acquiredIatSet = new Set()),
            (this.id = Date.now().toString() + s(15)),
            (this.acquireLock = this.acquireLock.bind(this)),
            (this.releaseLock = this.releaseLock.bind(this)),
            (this.releaseLock__private__ = this.releaseLock__private__.bind(
              this
            )),
            (this.waitForSomethingToChange = this.waitForSomethingToChange.bind(
              this
            )),
            (this.refreshLockWhileAcquired = this.refreshLockWhileAcquired.bind(
              this
            )),
            void 0 === t.waiters && (t.waiters = []);
        }
        return (
          (t.prototype.acquireLock = function (e, c) {
            return (
              void 0 === c && (c = 5e3),
              n(this, void 0, void 0, function () {
                var n, a, u, l, d, g;
                return i(this, function (i) {
                  switch (i.label) {
                    case 0:
                      (n = Date.now() + s(4)),
                        (a = Date.now() + c),
                        (u = r + '-' + e),
                        (l = window.localStorage),
                        (i.label = 1);
                    case 1:
                      return Date.now() < a ? [4, o(30)] : [3, 8];
                    case 2:
                      return (
                        i.sent(),
                        null !== l.getItem(u)
                          ? [3, 5]
                          : ((d = this.id + '-' + e + '-' + n),
                            [4, o(Math.floor(25 * Math.random()))])
                      );
                    case 3:
                      return (
                        i.sent(),
                        l.setItem(
                          u,
                          JSON.stringify({
                            id: this.id,
                            iat: n,
                            timeoutKey: d,
                            timeAcquired: Date.now(),
                            timeRefreshed: Date.now()
                          })
                        ),
                        [4, o(30)]
                      );
                    case 4:
                      return (
                        i.sent(),
                        null !== (g = l.getItem(u)) &&
                        (g = JSON.parse(g)).id === this.id &&
                        g.iat === n
                          ? (this.acquiredIatSet.add(n),
                            this.refreshLockWhileAcquired(u, n),
                            [2, !0])
                          : [3, 7]
                      );
                    case 5:
                      return (
                        t.lockCorrector(), [4, this.waitForSomethingToChange(a)]
                      );
                    case 6:
                      i.sent(), (i.label = 7);
                    case 7:
                      return (n = Date.now() + s(4)), [3, 1];
                    case 8:
                      return [2, !1];
                  }
                });
              })
            );
          }),
          (t.prototype.refreshLockWhileAcquired = function (t, e) {
            return n(this, void 0, void 0, function () {
              var r = this;
              return i(this, function (o) {
                return (
                  setTimeout(function () {
                    return n(r, void 0, void 0, function () {
                      var n, r;
                      return i(this, function (i) {
                        switch (i.label) {
                          case 0:
                            return [4, Gr.default().lock(e)];
                          case 1:
                            return (
                              i.sent(),
                              this.acquiredIatSet.has(e)
                                ? ((n = window.localStorage),
                                  null === (r = n.getItem(t))
                                    ? (Gr.default().unlock(e), [2])
                                    : (((r = JSON.parse(
                                        r
                                      )).timeRefreshed = Date.now()),
                                      n.setItem(t, JSON.stringify(r)),
                                      Gr.default().unlock(e),
                                      this.refreshLockWhileAcquired(t, e),
                                      [2]))
                                : (Gr.default().unlock(e), [2])
                            );
                        }
                      });
                    });
                  }, 1e3),
                  [2]
                );
              });
            });
          }),
          (t.prototype.waitForSomethingToChange = function (e) {
            return n(this, void 0, void 0, function () {
              return i(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [
                      4,
                      new Promise(function (n) {
                        var i = !1,
                          r = Date.now(),
                          o = !1;
                        function c() {
                          if (
                            (o ||
                              (window.removeEventListener('storage', c),
                              t.removeFromWaiting(c),
                              clearTimeout(s),
                              (o = !0)),
                            !i)
                          ) {
                            i = !0;
                            var e = 50 - (Date.now() - r);
                            e > 0 ? setTimeout(n, e) : n();
                          }
                        }
                        window.addEventListener('storage', c),
                          t.addToWaiting(c);
                        var s = setTimeout(c, Math.max(0, e - Date.now()));
                      })
                    ];
                  case 1:
                    return n.sent(), [2];
                }
              });
            });
          }),
          (t.addToWaiting = function (e) {
            this.removeFromWaiting(e),
              void 0 !== t.waiters && t.waiters.push(e);
          }),
          (t.removeFromWaiting = function (e) {
            void 0 !== t.waiters &&
              (t.waiters = t.waiters.filter(function (t) {
                return t !== e;
              }));
          }),
          (t.notifyWaiters = function () {
            void 0 !== t.waiters &&
              t.waiters.slice().forEach(function (t) {
                return t();
              });
          }),
          (t.prototype.releaseLock = function (t) {
            return n(this, void 0, void 0, function () {
              return i(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [4, this.releaseLock__private__(t)];
                  case 1:
                    return [2, e.sent()];
                }
              });
            });
          }),
          (t.prototype.releaseLock__private__ = function (e) {
            return n(this, void 0, void 0, function () {
              var n, o, c;
              return i(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      (n = window.localStorage),
                      (o = r + '-' + e),
                      null === (c = n.getItem(o))
                        ? [2]
                        : (c = JSON.parse(c)).id !== this.id
                        ? [3, 2]
                        : [4, Gr.default().lock(c.iat)]
                    );
                  case 1:
                    i.sent(),
                      this.acquiredIatSet.delete(c.iat),
                      n.removeItem(o),
                      Gr.default().unlock(c.iat),
                      t.notifyWaiters(),
                      (i.label = 2);
                  case 2:
                    return [2];
                }
              });
            });
          }),
          (t.lockCorrector = function () {
            for (
              var e = Date.now() - 5e3,
                n = window.localStorage,
                i = Object.keys(n),
                o = !1,
                c = 0;
              c < i.length;
              c++
            ) {
              var s = i[c];
              if (s.includes(r)) {
                var a = n.getItem(s);
                null !== a &&
                  ((void 0 === (a = JSON.parse(a)).timeRefreshed &&
                    a.timeAcquired < e) ||
                    (void 0 !== a.timeRefreshed && a.timeRefreshed < e)) &&
                  (n.removeItem(s), (o = !0));
              }
            }
            o && t.notifyWaiters();
          }),
          (t.waiters = void 0),
          t
        );
      })();
      e.default = a;
    })
  );
  var Qr = { timeoutInSeconds: 60 },
    Rr = 'memory',
    Jr = [
      'login_required',
      'consent_required',
      'interaction_required',
      'account_selection_required',
      'access_denied'
    ],
    Hr = (function (t) {
      function n(e, i) {
        var r = t.call(this, i) || this;
        return (
          (r.error = e),
          (r.error_description = i),
          Object.setPrototypeOf(r, n.prototype),
          r
        );
      }
      return (
        e(n, t),
        (n.fromPayload = function (t) {
          return new n(t.error, t.error_description);
        }),
        n
      );
    })(Error),
    Lr = (function (t) {
      function n(e, i, r, o) {
        void 0 === o && (o = null);
        var c = t.call(this, e, i) || this;
        return (
          (c.state = r),
          (c.appState = o),
          Object.setPrototypeOf(c, n.prototype),
          c
        );
      }
      return e(n, t), n;
    })(Hr),
    Wr = (function (t) {
      function n() {
        var e = t.call(this, 'timeout', 'Timeout') || this;
        return Object.setPrototypeOf(e, n.prototype), e;
      }
      return e(n, t), n;
    })(Hr),
    kr = (function (t) {
      function n(e) {
        var i = t.call(this) || this;
        return (i.popup = e), Object.setPrototypeOf(i, n.prototype), i;
      }
      return e(n, t), n;
    })(Wr),
    Er = function (t, e, n) {
      return (
        void 0 === n && (n = 60),
        new Promise(function (i, r) {
          var o = window.document.createElement('iframe');
          o.setAttribute('width', '0'),
            o.setAttribute('height', '0'),
            (o.style.display = 'none');
          var c,
            s = function () {
              window.document.body.contains(o) &&
                (window.document.body.removeChild(o),
                window.removeEventListener('message', c, !1));
            },
            a = setTimeout(function () {
              r(new Wr()), s();
            }, 1e3 * n);
          (c = function (t) {
            if (
              t.origin == e &&
              t.data &&
              'authorization_response' === t.data.type
            ) {
              var n = t.source;
              n && n.close(),
                t.data.response.error
                  ? r(Hr.fromPayload(t.data.response))
                  : i(t.data.response),
                clearTimeout(a),
                window.removeEventListener('message', c, !1),
                setTimeout(s, 2e3);
            }
          }),
            window.addEventListener('message', c, !1),
            window.document.body.appendChild(o),
            o.setAttribute('src', t);
        })
      );
    },
    Tr = function (t, e) {
      var n,
        i,
        r,
        o = e.popup;
      if (
        (o
          ? (o.location.href = t)
          : ((n = t),
            (i = window.screenX + (window.innerWidth - 400) / 2),
            (r = window.screenY + (window.innerHeight - 600) / 2),
            (o = window.open(
              n,
              'auth0:authorize:popup',
              'left=' +
                i +
                ',top=' +
                r +
                ',width=400,height=600,resizable,scrollbars=yes,status=1'
            ))),
        !o)
      )
        throw new Error('Could not open popup');
      return new Promise(function (t, n) {
        var i,
          r = setTimeout(function () {
            n(new kr(o)), window.removeEventListener('message', i, !1);
          }, 1e3 * (e.timeoutInSeconds || 60));
        (i = function (e) {
          if (e.data && 'authorization_response' === e.data.type) {
            if (
              (clearTimeout(r),
              window.removeEventListener('message', i, !1),
              o.close(),
              e.data.response.error)
            )
              return n(Hr.fromPayload(e.data.response));
            t(e.data.response);
          }
        }),
          window.addEventListener('message', function (t) {
            return i(t);
          });
      });
    },
    Nr = function () {
      return window.crypto || window.msCrypto;
    },
    Yr = function () {
      var t = Nr();
      return t.subtle || t.webkitSubtle;
    },
    Kr = function () {
      var t =
          '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.',
        e = '';
      return (
        Array.from(Nr().getRandomValues(new Uint8Array(43))).forEach(function (
          n
        ) {
          return (e += t[n % t.length]);
        }),
        e
      );
    },
    Or = function (t) {
      return btoa(t);
    },
    jr = function (t) {
      return Object.keys(t)
        .filter(function (e) {
          return void 0 !== t[e];
        })
        .map(function (e) {
          return encodeURIComponent(e) + '=' + encodeURIComponent(t[e]);
        })
        .join('&');
    },
    Pr = function (t) {
      return r(void 0, void 0, void 0, function () {
        var e;
        return o(this, function (n) {
          switch (n.label) {
            case 0:
              return (
                (e = Yr().digest(
                  { name: 'SHA-256' },
                  new TextEncoder().encode(t)
                )),
                window.msCrypto
                  ? [
                      2,
                      new Promise(function (t, n) {
                        (e.oncomplete = function (e) {
                          t(e.target.result);
                        }),
                          (e.onerror = function (t) {
                            n(t.error);
                          }),
                          (e.onabort = function () {
                            n('The digest operation was aborted');
                          });
                      })
                    ]
                  : [4, e]
              );
            case 1:
              return [2, n.sent()];
          }
        });
      });
    },
    zr = function (t) {
      return (function (t) {
        return decodeURIComponent(
          atob(t)
            .split('')
            .map(function (t) {
              return '%' + ('00' + t.charCodeAt(0).toString(16)).slice(-2);
            })
            .join('')
        );
      })(t.replace(/_/g, '/').replace(/-/g, '+'));
    },
    _r = function (t) {
      var e = new Uint8Array(t);
      return (function (t) {
        var e = { '+': '-', '/': '_', '=': '' };
        return t.replace(/[+/=]/g, function (t) {
          return e[t];
        });
      })(window.btoa(String.fromCharCode.apply(String, Array.from(e))));
    },
    Dr = function (t, e, i, c, s, a) {
      return r(void 0, void 0, void 0, function () {
        var r, u;
        return o(this, function (o) {
          switch (o.label) {
            case 0:
              return a
                ? (delete c.signal,
                  [
                    2,
                    ((g = n({ url: t, audience: e, scope: i, timeout: s }, c)),
                    (f = a),
                    new Promise(function (t, e) {
                      var n = new MessageChannel();
                      (n.port1.onmessage = function (n) {
                        n.data.error ? e(new Error(n.data.error)) : t(n.data);
                      }),
                        f.postMessage(g, [n.port2]);
                    }))
                  ])
                : [3, 1];
            case 1:
              return [
                4,
                ((l = t),
                (d = c),
                (d = d || {}),
                new Promise(function (t, e) {
                  var n = new XMLHttpRequest(),
                    i = [],
                    r = [],
                    o = {},
                    c = function () {
                      return {
                        ok: 2 == ((n.status / 100) | 0),
                        statusText: n.statusText,
                        status: n.status,
                        url: n.responseURL,
                        text: function () {
                          return Promise.resolve(n.responseText);
                        },
                        json: function () {
                          return Promise.resolve(n.responseText).then(
                            JSON.parse
                          );
                        },
                        blob: function () {
                          return Promise.resolve(new Blob([n.response]));
                        },
                        clone: c,
                        headers: {
                          keys: function () {
                            return i;
                          },
                          entries: function () {
                            return r;
                          },
                          get: function (t) {
                            return o[t.toLowerCase()];
                          },
                          has: function (t) {
                            return t.toLowerCase() in o;
                          }
                        }
                      };
                    };
                  for (var s in (n.open(d.method || 'get', l, !0),
                  (n.onload = function () {
                    n
                      .getAllResponseHeaders()
                      .replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (
                        t,
                        e,
                        n
                      ) {
                        i.push((e = e.toLowerCase())),
                          r.push([e, n]),
                          (o[e] = o[e] ? o[e] + ',' + n : n);
                      }),
                      t(c());
                  }),
                  (n.onerror = e),
                  (n.withCredentials = 'include' == d.credentials),
                  d.headers))
                    n.setRequestHeader(s, d.headers[s]);
                  n.send(d.body || null);
                }))
              ];
            case 2:
              return (r = o.sent()), (u = { ok: r.ok }), [4, r.json()];
            case 3:
              return [2, ((u.json = o.sent()), u)];
          }
          var l, d, g, f;
        });
      });
    },
    Mr = function (t, e, i, r, o, c) {
      void 0 === c && (c = 1e4);
      var s,
        a = new AbortController(),
        u = a.signal,
        l = n(n({}, r), { signal: u });
      return Promise.race([
        Dr(t, e, i, l, c, o),
        new Promise(function (t, e) {
          s = setTimeout(function () {
            a.abort(), e(new Error("Timeout when executing 'fetch'"));
          }, c);
        })
      ]).finally(function () {
        clearTimeout(s);
      });
    },
    qr = function (t, e, n, c, s, a) {
      return r(void 0, void 0, void 0, function () {
        var r, u, l, d, g, f, I, h, p, y;
        return o(this, function (o) {
          switch (o.label) {
            case 0:
              (r = null), (l = 0), (o.label = 1);
            case 1:
              if (!(l < 3)) return [3, 6];
              o.label = 2;
            case 2:
              return o.trys.push([2, 4, , 5]), [4, Mr(t, n, c, s, a, e)];
            case 3:
              return (u = o.sent()), (r = null), [3, 6];
            case 4:
              return (d = o.sent()), (r = d), [3, 5];
            case 5:
              return l++, [3, 1];
            case 6:
              if (r) throw ((r.message = r.message || 'Failed to fetch'), r);
              if (
                ((g = u.json),
                (f = g.error),
                (I = g.error_description),
                (h = i(g, ['error', 'error_description'])),
                !u.ok)
              )
                throw (
                  ((p = I || 'HTTP error. Unable to fetch ' + t),
                  ((y = new Error(p)).error = f || 'request_error'),
                  (y.error_description = p),
                  y)
                );
              return [2, h];
          }
        });
      });
    },
    $r = function (t, e) {
      return r(void 0, void 0, void 0, function () {
        var r,
          c = t.clientHash,
          s = t.baseUrl,
          a = t.timeout,
          u = t.audience,
          l = t.scope,
          d = i(t, ['clientHash', 'baseUrl', 'timeout', 'audience', 'scope']);
        return o(this, function (t) {
          switch (t.label) {
            case 0:
              return (
                (r = new URLSearchParams(
                  n({ redirect_uri: window.location.origin }, d)
                )),
                [
                  4,
                  qr(
                    s + '/oauth/token',
                    a,
                    u || 'default',
                    l,
                    {
                      method: 'POST',
                      body: r,
                      headers: {
                        Authorization: 'Basic ' + c,
                        'Content-type': 'application/x-www-form-urlencoded'
                      }
                    },
                    e
                  )
                ]
              );
            case 1:
              return [2, t.sent()];
          }
        });
      });
    },
    to = function (t) {
      return Array.from(new Set(t));
    },
    eo = function () {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      return to(t.join(' ').trim().split(/\s+/)).join(' ');
    },
    no = '@@auth0spajs@@',
    io = function (t) {
      return no + '::' + t.client_id + '::' + t.audience + '::' + t.scope;
    },
    ro = function (t) {
      var e = Math.floor(Date.now() / 1e3) + t.expires_in;
      return { body: t, expiresAt: Math.min(e, t.decodedToken.claims.exp) };
    },
    oo = (function () {
      function t() {}
      return (
        (t.prototype.save = function (t) {
          var e = io(t),
            n = ro(t);
          window.localStorage.setItem(e, JSON.stringify(n));
        }),
        (t.prototype.get = function (t, e) {
          void 0 === e && (e = 0);
          var n = io(t),
            i = this.readJson(n),
            r = Math.floor(Date.now() / 1e3);
          if (i) {
            if (!(i.expiresAt - e < r)) return i.body;
            if (i.body.refresh_token) {
              var o = this.stripData(i);
              return this.writeJson(n, o), o.body;
            }
            localStorage.removeItem(n);
          }
        }),
        (t.prototype.clear = function () {
          for (var t = localStorage.length - 1; t >= 0; t--)
            localStorage.key(t).startsWith(no) &&
              localStorage.removeItem(localStorage.key(t));
        }),
        (t.prototype.readJson = function (t) {
          var e,
            n = window.localStorage.getItem(t);
          if (n && (e = JSON.parse(n))) return e;
        }),
        (t.prototype.writeJson = function (t, e) {
          localStorage.setItem(t, JSON.stringify(e));
        }),
        (t.prototype.stripData = function (t) {
          return {
            body: { refresh_token: t.body.refresh_token },
            expiresAt: t.expiresAt
          };
        }),
        t
      );
    })(),
    co = function () {
      this.enclosedCache = (function () {
        var t = { body: {}, expiresAt: 0 };
        return {
          save: function (e) {
            var n = io(e),
              i = ro(e);
            t[n] = i;
          },
          get: function (e, n) {
            void 0 === n && (n = 0);
            var i = io(e),
              r = t[i],
              o = Math.floor(Date.now() / 1e3);
            if (r)
              return r.expiresAt - n < o
                ? r.body.refresh_token
                  ? ((r.body = { refresh_token: r.body.refresh_token }), r.body)
                  : void delete t[i]
                : r.body;
          },
          clear: function () {
            t = { body: {}, expiresAt: 0 };
          }
        };
      })();
    },
    so = 'a0.spajs.txs',
    ao = (function () {
      function t(t) {
        (this.storage = t), (this.transaction = this.storage.get(so));
      }
      return (
        (t.prototype.create = function (t) {
          (this.transaction = t),
            this.storage.save(so, t, { daysUntilExpire: 1 });
        }),
        (t.prototype.get = function () {
          return this.transaction;
        }),
        (t.prototype.remove = function () {
          delete this.transaction, this.storage.remove(so);
        }),
        t
      );
    })(),
    uo = function (t) {
      return 'number' == typeof t;
    },
    lo = [
      'iss',
      'aud',
      'exp',
      'nbf',
      'iat',
      'jti',
      'azp',
      'nonce',
      'auth_time',
      'at_hash',
      'c_hash',
      'acr',
      'amr',
      'sub_jwk',
      'cnf',
      'sip_from_tag',
      'sip_date',
      'sip_callid',
      'sip_cseq_num',
      'sip_via_branch',
      'orig',
      'dest',
      'mky',
      'events',
      'toe',
      'txn',
      'rph',
      'sid',
      'vot',
      'vtm'
    ],
    go = function (t) {
      if (!t.id_token) throw new Error('ID token is required but missing');
      var e = (function (t) {
        var e = t.split('.'),
          n = e[0],
          i = e[1],
          r = e[2];
        if (3 !== e.length || !n || !i || !r)
          throw new Error('ID token could not be decoded');
        var o = JSON.parse(zr(i)),
          c = { __raw: t },
          s = {};
        return (
          Object.keys(o).forEach(function (t) {
            (c[t] = o[t]), lo.includes(t) || (s[t] = o[t]);
          }),
          {
            encoded: { header: n, payload: i, signature: r },
            header: JSON.parse(zr(n)),
            claims: c,
            user: s
          }
        );
      })(t.id_token);
      if (!e.claims.iss)
        throw new Error(
          'Issuer (iss) claim must be a string present in the ID token'
        );
      if (e.claims.iss !== t.iss)
        throw new Error(
          'Issuer (iss) claim mismatch in the ID token; expected "' +
            t.iss +
            '", found "' +
            e.claims.iss +
            '"'
        );
      if (!e.user.sub)
        throw new Error(
          'Subject (sub) claim must be a string present in the ID token'
        );
      if ('RS256' !== e.header.alg)
        throw new Error(
          'Signature algorithm of "' +
            e.header.alg +
            '" is not supported. Expected the ID token to be signed with "RS256".'
        );
      if (
        !e.claims.aud ||
        ('string' != typeof e.claims.aud && !Array.isArray(e.claims.aud))
      )
        throw new Error(
          'Audience (aud) claim must be a string or array of strings present in the ID token'
        );
      if (Array.isArray(e.claims.aud)) {
        if (!e.claims.aud.includes(t.aud))
          throw new Error(
            'Audience (aud) claim mismatch in the ID token; expected "' +
              t.aud +
              '" but was not one of "' +
              e.claims.aud.join(', ') +
              '"'
          );
        if (e.claims.aud.length > 1) {
          if (!e.claims.azp)
            throw new Error(
              'Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values'
            );
          if (e.claims.azp !== t.aud)
            throw new Error(
              'Authorized Party (azp) claim mismatch in the ID token; expected "' +
                t.aud +
                '", found "' +
                e.claims.azp +
                '"'
            );
        }
      } else if (e.claims.aud !== t.aud)
        throw new Error(
          'Audience (aud) claim mismatch in the ID token; expected "' +
            t.aud +
            '" but found "' +
            e.claims.aud +
            '"'
        );
      if (t.nonce) {
        if (!e.claims.nonce)
          throw new Error(
            'Nonce (nonce) claim must be a string present in the ID token'
          );
        if (e.claims.nonce !== t.nonce)
          throw new Error(
            'Nonce (nonce) claim mismatch in the ID token; expected "' +
              t.nonce +
              '", found "' +
              e.claims.nonce +
              '"'
          );
      }
      if (t.max_age && !uo(e.claims.auth_time))
        throw new Error(
          'Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified'
        );
      if (!uo(e.claims.exp))
        throw new Error(
          'Expiration Time (exp) claim must be a number present in the ID token'
        );
      if (!uo(e.claims.iat))
        throw new Error(
          'Issued At (iat) claim must be a number present in the ID token'
        );
      var n = t.leeway || 60,
        i = new Date(Date.now()),
        r = new Date(0),
        o = new Date(0),
        c = new Date(0);
      if (
        (c.setUTCSeconds(parseInt(e.claims.auth_time) + t.max_age + n),
        r.setUTCSeconds(e.claims.exp + n),
        o.setUTCSeconds(e.claims.nbf - n),
        i > r)
      )
        throw new Error(
          'Expiration Time (exp) claim error in the ID token; current time (' +
            i +
            ') is after expiration time (' +
            r +
            ')'
        );
      if (uo(e.claims.nbf) && i < o)
        throw new Error(
          "Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Currrent time (" +
            i +
            ') is before ' +
            o
        );
      if (uo(e.claims.auth_time) && i > c)
        throw new Error(
          'Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Currrent time (' +
            i +
            ') is after last auth at ' +
            c
        );
      return e;
    },
    fo = a(function (t, e) {
      var n =
        (c && c.__assign) ||
        function () {
          return (n =
            Object.assign ||
            function (t) {
              for (var e, n = 1, i = arguments.length; n < i; n++)
                for (var r in (e = arguments[n]))
                  Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              return t;
            }).apply(this, arguments);
        };
      function i(t, e) {
        if (!e) return '';
        var n = '; ' + t;
        return !0 === e ? n : n + '=' + e;
      }
      function r(t, e, n) {
        return (
          encodeURIComponent(t)
            .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
            .replace(/\(/g, '%28')
            .replace(/\)/g, '%29') +
          '=' +
          encodeURIComponent(e).replace(
            /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
            decodeURIComponent
          ) +
          (function (t) {
            if ('number' == typeof t.expires) {
              var e = new Date();
              e.setMilliseconds(e.getMilliseconds() + 864e5 * t.expires),
                (t.expires = e);
            }
            return (
              i('Expires', t.expires ? t.expires.toUTCString() : '') +
              i('Domain', t.domain) +
              i('Path', t.path) +
              i('Secure', t.secure) +
              i('SameSite', t.sameSite)
            );
          })(n)
        );
      }
      function o(t) {
        for (
          var e = {}, n = t ? t.split('; ') : [], i = /(%[\dA-F]{2})+/gi, r = 0;
          r < n.length;
          r++
        ) {
          var o = n[r].split('='),
            c = o.slice(1).join('=');
          '"' === c.charAt(0) && (c = c.slice(1, -1));
          try {
            e[o[0].replace(i, decodeURIComponent)] = c.replace(
              i,
              decodeURIComponent
            );
          } catch (t) {}
        }
        return e;
      }
      function s() {
        return o(document.cookie);
      }
      function a(t, e, i) {
        document.cookie = r(t, e, n({ path: '/' }, i));
      }
      (e.__esModule = !0),
        (e.encode = r),
        (e.parse = o),
        (e.getAll = s),
        (e.get = function (t) {
          return s()[t];
        }),
        (e.set = a),
        (e.remove = function (t, e) {
          a(t, '', n(n({}, e), { expires: -1 }));
        });
    });
  s(fo);
  fo.encode, fo.parse, fo.getAll;
  var Io = fo.get,
    ho = fo.set,
    po = fo.remove,
    yo = {
      get: function (t) {
        var e = Io(t);
        if (void 0 !== e) return JSON.parse(e);
      },
      save: function (t, e, n) {
        var i = {};
        'https:' === window.location.protocol &&
          (i = { secure: !0, sameSite: 'none' }),
          (i.expires = n.daysUntilExpire),
          ho(t, JSON.stringify(e), i);
      },
      remove: function (t) {
        po(t);
      }
    },
    bo = {
      get: function (t) {
        var e = yo.get(t);
        return e || yo.get('_legacy_' + t);
      },
      save: function (t, e, n) {
        var i = {};
        'https:' === window.location.protocol && (i = { secure: !0 }),
          (i.expires = n.daysUntilExpire),
          ho('_legacy_' + t, JSON.stringify(e), i),
          yo.save(t, e, n);
      },
      remove: function (t) {
        yo.remove(t), yo.remove('_legacy_' + t);
      }
    },
    mo = {
      get: function (t) {
        if ('undefined' != typeof sessionStorage) {
          var e = sessionStorage.getItem(t);
          if (void 0 !== e) return JSON.parse(e);
        }
      },
      save: function (t, e) {
        sessionStorage.setItem(t, JSON.stringify(e));
      },
      remove: function (t) {
        sessionStorage.removeItem(t);
      }
    };
  function Bo(t, e, n) {
    var i = void 0 === e ? null : e,
      r = (function (t, e) {
        var n = atob(t);
        if (e) {
          for (
            var i = new Uint8Array(n.length), r = 0, o = n.length;
            r < o;
            ++r
          )
            i[r] = n.charCodeAt(r);
          return String.fromCharCode.apply(null, new Uint16Array(i.buffer));
        }
        return n;
      })(t, void 0 !== n && n),
      o = r.indexOf('\n', 10) + 1,
      c = r.substring(o) + (i ? '//# sourceMappingURL=' + i : ''),
      s = new Blob([c], { type: 'application/javascript' });
    return URL.createObjectURL(s);
  }
  var Co,
    vo,
    Fo,
    Uo,
    Vo =
      ((Co =
        'Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwohZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Ci8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKgogICAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuCiAgICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgIkxpY2Vuc2UiKTsgeW91IG1heSBub3QgdXNlCiAgICB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZQogICAgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAKCiAgICBUSElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZCiAgICBLSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVECiAgICBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLAogICAgTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC4KCiAgICBTZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMKICAgIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4KICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovdmFyIGU9ZnVuY3Rpb24oKXtyZXR1cm4oZT1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHIsdD0xLG49YXJndW1lbnRzLmxlbmd0aDt0PG47dCsrKWZvcih2YXIgbyBpbiByPWFyZ3VtZW50c1t0XSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocixvKSYmKGVbb109cltvXSk7cmV0dXJuIGV9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O2Z1bmN0aW9uIHIoZSxyKXt2YXIgdCxuLG8scyxhPXtsYWJlbDowLHNlbnQ6ZnVuY3Rpb24oKXtpZigxJm9bMF0pdGhyb3cgb1sxXTtyZXR1cm4gb1sxXX0sdHJ5czpbXSxvcHM6W119O3JldHVybiBzPXtuZXh0OmkoMCksdGhyb3c6aSgxKSxyZXR1cm46aSgyKX0sImZ1bmN0aW9uIj09dHlwZW9mIFN5bWJvbCYmKHNbU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfSkscztmdW5jdGlvbiBpKHMpe3JldHVybiBmdW5jdGlvbihpKXtyZXR1cm4gZnVuY3Rpb24ocyl7aWYodCl0aHJvdyBuZXcgVHlwZUVycm9yKCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuIik7Zm9yKDthOyl0cnl7aWYodD0xLG4mJihvPTImc1swXT9uLnJldHVybjpzWzBdP24udGhyb3d8fCgobz1uLnJldHVybikmJm8uY2FsbChuKSwwKTpuLm5leHQpJiYhKG89by5jYWxsKG4sc1sxXSkpLmRvbmUpcmV0dXJuIG87c3dpdGNoKG49MCxvJiYocz1bMiZzWzBdLG8udmFsdWVdKSxzWzBdKXtjYXNlIDA6Y2FzZSAxOm89czticmVhaztjYXNlIDQ6cmV0dXJuIGEubGFiZWwrKyx7dmFsdWU6c1sxXSxkb25lOiExfTtjYXNlIDU6YS5sYWJlbCsrLG49c1sxXSxzPVswXTtjb250aW51ZTtjYXNlIDc6cz1hLm9wcy5wb3AoKSxhLnRyeXMucG9wKCk7Y29udGludWU7ZGVmYXVsdDppZighKG89YS50cnlzLChvPW8ubGVuZ3RoPjAmJm9bby5sZW5ndGgtMV0pfHw2IT09c1swXSYmMiE9PXNbMF0pKXthPTA7Y29udGludWV9aWYoMz09PXNbMF0mJighb3x8c1sxXT5vWzBdJiZzWzFdPG9bM10pKXthLmxhYmVsPXNbMV07YnJlYWt9aWYoNj09PXNbMF0mJmEubGFiZWw8b1sxXSl7YS5sYWJlbD1vWzFdLG89czticmVha31pZihvJiZhLmxhYmVsPG9bMl0pe2EubGFiZWw9b1syXSxhLm9wcy5wdXNoKHMpO2JyZWFrfW9bMl0mJmEub3BzLnBvcCgpLGEudHJ5cy5wb3AoKTtjb250aW51ZX1zPXIuY2FsbChlLGEpfWNhdGNoKGUpe3M9WzYsZV0sbj0wfWZpbmFsbHl7dD1vPTB9aWYoNSZzWzBdKXRocm93IHNbMV07cmV0dXJue3ZhbHVlOnNbMF0/c1sxXTp2b2lkIDAsZG9uZTohMH19KFtzLGldKX19fXZhciB0PXt9LG49ZnVuY3Rpb24oZSxyKXtyZXR1cm4gZSsifCIrcn07YWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsKGZ1bmN0aW9uKG8pe3ZhciBzLGEsaSx1LGMsbCxmLHAsaCx5LGI7cmV0dXJuIHA9dm9pZCAwLGg9dm9pZCAwLGI9ZnVuY3Rpb24oKXt2YXIgcCxoLHksYixkLHYsdyxnO3JldHVybiByKHRoaXMsKGZ1bmN0aW9uKHIpe3N3aXRjaChyLmxhYmVsKXtjYXNlIDA6cz1vLmRhdGEsYT1zLnVybCxpPXMudGltZW91dCx1PXMuYXVkaWVuY2UsYz1zLnNjb3BlLGw9ZnVuY3Rpb24oZSxyKXt2YXIgdD17fTtmb3IodmFyIG4gaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxuKSYmci5pbmRleE9mKG4pPDAmJih0W25dPWVbbl0pO2lmKG51bGwhPWUmJiJmdW5jdGlvbiI9PXR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbz0wO2ZvcihuPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7bzxuLmxlbmd0aDtvKyspci5pbmRleE9mKG5bb10pPDAmJk9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChlLG5bb10pJiYodFtuW29dXT1lW25bb11dKX1yZXR1cm4gdH0ocyxbInVybCIsInRpbWVvdXQiLCJhdWRpZW5jZSIsInNjb3BlIl0pLGY9by5wb3J0c1swXSxyLmxhYmVsPTE7Y2FzZSAxOmlmKHIudHJ5cy5wdXNoKFsxLDcsLDhdKSwhKGg9SlNPTi5wYXJzZShsLmJvZHkpKS5yZWZyZXNoX3Rva2VuJiYicmVmcmVzaF90b2tlbiI9PT1oLmdyYW50X3R5cGUpe2lmKCEoeT1mdW5jdGlvbihlLHIpe3JldHVybiB0W24oZSxyKV19KHUsYykpKXRocm93IG5ldyBFcnJvcigiVGhlIHdlYiB3b3JrZXIgaXMgbWlzc2luZyB0aGUgcmVmcmVzaCB0b2tlbiIpO2wuYm9keT1KU09OLnN0cmluZ2lmeShlKGUoe30saCkse3JlZnJlc2hfdG9rZW46eX0pKX1iPW5ldyBBYm9ydENvbnRyb2xsZXIsZD1iLnNpZ25hbCx2PXZvaWQgMCxyLmxhYmVsPTI7Y2FzZSAyOnJldHVybiByLnRyeXMucHVzaChbMiw0LCw1XSksWzQsUHJvbWlzZS5yYWNlKFsoaz1pLG5ldyBQcm9taXNlKChmdW5jdGlvbihlKXtyZXR1cm4gc2V0VGltZW91dChlLGspfSkpKSxmZXRjaChhLGUoZSh7fSxsKSx7c2lnbmFsOmR9KSldKV07Y2FzZSAzOnJldHVybiB2PXIuc2VudCgpLFszLDVdO2Nhc2UgNDpyZXR1cm4gdz1yLnNlbnQoKSxmLnBvc3RNZXNzYWdlKHtlcnJvcjp3Lm1lc3NhZ2V9KSxbMl07Y2FzZSA1OnJldHVybiB2P1s0LHYuanNvbigpXTooYi5hYm9ydCgpLFsyXSk7Y2FzZSA2OnJldHVybihwPXIuc2VudCgpKS5yZWZyZXNoX3Rva2VuPyhmdW5jdGlvbihlLHIsbyl7dFtuKHIsbyldPWV9KHAucmVmcmVzaF90b2tlbix1LGMpLGRlbGV0ZSBwLnJlZnJlc2hfdG9rZW4pOmZ1bmN0aW9uKGUscil7ZGVsZXRlIHRbbihlLHIpXX0odSxjKSxmLnBvc3RNZXNzYWdlKHtvazp2Lm9rLGpzb246cH0pLFszLDhdO2Nhc2UgNzpyZXR1cm4gZz1yLnNlbnQoKSxmLnBvc3RNZXNzYWdlKHtvazohMSxqc29uOntlcnJvcl9kZXNjcmlwdGlvbjpnLm1lc3NhZ2V9fSksWzMsOF07Y2FzZSA4OnJldHVyblsyXX12YXIga30pKX0sbmV3KCh5PXZvaWQgMCl8fCh5PVByb21pc2UpKSgoZnVuY3Rpb24oZSxyKXtmdW5jdGlvbiB0KGUpe3RyeXtvKGIubmV4dChlKSl9Y2F0Y2goZSl7cihlKX19ZnVuY3Rpb24gbihlKXt0cnl7byhiLnRocm93KGUpKX1jYXRjaChlKXtyKGUpfX1mdW5jdGlvbiBvKHIpe3IuZG9uZT9lKHIudmFsdWUpOm5ldyB5KChmdW5jdGlvbihlKXtlKHIudmFsdWUpfSkpLnRoZW4odCxuKX1vKChiPWIuYXBwbHkocCxofHxbXSkpLm5leHQoKSl9KSl9KSl9KCk7Cgo='),
      (vo =
        'data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4ud29ya2VyLmpzIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid29ya2VyOi9DOlxcd2ViLXdvcmtlclxcc3JjXFxjb25zdGFudHMudHMiLCJzcmMvdG9rZW4ud29ya2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IFBvcHVwQ29uZmlnT3B0aW9ucyB9IGZyb20gJy4vZ2xvYmFsJztcclxuXHJcbi8qKlxyXG4gKiBAaWdub3JlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9BVVRIT1JJWkVfVElNRU9VVF9JTl9TRUNPTkRTID0gNjA7XHJcblxyXG4vKipcclxuICogQGlnbm9yZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfUE9QVVBfQ09ORklHX09QVElPTlM6IFBvcHVwQ29uZmlnT3B0aW9ucyA9IHtcclxuICB0aW1lb3V0SW5TZWNvbmRzOiBERUZBVUxUX0FVVEhPUklaRV9USU1FT1VUX0lOX1NFQ09ORFNcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAaWdub3JlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9TSUxFTlRfVE9LRU5fUkVUUllfQ09VTlQgPSAzO1xyXG5cclxuLyoqXHJcbiAqIEBpZ25vcmVcclxuICovXHJcbmV4cG9ydCBjb25zdCBDTEVBTlVQX0lGUkFNRV9USU1FT1VUX0lOX1NFQ09ORFMgPSAyO1xyXG5cclxuLyoqXHJcbiAqIEBpZ25vcmVcclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0ZFVENIX1RJTUVPVVRfTVMgPSAxMDAwMDtcclxuXHJcbmV4cG9ydCBjb25zdCBDQUNIRV9MT0NBVElPTl9NRU1PUlkgPSAnbWVtb3J5JztcclxuZXhwb3J0IGNvbnN0IENBQ0hFX0xPQ0FUSU9OX0xPQ0FMX1NUT1JBR0UgPSAnbG9jYWxzdG9yYWdlJztcclxuZXhwb3J0IGNvbnN0IE1JU1NJTkdfUkVGUkVTSF9UT0tFTl9FUlJPUl9NRVNTQUdFID1cclxuICAnVGhlIHdlYiB3b3JrZXIgaXMgbWlzc2luZyB0aGUgcmVmcmVzaCB0b2tlbic7XHJcblxyXG4vKipcclxuICogQGlnbm9yZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfU0NPUEUgPSAnb3BlbmlkIHByb2ZpbGUgZW1haWwnO1xyXG5cclxuLyoqXHJcbiAqIEEgbGlzdCBvZiBlcnJvcnMgdGhhdCBjYW4gYmUgaXNzdWVkIGJ5IHRoZSBhdXRob3JpemF0aW9uIHNlcnZlciB3aGljaCB0aGVcclxuICogdXNlciBjYW4gcmVjb3ZlciBmcm9tIGJ5IHNpZ25pbmcgaW4gaW50ZXJhY3RpdmVseS5cclxuICogaHR0cHM6Ly9vcGVuaWQubmV0L3NwZWNzL29wZW5pZC1jb25uZWN0LWNvcmUtMV8wLmh0bWwjQXV0aEVycm9yXHJcbiAqIEBpZ25vcmVcclxuICovXHJcbmV4cG9ydCBjb25zdCBSRUNPVkVSQUJMRV9FUlJPUlMgPSBbXHJcbiAgJ2xvZ2luX3JlcXVpcmVkJyxcclxuICAnY29uc2VudF9yZXF1aXJlZCcsXHJcbiAgJ2ludGVyYWN0aW9uX3JlcXVpcmVkJyxcclxuICAnYWNjb3VudF9zZWxlY3Rpb25fcmVxdWlyZWQnLFxyXG4gIC8vIFN0cmljdGx5IHNwZWFraW5nIHRoZSB1c2VyIGNhbid0IHJlY292ZXIgZnJvbSBgYWNjZXNzX2RlbmllZGAgLSBidXQgdGhleVxyXG4gIC8vIGNhbiBnZXQgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGVpciBhY2Nlc3MgYmVpbmcgZGVuaWVkIGJ5IGxvZ2dpbmcgaW5cclxuICAvLyBpbnRlcmFjdGl2ZWx5LlxyXG4gICdhY2Nlc3NfZGVuaWVkJ1xyXG5dO1xyXG5cclxuLyoqXHJcbiAqIEBpZ25vcmVcclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX1NFU1NJT05fQ0hFQ0tfRVhQSVJZX0RBWVMgPSAxO1xyXG4iLCJpbXBvcnQgeyBNSVNTSU5HX1JFRlJFU0hfVE9LRU5fRVJST1JfTUVTU0FHRSB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmxldCByZWZyZXNoVG9rZW5zID0ge307XHJcblxyXG5jb25zdCBjYWNoZUtleSA9IChhdWRpZW5jZSwgc2NvcGUpID0+IGAke2F1ZGllbmNlfXwke3Njb3BlfWA7XHJcblxyXG5jb25zdCBnZXRSZWZyZXNoVG9rZW4gPSAoYXVkaWVuY2UsIHNjb3BlKSA9PlxyXG4gIHJlZnJlc2hUb2tlbnNbY2FjaGVLZXkoYXVkaWVuY2UsIHNjb3BlKV07XHJcblxyXG5jb25zdCBzZXRSZWZyZXNoVG9rZW4gPSAocmVmcmVzaFRva2VuLCBhdWRpZW5jZSwgc2NvcGUpID0+XHJcbiAgKHJlZnJlc2hUb2tlbnNbY2FjaGVLZXkoYXVkaWVuY2UsIHNjb3BlKV0gPSByZWZyZXNoVG9rZW4pO1xyXG5cclxuY29uc3QgZGVsZXRlUmVmcmVzaFRva2VuID0gKGF1ZGllbmNlLCBzY29wZSkgPT5cclxuICBkZWxldGUgcmVmcmVzaFRva2Vuc1tjYWNoZUtleShhdWRpZW5jZSwgc2NvcGUpXTtcclxuXHJcbmNvbnN0IHdhaXQ6IGFueSA9IHRpbWUgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpKTtcclxuXHJcbmNvbnN0IG1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKHtcclxuICBkYXRhOiB7IHVybCwgdGltZW91dCwgYXVkaWVuY2UsIHNjb3BlLCAuLi5vcHRzIH0sXHJcbiAgcG9ydHM6IFtwb3J0XVxyXG59KSA9PiB7XHJcbiAgbGV0IGpzb247XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGJvZHkgPSBKU09OLnBhcnNlKG9wdHMuYm9keSk7XHJcbiAgICBpZiAoIWJvZHkucmVmcmVzaF90b2tlbiAmJiBib2R5LmdyYW50X3R5cGUgPT09ICdyZWZyZXNoX3Rva2VuJykge1xyXG4gICAgICBjb25zdCByZWZyZXNoVG9rZW4gPSBnZXRSZWZyZXNoVG9rZW4oYXVkaWVuY2UsIHNjb3BlKTtcclxuICAgICAgaWYgKCFyZWZyZXNoVG9rZW4pIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTUlTU0lOR19SRUZSRVNIX1RPS0VOX0VSUk9SX01FU1NBR0UpO1xyXG4gICAgICB9XHJcbiAgICAgIG9wdHMuYm9keSA9IEpTT04uc3RyaW5naWZ5KHsgLi4uYm9keSwgcmVmcmVzaF90b2tlbjogcmVmcmVzaFRva2VuIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcclxuICAgIGNvbnN0IHsgc2lnbmFsIH0gPSBhYm9ydENvbnRyb2xsZXI7XHJcblxyXG4gICAgbGV0IHJlc3BvbnNlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmVzcG9uc2UgPSBhd2FpdCBQcm9taXNlLnJhY2UoW1xyXG4gICAgICAgIHdhaXQodGltZW91dCksXHJcbiAgICAgICAgZmV0Y2godXJsLCB7IC4uLm9wdHMsIHNpZ25hbCB9KVxyXG4gICAgICBdKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIC8vIGZldGNoIGVycm9yLCByZWplY3QgYHNlbmRNZXNzYWdlYCB1c2luZyBgZXJyb3JgIGtleSBzbyB0aGF0IHdlIHJldHJ5LlxyXG4gICAgICBwb3J0LnBvc3RNZXNzYWdlKHtcclxuICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghcmVzcG9uc2UpIHtcclxuICAgICAgLy8gSWYgdGhlIHJlcXVlc3QgdGltZXMgb3V0LCBhYm9ydCBpdCBhbmQgbGV0IGBmZXRjaFdpdGhUaW1lb3V0YCByYWlzZSB0aGUgZXJyb3IuXHJcbiAgICAgIGFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICBpZiAoanNvbi5yZWZyZXNoX3Rva2VuKSB7XHJcbiAgICAgIHNldFJlZnJlc2hUb2tlbihqc29uLnJlZnJlc2hfdG9rZW4sIGF1ZGllbmNlLCBzY29wZSk7XHJcbiAgICAgIGRlbGV0ZSBqc29uLnJlZnJlc2hfdG9rZW47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkZWxldGVSZWZyZXNoVG9rZW4oYXVkaWVuY2UsIHNjb3BlKTtcclxuICAgIH1cclxuXHJcbiAgICBwb3J0LnBvc3RNZXNzYWdlKHtcclxuICAgICAgb2s6IHJlc3BvbnNlLm9rLFxyXG4gICAgICBqc29uXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcG9ydC5wb3N0TWVzc2FnZSh7XHJcbiAgICAgIG9rOiBmYWxzZSxcclxuICAgICAganNvbjoge1xyXG4gICAgICAgIGVycm9yX2Rlc2NyaXB0aW9uOiBlcnJvci5tZXNzYWdlXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIERvbid0IHJ1biBgYWRkRXZlbnRMaXN0ZW5lcmAgaW4gb3VyIHRlc3RzICh0aGlzIGlzIHJlcGxhY2VkIGluIHJvbGx1cClcclxuLyogaXN0YW5idWwgaWdub3JlIGVsc2UgICovXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Rlc3QnKSB7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB7IG1lc3NhZ2VIYW5kbGVyIH07XHJcbn0gZWxzZSB7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIGFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBtZXNzYWdlSGFuZGxlcik7XHJcbn1cclxuIl0sIm5hbWVzIjpbIl9fYXNzaWduIiwiT2JqZWN0IiwiYXNzaWduIiwidCIsInMiLCJpIiwibiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSIsInRoaXMiLCJfX2dlbmVyYXRvciIsInRoaXNBcmciLCJib2R5IiwiZiIsInkiLCJnIiwiXyIsImxhYmVsIiwic2VudCIsInRyeXMiLCJvcHMiLCJuZXh0IiwidmVyYiIsInRocm93IiwicmV0dXJuIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJ2Iiwib3AiLCJUeXBlRXJyb3IiLCJkb25lIiwidmFsdWUiLCJwb3AiLCJwdXNoIiwiZSIsInN0ZXAiLCJyZWZyZXNoVG9rZW5zIiwiY2FjaGVLZXkiLCJhdWRpZW5jZSIsInNjb3BlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9hIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJfYiIsInVybCIsInRpbWVvdXQiLCJvcHRzIiwiaW5kZXhPZiIsImdldE93blByb3BlcnR5U3ltYm9scyIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwicG9ydCIsIkpTT04iLCJwYXJzZSIsInJlZnJlc2hfdG9rZW4iLCJncmFudF90eXBlIiwicmVmcmVzaFRva2VuIiwiZ2V0UmVmcmVzaFRva2VuIiwiRXJyb3IiLCJzdHJpbmdpZnkiLCJhYm9ydENvbnRyb2xsZXIiLCJBYm9ydENvbnRyb2xsZXIiLCJzaWduYWwiLCJyZXNwb25zZSIsIlByb21pc2UiLCJyYWNlIiwidGltZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiZmV0Y2giLCJfYyIsInBvc3RNZXNzYWdlIiwiZXJyb3IiLCJlcnJvcl8xIiwibWVzc2FnZSIsImpzb24iLCJhYm9ydCIsInNldFJlZnJlc2hUb2tlbiIsImRlbGV0ZVJlZnJlc2hUb2tlbiIsIm9rIiwiZXJyb3JfZGVzY3JpcHRpb24iLCJlcnJvcl8yIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwicmVqZWN0ZWQiLCJyZXN1bHQiLCJ0aGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztvRkE2Qk8sSUFBSUEsRUFBVyxXQVFsQixPQVBBQSxFQUFXQyxPQUFPQyxRQUFVLFNBQWtCQyxHQUMxQyxJQUFLLElBQUlDLEVBQUdDLEVBQUksRUFBR0MsRUFBSUMsVUFBVUMsT0FBUUgsRUFBSUMsRUFBR0QsSUFFNUMsSUFBSyxJQUFJSSxLQURUTCxFQUFJRyxVQUFVRixHQUNPSixPQUFPUyxVQUFVQyxlQUFlQyxLQUFLUixFQUFHSyxLQUFJTixFQUFFTSxHQUFLTCxFQUFFSyxJQUU5RSxPQUFPTixJQUVLVSxNQUFNQyxLQUFNUCxZQXVDekIsU0FBU1EsRUFBWUMsRUFBU0MsR0FDakMsSUFBc0dDLEVBQUdDLEVBQUdoQixFQUFHaUIsRUFBM0dDLEVBQUksQ0FBRUMsTUFBTyxFQUFHQyxLQUFNLFdBQWEsR0FBVyxFQUFQcEIsRUFBRSxHQUFRLE1BQU1BLEVBQUUsR0FBSSxPQUFPQSxFQUFFLElBQU9xQixLQUFNLEdBQUlDLElBQUssSUFDaEcsT0FBT0wsRUFBSSxDQUFFTSxLQUFNQyxFQUFLLEdBQUlDLE1BQVNELEVBQUssR0FBSUUsT0FBVUYsRUFBSyxJQUF3QixtQkFBWEcsU0FBMEJWLEVBQUVVLE9BQU9DLFVBQVksV0FBYSxPQUFPakIsT0FBVU0sRUFDdkosU0FBU08sRUFBS3JCLEdBQUssT0FBTyxTQUFVMEIsR0FBSyxPQUN6QyxTQUFjQyxHQUNWLEdBQUlmLEVBQUcsTUFBTSxJQUFJZ0IsVUFBVSxtQ0FDM0IsS0FBT2IsT0FDSCxHQUFJSCxFQUFJLEVBQUdDLElBQU1oQixFQUFZLEVBQVI4QixFQUFHLEdBQVNkLEVBQVUsT0FBSWMsRUFBRyxHQUFLZCxFQUFTLFNBQU9oQixFQUFJZ0IsRUFBVSxTQUFNaEIsRUFBRVMsS0FBS08sR0FBSSxHQUFLQSxFQUFFTyxTQUFXdkIsRUFBSUEsRUFBRVMsS0FBS08sRUFBR2MsRUFBRyxLQUFLRSxLQUFNLE9BQU9oQyxFQUUzSixPQURJZ0IsRUFBSSxFQUFHaEIsSUFBRzhCLEVBQUssQ0FBUyxFQUFSQSxFQUFHLEdBQVE5QixFQUFFaUMsUUFDekJILEVBQUcsSUFDUCxLQUFLLEVBQUcsS0FBSyxFQUFHOUIsRUFBSThCLEVBQUksTUFDeEIsS0FBSyxFQUFjLE9BQVhaLEVBQUVDLFFBQWdCLENBQUVjLE1BQU9ILEVBQUcsR0FBSUUsTUFBTSxHQUNoRCxLQUFLLEVBQUdkLEVBQUVDLFFBQVNILEVBQUljLEVBQUcsR0FBSUEsRUFBSyxDQUFDLEdBQUksU0FDeEMsS0FBSyxFQUFHQSxFQUFLWixFQUFFSSxJQUFJWSxNQUFPaEIsRUFBRUcsS0FBS2EsTUFBTyxTQUN4QyxRQUNJLEtBQU1sQyxFQUFJa0IsRUFBRUcsTUFBTXJCLEVBQUlBLEVBQUVLLE9BQVMsR0FBS0wsRUFBRUEsRUFBRUssT0FBUyxLQUFrQixJQUFWeUIsRUFBRyxJQUFzQixJQUFWQSxFQUFHLElBQVcsQ0FBRVosRUFBSSxFQUFHLFNBQ2pHLEdBQWMsSUFBVlksRUFBRyxNQUFjOUIsR0FBTThCLEVBQUcsR0FBSzlCLEVBQUUsSUFBTThCLEVBQUcsR0FBSzlCLEVBQUUsSUFBTSxDQUFFa0IsRUFBRUMsTUFBUVcsRUFBRyxHQUFJLE1BQzlFLEdBQWMsSUFBVkEsRUFBRyxJQUFZWixFQUFFQyxNQUFRbkIsRUFBRSxHQUFJLENBQUVrQixFQUFFQyxNQUFRbkIsRUFBRSxHQUFJQSxFQUFJOEIsRUFBSSxNQUM3RCxHQUFJOUIsR0FBS2tCLEVBQUVDLE1BQVFuQixFQUFFLEdBQUksQ0FBRWtCLEVBQUVDLE1BQVFuQixFQUFFLEdBQUlrQixFQUFFSSxJQUFJYSxLQUFLTCxHQUFLLE1BQ3ZEOUIsRUFBRSxJQUFJa0IsRUFBRUksSUFBSVksTUFDaEJoQixFQUFFRyxLQUFLYSxNQUFPLFNBRXRCSixFQUFLaEIsRUFBS0wsS0FBS0ksRUFBU0ssR0FDMUIsTUFBT2tCLEdBQUtOLEVBQUssQ0FBQyxFQUFHTSxHQUFJcEIsRUFBSSxVQUFlRCxFQUFJZixFQUFJLEVBQ3RELEdBQVksRUFBUjhCLEVBQUcsR0FBUSxNQUFNQSxFQUFHLEdBQUksTUFBTyxDQUFFRyxNQUFPSCxFQUFHLEdBQUtBLEVBQUcsUUFBSyxFQUFRRSxNQUFNLEdBckI5QkssQ0FBSyxDQUFDbEMsRUFBRzBCLE1DaER0RCxJQzdCSFMsRUFBZ0IsR0FFZEMsRUFBVyxTQUFDQyxFQUFVQyxHQUFVLE9BQUdELE1BQVlDLEdBZ0ZuREMsaUJBQWlCLFdBbkVJLFNBQU9DLHFCRmtESjlCLEVBQVMrQixFQUFZQyxFQUFHQyxTQUF4QmpDLFNBQVMrQixTQUFlRSxtRkVqRGhEQyxTQUFRQyxRQUFLQyxZQUFTVCxhQUFVQyxVQUFVUyxFRnNCckMsU0FBZ0JqRCxFQUFHbUMsR0FDdEIsSUFBSXBDLEVBQUksR0FDUixJQUFLLElBQUlNLEtBQUtMLEVBQU9ILE9BQU9TLFVBQVVDLGVBQWVDLEtBQUtSLEVBQUdLLElBQU04QixFQUFFZSxRQUFRN0MsR0FBSyxJQUM5RU4sRUFBRU0sR0FBS0wsRUFBRUssSUFDYixHQUFTLE1BQUxMLEdBQXFELG1CQUFqQ0gsT0FBT3NELHNCQUN0QixDQUFBLElBQUlsRCxFQUFJLEVBQWIsSUFBZ0JJLEVBQUlSLE9BQU9zRCxzQkFBc0JuRCxHQUFJQyxFQUFJSSxFQUFFRCxPQUFRSCxJQUMzRGtDLEVBQUVlLFFBQVE3QyxFQUFFSixJQUFNLEdBQUtKLE9BQU9TLFVBQVU4QyxxQkFBcUI1QyxLQUFLUixFQUFHSyxFQUFFSixNQUN2RUYsRUFBRU0sRUFBRUosSUFBTUQsRUFBRUssRUFBRUosS0FFMUIsT0FBT0YsS0UvQkgsc0NBQ0VzRCw4QkFLTiwyQkFETXhDLEVBQU95QyxLQUFLQyxNQUFNTixFQUFLcEMsT0FDbkIyQyxlQUFxQyxrQkFBcEIzQyxFQUFLNEMsV0FBZ0MsQ0FFOUQsS0FETUMsRUFuQlksU0FBQ25CLEVBQVVDLEdBQ2pDLE9BQUFILEVBQWNDLEVBQVNDLEVBQVVDLElBa0JSbUIsQ0FBZ0JwQixFQUFVQyxJQUU3QyxNQUFNLElBQUlvQixNREtoQiwrQ0NISVgsRUFBS3BDLEtBQU95QyxLQUFLTyxpQkFBZWhELElBQU0yQyxjQUFlRSxLQUdqREksRUFBa0IsSUFBSUMsZ0JBQ3BCQyxFQUFXRixTQUVmRywwQkFFUyxnQ0FBTUMsUUFBUUMsS0FBSyxFQXRCbEJDLEVBdUJMcEIsRUF2QmEsSUFBSWtCLFNBQVEsU0FBQUcsR0FBVyxPQUFBQyxXQUFXRCxFQUFTRCxPQXdCN0RHLE1BQU14QixTQUFVRSxJQUFNZSw2QkFGeEJDLEVBQVdPLHNCQVNYLGtCQUhBbkIsRUFBS29CLFlBQVksQ0FDZkMsTUFBT0MsRUFBTUMscUJBS2pCLE9BQUtYLEtBTVFBLEVBQVNZLFNBSnBCZixFQUFnQmdCLDJCQUlsQkQsRUFBT0wsVUFFRWhCLGVBaERXLFNBQUNFLEVBQWNuQixFQUFVQyxHQUM5Q0gsRUFBY0MsRUFBU0MsRUFBVUMsSUFBVWtCLEVBZ0R4Q3FCLENBQWdCRixFQUFLckIsY0FBZWpCLEVBQVVDLFVBQ3ZDcUMsRUFBS3JCLGVBL0NTLFNBQUNqQixFQUFVQyxVQUM3QkgsRUFBY0MsRUFBU0MsRUFBVUMsSUFnRHBDd0MsQ0FBbUJ6QyxFQUFVQyxHQUcvQmEsRUFBS29CLFlBQVksQ0FDZlEsR0FBSWhCLEVBQVNnQixHQUNiSix3Q0FHRnhCLEVBQUtvQixZQUFZLENBQ2ZRLElBQUksRUFDSkosS0FBTSxDQUNKSyxrQkFBbUJDLEVBQU1QLGtDQXpEZixJQUFBUixNRnFEUCxLQURvQ3hCLFlBQ3pCQSxFQUFJc0IsV0FBVSxTQUFVRyxFQUFTZSxHQUMvQyxTQUFTQyxFQUFVckQsR0FBUyxJQUFNSSxFQUFLUyxFQUFVdkIsS0FBS1UsSUFBVyxNQUFPRyxHQUFLaUQsRUFBT2pELElBQ3BGLFNBQVNtRCxFQUFTdEQsR0FBUyxJQUFNSSxFQUFLUyxFQUFpQixNQUFFYixJQUFXLE1BQU9HLEdBQUtpRCxFQUFPakQsSUFDdkYsU0FBU0MsRUFBS21ELEdBQVVBLEVBQU94RCxLQUFPc0MsRUFBUWtCLEVBQU92RCxPQUFTLElBQUlZLEdBQUUsU0FBVXlCLEdBQVdBLEVBQVFrQixFQUFPdkQsVUFBV3dELEtBQUtILEVBQVdDLEdBQ25JbEQsR0FBTVMsRUFBWUEsRUFBVXBDLE1BQU1HLEVBQVMrQixHQUFjLEtBQUtyQiJ9'),
      (Fo = !1),
      function (t) {
        return (Uo = Uo || Bo(Co, vo, Fo)), new Worker(Uo, t);
      }),
    So = new Ar(),
    Zo = 'auth0.lock.getTokenSilently',
    Xo = {
      memory: function () {
        return new co().enclosedCache;
      },
      localstorage: function () {
        return new oo();
      }
    },
    xo = function (t) {
      return Xo[t];
    },
    wo = function () {
      return !(
        /Trident.*rv:11\.0/.test(navigator.userAgent) ||
        /AppleWebKit.*Version\/10/.test(navigator.userAgent) ||
        /AppleWebKit.*Version\/11/.test(navigator.userAgent) ||
        /AppleWebKit.*Version\/12\.0/.test(navigator.userAgent)
      );
    },
    Go = (function () {
      function t(t) {
        var e, n;
        if (
          ((this.options = t),
          'undefined' != typeof window &&
            (function () {
              if (!Nr())
                throw new Error(
                  'For security reasons, `window.crypto` is required to run `auth0-spa-js`.'
                );
              if (void 0 === Yr())
                throw new Error(
                  '\n      auth0-spa-js must run on a secure origin. See https://github.com/auth0/auth0-spa-js/blob/master/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin for more information.\n    '
                );
            })(),
          (this.cacheLocation = t.cacheLocation || Rr),
          (this.cookieStorage = !1 === t.legacySameSiteCookie ? yo : bo),
          (this.sessionCheckExpiryDays = t.sessionCheckExpiryDays || 1),
          !xo(this.cacheLocation))
        )
          throw new Error(
            'Invalid cache location "' + this.cacheLocation + '"'
          );
        var r,
          o,
          c = t.useCookiesForTransactions ? this.cookieStorage : mo;
        (this.cache = xo(this.cacheLocation)()),
          (this.scope = this.options.scope),
          (this.clientHash = this.options.clientHash),
          (this.transactionManager = new ao(c)),
          (this.domainUrl = 'https://' + this.options.domain),
          (this.tokenIssuer =
            ((r = this.options.issuer),
            (o = this.domainUrl),
            r
              ? r.startsWith('https://')
                ? r
                : 'https://' + r + '/'
              : o + '/')),
          (this.defaultScope = eo(
            'openid',
            void 0 !==
              (null ===
                (n =
                  null === (e = this.options) || void 0 === e
                    ? void 0
                    : e.advancedOptions) || void 0 === n
                ? void 0
                : n.defaultScope)
              ? this.options.advancedOptions.defaultScope
              : 'openid profile email'
          )),
          this.options.useRefreshTokens &&
            (this.scope = eo(this.scope, 'offline_access')),
          'undefined' != typeof window &&
            window.Worker &&
            this.options.useRefreshTokens &&
            this.cacheLocation === Rr &&
            wo() &&
            (this.worker = new Vo()),
          (this.customOptions = (function (t) {
            return (
              t.advancedOptions,
              t.audience,
              t.auth0Client,
              t.authorizeTimeoutInSeconds,
              t.cacheLocation,
              t.client_id,
              t.domain,
              t.issuer,
              t.leeway,
              t.max_age,
              t.redirect_uri,
              t.scope,
              t.useRefreshTokens,
              i(t, [
                'advancedOptions',
                'audience',
                'auth0Client',
                'authorizeTimeoutInSeconds',
                'cacheLocation',
                'client_id',
                'domain',
                'issuer',
                'leeway',
                'max_age',
                'redirect_uri',
                'scope',
                'useRefreshTokens'
              ])
            );
          })(t));
      }
      return (
        (t.prototype._url = function (t) {
          var e = encodeURIComponent(
            btoa(
              JSON.stringify(
                this.options.auth0Client || {
                  name: 'auth0-spa-js',
                  version: '1.13.1'
                }
              )
            )
          );
          return '' + this.domainUrl + t + '&auth0Client=' + e;
        }),
        (t.prototype._getParams = function (t, e, r, o, c) {
          var s = this.options,
            a =
              (s.domain,
              s.leeway,
              s.useRefreshTokens,
              s.auth0Client,
              s.cacheLocation,
              s.advancedOptions,
              i(s, [
                'domain',
                'leeway',
                'useRefreshTokens',
                'auth0Client',
                'cacheLocation',
                'advancedOptions'
              ]));
          return n(n(n({}, a), t), {
            scope: eo(this.defaultScope, this.scope, t.scope),
            response_type: 'code',
            response_mode: 'query',
            state: e,
            nonce: r,
            redirect_uri: c || this.options.redirect_uri,
            code_challenge: o,
            code_challenge_method: 'S256'
          });
        }),
        (t.prototype._authorizeUrl = function (t) {
          return this._url('/authorize?' + jr(t));
        }),
        (t.prototype._verifyIdToken = function (t, e) {
          return go({
            iss: this.tokenIssuer,
            aud: this.options.client_id,
            id_token: t,
            nonce: e,
            leeway: this.options.leeway,
            max_age: this._parseNumber(this.options.max_age)
          });
        }),
        (t.prototype._parseNumber = function (t) {
          return 'string' != typeof t ? t : parseInt(t, 10) || void 0;
        }),
        (t.prototype.buildAuthorizeUrl = function (t) {
          return (
            void 0 === t && (t = {}),
            r(this, void 0, void 0, function () {
              var e, n, r, c, s, a, u, l, d, g, f;
              return o(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      (e = t.redirect_uri),
                      (n = t.appState),
                      (r = i(t, ['redirect_uri', 'appState'])),
                      (c = Or(Kr())),
                      (s = Or(Kr())),
                      (a = Kr()),
                      [4, Pr(a)]
                    );
                  case 1:
                    return (
                      (u = o.sent()),
                      (l = _r(u)),
                      (d = t.fragment ? '#' + t.fragment : ''),
                      (g = this._getParams(r, c, s, l, e)),
                      (f = this._authorizeUrl(g)),
                      this.transactionManager.create({
                        nonce: s,
                        code_verifier: a,
                        appState: n,
                        scope: g.scope,
                        audience: g.audience || 'default',
                        redirect_uri: g.redirect_uri
                      }),
                      [2, f + d]
                    );
                }
              });
            })
          );
        }),
        (t.prototype.loginWithPopup = function (t, e) {
          return (
            void 0 === t && (t = {}),
            void 0 === e && (e = {}),
            r(this, void 0, void 0, function () {
              var r, c, s, a, u, l, d, g, f, I, h, p;
              return o(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      (r = i(t, [])),
                      (c = Or(Kr())),
                      (s = Or(Kr())),
                      (a = Kr()),
                      [4, Pr(a)]
                    );
                  case 1:
                    return (
                      (u = o.sent()),
                      (l = _r(u)),
                      (d = this._getParams(
                        r,
                        c,
                        s,
                        l,
                        this.options.redirect_uri || window.location.origin
                      )),
                      (g = this._authorizeUrl(
                        n(n({}, d), { response_mode: 'web_message' })
                      )),
                      [
                        4,
                        Tr(
                          g,
                          n(n({}, e), {
                            timeoutInSeconds:
                              e.timeoutInSeconds ||
                              this.options.authorizeTimeoutInSeconds ||
                              60
                          })
                        )
                      ]
                    );
                  case 2:
                    if (((f = o.sent()), c !== f.state))
                      throw new Error('Invalid state');
                    return [
                      4,
                      $r(
                        {
                          audience: d.audience,
                          scope: d.scope,
                          baseUrl: this.domainUrl,
                          client_id: this.options.client_id,
                          code_verifier: a,
                          code: f.code,
                          grant_type: 'authorization_code',
                          redirect_uri: d.redirect_uri
                        },
                        this.worker
                      )
                    ];
                  case 3:
                    return (
                      (I = o.sent()),
                      (h = this._verifyIdToken(I.id_token, s)),
                      (p = n(n({}, I), {
                        decodedToken: h,
                        scope: d.scope,
                        audience: d.audience || 'default',
                        client_id: this.options.client_id
                      })),
                      this.cache.save(p),
                      this.cookieStorage.save('auth0.is.authenticated', !0, {
                        daysUntilExpire: this.sessionCheckExpiryDays
                      }),
                      [2]
                    );
                }
              });
            })
          );
        }),
        (t.prototype.getUser = function (t) {
          return (
            void 0 === t && (t = {}),
            r(this, void 0, void 0, function () {
              var e, n, i;
              return o(this, function (r) {
                return (
                  (e = t.audience || this.options.audience || 'default'),
                  (n = eo(this.defaultScope, this.scope, t.scope)),
                  [
                    2,
                    (i = this.cache.get({
                      client_id: this.options.client_id,
                      audience: e,
                      scope: n
                    })) &&
                      i.decodedToken &&
                      i.decodedToken.user
                  ]
                );
              });
            })
          );
        }),
        (t.prototype.getIdTokenClaims = function (t) {
          return (
            void 0 === t && (t = {}),
            r(this, void 0, void 0, function () {
              var e, n, i;
              return o(this, function (r) {
                return (
                  (e = t.audience || this.options.audience || 'default'),
                  (n = eo(this.defaultScope, this.scope, t.scope)),
                  [
                    2,
                    (i = this.cache.get({
                      client_id: this.options.client_id,
                      audience: e,
                      scope: n
                    })) &&
                      i.decodedToken &&
                      i.decodedToken.claims
                  ]
                );
              });
            })
          );
        }),
        (t.prototype.loginWithRedirect = function (t) {
          return (
            void 0 === t && (t = {}),
            r(this, void 0, void 0, function () {
              var e;
              return o(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.buildAuthorizeUrl(t)];
                  case 1:
                    return (e = n.sent()), window.location.assign(e), [2];
                }
              });
            })
          );
        }),
        (t.prototype.handleRedirectCallback = function (t) {
          return (
            void 0 === t && (t = window.location.href),
            r(this, void 0, void 0, function () {
              var e, i, r, c, s, a, u, l, d, g, f;
              return o(this, function (o) {
                switch (o.label) {
                  case 0:
                    if (0 === (e = t.split('?').slice(1)).length)
                      throw new Error(
                        'There are no query params available for parsing.'
                      );
                    if (
                      ((i = (function (t) {
                        t.indexOf('#') > -1 &&
                          (t = t.substr(0, t.indexOf('#')));
                        var e = t.split('&'),
                          i = {};
                        return (
                          e.forEach(function (t) {
                            var e = t.split('='),
                              n = e[0],
                              r = e[1];
                            i[n] = decodeURIComponent(r);
                          }),
                          n(n({}, i), { expires_in: parseInt(i.expires_in) })
                        );
                      })(e.join(''))),
                      (r = i.state),
                      (c = i.code),
                      (s = i.error),
                      (a = i.error_description),
                      !(u = this.transactionManager.get()) ||
                        !u.code_verifier ||
                        !u.nonce)
                    )
                      throw new Error('Invalid state');
                    if (s)
                      throw (
                        (this.transactionManager.remove(),
                        new Lr(s, a, r, u.appState))
                      );
                    return (
                      this.transactionManager.remove(),
                      (l = {
                        audience: u.audience,
                        scope: u.scope,
                        baseUrl: this.domainUrl,
                        clientHash: this.clientHash,
                        client_id: this.options.client_id,
                        code_verifier: u.code_verifier,
                        grant_type: 'authorization_code',
                        code: c
                      }),
                      void 0 !== u.redirect_uri &&
                        (l.redirect_uri = u.redirect_uri),
                      [4, $r(l, this.worker)]
                    );
                  case 1:
                    return (
                      (d = o.sent()),
                      (g = this._verifyIdToken(d.id_token)),
                      (f = n(n({}, d), {
                        decodedToken: g,
                        audience: u.audience,
                        scope: u.scope,
                        client_id: this.options.client_id
                      })),
                      this.cache.save(f),
                      this.cookieStorage.save('auth0.is.authenticated', !0, {
                        daysUntilExpire: this.sessionCheckExpiryDays
                      }),
                      [2, { appState: u.appState }]
                    );
                }
              });
            })
          );
        }),
        (t.prototype.checkSession = function (t) {
          return r(this, void 0, void 0, function () {
            var e;
            return o(this, function (n) {
              switch (n.label) {
                case 0:
                  if (!this.cookieStorage.get('auth0.is.authenticated'))
                    return [2];
                  n.label = 1;
                case 1:
                  return (
                    n.trys.push([1, 3, , 4]), [4, this.getTokenSilently(t)]
                  );
                case 2:
                  return n.sent(), [3, 4];
                case 3:
                  if (((e = n.sent()), !Jr.includes(e.error))) throw e;
                  return [3, 4];
                case 4:
                  return [2];
              }
            });
          });
        }),
        (t.prototype.getTokenSilently = function (t) {
          return (
            void 0 === t && (t = {}),
            r(this, void 0, void 0, function () {
              var e,
                r,
                c,
                s,
                a,
                u,
                l,
                d = this;
              return o(this, function (o) {
                switch (o.label) {
                  case 0:
                    if (
                      ((e = n(
                        n(
                          { audience: this.options.audience, ignoreCache: !1 },
                          t
                        ),
                        { scope: eo(this.defaultScope, this.scope, t.scope) }
                      )),
                      (r = e.ignoreCache),
                      (c = i(e, ['ignoreCache'])),
                      console.log('Getting token silently, ignore cache: ' + r),
                      (s = function () {
                        var t = d.cache.get(
                          {
                            scope: c.scope,
                            audience: c.audience || 'default',
                            client_id: d.options.client_id
                          },
                          60
                        );
                        return t && t.access_token;
                      }),
                      !r && (a = s()))
                    )
                      return [2, a];
                    o.label = 1;
                  case 1:
                    return (
                      o.trys.push([1, 7, 8, 10]), [4, So.acquireLock(Zo, 5e3)]
                    );
                  case 2:
                    return (
                      o.sent(),
                      !r && (a = s())
                        ? [2, a]
                        : this.options.useRefreshTokens
                        ? [4, this._getTokenUsingRefreshToken(c)]
                        : [3, 4]
                    );
                  case 3:
                    return (l = o.sent()), [3, 6];
                  case 4:
                    return [4, this._getTokenFromIFrame(c)];
                  case 5:
                    (l = o.sent()), (o.label = 6);
                  case 6:
                    return (
                      (u = l),
                      this.cache.save(
                        n({ client_id: this.options.client_id }, u)
                      ),
                      this.cookieStorage.save('auth0.is.authenticated', !0, {
                        daysUntilExpire: this.sessionCheckExpiryDays
                      }),
                      [2, u.access_token]
                    );
                  case 7:
                    throw o.sent();
                  case 8:
                    return [4, So.releaseLock(Zo)];
                  case 9:
                    return o.sent(), [7];
                  case 10:
                    return [2];
                }
              });
            })
          );
        }),
        (t.prototype.getTokenWithPopup = function (t, e) {
          return (
            void 0 === t && (t = {}),
            void 0 === e && (e = {}),
            r(this, void 0, void 0, function () {
              return o(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      (t.audience = t.audience || this.options.audience),
                      (t.scope = eo(this.defaultScope, this.scope, t.scope)),
                      (e = n(n({}, Qr), e)),
                      [4, this.loginWithPopup(t, e)]
                    );
                  case 1:
                    return (
                      i.sent(),
                      [
                        2,
                        this.cache.get({
                          scope: t.scope,
                          audience: t.audience || 'default',
                          client_id: this.options.client_id
                        }).access_token
                      ]
                    );
                }
              });
            })
          );
        }),
        (t.prototype.isAuthenticated = function () {
          return r(this, void 0, void 0, function () {
            return o(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4, this.getUser()];
                case 1:
                  return [2, !!t.sent()];
              }
            });
          });
        }),
        (t.prototype.buildLogoutUrl = function (t) {
          void 0 === t && (t = {}),
            null !== t.client_id
              ? (t.client_id = t.client_id || this.options.client_id)
              : delete t.client_id;
          var e = t.federated,
            n = i(t, ['federated']),
            r = e ? '&federated' : '';
          return this._url('/v2/logout?' + jr(n)) + r;
        }),
        (t.prototype.logout = function (t) {
          void 0 === t && (t = {});
          var e = t.localOnly,
            n = i(t, ['localOnly']);
          if (e && n.federated)
            throw new Error(
              'It is invalid to set both the `federated` and `localOnly` options to `true`'
            );
          if (
            (this.cache.clear(),
            this.cookieStorage.remove('auth0.is.authenticated'),
            !e)
          ) {
            var r = this.buildLogoutUrl(n);
            window.location.assign(r);
          }
        }),
        (t.prototype._getTokenFromIFrame = function (t) {
          return r(this, void 0, void 0, function () {
            var e, r, c, s, a, u, l, d, g, f, I, h, p, y;
            return o(this, function (o) {
              switch (o.label) {
                case 0:
                  return (e = Or(Kr())), (r = Or(Kr())), (c = Kr()), [4, Pr(c)];
                case 1:
                  return (
                    (s = o.sent()),
                    (a = _r(s)),
                    (u = this._getParams(
                      t,
                      e,
                      r,
                      a,
                      t.redirect_uri ||
                        this.options.redirect_uri ||
                        window.location.origin
                    )),
                    (l = this._authorizeUrl(
                      n(n({}, u), {
                        prompt: 'none',
                        response_mode: 'web_message'
                      })
                    )),
                    (d =
                      t.timeoutInSeconds ||
                      this.options.authorizeTimeoutInSeconds),
                    [4, Er(l, this.domainUrl, d)]
                  );
                case 2:
                  if (((g = o.sent()), e !== g.state))
                    throw new Error('Invalid state');
                  return (
                    (f = t.scope),
                    (I = t.audience),
                    t.redirect_uri,
                    t.ignoreCache,
                    t.timeoutInSeconds,
                    (h = i(t, [
                      'scope',
                      'audience',
                      'redirect_uri',
                      'ignoreCache',
                      'timeoutInSeconds'
                    ])),
                    [
                      4,
                      $r(
                        n(n(n({}, this.customOptions), h), {
                          scope: f,
                          audience: I,
                          baseUrl: this.domainUrl,
                          client_id: this.options.client_id,
                          code_verifier: c,
                          code: g.code,
                          grant_type: 'authorization_code',
                          redirect_uri: u.redirect_uri
                        }),
                        this.worker
                      )
                    ]
                  );
                case 3:
                  return (
                    (p = o.sent()),
                    (y = this._verifyIdToken(p.id_token, r)),
                    [
                      2,
                      n(n({}, p), {
                        decodedToken: y,
                        scope: u.scope,
                        audience: u.audience || 'default'
                      })
                    ]
                  );
              }
            });
          });
        }),
        (t.prototype._getTokenUsingRefreshToken = function (t) {
          return r(this, void 0, void 0, function () {
            var e, r, c, s, a, u, l, d;
            return o(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    (t.scope = eo(
                      this.defaultScope,
                      this.options.scope,
                      t.scope
                    )),
                    ((e = this.cache.get({
                      scope: t.scope,
                      audience: t.audience || 'default',
                      client_id: this.options.client_id
                    })) &&
                      e.refresh_token) ||
                    this.worker
                      ? [3, 2]
                      : [4, this._getTokenFromIFrame(t)]
                  );
                case 1:
                  return [2, o.sent()];
                case 2:
                  (r =
                    t.redirect_uri ||
                    this.options.redirect_uri ||
                    window.location.origin),
                    (s = t.scope),
                    (a = t.audience),
                    t.ignoreCache,
                    t.timeoutInSeconds,
                    (u = i(t, [
                      'scope',
                      'audience',
                      'ignoreCache',
                      'timeoutInSeconds'
                    ])),
                    (o.label = 3);
                case 3:
                  return (
                    o.trys.push([3, 5, , 8]),
                    [
                      4,
                      $r(
                        n(n(n({}, this.customOptions), u), {
                          audience: a,
                          scope: s,
                          baseUrl: this.domainUrl,
                          client_id: this.options.client_id,
                          grant_type: 'refresh_token',
                          refresh_token: e && e.refresh_token,
                          redirect_uri: r
                        }),
                        this.worker
                      )
                    ]
                  );
                case 4:
                  return (c = o.sent()), [3, 8];
                case 5:
                  return 'The web worker is missing the refresh token' !==
                    (l = o.sent()).message
                    ? [3, 7]
                    : [4, this._getTokenFromIFrame(t)];
                case 6:
                  return [2, o.sent()];
                case 7:
                  throw l;
                case 8:
                  return (
                    (d = this._verifyIdToken(c.id_token)),
                    [
                      2,
                      n(n({}, c), {
                        decodedToken: d,
                        scope: t.scope,
                        audience: t.audience || 'default'
                      })
                    ]
                  );
              }
            });
          });
        }),
        t
      );
    })();
  function Ao(t) {
    return r(this, void 0, void 0, function () {
      var e;
      return o(this, function (n) {
        switch (n.label) {
          case 0:
            return [4, (e = new Go(t)).checkSession()];
          case 1:
            return n.sent(), [2, e];
        }
      });
    });
  }
  var Qo = Ao;
  return (Qo.Auth0Client = Go), (Qo.createAuth0Client = Ao), Qo;
}),
  'Auth0Client' in this &&
    this.console &&
    this.console.warn &&
    this.console.warn('Auth0Client already declared on the global namespace'),
  this &&
    this.createAuth0Client &&
    (this.Auth0Client = this.Auth0Client || this.createAuth0Client.Auth0Client);
//# sourceMappingURL=auth0-spa-js.production.js.map
