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
***************************************************************************** */
var e = function (t, n) {
  return (e =
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array &&
      function (e, t) {
        e.__proto__ = t;
      }) ||
    function (e, t) {
      for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    })(t, n);
};
function t(t, n) {
  function i() {
    this.constructor = t;
  }
  e(t, n),
    (t.prototype =
      null === n ? Object.create(n) : ((i.prototype = n.prototype), new i()));
}
var n = function () {
  return (n =
    Object.assign ||
    function (e) {
      for (var t, n = 1, i = arguments.length; n < i; n++)
        for (var r in (t = arguments[n]))
          Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
      return e;
    }).apply(this, arguments);
};
function i(e, t) {
  var n = {};
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) &&
      t.indexOf(i) < 0 &&
      (n[i] = e[i]);
  if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
    var r = 0;
    for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
      t.indexOf(i[r]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, i[r]) &&
        (n[i[r]] = e[i[r]]);
  }
  return n;
}
function r(e, t, n, i) {
  return new (n || (n = Promise))(function (r, o) {
    function c(e) {
      try {
        a(i.next(e));
      } catch (e) {
        o(e);
      }
    }
    function s(e) {
      try {
        a(i.throw(e));
      } catch (e) {
        o(e);
      }
    }
    function a(e) {
      e.done
        ? r(e.value)
        : new n(function (t) {
            t(e.value);
          }).then(c, s);
    }
    a((i = i.apply(e, t || [])).next());
  });
}
function o(e, t) {
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
            o = t.call(e, c);
          } catch (e) {
            (o = [6, e]), (i = 0);
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
function s(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
function a(e, t) {
  return e((t = { exports: {} }), t.exports), t.exports;
}
var u = function (e) {
    return e && e.Math == Math && e;
  },
  l =
    u('object' == typeof globalThis && globalThis) ||
    u('object' == typeof window && window) ||
    u('object' == typeof self && self) ||
    u('object' == typeof c && c) ||
    Function('return this')(),
  d = function (e) {
    try {
      return !!e();
    } catch (e) {
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
  y = {
    f:
      I && !f.call({ 1: 2 }, 1)
        ? function (e) {
            var t = I(this, e);
            return !!t && t.enumerable;
          }
        : f
  },
  p = function (e, t) {
    return {
      enumerable: !(1 & e),
      configurable: !(2 & e),
      writable: !(4 & e),
      value: t
    };
  },
  h = {}.toString,
  b = function (e) {
    return h.call(e).slice(8, -1);
  },
  m = ''.split,
  B = d(function () {
    return !Object('z').propertyIsEnumerable(0);
  })
    ? function (e) {
        return 'String' == b(e) ? m.call(e, '') : Object(e);
      }
    : Object,
  v = function (e) {
    if (null == e) throw TypeError("Can't call method on " + e);
    return e;
  },
  C = function (e) {
    return B(v(e));
  },
  F = function (e) {
    return 'object' == typeof e ? null !== e : 'function' == typeof e;
  },
  U = function (e, t) {
    if (!F(e)) return e;
    var n, i;
    if (t && 'function' == typeof (n = e.toString) && !F((i = n.call(e))))
      return i;
    if ('function' == typeof (n = e.valueOf) && !F((i = n.call(e)))) return i;
    if (!t && 'function' == typeof (n = e.toString) && !F((i = n.call(e))))
      return i;
    throw TypeError("Can't convert object to primitive value");
  },
  S = {}.hasOwnProperty,
  V = function (e, t) {
    return S.call(e, t);
  },
  Z = l.document,
  X = F(Z) && F(Z.createElement),
  x = function (e) {
    return X ? Z.createElement(e) : {};
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
  Q = {
    f: g
      ? G
      : function (e, t) {
          if (((e = C(e)), (t = U(t, !0)), w))
            try {
              return G(e, t);
            } catch (e) {}
          if (V(e, t)) return p(!y.f.call(e, t), e[t]);
        }
  },
  A = function (e) {
    if (!F(e)) throw TypeError(String(e) + ' is not an object');
    return e;
  },
  R = Object.defineProperty,
  J = {
    f: g
      ? R
      : function (e, t, n) {
          if ((A(e), (t = U(t, !0)), A(n), w))
            try {
              return R(e, t, n);
            } catch (e) {}
          if ('get' in n || 'set' in n)
            throw TypeError('Accessors not supported');
          return 'value' in n && (e[t] = n.value), e;
        }
  },
  H = g
    ? function (e, t, n) {
        return J.f(e, t, p(1, n));
      }
    : function (e, t, n) {
        return (e[t] = n), e;
      },
  L = function (e, t) {
    try {
      H(l, e, t);
    } catch (n) {
      l[e] = t;
    }
    return t;
  },
  W = l['__core-js_shared__'] || L('__core-js_shared__', {}),
  k = Function.toString;
'function' != typeof W.inspectSource &&
  (W.inspectSource = function (e) {
    return k.call(e);
  });
var E,
  T,
  N,
  Y = W.inspectSource,
  K = l.WeakMap,
  O = 'function' == typeof K && /native code/.test(Y(K)),
  j = a(function (e) {
    (e.exports = function (e, t) {
      return W[e] || (W[e] = void 0 !== t ? t : {});
    })('versions', []).push({
      version: '3.6.5',
      mode: 'global',
      copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
    });
  }),
  P = 0,
  z = Math.random(),
  _ = function (e) {
    return (
      'Symbol(' + String(void 0 === e ? '' : e) + ')_' + (++P + z).toString(36)
    );
  },
  D = j('keys'),
  M = function (e) {
    return D[e] || (D[e] = _(e));
  },
  q = {},
  $ = l.WeakMap;
if (O) {
  var ee = new $(),
    te = ee.get,
    ne = ee.has,
    ie = ee.set;
  (E = function (e, t) {
    return ie.call(ee, e, t), t;
  }),
    (T = function (e) {
      return te.call(ee, e) || {};
    }),
    (N = function (e) {
      return ne.call(ee, e);
    });
} else {
  var re = M('state');
  (q[re] = !0),
    (E = function (e, t) {
      return H(e, re, t), t;
    }),
    (T = function (e) {
      return V(e, re) ? e[re] : {};
    }),
    (N = function (e) {
      return V(e, re);
    });
}
var oe,
  ce = {
    set: E,
    get: T,
    has: N,
    enforce: function (e) {
      return N(e) ? T(e) : E(e, {});
    },
    getterFor: function (e) {
      return function (t) {
        var n;
        if (!F(t) || (n = T(t)).type !== e)
          throw TypeError('Incompatible receiver, ' + e + ' required');
        return n;
      };
    }
  },
  se = a(function (e) {
    var t = ce.get,
      n = ce.enforce,
      i = String(String).split('String');
    (e.exports = function (e, t, r, o) {
      var c = !!o && !!o.unsafe,
        s = !!o && !!o.enumerable,
        a = !!o && !!o.noTargetGet;
      'function' == typeof r &&
        ('string' != typeof t || V(r, 'name') || H(r, 'name', t),
        (n(r).source = i.join('string' == typeof t ? t : ''))),
        e !== l
          ? (c ? !a && e[t] && (s = !0) : delete e[t],
            s ? (e[t] = r) : H(e, t, r))
          : s
          ? (e[t] = r)
          : L(t, r);
    })(Function.prototype, 'toString', function () {
      return ('function' == typeof this && t(this).source) || Y(this);
    });
  }),
  ae = l,
  ue = function (e) {
    return 'function' == typeof e ? e : void 0;
  },
  le = function (e, t) {
    return arguments.length < 2
      ? ue(ae[e]) || ue(l[e])
      : (ae[e] && ae[e][t]) || (l[e] && l[e][t]);
  },
  de = Math.ceil,
  ge = Math.floor,
  fe = function (e) {
    return isNaN((e = +e)) ? 0 : (e > 0 ? ge : de)(e);
  },
  Ie = Math.min,
  ye = function (e) {
    return e > 0 ? Ie(fe(e), 9007199254740991) : 0;
  },
  pe = Math.max,
  he = Math.min,
  be = function (e) {
    return function (t, n, i) {
      var r,
        o = C(t),
        c = ye(o.length),
        s = (function (e, t) {
          var n = fe(e);
          return n < 0 ? pe(n + t, 0) : he(n, t);
        })(i, c);
      if (e && n != n) {
        for (; c > s; ) if ((r = o[s++]) != r) return !0;
      } else
        for (; c > s; s++) if ((e || s in o) && o[s] === n) return e || s || 0;
      return !e && -1;
    };
  },
  me = { includes: be(!0), indexOf: be(!1) },
  Be = me.indexOf,
  ve = function (e, t) {
    var n,
      i = C(e),
      r = 0,
      o = [];
    for (n in i) !V(q, n) && V(i, n) && o.push(n);
    for (; t.length > r; ) V(i, (n = t[r++])) && (~Be(o, n) || o.push(n));
    return o;
  },
  Ce = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
  ],
  Fe = Ce.concat('length', 'prototype'),
  Ue = {
    f:
      Object.getOwnPropertyNames ||
      function (e) {
        return ve(e, Fe);
      }
  },
  Se = { f: Object.getOwnPropertySymbols },
  Ve =
    le('Reflect', 'ownKeys') ||
    function (e) {
      var t = Ue.f(A(e)),
        n = Se.f;
      return n ? t.concat(n(e)) : t;
    },
  Ze = function (e, t) {
    for (var n = Ve(t), i = J.f, r = Q.f, o = 0; o < n.length; o++) {
      var c = n[o];
      V(e, c) || i(e, c, r(t, c));
    }
  },
  Xe = /#|\.prototype\./,
  xe = function (e, t) {
    var n = Ge[we(e)];
    return n == Ae || (n != Qe && ('function' == typeof t ? d(t) : !!t));
  },
  we = (xe.normalize = function (e) {
    return String(e).replace(Xe, '.').toLowerCase();
  }),
  Ge = (xe.data = {}),
  Qe = (xe.NATIVE = 'N'),
  Ae = (xe.POLYFILL = 'P'),
  Re = xe,
  Je = Q.f,
  He = function (e, t) {
    var n,
      i,
      r,
      o,
      c,
      s = e.target,
      a = e.global,
      u = e.stat;
    if ((n = a ? l : u ? l[s] || L(s, {}) : (l[s] || {}).prototype))
      for (i in t) {
        if (
          ((o = t[i]),
          (r = e.noTargetGet ? (c = Je(n, i)) && c.value : n[i]),
          !Re(a ? i : s + (u ? '.' : '#') + i, e.forced) && void 0 !== r)
        ) {
          if (typeof o == typeof r) continue;
          Ze(o, r);
        }
        (e.sham || (r && r.sham)) && H(o, 'sham', !0), se(n, i, o, e);
      }
  },
  Le =
    !!Object.getOwnPropertySymbols &&
    !d(function () {
      return !String(Symbol());
    }),
  We = Le && !Symbol.sham && 'symbol' == typeof Symbol.iterator,
  ke = j('wks'),
  Ee = l.Symbol,
  Te = We ? Ee : (Ee && Ee.withoutSetter) || _,
  Ne = function (e) {
    return (
      V(ke, e) ||
        (Le && V(Ee, e) ? (ke[e] = Ee[e]) : (ke[e] = Te('Symbol.' + e))),
      ke[e]
    );
  },
  Ye = Ne('match'),
  Ke = function (e) {
    if (
      (function (e) {
        var t;
        return F(e) && (void 0 !== (t = e[Ye]) ? !!t : 'RegExp' == b(e));
      })(e)
    )
      throw TypeError("The method doesn't accept regular expressions");
    return e;
  },
  Oe = Ne('match'),
  je = function (e) {
    var t = /./;
    try {
      '/./'[e](t);
    } catch (n) {
      try {
        return (t[Oe] = !1), '/./'[e](t);
      } catch (e) {}
    }
    return !1;
  },
  Pe = Q.f,
  ze = ''.startsWith,
  _e = Math.min,
  De = je('startsWith'),
  Me = !(De || ((oe = Pe(String.prototype, 'startsWith')), !oe || oe.writable));
He(
  { target: 'String', proto: !0, forced: !Me && !De },
  {
    startsWith: function (e) {
      var t = String(v(this));
      Ke(e);
      var n = ye(_e(arguments.length > 1 ? arguments[1] : void 0, t.length)),
        i = String(e);
      return ze ? ze.call(t, i, n) : t.slice(n, n + i.length) === i;
    }
  }
);
var qe,
  $e,
  et = function (e) {
    if ('function' != typeof e)
      throw TypeError(String(e) + ' is not a function');
    return e;
  },
  tt = function (e, t, n) {
    if ((et(e), void 0 === t)) return e;
    switch (n) {
      case 0:
        return function () {
          return e.call(t);
        };
      case 1:
        return function (n) {
          return e.call(t, n);
        };
      case 2:
        return function (n, i) {
          return e.call(t, n, i);
        };
      case 3:
        return function (n, i, r) {
          return e.call(t, n, i, r);
        };
    }
    return function () {
      return e.apply(t, arguments);
    };
  },
  nt = Function.call,
  it = function (e, t, n) {
    return tt(nt, l[e].prototype[t], n);
  },
  rt =
    (it('String', 'startsWith'),
    Array.isArray ||
      function (e) {
        return 'Array' == b(e);
      }),
  ot = function (e) {
    return Object(v(e));
  },
  ct = function (e, t, n) {
    var i = U(t);
    i in e ? J.f(e, i, p(0, n)) : (e[i] = n);
  },
  st = Ne('species'),
  at = function (e, t) {
    var n;
    return (
      rt(e) &&
        ('function' != typeof (n = e.constructor) ||
        (n !== Array && !rt(n.prototype))
          ? F(n) && null === (n = n[st]) && (n = void 0)
          : (n = void 0)),
      new (void 0 === n ? Array : n)(0 === t ? 0 : t)
    );
  },
  ut = le('navigator', 'userAgent') || '',
  lt = l.process,
  dt = lt && lt.versions,
  gt = dt && dt.v8;
gt
  ? ($e = (qe = gt.split('.'))[0] + qe[1])
  : ut &&
    (!(qe = ut.match(/Edge\/(\d+)/)) || qe[1] >= 74) &&
    (qe = ut.match(/Chrome\/(\d+)/)) &&
    ($e = qe[1]);
var ft = $e && +$e,
  It = Ne('species'),
  yt = Ne('isConcatSpreadable'),
  pt =
    ft >= 51 ||
    !d(function () {
      var e = [];
      return (e[yt] = !1), e.concat()[0] !== e;
    }),
  ht = (function (e) {
    return (
      ft >= 51 ||
      !d(function () {
        var t = [];
        return (
          ((t.constructor = {})[It] = function () {
            return { foo: 1 };
          }),
          1 !== t[e](Boolean).foo
        );
      })
    );
  })('concat'),
  bt = function (e) {
    if (!F(e)) return !1;
    var t = e[yt];
    return void 0 !== t ? !!t : rt(e);
  };
He(
  { target: 'Array', proto: !0, forced: !pt || !ht },
  {
    concat: function (e) {
      var t,
        n,
        i,
        r,
        o,
        c = ot(this),
        s = at(c, 0),
        a = 0;
      for (t = -1, i = arguments.length; t < i; t++)
        if (bt((o = -1 === t ? c : arguments[t]))) {
          if (a + (r = ye(o.length)) > 9007199254740991)
            throw TypeError('Maximum allowed index exceeded');
          for (n = 0; n < r; n++, a++) n in o && ct(s, a, o[n]);
        } else {
          if (a >= 9007199254740991)
            throw TypeError('Maximum allowed index exceeded');
          ct(s, a++, o);
        }
      return (s.length = a), s;
    }
  }
);
var mt = {};
mt[Ne('toStringTag')] = 'z';
var Bt = '[object z]' === String(mt),
  vt = Ne('toStringTag'),
  Ct =
    'Arguments' ==
    b(
      (function () {
        return arguments;
      })()
    ),
  Ft = Bt
    ? b
    : function (e) {
        var t, n, i;
        return void 0 === e
          ? 'Undefined'
          : null === e
          ? 'Null'
          : 'string' ==
            typeof (n = (function (e, t) {
              try {
                return e[t];
              } catch (e) {}
            })((t = Object(e)), vt))
          ? n
          : Ct
          ? b(t)
          : 'Object' == (i = b(t)) && 'function' == typeof t.callee
          ? 'Arguments'
          : i;
      },
  Ut = Bt
    ? {}.toString
    : function () {
        return '[object ' + Ft(this) + ']';
      };
Bt || se(Object.prototype, 'toString', Ut, { unsafe: !0 });
var St,
  Vt =
    Object.keys ||
    function (e) {
      return ve(e, Ce);
    },
  Zt = g
    ? Object.defineProperties
    : function (e, t) {
        A(e);
        for (var n, i = Vt(t), r = i.length, o = 0; r > o; )
          J.f(e, (n = i[o++]), t[n]);
        return e;
      },
  Xt = le('document', 'documentElement'),
  xt = M('IE_PROTO'),
  wt = function () {},
  Gt = function (e) {
    return '<script>' + e + '</script>';
  },
  Qt = function () {
    try {
      St = document.domain && new ActiveXObject('htmlfile');
    } catch (e) {}
    var e, t;
    Qt = St
      ? (function (e) {
          e.write(Gt('')), e.close();
          var t = e.parentWindow.Object;
          return (e = null), t;
        })(St)
      : (((t = x('iframe')).style.display = 'none'),
        Xt.appendChild(t),
        (t.src = String('javascript:')),
        (e = t.contentWindow.document).open(),
        e.write(Gt('document.F=Object')),
        e.close(),
        e.F);
    for (var n = Ce.length; n--; ) delete Qt.prototype[Ce[n]];
    return Qt();
  };
q[xt] = !0;
var At =
    Object.create ||
    function (e, t) {
      var n;
      return (
        null !== e
          ? ((wt.prototype = A(e)),
            (n = new wt()),
            (wt.prototype = null),
            (n[xt] = e))
          : (n = Qt()),
        void 0 === t ? n : Zt(n, t)
      );
    },
  Rt = Ue.f,
  Jt = {}.toString,
  Ht =
    'object' == typeof window && window && Object.getOwnPropertyNames
      ? Object.getOwnPropertyNames(window)
      : [],
  Lt = {
    f: function (e) {
      return Ht && '[object Window]' == Jt.call(e)
        ? (function (e) {
            try {
              return Rt(e);
            } catch (e) {
              return Ht.slice();
            }
          })(e)
        : Rt(C(e));
    }
  },
  Wt = { f: Ne },
  kt = J.f,
  Et = function (e) {
    var t = ae.Symbol || (ae.Symbol = {});
    V(t, e) || kt(t, e, { value: Wt.f(e) });
  },
  Tt = J.f,
  Nt = Ne('toStringTag'),
  Yt = function (e, t, n) {
    e &&
      !V((e = n ? e : e.prototype), Nt) &&
      Tt(e, Nt, { configurable: !0, value: t });
  },
  Kt = [].push,
  Ot = function (e) {
    var t = 1 == e,
      n = 2 == e,
      i = 3 == e,
      r = 4 == e,
      o = 6 == e,
      c = 5 == e || o;
    return function (s, a, u, l) {
      for (
        var d,
          g,
          f = ot(s),
          I = B(f),
          y = tt(a, u, 3),
          p = ye(I.length),
          h = 0,
          b = l || at,
          m = t ? b(s, p) : n ? b(s, 0) : void 0;
        p > h;
        h++
      )
        if ((c || h in I) && ((g = y((d = I[h]), h, f)), e))
          if (t) m[h] = g;
          else if (g)
            switch (e) {
              case 3:
                return !0;
              case 5:
                return d;
              case 6:
                return h;
              case 2:
                Kt.call(m, d);
            }
          else if (r) return !1;
      return o ? -1 : i || r ? r : m;
    };
  },
  jt = {
    forEach: Ot(0),
    map: Ot(1),
    filter: Ot(2),
    some: Ot(3),
    every: Ot(4),
    find: Ot(5),
    findIndex: Ot(6)
  }.forEach,
  Pt = M('hidden'),
  zt = Ne('toPrimitive'),
  _t = ce.set,
  Dt = ce.getterFor('Symbol'),
  Mt = Object.prototype,
  qt = l.Symbol,
  $t = le('JSON', 'stringify'),
  en = Q.f,
  tn = J.f,
  nn = Lt.f,
  rn = y.f,
  on = j('symbols'),
  cn = j('op-symbols'),
  sn = j('string-to-symbol-registry'),
  an = j('symbol-to-string-registry'),
  un = j('wks'),
  ln = l.QObject,
  dn = !ln || !ln.prototype || !ln.prototype.findChild,
  gn =
    g &&
    d(function () {
      return (
        7 !=
        At(
          tn({}, 'a', {
            get: function () {
              return tn(this, 'a', { value: 7 }).a;
            }
          })
        ).a
      );
    })
      ? function (e, t, n) {
          var i = en(Mt, t);
          i && delete Mt[t], tn(e, t, n), i && e !== Mt && tn(Mt, t, i);
        }
      : tn,
  fn = function (e, t) {
    var n = (on[e] = At(qt.prototype));
    return (
      _t(n, { type: 'Symbol', tag: e, description: t }),
      g || (n.description = t),
      n
    );
  },
  In = We
    ? function (e) {
        return 'symbol' == typeof e;
      }
    : function (e) {
        return Object(e) instanceof qt;
      },
  yn = function (e, t, n) {
    e === Mt && yn(cn, t, n), A(e);
    var i = U(t, !0);
    return (
      A(n),
      V(on, i)
        ? (n.enumerable
            ? (V(e, Pt) && e[Pt][i] && (e[Pt][i] = !1),
              (n = At(n, { enumerable: p(0, !1) })))
            : (V(e, Pt) || tn(e, Pt, p(1, {})), (e[Pt][i] = !0)),
          gn(e, i, n))
        : tn(e, i, n)
    );
  },
  pn = function (e, t) {
    A(e);
    var n = C(t),
      i = Vt(n).concat(Bn(n));
    return (
      jt(i, function (t) {
        (g && !hn.call(n, t)) || yn(e, t, n[t]);
      }),
      e
    );
  },
  hn = function (e) {
    var t = U(e, !0),
      n = rn.call(this, t);
    return (
      !(this === Mt && V(on, t) && !V(cn, t)) &&
      (!(n || !V(this, t) || !V(on, t) || (V(this, Pt) && this[Pt][t])) || n)
    );
  },
  bn = function (e, t) {
    var n = C(e),
      i = U(t, !0);
    if (n !== Mt || !V(on, i) || V(cn, i)) {
      var r = en(n, i);
      return (
        !r || !V(on, i) || (V(n, Pt) && n[Pt][i]) || (r.enumerable = !0), r
      );
    }
  },
  mn = function (e) {
    var t = nn(C(e)),
      n = [];
    return (
      jt(t, function (e) {
        V(on, e) || V(q, e) || n.push(e);
      }),
      n
    );
  },
  Bn = function (e) {
    var t = e === Mt,
      n = nn(t ? cn : C(e)),
      i = [];
    return (
      jt(n, function (e) {
        !V(on, e) || (t && !V(Mt, e)) || i.push(on[e]);
      }),
      i
    );
  };
if (
  (Le ||
    (se(
      (qt = function () {
        if (this instanceof qt) throw TypeError('Symbol is not a constructor');
        var e =
            arguments.length && void 0 !== arguments[0]
              ? String(arguments[0])
              : void 0,
          t = _(e),
          n = function (e) {
            this === Mt && n.call(cn, e),
              V(this, Pt) && V(this[Pt], t) && (this[Pt][t] = !1),
              gn(this, t, p(1, e));
          };
        return g && dn && gn(Mt, t, { configurable: !0, set: n }), fn(t, e);
      }).prototype,
      'toString',
      function () {
        return Dt(this).tag;
      }
    ),
    se(qt, 'withoutSetter', function (e) {
      return fn(_(e), e);
    }),
    (y.f = hn),
    (J.f = yn),
    (Q.f = bn),
    (Ue.f = Lt.f = mn),
    (Se.f = Bn),
    (Wt.f = function (e) {
      return fn(Ne(e), e);
    }),
    g &&
      (tn(qt.prototype, 'description', {
        configurable: !0,
        get: function () {
          return Dt(this).description;
        }
      }),
      se(Mt, 'propertyIsEnumerable', hn, { unsafe: !0 }))),
  He({ global: !0, wrap: !0, forced: !Le, sham: !Le }, { Symbol: qt }),
  jt(Vt(un), function (e) {
    Et(e);
  }),
  He(
    { target: 'Symbol', stat: !0, forced: !Le },
    {
      for: function (e) {
        var t = String(e);
        if (V(sn, t)) return sn[t];
        var n = qt(t);
        return (sn[t] = n), (an[n] = t), n;
      },
      keyFor: function (e) {
        if (!In(e)) throw TypeError(e + ' is not a symbol');
        if (V(an, e)) return an[e];
      },
      useSetter: function () {
        dn = !0;
      },
      useSimple: function () {
        dn = !1;
      }
    }
  ),
  He(
    { target: 'Object', stat: !0, forced: !Le, sham: !g },
    {
      create: function (e, t) {
        return void 0 === t ? At(e) : pn(At(e), t);
      },
      defineProperty: yn,
      defineProperties: pn,
      getOwnPropertyDescriptor: bn
    }
  ),
  He(
    { target: 'Object', stat: !0, forced: !Le },
    { getOwnPropertyNames: mn, getOwnPropertySymbols: Bn }
  ),
  He(
    {
      target: 'Object',
      stat: !0,
      forced: d(function () {
        Se.f(1);
      })
    },
    {
      getOwnPropertySymbols: function (e) {
        return Se.f(ot(e));
      }
    }
  ),
  $t)
) {
  var vn =
    !Le ||
    d(function () {
      var e = qt();
      return (
        '[null]' != $t([e]) || '{}' != $t({ a: e }) || '{}' != $t(Object(e))
      );
    });
  He(
    { target: 'JSON', stat: !0, forced: vn },
    {
      stringify: function (e, t, n) {
        for (var i, r = [e], o = 1; arguments.length > o; )
          r.push(arguments[o++]);
        if (((i = t), (F(t) || void 0 !== e) && !In(e)))
          return (
            rt(t) ||
              (t = function (e, t) {
                if (
                  ('function' == typeof i && (t = i.call(this, e, t)), !In(t))
                )
                  return t;
              }),
            (r[1] = t),
            $t.apply(null, r)
          );
      }
    }
  );
}
qt.prototype[zt] || H(qt.prototype, zt, qt.prototype.valueOf),
  Yt(qt, 'Symbol'),
  (q[Pt] = !0),
  Et('asyncIterator');
var Cn = J.f,
  Fn = l.Symbol;
if (
  g &&
  'function' == typeof Fn &&
  (!('description' in Fn.prototype) || void 0 !== Fn().description)
) {
  var Un = {},
    Sn = function () {
      var e =
          arguments.length < 1 || void 0 === arguments[0]
            ? void 0
            : String(arguments[0]),
        t = this instanceof Sn ? new Fn(e) : void 0 === e ? Fn() : Fn(e);
      return '' === e && (Un[t] = !0), t;
    };
  Ze(Sn, Fn);
  var Vn = (Sn.prototype = Fn.prototype);
  Vn.constructor = Sn;
  var Zn = Vn.toString,
    Xn = 'Symbol(test)' == String(Fn('test')),
    xn = /^Symbol\((.*)\)[^)]+$/;
  Cn(Vn, 'description', {
    configurable: !0,
    get: function () {
      var e = F(this) ? this.valueOf() : this,
        t = Zn.call(e);
      if (V(Un, e)) return '';
      var n = Xn ? t.slice(7, -1) : t.replace(xn, '$1');
      return '' === n ? void 0 : n;
    }
  }),
    He({ global: !0, forced: !0 }, { Symbol: Sn });
}
Et('hasInstance'),
  Et('isConcatSpreadable'),
  Et('iterator'),
  Et('match'),
  Et('matchAll'),
  Et('replace'),
  Et('search'),
  Et('species'),
  Et('split'),
  Et('toPrimitive'),
  Et('toStringTag'),
  Et('unscopables'),
  Yt(Math, 'Math', !0),
  Yt(l.JSON, 'JSON', !0);
ae.Symbol;
var wn,
  Gn,
  Qn,
  An = function (e) {
    return function (t, n) {
      var i,
        r,
        o = String(v(t)),
        c = fe(n),
        s = o.length;
      return c < 0 || c >= s
        ? e
          ? ''
          : void 0
        : (i = o.charCodeAt(c)) < 55296 ||
          i > 56319 ||
          c + 1 === s ||
          (r = o.charCodeAt(c + 1)) < 56320 ||
          r > 57343
        ? e
          ? o.charAt(c)
          : i
        : e
        ? o.slice(c, c + 2)
        : r - 56320 + ((i - 55296) << 10) + 65536;
    };
  },
  Rn = { codeAt: An(!1), charAt: An(!0) },
  Jn = !d(function () {
    function e() {}
    return (
      (e.prototype.constructor = null),
      Object.getPrototypeOf(new e()) !== e.prototype
    );
  }),
  Hn = M('IE_PROTO'),
  Ln = Object.prototype,
  Wn = Jn
    ? Object.getPrototypeOf
    : function (e) {
        return (
          (e = ot(e)),
          V(e, Hn)
            ? e[Hn]
            : 'function' == typeof e.constructor && e instanceof e.constructor
            ? e.constructor.prototype
            : e instanceof Object
            ? Ln
            : null
        );
      },
  kn = Ne('iterator'),
  En = !1;
[].keys &&
  ('next' in (Qn = [].keys())
    ? (Gn = Wn(Wn(Qn))) !== Object.prototype && (wn = Gn)
    : (En = !0)),
  null == wn && (wn = {}),
  V(wn, kn) ||
    H(wn, kn, function () {
      return this;
    });
var Tn = { IteratorPrototype: wn, BUGGY_SAFARI_ITERATORS: En },
  Nn = {},
  Yn = Tn.IteratorPrototype,
  Kn = function () {
    return this;
  },
  On =
    Object.setPrototypeOf ||
    ('__proto__' in {}
      ? (function () {
          var e,
            t = !1,
            n = {};
          try {
            (e = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__')
              .set).call(n, []),
              (t = n instanceof Array);
          } catch (e) {}
          return function (n, i) {
            return (
              A(n),
              (function (e) {
                if (!F(e) && null !== e)
                  throw TypeError("Can't set " + String(e) + ' as a prototype');
              })(i),
              t ? e.call(n, i) : (n.__proto__ = i),
              n
            );
          };
        })()
      : void 0),
  jn = Tn.IteratorPrototype,
  Pn = Tn.BUGGY_SAFARI_ITERATORS,
  zn = Ne('iterator'),
  _n = function () {
    return this;
  },
  Dn = function (e, t, n, i, r, o, c) {
    !(function (e, t, n) {
      var i = t + ' Iterator';
      (e.prototype = At(Yn, { next: p(1, n) })), Yt(e, i, !1), (Nn[i] = Kn);
    })(n, t, i);
    var s,
      a,
      u,
      l = function (e) {
        if (e === r && y) return y;
        if (!Pn && e in f) return f[e];
        switch (e) {
          case 'keys':
          case 'values':
          case 'entries':
            return function () {
              return new n(this, e);
            };
        }
        return function () {
          return new n(this);
        };
      },
      d = t + ' Iterator',
      g = !1,
      f = e.prototype,
      I = f[zn] || f['@@iterator'] || (r && f[r]),
      y = (!Pn && I) || l(r),
      h = ('Array' == t && f.entries) || I;
    if (
      (h &&
        ((s = Wn(h.call(new e()))),
        jn !== Object.prototype &&
          s.next &&
          (Wn(s) !== jn &&
            (On ? On(s, jn) : 'function' != typeof s[zn] && H(s, zn, _n)),
          Yt(s, d, !0))),
      'values' == r &&
        I &&
        'values' !== I.name &&
        ((g = !0),
        (y = function () {
          return I.call(this);
        })),
      f[zn] !== y && H(f, zn, y),
      (Nn[t] = y),
      r)
    )
      if (
        ((a = {
          values: l('values'),
          keys: o ? y : l('keys'),
          entries: l('entries')
        }),
        c)
      )
        for (u in a) (Pn || g || !(u in f)) && se(f, u, a[u]);
      else He({ target: t, proto: !0, forced: Pn || g }, a);
    return a;
  },
  Mn = Rn.charAt,
  qn = ce.set,
  $n = ce.getterFor('String Iterator');
Dn(
  String,
  'String',
  function (e) {
    qn(this, { type: 'String Iterator', string: String(e), index: 0 });
  },
  function () {
    var e,
      t = $n(this),
      n = t.string,
      i = t.index;
    return i >= n.length
      ? { value: void 0, done: !0 }
      : ((e = Mn(n, i)), (t.index += e.length), { value: e, done: !1 });
  }
);
var ei = function (e, t, n, i) {
    try {
      return i ? t(A(n)[0], n[1]) : t(n);
    } catch (t) {
      var r = e.return;
      throw (void 0 !== r && A(r.call(e)), t);
    }
  },
  ti = Ne('iterator'),
  ni = Array.prototype,
  ii = function (e) {
    return void 0 !== e && (Nn.Array === e || ni[ti] === e);
  },
  ri = Ne('iterator'),
  oi = function (e) {
    if (null != e) return e[ri] || e['@@iterator'] || Nn[Ft(e)];
  },
  ci = Ne('iterator'),
  si = !1;
try {
  var ai = 0,
    ui = {
      next: function () {
        return { done: !!ai++ };
      },
      return: function () {
        si = !0;
      }
    };
  (ui[ci] = function () {
    return this;
  }),
    Array.from(ui, function () {
      throw 2;
    });
} catch (e) {}
var li = function (e, t) {
    if (!t && !si) return !1;
    var n = !1;
    try {
      var i = {};
      (i[ci] = function () {
        return {
          next: function () {
            return { done: (n = !0) };
          }
        };
      }),
        e(i);
    } catch (e) {}
    return n;
  },
  di = !li(function (e) {
    Array.from(e);
  });
He(
  { target: 'Array', stat: !0, forced: di },
  {
    from: function (e) {
      var t,
        n,
        i,
        r,
        o,
        c,
        s = ot(e),
        a = 'function' == typeof this ? this : Array,
        u = arguments.length,
        l = u > 1 ? arguments[1] : void 0,
        d = void 0 !== l,
        g = oi(s),
        f = 0;
      if (
        (d && (l = tt(l, u > 2 ? arguments[2] : void 0, 2)),
        null == g || (a == Array && ii(g)))
      )
        for (n = new a((t = ye(s.length))); t > f; f++)
          (c = d ? l(s[f], f) : s[f]), ct(n, f, c);
      else
        for (o = (r = g.call(s)).next, n = new a(); !(i = o.call(r)).done; f++)
          (c = d ? ei(r, l, [i.value, f], !0) : i.value), ct(n, f, c);
      return (n.length = f), n;
    }
  }
);
ae.Array.from;
var gi,
  fi = 'undefined' != typeof ArrayBuffer && 'undefined' != typeof DataView,
  Ii = J.f,
  yi = l.Int8Array,
  pi = yi && yi.prototype,
  hi = l.Uint8ClampedArray,
  bi = hi && hi.prototype,
  mi = yi && Wn(yi),
  Bi = pi && Wn(pi),
  vi = Object.prototype,
  Ci = vi.isPrototypeOf,
  Fi = Ne('toStringTag'),
  Ui = _('TYPED_ARRAY_TAG'),
  Si = fi && !!On && 'Opera' !== Ft(l.opera),
  Vi = {
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
  Zi = function (e) {
    return F(e) && V(Vi, Ft(e));
  };
for (gi in Vi) l[gi] || (Si = !1);
if (
  (!Si || 'function' != typeof mi || mi === Function.prototype) &&
  ((mi = function () {
    throw TypeError('Incorrect invocation');
  }),
  Si)
)
  for (gi in Vi) l[gi] && On(l[gi], mi);
if ((!Si || !Bi || Bi === vi) && ((Bi = mi.prototype), Si))
  for (gi in Vi) l[gi] && On(l[gi].prototype, Bi);
if ((Si && Wn(bi) !== Bi && On(bi, Bi), g && !V(Bi, Fi)))
  for (gi in (!0,
  Ii(Bi, Fi, {
    get: function () {
      return F(this) ? this[Ui] : void 0;
    }
  }),
  Vi))
    l[gi] && H(l[gi], Ui, gi);
var Xi = function (e) {
    if (Zi(e)) return e;
    throw TypeError('Target is not a typed array');
  },
  xi = function (e) {
    if (On) {
      if (Ci.call(mi, e)) return e;
    } else
      for (var t in Vi)
        if (V(Vi, gi)) {
          var n = l[t];
          if (n && (e === n || Ci.call(n, e))) return e;
        }
    throw TypeError('Target is not a typed array constructor');
  },
  wi = function (e, t, n) {
    if (g) {
      if (n)
        for (var i in Vi) {
          var r = l[i];
          r && V(r.prototype, e) && delete r.prototype[e];
        }
      (Bi[e] && !n) || se(Bi, e, n ? t : (Si && pi[e]) || t);
    }
  },
  Gi = Ne('species'),
  Qi = Xi,
  Ai = xi,
  Ri = [].slice;
wi(
  'slice',
  function (e, t) {
    for (
      var n = Ri.call(Qi(this), e, t),
        i = (function (e, t) {
          var n,
            i = A(e).constructor;
          return void 0 === i || null == (n = A(i)[Gi]) ? t : et(n);
        })(this, this.constructor),
        r = 0,
        o = n.length,
        c = new (Ai(i))(o);
      o > r;

    )
      c[r] = n[r++];
    return c;
  },
  d(function () {
    new Int8Array(1).slice();
  })
);
var Ji = Ne('unscopables'),
  Hi = Array.prototype;
null == Hi[Ji] && J.f(Hi, Ji, { configurable: !0, value: At(null) });
var Li = function (e) {
    Hi[Ji][e] = !0;
  },
  Wi = Object.defineProperty,
  ki = {},
  Ei = function (e) {
    throw e;
  },
  Ti = me.includes,
  Ni = (function (e, t) {
    if (V(ki, e)) return ki[e];
    t || (t = {});
    var n = [][e],
      i = !!V(t, 'ACCESSORS') && t.ACCESSORS,
      r = V(t, 0) ? t[0] : Ei,
      o = V(t, 1) ? t[1] : void 0;
    return (ki[e] =
      !!n &&
      !d(function () {
        if (i && !g) return !0;
        var e = { length: -1 };
        i ? Wi(e, 1, { enumerable: !0, get: Ei }) : (e[1] = 1), n.call(e, r, o);
      }));
  })('indexOf', { ACCESSORS: !0, 1: 0 });
He(
  { target: 'Array', proto: !0, forced: !Ni },
  {
    includes: function (e) {
      return Ti(this, e, arguments.length > 1 ? arguments[1] : void 0);
    }
  }
),
  Li('includes');
it('Array', 'includes');
He(
  { target: 'String', proto: !0, forced: !je('includes') },
  {
    includes: function (e) {
      return !!~String(v(this)).indexOf(
        Ke(e),
        arguments.length > 1 ? arguments[1] : void 0
      );
    }
  }
);
it('String', 'includes');
var Yi = !d(function () {
    return Object.isExtensible(Object.preventExtensions({}));
  }),
  Ki = a(function (e) {
    var t = J.f,
      n = _('meta'),
      i = 0,
      r =
        Object.isExtensible ||
        function () {
          return !0;
        },
      o = function (e) {
        t(e, n, { value: { objectID: 'O' + ++i, weakData: {} } });
      },
      c = (e.exports = {
        REQUIRED: !1,
        fastKey: function (e, t) {
          if (!F(e))
            return 'symbol' == typeof e
              ? e
              : ('string' == typeof e ? 'S' : 'P') + e;
          if (!V(e, n)) {
            if (!r(e)) return 'F';
            if (!t) return 'E';
            o(e);
          }
          return e[n].objectID;
        },
        getWeakData: function (e, t) {
          if (!V(e, n)) {
            if (!r(e)) return !0;
            if (!t) return !1;
            o(e);
          }
          return e[n].weakData;
        },
        onFreeze: function (e) {
          return Yi && c.REQUIRED && r(e) && !V(e, n) && o(e), e;
        }
      });
    q[n] = !0;
  }),
  Oi =
    (Ki.REQUIRED,
    Ki.fastKey,
    Ki.getWeakData,
    Ki.onFreeze,
    a(function (e) {
      var t = function (e, t) {
        (this.stopped = e), (this.result = t);
      };
      (e.exports = function (e, n, i, r, o) {
        var c,
          s,
          a,
          u,
          l,
          d,
          g,
          f = tt(n, i, r ? 2 : 1);
        if (o) c = e;
        else {
          if ('function' != typeof (s = oi(e)))
            throw TypeError('Target is not iterable');
          if (ii(s)) {
            for (a = 0, u = ye(e.length); u > a; a++)
              if (
                (l = r ? f(A((g = e[a]))[0], g[1]) : f(e[a])) &&
                l instanceof t
              )
                return l;
            return new t(!1);
          }
          c = s.call(e);
        }
        for (d = c.next; !(g = d.call(c)).done; )
          if (
            'object' == typeof (l = ei(c, f, g.value, r)) &&
            l &&
            l instanceof t
          )
            return l;
        return new t(!1);
      }).stop = function (e) {
        return new t(!0, e);
      };
    })),
  ji = function (e, t, n) {
    if (!(e instanceof t))
      throw TypeError('Incorrect ' + (n ? n + ' ' : '') + 'invocation');
    return e;
  },
  Pi = function (e, t, n) {
    for (var i in t) se(e, i, t[i], n);
    return e;
  },
  zi = Ne('species'),
  _i = J.f,
  Di = Ki.fastKey,
  Mi = ce.set,
  qi = ce.getterFor,
  $i =
    ((function (e, t, n) {
      var i = -1 !== e.indexOf('Map'),
        r = -1 !== e.indexOf('Weak'),
        o = i ? 'set' : 'add',
        c = l[e],
        s = c && c.prototype,
        a = c,
        u = {},
        g = function (e) {
          var t = s[e];
          se(
            s,
            e,
            'add' == e
              ? function (e) {
                  return t.call(this, 0 === e ? 0 : e), this;
                }
              : 'delete' == e
              ? function (e) {
                  return !(r && !F(e)) && t.call(this, 0 === e ? 0 : e);
                }
              : 'get' == e
              ? function (e) {
                  return r && !F(e) ? void 0 : t.call(this, 0 === e ? 0 : e);
                }
              : 'has' == e
              ? function (e) {
                  return !(r && !F(e)) && t.call(this, 0 === e ? 0 : e);
                }
              : function (e, n) {
                  return t.call(this, 0 === e ? 0 : e, n), this;
                }
          );
        };
      if (
        Re(
          e,
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
        (a = n.getConstructor(t, e, i, o)), (Ki.REQUIRED = !0);
      else if (Re(e, !0)) {
        var f = new a(),
          I = f[o](r ? {} : -0, 1) != f,
          y = d(function () {
            f.has(1);
          }),
          p = li(function (e) {
            new c(e);
          }),
          h =
            !r &&
            d(function () {
              for (var e = new c(), t = 5; t--; ) e[o](t, t);
              return !e.has(-0);
            });
        p ||
          (((a = t(function (t, n) {
            ji(t, a, e);
            var r = (function (e, t, n) {
              var i, r;
              return (
                On &&
                  'function' == typeof (i = t.constructor) &&
                  i !== n &&
                  F((r = i.prototype)) &&
                  r !== n.prototype &&
                  On(e, r),
                e
              );
            })(new c(), t, a);
            return null != n && Oi(n, r[o], r, i), r;
          })).prototype = s),
          (s.constructor = a)),
          (y || h) && (g('delete'), g('has'), i && g('get')),
          (h || I) && g(o),
          r && s.clear && delete s.clear;
      }
      (u[e] = a),
        He({ global: !0, forced: a != c }, u),
        Yt(a, e),
        r || n.setStrong(a, e, i);
    })(
      'Set',
      function (e) {
        return function () {
          return e(this, arguments.length ? arguments[0] : void 0);
        };
      },
      {
        getConstructor: function (e, t, n, i) {
          var r = e(function (e, o) {
              ji(e, r, t),
                Mi(e, {
                  type: t,
                  index: At(null),
                  first: void 0,
                  last: void 0,
                  size: 0
                }),
                g || (e.size = 0),
                null != o && Oi(o, e[i], e, n);
            }),
            o = qi(t),
            c = function (e, t, n) {
              var i,
                r,
                c = o(e),
                a = s(e, t);
              return (
                a
                  ? (a.value = n)
                  : ((c.last = a = {
                      index: (r = Di(t, !0)),
                      key: t,
                      value: n,
                      previous: (i = c.last),
                      next: void 0,
                      removed: !1
                    }),
                    c.first || (c.first = a),
                    i && (i.next = a),
                    g ? c.size++ : e.size++,
                    'F' !== r && (c.index[r] = a)),
                e
              );
            },
            s = function (e, t) {
              var n,
                i = o(e),
                r = Di(t);
              if ('F' !== r) return i.index[r];
              for (n = i.first; n; n = n.next) if (n.key == t) return n;
            };
          return (
            Pi(r.prototype, {
              clear: function () {
                for (var e = o(this), t = e.index, n = e.first; n; )
                  (n.removed = !0),
                    n.previous && (n.previous = n.previous.next = void 0),
                    delete t[n.index],
                    (n = n.next);
                (e.first = e.last = void 0), g ? (e.size = 0) : (this.size = 0);
              },
              delete: function (e) {
                var t = this,
                  n = o(t),
                  i = s(t, e);
                if (i) {
                  var r = i.next,
                    c = i.previous;
                  delete n.index[i.index],
                    (i.removed = !0),
                    c && (c.next = r),
                    r && (r.previous = c),
                    n.first == i && (n.first = r),
                    n.last == i && (n.last = c),
                    g ? n.size-- : t.size--;
                }
                return !!i;
              },
              forEach: function (e) {
                for (
                  var t,
                    n = o(this),
                    i = tt(e, arguments.length > 1 ? arguments[1] : void 0, 3);
                  (t = t ? t.next : n.first);

                )
                  for (i(t.value, t.key, this); t && t.removed; )
                    t = t.previous;
              },
              has: function (e) {
                return !!s(this, e);
              }
            }),
            Pi(
              r.prototype,
              n
                ? {
                    get: function (e) {
                      var t = s(this, e);
                      return t && t.value;
                    },
                    set: function (e, t) {
                      return c(this, 0 === e ? 0 : e, t);
                    }
                  }
                : {
                    add: function (e) {
                      return c(this, (e = 0 === e ? 0 : e), e);
                    }
                  }
            ),
            g &&
              _i(r.prototype, 'size', {
                get: function () {
                  return o(this).size;
                }
              }),
            r
          );
        },
        setStrong: function (e, t, n) {
          var i = t + ' Iterator',
            r = qi(t),
            o = qi(i);
          Dn(
            e,
            t,
            function (e, t) {
              Mi(this, {
                type: i,
                target: e,
                state: r(e),
                kind: t,
                last: void 0
              });
            },
            function () {
              for (var e = o(this), t = e.kind, n = e.last; n && n.removed; )
                n = n.previous;
              return e.target && (e.last = n = n ? n.next : e.state.first)
                ? 'keys' == t
                  ? { value: n.key, done: !1 }
                  : 'values' == t
                  ? { value: n.value, done: !1 }
                  : { value: [n.key, n.value], done: !1 }
                : ((e.target = void 0), { value: void 0, done: !0 });
            },
            n ? 'entries' : 'values',
            !n,
            !0
          ),
            (function (e) {
              var t = le(e),
                n = J.f;
              g &&
                t &&
                !t[zi] &&
                n(t, zi, {
                  configurable: !0,
                  get: function () {
                    return this;
                  }
                });
            })(t);
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
  er = ce.set,
  tr = ce.getterFor('Array Iterator'),
  nr = Dn(
    Array,
    'Array',
    function (e, t) {
      er(this, { type: 'Array Iterator', target: C(e), index: 0, kind: t });
    },
    function () {
      var e = tr(this),
        t = e.target,
        n = e.kind,
        i = e.index++;
      return !t || i >= t.length
        ? ((e.target = void 0), { value: void 0, done: !0 })
        : 'keys' == n
        ? { value: i, done: !1 }
        : 'values' == n
        ? { value: t[i], done: !1 }
        : { value: [i, t[i]], done: !1 };
    },
    'values'
  );
(Nn.Arguments = Nn.Array), Li('keys'), Li('values'), Li('entries');
var ir = Ne('iterator'),
  rr = Ne('toStringTag'),
  or = nr.values;
for (var cr in $i) {
  var sr = l[cr],
    ar = sr && sr.prototype;
  if (ar) {
    if (ar[ir] !== or)
      try {
        H(ar, ir, or);
      } catch (e) {
        ar[ir] = or;
      }
    if ((ar[rr] || H(ar, rr, cr), $i[cr]))
      for (var ur in nr)
        if (ar[ur] !== nr[ur])
          try {
            H(ar, ur, nr[ur]);
          } catch (e) {
            ar[ur] = nr[ur];
          }
  }
}
ae.Set;
function lr(e) {
  var t = this.constructor;
  return this.then(
    function (n) {
      return t.resolve(e()).then(function () {
        return n;
      });
    },
    function (n) {
      return t.resolve(e()).then(function () {
        return t.reject(n);
      });
    }
  );
}
var dr = setTimeout;
function gr(e) {
  return Boolean(e && void 0 !== e.length);
}
function fr() {}
function Ir(e) {
  if (!(this instanceof Ir))
    throw new TypeError('Promises must be constructed via new');
  if ('function' != typeof e) throw new TypeError('not a function');
  (this._state = 0),
    (this._handled = !1),
    (this._value = void 0),
    (this._deferreds = []),
    Br(e, this);
}
function yr(e, t) {
  for (; 3 === e._state; ) e = e._value;
  0 !== e._state
    ? ((e._handled = !0),
      Ir._immediateFn(function () {
        var n = 1 === e._state ? t.onFulfilled : t.onRejected;
        if (null !== n) {
          var i;
          try {
            i = n(e._value);
          } catch (e) {
            return void hr(t.promise, e);
          }
          pr(t.promise, i);
        } else (1 === e._state ? pr : hr)(t.promise, e._value);
      }))
    : e._deferreds.push(t);
}
function pr(e, t) {
  try {
    if (t === e)
      throw new TypeError('A promise cannot be resolved with itself.');
    if (t && ('object' == typeof t || 'function' == typeof t)) {
      var n = t.then;
      if (t instanceof Ir) return (e._state = 3), (e._value = t), void br(e);
      if ('function' == typeof n)
        return void Br(
          ((i = n),
          (r = t),
          function () {
            i.apply(r, arguments);
          }),
          e
        );
    }
    (e._state = 1), (e._value = t), br(e);
  } catch (t) {
    hr(e, t);
  }
  var i, r;
}
function hr(e, t) {
  (e._state = 2), (e._value = t), br(e);
}
function br(e) {
  2 === e._state &&
    0 === e._deferreds.length &&
    Ir._immediateFn(function () {
      e._handled || Ir._unhandledRejectionFn(e._value);
    });
  for (var t = 0, n = e._deferreds.length; t < n; t++) yr(e, e._deferreds[t]);
  e._deferreds = null;
}
function mr(e, t, n) {
  (this.onFulfilled = 'function' == typeof e ? e : null),
    (this.onRejected = 'function' == typeof t ? t : null),
    (this.promise = n);
}
function Br(e, t) {
  var n = !1;
  try {
    e(
      function (e) {
        n || ((n = !0), pr(t, e));
      },
      function (e) {
        n || ((n = !0), hr(t, e));
      }
    );
  } catch (e) {
    if (n) return;
    (n = !0), hr(t, e);
  }
}
(Ir.prototype.catch = function (e) {
  return this.then(null, e);
}),
  (Ir.prototype.then = function (e, t) {
    var n = new this.constructor(fr);
    return yr(this, new mr(e, t, n)), n;
  }),
  (Ir.prototype.finally = lr),
  (Ir.all = function (e) {
    return new Ir(function (t, n) {
      if (!gr(e)) return n(new TypeError('Promise.all accepts an array'));
      var i = Array.prototype.slice.call(e);
      if (0 === i.length) return t([]);
      var r = i.length;
      function o(e, c) {
        try {
          if (c && ('object' == typeof c || 'function' == typeof c)) {
            var s = c.then;
            if ('function' == typeof s)
              return void s.call(
                c,
                function (t) {
                  o(e, t);
                },
                n
              );
          }
          (i[e] = c), 0 == --r && t(i);
        } catch (e) {
          n(e);
        }
      }
      for (var c = 0; c < i.length; c++) o(c, i[c]);
    });
  }),
  (Ir.resolve = function (e) {
    return e && 'object' == typeof e && e.constructor === Ir
      ? e
      : new Ir(function (t) {
          t(e);
        });
  }),
  (Ir.reject = function (e) {
    return new Ir(function (t, n) {
      n(e);
    });
  }),
  (Ir.race = function (e) {
    return new Ir(function (t, n) {
      if (!gr(e)) return n(new TypeError('Promise.race accepts an array'));
      for (var i = 0, r = e.length; i < r; i++) Ir.resolve(e[i]).then(t, n);
    });
  }),
  (Ir._immediateFn =
    ('function' == typeof setImmediate &&
      function (e) {
        setImmediate(e);
      }) ||
    function (e) {
      dr(e, 0);
    }),
  (Ir._unhandledRejectionFn = function (e) {
    'undefined' != typeof console &&
      console &&
      console.warn('Possible Unhandled Promise Rejection:', e);
  });
var vr = (function () {
  if ('undefined' != typeof self) return self;
  if ('undefined' != typeof window) return window;
  if ('undefined' != typeof global) return global;
  throw new Error('unable to locate global object');
})();
'Promise' in vr
  ? vr.Promise.prototype.finally || (vr.Promise.prototype.finally = lr)
  : (vr.Promise = Ir),
  (function (e) {
    function t() {}
    function n(e, t) {
      if (
        ((e = void 0 === e ? 'utf-8' : e),
        (t = void 0 === t ? { fatal: !1 } : t),
        -1 === r.indexOf(e.toLowerCase()))
      )
        throw new RangeError(
          "Failed to construct 'TextDecoder': The encoding label provided ('" +
            e +
            "') is invalid."
        );
      if (t.fatal)
        throw Error(
          "Failed to construct 'TextDecoder': the 'fatal' option is unsupported."
        );
    }
    function i(e) {
      for (
        var t = 0,
          n = Math.min(65536, e.length + 1),
          i = new Uint16Array(n),
          r = [],
          o = 0;
        ;

      ) {
        var c = t < e.length;
        if (!c || o >= n - 1) {
          if ((r.push(String.fromCharCode.apply(null, i.subarray(0, o))), !c))
            return r.join('');
          (e = e.subarray(t)), (o = t = 0);
        }
        if (0 == (128 & (c = e[t++]))) i[o++] = c;
        else if (192 == (224 & c)) {
          var s = 63 & e[t++];
          i[o++] = ((31 & c) << 6) | s;
        } else if (224 == (240 & c)) {
          s = 63 & e[t++];
          var a = 63 & e[t++];
          i[o++] = ((31 & c) << 12) | (s << 6) | a;
        } else if (240 == (248 & c)) {
          65535 <
            (c =
              ((7 & c) << 18) |
              ((s = 63 & e[t++]) << 12) |
              ((a = 63 & e[t++]) << 6) |
              (63 & e[t++])) &&
            ((c -= 65536),
            (i[o++] = ((c >>> 10) & 1023) | 55296),
            (c = 56320 | (1023 & c))),
            (i[o++] = c);
        }
      }
    }
    if (e.TextEncoder && e.TextDecoder) return !1;
    var r = ['utf-8', 'utf8', 'unicode-1-1-utf-8'];
    Object.defineProperty(t.prototype, 'encoding', { value: 'utf-8' }),
      (t.prototype.encode = function (e, t) {
        if ((t = void 0 === t ? { stream: !1 } : t).stream)
          throw Error("Failed to encode: the 'stream' option is unsupported.");
        t = 0;
        for (
          var n = e.length,
            i = 0,
            r = Math.max(32, n + (n >>> 1) + 7),
            o = new Uint8Array((r >>> 3) << 3);
          t < n;

        ) {
          var c = e.charCodeAt(t++);
          if (55296 <= c && 56319 >= c) {
            if (t < n) {
              var s = e.charCodeAt(t);
              56320 == (64512 & s) &&
                (++t, (c = ((1023 & c) << 10) + (1023 & s) + 65536));
            }
            if (55296 <= c && 56319 >= c) continue;
          }
          if (
            (i + 4 > o.length &&
              ((r += 8),
              (r = ((r *= 1 + (t / e.length) * 2) >>> 3) << 3),
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
      ? (o = function (e) {
          return Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString(
            'utf-8'
          );
        })
      : 'function' == typeof Blob &&
        'function' == typeof URL &&
        'function' == typeof URL.createObjectURL &&
        (o = function (e) {
          var t = URL.createObjectURL(
            new Blob([e], { type: 'text/plain;charset=UTF-8' })
          );
          try {
            var n = new XMLHttpRequest();
            return n.open('GET', t, !1), n.send(), n.responseText;
          } catch (t) {
            return i(e);
          } finally {
            URL.revokeObjectURL(t);
          }
        }),
      (n.prototype.decode = function (e, t) {
        if ((t = void 0 === t ? { stream: !1 } : t).stream)
          throw Error("Failed to decode: the 'stream' option is unsupported.");
        return (
          (e =
            e instanceof Uint8Array
              ? e
              : e.buffer instanceof ArrayBuffer
              ? new Uint8Array(e.buffer)
              : new Uint8Array(e)),
          o(e)
        );
      }),
      (e.TextEncoder = t),
      (e.TextDecoder = n);
  })('undefined' != typeof window ? window : c),
  (function () {
    function e(e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function');
    }
    function t(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          'value' in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function n(e, n, i) {
      return n && t(e.prototype, n), i && t(e, i), e;
    }
    function i(e, t) {
      if ('function' != typeof t && null !== t)
        throw new TypeError(
          'Super expression must either be null or a function'
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 }
      })),
        t && o(e, t);
    }
    function r(e) {
      return (r = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function o(e, t) {
      return (o =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
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
      } catch (e) {
        return !1;
      }
    }
    function a(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function u(e, t) {
      return !t || ('object' != typeof t && 'function' != typeof t) ? a(e) : t;
    }
    function l(e) {
      var t = s();
      return function () {
        var n,
          i = r(e);
        if (t) {
          var o = r(this).constructor;
          n = Reflect.construct(i, arguments, o);
        } else n = i.apply(this, arguments);
        return u(this, n);
      };
    }
    function d(e, t) {
      for (
        ;
        !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = r(e));

      );
      return e;
    }
    function g(e, t, n) {
      return (g =
        'undefined' != typeof Reflect && Reflect.get
          ? Reflect.get
          : function (e, t, n) {
              var i = d(e, t);
              if (i) {
                var r = Object.getOwnPropertyDescriptor(i, t);
                return r.get ? r.get.call(n) : r.value;
              }
            })(e, t, n || e);
    }
    var f = (function () {
        function t() {
          e(this, t),
            Object.defineProperty(this, 'listeners', {
              value: {},
              writable: !0,
              configurable: !0
            });
        }
        return (
          n(t, [
            {
              key: 'addEventListener',
              value: function (e, t) {
                e in this.listeners || (this.listeners[e] = []),
                  this.listeners[e].push(t);
              }
            },
            {
              key: 'removeEventListener',
              value: function (e, t) {
                if (e in this.listeners)
                  for (
                    var n = this.listeners[e], i = 0, r = n.length;
                    i < r;
                    i++
                  )
                    if (n[i] === t) return void n.splice(i, 1);
              }
            },
            {
              key: 'dispatchEvent',
              value: function (e) {
                var t = this;
                if (e.type in this.listeners) {
                  for (
                    var n = function (n) {
                        setTimeout(function () {
                          return n.call(t, e);
                        });
                      },
                      i = this.listeners[e.type],
                      r = 0,
                      o = i.length;
                    r < o;
                    r++
                  )
                    n(i[r]);
                  return !e.defaultPrevented;
                }
              }
            }
          ]),
          t
        );
      })(),
      I = (function (t) {
        i(c, t);
        var o = l(c);
        function c() {
          var t;
          return (
            e(this, c),
            (t = o.call(this)).listeners || f.call(a(t)),
            Object.defineProperty(a(t), 'aborted', {
              value: !1,
              writable: !0,
              configurable: !0
            }),
            Object.defineProperty(a(t), 'onabort', {
              value: null,
              writable: !0,
              configurable: !0
            }),
            t
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
              value: function (e) {
                'abort' === e.type &&
                  ((this.aborted = !0),
                  'function' == typeof this.onabort &&
                    this.onabort.call(this, e)),
                  g(r(c.prototype), 'dispatchEvent', this).call(this, e);
              }
            }
          ]),
          c
        );
      })(f),
      y = (function () {
        function t() {
          e(this, t),
            Object.defineProperty(this, 'signal', {
              value: new I(),
              writable: !0,
              configurable: !0
            });
        }
        return (
          n(t, [
            {
              key: 'abort',
              value: function () {
                var e;
                try {
                  e = new Event('abort');
                } catch (t) {
                  'undefined' != typeof document
                    ? document.createEvent
                      ? (e = document.createEvent('Event')).initEvent(
                          'abort',
                          !1,
                          !1
                        )
                      : ((e = document.createEventObject()).type = 'abort')
                    : (e = { type: 'abort', bubbles: !1, cancelable: !1 });
                }
                this.signal.dispatchEvent(e);
              }
            },
            {
              key: 'toString',
              value: function () {
                return '[object AbortController]';
              }
            }
          ]),
          t
        );
      })();
    function p(e) {
      return e.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL
        ? (console.log(
            '__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill'
          ),
          !0)
        : ('function' == typeof e.Request &&
            !e.Request.prototype.hasOwnProperty('signal')) ||
            !e.AbortController;
    }
    'undefined' != typeof Symbol &&
      Symbol.toStringTag &&
      ((y.prototype[Symbol.toStringTag] = 'AbortController'),
      (I.prototype[Symbol.toStringTag] = 'AbortSignal')),
      (function (e) {
        p(e) && ((e.AbortController = y), (e.AbortSignal = I));
      })('undefined' != typeof self ? self : c);
  })();
var Cr = a(function (e, t) {
  Object.defineProperty(t, '__esModule', { value: !0 });
  var n = (function () {
    function e() {
      var e = this;
      (this.locked = new Map()),
        (this.addToLocked = function (t, n) {
          var i = e.locked.get(t);
          void 0 === i
            ? void 0 === n
              ? e.locked.set(t, [])
              : e.locked.set(t, [n])
            : void 0 !== n && (i.unshift(n), e.locked.set(t, i));
        }),
        (this.isLocked = function (t) {
          return e.locked.has(t);
        }),
        (this.lock = function (t) {
          return new Promise(function (n, i) {
            e.isLocked(t) ? e.addToLocked(t, n) : (e.addToLocked(t), n());
          });
        }),
        (this.unlock = function (t) {
          var n = e.locked.get(t);
          if (void 0 !== n && 0 !== n.length) {
            var i = n.pop();
            e.locked.set(t, n), void 0 !== i && setTimeout(i, 0);
          } else e.locked.delete(t);
        });
    }
    return (
      (e.getInstance = function () {
        return void 0 === e.instance && (e.instance = new e()), e.instance;
      }),
      e
    );
  })();
  t.default = function () {
    return n.getInstance();
  };
});
s(Cr);
var Fr = s(
  a(function (e, t) {
    var n =
        (c && c.__awaiter) ||
        function (e, t, n, i) {
          return new (n || (n = Promise))(function (r, o) {
            function c(e) {
              try {
                a(i.next(e));
              } catch (e) {
                o(e);
              }
            }
            function s(e) {
              try {
                a(i.throw(e));
              } catch (e) {
                o(e);
              }
            }
            function a(e) {
              e.done
                ? r(e.value)
                : new n(function (t) {
                    t(e.value);
                  }).then(c, s);
            }
            a((i = i.apply(e, t || [])).next());
          });
        },
      i =
        (c && c.__generator) ||
        function (e, t) {
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
                    o = t.call(e, c);
                  } catch (e) {
                    (o = [6, e]), (i = 0);
                  } finally {
                    n = r = 0;
                  }
                if (5 & o[0]) throw o[1];
                return { value: o[0] ? o[1] : void 0, done: !0 };
              })([o, s]);
            };
          }
        };
    Object.defineProperty(t, '__esModule', { value: !0 });
    var r = 'browser-tabs-lock-key';
    function o(e) {
      return new Promise(function (t) {
        return setTimeout(t, e);
      });
    }
    function s(e) {
      for (
        var t = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz',
          n = '',
          i = 0;
        i < e;
        i++
      ) {
        n += t[Math.floor(Math.random() * t.length)];
      }
      return n;
    }
    var a = (function () {
      function e() {
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
          void 0 === e.waiters && (e.waiters = []);
      }
      return (
        (e.prototype.acquireLock = function (t, c) {
          return (
            void 0 === c && (c = 5e3),
            n(this, void 0, void 0, function () {
              var n, a, u, l, d, g;
              return i(this, function (i) {
                switch (i.label) {
                  case 0:
                    (n = Date.now() + s(4)),
                      (a = Date.now() + c),
                      (u = r + '-' + t),
                      (l = window.localStorage),
                      (i.label = 1);
                  case 1:
                    return Date.now() < a ? [4, o(30)] : [3, 8];
                  case 2:
                    return (
                      i.sent(),
                      null !== l.getItem(u)
                        ? [3, 5]
                        : ((d = this.id + '-' + t + '-' + n),
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
                      e.lockCorrector(), [4, this.waitForSomethingToChange(a)]
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
        (e.prototype.refreshLockWhileAcquired = function (e, t) {
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
                          return [4, Cr.default().lock(t)];
                        case 1:
                          return (
                            i.sent(),
                            this.acquiredIatSet.has(t)
                              ? ((n = window.localStorage),
                                null === (r = n.getItem(e))
                                  ? (Cr.default().unlock(t), [2])
                                  : (((r = JSON.parse(
                                      r
                                    )).timeRefreshed = Date.now()),
                                    n.setItem(e, JSON.stringify(r)),
                                    Cr.default().unlock(t),
                                    this.refreshLockWhileAcquired(e, t),
                                    [2]))
                              : (Cr.default().unlock(t), [2])
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
        (e.prototype.waitForSomethingToChange = function (t) {
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
                            e.removeFromWaiting(c),
                            clearTimeout(s),
                            (o = !0)),
                          !i)
                        ) {
                          i = !0;
                          var t = 50 - (Date.now() - r);
                          t > 0 ? setTimeout(n, t) : n();
                        }
                      }
                      window.addEventListener('storage', c), e.addToWaiting(c);
                      var s = setTimeout(c, Math.max(0, t - Date.now()));
                    })
                  ];
                case 1:
                  return n.sent(), [2];
              }
            });
          });
        }),
        (e.addToWaiting = function (t) {
          this.removeFromWaiting(t), void 0 !== e.waiters && e.waiters.push(t);
        }),
        (e.removeFromWaiting = function (t) {
          void 0 !== e.waiters &&
            (e.waiters = e.waiters.filter(function (e) {
              return e !== t;
            }));
        }),
        (e.notifyWaiters = function () {
          void 0 !== e.waiters &&
            e.waiters.slice().forEach(function (e) {
              return e();
            });
        }),
        (e.prototype.releaseLock = function (e) {
          return n(this, void 0, void 0, function () {
            return i(this, function (t) {
              switch (t.label) {
                case 0:
                  return [4, this.releaseLock__private__(e)];
                case 1:
                  return [2, t.sent()];
              }
            });
          });
        }),
        (e.prototype.releaseLock__private__ = function (t) {
          return n(this, void 0, void 0, function () {
            var n, o, c;
            return i(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    (n = window.localStorage),
                    (o = r + '-' + t),
                    null === (c = n.getItem(o))
                      ? [2]
                      : (c = JSON.parse(c)).id !== this.id
                      ? [3, 2]
                      : [4, Cr.default().lock(c.iat)]
                  );
                case 1:
                  i.sent(),
                    this.acquiredIatSet.delete(c.iat),
                    n.removeItem(o),
                    Cr.default().unlock(c.iat),
                    e.notifyWaiters(),
                    (i.label = 2);
                case 2:
                  return [2];
              }
            });
          });
        }),
        (e.lockCorrector = function () {
          for (
            var t = Date.now() - 5e3,
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
                  a.timeAcquired < t) ||
                  (void 0 !== a.timeRefreshed && a.timeRefreshed < t)) &&
                (n.removeItem(s), (o = !0));
            }
          }
          o && e.notifyWaiters();
        }),
        (e.waiters = void 0),
        e
      );
    })();
    t.default = a;
  })
);
var Ur = { timeoutInSeconds: 60 },
  Sr = [
    'login_required',
    'consent_required',
    'interaction_required',
    'account_selection_required',
    'access_denied'
  ],
  Vr = (function (e) {
    function n(t, i) {
      var r = e.call(this, i) || this;
      return (
        (r.error = t),
        (r.error_description = i),
        Object.setPrototypeOf(r, n.prototype),
        r
      );
    }
    return (
      t(n, e),
      (n.fromPayload = function (e) {
        return new n(e.error, e.error_description);
      }),
      n
    );
  })(Error),
  Zr = (function (e) {
    function n(t, i, r, o) {
      void 0 === o && (o = null);
      var c = e.call(this, t, i) || this;
      return (
        (c.state = r),
        (c.appState = o),
        Object.setPrototypeOf(c, n.prototype),
        c
      );
    }
    return t(n, e), n;
  })(Vr),
  Xr = (function (e) {
    function n() {
      var t = e.call(this, 'timeout', 'Timeout') || this;
      return Object.setPrototypeOf(t, n.prototype), t;
    }
    return t(n, e), n;
  })(Vr),
  xr = (function (e) {
    function n(t) {
      var i = e.call(this) || this;
      return (i.popup = t), Object.setPrototypeOf(i, n.prototype), i;
    }
    return t(n, e), n;
  })(Xr),
  wr = function (e, t, n) {
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
            r(new Xr()), s();
          }, 1e3 * n);
        (c = function (e) {
          if (
            e.origin == t &&
            e.data &&
            'authorization_response' === e.data.type
          ) {
            var n = e.source;
            n && n.close(),
              e.data.response.error
                ? r(Vr.fromPayload(e.data.response))
                : i(e.data.response),
              clearTimeout(a),
              window.removeEventListener('message', c, !1),
              setTimeout(s, 2e3);
          }
        }),
          window.addEventListener('message', c, !1),
          window.document.body.appendChild(o),
          o.setAttribute('src', e);
      })
    );
  },
  Gr = function (e, t) {
    var n,
      i,
      r,
      o = t.popup;
    if (
      (o
        ? (o.location.href = e)
        : ((n = e),
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
    return new Promise(function (e, n) {
      var i,
        r = setTimeout(function () {
          n(new xr(o)), window.removeEventListener('message', i, !1);
        }, 1e3 * (t.timeoutInSeconds || 60));
      (i = function (t) {
        if (t.data && 'authorization_response' === t.data.type) {
          if (
            (clearTimeout(r),
            window.removeEventListener('message', i, !1),
            o.close(),
            t.data.response.error)
          )
            return n(Vr.fromPayload(t.data.response));
          e(t.data.response);
        }
      }),
        window.addEventListener('message', function (e) {
          return i(e);
        });
    });
  },
  Qr = function () {
    return window.crypto || window.msCrypto;
  },
  Ar = function () {
    var e = Qr();
    return e.subtle || e.webkitSubtle;
  },
  Rr = function () {
    var e =
        '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.',
      t = '';
    return (
      Array.from(Qr().getRandomValues(new Uint8Array(43))).forEach(function (
        n
      ) {
        return (t += e[n % e.length]);
      }),
      t
    );
  },
  Jr = function (e) {
    return btoa(e);
  },
  Hr = function (e) {
    return Object.keys(e)
      .filter(function (t) {
        return void 0 !== e[t];
      })
      .map(function (t) {
        return encodeURIComponent(t) + '=' + encodeURIComponent(e[t]);
      })
      .join('&');
  },
  Lr = function (e) {
    return r(void 0, void 0, void 0, function () {
      var t;
      return o(this, function (n) {
        switch (n.label) {
          case 0:
            return (
              (t = Ar().digest(
                { name: 'SHA-256' },
                new TextEncoder().encode(e)
              )),
              window.msCrypto
                ? [
                    2,
                    new Promise(function (e, n) {
                      (t.oncomplete = function (t) {
                        e(t.target.result);
                      }),
                        (t.onerror = function (e) {
                          n(e.error);
                        }),
                        (t.onabort = function () {
                          n('The digest operation was aborted');
                        });
                    })
                  ]
                : [4, t]
            );
          case 1:
            return [2, n.sent()];
        }
      });
    });
  },
  Wr = function (e) {
    return (function (e) {
      return decodeURIComponent(
        atob(e)
          .split('')
          .map(function (e) {
            return '%' + ('00' + e.charCodeAt(0).toString(16)).slice(-2);
          })
          .join('')
      );
    })(e.replace(/_/g, '/').replace(/-/g, '+'));
  },
  kr = function (e) {
    var t = new Uint8Array(e);
    return (function (e) {
      var t = { '+': '-', '/': '_', '=': '' };
      return e.replace(/[+/=]/g, function (e) {
        return t[e];
      });
    })(window.btoa(String.fromCharCode.apply(String, Array.from(t))));
  },
  Er = function (e, t, i, c, s, a) {
    return r(void 0, void 0, void 0, function () {
      var r, u;
      return o(this, function (o) {
        switch (o.label) {
          case 0:
            return a
              ? (delete c.signal,
                [
                  2,
                  ((g = n({ url: e, audience: t, scope: i, timeout: s }, c)),
                  (f = a),
                  new Promise(function (e, t) {
                    var n = new MessageChannel();
                    (n.port1.onmessage = function (n) {
                      n.data.error ? t(new Error(n.data.error)) : e(n.data);
                    }),
                      f.postMessage(g, [n.port2]);
                  }))
                ])
              : [3, 1];
          case 1:
            return [
              4,
              ((l = e),
              (d = c),
              (d = d || {}),
              new Promise(function (e, t) {
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
                        return Promise.resolve(n.responseText).then(JSON.parse);
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
                        get: function (e) {
                          return o[e.toLowerCase()];
                        },
                        has: function (e) {
                          return e.toLowerCase() in o;
                        }
                      }
                    };
                  };
                for (var s in (n.open(d.method || 'get', l, !0),
                (n.onload = function () {
                  n
                    .getAllResponseHeaders()
                    .replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (
                      e,
                      t,
                      n
                    ) {
                      i.push((t = t.toLowerCase())),
                        r.push([t, n]),
                        (o[t] = o[t] ? o[t] + ',' + n : n);
                    }),
                    e(c());
                }),
                (n.onerror = t),
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
  Tr = function (e, t, i, r, o, c) {
    void 0 === c && (c = 1e4);
    var s,
      a = new AbortController(),
      u = a.signal,
      l = n(n({}, r), { signal: u });
    return Promise.race([
      Er(e, t, i, l, c, o),
      new Promise(function (e, t) {
        s = setTimeout(function () {
          a.abort(), t(new Error("Timeout when executing 'fetch'"));
        }, c);
      })
    ]).finally(function () {
      clearTimeout(s);
    });
  },
  Nr = function (e, t, n, c, s, a) {
    return r(void 0, void 0, void 0, function () {
      var r, u, l, d, g, f, I, y, p, h;
      return o(this, function (o) {
        switch (o.label) {
          case 0:
            (r = null), (l = 0), (o.label = 1);
          case 1:
            if (!(l < 3)) return [3, 6];
            o.label = 2;
          case 2:
            return o.trys.push([2, 4, , 5]), [4, Tr(e, n, c, s, a, t)];
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
              (y = i(g, ['error', 'error_description'])),
              !u.ok)
            )
              throw (
                ((p = I || 'HTTP error. Unable to fetch ' + e),
                ((h = new Error(p)).error = f || 'request_error'),
                (h.error_description = p),
                h)
              );
            return [2, y];
        }
      });
    });
  },
  Yr = function (e, t) {
    return r(void 0, void 0, void 0, function () {
      var r,
        c = e.clientHash,
        s = e.baseUrl,
        a = e.timeout,
        u = e.audience,
        l = e.scope,
        d = i(e, ['clientHash', 'baseUrl', 'timeout', 'audience', 'scope']);
      return o(this, function (e) {
        switch (e.label) {
          case 0:
            return (
              (r = new URLSearchParams(
                n({ redirect_uri: window.location.origin }, d)
              )),
              [
                4,
                Nr(
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
                  t
                )
              ]
            );
          case 1:
            return [2, e.sent()];
        }
      });
    });
  },
  Kr = function (e) {
    return Array.from(new Set(e));
  },
  Or = function () {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return Kr(e.join(' ').trim().split(/\s+/)).join(' ');
  },
  jr = function (e) {
    return (
      '@@auth0spajs@@::' + e.client_id + '::' + e.audience + '::' + e.scope
    );
  },
  Pr = function (e) {
    var t = Math.floor(Date.now() / 1e3) + e.expires_in;
    return { body: e, expiresAt: Math.min(t, e.decodedToken.claims.exp) };
  },
  zr = (function () {
    function e() {}
    return (
      (e.prototype.save = function (e) {
        var t = jr(e),
          n = Pr(e);
        window.localStorage.setItem(t, JSON.stringify(n));
      }),
      (e.prototype.get = function (e, t) {
        void 0 === t && (t = 0);
        var n = jr(e),
          i = this.readJson(n),
          r = Math.floor(Date.now() / 1e3);
        if (i) {
          if (!(i.expiresAt - t < r)) return i.body;
          if (i.body.refresh_token) {
            var o = this.stripData(i);
            return this.writeJson(n, o), o.body;
          }
          localStorage.removeItem(n);
        }
      }),
      (e.prototype.clear = function () {
        for (var e = localStorage.length - 1; e >= 0; e--)
          localStorage.key(e).startsWith('@@auth0spajs@@') &&
            localStorage.removeItem(localStorage.key(e));
      }),
      (e.prototype.readJson = function (e) {
        var t,
          n = window.localStorage.getItem(e);
        if (n && (t = JSON.parse(n))) return t;
      }),
      (e.prototype.writeJson = function (e, t) {
        localStorage.setItem(e, JSON.stringify(t));
      }),
      (e.prototype.stripData = function (e) {
        return {
          body: { refresh_token: e.body.refresh_token },
          expiresAt: e.expiresAt
        };
      }),
      e
    );
  })(),
  _r = function () {
    this.enclosedCache = (function () {
      var e = { body: {}, expiresAt: 0 };
      return {
        save: function (t) {
          var n = jr(t),
            i = Pr(t);
          e[n] = i;
        },
        get: function (t, n) {
          void 0 === n && (n = 0);
          var i = jr(t),
            r = e[i],
            o = Math.floor(Date.now() / 1e3);
          if (r)
            return r.expiresAt - n < o
              ? r.body.refresh_token
                ? ((r.body = { refresh_token: r.body.refresh_token }), r.body)
                : void delete e[i]
              : r.body;
        },
        clear: function () {
          e = { body: {}, expiresAt: 0 };
        }
      };
    })();
  },
  Dr = (function () {
    function e(e) {
      (this.storage = e), (this.transaction = this.storage.get('a0.spajs.txs'));
    }
    return (
      (e.prototype.create = function (e) {
        (this.transaction = e),
          this.storage.save('a0.spajs.txs', e, { daysUntilExpire: 1 });
      }),
      (e.prototype.get = function () {
        return this.transaction;
      }),
      (e.prototype.remove = function () {
        delete this.transaction, this.storage.remove('a0.spajs.txs');
      }),
      e
    );
  })(),
  Mr = function (e) {
    return 'number' == typeof e;
  },
  qr = [
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
  $r = function (e) {
    if (!e.id_token) throw new Error('ID token is required but missing');
    var t = (function (e) {
      var t = e.split('.'),
        n = t[0],
        i = t[1],
        r = t[2];
      if (3 !== t.length || !n || !i || !r)
        throw new Error('ID token could not be decoded');
      var o = JSON.parse(Wr(i)),
        c = { __raw: e },
        s = {};
      return (
        Object.keys(o).forEach(function (e) {
          (c[e] = o[e]), qr.includes(e) || (s[e] = o[e]);
        }),
        {
          encoded: { header: n, payload: i, signature: r },
          header: JSON.parse(Wr(n)),
          claims: c,
          user: s
        }
      );
    })(e.id_token);
    if (!t.claims.iss)
      throw new Error(
        'Issuer (iss) claim must be a string present in the ID token'
      );
    if (t.claims.iss !== e.iss)
      throw new Error(
        'Issuer (iss) claim mismatch in the ID token; expected "' +
          e.iss +
          '", found "' +
          t.claims.iss +
          '"'
      );
    if (!t.user.sub)
      throw new Error(
        'Subject (sub) claim must be a string present in the ID token'
      );
    if ('RS256' !== t.header.alg)
      throw new Error(
        'Signature algorithm of "' +
          t.header.alg +
          '" is not supported. Expected the ID token to be signed with "RS256".'
      );
    if (
      !t.claims.aud ||
      ('string' != typeof t.claims.aud && !Array.isArray(t.claims.aud))
    )
      throw new Error(
        'Audience (aud) claim must be a string or array of strings present in the ID token'
      );
    if (Array.isArray(t.claims.aud)) {
      if (!t.claims.aud.includes(e.aud))
        throw new Error(
          'Audience (aud) claim mismatch in the ID token; expected "' +
            e.aud +
            '" but was not one of "' +
            t.claims.aud.join(', ') +
            '"'
        );
      if (t.claims.aud.length > 1) {
        if (!t.claims.azp)
          throw new Error(
            'Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values'
          );
        if (t.claims.azp !== e.aud)
          throw new Error(
            'Authorized Party (azp) claim mismatch in the ID token; expected "' +
              e.aud +
              '", found "' +
              t.claims.azp +
              '"'
          );
      }
    } else if (t.claims.aud !== e.aud)
      throw new Error(
        'Audience (aud) claim mismatch in the ID token; expected "' +
          e.aud +
          '" but found "' +
          t.claims.aud +
          '"'
      );
    if (e.nonce) {
      if (!t.claims.nonce)
        throw new Error(
          'Nonce (nonce) claim must be a string present in the ID token'
        );
      if (t.claims.nonce !== e.nonce)
        throw new Error(
          'Nonce (nonce) claim mismatch in the ID token; expected "' +
            e.nonce +
            '", found "' +
            t.claims.nonce +
            '"'
        );
    }
    if (e.max_age && !Mr(t.claims.auth_time))
      throw new Error(
        'Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified'
      );
    if (!Mr(t.claims.exp))
      throw new Error(
        'Expiration Time (exp) claim must be a number present in the ID token'
      );
    if (!Mr(t.claims.iat))
      throw new Error(
        'Issued At (iat) claim must be a number present in the ID token'
      );
    var n = e.leeway || 60,
      i = new Date(Date.now()),
      r = new Date(0),
      o = new Date(0),
      c = new Date(0);
    if (
      (c.setUTCSeconds(parseInt(t.claims.auth_time) + e.max_age + n),
      r.setUTCSeconds(t.claims.exp + n),
      o.setUTCSeconds(t.claims.nbf - n),
      i > r)
    )
      throw new Error(
        'Expiration Time (exp) claim error in the ID token; current time (' +
          i +
          ') is after expiration time (' +
          r +
          ')'
      );
    if (Mr(t.claims.nbf) && i < o)
      throw new Error(
        "Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Currrent time (" +
          i +
          ') is before ' +
          o
      );
    if (Mr(t.claims.auth_time) && i > c)
      throw new Error(
        'Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Currrent time (' +
          i +
          ') is after last auth at ' +
          c
      );
    return t;
  },
  eo = a(function (e, t) {
    var n =
      (c && c.__assign) ||
      function () {
        return (n =
          Object.assign ||
          function (e) {
            for (var t, n = 1, i = arguments.length; n < i; n++)
              for (var r in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e;
          }).apply(this, arguments);
      };
    function i(e, t) {
      if (!t) return '';
      var n = '; ' + e;
      return !0 === t ? n : n + '=' + t;
    }
    function r(e, t, n) {
      return (
        encodeURIComponent(e)
          .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
          .replace(/\(/g, '%28')
          .replace(/\)/g, '%29') +
        '=' +
        encodeURIComponent(t).replace(
          /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
          decodeURIComponent
        ) +
        (function (e) {
          if ('number' == typeof e.expires) {
            var t = new Date();
            t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires),
              (e.expires = t);
          }
          return (
            i('Expires', e.expires ? e.expires.toUTCString() : '') +
            i('Domain', e.domain) +
            i('Path', e.path) +
            i('Secure', e.secure) +
            i('SameSite', e.sameSite)
          );
        })(n)
      );
    }
    function o(e) {
      for (
        var t = {}, n = e ? e.split('; ') : [], i = /(%[\dA-F]{2})+/gi, r = 0;
        r < n.length;
        r++
      ) {
        var o = n[r].split('='),
          c = o.slice(1).join('=');
        '"' === c.charAt(0) && (c = c.slice(1, -1));
        try {
          t[o[0].replace(i, decodeURIComponent)] = c.replace(
            i,
            decodeURIComponent
          );
        } catch (e) {}
      }
      return t;
    }
    function s() {
      return o(document.cookie);
    }
    function a(e, t, i) {
      document.cookie = r(e, t, n({ path: '/' }, i));
    }
    (t.__esModule = !0),
      (t.encode = r),
      (t.parse = o),
      (t.getAll = s),
      (t.get = function (e) {
        return s()[e];
      }),
      (t.set = a),
      (t.remove = function (e, t) {
        a(e, '', n(n({}, t), { expires: -1 }));
      });
  });
s(eo);
eo.encode, eo.parse, eo.getAll;
var to = eo.get,
  no = eo.set,
  io = eo.remove,
  ro = {
    get: function (e) {
      var t = to(e);
      if (void 0 !== t) return JSON.parse(t);
    },
    save: function (e, t, n) {
      var i = {};
      'https:' === window.location.protocol &&
        (i = { secure: !0, sameSite: 'none' }),
        (i.expires = n.daysUntilExpire),
        no(e, JSON.stringify(t), i);
    },
    remove: function (e) {
      io(e);
    }
  },
  oo = {
    get: function (e) {
      var t = ro.get(e);
      return t || ro.get('_legacy_' + e);
    },
    save: function (e, t, n) {
      var i = {};
      'https:' === window.location.protocol && (i = { secure: !0 }),
        (i.expires = n.daysUntilExpire),
        no('_legacy_' + e, JSON.stringify(t), i),
        ro.save(e, t, n);
    },
    remove: function (e) {
      ro.remove(e), ro.remove('_legacy_' + e);
    }
  },
  co = {
    get: function (e) {
      if ('undefined' != typeof sessionStorage) {
        var t = sessionStorage.getItem(e);
        if (void 0 !== t) return JSON.parse(t);
      }
    },
    save: function (e, t) {
      sessionStorage.setItem(e, JSON.stringify(t));
    },
    remove: function (e) {
      sessionStorage.removeItem(e);
    }
  };
function so(e, t, n) {
  var i = void 0 === t ? null : t,
    r = (function (e, t) {
      var n = atob(e);
      if (t) {
        for (var i = new Uint8Array(n.length), r = 0, o = n.length; r < o; ++r)
          i[r] = n.charCodeAt(r);
        return String.fromCharCode.apply(null, new Uint16Array(i.buffer));
      }
      return n;
    })(e, void 0 !== n && n),
    o = r.indexOf('\n', 10) + 1,
    c = r.substring(o) + (i ? '//# sourceMappingURL=' + i : ''),
    s = new Blob([c], { type: 'application/javascript' });
  return URL.createObjectURL(s);
}
var ao,
  uo,
  lo,
  go,
  fo =
    ((ao =
      'Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwohZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Ci8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKgogICAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuCiAgICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgIkxpY2Vuc2UiKTsgeW91IG1heSBub3QgdXNlCiAgICB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZQogICAgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAKCiAgICBUSElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZCiAgICBLSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVECiAgICBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLAogICAgTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC4KCiAgICBTZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMKICAgIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4KICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovdmFyIGU9ZnVuY3Rpb24oKXtyZXR1cm4oZT1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHIsdD0xLG49YXJndW1lbnRzLmxlbmd0aDt0PG47dCsrKWZvcih2YXIgbyBpbiByPWFyZ3VtZW50c1t0XSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocixvKSYmKGVbb109cltvXSk7cmV0dXJuIGV9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O2Z1bmN0aW9uIHIoZSxyKXt2YXIgdCxuLG8scyxhPXtsYWJlbDowLHNlbnQ6ZnVuY3Rpb24oKXtpZigxJm9bMF0pdGhyb3cgb1sxXTtyZXR1cm4gb1sxXX0sdHJ5czpbXSxvcHM6W119O3JldHVybiBzPXtuZXh0OmkoMCksdGhyb3c6aSgxKSxyZXR1cm46aSgyKX0sImZ1bmN0aW9uIj09dHlwZW9mIFN5bWJvbCYmKHNbU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfSkscztmdW5jdGlvbiBpKHMpe3JldHVybiBmdW5jdGlvbihpKXtyZXR1cm4gZnVuY3Rpb24ocyl7aWYodCl0aHJvdyBuZXcgVHlwZUVycm9yKCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuIik7Zm9yKDthOyl0cnl7aWYodD0xLG4mJihvPTImc1swXT9uLnJldHVybjpzWzBdP24udGhyb3d8fCgobz1uLnJldHVybikmJm8uY2FsbChuKSwwKTpuLm5leHQpJiYhKG89by5jYWxsKG4sc1sxXSkpLmRvbmUpcmV0dXJuIG87c3dpdGNoKG49MCxvJiYocz1bMiZzWzBdLG8udmFsdWVdKSxzWzBdKXtjYXNlIDA6Y2FzZSAxOm89czticmVhaztjYXNlIDQ6cmV0dXJuIGEubGFiZWwrKyx7dmFsdWU6c1sxXSxkb25lOiExfTtjYXNlIDU6YS5sYWJlbCsrLG49c1sxXSxzPVswXTtjb250aW51ZTtjYXNlIDc6cz1hLm9wcy5wb3AoKSxhLnRyeXMucG9wKCk7Y29udGludWU7ZGVmYXVsdDppZighKG89YS50cnlzLChvPW8ubGVuZ3RoPjAmJm9bby5sZW5ndGgtMV0pfHw2IT09c1swXSYmMiE9PXNbMF0pKXthPTA7Y29udGludWV9aWYoMz09PXNbMF0mJighb3x8c1sxXT5vWzBdJiZzWzFdPG9bM10pKXthLmxhYmVsPXNbMV07YnJlYWt9aWYoNj09PXNbMF0mJmEubGFiZWw8b1sxXSl7YS5sYWJlbD1vWzFdLG89czticmVha31pZihvJiZhLmxhYmVsPG9bMl0pe2EubGFiZWw9b1syXSxhLm9wcy5wdXNoKHMpO2JyZWFrfW9bMl0mJmEub3BzLnBvcCgpLGEudHJ5cy5wb3AoKTtjb250aW51ZX1zPXIuY2FsbChlLGEpfWNhdGNoKGUpe3M9WzYsZV0sbj0wfWZpbmFsbHl7dD1vPTB9aWYoNSZzWzBdKXRocm93IHNbMV07cmV0dXJue3ZhbHVlOnNbMF0/c1sxXTp2b2lkIDAsZG9uZTohMH19KFtzLGldKX19fXZhciB0PXt9LG49ZnVuY3Rpb24oZSxyKXtyZXR1cm4gZSsifCIrcn07YWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsKGZ1bmN0aW9uKG8pe3ZhciBzLGEsaSx1LGMsbCxmLHAsaCx5LGI7cmV0dXJuIHA9dm9pZCAwLGg9dm9pZCAwLGI9ZnVuY3Rpb24oKXt2YXIgcCxoLHksYixkLHYsdyxnO3JldHVybiByKHRoaXMsKGZ1bmN0aW9uKHIpe3N3aXRjaChyLmxhYmVsKXtjYXNlIDA6cz1vLmRhdGEsYT1zLnVybCxpPXMudGltZW91dCx1PXMuYXVkaWVuY2UsYz1zLnNjb3BlLGw9ZnVuY3Rpb24oZSxyKXt2YXIgdD17fTtmb3IodmFyIG4gaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxuKSYmci5pbmRleE9mKG4pPDAmJih0W25dPWVbbl0pO2lmKG51bGwhPWUmJiJmdW5jdGlvbiI9PXR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbz0wO2ZvcihuPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7bzxuLmxlbmd0aDtvKyspci5pbmRleE9mKG5bb10pPDAmJk9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChlLG5bb10pJiYodFtuW29dXT1lW25bb11dKX1yZXR1cm4gdH0ocyxbInVybCIsInRpbWVvdXQiLCJhdWRpZW5jZSIsInNjb3BlIl0pLGY9by5wb3J0c1swXSxyLmxhYmVsPTE7Y2FzZSAxOmlmKHIudHJ5cy5wdXNoKFsxLDcsLDhdKSwhKGg9SlNPTi5wYXJzZShsLmJvZHkpKS5yZWZyZXNoX3Rva2VuJiYicmVmcmVzaF90b2tlbiI9PT1oLmdyYW50X3R5cGUpe2lmKCEoeT1mdW5jdGlvbihlLHIpe3JldHVybiB0W24oZSxyKV19KHUsYykpKXRocm93IG5ldyBFcnJvcigiVGhlIHdlYiB3b3JrZXIgaXMgbWlzc2luZyB0aGUgcmVmcmVzaCB0b2tlbiIpO2wuYm9keT1KU09OLnN0cmluZ2lmeShlKGUoe30saCkse3JlZnJlc2hfdG9rZW46eX0pKX1iPW5ldyBBYm9ydENvbnRyb2xsZXIsZD1iLnNpZ25hbCx2PXZvaWQgMCxyLmxhYmVsPTI7Y2FzZSAyOnJldHVybiByLnRyeXMucHVzaChbMiw0LCw1XSksWzQsUHJvbWlzZS5yYWNlKFsoaz1pLG5ldyBQcm9taXNlKChmdW5jdGlvbihlKXtyZXR1cm4gc2V0VGltZW91dChlLGspfSkpKSxmZXRjaChhLGUoZSh7fSxsKSx7c2lnbmFsOmR9KSldKV07Y2FzZSAzOnJldHVybiB2PXIuc2VudCgpLFszLDVdO2Nhc2UgNDpyZXR1cm4gdz1yLnNlbnQoKSxmLnBvc3RNZXNzYWdlKHtlcnJvcjp3Lm1lc3NhZ2V9KSxbMl07Y2FzZSA1OnJldHVybiB2P1s0LHYuanNvbigpXTooYi5hYm9ydCgpLFsyXSk7Y2FzZSA2OnJldHVybihwPXIuc2VudCgpKS5yZWZyZXNoX3Rva2VuPyhmdW5jdGlvbihlLHIsbyl7dFtuKHIsbyldPWV9KHAucmVmcmVzaF90b2tlbix1LGMpLGRlbGV0ZSBwLnJlZnJlc2hfdG9rZW4pOmZ1bmN0aW9uKGUscil7ZGVsZXRlIHRbbihlLHIpXX0odSxjKSxmLnBvc3RNZXNzYWdlKHtvazp2Lm9rLGpzb246cH0pLFszLDhdO2Nhc2UgNzpyZXR1cm4gZz1yLnNlbnQoKSxmLnBvc3RNZXNzYWdlKHtvazohMSxqc29uOntlcnJvcl9kZXNjcmlwdGlvbjpnLm1lc3NhZ2V9fSksWzMsOF07Y2FzZSA4OnJldHVyblsyXX12YXIga30pKX0sbmV3KCh5PXZvaWQgMCl8fCh5PVByb21pc2UpKSgoZnVuY3Rpb24oZSxyKXtmdW5jdGlvbiB0KGUpe3RyeXtvKGIubmV4dChlKSl9Y2F0Y2goZSl7cihlKX19ZnVuY3Rpb24gbihlKXt0cnl7byhiLnRocm93KGUpKX1jYXRjaChlKXtyKGUpfX1mdW5jdGlvbiBvKHIpe3IuZG9uZT9lKHIudmFsdWUpOm5ldyB5KChmdW5jdGlvbihlKXtlKHIudmFsdWUpfSkpLnRoZW4odCxuKX1vKChiPWIuYXBwbHkocCxofHxbXSkpLm5leHQoKSl9KSl9KSl9KCk7Cgo='),
    (uo =
      'data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4ud29ya2VyLmpzIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid29ya2VyOi9DOlxcd2ViLXdvcmtlclxcc3JjXFxjb25zdGFudHMudHMiLCJzcmMvdG9rZW4ud29ya2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IFBvcHVwQ29uZmlnT3B0aW9ucyB9IGZyb20gJy4vZ2xvYmFsJztcclxuXHJcbi8qKlxyXG4gKiBAaWdub3JlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9BVVRIT1JJWkVfVElNRU9VVF9JTl9TRUNPTkRTID0gNjA7XHJcblxyXG4vKipcclxuICogQGlnbm9yZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfUE9QVVBfQ09ORklHX09QVElPTlM6IFBvcHVwQ29uZmlnT3B0aW9ucyA9IHtcclxuICB0aW1lb3V0SW5TZWNvbmRzOiBERUZBVUxUX0FVVEhPUklaRV9USU1FT1VUX0lOX1NFQ09ORFNcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAaWdub3JlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9TSUxFTlRfVE9LRU5fUkVUUllfQ09VTlQgPSAzO1xyXG5cclxuLyoqXHJcbiAqIEBpZ25vcmVcclxuICovXHJcbmV4cG9ydCBjb25zdCBDTEVBTlVQX0lGUkFNRV9USU1FT1VUX0lOX1NFQ09ORFMgPSAyO1xyXG5cclxuLyoqXHJcbiAqIEBpZ25vcmVcclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0ZFVENIX1RJTUVPVVRfTVMgPSAxMDAwMDtcclxuXHJcbmV4cG9ydCBjb25zdCBDQUNIRV9MT0NBVElPTl9NRU1PUlkgPSAnbWVtb3J5JztcclxuZXhwb3J0IGNvbnN0IENBQ0hFX0xPQ0FUSU9OX0xPQ0FMX1NUT1JBR0UgPSAnbG9jYWxzdG9yYWdlJztcclxuZXhwb3J0IGNvbnN0IE1JU1NJTkdfUkVGUkVTSF9UT0tFTl9FUlJPUl9NRVNTQUdFID1cclxuICAnVGhlIHdlYiB3b3JrZXIgaXMgbWlzc2luZyB0aGUgcmVmcmVzaCB0b2tlbic7XHJcblxyXG4vKipcclxuICogQGlnbm9yZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfU0NPUEUgPSAnb3BlbmlkIHByb2ZpbGUgZW1haWwnO1xyXG5cclxuLyoqXHJcbiAqIEEgbGlzdCBvZiBlcnJvcnMgdGhhdCBjYW4gYmUgaXNzdWVkIGJ5IHRoZSBhdXRob3JpemF0aW9uIHNlcnZlciB3aGljaCB0aGVcclxuICogdXNlciBjYW4gcmVjb3ZlciBmcm9tIGJ5IHNpZ25pbmcgaW4gaW50ZXJhY3RpdmVseS5cclxuICogaHR0cHM6Ly9vcGVuaWQubmV0L3NwZWNzL29wZW5pZC1jb25uZWN0LWNvcmUtMV8wLmh0bWwjQXV0aEVycm9yXHJcbiAqIEBpZ25vcmVcclxuICovXHJcbmV4cG9ydCBjb25zdCBSRUNPVkVSQUJMRV9FUlJPUlMgPSBbXHJcbiAgJ2xvZ2luX3JlcXVpcmVkJyxcclxuICAnY29uc2VudF9yZXF1aXJlZCcsXHJcbiAgJ2ludGVyYWN0aW9uX3JlcXVpcmVkJyxcclxuICAnYWNjb3VudF9zZWxlY3Rpb25fcmVxdWlyZWQnLFxyXG4gIC8vIFN0cmljdGx5IHNwZWFraW5nIHRoZSB1c2VyIGNhbid0IHJlY292ZXIgZnJvbSBgYWNjZXNzX2RlbmllZGAgLSBidXQgdGhleVxyXG4gIC8vIGNhbiBnZXQgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGVpciBhY2Nlc3MgYmVpbmcgZGVuaWVkIGJ5IGxvZ2dpbmcgaW5cclxuICAvLyBpbnRlcmFjdGl2ZWx5LlxyXG4gICdhY2Nlc3NfZGVuaWVkJ1xyXG5dO1xyXG5cclxuLyoqXHJcbiAqIEBpZ25vcmVcclxuICovXHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX1NFU1NJT05fQ0hFQ0tfRVhQSVJZX0RBWVMgPSAxO1xyXG4iLCJpbXBvcnQgeyBNSVNTSU5HX1JFRlJFU0hfVE9LRU5fRVJST1JfTUVTU0FHRSB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmxldCByZWZyZXNoVG9rZW5zID0ge307XHJcblxyXG5jb25zdCBjYWNoZUtleSA9IChhdWRpZW5jZSwgc2NvcGUpID0+IGAke2F1ZGllbmNlfXwke3Njb3BlfWA7XHJcblxyXG5jb25zdCBnZXRSZWZyZXNoVG9rZW4gPSAoYXVkaWVuY2UsIHNjb3BlKSA9PlxyXG4gIHJlZnJlc2hUb2tlbnNbY2FjaGVLZXkoYXVkaWVuY2UsIHNjb3BlKV07XHJcblxyXG5jb25zdCBzZXRSZWZyZXNoVG9rZW4gPSAocmVmcmVzaFRva2VuLCBhdWRpZW5jZSwgc2NvcGUpID0+XHJcbiAgKHJlZnJlc2hUb2tlbnNbY2FjaGVLZXkoYXVkaWVuY2UsIHNjb3BlKV0gPSByZWZyZXNoVG9rZW4pO1xyXG5cclxuY29uc3QgZGVsZXRlUmVmcmVzaFRva2VuID0gKGF1ZGllbmNlLCBzY29wZSkgPT5cclxuICBkZWxldGUgcmVmcmVzaFRva2Vuc1tjYWNoZUtleShhdWRpZW5jZSwgc2NvcGUpXTtcclxuXHJcbmNvbnN0IHdhaXQ6IGFueSA9IHRpbWUgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpKTtcclxuXHJcbmNvbnN0IG1lc3NhZ2VIYW5kbGVyID0gYXN5bmMgKHtcclxuICBkYXRhOiB7IHVybCwgdGltZW91dCwgYXVkaWVuY2UsIHNjb3BlLCAuLi5vcHRzIH0sXHJcbiAgcG9ydHM6IFtwb3J0XVxyXG59KSA9PiB7XHJcbiAgbGV0IGpzb247XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGJvZHkgPSBKU09OLnBhcnNlKG9wdHMuYm9keSk7XHJcbiAgICBpZiAoIWJvZHkucmVmcmVzaF90b2tlbiAmJiBib2R5LmdyYW50X3R5cGUgPT09ICdyZWZyZXNoX3Rva2VuJykge1xyXG4gICAgICBjb25zdCByZWZyZXNoVG9rZW4gPSBnZXRSZWZyZXNoVG9rZW4oYXVkaWVuY2UsIHNjb3BlKTtcclxuICAgICAgaWYgKCFyZWZyZXNoVG9rZW4pIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTUlTU0lOR19SRUZSRVNIX1RPS0VOX0VSUk9SX01FU1NBR0UpO1xyXG4gICAgICB9XHJcbiAgICAgIG9wdHMuYm9keSA9IEpTT04uc3RyaW5naWZ5KHsgLi4uYm9keSwgcmVmcmVzaF90b2tlbjogcmVmcmVzaFRva2VuIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcclxuICAgIGNvbnN0IHsgc2lnbmFsIH0gPSBhYm9ydENvbnRyb2xsZXI7XHJcblxyXG4gICAgbGV0IHJlc3BvbnNlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmVzcG9uc2UgPSBhd2FpdCBQcm9taXNlLnJhY2UoW1xyXG4gICAgICAgIHdhaXQodGltZW91dCksXHJcbiAgICAgICAgZmV0Y2godXJsLCB7IC4uLm9wdHMsIHNpZ25hbCB9KVxyXG4gICAgICBdKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIC8vIGZldGNoIGVycm9yLCByZWplY3QgYHNlbmRNZXNzYWdlYCB1c2luZyBgZXJyb3JgIGtleSBzbyB0aGF0IHdlIHJldHJ5LlxyXG4gICAgICBwb3J0LnBvc3RNZXNzYWdlKHtcclxuICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghcmVzcG9uc2UpIHtcclxuICAgICAgLy8gSWYgdGhlIHJlcXVlc3QgdGltZXMgb3V0LCBhYm9ydCBpdCBhbmQgbGV0IGBmZXRjaFdpdGhUaW1lb3V0YCByYWlzZSB0aGUgZXJyb3IuXHJcbiAgICAgIGFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICBpZiAoanNvbi5yZWZyZXNoX3Rva2VuKSB7XHJcbiAgICAgIHNldFJlZnJlc2hUb2tlbihqc29uLnJlZnJlc2hfdG9rZW4sIGF1ZGllbmNlLCBzY29wZSk7XHJcbiAgICAgIGRlbGV0ZSBqc29uLnJlZnJlc2hfdG9rZW47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkZWxldGVSZWZyZXNoVG9rZW4oYXVkaWVuY2UsIHNjb3BlKTtcclxuICAgIH1cclxuXHJcbiAgICBwb3J0LnBvc3RNZXNzYWdlKHtcclxuICAgICAgb2s6IHJlc3BvbnNlLm9rLFxyXG4gICAgICBqc29uXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcG9ydC5wb3N0TWVzc2FnZSh7XHJcbiAgICAgIG9rOiBmYWxzZSxcclxuICAgICAganNvbjoge1xyXG4gICAgICAgIGVycm9yX2Rlc2NyaXB0aW9uOiBlcnJvci5tZXNzYWdlXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbi8vIERvbid0IHJ1biBgYWRkRXZlbnRMaXN0ZW5lcmAgaW4gb3VyIHRlc3RzICh0aGlzIGlzIHJlcGxhY2VkIGluIHJvbGx1cClcclxuLyogaXN0YW5idWwgaWdub3JlIGVsc2UgICovXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Rlc3QnKSB7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSB7IG1lc3NhZ2VIYW5kbGVyIH07XHJcbn0gZWxzZSB7XHJcbiAgLy8gQHRzLWlnbm9yZVxyXG4gIGFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBtZXNzYWdlSGFuZGxlcik7XHJcbn1cclxuIl0sIm5hbWVzIjpbIl9fYXNzaWduIiwiT2JqZWN0IiwiYXNzaWduIiwidCIsInMiLCJpIiwibiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSIsInRoaXMiLCJfX2dlbmVyYXRvciIsInRoaXNBcmciLCJib2R5IiwiZiIsInkiLCJnIiwiXyIsImxhYmVsIiwic2VudCIsInRyeXMiLCJvcHMiLCJuZXh0IiwidmVyYiIsInRocm93IiwicmV0dXJuIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJ2Iiwib3AiLCJUeXBlRXJyb3IiLCJkb25lIiwidmFsdWUiLCJwb3AiLCJwdXNoIiwiZSIsInN0ZXAiLCJyZWZyZXNoVG9rZW5zIiwiY2FjaGVLZXkiLCJhdWRpZW5jZSIsInNjb3BlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9hIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJfYiIsInVybCIsInRpbWVvdXQiLCJvcHRzIiwiaW5kZXhPZiIsImdldE93blByb3BlcnR5U3ltYm9scyIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwicG9ydCIsIkpTT04iLCJwYXJzZSIsInJlZnJlc2hfdG9rZW4iLCJncmFudF90eXBlIiwicmVmcmVzaFRva2VuIiwiZ2V0UmVmcmVzaFRva2VuIiwiRXJyb3IiLCJzdHJpbmdpZnkiLCJhYm9ydENvbnRyb2xsZXIiLCJBYm9ydENvbnRyb2xsZXIiLCJzaWduYWwiLCJyZXNwb25zZSIsIlByb21pc2UiLCJyYWNlIiwidGltZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiZmV0Y2giLCJfYyIsInBvc3RNZXNzYWdlIiwiZXJyb3IiLCJlcnJvcl8xIiwibWVzc2FnZSIsImpzb24iLCJhYm9ydCIsInNldFJlZnJlc2hUb2tlbiIsImRlbGV0ZVJlZnJlc2hUb2tlbiIsIm9rIiwiZXJyb3JfZGVzY3JpcHRpb24iLCJlcnJvcl8yIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwicmVqZWN0ZWQiLCJyZXN1bHQiLCJ0aGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztvRkE2Qk8sSUFBSUEsRUFBVyxXQVFsQixPQVBBQSxFQUFXQyxPQUFPQyxRQUFVLFNBQWtCQyxHQUMxQyxJQUFLLElBQUlDLEVBQUdDLEVBQUksRUFBR0MsRUFBSUMsVUFBVUMsT0FBUUgsRUFBSUMsRUFBR0QsSUFFNUMsSUFBSyxJQUFJSSxLQURUTCxFQUFJRyxVQUFVRixHQUNPSixPQUFPUyxVQUFVQyxlQUFlQyxLQUFLUixFQUFHSyxLQUFJTixFQUFFTSxHQUFLTCxFQUFFSyxJQUU5RSxPQUFPTixJQUVLVSxNQUFNQyxLQUFNUCxZQXVDekIsU0FBU1EsRUFBWUMsRUFBU0MsR0FDakMsSUFBc0dDLEVBQUdDLEVBQUdoQixFQUFHaUIsRUFBM0dDLEVBQUksQ0FBRUMsTUFBTyxFQUFHQyxLQUFNLFdBQWEsR0FBVyxFQUFQcEIsRUFBRSxHQUFRLE1BQU1BLEVBQUUsR0FBSSxPQUFPQSxFQUFFLElBQU9xQixLQUFNLEdBQUlDLElBQUssSUFDaEcsT0FBT0wsRUFBSSxDQUFFTSxLQUFNQyxFQUFLLEdBQUlDLE1BQVNELEVBQUssR0FBSUUsT0FBVUYsRUFBSyxJQUF3QixtQkFBWEcsU0FBMEJWLEVBQUVVLE9BQU9DLFVBQVksV0FBYSxPQUFPakIsT0FBVU0sRUFDdkosU0FBU08sRUFBS3JCLEdBQUssT0FBTyxTQUFVMEIsR0FBSyxPQUN6QyxTQUFjQyxHQUNWLEdBQUlmLEVBQUcsTUFBTSxJQUFJZ0IsVUFBVSxtQ0FDM0IsS0FBT2IsT0FDSCxHQUFJSCxFQUFJLEVBQUdDLElBQU1oQixFQUFZLEVBQVI4QixFQUFHLEdBQVNkLEVBQVUsT0FBSWMsRUFBRyxHQUFLZCxFQUFTLFNBQU9oQixFQUFJZ0IsRUFBVSxTQUFNaEIsRUFBRVMsS0FBS08sR0FBSSxHQUFLQSxFQUFFTyxTQUFXdkIsRUFBSUEsRUFBRVMsS0FBS08sRUFBR2MsRUFBRyxLQUFLRSxLQUFNLE9BQU9oQyxFQUUzSixPQURJZ0IsRUFBSSxFQUFHaEIsSUFBRzhCLEVBQUssQ0FBUyxFQUFSQSxFQUFHLEdBQVE5QixFQUFFaUMsUUFDekJILEVBQUcsSUFDUCxLQUFLLEVBQUcsS0FBSyxFQUFHOUIsRUFBSThCLEVBQUksTUFDeEIsS0FBSyxFQUFjLE9BQVhaLEVBQUVDLFFBQWdCLENBQUVjLE1BQU9ILEVBQUcsR0FBSUUsTUFBTSxHQUNoRCxLQUFLLEVBQUdkLEVBQUVDLFFBQVNILEVBQUljLEVBQUcsR0FBSUEsRUFBSyxDQUFDLEdBQUksU0FDeEMsS0FBSyxFQUFHQSxFQUFLWixFQUFFSSxJQUFJWSxNQUFPaEIsRUFBRUcsS0FBS2EsTUFBTyxTQUN4QyxRQUNJLEtBQU1sQyxFQUFJa0IsRUFBRUcsTUFBTXJCLEVBQUlBLEVBQUVLLE9BQVMsR0FBS0wsRUFBRUEsRUFBRUssT0FBUyxLQUFrQixJQUFWeUIsRUFBRyxJQUFzQixJQUFWQSxFQUFHLElBQVcsQ0FBRVosRUFBSSxFQUFHLFNBQ2pHLEdBQWMsSUFBVlksRUFBRyxNQUFjOUIsR0FBTThCLEVBQUcsR0FBSzlCLEVBQUUsSUFBTThCLEVBQUcsR0FBSzlCLEVBQUUsSUFBTSxDQUFFa0IsRUFBRUMsTUFBUVcsRUFBRyxHQUFJLE1BQzlFLEdBQWMsSUFBVkEsRUFBRyxJQUFZWixFQUFFQyxNQUFRbkIsRUFBRSxHQUFJLENBQUVrQixFQUFFQyxNQUFRbkIsRUFBRSxHQUFJQSxFQUFJOEIsRUFBSSxNQUM3RCxHQUFJOUIsR0FBS2tCLEVBQUVDLE1BQVFuQixFQUFFLEdBQUksQ0FBRWtCLEVBQUVDLE1BQVFuQixFQUFFLEdBQUlrQixFQUFFSSxJQUFJYSxLQUFLTCxHQUFLLE1BQ3ZEOUIsRUFBRSxJQUFJa0IsRUFBRUksSUFBSVksTUFDaEJoQixFQUFFRyxLQUFLYSxNQUFPLFNBRXRCSixFQUFLaEIsRUFBS0wsS0FBS0ksRUFBU0ssR0FDMUIsTUFBT2tCLEdBQUtOLEVBQUssQ0FBQyxFQUFHTSxHQUFJcEIsRUFBSSxVQUFlRCxFQUFJZixFQUFJLEVBQ3RELEdBQVksRUFBUjhCLEVBQUcsR0FBUSxNQUFNQSxFQUFHLEdBQUksTUFBTyxDQUFFRyxNQUFPSCxFQUFHLEdBQUtBLEVBQUcsUUFBSyxFQUFRRSxNQUFNLEdBckI5QkssQ0FBSyxDQUFDbEMsRUFBRzBCLE1DaER0RCxJQzdCSFMsRUFBZ0IsR0FFZEMsRUFBVyxTQUFDQyxFQUFVQyxHQUFVLE9BQUdELE1BQVlDLEdBZ0ZuREMsaUJBQWlCLFdBbkVJLFNBQU9DLHFCRmtESjlCLEVBQVMrQixFQUFZQyxFQUFHQyxTQUF4QmpDLFNBQVMrQixTQUFlRSxtRkVqRGhEQyxTQUFRQyxRQUFLQyxZQUFTVCxhQUFVQyxVQUFVUyxFRnNCckMsU0FBZ0JqRCxFQUFHbUMsR0FDdEIsSUFBSXBDLEVBQUksR0FDUixJQUFLLElBQUlNLEtBQUtMLEVBQU9ILE9BQU9TLFVBQVVDLGVBQWVDLEtBQUtSLEVBQUdLLElBQU04QixFQUFFZSxRQUFRN0MsR0FBSyxJQUM5RU4sRUFBRU0sR0FBS0wsRUFBRUssSUFDYixHQUFTLE1BQUxMLEdBQXFELG1CQUFqQ0gsT0FBT3NELHNCQUN0QixDQUFBLElBQUlsRCxFQUFJLEVBQWIsSUFBZ0JJLEVBQUlSLE9BQU9zRCxzQkFBc0JuRCxHQUFJQyxFQUFJSSxFQUFFRCxPQUFRSCxJQUMzRGtDLEVBQUVlLFFBQVE3QyxFQUFFSixJQUFNLEdBQUtKLE9BQU9TLFVBQVU4QyxxQkFBcUI1QyxLQUFLUixFQUFHSyxFQUFFSixNQUN2RUYsRUFBRU0sRUFBRUosSUFBTUQsRUFBRUssRUFBRUosS0FFMUIsT0FBT0YsS0UvQkgsc0NBQ0VzRCw4QkFLTiwyQkFETXhDLEVBQU95QyxLQUFLQyxNQUFNTixFQUFLcEMsT0FDbkIyQyxlQUFxQyxrQkFBcEIzQyxFQUFLNEMsV0FBZ0MsQ0FFOUQsS0FETUMsRUFuQlksU0FBQ25CLEVBQVVDLEdBQ2pDLE9BQUFILEVBQWNDLEVBQVNDLEVBQVVDLElBa0JSbUIsQ0FBZ0JwQixFQUFVQyxJQUU3QyxNQUFNLElBQUlvQixNREtoQiwrQ0NISVgsRUFBS3BDLEtBQU95QyxLQUFLTyxpQkFBZWhELElBQU0yQyxjQUFlRSxLQUdqREksRUFBa0IsSUFBSUMsZ0JBQ3BCQyxFQUFXRixTQUVmRywwQkFFUyxnQ0FBTUMsUUFBUUMsS0FBSyxFQXRCbEJDLEVBdUJMcEIsRUF2QmEsSUFBSWtCLFNBQVEsU0FBQUcsR0FBVyxPQUFBQyxXQUFXRCxFQUFTRCxPQXdCN0RHLE1BQU14QixTQUFVRSxJQUFNZSw2QkFGeEJDLEVBQVdPLHNCQVNYLGtCQUhBbkIsRUFBS29CLFlBQVksQ0FDZkMsTUFBT0MsRUFBTUMscUJBS2pCLE9BQUtYLEtBTVFBLEVBQVNZLFNBSnBCZixFQUFnQmdCLDJCQUlsQkQsRUFBT0wsVUFFRWhCLGVBaERXLFNBQUNFLEVBQWNuQixFQUFVQyxHQUM5Q0gsRUFBY0MsRUFBU0MsRUFBVUMsSUFBVWtCLEVBZ0R4Q3FCLENBQWdCRixFQUFLckIsY0FBZWpCLEVBQVVDLFVBQ3ZDcUMsRUFBS3JCLGVBL0NTLFNBQUNqQixFQUFVQyxVQUM3QkgsRUFBY0MsRUFBU0MsRUFBVUMsSUFnRHBDd0MsQ0FBbUJ6QyxFQUFVQyxHQUcvQmEsRUFBS29CLFlBQVksQ0FDZlEsR0FBSWhCLEVBQVNnQixHQUNiSix3Q0FHRnhCLEVBQUtvQixZQUFZLENBQ2ZRLElBQUksRUFDSkosS0FBTSxDQUNKSyxrQkFBbUJDLEVBQU1QLGtDQXpEZixJQUFBUixNRnFEUCxLQURvQ3hCLFlBQ3pCQSxFQUFJc0IsV0FBVSxTQUFVRyxFQUFTZSxHQUMvQyxTQUFTQyxFQUFVckQsR0FBUyxJQUFNSSxFQUFLUyxFQUFVdkIsS0FBS1UsSUFBVyxNQUFPRyxHQUFLaUQsRUFBT2pELElBQ3BGLFNBQVNtRCxFQUFTdEQsR0FBUyxJQUFNSSxFQUFLUyxFQUFpQixNQUFFYixJQUFXLE1BQU9HLEdBQUtpRCxFQUFPakQsSUFDdkYsU0FBU0MsRUFBS21ELEdBQVVBLEVBQU94RCxLQUFPc0MsRUFBUWtCLEVBQU92RCxPQUFTLElBQUlZLEdBQUUsU0FBVXlCLEdBQVdBLEVBQVFrQixFQUFPdkQsVUFBV3dELEtBQUtILEVBQVdDLEdBQ25JbEQsR0FBTVMsRUFBWUEsRUFBVXBDLE1BQU1HLEVBQVMrQixHQUFjLEtBQUtyQiJ9'),
    (lo = !1),
    function (e) {
      return (go = go || so(ao, uo, lo)), new Worker(go, e);
    }),
  Io = new Fr(),
  yo = {
    memory: function () {
      return new _r().enclosedCache;
    },
    localstorage: function () {
      return new zr();
    }
  },
  po = function (e) {
    return yo[e];
  },
  ho = function () {
    return !(
      /Trident.*rv:11\.0/.test(navigator.userAgent) ||
      /AppleWebKit.*Version\/10/.test(navigator.userAgent) ||
      /AppleWebKit.*Version\/11/.test(navigator.userAgent) ||
      /AppleWebKit.*Version\/12\.0/.test(navigator.userAgent)
    );
  },
  bo = (function () {
    function e(e) {
      var t, n;
      if (
        ((this.options = e),
        'undefined' != typeof window &&
          (function () {
            if (!Qr())
              throw new Error(
                'For security reasons, `window.crypto` is required to run `auth0-spa-js`.'
              );
            if (void 0 === Ar())
              throw new Error(
                '\n      auth0-spa-js must run on a secure origin. See https://github.com/auth0/auth0-spa-js/blob/master/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin for more information.\n    '
              );
          })(),
        (this.cacheLocation = e.cacheLocation || 'memory'),
        (this.cookieStorage = !1 === e.legacySameSiteCookie ? ro : oo),
        (this.sessionCheckExpiryDays = e.sessionCheckExpiryDays || 1),
        !po(this.cacheLocation))
      )
        throw new Error('Invalid cache location "' + this.cacheLocation + '"');
      var r,
        o,
        c = e.useCookiesForTransactions ? this.cookieStorage : co;
      (this.cache = po(this.cacheLocation)()),
        (this.scope = this.options.scope),
        (this.clientHash = this.options.clientHash),
        (this.transactionManager = new Dr(c)),
        (this.domainUrl = 'https://' + this.options.domain),
        (this.tokenIssuer =
          ((r = this.options.issuer),
          (o = this.domainUrl),
          r ? (r.startsWith('https://') ? r : 'https://' + r + '/') : o + '/')),
        (this.defaultScope = Or(
          'openid',
          void 0 !==
            (null ===
              (n =
                null === (t = this.options) || void 0 === t
                  ? void 0
                  : t.advancedOptions) || void 0 === n
              ? void 0
              : n.defaultScope)
            ? this.options.advancedOptions.defaultScope
            : 'openid profile email'
        )),
        this.options.useRefreshTokens &&
          (this.scope = Or(this.scope, 'offline_access')),
        'undefined' != typeof window &&
          window.Worker &&
          this.options.useRefreshTokens &&
          'memory' === this.cacheLocation &&
          ho() &&
          (this.worker = new fo()),
        (this.customOptions = (function (e) {
          return (
            e.advancedOptions,
            e.audience,
            e.auth0Client,
            e.authorizeTimeoutInSeconds,
            e.cacheLocation,
            e.client_id,
            e.domain,
            e.issuer,
            e.leeway,
            e.max_age,
            e.redirect_uri,
            e.scope,
            e.useRefreshTokens,
            i(e, [
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
        })(e));
    }
    return (
      (e.prototype._url = function (e) {
        var t = encodeURIComponent(
          btoa(
            JSON.stringify(
              this.options.auth0Client || {
                name: 'auth0-spa-js',
                version: '1.13.1'
              }
            )
          )
        );
        return '' + this.domainUrl + e + '&auth0Client=' + t;
      }),
      (e.prototype._getParams = function (e, t, r, o, c) {
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
        return n(n(n({}, a), e), {
          scope: Or(this.defaultScope, this.scope, e.scope),
          response_type: 'code',
          response_mode: 'query',
          state: t,
          nonce: r,
          redirect_uri: c || this.options.redirect_uri,
          code_challenge: o,
          code_challenge_method: 'S256'
        });
      }),
      (e.prototype._authorizeUrl = function (e) {
        return this._url('/authorize?' + Hr(e));
      }),
      (e.prototype._verifyIdToken = function (e, t) {
        return $r({
          iss: this.tokenIssuer,
          aud: this.options.client_id,
          id_token: e,
          nonce: t,
          leeway: this.options.leeway,
          max_age: this._parseNumber(this.options.max_age)
        });
      }),
      (e.prototype._parseNumber = function (e) {
        return 'string' != typeof e ? e : parseInt(e, 10) || void 0;
      }),
      (e.prototype.buildAuthorizeUrl = function (e) {
        return (
          void 0 === e && (e = {}),
          r(this, void 0, void 0, function () {
            var t, n, r, c, s, a, u, l, d, g, f;
            return o(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    (t = e.redirect_uri),
                    (n = e.appState),
                    (r = i(e, ['redirect_uri', 'appState'])),
                    (c = Jr(Rr())),
                    (s = Jr(Rr())),
                    (a = Rr()),
                    [4, Lr(a)]
                  );
                case 1:
                  return (
                    (u = o.sent()),
                    (l = kr(u)),
                    (d = e.fragment ? '#' + e.fragment : ''),
                    (g = this._getParams(r, c, s, l, t)),
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
      (e.prototype.loginWithPopup = function (e, t) {
        return (
          void 0 === e && (e = {}),
          void 0 === t && (t = {}),
          r(this, void 0, void 0, function () {
            var r, c, s, a, u, l, d, g, f, I, y, p;
            return o(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    (r = i(e, [])),
                    (c = Jr(Rr())),
                    (s = Jr(Rr())),
                    (a = Rr()),
                    [4, Lr(a)]
                  );
                case 1:
                  return (
                    (u = o.sent()),
                    (l = kr(u)),
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
                      Gr(
                        g,
                        n(n({}, t), {
                          timeoutInSeconds:
                            t.timeoutInSeconds ||
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
                    Yr(
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
                    (y = this._verifyIdToken(I.id_token, s)),
                    (p = n(n({}, I), {
                      decodedToken: y,
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
      (e.prototype.getUser = function (e) {
        return (
          void 0 === e && (e = {}),
          r(this, void 0, void 0, function () {
            var t, n, i;
            return o(this, function (r) {
              return (
                (t = e.audience || this.options.audience || 'default'),
                (n = Or(this.defaultScope, this.scope, e.scope)),
                [
                  2,
                  (i = this.cache.get({
                    client_id: this.options.client_id,
                    audience: t,
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
      (e.prototype.getIdTokenClaims = function (e) {
        return (
          void 0 === e && (e = {}),
          r(this, void 0, void 0, function () {
            var t, n, i;
            return o(this, function (r) {
              return (
                (t = e.audience || this.options.audience || 'default'),
                (n = Or(this.defaultScope, this.scope, e.scope)),
                [
                  2,
                  (i = this.cache.get({
                    client_id: this.options.client_id,
                    audience: t,
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
      (e.prototype.loginWithRedirect = function (e) {
        return (
          void 0 === e && (e = {}),
          r(this, void 0, void 0, function () {
            var t;
            return o(this, function (n) {
              switch (n.label) {
                case 0:
                  return [4, this.buildAuthorizeUrl(e)];
                case 1:
                  return (t = n.sent()), window.location.assign(t), [2];
              }
            });
          })
        );
      }),
      (e.prototype.handleRedirectCallback = function (e) {
        return (
          void 0 === e && (e = window.location.href),
          r(this, void 0, void 0, function () {
            var t, i, r, c, s, a, u, l, d, g, f;
            return o(this, function (o) {
              switch (o.label) {
                case 0:
                  if (0 === (t = e.split('?').slice(1)).length)
                    throw new Error(
                      'There are no query params available for parsing.'
                    );
                  if (
                    ((i = (function (e) {
                      e.indexOf('#') > -1 && (e = e.substr(0, e.indexOf('#')));
                      var t = e.split('&'),
                        i = {};
                      return (
                        t.forEach(function (e) {
                          var t = e.split('='),
                            n = t[0],
                            r = t[1];
                          i[n] = decodeURIComponent(r);
                        }),
                        n(n({}, i), { expires_in: parseInt(i.expires_in) })
                      );
                    })(t.join(''))),
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
                      new Zr(s, a, r, u.appState))
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
                    [4, Yr(l, this.worker)]
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
      (e.prototype.checkSession = function (e) {
        return r(this, void 0, void 0, function () {
          var t;
          return o(this, function (n) {
            switch (n.label) {
              case 0:
                if (!this.cookieStorage.get('auth0.is.authenticated'))
                  return [2];
                n.label = 1;
              case 1:
                return n.trys.push([1, 3, , 4]), [4, this.getTokenSilently(e)];
              case 2:
                return n.sent(), [3, 4];
              case 3:
                if (((t = n.sent()), !Sr.includes(t.error))) throw t;
                return [3, 4];
              case 4:
                return [2];
            }
          });
        });
      }),
      (e.prototype.getTokenSilently = function (e) {
        return (
          void 0 === e && (e = {}),
          r(this, void 0, void 0, function () {
            var t,
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
                    ((t = n(
                      n(
                        { audience: this.options.audience, ignoreCache: !1 },
                        e
                      ),
                      { scope: Or(this.defaultScope, this.scope, e.scope) }
                    )),
                    (r = t.ignoreCache),
                    (c = i(t, ['ignoreCache'])),
                    (s = function () {
                      var e = d.cache.get(
                        {
                          scope: c.scope,
                          audience: c.audience || 'default',
                          client_id: d.options.client_id
                        },
                        60
                      );
                      return e && e.access_token;
                    }),
                    !r && (a = s()))
                  )
                    return [2, a];
                  o.label = 1;
                case 1:
                  return (
                    o.trys.push([1, 7, 8, 10]),
                    [4, Io.acquireLock('auth0.lock.getTokenSilently', 5e3)]
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
                  return [4, Io.releaseLock('auth0.lock.getTokenSilently')];
                case 9:
                  return o.sent(), [7];
                case 10:
                  return [2];
              }
            });
          })
        );
      }),
      (e.prototype.getTokenWithPopup = function (e, t) {
        return (
          void 0 === e && (e = {}),
          void 0 === t && (t = {}),
          r(this, void 0, void 0, function () {
            return o(this, function (i) {
              switch (i.label) {
                case 0:
                  return (
                    (e.audience = e.audience || this.options.audience),
                    (e.scope = Or(this.defaultScope, this.scope, e.scope)),
                    (t = n(n({}, Ur), t)),
                    [4, this.loginWithPopup(e, t)]
                  );
                case 1:
                  return (
                    i.sent(),
                    [
                      2,
                      this.cache.get({
                        scope: e.scope,
                        audience: e.audience || 'default',
                        client_id: this.options.client_id
                      }).access_token
                    ]
                  );
              }
            });
          })
        );
      }),
      (e.prototype.isAuthenticated = function () {
        return r(this, void 0, void 0, function () {
          return o(this, function (e) {
            switch (e.label) {
              case 0:
                return [4, this.getUser()];
              case 1:
                return [2, !!e.sent()];
            }
          });
        });
      }),
      (e.prototype.buildLogoutUrl = function (e) {
        void 0 === e && (e = {}),
          null !== e.client_id
            ? (e.client_id = e.client_id || this.options.client_id)
            : delete e.client_id;
        var t = e.federated,
          n = i(e, ['federated']),
          r = t ? '&federated' : '';
        return this._url('/v2/logout?' + Hr(n)) + r;
      }),
      (e.prototype.logout = function (e) {
        void 0 === e && (e = {});
        var t = e.localOnly,
          n = i(e, ['localOnly']);
        if (t && n.federated)
          throw new Error(
            'It is invalid to set both the `federated` and `localOnly` options to `true`'
          );
        if (
          (this.cache.clear(),
          this.cookieStorage.remove('auth0.is.authenticated'),
          !t)
        ) {
          var r = this.buildLogoutUrl(n);
          window.location.assign(r);
        }
      }),
      (e.prototype._getTokenFromIFrame = function (e) {
        return r(this, void 0, void 0, function () {
          var t, r, c, s, a, u, l, d, g, f, I, y, p, h;
          return o(this, function (o) {
            switch (o.label) {
              case 0:
                return (t = Jr(Rr())), (r = Jr(Rr())), (c = Rr()), [4, Lr(c)];
              case 1:
                return (
                  (s = o.sent()),
                  (a = kr(s)),
                  (u = this._getParams(
                    e,
                    t,
                    r,
                    a,
                    e.redirect_uri ||
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
                    e.timeoutInSeconds ||
                    this.options.authorizeTimeoutInSeconds),
                  [4, wr(l, this.domainUrl, d)]
                );
              case 2:
                if (((g = o.sent()), t !== g.state))
                  throw new Error('Invalid state');
                return (
                  (f = e.scope),
                  (I = e.audience),
                  e.redirect_uri,
                  e.ignoreCache,
                  e.timeoutInSeconds,
                  (y = i(e, [
                    'scope',
                    'audience',
                    'redirect_uri',
                    'ignoreCache',
                    'timeoutInSeconds'
                  ])),
                  [
                    4,
                    Yr(
                      n(n(n({}, this.customOptions), y), {
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
                  (h = this._verifyIdToken(p.id_token, r)),
                  [
                    2,
                    n(n({}, p), {
                      decodedToken: h,
                      scope: u.scope,
                      audience: u.audience || 'default'
                    })
                  ]
                );
            }
          });
        });
      }),
      (e.prototype._getTokenUsingRefreshToken = function (e) {
        return r(this, void 0, void 0, function () {
          var t, r, c, s, a, u, l, d;
          return o(this, function (o) {
            switch (o.label) {
              case 0:
                return (
                  (e.scope = Or(
                    this.defaultScope,
                    this.options.scope,
                    e.scope
                  )),
                  ((t = this.cache.get({
                    scope: e.scope,
                    audience: e.audience || 'default',
                    client_id: this.options.client_id
                  })) &&
                    t.refresh_token) ||
                  this.worker
                    ? [3, 2]
                    : [4, this._getTokenFromIFrame(e)]
                );
              case 1:
                return [2, o.sent()];
              case 2:
                (r =
                  e.redirect_uri ||
                  this.options.redirect_uri ||
                  window.location.origin),
                  (s = e.scope),
                  (a = e.audience),
                  e.ignoreCache,
                  e.timeoutInSeconds,
                  (u = i(e, [
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
                    Yr(
                      n(n(n({}, this.customOptions), u), {
                        audience: a,
                        scope: s,
                        baseUrl: this.domainUrl,
                        client_id: this.options.client_id,
                        grant_type: 'refresh_token',
                        refresh_token: t && t.refresh_token,
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
                  : [4, this._getTokenFromIFrame(e)];
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
                      scope: e.scope,
                      audience: e.audience || 'default'
                    })
                  ]
                );
            }
          });
        });
      }),
      e
    );
  })();
function mo(e) {
  return r(this, void 0, void 0, function () {
    var t;
    return o(this, function (n) {
      switch (n.label) {
        case 0:
          return [4, (t = new bo(e)).checkSession()];
        case 1:
          return n.sent(), [2, t];
      }
    });
  });
}
export default mo;
export { bo as Auth0Client };
//# sourceMappingURL=auth0-spa-js.production.esm.js.map
