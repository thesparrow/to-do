webpackJsonp([1,4],{"/fcW":function(t,n){function e(t){throw new Error("Cannot find module '"+t+"'.")}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id="/fcW"},0:function(t,n,e){t.exports=e("x35b")},"1A80":function(t,n,e){"use strict";function l(t){return u._15(0,[(t()(),u._16(0,null,null,10,"section",[["class","todoapp"]],null,null,null,null,null)),(t()(),u._17(null,["\n    "])),(t()(),u._16(0,null,null,1,"app-todo-list-header",[],null,[[null,"add"]],function(t,n,e){var l=!0,o=t.component;if("add"===n){l=!1!==o.onAddTodo(e)&&l}return l},_.a,_.b)),u._18(49152,null,0,s.a,[],null,{add:"add"}),(t()(),u._17(null,["\n    \n    "])),(t()(),u._16(0,null,null,1,"app-todo-list",[],null,[[null,"toggleComplete"],[null,"remove"]],function(t,n,e){var l=!0,o=t.component;if("toggleComplete"===n){l=!1!==o.onToggleTodoComplete(e)&&l}if("remove"===n){l=!1!==o.onRemoveTodo(e)&&l}return l},a.a,a.b)),u._18(49152,null,0,c.a,[],{todos:[0,"todos"]},{remove:"remove",toggleComplete:"toggleComplete"}),(t()(),u._17(null,["\n    \n    "])),(t()(),u._16(0,null,null,1,"app-todo-list-footer",[],null,null,null,p.a,p.b)),u._18(49152,null,0,d.a,[],{todos:[0,"todos"]},null),(t()(),u._17(null,["\n"])),(t()(),u._17(null,["\n"]))],function(t,n){var e=n.component;t(n,6,0,e.todos),t(n,9,0,e.todos)},null)}function o(t){return u._15(0,[(t()(),u._16(0,null,null,2,"app-root",[],null,null,null,l,g)),u._19(512,null,f.a,f.a,[]),u._18(49152,null,0,i.a,[f.a],null,null)],null,null)}var r=e("Ni5f"),u=e("3j3K"),i=e("YWx4"),_=e("YRt3"),s=e("j5hl"),a=e("owuK"),c=e("NBUh"),p=e("xrt8"),d=e("HGsU"),f=e("j3en");e.d(n,"a",function(){return m});var h=[r.a],g=u._14({encapsulation:0,styles:h,data:{}}),m=u._20("app-root",i.a,o,{},{},[])},HGsU:function(t,n,e){"use strict";e.d(n,"a",function(){return l});var l=function(){function t(){}return t.ctorParameters=function(){return[]},t}()},IkF1:function(t,n,e){"use strict";e.d(n,"a",function(){return l});var l=[""]},Iksp:function(t,n,e){"use strict";e.d(n,"a",function(){return l});var l=function(){function t(){}return t}()},KPeL:function(t,n,e){"use strict";var l=e("3j3K");e.d(n,"a",function(){return o});var o=function(){function t(){this.remove=new l.R,this.toggleComplete=new l.R}return t.prototype.toggleTodoComplete=function(t){this.toggleComplete.emit(t)},t.prototype.removeTodo=function(t){this.remove.emit(t)},t.ctorParameters=function(){return[]},t}()},NBUh:function(t,n,e){"use strict";var l=e("3j3K");e.d(n,"a",function(){return o});var o=function(){function t(){this.remove=new l.R,this.toggleComplete=new l.R}return t.prototype.onToggleTodoComplete=function(t){this.toggleComplete.emit(t)},t.prototype.onRemoveTodo=function(t){this.remove.emit(t)},t.ctorParameters=function(){return[]},t}()},Ni5f:function(t,n,e){"use strict";e.d(n,"a",function(){return l});var l=[""]},XD5x:function(t,n,e){"use strict";e.d(n,"a",function(){return l});var l=[""]},YRt3:function(t,n,e){"use strict";function l(t){return u._15(0,[(t()(),u._16(0,null,null,11,"header",[["class","header"]],null,null,null,null,null)),(t()(),u._17(null,["\n    "])),(t()(),u._16(0,null,null,1,"h1",[],null,null,null,null,null)),(t()(),u._17(null,[" Todos "])),(t()(),u._17(null,["\n    "])),(t()(),u._16(0,null,null,5,"input",[["autofocus",""],["class","new-todo"],["placeholder","What needs to be done?"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keyup.enter"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(t,n,e){var l=!0,o=t.component;if("input"===n){l=!1!==u._22(t,6)._handleInput(e.target.value)&&l}if("blur"===n){l=!1!==u._22(t,6).onTouched()&&l}if("compositionstart"===n){l=!1!==u._22(t,6)._compositionStart()&&l}if("compositionend"===n){l=!1!==u._22(t,6)._compositionEnd(e.target.value)&&l}if("ngModelChange"===n){l=!1!==(o.newTodo.title=e)&&l}if("keyup.enter"===n){l=!1!==o.addTodo()&&l}return l},null,null)),u._18(16384,null,0,_.d,[u.W,u.V,[2,_.e]],null,null),u._19(1024,null,_.f,function(t){return[t]},[_.d]),u._18(671744,null,0,_.g,[[8,null],[8,null],[8,null],[2,_.f]],{model:[0,"model"]},{update:"ngModelChange"}),u._19(2048,null,_.h,null,[_.g]),u._18(16384,null,0,_.i,[_.h],null,null),(t()(),u._17(null,["\n"])),(t()(),u._17(null,["\n"]))],function(t,n){t(n,8,0,n.component.newTodo.title)},function(t,n){t(n,5,0,u._22(n,10).ngClassUntouched,u._22(n,10).ngClassTouched,u._22(n,10).ngClassPristine,u._22(n,10).ngClassDirty,u._22(n,10).ngClassValid,u._22(n,10).ngClassInvalid,u._22(n,10).ngClassPending)})}function o(t){return u._15(0,[(t()(),u._16(0,null,null,1,"app-todo-list-header",[],null,null,null,l,a)),u._18(49152,null,0,i.a,[],null,null)],null,null)}var r=e("wPEr"),u=e("3j3K"),i=e("j5hl"),_=e("NVOs");e.d(n,"b",function(){return a}),n.a=l;var s=[r.a],a=u._14({encapsulation:0,styles:s,data:{}});u._20("app-todo-list-header",i.a,o,{},{add:"add"},[])},YWx4:function(t,n,e){"use strict";var l=e("j3en");e.d(n,"a",function(){return o});var o=function(){function t(t){this.todoDataService=t}return t.prototype.onAddTodo=function(t){this.todoDataService.addTodo(t)},t.prototype.onToggleTodoComplete=function(t){this.todoDataService.toggleTodoComplete(t)},t.prototype.onRemoveTodo=function(t){this.todoDataService.deleteTodoById(t.id)},Object.defineProperty(t.prototype,"todos",{get:function(){return this.todoDataService.getAllTodos()},enumerable:!0,configurable:!0}),t.ctorParameters=function(){return[{type:l.a}]},t}()},aKa3:function(t,n,e){"use strict";e.d(n,"a",function(){return l});var l=function(){function t(t){void 0===t&&(t={}),this.title="",this.complete=!1,Object.assign(this,t)}return t}()},gcB2:function(t,n,e){"use strict";e.d(n,"a",function(){return l});var l=[""]},j3en:function(t,n,e){"use strict";e.d(n,"a",function(){return l});var l=function(){function t(){this.lastId=0,this.todos=[]}return t.prototype.addTodo=function(t){return t.id||(t.id=++this.lastId),this.todos.push(t),this},t.prototype.deleteTodoById=function(t){return this.todos=this.todos.filter(function(n){return n.id!==t}),this},t.prototype.updateTodoById=function(t,n){void 0===n&&(n={});var e=this.getTodoById(t);return e?(Object.assign(e,n),e):null},t.prototype.getAllTodos=function(){return this.todos},t.prototype.getTodoById=function(t){return this.todos.filter(function(n){return n.id===t}).pop()},t.prototype.toggleTodoComplete=function(t){return this.updateTodoById(t.id,{complete:!t.complete})},t.ctorParameters=function(){return[]},t}()},j5hl:function(t,n,e){"use strict";var l=e("3j3K"),o=e("aKa3");e.d(n,"a",function(){return r});var r=function(){function t(){this.newTodo=new o.a,this.add=new l.R}return t.prototype.addTodo=function(){this.add.emit(this.newTodo),this.newTodo=new o.a},t.ctorParameters=function(){return[]},t}()},kZql:function(t,n,e){"use strict";e.d(n,"a",function(){return l});var l={production:!0}},kke6:function(t,n,e){"use strict";var l=e("3j3K"),o=e("Iksp"),r=e("2Je8"),u=e("Qbdm"),i=e("NVOs"),_=e("Fzro"),s=e("j3en"),a=e("1A80");e.d(n,"a",function(){return d});var c=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])};return function(n,e){function l(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(l.prototype=e.prototype,new l)}}(),p=function(t){function n(n){return t.call(this,n,[a.a],[a.a])||this}return c(n,t),Object.defineProperty(n.prototype,"_LOCALE_ID_12",{get:function(){return null==this.__LOCALE_ID_12&&(this.__LOCALE_ID_12=l.b(this.parent.get(l.c,null))),this.__LOCALE_ID_12},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_NgLocalization_13",{get:function(){return null==this.__NgLocalization_13&&(this.__NgLocalization_13=new r.a(this._LOCALE_ID_12)),this.__NgLocalization_13},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_Compiler_14",{get:function(){return null==this.__Compiler_14&&(this.__Compiler_14=new l.d),this.__Compiler_14},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_APP_ID_15",{get:function(){return null==this.__APP_ID_15&&(this.__APP_ID_15=l.e()),this.__APP_ID_15},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_IterableDiffers_16",{get:function(){return null==this.__IterableDiffers_16&&(this.__IterableDiffers_16=l.f()),this.__IterableDiffers_16},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_KeyValueDiffers_17",{get:function(){return null==this.__KeyValueDiffers_17&&(this.__KeyValueDiffers_17=l.g()),this.__KeyValueDiffers_17},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_DomSanitizer_18",{get:function(){return null==this.__DomSanitizer_18&&(this.__DomSanitizer_18=new u.b(this.parent.get(u.c))),this.__DomSanitizer_18},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_Sanitizer_19",{get:function(){return null==this.__Sanitizer_19&&(this.__Sanitizer_19=this._DomSanitizer_18),this.__Sanitizer_19},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_HAMMER_GESTURE_CONFIG_20",{get:function(){return null==this.__HAMMER_GESTURE_CONFIG_20&&(this.__HAMMER_GESTURE_CONFIG_20=new u.d),this.__HAMMER_GESTURE_CONFIG_20},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_EVENT_MANAGER_PLUGINS_21",{get:function(){return null==this.__EVENT_MANAGER_PLUGINS_21&&(this.__EVENT_MANAGER_PLUGINS_21=[new u.e(this.parent.get(u.c)),new u.f(this.parent.get(u.c)),new u.g(this.parent.get(u.c),this._HAMMER_GESTURE_CONFIG_20)]),this.__EVENT_MANAGER_PLUGINS_21},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_EventManager_22",{get:function(){return null==this.__EventManager_22&&(this.__EventManager_22=new u.h(this._EVENT_MANAGER_PLUGINS_21,this.parent.get(l.h))),this.__EventManager_22},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ɵDomSharedStylesHost_23",{get:function(){return null==this.__ɵDomSharedStylesHost_23&&(this.__ɵDomSharedStylesHost_23=new u.i(this.parent.get(u.c))),this.__ɵDomSharedStylesHost_23},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ɵDomRendererFactory2_24",{get:function(){return null==this.__ɵDomRendererFactory2_24&&(this.__ɵDomRendererFactory2_24=new u.j(this._EventManager_22,this._ɵDomSharedStylesHost_23)),this.__ɵDomRendererFactory2_24},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_RendererFactory2_25",{get:function(){return null==this.__RendererFactory2_25&&(this.__RendererFactory2_25=this._ɵDomRendererFactory2_24),this.__RendererFactory2_25},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ɵSharedStylesHost_26",{get:function(){return null==this.__ɵSharedStylesHost_26&&(this.__ɵSharedStylesHost_26=this._ɵDomSharedStylesHost_23),this.__ɵSharedStylesHost_26},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_Testability_27",{get:function(){return null==this.__Testability_27&&(this.__Testability_27=new l.i(this.parent.get(l.h))),this.__Testability_27},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_Meta_28",{get:function(){return null==this.__Meta_28&&(this.__Meta_28=new u.k(this.parent.get(u.c))),this.__Meta_28},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_Title_29",{get:function(){return null==this.__Title_29&&(this.__Title_29=new u.l(this.parent.get(u.c))),this.__Title_29},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ɵi_30",{get:function(){return null==this.__ɵi_30&&(this.__ɵi_30=new i.a),this.__ɵi_30},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_BrowserXhr_31",{get:function(){return null==this.__BrowserXhr_31&&(this.__BrowserXhr_31=new _.a),this.__BrowserXhr_31},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ResponseOptions_32",{get:function(){return null==this.__ResponseOptions_32&&(this.__ResponseOptions_32=new _.b),this.__ResponseOptions_32},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_XSRFStrategy_33",{get:function(){return null==this.__XSRFStrategy_33&&(this.__XSRFStrategy_33=_.c()),this.__XSRFStrategy_33},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_XHRBackend_34",{get:function(){return null==this.__XHRBackend_34&&(this.__XHRBackend_34=new _.d(this._BrowserXhr_31,this._ResponseOptions_32,this._XSRFStrategy_33)),this.__XHRBackend_34},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_RequestOptions_35",{get:function(){return null==this.__RequestOptions_35&&(this.__RequestOptions_35=new _.e),this.__RequestOptions_35},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_Http_36",{get:function(){return null==this.__Http_36&&(this.__Http_36=_.f(this._XHRBackend_34,this._RequestOptions_35)),this.__Http_36},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_TodoDataService_37",{get:function(){return null==this.__TodoDataService_37&&(this.__TodoDataService_37=new s.a),this.__TodoDataService_37},enumerable:!0,configurable:!0}),n.prototype.createInternal=function(){return this._CommonModule_0=new r.b,this._ErrorHandler_1=u.m(),this._APP_INITIALIZER_2=[l.j,u.n(this.parent.get(u.o,null),this.parent.get(l.k,null))],this._ApplicationInitStatus_3=new l.l(this._APP_INITIALIZER_2),this._ɵf_4=new l.m(this.parent.get(l.h),this.parent.get(l.n),this,this._ErrorHandler_1,this.componentFactoryResolver,this._ApplicationInitStatus_3),this._ApplicationRef_5=this._ɵf_4,this._ApplicationModule_6=new l.o(this._ApplicationRef_5),this._BrowserModule_7=new u.p(this.parent.get(u.p,null)),this._ɵba_8=new i.b,this._FormsModule_9=new i.c,this._HttpModule_10=new _.g,this._AppModule_11=new o.a,this._AppModule_11},n.prototype.getInternal=function(t,n){return t===r.b?this._CommonModule_0:t===l.p?this._ErrorHandler_1:t===l.q?this._APP_INITIALIZER_2:t===l.l?this._ApplicationInitStatus_3:t===l.m?this._ɵf_4:t===l.r?this._ApplicationRef_5:t===l.o?this._ApplicationModule_6:t===u.p?this._BrowserModule_7:t===i.b?this._ɵba_8:t===i.c?this._FormsModule_9:t===_.g?this._HttpModule_10:t===o.a?this._AppModule_11:t===l.c?this._LOCALE_ID_12:t===r.c?this._NgLocalization_13:t===l.d?this._Compiler_14:t===l.s?this._APP_ID_15:t===l.t?this._IterableDiffers_16:t===l.u?this._KeyValueDiffers_17:t===u.q?this._DomSanitizer_18:t===l.v?this._Sanitizer_19:t===u.r?this._HAMMER_GESTURE_CONFIG_20:t===u.s?this._EVENT_MANAGER_PLUGINS_21:t===u.h?this._EventManager_22:t===u.i?this._ɵDomSharedStylesHost_23:t===u.j?this._ɵDomRendererFactory2_24:t===l.w?this._RendererFactory2_25:t===u.t?this._ɵSharedStylesHost_26:t===l.i?this._Testability_27:t===u.k?this._Meta_28:t===u.l?this._Title_29:t===i.a?this._ɵi_30:t===_.a?this._BrowserXhr_31:t===_.h?this._ResponseOptions_32:t===_.i?this._XSRFStrategy_33:t===_.d?this._XHRBackend_34:t===_.j?this._RequestOptions_35:t===_.k?this._Http_36:t===s.a?this._TodoDataService_37:n},n.prototype.destroyInternal=function(){this._ɵf_4.ngOnDestroy(),this.__ɵDomSharedStylesHost_23&&this._ɵDomSharedStylesHost_23.ngOnDestroy()},n}(l.x),d=new l.y(p,o.a)},owuK:function(t,n,e){"use strict";function l(t){return _._15(0,[(t()(),_._16(0,null,null,4,"li",[],[[2,"completed",null]],null,null,null,null)),(t()(),_._17(null,["\n      "])),(t()(),_._16(0,null,null,1,"app-todo-list-item",[],null,[[null,"toggleComplete"],[null,"remove"]],function(t,n,e){var l=!0,o=t.component;if("toggleComplete"===n){l=!1!==o.onToggleTodoComplete(e)&&l}if("remove"===n){l=!1!==o.onRemoveTodo(e)&&l}return l},s.a,s.b)),_._18(49152,null,0,a.a,[],{todo:[0,"todo"]},{remove:"remove",toggleComplete:"toggleComplete"}),(t()(),_._17(null,["\n    "]))],function(t,n){t(n,3,0,n.context.$implicit)},function(t,n){t(n,0,0,n.context.$implicit.complete)})}function o(t){return _._15(0,[(t()(),_._16(0,null,null,7,"section",[["class","main"]],null,null,null,null,null)),(t()(),_._17(null,["\n  "])),(t()(),_._16(0,null,null,4,"ul",[["class","todo-list"]],null,null,null,null,null)),(t()(),_._17(null,["\n    "])),(t()(),_._21(16777216,null,null,1,null,l)),_._18(802816,null,0,c.g,[_._0,_._1,_.t],{ngForOf:[0,"ngForOf"]},null),(t()(),_._17(null,["\n  "])),(t()(),_._17(null,["\n"]))],function(t,n){t(n,5,0,n.component.todos)},null)}function r(t){return _._15(0,[(t()(),_._21(16777216,null,null,1,null,o)),_._18(16384,null,0,c.f,[_._0,_._1],{ngIf:[0,"ngIf"]},null)],function(t,n){t(n,1,0,n.component.todos.length>0)},null)}function u(t){return _._15(0,[(t()(),_._16(0,null,null,1,"app-todo-list",[],null,null,null,r,f)),_._18(49152,null,0,p.a,[],null,null)],null,null)}var i=e("gcB2"),_=e("3j3K"),s=e("vD1I"),a=e("KPeL"),c=e("2Je8"),p=e("NBUh");e.d(n,"b",function(){return f}),n.a=r;var d=[i.a],f=_._14({encapsulation:0,styles:d,data:{}});_._20("app-todo-list",p.a,u,{todos:"todos"},{remove:"remove",toggleComplete:"toggleComplete"},[])},vD1I:function(t,n,e){"use strict";function l(t){return u._15(0,[(t()(),u._16(0,null,null,8,"div",[["class","view"]],null,null,null,null,null)),(t()(),u._17(null,["\n  "])),(t()(),u._16(0,null,null,0,"input",[["class","toggle"],["type","checkbox"]],[[8,"checked",0]],[[null,"click"]],function(t,n,e){var l=!0,o=t.component;if("click"===n){l=!1!==o.toggleTodoComplete(o.todo)&&l}return l},null,null)),(t()(),u._17(null,["\n  "])),(t()(),u._16(0,null,null,1,"label",[],null,null,null,null,null)),(t()(),u._17(null,["",""])),(t()(),u._17(null,["\n  "])),(t()(),u._16(0,null,null,0,"button",[["class","destroy"]],null,[[null,"click"]],function(t,n,e){var l=!0,o=t.component;if("click"===n){l=!1!==o.removeTodo(o.todo)&&l}return l},null,null)),(t()(),u._17(null,["\n"]))],null,function(t,n){var e=n.component;t(n,2,0,e.todo.complete),t(n,5,0,e.todo.title)})}function o(t){return u._15(0,[(t()(),u._16(0,null,null,1,"app-todo-list-item",[],null,null,null,l,s)),u._18(49152,null,0,i.a,[],null,null)],null,null)}var r=e("XD5x"),u=e("3j3K"),i=e("KPeL");e.d(n,"b",function(){return s}),n.a=l;var _=[r.a],s=u._14({encapsulation:0,styles:_,data:{}});u._20("app-todo-list-item",i.a,o,{todo:"todo"},{remove:"remove",toggleComplete:"toggleComplete"},[])},wPEr:function(t,n,e){"use strict";e.d(n,"a",function(){return l});var l=[""]},x35b:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var l=e("3j3K"),o=e("kZql"),r=e("Qbdm"),u=e("kke6");o.a.production&&e.i(l.a)(),e.i(r.a)().bootstrapModuleFactory(u.a)},xrt8:function(t,n,e){"use strict";function l(t){return i._15(0,[(t()(),i._16(0,null,null,7,"footer",[["class","footer"]],null,null,null,null,null)),(t()(),i._17(null,["\n    "])),(t()(),i._16(0,null,null,4,"span",[["class","todo-count"]],null,null,null,null,null)),(t()(),i._17(null,[" "])),(t()(),i._16(0,null,null,1,"strong",[],null,null,null,null,null)),(t()(),i._17(null,["",""])),(t()(),i._17(null,[" "," left"])),(t()(),i._17(null,["\n"]))],null,function(t,n){var e=n.component;t(n,5,0,e.todos.length),t(n,6,0,1==e.todos.length?"item":"items")})}function o(t){return i._15(0,[(t()(),i._21(16777216,null,null,1,null,l)),i._18(16384,null,0,_.f,[i._0,i._1],{ngIf:[0,"ngIf"]},null),(t()(),i._17(null,["\n"]))],function(t,n){t(n,1,0,n.component.todos.length>0)},null)}function r(t){return i._15(0,[(t()(),i._16(0,null,null,1,"app-todo-list-footer",[],null,null,null,o,c)),i._18(49152,null,0,s.a,[],null,null)],null,null)}var u=e("IkF1"),i=e("3j3K"),_=e("2Je8"),s=e("HGsU");e.d(n,"b",function(){return c}),n.a=o;var a=[u.a],c=i._14({encapsulation:0,styles:a,data:{}});i._20("app-todo-list-footer",s.a,r,{todos:"todos"},{},[])}},[0]);