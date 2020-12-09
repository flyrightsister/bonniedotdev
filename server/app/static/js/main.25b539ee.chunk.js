(this['webpackJsonpbonniedotdev-frontend'] =
  this['webpackJsonpbonniedotdev-frontend'] || []).push([
  [0],
  {
    107: function (e, t, n) {},
    133: function (e, t, n) {},
    185: function (e, t, n) {
      'use strict';
      n.r(t);
      var a = n(2),
        o = (n(133), n(0)),
        r = n.n(o),
        c = n(21),
        i = n.n(c),
        s = n(20),
        l = n(221),
        u = n(237),
        j = n(38),
        p = n(11),
        d = n(124),
        b = '#25557A',
        h = '#4781A5',
        g = '#1A2838',
        O = '#E0E0E0',
        x = '#FFFFFF',
        f = 'rgba(0, 0, 0, 0.7)',
        m = 'rgba(240, 240, 240, 0.7)',
        v = Object(d.a)({
          palette: {
            background: { main: m, dark: f },
            primary: { light: x, main: g, contrastText: b },
            secondary: { main: h },
            warning: { main: '#ffc071', dark: '#ffb25e' },
            error: { main: '#F56866' },
            success: { main: '#69E065' },
          },
          typography: {
            fontFamily: "'Lato', sans-serif",
            fontSize: 14,
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 700,
            subtitle1: {
              fontFamily: "'Roboto Mono', monospace",
              fontSize: 14,
              fontWeightLight: 300,
              fontWeightRegular: 400,
              fontWeightMedium: 700,
            },
          },
        }),
        y = Object(p.a)(
          Object(p.a)({}, v),
          {},
          {
            palette: Object(p.a)(
              Object(p.a)({}, v.palette),
              {},
              {
                background: Object(p.a)(
                  Object(p.a)({}, v.palette.background),
                  {},
                  { placeholder: O }
                ),
              }
            ),
            typography: Object(p.a)(
              Object(p.a)({}, v.typography),
              {},
              {
                h1: Object(p.a)(
                  Object(p.a)({}, v.typography.h1),
                  {},
                  { letterSpacing: 0, fontSize: 32, fontWeight: 700 }
                ),
                h2: Object(p.a)(
                  Object(p.a)({}, v.typography.h2),
                  {},
                  { fontSize: 30, fontWeight: 700 }
                ),
                h3: Object(p.a)(
                  Object(p.a)({}, v.typography.h3),
                  {},
                  { fontSize: 24, fontWeight: 600 }
                ),
                h4: Object(p.a)(
                  Object(p.a)({}, v.typography.h4),
                  {},
                  { fontSize: 20 }
                ),
                h5: Object(p.a)(
                  Object(p.a)({}, v.typography.h5),
                  {},
                  { fontSize: 18, fontWeight: v.typography.fontWeightLight }
                ),
                h6: Object(p.a)(
                  Object(p.a)({}, v.typography.h6),
                  {},
                  { fontSize: 16 }
                ),
                subtitle1: Object(p.a)(
                  Object(p.a)({}, v.typography.subtitle1),
                  {},
                  { fontSize: 18 }
                ),
                body1: Object(p.a)(
                  Object(p.a)({}, v.typography.body2),
                  {},
                  { fontWeight: v.typography.fontWeightRegular, fontSize: 16 }
                ),
                body2: Object(p.a)(
                  Object(p.a)({}, v.typography.body1),
                  {},
                  { fontSize: 14 }
                ),
              }
            ),
          }
        ),
        A = n(217),
        w = n(240),
        I = n(121),
        B = n.n(I),
        R = n(239),
        S = 'SET_ALERT',
        E = 'SET_LOADING',
        N = 'SET_USER',
        D = 'SET_COURSES',
        C = 'SET_REVIEW_QUOTES';
      function z(e, t) {
        return { type: S, payload: { message: e, alertLevel: t } };
      }
      function L() {
        return { type: E, payload: !0 };
      }
      function k() {
        return { type: E, payload: !1 };
      }
      function M() {
        var e = Object(s.b)(),
          t = Object(s.c)(function (e) {
            return e.alert ? e.alert : { message: null, alertLevel: null };
          }),
          n = t.message,
          o = t.alertLevel,
          r = function (t, n) {
            'clickaway' !== n && e({ type: S });
          };
        return Object(a.jsx)(w.a, {
          anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
          open: null !== n,
          autoHideDuration: 6e3,
          onClose: r,
          action: Object(a.jsx)(A.a, {
            size: 'small',
            'aria-label': 'close',
            color: 'inherit',
            onClick: r,
            children: Object(a.jsx)(B.a, { fontSize: 'small' }),
          }),
          children: Object(a.jsx)(R.a, {
            onClose: r,
            severity: o,
            children: n,
          }),
        });
      }
      var G = n(241),
        Q = n(219),
        Z = n(218),
        T = Object(Z.a)(function (e) {
          return { backdrop: { zIndex: e.zIndex.drawer + 1, color: '#fff' } };
        });
      function K() {
        var e = T();
        return Object(a.jsx)(G.a, {
          className: e.backdrop,
          open: !0,
          children: Object(a.jsx)(Q.a, { color: 'inherit' }),
        });
      }
      var J = n(34),
        H = n(222),
        V = n(242),
        F = n(243),
        X = n(189),
        W = n(32),
        U = n.n(W),
        Y = n(223),
        P = n(238),
        q = n(59),
        _ = U()(function () {
          return {
            tab: {
              fontFamily: "'Roboto Mono', monospace",
              fontVariant: 'normal',
              textTransform: 'none',
              letterSpacing: '0.1em',
            },
            bonnie: {
              fontFamily: "'Lato', sans-serif",
              fontVariant: 'normal',
              textTransform: 'none',
              letterSpacing: '0.05em',
            },
          };
        });
      function $() {
        var e = _(),
          t = window.location.pathname,
          n = Object(o.useState)(t),
          r = Object(J.a)(n, 2),
          c = r[0],
          i = r[1],
          s = Object(a.jsxs)(X.a, {
            children: [
              Object(a.jsx)(V.a, {
                alt: 'bonnie.dev',
                src:
                  'data:image/png;base64,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',
              }),
              Object(a.jsx)(F.a, {
                color: 'primary.light',
                pl: 2,
                children: Object(a.jsx)(q.a, {
                  className: e.bonnie,
                  children: 'bonnie.dev',
                }),
              }),
            ],
          });
        return Object(a.jsx)(H.a, {
          children: Object(a.jsx)(F.a, {
            bgcolor: 'background.dark',
            color: 'primary.light',
            position: 'static',
            children: Object(a.jsxs)(P.a, {
              value: c,
              onChange: function (e, t) {
                i(t);
              },
              children: [
                Object(a.jsx)(Y.a, {
                  className: e.tab,
                  label: s,
                  value: '/',
                  component: j.b,
                  to: '/',
                }),
                Object(a.jsx)(Y.a, {
                  className: e.tab,
                  label: 'courses',
                  value: '/courses',
                  component: j.b,
                  to: '/courses',
                }),
                Object(a.jsx)(Y.a, {
                  className: e.tab,
                  label: 'about',
                  value: '/about',
                  component: j.b,
                  to: '/about',
                }),
              ],
            }),
          }),
        });
      }
      n(107);
      var ee = n(236),
        te = n(14);
      function ne() {
        return Object(a.jsxs)(F.a, {
          component: 'section',
          mt: 4,
          mb: 4,
          p: 2,
          pt: 2,
          children: [
            Object(a.jsx)(q.a, {
              variant: 'h2',
              gutterBottom: !0,
              children: 'About Bonnie',
            }),
            Object(a.jsx)(q.a, {
              style: { fontSize: 16, fontWeight: 500 },
              children:
                "Bonnie's wide-ranging past positions include high school physics teacher, education programs at a planetarium, developer support engineer, coding boot camp instructor, and engineer for developer infrastructure (specifically test frameworks). All of her favorite jobs have involved explaining technical concepts in some form, and she's pleased as punch to be producing online content full-time. She feels weird writing about herself in the third person.",
            }),
          ],
        });
      }
      var ae,
        oe,
        re = n(28),
        ce = n.n(re),
        ie = n(47),
        se = n(224),
        le = n(225),
        ue = {
          reviewQuotesURL: '/api/review_quotes',
          loginURL: '/api/login',
          coursesURL: '/api/courses',
        },
        je = n(122),
        pe = n.n(je);
      function de(e, t) {
        return be.apply(this, arguments);
      }
      function be() {
        return (be = Object(ie.a)(
          ce.a.mark(function e(t, n) {
            var a, o, r;
            return ce.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (a = null),
                        (o = 'There was a problem connecting to the server'),
                        t(L()),
                        (e.prev = 4),
                        (e.next = 7),
                        pe()(n)
                      );
                    case 7:
                      (r = e.sent),
                        (a = null === r || void 0 === r ? void 0 : r.data),
                        (e.next = 14);
                      break;
                    case 11:
                      (e.prev = 11), (e.t0 = e.catch(4)), t(z(o, oe.error));
                    case 14:
                      return t(k()), e.abrupt('return', a);
                    case 16:
                    case 'end':
                      return e.stop();
                  }
              },
              e,
              null,
              [[4, 11]]
            );
          })
        )).apply(this, arguments);
      }
      !(function (e) {
        (e.get = 'get'),
          (e.GET = 'GET'),
          (e.delete = 'delete'),
          (e.DELETE = 'DELETE'),
          (e.head = 'head'),
          (e.HEAD = 'HEAD'),
          (e.options = 'options'),
          (e.OPTIONS = 'OPTIONS'),
          (e.post = 'post'),
          (e.POST = 'POST'),
          (e.put = 'put'),
          (e.PUT = 'PUT'),
          (e.patch = 'patch'),
          (e.PATCH = 'PATCH'),
          (e.purge = 'purge'),
          (e.PURGE = 'PURGE'),
          (e.link = 'link'),
          (e.LINK = 'LINK'),
          (e.unlink = 'unlink'),
          (e.UNLINK = 'UNLINK');
      })(ae || (ae = {})),
        (function (e) {
          (e.error = 'error'),
            (e.info = 'info'),
            (e.warning = 'warning'),
            (e.success = 'success');
        })(oe || (oe = {}));
      var he = function () {
          return de;
        },
        ge = U()(function () {
          return {
            quoteGrid: { display: 'flex', alignItems: 'stretch' },
            quoteBox: {
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '25px 25px 0px 25px',
              width: '100%',
              justifyContent: 'space-between',
            },
            courseLink: {
              fontFamily: "'Lato', sans-serif",
              fontVariant: 'normal',
              textTransform: 'none',
              '&:hover': { opacity: 0.8 },
            },
            courseLinkBox: { alignSelf: 'flex-end', textAlign: 'right' },
          };
        });
      function Oe() {
        var e = Object(s.b)(),
          t = Object(s.c)(function (e) {
            return e.reviewQuotes;
          }),
          n = ge(),
          r = he();
        return (
          Object(o.useEffect)(
            function () {
              (function () {
                var t = Object(ie.a)(
                  ce.a.mark(function t() {
                    var n, a;
                    return ce.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              r(e, { method: ae.GET, url: ue.reviewQuotesURL })
                            );
                          case 2:
                            (n = t.sent),
                              (a = n),
                              null !== n &&
                                (null === n || void 0 === n
                                  ? void 0
                                  : n.length) > 1 &&
                                (a = n.sort(function (e, t) {
                                  return e.body.length - t.body.length;
                                })),
                              e({ type: C, payload: a });
                          case 6:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function () {
                  return t.apply(this, arguments);
                };
              })()();
            },
            [e, r]
          ),
          Object(a.jsxs)(F.a, {
            component: 'section',
            mt: 4,
            mb: 4,
            p: 2,
            pt: 2,
            children: [
              Object(a.jsx)(q.a, {
                variant: 'h2',
                gutterBottom: !0,
                children: 'Students say...',
              }),
              Object(a.jsx)(se.a, {
                container: !0,
                spacing: 3,
                children: t.map(function (e) {
                  return Object(a.jsx)(
                    se.a,
                    {
                      item: !0,
                      className: n.quoteGrid,
                      xs: 12,
                      sm: 6,
                      md: 4,
                      children: Object(a.jsxs)(
                        F.a,
                        {
                          className: n.quoteBox,
                          p: 3,
                          pt: 3,
                          pb: 3,
                          color: 'primary.main',
                          bgcolor: 'background.main',
                          children: [
                            Object(a.jsx)(F.a, {
                              fontStyle: 'italic',
                              children: Object(a.jsx)(q.a, {
                                component: 'p',
                                children: e.body,
                              }),
                            }),
                            Object(a.jsx)(le.a, {
                              className: n.courseLink,
                              underline: 'none',
                              href: e.courseLink,
                              target: '_blank',
                              rel: 'noreferrer',
                              children: Object(a.jsx)(F.a, {
                                className: n.courseLinkBox,
                                color: 'secondary.main',
                                fontSize: 12,
                                mt: 2,
                                children: Object(a.jsx)(q.a, {
                                  children: e.courseName,
                                }),
                              }),
                            }),
                          ],
                        },
                        e.id
                      ),
                    },
                    e.id
                  );
                }),
              }),
            ],
          })
        );
      }
      function xe() {
        return Object(a.jsxs)(F.a, {
          children: [Object(a.jsx)(ne, {}), Object(a.jsx)(Oe, {})],
        });
      }
      function fe() {
        Object(s.c)(function (e) {
          return e.user;
        });
        return Object(a.jsx)('div', {});
      }
      var me = n(226),
        ve = n(227),
        ye = n(230),
        Ae = n(229),
        we = n(228),
        Ie = n(231),
        Be = n(123),
        Re = n.n(Be);
      function Se(e) {
        var t = e.courseLink,
          n = e.couponData,
          o = ''.concat(t, '?couponCode=').concat(n.code),
          r = Intl.DateTimeFormat().resolvedOptions().timeZone,
          c = Re()(n.utcExpiration).tz(r).format('MMM DD ha z');
        return Object(a.jsxs)(F.a, {
          display: 'flex',
          children: [
            Object(a.jsx)(F.a, {
              p: 1,
              flex: 'auto',
              children: Object(a.jsx)(X.a, {
                target: '_blank',
                href: o,
                rel: 'noreferrer',
                color: 'secondary',
                children: Object(a.jsx)(q.a, {
                  variant: 'button',
                  display: 'block',
                  gutterBottom: !0,
                  children: 'Coupon for $'.concat(n.price),
                }),
              }),
            }),
            Object(a.jsx)(F.a, {
              p: 2,
              flex: 'auto',
              children: Object(a.jsxs)(q.a, {
                role: 'note',
                variant: 'body2',
                display: 'block',
                color: 'textSecondary',
                children: [
                  Object(a.jsx)('strong', { children: 'EXPIRES' }),
                  ' ',
                  c,
                ],
              }),
            }),
          ],
        });
      }
      var Ee = Object(Z.a)(function () {
        return {
          root: { minHeight: 300 },
          header: {
            height: '3em',
            verticalAlign: 'top',
            fontWeight: 700,
            color: b,
          },
          media: { height: 0, paddingTop: '56.25%' },
        };
      });
      function Ne(e) {
        var t = e.courseData,
          n = ''.concat('', '/images/course-images'),
          o = Ee();
        return Object(a.jsxs)(me.a, {
          className: o.root,
          children: [
            Object(a.jsxs)(ve.a, {
              href: t.link,
              target: '_blank',
              rel: 'noreferrer',
              children: [
                Object(a.jsx)(we.a, {
                  className: o.media,
                  image: ''.concat(n, '/').concat(t.imageName),
                  title: 'Course Image',
                }),
                Object(a.jsx)(Ae.a, { className: o.header, title: t.name }),
                Object(a.jsx)(ye.a, {
                  children: Object(a.jsx)(q.a, {
                    component: 'p',
                    children: t.description,
                  }),
                }),
              ],
            }),
            Object(a.jsx)(Ie.a, { variant: 'middle' }),
            t.bestCoupon
              ? Object(a.jsx)(Se, {
                  couponData: t.bestCoupon,
                  courseLink: t.link,
                })
              : null,
          ],
        });
      }
      function De() {
        var e = Object(s.b)(),
          t = Object(s.c)(function (e) {
            return e.courses;
          }),
          n = he();
        return (
          Object(o.useEffect)(
            function () {
              (function () {
                var t = Object(ie.a)(
                  ce.a.mark(function t() {
                    var a;
                    return ce.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              n(e, { method: ae.GET, url: ue.coursesURL })
                            );
                          case 2:
                            (a = t.sent), e({ type: D, payload: a });
                          case 4:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function () {
                  return t.apply(this, arguments);
                };
              })()();
            },
            [e, n]
          ),
          Object(a.jsxs)(a.Fragment, {
            children: [
              Object(a.jsx)('h1', { children: 'Courses' }),
              Object(a.jsx)(se.a, {
                container: !0,
                spacing: 3,
                children:
                  null === t || void 0 === t
                    ? void 0
                    : t.map(function (e) {
                        return Object(a.jsx)(
                          se.a,
                          {
                            item: !0,
                            xs: 12,
                            sm: 6,
                            md: 4,
                            children: Object(a.jsx)(Ne, { courseData: e }),
                          },
                          e.id
                        );
                      }),
              }),
            ],
          })
        );
      }
      var Ce = n(232),
        ze = n(233),
        Le = n(234),
        ke = n(235);
      function Me(e) {
        var t = e.icon,
          n = e.target,
          o = e.label;
        return Object(a.jsx)(
          A.a,
          {
            'aria-label': o,
            color: 'primary',
            href: n,
            target: '_blank',
            rel: 'noreferrer',
            children: t,
          },
          o
        );
      }
      function Ge() {
        return Object(a.jsxs)(Ce.a, {
          variant: 'text',
          'aria-label': 'text primary button group social-media',
          children: [
            Object(a.jsx)(Me, {
              icon: Object(a.jsx)(ze.a, {}),
              target: 'https://www.linkedin.com/in/bonnie-schulkin/',
              label: 'linked-in',
            }),
            Object(a.jsx)(Me, {
              icon: Object(a.jsx)(Le.a, {}),
              target: 'https://twitter.com/bonniedotdev/',
              label: 'twitter',
            }),
            Object(a.jsx)(Me, {
              icon: Object(a.jsx)(ke.a, {}),
              target: 'http://github.com/bonnie',
              label: 'github',
            }),
          ],
        });
      }
      var Qe = U()(function () {
        return {
          subtitle: {
            fontFamily: "'Roboto Mono', monospace",
            letterSpacing: '0.1em',
            fontSize: 20,
            fontWeight: 600,
          },
        };
      });
      function Ze() {
        var e = Qe();
        return Object(a.jsxs)(F.a, {
          pt: 10,
          textAlign: 'center',
          children: [
            Object(a.jsx)(F.a, {
              m: 3,
              children: Object(a.jsx)(q.a, {
                variant: 'h1',
                gutterBottom: !0,
                children: 'Bonnie Schulkin',
              }),
            }),
            Object(a.jsx)(F.a, {
              m: 3,
              children: Object(a.jsx)(q.a, {
                className: e.subtitle,
                gutterBottom: !0,
                children: 'teacher | coder',
              }),
            }),
            Object(a.jsx)(Ge, {}),
          ],
        });
      }
      var Te = n.p + 'static/media/ashamedGus.cbe8144e.jpg',
        Ke = n.p + 'static/media/carefreeMoxie.b629d9bf.jpg',
        Je = n.p + 'static/media/concernedGus.73dd4025.jpg',
        He = n.p + 'static/media/distraughtGus.49cbcd52.jpg',
        Ve = n.p + 'static/media/featherGus.428d296d.jpg',
        Fe = n.p + 'static/media/gusPlant.3eb5ab29.jpg',
        Xe = n.p + 'static/media/sleepingKittens.f7534e41.jpg',
        We = U()(function () {
          return {
            kittenImage: {
              width: '100%',
              maxWidth: '512px',
              boxShadow:
                '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            },
          };
        });
      function Ue() {
        var e = We(),
          t = [Je, Xe, Te, He, Ke, Ve, Fe],
          n = [
            'Gus is very concerned.',
            'Moxie and Gus will get right on that.',
            'Gus is ashamed.',
            'Gus is distraught.',
            'Moxie is very concerned.',
            'Gus will make the feather pay.',
            "Gus swears it wasn't him.",
          ],
          o = Math.floor(Math.random() * n.length),
          r = t[o],
          c = n[o];
        return Object(a.jsx)(F.a, {
          m: 5,
          children: Object(a.jsxs)(se.a, {
            container: !0,
            children: [
              Object(a.jsxs)(se.a, {
                item: !0,
                xs: 12,
                children: [
                  Object(a.jsx)(q.a, {
                    variant: 'h1',
                    gutterBottom: !0,
                    children: 'Oops!',
                  }),
                  Object(a.jsx)(q.a, {
                    variant: 'subtitle1',
                    gutterBottom: !0,
                    children: "That page doesn't exist.",
                  }),
                ],
              }),
              Object(a.jsx)(Ie.a, {}),
              Object(a.jsx)(se.a, {
                item: !0,
                xs: 12,
                children: Object(a.jsxs)(F.a, {
                  pt: 5,
                  textAlign: 'center',
                  children: [
                    Object(a.jsx)(q.a, {
                      variant: 'h3',
                      gutterBottom: !0,
                      children: c,
                    }),
                    Object(a.jsx)('img', {
                      className: e.kittenImage,
                      src: r,
                      alt: 'silly kitten',
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      function Ye() {
        return Object(a.jsx)(ee.a, {
          children: Object(a.jsxs)(te.c, {
            children: [
              Object(a.jsx)(te.a, { exact: !0, path: '/', component: Ze }),
              Object(a.jsx)(te.a, { path: '/courses', component: De }),
              Object(a.jsx)(te.a, { path: '/about', component: xe }),
              Object(a.jsx)(te.a, { path: '/login', component: fe }),
              Object(a.jsx)(te.a, { path: '/logout', component: fe }),
              Object(a.jsx)(te.a, { path: '*', component: Ue }),
            ],
          }),
        });
      }
      function Pe() {
        var e = Object(s.c)(function (e) {
          return e.loading;
        });
        return Object(a.jsxs)(l.a, {
          theme: y,
          children: [
            e ? Object(a.jsx)(K, {}) : null,
            Object(a.jsx)(M, {}),
            Object(a.jsxs)(j.a, {
              children: [
                Object(a.jsx)(u.a, { children: Object(a.jsx)($, {}) }),
                Object(a.jsx)(Ye, {}),
              ],
            }),
          ],
        });
      }
      var qe = n(44);
      var _e = Object(qe.b)({
          user: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case N:
                return t.payload ? t.payload : null;
              default:
                return e;
            }
          },
          courses: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case D:
                return t.payload ? t.payload : [];
              default:
                return e;
            }
          },
          alert: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : null,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case S:
                return t.payload ? t.payload : null;
              default:
                return e;
            }
          },
          loading: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case E:
                return t.payload;
              default:
                return e;
            }
          },
          reviewQuotes: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case C:
                return t.payload ? t.payload : [];
              default:
                return e;
            }
          },
        }),
        $e = Object(qe.c)(_e);
      i.a.render(
        Object(a.jsx)(r.a.StrictMode, {
          children: Object(a.jsx)(s.a, {
            store: $e,
            children: Object(a.jsx)(Pe, {}),
          }),
        }),
        document.getElementById('root')
      );
    },
  },
  [[185, 1, 2]],
]);
//# sourceMappingURL=main.25b539ee.chunk.js.map
