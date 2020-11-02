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
var t = function (e, n) {
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
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, 'default')
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
  p = {
    f:
      I && !f.call({ 1: 2 }, 1)
        ? function (t) {
            var e = I(this, t);
            return !!e && e.enumerable;
          }
        : f
  },
  h = function (t, e) {
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
  v = function (t) {
    if (null == t) throw TypeError("Can't call method on " + t);
    return t;
  },
  C = function (t) {
    return B(v(t));
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
  Z = function (t, e) {
    return V.call(t, e);
  },
  S = l.document,
  X = F(S) && F(S.createElement),
  G = function (t) {
    return X ? S.createElement(t) : {};
  },
  w =
    !g &&
    !d(function () {
      return (
        7 !=
        Object.defineProperty(G('div'), 'a', {
          get: function () {
            return 7;
          }
        }).a
      );
    }),
  x = Object.getOwnPropertyDescriptor,
  Q = {
    f: g
      ? x
      : function (t, e) {
          if (((t = C(t)), (e = U(e, !0)), w))
            try {
              return x(t, e);
            } catch (t) {}
          if (Z(t, e)) return h(!p.f.call(t, e), t[e]);
        }
  },
  A = function (t) {
    if (!F(t)) throw TypeError(String(t) + ' is not an object');
    return t;
  },
  R = Object.defineProperty,
  L = {
    f: g
      ? R
      : function (t, e, n) {
          if ((A(t), (e = U(e, !0)), A(n), w))
            try {
              return R(t, e, n);
            } catch (t) {}
          if ('get' in n || 'set' in n)
            throw TypeError('Accessors not supported');
          return 'value' in n && (t[e] = n.value), t;
        }
  },
  J = g
    ? function (t, e, n) {
        return L.f(t, e, h(1, n));
      }
    : function (t, e, n) {
        return (t[e] = n), t;
      },
  W = function (t, e) {
    try {
      J(l, t, e);
    } catch (n) {
      l[t] = e;
    }
    return e;
  },
  H = l['__core-js_shared__'] || W('__core-js_shared__', {}),
  E = Function.toString;
'function' != typeof H.inspectSource &&
  (H.inspectSource = function (t) {
    return E.call(t);
  });
var k,
  T,
  Y,
  N = H.inspectSource,
  K = l.WeakMap,
  O = 'function' == typeof K && /native code/.test(N(K)),
  z = a(function (t) {
    (t.exports = function (t, e) {
      return H[t] || (H[t] = void 0 !== e ? e : {});
    })('versions', []).push({
      version: '3.6.5',
      mode: 'global',
      copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
    });
  }),
  D = 0,
  P = Math.random(),
  j = function (t) {
    return (
      'Symbol(' + String(void 0 === t ? '' : t) + ')_' + (++D + P).toString(36)
    );
  },
  _ = z('keys'),
  M = function (t) {
    return _[t] || (_[t] = j(t));
  },
  q = {},
  $ = l.WeakMap;
if (O) {
  var tt = new $(),
    et = tt.get,
    nt = tt.has,
    it = tt.set;
  (k = function (t, e) {
    return it.call(tt, t, e), e;
  }),
    (T = function (t) {
      return et.call(tt, t) || {};
    }),
    (Y = function (t) {
      return nt.call(tt, t);
    });
} else {
  var rt = M('state');
  (q[rt] = !0),
    (k = function (t, e) {
      return J(t, rt, e), e;
    }),
    (T = function (t) {
      return Z(t, rt) ? t[rt] : {};
    }),
    (Y = function (t) {
      return Z(t, rt);
    });
}
var ot,
  ct = {
    set: k,
    get: T,
    has: Y,
    enforce: function (t) {
      return Y(t) ? T(t) : k(t, {});
    },
    getterFor: function (t) {
      return function (e) {
        var n;
        if (!F(e) || (n = T(e)).type !== t)
          throw TypeError('Incompatible receiver, ' + t + ' required');
        return n;
      };
    }
  },
  st = a(function (t) {
    var e = ct.get,
      n = ct.enforce,
      i = String(String).split('String');
    (t.exports = function (t, e, r, o) {
      var c = !!o && !!o.unsafe,
        s = !!o && !!o.enumerable,
        a = !!o && !!o.noTargetGet;
      'function' == typeof r &&
        ('string' != typeof e || Z(r, 'name') || J(r, 'name', e),
        (n(r).source = i.join('string' == typeof e ? e : ''))),
        t !== l
          ? (c ? !a && t[e] && (s = !0) : delete t[e],
            s ? (t[e] = r) : J(t, e, r))
          : s
          ? (t[e] = r)
          : W(e, r);
    })(Function.prototype, 'toString', function () {
      return ('function' == typeof this && e(this).source) || N(this);
    });
  }),
  at = l,
  ut = function (t) {
    return 'function' == typeof t ? t : void 0;
  },
  lt = function (t, e) {
    return arguments.length < 2
      ? ut(at[t]) || ut(l[t])
      : (at[t] && at[t][e]) || (l[t] && l[t][e]);
  },
  dt = Math.ceil,
  gt = Math.floor,
  ft = function (t) {
    return isNaN((t = +t)) ? 0 : (t > 0 ? gt : dt)(t);
  },
  It = Math.min,
  pt = function (t) {
    return t > 0 ? It(ft(t), 9007199254740991) : 0;
  },
  ht = Math.max,
  yt = Math.min,
  bt = function (t) {
    return function (e, n, i) {
      var r,
        o = C(e),
        c = pt(o.length),
        s = (function (t, e) {
          var n = ft(t);
          return n < 0 ? ht(n + e, 0) : yt(n, e);
        })(i, c);
      if (t && n != n) {
        for (; c > s; ) if ((r = o[s++]) != r) return !0;
      } else
        for (; c > s; s++) if ((t || s in o) && o[s] === n) return t || s || 0;
      return !t && -1;
    };
  },
  mt = { includes: bt(!0), indexOf: bt(!1) },
  Bt = mt.indexOf,
  vt = function (t, e) {
    var n,
      i = C(t),
      r = 0,
      o = [];
    for (n in i) !Z(q, n) && Z(i, n) && o.push(n);
    for (; e.length > r; ) Z(i, (n = e[r++])) && (~Bt(o, n) || o.push(n));
    return o;
  },
  Ct = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
  ],
  Ft = Ct.concat('length', 'prototype'),
  Ut = {
    f:
      Object.getOwnPropertyNames ||
      function (t) {
        return vt(t, Ft);
      }
  },
  Vt = { f: Object.getOwnPropertySymbols },
  Zt =
    lt('Reflect', 'ownKeys') ||
    function (t) {
      var e = Ut.f(A(t)),
        n = Vt.f;
      return n ? e.concat(n(t)) : e;
    },
  St = function (t, e) {
    for (var n = Zt(e), i = L.f, r = Q.f, o = 0; o < n.length; o++) {
      var c = n[o];
      Z(t, c) || i(t, c, r(e, c));
    }
  },
  Xt = /#|\.prototype\./,
  Gt = function (t, e) {
    var n = xt[wt(t)];
    return n == At || (n != Qt && ('function' == typeof e ? d(e) : !!e));
  },
  wt = (Gt.normalize = function (t) {
    return String(t).replace(Xt, '.').toLowerCase();
  }),
  xt = (Gt.data = {}),
  Qt = (Gt.NATIVE = 'N'),
  At = (Gt.POLYFILL = 'P'),
  Rt = Gt,
  Lt = Q.f,
  Jt = function (t, e) {
    var n,
      i,
      r,
      o,
      c,
      s = t.target,
      a = t.global,
      u = t.stat;
    if ((n = a ? l : u ? l[s] || W(s, {}) : (l[s] || {}).prototype))
      for (i in e) {
        if (
          ((o = e[i]),
          (r = t.noTargetGet ? (c = Lt(n, i)) && c.value : n[i]),
          !Rt(a ? i : s + (u ? '.' : '#') + i, t.forced) && void 0 !== r)
        ) {
          if (typeof o == typeof r) continue;
          St(o, r);
        }
        (t.sham || (r && r.sham)) && J(o, 'sham', !0), st(n, i, o, t);
      }
  },
  Wt =
    !!Object.getOwnPropertySymbols &&
    !d(function () {
      return !String(Symbol());
    }),
  Ht = Wt && !Symbol.sham && 'symbol' == typeof Symbol.iterator,
  Et = z('wks'),
  kt = l.Symbol,
  Tt = Ht ? kt : (kt && kt.withoutSetter) || j,
  Yt = function (t) {
    return (
      Z(Et, t) ||
        (Wt && Z(kt, t) ? (Et[t] = kt[t]) : (Et[t] = Tt('Symbol.' + t))),
      Et[t]
    );
  },
  Nt = Yt('match'),
  Kt = function (t) {
    if (
      (function (t) {
        var e;
        return F(t) && (void 0 !== (e = t[Nt]) ? !!e : 'RegExp' == b(t));
      })(t)
    )
      throw TypeError("The method doesn't accept regular expressions");
    return t;
  },
  Ot = Yt('match'),
  zt = function (t) {
    var e = /./;
    try {
      '/./'[t](e);
    } catch (n) {
      try {
        return (e[Ot] = !1), '/./'[t](e);
      } catch (t) {}
    }
    return !1;
  },
  Dt = Q.f,
  Pt = ''.startsWith,
  jt = Math.min,
  _t = zt('startsWith'),
  Mt = !(_t || ((ot = Dt(String.prototype, 'startsWith')), !ot || ot.writable));
Jt(
  { target: 'String', proto: !0, forced: !Mt && !_t },
  {
    startsWith: function (t) {
      var e = String(v(this));
      Kt(t);
      var n = pt(jt(arguments.length > 1 ? arguments[1] : void 0, e.length)),
        i = String(t);
      return Pt ? Pt.call(e, i, n) : e.slice(n, n + i.length) === i;
    }
  }
);
var qt,
  $t,
  te = function (t) {
    if ('function' != typeof t)
      throw TypeError(String(t) + ' is not a function');
    return t;
  },
  ee = function (t, e, n) {
    if ((te(t), void 0 === e)) return t;
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
  ne = Function.call,
  ie = function (t, e, n) {
    return ee(ne, l[t].prototype[e], n);
  },
  re =
    (ie('String', 'startsWith'),
    Array.isArray ||
      function (t) {
        return 'Array' == b(t);
      }),
  oe = function (t) {
    return Object(v(t));
  },
  ce = function (t, e, n) {
    var i = U(e);
    i in t ? L.f(t, i, h(0, n)) : (t[i] = n);
  },
  se = Yt('species'),
  ae = function (t, e) {
    var n;
    return (
      re(t) &&
        ('function' != typeof (n = t.constructor) ||
        (n !== Array && !re(n.prototype))
          ? F(n) && null === (n = n[se]) && (n = void 0)
          : (n = void 0)),
      new (void 0 === n ? Array : n)(0 === e ? 0 : e)
    );
  },
  ue = lt('navigator', 'userAgent') || '',
  le = l.process,
  de = le && le.versions,
  ge = de && de.v8;
ge
  ? ($t = (qt = ge.split('.'))[0] + qt[1])
  : ue &&
    (!(qt = ue.match(/Edge\/(\d+)/)) || qt[1] >= 74) &&
    (qt = ue.match(/Chrome\/(\d+)/)) &&
    ($t = qt[1]);
var fe = $t && +$t,
  Ie = Yt('species'),
  pe = Yt('isConcatSpreadable'),
  he =
    fe >= 51 ||
    !d(function () {
      var t = [];
      return (t[pe] = !1), t.concat()[0] !== t;
    }),
  ye = (function (t) {
    return (
      fe >= 51 ||
      !d(function () {
        var e = [];
        return (
          ((e.constructor = {})[Ie] = function () {
            return { foo: 1 };
          }),
          1 !== e[t](Boolean).foo
        );
      })
    );
  })('concat'),
  be = function (t) {
    if (!F(t)) return !1;
    var e = t[pe];
    return void 0 !== e ? !!e : re(t);
  };
Jt(
  { target: 'Array', proto: !0, forced: !he || !ye },
  {
    concat: function (t) {
      var e,
        n,
        i,
        r,
        o,
        c = oe(this),
        s = ae(c, 0),
        a = 0;
      for (e = -1, i = arguments.length; e < i; e++)
        if (be((o = -1 === e ? c : arguments[e]))) {
          if (a + (r = pt(o.length)) > 9007199254740991)
            throw TypeError('Maximum allowed index exceeded');
          for (n = 0; n < r; n++, a++) n in o && ce(s, a, o[n]);
        } else {
          if (a >= 9007199254740991)
            throw TypeError('Maximum allowed index exceeded');
          ce(s, a++, o);
        }
      return (s.length = a), s;
    }
  }
);
var me = {};
me[Yt('toStringTag')] = 'z';
var Be = '[object z]' === String(me),
  ve = Yt('toStringTag'),
  Ce =
    'Arguments' ==
    b(
      (function () {
        return arguments;
      })()
    ),
  Fe = Be
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
            })((e = Object(t)), ve))
          ? n
          : Ce
          ? b(e)
          : 'Object' == (i = b(e)) && 'function' == typeof e.callee
          ? 'Arguments'
          : i;
      },
  Ue = Be
    ? {}.toString
    : function () {
        return '[object ' + Fe(this) + ']';
      };
