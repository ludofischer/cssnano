(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{1221:function(e,t,n){var r={"./_collections":217,"./_collections.js":217,"./_path":234,"./_path.js":234,"./_transforms":237,"./_transforms.js":237,"./addAttributesToSVGElement":456,"./addAttributesToSVGElement.js":456,"./addClassesToSVGElement":457,"./addClassesToSVGElement.js":457,"./cleanupAttrs":458,"./cleanupAttrs.js":458,"./cleanupEnableBackground":459,"./cleanupEnableBackground.js":459,"./cleanupIDs":460,"./cleanupIDs.js":460,"./cleanupListOfValues":461,"./cleanupListOfValues.js":461,"./cleanupNumericValues":462,"./cleanupNumericValues.js":462,"./collapseGroups":463,"./collapseGroups.js":463,"./convertColors":464,"./convertColors.js":464,"./convertEllipseToCircle":465,"./convertEllipseToCircle.js":465,"./convertPathData":466,"./convertPathData.js":466,"./convertShapeToPath":467,"./convertShapeToPath.js":467,"./convertStyleToAttrs":468,"./convertStyleToAttrs.js":468,"./convertTransform":469,"./convertTransform.js":469,"./inlineStyles":470,"./inlineStyles.js":470,"./mergePaths":485,"./mergePaths.js":485,"./minifyStyles":486,"./minifyStyles.js":486,"./moveElemsAttrsToGroup":500,"./moveElemsAttrsToGroup.js":500,"./moveGroupAttrsToElems":501,"./moveGroupAttrsToElems.js":501,"./prefixIds":502,"./prefixIds.js":502,"./removeAttributesBySelector":503,"./removeAttributesBySelector.js":503,"./removeAttrs":504,"./removeAttrs.js":504,"./removeComments":505,"./removeComments.js":505,"./removeDesc":506,"./removeDesc.js":506,"./removeDimensions":507,"./removeDimensions.js":507,"./removeDoctype":508,"./removeDoctype.js":508,"./removeEditorsNSData":509,"./removeEditorsNSData.js":509,"./removeElementsByAttr":510,"./removeElementsByAttr.js":510,"./removeEmptyAttrs":511,"./removeEmptyAttrs.js":511,"./removeEmptyContainers":512,"./removeEmptyContainers.js":512,"./removeEmptyText":513,"./removeEmptyText.js":513,"./removeHiddenElems":514,"./removeHiddenElems.js":514,"./removeMetadata":515,"./removeMetadata.js":515,"./removeNonInheritableGroupAttrs":516,"./removeNonInheritableGroupAttrs.js":516,"./removeOffCanvasPaths":517,"./removeOffCanvasPaths.js":517,"./removeRasterImages":518,"./removeRasterImages.js":518,"./removeScriptElement":519,"./removeScriptElement.js":519,"./removeStyleElement":520,"./removeStyleElement.js":520,"./removeTitle":521,"./removeTitle.js":521,"./removeUnknownsAndDefaults":522,"./removeUnknownsAndDefaults.js":522,"./removeUnusedNS":523,"./removeUnusedNS.js":523,"./removeUselessDefs":524,"./removeUselessDefs.js":524,"./removeUselessStrokeAndFill":525,"./removeUselessStrokeAndFill.js":525,"./removeViewBox":526,"./removeViewBox.js":526,"./removeXMLNS":527,"./removeXMLNS.js":527,"./removeXMLProcInst":528,"./removeXMLProcInst.js":528,"./reusePaths":529,"./reusePaths.js":529,"./sortAttrs":538,"./sortAttrs.js":538,"./sortDefsChildren":539,"./sortDefsChildren.js":539};function o(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=s,e.exports=o,o.id=1221},1460:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=1460},1464:function(e,t){},1466:function(e,t){},1615:function(e,t){},204:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),s=n(235),a=n(620),i=n.n(a),l=n(621),c=n.n(l),u=n(216),m=n(218),d=n.n(m),p=n(276),v=n(627),f=n(4),h=n(277),E=n.n(h),j=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isEditorReady:!1},n.handleEditorDidMount=n.handleEditorDidMount.bind(Object(v.a)(n)),n}Object(f.a)(t,e);var n=t.prototype;return n.handleEditorDidMount=function(){this.setState({isEditorReady:!0})},n.render=function(){return o.a.createElement("div",null,o.a.createElement(h.ControlledEditor,{height:"50rem",theme:this.props.theme,language:"css",loading:o.a.createElement(p.RingSpinner,null),value:this.props.input,onChange:this.props.handleOnChange,editorDidMount:this.handleEditorDidMount,options:{lineNumbers:"on"}}))},t}(r.Component),b=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){return o.a.createElement("div",null,o.a.createElement(E.a,{height:"50rem",theme:this.props.theme,language:"css",loading:o.a.createElement(p.RingSpinner,null),value:this.props.output,editorDidMount:this.handleEditorDidMount,options:{lineNumbers:"on"}}))},t}(r.Component),g=function(e){return window.btoa(unescape(encodeURIComponent(e)))},y=function(e){return decodeURIComponent(escape(window.atob(e)))};n(302);var S=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){return o.a.createElement("div",null,o.a.createElement(h.ControlledEditor,{height:"50rem",theme:this.props.theme,language:"json",loading:o.a.createElement(p.RingSpinner,null),value:this.props.config,onChange:this.props.handleOnChange,editorDidMount:this.handleEditorDidMount,options:{lineNumbers:"on"}}))},t}(r.Component),C=(n(257),n(657)),N=n(658),w=n(656),D=n(132),A=n.n(D);function O(e){var t=Object.assign({},e);return o.a.createElement("nav",{className:d()("navbar navbar--dark",A.a.playgroundInnerNav)},o.a.createElement("div",{className:"navbar__inner"},o.a.createElement("div",{className:"navbar__items"},o.a.createElement("button",{onClick:t.toggleTheme,className:d()("button button--primary",A.a.headbtn)},o.a.createElement(w.a,null)," Toggle theme"),o.a.createElement("button",{onClick:t.runHandler,className:d()("button button--primary",A.a.headbtn)},o.a.createElement(C.a,null)," Run"),o.a.createElement("button",{onClick:t.format,className:d()("button button--primary",A.a.headbtn)},o.a.createElement(N.a,null)," Format"),o.a.createElement("button",{onClick:t.save,className:d()("button button--primary",A.a.headbtn)},o.a.createElement(C.b,null)," Save"))))}n(58),n(19);var T=n(212),_=n.n(T),P=(n(71),{cssnanoPresetDefault:n(384),cssnanoPresetAdvanced:n(1603),cssnanoPresetLite:n(1686)});function k(e,t,n){if(!Array.isArray(e))return Promise.resolve(e()(t,n));var r=e[0],o=e[1];return void 0===o||"object"==typeof o&&!o.exclude?Promise.resolve(r(o)(t,n)):Promise.resolve()}var M=function(e,t){var n,r=P[(n=t[0],n.split("-").map((function(e,t){return 0===t?e:e.slice(0,1).toUpperCase().concat(e.slice(1))})).join(""))](t[1]).plugins,o=function(e,t){return r.reduce((function(n,r){return n.then(k.bind(null,r,e,t))}),Promise.resolve())};return new Promise((function(t,n){_()(o).process(e).then((function(e){return t(e)})).catch((function(e){return n(e)}))}))},I=n(353),U=n(133),G=n.n(U);t.default=()=>{const e=JSON.parse("undefined"!=typeof window&&window.localStorage.getItem("cssnano_editor_state")||null),t=function(){try{return JSON.parse(y(window.location.hash.replace(/^#/,"")))}catch(e){return null}}()||e||{input:"/* write your css below */",config:'// cssnano config\n{\n  "preset" : "default",\n}\n'},n=Object(u.a)(),{siteConfig:a={}}=n,[l,m]=Object(r.useState)("dark"),[v,f]=Object(r.useState)(!1),[h,E]=Object(r.useState)("/* your optimized output here */"),[C,N]=Object(r.useState)(t.input),[w,D]=Object(r.useState)(t.config);return o.a.createElement(s.a,{title:""+a.title,description:"CSSNANO - Playground"},o.a.createElement(I.a,{customClass:"playground_position"}),o.a.createElement(O,{toggleTheme:function(){m("light"===l?"dark":"light")},runHandler:async function(){f(!0);const e=function(e){void 0!==e.preset&&e.preset;if(void 0===e.plugins){if(Array.isArray(e.preset))return["advance"===e.preset[0]?"cssnano-preset-advance":"default"===e.preset[0]?"cssnano-preset-default":"cssnano-preset-lite",e.preset.length>1?e.preset[1]:{}];"advance"===e.preset||e.preset}return["cssnano-preset-default",{}]}(JSON.parse(JSON.stringify(w.split("\n").slice(1).join("\n"))));M(C,e).then(e=>{E(e.css)}).catch(e=>{E(e)}),f(!1)},format:function(){const e=i.a.format(C,{parser:"css",plugins:[c.a]});N(e)},save:function(){const e=JSON.stringify({input:C,config:w});"undefined"!=typeof window&&(window.localStorage&&window.localStorage.setItem("cssnano_editor_state",e),window.location.hash=g(e))}}),o.a.createElement("div",{className:A.a.panelLoaderPlaceholder,style:{display:v?"block":"none"}},o.a.createElement("div",{className:A.a.panelLoaderHolder},o.a.createElement(p.RingSpinner,null))),o.a.createElement("div",{className:"row",style:{margin:"0"}},o.a.createElement("div",{className:d()("col col--4",G.a.editorCol)},o.a.createElement(j,{theme:l,input:C,handleOnChange:function(e,t){N(t)}})),o.a.createElement("div",{className:d()("col col--4",G.a.editorCol)},o.a.createElement(S,{theme:l,config:w,handleOnChange:function(e,t){D(t)}})),o.a.createElement("div",{className:d()("col col--4",G.a.editorCol)},o.a.createElement(b,{theme:l,output:h}))))}},353:function(e,t,n){"use strict";var r=n(0),o=n.n(r);class s extends r.Component{constructor(e){super(e)}componentDidMount(){const e=document.querySelector(".carbon_ads_wrapper"),t=document.createElement("script");t.src="//cdn.carbonads.com/carbon.js?serve=CEBI62JN&placement=cssnanoco",t.async=!0,t.id="_carbonads_js",e.appendChild(t)}render(){return o.a.createElement("div",{className:"carbon_ads_wrapper "+(this.props.customClass||"")})}}t.a=s},659:function(e,t){},660:function(e,t){},661:function(e,t){},678:function(e,t){},692:function(e,t){}}]);