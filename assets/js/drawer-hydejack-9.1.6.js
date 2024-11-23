/*!
 *  __  __                __                                     __
 * /\ \/\ \              /\ \             __                    /\ \
 * \ \ \_\ \   __  __    \_\ \      __   /\_\      __       ___ \ \ \/'\
 *  \ \  _  \ /\ \/\ \   /'_` \   /'__`\ \/\ \   /'__`\    /'___\\ \ , <
 *   \ \ \ \ \\ \ \_\ \ /\ \L\ \ /\  __/  \ \ \ /\ \L\.\_ /\ \__/ \ \ \\`\
 *    \ \_\ \_\\/`____ \\ \___,_\\ \____\ _\ \ \\ \__/.\_\\ \____\ \ \_\ \_\
 *     \/_/\/_/ `/___/> \\/__,_ / \/____//\ \_\ \\/__/\/_/ \/____/  \/_/\/_/
 *                 /\___/                \ \____/
 *                 \/__/                  \/___/
 *
 * Powered by Hydejack v9.1.6 <https://hydejack.com/>
 */
(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    167: function (e, t, a) {
      "use strict";
      a.r(t);
      var n,
        i = a(105),
        r = a(198),
        c = a(174),
        l = a(219),
        o = a(104),
        s = a(194),
        d = a(25),
        p = a(221),
        u = a(107),
        b = a(106),
        h = a(103),
        w = a(231),
        v = a(5);
      function m(e, t, a, n, i, r, c) {
        try {
          var l = e[r](c),
            o = l.value;
        } catch (e) {
          return void a(e);
        }
        l.done ? t(o) : Promise.resolve(o).then(n, i);
      }
      ((n = function* () {
        var e;
        yield Promise.all([
          ...("customElements" in window
            ? []
            : [
                a
                  .e(20)
                  .then(a.bind(null, 195))
                  .then(() =>
                    Promise.all([a.e(18), a.e(10)]).then(a.bind(null, 196))
                  ),
              ]),
          ...("ResizeObserver" in window
            ? []
            : [a.e(8).then(a.bind(null, 215))]),
        ]),
          yield v.v,
          yield v.u;
        var t = document.getElementById("_drawer"),
          n = document.getElementById("_sidebar"),
          m = null == n ? void 0 : n.querySelector(".sidebar-sticky");
        if (t && n && m) {
          null === (e = document.getElementById("_menu")) ||
            void 0 === e ||
            e.addEventListener("click", (e) => {
              e.preventDefault(), e.stopPropagation(), t.toggle();
            }),
            n
              .querySelectorAll('a[href^="/"]:not(.external)')
              .forEach((e) => e.addEventListener("click", () => t.close())),
            v.q && t.setAttribute("threshold", "0"),
            v.o || t.setAttribute("mouseevents", "");
          var [y, O] = v.k
              ? [
                  new CSSTransformValue([
                    new CSSTranslate(CSS.px(0), CSS.px(0)),
                  ]),
                  CSS.number(1),
                ]
              : [null, null],
            j = Object(r.a)(
              Object(v.h)(window.matchMedia(v.a)),
              Object(v.h)(window.matchMedia(v.b))
            ).pipe(
              Object(s.a)({}),
              Object(d.a)(() =>
                window.matchMedia(v.b).matches
                  ? 3
                  : window.matchMedia(v.a).matches
                  ? 2
                  : 1
              )
            ),
            f = Object(c.a)(t, "peek-width-change").pipe(
              Object(d.a)((e) => e.detail)
            ),
            g = Object(c.a)(window, "resize", { passive: !0 }).pipe(
              Object(s.a)({}),
              Object(d.a)(v.j)
            ),
            S = Object(l.a)(f, g).pipe(
              Object(d.a)((e) => {
                var [t, a] = e;
                return a / 2 - t / 2;
              })
            ),
            E = Object(r.a)(
              S.pipe(
                Object(d.a)(() =>
                  void 0 !== t.opacity ? 1 - t.opacity : k ? 0 : 1
                )
              ),
              Object(c.a)(t, "hy-drawer-move").pipe(
                Object(d.a)((e) => {
                  var {
                    detail: { opacity: t },
                  } = e;
                  return 1 - t;
                })
              )
            );
          t.addEventListener("hy-drawer-prepare", () => {
            (n.style.willChange = "transform"),
              (m.style.willChange = "opacity");
          }),
            t.addEventListener("hy-drawer-transitioned", () => {
              (n.style.willChange = ""), (m.style.willChange = "");
            });
          var C = Object(v.i)(),
            k =
              t.classList.contains("cover") &&
              C <= 0 &&
              !(history.state && history.state.closedOnce);
          k ||
            (history.state || history.replaceState({}, document.title),
            (history.state.closedOnce = !0),
            t.removeAttribute("opened"));
          var L,
            _ = Object(c.a)(t, "hy-drawer-transitioned").pipe(
              Object(d.a)((e) => e.detail),
              Object(p.a)(),
              Object(u.a)((e) => {
                var t, a;
                e ||
                  (null == (a = document.getElementById("_swipe")) ||
                    null === (t = a.parentNode) ||
                    void 0 === t ||
                    t.removeChild(a),
                  history.state || history.replaceState({}, document.title),
                  (history.state.closedOnce = !0));
              }),
              Object(s.a)(k)
            ),
            B = k ? null : t.getBoundingClientRect().height;
          t.addEventListener(
            "hy-drawer-init",
            () => {
              t.setAttribute("opened", ""); // This DOES WORK

              // Check if we are on the homepage
              if (window.location.pathname === "/") {
                // Add the 'opened' attribute to open the sidebar
                t.setAttribute("opened", "");
              } else {
                // Ensure the sidebar is closed on other pages
                t.removeAttribute("opened");
              }

              t.classList.add("loaded");

              console.log("t (using the if - else ) : ", t);
              //   t.classList.add("loaded"),
              (function (e) {
                var t = document.getElementById("_hrefSwipeSVG");
                if (t) {
                  var a,
                    n = document.createElement("img");
                  (n.id = "_swipe"),
                    (n.src = t.href),
                    (n.alt = "Swipe image"),
                    n.addEventListener("click", () => e.close()),
                    null === (a = document.getElementById("_sidebar")) ||
                      void 0 === a ||
                      a.appendChild(n);
                }
              })(t),
                // B && C >= B && window.scrollTo(0, C - B);
                // B && C >= B && window.scrollTo(0, 0);
                B && C >= B && window.scrollTo(0, B);
              console.log("C :", C);
              console.log("B :", B);
              console.log("n :", n);
            },
            { once: !0 }
          ),
            yield Promise.resolve().then(a.bind(null, 217)),
            (window._drawer = t),
            E.pipe(
              Object(b.a)(j, S),
              Object(u.a)((e) =>
                ((e, t, a) => {
                  var i = a * e,
                    r = t >= 2 ? 1 : 1 - e;
                  v.k
                    ? ((y[0].x.value = i),
                      (O.value = r),
                      n.attributeStyleMap.set("transform", y),
                      m.attributeStyleMap.set("opacity", O))
                    : ((n.style.transform = "translateX(".concat(i, "px)")),
                      (m.style.opacity = r));
                })(...e)
              )
            ).subscribe(),
            f
              .pipe(
                Object(b.a)(j),
                Object(d.a)((e) =>
                  (function (e, t) {
                    return t >= 2 ? [0, e] : v.p ? [35, 150] : [0, 150];
                  })(...e)
                ),
                Object(u.a)((e) => {
                  t.range = e;
                })
              )
              .subscribe(),
            Object(c.a)(document, "wheel", { passive: !1 })
              .pipe(
                ((L = _), (e) => L.pipe(Object(o.a)((t) => (t ? e : i.a)))),
                Object(h.a)((e) => e.deltaY > 0),
                Object(u.a)((e) => {
                  t.translateX > 0 && e.preventDefault();
                }),
                Object(w.a)(500),
                Object(u.a)(() => t.close())
              )
              .subscribe();
        }
      }),
      function () {
        var e = this,
          t = arguments;
        return new Promise(function (a, i) {
          var r = n.apply(e, t);
          function c(e) {
            m(r, a, i, c, l, "next", e);
          }
          function l(e) {
            m(r, a, i, c, l, "throw", e);
          }
          c(void 0);
        });
      })();
    },
  },
]);
