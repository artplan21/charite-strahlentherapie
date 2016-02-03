/*!
 * basket.js
 * v0.5.1 - 2014-08-16
 * http://addyosmani.github.com/basket.js
 * (c) Addy Osmani;  License
 * Created by: Addy Osmani, Sindre Sorhus, Andrée Hansson, Mat Scales
 * Contributors: Ironsjp, Mathias Bynens, Rick Waldron, Felipe Morais
 * Uses rsvp.js, https://github.com/tildeio/rsvp.js
 */
(function(){function a(a,b){if(a&&"object"==typeof a&&a.constructor===this)return a;var c=new this(h,b);return l(c,a),c}function b(a,b,c){1===Q.push({name:a,H:{M:b.q+b.r,L:a,detail:b.b,K:c&&b.q+c.r,label:b.u,timeStamp:O(),stack:Error(b.u).stack}})&&setTimeout(function(){for(var a,b=0;b<Q.length;b++)a=Q[b],M.l(a.name,a.H);Q.length=0},50)}function c(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1}function d(a){var b=a.v;return b||(b=a.v={}),b}function e(a,b){if("onerror"===a)M.k("error",b);else{if(2!==arguments.length)return M[a];M[a]=b}}function f(a){return"function"==typeof a}function g(){}function h(){}function i(a,b,c,d){try{a.call(b,c,d)}catch(e){return e}}function j(a,b,c){M.async(function(a){var d=!1,e=i(c,b,function(c){d||(d=!0,b!==c?l(a,c):n(a,c))},function(b){d||(d=!0,o(a,b))});!d&&e&&(d=!0,o(a,e))},a)}function k(a,b){1===b.a?n(a,b.b):2===a.a?o(a,b.b):p(b,void 0,function(c){b!==c?l(a,c):n(a,c)},function(b){o(a,b)})}function l(a,b){if(a===b)n(a,b);else if("function"==typeof b||"object"==typeof b&&null!==b)if(b.constructor===a.constructor)k(a,b);else{var c;try{c=b.then}catch(d){R.error=d,c=R}c===R?o(a,R.error):void 0===c?n(a,b):f(c)?j(a,b,c):n(a,b)}else n(a,b)}function m(a){a.d&&a.d(a.b),q(a)}function n(a,c){void 0===a.a&&(a.b=c,a.a=1,0===a.i.length?M.g&&b("fulfilled",a):M.async(q,a))}function o(a,b){void 0===a.a&&(a.a=2,a.b=b,M.async(m,a))}function p(a,b,c,d){var e=a.i,f=e.length;a.d=null,e[f]=b,e[f+1]=c,e[f+2]=d,0===f&&a.a&&M.async(q,a)}function q(a){var c=a.i,d=a.a;if(M.g&&b(1===d?"fulfilled":"rejected",a),0!==c.length){for(var e,f,g=a.b,h=0;h<c.length;h+=3)e=c[h],f=c[h+d],e?s(d,e,f,g):f(g);a.i.length=0}}function r(){this.error=null}function s(a,b,c,d){var e,g,h,i,j=f(c);if(j){try{e=c(d)}catch(k){S.error=k,e=S}if(e===S?(i=!0,g=e.error,e=null):h=!0,b===e)return void o(b,new TypeError("A promises callback cannot return that same promise."))}else e=d,h=!0;void 0===b.a&&(j&&h?l(b,e):i?o(b,g):1===a?n(b,e):2===a&&o(b,e))}function t(a,b){try{b(function(b){l(a,b)},function(b){o(a,b)})}catch(c){o(a,c)}}function u(a,b,c){return 1===a?{state:"fulfilled",value:c}:{state:"rejected",reason:c}}function v(a,b,c,d){this.B=a,this.c=new a(h,d),this.A=c,this.w(b)?(this.t=b,this.e=this.length=b.length,this.s(),0===this.length?n(this.c,this.b):(this.length=this.length||0,this.p(),0===this.e&&n(this.c,this.b))):o(this.c,this.j())}function w(a,c){if(this.r=U++,this.u=c,this.b=this.a=void 0,this.i=[],M.g&&b("created",this),h!==a){if(!f(a))throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");if(!(this instanceof w))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");t(this,a)}}function x(){this.value=void 0}function y(a,b,c){try{a.apply(b,c)}catch(d){return W.value=d,W}}function z(a,b){return{then:function(c,d){return a.call(b,c,d)}}}function A(a,b,c,d){return b=y(c,d,b),b===W&&o(a,b.value),a}function B(a,b,c,d){return V.all(b).then(function(b){return b=y(c,d,b),b===W&&o(a,b.value),a})}function C(a,b,c){this.f(a,b,!1,c)}function D(a,b,c){this.f(a,b,!0,c)}function E(a,b,c){this.f(a,b,!1,c)}function F(){return function(){process.N(J)}}function G(){var a=0,b=new $(J),c=document.createTextNode("");return b.observe(c,{characterData:!0}),function(){c.data=a=++a%2}}function H(){var a=new MessageChannel;return a.port1.onmessage=J,function(){a.port2.postMessage(0)}}function I(){return function(){setTimeout(J,1)}}function J(){for(var a=0;Z>a;a+=2)_[a](_[a+1]),_[a]=void 0,_[a+1]=void 0;Z=0}function K(){M.k.apply(M,arguments)}var L={G:function(a){return a.k=this.k,a.n=this.n,a.l=this.l,a.v=void 0,a},k:function(a,b){var e,f=d(this);(e=f[a])||(e=f[a]=[]),-1===c(e,b)&&e.push(b)},n:function(a,b){var e,f=d(this);b?(f=f[a],e=c(f,b),-1!==e&&f.splice(e,1)):f[a]=[]},l:function(a,b){var c,e;if(c=d(this)[a])for(var f=0;f<c.length;f++)(e=c[f])(b)}},M={g:!1};L.G(M);var N=Array.isArray?Array.isArray:function(a){return"[object Array]"===Object.prototype.toString.call(a)},O=Date.now||function(){return(new Date).getTime()},P=Object.create||function(a){if(1<arguments.length)throw Error("Second argument not supported");if("object"!=typeof a)throw new TypeError("Argument must be an object");return g.prototype=a,new g},Q=[],R=new r,S=new r;v.prototype.w=function(a){return N(a)},v.prototype.j=function(){return Error("Array Methods must be provided an Array")},v.prototype.s=function(){this.b=Array(this.length)},v.prototype.p=function(){for(var a=this.length,b=this.c,c=this.t,d=0;void 0===b.a&&a>d;d++)this.o(c[d],d)},v.prototype.o=function(a,b){var c=this.B;"object"==typeof a&&null!==a?a.constructor===c&&void 0!==a.a?(a.d=null,this.m(a.a,b,a.b)):this.C(c.resolve(a),b):(this.e--,this.b[b]=this.h(1,b,a))},v.prototype.m=function(a,b,c){var d=this.c;void 0===d.a&&(this.e--,this.A&&2===a?o(d,c):this.b[b]=this.h(a,b,c)),0===this.e&&n(d,this.b)},v.prototype.h=function(a,b,c){return c},v.prototype.C=function(a,b){var c=this;p(a,void 0,function(a){c.m(1,b,a)},function(a){c.m(2,b,a)})};var T="rsvp_"+O()+"-",U=0,V=w;w.J=a,w.all=function(a,b){return new v(this,a,!0,b).c},w.race=function(a,b){function c(a){l(e,a)}function d(a){o(e,a)}var e=new this(h,b);if(!N(a))return o(e,new TypeError("You must pass an array to race.")),e;for(var f=a.length,g=0;void 0===e.a&&f>g;g++)p(this.resolve(a[g]),void 0,c,d);return e},w.resolve=a,w.reject=function(a,b){var c=new this(h,b);return o(c,a),c},w.prototype={constructor:w,q:T,d:function(a){M.l("error",a)},then:function(a,c,d){var e=this.a;if(1===e&&!a||2===e&&!c)return M.g&&b("chained",this,this),this;this.d=null;var f=new this.constructor(h,d),g=this.b;if(M.g&&b("chained",this,f),e){var i=arguments[e-1];M.async(function(){s(e,f,i,g)})}else p(this,f,a,c);return f},"catch":function(a,b){return this.then(null,a,b)}};var W=new x,X=new x;C.prototype=P(v.prototype),C.prototype.f=v,C.prototype.h=u,C.prototype.j=function(){return Error("allSettled must be called with an array")},D.prototype=P(v.prototype),D.prototype.f=v,D.prototype.s=function(){this.b={}},D.prototype.w=function(a){return a&&"object"==typeof a},D.prototype.j=function(){return Error("Promise.hash must be called with an object")},D.prototype.p=function(){var a,b=this.c,c=this.t,d=[];for(a in c)void 0===b.a&&c.hasOwnProperty(a)&&d.push({position:a,D:c[a]});this.e=c=d.length;for(var e=0;void 0===b.a&&c>e;e++)a=d[e],this.o(a.D,a.position)},E.prototype=P(D.prototype),E.prototype.f=v,E.prototype.h=u,E.prototype.j=function(){return Error("hashSettled must be called with an object")};var Y,Z=0,P="undefined"!=typeof window?window:{},$=P.MutationObserver||P.WebKitMutationObserver,P="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,_=Array(1e3);if(Y="undefined"!=typeof process&&"[object process]"==={}.toString.call(process)?F():$?G():P?H():I(),M.async=function(a,b){_[Z]=a,_[Z+1]=b,Z+=2,2===Z&&Y()},"undefined"!=typeof window&&"object"==typeof window.__PROMISE_INSTRUMENTATION__){P=window.__PROMISE_INSTRUMENTATION__,e("instrument",!0);for(var ab in P)P.hasOwnProperty(ab)&&K(ab,P[ab])}var bb={race:function(a,b){return V.race(a,b)},Promise:V,allSettled:function(a,b){return new C(V,a,b).c},hash:function(a,b){return new D(V,a,b).c},hashSettled:function(a,b){return new E(V,a,b).c},denodeify:function(a,b){function c(){for(var c,d=arguments.length,e=Array(d+1),f=!1,g=0;d>g;++g){if(c=arguments[g],!f){if(c&&"object"==typeof c){var i;if(c.constructor===V)i=!0;else try{i=c.then}catch(j){W.value=j,i=W}f=i}else f=!1;if(f===X)return d=new V(h),o(d,X.value),d;f&&!0!==f&&(c=z(f,c))}e[g]=c}var k=new V(h);return e[d]=function(a,c){if(a)o(k,a);else if(void 0===b)l(k,c);else if(!0===b){for(var d=arguments,e=d.length,f=Array(e-1),g=1;e>g;g++)f[g-1]=d[g];l(k,f)}else if(N(b)){for(var f=arguments,d={},g=f.length,e=Array(g),h=0;g>h;h++)e[h]=f[h];for(g=0;g<b.length;g++)f=b[g],d[f]=e[g+1];l(k,d)}else l(k,c)},f?B(k,e,a,this):A(k,e,a,this)}return c.__proto__=a,c},on:K,off:function(){M.n.apply(M,arguments)},map:function(a,b,c){return V.all(a,c).then(function(a){if(!f(b))throw new TypeError("You must pass a function as map's second argument.");for(var d=a.length,e=Array(d),g=0;d>g;g++)e[g]=b(a[g]);return V.all(e,c)})},filter:function(a,b,c){return V.all(a,c).then(function(a){if(!f(b))throw new TypeError("You must pass a function as filter's second argument.");for(var d=a.length,e=Array(d),g=0;d>g;g++)e[g]=b(a[g]);return V.all(e,c).then(function(b){for(var c=Array(d),e=0,f=0;d>f;f++)b[f]&&(c[e]=a[f],e++);return c.length=e,c})})},resolve:function(a,b){return V.resolve(a,b)},reject:function(a,b){return V.reject(a,b)},all:function(a,b){return V.all(a,b)},rethrow:function(a){throw setTimeout(function(){throw a}),a},defer:function(a){var b={};return b.c=new V(function(a,c){b.resolve=a,b.reject=c},a),b},EventTarget:L,configure:e,async:function(a,b){M.async(a,b)}};"function"==typeof define&&define.I?define(function(){return bb}):"undefined"!=typeof module&&module.F?module.F=bb:"undefined"!=typeof this&&(this.RSVP=bb)}).call(this),function(a,b){"use strict";var c=b.head||b.getElementsByTagName("head")[0],d="basket-",e=5e3,f=function(a,b){try{return localStorage.setItem(d+a,JSON.stringify(b)),!0}catch(c){if(c.name.toUpperCase().indexOf("QUOTA")>=0){var e,g=[];for(e in localStorage)0===e.indexOf(d)&&g.push(JSON.parse(localStorage[e]));return g.length?(g.sort(function(a,b){return a.stamp-b.stamp}),basket.remove(g[0].key),f(a,b)):void 0}return}},g=function(a){var b=new RSVP.Promise(function(b,c){var d=new XMLHttpRequest;d.open("GET",a),d.onreadystatechange=function(){4===d.readyState&&(200===d.status?b({content:d.responseText,type:d.getResponseHeader("content-type")}):c(new Error(d.statusText)))},setTimeout(function(){d.readyState<4&&d.abort()},basket.timeout),d.send()});return b},h=function(a){return g(a.url).then(function(b){var c=i(a,b);return a.skipCache||f(a.key,c),c})},i=function(a,b){var c=+new Date;return a.data=b.content,a.originalType=b.type,a.type=a.type||b.type,a.skipCache=a.skipCache||!1,a.stamp=c,a.expire=c+60*(a.expire||e)*60*1e3,a},j=function(a,b){return!a||a.expire-+new Date<0||b.unique!==a.unique||basket.isValidItem&&!basket.isValidItem(a,b)},k=function(a){var b,c,d;if(a.url)return a.key=a.key||a.url,b=basket.get(a.key),a.execute=a.execute!==!1,d=j(b,a),a.live||d?(a.unique&&(a.url+=(a.url.indexOf("?")>0?"&":"?")+"basket-unique="+a.unique),c=h(a),a.live&&!d&&(c=c.then(function(a){return a},function(){return b}))):(b.type=a.type||b.originalType,c=new RSVP.Promise(function(a){a(b)})),c},l=function(a){var d=b.createElement("script");d.defer=!0,d.text=a.data,c.appendChild(d)},m={"default":l},n=function(a){return a.type&&m[a.type]?m[a.type](a):m["default"](a)},o=function(a){a.map(function(a){return a.execute&&n(a),a})},p=function(){var a,b,c=[];for(a=0,b=arguments.length;b>a;a++)c.push(k(arguments[a]));return RSVP.all(c)},q=function(){var a=p.apply(null,arguments),b=this.then(function(){return a}).then(o);return b.thenRequire=q,b};a.basket={require:function(){var a=p.apply(null,arguments).then(o);return a.thenRequire=q,a},remove:function(a){return localStorage.removeItem(d+a),this},get:function(a){var b=localStorage.getItem(d+a);try{return JSON.parse(b||"false")}catch(c){return!1}},clear:function(a){var b,c,e=+new Date;for(b in localStorage)c=b.split(d)[1],c&&(!a||this.get(c).expire<=e)&&this.remove(c);return this},isValidItem:null,timeout:5e3,addHandler:function(a,b){Array.isArray(a)||(a=[a]),a.forEach(function(a){m[a]=b})},removeHandler:function(a){basket.addHandler(a,void 0)}},basket.clear(!0)}(this,document);

// JavaScript Document

// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {

	(function () {
		var noop = function () {
			},
			methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'],
			length = methods.length,
			console = window.console = {};

		while (length) {
			console[methods[length]] = noop;

			length -= 1;
		}
	}());
}

