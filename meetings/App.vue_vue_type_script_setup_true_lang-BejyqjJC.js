import{importShared as E}from"./__federation_fn_import-BRmtu28b.js";import{i as We}from"./highrise365-CAQSwmde.js";import{n as ve,l as n,x as ne,g as i,r as c,M as u,L as Fe,h as qe,a as Ze,u as we,b as _e,i as Je,c as xe,d as $e,s as Ge,R as et,e as tt,f as rt,B as it,j as nt,k as ot,m as at,o as st,C as lt,p as dt,S as ct,q as ut,D as Re,_ as ht,t as mt,v as pt}from"./useMeetingsApi-fe2O0L9s.js";import{X as Le}from"./highrise200-FNrLCB0Z.js";const gt=ve("n-modal-provider"),ft=ve("n-modal-api"),vt=ve("n-modal-reactive-list"),f="0!important",be="-1px!important";function Q(e){return i(`${e}-type`,[c("& +",[n("button",{},[i(`${e}-type`,[u("border",{borderLeftWidth:f}),u("state-border",{left:be})])])])])}function W(e){return i(`${e}-type`,[c("& +",[n("button",[i(`${e}-type`,[u("border",{borderTopWidth:f}),u("state-border",{top:be})])])])])}const yn=n("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[ne("vertical",{flexDirection:"row"},[ne("rtl",[n("button",[c("&:first-child:not(:last-child)",`
 margin-right: ${f};
 border-top-right-radius: ${f};
 border-bottom-right-radius: ${f};
 `),c("&:last-child:not(:first-child)",`
 margin-left: ${f};
 border-top-left-radius: ${f};
 border-bottom-left-radius: ${f};
 `),c("&:not(:first-child):not(:last-child)",`
 margin-left: ${f};
 margin-right: ${f};
 border-radius: ${f};
 `),Q("default"),i("ghost",[Q("primary"),Q("info"),Q("success"),Q("warning"),Q("error")])])])]),i("vertical",{flexDirection:"column"},[n("button",[c("&:first-child:not(:last-child)",`
 margin-bottom: ${f};
 margin-left: ${f};
 margin-right: ${f};
 border-bottom-left-radius: ${f};
 border-bottom-right-radius: ${f};
 `),c("&:last-child:not(:first-child)",`
 margin-top: ${f};
 margin-left: ${f};
 margin-right: ${f};
 border-top-left-radius: ${f};
 border-top-right-radius: ${f};
 `),c("&:not(:first-child):not(:last-child)",`
 margin: ${f};
 border-radius: ${f};
 `),W("default"),i("ghost",[W("primary"),W("info"),W("success"),W("warning"),W("error")])])])]),bt="4.7.8",Ct={version:bt};function At(e){return!(!e||typeof e!="string"||e.length===0||/^[0-9]/.test(e)||!/^[a-zA-Z_-][a-zA-Z0-9_-]*$/.test(e))}function yt(e){if(!e||typeof e!="string")throw new Error("Invalid version string provided");let t=e.replace(/\./g,"-");if(t=t.replace(/[^a-zA-Z0-9_-]/g,""),/^[0-9]/.test(t)&&(t=`v${t}`),!t)throw new Error("Version string resulted in empty class name after sanitization");return t}function wt(e="stable",t="hr"){const m=`${t}-v-${e}`,o=yt(m);if(!At(o))throw new Error(`Generated version class "${o}" is not a valid CSS class name`);return o}const{ref:ke}=await E("vue");function Ie(e){const t=Fe(e),m=qe(t),o=Ze(t),v=ke(m),$=ke(o);return{languageLocale:v,dateLocale:$}}const _t=n("alert",[i("rtl",`
 direction: rtl;
 `,[u("icon",`
 left: unset;
 right: 0;
 margin: var(--n-icon-margin-rtl);
 `),i("show-icon",[n("alert-body",`
 padding-left: var(--n-padding);
 padding-right: calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right));
 `)]),u("close",`
 position: absolute;
 right: unset;
 left: 0;
 margin: var(--n-close-margin-rtl);
 `)])]),xt={name:"Alert",style:_t},$t=n("avatar-group",[i("rtl",`
 direction: rtl;
 `,[ne("vertical",`
 flex-direction: row;
 `,[n("avatar",[c("&:not(:first-child)",`
 margin-right: var(--n-gap);
 margin-left: 0;
 `)])])])]),Rt={name:"AvatarGroup",style:$t},kt=n("badge",[i("rtl",`
 direction: rtl;
 `,[n("badge-sup",`
 right: 100%;
 left: unset;
 transform: translateX(50%);
 direction: initial;
 `)])]),It={name:"Badge",style:kt};function F(e){return i(`${e}-type`,[c("& +",[n("button",{},[i(`${e}-type`,[u("border",{borderRightWidth:f}),u("state-border",{left:be})])])])])}const St=n("button-group",[ne("vertical",[i("rtl",`
 direction: rtl;
 `,[n("button",[c("&:last-child:not(:first-child)",`
 margin-right: ${f};
 border-top-right-radius: ${f};
 border-bottom-right-radius: ${f};
 `),c("&:first-child:not(:last-child)",`
 margin-left: ${f};
 border-top-left-radius: ${f};
 border-bottom-left-radius: ${f};
 `),c("&:not(:last-child):not(:first-child)",`
 margin-left: ${f};
 margin-right: ${f};
 border-radius: ${f};
 `),F("default"),i("ghost",[F("primary"),F("info"),F("success"),F("warning"),F("error")])])])])]),Be={name:"ButtonGroup",style:St},Ot=n("button",[i("rtl",`
 direction: rtl;
 `,[u("icon",{margin:"var(--n-icon-margin)",marginRight:0}),u("content",[c("~",[u("icon",{margin:"var(--n-icon-margin)",marginLeft:0})])])])]),Ce={name:"Button",style:Ot},Mt=n("card",[i("rtl",`
 direction: rtl;
 `),c(">",[n("card-header",[c(">",[u("close",`
 margin: 0 8px 0 0;
 `)])])])]),Ut={name:"Card",style:Mt},Dt=n("checkbox",[i("rtl",`
 direction: rtl;
 `)]),ze={name:"Checkbox",style:Dt},Et={name:"Carousel",style:c([])},Tt=c([n("data-table",[i("rtl",`
 direction: rtl;
 `,[n("data-table-th",[i("filterable",`
 padding-left: 36px;
 padding-right: var(--n-th-padding);
 `,[i("sortable",`
 padding-right: var(--n-th-padding);
 padding-left: calc(var(--n-th-padding) + 36px);
 `)]),n("data-table-sorter",`
 margin-left: 0;
 margin-right: 4px;
 `),n("data-table-filter",`
 right: unset;
 left: 0;
 `)])])]),n("data-table-filter-menu",[i("rtl",`
 direction: rtl;
 `)])]),Lt=n("scrollbar",[i("rtl","")]),ee={name:"Scrollbar",style:Lt},Bt=n("input",[i("rtl",`
 direction: rtl;
 `,[u("prefix",{marginRight:0,marginLeft:"4px"}),u("suffix",{marginRight:"4px",marginLeft:0}),i("textarea","width: 100%;",[n("input-word-count",`
 left: var(--n-padding-right);
 right: unset;
 `)]),n("input-word-count",`
 margin-left: 0;
 margin-right: 4px;
 `)])]),oe={name:"Input",style:Bt},zt=n("pagination",[i("rtl",`
 direction: rtl;
 `,[c("> *:not(:first-child)",`
 margin: var(--n-item-margin-rtl);
 `),n("pagination-quick-jumper",[n("input",`
 margin: var(--n-input-margin-rtl);
 `)])])]),Pt=n("base-selection",[i("rtl",`
 direction: rtl;
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-left) var(--n-padding-single-bottom) var(--n-padding-single-right);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-left) var(--n-padding-multiple-bottom) var(--n-padding-multiple-right);
 `,[n("base-suffix",`
 right: unset;
 left: 10px;
 `)])]),Pe={name:"InternalSelection",style:Pt},jt=n("base-select-menu",[i("rtl",`
 direction: rtl;
 `,[n("base-select-option",[u("check",`
 right: unset;
 left: calc(var(--n-option-padding-right) - 4px);
 `),i("show-checkmark",`
 padding-left: calc(var(--n-option-padding-right) + 20px);
 padding-right: var(--n-option-padding-left);
 `)])])]),je={name:"InternalSelectMenu",style:jt},Nt=n("tag",[i("rtl",`
 direction: rtl;
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-left) var(--n-close-margin-bottom) var(--n-close-margin-right);
 `,[u("icon",`
 margin: 0 0 0 4px;
 `),u("avatar",`
 margin: 0 0 0 6px;
 `),i("round",[u("icon",`
 margin: 0 calc((var(--n-height) - 8px) / -2) 0 4px;
 `),u("avatar",`
 margin: 0 calc((var(--n-height) - 8px) / -2) 0 6px;
 `),i("closable",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 4);
 `)]),i("icon, avatar",[i("round",`
 padding: 0 calc(var(--n-height) / 2) 0 calc(var(--n-height) / 3);
 `)])])]),Ae={name:"Tag",style:Nt},Ne={name:"Select",style:c([]),peers:[Pe,je,Ae,ee]},Ve={name:"Pagination",style:zt,peers:[oe,Ne]},Vt={name:"DataTable",style:Tt,peers:[ee,Ve]},Ht=n("dialog",[i("rtl",`
 --n-icon-margin: var(--n-icon-margin-top) var(--n-icon-margin-left) var(--n-icon-margin-bottom) var(--n-icon-margin-right);
 `,[u("title",`
 direction: rtl;
 `),u("content",`
 direction: rtl;
 `),u("close",`
 right: unset;
 left: 0;
 margin-left: 1.8rem;
 direction: rtl;
 `),u("action",`
 direction: rtl;
 display: flex;
 `,[c("> *:not(:first-child)",`
 margin-right: var(--n-action-space);
 `),c("> *",`
 margin-right: 0;
 `)]),i("icon-left",[i("closable",[u("title",`
 padding-right: unset;
 `)])])])]),Kt={name:"Dialog",style:Ht},Yt=n("drawer",[i("rtl",`
 text-align: right;
 `,[n("drawer-content",`
 direction: rtl;
 `,[n("drawer-header",[u("close",`
 margin-left: 0;
 margin-right: 6px;
 `)])])])]),Xt={name:"Drawer",style:Yt,peers:[ee]},Qt=n("dropdown-menu",[i("rtl",`
 direction: rtl;
 `,[n("dropdown-option",[n("dropdown-option-body",[u("suffix",[i("has-submenu",`
 transform: rotate(180deg);
 `)])])])])]),Wt={name:"Dropdown",style:Qt},Ft=n("input-number",[i("rtl",`
 direction: rtl;
 `)]),He={name:"InputNumber",style:Ft,peers:[oe,Ce]},qt=n("dynamic-input",[i("rtl",`
 direction: rtl;
 `,[n("dynamic-input-preset-pair",[n("dynamic-input-pair-input",[c("&:first-child",{"margin-left":"12px","margin-right":"0"})])]),n("dynamic-input-item",[u("action",`
 margin: var(--action-margin-rtl);
 `)])])]),Zt={name:"DynamicInput",style:qt,peers:[oe,Ce,Be,ze,He]},Jt=n("progress",[i("rtl",`
 direction: rtl;
 `,[n("progress-graph-line-fill",[i("processing",[c("&::after",`
 animation: progress-processing-animation-rtl 2s var(--n-bezier) infinite;
 `)])])]),c("@keyframes progress-processing-animation-rtl",`
 0% {
 position: absolute;
 right: 0;
 top: 0;
 bottom: 0;
 left: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 right: 0;
 top: 0;
 bottom: 0;
 left: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 right: 0;
 top: 0;
 bottom: 0;
 left: 0;
 opacity: 0;
 }
 `)]),Gt={name:"Progress",style:Jt},er=n("list",[i("rtl",`
 direction: rtl;
 text-align: right;
 `,[n("list-item",[u("prefix",`
 margin-right: 0;
 margin-left: 20px;
 `),u("suffix",`
 margin-right: 20px;
 margin-left: 0;
 `)])])]),tr={name:"List",style:er},rr=c([c("@keyframes shimmer-move-rtl",`
 0% {
 right: 0;
 }
 42% {
 right: calc(50% - 1.5px);
 }
 47% {
 right: calc(50% - 1.5px);
 }
 78% {
 right: calc(100% - 4px);
 }
 100% {
 right: 0;
 }
 `),n("loading-bar-container",[i("rtl",`
 direction: rtl;
 `,[n("loading-bar",`
 position: absolute;
 right: 0;
 top: 0;
 left: auto;
 width: 100%;
 `,[n("loading-bar__shimmer",`
 left: auto;
 right: 0;
 animation: shimmer-move-rtl 2.2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
 `)])])])]),ir={name:"LoadingBar",style:rr},nr=n("notification",[i("rtl",`
 direction: rtl;
 `,[n("notification-main",`
 margin-left: unset;
 margin-right: 8px;
 `,[u("header",`
 margin: var(--n-icon-margin);
 margin-right: 0;
 `)]),u("avatar",`
 left: unset;
 right: var(--n-padding-left);
 `),i("show-avatar",[n("notification-main",`
 margin-right: 40px;
 margin-reft: unset;
 `)]),i("closable",[n("notification-main",[c("> *:first-child",`
 padding-left: 20px;
 padding-right: unset;
 `)]),u("close",`
 right: unset;
 left: 0;
 `)])])]),or={name:"Notification",style:nr},ar=n("popover",[i("rtl",`
 text-align: right;
 `,[u("header",`
 direction: rtl;
 `),u("content",`
 direction: rtl;
 `),u("footer",`
 direction: rtl;
 `)])]),sr={name:"Popover",style:ar,peers:[ee]},lr=c([n("radio",[i("rtl",`
 direction: rtl;
 `)]),n("radio-group",[i("rtl",`
 direction: rtl;
 `)])]),dr={name:"Radio",style:lr},cr=n("space",[i("rtl",`
 direction: rtl;
 `)]),ur={name:"Space",style:cr},hr=c([n("table",[i("rtl",`
 direction: rtl;
 text-align: right;
 `,[c("th, td",`
 border-right: 0px solid var(--n-merged-border-color);
 border-left: 1px solid var(--n-merged-border-color);
 `,[c("&:last-child",`
 border-left: none;
 border-right: inherit;
 `)]),i("single-line",[c("th, td",`
 border-left: 0px solid var(--n-merged-border-color);
 `)])])])]),mr={name:"Table",style:hr},pr=n("upload",[i("rtl",`
 direction: rtl;
 text-align: right;
 `)]),gr={name:"Upload",style:pr},fr=n("divider",[i("rtl",`
 direction: rtl;
 `,[i("title-position-left",[u("line",[i("left",`
 width: 100%;
 `),i("right",`
 width: 28px;
 `)])]),i("title-position-right",[u("line",[i("left",`
 width: 28px;
 `),i("right",`
 width: 100%;
 `)])])])]),vr={name:"Divider",style:fr},br=n("slider",[i("rtl",[c("&:not(&.n-slider--vertical)",`
 direction: rtl;
 `),c("&:not(&.n-slider--vertical)",[n("slider-handle-indicator",[i("right",`
 margin-left: 0;
 margin-right: 12px;
 `),i("left",`
 margin-right: 0;
 margin-left: 12px;
 `)])]),c("&:not(&.n-slider--vertical)",[i("reverse",[n("slider-handles",[n("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)])])])])]),Cr={name:"Slider",style:br},Ar=n("tabs",[i("rtl",`
 direction: rtl;
 `,[i("left",`
 flex-direction: row-reverse;
 `),i("right",`
 flex-direction: row;
 `),n("tabs-nav-scroll-wrapper",[i("shadow-start",[c("&::before",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),i("shadow-end",[c("&::after",`
 box-shadow: none;
 `)])]),n("tabs-nav",[u("prefix",`
 padding-right: 0;
 padding-left: 16px;
 `),u("suffix",`
 padding-left: 0;
 padding-right: 16px;
 `),i("card-type",[n("tabs-tab",[i("addable",`
 padding-left: 8px;
 padding-right: 8px;
 `),i("closable",`
 padding-right: 0;
 padding-left: 8px;
 `)])]),i("line-type",[i("right",[n("tabs-bar",`
 left: -1px;
 right: auto;
 `)]),i("left",[n("tabs-bar",`
 right: -1px;
 left: auto;
 `)])])]),i("flex",[n("tabs-nav",[n("tabs-wrapper",[n("tabs-tab",`
 margin-right: auto;
 margin-left: 0;
 `)])])]),n("tabs-tab",[u("close",`
 margin-left: 0;
 margin-right: 6px;
 `)]),n("tab-pane",[c("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(-32px);
 `),c("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(32px);
 `)])])]),yr={name:"Tabs",style:Ar},wr=n("collapse",[i("rtl",`
 direction: rtl;
 `,[n("collapse-item",[n("collapse-item",{marginRight:"32px",marginLeft:0}),i("left-arrow-placement",[u("header",[n("collapse-item-arrow",{marginRight:0,marginLeft:"4px"})])]),i("right-arrow-placement",[u("header",[n("collapse-item-arrow",{marginLeft:0,marginRight:"4px"})])]),i("active",[u("header",[i("active",[n("collapse-item-arrow",{transform:"rotate(-90deg)"})])])])])])]),_r={name:"Collapse",style:wr},xr=n("tree",[i("rtl",`
 direction: rtl;
 text-align: right;
 `,[n("tree-node-switcher",`
 transform: rotate(180deg);
 `,[i("expanded",`
 transform: rotate(90deg);
 `)]),n("tree-node-checkbox",`
 margin-right: 0;
 margin-left: 4px;
 `),n("tree-node-content",[u("prefix",`
 margin-right: 0;
 margin-left: 8px;
 `)]),n("tree-node-checkbox",[i("right",`
 margin-right: 4px;
 `)])])]),Ke={name:"Tree",style:xr},$r={name:"TreeSelect",style:c([]),peers:[Pe,je,Ae,ee,Ke]},Rr=c([n("date-picker",[i("rtl",`
 direction: rtl;
 `)]),n("date-panel",[i("rtl",`
 direction: rtl;
 `,[n("date-panel-month",[u("fast-prev",`
 order: 1;
 `),u("prev",`
 order: 2;
 `),u("month-year",`
 order: 3;
 `),u("next",`
 order: 4;
 `),u("fast-next",`
 order: 5;
 `),u("fast-prev, prev, next, fast-next",[c("svg",`
 transform: rotate(180deg);
 transform-origin: center;
 `)])]),n("date-panel-dates",[n("date-panel-date",[i("current",[u("sup",`
 right: auto;
 left: 2px;
 `)]),i("week-hovered",[c("&:nth-child(7n + 1)::before",`
 border-top-right-radius: var(--n-item-border-radius);
 border-bottom-right-radius: var(--n-item-border-radius);
 border-top-left-radius: 0;
 border-bottom-left-radius: 0;
 `),c("&:nth-child(7n + 7)::before",`
 border-top-left-radius: var(--n-item-border-radius);
 border-bottom-left-radius: var(--n-item-border-radius);
 border-top-right-radius: 0;
 border-bottom-right-radius: 0;
 `)]),i("week-selected",[c("&:nth-child(7n + 1)::before",`
 border-top-right-radius: var(--n-item-border-radius);
 border-bottom-right-radius: var(--n-item-border-radius);
 border-top-left-radius: 0;
 border-bottom-left-radius: 0;
 `),c("&:nth-child(7n + 7)::before",`
 border-top-left-radius: var(--n-item-border-radius);
 border-bottom-left-radius: var(--n-item-border-radius);
 border-top-right-radius: 0;
 border-bottom-right-radius: 0;
 `)]),i("covered, start, end",[c("&:nth-child(7n + 1)::before",`
 border-top-right-radius: var(--n-item-border-radius);
 border-bottom-right-radius: var(--n-item-border-radius);
 border-top-left-radius: 0;
 border-bottom-left-radius: 0;
 `),c("&:nth-child(7n + 7)::before",`
 border-top-left-radius: var(--n-item-border-radius);
 border-bottom-left-radius: var(--n-item-border-radius);
 border-top-right-radius: 0;
 border-bottom-right-radius: 0;
 `)]),i("selected",[i("start",[c("&::before",`
 right: 50%;
 left: calc((var(--n-item-size) - var(--n-item-cell-width)) / 2);
 `)]),i("end",[c("&::before",`
 left: 50%;
 right: calc((var(--n-item-size) - var(--n-item-cell-width)) / 2);
 `)])])])])])])]),kr={name:"DatePicker",style:Rr},Ir=n("timeline",[i("rtl",`
 direction: rtl;
 `)]),Sr={name:"Timeline",style:Ir},Or=[xt,Rt,It,Be,Ce,Ut,ze,Et,Vt,Kt,Xt,Wt,Zt,Gt,He,oe,tr,ir,or,Ve,sr,dr,Ne,ur,mr,Ae,gr,vr,Cr,yr,_r,$r,Ke,kr,Sr],Mr={name:"common",common:{name:"common",fontFamily:"'Inter var', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",fontFamilyMono:"v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",fontWeight:"400",fontWeightStrong:"500",cubicBezierEaseInOut:"cubic-bezier(.4, 0, .2, 1)",cubicBezierEaseOut:"cubic-bezier(0, 0, .2, 1)",cubicBezierEaseIn:"cubic-bezier(.4, 0, 1, 1)",borderRadiusSmall:"2px",fontSize:"14px",fontSizeMini:"12px",fontSizeTiny:"12px",fontSizeSmall:"14px",fontSizeMedium:"14px",fontSizeLarge:"15px",fontSizeHuge:"16px",lineHeight:"1.6",heightMini:"16px",heightTiny:"22px",heightSmall:"28px",heightMedium:"34px",heightLarge:"40px",heightHuge:"46px",baseColor:"#FFF",primaryColor:"#155EEF",primaryColorHover:"#004EEB",primaryColorPressed:"#155EEF",primaryColorSuppl:"#155EEF",infoColor:"#2080f0",infoColorHover:"#4098fc",infoColorPressed:"#1060c9",infoColorSuppl:"#4098fc",successColor:"#155EEF",successColorHover:"#155EEF",successColorPressed:"#004EEB",successColorSuppl:"#155EEF",warningColor:"#f0a020",warningColorHover:"#fcb040",warningColorPressed:"#c97c10",warningColorSuppl:"#fcb040",errorColor:"#D92D20",errorColorHover:"#B42318",errorColorPressed:"#D92D20",errorColorSuppl:"#D92D20",textColorBase:"#000",textColor1:"rgba(16, 24, 40, 1)",textColor2:"rgba(52, 64, 84, 1)",textColor3:"rgb(118, 124, 130)",textColorDisabled:"rgba(194, 194, 194, 1)",placeholderColor:"rgba(102, 112, 133, 1)",placeholderColorDisabled:"rgba(209, 209, 209, 1)",iconColor:"rgba(194, 194, 194, 1)",iconColorHover:"rgba(146, 146, 146, 1)",iconColorPressed:"rgba(175, 175, 175, 1)",iconColorDisabled:"rgba(209, 209, 209, 1)",opacity1:"0.82",opacity2:"0.72",opacity3:"0.38",opacity4:"0.24",opacity5:"0.18",dividerColor:"rgb(239, 239, 245)",borderColor:"rgb(224, 224, 230)",closeIconColor:"rgba(102, 102, 102, 1)",closeIconColorHover:"rgba(102, 102, 102, 1)",closeIconColorPressed:"rgba(102, 102, 102, 1)",closeColorHover:"rgba(0, 0, 0, .09)",closeColorPressed:"rgba(0, 0, 0, .13)",clearColor:"rgba(194, 194, 194, 1)",clearColorHover:"rgba(146, 146, 146, 1)",clearColorPressed:"rgba(175, 175, 175, 1)",scrollbarColor:"rgba(0, 0, 0, 0.25)",scrollbarColorHover:"rgba(0, 0, 0, 0.4)",scrollbarWidth:"5px",scrollbarHeight:"5px",scrollbarBorderRadius:"5px",progressRailColor:"rgba(235, 235, 235, 1)",railColor:"rgb(219, 219, 223)",popoverColor:"#fff",tableColor:"#fff",cardColor:"#fff",modalColor:"#fff",bodyColor:"#fff",tagColor:"#eee",avatarColor:"rgba(204, 204, 204, 1)",invertedColor:"rgb(0, 20, 40)",inputColor:"rgba(255, 255, 255, 1)",codeColor:"rgb(244, 244, 248)",tabColor:"rgb(247, 247, 250)",actionColor:"rgb(250, 250, 252)",tableHeaderColor:"rgb(250, 250, 252)",hoverColor:"rgb(243, 243, 245)",tableColorHover:"rgba(0, 0, 100, 0.03)",tableColorStriped:"rgba(0, 0, 100, 0.02)",pressedColor:"rgb(237, 237, 239)",opacityDisabled:"0.5",inputColorDisabled:"rgb(250, 250, 252)",buttonColor2:"rgba(46, 51, 56, .05)",buttonColor2Hover:"rgba(46, 51, 56, .09)",buttonColor2Pressed:"rgba(46, 51, 56, .13)",boxShadow1:"0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",boxShadow2:"0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",boxShadow3:"0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"}},{defineComponent:Ur,h:Dr,inject:Er,computed:T,markRaw:Se,provide:Tr}=await E("vue"),Lr={abstract:Boolean,bordered:{type:Boolean,default:void 0},clsPrefix:String,locale:Object,dateLocale:Object,namespace:String,rtl:Array,tag:{type:String,default:"div"},hljs:Object,katex:Object,theme:Object,themeOverrides:Object,componentOptions:Object,icons:Object,breakpoints:Object,preflightStyleDisabled:Boolean,styleMountTarget:Object,inlineThemeDisabled:{type:Boolean,default:void 0},as:{type:String,validator:()=>(Ge("config-provider","`as` is deprecated, please use `tag` instead."),!0),default:void 0}},Br=Ur({name:"ConfigProvider",alias:["App"],props:Lr,setup(e){const t=Er(_e,null),m=T(()=>{const{theme:d}=e;if(d===null)return;const U=t?.mergedThemeRef.value;return d===void 0?U:U===void 0?d:Object.assign({},U,d)}),o=T(()=>{const{themeOverrides:d}=e;if(d!==null){if(d===void 0)return t?.mergedThemeOverridesRef.value;{const U=t?.mergedThemeOverridesRef.value;return U===void 0?d:Je({},U,d)}}}),v=xe(()=>{const{namespace:d}=e;return d===void 0?t?.mergedNamespaceRef.value:d}),$=xe(()=>{const{bordered:d}=e;return d===void 0?t?.mergedBorderedRef.value:d}),b=T(()=>{const{icons:d}=e;return d===void 0?t?.mergedIconsRef.value:d}),M=T(()=>{const{componentOptions:d}=e;return d!==void 0?d:t?.mergedComponentPropsRef.value}),_=T(()=>{const{clsPrefix:d}=e;return d!==void 0?d:t?t.mergedClsPrefixRef.value:we}),D=T(()=>{var d;const{rtl:U}=e;if(U===void 0)return t?.mergedRtlRef.value;const w={};for(const I of U)w[I.name]=Se(I),(d=I.peers)===null||d===void 0||d.forEach(r=>{r.name in w||(w[r.name]=Se(r))});return w}),y=T(()=>e.breakpoints||t?.mergedBreakpointsRef.value),g=e.inlineThemeDisabled||t?.inlineThemeDisabled,O=e.preflightStyleDisabled||t?.preflightStyleDisabled,Y=e.styleMountTarget||t?.styleMountTarget,X=T(()=>{const{value:d}=m,{value:U}=o,w=U&&Object.keys(U).length!==0,I=d?.name;return I?w?`${I}-${$e(JSON.stringify(o.value))}`:I:w?$e(JSON.stringify(o.value)):""});return Tr(_e,{mergedThemeHashRef:X,mergedBreakpointsRef:y,mergedRtlRef:D,mergedIconsRef:b,mergedComponentPropsRef:M,mergedBorderedRef:$,mergedNamespaceRef:v,mergedClsPrefixRef:_,mergedLocaleRef:T(()=>{const{locale:d}=e;if(d!==null)return d===void 0?t?.mergedLocaleRef.value:d}),mergedDateLocaleRef:T(()=>{const{dateLocale:d}=e;if(d!==null)return d===void 0?t?.mergedDateLocaleRef.value:d}),mergedHljsRef:T(()=>{const{hljs:d}=e;return d===void 0?t?.mergedHljsRef.value:d}),mergedKatexRef:T(()=>{const{katex:d}=e;return d===void 0?t?.mergedKatexRef.value:d}),mergedThemeRef:m,mergedThemeOverridesRef:o,inlineThemeDisabled:g||!1,preflightStyleDisabled:O||!1,styleMountTarget:Y}),{mergedClsPrefix:_,mergedBordered:$,mergedNamespace:v,mergedTheme:m,mergedThemeOverrides:o}},render(){var e,t,m,o;return this.abstract?(o=(m=this.$slots).default)===null||o===void 0?void 0:o.call(m):Dr(this.as||this.tag,{class:`${this.mergedClsPrefix||we}-config-provider`},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))}}),{defineComponent:zr,h:Pr,ref:jr}=await E("vue"),Nr=zr({name:"ModalEnvironment",props:Object.assign(Object.assign({},tt),{internalKey:{type:String,required:!0},onInternalAfterLeave:{type:Function,required:!0}}),setup(e){const t=jr(!0);function m(){const{onInternalAfterLeave:y,internalKey:g,onAfterLeave:O}=e;y&&y(g),O&&O()}function o(){const{onPositiveClick:y}=e;y?Promise.resolve(y()).then(g=>{g!==!1&&_()}):_()}function v(){const{onNegativeClick:y}=e;y?Promise.resolve(y()).then(g=>{g!==!1&&_()}):_()}function $(){const{onClose:y}=e;y?Promise.resolve(y()).then(g=>{g!==!1&&_()}):_()}function b(y){const{onMaskClick:g,maskClosable:O}=e;g&&(g(y),O&&_())}function M(){const{onEsc:y}=e;y&&y()}function _(){t.value=!1}function D(y){t.value=y}return{show:t,hide:_,handleUpdateShow:D,handleAfterLeave:m,handleCloseClick:$,handleNegativeClick:v,handlePositiveClick:o,handleMaskClick:b,handleEsc:M}},render(){const{handleUpdateShow:e,handleAfterLeave:t,handleMaskClick:m,handleEsc:o,show:v}=this;return Pr(et,Object.assign({},this.$props,{show:v,onUpdateShow:e,onMaskClick:m,onEsc:o,onAfterLeave:t,internalAppear:!0,internalModal:!0}),this.$slots)}}),{defineComponent:Vr,h:Oe,Fragment:Hr,ref:Kr,provide:ae,reactive:Yr}=await E("vue"),Xr={to:[String,Object]},Qr=Vr({name:"ModalProvider",props:Xr,setup(){const e=Kr([]),t={};function m(b={}){const M=ot(),_=Yr(Object.assign(Object.assign({},b),{key:M,destroy:()=>{var D;(D=t[`n-modal-${M}`])===null||D===void 0||D.hide()}}));return e.value.push(_),_}function o(b){const{value:M}=e;M.splice(M.findIndex(_=>_.key===b),1)}function v(){Object.values(t).forEach(b=>{b?.hide()})}const $={create:m,destroyAll:v};return ae(ft,$),ae(gt,{clickedRef:nt(64),clickedPositionRef:it()}),ae(vt,e),Object.assign(Object.assign({},$),{modalList:e,modalInstRefs:t,handleAfterLeave:o})},render(){var e,t;return Oe(Hr,null,[this.modalList.map(m=>{var o;return Oe(Nr,rt(m,["destroy","render"],{to:(o=m.to)!==null&&o!==void 0?o:this.to,ref:v=>{v===null?delete this.modalInstRefs[`n-modal-${m.key}`]:this.modalInstRefs[`n-modal-${m.key}`]=v},internalKey:m.key,onInternalAfterLeave:this.handleAfterLeave}),{default:m.render})}),(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e)])}}),{defineComponent:Ye,ref:se,computed:le,watch:Me,provide:de,createElementBlock:Wr,openBlock:Fr,normalizeClass:qr,unref:q,createVNode:ce,withCtx:ue,renderSlot:Zr}=await E("vue"),Jr=["dir"],Gr=Ye({name:at.CONTENT_WRAP,inheritAttrs:!0}),ei=Ye({...Gr,props:{fullScreen:{type:Boolean,default:!1},locale:{type:String,default:"en-US"},notificationConfig:{type:Object,default:()=>({})},namespace:{type:String,default:"platform-ui__highrise"},dir:{type:String,default:"ltr"}},setup(e){const t=e,{languageLocale:m,dateLocale:o}=Ie(t.locale),v=se(m.value),$=se(o.value),b=se(t.dir),M=wt(Ct.version),_=le(()=>`${t.namespace} ${M} hr-detached-container`),D=le(()=>{var g;return`${((g=t.notificationConfig)==null?void 0:g.containerClass)??""} ${_.value}`}),y=le(()=>{var g;const O=((g=t.notificationConfig)==null?void 0:g.placement)??"top-right";return We(O,t.dir)});return Me(()=>t.locale,()=>{const{languageLocale:g,dateLocale:O}=Ie(t.locale);v.value=g.value,$.value=O.value}),Me(()=>t.dir,g=>{b.value=g}),de("mergedLanguageLocale",v),de("mergedDateLocale",$),de("mergedDir",b),(g,O)=>(Fr(),Wr("div",{class:qr(["hr-wrapper-container",{"full-screen":e.fullScreen,[e.namespace]:!0,[q(M)]:!0}]),dir:e.dir},[ce(q(Br),{class:"font-sans",tabindex:"0","theme-overrides":q(Mr),locale:v.value,"date-locale":$.value,rtl:e.dir==="rtl"?q(Or):[],"cls-prefix":"hr",namespace:_.value},{default:ue(()=>[ce(q(Le),{"container-class":D.value,"container-style":e.notificationConfig.containerStyle,to:e.notificationConfig.to,placement:y.value,max:e.notificationConfig.max,scrollable:e.notificationConfig.scrollable,"theme-overrides":{borderRadius:"12px",width:"100%"}},{default:ue(()=>[ce(q(Qr),null,{default:ue(()=>[Zr(g.$slots,"default")]),_:3})]),_:3},8,["container-class","container-style","to","placement","max","scrollable"])]),_:3},8,["theme-overrides","locale","date-locale","rtl","namespace"])],10,Jr))}}),{createElementVNode:ti,openBlock:ri,createElementBlock:ii}=await E("vue"),ni={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 26"};function oi(e,t){return ri(),ii("svg",ni,[...t[0]||(t[0]=[ti("image",{width:"28",height:"26",href:"data:img/png;base64,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"},null,-1)])])}const ai={render:oi},si="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADfSURBVHgBfVDLDYJAEJ0hi/G4JdiAESMFaAe24E1udqBWQDwR4oEStAMakEAw3imBo4kL4y6I4f8uO7Pz3sy8QeiBETozxjRbiMkuWu7Sek3rE+i65stny+BttGsdgRm7NhHMYAANgfm6HgHhACPAKljF7hYRbq16SghpScRUfPQNU4kyKcleT0OOBFwFRJQUKxmhx38mOQyA5KQsyzfqYqxUq9FlByDk2BYTyPNaScNDBfPprOVg//+R5+fHwjpVKYMRENAlqJELD4NkgiSY7zsn7giEmEaSflcm+xp9AWuXTLz9hImnAAAAAElFTkSuQmCC",{defineComponent:li}=await E("vue"),{unref:R,createVNode:J,createElementVNode:a,toDisplayString:j,renderList:he,Fragment:ie,openBlock:H,createElementBlock:K,createCommentVNode:di,normalizeClass:me,createTextVNode:ci,withCtx:ui,renderSlot:hi}=await E("vue"),mi=["aria-label"],pi=["aria-label"],gi={class:"ghl-shell__sidebar-inner lead-connector"},fi={class:"ghl-shell__agency-logo-container agency-logo-container"},vi=["aria-label"],bi={class:"hl_location-text"},Ci={class:"hl_text-overflow hl_switcher-loc-name"},Ai={class:"switcher-caret-holder","aria-hidden":"true"},yi={class:"ghl-shell__quick-actions"},wi=["aria-label"],_i={class:"search-placeholder"},xi={class:"search-shortcut"},$i=["aria-label"],Ri=["src","alt"],ki=["aria-label"],Ii={key:0,class:"ghl-shell__nav-divider","aria-hidden":"true"},Si=["id"],Oi=["src","alt"],Mi={class:"nav-title hl_text-overflow"},Ui={key:0,class:"ghl-shell__nav-badge"},Di=["aria-label"],Ei=["id"],Ti=["src","alt"],Li={class:"nav-title hl_text-overflow"},Bi={class:"ghl-shell__main"},zi={class:"hl_header ghl-shell__header"},Pi={class:"container-fluid ghl-shell__header-row"},ji=["aria-label"],Ni=["onClick"],Vi={class:"hl_header--controls ghl-shell__header-controls"},Hi=["aria-label"],Ki=["aria-label"],Yi=["aria-label"],Xi=["aria-label"],Qi=["aria-label"],Wi={class:"ghl-shell__content hl_wrapper hl_topbar-tabs"},{computed:pe,ref:Fi}=await E("vue"),{useI18n:qi}=await E("vue-i18n"),{useRoute:Zi,useRouter:Ji}=await E("vue-router"),Gi=li({__name:"GhlShell",setup(e){const{t}=qi(),m=st(),o=Zi(),v=Ji(),$=Fi(!1),b=[{kind:"item",labelKey:"meetings.shell.sidebar.launchpad",iconUrl:"https://cdn.msgsndr.com/sidebar-v2/icon_launchpad.svg"},{kind:"item",labelKey:"meetings.shell.sidebar.dashboard",iconUrl:"https://cdn.msgsndr.com/sidebar-v2/icon_dashboard.svg"},{kind:"item",labelKey:"meetings.shell.sidebar.conversations",iconUrl:"https://cdn.msgsndr.com/sidebar-v2/icon_conversations.svg"},{kind:"item",labelKey:"meetings.shell.sidebar.calendars",iconUrl:"https://cdn.msgsndr.com/sidebar-v2/icon_calendar.svg"},{kind:"item",labelKey:"meetings.shell.sidebar.contacts",iconUrl:"https://cdn.msgsndr.com/sidebar-v2/icon_contacts.svg"},{kind:"item",labelKey:"meetings.shell.sidebar.opportunities",iconUrl:"https://cdn.msgsndr.com/sidebar-v2/icon_opportunities.svg"},{kind:"item",labelKey:"meetings.shell.sidebar.payments",iconUrl:"https://cdn.msgsndr.com/sidebar-v2/icon_payments.svg"},{kind:"divider",id:"growth"},{kind:"item",labelKey:"meetings.shell.sidebar.marketing",iconUrl:"https://cdn.msgsndr.com/sidebar-v2/icon_emailmarketing.svg"},{kind:"item",labelKey:"meetings.shell.sidebar.automation",iconUrl:"https://cdn.msgsndr.com/sidebar-v2/icon_automation.svg"},{kind:"item",labelKey:"meetings.shell.sidebar.sites",iconUrl:"https://cdn.msgsndr.com/sidebar-v2/icon_sites.svg"},{kind:"item",labelKey:"meetings.shell.sidebar.memberships",iconUrl:"https://cdn.msgsndr.com/sidebar-v2/memberships.svg",active:!0},{kind:"item",labelKey:"meetings.shell.sidebar.mediaStorage",iconUrl:"https://cdn.msgsndr.com/sidebar-v2/media-storage.svg"},{kind:"item",labelKey:"meetings.shell.sidebar.reputation",iconUrl:"https://cdn.msgsndr.com/sidebar-v2/icon_reputation.svg"},{kind:"item",labelKey:"meetings.shell.sidebar.reporting",iconUrl:"https://cdn.msgsndr.com/sidebar-v2/icon_reporting.svg"},{kind:"item",labelKey:"meetings.shell.sidebar.appMarketplace",iconUrl:"https://cdn.msgsndr.com/sidebar-v2/grid-01.svg"},{kind:"item",labelKey:"meetings.shell.sidebar.mobileApp",iconUrl:"https://cdn.msgsndr.com/sidebar-v2/phone.svg"}],M=[{kind:"item",labelKey:"meetings.shell.sidebar.settings",iconUrl:"https://cdn.msgsndr.com/sidebar-v2/icon_settings.svg"}],_=[{labelKey:"meetings.shell.productNav.brandedApp"},{labelKey:"meetings.shell.productNav.clientPortal"},{labelKey:"meetings.shell.productNav.courses"},{labelKey:"meetings.shell.productNav.communities"},{labelKey:"meetings.shell.productNav.meetings",active:!0,routeName:"meetings_personal_room"},{labelKey:"meetings.shell.productNav.credentials"}],D=pe(()=>m.currentUser.name.split(/\s+/).slice(0,2).map(w=>w[0]??"").join("").toUpperCase()),y=pe(()=>typeof window>"u"?"Ctrl":window.navigator.platform.includes("Mac")?"⌘":"Ctrl"),g=pe(()=>t($.value?"meetings.shell.sidebar.expand":"meetings.shell.sidebar.collapse"));function O(w){return t(w.labelKey)}function Y(w){return t("meetings.shell.sidebar.iconAlt",{label:O(w)})}function X(w){return`sb-${w.labelKey.split(".").at(-1)??"item"}`}function d(){const w=o.params.locationId;return Array.isArray(w)?w[0]??Re:w||Re}function U(w){w.routeName&&v.push({name:w.routeName,params:{locationId:d()}})}return(w,I)=>(H(),K("div",{class:me(["ghl-shell sidebar-v2-location",{"ghl-shell--collapsed":$.value}])},[a("aside",{id:"sidebar-v2",class:"ghl-shell__sidebar default-bg-color","aria-label":R(t)("meetings.shell.sidebar.aria")},[a("button",{type:"button",class:"ghl-shell__collapse-button","aria-label":g.value,onClick:I[0]||(I[0]=r=>$.value=!$.value)},[J(R(lt),{class:"ghl-shell__collapse-icon","aria-hidden":"true"})],8,pi),a("div",gi,[a("div",fi,[J(R(ai),{class:"ghl-shell__agency-logo agency-logo","aria-hidden":"true"})]),a("button",{id:"location-switcher-sidbar-v2",type:"button",class:"ghl-shell__location-switcher","aria-label":R(t)("meetings.shell.location.switchAria")},[a("span",bi,[a("span",Ci,j(R(t)("meetings.shell.location.name")),1)]),a("span",Ai,[J(R(dt),{class:"ghl-shell__caret ghl-shell__caret--right"})])],8,vi),a("div",yi,[a("button",{id:"globalSearchOpener",type:"button",class:"ghl-shell__search-opener","aria-label":R(t)("meetings.shell.search.aria")},[J(R(ct),{class:"search-icon"}),a("span",_i,j(R(t)("meetings.shell.search.placeholder")),1),a("span",xi,j(y.value)+"K",1)],8,wi),a("button",{id:"quickActions",type:"button",class:"ghl-shell__quick-action-button","aria-label":R(t)("meetings.shell.quickActions.aria")},[a("img",{src:R(si),alt:R(t)("meetings.shell.quickActions.iconAlt")},null,8,Ri)],8,$i)]),a("nav",{class:"ghl-shell__nav hl_nav-header","aria-label":R(t)("meetings.shell.sidebar.mainNav")},[(H(),K(ie,null,he(b,r=>(H(),K(ie,{key:r.kind==="divider"?r.id:r.labelKey},[r.kind==="divider"?(H(),K("div",Ii)):(H(),K("button",{key:1,id:X(r),type:"button",class:me(["ghl-shell__nav-item",{active:r.active}])},[a("img",{class:"ghl-shell__nav-icon",src:r.iconUrl,alt:Y(r)},null,8,Oi),a("span",Mi,j(O(r)),1),r.badge?(H(),K("span",Ui,j(r.badge),1)):di("",!0)],10,Si))],64))),64))],8,ki),a("nav",{class:"ghl-shell__nav hl_nav-settings","aria-label":R(t)("meetings.shell.sidebar.footerNav")},[I[1]||(I[1]=a("div",{class:"ghl-shell__nav-divider","aria-hidden":"true"},null,-1)),(H(),K(ie,null,he(M,r=>a("button",{id:X(r),key:r.labelKey,type:"button",class:"ghl-shell__nav-item"},[a("img",{class:"ghl-shell__nav-icon",src:r.iconUrl,alt:Y(r)},null,8,Ti),a("span",Li,j(O(r)),1)],8,Ei)),64))],8,Di)])],8,mi),a("div",Bi,[a("header",zi,[a("div",Pi,[a("nav",{class:"topmenu-nav ghl-shell__topmenu","aria-label":R(t)("meetings.shell.productNav.aria")},[J(R(ut),{"html-tag":"h1",size:"3xl",weight:"semibold",class:"topmenu-navtitle"},{default:ui(()=>[ci(j(R(t)("meetings.shell.productNav.title")),1)]),_:1}),(H(),K(ie,null,he(_,r=>a("button",{key:r.labelKey,type:"button",class:me(["topmenu-navitem ghl-shell__topmenu-item",{active:r.active}]),onClick:s=>U(r)},[a("span",null,j(R(t)(r.labelKey)),1)],10,Ni)),64))],8,ji),a("div",Vi,[a("button",{type:"button",class:"ghl-shell__header-action ghl-shell__header-action--phone","aria-label":R(t)("meetings.shell.topBar.phone")},[...I[2]||(I[2]=[a("svg",{class:"ghl-shell__figma-action-icon",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false"},[a("rect",{width:"20",height:"20",rx:"10",fill:"#34D399"}),a("g",{"clip-path":"url(#ghl-shell-phone-clip)"},[a("path",{d:"M6.56256 5.31262L5.93756 5.93762L5.31256 7.18762L5.62506 9.06262L7.50006 12.1876L10.0001 14.0626L12.1876 14.6876H13.4376L14.6876 13.4376V12.8126L13.4376 11.5626L12.8126 11.2501L11.8751 11.8751L11.2501 12.1876L7.81256 8.75012L8.75006 7.18762L7.81256 5.62512L6.56256 5.31262Z",fill:"white"}),a("path",{d:"M12.8468 10.9229C12.99 10.9229 13.1267 10.9489 13.257 11.001C13.3872 11.0531 13.5044 11.1312 13.6085 11.2354L14.6827 12.3096C14.7837 12.4105 14.8601 12.526 14.9122 12.6563C14.9643 12.7865 14.992 12.9248 14.9952 13.0713C14.9952 13.2145 14.9692 13.3512 14.9171 13.4814C14.865 13.6117 14.7869 13.7288 14.6827 13.833L14.6144 13.9014C14.4386 14.0771 14.2775 14.2334 14.131 14.3701C13.9845 14.5068 13.8315 14.6208 13.672 14.7119C13.5125 14.8031 13.3351 14.8747 13.1398 14.9268C12.9445 14.9788 12.7117 15.0033 12.4415 15C12.0346 15 11.6163 14.9365 11.1866 14.8096C10.757 14.6826 10.3305 14.5068 9.90735 14.2822C9.48417 14.0576 9.0675 13.7907 8.65735 13.4814C8.24719 13.1722 7.86145 12.8353 7.50012 12.4707C7.13879 12.1061 6.80351 11.7188 6.49426 11.3086C6.18502 10.8984 5.92135 10.4818 5.70325 10.0586C5.48515 9.63542 5.31262 9.21061 5.18567 8.78418C5.05872 8.35775 4.99687 7.94759 5.00012 7.55371C5.00012 7.28353 5.02291 7.05241 5.06848 6.86035C5.11405 6.66829 5.18404 6.49251 5.27844 6.33301C5.37284 6.1735 5.48678 6.02214 5.62024 5.87891C5.7537 5.73568 5.90995 5.57454 6.08899 5.39551L6.16711 5.31738C6.26803 5.21647 6.38359 5.13835 6.51379 5.08301C6.644 5.02767 6.78235 5 6.92883 5C7.07206 5 7.20878 5.02767 7.33899 5.08301C7.4692 5.13835 7.58639 5.21647 7.69055 5.31738L8.76477 6.3916C8.86568 6.49251 8.94218 6.60807 8.99426 6.73828C9.04635 6.86849 9.07402 7.00684 9.07727 7.15332C9.07727 7.29655 9.05286 7.4235 9.00403 7.53418C8.9552 7.64486 8.89498 7.7474 8.82336 7.8418C8.75175 7.9362 8.67362 8.01921 8.58899 8.09082C8.50435 8.16244 8.4246 8.23568 8.34973 8.31055C8.27486 8.38542 8.21464 8.45703 8.16907 8.52539C8.12349 8.59375 8.09908 8.6735 8.09583 8.76465C8.09583 8.88835 8.13977 8.99414 8.22766 9.08203L10.9181 11.7725C11.006 11.8604 11.1118 11.9043 11.2355 11.9043C11.3201 11.9043 11.3982 11.8799 11.4698 11.8311C11.5415 11.7822 11.6147 11.722 11.6896 11.6504C11.7644 11.5788 11.8377 11.5007 11.9093 11.416C11.9809 11.3314 12.0639 11.2516 12.1583 11.1768C12.2527 11.1019 12.3536 11.0417 12.4611 10.9961C12.5685 10.9505 12.6971 10.9261 12.8468 10.9229ZM12.4415 14.375C12.6759 14.375 12.8712 14.3538 13.0275 14.3115C13.1837 14.2692 13.3269 14.2057 13.4572 14.1211C13.5874 14.0365 13.7111 13.9323 13.8282 13.8086C13.9454 13.6849 14.0838 13.5449 14.2433 13.3887C14.3312 13.3008 14.3751 13.195 14.3751 13.0713C14.3751 13.0127 14.3523 12.9443 14.3068 12.8662C14.2612 12.7881 14.1993 12.7035 14.1212 12.6123C14.0431 12.5212 13.9601 12.4316 13.8722 12.3438C13.7843 12.2559 13.6932 12.168 13.5988 12.0801C13.5044 11.9922 13.4213 11.9157 13.3497 11.8506C13.2781 11.7855 13.2179 11.7285 13.1691 11.6797C13.0812 11.5918 12.9738 11.5479 12.8468 11.5479C12.7622 11.5479 12.684 11.5723 12.6124 11.6211C12.5408 11.6699 12.4692 11.7301 12.3976 11.8018C12.326 11.8734 12.2527 11.9515 12.1779 12.0361C12.103 12.1208 12.0184 12.2005 11.924 12.2754C11.8295 12.3503 11.7286 12.4105 11.6212 12.4561C11.5138 12.5016 11.3852 12.526 11.2355 12.5293C11.0922 12.5293 10.9555 12.5033 10.8253 12.4512C10.6951 12.3991 10.5779 12.321 10.4738 12.2168L7.78333 9.52637C7.68241 9.42546 7.60592 9.3099 7.55383 9.17969C7.50175 9.04948 7.47408 8.91113 7.47083 8.76465C7.47083 8.62142 7.49524 8.49447 7.54407 8.38379C7.5929 8.27311 7.65312 8.17057 7.72473 8.07617C7.79635 7.98177 7.87447 7.89876 7.95911 7.82715C8.04374 7.75553 8.12349 7.68066 8.19836 7.60254C8.27323 7.52441 8.33346 7.4528 8.37903 7.3877C8.4246 7.32259 8.44902 7.24447 8.45227 7.15332C8.45227 7.02637 8.40833 6.91895 8.32043 6.83105C8.27812 6.78874 8.22278 6.73014 8.15442 6.65527C8.08606 6.5804 8.00956 6.4974 7.92493 6.40625C7.84029 6.3151 7.7524 6.22396 7.66125 6.13281C7.57011 6.04167 7.47896 5.95703 7.38782 5.87891C7.29667 5.80078 7.21366 5.74056 7.13879 5.69824C7.06392 5.65592 6.99394 5.63151 6.92883 5.625C6.80514 5.625 6.69934 5.66895 6.61145 5.75684L6.19641 6.17188C6.07597 6.29232 5.9718 6.41602 5.88391 6.54297C5.79602 6.66992 5.73092 6.81152 5.6886 6.96777C5.64628 7.12402 5.62349 7.31934 5.62024 7.55371C5.62024 7.91829 5.67883 8.29427 5.79602 8.68164C5.91321 9.06901 6.0776 9.45638 6.28918 9.84375C6.50077 10.2311 6.7498 10.612 7.03625 10.9863C7.32271 11.3607 7.63521 11.7171 7.97375 12.0557C8.3123 12.3942 8.66874 12.7035 9.04309 12.9834C9.41744 13.2633 9.7983 13.5075 10.1857 13.7158C10.573 13.9242 10.9572 14.0853 11.338 14.1992C11.7189 14.3132 12.0867 14.3717 12.4415 14.375Z",fill:"white"})]),a("defs",null,[a("clipPath",{id:"ghl-shell-phone-clip"},[a("rect",{width:"10",height:"10",fill:"white",transform:"translate(5 5)"})])])],-1)])],8,Hi),a("button",{type:"button",class:"ghl-shell__header-action ghl-shell__header-action--announcement","aria-label":R(t)("meetings.shell.topBar.announcements")},[...I[3]||(I[3]=[a("svg",{class:"ghl-shell__figma-action-icon",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false"},[a("g",{"clip-path":"url(#ghl-shell-announcement-clip)"},[a("mask",{id:"ghl-shell-announcement-mask",style:{"mask-type":"alpha"},maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"20",height:"20"},[a("rect",{width:"20",height:"20",fill:"#D9D9D9"})]),a("g",{mask:"url(#ghl-shell-announcement-mask)"},[a("path",{d:"M17.5 10.8333H15.8334C15.5972 10.8333 15.3993 10.7535 15.2396 10.5938C15.0799 10.434 15 10.2361 15 10C15 9.7639 15.0799 9.56598 15.2396 9.40626C15.3993 9.24653 15.5972 9.16667 15.8334 9.16667H17.5C17.7361 9.16667 17.934 9.24653 18.0938 9.40626C18.2535 9.56598 18.3334 9.7639 18.3334 10C18.3334 10.2361 18.2535 10.434 18.0938 10.5938C17.934 10.7535 17.7361 10.8333 17.5 10.8333ZM13.8334 14C13.9722 13.8056 14.1528 13.6945 14.375 13.6667C14.5972 13.6389 14.8056 13.6945 15 13.8333L16.3334 14.8333C16.5278 14.9722 16.6389 15.1528 16.6667 15.375C16.6945 15.5972 16.6389 15.8056 16.5 16C16.3611 16.1945 16.1806 16.3056 15.9584 16.3333C15.7361 16.3611 15.5278 16.3056 15.3334 16.1667L14 15.1667C13.8056 15.0278 13.6945 14.8472 13.6667 14.625C13.6389 14.4028 13.6945 14.1945 13.8334 14ZM16.3334 5.16667L15 6.16667C14.8056 6.30556 14.5972 6.36112 14.375 6.33334C14.1528 6.30556 13.9722 6.19445 13.8334 6.00001C13.6945 5.80556 13.6389 5.59723 13.6667 5.37501C13.6945 5.15278 13.8056 4.97223 14 4.83334L15.3334 3.83334C15.5278 3.69445 15.7361 3.6389 15.9584 3.66667C16.1806 3.69445 16.3611 3.80556 16.5 4.00001C16.6389 4.19445 16.6945 4.40278 16.6667 4.62501C16.6389 4.84723 16.5278 5.02778 16.3334 5.16667ZM4.16669 12.5H3.33335C2.87502 12.5 2.48266 12.3368 2.15627 12.0104C1.82988 11.684 1.66669 11.2917 1.66669 10.8333V9.16667C1.66669 8.70834 1.82988 8.31598 2.15627 7.98959C2.48266 7.6632 2.87502 7.50001 3.33335 7.50001H6.66669L9.56252 5.75001C9.8403 5.58334 10.1215 5.58334 10.4063 5.75001C10.691 5.91667 10.8334 6.15973 10.8334 6.47917V13.5208C10.8334 13.8403 10.691 14.0833 10.4063 14.25C10.1215 14.4167 9.8403 14.4167 9.56252 14.25L6.66669 12.5H5.83335V15C5.83335 15.2361 5.75349 15.434 5.59377 15.5938C5.43405 15.7535 5.23613 15.8333 5.00002 15.8333C4.76391 15.8333 4.56599 15.7535 4.40627 15.5938C4.24655 15.434 4.16669 15.2361 4.16669 15V12.5ZM11.6667 12.7917V7.20834C12.0417 7.54167 12.3438 7.94792 12.5729 8.42709C12.8021 8.90626 12.9167 9.43056 12.9167 10C12.9167 10.5695 12.8021 11.0938 12.5729 11.5729C12.3438 12.0521 12.0417 12.4583 11.6667 12.7917Z",fill:"#475467"})])]),a("defs",null,[a("clipPath",{id:"ghl-shell-announcement-clip"},[a("rect",{width:"20",height:"20",fill:"white"})])])],-1)])],8,Ki),a("button",{type:"button",class:"ghl-shell__header-action ghl-shell__header-action--help","aria-label":R(t)("meetings.shell.topBar.help")},[...I[4]||(I[4]=[a("svg",{class:"ghl-shell__figma-action-icon",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false"},[a("g",{"clip-path":"url(#ghl-shell-help-clip)"},[a("mask",{id:"ghl-shell-help-mask",style:{"mask-type":"alpha"},maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"20",height:"20"},[a("rect",{width:"20",height:"20",fill:"#D9D9D9"})]),a("g",{mask:"url(#ghl-shell-help-mask)"},[a("path",{d:"M12.1667 6.72917C12.1667 6.13194 11.9688 5.65278 11.5729 5.29167C11.1771 4.93056 10.6528 4.75 10 4.75C9.59725 4.75 9.23267 4.83681 8.90628 5.01042C8.57989 5.18403 8.29864 5.4375 8.06253 5.77083C7.8403 6.09028 7.53822 6.27431 7.15628 6.32292C6.77433 6.37153 6.44447 6.27083 6.16669 6.02083C5.97225 5.84028 5.86461 5.61806 5.84378 5.35417C5.82294 5.09028 5.88892 4.84028 6.04169 4.60417C6.48614 3.9375 7.05211 3.42014 7.73961 3.05208C8.42711 2.68403 9.18058 2.5 10 2.5C11.3472 2.5 12.441 2.88194 13.2813 3.64583C14.1216 4.40972 14.5417 5.40972 14.5417 6.64583C14.5417 7.27083 14.4097 7.83333 14.1459 8.33333C13.882 8.83333 13.3959 9.42361 12.6875 10.1042C12.1736 10.5903 11.8264 10.9688 11.6459 11.2396C11.4653 11.5104 11.3472 11.8194 11.2917 12.1667C11.2361 12.5 11.0938 12.7778 10.8646 13C10.6354 13.2222 10.3611 13.3333 10.0417 13.3333C9.72225 13.3333 9.44794 13.2257 9.21878 13.0104C8.98961 12.7951 8.87503 12.5278 8.87503 12.2083C8.87503 11.6667 8.99308 11.1701 9.22919 10.7188C9.4653 10.2674 9.86114 9.79167 10.4167 9.29167C11.125 8.66667 11.5938 8.18403 11.8229 7.84375C12.0521 7.50347 12.1667 7.13194 12.1667 6.72917ZM10 18.3333C9.54169 18.3333 9.14933 18.1701 8.82294 17.8438C8.49655 17.5174 8.33336 17.125 8.33336 16.6667C8.33336 16.2083 8.49655 15.816 8.82294 15.4896C9.14933 15.1632 9.54169 15 10 15C10.4584 15 10.8507 15.1632 11.1771 15.4896C11.5035 15.816 11.6667 16.2083 11.6667 16.6667C11.6667 17.125 11.5035 17.5174 11.1771 17.8438C10.8507 18.1701 10.4584 18.3333 10 18.3333Z",fill:"#475467"})])]),a("defs",null,[a("clipPath",{id:"ghl-shell-help-clip"},[a("rect",{width:"20",height:"20",fill:"white"})])])],-1)])],8,Yi),a("button",{type:"button",class:"ghl-shell__header-action ghl-shell__header-action--notification","aria-label":R(t)("meetings.shell.topBar.notifications")},[...I[5]||(I[5]=[a("svg",{class:"ghl-shell__figma-notification-icon",width:"22",height:"22",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false"},[a("path",{d:"M10.1931 21.9999C11.5994 21.9999 12.7401 20.8592 12.7401 19.4517H7.646C7.646 20.8592 8.78674 21.9999 10.1931 21.9999ZM18.7691 16.039C17.9999 15.2124 16.5605 13.9689 16.5605 9.89571C16.5605 6.80197 14.3913 4.32538 11.4664 3.71778V2.888C11.4664 2.18445 10.8962 1.61388 10.1931 1.61388C9.4899 1.61388 8.91973 2.18445 8.91973 2.888V3.71778C5.9948 4.32538 3.8256 6.80197 3.8256 9.89571C3.8256 13.9689 2.38623 15.2124 1.61698 16.039C1.37808 16.2958 1.27217 16.6028 1.27416 16.9034C1.27854 17.5564 1.79097 18.1776 2.55227 18.1776H17.8338C18.5951 18.1776 19.108 17.5564 19.112 16.9034C19.114 16.6028 19.008 16.2954 18.7691 16.039Z",fill:"#4A5568"}),a("circle",{cx:"16.5637",cy:"5.43628",r:"4.39768",fill:"#F56565",stroke:"white","stroke-width":"2"})],-1)])],8,Xi),a("button",{type:"button",class:"hl_header--avatar ghl-shell__avatar","aria-label":R(t)("meetings.shell.topBar.profile")},j(D.value),9,Qi)])])]),a("main",Wi,[hi(w.$slots,"default",{},void 0,!0)])])],2))}}),en=ht(Gi,[["__scopeId","data-v-da82098f"]]);class L extends Error{code;constructor(t,m){super(m),this.name="MeetingsApiError",this.code=t}}const B=1024*1024,S="America/New_York",x="https://membership.clientclub.net/beam",Z={u2:"Engineering standup hub",u4:"Customer success lounge",u9:"Admin enablement studio"};function h(e,t,m,o=0){const v=new Date(e);return v.setDate(v.getDate()+t),v.setHours(m,o,0,0),v.toISOString()}function N(e,t){return new Date(e.getTime()-t*6e4).toISOString()}function C(e,t){return t?{sourceProduct:e,sourceObjectId:t}:{sourceProduct:e}}function z(e,t={}){return{linkAccess:"anyone",expiresAt:null,viewersCanDownload:!0,viewersCanSeeTranscript:!0,viewersCanSeeChat:!1,viewersMustRegister:!1,inviteesSkipPasscode:!0,peopleWithAccess:[{userId:e,role:"owner"}],...t}}function V(e){return`https://i.pravatar.cc/120?img=${e}`}const Xe={u3:"client meeting space",u4:"customer room",u6:"review room"};function tn(e){return e in Xe}function rn(e,t="personal room"){return`${e}'s ${t}`}function G(e,t){const m=e.find(v=>v.id===t),o=tn(t)?Xe[t]:"personal room";return rn(m?.name??"Member",o)}function nn(e){return[{id:"u1",name:"Pritesh Chaudhari",email:"pritesh@northwindlabs.com",initials:"PC",role:"admin",presence:"active",lastActiveAt:N(e,0),hasRoom:!0,canCreateRoom:!0,avatarColor:"#1044c8",avatarUrl:V(12)},{id:"u2",name:"Charles Hamilton",email:"charles@northwindlabs.com",initials:"CH",role:"member",presence:"in-meeting",lastActiveAt:N(e,0),hasRoom:!0,canCreateRoom:!0,avatarColor:"#039855",avatarUrl:V(13)},{id:"u3",name:"Aiman Kounsa",email:"aiman@northwindlabs.com",initials:"AK",role:"member",presence:"active",lastActiveAt:N(e,5),hasRoom:!0,canCreateRoom:!0,avatarColor:"#dc6803",avatarUrl:V(45)},{id:"u4",name:"Kaushal Puri",email:"kaushal@northwindlabs.com",initials:"KP",role:"member",presence:"idle",lastActiveAt:N(e,60),hasRoom:!0,canCreateRoom:!0,avatarColor:"#155eef",avatarUrl:V(33)},{id:"u5",name:"Susmitha Reddy",email:"susmitha@northwindlabs.com",initials:"SR",role:"member",presence:"active",lastActiveAt:N(e,12),hasRoom:!1,canCreateRoom:!0,avatarColor:"#d92d20",avatarUrl:V(47)},{id:"u6",name:"John Doe",email:"john@northwindlabs.com",initials:"JD",role:"member",presence:"offline",lastActiveAt:N(e,1440),hasRoom:!0,canCreateRoom:!1,avatarColor:"#475467",avatarUrl:V(15)},{id:"u7",name:"Vijay Christopher Ramanathan Subramanian",email:"vijay.christopher.ramanathan.subramanian@northwindlabs.com",initials:"VS",role:"member",presence:"offline",lastActiveAt:N(e,120),hasRoom:!1,canCreateRoom:!0,avatarColor:"#0c8ce9",avatarUrl:V(51)},{id:"u8",name:"Maya Desai",email:"maya@northwindlabs.com",initials:"MD",role:"admin",presence:"active",lastActiveAt:N(e,18),hasRoom:!1,canCreateRoom:!0,avatarColor:"#7f56d9",avatarUrl:V(30)},{id:"u9",name:"Olivia Harper",email:"olivia@northwindlabs.com",initials:"OH",role:"admin",presence:"active",lastActiveAt:N(e,8),hasRoom:!1,hasMeetingActivity:!0,canCreateRoom:!0,avatarColor:"#175cd3",avatarUrl:V(24)}]}function on(e){return[{id:"pr-u1",ownerId:"u1",topic:G(e,"u1"),slug:"pritesh-chaudhari",inviteUrl:`${x}/pritesh-chaudhari`,passcodeEnabled:!0,passcode:"ZHX57M",waitingRoomEnabled:!0,requireAuth:!1,hostVideoOn:!0,participantVideoOn:!1,members:[{userId:"u1",role:"owner"},{userId:"u3",role:"co-host"},{userId:"u4",role:"alternative-host"}],liveNow:!1},{id:"pr-u2",ownerId:"u2",topic:G(e,"u2"),slug:"charles-hamilton",inviteUrl:`${x}/charles-hamilton`,passcodeEnabled:!0,passcode:"QK82MN",waitingRoomEnabled:!1,requireAuth:!0,hostVideoOn:!0,participantVideoOn:!0,members:[{userId:"u2",role:"owner"}],liveNow:!0},{id:"pr-u3",ownerId:"u3",topic:G(e,"u3"),slug:"aiman-kounsa",inviteUrl:`${x}/aiman-kounsa`,passcodeEnabled:!1,waitingRoomEnabled:!0,requireAuth:!1,hostVideoOn:!1,participantVideoOn:!1,members:[{userId:"u3",role:"owner"}],liveNow:!1},{id:"pr-u4",ownerId:"u4",topic:G(e,"u4"),slug:"kaushal-puri",inviteUrl:`${x}/kaushal-puri`,passcodeEnabled:!1,waitingRoomEnabled:!1,requireAuth:!1,hostVideoOn:!0,participantVideoOn:!0,members:[{userId:"u4",role:"owner"},{userId:"u1",role:"co-host"}],liveNow:!1},{id:"pr-u6",ownerId:"u6",topic:G(e,"u6"),slug:"john-doe",inviteUrl:`${x}/john-doe`,passcodeEnabled:!0,passcode:"TR41XB",waitingRoomEnabled:!0,requireAuth:!0,hostVideoOn:!1,participantVideoOn:!1,members:[{userId:"u6",role:"owner"}],liveNow:!1}]}function an(e){return[{id:"m1",topic:"Membership engineering weekly review",userId:"u1",hostId:"u1",startsAt:h(e,0,17),endsAt:h(e,0,17,30),timezone:S,recurring:!0,attendeeCount:1400,sourceContext:C("meetings_direct"),inviteUrl:`${x}/pritesh-chaudhari`},{id:"m2",topic:Z.u4,userId:"u4",hostId:"u2",startsAt:h(e,0,20,30),endsAt:h(e,0,21,30),timezone:S,recurring:!1,attendeeCount:4,sourceContext:C("meetings_direct"),inviteUrl:`${x}/kaushal-puri`},{id:"m3",topic:"1:1 - Aiman / Pritesh",userId:"u1",hostId:"u1",startsAt:h(e,1,11),endsAt:h(e,1,11,30),timezone:S,recurring:!0,attendeeCount:2,sourceContext:C("calendar","cal_evt_3301"),inviteUrl:`${x}/pritesh-chaudhari`},{id:"m4",topic:"Courses, snapshots & certificates - support sync",userId:"u4",hostId:"u1",startsAt:h(e,2,17,30),endsAt:h(e,2,18,30),timezone:S,recurring:!0,attendeeCount:8,sourceContext:C("courses","course_204"),inviteUrl:`${x}/kaushal-puri`},{id:"m5",topic:"Q2 roadmap review",userId:"u1",hostId:"u1",startsAt:h(e,3,14),endsAt:h(e,3,15),timezone:S,recurring:!1,attendeeCount:14,sourceContext:C("calendar","cal_evt_3402"),inviteUrl:`${x}/pritesh-chaudhari`},{id:"m6",topic:"Membership onboarding office hours",userId:"u1",hostId:"u1",startsAt:h(e,4,10),endsAt:h(e,4,10,45),timezone:S,recurring:!1,attendeeCount:18,sourceContext:C("meetings_direct"),inviteUrl:`${x}/pritesh-chaudhari`},{id:"m7",topic:"Growth metrics review",userId:"u1",hostId:"u1",startsAt:h(e,5,16),endsAt:h(e,5,16,45),timezone:S,recurring:!1,attendeeCount:7,sourceContext:C("calendar","cal_evt_3418"),inviteUrl:`${x}/pritesh-chaudhari`},{id:"m8",topic:Z.u9,userId:"u9",hostId:"u9",startsAt:h(e,1,15),endsAt:h(e,1,15,45),timezone:S,recurring:!1,attendeeCount:2e3,sourceContext:C("meetings_direct"),inviteUrl:`${x}/olivia-harper`},{id:"m9",topic:"Partner office hours",userId:"u9",hostId:"u9",startsAt:h(e,3,11),endsAt:h(e,3,11,45),timezone:S,recurring:!1,attendeeCount:10,sourceContext:C("calendar","cal_evt_3509"),inviteUrl:`${x}/olivia-harper`}]}function sn(e){return[{id:"p1",topic:Z.u4,userId:"u4",hostId:"u2",startsAt:h(e,-1,20,30),endsAt:h(e,-1,21,30),timezone:S,recurring:!1,durationMinutes:58,participantCount:4,hasRecording:!0,sourceContext:C("meetings_direct"),inviteUrl:`${x}/kaushal-puri`},{id:"p2",topic:"Sprint planning - iteration 14",userId:"u1",hostId:"u1",startsAt:h(e,-2,10),endsAt:h(e,-2,11),timezone:S,recurring:!1,durationMinutes:62,participantCount:1400,hasRecording:!0,sourceContext:C("calendar","cal_evt_3120"),inviteUrl:`${x}/pritesh-chaudhari`},{id:"p3",topic:"Customer onboarding - Acme Co",userId:"u4",hostId:"u1",startsAt:h(e,-3,15),endsAt:h(e,-3,15,30),timezone:S,recurring:!1,durationMinutes:27,participantCount:3,hasRecording:!1,sourceContext:C("meetings_direct"),inviteUrl:`${x}/kaushal-puri`},{id:"p4",topic:Z.u2,userId:"u2",hostId:"u2",startsAt:h(e,-4,20,30),endsAt:h(e,-4,21),timezone:S,recurring:!1,durationMinutes:31,participantCount:2,hasRecording:!0,sourceContext:C("meetings_direct"),inviteUrl:`${x}/charles-hamilton`},{id:"p5",topic:"Course cohort kickoff - batch 12",userId:"u4",hostId:"u4",startsAt:h(e,-5,17),endsAt:h(e,-5,18),timezone:S,recurring:!1,durationMinutes:55,participantCount:21,hasRecording:!0,sourceContext:C("courses","course_204"),inviteUrl:`${x}/kaushal-puri`},{id:"p6",topic:"Q1 retro",userId:"u1",hostId:"u1",startsAt:h(e,-6,13),endsAt:h(e,-6,14,30),timezone:S,recurring:!1,durationMinutes:92,participantCount:18,hasRecording:!0,sourceContext:C("calendar","cal_evt_2901"),inviteUrl:`${x}/pritesh-chaudhari`},{id:"p7",topic:"Community AMA - June",userId:"u3",hostId:"u3",startsAt:h(e,-7,19),endsAt:h(e,-7,20),timezone:S,recurring:!1,durationMinutes:61,participantCount:33,hasRecording:!0,sourceContext:C("communities","comm_88"),inviteUrl:`${x}/aiman-kounsa`},{id:"p8",topic:"Spring product webinar",userId:"u1",hostId:"u1",startsAt:h(e,-8,18),endsAt:h(e,-8,19),timezone:S,recurring:!1,durationMinutes:64,participantCount:2e3,hasRecording:!0,sourceContext:C("webinar","web_902"),inviteUrl:`${x}/pritesh-chaudhari`},{id:"p9",topic:"Admin launch retrospective",userId:"u9",hostId:"u9",startsAt:h(e,-1,14),endsAt:h(e,-1,14,45),timezone:S,recurring:!1,durationMinutes:46,participantCount:7,hasRecording:!0,sourceContext:C("meetings_direct"),inviteUrl:`${x}/olivia-harper`},{id:"p10",topic:"Client portal readiness review",userId:"u9",hostId:"u9",startsAt:h(e,-4,11),endsAt:h(e,-4,11,45),timezone:S,recurring:!1,durationMinutes:44,participantCount:9,hasRecording:!1,sourceContext:C("calendar","cal_evt_2990"),inviteUrl:`${x}/olivia-harper`}]}const P=["https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=640&q=80","https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=640&q=80","https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=640&q=80","https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=640&q=80","https://images.unsplash.com/photo-1543269865-cbf427effbad?w=640&q=80","https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=640&q=80","https://images.unsplash.com/photo-1621135802920-133df287f89c?w=640&q=80","https://images.unsplash.com/photo-1541336032412-2048a678540d?w=640&q=80","https://images.unsplash.com/photo-1535016120720-40c646be5580?w=640&q=80","https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=640&q=80"];function ln(e){return[{id:"r1",meetingId:"p2",topic:"Sprint planning - iteration 14",hostId:"u1",recordedAt:h(e,-2,10),durationMinutes:62,sizeBytes:248*B,views:7,parts:1,hasTranscript:!0,thumbnailUrl:P[0],sourceContext:C("calendar","cal_evt_3120"),share:z("u1")},{id:"r2",meetingId:"p6",topic:"Q1 retro",hostId:"u1",recordedAt:h(e,-6,13),durationMinutes:92,sizeBytes:612*B,views:23,parts:2,hasTranscript:!0,thumbnailUrl:P[1],sourceContext:C("calendar","cal_evt_2901"),share:z("u1")},{id:"r3",meetingId:"p1",topic:Z.u4,hostId:"u2",recordedAt:h(e,-1,20,30),durationMinutes:58,sizeBytes:204*B,views:4,parts:1,hasTranscript:!1,thumbnailUrl:P[2],sourceContext:C("meetings_direct"),share:z("u2")},{id:"r4",meetingId:"p4",topic:Z.u2,hostId:"u2",recordedAt:h(e,-4,20,30),durationMinutes:31,sizeBytes:96*B,views:0,parts:1,hasTranscript:!1,thumbnailUrl:P[3],sourceContext:C("meetings_direct"),share:z("u2")},{id:"r5",meetingId:"m-archived-1",topic:"Membership engineering weekly review",hostId:"u1",recordedAt:h(e,-9,17),durationMinutes:44,sizeBytes:180*B,views:9,parts:1,hasTranscript:!0,thumbnailUrl:P[4],sourceContext:C("meetings_direct"),share:z("u1")},{id:"r6",meetingId:"p5",topic:"Course cohort kickoff - batch 12",hostId:"u4",recordedAt:h(e,-5,17),durationMinutes:55,sizeBytes:230*B,views:41,parts:1,hasTranscript:!0,thumbnailUrl:P[5],sourceContext:C("courses","course_204"),share:z("u4")},{id:"r7",meetingId:"p7",topic:"Community AMA - June",hostId:"u3",recordedAt:h(e,-7,19),durationMinutes:61,sizeBytes:350*B,views:18,parts:2,hasTranscript:!1,thumbnailUrl:P[6],sourceContext:C("communities","comm_88"),share:z("u3")},{id:"r8",meetingId:"p8",topic:"Spring product webinar",hostId:"u1",recordedAt:h(e,-8,18),durationMinutes:64,sizeBytes:1433*B,views:210,parts:1,hasTranscript:!0,thumbnailUrl:P[7],sourceContext:C("webinar","web_902"),share:z("u1",{linkAccess:"passcode",passcode:"VIEW42",viewersMustRegister:!0})},{id:"r9",meetingId:"m-archived-2",topic:"Design critique - April",hostId:"u5",recordedAt:h(e,-12,16),durationMinutes:49,sizeBytes:152*B,views:2,parts:1,hasTranscript:!1,thumbnailUrl:P[8],sourceContext:C("meetings_direct"),share:z("u5")},{id:"r10",meetingId:"m-archived-3",topic:"1:1 - Aiman / Pritesh",hostId:"u1",recordedAt:h(e,-10,11),durationMinutes:25,sizeBytes:80*B,views:0,parts:1,hasTranscript:!1,thumbnailUrl:P[9],sourceContext:C("calendar","cal_evt_3055"),share:z("u1",{linkAccess:"specific"})},{id:"r11",meetingId:"p9",topic:"Admin launch retrospective",hostId:"u9",recordedAt:h(e,-1,14),durationMinutes:46,sizeBytes:188*B,views:12,parts:1,hasTranscript:!0,thumbnailUrl:P[1],sourceContext:C("meetings_direct"),share:z("u9")}]}function dn(e=new Date){const t=nn(e);return{users:t,rooms:on(t),upcoming:an(e),previous:sn(e),recordings:ln(e)}}const cn=["admin","ghl","meetings","api","app","www","support"],un=/^[a-z0-9-]{3,50}$/,Ue="https://membership.clientclub.net/beam";function De(e){return e.trim().toLowerCase()}function hn(e={}){const t=e.latencyMs??150,m=e.currentUserId??"u1",o=structuredClone(e.fixtures??dn(e.now??new Date)),v=[];let $=0;function b(){return t<=0?Promise.resolve():new Promise(r=>setTimeout(r,t))}function M(r){return $+=1,`${r}_${$}`}function _(){const r=o.users.find(s=>s.id===m);if(!r)throw new L("forbidden",`Unknown actor ${m}`);return r}function D(){return _().role==="admin"}function y(){const r=_();if(r.role!=="admin")throw new L("forbidden","Admin role required");return r}function g(r,s){if(r!==m&&!D())throw new L("forbidden",`Only the owner or an admin can ${s}`)}function O(r,s){const l=De(r);return un.test(l)?cn.includes(l)?{available:!1,reason:"reserved"}:o.rooms.some(p=>p.slug===l&&p.id!==s)?{available:!1,reason:"taken"}:{available:!0}:{available:!1,reason:"invalid"}}function Y(r,s){const l=O(r,s);if(l.available)return De(r);throw l.reason==="taken"?new L("conflict",`Slug "${r}" is already taken`):new L("invalid-slug",`Slug "${r}" is ${l.reason??"invalid"}`)}function X(r,s){if(!o.users.find(k=>k.id===r))throw new L("not-found",`Unknown user ${r}`);if(o.rooms.some(k=>k.ownerId===r))throw new L("conflict","User already has a personal room");const A=Y(s.slug),p={id:M("pr"),ownerId:r,topic:s.topic,slug:A,inviteUrl:`${Ue}/${A}`,passcodeEnabled:s.passcodeEnabled??!1,passcode:s.passcode,waitingRoomEnabled:s.waitingRoomEnabled??!1,requireAuth:s.requireAuth??!1,hostVideoOn:s.hostVideoOn??!0,participantVideoOn:s.participantVideoOn??!1,members:[{userId:r,role:"owner"}],liveNow:!1};return o.rooms=[...o.rooms,p],o.users=o.users.map(k=>k.id===r?{...k,hasRoom:!0}:k),structuredClone(p)}function d(r){const s=o.recordings.find(l=>l.id===r);if(!s)throw new L("not-found",`Recording ${r} not found`);return s}function U(r){const s=r.search?.trim().toLowerCase();return o.recordings.filter(l=>{const A=new Date(l.recordedAt).getTime();return!(r.from&&A<new Date(r.from).getTime()||r.to&&A>new Date(r.to).getTime()||r.hostId&&l.hostId!==r.hostId||r.hasTranscript!==void 0&&l.hasTranscript!==r.hasTranscript||r.viewed!==void 0&&l.views>0!==r.viewed||s&&!l.topic.toLowerCase().includes(s))})}function w(r,s){const l=p=>new Date(p.recordedAt).getTime(),A=[...r];switch(s){case"recent":return A.sort((p,k)=>l(k)-l(p));case"oldest":return A.sort((p,k)=>l(p)-l(k));case"mostViewed":return A.sort((p,k)=>k.views-p.views);case"longest":return A.sort((p,k)=>k.durationMinutes-p.durationMinutes)}}return{auditTrail:v,async getPersonalRoom(r){await b();const s=o.rooms.find(l=>l.ownerId===r);return s?structuredClone(s):null},async createPersonalRoom(r){return await b(),g(r.ownerId,"create this room"),X(r.ownerId,r)},async updatePersonalRoom(r,s){await b();const l=o.rooms.find(k=>k.id===r);if(!l)throw new L("not-found",`Room ${r} not found`);g(l.ownerId,"edit this room");const A=s.slug!==void 0?Y(s.slug,l.id):l.slug,p={...l,...s,slug:A,inviteUrl:`${Ue}/${A}`};return o.rooms=o.rooms.map(k=>k.id===r?p:k),structuredClone(p)},async checkSlugAvailability(r){return await b(),O(r)},async listMeetings(r){await b();const s=r.scope==="upcoming"?o.upcoming:o.previous,l=new Date(r.from).getTime(),A=new Date(r.to).getTime(),p=s.filter(te=>{const re=new Date(te.startsAt).getTime();return!(re<l||re>A||r.hostId&&te.hostId!==r.hostId)}),k=r.scope==="upcoming",Qe=[...p].sort((te,re)=>{const ye=new Date(te.startsAt).getTime()-new Date(re.startsAt).getTime();return k?ye:-ye});return structuredClone(Qe)},async deleteMeeting(r){await b();const s=[...o.upcoming,...o.previous].find(l=>l.id===r);if(!s)throw new L("not-found",`Meeting ${r} not found`);g(s.hostId,"delete this meeting"),o.upcoming=o.upcoming.filter(l=>l.id!==r),o.previous=o.previous.filter(l=>l.id!==r)},async listRecordings(r){await b();const s=w(U(r),r.sort),l=(r.page-1)*r.pageSize,A=s.slice(l,l+r.pageSize);return{items:structuredClone(A),total:s.length}},async getRecording(r){return await b(),structuredClone(d(r))},async updateRecordingShare(r,s){await b();const l=d(r);g(l.hostId,"change sharing for this recording");const A={...l,share:{...l.share,...s}};return o.recordings=o.recordings.map(p=>p.id===r?A:p),structuredClone(A)},async deleteRecordings(r){await b();const s=r.map(l=>d(l));for(const l of s)g(l.hostId,"delete this recording");o.recordings=o.recordings.filter(l=>!r.includes(l.id))},async renameRecording(r,s){await b();const l=d(r);g(l.hostId,"rename this recording");const A={...l,topic:s};return o.recordings=o.recordings.map(p=>p.id===r?A:p),structuredClone(A)},async listUsers(){return await b(),structuredClone(o.users)},async adminCreateRoomFor(r,s){return await b(),y(),X(r,s)},async adminAction(r,s){await b();const l=y();if(r==="delete-room"){const A=s.roomId?o.rooms.find(p=>p.id===s.roomId):o.rooms.find(p=>p.ownerId===s.userId);if(!A||A.ownerId!==s.userId)throw new L("not-found",`Room for user ${s.userId} not found`);o.rooms=o.rooms.filter(p=>p.id!==A.id),o.users=o.users.map(p=>p.id===A.ownerId?{...p,hasRoom:!1}:p)}v.push({id:M("audit"),actorId:l.id,action:r,target:structuredClone(s),at:new Date().toISOString()})}}}const{defineComponent:mn}=await E("vue"),{resolveComponent:pn,createVNode:ge,withCtx:fe,unref:Ee,openBlock:gn,createBlock:fn}=await E("vue"),Te="meetings-toast-container",wn=mn({__name:"App",setup(e){const t=mt(),m={placement:"top",max:4,containerClass:Te};return pt(hn({currentUserId:t.currentUser.id})),(o,v)=>{const $=pn("router-view");return gn(),fn(Ee(Le),{placement:"top",max:4,"container-class":Te},{default:fe(()=>[ge(Ee(ei),{namespace:"meetings-ui","notification-config":m},{default:fe(()=>[ge(en,null,{default:fe(()=>[ge($)]),_:1})]),_:1})]),_:1})}}});export{wn as _};
