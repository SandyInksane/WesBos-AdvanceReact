(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Cart.js":
/*!****************************!*\
  !*** ./components/Cart.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Cart; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_CartStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/CartStyles */ "./components/styles/CartStyles.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User */ "./components/User");
/* harmony import */ var _styles_Supreme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/Supreme */ "./components/styles/Supreme.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/calcTotalPrice */ "./lib/calcTotalPrice.js");
/* harmony import */ var _lib_cartState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/cartState */ "./lib/cartState.js");
/* harmony import */ var _styles_CloseButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/CloseButton */ "./components/styles/CloseButton.js");
/* harmony import */ var _RemoveFromCart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./RemoveFromCart */ "./components/RemoveFromCart.js");

var _jsxFileName = "T:\\WesBos\\Advanced-React\\sick-fits\\frontend\\components\\Cart.js";









const CartItemStyles = styled_components__WEBPACK_IMPORTED_MODULE_1___default().li.withConfig({
  displayName: "Cart__CartItemStyles",
  componentId: "sc-19s6z00-0"
})(["padding:1rem 0;border-bottom:1px solid var(--lightGrey);display:grid;grid-template-columns:auto 1fr auto;img{margin-right:1rem;}h3,p{margin:0;}"]);

function CartItem({
  cartItem
}) {
  const {
    product
  } = cartItem;
  if (!product) return null;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartItemStyles, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      width: "100",
      src: product.photo.image.publicUrlTransformed,
      alt: product.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: product.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: [(0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_5__.default)(product.price * cartItem.quantity), "-", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("em", {
          children: [cartItem.quantity, " \xD7 ", (0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_5__.default)(product.price), " each"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RemoveFromCart__WEBPACK_IMPORTED_MODULE_9__.default, {
      id: cartItem.id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

function Cart() {
  const me = (0,_User__WEBPACK_IMPORTED_MODULE_3__.useUser)();
  const {
    cartOpen,
    closeCart
  } = (0,_lib_cartState__WEBPACK_IMPORTED_MODULE_7__.useCart)();
  if (!me) return null;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_CartStyles__WEBPACK_IMPORTED_MODULE_2__.default, {
    open: cartOpen,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Supreme__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: "blabla"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_CloseButton__WEBPACK_IMPORTED_MODULE_8__.default, {
      onClick: closeCart,
      children: " \xD7 "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: me.cart.map(cartItem => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartItem, {
        cartItem: cartItem
      }, cartItem.id, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: (0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_5__.default)((0,_lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_6__.default)(me.cart))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/CartCount.js":
/*!*********************************!*\
  !*** ./components/CartCount.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CartCount; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-transition-group */ "react-transition-group");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "T:\\WesBos\\Advanced-React\\sick-fits\\frontend\\components\\CartCount.js";


const AnimationStyles = styled_components__WEBPACK_IMPORTED_MODULE_1___default().span.withConfig({
  displayName: "CartCount__AnimationStyles",
  componentId: "sc-xxvp4g-0"
})(["position:relative;.count{display:block;position:relative;transition:transform 0.4s;backface-visibility:hidden;}.count-enter{transform:scale(4) rotateX(0.5turn);}.count-enter-active{transform:rotateX(0);}.count-exit{top:0;position:absolute;transform:rotateX(0);}.count-exit-active{background:pink;transform:scale(4) rotateX(0.5turn);}"]);
const Dot = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "CartCount__Dot",
  componentId: "sc-xxvp4g-1"
})(["background:var(--red);color:white;border-radius:50%;padding:0.5rem;line-height:2rem;min-width:3rem;margin-left:1rem;font-feature-settings:'tnum';font-variant-numeric:tabular-nums;"]);
function CartCount({
  count
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimationStyles, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_transition_group__WEBPACK_IMPORTED_MODULE_2__.TransitionGroup, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_transition_group__WEBPACK_IMPORTED_MODULE_2__.CSSTransition, {
        unmountOnExit: true,
        className: "count",
        classNames: "count",
        timeout: {
          enter: 5000,
          exit: 400
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Dot, {
          children: count
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, this)
      }, count, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Nav */ "./components/Nav.js");
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Cart */ "./components/Cart.js");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Search */ "./components/Search.js");

var _jsxFileName = "T:\\WesBos\\Advanced-React\\sick-fits\\frontend\\components\\Header.js";





const Logo = styled_components__WEBPACK_IMPORTED_MODULE_2___default().h1.withConfig({
  displayName: "Header__Logo",
  componentId: "sc-2cpreo-0"
})(["font-size:4rem;margin-left:2rem;position:relative;z-index:2;background:var(--red);transform:skew(-7deg);a{color:white;text-decoration:none;text-transform:uppercase;padding:0.5rem 1rem;}"]);
const HeaderStyles = styled_components__WEBPACK_IMPORTED_MODULE_2___default().header.withConfig({
  displayName: "Header__HeaderStyles",
  componentId: "sc-2cpreo-1"
})([".bar{border-bottom:10px solid var(--black,black);display:grid;grid-template-columns:auto 1fr;justify-content:space-between;align-items:stretch;}.sub-bar{display:grid;grid-template-columns:1fr auto;border-bottom:1px solid var(--grey,grey);}"]);
function Header() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderStyles, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "bar",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logo, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/",
          children: "Sick fits"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "sub-bar",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Search__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cart__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Nav; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_NavStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/NavStyles */ "./components/styles/NavStyles.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User */ "./components/User");
/* harmony import */ var _SignOut__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SignOut */ "./components/SignOut.js");
/* harmony import */ var _lib_cartState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/cartState */ "./lib/cartState.js");
/* harmony import */ var _CartCount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CartCount */ "./components/CartCount.js");


var _jsxFileName = "T:\\WesBos\\Advanced-React\\sick-fits\\frontend\\components\\Nav.js";






function Nav() {
  const user = (0,_User__WEBPACK_IMPORTED_MODULE_3__.useUser)();
  const {
    openCart
  } = (0,_lib_cartState__WEBPACK_IMPORTED_MODULE_5__.useCart)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_NavStyles__WEBPACK_IMPORTED_MODULE_2__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/products",
      children: "Products"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/sell",
        children: "Sell"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/orders",
        children: "Orders"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/account",
        children: "Accounts"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SignOut__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "button",
        onClick: openCart,
        children: ["My Cart", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CartCount__WEBPACK_IMPORTED_MODULE_6__.default, {
          count: user.cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }, this)]
    }, void 0, true), !user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/signin",
        children: "Sign In"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }, this)
    }, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Page; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Nav */ "./components/Nav.js");

var _jsxFileName = "T:\\WesBos\\Advanced-React\\sick-fits\\frontend\\components\\Page.js";




const GlobalStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.createGlobalStyle)(["@font-face{font-family:'radnika_next';src:url('/static/radnikanext-medium-webfont.woff2') format('woff2');font-weight:normal;font-style:normal;}html{--red:#FDDA0D;--black:#393939;--grey:#3A3A3A;--gray:var(--grey);--lightGrey:#E1E1E1;--lightGray:var(---lightGrey);--offWhite:#ededed;--maxWidth:1000px;--bs:0 12px 24px 0 rgba(0,0,0,0.09);box-sizing:border-box;font-size:10px;}*,*:before *:after{box-sizing:inherit;}body{font-family:'radnika_next',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;padding:0;margin:0;font-size:1.5rem;line-height:2;}a{text-decoration:none;color:var(---black);}a:hover{text-decoration:underline;}button{font-family:'radnika_next',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;}"]);
const InnerStyles = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Page__InnerStyles",
  componentId: "sc-4u7a64-0"
})(["max-width:var(--maxWidth);margin:0 auto;padding:2rem;"]);
function Page({
  children,
  cool
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyles, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InnerStyles, {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }, this);
}
Page.propTypes = {
  cool: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any) // children: PropTypes.oneOf([
  // PropTypes.arrayOf(PropTypes.node),#393939;
  // PropTypes.node,
  // ]),

};

/***/ }),