Be || st(Object.prototype, 'toString', Ue, { unsafe: !0 });
var Ve,
  Ze =
    Object.keys ||
    function (t) {
      return vt(t, Ct);
    },
  Se = g
    ? Object.defineProperties
    : function (t, e) {
        A(t);
        for (var n, i = Ze(e), r = i.length, o = 0; r > o; )
          L.f(t, (n = i[o++]), e[n]);
        return t;
      },
  Xe = lt('document', 'documentElement'),
  Ge = M('IE_PROTO'),
  we = function () {},
  xe = function (t) {
    return '<script>' + t + '</script>';
  },
  Qe = function () {
    try {
      Ve = document.domain && new ActiveXObject('htmlfile');
    } catch (t) {}
    var t, e;
    Qe = Ve
      ? (function (t) {
          t.write(xe('')), t.close();
          var e = t.parentWindow.Object;
          return (t = null), e;
        })(Ve)
      : (((e = G('iframe')).style.display = 'none'),
        Xe.appendChild(e),
        (e.src = String('javascript:')),
        (t = e.contentWindow.document).open(),
        t.write(xe('document.F=Object')),
        t.close(),
        t.F);
    for (var n = Ct.length; n--; ) delete Qe.prototype[Ct[n]];
    return Qe();
  };
q[Ge] = !0;
var Ae =
    Object.create ||
    function (t, e) {
      var n;
      return (
        null !== t
          ? ((we.prototype = A(t)),
            (n = new we()),
            (we.prototype = null),
            (n[Ge] = t))
          : (n = Qe()),
        void 0 === e ? n : Se(n, e)
      );
    },
  Re = Ut.f,
  Le = {}.toString,
  Je =
    'object' == typeof window && window && Object.getOwnPropertyNames
      ? Object.getOwnPropertyNames(window)
      : [],
  We = {
    f: function (t) {
      return Je && '[object Window]' == Le.call(t)
        ? (function (t) {
            try {
              return Re(t);
            } catch (t) {
              return Je.slice();
            }
          })(t)
        : Re(C(t));
    }
  },
  He = { f: Yt },
  Ee = L.f,
  ke = function (t) {
    var e = at.Symbol || (at.Symbol = {});
    Z(e, t) || Ee(e, t, { value: He.f(t) });
  },
  Te = L.f,
  Ye = Yt('toStringTag'),
  Ne = function (t, e, n) {
    t &&
      !Z((t = n ? t : t.prototype), Ye) &&
      Te(t, Ye, { configurable: !0, value: e });
  },
  Ke = [].push,
  Oe = function (t) {
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
          f = oe(s),
          I = B(f),
          p = ee(a, u, 3),
          h = pt(I.length),
          y = 0,
          b = l || ae,
          m = e ? b(s, h) : n ? b(s, 0) : void 0;
        h > y;
        y++
      )
        if ((c || y in I) && ((g = p((d = I[y]), y, f)), t))
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
                Ke.call(m, d);
            }
          else if (r) return !1;
      return o ? -1 : i || r ? r : m;
    };
  },
  ze = {
    forEach: Oe(0),
    map: Oe(1),
    filter: Oe(2),
    some: Oe(3),
    every: Oe(4),
    find: Oe(5),
    findIndex: Oe(6)
  }.forEach,
  De = M('hidden'),
  Pe = Yt('toPrimitive'),
  je = ct.set,
  _e = ct.getterFor('Symbol'),
  Me = Object.prototype,
  qe = l.Symbol,
  $e = lt('JSON', 'stringify'),
  tn = Q.f,
  en = L.f,
  nn = We.f,
  rn = p.f,
  on = z('symbols'),
  cn = z('op-symbols'),
  sn = z('string-to-symbol-registry'),
  an = z('symbol-to-string-registry'),
  un = z('wks'),
  ln = l.QObject,
  dn = !ln || !ln.prototype || !ln.prototype.findChild,
  gn =
    g &&
    d(function () {
      return (
        7 !=
        Ae(
          en({}, 'a', {
            get: function () {
              return en(this, 'a', { value: 7 }).a;
            }
          })
        ).a
      );
    })
      ? function (t, e, n) {
          var i = tn(Me, e);
          i && delete Me[e], en(t, e, n), i && t !== Me && en(Me, e, i);
        }
      : en,
  fn = function (t, e) {
    var n = (on[t] = Ae(qe.prototype));
    return (
      je(n, { type: 'Symbol', tag: t, description: e }),
      g || (n.description = e),
      n
    );
  },
  In = Ht
    ? function (t) {
        return 'symbol' == typeof t;
      }
    : function (t) {
        return Object(t) instanceof qe;
      },
  pn = function (t, e, n) {
    t === Me && pn(cn, e, n), A(t);
    var i = U(e, !0);
    return (
      A(n),
      Z(on, i)
        ? (n.enumerable
            ? (Z(t, De) && t[De][i] && (t[De][i] = !1),
              (n = Ae(n, { enumerable: h(0, !1) })))
            : (Z(t, De) || en(t, De, h(1, {})), (t[De][i] = !0)),
          gn(t, i, n))
        : en(t, i, n)
    );
  },
  hn = function (t, e) {
    A(t);
    var n = C(e),
      i = Ze(n).concat(Bn(n));
    return (
      ze(i, function (e) {
        (g && !yn.call(n, e)) || pn(t, e, n[e]);
      }),
      t
    );
  },
  yn = function (t) {
    var e = U(t, !0),
      n = rn.call(this, e);
    return (
      !(this === Me && Z(on, e) && !Z(cn, e)) &&
      (!(n || !Z(this, e) || !Z(on, e) || (Z(this, De) && this[De][e])) || n)
    );
  },
  bn = function (t, e) {
    var n = C(t),
      i = U(e, !0);
    if (n !== Me || !Z(on, i) || Z(cn, i)) {
      var r = tn(n, i);
      return (
        !r || !Z(on, i) || (Z(n, De) && n[De][i]) || (r.enumerable = !0), r
      );
    }
  },
  mn = function (t) {
    var e = nn(C(t)),
      n = [];
    return (
      ze(e, function (t) {
        Z(on, t) || Z(q, t) || n.push(t);
      }),
      n
    );
  },
  Bn = function (t) {
    var e = t === Me,
      n = nn(e ? cn : C(t)),
      i = [];
    return (
      ze(n, function (t) {
        !Z(on, t) || (e && !Z(Me, t)) || i.push(on[t]);
      }),
      i
    );
  };
if (
  (Wt ||
    (st(
      (qe = function () {
        if (this instanceof qe) throw TypeError('Symbol is not a constructor');
        var t =
            arguments.length && void 0 !== arguments[0]
              ? String(arguments[0])
              : void 0,
          e = j(t),
          n = function (t) {
            this === Me && n.call(cn, t),
              Z(this, De) && Z(this[De], e) && (this[De][e] = !1),
              gn(this, e, h(1, t));
          };
        return g && dn && gn(Me, e, { configurable: !0, set: n }), fn(e, t);
      }).prototype,
      'toString',
      function () {
        return _e(this).tag;
      }
    ),
    st(qe, 'withoutSetter', function (t) {
      return fn(j(t), t);
    }),
    (p.f = yn),
    (L.f = pn),
    (Q.f = bn),
    (Ut.f = We.f = mn),
    (Vt.f = Bn),
    (He.f = function (t) {
      return fn(Yt(t), t);
    }),
    g &&
      (en(qe.prototype, 'description', {
        configurable: !0,
        get: function () {
          return _e(this).description;
        }
      }),
      st(Me, 'propertyIsEnumerable', yn, { unsafe: !0 }))),
  Jt({ global: !0, wrap: !0, forced: !Wt, sham: !Wt }, { Symbol: qe }),
  ze(Ze(un), function (t) {
    ke(t);
  }),
  Jt(
    { target: 'Symbol', stat: !0, forced: !Wt },
    {
      for: function (t) {
        var e = String(t);
        if (Z(sn, e)) return sn[e];
        var n = qe(e);
        return (sn[e] = n), (an[n] = e), n;
      },
      keyFor: function (t) {
        if (!In(t)) throw TypeError(t + ' is not a symbol');
        if (Z(an, t)) return an[t];
      },
      useSetter: function () {
        dn = !0;
      },
      useSimple: function () {
        dn = !1;
      }
    }
  ),
  Jt(
    { target: 'Object', stat: !0, forced: !Wt, sham: !g },
    {
      create: function (t, e) {
        return void 0 === e ? Ae(t) : hn(Ae(t), e);
      },
      defineProperty: pn,
      defineProperties: hn,
      getOwnPropertyDescriptor: bn
    }
  ),
  Jt(
    { target: 'Object', stat: !0, forced: !Wt },
    { getOwnPropertyNames: mn, getOwnPropertySymbols: Bn }
  ),
  Jt(
    {
      target: 'Object',
      stat: !0,
      forced: d(function () {
        Vt.f(1);
      })
    },
    {
      getOwnPropertySymbols: function (t) {
        return Vt.f(oe(t));
      }
    }
  ),
  $e)
) {
  var vn =
    !Wt ||
    d(function () {
      var t = qe();
      return (
        '[null]' != $e([t]) || '{}' != $e({ a: t }) || '{}' != $e(Object(t))
      );
    });
  Jt(
    { target: 'JSON', stat: !0, forced: vn },
    {
      stringify: function (t, e, n) {
        for (var i, r = [t], o = 1; arguments.length > o; )
          r.push(arguments[o++]);
        if (((i = e), (F(e) || void 0 !== t) && !In(t)))
          return (
            re(e) ||
              (e = function (t, e) {
                if (
                  ('function' == typeof i && (e = i.call(this, t, e)), !In(e))
                )
                  return e;
              }),
            (r[1] = e),
            $e.apply(null, r)
          );
      }
    }
  );
}
qe.prototype[Pe] || J(qe.prototype, Pe, qe.prototype.valueOf),
  Ne(qe, 'Symbol'),
  (q[De] = !0),
  ke('asyncIterator');
