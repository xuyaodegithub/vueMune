(function(window){var svgSprite='<svg><symbol id="icon-caidan" viewBox="0 0 1024 1024"><path d="M91.947643 260.164345c-15.413038 0-27.985378-12.543687-27.985378-27.980261 0-15.442714 12.57234-27.986401 27.985378-27.986401L931.447583 204.197682c15.46625 0 27.986401 12.543687 27.986401 27.986401 0 15.436574-12.514012 27.980261-27.986401 27.980261L91.947643 260.164345 91.947643 260.164345zM91.947643 260.164345M91.947643 539.999704c-15.413038 0-27.985378-12.567223-27.985378-27.981285 0-15.441691 12.57234-27.985378 27.985378-27.985378L931.447583 484.033042c15.46625 0 27.986401 12.543687 27.986401 27.985378 0 15.414061-12.514012 27.981285-27.986401 27.981285L91.947643 539.999704 91.947643 539.999704zM91.947643 539.999704M91.947643 819.836087c-15.413038 0-27.985378-12.567223-27.985378-27.980261 0-15.414061 12.57234-27.986401 27.985378-27.986401L931.447583 763.869425c15.46625 0 27.986401 12.571317 27.986401 27.986401 0 15.413038-12.514012 27.980261-27.986401 27.980261L91.947643 819.836087 91.947643 819.836087zM91.947643 819.836087"  ></path></symbol><symbol id="icon-you" viewBox="0 0 1024 1024"><path d="M386.844 170.667l-45.51 39.822 256 301.511-256 301.511 39.822 39.822L682.666 512z" fill="#73777A" ></path></symbol><symbol id="icon-xia" viewBox="0 0 1024 1024"><path d="M512 624.32l264.32-293.76a32 32 0 1 1 47.36 42.88l-288 320a32 32 0 0 1-47.36 0l-288-320a32 32 0 0 1 47.36-42.88z"  ></path></symbol><symbol id="icon-zuo" viewBox="0 0 1024 1024"><path d="M693.44 776.32a32 32 0 0 1-42.88 47.36l-320-288a32 32 0 0 1 0-47.36l320-288a32 32 0 1 1 42.88 47.36L399.68 512z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)