!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,d=c||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,v=Math.min,b=function(){return d.Date.now()};function p(e,t,n){var o,i,u,a,f,c,l=0,d=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError(r);function S(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function j(e){return l=e,f=setTimeout(T,t),d?S(e):a}function O(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function T(){var e=b();if(O(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-c);return s?v(n,u-(e-l)):n}(e))}function h(e){return f=void 0,p&&o?S(e):(o=i=void 0,a)}function x(){var e=b(),n=O(e);if(o=arguments,i=this,c=e,n){if(void 0===f)return j(c);if(s)return f=setTimeout(T,t),S(c)}return void 0===f&&(f=setTimeout(T,t)),a}return t=g(t)||0,y(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(g(n.maxWait)||0,t):u,p="trailing"in n?!!n.trailing:p),x.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=c=i=f=void 0},x.flush=function(){return void 0===f?a:h(b())},x}function y(e){var r=void 0===e?"undefined":t(n)(e);return!!e&&("object"==r||"function"==r)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(y(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=y(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var c=u.test(e);return c||a.test(e)?f(e.slice(2),c?2:8):i.test(e)?NaN:+e}var S={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),input:document.querySelector(".feedback-form input")};S.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(O),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),S.form.addEventListener("input",(function(e){(O=JSON.parse(localStorage.getItem("feedback-form-state"))||{})[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(O))}));var j,O={};(j=JSON.parse(localStorage.getItem("feedback-form-state")))&&(S.input.value=j.email||"",S.textarea.value=j.message||"")}();
//# sourceMappingURL=03-feedback.facd5a68.js.map
