# Inventario 360

<p align="center">
  <img 
  width="500" height="500"
  src="publico/assets/logoinventario360.png" 
  alt="logo" />
</p>




![Status](https://img.shields.io/badge/status-in--development-yellow) ![License: GPL v3](https://img.shields.io/badge/License-unknown-blue.svg) 

**Inventio360** es un sistema web de inventario y ventas desarrollado con JavaScript, HTML y CSS, diseñado para gestionar productos, controlar existencias y registrar transacciones de manera eficiente, intuitiva y en tiempo real.


![GitHub Repo stars](https://img.shields.io/github/stars/jlshadowsking001-blip/inventario360?style=social)

---

###  Funciones

* **Inventio360** es un sistema web de inventario y ventas desarrollado con JavaScript, HTML y CSS.
* Gestión eficiente de inventario y existencias en tiempo real.
* Control completo de ventas y registro de transacciones.
* Administración de usuarios con roles y permisos personalizados.
* Plataforma intuitiva, rápida y fácil de usar.


---

### Tecnologías Usadas
- ![](https://img.shields.io/badge/JavaScript-yellow) 
- ![](https://img.shields.io/badge/MySql-blue)
- ![](https://img.shields.io/badge/HTML-orange) 
- ![](https://img.shields.io/badge/CSS-red) 
---

### Clona este repositorio

```bash
git clone git@github.com:jlshadowsking001-blip/inventario360.git
````

---

### Estructura del Proyecto


```
.
└── inventario360-main
    ├── calPort
    ├── controles
    │   └── usuariocontole.js
    ├── db.js
    ├── DOCUMENTACION.md
    ├── jsconfig.json
    ├── middlewares
    │   ├── valdacionususarios.js
    │   ├── validacionlogin.js
    │   └── validacionregistro.js
    ├── node_modules
    │   ├── abbrev
    │   │   ├── abbrev.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── accepts
    │   │   ├── HISTORY.md
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── agent-base
    │   │   ├── dist
    │   │   │   └── src
    │   │   │       ├── index.d.ts
    │   │   │       ├── index.js
    │   │   │       ├── index.js.map
    │   │   │       ├── promisify.d.ts
    │   │   │       ├── promisify.js
    │   │   │       └── promisify.js.map
    │   │   ├── node_modules
    │   │   │   ├── debug
    │   │   │   │   ├── LICENSE
    │   │   │   │   ├── package.json
    │   │   │   │   ├── README.md
    │   │   │   │   └── src
    │   │   │   │       ├── browser.js
    │   │   │   │       ├── common.js
    │   │   │   │       ├── index.js
    │   │   │   │       └── node.js
    │   │   │   └── ms
    │   │   │       ├── index.js
    │   │   │       ├── license.md
    │   │   │       ├── package.json
    │   │   │       └── readme.md
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   └── src
    │   │       ├── index.ts
    │   │       └── promisify.ts
    │   ├── ansi-regex
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── aproba
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── are-we-there-yet
    │   │   ├── lib
    │   │   │   ├── index.js
    │   │   │   ├── tracker-base.js
    │   │   │   ├── tracker-group.js
    │   │   │   ├── tracker.js
    │   │   │   └── tracker-stream.js
    │   │   ├── LICENSE.md
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── array-flatten
    │   │   ├── array-flatten.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── balanced-match
    │   │   ├── index.js
    │   │   ├── LICENSE.md
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── bcrypt
    │   │   ├── appveyor.yml
    │   │   ├── bcrypt.js
    │   │   ├── binding.gyp
    │   │   ├── CHANGELOG.md
    │   │   ├── examples
    │   │   │   ├── async_compare.js
    │   │   │   └── forever_gen_salt.js
    │   │   ├── ISSUE_TEMPLATE.md
    │   │   ├── lib
    │   │   │   └── binding
    │   │   │       └── napi-v3
    │   │   │           └── bcrypt_lib.node
    │   │   ├── LICENSE
    │   │   ├── Makefile
    │   │   ├── package.json
    │   │   ├── promises.js
    │   │   ├── README.md
    │   │   ├── SECURITY.md
    │   │   ├── src
    │   │   │   ├── bcrypt.cc
    │   │   │   ├── bcrypt_node.cc
    │   │   │   ├── blowfish.cc
    │   │   │   └── node_blf.h
    │   │   ├── test
    │   │   │   ├── async.test.js
    │   │   │   ├── implementation.test.js
    │   │   │   ├── promise.test.js
    │   │   │   ├── repetitions.test.js
    │   │   │   └── sync.test.js
    │   │   └── test-docker.sh
    │   ├── bcryptjs
    │   │   ├── bin
    │   │   │   └── bcrypt
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   ├── types.d.ts
    │   │   └── umd
    │   │       ├── index.d.ts
    │   │       ├── index.js
    │   │       ├── package.json
    │   │       └── types.d.ts
    │   ├── body-parser
    │   │   ├── HISTORY.md
    │   │   ├── index.js
    │   │   ├── lib
    │   │   │   ├── read.js
    │   │   │   └── types
    │   │   │       ├── json.js
    │   │   │       ├── raw.js
    │   │   │       ├── text.js
    │   │   │       └── urlencoded.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   └── SECURITY.md
    │   ├── brace-expansion
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── buffer-from
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── bytes
    │   │   ├── History.md
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── Readme.md
    │   ├── call-bind-apply-helpers
    │   │   ├── actualApply.d.ts
    │   │   ├── actualApply.js
    │   │   ├── applyBind.d.ts
    │   │   ├── applyBind.js
    │   │   ├── CHANGELOG.md
    │   │   ├── functionApply.d.ts
    │   │   ├── functionApply.js
    │   │   ├── functionCall.d.ts
    │   │   ├── functionCall.js
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   ├── reflectApply.d.ts
    │   │   ├── reflectApply.js
    │   │   ├── test
    │   │   │   └── index.js
    │   │   └── tsconfig.json
    │   ├── call-bound
    │   │   ├── CHANGELOG.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   ├── test
    │   │   │   └── index.js
    │   │   └── tsconfig.json
    │   ├── chownr
    │   │   ├── chownr.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── color-support
    │   │   ├── bin.js
    │   │   ├── browser.js
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── concat-map
    │   │   ├── example
    │   │   │   └── map.js
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.markdown
    │   │   └── test
    │   │       └── map.js
    │   ├── console-control-strings
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   └── README.md~
    │   ├── content-disposition
    │   │   ├── HISTORY.md
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── content-type
    │   │   ├── HISTORY.md
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── cookie
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   └── SECURITY.md
    │   ├── cookie-signature
    │   │   ├── History.md
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   └── Readme.md
    │   ├── cors
    │   │   ├── CONTRIBUTING.md
    │   │   ├── HISTORY.md
    │   │   ├── lib
    │   │   │   └── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── debug
    │   │   ├── CHANGELOG.md
    │   │   ├── component.json
    │   │   ├── karma.conf.js
    │   │   ├── LICENSE
    │   │   ├── Makefile
    │   │   ├── node.js
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   └── src
    │   │       ├── browser.js
    │   │       ├── debug.js
    │   │       ├── index.js
    │   │       ├── inspector-log.js
    │   │       └── node.js
    │   ├── delegates
    │   │   ├── History.md
    │   │   ├── index.js
    │   │   ├── License
    │   │   ├── Makefile
    │   │   ├── package.json
    │   │   ├── Readme.md
    │   │   └── test
    │   │       └── index.js
    │   ├── depd
    │   │   ├── History.md
    │   │   ├── index.js
    │   │   ├── lib
    │   │   │   └── browser
    │   │   │       └── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── Readme.md
    │   ├── destroy
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── detect-libc
    │   │   ├── index.d.ts
    │   │   ├── lib
    │   │   │   ├── detect-libc.js
    │   │   │   ├── elf.js
    │   │   │   ├── filesystem.js
    │   │   │   └── process.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── dunder-proto
    │   │   ├── CHANGELOG.md
    │   │   ├── get.d.ts
    │   │   ├── get.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   ├── set.d.ts
    │   │   ├── set.js
    │   │   ├── test
    │   │   │   ├── get.js
    │   │   │   ├── index.js
    │   │   │   └── set.js
    │   │   └── tsconfig.json
    │   ├── ee-first
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── emoji-regex
    │   │   ├── es2015
    │   │   │   ├── index.js
    │   │   │   └── text.js
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE-MIT.txt
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   └── text.js
    │   ├── encodeurl
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── encoding
    │   │   ├── lib
    │   │   │   └── encoding.js
    │   │   ├── LICENSE
    │   │   ├── node_modules
    │   │   │   └── iconv-lite
    │   │   │       ├── Changelog.md
    │   │   │       ├── encodings
    │   │   │       │   ├── dbcs-codec.js
    │   │   │       │   ├── dbcs-data.js
    │   │   │       │   ├── index.js
    │   │   │       │   ├── internal.js
    │   │   │       │   ├── sbcs-codec.js
    │   │   │       │   ├── sbcs-data-generated.js
    │   │   │       │   ├── sbcs-data.js
    │   │   │       │   ├── tables
    │   │   │       │   │   ├── big5-added.json
    │   │   │       │   │   ├── cp936.json
    │   │   │       │   │   ├── cp949.json
    │   │   │       │   │   ├── cp950.json
    │   │   │       │   │   ├── eucjp.json
    │   │   │       │   │   ├── gb18030-ranges.json
    │   │   │       │   │   ├── gbk-added.json
    │   │   │       │   │   └── shiftjis.json
    │   │   │       │   ├── utf16.js
    │   │   │       │   ├── utf32.js
    │   │   │       │   └── utf7.js
    │   │   │       ├── lib
    │   │   │       │   ├── bom-handling.js
    │   │   │       │   ├── index.d.ts
    │   │   │       │   ├── index.js
    │   │   │       │   └── streams.js
    │   │   │       ├── LICENSE
    │   │   │       ├── package.json
    │   │   │       └── README.md
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   └── test
    │   │       └── test.js
    │   ├── escape-html
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── Readme.md
    │   ├── es-define-property
    │   │   ├── CHANGELOG.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   ├── test
    │   │   │   └── index.js
    │   │   └── tsconfig.json
    │   ├── es-errors
    │   │   ├── CHANGELOG.md
    │   │   ├── eval.d.ts
    │   │   ├── eval.js
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── range.d.ts
    │   │   ├── range.js
    │   │   ├── README.md
    │   │   ├── ref.d.ts
    │   │   ├── ref.js
    │   │   ├── syntax.d.ts
    │   │   ├── syntax.js
    │   │   ├── test
    │   │   │   └── index.js
    │   │   ├── tsconfig.json
    │   │   ├── type.d.ts
    │   │   ├── type.js
    │   │   ├── uri.d.ts
    │   │   └── uri.js
    │   ├── es-object-atoms
    │   │   ├── CHANGELOG.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── isObject.d.ts
    │   │   ├── isObject.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   ├── RequireObjectCoercible.d.ts
    │   │   ├── RequireObjectCoercible.js
    │   │   ├── test
    │   │   │   └── index.js
    │   │   ├── ToObject.d.ts
    │   │   ├── ToObject.js
    │   │   └── tsconfig.json
    │   ├── etag
    │   │   ├── HISTORY.md
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── express
    │   │   ├── History.md
    │   │   ├── index.js
    │   │   ├── lib
    │   │   │   ├── application.js
    │   │   │   ├── express.js
    │   │   │   ├── middleware
    │   │   │   │   ├── init.js
    │   │   │   │   └── query.js
    │   │   │   ├── request.js
    │   │   │   ├── response.js
    │   │   │   ├── router
    │   │   │   │   ├── index.js
    │   │   │   │   ├── layer.js
    │   │   │   │   └── route.js
    │   │   │   ├── utils.js
    │   │   │   └── view.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── Readme.md
    │   ├── finalhandler
    │   │   ├── HISTORY.md
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   └── SECURITY.md
    │   ├── forwarded
    │   │   ├── HISTORY.md
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── fresh
    │   │   ├── HISTORY.md
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── fs-minipass
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── fs.realpath
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── old.js
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── function-bind
    │   │   ├── CHANGELOG.md
    │   │   ├── implementation.js
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   └── test
    │   │       └── index.js
    │   ├── gauge
    │   │   ├── base-theme.js
    │   │   ├── CHANGELOG.md
    │   │   ├── error.js
    │   │   ├── has-color.js
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── plumbing.js
    │   │   ├── process.js
    │   │   ├── progress-bar.js
    │   │   ├── README.md
    │   │   ├── render-template.js
    │   │   ├── set-immediate.js
    │   │   ├── set-interval.js
    │   │   ├── spin.js
    │   │   ├── template-item.js
    │   │   ├── theme-set.js
    │   │   ├── themes.js
    │   │   └── wide-truncate.js
    │   ├── get-intrinsic
    │   │   ├── CHANGELOG.md
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   └── test
    │   │       └── GetIntrinsic.js
    │   ├── get-proto
    │   │   ├── CHANGELOG.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── Object.getPrototypeOf.d.ts
    │   │   ├── Object.getPrototypeOf.js
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   ├── Reflect.getPrototypeOf.d.ts
    │   │   ├── Reflect.getPrototypeOf.js
    │   │   ├── test
    │   │   │   └── index.js
    │   │   └── tsconfig.json
    │   ├── glob
    │   │   ├── common.js
    │   │   ├── glob.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   └── sync.js
    │   ├── gopd
    │   │   ├── CHANGELOG.md
    │   │   ├── gOPD.d.ts
    │   │   ├── gOPD.js
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   ├── test
    │   │   │   └── index.js
    │   │   └── tsconfig.json
    │   ├── hasown
    │   │   ├── CHANGELOG.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   └── tsconfig.json
    │   ├── has-symbols
    │   │   ├── CHANGELOG.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   ├── shams.d.ts
    │   │   ├── shams.js
    │   │   ├── test
    │   │   │   ├── index.js
    │   │   │   ├── shams
    │   │   │   │   ├── core-js.js
    │   │   │   │   └── get-own-property-symbols.js
    │   │   │   └── tests.js
    │   │   └── tsconfig.json
    │   ├── has-unicode
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── http-errors
    │   │   ├── HISTORY.md
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── https-proxy-agent
    │   │   ├── dist
    │   │   │   ├── agent.d.ts
    │   │   │   ├── agent.js
    │   │   │   ├── agent.js.map
    │   │   │   ├── index.d.ts
    │   │   │   ├── index.js
    │   │   │   ├── index.js.map
    │   │   │   ├── parse-proxy-response.d.ts
    │   │   │   ├── parse-proxy-response.js
    │   │   │   └── parse-proxy-response.js.map
    │   │   ├── node_modules
    │   │   │   ├── debug
    │   │   │   │   ├── LICENSE
    │   │   │   │   ├── package.json
    │   │   │   │   ├── README.md
    │   │   │   │   └── src
    │   │   │   │       ├── browser.js
    │   │   │   │       ├── common.js
    │   │   │   │       ├── index.js
    │   │   │   │       └── node.js
    │   │   │   └── ms
    │   │   │       ├── index.js
    │   │   │       ├── license.md
    │   │   │       ├── package.json
    │   │   │       └── readme.md
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── iconv-lite
    │   │   ├── Changelog.md
    │   │   ├── encodings
    │   │   │   ├── dbcs-codec.js
    │   │   │   ├── dbcs-data.js
    │   │   │   ├── index.js
    │   │   │   ├── internal.js
    │   │   │   ├── sbcs-codec.js
    │   │   │   ├── sbcs-data-generated.js
    │   │   │   ├── sbcs-data.js
    │   │   │   ├── tables
    │   │   │   │   ├── big5-added.json
    │   │   │   │   ├── cp936.json
    │   │   │   │   ├── cp949.json
    │   │   │   │   ├── cp950.json
    │   │   │   │   ├── eucjp.json
    │   │   │   │   ├── gb18030-ranges.json
    │   │   │   │   ├── gbk-added.json
    │   │   │   │   └── shiftjis.json
    │   │   │   ├── utf16.js
    │   │   │   └── utf7.js
    │   │   ├── lib
    │   │   │   ├── bom-handling.js
    │   │   │   ├── extend-node.js
    │   │   │   ├── index.d.ts
    │   │   │   ├── index.js
    │   │   │   └── streams.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── inflight
    │   │   ├── inflight.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── inherits
    │   │   ├── inherits_browser.js
    │   │   ├── inherits.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── ipaddr.js
    │   │   ├── ipaddr.min.js
    │   │   ├── lib
    │   │   │   ├── ipaddr.js
    │   │   │   └── ipaddr.js.d.ts
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── is-fullwidth-code-point
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── json-format
    │   │   ├── index.js
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   ├── sample.js
    │   │   └── test
    │   │       ├── index.js
    │   │       └── mocks
    │   │           ├── stringified_1_tab.json
    │   │           ├── stringified_2_spaces.json
    │   │           └── stringified_4_spaces.json
    │   ├── make-dir
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── node_modules
    │   │   │   └── semver
    │   │   │       ├── bin
    │   │   │       │   └── semver.js
    │   │   │       ├── LICENSE
    │   │   │       ├── package.json
    │   │   │       ├── range.bnf
    │   │   │       ├── README.md
    │   │   │       └── semver.js
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── @mapbox
    │   │   └── node-pre-gyp
    │   │       ├── bin
    │   │       │   ├── node-pre-gyp
    │   │       │   └── node-pre-gyp.cmd
    │   │       ├── CHANGELOG.md
    │   │       ├── contributing.md
    │   │       ├── lib
    │   │       │   ├── build.js
    │   │       │   ├── clean.js
    │   │       │   ├── configure.js
    │   │       │   ├── info.js
    │   │       │   ├── install.js
    │   │       │   ├── main.js
    │   │       │   ├── node-pre-gyp.js
    │   │       │   ├── package.js
    │   │       │   ├── pre-binding.js
    │   │       │   ├── publish.js
    │   │       │   ├── rebuild.js
    │   │       │   ├── reinstall.js
    │   │       │   ├── reveal.js
    │   │       │   ├── testbinary.js
    │   │       │   ├── testpackage.js
    │   │       │   ├── unpublish.js
    │   │       │   └── util
    │   │       │       ├── abi_crosswalk.json
    │   │       │       ├── compile.js
    │   │       │       ├── handle_gyp_opts.js
    │   │       │       ├── napi.js
    │   │       │       ├── nw-pre-gyp
    │   │       │       │   ├── index.html
    │   │       │       │   └── package.json
    │   │       │       ├── s3_setup.js
    │   │       │       └── versioning.js
    │   │       ├── LICENSE
    │   │       ├── package.json
    │   │       └── README.md
    │   ├── math-intrinsics
    │   │   ├── abs.d.ts
    │   │   ├── abs.js
    │   │   ├── CHANGELOG.md
    │   │   ├── constants
    │   │   │   ├── maxArrayLength.d.ts
    │   │   │   ├── maxArrayLength.js
    │   │   │   ├── maxSafeInteger.d.ts
    │   │   │   ├── maxSafeInteger.js
    │   │   │   ├── maxValue.d.ts
    │   │   │   └── maxValue.js
    │   │   ├── floor.d.ts
    │   │   ├── floor.js
    │   │   ├── isFinite.d.ts
    │   │   ├── isFinite.js
    │   │   ├── isInteger.d.ts
    │   │   ├── isInteger.js
    │   │   ├── isNaN.d.ts
    │   │   ├── isNaN.js
    │   │   ├── isNegativeZero.d.ts
    │   │   ├── isNegativeZero.js
    │   │   ├── LICENSE
    │   │   ├── max.d.ts
    │   │   ├── max.js
    │   │   ├── min.d.ts
    │   │   ├── min.js
    │   │   ├── mod.d.ts
    │   │   ├── mod.js
    │   │   ├── package.json
    │   │   ├── pow.d.ts
    │   │   ├── pow.js
    │   │   ├── README.md
    │   │   ├── round.d.ts
    │   │   ├── round.js
    │   │   ├── sign.d.ts
    │   │   ├── sign.js
    │   │   ├── test
    │   │   │   └── index.js
    │   │   └── tsconfig.json
    │   ├── media-typer
    │   │   ├── HISTORY.md
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── merge-descriptors
    │   │   ├── HISTORY.md
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── methods
    │   │   ├── HISTORY.md
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── mime
    │   │   ├── CHANGELOG.md
    │   │   ├── cli.js
    │   │   ├── LICENSE
    │   │   ├── mime.js
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   ├── src
    │   │   │   ├── build.js
    │   │   │   └── test.js
    │   │   └── types.json
    │   ├── mime-db
    │   │   ├── db.json
    │   │   ├── HISTORY.md
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── mime-types
    │   │   ├── HISTORY.md
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── minimatch
    │   │   ├── LICENSE
    │   │   ├── minimatch.js
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── minipass
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── minizlib
    │   │   ├── constants.js
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── mkdirp
    │   │   ├── bin
    │   │   │   └── cmd.js
    │   │   ├── CHANGELOG.md
    │   │   ├── index.js
    │   │   ├── lib
    │   │   │   ├── find-made.js
    │   │   │   ├── mkdirp-manual.js
    │   │   │   ├── mkdirp-native.js
    │   │   │   ├── opts-arg.js
    │   │   │   ├── path-arg.js
    │   │   │   └── use-native.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── readme.markdown
    │   ├── ms
    │   │   ├── index.js
    │   │   ├── license.md
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── negotiator
    │   │   ├── HISTORY.md
    │   │   ├── index.js
    │   │   ├── lib
    │   │   │   ├── charset.js
    │   │   │   ├── encoding.js
    │   │   │   ├── language.js
    │   │   │   └── mediaType.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── node-addon-api
    │   │   ├── common.gypi
    │   │   ├── except.gypi
    │   │   ├── index.js
    │   │   ├── LICENSE.md
    │   │   ├── napi.h
    │   │   ├── napi-inl.deprecated.h
    │   │   ├── napi-inl.h
    │   │   ├── node_api.gyp
    │   │   ├── noexcept.gypi
    │   │   ├── nothing.c
    │   │   ├── package.json
    │   │   ├── package-support.json
    │   │   ├── README.md
    │   │   └── tools
    │   │       ├── check-napi.js
    │   │       ├── clang-format.js
    │   │       ├── conversion.js
    │   │       ├── eslint-format.js
    │   │       └── README.md
    │   ├── node-fetch
    │   │   ├── browser.js
    │   │   ├── lib
    │   │   │   ├── index.es.js
    │   │   │   ├── index.js
    │   │   │   └── index.mjs
    │   │   ├── LICENSE.md
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── nodemailer
    │   │   ├── CHANGELOG.md
    │   │   ├── CODE_OF_CONDUCT.md
    │   │   ├── eslint.config.js
    │   │   ├── lib
    │   │   │   ├── addressparser
    │   │   │   │   └── index.js
    │   │   │   ├── base64
    │   │   │   │   └── index.js
    │   │   │   ├── dkim
    │   │   │   │   ├── index.js
    │   │   │   │   ├── message-parser.js
    │   │   │   │   ├── relaxed-body.js
    │   │   │   │   └── sign.js
    │   │   │   ├── fetch
    │   │   │   │   ├── cookies.js
    │   │   │   │   └── index.js
    │   │   │   ├── json-transport
    │   │   │   │   └── index.js
    │   │   │   ├── mail-composer
    │   │   │   │   └── index.js
    │   │   │   ├── mailer
    │   │   │   │   ├── index.js
    │   │   │   │   └── mail-message.js
    │   │   │   ├── mime-funcs
    │   │   │   │   ├── index.js
    │   │   │   │   └── mime-types.js
    │   │   │   ├── mime-node
    │   │   │   │   ├── index.js
    │   │   │   │   ├── last-newline.js
    │   │   │   │   ├── le-unix.js
    │   │   │   │   └── le-windows.js
    │   │   │   ├── nodemailer.js
    │   │   │   ├── punycode
    │   │   │   │   └── index.js
    │   │   │   ├── qp
    │   │   │   │   └── index.js
    │   │   │   ├── sendmail-transport
    │   │   │   │   └── index.js
    │   │   │   ├── ses-transport
    │   │   │   │   └── index.js
    │   │   │   ├── shared
    │   │   │   │   └── index.js
    │   │   │   ├── smtp-connection
    │   │   │   │   ├── data-stream.js
    │   │   │   │   ├── http-proxy-client.js
    │   │   │   │   └── index.js
    │   │   │   ├── smtp-pool
    │   │   │   │   ├── index.js
    │   │   │   │   └── pool-resource.js
    │   │   │   ├── smtp-transport
    │   │   │   │   └── index.js
    │   │   │   ├── stream-transport
    │   │   │   │   └── index.js
    │   │   │   ├── well-known
    │   │   │   │   ├── index.js
    │   │   │   │   └── services.json
    │   │   │   └── xoauth2
    │   │   │       └── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   └── SECURITY.txt
    │   ├── nopt
    │   │   ├── bin
    │   │   │   └── nopt.js
    │   │   ├── CHANGELOG.md
    │   │   ├── lib
    │   │   │   └── nopt.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── npm-force-resolutions
    │   │   ├── clojurescript-repl.clj
    │   │   ├── index.js
    │   │   ├── out
    │   │   │   ├── cljs
    │   │   │   │   ├── core
    │   │   │   │   │   ├── async
    │   │   │   │   │   │   └── impl
    │   │   │   │   │   │       ├── buffers.cljs
    │   │   │   │   │   │       ├── buffers.cljs.cache.json
    │   │   │   │   │   │       ├── buffers.js
    │   │   │   │   │   │       ├── buffers.js.map
    │   │   │   │   │   │       ├── channels.cljs
    │   │   │   │   │   │       ├── channels.cljs.cache.json
    │   │   │   │   │   │       ├── channels.js
    │   │   │   │   │   │       ├── channels.js.map
    │   │   │   │   │   │       ├── dispatch.cljs
    │   │   │   │   │   │       ├── dispatch.cljs.cache.json
    │   │   │   │   │   │       ├── dispatch.js
    │   │   │   │   │   │       ├── dispatch.js.map
    │   │   │   │   │   │       ├── ioc_helpers.cljs
    │   │   │   │   │   │       ├── ioc_helpers.cljs.cache.json
    │   │   │   │   │   │       ├── ioc_helpers.js
    │   │   │   │   │   │       ├── ioc_helpers.js.map
    │   │   │   │   │   │       ├── protocols.cljs
    │   │   │   │   │   │       ├── protocols.cljs.cache.json
    │   │   │   │   │   │       ├── protocols.js
    │   │   │   │   │   │       ├── protocols.js.map
    │   │   │   │   │   │       ├── timers.cljs
    │   │   │   │   │   │       ├── timers.cljs.cache.json
    │   │   │   │   │   │       ├── timers.js
    │   │   │   │   │   │       └── timers.js.map
    │   │   │   │   │   ├── async.cljs
    │   │   │   │   │   ├── async.cljs.cache.json
    │   │   │   │   │   ├── async.js
    │   │   │   │   │   └── async.js.map
    │   │   │   │   ├── core.cljs
    │   │   │   │   ├── core.js
    │   │   │   │   ├── core.js.map
    │   │   │   │   ├── nodejscli.cljs
    │   │   │   │   ├── nodejscli.cljs.cache.json
    │   │   │   │   ├── nodejs.cljs
    │   │   │   │   ├── nodejs.cljs.cache.json
    │   │   │   │   ├── nodejs.js
    │   │   │   │   ├── nodejs.js.map
    │   │   │   │   ├── pprint.cljs
    │   │   │   │   ├── pprint.cljs.cache.json
    │   │   │   │   ├── pprint.js
    │   │   │   │   ├── pprint.js.map
    │   │   │   │   ├── reader.cljs
    │   │   │   │   ├── reader.cljs.cache.json
    │   │   │   │   ├── reader.js
    │   │   │   │   ├── reader.js.map
    │   │   │   │   ├── test.cljs
    │   │   │   │   ├── test.cljs.cache.json
    │   │   │   │   ├── test.js
    │   │   │   │   ├── test.js.map
    │   │   │   │   └── tools
    │   │   │   │       ├── reader
    │   │   │   │       │   ├── edn.cljs
    │   │   │   │       │   ├── edn.cljs.cache.json
    │   │   │   │       │   ├── edn.js
    │   │   │   │       │   ├── edn.js.map
    │   │   │   │       │   ├── impl
    │   │   │   │       │   │   ├── commons.cljs
    │   │   │   │       │   │   ├── commons.cljs.cache.json
    │   │   │   │       │   │   ├── commons.js
    │   │   │   │       │   │   ├── commons.js.map
    │   │   │   │       │   │   ├── errors.cljs
    │   │   │   │       │   │   ├── errors.cljs.cache.json
    │   │   │   │       │   │   ├── errors.js
    │   │   │   │       │   │   ├── errors.js.map
    │   │   │   │       │   │   ├── inspect.cljs
    │   │   │   │       │   │   ├── inspect.cljs.cache.json
    │   │   │   │       │   │   ├── inspect.js
    │   │   │   │       │   │   ├── inspect.js.map
    │   │   │   │       │   │   ├── utils.cljs
    │   │   │   │       │   │   ├── utils.cljs.cache.json
    │   │   │   │       │   │   ├── utils.js
    │   │   │   │       │   │   └── utils.js.map
    │   │   │   │       │   ├── reader_types.cljs
    │   │   │   │       │   ├── reader_types.cljs.cache.json
    │   │   │   │       │   ├── reader_types.js
    │   │   │   │       │   └── reader_types.js.map
    │   │   │   │       ├── reader.cljs
    │   │   │   │       ├── reader.cljs.cache.json
    │   │   │   │       ├── reader.js
    │   │   │   │       └── reader.js.map
    │   │   │   ├── cljsc_opts.edn
    │   │   │   ├── cljs_deps.js
    │   │   │   ├── cljs_http
    │   │   │   │   ├── client.cljs
    │   │   │   │   ├── client.cljs.cache.json
    │   │   │   │   ├── client.js
    │   │   │   │   ├── client.js.map
    │   │   │   │   ├── core.cljs
    │   │   │   │   ├── core.cljs.cache.json
    │   │   │   │   ├── core.js
    │   │   │   │   ├── core.js.map
    │   │   │   │   ├── util.cljs
    │   │   │   │   ├── util.cljs.cache.json
    │   │   │   │   ├── util.js
    │   │   │   │   └── util.js.map
    │   │   │   ├── clojure
    │   │   │   │   ├── string.cljs
    │   │   │   │   ├── string.cljs.cache.json
    │   │   │   │   ├── string.js
    │   │   │   │   └── string.js.map
    │   │   │   ├── cognitect
    │   │   │   │   ├── transit.cljs
    │   │   │   │   ├── transit.cljs.cache.json
    │   │   │   │   ├── transit.js
    │   │   │   │   └── transit.js.map
    │   │   │   ├── com
    │   │   │   │   └── cognitect
    │   │   │   │       ├── transit
    │   │   │   │       │   ├── caching.js
    │   │   │   │       │   ├── delimiters.js
    │   │   │   │       │   ├── eq.js
    │   │   │   │       │   ├── handlers.js
    │   │   │   │       │   ├── impl
    │   │   │   │       │   │   ├── decoder.js
    │   │   │   │       │   │   ├── reader.js
    │   │   │   │       │   │   └── writer.js
    │   │   │   │       │   ├── types.js
    │   │   │   │       │   └── util.js
    │   │   │   │       └── transit.js
    │   │   │   ├── goog
    │   │   │   │   ├── array
    │   │   │   │   │   └── array.js
    │   │   │   │   ├── asserts
    │   │   │   │   │   └── asserts.js
    │   │   │   │   ├── async
    │   │   │   │   │   ├── freelist.js
    │   │   │   │   │   ├── nexttick.js
    │   │   │   │   │   ├── run.js
    │   │   │   │   │   └── workqueue.js
    │   │   │   │   ├── base.js
    │   │   │   │   ├── bootstrap
    │   │   │   │   │   └── nodejs.js
    │   │   │   │   ├── crypt
    │   │   │   │   │   ├── base64.js
    │   │   │   │   │   └── crypt.js
    │   │   │   │   ├── debug
    │   │   │   │   │   ├── debug.js
    │   │   │   │   │   ├── entrypointregistry.js
    │   │   │   │   │   ├── errorcontext.js
    │   │   │   │   │   ├── error.js
    │   │   │   │   │   ├── logbuffer.js
    │   │   │   │   │   ├── logger.js
    │   │   │   │   │   └── logrecord.js
    │   │   │   │   ├── deps.js
    │   │   │   │   ├── disposable
    │   │   │   │   │   ├── disposable.js
    │   │   │   │   │   └── idisposable.js
    │   │   │   │   ├── dom
    │   │   │   │   │   ├── asserts.js
    │   │   │   │   │   ├── browserfeature.js
    │   │   │   │   │   ├── dom.js
    │   │   │   │   │   ├── htmlelement.js
    │   │   │   │   │   ├── nodetype.js
    │   │   │   │   │   ├── safe.js
    │   │   │   │   │   ├── tagname.js
    │   │   │   │   │   └── tags.js
    │   │   │   │   ├── events
    │   │   │   │   │   ├── browserevent.js
    │   │   │   │   │   ├── browserfeature.js
    │   │   │   │   │   ├── eventid.js
    │   │   │   │   │   ├── event.js
    │   │   │   │   │   ├── events.js
    │   │   │   │   │   ├── eventtarget.js
    │   │   │   │   │   ├── eventtype.js
    │   │   │   │   │   ├── listenable.js
    │   │   │   │   │   ├── listener.js
    │   │   │   │   │   └── listenermap.js
    │   │   │   │   ├── fs
    │   │   │   │   │   └── url.js
    │   │   │   │   ├── functions
    │   │   │   │   │   └── functions.js
    │   │   │   │   ├── html
    │   │   │   │   │   ├── legacyconversions.js
    │   │   │   │   │   ├── safehtml.js
    │   │   │   │   │   ├── safescript.js
    │   │   │   │   │   ├── safestyle.js
    │   │   │   │   │   ├── safestylesheet.js
    │   │   │   │   │   ├── safeurl.js
    │   │   │   │   │   ├── trustedresourceurl.js
    │   │   │   │   │   └── uncheckedconversions.js
    │   │   │   │   ├── i18n
    │   │   │   │   │   └── bidi.js
    │   │   │   │   ├── iter
    │   │   │   │   │   └── iter.js
    │   │   │   │   ├── json
    │   │   │   │   │   ├── hybrid.js
    │   │   │   │   │   └── json.js
    │   │   │   │   ├── labs
    │   │   │   │   │   └── useragent
    │   │   │   │   │       ├── browser.js
    │   │   │   │   │       ├── engine.js
    │   │   │   │   │       ├── platform.js
    │   │   │   │   │       └── util.js
    │   │   │   │   ├── log
    │   │   │   │   │   └── log.js
    │   │   │   │   ├── math
    │   │   │   │   │   ├── coordinate.js
    │   │   │   │   │   ├── integer.js
    │   │   │   │   │   ├── long.js
    │   │   │   │   │   ├── math.js
    │   │   │   │   │   └── size.js
    │   │   │   │   ├── mochikit
    │   │   │   │   │   └── async
    │   │   │   │   │       └── deferred.js
    │   │   │   │   ├── net
    │   │   │   │   │   ├── errorcode.js
    │   │   │   │   │   ├── eventtype.js
    │   │   │   │   │   ├── httpstatus.js
    │   │   │   │   │   ├── jsloader.js
    │   │   │   │   │   ├── jsonp.js
    │   │   │   │   │   ├── wrapperxmlhttpfactory.js
    │   │   │   │   │   ├── xhrio.js
    │   │   │   │   │   ├── xhrlike.js
    │   │   │   │   │   ├── xmlhttpfactory.js
    │   │   │   │   │   └── xmlhttp.js
    │   │   │   │   ├── object
    │   │   │   │   │   └── object.js
    │   │   │   │   ├── promise
    │   │   │   │   │   ├── promise.js
    │   │   │   │   │   ├── resolver.js
    │   │   │   │   │   └── thenable.js
    │   │   │   │   ├── reflect
    │   │   │   │   │   └── reflect.js
    │   │   │   │   ├── string
    │   │   │   │   │   ├── const.js
    │   │   │   │   │   ├── stringbuffer.js
    │   │   │   │   │   ├── string.js
    │   │   │   │   │   └── typedstring.js
    │   │   │   │   ├── structs
    │   │   │   │   │   ├── map.js
    │   │   │   │   │   └── structs.js
    │   │   │   │   ├── timer
    │   │   │   │   │   └── timer.js
    │   │   │   │   ├── uri
    │   │   │   │   │   ├── uri.js
    │   │   │   │   │   └── utils.js
    │   │   │   │   └── useragent
    │   │   │   │       ├── product.js
    │   │   │   │       └── useragent.js
    │   │   │   ├── no
    │   │   │   │   └── en
    │   │   │   │       ├── core.cljc
    │   │   │   │       ├── core.cljc.cache.json
    │   │   │   │       ├── core.js
    │   │   │   │       └── core.js.map
    │   │   │   ├── nodejscli.js
    │   │   │   ├── nodejscli.js.map
    │   │   │   ├── nodejs.js
    │   │   │   ├── nodejs.js.map
    │   │   │   └── npm_force_resolutions
    │   │   │       ├── core.cljs
    │   │   │       ├── core.cljs.cache.json
    │   │   │       ├── core.js
    │   │   │       ├── core.js.map
    │   │   │       ├── core_test.cljs
    │   │   │       ├── core_test.cljs.cache.json
    │   │   │       ├── core_test.js
    │   │   │       └── core_test.js.map
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── npmlog
    │   │   ├── LICENSE
    │   │   ├── log.js
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── object-assign
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── object-inspect
    │   │   ├── CHANGELOG.md
    │   │   ├── example
    │   │   │   ├── all.js
    │   │   │   ├── circular.js
    │   │   │   ├── fn.js
    │   │   │   └── inspect.js
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── package-support.json
    │   │   ├── readme.markdown
    │   │   ├── test
    │   │   │   ├── bigint.js
    │   │   │   ├── browser
    │   │   │   │   └── dom.js
    │   │   │   ├── circular.js
    │   │   │   ├── deep.js
    │   │   │   ├── element.js
    │   │   │   ├── err.js
    │   │   │   ├── fakes.js
    │   │   │   ├── fn.js
    │   │   │   ├── global.js
    │   │   │   ├── has.js
    │   │   │   ├── holes.js
    │   │   │   ├── indent-option.js
    │   │   │   ├── inspect.js
    │   │   │   ├── lowbyte.js
    │   │   │   ├── number.js
    │   │   │   ├── quoteStyle.js
    │   │   │   ├── toStringTag.js
    │   │   │   ├── undef.js
    │   │   │   └── values.js
    │   │   ├── test-core-js.js
    │   │   └── util.inspect.js
    │   ├── once
    │   │   ├── LICENSE
    │   │   ├── once.js
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── on-finished
    │   │   ├── HISTORY.md
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── parseurl
    │   │   ├── HISTORY.md
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── path-is-absolute
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── path-to-regexp
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── Readme.md
    │   ├── proxy-addr
    │   │   ├── HISTORY.md
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── qs
    │   │   ├── CHANGELOG.md
    │   │   ├── dist
    │   │   │   └── qs.js
    │   │   ├── lib
    │   │   │   ├── formats.js
    │   │   │   ├── index.js
    │   │   │   ├── parse.js
    │   │   │   ├── stringify.js
    │   │   │   └── utils.js
    │   │   ├── LICENSE.md
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   └── test
    │   │       ├── parse.js
    │   │       ├── stringify.js
    │   │       └── utils.js
    │   ├── range-parser
    │   │   ├── HISTORY.md
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── raw-body
    │   │   ├── HISTORY.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   └── SECURITY.md
    │   ├── readable-stream
    │   │   ├── CONTRIBUTING.md
    │   │   ├── errors-browser.js
    │   │   ├── errors.js
    │   │   ├── experimentalWarning.js
    │   │   ├── GOVERNANCE.md
    │   │   ├── lib
    │   │   │   ├── internal
    │   │   │   │   └── streams
    │   │   │   │       ├── async_iterator.js
    │   │   │   │       ├── buffer_list.js
    │   │   │   │       ├── destroy.js
    │   │   │   │       ├── end-of-stream.js
    │   │   │   │       ├── from-browser.js
    │   │   │   │       ├── from.js
    │   │   │   │       ├── pipeline.js
    │   │   │   │       ├── state.js
    │   │   │   │       ├── stream-browser.js
    │   │   │   │       └── stream.js
    │   │   │   ├── _stream_duplex.js
    │   │   │   ├── _stream_passthrough.js
    │   │   │   ├── _stream_readable.js
    │   │   │   ├── _stream_transform.js
    │   │   │   └── _stream_writable.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── readable-browser.js
    │   │   ├── readable.js
    │   │   └── README.md
    │   ├── rimraf
    │   │   ├── bin.js
    │   │   ├── CHANGELOG.md
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   └── rimraf.js
    │   ├── safe-buffer
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── safer-buffer
    │   │   ├── dangerous.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── Porting-Buffer.md
    │   │   ├── Readme.md
    │   │   ├── safer.js
    │   │   └── tests.js
    │   ├── semver
    │   │   ├── bin
    │   │   │   └── semver.js
    │   │   ├── classes
    │   │   │   ├── comparator.js
    │   │   │   ├── index.js
    │   │   │   ├── range.js
    │   │   │   └── semver.js
    │   │   ├── functions
    │   │   │   ├── clean.js
    │   │   │   ├── cmp.js
    │   │   │   ├── coerce.js
    │   │   │   ├── compare-build.js
    │   │   │   ├── compare.js
    │   │   │   ├── compare-loose.js
    │   │   │   ├── diff.js
    │   │   │   ├── eq.js
    │   │   │   ├── gte.js
    │   │   │   ├── gt.js
    │   │   │   ├── inc.js
    │   │   │   ├── lte.js
    │   │   │   ├── lt.js
    │   │   │   ├── major.js
    │   │   │   ├── minor.js
    │   │   │   ├── neq.js
    │   │   │   ├── parse.js
    │   │   │   ├── patch.js
    │   │   │   ├── prerelease.js
    │   │   │   ├── rcompare.js
    │   │   │   ├── rsort.js
    │   │   │   ├── satisfies.js
    │   │   │   ├── sort.js
    │   │   │   └── valid.js
    │   │   ├── index.js
    │   │   ├── internal
    │   │   │   ├── constants.js
    │   │   │   ├── debug.js
    │   │   │   ├── identifiers.js
    │   │   │   ├── lrucache.js
    │   │   │   ├── parse-options.js
    │   │   │   └── re.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── preload.js
    │   │   ├── range.bnf
    │   │   ├── ranges
    │   │   │   ├── gtr.js
    │   │   │   ├── intersects.js
    │   │   │   ├── ltr.js
    │   │   │   ├── max-satisfying.js
    │   │   │   ├── min-satisfying.js
    │   │   │   ├── min-version.js
    │   │   │   ├── outside.js
    │   │   │   ├── simplify.js
    │   │   │   ├── subset.js
    │   │   │   ├── to-comparators.js
    │   │   │   └── valid.js
    │   │   └── README.md
    │   ├── send
    │   │   ├── HISTORY.md
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── node_modules
    │   │   │   └── ms
    │   │   │       ├── index.js
    │   │   │       ├── license.md
    │   │   │       ├── package.json
    │   │   │       └── readme.md
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   └── SECURITY.md
    │   ├── serve-static
    │   │   ├── HISTORY.md
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── set-blocking
    │   │   ├── CHANGELOG.md
    │   │   ├── index.js
    │   │   ├── LICENSE.txt
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── setprototypeof
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   └── test
    │   │       └── index.js
    │   ├── side-channel
    │   │   ├── CHANGELOG.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   ├── test
    │   │   │   └── index.js
    │   │   └── tsconfig.json
    │   ├── side-channel-list
    │   │   ├── CHANGELOG.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── list.d.ts
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   ├── test
    │   │   │   └── index.js
    │   │   └── tsconfig.json
    │   ├── side-channel-map
    │   │   ├── CHANGELOG.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   ├── test
    │   │   │   └── index.js
    │   │   └── tsconfig.json
    │   ├── side-channel-weakmap
    │   │   ├── CHANGELOG.md
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   ├── test
    │   │   │   └── index.js
    │   │   └── tsconfig.json
    │   ├── signal-exit
    │   │   ├── index.js
    │   │   ├── LICENSE.txt
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   └── signals.js
    │   ├── source-map
    │   │   ├── CHANGELOG.md
    │   │   ├── dist
    │   │   │   ├── source-map.debug.js
    │   │   │   ├── source-map.js
    │   │   │   ├── source-map.min.js
    │   │   │   └── source-map.min.js.map
    │   │   ├── lib
    │   │   │   ├── array-set.js
    │   │   │   ├── base64.js
    │   │   │   ├── base64-vlq.js
    │   │   │   ├── binary-search.js
    │   │   │   ├── mapping-list.js
    │   │   │   ├── quick-sort.js
    │   │   │   ├── source-map-consumer.js
    │   │   │   ├── source-map-generator.js
    │   │   │   ├── source-node.js
    │   │   │   └── util.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   ├── source-map.d.ts
    │   │   └── source-map.js
    │   ├── source-map-support
    │   │   ├── browser-source-map-support.js
    │   │   ├── LICENSE.md
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   ├── register-hook-require.js
    │   │   ├── register.js
    │   │   └── source-map-support.js
    │   ├── statuses
    │   │   ├── codes.json
    │   │   ├── HISTORY.md
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── string_decoder
    │   │   ├── lib
    │   │   │   └── string_decoder.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── string-width
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── strip-ansi
    │   │   ├── index.d.ts
    │   │   ├── index.js
    │   │   ├── license
    │   │   ├── package.json
    │   │   └── readme.md
    │   ├── tar
    │   │   ├── index.js
    │   │   ├── lib
    │   │   │   ├── create.js
    │   │   │   ├── extract.js
    │   │   │   ├── get-write-flag.js
    │   │   │   ├── header.js
    │   │   │   ├── high-level-opt.js
    │   │   │   ├── large-numbers.js
    │   │   │   ├── list.js
    │   │   │   ├── mkdir.js
    │   │   │   ├── mode-fix.js
    │   │   │   ├── normalize-unicode.js
    │   │   │   ├── normalize-windows-path.js
    │   │   │   ├── pack.js
    │   │   │   ├── parse.js
    │   │   │   ├── path-reservations.js
    │   │   │   ├── pax.js
    │   │   │   ├── read-entry.js
    │   │   │   ├── replace.js
    │   │   │   ├── strip-absolute-path.js
    │   │   │   ├── strip-trailing-slashes.js
    │   │   │   ├── types.js
    │   │   │   ├── unpack.js
    │   │   │   ├── update.js
    │   │   │   ├── warn-mixin.js
    │   │   │   ├── winchars.js
    │   │   │   └── write-entry.js
    │   │   ├── LICENSE
    │   │   ├── node_modules
    │   │   │   └── minipass
    │   │   │       ├── index.d.ts
    │   │   │       ├── index.js
    │   │   │       ├── index.mjs
    │   │   │       ├── LICENSE
    │   │   │       ├── package.json
    │   │   │       └── README.md
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── toidentifier
    │   │   ├── HISTORY.md
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── tr46
    │   │   ├── index.js
    │   │   ├── lib
    │   │   │   └── mappingTable.json
    │   │   └── package.json
    │   ├── type-is
    │   │   ├── HISTORY.md
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── unpipe
    │   │   ├── HISTORY.md
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── util-deprecate
    │   │   ├── browser.js
    │   │   ├── History.md
    │   │   ├── LICENSE
    │   │   ├── node.js
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── utils-merge
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── vary
    │   │   ├── HISTORY.md
    │   │   ├── index.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── webidl-conversions
    │   │   ├── lib
    │   │   │   └── index.js
    │   │   ├── LICENSE.md
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── whatwg-url
    │   │   ├── lib
    │   │   │   ├── public-api.js
    │   │   │   ├── URL-impl.js
    │   │   │   ├── URL.js
    │   │   │   ├── url-state-machine.js
    │   │   │   └── utils.js
    │   │   ├── LICENSE.txt
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── wide-align
    │   │   ├── align.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   ├── wrappy
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   ├── README.md
    │   │   └── wrappy.js
    │   ├── xmlhttprequest
    │   │   ├── lib
    │   │   │   └── XMLHttpRequest.js
    │   │   ├── LICENSE
    │   │   ├── package.json
    │   │   └── README.md
    │   └── yallist
    │       ├── iterator.js
    │       ├── LICENSE
    │       ├── package.json
    │       ├── README.md
    │       └── yallist.js
    ├── package.json
    ├── package-lock.json
    ├── publico
    │   ├── assets
    │   │   └── logoinventario360.png
    │   ├── inventario360.html
    │   ├── js
    │   │   ├── app
    │   │   │   ├── ajustes.js
    │   │   │   ├── categorias.js
    │   │   │   ├── clientes.js
    │   │   │   ├── estadisticas.js
    │   │   │   ├── main.js
    │   │   │   ├── modal.js
    │   │   │   ├── modulo-ui.js
    │   │   │   ├── movimientos.js
    │   │   │   ├── navegacion.js
    │   │   │   ├── perfil.js
    │   │   │   ├── productos.js
    │   │   │   ├── proveedores.js
    │   │   │   ├── secion.js
    │   │   │   ├── utils.js
    │   │   │   ├── validaciondecampos.js
    │   │   │   └── ventas.js
    │   │   ├── index.js
    │   │   ├── login.js
    │   │   └── validaciodecampos.js
    │   ├── login.html
    │   ├── stilos
    │   │   ├── appstyles.css
    │   │   ├── globals.css
    │   │   ├── inventario.css
    │   │   ├── layout.css
    │   │   ├── loginstyles.css
    │   │   └── ventas.css
    │   └── uploads
    │       ├── catres_1763797708627.jpg
    │       ├── Llantas_1763707382876.jpg
    │       ├── martinez2025_1763586098145.jpg
    │       ├── martinez2025_1763677664707.jpg
    │       ├── martinez2025_1763864637963.jpg
    │       ├── poster_1763677590180.jpg
    │       └── ProductoQA_1763707370090.jpg
    ├── README.md
    ├── read_users.js
    ├── routes
    │   ├── categorias.js
    │   ├── clientes.js
    │   ├── estadisticas.js
    │   ├── movimientos.js
    │   ├── productos.js
    │   ├── proveedores.js
    │   └── usuarios.js
    └── servidor.js



```

---

### Licencia

unknown
