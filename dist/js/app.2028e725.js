(function (t) { function e (e) { for (var n, i, s = e[0], u = e[1], c = e[2], l = 0, d = []; l < s.length; l++)i = s[l], Object.prototype.hasOwnProperty.call(r, i) && r[i] && d.push(r[i][0]), r[i] = 0; for (n in u)Object.prototype.hasOwnProperty.call(u, n) && (t[n] = u[n]); p && p(e); while (d.length)d.shift()(); return a.push.apply(a, c || []), o() } function o () { for (var t, e = 0; e < a.length; e++) { for (var o = a[e], n = !0, i = 1; i < o.length; i++) { const u = o[i]; r[u] !== 0 && (n = !1) }n && (a.splice(e--, 1), t = s(s.s = o[0])) } return t } let n = {}; var r = { app: 0 }; var a = []; function i (t) { return s.p + 'dist/js/' + ({}[t] || t) + '.' + { 'chunk-2d0cc81a': '40c7596c', 'chunk-2d228878': '75d0229c' }[t] + '.js' } function s (e) { if (n[e]) return n[e].exports; const o = n[e] = { i: e, l: !1, exports: {} }; return t[e].call(o.exports, o, o.exports, s), o.l = !0, o.exports }s.e = function (t) { const e = []; let o = r[t]; if (o !== 0) if (o)e.push(o[2]); else { const n = new Promise(function (e, n) { o = r[t] = [e, n] }); e.push(o[2] = n); let a; let u = document.createElement('script'); u.charset = 'utf-8', u.timeout = 120, s.nc && u.setAttribute('nonce', s.nc), u.src = i(t); const c = new Error(); a = function (e) { u.onerror = u.onload = null, clearTimeout(l); const o = r[t]; if (o !== 0) { if (o) { const n = e && (e.type === 'load' ? 'missing' : e.type); let a = e && e.target && e.target.src; c.message = 'Loading chunk ' + t + ' failed.\n(' + n + ': ' + a + ')', c.name = 'ChunkLoadError', c.type = n, c.request = a, o[1](c) }r[t] = void 0 } }; var l = setTimeout(function () { a({ type: 'timeout', target: u }) }, 12e4); u.onerror = u.onload = a, document.head.appendChild(u) } return Promise.all(e) }, s.m = t, s.c = n, s.d = function (t, e, o) { s.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o }) }, s.r = function (t) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(t, '__esModule', { value: !0 }) }, s.t = function (t, e) { if (1 & e && (t = s(t)), 8 & e) return t; if (4 & e && typeof t === 'object' && t && t.__esModule) return t; const o = Object.create(null); if (s.r(o), Object.defineProperty(o, 'default', { enumerable: !0, value: t }), 2 & e && typeof t!=='string') for (const n in t)s.d(o, n, function (e) { return t[e] }.bind(null, n)); return o }, s.n = function (t) { const e = t && t.__esModule ? function () { return t.default } : function () { return t }; return s.d(e, 'a', e), e }, s.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, s.p = '/', s.oe = function (t) { throw console.error(t), t }; let u = window.webpackJsonp = window.webpackJsonp || []; let c = u.push.bind(u); u.push = e, u = u.slice(); for (let l = 0; l < u.length; l++)e(u[l]); var p = c; a.push([0, 'chunk-vendors']), o() })({ 0: function (t, e, o) { t.exports = o('56d7') }, '56d7': function (t, e, o) { 'use strict'; o.r(e); o('e260'), o('e6cf'), o('cca6'), o('a79d'); const n = o('2b0e'); let r = o('5f5b'); o('ab8b'), o('2dd8'); n.default.use(r.a); const a = function () { const t = this; let e = t.$createElement; let o = t._self._c || e; return o('div', { attrs: { id: 'app' } }, [o('Navbar'), o('Jumbotron'), o('router-view')], 1) }; let i = []; let s = o('5530'); let u = o('2f62'); let c = function () { let t = this; var e=t.$createElement; var  o = t._self._c || e; return o('b-navbar', { staticClass: 'm-0 p-0 shadow-lg', attrs: { sticky: '', variant: 'light' } }, [o('Branding'), 'notIn' === t.isLoggedIn ? o('LogIn'):t._e(), 'notIn' === t.isLoggedIn ? o('SignUp'):t._e(), 'In' === t.isLoggedIn ? o('LogOut'):t._e()], 1) }; let l = []; let p = function () { let t = this; var e=t.$createElement; var  o = t._self._c || e; return o('b-img', { staticClass: 'ml-2 ml-md-4', attrs: { src: 'https://images.apilist.fun/the_lord_of_the_rings_api_api.png', width: '100px', alt: 'Lord of the Rings' } }) }; let d = []; let f = o('2877'); let m = {}; let h = Object(f.a)(m, p, d, !1, null, null, null); let v = h.exports; let g = function () { let t = this; var e=t.$createElement; var  o = t._self._c || e; return o('div', { staticClass: 'ml-auto mr-3' }, [o('b-button', { staticClass: 'pl-4 pr-4 rounded-lg', attrs: { id: 'login-tooltip-target', size: 'sm', variant: 'dark' } }, [t._v('Login')]), o('b-tooltip', { attrs: { target: 'login-tooltip-target', variant: 'primary', triggers: 'hover' } }, [o('b-form', { staticClass: 'm-2', on: { submit: function (e) { return e.preventDefault(), t.onLogin.apply(null, arguments) } } }, [o('b-form-group', { attrs: { id: 'input-group-1', label: 'Username:', 'label-for': 'username-login-input' } }, [o('b-form-input', { attrs: { id: 'username-login-input', placeholder: 'Comrad', required: '' }, model: { value: t.form.userName, callback: function (e) { t.$set(t.form, 'userName', e) }, expression: 'form.userName' } })], 1), o('b-form-group', { attrs: { id: 'input-group-2', label: 'Password:', 'label-for': 'password-login-input' } }, [o('b-form-input', { attrs: { id: 'password-login-input', type: 'password', placeholder: 'Viv4L4V36as', required: '' }, model: { value: t.form.password, callback: function (e) { t.$set(t.form, 'password', e) }, expression: 'form.password' } })], 1), o('b-button', { staticClass: 'pl-4 pr-4 rounded-lg', attrs: { size: 'sm', variant: 'info' }, on: { click: t.onLogin } }, [t._v('Login')])], 1)], 1)], 1) }; let b = []; let k = o('bc3a'); let w = o.n(k); let y = { name: 'Login', data: function () { return { form: { userName: '', password: '' } } }, methods: Object(s.a)(Object(s.a)({}, Object(u.b)(['loadMovies'])), {}, { onLogin: function () { let t = this; try { w.a.post('https://boiling-savannah-16664.herokuapp.com/api/auth/login', this.form).then(function(e){if(200===e.status)return window.sessionStorage.setItem("token",JSON.stringify(e.data.token)),t.$store.dispatch("loadMovies"),t.$store.dispatch("logIn",{userID:JSON.stringify(e.data.user_id),token:e.data.token}),"/"===t.$router.currentRoute.path?t.$router.push("/Books"):("/Books"===t.$router.currentRoute.path||"/Movies"===t.$router.currentRoute.path)&&t.$router.push("/"),console.log("Successful Login!")}).catch(function(t){return console.log("Something went wrong: "+t)}) }catch (e) { console.log(e) } } }) }; let O = y; let j = Object(f.a)(O, g, b, !1, null, null, null); let _ = j.exports; let S = function () { let t = this; var e=t.$createElement; var  o = t._self._c || e; return o('div', { staticClass: 'mr-2 mr-md-5' }, [o('b-button', { staticClass: 'pl-4 pr-4 rounded-lg', attrs: { id: 'signup-tooltip-target', size: 'sm', variant: 'dark' } }, [t._v('Sign up')]), o('b-tooltip', { attrs: { target: 'signup-tooltip-target', variant: 'primary', triggers: 'hover' } }, [o('b-form', { attrs: { enctype: 'multipart/form-data' }, on: { submit: function (e) { return e.preventDefault(), t.signUp.apply(null, arguments) } } }, [o('b-form', { staticClass: 'm-2' }, [o('b-form-group', { attrs: { id: 'input-group-1', label: 'Username:', 'label-for': 'username-signup-input' } }, [o('b-form-input', { attrs: { id: 'username-signup-input', type: 'text', placeholder: 'Username', required: '' }, model: { value: t.form.userName, callback: function (e) { t.$set(t.form, 'userName', e) }, expression: 'form.userName' } })], 1), o('b-form-group', { attrs: { id: 'input-group-2', label: 'Password:', 'label-for': 'password-signup-input' } }, [o('b-form-input', { attrs: { id: 'password-signup-input', type: 'password', placeholder: 'Password', required: '' }, model: { value: t.form.password, callback: function (e) { t.$set(t.form, 'password', e) }, expression: 'form.password' } })], 1), o('b-button', { staticClass: 'pl-4 pr-4 rounded-lg', attrs: { size: 'sm', variant: 'info' }, on: { click: t.onSignUp } }, [t._v('Submit')])], 1)], 1)], 1)], 1) }; let B = []; let M = { name: 'SignUp', data: function () { return { form: { userName: '', password: '' } } }, methods: { onSignUp: function () { try { w.a.post('https://boiling-savannah-16664.herokuapp.com/api/auth/signup', this.form).then(function(t){if(200===t.status)return console.log("Successful Sign up!")}).catch(function(t){return 409===t.response.status?console.log("Existing User!"):console.log("Something went wrong: "+t)}) }catch (t) { console.log(t) } } } }; let I = M; let $ = Object(f.a)(I, S, B, !1, null, null, null); let T = $.exports; let x = function () { let t = this; var e=t.$createElement; var  o = t._self._c || e; return o('div', { staticClass: 'ml-auto mr-2 mr-md-5' }, [o('b-button', { staticClass: 'pl-4 pr-4 rounded-lg', attrs: { size: 'sm', variant: 'dark' }, on: { click: t.logOut } }, [t._v('Logout')])], 1) }; let C = []; let L = { methods: { logOut: function () { location.reload(), window.sessionStorage.clear() } } }; let U = L; let F = Object(f.a)(U, x, C, !1, null, null, null); let P = F.exports; let D = { components: { Branding: v, LogIn: _, SignUp: T, LogOut: P }, computed: { isLoggedIn: function () { return this.$store.state.Status } } }; let E = D; let N = Object(f.a)(E, c, l, !1, null, null, null); let J = N.exports; let A = function () { let t = this; var e=t.$createElement; var  o = t._self._c || e; return o('div', [o('b-jumbotron', { staticClass: 'shadow-lg rounded-0 ml-auto mr-auto', staticStyle: { 'max-width': '85vw' }, attrs: { 'bg-variant': 'light' }, scopedSlots: t._u([{ key: 'header', fn: function () { return [t._v('Welcome people!')] }, proxy: !0 }, { key: 'lead', fn: function () { return [t._v(" Here we've collected all the Books and Movies written by J.R.R Tolkien, directed by Peter Jackson. ")] }, proxy: !0 }]) }, [o('hr', { staticClass: 'my-4' }), o('p', [t._v(' You can find book and movie chapters, characters, quotes and - if you register - you can mark your favourites and share them with your friends. ')]), o('b-button', { staticClass: 'mr-3', attrs: { variant: 'primary' }, on: { click: t.listBooks } }, [t._v('List books')]), o('b-button', { attrs: { variant: 'primary' }, on: { click: t.listMovies } }, [t._v('List movies')])], 1)], 1) }; let q = []; let z = { components: {}, data: function () { return {} }, methods: { listBooks: function () { if ('/Books' !== this.$route.path) return this.$router.push('/Books') }, listMovies: function () { if ('/Movies' !== this.$route.path) return this.$router.push('/Movies') } } }; let R = z; let H = Object(f.a)(R, A, q, !1, null, null, null); let G = H.exports; let Q = { components: { Navbar: J, Jumbotron: G }, computed: Object(s.a)({}, Object(u.c)(['getAllBooks', 'getAllMovies'])), methods: Object(s.a)({}, Object(u.b)(['loadBooks', 'loadMovies'])), mounted: function () { return this.$store.dispatch('loadBooks'), this.$store.dispatch('loadMovies') }, created: function () { return this.getAllBooks, this.getAllMovies } }; let V = Q; let X = Object(f.a)(V, a, i, !1, null, null, null); let Z = X.exports; let W = (o('d3b7'), o('3ca3'), o('ddb0'), o('8c4f')); let Y = function () { let t = this; var e=t.$createElement; var  o = t._self._c || e; return o('div', { staticClass: 'home' }) }; let K = []; let tt = { name: 'Home', components: {} }; let et = tt; let ot = Object(f.a)(et, Y, K, !1, null, null, null); let nt = ot.exports; n.default.use(W.a); const rt = [{ path: '/', name: 'Home', component: nt }, { path: '/Books', name: 'Books', component: function () { return o.e('chunk-2d0cc81a').then(o.bind(null, '4de9')) } }, { path: '/Movies', name: 'Movies', component: function () { return o.e('chunk-2d228878').then(o.bind(null, 'da27')) } }]; let at = new W.a({ mode: 'history', base: '/', routes: rt }); let it = at; n.default.use(u.a); const st = new u.a.Store({ state: { Status: 'notIn', User: [], Books: [], Movies: [], FavouriteBooks: [], FavouriteMovies: [] }, mutations: { logIn: function (t, e) { t.Status = 'In', t.User = e }, allBook: function (t, e) { t.Books = e }, allMovie: function (t, e) { t.Movies = e }, loadedFavouriteBooks: function (t, e) { t.FavouriteBooks = e }, loadedFavouriteMovies: function (t, e) { t.FavouriteMovies = e } }, actions: { logIn: function (t, e) { const o = t.commit; let n = e.userID; let r = e.token; o('logIn', { userID: n, token: r }) }, loadBooks: function (t) { const e = t.commit; let o = 'https://the-one-api.dev/v2'; let n = '/book'; let r = { method: 'GET', headers: { Authorization: 'Bearer 8Qsn-meqZp4taXj_yUBI' } }; window.fetch(o + n, r).then(function (t) { return t.json() }).then(function (t) { e('allBook', t) }).catch(function (t) { return console.log(t) }) }, loadMovies: function (t) { const e = t.commit; let o = 'https://the-one-api.dev/v2'; let n = '/movie'; let r = { method: 'GET', headers: { Authorization: 'Bearer 8Qsn-meqZp4taXj_yUBI' } }; window.fetch(o + n, r).then(function (t) { return t.json() }).then(function (t) { e('allMovie', t) }).catch(function (t) { return console.log(t) }) }, addToFavourites: function (t, e) { const o = t.getters; let n = t.dispatch; let r = e.activeUserID; let a = e.movieID; let i = e.bookID; let u = 'https://boiling-savannah-16664.herokuapp.com/'; let c = 'api/favourites/add'; return new Promise(function (t, e) { if (r && i) { let l = { method: 'POST', headers: Object(s.a)(Object(s.a)({}, o.getToken), {}, { 'Content-Type': 'application/json' }), body: JSON.stringify({ activeUserID: r, bookID: i }) }; window.fetch(u + c, l).then(function(e){n("loadFavouriteBooks"),t(e)}).catch(function(t){e(t)}) } else if (r && a) { let p = { method: 'POST', headers: Object(s.a)(Object(s.a)({}, o.getToken), {}, { 'Content-Type': 'application/json' }), body: JSON.stringify({ activeUserID: r, movieID: a }) }; window.fetch(u + c, p).then(function(e){n("loadFavouriteMovies"),t(e)}).catch(function(t){e(t)}) } }) }, loadFavouriteBooks: function (t, e) { const o = t.commit; let n = t.getters; let r = 'https://boiling-savannah-16664.herokuapp.com/'; let a = 'api/favourites/books'; let i = { method: 'POST', headers: Object(s.a)(Object(s.a)({}, n.getToken), {}, { 'Content-Type': 'application/json' }), body: JSON.stringify(e) }; window.fetch(r + a, i).then(function (t) { return t.json() }).then(function (t) { o('loadedFavouriteBooks', t) }).catch(function (t) { return console.log(t) }) }, loadFavouriteMovies: function (t, e) { const o = t.commit; let n = t.getters; let r = 'https://boiling-savannah-16664.herokuapp.com/'; let a = 'api/favourites/movies'; let i = { method: 'POST', headers: Object(s.a)(Object(s.a)({}, n.getToken), {}, { 'Content-Type': 'application/json' }), body: JSON.stringify(e) }; window.fetch(r + a, i).then(function (t) { return t.json() }).then(function (t) { return o('loadedFavouriteMovies', t), t }).catch(function (t) { return console.log(t) }) }, removeFromFavourites: function (t, e) { const o = t.getters; let n = t.dispatch; let r = e.activeUserID; let a = e.favouriteID; let i = 'https://boiling-savannah-16664.herokuapp.com/'; let u = 'api/favourites/remove'; return new Promise(function (t, e) { if (r && a) { let c = { method: 'DELETE', headers: Object(s.a)(Object(s.a)({}, o.getToken), {}, { 'Content-Type': 'application/json' }), body: JSON.stringify({ activeUserID: r, favouriteID: a }) }; window.fetch(i + u, c).then(function(e){n("loadFavourites"),t(e)}).catch(function(t){e(t)}) } }) } }, getters: { getStatus: function (t) { return t.Status }, getUser: function (t) { return t.User }, getToken: function (t) { return { Authorization: 'Bearer ' + t.User.token } }, getAllBooks: function (t) { return t.Books }, getAllMovies: function (t) { return t.Movies }, getFavouriteBooks: function (t) { return t.FavouriteBooks }, getFavouriteMovies: function (t) { return t.FavouriteMovies } } }); let ut = (o('73ec'), o('b1e0')); n.default.use(ut.a), n.default.config.productionTip = !1, new n.default({ router: it, store: st, render: function (t) { return t(Z) } }).$mount('#app') }, '73ec': function (t, e, o) {} })
// # sourceMappingURL=app.2028e725.js.map
