import{importShared as J}from"./__federation_fn_import-BRmtu28b.js";import{v as Ge,w as Et,x as Me,f as jt,y as Gt,n as Mt,_ as Ft}from"./useMeetingsContext-uXwGE5Nj.js";import{s as Nt}from"./highrise365-CAQSwmde.js";import{n as It,G as ke,H as Ae,a8 as Ot,aZ as Dt,ao as Ut,a7 as Kt,f as Xt,l as n,g as d,r as P,M as V,x as Yt,a_ as qt,a$ as Qt,b0 as Zt,b1 as ge,Y as Jt,b2 as Ce,a9 as Fe,b3 as Se,a1 as Qe,ab as U,b4 as fe,a3 as ea,at as ta,a4 as ue,a6 as aa,m as ra}from"./useMeetingsApi-fe2O0L9s.js";import{r as oa}from"./highrise98-WJQk65Wa.js";const{defineComponent:na,h:Ne}=await J("vue"),ia=na({name:"Add",render(){return Ne("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ne("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),We=It("n-tabs"),{defineComponent:la,h:sa,watchEffect:Pr,inject:da}=await J("vue"),Ze={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},zr=la({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:Ze,slots:Object,setup(e){const{mergedRtlRef:r}=ke(e),l=da(We,null);return l||Ot("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{rtlEnabled:Ae("TabPane",r,l.mergedClsPrefixRef),style:l.paneStyleRef,class:l.paneClassRef,mergedClsPrefix:l.mergedClsPrefixRef,tabsId:l.tabsId}},render(){const{name:e,tabsId:r}=this;return sa("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.rtlEnabled&&`${this.mergedClsPrefix}-tab-pane--rtl`,this.class],style:this.style,role:"tabpanel",tabindex:0,id:`${r}-panel-${e}`,"aria-labelledby":`${r}-tab-${e}`},this.$slots)}}),{defineComponent:ba,h:X,mergeProps:pa,Fragment:ca,inject:fa,computed:ua}=await J("vue"),va=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},Xt(Ze,["displayDirective"])),he=ba({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:va,setup(e){const{mergedRtlRef:r}=ke(e),{mergedClsPrefixRef:l,valueRef:s,typeRef:f,closableRef:u,tabStyleRef:v,addTabStyleRef:p,tabClassRef:x,addTabClassRef:w,tabChangeIdRef:T,onBeforeLeaveRef:z,triggerRef:y,tabsId:$,handleAdd:h,activateTab:B,handleClose:k}=fa(We);return{rtlEnabled:Ae("Tab",r,l),trigger:y,mergedClosable:ua(()=>{if(e.internalAddable)return!1;const{closable:m}=e;return m===void 0?u.value:m}),style:v,addStyle:p,tabClass:x,addTabClass:w,clsPrefix:l,value:s,type:f,tabsId:$,handleClose(m){m.stopPropagation(),!e.disabled&&k(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){h();return}const{name:m}=e,_=++T.id;if(m!==s.value){const{value:j}=z;j?Promise.resolve(j(e.name,s.value)).then(L=>{L&&T.id===_&&B(m)}):B(m)}}}},render(){const{internalAddable:e,clsPrefix:r,name:l,disabled:s,label:f,tab:u,value:v,mergedClosable:p,trigger:x,tabsId:w,$slots:{default:T}}=this,z=f??u;return X("div",{class:`${r}-tabs-tab-wrapper`},this.internalLeftPadded?X("div",{class:`${r}-tabs-tab-pad`}):null,X("div",Object.assign({key:l,"data-name":l,"data-disabled":s?!0:void 0},pa({class:[`${r}-tabs-tab`,v===l&&`${r}-tabs-tab--active`,s&&`${r}-tabs-tab--disabled`,p&&`${r}-tabs-tab--closable`,e&&`${r}-tabs-tab--addable`,this.rtlEnabled&&`${r}-tabs-tab--rtl`,e?this.addTabClass:this.tabClass],role:e?void 0:"tab",id:e?void 0:`${w}-tab-${l}`,"aria-selected":e?void 0:String(v===l),"aria-disabled":s?"true":void 0,tabindex:e?void 0:v===l?0:-1,onClick:x==="click"?this.activateTab:void 0,onMouseenter:x==="hover"?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),X("span",{class:`${r}-tabs-tab__label`},e?X(ca,null,X("div",{class:`${r}-tabs-tab__height-placeholder`}," "),X(Ut,{clsPrefix:r},{default:()=>X(ia,null)})):T?T():typeof z=="object"?z:Dt(z??l)),p&&this.type==="card"?X(Kt,{clsPrefix:r,class:`${r}-tabs-tab__close`,onClick:this.handleClose,disabled:s}):null))}}),{defineComponent:ga,h:ha}=await J("vue"),Tr=ga({__TAB__:!0,props:{name:{type:[String,Number]},tabKey:{type:[String,Number]},disabled:{type:Boolean,default:!1},tab:{type:[String,Number,Object,Function]},iconOnly:{type:Boolean,default:!1}},setup(e,{slots:r}){return()=>ha(he,{name:e.name,key:e.tabKey,tab:e.tab,disabled:e.disabled,class:e.iconOnly?"icon-only":""},r&&r.default?()=>r.default():void 0)}}),{createElementBlock:xa,openBlock:ma,createElementVNode:ya}=await J("vue");function $a(e,r){return ma(),xa("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[ya("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 13a1 1 0 100-2 1 1 0 000 2zM19 13a1 1 0 100-2 1 1 0 000 2zM5 13a1 1 0 100-2 1 1 0 000 2z"})])}const wa={sm:{tabLineActiveHeight:"0.5px"},md:{tabLineActiveHeight:"1px"},lg:{tabLineActiveHeight:"1px"},xl:{tabLineActiveHeight:"1px"},"2xl":{tabLineActiveHeight:"1px"}},Ca={sm:{},md:{},lg:{},xl:{},"2xl":{}},Sa={line:wa,segment:Ca},Pa={sm:{tabFontSize:"var(--hr-font-size-md)",tabHeight:"24px",tabLineHeight:"var(--hr-line-height-md)",tabPadding:"3px 8px",tabGap:"4px",customSlotPadding:"0px 4px"},md:{tabFontSize:"var(--hr-font-size-lg)",tabHeight:"32px",tabLineHeight:"var(--hr-line-height-lg)",tabPadding:"6px 8px",tabGap:"6px",customSlotPadding:"0px 6px"},lg:{tabFontSize:"var(--hr-font-size-lg)",tabHeight:"40px",tabLineHeight:"var(--hr-line-height-lg)",tabPadding:"10px 8px",tabGap:"8px",customSlotPadding:"0px 8px"},xl:{tabFontSize:"var(--hr-font-size-xl)",tabHeight:"40px",tabLineHeight:"var(--hr-line-height-xl)",tabPadding:"10px 8px",tabGap:"8px",customSlotPadding:"0px 8px"},"2xl":{tabFontSize:"var(--hr-font-size-2xl)",tabHeight:"40px",tabLineHeight:"var(--hr-line-height-2xl)",tabPadding:"8px 8px",tabGap:"8px",customSlotPadding:"0px 8px"}},za=(e,r,l,s,f)=>({barColor:"var(--n-tab-text-color-active)",tabBorderRadius:"4px",tabFontWeight:"var(--hr-font-weight-medium)",tabFontWeightActive:"var(--hr-font-weight-semibold)",tabGap:"8px",tabGapVertical:"4px",tabHoverBgColor:l==="primary"?"var(--primary-50)":"var(--gray-100)",tabPadding:"4px 8px",tabOffSet:s,tabPaddingVertical:"4px 8px",tabTextColor:"var(--gray-600)",tabTextColorActive:l==="primary"?"var(--primary-700)":"var(--gray-900)",tabTextColorDisabled:"var(--gray-400)",tabTextColorHover:"var(--gray-800)",tabBorderColor:f?"transparent":"var(--gray-200)",...Pa[r],...Sa[e][r]}),Ta=n("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[d("segment-type",[n("tabs-rail",[P("&.transition-disabled",[n("tabs-capsule",`
 transition: none;
 `)])])]),d("top",[n("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),d("left",[n("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),d("left, right",`
 flex-direction: row;
 `,[n("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),n("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),d("right",`
 flex-direction: row-reverse;
 `,[n("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),n("tabs-bar",`
 left: 0;
 `)]),d("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[n("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),n("tabs-bar",`
 top: 0;
 `)]),n("tabs-rail",`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[n("tabs-capsule",`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),n("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[n("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[d("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),P("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),d("flex",[n("tabs-nav",`
 width: 100%;
 position: relative;
 `,[n("tabs-wrapper",`
 width: 100%;
 `,[n("tabs-tab",`
 margin-right: 0;
 `)])])]),n("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[V("prefix, suffix",`
 display: flex;
 align-items: center;
 `),V("prefix","padding-right: 16px;"),V("suffix","padding-left: 16px;")]),d("top, bottom",[P(">",[n("tabs-nav",[n("tabs-nav-scroll-wrapper",[P("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),P("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),d("shadow-start",[P("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),d("shadow-end",[P("&::after",`
 box-shadow: none;
 `)])])])])]),d("left, right",[n("tabs-nav-scroll-content",`
 flex-direction: column;
 `),P(">",[n("tabs-nav",[n("tabs-nav-scroll-wrapper",[P("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),P("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),d("shadow-start",[P("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),d("shadow-end",[P("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),n("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[P("> .v-x-scroll",`
 height: 100%;
 `),n("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[P("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `)]),P("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),n("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),n("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),n("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),n("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 height: 100%;
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[d("disabled",{cursor:"not-allowed"}),V("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),V("label",`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),n("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[P("&.transition-disabled",`
 transition: none;
 `),d("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),n("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),n("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[P("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),P("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),P("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),P("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),P("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),n("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),d("line-type, bar-type",[n("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[P("&:hover",{color:"var(--n-tab-text-color-hover)"}),d("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),d("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),n("tabs-nav",[d("line-type",[d("top",[V("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-bar",`
 bottom: -1px;
 `)]),d("left",[V("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),n("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),n("tabs-bar",`
 right: -1px;
 `)]),d("right",[V("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),n("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),n("tabs-bar",`
 left: -1px;
 `)]),d("bottom",[V("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),n("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),n("tabs-bar",`
 top: -1px;
 `)]),V("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),n("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),n("tabs-bar",`
 border-radius: 0;
 `)]),d("card-type",[V("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),n("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),n("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),n("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[d("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[V("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),Yt("disabled",[P("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),d("closable","padding-right: 8px;"),d("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),d("disabled","color: var(--n-tab-text-color-disabled);")])]),d("left, right",`
 flex-direction: column; 
 `,[V("prefix, suffix",`
 padding: var(--n-tab-padding-vertical);
 `),n("tabs-wrapper",`
 flex-direction: column;
 `),n("tabs-tab-wrapper",`
 flex-direction: column;
 `,[n("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),d("top",[d("card-type",[n("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);"),V("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[d("active",`
 border-bottom: 1px solid #0000;
 `)]),n("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),d("left",[d("card-type",[n("tabs-scroll-padding","border-right: 1px solid var(--n-tab-border-color);"),V("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),n("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[d("active",`
 border-right: 1px solid #0000;
 `)]),n("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `),n("tabs-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),d("right",[d("card-type",[n("tabs-scroll-padding","border-left: 1px solid var(--n-tab-border-color);"),V("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),n("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[d("active",`
 border-left: 1px solid #0000;
 `)]),n("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `),n("tabs-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),d("bottom",[d("card-type",[n("tabs-scroll-padding","border-top: 1px solid var(--n-tab-border-color);"),V("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),n("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[d("active",`
 border-top: 1px solid #0000;
 `)]),n("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `),n("tabs-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),{defineComponent:La,h:Ra,ref:Ba}=await J("vue"),ka=Ge(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[Ge("&::-webkit-scrollbar",{width:0,height:0})]),Aa=La({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=Ba(null);function r(s){!(s.currentTarget.offsetWidth<s.currentTarget.scrollWidth)||s.deltaY===0||(s.currentTarget.scrollLeft+=s.deltaY+s.deltaX,s.preventDefault())}const l=qt();return ka.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:Et,ssr:l}),Object.assign({selfRef:e,handleWheel:r},{scrollTo(...s){var f;(f=e.value)===null||f===void 0||f.scrollTo(...s)}})},render(){return Ra("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var Pe=function(){return Qt.Date.now()},Wa=/\s/;function _a(e){for(var r=e.length;r--&&Wa.test(e.charAt(r)););return r}var Ha=/^\s+/;function Va(e){return e&&e.slice(0,_a(e)+1).replace(Ha,"")}var Ie=NaN,Ea=/^[-+]0x[0-9a-f]+$/i,ja=/^0b[01]+$/i,Ga=/^0o[0-7]+$/i,Ma=parseInt;function Oe(e){if(typeof e=="number")return e;if(Zt(e))return Ie;if(ge(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=ge(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=Va(e);var l=ja.test(e);return l||Ga.test(e)?Ma(e.slice(2),l?2:8):Ea.test(e)?Ie:+e}var Fa="Expected a function",Na=Math.max,Ia=Math.min;function Oa(e,r,l){var s,f,u,v,p,x,w=0,T=!1,z=!1,y=!0;if(typeof e!="function")throw new TypeError(Fa);r=Oe(r)||0,ge(l)&&(T=!!l.leading,z="maxWait"in l,u=z?Na(Oe(l.maxWait)||0,r):u,y="trailing"in l?!!l.trailing:y);function $(b){var A=s,N=f;return s=f=void 0,w=b,v=e.apply(N,A),v}function h(b){return w=b,p=setTimeout(m,r),T?$(b):v}function B(b){var A=b-x,N=b-w,G=r-A;return z?Ia(G,u-N):G}function k(b){var A=b-x,N=b-w;return x===void 0||A>=r||A<0||z&&N>=u}function m(){var b=Pe();if(k(b))return _(b);p=setTimeout(m,B(b))}function _(b){return p=void 0,y&&s?$(b):(s=f=void 0,v)}function j(){p!==void 0&&clearTimeout(p),w=0,s=x=f=p=void 0}function L(){return p===void 0?v:_(Pe())}function c(){var b=Pe(),A=k(b);if(s=arguments,f=this,x=b,A){if(p===void 0)return h(x);if(z)return clearTimeout(p),p=setTimeout(m,r),$(x)}return p===void 0&&(p=setTimeout(m,r)),v}return c.cancel=j,c.flush=L,c}var Da="Expected a function";function Ua(e,r,l){var s=!0,f=!0;if(typeof e!="function")throw new TypeError(Da);return ge(l)&&(s="leading"in l?!!l.leading:s,f="trailing"in l?!!l.trailing:f),Oa(e,r,{leading:s,maxWait:r,trailing:f})}const Ka={tabFontSizeSmall:"14px",tabFontSizeMedium:"14px",tabFontSizeLarge:"16px",tabGapSmallLine:"36px",tabGapMediumLine:"36px",tabGapLargeLine:"36px",tabGapSmallLineVertical:"8px",tabGapMediumLineVertical:"8px",tabGapLargeLineVertical:"8px",tabPaddingSmallLine:"6px 0",tabPaddingMediumLine:"10px 0",tabPaddingLargeLine:"14px 0",tabPaddingVerticalSmallLine:"6px 12px",tabPaddingVerticalMediumLine:"8px 16px",tabPaddingVerticalLargeLine:"10px 20px",tabGapSmallBar:"36px",tabGapMediumBar:"36px",tabGapLargeBar:"36px",tabGapSmallBarVertical:"8px",tabGapMediumBarVertical:"8px",tabGapLargeBarVertical:"8px",tabPaddingSmallBar:"4px 0",tabPaddingMediumBar:"6px 0",tabPaddingLargeBar:"10px 0",tabPaddingVerticalSmallBar:"6px 12px",tabPaddingVerticalMediumBar:"8px 16px",tabPaddingVerticalLargeBar:"10px 20px",tabGapSmallCard:"4px",tabGapMediumCard:"4px",tabGapLargeCard:"4px",tabGapSmallCardVertical:"4px",tabGapMediumCardVertical:"4px",tabGapLargeCardVertical:"4px",tabPaddingSmallCard:"8px 16px",tabPaddingMediumCard:"10px 20px",tabPaddingLargeCard:"12px 24px",tabPaddingSmallSegment:"4px 0",tabPaddingMediumSegment:"6px 0",tabPaddingLargeSegment:"8px 0",tabPaddingVerticalLargeSegment:"0 8px",tabPaddingVerticalSmallCard:"8px 12px",tabPaddingVerticalMediumCard:"10px 16px",tabPaddingVerticalLargeCard:"12px 20px",tabPaddingVerticalSmallSegment:"0 4px",tabPaddingVerticalMediumSegment:"0 6px",tabGapSmallSegment:"0",tabGapMediumSegment:"0",tabGapLargeSegment:"0",tabGapSmallSegmentVertical:"0",tabGapMediumSegmentVertical:"0",tabGapLargeSegmentVertical:"0",panePaddingSmall:"8px 0 0 0",panePaddingMedium:"12px 0 0 0",panePaddingLarge:"16px 0 0 0",closeSize:"18px",closeIconSize:"14px"};function Xa(e){const{textColor2:r,primaryColor:l,textColorDisabled:s,closeIconColor:f,closeIconColorHover:u,closeIconColorPressed:v,closeColorHover:p,closeColorPressed:x,tabColor:w,baseColor:T,dividerColor:z,fontWeight:y,textColor1:$,borderRadius:h,fontSize:B,fontWeightStrong:k}=e;return Object.assign(Object.assign({},Ka),{colorSegment:w,tabFontSizeCard:B,tabTextColorLine:$,tabTextColorActiveLine:l,tabTextColorHoverLine:l,tabTextColorDisabledLine:s,tabTextColorSegment:$,tabTextColorActiveSegment:r,tabTextColorHoverSegment:r,tabTextColorDisabledSegment:s,tabTextColorBar:$,tabTextColorActiveBar:l,tabTextColorHoverBar:l,tabTextColorDisabledBar:s,tabTextColorCard:$,tabTextColorHoverCard:$,tabTextColorActiveCard:l,tabTextColorDisabledCard:s,barColor:l,closeIconColor:f,closeIconColorHover:u,closeIconColorPressed:v,closeColorHover:p,closeColorPressed:x,closeBorderRadius:h,tabColor:w,tabColorSegment:T,tabBorderColor:z,tabFontWeightActive:y,tabFontWeight:y,tabBorderRadius:h,paneTextColor:r,fontWeightStrong:k})}const Ya={common:Jt,self:Xa},{defineComponent:qa,h:C,watchEffect:Qa,ref:M,computed:ve,watch:ze,nextTick:Te,onMounted:Za,provide:Ja,toRef:K,cloneVNode:er,withDirectives:tr,vShow:ar,TransitionGroup:rr}=await J("vue"),Le=Ua;let or=0;const nr=Object.assign(Object.assign({},Qe.props),{id:String,value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:"top"},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),ir=qa({name:"Tabs",props:nr,slots:Object,setup(e,{slots:r}){var l,s,f,u,v;const{mergedClsPrefixRef:p,inlineThemeDisabled:x,mergedComponentPropsRef:w,mergedRtlRef:T}=ke(e),z=Qe("Tabs","-tabs",Ta,Ya,e,p),y=Ae("Tabs",T,p),$=M(null),h=M(null),B=M(null),k=M(null),m=M(null),_=M(null),j=M(!0),L=M(!0),c=Me(e,["labelSize","size"]),b=ve(()=>{var t,o;return c.value?c.value:((o=(t=w?.value)===null||t===void 0?void 0:t.Tabs)===null||o===void 0?void 0:o.size)||"medium"}),A=Me(e,["activeName","value"]),N=M((s=(l=A.value)!==null&&l!==void 0?l:e.defaultValue)!==null&&s!==void 0?s:r.default?(u=(f=Ce(r.default())[0])===null||f===void 0?void 0:f.props)===null||u===void 0?void 0:u.name:null),G=jt(A,N),ee={id:0},be=(v=e.id)!==null&&v!==void 0?v:`n-tabs-${++or}`,xe=ve(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});ze(G,()=>{ee.id=0,D(),te()});function g(){var t;const{value:o}=G;return o===null?null:(t=$.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${o}"]`)}function E(t){var o,i;if(e.type==="card")return;const{value:a}=h;if(!a)return;const S=a.style.opacity==="0";if(t){const R=`${p.value}-tabs-bar--disabled`,{barWidth:W,placement:q}=e;if(t.dataset.disabled==="true"?a.classList.add(R):a.classList.remove(R),["top","bottom"].includes(q)){if(O(["top","maxHeight","height"]),typeof W=="number"&&t.offsetWidth>=W){const F=Math.floor((t.offsetWidth-W)/2)+t.offsetLeft;if(y!=null&&y.value){const we=((o=t.offsetParent)===null||o===void 0?void 0:o.offsetWidth)||0;a.style.right=`${we-F-W}px`,a.style.left=""}else a.style.left=`${F}px`,a.style.right="";a.style.maxWidth=`${W}px`}else{if(y!=null&&y.value){const F=((i=t.offsetParent)===null||i===void 0?void 0:i.offsetWidth)||0;a.style.right=`${F-t.offsetLeft-t.offsetWidth}px`,a.style.left=""}else a.style.left=`${t.offsetLeft}px`,a.style.right="";a.style.maxWidth=`${t.offsetWidth}px`}a.style.width="8192px",S&&(a.style.transition="none"),a.offsetWidth,S&&(a.style.transition="",a.style.opacity="1")}else{if(O(["left","maxWidth","width"]),typeof W=="number"&&t.offsetHeight>=W){const F=Math.floor((t.offsetHeight-W)/2)+t.offsetTop;a.style.top=`${F}px`,a.style.maxHeight=`${W}px`}else a.style.top=`${t.offsetTop}px`,a.style.maxHeight=`${t.offsetHeight}px`;a.style.height="8192px",S&&(a.style.transition="none"),a.offsetHeight,S&&(a.style.transition="",a.style.opacity="1")}}}function H(){if(e.type==="card")return;const{value:t}=h;t&&(t.style.opacity="0")}function O(t){const{value:o}=h;if(o)for(const i of t)o.style[i]=""}function D(){if(e.type==="card")return;const t=g();t?E(t):H()}function te(){var t;const o=(t=m.value)===null||t===void 0?void 0:t.$el;if(!o)return;const i=g();if(!i)return;const{scrollLeft:a,offsetWidth:S}=o,{offsetLeft:R,offsetWidth:W}=i;a>R?o.scrollTo({top:0,left:R,behavior:"smooth"}):R+W>a+S&&o.scrollTo({top:0,left:R+W-S,behavior:"smooth"})}const ae=M(null);let me=0,Y=null;function et(t){const o=ae.value;if(o){me=t.getBoundingClientRect().height;const i=`${me}px`,a=()=>{o.style.height=i,o.style.maxHeight=i};Y?(a(),Y(),Y=null):Y=a}}function tt(t){const o=ae.value;if(o){const i=t.getBoundingClientRect().height,a=()=>{document.body.offsetHeight,o.style.maxHeight=`${i}px`,o.style.height=`${Math.max(me,i)}px`};Y?(Y(),Y=null,a()):Y=a}}function at(){const t=ae.value;if(t){t.style.maxHeight="",t.style.height="";const{paneWrapperStyle:o}=e;if(typeof o=="string")t.style.cssText=o;else if(o){const{maxHeight:i,height:a}=o;i!==void 0&&(t.style.maxHeight=i),a!==void 0&&(t.style.height=a)}}}const _e={value:[]},He=M("next");function rt(t){const o=G.value;let i="next";for(const a of _e.value){if(a===o)break;if(a===t){i="prev";break}}He.value=i,ot(t)}function ot(t){const{onActiveNameChange:o,onUpdateValue:i,"onUpdate:value":a}=e;o&&ue(o,t),i&&ue(i,t),a&&ue(a,t),N.value=t}function nt(t){const{onClose:o}=e;o&&ue(o,t)}function Ve(){const{value:t}=h;if(!t)return;const o="transition-disabled";t.classList.add(o),D(),t.classList.remove(o)}const re=M(null);function ye({transitionDisabled:t}){const o=$.value;if(!o)return;t&&o.classList.add("transition-disabled");const i=g();if(i&&re.value){re.value.style.width=`${i.offsetWidth}px`,re.value.style.height=`${i.offsetHeight}px`;const a=ta(getComputedStyle(o).paddingLeft),S=y!=null&&y.value?-(o.offsetWidth-i.offsetLeft-i.offsetWidth-a):i.offsetLeft-a;re.value.style.transform=`translateX(${S}px)`,t&&re.value.offsetWidth}t&&o.classList.remove("transition-disabled")}ze([G],()=>{e.type==="segment"&&Te(()=>{ye({transitionDisabled:!1})})}),Za(()=>{e.type==="segment"&&ye({transitionDisabled:!0})});let Ee=0;function it(t){var o;if(t.contentRect.width===0&&t.contentRect.height===0||Ee===t.contentRect.width)return;Ee=t.contentRect.width;const{type:i}=e;if((i==="line"||i==="bar")&&Ve(),i!=="segment"){const{placement:a}=e;$e((a==="top"||a==="bottom"?(o=m.value)===null||o===void 0?void 0:o.$el:_.value)||null)}}const lt=Le(it,64);ze([()=>e.justifyContent,()=>e.size],()=>{Te(()=>{const{type:t}=e;(t==="line"||t==="bar")&&Ve()})});const oe=M(!1);function st(t){var o;const{target:i,contentRect:{width:a,height:S}}=t,R=i.parentElement.parentElement.offsetWidth,W=i.parentElement.parentElement.offsetHeight,{placement:q}=e;if(!oe.value)q==="top"||q==="bottom"?R<a&&(oe.value=!0):W<S&&(oe.value=!0);else{const{value:F}=k;if(!F)return;q==="top"||q==="bottom"?R-a>F.$el.offsetWidth&&(oe.value=!1):W-S>F.$el.offsetHeight&&(oe.value=!1)}$e(((o=m.value)===null||o===void 0?void 0:o.$el)||null)}const dt=Le(st,64);function bt(){const{onAdd:t}=e;t&&t(),Te(()=>{const o=g(),{value:i}=m;!o||!i||i.scrollTo({left:o.offsetLeft,top:0,behavior:"smooth"})})}function $e(t){if(!t)return;const{placement:o}=e;if(o==="top"||o==="bottom"){const{scrollLeft:i,scrollWidth:a,offsetWidth:S}=t;j.value=i<=0,L.value=i+S>=a}else{const{scrollTop:i,scrollHeight:a,offsetHeight:S}=t;j.value=i<=0,L.value=i+S>=a}}const pt=Le(t=>{$e(t.target)},64);function ct(t){const o=t.currentTarget,i=Array.from(o.querySelectorAll('[data-name]:not([data-name="__addable"]):not([data-disabled])'));if(!i.length)return;const a=i.findIndex(W=>W===document.activeElement);if(a===-1)return;const S=e.placement==="left"||e.placement==="right";let R=-1;switch(t.key){case"ArrowRight":if(S)return;R=(a+1)%i.length;break;case"ArrowLeft":if(S)return;R=(a-1+i.length)%i.length;break;case"ArrowDown":if(!S)return;R=(a+1)%i.length;break;case"ArrowUp":if(!S)return;R=(a-1+i.length)%i.length;break;case"Home":R=0;break;case"End":R=i.length-1;break;case"Enter":case" ":t.preventDefault(),i[a].click();return;default:return}R>=0&&(t.preventDefault(),i[R].focus())}Ja(We,{triggerRef:K(e,"trigger"),tabStyleRef:K(e,"tabStyle"),tabClassRef:K(e,"tabClass"),addTabStyleRef:K(e,"addTabStyle"),addTabClassRef:K(e,"addTabClass"),paneClassRef:K(e,"paneClass"),paneStyleRef:K(e,"paneStyle"),mergedClsPrefixRef:p,typeRef:K(e,"type"),closableRef:K(e,"closable"),valueRef:G,tabChangeIdRef:ee,onBeforeLeaveRef:K(e,"onBeforeLeave"),tabsId:be,activateTab:rt,handleClose:nt,handleAdd:bt}),Gt(()=>{D(),te()}),Qa(()=>{const{value:t}=B;if(!t)return;const{value:o}=p,i=`${o}-tabs-nav-scroll-wrapper--shadow-start`,a=`${o}-tabs-nav-scroll-wrapper--shadow-end`;j.value?t.classList.remove(i):t.classList.add(i),L.value?t.classList.remove(a):t.classList.add(a)});const ft={syncBarPosition:()=>{D()}},ut=()=>{ye({transitionDisabled:!0})},je=ve(()=>{const{value:t}=b,{type:o}=e,i={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[o],a=`${t}${i}`,{self:{barColor:S,closeIconColor:R,closeIconColorHover:W,closeIconColorPressed:q,tabColor:F,tabBorderColor:we,paneTextColor:vt,tabFontWeight:gt,tabBorderRadius:ht,tabFontWeightActive:xt,colorSegment:mt,fontWeightStrong:yt,tabColorSegment:$t,closeSize:wt,closeIconSize:Ct,closeColorHover:St,closeColorPressed:Pt,closeBorderRadius:zt,[U("panePadding",t)]:ce,[U("tabPadding",a)]:Tt,[U("tabPaddingVertical",a)]:Lt,[U("tabGap",a)]:Rt,[U("tabGap",`${a}Vertical`)]:Bt,[U("tabTextColor",o)]:kt,[U("tabTextColorActive",o)]:At,[U("tabTextColorHover",o)]:Wt,[U("tabTextColorDisabled",o)]:_t,[U("tabFontSize",t)]:Ht},common:{cubicBezierEaseInOut:Vt}}=z.value;return{"--n-bezier":Vt,"--n-color-segment":mt,"--n-bar-color":S,"--n-tab-font-size":Ht,"--n-tab-text-color":kt,"--n-tab-text-color-active":At,"--n-tab-text-color-disabled":_t,"--n-tab-text-color-hover":Wt,"--n-pane-text-color":vt,"--n-tab-border-color":we,"--n-tab-border-radius":ht,"--n-close-size":wt,"--n-close-icon-size":Ct,"--n-close-color-hover":St,"--n-close-color-pressed":Pt,"--n-close-border-radius":zt,"--n-close-icon-color":R,"--n-close-icon-color-hover":W,"--n-close-icon-color-pressed":q,"--n-tab-color":F,"--n-tab-font-weight":gt,"--n-tab-font-weight-active":xt,"--n-tab-padding":Tt,"--n-tab-padding-vertical":Lt,"--n-tab-gap":Rt,"--n-tab-gap-vertical":Bt,"--n-pane-padding-left":fe(ce,"left"),"--n-pane-padding-right":fe(ce,"right"),"--n-pane-padding-top":fe(ce,"top"),"--n-pane-padding-bottom":fe(ce,"bottom"),"--n-font-weight-strong":yt,"--n-tab-color-segment":$t}}),pe=x?ea("tabs",ve(()=>`${b.value[0]}${e.type[0]}`),je,e):void 0;return Object.assign({rtlEnabled:y,mergedClsPrefix:p,mergedValue:G,renderedNames:new Set,segmentCapsuleElRef:re,tabsPaneWrapperRef:ae,tabsElRef:$,barElRef:h,addTabInstRef:k,xScrollInstRef:m,scrollWrapperElRef:B,addTabFixed:oe,tabWrapperStyle:xe,handleNavResize:lt,mergedSize:b,handleScroll:pt,handleTabsResize:dt,cssVars:x?void 0:je,themeClass:pe?.themeClass,animationDirection:He,renderNameListRef:_e,yScrollElRef:_,handleSegmentResize:ut,onAnimationBeforeLeave:et,onAnimationEnter:tt,onAnimationAfterEnter:at,onRender:pe?.onRender,tabsId:be,handleTabKeydown:ct},ft)},render(){const{mergedClsPrefix:e,type:r,placement:l,addTabFixed:s,addable:f,mergedSize:u,renderNameListRef:v,onRender:p,paneWrapperClass:x,paneWrapperStyle:w,$slots:{default:T,prefix:z,suffix:y}}=this;p?.();const $=T?Ce(T()).filter(c=>c.type.__TAB_PANE__===!0):[],h=T?Ce(T()).filter(c=>c.type.__TAB__===!0):[],B=!h.length,k=r==="card",m=r==="segment",_=!k&&!m&&this.justifyContent;v.value=[];const j=()=>{const c=C("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`,role:"tablist","aria-orientation":l==="left"||l==="right"?"vertical":"horizontal",onKeydown:this.handleTabKeydown},_?null:C("div",{class:`${e}-tabs-scroll-padding`,style:l==="top"||l==="bottom"?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),B?$.map((b,A)=>(v.value.push(b.props.name),Xe(C(he,Object.assign({},b.props,{internalCreatedByPane:!0,internalLeftPadded:A!==0&&(!_||_==="center"||_==="start"||_==="end")}),b.children?{default:b.children.tab}:void 0)))):h.map((b,A)=>(v.value.push(b.props.name),Xe(A!==0&&!_?Ke(b):b))),!s&&f&&k?Ue(f,(B?$.length:h.length)!==0):null,_?null:C("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return C("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},k&&f?C(Se,{onResize:this.handleTabsResize},{default:()=>c}):c,k?C("div",{class:`${e}-tabs-pad`}):null,k?null:C("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},L=m?"top":l;return C("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${r}-type`,`${e}-tabs--${u}-size`,_&&`${e}-tabs--flex`,`${e}-tabs--${L}`,this.rtlEnabled&&`${e}-tabs--rtl`],style:this.cssVars},C("div",{class:[`${e}-tabs-nav--${r}-type`,`${e}-tabs-nav--${L}`,`${e}-tabs-nav`]},Fe(z,c=>c&&C("div",{class:`${e}-tabs-nav__prefix`},c)),m?C(Se,{onResize:this.handleSegmentResize},{default:()=>C("div",{class:`${e}-tabs-rail`,ref:"tabsElRef",role:"tablist","aria-orientation":"horizontal",onKeydown:this.handleTabKeydown},C("div",{class:`${e}-tabs-capsule`,ref:"segmentCapsuleElRef"},C("div",{class:`${e}-tabs-wrapper`},C("div",{class:`${e}-tabs-tab`}))),B?$.map((c,b)=>(v.value.push(c.props.name),C(he,Object.assign({},c.props,{internalCreatedByPane:!0,internalLeftPadded:b!==0}),c.children?{default:c.children.tab}:void 0))):h.map((c,b)=>(v.value.push(c.props.name),b===0?c:Ke(c))))}):C(Se,{onResize:this.handleNavResize},{default:()=>C("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(L)?C(Aa,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:j}):C("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:"yScrollElRef"},j()))}),s&&f&&k?Ue(f,!0):null,Fe(y,c=>c&&C("div",{class:`${e}-tabs-nav__suffix`},c))),B&&(this.animated&&(L==="top"||L==="bottom")?C("div",{ref:"tabsPaneWrapperRef",style:w,class:[`${e}-tabs-pane-wrapper`,x]},De($,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):De($,this.mergedValue,this.renderedNames)))}});function De(e,r,l,s,f,u,v){const p=[];return e.forEach(x=>{const{name:w,displayDirective:T,"display-directive":z}=x.props,y=h=>T===h||z===h,$=r===w;if(x.key!==void 0&&(x.key=w),$||y("show")||y("show:lazy")&&l.has(w)){l.has(w)||l.add(w);const h=!y("if");p.push(h?tr(x,[[ar,$]]):x)}}),v?C(rr,{name:`${v}-transition`,onBeforeLeave:s,onEnter:f,onAfterEnter:u},{default:()=>p}):p}function Ue(e,r){return C(he,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:r,disabled:typeof e=="object"&&e.disabled})}function Ke(e){const r=er(e);return r.props?r.props.internalLeftPadded=!0:r.props={internalLeftPadded:!0},r}function Xe(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}const{defineComponent:Je,useSlots:lr,ref:Q,inject:Ye,computed:ie,watch:Re,nextTick:sr,onMounted:dr,createBlock:Be,openBlock:Z,unref:I,mergeProps:br,createSlots:pr,withCtx:le,createElementBlock:se,createCommentVNode:de,renderSlot:ne,createVNode:qe,Fragment:cr,renderList:fr,resolveDynamicComponent:ur}=await J("vue"),vr={key:0,class:"hr-tabs-dropdown-wrapper hr-tabs-suffix-item"},gr={key:1,class:"hr-tabs-add-tab hr-tabs-suffix-item"},hr={key:2,class:"hr-tabs-custom-content hr-tabs-suffix-item"},xr={key:3,class:"hr-tabs-suffix-item"},mr=Je({name:ra.TABS,inheritAttrs:!1}),Lr=Je({...mr,props:{id:{type:String,default:void 0},value:{type:[String,Number]},type:{type:String,default:"line"},defaultValue:{type:String,default:void 0},justifyContent:{type:String},placement:{type:String,default:"top"},size:{type:String,default:"md"},maxVisibleTabs:{type:Number,default:5},sidebar:{type:Boolean,default:!1},trigger:{type:String},theme:{type:String,default:"primary"},noBorder:{type:Boolean,default:!1},offSet:{type:String,default:"0px"}},emits:["update:value"],setup(e,{expose:r,emit:l}){const s=lr(),f=l,u=e,v=Q(u.maxVisibleTabs),p=Ye("hr-sidebar-placement",null),x=Ye("hr-sidebar-trigger","click"),w=Q(u.trigger??x),T=p?!0:u.sidebar,z=Mt(),y=ie(()=>p??u.placement),$=Q(y.value);Re(y,g=>{$.value=g});const h=ie(()=>{const g=y.value??"top";return Nt(g,z)}),B=Q(u.value);Re(()=>u.value,g=>{B.value=g},{deep:!0}),Re(z,()=>{m()});const k=Q(null),m=()=>{sr(()=>{var g;return(g=k.value)==null?void 0:g.syncBarPosition()})};r({syncBarPosition:m});const _=ie(()=>aa(za(u.type,u.size,u.theme,u.offSet,u.noBorder))),j=ie(()=>u.type==="segment"&&(h.value==="left"||h.value==="right")?"bar":u.type==="segment"?"segment":"line"),L=s.default()&&s.default()[0].type===Symbol.for("v-fgt")?s.default()[0].children:s.default(),c=[...Array(L.length)].map((g,E)=>E),b=Q([]),A=Q([]),N=()=>{const g=c.slice(v.value);b.value=g.map(H=>{var O,D,te;return{label:(O=L[H])==null?void 0:O.props.tab,value:H,key:H,index:H,name:(te=(D=L[H])==null?void 0:D.props)==null?void 0:te.name}});const E=c.slice(0,v.value);A.value=E.map(H=>L[H])},G=ie(()=>v.value<L.length),ee=Q(!1),be=(g,E)=>{ee.value=!1;const H=E.index,O=v.value-1,D=c.findIndex(ae=>ae===H),te=c[D];c[D]=c[O],c[O]=te,N(),B.value=E.name,m()};dr(()=>{var g,E;G.value?N():A.value=L,!u.value&&!u.defaultValue&&(B.value=(E=(g=L[0])==null?void 0:g.props)==null?void 0:E.name)});function xe(g){f("update:value",g)}return(g,E)=>(Z(),Be(I(ir),br({id:e.id,ref_key:"tabsInstRef",ref:k,value:B.value,"onUpdate:value":E[1]||(E[1]=H=>B.value=H),animated:!0,type:j.value,placement:h.value,"justify-content":e.justifyContent,"default-value":e.defaultValue,style:_.value,class:["hr-tabs__container",{"hr-tabs--segment":u.type==="segment",[h.value]:h.value,"hr-tabs--overflow":G.value,"hr-tabs--transparent":!!I(T)}],trigger:w.value},g.$attrs,{"onUpdate:value":xe}),pr({default:le(()=>[(Z(!0),se(cr,null,fr(A.value,(H,O)=>(Z(),Be(ur(H),{key:O}))),128))]),suffix:le(()=>[G.value?(Z(),se("div",vr,[qe(I(oa),{id:"tabs-dropdown",options:b.value,show:ee.value,"show-search":!1,"show-arrow":!1,class:"hr-tabs-dropdown","onUpdate:show":E[0]||(E[0]=H=>ee.value=H),onSelect:be},{default:le(()=>[I(s).overflow?ne(g.$slots,"overflow",{key:0}):(Z(),Be(I(Ft),{key:1,id:"tabs-dropdown-button",size:"3xs",variant:"ghost","aria-haspopup":"menu","aria-expanded":ee.value},{icon:le(()=>[qe(I($a))]),_:1},8,["aria-expanded"]))]),_:3},8,["options","show"])])):de("",!0),I(s)["add-tab"]?(Z(),se("div",gr,[ne(g.$slots,"add-tab")])):de("",!0),I(s)["custom-slot"]?(Z(),se("div",hr,[ne(g.$slots,"custom-slot")])):de("",!0),I(s)["end-actions"]?(Z(),se("div",xr,[ne(g.$slots,"end-actions")])):de("",!0),I(s).suffix?ne(g.$slots,"suffix",{key:4}):de("",!0)]),_:2},[I(s).prefix?{name:"prefix",fn:le(()=>[ne(g.$slots,"prefix")]),key:"0"}:void 0]),1040,["id","value","type","placement","justify-content","default-value","style","class","trigger"]))}});export{Lr as C,Tr as d,ia as r};
