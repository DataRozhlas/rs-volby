!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([function(e,t){if("Microsoft Internet Explorer"===navigator.appName||navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/rv:11/)){var o=document.createElement("div");o.innerHTML='Používáte zastaralý Internet Explorer, takže vám části tohoto webu nemusí fungovat. Navíc to <a target="_blank" style="color:white;" rel="noopener noreferrer" href="https://www.zive.cz/clanky/microsoft-internet-explorer-neni-prohlizec-prestante-ho-tak-pouzivat/sc-3-a-197149/default.aspx">není bezpečné</a>, zvažte přechod na <a target="_blank" style="color:white;" rel="noopener noreferrer" href="https://www.mozilla.org/cs/firefox/new/">jiný prohlížeč</a>.',o.style.cssText="text-align:center;position:absolute;width:100%;height:auto;opacity:1;z-index:100;background-color:#d52834;top:37px;padding-top:4px;padding-bottom:3px;color:white;",document.body.appendChild(o)}},function(e,t,o){"use strict";o.r(t);o(0);var n={1:[[.58,.07,.28,.06],[.62,.08,.25,.05],[.43,.2,.24,.13],[.46,.22,.2,.12],[.4,.22,.22,.16],[.32,.34,.19,.15]],2:[[.388,.408,.145,.047,.012],[.483,.39,.095,.031,0],[.252,.413,.22,.101,.014],[.293,.404,.211,.065,.027],[.26,.398,.254,.067,.02],[.215,.392,.239,.141,.013]],3:[[.15,.44,.336,.062,.012],[.239,.501,.198,.046,.017],[.081,.356,.407,.141,.015],[.113,.426,.328,.105,.027],[.111,.391,.37,.105,.022],[.087,.295,.399,.197,.021]],4:[[.029,.147,.46,.343,.021],[.052,.229,.445,.258,.017],[.024,.087,.405,.456,.027],[.04,.103,.417,.394,.046],[.033,.129,.419,.38,.038],[.031,.094,.338,.513,.024]],5:[[.26,.2,.13,.09,.02,.07,.05,.09,.03,.06],[.17,.16,.18,.03,.02,.05,.07,.2,.04,.07],[.4,.1,.08,.11,.1,.1,.02,.01,.04,.03],[.32,.13,.15,.06,.1,.08,.08,.04,.03,.01],[.28,.09,.18,.19,.03,.07,.03,.05,.04,.03],[.33,.07,.08,.17,.1,.13,.04,.02,.04,.02]],6:[[.42,.58],[.26,.74],[.61,.39],[.59,.41],[.59,.41],[.76,.24]]},r={1:"Se kterým z následujících výroků nejvíce souhlasíte?",2:"Řekl/a byste, že v dnešní době lidé, jako jste vy mají možnost otevřeně se vyjadřovat k problémům a nedostatkům ve společnosti?",3:"Řekl/a byste, že v dnešní době lidé, jako jste vy mohou ovlivnit řešení problémů ve své obci, městě?",4:"Řekl/a byste, že v dnešní době lidé, jako jste vy mohou ovlivnit řešení problémů na celostátní úrovni?",5:"Koho jste volili do PSP 2017?",6:"Koho jste volili na hrad?"},a={1:["Demokracie je lepší než jakýkoliv jiný způsob vlády.","Pro lidi jako jsem já je jedno, zda máme demokratický nebo nedemokratický režim.","Za určitých okolností může být autoritativní způsob vládnutí lepší než demokratický.","Nedovedu posoudit / nevím"],5:["ANO","ODS","Piráti","SPD Tomio Okamura","KSČM","ČSSD","Lidovci (KDU-ČSL)","TOP 09","Starostové a nezávislí (STAN)","jiná partaj"],6:["Miloše Zemana","Jiřího Drahoše"]};function i(e){return function(e){if(Array.isArray(e)){for(var t=0,o=new Array(e.length);t<e.length;t++)o[t]=e[t];return o}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var l=["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a"];!function(e,t){var o=["Rozhodně ano","Spíše ano","Spíše ne","Rozhodně ne","Nevím"];e in a&&(o=a[e]);var s=i(Array(o.length)).map(function(e){return Array()});n[e].forEach(function(e){i(Array(o.length).keys()).forEach(function(t){s[t].push(e[t])})});var c=[];o.forEach(function(e,t){c.push({name:e,color:l[t],index:t,data:s[t]})}),Highcharts.chart(t,{chart:{type:"column",events:{render:function(){this.series.forEach(function(e){e.dataLabelsGroup.hide()})}}},credits:{enabled:!1},title:{text:r[e]},xAxis:{categories:["Zajištěná střední třída","Nastupující kosmopolitní třída","Tradiční pracující třída","Třída místních vazeb","Ohrožená třída","Strádající třída"]},yAxis:{min:0,max:1,title:{text:"podíl odpovědí"},labels:{formatter:function(){return 100*Math.abs(this.value)+" %"}}},legend:{align:"center",verticalAlign:"top",itemDistance:10,shadow:!1,symbolHeight:10,symbolWidth:10,symbolRadius:0,x:-15},tooltip:{formatter:function(){return"<b>"+this.series.name+"</b>"}},plotOptions:{column:{stacking:"normal",dataLabels:{enabled:!0,allowOverlap:!0,padding:0,formatter:function(){return Math.abs(Math.round(1e3*this.y)/10)+" %"}}},series:{animation:!1,events:{mouseOver:function(){this.dataLabelsGroup.show()},mouseOut:function(){this.dataLabelsGroup.hide()}}}},series:c})}("4","1")}]);