var Cn = L.f,
  Fn = l.Symbol;
if (
  g &&
  'function' == typeof Fn &&
  (!('description' in Fn.prototype) || void 0 !== Fn().description)
) {
  var Un = {},
    Vn = function () {
      var t =
          arguments.length < 1 || void 0 === arguments[0]
            ? void 0
            : String(arguments[0]),
        e = this instanceof Vn ? new Fn(t) : void 0 === t ? Fn() : Fn(t);
      return '' === t && (Un[e] = !0), e;
    };
  St(Vn, Fn);
  var Zn = (Vn.prototype = Fn.prototype);
  Zn.constructor = Vn;
  var Sn = Zn.toString,
    Xn = 'Symbol(test)' == String(Fn('test')),
    Gn = /^Symbol\((.*)\)[^)]+$/;
  Cn(Zn, 'description', {
    configurable: !0,
    get: function () {
      var t = F(this) ? this.valueOf() : this,
        e = Sn.call(t);
      if (Z(Un, t)) return '';
      var n = Xn ? e.slice(7, -1) : e.replace(Gn, '$1');
      return '' === n ? void 0 : n;
    }
  }),
    Jt({ global: !0, forced: !0 }, { Symbol: Vn });
}
ke('hasInstance'),
  ke('isConcatSpreadable'),
  ke('iterator'),
  ke('match'),
  ke('matchAll'),
  ke('replace'),
  ke('search'),
  ke('species'),
  ke('split'),
  ke('toPrimitive'),
  ke('toStringTag'),
  ke('unscopables'),
  Ne(Math, 'Math', !0),
  Ne(l.JSON, 'JSON', !0);