/**
 #####################################
 #                                   #
 #    Project Namespace              #
 #                                   #
 #####################################
 */

/**
 * Creates namespace object and extends it with base properties if it has already been initialized (e.g. in magento)
 *
 * @param {object} obj - Default properties that have not been initialized in this file
 * @param {object} base - Default properties
 */
var Brandung = (function (obj, base) {
	'use strict';

	obj = obj || {};

	for (var prop in base) {
		if (base.hasOwnProperty(prop)) {
			obj[prop] = base[prop];
		}
	}

	return obj;
}(Brandung, {
	// set path to js folder
	folderPath: 'typo3conf/ext/a21_custom/Resources/Public/js/',
	// do we have an ie8?
	IE8: (document.all && !document.addEventListener) ? true : false,
	// do we have an ie9?
	IE9: (document.all && !window.atob) ? true : false,
	// basket error handler
	errorHandler: function (error) {
		console.error('An error occurred while fetching main scripts:');
		console.error(error);
	},
	// global jquery objects like body, window
	GlobalVars: {}
}));

/**
 * set folder path
 * @type {string}
 */
if (Brandung.dynamicFolderPath) {
	Brandung.folderPath = Brandung.dynamicFolderPath;
}

/**
 #####################################
 #                                   #
 #    Load project dependencies and  #
 #    proceed                        #
 #                                   #
 #####################################
 */
basket.timeout = 60000;
//DEVELOPMENT SCRIPT:START
//the following code has to be removed as soon as developement is done
//if not it will prevent the website from storing files inside the localhost
//
//obviously it disables the default-behavior from the link
///////////////////////////////////////////////////////////
basket.clear();
///////////////////////////////////////////////////////////
//CHECK THE DOCUMENT-READY-SECTION AT THE BOTTOM! THERE WILL BE SOME MORE CODE THAT HAS TO BE REMOVED/DEACTIVATED AFTER DEVELOPING
//DEVELOPMENT SCRIPT:END

// Check If we have an IE8, if so just create a new Deferred to be able to call $.then()
// for all modern browsers load the main plugins via basket
Brandung.DeferMainPlugins = Brandung.IE8 ? jQuery.Deferred() : basket.require.apply(
	basket, [
		{
			// RV for debugging porposes
			// url: Brandung.folderPath + '/libs/vendor/jquery/jquery.min.js',
			url: Brandung.folderPath + '/libs/vendor/jquery/jquery.js',
			unique: '1.11.0'
		},
		{
			url: Brandung.folderPath + 'libs/vendor/modernizr/modernizr.custom.min.js',
			unique: '2.8.1'
		}
	].concat((typeof Powermail !== 'undefined' && Powermail || {deferPlugins: []}).deferPlugins)
);

// Just resolve the main deferred if we have an ie8, because jquery and modernizr are already loaded
if (Brandung.IE8) {
	Brandung.DeferMainPlugins.resolve();
}

