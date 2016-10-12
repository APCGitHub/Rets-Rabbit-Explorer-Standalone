/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ca(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Fa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ba.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Oa(a,b,c||(g?"border":"content"),d,f)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),
void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b)}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});

/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.6",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.6",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.6",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.6",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.6",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.6",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");
d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.6",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.RetsRabbit=e():t.RetsRabbit=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){var r=n(1),i=n(15);i(r.prototype,{post:n(8),get:n(14),auth:n(13),storage:n(2)}),r.utils={extend:i,domready:n(9)},r.loaded&&setTimeout(function(){r.utils.domready(function(){r.emit("ready")})},0),t.exports=r},function(t,e,n){function r(t){this.configure(t)}var i=n(3);r.debug=!0,r.loaded=!0,i(r),i(r.prototype),r.prototype.configure=function(t){var e=t||{};this.config={clientId:e.client_id||"retsrabbit",clientSecret:e.client_secret||"retsrabbit",host:e.host||"https",url:e.url||"stage.retsrabbit.com/api",storageKey:e.token_key||"access_token"},r.debug&&this.on("error",r.log),this.emit("ready")},r.prototype.clientId=function(t){return arguments.length?(this.config.clientId=t?String(t):null,this):this.config.clientId},r.prototype.clientSecret=function(t){return arguments.length?(this.config.clientSecret=t?String(t):null,this):this.config.clientSecret},r.prototype.host=function(t){return arguments.length?(this.config.host=t?String(t):null,this):this.config.host},r.prototype.url=function(t){return arguments.length?(this.config.url=t?String(t):null,this):this.config.url},r.prototype.storageKey=function(t){return arguments.length?(this.config.storageKey=t?String(t):null,this):this.config.storageKey},r.log=function(t){r.debug&&window.console&&console.log("[Rets Rabbit] "+t)},r.ready=function(t){r.loaded?t():r.once("ready",t)},t.exports=r},function(t,e,n){var r=null,i=n(1);void 0!==typeof Storage&&(r=window.localStorage),t.exports={getToken:function(t){return null==r?void i.log("Local Storage is not supported by your browser"):(arguments.length||(t=this.config.storageKey),r.getItem(t))},setToken:function(t,e){return null==r?void i.log("Local Storage is not supported by your browser"):arguments.length<2?(i.log("You need to supply both the key and token"),this):(null==t&&(t=this.config.storageKey),void r.setItem(t,e))}}},function(t,e,n){function r(t){if(t)return i(t)}function i(t){for(var e in r.prototype)t[e]=r.prototype[e];return t}t.exports=r,r.prototype.on=r.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},r.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var r,i=0;i<n.length;i++)if(r=n[i],r===e||r.fn===e){n.splice(i,1);break}return this},r.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks["$"+t];if(n){n=n.slice(0);for(var r=0,i=n.length;r<i;++r)n[r].apply(this,e)}return this},r.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},r.prototype.hasListeners=function(t){return!!this.listeners(t).length}},function(t,e,n){function r(){}function i(t){if(!b(t))return t;var e=[];for(var n in t)null!=t[n]&&o(e,n,t[n]);return e.join("&")}function o(t,e,n){if(Array.isArray(n))return n.forEach(function(n){o(t,e,n)});if(b(n))for(var r in n)o(t,e+"["+r+"]",n[r]);else t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))}function s(t){for(var e,n,r={},i=t.split("&"),o=0,s=i.length;o<s;++o)e=i[o],n=e.indexOf("="),n==-1?r[decodeURIComponent(e)]="":r[decodeURIComponent(e.slice(0,n))]=decodeURIComponent(e.slice(n+1));return r}function a(t){var e,n,r,i,o=t.split(/\r?\n/),s={};o.pop();for(var a=0,u=o.length;a<u;++a)n=o[a],e=n.indexOf(":"),r=n.slice(0,e).toLowerCase(),i=v(n.slice(e+1)),s[r]=i;return s}function u(t){return/[\/+]json\b/.test(t)}function c(t){return t.split(/ *; */).shift()}function h(t){return g(t.split(/ *; */),function(t,e){var n=e.split(/ *= */),r=n.shift(),i=n.shift();return r&&i&&(t[r]=i),t},{})}function l(t,e){e=e||{},this.req=t,this.xhr=this.req.xhr,this.text="HEAD"!=this.req.method&&(""===this.xhr.responseType||"text"===this.xhr.responseType)||"undefined"==typeof this.xhr.responseType?this.xhr.responseText:null,this.statusText=this.req.xhr.statusText,this._setStatusProperties(this.xhr.status),this.header=this.headers=a(this.xhr.getAllResponseHeaders()),this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this._setHeaderProperties(this.header),this.body="HEAD"!=this.req.method?this._parseBody(this.text?this.text:this.xhr.response):null}function p(t,e){var n=this;this._query=this._query||[],this.method=t,this.url=e,this.header={},this._header={},this.on("end",function(){var t=null,e=null;try{e=new l(n)}catch(r){return t=new Error("Parser is unable to parse the response"),t.parse=!0,t.original=r,t.rawResponse=n.xhr&&n.xhr.responseText?n.xhr.responseText:null,t.statusCode=n.xhr&&n.xhr.status?n.xhr.status:null,n.callback(t)}if(n.emit("response",e),t)return n.callback(t,e);try{if(e.status>=200&&e.status<300)return n.callback(t,e);var i=new Error(e.statusText||"Unsuccessful HTTP response");i.original=t,i.response=e,i.status=e.status,n.callback(i,e)}catch(r){n.callback(r)}})}function f(t,e){var n=_("DELETE",t);return e&&n.end(e),n}var d,y=n(3),g=n(10),m=n(11),b=n(5);d="undefined"!=typeof window?window:"undefined"!=typeof self?self:this;var _=t.exports=n(12).bind(null,p);_.getXHR=function(){if(!(!d.XMLHttpRequest||d.location&&"file:"==d.location.protocol&&d.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){}return!1};var v="".trim?function(t){return t.trim()}:function(t){return t.replace(/(^\s*|\s*$)/g,"")};_.serializeObject=i,_.parseString=s,_.types={html:"text/html",json:"application/json",xml:"application/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},_.serialize={"application/x-www-form-urlencoded":i,"application/json":JSON.stringify},_.parse={"application/x-www-form-urlencoded":s,"application/json":JSON.parse},l.prototype.get=function(t){return this.header[t.toLowerCase()]},l.prototype._setHeaderProperties=function(t){var e=this.header["content-type"]||"";this.type=c(e);var n=h(e);for(var r in n)this[r]=n[r]},l.prototype._parseBody=function(t){var e=_.parse[this.type];return!e&&u(this.type)&&(e=_.parse["application/json"]),e&&t&&(t.length||t instanceof Object)?e(t):null},l.prototype._setStatusProperties=function(t){1223===t&&(t=204);var e=t/100|0;this.status=this.statusCode=t,this.statusType=e,this.info=1==e,this.ok=2==e,this.clientError=4==e,this.serverError=5==e,this.error=(4==e||5==e)&&this.toError(),this.accepted=202==t,this.noContent=204==t,this.badRequest=400==t,this.unauthorized=401==t,this.notAcceptable=406==t,this.notFound=404==t,this.forbidden=403==t},l.prototype.toError=function(){var t=this.req,e=t.method,n=t.url,r="cannot "+e+" "+n+" ("+this.status+")",i=new Error(r);return i.status=this.status,i.method=e,i.url=n,i},_.Response=l,y(p.prototype);for(var x in m)p.prototype[x]=m[x];p.prototype.type=function(t){return this.set("Content-Type",_.types[t]||t),this},p.prototype.responseType=function(t){return this._responseType=t,this},p.prototype.accept=function(t){return this.set("Accept",_.types[t]||t),this},p.prototype.auth=function(t,e,n){switch(n||(n={type:"basic"}),n.type){case"basic":var r=btoa(t+":"+e);this.set("Authorization","Basic "+r);break;case"auto":this.username=t,this.password=e}return this},p.prototype.query=function(t){return"string"!=typeof t&&(t=i(t)),t&&this._query.push(t),this},p.prototype.attach=function(t,e,n){return this._getFormData().append(t,e,n||e.name),this},p.prototype._getFormData=function(){return this._formData||(this._formData=new d.FormData),this._formData},p.prototype.callback=function(t,e){var n=this._callback;this.clearTimeout(),n(t,e)},p.prototype.crossDomainError=function(){var t=new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");t.crossDomain=!0,t.status=this.status,t.method=this.method,t.url=this.url,this.callback(t)},p.prototype._timeoutError=function(){var t=this._timeout,e=new Error("timeout of "+t+"ms exceeded");e.timeout=t,this.callback(e)},p.prototype._appendQueryString=function(){var t=this._query.join("&");t&&(this.url+=~this.url.indexOf("?")?"&"+t:"?"+t)},p.prototype.end=function(t){var e=this,n=this.xhr=_.getXHR(),i=this._timeout,o=this._formData||this._data;this._callback=t||r,n.onreadystatechange=function(){if(4==n.readyState){var t;try{t=n.status}catch(r){t=0}if(0==t){if(e.timedout)return e._timeoutError();if(e._aborted)return;return e.crossDomainError()}e.emit("end")}};var s=function(t){t.total>0&&(t.percent=t.loaded/t.total*100),t.direction="download",e.emit("progress",t)};this.hasListeners("progress")&&(n.onprogress=s);try{n.upload&&this.hasListeners("progress")&&(n.upload.onprogress=s)}catch(a){}if(i&&!this._timer&&(this._timer=setTimeout(function(){e.timedout=!0,e.abort()},i)),this._appendQueryString(),this.username&&this.password?n.open(this.method,this.url,!0,this.username,this.password):n.open(this.method,this.url,!0),this._withCredentials&&(n.withCredentials=!0),"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof o&&!this._isHost(o)){var c=this._header["content-type"],h=this._serializer||_.serialize[c?c.split(";")[0]:""];!h&&u(c)&&(h=_.serialize["application/json"]),h&&(o=h(o))}for(var l in this.header)null!=this.header[l]&&n.setRequestHeader(l,this.header[l]);return this._responseType&&(n.responseType=this._responseType),this.emit("request",this),n.send("undefined"!=typeof o?o:null),this},_.Request=p,_.get=function(t,e,n){var r=_("GET",t);return"function"==typeof e&&(n=e,e=null),e&&r.query(e),n&&r.end(n),r},_.head=function(t,e,n){var r=_("HEAD",t);return"function"==typeof e&&(n=e,e=null),e&&r.send(e),n&&r.end(n),r},_.options=function(t,e,n){var r=_("OPTIONS",t);return"function"==typeof e&&(n=e,e=null),e&&r.send(e),n&&r.end(n),r},_.del=f,_["delete"]=f,_.patch=function(t,e,n){var r=_("PATCH",t);return"function"==typeof e&&(n=e,e=null),e&&r.send(e),n&&r.end(n),r},_.post=function(t,e,n){var r=_("POST",t);return"function"==typeof e&&(n=e,e=null),e&&r.send(e),n&&r.end(n),r},_.put=function(t,e,n){var r=_("PUT",t);return"function"==typeof e&&(n=e,e=null),e&&r.send(e),n&&r.end(n),r}},function(t,e){function n(t){return null!==t&&"object"==typeof t}t.exports=n},function(t,e){t.exports=function(t,e,n){var r=t+"://";return r+=e,"/"===r.substr(r.length-1)&&(r=r.slice(0,-1)),"/"!==n.substr(n.length-1)&&(n+="/"),r+=n,"/"===r.substr(r.length-1)&&(r=r.slice(0,-1)),r}},function(t,e){t.exports=function(t,e,n){var r=n||function(){};if(e&&!e.ok){var i=e.body&&e.body.error_code;t=new Error(i?e.body.message:"Unknown error occurred"),t.code=i?e.body.error_code:"UnknownError"}t?r(t,null):r(null,e.body)}},function(t,e,n){var r=n(4),i=n(7);t.exports=function(t,e,n,o){var s=r.post(t).send(e||{});n&&s.set("Authorization","Bearer "+n),s.end(function(t,e){i(t,e,o),o=null})}},function(t,e,n){/*!
	  * domready (c) Dustin Diaz 2014 - License MIT
	  */
!function(e,n){t.exports=n()}("domready",function(){var t,e=[],n=document,r=n.documentElement.doScroll,i="DOMContentLoaded",o=(r?/^loaded|^c/:/^loaded|^i|^c/).test(n.readyState);return o||n.addEventListener(i,t=function(){for(n.removeEventListener(i,t),o=1;t=e.shift();)t()}),function(t){o?setTimeout(t,0):e.push(t)}})},function(t,e){t.exports=function(t,e,n){for(var r=0,i=t.length,o=3==arguments.length?n:t[r++];r<i;)o=e.call(null,o,t[r],++r,t);return o}},function(t,e,n){var r=n(5);e.clearTimeout=function(){return this._timeout=0,clearTimeout(this._timer),this},e.parse=function(t){return this._parser=t,this},e.serialize=function(t){return this._serializer=t,this},e.timeout=function(t){return this._timeout=t,this},e.then=function(t,e){if(!this._fullfilledPromise){var n=this;this._fullfilledPromise=new Promise(function(t,e){n.end(function(n,r){n?e(n):t(r)})})}return this._fullfilledPromise.then(t,e)},e.use=function(t){return t(this),this},e.get=function(t){return this._header[t.toLowerCase()]},e.getHeader=e.get,e.set=function(t,e){if(r(t)){for(var n in t)this.set(n,t[n]);return this}return this._header[t.toLowerCase()]=e,this.header[t]=e,this},e.unset=function(t){return delete this._header[t.toLowerCase()],delete this.header[t],this},e.field=function(t,e){return this._getFormData().append(t,e),this},e.abort=function(){return this._aborted?this:(this._aborted=!0,this.xhr&&this.xhr.abort(),this.req&&this.req.abort(),this.clearTimeout(),this.emit("abort"),this)},e.withCredentials=function(){return this._withCredentials=!0,this},e.redirects=function(t){return this._maxRedirects=t,this},e.toJSON=function(){return{method:this.method,url:this.url,data:this._data}},e._isHost=function(t){var e={}.toString.call(t);switch(e){case"[object File]":case"[object Blob]":case"[object FormData]":return!0;default:return!1}},e.send=function(t){var e=r(t),n=this._header["content-type"];if(e&&r(this._data))for(var i in t)this._data[i]=t[i];else"string"==typeof t?(n||this.type("form"),n=this._header["content-type"],"application/x-www-form-urlencoded"==n?this._data=this._data?this._data+"&"+t:t:this._data=(this._data||"")+t):this._data=t;return!e||this._isHost(t)?this:(n||this.type("json"),this)}},function(t,e){function n(t,e,n){return"function"==typeof n?new t("GET",e).end(n):2==arguments.length?new t("GET",e):new t(e,n)}t.exports=n},function(t,e,n){var r=n(8),i=n(6),o=n(2);t.exports=function(t){var e={grant_type:"client_credentials",client_id:this.config.clientId,client_secret:this.config.clientSecret},n=this.config.storageKey,s=i(this.config.host,this.config.url,"/oauth/access_token");r(s,e,null,function(e,r){if(e)t(e,null);else{var i=r.access_token;o.setToken(n,i),t(null,r)}})}},function(t,e,n){var r=n(4),i=n(7),o=n(6),s=n(2),a=n(1);t.exports=function(t,e,n,u){var c,h,l,p;return arguments.length<4?void a.log("Not enough arguments supplied to the method get()"):(c=null==n||"string"!=typeof n?s.getToken(this.config.storageKey):n,h=e||{},l=o(this.config.host,this.config.url,t),p=r.get(l),p.set("Authorization","Bearer "+c),"{}"!==JSON.stringify(h)&&p.query(h),void p.end(function(t,e){i(t,e,u),u=null}))}},function(t,e){t.exports=function(t){for(var e=1;e<arguments.length;e++)for(var n in arguments[e])t[n]=arguments[e][n];return t}}])});
//# sourceMappingURL=rets_rabbit.umd.min.js.map
/*
 AngularJS v1.5.7
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(E){'use strict';function O(a){return function(){var b=arguments[0],d;d="["+(a?a+":":"")+b+"] http://errors.angularjs.org/1.5.7/"+(a?a+"/":"")+b;for(b=1;b<arguments.length;b++){d=d+(1==b?"?":"&")+"p"+(b-1)+"=";var c=encodeURIComponent,e;e=arguments[b];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;d+=c(e)}return Error(d)}}function oa(a){if(null==a||Wa(a))return!1;if(J(a)||F(a)||B&&a instanceof B)return!0;
var b="length"in Object(a)&&a.length;return S(b)&&(0<=b&&(b-1 in a||a instanceof Array)||"function"==typeof a.item)}function r(a,b,d){var c,e;if(a)if(z(a))for(c in a)"prototype"==c||"length"==c||"name"==c||a.hasOwnProperty&&!a.hasOwnProperty(c)||b.call(d,a[c],c,a);else if(J(a)||oa(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==r)a.forEach(b,d,a);else if(sc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&
b.call(d,a[c],c,a);else for(c in a)sa.call(a,c)&&b.call(d,a[c],c,a);return a}function tc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function uc(a){return function(b,d){a(d,b)}}function Zd(){return++pb}function Pb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];if(H(g)||z(g))for(var h=Object.keys(g),k=0,l=h.length;k<l;k++){var m=h[k],n=g[m];d&&H(n)?ia(n)?a[m]=new Date(n.valueOf()):Xa(n)?a[m]=new RegExp(n):n.nodeName?a[m]=n.cloneNode(!0):
Qb(n)?a[m]=n.clone():(H(a[m])||(a[m]=J(n)?[]:{}),Pb(a[m],[n],!0)):a[m]=n}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function R(a){return Pb(a,ta.call(arguments,1),!1)}function $d(a){return Pb(a,ta.call(arguments,1),!0)}function aa(a){return parseInt(a,10)}function Rb(a,b){return R(Object.create(a),b)}function A(){}function Ya(a){return a}function da(a){return function(){return a}}function vc(a){return z(a.toString)&&a.toString!==ka}function w(a){return"undefined"===typeof a}function x(a){return"undefined"!==
typeof a}function H(a){return null!==a&&"object"===typeof a}function sc(a){return null!==a&&"object"===typeof a&&!wc(a)}function F(a){return"string"===typeof a}function S(a){return"number"===typeof a}function ia(a){return"[object Date]"===ka.call(a)}function z(a){return"function"===typeof a}function Xa(a){return"[object RegExp]"===ka.call(a)}function Wa(a){return a&&a.window===a}function Za(a){return a&&a.$evalAsync&&a.$watch}function Ea(a){return"boolean"===typeof a}function ae(a){return a&&S(a.length)&&
be.test(ka.call(a))}function Qb(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function ce(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function ua(a){return M(a.nodeName||a[0]&&a[0].nodeName)}function $a(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function Z(a,b){function d(a,b){var d=b.$$hashKey,e;if(J(a)){e=0;for(var f=a.length;e<f;e++)b.push(c(a[e]))}else if(sc(a))for(e in a)b[e]=c(a[e]);else if(a&&"function"===typeof a.hasOwnProperty)for(e in a)a.hasOwnProperty(e)&&
(b[e]=c(a[e]));else for(e in a)sa.call(a,e)&&(b[e]=c(a[e]));d?b.$$hashKey=d:delete b.$$hashKey;return b}function c(a){if(!H(a))return a;var b=f.indexOf(a);if(-1!==b)return g[b];if(Wa(a)||Za(a))throw za("cpws");var b=!1,c=e(a);void 0===c&&(c=J(a)?[]:Object.create(wc(a)),b=!0);f.push(a);g.push(c);return b?d(a,c):c}function e(a){switch(ka.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(c(a.buffer));
case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^\/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(z(a.cloneNode))return a.cloneNode(!0)}var f=[],
g=[];if(b){if(ae(b)||"[object ArrayBuffer]"===ka.call(b))throw za("cpta");if(a===b)throw za("cpi");J(b)?b.length=0:r(b,function(a,d){"$$hashKey"!==d&&delete b[d]});f.push(a);g.push(b);return d(a,b)}return c(a)}function na(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d==typeof b&&"object"==d)if(J(a)){if(!J(b))return!1;if((d=a.length)==b.length){for(c=0;c<d;c++)if(!na(a[c],b[c]))return!1;return!0}}else{if(ia(a))return ia(b)?na(a.getTime(),b.getTime()):
!1;if(Xa(a))return Xa(b)?a.toString()==b.toString():!1;if(Za(a)||Za(b)||Wa(a)||Wa(b)||J(b)||ia(b)||Xa(b))return!1;d=T();for(c in a)if("$"!==c.charAt(0)&&!z(a[c])){if(!na(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&x(b[c])&&!z(b[c]))return!1;return!0}return!1}function ab(a,b,d){return a.concat(ta.call(b,d))}function bb(a,b){var d=2<arguments.length?ta.call(arguments,2):[];return!z(b)||b instanceof RegExp?b:d.length?function(){return arguments.length?b.apply(a,ab(d,arguments,
0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function de(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:Wa(b)?d="$WINDOW":b&&E.document===b?d="$DOCUMENT":Za(b)&&(d="$SCOPE");return d}function cb(a,b){if(!w(a))return S(b)||(b=b?2:null),JSON.stringify(a,de,b)}function xc(a){return F(a)?JSON.parse(a):a}function yc(a,b){a=a.replace(ee,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+a)/6E4;return isNaN(d)?b:d}function Sb(a,b,d){d=d?
-1:1;var c=a.getTimezoneOffset();b=yc(b,c);d*=b-c;a=new Date(a.getTime());a.setMinutes(a.getMinutes()+d);return a}function va(a){a=B(a).clone();try{a.empty()}catch(b){}var d=B("<div>").append(a).html();try{return a[0].nodeType===Na?M(d):d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+M(b)})}catch(c){return M(d)}}function zc(a){try{return decodeURIComponent(a)}catch(b){}}function Ac(a){var b={};r((a||"").split("&"),function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),c=a.indexOf("="),
-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=zc(e),x(e)&&(f=x(f)?zc(f):!0,sa.call(b,e)?J(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function Tb(a){var b=[];r(a,function(a,c){J(a)?r(a,function(a){b.push(ja(c,!0)+(!0===a?"":"="+ja(a,!0)))}):b.push(ja(c,!0)+(!0===a?"":"="+ja(a,!0)))});return b.length?b.join("&"):""}function qb(a){return ja(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ja(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,
":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function fe(a,b){var d,c,e=Oa.length;for(c=0;c<e;++c)if(d=Oa[c]+b,F(d=a.getAttribute(d)))return d;return null}function ge(a,b){var d,c,e={};r(Oa,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});r(Oa,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=e,c=e.getAttribute(b))});d&&(e.strictDi=null!==fe(d,"strict-di"),b(d,c?[c]:[],e))}function Bc(a,
b,d){H(d)||(d={});d=R({strictDi:!1},d);var c=function(){a=B(a);if(a.injector()){var c=a[0]===E.document?"document":va(a);throw za("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);b.unshift("ng");c=db(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,d,c){a.$apply(function(){b.data("$injector",c);d(b)(a)})}]);
return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;E&&e.test(E.name)&&(d.debugInfoEnabled=!0,E.name=E.name.replace(e,""));if(E&&!f.test(E.name))return c();E.name=E.name.replace(f,"");ea.resumeBootstrap=function(a){r(a,function(a){b.push(a)});return c()};z(ea.resumeDeferredBootstrap)&&ea.resumeDeferredBootstrap()}function he(){E.name="NG_ENABLE_DEBUG_INFO!"+E.name;E.location.reload()}function ie(a){a=ea.element(a).injector();if(!a)throw za("test");return a.get("$$testability")}function Cc(a,
b){b=b||"_";return a.replace(je,function(a,c){return(c?b:"")+a.toLowerCase()})}function ke(){var a;if(!Dc){var b=rb();(pa=w(b)?E.jQuery:b?E[b]:void 0)&&pa.fn.on?(B=pa,R(pa.fn,{scope:Pa.scope,isolateScope:Pa.isolateScope,controller:Pa.controller,injector:Pa.injector,inheritedData:Pa.inheritedData}),a=pa.cleanData,pa.cleanData=function(b){for(var c,e=0,f;null!=(f=b[e]);e++)(c=pa._data(f,"events"))&&c.$destroy&&pa(f).triggerHandler("$destroy");a(b)}):B=U;ea.element=B;Dc=!0}}function sb(a,b,d){if(!a)throw za("areq",
b||"?",d||"required");return a}function Qa(a,b,d){d&&J(a)&&(a=a[a.length-1]);sb(z(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Ra(a,b){if("hasOwnProperty"===a)throw za("badname",b);}function Ec(a,b,d){if(!b)return a;b=b.split(".");for(var c,e=a,f=b.length,g=0;g<f;g++)c=b[g],a&&(a=(e=a)[c]);return!d&&z(a)?bb(e,a):a}function tb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==b)c||(c=B(ta.call(a,0,e))),
c.push(b);return c||a}function T(){return Object.create(null)}function le(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=O("$injector"),c=O("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||O;return b(a,"module",function(){var a={};return function(f,g,h){if("hasOwnProperty"===f)throw c("badname","module");g&&a.hasOwnProperty(f)&&(a[f]=null);return b(a,f,function(){function a(b,d,e,f){f||(f=c);return function(){f[e||"push"]([b,d,arguments]);return V}}function b(a,d){return function(b,e){e&&
z(e)&&(e.$$moduleName=f);c.push([a,d,arguments]);return V}}if(!g)throw d("nomod",f);var c=[],e=[],p=[],s=a("$injector","invoke","push",e),V={_invokeQueue:c,_configBlocks:e,_runBlocks:p,requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider",
"register"),directive:b("$compileProvider","directive"),component:b("$compileProvider","component"),config:s,run:function(a){p.push(a);return this}};h&&s(h);return V})}})}function ga(a,b){if(J(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(H(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function me(a){R(a,{bootstrap:Bc,copy:Z,extend:R,merge:$d,equals:na,element:B,forEach:r,injector:db,noop:A,bind:bb,toJson:cb,fromJson:xc,identity:Ya,isUndefined:w,
isDefined:x,isString:F,isFunction:z,isObject:H,isNumber:S,isElement:Qb,isArray:J,version:ne,isDate:ia,lowercase:M,uppercase:ub,callbacks:{counter:0},getTestability:ie,$$minErr:O,$$csp:Fa,reloadWithDebugInfo:he});Ub=le(E);Ub("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:oe});a.provider("$compile",Fc).directive({a:pe,input:Gc,textarea:Gc,form:qe,script:re,select:se,style:te,option:ue,ngBind:ve,ngBindHtml:we,ngBindTemplate:xe,ngClass:ye,ngClassEven:ze,ngClassOdd:Ae,ngCloak:Be,ngController:Ce,
ngForm:De,ngHide:Ee,ngIf:Fe,ngInclude:Ge,ngInit:He,ngNonBindable:Ie,ngPluralize:Je,ngRepeat:Ke,ngShow:Le,ngStyle:Me,ngSwitch:Ne,ngSwitchWhen:Oe,ngSwitchDefault:Pe,ngOptions:Qe,ngTransclude:Re,ngModel:Se,ngList:Te,ngChange:Ue,pattern:Hc,ngPattern:Hc,required:Ic,ngRequired:Ic,minlength:Jc,ngMinlength:Jc,maxlength:Kc,ngMaxlength:Kc,ngValue:Ve,ngModelOptions:We}).directive({ngInclude:Xe}).directive(vb).directive(Lc);a.provider({$anchorScroll:Ye,$animate:Ze,$animateCss:$e,$$animateJs:af,$$animateQueue:bf,
$$AnimateRunner:cf,$$animateAsyncRun:df,$browser:ef,$cacheFactory:ff,$controller:gf,$document:hf,$exceptionHandler:jf,$filter:Mc,$$forceReflow:kf,$interpolate:lf,$interval:mf,$http:nf,$httpParamSerializer:of,$httpParamSerializerJQLike:pf,$httpBackend:qf,$xhrFactory:rf,$location:sf,$log:tf,$parse:uf,$rootScope:vf,$q:wf,$$q:xf,$sce:yf,$sceDelegate:zf,$sniffer:Af,$templateCache:Bf,$templateRequest:Cf,$$testability:Df,$timeout:Ef,$window:Ff,$$rAF:Gf,$$jqLite:Hf,$$HashMap:If,$$cookieReader:Jf})}])}function eb(a){return a.replace(Kf,
function(a,d,c,e){return e?c.toUpperCase():c}).replace(Lf,"Moz$1")}function Nc(a){a=a.nodeType;return 1===a||!a||9===a}function Oc(a,b){var d,c,e=b.createDocumentFragment(),f=[];if(Vb.test(a)){d=d||e.appendChild(b.createElement("div"));c=(Mf.exec(a)||["",""])[1].toLowerCase();c=ha[c]||ha._default;d.innerHTML=c[1]+a.replace(Nf,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=ab(f,d.childNodes);d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";r(f,function(a){e.appendChild(a)});
return e}function Pc(a,b){var d=a.parentNode;d&&d.replaceChild(b,a);b.appendChild(a)}function U(a){if(a instanceof U)return a;var b;F(a)&&(a=W(a),b=!0);if(!(this instanceof U)){if(b&&"<"!=a.charAt(0))throw Wb("nosel");return new U(a)}if(b){b=E.document;var d;a=(d=Of.exec(a))?[b.createElement(d[1])]:(d=Oc(a,b))?d.childNodes:[]}Qc(this,a)}function Xb(a){return a.cloneNode(!0)}function wb(a,b){b||fb(a);if(a.querySelectorAll)for(var d=a.querySelectorAll("*"),c=0,e=d.length;c<e;c++)fb(d[c])}function Rc(a,
b,d,c){if(x(c))throw Wb("offargs");var e=(c=xb(a))&&c.events,f=c&&c.handle;if(f)if(b){var g=function(b){var c=e[b];x(d)&&$a(c||[],d);x(d)&&c&&0<c.length||(a.removeEventListener(b,f,!1),delete e[b])};r(b.split(" "),function(a){g(a);yb[a]&&g(yb[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f,!1),delete e[b]}function fb(a,b){var d=a.ng339,c=d&&gb[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),Rc(a)),delete gb[d],a.ng339=void 0))}function xb(a,b){var d=
a.ng339,d=d&&gb[d];b&&!d&&(a.ng339=d=++Pf,d=gb[d]={events:{},data:{},handle:void 0});return d}function Yb(a,b,d){if(Nc(a)){var c=x(d),e=!c&&b&&!H(b),f=!b;a=(a=xb(a,!e))&&a.data;if(c)a[b]=d;else{if(f)return a;if(e)return a&&a[b];R(a,b)}}}function zb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Ab(a,b){b&&a.setAttribute&&r(b.split(" "),function(b){a.setAttribute("class",W((" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g,
" ").replace(" "+W(b)+" "," ")))})}function Bb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");r(b.split(" "),function(a){a=W(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",W(d))}}function Qc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function Sc(a,b){return Cb(a,"$"+(b||"ngController")+"Controller")}function Cb(a,
b,d){9==a.nodeType&&(a=a.documentElement);for(b=J(b)?b:[b];a;){for(var c=0,e=b.length;c<e;c++)if(x(d=B.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function Tc(a){for(wb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Db(a,b){b||wb(a);var d=a.parentNode;d&&d.removeChild(a)}function Qf(a,b){b=b||E;if("complete"===b.document.readyState)b.setTimeout(a);else B(b).on("load",a)}function Uc(a,b){var d=Eb[b.toLowerCase()];return d&&Vc[ua(a)]&&d}function Rf(a,b){var d=function(c,
d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=b[d||c.type],g=f?f.length:0;if(g){if(w(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var k=f.specialHandlerWrapper||Sf;1<g&&(f=ga(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||k(a,c,f[l])}};d.elem=
a;return d}function Sf(a,b,d){d.call(a,b)}function Tf(a,b,d){var c=b.relatedTarget;c&&(c===a||Uf.call(a,c))||d.call(a,b)}function Hf(){this.$get=function(){return R(U,{hasClass:function(a,b){a.attr&&(a=a[0]);return zb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Bb(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Ab(a,b)}})}}function Ga(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"==d||"object"==d&&null!==a?a.$$hashKey=
d+":"+(b||Zd)():d+":"+a}function Sa(a,b){if(b){var d=0;this.nextUid=function(){return++d}}r(a,this.put,this)}function Wc(a){a=(Function.prototype.toString.call(a)+" ").replace(Vf,"");return a.match(Wf)||a.match(Xf)}function Yf(a){return(a=Wc(a))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function db(a,b){function d(a){return function(b,c){if(H(b))r(b,uc(a));else return a(b,c)}}function c(a,b){Ra(a,"service");if(z(b)||J(b))b=p.instantiate(b);if(!b.$get)throw Ha("pget",a);return n[a+"Provider"]=
b}function e(a,b){return function(){var c=I.invoke(b,this);if(w(c))throw Ha("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){sb(w(a)||J(a),"modulesToLoad","not an array");var b=[],c;r(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=p.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{F(a)?(c=Ub(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):z(a)?b.push(p.invoke(a)):J(a)?b.push(p.invoke(a)):
Qa(a,"module")}catch(e){throw J(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ha("modulerr",a,e.stack||e.message||e);}}});return b}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===k)throw Ha("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=k,a[b]=c(b,e)}catch(f){throw a[b]===k&&delete a[b],f;}finally{l.shift()}}function e(a,c,f){var g=[];a=db.$$annotate(a,b,f);for(var h=0,k=a.length;h<k;h++){var l=a[h];
if("string"!==typeof l)throw Ha("itkn",l);g.push(c&&c.hasOwnProperty(l)?c[l]:d(l,f))}return g}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);J(a)&&(a=a[a.length-1]);d=11>=Ba?!1:"function"===typeof a&&/^(?:class\s|constructor\()/.test(Function.prototype.toString.call(a)+" ");return d?(c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=J(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,
a))},get:d,annotate:db.$$annotate,has:function(b){return n.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var k={},l=[],m=new Sa([],!0),n={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,da(b),!1)}),constant:d(function(a,b){Ra(a,"constant");n[a]=b;s[a]=b}),decorator:function(a,b){var c=p.get(a+"Provider"),d=c.$get;c.$get=function(){var a=I.invoke(d,c);return I.invoke(b,null,
{$delegate:a})}}}},p=n.$injector=h(n,function(a,b){ea.isString(b)&&l.push(b);throw Ha("unpr",l.join(" <- "));}),s={},V=h(s,function(a,b){var c=p.get(a+"Provider",b);return I.invoke(c.$get,c,void 0,a)}),I=V;n.$injectorProvider={$get:da(V)};var q=g(a),I=V.get("$injector");I.strictDi=b;r(q,function(a){a&&I.invoke(a)});return I}function Ye(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,
function(a){if("a"===ua(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;z(c)?c=c():Qb(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):S(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=F(a)?a:d.hash();var b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===
b&&""===a||Qf(function(){c.$evalAsync(g)})});return g}]}function hb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;J(a)&&(a=a.join(" "));J(b)&&(b=b.join(" "));return a+" "+b}function Zf(a){F(a)&&(a=a.split(" "));var b=T();r(a,function(a){a.length&&(b[a]=!0)});return b}function Ia(a){return H(a)?a:{}}function $f(a,b,d,c){function e(a){try{a.apply(null,ta.call(arguments,1))}finally{if(V--,0===V)for(;I.length;)try{I.pop()()}catch(b){d.error(b)}}}function f(){y=null;g();h()}function g(){q=P();
q=w(q)?null:q;na(q,D)&&(q=D);D=q}function h(){if(v!==k.url()||K!==q)v=k.url(),K=q,r(L,function(a){a(k.url(),q)})}var k=this,l=a.location,m=a.history,n=a.setTimeout,p=a.clearTimeout,s={};k.isMock=!1;var V=0,I=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){V++};k.notifyWhenNoOutstandingRequests=function(a){0===V?a():I.push(a)};var q,K,v=l.href,u=b.find("base"),y=null,P=c.history?function(){try{return m.state}catch(a){}}:A;g();K=q;k.url=function(b,d,e){w(e)&&(e=null);l!==
a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=K===e;if(v===b&&(!c.history||f))return k;var h=v&&Ja(v)===Ja(b);v=b;K=e;!c.history||h&&f?(h||(y=b),d?l.replace(b):h?(d=l,e=b.indexOf("#"),e=-1===e?"":b.substr(e),d.hash=e):l.href=b,l.href!==b&&(y=b)):(m[d?"replaceState":"pushState"](e,"",b),g(),K=q);y&&(y=b);return k}return y||l.href.replace(/%27/g,"'")};k.state=function(){return q};var L=[],C=!1,D=null;k.onUrlChange=function(b){if(!C){if(c.history)B(a).on("popstate",f);B(a).on("hashchange",
f);C=!0}L.push(b);return b};k.$$applicationDestroyed=function(){B(a).off("hashchange popstate",f)};k.$$checkUrlChange=h;k.baseHref=function(){var a=u.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};k.defer=function(a,b){var c;V++;c=n(function(){delete s[c];e(a)},b||0);s[c]=!0;return c};k.defer.cancel=function(a){return s[a]?(delete s[a],p(a),e(A),!0):!1}}function ef(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new $f(a,c,b,d)}]}function ff(){this.$get=
function(){function a(a,c){function e(a){a!=n&&(p?p==a&&(p=a.n):p=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw O("$cacheFactory")("iid",a);var g=0,h=R({},c,{id:a}),k=T(),l=c&&c.capacity||Number.MAX_VALUE,m=T(),n=null,p=null;return b[a]={put:function(a,b){if(!w(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in k||g++;k[a]=b;g>l&&this.remove(p.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return k[a]},
remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b==n&&(n=b.p);b==p&&(p=b.n);f(b.n,b.p);delete m[a]}a in k&&(delete k[a],g--)},removeAll:function(){k=T();g=0;m=T();n=p=null},destroy:function(){m=h=k=null;delete b[a]},info:function(){return R({},h,{size:g})}}}var b={};a.info=function(){var a={};r(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function Bf(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Fc(a,b){function d(a,
b,c){var d=/^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,e=T();r(a,function(a,f){if(a in n)e[f]=n[a];else{var g=a.match(d);if(!g)throw fa("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(n[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==M(b))throw fa("baddir",a);if(a!==a.trim())throw fa("baddir",a);}function e(a){var b=a.require||a.controller&&a.name;!J(b)&&H(b)&&r(b,function(a,
c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var f={},g=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,h=/(([\w\-]+)(?:\:([^;]+))?;?)/,k=ce("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,m=/^(on[a-z]+|formaction)$/,n=T();this.directive=function I(b,d){Ra(b,"directive");F(b)?(c(b),sb(d,"directiveFactory"),f.hasOwnProperty(b)||(f[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];r(f[b],function(f,g){try{var h=a.invoke(f);z(h)?h={compile:da(h)}:
!h.compile&&h.link&&(h.compile=da(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=e(h);h.restrict=h.restrict||"EA";h.$$moduleName=f.$$moduleName;d.push(h)}catch(k){c(k)}});return d}])),f[b].push(d)):r(b,uc(I));return this};this.component=function(a,b){function c(a){function e(b){return z(b)||J(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:b}var f=b.template||b.templateUrl?b.template:"",g={controller:d,controllerAs:Xc(b.controller)||b.controllerAs||"$ctrl",
template:e(f),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",require:b.require};r(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a)});return g}var d=b.controller||function(){};r(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,z(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,c)};this.aHrefSanitizationWhitelist=function(a){return x(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=
function(a){return x(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var p=!0;this.debugInfoEnabled=function(a){return x(a)?(p=a,this):p};var s=10;this.onChangesTtl=function(a){return arguments.length?(s=a,this):s};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(a,b,c,e,n,y,P,L,C,D){function G(){try{if(!--oa)throw Z=void 0,fa("infchng",s);P.$apply(function(){for(var a=
[],b=0,c=Z.length;b<c;++b)try{Z[b]()}catch(d){a.push(d)}Z=void 0;if(a.length)throw a;})}finally{oa++}}function Aa(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a}function Q(a,b,c){la.innerHTML="<span "+b+">";b=la.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function N(a,b){try{a.addClass(b)}catch(c){}}function ba(a,b,c,d,e){a instanceof B||(a=B(a));for(var f=/\S+/,g=0,h=a.length;g<
h;g++){var k=a[g];k.nodeType===Na&&k.nodeValue.match(f)&&Pc(k,a[g]=E.document.createElement("span"))}var l=t(a,b,a,c,d,e);ba.$$addScopeClass(a);var n=null;return function(b,c,d){sb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var f=d.parentBoundTranscludeFn,g=d.transcludeControllers;d=d.futureParentElement;f&&f.$$boundTransclude&&(f=f.$$boundTransclude);n||(n=(d=d&&d[0])?"foreignobject"!==ua(d)&&ka.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==n?B(ca(n,B("<div>").append(a).html())):
c?Pa.clone.call(a):a;if(g)for(var h in g)d.data("$"+h+"Controller",g[h].instance);ba.$$addScopeInfo(d,b);c&&c(d,b);l&&l(b,d,d,f);return d}}function t(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,n,m,v,q;if(p)for(q=Array(c.length),n=0;n<h.length;n+=3)f=h[n],q[f]=c[f];else q=c;n=0;for(m=h.length;n<m;)k=q[h[n++]],c=h[n++],f=h[n++],c?(c.scope?(l=a.$new(),ba.$$addScopeInfo(B(k),l)):l=a,v=c.transcludeOnThisElement?wa(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?wa(a,b):null,c(f,l,k,d,v)):f&&f(a,
k.childNodes,void 0,e)}for(var h=[],k,l,n,m,p,v=0;v<a.length;v++){k=new Aa;l=$b(a[v],[],k,0===v?d:void 0,e);(f=l.length?Ta(l,a[v],k,b,c,null,[],[],f):null)&&f.scope&&ba.$$addScopeClass(k.$$element);k=f&&f.terminal||!(n=a[v].childNodes)||!n.length?null:t(n,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(v,f,k),m=!0,p=p||f;f=null}return m?g:null}function wa(a,b,c){function d(e,f,g,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,f,{parentBoundTranscludeFn:c,
transcludeControllers:g,futureParentElement:h})}var e=d.$$slots=T(),f;for(f in b.$$slots)e[f]=b.$$slots[f]?wa(a,b.$$slots[f],c):null;return d}function $b(a,b,c,d,e){var f=c.$attr,k;switch(a.nodeType){case 1:Da(b,xa(ua(a)),"E",d,e);for(var l,n,m,p=a.attributes,v=0,q=p&&p.length;v<q;v++){var s=!1,L=!1;l=p[v];k=l.name;n=W(l.value);l=xa(k);if(m=ya.test(l))k=k.replace(Yc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});(l=l.match(za))&&S(l[1])&&(s=k,L=k.substr(0,k.length-5)+"end",k=
k.substr(0,k.length-6));l=xa(k.toLowerCase());f[l]=k;if(m||!c.hasOwnProperty(l))c[l]=n,Uc(a,l)&&(c[l]=!0);ia(a,b,n,l,m);Da(b,l,"A",d,e,s,L)}a=a.className;H(a)&&(a=a.animVal);if(F(a)&&""!==a)for(;k=h.exec(a);)l=xa(k[2]),Da(b,l,"C",d,e)&&(c[l]=W(k[3])),a=a.substr(k.index+k[0].length);break;case Na:if(11===Ba)for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===Na;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);aa(b,a.nodeValue);break;case 8:try{if(k=g.exec(a.nodeValue))l=
xa(k[1]),Da(b,l,"M",d,e)&&(c[l]=W(k[2]))}catch(C){}}b.sort(Y);return b}function Zc(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw fa("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return B(d)}function O(a,b,c){return function(d,e,f,g,h){e=Zc(e[0],b,c);return a(d,e,f,g,h)}}function ac(a,b,c,d,e,f){var g;return a?ba(b,c,d,e,f):function(){g||(g=ba(b,c,d,e,f),b=c=f=null);return g.apply(this,
arguments)}}function Ta(a,b,d,e,f,g,h,k,l){function n(a,b,c,d){if(a){c&&(a=O(a,c,d));a.require=u.require;a.directiveName=G;if(s===u||u.$$isolateScope)a=ga(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=O(b,c,d));b.require=u.require;b.directiveName=G;if(s===u||u.$$isolateScope)b=ga(b,{isolateScope:!0});k.push(b)}}function m(a,e,f,g,l){function n(a,b,c,d){var e;Za(a)||(d=c,c=b,b=a,a=void 0);y&&(e=N);c||(c=y?G.parent():G);if(d){var f=l.$$slots[d];if(f)return f(a,b,e,c,t);if(w(f))throw fa("noslot",d,va(G));
}else return l(a,b,e,c,t)}var p,C,u,D,I,N,Q,G;b===f?(g=d,G=d.$$element):(G=B(f),g=new Aa(G,d));I=e;s?D=e.$new(!0):v&&(I=e.$parent);l&&(Q=n,Q.$$boundTransclude=l,Q.isSlotFilled=function(a){return!!l.$$slots[a]});q&&(N=ag(G,g,Q,q,D,e,s));s&&(ba.$$addScopeInfo(G,D,!0,!(L&&(L===s||L===s.$$originalDirective))),ba.$$addScopeClass(G,!0),D.$$isolateBindings=s.$$isolateBindings,C=ha(e,g,D,D.$$isolateBindings,s),C.removeWatches&&D.$on("$destroy",C.removeWatches));for(p in N){C=q[p];u=N[p];var Zb=C.$$bindings.bindToController;
u.bindingInfo=u.identifier&&Zb?ha(I,g,u.instance,Zb,C):{};var P=u();P!==u.instance&&(u.instance=P,G.data("$"+C.name+"Controller",P),u.bindingInfo.removeWatches&&u.bindingInfo.removeWatches(),u.bindingInfo=ha(I,g,u.instance,Zb,C))}r(q,function(a,b){var c=a.require;a.bindToController&&!J(c)&&H(c)&&R(N[b].instance,ib(b,c,G,N))});r(N,function(a){var b=a.instance;if(z(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(d){c(d)}if(z(b.$onInit))try{b.$onInit()}catch(e){c(e)}z(b.$onDestroy)&&
I.$on("$destroy",function(){b.$onDestroy()})});p=0;for(C=h.length;p<C;p++)u=h[p],ja(u,u.isolateScope?D:e,G,g,u.require&&ib(u.directiveName,u.require,G,N),Q);var t=e;s&&(s.template||null===s.templateUrl)&&(t=D);a&&a(t,f.childNodes,void 0,l);for(p=k.length-1;0<=p;p--)u=k[p],ja(u,u.isolateScope?D:e,G,g,u.require&&ib(u.directiveName,u.require,G,N),Q);r(N,function(a){a=a.instance;z(a.$postLink)&&a.$postLink()})}l=l||{};for(var p=-Number.MAX_VALUE,v=l.newScopeDirective,q=l.controllerDirectives,s=l.newIsolateScopeDirective,
L=l.templateDirective,C=l.nonTlbTranscludeDirective,D=!1,I=!1,y=l.hasElementTranscludeDirective,N=d.$$element=B(b),u,G,Q,P=e,t,Ca=!1,wa=!1,x,A=0,E=a.length;A<E;A++){u=a[A];var F=u.$$start,Ta=u.$$end;F&&(N=Zc(b,F,Ta));Q=void 0;if(p>u.priority)break;if(x=u.scope)u.templateUrl||(H(x)?(X("new/isolated scope",s||v,u,N),s=u):X("new/isolated scope",s,u,N)),v=v||u;G=u.name;if(!Ca&&(u.replace&&(u.templateUrl||u.template)||u.transclude&&!u.$$tlb)){for(x=A+1;Ca=a[x++];)if(Ca.transclude&&!Ca.$$tlb||Ca.replace&&
(Ca.templateUrl||Ca.template)){wa=!0;break}Ca=!0}!u.templateUrl&&u.controller&&(x=u.controller,q=q||T(),X("'"+G+"' controller",q[G],u,N),q[G]=u);if(x=u.transclude)if(D=!0,u.$$tlb||(X("transclusion",C,u,N),C=u),"element"==x)y=!0,p=u.priority,Q=N,N=d.$$element=B(ba.$$createComment(G,d[G])),b=N[0],da(f,ta.call(Q,0),b),Q[0].$$parentNode=Q[0].parentNode,P=ac(wa,Q,e,p,g&&g.name,{nonTlbTranscludeDirective:C});else{var M=T();Q=B(Xb(b)).contents();if(H(x)){Q=[];var S=T(),Da=T();r(x,function(a,b){var c="?"===
a.charAt(0);a=c?a.substring(1):a;S[a]=b;M[b]=null;Da[b]=c});r(N.contents(),function(a){var b=S[xa(ua(a))];b?(Da[b]=!0,M[b]=M[b]||[],M[b].push(a)):Q.push(a)});r(Da,function(a,b){if(!a)throw fa("reqslot",b);});for(var Y in M)M[Y]&&(M[Y]=ac(wa,M[Y],e))}N.empty();P=ac(wa,Q,e,void 0,void 0,{needsNewScope:u.$$isolateScope||u.$$newScope});P.$$slots=M}if(u.template)if(I=!0,X("template",L,u,N),L=u,x=z(u.template)?u.template(N,d):u.template,x=ra(x),u.replace){g=u;Q=Vb.test(x)?$c(ca(u.templateNamespace,W(x))):
[];b=Q[0];if(1!=Q.length||1!==b.nodeType)throw fa("tplrt",G,"");da(f,N,b);E={$attr:{}};x=$b(b,[],E);var aa=a.splice(A+1,a.length-(A+1));(s||v)&&ad(x,s,v);a=a.concat(x).concat(aa);U(d,E);E=a.length}else N.html(x);if(u.templateUrl)I=!0,X("template",L,u,N),L=u,u.replace&&(g=u),m=$(a.splice(A,a.length-A),N,d,f,D&&P,h,k,{controllerDirectives:q,newScopeDirective:v!==u&&v,newIsolateScopeDirective:s,templateDirective:L,nonTlbTranscludeDirective:C}),E=a.length;else if(u.compile)try{t=u.compile(N,d,P);var Z=
u.$$originalDirective||u;z(t)?n(null,bb(Z,t),F,Ta):t&&n(bb(Z,t.pre),bb(Z,t.post),F,Ta)}catch(ea){c(ea,va(N))}u.terminal&&(m.terminal=!0,p=Math.max(p,u.priority))}m.scope=v&&!0===v.scope;m.transcludeOnThisElement=D;m.templateOnThisElement=I;m.transclude=P;l.hasElementTranscludeDirective=y;return m}function ib(a,b,c,d){var e;if(F(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e=g?c.inheritedData(h):
c.data(h)}if(!e&&!f)throw fa("ctreq",b,a);}else if(J(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=ib(a,b[g],c,d);else H(b)&&(e={},r(b,function(b,f){e[f]=ib(a,b,c,d)}));return e||null}function ag(a,b,c,d,e,f,g){var h=T(),k;for(k in d){var l=d[k],n={$scope:l===g||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},m=l.controller;"@"==m&&(m=b[l.name]);n=y(m,n,!0,l.controllerAs);h[l.name]=n;a.data("$"+l.name+"Controller",n.instance)}return h}function ad(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=Rb(a[d],
{$$isolateScope:b,$$newScope:c})}function Da(b,e,g,h,k,l,n){if(e===k)return null;k=null;if(f.hasOwnProperty(e)){var m;e=a.get(e+"Directive");for(var p=0,v=e.length;p<v;p++)try{if(m=e[p],(w(h)||h>m.priority)&&-1!=m.restrict.indexOf(g)){l&&(m=Rb(m,{$$start:l,$$end:n}));if(!m.$$bindings){var q=m,s=m,L=m.name,u={isolateScope:null,bindToController:null};H(s.scope)&&(!0===s.bindToController?(u.bindToController=d(s.scope,L,!0),u.isolateScope={}):u.isolateScope=d(s.scope,L,!1));H(s.bindToController)&&(u.bindToController=
d(s.bindToController,L,!0));if(H(u.bindToController)){var C=s.controller,D=s.controllerAs;if(!C)throw fa("noctrl",L);if(!Xc(C,D))throw fa("noident",L);}var N=q.$$bindings=u;H(N.isolateScope)&&(m.$$isolateBindings=N.isolateScope)}b.push(m);k=m}}catch(G){c(G)}}return k}function S(b){if(f.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,e=c.length;d<e;d++)if(b=c[d],b.multiElement)return!0;return!1}function U(a,b){var c=b.$attr,d=a.$attr;r(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===
e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,e){a.hasOwnProperty(e)||"$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]))})}function $(a,b,c,d,f,g,h,k){var l=[],n,m,p=b[0],s=a.shift(),q=Rb(s,{templateUrl:null,transclude:null,replace:null,$$originalDirective:s}),L=z(s.templateUrl)?s.templateUrl(b,c):s.templateUrl,u=s.templateNamespace;b.empty();e(L).then(function(e){var v,C;e=ra(e);if(s.replace){e=Vb.test(e)?$c(ca(u,W(e))):[];v=e[0];if(1!=e.length||1!==v.nodeType)throw fa("tplrt",
s.name,L);e={$attr:{}};da(d,b,v);var D=$b(v,[],e);H(s.scope)&&ad(D,!0);a=D.concat(a);U(c,e)}else v=p,b.html(e);a.unshift(q);n=Ta(a,v,c,f,b,s,g,h,k);r(d,function(a,c){a==v&&(d[c]=b[0])});for(m=t(b[0].childNodes,f);l.length;){e=l.shift();C=l.shift();var I=l.shift(),G=l.shift(),D=b[0];if(!e.$$destroyed){if(C!==p){var y=C.className;k.hasElementTranscludeDirective&&s.replace||(D=Xb(v));da(I,B(C),D);N(B(D),y)}C=n.transcludeOnThisElement?wa(e,n.transclude,G):G;n(m,e,D,d,C)}}l=null});return function(a,b,
c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(n.transcludeOnThisElement&&(a=wa(b,n.transclude,e)),n(m,b,c,d,a)))}}function Y(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function X(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw fa("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,va(d));}function aa(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&ba.$$addBindingClass(a);
return function(a,c){var e=c.parent();b||ba.$$addBindingClass(e);ba.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function ca(a,b){a=M(a||"html");switch(a){case "svg":case "math":var c=E.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function ea(a,b){if("srcdoc"==b)return L.HTML;var c=ua(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return L.RESOURCE_URL}function ia(a,
c,d,e,f){var g=ea(a,e);f=k[e]||f;var h=b(d,!0,g,f);if(h){if("multiple"===e&&"select"===ua(a))throw fa("selmulti",va(a));c.push({priority:100,compile:function(){return{pre:function(a,c,k){c=k.$$observers||(k.$$observers=T());if(m.test(e))throw fa("nodomevents");var l=k[e];l!==d&&(h=l&&b(l,!0,g,f),d=l);h&&(k[e]=h(a),(c[e]||(c[e]=[])).$$inter=!0,(k.$$observers&&k.$$observers[e].$$scope||a).$watch(h,function(a,b){"class"===e&&a!=b?k.$updateClass(a,b):k.$set(e,a)}))}}}})}}function da(a,b,c){var d=b[0],
e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=E.document.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);B.hasData(d)&&(B.data(c,B.data(d)),B(d).off("$destroy"));B.cleanData(a.querySelectorAll("*"));for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function ga(a,b){return R(function(){return a.apply(null,arguments)},
a,b)}function ja(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,va(d))}}function ha(a,c,d,e,f){function g(b,c,e){z(d.$onChanges)&&c!==e&&(Z||(a.$$postDigest(G),Z=[]),m||(m={},Z.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Fb(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;r(e,function(e,h){var m=e.attrName,p=e.optional,v,s,L,C;switch(e.mode){case "@":p||sa.call(c,m)||(d[h]=c[m]=void 0);c.$observe(m,function(a){if(F(a)||Ea(a))g(h,a,d[h]),d[h]=a});c.$$observers[m].$$scope=a;v=c[m];F(v)?d[h]=
b(v)(a):Ea(v)&&(d[h]=v);l[h]=new Fb(bc,d[h]);break;case "=":if(!sa.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;s=n(c[m]);C=s.literal?na:function(a,b){return a===b||a!==a&&b!==b};L=s.assign||function(){v=d[h]=s(a);throw fa("nonassign",c[m],m,f.name);};v=d[h]=s(a);p=function(b){C(b,d[h])||(C(b,v)?L(a,b=d[h]):d[h]=b);return v=b};p.$stateful=!0;p=e.collection?a.$watchCollection(c[m],p):a.$watch(n(c[m],p),null,s.literal);k.push(p);break;case "<":if(!sa.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;
s=n(c[m]);var D=d[h]=s(a);l[h]=new Fb(bc,d[h]);p=a.$watch(s,function(a,b){if(b===a){if(b===D)return;b=D}g(h,a,b);d[h]=a},s.literal);k.push(p);break;case "&":s=c.hasOwnProperty(m)?n(c[m]):A;if(s===A&&p)break;d[h]=function(b){return s(a,b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var ma=/^\w/,la=E.document.createElement("div"),oa=s,Z;Aa.prototype={$normalize:xa,$addClass:function(a){a&&0<a.length&&C.addClass(this.$$element,a)},$removeClass:function(a){a&&
0<a.length&&C.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=bd(a,b);c&&c.length&&C.addClass(this.$$element,c);(c=bd(b,a))&&c.length&&C.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=Uc(this.$$element[0],a),g=cd[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Cc(a,"-"));f=ua(this.$$element);if("a"===f&&("href"===a||"xlinkHref"===a)||"img"===f&&"src"===a)this[a]=b=D(b,"src"===a);else if("img"===
f&&"srcset"===a&&x(b)){for(var f="",g=W(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<k;l++)var n=2*l,f=f+D(W(g[n]),!0),f=f+(" "+W(g[n+1]));g=W(g[2*l]).split(/\s/);f+=D(W(g[0]),!0);2===g.length&&(f+=" "+W(g[1]));this[a]=b=f}!1!==d&&(null===b||w(b)?this.$$element.removeAttr(e):ma.test(e)?this.$$element.attr(e,b):Q(this.$$element[0],e,b));(a=this.$$observers)&&r(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,
d=c.$$observers||(c.$$observers=T()),e=d[a]||(d[a]=[]);e.push(b);P.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||w(c[a])||b(c[a])});return function(){$a(e,b)}}};var pa=b.startSymbol(),qa=b.endSymbol(),ra="{{"==pa&&"}}"==qa?Ya:function(a){return a.replace(/\{\{/g,pa).replace(/}}/g,qa)},ya=/^ngAttr[A-Z]/,za=/^(.+)Start$/;ba.$$addBindingInfo=p?function(a,b){var c=a.data("$binding")||[];J(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:A;ba.$$addBindingClass=p?function(a){N(a,"ng-binding")}:
A;ba.$$addScopeInfo=p?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:A;ba.$$addScopeClass=p?function(a,b){N(a,b?"ng-isolate-scope":"ng-scope")}:A;ba.$$createComment=function(a,b){var c="";p&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return E.document.createComment(c)};return ba}]}function Fb(a,b){this.previousValue=a;this.currentValue=b}function xa(a){return eb(a.replace(Yc,""))}function bd(a,b){var d="",c=a.split(/\s+/),e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=
c[f],h=0;h<e.length;h++)if(g==e[h])continue a;d+=(0<d.length?" ":"")+g}return d}function $c(a){a=B(a);var b=a.length;if(1>=b)return a;for(;b--;)8===a[b].nodeType&&bg.call(a,b,1);return a}function Xc(a,b){if(b&&F(b))return b;if(F(a)){var d=dd.exec(a);if(d)return d[3]}}function gf(){var a={},b=!1;this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,c){Ra(b,"controller");H(b)?R(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector","$window",function(d,c){function e(a,
b,c,d){if(!a||!H(a.$scope))throw O("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,g,h,k){var l,m,n;h=!0===h;k&&F(k)&&(n=k);if(F(f)){k=f.match(dd);if(!k)throw cg("ctrlfmt",f);m=k[1];n=n||k[3];f=a.hasOwnProperty(m)?a[m]:Ec(g.$scope,m,!0)||(b?Ec(c,m,!0):void 0);Qa(f,m,!0)}if(h)return h=(J(f)?f[f.length-1]:f).prototype,l=Object.create(h||null),n&&e(g,n,l,m||f.name),R(function(){var a=d.invoke(f,l,g,m);a!==l&&(H(a)||z(a))&&(l=a,n&&e(g,n,l,m||f.name));return l},{instance:l,identifier:n});l=
d.instantiate(f,g,m);n&&e(g,n,l,m||f.name);return l}}]}function hf(){this.$get=["$window",function(a){return B(a.document)}]}function jf(){this.$get=["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function cc(a){return H(a)?ia(a)?a.toISOString():cb(a):a}function of(){this.$get=function(){return function(a){if(!a)return"";var b=[];tc(a,function(a,c){null===a||w(a)||(J(a)?r(a,function(a){b.push(ja(c)+"="+ja(cc(a)))}):b.push(ja(c)+"="+ja(cc(a))))});return b.join("&")}}}function pf(){this.$get=
function(){return function(a){function b(a,e,f){null===a||w(a)||(J(a)?r(a,function(a,c){b(a,e+"["+(H(a)?c:"")+"]")}):H(a)&&!ia(a)?tc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):d.push(ja(e)+"="+ja(cc(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function dc(a,b){if(F(a)){var d=a.replace(dg,"").trim();if(d){var c=b("Content-Type");(c=c&&0===c.indexOf(ed))||(c=(c=d.match(eg))&&fg[c[0]].test(d));c&&(a=xc(d))}}return a}function fd(a){var b=T(),d;F(a)?r(a.split("\n"),function(a){d=
a.indexOf(":");var e=M(W(a.substr(0,d)));a=W(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):H(a)&&r(a,function(a,d){var f=M(d),g=W(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function gd(a){var b;return function(d){b||(b=fd(a));return d?(d=b[M(d)],void 0===d&&(d=null),d):b}}function hd(a,b,d,c){if(z(c))return c(a,b,d);r(c,function(c){a=c(a,b,d)});return a}function nf(){var a=this.defaults={transformResponse:[dc],transformRequest:[function(a){return H(a)&&"[object File]"!==ka.call(a)&&"[object Blob]"!==
ka.call(a)&&"[object FormData]"!==ka.call(a)?cb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ga(ec),put:ga(ec),patch:ga(ec)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},b=!1;this.useApplyAsync=function(a){return x(a)?(b=!!a,this):b};var d=!0;this.useLegacyPromiseExtensions=function(a){return x(a)?(d=!!a,this):d};var c=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",
function(e,f,g,h,k,l){function m(b){function c(a){var b=R({},a);b.data=hd(a.data,a.headers,a.status,f.transformResponse);a=a.status;return 200<=a&&300>a?b:k.reject(b)}function e(a,b){var c,d={};r(a,function(a,e){z(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}if(!H(b))throw O("$http")("badreq",b);if(!F(b.url))throw O("$http")("badreq",b.url);var f=R({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer},b);f.headers=function(b){var c=
a.headers,d=R({},b.headers),f,g,h,c=R({},c.common,c[M(b.method)]);a:for(f in c){g=M(f);for(h in d)if(M(h)===g)continue a;d[f]=c[f]}return e(d,ga(b))}(b);f.method=ub(f.method);f.paramSerializer=F(f.paramSerializer)?l.get(f.paramSerializer):f.paramSerializer;var g=[function(b){var d=b.headers,e=hd(b.data,gd(d),void 0,b.transformRequest);w(e)&&r(d,function(a,b){"content-type"===M(b)&&delete d[b]});w(b.withCredentials)&&!w(a.withCredentials)&&(b.withCredentials=a.withCredentials);return n(b,e).then(c,
c)},void 0],h=k.when(f);for(r(V,function(a){(a.request||a.requestError)&&g.unshift(a.request,a.requestError);(a.response||a.responseError)&&g.push(a.response,a.responseError)});g.length;){b=g.shift();var m=g.shift(),h=h.then(b,m)}d?(h.success=function(a){Qa(a,"fn");h.then(function(b){a(b.data,b.status,b.headers,f)});return h},h.error=function(a){Qa(a,"fn");h.then(null,function(b){a(b.data,b.status,b.headers,f)});return h}):(h.success=id("success"),h.error=id("error"));return h}function n(c,d){function g(a){if(a){var c=
{};r(a,function(a,d){c[d]=function(c){function d(){a(c)}b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function l(a,c,d,e){function f(){n(c,a,d,e)}D&&(200<=a&&300>a?D.put(Q,[a,c,fd(d),e]):D.remove(Q));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function n(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?L.resolve:L.reject)({data:a,status:b,headers:gd(d),config:c,statusText:e})}function y(a){n(a.data,a.status,ga(a.headers()),a.statusText)}function V(){var a=m.pendingRequests.indexOf(c);-1!==a&&m.pendingRequests.splice(a,
1)}var L=k.defer(),C=L.promise,D,G,Aa=c.headers,Q=p(c.url,c.paramSerializer(c.params));m.pendingRequests.push(c);C.then(V,V);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(D=H(c.cache)?c.cache:H(a.cache)?a.cache:s);D&&(G=D.get(Q),x(G)?G&&z(G.then)?G.then(y,y):J(G)?n(G[1],G[0],ga(G[2]),G[3]):n(G,200,{},"OK"):D.put(Q,C));w(G)&&((G=jd(c.url)?f()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(Aa[c.xsrfHeaderName||a.xsrfHeaderName]=G),e(c.method,Q,d,l,Aa,c.timeout,c.withCredentials,
c.responseType,g(c.eventHandlers),g(c.uploadEventHandlers)));return C}function p(a,b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);return a}var s=g("$http");a.paramSerializer=F(a.paramSerializer)?l.get(a.paramSerializer):a.paramSerializer;var V=[];r(c,function(a){V.unshift(F(a)?l.get(a):l.invoke(a))});m.pendingRequests=[];(function(a){r(arguments,function(a){m[a]=function(b,c){return m(R({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){m[a]=function(b,
c,d){return m(R({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");m.defaults=a;return m}]}function rf(){this.$get=function(){return function(){return new E.XMLHttpRequest}}}function qf(){this.$get=["$browser","$window","$document","$xhrFactory",function(a,b,d,c){return gg(a,c,a.defer,b.angular.callbacks,d[0])}]}function gg(a,b,d,c,e){function f(a,b,d){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",
m,!1);e.body.removeChild(f);f=null;var g=-1,s="unknown";a&&("load"!==a.type||c[b].called||(a={type:"error"}),s=a.type,g="error"===a.type?404:200);d&&d(g,s)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,h,k,l,m,n,p,s,V,I){function q(){u&&u();y&&y.abort()}function K(b,c,e,f,g){x(L)&&d.cancel(L);u=y=null;b(c,e,f,g);a.$$completeOutstandingRequest(A)}a.$$incOutstandingRequestCount();h=h||a.url();if("jsonp"==M(e)){var v="_"+(c.counter++).toString(36);
c[v]=function(a){c[v].data=a;c[v].called=!0};var u=f(h.replace("JSON_CALLBACK","angular.callbacks."+v),v,function(a,b){K(l,a,c[v].data,"",b);c[v]=A})}else{var y=b(e,h);y.open(e,h,!0);r(m,function(a,b){x(a)&&y.setRequestHeader(b,a)});y.onload=function(){var a=y.statusText||"",b="response"in y?y.response:y.responseText,c=1223===y.status?204:y.status;0===c&&(c=b?200:"file"==qa(h).protocol?404:0);K(l,c,b,y.getAllResponseHeaders(),a)};e=function(){K(l,-1,null,null,"")};y.onerror=e;y.onabort=e;r(V,function(a,
b){y.addEventListener(b,a)});r(I,function(a,b){y.upload.addEventListener(b,a)});p&&(y.withCredentials=!0);if(s)try{y.responseType=s}catch(P){if("json"!==s)throw P;}y.send(w(k)?null:k)}if(0<n)var L=d(q,n);else n&&z(n.then)&&n.then(q)}}function lf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler","$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(n,a).replace(p,
b)}function h(a,b,c,d){var e;return e=a.$watch(function(a){e();return d(a)},b,c)}function k(f,k,n,p){function r(a){try{var b=a;a=n?e.getTrusted(n,b):e.valueOf(b);var d;if(p&&!x(a))d=a;else if(null==a)d="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=cb(a)}d=a}return d}catch(g){c(Ka.interr(f,g))}}if(!f.length||-1===f.indexOf(a)){var v;k||(k=g(f),v=da(k),v.exp=f,v.expressions=[],v.$$watchDelegate=h);return v}p=!!p;var u,y,P=0,L=[],C=[];v=f.length;for(var D=[],G=[];P<
v;)if(-1!=(u=f.indexOf(a,P))&&-1!=(y=f.indexOf(b,u+l)))P!==u&&D.push(g(f.substring(P,u))),P=f.substring(u+l,y),L.push(P),C.push(d(P,r)),P=y+m,G.push(D.length),D.push("");else{P!==v&&D.push(g(f.substring(P)));break}n&&1<D.length&&Ka.throwNoconcat(f);if(!k||L.length){var Aa=function(a){for(var b=0,c=L.length;b<c;b++){if(p&&w(a[b]))return;D[G[b]]=a[b]}return D.join("")};return R(function(a){var b=0,d=L.length,e=Array(d);try{for(;b<d;b++)e[b]=C[b](a);return Aa(e)}catch(g){c(Ka.interr(f,g))}},{exp:f,expressions:L,
$$watchDelegate:function(a,b){var c;return a.$watchGroup(C,function(d,e){var f=Aa(d);z(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,m=b.length,n=new RegExp(a.replace(/./g,f),"g"),p=new RegExp(b.replace(/./g,f),"g");k.startSymbol=function(){return a};k.endSymbol=function(){return b};return k}]}function mf(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(a,b,d,c,e){function f(f,k,l,m){function n(){p?f.apply(null,s):f(q)}var p=4<arguments.length,s=p?ta.call(arguments,4):
[],r=b.setInterval,I=b.clearInterval,q=0,K=x(m)&&!m,v=(K?c:d).defer(),u=v.promise;l=x(l)?l:0;u.$$intervalId=r(function(){K?e.defer(n):a.$evalAsync(n);v.notify(q++);0<l&&q>=l&&(v.resolve(q),I(u.$$intervalId),delete g[u.$$intervalId]);K||a.$apply()},k);g[u.$$intervalId]=v;return u}var g={};f.cancel=function(a){return a&&a.$$intervalId in g?(g[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete g[a.$$intervalId],!0):!1};return f}]}function fc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=
qb(a[b]);return a.join("/")}function kd(a,b){var d=qa(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=aa(d.port)||hg[d.protocol]||null}function ld(a,b){var d="/"!==a.charAt(0);d&&(a="/"+a);var c=qa(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):c.pathname);b.$$search=Ac(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!=b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function la(a,b){if(0===b.lastIndexOf(a,0))return b.substr(a.length)}function Ja(a){var b=
a.indexOf("#");return-1==b?a:a.substr(0,b)}function jb(a){return a.replace(/(#.+)|#$/,"$1")}function gc(a,b,d){this.$$html5=!0;d=d||"";kd(a,this);this.$$parse=function(a){var d=la(b,a);if(!F(d))throw Gb("ipthprfx",a,b);ld(d,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Tb(this.$$search),d=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(a?"?"+a:"")+d;this.$$absUrl=b+this.$$url.substr(1)};this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),
!0;var f,g;x(f=la(a,c))?(g=f,g=x(f=la(d,f))?b+(la("/",f)||f):a+g):x(f=la(b,c))?g=b+f:b==c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function hc(a,b,d){kd(a,this);this.$$parse=function(c){var e=la(a,c)||la(b,c),f;w(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",w(e)&&(a=c,this.replace())):(f=la(d,e),w(f)&&(f=e));ld(f,this);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;0===f.lastIndexOf(e,0)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=
Tb(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+(this.$$url?d+this.$$url:"")};this.$$parseLinkUrl=function(b,d){return Ja(a)==Ja(b)?(this.$$parse(b),!0):!1}}function md(a,b,d){this.$$html5=!0;hc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a==Ja(c)?f=c:(g=la(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$compose=function(){var b=Tb(this.$$search),
e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+d+this.$$url}}function Hb(a){return function(){return this[a]}}function nd(a,b){return function(d){if(w(d))return this[a];this[a]=b(d);this.$$compose();return this}}function sf(){var a="",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return x(b)?(a=b,this):a};this.html5Mode=function(a){return Ea(a)?(b.enabled=a,this):H(a)?(Ea(a.enabled)&&(b.enabled=a.enabled),Ea(a.requireBase)&&
(b.requireBase=a.requireBase),Ea(a.rewriteLinks)&&(b.rewriteLinks=a.rewriteLinks),this):b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,c,e,f,g){function h(a,b,d){var e=l.url(),f=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(g){throw l.url(e),l.$$state=f,g;}}function k(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,b)}var l,m;m=c.baseHref();var n=c.url(),p;if(b.enabled){if(!m&&b.requireBase)throw Gb("nobase");p=n.substring(0,n.indexOf("/",
n.indexOf("//")+2))+(m||"/");m=e.history?gc:md}else p=Ja(n),m=hc;var s=p.substr(0,Ja(p).lastIndexOf("/")+1);l=new m(p,s,"#"+a);l.$$parseLinkUrl(n,n);l.$$state=c.state();var r=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(b.rewriteLinks&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!=a.which&&2!=a.button){for(var e=B(a.target);"a"!==ua(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),k=e.attr("href")||e.attr("xlink:href");H(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=
qa(h.animVal).href);r.test(h)||!h||e.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(h,k)||(a.preventDefault(),l.absUrl()!=c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});jb(l.absUrl())!=jb(n)&&c.url(l.absUrl(),!0);var I=!0;c.onUrlChange(function(a,b){w(la(s,a))?g.location.href=a:(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,f;a=jb(a);l.$$parse(a);l.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;l.absUrl()===a&&(f?(l.$$parse(c),l.$$state=
e,h(c,!1,e)):(I=!1,k(c,e)))}),d.$$phase||d.$digest())});d.$watch(function(){var a=jb(c.url()),b=jb(l.absUrl()),f=c.state(),g=l.$$replace,n=a!==b||l.$$html5&&e.history&&f!==l.$$state;if(I||n)I=!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,f).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=f):(n&&h(b,g,f===l.$$state?null:l.$$state),k(a,f)))});l.$$replace=!1});return l}]}function tf(){var a=!0,b=this;this.debugEnabled=function(b){return x(b)?
(a=b,this):a};this.$get=["$window",function(d){function c(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||A;a=!1;try{a=!!e.apply}catch(k){}return a?function(){var a=[];r(arguments,function(b){a.push(c(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),
debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function Ua(a,b){if("__defineGetter__"===a||"__defineSetter__"===a||"__lookupGetter__"===a||"__lookupSetter__"===a||"__proto__"===a)throw ca("isecfld",b);return a}function ig(a){return a+""}function ra(a,b){if(a){if(a.constructor===a)throw ca("isecfn",b);if(a.window===a)throw ca("isecwindow",b);if(a.children&&(a.nodeName||a.prop&&a.attr&&a.find))throw ca("isecdom",b);if(a===Object)throw ca("isecobj",b);}return a}function od(a,
b){if(a){if(a.constructor===a)throw ca("isecfn",b);if(a===jg||a===kg||a===lg)throw ca("isecff",b);}}function Ib(a,b){if(a&&(a===(0).constructor||a===(!1).constructor||a==="".constructor||a==={}.constructor||a===[].constructor||a===Function.constructor))throw ca("isecaf",b);}function mg(a,b){return"undefined"!==typeof a?a:b}function pd(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function $(a,b){var d,c;switch(a.type){case t.Program:d=!0;r(a.body,function(a){$(a.expression,b);d=
d&&a.expression.constant});a.constant=d;break;case t.Literal:a.constant=!0;a.toWatch=[];break;case t.UnaryExpression:$(a.argument,b);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case t.BinaryExpression:$(a.left,b);$(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case t.LogicalExpression:$(a.left,b);$(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case t.ConditionalExpression:$(a.test,
b);$(a.alternate,b);$(a.consequent,b);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case t.Identifier:a.constant=!1;a.toWatch=[a];break;case t.MemberExpression:$(a.object,b);a.computed&&$(a.property,b);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=[a];break;case t.CallExpression:d=a.filter?!b(a.callee.name).$stateful:!1;c=[];r(a.arguments,function(a){$(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});
a.constant=d;a.toWatch=a.filter&&!b(a.callee.name).$stateful?c:[a];break;case t.AssignmentExpression:$(a.left,b);$(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case t.ArrayExpression:d=!0;c=[];r(a.elements,function(a){$(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=c;break;case t.ObjectExpression:d=!0;c=[];r(a.properties,function(a){$(a.value,b);d=d&&a.value.constant&&!a.computed;a.value.constant||c.push.apply(c,a.value.toWatch)});
a.constant=d;a.toWatch=c;break;case t.ThisExpression:a.constant=!1;a.toWatch=[];break;case t.LocalsExpression:a.constant=!1,a.toWatch=[]}}function qd(a){if(1==a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function rd(a){return a.type===t.Identifier||a.type===t.MemberExpression}function sd(a){if(1===a.body.length&&rd(a.body[0].expression))return{type:t.AssignmentExpression,left:a.body[0].expression,right:{type:t.NGValueParameter},operator:"="}}function td(a){return 0===
a.body.length||1===a.body.length&&(a.body[0].expression.type===t.Literal||a.body[0].expression.type===t.ArrayExpression||a.body[0].expression.type===t.ObjectExpression)}function ud(a,b){this.astBuilder=a;this.$filter=b}function vd(a,b){this.astBuilder=a;this.$filter=b}function Jb(a){return"constructor"==a}function ic(a){return z(a.valueOf)?a.valueOf():ng.call(a)}function uf(){var a=T(),b=T(),d={"true":!0,"false":!1,"null":null,undefined:void 0},c,e;this.addLiteral=function(a,b){d[a]=b};this.setIdentifierFns=
function(a,b){c=a;e=b;return this};this.$get=["$filter",function(f){function g(c,d,e){var g,k,C;e=e||K;switch(typeof c){case "string":C=c=c.trim();var D=e?b:a;g=D[C];if(!g){":"===c.charAt(0)&&":"===c.charAt(1)&&(k=!0,c=c.substring(2));g=e?q:I;var G=new jc(g);g=(new kc(G,f,g)).parse(c);g.constant?g.$$watchDelegate=p:k?g.$$watchDelegate=g.literal?n:m:g.inputs&&(g.$$watchDelegate=l);e&&(g=h(g));D[C]=g}return s(g,d);case "function":return s(c,d);default:return s(A,d)}}function h(a){function b(c,d,e,f){var g=
K;K=!0;try{return a(c,d,e,f)}finally{K=g}}if(!a)return a;b.$$watchDelegate=a.$$watchDelegate;b.assign=h(a.assign);b.constant=a.constant;b.literal=a.literal;for(var c=0;a.inputs&&c<a.inputs.length;++c)a.inputs[c]=h(a.inputs[c]);b.inputs=a.inputs;return b}function k(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=ic(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function l(a,b,c,d,e){var f=d.inputs,g;if(1===f.length){var h=k,f=f[0];return a.$watch(function(a){var b=f(a);k(b,h)||(g=d(a,void 0,
void 0,[b]),h=b&&ic(b));return g},b,c,e)}for(var l=[],n=[],m=0,p=f.length;m<p;m++)l[m]=k,n[m]=null;return a.$watch(function(a){for(var b=!1,c=0,e=f.length;c<e;c++){var h=f[c](a);if(b||(b=!k(h,l[c])))n[c]=h,l[c]=h&&ic(h)}b&&(g=d(a,void 0,void 0,n));return g},b,c,e)}function m(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;z(b)&&b.apply(this,arguments);x(a)&&d.$$postDigest(function(){x(f)&&e()})},c)}function n(a,b,c,d){function e(a){var b=!0;r(a,function(a){x(a)||(b=
!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;z(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function p(a,b,c,d){var e;return e=a.$watch(function(a){e();return d(a)},b,c)}function s(a,b){if(!b)return a;var c=a.$$watchDelegate,d=!1,c=c!==n&&c!==m?function(c,e,f,g){f=d&&g?g[0]:a(c,e,f,g);return b(f,c,e)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return x(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==l?c.$$watchDelegate=a.$$watchDelegate:
b.$stateful||(c.$$watchDelegate=l,d=!a.inputs,c.inputs=a.inputs?a.inputs:[a]);return c}var V=Fa().noUnsafeEval,I={csp:V,expensiveChecks:!1,literals:Z(d),isIdentifierStart:z(c)&&c,isIdentifierContinue:z(e)&&e},q={csp:V,expensiveChecks:!0,literals:Z(d),isIdentifierStart:z(c)&&c,isIdentifierContinue:z(e)&&e},K=!1;g.$$runningExpensiveChecks=function(){return K};return g}]}function wf(){this.$get=["$rootScope","$exceptionHandler",function(a,b){return wd(function(b){a.$evalAsync(b)},b)}]}function xf(){this.$get=
["$browser","$exceptionHandler",function(a,b){return wd(function(b){a.defer(b)},b)}]}function wd(a,b){function d(){this.$$state={status:0}}function c(a,b){return function(c){b.call(a,c)}}function e(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,a(function(){var a,d,e;e=c.pending;c.processScheduled=!1;c.pending=void 0;for(var f=0,g=e.length;f<g;++f){d=e[f][0];a=e[f][c.status];try{z(a)?d.resolve(a(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),b(h)}}}))}
function f(){this.promise=new d}var g=O("$q",TypeError);R(d.prototype,{then:function(a,b,c){if(w(a)&&w(b)&&w(c))return this;var d=new f;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&e(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}});R(f.prototype,{resolve:function(a){this.promise.$$state.status||(a===this.promise?
this.$$reject(g("qcycle",a)):this.$$resolve(a))},$$resolve:function(a){function d(a){k||(k=!0,h.$$resolve(a))}function f(a){k||(k=!0,h.$$reject(a))}var g,h=this,k=!1;try{if(H(a)||z(a))g=a&&a.then;z(g)?(this.promise.$$state.status=-1,g.call(a,d,f,c(this,this.notify))):(this.promise.$$state.value=a,this.promise.$$state.status=1,e(this.promise.$$state))}catch(l){f(l),b(l)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=
2;e(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&a(function(){for(var a,e,f=0,g=d.length;f<g;f++){e=d[f][0];a=d[f][3];try{e.notify(z(a)?a(c):c)}catch(h){b(h)}}})}});var h=function(a,b){var c=new f;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{z(c)&&(d=c())}catch(e){return h(e,!1)}return d&&z(d.then)?d.then(function(){return h(a,b)},function(a){return h(a,!1)}):h(a,b)},l=function(a,b,c,d){var e=
new f;e.resolve(a);return e.promise.then(b,c,d)},m=function(a){if(!z(a))throw g("norslvr",a);var b=new f;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};m.prototype=d.prototype;m.defer=function(){var a=new f;a.resolve=c(a,a.resolve);a.reject=c(a,a.reject);a.notify=c(a,a.notify);return a};m.reject=function(a){var b=new f;b.reject(a);return b.promise};m.when=l;m.resolve=l;m.all=function(a){var b=new f,c=0,d=J(a)?[]:{};r(a,function(a,e){c++;l(a).then(function(a){d.hasOwnProperty(e)||
(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return m}function Gf(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function vf(){function a(a){function b(){this.$$watchers=
this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++pb;this.$$ChildScope=null}b.prototype=a;return b}var b=10,d=O("$rootScope"),c=null,e=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(f,g,h){function k(a){a.currentScope.$$destroyed=!0}function l(a){9===Ba&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=
a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++pb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function n(a){if(K.$$phase)throw d("inprog",K.$$phase);K.$$phase=a}function p(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function s(a,b,c){do a.$$listenerCount[c]-=
b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function t(){}function I(){for(;y.length;)try{y.shift()()}catch(a){f(a)}e=null}function q(){null===e&&(e=h.defer(function(){K.$apply(I)}))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=
d;(b||c!=this)&&d.$on("$destroy",k);return d},$watch:function(a,b,d,e){var f=g(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l={fn:b,last:t,get:f,exp:e||a,eq:!!d};c=null;z(b)||(l.fn=A);k||(k=h.$$watchers=[]);k.unshift(l);p(this,1);return function(){0<=$a(k,l)&&p(h,-1);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&
b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});r(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!w(e)){if(H(e))if(oa(e))for(f!==n&&(f=n,q=f.length=0,l++),a=e.length,q!==a&&(l++,f.length=q=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==
p&&(f=p={},q=0,l++);a=0;for(b in e)sa.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(q++,f[b]=g,l++));if(q>a)for(b in l++,f)sa.call(e,b)||(q--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=g(a,c),n=[],p={},s=!0,q=0;return this.$watch(m,function(){s?(s=!1,b(e,e,d)):b(e,h,d);if(k)if(H(e))if(oa(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)sa.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,
g,k,l,m,p,s,q,r=b,y,x=[],w,A;n("$digest");h.$$checkUrlChange();this===K&&null!==e&&(h.defer.cancel(e),I());c=null;do{q=!1;y=this;for(p=0;p<v.length;p++){try{A=v[p],A.scope.$eval(A.expression,A.locals)}catch(E){f(E)}c=null}v.length=0;a:do{if(p=y.$$watchers)for(s=p.length;s--;)try{if(a=p[s])if(m=a.get,(g=m(y))!==(k=a.last)&&!(a.eq?na(g,k):"number"===typeof g&&"number"===typeof k&&isNaN(g)&&isNaN(k)))q=!0,c=a,a.last=a.eq?Z(g,null):g,l=a.fn,l(g,k===t?g:k,y),5>r&&(w=4-r,x[w]||(x[w]=[]),x[w].push({msg:z(a.exp)?
"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:k}));else if(a===c){q=!1;break a}}catch(B){f(B)}if(!(p=y.$$watchersCount&&y.$$childHead||y!==this&&y.$$nextSibling))for(;y!==this&&!(p=y.$$nextSibling);)y=y.$parent}while(y=p);if((q||v.length)&&!r--)throw K.$$phase=null,d("infdig",b,x);}while(q||v.length);for(K.$$phase=null;P<u.length;)try{u[P++]()}catch(F){f(F)}u.length=P=0},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===
K&&h.$$applicationDestroyed();p(this,-this.$$watchersCount);for(var b in this.$$listenerCount)s(this,this.$$listenerCount[b],b);a&&a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=A;this.$on=this.$watch=this.$watchGroup=
function(){return A};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){K.$$phase||v.length||h.defer(function(){v.length&&K.$digest()});v.push({scope:this,expression:g(a),locals:b})},$$postDigest:function(a){u.push(a)},$apply:function(a){try{n("$apply");try{return this.$eval(a)}finally{K.$$phase=null}}catch(b){f(b)}finally{try{K.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&y.push(b);
a=g(a);q()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,s(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=ab([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=
e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){f(n)}else d.splice(l,1),l--,m--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=ab([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,
1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var K=new m,v=K.$$asyncQueue=[],u=K.$$postDigestQueue=[],y=K.$$applyAsyncQueue=[],P=0;return K}]}function oe(){var a=/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return x(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return x(a)?(b=a,this):b};
this.$get=function(){return function(d,c){var e=c?b:a,f;f=qa(d).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function og(a){if("self"===a)return a;if(F(a)){if(-1<a.indexOf("***"))throw ya("iwcard",a);a=xd(a).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+a+"$")}if(Xa(a))return new RegExp("^"+a.source+"$");throw ya("imatcher");}function yd(a){var b=[];x(a)&&r(a,function(a){b.push(og(a))});return b}function zf(){this.SCE_CONTEXTS=ma;var a=["self"],b=[];this.resourceUrlWhitelist=
function(b){arguments.length&&(a=yd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=yd(a));return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?jd(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw ya("unsafe");
};d.has("$sanitize")&&(f=d.get("$sanitize"));var g=e(),h={};h[ma.HTML]=e(g);h[ma.CSS]=e(g);h[ma.URL]=e(g);h[ma.JS]=e(g);h[ma.RESOURCE_URL]=e(h[ma.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw ya("icontext",a,b);if(null===b||w(b)||""===b)return b;if("string"!==typeof b)throw ya("itype",a);return new c(b)},getTrusted:function(d,e){if(null===e||w(e)||""===e)return e;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(d===ma.RESOURCE_URL){var g=
qa(e.toString()),n,p,s=!1;n=0;for(p=a.length;n<p;n++)if(c(a[n],g)){s=!0;break}if(s)for(n=0,p=b.length;n<p;n++)if(c(b[n],g)){s=!1;break}if(s)return e;throw ya("insecurl",e.toString());}if(d===ma.HTML)return f(e);throw ya("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function yf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Ba)throw ya("iequirks");var c=ga(ma);c.isEnabled=function(){return a};
c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Ya);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,f=c.getTrusted,g=c.trustAs;r(ma,function(a,b){var d=M(b);c[eb("parse_as_"+d)]=function(b){return e(a,b)};c[eb("get_trusted_"+d)]=function(b){return f(a,b)};c[eb("trust_as_"+d)]=function(b){return g(a,b)}});return c}]}function Af(){this.$get=["$window",
"$document",function(a,b){var d={},c=!(a.chrome&&a.chrome.app&&a.chrome.app.runtime)&&a.history&&a.history.pushState,e=aa((/android (\d+)/.exec(M((a.navigator||{}).userAgent))||[])[1]),f=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},h,k=/^(Moz|webkit|ms)(?=[A-Z])/,l=g.body&&g.body.style,m=!1,n=!1;if(l){for(var p in l)if(m=k.exec(p)){h=m[0];h=h[0].toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in l&&"webkit");m=!!("transition"in l||h+"Transition"in l);n=!!("animation"in l||h+"Animation"in
l);!e||m&&n||(m=F(l.webkitTransition),n=F(l.webkitAnimation))}return{history:!(!c||4>e||f),hasEvent:function(a){if("input"===a&&11>=Ba)return!1;if(w(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:Fa(),vendorPrefix:h,transitions:m,animations:n,android:e}}]}function Cf(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$templateCache","$http","$q","$sce",function(b,d,c,e){function f(g,h){f.totalPendingRequests++;if(!F(g)||w(b.get(g)))g=e.getTrustedResourceUrl(g);
var k=d.defaults&&d.defaults.transformResponse;J(k)?k=k.filter(function(a){return a!==dc}):k===dc&&(k=null);return d.get(g,R({cache:b,transformResponse:k},a))["finally"](function(){f.totalPendingRequests--}).then(function(a){b.put(g,a.data);return a.data},function(a){if(!h)throw pg("tpload",g,a.status,a.statusText);return c.reject(a)})}f.totalPendingRequests=0;return f}]}function Df(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");
var g=[];r(a,function(a){var c=ea.element(a).data("$binding");c&&r(c,function(c){d?(new RegExp("(^|\\s)"+xd(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!=c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+'"]');if(k.length)return k}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}
function Ef(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,k,l){z(f)||(l=k,k=f,f=A);var m=ta.call(arguments,3),n=x(l)&&!l,p=(n?c:d).defer(),s=p.promise,r;r=b.defer(function(){try{p.resolve(f.apply(null,m))}catch(b){p.reject(b),e(b)}finally{delete g[s.$$timeoutId]}n||a.$apply()},k);s.$$timeoutId=r;g[r]=p;return s}var g={};f.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):
!1};return f}]}function qa(a){Ba&&(Y.setAttribute("href",a),a=Y.href);Y.setAttribute("href",a);return{href:Y.href,protocol:Y.protocol?Y.protocol.replace(/:$/,""):"",host:Y.host,search:Y.search?Y.search.replace(/^\?/,""):"",hash:Y.hash?Y.hash.replace(/^#/,""):"",hostname:Y.hostname,port:Y.port,pathname:"/"===Y.pathname.charAt(0)?Y.pathname:"/"+Y.pathname}}function jd(a){a=F(a)?qa(a):a;return a.protocol===zd.protocol&&a.host===zd.host}function Ff(){this.$get=da(E)}function Ad(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}
var d=a[0]||{},c={},e="";return function(){var a,g,h,k,l;a=d.cookie||"";if(a!==e)for(e=a,a=e.split("; "),c={},h=0;h<a.length;h++)g=a[h],k=g.indexOf("="),0<k&&(l=b(g.substring(0,k)),w(c[l])&&(c[l]=b(g.substring(k+1))));return c}}function Jf(){this.$get=Ad}function Mc(a){function b(d,c){if(H(d)){var e={};r(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",Bd);b("date",Cd);
b("filter",qg);b("json",rg);b("limitTo",sg);b("lowercase",tg);b("number",Dd);b("orderBy",Ed);b("uppercase",ug)}function qg(){return function(a,b,d){if(!oa(a)){if(null==a)return a;throw O("filter")("notarray",a);}var c;switch(lc(b)){case "function":break;case "boolean":case "null":case "number":case "string":c=!0;case "object":b=vg(b,d,c);break;default:return a}return Array.prototype.filter.call(a,b)}}function vg(a,b,d){var c=H(a)&&"$"in a;!0===b?b=na:z(b)||(b=function(a,b){if(w(a))return!1;if(null===
a||null===b)return a===b;if(H(b)||H(a)&&!vc(a))return!1;a=M(""+a);b=M(""+b);return-1!==a.indexOf(b)});return function(e){return c&&!H(e)?La(e,a.$,b,!1):La(e,a,b,d)}}function La(a,b,d,c,e){var f=lc(a),g=lc(b);if("string"===g&&"!"===b.charAt(0))return!La(a,b.substring(1),d,c);if(J(a))return a.some(function(a){return La(a,b,d,c)});switch(f){case "object":var h;if(c){for(h in a)if("$"!==h.charAt(0)&&La(a[h],b,d,!0))return!0;return e?!1:La(a,b,d,!1)}if("object"===g){for(h in b)if(e=b[h],!z(e)&&!w(e)&&
(f="$"===h,!La(f?a:a[h],e,d,f,f)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function lc(a){return null===a?"null":typeof a}function Bd(a){var b=a.NUMBER_FORMATS;return function(a,c,e){w(c)&&(c=b.CURRENCY_SYM);w(e)&&(e=b.PATTERNS[1].maxFrac);return null==a?a:Fd(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(/\u00A4/g,c)}}function Dd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Fd(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function wg(a){var b=
0,d,c,e,f,g;-1<(c=a.indexOf(Gd))&&(a=a.replace(Gd,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=a.length);for(e=0;a.charAt(e)==mc;e++);if(e==(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)==mc;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e)}c>Hd&&(d=d.splice(0,Hd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function xg(a,b,d,c){var e=a.d,f=e.length-a.i;b=w(b)?Math.min(Math.max(d,f),c):+b;d=b+a.i;c=e[d];if(0<d){e.splice(Math.max(a.i,d));for(var g=d;g<e.length;g++)e[g]=
0}else for(f=Math.max(0,f),a.i=1,e.length=Math.max(1,d=b+1),e[0]=0,g=1;g<d;g++)e[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)e.unshift(0),a.i++;e.unshift(1);a.i++}else e[d-1]++;for(;f<Math.max(0,b);f++)e.push(0);if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),a.i++}function Fd(a,b,d,c,e){if(!F(a)&&!S(a)||isNaN(a))return"";var f=!isFinite(a),g=!1,h=Math.abs(a)+"",k="";if(f)k="\u221e";else{g=wg(h);xg(g,e,b.minFrac,b.maxFrac);k=g.d;h=g.i;e=g.e;f=[];for(g=k.reduce(function(a,
b){return a&&!b},!0);0>h;)k.unshift(0),h++;0<h?f=k.splice(h,k.length):(f=k,k=[0]);h=[];for(k.length>=b.lgSize&&h.unshift(k.splice(-b.lgSize,k.length).join(""));k.length>b.gSize;)h.unshift(k.splice(-b.gSize,k.length).join(""));k.length&&h.unshift(k.join(""));k=h.join(d);f.length&&(k+=c+f.join(""));e&&(k+="e+"+e)}return 0>a&&!g?b.negPre+k+b.negSuf:b.posPre+k+b.posSuf}function Kb(a,b,d,c){var e="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,e="-");for(a=""+a;a.length<b;)a=mc+a;d&&(a=a.substr(a.length-b));return e+
a}function X(a,b,d,c,e){d=d||0;return function(f){f=f["get"+a]();if(0<d||f>-d)f+=d;0===f&&-12==d&&(f=12);return Kb(f,b,c,e)}}function kb(a,b,d){return function(c,e){var f=c["get"+a](),g=ub((d?"STANDALONE":"")+(b?"SHORT":"")+a);return e[g][f]}}function Id(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Jd(a){return function(b){var d=Id(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Kb(b,a)}}function nc(a,
b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Cd(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=aa(b[9]+b[10]),g=aa(b[9]+b[11]));h.call(a,aa(b[1]),aa(b[2])-1,aa(b[3]));f=aa(b[4]||0)-f;g=aa(b[5]||0)-g;h=aa(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,f,g,h,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
return function(c,d,f){var g="",h=[],k,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;F(c)&&(c=yg.test(c)?aa(c):b(c));S(c)&&(c=new Date(c));if(!ia(c)||!isFinite(c.getTime()))return c;for(;d;)(l=zg.exec(d))?(h=ab(h,l,1),d=h.pop()):(h.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=yc(f,m),c=Sb(c,f,!0));r(h,function(b){k=Ag[b];g+=k?k(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function rg(){return function(a,b){w(b)&&(b=2);return cb(a,b)}}function sg(){return function(a,
b,d){b=Infinity===Math.abs(Number(b))?Number(b):aa(b);if(isNaN(b))return a;S(a)&&(a=a.toString());if(!oa(a))return a;d=!d||isNaN(d)?0:aa(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?oc(a,d,d+b):0===d?oc(a,b,a.length):oc(a,Math.max(0,d+b),d)}}function oc(a,b,d){return F(a)?a.slice(b,d):ta.call(a,b,d)}function Ed(a){function b(b){return b.map(function(b){var c=1,d=Ya;if(z(b))d=b;else if(F(b)){if("+"==b.charAt(0)||"-"==b.charAt(0))c="-"==b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var e=
d(),d=function(a){return a[e]}}return{get:d,descending:c}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function c(a,b){var c=0,d=a.type,k=b.type;if(d===k){var k=a.value,l=b.value;"string"===d?(k=k.toLowerCase(),l=l.toLowerCase()):"object"===d&&(H(k)&&(k=a.index),H(l)&&(l=b.index));k!==l&&(c=k<l?-1:1)}else c=d<k?-1:1;return c}return function(a,f,g,h){if(null==a)return a;if(!oa(a))throw O("orderBy")("notarray",a);J(f)||(f=[f]);0===f.length&&
(f=["+"]);var k=b(f),l=g?-1:1,m=z(h)?h:c;a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:k.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("object"===c)a:{if(z(e.valueOf)&&(e=e.valueOf(),d(e)))break a;vc(e)&&(e=e.toString(),d(e))}return{value:e,type:c,index:b}})}});a.sort(function(a,b){for(var c=0,d=k.length;c<d;c++){var e=m(a.predicateValues[c],b.predicateValues[c]);if(e)return e*k[c].descending*
l}return m(a.tieBreaker,b.tieBreaker)*l});return a=a.map(function(a){return a.value})}}function Ma(a){z(a)&&(a={link:a});a.restrict=a.restrict||"AC";return da(a)}function Kd(a,b,d,c,e){var f=this,g=[];f.$error={};f.$$success={};f.$pending=void 0;f.$name=e(b.name||b.ngForm||"")(d);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;f.$$parentForm=Lb;f.$rollbackViewValue=function(){r(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){r(g,function(a){a.$commitViewValue()})};
f.$addControl=function(a){Ra(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a);a.$$parentForm=f};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];r(f.$pending,function(b,c){f.$setValidity(c,null,a)});r(f.$error,function(b,c){f.$setValidity(c,null,a)});r(f.$$success,function(b,c){f.$setValidity(c,null,a)});$a(g,a);a.$$parentForm=Lb};Ld({ctrl:this,$element:a,set:function(a,b,c){var d=a[b];d?
-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&($a(d,c),0===d.length&&delete a[b])},$animate:c});f.$setDirty=function(){c.removeClass(a,Va);c.addClass(a,Mb);f.$dirty=!0;f.$pristine=!1;f.$$parentForm.$setDirty()};f.$setPristine=function(){c.setClass(a,Va,Mb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;r(g,function(a){a.$setPristine()})};f.$setUntouched=function(){r(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){c.addClass(a,"ng-submitted");
f.$submitted=!0;f.$$parentForm.$setSubmitted()}}function pc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function lb(a,b,d,c,e,f){var g=M(b[0].type);if(!e.android){var h=!1;b.on("compositionstart",function(){h=!0});b.on("compositionend",function(){h=!1;l()})}var k,l=function(a){k&&(f.defer.cancel(k),k=null);if(!h){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(e=W(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",
l);else{var m=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut",m)}b.on("change",l);if(Md[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!k){var b=this.validity,c=b.badInput,d=b.typeMismatch;k=f.defer(function(){k=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?
"":c.$viewValue;b.val()!==a&&b.val(a)}}function Nb(a,b){return function(d,c){var e,f;if(ia(d))return d;if(F(d)){'"'==d.charAt(0)&&'"'==d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(Bg.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},r(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),new Date(f.yyyy,
f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function mb(a,b,d,c){return function(e,f,g,h,k,l,m){function n(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function p(a){return x(a)&&!ia(a)?d(a)||void 0:a}Nd(e,f,g,h);lb(e,f,g,h,k,l);var s=h&&h.$options&&h.$options.timezone,r;h.$$parserName=a;h.$parsers.push(function(a){if(h.$isEmpty(a))return null;if(b.test(a))return a=d(a,r),s&&(a=Sb(a,s)),a});h.$formatters.push(function(a){if(a&&!ia(a))throw nb("datefmt",a);if(n(a))return(r=a)&&
s&&(r=Sb(r,s,!0)),m("date")(a,c,s);r=null;return""});if(x(g.min)||g.ngMin){var t;h.$validators.min=function(a){return!n(a)||w(t)||d(a)>=t};g.$observe("min",function(a){t=p(a);h.$validate()})}if(x(g.max)||g.ngMax){var q;h.$validators.max=function(a){return!n(a)||w(q)||d(a)<=q};g.$observe("max",function(a){q=p(a);h.$validate()})}}}function Nd(a,b,d,c){(c.$$hasNativeValidators=H(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};return c.badInput||c.typeMismatch?void 0:a})}function Od(a,
b,d,c,e){if(x(c)){a=a(c);if(!a.constant)throw nb("constexpr",d,c);return a(b)}return e}function qc(a,b){a="ngClass"+a;return["$animate",function(d){function c(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){var b=[];return J(a)?(r(a,function(a){b=b.concat(e(a))}),b):F(a)?a.split(" "):H(a)?(r(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",link:function(f,g,h){function k(a){a=l(a,1);h.$addClass(a)}
function l(a,b){var c=g.data("$classCounts")||T(),d=[];r(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function m(a,b){var e=c(b,a),f=c(a,b),e=l(e,1),f=l(f,-1);e&&e.length&&d.addClass(g,e);f&&f.length&&d.removeClass(g,f)}function n(a){if(!0===b||(f.$index&1)===b){var c=e(a||[]);if(!p)k(c);else if(!na(a,p)){var d=e(p);m(d,c)}}p=J(a)?a.map(function(a){return ga(a)}):ga(a)}var p;f.$watch(h[a],n,!0);h.$observe("class",function(b){n(f.$eval(h[a]))});
"ngClass"!==a&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var m=e(f.$eval(h[a]));g===b?k(m):(g=l(m,-1),h.$removeClass(g))}})}}}]}function Ld(a){function b(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function d(a,c){a=a?"-"+Cc(a,"-"):"";b(ob+a,!0===c);b(Pd+a,!1===c)}var c=a.ctrl,e=a.$element,f={},g=a.set,h=a.unset,k=a.$animate;f[Pd]=!(f[ob]=e.hasClass(ob));c.$setValidity=function(a,e,f){w(e)?(c.$pending||(c.$pending={}),g(c.$pending,a,f)):(c.$pending&&
h(c.$pending,a,f),Qd(c.$pending)&&(c.$pending=void 0));Ea(e)?e?(h(c.$error,a,f),g(c.$$success,a,f)):(g(c.$error,a,f),h(c.$$success,a,f)):(h(c.$error,a,f),h(c.$$success,a,f));c.$pending?(b(Rd,!0),c.$valid=c.$invalid=void 0,d("",null)):(b(Rd,!1),c.$valid=Qd(c.$error),c.$invalid=!c.$valid,d("",c.$valid));e=c.$pending&&c.$pending[a]?void 0:c.$error[a]?!1:c.$$success[a]?!0:null;d(a,e);c.$$parentForm.$setValidity(a,e,c)}}function Qd(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}var Cg=
/^\/(.+)\/([a-z]*)$/,sa=Object.prototype.hasOwnProperty,M=function(a){return F(a)?a.toLowerCase():a},ub=function(a){return F(a)?a.toUpperCase():a},Ba,B,pa,ta=[].slice,bg=[].splice,Dg=[].push,ka=Object.prototype.toString,wc=Object.getPrototypeOf,za=O("ng"),ea=E.angular||(E.angular={}),Ub,pb=0;Ba=E.document.documentMode;A.$inject=[];Ya.$inject=[];var J=Array.isArray,be=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,W=function(a){return F(a)?a.trim():a},xd=
function(a){return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Fa=function(){if(!x(Fa.rules)){var a=E.document.querySelector("[ng-csp]")||E.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Fa.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=Fa;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Fa.rules},
rb=function(){if(x(rb.name_))return rb.name_;var a,b,d=Oa.length,c,e;for(b=0;b<d;++b)if(c=Oa[b],a=E.document.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+"jq");break}return rb.name_=e},ee=/:/g,Oa=["ng-","data-ng-","ng:","x-ng-"],je=/[A-Z]/g,Dc=!1,Na=3,ne={full:"1.5.7",major:1,minor:5,dot:7,codeName:"hexagonal-circumvolution"};U.expando="ng339";var gb=U.cache={},Pf=1;U._data=function(a){return this.cache[a[this.expando]]||{}};var Kf=/([\:\-\_]+(.))/g,Lf=/^moz([A-Z])/,yb={mouseleave:"mouseout",
mouseenter:"mouseover"},Wb=O("jqLite"),Of=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Vb=/<|&#?\w+;/,Mf=/<([\w:-]+)/,Nf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,ha={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ha.optgroup=ha.option;ha.tbody=ha.tfoot=ha.colgroup=ha.caption=ha.thead;
ha.th=ha.td;var Uf=E.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Pa=U.prototype={ready:function(a){function b(){d||(d=!0,a())}var d=!1;"complete"===E.document.readyState?E.setTimeout(b):(this.on("DOMContentLoaded",b),U(E).on("load",b))},toString:function(){var a=[];r(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?B(this[a]):B(this[this.length+a])},length:0,push:Dg,sort:[].sort,splice:[].splice},Eb={};r("multiple selected checked disabled readOnly required open".split(" "),
function(a){Eb[M(a)]=a});var Vc={};r("input select option textarea button form details".split(" "),function(a){Vc[a]=!0});var cd={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};r({data:Yb,removeData:fb,hasData:function(a){for(var b in gb[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)fb(a[b])}},function(a,b){U[b]=a});r({data:Yb,inheritedData:Cb,scope:function(a){return B.data(a,"$scope")||Cb(a.parentNode||a,["$isolateScope",
"$scope"])},isolateScope:function(a){return B.data(a,"$isolateScope")||B.data(a,"$isolateScopeNoTemplate")},controller:Sc,injector:function(a){return Cb(a,"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:zb,css:function(a,b,d){b=eb(b);if(x(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Na&&2!==c&&8!==c)if(c=M(b),Eb[c])if(x(d))d?(a[b]=!0,a.setAttribute(b,c)):(a[b]=!1,a.removeAttribute(c));else return a[b]||(a.attributes.getNamedItem(b)||A).specified?
c:void 0;else if(x(d))a.setAttribute(b,d);else if(a.getAttribute)return a=a.getAttribute(b,2),null===a?void 0:a},prop:function(a,b,d){if(x(d))a[b]=d;else return a[b]},text:function(){function a(a,d){if(w(d)){var c=a.nodeType;return 1===c||c===Na?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(w(b)){if(a.multiple&&"select"===ua(a)){var d=[];r(a.options,function(a){a.selected&&d.push(a.value||a.text)});return 0===d.length?null:d}return a.value}a.value=b},html:function(a,b){if(w(b))return a.innerHTML;
wb(a,!0);a.innerHTML=b},empty:Tc},function(a,b){U.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==Tc&&w(2==a.length&&a!==zb&&a!==Sc?b:c)){if(H(b)){for(e=0;e<g;e++)if(a===Yb)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=a.$dv;g=w(e)?Math.min(g,1):g;for(f=0;f<g;f++){var h=a(this[f],b,c);e=e?e+h:h}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});r({removeData:fb,on:function(a,b,d,c){if(x(c))throw Wb("onargs");if(Nc(a)){c=xb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=
Rf(a,e));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,h=function(b,c,g){var h=e[b];h||(h=e[b]=[],h.specialHandlerWrapper=c,"$destroy"===b||g||a.addEventListener(b,f,!1));h.push(d)};g--;)b=c[g],yb[b]?(h(yb[b],Tf),h(b,void 0,!0)):h(b)}},off:Rc,one:function(a,b,d){a=B(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;wb(a);r(new U(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];
r(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=a.nodeType;if(1===d||11===d){b=new U(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;r(new U(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){Pc(a,B(b).eq(0).clone()[0])},remove:Db,detach:function(a){Db(a,!0)},after:function(a,b){var d=a,c=a.parentNode;b=new U(b);for(var e=
0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}},addClass:Bb,removeClass:Ab,toggleClass:function(a,b,d){b&&r(b.split(" "),function(b){var e=d;w(e)&&(e=!zb(a,b));(e?Bb:Ab)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:Xb,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=xb(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function(){this.defaultPrevented=
!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:A,type:f,target:a},b.type&&(c=R(c,b)),b=ga(g),e=d?[c].concat(d):[c],r(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){U.prototype[b]=function(b,c,e){for(var f,g=0,h=this.length;g<h;g++)w(f)?(f=a(this[g],b,c,e),x(f)&&(f=B(f))):
Qc(f,a(this[g],b,c,e));return x(f)?f:this};U.prototype.bind=U.prototype.on;U.prototype.unbind=U.prototype.off});Sa.prototype={put:function(a,b){this[Ga(a,this.nextUid)]=b},get:function(a){return this[Ga(a,this.nextUid)]},remove:function(a){var b=this[a=Ga(a,this.nextUid)];delete this[a];return b}};var If=[function(){this.$get=[function(){return Sa}]}],Wf=/^([^\(]+?)=>/,Xf=/^[^\(]*\(\s*([^\)]*)\)/m,Eg=/,/,Fg=/^\s*(_?)(\S+?)\1\s*$/,Vf=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ha=O("$injector");db.$$annotate=
function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw F(d)&&d||(d=a.name||Yf(a)),Ha("strictdi",d);b=Wc(a);r(b[1].split(Eg),function(a){a.replace(Fg,function(a,b,d){c.push(d)})})}a.$inject=c}}else J(a)?(b=a.length-1,Qa(a[b],"fn"),c=a.slice(0,b)):Qa(a,"fn",!0);return c};var Sd=O("$animate"),af=function(){this.$get=A},bf=function(){var a=new Sa,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=F(b)?b.split(" "):J(b)?
b:[],r(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){r(b,function(b){var c=a.get(b);if(c){var d=Zf(b.attr("class")),e="",f="";r(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});r(b,function(a){e&&Bb(a,e);f&&Ab(a,f)});a.remove(b)}});b.length=0}return{enabled:A,on:A,off:A,pin:A,push:function(g,h,k,l){l&&l();k=k||{};k.from&&g.css(k.from);k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(h=k.addClass,l=k.removeClass,k=a.get(g)||{},h=e(k,h,!0),l=e(k,l,!1),h||l)a.put(g,
k),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();return g}}}]},Ze=["$provide",function(a){var b=this;this.$$registeredAnimations=Object.create(null);this.register=function(d,c){if(d&&"."!==d.charAt(0))throw Sd("notcsel",d);var e=d+"-animation";b.$$registeredAnimations[d.substr(1)]=e;a.factory(e,c)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Sd("nongcls",
"ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var h;a:{for(h=0;h<d.length;h++){var k=d[h];if(1===k.nodeType){h=k;break a}}h=void 0}!h||h.parentNode||h.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(e,f,g,h){f=f&&B(f);g=g&&B(g);f=f||g.parent();b(e,f,g);return a.push(e,"enter",Ia(h))},move:function(e,f,g,h){f=f&&B(f);g=g&&B(g);
f=f||g.parent();b(e,f,g);return a.push(e,"move",Ia(h))},leave:function(b,c){return a.push(b,"leave",Ia(c),function(){b.remove()})},addClass:function(b,c,g){g=Ia(g);g.addClass=hb(g.addclass,c);return a.push(b,"addClass",g)},removeClass:function(b,c,g){g=Ia(g);g.removeClass=hb(g.removeClass,c);return a.push(b,"removeClass",g)},setClass:function(b,c,g,h){h=Ia(h);h.addClass=hb(h.addClass,c);h.removeClass=hb(h.removeClass,g);return a.push(b,"setClass",h)},animate:function(b,c,g,h,k){k=Ia(k);k.from=k.from?
R(k.from,c):c;k.to=k.to?R(k.to,g):g;k.tempClasses=hb(k.tempClasses,h||"ng-inline-animate");return a.push(b,"animate",k)}}}]}],df=function(){this.$get=["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},cf=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$document","$timeout",function(a,b,d,c,e){function f(a){this.setHost(a);var b=d();this._doneCallbacks=
[];this._tick=function(a){var d=c[0];d&&d.hidden?e(a,0,!1):b(a)};this._state=0}f.chain=function(a,b){function c(){if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};f.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;r(a,function(a){a.done(c)})};f.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:A,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,
c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=
this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(r(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return f}]},$e=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);h||k.complete();h=!0});return k}
var g=e||{};g.$$prepared||(g=Z(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var h,k=new d;return{start:f,end:f}}}]},fa=O("$compile"),bc=new function(){};Fc.$inject=["$provide","$$sanitizeUriProvider"];Fb.prototype.isFirstChange=function(){return this.previousValue===bc};var Yc=/^((?:x|data)[\:\-_])/i,cg=O("$controller"),dd=/^(\S+)(\s+as\s+([\w$]+))?$/,kf=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof B&&(b=b[0]):b=a[0].body;
return b.offsetWidth+1}}]},ed="application/json",ec={"Content-Type":ed+";charset=utf-8"},eg=/^\[|^\{(?!\{)/,fg={"[":/]$/,"{":/}$/},dg=/^\)\]\}',?\n/,Gg=O("$http"),id=function(a){return function(){throw Gg("legacy",a);}},Ka=ea.$interpolateMinErr=O("$interpolate");Ka.throwNoconcat=function(a){throw Ka("noconcat",a);};Ka.interr=function(a,b){return Ka("interr",a,b.toString())};var Hg=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,hg={http:80,https:443,ftp:21},Gb=O("$location"),Ig={$$absUrl:"",$$html5:!1,$$replace:!1,
absUrl:Hb("$$absUrl"),url:function(a){if(w(a))return this.$$url;var b=Hg.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Hb("$$protocol"),host:Hb("$$host"),port:Hb("$$port"),path:nd("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(F(a)||S(a))a=a.toString(),this.$$search=Ac(a);else if(H(a))a=
Z(a,{}),r(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw Gb("isrcharg");break;default:w(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:nd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};r([md,hc,gc],function(a){a.prototype=Object.create(Ig);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==gc||!this.$$html5)throw Gb("nostate");this.$$state=w(b)?null:
b;return this}});var ca=O("$parse"),jg=Function.prototype.call,kg=Function.prototype.apply,lg=Function.prototype.bind,Ob=T();r("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Ob[a]=!0});var Jg={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},jc=function(a){this.options=a};jc.prototype={constructor:jc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||
"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Ob[b],e=Ob[d];Ob[a]||c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},
is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=
a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=
a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=x(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw ca("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=M(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"==d&&this.isExpOperator(c))a+=
d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,
text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,16))):d+=Jg[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,
value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var t=function(a,b){this.lexer=a;this.options=b};t.Program="Program";t.ExpressionStatement="ExpressionStatement";t.AssignmentExpression="AssignmentExpression";t.ConditionalExpression="ConditionalExpression";t.LogicalExpression="LogicalExpression";t.BinaryExpression="BinaryExpression";t.UnaryExpression="UnaryExpression";t.CallExpression="CallExpression";t.MemberExpression="MemberExpression";t.Identifier="Identifier";t.Literal=
"Literal";t.ArrayExpression="ArrayExpression";t.Property="Property";t.ObjectExpression="ObjectExpression";t.ThisExpression="ThisExpression";t.LocalsExpression="LocalsExpression";t.NGValueParameter="NGValueParameter";t.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),
!this.expect(";"))return{type:t.Program,body:a}},expressionStatement:function(){return{type:t.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();this.expect("=")&&(a={type:t.AssignmentExpression,left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&
(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:t.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:t.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:t.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=",
"===","!==");)a={type:t.BinaryExpression,operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:t.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:t.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*",
"/","%");)a={type:t.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:t.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=Z(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?
a={type:t.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:t.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:t.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:t.MemberExpression,object:a,
property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:t.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.filterChain());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:t.Identifier,name:a.text}},
constant:function(){return{type:t.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:t.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:t.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):
this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):this.throwError("invalid key",this.peek());a.push(b)}while(this.expect(","))}this.consume("}");return{type:t.ObjectExpression,properties:a}},throwError:function(a,b){throw ca("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));
},consume:function(a){if(0===this.tokens.length)throw ca("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw ca("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,e){if(this.tokens.length>a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=
this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:t.ThisExpression},$locals:{type:t.LocalsExpression}}};ud.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:b,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};$(c,d.$filter);var e="",f;this.stage="assign";if(f=sd(c))this.state.computing="assign",e=this.nextId(),this.recurse(f,e),this.return_(e),e="fn.assign="+this.generateFunction("assign",
"s,v,l");f=qd(c.body);d.stage="inputs";r(f,function(a,b){var c="fn"+b;d.state[c]={vars:[],body:[],own:{}};d.state.computing=c;var e=d.nextId();d.recurse(a,e);d.return_(e);d.state.inputs.push(c);a.watchId=b});this.state.computing="fn";this.stage="main";this.recurse(c);e='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+e+this.watchFns()+"return fn;";e=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","getStringValue",
"ensureSafeAssignContext","ifDefined","plus","text",e))(this.$filter,Ua,ra,od,ig,Ib,mg,pd,a);this.state=this.stage=void 0;e.literal=td(c);e.constant=c.constant;return e},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;r(b,function(b){a.push("var "+b+"="+d.generateFunction(b,"s"))});b.length&&a.push("fn.inputs=["+b.join(",")+"];");return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=
[],b=this;r(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,d,c,e,f){var g,h,k=this,l,m,n;c=c||A;if(!f&&x(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case t.Program:r(a.body,
function(b,c){k.recurse(b.expression,void 0,void 0,function(a){h=a});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h)});break;case t.Literal:m=this.escape(a.value);this.assign(b,m);c(m);break;case t.UnaryExpression:this.recurse(a.argument,void 0,void 0,function(a){h=a});m=a.operator+"("+this.ifDefined(h,0)+")";this.assign(b,m);c(m);break;case t.BinaryExpression:this.recurse(a.left,void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){h=a});m="+"===a.operator?
this.plus(g,h):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(h,0):"("+g+")"+a.operator+"("+h+")";this.assign(b,m);c(m);break;case t.LogicalExpression:b=b||this.nextId();k.recurse(a.left,b);k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,b));c(b);break;case t.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));c(b);break;case t.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),
this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);Ua(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){e&&1!==e&&k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",a.name))})},b&&k.lazyAssign(b,k.nonComputedMember("l",a.name)));(k.state.expensiveChecks||Jb(a.name))&&k.addEnsureSafeObject(b);c(b);break;case t.MemberExpression:g=
d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();k.recurse(a.object,g,void 0,function(){k.if_(k.notNull(g),function(){e&&1!==e&&k.addEnsureSafeAssignContext(g);if(a.computed)h=k.nextId(),k.recurse(a.property,h),k.getStringValue(h),k.addEnsureSafeMemberName(h),e&&1!==e&&k.if_(k.not(k.computedMember(g,h)),k.lazyAssign(k.computedMember(g,h),"{}")),m=k.ensureSafeObject(k.computedMember(g,h)),k.assign(b,m),d&&(d.computed=!0,d.name=h);else{Ua(a.property.name);e&&1!==e&&k.if_(k.not(k.nonComputedMember(g,
a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}"));m=k.nonComputedMember(g,a.property.name);if(k.state.expensiveChecks||Jb(a.property.name))m=k.ensureSafeObject(m);k.assign(b,m);d&&(d.computed=!1,d.name=a.property.name)}},function(){k.assign(b,"undefined")});c(b)},!!e);break;case t.CallExpression:b=b||this.nextId();a.filter?(h=k.filter(a.callee.name),l=[],r(a.arguments,function(a){var b=k.nextId();k.recurse(a,b);l.push(b)}),m=h+"("+l.join(",")+")",k.assign(b,m),c(b)):(h=
k.nextId(),g={},l=[],k.recurse(a.callee,h,g,function(){k.if_(k.notNull(h),function(){k.addEnsureSafeFunction(h);r(a.arguments,function(a){k.recurse(a,k.nextId(),void 0,function(a){l.push(k.ensureSafeObject(a))})});g.name?(k.state.expensiveChecks||k.addEnsureSafeObject(g.context),m=k.member(g.context,g.name,g.computed)+"("+l.join(",")+")"):m=h+"("+l.join(",")+")";m=k.ensureSafeObject(m);k.assign(b,m)},function(){k.assign(b,"undefined")});c(b)}));break;case t.AssignmentExpression:h=this.nextId();g=
{};if(!rd(a.left))throw ca("lval");this.recurse(a.left,void 0,g,function(){k.if_(k.notNull(g.context),function(){k.recurse(a.right,h);k.addEnsureSafeObject(k.member(g.context,g.name,g.computed));k.addEnsureSafeAssignContext(g.context);m=k.member(g.context,g.name,g.computed)+a.operator+h;k.assign(b,m);c(b||m)})},1);break;case t.ArrayExpression:l=[];r(a.elements,function(a){k.recurse(a,k.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(m);break;case t.ObjectExpression:l=
[];n=!1;r(a.properties,function(a){a.computed&&(n=!0)});n?(b=b||this.nextId(),this.assign(b,"{}"),r(a.properties,function(a){a.computed?(g=k.nextId(),k.recurse(a.key,g)):g=a.key.type===t.Identifier?a.key.name:""+a.key.value;h=k.nextId();k.recurse(a.value,h);k.assign(k.member(b,g,a.computed),h)})):(r(a.properties,function(b){k.recurse(b.value,a.constant?void 0:k.nextId(),void 0,function(a){l.push(k.escape(b.key.type===t.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,
m));c(b||m);break;case t.ThisExpression:this.assign(b,"s");c("s");break;case t.LocalsExpression:this.assign(b,"l");c("l");break;case t.NGValueParameter:this.assign(b,"v"),c("v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));
return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/[$_a-zA-Z][$_a-zA-Z0-9]*/.test(b)?
a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),";")},addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},addEnsureSafeAssignContext:function(a){this.current().body.push(this.ensureSafeAssignContext(a),
";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},ensureSafeAssignContext:function(a){return"ensureSafeAssignContext("+a+",text)"},lazyRecurse:function(a,b,d,c,e,f){var g=this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,
b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(F(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(S(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw ca("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};
vd.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=b;$(c,d.$filter);var e,f;if(e=sd(c))f=this.recurse(e);e=qd(c.body);var g;e&&(g=[],r(e,function(a,b){var c=d.recurse(a);a.input=c;g.push(c);a.watchId=b}));var h=[];r(c.body,function(a){h.push(d.recurse(a.expression))});e=0===c.body.length?A:1===c.body.length?h[0]:function(a,b){var c;r(h,function(d){c=d(a,b)});return c};f&&(e.assign=function(a,b,c){return f(a,c,b)});g&&(e.inputs=g);e.literal=
td(c);e.constant=c.constant;return e},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case t.Literal:return this.value(a.value,b);case t.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case t.BinaryExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case t.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case t.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),
this.recurse(a.alternate),this.recurse(a.consequent),b);case t.Identifier:return Ua(a.name,f.expression),f.identifier(a.name,f.expensiveChecks||Jb(a.name),b,d,f.expression);case t.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(Ua(a.property.name,f.expression),e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d,f.expression):this.nonComputedMember(c,e,f.expensiveChecks,b,d,f.expression);case t.CallExpression:return g=[],r(a.arguments,
function(a){g.push(f.recurse(a))}),a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var n=[],p=0;p<g.length;++p)n.push(g[p](a,c,d,f));a=e.apply(void 0,n,f);return b?{context:void 0,name:void 0,value:a}:a}:function(a,c,d,m){var n=e(a,c,d,m),p;if(null!=n.value){ra(n.context,f.expression);od(n.value,f.expression);p=[];for(var s=0;s<g.length;++s)p.push(ra(g[s](a,c,d,m),f.expression));p=ra(n.value.apply(n.context,p),f.expression)}return b?
{value:p}:p};case t.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,g,m){var n=c(a,d,g,m);a=e(a,d,g,m);ra(n.value,f.expression);Ib(n.context);n.context[n.name]=a;return b?{value:a}:a};case t.ArrayExpression:return g=[],r(a.elements,function(a){g.push(f.recurse(a))}),function(a,c,d,e){for(var f=[],p=0;p<g.length;++p)f.push(g[p](a,c,d,e));return b?{value:f}:f};case t.ObjectExpression:return g=[],r(a.properties,function(a){a.computed?g.push({key:f.recurse(a.key),
computed:!0,value:f.recurse(a.value)}):g.push({key:a.key.type===t.Identifier?a.key.name:""+a.key.value,computed:!1,value:f.recurse(a.value)})}),function(a,c,d,e){for(var f={},p=0;p<g.length;++p)g[p].computed?f[g[p].key(a,c,d,e)]=g[p].value(a,c,d,e):f[g[p].key]=g[p].value(a,c,d,e);return b?{value:f}:f};case t.ThisExpression:return function(a){return b?{value:a}:a};case t.LocalsExpression:return function(a,c){return b?{value:c}:c};case t.NGValueParameter:return function(a,c,d){return b?{value:d}:d}}},
"unary+":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=x(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=x(d)?-d:0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=pd(h,c);return d?{value:h}:h}},"binary-":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=(x(h)?h:0)-(x(c)?c:0);return d?
{value:h}:h}},"binary*":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:
c}},"binary==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,
b,d){return function(c,e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,h){e=a(e,f,g,h)?b(e,f,g,h):d(e,f,g,h);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:void 0,name:void 0,value:a}:a}},identifier:function(a,
b,d,c,e){return function(f,g,h,k){f=g&&a in g?g:f;c&&1!==c&&f&&!f[a]&&(f[a]={});g=f?f[a]:void 0;b&&ra(g,e);return d?{context:f,name:a,value:g}:g}},computedMember:function(a,b,d,c,e){return function(f,g,h,k){var l=a(f,g,h,k),m,n;null!=l&&(m=b(f,g,h,k),m+="",Ua(m,e),c&&1!==c&&(Ib(l),l&&!l[m]&&(l[m]={})),n=l[m],ra(n,e));return d?{context:l,name:m,value:n}:n}},nonComputedMember:function(a,b,d,c,e,f){return function(g,h,k,l){g=a(g,h,k,l);e&&1!==e&&(Ib(g),g&&!g[b]&&(g[b]={}));h=null!=g?g[b]:void 0;(d||
Jb(b))&&ra(h,f);return c?{context:g,name:b,value:h}:h}},inputs:function(a,b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};var kc=function(a,b,d){this.lexer=a;this.$filter=b;this.options=d;this.ast=new t(a,d);this.astCompiler=d.csp?new vd(this.ast,b):new ud(this.ast,b)};kc.prototype={constructor:kc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};var ng=Object.prototype.valueOf,ya=O("$sce"),ma={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},
pg=O("$compile"),Y=E.document.createElement("a"),zd=qa(E.location.href);Ad.$inject=["$document"];Mc.$inject=["$provide"];var Hd=22,Gd=".",mc="0";Bd.$inject=["$locale"];Dd.$inject=["$locale"];var Ag={yyyy:X("FullYear",4,0,!1,!0),yy:X("FullYear",2,0,!0,!0),y:X("FullYear",1,0,!1,!0),MMMM:kb("Month"),MMM:kb("Month",!0),MM:X("Month",2,1),M:X("Month",1,1),LLLL:kb("Month",!1,!0),dd:X("Date",2),d:X("Date",1),HH:X("Hours",2),H:X("Hours",1),hh:X("Hours",2,-12),h:X("Hours",1,-12),mm:X("Minutes",2),m:X("Minutes",
1),ss:X("Seconds",2),s:X("Seconds",1),sss:X("Milliseconds",3),EEEE:kb("Day"),EEE:kb("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Kb(Math[0<a?"floor":"ceil"](a/60),2)+Kb(Math.abs(a%60),2))},ww:Jd(2),w:Jd(1),G:nc,GG:nc,GGG:nc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},zg=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,yg=/^\-?\d+$/;Cd.$inject=["$locale"];
var tg=da(M),ug=da(ub);Ed.$inject=["$parse"];var pe=da({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===ka.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),vb={};r(Eb,function(a,b){function d(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a)})}if("multiple"!=a){var c=xa("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,
e)});vb[c]=function(){return{restrict:"A",priority:100,link:e}}}});r(cd,function(a,b){vb[b]=function(){return{priority:100,link:function(a,c,e){if("ngPattern"===b&&"/"==e.ngPattern.charAt(0)&&(c=e.ngPattern.match(Cg))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});r(["src","srcset","href"],function(a){var b=xa("ng-"+a);vb[b]=function(){return{priority:99,link:function(d,c,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===ka.call(c.prop("href"))&&
(g="xlinkHref",e.$attr[g]="xlink:href",f=null);e.$observe(b,function(b){b?(e.$set(g,b),Ba&&f&&c.prop(f,e[g])):"href"===a&&e.$set(g,null)})}}}});var Lb={$addControl:A,$$renameControl:function(a,b){a.$name=b},$removeControl:A,$setValidity:A,$setDirty:A,$setPristine:A,$setSubmitted:A};Kd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Td=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||A}return{name:"form",restrict:a?
"EAC":"E",require:["form","^^?form"],controller:Kd,compile:function(d,f){d.addClass(Va).addClass(ob);var g=f.name?"name":a&&f.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var n=f[0];if(!("action"in e)){var p=function(b){a.$apply(function(){n.$commitViewValue();n.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",p,!1);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",p,!1)},0,!1)})}(f[1]||n.$$parentForm).$addControl(n);var s=g?c(n.$name):A;g&&(s(a,n),e.$observe(g,
function(b){n.$name!==b&&(s(a,void 0),n.$$parentForm.$$renameControl(n,b),s=c(n.$name),s(a,n))}));d.on("$destroy",function(){n.$$parentForm.$removeControl(n);s(a,void 0);R(n,Lb)})}}}}}]},qe=Td(),De=Td(!0),Bg=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,Kg=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,Lg=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
Mg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Ud=/^(\d{4,})-(\d{2})-(\d{2})$/,Vd=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,rc=/^(\d{4,})-W(\d\d)$/,Wd=/^(\d{4,})-(\d\d)$/,Xd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Md=T();r(["date","datetime-local","month","time","week"],function(a){Md[a]=!0});var Yd={text:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);pc(c)},date:mb("date",Ud,Nb(Ud,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":mb("datetimelocal",Vd,Nb(Vd,"yyyy MM dd HH mm ss sss".split(" ")),
"yyyy-MM-ddTHH:mm:ss.sss"),time:mb("time",Xd,Nb(Xd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:mb("week",rc,function(a,b){if(ia(a))return a;if(F(a)){rc.lastIndex=0;var d=rc.exec(a);if(d){var c=+d[1],e=+d[2],f=d=0,g=0,h=0,k=Id(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());return new Date(c,0,k.getDate()+e,d,f,g,h)}}return NaN},"yyyy-Www"),month:mb("month",Wd,Nb(Wd,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f){Nd(a,b,d,c);lb(a,b,d,c,e,f);c.$$parserName=
"number";c.$parsers.push(function(a){if(c.$isEmpty(a))return null;if(Mg.test(a))return parseFloat(a)});c.$formatters.push(function(a){if(!c.$isEmpty(a)){if(!S(a))throw nb("numfmt",a);a=a.toString()}return a});if(x(d.min)||d.ngMin){var g;c.$validators.min=function(a){return c.$isEmpty(a)||w(g)||a>=g};d.$observe("min",function(a){x(a)&&!S(a)&&(a=parseFloat(a,10));g=S(a)&&!isNaN(a)?a:void 0;c.$validate()})}if(x(d.max)||d.ngMax){var h;c.$validators.max=function(a){return c.$isEmpty(a)||w(h)||a<=h};d.$observe("max",
function(a){x(a)&&!S(a)&&(a=parseFloat(a,10));h=S(a)&&!isNaN(a)?a:void 0;c.$validate()})}},url:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);pc(c);c.$$parserName="url";c.$validators.url=function(a,b){var d=a||b;return c.$isEmpty(d)||Kg.test(d)}},email:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);pc(c);c.$$parserName="email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||Lg.test(d)}},radio:function(a,b,d,c){w(d.name)&&b.attr("name",++pb);b.on("click",function(a){b[0].checked&&c.$setViewValue(d.value,
a&&a.type)});c.$render=function(){b[0].checked=d.value==c.$viewValue};d.$observe("value",c.$render)},checkbox:function(a,b,d,c,e,f,g,h){var k=Od(h,a,"ngTrueValue",d.ngTrueValue,!0),l=Od(h,a,"ngFalseValue",d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return na(a,k)});c.$parsers.push(function(a){return a?k:l})},hidden:A,button:A,submit:A,reset:A,
file:A},Gc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,h){h[0]&&(Yd[M(g.type)]||Yd.text)(e,f,g,h[0],b,a,d,c)}}}}],Ng=/^(true|false|\d+)$/,Ve=function(){return{restrict:"A",priority:100,compile:function(a,b){return Ng.test(b.ngValue)?function(a,b,e){e.$set("value",a.$eval(e.ngValue))}:function(a,b,e){a.$watch(e.ngValue,function(a){e.$set("value",a)})}}}},ve=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);
return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){c.textContent=w(a)?"":a})}}}}],xe=["$interpolate","$compile",function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=w(a)?"":a})}}}}],we=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=
b(e.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){var d=f(b);c.html(a.getTrustedHtml(d)||"")})}}}}],Ue=da({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),ye=qc("",!0),Ae=qc("Odd",0),ze=qc("Even",1),Be=Ma({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Ce=[function(){return{restrict:"A",scope:!0,controller:"@",
priority:500}}],Lc={},Og={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var b=xa("ng-"+a);Lc[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(e,f){var g=d(f[b],null,!0);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};Og[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var Fe=["$animate","$compile",function(a,
b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,e,f,g){var h,k,l;d.$watch(e.ngIf,function(d){d?k||g(function(d,f){k=f;d[d.length++]=b.$$createComment("end ngIf",e.ngIf);h={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),k&&(k.$destroy(),k=null),h&&(l=tb(h.clone),a.leave(l).then(function(){l=null}),h=null))})}}}],Ge=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,
transclude:"element",controller:ea.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",h=e.autoscroll;return function(c,e,m,n,p){var s=0,r,t,q,w=function(){t&&(t.remove(),t=null);r&&(r.$destroy(),r=null);q&&(d.leave(q).then(function(){t=null}),t=q,q=null)};c.$watch(f,function(f){var m=function(){!x(h)||h&&!c.$eval(h)||b()},t=++s;f?(a(f,!0).then(function(a){if(!c.$$destroyed&&t===s){var b=c.$new();n.template=a;a=p(b,function(a){w();d.enter(a,null,e).then(m)});r=b;q=a;r.$emit("$includeContentLoaded",
f);c.$eval(g)}},function(){c.$$destroyed||t!==s||(w(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(w(),n.template=null)})}}}}],Xe=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(b,d,c,e){ka.call(d[0]).match(/SVG/)?(d.empty(),a(Oc(e.template,E.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],He=Ma({priority:450,compile:function(){return{pre:function(a,
b,d){a.$eval(d.ngInit)}}}}),Te=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=b.attr(d.$attr.ngList)||", ",f="false"!==d.ngTrim,g=f?W(e):e;c.$parsers.push(function(a){if(!w(a)){var b=[];a&&r(a.split(g),function(a){a&&b.push(f?W(a):a)});return b}});c.$formatters.push(function(a){if(J(a))return a.join(e)});c.$isEmpty=function(a){return!a||!a.length}}}},ob="ng-valid",Pd="ng-invalid",Va="ng-pristine",Mb="ng-dirty",Rd="ng-pending",nb=O("ngModel"),Pg=["$scope",
"$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,b,d,c,e,f,g,h,k,l){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=void 0;this.$name=l(d.name||"",!1)(a);
this.$$parentForm=Lb;var m=e(d.ngModel),n=m.assign,p=m,s=n,t=null,I,q=this;this.$$setOptions=function(a){if((q.$options=a)&&a.getterSetter){var b=e(d.ngModel+"()"),f=e(d.ngModel+"($$$p)");p=function(a){var c=m(a);z(c)&&(c=b(a));return c};s=function(a,b){z(m(a))?f(a,{$$$p:b}):n(a,b)}}else if(!m.assign)throw nb("nonassign",d.ngModel,va(c));};this.$render=A;this.$isEmpty=function(a){return w(a)||""===a||null===a||a!==a};this.$$updateEmptyClasses=function(a){q.$isEmpty(a)?(f.removeClass(c,"ng-not-empty"),
f.addClass(c,"ng-empty")):(f.removeClass(c,"ng-empty"),f.addClass(c,"ng-not-empty"))};var K=0;Ld({ctrl:this,$element:c,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]},$animate:f});this.$setPristine=function(){q.$dirty=!1;q.$pristine=!0;f.removeClass(c,Mb);f.addClass(c,Va)};this.$setDirty=function(){q.$dirty=!0;q.$pristine=!1;f.removeClass(c,Va);f.addClass(c,Mb);q.$$parentForm.$setDirty()};this.$setUntouched=function(){q.$touched=!1;q.$untouched=!0;f.setClass(c,"ng-untouched","ng-touched")};
this.$setTouched=function(){q.$touched=!0;q.$untouched=!1;f.setClass(c,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){g.cancel(t);q.$viewValue=q.$$lastCommittedViewValue;q.$render()};this.$validate=function(){if(!S(q.$modelValue)||!isNaN(q.$modelValue)){var a=q.$$rawModelValue,b=q.$valid,c=q.$modelValue,d=q.$options&&q.$options.allowInvalid;q.$$runValidators(a,q.$$lastCommittedViewValue,function(e){d||b===e||(q.$modelValue=e?a:void 0,q.$modelValue!==c&&q.$$writeModelToScope())})}};
this.$$runValidators=function(a,b,c){function d(){var c=!0;r(q.$validators,function(d,e){var g=d(a,b);c=c&&g;f(e,g)});return c?!0:(r(q.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;r(q.$asyncValidators,function(e,g){var h=e(a,b);if(!h||!z(h.then))throw nb("nopromise",h);f(g,void 0);c.push(h.then(function(){f(g,!0)},function(){d=!1;f(g,!1)}))});c.length?k.all(c).then(function(){g(d)},A):g(!0)}function f(a,b){h===K&&q.$setValidity(a,b)}function g(a){h===K&&c(a)}K++;var h=
K;(function(){var a=q.$$parserName||"parse";if(w(I))f(a,null);else return I||(r(q.$validators,function(a,b){f(b,null)}),r(q.$asyncValidators,function(a,b){f(b,null)})),f(a,I),I;return!0})()?d()?e():g(!1):g(!1)};this.$commitViewValue=function(){var a=q.$viewValue;g.cancel(t);if(q.$$lastCommittedViewValue!==a||""===a&&q.$$hasNativeValidators)q.$$updateEmptyClasses(a),q.$$lastCommittedViewValue=a,q.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var b=q.$$lastCommittedViewValue;
if(I=w(b)?void 0:!0)for(var c=0;c<q.$parsers.length;c++)if(b=q.$parsers[c](b),w(b)){I=!1;break}S(q.$modelValue)&&isNaN(q.$modelValue)&&(q.$modelValue=p(a));var d=q.$modelValue,e=q.$options&&q.$options.allowInvalid;q.$$rawModelValue=b;e&&(q.$modelValue=b,q.$modelValue!==d&&q.$$writeModelToScope());q.$$runValidators(b,q.$$lastCommittedViewValue,function(a){e||(q.$modelValue=a?b:void 0,q.$modelValue!==d&&q.$$writeModelToScope())})};this.$$writeModelToScope=function(){s(a,q.$modelValue);r(q.$viewChangeListeners,
function(a){try{a()}catch(c){b(c)}})};this.$setViewValue=function(a,b){q.$viewValue=a;q.$options&&!q.$options.updateOnDefault||q.$$debounceViewValueCommit(b)};this.$$debounceViewValueCommit=function(b){var c=0,d=q.$options;d&&x(d.debounce)&&(d=d.debounce,S(d)?c=d:S(d[b])?c=d[b]:S(d["default"])&&(c=d["default"]));g.cancel(t);c?t=g(function(){q.$commitViewValue()},c):h.$$phase?q.$commitViewValue():a.$apply(function(){q.$commitViewValue()})};a.$watch(function(){var b=p(a);if(b!==q.$modelValue&&(q.$modelValue===
q.$modelValue||b===b)){q.$modelValue=q.$$rawModelValue=b;I=void 0;for(var c=q.$formatters,d=c.length,e=b;d--;)e=c[d](e);q.$viewValue!==e&&(q.$$updateEmptyClasses(e),q.$viewValue=q.$$lastCommittedViewValue=e,q.$render(),q.$$runValidators(b,e,A))}return b})}],Se=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Pg,priority:1,compile:function(b){b.addClass(Va).addClass("ng-untouched").addClass(ob);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||
g.$$parentForm;g.$$setOptions(f[2]&&f[2].$options);b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,e,f){var g=f[0];if(g.$options&&g.$options.updateOn)c.on(g.$options.updateOn,function(a){g.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(){g.$touched||(a.$$phase?b.$evalAsync(g.$setTouched):b.$apply(g.$setTouched))})}}}}}],Qg=/(\s+|^)default(\s+|$)/,We=function(){return{restrict:"A",
controller:["$scope","$attrs",function(a,b){var d=this;this.$options=Z(a.$eval(b.ngModelOptions));x(this.$options.updateOn)?(this.$options.updateOnDefault=!1,this.$options.updateOn=W(this.$options.updateOn.replace(Qg,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Ie=Ma({terminal:!0,priority:1E3}),Rg=O("ngOptions"),Sg=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
Qe=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!r&&oa(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var n=a.match(Sg);if(!n)throw Rg("iexp",a,va(b));var p=n[5]||n[7],r=n[6];a=/ as /.test(n[0])&&n[1];var t=n[9];b=d(n[2]?n[1]:p);var x=a&&d(a)||b,q=t&&d(t),w=t?function(a,b){return q(c,b)}:function(a){return Ga(a)},
v=function(a,b){return w(a,D(a,b))},u=d(n[2]||n[1]),y=d(n[3]||""),A=d(n[4]||""),z=d(n[8]),C={},D=r?function(a,b){C[r]=b;C[p]=a;return C}:function(a){C[p]=a;return C};return{trackBy:t,getTrackByValue:v,getWatchables:d(z,function(a){var b=[];a=a||[];for(var d=f(a),e=d.length,g=0;g<e;g++){var h=a===d?g:d[g],l=a[h],h=D(l,h),l=w(l,h);b.push(l);if(n[2]||n[1])l=u(c,h),b.push(l);n[4]&&(h=A(c,h),b.push(h))}return b}),getOptions:function(){for(var a=[],b={},d=z(c)||[],g=f(d),h=g.length,n=0;n<h;n++){var p=d===
g?n:g[n],q=D(d[p],p),r=x(c,q),p=w(r,q),s=u(c,q),C=y(c,q),q=A(c,q),r=new e(p,r,s,C,q);a.push(r);b[p]=r}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[v(a)]},getViewValueFromOption:function(a){return t?ea.copy(a.viewValue):a.viewValue}}}}}var e=E.document.createElement("option"),f=E.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=A},post:function(d,h,k,l){function m(a,b){a.element=
b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);a.value!==b.value&&(b.value=a.selectValue)}function n(){var a=y&&p.readValue();if(y)for(var b=y.items.length-1;0<=b;b--){var c=y.items[b];c.group?Db(c.element.parentNode):Db(c.element)}y=z.getOptions();var d={};v&&h.prepend(w);y.items.forEach(function(a){var b;if(x(a.group)){b=d[a.group];b||(b=f.cloneNode(!1),E.appendChild(b),b.label=a.group,d[a.group]=b);var c=e.cloneNode(!1)}else b=E,c=e.cloneNode(!1);b.appendChild(c);
m(a,c)});h[0].appendChild(E);s.$render();s.$isEmpty(a)||(b=p.readValue(),(z.trackBy||t?na(a,b):a===b)||(s.$setViewValue(b),s.$render()))}var p=l[0],s=l[1],t=k.multiple,w;l=0;for(var q=h.children(),A=q.length;l<A;l++)if(""===q[l].value){w=q.eq(l);break}var v=!!w,u=B(e.cloneNode(!1));u.val("?");var y,z=c(k.ngOptions,h,d),E=b[0].createDocumentFragment();t?(s.$isEmpty=function(a){return!a||0===a.length},p.writeValue=function(a){y.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){if(a=
y.getOptionFromViewValue(a))a.element.selected=!0})},p.readValue=function(){var a=h.val()||[],b=[];r(a,function(a){(a=y.selectValueMap[a])&&!a.disabled&&b.push(y.getViewValueFromOption(a))});return b},z.trackBy&&d.$watchCollection(function(){if(J(s.$viewValue))return s.$viewValue.map(function(a){return z.getTrackByValue(a)})},function(){s.$render()})):(p.writeValue=function(a){var b=y.getOptionFromViewValue(a);b?(h[0].value!==b.selectValue&&(u.remove(),v||w.remove(),h[0].value=b.selectValue,b.element.selected=
!0),b.element.setAttribute("selected","selected")):null===a||v?(u.remove(),v||h.prepend(w),h.val(""),w.prop("selected",!0),w.attr("selected",!0)):(v||w.remove(),h.prepend(u),h.val("?"),u.prop("selected",!0),u.attr("selected",!0))},p.readValue=function(){var a=y.selectValueMap[h.val()];return a&&!a.disabled?(v||w.remove(),u.remove(),y.getViewValueFromOption(a)):null},z.trackBy&&d.$watch(function(){return z.getTrackByValue(s.$viewValue)},function(){s.$render()}));v?(w.remove(),a(w)(d),w.removeClass("ng-scope")):
w=B(e.cloneNode(!1));h.empty();n();d.$watchCollection(z.getWatchables,n)}}}}],Je=["$locale","$interpolate","$log",function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,g,h){function k(a){g.text(a||"")}var l=h.count,m=h.$attr.when&&g.attr(h.$attr.when),n=h.offset||0,p=f.$eval(m)||{},s={},t=b.startSymbol(),x=b.endSymbol(),q=t+l+"-"+n+x,z=ea.noop,v;r(h,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+M(c[2]),p[c]=g.attr(h.$attr[b]))});r(p,function(a,d){s[d]=b(a.replace(c,q))});f.$watch(l,
function(b){var c=parseFloat(b),e=isNaN(c);e||c in p||(c=a.pluralCat(c-n));c===v||e&&S(v)&&isNaN(v)||(z(),e=s[c],w(e)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),z=A,k()):z=f.$watch(e,k),v=c)})}}}],Ke=["$parse","$animate","$compile",function(a,b,d){var c=O("ngRepeat"),e=function(a,b,c,d,e,m,n){a[c]=d;e&&(a[e]=m);a.$index=b;a.$first=0===b;a.$last=b===n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,
terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,k=d.$$createComment("end ngRepeat",h),l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!l)throw c("iexp",h);var m=l[1],n=l[2],p=l[3],s=l[4],l=m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!l)throw c("iidexp",m);var t=l[3]||l[1],w=l[2];if(p&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p)))throw c("badident",
p);var q,x,v,u,y={$id:Ga};s?q=a(s):(v=function(a,b){return Ga(b)},u=function(a){return a});return function(a,d,f,g,l){q&&(x=function(b,c,d){w&&(y[w]=b);y[t]=c;y.$index=d;return q(a,y)});var m=T();a.$watchCollection(n,function(f){var g,n,q=d[0],s,y=T(),z,A,E,C,D,B,F;p&&(a[p]=f);if(oa(f))D=f,n=x||v;else for(F in n=x||u,D=[],f)sa.call(f,F)&&"$"!==F.charAt(0)&&D.push(F);z=D.length;F=Array(z);for(g=0;g<z;g++)if(A=f===D?g:D[g],E=f[A],C=n(A,E,g),m[C])B=m[C],delete m[C],y[C]=B,F[g]=B;else{if(y[C])throw r(F,
function(a){a&&a.scope&&(m[a.id]=a)}),c("dupes",h,C,E);F[g]={id:C,scope:void 0,clone:void 0};y[C]=!0}for(s in m){B=m[s];C=tb(B.clone);b.leave(C);if(C[0].parentNode)for(g=0,n=C.length;g<n;g++)C[g].$$NG_REMOVED=!0;B.scope.$destroy()}for(g=0;g<z;g++)if(A=f===D?g:D[g],E=f[A],B=F[g],B.scope){s=q;do s=s.nextSibling;while(s&&s.$$NG_REMOVED);B.clone[0]!=s&&b.move(tb(B.clone),null,q);q=B.clone[B.clone.length-1];e(B.scope,g,t,E,w,A,z)}else l(function(a,c){B.scope=c;var d=k.cloneNode(!1);a[a.length++]=d;b.enter(a,
null,q);q=d;B.clone=a;y[B.id]=B;e(B.scope,g,t,E,w,A,z)});m=y})}}}}],Le=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Ee=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Me=Ma(function(a,b,d){a.$watch(d.ngStyle,function(a,
d){d&&a!==d&&r(d,function(a,c){b.css(c,"")});a&&b.css(a)},!0)}),Ne=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(d,c,e,f){var g=[],h=[],k=[],l=[],m=function(a,b){return function(){a.splice(b,1)}};d.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=k.length;d<e;++d)a.cancel(k[d]);d=k.length=0;for(e=l.length;d<e;++d){var t=tb(h[d].clone);l[d].$destroy();(k[d]=a.leave(t)).then(m(k,d))}h.length=0;l.length=0;(g=f.cases["!"+
c]||f.cases["?"])&&r(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],Oe=Ma({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["!"+d.ngSwitchWhen]=c.cases["!"+d.ngSwitchWhen]||[];c.cases["!"+d.ngSwitchWhen].push({transclude:e,element:b})}}),Pe=Ma({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,
b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),Tg=O("ngTransclude"),Re=Ma({restrict:"EAC",link:function(a,b,d,c,e){d.ngTransclude===d.$attr.ngTransclude&&(d.ngTransclude="");if(!e)throw Tg("orphan",va(b));e(function(a){a.length&&(b.empty(),b.append(a))},null,d.ngTransclude||d.ngTranscludeSlot)}}),re=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"==d.type&&a.put(d.id,b[0].text)}}}],Ug={$setViewValue:A,$render:A},
Vg=["$element","$scope",function(a,b){var d=this,c=new Sa;d.ngModelCtrl=Ug;d.unknownOption=B(E.document.createElement("option"));d.renderUnknownOption=function(b){b="? "+Ga(b)+" ?";d.unknownOption.val(b);a.prepend(d.unknownOption);a.val(b)};b.$on("$destroy",function(){d.renderUnknownOption=A});d.removeUnknownOption=function(){d.unknownOption.parent()&&d.unknownOption.remove()};d.readValue=function(){d.removeUnknownOption();return a.val()};d.writeValue=function(b){d.hasOption(b)?(d.removeUnknownOption(),
a.val(b),""===b&&d.emptyOption.prop("selected",!0)):null==b&&d.emptyOption?(d.removeUnknownOption(),a.val("")):d.renderUnknownOption(b)};d.addOption=function(a,b){if(8!==b[0].nodeType){Ra(a,'"option value"');""===a&&(d.emptyOption=b);var g=c.get(a)||0;c.put(a,g+1);d.ngModelCtrl.$render();b[0].hasAttribute("selected")&&(b[0].selected=!0)}};d.removeOption=function(a){var b=c.get(a);b&&(1===b?(c.remove(a),""===a&&(d.emptyOption=void 0)):c.put(a,b-1))};d.hasOption=function(a){return!!c.get(a)};d.registerOption=
function(a,b,c,h,k){if(h){var l;c.$observe("value",function(a){x(l)&&d.removeOption(l);l=a;d.addOption(a,b)})}else k?a.$watch(k,function(a,e){c.$set("value",a);e!==a&&d.removeOption(e);d.addOption(a,b)}):d.addOption(c.value,b);b.on("$destroy",function(){d.removeOption(c.value);d.ngModelCtrl.$render()})}}],se=function(){return{restrict:"E",require:["select","?ngModel"],controller:Vg,priority:1,link:{pre:function(a,b,d,c){var e=c[1];if(e){var f=c[0];f.ngModelCtrl=e;b.on("change",function(){a.$apply(function(){e.$setViewValue(f.readValue())})});
if(d.multiple){f.readValue=function(){var a=[];r(b.find("option"),function(b){b.selected&&a.push(b.value)});return a};f.writeValue=function(a){var c=new Sa(a);r(b.find("option"),function(a){a.selected=x(c.get(a.value))})};var g,h=NaN;a.$watch(function(){h!==e.$viewValue||na(g,e.$viewValue)||(g=ga(e.$viewValue),e.$render());h=e.$viewValue});e.$isEmpty=function(a){return!a||0===a.length}}}},post:function(a,b,d,c){var e=c[1];if(e){var f=c[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},ue=["$interpolate",
function(a){return{restrict:"E",priority:100,compile:function(b,d){if(x(d.value))var c=a(d.value,!0);else{var e=a(b.text(),!0);e||d.$set("value",b.text())}return function(a,b,d){var k=b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,b,d,c,e)}}}}],te=da({restrict:"E",terminal:!1}),Ic=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",
function(){c.$validate()}))}}},Hc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e,f=d.ngPattern||d.pattern;d.$observe("pattern",function(a){F(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw O("ngPattern")("noregexp",f,a,va(b));e=a||void 0;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||w(e)||e.test(b)}}}}},Kc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=-1;d.$observe("maxlength",function(a){a=
aa(a);e=isNaN(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>e||c.$isEmpty(b)||b.length<=e}}}}},Jc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=0;d.$observe("minlength",function(a){e=aa(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=e}}}}};E.angular.bootstrap?E.console&&console.log("WARNING: Tried to load angular more than once."):(ke(),me(ea),ea.module("ngLocale",[],["$provide",function(a){function b(a){a+=
"";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),
WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,
c){var e=a|0,f=c;void 0===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),B(E.document).ready(function(){ge(E.document,Bc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

/**
 * State-based routing for AngularJS
 * @version v0.3.1
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(a,b,c){"use strict";function d(a,b){return R(new(R(function(){},{prototype:a})),b)}function e(a){return Q(arguments,function(b){b!==a&&Q(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function f(a,b){var c=[];for(var d in a.path){if(a.path[d]!==b.path[d])break;c.push(a.path[d])}return c}function g(a){if(Object.keys)return Object.keys(a);var b=[];return Q(a,function(a,c){b.push(c)}),b}function h(a,b){if(Array.prototype.indexOf)return a.indexOf(b,Number(arguments[2])||0);var c=a.length>>>0,d=Number(arguments[2])||0;for(d=0>d?Math.ceil(d):Math.floor(d),0>d&&(d+=c);c>d;d++)if(d in a&&a[d]===b)return d;return-1}function i(a,b,c,d){var e,i=f(c,d),j={},k=[];for(var l in i)if(i[l]&&i[l].params&&(e=g(i[l].params),e.length))for(var m in e)h(k,e[m])>=0||(k.push(e[m]),j[e[m]]=a[e[m]]);return R({},j,b)}function j(a,b,c){if(!c){c=[];for(var d in a)c.push(d)}for(var e=0;e<c.length;e++){var f=c[e];if(a[f]!=b[f])return!1}return!0}function k(a,b){var c={};return Q(a,function(a){c[a]=b[a]}),c}function l(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));return Q(c,function(c){c in a&&(b[c]=a[c])}),b}function m(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var d in a)-1==h(c,d)&&(b[d]=a[d]);return b}function n(a,b){var c=P(a),d=c?[]:{};return Q(a,function(a,e){b(a,e)&&(d[c?d.length:e]=a)}),d}function o(a,b){var c=P(a)?[]:{};return Q(a,function(a,d){c[d]=b(a,d)}),c}function p(a,b){var d=1,f=2,i={},j=[],k=i,l=R(a.when(i),{$$promises:i,$$values:i});this.study=function(i){function n(a,c){if(s[c]!==f){if(r.push(c),s[c]===d)throw r.splice(0,h(r,c)),new Error("Cyclic dependency: "+r.join(" -> "));if(s[c]=d,N(a))q.push(c,[function(){return b.get(a)}],j);else{var e=b.annotate(a);Q(e,function(a){a!==c&&i.hasOwnProperty(a)&&n(i[a],a)}),q.push(c,a,e)}r.pop(),s[c]=f}}function o(a){return O(a)&&a.then&&a.$$promises}if(!O(i))throw new Error("'invocables' must be an object");var p=g(i||{}),q=[],r=[],s={};return Q(i,n),i=r=s=null,function(d,f,g){function h(){--u||(v||e(t,f.$$values),r.$$values=t,r.$$promises=r.$$promises||!0,delete r.$$inheritedValues,n.resolve(t))}function i(a){r.$$failure=a,n.reject(a)}function j(c,e,f){function j(a){l.reject(a),i(a)}function k(){if(!L(r.$$failure))try{l.resolve(b.invoke(e,g,t)),l.promise.then(function(a){t[c]=a,h()},j)}catch(a){j(a)}}var l=a.defer(),m=0;Q(f,function(a){s.hasOwnProperty(a)&&!d.hasOwnProperty(a)&&(m++,s[a].then(function(b){t[a]=b,--m||k()},j))}),m||k(),s[c]=l.promise}if(o(d)&&g===c&&(g=f,f=d,d=null),d){if(!O(d))throw new Error("'locals' must be an object")}else d=k;if(f){if(!o(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else f=l;var n=a.defer(),r=n.promise,s=r.$$promises={},t=R({},d),u=1+q.length/3,v=!1;if(L(f.$$failure))return i(f.$$failure),r;f.$$inheritedValues&&e(t,m(f.$$inheritedValues,p)),R(s,f.$$promises),f.$$values?(v=e(t,m(f.$$values,p)),r.$$inheritedValues=m(f.$$values,p),h()):(f.$$inheritedValues&&(r.$$inheritedValues=m(f.$$inheritedValues,p)),f.then(h,i));for(var w=0,x=q.length;x>w;w+=3)d.hasOwnProperty(q[w])?h():j(q[w],q[w+1],q[w+2]);return r}},this.resolve=function(a,b,c,d){return this.study(a)(b,c,d)}}function q(a,b,c){this.fromConfig=function(a,b,c){return L(a.template)?this.fromString(a.template,b):L(a.templateUrl)?this.fromUrl(a.templateUrl,b):L(a.templateProvider)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(a,b){return M(a)?a(b):a},this.fromUrl=function(c,d){return M(c)&&(c=c(d)),null==c?null:a.get(c,{cache:b,headers:{Accept:"text/html"}}).then(function(a){return a.data})},this.fromProvider=function(a,b,d){return c.invoke(a,null,d||{params:b})}}function r(a,b,e){function f(b,c,d,e){if(q.push(b),o[b])return o[b];if(!/^\w+([-.]+\w+)*(?:\[\])?$/.test(b))throw new Error("Invalid parameter name '"+b+"' in pattern '"+a+"'");if(p[b])throw new Error("Duplicate parameter name '"+b+"' in pattern '"+a+"'");return p[b]=new U.Param(b,c,d,e),p[b]}function g(a,b,c,d){var e=["",""],f=a.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!b)return f;switch(c){case!1:e=["(",")"+(d?"?":"")];break;case!0:f=f.replace(/\/$/,""),e=["(?:/(",")|/)?"];break;default:e=["("+c+"|",")?"]}return f+e[0]+b+e[1]}function h(e,f){var g,h,i,j,k;return g=e[2]||e[3],k=b.params[g],i=a.substring(m,e.index),h=f?e[4]:e[4]||("*"==e[1]?".*":null),h&&(j=U.type(h)||d(U.type("string"),{pattern:new RegExp(h,b.caseInsensitive?"i":c)})),{id:g,regexp:h,segment:i,type:j,cfg:k}}b=R({params:{}},O(b)?b:{});var i,j=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,k=/([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,l="^",m=0,n=this.segments=[],o=e?e.params:{},p=this.params=e?e.params.$$new():new U.ParamSet,q=[];this.source=a;for(var r,s,t;(i=j.exec(a))&&(r=h(i,!1),!(r.segment.indexOf("?")>=0));)s=f(r.id,r.type,r.cfg,"path"),l+=g(r.segment,s.type.pattern.source,s.squash,s.isOptional),n.push(r.segment),m=j.lastIndex;t=a.substring(m);var u=t.indexOf("?");if(u>=0){var v=this.sourceSearch=t.substring(u);if(t=t.substring(0,u),this.sourcePath=a.substring(0,m+u),v.length>0)for(m=0;i=k.exec(v);)r=h(i,!0),s=f(r.id,r.type,r.cfg,"search"),m=j.lastIndex}else this.sourcePath=a,this.sourceSearch="";l+=g(t)+(b.strict===!1?"/?":"")+"$",n.push(t),this.regexp=new RegExp(l,b.caseInsensitive?"i":c),this.prefix=n[0],this.$$paramNames=q}function s(a){R(this,a)}function t(){function a(a){return null!=a?a.toString().replace(/~/g,"~~").replace(/\//g,"~2F"):a}function e(a){return null!=a?a.toString().replace(/~2F/g,"/").replace(/~~/g,"~"):a}function f(){return{strict:p,caseInsensitive:m}}function i(a){return M(a)||P(a)&&M(a[a.length-1])}function j(){for(;w.length;){var a=w.shift();if(a.pattern)throw new Error("You cannot override a type's .pattern at runtime.");b.extend(u[a.name],l.invoke(a.def))}}function k(a){R(this,a||{})}U=this;var l,m=!1,p=!0,q=!1,u={},v=!0,w=[],x={string:{encode:a,decode:e,is:function(a){return null==a||!L(a)||"string"==typeof a},pattern:/[^\/]*/},"int":{encode:a,decode:function(a){return parseInt(a,10)},is:function(a){return L(a)&&this.decode(a.toString())===a},pattern:/\d+/},bool:{encode:function(a){return a?1:0},decode:function(a){return 0!==parseInt(a,10)},is:function(a){return a===!0||a===!1},pattern:/0|1/},date:{encode:function(a){return this.is(a)?[a.getFullYear(),("0"+(a.getMonth()+1)).slice(-2),("0"+a.getDate()).slice(-2)].join("-"):c},decode:function(a){if(this.is(a))return a;var b=this.capture.exec(a);return b?new Date(b[1],b[2]-1,b[3]):c},is:function(a){return a instanceof Date&&!isNaN(a.valueOf())},equals:function(a,b){return this.is(a)&&this.is(b)&&a.toISOString()===b.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:b.toJson,decode:b.fromJson,is:b.isObject,equals:b.equals,pattern:/[^\/]*/},any:{encode:b.identity,decode:b.identity,equals:b.equals,pattern:/.*/}};t.$$getDefaultValue=function(a){if(!i(a.value))return a.value;if(!l)throw new Error("Injectable functions cannot be called at configuration time");return l.invoke(a.value)},this.caseInsensitive=function(a){return L(a)&&(m=a),m},this.strictMode=function(a){return L(a)&&(p=a),p},this.defaultSquashPolicy=function(a){if(!L(a))return q;if(a!==!0&&a!==!1&&!N(a))throw new Error("Invalid squash policy: "+a+". Valid policies: false, true, arbitrary-string");return q=a,a},this.compile=function(a,b){return new r(a,R(f(),b))},this.isMatcher=function(a){if(!O(a))return!1;var b=!0;return Q(r.prototype,function(c,d){M(c)&&(b=b&&L(a[d])&&M(a[d]))}),b},this.type=function(a,b,c){if(!L(b))return u[a];if(u.hasOwnProperty(a))throw new Error("A type named '"+a+"' has already been defined.");return u[a]=new s(R({name:a},b)),c&&(w.push({name:a,def:c}),v||j()),this},Q(x,function(a,b){u[b]=new s(R({name:b},a))}),u=d(u,{}),this.$get=["$injector",function(a){return l=a,v=!1,j(),Q(x,function(a,b){u[b]||(u[b]=new s(a))}),this}],this.Param=function(a,d,e,f){function j(a){var b=O(a)?g(a):[],c=-1===h(b,"value")&&-1===h(b,"type")&&-1===h(b,"squash")&&-1===h(b,"array");return c&&(a={value:a}),a.$$fn=i(a.value)?a.value:function(){return a.value},a}function k(c,d,e){if(c.type&&d)throw new Error("Param '"+a+"' has two type configurations.");return d?d:c.type?b.isString(c.type)?u[c.type]:c.type instanceof s?c.type:new s(c.type):"config"===e?u.any:u.string}function m(){var b={array:"search"===f?"auto":!1},c=a.match(/\[\]$/)?{array:!0}:{};return R(b,c,e).array}function p(a,b){var c=a.squash;if(!b||c===!1)return!1;if(!L(c)||null==c)return q;if(c===!0||N(c))return c;throw new Error("Invalid squash policy: '"+c+"'. Valid policies: false, true, or arbitrary string")}function r(a,b,d,e){var f,g,i=[{from:"",to:d||b?c:""},{from:null,to:d||b?c:""}];return f=P(a.replace)?a.replace:[],N(e)&&f.push({from:e,to:c}),g=o(f,function(a){return a.from}),n(i,function(a){return-1===h(g,a.from)}).concat(f)}function t(){if(!l)throw new Error("Injectable functions cannot be called at configuration time");var a=l.invoke(e.$$fn);if(null!==a&&a!==c&&!x.type.is(a))throw new Error("Default value ("+a+") for parameter '"+x.id+"' is not an instance of Type ("+x.type.name+")");return a}function v(a){function b(a){return function(b){return b.from===a}}function c(a){var c=o(n(x.replace,b(a)),function(a){return a.to});return c.length?c[0]:a}return a=c(a),L(a)?x.type.$normalize(a):t()}function w(){return"{Param:"+a+" "+d+" squash: '"+A+"' optional: "+z+"}"}var x=this;e=j(e),d=k(e,d,f);var y=m();d=y?d.$asArray(y,"search"===f):d,"string"!==d.name||y||"path"!==f||e.value!==c||(e.value="");var z=e.value!==c,A=p(e,z),B=r(e,y,z,A);R(this,{id:a,type:d,location:f,array:y,squash:A,replace:B,isOptional:z,value:v,dynamic:c,config:e,toString:w})},k.prototype={$$new:function(){return d(this,R(new k,{$$parent:this}))},$$keys:function(){for(var a=[],b=[],c=this,d=g(k.prototype);c;)b.push(c),c=c.$$parent;return b.reverse(),Q(b,function(b){Q(g(b),function(b){-1===h(a,b)&&-1===h(d,b)&&a.push(b)})}),a},$$values:function(a){var b={},c=this;return Q(c.$$keys(),function(d){b[d]=c[d].value(a&&a[d])}),b},$$equals:function(a,b){var c=!0,d=this;return Q(d.$$keys(),function(e){var f=a&&a[e],g=b&&b[e];d[e].type.equals(f,g)||(c=!1)}),c},$$validates:function(a){var d,e,f,g,h,i=this.$$keys();for(d=0;d<i.length&&(e=this[i[d]],f=a[i[d]],f!==c&&null!==f||!e.isOptional);d++){if(g=e.type.$normalize(f),!e.type.is(g))return!1;if(h=e.type.encode(g),b.isString(h)&&!e.type.pattern.exec(h))return!1}return!0},$$parent:c},this.ParamSet=k}function u(a,d){function e(a){var b=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null!=b?b[1].replace(/\\(.)/g,"$1"):""}function f(a,b){return a.replace(/\$(\$|\d{1,2})/,function(a,c){return b["$"===c?0:Number(c)]})}function g(a,b,c){if(!c)return!1;var d=a.invoke(b,b,{$match:c});return L(d)?d:!0}function h(d,e,f,g,h){function m(a,b,c){return"/"===q?a:b?q.slice(0,-1)+a:c?q.slice(1)+a:a}function n(a){function b(a){var b=a(f,d);return b?(N(b)&&d.replace().url(b),!0):!1}if(!a||!a.defaultPrevented){p&&d.url()===p;p=c;var e,g=j.length;for(e=0;g>e;e++)if(b(j[e]))return;k&&b(k)}}function o(){return i=i||e.$on("$locationChangeSuccess",n)}var p,q=g.baseHref(),r=d.url();return l||o(),{sync:function(){n()},listen:function(){return o()},update:function(a){return a?void(r=d.url()):void(d.url()!==r&&(d.url(r),d.replace()))},push:function(a,b,e){var f=a.format(b||{});null!==f&&b&&b["#"]&&(f+="#"+b["#"]),d.url(f),p=e&&e.$$avoidResync?d.url():c,e&&e.replace&&d.replace()},href:function(c,e,f){if(!c.validates(e))return null;var g=a.html5Mode();b.isObject(g)&&(g=g.enabled),g=g&&h.history;var i=c.format(e);if(f=f||{},g||null===i||(i="#"+a.hashPrefix()+i),null!==i&&e&&e["#"]&&(i+="#"+e["#"]),i=m(i,g,f.absolute),!f.absolute||!i)return i;var j=!g&&i?"/":"",k=d.port();return k=80===k||443===k?"":":"+k,[d.protocol(),"://",d.host(),k,j,i].join("")}}}var i,j=[],k=null,l=!1;this.rule=function(a){if(!M(a))throw new Error("'rule' must be a function");return j.push(a),this},this.otherwise=function(a){if(N(a)){var b=a;a=function(){return b}}else if(!M(a))throw new Error("'rule' must be a function");return k=a,this},this.when=function(a,b){var c,h=N(b);if(N(a)&&(a=d.compile(a)),!h&&!M(b)&&!P(b))throw new Error("invalid 'handler' in when()");var i={matcher:function(a,b){return h&&(c=d.compile(b),b=["$match",function(a){return c.format(a)}]),R(function(c,d){return g(c,b,a.exec(d.path(),d.search()))},{prefix:N(a.prefix)?a.prefix:""})},regex:function(a,b){if(a.global||a.sticky)throw new Error("when() RegExp must not be global or sticky");return h&&(c=b,b=["$match",function(a){return f(c,a)}]),R(function(c,d){return g(c,b,a.exec(d.path()))},{prefix:e(a)})}},j={matcher:d.isMatcher(a),regex:a instanceof RegExp};for(var k in j)if(j[k])return this.rule(i[k](a,b));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(a){a===c&&(a=!0),l=a},this.$get=h,h.$inject=["$location","$rootScope","$injector","$browser","$sniffer"]}function v(a,e){function f(a){return 0===a.indexOf(".")||0===a.indexOf("^")}function m(a,b){if(!a)return c;var d=N(a),e=d?a:a.name,g=f(e);if(g){if(!b)throw new Error("No reference point given for path '"+e+"'");b=m(b);for(var h=e.split("."),i=0,j=h.length,k=b;j>i;i++)if(""!==h[i]||0!==i){if("^"!==h[i])break;if(!k.parent)throw new Error("Path '"+e+"' not valid for state '"+b.name+"'");k=k.parent}else k=b;h=h.slice(i).join("."),e=k.name+(k.name&&h?".":"")+h}var l=z[e];return!l||!d&&(d||l!==a&&l.self!==a)?c:l}function n(a,b){A[a]||(A[a]=[]),A[a].push(b)}function p(a){for(var b=A[a]||[];b.length;)q(b.shift())}function q(b){b=d(b,{self:b,resolve:b.resolve||{},toString:function(){return this.name}});var c=b.name;if(!N(c)||c.indexOf("@")>=0)throw new Error("State must have a valid name");if(z.hasOwnProperty(c))throw new Error("State '"+c+"' is already defined");var e=-1!==c.indexOf(".")?c.substring(0,c.lastIndexOf(".")):N(b.parent)?b.parent:O(b.parent)&&N(b.parent.name)?b.parent.name:"";if(e&&!z[e])return n(e,b.self);for(var f in C)M(C[f])&&(b[f]=C[f](b,C.$delegates[f]));return z[c]=b,!b[B]&&b.url&&a.when(b.url,["$match","$stateParams",function(a,c){y.$current.navigable==b&&j(a,c)||y.transitionTo(b,a,{inherit:!0,location:!1})}]),p(c),b}function r(a){return a.indexOf("*")>-1}function s(a){for(var b=a.split("."),c=y.$current.name.split("."),d=0,e=b.length;e>d;d++)"*"===b[d]&&(c[d]="*");return"**"===b[0]&&(c=c.slice(h(c,b[1])),c.unshift("**")),"**"===b[b.length-1]&&(c.splice(h(c,b[b.length-2])+1,Number.MAX_VALUE),c.push("**")),b.length!=c.length?!1:c.join("")===b.join("")}function t(a,b){return N(a)&&!L(b)?C[a]:M(b)&&N(a)?(C[a]&&!C.$delegates[a]&&(C.$delegates[a]=C[a]),C[a]=b,this):this}function u(a,b){return O(a)?b=a:b.name=a,q(b),this}function v(a,e,f,h,l,n,p,q,t){function u(b,c,d,f){var g=a.$broadcast("$stateNotFound",b,c,d);if(g.defaultPrevented)return p.update(),D;if(!g.retry)return null;if(f.$retry)return p.update(),E;var h=y.transition=e.when(g.retry);return h.then(function(){return h!==y.transition?A:(b.options.$retry=!0,y.transitionTo(b.to,b.toParams,b.options))},function(){return D}),p.update(),h}function v(a,c,d,g,i,j){function m(){var c=[];return Q(a.views,function(d,e){var g=d.resolve&&d.resolve!==a.resolve?d.resolve:{};g.$template=[function(){return f.load(e,{view:d,locals:i.globals,params:n,notify:j.notify})||""}],c.push(l.resolve(g,i.globals,i.resolve,a).then(function(c){if(M(d.controllerProvider)||P(d.controllerProvider)){var f=b.extend({},g,i.globals);c.$$controller=h.invoke(d.controllerProvider,null,f)}else c.$$controller=d.controller;c.$$state=a,c.$$controllerAs=d.controllerAs,c.$$resolveAs=d.resolveAs,i[e]=c}))}),e.all(c).then(function(){return i.globals})}var n=d?c:k(a.params.$$keys(),c),o={$stateParams:n};i.resolve=l.resolve(a.resolve,o,i.resolve,a);var p=[i.resolve.then(function(a){i.globals=a})];return g&&p.push(g),e.all(p).then(m).then(function(a){return i})}var A=e.reject(new Error("transition superseded")),C=e.reject(new Error("transition prevented")),D=e.reject(new Error("transition aborted")),E=e.reject(new Error("transition failed"));return x.locals={resolve:null,globals:{$stateParams:{}}},y={params:{},current:x.self,$current:x,transition:null},y.reload=function(a){return y.transitionTo(y.current,n,{reload:a||!0,inherit:!1,notify:!0})},y.go=function(a,b,c){return y.transitionTo(a,b,R({inherit:!0,relative:y.$current},c))},y.transitionTo=function(b,c,f){c=c||{},f=R({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},f||{});var g,j=y.$current,l=y.params,o=j.path,q=m(b,f.relative),r=c["#"];if(!L(q)){var s={to:b,toParams:c,options:f},t=u(s,j.self,l,f);if(t)return t;if(b=s.to,c=s.toParams,f=s.options,q=m(b,f.relative),!L(q)){if(!f.relative)throw new Error("No such state '"+b+"'");throw new Error("Could not resolve '"+b+"' from state '"+f.relative+"'")}}if(q[B])throw new Error("Cannot transition to abstract state '"+b+"'");if(f.inherit&&(c=i(n,c||{},y.$current,q)),!q.params.$$validates(c))return E;c=q.params.$$values(c),b=q;var z=b.path,D=0,F=z[D],G=x.locals,H=[];if(f.reload){if(N(f.reload)||O(f.reload)){if(O(f.reload)&&!f.reload.name)throw new Error("Invalid reload state object");var I=f.reload===!0?o[0]:m(f.reload);if(f.reload&&!I)throw new Error("No such reload state '"+(N(f.reload)?f.reload:f.reload.name)+"'");for(;F&&F===o[D]&&F!==I;)G=H[D]=F.locals,D++,F=z[D]}}else for(;F&&F===o[D]&&F.ownParams.$$equals(c,l);)G=H[D]=F.locals,D++,F=z[D];if(w(b,c,j,l,G,f))return r&&(c["#"]=r),y.params=c,S(y.params,n),S(k(b.params.$$keys(),n),b.locals.globals.$stateParams),f.location&&b.navigable&&b.navigable.url&&(p.push(b.navigable.url,c,{$$avoidResync:!0,replace:"replace"===f.location}),p.update(!0)),y.transition=null,e.when(y.current);if(c=k(b.params.$$keys(),c||{}),r&&(c["#"]=r),f.notify&&a.$broadcast("$stateChangeStart",b.self,c,j.self,l,f).defaultPrevented)return a.$broadcast("$stateChangeCancel",b.self,c,j.self,l),null==y.transition&&p.update(),C;for(var J=e.when(G),K=D;K<z.length;K++,F=z[K])G=H[K]=d(G),J=v(F,c,F===b,J,G,f);var M=y.transition=J.then(function(){var d,e,g;if(y.transition!==M)return A;for(d=o.length-1;d>=D;d--)g=o[d],g.self.onExit&&h.invoke(g.self.onExit,g.self,g.locals.globals),g.locals=null;for(d=D;d<z.length;d++)e=z[d],e.locals=H[d],e.self.onEnter&&h.invoke(e.self.onEnter,e.self,e.locals.globals);return y.transition!==M?A:(y.$current=b,y.current=b.self,y.params=c,S(y.params,n),y.transition=null,f.location&&b.navigable&&p.push(b.navigable.url,b.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:"replace"===f.location}),f.notify&&a.$broadcast("$stateChangeSuccess",b.self,c,j.self,l),p.update(!0),y.current)}).then(null,function(d){return y.transition!==M?A:(y.transition=null,g=a.$broadcast("$stateChangeError",b.self,c,j.self,l,d),g.defaultPrevented||p.update(),e.reject(d))});return M},y.is=function(a,b,d){d=R({relative:y.$current},d||{});var e=m(a,d.relative);return L(e)?y.$current!==e?!1:b?j(e.params.$$values(b),n):!0:c},y.includes=function(a,b,d){if(d=R({relative:y.$current},d||{}),N(a)&&r(a)){if(!s(a))return!1;a=y.$current.name}var e=m(a,d.relative);return L(e)?L(y.$current.includes[e.name])?b?j(e.params.$$values(b),n,g(b)):!0:!1:c},y.href=function(a,b,d){d=R({lossy:!0,inherit:!0,absolute:!1,relative:y.$current},d||{});var e=m(a,d.relative);if(!L(e))return null;d.inherit&&(b=i(n,b||{},y.$current,e));var f=e&&d.lossy?e.navigable:e;return f&&f.url!==c&&null!==f.url?p.href(f.url,k(e.params.$$keys().concat("#"),b||{}),{absolute:d.absolute}):null},y.get=function(a,b){if(0===arguments.length)return o(g(z),function(a){return z[a].self});var c=m(a,b||y.$current);return c&&c.self?c.self:null},y}function w(a,b,c,d,e,f){function g(a,b,c){function d(b){return"search"!=a.params[b].location}var e=a.params.$$keys().filter(d),f=l.apply({},[a.params].concat(e)),g=new U.ParamSet(f);return g.$$equals(b,c)}return!f.reload&&a===c&&(e===c.locals||a.self.reloadOnSearch===!1&&g(c,d,b))?!0:void 0}var x,y,z={},A={},B="abstract",C={parent:function(a){if(L(a.parent)&&a.parent)return m(a.parent);var b=/^(.+)\.[^.]+$/.exec(a.name);return b?m(b[1]):x},data:function(a){return a.parent&&a.parent.data&&(a.data=a.self.data=d(a.parent.data,a.data)),a.data},url:function(a){var b=a.url,c={params:a.params||{}};if(N(b))return"^"==b.charAt(0)?e.compile(b.substring(1),c):(a.parent.navigable||x).url.concat(b,c);if(!b||e.isMatcher(b))return b;throw new Error("Invalid url '"+b+"' in state '"+a+"'")},navigable:function(a){return a.url?a:a.parent?a.parent.navigable:null},ownParams:function(a){var b=a.url&&a.url.params||new U.ParamSet;return Q(a.params||{},function(a,c){b[c]||(b[c]=new U.Param(c,null,a,"config"))}),b},params:function(a){var b=l(a.ownParams,a.ownParams.$$keys());return a.parent&&a.parent.params?R(a.parent.params.$$new(),b):new U.ParamSet},views:function(a){var b={};return Q(L(a.views)?a.views:{"":a},function(c,d){d.indexOf("@")<0&&(d+="@"+a.parent.name),c.resolveAs=c.resolveAs||a.resolveAs||"$resolve",b[d]=c}),b},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?R({},a.parent.includes):{};return b[a.name]=!0,b},$delegates:{}};x=q({name:"",url:"^",views:null,"abstract":!0}),x.navigable=null,this.decorator=t,this.state=u,this.$get=v,v.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function w(){function a(a,b){return{load:function(a,c){var d,e={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return c=R(e,c),c.view&&(d=b.fromConfig(c.view,c.params,c.locals)),d}}}this.$get=a,a.$inject=["$rootScope","$templateFactory"]}function x(){var a=!1;this.useAnchorScroll=function(){a=!0},this.$get=["$anchorScroll","$timeout",function(b,c){return a?b:function(a){return c(function(){a[0].scrollIntoView()},0,!1)}}]}function y(a,c,d,e,f){function g(){return c.has?function(a){return c.has(a)?c.get(a):null}:function(a){try{return c.get(a)}catch(b){return null}}}function h(a,c){var d=function(){return{enter:function(a,b,c){b.after(a),c()},leave:function(a,b){a.remove(),b()}}};if(k)return{enter:function(a,c,d){b.version.minor>2?k.enter(a,null,c).then(d):k.enter(a,null,c,d)},leave:function(a,c){b.version.minor>2?k.leave(a).then(c):k.leave(a,c)}};if(j){var e=j&&j(c,a);return{enter:function(a,b,c){e.enter(a,null,b),c()},leave:function(a,b){e.leave(a),b()}}}return d()}var i=g(),j=i("$animator"),k=i("$animate"),l={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(c,g,i){return function(c,g,j){function k(){if(m&&(m.remove(),m=null),o&&(o.$destroy(),o=null),n){var a=n.data("$uiViewAnim");s.leave(n,function(){a.$$animLeave.resolve(),m=null}),m=n,n=null}}function l(h){var l,m=A(c,j,g,e),t=m&&a.$current&&a.$current.locals[m];if(h||t!==p){l=c.$new(),p=a.$current.locals[m],l.$emit("$viewContentLoading",m);var u=i(l,function(a){var e=f.defer(),h=f.defer(),i={$animEnter:e.promise,$animLeave:h.promise,$$animLeave:h};a.data("$uiViewAnim",i),s.enter(a,g,function(){e.resolve(),o&&o.$emit("$viewContentAnimationEnded"),(b.isDefined(r)&&!r||c.$eval(r))&&d(a)}),k()});n=u,o=l,o.$emit("$viewContentLoaded",m),o.$eval(q)}}var m,n,o,p,q=j.onload||"",r=j.autoscroll,s=h(j,c);g.inheritedData("$uiView");c.$on("$stateChangeSuccess",function(){l(!1)}),l(!0)}}};return l}function z(a,c,d,e){return{restrict:"ECA",priority:-400,compile:function(f){var g=f.html();return function(f,h,i){var j=d.$current,k=A(f,i,h,e),l=j&&j.locals[k];if(l){h.data("$uiView",{name:k,state:l.$$state}),h.html(l.$template?l.$template:g);var m=b.extend({},l);f[l.$$resolveAs]=m;var n=a(h.contents());if(l.$$controller){l.$scope=f,l.$element=h;var o=c(l.$$controller,l);l.$$controllerAs&&(f[l.$$controllerAs]=o,f[l.$$controllerAs][l.$$resolveAs]=m),M(o.$onInit)&&o.$onInit(),h.data("$ngControllerController",o),h.children().data("$ngControllerController",o)}n(f)}}}}}function A(a,b,c,d){var e=d(b.uiView||b.name||"")(a),f=c.inheritedData("$uiView");return e.indexOf("@")>=0?e:e+"@"+(f?f.state.name:"")}function B(a,b){var c,d=a.match(/^\s*({[^}]*})\s*$/);if(d&&(a=b+"("+d[1]+")"),c=a.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/),!c||4!==c.length)throw new Error("Invalid state ref '"+a+"'");return{state:c[1],paramExpr:c[3]||null}}function C(a){var b=a.parent().inheritedData("$uiView");return b&&b.state&&b.state.name?b.state:void 0}function D(a){var b="[object SVGAnimatedString]"===Object.prototype.toString.call(a.prop("href")),c="FORM"===a[0].nodeName;return{attr:c?"action":b?"xlink:href":"href",isAnchor:"A"===a.prop("tagName").toUpperCase(),clickable:!c}}function E(a,b,c,d,e){return function(f){var g=f.which||f.button,h=e();if(!(g>1||f.ctrlKey||f.metaKey||f.shiftKey||a.attr("target"))){var i=c(function(){b.go(h.state,h.params,h.options)});f.preventDefault();var j=d.isAnchor&&!h.href?1:0;f.preventDefault=function(){j--<=0&&c.cancel(i)}}}}function F(a,b){return{relative:C(a)||b.$current,inherit:!0}}function G(a,c){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(d,e,f,g){var h,i=B(f.uiSref,a.current.name),j={state:i.state,href:null,params:null},k=D(e),l=g[1]||g[0],m=null;j.options=R(F(e,a),f.uiSrefOpts?d.$eval(f.uiSrefOpts):{});var n=function(c){c&&(j.params=b.copy(c)),j.href=a.href(i.state,j.params,j.options),m&&m(),l&&(m=l.$$addStateInfo(i.state,j.params)),null!==j.href&&f.$set(k.attr,j.href)};i.paramExpr&&(d.$watch(i.paramExpr,function(a){a!==j.params&&n(a)},!0),j.params=b.copy(d.$eval(i.paramExpr))),n(),k.clickable&&(h=E(e,a,c,k,function(){return j}),e.bind("click",h),d.$on("$destroy",function(){e.unbind("click",h)}))}}}function H(a,b){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(c,d,e,f){function g(b){m.state=b[0],m.params=b[1],m.options=b[2],m.href=a.href(m.state,m.params,m.options),n&&n(),j&&(n=j.$$addStateInfo(m.state,m.params)),m.href&&e.$set(i.attr,m.href)}var h,i=D(d),j=f[1]||f[0],k=[e.uiState,e.uiStateParams||null,e.uiStateOpts||null],l="["+k.map(function(a){return a||"null"}).join(", ")+"]",m={state:null,params:null,options:null,href:null},n=null;c.$watch(l,g,!0),g(c.$eval(l)),i.clickable&&(h=E(d,a,b,i,function(){return m}),d.bind("click",h),c.$on("$destroy",function(){d.unbind("click",h)}))}}}function I(a,b,c){return{restrict:"A",controller:["$scope","$element","$attrs","$timeout",function(b,d,e,f){function g(b,c,e){var f=a.get(b,C(d)),g=h(b,c),i={state:f||{name:b},params:c,hash:g};return p.push(i),q[g]=e,function(){var a=p.indexOf(i);-1!==a&&p.splice(a,1)}}function h(a,c){if(!N(a))throw new Error("state should be a string");return O(c)?a+T(c):(c=b.$eval(c),O(c)?a+T(c):a)}function i(){for(var a=0;a<p.length;a++)l(p[a].state,p[a].params)?j(d,q[p[a].hash]):k(d,q[p[a].hash]),m(p[a].state,p[a].params)?j(d,n):k(d,n)}function j(a,b){f(function(){a.addClass(b)})}function k(a,b){a.removeClass(b)}function l(b,c){return a.includes(b.name,c)}function m(b,c){return a.is(b.name,c)}var n,o,p=[],q={};n=c(e.uiSrefActiveEq||"",!1)(b);try{o=b.$eval(e.uiSrefActive)}catch(r){}o=o||c(e.uiSrefActive||"",!1)(b),O(o)&&Q(o,function(c,d){if(N(c)){var e=B(c,a.current.name);g(e.state,b.$eval(e.paramExpr),d)}}),this.$$addStateInfo=function(a,b){if(!(O(o)&&p.length>0)){var c=g(a,b,o);return i(),c}},b.$on("$stateChangeSuccess",i),i()}]}}function J(a){var b=function(b,c){return a.is(b,c)};return b.$stateful=!0,b}function K(a){var b=function(b,c,d){return a.includes(b,c,d)};return b.$stateful=!0,b}var L=b.isDefined,M=b.isFunction,N=b.isString,O=b.isObject,P=b.isArray,Q=b.forEach,R=b.extend,S=b.copy,T=b.toJson;b.module("ui.router.util",["ng"]),b.module("ui.router.router",["ui.router.util"]),b.module("ui.router.state",["ui.router.router","ui.router.util"]),b.module("ui.router",["ui.router.state"]),b.module("ui.router.compat",["ui.router"]),p.$inject=["$q","$injector"],b.module("ui.router.util").service("$resolve",p),q.$inject=["$http","$templateCache","$injector"],b.module("ui.router.util").service("$templateFactory",q);var U;r.prototype.concat=function(a,b){var c={caseInsensitive:U.caseInsensitive(),strict:U.strictMode(),squash:U.defaultSquashPolicy()};return new r(this.sourcePath+a+this.sourceSearch,R(c,b),this)},r.prototype.toString=function(){return this.source},r.prototype.exec=function(a,b){function c(a){function b(a){return a.split("").reverse().join("")}function c(a){return a.replace(/\\-/g,"-")}var d=b(a).split(/-(?!\\)/),e=o(d,b);return o(e,c).reverse()}var d=this.regexp.exec(a);if(!d)return null;b=b||{};var e,f,g,h=this.parameters(),i=h.length,j=this.segments.length-1,k={};if(j!==d.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");var l,m;for(e=0;j>e;e++){for(g=h[e],l=this.params[g],m=d[e+1],f=0;f<l.replace.length;f++)l.replace[f].from===m&&(m=l.replace[f].to);m&&l.array===!0&&(m=c(m)),L(m)&&(m=l.type.decode(m)),k[g]=l.value(m)}for(;i>e;e++){for(g=h[e],k[g]=this.params[g].value(b[g]),l=this.params[g],m=b[g],f=0;f<l.replace.length;f++)l.replace[f].from===m&&(m=l.replace[f].to);L(m)&&(m=l.type.decode(m)),k[g]=l.value(m)}return k},r.prototype.parameters=function(a){return L(a)?this.params[a]||null:this.$$paramNames},r.prototype.validates=function(a){return this.params.$$validates(a)},r.prototype.format=function(a){function b(a){return encodeURIComponent(a).replace(/-/g,function(a){return"%5C%"+a.charCodeAt(0).toString(16).toUpperCase()})}a=a||{};var c=this.segments,d=this.parameters(),e=this.params;if(!this.validates(a))return null;var f,g=!1,h=c.length-1,i=d.length,j=c[0];for(f=0;i>f;f++){var k=h>f,l=d[f],m=e[l],n=m.value(a[l]),p=m.isOptional&&m.type.equals(m.value(),n),q=p?m.squash:!1,r=m.type.encode(n);if(k){var s=c[f+1],t=f+1===h;if(q===!1)null!=r&&(j+=P(r)?o(r,b).join("-"):encodeURIComponent(r)),j+=s;else if(q===!0){var u=j.match(/\/$/)?/\/?(.*)/:/(.*)/;j+=s.match(u)[1]}else N(q)&&(j+=q+s);t&&m.squash===!0&&"/"===j.slice(-1)&&(j=j.slice(0,-1))}else{if(null==r||p&&q!==!1)continue;if(P(r)||(r=[r]),0===r.length)continue;r=o(r,encodeURIComponent).join("&"+l+"="),j+=(g?"&":"?")+(l+"="+r),g=!0}}return j},s.prototype.is=function(a,b){return!0},s.prototype.encode=function(a,b){return a},s.prototype.decode=function(a,b){return a},s.prototype.equals=function(a,b){return a==b},s.prototype.$subPattern=function(){var a=this.pattern.toString();return a.substr(1,a.length-2)},s.prototype.pattern=/.*/,s.prototype.toString=function(){return"{Type:"+this.name+"}"},s.prototype.$normalize=function(a){return this.is(a)?a:this.decode(a)},s.prototype.$asArray=function(a,b){function d(a,b){function d(a,b){return function(){return a[b].apply(a,arguments)}}function e(a){return P(a)?a:L(a)?[a]:[]}function f(a){switch(a.length){case 0:return c;case 1:return"auto"===b?a[0]:a;default:return a}}function g(a){return!a}function h(a,b){return function(c){if(P(c)&&0===c.length)return c;c=e(c);var d=o(c,a);return b===!0?0===n(d,g).length:f(d)}}function i(a){return function(b,c){var d=e(b),f=e(c);if(d.length!==f.length)return!1;for(var g=0;g<d.length;g++)if(!a(d[g],f[g]))return!1;return!0}}this.encode=h(d(a,"encode")),this.decode=h(d(a,"decode")),this.is=h(d(a,"is"),!0),this.equals=i(d(a,"equals")),this.pattern=a.pattern,this.$normalize=h(d(a,"$normalize")),this.name=a.name,this.$arrayMode=b}if(!a)return this;if("auto"===a&&!b)throw new Error("'auto' array mode is for query parameters only");return new d(this,a)},b.module("ui.router.util").provider("$urlMatcherFactory",t),b.module("ui.router.util").run(["$urlMatcherFactory",function(a){}]),u.$inject=["$locationProvider","$urlMatcherFactoryProvider"],b.module("ui.router.router").provider("$urlRouter",u),v.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],b.module("ui.router.state").factory("$stateParams",function(){return{}}).constant("$state.runtime",{autoinject:!0}).provider("$state",v).run(["$injector",function(a){
a.get("$state.runtime").autoinject&&a.get("$state")}]),w.$inject=[],b.module("ui.router.state").provider("$view",w),b.module("ui.router.state").provider("$uiViewScroll",x),y.$inject=["$state","$injector","$uiViewScroll","$interpolate","$q"],z.$inject=["$compile","$controller","$state","$interpolate"],b.module("ui.router.state").directive("uiView",y),b.module("ui.router.state").directive("uiView",z),G.$inject=["$state","$timeout"],H.$inject=["$state","$timeout"],I.$inject=["$state","$stateParams","$interpolate"],b.module("ui.router.state").directive("uiSref",G).directive("uiSrefActive",I).directive("uiSrefActiveEq",I).directive("uiState",H),J.$inject=["$state"],K.$inject=["$state"],b.module("ui.router.state").filter("isState",J).filter("includedByState",K)}(window,window.angular);
/*
 AngularJS v1.5.7
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(R,C){'use strict';function Aa(a,b,c){if(!a)throw Ma("areq",b||"?",c||"required");return a}function Ba(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;ca(a)&&(a=a.join(" "));ca(b)&&(b=b.join(" "));return a+" "+b}function Na(a){var b={};a&&(a.to||a.from)&&(b.to=a.to,b.from=a.from);return b}function Y(a,b,c){var d="";a=ca(a)?a:a&&O(a)&&a.length?a.split(/\s+/):[];s(a,function(a,l){a&&0<a.length&&(d+=0<l?" ":"",d+=c?b+a:a+b)});return d}function Oa(a){if(a instanceof G)switch(a.length){case 0:return a;
case 1:if(1===a[0].nodeType)return a;break;default:return G(da(a))}if(1===a.nodeType)return G(a)}function da(a){if(!a[0])return a;for(var b=0;b<a.length;b++){var c=a[b];if(1==c.nodeType)return c}}function Pa(a,b,c){s(b,function(b){a.addClass(b,c)})}function Qa(a,b,c){s(b,function(b){a.removeClass(b,c)})}function V(a){return function(b,c){c.addClass&&(Pa(a,b,c.addClass),c.addClass=null);c.removeClass&&(Qa(a,b,c.removeClass),c.removeClass=null)}}function oa(a){a=a||{};if(!a.$$prepared){var b=a.domOperation||
Q;a.domOperation=function(){a.$$domOperationFired=!0;b();b=Q};a.$$prepared=!0}return a}function ha(a,b){Ca(a,b);Da(a,b)}function Ca(a,b){b.from&&(a.css(b.from),b.from=null)}function Da(a,b){b.to&&(a.css(b.to),b.to=null)}function W(a,b,c){var d=b.options||{};c=c.options||{};var e=(d.addClass||"")+" "+(c.addClass||""),l=(d.removeClass||"")+" "+(c.removeClass||"");a=Ra(a.attr("class"),e,l);c.preparationClasses&&(d.preparationClasses=Z(c.preparationClasses,d.preparationClasses),delete c.preparationClasses);
e=d.domOperation!==Q?d.domOperation:null;Ea(d,c);e&&(d.domOperation=e);d.addClass=a.addClass?a.addClass:null;d.removeClass=a.removeClass?a.removeClass:null;b.addClass=d.addClass;b.removeClass=d.removeClass;return d}function Ra(a,b,c){function d(a){O(a)&&(a=a.split(" "));var b={};s(a,function(a){a.length&&(b[a]=!0)});return b}var e={};a=d(a);b=d(b);s(b,function(a,b){e[b]=1});c=d(c);s(c,function(a,b){e[b]=1===e[b]?null:-1});var l={addClass:"",removeClass:""};s(e,function(b,c){var d,e;1===b?(d="addClass",
e=!a[c]):-1===b&&(d="removeClass",e=a[c]);e&&(l[d].length&&(l[d]+=" "),l[d]+=c)});return l}function z(a){return a instanceof C.element?a[0]:a}function Sa(a,b,c){var d="";b&&(d=Y(b,"ng-",!0));c.addClass&&(d=Z(d,Y(c.addClass,"-add")));c.removeClass&&(d=Z(d,Y(c.removeClass,"-remove")));d.length&&(c.preparationClasses=d,a.addClass(d))}function pa(a,b){var c=b?"-"+b+"s":"";la(a,[ma,c]);return[ma,c]}function ta(a,b){var c=b?"paused":"",d=$+"PlayState";la(a,[d,c]);return[d,c]}function la(a,b){a.style[b[0]]=
b[1]}function Z(a,b){return a?b?a+" "+b:a:b}function Fa(a,b,c){var d=Object.create(null),e=a.getComputedStyle(b)||{};s(c,function(a,b){var c=e[a];if(c){var g=c.charAt(0);if("-"===g||"+"===g||0<=g)c=Ta(c);0===c&&(c=null);d[b]=c}});return d}function Ta(a){var b=0;a=a.split(/\s*,\s*/);s(a,function(a){"s"==a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));a=parseFloat(a)||0;b=b?Math.max(a,b):a});return b}function ua(a){return 0===a||null!=a}function Ga(a,b){var c=S,d=a+"s";b?c+="Duration":d+=" linear all";
return[c,d]}function Ha(){var a=Object.create(null);return{flush:function(){a=Object.create(null)},count:function(b){return(b=a[b])?b.total:0},get:function(b){return(b=a[b])&&b.value},put:function(b,c){a[b]?a[b].total++:a[b]={total:1,value:c}}}}function Ia(a,b,c){s(c,function(c){a[c]=ea(a[c])?a[c]:b.style.getPropertyValue(c)})}var Q=C.noop,Ja=C.copy,Ea=C.extend,G=C.element,s=C.forEach,ca=C.isArray,O=C.isString,va=C.isObject,I=C.isUndefined,ea=C.isDefined,Ka=C.isFunction,wa=C.isElement,S,xa,$,ya;I(R.ontransitionend)&&
ea(R.onwebkittransitionend)?(S="WebkitTransition",xa="webkitTransitionEnd transitionend"):(S="transition",xa="transitionend");I(R.onanimationend)&&ea(R.onwebkitanimationend)?($="WebkitAnimation",ya="webkitAnimationEnd animationend"):($="animation",ya="animationend");var qa=$+"Delay",za=$+"Duration",ma=S+"Delay",La=S+"Duration",Ma=C.$$minErr("ng"),Ua={transitionDuration:La,transitionDelay:ma,transitionProperty:S+"Property",animationDuration:za,animationDelay:qa,animationIterationCount:$+"IterationCount"},
Va={transitionDuration:La,transitionDelay:ma,animationDuration:za,animationDelay:qa};C.module("ngAnimate",[]).directive("ngAnimateSwap",["$animate","$rootScope",function(a,b){return{restrict:"A",transclude:"element",terminal:!0,priority:600,link:function(b,d,e,l,n){var H,g;b.$watchCollection(e.ngAnimateSwap||e["for"],function(e){H&&a.leave(H);g&&(g.$destroy(),g=null);if(e||0===e)g=b.$new(),n(g,function(b){H=b;a.enter(b,null,d)})})}}}]).directive("ngAnimateChildren",["$interpolate",function(a){return{link:function(b,
c,d){function e(a){c.data("$$ngAnimateChildren","on"===a||"true"===a)}var l=d.ngAnimateChildren;C.isString(l)&&0===l.length?c.data("$$ngAnimateChildren",!0):(e(a(l)(b)),d.$observe("ngAnimateChildren",e))}}}]).factory("$$rAFScheduler",["$$rAF",function(a){function b(a){d=d.concat(a);c()}function c(){if(d.length){for(var b=d.shift(),n=0;n<b.length;n++)b[n]();e||a(function(){e||c()})}}var d,e;d=b.queue=[];b.waitUntilQuiet=function(b){e&&e();e=a(function(){e=null;b();c()})};return b}]).provider("$$animateQueue",
["$animateProvider",function(a){function b(a){if(!a)return null;a=a.split(" ");var b=Object.create(null);s(a,function(a){b[a]=!0});return b}function c(a,c){if(a&&c){var d=b(c);return a.split(" ").some(function(a){return d[a]})}}function d(a,b,c,d){return l[a].some(function(a){return a(b,c,d)})}function e(a,b){var c=0<(a.addClass||"").length,d=0<(a.removeClass||"").length;return b?c&&d:c||d}var l=this.rules={skip:[],cancel:[],join:[]};l.join.push(function(a,b,c){return!b.structural&&e(b)});l.skip.push(function(a,
b,c){return!b.structural&&!e(b)});l.skip.push(function(a,b,c){return"leave"==c.event&&b.structural});l.skip.push(function(a,b,c){return c.structural&&2===c.state&&!b.structural});l.cancel.push(function(a,b,c){return c.structural&&b.structural});l.cancel.push(function(a,b,c){return 2===c.state&&b.structural});l.cancel.push(function(a,b,d){if(d.structural)return!1;a=b.addClass;b=b.removeClass;var e=d.addClass;d=d.removeClass;return I(a)&&I(b)||I(e)&&I(d)?!1:c(a,d)||c(b,e)});this.$get=["$$rAF","$rootScope",
"$rootElement","$document","$$HashMap","$$animation","$$AnimateRunner","$templateRequest","$$jqLite","$$forceReflow",function(b,c,g,l,v,Wa,P,t,F,T){function J(){var a=!1;return function(b){a?b():c.$$postDigest(function(){a=!0;b()})}}function y(a,b,c){var f=z(b),d=z(a),N=[];(a=h[c])&&s(a,function(a){x.call(a.node,f)?N.push(a.callback):"leave"===c&&x.call(a.node,d)&&N.push(a.callback)});return N}function r(a,b,c){var f=da(b);return a.filter(function(a){return!(a.node===f&&(!c||a.callback===c))})}function p(a,
h,w){function r(c,f,d,h){sa(function(){var c=y(T,a,f);c.length?b(function(){s(c,function(b){b(a,d,h)});"close"!==d||a[0].parentNode||ra.off(a)}):"close"!==d||a[0].parentNode||ra.off(a)});c.progress(f,d,h)}function k(b){var c=a,f=m;f.preparationClasses&&(c.removeClass(f.preparationClasses),f.preparationClasses=null);f.activeClasses&&(c.removeClass(f.activeClasses),f.activeClasses=null);E(a,m);ha(a,m);m.domOperation();B.complete(!b)}var m=Ja(w),p,T;if(a=Oa(a))p=z(a),T=a.parent();var m=oa(m),B=new P,
sa=J();ca(m.addClass)&&(m.addClass=m.addClass.join(" "));m.addClass&&!O(m.addClass)&&(m.addClass=null);ca(m.removeClass)&&(m.removeClass=m.removeClass.join(" "));m.removeClass&&!O(m.removeClass)&&(m.removeClass=null);m.from&&!va(m.from)&&(m.from=null);m.to&&!va(m.to)&&(m.to=null);if(!p)return k(),B;w=[p.className,m.addClass,m.removeClass].join(" ");if(!Xa(w))return k(),B;var g=0<=["enter","move","leave"].indexOf(h),x=l[0].hidden,t=!f||x||N.get(p);w=!t&&A.get(p)||{};var F=!!w.state;t||F&&1==w.state||
(t=!M(a,T,h));if(t)return x&&r(B,h,"start"),k(),x&&r(B,h,"close"),B;g&&K(a);x={structural:g,element:a,event:h,addClass:m.addClass,removeClass:m.removeClass,close:k,options:m,runner:B};if(F){if(d("skip",a,x,w)){if(2===w.state)return k(),B;W(a,w,x);return w.runner}if(d("cancel",a,x,w))if(2===w.state)w.runner.end();else if(w.structural)w.close();else return W(a,w,x),w.runner;else if(d("join",a,x,w))if(2===w.state)W(a,x,{});else return Sa(a,g?h:null,m),h=x.event=w.event,m=W(a,w,x),w.runner}else W(a,x,
{});(F=x.structural)||(F="animate"===x.event&&0<Object.keys(x.options.to||{}).length||e(x));if(!F)return k(),ka(a),B;var v=(w.counter||0)+1;x.counter=v;L(a,1,x);c.$$postDigest(function(){var b=A.get(p),c=!b,b=b||{},f=0<(a.parent()||[]).length&&("animate"===b.event||b.structural||e(b));if(c||b.counter!==v||!f){c&&(E(a,m),ha(a,m));if(c||g&&b.event!==h)m.domOperation(),B.end();f||ka(a)}else h=!b.structural&&e(b,!0)?"setClass":b.event,L(a,2),b=Wa(a,h,b.options),B.setHost(b),r(B,h,"start",{}),b.done(function(b){k(!b);
(b=A.get(p))&&b.counter===v&&ka(z(a));r(B,h,"close",{})})});return B}function K(a){a=z(a).querySelectorAll("[data-ng-animate]");s(a,function(a){var b=parseInt(a.getAttribute("data-ng-animate")),c=A.get(a);if(c)switch(b){case 2:c.runner.end();case 1:A.remove(a)}})}function ka(a){a=z(a);a.removeAttribute("data-ng-animate");A.remove(a)}function k(a,b){return z(a)===z(b)}function M(a,b,c){c=G(l[0].body);var f=k(a,c)||"HTML"===a[0].nodeName,d=k(a,g),h=!1,r,e=N.get(z(a));(a=G.data(a[0],"$ngAnimatePin"))&&
(b=a);for(b=z(b);b;){d||(d=k(b,g));if(1!==b.nodeType)break;a=A.get(b)||{};if(!h){var p=N.get(b);if(!0===p&&!1!==e){e=!0;break}else!1===p&&(e=!1);h=a.structural}if(I(r)||!0===r)a=G.data(b,"$$ngAnimateChildren"),ea(a)&&(r=a);if(h&&!1===r)break;f||(f=k(b,c));if(f&&d)break;if(!d&&(a=G.data(b,"$ngAnimatePin"))){b=z(a);continue}b=b.parentNode}return(!h||r)&&!0!==e&&d&&f}function L(a,b,c){c=c||{};c.state=b;a=z(a);a.setAttribute("data-ng-animate",b);c=(b=A.get(a))?Ea(b,c):c;A.put(a,c)}var A=new v,N=new v,
f=null,B=c.$watch(function(){return 0===t.totalPendingRequests},function(a){a&&(B(),c.$$postDigest(function(){c.$$postDigest(function(){null===f&&(f=!0)})}))}),h={},sa=a.classNameFilter(),Xa=sa?function(a){return sa.test(a)}:function(){return!0},E=V(F),x=R.Node.prototype.contains||function(a){return this===a||!!(this.compareDocumentPosition(a)&16)},ra={on:function(a,b,c){var f=da(b);h[a]=h[a]||[];h[a].push({node:f,callback:c});G(b).on("$destroy",function(){A.get(f)||ra.off(a,b,c)})},off:function(a,
b,c){if(1!==arguments.length||C.isString(arguments[0])){var f=h[a];f&&(h[a]=1===arguments.length?null:r(f,b,c))}else for(f in b=arguments[0],h)h[f]=r(h[f],b)},pin:function(a,b){Aa(wa(a),"element","not an element");Aa(wa(b),"parentElement","not an element");a.data("$ngAnimatePin",b)},push:function(a,b,c,f){c=c||{};c.domOperation=f;return p(a,b,c)},enabled:function(a,b){var c=arguments.length;if(0===c)b=!!f;else if(wa(a)){var d=z(a),h=N.get(d);1===c?b=!h:N.put(d,!b)}else b=f=!!a;return b}};return ra}]}]).provider("$$animation",
["$animateProvider",function(a){var b=this.drivers=[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$HashMap","$$rAFScheduler",function(a,d,e,l,n,H){function g(a){function b(a){if(a.processed)return a;a.processed=!0;var d=a.domNode,p=d.parentNode;e.put(d,a);for(var K;p;){if(K=e.get(p)){K.processed||(K=b(K));break}p=p.parentNode}(K||c).children.push(a);return a}var c={children:[]},d,e=new n;for(d=0;d<a.length;d++){var g=a[d];e.put(g.domNode,a[d]={domNode:g.domNode,fn:g.fn,children:[]})}for(d=
0;d<a.length;d++)b(a[d]);return function(a){var b=[],c=[],d;for(d=0;d<a.children.length;d++)c.push(a.children[d]);a=c.length;var e=0,k=[];for(d=0;d<c.length;d++){var g=c[d];0>=a&&(a=e,e=0,b.push(k),k=[]);k.push(g.fn);g.children.forEach(function(a){e++;c.push(a)});a--}k.length&&b.push(k);return b}(c)}var u=[],v=V(a);return function(n,P,t){function F(a){a=a.hasAttribute("ng-animate-ref")?[a]:a.querySelectorAll("[ng-animate-ref]");var b=[];s(a,function(a){var c=a.getAttribute("ng-animate-ref");c&&c.length&&
b.push(a)});return b}function T(a){var b=[],c={};s(a,function(a,d){var h=z(a.element),e=0<=["enter","move"].indexOf(a.event),h=a.structural?F(h):[];if(h.length){var k=e?"to":"from";s(h,function(a){var b=a.getAttribute("ng-animate-ref");c[b]=c[b]||{};c[b][k]={animationID:d,element:G(a)}})}else b.push(a)});var d={},e={};s(c,function(c,k){var r=c.from,p=c.to;if(r&&p){var A=a[r.animationID],g=a[p.animationID],B=r.animationID.toString();if(!e[B]){var n=e[B]={structural:!0,beforeStart:function(){A.beforeStart();
g.beforeStart()},close:function(){A.close();g.close()},classes:J(A.classes,g.classes),from:A,to:g,anchors:[]};n.classes.length?b.push(n):(b.push(A),b.push(g))}e[B].anchors.push({out:r.element,"in":p.element})}else r=r?r.animationID:p.animationID,p=r.toString(),d[p]||(d[p]=!0,b.push(a[r]))});return b}function J(a,b){a=a.split(" ");b=b.split(" ");for(var c=[],d=0;d<a.length;d++){var e=a[d];if("ng-"!==e.substring(0,3))for(var r=0;r<b.length;r++)if(e===b[r]){c.push(e);break}}return c.join(" ")}function y(a){for(var c=
b.length-1;0<=c;c--){var d=e.get(b[c])(a);if(d)return d}}function r(a,b){function c(a){(a=a.data("$$animationRunner"))&&a.setHost(b)}a.from&&a.to?(c(a.from.element),c(a.to.element)):c(a.element)}function p(){var a=n.data("$$animationRunner");!a||"leave"===P&&t.$$domOperationFired||a.end()}function K(b){n.off("$destroy",p);n.removeData("$$animationRunner");v(n,t);ha(n,t);t.domOperation();L&&a.removeClass(n,L);n.removeClass("ng-animate");k.complete(!b)}t=oa(t);var ka=0<=["enter","move","leave"].indexOf(P),
k=new l({end:function(){K()},cancel:function(){K(!0)}});if(!b.length)return K(),k;n.data("$$animationRunner",k);var M=Ba(n.attr("class"),Ba(t.addClass,t.removeClass)),L=t.tempClasses;L&&(M+=" "+L,t.tempClasses=null);var A;ka&&(A="ng-"+P+"-prepare",a.addClass(n,A));u.push({element:n,classes:M,event:P,structural:ka,options:t,beforeStart:function(){n.addClass("ng-animate");L&&a.addClass(n,L);A&&(a.removeClass(n,A),A=null)},close:K});n.on("$destroy",p);if(1<u.length)return k;d.$$postDigest(function(){var a=
[];s(u,function(b){b.element.data("$$animationRunner")?a.push(b):b.close()});u.length=0;var b=T(a),c=[];s(b,function(a){c.push({domNode:z(a.from?a.from.element:a.element),fn:function(){a.beforeStart();var b,c=a.close;if((a.anchors?a.from.element||a.to.element:a.element).data("$$animationRunner")){var d=y(a);d&&(b=d.start)}b?(b=b(),b.done(function(a){c(!a)}),r(a,b)):c()}})});H(g(c))});return k}}]}]).provider("$animateCss",["$animateProvider",function(a){var b=Ha(),c=Ha();this.$get=["$window","$$jqLite",
"$$AnimateRunner","$timeout","$$forceReflow","$sniffer","$$rAFScheduler","$$animateQueue",function(a,e,l,n,H,g,u,v){function C(a,b){var c=a.parentNode;return(c.$$ngAnimateParentKey||(c.$$ngAnimateParentKey=++J))+"-"+a.getAttribute("class")+"-"+b}function P(r,p,g,n){var k;0<b.count(g)&&(k=c.get(g),k||(p=Y(p,"-stagger"),e.addClass(r,p),k=Fa(a,r,n),k.animationDuration=Math.max(k.animationDuration,0),k.transitionDuration=Math.max(k.transitionDuration,0),e.removeClass(r,p),c.put(g,k)));return k||{}}function t(a){y.push(a);
u.waitUntilQuiet(function(){b.flush();c.flush();for(var a=H(),d=0;d<y.length;d++)y[d](a);y.length=0})}function F(c,e,g){e=b.get(g);e||(e=Fa(a,c,Ua),"infinite"===e.animationIterationCount&&(e.animationIterationCount=1));b.put(g,e);c=e;g=c.animationDelay;e=c.transitionDelay;c.maxDelay=g&&e?Math.max(g,e):g||e;c.maxDuration=Math.max(c.animationDuration*c.animationIterationCount,c.transitionDuration);return c}var T=V(e),J=0,y=[];return function(a,c){function d(){k()}function u(){k(!0)}function k(b){if(!(x||
G&&J)){x=!0;J=!1;f.$$skipPreparationClasses||e.removeClass(a,ga);e.removeClass(a,ea);ta(h,!1);pa(h,!1);s(y,function(a){h.style[a[0]]=""});T(a,f);ha(a,f);Object.keys(B).length&&s(B,function(a,b){a?h.style.setProperty(b,a):h.style.removeProperty(b)});if(f.onDone)f.onDone();fa&&fa.length&&a.off(fa.join(" "),A);var c=a.data("$$animateCss");c&&(n.cancel(c[0].timer),a.removeData("$$animateCss"));I&&I.complete(!b)}}function M(a){q.blockTransition&&pa(h,a);q.blockKeyframeAnimation&&ta(h,!!a)}function L(){I=
new l({end:d,cancel:u});t(Q);k();return{$$willAnimate:!1,start:function(){return I},end:d}}function A(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-W,0)>=R&&b>=m&&(G=!0,k())}function N(){function b(){if(!x){M(!1);s(y,function(a){h.style[a[0]]=a[1]});T(a,f);e.addClass(a,ea);if(q.recalculateTimingStyles){na=h.className+" "+ga;ia=C(h,na);D=F(h,na,ia);aa=D.maxDelay;O=Math.max(aa,0);m=D.maxDuration;if(0===m){k();return}q.hasTransitions=
0<D.transitionDuration;q.hasAnimations=0<D.animationDuration}q.applyAnimationDelay&&(aa="boolean"!==typeof f.delay&&ua(f.delay)?parseFloat(f.delay):aa,O=Math.max(aa,0),D.animationDelay=aa,ba=[qa,aa+"s"],y.push(ba),h.style[ba[0]]=ba[1]);R=1E3*O;V=1E3*m;if(f.easing){var d,g=f.easing;q.hasTransitions&&(d=S+"TimingFunction",y.push([d,g]),h.style[d]=g);q.hasAnimations&&(d=$+"TimingFunction",y.push([d,g]),h.style[d]=g)}D.transitionDuration&&fa.push(xa);D.animationDuration&&fa.push(ya);W=Date.now();var p=
R+1.5*V;d=W+p;var g=a.data("$$animateCss")||[],N=!0;if(g.length){var l=g[0];(N=d>l.expectedEndTime)?n.cancel(l.timer):g.push(k)}N&&(p=n(c,p,!1),g[0]={timer:p,expectedEndTime:d},g.push(k),a.data("$$animateCss",g));if(fa.length)a.on(fa.join(" "),A);f.to&&(f.cleanupStyles&&Ia(B,h,Object.keys(f.to)),Da(a,f))}}function c(){var b=a.data("$$animateCss");if(b){for(var d=1;d<b.length;d++)b[d]();a.removeData("$$animateCss")}}if(!x)if(h.parentNode){var d=function(a){if(G)J&&a&&(J=!1,k());else if(J=!a,D.animationDuration)if(a=
ta(h,J),J)y.push(a);else{var b=y,c=b.indexOf(a);0<=a&&b.splice(c,1)}},g=0<da&&(D.transitionDuration&&0===X.transitionDuration||D.animationDuration&&0===X.animationDuration)&&Math.max(X.animationDelay,X.transitionDelay);g?n(b,Math.floor(g*da*1E3),!1):b();w.resume=function(){d(!0)};w.pause=function(){d(!1)}}else k()}var f=c||{};f.$$prepared||(f=oa(Ja(f)));var B={},h=z(a);if(!h||!h.parentNode||!v.enabled())return L();var y=[],H=a.attr("class"),E=Na(f),x,J,G,I,w,O,R,m,V,W,fa=[];if(0===f.duration||!g.animations&&
!g.transitions)return L();var ja=f.event&&ca(f.event)?f.event.join(" "):f.event,Z="",U="";ja&&f.structural?Z=Y(ja,"ng-",!0):ja&&(Z=ja);f.addClass&&(U+=Y(f.addClass,"-add"));f.removeClass&&(U.length&&(U+=" "),U+=Y(f.removeClass,"-remove"));f.applyClassesEarly&&U.length&&T(a,f);var ga=[Z,U].join(" ").trim(),na=H+" "+ga,ea=Y(ga,"-active"),H=E.to&&0<Object.keys(E.to).length;if(!(0<(f.keyframeStyle||"").length||H||ga))return L();var ia,X;0<f.stagger?(E=parseFloat(f.stagger),X={transitionDelay:E,animationDelay:E,
transitionDuration:0,animationDuration:0}):(ia=C(h,na),X=P(h,ga,ia,Va));f.$$skipPreparationClasses||e.addClass(a,ga);f.transitionStyle&&(E=[S,f.transitionStyle],la(h,E),y.push(E));0<=f.duration&&(E=0<h.style[S].length,E=Ga(f.duration,E),la(h,E),y.push(E));f.keyframeStyle&&(E=[$,f.keyframeStyle],la(h,E),y.push(E));var da=X?0<=f.staggerIndex?f.staggerIndex:b.count(ia):0;(ja=0===da)&&!f.skipBlocking&&pa(h,9999);var D=F(h,na,ia),aa=D.maxDelay;O=Math.max(aa,0);m=D.maxDuration;var q={};q.hasTransitions=
0<D.transitionDuration;q.hasAnimations=0<D.animationDuration;q.hasTransitionAll=q.hasTransitions&&"all"==D.transitionProperty;q.applyTransitionDuration=H&&(q.hasTransitions&&!q.hasTransitionAll||q.hasAnimations&&!q.hasTransitions);q.applyAnimationDuration=f.duration&&q.hasAnimations;q.applyTransitionDelay=ua(f.delay)&&(q.applyTransitionDuration||q.hasTransitions);q.applyAnimationDelay=ua(f.delay)&&q.hasAnimations;q.recalculateTimingStyles=0<U.length;if(q.applyTransitionDuration||q.applyAnimationDuration)m=
f.duration?parseFloat(f.duration):m,q.applyTransitionDuration&&(q.hasTransitions=!0,D.transitionDuration=m,E=0<h.style[S+"Property"].length,y.push(Ga(m,E))),q.applyAnimationDuration&&(q.hasAnimations=!0,D.animationDuration=m,y.push([za,m+"s"]));if(0===m&&!q.recalculateTimingStyles)return L();if(null!=f.delay){var ba;"boolean"!==typeof f.delay&&(ba=parseFloat(f.delay),O=Math.max(ba,0));q.applyTransitionDelay&&y.push([ma,ba+"s"]);q.applyAnimationDelay&&y.push([qa,ba+"s"])}null==f.duration&&0<D.transitionDuration&&
(q.recalculateTimingStyles=q.recalculateTimingStyles||ja);R=1E3*O;V=1E3*m;f.skipBlocking||(q.blockTransition=0<D.transitionDuration,q.blockKeyframeAnimation=0<D.animationDuration&&0<X.animationDelay&&0===X.animationDuration);f.from&&(f.cleanupStyles&&Ia(B,h,Object.keys(f.from)),Ca(a,f));q.blockTransition||q.blockKeyframeAnimation?M(m):f.skipBlocking||pa(h,!1);return{$$willAnimate:!0,end:d,start:function(){if(!x)return w={end:d,cancel:u,resume:null,pause:null},I=new l(w),t(N),I}}}}]}]).provider("$$animateCssDriver",
["$$animationProvider",function(a){a.drivers.push("$$animateCssDriver");this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(a,c,d,e,l,n,H){function g(a){return a.replace(/\bng-\S+\b/g,"")}function u(a,b){O(a)&&(a=a.split(" "));O(b)&&(b=b.split(" "));return a.filter(function(a){return-1===b.indexOf(a)}).join(" ")}function v(c,e,n){function l(a){var b={},c=z(a).getBoundingClientRect();s(["width","height","top","left"],function(a){var d=c[a];
switch(a){case "top":d+=t.scrollTop;break;case "left":d+=t.scrollLeft}b[a]=Math.floor(d)+"px"});return b}function p(){var c=g(n.attr("class")||""),d=u(c,k),c=u(k,c),d=a(v,{to:l(n),addClass:"ng-anchor-in "+d,removeClass:"ng-anchor-out "+c,delay:!0});return d.$$willAnimate?d:null}function H(){v.remove();e.removeClass("ng-animate-shim");n.removeClass("ng-animate-shim")}var v=G(z(e).cloneNode(!0)),k=g(v.attr("class")||"");e.addClass("ng-animate-shim");n.addClass("ng-animate-shim");v.addClass("ng-anchor");
F.append(v);var M;c=function(){var c=a(v,{addClass:"ng-anchor-out",delay:!0,from:l(e)});return c.$$willAnimate?c:null}();if(!c&&(M=p(),!M))return H();var L=c||M;return{start:function(){function a(){c&&c.end()}var b,c=L.start();c.done(function(){c=null;if(!M&&(M=p()))return c=M.start(),c.done(function(){c=null;H();b.complete()}),c;H();b.complete()});return b=new d({end:a,cancel:a})}}}function C(a,b,c,e){var g=P(a,Q),n=P(b,Q),l=[];s(e,function(a){(a=v(c,a.out,a["in"]))&&l.push(a)});if(g||n||0!==l.length)return{start:function(){function a(){s(b,
function(a){a.end()})}var b=[];g&&b.push(g.start());n&&b.push(n.start());s(l,function(a){b.push(a.start())});var c=new d({end:a,cancel:a});d.all(b,function(a){c.complete(a)});return c}}}function P(c){var d=c.element,e=c.options||{};c.structural&&(e.event=c.event,e.structural=!0,e.applyClassesEarly=!0,"leave"===c.event&&(e.onDone=e.domOperation));e.preparationClasses&&(e.event=Z(e.event,e.preparationClasses));c=a(d,e);return c.$$willAnimate?c:null}if(!l.animations&&!l.transitions)return Q;var t=H[0].body;
c=z(e);var F=G(c.parentNode&&11===c.parentNode.nodeType||t.contains(c)?c:t);V(n);return function(a){return a.from&&a.to?C(a.from,a.to,a.classes,a.anchors):P(a)}}]}]).provider("$$animateJs",["$animateProvider",function(a){this.$get=["$injector","$$AnimateRunner","$$jqLite",function(b,c,d){function e(c){c=ca(c)?c:c.split(" ");for(var d=[],e={},l=0;l<c.length;l++){var v=c[l],s=a.$$registeredAnimations[v];s&&!e[v]&&(d.push(b.get(s)),e[v]=!0)}return d}var l=V(d);return function(a,b,d,u){function v(){u.domOperation();
l(a,u)}function C(a,b,d,e,f){switch(d){case "animate":b=[b,e.from,e.to,f];break;case "setClass":b=[b,G,J,f];break;case "addClass":b=[b,G,f];break;case "removeClass":b=[b,J,f];break;default:b=[b,f]}b.push(e);if(a=a.apply(a,b))if(Ka(a.start)&&(a=a.start()),a instanceof c)a.done(f);else if(Ka(a))return a;return Q}function z(a,b,d,e,f){var g=[];s(e,function(e){var k=e[f];k&&g.push(function(){var e,f,g=!1,h=function(a){g||(g=!0,(f||Q)(a),e.complete(!a))};e=new c({end:function(){h()},cancel:function(){h(!0)}});
f=C(k,a,b,d,function(a){h(!1===a)});return e})});return g}function t(a,b,d,e,f){var g=z(a,b,d,e,f);if(0===g.length){var h,k;"beforeSetClass"===f?(h=z(a,"removeClass",d,e,"beforeRemoveClass"),k=z(a,"addClass",d,e,"beforeAddClass")):"setClass"===f&&(h=z(a,"removeClass",d,e,"removeClass"),k=z(a,"addClass",d,e,"addClass"));h&&(g=g.concat(h));k&&(g=g.concat(k))}if(0!==g.length)return function(a){var b=[];g.length&&s(g,function(a){b.push(a())});b.length?c.all(b,a):a();return function(a){s(b,function(b){a?
b.cancel():b.end()})}}}var F=!1;3===arguments.length&&va(d)&&(u=d,d=null);u=oa(u);d||(d=a.attr("class")||"",u.addClass&&(d+=" "+u.addClass),u.removeClass&&(d+=" "+u.removeClass));var G=u.addClass,J=u.removeClass,y=e(d),r,p;if(y.length){var K,I;"leave"==b?(I="leave",K="afterLeave"):(I="before"+b.charAt(0).toUpperCase()+b.substr(1),K=b);"enter"!==b&&"move"!==b&&(r=t(a,b,u,y,I));p=t(a,b,u,y,K)}if(r||p){var k;return{$$willAnimate:!0,end:function(){k?k.end():(F=!0,v(),ha(a,u),k=new c,k.complete(!0));return k},
start:function(){function b(c){F=!0;v();ha(a,u);k.complete(c)}if(k)return k;k=new c;var d,e=[];r&&e.push(function(a){d=r(a)});e.length?e.push(function(a){v();a(!0)}):v();p&&e.push(function(a){d=p(a)});k.setHost({end:function(){F||((d||Q)(void 0),b(void 0))},cancel:function(){F||((d||Q)(!0),b(!0))}});c.chain(e,b);return k}}}}}]}]).provider("$$animateJsDriver",["$$animationProvider",function(a){a.drivers.push("$$animateJsDriver");this.$get=["$$animateJs","$$AnimateRunner",function(a,c){function d(c){return a(c.element,
c.event,c.classes,c.options)}return function(a){if(a.from&&a.to){var b=d(a.from),n=d(a.to);if(b||n)return{start:function(){function a(){return function(){s(d,function(a){a.end()})}}var d=[];b&&d.push(b.start());n&&d.push(n.start());c.all(d,function(a){e.complete(a)});var e=new c({end:a(),cancel:a()});return e}}}else return d(a)}}]}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

!function(){"use strict";function t(t){t.interceptors.push("SessionInterceptorFactory")}angular.module("rets-rabbit-angular.config",[]).config(t),t.$inject=["$httpProvider"]}();
!function(){"use strict";angular.module("rets-rabbit-angular",["rets-rabbit-angular.config","rets-rabbit-angular.factories","rets-rabbit-angular.providers"])}();
!function(){"use strict";function e(e,t,n,o){function r(){var r=t.defer();return e({method:"POST",url:o.baseUrl+"api/oauth/access_token",config:{ignoreAuth:!0},data:{client_id:o.clientId,client_secret:o.clientSecret,grant_type:"client_credentials"}}).success(function(e){n.localStorage.setItem("token",e.access_token),console.log(n.localStorage.getItem("token")),r.resolve(e)}).error(function(e){r.reject(e)}),r.promise}var c={getToken:r};return c}angular.module("rets-rabbit-angular.factory.auth",[]).factory("RRAuthFactory",e),e.$inject=["$http","$q","$window","ApiConfig"]}();
!function(){"use strict";function e(){function e(){return[{name:"ListPrice",type:"Number"},{name:"ListingId",type:"String"},{name:"ListingKey",type:"Number"},{name:"OriginatingSystemKey",type:"String"},{name:"StandardStatus",type:"String"},{name:"ListingContractDate",type:"Date"},{name:"PurchaseContractDate",type:"Date"},{name:"CloseDate",type:"Date"},{name:"ModificationTimestamp",type:"Timestamp"},{name:"StatusChangeTimestamp",type:"Timestamp"},{name:"MajorChangeType",type:"String"},{name:"OriginalEntryTimestamp",type:"Timestamp"},{name:"OnMarketTimestamp",type:"Timestamp"},{name:"OffMarketTimestamp",type:"Timestamp"},{name:"DaysOnMarket",type:"Number"},{name:"CumulativeDaysOnMarket",type:"Number"},{name:"ClosePrice",type:"Number"},{name:"ListPrice",type:"Number"},{name:"OriginalListPrice",type:"Number"},{name:"ListPriceLow",type:"Number"},{name:"InternetEntireListingDisplayYN",type:"Boolean"},{name:"InternetAddressDisplayYN",type:"Boolean"},{name:"PhotosCount",type:"Number"},{name:"PhotosChangeTimestamp",type:"Timestamp"},{name:"VirtualTourURLUnbranded",type:"String"},{name:"PublicRemarks",type:"String"},{name:"StreetNumber",type:"String"},{name:"StreetNumberNumeric",type:"Number"},{name:"StreetName",type:"String"},{name:"StreetSuffix",type:"String"},{name:"City",type:"String"},{name:"StateOrProvince",type:"String"},{name:"PostalCode",type:"Number"},{name:"PostalCodePlus4",type:"Number"},{name:"CountyOrParish",type:"String"},{name:"MLSAreaMajor",type:"String"},{name:"Directions",type:"String"},{name:"ListAgentFirstName",type:"String"},{name:"ListAgentLastName",type:"String"},{name:"ListAgentMlsId",type:"String"},{name:"ListAgentStateLicense",type:"Number"},{name:"ListOfficeName",type:"String"},{name:"ListOfficeMlsId",type:"String"},{name:"BuyerAgentFirstName",type:"String"},{name:"BuyerAgentLastName",type:"String"},{name:"BuyerAgentMlsId",type:"String"},{name:"BuyerAgentStateLicense",type:"Number"},{name:"BuyerOfficeName",type:"String"},{name:"BuyerOfficeMlsId",type:"String"}]}var t={fields:e};return t}angular.module("rets-rabbit-angular.factory.metadata",[]).factory("MetadataFactory",e)}();
!function(){"use strict";angular.module("rets-rabbit-angular.factories",["rets-rabbit-angular.factory.auth","rets-rabbit-angular.factory.metadata","rets-rabbit-angular.factory.queries","rets-rabbit-angular.factory.properties","rets-rabbit-angular.factory.session.interceptor"])}();
!function(){"use strict";function e(e,r,t,o){function a(a,n){var c=r.defer();return e.get(o.apiUrl+"property/"+a,{params:n,headers:{Authorization:"Bearer "+t.localStorage.getItem("token")}}).success(function(e){var r=e.value;c.resolve(r)}).error(function(e){c.reject(e)}),c.promise}function n(){var a=r.defer();return e.get(o.apiUrl+"property/$metadata",{headers:{Authorization:"Bearer "+t.localStorage.getItem("token")}}).success(function(e){a.resolve(e)}).error(function(e){a.reject(e)}),a.promise}function c(a){var n=r.defer();encodeURIComponent(a);return e.get(o.apiUrl+"property?"+a,{headers:{Accept:"odata.metadata=full",Authorization:"Bearer "+t.localStorage.getItem("token")}}).success(function(e){n.resolve(e)}).error(function(e){n.reject(e)}),n.promise}var i={findOne:a,metadata:n,search:c};return i}angular.module("rets-rabbit-angular.factory.properties",[]).factory("PropertyFactory",e),e.$inject=["$http","$q","$window","ApiConfig"]}();
!function(){"use strict";function e(){function e(){return[{title:"Equals Comparison",description:"Get properties where the Listing Agent's last name (field ListAgentLastName) is 'Smith' (case sensitive).",query:{select:"ListingId, ListPrice, ListAgentFirstName, ListAgentLastName",filter:[{value:"ListAgentLastName eq 'Smith'",join:"and"}],orderby:[],top:"",skip:""}},{title:"Multiple Field Values",description:"This query gets properties where the listing agent's last name is either 'Smith' or 'Doe'.",query:{select:"ListingId, ListPrice, ListAgentFirstName",filter:[{value:"ListAgentLastName eq 'Doe'",join:"or"},{value:"ListAgentLastName eq 'Smith'",join:"and"}],orderby:[],top:"",skip:""}},{title:"Wildcard Search",description:"You can do wildcard or case insensitive searches by using the special string functions with the $filter option.",query:{select:"ListingId, ListPrice, ListAgentFirstName",filter:[{value:"startswith(ListAgentFirstName, 'joh')",join:"and"}],orderby:[],top:"",skip:""}},{title:"Numeric Range",description:"This query selects properties with a listing price between $50K & $200K .",query:{select:"ListingId, ListPrice",filter:[{value:"ListPrice ge 50000",join:"and"},{value:"ListPrice le 200000",join:""}],orderby:[],top:"",skip:""}},{title:"Date Filtering",description:"This query gets properties listed in June 2016 by the ListingContractDate field.",query:{select:"ListingId, ListPrice, ListingContractDate",filter:[{value:"year(ListingContractDate) eq 2016",join:"and"},{value:"month(ListingContractDate) eq 6",join:""}],orderby:[],top:"",skip:""}},{title:"Sorting",description:"This query is sorted (asc) by the ListPrice field.",query:{select:"ListingId, ListPrice, ListingContractDate",filter:[{value:"year(ListingContractDate) eq 2016",join:"and"},{value:"month(ListingContractDate) eq 6",join:""}],orderby:[{value:"ListPrice",direction:"asc"}],top:"",skip:""}},{title:"Pagination",description:"This query gets the next set of results by passing a $skip parameter value of 11 with a $top value of 10.",query:{select:"ListingId, ListPrice, ListingContractDate",filter:[{value:"year(ListingContractDate) eq 2016",join:"and"},{value:"month(ListingContractDate) eq 6",join:""}],orderby:[{value:"ListPrice",direction:"asc"}],top:"10",skip:"11"}}]}var t={queries:e};return t}angular.module("rets-rabbit-angular.factory.queries",[]).factory("QueryFactory",e)}();
!function(){"use strict";function t(t,e,r){function n(n){var i=n.config.config||{};if(!i.ignoreAuth&&401==n.status&&c>o){o++;var u=t.get("RRAuthFactory"),a=t.get("$http"),f=e.defer();return u.getToken().then(function(t){f.resolve(t)},function(t){f.reject(t)}),f.promise.then(function(){var t=r.localStorage.getItem("token");return n.config.headers.Authorization="Bearer "+t,a(n.config)},function(t){return e.reject(n)})}return o=0,e.reject(n)}var o=0,c=5,i={responseError:n};return i}angular.module("rets-rabbit-angular.factory.session.interceptor",[]).factory("SessionInterceptorFactory",t),t.$inject=["$injector","$q","$window"]}();
!function(){"use strict";function e(){var e={baseUrl:"https://stage.retsrabbit.com/",apiEndPoint:"api/v2/",clientId:"",clientSecret:""},t={setBaseUrl:function(t){""!==t&&(e.baseUrl=t,"/"!==e.baseUrl[e.baseUrl.length-1]&&(e.baseUrl+="/"))},setApiEndPoint:function(t){e.api=t},setClientId:function(t){e.clientId=t},setClientSecret:function(t){e.clientSecret=t},$get:function(){return{baseUrl:e.baseUrl,apiUrl:e.baseUrl+e.apiEndPoint,clientId:e.clientId,clientSecret:e.clientSecret}}};return t}angular.module("rets-rabbit-angular.provider.api",[]).provider("ApiConfig",e),e.$inject=[]}();
!function(){"use strict";angular.module("rets-rabbit-angular.providers",["rets-rabbit-angular.provider.api"])}();
!function(){"use strict";angular.module("rr.api.v2.explorer",["rets-rabbit-angular","ngAnimate","rr.api.v2.explorer.directives","rr.api.v2.explorer.filters","rr.api.v2.explorer.templates"])}();
angular.module("rr.api.v2.explorer.templates",[]).run(["$templateCache",function(n){n.put("explorer.bootstrap.html",'<div class="rets-rabbit-explorer">\n	<!-- FORM -->\n	<div class="row">\n		<!-- QUERY BUILDER -->\n	    <div class="col-sm-6 col-xs-12">\n	        <h3>Build Query</h3>\n	        <form ng-submit="vm.doSearch(explorerForm.$valid)" name="explorerForm" role="form" class="form-horizontal" novalidate>\n	            <!-- SELECT -->\n	            <div class="form-group">\n	                <label class="control-label col-sm-2" for="select">$select:</label>\n	                <div class="col-sm-10">\n	                    <input class="form-control" ng-change="vm.updateQuery()" name="select" ng-model="vm.data.searchForm.select" id="select" type="text" />\n	                </div>\n	            </div>\n	            <!-- FILTER -->\n	            <div class="form-group">\n	                <label class="control-label col-sm-2" for="filter">$filter:</label>\n	                <div class="col-sm-10">\n	                    <div class="row" ng-repeat-start="filter in vm.data.searchForm.filter track by $index">\n	                        <div class="col-sm-10 col-xs-10">\n	                            <input ng-change="vm.updateQuery()" name="filter_{{$index}}" class="form-control" required ng-model="vm.data.searchForm.filter[$index].value" id="filter_{{$index+1}}" type="text" />\n	                            <div ng-show="explorerForm.$submitted || explorerForm.filter_{{$index}}.$touched">\n	                                <p ng-show="explorerForm.filter_{{$index}}.$invalid" class="help-block">\n	                                    <i class="fa fa-exclamation" aria-hidden="true"></i>&nbsp;Filter must not be empty\n	                                </p>\n	                            </div>\n	                        </div>\n	                        <!-- REMOVE FILTER -->\n	                        <div class="col-sm-2 col-xs-2">\n	                            <button type="button" class="btn btn-danger pull-right" ng-click="vm.removeFilter(filter)"><i class="fa fa-trash-o"></i></button>\n	                        </div>\n	                    </div>\n	                    <!-- JOIN: AND | OR -->\n	                    <div class="row" ng-repeat-end ng-if="$index + 1 < vm.data.searchForm.filter.length" style="margin-top:15px; margin-bottom:15px">\n	                        <div class="visible-xs col-xs-3"></div>\n	                        <div class="col-sm-3 col-sm-offset-4 col-xs-4 text-center">\n	                            <select ng-model="vm.data.searchForm.filter[$index].join" class="form-control" ng-change="vm.updateQuery()">\n	                                <option value="and" selected>and</option>\n	                                <option value="or">or</option>\n	                            </select>\n	                        </div>\n	                    </div>\n	                    <!-- EMPTY MESSAGE -->\n	                    <div class="row" ng-show="vm.data.searchForm.filter.length < 1">\n	                        <div class="col-sm-12">\n	                            <div class="bg-info" style="padding:7px"><i class="fa fa-info" aria-hidden="true"></i>&nbsp;Click the button below to add your first filter</div>\n	                        </div>\n	                    </div>\n	                    <!-- ADD FILTER -->\n	                    <div class="row">\n	                        <div class="col-sm-12 col-xs-12 text-center" style="margin-top:20px">\n	                            <button type="button" class="btn btn-success pull-right" ng-click="vm.addFilter()"><i class="fa fa-plus" aria-hidden="true"></i>&nbsp;Add Filter</button>\n	                        </div>\n	                    </div>\n	                </div>\n	            </div>\n	            <!-- ORDERBY -->\n	            <div class="form-group">\n	                <label class="control-label col-sm-2" for="orderby">$orderby:</label>\n	                <div class="col-sm-10">\n	                    <div style="margin-bottom:15px" class="row" ng-repeat="orderby in vm.data.searchForm.orderby track by $index">\n	                        <div class="col-sm-7 col-xs-6">\n	                            <input name="orderby_{{$index}}" ng-model="vm.data.searchForm.orderby[$index].value" id="orderby_input_{{$index+1}}" class="form-control" required value="orderby.value" ng-change="vm.updateQuery()" type="text" />\n	                            <div ng-show="explorerForm.$submitted || explorerForm.orderby_{{$index}}.$touched">\n	                                <p ng-show="explorerForm.orderby_{{$index}}.$invalid" class="help-block"><i class="fa fa-exclamation" aria-hidden="true"></i>&nbsp;Orderby must not be empty</p>\n	                            </div>\n	                        </div>\n	                        <div class="col-sm-3 col-xs-3">\n	                            <select ng-model="vm.data.searchForm.orderby[$index].direction" class="form-control" ng-change="vm.updateQuery()">\n	                                <option value="asc" selected>asc</option>\n	                                <option value="desc">desc</option>\n	                            </select>\n	                        </div>\n	                        <!-- REMOVE FILTER -->\n	                        <div class="col-sm-2 col-xs-3">\n	                            <button type="button" class="btn btn-danger pull-right" ng-click="vm.removeOrderby(orderby)"><i class="fa fa-trash-o"></i></button>\n	                        </div>\n	                    </div>\n	                    <!-- EMPTY MESSAGE -->\n	                    <div class="row" ng-show="vm.data.searchForm.orderby.length < 1" style="margin-bottom:20px">\n	                        <div class="col-sm-12">\n	                            <div class="bg-info" style="padding:7px"><i class="fa fa-info" aria-hidden="true"></i>&nbsp;Click the button below to add your first orderby</div>\n	                        </div>\n	                    </div>\n	                    <!-- ADD ORDERBY -->\n	                    <div class="row">\n	                        <div class="col-sm-12 col-xs-12 text-center">\n	                            <button type="button" class="btn btn-success pull-right" ng-click="vm.addOrderby()"><i class="fa fa-plus" aria-hidden="true"></i>&nbsp;Add Orderby</button>\n	                        </div>\n	                    </div>\n	                </div>\n	            </div>\n	            <!-- TOP -->\n	            <div class="form-group">\n	                <label class="control-label col-sm-2" for="top">$top:</label>\n	                <div class="col-sm-4">\n	                    <input ng-change="vm.updateQuery()" ng-model="vm.data.searchForm.top" name="top" class="form-control" id="top" type="tel" />\n	                </div>\n	                <div class="visible-xs">&nbsp;\n	                    <br>\n	                </div>\n	                <!-- SKIP -->\n	                <label class="control-label col-sm-2" for="skip">$skip:</label>\n	                <div class="col-sm-4">\n	                    <input ng-change="vm.updateQuery()" ng-model="vm.data.searchForm.skip" name="skip" class="form-control" id="skip" type="tel" />\n	                </div>\n	            </div>\n	            <div class="form-group">\n	                <div class="col-sm-12 col-xs-12">\n	                    <button type="submit" class="btn btn-primary pull-right" ng-disabled="vm.data.searching" value="search">\n	                        <span ng-if="!vm.data.searching">Search</span>\n	                        <span ng-if="vm.data.searching">Searching...</span>\n	                    </button>\n	                </div>\n	            </div>\n	        </form>\n	    </div>\n	    <!-- REQUEST -->\n	    <div class="col-sm-6 col-xs-12">\n	        <h3>Request</h3>\n	        <code style="display:block; padding:10px">\n				{{vm.data.fullRequest}}\n			</code>\n	    </div>\n    </div>\n    <div class="row">\n        <div class="col-sm-12">\n            <br>\n            <hr>\n        </div>\n    </div>\n    <div class="row">\n    	<!-- RESULTS -->\n        <div class="col-md-10 col-md-offset-1 col-sm-12" id="rr-query-results">\n            <h3 class="text-center">\n				Results\n				<span ng-if="vm.data.total_results > -1">:&nbsp;{{vm.data.total_results}}</span>\n				<span class="pull-right" ng-if="vm.data.total_results > -1"><i>{{vm.data.query_time}}ms</i></span>\n			</h3>\n            <img style="display:block; margin-left: auto; margin-right: auto" ng-if="vm.data.searching && vm.loader" ng-src="{{vm.loader}}">\n            <div class="results" ng-if="vm.data.results && !vm.data.error">\n                <pre style="max-height:600px">{{vm.data.results | prettyJson}}</pre>\n            </div>\n            <div class="error" ng-if="vm.data.error">\n                <pre>{{vm.data.error | prettyJson}}</pre>\n            </div>\n            <div ng-if="!vm.data.error && !vm.data.results && !vm.data.searching">\n                <code class="text-center" style="display:block; padding:10px">Click "Search" to hit the Retsrabbit V2 API!</code>\n            </div>\n        </div>\n    </div>\n</div>\n')}]);
!function(){"use strict";function r(r,e){var a=["$scope","$interval","$document","PropertyFactory",function(e,a,t,o){function l(r){if(r){m.data.total_results=-1,m.data.error=null,m.data.results=null,m.data.searching=!0;var e=new Date;o.search(m.data.request).then(function(r){t.scrollToElement(f,70,300);var a=new Date;m.data.error=null,m.data.results=r,m.data.total_results=r.value.length,m.data.searching=!1,u(a.getTime()-e.getTime())},function(r){t.scrollToElement(f,70,300),m.data.query_time=-1,m.data.searching=!1,m.data.error=r?r.error:{}})}}function i(){m.data.searchForm.filter.push({value:"",join:"and"})}function n(r){var e=m.data.searchForm.filter.indexOf(r);m.data.searchForm.filter.splice(e,1),c()}function s(){m.data.searchForm.orderby.push({value:"",direction:"asc"})}function d(r){var e=m.data.searchForm.orderby.indexOf(r);m.data.searchForm.orderby.splice(e,1),c()}function c(){var e="",a=0,t=[0,0,0,0,0];if(""!==m.data.searchForm.select&&(t[0]=1,e+="$select="+m.data.searchForm.select),m.data.searchForm.filter.length)for(t[1]=1,e+=t[0]?"&$filter=":"$filter=",a=0;a<m.data.searchForm.filter.length;a++)e+=m.data.searchForm.filter[a].value,""!==m.data.searchForm.filter[a].value&&a+1<m.data.searchForm.filter.length&&(e+=" "+m.data.searchForm.filter[a].join),a+1<m.data.searchForm.filter.length&&(e+=" ");m.data.searchForm.orderby.length&&(t[2]=1,e+=t[0]+t[1]>0?"&$orderby=":"$orderby=",e+=m.data.searchForm.orderby.map(function(r){return""!==r.value?r.value+" "+r.direction:""}).join(", ")),""!=m.data.searchForm.top&&(t[3]=1,e+=t[0]+t[1]+t[2]>0?"&$top=":"$top=",e+=m.data.searchForm.top),""!=m.data.searchForm.skip&&(t[4]=1,e+=t[0]+t[1]+t[2]+t[3]>0?"&$skip=":"$skip=",e+=m.data.searchForm.skip),m.data.fullRequest=r.apiUrl+"property?"+e,m.data.request=e}function u(r){m.data.query_time=0;var e=5;r>750?m.data.query_time=r:h=a(function(e){m.data.query_time==r?a.cancel(h):m.data.query_time++},e)}var h,m=this,f=angular.element(document.getElementById("rr-query-results"));e.$watch(angular.bind(this,function(){return this.search}),function(r){r&&"undefined"!==r&&void 0!==r&&"function"!=typeof r&&(m.data.searchForm.select=r.query.select,m.data.searchForm.filter=r.query.filter,m.data.searchForm.orderby=r.query.orderby,m.data.searchForm.top=r.query.top,m.data.searchForm.skip=r.query.skip,m.data.error=null,m.data.results=null,m.data.searching=!1,m.data.total_results=-1,c())}),m.data={searchForm:{select:"",filter:[{value:"",join:"and"}],orderby:[{value:"",direction:"asc"}],top:"",skip:""},fullRequest:r.apiUrl+"property?",request:"",results:null,total_results:-1,error:null,searching:!1,query_time:-1},m.doSearch=l,m.addFilter=i,m.removeFilter=n,m.addOrderby=s,m.removeOrderby=d,m.updateQuery=c}];return{restrict:"EA",scope:!0,link:function(r,e,a,t){},templateUrl:"explorer.bootstrap.html",controller:a,controllerAs:"vm",bindToController:{search:"=",loader:"="}}}angular.module("rr.api.v2.explorer.directive.explorer",[]).directive("apiExplorer",r),r.$inject=["ApiConfig","PropertyFactory"]}();
!function(){"use strict";angular.module("rr.api.v2.explorer.directives",["rr.api.v2.explorer.directive.explorer"])}();
!function(){"use strict";angular.module("rr.api.v2.explorer.filters",["rr.api.v2.explorer.filter.prettyJson"])}();
!function(){"use strict";function r(){return function(r){return"string"!=typeof r&&(r=JSON.stringify(r,void 0,4)),r}}angular.module("rr.api.v2.explorer.filter.prettyJson",[]).filter("prettyJson",r)}();
(function ($) {

  var divs = {
    'ball-pulse': 3,
    'ball-grid-pulse': 9,
    'ball-clip-rotate': 1,
    'ball-clip-rotate-pulse': 2,
    'square-spin': 1,
    'ball-clip-rotate-multiple': 2,
    'ball-pulse-rise': 5,
    'ball-rotate': 1,
    'cube-transition': 2,
    'ball-zig-zag': 2,
    'ball-zig-zag-deflect': 2,
    'ball-triangle-path': 3,
    'ball-scale': 1,
    'line-scale': 5,
    'line-scale-party': 4,
    'ball-scale-multiple': 3,
    'ball-pulse-sync': 3,
    'ball-beat': 3,
    'line-scale-pulse-out': 5,
    'line-scale-pulse-out-rapid': 5,
    'ball-scale-ripple': 1,
    'ball-scale-ripple-multiple': 3,
    'ball-spin-fade-loader': 8,
    'line-spin-fade-loader': 8,
    'triangle-skew-spin': 1,
    'pacman': 5,
    'ball-grid-beat': 9,
    'semi-circle-spin': 1,
    'ball-scale-random': 3
  };

  var addDivs = function(n) {
    var arr = [];
    for (i = 1; i <= n; i++) {
      arr.push('<div></div>');
    }
    return arr;
  };

  $.fn.loaders = function() {
    return this.each(function() {
      var elem = $(this);
      $.each(divs, function(key, value) {
        if (elem.hasClass(key))
          elem.html(addDivs(value))
      })
    });
  };

  $(function() {
    $.each(divs, function(key, value) {
      $('.loader-inner.' + key).html(addDivs(value));
    })
  });

}).call(window, window.$ || window.jQuery || window.Zepto);

// Copyright © 2013-2014 David Caldwell <david@porkrind.org>
//
// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.
//
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
// WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY
// SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
// WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION
// OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN
// CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

// Usage
// -----
// The module exports one entry point, the `renderjson()` function. It takes in
// the JSON you want to render as a single argument and returns an HTML
// element.
//
// Options
// -------
// renderjson.set_icons("+", "-")
//   This Allows you to override the disclosure icons.
//
// renderjson.set_show_to_level(level)
//   Pass the number of levels to expand when rendering. The default is 0, which
//   starts with everything collapsed. As a special case, if level is the string
//   "all" then it will start with everything expanded.
//
// renderjson.set_max_string_length(length)
//   Strings will be truncated and made expandable if they are longer than
//   `length`. As a special case, if `length` is the string "none" then
//   there will be no truncation. The default is "none".
//
// renderjson.set_sort_objects(sort_bool)
//   Sort objects by key (default: false)
//
// Theming
// -------
// The HTML output uses a number of classes so that you can theme it the way
// you'd like:
//     .disclosure    ("⊕", "⊖")
//     .syntax        (",", ":", "{", "}", "[", "]")
//     .string        (includes quotes)
//     .number
//     .boolean
//     .key           (object key)
//     .keyword       ("null", "undefined")
//     .object.syntax ("{", "}")
//     .array.syntax  ("[", "]")

var module, window;
(module||{}).exports = (window||{}).renderjson = (function() {
    var themetext = function(/* [class, text]+ */) {
        var spans = [];
        while (arguments.length)
            spans.push(append(span(Array.prototype.shift.call(arguments)),
                              text(Array.prototype.shift.call(arguments))));
        return spans;
    };
    var append = function(/* el, ... */) {
        var el = Array.prototype.shift.call(arguments);
        for (var a=0; a<arguments.length; a++)
            if (arguments[a].constructor == Array)
                append.apply(this, [el].concat(arguments[a]));
            else
                el.appendChild(arguments[a]);
        return el;
    };
    var prepend = function(el, child) {
        el.insertBefore(child, el.firstChild);
        return el;
    }
    var isempty = function(obj) { for (var k in obj) if (Object.hasOwnProperty.call(obj, k)) return false;
                                  return true; }
    var text = function(txt) { return document.createTextNode(txt) };
    var div = function() { return document.createElement("div") };
    var span = function(classname) { var s = document.createElement("span");
                                     if (classname) s.className = classname;
                                     return s; };
    var A = function A(txt, classname, callback) { var a = document.createElement("a");
                                                   if (classname) a.className = classname;
                                                   a.appendChild(text(txt));
                                                   a.href = '#';
                                                   a.onclick = function(e) { callback(); if (e) e.stopPropagation(); return false; };
                                                   return a; };

    function _renderjson(json, indent, dont_indent, show_level, max_string, sort_objects) {
        var my_indent = dont_indent ? "" : indent;

        var disclosure = function(open, placeholder, close, type, builder) {
            var content;
            var empty = span(type);
            var show = function() { if (!content) append(empty.parentNode,
                                                         content = prepend(builder(),
                                                                           A(renderjson.hide, "disclosure",
                                                                             function() { content.style.display="none";
                                                                                          empty.style.display="inline"; } )));
                                    content.style.display="inline";
                                    empty.style.display="none"; };
            append(empty,
                   A(renderjson.show, "disclosure", show),
                   themetext(type+ " syntax", open),
                   A(placeholder, null, show),
                   themetext(type+ " syntax", close));

            var el = append(span(), text(my_indent.slice(0,-1)), empty);
            if (show_level > 0)
                show();
            return el;
        };

        if (json === null) return themetext(null, my_indent, "keyword", "null");
        if (json === void 0) return themetext(null, my_indent, "keyword", "undefined");

        if (typeof(json) == "string" && json.length > max_string)
            return disclosure('"', json.substr(0,max_string)+" ...", '"', "string", function () {
                return append(span("string"), themetext(null, my_indent, "string", JSON.stringify(json)));
            });

        if (typeof(json) != "object") // Strings, numbers and bools
            return themetext(null, my_indent, typeof(json), JSON.stringify(json));

        if (json.constructor == Array) {
            if (json.length == 0) return themetext(null, my_indent, "array syntax", "[]");

            return disclosure("[", " ... ", "]", "array", function () {
                var as = append(span("array"), themetext("array syntax", "[", null, "\n"));
                for (var i=0; i<json.length; i++)
                    append(as,
                           _renderjson(json[i], indent+"    ", false, show_level-1, max_string, sort_objects),
                           i != json.length-1 ? themetext("syntax", ",") : [],
                           text("\n"));
                append(as, themetext(null, indent, "array syntax", "]"));
                return as;
            });
        }

        // object
        if (isempty(json))
            return themetext(null, my_indent, "object syntax", "{}");

        return disclosure("{", "...", "}", "object", function () {
            var os = append(span("object"), themetext("object syntax", "{", null, "\n"));
            for (var k in json) var last = k;
            var keys = Object.keys(json);
            if (sort_objects)
                keys = keys.sort();
            for (var i in keys) {
                var k = keys[i];
                append(os, themetext(null, indent+"    ", "key", '"'+k+'"', "object syntax", ': '),
                       _renderjson(json[k], indent+"    ", true, show_level-1, max_string, sort_objects),
                       k != last ? themetext("syntax", ",") : [],
                       text("\n"));
            }
            append(os, themetext(null, indent, "object syntax", "}"));
            return os;
        });
    }

    var renderjson = function renderjson(json)
    {
        var pre = append(document.createElement("pre"), _renderjson(json, "", false, renderjson.show_to_level, renderjson.max_string_length, renderjson.sort_objects));
        pre.className = "renderjson";
        return pre;
    }
    renderjson.set_icons = function(show, hide) { renderjson.show = show;
                                                  renderjson.hide = hide;
                                                  return renderjson; };
    renderjson.set_show_to_level = function(level) { renderjson.show_to_level = typeof level == "string" &&
                                                                                level.toLowerCase() === "all" ? Number.MAX_VALUE
                                                                                                              : level;
                                                     return renderjson; };
    renderjson.set_max_string_length = function(length) { renderjson.max_string_length = typeof length == "string" &&
                                                                                         length.toLowerCase() === "none" ? Number.MAX_VALUE
                                                                                                                         : length;
                                                          return renderjson; };
    renderjson.set_sort_objects = function(sort_bool) { renderjson.sort_objects = sort_bool;
                                                        return renderjson; };
    // Backwards compatiblity. Use set_show_to_level() for new code.
    renderjson.set_show_by_default = function(show) { renderjson.show_to_level = show ? Number.MAX_VALUE : 0;
                                                      return renderjson; };
    renderjson.set_icons('⊕', '⊖');
    renderjson.set_show_by_default(false);
    renderjson.set_sort_objects(false);
    renderjson.set_max_string_length("none");
    return renderjson;
})();

var duScrollDefaultEasing=function(e){"use strict";return.5>e?Math.pow(2*e,2)/2:1-Math.pow(2*(1-e),2)/2},duScroll=angular.module("duScroll",["duScroll.scrollspy","duScroll.smoothScroll","duScroll.scrollContainer","duScroll.spyContext","duScroll.scrollHelpers"]).value("duScrollDuration",350).value("duScrollSpyWait",100).value("duScrollGreedy",!1).value("duScrollOffset",0).value("duScrollEasing",duScrollDefaultEasing).value("duScrollCancelOnEvents","scroll mousedown mousewheel touchmove keydown").value("duScrollBottomSpy",!1).value("duScrollActiveClass","active");"undefined"!=typeof module&&module&&module.exports&&(module.exports=duScroll),angular.module("duScroll.scrollHelpers",["duScroll.requestAnimation"]).run(["$window","$q","cancelAnimation","requestAnimation","duScrollEasing","duScrollDuration","duScrollOffset","duScrollCancelOnEvents",function(e,t,n,r,o,l,u,c){"use strict";var i={},a=function(e){return"undefined"!=typeof HTMLDocument&&e instanceof HTMLDocument||e.nodeType&&e.nodeType===e.DOCUMENT_NODE},s=function(e){return"undefined"!=typeof HTMLElement&&e instanceof HTMLElement||e.nodeType&&e.nodeType===e.ELEMENT_NODE},d=function(e){return s(e)||a(e)?e:e[0]};i.duScrollTo=function(t,n,r,o){var l;if(angular.isElement(t)?l=this.duScrollToElement:angular.isDefined(r)&&(l=this.duScrollToAnimated),l)return l.apply(this,arguments);var u=d(this);return a(u)?e.scrollTo(t,n):(u.scrollLeft=t,void(u.scrollTop=n))};var f,m;i.duScrollToAnimated=function(e,l,u,i){u&&!i&&(i=o);var a=this.duScrollLeft(),s=this.duScrollTop(),d=Math.round(e-a),p=Math.round(l-s),S=null,g=0,v=this,h=function(e){(!e||g&&e.which>0)&&(c&&v.unbind(c,h),n(f),m.reject(),f=null)};if(f&&h(),m=t.defer(),0===u||!d&&!p)return 0===u&&v.duScrollTo(e,l),m.resolve(),m.promise;var y=function(e){null===S&&(S=e),g=e-S;var t=g>=u?1:i(g/u);v.scrollTo(a+Math.ceil(d*t),s+Math.ceil(p*t)),1>t?f=r(y):(c&&v.unbind(c,h),f=null,m.resolve())};return v.duScrollTo(a,s),c&&v.bind(c,h),f=r(y),m.promise},i.duScrollToElement=function(e,t,n,r){var o=d(this);(!angular.isNumber(t)||isNaN(t))&&(t=u);var l=this.duScrollTop()+d(e).getBoundingClientRect().top-t;return s(o)&&(l-=o.getBoundingClientRect().top),this.duScrollTo(0,l,n,r)},i.duScrollLeft=function(t,n,r){if(angular.isNumber(t))return this.duScrollTo(t,this.duScrollTop(),n,r);var o=d(this);return a(o)?e.scrollX||document.documentElement.scrollLeft||document.body.scrollLeft:o.scrollLeft},i.duScrollTop=function(t,n,r){if(angular.isNumber(t))return this.duScrollTo(this.duScrollLeft(),t,n,r);var o=d(this);return a(o)?e.scrollY||document.documentElement.scrollTop||document.body.scrollTop:o.scrollTop},i.duScrollToElementAnimated=function(e,t,n,r){return this.duScrollToElement(e,t,n||l,r)},i.duScrollTopAnimated=function(e,t,n){return this.duScrollTop(e,t||l,n)},i.duScrollLeftAnimated=function(e,t,n){return this.duScrollLeft(e,t||l,n)},angular.forEach(i,function(e,t){angular.element.prototype[t]=e;var n=t.replace(/^duScroll/,"scroll");angular.isUndefined(angular.element.prototype[n])&&(angular.element.prototype[n]=e)})}]),angular.module("duScroll.polyfill",[]).factory("polyfill",["$window",function(e){"use strict";var t=["webkit","moz","o","ms"];return function(n,r){if(e[n])return e[n];for(var o,l=n.substr(0,1).toUpperCase()+n.substr(1),u=0;u<t.length;u++)if(o=t[u]+l,e[o])return e[o];return r}}]),angular.module("duScroll.requestAnimation",["duScroll.polyfill"]).factory("requestAnimation",["polyfill","$timeout",function(e,t){"use strict";var n=0,r=function(e,r){var o=(new Date).getTime(),l=Math.max(0,16-(o-n)),u=t(function(){e(o+l)},l);return n=o+l,u};return e("requestAnimationFrame",r)}]).factory("cancelAnimation",["polyfill","$timeout",function(e,t){"use strict";var n=function(e){t.cancel(e)};return e("cancelAnimationFrame",n)}]),angular.module("duScroll.spyAPI",["duScroll.scrollContainerAPI"]).factory("spyAPI",["$rootScope","$timeout","$window","$document","scrollContainerAPI","duScrollGreedy","duScrollSpyWait","duScrollBottomSpy","duScrollActiveClass",function(e,t,n,r,o,l,u,c,i){"use strict";var a=function(o){var a=!1,s=!1,d=function(){s=!1;var t,u=o.container,a=u[0],d=0;if("undefined"!=typeof HTMLElement&&a instanceof HTMLElement||a.nodeType&&a.nodeType===a.ELEMENT_NODE)d=a.getBoundingClientRect().top,t=Math.round(a.scrollTop+a.clientHeight)>=a.scrollHeight;else{var f=r[0].body.scrollHeight||r[0].documentElement.scrollHeight;t=Math.round(n.pageYOffset+n.innerHeight)>=f}var m,p,S,g,v,h,y=c&&t?"bottom":"top";for(g=o.spies,p=o.currentlyActive,S=void 0,m=0;m<g.length;m++)v=g[m],h=v.getTargetPosition(),h&&(c&&t||h.top+v.offset-d<20&&(l||-1*h.top+d)<h.height)&&(!S||S[y]<h[y])&&(S={spy:v},S[y]=h[y]);S&&(S=S.spy),p===S||l&&!S||(p&&(p.$element.removeClass(i),e.$broadcast("duScrollspy:becameInactive",p.$element,angular.element(p.getTargetElement()))),S&&(S.$element.addClass(i),e.$broadcast("duScrollspy:becameActive",S.$element,angular.element(S.getTargetElement()))),o.currentlyActive=S)};return u?function(){a?s=!0:(d(),a=t(function(){a=!1,s&&d()},u,!1))}:d},s={},d=function(e){var t=e.$id,n={spies:[]};return n.handler=a(n),s[t]=n,e.$on("$destroy",function(){f(e)}),t},f=function(e){var t=e.$id,n=s[t],r=n.container;r&&r.off("scroll",n.handler),delete s[t]},m=d(e),p=function(e){return s[e.$id]?s[e.$id]:e.$parent?p(e.$parent):s[m]},S=function(e){var t,n,r=e.$scope;if(r)return p(r);for(n in s)if(t=s[n],-1!==t.spies.indexOf(e))return t},g=function(e){for(;e.parentNode;)if(e=e.parentNode,e===document)return!0;return!1},v=function(e){var t=S(e);t&&(t.spies.push(e),t.container&&g(t.container)||(t.container&&t.container.off("scroll",t.handler),t.container=o.getContainer(e.$scope),t.container.on("scroll",t.handler).triggerHandler("scroll")))},h=function(t){var n=S(t);t===n.currentlyActive&&(e.$broadcast("duScrollspy:becameInactive",n.currentlyActive.$element),n.currentlyActive=null);var r=n.spies.indexOf(t);-1!==r&&n.spies.splice(r,1),t.$element=null};return{addSpy:v,removeSpy:h,createContext:d,destroyContext:f,getContextForScope:p}}]),angular.module("duScroll.scrollContainerAPI",[]).factory("scrollContainerAPI",["$document",function(e){"use strict";var t={},n=function(e,n){var r=e.$id;return t[r]=n,r},r=function(e){return t[e.$id]?e.$id:e.$parent?r(e.$parent):void 0},o=function(n){var o=r(n);return o?t[o]:e},l=function(e){var n=r(e);n&&delete t[n]};return{getContainerId:r,getContainer:o,setContainer:n,removeContainer:l}}]),angular.module("duScroll.smoothScroll",["duScroll.scrollHelpers","duScroll.scrollContainerAPI"]).directive("duSmoothScroll",["duScrollDuration","duScrollOffset","scrollContainerAPI",function(e,t,n){"use strict";return{link:function(r,o,l){o.on("click",function(o){if(l.href&&-1!==l.href.indexOf("#")||""!==l.duSmoothScroll){var u=l.href?l.href.replace(/.*(?=#[^\s]+$)/,"").substring(1):l.duSmoothScroll,c=document.getElementById(u)||document.getElementsByName(u)[0];if(c&&c.getBoundingClientRect){o.stopPropagation&&o.stopPropagation(),o.preventDefault&&o.preventDefault();var i=l.offset?parseInt(l.offset,10):t,a=l.duration?parseInt(l.duration,10):e,s=n.getContainer(r);s.duScrollToElement(angular.element(c),isNaN(i)?0:i,isNaN(a)?0:a)}}})}}}]),angular.module("duScroll.spyContext",["duScroll.spyAPI"]).directive("duSpyContext",["spyAPI",function(e){"use strict";return{restrict:"A",scope:!0,compile:function(t,n,r){return{pre:function(t,n,r,o){e.createContext(t)}}}}}]),angular.module("duScroll.scrollContainer",["duScroll.scrollContainerAPI"]).directive("duScrollContainer",["scrollContainerAPI",function(e){"use strict";return{restrict:"A",scope:!0,compile:function(t,n,r){return{pre:function(t,n,r,o){r.$observe("duScrollContainer",function(r){angular.isString(r)&&(r=document.getElementById(r)),r=angular.isElement(r)?angular.element(r):n,e.setContainer(t,r),t.$on("$destroy",function(){e.removeContainer(t)})})}}}}}]),angular.module("duScroll.scrollspy",["duScroll.spyAPI"]).directive("duScrollspy",["spyAPI","duScrollOffset","$timeout","$rootScope",function(e,t,n,r){"use strict";var o=function(e,t,n,r){angular.isElement(e)?this.target=e:angular.isString(e)&&(this.targetId=e),this.$scope=t,this.$element=n,this.offset=r};return o.prototype.getTargetElement=function(){return!this.target&&this.targetId&&(this.target=document.getElementById(this.targetId)||document.getElementsByName(this.targetId)[0]),this.target},o.prototype.getTargetPosition=function(){var e=this.getTargetElement();return e?e.getBoundingClientRect():void 0},o.prototype.flushTargetCache=function(){this.targetId&&(this.target=void 0)},{link:function(l,u,c){var i,a=c.ngHref||c.href;if(a&&-1!==a.indexOf("#")?i=a.replace(/.*(?=#[^\s]+$)/,"").substring(1):c.duScrollspy?i=c.duScrollspy:c.duSmoothScroll&&(i=c.duSmoothScroll),i){var s=n(function(){var n=new o(i,l,u,-(c.offset?parseInt(c.offset,10):t));e.addSpy(n),l.$on("$locationChangeSuccess",n.flushTargetCache.bind(n));var a=r.$on("$stateChangeSuccess",n.flushTargetCache.bind(n));l.$on("$destroy",function(){e.removeSpy(n),a()})},0,!1);l.$on("$destroy",function(){n.cancel(s)})}}}}]);
//# sourceMappingURL=angular-scroll.min.js.map

/*
 AngularJS v1.5.8
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(s,g){'use strict';function H(g){var l=[];t(l,A).chars(g);return l.join("")}var B=g.$$minErr("$sanitize"),C,l,D,E,q,A,F,t;g.module("ngSanitize",[]).provider("$sanitize",function(){function k(a,e){var b={},c=a.split(","),h;for(h=0;h<c.length;h++)b[e?q(c[h]):c[h]]=!0;return b}function I(a){for(var e={},b=0,c=a.length;b<c;b++){var h=a[b];e[h.name]=h.value}return e}function G(a){return a.replace(/&/g,"&amp;").replace(J,function(a){var b=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(b-55296)+
(a-56320)+65536)+";"}).replace(K,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function u(a){if(a.nodeType===s.Node.ELEMENT_NODE)for(var e=a.attributes,b=0,c=e.length;b<c;b++){var h=e[b],d=h.name.toLowerCase();if("xmlns:ns1"===d||0===d.lastIndexOf("ns1:",0))a.removeAttributeNode(h),b--,c--}(e=a.firstChild)&&u(e);(e=a.nextSibling)&&u(e)}var v=!1;this.$get=["$$sanitizeUri",function(a){v&&l(w,x);return function(e){var b=[];F(e,t(b,function(b,h){return!/^unsafe:/.test(a(b,
h))}));return b.join("")}}];this.enableSvg=function(a){return E(a)?(v=a,this):v};C=g.bind;l=g.extend;D=g.forEach;E=g.isDefined;q=g.lowercase;A=g.noop;F=function(a,e){null===a||void 0===a?a="":"string"!==typeof a&&(a=""+a);f.innerHTML=a;var b=5;do{if(0===b)throw B("uinput");b--;s.document.documentMode&&u(f);a=f.innerHTML;f.innerHTML=a}while(a!==f.innerHTML);for(b=f.firstChild;b;){switch(b.nodeType){case 1:e.start(b.nodeName.toLowerCase(),I(b.attributes));break;case 3:e.chars(b.textContent)}var c;if(!(c=
b.firstChild)&&(1==b.nodeType&&e.end(b.nodeName.toLowerCase()),c=b.nextSibling,!c))for(;null==c;){b=b.parentNode;if(b===f)break;c=b.nextSibling;1==b.nodeType&&e.end(b.nodeName.toLowerCase())}b=c}for(;b=f.firstChild;)f.removeChild(b)};t=function(a,e){var b=!1,c=C(a,a.push);return{start:function(a,d){a=q(a);!b&&z[a]&&(b=a);b||!0!==w[a]||(c("<"),c(a),D(d,function(b,d){var f=q(d),g="img"===a&&"src"===f||"background"===f;!0!==m[f]||!0===n[f]&&!e(b,g)||(c(" "),c(d),c('="'),c(G(b)),c('"'))}),c(">"))},end:function(a){a=
q(a);b||!0!==w[a]||!0===y[a]||(c("</"),c(a),c(">"));a==b&&(b=!1)},chars:function(a){b||c(G(a))}}};var J=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,K=/([^\#-~ |!])/g,y=k("area,br,col,hr,img,wbr"),d=k("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),r=k("rp,rt"),p=l({},r,d),d=l({},d,k("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),r=l({},r,k("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
x=k("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),z=k("script,style"),w=l({},y,d,r,p),n=k("background,cite,href,longdesc,src,xlink:href"),p=k("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),
r=k("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan",
!0),m=l({},n,r,p),f;(function(a){if(a.document&&a.document.implementation)a=a.document.implementation.createHTMLDocument("inert");else throw B("noinert");var e=(a.documentElement||a.getDocumentElement()).getElementsByTagName("body");1===e.length?f=e[0]:(e=a.createElement("html"),f=a.createElement("body"),e.appendChild(f),a.appendChild(e))})(s)});g.module("ngSanitize").filter("linky",["$sanitize",function(k){var l=/((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
q=/^mailto:/i,u=g.$$minErr("linky"),v=g.isDefined,s=g.isFunction,t=g.isObject,y=g.isString;return function(d,g,p){function x(a){a&&m.push(H(a))}function z(a,b){var c,d=w(a);m.push("<a ");for(c in d)m.push(c+'="'+d[c]+'" ');!v(g)||"target"in d||m.push('target="',g,'" ');m.push('href="',a.replace(/"/g,"&quot;"),'">');x(b);m.push("</a>")}if(null==d||""===d)return d;if(!y(d))throw u("notstring",d);for(var w=s(p)?p:t(p)?function(){return p}:function(){return{}},n=d,m=[],f,a;d=n.match(l);)f=d[0],d[2]||
d[4]||(f=(d[3]?"http://":"mailto:")+f),a=d.index,x(n.substr(0,a)),z(f,d[0].replace(q,"")),n=n.substring(a+d[0].length);x(n);return k(m.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map

/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 1.3.3 - 2016-05-22
 * License: MIT
 */angular.module("ui.bootstrap",["ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.isClass","ui.bootstrap.datepicker","ui.bootstrap.position","ui.bootstrap.datepickerPopup","ui.bootstrap.debounce","ui.bootstrap.dropdown","ui.bootstrap.stackedMap","ui.bootstrap.modal","ui.bootstrap.paging","ui.bootstrap.pager","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]),angular.module("ui.bootstrap.collapse",[]).directive("uibCollapse",["$animate","$q","$parse","$injector",function(a,b,c,d){var e=d.has("$animateCss")?d.get("$animateCss"):null;return{link:function(d,f,g){function h(){f.hasClass("collapse")&&f.hasClass("in")||b.resolve(l(d)).then(function(){f.removeClass("collapse").addClass("collapsing").attr("aria-expanded",!0).attr("aria-hidden",!1),e?e(f,{addClass:"in",easing:"ease",to:{height:f[0].scrollHeight+"px"}}).start()["finally"](i):a.addClass(f,"in",{to:{height:f[0].scrollHeight+"px"}}).then(i)})}function i(){f.removeClass("collapsing").addClass("collapse").css({height:"auto"}),m(d)}function j(){return f.hasClass("collapse")||f.hasClass("in")?void b.resolve(n(d)).then(function(){f.css({height:f[0].scrollHeight+"px"}).removeClass("collapse").addClass("collapsing").attr("aria-expanded",!1).attr("aria-hidden",!0),e?e(f,{removeClass:"in",to:{height:"0"}}).start()["finally"](k):a.removeClass(f,"in",{to:{height:"0"}}).then(k)}):k()}function k(){f.css({height:"0"}),f.removeClass("collapsing").addClass("collapse"),o(d)}var l=c(g.expanding),m=c(g.expanded),n=c(g.collapsing),o=c(g.collapsed);d.$eval(g.uibCollapse)||f.addClass("in").addClass("collapse").attr("aria-expanded",!0).attr("aria-hidden",!1).css({height:"auto"}),d.$watch(g.uibCollapse,function(a){a?j():h()})}}}]),angular.module("ui.bootstrap.accordion",["ui.bootstrap.collapse"]).constant("uibAccordionConfig",{closeOthers:!0}).controller("UibAccordionController",["$scope","$attrs","uibAccordionConfig",function(a,b,c){this.groups=[],this.closeOthers=function(d){var e=angular.isDefined(b.closeOthers)?a.$eval(b.closeOthers):c.closeOthers;e&&angular.forEach(this.groups,function(a){a!==d&&(a.isOpen=!1)})},this.addGroup=function(a){var b=this;this.groups.push(a),a.$on("$destroy",function(c){b.removeGroup(a)})},this.removeGroup=function(a){var b=this.groups.indexOf(a);-1!==b&&this.groups.splice(b,1)}}]).directive("uibAccordion",function(){return{controller:"UibAccordionController",controllerAs:"accordion",transclude:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/accordion/accordion.html"}}}).directive("uibAccordionGroup",function(){return{require:"^uibAccordion",transclude:!0,replace:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/accordion/accordion-group.html"},scope:{heading:"@",panelClass:"@?",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(a){this.heading=a}},link:function(a,b,c,d){d.addGroup(a),a.openClass=c.openClass||"panel-open",a.panelClass=c.panelClass||"panel-default",a.$watch("isOpen",function(c){b.toggleClass(a.openClass,!!c),c&&d.closeOthers(a)}),a.toggleOpen=function(b){a.isDisabled||b&&32!==b.which||(a.isOpen=!a.isOpen)};var e="accordiongroup-"+a.$id+"-"+Math.floor(1e4*Math.random());a.headingId=e+"-tab",a.panelId=e+"-panel"}}}).directive("uibAccordionHeading",function(){return{transclude:!0,template:"",replace:!0,require:"^uibAccordionGroup",link:function(a,b,c,d,e){d.setHeading(e(a,angular.noop))}}}).directive("uibAccordionTransclude",function(){function a(){return"uib-accordion-header,data-uib-accordion-header,x-uib-accordion-header,uib\\:accordion-header,[uib-accordion-header],[data-uib-accordion-header],[x-uib-accordion-header]"}return{require:"^uibAccordionGroup",link:function(b,c,d,e){b.$watch(function(){return e[d.uibAccordionTransclude]},function(b){if(b){var d=angular.element(c[0].querySelector(a()));d.html(""),d.append(b)}})}}}),angular.module("ui.bootstrap.alert",[]).controller("UibAlertController",["$scope","$attrs","$interpolate","$timeout",function(a,b,c,d){a.closeable=!!b.close;var e=angular.isDefined(b.dismissOnTimeout)?c(b.dismissOnTimeout)(a.$parent):null;e&&d(function(){a.close()},parseInt(e,10))}]).directive("uibAlert",function(){return{controller:"UibAlertController",controllerAs:"alert",templateUrl:function(a,b){return b.templateUrl||"uib/template/alert/alert.html"},transclude:!0,replace:!0,scope:{type:"@",close:"&"}}}),angular.module("ui.bootstrap.buttons",[]).constant("uibButtonConfig",{activeClass:"active",toggleEvent:"click"}).controller("UibButtonsController",["uibButtonConfig",function(a){this.activeClass=a.activeClass||"active",this.toggleEvent=a.toggleEvent||"click"}]).directive("uibBtnRadio",["$parse",function(a){return{require:["uibBtnRadio","ngModel"],controller:"UibButtonsController",controllerAs:"buttons",link:function(b,c,d,e){var f=e[0],g=e[1],h=a(d.uibUncheckable);c.find("input").css({display:"none"}),g.$render=function(){c.toggleClass(f.activeClass,angular.equals(g.$modelValue,b.$eval(d.uibBtnRadio)))},c.on(f.toggleEvent,function(){if(!d.disabled){var a=c.hasClass(f.activeClass);a&&!angular.isDefined(d.uncheckable)||b.$apply(function(){g.$setViewValue(a?null:b.$eval(d.uibBtnRadio)),g.$render()})}}),d.uibUncheckable&&b.$watch(h,function(a){d.$set("uncheckable",a?"":void 0)})}}}]).directive("uibBtnCheckbox",function(){return{require:["uibBtnCheckbox","ngModel"],controller:"UibButtonsController",controllerAs:"button",link:function(a,b,c,d){function e(){return g(c.btnCheckboxTrue,!0)}function f(){return g(c.btnCheckboxFalse,!1)}function g(b,c){return angular.isDefined(b)?a.$eval(b):c}var h=d[0],i=d[1];b.find("input").css({display:"none"}),i.$render=function(){b.toggleClass(h.activeClass,angular.equals(i.$modelValue,e()))},b.on(h.toggleEvent,function(){c.disabled||a.$apply(function(){i.$setViewValue(b.hasClass(h.activeClass)?f():e()),i.$render()})})}}}),angular.module("ui.bootstrap.carousel",[]).controller("UibCarouselController",["$scope","$element","$interval","$timeout","$animate",function(a,b,c,d,e){function f(){for(;t.length;)t.shift()}function g(a){for(var b=0;b<q.length;b++)q[b].slide.active=b===a}function h(c,d,i){if(!u){if(angular.extend(c,{direction:i}),angular.extend(q[s].slide||{},{direction:i}),e.enabled(b)&&!a.$currentTransition&&q[d].element&&p.slides.length>1){q[d].element.data(r,c.direction);var j=p.getCurrentIndex();angular.isNumber(j)&&q[j].element&&q[j].element.data(r,c.direction),a.$currentTransition=!0,e.on("addClass",q[d].element,function(b,c){if("close"===c&&(a.$currentTransition=null,e.off("addClass",b),t.length)){var d=t.pop().slide,g=d.index,i=g>p.getCurrentIndex()?"next":"prev";f(),h(d,g,i)}})}a.active=c.index,s=c.index,g(d),l()}}function i(a){for(var b=0;b<q.length;b++)if(q[b].slide===a)return b}function j(){n&&(c.cancel(n),n=null)}function k(b){b.length||(a.$currentTransition=null,f())}function l(){j();var b=+a.interval;!isNaN(b)&&b>0&&(n=c(m,b))}function m(){var b=+a.interval;o&&!isNaN(b)&&b>0&&q.length?a.next():a.pause()}var n,o,p=this,q=p.slides=a.slides=[],r="uib-slideDirection",s=a.active,t=[],u=!1;p.addSlide=function(b,c){q.push({slide:b,element:c}),q.sort(function(a,b){return+a.slide.index-+b.slide.index}),(b.index===a.active||1===q.length&&!angular.isNumber(a.active))&&(a.$currentTransition&&(a.$currentTransition=null),s=b.index,a.active=b.index,g(s),p.select(q[i(b)]),1===q.length&&a.play())},p.getCurrentIndex=function(){for(var a=0;a<q.length;a++)if(q[a].slide.index===s)return a},p.next=a.next=function(){var b=(p.getCurrentIndex()+1)%q.length;return 0===b&&a.noWrap()?void a.pause():p.select(q[b],"next")},p.prev=a.prev=function(){var b=p.getCurrentIndex()-1<0?q.length-1:p.getCurrentIndex()-1;return a.noWrap()&&b===q.length-1?void a.pause():p.select(q[b],"prev")},p.removeSlide=function(b){var c=i(b),d=t.indexOf(q[c]);-1!==d&&t.splice(d,1),q.splice(c,1),q.length>0&&s===c?c>=q.length?(s=q.length-1,a.active=s,g(s),p.select(q[q.length-1])):(s=c,a.active=s,g(s),p.select(q[c])):s>c&&(s--,a.active=s),0===q.length&&(s=null,a.active=null,f())},p.select=a.select=function(b,c){var d=i(b.slide);void 0===c&&(c=d>p.getCurrentIndex()?"next":"prev"),b.slide.index===s||a.$currentTransition?b&&b.slide.index!==s&&a.$currentTransition&&t.push(q[d]):h(b.slide,d,c)},a.indexOfSlide=function(a){return+a.slide.index},a.isActive=function(b){return a.active===b.slide.index},a.isPrevDisabled=function(){return 0===a.active&&a.noWrap()},a.isNextDisabled=function(){return a.active===q.length-1&&a.noWrap()},a.pause=function(){a.noPause||(o=!1,j())},a.play=function(){o||(o=!0,l())},a.$on("$destroy",function(){u=!0,j()}),a.$watch("noTransition",function(a){e.enabled(b,!a)}),a.$watch("interval",l),a.$watchCollection("slides",k),a.$watch("active",function(a){if(angular.isNumber(a)&&s!==a){for(var b=0;b<q.length;b++)if(q[b].slide.index===a){a=b;break}var c=q[a];c&&(g(a),p.select(q[a]),s=a)}})}]).directive("uibCarousel",function(){return{transclude:!0,replace:!0,controller:"UibCarouselController",controllerAs:"carousel",templateUrl:function(a,b){return b.templateUrl||"uib/template/carousel/carousel.html"},scope:{active:"=",interval:"=",noTransition:"=",noPause:"=",noWrap:"&"}}}).directive("uibSlide",function(){return{require:"^uibCarousel",transclude:!0,replace:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/carousel/slide.html"},scope:{actual:"=?",index:"=?"},link:function(a,b,c,d){d.addSlide(a,b),a.$on("$destroy",function(){d.removeSlide(a)})}}}).animation(".item",["$animateCss",function(a){function b(a,b,c){a.removeClass(b),c&&c()}var c="uib-slideDirection";return{beforeAddClass:function(d,e,f){if("active"===e){var g=!1,h=d.data(c),i="next"===h?"left":"right",j=b.bind(this,d,i+" "+h,f);return d.addClass(h),a(d,{addClass:i}).start().done(j),function(){g=!0}}f()},beforeRemoveClass:function(d,e,f){if("active"===e){var g=!1,h=d.data(c),i="next"===h?"left":"right",j=b.bind(this,d,i,f);return a(d,{addClass:i}).start().done(j),function(){g=!0}}f()}}}]),angular.module("ui.bootstrap.dateparser",[]).service("uibDateParser",["$log","$locale","dateFilter","orderByFilter",function(a,b,c,d){function e(a,b){var c=[],e=a.split(""),f=a.indexOf("'");if(f>-1){var g=!1;a=a.split("");for(var h=f;h<a.length;h++)g?("'"===a[h]&&(h+1<a.length&&"'"===a[h+1]?(a[h+1]="$",e[h+1]=""):(e[h]="",g=!1)),a[h]="$"):"'"===a[h]&&(a[h]="$",e[h]="",g=!0);a=a.join("")}return angular.forEach(n,function(d){var f=a.indexOf(d.key);if(f>-1){a=a.split(""),e[f]="("+d.regex+")",a[f]="$";for(var g=f+1,h=f+d.key.length;h>g;g++)e[g]="",a[g]="$";a=a.join(""),c.push({index:f,key:d.key,apply:d[b],matcher:d.regex})}}),{regex:new RegExp("^"+e.join("")+"$"),map:d(c,"index")}}function f(a,b,c){return 1>c?!1:1===b&&c>28?29===c&&(a%4===0&&a%100!==0||a%400===0):3===b||5===b||8===b||10===b?31>c:!0}function g(a){return parseInt(a,10)}function h(a,b){return a&&b?l(a,b):a}function i(a,b){return a&&b?l(a,b,!0):a}function j(a,b){a=a.replace(/:/g,"");var c=Date.parse("Jan 01, 1970 00:00:00 "+a)/6e4;return isNaN(c)?b:c}function k(a,b){return a=new Date(a.getTime()),a.setMinutes(a.getMinutes()+b),a}function l(a,b,c){c=c?-1:1;var d=a.getTimezoneOffset(),e=j(b,d);return k(a,c*(e-d))}var m,n,o=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;this.init=function(){m=b.id,this.parsers={},this.formatters={},n=[{key:"yyyy",regex:"\\d{4}",apply:function(a){this.year=+a},formatter:function(a){var b=new Date;return b.setFullYear(Math.abs(a.getFullYear())),c(b,"yyyy")}},{key:"yy",regex:"\\d{2}",apply:function(a){a=+a,this.year=69>a?a+2e3:a+1900},formatter:function(a){var b=new Date;return b.setFullYear(Math.abs(a.getFullYear())),c(b,"yy")}},{key:"y",regex:"\\d{1,4}",apply:function(a){this.year=+a},formatter:function(a){var b=new Date;return b.setFullYear(Math.abs(a.getFullYear())),c(b,"y")}},{key:"M!",regex:"0?[1-9]|1[0-2]",apply:function(a){this.month=a-1},formatter:function(a){var b=a.getMonth();return/^[0-9]$/.test(b)?c(a,"MM"):c(a,"M")}},{key:"MMMM",regex:b.DATETIME_FORMATS.MONTH.join("|"),apply:function(a){this.month=b.DATETIME_FORMATS.MONTH.indexOf(a)},formatter:function(a){return c(a,"MMMM")}},{key:"MMM",regex:b.DATETIME_FORMATS.SHORTMONTH.join("|"),apply:function(a){this.month=b.DATETIME_FORMATS.SHORTMONTH.indexOf(a)},formatter:function(a){return c(a,"MMM")}},{key:"MM",regex:"0[1-9]|1[0-2]",apply:function(a){this.month=a-1},formatter:function(a){return c(a,"MM")}},{key:"M",regex:"[1-9]|1[0-2]",apply:function(a){this.month=a-1},formatter:function(a){return c(a,"M")}},{key:"d!",regex:"[0-2]?[0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a},formatter:function(a){var b=a.getDate();return/^[1-9]$/.test(b)?c(a,"dd"):c(a,"d")}},{key:"dd",regex:"[0-2][0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a},formatter:function(a){return c(a,"dd")}},{key:"d",regex:"[1-2]?[0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a},formatter:function(a){return c(a,"d")}},{key:"EEEE",regex:b.DATETIME_FORMATS.DAY.join("|"),formatter:function(a){return c(a,"EEEE")}},{key:"EEE",regex:b.DATETIME_FORMATS.SHORTDAY.join("|"),formatter:function(a){return c(a,"EEE")}},{key:"HH",regex:"(?:0|1)[0-9]|2[0-3]",apply:function(a){this.hours=+a},formatter:function(a){return c(a,"HH")}},{key:"hh",regex:"0[0-9]|1[0-2]",apply:function(a){this.hours=+a},formatter:function(a){return c(a,"hh")}},{key:"H",regex:"1?[0-9]|2[0-3]",apply:function(a){this.hours=+a},formatter:function(a){return c(a,"H")}},{key:"h",regex:"[0-9]|1[0-2]",apply:function(a){this.hours=+a},formatter:function(a){return c(a,"h")}},{key:"mm",regex:"[0-5][0-9]",apply:function(a){this.minutes=+a},formatter:function(a){return c(a,"mm")}},{key:"m",regex:"[0-9]|[1-5][0-9]",apply:function(a){this.minutes=+a},formatter:function(a){return c(a,"m")}},{key:"sss",regex:"[0-9][0-9][0-9]",apply:function(a){this.milliseconds=+a},formatter:function(a){return c(a,"sss")}},{key:"ss",regex:"[0-5][0-9]",apply:function(a){this.seconds=+a},formatter:function(a){return c(a,"ss")}},{key:"s",regex:"[0-9]|[1-5][0-9]",apply:function(a){this.seconds=+a},formatter:function(a){return c(a,"s")}},{key:"a",regex:b.DATETIME_FORMATS.AMPMS.join("|"),apply:function(a){12===this.hours&&(this.hours=0),"PM"===a&&(this.hours+=12)},formatter:function(a){return c(a,"a")}},{key:"Z",regex:"[+-]\\d{4}",apply:function(a){var b=a.match(/([+-])(\d{2})(\d{2})/),c=b[1],d=b[2],e=b[3];this.hours+=g(c+d),this.minutes+=g(c+e)},formatter:function(a){return c(a,"Z")}},{key:"ww",regex:"[0-4][0-9]|5[0-3]",formatter:function(a){return c(a,"ww")}},{key:"w",regex:"[0-9]|[1-4][0-9]|5[0-3]",formatter:function(a){return c(a,"w")}},{key:"GGGG",regex:b.DATETIME_FORMATS.ERANAMES.join("|").replace(/\s/g,"\\s"),formatter:function(a){return c(a,"GGGG")}},{key:"GGG",regex:b.DATETIME_FORMATS.ERAS.join("|"),formatter:function(a){return c(a,"GGG")}},{key:"GG",regex:b.DATETIME_FORMATS.ERAS.join("|"),formatter:function(a){return c(a,"GG")}},{key:"G",regex:b.DATETIME_FORMATS.ERAS.join("|"),formatter:function(a){return c(a,"G")}}]},this.init(),this.filter=function(a,c){if(!angular.isDate(a)||isNaN(a)||!c)return"";c=b.DATETIME_FORMATS[c]||c,b.id!==m&&this.init(),this.formatters[c]||(this.formatters[c]=e(c,"formatter"));var d=this.formatters[c],f=d.map,g=c;return f.reduce(function(b,c,d){var e=g.match(new RegExp("(.*)"+c.key));e&&angular.isString(e[1])&&(b+=e[1],g=g.replace(e[1]+c.key,""));var h=d===f.length-1?g:"";return c.apply?b+c.apply.call(null,a)+h:b+h},"")},this.parse=function(c,d,g){if(!angular.isString(c)||!d)return c;d=b.DATETIME_FORMATS[d]||d,d=d.replace(o,"\\$&"),b.id!==m&&this.init(),this.parsers[d]||(this.parsers[d]=e(d,"apply"));var h=this.parsers[d],i=h.regex,j=h.map,k=c.match(i),l=!1;if(k&&k.length){var n,p;angular.isDate(g)&&!isNaN(g.getTime())?n={year:g.getFullYear(),month:g.getMonth(),date:g.getDate(),hours:g.getHours(),minutes:g.getMinutes(),seconds:g.getSeconds(),milliseconds:g.getMilliseconds()}:(g&&a.warn("dateparser:","baseDate is not a valid date"),n={year:1900,month:0,date:1,hours:0,minutes:0,seconds:0,milliseconds:0});for(var q=1,r=k.length;r>q;q++){var s=j[q-1];"Z"===s.matcher&&(l=!0),s.apply&&s.apply.call(n,k[q])}var t=l?Date.prototype.setUTCFullYear:Date.prototype.setFullYear,u=l?Date.prototype.setUTCHours:Date.prototype.setHours;return f(n.year,n.month,n.date)&&(!angular.isDate(g)||isNaN(g.getTime())||l?(p=new Date(0),t.call(p,n.year,n.month,n.date),u.call(p,n.hours||0,n.minutes||0,n.seconds||0,n.milliseconds||0)):(p=new Date(g),t.call(p,n.year,n.month,n.date),u.call(p,n.hours,n.minutes,n.seconds,n.milliseconds))),p}},this.toTimezone=h,this.fromTimezone=i,this.timezoneToOffset=j,this.addDateMinutes=k,this.convertTimezoneToLocal=l}]),angular.module("ui.bootstrap.isClass",[]).directive("uibIsClass",["$animate",function(a){var b=/^\s*([\s\S]+?)\s+on\s+([\s\S]+?)\s*$/,c=/^\s*([\s\S]+?)\s+for\s+([\s\S]+?)\s*$/;return{restrict:"A",compile:function(d,e){function f(a,b,c){i.push(a),j.push({scope:a,element:b}),o.forEach(function(b,c){g(b,a)}),a.$on("$destroy",h)}function g(b,d){var e=b.match(c),f=d.$eval(e[1]),g=e[2],h=k[b];if(!h){var i=function(b){var c=null;j.some(function(a){var d=a.scope.$eval(m);return d===b?(c=a,!0):void 0}),h.lastActivated!==c&&(h.lastActivated&&a.removeClass(h.lastActivated.element,f),c&&a.addClass(c.element,f),h.lastActivated=c)};k[b]=h={lastActivated:null,scope:d,watchFn:i,compareWithExp:g,watcher:d.$watch(g,i)}}h.watchFn(d.$eval(g))}function h(a){var b=a.targetScope,c=i.indexOf(b);if(i.splice(c,1),j.splice(c,1),i.length){var d=i[0];angular.forEach(k,function(a){a.scope===b&&(a.watcher=d.$watch(a.compareWithExp,a.watchFn),a.scope=d)})}else k={}}var i=[],j=[],k={},l=e.uibIsClass.match(b),m=l[2],n=l[1],o=n.split(",");return f}}}]),angular.module("ui.bootstrap.datepicker",["ui.bootstrap.dateparser","ui.bootstrap.isClass"]).value("$datepickerSuppressError",!1).value("$datepickerLiteralWarning",!0).constant("uibDatepickerConfig",{datepickerMode:"day",formatDay:"dd",formatMonth:"MMMM",formatYear:"yyyy",formatDayHeader:"EEE",formatDayTitle:"MMMM yyyy",formatMonthTitle:"yyyy",maxDate:null,maxMode:"year",minDate:null,minMode:"day",ngModelOptions:{},shortcutPropagation:!1,showWeeks:!0,yearColumns:5,yearRows:4}).controller("UibDatepickerController",["$scope","$attrs","$parse","$interpolate","$locale","$log","dateFilter","uibDatepickerConfig","$datepickerLiteralWarning","$datepickerSuppressError","uibDateParser",function(a,b,c,d,e,f,g,h,i,j,k){function l(b){a.datepickerMode=b,a.datepickerOptions.datepickerMode=b}var m=this,n={$setViewValue:angular.noop},o={},p=[];!!b.datepickerOptions;a.datepickerOptions||(a.datepickerOptions={}),this.modes=["day","month","year"],["customClass","dateDisabled","datepickerMode","formatDay","formatDayHeader","formatDayTitle","formatMonth","formatMonthTitle","formatYear","maxDate","maxMode","minDate","minMode","showWeeks","shortcutPropagation","startingDay","yearColumns","yearRows"].forEach(function(b){switch(b){case"customClass":case"dateDisabled":a[b]=a.datepickerOptions[b]||angular.noop;break;case"datepickerMode":a.datepickerMode=angular.isDefined(a.datepickerOptions.datepickerMode)?a.datepickerOptions.datepickerMode:h.datepickerMode;break;case"formatDay":case"formatDayHeader":case"formatDayTitle":case"formatMonth":case"formatMonthTitle":case"formatYear":m[b]=angular.isDefined(a.datepickerOptions[b])?d(a.datepickerOptions[b])(a.$parent):h[b];break;case"showWeeks":case"shortcutPropagation":case"yearColumns":case"yearRows":m[b]=angular.isDefined(a.datepickerOptions[b])?a.datepickerOptions[b]:h[b];break;case"startingDay":angular.isDefined(a.datepickerOptions.startingDay)?m.startingDay=a.datepickerOptions.startingDay:angular.isNumber(h.startingDay)?m.startingDay=h.startingDay:m.startingDay=(e.DATETIME_FORMATS.FIRSTDAYOFWEEK+8)%7;break;case"maxDate":case"minDate":a.$watch("datepickerOptions."+b,function(a){a?angular.isDate(a)?m[b]=k.fromTimezone(new Date(a),o.timezone):(i&&f.warn("Literal date support has been deprecated, please switch to date object usage"),m[b]=new Date(g(a,"medium"))):m[b]=h[b]?k.fromTimezone(new Date(h[b]),o.timezone):null,m.refreshView()});break;case"maxMode":case"minMode":a.datepickerOptions[b]?a.$watch(function(){return a.datepickerOptions[b]},function(c){m[b]=a[b]=angular.isDefined(c)?c:datepickerOptions[b],("minMode"===b&&m.modes.indexOf(a.datepickerOptions.datepickerMode)<m.modes.indexOf(m[b])||"maxMode"===b&&m.modes.indexOf(a.datepickerOptions.datepickerMode)>m.modes.indexOf(m[b]))&&(a.datepickerMode=m[b],a.datepickerOptions.datepickerMode=m[b])}):m[b]=a[b]=h[b]||null}}),a.uniqueId="datepicker-"+a.$id+"-"+Math.floor(1e4*Math.random()),a.disabled=angular.isDefined(b.disabled)||!1,angular.isDefined(b.ngDisabled)&&p.push(a.$parent.$watch(b.ngDisabled,function(b){a.disabled=b,m.refreshView()})),a.isActive=function(b){return 0===m.compare(b.date,m.activeDate)?(a.activeDateId=b.uid,!0):!1},this.init=function(b){n=b,o=b.$options||h.ngModelOptions,a.datepickerOptions.initDate?(m.activeDate=k.fromTimezone(a.datepickerOptions.initDate,o.timezone)||new Date,a.$watch("datepickerOptions.initDate",function(a){a&&(n.$isEmpty(n.$modelValue)||n.$invalid)&&(m.activeDate=k.fromTimezone(a,o.timezone),m.refreshView())})):m.activeDate=new Date;var c=n.$modelValue?new Date(n.$modelValue):new Date;this.activeDate=isNaN(c)?k.fromTimezone(new Date,o.timezone):k.fromTimezone(c,o.timezone),n.$render=function(){m.render()}},this.render=function(){if(n.$viewValue){var a=new Date(n.$viewValue),b=!isNaN(a);b?this.activeDate=k.fromTimezone(a,o.timezone):j||f.error('Datepicker directive: "ng-model" value must be a Date object')}this.refreshView()},this.refreshView=function(){if(this.element){a.selectedDt=null,this._refreshView(),a.activeDt&&(a.activeDateId=a.activeDt.uid);var b=n.$viewValue?new Date(n.$viewValue):null;b=k.fromTimezone(b,o.timezone),n.$setValidity("dateDisabled",!b||this.element&&!this.isDisabled(b))}},this.createDateObject=function(b,c){var d=n.$viewValue?new Date(n.$viewValue):null;d=k.fromTimezone(d,o.timezone);var e=new Date;e=k.fromTimezone(e,o.timezone);var f=this.compare(b,e),g={date:b,label:k.filter(b,c),selected:d&&0===this.compare(b,d),disabled:this.isDisabled(b),past:0>f,current:0===f,future:f>0,customClass:this.customClass(b)||null};return d&&0===this.compare(b,d)&&(a.selectedDt=g),m.activeDate&&0===this.compare(g.date,m.activeDate)&&(a.activeDt=g),g},this.isDisabled=function(b){return a.disabled||this.minDate&&this.compare(b,this.minDate)<0||this.maxDate&&this.compare(b,this.maxDate)>0||a.dateDisabled&&a.dateDisabled({date:b,mode:a.datepickerMode})},this.customClass=function(b){return a.customClass({date:b,mode:a.datepickerMode})},this.split=function(a,b){for(var c=[];a.length>0;)c.push(a.splice(0,b));return c},a.select=function(b){if(a.datepickerMode===m.minMode){var c=n.$viewValue?k.fromTimezone(new Date(n.$viewValue),o.timezone):new Date(0,0,0,0,0,0,0);c.setFullYear(b.getFullYear(),b.getMonth(),b.getDate()),c=k.toTimezone(c,o.timezone),n.$setViewValue(c),n.$render()}else m.activeDate=b,l(m.modes[m.modes.indexOf(a.datepickerMode)-1]),a.$emit("uib:datepicker.mode");a.$broadcast("uib:datepicker.focus")},a.move=function(a){var b=m.activeDate.getFullYear()+a*(m.step.years||0),c=m.activeDate.getMonth()+a*(m.step.months||0);m.activeDate.setFullYear(b,c,1),m.refreshView()},a.toggleMode=function(b){b=b||1,a.datepickerMode===m.maxMode&&1===b||a.datepickerMode===m.minMode&&-1===b||(l(m.modes[m.modes.indexOf(a.datepickerMode)+b]),a.$emit("uib:datepicker.mode"))},a.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down"};var q=function(){m.element[0].focus()};a.$on("uib:datepicker.focus",q),a.keydown=function(b){var c=a.keys[b.which];if(c&&!b.shiftKey&&!b.altKey&&!a.disabled)if(b.preventDefault(),m.shortcutPropagation||b.stopPropagation(),"enter"===c||"space"===c){if(m.isDisabled(m.activeDate))return;a.select(m.activeDate)}else!b.ctrlKey||"up"!==c&&"down"!==c?(m.handleKeyDown(c,b),m.refreshView()):a.toggleMode("up"===c?1:-1)},a.$on("$destroy",function(){for(;p.length;)p.shift()()})}]).controller("UibDaypickerController",["$scope","$element","dateFilter",function(a,b,c){function d(a,b){return 1!==b||a%4!==0||a%100===0&&a%400!==0?f[b]:29}function e(a){var b=new Date(a);b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1}var f=[31,28,31,30,31,30,31,31,30,31,30,31];this.step={months:1},this.element=b,this.init=function(b){angular.extend(b,this),a.showWeeks=b.showWeeks,b.refreshView()},this.getDates=function(a,b){for(var c,d=new Array(b),e=new Date(a),f=0;b>f;)c=new Date(e),d[f++]=c,e.setDate(e.getDate()+1);return d},this._refreshView=function(){var b=this.activeDate.getFullYear(),d=this.activeDate.getMonth(),f=new Date(this.activeDate);f.setFullYear(b,d,1);var g=this.startingDay-f.getDay(),h=g>0?7-g:-g,i=new Date(f);h>0&&i.setDate(-h+1);for(var j=this.getDates(i,42),k=0;42>k;k++)j[k]=angular.extend(this.createDateObject(j[k],this.formatDay),{secondary:j[k].getMonth()!==d,uid:a.uniqueId+"-"+k});a.labels=new Array(7);for(var l=0;7>l;l++)a.labels[l]={abbr:c(j[l].date,this.formatDayHeader),full:c(j[l].date,"EEEE")};if(a.title=c(this.activeDate,this.formatDayTitle),a.rows=this.split(j,7),a.showWeeks){a.weekNumbers=[];for(var m=(11-this.startingDay)%7,n=a.rows.length,o=0;n>o;o++)a.weekNumbers.push(e(a.rows[o][m].date))}},this.compare=function(a,b){var c=new Date(a.getFullYear(),a.getMonth(),a.getDate()),d=new Date(b.getFullYear(),b.getMonth(),b.getDate());return c.setFullYear(a.getFullYear()),d.setFullYear(b.getFullYear()),c-d},this.handleKeyDown=function(a,b){var c=this.activeDate.getDate();if("left"===a)c-=1;else if("up"===a)c-=7;else if("right"===a)c+=1;else if("down"===a)c+=7;else if("pageup"===a||"pagedown"===a){var e=this.activeDate.getMonth()+("pageup"===a?-1:1);this.activeDate.setMonth(e,1),c=Math.min(d(this.activeDate.getFullYear(),this.activeDate.getMonth()),c)}else"home"===a?c=1:"end"===a&&(c=d(this.activeDate.getFullYear(),this.activeDate.getMonth()));this.activeDate.setDate(c)}}]).controller("UibMonthpickerController",["$scope","$element","dateFilter",function(a,b,c){this.step={years:1},this.element=b,this.init=function(a){angular.extend(a,this),a.refreshView()},this._refreshView=function(){for(var b,d=new Array(12),e=this.activeDate.getFullYear(),f=0;12>f;f++)b=new Date(this.activeDate),b.setFullYear(e,f,1),d[f]=angular.extend(this.createDateObject(b,this.formatMonth),{uid:a.uniqueId+"-"+f});a.title=c(this.activeDate,this.formatMonthTitle),a.rows=this.split(d,3)},this.compare=function(a,b){var c=new Date(a.getFullYear(),a.getMonth()),d=new Date(b.getFullYear(),b.getMonth());return c.setFullYear(a.getFullYear()),d.setFullYear(b.getFullYear()),c-d},this.handleKeyDown=function(a,b){var c=this.activeDate.getMonth();if("left"===a)c-=1;else if("up"===a)c-=3;else if("right"===a)c+=1;else if("down"===a)c+=3;else if("pageup"===a||"pagedown"===a){var d=this.activeDate.getFullYear()+("pageup"===a?-1:1);this.activeDate.setFullYear(d)}else"home"===a?c=0:"end"===a&&(c=11);this.activeDate.setMonth(c)}}]).controller("UibYearpickerController",["$scope","$element","dateFilter",function(a,b,c){function d(a){return parseInt((a-1)/f,10)*f+1}var e,f;this.element=b,this.yearpickerInit=function(){e=this.yearColumns,f=this.yearRows*e,this.step={years:f}},this._refreshView=function(){for(var b,c=new Array(f),g=0,h=d(this.activeDate.getFullYear());f>g;g++)b=new Date(this.activeDate),b.setFullYear(h+g,0,1),c[g]=angular.extend(this.createDateObject(b,this.formatYear),{uid:a.uniqueId+"-"+g});a.title=[c[0].label,c[f-1].label].join(" - "),a.rows=this.split(c,e),a.columns=e},this.compare=function(a,b){return a.getFullYear()-b.getFullYear()},this.handleKeyDown=function(a,b){var c=this.activeDate.getFullYear();"left"===a?c-=1:"up"===a?c-=e:"right"===a?c+=1:"down"===a?c+=e:"pageup"===a||"pagedown"===a?c+=("pageup"===a?-1:1)*f:"home"===a?c=d(this.activeDate.getFullYear()):"end"===a&&(c=d(this.activeDate.getFullYear())+f-1),this.activeDate.setFullYear(c)}}]).directive("uibDatepicker",function(){return{replace:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/datepicker/datepicker.html"},scope:{datepickerOptions:"=?"},require:["uibDatepicker","^ngModel"],controller:"UibDatepickerController",controllerAs:"datepicker",link:function(a,b,c,d){var e=d[0],f=d[1];e.init(f)}}}).directive("uibDaypicker",function(){return{replace:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/datepicker/day.html"},require:["^uibDatepicker","uibDaypicker"],controller:"UibDaypickerController",link:function(a,b,c,d){var e=d[0],f=d[1];f.init(e)}}}).directive("uibMonthpicker",function(){return{replace:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/datepicker/month.html"},require:["^uibDatepicker","uibMonthpicker"],controller:"UibMonthpickerController",link:function(a,b,c,d){var e=d[0],f=d[1];f.init(e)}}}).directive("uibYearpicker",function(){return{replace:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/datepicker/year.html"},require:["^uibDatepicker","uibYearpicker"],controller:"UibYearpickerController",link:function(a,b,c,d){var e=d[0];angular.extend(e,d[1]),e.yearpickerInit(),e.refreshView()}}}),angular.module("ui.bootstrap.position",[]).factory("$uibPosition",["$document","$window",function(a,b){var c,d,e={normal:/(auto|scroll)/,hidden:/(auto|scroll|hidden)/},f={auto:/\s?auto?\s?/i,primary:/^(top|bottom|left|right)$/,secondary:/^(top|bottom|left|right|center)$/,vertical:/^(top|bottom)$/},g=/(HTML|BODY)/;return{getRawNode:function(a){return a.nodeName?a:a[0]||a},parseStyle:function(a){return a=parseFloat(a),isFinite(a)?a:0},offsetParent:function(c){function d(a){return"static"===(b.getComputedStyle(a).position||"static")}c=this.getRawNode(c);for(var e=c.offsetParent||a[0].documentElement;e&&e!==a[0].documentElement&&d(e);)e=e.offsetParent;return e||a[0].documentElement},scrollbarWidth:function(e){if(e){if(angular.isUndefined(d)){var f=a.find("body");f.addClass("uib-position-body-scrollbar-measure"),d=b.innerWidth-f[0].clientWidth,d=isFinite(d)?d:0,f.removeClass("uib-position-body-scrollbar-measure")}return d}if(angular.isUndefined(c)){var g=angular.element('<div class="uib-position-scrollbar-measure"></div>');a.find("body").append(g),c=g[0].offsetWidth-g[0].clientWidth,c=isFinite(c)?c:0,g.remove()}return c},scrollbarPadding:function(a){a=this.getRawNode(a);var c=b.getComputedStyle(a),d=this.parseStyle(c.paddingRight),e=this.parseStyle(c.paddingBottom),f=this.scrollParent(a,!1,!0),h=this.scrollbarWidth(f,g.test(f.tagName));return{scrollbarWidth:h,widthOverflow:f.scrollWidth>f.clientWidth,right:d+h,originalRight:d,heightOverflow:f.scrollHeight>f.clientHeight,bottom:e+h,originalBottom:e}},isScrollable:function(a,c){a=this.getRawNode(a);var d=c?e.hidden:e.normal,f=b.getComputedStyle(a);return d.test(f.overflow+f.overflowY+f.overflowX)},scrollParent:function(c,d,f){c=this.getRawNode(c);var g=d?e.hidden:e.normal,h=a[0].documentElement,i=b.getComputedStyle(c);if(f&&g.test(i.overflow+i.overflowY+i.overflowX))return c;var j="absolute"===i.position,k=c.parentElement||h;if(k===h||"fixed"===i.position)return h;for(;k.parentElement&&k!==h;){var l=b.getComputedStyle(k);if(j&&"static"!==l.position&&(j=!1),!j&&g.test(l.overflow+l.overflowY+l.overflowX))break;k=k.parentElement}return k},position:function(c,d){c=this.getRawNode(c);var e=this.offset(c);if(d){var f=b.getComputedStyle(c);e.top-=this.parseStyle(f.marginTop),e.left-=this.parseStyle(f.marginLeft)}var g=this.offsetParent(c),h={top:0,left:0};return g!==a[0].documentElement&&(h=this.offset(g),h.top+=g.clientTop-g.scrollTop,h.left+=g.clientLeft-g.scrollLeft),{width:Math.round(angular.isNumber(e.width)?e.width:c.offsetWidth),height:Math.round(angular.isNumber(e.height)?e.height:c.offsetHeight),top:Math.round(e.top-h.top),left:Math.round(e.left-h.left)}},offset:function(c){
c=this.getRawNode(c);var d=c.getBoundingClientRect();return{width:Math.round(angular.isNumber(d.width)?d.width:c.offsetWidth),height:Math.round(angular.isNumber(d.height)?d.height:c.offsetHeight),top:Math.round(d.top+(b.pageYOffset||a[0].documentElement.scrollTop)),left:Math.round(d.left+(b.pageXOffset||a[0].documentElement.scrollLeft))}},viewportOffset:function(c,d,e){c=this.getRawNode(c),e=e!==!1;var f=c.getBoundingClientRect(),g={top:0,left:0,bottom:0,right:0},h=d?a[0].documentElement:this.scrollParent(c),i=h.getBoundingClientRect();if(g.top=i.top+h.clientTop,g.left=i.left+h.clientLeft,h===a[0].documentElement&&(g.top+=b.pageYOffset,g.left+=b.pageXOffset),g.bottom=g.top+h.clientHeight,g.right=g.left+h.clientWidth,e){var j=b.getComputedStyle(h);g.top+=this.parseStyle(j.paddingTop),g.bottom-=this.parseStyle(j.paddingBottom),g.left+=this.parseStyle(j.paddingLeft),g.right-=this.parseStyle(j.paddingRight)}return{top:Math.round(f.top-g.top),bottom:Math.round(g.bottom-f.bottom),left:Math.round(f.left-g.left),right:Math.round(g.right-f.right)}},parsePlacement:function(a){var b=f.auto.test(a);return b&&(a=a.replace(f.auto,"")),a=a.split("-"),a[0]=a[0]||"top",f.primary.test(a[0])||(a[0]="top"),a[1]=a[1]||"center",f.secondary.test(a[1])||(a[1]="center"),b?a[2]=!0:a[2]=!1,a},positionElements:function(a,c,d,e){a=this.getRawNode(a),c=this.getRawNode(c);var g=angular.isDefined(c.offsetWidth)?c.offsetWidth:c.prop("offsetWidth"),h=angular.isDefined(c.offsetHeight)?c.offsetHeight:c.prop("offsetHeight");d=this.parsePlacement(d);var i=e?this.offset(a):this.position(a),j={top:0,left:0,placement:""};if(d[2]){var k=this.viewportOffset(a,e),l=b.getComputedStyle(c),m={width:g+Math.round(Math.abs(this.parseStyle(l.marginLeft)+this.parseStyle(l.marginRight))),height:h+Math.round(Math.abs(this.parseStyle(l.marginTop)+this.parseStyle(l.marginBottom)))};if(d[0]="top"===d[0]&&m.height>k.top&&m.height<=k.bottom?"bottom":"bottom"===d[0]&&m.height>k.bottom&&m.height<=k.top?"top":"left"===d[0]&&m.width>k.left&&m.width<=k.right?"right":"right"===d[0]&&m.width>k.right&&m.width<=k.left?"left":d[0],d[1]="top"===d[1]&&m.height-i.height>k.bottom&&m.height-i.height<=k.top?"bottom":"bottom"===d[1]&&m.height-i.height>k.top&&m.height-i.height<=k.bottom?"top":"left"===d[1]&&m.width-i.width>k.right&&m.width-i.width<=k.left?"right":"right"===d[1]&&m.width-i.width>k.left&&m.width-i.width<=k.right?"left":d[1],"center"===d[1])if(f.vertical.test(d[0])){var n=i.width/2-g/2;k.left+n<0&&m.width-i.width<=k.right?d[1]="left":k.right+n<0&&m.width-i.width<=k.left&&(d[1]="right")}else{var o=i.height/2-m.height/2;k.top+o<0&&m.height-i.height<=k.bottom?d[1]="top":k.bottom+o<0&&m.height-i.height<=k.top&&(d[1]="bottom")}}switch(d[0]){case"top":j.top=i.top-h;break;case"bottom":j.top=i.top+i.height;break;case"left":j.left=i.left-g;break;case"right":j.left=i.left+i.width}switch(d[1]){case"top":j.top=i.top;break;case"bottom":j.top=i.top+i.height-h;break;case"left":j.left=i.left;break;case"right":j.left=i.left+i.width-g;break;case"center":f.vertical.test(d[0])?j.left=i.left+i.width/2-g/2:j.top=i.top+i.height/2-h/2}return j.top=Math.round(j.top),j.left=Math.round(j.left),j.placement="center"===d[1]?d[0]:d[0]+"-"+d[1],j},positionArrow:function(a,c){a=this.getRawNode(a);var d=a.querySelector(".tooltip-inner, .popover-inner");if(d){var e=angular.element(d).hasClass("tooltip-inner"),g=e?a.querySelector(".tooltip-arrow"):a.querySelector(".arrow");if(g){var h={top:"",bottom:"",left:"",right:""};if(c=this.parsePlacement(c),"center"===c[1])return void angular.element(g).css(h);var i="border-"+c[0]+"-width",j=b.getComputedStyle(g)[i],k="border-";k+=f.vertical.test(c[0])?c[0]+"-"+c[1]:c[1]+"-"+c[0],k+="-radius";var l=b.getComputedStyle(e?d:a)[k];switch(c[0]){case"top":h.bottom=e?"0":"-"+j;break;case"bottom":h.top=e?"0":"-"+j;break;case"left":h.right=e?"0":"-"+j;break;case"right":h.left=e?"0":"-"+j}h[c[1]]=l,angular.element(g).css(h)}}}}}]),angular.module("ui.bootstrap.datepickerPopup",["ui.bootstrap.datepicker","ui.bootstrap.position"]).value("$datepickerPopupLiteralWarning",!0).constant("uibDatepickerPopupConfig",{altInputFormats:[],appendToBody:!1,clearText:"Clear",closeOnDateSelection:!0,closeText:"Done",currentText:"Today",datepickerPopup:"yyyy-MM-dd",datepickerPopupTemplateUrl:"uib/template/datepickerPopup/popup.html",datepickerTemplateUrl:"uib/template/datepicker/datepicker.html",html5Types:{date:"yyyy-MM-dd","datetime-local":"yyyy-MM-ddTHH:mm:ss.sss",month:"yyyy-MM"},onOpenFocus:!0,showButtonBar:!0,placement:"auto bottom-left"}).controller("UibDatepickerPopupController",["$scope","$element","$attrs","$compile","$log","$parse","$window","$document","$rootScope","$uibPosition","dateFilter","uibDateParser","uibDatepickerPopupConfig","$timeout","uibDatepickerConfig","$datepickerPopupLiteralWarning",function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){function q(b){var c=l.parse(b,w,a.date);if(isNaN(c))for(var d=0;d<I.length;d++)if(c=l.parse(b,I[d],a.date),!isNaN(c))return c;return c}function r(a){if(angular.isNumber(a)&&(a=new Date(a)),!a)return null;if(angular.isDate(a)&&!isNaN(a))return a;if(angular.isString(a)){var b=q(a);if(!isNaN(b))return l.toTimezone(b,J)}return F.$options&&F.$options.allowInvalid?a:void 0}function s(a,b){var d=a||b;return c.ngRequired||d?(angular.isNumber(d)&&(d=new Date(d)),d?angular.isDate(d)&&!isNaN(d)?!0:angular.isString(d)?!isNaN(q(b)):!1:!0):!0}function t(c){if(a.isOpen||!a.disabled){var d=H[0],e=b[0].contains(c.target),f=void 0!==d.contains&&d.contains(c.target);!a.isOpen||e||f||a.$apply(function(){a.isOpen=!1})}}function u(c){27===c.which&&a.isOpen?(c.preventDefault(),c.stopPropagation(),a.$apply(function(){a.isOpen=!1}),b[0].focus()):40!==c.which||a.isOpen||(c.preventDefault(),c.stopPropagation(),a.$apply(function(){a.isOpen=!0}))}function v(){if(a.isOpen){var d=angular.element(H[0].querySelector(".uib-datepicker-popup")),e=c.popupPlacement?c.popupPlacement:m.placement,f=j.positionElements(b,d,e,y);d.css({top:f.top+"px",left:f.left+"px"}),d.hasClass("uib-position-measure")&&d.removeClass("uib-position-measure")}}var w,x,y,z,A,B,C,D,E,F,G,H,I,J,K=!1,L=[];this.init=function(e){if(F=e,G=e.$options,x=angular.isDefined(c.closeOnDateSelection)?a.$parent.$eval(c.closeOnDateSelection):m.closeOnDateSelection,y=angular.isDefined(c.datepickerAppendToBody)?a.$parent.$eval(c.datepickerAppendToBody):m.appendToBody,z=angular.isDefined(c.onOpenFocus)?a.$parent.$eval(c.onOpenFocus):m.onOpenFocus,A=angular.isDefined(c.datepickerPopupTemplateUrl)?c.datepickerPopupTemplateUrl:m.datepickerPopupTemplateUrl,B=angular.isDefined(c.datepickerTemplateUrl)?c.datepickerTemplateUrl:m.datepickerTemplateUrl,I=angular.isDefined(c.altInputFormats)?a.$parent.$eval(c.altInputFormats):m.altInputFormats,a.showButtonBar=angular.isDefined(c.showButtonBar)?a.$parent.$eval(c.showButtonBar):m.showButtonBar,m.html5Types[c.type]?(w=m.html5Types[c.type],K=!0):(w=c.uibDatepickerPopup||m.datepickerPopup,c.$observe("uibDatepickerPopup",function(a,b){var c=a||m.datepickerPopup;if(c!==w&&(w=c,F.$modelValue=null,!w))throw new Error("uibDatepickerPopup must have a date format specified.")})),!w)throw new Error("uibDatepickerPopup must have a date format specified.");if(K&&c.uibDatepickerPopup)throw new Error("HTML5 date input types do not support custom formats.");C=angular.element("<div uib-datepicker-popup-wrap><div uib-datepicker></div></div>"),G?(J=G.timezone,a.ngModelOptions=angular.copy(G),a.ngModelOptions.timezone=null,a.ngModelOptions.updateOnDefault===!0&&(a.ngModelOptions.updateOn=a.ngModelOptions.updateOn?a.ngModelOptions.updateOn+" default":"default"),C.attr("ng-model-options","ngModelOptions")):J=null,C.attr({"ng-model":"date","ng-change":"dateSelection(date)","template-url":A}),D=angular.element(C.children()[0]),D.attr("template-url",B),a.datepickerOptions||(a.datepickerOptions={}),K&&"month"===c.type&&(a.datepickerOptions.datepickerMode="month",a.datepickerOptions.minMode="month"),D.attr("datepicker-options","datepickerOptions"),K?F.$formatters.push(function(b){return a.date=l.fromTimezone(b,J),b}):(F.$$parserName="date",F.$validators.date=s,F.$parsers.unshift(r),F.$formatters.push(function(b){return F.$isEmpty(b)?(a.date=b,b):(angular.isNumber(b)&&(b=new Date(b)),a.date=l.fromTimezone(b,J),l.filter(a.date,w))})),F.$viewChangeListeners.push(function(){a.date=q(F.$viewValue)}),b.on("keydown",u),H=d(C)(a),C.remove(),y?h.find("body").append(H):b.after(H),a.$on("$destroy",function(){for(a.isOpen===!0&&(i.$$phase||a.$apply(function(){a.isOpen=!1})),H.remove(),b.off("keydown",u),h.off("click",t),E&&E.off("scroll",v),angular.element(g).off("resize",v);L.length;)L.shift()()})},a.getText=function(b){return a[b+"Text"]||m[b+"Text"]},a.isDisabled=function(b){"today"===b&&(b=l.fromTimezone(new Date,J));var c={};return angular.forEach(["minDate","maxDate"],function(b){a.datepickerOptions[b]?angular.isDate(a.datepickerOptions[b])?c[b]=l.fromTimezone(new Date(a.datepickerOptions[b]),J):(p&&e.warn("Literal date support has been deprecated, please switch to date object usage"),c[b]=new Date(k(a.datepickerOptions[b],"medium"))):c[b]=null}),a.datepickerOptions&&c.minDate&&a.compare(b,c.minDate)<0||c.maxDate&&a.compare(b,c.maxDate)>0},a.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())},a.dateSelection=function(c){angular.isDefined(c)&&(a.date=c);var d=a.date?l.filter(a.date,w):null;b.val(d),F.$setViewValue(d),x&&(a.isOpen=!1,b[0].focus())},a.keydown=function(c){27===c.which&&(c.stopPropagation(),a.isOpen=!1,b[0].focus())},a.select=function(b,c){if(c.stopPropagation(),"today"===b){var d=new Date;angular.isDate(a.date)?(b=new Date(a.date),b.setFullYear(d.getFullYear(),d.getMonth(),d.getDate())):b=new Date(d.setHours(0,0,0,0))}a.dateSelection(b)},a.close=function(c){c.stopPropagation(),a.isOpen=!1,b[0].focus()},a.disabled=angular.isDefined(c.disabled)||!1,c.ngDisabled&&L.push(a.$parent.$watch(f(c.ngDisabled),function(b){a.disabled=b})),a.$watch("isOpen",function(d){d?a.disabled?a.isOpen=!1:n(function(){v(),z&&a.$broadcast("uib:datepicker.focus"),h.on("click",t);var d=c.popupPlacement?c.popupPlacement:m.placement;y||j.parsePlacement(d)[2]?(E=E||angular.element(j.scrollParent(b)),E&&E.on("scroll",v)):E=null,angular.element(g).on("resize",v)},0,!1):(h.off("click",t),E&&E.off("scroll",v),angular.element(g).off("resize",v))}),a.$on("uib:datepicker.mode",function(){n(v,0,!1)})}]).directive("uibDatepickerPopup",function(){return{require:["ngModel","uibDatepickerPopup"],controller:"UibDatepickerPopupController",scope:{datepickerOptions:"=?",isOpen:"=?",currentText:"@",clearText:"@",closeText:"@"},link:function(a,b,c,d){var e=d[0],f=d[1];f.init(e)}}}).directive("uibDatepickerPopupWrap",function(){return{replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/datepickerPopup/popup.html"}}}),angular.module("ui.bootstrap.debounce",[]).factory("$$debounce",["$timeout",function(a){return function(b,c){var d;return function(){var e=this,f=Array.prototype.slice.call(arguments);d&&a.cancel(d),d=a(function(){b.apply(e,f)},c)}}}]),angular.module("ui.bootstrap.dropdown",["ui.bootstrap.position"]).constant("uibDropdownConfig",{appendToOpenClass:"uib-dropdown-open",openClass:"open"}).service("uibDropdownService",["$document","$rootScope",function(a,b){var c=null;this.open=function(b,f){c||(a.on("click",d),f.on("keydown",e)),c&&c!==b&&(c.isOpen=!1),c=b},this.close=function(b,f){c===b&&(c=null,a.off("click",d),f.off("keydown",e))};var d=function(a){if(c&&!(a&&"disabled"===c.getAutoClose()||a&&3===a.which)){var d=c.getToggleElement();if(!(a&&d&&d[0].contains(a.target))){var e=c.getDropdownElement();a&&"outsideClick"===c.getAutoClose()&&e&&e[0].contains(a.target)||(c.isOpen=!1,b.$$phase||c.$apply())}}},e=function(a){27===a.which?(a.stopPropagation(),c.focusToggleElement(),d()):c.isKeynavEnabled()&&-1!==[38,40].indexOf(a.which)&&c.isOpen&&(a.preventDefault(),a.stopPropagation(),c.focusDropdownEntry(a.which))}}]).controller("UibDropdownController",["$scope","$element","$attrs","$parse","uibDropdownConfig","uibDropdownService","$animate","$uibPosition","$document","$compile","$templateRequest",function(a,b,c,d,e,f,g,h,i,j,k){var l,m,n=this,o=a.$new(),p=e.appendToOpenClass,q=e.openClass,r=angular.noop,s=c.onToggle?d(c.onToggle):angular.noop,t=!1,u=null,v=!1,w=i.find("body");b.addClass("dropdown"),this.init=function(){if(c.isOpen&&(m=d(c.isOpen),r=m.assign,a.$watch(m,function(a){o.isOpen=!!a})),angular.isDefined(c.dropdownAppendTo)){var e=d(c.dropdownAppendTo)(o);e&&(u=angular.element(e))}t=angular.isDefined(c.dropdownAppendToBody),v=angular.isDefined(c.keyboardNav),t&&!u&&(u=w),u&&n.dropdownMenu&&(u.append(n.dropdownMenu),b.on("$destroy",function(){n.dropdownMenu.remove()}))},this.toggle=function(a){return o.isOpen=arguments.length?!!a:!o.isOpen,angular.isFunction(r)&&r(o,o.isOpen),o.isOpen},this.isOpen=function(){return o.isOpen},o.getToggleElement=function(){return n.toggleElement},o.getAutoClose=function(){return c.autoClose||"always"},o.getElement=function(){return b},o.isKeynavEnabled=function(){return v},o.focusDropdownEntry=function(a){var c=n.dropdownMenu?angular.element(n.dropdownMenu).find("a"):b.find("ul").eq(0).find("a");switch(a){case 40:angular.isNumber(n.selectedOption)?n.selectedOption=n.selectedOption===c.length-1?n.selectedOption:n.selectedOption+1:n.selectedOption=0;break;case 38:angular.isNumber(n.selectedOption)?n.selectedOption=0===n.selectedOption?0:n.selectedOption-1:n.selectedOption=c.length-1}c[n.selectedOption].focus()},o.getDropdownElement=function(){return n.dropdownMenu},o.focusToggleElement=function(){n.toggleElement&&n.toggleElement[0].focus()},o.$watch("isOpen",function(c,d){if(u&&n.dropdownMenu){var e,i,m,v=h.positionElements(b,n.dropdownMenu,"bottom-left",!0);if(e={top:v.top+"px",display:c?"block":"none"},i=n.dropdownMenu.hasClass("dropdown-menu-right"),i?(e.left="auto",m=h.scrollbarWidth(!0),e.right=window.innerWidth-m-(v.left+b.prop("offsetWidth"))+"px"):(e.left=v.left+"px",e.right="auto"),!t){var w=h.offset(u);e.top=v.top-w.top+"px",i?e.right=window.innerWidth-(v.left-w.left+b.prop("offsetWidth"))+"px":e.left=v.left-w.left+"px"}n.dropdownMenu.css(e)}var x=u?u:b,y=x.hasClass(u?p:q);if(y===!c&&g[c?"addClass":"removeClass"](x,u?p:q).then(function(){angular.isDefined(c)&&c!==d&&s(a,{open:!!c})}),c)n.dropdownMenuTemplateUrl&&k(n.dropdownMenuTemplateUrl).then(function(a){l=o.$new(),j(a.trim())(l,function(a){var b=a;n.dropdownMenu.replaceWith(b),n.dropdownMenu=b})}),o.focusToggleElement(),f.open(o,b);else{if(n.dropdownMenuTemplateUrl){l&&l.$destroy();var z=angular.element('<ul class="dropdown-menu"></ul>');n.dropdownMenu.replaceWith(z),n.dropdownMenu=z}f.close(o,b),n.selectedOption=null}angular.isFunction(r)&&r(a,c)})}]).directive("uibDropdown",function(){return{controller:"UibDropdownController",link:function(a,b,c,d){d.init()}}}).directive("uibDropdownMenu",function(){return{restrict:"A",require:"?^uibDropdown",link:function(a,b,c,d){if(d&&!angular.isDefined(c.dropdownNested)){b.addClass("dropdown-menu");var e=c.templateUrl;e&&(d.dropdownMenuTemplateUrl=e),d.dropdownMenu||(d.dropdownMenu=b)}}}}).directive("uibDropdownToggle",function(){return{require:"?^uibDropdown",link:function(a,b,c,d){if(d){b.addClass("dropdown-toggle"),d.toggleElement=b;var e=function(e){e.preventDefault(),b.hasClass("disabled")||c.disabled||a.$apply(function(){d.toggle()})};b.bind("click",e),b.attr({"aria-haspopup":!0,"aria-expanded":!1}),a.$watch(d.isOpen,function(a){b.attr("aria-expanded",!!a)}),a.$on("$destroy",function(){b.unbind("click",e)})}}}}),angular.module("ui.bootstrap.stackedMap",[]).factory("$$stackedMap",function(){return{createNew:function(){var a=[];return{add:function(b,c){a.push({key:b,value:c})},get:function(b){for(var c=0;c<a.length;c++)if(b===a[c].key)return a[c]},keys:function(){for(var b=[],c=0;c<a.length;c++)b.push(a[c].key);return b},top:function(){return a[a.length-1]},remove:function(b){for(var c=-1,d=0;d<a.length;d++)if(b===a[d].key){c=d;break}return a.splice(c,1)[0]},removeTop:function(){return a.splice(a.length-1,1)[0]},length:function(){return a.length}}}}}),angular.module("ui.bootstrap.modal",["ui.bootstrap.stackedMap","ui.bootstrap.position"]).factory("$$multiMap",function(){return{createNew:function(){var a={};return{entries:function(){return Object.keys(a).map(function(b){return{key:b,value:a[b]}})},get:function(b){return a[b]},hasKey:function(b){return!!a[b]},keys:function(){return Object.keys(a)},put:function(b,c){a[b]||(a[b]=[]),a[b].push(c)},remove:function(b,c){var d=a[b];if(d){var e=d.indexOf(c);-1!==e&&d.splice(e,1),d.length||delete a[b]}}}}}}).provider("$uibResolve",function(){var a=this;this.resolver=null,this.setResolver=function(a){this.resolver=a},this.$get=["$injector","$q",function(b,c){var d=a.resolver?b.get(a.resolver):null;return{resolve:function(a,e,f,g){if(d)return d.resolve(a,e,f,g);var h=[];return angular.forEach(a,function(a){angular.isFunction(a)||angular.isArray(a)?h.push(c.resolve(b.invoke(a))):angular.isString(a)?h.push(c.resolve(b.get(a))):h.push(c.resolve(a))}),c.all(h).then(function(b){var c={},d=0;return angular.forEach(a,function(a,e){c[e]=b[d++]}),c})}}}]}).directive("uibModalBackdrop",["$animate","$injector","$uibModalStack",function(a,b,c){function d(b,d,e){e.modalInClass&&(a.addClass(d,e.modalInClass),b.$on(c.NOW_CLOSING_EVENT,function(c,f){var g=f();b.modalOptions.animation?a.removeClass(d,e.modalInClass).then(g):g()}))}return{replace:!0,templateUrl:"uib/template/modal/backdrop.html",compile:function(a,b){return a.addClass(b.backdropClass),d}}}]).directive("uibModalWindow",["$uibModalStack","$q","$animateCss","$document",function(a,b,c,d){return{scope:{index:"@"},replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/modal/window.html"},link:function(e,f,g){f.addClass(g.windowClass||""),f.addClass(g.windowTopClass||""),e.size=g.size,e.close=function(b){var c=a.getTop();c&&c.value.backdrop&&"static"!==c.value.backdrop&&b.target===b.currentTarget&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,"backdrop click"))},f.on("click",e.close),e.$isRendered=!0;var h=b.defer();g.$observe("modalRender",function(a){"true"===a&&h.resolve()}),h.promise.then(function(){var h=null;g.modalInClass&&(h=c(f,{addClass:g.modalInClass}).start(),e.$on(a.NOW_CLOSING_EVENT,function(a,b){var d=b();c(f,{removeClass:g.modalInClass}).start().then(d)})),b.when(h).then(function(){var b=a.getTop();if(b&&a.modalRendered(b.key),!d[0].activeElement||!f[0].contains(d[0].activeElement)){var c=f[0].querySelector("[autofocus]");c?c.focus():f[0].focus()}})})}}}]).directive("uibModalAnimationClass",function(){return{compile:function(a,b){b.modalAnimation&&a.addClass(b.uibModalAnimationClass)}}}).directive("uibModalTransclude",function(){return{link:function(a,b,c,d,e){e(a.$parent,function(a){b.empty(),b.append(a)})}}}).factory("$uibModalStack",["$animate","$animateCss","$document","$compile","$rootScope","$q","$$multiMap","$$stackedMap","$uibPosition",function(a,b,c,d,e,f,g,h,i){function j(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)}function k(){for(var a=-1,b=v.keys(),c=0;c<b.length;c++)v.get(b[c]).value.backdrop&&(a=c);return a>-1&&y>a&&(a=y),a}function l(a,b){var c=v.get(a).value,d=c.appendTo;v.remove(a),z=v.top(),z&&(y=parseInt(z.value.modalDomEl.attr("index"),10)),o(c.modalDomEl,c.modalScope,function(){var b=c.openedClass||u;w.remove(b,a);var e=w.hasKey(b);d.toggleClass(b,e),!e&&t&&t.heightOverflow&&t.scrollbarWidth&&(t.originalRight?d.css({paddingRight:t.originalRight+"px"}):d.css({paddingRight:""}),t=null),m(!0)},c.closedDeferred),n(),b&&b.focus?b.focus():d.focus&&d.focus()}function m(a){var b;v.length()>0&&(b=v.top().value,b.modalDomEl.toggleClass(b.windowTopClass||"",a))}function n(){if(r&&-1===k()){var a=s;o(r,s,function(){a=null}),r=void 0,s=void 0}}function o(b,c,d,e){function g(){g.done||(g.done=!0,a.leave(b).then(function(){b.remove(),e&&e.resolve()}),c.$destroy(),d&&d())}var h,i=null,j=function(){return h||(h=f.defer(),i=h.promise),function(){h.resolve()}};return c.$broadcast(x.NOW_CLOSING_EVENT,j),f.when(i).then(g)}function p(a){if(a.isDefaultPrevented())return a;var b=v.top();if(b)switch(a.which){case 27:b.value.keyboard&&(a.preventDefault(),e.$apply(function(){x.dismiss(b.key,"escape key press")}));break;case 9:var c=x.loadFocusElementList(b),d=!1;a.shiftKey?(x.isFocusInFirstItem(a,c)||x.isModalFocused(a,b))&&(d=x.focusLastFocusableElement(c)):x.isFocusInLastItem(a,c)&&(d=x.focusFirstFocusableElement(c)),d&&(a.preventDefault(),a.stopPropagation())}}function q(a,b,c){return!a.value.modalScope.$broadcast("modal.closing",b,c).defaultPrevented}var r,s,t,u="modal-open",v=h.createNew(),w=g.createNew(),x={NOW_CLOSING_EVENT:"modal.stack.now-closing"},y=0,z=null,A="a[href], area[href], input:not([disabled]), button:not([disabled]),select:not([disabled]), textarea:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable=true]";return e.$watch(k,function(a){s&&(s.index=a)}),c.on("keydown",p),e.$on("$destroy",function(){c.off("keydown",p)}),x.open=function(b,f){var g=c[0].activeElement,h=f.openedClass||u;m(!1),z=v.top(),v.add(b,{deferred:f.deferred,renderDeferred:f.renderDeferred,closedDeferred:f.closedDeferred,modalScope:f.scope,backdrop:f.backdrop,keyboard:f.keyboard,openedClass:f.openedClass,windowTopClass:f.windowTopClass,animation:f.animation,appendTo:f.appendTo}),w.put(h,b);var j=f.appendTo,l=k();if(!j.length)throw new Error("appendTo element not found. Make sure that the element passed is in DOM.");l>=0&&!r&&(s=e.$new(!0),s.modalOptions=f,s.index=l,r=angular.element('<div uib-modal-backdrop="modal-backdrop"></div>'),r.attr("backdrop-class",f.backdropClass),f.animation&&r.attr("modal-animation","true"),d(r)(s),a.enter(r,j),t=i.scrollbarPadding(j),t.heightOverflow&&t.scrollbarWidth&&j.css({paddingRight:t.right+"px"})),y=z?parseInt(z.value.modalDomEl.attr("index"),10)+1:0;var n=angular.element('<div uib-modal-window="modal-window"></div>');n.attr({"template-url":f.windowTemplateUrl,"window-class":f.windowClass,"window-top-class":f.windowTopClass,size:f.size,index:y,animate:"animate"}).html(f.content),f.animation&&n.attr("modal-animation","true"),j.addClass(h),a.enter(d(n)(f.scope),j),v.top().value.modalDomEl=n,v.top().value.modalOpener=g},x.close=function(a,b){var c=v.get(a);return c&&q(c,b,!0)?(c.value.modalScope.$$uibDestructionScheduled=!0,c.value.deferred.resolve(b),l(a,c.value.modalOpener),!0):!c},x.dismiss=function(a,b){var c=v.get(a);return c&&q(c,b,!1)?(c.value.modalScope.$$uibDestructionScheduled=!0,c.value.deferred.reject(b),l(a,c.value.modalOpener),!0):!c},x.dismissAll=function(a){for(var b=this.getTop();b&&this.dismiss(b.key,a);)b=this.getTop()},x.getTop=function(){return v.top()},x.modalRendered=function(a){var b=v.get(a);b&&b.value.renderDeferred.resolve()},x.focusFirstFocusableElement=function(a){return a.length>0?(a[0].focus(),!0):!1},x.focusLastFocusableElement=function(a){return a.length>0?(a[a.length-1].focus(),!0):!1},x.isModalFocused=function(a,b){if(a&&b){var c=b.value.modalDomEl;if(c&&c.length)return(a.target||a.srcElement)===c[0]}return!1},x.isFocusInFirstItem=function(a,b){return b.length>0?(a.target||a.srcElement)===b[0]:!1},x.isFocusInLastItem=function(a,b){return b.length>0?(a.target||a.srcElement)===b[b.length-1]:!1},x.loadFocusElementList=function(a){if(a){var b=a.value.modalDomEl;if(b&&b.length){var c=b[0].querySelectorAll(A);return c?Array.prototype.filter.call(c,function(a){return j(a)}):c}}},x}]).provider("$uibModal",function(){var a={options:{animation:!0,backdrop:!0,keyboard:!0},$get:["$rootScope","$q","$document","$templateRequest","$controller","$uibResolve","$uibModalStack",function(b,c,d,e,f,g,h){function i(a){return a.template?c.when(a.template):e(angular.isFunction(a.templateUrl)?a.templateUrl():a.templateUrl)}var j={},k=null;return j.getPromiseChain=function(){return k},j.open=function(e){function j(){return r}var l=c.defer(),m=c.defer(),n=c.defer(),o=c.defer(),p={result:l.promise,opened:m.promise,closed:n.promise,rendered:o.promise,close:function(a){return h.close(p,a)},dismiss:function(a){return h.dismiss(p,a)}};if(e=angular.extend({},a.options,e),e.resolve=e.resolve||{},e.appendTo=e.appendTo||d.find("body").eq(0),!e.template&&!e.templateUrl)throw new Error("One of template or templateUrl options is required.");var q,r=c.all([i(e),g.resolve(e.resolve,{},null,null)]);return q=k=c.all([k]).then(j,j).then(function(a){var c=e.scope||b,d=c.$new();d.$close=p.close,d.$dismiss=p.dismiss,d.$on("$destroy",function(){d.$$uibDestructionScheduled||d.$dismiss("$uibUnscheduledDestruction")});var g,i,j={};e.controller&&(j.$scope=d,j.$scope.$resolve={},j.$uibModalInstance=p,angular.forEach(a[1],function(a,b){j[b]=a,j.$scope.$resolve[b]=a}),i=f(e.controller,j,!0,e.controllerAs),e.controllerAs&&e.bindToController&&(g=i.instance,g.$close=d.$close,g.$dismiss=d.$dismiss,angular.extend(g,{$resolve:j.$scope.$resolve},c)),g=i(),angular.isFunction(g.$onInit)&&g.$onInit()),h.open(p,{scope:d,deferred:l,renderDeferred:o,closedDeferred:n,content:a[0],animation:e.animation,backdrop:e.backdrop,keyboard:e.keyboard,backdropClass:e.backdropClass,windowTopClass:e.windowTopClass,windowClass:e.windowClass,windowTemplateUrl:e.windowTemplateUrl,size:e.size,openedClass:e.openedClass,appendTo:e.appendTo}),m.resolve(!0)},function(a){m.reject(a),l.reject(a)})["finally"](function(){k===q&&(k=null)}),p},j}]};return a}),angular.module("ui.bootstrap.paging",[]).factory("uibPaging",["$parse",function(a){return{create:function(b,c,d){b.setNumPages=d.numPages?a(d.numPages).assign:angular.noop,b.ngModelCtrl={$setViewValue:angular.noop},b._watchers=[],b.init=function(a,e){b.ngModelCtrl=a,b.config=e,a.$render=function(){b.render()},d.itemsPerPage?b._watchers.push(c.$parent.$watch(d.itemsPerPage,function(a){b.itemsPerPage=parseInt(a,10),c.totalPages=b.calculateTotalPages(),b.updatePage()})):b.itemsPerPage=e.itemsPerPage,c.$watch("totalItems",function(a,d){(angular.isDefined(a)||a!==d)&&(c.totalPages=b.calculateTotalPages(),b.updatePage())})},b.calculateTotalPages=function(){var a=b.itemsPerPage<1?1:Math.ceil(c.totalItems/b.itemsPerPage);return Math.max(a||0,1)},b.render=function(){c.page=parseInt(b.ngModelCtrl.$viewValue,10)||1},c.selectPage=function(a,d){d&&d.preventDefault();var e=!c.ngDisabled||!d;e&&c.page!==a&&a>0&&a<=c.totalPages&&(d&&d.target&&d.target.blur(),b.ngModelCtrl.$setViewValue(a),b.ngModelCtrl.$render())},c.getText=function(a){return c[a+"Text"]||b.config[a+"Text"]},c.noPrevious=function(){return 1===c.page},c.noNext=function(){return c.page===c.totalPages},b.updatePage=function(){b.setNumPages(c.$parent,c.totalPages),c.page>c.totalPages?c.selectPage(c.totalPages):b.ngModelCtrl.$render()},c.$on("$destroy",function(){for(;b._watchers.length;)b._watchers.shift()()})}}}]),angular.module("ui.bootstrap.pager",["ui.bootstrap.paging"]).controller("UibPagerController",["$scope","$attrs","uibPaging","uibPagerConfig",function(a,b,c,d){a.align=angular.isDefined(b.align)?a.$parent.$eval(b.align):d.align,c.create(this,a,b)}]).constant("uibPagerConfig",{itemsPerPage:10,previousText:"« Previous",nextText:"Next »",align:!0}).directive("uibPager",["uibPagerConfig",function(a){return{scope:{totalItems:"=",previousText:"@",nextText:"@",ngDisabled:"="},require:["uibPager","?ngModel"],controller:"UibPagerController",controllerAs:"pager",templateUrl:function(a,b){return b.templateUrl||"uib/template/pager/pager.html"},replace:!0,link:function(b,c,d,e){var f=e[0],g=e[1];g&&f.init(g,a)}}}]),angular.module("ui.bootstrap.pagination",["ui.bootstrap.paging"]).controller("UibPaginationController",["$scope","$attrs","$parse","uibPaging","uibPaginationConfig",function(a,b,c,d,e){function f(a,b,c){return{number:a,text:b,active:c}}function g(a,b){var c=[],d=1,e=b,g=angular.isDefined(i)&&b>i;g&&(j?(d=Math.max(a-Math.floor(i/2),1),e=d+i-1,e>b&&(e=b,d=e-i+1)):(d=(Math.ceil(a/i)-1)*i+1,e=Math.min(d+i-1,b)));for(var h=d;e>=h;h++){var n=f(h,m(h),h===a);c.push(n)}if(g&&i>0&&(!j||k||l)){if(d>1){if(!l||d>3){var o=f(d-1,"...",!1);c.unshift(o)}if(l){if(3===d){var p=f(2,"2",!1);c.unshift(p)}var q=f(1,"1",!1);c.unshift(q)}}if(b>e){if(!l||b-2>e){var r=f(e+1,"...",!1);c.push(r)}if(l){if(e===b-2){var s=f(b-1,b-1,!1);c.push(s)}var t=f(b,b,!1);c.push(t)}}}return c}var h=this,i=angular.isDefined(b.maxSize)?a.$parent.$eval(b.maxSize):e.maxSize,j=angular.isDefined(b.rotate)?a.$parent.$eval(b.rotate):e.rotate,k=angular.isDefined(b.forceEllipses)?a.$parent.$eval(b.forceEllipses):e.forceEllipses,l=angular.isDefined(b.boundaryLinkNumbers)?a.$parent.$eval(b.boundaryLinkNumbers):e.boundaryLinkNumbers,m=angular.isDefined(b.pageLabel)?function(c){return a.$parent.$eval(b.pageLabel,{$page:c})}:angular.identity;a.boundaryLinks=angular.isDefined(b.boundaryLinks)?a.$parent.$eval(b.boundaryLinks):e.boundaryLinks,a.directionLinks=angular.isDefined(b.directionLinks)?a.$parent.$eval(b.directionLinks):e.directionLinks,d.create(this,a,b),b.maxSize&&h._watchers.push(a.$parent.$watch(c(b.maxSize),function(a){i=parseInt(a,10),h.render()}));var n=this.render;this.render=function(){n(),a.page>0&&a.page<=a.totalPages&&(a.pages=g(a.page,a.totalPages))}}]).constant("uibPaginationConfig",{itemsPerPage:10,boundaryLinks:!1,boundaryLinkNumbers:!1,directionLinks:!0,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",rotate:!0,forceEllipses:!1}).directive("uibPagination",["$parse","uibPaginationConfig",function(a,b){return{scope:{totalItems:"=",firstText:"@",previousText:"@",nextText:"@",lastText:"@",ngDisabled:"="},require:["uibPagination","?ngModel"],controller:"UibPaginationController",controllerAs:"pagination",templateUrl:function(a,b){return b.templateUrl||"uib/template/pagination/pagination.html"},replace:!0,link:function(a,c,d,e){var f=e[0],g=e[1];g&&f.init(g,b)}}}]),angular.module("ui.bootstrap.tooltip",["ui.bootstrap.position","ui.bootstrap.stackedMap"]).provider("$uibTooltip",function(){function a(a){var b=/[A-Z]/g,c="-";return a.replace(b,function(a,b){return(b?c:"")+a.toLowerCase()})}var b={placement:"top",placementClassPrefix:"",animation:!0,popupDelay:0,popupCloseDelay:0,useContentExp:!1},c={mouseenter:"mouseleave",click:"click",outsideClick:"outsideClick",focus:"blur",none:""},d={};this.options=function(a){angular.extend(d,a)},this.setTriggers=function(a){angular.extend(c,a)},this.$get=["$window","$compile","$timeout","$document","$uibPosition","$interpolate","$rootScope","$parse","$$stackedMap",function(e,f,g,h,i,j,k,l,m){function n(a){if(27===a.which){var b=o.top();b&&(b.value.close(),o.removeTop(),b=null)}}var o=m.createNew();return h.on("keypress",n),k.$on("$destroy",function(){h.off("keypress",n)}),function(e,k,m,n){function p(a){var b=(a||n.trigger||m).split(" "),d=b.map(function(a){return c[a]||a});return{show:b,hide:d}}n=angular.extend({},b,d,n);var q=a(e),r=j.startSymbol(),s=j.endSymbol(),t="<div "+q+'-popup uib-title="'+r+"title"+s+'" '+(n.useContentExp?'content-exp="contentExp()" ':'content="'+r+"content"+s+'" ')+'placement="'+r+"placement"+s+'" popup-class="'+r+"popupClass"+s+'" animation="animation" is-open="isOpen" origin-scope="origScope" class="uib-position-measure"></div>';return{compile:function(a,b){var c=f(t);return function(a,b,d,f){function j(){N.isOpen?q():m()}function m(){M&&!a.$eval(d[k+"Enable"])||(u(),x(),N.popupDelay?G||(G=g(r,N.popupDelay,!1)):r())}function q(){s(),N.popupCloseDelay?H||(H=g(t,N.popupCloseDelay,!1)):t()}function r(){return s(),u(),N.content?(v(),void N.$evalAsync(function(){N.isOpen=!0,y(!0),S()})):angular.noop}function s(){G&&(g.cancel(G),G=null),I&&(g.cancel(I),I=null)}function t(){N&&N.$evalAsync(function(){N&&(N.isOpen=!1,y(!1),N.animation?F||(F=g(w,150,!1)):w())})}function u(){H&&(g.cancel(H),H=null),F&&(g.cancel(F),F=null)}function v(){D||(E=N.$new(),D=c(E,function(a){K?h.find("body").append(a):b.after(a)}),z())}function w(){s(),u(),A(),D&&(D.remove(),D=null),E&&(E.$destroy(),E=null);
}function x(){N.title=d[k+"Title"],Q?N.content=Q(a):N.content=d[e],N.popupClass=d[k+"Class"],N.placement=angular.isDefined(d[k+"Placement"])?d[k+"Placement"]:n.placement;var b=i.parsePlacement(N.placement);J=b[1]?b[0]+"-"+b[1]:b[0];var c=parseInt(d[k+"PopupDelay"],10),f=parseInt(d[k+"PopupCloseDelay"],10);N.popupDelay=isNaN(c)?n.popupDelay:c,N.popupCloseDelay=isNaN(f)?n.popupCloseDelay:f}function y(b){P&&angular.isFunction(P.assign)&&P.assign(a,b)}function z(){R.length=0,Q?(R.push(a.$watch(Q,function(a){N.content=a,!a&&N.isOpen&&t()})),R.push(E.$watch(function(){O||(O=!0,E.$$postDigest(function(){O=!1,N&&N.isOpen&&S()}))}))):R.push(d.$observe(e,function(a){N.content=a,!a&&N.isOpen?t():S()})),R.push(d.$observe(k+"Title",function(a){N.title=a,N.isOpen&&S()})),R.push(d.$observe(k+"Placement",function(a){N.placement=a?a:n.placement,N.isOpen&&S()}))}function A(){R.length&&(angular.forEach(R,function(a){a()}),R.length=0)}function B(a){N&&N.isOpen&&D&&(b[0].contains(a.target)||D[0].contains(a.target)||q())}function C(){var a=d[k+"Trigger"];T(),L=p(a),"none"!==L.show&&L.show.forEach(function(a,c){"outsideClick"===a?(b.on("click",j),h.on("click",B)):a===L.hide[c]?b.on(a,j):a&&(b.on(a,m),b.on(L.hide[c],q)),b.on("keypress",function(a){27===a.which&&q()})})}var D,E,F,G,H,I,J,K=angular.isDefined(n.appendToBody)?n.appendToBody:!1,L=p(void 0),M=angular.isDefined(d[k+"Enable"]),N=a.$new(!0),O=!1,P=angular.isDefined(d[k+"IsOpen"])?l(d[k+"IsOpen"]):!1,Q=n.useContentExp?l(d[e]):!1,R=[],S=function(){D&&D.html()&&(I||(I=g(function(){var a=i.positionElements(b,D,N.placement,K);D.css({top:a.top+"px",left:a.left+"px"}),D.hasClass(a.placement.split("-")[0])||(D.removeClass(J.split("-")[0]),D.addClass(a.placement.split("-")[0])),D.hasClass(n.placementClassPrefix+a.placement)||(D.removeClass(n.placementClassPrefix+J),D.addClass(n.placementClassPrefix+a.placement)),D.hasClass("uib-position-measure")?(i.positionArrow(D,a.placement),D.removeClass("uib-position-measure")):J!==a.placement&&i.positionArrow(D,a.placement),J=a.placement,I=null},0,!1)))};N.origScope=a,N.isOpen=!1,o.add(N,{close:t}),N.contentExp=function(){return N.content},d.$observe("disabled",function(a){a&&s(),a&&N.isOpen&&t()}),P&&a.$watch(P,function(a){N&&!a===N.isOpen&&j()});var T=function(){L.show.forEach(function(a){"outsideClick"===a?b.off("click",j):(b.off(a,m),b.off(a,j))}),L.hide.forEach(function(a){"outsideClick"===a?h.off("click",B):b.off(a,q)})};C();var U=a.$eval(d[k+"Animation"]);N.animation=angular.isDefined(U)?!!U:n.animation;var V,W=k+"AppendToBody";V=W in d&&void 0===d[W]?!0:a.$eval(d[W]),K=angular.isDefined(V)?V:K,a.$on("$destroy",function(){T(),w(),o.remove(N),N=null})}}}}}]}).directive("uibTooltipTemplateTransclude",["$animate","$sce","$compile","$templateRequest",function(a,b,c,d){return{link:function(e,f,g){var h,i,j,k=e.$eval(g.tooltipTemplateTranscludeScope),l=0,m=function(){i&&(i.remove(),i=null),h&&(h.$destroy(),h=null),j&&(a.leave(j).then(function(){i=null}),i=j,j=null)};e.$watch(b.parseAsResourceUrl(g.uibTooltipTemplateTransclude),function(b){var g=++l;b?(d(b,!0).then(function(d){if(g===l){var e=k.$new(),i=d,n=c(i)(e,function(b){m(),a.enter(b,f)});h=e,j=n,h.$emit("$includeContentLoaded",b)}},function(){g===l&&(m(),e.$emit("$includeContentError",b))}),e.$emit("$includeContentRequested",b)):m()}),e.$on("$destroy",m)}}}]).directive("uibTooltipClasses",["$uibPosition",function(a){return{restrict:"A",link:function(b,c,d){if(b.placement){var e=a.parsePlacement(b.placement);c.addClass(e[0])}b.popupClass&&c.addClass(b.popupClass),b.animation()&&c.addClass(d.tooltipAnimationClass)}}}]).directive("uibTooltipPopup",function(){return{replace:!0,scope:{content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"uib/template/tooltip/tooltip-popup.html"}}).directive("uibTooltip",["$uibTooltip",function(a){return a("uibTooltip","tooltip","mouseenter")}]).directive("uibTooltipTemplatePopup",function(){return{replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"uib/template/tooltip/tooltip-template-popup.html"}}).directive("uibTooltipTemplate",["$uibTooltip",function(a){return a("uibTooltipTemplate","tooltip","mouseenter",{useContentExp:!0})}]).directive("uibTooltipHtmlPopup",function(){return{replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"uib/template/tooltip/tooltip-html-popup.html"}}).directive("uibTooltipHtml",["$uibTooltip",function(a){return a("uibTooltipHtml","tooltip","mouseenter",{useContentExp:!0})}]),angular.module("ui.bootstrap.popover",["ui.bootstrap.tooltip"]).directive("uibPopoverTemplatePopup",function(){return{replace:!0,scope:{uibTitle:"@",contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"uib/template/popover/popover-template.html"}}).directive("uibPopoverTemplate",["$uibTooltip",function(a){return a("uibPopoverTemplate","popover","click",{useContentExp:!0})}]).directive("uibPopoverHtmlPopup",function(){return{replace:!0,scope:{contentExp:"&",uibTitle:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"uib/template/popover/popover-html.html"}}).directive("uibPopoverHtml",["$uibTooltip",function(a){return a("uibPopoverHtml","popover","click",{useContentExp:!0})}]).directive("uibPopoverPopup",function(){return{replace:!0,scope:{uibTitle:"@",content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"uib/template/popover/popover.html"}}).directive("uibPopover",["$uibTooltip",function(a){return a("uibPopover","popover","click")}]),angular.module("ui.bootstrap.progressbar",[]).constant("uibProgressConfig",{animate:!0,max:100}).controller("UibProgressController",["$scope","$attrs","uibProgressConfig",function(a,b,c){function d(){return angular.isDefined(a.maxParam)?a.maxParam:c.max}var e=this,f=angular.isDefined(b.animate)?a.$parent.$eval(b.animate):c.animate;this.bars=[],a.max=d(),this.addBar=function(a,b,c){f||b.css({transition:"none"}),this.bars.push(a),a.max=d(),a.title=c&&angular.isDefined(c.title)?c.title:"progressbar",a.$watch("value",function(b){a.recalculatePercentage()}),a.recalculatePercentage=function(){var b=e.bars.reduce(function(a,b){return b.percent=+(100*b.value/b.max).toFixed(2),a+b.percent},0);b>100&&(a.percent-=b-100)},a.$on("$destroy",function(){b=null,e.removeBar(a)})},this.removeBar=function(a){this.bars.splice(this.bars.indexOf(a),1),this.bars.forEach(function(a){a.recalculatePercentage()})},a.$watch("maxParam",function(a){e.bars.forEach(function(a){a.max=d(),a.recalculatePercentage()})})}]).directive("uibProgress",function(){return{replace:!0,transclude:!0,controller:"UibProgressController",require:"uibProgress",scope:{maxParam:"=?max"},templateUrl:"uib/template/progressbar/progress.html"}}).directive("uibBar",function(){return{replace:!0,transclude:!0,require:"^uibProgress",scope:{value:"=",type:"@"},templateUrl:"uib/template/progressbar/bar.html",link:function(a,b,c,d){d.addBar(a,b,c)}}}).directive("uibProgressbar",function(){return{replace:!0,transclude:!0,controller:"UibProgressController",scope:{value:"=",maxParam:"=?max",type:"@"},templateUrl:"uib/template/progressbar/progressbar.html",link:function(a,b,c,d){d.addBar(a,angular.element(b.children()[0]),{title:c.title})}}}),angular.module("ui.bootstrap.rating",[]).constant("uibRatingConfig",{max:5,stateOn:null,stateOff:null,enableReset:!0,titles:["one","two","three","four","five"]}).controller("UibRatingController",["$scope","$attrs","uibRatingConfig",function(a,b,c){var d={$setViewValue:angular.noop},e=this;this.init=function(e){d=e,d.$render=this.render,d.$formatters.push(function(a){return angular.isNumber(a)&&a<<0!==a&&(a=Math.round(a)),a}),this.stateOn=angular.isDefined(b.stateOn)?a.$parent.$eval(b.stateOn):c.stateOn,this.stateOff=angular.isDefined(b.stateOff)?a.$parent.$eval(b.stateOff):c.stateOff,this.enableReset=angular.isDefined(b.enableReset)?a.$parent.$eval(b.enableReset):c.enableReset;var f=angular.isDefined(b.titles)?a.$parent.$eval(b.titles):c.titles;this.titles=angular.isArray(f)&&f.length>0?f:c.titles;var g=angular.isDefined(b.ratingStates)?a.$parent.$eval(b.ratingStates):new Array(angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max);a.range=this.buildTemplateObjects(g)},this.buildTemplateObjects=function(a){for(var b=0,c=a.length;c>b;b++)a[b]=angular.extend({index:b},{stateOn:this.stateOn,stateOff:this.stateOff,title:this.getTitle(b)},a[b]);return a},this.getTitle=function(a){return a>=this.titles.length?a+1:this.titles[a]},a.rate=function(b){if(!a.readonly&&b>=0&&b<=a.range.length){var c=e.enableReset&&d.$viewValue===b?0:b;d.$setViewValue(c),d.$render()}},a.enter=function(b){a.readonly||(a.value=b),a.onHover({value:b})},a.reset=function(){a.value=d.$viewValue,a.onLeave()},a.onKeydown=function(b){/(37|38|39|40)/.test(b.which)&&(b.preventDefault(),b.stopPropagation(),a.rate(a.value+(38===b.which||39===b.which?1:-1)))},this.render=function(){a.value=d.$viewValue,a.title=e.getTitle(a.value-1)}}]).directive("uibRating",function(){return{require:["uibRating","ngModel"],scope:{readonly:"=?readOnly",onHover:"&",onLeave:"&"},controller:"UibRatingController",templateUrl:"uib/template/rating/rating.html",replace:!0,link:function(a,b,c,d){var e=d[0],f=d[1];e.init(f)}}}),angular.module("ui.bootstrap.tabs",[]).controller("UibTabsetController",["$scope",function(a){function b(a){for(var b=0;b<d.tabs.length;b++)if(d.tabs[b].index===a)return b}var c,d=this;d.tabs=[],d.select=function(a,f){if(!e){var g=b(c),h=d.tabs[g];if(h){if(h.tab.onDeselect({$event:f,$selectedIndex:a}),f&&f.isDefaultPrevented())return;h.tab.active=!1}var i=d.tabs[a];i?(i.tab.onSelect({$event:f}),i.tab.active=!0,d.active=i.index,c=i.index):!i&&angular.isDefined(c)&&(d.active=null,c=null)}},d.addTab=function(a){if(d.tabs.push({tab:a,index:a.index}),d.tabs.sort(function(a,b){return a.index>b.index?1:a.index<b.index?-1:0}),a.index===d.active||!angular.isDefined(d.active)&&1===d.tabs.length){var c=b(a.index);d.select(c)}},d.removeTab=function(a){for(var b,c=0;c<d.tabs.length;c++)if(d.tabs[c].tab===a){b=c;break}if(d.tabs[b].index===d.active){var e=b===d.tabs.length-1?b-1:b+1%d.tabs.length;d.select(e)}d.tabs.splice(b,1)},a.$watch("tabset.active",function(a){angular.isDefined(a)&&a!==c&&d.select(b(a))});var e;a.$on("$destroy",function(){e=!0})}]).directive("uibTabset",function(){return{transclude:!0,replace:!0,scope:{},bindToController:{active:"=?",type:"@"},controller:"UibTabsetController",controllerAs:"tabset",templateUrl:function(a,b){return b.templateUrl||"uib/template/tabs/tabset.html"},link:function(a,b,c){a.vertical=angular.isDefined(c.vertical)?a.$parent.$eval(c.vertical):!1,a.justified=angular.isDefined(c.justified)?a.$parent.$eval(c.justified):!1}}}).directive("uibTab",["$parse",function(a){return{require:"^uibTabset",replace:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/tabs/tab.html"},transclude:!0,scope:{heading:"@",index:"=?",classes:"@?",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},controllerAs:"tab",link:function(b,c,d,e,f){b.disabled=!1,d.disable&&b.$parent.$watch(a(d.disable),function(a){b.disabled=!!a}),angular.isUndefined(d.index)&&(e.tabs&&e.tabs.length?b.index=Math.max.apply(null,e.tabs.map(function(a){return a.index}))+1:b.index=0),angular.isUndefined(d.classes)&&(b.classes=""),b.select=function(a){if(!b.disabled){for(var c,d=0;d<e.tabs.length;d++)if(e.tabs[d].tab===b){c=d;break}e.select(c,a)}},e.addTab(b),b.$on("$destroy",function(){e.removeTab(b)}),b.$transcludeFn=f}}}]).directive("uibTabHeadingTransclude",function(){return{restrict:"A",require:"^uibTab",link:function(a,b){a.$watch("headingElement",function(a){a&&(b.html(""),b.append(a))})}}}).directive("uibTabContentTransclude",function(){function a(a){return a.tagName&&(a.hasAttribute("uib-tab-heading")||a.hasAttribute("data-uib-tab-heading")||a.hasAttribute("x-uib-tab-heading")||"uib-tab-heading"===a.tagName.toLowerCase()||"data-uib-tab-heading"===a.tagName.toLowerCase()||"x-uib-tab-heading"===a.tagName.toLowerCase()||"uib:tab-heading"===a.tagName.toLowerCase())}return{restrict:"A",require:"^uibTabset",link:function(b,c,d){var e=b.$eval(d.uibTabContentTransclude).tab;e.$transcludeFn(e.$parent,function(b){angular.forEach(b,function(b){a(b)?e.headingElement=b:c.append(b)})})}}}),angular.module("ui.bootstrap.timepicker",[]).constant("uibTimepickerConfig",{hourStep:1,minuteStep:1,secondStep:1,showMeridian:!0,showSeconds:!1,meridians:null,readonlyInput:!1,mousewheel:!0,arrowkeys:!0,showSpinners:!0,templateUrl:"uib/template/timepicker/timepicker.html"}).controller("UibTimepickerController",["$scope","$element","$attrs","$parse","$log","$locale","uibTimepickerConfig",function(a,b,c,d,e,f,g){function h(){var b=+a.hours,c=a.showMeridian?b>0&&13>b:b>=0&&24>b;return c&&""!==a.hours?(a.showMeridian&&(12===b&&(b=0),a.meridian===v[1]&&(b+=12)),b):void 0}function i(){var b=+a.minutes,c=b>=0&&60>b;return c&&""!==a.minutes?b:void 0}function j(){var b=+a.seconds;return b>=0&&60>b?b:void 0}function k(a,b){return null===a?"":angular.isDefined(a)&&a.toString().length<2&&!b?"0"+a:a.toString()}function l(a){m(),u.$setViewValue(new Date(s)),n(a)}function m(){u.$setValidity("time",!0),a.invalidHours=!1,a.invalidMinutes=!1,a.invalidSeconds=!1}function n(b){if(u.$modelValue){var c=s.getHours(),d=s.getMinutes(),e=s.getSeconds();a.showMeridian&&(c=0===c||12===c?12:c%12),a.hours="h"===b?c:k(c,!w),"m"!==b&&(a.minutes=k(d)),a.meridian=s.getHours()<12?v[0]:v[1],"s"!==b&&(a.seconds=k(e)),a.meridian=s.getHours()<12?v[0]:v[1]}else a.hours=null,a.minutes=null,a.seconds=null,a.meridian=v[0]}function o(a){s=q(s,a),l()}function p(a,b){return q(a,60*b)}function q(a,b){var c=new Date(a.getTime()+1e3*b),d=new Date(a);return d.setHours(c.getHours(),c.getMinutes(),c.getSeconds()),d}function r(){return(null===a.hours||""===a.hours)&&(null===a.minutes||""===a.minutes)&&(!a.showSeconds||a.showSeconds&&(null===a.seconds||""===a.seconds))}var s=new Date,t=[],u={$setViewValue:angular.noop},v=angular.isDefined(c.meridians)?a.$parent.$eval(c.meridians):g.meridians||f.DATETIME_FORMATS.AMPMS,w=angular.isDefined(c.padHours)?a.$parent.$eval(c.padHours):!0;a.tabindex=angular.isDefined(c.tabindex)?c.tabindex:0,b.removeAttr("tabindex"),this.init=function(b,d){u=b,u.$render=this.render,u.$formatters.unshift(function(a){return a?new Date(a):null});var e=d.eq(0),f=d.eq(1),h=d.eq(2),i=angular.isDefined(c.mousewheel)?a.$parent.$eval(c.mousewheel):g.mousewheel;i&&this.setupMousewheelEvents(e,f,h);var j=angular.isDefined(c.arrowkeys)?a.$parent.$eval(c.arrowkeys):g.arrowkeys;j&&this.setupArrowkeyEvents(e,f,h),a.readonlyInput=angular.isDefined(c.readonlyInput)?a.$parent.$eval(c.readonlyInput):g.readonlyInput,this.setupInputEvents(e,f,h)};var x=g.hourStep;c.hourStep&&t.push(a.$parent.$watch(d(c.hourStep),function(a){x=+a}));var y=g.minuteStep;c.minuteStep&&t.push(a.$parent.$watch(d(c.minuteStep),function(a){y=+a}));var z;t.push(a.$parent.$watch(d(c.min),function(a){var b=new Date(a);z=isNaN(b)?void 0:b}));var A;t.push(a.$parent.$watch(d(c.max),function(a){var b=new Date(a);A=isNaN(b)?void 0:b}));var B=!1;c.ngDisabled&&t.push(a.$parent.$watch(d(c.ngDisabled),function(a){B=a})),a.noIncrementHours=function(){var a=p(s,60*x);return B||a>A||s>a&&z>a},a.noDecrementHours=function(){var a=p(s,60*-x);return B||z>a||a>s&&a>A},a.noIncrementMinutes=function(){var a=p(s,y);return B||a>A||s>a&&z>a},a.noDecrementMinutes=function(){var a=p(s,-y);return B||z>a||a>s&&a>A},a.noIncrementSeconds=function(){var a=q(s,C);return B||a>A||s>a&&z>a},a.noDecrementSeconds=function(){var a=q(s,-C);return B||z>a||a>s&&a>A},a.noToggleMeridian=function(){return s.getHours()<12?B||p(s,720)>A:B||p(s,-720)<z};var C=g.secondStep;c.secondStep&&t.push(a.$parent.$watch(d(c.secondStep),function(a){C=+a})),a.showSeconds=g.showSeconds,c.showSeconds&&t.push(a.$parent.$watch(d(c.showSeconds),function(b){a.showSeconds=!!b})),a.showMeridian=g.showMeridian,c.showMeridian&&t.push(a.$parent.$watch(d(c.showMeridian),function(b){if(a.showMeridian=!!b,u.$error.time){var c=h(),d=i();angular.isDefined(c)&&angular.isDefined(d)&&(s.setHours(c),l())}else n()})),this.setupMousewheelEvents=function(b,c,d){var e=function(a){a.originalEvent&&(a=a.originalEvent);var b=a.wheelDelta?a.wheelDelta:-a.deltaY;return a.detail||b>0};b.bind("mousewheel wheel",function(b){B||a.$apply(e(b)?a.incrementHours():a.decrementHours()),b.preventDefault()}),c.bind("mousewheel wheel",function(b){B||a.$apply(e(b)?a.incrementMinutes():a.decrementMinutes()),b.preventDefault()}),d.bind("mousewheel wheel",function(b){B||a.$apply(e(b)?a.incrementSeconds():a.decrementSeconds()),b.preventDefault()})},this.setupArrowkeyEvents=function(b,c,d){b.bind("keydown",function(b){B||(38===b.which?(b.preventDefault(),a.incrementHours(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementHours(),a.$apply()))}),c.bind("keydown",function(b){B||(38===b.which?(b.preventDefault(),a.incrementMinutes(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementMinutes(),a.$apply()))}),d.bind("keydown",function(b){B||(38===b.which?(b.preventDefault(),a.incrementSeconds(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementSeconds(),a.$apply()))})},this.setupInputEvents=function(b,c,d){if(a.readonlyInput)return a.updateHours=angular.noop,a.updateMinutes=angular.noop,void(a.updateSeconds=angular.noop);var e=function(b,c,d){u.$setViewValue(null),u.$setValidity("time",!1),angular.isDefined(b)&&(a.invalidHours=b),angular.isDefined(c)&&(a.invalidMinutes=c),angular.isDefined(d)&&(a.invalidSeconds=d)};a.updateHours=function(){var a=h(),b=i();u.$setDirty(),angular.isDefined(a)&&angular.isDefined(b)?(s.setHours(a),s.setMinutes(b),z>s||s>A?e(!0):l("h")):e(!0)},b.bind("blur",function(b){u.$setTouched(),r()?m():null===a.hours||""===a.hours?e(!0):!a.invalidHours&&a.hours<10&&a.$apply(function(){a.hours=k(a.hours,!w)})}),a.updateMinutes=function(){var a=i(),b=h();u.$setDirty(),angular.isDefined(a)&&angular.isDefined(b)?(s.setHours(b),s.setMinutes(a),z>s||s>A?e(void 0,!0):l("m")):e(void 0,!0)},c.bind("blur",function(b){u.$setTouched(),r()?m():null===a.minutes?e(void 0,!0):!a.invalidMinutes&&a.minutes<10&&a.$apply(function(){a.minutes=k(a.minutes)})}),a.updateSeconds=function(){var a=j();u.$setDirty(),angular.isDefined(a)?(s.setSeconds(a),l("s")):e(void 0,void 0,!0)},d.bind("blur",function(b){r()?m():!a.invalidSeconds&&a.seconds<10&&a.$apply(function(){a.seconds=k(a.seconds)})})},this.render=function(){var b=u.$viewValue;isNaN(b)?(u.$setValidity("time",!1),e.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):(b&&(s=b),z>s||s>A?(u.$setValidity("time",!1),a.invalidHours=!0,a.invalidMinutes=!0):m(),n())},a.showSpinners=angular.isDefined(c.showSpinners)?a.$parent.$eval(c.showSpinners):g.showSpinners,a.incrementHours=function(){a.noIncrementHours()||o(60*x*60)},a.decrementHours=function(){a.noDecrementHours()||o(60*-x*60)},a.incrementMinutes=function(){a.noIncrementMinutes()||o(60*y)},a.decrementMinutes=function(){a.noDecrementMinutes()||o(60*-y)},a.incrementSeconds=function(){a.noIncrementSeconds()||o(C)},a.decrementSeconds=function(){a.noDecrementSeconds()||o(-C)},a.toggleMeridian=function(){var b=i(),c=h();a.noToggleMeridian()||(angular.isDefined(b)&&angular.isDefined(c)?o(720*(s.getHours()<12?60:-60)):a.meridian=a.meridian===v[0]?v[1]:v[0])},a.blur=function(){u.$setTouched()},a.$on("$destroy",function(){for(;t.length;)t.shift()()})}]).directive("uibTimepicker",["uibTimepickerConfig",function(a){return{require:["uibTimepicker","?^ngModel"],controller:"UibTimepickerController",controllerAs:"timepicker",replace:!0,scope:{},templateUrl:function(b,c){return c.templateUrl||a.templateUrl},link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f,b.find("input"))}}}]),angular.module("ui.bootstrap.typeahead",["ui.bootstrap.debounce","ui.bootstrap.position"]).factory("uibTypeaheadParser",["$parse",function(a){var b=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;return{parse:function(c){var d=c.match(b);if(!d)throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "'+c+'".');return{itemName:d[3],source:a(d[4]),viewMapper:a(d[2]||d[1]),modelMapper:a(d[1])}}}}]).controller("UibTypeaheadController",["$scope","$element","$attrs","$compile","$parse","$q","$timeout","$document","$window","$rootScope","$$debounce","$uibPosition","uibTypeaheadParser",function(a,b,c,d,e,f,g,h,i,j,k,l,m){function n(){O.moveInProgress||(O.moveInProgress=!0,O.$digest()),Z()}function o(){O.position=E?l.offset(b):l.position(b),O.position.top+=b.prop("offsetHeight")}var p,q,r=[9,13,27,38,40],s=200,t=a.$eval(c.typeaheadMinLength);t||0===t||(t=1),a.$watch(c.typeaheadMinLength,function(a){t=a||0===a?a:1});var u=a.$eval(c.typeaheadWaitMs)||0,v=a.$eval(c.typeaheadEditable)!==!1;a.$watch(c.typeaheadEditable,function(a){v=a!==!1});var w,x,y=e(c.typeaheadLoading).assign||angular.noop,z=c.typeaheadShouldSelect?e(c.typeaheadShouldSelect):function(a,b){var c=b.$event;return 13===c.which||9===c.which},A=e(c.typeaheadOnSelect),B=angular.isDefined(c.typeaheadSelectOnBlur)?a.$eval(c.typeaheadSelectOnBlur):!1,C=e(c.typeaheadNoResults).assign||angular.noop,D=c.typeaheadInputFormatter?e(c.typeaheadInputFormatter):void 0,E=c.typeaheadAppendToBody?a.$eval(c.typeaheadAppendToBody):!1,F=c.typeaheadAppendTo?a.$eval(c.typeaheadAppendTo):null,G=a.$eval(c.typeaheadFocusFirst)!==!1,H=c.typeaheadSelectOnExact?a.$eval(c.typeaheadSelectOnExact):!1,I=e(c.typeaheadIsOpen).assign||angular.noop,J=a.$eval(c.typeaheadShowHint)||!1,K=e(c.ngModel),L=e(c.ngModel+"($$$p)"),M=function(b,c){return angular.isFunction(K(a))&&q&&q.$options&&q.$options.getterSetter?L(b,{$$$p:c}):K.assign(b,c)},N=m.parse(c.uibTypeahead),O=a.$new(),P=a.$on("$destroy",function(){O.$destroy()});O.$on("$destroy",P);var Q="typeahead-"+O.$id+"-"+Math.floor(1e4*Math.random());b.attr({"aria-autocomplete":"list","aria-expanded":!1,"aria-owns":Q});var R,S;J&&(R=angular.element("<div></div>"),R.css("position","relative"),b.after(R),S=b.clone(),S.attr("placeholder",""),S.attr("tabindex","-1"),S.val(""),S.css({position:"absolute",top:"0px",left:"0px","border-color":"transparent","box-shadow":"none",opacity:1,background:"none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255)",color:"#999"}),b.css({position:"relative","vertical-align":"top","background-color":"transparent"}),R.append(S),S.after(b));var T=angular.element("<div uib-typeahead-popup></div>");T.attr({id:Q,matches:"matches",active:"activeIdx",select:"select(activeIdx, evt)","move-in-progress":"moveInProgress",query:"query",position:"position","assign-is-open":"assignIsOpen(isOpen)",debounce:"debounceUpdate"}),angular.isDefined(c.typeaheadTemplateUrl)&&T.attr("template-url",c.typeaheadTemplateUrl),angular.isDefined(c.typeaheadPopupTemplateUrl)&&T.attr("popup-template-url",c.typeaheadPopupTemplateUrl);var U=function(){J&&S.val("")},V=function(){O.matches=[],O.activeIdx=-1,b.attr("aria-expanded",!1),U()},W=function(a){return Q+"-option-"+a};O.$watch("activeIdx",function(a){0>a?b.removeAttr("aria-activedescendant"):b.attr("aria-activedescendant",W(a))});var X=function(a,b){return O.matches.length>b&&a?a.toUpperCase()===O.matches[b].label.toUpperCase():!1},Y=function(c,d){var e={$viewValue:c};y(a,!0),C(a,!1),f.when(N.source(a,e)).then(function(f){var g=c===p.$viewValue;if(g&&w)if(f&&f.length>0){O.activeIdx=G?0:-1,C(a,!1),O.matches.length=0;for(var h=0;h<f.length;h++)e[N.itemName]=f[h],O.matches.push({id:W(h),label:N.viewMapper(O,e),model:f[h]});if(O.query=c,o(),b.attr("aria-expanded",!0),H&&1===O.matches.length&&X(c,0)&&(angular.isNumber(O.debounceUpdate)||angular.isObject(O.debounceUpdate)?k(function(){O.select(0,d)},angular.isNumber(O.debounceUpdate)?O.debounceUpdate:O.debounceUpdate["default"]):O.select(0,d)),J){var i=O.matches[0].label;angular.isString(c)&&c.length>0&&i.slice(0,c.length).toUpperCase()===c.toUpperCase()?S.val(c+i.slice(c.length)):S.val("")}}else V(),C(a,!0);g&&y(a,!1)},function(){V(),y(a,!1),C(a,!0)})};E&&(angular.element(i).on("resize",n),h.find("body").on("scroll",n));var Z=k(function(){O.matches.length&&o(),O.moveInProgress=!1},s);O.moveInProgress=!1,O.query=void 0;var $,_=function(a){$=g(function(){Y(a)},u)},aa=function(){$&&g.cancel($)};V(),O.assignIsOpen=function(b){I(a,b)},O.select=function(d,e){var f,h,i={};x=!0,i[N.itemName]=h=O.matches[d].model,f=N.modelMapper(a,i),M(a,f),p.$setValidity("editable",!0),p.$setValidity("parse",!0),A(a,{$item:h,$model:f,$label:N.viewMapper(a,i),$event:e}),V(),O.$eval(c.typeaheadFocusOnSelect)!==!1&&g(function(){b[0].focus()},0,!1)},b.on("keydown",function(b){if(0!==O.matches.length&&-1!==r.indexOf(b.which)){var c=z(a,{$event:b});if(-1===O.activeIdx&&c||9===b.which&&b.shiftKey)return V(),void O.$digest();b.preventDefault();var d;switch(b.which){case 27:b.stopPropagation(),V(),a.$digest();break;case 38:O.activeIdx=(O.activeIdx>0?O.activeIdx:O.matches.length)-1,O.$digest(),d=T.find("li")[O.activeIdx],d.parentNode.scrollTop=d.offsetTop;break;case 40:O.activeIdx=(O.activeIdx+1)%O.matches.length,O.$digest(),d=T.find("li")[O.activeIdx],d.parentNode.scrollTop=d.offsetTop;break;default:c&&O.$apply(function(){angular.isNumber(O.debounceUpdate)||angular.isObject(O.debounceUpdate)?k(function(){O.select(O.activeIdx,b)},angular.isNumber(O.debounceUpdate)?O.debounceUpdate:O.debounceUpdate["default"]):O.select(O.activeIdx,b)})}}}),b.bind("focus",function(a){w=!0,0!==t||p.$viewValue||g(function(){Y(p.$viewValue,a)},0)}),b.bind("blur",function(a){B&&O.matches.length&&-1!==O.activeIdx&&!x&&(x=!0,O.$apply(function(){angular.isObject(O.debounceUpdate)&&angular.isNumber(O.debounceUpdate.blur)?k(function(){O.select(O.activeIdx,a)},O.debounceUpdate.blur):O.select(O.activeIdx,a)})),!v&&p.$error.editable&&(p.$setViewValue(),p.$setValidity("editable",!0),p.$setValidity("parse",!0),b.val("")),w=!1,x=!1});var ba=function(c){b[0]!==c.target&&3!==c.which&&0!==O.matches.length&&(V(),j.$$phase||a.$digest())};h.on("click",ba),a.$on("$destroy",function(){h.off("click",ba),(E||F)&&ca.remove(),E&&(angular.element(i).off("resize",n),h.find("body").off("scroll",n)),T.remove(),J&&R.remove()});var ca=d(T)(O);E?h.find("body").append(ca):F?angular.element(F).eq(0).append(ca):b.after(ca),this.init=function(b,c){p=b,q=c,O.debounceUpdate=p.$options&&e(p.$options.debounce)(a),p.$parsers.unshift(function(b){return w=!0,0===t||b&&b.length>=t?u>0?(aa(),_(b)):Y(b):(y(a,!1),aa(),V()),v?b:b?void p.$setValidity("editable",!1):(p.$setValidity("editable",!0),null)}),p.$formatters.push(function(b){var c,d,e={};return v||p.$setValidity("editable",!0),D?(e.$model=b,D(a,e)):(e[N.itemName]=b,c=N.viewMapper(a,e),e[N.itemName]=void 0,d=N.viewMapper(a,e),c!==d?c:b)})}}]).directive("uibTypeahead",function(){return{controller:"UibTypeaheadController",require:["ngModel","^?ngModelOptions","uibTypeahead"],link:function(a,b,c,d){d[2].init(d[0],d[1])}}}).directive("uibTypeaheadPopup",["$$debounce",function(a){return{scope:{matches:"=",query:"=",active:"=",position:"&",moveInProgress:"=",select:"&",assignIsOpen:"&",debounce:"&"},replace:!0,templateUrl:function(a,b){return b.popupTemplateUrl||"uib/template/typeahead/typeahead-popup.html"},link:function(b,c,d){b.templateUrl=d.templateUrl,b.isOpen=function(){var a=b.matches.length>0;return b.assignIsOpen({isOpen:a}),a},b.isActive=function(a){return b.active===a},b.selectActive=function(a){b.active=a},b.selectMatch=function(c,d){var e=b.debounce();angular.isNumber(e)||angular.isObject(e)?a(function(){b.select({activeIdx:c,evt:d})},angular.isNumber(e)?e:e["default"]):b.select({activeIdx:c,evt:d})}}}}]).directive("uibTypeaheadMatch",["$templateRequest","$compile","$parse",function(a,b,c){return{scope:{index:"=",match:"=",query:"="},link:function(d,e,f){var g=c(f.templateUrl)(d.$parent)||"uib/template/typeahead/typeahead-match.html";a(g).then(function(a){var c=angular.element(a.trim());e.replaceWith(c),b(c)(d)})}}}]).filter("uibTypeaheadHighlight",["$sce","$injector","$log",function(a,b,c){function d(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}function e(a){return/<.*>/g.test(a)}var f;return f=b.has("$sanitize"),function(b,g){return!f&&e(b)&&c.warn("Unsafe use of typeahead please use ngSanitize"),b=g?(""+b).replace(new RegExp(d(g),"gi"),"<strong>$&</strong>"):b,f||(b=a.trustAsHtml(b)),b}}]),angular.module("ui.bootstrap.carousel").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibCarouselCss&&angular.element(document).find("head").prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>'),angular.$$uibCarouselCss=!0}),angular.module("ui.bootstrap.datepicker").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibDatepickerCss&&angular.element(document).find("head").prepend('<style type="text/css">.uib-datepicker .uib-title{width:100%;}.uib-day button,.uib-month button,.uib-year button{min-width:100%;}.uib-left,.uib-right{width:100%}</style>'),angular.$$uibDatepickerCss=!0}),angular.module("ui.bootstrap.position").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibPositionCss&&angular.element(document).find("head").prepend('<style type="text/css">.uib-position-measure{display:block !important;visibility:hidden !important;position:absolute !important;top:-9999px !important;left:-9999px !important;}.uib-position-scrollbar-measure{position:absolute !important;top:-9999px !important;width:50px !important;height:50px !important;overflow:scroll !important;}.uib-position-body-scrollbar-measure{overflow:scroll !important;}</style>'),angular.$$uibPositionCss=!0}),angular.module("ui.bootstrap.datepickerPopup").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibDatepickerpopupCss&&angular.element(document).find("head").prepend('<style type="text/css">.uib-datepicker-popup.dropdown-menu{display:block;float:none;margin:0;}.uib-button-bar{padding:10px 9px 2px;}</style>'),angular.$$uibDatepickerpopupCss=!0}),angular.module("ui.bootstrap.tooltip").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibTooltipCss&&angular.element(document).find("head").prepend('<style type="text/css">[uib-tooltip-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-bottom > .tooltip-arrow,[uib-popover-popup].popover.top-left > .arrow,[uib-popover-popup].popover.top-right > .arrow,[uib-popover-popup].popover.bottom-left > .arrow,[uib-popover-popup].popover.bottom-right > .arrow,[uib-popover-popup].popover.left-top > .arrow,[uib-popover-popup].popover.left-bottom > .arrow,[uib-popover-popup].popover.right-top > .arrow,[uib-popover-popup].popover.right-bottom > .arrow,[uib-popover-html-popup].popover.top-left > .arrow,[uib-popover-html-popup].popover.top-right > .arrow,[uib-popover-html-popup].popover.bottom-left > .arrow,[uib-popover-html-popup].popover.bottom-right > .arrow,[uib-popover-html-popup].popover.left-top > .arrow,[uib-popover-html-popup].popover.left-bottom > .arrow,[uib-popover-html-popup].popover.right-top > .arrow,[uib-popover-html-popup].popover.right-bottom > .arrow,[uib-popover-template-popup].popover.top-left > .arrow,[uib-popover-template-popup].popover.top-right > .arrow,[uib-popover-template-popup].popover.bottom-left > .arrow,[uib-popover-template-popup].popover.bottom-right > .arrow,[uib-popover-template-popup].popover.left-top > .arrow,[uib-popover-template-popup].popover.left-bottom > .arrow,[uib-popover-template-popup].popover.right-top > .arrow,[uib-popover-template-popup].popover.right-bottom > .arrow{top:auto;bottom:auto;left:auto;right:auto;margin:0;}[uib-popover-popup].popover,[uib-popover-html-popup].popover,[uib-popover-template-popup].popover{display:block !important;}</style>'),
angular.$$uibTooltipCss=!0}),angular.module("ui.bootstrap.timepicker").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibTimepickerCss&&angular.element(document).find("head").prepend('<style type="text/css">.uib-time input{width:50px;}</style>'),angular.$$uibTimepickerCss=!0}),angular.module("ui.bootstrap.typeahead").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibTypeaheadCss&&angular.element(document).find("head").prepend('<style type="text/css">[uib-typeahead-popup].dropdown-menu{display:block;}</style>'),angular.$$uibTypeaheadCss=!0});
/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 1.3.3 - 2016-05-22
 * License: MIT
 */angular.module("ui.bootstrap",["ui.bootstrap.tpls","ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.isClass","ui.bootstrap.datepicker","ui.bootstrap.position","ui.bootstrap.datepickerPopup","ui.bootstrap.debounce","ui.bootstrap.dropdown","ui.bootstrap.stackedMap","ui.bootstrap.modal","ui.bootstrap.paging","ui.bootstrap.pager","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.typeahead"]),angular.module("ui.bootstrap.tpls",["uib/template/accordion/accordion-group.html","uib/template/accordion/accordion.html","uib/template/alert/alert.html","uib/template/carousel/carousel.html","uib/template/carousel/slide.html","uib/template/datepicker/datepicker.html","uib/template/datepicker/day.html","uib/template/datepicker/month.html","uib/template/datepicker/year.html","uib/template/datepickerPopup/popup.html","uib/template/modal/backdrop.html","uib/template/modal/window.html","uib/template/pager/pager.html","uib/template/pagination/pagination.html","uib/template/tooltip/tooltip-html-popup.html","uib/template/tooltip/tooltip-popup.html","uib/template/tooltip/tooltip-template-popup.html","uib/template/popover/popover-html.html","uib/template/popover/popover-template.html","uib/template/popover/popover.html","uib/template/progressbar/bar.html","uib/template/progressbar/progress.html","uib/template/progressbar/progressbar.html","uib/template/rating/rating.html","uib/template/tabs/tab.html","uib/template/tabs/tabset.html","uib/template/timepicker/timepicker.html","uib/template/typeahead/typeahead-match.html","uib/template/typeahead/typeahead-popup.html"]),angular.module("ui.bootstrap.collapse",[]).directive("uibCollapse",["$animate","$q","$parse","$injector",function(a,b,c,d){var e=d.has("$animateCss")?d.get("$animateCss"):null;return{link:function(d,f,g){function h(){f.hasClass("collapse")&&f.hasClass("in")||b.resolve(l(d)).then(function(){f.removeClass("collapse").addClass("collapsing").attr("aria-expanded",!0).attr("aria-hidden",!1),e?e(f,{addClass:"in",easing:"ease",to:{height:f[0].scrollHeight+"px"}}).start()["finally"](i):a.addClass(f,"in",{to:{height:f[0].scrollHeight+"px"}}).then(i)})}function i(){f.removeClass("collapsing").addClass("collapse").css({height:"auto"}),m(d)}function j(){return f.hasClass("collapse")||f.hasClass("in")?void b.resolve(n(d)).then(function(){f.css({height:f[0].scrollHeight+"px"}).removeClass("collapse").addClass("collapsing").attr("aria-expanded",!1).attr("aria-hidden",!0),e?e(f,{removeClass:"in",to:{height:"0"}}).start()["finally"](k):a.removeClass(f,"in",{to:{height:"0"}}).then(k)}):k()}function k(){f.css({height:"0"}),f.removeClass("collapsing").addClass("collapse"),o(d)}var l=c(g.expanding),m=c(g.expanded),n=c(g.collapsing),o=c(g.collapsed);d.$eval(g.uibCollapse)||f.addClass("in").addClass("collapse").attr("aria-expanded",!0).attr("aria-hidden",!1).css({height:"auto"}),d.$watch(g.uibCollapse,function(a){a?j():h()})}}}]),angular.module("ui.bootstrap.accordion",["ui.bootstrap.collapse"]).constant("uibAccordionConfig",{closeOthers:!0}).controller("UibAccordionController",["$scope","$attrs","uibAccordionConfig",function(a,b,c){this.groups=[],this.closeOthers=function(d){var e=angular.isDefined(b.closeOthers)?a.$eval(b.closeOthers):c.closeOthers;e&&angular.forEach(this.groups,function(a){a!==d&&(a.isOpen=!1)})},this.addGroup=function(a){var b=this;this.groups.push(a),a.$on("$destroy",function(c){b.removeGroup(a)})},this.removeGroup=function(a){var b=this.groups.indexOf(a);-1!==b&&this.groups.splice(b,1)}}]).directive("uibAccordion",function(){return{controller:"UibAccordionController",controllerAs:"accordion",transclude:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/accordion/accordion.html"}}}).directive("uibAccordionGroup",function(){return{require:"^uibAccordion",transclude:!0,replace:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/accordion/accordion-group.html"},scope:{heading:"@",panelClass:"@?",isOpen:"=?",isDisabled:"=?"},controller:function(){this.setHeading=function(a){this.heading=a}},link:function(a,b,c,d){d.addGroup(a),a.openClass=c.openClass||"panel-open",a.panelClass=c.panelClass||"panel-default",a.$watch("isOpen",function(c){b.toggleClass(a.openClass,!!c),c&&d.closeOthers(a)}),a.toggleOpen=function(b){a.isDisabled||b&&32!==b.which||(a.isOpen=!a.isOpen)};var e="accordiongroup-"+a.$id+"-"+Math.floor(1e4*Math.random());a.headingId=e+"-tab",a.panelId=e+"-panel"}}}).directive("uibAccordionHeading",function(){return{transclude:!0,template:"",replace:!0,require:"^uibAccordionGroup",link:function(a,b,c,d,e){d.setHeading(e(a,angular.noop))}}}).directive("uibAccordionTransclude",function(){function a(){return"uib-accordion-header,data-uib-accordion-header,x-uib-accordion-header,uib\\:accordion-header,[uib-accordion-header],[data-uib-accordion-header],[x-uib-accordion-header]"}return{require:"^uibAccordionGroup",link:function(b,c,d,e){b.$watch(function(){return e[d.uibAccordionTransclude]},function(b){if(b){var d=angular.element(c[0].querySelector(a()));d.html(""),d.append(b)}})}}}),angular.module("ui.bootstrap.alert",[]).controller("UibAlertController",["$scope","$attrs","$interpolate","$timeout",function(a,b,c,d){a.closeable=!!b.close;var e=angular.isDefined(b.dismissOnTimeout)?c(b.dismissOnTimeout)(a.$parent):null;e&&d(function(){a.close()},parseInt(e,10))}]).directive("uibAlert",function(){return{controller:"UibAlertController",controllerAs:"alert",templateUrl:function(a,b){return b.templateUrl||"uib/template/alert/alert.html"},transclude:!0,replace:!0,scope:{type:"@",close:"&"}}}),angular.module("ui.bootstrap.buttons",[]).constant("uibButtonConfig",{activeClass:"active",toggleEvent:"click"}).controller("UibButtonsController",["uibButtonConfig",function(a){this.activeClass=a.activeClass||"active",this.toggleEvent=a.toggleEvent||"click"}]).directive("uibBtnRadio",["$parse",function(a){return{require:["uibBtnRadio","ngModel"],controller:"UibButtonsController",controllerAs:"buttons",link:function(b,c,d,e){var f=e[0],g=e[1],h=a(d.uibUncheckable);c.find("input").css({display:"none"}),g.$render=function(){c.toggleClass(f.activeClass,angular.equals(g.$modelValue,b.$eval(d.uibBtnRadio)))},c.on(f.toggleEvent,function(){if(!d.disabled){var a=c.hasClass(f.activeClass);a&&!angular.isDefined(d.uncheckable)||b.$apply(function(){g.$setViewValue(a?null:b.$eval(d.uibBtnRadio)),g.$render()})}}),d.uibUncheckable&&b.$watch(h,function(a){d.$set("uncheckable",a?"":void 0)})}}}]).directive("uibBtnCheckbox",function(){return{require:["uibBtnCheckbox","ngModel"],controller:"UibButtonsController",controllerAs:"button",link:function(a,b,c,d){function e(){return g(c.btnCheckboxTrue,!0)}function f(){return g(c.btnCheckboxFalse,!1)}function g(b,c){return angular.isDefined(b)?a.$eval(b):c}var h=d[0],i=d[1];b.find("input").css({display:"none"}),i.$render=function(){b.toggleClass(h.activeClass,angular.equals(i.$modelValue,e()))},b.on(h.toggleEvent,function(){c.disabled||a.$apply(function(){i.$setViewValue(b.hasClass(h.activeClass)?f():e()),i.$render()})})}}}),angular.module("ui.bootstrap.carousel",[]).controller("UibCarouselController",["$scope","$element","$interval","$timeout","$animate",function(a,b,c,d,e){function f(){for(;t.length;)t.shift()}function g(a){for(var b=0;b<q.length;b++)q[b].slide.active=b===a}function h(c,d,i){if(!u){if(angular.extend(c,{direction:i}),angular.extend(q[s].slide||{},{direction:i}),e.enabled(b)&&!a.$currentTransition&&q[d].element&&p.slides.length>1){q[d].element.data(r,c.direction);var j=p.getCurrentIndex();angular.isNumber(j)&&q[j].element&&q[j].element.data(r,c.direction),a.$currentTransition=!0,e.on("addClass",q[d].element,function(b,c){if("close"===c&&(a.$currentTransition=null,e.off("addClass",b),t.length)){var d=t.pop().slide,g=d.index,i=g>p.getCurrentIndex()?"next":"prev";f(),h(d,g,i)}})}a.active=c.index,s=c.index,g(d),l()}}function i(a){for(var b=0;b<q.length;b++)if(q[b].slide===a)return b}function j(){n&&(c.cancel(n),n=null)}function k(b){b.length||(a.$currentTransition=null,f())}function l(){j();var b=+a.interval;!isNaN(b)&&b>0&&(n=c(m,b))}function m(){var b=+a.interval;o&&!isNaN(b)&&b>0&&q.length?a.next():a.pause()}var n,o,p=this,q=p.slides=a.slides=[],r="uib-slideDirection",s=a.active,t=[],u=!1;p.addSlide=function(b,c){q.push({slide:b,element:c}),q.sort(function(a,b){return+a.slide.index-+b.slide.index}),(b.index===a.active||1===q.length&&!angular.isNumber(a.active))&&(a.$currentTransition&&(a.$currentTransition=null),s=b.index,a.active=b.index,g(s),p.select(q[i(b)]),1===q.length&&a.play())},p.getCurrentIndex=function(){for(var a=0;a<q.length;a++)if(q[a].slide.index===s)return a},p.next=a.next=function(){var b=(p.getCurrentIndex()+1)%q.length;return 0===b&&a.noWrap()?void a.pause():p.select(q[b],"next")},p.prev=a.prev=function(){var b=p.getCurrentIndex()-1<0?q.length-1:p.getCurrentIndex()-1;return a.noWrap()&&b===q.length-1?void a.pause():p.select(q[b],"prev")},p.removeSlide=function(b){var c=i(b),d=t.indexOf(q[c]);-1!==d&&t.splice(d,1),q.splice(c,1),q.length>0&&s===c?c>=q.length?(s=q.length-1,a.active=s,g(s),p.select(q[q.length-1])):(s=c,a.active=s,g(s),p.select(q[c])):s>c&&(s--,a.active=s),0===q.length&&(s=null,a.active=null,f())},p.select=a.select=function(b,c){var d=i(b.slide);void 0===c&&(c=d>p.getCurrentIndex()?"next":"prev"),b.slide.index===s||a.$currentTransition?b&&b.slide.index!==s&&a.$currentTransition&&t.push(q[d]):h(b.slide,d,c)},a.indexOfSlide=function(a){return+a.slide.index},a.isActive=function(b){return a.active===b.slide.index},a.isPrevDisabled=function(){return 0===a.active&&a.noWrap()},a.isNextDisabled=function(){return a.active===q.length-1&&a.noWrap()},a.pause=function(){a.noPause||(o=!1,j())},a.play=function(){o||(o=!0,l())},a.$on("$destroy",function(){u=!0,j()}),a.$watch("noTransition",function(a){e.enabled(b,!a)}),a.$watch("interval",l),a.$watchCollection("slides",k),a.$watch("active",function(a){if(angular.isNumber(a)&&s!==a){for(var b=0;b<q.length;b++)if(q[b].slide.index===a){a=b;break}var c=q[a];c&&(g(a),p.select(q[a]),s=a)}})}]).directive("uibCarousel",function(){return{transclude:!0,replace:!0,controller:"UibCarouselController",controllerAs:"carousel",templateUrl:function(a,b){return b.templateUrl||"uib/template/carousel/carousel.html"},scope:{active:"=",interval:"=",noTransition:"=",noPause:"=",noWrap:"&"}}}).directive("uibSlide",function(){return{require:"^uibCarousel",transclude:!0,replace:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/carousel/slide.html"},scope:{actual:"=?",index:"=?"},link:function(a,b,c,d){d.addSlide(a,b),a.$on("$destroy",function(){d.removeSlide(a)})}}}).animation(".item",["$animateCss",function(a){function b(a,b,c){a.removeClass(b),c&&c()}var c="uib-slideDirection";return{beforeAddClass:function(d,e,f){if("active"===e){var g=!1,h=d.data(c),i="next"===h?"left":"right",j=b.bind(this,d,i+" "+h,f);return d.addClass(h),a(d,{addClass:i}).start().done(j),function(){g=!0}}f()},beforeRemoveClass:function(d,e,f){if("active"===e){var g=!1,h=d.data(c),i="next"===h?"left":"right",j=b.bind(this,d,i,f);return a(d,{addClass:i}).start().done(j),function(){g=!0}}f()}}}]),angular.module("ui.bootstrap.dateparser",[]).service("uibDateParser",["$log","$locale","dateFilter","orderByFilter",function(a,b,c,d){function e(a,b){var c=[],e=a.split(""),f=a.indexOf("'");if(f>-1){var g=!1;a=a.split("");for(var h=f;h<a.length;h++)g?("'"===a[h]&&(h+1<a.length&&"'"===a[h+1]?(a[h+1]="$",e[h+1]=""):(e[h]="",g=!1)),a[h]="$"):"'"===a[h]&&(a[h]="$",e[h]="",g=!0);a=a.join("")}return angular.forEach(n,function(d){var f=a.indexOf(d.key);if(f>-1){a=a.split(""),e[f]="("+d.regex+")",a[f]="$";for(var g=f+1,h=f+d.key.length;h>g;g++)e[g]="",a[g]="$";a=a.join(""),c.push({index:f,key:d.key,apply:d[b],matcher:d.regex})}}),{regex:new RegExp("^"+e.join("")+"$"),map:d(c,"index")}}function f(a,b,c){return 1>c?!1:1===b&&c>28?29===c&&(a%4===0&&a%100!==0||a%400===0):3===b||5===b||8===b||10===b?31>c:!0}function g(a){return parseInt(a,10)}function h(a,b){return a&&b?l(a,b):a}function i(a,b){return a&&b?l(a,b,!0):a}function j(a,b){a=a.replace(/:/g,"");var c=Date.parse("Jan 01, 1970 00:00:00 "+a)/6e4;return isNaN(c)?b:c}function k(a,b){return a=new Date(a.getTime()),a.setMinutes(a.getMinutes()+b),a}function l(a,b,c){c=c?-1:1;var d=a.getTimezoneOffset(),e=j(b,d);return k(a,c*(e-d))}var m,n,o=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;this.init=function(){m=b.id,this.parsers={},this.formatters={},n=[{key:"yyyy",regex:"\\d{4}",apply:function(a){this.year=+a},formatter:function(a){var b=new Date;return b.setFullYear(Math.abs(a.getFullYear())),c(b,"yyyy")}},{key:"yy",regex:"\\d{2}",apply:function(a){a=+a,this.year=69>a?a+2e3:a+1900},formatter:function(a){var b=new Date;return b.setFullYear(Math.abs(a.getFullYear())),c(b,"yy")}},{key:"y",regex:"\\d{1,4}",apply:function(a){this.year=+a},formatter:function(a){var b=new Date;return b.setFullYear(Math.abs(a.getFullYear())),c(b,"y")}},{key:"M!",regex:"0?[1-9]|1[0-2]",apply:function(a){this.month=a-1},formatter:function(a){var b=a.getMonth();return/^[0-9]$/.test(b)?c(a,"MM"):c(a,"M")}},{key:"MMMM",regex:b.DATETIME_FORMATS.MONTH.join("|"),apply:function(a){this.month=b.DATETIME_FORMATS.MONTH.indexOf(a)},formatter:function(a){return c(a,"MMMM")}},{key:"MMM",regex:b.DATETIME_FORMATS.SHORTMONTH.join("|"),apply:function(a){this.month=b.DATETIME_FORMATS.SHORTMONTH.indexOf(a)},formatter:function(a){return c(a,"MMM")}},{key:"MM",regex:"0[1-9]|1[0-2]",apply:function(a){this.month=a-1},formatter:function(a){return c(a,"MM")}},{key:"M",regex:"[1-9]|1[0-2]",apply:function(a){this.month=a-1},formatter:function(a){return c(a,"M")}},{key:"d!",regex:"[0-2]?[0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a},formatter:function(a){var b=a.getDate();return/^[1-9]$/.test(b)?c(a,"dd"):c(a,"d")}},{key:"dd",regex:"[0-2][0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a},formatter:function(a){return c(a,"dd")}},{key:"d",regex:"[1-2]?[0-9]{1}|3[0-1]{1}",apply:function(a){this.date=+a},formatter:function(a){return c(a,"d")}},{key:"EEEE",regex:b.DATETIME_FORMATS.DAY.join("|"),formatter:function(a){return c(a,"EEEE")}},{key:"EEE",regex:b.DATETIME_FORMATS.SHORTDAY.join("|"),formatter:function(a){return c(a,"EEE")}},{key:"HH",regex:"(?:0|1)[0-9]|2[0-3]",apply:function(a){this.hours=+a},formatter:function(a){return c(a,"HH")}},{key:"hh",regex:"0[0-9]|1[0-2]",apply:function(a){this.hours=+a},formatter:function(a){return c(a,"hh")}},{key:"H",regex:"1?[0-9]|2[0-3]",apply:function(a){this.hours=+a},formatter:function(a){return c(a,"H")}},{key:"h",regex:"[0-9]|1[0-2]",apply:function(a){this.hours=+a},formatter:function(a){return c(a,"h")}},{key:"mm",regex:"[0-5][0-9]",apply:function(a){this.minutes=+a},formatter:function(a){return c(a,"mm")}},{key:"m",regex:"[0-9]|[1-5][0-9]",apply:function(a){this.minutes=+a},formatter:function(a){return c(a,"m")}},{key:"sss",regex:"[0-9][0-9][0-9]",apply:function(a){this.milliseconds=+a},formatter:function(a){return c(a,"sss")}},{key:"ss",regex:"[0-5][0-9]",apply:function(a){this.seconds=+a},formatter:function(a){return c(a,"ss")}},{key:"s",regex:"[0-9]|[1-5][0-9]",apply:function(a){this.seconds=+a},formatter:function(a){return c(a,"s")}},{key:"a",regex:b.DATETIME_FORMATS.AMPMS.join("|"),apply:function(a){12===this.hours&&(this.hours=0),"PM"===a&&(this.hours+=12)},formatter:function(a){return c(a,"a")}},{key:"Z",regex:"[+-]\\d{4}",apply:function(a){var b=a.match(/([+-])(\d{2})(\d{2})/),c=b[1],d=b[2],e=b[3];this.hours+=g(c+d),this.minutes+=g(c+e)},formatter:function(a){return c(a,"Z")}},{key:"ww",regex:"[0-4][0-9]|5[0-3]",formatter:function(a){return c(a,"ww")}},{key:"w",regex:"[0-9]|[1-4][0-9]|5[0-3]",formatter:function(a){return c(a,"w")}},{key:"GGGG",regex:b.DATETIME_FORMATS.ERANAMES.join("|").replace(/\s/g,"\\s"),formatter:function(a){return c(a,"GGGG")}},{key:"GGG",regex:b.DATETIME_FORMATS.ERAS.join("|"),formatter:function(a){return c(a,"GGG")}},{key:"GG",regex:b.DATETIME_FORMATS.ERAS.join("|"),formatter:function(a){return c(a,"GG")}},{key:"G",regex:b.DATETIME_FORMATS.ERAS.join("|"),formatter:function(a){return c(a,"G")}}]},this.init(),this.filter=function(a,c){if(!angular.isDate(a)||isNaN(a)||!c)return"";c=b.DATETIME_FORMATS[c]||c,b.id!==m&&this.init(),this.formatters[c]||(this.formatters[c]=e(c,"formatter"));var d=this.formatters[c],f=d.map,g=c;return f.reduce(function(b,c,d){var e=g.match(new RegExp("(.*)"+c.key));e&&angular.isString(e[1])&&(b+=e[1],g=g.replace(e[1]+c.key,""));var h=d===f.length-1?g:"";return c.apply?b+c.apply.call(null,a)+h:b+h},"")},this.parse=function(c,d,g){if(!angular.isString(c)||!d)return c;d=b.DATETIME_FORMATS[d]||d,d=d.replace(o,"\\$&"),b.id!==m&&this.init(),this.parsers[d]||(this.parsers[d]=e(d,"apply"));var h=this.parsers[d],i=h.regex,j=h.map,k=c.match(i),l=!1;if(k&&k.length){var n,p;angular.isDate(g)&&!isNaN(g.getTime())?n={year:g.getFullYear(),month:g.getMonth(),date:g.getDate(),hours:g.getHours(),minutes:g.getMinutes(),seconds:g.getSeconds(),milliseconds:g.getMilliseconds()}:(g&&a.warn("dateparser:","baseDate is not a valid date"),n={year:1900,month:0,date:1,hours:0,minutes:0,seconds:0,milliseconds:0});for(var q=1,r=k.length;r>q;q++){var s=j[q-1];"Z"===s.matcher&&(l=!0),s.apply&&s.apply.call(n,k[q])}var t=l?Date.prototype.setUTCFullYear:Date.prototype.setFullYear,u=l?Date.prototype.setUTCHours:Date.prototype.setHours;return f(n.year,n.month,n.date)&&(!angular.isDate(g)||isNaN(g.getTime())||l?(p=new Date(0),t.call(p,n.year,n.month,n.date),u.call(p,n.hours||0,n.minutes||0,n.seconds||0,n.milliseconds||0)):(p=new Date(g),t.call(p,n.year,n.month,n.date),u.call(p,n.hours,n.minutes,n.seconds,n.milliseconds))),p}},this.toTimezone=h,this.fromTimezone=i,this.timezoneToOffset=j,this.addDateMinutes=k,this.convertTimezoneToLocal=l}]),angular.module("ui.bootstrap.isClass",[]).directive("uibIsClass",["$animate",function(a){var b=/^\s*([\s\S]+?)\s+on\s+([\s\S]+?)\s*$/,c=/^\s*([\s\S]+?)\s+for\s+([\s\S]+?)\s*$/;return{restrict:"A",compile:function(d,e){function f(a,b,c){i.push(a),j.push({scope:a,element:b}),o.forEach(function(b,c){g(b,a)}),a.$on("$destroy",h)}function g(b,d){var e=b.match(c),f=d.$eval(e[1]),g=e[2],h=k[b];if(!h){var i=function(b){var c=null;j.some(function(a){var d=a.scope.$eval(m);return d===b?(c=a,!0):void 0}),h.lastActivated!==c&&(h.lastActivated&&a.removeClass(h.lastActivated.element,f),c&&a.addClass(c.element,f),h.lastActivated=c)};k[b]=h={lastActivated:null,scope:d,watchFn:i,compareWithExp:g,watcher:d.$watch(g,i)}}h.watchFn(d.$eval(g))}function h(a){var b=a.targetScope,c=i.indexOf(b);if(i.splice(c,1),j.splice(c,1),i.length){var d=i[0];angular.forEach(k,function(a){a.scope===b&&(a.watcher=d.$watch(a.compareWithExp,a.watchFn),a.scope=d)})}else k={}}var i=[],j=[],k={},l=e.uibIsClass.match(b),m=l[2],n=l[1],o=n.split(",");return f}}}]),angular.module("ui.bootstrap.datepicker",["ui.bootstrap.dateparser","ui.bootstrap.isClass"]).value("$datepickerSuppressError",!1).value("$datepickerLiteralWarning",!0).constant("uibDatepickerConfig",{datepickerMode:"day",formatDay:"dd",formatMonth:"MMMM",formatYear:"yyyy",formatDayHeader:"EEE",formatDayTitle:"MMMM yyyy",formatMonthTitle:"yyyy",maxDate:null,maxMode:"year",minDate:null,minMode:"day",ngModelOptions:{},shortcutPropagation:!1,showWeeks:!0,yearColumns:5,yearRows:4}).controller("UibDatepickerController",["$scope","$attrs","$parse","$interpolate","$locale","$log","dateFilter","uibDatepickerConfig","$datepickerLiteralWarning","$datepickerSuppressError","uibDateParser",function(a,b,c,d,e,f,g,h,i,j,k){function l(b){a.datepickerMode=b,a.datepickerOptions.datepickerMode=b}var m=this,n={$setViewValue:angular.noop},o={},p=[];!!b.datepickerOptions;a.datepickerOptions||(a.datepickerOptions={}),this.modes=["day","month","year"],["customClass","dateDisabled","datepickerMode","formatDay","formatDayHeader","formatDayTitle","formatMonth","formatMonthTitle","formatYear","maxDate","maxMode","minDate","minMode","showWeeks","shortcutPropagation","startingDay","yearColumns","yearRows"].forEach(function(b){switch(b){case"customClass":case"dateDisabled":a[b]=a.datepickerOptions[b]||angular.noop;break;case"datepickerMode":a.datepickerMode=angular.isDefined(a.datepickerOptions.datepickerMode)?a.datepickerOptions.datepickerMode:h.datepickerMode;break;case"formatDay":case"formatDayHeader":case"formatDayTitle":case"formatMonth":case"formatMonthTitle":case"formatYear":m[b]=angular.isDefined(a.datepickerOptions[b])?d(a.datepickerOptions[b])(a.$parent):h[b];break;case"showWeeks":case"shortcutPropagation":case"yearColumns":case"yearRows":m[b]=angular.isDefined(a.datepickerOptions[b])?a.datepickerOptions[b]:h[b];break;case"startingDay":angular.isDefined(a.datepickerOptions.startingDay)?m.startingDay=a.datepickerOptions.startingDay:angular.isNumber(h.startingDay)?m.startingDay=h.startingDay:m.startingDay=(e.DATETIME_FORMATS.FIRSTDAYOFWEEK+8)%7;break;case"maxDate":case"minDate":a.$watch("datepickerOptions."+b,function(a){a?angular.isDate(a)?m[b]=k.fromTimezone(new Date(a),o.timezone):(i&&f.warn("Literal date support has been deprecated, please switch to date object usage"),m[b]=new Date(g(a,"medium"))):m[b]=h[b]?k.fromTimezone(new Date(h[b]),o.timezone):null,m.refreshView()});break;case"maxMode":case"minMode":a.datepickerOptions[b]?a.$watch(function(){return a.datepickerOptions[b]},function(c){m[b]=a[b]=angular.isDefined(c)?c:datepickerOptions[b],("minMode"===b&&m.modes.indexOf(a.datepickerOptions.datepickerMode)<m.modes.indexOf(m[b])||"maxMode"===b&&m.modes.indexOf(a.datepickerOptions.datepickerMode)>m.modes.indexOf(m[b]))&&(a.datepickerMode=m[b],a.datepickerOptions.datepickerMode=m[b])}):m[b]=a[b]=h[b]||null}}),a.uniqueId="datepicker-"+a.$id+"-"+Math.floor(1e4*Math.random()),a.disabled=angular.isDefined(b.disabled)||!1,angular.isDefined(b.ngDisabled)&&p.push(a.$parent.$watch(b.ngDisabled,function(b){a.disabled=b,m.refreshView()})),a.isActive=function(b){return 0===m.compare(b.date,m.activeDate)?(a.activeDateId=b.uid,!0):!1},this.init=function(b){n=b,o=b.$options||h.ngModelOptions,a.datepickerOptions.initDate?(m.activeDate=k.fromTimezone(a.datepickerOptions.initDate,o.timezone)||new Date,a.$watch("datepickerOptions.initDate",function(a){a&&(n.$isEmpty(n.$modelValue)||n.$invalid)&&(m.activeDate=k.fromTimezone(a,o.timezone),m.refreshView())})):m.activeDate=new Date;var c=n.$modelValue?new Date(n.$modelValue):new Date;this.activeDate=isNaN(c)?k.fromTimezone(new Date,o.timezone):k.fromTimezone(c,o.timezone),n.$render=function(){m.render()}},this.render=function(){if(n.$viewValue){var a=new Date(n.$viewValue),b=!isNaN(a);b?this.activeDate=k.fromTimezone(a,o.timezone):j||f.error('Datepicker directive: "ng-model" value must be a Date object')}this.refreshView()},this.refreshView=function(){if(this.element){a.selectedDt=null,this._refreshView(),a.activeDt&&(a.activeDateId=a.activeDt.uid);var b=n.$viewValue?new Date(n.$viewValue):null;b=k.fromTimezone(b,o.timezone),n.$setValidity("dateDisabled",!b||this.element&&!this.isDisabled(b))}},this.createDateObject=function(b,c){var d=n.$viewValue?new Date(n.$viewValue):null;d=k.fromTimezone(d,o.timezone);var e=new Date;e=k.fromTimezone(e,o.timezone);var f=this.compare(b,e),g={date:b,label:k.filter(b,c),selected:d&&0===this.compare(b,d),disabled:this.isDisabled(b),past:0>f,current:0===f,future:f>0,customClass:this.customClass(b)||null};return d&&0===this.compare(b,d)&&(a.selectedDt=g),m.activeDate&&0===this.compare(g.date,m.activeDate)&&(a.activeDt=g),g},this.isDisabled=function(b){return a.disabled||this.minDate&&this.compare(b,this.minDate)<0||this.maxDate&&this.compare(b,this.maxDate)>0||a.dateDisabled&&a.dateDisabled({date:b,mode:a.datepickerMode})},this.customClass=function(b){return a.customClass({date:b,mode:a.datepickerMode})},this.split=function(a,b){for(var c=[];a.length>0;)c.push(a.splice(0,b));return c},a.select=function(b){if(a.datepickerMode===m.minMode){var c=n.$viewValue?k.fromTimezone(new Date(n.$viewValue),o.timezone):new Date(0,0,0,0,0,0,0);c.setFullYear(b.getFullYear(),b.getMonth(),b.getDate()),c=k.toTimezone(c,o.timezone),n.$setViewValue(c),n.$render()}else m.activeDate=b,l(m.modes[m.modes.indexOf(a.datepickerMode)-1]),a.$emit("uib:datepicker.mode");a.$broadcast("uib:datepicker.focus")},a.move=function(a){var b=m.activeDate.getFullYear()+a*(m.step.years||0),c=m.activeDate.getMonth()+a*(m.step.months||0);m.activeDate.setFullYear(b,c,1),m.refreshView()},a.toggleMode=function(b){b=b||1,a.datepickerMode===m.maxMode&&1===b||a.datepickerMode===m.minMode&&-1===b||(l(m.modes[m.modes.indexOf(a.datepickerMode)+b]),a.$emit("uib:datepicker.mode"))},a.keys={13:"enter",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down"};var q=function(){m.element[0].focus()};a.$on("uib:datepicker.focus",q),a.keydown=function(b){var c=a.keys[b.which];if(c&&!b.shiftKey&&!b.altKey&&!a.disabled)if(b.preventDefault(),m.shortcutPropagation||b.stopPropagation(),"enter"===c||"space"===c){if(m.isDisabled(m.activeDate))return;a.select(m.activeDate)}else!b.ctrlKey||"up"!==c&&"down"!==c?(m.handleKeyDown(c,b),m.refreshView()):a.toggleMode("up"===c?1:-1)},a.$on("$destroy",function(){for(;p.length;)p.shift()()})}]).controller("UibDaypickerController",["$scope","$element","dateFilter",function(a,b,c){function d(a,b){return 1!==b||a%4!==0||a%100===0&&a%400!==0?f[b]:29}function e(a){var b=new Date(a);b.setDate(b.getDate()+4-(b.getDay()||7));var c=b.getTime();return b.setMonth(0),b.setDate(1),Math.floor(Math.round((c-b)/864e5)/7)+1}var f=[31,28,31,30,31,30,31,31,30,31,30,31];this.step={months:1},this.element=b,this.init=function(b){angular.extend(b,this),a.showWeeks=b.showWeeks,b.refreshView()},this.getDates=function(a,b){for(var c,d=new Array(b),e=new Date(a),f=0;b>f;)c=new Date(e),d[f++]=c,e.setDate(e.getDate()+1);return d},this._refreshView=function(){var b=this.activeDate.getFullYear(),d=this.activeDate.getMonth(),f=new Date(this.activeDate);f.setFullYear(b,d,1);var g=this.startingDay-f.getDay(),h=g>0?7-g:-g,i=new Date(f);h>0&&i.setDate(-h+1);for(var j=this.getDates(i,42),k=0;42>k;k++)j[k]=angular.extend(this.createDateObject(j[k],this.formatDay),{secondary:j[k].getMonth()!==d,uid:a.uniqueId+"-"+k});a.labels=new Array(7);for(var l=0;7>l;l++)a.labels[l]={abbr:c(j[l].date,this.formatDayHeader),full:c(j[l].date,"EEEE")};if(a.title=c(this.activeDate,this.formatDayTitle),a.rows=this.split(j,7),a.showWeeks){a.weekNumbers=[];for(var m=(11-this.startingDay)%7,n=a.rows.length,o=0;n>o;o++)a.weekNumbers.push(e(a.rows[o][m].date))}},this.compare=function(a,b){var c=new Date(a.getFullYear(),a.getMonth(),a.getDate()),d=new Date(b.getFullYear(),b.getMonth(),b.getDate());return c.setFullYear(a.getFullYear()),d.setFullYear(b.getFullYear()),c-d},this.handleKeyDown=function(a,b){var c=this.activeDate.getDate();if("left"===a)c-=1;else if("up"===a)c-=7;else if("right"===a)c+=1;else if("down"===a)c+=7;else if("pageup"===a||"pagedown"===a){var e=this.activeDate.getMonth()+("pageup"===a?-1:1);this.activeDate.setMonth(e,1),c=Math.min(d(this.activeDate.getFullYear(),this.activeDate.getMonth()),c)}else"home"===a?c=1:"end"===a&&(c=d(this.activeDate.getFullYear(),this.activeDate.getMonth()));this.activeDate.setDate(c)}}]).controller("UibMonthpickerController",["$scope","$element","dateFilter",function(a,b,c){this.step={years:1},this.element=b,this.init=function(a){angular.extend(a,this),a.refreshView()},this._refreshView=function(){for(var b,d=new Array(12),e=this.activeDate.getFullYear(),f=0;12>f;f++)b=new Date(this.activeDate),b.setFullYear(e,f,1),d[f]=angular.extend(this.createDateObject(b,this.formatMonth),{uid:a.uniqueId+"-"+f});a.title=c(this.activeDate,this.formatMonthTitle),a.rows=this.split(d,3)},this.compare=function(a,b){var c=new Date(a.getFullYear(),a.getMonth()),d=new Date(b.getFullYear(),b.getMonth());return c.setFullYear(a.getFullYear()),d.setFullYear(b.getFullYear()),c-d},this.handleKeyDown=function(a,b){var c=this.activeDate.getMonth();if("left"===a)c-=1;else if("up"===a)c-=3;else if("right"===a)c+=1;else if("down"===a)c+=3;else if("pageup"===a||"pagedown"===a){var d=this.activeDate.getFullYear()+("pageup"===a?-1:1);this.activeDate.setFullYear(d)}else"home"===a?c=0:"end"===a&&(c=11);this.activeDate.setMonth(c)}}]).controller("UibYearpickerController",["$scope","$element","dateFilter",function(a,b,c){function d(a){return parseInt((a-1)/f,10)*f+1}var e,f;this.element=b,this.yearpickerInit=function(){e=this.yearColumns,f=this.yearRows*e,this.step={years:f}},this._refreshView=function(){for(var b,c=new Array(f),g=0,h=d(this.activeDate.getFullYear());f>g;g++)b=new Date(this.activeDate),b.setFullYear(h+g,0,1),c[g]=angular.extend(this.createDateObject(b,this.formatYear),{uid:a.uniqueId+"-"+g});a.title=[c[0].label,c[f-1].label].join(" - "),a.rows=this.split(c,e),a.columns=e},this.compare=function(a,b){return a.getFullYear()-b.getFullYear()},this.handleKeyDown=function(a,b){var c=this.activeDate.getFullYear();"left"===a?c-=1:"up"===a?c-=e:"right"===a?c+=1:"down"===a?c+=e:"pageup"===a||"pagedown"===a?c+=("pageup"===a?-1:1)*f:"home"===a?c=d(this.activeDate.getFullYear()):"end"===a&&(c=d(this.activeDate.getFullYear())+f-1),this.activeDate.setFullYear(c)}}]).directive("uibDatepicker",function(){return{replace:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/datepicker/datepicker.html"},scope:{datepickerOptions:"=?"},require:["uibDatepicker","^ngModel"],controller:"UibDatepickerController",controllerAs:"datepicker",link:function(a,b,c,d){var e=d[0],f=d[1];e.init(f)}}}).directive("uibDaypicker",function(){return{replace:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/datepicker/day.html"},require:["^uibDatepicker","uibDaypicker"],controller:"UibDaypickerController",link:function(a,b,c,d){var e=d[0],f=d[1];f.init(e)}}}).directive("uibMonthpicker",function(){return{replace:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/datepicker/month.html"},require:["^uibDatepicker","uibMonthpicker"],controller:"UibMonthpickerController",link:function(a,b,c,d){var e=d[0],f=d[1];f.init(e)}}}).directive("uibYearpicker",function(){return{replace:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/datepicker/year.html"},require:["^uibDatepicker","uibYearpicker"],controller:"UibYearpickerController",link:function(a,b,c,d){var e=d[0];angular.extend(e,d[1]),e.yearpickerInit(),e.refreshView()}}}),angular.module("ui.bootstrap.position",[]).factory("$uibPosition",["$document","$window",function(a,b){var c,d,e={normal:/(auto|scroll)/,hidden:/(auto|scroll|hidden)/},f={auto:/\s?auto?\s?/i,primary:/^(top|bottom|left|right)$/,secondary:/^(top|bottom|left|right|center)$/,vertical:/^(top|bottom)$/},g=/(HTML|BODY)/;return{getRawNode:function(a){return a.nodeName?a:a[0]||a},parseStyle:function(a){return a=parseFloat(a),isFinite(a)?a:0},offsetParent:function(c){function d(a){return"static"===(b.getComputedStyle(a).position||"static")}c=this.getRawNode(c);for(var e=c.offsetParent||a[0].documentElement;e&&e!==a[0].documentElement&&d(e);)e=e.offsetParent;return e||a[0].documentElement},scrollbarWidth:function(e){if(e){if(angular.isUndefined(d)){var f=a.find("body");f.addClass("uib-position-body-scrollbar-measure"),d=b.innerWidth-f[0].clientWidth,d=isFinite(d)?d:0,f.removeClass("uib-position-body-scrollbar-measure")}return d}if(angular.isUndefined(c)){var g=angular.element('<div class="uib-position-scrollbar-measure"></div>');a.find("body").append(g),c=g[0].offsetWidth-g[0].clientWidth,c=isFinite(c)?c:0,g.remove()}return c},scrollbarPadding:function(a){a=this.getRawNode(a);var c=b.getComputedStyle(a),d=this.parseStyle(c.paddingRight),e=this.parseStyle(c.paddingBottom),f=this.scrollParent(a,!1,!0),h=this.scrollbarWidth(f,g.test(f.tagName));return{scrollbarWidth:h,widthOverflow:f.scrollWidth>f.clientWidth,right:d+h,originalRight:d,heightOverflow:f.scrollHeight>f.clientHeight,
bottom:e+h,originalBottom:e}},isScrollable:function(a,c){a=this.getRawNode(a);var d=c?e.hidden:e.normal,f=b.getComputedStyle(a);return d.test(f.overflow+f.overflowY+f.overflowX)},scrollParent:function(c,d,f){c=this.getRawNode(c);var g=d?e.hidden:e.normal,h=a[0].documentElement,i=b.getComputedStyle(c);if(f&&g.test(i.overflow+i.overflowY+i.overflowX))return c;var j="absolute"===i.position,k=c.parentElement||h;if(k===h||"fixed"===i.position)return h;for(;k.parentElement&&k!==h;){var l=b.getComputedStyle(k);if(j&&"static"!==l.position&&(j=!1),!j&&g.test(l.overflow+l.overflowY+l.overflowX))break;k=k.parentElement}return k},position:function(c,d){c=this.getRawNode(c);var e=this.offset(c);if(d){var f=b.getComputedStyle(c);e.top-=this.parseStyle(f.marginTop),e.left-=this.parseStyle(f.marginLeft)}var g=this.offsetParent(c),h={top:0,left:0};return g!==a[0].documentElement&&(h=this.offset(g),h.top+=g.clientTop-g.scrollTop,h.left+=g.clientLeft-g.scrollLeft),{width:Math.round(angular.isNumber(e.width)?e.width:c.offsetWidth),height:Math.round(angular.isNumber(e.height)?e.height:c.offsetHeight),top:Math.round(e.top-h.top),left:Math.round(e.left-h.left)}},offset:function(c){c=this.getRawNode(c);var d=c.getBoundingClientRect();return{width:Math.round(angular.isNumber(d.width)?d.width:c.offsetWidth),height:Math.round(angular.isNumber(d.height)?d.height:c.offsetHeight),top:Math.round(d.top+(b.pageYOffset||a[0].documentElement.scrollTop)),left:Math.round(d.left+(b.pageXOffset||a[0].documentElement.scrollLeft))}},viewportOffset:function(c,d,e){c=this.getRawNode(c),e=e!==!1;var f=c.getBoundingClientRect(),g={top:0,left:0,bottom:0,right:0},h=d?a[0].documentElement:this.scrollParent(c),i=h.getBoundingClientRect();if(g.top=i.top+h.clientTop,g.left=i.left+h.clientLeft,h===a[0].documentElement&&(g.top+=b.pageYOffset,g.left+=b.pageXOffset),g.bottom=g.top+h.clientHeight,g.right=g.left+h.clientWidth,e){var j=b.getComputedStyle(h);g.top+=this.parseStyle(j.paddingTop),g.bottom-=this.parseStyle(j.paddingBottom),g.left+=this.parseStyle(j.paddingLeft),g.right-=this.parseStyle(j.paddingRight)}return{top:Math.round(f.top-g.top),bottom:Math.round(g.bottom-f.bottom),left:Math.round(f.left-g.left),right:Math.round(g.right-f.right)}},parsePlacement:function(a){var b=f.auto.test(a);return b&&(a=a.replace(f.auto,"")),a=a.split("-"),a[0]=a[0]||"top",f.primary.test(a[0])||(a[0]="top"),a[1]=a[1]||"center",f.secondary.test(a[1])||(a[1]="center"),b?a[2]=!0:a[2]=!1,a},positionElements:function(a,c,d,e){a=this.getRawNode(a),c=this.getRawNode(c);var g=angular.isDefined(c.offsetWidth)?c.offsetWidth:c.prop("offsetWidth"),h=angular.isDefined(c.offsetHeight)?c.offsetHeight:c.prop("offsetHeight");d=this.parsePlacement(d);var i=e?this.offset(a):this.position(a),j={top:0,left:0,placement:""};if(d[2]){var k=this.viewportOffset(a,e),l=b.getComputedStyle(c),m={width:g+Math.round(Math.abs(this.parseStyle(l.marginLeft)+this.parseStyle(l.marginRight))),height:h+Math.round(Math.abs(this.parseStyle(l.marginTop)+this.parseStyle(l.marginBottom)))};if(d[0]="top"===d[0]&&m.height>k.top&&m.height<=k.bottom?"bottom":"bottom"===d[0]&&m.height>k.bottom&&m.height<=k.top?"top":"left"===d[0]&&m.width>k.left&&m.width<=k.right?"right":"right"===d[0]&&m.width>k.right&&m.width<=k.left?"left":d[0],d[1]="top"===d[1]&&m.height-i.height>k.bottom&&m.height-i.height<=k.top?"bottom":"bottom"===d[1]&&m.height-i.height>k.top&&m.height-i.height<=k.bottom?"top":"left"===d[1]&&m.width-i.width>k.right&&m.width-i.width<=k.left?"right":"right"===d[1]&&m.width-i.width>k.left&&m.width-i.width<=k.right?"left":d[1],"center"===d[1])if(f.vertical.test(d[0])){var n=i.width/2-g/2;k.left+n<0&&m.width-i.width<=k.right?d[1]="left":k.right+n<0&&m.width-i.width<=k.left&&(d[1]="right")}else{var o=i.height/2-m.height/2;k.top+o<0&&m.height-i.height<=k.bottom?d[1]="top":k.bottom+o<0&&m.height-i.height<=k.top&&(d[1]="bottom")}}switch(d[0]){case"top":j.top=i.top-h;break;case"bottom":j.top=i.top+i.height;break;case"left":j.left=i.left-g;break;case"right":j.left=i.left+i.width}switch(d[1]){case"top":j.top=i.top;break;case"bottom":j.top=i.top+i.height-h;break;case"left":j.left=i.left;break;case"right":j.left=i.left+i.width-g;break;case"center":f.vertical.test(d[0])?j.left=i.left+i.width/2-g/2:j.top=i.top+i.height/2-h/2}return j.top=Math.round(j.top),j.left=Math.round(j.left),j.placement="center"===d[1]?d[0]:d[0]+"-"+d[1],j},positionArrow:function(a,c){a=this.getRawNode(a);var d=a.querySelector(".tooltip-inner, .popover-inner");if(d){var e=angular.element(d).hasClass("tooltip-inner"),g=e?a.querySelector(".tooltip-arrow"):a.querySelector(".arrow");if(g){var h={top:"",bottom:"",left:"",right:""};if(c=this.parsePlacement(c),"center"===c[1])return void angular.element(g).css(h);var i="border-"+c[0]+"-width",j=b.getComputedStyle(g)[i],k="border-";k+=f.vertical.test(c[0])?c[0]+"-"+c[1]:c[1]+"-"+c[0],k+="-radius";var l=b.getComputedStyle(e?d:a)[k];switch(c[0]){case"top":h.bottom=e?"0":"-"+j;break;case"bottom":h.top=e?"0":"-"+j;break;case"left":h.right=e?"0":"-"+j;break;case"right":h.left=e?"0":"-"+j}h[c[1]]=l,angular.element(g).css(h)}}}}}]),angular.module("ui.bootstrap.datepickerPopup",["ui.bootstrap.datepicker","ui.bootstrap.position"]).value("$datepickerPopupLiteralWarning",!0).constant("uibDatepickerPopupConfig",{altInputFormats:[],appendToBody:!1,clearText:"Clear",closeOnDateSelection:!0,closeText:"Done",currentText:"Today",datepickerPopup:"yyyy-MM-dd",datepickerPopupTemplateUrl:"uib/template/datepickerPopup/popup.html",datepickerTemplateUrl:"uib/template/datepicker/datepicker.html",html5Types:{date:"yyyy-MM-dd","datetime-local":"yyyy-MM-ddTHH:mm:ss.sss",month:"yyyy-MM"},onOpenFocus:!0,showButtonBar:!0,placement:"auto bottom-left"}).controller("UibDatepickerPopupController",["$scope","$element","$attrs","$compile","$log","$parse","$window","$document","$rootScope","$uibPosition","dateFilter","uibDateParser","uibDatepickerPopupConfig","$timeout","uibDatepickerConfig","$datepickerPopupLiteralWarning",function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){function q(b){var c=l.parse(b,w,a.date);if(isNaN(c))for(var d=0;d<I.length;d++)if(c=l.parse(b,I[d],a.date),!isNaN(c))return c;return c}function r(a){if(angular.isNumber(a)&&(a=new Date(a)),!a)return null;if(angular.isDate(a)&&!isNaN(a))return a;if(angular.isString(a)){var b=q(a);if(!isNaN(b))return l.toTimezone(b,J)}return F.$options&&F.$options.allowInvalid?a:void 0}function s(a,b){var d=a||b;return c.ngRequired||d?(angular.isNumber(d)&&(d=new Date(d)),d?angular.isDate(d)&&!isNaN(d)?!0:angular.isString(d)?!isNaN(q(b)):!1:!0):!0}function t(c){if(a.isOpen||!a.disabled){var d=H[0],e=b[0].contains(c.target),f=void 0!==d.contains&&d.contains(c.target);!a.isOpen||e||f||a.$apply(function(){a.isOpen=!1})}}function u(c){27===c.which&&a.isOpen?(c.preventDefault(),c.stopPropagation(),a.$apply(function(){a.isOpen=!1}),b[0].focus()):40!==c.which||a.isOpen||(c.preventDefault(),c.stopPropagation(),a.$apply(function(){a.isOpen=!0}))}function v(){if(a.isOpen){var d=angular.element(H[0].querySelector(".uib-datepicker-popup")),e=c.popupPlacement?c.popupPlacement:m.placement,f=j.positionElements(b,d,e,y);d.css({top:f.top+"px",left:f.left+"px"}),d.hasClass("uib-position-measure")&&d.removeClass("uib-position-measure")}}var w,x,y,z,A,B,C,D,E,F,G,H,I,J,K=!1,L=[];this.init=function(e){if(F=e,G=e.$options,x=angular.isDefined(c.closeOnDateSelection)?a.$parent.$eval(c.closeOnDateSelection):m.closeOnDateSelection,y=angular.isDefined(c.datepickerAppendToBody)?a.$parent.$eval(c.datepickerAppendToBody):m.appendToBody,z=angular.isDefined(c.onOpenFocus)?a.$parent.$eval(c.onOpenFocus):m.onOpenFocus,A=angular.isDefined(c.datepickerPopupTemplateUrl)?c.datepickerPopupTemplateUrl:m.datepickerPopupTemplateUrl,B=angular.isDefined(c.datepickerTemplateUrl)?c.datepickerTemplateUrl:m.datepickerTemplateUrl,I=angular.isDefined(c.altInputFormats)?a.$parent.$eval(c.altInputFormats):m.altInputFormats,a.showButtonBar=angular.isDefined(c.showButtonBar)?a.$parent.$eval(c.showButtonBar):m.showButtonBar,m.html5Types[c.type]?(w=m.html5Types[c.type],K=!0):(w=c.uibDatepickerPopup||m.datepickerPopup,c.$observe("uibDatepickerPopup",function(a,b){var c=a||m.datepickerPopup;if(c!==w&&(w=c,F.$modelValue=null,!w))throw new Error("uibDatepickerPopup must have a date format specified.")})),!w)throw new Error("uibDatepickerPopup must have a date format specified.");if(K&&c.uibDatepickerPopup)throw new Error("HTML5 date input types do not support custom formats.");C=angular.element("<div uib-datepicker-popup-wrap><div uib-datepicker></div></div>"),G?(J=G.timezone,a.ngModelOptions=angular.copy(G),a.ngModelOptions.timezone=null,a.ngModelOptions.updateOnDefault===!0&&(a.ngModelOptions.updateOn=a.ngModelOptions.updateOn?a.ngModelOptions.updateOn+" default":"default"),C.attr("ng-model-options","ngModelOptions")):J=null,C.attr({"ng-model":"date","ng-change":"dateSelection(date)","template-url":A}),D=angular.element(C.children()[0]),D.attr("template-url",B),a.datepickerOptions||(a.datepickerOptions={}),K&&"month"===c.type&&(a.datepickerOptions.datepickerMode="month",a.datepickerOptions.minMode="month"),D.attr("datepicker-options","datepickerOptions"),K?F.$formatters.push(function(b){return a.date=l.fromTimezone(b,J),b}):(F.$$parserName="date",F.$validators.date=s,F.$parsers.unshift(r),F.$formatters.push(function(b){return F.$isEmpty(b)?(a.date=b,b):(angular.isNumber(b)&&(b=new Date(b)),a.date=l.fromTimezone(b,J),l.filter(a.date,w))})),F.$viewChangeListeners.push(function(){a.date=q(F.$viewValue)}),b.on("keydown",u),H=d(C)(a),C.remove(),y?h.find("body").append(H):b.after(H),a.$on("$destroy",function(){for(a.isOpen===!0&&(i.$$phase||a.$apply(function(){a.isOpen=!1})),H.remove(),b.off("keydown",u),h.off("click",t),E&&E.off("scroll",v),angular.element(g).off("resize",v);L.length;)L.shift()()})},a.getText=function(b){return a[b+"Text"]||m[b+"Text"]},a.isDisabled=function(b){"today"===b&&(b=l.fromTimezone(new Date,J));var c={};return angular.forEach(["minDate","maxDate"],function(b){a.datepickerOptions[b]?angular.isDate(a.datepickerOptions[b])?c[b]=l.fromTimezone(new Date(a.datepickerOptions[b]),J):(p&&e.warn("Literal date support has been deprecated, please switch to date object usage"),c[b]=new Date(k(a.datepickerOptions[b],"medium"))):c[b]=null}),a.datepickerOptions&&c.minDate&&a.compare(b,c.minDate)<0||c.maxDate&&a.compare(b,c.maxDate)>0},a.compare=function(a,b){return new Date(a.getFullYear(),a.getMonth(),a.getDate())-new Date(b.getFullYear(),b.getMonth(),b.getDate())},a.dateSelection=function(c){angular.isDefined(c)&&(a.date=c);var d=a.date?l.filter(a.date,w):null;b.val(d),F.$setViewValue(d),x&&(a.isOpen=!1,b[0].focus())},a.keydown=function(c){27===c.which&&(c.stopPropagation(),a.isOpen=!1,b[0].focus())},a.select=function(b,c){if(c.stopPropagation(),"today"===b){var d=new Date;angular.isDate(a.date)?(b=new Date(a.date),b.setFullYear(d.getFullYear(),d.getMonth(),d.getDate())):b=new Date(d.setHours(0,0,0,0))}a.dateSelection(b)},a.close=function(c){c.stopPropagation(),a.isOpen=!1,b[0].focus()},a.disabled=angular.isDefined(c.disabled)||!1,c.ngDisabled&&L.push(a.$parent.$watch(f(c.ngDisabled),function(b){a.disabled=b})),a.$watch("isOpen",function(d){d?a.disabled?a.isOpen=!1:n(function(){v(),z&&a.$broadcast("uib:datepicker.focus"),h.on("click",t);var d=c.popupPlacement?c.popupPlacement:m.placement;y||j.parsePlacement(d)[2]?(E=E||angular.element(j.scrollParent(b)),E&&E.on("scroll",v)):E=null,angular.element(g).on("resize",v)},0,!1):(h.off("click",t),E&&E.off("scroll",v),angular.element(g).off("resize",v))}),a.$on("uib:datepicker.mode",function(){n(v,0,!1)})}]).directive("uibDatepickerPopup",function(){return{require:["ngModel","uibDatepickerPopup"],controller:"UibDatepickerPopupController",scope:{datepickerOptions:"=?",isOpen:"=?",currentText:"@",clearText:"@",closeText:"@"},link:function(a,b,c,d){var e=d[0],f=d[1];f.init(e)}}}).directive("uibDatepickerPopupWrap",function(){return{replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/datepickerPopup/popup.html"}}}),angular.module("ui.bootstrap.debounce",[]).factory("$$debounce",["$timeout",function(a){return function(b,c){var d;return function(){var e=this,f=Array.prototype.slice.call(arguments);d&&a.cancel(d),d=a(function(){b.apply(e,f)},c)}}}]),angular.module("ui.bootstrap.dropdown",["ui.bootstrap.position"]).constant("uibDropdownConfig",{appendToOpenClass:"uib-dropdown-open",openClass:"open"}).service("uibDropdownService",["$document","$rootScope",function(a,b){var c=null;this.open=function(b,f){c||(a.on("click",d),f.on("keydown",e)),c&&c!==b&&(c.isOpen=!1),c=b},this.close=function(b,f){c===b&&(c=null,a.off("click",d),f.off("keydown",e))};var d=function(a){if(c&&!(a&&"disabled"===c.getAutoClose()||a&&3===a.which)){var d=c.getToggleElement();if(!(a&&d&&d[0].contains(a.target))){var e=c.getDropdownElement();a&&"outsideClick"===c.getAutoClose()&&e&&e[0].contains(a.target)||(c.isOpen=!1,b.$$phase||c.$apply())}}},e=function(a){27===a.which?(a.stopPropagation(),c.focusToggleElement(),d()):c.isKeynavEnabled()&&-1!==[38,40].indexOf(a.which)&&c.isOpen&&(a.preventDefault(),a.stopPropagation(),c.focusDropdownEntry(a.which))}}]).controller("UibDropdownController",["$scope","$element","$attrs","$parse","uibDropdownConfig","uibDropdownService","$animate","$uibPosition","$document","$compile","$templateRequest",function(a,b,c,d,e,f,g,h,i,j,k){var l,m,n=this,o=a.$new(),p=e.appendToOpenClass,q=e.openClass,r=angular.noop,s=c.onToggle?d(c.onToggle):angular.noop,t=!1,u=null,v=!1,w=i.find("body");b.addClass("dropdown"),this.init=function(){if(c.isOpen&&(m=d(c.isOpen),r=m.assign,a.$watch(m,function(a){o.isOpen=!!a})),angular.isDefined(c.dropdownAppendTo)){var e=d(c.dropdownAppendTo)(o);e&&(u=angular.element(e))}t=angular.isDefined(c.dropdownAppendToBody),v=angular.isDefined(c.keyboardNav),t&&!u&&(u=w),u&&n.dropdownMenu&&(u.append(n.dropdownMenu),b.on("$destroy",function(){n.dropdownMenu.remove()}))},this.toggle=function(a){return o.isOpen=arguments.length?!!a:!o.isOpen,angular.isFunction(r)&&r(o,o.isOpen),o.isOpen},this.isOpen=function(){return o.isOpen},o.getToggleElement=function(){return n.toggleElement},o.getAutoClose=function(){return c.autoClose||"always"},o.getElement=function(){return b},o.isKeynavEnabled=function(){return v},o.focusDropdownEntry=function(a){var c=n.dropdownMenu?angular.element(n.dropdownMenu).find("a"):b.find("ul").eq(0).find("a");switch(a){case 40:angular.isNumber(n.selectedOption)?n.selectedOption=n.selectedOption===c.length-1?n.selectedOption:n.selectedOption+1:n.selectedOption=0;break;case 38:angular.isNumber(n.selectedOption)?n.selectedOption=0===n.selectedOption?0:n.selectedOption-1:n.selectedOption=c.length-1}c[n.selectedOption].focus()},o.getDropdownElement=function(){return n.dropdownMenu},o.focusToggleElement=function(){n.toggleElement&&n.toggleElement[0].focus()},o.$watch("isOpen",function(c,d){if(u&&n.dropdownMenu){var e,i,m,v=h.positionElements(b,n.dropdownMenu,"bottom-left",!0);if(e={top:v.top+"px",display:c?"block":"none"},i=n.dropdownMenu.hasClass("dropdown-menu-right"),i?(e.left="auto",m=h.scrollbarWidth(!0),e.right=window.innerWidth-m-(v.left+b.prop("offsetWidth"))+"px"):(e.left=v.left+"px",e.right="auto"),!t){var w=h.offset(u);e.top=v.top-w.top+"px",i?e.right=window.innerWidth-(v.left-w.left+b.prop("offsetWidth"))+"px":e.left=v.left-w.left+"px"}n.dropdownMenu.css(e)}var x=u?u:b,y=x.hasClass(u?p:q);if(y===!c&&g[c?"addClass":"removeClass"](x,u?p:q).then(function(){angular.isDefined(c)&&c!==d&&s(a,{open:!!c})}),c)n.dropdownMenuTemplateUrl&&k(n.dropdownMenuTemplateUrl).then(function(a){l=o.$new(),j(a.trim())(l,function(a){var b=a;n.dropdownMenu.replaceWith(b),n.dropdownMenu=b})}),o.focusToggleElement(),f.open(o,b);else{if(n.dropdownMenuTemplateUrl){l&&l.$destroy();var z=angular.element('<ul class="dropdown-menu"></ul>');n.dropdownMenu.replaceWith(z),n.dropdownMenu=z}f.close(o,b),n.selectedOption=null}angular.isFunction(r)&&r(a,c)})}]).directive("uibDropdown",function(){return{controller:"UibDropdownController",link:function(a,b,c,d){d.init()}}}).directive("uibDropdownMenu",function(){return{restrict:"A",require:"?^uibDropdown",link:function(a,b,c,d){if(d&&!angular.isDefined(c.dropdownNested)){b.addClass("dropdown-menu");var e=c.templateUrl;e&&(d.dropdownMenuTemplateUrl=e),d.dropdownMenu||(d.dropdownMenu=b)}}}}).directive("uibDropdownToggle",function(){return{require:"?^uibDropdown",link:function(a,b,c,d){if(d){b.addClass("dropdown-toggle"),d.toggleElement=b;var e=function(e){e.preventDefault(),b.hasClass("disabled")||c.disabled||a.$apply(function(){d.toggle()})};b.bind("click",e),b.attr({"aria-haspopup":!0,"aria-expanded":!1}),a.$watch(d.isOpen,function(a){b.attr("aria-expanded",!!a)}),a.$on("$destroy",function(){b.unbind("click",e)})}}}}),angular.module("ui.bootstrap.stackedMap",[]).factory("$$stackedMap",function(){return{createNew:function(){var a=[];return{add:function(b,c){a.push({key:b,value:c})},get:function(b){for(var c=0;c<a.length;c++)if(b===a[c].key)return a[c]},keys:function(){for(var b=[],c=0;c<a.length;c++)b.push(a[c].key);return b},top:function(){return a[a.length-1]},remove:function(b){for(var c=-1,d=0;d<a.length;d++)if(b===a[d].key){c=d;break}return a.splice(c,1)[0]},removeTop:function(){return a.splice(a.length-1,1)[0]},length:function(){return a.length}}}}}),angular.module("ui.bootstrap.modal",["ui.bootstrap.stackedMap","ui.bootstrap.position"]).factory("$$multiMap",function(){return{createNew:function(){var a={};return{entries:function(){return Object.keys(a).map(function(b){return{key:b,value:a[b]}})},get:function(b){return a[b]},hasKey:function(b){return!!a[b]},keys:function(){return Object.keys(a)},put:function(b,c){a[b]||(a[b]=[]),a[b].push(c)},remove:function(b,c){var d=a[b];if(d){var e=d.indexOf(c);-1!==e&&d.splice(e,1),d.length||delete a[b]}}}}}}).provider("$uibResolve",function(){var a=this;this.resolver=null,this.setResolver=function(a){this.resolver=a},this.$get=["$injector","$q",function(b,c){var d=a.resolver?b.get(a.resolver):null;return{resolve:function(a,e,f,g){if(d)return d.resolve(a,e,f,g);var h=[];return angular.forEach(a,function(a){angular.isFunction(a)||angular.isArray(a)?h.push(c.resolve(b.invoke(a))):angular.isString(a)?h.push(c.resolve(b.get(a))):h.push(c.resolve(a))}),c.all(h).then(function(b){var c={},d=0;return angular.forEach(a,function(a,e){c[e]=b[d++]}),c})}}}]}).directive("uibModalBackdrop",["$animate","$injector","$uibModalStack",function(a,b,c){function d(b,d,e){e.modalInClass&&(a.addClass(d,e.modalInClass),b.$on(c.NOW_CLOSING_EVENT,function(c,f){var g=f();b.modalOptions.animation?a.removeClass(d,e.modalInClass).then(g):g()}))}return{replace:!0,templateUrl:"uib/template/modal/backdrop.html",compile:function(a,b){return a.addClass(b.backdropClass),d}}}]).directive("uibModalWindow",["$uibModalStack","$q","$animateCss","$document",function(a,b,c,d){return{scope:{index:"@"},replace:!0,transclude:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/modal/window.html"},link:function(e,f,g){f.addClass(g.windowClass||""),f.addClass(g.windowTopClass||""),e.size=g.size,e.close=function(b){var c=a.getTop();c&&c.value.backdrop&&"static"!==c.value.backdrop&&b.target===b.currentTarget&&(b.preventDefault(),b.stopPropagation(),a.dismiss(c.key,"backdrop click"))},f.on("click",e.close),e.$isRendered=!0;var h=b.defer();g.$observe("modalRender",function(a){"true"===a&&h.resolve()}),h.promise.then(function(){var h=null;g.modalInClass&&(h=c(f,{addClass:g.modalInClass}).start(),e.$on(a.NOW_CLOSING_EVENT,function(a,b){var d=b();c(f,{removeClass:g.modalInClass}).start().then(d)})),b.when(h).then(function(){var b=a.getTop();if(b&&a.modalRendered(b.key),!d[0].activeElement||!f[0].contains(d[0].activeElement)){var c=f[0].querySelector("[autofocus]");c?c.focus():f[0].focus()}})})}}}]).directive("uibModalAnimationClass",function(){return{compile:function(a,b){b.modalAnimation&&a.addClass(b.uibModalAnimationClass)}}}).directive("uibModalTransclude",function(){return{link:function(a,b,c,d,e){e(a.$parent,function(a){b.empty(),b.append(a)})}}}).factory("$uibModalStack",["$animate","$animateCss","$document","$compile","$rootScope","$q","$$multiMap","$$stackedMap","$uibPosition",function(a,b,c,d,e,f,g,h,i){function j(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)}function k(){for(var a=-1,b=v.keys(),c=0;c<b.length;c++)v.get(b[c]).value.backdrop&&(a=c);return a>-1&&y>a&&(a=y),a}function l(a,b){var c=v.get(a).value,d=c.appendTo;v.remove(a),z=v.top(),z&&(y=parseInt(z.value.modalDomEl.attr("index"),10)),o(c.modalDomEl,c.modalScope,function(){var b=c.openedClass||u;w.remove(b,a);var e=w.hasKey(b);d.toggleClass(b,e),!e&&t&&t.heightOverflow&&t.scrollbarWidth&&(t.originalRight?d.css({paddingRight:t.originalRight+"px"}):d.css({paddingRight:""}),t=null),m(!0)},c.closedDeferred),n(),b&&b.focus?b.focus():d.focus&&d.focus()}function m(a){var b;v.length()>0&&(b=v.top().value,b.modalDomEl.toggleClass(b.windowTopClass||"",a))}function n(){if(r&&-1===k()){var a=s;o(r,s,function(){a=null}),r=void 0,s=void 0}}function o(b,c,d,e){function g(){g.done||(g.done=!0,a.leave(b).then(function(){b.remove(),e&&e.resolve()}),c.$destroy(),d&&d())}var h,i=null,j=function(){return h||(h=f.defer(),i=h.promise),function(){h.resolve()}};return c.$broadcast(x.NOW_CLOSING_EVENT,j),f.when(i).then(g)}function p(a){if(a.isDefaultPrevented())return a;var b=v.top();if(b)switch(a.which){case 27:b.value.keyboard&&(a.preventDefault(),e.$apply(function(){x.dismiss(b.key,"escape key press")}));break;case 9:var c=x.loadFocusElementList(b),d=!1;a.shiftKey?(x.isFocusInFirstItem(a,c)||x.isModalFocused(a,b))&&(d=x.focusLastFocusableElement(c)):x.isFocusInLastItem(a,c)&&(d=x.focusFirstFocusableElement(c)),d&&(a.preventDefault(),a.stopPropagation())}}function q(a,b,c){return!a.value.modalScope.$broadcast("modal.closing",b,c).defaultPrevented}var r,s,t,u="modal-open",v=h.createNew(),w=g.createNew(),x={NOW_CLOSING_EVENT:"modal.stack.now-closing"},y=0,z=null,A="a[href], area[href], input:not([disabled]), button:not([disabled]),select:not([disabled]), textarea:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable=true]";return e.$watch(k,function(a){s&&(s.index=a)}),c.on("keydown",p),e.$on("$destroy",function(){c.off("keydown",p)}),x.open=function(b,f){var g=c[0].activeElement,h=f.openedClass||u;m(!1),z=v.top(),v.add(b,{deferred:f.deferred,renderDeferred:f.renderDeferred,closedDeferred:f.closedDeferred,modalScope:f.scope,backdrop:f.backdrop,keyboard:f.keyboard,openedClass:f.openedClass,windowTopClass:f.windowTopClass,animation:f.animation,appendTo:f.appendTo}),w.put(h,b);var j=f.appendTo,l=k();if(!j.length)throw new Error("appendTo element not found. Make sure that the element passed is in DOM.");l>=0&&!r&&(s=e.$new(!0),s.modalOptions=f,s.index=l,r=angular.element('<div uib-modal-backdrop="modal-backdrop"></div>'),r.attr("backdrop-class",f.backdropClass),f.animation&&r.attr("modal-animation","true"),d(r)(s),a.enter(r,j),t=i.scrollbarPadding(j),t.heightOverflow&&t.scrollbarWidth&&j.css({paddingRight:t.right+"px"})),y=z?parseInt(z.value.modalDomEl.attr("index"),10)+1:0;var n=angular.element('<div uib-modal-window="modal-window"></div>');n.attr({"template-url":f.windowTemplateUrl,"window-class":f.windowClass,"window-top-class":f.windowTopClass,size:f.size,index:y,animate:"animate"}).html(f.content),f.animation&&n.attr("modal-animation","true"),j.addClass(h),a.enter(d(n)(f.scope),j),v.top().value.modalDomEl=n,v.top().value.modalOpener=g},x.close=function(a,b){var c=v.get(a);return c&&q(c,b,!0)?(c.value.modalScope.$$uibDestructionScheduled=!0,c.value.deferred.resolve(b),l(a,c.value.modalOpener),!0):!c},x.dismiss=function(a,b){var c=v.get(a);return c&&q(c,b,!1)?(c.value.modalScope.$$uibDestructionScheduled=!0,c.value.deferred.reject(b),l(a,c.value.modalOpener),!0):!c},x.dismissAll=function(a){for(var b=this.getTop();b&&this.dismiss(b.key,a);)b=this.getTop()},x.getTop=function(){return v.top()},x.modalRendered=function(a){var b=v.get(a);b&&b.value.renderDeferred.resolve()},x.focusFirstFocusableElement=function(a){return a.length>0?(a[0].focus(),!0):!1},x.focusLastFocusableElement=function(a){return a.length>0?(a[a.length-1].focus(),!0):!1},x.isModalFocused=function(a,b){if(a&&b){var c=b.value.modalDomEl;if(c&&c.length)return(a.target||a.srcElement)===c[0]}return!1},x.isFocusInFirstItem=function(a,b){return b.length>0?(a.target||a.srcElement)===b[0]:!1},x.isFocusInLastItem=function(a,b){return b.length>0?(a.target||a.srcElement)===b[b.length-1]:!1},x.loadFocusElementList=function(a){if(a){var b=a.value.modalDomEl;if(b&&b.length){var c=b[0].querySelectorAll(A);return c?Array.prototype.filter.call(c,function(a){return j(a)}):c}}},x}]).provider("$uibModal",function(){var a={options:{animation:!0,backdrop:!0,keyboard:!0},$get:["$rootScope","$q","$document","$templateRequest","$controller","$uibResolve","$uibModalStack",function(b,c,d,e,f,g,h){function i(a){return a.template?c.when(a.template):e(angular.isFunction(a.templateUrl)?a.templateUrl():a.templateUrl)}var j={},k=null;return j.getPromiseChain=function(){return k},j.open=function(e){function j(){return r}var l=c.defer(),m=c.defer(),n=c.defer(),o=c.defer(),p={result:l.promise,opened:m.promise,closed:n.promise,rendered:o.promise,close:function(a){return h.close(p,a)},dismiss:function(a){return h.dismiss(p,a)}};if(e=angular.extend({},a.options,e),e.resolve=e.resolve||{},e.appendTo=e.appendTo||d.find("body").eq(0),!e.template&&!e.templateUrl)throw new Error("One of template or templateUrl options is required.");var q,r=c.all([i(e),g.resolve(e.resolve,{},null,null)]);return q=k=c.all([k]).then(j,j).then(function(a){var c=e.scope||b,d=c.$new();d.$close=p.close,d.$dismiss=p.dismiss,d.$on("$destroy",function(){d.$$uibDestructionScheduled||d.$dismiss("$uibUnscheduledDestruction")});var g,i,j={};e.controller&&(j.$scope=d,j.$scope.$resolve={},j.$uibModalInstance=p,angular.forEach(a[1],function(a,b){j[b]=a,j.$scope.$resolve[b]=a}),i=f(e.controller,j,!0,e.controllerAs),e.controllerAs&&e.bindToController&&(g=i.instance,g.$close=d.$close,g.$dismiss=d.$dismiss,angular.extend(g,{$resolve:j.$scope.$resolve},c)),g=i(),angular.isFunction(g.$onInit)&&g.$onInit()),h.open(p,{scope:d,deferred:l,renderDeferred:o,closedDeferred:n,content:a[0],animation:e.animation,backdrop:e.backdrop,keyboard:e.keyboard,backdropClass:e.backdropClass,windowTopClass:e.windowTopClass,windowClass:e.windowClass,windowTemplateUrl:e.windowTemplateUrl,size:e.size,openedClass:e.openedClass,appendTo:e.appendTo}),m.resolve(!0)},function(a){m.reject(a),l.reject(a)})["finally"](function(){k===q&&(k=null)}),p},j}]};return a}),angular.module("ui.bootstrap.paging",[]).factory("uibPaging",["$parse",function(a){return{create:function(b,c,d){b.setNumPages=d.numPages?a(d.numPages).assign:angular.noop,b.ngModelCtrl={$setViewValue:angular.noop},b._watchers=[],b.init=function(a,e){b.ngModelCtrl=a,b.config=e,a.$render=function(){b.render()},d.itemsPerPage?b._watchers.push(c.$parent.$watch(d.itemsPerPage,function(a){b.itemsPerPage=parseInt(a,10),c.totalPages=b.calculateTotalPages(),b.updatePage()})):b.itemsPerPage=e.itemsPerPage,c.$watch("totalItems",function(a,d){(angular.isDefined(a)||a!==d)&&(c.totalPages=b.calculateTotalPages(),b.updatePage())})},b.calculateTotalPages=function(){var a=b.itemsPerPage<1?1:Math.ceil(c.totalItems/b.itemsPerPage);return Math.max(a||0,1)},b.render=function(){c.page=parseInt(b.ngModelCtrl.$viewValue,10)||1},c.selectPage=function(a,d){d&&d.preventDefault();var e=!c.ngDisabled||!d;e&&c.page!==a&&a>0&&a<=c.totalPages&&(d&&d.target&&d.target.blur(),b.ngModelCtrl.$setViewValue(a),b.ngModelCtrl.$render())},c.getText=function(a){return c[a+"Text"]||b.config[a+"Text"]},c.noPrevious=function(){return 1===c.page},c.noNext=function(){return c.page===c.totalPages},b.updatePage=function(){b.setNumPages(c.$parent,c.totalPages),c.page>c.totalPages?c.selectPage(c.totalPages):b.ngModelCtrl.$render()},c.$on("$destroy",function(){for(;b._watchers.length;)b._watchers.shift()()})}}}]),angular.module("ui.bootstrap.pager",["ui.bootstrap.paging"]).controller("UibPagerController",["$scope","$attrs","uibPaging","uibPagerConfig",function(a,b,c,d){a.align=angular.isDefined(b.align)?a.$parent.$eval(b.align):d.align,c.create(this,a,b)}]).constant("uibPagerConfig",{itemsPerPage:10,previousText:"« Previous",nextText:"Next »",align:!0}).directive("uibPager",["uibPagerConfig",function(a){return{scope:{totalItems:"=",previousText:"@",nextText:"@",ngDisabled:"="},require:["uibPager","?ngModel"],controller:"UibPagerController",controllerAs:"pager",templateUrl:function(a,b){return b.templateUrl||"uib/template/pager/pager.html"},replace:!0,link:function(b,c,d,e){var f=e[0],g=e[1];g&&f.init(g,a)}}}]),angular.module("ui.bootstrap.pagination",["ui.bootstrap.paging"]).controller("UibPaginationController",["$scope","$attrs","$parse","uibPaging","uibPaginationConfig",function(a,b,c,d,e){function f(a,b,c){return{number:a,text:b,active:c}}function g(a,b){var c=[],d=1,e=b,g=angular.isDefined(i)&&b>i;g&&(j?(d=Math.max(a-Math.floor(i/2),1),e=d+i-1,e>b&&(e=b,d=e-i+1)):(d=(Math.ceil(a/i)-1)*i+1,e=Math.min(d+i-1,b)));for(var h=d;e>=h;h++){var n=f(h,m(h),h===a);c.push(n)}if(g&&i>0&&(!j||k||l)){if(d>1){if(!l||d>3){var o=f(d-1,"...",!1);c.unshift(o)}if(l){if(3===d){var p=f(2,"2",!1);c.unshift(p)}var q=f(1,"1",!1);c.unshift(q)}}if(b>e){if(!l||b-2>e){var r=f(e+1,"...",!1);c.push(r)}if(l){if(e===b-2){var s=f(b-1,b-1,!1);c.push(s)}var t=f(b,b,!1);c.push(t)}}}return c}var h=this,i=angular.isDefined(b.maxSize)?a.$parent.$eval(b.maxSize):e.maxSize,j=angular.isDefined(b.rotate)?a.$parent.$eval(b.rotate):e.rotate,k=angular.isDefined(b.forceEllipses)?a.$parent.$eval(b.forceEllipses):e.forceEllipses,l=angular.isDefined(b.boundaryLinkNumbers)?a.$parent.$eval(b.boundaryLinkNumbers):e.boundaryLinkNumbers,m=angular.isDefined(b.pageLabel)?function(c){return a.$parent.$eval(b.pageLabel,{$page:c})}:angular.identity;a.boundaryLinks=angular.isDefined(b.boundaryLinks)?a.$parent.$eval(b.boundaryLinks):e.boundaryLinks,a.directionLinks=angular.isDefined(b.directionLinks)?a.$parent.$eval(b.directionLinks):e.directionLinks,d.create(this,a,b),b.maxSize&&h._watchers.push(a.$parent.$watch(c(b.maxSize),function(a){i=parseInt(a,10),h.render()}));var n=this.render;this.render=function(){n(),a.page>0&&a.page<=a.totalPages&&(a.pages=g(a.page,a.totalPages))}}]).constant("uibPaginationConfig",{itemsPerPage:10,boundaryLinks:!1,boundaryLinkNumbers:!1,directionLinks:!0,firstText:"First",previousText:"Previous",nextText:"Next",lastText:"Last",rotate:!0,forceEllipses:!1}).directive("uibPagination",["$parse","uibPaginationConfig",function(a,b){return{scope:{totalItems:"=",firstText:"@",previousText:"@",nextText:"@",lastText:"@",ngDisabled:"="},require:["uibPagination","?ngModel"],controller:"UibPaginationController",controllerAs:"pagination",templateUrl:function(a,b){return b.templateUrl||"uib/template/pagination/pagination.html"},replace:!0,link:function(a,c,d,e){var f=e[0],g=e[1];g&&f.init(g,b)}}}]),angular.module("ui.bootstrap.tooltip",["ui.bootstrap.position","ui.bootstrap.stackedMap"]).provider("$uibTooltip",function(){function a(a){var b=/[A-Z]/g,c="-";return a.replace(b,function(a,b){return(b?c:"")+a.toLowerCase()})}var b={placement:"top",placementClassPrefix:"",animation:!0,popupDelay:0,popupCloseDelay:0,useContentExp:!1},c={mouseenter:"mouseleave",click:"click",outsideClick:"outsideClick",focus:"blur",none:""},d={};this.options=function(a){angular.extend(d,a)},this.setTriggers=function(a){angular.extend(c,a)},this.$get=["$window","$compile","$timeout","$document","$uibPosition","$interpolate","$rootScope","$parse","$$stackedMap",function(e,f,g,h,i,j,k,l,m){function n(a){if(27===a.which){var b=o.top();b&&(b.value.close(),o.removeTop(),b=null)}}var o=m.createNew();return h.on("keypress",n),k.$on("$destroy",function(){h.off("keypress",n)}),function(e,k,m,n){function p(a){var b=(a||n.trigger||m).split(" "),d=b.map(function(a){
return c[a]||a});return{show:b,hide:d}}n=angular.extend({},b,d,n);var q=a(e),r=j.startSymbol(),s=j.endSymbol(),t="<div "+q+'-popup uib-title="'+r+"title"+s+'" '+(n.useContentExp?'content-exp="contentExp()" ':'content="'+r+"content"+s+'" ')+'placement="'+r+"placement"+s+'" popup-class="'+r+"popupClass"+s+'" animation="animation" is-open="isOpen" origin-scope="origScope" class="uib-position-measure"></div>';return{compile:function(a,b){var c=f(t);return function(a,b,d,f){function j(){N.isOpen?q():m()}function m(){M&&!a.$eval(d[k+"Enable"])||(u(),x(),N.popupDelay?G||(G=g(r,N.popupDelay,!1)):r())}function q(){s(),N.popupCloseDelay?H||(H=g(t,N.popupCloseDelay,!1)):t()}function r(){return s(),u(),N.content?(v(),void N.$evalAsync(function(){N.isOpen=!0,y(!0),S()})):angular.noop}function s(){G&&(g.cancel(G),G=null),I&&(g.cancel(I),I=null)}function t(){N&&N.$evalAsync(function(){N&&(N.isOpen=!1,y(!1),N.animation?F||(F=g(w,150,!1)):w())})}function u(){H&&(g.cancel(H),H=null),F&&(g.cancel(F),F=null)}function v(){D||(E=N.$new(),D=c(E,function(a){K?h.find("body").append(a):b.after(a)}),z())}function w(){s(),u(),A(),D&&(D.remove(),D=null),E&&(E.$destroy(),E=null)}function x(){N.title=d[k+"Title"],Q?N.content=Q(a):N.content=d[e],N.popupClass=d[k+"Class"],N.placement=angular.isDefined(d[k+"Placement"])?d[k+"Placement"]:n.placement;var b=i.parsePlacement(N.placement);J=b[1]?b[0]+"-"+b[1]:b[0];var c=parseInt(d[k+"PopupDelay"],10),f=parseInt(d[k+"PopupCloseDelay"],10);N.popupDelay=isNaN(c)?n.popupDelay:c,N.popupCloseDelay=isNaN(f)?n.popupCloseDelay:f}function y(b){P&&angular.isFunction(P.assign)&&P.assign(a,b)}function z(){R.length=0,Q?(R.push(a.$watch(Q,function(a){N.content=a,!a&&N.isOpen&&t()})),R.push(E.$watch(function(){O||(O=!0,E.$$postDigest(function(){O=!1,N&&N.isOpen&&S()}))}))):R.push(d.$observe(e,function(a){N.content=a,!a&&N.isOpen?t():S()})),R.push(d.$observe(k+"Title",function(a){N.title=a,N.isOpen&&S()})),R.push(d.$observe(k+"Placement",function(a){N.placement=a?a:n.placement,N.isOpen&&S()}))}function A(){R.length&&(angular.forEach(R,function(a){a()}),R.length=0)}function B(a){N&&N.isOpen&&D&&(b[0].contains(a.target)||D[0].contains(a.target)||q())}function C(){var a=d[k+"Trigger"];T(),L=p(a),"none"!==L.show&&L.show.forEach(function(a,c){"outsideClick"===a?(b.on("click",j),h.on("click",B)):a===L.hide[c]?b.on(a,j):a&&(b.on(a,m),b.on(L.hide[c],q)),b.on("keypress",function(a){27===a.which&&q()})})}var D,E,F,G,H,I,J,K=angular.isDefined(n.appendToBody)?n.appendToBody:!1,L=p(void 0),M=angular.isDefined(d[k+"Enable"]),N=a.$new(!0),O=!1,P=angular.isDefined(d[k+"IsOpen"])?l(d[k+"IsOpen"]):!1,Q=n.useContentExp?l(d[e]):!1,R=[],S=function(){D&&D.html()&&(I||(I=g(function(){var a=i.positionElements(b,D,N.placement,K);D.css({top:a.top+"px",left:a.left+"px"}),D.hasClass(a.placement.split("-")[0])||(D.removeClass(J.split("-")[0]),D.addClass(a.placement.split("-")[0])),D.hasClass(n.placementClassPrefix+a.placement)||(D.removeClass(n.placementClassPrefix+J),D.addClass(n.placementClassPrefix+a.placement)),D.hasClass("uib-position-measure")?(i.positionArrow(D,a.placement),D.removeClass("uib-position-measure")):J!==a.placement&&i.positionArrow(D,a.placement),J=a.placement,I=null},0,!1)))};N.origScope=a,N.isOpen=!1,o.add(N,{close:t}),N.contentExp=function(){return N.content},d.$observe("disabled",function(a){a&&s(),a&&N.isOpen&&t()}),P&&a.$watch(P,function(a){N&&!a===N.isOpen&&j()});var T=function(){L.show.forEach(function(a){"outsideClick"===a?b.off("click",j):(b.off(a,m),b.off(a,j))}),L.hide.forEach(function(a){"outsideClick"===a?h.off("click",B):b.off(a,q)})};C();var U=a.$eval(d[k+"Animation"]);N.animation=angular.isDefined(U)?!!U:n.animation;var V,W=k+"AppendToBody";V=W in d&&void 0===d[W]?!0:a.$eval(d[W]),K=angular.isDefined(V)?V:K,a.$on("$destroy",function(){T(),w(),o.remove(N),N=null})}}}}}]}).directive("uibTooltipTemplateTransclude",["$animate","$sce","$compile","$templateRequest",function(a,b,c,d){return{link:function(e,f,g){var h,i,j,k=e.$eval(g.tooltipTemplateTranscludeScope),l=0,m=function(){i&&(i.remove(),i=null),h&&(h.$destroy(),h=null),j&&(a.leave(j).then(function(){i=null}),i=j,j=null)};e.$watch(b.parseAsResourceUrl(g.uibTooltipTemplateTransclude),function(b){var g=++l;b?(d(b,!0).then(function(d){if(g===l){var e=k.$new(),i=d,n=c(i)(e,function(b){m(),a.enter(b,f)});h=e,j=n,h.$emit("$includeContentLoaded",b)}},function(){g===l&&(m(),e.$emit("$includeContentError",b))}),e.$emit("$includeContentRequested",b)):m()}),e.$on("$destroy",m)}}}]).directive("uibTooltipClasses",["$uibPosition",function(a){return{restrict:"A",link:function(b,c,d){if(b.placement){var e=a.parsePlacement(b.placement);c.addClass(e[0])}b.popupClass&&c.addClass(b.popupClass),b.animation()&&c.addClass(d.tooltipAnimationClass)}}}]).directive("uibTooltipPopup",function(){return{replace:!0,scope:{content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"uib/template/tooltip/tooltip-popup.html"}}).directive("uibTooltip",["$uibTooltip",function(a){return a("uibTooltip","tooltip","mouseenter")}]).directive("uibTooltipTemplatePopup",function(){return{replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"uib/template/tooltip/tooltip-template-popup.html"}}).directive("uibTooltipTemplate",["$uibTooltip",function(a){return a("uibTooltipTemplate","tooltip","mouseenter",{useContentExp:!0})}]).directive("uibTooltipHtmlPopup",function(){return{replace:!0,scope:{contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"uib/template/tooltip/tooltip-html-popup.html"}}).directive("uibTooltipHtml",["$uibTooltip",function(a){return a("uibTooltipHtml","tooltip","mouseenter",{useContentExp:!0})}]),angular.module("ui.bootstrap.popover",["ui.bootstrap.tooltip"]).directive("uibPopoverTemplatePopup",function(){return{replace:!0,scope:{uibTitle:"@",contentExp:"&",placement:"@",popupClass:"@",animation:"&",isOpen:"&",originScope:"&"},templateUrl:"uib/template/popover/popover-template.html"}}).directive("uibPopoverTemplate",["$uibTooltip",function(a){return a("uibPopoverTemplate","popover","click",{useContentExp:!0})}]).directive("uibPopoverHtmlPopup",function(){return{replace:!0,scope:{contentExp:"&",uibTitle:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"uib/template/popover/popover-html.html"}}).directive("uibPopoverHtml",["$uibTooltip",function(a){return a("uibPopoverHtml","popover","click",{useContentExp:!0})}]).directive("uibPopoverPopup",function(){return{replace:!0,scope:{uibTitle:"@",content:"@",placement:"@",popupClass:"@",animation:"&",isOpen:"&"},templateUrl:"uib/template/popover/popover.html"}}).directive("uibPopover",["$uibTooltip",function(a){return a("uibPopover","popover","click")}]),angular.module("ui.bootstrap.progressbar",[]).constant("uibProgressConfig",{animate:!0,max:100}).controller("UibProgressController",["$scope","$attrs","uibProgressConfig",function(a,b,c){function d(){return angular.isDefined(a.maxParam)?a.maxParam:c.max}var e=this,f=angular.isDefined(b.animate)?a.$parent.$eval(b.animate):c.animate;this.bars=[],a.max=d(),this.addBar=function(a,b,c){f||b.css({transition:"none"}),this.bars.push(a),a.max=d(),a.title=c&&angular.isDefined(c.title)?c.title:"progressbar",a.$watch("value",function(b){a.recalculatePercentage()}),a.recalculatePercentage=function(){var b=e.bars.reduce(function(a,b){return b.percent=+(100*b.value/b.max).toFixed(2),a+b.percent},0);b>100&&(a.percent-=b-100)},a.$on("$destroy",function(){b=null,e.removeBar(a)})},this.removeBar=function(a){this.bars.splice(this.bars.indexOf(a),1),this.bars.forEach(function(a){a.recalculatePercentage()})},a.$watch("maxParam",function(a){e.bars.forEach(function(a){a.max=d(),a.recalculatePercentage()})})}]).directive("uibProgress",function(){return{replace:!0,transclude:!0,controller:"UibProgressController",require:"uibProgress",scope:{maxParam:"=?max"},templateUrl:"uib/template/progressbar/progress.html"}}).directive("uibBar",function(){return{replace:!0,transclude:!0,require:"^uibProgress",scope:{value:"=",type:"@"},templateUrl:"uib/template/progressbar/bar.html",link:function(a,b,c,d){d.addBar(a,b,c)}}}).directive("uibProgressbar",function(){return{replace:!0,transclude:!0,controller:"UibProgressController",scope:{value:"=",maxParam:"=?max",type:"@"},templateUrl:"uib/template/progressbar/progressbar.html",link:function(a,b,c,d){d.addBar(a,angular.element(b.children()[0]),{title:c.title})}}}),angular.module("ui.bootstrap.rating",[]).constant("uibRatingConfig",{max:5,stateOn:null,stateOff:null,enableReset:!0,titles:["one","two","three","four","five"]}).controller("UibRatingController",["$scope","$attrs","uibRatingConfig",function(a,b,c){var d={$setViewValue:angular.noop},e=this;this.init=function(e){d=e,d.$render=this.render,d.$formatters.push(function(a){return angular.isNumber(a)&&a<<0!==a&&(a=Math.round(a)),a}),this.stateOn=angular.isDefined(b.stateOn)?a.$parent.$eval(b.stateOn):c.stateOn,this.stateOff=angular.isDefined(b.stateOff)?a.$parent.$eval(b.stateOff):c.stateOff,this.enableReset=angular.isDefined(b.enableReset)?a.$parent.$eval(b.enableReset):c.enableReset;var f=angular.isDefined(b.titles)?a.$parent.$eval(b.titles):c.titles;this.titles=angular.isArray(f)&&f.length>0?f:c.titles;var g=angular.isDefined(b.ratingStates)?a.$parent.$eval(b.ratingStates):new Array(angular.isDefined(b.max)?a.$parent.$eval(b.max):c.max);a.range=this.buildTemplateObjects(g)},this.buildTemplateObjects=function(a){for(var b=0,c=a.length;c>b;b++)a[b]=angular.extend({index:b},{stateOn:this.stateOn,stateOff:this.stateOff,title:this.getTitle(b)},a[b]);return a},this.getTitle=function(a){return a>=this.titles.length?a+1:this.titles[a]},a.rate=function(b){if(!a.readonly&&b>=0&&b<=a.range.length){var c=e.enableReset&&d.$viewValue===b?0:b;d.$setViewValue(c),d.$render()}},a.enter=function(b){a.readonly||(a.value=b),a.onHover({value:b})},a.reset=function(){a.value=d.$viewValue,a.onLeave()},a.onKeydown=function(b){/(37|38|39|40)/.test(b.which)&&(b.preventDefault(),b.stopPropagation(),a.rate(a.value+(38===b.which||39===b.which?1:-1)))},this.render=function(){a.value=d.$viewValue,a.title=e.getTitle(a.value-1)}}]).directive("uibRating",function(){return{require:["uibRating","ngModel"],scope:{readonly:"=?readOnly",onHover:"&",onLeave:"&"},controller:"UibRatingController",templateUrl:"uib/template/rating/rating.html",replace:!0,link:function(a,b,c,d){var e=d[0],f=d[1];e.init(f)}}}),angular.module("ui.bootstrap.tabs",[]).controller("UibTabsetController",["$scope",function(a){function b(a){for(var b=0;b<d.tabs.length;b++)if(d.tabs[b].index===a)return b}var c,d=this;d.tabs=[],d.select=function(a,f){if(!e){var g=b(c),h=d.tabs[g];if(h){if(h.tab.onDeselect({$event:f,$selectedIndex:a}),f&&f.isDefaultPrevented())return;h.tab.active=!1}var i=d.tabs[a];i?(i.tab.onSelect({$event:f}),i.tab.active=!0,d.active=i.index,c=i.index):!i&&angular.isDefined(c)&&(d.active=null,c=null)}},d.addTab=function(a){if(d.tabs.push({tab:a,index:a.index}),d.tabs.sort(function(a,b){return a.index>b.index?1:a.index<b.index?-1:0}),a.index===d.active||!angular.isDefined(d.active)&&1===d.tabs.length){var c=b(a.index);d.select(c)}},d.removeTab=function(a){for(var b,c=0;c<d.tabs.length;c++)if(d.tabs[c].tab===a){b=c;break}if(d.tabs[b].index===d.active){var e=b===d.tabs.length-1?b-1:b+1%d.tabs.length;d.select(e)}d.tabs.splice(b,1)},a.$watch("tabset.active",function(a){angular.isDefined(a)&&a!==c&&d.select(b(a))});var e;a.$on("$destroy",function(){e=!0})}]).directive("uibTabset",function(){return{transclude:!0,replace:!0,scope:{},bindToController:{active:"=?",type:"@"},controller:"UibTabsetController",controllerAs:"tabset",templateUrl:function(a,b){return b.templateUrl||"uib/template/tabs/tabset.html"},link:function(a,b,c){a.vertical=angular.isDefined(c.vertical)?a.$parent.$eval(c.vertical):!1,a.justified=angular.isDefined(c.justified)?a.$parent.$eval(c.justified):!1}}}).directive("uibTab",["$parse",function(a){return{require:"^uibTabset",replace:!0,templateUrl:function(a,b){return b.templateUrl||"uib/template/tabs/tab.html"},transclude:!0,scope:{heading:"@",index:"=?",classes:"@?",onSelect:"&select",onDeselect:"&deselect"},controller:function(){},controllerAs:"tab",link:function(b,c,d,e,f){b.disabled=!1,d.disable&&b.$parent.$watch(a(d.disable),function(a){b.disabled=!!a}),angular.isUndefined(d.index)&&(e.tabs&&e.tabs.length?b.index=Math.max.apply(null,e.tabs.map(function(a){return a.index}))+1:b.index=0),angular.isUndefined(d.classes)&&(b.classes=""),b.select=function(a){if(!b.disabled){for(var c,d=0;d<e.tabs.length;d++)if(e.tabs[d].tab===b){c=d;break}e.select(c,a)}},e.addTab(b),b.$on("$destroy",function(){e.removeTab(b)}),b.$transcludeFn=f}}}]).directive("uibTabHeadingTransclude",function(){return{restrict:"A",require:"^uibTab",link:function(a,b){a.$watch("headingElement",function(a){a&&(b.html(""),b.append(a))})}}}).directive("uibTabContentTransclude",function(){function a(a){return a.tagName&&(a.hasAttribute("uib-tab-heading")||a.hasAttribute("data-uib-tab-heading")||a.hasAttribute("x-uib-tab-heading")||"uib-tab-heading"===a.tagName.toLowerCase()||"data-uib-tab-heading"===a.tagName.toLowerCase()||"x-uib-tab-heading"===a.tagName.toLowerCase()||"uib:tab-heading"===a.tagName.toLowerCase())}return{restrict:"A",require:"^uibTabset",link:function(b,c,d){var e=b.$eval(d.uibTabContentTransclude).tab;e.$transcludeFn(e.$parent,function(b){angular.forEach(b,function(b){a(b)?e.headingElement=b:c.append(b)})})}}}),angular.module("ui.bootstrap.timepicker",[]).constant("uibTimepickerConfig",{hourStep:1,minuteStep:1,secondStep:1,showMeridian:!0,showSeconds:!1,meridians:null,readonlyInput:!1,mousewheel:!0,arrowkeys:!0,showSpinners:!0,templateUrl:"uib/template/timepicker/timepicker.html"}).controller("UibTimepickerController",["$scope","$element","$attrs","$parse","$log","$locale","uibTimepickerConfig",function(a,b,c,d,e,f,g){function h(){var b=+a.hours,c=a.showMeridian?b>0&&13>b:b>=0&&24>b;return c&&""!==a.hours?(a.showMeridian&&(12===b&&(b=0),a.meridian===v[1]&&(b+=12)),b):void 0}function i(){var b=+a.minutes,c=b>=0&&60>b;return c&&""!==a.minutes?b:void 0}function j(){var b=+a.seconds;return b>=0&&60>b?b:void 0}function k(a,b){return null===a?"":angular.isDefined(a)&&a.toString().length<2&&!b?"0"+a:a.toString()}function l(a){m(),u.$setViewValue(new Date(s)),n(a)}function m(){u.$setValidity("time",!0),a.invalidHours=!1,a.invalidMinutes=!1,a.invalidSeconds=!1}function n(b){if(u.$modelValue){var c=s.getHours(),d=s.getMinutes(),e=s.getSeconds();a.showMeridian&&(c=0===c||12===c?12:c%12),a.hours="h"===b?c:k(c,!w),"m"!==b&&(a.minutes=k(d)),a.meridian=s.getHours()<12?v[0]:v[1],"s"!==b&&(a.seconds=k(e)),a.meridian=s.getHours()<12?v[0]:v[1]}else a.hours=null,a.minutes=null,a.seconds=null,a.meridian=v[0]}function o(a){s=q(s,a),l()}function p(a,b){return q(a,60*b)}function q(a,b){var c=new Date(a.getTime()+1e3*b),d=new Date(a);return d.setHours(c.getHours(),c.getMinutes(),c.getSeconds()),d}function r(){return(null===a.hours||""===a.hours)&&(null===a.minutes||""===a.minutes)&&(!a.showSeconds||a.showSeconds&&(null===a.seconds||""===a.seconds))}var s=new Date,t=[],u={$setViewValue:angular.noop},v=angular.isDefined(c.meridians)?a.$parent.$eval(c.meridians):g.meridians||f.DATETIME_FORMATS.AMPMS,w=angular.isDefined(c.padHours)?a.$parent.$eval(c.padHours):!0;a.tabindex=angular.isDefined(c.tabindex)?c.tabindex:0,b.removeAttr("tabindex"),this.init=function(b,d){u=b,u.$render=this.render,u.$formatters.unshift(function(a){return a?new Date(a):null});var e=d.eq(0),f=d.eq(1),h=d.eq(2),i=angular.isDefined(c.mousewheel)?a.$parent.$eval(c.mousewheel):g.mousewheel;i&&this.setupMousewheelEvents(e,f,h);var j=angular.isDefined(c.arrowkeys)?a.$parent.$eval(c.arrowkeys):g.arrowkeys;j&&this.setupArrowkeyEvents(e,f,h),a.readonlyInput=angular.isDefined(c.readonlyInput)?a.$parent.$eval(c.readonlyInput):g.readonlyInput,this.setupInputEvents(e,f,h)};var x=g.hourStep;c.hourStep&&t.push(a.$parent.$watch(d(c.hourStep),function(a){x=+a}));var y=g.minuteStep;c.minuteStep&&t.push(a.$parent.$watch(d(c.minuteStep),function(a){y=+a}));var z;t.push(a.$parent.$watch(d(c.min),function(a){var b=new Date(a);z=isNaN(b)?void 0:b}));var A;t.push(a.$parent.$watch(d(c.max),function(a){var b=new Date(a);A=isNaN(b)?void 0:b}));var B=!1;c.ngDisabled&&t.push(a.$parent.$watch(d(c.ngDisabled),function(a){B=a})),a.noIncrementHours=function(){var a=p(s,60*x);return B||a>A||s>a&&z>a},a.noDecrementHours=function(){var a=p(s,60*-x);return B||z>a||a>s&&a>A},a.noIncrementMinutes=function(){var a=p(s,y);return B||a>A||s>a&&z>a},a.noDecrementMinutes=function(){var a=p(s,-y);return B||z>a||a>s&&a>A},a.noIncrementSeconds=function(){var a=q(s,C);return B||a>A||s>a&&z>a},a.noDecrementSeconds=function(){var a=q(s,-C);return B||z>a||a>s&&a>A},a.noToggleMeridian=function(){return s.getHours()<12?B||p(s,720)>A:B||p(s,-720)<z};var C=g.secondStep;c.secondStep&&t.push(a.$parent.$watch(d(c.secondStep),function(a){C=+a})),a.showSeconds=g.showSeconds,c.showSeconds&&t.push(a.$parent.$watch(d(c.showSeconds),function(b){a.showSeconds=!!b})),a.showMeridian=g.showMeridian,c.showMeridian&&t.push(a.$parent.$watch(d(c.showMeridian),function(b){if(a.showMeridian=!!b,u.$error.time){var c=h(),d=i();angular.isDefined(c)&&angular.isDefined(d)&&(s.setHours(c),l())}else n()})),this.setupMousewheelEvents=function(b,c,d){var e=function(a){a.originalEvent&&(a=a.originalEvent);var b=a.wheelDelta?a.wheelDelta:-a.deltaY;return a.detail||b>0};b.bind("mousewheel wheel",function(b){B||a.$apply(e(b)?a.incrementHours():a.decrementHours()),b.preventDefault()}),c.bind("mousewheel wheel",function(b){B||a.$apply(e(b)?a.incrementMinutes():a.decrementMinutes()),b.preventDefault()}),d.bind("mousewheel wheel",function(b){B||a.$apply(e(b)?a.incrementSeconds():a.decrementSeconds()),b.preventDefault()})},this.setupArrowkeyEvents=function(b,c,d){b.bind("keydown",function(b){B||(38===b.which?(b.preventDefault(),a.incrementHours(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementHours(),a.$apply()))}),c.bind("keydown",function(b){B||(38===b.which?(b.preventDefault(),a.incrementMinutes(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementMinutes(),a.$apply()))}),d.bind("keydown",function(b){B||(38===b.which?(b.preventDefault(),a.incrementSeconds(),a.$apply()):40===b.which&&(b.preventDefault(),a.decrementSeconds(),a.$apply()))})},this.setupInputEvents=function(b,c,d){if(a.readonlyInput)return a.updateHours=angular.noop,a.updateMinutes=angular.noop,void(a.updateSeconds=angular.noop);var e=function(b,c,d){u.$setViewValue(null),u.$setValidity("time",!1),angular.isDefined(b)&&(a.invalidHours=b),angular.isDefined(c)&&(a.invalidMinutes=c),angular.isDefined(d)&&(a.invalidSeconds=d)};a.updateHours=function(){var a=h(),b=i();u.$setDirty(),angular.isDefined(a)&&angular.isDefined(b)?(s.setHours(a),s.setMinutes(b),z>s||s>A?e(!0):l("h")):e(!0)},b.bind("blur",function(b){u.$setTouched(),r()?m():null===a.hours||""===a.hours?e(!0):!a.invalidHours&&a.hours<10&&a.$apply(function(){a.hours=k(a.hours,!w)})}),a.updateMinutes=function(){var a=i(),b=h();u.$setDirty(),angular.isDefined(a)&&angular.isDefined(b)?(s.setHours(b),s.setMinutes(a),z>s||s>A?e(void 0,!0):l("m")):e(void 0,!0)},c.bind("blur",function(b){u.$setTouched(),r()?m():null===a.minutes?e(void 0,!0):!a.invalidMinutes&&a.minutes<10&&a.$apply(function(){a.minutes=k(a.minutes)})}),a.updateSeconds=function(){var a=j();u.$setDirty(),angular.isDefined(a)?(s.setSeconds(a),l("s")):e(void 0,void 0,!0)},d.bind("blur",function(b){r()?m():!a.invalidSeconds&&a.seconds<10&&a.$apply(function(){a.seconds=k(a.seconds)})})},this.render=function(){var b=u.$viewValue;isNaN(b)?(u.$setValidity("time",!1),e.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')):(b&&(s=b),z>s||s>A?(u.$setValidity("time",!1),a.invalidHours=!0,a.invalidMinutes=!0):m(),n())},a.showSpinners=angular.isDefined(c.showSpinners)?a.$parent.$eval(c.showSpinners):g.showSpinners,a.incrementHours=function(){a.noIncrementHours()||o(60*x*60)},a.decrementHours=function(){a.noDecrementHours()||o(60*-x*60)},a.incrementMinutes=function(){a.noIncrementMinutes()||o(60*y)},a.decrementMinutes=function(){a.noDecrementMinutes()||o(60*-y)},a.incrementSeconds=function(){a.noIncrementSeconds()||o(C)},a.decrementSeconds=function(){a.noDecrementSeconds()||o(-C)},a.toggleMeridian=function(){var b=i(),c=h();a.noToggleMeridian()||(angular.isDefined(b)&&angular.isDefined(c)?o(720*(s.getHours()<12?60:-60)):a.meridian=a.meridian===v[0]?v[1]:v[0])},a.blur=function(){u.$setTouched()},a.$on("$destroy",function(){for(;t.length;)t.shift()()})}]).directive("uibTimepicker",["uibTimepickerConfig",function(a){return{require:["uibTimepicker","?^ngModel"],controller:"UibTimepickerController",controllerAs:"timepicker",replace:!0,scope:{},templateUrl:function(b,c){return c.templateUrl||a.templateUrl},link:function(a,b,c,d){var e=d[0],f=d[1];f&&e.init(f,b.find("input"))}}}]),angular.module("ui.bootstrap.typeahead",["ui.bootstrap.debounce","ui.bootstrap.position"]).factory("uibTypeaheadParser",["$parse",function(a){var b=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;return{parse:function(c){var d=c.match(b);if(!d)throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "'+c+'".');return{itemName:d[3],source:a(d[4]),viewMapper:a(d[2]||d[1]),modelMapper:a(d[1])}}}}]).controller("UibTypeaheadController",["$scope","$element","$attrs","$compile","$parse","$q","$timeout","$document","$window","$rootScope","$$debounce","$uibPosition","uibTypeaheadParser",function(a,b,c,d,e,f,g,h,i,j,k,l,m){function n(){O.moveInProgress||(O.moveInProgress=!0,O.$digest()),Z()}function o(){O.position=E?l.offset(b):l.position(b),O.position.top+=b.prop("offsetHeight")}var p,q,r=[9,13,27,38,40],s=200,t=a.$eval(c.typeaheadMinLength);t||0===t||(t=1),a.$watch(c.typeaheadMinLength,function(a){t=a||0===a?a:1});var u=a.$eval(c.typeaheadWaitMs)||0,v=a.$eval(c.typeaheadEditable)!==!1;a.$watch(c.typeaheadEditable,function(a){v=a!==!1});var w,x,y=e(c.typeaheadLoading).assign||angular.noop,z=c.typeaheadShouldSelect?e(c.typeaheadShouldSelect):function(a,b){var c=b.$event;return 13===c.which||9===c.which},A=e(c.typeaheadOnSelect),B=angular.isDefined(c.typeaheadSelectOnBlur)?a.$eval(c.typeaheadSelectOnBlur):!1,C=e(c.typeaheadNoResults).assign||angular.noop,D=c.typeaheadInputFormatter?e(c.typeaheadInputFormatter):void 0,E=c.typeaheadAppendToBody?a.$eval(c.typeaheadAppendToBody):!1,F=c.typeaheadAppendTo?a.$eval(c.typeaheadAppendTo):null,G=a.$eval(c.typeaheadFocusFirst)!==!1,H=c.typeaheadSelectOnExact?a.$eval(c.typeaheadSelectOnExact):!1,I=e(c.typeaheadIsOpen).assign||angular.noop,J=a.$eval(c.typeaheadShowHint)||!1,K=e(c.ngModel),L=e(c.ngModel+"($$$p)"),M=function(b,c){return angular.isFunction(K(a))&&q&&q.$options&&q.$options.getterSetter?L(b,{$$$p:c}):K.assign(b,c)},N=m.parse(c.uibTypeahead),O=a.$new(),P=a.$on("$destroy",function(){O.$destroy()});O.$on("$destroy",P);var Q="typeahead-"+O.$id+"-"+Math.floor(1e4*Math.random());b.attr({"aria-autocomplete":"list","aria-expanded":!1,"aria-owns":Q});var R,S;J&&(R=angular.element("<div></div>"),R.css("position","relative"),b.after(R),S=b.clone(),S.attr("placeholder",""),S.attr("tabindex","-1"),S.val(""),S.css({position:"absolute",top:"0px",left:"0px","border-color":"transparent","box-shadow":"none",opacity:1,background:"none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255)",color:"#999"}),b.css({position:"relative","vertical-align":"top","background-color":"transparent"}),R.append(S),S.after(b));var T=angular.element("<div uib-typeahead-popup></div>");T.attr({id:Q,matches:"matches",active:"activeIdx",select:"select(activeIdx, evt)","move-in-progress":"moveInProgress",query:"query",position:"position","assign-is-open":"assignIsOpen(isOpen)",debounce:"debounceUpdate"}),angular.isDefined(c.typeaheadTemplateUrl)&&T.attr("template-url",c.typeaheadTemplateUrl),angular.isDefined(c.typeaheadPopupTemplateUrl)&&T.attr("popup-template-url",c.typeaheadPopupTemplateUrl);var U=function(){J&&S.val("")},V=function(){O.matches=[],O.activeIdx=-1,b.attr("aria-expanded",!1),U()},W=function(a){return Q+"-option-"+a};O.$watch("activeIdx",function(a){0>a?b.removeAttr("aria-activedescendant"):b.attr("aria-activedescendant",W(a))});var X=function(a,b){return O.matches.length>b&&a?a.toUpperCase()===O.matches[b].label.toUpperCase():!1},Y=function(c,d){var e={$viewValue:c};y(a,!0),C(a,!1),f.when(N.source(a,e)).then(function(f){var g=c===p.$viewValue;if(g&&w)if(f&&f.length>0){O.activeIdx=G?0:-1,C(a,!1),O.matches.length=0;for(var h=0;h<f.length;h++)e[N.itemName]=f[h],O.matches.push({id:W(h),label:N.viewMapper(O,e),model:f[h]});if(O.query=c,o(),b.attr("aria-expanded",!0),H&&1===O.matches.length&&X(c,0)&&(angular.isNumber(O.debounceUpdate)||angular.isObject(O.debounceUpdate)?k(function(){O.select(0,d)},angular.isNumber(O.debounceUpdate)?O.debounceUpdate:O.debounceUpdate["default"]):O.select(0,d)),J){var i=O.matches[0].label;angular.isString(c)&&c.length>0&&i.slice(0,c.length).toUpperCase()===c.toUpperCase()?S.val(c+i.slice(c.length)):S.val("")}}else V(),C(a,!0);g&&y(a,!1)},function(){V(),y(a,!1),C(a,!0)})};E&&(angular.element(i).on("resize",n),h.find("body").on("scroll",n));var Z=k(function(){O.matches.length&&o(),O.moveInProgress=!1},s);O.moveInProgress=!1,O.query=void 0;var $,_=function(a){$=g(function(){Y(a)},u)},aa=function(){$&&g.cancel($)};V(),O.assignIsOpen=function(b){I(a,b)},O.select=function(d,e){var f,h,i={};x=!0,i[N.itemName]=h=O.matches[d].model,f=N.modelMapper(a,i),M(a,f),p.$setValidity("editable",!0),p.$setValidity("parse",!0),A(a,{$item:h,$model:f,$label:N.viewMapper(a,i),$event:e}),V(),O.$eval(c.typeaheadFocusOnSelect)!==!1&&g(function(){b[0].focus()},0,!1)},b.on("keydown",function(b){if(0!==O.matches.length&&-1!==r.indexOf(b.which)){var c=z(a,{$event:b});if(-1===O.activeIdx&&c||9===b.which&&b.shiftKey)return V(),void O.$digest();b.preventDefault();var d;switch(b.which){case 27:b.stopPropagation(),V(),a.$digest();break;case 38:O.activeIdx=(O.activeIdx>0?O.activeIdx:O.matches.length)-1,O.$digest(),d=T.find("li")[O.activeIdx],d.parentNode.scrollTop=d.offsetTop;break;case 40:O.activeIdx=(O.activeIdx+1)%O.matches.length,O.$digest(),d=T.find("li")[O.activeIdx],d.parentNode.scrollTop=d.offsetTop;break;default:c&&O.$apply(function(){angular.isNumber(O.debounceUpdate)||angular.isObject(O.debounceUpdate)?k(function(){O.select(O.activeIdx,b)},angular.isNumber(O.debounceUpdate)?O.debounceUpdate:O.debounceUpdate["default"]):O.select(O.activeIdx,b)})}}}),b.bind("focus",function(a){w=!0,0!==t||p.$viewValue||g(function(){Y(p.$viewValue,a)},0)}),b.bind("blur",function(a){B&&O.matches.length&&-1!==O.activeIdx&&!x&&(x=!0,O.$apply(function(){angular.isObject(O.debounceUpdate)&&angular.isNumber(O.debounceUpdate.blur)?k(function(){O.select(O.activeIdx,a)},O.debounceUpdate.blur):O.select(O.activeIdx,a)})),!v&&p.$error.editable&&(p.$setViewValue(),p.$setValidity("editable",!0),p.$setValidity("parse",!0),b.val("")),w=!1,x=!1});var ba=function(c){b[0]!==c.target&&3!==c.which&&0!==O.matches.length&&(V(),j.$$phase||a.$digest())};h.on("click",ba),a.$on("$destroy",function(){h.off("click",ba),(E||F)&&ca.remove(),E&&(angular.element(i).off("resize",n),h.find("body").off("scroll",n)),T.remove(),J&&R.remove()});var ca=d(T)(O);E?h.find("body").append(ca):F?angular.element(F).eq(0).append(ca):b.after(ca),this.init=function(b,c){p=b,q=c,O.debounceUpdate=p.$options&&e(p.$options.debounce)(a),p.$parsers.unshift(function(b){return w=!0,0===t||b&&b.length>=t?u>0?(aa(),_(b)):Y(b):(y(a,!1),aa(),V()),v?b:b?void p.$setValidity("editable",!1):(p.$setValidity("editable",!0),null)}),p.$formatters.push(function(b){var c,d,e={};return v||p.$setValidity("editable",!0),D?(e.$model=b,D(a,e)):(e[N.itemName]=b,c=N.viewMapper(a,e),e[N.itemName]=void 0,d=N.viewMapper(a,e),c!==d?c:b)})}}]).directive("uibTypeahead",function(){return{controller:"UibTypeaheadController",require:["ngModel","^?ngModelOptions","uibTypeahead"],link:function(a,b,c,d){d[2].init(d[0],d[1])}}}).directive("uibTypeaheadPopup",["$$debounce",function(a){return{scope:{matches:"=",query:"=",active:"=",position:"&",moveInProgress:"=",select:"&",assignIsOpen:"&",debounce:"&"},replace:!0,templateUrl:function(a,b){return b.popupTemplateUrl||"uib/template/typeahead/typeahead-popup.html"},link:function(b,c,d){b.templateUrl=d.templateUrl,b.isOpen=function(){var a=b.matches.length>0;return b.assignIsOpen({isOpen:a}),a},b.isActive=function(a){return b.active===a},b.selectActive=function(a){b.active=a},b.selectMatch=function(c,d){var e=b.debounce();angular.isNumber(e)||angular.isObject(e)?a(function(){b.select({activeIdx:c,evt:d})},angular.isNumber(e)?e:e["default"]):b.select({activeIdx:c,evt:d})}}}}]).directive("uibTypeaheadMatch",["$templateRequest","$compile","$parse",function(a,b,c){return{scope:{index:"=",match:"=",query:"="},link:function(d,e,f){var g=c(f.templateUrl)(d.$parent)||"uib/template/typeahead/typeahead-match.html";a(g).then(function(a){var c=angular.element(a.trim());e.replaceWith(c),b(c)(d)})}}}]).filter("uibTypeaheadHighlight",["$sce","$injector","$log",function(a,b,c){function d(a){return a.replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")}function e(a){return/<.*>/g.test(a)}var f;return f=b.has("$sanitize"),function(b,g){return!f&&e(b)&&c.warn("Unsafe use of typeahead please use ngSanitize"),b=g?(""+b).replace(new RegExp(d(g),"gi"),"<strong>$&</strong>"):b,f||(b=a.trustAsHtml(b)),b}}]),angular.module("uib/template/accordion/accordion-group.html",[]).run(["$templateCache",function(a){a.put("uib/template/accordion/accordion-group.html",'<div class="panel" ng-class="panelClass || \'panel-default\'">\n  <div role="tab" id="{{::headingId}}" aria-selected="{{isOpen}}" class="panel-heading" ng-keypress="toggleOpen($event)">\n    <h4 class="panel-title">\n      <a role="button" data-toggle="collapse" href aria-expanded="{{isOpen}}" aria-controls="{{::panelId}}" tabindex="0" class="accordion-toggle" ng-click="toggleOpen()" uib-accordion-transclude="heading"><span uib-accordion-header ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div id="{{::panelId}}" aria-labelledby="{{::headingId}}" aria-hidden="{{!isOpen}}" role="tabpanel" class="panel-collapse collapse" uib-collapse="!isOpen">\n    <div class="panel-body" ng-transclude></div>\n  </div>\n</div>\n')}]),angular.module("uib/template/accordion/accordion.html",[]).run(["$templateCache",function(a){a.put("uib/template/accordion/accordion.html",'<div role="tablist" class="panel-group" ng-transclude></div>')}]),angular.module("uib/template/alert/alert.html",[]).run(["$templateCache",function(a){a.put("uib/template/alert/alert.html",'<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissible\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close({$event: $event})">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')}]),angular.module("uib/template/carousel/carousel.html",[]).run(["$templateCache",function(a){a.put("uib/template/carousel/carousel.html",'<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n  <div class="carousel-inner" ng-transclude></div>\n  <a role="button" href class="left carousel-control" ng-click="prev()" ng-class="{ disabled: isPrevDisabled() }" ng-show="slides.length > 1">\n    <span aria-hidden="true" class="glyphicon glyphicon-chevron-left"></span>\n    <span class="sr-only">previous</span>\n  </a>\n  <a role="button" href class="right carousel-control" ng-click="next()" ng-class="{ disabled: isNextDisabled() }" ng-show="slides.length > 1">\n    <span aria-hidden="true" class="glyphicon glyphicon-chevron-right"></span>\n    <span class="sr-only">next</span>\n  </a>\n  <ol class="carousel-indicators" ng-show="slides.length > 1">\n    <li ng-repeat="slide in slides | orderBy:indexOfSlide track by $index" ng-class="{ active: isActive(slide) }" ng-click="select(slide)">\n      <span class="sr-only">slide {{ $index + 1 }} of {{ slides.length }}<span ng-if="isActive(slide)">, currently active</span></span>\n    </li>\n  </ol>\n</div>\n');
}]),angular.module("uib/template/carousel/slide.html",[]).run(["$templateCache",function(a){a.put("uib/template/carousel/slide.html",'<div ng-class="{\n    \'active\': active\n  }" class="item text-center" ng-transclude></div>\n')}]),angular.module("uib/template/datepicker/datepicker.html",[]).run(["$templateCache",function(a){a.put("uib/template/datepicker/datepicker.html",'<div class="uib-datepicker" ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <uib-daypicker ng-switch-when="day" tabindex="0"></uib-daypicker>\n  <uib-monthpicker ng-switch-when="month" tabindex="0"></uib-monthpicker>\n  <uib-yearpicker ng-switch-when="year" tabindex="0"></uib-yearpicker>\n</div>\n')}]),angular.module("uib/template/datepicker/day.html",[]).run(["$templateCache",function(a){a.put("uib/template/datepicker/day.html",'<table class="uib-daypicker" role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left uib-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{::5 + showWeeks}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm uib-title" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right uib-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-if="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in ::labels track by $index" class="text-center"><small aria-label="{{::label.full}}">{{::label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class="uib-weeks" ng-repeat="row in rows track by $index">\n      <td ng-if="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row" class="uib-day text-center" role="gridcell"\n        id="{{::dt.uid}}"\n        ng-class="::dt.customClass">\n        <button type="button" class="btn btn-default btn-sm"\n          uib-is-class="\n            \'btn-info\' for selectedDt,\n            \'active\' for activeDt\n            on dt"\n          ng-click="select(dt.date)"\n          ng-disabled="::dt.disabled"\n          tabindex="-1"><span ng-class="::{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("uib/template/datepicker/month.html",[]).run(["$templateCache",function(a){a.put("uib/template/datepicker/month.html",'<table class="uib-monthpicker" role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left uib-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm uib-title" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right uib-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class="uib-months" ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row" class="uib-month text-center" role="gridcell"\n        id="{{::dt.uid}}"\n        ng-class="::dt.customClass">\n        <button type="button" class="btn btn-default"\n          uib-is-class="\n            \'btn-info\' for selectedDt,\n            \'active\' for activeDt\n            on dt"\n          ng-click="select(dt.date)"\n          ng-disabled="::dt.disabled"\n          tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("uib/template/datepicker/year.html",[]).run(["$templateCache",function(a){a.put("uib/template/datepicker/year.html",'<table class="uib-yearpicker" role="grid" aria-labelledby="{{::uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left uib-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{::columns - 2}}"><button id="{{::uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm uib-title" ng-click="toggleMode()" ng-disabled="datepickerMode === maxMode" tabindex="-1"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right uib-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr class="uib-years" ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row" class="uib-year text-center" role="gridcell"\n        id="{{::dt.uid}}"\n        ng-class="::dt.customClass">\n        <button type="button" class="btn btn-default"\n          uib-is-class="\n            \'btn-info\' for selectedDt,\n            \'active\' for activeDt\n            on dt"\n          ng-click="select(dt.date)"\n          ng-disabled="::dt.disabled"\n          tabindex="-1"><span ng-class="::{\'text-info\': dt.current}">{{::dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("uib/template/datepickerPopup/popup.html",[]).run(["$templateCache",function(a){a.put("uib/template/datepickerPopup/popup.html",'<div>\n  <ul class="uib-datepicker-popup dropdown-menu uib-position-measure" dropdown-nested ng-if="isOpen" ng-keydown="keydown($event)" ng-click="$event.stopPropagation()">\n    <li ng-transclude></li>\n    <li ng-if="showButtonBar" class="uib-button-bar">\n      <span class="btn-group pull-left">\n        <button type="button" class="btn btn-sm btn-info uib-datepicker-current" ng-click="select(\'today\', $event)" ng-disabled="isDisabled(\'today\')">{{ getText(\'current\') }}</button>\n        <button type="button" class="btn btn-sm btn-danger uib-clear" ng-click="select(null, $event)">{{ getText(\'clear\') }}</button>\n      </span>\n      <button type="button" class="btn btn-sm btn-success pull-right uib-close" ng-click="close($event)">{{ getText(\'close\') }}</button>\n    </li>\n  </ul>\n</div>\n')}]),angular.module("uib/template/modal/backdrop.html",[]).run(["$templateCache",function(a){a.put("uib/template/modal/backdrop.html",'<div class="modal-backdrop"\n     uib-modal-animation-class="fade"\n     modal-in-class="in"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')}]),angular.module("uib/template/modal/window.html",[]).run(["$templateCache",function(a){a.put("uib/template/modal/window.html",'<div modal-render="{{$isRendered}}" tabindex="-1" role="dialog" class="modal"\n    uib-modal-animation-class="fade"\n    modal-in-class="in"\n    ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}">\n    <div class="modal-dialog {{size ? \'modal-\' + size : \'\'}}"><div class="modal-content" uib-modal-transclude></div></div>\n</div>\n')}]),angular.module("uib/template/pager/pager.html",[]).run(["$templateCache",function(a){a.put("uib/template/pager/pager.html",'<ul class="pager">\n  <li ng-class="{disabled: noPrevious()||ngDisabled, previous: align}"><a href ng-click="selectPage(page - 1, $event)">{{::getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext()||ngDisabled, next: align}"><a href ng-click="selectPage(page + 1, $event)">{{::getText(\'next\')}}</a></li>\n</ul>\n')}]),angular.module("uib/template/pagination/pagination.html",[]).run(["$templateCache",function(a){a.put("uib/template/pagination/pagination.html",'<ul class="pagination">\n  <li ng-if="::boundaryLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-first"><a href ng-click="selectPage(1, $event)">{{::getText(\'first\')}}</a></li>\n  <li ng-if="::directionLinks" ng-class="{disabled: noPrevious()||ngDisabled}" class="pagination-prev"><a href ng-click="selectPage(page - 1, $event)">{{::getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active,disabled: ngDisabled&&!page.active}" class="pagination-page"><a href ng-click="selectPage(page.number, $event)">{{page.text}}</a></li>\n  <li ng-if="::directionLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-next"><a href ng-click="selectPage(page + 1, $event)">{{::getText(\'next\')}}</a></li>\n  <li ng-if="::boundaryLinks" ng-class="{disabled: noNext()||ngDisabled}" class="pagination-last"><a href ng-click="selectPage(totalPages, $event)">{{::getText(\'last\')}}</a></li>\n</ul>\n')}]),angular.module("uib/template/tooltip/tooltip-html-popup.html",[]).run(["$templateCache",function(a){a.put("uib/template/tooltip/tooltip-html-popup.html",'<div class="tooltip"\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind-html="contentExp()"></div>\n</div>\n')}]),angular.module("uib/template/tooltip/tooltip-popup.html",[]).run(["$templateCache",function(a){a.put("uib/template/tooltip/tooltip-popup.html",'<div class="tooltip"\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')}]),angular.module("uib/template/tooltip/tooltip-template-popup.html",[]).run(["$templateCache",function(a){a.put("uib/template/tooltip/tooltip-template-popup.html",'<div class="tooltip"\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner"\n    uib-tooltip-template-transclude="contentExp()"\n    tooltip-template-transclude-scope="originScope()"></div>\n</div>\n')}]),angular.module("uib/template/popover/popover-html.html",[]).run(["$templateCache",function(a){a.put("uib/template/popover/popover-html.html",'<div class="popover"\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="uibTitle" ng-if="uibTitle"></h3>\n      <div class="popover-content" ng-bind-html="contentExp()"></div>\n  </div>\n</div>\n')}]),angular.module("uib/template/popover/popover-template.html",[]).run(["$templateCache",function(a){a.put("uib/template/popover/popover-template.html",'<div class="popover"\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="uibTitle" ng-if="uibTitle"></h3>\n      <div class="popover-content"\n        uib-tooltip-template-transclude="contentExp()"\n        tooltip-template-transclude-scope="originScope()"></div>\n  </div>\n</div>\n')}]),angular.module("uib/template/popover/popover.html",[]).run(["$templateCache",function(a){a.put("uib/template/popover/popover.html",'<div class="popover"\n  tooltip-animation-class="fade"\n  uib-tooltip-classes\n  ng-class="{ in: isOpen() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="uibTitle" ng-if="uibTitle"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')}]),angular.module("uib/template/progressbar/bar.html",[]).run(["$templateCache",function(a){a.put("uib/template/progressbar/bar.html",'<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" aria-labelledby="{{::title}}" ng-transclude></div>\n')}]),angular.module("uib/template/progressbar/progress.html",[]).run(["$templateCache",function(a){a.put("uib/template/progressbar/progress.html",'<div class="progress" ng-transclude aria-labelledby="{{::title}}"></div>')}]),angular.module("uib/template/progressbar/progressbar.html",[]).run(["$templateCache",function(a){a.put("uib/template/progressbar/progressbar.html",'<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: (percent < 100 ? percent : 100) + \'%\'}" aria-valuetext="{{percent | number:0}}%" aria-labelledby="{{::title}}" ng-transclude></div>\n</div>\n')}]),angular.module("uib/template/rating/rating.html",[]).run(["$templateCache",function(a){a.put("uib/template/rating/rating.html",'<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}" aria-valuetext="{{title}}">\n    <span ng-repeat-start="r in range track by $index" class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    <i ng-repeat-end ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')" ng-attr-title="{{r.title}}"></i>\n</span>\n')}]),angular.module("uib/template/tabs/tab.html",[]).run(["$templateCache",function(a){a.put("uib/template/tabs/tab.html",'<li ng-class="[{active: active, disabled: disabled}, classes]" class="uib-tab nav-item">\n  <a href ng-click="select($event)" class="nav-link" uib-tab-heading-transclude>{{heading}}</a>\n</li>\n')}]),angular.module("uib/template/tabs/tabset.html",[]).run(["$templateCache",function(a){a.put("uib/template/tabs/tabset.html",'<div>\n  <ul class="nav nav-{{tabset.type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane"\n         ng-repeat="tab in tabset.tabs"\n         ng-class="{active: tabset.active === tab.index}"\n         uib-tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')}]),angular.module("uib/template/timepicker/timepicker.html",[]).run(["$templateCache",function(a){a.put("uib/template/timepicker/timepicker.html",'<table class="uib-timepicker">\n  <tbody>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td class="uib-increment hours"><a ng-click="incrementHours()" ng-class="{disabled: noIncrementHours()}" class="btn btn-link" ng-disabled="noIncrementHours()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td>&nbsp;</td>\n      <td class="uib-increment minutes"><a ng-click="incrementMinutes()" ng-class="{disabled: noIncrementMinutes()}" class="btn btn-link" ng-disabled="noIncrementMinutes()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td ng-show="showSeconds">&nbsp;</td>\n      <td ng-show="showSeconds" class="uib-increment seconds"><a ng-click="incrementSeconds()" ng-class="{disabled: noIncrementSeconds()}" class="btn btn-link" ng-disabled="noIncrementSeconds()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n    <tr>\n      <td class="form-group uib-time hours" ng-class="{\'has-error\': invalidHours}">\n        <input type="text" placeholder="HH" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2" tabindex="{{::tabindex}}" ng-disabled="noIncrementHours()" ng-blur="blur()">\n      </td>\n      <td class="uib-separator">:</td>\n      <td class="form-group uib-time minutes" ng-class="{\'has-error\': invalidMinutes}">\n        <input type="text" placeholder="MM" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="::readonlyInput" maxlength="2" tabindex="{{::tabindex}}" ng-disabled="noIncrementMinutes()" ng-blur="blur()">\n      </td>\n      <td ng-show="showSeconds" class="uib-separator">:</td>\n      <td class="form-group uib-time seconds" ng-class="{\'has-error\': invalidSeconds}" ng-show="showSeconds">\n        <input type="text" placeholder="SS" ng-model="seconds" ng-change="updateSeconds()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2" tabindex="{{::tabindex}}" ng-disabled="noIncrementSeconds()" ng-blur="blur()">\n      </td>\n      <td ng-show="showMeridian" class="uib-time am-pm"><button type="button" ng-class="{disabled: noToggleMeridian()}" class="btn btn-default text-center" ng-click="toggleMeridian()" ng-disabled="noToggleMeridian()" tabindex="{{::tabindex}}">{{meridian}}</button></td>\n    </tr>\n    <tr class="text-center" ng-show="::showSpinners">\n      <td class="uib-decrement hours"><a ng-click="decrementHours()" ng-class="{disabled: noDecrementHours()}" class="btn btn-link" ng-disabled="noDecrementHours()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td>&nbsp;</td>\n      <td class="uib-decrement minutes"><a ng-click="decrementMinutes()" ng-class="{disabled: noDecrementMinutes()}" class="btn btn-link" ng-disabled="noDecrementMinutes()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td ng-show="showSeconds">&nbsp;</td>\n      <td ng-show="showSeconds" class="uib-decrement seconds"><a ng-click="decrementSeconds()" ng-class="{disabled: noDecrementSeconds()}" class="btn btn-link" ng-disabled="noDecrementSeconds()" tabindex="{{::tabindex}}"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n      <td ng-show="showMeridian"></td>\n    </tr>\n  </tbody>\n</table>\n')}]),angular.module("uib/template/typeahead/typeahead-match.html",[]).run(["$templateCache",function(a){a.put("uib/template/typeahead/typeahead-match.html",'<a href\n   tabindex="-1"\n   ng-bind-html="match.label | uibTypeaheadHighlight:query"\n   ng-attr-title="{{match.label}}"></a>\n')}]),angular.module("uib/template/typeahead/typeahead-popup.html",[]).run(["$templateCache",function(a){a.put("uib/template/typeahead/typeahead-popup.html",'<ul class="dropdown-menu" ng-show="isOpen() && !moveInProgress" ng-style="{top: position().top+\'px\', left: position().left+\'px\'}" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index, $event)" role="option" id="{{::match.id}}">\n        <div uib-typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')}]),angular.module("ui.bootstrap.carousel").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibCarouselCss&&angular.element(document).find("head").prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>'),angular.$$uibCarouselCss=!0}),angular.module("ui.bootstrap.datepicker").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibDatepickerCss&&angular.element(document).find("head").prepend('<style type="text/css">.uib-datepicker .uib-title{width:100%;}.uib-day button,.uib-month button,.uib-year button{min-width:100%;}.uib-left,.uib-right{width:100%}</style>'),angular.$$uibDatepickerCss=!0}),angular.module("ui.bootstrap.position").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibPositionCss&&angular.element(document).find("head").prepend('<style type="text/css">.uib-position-measure{display:block !important;visibility:hidden !important;position:absolute !important;top:-9999px !important;left:-9999px !important;}.uib-position-scrollbar-measure{position:absolute !important;top:-9999px !important;width:50px !important;height:50px !important;overflow:scroll !important;}.uib-position-body-scrollbar-measure{overflow:scroll !important;}</style>'),angular.$$uibPositionCss=!0}),angular.module("ui.bootstrap.datepickerPopup").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibDatepickerpopupCss&&angular.element(document).find("head").prepend('<style type="text/css">.uib-datepicker-popup.dropdown-menu{display:block;float:none;margin:0;}.uib-button-bar{padding:10px 9px 2px;}</style>'),angular.$$uibDatepickerpopupCss=!0}),angular.module("ui.bootstrap.tooltip").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibTooltipCss&&angular.element(document).find("head").prepend('<style type="text/css">[uib-tooltip-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-html-popup].tooltip.right-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.top-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-left > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.bottom-right > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.left-bottom > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-top > .tooltip-arrow,[uib-tooltip-template-popup].tooltip.right-bottom > .tooltip-arrow,[uib-popover-popup].popover.top-left > .arrow,[uib-popover-popup].popover.top-right > .arrow,[uib-popover-popup].popover.bottom-left > .arrow,[uib-popover-popup].popover.bottom-right > .arrow,[uib-popover-popup].popover.left-top > .arrow,[uib-popover-popup].popover.left-bottom > .arrow,[uib-popover-popup].popover.right-top > .arrow,[uib-popover-popup].popover.right-bottom > .arrow,[uib-popover-html-popup].popover.top-left > .arrow,[uib-popover-html-popup].popover.top-right > .arrow,[uib-popover-html-popup].popover.bottom-left > .arrow,[uib-popover-html-popup].popover.bottom-right > .arrow,[uib-popover-html-popup].popover.left-top > .arrow,[uib-popover-html-popup].popover.left-bottom > .arrow,[uib-popover-html-popup].popover.right-top > .arrow,[uib-popover-html-popup].popover.right-bottom > .arrow,[uib-popover-template-popup].popover.top-left > .arrow,[uib-popover-template-popup].popover.top-right > .arrow,[uib-popover-template-popup].popover.bottom-left > .arrow,[uib-popover-template-popup].popover.bottom-right > .arrow,[uib-popover-template-popup].popover.left-top > .arrow,[uib-popover-template-popup].popover.left-bottom > .arrow,[uib-popover-template-popup].popover.right-top > .arrow,[uib-popover-template-popup].popover.right-bottom > .arrow{top:auto;bottom:auto;left:auto;right:auto;margin:0;}[uib-popover-popup].popover,[uib-popover-html-popup].popover,[uib-popover-template-popup].popover{display:block !important;}</style>'),angular.$$uibTooltipCss=!0}),angular.module("ui.bootstrap.timepicker").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibTimepickerCss&&angular.element(document).find("head").prepend('<style type="text/css">.uib-time input{width:50px;}</style>'),angular.$$uibTimepickerCss=!0}),angular.module("ui.bootstrap.typeahead").run(function(){!angular.$$csp().noInlineStyle&&!angular.$$uibTypeaheadCss&&angular.element(document).find("head").prepend('<style type="text/css">[uib-typeahead-popup].dropdown-menu{display:block;}</style>'),angular.$$uibTypeaheadCss=!0});
angular.module('ng-walkthrough', [])
	.directive("walkthrough", ['$log', '$timeout', '$window', '$injector',
	function($log, $timeout, $window, $injector) {
        var DOM_WALKTHROUGH_TRANSPARENCY_TEXT_CLASS = ".walkthrough-text";
        var DOM_WALKTHROUGH_TIP_TEXT_CLASS = ".walkthrough-tip-text-box";
        var DOM_WALKTHROUGH_HOLE_CLASS = ".walkthrough-hole";
        var DOM_WALKTHROUGH_TRANSPARENCY_ICON_CLASS = ".walkthrough-icon";
        var DOM_WALKTHROUGH_TIP_ICON_CLASS = ".walkthrough-tip-icon-text-box";
        var DOM_WALKTHROUGH_ARROW_CLASS = ".walkthrough-arrow";
        var DOM_WALKTHROUGH_DONE_BUTTON_CLASS = "walkthrough-done-button";
        var BUTTON_CAPTION_DONE = "Got it!";
        var PADDING_HOLE = 5;
        var PADDING_ARROW_START = 5;
        var hasIonic = false;
        var canTouch = true; //Used to prevent issue where onWalkthroughHide fired twice when have angular and ionic
                             //due to ontouch being called and then on-click called.
                             //issue can be seen at:
                             //https://github.com/angular/angular.js/issues/6251
        var ngWalkthroughTapIcons = null;

        var template = [
            '<div class="walkthrough-background" ng-class="{\'walkthrough-active\': isActive}" ng-show="isActive" ng-click="onCloseClicked($event)" on-touch="onCloseTouched($event)">',
                '<div class="walkthrough-container walkthrough-container-transparency" ng-show="walkthroughType==\'transparency\'">',
                    '<div class="walkthrough-inner" ng-class="{\'walkthrough-top\': (!forceCaptionLocation || forceCaptionLocation==\'TOP\'), \'walkthrough-bottom\': forceCaptionLocation==\'BOTTOM\'}">',
                        '<div class="walkthrough-transclude" ng-transclude></div>',
                        '<div class="walkthrough-non-transclude-template" ng-show="!hasTransclude">',
                            '<div class="walkthrough-text-container">',
                                '<pre class="walkthrough-element walkthrough-text" ng-bind="mainCaption">',
                                '</pre>',
                            '</div>',
                            '<img class="walkthrough-element walkthrough-icon" ng-show="icon && icon!=\'arrow\'" ng-src="{{walkthroughIcon}}">',
                            '<div class="walkthrough-element walkthrough-arrow" ng-show="icon==\'arrow\'"></div>',
                            '<button class="walkthrough-element walkthrough-button-positive walkthrough-done-button" type="button" ng-if="useButton" ng-click="onCloseClicked($event)" on-touch="onCloseTouched($event)">',
                                '{{buttonCaption}}',
                            '</button>',
                        '</div>',
                    '</div>',
                '</div>',
                '<div class="walkthrough-container walkthrough-container-tip" ng-show="walkthroughType==\'tip\'">',
                    '<div class="walkthrough-transclude" ng-transclude></div>',
                    '<div class="walkthrough-inner" ng-class="{\'walkthrough-top\': ((!forceCaptionLocation && !tipLocation) || forceCaptionLocation==\'TOP\' || tipLocation ==\'TOP\'), \'walkthrough-bottom\': (forceCaptionLocation==\'BOTTOM\' || tipLocation ==\'BOTTOM\')}">',
                        '<img class="walkthrough-element walkthrough-tip-icon-text-box" ng-class="{\'walkthrough-tip-icon-image-front\': tipIconLocation==\'FRONT\', \'walkthrough-tip-icon-image-back\': tipIconLocation==\'BACK\'}" ng-show="icon!=\'arrow\'" ng-src="{{walkthroughIcon}}" alt="icon">',
                        '<button class="walkthrough-done-button walkthrough-tip-done-button-text-box" type="button" ng-if="useButton" ng-click="onCloseClicked($event)" on-touch="onCloseTouched($event)">',
                            '<img class="walkthrough-tip-button-image-text-box" ng-src="{{closeIcon}}" alt="x">',
                        '</button>',
                        '<pre class="walkthrough-element walkthrough-tip-text-box" ng-class="{\'walkthrough-tip-text-box-color-black\': tipColor==\'BLACK\', \'walkthrough-tip-text-box-color-white\': tipColor==\'WHITE\'}" ng-bind="mainCaption">',
                        '</pre>',
                    '</div>',
                '</div>',
                '<!-- Always show as this gives us the gray background -->',
                '<div ng-show="walkthroughType==\'transparency\' || focusElementId || focusElementSelector" class="walkthrough-hole" ng-class="{\'walkthrough-hole-round\': isRound}">',
                '</div>',
                '<div ng-show="hasGlow && (focusElementId || focusElementSelector)" class="walkthrough-hole walkthrough-hole-glow" ng-class="{\'walkthrough-hole-round\': isRound}">',
                '</div>',
            '</div>'
        ].join('');

        return {
            restrict: 'E',
            transclude: true,
            scope: {
                walkthroughType: '@',
                isActive: '=',
                icon: '@',
                /**
                 * @deprecated Since version 0.4.3. Will be deleted in next versions. Use property focusElementSelector instead.
                 */
                focusElementId: '@?',
                focusElementSelector: '@?',
                mainCaption: '@?',
                forceCaptionLocation: '@?',
                isRound: '=?',
                hasGlow: '=?',
                useButton: '=?',
                iconPaddingLeft: '@?',
                iconPaddingTop: '@?',
                /**
                 * @deprecated Since version 0.3.1. Will be deleted in next versions. Use property forceCaptionLocation instead.
                 */
                tipLocation: '@?',
                tipIconLocation: '@?',
                tipColor: '@?',
                isBindClickEventToBody: '=?',
                onWalkthroughShow: '&',
                onWalkthroughHide: '&'
            },
            link: function (scope, element, attrs, ctrl, $transclude) {
                var getIcon = function(icon){
                    var retval = null;
                    if (ngWalkthroughTapIcons) {
                        switch (icon) {
                            case ("single_tap"):
                                retval = ngWalkthroughTapIcons.single_tap;
                                break;
                            case ("double_tap"):
                                retval = ngWalkthroughTapIcons.double_tap;
                                break;
                            case ("swipe_down"):
                                retval = ngWalkthroughTapIcons.swipe_down;
                                break;
                            case ("swipe_left"):
                                retval = ngWalkthroughTapIcons.swipe_left;
                                break;
                            case ("swipe_right"):
                                retval = ngWalkthroughTapIcons.swipe_right;
                                break;
                            case ("swipe_up"):
                                retval = ngWalkthroughTapIcons.swipe_up;
                                break;
                            case ("arrow"):
                                retval = ""; //Return nothing, using other dom element for arrow
                                break;
                        }
                    }
                    if (retval === null && icon && icon.length > 0){
                        retval = icon;
                    }
                    return retval;
                };

                var clickFunction = function clickFunction(e){
                    if (scope.clickEvent == 'click') {
                        if (!scope.useButton){
                            e.stopPropagation();
                            e.preventDefault();
                            scope.onCloseClicked(e);
                            $timeout(function () {
                                unbindClickEvents();
                            }, 1000);
                        }
                    }
                };

                var touchFunction = function touchFunction(e){
                    if (scope.clickEvent == 'touch') {
                        if (!scope.useButton) {
                            e.stopPropagation();
                            e.preventDefault();
                            scope.onCloseTouched(e);
                            $timeout(function () {
                                unbindClickEvents();
                            }, 1000);
                        }
                    }
                };

                var attemptTouchEvent = function(e){
                    if (scope.clickEvent == 'touch' && canTouch) { //We need this in case both angular an ionic are for some reason loaded
                        if ((!scope.useButton) ||
                            (e.currentTarget.className.indexOf(DOM_WALKTHROUGH_DONE_BUTTON_CLASS) > -1)) {
                            canTouch = false;
                            $timeout(function() {//This timeout added to avoid event propagation happening outside of directive bug
                                scope.closeWalkthrough();
                                $timeout(function () {
                                    canTouch = true;
                                }, 500);
                            }, 200);
                        }
                    }
                };

                var resizeHandler = function(){
                    scope.setFocusOnElement(attrs.focusElementSelector);
                };

                var unbindClickEvents = function(){
                    angular.element(document.body).off('mousedown', clickFunction);
                    angular.element(document.body).off('mouseup', clickFunction);
                    angular.element(document.body).off('click', clickFunction);
                    angular.element(document.body).off('touch', touchFunction);
                };

                var bindClickEvents = function(){
                    $timeout(function(){
                        angular.element(document.body).on('mousedown', clickFunction);
                        angular.element(document.body).on('mouseup', clickFunction);
                        angular.element(document.body).on('click', clickFunction);
                        angular.element(document.body).on('touch', touchFunction);
                    }, 1000);
                };

                var bindScreenResize = function(){
                        angular.element($window).on('resize', resizeHandler);
                };

                var unbindScreenResize = function(){
                    angular.element($window).off('resize', resizeHandler);
                };

                var init = function(scope){
                    try {
                        var ionic = $injector.get("$ionicPosition");
                        hasIonic = true;
                    } catch(err) {
                        hasIonic = false;
                    }

                    try {
                        ngWalkthroughTapIcons = $injector.get("ngWalkthroughTapIcons");
                    } catch(err) {
                        ngWalkthroughTapIcons = null;
                    }

                    scope.clickEvent = 'click';
                    //noinspection JSUnresolvedVariable
                    if (hasIonic) { //Might need to comment this out if fails build on angular only machine
                        scope.clickEvent = 'touch';
                    }

                    //Event to close the walkthrough
                    scope.closeWalkthrough = function(){
                        scope.isActive = false;
                        scope.onWalkthroughHide();
                    };

                    //Event used when background clicked, if we use button then do nothing
                    scope.onCloseClicked = function($event) {
                        $event.stopPropagation();

                        //if Angular only
                        if (scope.clickEvent == 'click') {
                            if ((!scope.useButton) ||
                                ($event.currentTarget.className.indexOf(DOM_WALKTHROUGH_DONE_BUTTON_CLASS) > -1)) {
                                scope.closeWalkthrough();
                            }
                        } else { //We need this in case both angular an ionic are for some reason loaded
                            attemptTouchEvent($event);
                        }
                    };

                    scope.onCloseTouched = function($event) {
                        $event.stopPropagation();
                        attemptTouchEvent($event);
                    };

                    $timeout(function(){
                        scope.closeIcon = close_icon;
                    },100);
                    scope.walkthroughIcon = getIcon(scope.icon);
                    scope.buttonCaption = BUTTON_CAPTION_DONE;

                    // Change focusElementId in selector if needed
                    if(!attrs.focusElementSelector && attrs.focusElementId) {
                        attrs.focusElementSelector = '#' + attrs.focusElementId;
                    }
                };

                //Sets the walkthrough focus hole on given params with padding
                var setFocus = function(left, top, width, height){
                    var holeDimensions =
                        "left:" + (left - PADDING_HOLE) + "px;" +
                        "top:" + (top - PADDING_HOLE) + "px;" +
                        "width:" + (width + (2 * PADDING_HOLE)) + "px;" +
                        "height:" + (height + (2 * PADDING_HOLE)) + "px;";
                    scope.walkthroughHoleElements.attr('style', holeDimensions);
                };

                var moveTextToBottom = function(newTop){
                    var textLocation =
                        "top:" + newTop + "px;" +
                        "margin-top: 10px;";
                    scope.walkthroughTextElement.attr('style', textLocation);
                };

                //Check if given icon covers text
                var isItemOnText = function(iconLeft, iconTop, iconRight, iconBottom) {
                    var offsetCoordinates = getOffsetCoordinates(scope.walkthroughTextElement);
                    var retval = false;
                    var textLeft = offsetCoordinates.left;
                    var textRight = offsetCoordinates.left + offsetCoordinates.width;
                    var textTop = offsetCoordinates.top;
                    var textBottom = offsetCoordinates.top + offsetCoordinates.height;
                    if (!(textRight < iconLeft ||
                        textLeft > iconRight ||
                        textBottom < iconTop ||
                        textTop > iconBottom)) {
                        retval = true;
                    }
                    return retval;
                };

                //Sets the icon displayed according to directive argument
                var setIconAndText = function(iconLeft, iconTop, paddingLeft, paddingTop){
                    var offsetCoordinates = getOffsetCoordinates(scope.walkthroughIconElement);
                    var iconHeight = offsetCoordinates.height;
                    var iconWidth = offsetCoordinates.width;
                    var iconLeftWithPadding = iconLeft + paddingLeft;
                    var iconTopWithPadding = iconTop + paddingTop;
                    var iconRight = iconLeftWithPadding + iconWidth;
                    var iconBottom = iconTopWithPadding + iconHeight;

                    //Check if text overlaps icon or user explicitly wants text at bottom, if does, move it to bottom
                    if (isItemOnText(iconLeftWithPadding, iconTopWithPadding, iconRight, iconBottom)){
                        moveTextToBottom(iconBottom);
                    }

                    var iconLocation =
                        "position: absolute;" +
                        "left:" + iconLeftWithPadding + "px;" +
                        "top:" + iconTopWithPadding + "px;" +
                        "margin-top:-" + iconHeight/6 + "px;" +
                        "margin-left:-" + iconWidth/4 + "px;";
                    scope.walkthroughIconElement.attr('style', iconLocation);
                };

                var setArrowAndText = function(pointSubjectLeft, pointSubjectTop, pointSubjectWidth, pointSubjectHeight, paddingLeft){
                    var offsetCoordinates = getOffsetCoordinates(scope.walkthroughTextElement);
                    var startLeft = offsetCoordinates.left + offsetCoordinates.width /2;
                    var startTop = offsetCoordinates.top + PADDING_ARROW_START;

                    if (scope.forceCaptionLocation === "TOP"){
                        startTop += offsetCoordinates.height;
                    }
                    var endTop = 0;
                    var endLeft = 0;

                    if (startLeft > pointSubjectLeft){//If hole left to text set arrow to point to middle right
                        endLeft = pointSubjectLeft + paddingLeft + pointSubjectWidth;
                        endTop = pointSubjectTop + (pointSubjectHeight/2);
                    } else if (startLeft < pointSubjectLeft){//If hole right to text set arrow to point to middle left
                        endLeft = pointSubjectLeft - paddingLeft;
                        endTop = pointSubjectTop + (pointSubjectHeight/2);
                    }

                    //Check if text overlaps icon or user explicitly wants text at bottom, if does, move it to bottom
                    if (isItemOnText(startLeft, startTop, endLeft, endTop)){
                        moveTextToBottom(startTop);
                    }

                    var arrowSvgDom =
                        '<svg width="100%" height="100%">' +
                        '<defs>' +
                        '<marker id="arrow" markerWidth="13" markerHeight="13" refx="2" refy="6" orient="auto">' +
                        '<path d="M2,1 L2,10 L10,6 L2,2" style="fill:#fff;" />' +
                        '</marker>' +
                        '</defs>' +
                        '<path d="M' + startLeft + ',' + startTop + ' Q' + startLeft + ',' + endTop + ' ' + endLeft + ',' + endTop + '"' +
                        'style="stroke:#fff; stroke-width: 2px; fill: none;' +
                        'marker-end: url(#arrow);"/>' +
                        '/>' +
                        '</svg>';


                    scope.walkthroughArrowElement.append(arrowSvgDom);
                };

                var setTipIconPadding = function(iconPaddingLeft, iconPaddingTop){
                    var iconLocation = "";
                    if (iconPaddingTop){
                        iconLocation += "margin-top:" + iconPaddingTop + "px;";
                    }
                    if (iconPaddingLeft){
                        iconLocation += "right:" + iconPaddingLeft + "%;";
                    }
                    scope.walkthroughIconElement.attr('style', iconLocation);
                };

                //Check once
                var getSameAncestor = function(walkthroughElement, focusElement){
                    var retval = null;
                    var walkthroughElementParent = element[0].offsetParent;
                    var focusElementParent = focusElement[0].offsetParent;
                    var walkthroughAncestorIter = walkthroughElementParent;
                    var focusElementAncestorIter = focusElementParent;

                    while (walkthroughAncestorIter && !retval){
                        focusElementAncestorIter = focusElementParent; //reset
                        while (focusElementAncestorIter && !retval) {
                            if (focusElementAncestorIter === walkthroughAncestorIter){
                                retval = walkthroughAncestorIter;
                            } else{
                                focusElementAncestorIter = focusElementAncestorIter.offsetParent;
                            }
                        }
                        walkthroughAncestorIter = walkthroughAncestorIter.offsetParent;
                    }
                    return retval;
                };

                var getOffsetCoordinates = function(focusElement){
                    var width;
                    var height;
                    var left;
                    var top;
                    if (hasIonic) { //Might need to comment this out if fails build on angular only machine
                        var $ionicPosition = $injector.get('$ionicPosition');
                        var ionicElement = $ionicPosition.offset(focusElement);
                        width = ionicElement.width;
                        height = ionicElement.height;
                        left = ionicElement.left;
                        top = ionicElement.top;
                    } else {
                        width = focusElement[0].offsetWidth;
                        height = focusElement[0].offsetHeight;
                        left = focusElement[0].getBoundingClientRect().left;
                        top = focusElement[0].getBoundingClientRect().top;
                        //var parent = focusElement[0].offsetParent;

                        //while (parent) {
                        //    left = left + parent.offsetLeft;
                        //    top = top + parent.offsetTop;
                        //    parent = parent.offsetParent;
                        //}
                    }
                    var sameAncestorForFocusElementAndWalkthrough = getSameAncestor(element, focusElement);
                    while (sameAncestorForFocusElementAndWalkthrough) {
                        left = left - sameAncestorForFocusElementAndWalkthrough.offsetLeft;
                        top = top - sameAncestorForFocusElementAndWalkthrough.offsetTop;
                        sameAncestorForFocusElementAndWalkthrough = sameAncestorForFocusElementAndWalkthrough.offsetParent;
                    }
                    return { top:top, left: left, height: height, width: width};
                };

                //Attempts to highlight the given element ID and set Icon to it if exists, if not use default - right under text
                var setElementLocations = function(walkthroughIconWanted, focusElementSelector, iconPaddingLeft, iconPaddingTop){
                    var focusElement = (focusElementSelector)?document.querySelectorAll(focusElementSelector): null;
                    if (focusElement && focusElement.length>0) {
                        if (focusElement.length > 1) {
                            $log.warn('Multiple items fit selector, displaying first as focus item');
                        }
                        focusElement = focusElement[0];
                    } else{
                        $log.error('No element found with selector: ' + focusElementSelector);
                        focusElement = null;
                    }
                    var angularElement = (focusElement)?angular.element(focusElement):null;
                    if (angularElement && angularElement.length > 0) {
                        var offsetCoordinates = getOffsetCoordinates(angularElement);
                        var width = offsetCoordinates.width;
                        var height = offsetCoordinates.height;
                        var left = offsetCoordinates.left;
                        var top = offsetCoordinates.top;

                        setFocus(left, top, width, height);
                        var paddingLeft = parseFloat(iconPaddingLeft);
                        var paddingTop = parseFloat(iconPaddingTop);
                        if (!paddingLeft) { paddingLeft = 0;}
                        if (!paddingTop) { paddingTop = 0;}

                        //If Gesture icon given bind it to hole as well
                        if (walkthroughIconWanted && walkthroughIconWanted !== "arrow" && scope.walkthroughType === "transparency"){
                            scope.$applyAsync(function () {
                                setIconAndText(left + width/2, top  + height/2, paddingLeft, paddingTop);
                            });
                        }
                        if (walkthroughIconWanted == "arrow"){
                            //Need to update text location according to conditional class added 'walkthrough-transparency-bottom'
                            scope.$applyAsync(function () {
                                setArrowAndText(left, top + paddingTop, width, height, paddingLeft);
                            });
                        }
                        //if tip mode with icon that we want to set padding to, set it
                        if (scope.walkthroughType== "tip" &&
                            walkthroughIconWanted && walkthroughIconWanted.length > 0 &&
                            (iconPaddingLeft || iconPaddingTop)){
                            setTipIconPadding(iconPaddingLeft, iconPaddingTop);
                        }
                    } else {
                        if (focusElementSelector) {
                            $log.info('Unable to find element requested to be focused: ' + focusElementSelector);
                        } else{
                            //if tip mode with icon that we want to set padding to, set it
                            if (scope.walkthroughType== "tip" &&
                                walkthroughIconWanted && walkthroughIconWanted.length > 0 &&
                                (iconPaddingLeft || iconPaddingTop)){
                                setTipIconPadding(iconPaddingLeft, iconPaddingTop);
                            }
                        }
                    }
                };

                scope.setFocusOnElement = function(focusElementSelector){
                    setElementLocations(scope.icon, focusElementSelector, scope.iconPaddingLeft, scope.iconPaddingTop);
                };

                var holeElements = element[0].querySelectorAll(DOM_WALKTHROUGH_HOLE_CLASS);
                scope.walkthroughHoleElements = angular.element(holeElements);
                var textClass = (scope.walkthroughType== "tip")? DOM_WALKTHROUGH_TIP_TEXT_CLASS: DOM_WALKTHROUGH_TRANSPARENCY_TEXT_CLASS;
                scope.walkthroughTextElement = angular.element(element[0].querySelector(textClass));
                var iconClass = (scope.walkthroughType== "tip")? DOM_WALKTHROUGH_TIP_ICON_CLASS: DOM_WALKTHROUGH_TRANSPARENCY_ICON_CLASS;
                scope.walkthroughIconElement = angular.element(element[0].querySelector(iconClass));
                scope.walkthroughArrowElement = angular.element(element[0].querySelector(DOM_WALKTHROUGH_ARROW_CLASS));
                $transclude(function(clone){
                    init(scope);
                    var transcludeContent = clone.text().trim();
                    if (!(transcludeContent.length === 0 && clone.length <= 1)) { //Transcluding
                        scope.hasTransclude = true;
                    }
                });

                var handleFocusElementIdDeprecated = function(){
                    console.warn("Since version 0.4.3 focusElementId is deprecated and will be deleted in next versions. Use property 'focusElementSelector' instead.");
                };

                var handleTipLocationDeprecated = function(){
                    console.warn("Since version 0.3.1 tipLocation is deprecated and will be deleted in next versions. Use property 'forceCaptionLocation' instead.");
                    //noinspection JSDeprecatedSymbols
                    scope.forceCaptionLocation = scope.tipLocation;
                };

                //noinspection JSDeprecatedSymbols
                if (scope.tipLocation){
                    handleTipLocationDeprecated();
                }

                //noinspection JSDeprecatedSymbols
                if (scope.focusElementId){
                    handleFocusElementIdDeprecated();
                }

                scope.$watch('isActive', function(newValue){
                    if(newValue){
                        bindScreenResize();
                        if (scope.isBindClickEventToBody){
                            bindClickEvents();
                        }
                        //if (!scope.hasTransclude){//remarked cause did not focus on search field in recipe select
                        try {
                            if (attrs.focusElementSelector) {
                                    scope.setFocusOnElement(attrs.focusElementSelector);
                                }
                            } catch(e){
                                $log.warn('failed to focus on element prior to timeout: ' + attrs.focusElementSelector);
                            }
                            //Must timeout to make sure we have final correct coordinates after screen totally load
                            if (attrs.focusElementSelector) {
                                $timeout(function () {
                                    scope.setFocusOnElement(attrs.focusElementSelector);
                                }, 300);
                            }
                        //}
                        scope.onWalkthroughShow();
                    } else{
                        unbindScreenResize();
                    }
                });

                var close_icon = "data:image/png;base64,"+
                    "iVBORw0KGgoAAAANSUhEUgAAAG4AAABuCAYAAADGWyb7AAAAAXNSR0IArs4c6QAAAAlwSFlzAAAL"+
                    "EwAACxMBAJqcGAAABCZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6"+
                    "eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYg"+
                    "eG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4K"+
                    "ICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlm"+
                    "Zj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9"+
                    "Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0"+
                    "cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0"+
                    "cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0"+
                    "PjE8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjU8L3Rp"+
                    "ZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNv"+
                    "bHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgog"+
                    "ICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAg"+
                    "PGV4aWY6UGl4ZWxYRGltZW5zaW9uPjExMDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAg"+
                    "IDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhl"+
                    "bFlEaW1lbnNpb24+MTEwPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgICAgPGRjOnN1Ympl"+
                    "Y3Q+CiAgICAgICAgICAgIDxyZGY6U2VxLz4KICAgICAgICAgPC9kYzpzdWJqZWN0PgogICAgICAg"+
                    "ICA8eG1wOk1vZGlmeURhdGU+MjAxNTowNzowNSAyMTowNzo0NzwveG1wOk1vZGlmeURhdGU+CiAg"+
                    "ICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+UGl4ZWxtYXRvciAzLjIuMTwveG1wOkNyZWF0b3JUb29s"+
                    "PgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4K36AZ"+
                    "FwAAETZJREFUeAHtnWuMVdUZhvcMMBeRQXGmSrVemqaUHyUabERIoWhQE02alKYk+qdNS38Apoht"+
                    "YiwQo3hJEwaVgm3AWmM0ATvxR5tGodSMSVtsQGlrSjFNtVYFC1IHEZgZZk7fZ3v2zN5nX9ba5+xz"+
                    "G/aXLPZl3d93f2t961vrDI6TS1Mi0NKUrXacNrW7XWFKMUzWlTBJgT61Fq+6OAWF0eJ1RNezxTCs"+
                    "K2FQYUihqaQZiIOETl/o0H3W7YbcMwqnfQGyG1ayBiCrjqI95xcDpNW6nRAJiScVPlZAUxtKag1I"+
                    "UudpyzSFLoXzkhLWOA4SP1E4UbzyXHdpBOLQrgsVIIw5qpEFzYPA/ykwV9ZN6kkchsVFCmhZPdtR"+
                    "DvhoHUPohwoYODWXegCGhkEYGlaP+rMEGQLRQAisqQbWEjjqYkicoYClOJEEC/S4AkNoTebAWhGH"+
                    "ZXixAuuviSysBz9QwCKtqlSbOMrvVkDTspK21tbWRW1tbYtU4OyWlhbK7ywUCm26n6SANvs1elRx"+
                    "aAHXEcUzJ53W/TFdDw4NDfWPjo726z7LRTiaR/lV075qEodn4xIFrpXK9Z2dnUtVyNzh4eGekZGR"+
                    "KZ9yUWmxmmRbWpxJkyYNT5ky5ahK23/69Ok+Xf9UecmuR+aIysEzk7lUizgsRYZG/5eftvFf6ujo"+
                    "WCFtmCeypmdFlKkRECkSB6TVe8+cObNV6f9hypMQz9zH0IkFmqlUg7getbDsobG9vf1GacCawcHB"+
                    "z0uzKiG+YqDUjlG1519qR6/as6eCAhk60ejMJEviKIuhEW1LLQLoZgF1t77yy6VlWbYrdVtKM0j7"+
                    "CtL+d0TgRhH4Umm85TPus8MKmcx7WQGEZlyqgPWYSgTIQhG2VnPLFSIsVd5aJxaBjubaf4vADfrA"+
                    "XimjfqzN9xQq7mgWxOGmgjS89mmkRyD0yqr7ioDIoh1p6q4orT60gqzaffrY7lJBaYdAdiEgryLH"+
                    "daWAoWmXKaQiTcPiKmnXchkdqfKpnoYSGTFnpIXbNHz+NGXDIO9dhbI1rxLiyAtpaYbHLmnZkxpm"+
                    "5tTKSlT7qipYoRru/yrt+64qwv1lKwybkFfWnFeJN36mKp1q20oNL/M0vDwn0q6wzdMs6c6ePXux"+
                    "RpFvqb1v6IOEDBvByc4at6ylQrnE4a24wKZ1pJGWfUMd2qT5zJpo27IbJZ3m6Y7JkyffJgKPiMiD"+
                    "lu3CBcjIdcoy/ViycojD3P/MWAmGm6lTp35bc9k6BXYFJrRo3sbltlgf6ifq7wHLzjLV4G5L5XJL"+
                    "SxxfCPOa1dw4ffr072lo/JE6kbYeVdGcIvIw2BZMmzZNNsvga5a94JgG6zxrSzMNoJ4xYqU5Im35"+
                    "qVOnfijS6Mg5JSKvRWF+CvLAFs2zNm7SEIcriy/DKAyPRU0750jzwCmSNy/FsIlCgJfVfGdLHF8D"+
                    "TmOjYIhIy5jTbMs2ltmsCSBPbZ8vg+WwpcECzhBn3E23AZfK8YwY08rkv07W46MizWo4VZkTXkRe"+
                    "qwyWRQqvWS4VIG/ABIzNUIan32bnukuehMdEGuuTXHwIgInkUb3inI1JwNq4u2IiDs3hjIhRNBxs"+
                    "07xmrNBY0ARNADaaRrZZdg/ME0ct0/CHQYLqJopIW6XF9dcTE+WRjhbplwgrrn82wMH0hFJxEDdS"+
                    "kjSOIc9GtXs0di9XiKwgfzmOABgpfF9vUAiTgH3stJNEHGcfYT5RpP6PStua2suf2MGMI4VVu5ZL"+
                    "my2KBXs4iJQ44hhfjTvZ8oovUkPmRpacv4xFQPPd1cLua7EJxiPgIHKuiyMOI8OobexcN9sm6Dgm"+
                    "9bsDM2H3Y4sWwEGkwRdFHImNc5uGyNu0B3W5ReV5kggEwA4MI6JKX8FFSImiiEM9Tdamo53fNVpc"+
                    "llaSP1siAHZgaJEcLkLTVhRxRm2TSXuzvhi8KblUgAAYgqVFESFOSoljIjT+qFDj8w9ybbOA25AE"+
                    "DMHSkIxoOAkYKaXE2Xj/Z2uf6SqLyvIkFggUsZxtkTTATWriZMaulFVUms+i3jxJFAJgCaZRcSXv"+
                    "YomDDKN7S+p9XUmB+WOFCFhiCjdjCjN2o5dEhMxOf5s0Hs/XvlJoovSnye/TIwCmYGvICTdjilVK"+
                    "XGJeWUDfnGhGCcfKBVpiv6sdCaZga1FPecTJQdoQ7i2ArhRsCLvllluc559/3tm+fbt7bwFc1ZJY"+
                    "YjtGnN/ENDmK27QhGOv0rFqPSgoG7GXLljldXV1OX1+fs3PnTkdDTUmq5EdtajqrVq1yent7Awl3"+
                    "797NlkvgXa0eitiyiZp0TC/EERm+mBT0ha7U9jt7N3UL0rLCU089pY9zXDZu3FiQ68i6TTpNXVi3"+
                    "bt14AcU7fQQFyq9X/8AWjJM4KMbB1ZiVwlHoRNFXulh9TExT7UjqR9P8smbNGmfz5s3OeecZ/QaO"+
                    "SHPuvfde5/777/cX4d6jvfXSNhpA38A41LDwiwBXbJUnapyAeYPy6x00VBZ1JHh55plnCjrHGNs+"+
                    "Tf6FDRs2BDMVn9BaHR+PzVurPhcxTuRBbQkcJeHoXWIGDUdHatWBpHo0nBRWr14dScCuXbsKM2fO"+
                    "DBEgLS1s2bIlMo8Mk1RDbVLbKo0rYpzIg+oIHJPEYZyYQav7gUobllV+DSmR8xTMHD16tHDTTTcV"+
                    "enp63DBr1qzCnj17IkljvtRXHiI6q3amLaeIcSIPKtN17nsLGDbr/BamHoMisFbJektME8xRvSfW"+
                    "PXv37nX/1MXChQsDFTHX3XHHHa6lSbrHH3/cWbBgQSAND88++6yzYsUKR8fkQ3H1esFwLYx/Zqif"+
                    "vTSUyBWcxolMCxDM1Ib5OmkL81bcEChDo3Do0KFITWNITZoP69VPadywiQfFw9WYi+sLuvd7UYgL"+
                    "iIj7u75OT0MDcfV8wMp84YUXnBtuuMGqGceOHXPmzJnjHD582Cp9LRPJ6h3VGZ5rVCc/NY4TNO6f"+
                    "iWSV5MRX1nBy4sQJd8jbt2+fsW0MnQyjjUgajVf7wNjqB6Mecd41tvNaIBrTxGaucsTx48ed++67"+
                    "z0kiD9IeeeQR5/XXX69ya8ovXuM6xAW2byJKc3loWDIiGpy/8iHgEWc89aOvwZjGV25Nb2fMmOFq"+
                    "3LXXXhtbL07le+65x7nmGqaQxpSiS5FfpiaJy4NHXFJCLw6LsuEE42Tr1q1OEmleoyGPZYAW6d6r"+
                    "hrriXFCDPrJplEec0SXeiBqn5YDz8MMPR1qUzGlvvvlmCIPu7m7n6aefdrQcCMXV+4WIQ5uSLEqa"+
                    "6HKVhjgjubXsOA7jtWvXuhZlab2eIYIDOspgWbJkifPEE084OsNfmrXezzb7UwEecpdXAzgX0ri8"+
                    "vC8sdzI3AHHlOJnzbZ0m3dZhpk70Vepr6FOauvoqsbrYqS4VtmZsvPzsfmuhXprdfb799tvr2jew"+
                    "lbH1KxMPinetKs84Mf7BZ524/b3WGcpXP6F+XFx+4dzInXfeaeXllx/Qeeihh5z169f7i3Dvly5d"+
                    "WvEBpFChKV7QN507edkii8uVt02D5x9T1CMylF+WWr+2HYa17RD789ZQpoxfcLRgx44dbqms38o5"+
                    "LAR5uL5OnjwZOCxU+kFk3HRjcTrvArb9hoRw5B4m8qvQ5/Ry7PhXVAEaLvv1C5NLouJq+c47mlfJ"+
                    "GREW49pwdZYvX+5qMR/Eiy++WMtuBOrCMBG2iwIvww+n9eo/vPYT163nwHkGEvhF80ivtnZu9b9r"+
                    "9nsIZJiq5CPIAgNh+1the5ehrOOKP0Ya/9AIm4miea6Pjk4kYbFeb9LAVNhimJhkjCM/C7zEsooV"+
                    "dfAPOsIQtA5iU+cRtgiAKdga0sNNJHFMfGMRcYVofnk1Li5/Xx4ClpjCDRy54tc4Xpi2FDC7t6ii"+
                    "sQI+LSb/t1wEwBJMLfIHuElNnCo4qIXiWxYV5UksEChiedAiaSJxeKeN59U0Hj820YwUC+AyTwKG"+
                    "YGlRcOhvWJZqHGUMmAqSBfSS1h3vmdLl8ckICMP3wTI5lRsb4iSKOFQysOcTVbDM6E251kUhY/cO"+
                    "7IRh8Hde0VnhIjBMkiyKOMxOo8mvVf6vtWh0V/EUlEs6BMAODC1ywUVomRZFHGXx/52FEhPhF/nW"+
                    "HpBVZEznz5Pf6882CTM5lB+0wAJs4SIkccRhpHwcSl3yQn8Frl9W0f6S1/mjAQHtdP9Fc9vLhmRE"+
                    "w0HkcQa/r7K0HHYBrlRISkOeHu1z/U5e99DPXInMJYiAsBoUVjfq7dFgTOgJbXtbgd8ThCRO40hI"+
                    "BuNcpzRH5aR9EkdtLskIgJGGye1glpzSjQX7SNKINaHNft2VCkkEK1r7QZ2dOzTZXu0+5P9EIiCM"+
                    "DgijZZGRwZd4pt5WiBwmSWoijjQzFLq5MUiX5rvdGrutfrRgKGvCRQubj4TNEnXMZhRj64YtnFgx"+
                    "apJyYtW4u66xpXwacULrktXydMeqtyH/hI0GE7BRB21IA+tIS9IPkO3v3TjnMN2fMepejXtXX9YR"+
                    "jeWLdW/zUUQVM6HeibQRHflYJ23bbdkxPFKxQ6RXhi1xFAQRiUcbKFRru4Mydzn//lWRZzMUk21C"+
                    "ikgbVXhQ89pOyw6iaTZaaf4Tvr4K2Q86X8E7YOSLCt5qcfk3nc0fEnHXn6vkiTCODPbqUNIvg+jE"+
                    "PjGqWf9M1lbjvNogj78QY9QkDQ2vFcmbd66Rh6aJtE0DAwPbPOAMV6xIhkijj9grJy1xFIzx4R7K"+
                    "9AqJu4q8/fphxSmdOJ1/rpAHaZoqfqLjfk/G4RLxnr8hg1JYS1riKBirB40zzndu4qGhA/IWYLAs"+
                    "FHnl1EcxTSEibVgL7PXa0X4uRYMx+7EJUkm5QLKxh0us3aY2DBZ16IA6tlgbhxPSNSZrekAjy0q5"+
                    "s3bZYFJMgyHy3xTpx5Ia56qxlOEb8l6qYP7rZ+N5+Q/cfyHn9JfVyfG3TXyHG0t9ekNa9h11w8oi"+
                    "LHaXj595rSwgytW4Yt3uBh/EGS3NYoZBad9OfZ2t0sA50j7bfF59DXXVFHBGa7Sf60O8Ww1zz/Rb"+
                    "NpBfnZZNGnVUonFeG1nfXaaQdgjs0ZfK/4Q1VwRm0Q6vPVW/6qMriLT9Wp/hDbFxGPvbBGnvKlR0"+
                    "Ui4rwCDvswpphk0lF9sdHQsFxDqBcLmMF/ddo/7DcQN9bO/oQ3tAWvZKGe1keHxfoeKOZkUcfaAs"+
                    "fhBitVQgg18EyG0CZo0IvLTRCCwS9p7a1av2/cbf7hT3bIpi9pc1p5XWkyVxXtnsJMzwHtJeNf8t"+
                    "kQbepTXgVfqy0eS6idoxqva8pXZsSuFrjGovJr/7Y42oyHLeVYM42oHWXaxQCfCz5X1YKWPmOoWu"+
                    "Wmkh2iWD44TCq8UTxgfpUJnCkPiBgvEYSNryq0Uc7WhTmKlgtdYjQ5zoy+c/QV+qJcRc+UG7pQFT"+
                    "slpOFHel+f+ej+l+vzSrT+X/Ma4tKd57vkccFplLNYmjsZTP0HkhDxlJm7Rikaw6/lP0WSKwW9ep"+
                    "urbryn+WzhJHl5ZWveOL18VdNI7wrPdDun6i6zFdD8mq7Zc29ytdlgDj5WdozGQ+UzkhqTZxXoUs"+
                    "FRg6K9Y+r8AGvaJlDI2Y/FWVWhFHJ6jrAoWLFCqZ+5S94QTN/lABn2PVtMzf61oS59WLtwSrkx31"+
                    "etTvtSOLKyRxrh+r0bhrnUWFXhn1BA4CmfsgsNk0EA2DMOaymhKm+lypJ3FeGzAmPAIr9Z16ZVbr"+
                    "yn6kR5j1pmc1GtMIxHn9oi0cjUADU7vOvEKqcGU4PKmA5x+XVU3mMNWTKI1EnL+haB6LeIhkw7bW"+
                    "7YQcdqRZOBMYGhtKag1IOZ2njWggBLKsIGQ9J0IMJjwBwhpGs9SWSGkG4qIa7u2+c/UCWkrwSPXm"+
                    "S28ughzuCZyb8QJrL+5zyRGoPgL/B+Nop/F9kw+nAAAAAElFTkSuQmCC"
            },
            template: template
        };
    }]);

angular.module('ng-walkthrough')
    .factory('ngWalkthroughTapIcons', [function(){
        var double_tap = "data:image/png;base64," +
            "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAAXNSR0IArs4c6QAAAAlwSFlzAAAL"+
            "EwAACxMBAJqcGAAABCZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6"+
            "eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYg"+
            "eG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4K"+
            "ICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlm"+
            "Zj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9"+
            "Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0"+
            "cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0"+
            "cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0"+
            "PjE8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjU8L3Rp"+
            "ZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNv"+
            "bHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgog"+
            "ICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAg"+
            "PGV4aWY6UGl4ZWxYRGltZW5zaW9uPjUxMjwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAg"+
            "IDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhl"+
            "bFlEaW1lbnNpb24+NTEyPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgICAgPGRjOnN1Ympl"+
            "Y3Q+CiAgICAgICAgICAgIDxyZGY6U2VxLz4KICAgICAgICAgPC9kYzpzdWJqZWN0PgogICAgICAg"+
            "ICA8eG1wOk1vZGlmeURhdGU+MjAxNTowNToxNiAwMzowNToxMzwveG1wOk1vZGlmeURhdGU+CiAg"+
            "ICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+UGl4ZWxtYXRvciAzLjIuMTwveG1wOkNyZWF0b3JUb29s"+
            "PgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4Kf7BW"+
            "+AAAQABJREFUeAHsnQlgFEX2/7tnJkEEDGjCDQn3JSSAB3eCCnhCvH+uukRXDUm43Ms9/K1xf+71"+
            "++8qVxLwAlyP/eEVFG+FBBQEAWERAcGViAICKpcgZDL9/745whCS6Z7JHN0z39ptM9NVXfXq0yH1"+
            "6tWrV4rCRAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIk"+
            "QAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIk"+
            "QAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIk"+
            "QAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIk"+
            "QAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIk"+
            "QAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIkQAIk"+
            "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";

        var single_tap = "data:image/png;base64," +
            "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAAXNSR0IArs4c6QAAAAlwSFlzAAAL"+
            "EwAACxMBAJqcGAAABCZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6"+
            "eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYg"+
            "eG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4K"+
            "ICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlm"+
            "Zj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9"+
            "Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0"+
            "cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0"+
            "cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0"+
            "PjE8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjU8L3Rp"+
            "ZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNv"+
            "bHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgog"+
            "ICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAg"+
            "PGV4aWY6UGl4ZWxYRGltZW5zaW9uPjUxMjwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAg"+
            "IDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhl"+
            "bFlEaW1lbnNpb24+NTEyPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgICAgPGRjOnN1Ympl"+
            "Y3Q+CiAgICAgICAgICAgIDxyZGY6U2VxLz4KICAgICAgICAgPC9kYzpzdWJqZWN0PgogICAgICAg"+
            "ICA8eG1wOk1vZGlmeURhdGU+MjAxNTowNToxNiAwMzowNTo1MTwveG1wOk1vZGlmeURhdGU+CiAg"+
            "ICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+UGl4ZWxtYXRvciAzLjIuMTwveG1wOkNyZWF0b3JUb29s"+
            "PgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4K8lN2"+
            "oAAAQABJREFUeAHsvQl8FNeV73+rqrulVkto35CEQDuLALEasZjdxju2WZI48W52P9sT5832ecO8"+
            "/0wyE2fsDAgwjomd+U9ih9jEccZO4g1wbGyMbXYQi0AsQiC0ILT3UvXObamFAEm9qJeq6l/5I3er"+
            "6ta953xvoXvq3nPPYQwHCIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAA"+
            "CIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAA"+
            "CIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAA"+
            "CIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAA"+
            "CIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAA"+
            "CIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAA"+
            "CIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAA"+
            "CIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIAACIBAuBAQwkVR6KktAi+88IKF"+
            "jlxFUfIERRgqCEoyk1k0E5iRfsRubRQ6qzAbnWlWFOGyIiiVkkOqECKEymXLljV2l8MXEAABEACB"+
            "6wjAALgOB34JFYHN69blOgyGYkFRihTG8kiOPBrYh0uitFuUhLMRZnOLQRRbBEGw04/skpMMBJF+"+
            "DHZZttis1mi71Z7lkB23kJFwgsqcY4pQTcbDeUUWTjCJHVq5cuUp1734BAEQAIFwJgADIJx7P8S6"+
            "v7zu5REOyTGFBv2pTBBKzWZzVXJyipyWlpaUkpKSnpSclErnvJayra2NNV650lxfX3+2pqbmXG1t"+
            "XXtDXZ3R4XDkkGHwVzIGdkgmaTvNEFR7XTluAAEQAAGdEIABoJOO1IoamzdvTndYHbOYqMymN/zZ"+
            "CQnxFbn5+ebc3NzR8fHxMYHUg4yBj8uPlNeWHysXHXbHYMbkP9BUwh9Wr159PJDtom4QAAEQUCMB"+
            "GABq7BUdylRWVlZAa/n30PT9fRaLuXH4iJFxBYUFxbGxsQEd9PtCWVlZ+ddvv/669tKlyzlkCGyV"+
            "FGXbsjVryvsqj/MgAAIgoDcCMAD01qMq04ev7cuStIgc9JYmJMaX3zJlSmF2dvZYtYhJswLVX+76"+
            "8psLVeezFaa8CUNALT0DOUAABAJNAAZAoAmHaf1btmyJsba1PaQw8ZGExISTM26dUZienj5erThq"+
            "a2sv7Pps17dVF84PoX8Ub4gOx++WPf10hVrlhVwgAAIgMFACMAAGShD330Rg0/r1MxVRXB4ZYbbN"+
            "nTdnSNaQITNuKqTSE5drLld/8skn2+vr63KYomyRjMZfkbOgTaXiQiwQAAEQ8JkADACf0eHGGwm8"+
            "9tprkW0tLcsZE54ZO7Zk55SpU+6lMrE3ltPC72fPnv30L3/6S6Xdbm+XmbyOHAUPa0FuyAgCIAAC"+
            "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"+
            "bgkNsbdosXg6vNHi3rvo9vb2cWKbMrFNtfgG3yz2aRf/YCniNe2PR7TVItq6IK7UrxDXJpRysPfH"+
            "SNKmmQUoAMw8uuSGgI4FFi9e3DvSHjlUnEZIFDMHCeJg3lsLVxQLP4iL8irFRXllbq/7zIsvvviD"+
            "jtMgNAQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBA"+
            "AAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAAB"+
            "BBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQ"+
            "QAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAA"+
            "AQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEE"+
            "EEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBA"+
            "AAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAAB"+
            "BBBAAAEEEEAAAQQQQMA/Av8His1M8CdS5OYAAAAASUVORK5CYII=";

        var swipe_down = "data:image/png;base64," +
            "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAAXNSR0IArs4c6QAAAAlwSFlzAAAL"+
            "EwAACxMBAJqcGAAABCZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6"+
            "eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYg"+
            "eG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4K"+
            "ICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlm"+
            "Zj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9"+
            "Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0"+
            "cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0"+
            "cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0"+
            "PjE8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjU8L3Rp"+
            "ZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNv"+
            "bHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgog"+
            "ICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAg"+
            "PGV4aWY6UGl4ZWxYRGltZW5zaW9uPjUxMjwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAg"+
            "IDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhl"+
            "bFlEaW1lbnNpb24+NTEyPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgICAgPGRjOnN1Ympl"+
            "Y3Q+CiAgICAgICAgICAgIDxyZGY6U2VxLz4KICAgICAgICAgPC9kYzpzdWJqZWN0PgogICAgICAg"+
            "ICA8eG1wOk1vZGlmeURhdGU+MjAxNTowNToxNiAwMzowNTo4MTwveG1wOk1vZGlmeURhdGU+CiAg"+
            "ICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+UGl4ZWxtYXRvciAzLjIuMTwveG1wOkNyZWF0b3JUb29s"+
            "PgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KduN/"+
            "NgAAQABJREFUeAHsnQmAFNW1/qu6e2ZAhQGdYRVm2JFthl0RmME1LAouGI1GFheYHkDN/z2Tl5iX"+
            "8cWXxZeowHQ3RBRI4hITFVAhLsjgjooCyiagIAjKorLDLF3/73ZPYzPM0ktVV92qr5Kyq6vucs7v"+
            "NnNP3XvuuYrCgwRIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARI"+
            "gARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARI"+
            "gARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgAQiBDRN"+
            "K4lc85MESIAESIAESMABBAK+wAPPPfvcgQWPL1jqAHWpIgmQAAkkRcCVVG5mJgErEdCC1x38/vvm"+
            "x48f+5Hf53/aSqJRFhIgARKwGgEaAFZrEcqTEIGAz/ek6nY16tS5k9qmbZs9iqZdllBBzEQCJEAC"+
            "DiFAA8AhDW13NTVF6desWbPPhg0frlw9duzZqqLu8pf659pdb+pHAiRAAokSoAGQKDnmswyBkpIS"+
            "j6IpHX98440bq4XKzGjcaK2ian0tIyQFIQESIAGLEaABYLEGoTjxE2iR1eJ/FFVZj5z5kdy3Trh1"+
            "JYwCGgARIPwkARIggRoEaADUAMKvEhJQlc6qpn4CyQsi0rvd7uGqomwMzAz0itzjJwmQAAmQwA8E"+
            "aAD8wIJXkhJQNa173755S2qIX6gp6keKJ/jrGvf5lQRIgARIAARoAPBnID0BOAB2zevXr1kNRXJa"+
            "tWk1F9MAF9S4z68kQAIkQAIgQAOAPwOpCcyaNet8zP/vbdSo0dCaiowePbqtMA5q3ud3EiABEiAB"+
            "GgD8DUhOwOP23KVo6haoccoBMKJSenr6UGEchIyEyE1+kgAJkAAJhAhwBIA/BNkJdFZVbQOUyKtF"+
            "kUJhHISMhFoe8hYJkAAJOJkADQAnt74ddNe0HkOHD19Vhyp51cZB5zqe8zYJkAAJOJYADQDHNr38"+
            "imNoP0NV1fa9evXKqkubkHEAI6Gu57xPAiRAAk4lQAPAqS1vA73T3O5fwct/HVQprEsdGAeYIlDb"+
            "C2OhrjS8TwIkQAJOJEADwImtbhOdsc6/O8L9roU6ZzgARqkIPwBlncfluS/qHi9JgARIwPEEaAA4"+
            "/icgLwARAKhl69bzoUFOPVoUwEj4GFEBGQ+gHkh8RAIk4DwCNACc1+Y20ljtNmrUqLMbUmjAoEHL"+
            "NFVjSOCGQPE5CZCAowjQAHBUc9tHWZ/P1w7afJ2RkXFGAKCaWg4YMKADtgfOoR9ATTL8TgIk4GQC"+
            "NACc3PoS6+5W1emI8rcVKhTGoAb9AGKAxCQkQALOIkADwFntbRttg5rWCWv8N0Gh+hwAI/oW0g8g"+
            "goKfJEACJBAmQAOAvwQ5CWhKty7dui2C8JkxKJDZu2fPf9APIAZSTEICJOAYAjQAHNPU9lIUc/pd"+
            "hg0b1jRWrS4uKMihH0CstJiOBEjACQRoADihlW2mY8QBEJv9DItDNfoBxAGLSUmABOxPgAaA/dvY"+
            "dhpGOQDGMv8f0Z9+ABES/CQBEiABEKABwJ+BdASiHAAL4hA+h34AcdBiUhIgAdsToAFg+ya2oYJw"+
            "AOzfb+DyeDWDH0Am/QDipcb0JEACdiVAA8CuLWtjvYQDYN8BfTskoGLIDyC0iVACmZmFBEiABOxE"+
            "gAaAnVrTAbpEHAA9Hk/vBNQVfgBrQ5sIJZCZWUiABEjATgRoANipNR2gC97+Z1RHAIzHATBCJk9s"+
            "HiQ2EYrc4CcJkAAJOJUADQCntry8endGBMANED8vERXCmwep3RLJyzwkQAIkYCcCNADs1JpO0EXT"+
            "egwdPnxVoqpWbx70dfVUQqLFMB8JkAAJSE+ABoD0TegcBcRufqqqtu/Vq1fnJLQuFFMIYiohiTKY"+
            "lQRIgASkJ0ADQPomdI4CIe99TVkHjROZ/4+AKqieQkjGiIiUxU8SIAESkJYADQBpm855goe89+HF"+
            "D82TMQCU0BQCphKcR5AakwAJkMAPBGgA/MCCVxYnILz3hRc/xMxJRlRMIWSJqQQxpZBMOcxLAiRA"+
            "AjIToAEgc+s5Tna12+jRo9vooDY3BtIBIosgARKQmwANALnbzzHSRwIAYQfARAIA1eTEjYFqEuF3"+
            "EiABxxGgAeC4JpdT4agdAAt10CBzwKBByzRV66VDWSyCBEiABKQkQANAymZzntBROwAm5QAYITdg"+
            "wIDm3BgoQoOfJEACTiRAA8CJrS6jztgBsEu3bosgeqZO4tMPQCeQLIYESEBOAjQA5Gw3x0ktdgAc"+
            "Pnx4ex0Vpx+AjjBZFAmQgHwEaADI12aOkzjiAJiWlqaHA2CEX07vnj3/QT+ACA5+kgAJOI0ADQCn"+
            "tbiE+kY5AOoy/x9BcHFBQSb9ACI0+EkCJOA0AjQAnNbiEuob5QBYoLP4IT+AUIhhnQtmcSRAAiRg"+
            "dQI0AKzeQpRPUeAA2L/fwOUGoBB+AGtDIYYNKJxFkgAJkICVCdAAsHLrULYQAeEA2HdA3w4G4MgT"+
            "oYVFiGEDymaRJEACJGBpAjQALN08FC7iAOjxePR0ADwFdtSoUWcritrt1A1ekAAJkIBDCNAAcEhD"+
            "y6om3v5naIqyFfLr6gAY4ZGRkTEU119XGxqR2/wkARIgAdsToAFg+yaWXsHOqqptgBZ5BmlSKAwM"+
            "YWgYVD6LJQESIAFLEqABYMlmoVCnCGhaj6HDh6869V3/i4JqA6Oz/kWzRBIgARKwLgEaANZtG8dL"+
            "NmvWrAxVVdv36tXL0M45ZGDA0HA8cAIgARJwFAEaAI5qbrmUDa3P15R1kNqQ+f8IDRgYWcLQEAZH"+
            "5B4/SYAESMDuBGgA2L2FJdYvtD4f6/ShgqEGAMrnxkAS/04oOgmQQGIEaAAkxo25UkBArM8X6/RR"+
            "VY7B1XFjIIMBs3gSIAHrEaABYL02oUSnCKjdRo8e3ebUV+MuMgcMGrSMGwMZB5glkwAJWI8ADQDr"+
            "tQklAoFIAKD09HRDAgDVhDxgwIDm3BioJhV+JwESsDMBGgB2bl2JdYvaAbAwRWrQDyBFoFkNCZCA"+
            "NQjQALBGO1CKGgSidgA02gEwUjP9ACIk+EkCJOAIAjQAHNHMEiqJHQC7dOu2CJJnpkj6nN49e/6D"+
            "fgApos1qSIAETCdAA8D0JqAAtREQOwAOHz68fW3PjLp3cUFBJv0AjKLLckmABKxGgAaA1VqE8pxy"+
            "AExLS0uJA2AU8pAfQCgAUdRNXpIACZCAHQnQALBjq0quk9iYx8gdAOvBI/wA1oYCENWTiI9IgARI"+
            "wA4EaADYoRXtp0NkB8CCFKuWJwIPiQBEKa6X1ZEACZBAygnQAEg5clbYIAHjdwCsU4RRo0adrShq"+
            "tzoT8AEJkAAJ2IQADQCbNKRd1IjaATDLDJ0yMjKGot6vqwMRmSEC6yQBEiCBlBCgAZASzKwkVgKp"+
            "2gGwHnkKhf+B8EOoJw0fkQAJkID0BGgASN+E9lIghTsA1gWuQFW1DXjYua4EvE8CJEACdiBAA8AO"+
            "rWgjHaJ2AMwzS62hw4evUuCHYFb9rJcESIAEUkGABkAqKLOOOAio3cKOeHFk0Tlpr169sApBbS/8"+
            "EXQumsWRAAmQgGUI0ACwTFNQkMgOgNWOeGYCyVc0ZZ3H5bnPTCFYNwmQAAkYSYAGgJF0WXZcBKJ2"+
            "AEzVBkB1yceNgeoiw/skQAK2IUADwDZNKb8iJuwAWBe0zAGDBi3jxkB14eF9EiABOxCgAWCHVrSL"+
            "Dj/sAJhjtkoDBgzowI2BzG4F1k8CJGAkARoARtJl2XERQIfbZdiwYU3jymRcYvoBGMeWJZMACViA"+
            "AA0ACzQCRVBO7QCYnp6e6h0A68JPP4C6yPA+CZCALQjQALBFM8qvRJQDYKFFtMnp3bPnP+gHYJHW"+
            "oBgkQAK6E6ABoDtSFpgIAQs5AJ4S/+KCghz6AZzCwQsSIAGbEaABYLMGlVYdOAD27zdwOeTPtJAO"+
            "IT+A0P4EFhKKopAACZCAHgRoAOhBkWUkTUA4AOb3z2+edEH6FiD8ANaG9ifQt1yWRgIkQAKmE6AB"+
            "YHoTUIBIBMC0tDSrOABGGiWvZevW88X+BJEb/CQBEiABuxCgAWCXlpRYD7z9zxBb8EIFsyMAnkFx"+
            "9OjRbRRF7XbGA94gARIgAckJ0ACQvAFtIj423wltwVtgNX2qlyV+XT1KYTXxKA8JkAAJJEyABkDC"+
            "6JhRNwLYeje0Ba9uBepaUKEYnRCjFLqWysJIgARIwGQCNABMbgCnVy+23BVb72IL3iyLsiioHp3o"+
            "bFH5KBYJkAAJJESABkBC2JhJLwKhJXbYehflWW7+P6JjaHQCoxSR7/wkARIgATsQoAFgh1aUWIfQ"+
            "EjsstYMKljUAMDoBHwW1vRitkBg1RScBEiCB0wjQADgNB7+kmoBYYieW2qHevFTXHUd93BgoDlhM"+
            "SgIkIAcBGgBytJONpVS7jRo16myLK8iNgSzeQBSPBEggfgI0AOJnxhw6EYgEAMrIyBiqU5FGFZM5"+
            "YNCgZdwYyCi8LJcESMAMAjQAzKDOOkMEonYAtOz8f6SpBgwY0IEbA0Vo8JMESMAOBGgA2KEVJdXB"+
            "ijsA1oOSfgD1wOEjEiAB+QjQAJCvzewjMXYA7NKt2yIolCOBUvQDkKCRKCIJkEDsBGgAxM6KKXUm"+
            "IHYAHDZsWFOdizWquJzePXv+g34ARuFluSRAAqkmQAMg1cRZX4hAxAGwOta+FFQuLijIoR+AFE1F"+
            "IUmABGIgQAMgBkhMoj+BKAfAQv1LN6zEkB9AKHqhYVWwYBIgARJIDQEaAKnhzFpqEIhyALTcDoA1"+
            "RI3+KvwA1oaiF0bf5TUJkAAJSEiABoCEjWYHkVVN7d5vwIDXJNMlr22rVo9D5gskk5vikgAJkMAZ"+
            "BGgAnIGEN1JCQFUuGDRoUGZK6tKxklFjx7ZWuDGQjkRZFAmQgFkEaACYRd7B9Qb8/v/VFO0TILB8"+
            "AKCazeR2u/MUVflU6FDzGb+TAAmQgEwEPDIJS1ltQiCoXaEo6kpoU5ikRgeRvwznmurze3wq2Lmv"+
            "TNM0YVw0E99xFOIU38WZbMyBQkWD7JrQQfkVTh4kQAIkICUBVUqpKbShBLDtbdO0tLRGrhMud7mn"+
            "PKnfiMfjUYPBoAud8llKUCmGE90wVVOOF00rHoJOWktAEdHpL8L5iN/vx8u48mtco1NXz0OnLKYU"+
            "zsJNj6Iplbg+hvMQ0hzQVOUrCLFp1JgxL7Rr1+463B+HMyFjALqogVLfOyizMYyBNxWX4oMqx1wu"+
            "V7CysjIRnRSRF2VUgPuhKVOmVEA2HiRAAiRgKIGk/rgbKhkLTymBgM83H53mhei9OqMDPYpO+gSu"+
            "q3CdUIcWER7lIL8aVBQNnbH6NTrND73F3v9EZ1eINCsi6WL4FB3/3TgXBXwBn6oqV6HgrSh9o6pq"+
            "3+D+kRPl5Q+1PXjw2AZFqeyhKJ6vMjPPapSe/jM8OwsnDAQ1F+KIbYd3Q5aXi4qLxDRECc4cnPEc"+
            "I2ADlPl9/v+DfgOgWyuUhzo0F/RL6N8UsrmgTxrKa4oSDkCv1UXTvFfFIxTTkgAJkEA8BBL6YxVP"+
            "BUxrfQKPPfroC5UVVUObNG26YvyPx5firR0dtuGHeAO/K8Za7ke6R+b4AgF0jj9G5/hSUNVuKi4u"+
            "PhJj/tOS+Uv9v0M5Q4UzHwyJv071er9EghKcsTolLkTaBTgNOXbs2HHuiteW/6ZKC551+x13dDGk"+
            "EhZKAiTgeAI0ABz/E1CUxx6dt719Tvucyy6/3Go01kKgiXP8/kmYLLgNb8krGnorFtMXyJOB8+SM"+
            "GTMO1afQvIceOrciPeNlTVXdk2+bPB7bEj+L9GKEwBLHY/Meq6gor3gQIxX3WUIgCkECJGArAnQC"+
            "tFVzJqbMyfKTOw8c+HYPcl+YWAmG5Fp86NChyU/8/YnXEDOgwp3mboG5cTGnf8YRnr5Q+2J4vyve"+
            "7MuR4CTODH+pLx1Gw2cYWv/IO807uWbG23/2s29xbyCG8gOPz3sMUwku/1Tv1DW4N6FmWhO+r60o"+
            "L2+BaYVUjMaYoB6rJAESMJsARwDMbgEL1I837AfhgXZjkdf7OsSxQue3MOAP7EPndw9+oPOKioun"+
            "1oYJHf8/0LmPwbNVXbt1e3Do0KG98BZ/TiTt8ePH1y9btmz3N19//VtMGwyCMfACRhBuijyP/pw7"+
            "d25aVWXVR0j3Od64n8ez+dHPU3x98K3lywd9uvmzsqJib5sU183qSIAEHEKABoBDGrohNeHVvhIO"+
            "bNthBKBPNdUIWAiDpAoOewWuNHef2t76hfMd5u9vwdv+mptvueWRpk2b/hdkLqhHx4V79uz546Ln"+
            "n38IHXwfOOz9DSMCv6gtvd/nex3/KILwC3gRzx+uLY3B94SzY2HA518E/4TFMH7uMrg+Fk8CJOBQ"+
            "AjQAHNrwtamNzu/7AQMH9h44cOALeG7GXPhivPlvgSf8NXhT71yHjAvRiY/s2bvXxcOHDy9Gmng6"+
            "yJkrVqwIbNq48Q0YAa9gNcJP66jjdRgghzES8B2eT6gtjYH3rpnj8/8Kxg1GIop/bGA9LJoESMDh"+
            "BFwO15/qRxPQ1DmrP/hwFW4V4twR/SgF1zsOHz58G97s7xZv/rXVB+/9x9H5D8GweFd0/v9Emng6"+
            "f1HkXSNGjHgZoxxXYnqhD0Y9nqutHm9x8SXogDvO8c/5Hs+FI2Kqjkno/O/BSMwedv6pQs56SMC5"+
            "BGgAOLftz9BcDIvDke5VhLldiYdimZ4Yjk7VMfHvf/sbNgdS59Y67F/q/y067avR+Q+EQGU4Ex2h"+
            "yEHej2EEPIy5jjYwKhbj+xmH2+PupynBaSdPnrwWD1PBYSa4X4sVCeUwQK4+QyDeIAESIAGdCdAA"+
            "0Bmo7MWh85kAr/stmIOeA10KU6TPQgT3uRZD/8dhhEyrtU5Vm9C1Y7fheFaGM9HOP7ro+TAmnkac"+
            "o2xMfSyJfiCuw9H41AXz5z32d3x9pOZznb8Lvwc3uLfHtITl1mLqrCuLIwESsAgBGgAWaQgriYH5"+
            "9+vhgPY1hqP9kGuSwbKJt+u7Ud8dFcGqEbXVhbf0Bbi/8dKRl96JTz06/0g1D08t9n4GwyOrNiMA"+
            "nfHteCPPQshhYQQYNSWydt26dfchzsGkb/bv7RcRjJ8kQAIkYDQBGgBGE5a0fMxBYwpAPQAjQBgA"+
            "9xuoxgIR2hdz/8sQuEes36/l0K65fvz4mXgQ75x/LWWdcWsCjID36zICMEKwTFWUp5Gr5Iycyd8Q"+
            "RkXhO2+9/T5Yl5aUlHDNf/JMWQIJkECMBGgAxAjKiclE1D0xJ425afFmutAgBhhe18Z/s3/fDbWV"+
            "j7X+c9ABr8rOzr63tuc63bsLRsBf4GDYAvUtii6zehleu7KysrdwX09fAFHWOOFvIfwu6lqWGC0L"+
            "r0mABEhATwI0APSkacOyxJy0mJvGHPVhqLdWZxUXo9x74HG/Am+/Yve+Mw4MjY8YPOSiUjyob53/"+
            "GfkSuCF8AubAMTAHcQbEG3/08dam9RsexI3TjIPoBAlci7X+c4S/hfC7SCA/s5AACZBAUgRoACSF"+
            "zxmZxdy0mKPGXLWIuqenEbAIb91XKKo6ozaSs2fPbgPj4Oy+ffteUttzA+7Nx+qASRiRGCJGHiLl"+
            "YwRiPQyDEfiulwEglvv5hZ+F8LeI1MNPEiABEkglARoAqaQtaV3huWm1NDxXrd/ywI0bN67Dmvdz"+
            "vV7v5trQuF2u3+MN+U08G1fbc4PulSG6YD46/NtDuwaiEkwD/DeMlO99Pt/HOtR5f9ivQj0Q9rPQ"+
            "oUQWQQIkQAIJEKABkAA0J2aJihGwGPoX4hRz2MkcO1auWPETFPBRPYX07Nil0xN4nlNPGr0fZSK0"+
            "sIgEOBtv/jdjJOD3ogJV0/a7VfVXuFyZRIXY48DfT/hVCP+KJMphVhIgARJImgANgKQROqeA6rnq"+
            "rdUxAu5OUvPtmqJ2R0e7pc5yNKXT4MGD29X53LgHeQgD3FxTtQ8h3/hAqf9fGBFoiutGqHJNgtWu"+
            "FH4UXOufID1mIwES0J0ADQDdkdq7QBgB12Fefm/18sBJSWhbhrxt0Mk+XlsZs2bNylBVtVFmZmbL"+
            "2p6n4N4E+AO8gCkKbCesjUV97WAEHMDn9wnULdb638K1/gmQYxYSIAHDCNAAMAytfQuGEXB19fJA"+
            "ESZ3YaKaYu19U3Tyh2rL73K5zkGHewTP8mt7nqJ7jxR5i36J+f+F2Ep4KaZB7kG9ZXHWLaZKxnGt"+
            "f5zUmJwESMBwAjQADEdszwpqLA8UfgGJHGmaplXUlhGGQRrm4MWzZrU9T9G9TNSzQEQETNBbX3T+"+
            "hZj3X8y1/ilqMVZDAiQQMwEaADGjYsKaBKKWB4r4/WtrPk/mezAYdKHTFJHxzDQAhAp5MFIeSVCX"+
            "idX+Elu51j9BgsxGAiRgGAEaAIahtX/BNZYHFkLjHXFqXSHe9BvIk9fA81Q8vgtGQGGcFYW29hX+"+
            "EiG/iTgzMzkJkAAJGE2ABoDRhG1eftTywJVQdRxOMewd0wEHu0PoWJvGlNj8RIsgqxiNKIxBFLHc"+
            "j1v7xgCKSUiABMwjQAPAPPa2qVkMb4uQttXD3cIIiOUoRKLdyDc5lsQWSCP8ARbhFEZAfYfY2pfL"+
            "/eojxGckQAKWIEADwBLNIL8Qwkmuegvh30GbSTFolIud9jYhwk6XGNJaJUkBBKnPwFmL41dc7meV"+
            "5qIcJEAC9RGgAVAfHT6Li0CcWwjnFIwY8SQqEDsNynTk1CGs8H8ofOftt1fBEPJxa986KPE2CZCA"+
            "ZQjQALBMU9hDEBHiNtYthC+44II+iAXwrd/v71aP9vE6FtZTlGGPhN/DOARHWoygwW/BEPq5YTWx"+
            "YBIgARLQiQANAJ1AspgfCNSIEVDf8sBxCAf8qqJps37IHb7yeDwqjAPEAlK213xmwe/jMO9/Ewyf"+
            "c6H7jRaUjyKRAAmQwBkEaACcgYQ39CAQFSOgvi2ExyLm/kPo5i955pln3HrUa0IZk7CUsQz7BBTC"+
            "p6HMhPpZJQmQAAkkRIAGQELYmKkhAjViBAjHubqWB96NOfN/7t+7/7k6ytxex32L3dYaa5p61GJC"+
            "URwSIAESqJMADYA60fBBsgSiYgRgblwpxFmbETBxqtfrxWqAyx566KHGtdS5vZZ7Vrr1COID5GMq"+
            "4xPo0MNKglEWEiABEqiPAA2A+ujwWdIEqkPg1reFsFhf/wiG0B9rlJHxXqRCrUorhgOA+H1uj9yz"+
            "6GdovwBMZRRjKmPk3LlzG4psaFE1KBYJkIDTCNAAcFqLm6BvKBQuQuIG/IHJqP6eWkSYgA4UUwDq"+
            "Mb/Pv1Q8VxUlG6fwC9guvlv8EOGKF6iqy1dVWbXK4rJSPBIgARIIEcDfWB4kkBoC6NxfhWf/ianF"+
            "RQdQ44QatYrlfvlz/IENcP7/DNdBpO0ytdjbG9ff1Uhr1a/3YDWAcHr8DksBx1tVSMpFAiRAAoIA"+
            "RwD4O0gZAbE8EJW1QycpnOWEX0D0IQLsLCoq9rbBUHouzgJMAXwFD/vvcb8234HovFa5fhj+DA9g"+
            "OmMQdHzQKkJRDhIgARKojQANgNqo8J5hBBAoKB+hcm9dt25dbVsIF8ChboF3WnEuVgb8FRMBr1cL"+
            "ssYwgfQveNGIyy65KBjUvFgJwX9f+vNliSRAAjoR8OhUDoshgTgIqL533nzrwz59+nRHpu04hSNd"+
            "5JgAI0DBm//EyA18luEsiPpu5cvMbt26LV2xfPn8llktPoKg+VYWlrKRAAk4lwDfUJzb9qZpHl4e"+
            "qP4bToFvQohCnDWH+IURENl+V8hZJv4j0ZGHqYAm2O54l9/nWyaR3BSVBEiABEiABIwnECj1/ytQ"+
            "6vsAnX0hztqO7biJKQOtWW0PJbg3UegH58e/GU+TNZAACZAACZCARATQOT4PQ2AVOvOJ9XToJXj2"+
            "ST3PrfroewiWH/D5d/tL/X+QqFkoKgmQgAMIcBmgAxrZ6ipimHyJqqnn3lk05cPy8vK7Tp44oVRW"+
            "VSknjh9Xjh49qlRUVCjp6enlXbp2Tbe6LrXItxYOj2PefvOtjXBubFLLc94iARIgAVMI0AAwBTsr"+
            "rUkAQ+WvBDWt4oofXXk0GAyOP37smHIChsBxGAHHcO1yuZQfjRxZM5ss3xeKpY9Y1jgYQZEGyCI0"+
            "5SQBErA3AToB2rt9pdGuaFrxFS7V1XbpS0sPYNh8k9vtDnX6LpdbEdcnTpxUMDogjT41BJ0Ap8At"+
            "iA9wMODz/bPGM34lARIgAVMI0AAwBTsrrY0AIgT2TfN4btm4ceMYrKPfLDp+t9uluENGgEvZt29f"+
            "bdlkufcwwh3/PzEKACPgj7IITTlJgATsS4AGgH3bVjrNsPYf/aPq+3r3nje/P/j9nVDgSMgI8IRH"+
            "A/bs3i2dTjUEXjRg4MCLoeSUGvf5lQRIgARSToAGQMqRs8L6CES2EF7/6aezv9333VVIezQ8EuBW"+
            "vvn6G5mnAYTaOQMHDvwtHG+eheNjmbjBgwRIgATMIkADwCzyrLdOApEthLds++wPWBFwv3AAFNMA"+
            "VcEqZfsXX9SZT5IHwh/gBYx0nIepgJmSyEwxSYAEbEiABoANG9UOKkW2EN64YeMYGAF/dGMaQBgB"+
            "W7dutYN6C8ZdM248pgJut4My1IEESEBOAjQA5Gw3R0gNI+BqTVXLP9uypcfJkyeXiakAESPg822f"+
            "y65/ZuvWredgFOApTgXI3pSUnwTkJUADQN62c4TkYgthBAlqv3Xrtu1BLfi2C0bAmo8/lt0XQLRd"+
            "QZG36FN8tsBUwJ8c0ZhUkgRIwFIEaABYqjkoTG0Evtm/t5/H7b7VE0z7KSIEbhe+AJgaqC2pbPdK"+
            "hg4b9lNFU26RTXDKSwIkID8BGgDyt6HtNSgpKQliuLz0853b3t6+fXuhx+M5tnnzJjuMAmT27t37"+
            "z2jA1dgP4a+2b0gqSAIkYCkCNAAs1RwUpi4CkeWBZzVuvOS8rKyR2B/gxPr16+tKLtP9ggmTJy1Q"+
            "VGW8TEJTVhIgAfkJcC8A+dvQURrAae5ZDJm3bXN+278e/O473zXXXac0aSL9Hjs7An7/avg6lBdN"+
            "894kS4POmjUrA0s0z6msrPQImTEyU4l9HI7MmDHjpCw6UE4ScDIBGgBObn1JdYcRgN0DlczW57d9"+
            "q1lm5i8LCgsl1eQHsTGicftjf5nnhwGQ8cNd61wFAoG2qqbdhQ2bOkGqzjDCchG5MR1LGY8omlYZ"+
            "klRVPfiDcg72cijHiMZ23NvqUtVtWMkxs6io6KtQGv6HBEjAMgRoAFimKShIPAT8Pv+riqIdP//8"+
            "89sOHz68X2azZvFkt2LaHXN8gQ8hWIVVRgECvsAjihYchE6+D/5QfKepyhZ8bmzdosUTQwoKmmVn"+
            "Zx+DvAJ8fhTQNdizoXzXrl2tVr37bn/kvQDGWhd8NlMVda3qUt5BIKR7o9LzkgRIwCQCNABMAs9q"+
            "kycAx7k1iqq9eefUqeMxFN0y+RLNLcEqowBYljhf05Rx+OOw7tzsrN+OGTOm41lnndUDdERHXxAn"+
            "pR1IX3bkyJF3n3n66U7lJ8tHhIwBt+tijArsjbMsJicBEtCRAA0AHWGyqNQSwOoAV4us7EOjrxoz"+
            "qH379utQuzu1Euhem6mjAP5S//0wqCZBq4033nTTwubNm9+A67E6ankQZS1asmTJzK927npVVZUX"+
            "ioqLRX08SIAESIAESCA+Aui0/hDw+Xdj3nkYzkqcUh/l5eW3YWQj5U504LgA0yr7Vq9efSEAlhkM"+
            "8XuUPzFQ6lsHXf8VX4szNQmQgF4EOAKgF0mWYxoBOAUuROV9irze5/F5v2mC6FNxykcB0BE/h/n9"+
            "TuB3F1RYhDNTH1UaLGUS/B6KMOqwByMB4xpMzQQkQAK6EmAcAF1xsjAzCIjdA2HJiqV0l6B+sYxO"+
            "DDXLeuTcduftyyD8talQAJ3/K+j8s9H5P4z6VuBMVecv1Js/tbgooClqS/gdCMODBwmQQAoJ0ABI"+
            "IWxWZRyB8Buk6sIb5SjUIpzVVhpXm7Elp6Wl/Ro1vIDh8aeMqkn4T4ScKBX1JDr/1ahnvlF1NVDu"+
            "fOyJMBfLCsWeCDQCGoDFxySgJwEaAHrSZFmmEsDGQcM1Vbvu4Ycf/gaClJgqTHKVGzoKIPwmhPOk"+
            "WEGBN/ADEFUM/Zt5YCTA+xcaAWY2Aet2IgEaAE5sdXvr/O9G6Y18sqto1CiA8JeA9/2tFw8b2h3r"+
            "8duB0wSLsKIRYJGGoBjOIUADwDlt7QhN4QuADQI0sWZd9kP3UQDh7Idww3lTvUU9+vTp8yIAjbUY"+
            "pJARQJ8Ai7UKxbEtARoAtm1aZyqGbQMfRcS51nbQXs9RgIizH4b8J4LNGpx5FmUkfAL+qGhqay4R"+
            "tGgLUSzbEKABYJumpCKCADakOaAp2nk2oZEz6fbJc6BLwisCop397pwy5SGUVYYzB6eVjwUwVKbA"+
            "n6OLiE9gZUEpGwnITIAGgMytR9nPIDBlyhQRn74K8ejPOuOhhDcyMjLug9gJrQiIOPtVBYNvTZg8"+
            "8QsE33muqqoqEzv2Yf8ezco0xFLEMqxOgH+CdiVWB/zeysJSNhKQlQANAFlbjnLXTQA70X269tOq"+
            "uhNI9aQgkVEA8eYsnP365Of1mHz75GHYK2G66PhrnhY2BIQRsGDQhYMHw1aZKlWLUVgSkIQADQBJ"+
            "GopixkVg6+bPNl4dVw4LJ453FCA0d65qfW+6+Sdj8vLyPkGn3wdv/koQZ+hTGAJVpxsDFlU/r3//"+
            "/rMURX0eOq2wqIwUiwSkJUADQNqmo+B1EQjtQa+p3fF8bV1pJLsf8yhA2HFOy/nJzTdPxtv9CnT+"+
            "TSNv/ZgKCI0ACCOgKhg2BsS1xY+xRcVF6+APIKIF/snislI8EpCKAA0AqZqLwsZCoLyychaC3HRB"+
            "WuHtbosDowC3QJF6fQHEsL9wnLv+xzdMraqsfF10/pE3f/H2HzIEarz5i3sq5gosfjx8xZVXTkOg"+
            "IMGABwmQgE4EaADoBJLFWIfAjBkzdmEpYPbx48dfso5USUsyAb4AP8cKh+tqK0k4/AmHufE33HCb"+
            "Fgy+jrf90978xdt/ePi/ehpAGAIwCoQPgAQGgNKpU6f/ht6rMcLx19r05z0SIIH4CdAAiJ8Zc0hA"+
            "AB3lpn+/+OIeCUSNWUSMAvwavfUibNv7fM1MeIn3wuFvcCXe/NHR1/nmf2oaQEwBwCiQ6CiYeNvk"+
            "5xVVGS+RzBSVBCxNgAaApZuHwiVKABHvPvlm3z4v8i9OtAwL5puAIDn34k3/ivAbf1hCvBWvwYv8"+
            "Uzk5OU/DAGgS6eTF8H5db/6R6QAZ3v4j7dCoUaP7YNgthb6GbZIUqYufJOAEAjQAnNDKDtTRVVVx"+
            "HzrFIVDdbjvM3Y0oeY/hTfg2dITCJ0CEPt47evTI7zHvf1HIu796vj9kCFTP+UeMgpDzX9R0gGQ/"+
            "jZzb77hjKWROODCSZPpSXBIwlAANAEPxsnCzCEy5664v0Um6li9b/r5ZMhhU70R4xf+3qmgvwuGv"+
            "PerYeOWokfdVVFXdKzr/qqrKame/8LK/IIb6Qw6A1XP+oVGBKAPB7XYbJKYxxYrwyND7RawIeNKY"+
            "GlgqCTiHgMc5qlJTpxGAb/u7W77Y/J+XKpeKaYCxNtFfBMi5u6i4eFJEny2fffYeRjuUIBRGwB9F"+
            "Q2cvHPvF8L74Lr6oqqZgeSQGC8KfQZEB3y0cCCiiXs3PnImTJv3nwvkL/lrzAb+TAAnER4AjAPHx"+
            "YmqJCFQGg79ANzccIpdJJHYsot6NjruZSLh58+biisrKweLNH97/4WA/1Q5+waCGEYHwvfCbf3Uc"+
            "gGrfAHFPxqNx48bFsFyW1eYMKaM+lJkEzCKAVwIeJGBfAgGff/eFQy4am5+fb7epgEl4w1+wbt26"+
            "r/Bm30bFmz7e88VLPc7wm7/4FDdC38UzV/haVZFWPEKe7OxsBasLZPwBdEDbfgg9FmM05LaIAg89"+
            "9FDj9PT0s6Bzmqfco1amV8JW0ipa7N9/+IaSkvJIOn6SAAngbwAhkICdCfh9viX4ke+Y6vVeBT1z"+
            "bKTrjs8///zBI4cP+0QHf/opOnhxL9zJh4b+q9MIM0H8X0wNiDQtWrZU4F0vI5aZkP9ujAJ8htGA"+
            "llDgJM6m0A2hDdVjULFC9PxIg8kPJQ1pmkDhw6qmbYAhtAq/B6ym4EECziaAfyc8SMC+BAK+wANY"+
            "OnYpls9thpYT7KTpV7t2Hd67b18TdPXhzh4deqRjF527uOmKvO3jWrz5n+r8q/O0btNGVgPgIHQM"+
            "TYM89thjTS688MLOXbt2vQTbQQ9DG+fjrGnsrT18+PB7Lyx+wXPo4Pd5MAqaqW7XxUVFRXvt9Jug"+
            "LiQQDwEaAPHQYlrpCDxTUpK+Pyv7UFGx90YIf0YAHekUihL46z17lK+++godu+jcwx18+BP9PN7w"+
            "o9/8Q/eRN2IgCONA3Gvbtq2COfWoUqW6vAbSCiPgbpx5cUi++J133nlo7cdrngOpJd5p3slx5GVS"+
            "ErANARoAtmlKKlIXAbFWvlXb1pPGjRu3qq40Mt7HG62yaePGkOiRjl106uI1P/w9bAiE7ogOvxY/"+
            "gfPbtZPWACgvL1fwxh/SNYH2O4g8hfAj+DssoU+9YQMxgWKYhQTkJcBVAPK2HSWPlYCqffz17t0z"+
            "kHxtrFlkSNekiZjWVrHuP+ztL2L9C69/TRPe/uHrYGX1JkDVKwRCcQHEdXUeTJPLoGqtMh45ckQ5"+
            "cOBArc9iuCmWU5ZhZEhsMNRTbKQUQx4mIQFbEaABYKvmpDK1EajStF9hy5uL8aystucy32vWrFmo"+
            "s/+hYw9v+hNa/ieCAMEYiEQEDBsIEYNAfFYpR48elVZ9EcToKIyAE8ePJ6pD2AjwFsFvQLsSwYV+"+
            "n2hBzEcCMhKgASBjq1HmuAhMmzZtB16L0+E1/2ZcGSVI3Lz5uaFd/sIdfvjN/7RofyLqnxgZEMZA"+
            "1Jt/yBjAd5lHAITsldDtu++/T6alQkbAoAsHD0ZxU5MpiHlJQDYCNABkazHKmxgBVVn9yr//XYjM"+
            "Yu7XNsd5WeeF5sAjnb4wBETnHp4GENfh4D/hzj9iIFRPD1Q/kxVGI8QvEHoJXwBs/ZyMGnn9+/f/"+
            "H3hMPA9/kRXJFMS8JCATARoAMrUWZU2YANzi1mEaYAAKKEu4EItmbH7uueFpgOrO/wdjIDzMH/4e"+
            "NgZq+gnAUrCoVg2LJSQX+gg/h4MHk7brJmCPhSXYZ6AlpgL+1HDtTEEC8hOgASB/G1KDGAict++b"+
            "/0Fn1xdJF8WQXKokWVlZoTd9Mcwf/eZ/agdA0UmGpgAi0wDhUYLQ6IDEBoCIYBiZ3hCjAOJM8ljQ"+
            "s1evsUByc5LlMDsJSEGABoAUzUQhkyVQHQZ26/Lly79Ktiyr5RfhfF0I81vzzV/sDRCaEgh9/tD5"+
            "RxwGxdvzMYmdAMVSx/CIBnQL6XIs2abJHD58+K+wtOJjRJBcmGxhzE8CVidAA8DqLUT59COAP+yf"+
            "bfpsIgq01XJAAUiMAojtgMNbAoc7+9DwuHjzD40AnL5UUDwTowXlFRUiu7SHG3EAxEiHcAY8ekyX"+
            "FQ0Trhkz+j8QNeEaaaFQcBKIkQANgBhBMZn8BBAD/hfYAFfsDrhAfm1O1yC7RYuQp39oGgBr/E8Z"+
            "AqHO/wfnv1P3q0cFxCiBzIcHSwHDBg6MgMpKPaYBlFbt298L6+g97DMQkJkNZSeBhgjQAGiIEJ/b"+
            "hgDivn8Fx7Fjb7311hrbKFWtSEts6uN2oTMUHTve+msu+wvNlQsnwZp+AjAQZD7S0tKVKjgBhkY7"+
            "8HnixAk91BnXqm2b/4IRcIkehbEMErAqARoAVm0ZymUIAQTOW/Hp2nW/ROErDanAxELFKEDkDT88"+
            "/B/u8MWcf/RyQPEs/LxKqZB8CiAtPS1s7AidoGcSQYGiWy4TYaN7I6Jy41mzZp0f/YDXJGAnAjQA"+
            "7NSa1KVBAtg7fipGAYYgjKzthndbtmp56s1fO20aAFMA1eGBhYEQMRLEaMGhQ4caZGblBOnpGAGo"+
            "NmjE57FjSTsCRtQdp2jq62lu958jN/hJAnYjQAPAbi1KfWIgoC7++8K//hgJd8SQWJokrVu3PnMa"+
            "QHT41fP9oY6/enog2kCQRsFaBA0tBQxNe4jRjrAzYEW5Lo6NY7t27PogjMWLaqmWt0jAFgRoANii"+
            "GalEPASw/SvWeaujMfz923jyyZD2/Hbnn3rDD6/zr54GEPP/eEMWxkBNPwEZ9KpLRhENMKSX0K1a"+
            "v4pKXQwA5dKRlw5SEG04EAjk1lU/75OAzARoAMjcepQ9GQLPPfaXeSNRQNIh5JIRQu+8OTm51R0i"+
            "4vyLzh6dYjgWADpIMQ0QNQUQMQj0liGV5TVq3DisnzBwqp0BT548qZcI4+AzshIW0x/1KpDlkICV"+
            "CNAAsFJrUJaUESia5r0JlV2FpWOzUlZpCipq1ryZ0qhRo+pdACPOf1jzL4bJhTFQPQUgRgEi0wAp"+
            "EMvQKhqHjIDKsP8DdNRxaePYLh26/R+nAQxtPhZuIgEaACbCZ9WmE3hu3txHe0AKW/kCtGnb5vQ3"+
            "/1DnHx76jwyTR08DHNh/wPSGSEYAt/uHiIChUQ0dwxtzGiCZlmFeqxOgAWD1FqJ8hhEQowCaol2N"+
            "GPL/z7BKTCg4t0OH0LC4WP532pt/aI48HCQoshJATA+AgQlS6ldl08zM8NSGMHTEyIaOBgCkHAd/"+
            "kTKlSuMGQfo1GUuyCAEaABZpCIphEgFVXfT4o49dj9ptExfgXOwO2LgxpgFqefOPTAGEHefCfgI6"+
            "d5gpb0gx5RHSSxg4+k4BCF3GXnr5pTPxOSLlirFCEjCYAA0AgwGzeGsTaHxW41vxBjwWUj5ibUnj"+
            "k+78du3C0wAYBQgP+0fe/Ku/C4dAnKLjlP0IGQChVQ7Cz0Hope+IRteuXdH5a59im+AnZWdF+Ukg"+
            "moAa/YXXJOBEAoFS3ztaUP1Z0fSif0P/TDsw+PbAAWXJ4iXY2E7BToGw83HhEl8Q3k58V3Ed/upS"+
            "LrlkhCKiCMp6iGiGK15/XRExAURgoNzcXKV1mzZ6qrMDvHL9pb69oLYqqGr3guEhjLBUeco9armn"+
            "XIAVXGF7aBUt9u8/XL37pJ4ysCwS0J2AR/cSWSAJyEZAVdYpbuXnEFvsEVAgm/i1yXvueecpjc86"+
            "K7Tdr9j1T3T2Gv6jovMX3v+4ChsBLox/6PzGXJs8Rt5LS0sLdfyhVQ6YAjhxQrdlgBGxc8AoH0ZA"+
            "C2wT/KxLU/+FoZOmMKjcVWmVmlsFRByCLhin7c/KboKNhA7j1kacq7zF3v8Uz3mQgNUI0ACwWotQ"+
            "npQTqNK0v7hU5S+o+EjKKzewwp49eyir3nsv/PYf6p7w5l9tDKiqGBXAWyv+p++AuYEK1VO0ePs/"+
            "cviIEnQHleMnjteTMuFHdyPnxCKvVziMwjFQKcSZjzMHZ/Qh4kr8+7vvvvvghSVLWh07cmw4Rg62"+
            "u1zqM1O93nujE/KaBMwmQB8As1uA9ZtOIC0YPIhe0BZD/9Ewc3IjQYEw71893x8JDBSOAyACA2Gl"+
            "gOQjAELn5s2bhx0Bq30eojnocQ1G47B/xBso6wucD+MUfiM1O3/cCv2OxkKeB26dMGHa1OKijQMG"+
            "DfwJ5gauDpT6V4gEPEjAKgRoAFilJSiHaQQq3W5M4qrpECDXNCEMqLhJkyZKM3SMQQz5h5zj0NmL"+
            "ZXIhY0BcVzvOiVUDsh9iKWB4CgD6QUe9DxgAmWs+XjPs6NGj8RY9YeDAgW9j5OBpDcYDRgO+85f6"+
            "fxdvIUxPAkYQoAFgBFWWKRUB4byFGXLxb6G2NzqpdKkpbLdu3cNvxtUdvugcw6sCwisA3B53aP68"+
            "Zj7ZvmeKWABCNzECAINH7wO/kZCBsW3rVgVxIxIp/jdFxUX9Bl04OA/zMLfBR2BeIoUwDwnoSYAG"+
            "gJ40WZaUBBAOWNOEV5wNj+4XdD/V4Z/+5h8OEtSqZStbaH322WdjlUO4kz52LO639JgYNGlyjnL8"+
            "+HHlq127Eh1lyOvfv/8bGA24EvMuBTQCYsLORAYSoAFgIFwWTQJmExDOcbm5HcJvxxgF+OEtObxm"+
            "vmfvXmaLqFv95553LoydoHL0iDEGgJhmOIkVBocPH1YOHzqUqNxilKmsqNg7EKNOV3E6IFGMzKcH"+
            "ARoAelBkGSRgYQIdO3fCC2d4bjwUAbB6qLxV61ZKG33Xy5tKQXTQlVXhTYGMEKQpfCrE8L/YbXDf"+
            "vn2hKYEE6xEOp2WDBg8WRkBRgmUwGwkkTYAGQNIIWQAJWJtAjx49MM+fUS0kIgLCAPB40pRLLr3U"+
            "2oLHKV12VlZoukMYOSI4kN6HCJYkDIDy8oqQEXAo8VEAIZqYDsBOlOrzXB2gd0uxvFgJ0ACIlRTT"+
            "2ZaAcAIUQVyg4Fq7KtmpU6dTqjVp0lS59vrrlKZNm566Z4eLFi1bhlY2CANHDNMbcZwTGgU4GTIE"+
            "Dh0US/6TOsbCMXCdpmotEWaYmw0lhZKZEyHAQECJUGMeWxHAEq8KEcENSn1vK8WilBky9GIlPSM9"+
            "FPK3S+cuSlq6UNd+R9PMpsqxY8cwsq7/SgBB69xzmyu74AQoRgKOHz+hB8CSwhEjLilbsWIZCvsP"+
            "PQpkGSQQKwGOAMRKiulsSwBvjEewBOAcKFhmVyWFl3xBYaEipgPs2vmLtssKTQPAEVAYAQYcWdnZ"+
            "oc5fOAOWl+sScjjzggsueAiirsJUwFMGiMwiSaBOAjQA6kTDB04hMGPGjJOIiH8S4Vs/c4rOdtUz"+
            "Gx202OHw6BFjojq3atUqZABEnAHFskAdjgIsDXwcv8Hrn3nmGbcO5bEIEoiJAA2AmDAxkd0JqJq6"+
            "fcWKFTvsrqfd9WuJDrqqstKoGYAQvmaZzaqNgIpE4wHU1gyPYHemeQf27n+ttoe8RwJGEKABYARV"+
            "likfAVXbvPfrrydAcNs6AsrXKPFLLLYDFssBv/vu2/gzx5ijdds2WAVwIjQFIBwOdTpyirxF36Cs"+
            "jj6fr51OZbIYEqiXAA2AevHwoYMIbMZ+uXnQt8xBOttS1Uy8oYu1+kYdLbHaIDIFoPNUw93pGWn/"+
            "hD/Ks0bJznJJIJoADYBoGrx2LIGKqqr/RTDgPgBQ5lgINlG8Xbt2SpJr9OslIRwN09LSTxkB9SaO"+
            "72Hm5NtvP4KdKdvOfXhu6/iyMjUJxE+AywDjZ2aLHLNmzco4q7Ly7IrGjT1px49XHvN4jgpnOFso"+
            "l4ASQnfEZt/50UcfVfXr1y+BEpjFKgREhMPDbxgTByCiY1Z2lrJ3715l//79ith2WcfjbvgCPFWV"+
            "XvUYyhylY7ksigTOIEAD4Awk9rwxd+7czKqKqoexE1kfvGF0UlW1UbnLfVStClaWp2d40lT1bGxV"+
            "egJvwdtAYD22jf2v6dOn77YnjTq00pSN77/33mU0AOrgI8lt4Qcgdgc8AQ/9Ro0bGyJ1u/PbKTu/"+
            "3KkcPJjwngB1yZUJX4BVAZ//TsSnwD9T1ZiABnXVzvuOIkADwObN/UxJSfr+7BavVVVU9ka0u+V9"+
            "8vP/1LVr18MYxkQc8tOO7/E2swWe8EfgiTzV7XK9D4PgKN5GXvcWex0Rrxx/bL/AX9uuoCJWA+Sc"+
            "RodfpCLQokXLUDRAowyADp06Ku+8+45y8PvvFOwmidDKuv4pLcG/u2fn+AJPAvpNUoGnsFIR0PVX"+
            "K5XmDhAWO43N3a9oE9I9ngW33XnH61B5Is7r6lJdzG2OHz9ePBae8H9666231ny6dt0vYQgg5qn6"+
            "vHead6J4aNdDraqYr7ndC6Dfdpw0AABB1qNVq5bKQcTqF/H7jTrERkp7v/km5G9w7rnn6llNzs23"+
            "3Dzlib/9nc6AelJlWWcQoBPgGUjscUNEFVMVbTi2HZ2Kzv9GaPUbnLF2asIb/uGhQ4eumFrs3T36"+
            "qjFD4JncKlDq2xnwBR6wB6EztQh6PIcRD6AJntg2JPCZWtvzjpiXP25QNMAIMYykhRwB98EXQO8D"+
            "+zQUYTrubewRMEfvslkeCUQI0ACIkLDRJ978RVSx3ui8V0Gt+TjF9qOJHhPat2//6dTiok2du3W9"+
            "AtvKToKz3DOJFmblfGJPAMgnguSvsbKclC02Ao0aNYotYYKp2p5/PvYGOC/kC5BgEfVlG5uXn/+/"+
            "2NLAXls21qcxn6WcAA2AlCM3tkJ0/vfjzeEqvPn/CzVN0LG2uy677LJlKPdmOBGe5/f5PtSxbEsU"+
            "JXYFxC4y/DdhidZIXohOnTsnX0gDJeT366t8g2mA0AZEDaSN9/GQIUMuwb9l1+zZszvEm5fpSSAW"+
            "AvxjFwslmdKo2qTLr7jcC5HFkL/eh5hCWIEtTN/ElMAq+AYchsHxB70rMas8OHPB7xp/cnnYggAM"+
            "OsP1aNu2rSKWHW7csMGIuiYiONUyt8vtM6JwlkkCxv8LIeOUEcB8oRju39i5c+f/M7jS30z1ette"+
            "PGzoBaqq3IrRgIUG15fq4renukLWJy+BocOGKbt371a+/Vb38MM5MLaXY1TqCnnpUHIrE6ABYOXW"+
            "iVM2TVGuuXXChI+QTbypG32M7dOnz4tTvUU9UFE+nA7FlINdju12UYR6GE8gIyNDuXjoUOWTdetC"+
            "SwJ1rnECVuC8AuP+LzqXy+JIQKEBYJMfAYbiZ8GD/WPs+57KdcNitcAabGWKP1JKO/yRWmQTnFSD"+
            "BOIiIJYB5uXlK9u2bo0rXwyJx7Zr3+4+TVELY0jLJCQQFwEaAHHhsnBiVRuCt5AXIGEq3v6jQYj6"+
            "yrBKYAr+SLWkERCNhtdOItCseTOlW/fuuqs8ZsyYPogHmMFdAnVH6/gCaQDY4CdQUlIi2jG/d15v"+
            "sZmNGYdYZliGEKZFWCHQgkaAGU3AOm1M4G4Nzrf4R/4nG+tI1UwgQAPABOh6V9kiq8VvUKaY+y/U"+
            "u+w4ygsZAYg94OVIQBzUmJQEGiaQN/iiwXNgBFzUcFKmIIHYCdAAiJ2VZVNiv5DumP8X4XvFcLyZ"+
            "R9RIgNraZo6BZnJl3Q4ngA2qfoTRtcpAIJDrcBRUX0cCNAB0hGlaUZrabfCQC981rf7TK64eCYBP"+
            "gKp1seESwdO15TcSSA2BiVhyu1IJBv+YmupYixMI0ACwQSujo83F8bWFVKkeCfBOQFydy+0ULMhC"+
            "jCmKswjkDCsoeJrTAM5qdKO1pQFgNGGDy581a1YGOtmM5s2bDzK4qniLF0bAgiFDL4ZcWnG8mU1O"+
            "38zk+lk9CZxBoGfPniM5DXAGFt5IggANgCTgWSErwp2eg7eCI1aQpRYZ8kSwIAxd/lWyvQPya9GF"+
            "t0jAbALjxDSAFtQeNFsQ1m8PAjQAJG9HNw5V06osrEYewgafjZjmB7E88J8WlpOikYDVCeSMHD36"+
            "RYyoDbG6oJRPDgI0AORopzqlrMKhqaq7zgTWeDABMc3/hpGKwTAC6MRkjTahFBISyMnJuQrTAEfn"+
            "zJzTRULxKbLFCNAAsFiDxCtOMBg8gu3rzkE+q+9h/8gVV145CkbAlHh1ZHoSIIFTBMQ0wCtBT9Ws"+
            "U3d4QQIJEqABkCA4q2SbMWPGSU3Tyvft21duFZnqkCOzU6dOpZgKeA7xAVbUkYa3SYAE6ieQeceU"+
            "Ka9jFIA7BNbPiU9jIEADIAZIlk+iKts/Xfuplf0AIggLMBWwDssWW8/x+63syEQnwEiL8dNyBOD2"+
            "M1ZR1ZcxncYdAi3XOnIJRANArvaqS9qtmz/beHVdDy12v6Rrh27XBjXtRovJFS0OlwFG0+C11QiM"+
            "y8nN+SVG0y6xmmCURy4CNADkaq9apXWp6jZNU8U2ZCIcsNWPzEtHXnoD9jjfjjeY2VYS1uPxIKoy"+
            "Bld5kIC1CWSOGjUqNErl9/s7WltUSmdlAjQArNw6McpWpYyf+ukAACzcSURBVGmz4QjYGcmt7ggY"+
            "0ejutue3/Rm62ssiN6zwCYdK/HtQg1aQhTKQQAMEJiqqtgy/Vn8D6fiYBOokQAOgTjTyPCguLt4J"+
            "aVtVVlZ+KYnUmVdfffUYTVXORiTD860is6qqaZClAmeuVWSiHCRQB4ECxNf4M/xpLqveDryOZLxN"+
            "AnUToAFQNxupnmDkesuGDRu2SST0RMxhvp7mdv/ZKjK7Kiub4A/qYciTYxWZKAcJ1EOgBCN/z7bM"+
            "zn6qnjR8RAJ1EqABUCcayR6oyuZ33nrLavsB1Acx5/IrL38JE+6W2eM86PJMxBTAnvqE5jMSsBCB"+
            "CT+55ZZfwZAeZyGZKIpEBGgASNRY9YkqmSNgSJXOnTuPhh9AcO7Mme3r0y1Vz1RFy8Ep0yhKqtCw"+
            "HosSaNq06X0Q7QXE1uAogEXbyMpi0QCwcuvEIVuUI2BZHNnMTlqIqGbvBN1pD5gtSHX9nVu2bv2k"+
            "RWShGCQQC4EJP/npzb9AwmtjScw0JBBNgAZANA2JryOOgOXl5W9KpEZOfl6/RZh3720FmTEdkTN0"+
            "6NDmVpCFMpBArAQ4ChArKaarSYAGQE0iUn/XNr/00ku7ZVIhv39+U1UJxTAwVWysRsjAKoD07Ozs"+
            "Y6YKwspJIH4CHAWInxlzgAANABv9DLAr4KZv9uyZBJVkCAgUIt+oUaOhWMGwz+zlgC6X6xyMAByx"+
            "0c+BqjiIAEYB/gR16QvgoDbXQ1UaAHpQtEgZcGDbBI/gPIhTZhGRYhEjHzJvSfd4ZsSS2Kg0IgYA"+
            "llSJGAA8SEBGAmMn3T55DgSnL4CMrWeSzDQATAJvRLUVVVX/q6hKH5RdZkT5BpWZh/i7m7A3QCeD"+
            "yo+pWBEFECMRIgog9wGIiRgTWY1ARkYGVwRYrVEsLg8NAIs3UDzihbYGVpSdL7744pfx5DM7bd/+"+
            "/VdABhHK2ApHKMa6FQShDCQQJ4ECjgLESczhyWkA2OwHgGmADbu+/HIC1Nohi2odO3Y8hngAubLI"+
            "SzlJwKoEwqMA2kv+Uv8TVpWRclmHAA0A67SFXpJ8jjn1bihMlo2BFHjeDxIe+MITXy8ILIcEHEqg"+
            "4Nrx1/8J8TWucqj+VDsOAjQA4oAlQ9LKYPAvWFcvIutJYwAIrsIDX3jiW4AxfQAs0AgUIXECLVq0"+
            "uBP/oFZjFGBW4qUwpxMI0ACwWSunp6fvwT/+1lBLJgMgX3jgV+/GZ0qLeDwe+CIKO0TJN0UAVkoC"+
            "+hEYd16LrBJsFzxEvyJZkh0J0ACwWatOmTLlIFTyHDp06IREqjVD31tZVVXlMUtmsQoAGwGJVQA8"+
            "SEB2Apnjx4/vACXyuVWw7E1prPw0AIzla0rpeJv+Yvny5cIQkOVopmpqOd7C080SuHr0gXEAzGoA"+
            "1qs3gXEo8CNsFVyid8Eszz4EaADYpy2jNdmKiIA/ib5h8es8+C0cdlVWNjFLTlG3kAH1cwrArEZg"+
            "vXoSGIsXgY/gENxDz0JZlr0I0ACwV3uGtNEUdQdOUwPrxI9V3RN0eSbGn0+fHOG61T0oLVOfElkK"+
            "CZhL4JLLLlsHo7aXuVKwdisToAFg5dZJUDb8o1+IrK0SzG5KNsQv2IYzx5TKUamoW8hgVv2slwT0"+
            "JtC1a9cW2Ggrh8tr9SZrn/JoANinLU9p4q50H1U07exTNyS4aNm69ZMQ08xogJ375uevlAAVRSSB"+
            "WAkUYl3LujS3+1exZmA6ZxGgAeCs9rastkOHDm2ONXimjQCIujt26cKtgC37C6FgCRDIx1JAsTOo"+
            "CAzGgwTOIEAD4Awk8t+o8lSdrajqUZk0QTRA0fm6586de1aq5RZDpCISYbUMqa6e9ZGAUQQyW7Rq"+
            "tbA6MqhRdbBciQnQAJC48eoSHUvqJuDZ13U9t+p9zFceqKysPC/V8okIhBgBOIJ6C1NdN+sjASMJ"+
            "jBgxIhM+QblG1sGy5SVAA0DetqtTclkd2hAMaA9+kHfUqZhBDzRNwx4E2kmDimexJGAagebNmx+D"+
            "YZ1BR0DTmsDSFdMAsHTzJCyclA5t2MBkoxnrlt1udyOMmojIiYwBkPBPjhktSqBQjG5ZZJ8NiyJy"+
            "rlimhV51LnLjNcc/+A4X9OolhrSlOtIbNZpx8viJXakWWgQBCrrdIghQs1TXzfpIwGgCCAhk6j4b"+
            "RuvH8hMnwBGAxNlZMiec6EQgm8qmTZt2t6SAdQtVMnny5POwIP+1QKn/hbqT6f8kKggQRwD0x8sS"+
            "TSaAqTVsdSH2uuBBAqcT4I/idB7SfysvL2+NTlREtJPtbbYAMq8p8np/q6lKrzl+/4OpaowonwlG"+
            "AUwVdNZDAiRgOgEaAKY3gb4CeFyuOzGf/SVKLdS35JSUJjrgsit/dOXVwaCWSmdAKX0mUtIirIQE"+
            "SMC2BGgA2K9pOyL4x2aoJetwdmbHjh1nYxRjSaDU90oqmkdWn4lUsGEdJEAC9iVAA8BmbYtNgHrk"+
            "9e79HNSSeTi7AFMBH2MqoMfs2bPbGNlEUT4TFxpZD8smARIgAasRoAFgtRZJQp5QRDtFaXfRsGHN"+
            "kyjGKllL0tPSnnGrLmHMGHZE+UzkGlYJCyYBEiABCxKgAWDBRklUpNCmH9j8A/kLEy3DQvkyb7vj"+
            "DqFLR7ylZxklV5TPhKxTJkahYbkkQAI2J0ADwEYNjOH/7tWbfxTaRK27ERzolWBF1WwD9Yn4TOQZ"+
            "WAeLJgESIAHLEaABYLkmSVwgVdO6Y1vd+SjBLp1Z3qALLyxFLPOLE6dSf07hMzG8sPD9+lPxKQlI"+
            "SyBXWskpuOEEaAAYjjiVFajdRo8ebajTXCq1EXX169fvQuxpXhkIBHL1rjviM9GjR48uepfN8kjA"+
            "IgRyLSIHxbAgARoAFmyURETy+XztkO/r9PT03onkt3CeiZgGWKkEg3/UW8Y0j+e/sQRwDcot1Lts"+
            "lkcCJEACVidAA8DqLRSjfG5VnY7ObCuSF8aYRZZkYhpgLnS7SG+BsQtgb0QB/BDlFuhdNssjARIg"+
            "AasToAFg9RaKUb6gpnVSVW0TktuuMzNqGgDbpA4YN3bs6hgRMxkJkAAJ2IoADQD7NGfnbl0vWGIf"+
            "dU7TJDQNoAU13fYHQIChDtgk5Xirtm0LT6uJX0iABEjAIQRoANiloTWlfe/83nbd3jmvYMSIJxVF"+
            "G6JXc7ld7j8qmroS5RXqVSbLIQESIAGZCNAAkKm16pFVVdXMrKyso/UkkfrRBRdcMBqrAY7OmTlH"+
            "J499bUjhJYVPAUqO1GAoPAmQAAkkSIAGQILgmC3lBMaFggJ5qmYlW3PIiIAxAaPi5mTLYn4SsDiB"+
            "XBVzXR6PR7W4nBTPBAI0AEyAbkSV8Gg/uH///rONKNsiZebcfuedz2EU4Ipk5QnCiBDGBMoZl2xZ"+
            "zE8CFieAES41iIN/6y3eUGaIxx+FGdSNqFNVvty2bVtjI4q2Spl4i5mgqOrLAZ/vL0nJBCPijilT"+
            "XkcZMu+YmBQCZnYUgQpMEaY5SmMqGxMBGgAxYZIi0daPV68eIYWkiQs5rl37dvchfG9hokWEjAcY"+
            "EW63e0KiZTAfCchEAKG0D7sqK5vIJDNlTQ0BGgCp4Wx4LS5V3aYpygWoaIfhlZlXQeaYMWP6YM+D"+
            "xggN3DYRMYTxkN+7l4gqODaR/MxDAvIRUPcEXZ6J8slNiY0mQAPAaMIpKl9T1Zlw9hEe8mUpqtKs"+
            "aiaiE38DMQH+EK8AIlwyGGVcNGxY33jzMj0JyEoA0S634eRqF1kb0EC5aQAYCDeVRRcVFX2FEYDm"+
            "x44deyeV9ZpQV0HX7l0XKJoWdyeOH/ufwGgFZL7bBLlZJQmYQqBvfr6Id9HZlMpZqaUJ0ACwdPPE"+
            "KZyqfrJ0ydJtceaSLvmll17aE2F8u8ydOzcuxyZ0/hddfuXlL0HhHOmUpsAkkCCBjl26HMNvn7/5"+
            "BPnZORsNADu1rqZ8sO/Avl9CpcV2UqsWXQpxb02wsvLXtTyr9Zbf7++oamp5586dR9eagDdJwKYE"+
            "srOzj2EVQLrY/tqmKlKtBAnQAEgQnBWzead5ZyBc7rDy8vK/WVE+HWUaq6jaWvgCdI+1TDWozMRb"+
            "0HKk59r/WKExnW0I4Ld/xOVynWMbhaiILgRoAOiC0UKFqOprj8+bdwkksvNqAOXCIUOEr4NY9RDb"+
            "oSqji4qLfo/EXPsfGzGmshEBVVEYC8BG7amXKjQA9CJplXJUZRo2ubkS4jxiFZGMkCM/Pz8XjoA9"+
            "Yinb7/O9r2nKX5E2N5b0TEMCNiNQiGjAjAZos0bVQx0aAHpQtFAZXq/3cyHO0qVLy/BxUFzb9cBb"+
            "zXp/qf93demHZ6Xo/L9Eut2YHpmIdLl1peV9EiABEnAaAbtuH+u0djxdX1V7fcf2HaJjXIRzwukP"+
            "bfRNVd6Ez8Nl0Eg4PoaO2bNnt8FWvwtxfwTW/L9ZUVU1ZPr06VlTvd5CJBAnDxIgARIgARCgAWDD"+
            "n0FRcfGd/lJf1YkTJzo3atTIrgbAduhZEij1fQBdP1VUZSe8/Nsj7Glmmidt2eTbJ/8nnJ5EtL+d"+
            "NmxiqkQCJEACSROgAZA0QosWgN3uFjz++M/w5rsWEuZZVMpkxJqPHRBzsbxpIOL7PwQv5/OCqvYz"+
            "TIEI/4cSnHT2S4Yu89qJQL6dlKEu+hGgAaAfS0uV5Kp0zwi6q16EUAGcD1tKOP2E+Q2MgHEobiIM"+
            "gTW4XoBru4546EeNJTmNQDOnKUx9YyNAJ8DYOEmXaupdU7dgWPzs1atXvyud8PEJLEY3PkbnX4ZP"+
            "dv7xsWNqhxCAP4yG7bThD8uDBH4gQAPgBxY2vFLf+WDVqqlQTEwD2P0osLuC1I8EEiegchlg4vBs"+
            "m5MGgG2bVlFUl3ov1r+LjlGsBuBBAiTgTAK5UJuBgJzZ9vVqTQOgXjxyP8QOgdsxDeBZv3693acB"+
            "5G4oSk8CxhLIweqYw67KyibGVsPSZSNAA0C2FotTXkz6vfvmypU3IputgwLFiYXJScBhBNQ9QZdn"+
            "osOUproNEKAB0AAg6R+7XD/nNID0rUgFSCApAqqibcOZk1QhzGw7AjQAbNekpysUNQ3w1OlP+I0E"+
            "SMApBLp27/4CdO3sFH2pZ2wEaADExknqVGIa4I2yN26CEjukVoTCkwAJJESgd+/eHk1ROAKQED37"+
            "ZqIBYN+2PaVZUFH+A0bACNx45NRNXpAACTiGQHZ29jEEy0qfNWtWhmOUpqINEqAB0CAi+RMUFxfv"+
            "1FTl5IsvvviG/NpQAxIggUQIYATgCPbHOCeRvMxjTwI0AOzZrmdoBQegsp1f7nwADxae8ZA3SIAE"+
            "7E6gGUYBGQvA7q0cp340AOIEJmtysUMgtsi9AvLTAJC1ESk3CSROIB/RgBkNMHF+tsxJA8CWzVqX"+
            "UuorAV/gOjx1QmjguiDwPgmQAAmQAAjQAHDSz0BVpmEY8EdQmc6ATmp36koCJEACtRCgAVALFLve"+
            "8nq9nwvdli5dugYfjAxo14amXiRwJoFmZ97iHacToAHgtF+Aqr2+Y/uO30HtRU5TnfqSgIMJ5DtY"+
            "d6peBwEaAHWAsevtkDOgpl1ZUVEx0646Ui8SIAESIIGGCdAAaJiR/VKoyiuPPfroZChGZ0D7tS41"+
            "IoFaCahYBuDxeOAGxIMEwgRoADjwl+CqdM/ABkFiSeAjDlSfKpOAQwmoXAbo0JavS20aAHWRsfH9"+
            "qXdN3aKoytllr5S9Z2M1qRoJkMAPBApwyUBAP/DgFQjQAHDsz0B9Z+OWjfdC/cWORUDFScBBBDRV"+
            "O+yqrGziIJWpagMEaAA0AMiuj6uCVT9XVE28FXA1gF0bmXqRwGkE1D1Bl2fiabf4xdEEaAA4tPmn"+
            "T5/+haqojdesWbPeoQioNgk4igD2A9mGk1sCO6rV61eWBkD9fGz9FE7BH773zju3QkmuBrB1S1M5"+
            "ElCUrt27vwAOncmCBCIEaABESDjwE/uDf6Ip6gCoXuZA9akyCTiKQO/evT3YEpgjAI5q9fqVpQFQ"+
            "Px9bP62orPwfLAoWEcLKbK0olSMBElCys7OPwehPnzVrVgZxkIAgQAPAwb+DGTNmnMQ0wI6XXnpp"+
            "p4MxUHUScAwBjAAccblc5zhGYSpaLwEaAPXisf9DVVM/3bljxx3QlH4A9m9uauhwAhjxYywAh/8G"+
            "otWnARBNw4HXeCPYqGhqX6he5kD1qTIJOIlALkb8GA3QSS3egK40ABoAZPfHlcHKBxAVsA/0LLO7"+
            "rtSPBBxOINfh+lP9GgRoANQA4rSvET+At1euPOg03akvCZAACTiZAA0AJ7d+te7CD+CT9et/jK87"+
            "iIMESIAESMAZBGgAOKOd69WSfgD14uFDEiABErAlARoAtmzW+JSK8gNYE19OpiYBEiABEpCVAA0A"+
            "WVtOR7lDfgCa9uXHH3/8uY7FsigSIAESIAELE6ABYOHGSaloqrph1bvvXo466QyYUvCsjARSRqBZ"+
            "ympiRVIQoAEgRTOlRMitmqb2QE2cBkgJblZCAiknIMJ+8yCBUwRoAJxC4ewLBAiZhShhYqewMmeT"+
            "oPYkQAIk4AwCNACc0c4NallcXCz2A2h18uTJtxpMzAQkQAIkQALSE6ABIH0T6qmAtnnp0qVH9SyR"+
            "ZZEACZAACViTAA0Aa7aLKVJpqrrpmz17JqFybgxkSguwUhIgARJIHQEaAKljbfmaVEXbhI2B8iAo"+
            "HQEt31oUkARIgASSI0ADIDl+tsrt8nh+C4WEp3CZrRSjMiRAAiRAAmcQoAFwBhLn3pgyZUoFVgNs"+
            "Wb58+VfOpUDNSYAESMAZBGgAOKOdY9dSVT/+bNNnE5GBfgCxU2NKEiABEpCOAA0A6ZrMWIGrglU/"+
            "V1StALWUGVsTSycBEiABEjCTAA0AM+lbsO7p06fvVjXl8Or33y+zoHgUiQRIgARIQCcCNAB0Ammr"+
            "YlTltfc/XP0z6LTSVnpRGRIgARIggVMEaACcQsGLCIGi4uLpiqLlfvTRR7+I3OMnCZAACZCAvQjQ"+
            "ALBXe+qmjUtVn1713nsLUOD9uhXKgkiABEiABCxDgAaAZZrCWoJM9XrvVTV1T8AXaA/JuCLAWs1D"+
            "aUiABEggaQI0AJJGaN8CiqZ5R2BFwLV7d+8thpYH7aspNSMBEiAB5xGgAeC8No9LY2wRPPfZRf96"+
            "CpnujisjE5MACZAACViaAA0ASzeP+cLBIfDnMAJWYSrgp5BmpvkSUQISIAESIAE9CNAA0IOizcuA"+
            "ETAeUwGZc/z+NKi60ObqUj0SsC0BxPjQPB4PbHoeJKAoNAD4K4iJgLe4eICmKbeuW7fuPmSgU2BM"+
            "1JiIBKxGQA3i4N99qzWLSfLwh2ASeDmrVX3vvPX2+5C9ECeNADkbkVI7l4DY6bNCVVUxkseDBDgC"+
            "wN9A7AS807y/wAjiqwG/fyVyFeKkERA7PqYkAbMJZGqqdthVWdnEbEFYvzUIcATAGu0gjRSYCpiA"+
            "+ABb5vgCL0PoQpw0AqRpPQpKAuqeoMszkRxIQBCgAcDfQdwEEB/gek1VdtMIiBsdM5CAqQRURduG"+
            "M8dUIVi5ZQjQALBMU8gliLfYew0k3snpALnajdI6m0Df/HwxfdfZ2RSofYQADYAICX7GTUCMBCDT"+
            "mjn+wAasDhiDa04HxE2RGUggdQQ6dulyTFMUjgCkDrmla6IBYOnmsb5wwicAywP/+vabb21CnIA3"+
            "ITHjBFi/2SihQwlkZ2cfg+pp8+fPb+RQBFQ7igANgCgYvEyMgFgdsHf/vqaKpg7DlMC5KIVGQGIo"+
            "mYsEjCZQqKjKYRxcCWA0aQnKpwEgQSPJIGJJSUkQUwJYZ6w2nuPzd4DM98ggN2UkAccR0JSjaWlp"+
            "ZztObyp8BgEaAGcg4Y1kCMA58HIYAYdgBNyAciYlUxbzkgAJ6E5AjAAcVCsqMnUvmQVKR4AGgHRN"+
            "Zn2BMRJwFf7I7A34/FMhbV+cB60vNSUkAUcQyIWBzlgAjmjqhpWkAdAwI6ZIgAA2EBqnKuou+AQI"+
            "f4BCnFwhkABHZiEBnQnkiFgAMNBzdS6XxUlIgAaAhI0mi8hRywSXcpmgLK1GOe1OYMjQoR8qmtbF"+
            "7npSv4YJ0ABomBFTJEGAywSTgMesJGAAgR49emRhdI4GgAFsZSuSBoBsLSahvNHLBBE++DyowBUC"+
            "ErYjRbYHAY/H0xuafO3z+drZQyNqkSgBGgCJkmO+uAj8sExQy4BfwHXIfA1OOgfGRZGJSUAXArmI"+
            "BrjVrarTdSmNhUhLgAaAtE0np+BF04qvUDVlH0YCSqBBIc4dOHmQAAmkjkCBqmqbgprWKXVVsiYr"+
            "EqABYMVWsblMMAKuxb7ka7GHgHAOHAp1V9pcZapHApYi0KVbt0WKpnSzlFAUJuUEaACkHDkrFARq"+
            "OAd+gltiuSAPEiCBFBAYOnQodvSmI2AKUFu6ChoAlm4eewtXi3PgJHtrTO1IwBoEMjIyhAWwu7S0"+
            "lDsDWqNJTJGCBoAp2FlphEAN58DbcL8vTjoHRgDxkwSMIVCIYjfCEfA/jCmepcpAgAaADK3kABmj"+
            "nAMXQN1cnGtx8iABEjCGQAF8AD7ADp7C4ObhUAI0ABza8FZUO8o5cEN15ED6BVixoSiTLQgUFRd9"+
            "gZDA/WfNmpVhC4WoRNwEaADEjYwZjCQQ5Ry4cY7ffxh13WNkfSybBBxMYCJGARZ53J6/OZiBo1Wn"+
            "AeDo5rem8tXOgZkYnhwW8Acug5QjcNIvwJrNRankJVAw8bZJ87AvwDh5VaDkyRBQk8nMvCRgNAG/"+
            "z7cMgYOyphZ770BdC3DmGV0nyycBBxFYiaBc+6FvBTbvuslBelNVEOAIAH8GliaAKYGRmqpuCvj8"+
            "L1X7BSy2tMAUjgTkIlAw6fbJcyDytXKJTWn1IEADQA+KLMNQAt5i708VRf3b22++tQl+ATtR2UxD"+
            "K2ThJOAgAogJcB/UfSFQ6n/KQWpTVRCgAcCfgRQEagQNEjHMJ+GkX4AUrUchLU5A+AIENEUTm3Tx"+
            "cBAB+gA4qLHtomqg1PcKopg1LvJ6xW5mZTgz7aIb9SABkwisxOjaN3C8dcMX4HqTZGC1KSbAEYAU"+
            "A2d1yRNg0KDkGbIEEqhBoGCq17sMcQFGMy5ADTI2/koDwMaNa2fVGDTIzq1L3UwiUKIo2jyP2/26"+
            "SfWz2hQToAGQYuCsTj8CUUGDhHMggwbph5YlOZNADkYBViM4UKa/1P9nZyJwltY0AJzV3rbTtoZz"+
            "4KVQkM6BtmtlKpRCAo/07NrlGlXRbk5hnazKJAJ0AjQJPKvVnwCdA/VnyhIdSeD+OT7/QCy9PQCH"+
            "wFsdScAhSnMEwCEN7QQ16RzohFamjikgcPeVo0ZOhkPg+BTUxSpMJEADwET4rFp/ArU4BzJyoP6Y"+
            "WaK9CWR26NDhj4gLsJTBgezd0DQA7N2+jtSuhnOgiBy40JEgqDQJJE5gws233PJzZGeI4MQZWj4n"+
            "DQDLNxEFTIRAtHNgwO8/F2UI50AeJEACMRJo2rQpQwTHyErWZHQClLXlKHfMBPw+/6uqpqVjR8GH"+
            "kWkBTkYOjJkeEzqZwMmTJy+fP+/xl+AMmOFkDnbVnSMAdm1Z6nWKADYTuhwezYfg2Xwvbhbi5B4C"+
            "p+jwggTqJsCNgupmY4cnNADs0IrUoUECeIO5Cl7Ne7GtsNj6NB/n2gYzMQEJkAC3C7bxb4AGgI0b"+
            "l6qdTqCouHicqqi74BMgVgYU4qQRcDoifiOBMwhgFOBPCBH8EqIDPnHGQ96QmgANAKmbj8LHS6B6"+
            "p7M1c/yBDevWrRuD/MIY4EECJFA3gbxbJ9z6sqoqV9WdhE9kJEADQMZWo8xJEYhaJrgRewhwmWBS"+
            "NJnZCQTOOuec/8IeAasxCjDLCfo6RUcaAE5paep5GoHqZYKZ2P98WMAfyMLDe05LwC8kQALRBHL6"+
            "9M2bq6jakOibvJabAA0AuduP0idBoKSkJIgpATgEam6sEBCbn4zAeTCJIpmVBGxLYMiQIRdCuXz8"+
            "u2G/YZNWZkPapCGpRuIEMCUwUlNVbCkceHL16tV9UNLKxEtjThKwLQGxeuajFlktfmNbDR2mGA0A"+
            "hzU41a2dAGIF/BQjAQvff2/V2oAv8DlSiSkBjgbUjot3nUmgQNXUtaqqdXem+vbTmgaA/dqUGiVI"+
            "AMsE/8s7rbg5wmN2wFLBOzdu3HgJiuJoQII8mc1+BFq0brkAfjPd7KeZMzWiAeDMdqfW9RCAX8AI"+
            "GAFLy1asWAZD4BCSXoNzRz1Z+IgEHEFgxIgRmZqq5TpCWQcoib9zPEiABOoiILZDxbao1yuqOq/I"+
            "W7QZ6Upwci+BuoDxvt0JjJjjC7zsSnOfM2XKlAq7K2t3/TgCYPcWpn5JEcBowE1ZLbIbqZrSHX/4"+
            "7nl83rx5KPB+nPQPSIosM0tLQFVOVlZWcnMgaRvwB8FpAPzAglckUCuBG264oUpMCwRVbejJ8vLh"+
            "2E/gDsQOeAqJJ+Hk1ECt1HjTtgQ0JcPj8Zy0rX4OUoxTAA5qbKqqD4G5D89tXZVe9RhWDVyBf0DP"+
            "Tr799mfS09Ono/QCfWpgKSRgTQLffffd6KefeupJLJ1tZk0JKVU8BDgCEA8tpiUBEJhyz5Q9WDY4"+
            "au++fekCyOOPPvYknAUPfPvttxfh60KcnB4QYHjYjsCKFSsOYingdtsp5lCFOALg0Ian2voSCO+U"+
            "po3FlsNvtz3//F9cffXVYjTgbpw5+tbE0kjAPALYO+NR1J6JJbM/Nk8K1qwXAY4A6EWS5TiaAPYW"+
            "uBkxBM6BRf3FVzt3PQOHwWn4Y/kCoIzAudjRcKi8XQisRAyAPCgjVsPwsAEBGgA2aESqYB0CeDOa"+
            "CkOgi+ZSrsAfyy6YGngNDoPle/bs6QEpZ+Lk9IB1mouSxEdgDZLnuzye38aXjamtSoBTAFZtGcpl"+
            "CwJi45SWWS2eQCyBqzg9YIsmdawSmzZsmLFiRdkUGLi9HAvBZorTALBZg1Id6xII+HxzNE25NCyh"+
            "+mJRcdFaXJfgpJ9AGAr/a10CB7FHxkswYoPhfTOsKygli50ADYDYWTElCehCYO6sWZ2qXJ6/YBlh"+
            "P0VRF8AQENMCwmGQEQZ1IcxCDCCwENNZl1UFg4OmT5++24DyWaQJBGgAmACdVZKAIDB37tzMqorK"+
            "l1VFbfSj0SN/lJub+wfcnkA6JGA1Aqvff/+aDz748PdF04ovsJpslCdxAnQCTJwdc5JAUgQQS/0g"+
            "5lMv1BTljWVLl27DygERW30Ezh1JFczMJKAvgZXvf7j6Zxj+f03fYlma2QQ4AmB2C7B+EqgmECj1"+
            "rcRl83HXXXtpq1at/g/XHA3gr8N0AuvXr//RGytXPorof+1NF4YC6EqAIwC64mRhJJA4AQyvFmiK"+
            "Wrbo2ed3IYaA8AuYlHhpzEkCuhC4H53/TJeqPq1LaSzEUgQ4AmCp5qAwJIBlASUlnhbZ2avBYkeR"+
            "1/vf+CzDSQdBQOCRUgJr4fn/ETqJDmIzrJTWzMpSQoAGQEowsxISiJ+A3+d/VdW09KnF3ruQuwwn"+
            "jYD4MTJHYgQOfv7558NeXvbvN+Cn0jyxIpjL6gQ4BWD1FqJ8jiWA9daXY5ngISy/8gFCIU4xLcCD"+
            "BFJBYOIr/375ZVVV5qSiMtZhDgGOAJjDnbWSQMwEsNHQYkXVsjAdUIxMZTg5EhAzPSZMgMA9c3z+"+
            "mzVV3cSgPwnQkygLDQCJGouiOpdAoFRsLKQ1xXTAw6DwvHNJUHODCSxE55+tqYoLXv8jDa6LxZtM"+
            "gAaAyQ3A6kkgVgLCJwBGwHGMBHyOPHfFmo/pSCBGAiux+uQTbGI1DE5/+THmYTKJCdAHQOLGo+jO"+
            "IhD2CVBy8EdaGO5rnaU9tTWYwNp169bdgr0qJn6zfy9CVPNwAgEaAE5oZepoGwJ79+3rjze0qceO"+
            "HbvdNkpREbMJCGOy8J233n4fTqc+LEMNmi0Q608NAU4BpIYzayEB3QhgV8HZYph2anHRIhT6G90K"+
            "ZkFOJBDq/LHSZCWUX4N5f0afdNCvgCMADmpsqmoPAkXFxdPhC3AMQVrOhUY77KEVtTCBQKjzh9Mf"+
            "4k2oW9j5m9ACJlfpMbl+Vk8CJJAAgYpg1Yg0t+d7ZBWe2isSKIJZnE3g1Js/dqPcAqe/652Nw5na"+
            "cwrAme1OrW1AAEsD/4X4AFVTvd4MqDPWBipRhdQQEA5/Y8ScP5z+XvFO805MTbWsxWoEaABYrUUo"+
            "DwnEQcBf6iuffPttF2RkZGyNIxuTOpfAQqwiOYyOfxIc/krR+f/CuSioOX0A+BsgAYkJYPj22ccf"+
            "e+xBqDBTYjUoemoILISz37nCgXTv/n1N2fmnBrqVa+EIgJVbh7KRQAwEAj7/8StH/ii3Q4cOm5E8"+
            "M4YsTOI8ApPg7DcJ4X3Lq+NJOI8ANT6DAEcAzkDCGyQgGQFN+efLS5c9DqkfkUxyims8gYOo4hoY"+
            "iVMR3vcgO3/jgctUAw0AmVqLspJALQTgwX0rbvd/49VXn8Cn+IPPgwQEgYin//2KqnyFZX5XEwsJ"+
            "RBOgARBNg9ckICkBTVGfWP/ZFrFJUImkKlBsfQksFp7+c/yBpShWBPi5Tt/iWZodCNAHwA6tSB1I"+
            "AAT8Pt/b+Af9EZYFXoWvOYTiWAL3w9M/G57+GBlSfXT2c+zvoEHFGQioQURMQAJyEKisqrqkOjhQ"+
            "ESSeL4fUlFJHAmL6ZxwiRP4aQ/6Z3mnFTXQsm0XZkABHAGzYqFTJuQSiggMNBgWOAjjnp7By8+bN"+
            "P1nx2uvvIjjU+wgXPd45qlPTRAnQByBRcsxHAhYkIEK6Yuj3mvLy8v9nQfEokjEE7sGQ//rXX1v+"+
            "mepS/sHO3xjIdiyVIwB2bFXq5GgCGAV4CgDSsFtgFj4LHA3D3soLL/+JGPL/M976M+HoN8De6lI7"+
            "vQlwBEBvoiyPBEwmgFGAmyDCVSdPnnzAZFFYvXEEZn7wwQdXIbLfElXVvmXnbxxoO5dMA8DOrUvd"+
            "nEzgOYQIFs6Ai50MwYa674BOI/DW3/TDDz74BEO4T3HI34atnCKVOAWQItCshgRSTUCECL7+hvF5"+
            "WVlZIkQwD/kJzCwrKyvduGHDElVTv8FIzwj5VaIGZhLgCICZ9Fk3CRhJACGC//WPZx5GFfcbWQ3L"+
            "NpyAmOvvi+H+juj8RayHpez8DWfuiAo4AuCIZqaSTiUQKPV93aNrl2HDL7/8VTDgskC5fghiXf8j"+
            "GO7Pwh/qOxDL/3nE8r9RLhUorZUJcATAyq1D2UggWQKq8vf1W7YIP4C7ky2K+VNKYPHGjRsvwTTO"+
            "9ej8811p7nPY+aeUvyMq4wiAI5qZSjqZAEIElyEk7NYib2hZ4Fgns5BA9x2QcSKG+3+Gz8GKpv4d"+
            "oXwZ00GChpNRRBoAMrYaZSaBOAnACDg6ctSoTrm5uZuQNTPO7ExuPAEx3F+C4f7O+KPM4X7jebMG"+
            "EOAUAH8GJOAAAuhU5i1bukz4AUx0gLqyqTgTWzkPxHD/7WgnDvfL1noSy8sRAIkbj6KTQDwExFQA"+
            "/sFvw26BbuSbEE9epjWEwML9+/f/rnqlRn+xpTOH+w3hzELrIEADoA4wvE0CdiTgL/V9N+jCwXn9"+
            "+/dfAv3y7KijBDqtFFEaRaAmVVFHKViuiWV92LqXBwmklgC3A04tb9ZGAqYSUFVlzvvvrVoFA2Ak"+
            "BCnDSX+A1LVIqOOfP+/xqajyJXT+z6Hjb5y66lkTCZxOgCMAp/PgNxKwPQF/qX8BNo/pW+T1immA"+
            "j22vsPkKRnf8V0Ec0fGL/Rp4kICpBGgAmIqflZOAOQSwY+C/UHM77BgYwOd8c6Swfa3s+G3fxHIr"+
            "SANA7vaj9CSQMIGAz7cIjmctER9gLgqhEZAwyTMyLjx06NADT/7tiT/gCd/4z8DDG1YhQAPAKi1B"+
            "OUjABALCCECwmdbVIwGPQAT6BCTWDqGwvXv27PnH4uee/18EXhqNYjjUnxhL5koRARoAKQLNakjA"+
            "qgTEdICmal2qfQLKICeNgNgbay2SPrJkyZK1X+3a9Qd49F+Mzn8xlvPdHHsRTEkC5hCgAWAOd9ZK"+
            "ApYiEHIMVLQrsURwMJcIxtQ0C5FqISL3XQeHypHo+INYYbG8qLhYePjzIAEpCNAAkKKZKCQJGE8A"+
            "0wG/1zRlKjqy5xAsaCdq/I3xtUpVg3jbX/Diiy++sfPLnQ8oinYF3vZfqQpWFU+fPv0LqTShsCQA"+
            "AjQA+DMgARI4jUD15kHn3XzLzf/RtGnTP+Jh3mkJnPVlB9RdtH79+mVvlL1xE972L8GfzROqopXh"+
            "bf9OZ6GgtnYjQAPAbi1KfUhABwIYDZipKcrt6OyewiqBXShSbCfsFN8A4dC3aNeOXW+++NKSoRgV"+
            "KcCrkgd/LN+tqKr6fzNmzBA8eJCA9ARoAEjfhFSABIwjENo/QFNadunY7bpLR156A2qyqyEQetNH"+
            "p/9JzU5fcbl+XlRUtN04yiyZBMwhQAPAHO6slQSkITDH738wqGk3YjRge+s2re8ZN26cWNtuB0Mg"+
            "NKeP4f2Nb65ceWP0mz47fWl+nhQ0CQI0AJKAx6wk4CQCmBaYjU7yiurh8H/fMWXKarfbfTUYjJWE"+
            "g+jwy8S5aNGi3V/v3j0D+gyFPi78IXyXnb4krUgxdSNAA0A3lCyIBJxBYPbs2R3cLrdP0bTLFVUt"+
            "y8rOemD8+PEdoP04nIU4reArIObx1+AsKy8v//Sll1766ps9eyYh6JFwaMzHuRUOfR+7Kit/OeWu"+
            "u77Edx4k4DgCNAAc1+RUmAT0I4D4AaXoSC/8/+3dTUsCQRzHcWdZ7WJREXsIKcNo82YE3XoLXXoR"+
            "3noLCb2DfQHdewu9B6mD4ANKG3ipg4KJkLo7/RY6etiovOx3YNllnAf2o8z8ZxlZtVgzVi8WMrmn"+
            "s1rt8fzi4tB13Uvll3Ukk+5/pmRlH+p4nown3WazOer22lfaxFhV3rH+o+9poOtZYzravd9xXPeu"+
            "Xq8v9BkJgUwLEABk+uvn5hH4G4FGo+F4e96tAoCqsfZUk++Jrt/Vel+DTPugVH6o+JU33/e3v3vc"+
            "1HnrB71PVPYjKT8cDmftVst7CcPrKI6PlLWv4GNXfe7oOlK/oc59x5jBfLkM2LUvDRICKwQIAFag"+
            "kIUAAr8XCIKgVHDdG20grKi1ZCVeNsYUNFFPNfAsbM7GaXsxOeOoXl71itbaeTLJa9If6GVGr5GN"+
            "7vW0YeQ4zlgr+1naNimHQNYFCACy/gvg/hFYo4CCgg1N1EUFAvk4jp20XauO4gi7UJ2pVvSfaetR"+
            "DgEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAAB"+
            "BBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQ"+
            "QAABBBBAAIF1CXwBtSz5pV82D1EAAAAASUVORK5CYII=";

        var swipe_right = "data:image/png;base64," +
            "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAAXNSR0IArs4c6QAAAAlwSFlzAAAL"+
            "EwAACxMBAJqcGAAABCZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6"+
            "eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYg"+
            "eG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4K"+
            "ICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlm"+
            "Zj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9"+
            "Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0"+
            "cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0"+
            "cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0"+
            "PjE8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjU8L3Rp"+
            "ZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNv"+
            "bHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgog"+
            "ICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAg"+
            "PGV4aWY6UGl4ZWxYRGltZW5zaW9uPjUxMjwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAg"+
            "IDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhl"+
            "bFlEaW1lbnNpb24+NTEyPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgICAgPGRjOnN1Ympl"+
            "Y3Q+CiAgICAgICAgICAgIDxyZGY6U2VxLz4KICAgICAgICAgPC9kYzpzdWJqZWN0PgogICAgICAg"+
            "ICA8eG1wOk1vZGlmeURhdGU+MjAxNTowNToxNiAwMzowNTo1NTwveG1wOk1vZGlmeURhdGU+CiAg"+
            "ICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+UGl4ZWxtYXRvciAzLjIuMTwveG1wOkNyZWF0b3JUb29s"+
            "PgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4K3LeY"+
            "oQAAQABJREFUeAHsnQl8FkWa/6tzh4AhXHIn3PclCCLjEFBxwPEWnOQNEmd31J1DnZ1j1905cHRW"+
            "nf/MiqO74zjjApKEMQiCCCoKJCAiN+FGORKucEOAEJK8Sf9/9SbBF8zxHt3v29X96w/N+77dXVXP"+
            "8603bz1V9dRTQvAgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIg"+
            "ARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIg"+
            "ARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIg"+
            "ARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIg"+
            "ARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIg"+
            "ARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIg"+
            "ARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIg"+
            "ARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIg"+
            "ARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIg"+
            "ARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIgARIw"+
            "gIBmQB7MggRIgARsSWBebu7yyvKKDrrQTmqanp+ekfFbWypKpRxJIMKRWlNpEiABEmiCQPac7CXR"+
            "0dG3dOvRvUdsXGy5roufZmdlZTeRjLdJgARIgARIgARUJZCbmxuTMyf7iq7rW3HK4zzOzOw5WZuy"+
            "s7I/UlUvyk0C3gQ4AuBNg+9JgARIAAQqyyv/pguxDG+H1AJJxOvM9AzXHE3X3TlzsqRhwN/PWjh8"+
            "UZMAv8Bq1hulJgESMJOApg/omtL1zXqKeCUtw3UaPgGrc7KyL2Ca4KV6nuElElCCAA0AJaqJQpIA"+
            "CYSSgCa0ngMGDMAgQL3HtPSM9NsGDx3STwj9URgBs+t9ihdJwOIEaABYvIIoHgmQQGgJYP4/HsP7"+
            "0UlJSb0aKXnIwIEDV2NKYJIm9CE5WVkLGnmWt0jAkgRoAFiyWigUCZBAGAm0QtlncaY0IUMy7udh"+
            "SuAZXdfawmlQ+gzwIAFlCNAAUKaqKCgJkEAoCFRUVMAA0KQBMNSH8qRz4EpMCbyla3o5nQN9IMZH"+
            "LEOABoBlqoKCkAAJWIEAfhS/j2H9Y5AlxQ95Zqa7XGfoHOgHMT4adgI0AMJeBRSABEjAYgSS0ZDv"+
            "g0xyiN+fQzoHDqJzoD/I+Gw4CdAACCd9lk0CJGA5AnD979lvQL/8AAUbC+fAxXAOvJXOgQESZLKQ"+
            "EaABEDLULIgESEAJArpITklJuRyErDJ40FY4B2bSOTAIikxqOgEaAKYjZgEkQAKqEFi8eHEzyBqJ"+
            "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"+
            "bms6PT2tqvfzmq8fVizMazz/IshLxpenP2itVmsq2Gca1gSev4AC4PkfAyMgcCQCTxYL83oRQT4v"+
            "Sf0QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQ"+
            "IECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECA"+
            "AAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAEC"+
            "BAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQ"+
            "IECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECA"+
            "AAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAEC"+
            "BAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQ"+
            "IECAAAECJ17gH5hdU4rESVO6AAAAAElFTkSuQmCC";

        var swipe_up = "data:image/png;base64," +
            "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAAXNSR0IArs4c6QAAAAlwSFlzAAAL"+
            "EwAACxMBAJqcGAAABCZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6"+
            "eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYg"+
            "eG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4K"+
            "ICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlm"+
            "Zj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9"+
            "Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0"+
            "cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0"+
            "cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0"+
            "PjE8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjU8L3Rp"+
            "ZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNv"+
            "bHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgog"+
            "ICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAg"+
            "PGV4aWY6UGl4ZWxYRGltZW5zaW9uPjUxMjwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAg"+
            "IDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhl"+
            "bFlEaW1lbnNpb24+NTEyPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgICAgPGRjOnN1Ympl"+
            "Y3Q+CiAgICAgICAgICAgIDxyZGY6U2VxLz4KICAgICAgICAgPC9kYzpzdWJqZWN0PgogICAgICAg"+
            "ICA8eG1wOk1vZGlmeURhdGU+MjAxNTowNToxNiAwMzowNTowOTwveG1wOk1vZGlmeURhdGU+CiAg"+
            "ICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+UGl4ZWxtYXRvciAzLjIuMTwveG1wOkNyZWF0b3JUb29s"+
            "PgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KxXkL"+
            "xAAAQABJREFUeAHsvQlgU9ed73+vFluWbMv7grENtsE2m8GYPUBCAoQ1bCE0IW0yWQjrJH2TtjNv"+
            "3pT+p9N2XvpCh522aTrvP0sn007b6SSZNm3aNHuzECCAARuze5P33ZZ03+9c+RpZSLJ23Xv11Ywr"+
            "6d6z/M7nKJzf/Z3f73c4Di8QAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQ"+
            "AAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQ"+
            "AAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQ"+
            "AAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQ"+
            "AAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQ"+
            "AAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQAAEQ"+
            "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"+
            "AAAASUVORK5CYII=";

        var swipe_left = "data:image/png;base64,"+
            "iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAAXNSR0IArs4c6QAAAAlwSFlzAAAL"+
            "EwAACxMBAJqcGAAABCZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6"+
            "eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYg"+
            "eG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4K"+
            "ICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlm"+
            "Zj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9"+
            "Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0"+
            "cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0"+
            "cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0"+
            "PjE8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjU8L3Rp"+
            "ZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNv"+
            "bHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgog"+
            "ICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAg"+
            "PGV4aWY6UGl4ZWxYRGltZW5zaW9uPjUxMjwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAg"+
            "IDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhl"+
            "bFlEaW1lbnNpb24+NTEyPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgICAgPGRjOnN1Ympl"+
            "Y3Q+CiAgICAgICAgICAgIDxyZGY6U2VxLz4KICAgICAgICAgPC9kYzpzdWJqZWN0PgogICAgICAg"+
            "ICA8eG1wOk1vZGlmeURhdGU+MjAxNTowNToxNiAwMzowNToyNDwveG1wOk1vZGlmeURhdGU+CiAg"+
            "ICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+UGl4ZWxtYXRvciAzLjIuMTwveG1wOkNyZWF0b3JUb29s"+
            "PgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4K8KWp"+
            "6wAAQABJREFUeAHsvQlgFMeV/1/dMyNpdI3uGx0ggSRuEGBuxGUQGDAGfMbGxg6HgY2za+/m2A27"+
            "6032l+QfZ8UhWNtr59zESZzYa0JsY4yNMdhg7lvilpBA9zkjjab7/3rEYCFG0tzT3fPtZDwz3VWv"+
            "3vvUoH5d9eoVYzhAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARA"+
            "AARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARA"+
            "AARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARA"+
            "AARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARA"+
            "AARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARA"+
            "AARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARA"+
            "AARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARA"+
            "AARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARA"+
            "AARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARA"+
            "AARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAARAAAQ8T4DzvEhIBAH3CWzb"+
            "tm0Ix3G6jIyMa0VFRU3uS4QEEAABEACB7gTgAHSngc9+J1CyZcsjjOMWhYToC/V6fVJCYiK7cPbM"+
            "9DXr13/qd+WgAAiAAAioiAAcABV1ppJNKSkpyRQswgtajTZ1/IRx8RkZmdNEJrJbt26xfXs/ec9k"+
            "7li7cePGciXbCN1BAARAQE4EtHJSBroEJoHtxdtHCoLlXyIiIy48/vjjOTzPj7CRiImJYYe+PBRq"+
            "ae6cQud+ZzuPdxAAARAAAfcIwAFwjx9qu0mgZHPJZIG3bEpMSDq4dNnSDSTO0FOkPiS4vLWFy+l5"+
            "Ht9BAARAAARcJwAHwHV2qOkmAZrvf5Ax4bv5Q4cemT59+vd7E6cPCzOzmprY3q7jPAiAAAiAgPME"+
            "4AA4zww13CTws5/9TB8SFLRe5LiXCmfOPJqbm/vNvkRGRkQmiYxd76sMroEACIAACDhHAA6Ac7xQ"+
            "2k0CW7duzeZE7kWdTmNevnx5tSE6ek5/InmeEyhaVdNfOVwHARAAARBwnAAcAMdZoaSbBGht/31M"+
            "YN+LjY89v2LFimdJ3D3z/faa0Gi1epGGC+xdwzkQAAEQAAHXCMABcI0bajlJQJrvFwXxO/n5Q49N"+
            "L5z+985U14foB9CSwGvO1EFZEAABEACBvgnAAeibD666SaD7fP+MGTP25eXnP+esSJoCEDnG6Zyt"+
            "h/IgAAIgAAK9E4AD0DsbXHGTQPf5/oeWLbsYHRNDUf/OH8HBISGMEyOcr4kaIAACIAACvRHge7uA"+
            "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"+
            "5ZrSurq6BjFDv7W6ulpMcbjq0jT9u+IremdEwCW+sXzVUIs0VSscOnRoIW/4putGAuqlAAVAL+E4"+
            "DQEEuhZYs3z53VpQ0CRRDIwzFCVBHCW++qaMF3cICqMGR+ph4REd0dFR8a6BAwcMHjx4tFhiWAkN"+
            "De26sV4+2traqoiZ+Ir4JK80XrtWKHbTU5uamys6OjraGq5evdzU3BLScLXepema743ed9v+gnij"+
            "rzQMo8KhOD43nEaxGOMvXbZsWVMvQ+A0BEwvQAFg+i4iQASsLfDss8+GiZ+7xZtrgvgkPVpkM1z8"+
            "i1JUI1r8L1bAUxIcqvqhojrKHKpyWXU6W4IcQZqqqmJhvFv/iHbFBDyv09A0l24oQ8REvHjx/2yx"+
            "pG6peHOvFG/s18S12sXte68oRDoUh9JoGOolMUP/vJisV6qGqOdTU1Prb30ljkDAXgIUAPbqT7JB"+
            "wFICzz///GCX0xUvhg/u9hUHYgOcWEVXwsUbd7D4170Vh8Rael29sbdoLWVPPfXUVUuBECwCCCCA"+
            "AAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAAC"+
            "CCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggg"+
            "gAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAA"+
            "AggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAII"+
            "IIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCA"+
            "AAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAAC"+
            "CCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggg"+
            "gAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAgjYS+D/AK8hRcvKQp6r"+
            "AAAAAElFTkSuQmCC";

        return {
            single_tap: single_tap,
            double_tap: double_tap,
            swipe_down: swipe_down,
            swipe_right: swipe_right,
            swipe_left: swipe_left,
            swipe_up: swipe_up
        };
    }]);
!function(e){var n=e(this.angular);"object"==typeof module&&"object"==typeof module.exports&&(module.exports=n)}(function(e){return e.module("ngDisableScroll",[]).directive("ngDisableScroll",["$document",function(n){var t=null;return n.find("head").append("<style type='text/css'>.ng-disable-scroll{overflow:hidden !important;}</style>"),{restrict:"A",link:function(l,o,r){function i(){return n.unbind("touchmove",c),o===t?d.removeClass("ng-disable-scroll"):void 0}function c(e){return u(e)?void 0:e.preventDefault()}function u(e){var n=r.scrollableElements;if(!n)return s(e,o[0]);var t=s.bind(null,e);return a(n).some(t)}function s(e,n){return n.contains(e.target)&&n.scrollHeight>n.clientHeight}function a(e){var n=o[0].querySelectorAll(e);return Array.prototype.slice.apply(n)}var d=e.element(n[0].documentElement);l.$watch(r.ngDisableScroll,function(e){e?(t=o,d.addClass("ng-disable-scroll"),n.bind("touchmove",c)):i()}),l.$on("$destroy",i)}}}])});
(function() {
    'use strict';
    angular
        .module('app.config', [])
        .config(Config);

    Config.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider", "ApiConfigProvider"];

    function Config($stateProvider, $urlRouterProvider, $locationProvider, ApiProvider) {
        ApiProvider.setBaseUrl("https://stage.retsrabbit.com/");
        ApiProvider.setClientId("retsrabbit");
        ApiProvider.setClientSecret("retsrabbit");

        $stateProvider
            .state('app', {
                url: '',
                controller: 'BaseCtrl as Base',
                templateUrl: 'templates/base.html',
                abstract: true
            })
            .state('app.home', {
                url: '/explore',
                controller: 'HomeCtrl as Home',
                templateUrl: 'templates/landing.html'
            })
            .state('app.explorer-v1', {
                url: '/explore/v1',
                controller: 'ExploreV1Ctrl as ExplorerV1',
                templateUrl: 'templates/v1.html'
            })
            .state('app.explorer-v2', {
            	url: '/explore/v2',
            	controller: 'ExploreV2Ctrl as Explorer',
            	templateUrl: 'templates/v2.html'
            });

        $urlRouterProvider.otherwise('/explore');
    }
})();

(function() {
    'use strict';
    angular
        .module('app.constants', [])
        .constant('Config', (function Const() {
            var constant = {
                siteName: 'Rets Rabbit'
            };
            return constant;
        })());
})();

(function () {
	'use strict';
	angular.module('app', [
		'ui.bootstrap',
		'ngDisableScroll',
		'ngSanitize',
		'ng-walkthrough',
		'duScroll',
	  	'rr.api.v2.explorer',
		'ui.router',
	 	'app.templates',
	 	'app.config',
	 	'app.run',
	 	'app.constants',
	 	'app.controllers',
	 	'app.factories',
	  	'app.services',
		'app.filters'
	]);
})();

(function() {
    'use strict';
    angular
        .module('app.run', [])
        .run(Run);

    Run.$inject = [];

    function Run() {

    }
})();

(function() {
	/**
	 * DO NOT MODIFY THIS TEMPLATE. 
	 * It needs to exist for the template cache module to work properly
	 */
    'use strict';
    angular
        .module('app.templates', []);
})();

(function() {
    'use strict';
    angular
        .module('app.controller.base', [])
        .controller('BaseCtrl', Controller);

    Controller.$inject = ['$scope', '$window', '$document', 'Config', 'RRAuthFactory'];

    function Controller($scope, $window, $document, Config, AuthFactory) {
    	var vm = this;

    	init();

    	function init () {
            var token = $window.localStorage.getItem('token');
            var did_tutorial = $window.localStorage.getItem('finished_tutorial');

    		$scope.data = {
                tutorial: {
                    active: false,
                    example_queries: false,
                    fields: false,
                    query_info: false
                }
            };
            vm.data = {};

            if(did_tutorial === 'undefined' || did_tutorial == null || did_tutorial === ''){
                // $document.scrollTopAnimated(0, 200).then(function() {
                //     $scope.data.tutorial.active = true;
                //     $scope.data.tutorial.example_queries = true;
                // });
            }

            vm.showFieldsTutorial = _showFieldsTutorial;
            vm.showQueryInfoTutorial = _showQueryInfoTutorial;
            vm.finishedTutorial = _finishedTutorial;
    	}

        function _showFieldsTutorial() {
            $scope.data.tutorial.fields = true;
        }

        function _showQueryInfoTutorial() {
            $scope.data.tutorial.query_info = true;
        }

        function _finishedTutorial() {
            $scope.data.tutorial.active = false;
            $window.localStorage.setItem('finished_tutorial', true);
        }
    }
})();

/**
 * Created by aclinton on 10/11/16.
 */
(function () {
    'use strict';

    angular
        .module('app.controller.explore.v1', [])
        .controller('ExploreV1Ctrl', Controller);

    Controller.$inject = ['$scope', '$timeout', '$document'];

    function Controller($scope, $timeout, $document) {
        var vm = this;

        init();

        $(document).ready(function () {
            $('.loader-inner').loaders();
        });

        function init () {
            vm.RR = new RetsRabbit({
                host: 'http',
                client_id: 'E1bi6hyy7nLxjlicqE2cDhyUykmA11KPoK9cSbr',
                client_secret: 'x8EZaK74sYmkQLOk4CJBhwLJP0McajzKro6RY6j',
                url: 'retsrabbit.app/api',
                storageKey: 'access_token_v1'
            });

            vm.data = {
                api: {
                    url: 'http://retsrabbit.app/api/'
                },
                metadata: {
                    search: null,
                    fields: [],
                    hidden: true
                },
                info: {
                    hidden: true
                },
                server: {
                    hash: '',
                    fetching: false
                },
                auth: {
                    token: null,
                    authenticating: false
                },
                query: {
                    string: '',
                    fetching: false,
                    params: [],
                    modifiers: [
                        {
                            name: 'Starts With',
                            value: ':startswith',
                            for: 'string'
                        }, {
                            name: 'Ends With',
                            value: ':endswith',
                            for: 'string'
                        }, {
                            name: 'Contains',
                            value: ':indexof',
                            for: 'string'
                        }, {
                            name: 'No Case',
                            value: ':nocase',
                            for: 'string'

                        }, {
                            name: 'Greater',
                            value: '+',
                            for: 'number'
                        }, {
                            name: 'Less',
                            value: '-',
                            for: 'number'
                        }, {
                            name: 'Between',
                            value: '<->',
                            for: 'number'
                        }, {
                            name: 'Equals',
                            value: '=',
                            for: 'number'
                        }
                    ],
                    results: null,
                    total_records: null
                },
                queryUrl: ''
            };

            $scope.params = vm.data.query.params;

            $timeout(function () {
                vm.data.metadata.search = '';
            }, 100);

            $scope.$watch('params', function (oldv, newv){
                if(oldv != newv){
                    var s = _queryString();
                    _queryUrl(s);
                }
            }, true);

            _checkAuth();
            _queryUrl();
        }

        /* === METHOD BINDING === */
        vm.query = _query;
        vm.toggleQueryInfo = _toggleQueryInfo;
        vm.search = _search;
        vm.ready = _ready;
        vm.addField = _addField;
        vm.toggleM = _toggleM;
        vm.removeParam = _removeParam;

        /* === METHODS === */
        function _query() {

        }

        function _checkAuth() {
            var token = window.localStorage.getItem('access_token_v1');

            if(!token || token == 'null' || token == null){
                _authenticate();
            } else {
                vm.data.auth.token = token;
                _servers();
            }
        }

        function _authenticate () {
            vm.data.auth.authenticating = true;

            //Stores auth tokens for us
            vm.RR.auth(function(err, res) {
                vm.data.auth.authenticating = false;

                if(err){
                    console.log(err);
                } else {
                    vm.data.auth.token = res.access_token;
                    _servers();
                }
            });
        }

        function _metaData() {
            if(!vm.data.server.hash)
                return;

            vm.RR.get('/v1/' + vm.data.server.hash + '/metadata/explorer', null, null, function(err, res) {
                if(err){
                    console.log(err);
                } else {
                    vm.data.metadata.fields = res.data;
                    _queryUrl();
                }
            });
        }

        function _servers() {
            console.log('getting servers');
            vm.data.server.fetching = true;

            vm.RR.get('/v1/server', null, null, function (err, res) {
                vm.data.server.fetching = false;
                if(err){
                    console.log(err);
                } else {
                    if(res.length) {
                        for(var i = 0; i < res.length; i ++){
                            if(res[i].name === 'Rets Rabbit Test V1'){
                                vm.data.server.hash = res[i].server_hash;
                                $timeout(function () {
                                    _queryUrl();
                                }, 100);
                                break;
                            }
                        }
                    }

                    _metaData();
                }
            });
        }

        function _toggleQueryInfo() {
            vm.data.info.hidden = !vm.data.info.hidden;
        }

        function _toggleM() {
            vm.data.metadata.hidden = !vm.data.metadata.hidden;

            if(!vm.data.metadata.hidden){
                vm.data.info.hidden = false;
            }
        }

        function _queryString() {
            var url = '';

            if(!vm.data.metadata.fields || !vm.data.metadata.fields.length)
                return url;

            for(var i = 0, len = vm.data.query.params.length; i < len; i++){
                var p = vm.data.query.params[i];

                var metadata = null;
                for(var j = 0, len2 = vm.data.metadata.fields.length; j < len2; j++){
                    if(vm.data.metadata.fields[j].Name == p.field){
                        metadata = vm.data.metadata.fields[j];
                        break;
                    }
                }

                if(!metadata) //go to next field since it's not in metadata
                    continue;

                if(p.value.left || p.value.right){
                    url += p.field;
                    var modifier = null;

                    //find the modifier
                    for(var z = 0; z < vm.data.query.modifiers.length; z++){
                        if(vm.data.query.modifiers[z].value == p.modifier){
                            modifier = vm.data.query.modifiers[z];
                            break;
                        }
                    }

                    //see what kind of modifier we have
                    if(modifier){
                        if(modifier.for == 'string'){
                            url += p.modifier;
                            url += '=' + p.value.left;
                        }

                        if(modifier.for == 'number'){
                            if(modifier.value == '<->'){
                                url += '=' + p.value.left;
                                url += '-';
                                url += p.value.right;
                            } else {
                                url += '=' + p.value.left;
                                if(p.modifier === '+'){
                                    url += "%2b";
                                } else if (p.modifier === '=') {
                                    //do nothing
                                } else {
                                    url += p.modifier;
                                }
                            }
                        }
                    }
                }

                if((i+1) < len)
                    url += '&';
            }

            if(url.substr(url.length - 1) == '&')
                url = url.slice(0, -1);

            return url;
        }

        function _queryUrl(queryString) {
            vm.data.queryUrl = '';

            var url = vm.data.api.url + 'v1/';

            vm.data.queryUrl += url;

            if(vm.data.server.hash){
                url = vm.data.server.hash + '/listing/search?';

                vm.data.queryUrl += url;

                if(queryString){
                    vm.data.queryUrl += queryString;
                }
            }
        }

        function _search() {
            var s = _queryString();
            var url = '/v1/' + vm.data.server.hash + '/listing/search?' + s;

            vm.data.query.results = null;
            vm.data.query.fetching = true;
            $document.find('#query-results').empty();

            vm.RR.get(url, null, null, function(err, res) {
                vm.data.query.fetching = false;

                if(err){
                    console.log(err);
                } else {
                    $timeout(function () {
                        vm.data.query.results = res;//JSON.stringify(res, null, 4);
                        vm.data.query.total_records = res.total_records;
                        $document.find('#query-results').append(renderjson(res));
                    }, 100);
                }
            });
        }

        function _ready() {
            return vm.data.server.hash != null && vm.data.auth.token != null;
        }

        function _addField() {
            var param = {
                field: null,
                value: {
                    left: '',
                    right: ''
                },
                modifier: null
            };

            vm.data.query.params.push(param);
        }

        function _removeParam(index) {
            vm.data.query.params.splice(index, 1);
        }
    }
})();

(function() {
    'use strict';
    angular
        .module('app.controller.explore.v2', [])
        .controller('ExploreV2Ctrl', Controller);

    Controller.$inject = ['$scope', '$window', '$document', '$timeout', 'MetadataFactory', 'QueryFactory', 'AuthFactory'];

    function Controller($scope, $window, $document, $timeout, MetadataFactory, QueryFactory, AuthFactory) {
    	var vm = this;

    	init();

    	function init () {
    		vm.data = {
                tutoral: {
                    hidden: true
                },
                metadata: {
                    search: '',
                    hidden: true,
                    fields: MetadataFactory.fields()
                },
                query_info: {
                    hidden: true
                },
                queriesCollapsed: false,
                queries: QueryFactory.queries(),
                fillQuery: null
            };

            var token = window.localStorage.getItem('token');

            if(token === 'undefined' || token == null || token === ''){
                AuthFactory.getToken().then(function (res){
                    console.log(res);
                }, function (err){
                    console.log(err);
                });
            }


            vm.toggleMeta = _toggleMeta;
            vm.filterMeta = _filterMeta;
            vm.fillQuery = _fillQuery;
            vm.toggleQueryInfo = _toggleQueryInfo;
            vm.startTutorial = _startTutorial;
    	}

        /* --- FUNCTIONS --- */
        function _filterMeta() {
            if(vm.data.metadata.search === '') {
                vm.data.metadata.fields = MetadataFactory.fields();
                return;
            }

            vm.data.metadata.fields = MetadataFactory.fields().filter(function (field){
                if(field.name.toLowerCase().indexOf(vm.data.metadata.search.toLowerCase()) != -1)
                    return field;

                if(field.type.toLowerCase().indexOf(vm.data.metadata.search.toLowerCase()) != -1)
                    return field;
            });
        }

        function _toggleMeta() {
            if(vm.data.query_info.hidden == true && vm.data.metadata.hidden == true){
                vm.data.query_info.hidden = false;
            }

            vm.data.metadata.hidden = !vm.data.metadata.hidden;
            //do other stuff if necessary
        }

        function _fillQuery(query){
            vm.data.fillQuery = query;
        }

        function _toggleQueryInfo() {
            vm.data.query_info.hidden = !vm.data.query_info.hidden;
            //do other stuff if necessary
        }

        function _startTutorial() {
            $document.scrollTopAnimated(0, 200).then(function() {
                $scope.data.tutorial.active = true;
                $scope.data.tutorial.example_queries = true;
            });
        }
    }
})();

/**
 * Created by aclinton on 10/11/16.
 */
(function () {
    'use strict';

    angular
        .module('app.controller.home', [])
        .controller('HomeCtrl', Controller);

    Controller.$inject = ['$scope'];

    function Controller($scope) {
        var vm = this;

        init();

        function init() {
            vm.data = {

            }
        }
    }
})();

/**
 * Created by aclinton on 10/11/16.
 */
(function() {
    'use strict';
    angular
        .module('app.controllers', [
            'app.controller.base',
            'app.controller.explore.v2',
            'app.controller.explore.v1',
            'app.controller.home'
        ]);
})();


(function() {
    'use strict';
    angular
        .module('app.factories', []);
})();

/**
 * Created by aclinton on 10/12/16.
 */
(function () {
    'use strict';

    angular
        .module('app.filters', [
            'app.filter.show_modifier'
        ]);
})();

/**
 * Created by aclinton on 10/12/16.
 */
(function () {
    'use strict';

    angular
        .module('app.filter.show_modifier', [])
        .filter('showModifier', Filter);

    function Filter() {
        return function (mods, field, metadata) {
            if(!field || field === '')
                return mods;

            var new_mods = [];

            for(var i = 0; i < mods.length; i ++) {
                var _mod = mods[i];
                var passed = false;

                if (!metadata || !metadata.length) {
                    new_mods.push(_mod);
                    continue;
                }

                for (var j = 0, len2 = metadata.length; j < len2; j++) {
                    if (metadata[j].Name == field) {
                        var _field = metadata[j];
                        var _name = _field.Type;

                        if (_mod.for === 'number') {
                            if (_name.toLowerCase() === 'integer')
                                passed = true;

                            if (_name.toLowerCase() === 'numeric')
                                passed = true;

                            if (_name.toLowerCase() === 'decimal')
                                passed = true;

                            if (_name.toLowerCase() === 'date')
                                passed = true;
                        }

                        if (_mod.for === 'string') {
                            if (_name.toLowerCase().includes('character') ||
                                _name.toLowerCase().includes('text'))
                                passed = true;
                        }

                        break;
                    }
                }

                if (passed)
                    new_mods.push(_mod);
            }

            return new_mods;
        }
    }
})();

(function () {
	'use strict';
	angular
		.module('app.services', []);
})();