at.Symbol;
var wn,
  xn,
  Qn,
  An = function (t) {
    return function (e, n) {
      var i,
        r,
        o = String(v(e)),
        c = ft(n),
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
  Rn = { codeAt: An(!1), charAt: An(!0) },
  Ln = !d(function () {
    function t() {}
    return (
      (t.prototype.constructor = null),
      Object.getPrototypeOf(new t()) !== t.prototype
    );
  }),
  Jn = M('IE_PROTO'),
  Wn = Object.prototype,
  Hn = Ln
    ? Object.getPrototypeOf
    : function (t) {
        return (
          (t = oe(t)),
          Z(t, Jn)
            ? t[Jn]
            : 'function' == typeof t.constructor && t instanceof t.constructor
            ? t.constructor.prototype
            : t instanceof Object
            ? Wn
            : null
        );
      },
  En = Yt('iterator'),
  kn = !1;
[].keys &&
  ('next' in (Qn = [].keys())
    ? (xn = Hn(Hn(Qn))) !== Object.prototype && (wn = xn)
    : (kn = !0)),
  null == wn && (wn = {}),
  Z(wn, En) ||
    J(wn, En, function () {
      return this;
    });
var Tn = { IteratorPrototype: wn, BUGGY_SAFARI_ITERATORS: kn },
  Yn = {},
  Nn = Tn.IteratorPrototype,
  Kn = function () {
    return this;
  },
  On =
    Object.setPrototypeOf ||
    ('__proto__' in {}
      ? (function () {
          var t,
            e = !1,
            n = {};
          try {
            (t = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__')
              .set).call(n, []),
              (e = n instanceof Array);
          } catch (t) {}
          return function (n, i) {
            return (
              A(n),
              (function (t) {
                if (!F(t) && null !== t)
                  throw TypeError("Can't set " + String(t) + ' as a prototype');
              })(i),
              e ? t.call(n, i) : (n.__proto__ = i),
              n
            );
          };
        })()
      : void 0),
  zn = Tn.IteratorPrototype,
  Dn = Tn.BUGGY_SAFARI_ITERATORS,
  Pn = Yt('iterator'),
  jn = function () {
    return this;
  },
  _n = function (t, e, n, i, r, o, c) {
    !(function (t, e, n) {
      var i = e + ' Iterator';
      (t.prototype = Ae(Nn, { next: h(1, n) })), Ne(t, i, !1), (Yn[i] = Kn);
    })(n, e, i);
    var s,
      a,
      u,
      l = function (t) {
        if (t === r && p) return p;
        if (!Dn && t in f) return f[t];
        switch (t) {
          case 'keys':
          case 'values':
          case 'entries':
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
      I = f[Pn] || f['@@iterator'] || (r && f[r]),
      p = (!Dn && I) || l(r),
      y = ('Array' == e && f.entries) || I;
    if (
      (y &&
        ((s = Hn(y.call(new t()))),
        zn !== Object.prototype &&
          s.next &&
          (Hn(s) !== zn &&
            (On ? On(s, zn) : 'function' != typeof s[Pn] && J(s, Pn, jn)),
          Ne(s, d, !0))),
      'values' == r &&
        I &&
        'values' !== I.name &&
        ((g = !0),
        (p = function () {
          return I.call(this);
        })),
      f[Pn] !== p && J(f, Pn, p),
      (Yn[e] = p),
      r)
    )
      if (
        ((a = {
          values: l('values'),
          keys: o ? p : l('keys'),
          entries: l('entries')
        }),
        c)
      )
        for (u in a) (Dn || g || !(u in f)) && st(f, u, a[u]);
      else Jt({ target: e, proto: !0, forced: Dn || g }, a);
    return a;
  },
  Mn = Rn.charAt,
  qn = ct.set,
  $n = ct.getterFor('String Iterator');
_n(
  String,
  'String',
  function (t) {
    qn(this, { type: 'String Iterator', string: String(t), index: 0 });
  },
  function () {
    var t,
      e = $n(this),
      n = e.string,
      i = e.index;
    return i >= n.length
      ? { value: void 0, done: !0 }
      : ((t = Mn(n, i)), (e.index += t.length), { value: t, done: !1 });
  }
);
var ti = function (t, e, n, i) {
    try {
      return i ? e(A(n)[0], n[1]) : e(n);
    } catch (e) {
      var r = t.return;
      throw (void 0 !== r && A(r.call(t)), e);
    }
  },
  ei = Yt('iterator'),
  ni = Array.prototype,
  ii = function (t) {
    return void 0 !== t && (Yn.Array === t || ni[ei] === t);
  },
  ri = Yt('iterator'),
  oi = function (t) {
    if (null != t) return t[ri] || t['@@iterator'] || Yn[Fe(t)];
  },
  ci = Yt('iterator'),
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
} catch (t) {}
var li = function (t, e) {
    if (!e && !si) return !1;
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
        t(i);
    } catch (t) {}
    return n;
  },
  di = !li(function (t) {
    Array.from(t);
  });
Jt(
  { target: 'Array', stat: !0, forced: di },
  {
    from: function (t) {
      var e,
        n,
        i,
        r,
        o,
        c,
        s = oe(t),
        a = 'function' == typeof this ? this : Array,
        u = arguments.length,
        l = u > 1 ? arguments[1] : void 0,
        d = void 0 !== l,
        g = oi(s),
        f = 0;
      if (
        (d && (l = ee(l, u > 2 ? arguments[2] : void 0, 2)),
        null == g || (a == Array && ii(g)))
      )
        for (n = new a((e = pt(s.length))); e > f; f++)
          (c = d ? l(s[f], f) : s[f]), ce(n, f, c);
      else
        for (o = (r = g.call(s)).next, n = new a(); !(i = o.call(r)).done; f++)
          (c = d ? ti(r, l, [i.value, f], !0) : i.value), ce(n, f, c);
      return (n.length = f), n;
    }
  }
);
at.Array.from;
var gi,
  fi = 'undefined' != typeof ArrayBuffer && 'undefined' != typeof DataView,
  Ii = L.f,
  pi = l.Int8Array,
  hi = pi && pi.prototype,
  yi = l.Uint8ClampedArray,
  bi = yi && yi.prototype,
  mi = pi && Hn(pi),
  Bi = hi && Hn(hi),
  vi = Object.prototype,
  Ci = vi.isPrototypeOf,
  Fi = Yt('toStringTag'),
  Ui = j('TYPED_ARRAY_TAG'),
  Vi = fi && !!On && 'Opera' !== Fe(l.opera),
  Zi = {
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
  Si = function (t) {
    return F(t) && Z(Zi, Fe(t));
  };
for (gi in Zi) l[gi] || (Vi = !1);
if (
  (!Vi || 'function' != typeof mi || mi === Function.prototype) &&
  ((mi = function () {
    throw TypeError('Incorrect invocation');
  }),
  Vi)
)
  for (gi in Zi) l[gi] && On(l[gi], mi);
if ((!Vi || !Bi || Bi === vi) && ((Bi = mi.prototype), Vi))
  for (gi in Zi) l[gi] && On(l[gi].prototype, Bi);
if ((Vi && Hn(bi) !== Bi && On(bi, Bi), g && !Z(Bi, Fi)))
  for (gi in (!0,
  Ii(Bi, Fi, {
    get: function () {
      return F(this) ? this[Ui] : void 0;
    }
  }),
  Zi))
    l[gi] && J(l[gi], Ui, gi);
var Xi = function (t) {
    if (Si(t)) return t;
    throw TypeError('Target is not a typed array');
  },
  Gi = function (t) {
    if (On) {
      if (Ci.call(mi, t)) return t;
    } else
      for (var e in Zi)
        if (Z(Zi, gi)) {
          var n = l[e];
          if (n && (t === n || Ci.call(n, t))) return t;
        }
    throw TypeError('Target is not a typed array constructor');
  },
  wi = function (t, e, n) {
    if (g) {
      if (n)
        for (var i in Zi) {
          var r = l[i];
          r && Z(r.prototype, t) && delete r.prototype[t];
        }
      (Bi[t] && !n) || st(Bi, t, n ? e : (Vi && hi[t]) || e);
    }
  },
  xi = Yt('species'),
  Qi = Xi,
  Ai = Gi,
  Ri = [].slice;
wi(
  'slice',
  function (t, e) {
    for (
      var n = Ri.call(Qi(this), t, e),
        i = (function (t, e) {
          var n,
            i = A(t).constructor;
          return void 0 === i || null == (n = A(i)[xi]) ? e : te(n);
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
var Li = Yt('unscopables'),
  Ji = Array.prototype;
null == Ji[Li] && L.f(Ji, Li, { configurable: !0, value: Ae(null) });
var Wi = function (t) {
    Ji[Li][t] = !0;
  },
  Hi = Object.defineProperty,
  Ei = {},
  ki = function (t) {
    throw t;
  },
  Ti = mt.includes,
  Yi = (function (t, e) {
    if (Z(Ei, t)) return Ei[t];
    e || (e = {});
    var n = [][t],
      i = !!Z(e, 'ACCESSORS') && e.ACCESSORS,
      r = Z(e, 0) ? e[0] : ki,
      o = Z(e, 1) ? e[1] : void 0;
    return (Ei[t] =
      !!n &&
      !d(function () {
        if (i && !g) return !0;
        var t = { length: -1 };
        i ? Hi(t, 1, { enumerable: !0, get: ki }) : (t[1] = 1), n.call(t, r, o);
      }));
  })('indexOf', { ACCESSORS: !0, 1: 0 });
Jt(
  { target: 'Array', proto: !0, forced: !Yi },
  {
    includes: function (t) {
      return Ti(this, t, arguments.length > 1 ? arguments[1] : void 0);
    }
  }
),
  Wi('includes');
ie('Array', 'includes');
Jt(
  { target: 'String', proto: !0, forced: !zt('includes') },
  {
    includes: function (t) {
      return !!~String(v(this)).indexOf(
        Kt(t),
        arguments.length > 1 ? arguments[1] : void 0
      );
    }
  }
);
ie('String', 'includes');
var Ni = !d(function () {
    return Object.isExtensible(Object.preventExtensions({}));
  }),
  Ki = a(function (t) {
    var e = L.f,
      n = j('meta'),
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
          if (!Z(t, n)) {
            if (!r(t)) return 'F';
            if (!e) return 'E';
            o(t);
          }
          return t[n].objectID;
        },
        getWeakData: function (t, e) {
          if (!Z(t, n)) {
            if (!r(t)) return !0;
            if (!e) return !1;
            o(t);
          }
          return t[n].weakData;
        },
        onFreeze: function (t) {
          return Ni && c.REQUIRED && r(t) && !Z(t, n) && o(t), t;
        }
      });
    q[n] = !0;
  }),
  Oi =
    (Ki.REQUIRED,
    Ki.fastKey,
    Ki.getWeakData,
    Ki.onFreeze,
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
          f = ee(n, i, r ? 2 : 1);
        if (o) c = t;
        else {
          if ('function' != typeof (s = oi(t)))
            throw TypeError('Target is not iterable');
          if (ii(s)) {
            for (a = 0, u = pt(t.length); u > a; a++)
              if (
                (l = r ? f(A((g = t[a]))[0], g[1]) : f(t[a])) &&
                l instanceof e
              )
                return l;
            return new e(!1);
          }
          c = s.call(t);
        }
        for (d = c.next; !(g = d.call(c)).done; )
          if (
            'object' == typeof (l = ti(c, f, g.value, r)) &&
            l &&
            l instanceof e
          )
            return l;
        return new e(!1);
      }).stop = function (t) {
        return new e(!0, t);
      };
    })),
  zi = function (t, e, n) {
    if (!(t instanceof e))
      throw TypeError('Incorrect ' + (n ? n + ' ' : '') + 'invocation');
    return t;
  },
  Di = function (t, e, n) {
    for (var i in e) st(t, i, e[i], n);
    return t;
  },
  Pi = Yt('species'),
  ji = L.f,
  _i = Ki.fastKey,
  Mi = ct.set,
  qi = ct.getterFor,
  $i =
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
          st(
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
        Rt(
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
        (a = n.getConstructor(e, t, i, o)), (Ki.REQUIRED = !0);
      else if (Rt(t, !0)) {
        var f = new a(),
          I = f[o](r ? {} : -0, 1) != f,
          p = d(function () {
            f.has(1);
          }),
          h = li(function (t) {
            new c(t);
          }),
          y =
            !r &&
            d(function () {
              for (var t = new c(), e = 5; e--; ) t[o](e, e);
              return !t.has(-0);
            });
        h ||
          (((a = e(function (e, n) {
            zi(e, a, t);
            var r = (function (t, e, n) {
              var i, r;
              return (
                On &&
                  'function' == typeof (i = e.constructor) &&
                  i !== n &&
                  F((r = i.prototype)) &&
                  r !== n.prototype &&
                  On(t, r),
                t
              );
            })(new c(), e, a);
            return null != n && Oi(n, r[o], r, i), r;
          })).prototype = s),
          (s.constructor = a)),
          (p || y) && (g('delete'), g('has'), i && g('get')),
          (y || I) && g(o),
          r && s.clear && delete s.clear;
      }
      (u[t] = a),
        Jt({ global: !0, forced: a != c }, u),
        Ne(a, t),
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
              zi(t, r, e),
                Mi(t, {
                  type: e,
                  index: Ae(null),
                  first: void 0,
                  last: void 0,
                  size: 0
                }),
                g || (t.size = 0),
                null != o && Oi(o, t[i], t, n);
            }),
            o = qi(e),
            c = function (t, e, n) {
              var i,
                r,
                c = o(t),
                a = s(t, e);
              return (
                a
                  ? (a.value = n)
                  : ((c.last = a = {
                      index: (r = _i(e, !0)),
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
                r = _i(e);
              if ('F' !== r) return i.index[r];
              for (n = i.first; n; n = n.next) if (n.key == e) return n;
            };
          return (
            Di(r.prototype, {
              clear: function () {
                for (var t = o(this), e = t.index, n = t.first; n; )
                  (n.removed = !0),
                    n.previous && (n.previous = n.previous.next = void 0),
                    delete e[n.index],
                    (n = n.next);
                (t.first = t.last = void 0), g ? (t.size = 0) : (this.size = 0);
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
                    i = ee(t, arguments.length > 1 ? arguments[1] : void 0, 3);
                  (e = e ? e.next : n.first);

                )
                  for (i(e.value, e.key, this); e && e.removed; )
                    e = e.previous;
              },
              has: function (t) {
                return !!s(this, t);
              }
            }),
            Di(
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
              ji(r.prototype, 'size', {
                get: function () {
                  return o(this).size;
                }
              }),
            r
          );
        },
        setStrong: function (t, e, n) {
          var i = e + ' Iterator',
            r = qi(e),
            o = qi(i);
          _n(
            t,
            e,
            function (t, e) {
              Mi(this, {
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
              var e = lt(t),
                n = L.f;
              g &&
                e &&
                !e[Pi] &&
                n(e, Pi, {
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
  tr = ct.set,
  er = ct.getterFor('Array Iterator'),
  nr = _n(
    Array,
    'Array',
    function (t, e) {
      tr(this, { type: 'Array Iterator', target: C(t), index: 0, kind: e });
    },
    function () {
      var t = er(this),
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
(Yn.Arguments = Yn.Array), Wi('keys'), Wi('values'), Wi('entries');
var ir = Yt('iterator'),
  rr = Yt('toStringTag'),
  or = nr.values;
for (var cr in $i) {
  var sr = l[cr],
    ar = sr && sr.prototype;
  if (ar) {
    if (ar[ir] !== or)
      try {
        J(ar, ir, or);
      } catch (t) {
        ar[ir] = or;
      }
    if ((ar[rr] || J(ar, rr, cr), $i[cr]))
      for (var ur in nr)
        if (ar[ur] !== nr[ur])
          try {
            J(ar, ur, nr[ur]);
          } catch (t) {
            ar[ur] = nr[ur];
          }
  }
}
at.Set;
function lr(t) {
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
var dr = setTimeout;
function gr(t) {
  return Boolean(t && void 0 !== t.length);
}
function fr() {}
function Ir(t) {
  if (!(this instanceof Ir))
    throw new TypeError('Promises must be constructed via new');
  if ('function' != typeof t) throw new TypeError('not a function');
  (this._state = 0),
    (this._handled = !1),
    (this._value = void 0),
    (this._deferreds = []),
    Br(t, this);
}
function pr(t, e) {
  for (; 3 === t._state; ) t = t._value;
  0 !== t._state
    ? ((t._handled = !0),
      Ir._immediateFn(function () {
        var n = 1 === t._state ? e.onFulfilled : e.onRejected;
        if (null !== n) {
          var i;
          try {
            i = n(t._value);
          } catch (t) {
            return void yr(e.promise, t);
          }
          hr(e.promise, i);
        } else (1 === t._state ? hr : yr)(e.promise, t._value);
      }))
    : t._deferreds.push(e);
}
function hr(t, e) {
  try {
    if (e === t)
      throw new TypeError('A promise cannot be resolved with itself.');
    if (e && ('object' == typeof e || 'function' == typeof e)) {
      var n = e.then;
      if (e instanceof Ir) return (t._state = 3), (t._value = e), void br(t);
      if ('function' == typeof n)
        return void Br(
          ((i = n),
          (r = e),
          function () {
            i.apply(r, arguments);
          }),
          t
        );
    }
    (t._state = 1), (t._value = e), br(t);
  } catch (e) {
    yr(t, e);
  }
  var i, r;
}
function yr(t, e) {
  (t._state = 2), (t._value = e), br(t);
}
function br(t) {
  2 === t._state &&
    0 === t._deferreds.length &&
    Ir._immediateFn(function () {
      t._handled || Ir._unhandledRejectionFn(t._value);
    });
  for (var e = 0, n = t._deferreds.length; e < n; e++) pr(t, t._deferreds[e]);
  t._deferreds = null;
}
function mr(t, e, n) {
  (this.onFulfilled = 'function' == typeof t ? t : null),
    (this.onRejected = 'function' == typeof e ? e : null),
    (this.promise = n);
}
function Br(t, e) {
  var n = !1;
  try {
    t(
      function (t) {
        n || ((n = !0), hr(e, t));
      },
      function (t) {
        n || ((n = !0), yr(e, t));
      }
    );
  } catch (t) {
    if (n) return;
    (n = !0), yr(e, t);
  }
}
(Ir.prototype.catch = function (t) {
  return this.then(null, t);
}),
  (Ir.prototype.then = function (t, e) {
    var n = new this.constructor(fr);
    return pr(this, new mr(t, e, n)), n;
  }),
  (Ir.prototype.finally = lr),
  (Ir.all = function (t) {
    return new Ir(function (e, n) {
      if (!gr(t)) return n(new TypeError('Promise.all accepts an array'));
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
  (Ir.resolve = function (t) {
    return t && 'object' == typeof t && t.constructor === Ir
      ? t
      : new Ir(function (e) {
          e(t);
        });
  }),
  (Ir.reject = function (t) {
    return new Ir(function (e, n) {
      n(t);
    });
  }),
  (Ir.race = function (t) {
    return new Ir(function (e, n) {
      if (!gr(t)) return n(new TypeError('Promise.race accepts an array'));
      for (var i = 0, r = t.length; i < r; i++) Ir.resolve(t[i]).then(e, n);
    });
  }),
  (Ir._immediateFn =
    ('function' == typeof setImmediate &&
      function (t) {
        setImmediate(t);
      }) ||
    function (t) {
      dr(t, 0);
    }),
  (Ir._unhandledRejectionFn = function (t) {
    'undefined' != typeof console &&
      console &&
      console.warn('Possible Unhandled Promise Rejection:', t);
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
          throw Error("Failed to encode: the 'stream' option is unsupported.");
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
          throw Error("Failed to decode: the 'stream' option is unsupported.");
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
      return !e || ('object' != typeof e && 'function' != typeof e) ? a(t) : e;
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
      p = (function () {
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
    function h(t) {
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
      ((p.prototype[Symbol.toStringTag] = 'AbortController'),
      (I.prototype[Symbol.toStringTag] = 'AbortSignal')),
      (function (t) {
        h(t) && ((t.AbortController = p), (t.AbortSignal = I));
      })('undefined' != typeof self ? self : c);
  })();
var Cr = a(function (t, e) {
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
s(Cr);
var Fr = s(
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
        var e = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz',
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
                          return [4, Cr.default().lock(e)];
                        case 1:
                          return (
                            i.sent(),
                            this.acquiredIatSet.has(e)
                              ? ((n = window.localStorage),
                                null === (r = n.getItem(t))
                                  ? (Cr.default().unlock(e), [2])
                                  : (((r = JSON.parse(
                                      r
                                    )).timeRefreshed = Date.now()),
                                    n.setItem(t, JSON.stringify(r)),
                                    Cr.default().unlock(e),
                                    this.refreshLockWhileAcquired(t, e),
                                    [2]))
                              : (Cr.default().unlock(e), [2])
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
                      window.addEventListener('storage', c), t.addToWaiting(c);
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
          this.removeFromWaiting(e), void 0 !== t.waiters && t.waiters.push(e);
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
                      : [4, Cr.default().lock(c.iat)]
                  );
                case 1:
                  i.sent(),
                    this.acquiredIatSet.delete(c.iat),
                    n.removeItem(o),
                    Cr.default().unlock(c.iat),
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
var Ur = { timeoutInSeconds: 60 },
  Vr = [
    'login_required',
    'consent_required',
    'interaction_required',
    'account_selection_required',
    'access_denied'
  ],
  Zr = (function (t) {
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
  Sr = (function (t) {
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
  })(Zr),
  Xr = (function (t) {
    function n() {
      var e = t.call(this, 'timeout', 'Timeout') || this;
      return Object.setPrototypeOf(e, n.prototype), e;
    }
    return e(n, t), n;
  })(Zr),
  Gr = (function (t) {
    function n(e) {
      var i = t.call(this) || this;
      return (i.popup = e), Object.setPrototypeOf(i, n.prototype), i;
    }
    return e(n, t), n;
  })(Xr),
  wr = function (t, e, n) {
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
        (c = function (t) {
          if (
            t.origin == e &&
            t.data &&
            'authorization_response' === t.data.type
          ) {
            var n = t.source;
            n && n.close(),
              t.data.response.error
                ? r(Zr.fromPayload(t.data.response))
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
  xr = function (t, e) {
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
          n(new Gr(o)), window.removeEventListener('message', i, !1);
        }, 1e3 * (e.timeoutInSeconds || 60));
      (i = function (e) {
        if (e.data && 'authorization_response' === e.data.type) {
          if (
            (clearTimeout(r),
            window.removeEventListener('message', i, !1),
            o.close(),
            e.data.response.error)
          )
            return n(Zr.fromPayload(e.data.response));
          t(e.data.response);
        }
      }),
        window.addEventListener('message', function (t) {
          return i(t);
        });
    });
  },
  Qr = function () {
    return window.crypto || window.msCrypto;
  },
  Ar = function () {
    var t = Qr();
    return t.subtle || t.webkitSubtle;
  },
  Rr = function () {
    var t =
        '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.',
      e = '';
    return (
      Array.from(Qr().getRandomValues(new Uint8Array(43))).forEach(function (
        n
      ) {
        return (e += t[n % t.length]);
      }),
      e
    );
  },
  Lr = function (t) {
    return btoa(t);
  },
  Jr = function (t) {
    return Object.keys(t)
      .filter(function (e) {
        return void 0 !== t[e];
      })
      .map(function (e) {
        return encodeURIComponent(e) + '=' + encodeURIComponent(t[e]);
      })
      .join('&');
  },
  Wr = function (t) {
    return r(void 0, void 0, void 0, function () {
      var e;
      return o(this, function (n) {
        switch (n.label) {
          case 0:
            return (
              (e = Ar().digest(
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
  Hr = function (t) {
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
  Er = function (t) {
    var e = new Uint8Array(t);
    return (function (t) {
      var e = { '+': '-', '/': '_', '=': '' };
      return t.replace(/[+/=]/g, function (t) {
        return e[t];
      });
    })(window.btoa(String.fromCharCode.apply(String, Array.from(e))));
  },
  kr = function (t, e, i, c, s, a) {
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
  Tr = function (t, e, i, r, o, c) {
    void 0 === c && (c = 1e4);
    var s,
      a = new AbortController(),
      u = a.signal,
      l = n(n({}, r), { signal: u });
    return Promise.race([
      kr(t, e, i, l, c, o),
      new Promise(function (t, e) {
        s = setTimeout(function () {
          a.abort(), e(new Error("Timeout when executing 'fetch'"));
        }, c);
      })
    ]).finally(function () {
      clearTimeout(s);
    });
  },
  Yr = function (t, e, n, c, s, a) {
    return r(void 0, void 0, void 0, function () {
      var r, u, l, d, g, f, I, p, h, y;
      return o(this, function (o) {
        switch (o.label) {
          case 0:
            (r = null), (l = 0), (o.label = 1);
          case 1:
            if (!(l < 3)) return [3, 6];
            o.label = 2;
          case 2:
            return o.trys.push([2, 4, , 5]), [4, Tr(t, n, c, s, a, e)];
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
              (p = i(g, ['error', 'error_description'])),
              !u.ok)
            )
              throw (
                ((h = I || 'HTTP error. Unable to fetch ' + t),
                ((y = new Error(h)).error = f || 'request_error'),
                (y.error_description = h),
                y)
              );
            return [2, p];
        }
      });
    });
  },
  Nr = function (t, e) {
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
                Yr(
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
  Kr = function (t) {
    return Array.from(new Set(t));
  },
  Or = function () {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    return Kr(t.join(' ').trim().split(/\s+/)).join(' ');
  },
  zr = function (t) {
    return (
      '@@auth0spajs@@::' + t.client_id + '::' + t.audience + '::' + t.scope
    );
  },
  Dr = function (t) {
    var e = Math.floor(Date.now() / 1e3) + t.expires_in;
    return { body: t, expiresAt: Math.min(e, t.decodedToken.claims.exp) };
  },
  Pr = (function () {
    function t() {}
    return (
      (t.prototype.save = function (t) {
        var e = zr(t),
          n = Dr(t);
        window.localStorage.setItem(e, JSON.stringify(n));
      }),
      (t.prototype.get = function (t, e) {
        void 0 === e && (e = 0);
        var n = zr(t),
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
          localStorage.key(t).startsWith('@@auth0spajs@@') &&
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
  jr = function () {
    this.enclosedCache = (function () {
      var t = { body: {}, expiresAt: 0 };
      return {
        save: function (e) {
          var n = zr(e),
            i = Dr(e);
          t[n] = i;
        },
        get: function (e, n) {
          void 0 === n && (n = 0);
          var i = zr(e),
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
  _r = (function () {
    function t(t) {
      (this.storage = t), (this.transaction = this.storage.get('a0.spajs.txs'));
    }
    return (
      (t.prototype.create = function (t) {
        (this.transaction = t),
          this.storage.save('a0.spajs.txs', t, { daysUntilExpire: 1 });
      }),
      (t.prototype.get = function () {
        return this.transaction;
      }),
      (t.prototype.remove = function () {
        delete this.transaction, this.storage.remove('a0.spajs.txs');
      }),
      t
    );
  })(),
  Mr = function (t) {
    return 'number' == typeof t;
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
  $r = function (t) {
    if (!t.id_token) throw new Error('ID token is required but missing');
    var e = (function (t) {
      var e = t.split('.'),
        n = e[0],
        i = e[1],
        r = e[2];
      if (3 !== e.length || !n || !i || !r)
        throw new Error('ID token could not be decoded');
      var o = JSON.parse(Hr(i)),
        c = { __raw: t },
        s = {};
      return (
        Object.keys(o).forEach(function (t) {
          (c[t] = o[t]), qr.includes(t) || (s[t] = o[t]);
        }),
        {
          encoded: { header: n, payload: i, signature: r },
          header: JSON.parse(Hr(n)),
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
    if (t.max_age && !Mr(e.claims.auth_time))
      throw new Error(
        'Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified'
      );
    if (!Mr(e.claims.exp))
      throw new Error(
        'Expiration Time (exp) claim must be a number present in the ID token'
      );
    if (!Mr(e.claims.iat))
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
    if (Mr(e.claims.nbf) && i < o)
      throw new Error(
        "Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Currrent time (" +
          i +
          ') is before ' +
          o
      );
    if (Mr(e.claims.auth_time) && i > c)
      throw new Error(
        'Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Currrent time (' +
          i +
          ') is after last auth at ' +
          c
      );
    return e;
  },
  to = a(function (t, e) {
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
s(to);
to.encode, to.parse, to.getAll;
var eo = to.get,
  no = to.set,
  io = to.remove,
  ro = {
    get: function (t) {
      var e = eo(t);
      if (void 0 !== e) return JSON.parse(e);
    },
    save: function (t, e, n) {
      var i = {};
      'https:' === window.location.protocol &&
        (i = { secure: !0, sameSite: 'none' }),
        (i.expires = n.daysUntilExpire),
        no(t, JSON.stringify(e), i);
    },
    remove: function (t) {
      io(t);
    }
  },
  oo = {
    get: function (t) {
      var e = ro.get(t);
      return e || ro.get('_legacy_' + t);
    },
    save: function (t, e, n) {
      var i = {};
      'https:' === window.location.protocol && (i = { secure: !0 }),
        (i.expires = n.daysUntilExpire),
        no('_legacy_' + t, JSON.stringify(e), i),
        ro.save(t, e, n);
    },
    remove: function (t) {
      ro.remove(t), ro.remove('_legacy_' + t);
    }
  },
  co = {
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
function so(t, e, n) {
  var i = void 0 === e ? null : e,
    r = (function (t, e) {
      var n = atob(t);
      if (e) {
        for (var i = new Uint8Array(n.length), r = 0, o = n.length; r < o; ++r)
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
var ao,
  uo,
  lo,
  go,
  fo =
    ((ao =
      'Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwohZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Ci8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKgogICAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuCiAgICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgIkxpY2Vuc2UiKTsgeW91IG1heSBub3QgdXNlCiAgICB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZQogICAgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAKCiAgICBUSElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZCiAgICBLSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVECiAgICBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLAogICAgTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC4KCiAgICBTZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMKICAgIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4KICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovdmFyIGU9ZnVuY3Rpb24oKXtyZXR1cm4oZT1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHIsdD0xLG49YXJndW1lbnRzLmxlbmd0aDt0PG47dCsrKWZvcih2YXIgbyBpbiByPWFyZ3VtZW50c1t0XSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocixvKSYmKGVbb109cltvXSk7cmV0dXJuIGV9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O2Z1bmN0aW9uIHIoZSxyKXt2YXIgdCxuLG8scyxhPXtsYWJlbDowLHNlbnQ6ZnVuY3Rpb24oKXtpZigxJm9bMF0pdGhyb3cgb1sxXTtyZXR1cm4gb1sxXX0sdHJ5czpbXSxvcHM6W119O3JldHVybiBzPXtuZXh0OmkoMCksdGhyb3c6aSgxKSxyZXR1cm46aSgyKX0sImZ1bmN0aW9uIj09dHlwZW9mIFN5bWJvbCYmKHNbU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfSkscztmdW5jdGlvbiBpKHMpe3JldHVybiBmdW5jdGlvbihpKXtyZXR1cm4gZnVuY3Rpb24ocyl7aWYodCl0aHJvdyBuZXcgVHlwZUVycm9yKCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuIik7Zm9yKDthOyl0cnl7aWYodD0xLG4mJihvPTImc1swXT9uLnJldHVybjpzWzBdP24udGhyb3d8fCgobz1uLnJldHVybikmJm8uY2FsbChuKSwwKTpuLm5leHQpJiYhKG89by5jYWxsKG4sc1sxXSkpLmRvbmUpcmV0dXJuIG87c3dpdGNoKG49MCxvJiYocz1bMiZzWzBdLG8udmFsdWVdKSxzWzBdKXtjYXNlIDA6Y2FzZSAxOm89czticmVhaztjYXNlIDQ6cmV0dXJuIGEubGFiZWwrKyx7dmFsdWU6c1sxXSxkb25lOiExfTtjYXNlIDU6YS5sYWJlbCsrLG49c1sxXSxzPVswXTtjb250aW51ZTtjYXNlIDc6cz1hLm9wcy5wb3AoKSxhLnRyeXMucG9wKCk7Y29udGludWU7ZGVmYXVsdDppZighKG89YS50cnlzLChvPW8ubGVuZ3RoPjAmJm9bby5sZW5ndGgtMV0pfHw2IT09c1swXSYmMiE9PXNbMF0pKXthPTA7Y29udGludWV9aWYoMz09PXNbMF0mJighb3x8c1sxXT5vWzBdJiZzWzFdPG9bM10pKXthLmxhYmVsPXNbMV07YnJlYWt9aWYoNj09PXNbMF0mJmEubGFiZWw8b1sxXSl7YS5sYWJlbD1vWzFdLG89czticmVha31pZihvJiZhLmxhYmVsPG9bMl0pe2EubGFiZWw9b1syXSxhLm9wcy5wdXNoKHMpO2JyZWFrfW9bMl0mJmEub3BzLnBvcCgpLGEudHJ5cy5wb3AoKTtjb250aW51ZX1zPXIuY2FsbChlLGEpfWNhdGNoKGUpe3M9WzYsZV0sbj0wfWZpbmFsbHl7dD1vPTB9aWYoNSZzWzBdKXRocm93IHNbMV07cmV0dXJue3ZhbHVlOnNbMF0/c1sxXTp2b2lkIDAsZG9uZTohMH19KFtzLGldKX19fXZhciB0PXt9LG49ZnVuY3Rpb24oZSxyKXtyZXR1cm4gZSsifCIrcn07YWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsKGZ1bmN0aW9uKG8pe3ZhciBzLGEsaSx1LGMsbCxmLHAsaCx5LGI7cmV0dXJuIHA9dm9pZCAwLGg9dm9pZCAwLGI9ZnVuY3Rpb24oKXt2YXIgcCxoLHksYixkLHYsdyxnO3JldHVybiByKHRoaXMsKGZ1bmN0aW9uKHIpe3N3aXRjaChyLmxhYmVsKXtjYXNlIDA6cz1vLmRhdGEsYT1zLnVybCxpPXMudGltZW91dCx1PXMuYXVkaWVuY2UsYz1zLnNjb3BlLGw9ZnVuY3Rpb24oZSxyKXt2YXIgdD17fTtmb3IodmFyIG4gaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxuKSYmci5pbmRleE9mKG4pPDAmJih0W25dPWVbbl0pO2lmKG51bGwhPWUmJiJmdW5jdGlvbiI9PXR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbz0wO2ZvcihuPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7bzxuLmxlbmd0aDtvKyspci5pbmRleE9mKG5bb10pPDAmJk9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChlLG5bb10pJiYodFtuW29dXT1lW25bb11dKX1yZXR1cm4gdH0ocyxbInVybCIsInRpbWVvdXQiLCJhdWRpZW5jZSIsInNjb3BlIl0pLGY9by5wb3J0c1swXSxyLmxhYmVsPTE7Y2FzZSAxOmlmKHIudHJ5cy5wdXNoKFsxLDcsLDhdKSwhKGg9SlNPTi5wYXJzZShsLmJvZHkpKS5yZWZyZXNoX3Rva2VuJiYicmVmcmVzaF90b2tlbiI9PT1oLmdyYW50X3R5cGUpe2lmKCEoeT1mdW5jdGlvbihlLHIpe3JldHVybiB0W24oZSxyKV19KHUsYykpKXRocm93IG5ldyBFcnJvcigiVGhlIHdlYiB3b3JrZXIgaXMgbWlzc2luZyB0aGUgcmVmcmVzaCB0b2tlbiIpO2wuYm9keT1KU09OLnN0cmluZ2lmeShlKGUoe30saCkse3JlZnJlc2hfdG9rZW46eX0pKX1iPW5ldyBBYm9ydENvbnRyb2xsZXIsZD1iLnNpZ25hbCx2PXZvaWQgMCxyLmxhYmVsPTI7Y2FzZSAyOnJldHVybiByLnRyeXMucHVzaChbMiw0LCw1XSksWzQsUHJvbWlzZS5yYWNlKFsoaz1pLG5ldyBQcm9taXNlKChmdW5jdGlvbihlKXtyZXR1cm4gc2V0VGltZW91dChlLGspfSkpKSxmZXRjaChhLGUoZSh7fSxsKSx7c2lnbmFsOmR9KSldKV07Y2FzZSAzOnJldHVybiB2PXIuc2VudCgpLFszLDVdO2Nhc2UgNDpyZXR1cm4gdz1yLnNlbnQoKSxmLnBvc3RNZXNzYWdlKHtlcnJvcjp3Lm1lc3NhZ2V9KSxbMl07Y2FzZSA1OnJldHVybiB2P1s0LHYuanNvbigpXTooYi5hYm9ydCgpLFsyXSk7Y2FzZSA2OnJldHVybihwPXIuc2VudCgpKS5yZWZyZXNoX3Rva2VuPyhmdW5jdGlvbihlLHIsbyl7dFtuKHIsbyldPWV9KHAucmVmcmVzaF90b2tlbix1LGMpLGRlbGV0ZSBwLnJlZnJlc2hfdG9rZW4pOmZ1bmN0aW9uKGUscil7ZGVsZXRlIHRbbihlLHIpXX0odSxjKSxmLnBvc3RNZXNzYWdlKHtvazp2Lm9rLGpzb246cH0pLFszLDhdO2Nhc2UgNzpyZXR1cm4gZz1yLnNlbnQoKSxmLnBvc3RNZXNzYWdlKHtvazohMSxqc29uOntlcnJvcl9kZXNjcmlwdGlvbjpnLm1lc3NhZ2V9fSksWzMsOF07Y2FzZSA4OnJldHVyblsyXX12YXIga30pKX0sbmV3KCh5PXZvaWQgMCl8fCh5PVByb21pc2UpKSgoZnVuY3Rpb24oZSxyKXtmdW5jdGlvbiB0KGUpe3RyeXtvKGIubmV4dChlKSl9Y2F0Y2goZSl7cihlKX19ZnVuY3Rpb24gbihlKXt0cnl7byhiLnRocm93KGUpKX1jYXRjaChlKXtyKGUpfX1mdW5jdGlvbiBvKHIpe3IuZG9uZT9lKHIudmFsdWUpOm5ldyB5KChmdW5jdGlvbihlKXtlKHIudmFsdWUpfSkpLnRoZW4odCxuKX1vKChiPWIuYXBwbHkocCxofHxbXSkpLm5leHQoKSl9KSl9KSl9KCk7Cgo='),
    (uo =
      'data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4ud29ya2VyLmpzIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid29ya2VyOi9DOlxcd2ViLXdvcmtlclxcc3JjXFxjb25zdGFudHMudHMiLCJzcmMvdG9rZW4ud29ya2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IFBvcHVwQ29uZmlnT3B0aW9ucyB9IGZyb20gJy4vZ2xvYmFsJztcblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX0FVVEhPUklaRV9USU1FT1VUX0lOX1NFQ09ORFMgPSA2MDtcblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX1BPUFVQX0NPTkZJR19PUFRJT05TOiBQb3B1cENvbmZpZ09wdGlvbnMgPSB7XG4gIHRpbWVvdXRJblNlY29uZHM6IERFRkFVTFRfQVVUSE9SSVpFX1RJTUVPVVRfSU5fU0VDT05EU1xufTtcblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX1NJTEVOVF9UT0tFTl9SRVRSWV9DT1VOVCA9IDM7XG5cbi8qKlxuICogQGlnbm9yZVxuICovXG5leHBvcnQgY29uc3QgQ0xFQU5VUF9JRlJBTUVfVElNRU9VVF9JTl9TRUNPTkRTID0gMjtcblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX0ZFVENIX1RJTUVPVVRfTVMgPSAxMDAwMDtcblxuZXhwb3J0IGNvbnN0IENBQ0hFX0xPQ0FUSU9OX01FTU9SWSA9ICdtZW1vcnknO1xuZXhwb3J0IGNvbnN0IENBQ0hFX0xPQ0FUSU9OX0xPQ0FMX1NUT1JBR0UgPSAnbG9jYWxzdG9yYWdlJztcbmV4cG9ydCBjb25zdCBNSVNTSU5HX1JFRlJFU0hfVE9LRU5fRVJST1JfTUVTU0FHRSA9XG4gICdUaGUgd2ViIHdvcmtlciBpcyBtaXNzaW5nIHRoZSByZWZyZXNoIHRva2VuJztcblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX1NDT1BFID0gJ29wZW5pZCBwcm9maWxlIGVtYWlsJztcblxuLyoqXG4gKiBBIGxpc3Qgb2YgZXJyb3JzIHRoYXQgY2FuIGJlIGlzc3VlZCBieSB0aGUgYXV0aG9yaXphdGlvbiBzZXJ2ZXIgd2hpY2ggdGhlXG4gKiB1c2VyIGNhbiByZWNvdmVyIGZyb20gYnkgc2lnbmluZyBpbiBpbnRlcmFjdGl2ZWx5LlxuICogaHR0cHM6Ly9vcGVuaWQubmV0L3NwZWNzL29wZW5pZC1jb25uZWN0LWNvcmUtMV8wLmh0bWwjQXV0aEVycm9yXG4gKiBAaWdub3JlXG4gKi9cbmV4cG9ydCBjb25zdCBSRUNPVkVSQUJMRV9FUlJPUlMgPSBbXG4gICdsb2dpbl9yZXF1aXJlZCcsXG4gICdjb25zZW50X3JlcXVpcmVkJyxcbiAgJ2ludGVyYWN0aW9uX3JlcXVpcmVkJyxcbiAgJ2FjY291bnRfc2VsZWN0aW9uX3JlcXVpcmVkJyxcbiAgLy8gU3RyaWN0bHkgc3BlYWtpbmcgdGhlIHVzZXIgY2FuJ3QgcmVjb3ZlciBmcm9tIGBhY2Nlc3NfZGVuaWVkYCAtIGJ1dCB0aGV5XG4gIC8vIGNhbiBnZXQgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGVpciBhY2Nlc3MgYmVpbmcgZGVuaWVkIGJ5IGxvZ2dpbmcgaW5cbiAgLy8gaW50ZXJhY3RpdmVseS5cbiAgJ2FjY2Vzc19kZW5pZWQnXG5dO1xuXG4vKipcbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfU0VTU0lPTl9DSEVDS19FWFBJUllfREFZUyA9IDE7XG4iLCJpbXBvcnQgeyBNSVNTSU5HX1JFRlJFU0hfVE9LRU5fRVJST1JfTUVTU0FHRSB9IGZyb20gJy4vY29uc3RhbnRzJztcblxubGV0IHJlZnJlc2hUb2tlbnMgPSB7fTtcblxuY29uc3QgY2FjaGVLZXkgPSAoYXVkaWVuY2UsIHNjb3BlKSA9PiBgJHthdWRpZW5jZX18JHtzY29wZX1gO1xuXG5jb25zdCBnZXRSZWZyZXNoVG9rZW4gPSAoYXVkaWVuY2UsIHNjb3BlKSA9PlxuICByZWZyZXNoVG9rZW5zW2NhY2hlS2V5KGF1ZGllbmNlLCBzY29wZSldO1xuXG5jb25zdCBzZXRSZWZyZXNoVG9rZW4gPSAocmVmcmVzaFRva2VuLCBhdWRpZW5jZSwgc2NvcGUpID0+XG4gIChyZWZyZXNoVG9rZW5zW2NhY2hlS2V5KGF1ZGllbmNlLCBzY29wZSldID0gcmVmcmVzaFRva2VuKTtcblxuY29uc3QgZGVsZXRlUmVmcmVzaFRva2VuID0gKGF1ZGllbmNlLCBzY29wZSkgPT5cbiAgZGVsZXRlIHJlZnJlc2hUb2tlbnNbY2FjaGVLZXkoYXVkaWVuY2UsIHNjb3BlKV07XG5cbmNvbnN0IHdhaXQ6IGFueSA9IHRpbWUgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpKTtcblxuY29uc3QgbWVzc2FnZUhhbmRsZXIgPSBhc3luYyAoe1xuICBkYXRhOiB7IHVybCwgdGltZW91dCwgYXVkaWVuY2UsIHNjb3BlLCAuLi5vcHRzIH0sXG4gIHBvcnRzOiBbcG9ydF1cbn0pID0+IHtcbiAgbGV0IGpzb247XG4gIHRyeSB7XG4gICAgY29uc3QgYm9keSA9IEpTT04ucGFyc2Uob3B0cy5ib2R5KTtcbiAgICBpZiAoIWJvZHkucmVmcmVzaF90b2tlbiAmJiBib2R5LmdyYW50X3R5cGUgPT09ICdyZWZyZXNoX3Rva2VuJykge1xuICAgICAgY29uc3QgcmVmcmVzaFRva2VuID0gZ2V0UmVmcmVzaFRva2VuKGF1ZGllbmNlLCBzY29wZSk7XG4gICAgICBpZiAoIXJlZnJlc2hUb2tlbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTUlTU0lOR19SRUZSRVNIX1RPS0VOX0VSUk9SX01FU1NBR0UpO1xuICAgICAgfVxuICAgICAgb3B0cy5ib2R5ID0gSlNPTi5zdHJpbmdpZnkoeyAuLi5ib2R5LCByZWZyZXNoX3Rva2VuOiByZWZyZXNoVG9rZW4gfSk7XG4gICAgfVxuXG4gICAgY29uc3QgYWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgIGNvbnN0IHsgc2lnbmFsIH0gPSBhYm9ydENvbnRyb2xsZXI7XG5cbiAgICBsZXQgcmVzcG9uc2U7XG4gICAgdHJ5IHtcbiAgICAgIHJlc3BvbnNlID0gYXdhaXQgUHJvbWlzZS5yYWNlKFtcbiAgICAgICAgd2FpdCh0aW1lb3V0KSxcbiAgICAgICAgZmV0Y2godXJsLCB7IC4uLm9wdHMsIHNpZ25hbCB9KVxuICAgICAgXSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIGZldGNoIGVycm9yLCByZWplY3QgYHNlbmRNZXNzYWdlYCB1c2luZyBgZXJyb3JgIGtleSBzbyB0aGF0IHdlIHJldHJ5LlxuICAgICAgcG9ydC5wb3N0TWVzc2FnZSh7XG4gICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICAvLyBJZiB0aGUgcmVxdWVzdCB0aW1lcyBvdXQsIGFib3J0IGl0IGFuZCBsZXQgYGZldGNoV2l0aFRpbWVvdXRgIHJhaXNlIHRoZSBlcnJvci5cbiAgICAgIGFib3J0Q29udHJvbGxlci5hYm9ydCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBpZiAoanNvbi5yZWZyZXNoX3Rva2VuKSB7XG4gICAgICBzZXRSZWZyZXNoVG9rZW4oanNvbi5yZWZyZXNoX3Rva2VuLCBhdWRpZW5jZSwgc2NvcGUpO1xuICAgICAgZGVsZXRlIGpzb24ucmVmcmVzaF90b2tlbjtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlUmVmcmVzaFRva2VuKGF1ZGllbmNlLCBzY29wZSk7XG4gICAgfVxuXG4gICAgcG9ydC5wb3N0TWVzc2FnZSh7XG4gICAgICBvazogcmVzcG9uc2Uub2ssXG4gICAgICBqc29uXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcG9ydC5wb3N0TWVzc2FnZSh7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBqc29uOiB7XG4gICAgICAgIGVycm9yX2Rlc2NyaXB0aW9uOiBlcnJvci5tZXNzYWdlXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbi8vIERvbid0IHJ1biBgYWRkRXZlbnRMaXN0ZW5lcmAgaW4gb3VyIHRlc3RzICh0aGlzIGlzIHJlcGxhY2VkIGluIHJvbGx1cClcbi8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICAqL1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCcpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSB7IG1lc3NhZ2VIYW5kbGVyIH07XG59IGVsc2Uge1xuICAvLyBAdHMtaWdub3JlXG4gIGFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBtZXNzYWdlSGFuZGxlcik7XG59XG4iXSwibmFtZXMiOlsiX19hc3NpZ24iLCJPYmplY3QiLCJhc3NpZ24iLCJ0IiwicyIsImkiLCJuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImFwcGx5IiwidGhpcyIsIl9fZ2VuZXJhdG9yIiwidGhpc0FyZyIsImJvZHkiLCJmIiwieSIsImciLCJfIiwibGFiZWwiLCJzZW50IiwidHJ5cyIsIm9wcyIsIm5leHQiLCJ2ZXJiIiwidGhyb3ciLCJyZXR1cm4iLCJTeW1ib2wiLCJpdGVyYXRvciIsInYiLCJvcCIsIlR5cGVFcnJvciIsImRvbmUiLCJ2YWx1ZSIsInBvcCIsInB1c2giLCJlIiwic3RlcCIsInJlZnJlc2hUb2tlbnMiLCJjYWNoZUtleSIsImF1ZGllbmNlIiwic2NvcGUiLCJhZGRFdmVudExpc3RlbmVyIiwiX2EiLCJfYXJndW1lbnRzIiwiUCIsImdlbmVyYXRvciIsIl9iIiwidXJsIiwidGltZW91dCIsIm9wdHMiLCJpbmRleE9mIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJwb3J0IiwiSlNPTiIsInBhcnNlIiwicmVmcmVzaF90b2tlbiIsImdyYW50X3R5cGUiLCJyZWZyZXNoVG9rZW4iLCJnZXRSZWZyZXNoVG9rZW4iLCJFcnJvciIsInN0cmluZ2lmeSIsImFib3J0Q29udHJvbGxlciIsIkFib3J0Q29udHJvbGxlciIsInNpZ25hbCIsInJlc3BvbnNlIiwiUHJvbWlzZSIsInJhY2UiLCJ0aW1lIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJmZXRjaCIsIl9jIiwicG9zdE1lc3NhZ2UiLCJlcnJvciIsImVycm9yXzEiLCJtZXNzYWdlIiwianNvbiIsImFib3J0Iiwic2V0UmVmcmVzaFRva2VuIiwiZGVsZXRlUmVmcmVzaFRva2VuIiwib2siLCJlcnJvcl9kZXNjcmlwdGlvbiIsImVycm9yXzIiLCJyZWplY3QiLCJmdWxmaWxsZWQiLCJyZWplY3RlZCIsInJlc3VsdCIsInRoZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O29GQTZCTyxJQUFJQSxFQUFXLFdBUWxCLE9BUEFBLEVBQVdDLE9BQU9DLFFBQVUsU0FBa0JDLEdBQzFDLElBQUssSUFBSUMsRUFBR0MsRUFBSSxFQUFHQyxFQUFJQyxVQUFVQyxPQUFRSCxFQUFJQyxFQUFHRCxJQUU1QyxJQUFLLElBQUlJLEtBRFRMLEVBQUlHLFVBQVVGLEdBQ09KLE9BQU9TLFVBQVVDLGVBQWVDLEtBQUtSLEVBQUdLLEtBQUlOLEVBQUVNLEdBQUtMLEVBQUVLLElBRTlFLE9BQU9OLElBRUtVLE1BQU1DLEtBQU1QLFlBdUN6QixTQUFTUSxFQUFZQyxFQUFTQyxHQUNqQyxJQUFzR0MsRUFBR0MsRUFBR2hCLEVBQUdpQixFQUEzR0MsRUFBSSxDQUFFQyxNQUFPLEVBQUdDLEtBQU0sV0FBYSxHQUFXLEVBQVBwQixFQUFFLEdBQVEsTUFBTUEsRUFBRSxHQUFJLE9BQU9BLEVBQUUsSUFBT3FCLEtBQU0sR0FBSUMsSUFBSyxJQUNoRyxPQUFPTCxFQUFJLENBQUVNLEtBQU1DLEVBQUssR0FBSUMsTUFBU0QsRUFBSyxHQUFJRSxPQUFVRixFQUFLLElBQXdCLG1CQUFYRyxTQUEwQlYsRUFBRVUsT0FBT0MsVUFBWSxXQUFhLE9BQU9qQixPQUFVTSxFQUN2SixTQUFTTyxFQUFLckIsR0FBSyxPQUFPLFNBQVUwQixHQUFLLE9BQ3pDLFNBQWNDLEdBQ1YsR0FBSWYsRUFBRyxNQUFNLElBQUlnQixVQUFVLG1DQUMzQixLQUFPYixPQUNILEdBQUlILEVBQUksRUFBR0MsSUFBTWhCLEVBQVksRUFBUjhCLEVBQUcsR0FBU2QsRUFBVSxPQUFJYyxFQUFHLEdBQUtkLEVBQVMsU0FBT2hCLEVBQUlnQixFQUFVLFNBQU1oQixFQUFFUyxLQUFLTyxHQUFJLEdBQUtBLEVBQUVPLFNBQVd2QixFQUFJQSxFQUFFUyxLQUFLTyxFQUFHYyxFQUFHLEtBQUtFLEtBQU0sT0FBT2hDLEVBRTNKLE9BRElnQixFQUFJLEVBQUdoQixJQUFHOEIsRUFBSyxDQUFTLEVBQVJBLEVBQUcsR0FBUTlCLEVBQUVpQyxRQUN6QkgsRUFBRyxJQUNQLEtBQUssRUFBRyxLQUFLLEVBQUc5QixFQUFJOEIsRUFBSSxNQUN4QixLQUFLLEVBQWMsT0FBWFosRUFBRUMsUUFBZ0IsQ0FBRWMsTUFBT0gsRUFBRyxHQUFJRSxNQUFNLEdBQ2hELEtBQUssRUFBR2QsRUFBRUMsUUFBU0gsRUFBSWMsRUFBRyxHQUFJQSxFQUFLLENBQUMsR0FBSSxTQUN4QyxLQUFLLEVBQUdBLEVBQUtaLEVBQUVJLElBQUlZLE1BQU9oQixFQUFFRyxLQUFLYSxNQUFPLFNBQ3hDLFFBQ0ksS0FBTWxDLEVBQUlrQixFQUFFRyxNQUFNckIsRUFBSUEsRUFBRUssT0FBUyxHQUFLTCxFQUFFQSxFQUFFSyxPQUFTLEtBQWtCLElBQVZ5QixFQUFHLElBQXNCLElBQVZBLEVBQUcsSUFBVyxDQUFFWixFQUFJLEVBQUcsU0FDakcsR0FBYyxJQUFWWSxFQUFHLE1BQWM5QixHQUFNOEIsRUFBRyxHQUFLOUIsRUFBRSxJQUFNOEIsRUFBRyxHQUFLOUIsRUFBRSxJQUFNLENBQUVrQixFQUFFQyxNQUFRVyxFQUFHLEdBQUksTUFDOUUsR0FBYyxJQUFWQSxFQUFHLElBQVlaLEVBQUVDLE1BQVFuQixFQUFFLEdBQUksQ0FBRWtCLEVBQUVDLE1BQVFuQixFQUFFLEdBQUlBLEVBQUk4QixFQUFJLE1BQzdELEdBQUk5QixHQUFLa0IsRUFBRUMsTUFBUW5CLEVBQUUsR0FBSSxDQUFFa0IsRUFBRUMsTUFBUW5CLEVBQUUsR0FBSWtCLEVBQUVJLElBQUlhLEtBQUtMLEdBQUssTUFDdkQ5QixFQUFFLElBQUlrQixFQUFFSSxJQUFJWSxNQUNoQmhCLEVBQUVHLEtBQUthLE1BQU8sU0FFdEJKLEVBQUtoQixFQUFLTCxLQUFLSSxFQUFTSyxHQUMxQixNQUFPa0IsR0FBS04sRUFBSyxDQUFDLEVBQUdNLEdBQUlwQixFQUFJLFVBQWVELEVBQUlmLEVBQUksRUFDdEQsR0FBWSxFQUFSOEIsRUFBRyxHQUFRLE1BQU1BLEVBQUcsR0FBSSxNQUFPLENBQUVHLE1BQU9ILEVBQUcsR0FBS0EsRUFBRyxRQUFLLEVBQVFFLE1BQU0sR0FyQjlCSyxDQUFLLENBQUNsQyxFQUFHMEIsTUNoRHRELElDN0JIUyxFQUFnQixHQUVkQyxFQUFXLFNBQUNDLEVBQVVDLEdBQVUsT0FBR0QsTUFBWUMsR0FnRm5EQyxpQkFBaUIsV0FuRUksU0FBT0MscUJGa0RKOUIsRUFBUytCLEVBQVlDLEVBQUdDLFNBQXhCakMsU0FBUytCLFNBQWVFLG1GRWpEaERDLFNBQVFDLFFBQUtDLFlBQVNULGFBQVVDLFVBQVVTLEVGc0JyQyxTQUFnQmpELEVBQUdtQyxHQUN0QixJQUFJcEMsRUFBSSxHQUNSLElBQUssSUFBSU0sS0FBS0wsRUFBT0gsT0FBT1MsVUFBVUMsZUFBZUMsS0FBS1IsRUFBR0ssSUFBTThCLEVBQUVlLFFBQVE3QyxHQUFLLElBQzlFTixFQUFFTSxHQUFLTCxFQUFFSyxJQUNiLEdBQVMsTUFBTEwsR0FBcUQsbUJBQWpDSCxPQUFPc0Qsc0JBQ3RCLENBQUEsSUFBSWxELEVBQUksRUFBYixJQUFnQkksRUFBSVIsT0FBT3NELHNCQUFzQm5ELEdBQUlDLEVBQUlJLEVBQUVELE9BQVFILElBQzNEa0MsRUFBRWUsUUFBUTdDLEVBQUVKLElBQU0sR0FBS0osT0FBT1MsVUFBVThDLHFCQUFxQjVDLEtBQUtSLEVBQUdLLEVBQUVKLE1BQ3ZFRixFQUFFTSxFQUFFSixJQUFNRCxFQUFFSyxFQUFFSixLQUUxQixPQUFPRixLRS9CSCxzQ0FDRXNELDhCQUtOLDJCQURNeEMsRUFBT3lDLEtBQUtDLE1BQU1OLEVBQUtwQyxPQUNuQjJDLGVBQXFDLGtCQUFwQjNDLEVBQUs0QyxXQUFnQyxDQUU5RCxLQURNQyxFQW5CWSxTQUFDbkIsRUFBVUMsR0FDakMsT0FBQUgsRUFBY0MsRUFBU0MsRUFBVUMsSUFrQlJtQixDQUFnQnBCLEVBQVVDLElBRTdDLE1BQU0sSUFBSW9CLE1ES2hCLCtDQ0hJWCxFQUFLcEMsS0FBT3lDLEtBQUtPLGlCQUFlaEQsSUFBTTJDLGNBQWVFLEtBR2pESSxFQUFrQixJQUFJQyxnQkFDcEJDLEVBQVdGLFNBRWZHLDBCQUVTLGdDQUFNQyxRQUFRQyxLQUFLLEVBdEJsQkMsRUF1QkxwQixFQXZCYSxJQUFJa0IsU0FBUSxTQUFBRyxHQUFXLE9BQUFDLFdBQVdELEVBQVNELE9Bd0I3REcsTUFBTXhCLFNBQVVFLElBQU1lLDZCQUZ4QkMsRUFBV08sc0JBU1gsa0JBSEFuQixFQUFLb0IsWUFBWSxDQUNmQyxNQUFPQyxFQUFNQyxxQkFLakIsT0FBS1gsS0FNUUEsRUFBU1ksU0FKcEJmLEVBQWdCZ0IsMkJBSWxCRCxFQUFPTCxVQUVFaEIsZUFoRFcsU0FBQ0UsRUFBY25CLEVBQVVDLEdBQzlDSCxFQUFjQyxFQUFTQyxFQUFVQyxJQUFVa0IsRUFnRHhDcUIsQ0FBZ0JGLEVBQUtyQixjQUFlakIsRUFBVUMsVUFDdkNxQyxFQUFLckIsZUEvQ1MsU0FBQ2pCLEVBQVVDLFVBQzdCSCxFQUFjQyxFQUFTQyxFQUFVQyxJQWdEcEN3QyxDQUFtQnpDLEVBQVVDLEdBRy9CYSxFQUFLb0IsWUFBWSxDQUNmUSxHQUFJaEIsRUFBU2dCLEdBQ2JKLHdDQUdGeEIsRUFBS29CLFlBQVksQ0FDZlEsSUFBSSxFQUNKSixLQUFNLENBQ0pLLGtCQUFtQkMsRUFBTVAsa0NBekRmLElBQUFSLE1GcURQLEtBRG9DeEIsWUFDekJBLEVBQUlzQixXQUFVLFNBQVVHLEVBQVNlLEdBQy9DLFNBQVNDLEVBQVVyRCxHQUFTLElBQU1JLEVBQUtTLEVBQVV2QixLQUFLVSxJQUFXLE1BQU9HLEdBQUtpRCxFQUFPakQsSUFDcEYsU0FBU21ELEVBQVN0RCxHQUFTLElBQU1JLEVBQUtTLEVBQWlCLE1BQUViLElBQVcsTUFBT0csR0FBS2lELEVBQU9qRCxJQUN2RixTQUFTQyxFQUFLbUQsR0FBVUEsRUFBT3hELEtBQU9zQyxFQUFRa0IsRUFBT3ZELE9BQVMsSUFBSVksR0FBRSxTQUFVeUIsR0FBV0EsRUFBUWtCLEVBQU92RCxVQUFXd0QsS0FBS0gsRUFBV0MsR0FDbklsRCxHQUFNUyxFQUFZQSxFQUFVcEMsTUFBTUcsRUFBUytCLEdBQWMsS0FBS3JCIn0='),
    (lo = !1),
    function (t) {
      return (go = go || so(ao, uo, lo)), new Worker(go, t);
    }),
  Io = new Fr(),
  po = {
    memory: function () {
      return new jr().enclosedCache;
    },
    localstorage: function () {
      return new Pr();
    }
  },
  ho = function (t) {
    return po[t];
  },
  yo = function () {
    return !(
      /Trident.*rv:11\.0/.test(navigator.userAgent) ||
      /AppleWebKit.*Version\/10/.test(navigator.userAgent) ||
      /AppleWebKit.*Version\/11/.test(navigator.userAgent) ||
      /AppleWebKit.*Version\/12\.0/.test(navigator.userAgent)
    );
  },
  bo = (function () {
    function t(t) {
      var e, n;
      if (
        ((this.options = t),
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
        (this.cacheLocation = t.cacheLocation || 'memory'),
        (this.cookieStorage = !1 === t.legacySameSiteCookie ? ro : oo),
        (this.sessionCheckExpiryDays = t.sessionCheckExpiryDays || 1),
        !ho(this.cacheLocation))
      )
        throw new Error('Invalid cache location "' + this.cacheLocation + '"');
      var r,
        o,
        c = t.useCookiesForTransactions ? this.cookieStorage : co;
      (this.cache = ho(this.cacheLocation)()),
        (this.scope = this.options.scope),
        (this.clientHash = this.options.clientHash),
        (this.transactionManager = new _r(c)),
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
                null === (e = this.options) || void 0 === e
                  ? void 0
                  : e.advancedOptions) || void 0 === n
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
          yo() &&
          (this.worker = new fo()),
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
          scope: Or(this.defaultScope, this.scope, t.scope),
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
        return this._url('/authorize?' + Jr(t));
      }),
      (t.prototype._verifyIdToken = function (t, e) {
        return $r({
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
                    (c = Lr(Rr())),
                    (s = Lr(Rr())),
                    (a = Rr()),
                    [4, Wr(a)]
                  );
                case 1:
                  return (
                    (u = o.sent()),
                    (l = Er(u)),
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
            var r, c, s, a, u, l, d, g, f, I, p, h;
            return o(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    (r = i(t, [])),
                    (c = Lr(Rr())),
                    (s = Lr(Rr())),
                    (a = Rr()),
                    [4, Wr(a)]
                  );
                case 1:
                  return (
                    (u = o.sent()),
                    (l = Er(u)),
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
                      xr(
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
                    Nr(
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
                    (p = this._verifyIdToken(I.id_token, s)),
                    (h = n(n({}, I), {
                      decodedToken: p,
                      scope: d.scope,
                      audience: d.audience || 'default',
                      client_id: this.options.client_id
                    })),
                    this.cache.save(h),
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
                (n = Or(this.defaultScope, this.scope, t.scope)),
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
                (n = Or(this.defaultScope, this.scope, t.scope)),
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
                      t.indexOf('#') > -1 && (t = t.substr(0, t.indexOf('#')));
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
                      new Sr(s, a, r, u.appState))
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
                    [4, Nr(l, this.worker)]
                  );
                case 1:
                  return (
                    (d = o.sent()),
                    (g = this._verifyIdToken(d.id_token, u.nonce)),
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
                return n.trys.push([1, 3, , 4]), [4, this.getTokenSilently(t)];
              case 2:
                return n.sent(), [3, 4];
              case 3:
                if (((e = n.sent()), !Vr.includes(e.error))) throw e;
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
                      { scope: Or(this.defaultScope, this.scope, t.scope) }
                    )),
                    (r = e.ignoreCache),
                    (c = i(e, ['ignoreCache'])),
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
                    (t.scope = Or(this.defaultScope, this.scope, t.scope)),
                    (e = n(n({}, Ur), e)),
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
        return this._url('/v2/logout?' + Jr(n)) + r;
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
          var e, r, c, s, a, u, l, d, g, f, I, p, h, y;
          return o(this, function (o) {
            switch (o.label) {
              case 0:
                return (e = Lr(Rr())), (r = Lr(Rr())), (c = Rr()), [4, Wr(c)];
              case 1:
                return (
                  (s = o.sent()),
                  (a = Er(s)),
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
                  [4, wr(l, this.domainUrl, d)]
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
                  (p = i(t, [
                    'scope',
                    'audience',
                    'redirect_uri',
                    'ignoreCache',
                    'timeoutInSeconds'
                  ])),
                  [
                    4,
                    Nr(
                      n(n(n({}, this.customOptions), p), {
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
                  (h = o.sent()),
                  (y = this._verifyIdToken(h.id_token, r)),
                  [
                    2,
                    n(n({}, h), {
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
                  (t.scope = Or(
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
                    Nr(
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
function mo(t) {
  return r(this, void 0, void 0, function () {
    var e;
    return o(this, function (n) {
      switch (n.label) {
        case 0:
          return [4, (e = new bo(t)).checkSession()];
        case 1:
          return n.sent(), [2, e];
      }
    });
  });
}
export default mo;
export { bo as Auth0Client };
//# sourceMappingURL=auth0-spa-js.production.esm.js.map
