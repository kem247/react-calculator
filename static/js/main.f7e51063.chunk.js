(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],[,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _Volumes_LaCie_react_calculator_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),_Volumes_LaCie_react_calculator_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),_Volumes_LaCie_react_calculator_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9),_Volumes_LaCie_react_calculator_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_Screen_Screen__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(8),_KeyPad__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(7),Calculator=function(_Component){Object(_Volumes_LaCie_react_calculator_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(Calculator,_Component);var _super=Object(_Volumes_LaCie_react_calculator_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator);function Calculator(){var _this;Object(_Volumes_LaCie_react_calculator_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calculator);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=_super.call.apply(_super,[this].concat(args)),_this.state={equation:"",result:0},_this.onButtonPress=function(event){var equation=_this.state.equation,pressedButton=event.target.innerHTML;if("C"===pressedButton)return _this.clear();if(pressedButton>="0"&&pressedButton<="9"||"."===pressedButton)equation+=pressedButton;else if(-1!==["+","-","*","/","%"].indexOf(pressedButton))equation+=" "+pressedButton+" ";else if("="===pressedButton)try{var evalResult=eval(equation),result=Number.isInteger(evalResult)?evalResult:evalResult.toFixed(2);_this.setState({result:result})}catch(err){alert("Invalid Mathematical Equation")}else equation=equation.trim(),equation=equation.substr(0,equation.length-1);_this.setState({equation:equation})},_this}return Object(_Volumes_LaCie_react_calculator_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calculator,[{key:"clear",value:function(){this.setState({equation:" ",result:0})}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("main",{className:"calculator"},react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Screen_Screen__WEBPACK_IMPORTED_MODULE_5__.a,{equation:this.state.equation,result:this.state.result}),react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_KeyPad__WEBPACK_IMPORTED_MODULE_6__.a,{onButtonPress:this.onButtonPress}))}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_4__.Component);__webpack_exports__.a=Calculator},,,,function(e,t,_){"use strict";var a=_(0),r=_.n(a),n=function(e){return r.a.createElement("div",{className:"keypad-row"},e.children)},o=function(e){var t=["btn"];return"undefined"!==typeof e&&"undefined"!==typeof e.type&&t.push("btn-"+e.type),r.a.createElement("button",{className:t.join(" "),onClick:e.onButtonPress},e.children)},s=function(e){return r.a.createElement(o,Object.assign({type:"large"},e))};t.a=function(e){return r.a.createElement("section",{className:"keypad"},r.a.createElement(n,null,r.a.createElement(o,{type:"primary",onButtonPress:e.onButtonPress},"C"),r.a.createElement(o,{type:"primary",onButtonPress:e.onButtonPress},"\u2190"),r.a.createElement(o,{type:"operator",onButtonPress:e.onButtonPress},"%"),r.a.createElement(o,{type:"operator",onButtonPress:e.onButtonPress},"/")),r.a.createElement(n,null,r.a.createElement(o,{onButtonPress:e.onButtonPress},"9"),r.a.createElement(o,{onButtonPress:e.onButtonPress},"8"),r.a.createElement(o,{onButtonPress:e.onButtonPress},"7"),r.a.createElement(o,{type:"operator",onButtonPress:e.onButtonPress},"*")),r.a.createElement(n,null,r.a.createElement(o,{onButtonPress:e.onButtonPress},"6"),r.a.createElement(o,{onButtonPress:e.onButtonPress},"5"),r.a.createElement(o,{onButtonPress:e.onButtonPress},"4"),r.a.createElement(o,{type:"operator",onButtonPress:e.onButtonPress},"-")),r.a.createElement(n,null,r.a.createElement(o,{onButtonPress:e.onButtonPress},"3"),r.a.createElement(o,{onButtonPress:e.onButtonPress},"2"),r.a.createElement(o,{onButtonPress:e.onButtonPress},"1"),r.a.createElement(o,{type:"operator",onButtonPress:e.onButtonPress},"+")),r.a.createElement(n,null,r.a.createElement(o,{onButtonPress:e.onButtonPress},"0"),r.a.createElement(o,{onButtonPress:e.onButtonPress},"."),r.a.createElement(s,{onButtonPress:e.onButtonPress},"=")))}},function(e,t,_){"use strict";var a=_(0),r=_.n(a),n=function(e){return r.a.createElement("div",{className:"result"},e.children)},o=function(e){return r.a.createElement("div",{className:"comp-screen"},e.children)};t.a=function(e){return r.a.createElement("section",{className:"screen"},r.a.createElement(n,null,e.result),r.a.createElement(o,null,e.equation))}},,function(e,t,_){e.exports=_(17)},,,,,function(e,t,_){},function(e,t,_){},function(e,t,_){"use strict";_.r(t);var a=_(0),r=_.n(a),n=_(2),o=_.n(n),s=(_(15),_(16),_(3));var l=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s.a,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.f7e51063.chunk.js.map