/***/ "./components/RemoveFromCart.js":
/*!**************************************!*\
  !*** ./components/RemoveFromCart.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ RemoveFromCart; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "T:\\WesBos\\Advanced-React\\sick-fits\\frontend\\components\\RemoveFromCart.js";



const BigButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default().button.withConfig({
  displayName: "RemoveFromCart__BigButton",
  componentId: "sc-emvtd6-0"
})(["font-size:3rem;background:none;border:0;&:hover{color:var(--red);cursor:pointer;}"]);
const REMOVE_FROM_CART_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  mutation REMOVE_FROM_CART_MUTATION($id: ID!) {
    deleteCartItem(id: $id) {
      id
    }
  }
`;

function update(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteCartItem));
}

function RemoveFromCart({
  id
}) {
  const [removeFromCart, {
    loading
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(REMOVE_FROM_CART_MUTATION, {
    variables: {
      id
    },
    update // optimisticResponse: {
    //   deleteCartItem: {
    //     __typename: 'CartItem',
    //     id,
    //   },
    // },

  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BigButton, {
    onClick: removeFromCart,
    disbaled: loading,
    type: "button",
    title: "Remove this item from cart",
    children: "\xD7"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Search; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! downshift */ "downshift");
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(downshift__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash.debounce */ "lodash.debounce");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_DropDown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/DropDown */ "./components/styles/DropDown.js");