Brandung.DeferMainPlugins.then(function () {
	(function ($) {

		/**
		 * Debounced resize eventhandler
		 *
		 * http://www.paulirish.com/2009/throttled-smartresize-jquery-event-handler/
		 */
		(function ($, sr) {

			// debouncing function from John Hann
			// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
			var debounce = function (func, threshold, execAsap) {
				var timeout;

				return function debounced () {
					var obj = this,
						args = arguments;

					if (timeout) {
						clearTimeout(timeout);
					} else if (execAsap) {
						func.apply(obj, args);
					}

					timeout = setTimeout(function () {
						if (!execAsap) {
							func.apply(obj, args);
						}

						timeout = null;
					}, threshold || 100);
				};
			};

			// smartresize
			$.fn[sr] = function (fn) {
				return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
			};
		})(jQuery, 'smartresize');

		// The same as above except that we are creating a real deferred by using the $.when method in IE8
		// for all modern browsers load the load plugin via basket
		Brandung.DeferLoadPlugin = Brandung.IE8 ? $.when($.getScript(Brandung.folderPath + 'libs/bra/loadmodule/jquery.loadmodule.min.js')) : basket.require(
			{
				url: Brandung.folderPath + 'libs/bra/loadmodule/jquery.loadmodule.min.js',
				unique: '1.0.0'
			}
		);

		Brandung.DeferLoadPlugin.then(function () {
			/**
			 * Define globally used jquery objects
			 * @type {void|*}
			 */
			Brandung.GlobalVars = $.extend(Brandung.GlobalVars, {
				$body: $('body'),
				$window: $(window)
			});

			/**
			 #####################################
			 #                                   #
			 #    mobile stuff functions         #
			 #                                   #
			 #####################################
			 */
			Brandung.Mobile = $.extend((Brandung.Mobile ? Brandung.Mobile : {}), {

				init: function () {
					// Place here all functions that need to be invoked on every page load
					//add click-event to navigation-trigger
					$('.nav-toggle').on('click', function (event) {
						//init
						event.preventDefault();
						var $btnMeta = $('.btn-meta-menu'),
							$metaList = $('.meta-list');

						if ($btnMeta.hasClass('active')) {
							$btnMeta.trigger('click');
						}

						//call navigation function for mobile
						Brandung.GlobalVars.$body.toggleClass('navigation-is-active');

						//close meta-nav flyouts
						$metaList.find('.btn-active').removeClass('btn-active');
						$metaList.find('.fadeInUp').removeClass('fadeInUp');
					});

					// Init Mobile Functions
					this.turnOffNavi();

				}

			});

			/**
			 * @func turnOffNavi
			 *
			 * @desc hide Navi on click navi element, when this one is already activate
			 */
			Brandung.Mobile.turnOffNavi = function () {
				var $naviLink = $('nav[role="navigation"] ul li a');

				$naviLink.on('click', function () {
					var $that = $(this);

					if ($that.hasClass('active')) {
						Brandung.GlobalVars.$body.removeClass('navigation-is-active');
					}
				});
			};

			/**
			 * check orientation
			 *
			 * add orientation class to body tag
			 */
			Brandung.Mobile.checkOrientation = function () {

				if (window.orientation !== 0) {
					Brandung.GlobalVars.$body.removeClass('portrait').addClass('landscape');
				} else {
					Brandung.GlobalVars.$body.removeClass('landscape').addClass('portrait');
				}

				//reinit functions
				Brandung.Helpers.reInit();
			};

			/**
			 * get media device selector
			 */
			if (Brandung.IE8) {
				Brandung.Mobile.mediaDevice = 'desktop';
			} else {
				Brandung.Mobile.mediaDevice = window.getComputedStyle(document.body, ':after').getPropertyValue('content');
			}
			Brandung.Mobile.getWindowWidth = function () {
				if (Brandung.IE8) {  // feature detection for IE <= IE8
					Brandung.Mobile.mediaDevice = 'desktop';
				} else {
					Brandung.Mobile.mediaDevice = window.getComputedStyle(document.body, ':after').getPropertyValue('content');
				}
			};

			// add event listener
			Brandung.GlobalVars.$window.on('load', function () {
				Brandung.Mobile.getWindowWidth();
				Brandung.Mobile.checkOrientation();
			}).smartresize(function () {
				// call function only on desktop devices
				if ((!Modernizr.touch && window.orientation !== 0) || (Modernizr.touch && window.orientation !== 0)) {
					Brandung.Mobile.getWindowWidth();
				}
				//reinit functions
				Brandung.Helpers.reInit();
			}).on('orientationchange', function () {
				Brandung.Mobile.checkOrientation();
			});

			/**
			 #####################################
			 #                                   #
			 #      jQuery plugins object        #
			 #                                   #
			 #####################################
			 */
			Brandung.Plugins = $.extend((Brandung.Plugins ? Brandung.Plugins : {}), {

				init: function () {
					// load plugin scripts
					Brandung.Plugins.loadScripts();
				}

			});

			/**
			 * load scripts
			 */
			Brandung.Plugins.loadScripts = function () {

				// load hotfix files
				Brandung.GlobalVars.$body.loadModule([
					Brandung.folderPath + 'hotfix.js',
					'typo3conf/ext/a21_custom/Resources/Public/css/hotfix.css',
					Brandung.folderPath + 'libs/vendor/jquery-cookie-master/src/jquery.cookie.js'
				], function () {
					Brandung.Plugins.initContrast();
				}, 0);

				// placeholder polyfill for legacy browsers
				$('[placeholder]').loadModule([
					Brandung.folderPath + 'libs/vendor/placeholder/placeholders.min.js'
				], function () {
				}, 1);

				$('.mod-finder').loadModule([
						Brandung.folderPath + 'libs/vendor/underscore/underscore-min.js'
					],
					function () {
						Brandung.Functions.tabsFinder();
					}, new Date().getTime());

				// loader helper.js on mobile devices
				if (Brandung.Mobile.mediaDevice === 'smartphone') {
					Brandung.GlobalVars.$body.loadModule([
						Brandung.folderPath + 'libs/vendor/h5bp/helper.js'
					], function () {
						// init MBP helper functions
						MBP.scaleFix();
						MBP.hideUrlBar();
					}, 'unique');
				}

				/**
				 * load form validation module
				 * https://github.com/brandung/mod-form.git
				 *
				 * @require {loadModule}
				 * @require {jquery-validation}
				 */
				$('form.validate').loadModule([
						Brandung.folderPath + 'libs/vendor/jquery-validation/dist/jquery.validate.min.js'
					],
					function () {
						Brandung.Plugins.validator($('form.validate'));
					}, 0);

				/**
				 * load and init mod-simple-flexslider
				 */
				$('.flexslider').loadModule([
						Brandung.folderPath + '/libs/vendor/flexslider/flexslider.css',
						Brandung.folderPath + '/libs/vendor/flexslider/jquery.flexslider-min.js'
					],
					function () {
						Brandung.Plugins.modFlexslider($('.mod-simple-flexslider .flexslider'));
						Brandung.Plugins.modFlexslider($('.mod-carousel .flexslider'));
						Brandung.Plugins.modFlexslider($('.mod-carousel-variant .flexslider'));
						Brandung.Plugins.modSliderFullWidth($('.mod-slider-full-width .flexslider'));
					}, 0);

				/**
				 * load and init focuspoint
				 */
				$('.mod-slider-full-width').loadModule([
					Brandung.folderPath + 'libs/vendor/focuspoint/focuspoint.css',
					Brandung.folderPath + 'libs/vendor/focuspoint/jquery.focuspoint.min.js'
				], function () {

					Brandung.Plugins.focuspoint($('.focuspoint'));

				}, 0);

				/**
				 * load and init autocompletion for a-z finder input
				 */
				$('.typeahead').loadModule([
					Brandung.folderPath + 'libs/vendor/typeahead/typeahead.bundle.js',
					Brandung.folderPath + 'libs/vendor/a21typeahead/src/bloodhound/a21bloodhound.js'
				], Brandung.Plugins.initTypeahead, 0);

				/**
				 * load and init fancybox
				 */
				$('.fancybox').loadModule([
					Brandung.folderPath + 'libs/vendor/fancybox/jquery.fancybox.pack.js',
					Brandung.folderPath + 'libs/vendor/fancybox/jquery.fancybox.css'
				], function () {

					Brandung.Plugins.fancybox($('.fancybox'));

				}, 0);

				/**
				 * load and init Jquery ui
				 */
				$('body').loadModule([
					Brandung.folderPath + 'libs/vendor/jquery-ui-1.11.4.custom/jquery-ui.min.js',
					Brandung.folderPath + 'libs/vendor/jquery-ui-1.11.4.custom/jquery-ui.min.css'
				], function () {

					Brandung.Plugins.uiSlider($('.range'));

					// RV enabled and filled with old searchAutoComplete
					Brandung.Plugins.uiAutocomplete($('#globalSearch'));

				}, 0);

				/**
				 * load and init lazy load google map
				 */
				$('.mod-map').loadModule([
					Brandung.folderPath + 'libs/vendor/lazy-load-Gmap/jquery.lazy-load-google-maps.min.js'
				], function () {

					Brandung.Plugins.googleMapsLoader($('.my-map'));

				}, 0);

				/**
				 * load and init video.js
				 */
				if(!Brandung.IE8){
					$('.mod-video').loadModule([
						Brandung.folderPath + 'libs/vendor/video-js/video.js',
						Brandung.folderPath + 'libs/vendor/video-js/video-js.min.css'
					], function () {
						Brandung.Plugins.modVideo($('.mod-video'));
					}, 0);
				}

                /**
                 * load the oncssanimationend-plugin for the accordion, to get feedback when a transition/animation ended
                 */
                $('.accordion-item').loadModule([
                    Brandung.folderPath + 'libs/vendor/jquery-oncssanimationend/jquery.oncssanimationend.js'
                ]);
			};

			Brandung.Plugins.initTypeahead = function () {
				var $that = $(this);

				var data = new A21Bloodhound({
					// datumTokenizer: Bloodhound.tokenizers.whitespace,
					datumTokenizer: function(datum) { return [datum]; },
					// queryTokenizer: Bloodhound.tokenizers.whitespace,
					queryTokenizer: function(query) { return [query]; },
					/*
					 prefetch: {
					 url: $that.data('url'),
					 cache: false
					 }
					 */
					remote: {
						url: $that.data('url'),
						// wildcard: '_QUERY_',
						prepare: function(query, settings){
							// replace search query marker
							settings.url = ('' + decodeURI(settings.url)).replace(
								/_QUERY_/g,
								// this is an oldbaken IE8 utf8 compatible query.substring(0, 2) -- the two dots
								('' + query).toLowerCase().replace(
									/^(..).*$/,
									'$1'
								)
							);
							return settings;
						}
					},
					indexRemote: true
				});

				$that.typeahead({
					highlight: true,
					minLength: 2,
					limit: 10,
					// do not insert first result into search box
					hint: false
				}, {
					name: 'data',
					source: data
				});
			};

			/**
			 * jquery-validator
			 * http://jqueryvalidation.org/validate
			 *
			 * @param {object} obj
			 */
			Brandung.Plugins.validator = function (obj) {
				if (!obj.length) {
					return;
				}

				$.validator.addClassRules("required-entry", {
					required: true
				});

				$.extend(jQuery.validator.messages, {
					required: "Pflichtfeld",
					email: "Ungülige E-Mail-Adresse",
					url: "Ungültige URL",
					date: "Ungültiges Datum",
					dateISO: "Ungültiges Datum (ISO)",
					number: "Ungültige Nummer",
					digits: "Bitte nur Zahlen eingeben."
				});

				// validate form
				obj.each(function () {
					var $_self = $(this);
					$_self.validate({
						errorClass: 'error',
						errorElement: 'p',
						highlight: function (element, errorClass, validClass) {
							$(element).closest('.field').addClass(errorClass);
							$(element).closest('.wide').addClass(errorClass);
						},
						unhighlight: function (element, errorClass, validClass) {
							$(element).closest('.field').removeClass(errorClass);
							$(element).closest('.wide').removeClass(errorClass);
						},
						submitHandler: function (form) {
							form.submit();
						}
					});
				});
			};

			/**
			 * module: ui Slider
			 *
			 * @param obj
			 */
			Brandung.Plugins.uiSlider = function (obj) {
				obj.slider({
					orientation: 'horizontal',
					range: "min",
					max: 1,
					value: 0
				});
			};

			/**
			 * @func uiAutocomplete
			 *
			 * @param obj
			 */
			Brandung.Plugins.uiAutocomplete = function (obj) {

				obj.focus(function () { this.select(); })
					.mouseup(function (e) { e.preventDefault(); })
					.autocomplete({
						// position: { offset: '0' },
						position: { my: 'left top', at: 'left bottom', offset: '0, 0', collision: 'none' },
						source: function (request, response) {
							$.ajax({
								//
								url: ('https:' == document.location.protocol ? 'https://' : 'http://') + 'clients1.google.com/complete/search?q=' + request.term + '&hl=en&client=partner&source=gcsc&partnerid=' + document.getElementById('cx_box').value + '&ds=cse&nocache=' + Math.random().toString(),
								dataType: 'jsonp',
								success: function (data) {
									data[1].splice(6,4);
									response($.map(data[1], function (item) {
										return {
											label: item[0],
											value: item[0]
										};
									}));
								}
							});
						},
						autoFill: true,
						minChars: 0,
						appendTo: '#search',
						select: function (event, ui) {
							jQuery(this).closest('input').val(ui.item.value);
							jQuery(this).closest('form').trigger('submit');
						}
					})

				/* RV WTF
				if( $.browser.msie && $.browser.version.substring(0, 1)==7 ){
					obj.focus(function(){
						jQuery("#metainfo").css('display','none');
					}).focusout(function(){
						jQuery("#metainfo").css('display','block');
					})
				}
				*/
			};


			/**
			 * module: flexslider
			 *
			 * @param obj {selector}
			 * @param reinit {boolean}
			 */
			Brandung.Plugins.modFlexslider = function (obj, reinit) {
				var imgWidth = obj.find('img').width();
				imgWidth = reinit ? imgWidth : 220;

				var options = $(),
					simpleOpt = {
						animation: "slide",
						/*slideshowSpeed: 2000,*/
						animationLoop: true,
						pauseOnHover: true,
						pauseOnAction: false
					},
					carouselOpt = {
						controlNav: false,
						itemWidth: imgWidth,
						//itemMargin: 10,
						minItems: 1,
						maxItems: 4,
						move: 1
					},
					variantOpt = {
						controlNav: false,
						//itemMargin: 10,
						itemWidth: 425,
						minItems: 1,
						maxItems: 2,
						move: 1
					};

				if (obj.selector === ".mod-carousel .flexslider" || reinit) {
					$.extend(simpleOpt, carouselOpt);
				}

				if (obj.selector === ".mod-carousel-variant .flexslider") {
					$.extend(simpleOpt, variantOpt);
				}

				if(Brandung.IE8){
					$.extend(simpleOpt, {
						slideshow: false
					});
					$.extend(carouselOpt, {
						slideshow: false
					});
					$.extend(variantOpt, {
						slideshow: false
					});
				}

				//custom options for mobile IE browser
				if(/IEMobile/i.test(navigator.userAgent) ){
					$.extend(simpleOpt, {
						touch: false
					});
					$.extend(carouselOpt, {
						touch: false
					});
					$.extend(variantOpt, {
						touch: false
					});
				}

				if(obj.parents('.slide-speed-slow').length > 0){
					$.extend(simpleOpt, {
						slideshowSpeed: 2000
					});
				}
				if(obj.parents('.slide-speed-middle').length > 0){
					$.extend(simpleOpt, {
						slideshowSpeed: 5000
					});
				}
				if(obj.parents('.slide-speed-fast').length > 0){
					$.extend(simpleOpt, {
						slideshowSpeed: 7000
					});
				}

				options = simpleOpt;

				if (reinit) {
					Brandung.Helpers.flexdestroy(obj, options);
					Brandung.Functions.zoomCarousel();
				} else {
					obj.flexslider(options);
				}
			};

			/**
			 * module: flexslider
			 *
			 * @param obj
			 */
			Brandung.Plugins.modSliderFullWidth = function (obj) {
				obj.flexslider({
					animation: "slide",
					slideshowSpeed: "2000",
					controlNav: false,
					start: function (slider) {
						slider.find('.current-slide').text(slider.currentSlide + 1)
							.end().find('.total-slides').text(slider.count);
					},
					after: function (slider) {
						slider.find('.current-slide').text(slider.currentSlide + 1)
							.end().find('.total-slides').text(slider.count);
					}
				});
			};

			/**
			 * module: focuspoint
			 *
			 * @param obj
			 */
			Brandung.Plugins.focuspoint = function (obj) {
				if (!obj.length) {
					return;
				}

				obj.focusPoint({
					throttleDuration: 200
				});
			};

			/**
			 * module: focuspoint
			 *
			 * @param obj
			 */
			Brandung.Plugins.fancybox = function (obj) {
				if (!obj.length) {
					return;
				}

				obj.fancybox();
			};

			/**
			 * set contrast
			 */
			Brandung.Plugins.initContrast = function () {
				var $btnContrast = $('.mod-contrast > .switch'),
					$body = $('body'),
					cookieContrast = 0;

				//check the cookie
				if (Brandung.Functions.detectCookies() === true) {
					//set cookie
					if ($.cookie('contrast-activated') !== undefined) {
						//get saved cookieContrast
						cookieContrast = $.cookie('contrast-activated');
					} else {
						//save cookieContrast for first time
						cookieContrast = 0;
						saveFontSize();
					}

					if (cookieContrast === '1') {
						$btnContrast.addClass('active');
						$body.addClass('color-pattern-contrast');
						cookieContrast = 1;
					} else {
						$btnContrast.removeClass('active');
						$body.removeClass('color-pattern-contrast');
						cookieContrast = 0;
					}
				}

				$btnContrast.click(function () {
					var $that = $(this);




					if ($body.hasClass('color-pattern-contrast') && $that.hasClass('active')) {
						$that.removeClass('active');
						$body.removeClass('color-pattern-contrast');
						cookieContrast = 0;

						//close flyout
						$that.parents('.accessibility').find('.btn-active').removeClass('btn-active');
						$that.parents('.accessibility').find('.fadeInUp').removeClass('fadeInUp');
					}
					else {
						$that.addClass('active');
						$body.addClass('color-pattern-contrast');
						cookieContrast = 1;

						//close flyout
						$that.parents('.accessibility').find('.btn-active').removeClass('btn-active');
						$that.parents('.accessibility').find('.fadeInUp').removeClass('fadeInUp');
					}

					saveFontSize();
				});

				//save cookie function
				function saveFontSize () {
					$.cookie('contrast-activated', cookieContrast, {
						expires: 1,
						path: '/'
					});
				}
			};

			/**
			 * googleMapsLoader
			 *
			 * @desc use the plugin lazy load google maps
			 * @param {selector} obj
			 *        @func initMarker set a new marker
			 *        @param {object} mapEl
			 */
			Brandung.Plugins.googleMapsLoader = function (obj) {
				var stylesOpt = [
					{
						"featureType": "poi.medical",
						"elementType": "geometry",
						"stylers": [
							{ "color": "#8dc1ae" },
							{ "visibility": "on" }
						]
					}, {
						"featureType": "water",
						"elementType": "geometry.fill",
						"stylers": [
							{ "visibility": "on" },
							{ "color": "#9ebede" }
						]
					}, {
						"featureType": "landscape",
						"stylers": [
							{ "visibility": "on" },
							{ "color": "#f6f3ed" },
							{ "lightness": -6 }
						]
					}, {
						"featureType": "road",
						"elementType": "geometry",
						"stylers": [
							{ "color": "#808080" },
							{ "lightness": 100 },
							{ "weight": 0.5 }
						]
					}, {
						"featureType": "poi.business",
						"elementType": "geometry",
						"stylers": [
							{ "color": "#f6f3ed" }
						]
					}, {
						"featureType": "poi.park",
						"elementType": "labels.text.stroke",
						"stylers": [
							{ "color": "#808080" },
							{ "weight": 0.1 },
							{ "saturation": -100 },
							{ "lightness": 50 }
						]
					}, {
						"featureType": "poi.school",
						"elementType": "geometry",
						"stylers": [
							{ "lightness": 70 },
							{ "color": "#8dc1ae" }
						]
					}
				];

				obj.lazyLoadGoogleMaps({
					api_key: false,
					callback: function (container, map) {
						var $container = $(container),
							center = new google.maps.LatLng($container.attr('data-lat'), $container.attr('data-lng'));
						var isDraggable = $(document).width() > 767 ? true : false;

						map.setOptions({
							draggable: isDraggable,
							zoom: 15,
							center: center,
							scrollwheel: false,
							zoomControl: true,
							zoomControlOptions: {
								style: google.maps.ZoomControlStyle.SMALL
							},
							styles: stylesOpt
						});

						new google.maps.Marker({ position: center, map: map });

						var updateCenter = function () {
							$.data(map, 'center', map.getCenter());
						};
						new google.maps.event.addListener(map, 'dragend', updateCenter);
						new google.maps.event.addListener(map, 'zoom_changed', updateCenter);
						new google.maps.event.addListenerOnce(map, 'idle', function () {
							$container.addClass('is-loaded');
						});

						initMarker(map);
					}
				});

				function initMarker (mapEl) {
					var $element = $('.mod-map ul li a');

					$element.click(function (e) {
						e.preventDefault();
						var $that = $(this),
							center = new google.maps.LatLng($that.attr('data-lat'), $that.attr('data-lng'));

						if (!$that.hasClass('active')) {
							$element.removeClass('active');
							$that.addClass('active');
						}

						mapEl.setOptions({ zoom: 15, center: center, scrollwheel: false, styles: stylesOpt });
						new google.maps.Marker({ position: center, map: mapEl });

						if (Brandung.Mobile.mediaDevice === 'smartphone' || Brandung.Mobile.mediaDevice === 'featurephone') {
							Brandung.Functions.setOffsetTop($('.mod-map'));
						}
					});
				}
			};

			/**
			 * modVideo
			 *
			 * @desc Init the plugin videoJs
			 * @param {selector} obj
			 */
			Brandung.Plugins.modVideo = function (obj) {
				if(!obj.length) return;

				obj.videojs({
					controls: true,
					autoplay: false,
					preload: 'auto',
					techOrder: ["html5", "flash", "other supported tech"]
				});

			};

			/**
			 #####################################
			 #                                   #
			 #        helper functions           #
			 #                                   #
			 #####################################
			 */
			Brandung.Helpers = $.extend((Brandung.Helpers ? Brandung.Helpers : {}), {

				init: function () {
					// Place here all functions that need to be invoked on every page load
					Brandung.Helpers.reInit();
					Brandung.Helpers.equalHeights($('.mod-teaser-list .col-m-6 div'));
					Brandung.Helpers.equalHeights($('.mod-news .col-s-6 .news-teaser-small'));
					Brandung.Helpers.equalHeights($('.list-jobs li'));
					Brandung.Helpers.equalHeights($('.mod-news-teaser-large div a:not(moreLink)'));
					Brandung.Helpers.equalHeights($('.mod-finder ul li'));
				}
			});

			/**
			 * reinit
			 *
			 * a Helper-Function to assist with the window.resize events and some classes
			 *
			 */
			Brandung.Helpers.reInit = function () {
				//init
				var $websiteHeader = $('.wrapper > header');

				//remove mobile classes from body
				$('body').removeClass('navigation-is-active');
				$('.mod-meta-navigation').removeClass('active');

				if(!Brandung.IE8){
					$('.flyout').removeClass('fadeInUp');
				}

				$websiteHeader.removeClass('is-fixed');

				//call necessary functions
				Brandung.Functions.stickyDesktopHeader($websiteHeader);
			};

			/**
			 * check if element is visible on viewport
			 *
			 * @returns {boolean}
			 */
			Brandung.Helpers.isOnScreen = function () {

				var win = $(window);

				var viewport = {
					top: win.scrollTop(),
					left: win.scrollLeft()
				};
				viewport.right = viewport.left + win.width();
				viewport.bottom = viewport.top + win.height();

				var bounds = this.offset();
				bounds.right = bounds.left + this.outerWidth();
				bounds.bottom = bounds.top + this.outerHeight();

				return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
			};

			/**
			 * equalHeights
			 *
			 * @param group {selector}
			 */
			Brandung.Helpers.equalHeights = function (group) {
				var currentTallest = 0,
					currentRowStart = 0,
					currentDiv = 0,
					rowDivs = [],
					setHeights = function () {
						group.css('height', 'auto');

						//if (Brandung.Mobile.mediaDevice.indexOf('desktop') > -1 || Brandung.Mobile.mediaDevice.indexOf('retina') > -1) {
						group.each(function () {
							var $el = $(this),
								topPosition = $el.position().top;

							if (currentRowStart != topPosition) {

								// we just came to a new row.  Set all the heights on the completed row
								for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
									rowDivs[currentDiv].height(currentTallest);
								}

								// set the variables for the new row
								rowDivs.length = 0; // empty the array
								currentRowStart = topPosition;
								currentTallest = $el.height();
								rowDivs.push($el);

							} else {

								// another div on the current row.  Add it to the list and check if it's taller
								rowDivs.push($el);
								currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);

							}

							// do the last row
							for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
								rowDivs[currentDiv].height(currentTallest);
							}
						});
						//}
					};

				setHeights();
				$(window).on('resize', setHeights);
			};

			/**
			 * flexdestroy
			 *
			 * @desc Destroy Flexslider
			 *
			 * @param selector {selector}
			 * @param options {array}
			 */
			Brandung.Helpers.flexdestroy = function (selector, options) {
				var el = selector,
					elClean = el.clone();

				elClean.find('.flex-viewport').children().unwrap();
				elClean
					.find('.flex-direction-nav, .flex-control-nav')
					.remove()
					.end()
					.find('*').removeAttr('style').removeClass(function (index, css) {
						return (css.match(/\bflex\S+/g) || []).join(' ');
					});

				elClean.insertBefore(el);
				elClean.next().remove();

				var imgWidth = elClean.find('img').width(),
					newWidth = { itemWidth: imgWidth };

				$.extend(options, newWidth);

				elClean.flexslider(options);
			};

			/**
			 #####################################
			 #                                   #
			 #        global functions           #
			 #                                   #
			 #####################################
			 */
			Brandung.Functions = $.extend((Brandung.Functions ? Brandung.Functions : {}), {

				init: function () {
                    // Place here all functions that need to be invoked on every page load
                    this.stickyDesktopHeader($('.wrapper > header'));
                    // kg test: positioning of finders
                    //this.moveElement($('.mod-finder, .mod-breadcrumbs'), $('.mod-stage-static, .mod-stage-slider'), 'after');
                    this.moveElement($('.mod-finder-top, .mod-breadcrumbs'), $('.mod-stage-static, .mod-stage-slider'), 'after');
                    this.additionalFormularFields($('.toggle-additional-fields'), '.additional-fields');
                    this.modLexicon($('.mod-lexicon'));
                    this.initPlaceholders();
                    this.toggleSearch();
                    this.initArticleScroll();
                    this.initZoomSlider();
                    this.modNewsHeight();
                    this.bookmark($('.bookmark'));
                    this.toggleRecommend();
                    this.zoomCarousel();
                    this.toggleMetaFlyout();
                    // RV this.displayFilter();
                    this.resetSelect();
                    //this.tabsFinder();
                    this.toggleFields($('#tx_a21contactform_general'));
                    this.micrositeHeaderFix();
                    this.accordion();
                }
			});

			/**
			 * stickyDesktopHeader
			 *
			 * apply position 'fixed' to header when navigation is scrolling
			 *
			 * @param obj
			 */
			Brandung.Functions.stickyDesktopHeader = function (obj) {
				if (!obj.length) {
					return;
				}
				//init
				obj.removeClass('is-fixed').css({
					top: 0
				});

				if (Brandung.Mobile.mediaDevice.indexOf('desktop') > -1 || Brandung.Mobile.mediaDevice.indexOf('retina') > -1) {
					//fill vars
					var win = $(window),
						navElement = $('nav[role="navigation"]'),
						navPosition = navElement.position().top,
						navHeight = navElement.height(),
						viewportHeight = win.height();

					//calculate position and apply css
					function calculatePosition (obj) {
						if (viewportHeight + win.scrollTop() >= navPosition + navHeight) {

							obj.addClass('is-fixed').css({
								top: '-' + ((navPosition + navHeight) - viewportHeight) + 'px'
							});
						} else {
							obj.removeClass('is-fixed').css({
								top: 0
							});
						}
					}

					calculatePosition(obj);

					//call calculatePosition on scroll-event
					win.on('scroll', function () {
						calculatePosition(obj);
					});
				}
			};

			/**
			 * additionalFormularFields
			 *
			 * toggles a hidden fieldset for additional formular-inputs
			 *
			 * @param trigger
			 * @param target
			 */
			Brandung.Functions.additionalFormularFields = function (trigger, target) {
				//init
				if (!trigger.length) {
					return;
				}

				var associatedFieldset = null;

				//event handling
				trigger.on('change', function () {
					//get vars
					associatedFieldset = $(this).parents('.mod-form').find(target);

					//apply class to associated fieldset
					if (associatedFieldset.length) {
						associatedFieldset.stop(true, true).slideToggle('fast');
					}
				});
			};

			/**
			 * scroll to element
			 *
			 * @param $obj
			 */
			Brandung.Functions.setOffsetTop = function ($obj) {
				//init
				if (!$obj.length) {
					return;
				}

				//animation scroll
				$('body, html').stop()
					.animate({
						'scrollTop': $obj.offset().top - 80
					}, 500);
			};

			/** Bookmark current page
			 *
			 * @param {object} $obj - Bookmark link
			 */
			Brandung.Functions.bookmark = function ($obj) {
				var bookmark;

				if ($obj.length === 0) {
					return;
				}

				$obj.hide();

				bookmark = function (event) {
					if (window.external && 'AddFavorite' in window.external) {
						// IE
						event.preventDefault();

						window.external.AddFavorite(window.location.href, document.title);
					} else if (window.sidebar && 'addPanel' in window.sidebar) {
						// Fx <23 Bookmark, 'addPanel' not available from v23 on any more.
						event.preventDefault();

						window.sidebar.addPanel(document.title, window.location.href, '');
					}
				};

				if ((window.sidebar && 'addPanel' in window.sidebar) || (window.external && 'AddFavorite' in window.external)) {
					$obj.show().attr('rel', 'sidebar').on('click', bookmark);
				}
			};

			/**
			 * modLexicon
			 *
			 * applies classes and events to the lexicon controls
			 *
			 * @param obj
			 */
			Brandung.Functions.modLexicon = function (obj) {
				//init
				if (!obj.length) {
					return;
				}

				var $section = obj.find('section'),
					sectionLength = $section.length,
					currentJumpTarget = null,
					currentJumpTargetRaw = null,
					jumpTargets = '';

				//set 'is-disabled' classes for scroll-buttons and collect jump targets
				$.each($section, function () {
					//init
					var $that = $(this);

					//set 'is-disabled' class
					if ($that.index() === 0) {
						$that.find('.prev').addClass('is-disabled');
					}
					if ($that.index() === sectionLength - 1) {
						$that.find('.next').addClass('is-disabled');
					}

					//collect jump targets
					currentJumpTargetRaw = $that.find('.headline-lexicon').text();
					currentJumpTarget = currentJumpTargetRaw.replace(/[^a-z0-9_]/gmi, '_').replace(/\s+/g, '');
					$that.find('.headline-lexicon').addClass('target-' + currentJumpTarget);
					jumpTargets += '<option value="' + currentJumpTarget + '">' + currentJumpTargetRaw + '</option>';
				});

				//create lexicon-jump-targets select-field
				$(obj).find('.controls-lexicon').prepend('<div class="field"><select name="lexicon-jump-targets">' + jumpTargets + '</select></div>');

				//apply 'selected' attribute to select-options
				$.each($section, function () {
					//init
					var $that = $(this);

					currentJumpTargetRaw = $that.find('.headline-lexicon').text();
					currentJumpTarget = currentJumpTargetRaw.replace(/[^a-z0-9_]/gmi, '_').replace(/\s+/g, '');
					$that.find('option[value="' + currentJumpTarget + '"]').attr('selected', 'selected');
				});

				//lexicon-jump-targets event-handling
				$(obj).find('.controls-lexicon select').on('change', function () {
					var $that = $(this);

					//get jump target
					currentJumpTarget = $that.val();

					//scroll to element
					Brandung.Functions.setOffsetTop(obj.find('.target-' + currentJumpTarget).parent('section'));

					//reset select
					for (var i = 0, len = $that[0].options.length; i < len; i += 1) {
						// set select to default state
						if ($that[0].options[i].defaultSelected) {
							$(this).prop('selectedIndex', i);
						}
					}
				});

				//scroll to prev section
				$(obj).find('.prev').on('click', function (event) {
					//init
					event.preventDefault();

					//scroll to element
					Brandung.Functions.setOffsetTop($(this).parents('section').prev());
				});

				//scroll to next section
				$(obj).find('.next').on('click', function (event) {
					//init
					event.preventDefault();

					//scroll to element
					Brandung.Functions.setOffsetTop($(this).parents('section').next());
				});
			};

			/**
			 * Toggle Search
			 *
			 * display search input on click event
			 */
			Brandung.Functions.toggleSearch = function () {
				var $btnLupe = $('.search-toggle'),
					$wrapElem = $('.mod-search'),
					$metaArea = $('.max-width'),
					$form = $('.mod-search form'),
					$input = $('#globalSearch'),
					$body = $('body'),
					$btnMeta = $('.mod-meta-navigation'),
					$items = $('.meta-list li a');

				$btnLupe.on('click', function (event) {
					event.preventDefault();


					if ($body.hasClass('navigation-is-active')) {
						$body.removeClass('navigation-is-active');
						$btnMeta.removeClass('active');
					}

					$items.removeClass('btn-active')
						.next('.flyout')
						.removeClass('fadeInUp');

					if (!$wrapElem.hasClass('active')) {
						$wrapElem.addClass('active');
					}

					if (!Brandung.IE8 && !$metaArea.hasClass('active')) {
						$metaArea.addClass('active');
					}
				});

				$form.on('submit', function (event) {
					if ($input.val() === '') {
						$wrapElem.removeClass('active');
						$metaArea.removeClass('active');
						event.preventDefault();
					}
				});
			};

			/**
			 * Toggle flyout
			 */
			Brandung.Functions.toggleMetaFlyout = function () {
				var $items = $('.meta-list > li > a'),
					classFlyout = '.flyout';
				$items.on('click', function (event) {

					var $that = $(this);

					if (!$that.parent().hasClass('emergency')) {
						event.preventDefault();
					}

					if (!$that.next(classFlyout).hasClass('fadeInUp')) {
						$(classFlyout).removeClass('fadeInUp');
						$items.removeClass('btn-active');
						$that.toggleClass('btn-active');
						$that.next(classFlyout).addClass('fadeInUp');
					} else {
						$that.toggleClass('btn-active');
						$that.next(classFlyout).removeClass('fadeInUp');
					}
				});
			};

			/**
			 * Toggle Recommend
			 *
			 * display Recommend input on click event
			 */
			Brandung.Functions.toggleRecommend = function () {
				var $recommend = $('.footer-content .recommend > a'),
					$toggleElem = $recommend.next('.flyout');

				$recommend.on('click', function (event) {
					event.preventDefault();

					$toggleElem.toggleClass('active');
				});
			};

			/**
			 * initPlaceholders
			 *
			 * Init Placeholder for old IE
			 */
			Brandung.Functions.initPlaceholders = function () {
				if (Brandung.IE9) {
					$("[placeholder]").focus(function () {
						var input = $(this);
						if (input.val() === input.attr("placeholder")) {
							input.val("");
							input.removeClass("placeholder");
						}
					}).blur(function () {
						var input = $(this);
						if (input.val() === "" || input.val() === input.attr("placeholder")) {
							input.addClass("placeholder");
							input.val(input.attr("placeholder"));
						}
					}).blur();

					$("[placeholder]").parents("form").submit(function () {
						$(this).find("[placeholder]").each(function () {
							var input = $(this);
							if (input.val() === input.attr("placeholder")) {
								input.val("");
							}
						});
					});
				}
			};

			/**
			 * initArticleScroll
			 *
			 * Add functionality to quick navigaton select,
			 * goto top button and table of content links to
			 * quickly navigate on articles
			 */
			Brandung.Functions.initArticleScroll = function () {
				var $quickNavigation = $('.mod-goto-article'),
					$goToTop = $quickNavigation.find('span'),
					$select = $quickNavigation.find('select'),
					$contentTableLink = $('.mod-table-of-content a'),
					footerHeight = $('footer').height(),
					timer,
					goToHandler = function(e, $targetEl, isSelect, preventDefault) {
						var $this = $(this),
							target;

						if(preventDefault) {
							e.preventDefault();
						}

						if(!$targetEl) {
							target = isSelect ?
							'#' + $this.val() :
								// if an absolute url is inserted here: cut it off
								('' + $this.attr('href').replace(/^.*#/,'#'));

							$targetEl = $(target);
						}

						Brandung.Functions.setOffsetTop($targetEl);

						if(isSelect) {
							$this.prop('selectedIndex', 0);

							$this.blur(function() {
								$this.prop('selectedIndex', 0);
							});
						}
					},
					scrollHandler = function () {
						var $doc = $(document),
							posScroll = $doc.scrollTop(),
							scrollBottom = $doc.height() - ($(window).height() + footerHeight + 30);

						if (posScroll >= 550) {
							$quickNavigation.fadeIn(600);
						} else {
							$quickNavigation.fadeOut(600);
						}

						if (posScroll >= scrollBottom) {
							$quickNavigation.css({ bottom: 40 + (- (scrollBottom - posScroll)) });

						} else {
							$quickNavigation.css({ bottom: 20 });
						}


						if (Brandung.Mobile.mediaDevice.indexOf('desktop') < 0 &&
							Brandung.Mobile.mediaDevice.indexOf('retina') < 0) {

							$quickNavigation.addClass('hidden');

							clearTimeout(timer);
							timer = setTimeout(function(){
								//remove hidden class
								$quickNavigation.removeClass('hidden');
							},100);
						}
					};

				scrollHandler();
				$(window).on('scroll', scrollHandler);


				$select.on('change', function (event) {
					goToHandler.call($(this), event, undefined, true);
				});
				$contentTableLink.on('click', function (event) {
					goToHandler.call($(this), event, undefined, false, true);
				});
				$goToTop.on('click', function (event) {
					goToHandler.call($(this), event, $('.mod-breadcrumbs'), false);
				});
			};

			/**
			 * initZoomSlider
			 */
			Brandung.Functions.initZoomSlider = function () {
				$('.zoom-image').click(function (event) {
					event.preventDefault();

					var $that = $(this),
						$img = $('.mod-slider-full-width .slider-image img'),
						$parentObj = $that.parents('.flexslider');

					$parentObj.toggleClass('zoom');

					$img.each(function () {
						var imgSrc = $(this).attr('src'),
							imgPath = $(this).data('src');

						$(this).data('src', imgSrc);
						$(this).attr('src', imgPath);
					});

				});
			};

			/**
			 *
			 *    detect cookies
			 *
			 */
			Brandung.Functions.detectCookies = function () {
				var cookieEnabled = (navigator.cookieEnabled) ? true : false;

				if (typeof navigator.cookieEnabled == 'undefined' && !cookieEnabled) {
					document.cookie = 'testcookie';
					cookieEnabled = (document.cookie.indexOf('testcookie') != -1) ? true : false;
				}

				return (cookieEnabled);
			};

			/**
			 * modNewsHeight
			 */
			Brandung.Functions.modNewsHeight = function () {
				var $obj = $('.mod-news'),
					hMiddleTeasers = 0,
					setHeightBigTeaser = function () {
						hMiddleTeasers = $obj.find('.mod-news-teaser-middle').height() - 42;

						if (Brandung.Mobile.mediaDevice.indexOf('tablet') > -1 ||
							Brandung.Mobile.mediaDevice.indexOf('desktop') > -1 ||
							Brandung.Mobile.mediaDevice.indexOf('retina') > -1) {
							$obj.find('.news-teaser-big').css('minHeight', hMiddleTeasers + 'px');
						}
					};

				setHeightBigTeaser();
				$(window).on('resize', setHeightBigTeaser);

				setTimeout(function () {
					$(window).trigger('resize');
				}, 300);
			};

			/**
			 * Move DOM elements to other nodes
			 *
			 * @param {Object} $el - Object to be moved
			 * @param {Object} $target - Target element
			 * @param {string} method - [append|prepend|before|after]
			 */
			Brandung.Functions.moveElement = function ($el, $target, method) {
				var $temp;

				if ($el.length && $target.length && !$el.hasClass('keep')) {
					$temp = $el.detach();
					$target[method]($temp);
				}
			};

			/**
			 * @name zoomCarousel
			 * @desc zoom for carousel element
			 *
			 */
			Brandung.Functions.zoomCarousel = function () {

				$('.zoom-link').on('click', function(event) {
					//init
					event.preventDefault();

					var $this = $(this),
						$carousel = $(this).parents('.mod-carousel'),
						$currentSlider = $this.parents('.flexslider'),
						$currentContainer = $this.parents('li'),
						$img = $this.find('img'),
						$zoomIcon = $this.find('.zoom');

					if ($carousel.hasClass('is-active')) {
						$carousel.removeClass('is-active');
						$zoomIcon.removeClass('zoom-out');

						$currentContainer.removeClass('is-active');

						$img.attr('src', $img.attr('data-img-small'));

					} else {
						$currentSlider.flexslider('pause');
						$carousel.addClass('is-active');
						$zoomIcon.addClass('zoom-out');

						$currentContainer.addClass('is-active');

						$img.attr('src', $img.attr('data-img-big'));
					}




				});
			};

			/**
			 * init the clinic finder filters
			 *
			 */
			Brandung.Functions.finder = function () {
				var self = {},
					prv = {};

				/** Creates all finder options within given select
				 *
				 * @private
				 * @param {Object} data
				 * @param {Object} $select
				 */
				prv.setData = function (data, $select) {
					$select.addClass('finder-category-' + data.id.replace('cat', ''));

					$.each(data[data.id], function (i) {
						var $option = $('<option></option>'),
							caption = this.caption,
							value = this.value,
							filteredData = {},
							enabled = {},
							filterSubText = $select.next('span').text();

						// remove output relevant properties from data set
						// and save what is important for filtering
						$.each(this, function (prop, value) {
							if (prop !== 'value' && prop !== 'caption') {
								filteredData[prop] = value;
							}
						});

						// add first option (0) to filter set
						$.each(filteredData, function (prop, value) {
							if (typeof value !== 'boolean') {
								enabled[prop] = value.slice();

								if ($.inArray(0, enabled[prop]) < 0) {
									enabled[prop].push(0);
								}
							} else {
								enabled[prop] = value;
							}
						});

						// create option element
						$option
							.text(caption)
							.attr('value', value)
							.addClass('sub-category-' + value)
							.data('enabled', enabled)
							.appendTo($select);

						$select.next('span').data('text', filterSubText);

						// set selected option
						if (value == $select.data('cat')) {
							$option.prop('selected', true);
						}

						setTimeout(function () {
							if($select.data('cat') != 0) {
								$select.closest('div').addClass('active')
									.end().next('span').text('');
							}
						}, 0);
					});
				};

				/** Get filter data from each select
				 *
				 * @private
				 */
				prv.getData = function () {
					var $select = $(this),
						data;

					if ($select.data('options') || $select.data('optionsUrl')) {
						$select.empty();
					}

					if ($select.data('options')) {
						data = $select.data('options');

						// json is in dom, parse it
						try {
							prv.setData(data, $select);
						} catch (error) {
							// json correctly formatted?
							if (data.indexOf('\'') > -1) {
								data = data.replace(/'/g, '"');
							}

							prv.setData($.parseJSON(data), $select);
						}
					}

					if ($select.data('optionsUrl')) {
						// json needs to be loaded
						$.ajax({
							url: $select.data('optionsUrl'),
							method: 'GET',
							dataType: 'json'
						}).then(function (data) {
							prv.setData(data, $select);
						});
					}
				};

				/** Checks if given category data is of type {Boolean}
				 * and converts it to an array of option values for better filtering
				 *
				 * @private
				 * @param {Object} data
				 * @returns {Object}
				 *
				 */
				prv.convertBoolToArray = function (data) {
					var properties = _.flatten(_.values(data)),
						hasBooleans = _.filter(properties, function (item) {
							return typeof item === 'boolean';
						});

					if (!hasBooleans.length) {
						return data;
					}

					$.each(data, function (prop, value) {
						var catID = parseInt(prop.replace('cat', ''), 10),
							convertedData = {};

						if (typeof value === 'boolean') {
							convertedData[prop] = [];

							// get every option value of wanted category and save it
							if (value === true) {
								$('.finder-category-' + catID).find('option').each(function () {
									convertedData[prop].push(parseInt($(this).val(), 10));
								});
							}

							// add first option to data set
							if ($.inArray(0, convertedData[prop]) < 0) {
								convertedData[prop].push(0);
							}
						} else {
							// if value is an array just add it to the new set without
							// changing it
							convertedData[prop] = value.slice();
						}

						// overwrite given data values with new values
						data[prop] = convertedData[prop];
					});

					return data;
				};

				/** This method is all about filtering between filter selects
				 *
				 * @private
				 */
				prv.checkExcludes = function () {
					var $this = $(this),
					// get selected option
						$selected = $this.find('option[value="' + $this[0].value + '"]'),
					// get parent form
						$context = $this.closest('form'),
						$otherSelects = $context.find('select').not($this),
					// get category options from selected option
						enabled = prv.convertBoolToArray($selected.data('enabled')),
					// new object to build list intersections (sorted by category)
						intersections = {},
						filterSubText = parseInt($this[0].value, 0) === 0 ? $this.next('span').data('text') : '';

					// save converted data back to the option
					$selected.data('enabled', enabled);

					// add category options from selected option to intersection object
					$.each(enabled, function (prop, value) {
						intersections[prop] = [value];
					});
					// and then reset the set for later redeclaration
					enabled = {};

					// get category options from other selected options
					// and add these to the intersections object
					$otherSelects.each(function () {
						var $that = $(this),
							$selectedOption = $that.find('option[value="' + $that[0].value + '"]');

						$selectedOption.data('enabled', prv.convertBoolToArray($selectedOption.data('enabled')));

						$.each(
							$selectedOption.data('enabled'),
							function (prop, value) {
								if (intersections[prop]) {
									intersections[prop].push(value);
								}
							}
						);
					});

					// build list intersections and save newly created sets to the
					// filter object of the selected option
					$.each(intersections, function (prop, value) {
						enabled[prop] = _.intersection.apply(null, value);
					});

					// set all options to disabled/enabled
					$.each(
						enabled,
						function (prop, value) {
							var catID = parseInt(prop.replace('cat', ''), 10),
								$select = $context.find('.finder-category-' + catID);

							// go through all options
							$select.find('option')
								.prop('disabled', false)
								.show()
								.each(
								function () {
									var $option = $(this),
										$parentSelect = $(this).parent(),
										optionValue = parseInt($option.attr('value'), 10);

									if ($.inArray(optionValue, value) < 0) {
										if ($option.prop('selected')) {
											$option.prop('selected', false)
												.parent().find('option').eq(0).prop('selected', true)
												.end().closest('div').removeClass('active');
											//console.log($(this).parent().next('span').data());
											$parentSelect.next('span').text($parentSelect.next('span').data('text'));
											//todo if cat === 0 set span text
										}
										$option.prop('disabled', true).hide();
									}
								}
							);
						}
					);

					//if(parseInt($this[0].value, 0) === 0) {
					$this.next('span').text(filterSubText);
					$this.closest('div').addClass('active');
					//} else {
					//$this.next('span').text('');
					//}
				};

				/** Initializes functionality of the finder
				 *
				 * @private
				 */
				prv.initFinder = function () {
					var $finder = $(this),
						$catSelects = $finder.find('select');

					$catSelects.each(function () {
						var $this = $(this);

						prv.getData.call($this);
						$this.on('change', prv.checkExcludes);
					});
				};

				/** Resets a filter
				 *
				 * @private
				 * @param {Object} event
				 */
				prv.resetFinder = function (event, resetUrl, $context) {
					event.preventDefault();

					// reset form
					$context[0].reset();
					// find active filters
					$context.find('.active').removeClass('active');
					// enabled all options
					$context.find('option').prop('disabled', false).show();
					// set all select to their default state
					$context.find('select').each(function () {
						var $this = $(this);

						$this.find('option[value="0"]').prop('selected', true);
						$this.next('span').text($this.next('span').data('text'));
						//$this.find('option[value="' + $this.data('cat') + '"]').prop('selected', true);
					});

					if (resetUrl) {
						$.ajax({
							url: resetUrl,
							method: 'GET',
							dataType: 'json'
						});
					}
				};

				/**
				 *
				 * @public
				 * @constructor
				 * @param {Object} $finder - Main parent of each finder
				 */
				self.init = function ($finder) {
					if (!$finder.length) {
						return;
					}

					prv.initFinder.call($finder);
					// fixme: too ungeneric
					var $reset = $finder.find('.tx-frontendlist-pi-searchbox-reset'),
						$context = $reset.closest('form'),
						resetUrl = $reset.data('resetUrl');

					$reset.on('click', function(event) { return prv.resetFinder(event, resetUrl, $context); });
				};

				return self;
			}();

			/**
			 * @func tabsFinder
			 * @desc tabs function
			 *
			 * todo load finder form via ajax
			 */
			Brandung.Functions.tabsFinder = function () {
				var $finder = $('.mod-finder'),
					$btn = $finder.find(' > ul li a'),
					$tabs = $finder.find('.finder-tab'),
					resizeHandler = function () {
						if(window.innerWidth < 768) {
							if(!$finder.hasClass('on-is-mobile')) {
								$btn.each(function () {
									var $this = $(this),
										// if an absolute url is inserted here: cut it off
										$tab = $finder.find(('' + $this.attr('href').replace(/^.*#/,'#'))).detach();
									$this.parent().after($tab);
								});

								$finder.addClass('on-is-mobile');
							}
						} else {
							if($finder.hasClass('on-is-mobile')) {
								$btn.each(function () {
									var $this = $(this),
										// if an absolute url is inserted here: cut it off
										$tab = $finder.find(('' + $this.attr('href').replace(/^.*#/,'#'))).detach();

									$this.closest('ul').after($tab);
								});

								$finder.removeClass('on-is-mobile');
							}
						}
					},
					clickHandler = function (e) {
						var $that = $(this),
						// A21 Bugfix: this only works with relative anchors,
						// but since we have a baseurl,
						// an absolute url is inserted here: cut it off
							idTabs = ('' + $that.attr('href')).replace(/^.*#/,'#'),
							$currentTab = $(idTabs),
							$loading = $currentTab.find('.mod-loading');

						e.preventDefault();

						if (!$(idTabs).hasClass('active')) {
							$tabs.slideUp().removeClass('active');
							$btn.removeClass('active');
							$that.addClass('active');
							$currentTab.slideDown().addClass('active');
						} else {
							$that.removeClass('active');
							$tabs.slideUp().removeClass('active');
						}

						if($loading.length) {
							if(!$loading.hasClass('is-loading')) {
								$loading.addClass('is-loading');
								// RV this seems legit but does not work in IE8
								// alert(('' + $that.data('url')).replace(/&amp;/g, '&').replace(/&quot;/g, '"'));
								$.get(('' + $that.data('url')).replace(/&amp;/g, '&').replace(/&quot;/g, '"'), function (data) {
									$.when($loading.replaceWith(data)).then(function () {
										Brandung.Functions.finder.init($currentTab.find('form'));
									});
								});
							}
						}
					},
					formHandler = function() {
						var $loading = $finder.find('.mod-loading'),
							url = $finder.data('url');
						if(url && $loading.length && !$loading.hasClass('is-loading')) {
							$loading.addClass('is-loading');
							// RV this seems legit but does not work in IE8
							// alert(('' + url).replace(/&amp;/g, '&').replace(/&quot;/g, '"'));
							$.get(('' + url).replace(/&amp;/g, '&').replace(/&quot;/g, '"'), function (data) {
								$.when($loading.replaceWith(data)).then(function () {
									Brandung.Functions.finder.init($finder.find('form'));
								});
							});
						}
					};

				$btn.on('click', clickHandler);
				$(window).smartresize(resizeHandler);
				resizeHandler();
				formHandler();
			};

			/**
			 * @func displayFilter
			 * @desc google search filter display
			 **/
			/*
			Brandung.Functions.displayFilter = function () {
				var $element = $('.linkAdvancedBlock');

				$element.on('click', function () {
					$(this).toggleClass('active').parent().next().slideToggle();
				});
			};
			*/

			/**
			 * @func resetSelect
			 * @desc Reset select element
			 */
			Brandung.Functions.resetSelect = function () {
				var $resetBtn = $('.btn-set a');

				$resetBtn.on('click', function (e) {
					var $that = $(this);
					// RV NO - we want the reset link to be submitted
					// e.preventDefault();
					$that.parent().prev().find('select').prop('selectedIndex', 0);
					$that.parent().prev().find('input').val('');
				});
			};

			/**
			 * @func toggleFields
			 * @desc toggle fields in contact form
			 * @param obj
			 */
			Brandung.Functions.toggleFields = function (obj) {
				if (!obj.length) {
					return;
				}

				var trigger = $('#tx_a21contactform_concern'),
					target = obj.find('.foldit');

				//init
				target.hide();

				if ( trigger.val() == "Medizinisches") {
					obj.find(target).show();
				} else {
					obj.find(target).hide();
				}

				$(trigger).change(function(){
					if ( $(this).val() == "Medizinisches") {
						obj.find(target).show();
					} else {
						obj.find(target).hide();
					}
				});
			};

            /**
             * @func micrositeHeaderFix
             */
            Brandung.Functions.micrositeHeaderFix = function () {
                var $sitename = $('header .sitename'),
                    $navToggle = $('header .nav-toggle'),
                    $firstElementInMain = $('main').children().first(),
                    checkHeaderHeight = function (){
                        if($navToggle.is(':visible')){
                            $firstElementInMain.css('margin-top',$sitename.outerHeight()+'px');
                        }else{
                            $firstElementInMain.removeAttr('style');
                        }
                    };

                if ($('html.microsite').length > 0) {
                    $(window).resize(checkHeaderHeight);
                    $(document).on('brandung.document.ready', checkHeaderHeight);
                }
            };

            /**
             * @func accordion
             */
            Brandung.Functions.accordion = function () {
                $('.accordion-item').each(function(){
                    var $accordionItem = jQuery(this),
                        $contentWrap = $accordionItem.find('.content-wrap'),
                        $accordionHeadline = $accordionItem.find('.content-wrap > h1, .content-wrap > h2, .content-wrap > h3, .content-wrap > h4, .content-wrap > h5, .content-wrap > h6'),
                        $accordionContent = $('<div class="accordion-content"></div>'),
                        $innerWrap = $('<div class="inner-wrap"></div>'),

                        wrapContent = function(){
                            $accordionContent.appendTo($contentWrap);
                            $innerWrap.appendTo($accordionContent);
                            $contentWrap.children().not('h1,h2,h3,h4,h5,h6,.accordion-content').appendTo($innerWrap);
                        }();

                    $accordionHeadline.on('click',function(){
                        if($accordionItem.hasClass('open')){
                            $accordionContent.css('height',$innerWrap.height()+'px');
                            setTimeout(function(){
                                $accordionContent.removeClass('block-transitions');
                                $accordionHeadline.removeClass('close');
                                $accordionContent.css({'height':'0px', 'margin-bottom':'0'}).onCSSTransitionEnd(function(){
                                    $accordionContent.addClass('block-transitions'); // fix for ios transition-handling
                                    $accordionItem.removeClass('open');
                                    $accordionContent.removeAttr('style');
                                });
                            },50);
                        }else{
                            $accordionContent.removeClass('block-transitions');
                            $accordionHeadline.addClass('close');
                            $accordionContent.css({'height':$innerWrap.height()+'px','margin-bottom':'1rem'}).onCSSTransitionEnd(function(){
                                $accordionContent.addClass('block-transitions');
                                $accordionItem.addClass('open');
                                $accordionContent.removeAttr('style');
                            });
                        }
                    });
                });
            };

			// snippets placeholer
			// --- start|bra-pb: js ---
// --- end|bra-pb: js ---

			/**
			 #####################################
			 #                                   #
			 #         document ready            #
			 #                                   #
			 #####################################
			 */
			$(function () {
				// init objects
				Brandung.Mobile.init();
				Brandung.Plugins.init();
				Brandung.Functions.init();
				Brandung.Helpers.init();

				$(document).trigger('brandung.document.ready');

				//DEVELOPMENT SCRIPT:START
				///////////////////////////////////////////////////////////
				//	This script imitates the required body classes needed for the websites style-feature:
				//
				//	it adds classes to the body-tag, depending on the section you are supposed to be in
				//	by just clicking the navigation-item
				//
				//	obviously it disables the default-behavior from the link
				//
				///////////////////////////////////////////////////////////
				/*$('header nav > ul > li > a').on('click', function(event){
				 event.preventDefault();

				 var $body = $('body');

				 $body.attr('class', '');
				 if($.cookie('contrast-activated') == 1 ) {
				 $body.addClass('color-pattern-8');
				 }
				 $body.toggleClass($(this).parent('li').attr('class'));
				 });*/
				///////////////////////////////////////////////////////////
				//DEVELOPMENT SCRIPT:END

			});
		}, Brandung.errorHandler);
	})(jQuery);
}, Brandung.errorHandler);