function g() {
}
function H(e) {
  return e();
}
function I() {
  return /* @__PURE__ */ Object.create(null);
}
function C(e) {
  e.forEach(H);
}
function M(e) {
  return typeof e == "function";
}
function K(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function X(e) {
  return Object.keys(e).length === 0;
}
function d(e, t) {
  e.appendChild(t);
}
function F(e, t, n) {
  e.insertBefore(t, n || null);
}
function L(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function Y(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function h(e) {
  return document.createElement(e);
}
function Q(e) {
  return document.createTextNode(e);
}
function A() {
  return Q(" ");
}
function x(e, t, n, l) {
  return e.addEventListener(t, n, l), () => e.removeEventListener(t, n, l);
}
function O(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function Z(e) {
  return Array.from(e.childNodes);
}
function ee(e, t) {
  t = "" + t, e.data !== t && (e.data = t);
}
function P(e, t) {
  e.value = t ?? "";
}
function q(e, t, n) {
  for (let l = 0; l < e.options.length; l += 1) {
    const r = e.options[l];
    if (r.__value === t) {
      r.selected = !0;
      return;
    }
  }
  (!n || t !== void 0) && (e.selectedIndex = -1);
}
function R(e) {
  const t = e.querySelector(":checked");
  return t && t.__value;
}
function te(e, t, { bubbles: n = !1, cancelable: l = !1 } = {}) {
  const r = document.createEvent("CustomEvent");
  return r.initCustomEvent(e, n, l, t), r;
}
function ne(e) {
  const t = {};
  for (const n of e)
    t[n.name] = n.value;
  return t;
}
let N;
function S(e) {
  N = e;
}
function oe() {
  if (!N)
    throw new Error("Function called outside component initialization");
  return N;
}
function le() {
  const e = oe();
  return (t, n, { cancelable: l = !1 } = {}) => {
    const r = e.$$.callbacks[t];
    if (r) {
      const c = te(t, n, { cancelable: l });
      return r.slice().forEach((i) => {
        i.call(e, c);
      }), !c.defaultPrevented;
    }
    return !0;
  };
}
const k = [], B = [];
let E = [];
const D = [], re = /* @__PURE__ */ Promise.resolve();
let T = !1;
function ie() {
  T || (T = !0, re.then(U));
}
function j(e) {
  E.push(e);
}
const z = /* @__PURE__ */ new Set();
let $ = 0;
function U() {
  if ($ !== 0)
    return;
  const e = N;
  do {
    try {
      for (; $ < k.length; ) {
        const t = k[$];
        $++, S(t), ce(t.$$);
      }
    } catch (t) {
      throw k.length = 0, $ = 0, t;
    }
    for (S(null), k.length = 0, $ = 0; B.length; )
      B.pop()();
    for (let t = 0; t < E.length; t += 1) {
      const n = E[t];
      z.has(n) || (z.add(n), n());
    }
    E.length = 0;
  } while (k.length);
  for (; D.length; )
    D.pop()();
  T = !1, z.clear(), S(e);
}
function ce(e) {
  if (e.fragment !== null) {
    e.update(), C(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(j);
  }
}
function ue(e) {
  const t = [], n = [];
  E.forEach((l) => e.indexOf(l) === -1 ? t.push(l) : n.push(l)), n.forEach((l) => l()), E = t;
}
const se = /* @__PURE__ */ new Set();
function fe(e, t) {
  e && e.i && (se.delete(e), e.i(t));
}
function ae(e, t, n, l) {
  const { fragment: r, after_update: c } = e.$$;
  r && r.m(t, n), l || j(() => {
    const i = e.$$.on_mount.map(H).filter(M);
    e.$$.on_destroy ? e.$$.on_destroy.push(...i) : C(i), e.$$.on_mount = [];
  }), c.forEach(j);
}
function de(e, t) {
  const n = e.$$;
  n.fragment !== null && (ue(n.after_update), C(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function _e(e, t) {
  e.$$.dirty[0] === -1 && (k.push(e), ie(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function he(e, t, n, l, r, c, i, u = [-1]) {
  const s = N;
  S(e);
  const o = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: c,
    update: g,
    not_equal: r,
    bound: I(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (s ? s.$$.context : [])),
    // everything else
    callbacks: I(),
    dirty: u,
    skip_bound: !1,
    root: t.target || s.$$.root
  };
  i && i(o.root);
  let _ = !1;
  if (o.ctx = n ? n(e, t.props || {}, (a, m, ...b) => {
    const v = b.length ? b[0] : m;
    return o.ctx && r(o.ctx[a], o.ctx[a] = v) && (!o.skip_bound && o.bound[a] && o.bound[a](v), _ && _e(e, a)), m;
  }) : [], o.update(), _ = !0, C(o.before_update), o.fragment = l ? l(o.ctx) : !1, t.target) {
    if (t.hydrate) {
      const a = Z(t.target);
      o.fragment && o.fragment.l(a), a.forEach(L);
    } else
      o.fragment && o.fragment.c();
    t.intro && fe(e.$$.fragment), ae(e, t.target, t.anchor, t.customElement), U();
  }
  S(s);
}
let W;
typeof HTMLElement == "function" && (W = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: e } = this.$$;
    this.$$.on_disconnect = e.map(H).filter(M);
    for (const t in this.$$.slotted)
      this.appendChild(this.$$.slotted[t]);
  }
  attributeChangedCallback(e, t, n) {
    this[e] = n;
  }
  disconnectedCallback() {
    C(this.$$.on_disconnect);
  }
  $destroy() {
    de(this, 1), this.$destroy = g;
  }
  $on(e, t) {
    if (!M(t))
      return g;
    const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return n.push(t), () => {
      const l = n.indexOf(t);
      l !== -1 && n.splice(l, 1);
    };
  }
  $set(e) {
    this.$$set && !X(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
});
const y = [];
function pe(e, t = g) {
  let n;
  const l = /* @__PURE__ */ new Set();
  function r(u) {
    if (K(e, u) && (e = u, n)) {
      const s = !y.length;
      for (const o of l)
        o[1](), y.push(o, e);
      if (s) {
        for (let o = 0; o < y.length; o += 2)
          y[o][0](y[o + 1]);
        y.length = 0;
      }
    }
  }
  function c(u) {
    r(u(e));
  }
  function i(u, s = g) {
    const o = [u, s];
    return l.add(o), l.size === 1 && (n = t(r) || g), u(e), () => {
      l.delete(o), l.size === 0 && n && (n(), n = null);
    };
  }
  return { set: r, update: c, subscribe: i };
}
const me = pe([]);
function V(e, t, n) {
  const l = e.slice();
  return l[11] = t[n], l;
}
function G(e) {
  let t, n, l, r, c = (
    /*folderOptions*/
    e[3]
  ), i = [];
  for (let u = 0; u < c.length; u += 1)
    i[u] = J(V(e, c, u));
  return {
    c() {
      t = h("select"), n = h("option"), n.textContent = "Select folder";
      for (let u = 0; u < i.length; u += 1)
        i[u].c();
      n.__value = "", n.value = n.__value, /*selectedFolder*/
      e[2] === void 0 && j(() => (
        /*select_change_handler_1*/
        e[8].call(t)
      ));
    },
    m(u, s) {
      F(u, t, s), d(t, n);
      for (let o = 0; o < i.length; o += 1)
        i[o] && i[o].m(t, null);
      q(
        t,
        /*selectedFolder*/
        e[2],
        !0
      ), l || (r = x(
        t,
        "change",
        /*select_change_handler_1*/
        e[8]
      ), l = !0);
    },
    p(u, s) {
      if (s & /*folderOptions*/
      8) {
        c = /*folderOptions*/
        u[3];
        let o;
        for (o = 0; o < c.length; o += 1) {
          const _ = V(u, c, o);
          i[o] ? i[o].p(_, s) : (i[o] = J(_), i[o].c(), i[o].m(t, null));
        }
        for (; o < i.length; o += 1)
          i[o].d(1);
        i.length = c.length;
      }
      s & /*selectedFolder, folderOptions*/
      12 && q(
        t,
        /*selectedFolder*/
        u[2]
      );
    },
    d(u) {
      u && L(t), Y(i, u), l = !1, r();
    }
  };
}
function J(e) {
  let t, n = (
    /*folder*/
    e[11].name + ""
  ), l, r;
  return {
    c() {
      t = h("option"), l = Q(n), t.__value = r = /*folder*/
      e[11].name, t.value = t.__value;
    },
    m(c, i) {
      F(c, t, i), d(t, l);
    },
    p(c, i) {
      i & /*folderOptions*/
      8 && n !== (n = /*folder*/
      c[11].name + "") && ee(l, n), i & /*folderOptions*/
      8 && r !== (r = /*folder*/
      c[11].name) && (t.__value = r, t.value = t.__value);
    },
    d(c) {
      c && L(t);
    }
  };
}
function ge(e) {
  let t, n, l, r, c, i, u, s, o, _, a, m, b, v, f = (
    /*type*/
    e[1] === "file" && G(e)
  );
  return {
    c() {
      t = h("div"), n = h("input"), l = A(), r = h("select"), c = h("option"), c.textContent = "Folder", i = h("option"), i.textContent = "File", u = A(), f && f.c(), s = A(), o = h("div"), _ = h("button"), _.textContent = "Save", a = A(), m = h("button"), m.textContent = "Cancel", this.c = g, O(n, "type", "text"), O(n, "placeholder", "Enter name"), n.required = !0, c.__value = "folder", c.value = c.__value, i.__value = "file", i.value = i.__value, /*type*/
      e[1] === void 0 && j(() => (
        /*select_change_handler*/
        e[7].call(r)
      )), O(o, "class", "button-container"), O(t, "class", "form-container");
    },
    m(p, w) {
      F(p, t, w), d(t, n), P(
        n,
        /*name*/
        e[0]
      ), d(t, l), d(t, r), d(r, c), d(r, i), q(
        r,
        /*type*/
        e[1],
        !0
      ), d(t, u), f && f.m(t, null), d(t, s), d(t, o), d(o, _), d(o, a), d(o, m), b || (v = [
        x(
          n,
          "input",
          /*input_input_handler*/
          e[6]
        ),
        x(
          r,
          "change",
          /*select_change_handler*/
          e[7]
        ),
        x(
          _,
          "click",
          /*addName*/
          e[4]
        ),
        x(
          m,
          "click",
          /*onCancel*/
          e[5]
        )
      ], b = !0);
    },
    p(p, [w]) {
      w & /*name*/
      1 && n.value !== /*name*/
      p[0] && P(
        n,
        /*name*/
        p[0]
      ), w & /*type*/
      2 && q(
        r,
        /*type*/
        p[1]
      ), /*type*/
      p[1] === "file" ? f ? f.p(p, w) : (f = G(p), f.c(), f.m(t, s)) : f && (f.d(1), f = null);
    },
    i: g,
    o: g,
    d(p) {
      p && L(t), f && f.d(), b = !1, C(v);
    }
  };
}
function be(e, t, n) {
  let l = "", r = "folder", c = "", i = [], u;
  const s = le();
  function o() {
    u = { name: l, type: r, selectedFolder: c }, s("nameAdded", u);
  }
  function _() {
    n(0, l = ""), n(1, r = "folder");
  }
  function a() {
    l = this.value, n(0, l);
  }
  function m() {
    r = R(this), n(1, r);
  }
  function b() {
    c = R(this), n(2, c), n(3, i);
  }
  return me.subscribe((v) => {
    n(3, i = v);
  }), [
    l,
    r,
    c,
    i,
    o,
    _,
    a,
    m,
    b
  ];
}
class ve extends W {
  constructor(t) {
    super();
    const n = document.createElement("style");
    n.textContent = ".form-container{display:flex;align-items:center}.form-container input,.form-container select{margin-right:10px}.button-container{margin-left:10px}", this.shadowRoot.appendChild(n), he(
      this,
      {
        target: this.shadowRoot,
        props: ne(this.attributes),
        customElement: !0
      },
      be,
      ge,
      K,
      {},
      null
    ), t && t.target && F(t.target, this, t.anchor);
  }
}
customElements.define("name-inpute", ve);