var _jsxFileName = "T:\\WesBos\\Advanced-React\\sick-fits\\frontend\\components\\Search.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const SEARCH_PRODUCTS_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_3___default())`
  query SEARCH_PRODUCTS_QUERY($searchTerm: String!) {
    searchTerms: allProducts(
      where: {
        OR: [
          { name_contains_i: $searchTerm }
          { description_contains_i: $searchTerm }
        ]
      }
    ) {
      id
      name
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;
function Search() {
  const [findItems, {
    loading,
    data,
    error
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useLazyQuery)(SEARCH_PRODUCTS_QUERY, {
    fetchPolicy: 'no-cache'
  });
  console.log('3:');
  console.log(data);
  console.log(data === null || data === void 0 ? void 0 : data.searchTerm);
  console.log(data === null || data === void 0 ? void 0 : data.searchTerms);
  const items = (data === null || data === void 0 ? void 0 : data.searchTerms) || [];
  const findItemsButChill = lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default()(findItems, 350);
  (0,downshift__WEBPACK_IMPORTED_MODULE_2__.resetIdCounter)();
  const {
    inputValue,
    getMenuProps,
    getInputProps,
    getComboboxProps
  } = (0,downshift__WEBPACK_IMPORTED_MODULE_2__.useCombobox)({
    items: [],

    onInputValueChange() {
      console.log('input chagne');
      console.log(inputValue);
      findItemsButChill({
        variables: {
          searchTerm: inputValue
        }
      });
    },

    onSelectedItemChange() {
      console.log('selected item change');
    }

  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_DropDown__WEBPACK_IMPORTED_MODULE_5__.SearchStyles, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", _objectSpread(_objectSpread({}, getComboboxProps()), {}, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", _objectSpread({}, getInputProps({
        type: 'search',
        placeholder: 'Search for an item',
        id: 'search',
        className: loading ? 'loading' : ''
      })), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_DropDown__WEBPACK_IMPORTED_MODULE_5__.DropDown, _objectSpread(_objectSpread({}, getMenuProps()), {}, {
      children: items.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_DropDown__WEBPACK_IMPORTED_MODULE_5__.DropDownItem, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: item.photo.image.publicUrlTransforemed,
          alt: item.name,
          width: "50"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 13
        }, this), item.name]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 11
      }, this))
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/SignOut.js":
/*!*******************************!*\
  !*** ./components/SignOut.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SignOut; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User */ "./components/User");

var _jsxFileName = "T:\\WesBos\\Advanced-React\\sick-fits\\frontend\\components\\SignOut.js";



const SIGN_OUT_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  mutation {
    endSession
  }
`;
function SignOut() {
  const [signout] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(SIGN_OUT_MUTATION, {
    refetchQueries: [{
      query: _User__WEBPACK_IMPORTED_MODULE_3__.CURRENT_USER_QUERY
    }]
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    type: "button",
    onClick: signout,
    children: "Sign out"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/styles/CartStyles.js":
/*!*****************************************!*\
  !*** ./components/styles/CartStyles.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const CartStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "CartStyles",
  componentId: "sc-1tvog53-0"
})(["padding:20px;position:relative;background:white;position:fixed;height:100%;top:0;right:0;width:40%;min-width:500px;bottom:0;transform:translateX(100%);transition:all 0.3s;box-shadow:0 0 10px 3px rgba(0,0,0,0.2);z-index:5;display:grid;grid-template-rows:auto 1fr auto;", ";header{border-bottom:5px solid var(--black);margin-bottom:2rem;padding-bottom:2rem;}footer{border-top:10px double var(--black);margin-top:2rem;padding-top:2rem;display:grid;grid-template-columns:auto auto;align-items:center;font-size:3rem;font-weight:900;p{margin:0;}}ul{margin:0;padding:0;list-style:none;overflow:scroll;}"], props => props.open && `transform: translateX(0);`);
/* harmony default export */ __webpack_exports__["default"] = (CartStyles);

/***/ }),

/***/ "./components/styles/CloseButton.js":
/*!******************************************!*\
  !*** ./components/styles/CloseButton.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "CloseButton",
  componentId: "sc-1seb878-0"
})(["background:black;color:white;font-size:3rem;border:0;position:absolute;z-index:2;right:0;"]);
/* harmony default export */ __webpack_exports__["default"] = (CloseButton);

/***/ }),

/***/ "./components/styles/DropDown.js":
/*!***************************************!*\
  !*** ./components/styles/DropDown.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropDown": function() { return /* binding */ DropDown; },
/* harmony export */   "DropDownItem": function() { return /* binding */ DropDownItem; },
/* harmony export */   "SearchStyles": function() { return /* binding */ SearchStyles; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const DropDown = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "DropDown",
  componentId: "sc-n5d97g-0"
})(["position:absolute;width:100%;z-index:2;border:1px solid var(--lightGray);"]);
const DropDownItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "DropDown__DropDownItem",
  componentId: "sc-n5d97g-1"
})(["border-bottom:1px solid var(--lightGray);background:", ";padding:1rem;transition:all 0.2s;", ";display:flex;align-items:center;border-left:10px solid ", ";img{margin-right:10px;}"], props => props.highlighted ? '#f7f7f7' : 'white', props => props.highlighted ? 'padding-left: 2rem;' : null, props => props.highlighted ? props.theme.lightgrey : 'white');
const glow = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["from{box-shadow:0 0 0px yellow;}to{box-shadow:0 0 10px 1px yellow;}"]);
const SearchStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "DropDown__SearchStyles",
  componentId: "sc-n5d97g-2"
})(["position:relative;input{width:100%;padding:10px;border:0;font-size:2rem;&.loading{animation:", " 0.5s ease-in-out infinite alternate;}}"], glow);


/***/ }),

/***/ "./components/styles/NavStyles.js":
/*!****************************************!*\
  !*** ./components/styles/NavStyles.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const NavStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "NavStyles",
  componentId: "sc-11c0d2g-0"
})(["margin:0;padding:0;display:flex;justify-self:end;font-size:2rem;a,button{padding:1rem 3rem;display:flex;align-items:center;position:relative;text-transform:uppercase;font-weight:900;font-size:1em;background:none;border:0;cursor:pointer;@media (max-width:700px){font-size:10px;padding:0 10px;}&:before{content:'';width:2px;background:var(--lightGray);height:100%;left:0;position:absolute;transform:skew(-20deg);top:0;bottom:0;}&:after{height:2px;background:red;content:'';width:0;position:absolute;transform:translateX(-50%);transition:width 0.4s;transition-timing-function:cubic-bezier(1,-0.65,0,2.31);left:50%;margin-top:2rem;}&:hover,&:focus{outline:none;text-decoration:none;&:after{width:calc(100% - 60px);}@media (max-width:700px){width:calc(100% - 10px);}}}@media (max-width:1300px){border-top:1px solid var(--lightGray);width:100%;justify-content:center;font-size:1.5rem;}"]);
/* harmony default export */ __webpack_exports__["default"] = (NavStyles);

/***/ }),

/***/ "./components/styles/Supreme.js":
/*!**************************************!*\
  !*** ./components/styles/Supreme.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Supreme = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
  displayName: "Supreme",
  componentId: "sc-xv30qb-0"
})(["background:var(--red);color:white;display:inline-block;padding:4px 5px;transform:skew(-3deg);margin:0;font-size:4rem;"]);
/* harmony default export */ __webpack_exports__["default"] = (Supreme);

/***/ }),

/***/ "./lib/calcTotalPrice.js":
/*!*******************************!*\
  !*** ./lib/calcTotalPrice.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ calcTotalPrice; }
/* harmony export */ });
function calcTotalPrice(cart) {
  return cart.reduce((tally, cartItem) => {
    if (!cartItem.product) return tally; // products can be deleted, but they couldstill be in your cart

    return tally + cartItem.quantity * cartItem.product.price;
  }, 0);
}

/***/ }),

/***/ "./lib/cartState.js":
/*!**************************!*\
  !*** ./lib/cartState.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartStateProvider": function() { return /* binding */ CartStateProvider; },
/* harmony export */   "useCart": function() { return /* binding */ useCart; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "T:\\WesBos\\Advanced-React\\sick-fits\\frontend\\lib\\cartState.js";

const LocalStateContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({
  children
}) {
  // our own custom provider
  const {
    0: cartOpen,
    1: setCartOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  function toggleCart() {
    setCartOpen(!cartOpen);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LocalStateProvider, {
    value: {
      cartOpen,
      setCartOpen,
      toggleCart,
      closeCart,
      openCart
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);

  function closeCart() {
    setCartOpen(false);
  }

  function openCart() {
    setCartOpen(true);
  }
} // make a custom hook for accessing the cart local state


function useCart() {
  const all = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LocalStateContext);
  return all;
}



/***/ }),

/***/ "./lib/paginationField.js":
/*!********************************!*\
  !*** ./lib/paginationField.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ paginationField; }
/* harmony export */ });
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Pagination */ "./components/Pagination.js");

function paginationField() {
  return {
    keyArgs: false,

    // tells apollo we wil take care of everything
    read(existing = [], {
      args,
      cache
    }) {
      const {
        skip,
        first
      } = args;
      const data = cache.readQuery({
        query: _components_Pagination__WEBPACK_IMPORTED_MODULE_0__.PAGINATION_QUERY
      });
      const count = data === null || data === void 0 ? void 0 : data._allProductsMeta.count;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first);
      const items = existing.slice(skip, skip + first).filter(x => x); // filter out undefined items

      if (items.length && items.length !== first && page === pages) {
        return items;
      }

      if (items.length !== first) {
        // we don't have anyitems, we must fetch from network
        return false; // we looked in the cache, there are none, go to the network
      }

      if (items.length) {
        return items;
      }

      return false;
    },

    merge(existing, incoming, {
      args
    }) {
      const {
        skip,
        first
      } = args;
      console.log(`Merging items from the netwrok ${incoming.lenth}`);
      const merged = existing ? existing.slice(0) : [];
      merged.push(incoming);

      for (let i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      }

      return merged; // na merge, komt auto read terug. dus: merge, read, merge
    }

  };
}

/***/ }),

/***/ "./lib/withData.js":
/*!*************************!*\
  !*** ./lib/withData.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_link_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/link-error */ "@apollo/link-error");
/* harmony import */ var _apollo_link_error__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_link_error__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/react/ssr */ "@apollo/client/react/ssr");
/* harmony import */ var _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-upload-client */ "apollo-upload-client");
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_upload_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-with-apollo */ "next-with-apollo");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _paginationField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paginationField */ "./lib/paginationField.js");








function createClient({
  headers,
  initialState
}) {
  return new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({
    link: _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloLink.from([(0,_apollo_link_error__WEBPACK_IMPORTED_MODULE_1__.onError)(({
      graphQLErrors,
      networkError
    }) => {
      if (graphQLErrors) graphQLErrors.forEach(({
        message,
        locations,
        path
      }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
      if (networkError) console.log(`[Network error]: ${networkError}. Backend is unreachable. Is it running?`);
    }), // this uses apollo-link-http under the hood, so all the options here come from that package
    (0,apollo_upload_client__WEBPACK_IMPORTED_MODULE_3__.createUploadLink)({
      uri:  true ? _config__WEBPACK_IMPORTED_MODULE_5__.endpoint : 0,
      fetchOptions: {
        credentials: 'include'
      },
      // pass the headers along from this request. This enables SSR with logged in state
      headers
    })]),
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            // TODO: We will add this together!
            allProducts: (0,_paginationField__WEBPACK_IMPORTED_MODULE_6__.default)()
          }
        }
      }
    }).restore(initialState || {})
  });
}

/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_4___default()(createClient, {
  getDataFromTree: _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2__.getDataFromTree
}));

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Page */ "./components/Page.js");
/* harmony import */ var _lib_cartState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/cartState */ "./lib/cartState.js");
/* harmony import */ var _components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/styles/nprogress.css */ "./components/styles/nprogress.css");
/* harmony import */ var _components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_withData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/withData */ "./lib/withData.js");

var _jsxFileName = "T:\\WesBos\\Advanced-React\\sick-fits\\frontend\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // import 'nprogress/nprogress.css';



next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on('routeChangeStart', () => nprogress__WEBPACK_IMPORTED_MODULE_1___default().start());
next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on('routeChangeComplete', () => nprogress__WEBPACK_IMPORTED_MODULE_1___default().done());
next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on('routeChangeError', () => nprogress__WEBPACK_IMPORTED_MODULE_1___default().done());

function MyApp({
  Component,
  pageProps,
  apollo
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_3__.ApolloProvider, {
    client: apollo,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_cartState__WEBPACK_IMPORTED_MODULE_5__.CartStateProvider, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Page__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

MyApp.getInitialProps = async function ({
  Component,
  ctx
}) {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  pageProps.query = ctx.query;
  return {
    pageProps
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_lib_withData__WEBPACK_IMPORTED_MODULE_7__.default)(MyApp));

/***/ }),

/***/ "./components/styles/nprogress.css":
/*!*****************************************!*\
  !*** ./components/styles/nprogress.css ***!
  \*****************************************/
/***/ (function() {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "@apollo/client/react/ssr":
/*!*******************************************!*\
  !*** external "@apollo/client/react/ssr" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client/react/ssr");;

/***/ }),

/***/ "@apollo/link-error":
/*!*************************************!*\
  !*** external "@apollo/link-error" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/link-error");;

/***/ }),

/***/ "apollo-upload-client":
/*!***************************************!*\
  !*** external "apollo-upload-client" ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = require("apollo-upload-client");;

/***/ }),

/***/ "downshift":
/*!****************************!*\
  !*** external "downshift" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("downshift");;

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ "lodash.debounce":
/*!**********************************!*\
  !*** external "lodash.debounce" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("lodash.debounce");;

/***/ }),

/***/ "next-with-apollo":
/*!***********************************!*\
  !*** external "next-with-apollo" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-with-apollo");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("nprogress");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-transition-group");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_User-components_Pagination_js-lib_formatMoney_js"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL0NhcnQuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9DYXJ0Q291bnQuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9OYXYuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9QYWdlLmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL2NvbXBvbmVudHMvUmVtb3ZlRnJvbUNhcnQuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9TZWFyY2guanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9TaWduT3V0LmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL2NvbXBvbmVudHMvc3R5bGVzL0NhcnRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9zdHlsZXMvQ2xvc2VCdXR0b24uanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9zdHlsZXMvRHJvcERvd24uanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9zdHlsZXMvTmF2U3R5bGVzLmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL2NvbXBvbmVudHMvc3R5bGVzL1N1cHJlbWUuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vbGliL2NhbGNUb3RhbFByaWNlLmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL2xpYi9jYXJ0U3RhdGUuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vbGliL3BhZ2luYXRpb25GaWVsZC5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9saWIvd2l0aERhdGEuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcIkBhcG9sbG8vY2xpZW50L3JlYWN0L3NzclwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcIkBhcG9sbG8vbGluay1lcnJvclwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcImFwb2xsby11cGxvYWQtY2xpZW50XCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwiZG93bnNoaWZ0XCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwiZ3JhcGhxbC10YWdcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJsb2Rhc2guZGVib3VuY2VcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0LXdpdGgtYXBvbGxvXCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcIm5wcm9ncmVzc1wiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0LXRyYW5zaXRpb24tZ3JvdXBcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIl0sIm5hbWVzIjpbIkNhcnRJdGVtU3R5bGVzIiwic3R5bGVkIiwiQ2FydEl0ZW0iLCJjYXJ0SXRlbSIsInByb2R1Y3QiLCJwaG90byIsImltYWdlIiwicHVibGljVXJsVHJhbnNmb3JtZWQiLCJuYW1lIiwiZm9ybWF0TW9uZXkiLCJwcmljZSIsInF1YW50aXR5IiwiaWQiLCJDYXJ0IiwibWUiLCJ1c2VVc2VyIiwiY2FydE9wZW4iLCJjbG9zZUNhcnQiLCJ1c2VDYXJ0IiwiY2FydCIsIm1hcCIsImNhbGNUb3RhbFByaWNlIiwiQW5pbWF0aW9uU3R5bGVzIiwiRG90IiwiQ2FydENvdW50IiwiY291bnQiLCJlbnRlciIsImV4aXQiLCJMb2dvIiwiSGVhZGVyU3R5bGVzIiwiSGVhZGVyIiwiTmF2IiwidXNlciIsIm9wZW5DYXJ0IiwicmVkdWNlIiwidGFsbHkiLCJHbG9iYWxTdHlsZXMiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIklubmVyU3R5bGVzIiwiUGFnZSIsImNoaWxkcmVuIiwiY29vbCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIkJpZ0J1dHRvbiIsIlJFTU9WRV9GUk9NX0NBUlRfTVVUQVRJT04iLCJncWwiLCJ1cGRhdGUiLCJjYWNoZSIsInBheWxvYWQiLCJldmljdCIsImlkZW50aWZ5IiwiZGF0YSIsImRlbGV0ZUNhcnRJdGVtIiwiUmVtb3ZlRnJvbUNhcnQiLCJyZW1vdmVGcm9tQ2FydCIsImxvYWRpbmciLCJ1c2VNdXRhdGlvbiIsInZhcmlhYmxlcyIsIlNFQVJDSF9QUk9EVUNUU19RVUVSWSIsIlNlYXJjaCIsImZpbmRJdGVtcyIsImVycm9yIiwidXNlTGF6eVF1ZXJ5IiwiZmV0Y2hQb2xpY3kiLCJjb25zb2xlIiwibG9nIiwic2VhcmNoVGVybSIsInNlYXJjaFRlcm1zIiwiaXRlbXMiLCJmaW5kSXRlbXNCdXRDaGlsbCIsImRlYm91bmNlIiwicmVzZXRJZENvdW50ZXIiLCJpbnB1dFZhbHVlIiwiZ2V0TWVudVByb3BzIiwiZ2V0SW5wdXRQcm9wcyIsImdldENvbWJvYm94UHJvcHMiLCJ1c2VDb21ib2JveCIsIm9uSW5wdXRWYWx1ZUNoYW5nZSIsIm9uU2VsZWN0ZWRJdGVtQ2hhbmdlIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiY2xhc3NOYW1lIiwiaXRlbSIsInB1YmxpY1VybFRyYW5zZm9yZW1lZCIsIlNJR05fT1VUX01VVEFUSU9OIiwiU2lnbk91dCIsInNpZ25vdXQiLCJyZWZldGNoUXVlcmllcyIsInF1ZXJ5IiwiQ1VSUkVOVF9VU0VSX1FVRVJZIiwiQ2FydFN0eWxlcyIsInByb3BzIiwib3BlbiIsIkNsb3NlQnV0dG9uIiwiRHJvcERvd24iLCJEcm9wRG93bkl0ZW0iLCJoaWdobGlnaHRlZCIsInRoZW1lIiwibGlnaHRncmV5IiwiZ2xvdyIsImtleWZyYW1lcyIsIlNlYXJjaFN0eWxlcyIsIk5hdlN0eWxlcyIsIlN1cHJlbWUiLCJMb2NhbFN0YXRlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJMb2NhbFN0YXRlUHJvdmlkZXIiLCJQcm92aWRlciIsIkNhcnRTdGF0ZVByb3ZpZGVyIiwic2V0Q2FydE9wZW4iLCJ1c2VTdGF0ZSIsInRvZ2dsZUNhcnQiLCJhbGwiLCJ1c2VDb250ZXh0IiwicGFnaW5hdGlvbkZpZWxkIiwia2V5QXJncyIsInJlYWQiLCJleGlzdGluZyIsImFyZ3MiLCJza2lwIiwiZmlyc3QiLCJyZWFkUXVlcnkiLCJQQUdJTkFUSU9OX1FVRVJZIiwiX2FsbFByb2R1Y3RzTWV0YSIsInBhZ2UiLCJwYWdlcyIsIk1hdGgiLCJjZWlsIiwic2xpY2UiLCJmaWx0ZXIiLCJ4IiwibGVuZ3RoIiwibWVyZ2UiLCJpbmNvbWluZyIsImxlbnRoIiwibWVyZ2VkIiwicHVzaCIsImkiLCJjcmVhdGVDbGllbnQiLCJoZWFkZXJzIiwiaW5pdGlhbFN0YXRlIiwiQXBvbGxvQ2xpZW50IiwibGluayIsIkFwb2xsb0xpbmsiLCJvbkVycm9yIiwiZ3JhcGhRTEVycm9ycyIsIm5ldHdvcmtFcnJvciIsImZvckVhY2giLCJtZXNzYWdlIiwibG9jYXRpb25zIiwicGF0aCIsImNyZWF0ZVVwbG9hZExpbmsiLCJ1cmkiLCJlbmRwb2ludCIsInByb2RFbmRwb2ludCIsImZldGNoT3B0aW9ucyIsImNyZWRlbnRpYWxzIiwiSW5NZW1vcnlDYWNoZSIsInR5cGVQb2xpY2llcyIsIlF1ZXJ5IiwiZmllbGRzIiwiYWxsUHJvZHVjdHMiLCJyZXN0b3JlIiwid2l0aEFwb2xsbyIsImdldERhdGFGcm9tVHJlZSIsIlJvdXRlciIsIk5Qcm9ncmVzcyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiYXBvbGxvIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Iiwid2l0aERhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxjQUFjLEdBQUdDLHNFQUFIO0FBQUE7QUFBQTtBQUFBLHVKQUFwQjs7QUFjQSxTQUFTQyxRQUFULENBQWtCO0FBQUVDO0FBQUYsQ0FBbEIsRUFBZ0M7QUFDOUIsUUFBTTtBQUFFQztBQUFGLE1BQWNELFFBQXBCO0FBQ0EsTUFBSSxDQUFDQyxPQUFMLEVBQWMs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Q0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IENhcnRTdHlsZXMgZnJvbSAnLi9zdHlsZXMvQ2FydFN0eWxlcyc7XHJcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICcuL1VzZXInO1xyXG5pbXBvcnQgU3VwcmVtZSBmcm9tICcuL3N0eWxlcy9TdXByZW1lJztcclxuaW1wb3J0IGZvcm1hdE1vbmV5IGZyb20gJy4uL2xpYi9mb3JtYXRNb25leSc7XHJcbmltcG9ydCBjYWxjVG90YWxQcmljZSBmcm9tICcuLi9saWIvY2FsY1RvdGFsUHJpY2UnO1xyXG5pbXBvcnQgeyB1c2VDYXJ0IH0gZnJvbSAnLi4vbGliL2NhcnRTdGF0ZSc7XHJcbmltcG9ydCBDbG9zZUJ1dHRvbiBmcm9tICcuL3N0eWxlcy9DbG9zZUJ1dHRvbic7XHJcbmltcG9ydCBSZW1vdmVGcm9tQ2FydCBmcm9tICcuL1JlbW92ZUZyb21DYXJ0JztcclxuXHJcbmNvbnN0IENhcnRJdGVtU3R5bGVzID0gc3R5bGVkLmxpYFxyXG4gIHBhZGRpbmc6IDFyZW0gMDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbGlnaHRHcmV5KTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcclxuICBpbWcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIH1cclxuICBoMyxcclxuICBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBDYXJ0SXRlbSh7IGNhcnRJdGVtIH0pIHtcclxuICBjb25zdCB7IHByb2R1Y3QgfSA9IGNhcnRJdGVtO1xyXG4gIGlmICghcHJvZHVjdCkgcmV0dXJuIG51bGw7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJ0SXRlbVN0eWxlcz5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIHdpZHRoPVwiMTAwXCJcclxuICAgICAgICBzcmM9e3Byb2R1Y3QucGhvdG8uaW1hZ2UucHVibGljVXJsVHJhbnNmb3JtZWR9XHJcbiAgICAgICAgYWx0PXtwcm9kdWN0Lm5hbWV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgzPntwcm9kdWN0Lm5hbWV9PC9oMz5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIHtmb3JtYXRNb25leShwcm9kdWN0LnByaWNlICogY2FydEl0ZW0ucXVhbnRpdHkpfS1cclxuICAgICAgICAgIDxlbT5cclxuICAgICAgICAgICAge2NhcnRJdGVtLnF1YW50aXR5fSAmdGltZXM7IHtmb3JtYXRNb25leShwcm9kdWN0LnByaWNlKX0gZWFjaFxyXG4gICAgICAgICAgPC9lbT5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8UmVtb3ZlRnJvbUNhcnQgaWQ9e2NhcnRJdGVtLmlkfSAvPlxyXG4gICAgPC9DYXJ0SXRlbVN0eWxlcz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJ0KCkge1xyXG4gIGNvbnN0IG1lID0gdXNlVXNlcigpO1xyXG4gIGNvbnN0IHsgY2FydE9wZW4sIGNsb3NlQ2FydCB9ID0gdXNlQ2FydCgpO1xyXG5cclxuICBpZiAoIW1lKSByZXR1cm4gbnVsbDtcclxuICByZXR1cm4gKFxyXG4gICAgPENhcnRTdHlsZXMgb3Blbj17Y2FydE9wZW59PlxyXG4gICAgICA8aGVhZGVyPlxyXG4gICAgICAgIDxTdXByZW1lPmJsYWJsYTwvU3VwcmVtZT5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxDbG9zZUJ1dHRvbiBvbkNsaWNrPXtjbG9zZUNhcnR9PiAmdGltZXM7IDwvQ2xvc2VCdXR0b24+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7bWUuY2FydC5tYXAoKGNhcnRJdGVtKSA9PiAoXHJcbiAgICAgICAgICA8Q2FydEl0ZW0ga2V5PXtjYXJ0SXRlbS5pZH0gY2FydEl0ZW09e2NhcnRJdGVtfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8Zm9vdGVyPlxyXG4gICAgICAgIDxwPntmb3JtYXRNb25leShjYWxjVG90YWxQcmljZShtZS5jYXJ0KSl9PC9wPlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvQ2FydFN0eWxlcz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBUcmFuc2l0aW9uR3JvdXAsIENTU1RyYW5zaXRpb24gfSBmcm9tICdyZWFjdC10cmFuc2l0aW9uLWdyb3VwJztcclxuXHJcbmNvbnN0IEFuaW1hdGlvblN0eWxlcyA9IHN0eWxlZC5zcGFuYFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAuY291bnQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cztcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbiAgLmNvdW50LWVudGVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoNCkgcm90YXRlWCgwLjV0dXJuKTtcclxuICB9XHJcbiAgLmNvdW50LWVudGVyLWFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMCk7XHJcbiAgfVxyXG4gIC5jb3VudC1leGl0IHtcclxuICAgIHRvcDogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgwKTtcclxuICB9XHJcbiAgLmNvdW50LWV4aXQtYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6IHBpbms7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDQpIHJvdGF0ZVgoMC41dHVybik7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgRG90ID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWQpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gIG1pbi13aWR0aDogM3JlbTtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICd0bnVtJztcclxuICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FydENvdW50KHsgY291bnQgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QW5pbWF0aW9uU3R5bGVzPlxyXG4gICAgICA8VHJhbnNpdGlvbkdyb3VwPlxyXG4gICAgICAgIDxDU1NUcmFuc2l0aW9uXHJcbiAgICAgICAgICB1bm1vdW50T25FeGl0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjb3VudFwiXHJcbiAgICAgICAgICBjbGFzc05hbWVzPVwiY291bnRcIlxyXG4gICAgICAgICAga2V5PXtjb3VudH1cclxuICAgICAgICAgIHRpbWVvdXQ9e3sgZW50ZXI6IDUwMDAsIGV4aXQ6IDQwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxEb3Q+e2NvdW50fTwvRG90PlxyXG4gICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cclxuICAgICAgPC9UcmFuc2l0aW9uR3JvdXA+XHJcbiAgICA8L0FuaW1hdGlvblN0eWxlcz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgTmF2IGZyb20gJy4vTmF2JztcclxuaW1wb3J0IENhcnQgZnJvbSAnLi9DYXJ0JztcclxuaW1wb3J0IFNlYXJjaCBmcm9tICcuL1NlYXJjaCc7XHJcblxyXG5jb25zdCBMb2dvID0gc3R5bGVkLmgxYFxyXG4gIGZvbnQtc2l6ZTogNHJlbTtcclxuICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWQpO1xyXG4gIHRyYW5zZm9ybTogc2tldygtN2RlZyk7XHJcbiAgYSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSGVhZGVyU3R5bGVzID0gc3R5bGVkLmhlYWRlcmBcclxuICAuYmFyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgdmFyKC0tYmxhY2ssIGJsYWNrKTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgfVxyXG4gIC5zdWItYmFyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWdyZXksIGdyZXkpO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEhlYWRlclN0eWxlcz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJcIj5cclxuICAgICAgICA8TG9nbz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+U2ljayBmaXRzPC9MaW5rPlxyXG4gICAgICAgIDwvTG9nbz5cclxuICAgICAgICA8TmF2IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi1iYXJcIj5cclxuICAgICAgICA8U2VhcmNoIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Q2FydCAvPlxyXG4gICAgPC9IZWFkZXJTdHlsZXM+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgTmF2U3R5bGVzIGZyb20gJy4vc3R5bGVzL05hdlN0eWxlcyc7XHJcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICcuL1VzZXInO1xyXG5pbXBvcnQgU2lnbk91dCBmcm9tICcuL1NpZ25PdXQnO1xyXG5pbXBvcnQgeyB1c2VDYXJ0IH0gZnJvbSAnLi4vbGliL2NhcnRTdGF0ZSc7XHJcbmltcG9ydCBDYXJ0Q291bnQgZnJvbSAnLi9DYXJ0Q291bnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2KCkge1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VVc2VyKCk7XHJcbiAgY29uc3QgeyBvcGVuQ2FydCB9ID0gdXNlQ2FydCgpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TmF2U3R5bGVzPlxyXG4gICAgICA8TGluayBocmVmPVwiL3Byb2R1Y3RzXCI+UHJvZHVjdHM8L0xpbms+XHJcbiAgICAgIHt1c2VyICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9zZWxsXCI+U2VsbDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvb3JkZXJzXCI+T3JkZXJzPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9hY2NvdW50XCI+QWNjb3VudHM8L0xpbms+XHJcbiAgICAgICAgICA8U2lnbk91dCAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17b3BlbkNhcnR9PlxyXG4gICAgICAgICAgICBNeSBDYXJ0XHJcbiAgICAgICAgICAgIDxDYXJ0Q291bnRcclxuICAgICAgICAgICAgICBjb3VudD17dXNlci5jYXJ0LnJlZHVjZShcclxuICAgICAgICAgICAgICAgICh0YWxseSwgY2FydEl0ZW0pID0+IHRhbGx5ICsgY2FydEl0ZW0ucXVhbnRpdHksXHJcbiAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgICB7IXVzZXIgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ25pblwiPlNpZ24gSW48L0xpbms+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8L05hdlN0eWxlcz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBzdHlsZWQsIHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xyXG5pbXBvcnQgTmF2IGZyb20gJy4vTmF2JztcclxuXHJcbmNvbnN0IEdsb2JhbFN0eWxlcyA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ3JhZG5pa2FfbmV4dCc7XHJcbiAgc3JjOiB1cmwoJy9zdGF0aWMvcmFkbmlrYW5leHQtbWVkaXVtLXdlYmZvbnQud29mZjInKVxyXG4gIGZvcm1hdCgnd29mZjInKTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuXHJcbn1cclxuICBodG1sIHtcclxuICAgIC0tcmVkOiAjRkREQTBEO1xyXG4gICAgLS1ibGFjazogIzM5MzkzOTtcclxuICAgIC0tZ3JleTogIzNBM0EzQTtcclxuICAgIC0tZ3JheTogdmFyKC0tZ3JleSk7XHJcbiAgICAtLWxpZ2h0R3JleTogI0UxRTFFMTtcclxuICAgIC0tbGlnaHRHcmF5OiB2YXIoLS0tbGlnaHRHcmV5KTtcclxuICAgIC0tb2ZmV2hpdGU6ICNlZGVkZWQ7XHJcbiAgICAtLW1heFdpZHRoOiAxMDAwcHg7XHJcbiAgICAtLWJzOiAwIDEycHggMjRweCAwIHJnYmEoMCwwLDAsMC4wOSk7XHJcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG4gICosICo6YmVmb3JlICo6YWZ0ZXIge1xyXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcclxuICB9XHJcbiAgYm9keXtcclxuICAgIGZvbnQtZmFtaWx5OiAncmFkbmlrYV9uZXh0JywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6MjtcclxuIH1cclxuIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogdmFyKC0tLWJsYWNrKTtcclxuXHJcbiB9XHJcbiBhOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuXHJcbiB9XHJcbiBidXR0b24ge1xyXG4gIGZvbnQtZmFtaWx5OiAncmFkbmlrYV9uZXh0JywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICBcclxuIH1cclxuYDtcclxuXHJcbmNvbnN0IElubmVyU3R5bGVzID0gc3R5bGVkLmRpdmBcclxuICBtYXgtd2lkdGg6IHZhcigtLW1heFdpZHRoKTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAycmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSh7IGNoaWxkcmVuLCBjb29sIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEdsb2JhbFN0eWxlcyAvPlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxJbm5lclN0eWxlcz57Y2hpbGRyZW59PC9Jbm5lclN0eWxlcz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblBhZ2UucHJvcFR5cGVzID0ge1xyXG4gIGNvb2w6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXHJcblxyXG4gIC8vIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2YoW1xyXG4gIC8vIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5ub2RlKSwjMzkzOTM5O1xyXG4gIC8vIFByb3BUeXBlcy5ub2RlLFxyXG4gIC8vIF0pLFxyXG59O1xyXG4iLCJpbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgQmlnQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IDA7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogdmFyKC0tcmVkKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBSRU1PVkVfRlJPTV9DQVJUX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIFJFTU9WRV9GUk9NX0NBUlRfTVVUQVRJT04oJGlkOiBJRCEpIHtcclxuICAgIGRlbGV0ZUNhcnRJdGVtKGlkOiAkaWQpIHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9XHJcbmA7XHJcbmZ1bmN0aW9uIHVwZGF0ZShjYWNoZSwgcGF5bG9hZCkge1xyXG4gIGNhY2hlLmV2aWN0KGNhY2hlLmlkZW50aWZ5KHBheWxvYWQuZGF0YS5kZWxldGVDYXJ0SXRlbSkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZW1vdmVGcm9tQ2FydCh7IGlkIH0pIHtcclxuICBjb25zdCBbcmVtb3ZlRnJvbUNhcnQsIHsgbG9hZGluZyB9XSA9IHVzZU11dGF0aW9uKFJFTU9WRV9GUk9NX0NBUlRfTVVUQVRJT04sIHtcclxuICAgIHZhcmlhYmxlczogeyBpZCB9LFxyXG4gICAgdXBkYXRlLFxyXG4gICAgLy8gb3B0aW1pc3RpY1Jlc3BvbnNlOiB7XHJcbiAgICAvLyAgIGRlbGV0ZUNhcnRJdGVtOiB7XHJcbiAgICAvLyAgICAgX190eXBlbmFtZTogJ0NhcnRJdGVtJyxcclxuICAgIC8vICAgICBpZCxcclxuICAgIC8vICAgfSxcclxuICAgIC8vIH0sXHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCaWdCdXR0b25cclxuICAgICAgb25DbGljaz17cmVtb3ZlRnJvbUNhcnR9XHJcbiAgICAgIGRpc2JhbGVkPXtsb2FkaW5nfVxyXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgdGl0bGU9XCJSZW1vdmUgdGhpcyBpdGVtIGZyb20gY2FydFwiXHJcbiAgICA+XHJcbiAgICAgICZ0aW1lcztcclxuICAgIDwvQmlnQnV0dG9uPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlTGF6eVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgeyByZXNldElkQ291bnRlciwgdXNlQ29tYm9ib3ggfSBmcm9tICdkb3duc2hpZnQnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC5kZWJvdW5jZSc7XHJcbmltcG9ydCB7IERyb3BEb3duLCBEcm9wRG93bkl0ZW0sIFNlYXJjaFN0eWxlcyB9IGZyb20gJy4vc3R5bGVzL0Ryb3BEb3duJztcclxuXHJcbmNvbnN0IFNFQVJDSF9QUk9EVUNUU19RVUVSWSA9IGdxbGBcclxuICBxdWVyeSBTRUFSQ0hfUFJPRFVDVFNfUVVFUlkoJHNlYXJjaFRlcm06IFN0cmluZyEpIHtcclxuICAgIHNlYXJjaFRlcm1zOiBhbGxQcm9kdWN0cyhcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBPUjogW1xyXG4gICAgICAgICAgeyBuYW1lX2NvbnRhaW5zX2k6ICRzZWFyY2hUZXJtIH1cclxuICAgICAgICAgIHsgZGVzY3JpcHRpb25fY29udGFpbnNfaTogJHNlYXJjaFRlcm0gfVxyXG4gICAgICAgIF1cclxuICAgICAgfVxyXG4gICAgKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgcGhvdG8ge1xyXG4gICAgICAgIGltYWdlIHtcclxuICAgICAgICAgIHB1YmxpY1VybFRyYW5zZm9ybWVkXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoKCkge1xyXG4gIGNvbnN0IFtmaW5kSXRlbXMsIHsgbG9hZGluZywgZGF0YSwgZXJyb3IgfV0gPSB1c2VMYXp5UXVlcnkoXHJcbiAgICBTRUFSQ0hfUFJPRFVDVFNfUVVFUlksXHJcbiAgICB7XHJcbiAgICAgIGZldGNoUG9saWN5OiAnbm8tY2FjaGUnLFxyXG4gICAgfVxyXG4gICk7XHJcbiAgY29uc29sZS5sb2coJzM6Jyk7XHJcbiAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgY29uc29sZS5sb2coZGF0YT8uc2VhcmNoVGVybSk7XHJcbiAgY29uc29sZS5sb2coZGF0YT8uc2VhcmNoVGVybXMpO1xyXG4gIGNvbnN0IGl0ZW1zID0gZGF0YT8uc2VhcmNoVGVybXMgfHwgW107XHJcbiAgY29uc3QgZmluZEl0ZW1zQnV0Q2hpbGwgPSBkZWJvdW5jZShmaW5kSXRlbXMsIDM1MCk7XHJcbiAgcmVzZXRJZENvdW50ZXIoKTtcclxuICBjb25zdCB7IGlucHV0VmFsdWUsIGdldE1lbnVQcm9wcywgZ2V0SW5wdXRQcm9wcywgZ2V0Q29tYm9ib3hQcm9wcyB9ID1cclxuICAgIHVzZUNvbWJvYm94KHtcclxuICAgICAgaXRlbXM6IFtdLFxyXG4gICAgICBvbklucHV0VmFsdWVDaGFuZ2UoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2lucHV0IGNoYWduZScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlucHV0VmFsdWUpO1xyXG4gICAgICAgIGZpbmRJdGVtc0J1dENoaWxsKHtcclxuICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICBzZWFyY2hUZXJtOiBpbnB1dFZhbHVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgb25TZWxlY3RlZEl0ZW1DaGFuZ2UoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NlbGVjdGVkIGl0ZW0gY2hhbmdlJyk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPFNlYXJjaFN0eWxlcz5cclxuICAgICAgPGRpdiB7Li4uZ2V0Q29tYm9ib3hQcm9wcygpfT5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHsuLi5nZXRJbnB1dFByb3BzKHtcclxuICAgICAgICAgICAgdHlwZTogJ3NlYXJjaCcsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnU2VhcmNoIGZvciBhbiBpdGVtJyxcclxuICAgICAgICAgICAgaWQ6ICdzZWFyY2gnLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IGxvYWRpbmcgPyAnbG9hZGluZycgOiAnJyxcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8RHJvcERvd24gey4uLmdldE1lbnVQcm9wcygpfT5cclxuICAgICAgICB7aXRlbXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICA8RHJvcERvd25JdGVtPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPXtpdGVtLnBob3RvLmltYWdlLnB1YmxpY1VybFRyYW5zZm9yZW1lZH1cclxuICAgICAgICAgICAgICBhbHQ9e2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICB3aWR0aD1cIjUwXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgIDwvRHJvcERvd25JdGVtPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0Ryb3BEb3duPlxyXG4gICAgPC9TZWFyY2hTdHlsZXM+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCB7IENVUlJFTlRfVVNFUl9RVUVSWSB9IGZyb20gJy4vVXNlcic7XHJcblxyXG5jb25zdCBTSUdOX09VVF9NVVRBVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiB7XHJcbiAgICBlbmRTZXNzaW9uXHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbk91dCgpIHtcclxuICBjb25zdCBbc2lnbm91dF0gPSB1c2VNdXRhdGlvbihTSUdOX09VVF9NVVRBVElPTiwge1xyXG4gICAgcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBDVVJSRU5UX1VTRVJfUVVFUlkgfV0sXHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3NpZ25vdXR9PlxyXG4gICAgICBTaWduIG91dFxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgQ2FydFN0eWxlcyA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogNDAlO1xuICBtaW4td2lkdGg6IDUwMHB4O1xuICBib3R0b206IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHotaW5kZXg6IDU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcbiAgJHsocHJvcHMpID0+IHByb3BzLm9wZW4gJiYgYHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtgfTtcbiAgaGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdmFyKC0tYmxhY2spO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gIH1cbiAgZm9vdGVyIHtcbiAgICBib3JkZXItdG9wOiAxMHB4IGRvdWJsZSB2YXIoLS1ibGFjayk7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgcCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG4gIHVsIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IENhcnRTdHlsZXM7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgQ2xvc2VCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDNyZW07XG4gIGJvcmRlcjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICByaWdodDogMDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IENsb3NlQnV0dG9uO1xuIiwiaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IERyb3BEb3duID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHRHcmF5KTtcbmA7XG5cbmNvbnN0IERyb3BEb3duSXRlbSA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1saWdodEdyYXkpO1xuICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gKHByb3BzLmhpZ2hsaWdodGVkID8gJyNmN2Y3ZjcnIDogJ3doaXRlJyl9O1xuICBwYWRkaW5nOiAxcmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgJHsocHJvcHMpID0+IChwcm9wcy5oaWdobGlnaHRlZCA/ICdwYWRkaW5nLWxlZnQ6IDJyZW07JyA6IG51bGwpfTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWRcbiAgICAkeyhwcm9wcykgPT4gKHByb3BzLmhpZ2hsaWdodGVkID8gcHJvcHMudGhlbWUubGlnaHRncmV5IDogJ3doaXRlJyl9O1xuICBpbWcge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuYDtcblxuY29uc3QgZ2xvdyA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDBweCB5ZWxsb3c7XG4gIH1cblxuICB0byB7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMXB4IHllbGxvdztcbiAgfVxuYDtcblxuY29uc3QgU2VhcmNoU3R5bGVzID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgICYubG9hZGluZyB7XG4gICAgICBhbmltYXRpb246ICR7Z2xvd30gMC41cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgeyBEcm9wRG93biwgRHJvcERvd25JdGVtLCBTZWFyY2hTdHlsZXMgfTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBOYXZTdHlsZXMgPSBzdHlsZWQudWxgXG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgYSxcbiAgYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAxcmVtIDNyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgIH1cbiAgICAmOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHdpZHRoOiAycHg7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodEdyYXkpO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRyYW5zZm9ybTogc2tldygtMjBkZWcpO1xuICAgICAgdG9wOiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgIH1cbiAgICAmOmFmdGVyIHtcbiAgICAgIGhlaWdodDogMnB4O1xuICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgICAgY29udGVudDogJyc7XG4gICAgICB3aWR0aDogMDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNHM7XG4gICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDEsIC0wLjY1LCAwLCAyLjMxKTtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgfVxuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1saWdodEdyYXkpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZTdHlsZXM7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgU3VwcmVtZSA9IHN0eWxlZC5oM2BcbiAgYmFja2dyb3VuZDogdmFyKC0tcmVkKTtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDRweCA1cHg7XG4gIHRyYW5zZm9ybTogc2tldygtM2RlZyk7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiA0cmVtO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgU3VwcmVtZTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhbGNUb3RhbFByaWNlKGNhcnQpIHtcclxuICByZXR1cm4gY2FydC5yZWR1Y2UoKHRhbGx5LCBjYXJ0SXRlbSkgPT4ge1xyXG4gICAgaWYgKCFjYXJ0SXRlbS5wcm9kdWN0KSByZXR1cm4gdGFsbHk7IC8vIHByb2R1Y3RzIGNhbiBiZSBkZWxldGVkLCBidXQgdGhleSBjb3VsZHN0aWxsIGJlIGluIHlvdXIgY2FydFxyXG4gICAgcmV0dXJuIHRhbGx5ICsgY2FydEl0ZW0ucXVhbnRpdHkgKiBjYXJ0SXRlbS5wcm9kdWN0LnByaWNlO1xyXG4gIH0sIDApO1xyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTG9jYWxTdGF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcbmNvbnN0IExvY2FsU3RhdGVQcm92aWRlciA9IExvY2FsU3RhdGVDb250ZXh0LlByb3ZpZGVyO1xyXG5cclxuZnVuY3Rpb24gQ2FydFN0YXRlUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgLy8gb3VyIG93biBjdXN0b20gcHJvdmlkZXJcclxuICBjb25zdCBbY2FydE9wZW4sIHNldENhcnRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgZnVuY3Rpb24gdG9nZ2xlQ2FydCgpIHtcclxuICAgIHNldENhcnRPcGVuKCFjYXJ0T3Blbik7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8TG9jYWxTdGF0ZVByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7IGNhcnRPcGVuLCBzZXRDYXJ0T3BlbiwgdG9nZ2xlQ2FydCwgY2xvc2VDYXJ0LCBvcGVuQ2FydCB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0xvY2FsU3RhdGVQcm92aWRlcj5cclxuICApO1xyXG5cclxuICBmdW5jdGlvbiBjbG9zZUNhcnQoKSB7XHJcbiAgICBzZXRDYXJ0T3BlbihmYWxzZSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG9wZW5DYXJ0KCkge1xyXG4gICAgc2V0Q2FydE9wZW4odHJ1ZSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBtYWtlIGEgY3VzdG9tIGhvb2sgZm9yIGFjY2Vzc2luZyB0aGUgY2FydCBsb2NhbCBzdGF0ZVxyXG5mdW5jdGlvbiB1c2VDYXJ0KCkge1xyXG4gIGNvbnN0IGFsbCA9IHVzZUNvbnRleHQoTG9jYWxTdGF0ZUNvbnRleHQpO1xyXG4gIHJldHVybiBhbGw7XHJcbn1cclxuXHJcbmV4cG9ydCB7IENhcnRTdGF0ZVByb3ZpZGVyLCB1c2VDYXJ0IH07XHJcbiIsImltcG9ydCB7IFBBR0lOQVRJT05fUVVFUlkgfSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2luYXRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnaW5hdGlvbkZpZWxkKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBrZXlBcmdzOiBmYWxzZSwgLy8gdGVsbHMgYXBvbGxvIHdlIHdpbCB0YWtlIGNhcmUgb2YgZXZlcnl0aGluZ1xyXG4gICAgcmVhZChleGlzdGluZyA9IFtdLCB7IGFyZ3MsIGNhY2hlIH0pIHtcclxuICAgICAgY29uc3QgeyBza2lwLCBmaXJzdCB9ID0gYXJncztcclxuICAgICAgY29uc3QgZGF0YSA9IGNhY2hlLnJlYWRRdWVyeSh7IHF1ZXJ5OiBQQUdJTkFUSU9OX1FVRVJZIH0pO1xyXG4gICAgICBjb25zdCBjb3VudCA9IGRhdGE/Ll9hbGxQcm9kdWN0c01ldGEuY291bnQ7XHJcbiAgICAgIGNvbnN0IHBhZ2UgPSBza2lwIC8gZmlyc3QgKyAxO1xyXG4gICAgICBjb25zdCBwYWdlcyA9IE1hdGguY2VpbChjb3VudCAvIGZpcnN0KTtcclxuXHJcbiAgICAgIGNvbnN0IGl0ZW1zID0gZXhpc3Rpbmcuc2xpY2Uoc2tpcCwgc2tpcCArIGZpcnN0KS5maWx0ZXIoKHgpID0+IHgpOyAvLyBmaWx0ZXIgb3V0IHVuZGVmaW5lZCBpdGVtc1xyXG4gICAgICBpZiAoaXRlbXMubGVuZ3RoICYmIGl0ZW1zLmxlbmd0aCAhPT0gZmlyc3QgJiYgcGFnZSA9PT0gcGFnZXMpIHtcclxuICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW1zLmxlbmd0aCAhPT0gZmlyc3QpIHtcclxuICAgICAgICAvLyB3ZSBkb24ndCBoYXZlIGFueWl0ZW1zLCB3ZSBtdXN0IGZldGNoIGZyb20gbmV0d29ya1xyXG4gICAgICAgIHJldHVybiBmYWxzZTsgLy8gd2UgbG9va2VkIGluIHRoZSBjYWNoZSwgdGhlcmUgYXJlIG5vbmUsIGdvIHRvIHRoZSBuZXR3b3JrXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW1zLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBpdGVtcztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgbWVyZ2UoZXhpc3RpbmcsIGluY29taW5nLCB7IGFyZ3MgfSkge1xyXG4gICAgICBjb25zdCB7IHNraXAsIGZpcnN0IH0gPSBhcmdzO1xyXG4gICAgICBjb25zb2xlLmxvZyhgTWVyZ2luZyBpdGVtcyBmcm9tIHRoZSBuZXR3cm9rICR7aW5jb21pbmcubGVudGh9YCk7XHJcbiAgICAgIGNvbnN0IG1lcmdlZCA9IGV4aXN0aW5nID8gZXhpc3Rpbmcuc2xpY2UoMCkgOiBbXTtcclxuICAgICAgbWVyZ2VkLnB1c2goaW5jb21pbmcpO1xyXG4gICAgICBmb3IgKGxldCBpID0gc2tpcDsgaSA8IHNraXAgKyBpbmNvbWluZy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIG1lcmdlZFtpXSA9IGluY29taW5nW2kgLSBza2lwXTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbWVyZ2VkO1xyXG4gICAgICAvLyBuYSBtZXJnZSwga29tdCBhdXRvIHJlYWQgdGVydWcuIGR1czogbWVyZ2UsIHJlYWQsIG1lcmdlXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBBcG9sbG9MaW5rLCBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHsgb25FcnJvciB9IGZyb20gJ0BhcG9sbG8vbGluay1lcnJvcic7XG5pbXBvcnQgeyBnZXREYXRhRnJvbVRyZWUgfSBmcm9tICdAYXBvbGxvL2NsaWVudC9yZWFjdC9zc3InO1xuaW1wb3J0IHsgY3JlYXRlVXBsb2FkTGluayB9IGZyb20gJ2Fwb2xsby11cGxvYWQtY2xpZW50JztcbmltcG9ydCB3aXRoQXBvbGxvIGZyb20gJ25leHQtd2l0aC1hcG9sbG8nO1xuaW1wb3J0IHsgZW5kcG9pbnQsIHByb2RFbmRwb2ludCB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgcGFnaW5hdGlvbkZpZWxkIGZyb20gJy4vcGFnaW5hdGlvbkZpZWxkJztcblxuZnVuY3Rpb24gY3JlYXRlQ2xpZW50KHsgaGVhZGVycywgaW5pdGlhbFN0YXRlIH0pIHtcbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIGxpbms6IEFwb2xsb0xpbmsuZnJvbShbXG4gICAgICBvbkVycm9yKCh7IGdyYXBoUUxFcnJvcnMsIG5ldHdvcmtFcnJvciB9KSA9PiB7XG4gICAgICAgIGlmIChncmFwaFFMRXJyb3JzKVxuICAgICAgICAgIGdyYXBoUUxFcnJvcnMuZm9yRWFjaCgoeyBtZXNzYWdlLCBsb2NhdGlvbnMsIHBhdGggfSkgPT5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICBgW0dyYXBoUUwgZXJyb3JdOiBNZXNzYWdlOiAke21lc3NhZ2V9LCBMb2NhdGlvbjogJHtsb2NhdGlvbnN9LCBQYXRoOiAke3BhdGh9YFxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIGlmIChuZXR3b3JrRXJyb3IpXG4gICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBgW05ldHdvcmsgZXJyb3JdOiAke25ldHdvcmtFcnJvcn0uIEJhY2tlbmQgaXMgdW5yZWFjaGFibGUuIElzIGl0IHJ1bm5pbmc/YFxuICAgICAgICAgICk7XG4gICAgICB9KSxcbiAgICAgIC8vIHRoaXMgdXNlcyBhcG9sbG8tbGluay1odHRwIHVuZGVyIHRoZSBob29kLCBzbyBhbGwgdGhlIG9wdGlvbnMgaGVyZSBjb21lIGZyb20gdGhhdCBwYWNrYWdlXG4gICAgICBjcmVhdGVVcGxvYWRMaW5rKHtcbiAgICAgICAgdXJpOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyA/IGVuZHBvaW50IDogcHJvZEVuZHBvaW50LFxuICAgICAgICBmZXRjaE9wdGlvbnM6IHtcbiAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICB9LFxuICAgICAgICAvLyBwYXNzIHRoZSBoZWFkZXJzIGFsb25nIGZyb20gdGhpcyByZXF1ZXN0LiBUaGlzIGVuYWJsZXMgU1NSIHdpdGggbG9nZ2VkIGluIHN0YXRlXG4gICAgICAgIGhlYWRlcnMsXG4gICAgICB9KSxcbiAgICBdKSxcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoe1xuICAgICAgdHlwZVBvbGljaWVzOiB7XG4gICAgICAgIFF1ZXJ5OiB7XG4gICAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgICAvLyBUT0RPOiBXZSB3aWxsIGFkZCB0aGlzIHRvZ2V0aGVyIVxuICAgICAgICAgICAgYWxsUHJvZHVjdHM6IHBhZ2luYXRpb25GaWVsZCgpLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLnJlc3RvcmUoaW5pdGlhbFN0YXRlIHx8IHt9KSxcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBcG9sbG8oY3JlYXRlQ2xpZW50LCB7IGdldERhdGFGcm9tVHJlZSB9KTtcbiIsImltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IEFwb2xsb1Byb3ZpZGVyIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgUGFnZSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2UnO1xyXG5pbXBvcnQgeyBDYXJ0U3RhdGVQcm92aWRlciB9IGZyb20gJy4uL2xpYi9jYXJ0U3RhdGUnO1xyXG5cclxuLy8gaW1wb3J0ICducHJvZ3Jlc3MvbnByb2dyZXNzLmNzcyc7XHJcbmltcG9ydCAnLi4vY29tcG9uZW50cy9zdHlsZXMvbnByb2dyZXNzLmNzcyc7XHJcblxyXG5pbXBvcnQgd2l0aERhdGEgZnJvbSAnLi4vbGliL3dpdGhEYXRhJztcclxuXHJcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCAoKSA9PiBOUHJvZ3Jlc3Muc3RhcnQoKSk7XHJcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKTtcclxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgYXBvbGxvIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17YXBvbGxvfT5cclxuICAgICAgPENhcnRTdGF0ZVByb3ZpZGVyPlxyXG4gICAgICAgIDxQYWdlPlxyXG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIDwvUGFnZT5cclxuICAgICAgPC9DYXJ0U3RhdGVQcm92aWRlcj5cclxuICAgIDwvQXBvbGxvUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKHsgQ29tcG9uZW50LCBjdHggfSkge1xyXG4gIGxldCBwYWdlUHJvcHMgPSB7fTtcclxuICBpZiAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xyXG4gICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xyXG4gIH1cclxuICBwYWdlUHJvcHMucXVlcnkgPSBjdHgucXVlcnk7XHJcbiAgcmV0dXJuIHsgcGFnZVByb3BzIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoRGF0YShNeUFwcCk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudC9yZWFjdC9zc3JcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vbGluay1lcnJvclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXVwbG9hZC1jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvd25zaGlmdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC10YWdcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaC5kZWJvdW5jZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC13aXRoLWFwb2xsb1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibnByb2dyZXNzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==