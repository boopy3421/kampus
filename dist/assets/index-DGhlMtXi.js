(function () {
  const u = document.createElement("link").relList;
  if (u && u.supports && u.supports("modulepreload")) return;
  for (const f of document.querySelectorAll('link[rel="modulepreload"]')) d(f);
  new MutationObserver((f) => {
    for (const p of f)
      if (p.type === "childList")
        for (const h of p.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && d(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(f) {
    const p = {};
    return (
      f.integrity && (p.integrity = f.integrity),
      f.referrerPolicy && (p.referrerPolicy = f.referrerPolicy),
      f.crossOrigin === "use-credentials"
        ? (p.credentials = "include")
        : f.crossOrigin === "anonymous"
          ? (p.credentials = "omit")
          : (p.credentials = "same-origin"),
      p
    );
  }
  function d(f) {
    if (f.ep) return;
    f.ep = !0;
    const p = a(f);
    fetch(f.href, p);
  }
})();
function md(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default")
    ? o.default
    : o;
}
var js = { exports: {} },
  nl = {},
  Cs = { exports: {} },
  ye = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ic;
function Yp() {
  if (Ic) return ye;
  Ic = 1;
  var o = Symbol.for("react.element"),
    u = Symbol.for("react.portal"),
    a = Symbol.for("react.fragment"),
    d = Symbol.for("react.strict_mode"),
    f = Symbol.for("react.profiler"),
    p = Symbol.for("react.provider"),
    h = Symbol.for("react.context"),
    x = Symbol.for("react.forward_ref"),
    v = Symbol.for("react.suspense"),
    S = Symbol.for("react.memo"),
    j = Symbol.for("react.lazy"),
    k = Symbol.iterator;
  function D(_) {
    return _ === null || typeof _ != "object"
      ? null
      : ((_ = (k && _[k]) || _["@@iterator"]),
        typeof _ == "function" ? _ : null);
  }
  var W = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    R = Object.assign,
    B = {};
  function E(_, b, X) {
    ((this.props = _),
      (this.context = b),
      (this.refs = B),
      (this.updater = X || W));
  }
  ((E.prototype.isReactComponent = {}),
    (E.prototype.setState = function (_, b) {
      if (typeof _ != "object" && typeof _ != "function" && _ != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, _, b, "setState");
    }),
    (E.prototype.forceUpdate = function (_) {
      this.updater.enqueueForceUpdate(this, _, "forceUpdate");
    }));
  function P() {}
  P.prototype = E.prototype;
  function Y(_, b, X) {
    ((this.props = _),
      (this.context = b),
      (this.refs = B),
      (this.updater = X || W));
  }
  var q = (Y.prototype = new P());
  ((q.constructor = Y), R(q, E.prototype), (q.isPureReactComponent = !0));
  var ae = Array.isArray,
    le = Object.prototype.hasOwnProperty,
    de = { current: null },
    _e = { key: !0, ref: !0, __self: !0, __source: !0 };
  function je(_, b, X) {
    var ie,
      me = {},
      oe = null,
      Ne = null;
    if (b != null)
      for (ie in (b.ref !== void 0 && (Ne = b.ref),
      b.key !== void 0 && (oe = "" + b.key),
      b))
        le.call(b, ie) && !_e.hasOwnProperty(ie) && (me[ie] = b[ie]);
    var xe = arguments.length - 2;
    if (xe === 1) me.children = X;
    else if (1 < xe) {
      for (var Be = Array(xe), ot = 0; ot < xe; ot++)
        Be[ot] = arguments[ot + 2];
      me.children = Be;
    }
    if (_ && _.defaultProps)
      for (ie in ((xe = _.defaultProps), xe))
        me[ie] === void 0 && (me[ie] = xe[ie]);
    return {
      $$typeof: o,
      type: _,
      key: oe,
      ref: Ne,
      props: me,
      _owner: de.current,
    };
  }
  function Ee(_, b) {
    return {
      $$typeof: o,
      type: _.type,
      key: b,
      ref: _.ref,
      props: _.props,
      _owner: _._owner,
    };
  }
  function Re(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === o;
  }
  function F(_) {
    var b = { "=": "=0", ":": "=2" };
    return (
      "$" +
      _.replace(/[=:]/g, function (X) {
        return b[X];
      })
    );
  }
  var A = /\/+/g;
  function re(_, b) {
    return typeof _ == "object" && _ !== null && _.key != null
      ? F("" + _.key)
      : b.toString(36);
  }
  function ve(_, b, X, ie, me) {
    var oe = typeof _;
    (oe === "undefined" || oe === "boolean") && (_ = null);
    var Ne = !1;
    if (_ === null) Ne = !0;
    else
      switch (oe) {
        case "string":
        case "number":
          Ne = !0;
          break;
        case "object":
          switch (_.$$typeof) {
            case o:
            case u:
              Ne = !0;
          }
      }
    if (Ne)
      return (
        (Ne = _),
        (me = me(Ne)),
        (_ = ie === "" ? "." + re(Ne, 0) : ie),
        ae(me)
          ? ((X = ""),
            _ != null && (X = _.replace(A, "$&/") + "/"),
            ve(me, b, X, "", function (ot) {
              return ot;
            }))
          : me != null &&
            (Re(me) &&
              (me = Ee(
                me,
                X +
                  (!me.key || (Ne && Ne.key === me.key)
                    ? ""
                    : ("" + me.key).replace(A, "$&/") + "/") +
                  _,
              )),
            b.push(me)),
        1
      );
    if (((Ne = 0), (ie = ie === "" ? "." : ie + ":"), ae(_)))
      for (var xe = 0; xe < _.length; xe++) {
        oe = _[xe];
        var Be = ie + re(oe, xe);
        Ne += ve(oe, b, X, Be, me);
      }
    else if (((Be = D(_)), typeof Be == "function"))
      for (_ = Be.call(_), xe = 0; !(oe = _.next()).done; )
        ((oe = oe.value),
          (Be = ie + re(oe, xe++)),
          (Ne += ve(oe, b, X, Be, me)));
    else if (oe === "object")
      throw (
        (b = String(_)),
        Error(
          "Objects are not valid as a React child (found: " +
            (b === "[object Object]"
              ? "object with keys {" + Object.keys(_).join(", ") + "}"
              : b) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return Ne;
  }
  function we(_, b, X) {
    if (_ == null) return _;
    var ie = [],
      me = 0;
    return (
      ve(_, ie, "", "", function (oe) {
        return b.call(X, oe, me++);
      }),
      ie
    );
  }
  function Oe(_) {
    if (_._status === -1) {
      var b = _._result;
      ((b = b()),
        b.then(
          function (X) {
            (_._status === 0 || _._status === -1) &&
              ((_._status = 1), (_._result = X));
          },
          function (X) {
            (_._status === 0 || _._status === -1) &&
              ((_._status = 2), (_._result = X));
          },
        ),
        _._status === -1 && ((_._status = 0), (_._result = b)));
    }
    if (_._status === 1) return _._result.default;
    throw _._result;
  }
  var te = { current: null },
    I = { transition: null },
    U = {
      ReactCurrentDispatcher: te,
      ReactCurrentBatchConfig: I,
      ReactCurrentOwner: de,
    };
  function O() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (ye.Children = {
      map: we,
      forEach: function (_, b, X) {
        we(
          _,
          function () {
            b.apply(this, arguments);
          },
          X,
        );
      },
      count: function (_) {
        var b = 0;
        return (
          we(_, function () {
            b++;
          }),
          b
        );
      },
      toArray: function (_) {
        return (
          we(_, function (b) {
            return b;
          }) || []
        );
      },
      only: function (_) {
        if (!Re(_))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return _;
      },
    }),
    (ye.Component = E),
    (ye.Fragment = a),
    (ye.Profiler = f),
    (ye.PureComponent = Y),
    (ye.StrictMode = d),
    (ye.Suspense = v),
    (ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = U),
    (ye.act = O),
    (ye.cloneElement = function (_, b, X) {
      if (_ == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            _ +
            ".",
        );
      var ie = R({}, _.props),
        me = _.key,
        oe = _.ref,
        Ne = _._owner;
      if (b != null) {
        if (
          (b.ref !== void 0 && ((oe = b.ref), (Ne = de.current)),
          b.key !== void 0 && (me = "" + b.key),
          _.type && _.type.defaultProps)
        )
          var xe = _.type.defaultProps;
        for (Be in b)
          le.call(b, Be) &&
            !_e.hasOwnProperty(Be) &&
            (ie[Be] = b[Be] === void 0 && xe !== void 0 ? xe[Be] : b[Be]);
      }
      var Be = arguments.length - 2;
      if (Be === 1) ie.children = X;
      else if (1 < Be) {
        xe = Array(Be);
        for (var ot = 0; ot < Be; ot++) xe[ot] = arguments[ot + 2];
        ie.children = xe;
      }
      return {
        $$typeof: o,
        type: _.type,
        key: me,
        ref: oe,
        props: ie,
        _owner: Ne,
      };
    }),
    (ye.createContext = function (_) {
      return (
        (_ = {
          $$typeof: h,
          _currentValue: _,
          _currentValue2: _,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (_.Provider = { $$typeof: p, _context: _ }),
        (_.Consumer = _)
      );
    }),
    (ye.createElement = je),
    (ye.createFactory = function (_) {
      var b = je.bind(null, _);
      return ((b.type = _), b);
    }),
    (ye.createRef = function () {
      return { current: null };
    }),
    (ye.forwardRef = function (_) {
      return { $$typeof: x, render: _ };
    }),
    (ye.isValidElement = Re),
    (ye.lazy = function (_) {
      return { $$typeof: j, _payload: { _status: -1, _result: _ }, _init: Oe };
    }),
    (ye.memo = function (_, b) {
      return { $$typeof: S, type: _, compare: b === void 0 ? null : b };
    }),
    (ye.startTransition = function (_) {
      var b = I.transition;
      I.transition = {};
      try {
        _();
      } finally {
        I.transition = b;
      }
    }),
    (ye.unstable_act = O),
    (ye.useCallback = function (_, b) {
      return te.current.useCallback(_, b);
    }),
    (ye.useContext = function (_) {
      return te.current.useContext(_);
    }),
    (ye.useDebugValue = function () {}),
    (ye.useDeferredValue = function (_) {
      return te.current.useDeferredValue(_);
    }),
    (ye.useEffect = function (_, b) {
      return te.current.useEffect(_, b);
    }),
    (ye.useId = function () {
      return te.current.useId();
    }),
    (ye.useImperativeHandle = function (_, b, X) {
      return te.current.useImperativeHandle(_, b, X);
    }),
    (ye.useInsertionEffect = function (_, b) {
      return te.current.useInsertionEffect(_, b);
    }),
    (ye.useLayoutEffect = function (_, b) {
      return te.current.useLayoutEffect(_, b);
    }),
    (ye.useMemo = function (_, b) {
      return te.current.useMemo(_, b);
    }),
    (ye.useReducer = function (_, b, X) {
      return te.current.useReducer(_, b, X);
    }),
    (ye.useRef = function (_) {
      return te.current.useRef(_);
    }),
    (ye.useState = function (_) {
      return te.current.useState(_);
    }),
    (ye.useSyncExternalStore = function (_, b, X) {
      return te.current.useSyncExternalStore(_, b, X);
    }),
    (ye.useTransition = function () {
      return te.current.useTransition();
    }),
    (ye.version = "18.3.1"),
    ye
  );
}
var Tc;
function Fs() {
  return (Tc || ((Tc = 1), (Cs.exports = Yp())), Cs.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hc;
function qp() {
  if (Hc) return nl;
  Hc = 1;
  var o = Fs(),
    u = Symbol.for("react.element"),
    a = Symbol.for("react.fragment"),
    d = Object.prototype.hasOwnProperty,
    f = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(x, v, S) {
    var j,
      k = {},
      D = null,
      W = null;
    (S !== void 0 && (D = "" + S),
      v.key !== void 0 && (D = "" + v.key),
      v.ref !== void 0 && (W = v.ref));
    for (j in v) d.call(v, j) && !p.hasOwnProperty(j) && (k[j] = v[j]);
    if (x && x.defaultProps)
      for (j in ((v = x.defaultProps), v)) k[j] === void 0 && (k[j] = v[j]);
    return {
      $$typeof: u,
      type: x,
      key: D,
      ref: W,
      props: k,
      _owner: f.current,
    };
  }
  return ((nl.Fragment = a), (nl.jsx = h), (nl.jsxs = h), nl);
}
var zc;
function Zp() {
  return (zc || ((zc = 1), (js.exports = qp())), js.exports);
}
var i = Zp(),
  y = Fs();
const Jp = md(y);
var Ni = {},
  Ms = { exports: {} },
  mt = {},
  Es = { exports: {} },
  Bs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fc;
function Kp() {
  return (
    Fc ||
      ((Fc = 1),
      (function (o) {
        function u(I, U) {
          var O = I.length;
          I.push(U);
          e: for (; 0 < O; ) {
            var _ = (O - 1) >>> 1,
              b = I[_];
            if (0 < f(b, U)) ((I[_] = U), (I[O] = b), (O = _));
            else break e;
          }
        }
        function a(I) {
          return I.length === 0 ? null : I[0];
        }
        function d(I) {
          if (I.length === 0) return null;
          var U = I[0],
            O = I.pop();
          if (O !== U) {
            I[0] = O;
            e: for (var _ = 0, b = I.length, X = b >>> 1; _ < X; ) {
              var ie = 2 * (_ + 1) - 1,
                me = I[ie],
                oe = ie + 1,
                Ne = I[oe];
              if (0 > f(me, O))
                oe < b && 0 > f(Ne, me)
                  ? ((I[_] = Ne), (I[oe] = O), (_ = oe))
                  : ((I[_] = me), (I[ie] = O), (_ = ie));
              else if (oe < b && 0 > f(Ne, O))
                ((I[_] = Ne), (I[oe] = O), (_ = oe));
              else break e;
            }
          }
          return U;
        }
        function f(I, U) {
          var O = I.sortIndex - U.sortIndex;
          return O !== 0 ? O : I.id - U.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var p = performance;
          o.unstable_now = function () {
            return p.now();
          };
        } else {
          var h = Date,
            x = h.now();
          o.unstable_now = function () {
            return h.now() - x;
          };
        }
        var v = [],
          S = [],
          j = 1,
          k = null,
          D = 3,
          W = !1,
          R = !1,
          B = !1,
          E = typeof setTimeout == "function" ? setTimeout : null,
          P = typeof clearTimeout == "function" ? clearTimeout : null,
          Y = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function q(I) {
          for (var U = a(S); U !== null; ) {
            if (U.callback === null) d(S);
            else if (U.startTime <= I)
              (d(S), (U.sortIndex = U.expirationTime), u(v, U));
            else break;
            U = a(S);
          }
        }
        function ae(I) {
          if (((B = !1), q(I), !R))
            if (a(v) !== null) ((R = !0), Oe(le));
            else {
              var U = a(S);
              U !== null && te(ae, U.startTime - I);
            }
        }
        function le(I, U) {
          ((R = !1), B && ((B = !1), P(je), (je = -1)), (W = !0));
          var O = D;
          try {
            for (
              q(U), k = a(v);
              k !== null && (!(k.expirationTime > U) || (I && !F()));
            ) {
              var _ = k.callback;
              if (typeof _ == "function") {
                ((k.callback = null), (D = k.priorityLevel));
                var b = _(k.expirationTime <= U);
                ((U = o.unstable_now()),
                  typeof b == "function"
                    ? (k.callback = b)
                    : k === a(v) && d(v),
                  q(U));
              } else d(v);
              k = a(v);
            }
            if (k !== null) var X = !0;
            else {
              var ie = a(S);
              (ie !== null && te(ae, ie.startTime - U), (X = !1));
            }
            return X;
          } finally {
            ((k = null), (D = O), (W = !1));
          }
        }
        var de = !1,
          _e = null,
          je = -1,
          Ee = 5,
          Re = -1;
        function F() {
          return !(o.unstable_now() - Re < Ee);
        }
        function A() {
          if (_e !== null) {
            var I = o.unstable_now();
            Re = I;
            var U = !0;
            try {
              U = _e(!0, I);
            } finally {
              U ? re() : ((de = !1), (_e = null));
            }
          } else de = !1;
        }
        var re;
        if (typeof Y == "function")
          re = function () {
            Y(A);
          };
        else if (typeof MessageChannel < "u") {
          var ve = new MessageChannel(),
            we = ve.port2;
          ((ve.port1.onmessage = A),
            (re = function () {
              we.postMessage(null);
            }));
        } else
          re = function () {
            E(A, 0);
          };
        function Oe(I) {
          ((_e = I), de || ((de = !0), re()));
        }
        function te(I, U) {
          je = E(function () {
            I(o.unstable_now());
          }, U);
        }
        ((o.unstable_IdlePriority = 5),
          (o.unstable_ImmediatePriority = 1),
          (o.unstable_LowPriority = 4),
          (o.unstable_NormalPriority = 3),
          (o.unstable_Profiling = null),
          (o.unstable_UserBlockingPriority = 2),
          (o.unstable_cancelCallback = function (I) {
            I.callback = null;
          }),
          (o.unstable_continueExecution = function () {
            R || W || ((R = !0), Oe(le));
          }),
          (o.unstable_forceFrameRate = function (I) {
            0 > I || 125 < I
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Ee = 0 < I ? Math.floor(1e3 / I) : 5);
          }),
          (o.unstable_getCurrentPriorityLevel = function () {
            return D;
          }),
          (o.unstable_getFirstCallbackNode = function () {
            return a(v);
          }),
          (o.unstable_next = function (I) {
            switch (D) {
              case 1:
              case 2:
              case 3:
                var U = 3;
                break;
              default:
                U = D;
            }
            var O = D;
            D = U;
            try {
              return I();
            } finally {
              D = O;
            }
          }),
          (o.unstable_pauseExecution = function () {}),
          (o.unstable_requestPaint = function () {}),
          (o.unstable_runWithPriority = function (I, U) {
            switch (I) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                I = 3;
            }
            var O = D;
            D = I;
            try {
              return U();
            } finally {
              D = O;
            }
          }),
          (o.unstable_scheduleCallback = function (I, U, O) {
            var _ = o.unstable_now();
            switch (
              (typeof O == "object" && O !== null
                ? ((O = O.delay),
                  (O = typeof O == "number" && 0 < O ? _ + O : _))
                : (O = _),
              I)
            ) {
              case 1:
                var b = -1;
                break;
              case 2:
                b = 250;
                break;
              case 5:
                b = 1073741823;
                break;
              case 4:
                b = 1e4;
                break;
              default:
                b = 5e3;
            }
            return (
              (b = O + b),
              (I = {
                id: j++,
                callback: U,
                priorityLevel: I,
                startTime: O,
                expirationTime: b,
                sortIndex: -1,
              }),
              O > _
                ? ((I.sortIndex = O),
                  u(S, I),
                  a(v) === null &&
                    I === a(S) &&
                    (B ? (P(je), (je = -1)) : (B = !0), te(ae, O - _)))
                : ((I.sortIndex = b), u(v, I), R || W || ((R = !0), Oe(le))),
              I
            );
          }),
          (o.unstable_shouldYield = F),
          (o.unstable_wrapCallback = function (I) {
            var U = D;
            return function () {
              var O = D;
              D = U;
              try {
                return I.apply(this, arguments);
              } finally {
                D = O;
              }
            };
          }));
      })(Bs)),
    Bs
  );
}
var Wc;
function Xp() {
  return (Wc || ((Wc = 1), (Es.exports = Kp())), Es.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $c;
function Qp() {
  if ($c) return mt;
  $c = 1;
  var o = Fs(),
    u = Xp();
  function a(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var d = new Set(),
    f = {};
  function p(e, t) {
    (h(e, t), h(e + "Capture", t));
  }
  function h(e, t) {
    for (f[e] = t, e = 0; e < t.length; e++) d.add(t[e]);
  }
  var x = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    v = Object.prototype.hasOwnProperty,
    S =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    j = {},
    k = {};
  function D(e) {
    return v.call(k, e)
      ? !0
      : v.call(j, e)
        ? !1
        : S.test(e)
          ? (k[e] = !0)
          : ((j[e] = !0), !1);
  }
  function W(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function R(e, t, n, r) {
    if (t === null || typeof t > "u" || W(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function B(e, t, n, r, l, s, c) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = s),
      (this.removeEmptyString = c));
  }
  var E = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      E[e] = new B(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      E[t] = new B(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        E[e] = new B(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      E[e] = new B(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        E[e] = new B(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      E[e] = new B(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      E[e] = new B(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      E[e] = new B(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      E[e] = new B(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var P = /[\-:]([a-z])/g;
  function Y(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(P, Y);
      E[t] = new B(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(P, Y);
        E[t] = new B(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(P, Y);
      E[t] = new B(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      E[e] = new B(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (E.xlinkHref = new B(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      E[e] = new B(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function q(e, t, n, r) {
    var l = E.hasOwnProperty(t) ? E[t] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (R(t, n, l, r) && (n = null),
      r || l === null
        ? D(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
          ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
          : ((t = l.attributeName),
            (r = l.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((l = l.type),
                (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
                r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var ae = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    le = Symbol.for("react.element"),
    de = Symbol.for("react.portal"),
    _e = Symbol.for("react.fragment"),
    je = Symbol.for("react.strict_mode"),
    Ee = Symbol.for("react.profiler"),
    Re = Symbol.for("react.provider"),
    F = Symbol.for("react.context"),
    A = Symbol.for("react.forward_ref"),
    re = Symbol.for("react.suspense"),
    ve = Symbol.for("react.suspense_list"),
    we = Symbol.for("react.memo"),
    Oe = Symbol.for("react.lazy"),
    te = Symbol.for("react.offscreen"),
    I = Symbol.iterator;
  function U(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (I && e[I]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var O = Object.assign,
    _;
  function b(e) {
    if (_ === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        _ = (t && t[1]) || "";
      }
    return (
      `
` +
      _ +
      e
    );
  }
  var X = !1;
  function ie(e, t) {
    if (!e || X) return "";
    X = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (M) {
            var r = M;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (M) {
            r = M;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (M) {
          r = M;
        }
        e();
      }
    } catch (M) {
      if (M && r && typeof M.stack == "string") {
        for (
          var l = M.stack.split(`
`),
            s = r.stack.split(`
`),
            c = l.length - 1,
            m = s.length - 1;
          1 <= c && 0 <= m && l[c] !== s[m];
        )
          m--;
        for (; 1 <= c && 0 <= m; c--, m--)
          if (l[c] !== s[m]) {
            if (c !== 1 || m !== 1)
              do
                if ((c--, m--, 0 > m || l[c] !== s[m])) {
                  var g =
                    `
` + l[c].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      g.includes("<anonymous>") &&
                      (g = g.replace("<anonymous>", e.displayName)),
                    g
                  );
                }
              while (1 <= c && 0 <= m);
            break;
          }
      }
    } finally {
      ((X = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : "") ? b(e) : "";
  }
  function me(e) {
    switch (e.tag) {
      case 5:
        return b(e.type);
      case 16:
        return b("Lazy");
      case 13:
        return b("Suspense");
      case 19:
        return b("SuspenseList");
      case 0:
      case 2:
      case 15:
        return ((e = ie(e.type, !1)), e);
      case 11:
        return ((e = ie(e.type.render, !1)), e);
      case 1:
        return ((e = ie(e.type, !0)), e);
      default:
        return "";
    }
  }
  function oe(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case _e:
        return "Fragment";
      case de:
        return "Portal";
      case Ee:
        return "Profiler";
      case je:
        return "StrictMode";
      case re:
        return "Suspense";
      case ve:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case F:
          return (e.displayName || "Context") + ".Consumer";
        case Re:
          return (e._context.displayName || "Context") + ".Provider";
        case A:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case we:
          return (
            (t = e.displayName || null),
            t !== null ? t : oe(e.type) || "Memo"
          );
        case Oe:
          ((t = e._payload), (e = e._init));
          try {
            return oe(e(t));
          } catch {}
      }
    return null;
  }
  function Ne(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return oe(t);
      case 8:
        return t === je ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function xe(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Be(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function ot(e) {
    var t = Be(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        s = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (c) {
            ((r = "" + c), s.call(this, c));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (c) {
            r = "" + c;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Xe(e) {
    e._valueTracker || (e._valueTracker = ot(e));
  }
  function kn(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = Be(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Nn(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Wn(e, t) {
    var n = t.checked;
    return O({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function pl(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    ((n = xe(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      }));
  }
  function ml(e, t) {
    ((t = t.checked), t != null && q(e, "checked", t, !1));
  }
  function yr(e, t) {
    ml(e, t);
    var n = xe(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    (t.hasOwnProperty("value")
      ? tt(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && tt(e, t.type, xe(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked));
  }
  function hl(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      ((t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n));
  }
  function tt(e, t, n) {
    (t !== "number" || Nn(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Z = Array.isArray;
  function Fe(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && r && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + xe(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Le(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(a(91));
    return O({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function At(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(a(92));
        if (Z(n)) {
          if (1 < n.length) throw Error(a(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ""), (n = t));
    }
    e._wrapperState = { initialValue: xe(n) };
  }
  function jn(e, t) {
    var n = xe(t.value),
      r = xe(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r));
  }
  function Cn(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function $n(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Mn(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? $n(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var gl,
    Js = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          gl = gl || document.createElement("div"),
            gl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = gl.firstChild;
          e.firstChild;
        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function vr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var xr = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Jd = ["Webkit", "ms", "Moz", "O"];
  Object.keys(xr).forEach(function (e) {
    Jd.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (xr[t] = xr[e]));
    });
  });
  function Ks(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (xr.hasOwnProperty(e) && xr[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Xs(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          l = Ks(n, t[n], r);
        (n === "float" && (n = "cssFloat"),
          r ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var Kd = O(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function Ii(e, t) {
    if (t) {
      if (Kd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(a(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(a(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(a(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(a(62));
    }
  }
  function Ti(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Hi = null;
  function zi(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Fi = null,
    On = null,
    Un = null;
  function Qs(e) {
    if ((e = Wr(e))) {
      if (typeof Fi != "function") throw Error(a(280));
      var t = e.stateNode;
      t && ((t = zl(t)), Fi(e.stateNode, e.type, t));
    }
  }
  function ea(e) {
    On ? (Un ? Un.push(e) : (Un = [e])) : (On = e);
  }
  function ta() {
    if (On) {
      var e = On,
        t = Un;
      if (((Un = On = null), Qs(e), t)) for (e = 0; e < t.length; e++) Qs(t[e]);
    }
  }
  function na(e, t) {
    return e(t);
  }
  function ra() {}
  var Wi = !1;
  function la(e, t, n) {
    if (Wi) return e(t, n);
    Wi = !0;
    try {
      return na(e, t, n);
    } finally {
      ((Wi = !1), (On !== null || Un !== null) && (ra(), ta()));
    }
  }
  function wr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = zl(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(a(231, t, typeof n));
    return n;
  }
  var $i = !1;
  if (x)
    try {
      var _r = {};
      (Object.defineProperty(_r, "passive", {
        get: function () {
          $i = !0;
        },
      }),
        window.addEventListener("test", _r, _r),
        window.removeEventListener("test", _r, _r));
    } catch {
      $i = !1;
    }
  function Xd(e, t, n, r, l, s, c, m, g) {
    var M = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, M);
    } catch (T) {
      this.onError(T);
    }
  }
  var Sr = !1,
    yl = null,
    vl = !1,
    Oi = null,
    Qd = {
      onError: function (e) {
        ((Sr = !0), (yl = e));
      },
    };
  function ef(e, t, n, r, l, s, c, m, g) {
    ((Sr = !1), (yl = null), Xd.apply(Qd, arguments));
  }
  function tf(e, t, n, r, l, s, c, m, g) {
    if ((ef.apply(this, arguments), Sr)) {
      if (Sr) {
        var M = yl;
        ((Sr = !1), (yl = null));
      } else throw Error(a(198));
      vl || ((vl = !0), (Oi = M));
    }
  }
  function En(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function ia(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function oa(e) {
    if (En(e) !== e) throw Error(a(188));
  }
  function nf(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = En(e)), t === null)) throw Error(a(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var s = l.alternate;
      if (s === null) {
        if (((r = l.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === s.child) {
        for (s = l.child; s; ) {
          if (s === n) return (oa(l), e);
          if (s === r) return (oa(l), t);
          s = s.sibling;
        }
        throw Error(a(188));
      }
      if (n.return !== r.return) ((n = l), (r = s));
      else {
        for (var c = !1, m = l.child; m; ) {
          if (m === n) {
            ((c = !0), (n = l), (r = s));
            break;
          }
          if (m === r) {
            ((c = !0), (r = l), (n = s));
            break;
          }
          m = m.sibling;
        }
        if (!c) {
          for (m = s.child; m; ) {
            if (m === n) {
              ((c = !0), (n = s), (r = l));
              break;
            }
            if (m === r) {
              ((c = !0), (r = s), (n = l));
              break;
            }
            m = m.sibling;
          }
          if (!c) throw Error(a(189));
        }
      }
      if (n.alternate !== r) throw Error(a(190));
    }
    if (n.tag !== 3) throw Error(a(188));
    return n.stateNode.current === n ? e : t;
  }
  function sa(e) {
    return ((e = nf(e)), e !== null ? aa(e) : null);
  }
  function aa(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = aa(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var ua = u.unstable_scheduleCallback,
    ca = u.unstable_cancelCallback,
    rf = u.unstable_shouldYield,
    lf = u.unstable_requestPaint,
    We = u.unstable_now,
    of = u.unstable_getCurrentPriorityLevel,
    Ui = u.unstable_ImmediatePriority,
    da = u.unstable_UserBlockingPriority,
    xl = u.unstable_NormalPriority,
    sf = u.unstable_LowPriority,
    fa = u.unstable_IdlePriority,
    wl = null,
    Lt = null;
  function af(e) {
    if (Lt && typeof Lt.onCommitFiberRoot == "function")
      try {
        Lt.onCommitFiberRoot(wl, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Ct = Math.clz32 ? Math.clz32 : df,
    uf = Math.log,
    cf = Math.LN2;
  function df(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((uf(e) / cf) | 0)) | 0);
  }
  var _l = 64,
    Sl = 4194304;
  function kr(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function kl(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      s = e.pingedLanes,
      c = n & 268435455;
    if (c !== 0) {
      var m = c & ~l;
      m !== 0 ? (r = kr(m)) : ((s &= c), s !== 0 && (r = kr(s)));
    } else ((c = n & ~l), c !== 0 ? (r = kr(c)) : s !== 0 && (r = kr(s)));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      (t & l) === 0 &&
      ((l = r & -r), (s = t & -t), l >= s || (l === 16 && (s & 4194240) !== 0))
    )
      return t;
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        ((n = 31 - Ct(t)), (l = 1 << n), (r |= e[n]), (t &= ~l));
    return r;
  }
  function ff(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function pf(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        s = e.pendingLanes;
      0 < s;
    ) {
      var c = 31 - Ct(s),
        m = 1 << c,
        g = l[c];
      (g === -1
        ? ((m & n) === 0 || (m & r) !== 0) && (l[c] = ff(m, t))
        : g <= t && (e.expiredLanes |= m),
        (s &= ~m));
    }
  }
  function Vi(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function pa() {
    var e = _l;
    return ((_l <<= 1), (_l & 4194240) === 0 && (_l = 64), e);
  }
  function Gi(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Nr(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Ct(t)),
      (e[t] = n));
  }
  function mf(e, t) {
    var n = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements));
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - Ct(n),
        s = 1 << l;
      ((t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~s));
    }
  }
  function Yi(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - Ct(n),
        l = 1 << r;
      ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
    }
  }
  var Ce = 0;
  function ma(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var ha,
    qi,
    ga,
    ya,
    va,
    Zi = !1,
    Nl = [],
    tn = null,
    nn = null,
    rn = null,
    jr = new Map(),
    Cr = new Map(),
    ln = [],
    hf =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function xa(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        tn = null;
        break;
      case "dragenter":
      case "dragleave":
        nn = null;
        break;
      case "mouseover":
      case "mouseout":
        rn = null;
        break;
      case "pointerover":
      case "pointerout":
        jr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Cr.delete(t.pointerId);
    }
  }
  function Mr(e, t, n, r, l, s) {
    return e === null || e.nativeEvent !== s
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: s,
          targetContainers: [l],
        }),
        t !== null && ((t = Wr(t)), t !== null && qi(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function gf(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return ((tn = Mr(tn, e, t, n, r, l)), !0);
      case "dragenter":
        return ((nn = Mr(nn, e, t, n, r, l)), !0);
      case "mouseover":
        return ((rn = Mr(rn, e, t, n, r, l)), !0);
      case "pointerover":
        var s = l.pointerId;
        return (jr.set(s, Mr(jr.get(s) || null, e, t, n, r, l)), !0);
      case "gotpointercapture":
        return (
          (s = l.pointerId),
          Cr.set(s, Mr(Cr.get(s) || null, e, t, n, r, l)),
          !0
        );
    }
    return !1;
  }
  function wa(e) {
    var t = Bn(e.target);
    if (t !== null) {
      var n = En(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = ia(n)), t !== null)) {
            ((e.blockedOn = t),
              va(e.priority, function () {
                ga(n);
              }));
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function jl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Ki(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        ((Hi = r), n.target.dispatchEvent(r), (Hi = null));
      } else return ((t = Wr(n)), t !== null && qi(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function _a(e, t, n) {
    jl(e) && n.delete(t);
  }
  function yf() {
    ((Zi = !1),
      tn !== null && jl(tn) && (tn = null),
      nn !== null && jl(nn) && (nn = null),
      rn !== null && jl(rn) && (rn = null),
      jr.forEach(_a),
      Cr.forEach(_a));
  }
  function Er(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Zi ||
        ((Zi = !0),
        u.unstable_scheduleCallback(u.unstable_NormalPriority, yf)));
  }
  function Br(e) {
    function t(l) {
      return Er(l, e);
    }
    if (0 < Nl.length) {
      Er(Nl[0], e);
      for (var n = 1; n < Nl.length; n++) {
        var r = Nl[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      tn !== null && Er(tn, e),
        nn !== null && Er(nn, e),
        rn !== null && Er(rn, e),
        jr.forEach(t),
        Cr.forEach(t),
        n = 0;
      n < ln.length;
      n++
    )
      ((r = ln[n]), r.blockedOn === e && (r.blockedOn = null));
    for (; 0 < ln.length && ((n = ln[0]), n.blockedOn === null); )
      (wa(n), n.blockedOn === null && ln.shift());
  }
  var Vn = ae.ReactCurrentBatchConfig,
    Cl = !0;
  function vf(e, t, n, r) {
    var l = Ce,
      s = Vn.transition;
    Vn.transition = null;
    try {
      ((Ce = 1), Ji(e, t, n, r));
    } finally {
      ((Ce = l), (Vn.transition = s));
    }
  }
  function xf(e, t, n, r) {
    var l = Ce,
      s = Vn.transition;
    Vn.transition = null;
    try {
      ((Ce = 4), Ji(e, t, n, r));
    } finally {
      ((Ce = l), (Vn.transition = s));
    }
  }
  function Ji(e, t, n, r) {
    if (Cl) {
      var l = Ki(e, t, n, r);
      if (l === null) (ho(e, t, r, Ml, n), xa(e, r));
      else if (gf(l, e, t, n, r)) r.stopPropagation();
      else if ((xa(e, r), t & 4 && -1 < hf.indexOf(e))) {
        for (; l !== null; ) {
          var s = Wr(l);
          if (
            (s !== null && ha(s),
            (s = Ki(e, t, n, r)),
            s === null && ho(e, t, r, Ml, n),
            s === l)
          )
            break;
          l = s;
        }
        l !== null && r.stopPropagation();
      } else ho(e, t, r, null, n);
    }
  }
  var Ml = null;
  function Ki(e, t, n, r) {
    if (((Ml = null), (e = zi(r)), (e = Bn(e)), e !== null))
      if (((t = En(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = ia(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Ml = e), null);
  }
  function Sa(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (of()) {
          case Ui:
            return 1;
          case da:
            return 4;
          case xl:
          case sf:
            return 16;
          case fa:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var on = null,
    Xi = null,
    El = null;
  function ka() {
    if (El) return El;
    var e,
      t = Xi,
      n = t.length,
      r,
      l = "value" in on ? on.value : on.textContent,
      s = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var c = n - e;
    for (r = 1; r <= c && t[n - r] === l[s - r]; r++);
    return (El = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Bl(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Pl() {
    return !0;
  }
  function Na() {
    return !1;
  }
  function ht(e) {
    function t(n, r, l, s, c) {
      ((this._reactName = n),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = s),
        (this.target = c),
        (this.currentTarget = null));
      for (var m in e)
        e.hasOwnProperty(m) && ((n = e[m]), (this[m] = n ? n(s) : s[m]));
      return (
        (this.isDefaultPrevented = (
          s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
        )
          ? Pl
          : Na),
        (this.isPropagationStopped = Na),
        this
      );
    }
    return (
      O(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Pl));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Pl));
        },
        persist: function () {},
        isPersistent: Pl,
      }),
      t
    );
  }
  var Gn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Qi = ht(Gn),
    Pr = O({}, Gn, { view: 0, detail: 0 }),
    wf = ht(Pr),
    eo,
    to,
    Dr,
    Dl = O({}, Pr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ro,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Dr &&
              (Dr && e.type === "mousemove"
                ? ((eo = e.screenX - Dr.screenX), (to = e.screenY - Dr.screenY))
                : (to = eo = 0),
              (Dr = e)),
            eo);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : to;
      },
    }),
    ja = ht(Dl),
    _f = O({}, Dl, { dataTransfer: 0 }),
    Sf = ht(_f),
    kf = O({}, Pr, { relatedTarget: 0 }),
    no = ht(kf),
    Nf = O({}, Gn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    jf = ht(Nf),
    Cf = O({}, Gn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Mf = ht(Cf),
    Ef = O({}, Gn, { data: 0 }),
    Ca = ht(Ef),
    Bf = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Pf = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Df = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function bf(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Df[e])
        ? !!t[e]
        : !1;
  }
  function ro() {
    return bf;
  }
  var Rf = O({}, Pr, {
      key: function (e) {
        if (e.key) {
          var t = Bf[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Bl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Pf[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ro,
      charCode: function (e) {
        return e.type === "keypress" ? Bl(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Bl(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    Af = ht(Rf),
    Lf = O({}, Dl, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Ma = ht(Lf),
    If = O({}, Pr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ro,
    }),
    Tf = ht(If),
    Hf = O({}, Gn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    zf = ht(Hf),
    Ff = O({}, Dl, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Wf = ht(Ff),
    $f = [9, 13, 27, 32],
    lo = x && "CompositionEvent" in window,
    br = null;
  x && "documentMode" in document && (br = document.documentMode);
  var Of = x && "TextEvent" in window && !br,
    Ea = x && (!lo || (br && 8 < br && 11 >= br)),
    Ba = " ",
    Pa = !1;
  function Da(e, t) {
    switch (e) {
      case "keyup":
        return $f.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ba(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var Yn = !1;
  function Uf(e, t) {
    switch (e) {
      case "compositionend":
        return ba(t);
      case "keypress":
        return t.which !== 32 ? null : ((Pa = !0), Ba);
      case "textInput":
        return ((e = t.data), e === Ba && Pa ? null : e);
      default:
        return null;
    }
  }
  function Vf(e, t) {
    if (Yn)
      return e === "compositionend" || (!lo && Da(e, t))
        ? ((e = ka()), (El = Xi = on = null), (Yn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Ea && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Gf = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Ra(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Gf[e.type] : t === "textarea";
  }
  function Aa(e, t, n, r) {
    (ea(r),
      (t = Il(t, "onChange")),
      0 < t.length &&
        ((n = new Qi("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t })));
  }
  var Rr = null,
    Ar = null;
  function Yf(e) {
    Xa(e, 0);
  }
  function bl(e) {
    var t = Xn(e);
    if (kn(t)) return e;
  }
  function qf(e, t) {
    if (e === "change") return t;
  }
  var La = !1;
  if (x) {
    var io;
    if (x) {
      var oo = "oninput" in document;
      if (!oo) {
        var Ia = document.createElement("div");
        (Ia.setAttribute("oninput", "return;"),
          (oo = typeof Ia.oninput == "function"));
      }
      io = oo;
    } else io = !1;
    La = io && (!document.documentMode || 9 < document.documentMode);
  }
  function Ta() {
    Rr && (Rr.detachEvent("onpropertychange", Ha), (Ar = Rr = null));
  }
  function Ha(e) {
    if (e.propertyName === "value" && bl(Ar)) {
      var t = [];
      (Aa(t, Ar, e, zi(e)), la(Yf, t));
    }
  }
  function Zf(e, t, n) {
    e === "focusin"
      ? (Ta(), (Rr = t), (Ar = n), Rr.attachEvent("onpropertychange", Ha))
      : e === "focusout" && Ta();
  }
  function Jf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return bl(Ar);
  }
  function Kf(e, t) {
    if (e === "click") return bl(t);
  }
  function Xf(e, t) {
    if (e === "input" || e === "change") return bl(t);
  }
  function Qf(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Mt = typeof Object.is == "function" ? Object.is : Qf;
  function Lr(e, t) {
    if (Mt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!v.call(t, l) || !Mt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function za(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Fa(e, t) {
    var n = za(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = za(n);
    }
  }
  function Wa(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Wa(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function $a() {
    for (var e = window, t = Nn(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Nn(e.document);
    }
    return t;
  }
  function so(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function ep(e) {
    var t = $a(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      Wa(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && so(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          ((n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length)));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            s = Math.min(r.start, l);
          ((r = r.end === void 0 ? s : Math.min(r.end, l)),
            !e.extend && s > r && ((l = r), (r = s), (s = l)),
            (l = Fa(n, s)));
          var c = Fa(n, r);
          l &&
            c &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== c.node ||
              e.focusOffset !== c.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            s > r
              ? (e.addRange(t), e.extend(c.node, c.offset))
              : (t.setEnd(c.node, c.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top));
    }
  }
  var tp = x && "documentMode" in document && 11 >= document.documentMode,
    qn = null,
    ao = null,
    Ir = null,
    uo = !1;
  function Oa(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    uo ||
      qn == null ||
      qn !== Nn(r) ||
      ((r = qn),
      "selectionStart" in r && so(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (Ir && Lr(Ir, r)) ||
        ((Ir = r),
        (r = Il(ao, "onSelect")),
        0 < r.length &&
          ((t = new Qi("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = qn))));
  }
  function Rl(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Zn = {
      animationend: Rl("Animation", "AnimationEnd"),
      animationiteration: Rl("Animation", "AnimationIteration"),
      animationstart: Rl("Animation", "AnimationStart"),
      transitionend: Rl("Transition", "TransitionEnd"),
    },
    co = {},
    Ua = {};
  x &&
    ((Ua = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Zn.animationend.animation,
      delete Zn.animationiteration.animation,
      delete Zn.animationstart.animation),
    "TransitionEvent" in window || delete Zn.transitionend.transition);
  function Al(e) {
    if (co[e]) return co[e];
    if (!Zn[e]) return e;
    var t = Zn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Ua) return (co[e] = t[n]);
    return e;
  }
  var Va = Al("animationend"),
    Ga = Al("animationiteration"),
    Ya = Al("animationstart"),
    qa = Al("transitionend"),
    Za = new Map(),
    Ja =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function sn(e, t) {
    (Za.set(e, t), p(t, [e]));
  }
  for (var fo = 0; fo < Ja.length; fo++) {
    var po = Ja[fo],
      np = po.toLowerCase(),
      rp = po[0].toUpperCase() + po.slice(1);
    sn(np, "on" + rp);
  }
  (sn(Va, "onAnimationEnd"),
    sn(Ga, "onAnimationIteration"),
    sn(Ya, "onAnimationStart"),
    sn("dblclick", "onDoubleClick"),
    sn("focusin", "onFocus"),
    sn("focusout", "onBlur"),
    sn(qa, "onTransitionEnd"),
    h("onMouseEnter", ["mouseout", "mouseover"]),
    h("onMouseLeave", ["mouseout", "mouseover"]),
    h("onPointerEnter", ["pointerout", "pointerover"]),
    h("onPointerLeave", ["pointerout", "pointerover"]),
    p(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    p(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    p("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    p(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    p(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    p(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var Tr =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    lp = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(Tr),
    );
  function Ka(e, t, n) {
    var r = e.type || "unknown-event";
    ((e.currentTarget = n), tf(r, t, void 0, e), (e.currentTarget = null));
  }
  function Xa(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.event;
      r = r.listeners;
      e: {
        var s = void 0;
        if (t)
          for (var c = r.length - 1; 0 <= c; c--) {
            var m = r[c],
              g = m.instance,
              M = m.currentTarget;
            if (((m = m.listener), g !== s && l.isPropagationStopped()))
              break e;
            (Ka(l, m, M), (s = g));
          }
        else
          for (c = 0; c < r.length; c++) {
            if (
              ((m = r[c]),
              (g = m.instance),
              (M = m.currentTarget),
              (m = m.listener),
              g !== s && l.isPropagationStopped())
            )
              break e;
            (Ka(l, m, M), (s = g));
          }
      }
    }
    if (vl) throw ((e = Oi), (vl = !1), (Oi = null), e);
  }
  function De(e, t) {
    var n = t[_o];
    n === void 0 && (n = t[_o] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Qa(t, e, 2, !1), n.add(r));
  }
  function mo(e, t, n) {
    var r = 0;
    (t && (r |= 4), Qa(n, e, r, t));
  }
  var Ll = "_reactListening" + Math.random().toString(36).slice(2);
  function Hr(e) {
    if (!e[Ll]) {
      ((e[Ll] = !0),
        d.forEach(function (n) {
          n !== "selectionchange" && (lp.has(n) || mo(n, !1, e), mo(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ll] || ((t[Ll] = !0), mo("selectionchange", !1, t));
    }
  }
  function Qa(e, t, n, r) {
    switch (Sa(t)) {
      case 1:
        var l = vf;
        break;
      case 4:
        l = xf;
        break;
      default:
        l = Ji;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !$i ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1));
  }
  function ho(e, t, n, r, l) {
    var s = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var c = r.tag;
        if (c === 3 || c === 4) {
          var m = r.stateNode.containerInfo;
          if (m === l || (m.nodeType === 8 && m.parentNode === l)) break;
          if (c === 4)
            for (c = r.return; c !== null; ) {
              var g = c.tag;
              if (
                (g === 3 || g === 4) &&
                ((g = c.stateNode.containerInfo),
                g === l || (g.nodeType === 8 && g.parentNode === l))
              )
                return;
              c = c.return;
            }
          for (; m !== null; ) {
            if (((c = Bn(m)), c === null)) return;
            if (((g = c.tag), g === 5 || g === 6)) {
              r = s = c;
              continue e;
            }
            m = m.parentNode;
          }
        }
        r = r.return;
      }
    la(function () {
      var M = s,
        T = zi(n),
        H = [];
      e: {
        var L = Za.get(e);
        if (L !== void 0) {
          var V = Qi,
            Q = e;
          switch (e) {
            case "keypress":
              if (Bl(n) === 0) break e;
            case "keydown":
            case "keyup":
              V = Af;
              break;
            case "focusin":
              ((Q = "focus"), (V = no));
              break;
            case "focusout":
              ((Q = "blur"), (V = no));
              break;
            case "beforeblur":
            case "afterblur":
              V = no;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              V = ja;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              V = Sf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              V = Tf;
              break;
            case Va:
            case Ga:
            case Ya:
              V = jf;
              break;
            case qa:
              V = zf;
              break;
            case "scroll":
              V = wf;
              break;
            case "wheel":
              V = Wf;
              break;
            case "copy":
            case "cut":
            case "paste":
              V = Mf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              V = Ma;
          }
          var ee = (t & 4) !== 0,
            $e = !ee && e === "scroll",
            N = ee ? (L !== null ? L + "Capture" : null) : L;
          ee = [];
          for (var w = M, C; w !== null; ) {
            C = w;
            var z = C.stateNode;
            if (
              (C.tag === 5 &&
                z !== null &&
                ((C = z),
                N !== null &&
                  ((z = wr(w, N)), z != null && ee.push(zr(w, z, C)))),
              $e)
            )
              break;
            w = w.return;
          }
          0 < ee.length &&
            ((L = new V(L, Q, null, n, T)),
            H.push({ event: L, listeners: ee }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((L = e === "mouseover" || e === "pointerover"),
            (V = e === "mouseout" || e === "pointerout"),
            L &&
              n !== Hi &&
              (Q = n.relatedTarget || n.fromElement) &&
              (Bn(Q) || Q[Vt]))
          )
            break e;
          if (
            (V || L) &&
            ((L =
              T.window === T
                ? T
                : (L = T.ownerDocument)
                  ? L.defaultView || L.parentWindow
                  : window),
            V
              ? ((Q = n.relatedTarget || n.toElement),
                (V = M),
                (Q = Q ? Bn(Q) : null),
                Q !== null &&
                  (($e = En(Q)), Q !== $e || (Q.tag !== 5 && Q.tag !== 6)) &&
                  (Q = null))
              : ((V = null), (Q = M)),
            V !== Q)
          ) {
            if (
              ((ee = ja),
              (z = "onMouseLeave"),
              (N = "onMouseEnter"),
              (w = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((ee = Ma),
                (z = "onPointerLeave"),
                (N = "onPointerEnter"),
                (w = "pointer")),
              ($e = V == null ? L : Xn(V)),
              (C = Q == null ? L : Xn(Q)),
              (L = new ee(z, w + "leave", V, n, T)),
              (L.target = $e),
              (L.relatedTarget = C),
              (z = null),
              Bn(T) === M &&
                ((ee = new ee(N, w + "enter", Q, n, T)),
                (ee.target = C),
                (ee.relatedTarget = $e),
                (z = ee)),
              ($e = z),
              V && Q)
            )
              t: {
                for (ee = V, N = Q, w = 0, C = ee; C; C = Jn(C)) w++;
                for (C = 0, z = N; z; z = Jn(z)) C++;
                for (; 0 < w - C; ) ((ee = Jn(ee)), w--);
                for (; 0 < C - w; ) ((N = Jn(N)), C--);
                for (; w--; ) {
                  if (ee === N || (N !== null && ee === N.alternate)) break t;
                  ((ee = Jn(ee)), (N = Jn(N)));
                }
                ee = null;
              }
            else ee = null;
            (V !== null && eu(H, L, V, ee, !1),
              Q !== null && $e !== null && eu(H, $e, Q, ee, !0));
          }
        }
        e: {
          if (
            ((L = M ? Xn(M) : window),
            (V = L.nodeName && L.nodeName.toLowerCase()),
            V === "select" || (V === "input" && L.type === "file"))
          )
            var ne = qf;
          else if (Ra(L))
            if (La) ne = Xf;
            else {
              ne = Jf;
              var ue = Zf;
            }
          else
            (V = L.nodeName) &&
              V.toLowerCase() === "input" &&
              (L.type === "checkbox" || L.type === "radio") &&
              (ne = Kf);
          if (ne && (ne = ne(e, M))) {
            Aa(H, ne, n, T);
            break e;
          }
          (ue && ue(e, L, M),
            e === "focusout" &&
              (ue = L._wrapperState) &&
              ue.controlled &&
              L.type === "number" &&
              tt(L, "number", L.value));
        }
        switch (((ue = M ? Xn(M) : window), e)) {
          case "focusin":
            (Ra(ue) || ue.contentEditable === "true") &&
              ((qn = ue), (ao = M), (Ir = null));
            break;
          case "focusout":
            Ir = ao = qn = null;
            break;
          case "mousedown":
            uo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((uo = !1), Oa(H, n, T));
            break;
          case "selectionchange":
            if (tp) break;
          case "keydown":
          case "keyup":
            Oa(H, n, T);
        }
        var ce;
        if (lo)
          e: {
            switch (e) {
              case "compositionstart":
                var fe = "onCompositionStart";
                break e;
              case "compositionend":
                fe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                fe = "onCompositionUpdate";
                break e;
            }
            fe = void 0;
          }
        else
          Yn
            ? Da(e, n) && (fe = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (fe = "onCompositionStart");
        (fe &&
          (Ea &&
            n.locale !== "ko" &&
            (Yn || fe !== "onCompositionStart"
              ? fe === "onCompositionEnd" && Yn && (ce = ka())
              : ((on = T),
                (Xi = "value" in on ? on.value : on.textContent),
                (Yn = !0))),
          (ue = Il(M, fe)),
          0 < ue.length &&
            ((fe = new Ca(fe, e, null, n, T)),
            H.push({ event: fe, listeners: ue }),
            ce
              ? (fe.data = ce)
              : ((ce = ba(n)), ce !== null && (fe.data = ce)))),
          (ce = Of ? Uf(e, n) : Vf(e, n)) &&
            ((M = Il(M, "onBeforeInput")),
            0 < M.length &&
              ((T = new Ca("onBeforeInput", "beforeinput", null, n, T)),
              H.push({ event: T, listeners: M }),
              (T.data = ce))));
      }
      Xa(H, t);
    });
  }
  function zr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Il(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e,
        s = l.stateNode;
      (l.tag === 5 &&
        s !== null &&
        ((l = s),
        (s = wr(e, n)),
        s != null && r.unshift(zr(e, s, l)),
        (s = wr(e, t)),
        s != null && r.push(zr(e, s, l))),
        (e = e.return));
    }
    return r;
  }
  function Jn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function eu(e, t, n, r, l) {
    for (var s = t._reactName, c = []; n !== null && n !== r; ) {
      var m = n,
        g = m.alternate,
        M = m.stateNode;
      if (g !== null && g === r) break;
      (m.tag === 5 &&
        M !== null &&
        ((m = M),
        l
          ? ((g = wr(n, s)), g != null && c.unshift(zr(n, g, m)))
          : l || ((g = wr(n, s)), g != null && c.push(zr(n, g, m)))),
        (n = n.return));
    }
    c.length !== 0 && e.push({ event: t, listeners: c });
  }
  var ip = /\r\n?/g,
    op = /\u0000|\uFFFD/g;
  function tu(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        ip,
        `
`,
      )
      .replace(op, "");
  }
  function Tl(e, t, n) {
    if (((t = tu(t)), tu(e) !== t && n)) throw Error(a(425));
  }
  function Hl() {}
  var go = null,
    yo = null;
  function vo(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var xo = typeof setTimeout == "function" ? setTimeout : void 0,
    sp = typeof clearTimeout == "function" ? clearTimeout : void 0,
    nu = typeof Promise == "function" ? Promise : void 0,
    ap =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof nu < "u"
          ? function (e) {
              return nu.resolve(null).then(e).catch(up);
            }
          : xo;
  function up(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function wo(e, t) {
    var n = t,
      r = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (r === 0) {
            (e.removeChild(l), Br(t));
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = l;
    } while (n);
    Br(t);
  }
  function an(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function ru(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Kn = Math.random().toString(36).slice(2),
    It = "__reactFiber$" + Kn,
    Fr = "__reactProps$" + Kn,
    Vt = "__reactContainer$" + Kn,
    _o = "__reactEvents$" + Kn,
    cp = "__reactListeners$" + Kn,
    dp = "__reactHandles$" + Kn;
  function Bn(e) {
    var t = e[It];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Vt] || n[It])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = ru(e); e !== null; ) {
            if ((n = e[It])) return n;
            e = ru(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function Wr(e) {
    return (
      (e = e[It] || e[Vt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Xn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(a(33));
  }
  function zl(e) {
    return e[Fr] || null;
  }
  var So = [],
    Qn = -1;
  function un(e) {
    return { current: e };
  }
  function be(e) {
    0 > Qn || ((e.current = So[Qn]), (So[Qn] = null), Qn--);
  }
  function Pe(e, t) {
    (Qn++, (So[Qn] = e.current), (e.current = t));
  }
  var cn = {},
    nt = un(cn),
    ut = un(!1),
    Pn = cn;
  function er(e, t) {
    var n = e.type.contextTypes;
    if (!n) return cn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      s;
    for (s in n) l[s] = t[s];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function ct(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function Fl() {
    (be(ut), be(nt));
  }
  function lu(e, t, n) {
    if (nt.current !== cn) throw Error(a(168));
    (Pe(nt, t), Pe(ut, n));
  }
  function iu(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(a(108, Ne(e) || "Unknown", l));
    return O({}, n, r);
  }
  function Wl(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        cn),
      (Pn = nt.current),
      Pe(nt, e),
      Pe(ut, ut.current),
      !0
    );
  }
  function ou(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(a(169));
    (n
      ? ((e = iu(e, t, Pn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        be(ut),
        be(nt),
        Pe(nt, e))
      : be(ut),
      Pe(ut, n));
  }
  var Gt = null,
    $l = !1,
    ko = !1;
  function su(e) {
    Gt === null ? (Gt = [e]) : Gt.push(e);
  }
  function fp(e) {
    (($l = !0), su(e));
  }
  function dn() {
    if (!ko && Gt !== null) {
      ko = !0;
      var e = 0,
        t = Ce;
      try {
        var n = Gt;
        for (Ce = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        ((Gt = null), ($l = !1));
      } catch (l) {
        throw (Gt !== null && (Gt = Gt.slice(e + 1)), ua(Ui, dn), l);
      } finally {
        ((Ce = t), (ko = !1));
      }
    }
    return null;
  }
  var tr = [],
    nr = 0,
    Ol = null,
    Ul = 0,
    xt = [],
    wt = 0,
    Dn = null,
    Yt = 1,
    qt = "";
  function bn(e, t) {
    ((tr[nr++] = Ul), (tr[nr++] = Ol), (Ol = e), (Ul = t));
  }
  function au(e, t, n) {
    ((xt[wt++] = Yt), (xt[wt++] = qt), (xt[wt++] = Dn), (Dn = e));
    var r = Yt;
    e = qt;
    var l = 32 - Ct(r) - 1;
    ((r &= ~(1 << l)), (n += 1));
    var s = 32 - Ct(t) + l;
    if (30 < s) {
      var c = l - (l % 5);
      ((s = (r & ((1 << c) - 1)).toString(32)),
        (r >>= c),
        (l -= c),
        (Yt = (1 << (32 - Ct(t) + l)) | (n << l) | r),
        (qt = s + e));
    } else ((Yt = (1 << s) | (n << l) | r), (qt = e));
  }
  function No(e) {
    e.return !== null && (bn(e, 1), au(e, 1, 0));
  }
  function jo(e) {
    for (; e === Ol; )
      ((Ol = tr[--nr]), (tr[nr] = null), (Ul = tr[--nr]), (tr[nr] = null));
    for (; e === Dn; )
      ((Dn = xt[--wt]),
        (xt[wt] = null),
        (qt = xt[--wt]),
        (xt[wt] = null),
        (Yt = xt[--wt]),
        (xt[wt] = null));
  }
  var gt = null,
    yt = null,
    Ae = !1,
    Et = null;
  function uu(e, t) {
    var n = Nt(5, null, null, 0);
    ((n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function cu(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (gt = e), (yt = an(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (gt = e), (yt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Dn !== null ? { id: Yt, overflow: qt } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = Nt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (gt = e),
              (yt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Co(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Mo(e) {
    if (Ae) {
      var t = yt;
      if (t) {
        var n = t;
        if (!cu(e, t)) {
          if (Co(e)) throw Error(a(418));
          t = an(n.nextSibling);
          var r = gt;
          t && cu(e, t)
            ? uu(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (Ae = !1), (gt = e));
        }
      } else {
        if (Co(e)) throw Error(a(418));
        ((e.flags = (e.flags & -4097) | 2), (Ae = !1), (gt = e));
      }
    }
  }
  function du(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;
    )
      e = e.return;
    gt = e;
  }
  function Vl(e) {
    if (e !== gt) return !1;
    if (!Ae) return (du(e), (Ae = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !vo(e.type, e.memoizedProps))),
      t && (t = yt))
    ) {
      if (Co(e)) throw (fu(), Error(a(418)));
      for (; t; ) (uu(e, t), (t = an(t.nextSibling)));
    }
    if ((du(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(a(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                yt = an(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        yt = null;
      }
    } else yt = gt ? an(e.stateNode.nextSibling) : null;
    return !0;
  }
  function fu() {
    for (var e = yt; e; ) e = an(e.nextSibling);
  }
  function rr() {
    ((yt = gt = null), (Ae = !1));
  }
  function Eo(e) {
    Et === null ? (Et = [e]) : Et.push(e);
  }
  var pp = ae.ReactCurrentBatchConfig;
  function $r(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(a(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(a(147, e));
        var l = r,
          s = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === s
          ? t.ref
          : ((t = function (c) {
              var m = l.refs;
              c === null ? delete m[s] : (m[s] = c);
            }),
            (t._stringRef = s),
            t);
      }
      if (typeof e != "string") throw Error(a(284));
      if (!n._owner) throw Error(a(290, e));
    }
    return e;
  }
  function Gl(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        a(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      )
    );
  }
  function pu(e) {
    var t = e._init;
    return t(e._payload);
  }
  function mu(e) {
    function t(N, w) {
      if (e) {
        var C = N.deletions;
        C === null ? ((N.deletions = [w]), (N.flags |= 16)) : C.push(w);
      }
    }
    function n(N, w) {
      if (!e) return null;
      for (; w !== null; ) (t(N, w), (w = w.sibling));
      return null;
    }
    function r(N, w) {
      for (N = new Map(); w !== null; )
        (w.key !== null ? N.set(w.key, w) : N.set(w.index, w), (w = w.sibling));
      return N;
    }
    function l(N, w) {
      return ((N = xn(N, w)), (N.index = 0), (N.sibling = null), N);
    }
    function s(N, w, C) {
      return (
        (N.index = C),
        e
          ? ((C = N.alternate),
            C !== null
              ? ((C = C.index), C < w ? ((N.flags |= 2), w) : C)
              : ((N.flags |= 2), w))
          : ((N.flags |= 1048576), w)
      );
    }
    function c(N) {
      return (e && N.alternate === null && (N.flags |= 2), N);
    }
    function m(N, w, C, z) {
      return w === null || w.tag !== 6
        ? ((w = xs(C, N.mode, z)), (w.return = N), w)
        : ((w = l(w, C)), (w.return = N), w);
    }
    function g(N, w, C, z) {
      var ne = C.type;
      return ne === _e
        ? T(N, w, C.props.children, z, C.key)
        : w !== null &&
            (w.elementType === ne ||
              (typeof ne == "object" &&
                ne !== null &&
                ne.$$typeof === Oe &&
                pu(ne) === w.type))
          ? ((z = l(w, C.props)), (z.ref = $r(N, w, C)), (z.return = N), z)
          : ((z = gi(C.type, C.key, C.props, null, N.mode, z)),
            (z.ref = $r(N, w, C)),
            (z.return = N),
            z);
    }
    function M(N, w, C, z) {
      return w === null ||
        w.tag !== 4 ||
        w.stateNode.containerInfo !== C.containerInfo ||
        w.stateNode.implementation !== C.implementation
        ? ((w = ws(C, N.mode, z)), (w.return = N), w)
        : ((w = l(w, C.children || [])), (w.return = N), w);
    }
    function T(N, w, C, z, ne) {
      return w === null || w.tag !== 7
        ? ((w = Fn(C, N.mode, z, ne)), (w.return = N), w)
        : ((w = l(w, C)), (w.return = N), w);
    }
    function H(N, w, C) {
      if ((typeof w == "string" && w !== "") || typeof w == "number")
        return ((w = xs("" + w, N.mode, C)), (w.return = N), w);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case le:
            return (
              (C = gi(w.type, w.key, w.props, null, N.mode, C)),
              (C.ref = $r(N, null, w)),
              (C.return = N),
              C
            );
          case de:
            return ((w = ws(w, N.mode, C)), (w.return = N), w);
          case Oe:
            var z = w._init;
            return H(N, z(w._payload), C);
        }
        if (Z(w) || U(w))
          return ((w = Fn(w, N.mode, C, null)), (w.return = N), w);
        Gl(N, w);
      }
      return null;
    }
    function L(N, w, C, z) {
      var ne = w !== null ? w.key : null;
      if ((typeof C == "string" && C !== "") || typeof C == "number")
        return ne !== null ? null : m(N, w, "" + C, z);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case le:
            return C.key === ne ? g(N, w, C, z) : null;
          case de:
            return C.key === ne ? M(N, w, C, z) : null;
          case Oe:
            return ((ne = C._init), L(N, w, ne(C._payload), z));
        }
        if (Z(C) || U(C)) return ne !== null ? null : T(N, w, C, z, null);
        Gl(N, C);
      }
      return null;
    }
    function V(N, w, C, z, ne) {
      if ((typeof z == "string" && z !== "") || typeof z == "number")
        return ((N = N.get(C) || null), m(w, N, "" + z, ne));
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case le:
            return (
              (N = N.get(z.key === null ? C : z.key) || null),
              g(w, N, z, ne)
            );
          case de:
            return (
              (N = N.get(z.key === null ? C : z.key) || null),
              M(w, N, z, ne)
            );
          case Oe:
            var ue = z._init;
            return V(N, w, C, ue(z._payload), ne);
        }
        if (Z(z) || U(z)) return ((N = N.get(C) || null), T(w, N, z, ne, null));
        Gl(w, z);
      }
      return null;
    }
    function Q(N, w, C, z) {
      for (
        var ne = null, ue = null, ce = w, fe = (w = 0), Ze = null;
        ce !== null && fe < C.length;
        fe++
      ) {
        ce.index > fe ? ((Ze = ce), (ce = null)) : (Ze = ce.sibling);
        var ke = L(N, ce, C[fe], z);
        if (ke === null) {
          ce === null && (ce = Ze);
          break;
        }
        (e && ce && ke.alternate === null && t(N, ce),
          (w = s(ke, w, fe)),
          ue === null ? (ne = ke) : (ue.sibling = ke),
          (ue = ke),
          (ce = Ze));
      }
      if (fe === C.length) return (n(N, ce), Ae && bn(N, fe), ne);
      if (ce === null) {
        for (; fe < C.length; fe++)
          ((ce = H(N, C[fe], z)),
            ce !== null &&
              ((w = s(ce, w, fe)),
              ue === null ? (ne = ce) : (ue.sibling = ce),
              (ue = ce)));
        return (Ae && bn(N, fe), ne);
      }
      for (ce = r(N, ce); fe < C.length; fe++)
        ((Ze = V(ce, N, fe, C[fe], z)),
          Ze !== null &&
            (e &&
              Ze.alternate !== null &&
              ce.delete(Ze.key === null ? fe : Ze.key),
            (w = s(Ze, w, fe)),
            ue === null ? (ne = Ze) : (ue.sibling = Ze),
            (ue = Ze)));
      return (
        e &&
          ce.forEach(function (wn) {
            return t(N, wn);
          }),
        Ae && bn(N, fe),
        ne
      );
    }
    function ee(N, w, C, z) {
      var ne = U(C);
      if (typeof ne != "function") throw Error(a(150));
      if (((C = ne.call(C)), C == null)) throw Error(a(151));
      for (
        var ue = (ne = null), ce = w, fe = (w = 0), Ze = null, ke = C.next();
        ce !== null && !ke.done;
        fe++, ke = C.next()
      ) {
        ce.index > fe ? ((Ze = ce), (ce = null)) : (Ze = ce.sibling);
        var wn = L(N, ce, ke.value, z);
        if (wn === null) {
          ce === null && (ce = Ze);
          break;
        }
        (e && ce && wn.alternate === null && t(N, ce),
          (w = s(wn, w, fe)),
          ue === null ? (ne = wn) : (ue.sibling = wn),
          (ue = wn),
          (ce = Ze));
      }
      if (ke.done) return (n(N, ce), Ae && bn(N, fe), ne);
      if (ce === null) {
        for (; !ke.done; fe++, ke = C.next())
          ((ke = H(N, ke.value, z)),
            ke !== null &&
              ((w = s(ke, w, fe)),
              ue === null ? (ne = ke) : (ue.sibling = ke),
              (ue = ke)));
        return (Ae && bn(N, fe), ne);
      }
      for (ce = r(N, ce); !ke.done; fe++, ke = C.next())
        ((ke = V(ce, N, fe, ke.value, z)),
          ke !== null &&
            (e &&
              ke.alternate !== null &&
              ce.delete(ke.key === null ? fe : ke.key),
            (w = s(ke, w, fe)),
            ue === null ? (ne = ke) : (ue.sibling = ke),
            (ue = ke)));
      return (
        e &&
          ce.forEach(function (Gp) {
            return t(N, Gp);
          }),
        Ae && bn(N, fe),
        ne
      );
    }
    function $e(N, w, C, z) {
      if (
        (typeof C == "object" &&
          C !== null &&
          C.type === _e &&
          C.key === null &&
          (C = C.props.children),
        typeof C == "object" && C !== null)
      ) {
        switch (C.$$typeof) {
          case le:
            e: {
              for (var ne = C.key, ue = w; ue !== null; ) {
                if (ue.key === ne) {
                  if (((ne = C.type), ne === _e)) {
                    if (ue.tag === 7) {
                      (n(N, ue.sibling),
                        (w = l(ue, C.props.children)),
                        (w.return = N),
                        (N = w));
                      break e;
                    }
                  } else if (
                    ue.elementType === ne ||
                    (typeof ne == "object" &&
                      ne !== null &&
                      ne.$$typeof === Oe &&
                      pu(ne) === ue.type)
                  ) {
                    (n(N, ue.sibling),
                      (w = l(ue, C.props)),
                      (w.ref = $r(N, ue, C)),
                      (w.return = N),
                      (N = w));
                    break e;
                  }
                  n(N, ue);
                  break;
                } else t(N, ue);
                ue = ue.sibling;
              }
              C.type === _e
                ? ((w = Fn(C.props.children, N.mode, z, C.key)),
                  (w.return = N),
                  (N = w))
                : ((z = gi(C.type, C.key, C.props, null, N.mode, z)),
                  (z.ref = $r(N, w, C)),
                  (z.return = N),
                  (N = z));
            }
            return c(N);
          case de:
            e: {
              for (ue = C.key; w !== null; ) {
                if (w.key === ue)
                  if (
                    w.tag === 4 &&
                    w.stateNode.containerInfo === C.containerInfo &&
                    w.stateNode.implementation === C.implementation
                  ) {
                    (n(N, w.sibling),
                      (w = l(w, C.children || [])),
                      (w.return = N),
                      (N = w));
                    break e;
                  } else {
                    n(N, w);
                    break;
                  }
                else t(N, w);
                w = w.sibling;
              }
              ((w = ws(C, N.mode, z)), (w.return = N), (N = w));
            }
            return c(N);
          case Oe:
            return ((ue = C._init), $e(N, w, ue(C._payload), z));
        }
        if (Z(C)) return Q(N, w, C, z);
        if (U(C)) return ee(N, w, C, z);
        Gl(N, C);
      }
      return (typeof C == "string" && C !== "") || typeof C == "number"
        ? ((C = "" + C),
          w !== null && w.tag === 6
            ? (n(N, w.sibling), (w = l(w, C)), (w.return = N), (N = w))
            : (n(N, w), (w = xs(C, N.mode, z)), (w.return = N), (N = w)),
          c(N))
        : n(N, w);
    }
    return $e;
  }
  var lr = mu(!0),
    hu = mu(!1),
    Yl = un(null),
    ql = null,
    ir = null,
    Bo = null;
  function Po() {
    Bo = ir = ql = null;
  }
  function Do(e) {
    var t = Yl.current;
    (be(Yl), (e._currentValue = t));
  }
  function bo(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function or(e, t) {
    ((ql = e),
      (Bo = ir = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (dt = !0), (e.firstContext = null)));
  }
  function _t(e) {
    var t = e._currentValue;
    if (Bo !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), ir === null)) {
        if (ql === null) throw Error(a(308));
        ((ir = e), (ql.dependencies = { lanes: 0, firstContext: e }));
      } else ir = ir.next = e;
    return t;
  }
  var Rn = null;
  function Ro(e) {
    Rn === null ? (Rn = [e]) : Rn.push(e);
  }
  function gu(e, t, n, r) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), Ro(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      Zt(e, r)
    );
  }
  function Zt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      ((e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return));
    return n.tag === 3 ? n.stateNode : null;
  }
  var fn = !1;
  function Ao(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function yu(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        }));
  }
  function Jt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function pn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (Se & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (r.pending = t),
        Zt(e, n)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((t.next = t), Ro(r)) : ((t.next = l.next), (l.next = t)),
      (r.interleaved = t),
      Zt(e, n)
    );
  }
  function Zl(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Yi(e, n));
    }
  }
  function vu(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var l = null,
        s = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var c = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          (s === null ? (l = s = c) : (s = s.next = c), (n = n.next));
        } while (n !== null);
        s === null ? (l = s = t) : (s = s.next = t);
      } else l = s = t;
      ((n = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: s,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  function Jl(e, t, n, r) {
    var l = e.updateQueue;
    fn = !1;
    var s = l.firstBaseUpdate,
      c = l.lastBaseUpdate,
      m = l.shared.pending;
    if (m !== null) {
      l.shared.pending = null;
      var g = m,
        M = g.next;
      ((g.next = null), c === null ? (s = M) : (c.next = M), (c = g));
      var T = e.alternate;
      T !== null &&
        ((T = T.updateQueue),
        (m = T.lastBaseUpdate),
        m !== c &&
          (m === null ? (T.firstBaseUpdate = M) : (m.next = M),
          (T.lastBaseUpdate = g)));
    }
    if (s !== null) {
      var H = l.baseState;
      ((c = 0), (T = M = g = null), (m = s));
      do {
        var L = m.lane,
          V = m.eventTime;
        if ((r & L) === L) {
          T !== null &&
            (T = T.next =
              {
                eventTime: V,
                lane: 0,
                tag: m.tag,
                payload: m.payload,
                callback: m.callback,
                next: null,
              });
          e: {
            var Q = e,
              ee = m;
            switch (((L = t), (V = n), ee.tag)) {
              case 1:
                if (((Q = ee.payload), typeof Q == "function")) {
                  H = Q.call(V, H, L);
                  break e;
                }
                H = Q;
                break e;
              case 3:
                Q.flags = (Q.flags & -65537) | 128;
              case 0:
                if (
                  ((Q = ee.payload),
                  (L = typeof Q == "function" ? Q.call(V, H, L) : Q),
                  L == null)
                )
                  break e;
                H = O({}, H, L);
                break e;
              case 2:
                fn = !0;
            }
          }
          m.callback !== null &&
            m.lane !== 0 &&
            ((e.flags |= 64),
            (L = l.effects),
            L === null ? (l.effects = [m]) : L.push(m));
        } else
          ((V = {
            eventTime: V,
            lane: L,
            tag: m.tag,
            payload: m.payload,
            callback: m.callback,
            next: null,
          }),
            T === null ? ((M = T = V), (g = H)) : (T = T.next = V),
            (c |= L));
        if (((m = m.next), m === null)) {
          if (((m = l.shared.pending), m === null)) break;
          ((L = m),
            (m = L.next),
            (L.next = null),
            (l.lastBaseUpdate = L),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (T === null && (g = H),
        (l.baseState = g),
        (l.firstBaseUpdate = M),
        (l.lastBaseUpdate = T),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((c |= l.lane), (l = l.next));
        while (l !== t);
      } else s === null && (l.shared.lanes = 0);
      ((In |= c), (e.lanes = c), (e.memoizedState = H));
    }
  }
  function xu(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = n), typeof l != "function"))
            throw Error(a(191, l));
          l.call(r);
        }
      }
  }
  var Or = {},
    Tt = un(Or),
    Ur = un(Or),
    Vr = un(Or);
  function An(e) {
    if (e === Or) throw Error(a(174));
    return e;
  }
  function Lo(e, t) {
    switch ((Pe(Vr, t), Pe(Ur, e), Pe(Tt, Or), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Mn(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Mn(t, e)));
    }
    (be(Tt), Pe(Tt, t));
  }
  function sr() {
    (be(Tt), be(Ur), be(Vr));
  }
  function wu(e) {
    An(Vr.current);
    var t = An(Tt.current),
      n = Mn(t, e.type);
    t !== n && (Pe(Ur, e), Pe(Tt, n));
  }
  function Io(e) {
    Ur.current === e && (be(Tt), be(Ur));
  }
  var Ie = un(0);
  function Kl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var To = [];
  function Ho() {
    for (var e = 0; e < To.length; e++)
      To[e]._workInProgressVersionPrimary = null;
    To.length = 0;
  }
  var Xl = ae.ReactCurrentDispatcher,
    zo = ae.ReactCurrentBatchConfig,
    Ln = 0,
    Te = null,
    Ve = null,
    Ye = null,
    Ql = !1,
    Gr = !1,
    Yr = 0,
    mp = 0;
  function rt() {
    throw Error(a(321));
  }
  function Fo(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Mt(e[n], t[n])) return !1;
    return !0;
  }
  function Wo(e, t, n, r, l, s) {
    if (
      ((Ln = s),
      (Te = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Xl.current = e === null || e.memoizedState === null ? vp : xp),
      (e = n(r, l)),
      Gr)
    ) {
      s = 0;
      do {
        if (((Gr = !1), (Yr = 0), 25 <= s)) throw Error(a(301));
        ((s += 1),
          (Ye = Ve = null),
          (t.updateQueue = null),
          (Xl.current = wp),
          (e = n(r, l)));
      } while (Gr);
    }
    if (
      ((Xl.current = ni),
      (t = Ve !== null && Ve.next !== null),
      (Ln = 0),
      (Ye = Ve = Te = null),
      (Ql = !1),
      t)
    )
      throw Error(a(300));
    return e;
  }
  function $o() {
    var e = Yr !== 0;
    return ((Yr = 0), e);
  }
  function Ht() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Ye === null ? (Te.memoizedState = Ye = e) : (Ye = Ye.next = e), Ye);
  }
  function St() {
    if (Ve === null) {
      var e = Te.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ve.next;
    var t = Ye === null ? Te.memoizedState : Ye.next;
    if (t !== null) ((Ye = t), (Ve = e));
    else {
      if (e === null) throw Error(a(310));
      ((Ve = e),
        (e = {
          memoizedState: Ve.memoizedState,
          baseState: Ve.baseState,
          baseQueue: Ve.baseQueue,
          queue: Ve.queue,
          next: null,
        }),
        Ye === null ? (Te.memoizedState = Ye = e) : (Ye = Ye.next = e));
    }
    return Ye;
  }
  function qr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Oo(e) {
    var t = St(),
      n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = Ve,
      l = r.baseQueue,
      s = n.pending;
    if (s !== null) {
      if (l !== null) {
        var c = l.next;
        ((l.next = s.next), (s.next = c));
      }
      ((r.baseQueue = l = s), (n.pending = null));
    }
    if (l !== null) {
      ((s = l.next), (r = r.baseState));
      var m = (c = null),
        g = null,
        M = s;
      do {
        var T = M.lane;
        if ((Ln & T) === T)
          (g !== null &&
            (g = g.next =
              {
                lane: 0,
                action: M.action,
                hasEagerState: M.hasEagerState,
                eagerState: M.eagerState,
                next: null,
              }),
            (r = M.hasEagerState ? M.eagerState : e(r, M.action)));
        else {
          var H = {
            lane: T,
            action: M.action,
            hasEagerState: M.hasEagerState,
            eagerState: M.eagerState,
            next: null,
          };
          (g === null ? ((m = g = H), (c = r)) : (g = g.next = H),
            (Te.lanes |= T),
            (In |= T));
        }
        M = M.next;
      } while (M !== null && M !== s);
      (g === null ? (c = r) : (g.next = m),
        Mt(r, t.memoizedState) || (dt = !0),
        (t.memoizedState = r),
        (t.baseState = c),
        (t.baseQueue = g),
        (n.lastRenderedState = r));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((s = l.lane), (Te.lanes |= s), (In |= s), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Uo(e) {
    var t = St(),
      n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      l = n.pending,
      s = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var c = (l = l.next);
      do ((s = e(s, c.action)), (c = c.next));
      while (c !== l);
      (Mt(s, t.memoizedState) || (dt = !0),
        (t.memoizedState = s),
        t.baseQueue === null && (t.baseState = s),
        (n.lastRenderedState = s));
    }
    return [s, r];
  }
  function _u() {}
  function Su(e, t) {
    var n = Te,
      r = St(),
      l = t(),
      s = !Mt(r.memoizedState, l);
    if (
      (s && ((r.memoizedState = l), (dt = !0)),
      (r = r.queue),
      Vo(ju.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || s || (Ye !== null && Ye.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Zr(9, Nu.bind(null, n, r, l, t), void 0, null),
        qe === null)
      )
        throw Error(a(349));
      (Ln & 30) !== 0 || ku(n, t, l);
    }
    return l;
  }
  function ku(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Te.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Te.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function Nu(e, t, n, r) {
    ((t.value = n), (t.getSnapshot = r), Cu(t) && Mu(e));
  }
  function ju(e, t, n) {
    return n(function () {
      Cu(t) && Mu(e);
    });
  }
  function Cu(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Mt(e, n);
    } catch {
      return !0;
    }
  }
  function Mu(e) {
    var t = Zt(e, 1);
    t !== null && bt(t, e, 1, -1);
  }
  function Eu(e) {
    var t = Ht();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: qr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = yp.bind(null, Te, e)),
      [t.memoizedState, e]
    );
  }
  function Zr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = Te.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Te.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Bu() {
    return St().memoizedState;
  }
  function ei(e, t, n, r) {
    var l = Ht();
    ((Te.flags |= e),
      (l.memoizedState = Zr(1 | t, n, void 0, r === void 0 ? null : r)));
  }
  function ti(e, t, n, r) {
    var l = St();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (Ve !== null) {
      var c = Ve.memoizedState;
      if (((s = c.destroy), r !== null && Fo(r, c.deps))) {
        l.memoizedState = Zr(t, n, s, r);
        return;
      }
    }
    ((Te.flags |= e), (l.memoizedState = Zr(1 | t, n, s, r)));
  }
  function Pu(e, t) {
    return ei(8390656, 8, e, t);
  }
  function Vo(e, t) {
    return ti(2048, 8, e, t);
  }
  function Du(e, t) {
    return ti(4, 2, e, t);
  }
  function bu(e, t) {
    return ti(4, 4, e, t);
  }
  function Ru(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Au(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null),
      ti(4, 4, Ru.bind(null, t, e), n)
    );
  }
  function Go() {}
  function Lu(e, t) {
    var n = St();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Fo(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Iu(e, t) {
    var n = St();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Fo(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Tu(e, t, n) {
    return (Ln & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (dt = !0)), (e.memoizedState = n))
      : (Mt(n, t) ||
          ((n = pa()), (Te.lanes |= n), (In |= n), (e.baseState = !0)),
        t);
  }
  function hp(e, t) {
    var n = Ce;
    ((Ce = n !== 0 && 4 > n ? n : 4), e(!0));
    var r = zo.transition;
    zo.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((Ce = n), (zo.transition = r));
    }
  }
  function Hu() {
    return St().memoizedState;
  }
  function gp(e, t, n) {
    var r = yn(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      zu(e))
    )
      Fu(t, n);
    else if (((n = gu(e, t, n, r)), n !== null)) {
      var l = at();
      (bt(n, e, r, l), Wu(n, t, r));
    }
  }
  function yp(e, t, n) {
    var r = yn(e),
      l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (zu(e)) Fu(t, l);
    else {
      var s = e.alternate;
      if (
        e.lanes === 0 &&
        (s === null || s.lanes === 0) &&
        ((s = t.lastRenderedReducer), s !== null)
      )
        try {
          var c = t.lastRenderedState,
            m = s(c, n);
          if (((l.hasEagerState = !0), (l.eagerState = m), Mt(m, c))) {
            var g = t.interleaved;
            (g === null
              ? ((l.next = l), Ro(t))
              : ((l.next = g.next), (g.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = gu(e, t, l, r)),
        n !== null && ((l = at()), bt(n, e, r, l), Wu(n, t, r)));
    }
  }
  function zu(e) {
    var t = e.alternate;
    return e === Te || (t !== null && t === Te);
  }
  function Fu(e, t) {
    Gr = Ql = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function Wu(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Yi(e, n));
    }
  }
  var ni = {
      readContext: _t,
      useCallback: rt,
      useContext: rt,
      useEffect: rt,
      useImperativeHandle: rt,
      useInsertionEffect: rt,
      useLayoutEffect: rt,
      useMemo: rt,
      useReducer: rt,
      useRef: rt,
      useState: rt,
      useDebugValue: rt,
      useDeferredValue: rt,
      useTransition: rt,
      useMutableSource: rt,
      useSyncExternalStore: rt,
      useId: rt,
      unstable_isNewReconciler: !1,
    },
    vp = {
      readContext: _t,
      useCallback: function (e, t) {
        return ((Ht().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: _t,
      useEffect: Pu,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          ei(4194308, 4, Ru.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return ei(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return ei(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Ht();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = Ht();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = gp.bind(null, Te, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Ht();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: Eu,
      useDebugValue: Go,
      useDeferredValue: function (e) {
        return (Ht().memoizedState = e);
      },
      useTransition: function () {
        var e = Eu(!1),
          t = e[0];
        return ((e = hp.bind(null, e[1])), (Ht().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = Te,
          l = Ht();
        if (Ae) {
          if (n === void 0) throw Error(a(407));
          n = n();
        } else {
          if (((n = t()), qe === null)) throw Error(a(349));
          (Ln & 30) !== 0 || ku(r, t, n);
        }
        l.memoizedState = n;
        var s = { value: n, getSnapshot: t };
        return (
          (l.queue = s),
          Pu(ju.bind(null, r, s, e), [e]),
          (r.flags |= 2048),
          Zr(9, Nu.bind(null, r, s, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Ht(),
          t = qe.identifierPrefix;
        if (Ae) {
          var n = qt,
            r = Yt;
          ((n = (r & ~(1 << (32 - Ct(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = Yr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = mp++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    xp = {
      readContext: _t,
      useCallback: Lu,
      useContext: _t,
      useEffect: Vo,
      useImperativeHandle: Au,
      useInsertionEffect: Du,
      useLayoutEffect: bu,
      useMemo: Iu,
      useReducer: Oo,
      useRef: Bu,
      useState: function () {
        return Oo(qr);
      },
      useDebugValue: Go,
      useDeferredValue: function (e) {
        var t = St();
        return Tu(t, Ve.memoizedState, e);
      },
      useTransition: function () {
        var e = Oo(qr)[0],
          t = St().memoizedState;
        return [e, t];
      },
      useMutableSource: _u,
      useSyncExternalStore: Su,
      useId: Hu,
      unstable_isNewReconciler: !1,
    },
    wp = {
      readContext: _t,
      useCallback: Lu,
      useContext: _t,
      useEffect: Vo,
      useImperativeHandle: Au,
      useInsertionEffect: Du,
      useLayoutEffect: bu,
      useMemo: Iu,
      useReducer: Uo,
      useRef: Bu,
      useState: function () {
        return Uo(qr);
      },
      useDebugValue: Go,
      useDeferredValue: function (e) {
        var t = St();
        return Ve === null ? (t.memoizedState = e) : Tu(t, Ve.memoizedState, e);
      },
      useTransition: function () {
        var e = Uo(qr)[0],
          t = St().memoizedState;
        return [e, t];
      },
      useMutableSource: _u,
      useSyncExternalStore: Su,
      useId: Hu,
      unstable_isNewReconciler: !1,
    };
  function Bt(e, t) {
    if (e && e.defaultProps) {
      ((t = O({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Yo(e, t, n, r) {
    ((t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : O({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var ri = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? En(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = at(),
        l = yn(e),
        s = Jt(r, l);
      ((s.payload = t),
        n != null && (s.callback = n),
        (t = pn(e, s, l)),
        t !== null && (bt(t, e, l, r), Zl(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = at(),
        l = yn(e),
        s = Jt(r, l);
      ((s.tag = 1),
        (s.payload = t),
        n != null && (s.callback = n),
        (t = pn(e, s, l)),
        t !== null && (bt(t, e, l, r), Zl(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = at(),
        r = yn(e),
        l = Jt(n, r);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = pn(e, l, r)),
        t !== null && (bt(t, e, r, n), Zl(t, e, r)));
    },
  };
  function $u(e, t, n, r, l, s, c) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, s, c)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Lr(n, r) || !Lr(l, s)
          : !0
    );
  }
  function Ou(e, t, n) {
    var r = !1,
      l = cn,
      s = t.contextType;
    return (
      typeof s == "object" && s !== null
        ? (s = _t(s))
        : ((l = ct(t) ? Pn : nt.current),
          (r = t.contextTypes),
          (s = (r = r != null) ? er(e, l) : cn)),
      (t = new t(n, s)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = ri),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = s)),
      t
    );
  }
  function Uu(e, t, n, r) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && ri.enqueueReplaceState(t, t.state, null));
  }
  function qo(e, t, n, r) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), Ao(e));
    var s = t.contextType;
    (typeof s == "object" && s !== null
      ? (l.context = _t(s))
      : ((s = ct(t) ? Pn : nt.current), (l.context = er(e, s))),
      (l.state = e.memoizedState),
      (s = t.getDerivedStateFromProps),
      typeof s == "function" && (Yo(e, t, s, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && ri.enqueueReplaceState(l, l.state, null),
        Jl(e, n, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function ar(e, t) {
    try {
      var n = "",
        r = t;
      do ((n += me(r)), (r = r.return));
      while (r);
      var l = n;
    } catch (s) {
      l =
        `
Error generating stack: ` +
        s.message +
        `
` +
        s.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Zo(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Jo(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var _p = typeof WeakMap == "function" ? WeakMap : Map;
  function Vu(e, t, n) {
    ((n = Jt(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var r = t.value;
    return (
      (n.callback = function () {
        (ci || ((ci = !0), (ds = r)), Jo(e, t));
      }),
      n
    );
  }
  function Gu(e, t, n) {
    ((n = Jt(-1, n)), (n.tag = 3));
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      ((n.payload = function () {
        return r(l);
      }),
        (n.callback = function () {
          Jo(e, t);
        }));
    }
    var s = e.stateNode;
    return (
      s !== null &&
        typeof s.componentDidCatch == "function" &&
        (n.callback = function () {
          (Jo(e, t),
            typeof r != "function" &&
              (hn === null ? (hn = new Set([this])) : hn.add(this)));
          var c = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: c !== null ? c : "",
          });
        }),
      n
    );
  }
  function Yu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new _p();
      var l = new Set();
      r.set(t, l);
    } else ((l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l)));
    l.has(n) || (l.add(n), (e = Lp.bind(null, e, t, n)), t.then(e, e));
  }
  function qu(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Zu(e, t, n, r, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Jt(-1, 1)), (t.tag = 2), pn(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var Sp = ae.ReactCurrentOwner,
    dt = !1;
  function st(e, t, n, r) {
    t.child = e === null ? hu(t, null, n, r) : lr(t, e.child, n, r);
  }
  function Ju(e, t, n, r, l) {
    n = n.render;
    var s = t.ref;
    return (
      or(t, l),
      (r = Wo(e, t, n, r, s, l)),
      (n = $o()),
      e !== null && !dt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Kt(e, t, l))
        : (Ae && n && No(t), (t.flags |= 1), st(e, t, r, l), t.child)
    );
  }
  function Ku(e, t, n, r, l) {
    if (e === null) {
      var s = n.type;
      return typeof s == "function" &&
        !vs(s) &&
        s.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = s), Xu(e, t, s, r, l))
        : ((e = gi(n.type, null, r, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((s = e.child), (e.lanes & l) === 0)) {
      var c = s.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Lr), n(c, r) && e.ref === t.ref)
      )
        return Kt(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = xn(s, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Xu(e, t, n, r, l) {
    if (e !== null) {
      var s = e.memoizedProps;
      if (Lr(s, r) && e.ref === t.ref)
        if (((dt = !1), (t.pendingProps = r = s), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (dt = !0);
        else return ((t.lanes = e.lanes), Kt(e, t, l));
    }
    return Ko(e, t, n, r, l);
  }
  function Qu(e, t, n) {
    var r = t.pendingProps,
      l = r.children,
      s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Pe(cr, vt),
          (vt |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = s !== null ? s.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Pe(cr, vt),
            (vt |= e),
            null
          );
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = s !== null ? s.baseLanes : n),
          Pe(cr, vt),
          (vt |= r));
      }
    else
      (s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
        Pe(cr, vt),
        (vt |= r));
    return (st(e, t, l, n), t.child);
  }
  function ec(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Ko(e, t, n, r, l) {
    var s = ct(n) ? Pn : nt.current;
    return (
      (s = er(t, s)),
      or(t, l),
      (n = Wo(e, t, n, r, s, l)),
      (r = $o()),
      e !== null && !dt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          Kt(e, t, l))
        : (Ae && r && No(t), (t.flags |= 1), st(e, t, n, l), t.child)
    );
  }
  function tc(e, t, n, r, l) {
    if (ct(n)) {
      var s = !0;
      Wl(t);
    } else s = !1;
    if ((or(t, l), t.stateNode === null))
      (ii(e, t), Ou(t, n, r), qo(t, n, r, l), (r = !0));
    else if (e === null) {
      var c = t.stateNode,
        m = t.memoizedProps;
      c.props = m;
      var g = c.context,
        M = n.contextType;
      typeof M == "object" && M !== null
        ? (M = _t(M))
        : ((M = ct(n) ? Pn : nt.current), (M = er(t, M)));
      var T = n.getDerivedStateFromProps,
        H =
          typeof T == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function";
      (H ||
        (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
          typeof c.componentWillReceiveProps != "function") ||
        ((m !== r || g !== M) && Uu(t, c, r, M)),
        (fn = !1));
      var L = t.memoizedState;
      ((c.state = L),
        Jl(t, r, c, l),
        (g = t.memoizedState),
        m !== r || L !== g || ut.current || fn
          ? (typeof T == "function" && (Yo(t, n, T, r), (g = t.memoizedState)),
            (m = fn || $u(t, n, m, r, L, g, M))
              ? (H ||
                  (typeof c.UNSAFE_componentWillMount != "function" &&
                    typeof c.componentWillMount != "function") ||
                  (typeof c.componentWillMount == "function" &&
                    c.componentWillMount(),
                  typeof c.UNSAFE_componentWillMount == "function" &&
                    c.UNSAFE_componentWillMount()),
                typeof c.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof c.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = g)),
            (c.props = r),
            (c.state = g),
            (c.context = M),
            (r = m))
          : (typeof c.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1)));
    } else {
      ((c = t.stateNode),
        yu(e, t),
        (m = t.memoizedProps),
        (M = t.type === t.elementType ? m : Bt(t.type, m)),
        (c.props = M),
        (H = t.pendingProps),
        (L = c.context),
        (g = n.contextType),
        typeof g == "object" && g !== null
          ? (g = _t(g))
          : ((g = ct(n) ? Pn : nt.current), (g = er(t, g))));
      var V = n.getDerivedStateFromProps;
      ((T =
        typeof V == "function" ||
        typeof c.getSnapshotBeforeUpdate == "function") ||
        (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
          typeof c.componentWillReceiveProps != "function") ||
        ((m !== H || L !== g) && Uu(t, c, r, g)),
        (fn = !1),
        (L = t.memoizedState),
        (c.state = L),
        Jl(t, r, c, l));
      var Q = t.memoizedState;
      m !== H || L !== Q || ut.current || fn
        ? (typeof V == "function" && (Yo(t, n, V, r), (Q = t.memoizedState)),
          (M = fn || $u(t, n, M, r, L, Q, g) || !1)
            ? (T ||
                (typeof c.UNSAFE_componentWillUpdate != "function" &&
                  typeof c.componentWillUpdate != "function") ||
                (typeof c.componentWillUpdate == "function" &&
                  c.componentWillUpdate(r, Q, g),
                typeof c.UNSAFE_componentWillUpdate == "function" &&
                  c.UNSAFE_componentWillUpdate(r, Q, g)),
              typeof c.componentDidUpdate == "function" && (t.flags |= 4),
              typeof c.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof c.componentDidUpdate != "function" ||
                (m === e.memoizedProps && L === e.memoizedState) ||
                (t.flags |= 4),
              typeof c.getSnapshotBeforeUpdate != "function" ||
                (m === e.memoizedProps && L === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = Q)),
          (c.props = r),
          (c.state = Q),
          (c.context = g),
          (r = M))
        : (typeof c.componentDidUpdate != "function" ||
            (m === e.memoizedProps && L === e.memoizedState) ||
            (t.flags |= 4),
          typeof c.getSnapshotBeforeUpdate != "function" ||
            (m === e.memoizedProps && L === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return Xo(e, t, n, r, s, l);
  }
  function Xo(e, t, n, r, l, s) {
    ec(e, t);
    var c = (t.flags & 128) !== 0;
    if (!r && !c) return (l && ou(t, n, !1), Kt(e, t, s));
    ((r = t.stateNode), (Sp.current = t));
    var m =
      c && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && c
        ? ((t.child = lr(t, e.child, null, s)), (t.child = lr(t, null, m, s)))
        : st(e, t, m, s),
      (t.memoizedState = r.state),
      l && ou(t, n, !0),
      t.child
    );
  }
  function nc(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? lu(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && lu(e, t.context, !1),
      Lo(e, t.containerInfo));
  }
  function rc(e, t, n, r, l) {
    return (rr(), Eo(l), (t.flags |= 256), st(e, t, n, r), t.child);
  }
  var Qo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function es(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function lc(e, t, n) {
    var r = t.pendingProps,
      l = Ie.current,
      s = !1,
      c = (t.flags & 128) !== 0,
      m;
    if (
      ((m = c) ||
        (m = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      m
        ? ((s = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      Pe(Ie, l & 1),
      e === null)
    )
      return (
        Mo(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((c = r.children),
            (e = r.fallback),
            s
              ? ((r = t.mode),
                (s = t.child),
                (c = { mode: "hidden", children: c }),
                (r & 1) === 0 && s !== null
                  ? ((s.childLanes = 0), (s.pendingProps = c))
                  : (s = yi(c, r, 0, null)),
                (e = Fn(e, r, n, null)),
                (s.return = t),
                (e.return = t),
                (s.sibling = e),
                (t.child = s),
                (t.child.memoizedState = es(n)),
                (t.memoizedState = Qo),
                e)
              : ts(t, c))
      );
    if (((l = e.memoizedState), l !== null && ((m = l.dehydrated), m !== null)))
      return kp(e, t, c, r, m, l, n);
    if (s) {
      ((s = r.fallback), (c = t.mode), (l = e.child), (m = l.sibling));
      var g = { mode: "hidden", children: r.children };
      return (
        (c & 1) === 0 && t.child !== l
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = g),
            (t.deletions = null))
          : ((r = xn(l, g)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        m !== null ? (s = xn(m, s)) : ((s = Fn(s, c, n, null)), (s.flags |= 2)),
        (s.return = t),
        (r.return = t),
        (r.sibling = s),
        (t.child = r),
        (r = s),
        (s = t.child),
        (c = e.child.memoizedState),
        (c =
          c === null
            ? es(n)
            : {
                baseLanes: c.baseLanes | n,
                cachePool: null,
                transitions: c.transitions,
              }),
        (s.memoizedState = c),
        (s.childLanes = e.childLanes & ~n),
        (t.memoizedState = Qo),
        r
      );
    }
    return (
      (s = e.child),
      (e = s.sibling),
      (r = xn(s, { mode: "visible", children: r.children })),
      (t.mode & 1) === 0 && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function ts(e, t) {
    return (
      (t = yi({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function li(e, t, n, r) {
    return (
      r !== null && Eo(r),
      lr(t, e.child, null, n),
      (e = ts(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function kp(e, t, n, r, l, s, c) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Zo(Error(a(422)))), li(e, t, c, r))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((s = r.fallback),
            (l = t.mode),
            (r = yi({ mode: "visible", children: r.children }, l, 0, null)),
            (s = Fn(s, l, c, null)),
            (s.flags |= 2),
            (r.return = t),
            (s.return = t),
            (r.sibling = s),
            (t.child = r),
            (t.mode & 1) !== 0 && lr(t, e.child, null, c),
            (t.child.memoizedState = es(c)),
            (t.memoizedState = Qo),
            s);
    if ((t.mode & 1) === 0) return li(e, t, c, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var m = r.dgst;
      return (
        (r = m),
        (s = Error(a(419))),
        (r = Zo(s, r, void 0)),
        li(e, t, c, r)
      );
    }
    if (((m = (c & e.childLanes) !== 0), dt || m)) {
      if (((r = qe), r !== null)) {
        switch (c & -c) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        ((l = (l & (r.suspendedLanes | c)) !== 0 ? 0 : l),
          l !== 0 &&
            l !== s.retryLane &&
            ((s.retryLane = l), Zt(e, l), bt(r, e, l, -1)));
      }
      return (ys(), (r = Zo(Error(a(421)))), li(e, t, c, r));
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = Ip.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = s.treeContext),
        (yt = an(l.nextSibling)),
        (gt = t),
        (Ae = !0),
        (Et = null),
        e !== null &&
          ((xt[wt++] = Yt),
          (xt[wt++] = qt),
          (xt[wt++] = Dn),
          (Yt = e.id),
          (qt = e.overflow),
          (Dn = t)),
        (t = ts(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function ic(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    (r !== null && (r.lanes |= t), bo(e.return, t, n));
  }
  function ns(e, t, n, r, l) {
    var s = e.memoizedState;
    s === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: l,
        })
      : ((s.isBackwards = t),
        (s.rendering = null),
        (s.renderingStartTime = 0),
        (s.last = r),
        (s.tail = n),
        (s.tailMode = l));
  }
  function oc(e, t, n) {
    var r = t.pendingProps,
      l = r.revealOrder,
      s = r.tail;
    if ((st(e, t, r.children, n), (r = Ie.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && ic(e, n, t);
          else if (e.tag === 19) ic(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      r &= 1;
    }
    if ((Pe(Ie, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            ((e = n.alternate),
              e !== null && Kl(e) === null && (l = n),
              (n = n.sibling));
          ((n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            ns(t, !1, l, n, s));
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && Kl(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          ns(t, !0, n, null, s);
          break;
        case "together":
          ns(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function ii(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Kt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (In |= t.lanes),
      (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(a(153));
    if (t.child !== null) {
      for (
        e = t.child, n = xn(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (n = n.sibling = xn(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function Np(e, t, n) {
    switch (t.tag) {
      case 3:
        (nc(t), rr());
        break;
      case 5:
        wu(t);
        break;
      case 1:
        ct(t.type) && Wl(t);
        break;
      case 4:
        Lo(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          l = t.memoizedProps.value;
        (Pe(Yl, r._currentValue), (r._currentValue = l));
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (Pe(Ie, Ie.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? lc(e, t, n)
              : (Pe(Ie, Ie.current & 1),
                (e = Kt(e, t, n)),
                e !== null ? e.sibling : null);
        Pe(Ie, Ie.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return oc(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          Pe(Ie, Ie.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), Qu(e, t, n));
    }
    return Kt(e, t, n);
  }
  var sc, rs, ac, uc;
  ((sc = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
  }),
    (rs = function () {}),
    (ac = function (e, t, n, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        ((e = t.stateNode), An(Tt.current));
        var s = null;
        switch (n) {
          case "input":
            ((l = Wn(e, l)), (r = Wn(e, r)), (s = []));
            break;
          case "select":
            ((l = O({}, l, { value: void 0 })),
              (r = O({}, r, { value: void 0 })),
              (s = []));
            break;
          case "textarea":
            ((l = Le(e, l)), (r = Le(e, r)), (s = []));
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = Hl);
        }
        Ii(n, r);
        var c;
        n = null;
        for (M in l)
          if (!r.hasOwnProperty(M) && l.hasOwnProperty(M) && l[M] != null)
            if (M === "style") {
              var m = l[M];
              for (c in m) m.hasOwnProperty(c) && (n || (n = {}), (n[c] = ""));
            } else
              M !== "dangerouslySetInnerHTML" &&
                M !== "children" &&
                M !== "suppressContentEditableWarning" &&
                M !== "suppressHydrationWarning" &&
                M !== "autoFocus" &&
                (f.hasOwnProperty(M)
                  ? s || (s = [])
                  : (s = s || []).push(M, null));
        for (M in r) {
          var g = r[M];
          if (
            ((m = l != null ? l[M] : void 0),
            r.hasOwnProperty(M) && g !== m && (g != null || m != null))
          )
            if (M === "style")
              if (m) {
                for (c in m)
                  !m.hasOwnProperty(c) ||
                    (g && g.hasOwnProperty(c)) ||
                    (n || (n = {}), (n[c] = ""));
                for (c in g)
                  g.hasOwnProperty(c) &&
                    m[c] !== g[c] &&
                    (n || (n = {}), (n[c] = g[c]));
              } else (n || (s || (s = []), s.push(M, n)), (n = g));
            else
              M === "dangerouslySetInnerHTML"
                ? ((g = g ? g.__html : void 0),
                  (m = m ? m.__html : void 0),
                  g != null && m !== g && (s = s || []).push(M, g))
                : M === "children"
                  ? (typeof g != "string" && typeof g != "number") ||
                    (s = s || []).push(M, "" + g)
                  : M !== "suppressContentEditableWarning" &&
                    M !== "suppressHydrationWarning" &&
                    (f.hasOwnProperty(M)
                      ? (g != null && M === "onScroll" && De("scroll", e),
                        s || m === g || (s = []))
                      : (s = s || []).push(M, g));
        }
        n && (s = s || []).push("style", n);
        var M = s;
        (t.updateQueue = M) && (t.flags |= 4);
      }
    }),
    (uc = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    }));
  function Jr(e, t) {
    if (!Ae)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            (n.alternate !== null && (r = n), (n = n.sibling));
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function lt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling));
    else
      for (l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling));
    return ((e.subtreeFlags |= r), (e.childLanes = n), t);
  }
  function jp(e, t, n) {
    var r = t.pendingProps;
    switch ((jo(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (lt(t), null);
      case 1:
        return (ct(t.type) && Fl(), lt(t), null);
      case 3:
        return (
          (r = t.stateNode),
          sr(),
          be(ut),
          be(nt),
          Ho(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Vl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Et !== null && (ms(Et), (Et = null)))),
          rs(e, t),
          lt(t),
          null
        );
      case 5:
        Io(t);
        var l = An(Vr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (ac(e, t, n, r, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(a(166));
            return (lt(t), null);
          }
          if (((e = An(Tt.current)), Vl(t))) {
            ((r = t.stateNode), (n = t.type));
            var s = t.memoizedProps;
            switch (((r[It] = t), (r[Fr] = s), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                (De("cancel", r), De("close", r));
                break;
              case "iframe":
              case "object":
              case "embed":
                De("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Tr.length; l++) De(Tr[l], r);
                break;
              case "source":
                De("error", r);
                break;
              case "img":
              case "image":
              case "link":
                (De("error", r), De("load", r));
                break;
              case "details":
                De("toggle", r);
                break;
              case "input":
                (pl(r, s), De("invalid", r));
                break;
              case "select":
                ((r._wrapperState = { wasMultiple: !!s.multiple }),
                  De("invalid", r));
                break;
              case "textarea":
                (At(r, s), De("invalid", r));
            }
            (Ii(n, s), (l = null));
            for (var c in s)
              if (s.hasOwnProperty(c)) {
                var m = s[c];
                c === "children"
                  ? typeof m == "string"
                    ? r.textContent !== m &&
                      (s.suppressHydrationWarning !== !0 &&
                        Tl(r.textContent, m, e),
                      (l = ["children", m]))
                    : typeof m == "number" &&
                      r.textContent !== "" + m &&
                      (s.suppressHydrationWarning !== !0 &&
                        Tl(r.textContent, m, e),
                      (l = ["children", "" + m]))
                  : f.hasOwnProperty(c) &&
                    m != null &&
                    c === "onScroll" &&
                    De("scroll", r);
              }
            switch (n) {
              case "input":
                (Xe(r), hl(r, s, !0));
                break;
              case "textarea":
                (Xe(r), Cn(r));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof s.onClick == "function" && (r.onclick = Hl);
            }
            ((r = l), (t.updateQueue = r), r !== null && (t.flags |= 4));
          } else {
            ((c = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = $n(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = c.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                    ? (e = c.createElement(n, { is: r.is }))
                    : ((e = c.createElement(n)),
                      n === "select" &&
                        ((c = e),
                        r.multiple
                          ? (c.multiple = !0)
                          : r.size && (c.size = r.size)))
                : (e = c.createElementNS(e, n)),
              (e[It] = t),
              (e[Fr] = r),
              sc(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((c = Ti(n, r)), n)) {
                case "dialog":
                  (De("cancel", e), De("close", e), (l = r));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (De("load", e), (l = r));
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < Tr.length; l++) De(Tr[l], e);
                  l = r;
                  break;
                case "source":
                  (De("error", e), (l = r));
                  break;
                case "img":
                case "image":
                case "link":
                  (De("error", e), De("load", e), (l = r));
                  break;
                case "details":
                  (De("toggle", e), (l = r));
                  break;
                case "input":
                  (pl(e, r), (l = Wn(e, r)), De("invalid", e));
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = O({}, r, { value: void 0 })),
                    De("invalid", e));
                  break;
                case "textarea":
                  (At(e, r), (l = Le(e, r)), De("invalid", e));
                  break;
                default:
                  l = r;
              }
              (Ii(n, l), (m = l));
              for (s in m)
                if (m.hasOwnProperty(s)) {
                  var g = m[s];
                  s === "style"
                    ? Xs(e, g)
                    : s === "dangerouslySetInnerHTML"
                      ? ((g = g ? g.__html : void 0), g != null && Js(e, g))
                      : s === "children"
                        ? typeof g == "string"
                          ? (n !== "textarea" || g !== "") && vr(e, g)
                          : typeof g == "number" && vr(e, "" + g)
                        : s !== "suppressContentEditableWarning" &&
                          s !== "suppressHydrationWarning" &&
                          s !== "autoFocus" &&
                          (f.hasOwnProperty(s)
                            ? g != null && s === "onScroll" && De("scroll", e)
                            : g != null && q(e, s, g, c));
                }
              switch (n) {
                case "input":
                  (Xe(e), hl(e, r, !1));
                  break;
                case "textarea":
                  (Xe(e), Cn(e));
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + xe(r.value));
                  break;
                case "select":
                  ((e.multiple = !!r.multiple),
                    (s = r.value),
                    s != null
                      ? Fe(e, !!r.multiple, s, !1)
                      : r.defaultValue != null &&
                        Fe(e, !!r.multiple, r.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Hl);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return (lt(t), null);
      case 6:
        if (e && t.stateNode != null) uc(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(a(166));
          if (((n = An(Vr.current)), An(Tt.current), Vl(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[It] = t),
              (s = r.nodeValue !== n) && ((e = gt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Tl(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Tl(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            s && (t.flags |= 4);
          } else
            ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[It] = t),
              (t.stateNode = r));
        }
        return (lt(t), null);
      case 13:
        if (
          (be(Ie),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Ae && yt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (fu(), rr(), (t.flags |= 98560), (s = !1));
          else if (((s = Vl(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!s) throw Error(a(318));
              if (
                ((s = t.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(a(317));
              s[It] = t;
            } else
              (rr(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (lt(t), (s = !1));
          } else (Et !== null && (ms(Et), (Et = null)), (s = !0));
          if (!s) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Ie.current & 1) !== 0
                  ? Ge === 0 && (Ge = 3)
                  : ys())),
            t.updateQueue !== null && (t.flags |= 4),
            lt(t),
            null);
      case 4:
        return (
          sr(),
          rs(e, t),
          e === null && Hr(t.stateNode.containerInfo),
          lt(t),
          null
        );
      case 10:
        return (Do(t.type._context), lt(t), null);
      case 17:
        return (ct(t.type) && Fl(), lt(t), null);
      case 19:
        if ((be(Ie), (s = t.memoizedState), s === null)) return (lt(t), null);
        if (((r = (t.flags & 128) !== 0), (c = s.rendering), c === null))
          if (r) Jr(s, !1);
          else {
            if (Ge !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((c = Kl(e)), c !== null)) {
                  for (
                    t.flags |= 128,
                      Jr(s, !1),
                      r = c.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;
                  )
                    ((s = n),
                      (e = r),
                      (s.flags &= 14680066),
                      (c = s.alternate),
                      c === null
                        ? ((s.childLanes = 0),
                          (s.lanes = e),
                          (s.child = null),
                          (s.subtreeFlags = 0),
                          (s.memoizedProps = null),
                          (s.memoizedState = null),
                          (s.updateQueue = null),
                          (s.dependencies = null),
                          (s.stateNode = null))
                        : ((s.childLanes = c.childLanes),
                          (s.lanes = c.lanes),
                          (s.child = c.child),
                          (s.subtreeFlags = 0),
                          (s.deletions = null),
                          (s.memoizedProps = c.memoizedProps),
                          (s.memoizedState = c.memoizedState),
                          (s.updateQueue = c.updateQueue),
                          (s.type = c.type),
                          (e = c.dependencies),
                          (s.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling));
                  return (Pe(Ie, (Ie.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            s.tail !== null &&
              We() > dr &&
              ((t.flags |= 128), (r = !0), Jr(s, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = Kl(c)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                Jr(s, !0),
                s.tail === null &&
                  s.tailMode === "hidden" &&
                  !c.alternate &&
                  !Ae)
              )
                return (lt(t), null);
            } else
              2 * We() - s.renderingStartTime > dr &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), Jr(s, !1), (t.lanes = 4194304));
          s.isBackwards
            ? ((c.sibling = t.child), (t.child = c))
            : ((n = s.last),
              n !== null ? (n.sibling = c) : (t.child = c),
              (s.last = c));
        }
        return s.tail !== null
          ? ((t = s.tail),
            (s.rendering = t),
            (s.tail = t.sibling),
            (s.renderingStartTime = We()),
            (t.sibling = null),
            (n = Ie.current),
            Pe(Ie, r ? (n & 1) | 2 : n & 1),
            t)
          : (lt(t), null);
      case 22:
      case 23:
        return (
          gs(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (vt & 1073741824) !== 0 &&
              (lt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : lt(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(a(156, t.tag));
  }
  function Cp(e, t) {
    switch ((jo(t), t.tag)) {
      case 1:
        return (
          ct(t.type) && Fl(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          sr(),
          be(ut),
          be(nt),
          Ho(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return (Io(t), null);
      case 13:
        if (
          (be(Ie), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(a(340));
          rr();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (be(Ie), null);
      case 4:
        return (sr(), null);
      case 10:
        return (Do(t.type._context), null);
      case 22:
      case 23:
        return (gs(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var oi = !1,
    it = !1,
    Mp = typeof WeakSet == "function" ? WeakSet : Set,
    J = null;
  function ur(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          ze(e, t, r);
        }
      else n.current = null;
  }
  function ls(e, t, n) {
    try {
      n();
    } catch (r) {
      ze(e, t, r);
    }
  }
  var cc = !1;
  function Ep(e, t) {
    if (((go = Cl), (e = $a()), so(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var l = r.anchorOffset,
              s = r.focusNode;
            r = r.focusOffset;
            try {
              (n.nodeType, s.nodeType);
            } catch {
              n = null;
              break e;
            }
            var c = 0,
              m = -1,
              g = -1,
              M = 0,
              T = 0,
              H = e,
              L = null;
            t: for (;;) {
              for (
                var V;
                H !== n || (l !== 0 && H.nodeType !== 3) || (m = c + l),
                  H !== s || (r !== 0 && H.nodeType !== 3) || (g = c + r),
                  H.nodeType === 3 && (c += H.nodeValue.length),
                  (V = H.firstChild) !== null;
              )
                ((L = H), (H = V));
              for (;;) {
                if (H === e) break t;
                if (
                  (L === n && ++M === l && (m = c),
                  L === s && ++T === r && (g = c),
                  (V = H.nextSibling) !== null)
                )
                  break;
                ((H = L), (L = H.parentNode));
              }
              H = V;
            }
            n = m === -1 || g === -1 ? null : { start: m, end: g };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      yo = { focusedElem: e, selectionRange: n }, Cl = !1, J = t;
      J !== null;
    )
      if (((t = J), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (J = e));
      else
        for (; J !== null; ) {
          t = J;
          try {
            var Q = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Q !== null) {
                    var ee = Q.memoizedProps,
                      $e = Q.memoizedState,
                      N = t.stateNode,
                      w = N.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? ee : Bt(t.type, ee),
                        $e,
                      );
                    N.__reactInternalSnapshotBeforeUpdate = w;
                  }
                  break;
                case 3:
                  var C = t.stateNode.containerInfo;
                  C.nodeType === 1
                    ? (C.textContent = "")
                    : C.nodeType === 9 &&
                      C.documentElement &&
                      C.removeChild(C.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(a(163));
              }
          } catch (z) {
            ze(t, t.return, z);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (J = e));
            break;
          }
          J = t.return;
        }
    return ((Q = cc), (cc = !1), Q);
  }
  function Kr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var s = l.destroy;
          ((l.destroy = void 0), s !== void 0 && ls(t, n, s));
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function si(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function is(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function dc(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), dc(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[It],
          delete t[Fr],
          delete t[_o],
          delete t[cp],
          delete t[dp])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function fc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function pc(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || fc(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function os(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Hl)));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (os(e, t, n), e = e.sibling; e !== null; )
        (os(e, t, n), (e = e.sibling));
  }
  function ss(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (ss(e, t, n), e = e.sibling; e !== null; )
        (ss(e, t, n), (e = e.sibling));
  }
  var Qe = null,
    Pt = !1;
  function mn(e, t, n) {
    for (n = n.child; n !== null; ) (mc(e, t, n), (n = n.sibling));
  }
  function mc(e, t, n) {
    if (Lt && typeof Lt.onCommitFiberUnmount == "function")
      try {
        Lt.onCommitFiberUnmount(wl, n);
      } catch {}
    switch (n.tag) {
      case 5:
        it || ur(n, t);
      case 6:
        var r = Qe,
          l = Pt;
        ((Qe = null),
          mn(e, t, n),
          (Qe = r),
          (Pt = l),
          Qe !== null &&
            (Pt
              ? ((e = Qe),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : Qe.removeChild(n.stateNode)));
        break;
      case 18:
        Qe !== null &&
          (Pt
            ? ((e = Qe),
              (n = n.stateNode),
              e.nodeType === 8
                ? wo(e.parentNode, n)
                : e.nodeType === 1 && wo(e, n),
              Br(e))
            : wo(Qe, n.stateNode));
        break;
      case 4:
        ((r = Qe),
          (l = Pt),
          (Qe = n.stateNode.containerInfo),
          (Pt = !0),
          mn(e, t, n),
          (Qe = r),
          (Pt = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !it &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var s = l,
              c = s.destroy;
            ((s = s.tag),
              c !== void 0 && ((s & 2) !== 0 || (s & 4) !== 0) && ls(n, t, c),
              (l = l.next));
          } while (l !== r);
        }
        mn(e, t, n);
        break;
      case 1:
        if (
          !it &&
          (ur(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            ((r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount());
          } catch (m) {
            ze(n, t, m);
          }
        mn(e, t, n);
        break;
      case 21:
        mn(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((it = (r = it) || n.memoizedState !== null), mn(e, t, n), (it = r))
          : mn(e, t, n);
        break;
      default:
        mn(e, t, n);
    }
  }
  function hc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new Mp()),
        t.forEach(function (r) {
          var l = Tp.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(l, l));
        }));
    }
  }
  function Dt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var l = n[r];
        try {
          var s = e,
            c = t,
            m = c;
          e: for (; m !== null; ) {
            switch (m.tag) {
              case 5:
                ((Qe = m.stateNode), (Pt = !1));
                break e;
              case 3:
                ((Qe = m.stateNode.containerInfo), (Pt = !0));
                break e;
              case 4:
                ((Qe = m.stateNode.containerInfo), (Pt = !0));
                break e;
            }
            m = m.return;
          }
          if (Qe === null) throw Error(a(160));
          (mc(s, c, l), (Qe = null), (Pt = !1));
          var g = l.alternate;
          (g !== null && (g.return = null), (l.return = null));
        } catch (M) {
          ze(l, t, M);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) (gc(t, e), (t = t.sibling));
  }
  function gc(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Dt(t, e), zt(e), r & 4)) {
          try {
            (Kr(3, e, e.return), si(3, e));
          } catch (ee) {
            ze(e, e.return, ee);
          }
          try {
            Kr(5, e, e.return);
          } catch (ee) {
            ze(e, e.return, ee);
          }
        }
        break;
      case 1:
        (Dt(t, e), zt(e), r & 512 && n !== null && ur(n, n.return));
        break;
      case 5:
        if (
          (Dt(t, e),
          zt(e),
          r & 512 && n !== null && ur(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            vr(l, "");
          } catch (ee) {
            ze(e, e.return, ee);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var s = e.memoizedProps,
            c = n !== null ? n.memoizedProps : s,
            m = e.type,
            g = e.updateQueue;
          if (((e.updateQueue = null), g !== null))
            try {
              (m === "input" &&
                s.type === "radio" &&
                s.name != null &&
                ml(l, s),
                Ti(m, c));
              var M = Ti(m, s);
              for (c = 0; c < g.length; c += 2) {
                var T = g[c],
                  H = g[c + 1];
                T === "style"
                  ? Xs(l, H)
                  : T === "dangerouslySetInnerHTML"
                    ? Js(l, H)
                    : T === "children"
                      ? vr(l, H)
                      : q(l, T, H, M);
              }
              switch (m) {
                case "input":
                  yr(l, s);
                  break;
                case "textarea":
                  jn(l, s);
                  break;
                case "select":
                  var L = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!s.multiple;
                  var V = s.value;
                  V != null
                    ? Fe(l, !!s.multiple, V, !1)
                    : L !== !!s.multiple &&
                      (s.defaultValue != null
                        ? Fe(l, !!s.multiple, s.defaultValue, !0)
                        : Fe(l, !!s.multiple, s.multiple ? [] : "", !1));
              }
              l[Fr] = s;
            } catch (ee) {
              ze(e, e.return, ee);
            }
        }
        break;
      case 6:
        if ((Dt(t, e), zt(e), r & 4)) {
          if (e.stateNode === null) throw Error(a(162));
          ((l = e.stateNode), (s = e.memoizedProps));
          try {
            l.nodeValue = s;
          } catch (ee) {
            ze(e, e.return, ee);
          }
        }
        break;
      case 3:
        if (
          (Dt(t, e), zt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Br(t.containerInfo);
          } catch (ee) {
            ze(e, e.return, ee);
          }
        break;
      case 4:
        (Dt(t, e), zt(e));
        break;
      case 13:
        (Dt(t, e),
          zt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((s = l.memoizedState !== null),
            (l.stateNode.isHidden = s),
            !s ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (cs = We())),
          r & 4 && hc(e));
        break;
      case 22:
        if (
          ((T = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((it = (M = it) || T), Dt(t, e), (it = M)) : Dt(t, e),
          zt(e),
          r & 8192)
        ) {
          if (
            ((M = e.memoizedState !== null),
            (e.stateNode.isHidden = M) && !T && (e.mode & 1) !== 0)
          )
            for (J = e, T = e.child; T !== null; ) {
              for (H = J = T; J !== null; ) {
                switch (((L = J), (V = L.child), L.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Kr(4, L, L.return);
                    break;
                  case 1:
                    ur(L, L.return);
                    var Q = L.stateNode;
                    if (typeof Q.componentWillUnmount == "function") {
                      ((r = L), (n = L.return));
                      try {
                        ((t = r),
                          (Q.props = t.memoizedProps),
                          (Q.state = t.memoizedState),
                          Q.componentWillUnmount());
                      } catch (ee) {
                        ze(r, n, ee);
                      }
                    }
                    break;
                  case 5:
                    ur(L, L.return);
                    break;
                  case 22:
                    if (L.memoizedState !== null) {
                      xc(H);
                      continue;
                    }
                }
                V !== null ? ((V.return = L), (J = V)) : xc(H);
              }
              T = T.sibling;
            }
          e: for (T = null, H = e; ; ) {
            if (H.tag === 5) {
              if (T === null) {
                T = H;
                try {
                  ((l = H.stateNode),
                    M
                      ? ((s = l.style),
                        typeof s.setProperty == "function"
                          ? s.setProperty("display", "none", "important")
                          : (s.display = "none"))
                      : ((m = H.stateNode),
                        (g = H.memoizedProps.style),
                        (c =
                          g != null && g.hasOwnProperty("display")
                            ? g.display
                            : null),
                        (m.style.display = Ks("display", c))));
                } catch (ee) {
                  ze(e, e.return, ee);
                }
              }
            } else if (H.tag === 6) {
              if (T === null)
                try {
                  H.stateNode.nodeValue = M ? "" : H.memoizedProps;
                } catch (ee) {
                  ze(e, e.return, ee);
                }
            } else if (
              ((H.tag !== 22 && H.tag !== 23) ||
                H.memoizedState === null ||
                H === e) &&
              H.child !== null
            ) {
              ((H.child.return = H), (H = H.child));
              continue;
            }
            if (H === e) break e;
            for (; H.sibling === null; ) {
              if (H.return === null || H.return === e) break e;
              (T === H && (T = null), (H = H.return));
            }
            (T === H && (T = null),
              (H.sibling.return = H.return),
              (H = H.sibling));
          }
        }
        break;
      case 19:
        (Dt(t, e), zt(e), r & 4 && hc(e));
        break;
      case 21:
        break;
      default:
        (Dt(t, e), zt(e));
    }
  }
  function zt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (fc(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(a(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (vr(l, ""), (r.flags &= -33));
            var s = pc(e);
            ss(e, s, l);
            break;
          case 3:
          case 4:
            var c = r.stateNode.containerInfo,
              m = pc(e);
            os(e, m, c);
            break;
          default:
            throw Error(a(161));
        }
      } catch (g) {
        ze(e, e.return, g);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Bp(e, t, n) {
    ((J = e), yc(e));
  }
  function yc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; J !== null; ) {
      var l = J,
        s = l.child;
      if (l.tag === 22 && r) {
        var c = l.memoizedState !== null || oi;
        if (!c) {
          var m = l.alternate,
            g = (m !== null && m.memoizedState !== null) || it;
          m = oi;
          var M = it;
          if (((oi = c), (it = g) && !M))
            for (J = l; J !== null; )
              ((c = J),
                (g = c.child),
                c.tag === 22 && c.memoizedState !== null
                  ? wc(l)
                  : g !== null
                    ? ((g.return = c), (J = g))
                    : wc(l));
          for (; s !== null; ) ((J = s), yc(s), (s = s.sibling));
          ((J = l), (oi = m), (it = M));
        }
        vc(e);
      } else
        (l.subtreeFlags & 8772) !== 0 && s !== null
          ? ((s.return = l), (J = s))
          : vc(e);
    }
  }
  function vc(e) {
    for (; J !== null; ) {
      var t = J;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                it || si(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !it)
                  if (n === null) r.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : Bt(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var s = t.updateQueue;
                s !== null && xu(t, s, r);
                break;
              case 3:
                var c = t.updateQueue;
                if (c !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  xu(t, c, n);
                }
                break;
              case 5:
                var m = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = m;
                  var g = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      g.autoFocus && n.focus();
                      break;
                    case "img":
                      g.src && (n.src = g.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var M = t.alternate;
                  if (M !== null) {
                    var T = M.memoizedState;
                    if (T !== null) {
                      var H = T.dehydrated;
                      H !== null && Br(H);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(a(163));
            }
          it || (t.flags & 512 && is(t));
        } catch (L) {
          ze(t, t.return, L);
        }
      }
      if (t === e) {
        J = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (J = n));
        break;
      }
      J = t.return;
    }
  }
  function xc(e) {
    for (; J !== null; ) {
      var t = J;
      if (t === e) {
        J = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (J = n));
        break;
      }
      J = t.return;
    }
  }
  function wc(e) {
    for (; J !== null; ) {
      var t = J;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              si(4, t);
            } catch (g) {
              ze(t, n, g);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (g) {
                ze(t, l, g);
              }
            }
            var s = t.return;
            try {
              is(t);
            } catch (g) {
              ze(t, s, g);
            }
            break;
          case 5:
            var c = t.return;
            try {
              is(t);
            } catch (g) {
              ze(t, c, g);
            }
        }
      } catch (g) {
        ze(t, t.return, g);
      }
      if (t === e) {
        J = null;
        break;
      }
      var m = t.sibling;
      if (m !== null) {
        ((m.return = t.return), (J = m));
        break;
      }
      J = t.return;
    }
  }
  var Pp = Math.ceil,
    ai = ae.ReactCurrentDispatcher,
    as = ae.ReactCurrentOwner,
    kt = ae.ReactCurrentBatchConfig,
    Se = 0,
    qe = null,
    Ue = null,
    et = 0,
    vt = 0,
    cr = un(0),
    Ge = 0,
    Xr = null,
    In = 0,
    ui = 0,
    us = 0,
    Qr = null,
    ft = null,
    cs = 0,
    dr = 1 / 0,
    Xt = null,
    ci = !1,
    ds = null,
    hn = null,
    di = !1,
    gn = null,
    fi = 0,
    el = 0,
    fs = null,
    pi = -1,
    mi = 0;
  function at() {
    return (Se & 6) !== 0 ? We() : pi !== -1 ? pi : (pi = We());
  }
  function yn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (Se & 2) !== 0 && et !== 0
        ? et & -et
        : pp.transition !== null
          ? (mi === 0 && (mi = pa()), mi)
          : ((e = Ce),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : Sa(e.type))),
            e);
  }
  function bt(e, t, n, r) {
    if (50 < el) throw ((el = 0), (fs = null), Error(a(185)));
    (Nr(e, n, r),
      ((Se & 2) === 0 || e !== qe) &&
        (e === qe && ((Se & 2) === 0 && (ui |= n), Ge === 4 && vn(e, et)),
        pt(e, r),
        n === 1 &&
          Se === 0 &&
          (t.mode & 1) === 0 &&
          ((dr = We() + 500), $l && dn())));
  }
  function pt(e, t) {
    var n = e.callbackNode;
    pf(e, t);
    var r = kl(e, e === qe ? et : 0);
    if (r === 0)
      (n !== null && ca(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && ca(n), t === 1))
        (e.tag === 0 ? fp(Sc.bind(null, e)) : su(Sc.bind(null, e)),
          ap(function () {
            (Se & 6) === 0 && dn();
          }),
          (n = null));
      else {
        switch (ma(r)) {
          case 1:
            n = Ui;
            break;
          case 4:
            n = da;
            break;
          case 16:
            n = xl;
            break;
          case 536870912:
            n = fa;
            break;
          default:
            n = xl;
        }
        n = Pc(n, _c.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function _c(e, t) {
    if (((pi = -1), (mi = 0), (Se & 6) !== 0)) throw Error(a(327));
    var n = e.callbackNode;
    if (fr() && e.callbackNode !== n) return null;
    var r = kl(e, e === qe ? et : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = hi(e, r);
    else {
      t = r;
      var l = Se;
      Se |= 2;
      var s = Nc();
      (qe !== e || et !== t) && ((Xt = null), (dr = We() + 500), Hn(e, t));
      do
        try {
          Rp();
          break;
        } catch (m) {
          kc(e, m);
        }
      while (!0);
      (Po(),
        (ai.current = s),
        (Se = l),
        Ue !== null ? (t = 0) : ((qe = null), (et = 0), (t = Ge)));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = Vi(e)), l !== 0 && ((r = l), (t = ps(e, l)))),
        t === 1)
      )
        throw ((n = Xr), Hn(e, 0), vn(e, r), pt(e, We()), n);
      if (t === 6) vn(e, r);
      else {
        if (
          ((l = e.current.alternate),
          (r & 30) === 0 &&
            !Dp(l) &&
            ((t = hi(e, r)),
            t === 2 && ((s = Vi(e)), s !== 0 && ((r = s), (t = ps(e, s)))),
            t === 1))
        )
          throw ((n = Xr), Hn(e, 0), vn(e, r), pt(e, We()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            zn(e, ft, Xt);
            break;
          case 3:
            if (
              (vn(e, r),
              (r & 130023424) === r && ((t = cs + 500 - We()), 10 < t))
            ) {
              if (kl(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                (at(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = xo(zn.bind(null, e, ft, Xt), t);
              break;
            }
            zn(e, ft, Xt);
            break;
          case 4:
            if ((vn(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var c = 31 - Ct(r);
              ((s = 1 << c), (c = t[c]), c > l && (l = c), (r &= ~s));
            }
            if (
              ((r = l),
              (r = We() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                    ? 480
                    : 1080 > r
                      ? 1080
                      : 1920 > r
                        ? 1920
                        : 3e3 > r
                          ? 3e3
                          : 4320 > r
                            ? 4320
                            : 1960 * Pp(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = xo(zn.bind(null, e, ft, Xt), r);
              break;
            }
            zn(e, ft, Xt);
            break;
          case 5:
            zn(e, ft, Xt);
            break;
          default:
            throw Error(a(329));
        }
      }
    }
    return (pt(e, We()), e.callbackNode === n ? _c.bind(null, e) : null);
  }
  function ps(e, t) {
    var n = Qr;
    return (
      e.current.memoizedState.isDehydrated && (Hn(e, t).flags |= 256),
      (e = hi(e, t)),
      e !== 2 && ((t = ft), (ft = n), t !== null && ms(t)),
      e
    );
  }
  function ms(e) {
    ft === null ? (ft = e) : ft.push.apply(ft, e);
  }
  function Dp(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var l = n[r],
              s = l.getSnapshot;
            l = l.value;
            try {
              if (!Mt(s(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function vn(e, t) {
    for (
      t &= ~us,
        t &= ~ui,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;
    ) {
      var n = 31 - Ct(t),
        r = 1 << n;
      ((e[n] = -1), (t &= ~r));
    }
  }
  function Sc(e) {
    if ((Se & 6) !== 0) throw Error(a(327));
    fr();
    var t = kl(e, 0);
    if ((t & 1) === 0) return (pt(e, We()), null);
    var n = hi(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Vi(e);
      r !== 0 && ((t = r), (n = ps(e, r)));
    }
    if (n === 1) throw ((n = Xr), Hn(e, 0), vn(e, t), pt(e, We()), n);
    if (n === 6) throw Error(a(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      zn(e, ft, Xt),
      pt(e, We()),
      null
    );
  }
  function hs(e, t) {
    var n = Se;
    Se |= 1;
    try {
      return e(t);
    } finally {
      ((Se = n), Se === 0 && ((dr = We() + 500), $l && dn()));
    }
  }
  function Tn(e) {
    gn !== null && gn.tag === 0 && (Se & 6) === 0 && fr();
    var t = Se;
    Se |= 1;
    var n = kt.transition,
      r = Ce;
    try {
      if (((kt.transition = null), (Ce = 1), e)) return e();
    } finally {
      ((Ce = r), (kt.transition = n), (Se = t), (Se & 6) === 0 && dn());
    }
  }
  function gs() {
    ((vt = cr.current), be(cr));
  }
  function Hn(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), sp(n)), Ue !== null))
      for (n = Ue.return; n !== null; ) {
        var r = n;
        switch ((jo(r), r.tag)) {
          case 1:
            ((r = r.type.childContextTypes), r != null && Fl());
            break;
          case 3:
            (sr(), be(ut), be(nt), Ho());
            break;
          case 5:
            Io(r);
            break;
          case 4:
            sr();
            break;
          case 13:
            be(Ie);
            break;
          case 19:
            be(Ie);
            break;
          case 10:
            Do(r.type._context);
            break;
          case 22:
          case 23:
            gs();
        }
        n = n.return;
      }
    if (
      ((qe = e),
      (Ue = e = xn(e.current, null)),
      (et = vt = t),
      (Ge = 0),
      (Xr = null),
      (us = ui = In = 0),
      (ft = Qr = null),
      Rn !== null)
    ) {
      for (t = 0; t < Rn.length; t++)
        if (((n = Rn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var l = r.next,
            s = n.pending;
          if (s !== null) {
            var c = s.next;
            ((s.next = l), (r.next = c));
          }
          n.pending = r;
        }
      Rn = null;
    }
    return e;
  }
  function kc(e, t) {
    do {
      var n = Ue;
      try {
        if ((Po(), (Xl.current = ni), Ql)) {
          for (var r = Te.memoizedState; r !== null; ) {
            var l = r.queue;
            (l !== null && (l.pending = null), (r = r.next));
          }
          Ql = !1;
        }
        if (
          ((Ln = 0),
          (Ye = Ve = Te = null),
          (Gr = !1),
          (Yr = 0),
          (as.current = null),
          n === null || n.return === null)
        ) {
          ((Ge = 1), (Xr = t), (Ue = null));
          break;
        }
        e: {
          var s = e,
            c = n.return,
            m = n,
            g = t;
          if (
            ((t = et),
            (m.flags |= 32768),
            g !== null && typeof g == "object" && typeof g.then == "function")
          ) {
            var M = g,
              T = m,
              H = T.tag;
            if ((T.mode & 1) === 0 && (H === 0 || H === 11 || H === 15)) {
              var L = T.alternate;
              L
                ? ((T.updateQueue = L.updateQueue),
                  (T.memoizedState = L.memoizedState),
                  (T.lanes = L.lanes))
                : ((T.updateQueue = null), (T.memoizedState = null));
            }
            var V = qu(c);
            if (V !== null) {
              ((V.flags &= -257),
                Zu(V, c, m, s, t),
                V.mode & 1 && Yu(s, M, t),
                (t = V),
                (g = M));
              var Q = t.updateQueue;
              if (Q === null) {
                var ee = new Set();
                (ee.add(g), (t.updateQueue = ee));
              } else Q.add(g);
              break e;
            } else {
              if ((t & 1) === 0) {
                (Yu(s, M, t), ys());
                break e;
              }
              g = Error(a(426));
            }
          } else if (Ae && m.mode & 1) {
            var $e = qu(c);
            if ($e !== null) {
              (($e.flags & 65536) === 0 && ($e.flags |= 256),
                Zu($e, c, m, s, t),
                Eo(ar(g, m)));
              break e;
            }
          }
          ((s = g = ar(g, m)),
            Ge !== 4 && (Ge = 2),
            Qr === null ? (Qr = [s]) : Qr.push(s),
            (s = c));
          do {
            switch (s.tag) {
              case 3:
                ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
                var N = Vu(s, g, t);
                vu(s, N);
                break e;
              case 1:
                m = g;
                var w = s.type,
                  C = s.stateNode;
                if (
                  (s.flags & 128) === 0 &&
                  (typeof w.getDerivedStateFromError == "function" ||
                    (C !== null &&
                      typeof C.componentDidCatch == "function" &&
                      (hn === null || !hn.has(C))))
                ) {
                  ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
                  var z = Gu(s, m, t);
                  vu(s, z);
                  break e;
                }
            }
            s = s.return;
          } while (s !== null);
        }
        Cc(n);
      } catch (ne) {
        ((t = ne), Ue === n && n !== null && (Ue = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function Nc() {
    var e = ai.current;
    return ((ai.current = ni), e === null ? ni : e);
  }
  function ys() {
    ((Ge === 0 || Ge === 3 || Ge === 2) && (Ge = 4),
      qe === null ||
        ((In & 268435455) === 0 && (ui & 268435455) === 0) ||
        vn(qe, et));
  }
  function hi(e, t) {
    var n = Se;
    Se |= 2;
    var r = Nc();
    (qe !== e || et !== t) && ((Xt = null), Hn(e, t));
    do
      try {
        bp();
        break;
      } catch (l) {
        kc(e, l);
      }
    while (!0);
    if ((Po(), (Se = n), (ai.current = r), Ue !== null)) throw Error(a(261));
    return ((qe = null), (et = 0), Ge);
  }
  function bp() {
    for (; Ue !== null; ) jc(Ue);
  }
  function Rp() {
    for (; Ue !== null && !rf(); ) jc(Ue);
  }
  function jc(e) {
    var t = Bc(e.alternate, e, vt);
    ((e.memoizedProps = e.pendingProps),
      t === null ? Cc(e) : (Ue = t),
      (as.current = null));
  }
  function Cc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = jp(n, t, vt)), n !== null)) {
          Ue = n;
          return;
        }
      } else {
        if (((n = Cp(n, t)), n !== null)) {
          ((n.flags &= 32767), (Ue = n));
          return;
        }
        if (e !== null)
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((Ge = 6), (Ue = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Ue = t;
        return;
      }
      Ue = t = e;
    } while (t !== null);
    Ge === 0 && (Ge = 5);
  }
  function zn(e, t, n) {
    var r = Ce,
      l = kt.transition;
    try {
      ((kt.transition = null), (Ce = 1), Ap(e, t, n, r));
    } finally {
      ((kt.transition = l), (Ce = r));
    }
    return null;
  }
  function Ap(e, t, n, r) {
    do fr();
    while (gn !== null);
    if ((Se & 6) !== 0) throw Error(a(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(a(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var s = n.lanes | n.childLanes;
    if (
      (mf(e, s),
      e === qe && ((Ue = qe = null), (et = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        di ||
        ((di = !0),
        Pc(xl, function () {
          return (fr(), null);
        })),
      (s = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || s)
    ) {
      ((s = kt.transition), (kt.transition = null));
      var c = Ce;
      Ce = 1;
      var m = Se;
      ((Se |= 4),
        (as.current = null),
        Ep(e, n),
        gc(n, e),
        ep(yo),
        (Cl = !!go),
        (yo = go = null),
        (e.current = n),
        Bp(n),
        lf(),
        (Se = m),
        (Ce = c),
        (kt.transition = s));
    } else e.current = n;
    if (
      (di && ((di = !1), (gn = e), (fi = l)),
      (s = e.pendingLanes),
      s === 0 && (hn = null),
      af(n.stateNode),
      pt(e, We()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest }));
    if (ci) throw ((ci = !1), (e = ds), (ds = null), e);
    return (
      (fi & 1) !== 0 && e.tag !== 0 && fr(),
      (s = e.pendingLanes),
      (s & 1) !== 0 ? (e === fs ? el++ : ((el = 0), (fs = e))) : (el = 0),
      dn(),
      null
    );
  }
  function fr() {
    if (gn !== null) {
      var e = ma(fi),
        t = kt.transition,
        n = Ce;
      try {
        if (((kt.transition = null), (Ce = 16 > e ? 16 : e), gn === null))
          var r = !1;
        else {
          if (((e = gn), (gn = null), (fi = 0), (Se & 6) !== 0))
            throw Error(a(331));
          var l = Se;
          for (Se |= 4, J = e.current; J !== null; ) {
            var s = J,
              c = s.child;
            if ((J.flags & 16) !== 0) {
              var m = s.deletions;
              if (m !== null) {
                for (var g = 0; g < m.length; g++) {
                  var M = m[g];
                  for (J = M; J !== null; ) {
                    var T = J;
                    switch (T.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Kr(8, T, s);
                    }
                    var H = T.child;
                    if (H !== null) ((H.return = T), (J = H));
                    else
                      for (; J !== null; ) {
                        T = J;
                        var L = T.sibling,
                          V = T.return;
                        if ((dc(T), T === M)) {
                          J = null;
                          break;
                        }
                        if (L !== null) {
                          ((L.return = V), (J = L));
                          break;
                        }
                        J = V;
                      }
                  }
                }
                var Q = s.alternate;
                if (Q !== null) {
                  var ee = Q.child;
                  if (ee !== null) {
                    Q.child = null;
                    do {
                      var $e = ee.sibling;
                      ((ee.sibling = null), (ee = $e));
                    } while (ee !== null);
                  }
                }
                J = s;
              }
            }
            if ((s.subtreeFlags & 2064) !== 0 && c !== null)
              ((c.return = s), (J = c));
            else
              e: for (; J !== null; ) {
                if (((s = J), (s.flags & 2048) !== 0))
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Kr(9, s, s.return);
                  }
                var N = s.sibling;
                if (N !== null) {
                  ((N.return = s.return), (J = N));
                  break e;
                }
                J = s.return;
              }
          }
          var w = e.current;
          for (J = w; J !== null; ) {
            c = J;
            var C = c.child;
            if ((c.subtreeFlags & 2064) !== 0 && C !== null)
              ((C.return = c), (J = C));
            else
              e: for (c = w; J !== null; ) {
                if (((m = J), (m.flags & 2048) !== 0))
                  try {
                    switch (m.tag) {
                      case 0:
                      case 11:
                      case 15:
                        si(9, m);
                    }
                  } catch (ne) {
                    ze(m, m.return, ne);
                  }
                if (m === c) {
                  J = null;
                  break e;
                }
                var z = m.sibling;
                if (z !== null) {
                  ((z.return = m.return), (J = z));
                  break e;
                }
                J = m.return;
              }
          }
          if (
            ((Se = l),
            dn(),
            Lt && typeof Lt.onPostCommitFiberRoot == "function")
          )
            try {
              Lt.onPostCommitFiberRoot(wl, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        ((Ce = n), (kt.transition = t));
      }
    }
    return !1;
  }
  function Mc(e, t, n) {
    ((t = ar(n, t)),
      (t = Vu(e, t, 1)),
      (e = pn(e, t, 1)),
      (t = at()),
      e !== null && (Nr(e, 1, t), pt(e, t)));
  }
  function ze(e, t, n) {
    if (e.tag === 3) Mc(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Mc(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (hn === null || !hn.has(r)))
          ) {
            ((e = ar(n, e)),
              (e = Gu(t, e, 1)),
              (t = pn(t, e, 1)),
              (e = at()),
              t !== null && (Nr(t, 1, e), pt(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Lp(e, t, n) {
    var r = e.pingCache;
    (r !== null && r.delete(t),
      (t = at()),
      (e.pingedLanes |= e.suspendedLanes & n),
      qe === e &&
        (et & n) === n &&
        (Ge === 4 || (Ge === 3 && (et & 130023424) === et && 500 > We() - cs)
          ? Hn(e, 0)
          : (us |= n)),
      pt(e, t));
  }
  function Ec(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Sl), (Sl <<= 1), (Sl & 130023424) === 0 && (Sl = 4194304)));
    var n = at();
    ((e = Zt(e, t)), e !== null && (Nr(e, t, n), pt(e, n)));
  }
  function Ip(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), Ec(e, n));
  }
  function Tp(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(a(314));
    }
    (r !== null && r.delete(t), Ec(e, n));
  }
  var Bc;
  Bc = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || ut.current) dt = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
          return ((dt = !1), Np(e, t, n));
        dt = (e.flags & 131072) !== 0;
      }
    else ((dt = !1), Ae && (t.flags & 1048576) !== 0 && au(t, Ul, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        (ii(e, t), (e = t.pendingProps));
        var l = er(t, nt.current);
        (or(t, n), (l = Wo(null, t, r, e, l, n)));
        var s = $o();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              ct(r) ? ((s = !0), Wl(t)) : (s = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Ao(t),
              (l.updater = ri),
              (t.stateNode = l),
              (l._reactInternals = t),
              qo(t, r, e, n),
              (t = Xo(null, t, r, !0, s, n)))
            : ((t.tag = 0), Ae && s && No(t), st(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (ii(e, t),
            (e = t.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (t.type = r),
            (l = t.tag = zp(r)),
            (e = Bt(r, e)),
            l)
          ) {
            case 0:
              t = Ko(null, t, r, e, n);
              break e;
            case 1:
              t = tc(null, t, r, e, n);
              break e;
            case 11:
              t = Ju(null, t, r, e, n);
              break e;
            case 14:
              t = Ku(null, t, r, Bt(r.type, e), n);
              break e;
          }
          throw Error(a(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : Bt(r, l)),
          Ko(e, t, r, l, n)
        );
      case 1:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : Bt(r, l)),
          tc(e, t, r, l, n)
        );
      case 3:
        e: {
          if ((nc(t), e === null)) throw Error(a(387));
          ((r = t.pendingProps),
            (s = t.memoizedState),
            (l = s.element),
            yu(e, t),
            Jl(t, r, null, n));
          var c = t.memoizedState;
          if (((r = c.element), s.isDehydrated))
            if (
              ((s = {
                element: r,
                isDehydrated: !1,
                cache: c.cache,
                pendingSuspenseBoundaries: c.pendingSuspenseBoundaries,
                transitions: c.transitions,
              }),
              (t.updateQueue.baseState = s),
              (t.memoizedState = s),
              t.flags & 256)
            ) {
              ((l = ar(Error(a(423)), t)), (t = rc(e, t, r, n, l)));
              break e;
            } else if (r !== l) {
              ((l = ar(Error(a(424)), t)), (t = rc(e, t, r, n, l)));
              break e;
            } else
              for (
                yt = an(t.stateNode.containerInfo.firstChild),
                  gt = t,
                  Ae = !0,
                  Et = null,
                  n = hu(t, null, r, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((rr(), r === l)) {
              t = Kt(e, t, n);
              break e;
            }
            st(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          wu(t),
          e === null && Mo(t),
          (r = t.type),
          (l = t.pendingProps),
          (s = e !== null ? e.memoizedProps : null),
          (c = l.children),
          vo(r, l) ? (c = null) : s !== null && vo(r, s) && (t.flags |= 32),
          ec(e, t),
          st(e, t, c, n),
          t.child
        );
      case 6:
        return (e === null && Mo(t), null);
      case 13:
        return lc(e, t, n);
      case 4:
        return (
          Lo(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = lr(t, null, r, n)) : st(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : Bt(r, l)),
          Ju(e, t, r, l, n)
        );
      case 7:
        return (st(e, t, t.pendingProps, n), t.child);
      case 8:
        return (st(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (st(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (l = t.pendingProps),
            (s = t.memoizedProps),
            (c = l.value),
            Pe(Yl, r._currentValue),
            (r._currentValue = c),
            s !== null)
          )
            if (Mt(s.value, c)) {
              if (s.children === l.children && !ut.current) {
                t = Kt(e, t, n);
                break e;
              }
            } else
              for (s = t.child, s !== null && (s.return = t); s !== null; ) {
                var m = s.dependencies;
                if (m !== null) {
                  c = s.child;
                  for (var g = m.firstContext; g !== null; ) {
                    if (g.context === r) {
                      if (s.tag === 1) {
                        ((g = Jt(-1, n & -n)), (g.tag = 2));
                        var M = s.updateQueue;
                        if (M !== null) {
                          M = M.shared;
                          var T = M.pending;
                          (T === null
                            ? (g.next = g)
                            : ((g.next = T.next), (T.next = g)),
                            (M.pending = g));
                        }
                      }
                      ((s.lanes |= n),
                        (g = s.alternate),
                        g !== null && (g.lanes |= n),
                        bo(s.return, n, t),
                        (m.lanes |= n));
                      break;
                    }
                    g = g.next;
                  }
                } else if (s.tag === 10) c = s.type === t.type ? null : s.child;
                else if (s.tag === 18) {
                  if (((c = s.return), c === null)) throw Error(a(341));
                  ((c.lanes |= n),
                    (m = c.alternate),
                    m !== null && (m.lanes |= n),
                    bo(c, n, t),
                    (c = s.sibling));
                } else c = s.child;
                if (c !== null) c.return = s;
                else
                  for (c = s; c !== null; ) {
                    if (c === t) {
                      c = null;
                      break;
                    }
                    if (((s = c.sibling), s !== null)) {
                      ((s.return = c.return), (c = s));
                      break;
                    }
                    c = c.return;
                  }
                s = c;
              }
          (st(e, t, l.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (r = t.pendingProps.children),
          or(t, n),
          (l = _t(l)),
          (r = r(l)),
          (t.flags |= 1),
          st(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (l = Bt(r, t.pendingProps)),
          (l = Bt(r.type, l)),
          Ku(e, t, r, l, n)
        );
      case 15:
        return Xu(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (l = t.pendingProps),
          (l = t.elementType === r ? l : Bt(r, l)),
          ii(e, t),
          (t.tag = 1),
          ct(r) ? ((e = !0), Wl(t)) : (e = !1),
          or(t, n),
          Ou(t, r, l),
          qo(t, r, l, n),
          Xo(null, t, r, !0, e, n)
        );
      case 19:
        return oc(e, t, n);
      case 22:
        return Qu(e, t, n);
    }
    throw Error(a(156, t.tag));
  };
  function Pc(e, t) {
    return ua(e, t);
  }
  function Hp(e, t, n, r) {
    ((this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Nt(e, t, n, r) {
    return new Hp(e, t, n, r);
  }
  function vs(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function zp(e) {
    if (typeof e == "function") return vs(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === A)) return 11;
      if (e === we) return 14;
    }
    return 2;
  }
  function xn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Nt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function gi(e, t, n, r, l, s) {
    var c = 2;
    if (((r = e), typeof e == "function")) vs(e) && (c = 1);
    else if (typeof e == "string") c = 5;
    else
      e: switch (e) {
        case _e:
          return Fn(n.children, l, s, t);
        case je:
          ((c = 8), (l |= 8));
          break;
        case Ee:
          return (
            (e = Nt(12, n, t, l | 2)),
            (e.elementType = Ee),
            (e.lanes = s),
            e
          );
        case re:
          return (
            (e = Nt(13, n, t, l)),
            (e.elementType = re),
            (e.lanes = s),
            e
          );
        case ve:
          return (
            (e = Nt(19, n, t, l)),
            (e.elementType = ve),
            (e.lanes = s),
            e
          );
        case te:
          return yi(n, l, s, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Re:
                c = 10;
                break e;
              case F:
                c = 9;
                break e;
              case A:
                c = 11;
                break e;
              case we:
                c = 14;
                break e;
              case Oe:
                ((c = 16), (r = null));
                break e;
            }
          throw Error(a(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = Nt(c, n, t, l)),
      (t.elementType = e),
      (t.type = r),
      (t.lanes = s),
      t
    );
  }
  function Fn(e, t, n, r) {
    return ((e = Nt(7, e, r, t)), (e.lanes = n), e);
  }
  function yi(e, t, n, r) {
    return (
      (e = Nt(22, e, r, t)),
      (e.elementType = te),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function xs(e, t, n) {
    return ((e = Nt(6, e, null, t)), (e.lanes = n), e);
  }
  function ws(e, t, n) {
    return (
      (t = Nt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Fp(e, t, n, r, l) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Gi(0)),
      (this.expirationTimes = Gi(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Gi(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null));
  }
  function _s(e, t, n, r, l, s, c, m, g) {
    return (
      (e = new Fp(e, t, n, m, g)),
      t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
      (s = Nt(3, null, null, t)),
      (e.current = s),
      (s.stateNode = e),
      (s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Ao(s),
      e
    );
  }
  function Wp(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: de,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Dc(e) {
    if (!e) return cn;
    e = e._reactInternals;
    e: {
      if (En(e) !== e || e.tag !== 1) throw Error(a(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (ct(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(a(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (ct(n)) return iu(e, n, t);
    }
    return t;
  }
  function bc(e, t, n, r, l, s, c, m, g) {
    return (
      (e = _s(n, r, !0, e, l, s, c, m, g)),
      (e.context = Dc(null)),
      (n = e.current),
      (r = at()),
      (l = yn(n)),
      (s = Jt(r, l)),
      (s.callback = t ?? null),
      pn(n, s, l),
      (e.current.lanes = l),
      Nr(e, l, r),
      pt(e, r),
      e
    );
  }
  function vi(e, t, n, r) {
    var l = t.current,
      s = at(),
      c = yn(l);
    return (
      (n = Dc(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Jt(s, c)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = pn(l, t, c)),
      e !== null && (bt(e, l, c, s), Zl(e, l, c)),
      c
    );
  }
  function xi(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Rc(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ss(e, t) {
    (Rc(e, t), (e = e.alternate) && Rc(e, t));
  }
  function $p() {
    return null;
  }
  var Ac =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function ks(e) {
    this._internalRoot = e;
  }
  ((wi.prototype.render = ks.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(a(409));
      vi(e, t, null, null);
    }),
    (wi.prototype.unmount = ks.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Tn(function () {
            vi(null, e, null, null);
          }),
            (t[Vt] = null));
        }
      }));
  function wi(e) {
    this._internalRoot = e;
  }
  wi.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = ya();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < ln.length && t !== 0 && t < ln[n].priority; n++);
      (ln.splice(n, 0, e), n === 0 && wa(e));
    }
  };
  function Ns(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function _i(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Lc() {}
  function Op(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var s = r;
        r = function () {
          var M = xi(c);
          s.call(M);
        };
      }
      var c = bc(t, r, e, 0, null, !1, !1, "", Lc);
      return (
        (e._reactRootContainer = c),
        (e[Vt] = c.current),
        Hr(e.nodeType === 8 ? e.parentNode : e),
        Tn(),
        c
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var m = r;
      r = function () {
        var M = xi(g);
        m.call(M);
      };
    }
    var g = _s(e, 0, !1, null, null, !1, !1, "", Lc);
    return (
      (e._reactRootContainer = g),
      (e[Vt] = g.current),
      Hr(e.nodeType === 8 ? e.parentNode : e),
      Tn(function () {
        vi(t, g, n, r);
      }),
      g
    );
  }
  function Si(e, t, n, r, l) {
    var s = n._reactRootContainer;
    if (s) {
      var c = s;
      if (typeof l == "function") {
        var m = l;
        l = function () {
          var g = xi(c);
          m.call(g);
        };
      }
      vi(t, c, e, l);
    } else c = Op(n, t, e, l, r);
    return xi(c);
  }
  ((ha = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = kr(t.pendingLanes);
          n !== 0 &&
            (Yi(t, n | 1),
            pt(t, We()),
            (Se & 6) === 0 && ((dr = We() + 500), dn()));
        }
        break;
      case 13:
        (Tn(function () {
          var r = Zt(e, 1);
          if (r !== null) {
            var l = at();
            bt(r, e, 1, l);
          }
        }),
          Ss(e, 1));
    }
  }),
    (qi = function (e) {
      if (e.tag === 13) {
        var t = Zt(e, 134217728);
        if (t !== null) {
          var n = at();
          bt(t, e, 134217728, n);
        }
        Ss(e, 134217728);
      }
    }),
    (ga = function (e) {
      if (e.tag === 13) {
        var t = yn(e),
          n = Zt(e, t);
        if (n !== null) {
          var r = at();
          bt(n, e, t, r);
        }
        Ss(e, t);
      }
    }),
    (ya = function () {
      return Ce;
    }),
    (va = function (e, t) {
      var n = Ce;
      try {
        return ((Ce = e), t());
      } finally {
        Ce = n;
      }
    }),
    (Fi = function (e, t, n) {
      switch (t) {
        case "input":
          if ((yr(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var l = zl(r);
                if (!l) throw Error(a(90));
                (kn(r), yr(r, l));
              }
            }
          }
          break;
        case "textarea":
          jn(e, n);
          break;
        case "select":
          ((t = n.value), t != null && Fe(e, !!n.multiple, t, !1));
      }
    }),
    (na = hs),
    (ra = Tn));
  var Up = { usingClientEntryPoint: !1, Events: [Wr, Xn, zl, ea, ta, hs] },
    tl = {
      findFiberByHostInstance: Bn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Vp = {
      bundleType: tl.bundleType,
      version: tl.version,
      rendererPackageName: tl.rendererPackageName,
      rendererConfig: tl.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: ae.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = sa(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: tl.findFiberByHostInstance || $p,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ki = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ki.isDisabled && ki.supportsFiber)
      try {
        ((wl = ki.inject(Vp)), (Lt = ki));
      } catch {}
  }
  return (
    (mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Up),
    (mt.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Ns(t)) throw Error(a(200));
      return Wp(e, t, null, n);
    }),
    (mt.createRoot = function (e, t) {
      if (!Ns(e)) throw Error(a(299));
      var n = !1,
        r = "",
        l = Ac;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = _s(e, 1, !1, null, null, n, !1, r, l)),
        (e[Vt] = t.current),
        Hr(e.nodeType === 8 ? e.parentNode : e),
        new ks(t)
      );
    }),
    (mt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(a(188))
          : ((e = Object.keys(e).join(",")), Error(a(268, e)));
      return ((e = sa(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (mt.flushSync = function (e) {
      return Tn(e);
    }),
    (mt.hydrate = function (e, t, n) {
      if (!_i(t)) throw Error(a(200));
      return Si(null, e, t, !0, n);
    }),
    (mt.hydrateRoot = function (e, t, n) {
      if (!Ns(e)) throw Error(a(405));
      var r = (n != null && n.hydratedSources) || null,
        l = !1,
        s = "",
        c = Ac;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (c = n.onRecoverableError)),
        (t = bc(t, null, e, 1, n ?? null, l, !1, s, c)),
        (e[Vt] = t.current),
        Hr(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          ((n = r[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l));
      return new wi(t);
    }),
    (mt.render = function (e, t, n) {
      if (!_i(t)) throw Error(a(200));
      return Si(null, e, t, !1, n);
    }),
    (mt.unmountComponentAtNode = function (e) {
      if (!_i(e)) throw Error(a(40));
      return e._reactRootContainer
        ? (Tn(function () {
            Si(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[Vt] = null));
            });
          }),
          !0)
        : !1;
    }),
    (mt.unstable_batchedUpdates = hs),
    (mt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!_i(n)) throw Error(a(200));
      if (e == null || e._reactInternals === void 0) throw Error(a(38));
      return Si(e, t, n, !1, r);
    }),
    (mt.version = "18.3.1-next-f1338f8080-20240426"),
    mt
  );
}
var Oc;
function em() {
  if (Oc) return Ms.exports;
  Oc = 1;
  function o() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (u) {
        console.error(u);
      }
  }
  return (o(), (Ms.exports = Qp()), Ms.exports);
}
var Uc;
function tm() {
  if (Uc) return Ni;
  Uc = 1;
  var o = em();
  return ((Ni.createRoot = o.createRoot), (Ni.hydrateRoot = o.hydrateRoot), Ni);
}
var nm = tm();
const rm = md(nm);
/**
 * react-router v7.13.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Vc = "popstate";
function Gc(o) {
  return (
    typeof o == "object" &&
    o != null &&
    "pathname" in o &&
    "search" in o &&
    "hash" in o &&
    "state" in o &&
    "key" in o
  );
}
function lm(o = {}) {
  function u(d, f) {
    var S;
    let p = (S = f.state) == null ? void 0 : S.masked,
      { pathname: h, search: x, hash: v } = p || d.location;
    return Ts(
      "",
      { pathname: h, search: x, hash: v },
      (f.state && f.state.usr) || null,
      (f.state && f.state.key) || "default",
      p
        ? {
            pathname: d.location.pathname,
            search: d.location.search,
            hash: d.location.hash,
          }
        : void 0,
    );
  }
  function a(d, f) {
    return typeof f == "string" ? f : il(f);
  }
  return om(u, a, null, o);
}
function He(o, u) {
  if (o === !1 || o === null || typeof o > "u") throw new Error(u);
}
function Rt(o, u) {
  if (!o) {
    typeof console < "u" && console.warn(u);
    try {
      throw new Error(u);
    } catch {}
  }
}
function im() {
  return Math.random().toString(36).substring(2, 10);
}
function Yc(o, u) {
  return {
    usr: o.state,
    key: o.key,
    idx: u,
    masked: o.unstable_mask
      ? { pathname: o.pathname, search: o.search, hash: o.hash }
      : void 0,
  };
}
function Ts(o, u, a = null, d, f) {
  return {
    pathname: typeof o == "string" ? o : o.pathname,
    search: "",
    hash: "",
    ...(typeof u == "string" ? hr(u) : u),
    state: a,
    key: (u && u.key) || d || im(),
    unstable_mask: f,
  };
}
function il({ pathname: o = "/", search: u = "", hash: a = "" }) {
  return (
    u && u !== "?" && (o += u.charAt(0) === "?" ? u : "?" + u),
    a && a !== "#" && (o += a.charAt(0) === "#" ? a : "#" + a),
    o
  );
}
function hr(o) {
  let u = {};
  if (o) {
    let a = o.indexOf("#");
    a >= 0 && ((u.hash = o.substring(a)), (o = o.substring(0, a)));
    let d = o.indexOf("?");
    (d >= 0 && ((u.search = o.substring(d)), (o = o.substring(0, d))),
      o && (u.pathname = o));
  }
  return u;
}
function om(o, u, a, d = {}) {
  let { window: f = document.defaultView, v5Compat: p = !1 } = d,
    h = f.history,
    x = "POP",
    v = null,
    S = j();
  S == null && ((S = 0), h.replaceState({ ...h.state, idx: S }, ""));
  function j() {
    return (h.state || { idx: null }).idx;
  }
  function k() {
    x = "POP";
    let E = j(),
      P = E == null ? null : E - S;
    ((S = E), v && v({ action: x, location: B.location, delta: P }));
  }
  function D(E, P) {
    x = "PUSH";
    let Y = Gc(E) ? E : Ts(B.location, E, P);
    S = j() + 1;
    let q = Yc(Y, S),
      ae = B.createHref(Y.unstable_mask || Y);
    try {
      h.pushState(q, "", ae);
    } catch (le) {
      if (le instanceof DOMException && le.name === "DataCloneError") throw le;
      f.location.assign(ae);
    }
    p && v && v({ action: x, location: B.location, delta: 1 });
  }
  function W(E, P) {
    x = "REPLACE";
    let Y = Gc(E) ? E : Ts(B.location, E, P);
    S = j();
    let q = Yc(Y, S),
      ae = B.createHref(Y.unstable_mask || Y);
    (h.replaceState(q, "", ae),
      p && v && v({ action: x, location: B.location, delta: 0 }));
  }
  function R(E) {
    return sm(E);
  }
  let B = {
    get action() {
      return x;
    },
    get location() {
      return o(f, h);
    },
    listen(E) {
      if (v) throw new Error("A history only accepts one active listener");
      return (
        f.addEventListener(Vc, k),
        (v = E),
        () => {
          (f.removeEventListener(Vc, k), (v = null));
        }
      );
    },
    createHref(E) {
      return u(f, E);
    },
    createURL: R,
    encodeLocation(E) {
      let P = R(E);
      return { pathname: P.pathname, search: P.search, hash: P.hash };
    },
    push: D,
    replace: W,
    go(E) {
      return h.go(E);
    },
  };
  return B;
}
function sm(o, u = !1) {
  let a = "http://localhost";
  (typeof window < "u" &&
    (a =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    He(a, "No window.location.(origin|href) available to create URL"));
  let d = typeof o == "string" ? o : il(o);
  return (
    (d = d.replace(/ $/, "%20")),
    !u && d.startsWith("//") && (d = a + d),
    new URL(d, a)
  );
}
function hd(o, u, a = "/") {
  return am(o, u, a, !1);
}
function am(o, u, a, d) {
  let f = typeof u == "string" ? hr(u) : u,
    p = en(f.pathname || "/", a);
  if (p == null) return null;
  let h = gd(o);
  um(h);
  let x = null;
  for (let v = 0; x == null && v < h.length; ++v) {
    let S = wm(p);
    x = vm(h[v], S, d);
  }
  return x;
}
function gd(o, u = [], a = [], d = "", f = !1) {
  let p = (h, x, v = f, S) => {
    let j = {
      relativePath: S === void 0 ? h.path || "" : S,
      caseSensitive: h.caseSensitive === !0,
      childrenIndex: x,
      route: h,
    };
    if (j.relativePath.startsWith("/")) {
      if (!j.relativePath.startsWith(d) && v) return;
      (He(
        j.relativePath.startsWith(d),
        `Absolute route path "${j.relativePath}" nested under path "${d}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (j.relativePath = j.relativePath.slice(d.length)));
    }
    let k = Ft([d, j.relativePath]),
      D = a.concat(j);
    (h.children &&
      h.children.length > 0 &&
      (He(
        h.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${k}".`,
      ),
      gd(h.children, u, D, k, v)),
      !(h.path == null && !h.index) &&
        u.push({ path: k, score: gm(k, h.index), routesMeta: D }));
  };
  return (
    o.forEach((h, x) => {
      var v;
      if (h.path === "" || !((v = h.path) != null && v.includes("?"))) p(h, x);
      else for (let S of yd(h.path)) p(h, x, !0, S);
    }),
    u
  );
}
function yd(o) {
  let u = o.split("/");
  if (u.length === 0) return [];
  let [a, ...d] = u,
    f = a.endsWith("?"),
    p = a.replace(/\?$/, "");
  if (d.length === 0) return f ? [p, ""] : [p];
  let h = yd(d.join("/")),
    x = [];
  return (
    x.push(...h.map((v) => (v === "" ? p : [p, v].join("/")))),
    f && x.push(...h),
    x.map((v) => (o.startsWith("/") && v === "" ? "/" : v))
  );
}
function um(o) {
  o.sort((u, a) =>
    u.score !== a.score
      ? a.score - u.score
      : ym(
          u.routesMeta.map((d) => d.childrenIndex),
          a.routesMeta.map((d) => d.childrenIndex),
        ),
  );
}
var cm = /^:[\w-]+$/,
  dm = 3,
  fm = 2,
  pm = 1,
  mm = 10,
  hm = -2,
  qc = (o) => o === "*";
function gm(o, u) {
  let a = o.split("/"),
    d = a.length;
  return (
    a.some(qc) && (d += hm),
    u && (d += fm),
    a
      .filter((f) => !qc(f))
      .reduce((f, p) => f + (cm.test(p) ? dm : p === "" ? pm : mm), d)
  );
}
function ym(o, u) {
  return o.length === u.length && o.slice(0, -1).every((d, f) => d === u[f])
    ? o[o.length - 1] - u[u.length - 1]
    : 0;
}
function vm(o, u, a = !1) {
  let { routesMeta: d } = o,
    f = {},
    p = "/",
    h = [];
  for (let x = 0; x < d.length; ++x) {
    let v = d[x],
      S = x === d.length - 1,
      j = p === "/" ? u : u.slice(p.length) || "/",
      k = Di(
        { path: v.relativePath, caseSensitive: v.caseSensitive, end: S },
        j,
      ),
      D = v.route;
    if (
      (!k &&
        S &&
        a &&
        !d[d.length - 1].route.index &&
        (k = Di(
          { path: v.relativePath, caseSensitive: v.caseSensitive, end: !1 },
          j,
        )),
      !k)
    )
      return null;
    (Object.assign(f, k.params),
      h.push({
        params: f,
        pathname: Ft([p, k.pathname]),
        pathnameBase: Nm(Ft([p, k.pathnameBase])),
        route: D,
      }),
      k.pathnameBase !== "/" && (p = Ft([p, k.pathnameBase])));
  }
  return h;
}
function Di(o, u) {
  typeof o == "string" && (o = { path: o, caseSensitive: !1, end: !0 });
  let [a, d] = xm(o.path, o.caseSensitive, o.end),
    f = u.match(a);
  if (!f) return null;
  let p = f[0],
    h = p.replace(/(.)\/+$/, "$1"),
    x = f.slice(1);
  return {
    params: d.reduce((S, { paramName: j, isOptional: k }, D) => {
      if (j === "*") {
        let R = x[D] || "";
        h = p.slice(0, p.length - R.length).replace(/(.)\/+$/, "$1");
      }
      const W = x[D];
      return (
        k && !W ? (S[j] = void 0) : (S[j] = (W || "").replace(/%2F/g, "/")),
        S
      );
    }, {}),
    pathname: p,
    pathnameBase: h,
    pattern: o,
  };
}
function xm(o, u = !1, a = !0) {
  Rt(
    o === "*" || !o.endsWith("*") || o.endsWith("/*"),
    `Route path "${o}" will be treated as if it were "${o.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${o.replace(/\*$/, "/*")}".`,
  );
  let d = [],
    f =
      "^" +
      o
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(/\/:([\w-]+)(\?)?/g, (h, x, v, S, j) => {
          if ((d.push({ paramName: x, isOptional: v != null }), v)) {
            let k = j.charAt(S + h.length);
            return k && k !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
          }
          return "/([^\\/]+)";
        })
        .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return (
    o.endsWith("*")
      ? (d.push({ paramName: "*" }),
        (f += o === "*" || o === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : a
        ? (f += "\\/*$")
        : o !== "" && o !== "/" && (f += "(?:(?=\\/|$))"),
    [new RegExp(f, u ? void 0 : "i"), d]
  );
}
function wm(o) {
  try {
    return o
      .split("/")
      .map((u) => decodeURIComponent(u).replace(/\//g, "%2F"))
      .join("/");
  } catch (u) {
    return (
      Rt(
        !1,
        `The URL path "${o}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`,
      ),
      o
    );
  }
}
function en(o, u) {
  if (u === "/") return o;
  if (!o.toLowerCase().startsWith(u.toLowerCase())) return null;
  let a = u.endsWith("/") ? u.length - 1 : u.length,
    d = o.charAt(a);
  return d && d !== "/" ? null : o.slice(a) || "/";
}
var _m = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function Sm(o, u = "/") {
  let {
      pathname: a,
      search: d = "",
      hash: f = "",
    } = typeof o == "string" ? hr(o) : o,
    p;
  return (
    a
      ? ((a = a.replace(/\/\/+/g, "/")),
        a.startsWith("/") ? (p = Zc(a.substring(1), "/")) : (p = Zc(a, u)))
      : (p = u),
    { pathname: p, search: jm(d), hash: Cm(f) }
  );
}
function Zc(o, u) {
  let a = u.replace(/\/+$/, "").split("/");
  return (
    o.split("/").forEach((f) => {
      f === ".." ? a.length > 1 && a.pop() : f !== "." && a.push(f);
    }),
    a.length > 1 ? a.join("/") : "/"
  );
}
function Ps(o, u, a, d) {
  return `Cannot include a '${o}' character in a manually specified \`to.${u}\` field [${JSON.stringify(d)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function km(o) {
  return o.filter(
    (u, a) => a === 0 || (u.route.path && u.route.path.length > 0),
  );
}
function vd(o) {
  let u = km(o);
  return u.map((a, d) => (d === u.length - 1 ? a.pathname : a.pathnameBase));
}
function Ws(o, u, a, d = !1) {
  let f;
  typeof o == "string"
    ? (f = hr(o))
    : ((f = { ...o }),
      He(
        !f.pathname || !f.pathname.includes("?"),
        Ps("?", "pathname", "search", f),
      ),
      He(
        !f.pathname || !f.pathname.includes("#"),
        Ps("#", "pathname", "hash", f),
      ),
      He(!f.search || !f.search.includes("#"), Ps("#", "search", "hash", f)));
  let p = o === "" || f.pathname === "",
    h = p ? "/" : f.pathname,
    x;
  if (h == null) x = a;
  else {
    let k = u.length - 1;
    if (!d && h.startsWith("..")) {
      let D = h.split("/");
      for (; D[0] === ".."; ) (D.shift(), (k -= 1));
      f.pathname = D.join("/");
    }
    x = k >= 0 ? u[k] : "/";
  }
  let v = Sm(f, x),
    S = h && h !== "/" && h.endsWith("/"),
    j = (p || h === ".") && a.endsWith("/");
  return (!v.pathname.endsWith("/") && (S || j) && (v.pathname += "/"), v);
}
var Ft = (o) => o.join("/").replace(/\/\/+/g, "/"),
  Nm = (o) => o.replace(/\/+$/, "").replace(/^\/*/, "/"),
  jm = (o) => (!o || o === "?" ? "" : o.startsWith("?") ? o : "?" + o),
  Cm = (o) => (!o || o === "#" ? "" : o.startsWith("#") ? o : "#" + o),
  Mm = class {
    constructor(o, u, a, d = !1) {
      ((this.status = o),
        (this.statusText = u || ""),
        (this.internal = d),
        a instanceof Error
          ? ((this.data = a.toString()), (this.error = a))
          : (this.data = a));
    }
  };
function Em(o) {
  return (
    o != null &&
    typeof o.status == "number" &&
    typeof o.statusText == "string" &&
    typeof o.internal == "boolean" &&
    "data" in o
  );
}
function Bm(o) {
  return (
    o
      .map((u) => u.route.path)
      .filter(Boolean)
      .join("/")
      .replace(/\/\/*/g, "/") || "/"
  );
}
var xd =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
function wd(o, u) {
  let a = o;
  if (typeof a != "string" || !_m.test(a))
    return { absoluteURL: void 0, isExternal: !1, to: a };
  let d = a,
    f = !1;
  if (xd)
    try {
      let p = new URL(window.location.href),
        h = a.startsWith("//") ? new URL(p.protocol + a) : new URL(a),
        x = en(h.pathname, u);
      h.origin === p.origin && x != null
        ? (a = x + h.search + h.hash)
        : (f = !0);
    } catch {
      Rt(
        !1,
        `<Link to="${a}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
      );
    }
  return { absoluteURL: d, isExternal: f, to: a };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var _d = ["POST", "PUT", "PATCH", "DELETE"];
new Set(_d);
var Pm = ["GET", ..._d];
new Set(Pm);
var gr = y.createContext(null);
gr.displayName = "DataRouter";
var Ai = y.createContext(null);
Ai.displayName = "DataRouterState";
var Dm = y.createContext(!1),
  Sd = y.createContext({ isTransitioning: !1 });
Sd.displayName = "ViewTransition";
var bm = y.createContext(new Map());
bm.displayName = "Fetchers";
var Rm = y.createContext(null);
Rm.displayName = "Await";
var jt = y.createContext(null);
jt.displayName = "Navigation";
var sl = y.createContext(null);
sl.displayName = "Location";
var Wt = y.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Wt.displayName = "Route";
var $s = y.createContext(null);
$s.displayName = "RouteError";
var kd = "REACT_ROUTER_ERROR",
  Am = "REDIRECT",
  Lm = "ROUTE_ERROR_RESPONSE";
function Im(o) {
  if (o.startsWith(`${kd}:${Am}:{`))
    try {
      let u = JSON.parse(o.slice(28));
      if (
        typeof u == "object" &&
        u &&
        typeof u.status == "number" &&
        typeof u.statusText == "string" &&
        typeof u.location == "string" &&
        typeof u.reloadDocument == "boolean" &&
        typeof u.replace == "boolean"
      )
        return u;
    } catch {}
}
function Tm(o) {
  if (o.startsWith(`${kd}:${Lm}:{`))
    try {
      let u = JSON.parse(o.slice(40));
      if (
        typeof u == "object" &&
        u &&
        typeof u.status == "number" &&
        typeof u.statusText == "string"
      )
        return new Mm(u.status, u.statusText, u.data);
    } catch {}
}
function Hm(o, { relative: u } = {}) {
  He(
    al(),
    "useHref() may be used only in the context of a <Router> component.",
  );
  let { basename: a, navigator: d } = y.useContext(jt),
    { hash: f, pathname: p, search: h } = ul(o, { relative: u }),
    x = p;
  return (
    a !== "/" && (x = p === "/" ? a : Ft([a, p])),
    d.createHref({ pathname: x, search: h, hash: f })
  );
}
function al() {
  return y.useContext(sl) != null;
}
function $t() {
  return (
    He(
      al(),
      "useLocation() may be used only in the context of a <Router> component.",
    ),
    y.useContext(sl).location
  );
}
var Nd =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function jd(o) {
  y.useContext(jt).static || y.useLayoutEffect(o);
}
function Ot() {
  let { isDataRoute: o } = y.useContext(Wt);
  return o ? Km() : zm();
}
function zm() {
  He(
    al(),
    "useNavigate() may be used only in the context of a <Router> component.",
  );
  let o = y.useContext(gr),
    { basename: u, navigator: a } = y.useContext(jt),
    { matches: d } = y.useContext(Wt),
    { pathname: f } = $t(),
    p = JSON.stringify(vd(d)),
    h = y.useRef(!1);
  return (
    jd(() => {
      h.current = !0;
    }),
    y.useCallback(
      (v, S = {}) => {
        if ((Rt(h.current, Nd), !h.current)) return;
        if (typeof v == "number") {
          a.go(v);
          return;
        }
        let j = Ws(v, JSON.parse(p), f, S.relative === "path");
        (o == null &&
          u !== "/" &&
          (j.pathname = j.pathname === "/" ? u : Ft([u, j.pathname])),
          (S.replace ? a.replace : a.push)(j, S.state, S));
      },
      [u, a, p, f, o],
    )
  );
}
y.createContext(null);
function Cd() {
  let { matches: o } = y.useContext(Wt),
    u = o[o.length - 1];
  return u ? u.params : {};
}
function ul(o, { relative: u } = {}) {
  let { matches: a } = y.useContext(Wt),
    { pathname: d } = $t(),
    f = JSON.stringify(vd(a));
  return y.useMemo(() => Ws(o, JSON.parse(f), d, u === "path"), [o, f, d, u]);
}
function Fm(o, u) {
  return Md(o, u);
}
function Md(o, u, a) {
  var E;
  He(
    al(),
    "useRoutes() may be used only in the context of a <Router> component.",
  );
  let { navigator: d } = y.useContext(jt),
    { matches: f } = y.useContext(Wt),
    p = f[f.length - 1],
    h = p ? p.params : {},
    x = p ? p.pathname : "/",
    v = p ? p.pathnameBase : "/",
    S = p && p.route;
  {
    let P = (S && S.path) || "";
    Bd(
      x,
      !S || P.endsWith("*") || P.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${P}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${P}"> to <Route path="${P === "/" ? "*" : `${P}/*`}">.`,
    );
  }
  let j = $t(),
    k;
  if (u) {
    let P = typeof u == "string" ? hr(u) : u;
    (He(
      v === "/" || ((E = P.pathname) == null ? void 0 : E.startsWith(v)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${P.pathname}" was given in the \`location\` prop.`,
    ),
      (k = P));
  } else k = j;
  let D = k.pathname || "/",
    W = D;
  if (v !== "/") {
    let P = v.replace(/^\//, "").split("/");
    W = "/" + D.replace(/^\//, "").split("/").slice(P.length).join("/");
  }
  let R = hd(o, { pathname: W });
  (Rt(
    S || R != null,
    `No routes matched location "${k.pathname}${k.search}${k.hash}" `,
  ),
    Rt(
      R == null ||
        R[R.length - 1].route.element !== void 0 ||
        R[R.length - 1].route.Component !== void 0 ||
        R[R.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${k.pathname}${k.search}${k.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ));
  let B = Vm(
    R &&
      R.map((P) =>
        Object.assign({}, P, {
          params: Object.assign({}, h, P.params),
          pathname: Ft([
            v,
            d.encodeLocation
              ? d.encodeLocation(
                  P.pathname.replace(/\?/g, "%3F").replace(/#/g, "%23"),
                ).pathname
              : P.pathname,
          ]),
          pathnameBase:
            P.pathnameBase === "/"
              ? v
              : Ft([
                  v,
                  d.encodeLocation
                    ? d.encodeLocation(
                        P.pathnameBase
                          .replace(/\?/g, "%3F")
                          .replace(/#/g, "%23"),
                      ).pathname
                    : P.pathnameBase,
                ]),
        }),
      ),
    f,
    a,
  );
  return u && B
    ? y.createElement(
        sl.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              unstable_mask: void 0,
              ...k,
            },
            navigationType: "POP",
          },
        },
        B,
      )
    : B;
}
function Wm() {
  let o = Jm(),
    u = Em(o)
      ? `${o.status} ${o.statusText}`
      : o instanceof Error
        ? o.message
        : JSON.stringify(o),
    a = o instanceof Error ? o.stack : null,
    d = "rgba(200,200,200, 0.5)",
    f = { padding: "0.5rem", backgroundColor: d },
    p = { padding: "2px 4px", backgroundColor: d },
    h = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", o),
    (h = y.createElement(
      y.Fragment,
      null,
      y.createElement("p", null, "💿 Hey developer 👋"),
      y.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        y.createElement("code", { style: p }, "ErrorBoundary"),
        " or",
        " ",
        y.createElement("code", { style: p }, "errorElement"),
        " prop on your route.",
      ),
    )),
    y.createElement(
      y.Fragment,
      null,
      y.createElement("h2", null, "Unexpected Application Error!"),
      y.createElement("h3", { style: { fontStyle: "italic" } }, u),
      a ? y.createElement("pre", { style: f }, a) : null,
      h,
    )
  );
}
var $m = y.createElement(Wm, null),
  Ed = class extends y.Component {
    constructor(o) {
      (super(o),
        (this.state = {
          location: o.location,
          revalidation: o.revalidation,
          error: o.error,
        }));
    }
    static getDerivedStateFromError(o) {
      return { error: o };
    }
    static getDerivedStateFromProps(o, u) {
      return u.location !== o.location ||
        (u.revalidation !== "idle" && o.revalidation === "idle")
        ? { error: o.error, location: o.location, revalidation: o.revalidation }
        : {
            error: o.error !== void 0 ? o.error : u.error,
            location: u.location,
            revalidation: o.revalidation || u.revalidation,
          };
    }
    componentDidCatch(o, u) {
      this.props.onError
        ? this.props.onError(o, u)
        : console.error(
            "React Router caught the following error during render",
            o,
          );
    }
    render() {
      let o = this.state.error;
      if (
        this.context &&
        typeof o == "object" &&
        o &&
        "digest" in o &&
        typeof o.digest == "string"
      ) {
        const a = Tm(o.digest);
        a && (o = a);
      }
      let u =
        o !== void 0
          ? y.createElement(
              Wt.Provider,
              { value: this.props.routeContext },
              y.createElement($s.Provider, {
                value: o,
                children: this.props.component,
              }),
            )
          : this.props.children;
      return this.context ? y.createElement(Om, { error: o }, u) : u;
    }
  };
Ed.contextType = Dm;
var Ds = new WeakMap();
function Om({ children: o, error: u }) {
  let { basename: a } = y.useContext(jt);
  if (
    typeof u == "object" &&
    u &&
    "digest" in u &&
    typeof u.digest == "string"
  ) {
    let d = Im(u.digest);
    if (d) {
      let f = Ds.get(u);
      if (f) throw f;
      let p = wd(d.location, a);
      if (xd && !Ds.get(u))
        if (p.isExternal || d.reloadDocument)
          window.location.href = p.absoluteURL || p.to;
        else {
          const h = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(p.to, {
              replace: d.replace,
            }),
          );
          throw (Ds.set(u, h), h);
        }
      return y.createElement("meta", {
        httpEquiv: "refresh",
        content: `0;url=${p.absoluteURL || p.to}`,
      });
    }
  }
  return o;
}
function Um({ routeContext: o, match: u, children: a }) {
  let d = y.useContext(gr);
  return (
    d &&
      d.static &&
      d.staticContext &&
      (u.route.errorElement || u.route.ErrorBoundary) &&
      (d.staticContext._deepestRenderedBoundaryId = u.route.id),
    y.createElement(Wt.Provider, { value: o }, a)
  );
}
function Vm(o, u = [], a) {
  let d = a == null ? void 0 : a.state;
  if (o == null) {
    if (!d) return null;
    if (d.errors) o = d.matches;
    else if (u.length === 0 && !d.initialized && d.matches.length > 0)
      o = d.matches;
    else return null;
  }
  let f = o,
    p = d == null ? void 0 : d.errors;
  if (p != null) {
    let j = f.findIndex(
      (k) => k.route.id && (p == null ? void 0 : p[k.route.id]) !== void 0,
    );
    (He(
      j >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`,
    ),
      (f = f.slice(0, Math.min(f.length, j + 1))));
  }
  let h = !1,
    x = -1;
  if (a && d) {
    h = d.renderFallback;
    for (let j = 0; j < f.length; j++) {
      let k = f[j];
      if (
        ((k.route.HydrateFallback || k.route.hydrateFallbackElement) && (x = j),
        k.route.id)
      ) {
        let { loaderData: D, errors: W } = d,
          R =
            k.route.loader &&
            !D.hasOwnProperty(k.route.id) &&
            (!W || W[k.route.id] === void 0);
        if (k.route.lazy || R) {
          (a.isStatic && (h = !0),
            x >= 0 ? (f = f.slice(0, x + 1)) : (f = [f[0]]));
          break;
        }
      }
    }
  }
  let v = a == null ? void 0 : a.onError,
    S =
      d && v
        ? (j, k) => {
            var D, W;
            v(j, {
              location: d.location,
              params:
                ((W = (D = d.matches) == null ? void 0 : D[0]) == null
                  ? void 0
                  : W.params) ?? {},
              unstable_pattern: Bm(d.matches),
              errorInfo: k,
            });
          }
        : void 0;
  return f.reduceRight((j, k, D) => {
    let W,
      R = !1,
      B = null,
      E = null;
    d &&
      ((W = p && k.route.id ? p[k.route.id] : void 0),
      (B = k.route.errorElement || $m),
      h &&
        (x < 0 && D === 0
          ? (Bd(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (R = !0),
            (E = null))
          : x === D &&
            ((R = !0), (E = k.route.hydrateFallbackElement || null))));
    let P = u.concat(f.slice(0, D + 1)),
      Y = () => {
        let q;
        return (
          W
            ? (q = B)
            : R
              ? (q = E)
              : k.route.Component
                ? (q = y.createElement(k.route.Component, null))
                : k.route.element
                  ? (q = k.route.element)
                  : (q = j),
          y.createElement(Um, {
            match: k,
            routeContext: { outlet: j, matches: P, isDataRoute: d != null },
            children: q,
          })
        );
      };
    return d && (k.route.ErrorBoundary || k.route.errorElement || D === 0)
      ? y.createElement(Ed, {
          location: d.location,
          revalidation: d.revalidation,
          component: B,
          error: W,
          children: Y(),
          routeContext: { outlet: null, matches: P, isDataRoute: !0 },
          onError: S,
        })
      : Y();
  }, null);
}
function Os(o) {
  return `${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Gm(o) {
  let u = y.useContext(gr);
  return (He(u, Os(o)), u);
}
function Ym(o) {
  let u = y.useContext(Ai);
  return (He(u, Os(o)), u);
}
function qm(o) {
  let u = y.useContext(Wt);
  return (He(u, Os(o)), u);
}
function Us(o) {
  let u = qm(o),
    a = u.matches[u.matches.length - 1];
  return (
    He(
      a.route.id,
      `${o} can only be used on routes that contain a unique "id"`,
    ),
    a.route.id
  );
}
function Zm() {
  return Us("useRouteId");
}
function Jm() {
  var d;
  let o = y.useContext($s),
    u = Ym("useRouteError"),
    a = Us("useRouteError");
  return o !== void 0 ? o : (d = u.errors) == null ? void 0 : d[a];
}
function Km() {
  let { router: o } = Gm("useNavigate"),
    u = Us("useNavigate"),
    a = y.useRef(!1);
  return (
    jd(() => {
      a.current = !0;
    }),
    y.useCallback(
      async (f, p = {}) => {
        (Rt(a.current, Nd),
          a.current &&
            (typeof f == "number"
              ? await o.navigate(f)
              : await o.navigate(f, { fromRouteId: u, ...p })));
      },
      [o, u],
    )
  );
}
var Jc = {};
function Bd(o, u, a) {
  !u && !Jc[o] && ((Jc[o] = !0), Rt(!1, a));
}
y.memo(Xm);
function Xm({ routes: o, future: u, state: a, isStatic: d, onError: f }) {
  return Md(o, void 0, { state: a, isStatic: d, onError: f });
}
function Qt(o) {
  He(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
  );
}
function Qm({
  basename: o = "/",
  children: u = null,
  location: a,
  navigationType: d = "POP",
  navigator: f,
  static: p = !1,
  unstable_useTransitions: h,
}) {
  He(
    !al(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
  );
  let x = o.replace(/^\/*/, "/"),
    v = y.useMemo(
      () => ({
        basename: x,
        navigator: f,
        static: p,
        unstable_useTransitions: h,
        future: {},
      }),
      [x, f, p, h],
    );
  typeof a == "string" && (a = hr(a));
  let {
      pathname: S = "/",
      search: j = "",
      hash: k = "",
      state: D = null,
      key: W = "default",
      unstable_mask: R,
    } = a,
    B = y.useMemo(() => {
      let E = en(S, x);
      return E == null
        ? null
        : {
            location: {
              pathname: E,
              search: j,
              hash: k,
              state: D,
              key: W,
              unstable_mask: R,
            },
            navigationType: d,
          };
    }, [x, S, j, k, D, W, d, R]);
  return (
    Rt(
      B != null,
      `<Router basename="${x}"> is not able to match the URL "${S}${j}${k}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    B == null
      ? null
      : y.createElement(
          jt.Provider,
          { value: v },
          y.createElement(sl.Provider, { children: u, value: B }),
        )
  );
}
function eh({ children: o, location: u }) {
  return Fm(Hs(o), u);
}
function Hs(o, u = []) {
  let a = [];
  return (
    y.Children.forEach(o, (d, f) => {
      if (!y.isValidElement(d)) return;
      let p = [...u, f];
      if (d.type === y.Fragment) {
        a.push.apply(a, Hs(d.props.children, p));
        return;
      }
      (He(
        d.type === Qt,
        `[${typeof d.type == "string" ? d.type : d.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        He(
          !d.props.index || !d.props.children,
          "An index route cannot have child routes.",
        ));
      let h = {
        id: d.props.id || p.join("-"),
        caseSensitive: d.props.caseSensitive,
        element: d.props.element,
        Component: d.props.Component,
        index: d.props.index,
        path: d.props.path,
        middleware: d.props.middleware,
        loader: d.props.loader,
        action: d.props.action,
        hydrateFallbackElement: d.props.hydrateFallbackElement,
        HydrateFallback: d.props.HydrateFallback,
        errorElement: d.props.errorElement,
        ErrorBoundary: d.props.ErrorBoundary,
        hasErrorBoundary:
          d.props.hasErrorBoundary === !0 ||
          d.props.ErrorBoundary != null ||
          d.props.errorElement != null,
        shouldRevalidate: d.props.shouldRevalidate,
        handle: d.props.handle,
        lazy: d.props.lazy,
      };
      (d.props.children && (h.children = Hs(d.props.children, p)), a.push(h));
    }),
    a
  );
}
var Bi = "get",
  Pi = "application/x-www-form-urlencoded";
function Li(o) {
  return typeof HTMLElement < "u" && o instanceof HTMLElement;
}
function th(o) {
  return Li(o) && o.tagName.toLowerCase() === "button";
}
function nh(o) {
  return Li(o) && o.tagName.toLowerCase() === "form";
}
function rh(o) {
  return Li(o) && o.tagName.toLowerCase() === "input";
}
function lh(o) {
  return !!(o.metaKey || o.altKey || o.ctrlKey || o.shiftKey);
}
function ih(o, u) {
  return o.button === 0 && (!u || u === "_self") && !lh(o);
}
function zs(o = "") {
  return new URLSearchParams(
    typeof o == "string" || Array.isArray(o) || o instanceof URLSearchParams
      ? o
      : Object.keys(o).reduce((u, a) => {
          let d = o[a];
          return u.concat(Array.isArray(d) ? d.map((f) => [a, f]) : [[a, d]]);
        }, []),
  );
}
function oh(o, u) {
  let a = zs(o);
  return (
    u &&
      u.forEach((d, f) => {
        a.has(f) ||
          u.getAll(f).forEach((p) => {
            a.append(f, p);
          });
      }),
    a
  );
}
var ji = null;
function sh() {
  if (ji === null)
    try {
      (new FormData(document.createElement("form"), 0), (ji = !1));
    } catch {
      ji = !0;
    }
  return ji;
}
var ah = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function bs(o) {
  return o != null && !ah.has(o)
    ? (Rt(
        !1,
        `"${o}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Pi}"`,
      ),
      null)
    : o;
}
function uh(o, u) {
  let a, d, f, p, h;
  if (nh(o)) {
    let x = o.getAttribute("action");
    ((d = x ? en(x, u) : null),
      (a = o.getAttribute("method") || Bi),
      (f = bs(o.getAttribute("enctype")) || Pi),
      (p = new FormData(o)));
  } else if (th(o) || (rh(o) && (o.type === "submit" || o.type === "image"))) {
    let x = o.form;
    if (x == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let v = o.getAttribute("formaction") || x.getAttribute("action");
    if (
      ((d = v ? en(v, u) : null),
      (a = o.getAttribute("formmethod") || x.getAttribute("method") || Bi),
      (f =
        bs(o.getAttribute("formenctype")) ||
        bs(x.getAttribute("enctype")) ||
        Pi),
      (p = new FormData(x, o)),
      !sh())
    ) {
      let { name: S, type: j, value: k } = o;
      if (j === "image") {
        let D = S ? `${S}.` : "";
        (p.append(`${D}x`, "0"), p.append(`${D}y`, "0"));
      } else S && p.append(S, k);
    }
  } else {
    if (Li(o))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    ((a = Bi), (d = null), (f = Pi), (h = o));
  }
  return (
    p && f === "text/plain" && ((h = p), (p = void 0)),
    { action: d, method: a.toLowerCase(), encType: f, formData: p, body: h }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Vs(o, u) {
  if (o === !1 || o === null || typeof o > "u") throw new Error(u);
}
function ch(o, u, a, d) {
  let f =
    typeof o == "string"
      ? new URL(
          o,
          typeof window > "u"
            ? "server://singlefetch/"
            : window.location.origin,
        )
      : o;
  return (
    a
      ? f.pathname.endsWith("/")
        ? (f.pathname = `${f.pathname}_.${d}`)
        : (f.pathname = `${f.pathname}.${d}`)
      : f.pathname === "/"
        ? (f.pathname = `_root.${d}`)
        : u && en(f.pathname, u) === "/"
          ? (f.pathname = `${u.replace(/\/$/, "")}/_root.${d}`)
          : (f.pathname = `${f.pathname.replace(/\/$/, "")}.${d}`),
    f
  );
}
async function dh(o, u) {
  if (o.id in u) return u[o.id];
  try {
    let a = await import(o.module);
    return ((u[o.id] = a), a);
  } catch (a) {
    return (
      console.error(
        `Error loading route module \`${o.module}\`, reloading page...`,
      ),
      console.error(a),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function fh(o) {
  return o == null
    ? !1
    : o.href == null
      ? o.rel === "preload" &&
        typeof o.imageSrcSet == "string" &&
        typeof o.imageSizes == "string"
      : typeof o.rel == "string" && typeof o.href == "string";
}
async function ph(o, u, a) {
  let d = await Promise.all(
    o.map(async (f) => {
      let p = u.routes[f.route.id];
      if (p) {
        let h = await dh(p, a);
        return h.links ? h.links() : [];
      }
      return [];
    }),
  );
  return yh(
    d
      .flat(1)
      .filter(fh)
      .filter((f) => f.rel === "stylesheet" || f.rel === "preload")
      .map((f) =>
        f.rel === "stylesheet"
          ? { ...f, rel: "prefetch", as: "style" }
          : { ...f, rel: "prefetch" },
      ),
  );
}
function Kc(o, u, a, d, f, p) {
  let h = (v, S) => (a[S] ? v.route.id !== a[S].route.id : !0),
    x = (v, S) => {
      var j;
      return (
        a[S].pathname !== v.pathname ||
        (((j = a[S].route.path) == null ? void 0 : j.endsWith("*")) &&
          a[S].params["*"] !== v.params["*"])
      );
    };
  return p === "assets"
    ? u.filter((v, S) => h(v, S) || x(v, S))
    : p === "data"
      ? u.filter((v, S) => {
          var k;
          let j = d.routes[v.route.id];
          if (!j || !j.hasLoader) return !1;
          if (h(v, S) || x(v, S)) return !0;
          if (v.route.shouldRevalidate) {
            let D = v.route.shouldRevalidate({
              currentUrl: new URL(
                f.pathname + f.search + f.hash,
                window.origin,
              ),
              currentParams: ((k = a[0]) == null ? void 0 : k.params) || {},
              nextUrl: new URL(o, window.origin),
              nextParams: v.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof D == "boolean") return D;
          }
          return !0;
        })
      : [];
}
function mh(o, u, { includeHydrateFallback: a } = {}) {
  return hh(
    o
      .map((d) => {
        let f = u.routes[d.route.id];
        if (!f) return [];
        let p = [f.module];
        return (
          f.clientActionModule && (p = p.concat(f.clientActionModule)),
          f.clientLoaderModule && (p = p.concat(f.clientLoaderModule)),
          a &&
            f.hydrateFallbackModule &&
            (p = p.concat(f.hydrateFallbackModule)),
          f.imports && (p = p.concat(f.imports)),
          p
        );
      })
      .flat(1),
  );
}
function hh(o) {
  return [...new Set(o)];
}
function gh(o) {
  let u = {},
    a = Object.keys(o).sort();
  for (let d of a) u[d] = o[d];
  return u;
}
function yh(o, u) {
  let a = new Set();
  return (
    new Set(u),
    o.reduce((d, f) => {
      let p = JSON.stringify(gh(f));
      return (a.has(p) || (a.add(p), d.push({ key: p, link: f })), d);
    }, [])
  );
}
function Pd() {
  let o = y.useContext(gr);
  return (
    Vs(
      o,
      "You must render this element inside a <DataRouterContext.Provider> element",
    ),
    o
  );
}
function vh() {
  let o = y.useContext(Ai);
  return (
    Vs(
      o,
      "You must render this element inside a <DataRouterStateContext.Provider> element",
    ),
    o
  );
}
var Gs = y.createContext(void 0);
Gs.displayName = "FrameworkContext";
function Dd() {
  let o = y.useContext(Gs);
  return (
    Vs(o, "You must render this element inside a <HydratedRouter> element"),
    o
  );
}
function xh(o, u) {
  let a = y.useContext(Gs),
    [d, f] = y.useState(!1),
    [p, h] = y.useState(!1),
    {
      onFocus: x,
      onBlur: v,
      onMouseEnter: S,
      onMouseLeave: j,
      onTouchStart: k,
    } = u,
    D = y.useRef(null);
  (y.useEffect(() => {
    if ((o === "render" && h(!0), o === "viewport")) {
      let B = (P) => {
          P.forEach((Y) => {
            h(Y.isIntersecting);
          });
        },
        E = new IntersectionObserver(B, { threshold: 0.5 });
      return (
        D.current && E.observe(D.current),
        () => {
          E.disconnect();
        }
      );
    }
  }, [o]),
    y.useEffect(() => {
      if (d) {
        let B = setTimeout(() => {
          h(!0);
        }, 100);
        return () => {
          clearTimeout(B);
        };
      }
    }, [d]));
  let W = () => {
      f(!0);
    },
    R = () => {
      (f(!1), h(!1));
    };
  return a
    ? o !== "intent"
      ? [p, D, {}]
      : [
          p,
          D,
          {
            onFocus: rl(x, W),
            onBlur: rl(v, R),
            onMouseEnter: rl(S, W),
            onMouseLeave: rl(j, R),
            onTouchStart: rl(k, W),
          },
        ]
    : [!1, D, {}];
}
function rl(o, u) {
  return (a) => {
    (o && o(a), a.defaultPrevented || u(a));
  };
}
function wh({ page: o, ...u }) {
  let { router: a } = Pd(),
    d = y.useMemo(() => hd(a.routes, o, a.basename), [a.routes, o, a.basename]);
  return d ? y.createElement(Sh, { page: o, matches: d, ...u }) : null;
}
function _h(o) {
  let { manifest: u, routeModules: a } = Dd(),
    [d, f] = y.useState([]);
  return (
    y.useEffect(() => {
      let p = !1;
      return (
        ph(o, u, a).then((h) => {
          p || f(h);
        }),
        () => {
          p = !0;
        }
      );
    }, [o, u, a]),
    d
  );
}
function Sh({ page: o, matches: u, ...a }) {
  let d = $t(),
    { future: f, manifest: p, routeModules: h } = Dd(),
    { basename: x } = Pd(),
    { loaderData: v, matches: S } = vh(),
    j = y.useMemo(() => Kc(o, u, S, p, d, "data"), [o, u, S, p, d]),
    k = y.useMemo(() => Kc(o, u, S, p, d, "assets"), [o, u, S, p, d]),
    D = y.useMemo(() => {
      if (o === d.pathname + d.search + d.hash) return [];
      let B = new Set(),
        E = !1;
      if (
        (u.forEach((Y) => {
          var ae;
          let q = p.routes[Y.route.id];
          !q ||
            !q.hasLoader ||
            ((!j.some((le) => le.route.id === Y.route.id) &&
              Y.route.id in v &&
              (ae = h[Y.route.id]) != null &&
              ae.shouldRevalidate) ||
            q.hasClientLoader
              ? (E = !0)
              : B.add(Y.route.id));
        }),
        B.size === 0)
      )
        return [];
      let P = ch(o, x, f.unstable_trailingSlashAwareDataRequests, "data");
      return (
        E &&
          B.size > 0 &&
          P.searchParams.set(
            "_routes",
            u
              .filter((Y) => B.has(Y.route.id))
              .map((Y) => Y.route.id)
              .join(","),
          ),
        [P.pathname + P.search]
      );
    }, [x, f.unstable_trailingSlashAwareDataRequests, v, d, p, j, u, o, h]),
    W = y.useMemo(() => mh(k, p), [k, p]),
    R = _h(k);
  return y.createElement(
    y.Fragment,
    null,
    D.map((B) =>
      y.createElement("link", {
        key: B,
        rel: "prefetch",
        as: "fetch",
        href: B,
        ...a,
      }),
    ),
    W.map((B) =>
      y.createElement("link", { key: B, rel: "modulepreload", href: B, ...a }),
    ),
    R.map(({ key: B, link: E }) =>
      y.createElement("link", {
        key: B,
        nonce: a.nonce,
        ...E,
        crossOrigin: E.crossOrigin ?? a.crossOrigin,
      }),
    ),
  );
}
function kh(...o) {
  return (u) => {
    o.forEach((a) => {
      typeof a == "function" ? a(u) : a != null && (a.current = u);
    });
  };
}
var Nh =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  Nh && (window.__reactRouterVersion = "7.13.1");
} catch {}
function jh({
  basename: o,
  children: u,
  unstable_useTransitions: a,
  window: d,
}) {
  let f = y.useRef();
  f.current == null && (f.current = lm({ window: d, v5Compat: !0 }));
  let p = f.current,
    [h, x] = y.useState({ action: p.action, location: p.location }),
    v = y.useCallback(
      (S) => {
        a === !1 ? x(S) : y.startTransition(() => x(S));
      },
      [a],
    );
  return (
    y.useLayoutEffect(() => p.listen(v), [p, v]),
    y.createElement(Qm, {
      basename: o,
      children: u,
      location: h.location,
      navigationType: h.action,
      navigator: p,
      unstable_useTransitions: a,
    })
  );
}
var bd = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ke = y.forwardRef(function (
    {
      onClick: u,
      discover: a = "render",
      prefetch: d = "none",
      relative: f,
      reloadDocument: p,
      replace: h,
      unstable_mask: x,
      state: v,
      target: S,
      to: j,
      preventScrollReset: k,
      viewTransition: D,
      unstable_defaultShouldRevalidate: W,
      ...R
    },
    B,
  ) {
    let {
        basename: E,
        navigator: P,
        unstable_useTransitions: Y,
      } = y.useContext(jt),
      q = typeof j == "string" && bd.test(j),
      ae = wd(j, E);
    j = ae.to;
    let le = Hm(j, { relative: f }),
      de = $t(),
      _e = null;
    if (x) {
      let we = Ws(
        x,
        [],
        de.unstable_mask ? de.unstable_mask.pathname : "/",
        !0,
      );
      (E !== "/" &&
        (we.pathname = we.pathname === "/" ? E : Ft([E, we.pathname])),
        (_e = P.createHref(we)));
    }
    let [je, Ee, Re] = xh(d, R),
      F = Bh(j, {
        replace: h,
        unstable_mask: x,
        state: v,
        target: S,
        preventScrollReset: k,
        relative: f,
        viewTransition: D,
        unstable_defaultShouldRevalidate: W,
        unstable_useTransitions: Y,
      });
    function A(we) {
      (u && u(we), we.defaultPrevented || F(we));
    }
    let re = !(ae.isExternal || p),
      ve = y.createElement("a", {
        ...R,
        ...Re,
        href: (re ? _e : void 0) || ae.absoluteURL || le,
        onClick: re ? A : u,
        ref: kh(B, Ee),
        target: S,
        "data-discover": !q && a === "render" ? "true" : void 0,
      });
    return je && !q
      ? y.createElement(y.Fragment, null, ve, y.createElement(wh, { page: le }))
      : ve;
  });
Ke.displayName = "Link";
var Ch = y.forwardRef(function (
  {
    "aria-current": u = "page",
    caseSensitive: a = !1,
    className: d = "",
    end: f = !1,
    style: p,
    to: h,
    viewTransition: x,
    children: v,
    ...S
  },
  j,
) {
  let k = ul(h, { relative: S.relative }),
    D = $t(),
    W = y.useContext(Ai),
    { navigator: R, basename: B } = y.useContext(jt),
    E = W != null && Ah(k) && x === !0,
    P = R.encodeLocation ? R.encodeLocation(k).pathname : k.pathname,
    Y = D.pathname,
    q =
      W && W.navigation && W.navigation.location
        ? W.navigation.location.pathname
        : null;
  (a ||
    ((Y = Y.toLowerCase()),
    (q = q ? q.toLowerCase() : null),
    (P = P.toLowerCase())),
    q && B && (q = en(q, B) || q));
  const ae = P !== "/" && P.endsWith("/") ? P.length - 1 : P.length;
  let le = Y === P || (!f && Y.startsWith(P) && Y.charAt(ae) === "/"),
    de =
      q != null &&
      (q === P || (!f && q.startsWith(P) && q.charAt(P.length) === "/")),
    _e = { isActive: le, isPending: de, isTransitioning: E },
    je = le ? u : void 0,
    Ee;
  typeof d == "function"
    ? (Ee = d(_e))
    : (Ee = [
        d,
        le ? "active" : null,
        de ? "pending" : null,
        E ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let Re = typeof p == "function" ? p(_e) : p;
  return y.createElement(
    Ke,
    {
      ...S,
      "aria-current": je,
      className: Ee,
      ref: j,
      style: Re,
      to: h,
      viewTransition: x,
    },
    typeof v == "function" ? v(_e) : v,
  );
});
Ch.displayName = "NavLink";
var Mh = y.forwardRef(
  (
    {
      discover: o = "render",
      fetcherKey: u,
      navigate: a,
      reloadDocument: d,
      replace: f,
      state: p,
      method: h = Bi,
      action: x,
      onSubmit: v,
      relative: S,
      preventScrollReset: j,
      viewTransition: k,
      unstable_defaultShouldRevalidate: D,
      ...W
    },
    R,
  ) => {
    let { unstable_useTransitions: B } = y.useContext(jt),
      E = bh(),
      P = Rh(x, { relative: S }),
      Y = h.toLowerCase() === "get" ? "get" : "post",
      q = typeof x == "string" && bd.test(x),
      ae = (le) => {
        if ((v && v(le), le.defaultPrevented)) return;
        le.preventDefault();
        let de = le.nativeEvent.submitter,
          _e = (de == null ? void 0 : de.getAttribute("formmethod")) || h,
          je = () =>
            E(de || le.currentTarget, {
              fetcherKey: u,
              method: _e,
              navigate: a,
              replace: f,
              state: p,
              relative: S,
              preventScrollReset: j,
              viewTransition: k,
              unstable_defaultShouldRevalidate: D,
            });
        B && a !== !1 ? y.startTransition(() => je()) : je();
      };
    return y.createElement("form", {
      ref: R,
      method: Y,
      action: P,
      onSubmit: d ? v : ae,
      ...W,
      "data-discover": !q && o === "render" ? "true" : void 0,
    });
  },
);
Mh.displayName = "Form";
function Eh(o) {
  return `${o} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Rd(o) {
  let u = y.useContext(gr);
  return (He(u, Eh(o)), u);
}
function Bh(
  o,
  {
    target: u,
    replace: a,
    unstable_mask: d,
    state: f,
    preventScrollReset: p,
    relative: h,
    viewTransition: x,
    unstable_defaultShouldRevalidate: v,
    unstable_useTransitions: S,
  } = {},
) {
  let j = Ot(),
    k = $t(),
    D = ul(o, { relative: h });
  return y.useCallback(
    (W) => {
      if (ih(W, u)) {
        W.preventDefault();
        let R = a !== void 0 ? a : il(k) === il(D),
          B = () =>
            j(o, {
              replace: R,
              unstable_mask: d,
              state: f,
              preventScrollReset: p,
              relative: h,
              viewTransition: x,
              unstable_defaultShouldRevalidate: v,
            });
        S ? y.startTransition(() => B()) : B();
      }
    },
    [k, j, D, a, d, f, u, o, p, h, x, v, S],
  );
}
function cl(o) {
  Rt(
    typeof URLSearchParams < "u",
    "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.",
  );
  let u = y.useRef(zs(o)),
    a = y.useRef(!1),
    d = $t(),
    f = y.useMemo(() => oh(d.search, a.current ? null : u.current), [d.search]),
    p = Ot(),
    h = y.useCallback(
      (x, v) => {
        const S = zs(typeof x == "function" ? x(new URLSearchParams(f)) : x);
        ((a.current = !0), p("?" + S, v));
      },
      [p, f],
    );
  return [f, h];
}
var Ph = 0,
  Dh = () => `__${String(++Ph)}__`;
function bh() {
  let { router: o } = Rd("useSubmit"),
    { basename: u } = y.useContext(jt),
    a = Zm(),
    d = o.fetch,
    f = o.navigate;
  return y.useCallback(
    async (p, h = {}) => {
      let { action: x, method: v, encType: S, formData: j, body: k } = uh(p, u);
      if (h.navigate === !1) {
        let D = h.fetcherKey || Dh();
        await d(D, a, h.action || x, {
          unstable_defaultShouldRevalidate: h.unstable_defaultShouldRevalidate,
          preventScrollReset: h.preventScrollReset,
          formData: j,
          body: k,
          formMethod: h.method || v,
          formEncType: h.encType || S,
          flushSync: h.flushSync,
        });
      } else
        await f(h.action || x, {
          unstable_defaultShouldRevalidate: h.unstable_defaultShouldRevalidate,
          preventScrollReset: h.preventScrollReset,
          formData: j,
          body: k,
          formMethod: h.method || v,
          formEncType: h.encType || S,
          replace: h.replace,
          state: h.state,
          fromRouteId: a,
          flushSync: h.flushSync,
          viewTransition: h.viewTransition,
        });
    },
    [d, f, u, a],
  );
}
function Rh(o, { relative: u } = {}) {
  let { basename: a } = y.useContext(jt),
    d = y.useContext(Wt);
  He(d, "useFormAction must be used inside a RouteContext");
  let [f] = d.matches.slice(-1),
    p = { ...ul(o || ".", { relative: u }) },
    h = $t();
  if (o == null) {
    p.search = h.search;
    let x = new URLSearchParams(p.search),
      v = x.getAll("index");
    if (v.some((j) => j === "")) {
      (x.delete("index"),
        v.filter((k) => k).forEach((k) => x.append("index", k)));
      let j = x.toString();
      p.search = j ? `?${j}` : "";
    }
  }
  return (
    (!o || o === ".") &&
      f.route.index &&
      (p.search = p.search ? p.search.replace(/^\?/, "?index&") : "?index"),
    a !== "/" && (p.pathname = p.pathname === "/" ? a : Ft([a, p.pathname])),
    il(p)
  );
}
function Ah(o, { relative: u } = {}) {
  let a = y.useContext(Sd);
  He(
    a != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: d } = Rd("useViewTransitionState"),
    f = ul(o, { relative: u });
  if (!a.isTransitioning) return !1;
  let p = en(a.currentLocation.pathname, d) || a.currentLocation.pathname,
    h = en(a.nextLocation.pathname, d) || a.nextLocation.pathname;
  return Di(f.pathname, h) != null || Di(f.pathname, p) != null;
}
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lh = (o) => o.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Ih = (o) =>
    o.replace(/^([A-Z])|[\s-_]+(\w)/g, (u, a, d) =>
      d ? d.toUpperCase() : a.toLowerCase(),
    ),
  Xc = (o) => {
    const u = Ih(o);
    return u.charAt(0).toUpperCase() + u.slice(1);
  },
  Ad = (...o) =>
    o
      .filter((u, a, d) => !!u && u.trim() !== "" && d.indexOf(u) === a)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Th = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hh = y.forwardRef(
  (
    {
      color: o = "currentColor",
      size: u = 24,
      strokeWidth: a = 2,
      absoluteStrokeWidth: d,
      className: f = "",
      children: p,
      iconNode: h,
      ...x
    },
    v,
  ) =>
    y.createElement(
      "svg",
      {
        ref: v,
        ...Th,
        width: u,
        height: u,
        stroke: o,
        strokeWidth: d ? (Number(a) * 24) / Number(u) : a,
        className: Ad("lucide", f),
        ...x,
      },
      [
        ...h.map(([S, j]) => y.createElement(S, j)),
        ...(Array.isArray(p) ? p : [p]),
      ],
    ),
);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Me = (o, u) => {
  const a = y.forwardRef(({ className: d, ...f }, p) =>
    y.createElement(Hh, {
      ref: p,
      iconNode: u,
      className: Ad(`lucide-${Lh(Xc(o))}`, `lucide-${o}`, d),
      ...f,
    }),
  );
  return ((a.displayName = Xc(o)), a);
};
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zh = [
    ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
    ["path", { d: "M19 12H5", key: "x3x0zl" }],
  ],
  dl = Me("arrow-left", zh);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fh = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ],
  Qc = Me("arrow-right", Fh);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wh = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]],
  $h = Me("chevron-left", Wh);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Oh = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]],
  Uh = Me("chevron-right", Oh);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vh = [
    ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
    ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ],
  Gh = Me("circle-check-big", Vh);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yh = [
    [
      "rect",
      { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" },
    ],
    ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
  ],
  qh = Me("credit-card", Yh);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zh = [
    ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
    [
      "path",
      { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" },
    ],
  ],
  Jh = Me("dollar-sign", Zh);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kh = [
    [
      "path",
      {
        d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
        key: "ct8e1f",
      },
    ],
    ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
    [
      "path",
      {
        d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
        key: "13bj9a",
      },
    ],
    ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ],
  Ld = Me("eye-off", Kh);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xh = [
    [
      "path",
      {
        d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
        key: "1nclc0",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ],
  Id = Me("eye", Xh);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qh = [
    [
      "path",
      {
        d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
        key: "c3ymky",
      },
    ],
  ],
  ol = Me("heart", Qh);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const eg = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 16v-4", key: "1dtifu" }],
    ["path", { d: "M12 8h.01", key: "e9boi3" }],
  ],
  Td = Me("info", eg);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tg = [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z",
      },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ],
  ng = Me("map-pin", tg);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rg = [
    ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
  ],
  Hd = Me("message-circle", rg);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lg = [
    [
      "path",
      {
        d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
        key: "1lielz",
      },
    ],
  ],
  ig = Me("message-square", lg);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const og = [
    [
      "path",
      {
        d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
        key: "1a0edw",
      },
    ],
    ["path", { d: "M12 22V12", key: "d0xqtd" }],
    ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
    ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  ],
  ed = Me("package", og);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sg = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }],
  ],
  Ys = Me("plus", sg);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ag = [
    [
      "rect",
      { width: "5", height: "5", x: "3", y: "3", rx: "1", key: "1tu5fj" },
    ],
    [
      "rect",
      { width: "5", height: "5", x: "16", y: "3", rx: "1", key: "1v8r4q" },
    ],
    [
      "rect",
      { width: "5", height: "5", x: "3", y: "16", rx: "1", key: "1x03jg" },
    ],
    ["path", { d: "M21 16h-3a2 2 0 0 0-2 2v3", key: "177gqh" }],
    ["path", { d: "M21 21v.01", key: "ents32" }],
    ["path", { d: "M12 7v3a2 2 0 0 1-2 2H7", key: "8crl2c" }],
    ["path", { d: "M3 12h.01", key: "nlz23k" }],
    ["path", { d: "M12 3h.01", key: "n36tog" }],
    ["path", { d: "M12 16v.01", key: "133mhm" }],
    ["path", { d: "M16 12h1", key: "1slzba" }],
    ["path", { d: "M21 12v.01", key: "1lwtk9" }],
    ["path", { d: "M12 21v-1", key: "1880an" }],
  ],
  ug = Me("qr-code", ag);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cg = [
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
    ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
  ],
  dg = Me("search", cg);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fg = [
    [
      "path",
      {
        d: "M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z",
        key: "117uat",
      },
    ],
    ["path", { d: "M6 12h16", key: "s4cdu5" }],
  ],
  pg = Me("send-horizontal", fg);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mg = [
    [
      "path",
      {
        d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
        key: "1qme2f",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ],
  hg = Me("settings", mg);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gg = [
    ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
    ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
    ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
    [
      "line",
      { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" },
    ],
    [
      "line",
      { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" },
    ],
  ],
  yg = Me("share-2", gg);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vg = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ],
  qs = Me("shield-check", vg);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xg = [
    [
      "path",
      {
        d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
        key: "vktsd0",
      },
    ],
    [
      "circle",
      { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" },
    ],
  ],
  wg = Me("tag", xg);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _g = [
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
    ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ],
  Sg = Me("trash", _g);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kg = [
    ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
    ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }],
  ],
  Ci = Me("trending-up", kg);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ng = [
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
    ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }],
  ],
  jg = Me("upload", Ng);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cg = [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
    ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
  ],
  td = Me("user", Cg);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mg = [
    [
      "path",
      {
        d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
        key: "18etb6",
      },
    ],
    ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" }],
  ],
  zd = Me("wallet", Mg);
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Eg = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  Sn = Me("x", Eg),
  Fd = y.createContext(void 0);
function Bg({ children: o }) {
  const [u, a] = y.useState(() => {
      try {
        return localStorage.getItem("isLoggedIn") === "true";
      } catch {
        return !1;
      }
    }),
    [d, f] = y.useState(() => {
      try {
        const x = localStorage.getItem("user");
        return x ? JSON.parse(x) : null;
      } catch {
        return null;
      }
    }),
    p = (x) => {
      (a(!0), f(x));
      try {
        (localStorage.setItem("isLoggedIn", "true"),
          localStorage.setItem("user", JSON.stringify(x)));
      } catch {}
    },
    h = () => {
      (a(!1), f(null));
      try {
        (localStorage.removeItem("isLoggedIn"),
          localStorage.removeItem("user"));
      } catch {}
    };
  return i.jsx(Fd.Provider, {
    value: { isLoggedIn: u, user: d, login: p, logout: h },
    children: o,
  });
}
function Ut() {
  const o = y.useContext(Fd);
  if (!o) throw new Error("useAuth must be used within an AuthProvider");
  return o;
}
const Pg = "_nav_z56yt_1",
  Dg = "_inner_z56yt_11",
  bg = "_logo_z56yt_20",
  Rg = "_logoDot_z56yt_30",
  Ag = "_searchWrap_z56yt_44",
  Lg = "_searchIcon_z56yt_51",
  Ig = "_searchInput_z56yt_60",
  Tg = "_actions_z56yt_77",
  Hg = "_btn_z56yt_85",
  zg = "_btnGhost_z56yt_96",
  Fg = "_btnSell_z56yt_105",
  Je = {
    nav: Pg,
    inner: Dg,
    logo: bg,
    logoDot: Rg,
    searchWrap: Ag,
    searchIcon: Lg,
    searchInput: Ig,
    actions: Tg,
    btn: Hg,
    btnGhost: zg,
    btnSell: Fg,
  };
function Wg({ onOpenModal: o }) {
  const { isLoggedIn: u, logout: a } = Ut(),
    d = Ot(),
    [f] = cl(),
    [p, h] = y.useState(f.get("search") || ""),
    x = (v) => {
      const S = v.target.value;
      h(S);
      const j = new URLSearchParams(f);
      (S ? (j.set("search", S), j.delete("category")) : j.delete("search"),
        d(`/?${j.toString()}`, { replace: !0 }));
    };
  return i.jsx("nav", {
    className: Je.nav,
    children: i.jsxs("div", {
      className: Je.inner,
      children: [
        i.jsxs(Ke, {
          to: "/",
          className: Je.logo,
          children: [
            "Kampus",
            i.jsx("span", { className: Je.logoDot, children: "." }),
          ],
        }),
        i.jsxs("div", {
          className: Je.searchWrap,
          children: [
            i.jsx(dg, { size: 16, className: Je.searchIcon }),
            i.jsx("input", {
              type: "search",
              className: Je.searchInput,
              placeholder: "Search listings — books, gadgets, uniforms…",
              value: p,
              onChange: x,
            }),
          ],
        }),
        i.jsxs("div", {
          className: Je.actions,
          children: [
            i.jsxs("button", {
              className: `${Je.btn} ${Je.btnSell}`,
              onClick: () => {
                u ? d("/create-listing") : o("sell");
              },
              children: [i.jsx(Ys, { size: 15 }), "Sell"],
            }),
            u
              ? i.jsxs(i.Fragment, {
                  children: [
                    i.jsxs("button", {
                      className: `${Je.btn} ${Je.btnGhost}`,
                      onClick: () => d("/messages"),
                      children: [i.jsx(Hd, { size: 15 }), "Messages"],
                    }),
                    i.jsxs("button", {
                      className: `${Je.btn} ${Je.btnGhost}`,
                      onClick: () => d("/profile"),
                      children: [i.jsx(td, { size: 15 }), "Profile"],
                    }),
                    i.jsx("button", {
                      className: `${Je.btn} ${Je.btnGhost}`,
                      onClick: () => {
                        (d("/"), setTimeout(a, 0));
                      },
                      children: "Sign Out",
                    }),
                  ],
                })
              : i.jsxs("button", {
                  className: `${Je.btn} ${Je.btnGhost}`,
                  onClick: () => o("signin"),
                  children: [i.jsx(td, { size: 15 }), "Sign In"],
                }),
          ],
        }),
      ],
    }),
  });
}
const $g = "_hero_1yn0h_1",
  Og = "_pattern_1yn0h_29",
  Ug = "_banner_1yn0h_43",
  Rs = { hero: $g, pattern: Og, banner: Ug },
  Vg = "/assets/KAMPUS_BANNER-CnzDH34_.png";
function Gg() {
  return i.jsxs("div", {
    className: Rs.hero,
    children: [
      i.jsx("img", { src: Vg, alt: "Kampus Banner", className: Rs.banner }),
      i.jsx("div", { className: Rs.pattern }),
    ],
  });
}
const bi = [
    {
      id: 1,
      title: "MacBook Pro 2021 — Excellent Condition",
      price: 1299.99,
      image:
        "https://images.unsplash.com/photo-1597673030062-0a0f1a801a31?q=80&w=3096&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Electronics",
      seller: "Maria Santos.",
      condition: "Like New",
    },
    {
      id: 2,
      title: "Engineering Textbook Bundle — Calc, Physics, Chem",
      price: 85,
      image:
        "https://images.unsplash.com/photo-1755620500895-b693799658ee?w=600&q=80",
      category: "Books",
      seller: "Miguel Reyes",
      condition: "Good",
    },
    {
      id: 3,
      title: "Mountain Bike — 21 Speed",
      price: 350,
      image:
        "https://images.unsplash.com/photo-1763783337455-ad63a238b400?w=600&q=80",
      category: "Sports",
      seller: "Juan dela Cruz",
      condition: "Used",
    },
    {
      id: 4,
      title: "Ergonomic Office Chair — Adjustable",
      price: 125,
      image:
        "https://images.unsplash.com/photo-1688578735352-9a6f2ac3b70a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Furniture",
      seller: "Ana Villanueva",
    },
    {
      id: 5,
      title: "North Face Backpack — 35L Capacity",
      price: 75,
      image:
        "https://images.unsplash.com/photo-1549872178-96db16a53ca8?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Accessories",
      seller: "Danilo Lim",
      condition: "Like New",
    },
    {
      id: 6,
      title: "Acoustic Guitar with Case",
      price: 199.99,
      image:
        "https://images.unsplash.com/photo-1628887067605-5171efd812e3?w=600&q=80",
      category: "Musical Instruments",
      seller: "Ligaya Ramos.",
    },
    {
      id: 7,
      title: "Sony WH-1000XM4 Wireless Headphones",
      price: 249,
      image:
        "https://images.unsplash.com/photo-1572119244337-bcb4aae995af?w=600&q=80",
      category: "Electronics",
      seller: "Alejandro Mendoza.",
      condition: "Like New",
    },
    {
      id: 8,
      title: "Canon EOS R6 Camera Body",
      price: 1899,
      image:
        "https://images.unsplash.com/photo-1579535984712-92fffbbaa266?w=600&q=80",
      category: "Electronics",
      seller: "Rachelle Padilla",
    },
    {
      id: 9,
      title: "Professional Skateboard — Complete Setup",
      price: 95,
      image:
        "https://images.unsplash.com/photo-1589542425426-2460d8243b58?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Sports",
      seller: "Christian Hernandez",
      condition: "Good",
    },
    {
      id: 10,
      title: "TI-84 Plus Scientific Calculator",
      price: 45,
      image:
        "https://images.unsplash.com/photo-1675242314995-034d11bac319?w=600&q=80",
      category: "School Supplies",
      seller: "Anna Bautista",
    },
    {
      id: 11,
      title: "Modern LED Desk Lamp — Dimmable",
      price: 35,
      image:
        "https://images.unsplash.com/photo-1753109818483-9a1838b318b3?w=600&q=80",
      category: "Home",
      seller: "Tomas Santos",
      condition: "New",
    },
    {
      id: 12,
      title: "Nespresso Coffee Machine — Compact",
      price: 149.99,
      image:
        "https://images.unsplash.com/photo-1608354580875-30bd4168b351?w=600&q=80",
      category: "Appliances",
      seller: "Jesica Flores",
      condition: "Like New",
    },
    {
      id: 13,
      title: "Resume & Cover Letter Review",
      price: 500,
      image:
        "https://plus.unsplash.com/premium_photo-1661324492805-2db1c80e2e76?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Services",
      seller: "Alejandro Mendoza.",
    },
    {
      id: 14,
      title: "Online Tutoring – Math & Science",
      price: 350,
      image:
        "https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80",
      category: "Services",
      seller: "Jamie Reyes",
    },
    {
      id: 15,
      title: "Logo Design & Branding",
      price: 1200,
      image:
        "https://images.unsplash.com/photo-1597587606035-b64422b50f82?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Services",
      seller: "Carla Lim",
    },
    {
      id: 16,
      title: "Social Media Management",
      price: 1500,
      image:
        "https://images.unsplash.com/photo-1683721003111-070bcc053d8b?q=80&w=2900&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Services",
      seller: "Rica Tan",
    },
    {
      id: 17,
      title: "Proofreading & Editing Services",
      price: 250,
      image:
        "https://media.istockphoto.com/id/170044810/photo/text-correction-proofreader.webp?a=1&b=1&s=612x612&w=0&k=20&c=RJRn8ncJlZVdSCfsOmQa40OfU4bgpt6OatxMNwWjhkI=",
      category: "Services",
      seller: "Samuel Cruz",
    },
    {
      id: 18,
      title: "Vintage Graphic Tee – Medium",
      price: 450,
      image:
        "https://images.unsplash.com/photo-1759941279446-dea2722bca33?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmludGFnZSUyMGdyYXBoaWMlMjB0ZWV8ZW58MHx8MHx8fDA%3D",
      category: "Apparel",
      seller: "Mia Pascual",
    },
    {
      id: 19,
      title: "Black Leather Jacket",
      price: 2500,
      image:
        "https://images.unsplash.com/photo-1727524366429-27de8607d5f6?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Apparel",
      seller: "Leon Villanueva",
    },
    {
      id: 20,
      title: "Custom Embroidered Hoodie",
      price: 800,
      image:
        "https://plus.unsplash.com/premium_photo-1765040757862-3d6c19855a86?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZW1icm9pZGVyZWQlMjBob29kaWV8ZW58MHx8MHx8fDA%3D",
      category: "Apparel",
      seller: "Nora Salvador",
    },
    {
      id: 21,
      title: "Denim Shorts – Size S",
      price: 350,
      image:
        "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=600&q=80",
      category: "Apparel",
      seller: "Karl Javier",
    },
    {
      id: 22,
      title: "Classic White Sneakers",
      price: 900,
      image:
        "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVuaW0lMjBzaG9ydHN8ZW58MHx8MHx8fDA%3D",
      category: "Apparel",
      seller: "Zoe Reyes",
    },
    {
      id: 23,
      title: "PS5 Controller – Midnight Black",
      price: 3500,
      image:
        "https://images.unsplash.com/photo-1642984061426-642d8ac2d088?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjBwczUlMjBjb250cm9sbGVyfGVufDB8fDB8fHww",
      category: "Gaming",
      seller: "Ethan Bautista",
      condition: "New",
    },
    {
      id: 24,
      title: "Gaming Mouse – RGB",
      price: 1200,
      image:
        "https://images.unsplash.com/photo-1613141412501-9012977f1969?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwbW91c2V8ZW58MHx8MHx8fDA%3D",
      category: "Gaming",
      seller: "Liam Hernandez",
    },
    {
      id: 25,
      title: "Nintendo Switch Lite – Coral",
      price: 6500,
      image:
        "https://images.unsplash.com/photo-1621296679244-c4c26fdba11d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmludGVuZG8lMjBzd2l0Y2glMjBwaW5rfGVufDB8fDB8fHww",
      category: "Gaming",
      seller: "Ava Cruz",
      condition: "Used",
    },
    {
      id: 26,
      title: "Steam Gift Card – ₱1,000",
      price: 1e3,
      image:
        "https://images.unsplash.com/photo-1729860648688-1488d541fc92?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RlYW0lMjBnYW1lJTIwY2FyZHxlbnwwfHwwfHx8MA%3D%3D",
      category: "Gaming",
      seller: "Noah Wenceslao",
    },
    {
      id: 27,
      title: "Gaming Headset – Surround Sound",
      price: 1500,
      image:
        "https://images.unsplash.com/photo-1677086813101-496781a0f327?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtaW5nJTIwaGVhZHNldHxlbnwwfHwwfHx8MA%3D%3D",
      category: "Gaming",
      seller: "Chloe Flores",
    },
    {
      id: 28,
      title: "LEGO Star Wars Set",
      price: 2800,
      image:
        "https://images.unsplash.com/photo-1617663516011-cd60a0de811d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN0YXIlMjB3YXJzJTIwbGVnb3xlbnwwfHwwfHx8MA%3D%3D",
      category: "Hobbies & Toys",
      seller: "Max dela Rosa",
      condition: "New",
    },
    {
      id: 29,
      title: "Puzzle 1,000 Pieces – Landscape",
      price: 450,
      image:
        "https://images.unsplash.com/photo-1609058700004-608180fae6ac?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGppZ3NhdyUyMHB1enpsZSUyMGJveHxlbnwwfHwwfHx8MA%3D%3D",
      category: "Hobbies & Toys",
      seller: "Lily Castillo",
    },
    {
      id: 30,
      title: "Sketching & Drawing Kit",
      price: 700,
      image:
        "https://images.unsplash.com/photo-1639478700281-fd11ca9e7e1b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2tldGNoaW5nJTIwa2l0fGVufDB8fDB8fHww",
      category: "Hobbies & Toys",
      seller: "Francis Mendoza",
    },
    {
      id: 31,
      title: "RC Drone – Beginner Friendly",
      price: 3200,
      image:
        "https://plus.unsplash.com/premium_photo-1714618849685-89cad85746b1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHJvbmV8ZW58MHx8MHx8fDA%3D",
      category: "Hobbies & Toys",
      seller: "Sofia Ramos",
    },
    {
      id: 32,
      title: "Board Game – Catan",
      price: 1200,
      image:
        "https://images.unsplash.com/photo-1769288361254-abb4783a6070?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Hobbies & Toys",
      seller: "Jack Lim",
    },
    {
      id: 33,
      title: "Liquid Foundation – Shade Medium",
      price: 650,
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80",
      category: "Makeup",
      seller: "Emma Torres",
    },
    {
      id: 34,
      title: "Eyeshadow Palette – 12 Colors",
      price: 750,
      image:
        "https://images.unsplash.com/photo-1768983224486-b4dcd179b4a5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGV5ZXNoYWRvdyUyMHBhbGV0dGV8ZW58MHx8MHx8fDA%3D",
      category: "Makeup",
      seller: "Chloe Marcelo",
    },
    {
      id: 35,
      title: "Matte Lipstick Set – 5 Colors",
      price: 900,
      image:
        "https://images.unsplash.com/photo-1585519356004-2bd6527d9cbe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8NSUyMG1hdHRlJTIwbGlwc3RpY2t8ZW58MHx8MHx8fDA%3D",
      category: "Makeup",
      seller: "Zoe Navarro",
    },
    {
      id: 36,
      title: "Blush & Highlighter Duo",
      price: 500,
      image:
        "https://plus.unsplash.com/premium_photo-1726840825289-8de3e79e42d5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ymx1c2glMjBtYWtldXB8ZW58MHx8MHx8fDA%3D",
      category: "Makeup",
      seller: "Mia Rivera",
    },
    {
      id: 37,
      title: "Makeup Brushes Set – 10 Pieces",
      price: 850,
      image:
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=600&q=80",
      category: "Makeup",
      seller: "Ava Santos",
    },
    {
      id: 39,
      title: "Yoga Mat – Non Slip",
      price: 750,
      image:
        "https://plus.unsplash.com/premium_photo-1675155952889-abb299df1fe7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8eW9nYSUyMG1hdHxlbnwwfHwwfHx8MA%3D%3D",
      category: "Health",
      seller: "Maria Santos.",
    },
    {
      id: 40,
      title: "Reusable Water Bottle – 1L",
      price: 450,
      image:
        "https://plus.unsplash.com/premium_photo-1664527307281-faf42c09ac8f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmV1c2FibGUlMjB3YXRlciUyMGJvdHRsZXxlbnwwfHwwfHx8MA%3D%3D",
      category: "Health",
      seller: "Ethan Fernandez",
    },
    {
      id: 41,
      title: "Resistance Bands Set – 5 Pieces",
      price: 600,
      image:
        "https://images.unsplash.com/photo-1584827386916-b5351d3ba34b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Health",
      seller: "Mia Javier",
    },
    {
      id: 42,
      title: "Aromatherapy Essential Oils Set",
      price: 1e3,
      image:
        "https://images.unsplash.com/photo-1624454002302-36b824d7bd0a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZXNzZW50aWFsJTIwb2lsc3xlbnwwfHwwfHx8MA%3D%3D",
      category: "Health",
      seller: "Noah Pascual",
    },
    {
      id: 43,
      title: "Homemade Banana Bread",
      price: 250,
      image:
        "https://images.unsplash.com/photo-1569762404472-026308ba6b64?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFuYW5hJTIwYnJlYWR8ZW58MHx8MHx8fDA%3D",
      category: "Food & Drinks",
      seller: "Ella Macaraeg",
    },
    {
      id: 44,
      title: "Cold Brew Coffee – 500ml",
      price: 180,
      image:
        "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sZCUyMGJyZXd8ZW58MHx8MHx8fDA%3D",
      category: "Food & Drinks",
      seller: "Liam Domingo",
    },
    {
      id: 45,
      title: "Gourmet Cookies Pack – 12 pcs",
      price: 350,
      image:
        "https://images.unsplash.com/photo-1624929101631-f35a320c521b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvdXJtZXQlMjBjb29raWVzJTIwcGFja3xlbnwwfHwwfHx8MA%3D%3D",
      category: "Food & Drinks",
      seller: "Ava Lozano",
    },
    {
      id: 46,
      title: "Vegan Meal Box – Chicken Style",
      price: 400,
      image:
        "https://plus.unsplash.com/premium_photo-1719833625904-820b301fbf7b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmVnYW4lMjBtZWFsJTIwY2hpY2tlbiUyMGJveHxlbnwwfHwwfHx8MA%3D%3D",
      category: "Food & Drinks",
      seller: "Zoe Katigbak",
    },
    {
      id: 47,
      title: "Fruit Smoothie – Mixed Berries",
      price: 150,
      image:
        "https://images.unsplash.com/photo-1600718374662-0483d2b9da44?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWl4ZWQlMjBiZXJyaWVzJTIwc21vb3RoaWV8ZW58MHx8MHx8fDA%3D",
      category: "Food & Drinks",
      seller: "Noah Soriano",
    },
    {
      id: 48,
      title: "Dog Chew Toys – 3pcs",
      price: 400,
      image:
        "https://images.unsplash.com/photo-1601758003630-df669e4e825a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hldyUyMHRveXN8ZW58MHx8MHx8fDA%3D",
      category: "Pet Supplies",
      seller: "Lily Hidalgo",
    },
    {
      id: 49,
      title: "Cat Scratching Post – Medium",
      price: 950,
      image:
        "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0JTIwc2NyYXRjaGluZyUyMHBvc3R8ZW58MHx8MHx8fDA%3D",
      category: "Pet Supplies",
      seller: "Max Torres",
    },
    {
      id: 50,
      title: "Pet Travel Bag – Small Dogs",
      price: 1200,
      image:
        "https://images.unsplash.com/photo-1661322506572-83e26fdfbcef?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nJTIwdHJhdmVsJTIwYmFnfGVufDB8fDB8fHww",
      category: "Pet Supplies",
      seller: "Emma Jimenez",
    },
    {
      id: 51,
      title: "Fish Tank Decorations – 10 pcs",
      price: 350,
      image:
        "https://images.unsplash.com/photo-1633465091434-117f2bcffd9d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlzaCUyMHRhbmslMjBkZWNvcnxlbnwwfHwwfHx8MA%3D%3D",
      category: "Pet Supplies",
      seller: "Leo Fernando",
    },
    {
      id: 52,
      title: "Dog Shampoo – 500ml",
      price: 450,
      image:
        "https://images.unsplash.com/photo-1647002380358-fc70ed2f04e0?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Pet Supplies",
      seller: "Ava Hernandez",
    },
    {
      id: 53,
      title: "Old Textbooks – College Level",
      price: 0,
      image:
        "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&q=80",
      category: "Free Items",
      seller: "Ethan Kalaw",
      condition: "Used",
    },
    {
      id: 54,
      title: "Empty Glass Jars – 5 pcs",
      price: 0,
      image:
        "https://images.unsplash.com/photo-1709176935857-b877f5ef55f6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2xhc3MlMjBqYXJzfGVufDB8fDB8fHww",
      category: "Free Items",
      seller: "Mia L.",
    },
    {
      id: 55,
      title: "Handmade Greeting Cards",
      price: 0,
      image:
        "https://images.unsplash.com/photo-1481011784351-b0227b9f4a80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZXRpbmclMjBjYXJkfGVufDB8fDB8fHww",
      category: "Free Items",
      seller: "Noah Macapagal",
    },
    {
      id: 56,
      title: "Old Phone Case – Samsung",
      price: 0,
      image:
        "https://images.unsplash.com/photo-1625641936123-59d5bcc1edb8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmUlMjBjYXNlJTIwc2Ftc3VuZ3xlbnwwfHwwfHx8MA%3D%3D",
      category: "Free Items",
      seller: "Zoe Punzalan",
    },
    {
      id: 57,
      title: "Plastic Plant Pots – 3 pcs",
      price: 0,
      image:
        "https://images.unsplash.com/photo-1759773892997-12079c362fca?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBsYW50JTIwcG90cyUyMHBsYXN0aWN8ZW58MHx8MHx8fDA%3D",
      category: "Free Items",
      seller: "Jack Tolentino",
    },
    {
      id: 58,
      title: "Watercolor Paper Pad – A4",
      price: 550,
      image:
        "https://images.unsplash.com/photo-1554757388-1029138cb2fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXJjb2xvciUyMHBhZCUyMHBhcGVyfGVufDB8fDB8fHww",
      category: "Art & Stationery",
      seller: "Lily Manalo",
    },
    {
      id: 59,
      title: "Set of Colored Pencils – 36 Colors",
      price: 400,
      image:
        "https://images.unsplash.com/photo-1535340582796-799448c62e08?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sb3JlZCUyMHBlbmNpbHMlMjAzNnxlbnwwfHwwfHx8MA%3D%3D",
      category: "Art & Stationery",
      seller: "Max Javier",
    },
    {
      id: 60,
      title: "Calligraphy Pen Set",
      price: 700,
      image:
        "https://images.unsplash.com/photo-1653122662461-af601aac83f5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhbGxpZ3JhcGh5JTIwcGVufGVufDB8fDB8fHww",
      category: "Art & Stationery",
      seller: "Mia Francisco",
    },
    {
      id: 61,
      title: "Sketchbook – 100 Pages",
      price: 350,
      image:
        "https://images.unsplash.com/photo-1501618669935-18b6ecb13d6d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2tldGNoYm9va3xlbnwwfHwwfHx8MA%3D%3D",
      category: "Art & Stationery",
      seller: "Ethan Pascual",
    },
    {
      id: 62,
      title: "Canvas Panel – 8x10 inches",
      price: 500,
      image:
        "https://images.unsplash.com/photo-1760794751749-6df8746cf42b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FudmFzJTIwcGFuZWx8ZW58MHx8MHx8fDA%3D",
      category: "Art & Stationery",
      seller: "Zoe Hizon",
    },
    {
      id: 63,
      title: "Portable Power Bank – 10,000mAh",
      price: 950,
      image:
        "https://images.unsplash.com/photo-1594843665794-446ce915d840?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG93ZXIlMjBiYW5rfGVufDB8fDB8fHww",
      category: "Other",
      seller: "Ava Magtanggol",
    },
    {
      id: 64,
      title: "USB Flash Drive – 128GB",
      price: 650,
      image:
        "https://images.unsplash.com/photo-1587145820098-23e484e69816?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNiJTIwZmxhc2glMjBkcml2ZXxlbnwwfHwwfHx8MA%3D%3D",
      category: "Other",
      seller: "Leo Dimaculangan",
    },
    {
      id: 65,
      title: "Mini Projector – Home Use",
      price: 3500,
      image:
        "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWluaSUyMHByb2plY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
      category: "Other",
      seller: "Mia Navarrete",
    },
    {
      id: 66,
      title: "LED Desk Lamp – Adjustable Brightness",
      price: 1200,
      image:
        "https://images.unsplash.com/photo-1708513427809-728a7913fc9f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVkJTIwZGVzayUyMGxhbXB8ZW58MHx8MHx8fDA%3D",
      category: "Other",
      seller: "Ethan Lacson",
    },
    {
      id: 67,
      title: "Travel Organizer Pouch – 5 Compartments",
      price: 550,
      image:
        "https://images.unsplash.com/photo-1758398332771-0a79c5df74a3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwb3JnYW5pemVyJTIwcG91Y2h8ZW58MHx8MHx8fDA%3D",
      category: "Other",
      seller: "Noah Javier",
    },
    {
      id: 68,
      title: "Wireless Earbuds — Noise Cancelling",
      price: 199,
      image:
        "https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww",
      category: "Electronics",
      seller: "Daniel Ramirez",
    },
    {
      id: 69,
      title: "4K Monitor — 27inch",
      price: 349,
      image:
        "https://plus.unsplash.com/premium_photo-1664699099341-b7c4229a8d97?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vbml0b3J8ZW58MHx8MHx8fDA%3D",
      category: "Electronics",
      seller: "Patricia Santos",
    },
    {
      id: 70,
      title: "Portable Bluetooth Speaker",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZXRvb3RoJTIwc3BlYWtlcnN8ZW58MHx8MHx8fDA%3D",
      category: "Electronics",
      seller: "Mark Tuazon",
    },
    {
      id: 71,
      title: "External SSD — 1TB",
      price: 159,
      image:
        "https://plus.unsplash.com/premium_photo-1721133221361-4f2b2af3b6fe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3NkfGVufDB8fDB8fHww",
      category: "Electronics",
      seller: "Lina Katigbak",
    },
    {
      id: 72,
      title: "Milk and Honey — Poetry Book",
      price: 60,
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D",
      category: "Books",
      seller: "Oliver Garcia",
      condition: "Good",
    },
    {
      id: 73,
      title: "Modern Physics Textbook",
      price: 45,
      image:
        "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3N8ZW58MHx8MHx8fDA%3D",
      category: "Books",
      seller: "Nadia Hidalgo",
    },
    {
      id: 74,
      title: "Graphic Design Fundamentals",
      price: 35,
      image:
        "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
      category: "Books",
      seller: "Luis Palma",
    },
    {
      id: 75,
      title: "Business Case Studies Collection",
      price: 40,
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&q=80",
      category: "Books",
      seller: "Hannah Corpuz",
    },
    {
      id: 76,
      title: "Poetry Anthology — Contemporary",
      price: 20,
      image:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&q=80",
      category: "Books",
      seller: "Ethan Villanueva",
    },
    {
      id: 77,
      title: "Used English Literature Set",
      price: 30,
      image:
        "https://images.unsplash.com/photo-1565022536102-f7645c84354a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW5nbGlzaCUyMGJvb2tzfGVufDB8fDB8fHww",
      category: "Books",
      seller: "Maya Lacap",
    },
    {
      id: 78,
      title: "Ballpoint Pens — Pack of 50",
      price: 15,
      image:
        "https://plus.unsplash.com/premium_photo-1664105111034-33e24dc90a78?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVuc3xlbnwwfHwwfHx8MA%3D%3D",
      category: "School Supplies",
      seller: "Kate Buendia",
    },
    {
      id: 79,
      title: "A4 Notebooks — 5 Pack",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1601001435957-74f0958a93fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm90ZWJvb2tzfGVufDB8fDB8fHww",
      category: "School Supplies",
      seller: "John Prado",
    },
    {
      id: 80,
      title: "Scientific Calculator — New",
      price: 55,
      image:
        "https://images.unsplash.com/photo-1574607383077-47ddc2dc51c4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2NpZW50aWZpYyUyMGNhbGN1bGF0b3J8ZW58MHx8MHx8fDA%3D",
      category: "School Supplies",
      seller: "Andrei Villanueva",
    },
    {
      id: 81,
      title: "Geometry Set — Complete",
      price: 25,
      image:
        "https://media.istockphoto.com/id/182176138/photo/geometry-compass-ruler-and-red-pencil-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=QY982xWkx1vn6diR_KLNnuyb02jFy9sZnALhxGwi520=",
      category: "School Supplies",
      seller: "Karl Javier",
    },
    {
      id: 82,
      title: "Highlighters — 12 Colors",
      price: 80,
      image:
        "https://images.unsplash.com/photo-1586764635350-4f88a6a30a52?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhpZ2hsaWdodGVyc3xlbnwwfHwwfHx8MA%3D%3D",
      category: "School Supplies",
      seller: "Lily Castillo",
    },
    {
      id: 83,
      title: "Index Cards — 200pcs",
      price: 60,
      image:
        "https://images.unsplash.com/photo-1513710281312-7a43f9cdbfcc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kZXglMjBjYXJkc3xlbnwwfHwwfHx8MA%3D%3D",
      category: "School Supplies",
      seller: "Max Javier",
    },
    {
      id: 84,
      title: "USB-C Charging Cables — 3 Pack",
      price: 90,
      image:
        "https://plus.unsplash.com/premium_photo-1759282946954-d1fdec6198eb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNiJTIwY2hhcmdpbmclMjBjYWJsZXN8ZW58MHx8MHx8fDA%3D",
      category: "School Supplies",
      seller: "Noah Javier",
    },
    {
      id: 85,
      title: "Backpack — College Sized",
      price: 220,
      image:
        "https://plus.unsplash.com/premium_photo-1723649902660-66643962d57b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sbGVnZSUyMGJhY2twYWNrfGVufDB8fDB8fHww",
      category: "School Supplies",
      seller: "Danilo Lim",
    },
    {
      id: 86,
      title: "CIIT College NSTP/PE Uniform - Size M",
      price: 300,
      image:
        "https://ciitstore.myshopify.com/cdn/shop/files/PENSTP5.jpg?v=1702265002",
      category: "Uniforms",
      seller: "Dana Reyes",
    },
    {
      id: 87,
      title: "CIIT College NSTP/PE Uniform - Size L",
      price: 1200,
      image:
        "https://ciitstore.myshopify.com/cdn/shop/files/PENSTP1.jpg?v=1702265002",
      category: "Uniforms",
      seller: "Leon Villanueva",
    },
    {
      id: 88,
      title: "CIIT SHS PE Uniform - Size S",
      price: 250,
      image:
        "https://ciitstore.myshopify.com/cdn/shop/files/SHSShirt1.jpg?v=1702265878",
      category: "Uniforms",
      seller: "Nora Salvador",
    },
    {
      id: 89,
      title: "PE Shorts — Unisex",
      price: 180,
      image:
        "https://www.dans.ph/cdn/shop/files/Untitleddesign-2025-02-27T110430.370.png?v=1740626275&width=416",
      category: "Uniforms",
      seller: "Karl Javier",
    },
    {
      id: 90,
      title: "Jogging Pants - Size L",
      price: 120,
      image:
        "https://img.lazcdn.com/g/p/9cbf1097b8e209f16a9a879eb383ec29.jpg_720x720q80.jpg",
      category: "Uniforms",
      seller: "Mia Pascual",
    },
    {
      id: 91,
      title: "CIIT SHS PE Jogging Pants - Size XL",
      price: 320,
      image:
        "https://ciitstore.myshopify.com/cdn/shop/files/Jogger1.jpg?v=1702265243",
      category: "Uniforms",
      seller: "Ana Villanueva",
    },
    {
      id: 93,
      title: "Basketball — Official Size",
      price: 850,
      image:
        "https://plus.unsplash.com/premium_photo-1668767725891-58f5cd788105?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFza2V0YmFsbHxlbnwwfHwwfHx8MA%3D%3D",
      category: "Sports",
      seller: "Christian Hernandez",
    },
    {
      id: 94,
      title: "Running Shoes — Size 9",
      price: 1400,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
      category: "Sports",
      seller: "Zoe Reyes",
    },
    {
      id: 95,
      title: "Tennis Racket — Lightweight",
      price: 2200,
      image:
        "https://images.unsplash.com/photo-1617883861744-13b534e3b928?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVubmlzJTIwcmFja2V0fGVufDB8fDB8fHww",
      category: "Sports",
      seller: "Juan dela Cruz",
    },
    {
      id: 96,
      title: "Coffee Table — Oak Finish",
      price: 4200,
      image:
        "https://plus.unsplash.com/premium_photo-1711391585226-45a983eb8e70?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29mZmVlJTIwdGFibGV8ZW58MHx8MHx8fDA%3D",
      category: "Furniture",
      seller: "Tomas Santos",
    },
    {
      id: 97,
      title: "Bookshelf — 4 Tier",
      price: 2800,
      image:
        "https://images.unsplash.com/photo-1515542706656-8e6ef17a1521?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJvb2tzaGVsZnxlbnwwfHwwfHx8MA%3D%3D",
      category: "Furniture",
      seller: "Ana Villanueva",
    },
    {
      id: 98,
      title: "Sunglasses — UV Protection",
      price: 650,
      image:
        "https://images.unsplash.com/photo-1584036553516-bf83210aa16c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D",
      category: "Accessories",
      seller: "Zoe Reyes",
    },
    {
      id: 99,
      title: "Leather Belt — Brown",
      price: 450,
      image:
        "https://images.unsplash.com/photo-1664286074176-5206ee5dc878?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhdGhlciUyMGJlbHR8ZW58MHx8MHx8fDA%3D",
      category: "Accessories",
      seller: "Danilo Lim",
    },
    {
      id: 100,
      title: "Canvas Tote Bag",
      price: 220,
      image:
        "https://plus.unsplash.com/premium_photo-1681498856888-2f3552c0b189?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FudmFzJTIwdG90ZSUyMGJhZ3xlbnwwfHwwfHx8MA%3D%3D",
      category: "Accessories",
      seller: "Mia Pascual",
    },
    {
      id: 101,
      title: "Ukulele — Soprano",
      price: 950,
      image:
        "https://images.unsplash.com/photo-1621875833619-370c48ffa953?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dWtlbGVsZXxlbnwwfHwwfHx8MA%3D%3D",
      category: "Musical Instruments",
      seller: "Ligaya Ramos.",
    },
    {
      id: 102,
      title: "Electric Guitar — Beginner",
      price: 4200,
      image:
        "https://images.unsplash.com/photo-1568193755668-aae18714a9f1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlY3RyaWMlMjBndWl0YXJ8ZW58MHx8MHx8fDA%3D",
      category: "Musical Instruments",
      seller: "Jack Lim",
    },
    {
      id: 103,
      title: "Keyboard — 61 Keys",
      price: 3100,
      image:
        "https://images.unsplash.com/photo-1523297554394-dc159677ffe1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHBpYW5vJTIwa2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D",
      category: "Musical Instruments",
      seller: "Ethan Pascual",
    },
    {
      id: 104,
      title: "Cushioned Sofa Pillow Set — 2pcs",
      price: 800,
      image:
        "https://images.unsplash.com/photo-1603192399946-8bbb0703cfc4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNvZmElMjBwaWxsb3d8ZW58MHx8MHx8fDA%3D",
      category: "Home",
      seller: "Tomas Santos",
    },
    {
      id: 105,
      title: "Wall Art Print — Abstract",
      price: 1200,
      image:
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2FsbCUyMGFydHxlbnwwfHwwfHx8MA%3D%3D",
      category: "Home",
      seller: "Zoe Hizon",
    },
    {
      id: 106,
      title: "Bedside Lamp — Ceramic",
      price: 650,
      image:
        "https://plus.unsplash.com/premium_photo-1664194583989-96c9fa85de8f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmVkc2lkZSUyMGxhbXB8ZW58MHx8MHx8fDA%3D",
      category: "Home",
      seller: "Ana Villanueva",
    },
    {
      id: 107,
      title: "Area Rug — 5x7 ft",
      price: 2600,
      image:
        "https://plus.unsplash.com/premium_photo-1675738774365-c542862be2d4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJ1Z3xlbnwwfHwwfHx8MA%3D%3D",
      category: "Home",
      seller: "Danilo Lim",
    },
    {
      id: 108,
      title: "Stand Mixer — 5L",
      price: 9500,
      image:
        "https://plus.unsplash.com/premium_photo-1718186096324-474ac487bcc3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RhbmQlMjBtaXhlcnxlbnwwfHwwfHx8MA%3D%3D",
      category: "Appliances",
      seller: "Jesica Flores",
    },
    {
      id: 109,
      title: "Electric Kettle — 1.7L",
      price: 1800,
      image:
        "https://images.unsplash.com/photo-1738520420652-0c47cea3922b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWxlY3RyaWMlMjBrZXR0bGV8ZW58MHx8MHx8fDA%3D",
      category: "Appliances",
      seller: "Liam Domingo",
    },
    {
      id: 110,
      title: "Air Fryer — Compact",
      price: 4200,
      image:
        "https://images.unsplash.com/photo-1695089028114-ce28248f0ab9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyJTIwZnJ5ZXJ8ZW58MHx8MHx8fDA%3D",
      category: "Appliances",
      seller: "Mia Navarrete",
    },
  ],
  Wd = [
    { label: "All", icon: "🛍️" },
    { label: "Electronics", icon: "💻" },
    { label: "Books", icon: "📚" },
    { label: "School Supplies", icon: "✏️" },
    { label: "Uniforms", icon: "👔" },
    { label: "Sports", icon: "⚽" },
    { label: "Furniture", icon: "🪑" },
    { label: "Accessories", icon: "🎒" },
    { label: "Musical Instruments", icon: "🎸" },
    { label: "Home", icon: "🏠" },
    { label: "Appliances", icon: "☕" },
    { label: "Services", icon: "🛠️" },
    { label: "Apparel", icon: "👕" },
    { label: "Gaming", icon: "🎮" },
    { label: "Hobbies & Toys", icon: "🧩" },
    { label: "Makeup", icon: "💄" },
    { label: "Health", icon: "💊" },
    { label: "Food & Drinks", icon: "🍱" },
    { label: "Pet Supplies", icon: "🐾" },
    { label: "Free Items", icon: "🎁" },
    { label: "Art & Stationery", icon: "🖌️" },
    { label: "Other", icon: "🔧" },
  ],
  Yg = "_bar_edyrt_1",
  qg = "_inner_edyrt_12",
  Zg = "_chip_edyrt_27",
  Jg = "_active_edyrt_51",
  Kg = "_icon_edyrt_57",
  ll = { bar: Yg, inner: qg, chip: Zg, active: Jg, icon: Kg };
function Xg({ active: o, onSelect: u }) {
  return i.jsx("div", {
    className: ll.bar,
    children: i.jsx("div", {
      className: ll.inner,
      children: Wd.map(({ label: a, icon: d }) =>
        i.jsxs(
          "button",
          {
            type: "button",
            className: `${ll.chip} ${o === a ? ll.active : ""}`,
            onClick: () => u(a),
            children: [i.jsx("span", { className: ll.icon, children: d }), a],
          },
          a,
        ),
      ),
    }),
  });
}
const Qg = "_card_1w0i2_1",
  e0 = "_boosted_1w0i2_22",
  t0 = "_selected_1w0i2_27",
  n0 = "_imageWrap_1w0i2_38",
  r0 = "_image_1w0i2_38",
  l0 = "_badge_1w0i2_57",
  i0 = "_badgeNew_1w0i2_68",
  o0 = "_badgeLikeNew_1w0i2_73",
  s0 = "_badgeGood_1w0i2_78",
  a0 = "_badgeUsed_1w0i2_83",
  u0 = "_wishBtn_1w0i2_89",
  c0 = "_liked_1w0i2_110",
  d0 = "_boostIndicator_1w0i2_118",
  f0 = "_body_1w0i2_132",
  p0 = "_category_1w0i2_136",
  m0 = "_title_1w0i2_153",
  h0 = "_seller_1w0i2_165",
  g0 = "_boostMeta_1w0i2_183",
  y0 = "_footer_1w0i2_191",
  v0 = "_price_1w0i2_197",
  x0 = "_actionBtn_1w0i2_204",
  w0 = "_actionGroup_1w0i2_220",
  _0 = "_boostActionBtn_1w0i2_226",
  he = {
    card: Qg,
    boosted: e0,
    selected: t0,
    imageWrap: n0,
    image: r0,
    badge: l0,
    badgeNew: i0,
    badgeLikeNew: o0,
    badgeGood: s0,
    badgeUsed: a0,
    wishBtn: u0,
    liked: c0,
    boostIndicator: d0,
    body: f0,
    category: p0,
    title: m0,
    seller: h0,
    boostMeta: g0,
    footer: y0,
    price: v0,
    actionBtn: x0,
    actionGroup: w0,
    boostActionBtn: _0,
  },
  nd =
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"><rect width="600" height="600" fill="%23f3f4f6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239ca3af" font-family="Arial,sans-serif" font-size="24">No image</text></svg>',
  S0 = "kampus_listing_boosts";
function k0(o) {
  try {
    const u = localStorage.getItem(S0);
    if (!u) return 0;
    const d = JSON.parse(u)[String(o)];
    if (!d || typeof d.expiresAt != "number") return 0;
    const f = d.expiresAt - Date.now();
    if (f <= 0) return 0;
    const p = 1440 * 60 * 1e3;
    return Math.ceil(f / p);
  } catch {
    return 0;
  }
}
function rd(o) {
  const u = o.currentTarget;
  u.src !== nd && (u.src = nd);
}
const ld = {
  New: he.badgeNew,
  "Like New": he.badgeLikeNew,
  Good: he.badgeGood,
  Used: he.badgeUsed,
};
function id(o) {
  return (
    "₱" +
    o.toLocaleString("en-PH", { minimumFractionDigits: o % 1 !== 0 ? 2 : 0 })
  );
}
function Ri({ product: o, liked: u, onToggleLike: a, style: d }) {
  const f = Ot(),
    {
      id: p,
      title: h,
      price: x,
      image: v,
      category: S,
      seller: j,
      condition: k,
    } = o,
    {
      selectable: D,
      selected: W,
      onSelect: R,
      showBoost: B,
      onBoostClick: E,
    } = arguments[0],
    P = k0(p),
    Y = P > 0,
    { user: q } = Ut(),
    ae = !!(q && (q.email === o.sellerId || q.name === o.seller)),
    le = `${he.card}${Y ? " " + he.boosted : ""}${W ? " " + he.selected : ""}`;
  return D
    ? i.jsxs("div", {
        className: le,
        style: d,
        onClick: R,
        children: [
          i.jsxs("div", {
            className: he.imageWrap,
            children: [
              i.jsx("img", {
                src: v,
                alt: h,
                loading: "lazy",
                className: he.image,
                onError: rd,
              }),
              k &&
                i.jsx("span", {
                  className: `${he.badge} ${ld[k] ?? ""}`,
                  children: k,
                }),
              i.jsx("button", {
                className: `${he.wishBtn} ${u ? he.liked : ""}`,
                onClick: (de) => {
                  (de.stopPropagation(), a(p));
                },
                "aria-label": u ? "Remove from wishlist" : "Add to wishlist",
                children: i.jsx(ol, { size: 15 }),
              }),
              Y &&
                i.jsx("span", {
                  className: he.boostIndicator,
                  title: "Boosted",
                  "aria-hidden": !0,
                  children: i.jsx(Ci, { size: 14, color: "#10b981" }),
                }),
            ],
          }),
          i.jsxs("div", {
            className: he.body,
            children: [
              i.jsx("span", { className: he.category, children: S }),
              i.jsx("p", { className: he.title, children: h }),
              i.jsxs("p", {
                className: he.seller,
                children: ["by ", i.jsx("span", { children: j })],
              }),
              Y &&
                ae &&
                i.jsxs("p", {
                  className: he.boostMeta,
                  children: [
                    "Boosted ",
                    P,
                    " day",
                    P === 1 ? "" : "s",
                    " left",
                  ],
                }),
              i.jsxs("div", {
                className: he.footer,
                children: [
                  i.jsx("span", { className: he.price, children: id(x) }),
                  i.jsxs("div", {
                    className: he.actionGroup,
                    children: [
                      B &&
                        E &&
                        i.jsx("button", {
                          type: "button",
                          className: he.boostActionBtn,
                          onClick: (de) => {
                            (de.stopPropagation(), E(p));
                          },
                          "aria-label": "Boost posting",
                          title: "Boost posting",
                          children: i.jsx(Ci, {
                            size: 14,
                            color: "white",
                            strokeWidth: 2.5,
                          }),
                        }),
                      i.jsx("div", {
                        className: he.actionBtn,
                        "aria-label": "View listing",
                        children: i.jsx(Qc, {
                          size: 14,
                          color: "white",
                          strokeWidth: 2.5,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    : i.jsxs("div", {
        className: le,
        style: d,
        children: [
          i.jsxs("div", {
            className: he.imageWrap,
            children: [
              i.jsx("img", {
                src: v,
                alt: h,
                loading: "lazy",
                className: he.image,
                onError: rd,
              }),
              k &&
                i.jsx("span", {
                  className: `${he.badge} ${ld[k] ?? ""}`,
                  children: k,
                }),
              i.jsx("button", {
                className: `${he.wishBtn} ${u ? he.liked : ""}`,
                onClick: (de) => {
                  (de.stopPropagation(), a(p));
                },
                "aria-label": u ? "Remove from wishlist" : "Add to wishlist",
                children: i.jsx(ol, { size: 15 }),
              }),
              Y &&
                i.jsx("span", {
                  className: he.boostIndicator,
                  title: "Boosted",
                  "aria-hidden": !0,
                  children: i.jsx(Ci, { size: 14, color: "#10b981" }),
                }),
            ],
          }),
          i.jsxs("div", {
            className: he.body,
            onClick: () => f(`/item/${p}`),
            style: { cursor: "pointer" },
            children: [
              i.jsx("span", { className: he.category, children: S }),
              i.jsx("p", { className: he.title, children: h }),
              i.jsxs("p", {
                className: he.seller,
                children: ["by ", i.jsx("span", { children: j })],
              }),
              Y &&
                ae &&
                i.jsxs("p", {
                  className: he.boostMeta,
                  children: [
                    "Boosted ",
                    P,
                    " day",
                    P === 1 ? "" : "s",
                    " left",
                  ],
                }),
              i.jsxs("div", {
                className: he.footer,
                children: [
                  i.jsx("span", { className: he.price, children: id(x) }),
                  i.jsxs("div", {
                    className: he.actionGroup,
                    children: [
                      B &&
                        E &&
                        i.jsx("button", {
                          type: "button",
                          className: he.boostActionBtn,
                          onClick: (de) => {
                            (de.stopPropagation(), E(p));
                          },
                          "aria-label": "Boost posting",
                          title: "Boost posting",
                          children: i.jsx(Ci, {
                            size: 14,
                            color: "white",
                            strokeWidth: 2.5,
                          }),
                        }),
                      i.jsx("div", {
                        className: he.actionBtn,
                        "aria-label": "View listing",
                        children: i.jsx(Qc, {
                          size: 14,
                          color: "white",
                          strokeWidth: 2.5,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      });
}
function Zs() {
  const { user: o } = Ut(),
    u = o ? `wishlist_${o.email}` : "wishlist_guest",
    a = () => {
      try {
        const v = localStorage.getItem(u);
        return v ? new Set(JSON.parse(v)) : new Set();
      } catch {
        return new Set();
      }
    },
    [d, f] = y.useState(a()),
    p = (v) => {
      try {
        localStorage.setItem(u, JSON.stringify(Array.from(v)));
      } catch {}
    };
  return {
    toggle: (v) => {
      f((S) => {
        const j = new Set(S);
        return (j.has(v) ? j.delete(v) : j.add(v), p(j), j);
      });
    },
    isLiked: (v) => d.has(v),
    likedIds: Array.from(d),
  };
}
const N0 = "_section_4wqkv_1",
  j0 = "_header_4wqkv_7",
  C0 = "_title_4wqkv_14",
  M0 = "_viewAll_4wqkv_21",
  E0 = "_grid_4wqkv_33",
  B0 = "_empty_4wqkv_39",
  pr = { section: N0, header: j0, title: C0, viewAll: M0, grid: E0, empty: B0 };
function P0({ products: o }) {
  const { toggle: u, isLiked: a } = Zs();
  return i.jsxs("section", {
    className: pr.section,
    children: [
      i.jsxs("div", {
        className: pr.header,
        children: [
          i.jsx("h2", { className: pr.title, children: "Recent Listings" }),
          i.jsx(Ke, { to: "/", className: pr.viewAll, children: "View all →" }),
        ],
      }),
      i.jsx("div", {
        className: pr.grid,
        children: o.map((d, f) =>
          i.jsx(
            Ri,
            {
              product: d,
              liked: a(d.id),
              onToggleLike: u,
              style: { animationDelay: `${f * 0.05}s` },
            },
            d.id,
          ),
        ),
      }),
      o.length === 0 &&
        i.jsx("div", {
          className: pr.empty,
          children: i.jsx("p", {
            children: "No listings found in this category yet.",
          }),
        }),
    ],
  });
}
const Mi = "@ciit.edu.ph";
function $d() {
  const [o, u] = y.useState("idle");
  return {
    state: o,
    validate: (p) => {
      if (!p) {
        u("idle");
        return;
      }
      const h = p.toLowerCase().endsWith(Mi) && p.length > Mi.length,
        x = p.includes("@") && !h;
      u(x ? "invalid" : h ? "valid" : "idle");
    },
    isCIITEmail: (p) => p.toLowerCase().endsWith(Mi) && p.length > Mi.length,
    reset: () => u("idle"),
  };
}
const D0 = "_overlay_g9ocg_1",
  b0 = "_open_g9ocg_15",
  R0 = "_modal_g9ocg_20",
  A0 = "_closeBtn_g9ocg_35",
  L0 = "_panelLogo_g9ocg_55",
  I0 = "_panelSub_g9ocg_66",
  T0 = "_panelTitle_g9ocg_73",
  H0 = "_formGroup_g9ocg_81",
  z0 = "_input_g9ocg_93",
  F0 = "_inputError_g9ocg_110",
  W0 = "_passwordWrapper_g9ocg_114",
  $0 = "_passwordToggle_g9ocg_124",
  O0 = "_hint_g9ocg_146",
  U0 = "_hintValid_g9ocg_154",
  V0 = "_hintInvalid_g9ocg_157",
  G0 = "_submitBtn_g9ocg_161",
  Y0 = "_divider_g9ocg_180",
  q0 = "_switchText_g9ocg_196",
  Z0 = "_ciitNote_g9ocg_211",
  J0 = "_sellGate_g9ocg_225",
  pe = {
    overlay: D0,
    open: b0,
    modal: R0,
    closeBtn: A0,
    panelLogo: L0,
    panelSub: I0,
    panelTitle: T0,
    formGroup: H0,
    input: z0,
    inputError: F0,
    passwordWrapper: W0,
    passwordToggle: $0,
    hint: O0,
    hintValid: U0,
    hintInvalid: V0,
    submitBtn: G0,
    divider: Y0,
    switchText: q0,
    ciitNote: Z0,
    sellGate: J0,
  },
  K0 = ["1st Year", "2nd Year", "3rd Year", "4th Year"],
  X0 = [
    "BMMA - Animation",
    "BMMA - Graphic Design",
    "BMMA - Film",
    "BS - Entrep",
    "BSEMC",
    "BSCS",
    "BSIT",
  ],
  Od = () => {
    try {
      const o = localStorage.getItem("mock_accounts");
      return o ? JSON.parse(o) : [];
    } catch {
      return [];
    }
  },
  Q0 = (o) => {
    try {
      const u = Od();
      u.find((a) => a.email === o.email) ||
        (u.push(o), localStorage.setItem("mock_accounts", JSON.stringify(u)));
    } catch {}
  },
  Ud = (o) => Od().find((u) => u.email === o);
function Vd({ state: o }) {
  return o === "idle"
    ? i.jsxs("p", {
        className: pe.hint,
        children: [i.jsx(Td, { size: 12 }), " Must be a @ciit.edu.ph address"],
      })
    : o === "valid"
      ? i.jsxs("p", {
          className: `${pe.hint} ${pe.hintValid}`,
          children: [i.jsx(qs, { size: 12 }), " Verified CIIT student email ✓"],
        })
      : i.jsxs("p", {
          className: `${pe.hint} ${pe.hintInvalid}`,
          children: [
            i.jsx(Sn, { size: 12 }),
            " Only @ciit.edu.ph emails are allowed",
          ],
        });
}
function Gd() {
  return i.jsxs("div", {
    className: pe.ciitNote,
    children: [
      i.jsx(qs, { size: 14, style: { flexShrink: 0, marginTop: 1 } }),
      i.jsxs("span", {
        children: [
          "Kampus is exclusively for verified CIIT students. Only",
          " ",
          i.jsx("strong", { children: " @ciit.edu.ph " }),
          " email addresses are accepted.",
        ],
      }),
    ],
  });
}
function e1({ onSwitch: o, onClose: u, initialEmail: a = "" }) {
  const d = $d(),
    [f, p] = y.useState(a),
    [h, x] = y.useState(""),
    [v, S] = y.useState(!1),
    { login: j } = Ut();
  y.useEffect(() => {
    a && (p(a), d.validate(a));
  }, [a]);
  const k = () => {
    if (!d.isCIITEmail(f)) {
      alert("Please enter a valid @ciit.edu.ph email address.");
      return;
    }
    const D = Ud(f);
    if (!D) {
      alert("Account not found. Please sign up first.");
      return;
    }
    if (!h.trim()) {
      alert("Please enter your password.");
      return;
    }
    if (D.password !== h.trim()) {
      alert("Incorrect password. Please try again.");
      return;
    }
    (j({ id: f, name: D.name, email: f, year: D.year, course: D.course }),
      u(),
      alert("Welcome back!"));
  };
  return i.jsxs(i.Fragment, {
    children: [
      i.jsxs("div", {
        className: pe.panelLogo,
        children: ["Kampus", i.jsx("span", { children: "." })],
      }),
      i.jsx("p", {
        className: pe.panelSub,
        children:
          "Sign in with your CIIT student email to access the marketplace.",
      }),
      i.jsx("h3", { className: pe.panelTitle, children: "Welcome back 👋" }),
      i.jsxs("div", {
        className: pe.formGroup,
        children: [
          i.jsx("label", { children: "CIIT Student Email" }),
          i.jsx("input", {
            className: `${pe.input} ${d.state === "invalid" ? pe.inputError : ""}`,
            type: "email",
            placeholder: "email@ciit.edu.ph",
            value: f,
            onChange: (D) => {
              (p(D.target.value), d.validate(D.target.value));
            },
          }),
          i.jsx(Vd, { state: d.state }),
        ],
      }),
      i.jsxs("div", {
        className: pe.formGroup,
        children: [
          i.jsx("label", { children: "Password" }),
          i.jsxs("div", {
            className: pe.passwordWrapper,
            children: [
              i.jsx("input", {
                className: pe.input,
                type: v ? "text" : "password",
                placeholder: "••••••••",
                value: h,
                onChange: (D) => x(D.target.value),
              }),
              i.jsx("button", {
                type: "button",
                className: pe.passwordToggle,
                onClick: () => S(!v),
                "aria-label": v ? "Hide password" : "Show password",
                children: v ? i.jsx(Ld, { size: 18 }) : i.jsx(Id, { size: 18 }),
              }),
            ],
          }),
        ],
      }),
      i.jsx("button", {
        className: pe.submitBtn,
        onClick: k,
        children: "Sign In",
      }),
      i.jsx("div", { className: pe.divider, children: "or" }),
      i.jsxs("p", {
        className: pe.switchText,
        children: [
          "New to Kampus?",
          " ",
          i.jsx("a", {
            onClick: () => o("signup", f),
            children: "Create an account",
          }),
        ],
      }),
      i.jsx(Gd, {}),
    ],
  });
}
function t1({ onSwitch: o, onClose: u, initialEmail: a = "" }) {
  const d = $d(),
    [f, p] = y.useState(""),
    [h, x] = y.useState(a),
    [v, S] = y.useState(""),
    [j, k] = y.useState(!1),
    [D, W] = y.useState(""),
    [R, B] = y.useState("");
  y.useEffect(() => {
    a && (x(a), d.validate(a));
  }, [a]);
  const E = () => {
    if (!f.trim()) {
      alert("Please enter your full name.");
      return;
    }
    if (!d.isCIITEmail(h)) {
      alert("Only @ciit.edu.ph email addresses can register on Kampus.");
      return;
    }
    if (Ud(h)) {
      alert("This email is already registered.");
      return;
    }
    if (!v.trim()) {
      alert("Please enter a password.");
      return;
    }
    if (!D) {
      alert("Please select your year level.");
      return;
    }
    if (!R) {
      alert("Please select your course.");
      return;
    }
    (Q0({ email: h, name: f.trim(), password: v.trim(), year: D, course: R }),
      alert("Account created! Please sign in with your email."),
      o("signin"));
  };
  return i.jsxs(i.Fragment, {
    children: [
      i.jsxs("div", {
        className: pe.panelLogo,
        children: ["Kampus", i.jsx("span", { children: "." })],
      }),
      i.jsx("p", {
        className: pe.panelSub,
        children: "Join your fellow CIITizens on the campus marketplace.",
      }),
      i.jsx("h3", { className: pe.panelTitle, children: "Create account 🎓" }),
      i.jsxs("div", {
        className: pe.formGroup,
        children: [
          i.jsx("label", { children: "Full Name" }),
          i.jsx("input", {
            className: pe.input,
            type: "text",
            placeholder: "Juan dela Cruz",
            value: f,
            onChange: (P) => p(P.target.value),
          }),
        ],
      }),
      i.jsxs("div", {
        className: pe.formGroup,
        children: [
          i.jsx("label", { children: "CIIT Student Email" }),
          i.jsx("input", {
            className: `${pe.input} ${d.state === "invalid" ? pe.inputError : ""}`,
            type: "email",
            placeholder: "email@ciit.edu.ph",
            value: h,
            onChange: (P) => {
              (x(P.target.value), d.validate(P.target.value));
            },
          }),
          i.jsx(Vd, { state: d.state }),
        ],
      }),
      i.jsxs("div", {
        className: pe.formGroup,
        children: [
          i.jsx("label", { children: "Password" }),
          i.jsxs("div", {
            className: pe.passwordWrapper,
            children: [
              i.jsx("input", {
                className: pe.input,
                type: j ? "text" : "password",
                placeholder: "Create a strong password",
                value: v,
                onChange: (P) => S(P.target.value),
              }),
              i.jsx("button", {
                type: "button",
                className: pe.passwordToggle,
                onClick: () => k(!j),
                "aria-label": j ? "Hide password" : "Show password",
                children: j ? i.jsx(Ld, { size: 18 }) : i.jsx(Id, { size: 18 }),
              }),
            ],
          }),
        ],
      }),
      i.jsxs("div", {
        className: pe.formGroup,
        children: [
          i.jsx("label", { children: "Year Level" }),
          i.jsxs("select", {
            className: pe.input,
            value: D,
            onChange: (P) => W(P.target.value),
            children: [
              i.jsx("option", { value: "", children: "Select your year" }),
              K0.map((P) => i.jsx("option", { value: P, children: P }, P)),
            ],
          }),
        ],
      }),
      i.jsxs("div", {
        className: pe.formGroup,
        children: [
          i.jsx("label", { children: "Course" }),
          i.jsxs("select", {
            className: pe.input,
            value: R,
            onChange: (P) => B(P.target.value),
            children: [
              i.jsx("option", { value: "", children: "Select your course" }),
              X0.map((P) => i.jsx("option", { value: P, children: P }, P)),
            ],
          }),
        ],
      }),
      i.jsx("button", {
        className: pe.submitBtn,
        onClick: E,
        children: "Create Account",
      }),
      i.jsx("div", { className: pe.divider, children: "or" }),
      i.jsxs("p", {
        className: pe.switchText,
        children: [
          "Already have an account?",
          " ",
          i.jsx("a", { onClick: () => o("signin", h), children: "Sign in" }),
        ],
      }),
      i.jsx(Gd, {}),
    ],
  });
}
function n1({ onSwitch: o }) {
  return i.jsxs(i.Fragment, {
    children: [
      i.jsxs("div", {
        className: pe.panelLogo,
        children: ["Kampus", i.jsx("span", { children: "." })],
      }),
      i.jsx("p", {
        className: pe.panelSub,
        children: "List something for sale on the campus marketplace.",
      }),
      i.jsx("h3", { className: pe.panelTitle, children: "Post a listing ✏️" }),
      i.jsxs("div", {
        className: pe.sellGate,
        children: [
          i.jsx("p", {
            children: "You need to be signed in to post a listing.",
          }),
          i.jsx("a", {
            onClick: () => o("signin"),
            children: "Sign in to continue →",
          }),
        ],
      }),
    ],
  });
}
function r1({
  isOpen: o,
  panel: u,
  onClose: a,
  onSwitchPanel: d,
  initialEmail: f = "",
}) {
  const p = y.useRef(null);
  y.useEffect(() => {
    const x = (v) => {
      v.key === "Escape" && a();
    };
    return (
      document.addEventListener("keydown", x),
      () => document.removeEventListener("keydown", x)
    );
  }, [a]);
  const h = (x) => {
    x.target === p.current && a();
  };
  return i.jsx("div", {
    ref: p,
    className: `${pe.overlay} ${o ? pe.open : ""}`,
    onClick: h,
    children: i.jsxs("div", {
      className: pe.modal,
      children: [
        i.jsx("button", {
          className: pe.closeBtn,
          onClick: a,
          "aria-label": "Close",
          children: i.jsx(Sn, { size: 14, strokeWidth: 2.5 }),
        }),
        u === "signin" &&
          i.jsx(e1, { onSwitch: d, onClose: a, initialEmail: f }),
        u === "signup" &&
          i.jsx(t1, { onSwitch: d, onClose: a, initialEmail: f }),
        u === "sell" && i.jsx(n1, { onSwitch: d }),
      ],
    }),
  });
}
const l1 = "_footer_1gdva_1",
  i1 = "_copy_1gdva_12",
  od = { footer: l1, copy: i1 };
function o1() {
  return i.jsxs("footer", {
    className: od.footer,
    children: [
      i.jsx("strong", { children: "Kampus." }),
      " — Exclusively for",
      " ",
      i.jsx("strong", { children: "CIIT College of Arts and Technology" }),
      " students.",
      i.jsx("span", {
        className: od.copy,
        children: "© 2025 Kampus. All rights reserved.",
      }),
    ],
  });
}
function s1() {
  const [o, u] = y.useState(null),
    [a, d] = y.useState("");
  return {
    panel: o,
    open: (x, v) => {
      (u(x), d(v ?? ""));
    },
    close: () => {
      (u(null), d(""));
    },
    isOpen: o !== null,
    setPanel: u,
    initialEmail: a,
  };
}
const Yd = y.createContext(void 0);
function a1({ children: o }) {
  const [u, a] = y.useState(() => {
      try {
        const h = localStorage.getItem("user_listings"),
          x = h ? JSON.parse(h) : [],
          v = new Map();
        for (const S of bi) v.set(S.id, S);
        for (const S of x) v.set(S.id, S);
        return Array.from(v.values());
      } catch {
        return bi;
      }
    }),
    d = (h) => {
      const x = h * 0.1;
      return Math.round((h + x) * 100) / 100;
    },
    f = (h) => {
      a((x) => {
        const v = { ...h, price: d(Number(h.price)) },
          j = [...x.filter((k) => k.id !== v.id), v];
        try {
          localStorage.setItem("user_listings", JSON.stringify(j));
        } catch {}
        return j;
      });
    },
    p = (h) => {
      a((x) => {
        const v = x.filter((S) => S.id !== h);
        try {
          localStorage.setItem("user_listings", JSON.stringify(v));
        } catch {}
        return v;
      });
    };
  return i.jsx(Yd.Provider, {
    value: { listings: u, addListing: f, deleteListing: p },
    children: o,
  });
}
function fl() {
  const o = y.useContext(Yd);
  if (!o) throw new Error("useListings must be used within a ListingsProvider");
  return o;
}
const u1 = "_page_dor3f_1",
  c1 = "_topBar_dor3f_8",
  d1 = "_backBtn_dor3f_12",
  f1 = "_layout_dor3f_27",
  p1 = "_gallery_dor3f_42",
  m1 = "_mainImage_dor3f_47",
  h1 = "_conditionBadge_dor3f_61",
  g1 = "_imgNav_dor3f_73",
  y1 = "_imgNavLeft_dor3f_94",
  v1 = "_imgNavRight_dor3f_98",
  x1 = "_thumbnails_dor3f_102",
  w1 = "_thumb_dor3f_102",
  _1 = "_thumbActive_dor3f_124",
  S1 = "_details_dor3f_129",
  k1 = "_category_dor3f_133",
  N1 = "_title_dor3f_153",
  j1 = "_price_dor3f_162",
  C1 = "_actions_dor3f_171",
  M1 = "_btnContact_dor3f_177",
  E1 = "_btnWish_dor3f_199",
  B1 = "_btnShare_dor3f_200",
  P1 = "_btnWishActive_dor3f_218",
  D1 = "_section_dor3f_228",
  b1 = "_detailGrid_dor3f_249",
  R1 = "_detailItem_dor3f_255",
  A1 = "_detailLabel_dor3f_261",
  L1 = "_detailValue_dor3f_269",
  I1 = "_meetup_dor3f_276",
  T1 = "_meetupTitle_dor3f_287",
  H1 = "_meetupSub_dor3f_292",
  z1 = "_sellerCard_dor3f_299",
  F1 = "_sellerAvatar_dor3f_309",
  W1 = "_sellerInfo_dor3f_324",
  $1 = "_sellerName_dor3f_328",
  O1 = "_sellerUsername_dor3f_337",
  U1 = "_sellerMeta_dor3f_343",
  V1 = "_sellerViewBtn_dor3f_349",
  G1 = "_safetyNote_dor3f_366",
  Y1 = "_similar_dor3f_376",
  q1 = "_similarHeader_dor3f_382",
  Z1 = "_viewAll_dor3f_395",
  J1 = "_similarGrid_dor3f_407",
  se = {
    page: u1,
    topBar: c1,
    backBtn: d1,
    layout: f1,
    gallery: p1,
    mainImage: m1,
    conditionBadge: h1,
    imgNav: g1,
    imgNavLeft: y1,
    imgNavRight: v1,
    thumbnails: x1,
    thumb: w1,
    thumbActive: _1,
    details: S1,
    category: k1,
    title: N1,
    price: j1,
    actions: C1,
    btnContact: M1,
    btnWish: E1,
    btnShare: B1,
    btnWishActive: P1,
    section: D1,
    detailGrid: b1,
    detailItem: R1,
    detailLabel: A1,
    detailValue: L1,
    meetup: I1,
    meetupTitle: T1,
    meetupSub: H1,
    sellerCard: z1,
    sellerAvatar: F1,
    sellerInfo: W1,
    sellerName: $1,
    sellerUsername: O1,
    sellerMeta: U1,
    sellerViewBtn: V1,
    safetyNote: G1,
    similar: Y1,
    similarHeader: q1,
    viewAll: Z1,
    similarGrid: J1,
  },
  sd =
    'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"><rect width="600" height="600" fill="%23f3f4f6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239ca3af" font-family="Arial,sans-serif" font-size="24">No image</text></svg>';
function ad(o) {
  const u = o.currentTarget;
  u.src !== sd && (u.src = sd);
}
function K1() {
  const { user: o } = Ut();
  function u(B) {
    const P = Date.now() - B,
      Y = Math.floor(P / 6e4),
      q = Math.floor(P / 36e5),
      ae = Math.floor(P / 864e5);
    return ae > 0
      ? `${ae} day${ae > 1 ? "s" : ""} ago`
      : q > 0
        ? `${q} hour${q > 1 ? "s" : ""} ago`
        : Y > 0
          ? `${Y} minute${Y > 1 ? "s" : ""} ago`
          : "just now";
  }
  const { id: a } = Cd(),
    { listings: d } = fl(),
    f = [...bi, ...d],
    p = f.find((B) => B.id === Number(a)) ?? f[0],
    h = f.filter((B) => B.category === p.category && B.id !== p.id).slice(0, 4),
    x = f.filter((B) =>
      p.sellerId ? B.sellerId === p.sellerId : B.seller === p.seller,
    ),
    { toggle: v, isLiked: S } = Zs(),
    [j, k] = y.useState(0),
    D =
      !!o &&
      (p.sellerId
        ? o.id === p.sellerId || o.email === p.sellerId
        : o.name === p.seller),
    W = new URLSearchParams({
      seller: p.seller,
      sellerId: p.sellerId ?? "",
      itemId: String(p.id),
      itemTitle: p.title,
    });
  let R = [];
  return (
    Array.isArray(p.photos) && p.photos.length > 0
      ? (R = p.photos)
      : p.image && (R = [p.image]),
    i.jsxs("div", {
      className: se.page,
      children: [
        i.jsx("div", {
          className: se.topBar,
          children: i.jsxs(Ke, {
            to: "/",
            className: se.backBtn,
            children: [i.jsx(dl, { size: 16 }), "Back to listings"],
          }),
        }),
        i.jsxs("div", {
          className: se.layout,
          children: [
            i.jsxs("div", {
              className: se.gallery,
              children: [
                i.jsxs("div", {
                  className: se.mainImage,
                  children: [
                    i.jsx("img", { src: R[j], alt: p.title, onError: ad }),
                    R.length > 1 &&
                      i.jsxs(i.Fragment, {
                        children: [
                          i.jsx("button", {
                            className: `${se.imgNav} ${se.imgNavLeft}`,
                            onClick: () => k((B) => Math.max(0, B - 1)),
                            children: i.jsx($h, { size: 18 }),
                          }),
                          i.jsx("button", {
                            className: `${se.imgNav} ${se.imgNavRight}`,
                            onClick: () =>
                              k((B) => Math.min(R.length - 1, B + 1)),
                            children: i.jsx(Uh, { size: 18 }),
                          }),
                        ],
                      }),
                    p.condition &&
                      i.jsx("span", {
                        className: se.conditionBadge,
                        children: p.condition,
                      }),
                  ],
                }),
                i.jsx("div", {
                  className: se.thumbnails,
                  children: R.map((B, E) =>
                    i.jsx(
                      "button",
                      {
                        className: `${se.thumb} ${j === E ? se.thumbActive : ""}`,
                        onClick: () => k(E),
                        children: i.jsx("img", {
                          src: B,
                          alt: `View ${E + 1}`,
                          onError: ad,
                        }),
                      },
                      E,
                    ),
                  ),
                }),
              ],
            }),
            i.jsxs("div", {
              className: se.details,
              children: [
                i.jsxs(Ke, {
                  to: `/?category=${encodeURIComponent(p.category)}`,
                  className: se.category,
                  children: [i.jsx(wg, { size: 12 }), p.category],
                }),
                i.jsx("h1", { className: se.title, children: p.title }),
                i.jsxs("p", {
                  className: se.price,
                  children: [
                    "₱",
                    p.price.toLocaleString("en-PH", {
                      minimumFractionDigits: p.price % 1 !== 0 ? 2 : 0,
                    }),
                  ],
                }),
                i.jsxs("div", {
                  className: se.actions,
                  children: [
                    o &&
                      !D &&
                      i.jsxs(Ke, {
                        to: `/messages?${W.toString()}`,
                        className: se.btnContact,
                        children: [i.jsx(Hd, { size: 17 }), "Message Seller"],
                      }),
                    i.jsx("button", {
                      className: `${se.btnWish} ${S(p.id) ? se.btnWishActive : ""}`,
                      onClick: () => v(p.id),
                      children: i.jsx(ol, { size: 17 }),
                    }),
                    i.jsx("button", {
                      className: se.btnShare,
                      children: i.jsx(yg, { size: 17 }),
                    }),
                  ],
                }),
                i.jsxs("div", {
                  className: se.section,
                  children: [
                    i.jsx("h3", { children: "Description" }),
                    i.jsx("p", { children: p.description || "" }),
                  ],
                }),
                i.jsxs("div", {
                  className: se.section,
                  children: [
                    i.jsx("h3", { children: "Details" }),
                    i.jsxs("div", {
                      className: se.detailGrid,
                      children: [
                        i.jsxs("div", {
                          className: se.detailItem,
                          children: [
                            i.jsx("span", {
                              className: se.detailLabel,
                              children: "Condition",
                            }),
                            i.jsx("span", {
                              className: se.detailValue,
                              children: p.condition ?? "Not specified",
                            }),
                          ],
                        }),
                        i.jsxs("div", {
                          className: se.detailItem,
                          children: [
                            i.jsx("span", {
                              className: se.detailLabel,
                              children: "Category",
                            }),
                            i.jsx("span", {
                              className: se.detailValue,
                              children: p.category,
                            }),
                          ],
                        }),
                        i.jsxs("div", {
                          className: se.detailItem,
                          children: [
                            i.jsx("span", {
                              className: se.detailLabel,
                              children: "Listed by",
                            }),
                            i.jsx("span", {
                              className: se.detailValue,
                              children: p.seller,
                            }),
                          ],
                        }),
                        i.jsxs("div", {
                          className: se.detailItem,
                          children: [
                            i.jsx("span", {
                              className: se.detailLabel,
                              children: "Posted",
                            }),
                            i.jsx("span", {
                              className: se.detailValue,
                              children: p.id > 1e12 ? u(p.id) : "N/A",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                i.jsxs("div", {
                  className: se.meetup,
                  children: [
                    i.jsx(ng, { size: 15 }),
                    i.jsxs("div", {
                      children: [
                        i.jsx("p", {
                          className: se.meetupTitle,
                          children: "Preferred meetup",
                        }),
                        i.jsx("p", {
                          className: se.meetupSub,
                          children: "CIIT Campus lobby or nearby area",
                        }),
                      ],
                    }),
                  ],
                }),
                i.jsxs("div", {
                  className: se.sellerCard,
                  children: [
                    i.jsx("div", {
                      className: se.sellerAvatar,
                      children: p.seller.charAt(0),
                    }),
                    i.jsxs("div", {
                      className: se.sellerInfo,
                      children: [
                        i.jsxs("p", {
                          className: se.sellerName,
                          children: [
                            p.seller,
                            p.sellerUsername &&
                              i.jsxs("span", {
                                className: se.sellerUsername,
                                children: ["@", p.sellerUsername],
                              }),
                          ],
                        }),
                        i.jsxs("p", {
                          className: se.sellerMeta,
                          children: [
                            "CIIT Student · ",
                            x.length,
                            " active listing",
                            x.length !== 1 ? "s" : "",
                          ],
                        }),
                      ],
                    }),
                    i.jsx(Ke, {
                      to: `/profile/${encodeURIComponent(p.sellerId ?? p.seller)}`,
                      className: se.sellerViewBtn,
                      children: "View Profile",
                    }),
                  ],
                }),
                i.jsxs("div", {
                  className: se.safetyNote,
                  children: [
                    i.jsx(qs, { size: 14 }),
                    i.jsx("p", {
                      children:
                        "Always meet in a safe, public spot on campus. Never send payment before seeing the item.",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        h.length > 0 &&
          i.jsxs("div", {
            className: se.similar,
            children: [
              i.jsxs("div", {
                className: se.similarHeader,
                children: [
                  i.jsx("h2", { children: "Similar listings" }),
                  i.jsx(Ke, {
                    to: "/",
                    className: se.viewAll,
                    children: "View all →",
                  }),
                ],
              }),
              i.jsx("div", {
                className: se.similarGrid,
                children: h.map((B, E) =>
                  i.jsx(
                    Ri,
                    {
                      product: B,
                      liked: S(B.id),
                      onToggleLike: v,
                      style: { animationDelay: `${E * 0.05}s` },
                    },
                    B.id,
                  ),
                ),
              }),
            ],
          }),
      ],
    })
  );
}
const X1 = "_page_16g93_1",
  Q1 = "_topBar_16g93_8",
  ey = "_backBtn_16g93_15",
  ty = "_settingsBtn_16g93_29",
  ny = "_header_16g93_48",
  ry = "_avatarWrap_16g93_67",
  ly = "_avatar_16g93_67",
  iy = "_editAvatarBtn_16g93_86",
  oy = "_info_16g93_104",
  sy = "_nameRow_16g93_108",
  ay = "_name_16g93_108",
  uy = "_metaRow_16g93_140",
  cy = "_email_16g93_155",
  dy = "_walletCard_16g93_161",
  fy = "_walletInfo_16g93_174",
  py = "_walletIconWrap_16g93_180",
  my = "_walletLabel_16g93_191",
  hy = "_walletAmount_16g93_198",
  gy = "_topUpTrigger_16g93_204",
  yy = "_walletActions_16g93_221",
  vy = "_walletControls_16g93_227",
  xy = "_walletActionError_16g93_233",
  wy = "_withdrawBtn_16g93_240",
  _y = "_tabs_16g93_292",
  Sy = "_tab_16g93_292",
  ky = "_tabActive_16g93_316",
  Ny = "_newListingBanner_16g93_323",
  jy = "_newListingBtn_16g93_336",
  Cy = "_grid_16g93_350",
  My = "_empty_16g93_356",
  Ey = "_topUpOverlay_16g93_381",
  By = "_topUpModal_16g93_392",
  Py = "_topUpHeader_16g93_402",
  Dy = "_topUpClose_16g93_414",
  by = "_topUpField_16g93_425",
  Ry = "_topUpError_16g93_447",
  Ay = "_topUpActions_16g93_452",
  Ly = "_cancelBtn_16g93_458",
  Iy = "_payBtn_16g93_459",
  Ty = "_boostTarget_16g93_481",
  Hy = "_planList_16g93_486",
  zy = "_planBtn_16g93_491",
  Fy = "_planBtnActive_16g93_509",
  G = {
    page: X1,
    topBar: Q1,
    backBtn: ey,
    settingsBtn: ty,
    header: ny,
    avatarWrap: ry,
    avatar: ly,
    editAvatarBtn: iy,
    info: oy,
    nameRow: sy,
    name: ay,
    metaRow: uy,
    email: cy,
    walletCard: dy,
    walletInfo: fy,
    walletIconWrap: py,
    walletLabel: my,
    walletAmount: hy,
    topUpTrigger: gy,
    walletActions: yy,
    walletControls: vy,
    walletActionError: xy,
    withdrawBtn: wy,
    tabs: _y,
    tab: Sy,
    tabActive: ky,
    newListingBanner: Ny,
    newListingBtn: jy,
    grid: Cy,
    empty: My,
    topUpOverlay: Ey,
    topUpModal: By,
    topUpHeader: Py,
    topUpClose: Dy,
    topUpField: by,
    topUpError: Ry,
    topUpActions: Ay,
    cancelBtn: Ly,
    payBtn: Iy,
    boostTarget: Ty,
    planList: Hy,
    planBtn: zy,
    planBtnActive: Fy,
  },
  As = "kampus_wallet_balances",
  ud = [
    { id: "1d", label: "1 day (24hr.)", amount: 25 },
    { id: "3d", label: "3 days (72hr.)", amount: 60 },
    { id: "7d", label: "7 days (168hr.)", amount: 120 },
  ],
  Wy = () => {
    try {
      const o = localStorage.getItem("mock_accounts");
      return o ? JSON.parse(o) : [];
    } catch {
      return [];
    }
  },
  $y = (o) =>
    o
      .split(" ")
      .map((u) => u[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
function cd() {
  const [o, u] = y.useState(!1),
    [a, d] = y.useState([]),
    [f, p] = y.useState(0),
    [h, x] = y.useState(!1),
    [v, S] = y.useState(""),
    [j, k] = y.useState(""),
    [D, W] = y.useState(!1),
    [R, B] = y.useState(""),
    [E, P] = y.useState(""),
    [Y, q] = y.useState(""),
    [ae, le] = y.useState(!1),
    [de, _e] = y.useState(null),
    [je, Ee] = y.useState(""),
    [Re, F] = y.useState(""),
    { user: A } = Ut(),
    re = Ot(),
    { profileKey: ve } = Cd(),
    { listings: we, deleteListing: Oe } = fl(),
    [te, I] = y.useState("listings"),
    { isLiked: U, toggle: O, likedIds: _ } = Zs();
  if (!A) return i.jsx("div", { className: G.page, children: "Not logged in" });
  const b = ve ? decodeURIComponent(ve) : A.id,
    X = Wy(),
    ie = X.find((Z) => Z.email === b),
    me = X.find((Z) => Z.name === b),
    oe = ie ?? me,
    Ne = (oe == null ? void 0 : oe.name) ?? (b === A.id ? A.name : b),
    xe = (oe == null ? void 0 : oe.email) ?? (b === A.id ? A.email : void 0),
    Be = (oe == null ? void 0 : oe.year) ?? (b === A.id ? A.year : void 0),
    ot = (oe == null ? void 0 : oe.course) ?? (b === A.id ? A.course : void 0),
    Xe = xe ? xe === A.email : Ne === A.name,
    kn = we.filter((Z) =>
      xe && Z.sellerId ? Z.sellerId === xe : Z.seller === Ne,
    ),
    Nn = we.filter((Z) => _.includes(Z.id)),
    Wn = (Z) => {
      try {
        const Fe = localStorage.getItem("kampus_listing_boosts"),
          Le = Fe ? JSON.parse(Fe) : {},
          At = Date.now();
        return [...Z].sort((jn, Cn) => {
          const $n =
              Le[String(jn.id)] && Le[String(jn.id)].expiresAt > At
                ? Le[String(jn.id)].expiresAt
                : 0,
            Mn =
              Le[String(Cn.id)] && Le[String(Cn.id)].expiresAt > At
                ? Le[String(Cn.id)].expiresAt
                : 0;
          return $n && Mn
            ? Mn - $n
            : $n
              ? -1
              : Mn
                ? 1
                : Number(Cn.id) - Number(jn.id);
        });
      } catch {
        return Z;
      }
    };
  (y.useEffect(() => {
    Xe || (I("listings"), u(!1), d([]));
  }, [Xe]),
    y.useEffect(() => {
      if (Xe)
        try {
          const Z = localStorage.getItem(As),
            Le = (Z ? JSON.parse(Z) : {})[A.email];
          p(typeof Le == "number" && Number.isFinite(Le) ? Le : 0);
        } catch {
          p(0);
        }
    }, [Xe, A.email]));
  const pl = () => {
      const Z = Number(v);
      if (!Number.isFinite(Z) || Z <= 0) {
        k("Please enter an amount greater than 0.");
        return;
      }
      const Fe = new URLSearchParams({
        mode: "topup",
        amount: String(Z),
        itemTitle: "K-Wallet Top-up",
        seller: "Kampus",
        sellerId: "kampus",
      });
      (k(""), x(!1), S(""), re(`/payment?${Fe.toString()}`));
    },
    ml = () => {
      if (!de) return;
      if (!je) {
        F("Please choose a boost plan.");
        return;
      }
      const Z = ud.find((Le) => Le.id === je);
      if (!Z) {
        F("Please choose a valid boost plan.");
        return;
      }
      const Fe = new URLSearchParams({
        mode: "boost",
        amount: String(Z.amount),
        boostDays: String(Number.parseInt(Z.id, 10)),
        itemTitle: `Boost: ${de.title} (${Z.label})`,
        seller: "Kampus",
        sellerId: "kampus",
        listingId: String(de.id),
      });
      (F(""), le(!1), Ee(""), _e(null), re(`/payment?${Fe.toString()}`));
    },
    yr = () => {
      if (f < 200) {
        q("Minimum wallet balance of ₱200 is required before withdrawing.");
        return;
      }
      (q(""), P(""), B(""), W(!0));
    },
    hl = () => {
      const Z = Number(R);
      if (!Number.isFinite(Z) || Z <= 0) {
        P("Please enter an amount greater than 0.");
        return;
      }
      if (Z > f) {
        P("You cannot withdraw more than your current balance.");
        return;
      }
      const Fe = f - Z;
      try {
        const Le = localStorage.getItem(As),
          At = Le ? JSON.parse(Le) : {};
        ((At[A.email] = Fe), localStorage.setItem(As, JSON.stringify(At)));
      } catch {
        P("Could not process withdraw. Please try again.");
        return;
      }
      (p(Fe), W(!1), B(""), P(""));
    },
    tt = {
      name: Ne,
      username: xe && oe ? oe.username : xe === A.email ? A.username : "",
      initials: $y(Ne),
      email: xe,
      year: Be,
      course: ot,
    };
  return i.jsxs("div", {
    className: G.page,
    children: [
      i.jsxs("div", {
        className: G.topBar,
        children: [
          i.jsxs(Ke, {
            to: "/",
            className: G.backBtn,
            children: [i.jsx(dl, { size: 16 }), "Back to listings"],
          }),
          Xe &&
            i.jsxs("button", {
              className: G.settingsBtn,
              children: [i.jsx(hg, { size: 16 }), "Settings"],
            }),
        ],
      }),
      i.jsxs("div", {
        className: G.header,
        children: [
          i.jsxs("div", {
            className: G.avatarWrap,
            children: [
              i.jsx("div", { className: G.avatar, children: tt.initials }),
              Xe &&
                i.jsx("button", {
                  className: G.editAvatarBtn,
                  children: "Edit",
                }),
            ],
          }),
          i.jsxs("div", {
            className: G.info,
            children: [
              i.jsxs("div", {
                className: G.nameRow,
                children: [
                  i.jsxs("div", {
                    children: [
                      i.jsx("h1", { className: G.name, children: tt.name }),
                      tt.username &&
                        i.jsxs("p", {
                          className: G.username,
                          children: ["@", tt.username],
                        }),
                    ],
                  }),
                  i.jsxs("span", {
                    className: G.profileStat,
                    children: [
                      kn.length,
                      " listing",
                      kn.length !== 1 ? "s" : "",
                    ],
                  }),
                ],
              }),
              tt.email &&
                i.jsx("p", { className: G.email, children: tt.email }),
              (tt.year || tt.course) &&
                i.jsxs("div", {
                  className: G.metaRow,
                  children: [
                    tt.year && i.jsx("span", { children: tt.year }),
                    tt.course && i.jsx("span", { children: tt.course }),
                  ],
                }),
            ],
          }),
        ],
      }),
      Xe &&
        i.jsxs("section", {
          className: G.walletCard,
          children: [
            i.jsxs("div", {
              className: G.walletInfo,
              children: [
                i.jsx("span", {
                  className: G.walletIconWrap,
                  children: i.jsx(zd, { size: 16 }),
                }),
                i.jsxs("div", {
                  children: [
                    i.jsx("p", {
                      className: G.walletLabel,
                      children: "K-Wallet",
                    }),
                    i.jsxs("p", {
                      className: G.walletAmount,
                      children: [
                        "₱",
                        f.toLocaleString("en-PH", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            i.jsxs("div", {
              className: G.walletControls,
              children: [
                i.jsxs("div", {
                  className: G.walletActions,
                  children: [
                    i.jsxs("button", {
                      type: "button",
                      className: G.topUpTrigger,
                      onClick: () => {
                        (q(""), k(""), S(""), x(!0));
                      },
                      children: [i.jsx(Ys, { size: 14 }), "Top up"],
                    }),
                    i.jsx("button", {
                      type: "button",
                      className: G.withdrawBtn,
                      onClick: yr,
                      children: "Withdraw",
                    }),
                  ],
                }),
                Y &&
                  i.jsx("p", { className: G.walletActionError, children: Y }),
              ],
            }),
          ],
        }),
      i.jsxs("div", {
        className: G.tabs,
        children: [
          i.jsxs("button", {
            className: `${G.tab} ${te === "listings" ? G.tabActive : ""}`,
            onClick: () => I("listings"),
            children: [
              i.jsx(ed, { size: 15 }),
              Xe ? "My Listings" : "Listings",
            ],
          }),
          Xe &&
            i.jsxs("button", {
              className: `${G.tab} ${te === "saved" ? G.tabActive : ""}`,
              onClick: () => I("saved"),
              children: [i.jsx(ol, { size: 15 }), "Saved"],
            }),
        ],
      }),
      i.jsxs("div", {
        className: G.content,
        children: [
          te === "listings" &&
            i.jsxs(i.Fragment, {
              children: [
                Xe &&
                  i.jsx("div", {
                    className: G.newListingBanner,
                    style: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    },
                    children: i.jsxs("div", {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                      },
                      children: [
                        i.jsx("p", { children: "Got something to sell?" }),
                        i.jsxs("div", {
                          style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                          },
                          children: [
                            i.jsx(Ke, {
                              to: "/create-listing",
                              className: G.newListingBtn,
                              children: "+ Post a listing",
                            }),
                            o
                              ? i.jsx("button", {
                                  className: G.deleteBtn,
                                  style: {
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 4,
                                    background: "#e53935",
                                    color: "#fff",
                                    border: "none",
                                    borderRadius: 6,
                                    padding: "6px 16px",
                                    cursor: "pointer",
                                  },
                                  onClick: () => {
                                    if (a.length === 0) {
                                      u(!1);
                                      return;
                                    }
                                    window.confirm(
                                      "Are you sure you want to delete these items?",
                                    ) &&
                                      (a.forEach((Z) => Oe(Z)), d([]), u(!1));
                                  },
                                  children: "Delete",
                                })
                              : i.jsx("button", {
                                  className: G.trashBtn,
                                  style: {
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 4,
                                    background: "#fff",
                                    border: "1px solid #eee",
                                    borderRadius: 6,
                                    padding: "6px 10px",
                                    cursor: "pointer",
                                  },
                                  onClick: () => u(!0),
                                  children: i.jsx(Sg, {
                                    size: 18,
                                    color: "#e53935",
                                  }),
                                }),
                          ],
                        }),
                      ],
                    }),
                  }),
                i.jsx("div", {
                  className: G.grid,
                  children:
                    kn.length > 0
                      ? Wn(kn).map((Z, Fe) =>
                          i.jsx(
                            "div",
                            {
                              style: { position: "relative" },
                              children: i.jsx(Ri, {
                                product: Z,
                                liked: U(Z.id),
                                onToggleLike: O,
                                style: { animationDelay: `${Fe * 0.05}s` },
                                selectable: o,
                                selected: a.includes(Z.id),
                                showBoost: Xe && !o,
                                onBoostClick: () => {
                                  (_e({ id: Z.id, title: Z.title }),
                                    Ee(""),
                                    F(""),
                                    le(!0));
                                },
                                onSelect: () => {
                                  a.includes(Z.id)
                                    ? d((Le) => Le.filter((At) => At !== Z.id))
                                    : d((Le) => [...Le, Z.id]);
                                },
                              }),
                            },
                            Z.id,
                          ),
                        )
                      : i.jsxs("div", {
                          className: G.empty,
                          children: [
                            i.jsx(ed, { size: 32, strokeWidth: 1.5 }),
                            i.jsx("p", { children: "No listings yet." }),
                            Xe
                              ? i.jsx(Ke, {
                                  to: "/create-listing",
                                  children: "Post a listing",
                                })
                              : i.jsx(Ke, {
                                  to: "/",
                                  children: "Browse listings",
                                }),
                          ],
                        }),
                }),
              ],
            }),
          te === "saved" &&
            i.jsx("div", {
              className: G.grid,
              children:
                Nn.length > 0
                  ? Wn(Nn).map((Z, Fe) =>
                      i.jsx(
                        "div",
                        {
                          style: { position: "relative" },
                          children: i.jsx(Ri, {
                            product: Z,
                            liked: U(Z.id),
                            onToggleLike: O,
                            style: { animationDelay: `${Fe * 0.05}s` },
                          }),
                        },
                        Z.id,
                      ),
                    )
                  : i.jsxs("div", {
                      className: G.empty,
                      children: [
                        i.jsx(ol, { size: 32, strokeWidth: 1.5 }),
                        i.jsx("p", { children: "No saved listings yet." }),
                        i.jsx(Ke, { to: "/", children: "Browse listings" }),
                      ],
                    }),
            }),
        ],
      }),
      h &&
        i.jsx("div", {
          className: G.topUpOverlay,
          onClick: () => x(!1),
          children: i.jsxs("div", {
            className: G.topUpModal,
            onClick: (Z) => Z.stopPropagation(),
            children: [
              i.jsxs("div", {
                className: G.topUpHeader,
                children: [
                  i.jsx("h3", { children: "Top up K-Wallet" }),
                  i.jsx("button", {
                    type: "button",
                    className: G.topUpClose,
                    onClick: () => x(!1),
                    "aria-label": "Close top-up modal",
                    children: i.jsx(Sn, { size: 14 }),
                  }),
                ],
              }),
              i.jsxs("label", {
                className: G.topUpField,
                children: [
                  "Amount",
                  i.jsx("input", {
                    type: "number",
                    min: "0",
                    step: "0.01",
                    value: v,
                    onChange: (Z) => {
                      (S(Z.target.value), j && k(""));
                    },
                    placeholder: "Enter amount",
                  }),
                ],
              }),
              j && i.jsx("p", { className: G.topUpError, children: j }),
              i.jsxs("div", {
                className: G.topUpActions,
                children: [
                  i.jsx("button", {
                    type: "button",
                    className: G.cancelBtn,
                    onClick: () => {
                      (x(!1), k(""));
                    },
                    children: "Cancel",
                  }),
                  i.jsx("button", {
                    type: "button",
                    className: G.payBtn,
                    onClick: pl,
                    children: "Pay",
                  }),
                ],
              }),
            ],
          }),
        }),
      ae &&
        de &&
        i.jsx("div", {
          className: G.topUpOverlay,
          onClick: () => {
            (le(!1), F(""));
          },
          children: i.jsxs("div", {
            className: G.topUpModal,
            onClick: (Z) => Z.stopPropagation(),
            children: [
              i.jsxs("div", {
                className: G.topUpHeader,
                children: [
                  i.jsx("h3", { children: "Boost posting" }),
                  i.jsx("button", {
                    type: "button",
                    className: G.topUpClose,
                    onClick: () => {
                      (le(!1), F(""));
                    },
                    "aria-label": "Close boost modal",
                    children: i.jsx(Sn, { size: 14 }),
                  }),
                ],
              }),
              i.jsx("p", { className: G.boostTarget, children: de.title }),
              i.jsx("div", {
                className: G.planList,
                children: ud.map((Z) =>
                  i.jsxs(
                    "button",
                    {
                      type: "button",
                      className: `${G.planBtn} ${je === Z.id ? G.planBtnActive : ""}`,
                      onClick: () => {
                        (Ee(Z.id), Re && F(""));
                      },
                      children: [
                        i.jsx("span", { children: Z.label }),
                        i.jsxs("strong", { children: ["₱", Z.amount] }),
                      ],
                    },
                    Z.id,
                  ),
                ),
              }),
              Re && i.jsx("p", { className: G.topUpError, children: Re }),
              i.jsxs("div", {
                className: G.topUpActions,
                children: [
                  i.jsx("button", {
                    type: "button",
                    className: G.cancelBtn,
                    onClick: () => {
                      (le(!1), F(""));
                    },
                    children: "Cancel",
                  }),
                  i.jsx("button", {
                    type: "button",
                    className: G.payBtn,
                    onClick: ml,
                    children: "Pay",
                  }),
                ],
              }),
            ],
          }),
        }),
      D &&
        i.jsx("div", {
          className: G.topUpOverlay,
          onClick: () => {
            (W(!1), P(""));
          },
          children: i.jsxs("div", {
            className: G.topUpModal,
            onClick: (Z) => Z.stopPropagation(),
            children: [
              i.jsxs("div", {
                className: G.topUpHeader,
                children: [
                  i.jsx("h3", { children: "Withdraw from K-Wallet" }),
                  i.jsx("button", {
                    type: "button",
                    className: G.topUpClose,
                    onClick: () => {
                      (W(!1), P(""));
                    },
                    "aria-label": "Close withdraw modal",
                    children: i.jsx(Sn, { size: 14 }),
                  }),
                ],
              }),
              i.jsxs("label", {
                className: G.topUpField,
                children: [
                  "Amount",
                  i.jsx("input", {
                    type: "number",
                    min: "0",
                    step: "0.01",
                    value: R,
                    onChange: (Z) => {
                      (B(Z.target.value), E && P(""));
                    },
                    placeholder: "Enter amount",
                  }),
                ],
              }),
              E && i.jsx("p", { className: G.topUpError, children: E }),
              i.jsxs("div", {
                className: G.topUpActions,
                children: [
                  i.jsx("button", {
                    type: "button",
                    className: G.cancelBtn,
                    onClick: () => {
                      (W(!1), P(""));
                    },
                    children: "Cancel",
                  }),
                  i.jsx("button", {
                    type: "button",
                    className: G.payBtn,
                    onClick: hl,
                    children: "Withdraw",
                  }),
                ],
              }),
            ],
          }),
        }),
    ],
  });
}
const Oy = "_page_15f8g_1",
  Uy = "_topBar_15f8g_8",
  Vy = "_backBtn_15f8g_15",
  Gy = "_pageTitle_15f8g_26",
  Yy = "_publishBtn_15f8g_33",
  qy = "_publishBtnDisabled_15f8g_48",
  Zy = "_layout_15f8g_56",
  Jy = "_sidebar_15f8g_65",
  Ky = "_section_15f8g_69",
  Xy = "_sectionHeader_15f8g_77",
  Qy = "_sectionMeta_15f8g_94",
  ev = "_photoGrid_15f8g_100",
  tv = "_photoItem_15f8g_106",
  nv = "_removePhoto_15f8g_116",
  rv = "_coverLabel_15f8g_132",
  lv = "_photoUpload_15f8g_146",
  iv = "_field_15f8g_165",
  ov = "_required_15f8g_180",
  sv = "_input_15f8g_182",
  av = "_textarea_15f8g_194",
  uv = "_charCount_15f8g_208",
  cv = "_fieldRow_15f8g_215",
  dv = "_conditionRow_15f8g_225",
  fv = "_conditionChip_15f8g_231",
  pv = "_conditionActive_15f8g_241",
  mv = "_categoryGrid_15f8g_244",
  hv = "_categoryChip_15f8g_250",
  gv = "_categoryActive_15f8g_263",
  yv = "_tagInputRow_15f8g_266",
  vv = "_addTagBtn_15f8g_271",
  xv = "_tagList_15f8g_285",
  wv = "_tag_15f8g_266",
  _v = "_meetupOptions_15f8g_313",
  Sv = "_meetupChip_15f8g_319",
  kv = "_meetupActive_15f8g_330",
  Nv = "_previewCard_15f8g_342",
  jv = "_previewImage_15f8g_358",
  Cv = "_previewBody_15f8g_369",
  Mv = "_previewCat_15f8g_370",
  Ev = "_previewTitle_15f8g_378",
  Bv = "_previewPrice_15f8g_386",
  Pv = "_tips_15f8g_394",
  Dv = "_planList_15f8g_430",
  bv = "_planBtn_15f8g_436",
  Rv = "_planBtnActive_15f8g_452",
  K = {
    page: Oy,
    topBar: Uy,
    backBtn: Vy,
    pageTitle: Gy,
    publishBtn: Yy,
    publishBtnDisabled: qy,
    layout: Zy,
    sidebar: Jy,
    section: Ky,
    sectionHeader: Xy,
    sectionMeta: Qy,
    photoGrid: ev,
    photoItem: tv,
    removePhoto: nv,
    coverLabel: rv,
    photoUpload: lv,
    field: iv,
    required: ov,
    input: sv,
    textarea: av,
    charCount: uv,
    fieldRow: cv,
    conditionRow: dv,
    conditionChip: fv,
    conditionActive: pv,
    categoryGrid: mv,
    categoryChip: hv,
    categoryActive: gv,
    tagInputRow: yv,
    addTagBtn: vv,
    tagList: xv,
    tag: wv,
    meetupOptions: _v,
    meetupChip: Sv,
    meetupActive: kv,
    previewCard: Nv,
    previewImage: jv,
    previewBody: Cv,
    previewCat: Mv,
    previewTitle: Ev,
    previewPrice: Bv,
    tips: Pv,
    planList: Dv,
    planBtn: bv,
    planBtnActive: Rv,
  },
  Av = ["New", "Like New", "Good", "Used"],
  Lv = [
    "CIIT Campus lobby",
    "CIIT Library entrance",
    "Nearby convenience store",
    "To be arranged via chat",
  ];
function Iv(o) {
  return new Promise((u, a) => {
    const d = new FileReader();
    ((d.onload = () => u(typeof d.result == "string" ? d.result : "")),
      (d.onerror = () => a(new Error("Failed to read image file."))),
      d.readAsDataURL(o));
  });
}
function Tv() {
  const { addListing: o } = fl(),
    { user: u } = Ut(),
    a = Ot(),
    [d, f] = y.useState([]),
    [p, h] = y.useState(""),
    [x, v] = y.useState(""),
    [S, j] = y.useState(""),
    [k, D] = y.useState(""),
    [W, R] = y.useState(""),
    [B, E] = y.useState(""),
    [P, Y] = y.useState([]),
    [q, ae] = y.useState(""),
    [le, de] = y.useState("none"),
    _e = async (A) => {
      const re = Array.from(A.target.files ?? []);
      if (re.length !== 0)
        try {
          const ve = await Promise.all(re.map(Iv));
          f((we) => [...we, ...ve].slice(0, 5));
        } catch {
          alert("One or more images could not be processed. Please try again.");
        } finally {
          A.target.value = "";
        }
    },
    je = (A) => f((re) => re.filter((ve, we) => we !== A)),
    Ee = () => {
      const A = q.trim();
      A && !P.includes(A) && P.length < 5 && (Y((re) => [...re, A]), ae(""));
    },
    Re = () => {
      if (!p || !x || !S || !k) {
        alert("Please fill in all required fields.");
        return;
      }
      if (!u) {
        alert("You must be logged in to post a listing.");
        return;
      }
      const A = {
        id: Date.now(),
        title: p,
        price: Number(x),
        image: d[0] || "",
        photos: d,
        category: S,
        seller: u.name,
        sellerId: u.id,
        condition: k,
        description: W,
      };
      if ((o(A), le !== "none")) {
        const re = { "1d": 25, "3d": 60, "7d": 120 },
          ve = { "1d": 1, "3d": 3, "7d": 7 },
          we = new URLSearchParams({
            mode: "boost",
            amount: String(re[le]),
            boostDays: String(ve[le] ?? 0),
            itemTitle: `Boost: ${p}`,
            seller: "Kampus",
            listingId: String(A.id),
          });
        (alert("Listing posted! Proceed to payment to activate boost."),
          a(`/payment?${we.toString()}`));
        return;
      }
      (alert("Listing posted!"), a("/"));
    },
    F = p && x && S && k;
  return i.jsxs("div", {
    className: K.page,
    children: [
      i.jsxs("div", {
        className: K.topBar,
        children: [
          i.jsxs(Ke, {
            to: "/",
            className: K.backBtn,
            children: [i.jsx(dl, { size: 16 }), "Cancel"],
          }),
          i.jsx("h1", { className: K.pageTitle, children: "Post a Listing" }),
          i.jsx("button", {
            className: `${K.publishBtn} ${F ? "" : K.publishBtnDisabled}`,
            onClick: Re,
            disabled: !F,
            children: "Publish",
          }),
        ],
      }),
      i.jsxs("div", {
        className: K.layout,
        children: [
          i.jsxs("div", {
            className: K.form,
            children: [
              i.jsxs("div", {
                className: K.section,
                children: [
                  i.jsxs("div", {
                    className: K.sectionHeader,
                    children: [
                      i.jsx("h2", { children: "Photos" }),
                      i.jsxs("span", {
                        className: K.sectionMeta,
                        children: [d.length, "/5 · First photo is the cover"],
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className: K.photoGrid,
                    children: [
                      d.map((A, re) =>
                        i.jsxs(
                          "div",
                          {
                            className: K.photoItem,
                            children: [
                              i.jsx("img", { src: A, alt: `Photo ${re + 1}` }),
                              i.jsx("button", {
                                className: K.removePhoto,
                                onClick: () => je(re),
                                children: i.jsx(Sn, { size: 12 }),
                              }),
                              re === 0 &&
                                i.jsx("span", {
                                  className: K.coverLabel,
                                  children: "Cover",
                                }),
                            ],
                          },
                          re,
                        ),
                      ),
                      d.length < 5 &&
                        i.jsxs("label", {
                          className: K.photoUpload,
                          children: [
                            i.jsx("input", {
                              type: "file",
                              accept: "image/*",
                              multiple: !0,
                              onChange: _e,
                              style: { display: "none" },
                            }),
                            i.jsx(jg, { size: 22 }),
                            i.jsx("span", { children: "Add photo" }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
              i.jsxs("div", {
                className: K.section,
                children: [
                  i.jsx("h2", { children: "Basic Info" }),
                  i.jsxs("div", {
                    className: K.field,
                    children: [
                      i.jsxs("label", {
                        children: [
                          "Title ",
                          i.jsx("span", {
                            className: K.required,
                            children: "*",
                          }),
                        ],
                      }),
                      i.jsx("input", {
                        className: K.input,
                        type: "text",
                        placeholder:
                          "e.g. TI-84 Calculator, Engineering Textbooks...",
                        value: p,
                        onChange: (A) => h(A.target.value),
                        maxLength: 80,
                      }),
                      i.jsxs("span", {
                        className: K.charCount,
                        children: [p.length, "/80"],
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className: K.fieldRow,
                    children: [
                      i.jsxs("div", {
                        className: K.field,
                        children: [
                          i.jsxs("label", {
                            children: [
                              "Price (₱) ",
                              i.jsx("span", {
                                className: K.required,
                                children: "*",
                              }),
                            ],
                          }),
                          i.jsx("input", {
                            className: K.input,
                            type: "number",
                            placeholder: "0.00",
                            value: x,
                            onChange: (A) => v(A.target.value),
                            min: 0,
                          }),
                        ],
                      }),
                      i.jsxs("div", {
                        className: K.field,
                        children: [
                          i.jsxs("label", {
                            children: [
                              "Condition ",
                              i.jsx("span", {
                                className: K.required,
                                children: "*",
                              }),
                            ],
                          }),
                          i.jsx("div", {
                            className: K.conditionRow,
                            children: Av.map((A) =>
                              i.jsx(
                                "button",
                                {
                                  className: `${K.conditionChip} ${k === A ? K.conditionActive : ""}`,
                                  onClick: () => D(A),
                                  type: "button",
                                  children: A,
                                },
                                A,
                              ),
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className: K.field,
                    children: [
                      i.jsxs("label", {
                        children: [
                          "Category ",
                          i.jsx("span", {
                            className: K.required,
                            children: "*",
                          }),
                        ],
                      }),
                      i.jsx("div", {
                        className: K.categoryGrid,
                        children: Wd.filter((A) => A.label !== "All").map(
                          ({ label: A, icon: re }) =>
                            i.jsxs(
                              "button",
                              {
                                className: `${K.categoryChip} ${S === A ? K.categoryActive : ""}`,
                                onClick: () => j(A),
                                type: "button",
                                children: [i.jsx("span", { children: re }), A],
                              },
                              A,
                            ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              i.jsxs("div", {
                className: K.section,
                children: [
                  i.jsx("h2", { children: "Description" }),
                  i.jsxs("div", {
                    className: K.field,
                    children: [
                      i.jsx("label", {
                        children: "Tell buyers about your item",
                      }),
                      i.jsx("textarea", {
                        className: K.textarea,
                        placeholder:
                          "Describe the item's condition, any flaws, accessories included, reason for selling...",
                        value: W,
                        onChange: (A) => R(A.target.value),
                        maxLength: 500,
                        rows: 5,
                      }),
                      i.jsxs("span", {
                        className: K.charCount,
                        children: [W.length, "/500"],
                      }),
                    ],
                  }),
                ],
              }),
              i.jsxs("div", {
                className: K.section,
                children: [
                  i.jsxs("div", {
                    className: K.sectionHeader,
                    children: [
                      i.jsx("h2", { children: "Tags" }),
                      i.jsx("span", {
                        className: K.sectionMeta,
                        children: "Up to 5 · helps buyers find your item",
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className: K.tagInputRow,
                    children: [
                      i.jsx("input", {
                        className: K.input,
                        type: "text",
                        placeholder: "e.g. laptop, gaming, books...",
                        value: q,
                        onChange: (A) => ae(A.target.value),
                        onKeyDown: (A) =>
                          A.key === "Enter" && (A.preventDefault(), Ee()),
                      }),
                      i.jsx("button", {
                        className: K.addTagBtn,
                        onClick: Ee,
                        type: "button",
                        children: i.jsx(Ys, { size: 16 }),
                      }),
                    ],
                  }),
                  P.length > 0 &&
                    i.jsx("div", {
                      className: K.tagList,
                      children: P.map((A) =>
                        i.jsxs(
                          "span",
                          {
                            className: K.tag,
                            children: [
                              A,
                              i.jsx("button", {
                                onClick: () =>
                                  Y((re) => re.filter((ve) => ve !== A)),
                                children: i.jsx(Sn, { size: 11 }),
                              }),
                            ],
                          },
                          A,
                        ),
                      ),
                    }),
                ],
              }),
              i.jsxs("div", {
                className: K.section,
                children: [
                  i.jsx("h2", { children: "Meetup Location" }),
                  i.jsx("div", {
                    className: K.meetupOptions,
                    children: Lv.map((A) =>
                      i.jsx(
                        "button",
                        {
                          className: `${K.meetupChip} ${B === A ? K.meetupActive : ""}`,
                          onClick: () => E(A),
                          type: "button",
                          children: A,
                        },
                        A,
                      ),
                    ),
                  }),
                ],
              }),
              i.jsxs("div", {
                className: K.section,
                children: [
                  i.jsx("h2", { children: "Boost Listing" }),
                  i.jsx("div", {
                    className: K.planList,
                    children: [
                      { id: "1d", label: "1 day (24hr.)", amount: 25 },
                      { id: "3d", label: "3 days (72hr.)", amount: 60 },
                      { id: "7d", label: "7 days (168hr.)", amount: 120 },
                    ].map((A) =>
                      i.jsxs(
                        "button",
                        {
                          type: "button",
                          className: `${K.planBtn} ${le === A.id ? K.planBtnActive : ""}`,
                          onClick: () => de(A.id),
                          children: [
                            i.jsx("span", { children: A.label }),
                            i.jsxs("strong", { children: ["₱", A.amount] }),
                          ],
                        },
                        A.id,
                      ),
                    ),
                  }),
                ],
              }),
              i.jsx("div", {
                style: {
                  marginTop: 18,
                  display: "flex",
                  justifyContent: "flex-start",
                },
                children: i.jsx("button", {
                  className: `${K.publishBtn} ${F ? "" : K.publishBtnDisabled}`,
                  onClick: Re,
                  disabled: !F,
                  children: "Publish",
                }),
              }),
            ],
          }),
          i.jsxs("aside", {
            className: K.sidebar,
            children: [
              i.jsxs("div", {
                className: K.previewCard,
                children: [
                  i.jsx("h3", { children: "Preview" }),
                  i.jsx("div", {
                    className: K.previewImage,
                    children: d[0]
                      ? i.jsx("img", { src: d[0], alt: "Preview" })
                      : i.jsx("span", { children: "No photo yet" }),
                  }),
                  i.jsxs("div", {
                    className: K.previewBody,
                    children: [
                      i.jsx("p", {
                        className: K.previewCat,
                        children: S || "Category",
                      }),
                      i.jsx("p", {
                        className: K.previewTitle,
                        children: p || "Your listing title",
                      }),
                      i.jsx("p", {
                        className: K.previewPrice,
                        children: x ? `₱${Number(x).toLocaleString()}` : "₱0",
                      }),
                    ],
                  }),
                ],
              }),
              i.jsxs("div", {
                className: K.tips,
                children: [
                  i.jsxs("h3", {
                    children: [i.jsx(Td, { size: 14 }), " Listing tips"],
                  }),
                  i.jsxs("ul", {
                    children: [
                      i.jsx("li", {
                        children: "Clear, well-lit photos sell faster",
                      }),
                      i.jsx("li", {
                        children: "Be honest about the condition",
                      }),
                      i.jsx("li", {
                        children: "Price fairly — check similar listings first",
                      }),
                      i.jsx("li", { children: "Respond to messages quickly" }),
                      i.jsx("li", {
                        children: "Meet buyers in public spots on campus",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const Hv = "_page_x6r9h_1",
  zv = "_topBar_x6r9h_7",
  Fv = "_backBtn_x6r9h_11",
  Wv = "_shell_x6r9h_25",
  $v = "_sidebar_x6r9h_35",
  Ov = "_sidebarHeader_x6r9h_42",
  Uv = "_threadList_x6r9h_56",
  Vv = "_threadButton_x6r9h_63",
  Gv = "_threadButtonActive_x6r9h_76",
  Yv = "_threadSeller_x6r9h_81",
  qv = "_threadItem_x6r9h_88",
  Zv = "_threadPreview_x6r9h_94",
  Jv = "_chatPanel_x6r9h_103",
  Kv = "_chatHeader_x6r9h_109",
  Xv = "_chatSeller_x6r9h_114",
  Qv = "_chatItem_x6r9h_121",
  ex = "_itemCardWrap_x6r9h_126",
  tx = "_itemCard_x6r9h_126",
  nx = "_itemCardImageWrap_x6r9h_150",
  rx = "_itemCardImage_x6r9h_150",
  lx = "_itemCardImageFallback_x6r9h_164",
  ix = "_itemCardBody_x6r9h_176",
  ox = "_itemCardLabel_x6r9h_180",
  sx = "_itemCardTitle_x6r9h_188",
  ax = "_itemCardPrice_x6r9h_200",
  ux = "_messagesArea_x6r9h_206",
  cx = "_messageRow_x6r9h_215",
  dx = "_messageMine_x6r9h_219",
  fx = "_messageSeller_x6r9h_223",
  px = "_messageBubble_x6r9h_227",
  mx = "_messageTime_x6r9h_252",
  hx = "_offerBubble_x6r9h_259",
  gx = "_offerHeader_x6r9h_263",
  yx = "_offerReceipt_x6r9h_269",
  vx = "_offerRow_x6r9h_276",
  xx = "_offerLabel_x6r9h_285",
  wx = "_offerValue_x6r9h_289",
  _x = "_offerTotal_x6r9h_298",
  Sx = "_payBtn_x6r9h_309",
  kx = "_offerMeta_x6r9h_324",
  Nx = "_composer_x6r9h_330",
  jx = "_sendBtn_x6r9h_351",
  Cx = "_priceBtn_x6r9h_367",
  Mx = "_modalOverlay_x6r9h_385",
  Ex = "_modal_x6r9h_385",
  Bx = "_modalHeader_x6r9h_404",
  Px = "_modalClose_x6r9h_417",
  Dx = "_modalLabel_x6r9h_432",
  bx = "_modalInput_x6r9h_440",
  Rx = "_summaryBox_x6r9h_453",
  Ax = "_summaryRow_x6r9h_461",
  Lx = "_summaryTotal_x6r9h_474",
  Ix = "_modalActions_x6r9h_481",
  Tx = "_cancelBtn_x6r9h_488",
  Hx = "_confirmBtn_x6r9h_489",
  zx = "_placeholder_x6r9h_521",
  Fx = "_emptyState_x6r9h_522",
  $ = {
    page: Hv,
    topBar: zv,
    backBtn: Fv,
    shell: Wv,
    sidebar: $v,
    sidebarHeader: Ov,
    threadList: Uv,
    threadButton: Vv,
    threadButtonActive: Gv,
    threadSeller: Yv,
    threadItem: qv,
    threadPreview: Zv,
    chatPanel: Jv,
    chatHeader: Kv,
    chatSeller: Xv,
    chatItem: Qv,
    itemCardWrap: ex,
    itemCard: tx,
    itemCardImageWrap: nx,
    itemCardImage: rx,
    itemCardImageFallback: lx,
    itemCardBody: ix,
    itemCardLabel: ox,
    itemCardTitle: sx,
    itemCardPrice: ax,
    messagesArea: ux,
    messageRow: cx,
    messageMine: dx,
    messageSeller: fx,
    messageBubble: px,
    messageTime: mx,
    offerBubble: hx,
    offerHeader: gx,
    offerReceipt: yx,
    offerRow: vx,
    offerLabel: xx,
    offerValue: wx,
    offerTotal: _x,
    payBtn: Sx,
    offerMeta: kx,
    composer: Nx,
    sendBtn: jx,
    priceBtn: Cx,
    modalOverlay: Mx,
    modal: Ex,
    modalHeader: Bx,
    modalClose: Px,
    modalLabel: Dx,
    modalInput: bx,
    summaryBox: Rx,
    summaryRow: Ax,
    summaryTotal: Lx,
    modalActions: Ix,
    cancelBtn: Tx,
    confirmBtn: Hx,
    placeholder: zx,
    emptyState: Fx,
  },
  qd = "kampus_messages_global",
  Ls = [];
function Zd(o, u, a) {
  const [d, f] = [u, a].sort();
  return `${o}::${d}::${f}`;
}
function Wx(o) {
  return (
    (o == null ? void 0 : o.email) ||
    (o == null ? void 0 : o.id) ||
    (o == null ? void 0 : o.name) ||
    "unknown"
  );
}
function dd() {
  try {
    const o = localStorage.getItem(qd);
    if (!o) return Ls;
    const u = JSON.parse(o);
    return Array.isArray(u)
      ? u
          .map((d) => {
            if (!d || typeof d != "object") return null;
            const f = d;
            if (!Array.isArray(f.messages)) return null;
            const p = f.seller || "Seller",
              h = f.sellerId || p,
              x = f.buyerId || "unknown_buyer",
              v = f.buyerName || "Buyer",
              S = typeof f.itemId == "number" ? f.itemId : 0,
              j = f.itemTitle || "Listing",
              k = typeof f.updatedAt == "number" ? f.updatedAt : Date.now(),
              D = f.id || Zd(S, h, x),
              W = f.messages
                .map((R, B) => {
                  if (!R || typeof R != "object") return null;
                  const E = typeof R.senderId == "string" ? R.senderId : x,
                    P = typeof R.senderName == "string" ? R.senderName : v,
                    Y =
                      typeof R.timestamp == "number"
                        ? R.timestamp
                        : Date.now() + B,
                    q = typeof R.id == "number" ? R.id : Y + B;
                  return R.kind === "price_offer" &&
                    typeof R.offerPrice == "number" &&
                    typeof R.commission == "number" &&
                    typeof R.totalAmount == "number"
                    ? {
                        id: q,
                        kind: "price_offer",
                        senderId: E,
                        senderName: P,
                        timestamp: Y,
                        offerPrice: R.offerPrice,
                        commission: R.commission,
                        totalAmount: R.totalAmount,
                      }
                    : R.kind === "payment_method" &&
                        typeof R.method == "string" &&
                        typeof R.commission == "number" &&
                        typeof R.totalAmount == "number"
                      ? {
                          id: q,
                          kind: "payment_method",
                          senderId: E,
                          senderName: P,
                          timestamp: Y,
                          method: R.method,
                          commission: R.commission,
                          totalAmount: R.totalAmount,
                        }
                      : {
                          id: q,
                          kind: "text",
                          senderId: E,
                          senderName: P,
                          timestamp: Y,
                          text: typeof R.text == "string" ? R.text : "",
                        };
                })
                .filter((R) => R !== null);
            return {
              id: D,
              seller: p,
              sellerId: h,
              buyerId: x,
              buyerName: v,
              itemId: S,
              itemTitle: j,
              updatedAt: k,
              messages: W,
            };
          })
          .filter((d) => d !== null)
      : Ls;
  } catch {
    return Ls;
  }
}
function Is(o) {
  return new Date(o).toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
}
function _n(o) {
  return `₱${o.toLocaleString("en-PH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}
function $x(o) {
  return o
    ? o.kind === "price_offer"
      ? `Price offer: ${_n(o.totalAmount)}`
      : o.kind === "payment_method"
        ? `Payment: ${o.method}`
        : o.text || "Start the chat"
    : "Start the chat";
}
function Ox() {
  const [o] = cl(),
    u = Ot(),
    { user: a } = Ut(),
    { listings: d } = fl(),
    f = y.useMemo(() => Wx(a), [a]),
    [p, h] = y.useState(dd),
    [x, v] = y.useState(""),
    [S, j] = y.useState(""),
    [k, D] = y.useState(!1),
    [W, R] = y.useState(""),
    B = y.useMemo(
      () =>
        p
          .filter((F) => F.buyerId === f || F.sellerId === f)
          .sort((F, A) => A.updatedAt - F.updatedAt),
      [p, f],
    );
  (y.useEffect(() => {
    h(dd());
  }, [f]),
    y.useEffect(() => {
      (v((F) => {
        var A;
        return B.some((re) => re.id === F)
          ? F
          : (((A = B[0]) == null ? void 0 : A.id) ?? "");
      }),
        j(""),
        D(!1),
        R(""));
    }, [B]),
    y.useEffect(() => {
      try {
        localStorage.setItem(qd, JSON.stringify(p));
      } catch {}
    }, [p]),
    y.useEffect(() => {
      if (!a) return;
      const F = o.get("seller"),
        A = o.get("sellerId"),
        re = Number(o.get("itemId")),
        ve = o.get("itemTitle"),
        we = o.get("paymentMethod"),
        Oe = o.get("cardLast4");
      if (!F || Number.isNaN(re) || re <= 0 || !ve) return;
      const te = A || F,
        I = f,
        U = Zd(re, I, te),
        O = `Hi! Is "${ve}" still available?`;
      if (
        (h((_) => {
          if (_.find((me) => me.id === U)) return _;
          const X = Date.now();
          return [
            {
              id: U,
              seller: F,
              sellerId: te,
              buyerId: I,
              buyerName: a.name,
              itemId: re,
              itemTitle: ve,
              updatedAt: X,
              messages: [
                {
                  id: X,
                  kind: "text",
                  senderId: I,
                  senderName: a.name,
                  text: O,
                  timestamp: X,
                },
              ],
            },
            ..._,
          ];
        }),
        we)
      ) {
        const _ = Date.now(),
          b =
            we === "cash"
              ? "Buyer confirmed payment: Cash (will pay in person)."
              : we === "card"
                ? `Buyer confirmed payment: Card ending ••••${Oe || "XXXX"}.`
                : `Buyer confirmed payment via ${we}.`;
        h((X) =>
          X.map((ie) =>
            ie.id !== U
              ? ie
              : {
                  ...ie,
                  updatedAt: _,
                  messages: [
                    ...ie.messages,
                    {
                      id: _ + 1,
                      kind: "text",
                      senderId: I,
                      senderName: a.name || "Buyer",
                      text: b,
                      timestamp: _ + 1,
                    },
                  ],
                },
          ),
        );
      }
      (v(U), u("/messages", { replace: !0 }));
    }, [f, u, o, a]));
  const E = B.find((F) => F.id === x),
    P = E ? d.find((F) => F.id === E.itemId) : void 0,
    Y = E ? (E.sellerId === f ? E.buyerName : E.seller) : "",
    q = !!E && E.sellerId === f,
    ae = Number.parseFloat(W),
    le = Number.isFinite(ae) && ae > 0,
    de = le ? ae * 0.1 : 0,
    _e = le ? ae + de : 0,
    je = () => {
      const F = S.trim();
      !F ||
        !x ||
        (h((A) =>
          A.map((re) => {
            if (re.id !== x) return re;
            const ve = Date.now();
            return {
              ...re,
              updatedAt: ve,
              messages: [
                ...re.messages,
                {
                  id: ve,
                  kind: "text",
                  senderId: f,
                  senderName: (a == null ? void 0 : a.name) || "Student",
                  text: F,
                  timestamp: ve,
                },
              ],
            };
          }),
        ),
        j(""));
    },
    Ee = () => {
      if (!E || !q || !le) return;
      const F = Date.now();
      (h((A) =>
        A.map((re) =>
          re.id !== E.id
            ? re
            : {
                ...re,
                updatedAt: F,
                messages: [
                  ...re.messages,
                  {
                    id: F,
                    kind: "price_offer",
                    senderId: f,
                    senderName: (a == null ? void 0 : a.name) || "Seller",
                    offerPrice: ae,
                    commission: de,
                    totalAmount: _e,
                    timestamp: F,
                  },
                ],
              },
        ),
      ),
        D(!1),
        R(""));
    },
    Re = (F) => {
      if (!E) return;
      const A = new URLSearchParams({
        amount: String(F.totalAmount),
        itemId: String(E.itemId),
        itemTitle: E.itemTitle,
        seller: E.seller,
        sellerId: E.sellerId,
        conversationId: E.id,
      });
      u(`/payment?${A.toString()}`);
    };
  return i.jsxs("div", {
    className: $.page,
    children: [
      i.jsx("div", {
        className: $.topBar,
        children: i.jsxs(Ke, {
          to: "/",
          className: $.backBtn,
          children: [i.jsx(dl, { size: 16 }), "Back to listings"],
        }),
      }),
      i.jsxs("div", {
        className: $.shell,
        children: [
          i.jsxs("aside", {
            className: $.sidebar,
            children: [
              i.jsxs("div", {
                className: $.sidebarHeader,
                children: [
                  i.jsx(ig, { size: 17 }),
                  i.jsx("h1", { children: "Messages" }),
                ],
              }),
              B.length === 0
                ? i.jsx("p", {
                    className: $.emptyState,
                    children: "No conversations yet.",
                  })
                : i.jsx("div", {
                    className: $.threadList,
                    children: B.map((F) => {
                      const A = F.messages[F.messages.length - 1],
                        re = F.id === x,
                        ve = F.sellerId === f ? F.buyerName : F.seller;
                      return i.jsxs(
                        "button",
                        {
                          className: `${$.threadButton} ${re ? $.threadButtonActive : ""}`,
                          onClick: () => v(F.id),
                          children: [
                            i.jsx("p", {
                              className: $.threadSeller,
                              children: ve,
                            }),
                            i.jsx("p", {
                              className: $.threadItem,
                              children: F.itemTitle,
                            }),
                            i.jsx("p", {
                              className: $.threadPreview,
                              children: $x(A),
                            }),
                          ],
                        },
                        F.id,
                      );
                    }),
                  }),
            ],
          }),
          i.jsx("section", {
            className: $.chatPanel,
            children: E
              ? i.jsxs(i.Fragment, {
                  children: [
                    i.jsxs("header", {
                      className: $.chatHeader,
                      children: [
                        i.jsx("p", { className: $.chatSeller, children: Y }),
                        i.jsx("p", {
                          className: $.chatItem,
                          children: E.itemTitle,
                        }),
                      ],
                    }),
                    i.jsx("div", {
                      className: $.itemCardWrap,
                      children: i.jsxs(Ke, {
                        to: `/item/${E.itemId}`,
                        className: $.itemCard,
                        children: [
                          i.jsx("div", {
                            className: $.itemCardImageWrap,
                            children:
                              P != null && P.image
                                ? i.jsx("img", {
                                    src: P.image,
                                    alt: E.itemTitle,
                                    className: $.itemCardImage,
                                  })
                                : i.jsx("div", {
                                    className: $.itemCardImageFallback,
                                    children: "Listing",
                                  }),
                          }),
                          i.jsxs("div", {
                            className: $.itemCardBody,
                            children: [
                              i.jsx("p", {
                                className: $.itemCardLabel,
                                children: "Listing",
                              }),
                              i.jsx("p", {
                                className: $.itemCardTitle,
                                children: E.itemTitle,
                              }),
                              (P == null ? void 0 : P.price) !== void 0 &&
                                i.jsxs("p", {
                                  className: $.itemCardPrice,
                                  children: [
                                    "₱",
                                    P.price.toLocaleString("en-PH"),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    i.jsx("div", {
                      className: $.messagesArea,
                      children: E.messages.map((F) =>
                        i.jsx(
                          "div",
                          {
                            className: `${$.messageRow} ${F.senderId === f ? $.messageMine : $.messageSeller}`,
                            children:
                              F.kind === "price_offer"
                                ? i.jsxs("div", {
                                    className: `${$.messageBubble} ${$.offerBubble}`,
                                    children: [
                                      i.jsx("p", {
                                        className: $.offerHeader,
                                        children: "Price Offer",
                                      }),
                                      i.jsx("div", {
                                        className: $.offerReceipt,
                                        children:
                                          E.buyerId === f &&
                                          F.senderId === E.sellerId
                                            ? i.jsxs("div", {
                                                className: `${$.offerRow} ${$.offerTotal}`,
                                                children: [
                                                  i.jsx("span", {
                                                    className: $.offerLabel,
                                                    children: "Total amount",
                                                  }),
                                                  i.jsx("span", {
                                                    className: $.offerValue,
                                                    children: _n(F.totalAmount),
                                                  }),
                                                ],
                                              })
                                            : i.jsxs(i.Fragment, {
                                                children: [
                                                  i.jsxs("div", {
                                                    className: $.offerRow,
                                                    children: [
                                                      i.jsx("span", {
                                                        className: $.offerLabel,
                                                        children: "Item price",
                                                      }),
                                                      i.jsx("span", {
                                                        className: $.offerValue,
                                                        children: _n(
                                                          F.offerPrice,
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                  i.jsxs("div", {
                                                    className: $.offerRow,
                                                    children: [
                                                      i.jsx("span", {
                                                        className: $.offerLabel,
                                                        children:
                                                          "10% commission",
                                                      }),
                                                      i.jsx("span", {
                                                        className: $.offerValue,
                                                        children: _n(
                                                          F.commission,
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                  i.jsxs("div", {
                                                    className: `${$.offerRow} ${$.offerTotal}`,
                                                    children: [
                                                      i.jsx("span", {
                                                        className: $.offerLabel,
                                                        children: "Total",
                                                      }),
                                                      i.jsx("span", {
                                                        className: $.offerValue,
                                                        children: _n(
                                                          F.totalAmount,
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                      }),
                                      E.buyerId === f &&
                                      F.senderId === E.sellerId
                                        ? i.jsx("button", {
                                            className: $.payBtn,
                                            onClick: () => Re(F),
                                            children: "Pay",
                                          })
                                        : i.jsx("p", {
                                            className: $.offerMeta,
                                            children: "Awaiting buyer payment",
                                          }),
                                      i.jsx("span", {
                                        className: $.messageTime,
                                        children: Is(F.timestamp),
                                      }),
                                    ],
                                  })
                                : F.kind === "payment_method"
                                  ? i.jsxs("div", {
                                      className: `${$.messageBubble} ${$.offerBubble}`,
                                      children: [
                                        i.jsx("p", {
                                          className: $.offerHeader,
                                          children: "Payment Method",
                                        }),
                                        i.jsxs("div", {
                                          className: $.offerReceipt,
                                          children: [
                                            i.jsxs("div", {
                                              className: $.offerRow,
                                              children: [
                                                i.jsx("span", {
                                                  className: $.offerLabel,
                                                  children: "Method",
                                                }),
                                                i.jsx("span", {
                                                  className: $.offerValue,
                                                  children: F.method,
                                                }),
                                              ],
                                            }),
                                            i.jsxs("div", {
                                              className: `${$.offerRow} ${$.offerTotal}`,
                                              children: [
                                                i.jsx("span", {
                                                  className: $.offerLabel,
                                                  children: "Total",
                                                }),
                                                i.jsx("span", {
                                                  className: $.offerValue,
                                                  children: _n(F.totalAmount),
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        i.jsx("span", {
                                          className: $.messageTime,
                                          children: Is(F.timestamp),
                                        }),
                                      ],
                                    })
                                  : i.jsxs("div", {
                                      className: $.messageBubble,
                                      children: [
                                        i.jsx("p", { children: F.text }),
                                        i.jsx("span", {
                                          className: $.messageTime,
                                          children: Is(F.timestamp),
                                        }),
                                      ],
                                    }),
                          },
                          F.id,
                        ),
                      ),
                    }),
                    i.jsxs("div", {
                      className: $.composer,
                      children: [
                        i.jsx("input", {
                          value: S,
                          onChange: (F) => j(F.target.value),
                          placeholder: "Type your message...",
                          onKeyDown: (F) => {
                            F.key === "Enter" && je();
                          },
                        }),
                        q &&
                          i.jsx("button", {
                            className: $.priceBtn,
                            onClick: () => D(!0),
                            "aria-label": "Set offer price",
                            title: "Set offer price",
                            children: i.jsx(Jh, { size: 16 }),
                          }),
                        i.jsx("button", {
                          className: $.sendBtn,
                          onClick: je,
                          "aria-label": "Send message",
                          children: i.jsx(pg, { size: 16 }),
                        }),
                      ],
                    }),
                  ],
                })
              : i.jsx("div", {
                  className: $.placeholder,
                  children:
                    "Open a conversation from an item to start messaging a seller.",
                }),
          }),
        ],
      }),
      k &&
        i.jsx("div", {
          className: $.modalOverlay,
          onClick: () => D(!1),
          children: i.jsxs("div", {
            className: $.modal,
            onClick: (F) => F.stopPropagation(),
            children: [
              i.jsxs("div", {
                className: $.modalHeader,
                children: [
                  i.jsx("h3", { children: "Set Price Offer" }),
                  i.jsx("button", {
                    className: $.modalClose,
                    onClick: () => D(!1),
                    "aria-label": "Close price modal",
                    children: i.jsx(Sn, { size: 14 }),
                  }),
                ],
              }),
              i.jsx("label", {
                className: $.modalLabel,
                children: "Item price",
              }),
              i.jsx("input", {
                type: "number",
                min: "0",
                step: "0.01",
                value: W,
                onChange: (F) => R(F.target.value),
                placeholder: "Enter amount",
                className: $.modalInput,
              }),
              i.jsxs("div", {
                className: $.summaryBox,
                children: [
                  i.jsxs("div", {
                    className: $.summaryRow,
                    children: [
                      i.jsx("span", { children: "10% commission tax" }),
                      i.jsx("span", { children: _n(de) }),
                    ],
                  }),
                  i.jsxs("div", {
                    className: `${$.summaryRow} ${$.summaryTotal}`,
                    children: [
                      i.jsx("span", { children: "Total amount" }),
                      i.jsx("span", { children: _n(_e) }),
                    ],
                  }),
                ],
              }),
              i.jsxs("div", {
                className: $.modalActions,
                children: [
                  i.jsx("button", {
                    className: $.cancelBtn,
                    onClick: () => D(!1),
                    children: "Cancel",
                  }),
                  i.jsx("button", {
                    className: $.confirmBtn,
                    onClick: Ee,
                    disabled: !le,
                    children: "Confirm",
                  }),
                ],
              }),
            ],
          }),
        }),
    ],
  });
}
const Ux =
    "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='220'%20height='220'%20viewBox='0%200%20220%20220'%20role='img'%20aria-label='QR%20placeholder'%3e%3crect%20width='220'%20height='220'%20fill='%23d9d9d9'/%3e%3cg%20fill='%23000000'%3e%3crect%20x='24'%20y='24'%20width='56'%20height='56'/%3e%3crect%20x='32'%20y='32'%20width='40'%20height='40'%20fill='%23d9d9d9'/%3e%3crect%20x='40'%20y='40'%20width='24'%20height='24'/%3e%3crect%20x='140'%20y='24'%20width='56'%20height='56'/%3e%3crect%20x='148'%20y='32'%20width='40'%20height='40'%20fill='%23d9d9d9'/%3e%3crect%20x='156'%20y='40'%20width='24'%20height='24'/%3e%3crect%20x='24'%20y='140'%20width='56'%20height='56'/%3e%3crect%20x='32'%20y='148'%20width='40'%20height='40'%20fill='%23d9d9d9'/%3e%3crect%20x='40'%20y='156'%20width='24'%20height='24'/%3e%3crect%20x='98'%20y='24'%20width='16'%20height='16'/%3e%3crect%20x='114'%20y='24'%20width='16'%20height='16'/%3e%3crect%20x='98'%20y='40'%20width='16'%20height='16'/%3e%3crect%20x='98'%20y='74'%20width='16'%20height='16'/%3e%3crect%20x='114'%20y='74'%20width='16'%20height='16'/%3e%3crect%20x='130'%20y='74'%20width='16'%20height='16'/%3e%3crect%20x='98'%20y='98'%20width='16'%20height='16'/%3e%3crect%20x='130'%20y='98'%20width='16'%20height='16'/%3e%3crect%20x='162'%20y='98'%20width='16'%20height='16'/%3e%3crect%20x='90'%20y='122'%20width='16'%20height='16'/%3e%3crect%20x='106'%20y='122'%20width='16'%20height='16'/%3e%3crect%20x='122'%20y='122'%20width='16'%20height='16'/%3e%3crect%20x='154'%20y='122'%20width='16'%20height='16'/%3e%3crect%20x='90'%20y='146'%20width='16'%20height='16'/%3e%3crect%20x='122'%20y='146'%20width='16'%20height='16'/%3e%3crect%20x='138'%20y='146'%20width='16'%20height='16'/%3e%3crect%20x='90'%20y='170'%20width='16'%20height='16'/%3e%3crect%20x='106'%20y='170'%20width='16'%20height='16'/%3e%3crect%20x='138'%20y='170'%20width='16'%20height='16'/%3e%3crect%20x='154'%20y='170'%20width='16'%20height='16'/%3e%3crect%20x='170'%20y='170'%20width='16'%20height='16'/%3e%3c/g%3e%3c/svg%3e",
  Vx = "_page_tqqhf_1",
  Gx = "_topBar_tqqhf_7",
  Yx = "_backBtn_tqqhf_13",
  qx = "_card_tqqhf_27",
  Zx = "_header_tqqhf_36",
  Jx = "_eyebrow_tqqhf_42",
  Kx = "_summary_tqqhf_56",
  Xx = "_methods_tqqhf_81",
  Qx = "_methodBtn_tqqhf_86",
  ew = "_methodBtnActive_tqqhf_104",
  tw = "_methodIcon_tqqhf_109",
  nw = "_methodText_tqqhf_121",
  rw = "_footerNote_tqqhf_136",
  lw = "_dropdownPanel_tqqhf_147",
  iw = "_dropdownTitle_tqqhf_156",
  ow = "_fieldGrid_tqqhf_162",
  sw = "_field_tqqhf_162",
  aw = "_fieldWide_tqqhf_169",
  uw = "_qrImage_tqqhf_199",
  cw = "_actionRow_tqqhf_207",
  dw = "_confirmBtn_tqqhf_212",
  fw = "_confirmError_tqqhf_229",
  pw = "_confirmSuccess_tqqhf_235",
  mw = "_proofIcon_tqqhf_264",
  hw = "_statusPaid_tqqhf_270",
  gw = "_refCode_tqqhf_279",
  yw = "_redirectNote_tqqhf_286",
  ge = {
    page: Vx,
    topBar: Gx,
    backBtn: Yx,
    card: qx,
    header: Zx,
    eyebrow: Jx,
    summary: Kx,
    methods: Xx,
    methodBtn: Qx,
    methodBtnActive: ew,
    methodIcon: tw,
    methodText: nw,
    footerNote: rw,
    dropdownPanel: lw,
    dropdownTitle: iw,
    fieldGrid: ow,
    field: sw,
    fieldWide: aw,
    qrImage: uw,
    actionRow: cw,
    confirmBtn: dw,
    confirmError: fw,
    confirmSuccess: pw,
    proofIcon: mw,
    statusPaid: hw,
    refCode: gw,
    redirectNote: yw,
  },
  Ei = "kampus_wallet_balances",
  fd = "kampus_listing_boosts";
function vw(o) {
  return `₱${o.toLocaleString("en-PH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}
const pd = [
  {
    id: "cash",
    label: "Cash",
    subtitle: "Pay in person during meetup",
    icon: zd,
  },
  {
    id: "card",
    label: "Debit / Credit Card",
    subtitle: "Visa, Mastercard, and more",
    icon: qh,
  },
  {
    id: "qrph",
    label: "QRPH",
    subtitle: "Scan and pay via local e-wallet app",
    icon: ug,
  },
];
function xw() {
  const o = Ot(),
    { user: u } = Ut(),
    [a] = cl(),
    d = a.get("mode"),
    f = d === "topup",
    p = d === "boost",
    h = f || p,
    x = f,
    v =
      a.get("itemTitle") ||
      (f ? "K-Wallet Top-up" : p ? "Listing boost" : "Listing"),
    S = h ? "Kampus" : a.get("seller") || "Seller",
    j = Number(a.get("amount")),
    k = Number.isFinite(j) && j > 0 ? j : 0,
    D = Number(a.get("listingId")),
    W = Number(a.get("boostDays")),
    R = y.useMemo(
      () => (h ? pd.filter((te) => te.id === "card" || te.id === "qrph") : pd),
      [h],
    ),
    [B, E] = y.useState(h ? "card" : "cash"),
    [P, Y] = y.useState("Visa"),
    [q, ae] = y.useState(""),
    [le, de] = y.useState(""),
    [_e, je] = y.useState(""),
    [Ee, Re] = y.useState(""),
    [F, A] = y.useState(""),
    [re, ve] = y.useState("");
  y.useEffect(() => {
    var I;
    if (R.some((U) => U.id === B)) return;
    const te = (I = R[0]) == null ? void 0 : I.id;
    te && E(te);
  }, [R, B]);
  const we = y.useMemo(() => {
      var te, I;
      return (
        ((te = R.find((U) => U.id === B)) == null ? void 0 : te.label) ||
        ((I = R[0]) == null ? void 0 : I.label) ||
        ""
      );
    }, [R, B]),
    Oe = () => {
      if ((A(""), ve(""), f)) {
        if (!u) {
          A("You must be logged in to top up K-Wallet.");
          return;
        }
        if (k <= 0) {
          A("Invalid top-up amount.");
          return;
        }
        try {
          const I = localStorage.getItem(Ei),
            U = I ? JSON.parse(I) : {},
            O = typeof U[u.email] == "number" ? U[u.email] : 0;
          ((U[u.email] = O + k), localStorage.setItem(Ei, JSON.stringify(U)));
        } catch {
          A("Could not update K-Wallet balance.");
          return;
        }
        o("/profile");
        return;
      }
      if (p) {
        if (!Number.isFinite(D) || D <= 0) {
          A("Invalid listing target for boost.");
          return;
        }
        if (B === "card" && (!q || !le || !_e || !Ee)) {
          A("Please fill in card details to confirm card payment.");
          return;
        }
        const I = Number.isFinite(W) && W > 0 ? W : 1,
          U = 1440 * 60 * 1e3;
        try {
          const O = localStorage.getItem(fd),
            _ = O ? JSON.parse(O) : {},
            b = String(D),
            X = _[b],
            ie = Date.now(),
            me = X && X.expiresAt > ie ? X.expiresAt : ie;
          ((_[b] = {
            expiresAt: me + I * U,
            amount: k,
            planDays: I,
            paidAt: ie,
            method: B,
          }),
            localStorage.setItem(fd, JSON.stringify(_)));
        } catch {
          A("Could not apply listing boost.");
          return;
        }
        o("/profile");
        return;
      }
      const te = a.get("conversationId");
      if (te) {
        if (B === "card" && (!q || !le || !_e || !Ee)) {
          A("Please fill in card details to confirm card payment.");
          return;
        }
        try {
          const U = localStorage.getItem(Ei),
            O = U ? JSON.parse(U) : {},
            _ = localStorage.getItem("kampus_messages_global"),
            b = _ ? JSON.parse(_) : [],
            X = b.find((me) => me.id === te),
            ie =
              (X == null ? void 0 : X.sellerId) ||
              (X == null ? void 0 : X.seller) ||
              "";
          if (ie && k > 0) {
            const me = k - k * 0.1,
              oe = typeof O[ie] == "number" ? O[ie] : 0;
            ((O[ie] = oe + me), localStorage.setItem(Ei, JSON.stringify(O)));
          }
          if (X) {
            const me =
                B === "qrph"
                  ? "QR PH"
                  : B === "card"
                    ? "Debit/Credit Card"
                    : "Cash",
              oe = Date.now();
            ((X.messages = X.messages || []),
              X.messages.push({
                id: oe,
                kind: "payment_method",
                senderId: (u == null ? void 0 : u.id) || "buyer",
                senderName: (u == null ? void 0 : u.name) || "Buyer",
                timestamp: oe,
                method: me,
                totalAmount: k,
                commission: k * 0.1,
              }),
              (X.updatedAt = oe),
              localStorage.setItem(
                "kampus_messages_global",
                JSON.stringify(b),
              ));
          }
        } catch {
          A("Could not finalize payment.");
          return;
        }
        if (B === "cash") {
          o(`/messages?conversationId=${encodeURIComponent(te)}`);
          return;
        }
        const I = new URLSearchParams();
        if (
          (I.set("conversationId", te),
          I.set("method", B === "qrph" ? "QR PH" : "Debit/Credit Card"),
          I.set("amount", String(k)),
          B === "card")
        ) {
          const U = le.replace(/\D/g, "").slice(-4);
          U && I.set("cardLast4", U);
        }
        o(`/payment/proof?${I.toString()}`);
        return;
      }
      ve(`${we} payment processed.`);
    };
  return i.jsxs("div", {
    className: ge.page,
    children: [
      x &&
        i.jsx("div", {
          className: ge.topBar,
          children: i.jsxs(Ke, {
            to: "/profile",
            className: ge.backBtn,
            children: [i.jsx(dl, { size: 16 }), "Back to profile"],
          }),
        }),
      i.jsxs("section", {
        className: ge.card,
        children: [
          i.jsxs("header", {
            className: ge.header,
            children: [
              i.jsx("p", { className: ge.eyebrow, children: "Payment" }),
              i.jsx("h1", { children: "Choose payment method" }),
            ],
          }),
          i.jsxs("div", {
            className: ge.summary,
            children: [
              i.jsxs("p", {
                children: [
                  i.jsx("span", { children: "Item" }),
                  i.jsx("strong", { children: v }),
                ],
              }),
              i.jsxs("p", {
                children: [
                  i.jsx("span", { children: "Seller" }),
                  i.jsx("strong", { children: S }),
                ],
              }),
              i.jsxs("p", {
                children: [
                  i.jsx("span", { children: "Total Amount" }),
                  i.jsx("strong", {
                    children: k > 0 ? vw(k) : "Not specified",
                  }),
                ],
              }),
            ],
          }),
          i.jsx("div", {
            className: ge.methods,
            children: R.map((te) => {
              const I = te.icon,
                U = B === te.id;
              return i.jsxs(
                "button",
                {
                  type: "button",
                  className: `${ge.methodBtn} ${U ? ge.methodBtnActive : ""}`,
                  onClick: () => E(te.id),
                  children: [
                    i.jsx("span", {
                      className: ge.methodIcon,
                      children: i.jsx(I, { size: 18 }),
                    }),
                    i.jsxs("span", {
                      className: ge.methodText,
                      children: [
                        i.jsx("strong", { children: te.label }),
                        i.jsx("small", { children: te.subtitle }),
                      ],
                    }),
                  ],
                },
                te.id,
              );
            }),
          }),
          B === "card" &&
            i.jsxs("div", {
              className: ge.dropdownPanel,
              children: [
                i.jsx("p", {
                  className: ge.dropdownTitle,
                  children: "Card details",
                }),
                i.jsxs("div", {
                  className: ge.fieldGrid,
                  children: [
                    i.jsxs("label", {
                      className: ge.field,
                      children: [
                        "Card type",
                        i.jsxs("select", {
                          value: P,
                          onChange: (te) => Y(te.target.value),
                          children: [
                            i.jsx("option", {
                              value: "Visa",
                              children: "Visa",
                            }),
                            i.jsx("option", {
                              value: "Mastercard",
                              children: "Mastercard",
                            }),
                            i.jsx("option", { value: "JCB", children: "JCB" }),
                            i.jsx("option", {
                              value: "AMEX",
                              children: "American Express",
                            }),
                          ],
                        }),
                      ],
                    }),
                    i.jsxs("label", {
                      className: ge.field,
                      children: [
                        "Name on card",
                        i.jsx("input", {
                          type: "text",
                          value: q,
                          onChange: (te) => ae(te.target.value),
                          placeholder: "Juan Dela Cruz",
                        }),
                      ],
                    }),
                    i.jsxs("label", {
                      className: ge.fieldWide,
                      children: [
                        "Card number",
                        i.jsx("input", {
                          type: "text",
                          value: le,
                          onChange: (te) => de(te.target.value),
                          placeholder: "1234 5678 9012 3456",
                        }),
                      ],
                    }),
                    i.jsxs("label", {
                      className: ge.field,
                      children: [
                        "Expiry",
                        i.jsx("input", {
                          type: "text",
                          value: _e,
                          onChange: (te) => je(te.target.value),
                          placeholder: "MM/YY",
                        }),
                      ],
                    }),
                    i.jsxs("label", {
                      className: ge.field,
                      children: [
                        "CVV",
                        i.jsx("input", {
                          type: "password",
                          value: Ee,
                          onChange: (te) => Re(te.target.value),
                          placeholder: "123",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          B === "qrph" &&
            i.jsxs("div", {
              className: ge.dropdownPanel,
              children: [
                i.jsx("p", {
                  className: ge.dropdownTitle,
                  children: "QRPH placeholder",
                }),
                i.jsx("img", {
                  src: Ux,
                  alt: "QRPH placeholder",
                  className: ge.qrImage,
                }),
              ],
            }),
          i.jsxs("div", {
            className: ge.footerNote,
            children: ["Selected method: ", i.jsx("strong", { children: we })],
          }),
          i.jsx("div", {
            className: ge.actionRow,
            children: i.jsx("button", {
              type: "button",
              className: ge.confirmBtn,
              onClick: Oe,
              children: "Confirm",
            }),
          }),
          F && i.jsx("p", { className: ge.confirmError, children: F }),
          re && i.jsx("p", { className: ge.confirmSuccess, children: re }),
        ],
      }),
    ],
  });
}
function ww(o) {
  return `₱${o.toLocaleString("en-PH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}
function _w() {
  const o = Ot(),
    [u] = cl(),
    [a, d] = y.useState(8),
    f = u.get("conversationId"),
    p = u.get("method") || "",
    h = u.get("cardLast4"),
    x = Number(u.get("amount")),
    v = Number.isFinite(x) && x > 0 ? x : 0,
    S = y.useMemo(
      () => `KMP-${Date.now().toString(36).toUpperCase().slice(-8)}`,
      [],
    );
  return (
    y.useEffect(() => {
      if (a <= 0) {
        f && o(`/messages?conversationId=${encodeURIComponent(String(f))}`);
        return;
      }
      const j = setTimeout(() => d((k) => k - 1), 1e3);
      return () => clearTimeout(j);
    }, [a, f, o]),
    i.jsx("div", {
      className: ge.page,
      children: i.jsxs("section", {
        className: ge.card,
        children: [
          i.jsxs("header", {
            className: ge.header,
            children: [
              i.jsx("p", {
                className: ge.eyebrow,
                children: "Proof of transaction",
              }),
              i.jsx("h1", { children: "Transaction complete" }),
            ],
          }),
          i.jsx("div", {
            className: ge.proofIcon,
            children: i.jsx(Gh, {
              size: 48,
              strokeWidth: 1.5,
              color: "#16a34a",
            }),
          }),
          i.jsxs("div", {
            className: ge.summary,
            children: [
              i.jsxs("p", {
                children: [
                  i.jsx("span", { children: "Method" }),
                  i.jsx("strong", { children: p }),
                ],
              }),
              h &&
                i.jsxs("p", {
                  children: [
                    i.jsx("span", { children: "Card" }),
                    i.jsxs("strong", { children: ["•••• ", h] }),
                  ],
                }),
              i.jsxs("p", {
                children: [
                  i.jsx("span", { children: "Amount" }),
                  i.jsx("strong", {
                    children: v > 0 ? ww(v) : "Not specified",
                  }),
                ],
              }),
              i.jsxs("p", {
                children: [
                  i.jsx("span", { children: "Status" }),
                  i.jsx("strong", {
                    className: ge.statusPaid,
                    children: "Paid",
                  }),
                ],
              }),
              i.jsxs("p", {
                children: [
                  i.jsx("span", { children: "Reference" }),
                  i.jsx("strong", { className: ge.refCode, children: S }),
                ],
              }),
            ],
          }),
          i.jsxs("p", {
            className: ge.redirectNote,
            children: [
              "Redirecting to chat in ",
              i.jsxs("strong", { children: [a, "s"] }),
              "…",
            ],
          }),
          i.jsx("div", {
            className: ge.actionRow,
            children: i.jsx("button", {
              className: ge.confirmBtn,
              onClick: () =>
                f &&
                o(`/messages?conversationId=${encodeURIComponent(String(f))}`),
              children: "Go to chat now",
            }),
          }),
        ],
      }),
    })
  );
}
function mr({ children: o, onUnauth: u }) {
  const { isLoggedIn: a } = Ut(),
    d = Ot(),
    f = $t(),
    p = y.useRef(!0);
  return (
    y.useEffect(() => {
      a ||
        (p.current && u(),
        f.pathname !== "/" ? d(-1) : d("/"),
        (p.current = !1));
    }, [a, f.pathname, d, u]),
    a ? o : null
  );
}
function Sw() {
  const [o, u] = cl(),
    [a, d] = y.useState(o.get("category") || "All"),
    f = o.get("search") || "";
  y.useEffect(() => {
    d(o.get("category") || "All");
  }, [o]);
  const p = (S) => {
      d(S);
      const j = new URLSearchParams(o);
      (S === "All" ? j.delete("category") : j.set("category", S), u(j));
    },
    { listings: h } = fl(),
    x = new Map();
  for (const S of bi) x.set(S.id, S);
  for (const S of h) x.set(S.id, S);
  let v = Array.from(x.values());
  (a !== "All" && (v = v.filter((S) => S.category === a)),
    f &&
      (v = v.filter((S) => S.title.toLowerCase().includes(f.toLowerCase()))));
  try {
    const S = localStorage.getItem("kampus_listing_boosts"),
      j = S ? JSON.parse(S) : {},
      k = Date.now();
    v.sort((D, W) => {
      const R =
          j[String(D.id)] && j[String(D.id)].expiresAt > k
            ? j[String(D.id)].expiresAt
            : 0,
        B =
          j[String(W.id)] && j[String(W.id)].expiresAt > k
            ? j[String(W.id)].expiresAt
            : 0;
      return R && B ? B - R : R ? -1 : B ? 1 : Number(W.id) - Number(D.id);
    });
  } catch {}
  return i.jsxs(i.Fragment, {
    children: [
      i.jsx(Gg, {}),
      i.jsx(Xg, { active: a, onSelect: p }),
      i.jsx(P0, { products: v }),
    ],
  });
}
function kw() {
  const o = s1();
  return i.jsx(Bg, {
    children: i.jsx(a1, {
      children: i.jsxs(jh, {
        children: [
          i.jsx(Wg, { onOpenModal: o.open }),
          i.jsxs(eh, {
            children: [
              i.jsx(Qt, { path: "/", element: i.jsx(Sw, {}) }),
              i.jsx(Qt, { path: "/item/:id", element: i.jsx(K1, {}) }),
              i.jsx(Qt, {
                path: "/profile",
                element: i.jsx(mr, {
                  onUnauth: () => o.open("signin"),
                  children: i.jsx(cd, {}),
                }),
              }),
              i.jsx(Qt, {
                path: "/profile/:profileKey",
                element: i.jsx(mr, {
                  onUnauth: () => o.open("signin"),
                  children: i.jsx(cd, {}),
                }),
              }),
              i.jsx(Qt, {
                path: "/create-listing",
                element: i.jsx(mr, {
                  onUnauth: () => o.open("signin"),
                  children: i.jsx(Tv, {}),
                }),
              }),
              i.jsx(Qt, {
                path: "/messages",
                element: i.jsx(mr, {
                  onUnauth: () => o.open("signin"),
                  children: i.jsx(Ox, {}),
                }),
              }),
              i.jsx(Qt, {
                path: "/payment",
                element: i.jsx(mr, {
                  onUnauth: () => o.open("signin"),
                  children: i.jsx(xw, {}),
                }),
              }),
              i.jsx(Qt, {
                path: "/payment/proof",
                element: i.jsx(mr, {
                  onUnauth: () => o.open("signin"),
                  children: i.jsx(_w, {}),
                }),
              }),
            ],
          }),
          i.jsx(o1, {}),
          i.jsx(r1, {
            isOpen: o.isOpen,
            panel: o.panel,
            onClose: o.close,
            onSwitchPanel: o.setPanel,
          }),
        ],
      }),
    }),
  });
}
rm.createRoot(document.getElementById("root")).render(
  i.jsx(Jp.StrictMode, { children: i.jsx(kw, {}) }),
);
