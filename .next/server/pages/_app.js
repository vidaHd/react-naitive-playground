"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: external "@mui/icons-material/Google"
const Google_namespaceObject = require("@mui/icons-material/Google");
;// CONCATENATED MODULE: external "@mui/icons-material/Drafts"
const Drafts_namespaceObject = require("@mui/icons-material/Drafts");
;// CONCATENATED MODULE: external "@mui/icons-material/GitHub"
const GitHub_namespaceObject = require("@mui/icons-material/GitHub");
;// CONCATENATED MODULE: external "@mui/icons-material/LinkedIn"
const LinkedIn_namespaceObject = require("@mui/icons-material/LinkedIn");
;// CONCATENATED MODULE: external "@mui/icons-material/Twitter"
const Twitter_namespaceObject = require("@mui/icons-material/Twitter");
;// CONCATENATED MODULE: ./src/Component/Footer/Footer.js







const Footer = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            style: {
                bottom: 0,
                width: "100%",
                background: `linear-gradient(90deg, rgba(47,87,147,1) 0%, rgba(208,138,137,1) 43%, rgba(110,102,139,1) 91%)`,
                height: 200,
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center"
            },
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        width: "23%",
                        height: "80%"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            variant: "h5",
                            children: "LOCATION"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            variant: "overline",
                            children: "Some Where in Iran"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            variant: "overline",
                            children: "lorem"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        width: "33%",
                        height: "80%"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            variant: "h5",
                            children: "ABOUT"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            variant: "overline",
                            style: {
                                display: "flex",
                                flexWrap: "wrap",
                                height: "80px"
                            },
                            children: "this is sample page created to demonstrate converting bootstrap theme to react"
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const Footer_Footer = (Footer);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@mui/material/IconButton"
const IconButton_namespaceObject = require("@mui/material/IconButton");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Menu"
const Menu_namespaceObject = require("@mui/icons-material/Menu");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Drawer"
const Drawer_namespaceObject = require("@mui/material/Drawer");
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/List"
var List_ = __webpack_require__(4192);
var List_default = /*#__PURE__*/__webpack_require__.n(List_);
// EXTERNAL MODULE: external "@mui/material/ListItem"
var ListItem_ = __webpack_require__(834);
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);
;// CONCATENATED MODULE: external "@mui/material/ListItemIcon"
const ListItemIcon_namespaceObject = require("@mui/material/ListItemIcon");
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/ListItemText"
var ListItemText_ = __webpack_require__(8315);
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_);
;// CONCATENATED MODULE: external "@mui/icons-material/MoveToInbox"
const MoveToInbox_namespaceObject = require("@mui/icons-material/MoveToInbox");
var MoveToInbox_default = /*#__PURE__*/__webpack_require__.n(MoveToInbox_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/Mail"
const Mail_namespaceObject = require("@mui/icons-material/Mail");
var Mail_default = /*#__PURE__*/__webpack_require__.n(Mail_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/Component/Header/Header.js













const Header = ()=>{
    const { 0: openDrawer , 1: setOpenDrawer  } = (0,external_react_.useState)(false);
    const handleOpenDrawer = ()=>{
        setOpenDrawer(true);
    };
    const toggleDrawer = (open)=>(event)=>{
            if (event.type === "type" && (event.key === "Tab" || event.key === "Shift")) {
                return;
            }
            setOpenDrawer(open);
        }
    ;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.AppBar, {
                position: "static",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Toolbar, {
                    style: {
                        background: "rgba(143, 88, 73, 1)"
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Tooltip, {
                            title: "Open settings",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/profile",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Avatar, {
                                        alt: "Remy Sharp"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(material_.Typography, {
                            variant: "h6",
                            noWrap: true,
                            component: "div",
                            style: {
                                flex: 1
                            },
                            children: "JobJoy"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                            edge: "end",
                            color: "inherit",
                            "aria-label": "menu",
                            sx: {
                                mr: 2
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {
                                onClick: handleOpenDrawer
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((Drawer_default()), {
                anchor: "right",
                open: openDrawer,
                onClose: toggleDrawer(false),
                onOpen: toggleDrawer(true),
                children: /*#__PURE__*/ jsx_runtime_.jsx((List_default()), {
                    style: {
                        padding: 20
                    },
                    children: [
                        "PROFILE"
                    ].map((text, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((ListItem_default()), {
                            button: true,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((ListItemIcon_default()), {
                                    children: index % 2 === 0 ? /*#__PURE__*/ jsx_runtime_.jsx((MoveToInbox_default()), {}) : /*#__PURE__*/ jsx_runtime_.jsx((Mail_default()), {})
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((ListItemText_default()), {
                                    primary: text
                                })
                            ]
                        }, text)
                    )
                })
            })
        ]
    }));
};
/* harmony default export */ const Header_Header = (Header);

;// CONCATENATED MODULE: ./src/Component/layout.js

// import Navbar from "./navbar";


// eslint-disable-next-line import/no-anonymous-default-export
/* harmony default export */ const layout = (({ children  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header_Header, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(Footer_Footer, {})
        ]
    }));
});

;// CONCATENATED MODULE: ./src/pages/_app.js



// eslint-disable-next-line import/no-anonymous-default-export
/* harmony default export */ const _app = (({ Component , pageProps , ...appProps })=>{
    const getContent = ()=>{
        if ([
            `/login`
        ].includes(appProps.router.pathname)) return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        }));
        if ([
            `/sign`
        ].includes(appProps.router.pathname)) return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        }));
        if ([
            `/forgetPassword`
        ].includes(appProps.router.pathname)) return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        }));
        if ([
            `/profile`
        ].includes(appProps.router.pathname)) return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        }));
        return(/*#__PURE__*/ jsx_runtime_.jsx(layout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        }));
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: getContent()
    }));
});


/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 4192:
/***/ ((module) => {

module.exports = require("@mui/material/List");

/***/ }),

/***/ 834:
/***/ ((module) => {

module.exports = require("@mui/material/ListItem");

/***/ }),

/***/ 8315:
/***/ ((module) => {

module.exports = require("@mui/material/ListItemText");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664], () => (__webpack_exec__(4131)));
module.exports = __webpack_exports__;

})();