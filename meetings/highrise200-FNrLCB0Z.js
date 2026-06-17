import{importShared as k}from"./__federation_fn_import-BRmtu28b.js";import{n as I,E as se,aZ as $,ao as le,a7 as ce,G as M,H as fe,ab as de,b4 as pe,a3 as he,bz as ue,bA as ve,bC as me,bB as ge,bD as be,bE as xe,r as c,l as a,g as s,M as x,W as we,X as Ce,Y as ye,f as ze,a1 as B,k as $e}from"./useMeetingsApi-fe2O0L9s.js";const R=I("n-notification-provider"),{defineComponent:Se,h:j,inject:Ae,ref:He,watchEffect:Oe}=await k("vue"),ke=Se({name:"NotificationContainer",props:{scrollable:{type:Boolean,required:!0},placement:{type:String,required:!0}},setup(){const{mergedThemeRef:o,mergedClsPrefixRef:t,wipTransitionCountRef:r}=Ae(R),n=He(null);return Oe(()=>{var i,f;r.value>0?(i=n?.value)===null||i===void 0||i.classList.add("transitioning"):(f=n?.value)===null||f===void 0||f.classList.remove("transitioning")}),{selfRef:n,mergedTheme:o,mergedClsPrefix:t,transitioning:r}},render(){const{$slots:o,scrollable:t,mergedClsPrefix:r,mergedTheme:n,placement:i}=this;return j("div",{ref:"selfRef",class:[`${r}-notification-container`,t&&`${r}-notification-container--scrollable`,`${r}-notification-container--${i}`]},t?j(se,{theme:n.peers.Scrollbar,themeOverrides:n.peerOverrides.Scrollbar,contentStyle:{overflow:"hidden"}},o):o)}}),{defineComponent:Re,h:p,inject:Fe,computed:F}=await k("vue"),Te={info:()=>p(ge,null),success:()=>p(me,null),warning:()=>p(ve,null),error:()=>p(ue,null),default:()=>null},T={closable:{type:Boolean,default:!0},type:{type:String,default:"default"},avatar:Function,title:[String,Function],description:[String,Function],content:[String,Function],meta:[String,Function],action:[String,Function],onClose:{type:Function,required:!0},keepAliveOnHover:Boolean,onMouseenter:Function,onMouseleave:Function},je=be(T),Le=Re({name:"Notification",props:T,setup(o){const{mergedClsPrefixRef:t,mergedThemeRef:r,props:n}=Fe(R),{inlineThemeDisabled:i,mergedRtlRef:f}=M(),h=fe("Notification",f,t),m=F(()=>{const{type:g}=o,{self:{color:w,textColor:C,closeIconColor:y,closeIconColorHover:d,closeIconColorPressed:e,headerTextColor:l,descriptionTextColor:u,actionTextColor:b,borderRadius:z,headerFontWeight:A,boxShadow:S,lineHeight:_,fontSize:N,closeMargin:q,closeSize:W,width:K,padding:V,closeIconSize:D,closeBorderRadius:G,closeColorHover:X,closeColorPressed:J,titleFontSize:Y,metaFontSize:Z,descriptionFontSize:Q,[de("iconColor",g)]:U},common:{cubicBezierEaseOut:ee,cubicBezierEaseIn:te,cubicBezierEaseInOut:oe}}=r.value,{left:ne,right:ie,top:re,bottom:ae}=pe(V);return{"--n-color":w,"--n-font-size":N,"--n-text-color":C,"--n-description-text-color":u,"--n-action-text-color":b,"--n-title-text-color":l,"--n-title-font-weight":A,"--n-bezier":oe,"--n-bezier-ease-out":ee,"--n-bezier-ease-in":te,"--n-border-radius":z,"--n-box-shadow":S,"--n-close-border-radius":G,"--n-close-color-hover":X,"--n-close-color-pressed":J,"--n-close-icon-color":y,"--n-close-icon-color-hover":d,"--n-close-icon-color-pressed":e,"--n-line-height":_,"--n-icon-color":U,"--n-close-margin":q,"--n-close-size":W,"--n-close-icon-size":D,"--n-width":K,"--n-padding-left":ne,"--n-padding-right":ie,"--n-padding-top":re,"--n-padding-bottom":ae,"--n-title-font-size":Y,"--n-meta-font-size":Z,"--n-description-font-size":Q}}),v=i?he("notification",F(()=>o.type[0]),m,n):void 0;return{mergedClsPrefix:t,showAvatar:F(()=>o.avatar||o.type!=="default"),handleCloseClick(){o.onClose()},rtlEnabled:h,cssVars:i?void 0:m,themeClass:v?.themeClass,onRender:v?.onRender}},render(){var o;const{mergedClsPrefix:t}=this;return(o=this.onRender)===null||o===void 0||o.call(this),p("div",{class:[`${t}-notification-wrapper`,this.themeClass],onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave,style:this.cssVars},p("div",{class:[`${t}-notification`,this.rtlEnabled&&`${t}-notification--rtl`,this.themeClass,{[`${t}-notification--closable`]:this.closable,[`${t}-notification--show-avatar`]:this.showAvatar}],style:this.cssVars},this.showAvatar?p("div",{class:`${t}-notification__avatar`},this.avatar?$(this.avatar):this.type!=="default"?p(le,{clsPrefix:t},{default:()=>Te[this.type]()}):null):null,this.closable?p(ce,{clsPrefix:t,class:`${t}-notification__close`,onClick:this.handleCloseClick}):null,p("div",{ref:"bodyRef",class:`${t}-notification-main`},this.title?p("div",{class:`${t}-notification-main__header`},$(this.title)):null,this.description?p("div",{class:`${t}-notification-main__description`},$(this.description)):null,this.content?p("pre",{class:`${t}-notification-main__content`},$(this.content)):null,this.meta||this.action?p("div",{class:`${t}-notification-main-footer`},this.meta?p("div",{class:`${t}-notification-main-footer__meta`},$(this.meta)):null,this.action?p("div",{class:`${t}-notification-main-footer__action`},$(this.action)):null):null)))}}),{defineComponent:Ee,h:L,Transition:Pe,inject:Ie,ref:Me,onMounted:Be,nextTick:_e}=await k("vue"),Ne=Object.assign(Object.assign({},T),{duration:Number,onClose:Function,onLeave:Function,onAfterEnter:Function,onAfterLeave:Function,onHide:Function,onAfterShow:Function,onAfterHide:Function}),qe=Ee({name:"NotificationEnvironment",props:Object.assign(Object.assign({},Ne),{internalKey:{type:String,required:!0},onInternalAfterLeave:{type:Function,required:!0}}),setup(o){const{wipTransitionCountRef:t}=Ie(R),r=Me(!0);let n=null;function i(){r.value=!1,n&&window.clearTimeout(n)}function f(e){t.value++,_e(()=>{e.style.height=`${e.offsetHeight}px`,e.style.maxHeight="0",e.style.transition="none",e.offsetHeight,e.style.transition="",e.style.maxHeight=e.style.height})}function h(e){t.value--,e.style.height="",e.style.maxHeight="";const{onAfterEnter:l,onAfterShow:u}=o;l&&l(),u&&u()}function m(e){t.value++,e.style.maxHeight=`${e.offsetHeight}px`,e.style.height=`${e.offsetHeight}px`,e.offsetHeight}function v(e){const{onHide:l}=o;l&&l(),e.style.maxHeight="0",e.offsetHeight}function g(){t.value--;const{onAfterLeave:e,onInternalAfterLeave:l,onAfterHide:u,internalKey:b}=o;e&&e(),l(b),u&&u()}function w(){const{duration:e}=o;e&&(n=window.setTimeout(i,e))}function C(e){e.currentTarget===e.target&&n!==null&&(window.clearTimeout(n),n=null)}function y(e){e.currentTarget===e.target&&w()}function d(){const{onClose:e}=o;e?Promise.resolve(e()).then(l=>{l!==!1&&i()}):i()}return Be(()=>{o.duration&&(n=window.setTimeout(i,o.duration))}),{show:r,hide:i,handleClose:d,handleAfterLeave:g,handleLeave:v,handleBeforeLeave:m,handleAfterEnter:h,handleBeforeEnter:f,handleMouseenter:C,handleMouseleave:y}},render(){return L(Pe,{name:"notification-transition",appear:!0,onBeforeEnter:this.handleBeforeEnter,onAfterEnter:this.handleAfterEnter,onBeforeLeave:this.handleBeforeLeave,onLeave:this.handleLeave,onAfterLeave:this.handleAfterLeave},{default:()=>this.show?L(Le,Object.assign({},xe(this.$props,je),{onClose:this.handleClose,onMouseenter:this.duration&&this.keepAliveOnHover?this.handleMouseenter:void 0,onMouseleave:this.duration&&this.keepAliveOnHover?this.handleMouseleave:void 0})):null})}}),We=c([a("notification-container",`
 z-index: 4000;
 position: fixed;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: flex-end;
 `,[c(">",[a("scrollbar",`
 width: initial;
 overflow: visible;
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `,[c(">",[a("scrollbar-container",`
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `,[a("scrollbar-content",`
 padding-top: 12px;
 padding-bottom: 33px;
 `)])])])]),s("top, top-right, top-left",`
 top: 12px;
 `,[c("&.transitioning >",[a("scrollbar",[c(">",[a("scrollbar-container",`
 min-height: 100vh !important;
 `)])])])]),s("bottom, bottom-right, bottom-left",`
 bottom: 12px;
 `,[c(">",[a("scrollbar",[c(">",[a("scrollbar-container",[a("scrollbar-content",`
 padding-bottom: 12px;
 `)])])])]),a("notification-wrapper",`
 display: flex;
 align-items: flex-end;
 margin-bottom: 0;
 margin-top: 12px;
 `)]),s("top, bottom",`
 left: 50%;
 transform: translateX(-50%);
 `,[a("notification-wrapper",[c("&.notification-transition-enter-from, &.notification-transition-leave-to",`
 transform: scale(0.85);
 `),c("&.notification-transition-leave-from, &.notification-transition-enter-to",`
 transform: scale(1);
 `)])]),s("top",[a("notification-wrapper",`
 transform-origin: top center;
 `)]),s("bottom",[a("notification-wrapper",`
 transform-origin: bottom center;
 `)]),s("top-right, bottom-right",[a("notification",`
 margin-left: 28px;
 margin-right: 16px;
 `)]),s("top-left, bottom-left",[a("notification",`
 margin-left: 16px;
 margin-right: 28px;
 `)]),s("top-right",`
 right: 0;
 `,[H("top-right")]),s("top-left",`
 left: 0;
 `,[H("top-left")]),s("bottom-right",`
 right: 0;
 `,[H("bottom-right")]),s("bottom-left",`
 left: 0;
 `,[H("bottom-left")]),s("scrollable",[s("top-right",`
 top: 0;
 `),s("top-left",`
 top: 0;
 `),s("bottom-right",`
 bottom: 0;
 `),s("bottom-left",`
 bottom: 0;
 `)]),a("notification-wrapper",`
 margin-bottom: 12px;
 `,[c("&.notification-transition-enter-from, &.notification-transition-leave-to",`
 opacity: 0;
 margin-top: 0 !important;
 margin-bottom: 0 !important;
 `),c("&.notification-transition-leave-from, &.notification-transition-enter-to",`
 opacity: 1;
 `),c("&.notification-transition-leave-active",`
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier-ease-in),
 max-height .3s var(--n-bezier),
 margin-top .3s linear,
 margin-bottom .3s linear,
 box-shadow .3s var(--n-bezier);
 `),c("&.notification-transition-enter-active",`
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier-ease-out),
 max-height .3s var(--n-bezier),
 margin-top .3s linear,
 margin-bottom .3s linear,
 box-shadow .3s var(--n-bezier);
 `)]),a("notification",`
 background-color: var(--n-color);
 color: var(--n-text-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 font-family: inherit;
 font-size: var(--n-font-size);
 font-weight: 400;
 position: relative;
 display: flex;
 overflow: hidden;
 flex-shrink: 0;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 width: var(--n-width);
 max-width: calc(100vw - 16px - 16px);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 box-sizing: border-box;
 opacity: 1;
 `,[x("avatar",[a("icon",`
 color: var(--n-icon-color);
 `),a("base-icon",`
 color: var(--n-icon-color);
 `)]),s("show-avatar",[a("notification-main",`
 margin-left: 40px;
 width: calc(100% - 40px); 
 `)]),s("closable",[a("notification-main",[c("> *:first-child",`
 padding-right: 20px;
 `)]),x("close",`
 position: absolute;
 top: 0;
 right: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),x("avatar",`
 position: absolute;
 top: var(--n-padding-top);
 left: var(--n-padding-left);
 width: 28px;
 height: 28px;
 font-size: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[a("icon","transition: color .3s var(--n-bezier);")]),a("notification-main",`
 padding-top: var(--n-padding-top);
 padding-bottom: var(--n-padding-bottom);
 box-sizing: border-box;
 display: flex;
 flex-direction: column;
 margin-left: 8px;
 width: calc(100% - 8px);
 `,[a("notification-main-footer",`
 display: flex;
 align-items: center;
 justify-content: space-between;
 margin-top: 12px;
 `,[x("meta",`
 font-size: var(--n-meta-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `),x("action",`
 cursor: pointer;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-action-text-color);
 `)]),x("header",`
 font-weight: var(--n-title-font-weight);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-title-text-color);
 `),x("description",`
 margin-top: 8px;
 font-size: var(--n-description-font-size);
 white-space: pre-wrap;
 word-wrap: break-word;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `),x("content",`
 line-height: var(--n-line-height);
 margin: 12px 0 0 0;
 font-family: inherit;
 white-space: pre-wrap;
 word-wrap: break-word;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-text-color);
 `,[c("&:first-child","margin: 0;")])])])])]);function H(o){const t=o.split("-")[1]==="left"?"calc(-100%)":"calc(100%)";return a("notification-wrapper",[c("&.notification-transition-enter-from, &.notification-transition-leave-to",`
 transform: translate(${t}, 0);
 `),c("&.notification-transition-leave-from, &.notification-transition-enter-to",`
 transform: translate(0, 0);
 `)])}const Ke={closeMargin:"16px 12px",closeSize:"20px",closeIconSize:"16px",width:"365px",padding:"16px",titleFontSize:"16px",metaFontSize:"12px",descriptionFontSize:"12px"};function Ve(o){const{textColor2:t,successColor:r,infoColor:n,warningColor:i,errorColor:f,popoverColor:h,closeIconColor:m,closeIconColorHover:v,closeIconColorPressed:g,closeColorHover:w,closeColorPressed:C,textColor1:y,textColor3:d,borderRadius:e,fontWeightStrong:l,boxShadow2:u,lineHeight:b,fontSize:z}=o;return Object.assign(Object.assign({},Ke),{borderRadius:e,lineHeight:b,fontSize:z,headerFontWeight:l,iconColor:t,iconColorSuccess:r,iconColorInfo:n,iconColorWarning:i,iconColorError:f,color:h,textColor:t,closeIconColor:m,closeIconColorHover:v,closeIconColorPressed:g,closeBorderRadius:e,closeColorHover:w,closeColorPressed:C,headerTextColor:y,descriptionTextColor:d,actionTextColor:t,boxShadow:u})}const De=we({name:"Notification",common:ye,peers:{Scrollbar:Ce},self:Ve}),{defineComponent:Ge,h:O,Fragment:Xe,Teleport:Je,ref:E,provide:P,reactive:Ye}=await k("vue"),Ze=I("n-notification-api"),Qe=Object.assign(Object.assign({},B.props),{containerClass:String,containerStyle:[String,Object],to:[String,Object],scrollable:{type:Boolean,default:!0},max:Number,placement:{type:String,default:"top-right"},keepAliveOnHover:Boolean}),tt=Ge({name:"NotificationProvider",props:Qe,setup(o){const{mergedClsPrefixRef:t}=M(o),r=E([]),n={},i=new Set;function f(d){const e=$e(),l=()=>{i.add(e),n[e]&&n[e].hide()},u=Ye(Object.assign(Object.assign({},d),{key:e,destroy:l,hide:l,deactivate:l})),{max:b}=o;if(b&&r.value.length-i.size>=b){let z=!1,A=0;for(const S of r.value){if(!i.has(S.key)){n[S.key]&&(S.destroy(),z=!0);break}A++}z||r.value.splice(A,1)}return r.value.push(u),u}const h=["info","success","warning","error"].map(d=>e=>f(Object.assign(Object.assign({},e),{type:d})));function m(d){i.delete(d),r.value.splice(r.value.findIndex(e=>e.key===d),1)}const v=B("Notification","-notification",We,De,o,t),g={create:f,info:h[0],success:h[1],warning:h[2],error:h[3],open:C,destroyAll:y},w=E(0);P(Ze,g),P(R,{props:o,mergedClsPrefixRef:t,mergedThemeRef:v,wipTransitionCountRef:w});function C(d){return f(d)}function y(){Object.values(r.value).forEach(d=>{d.hide()})}return Object.assign({mergedClsPrefix:t,notificationList:r,notificationRefs:n,handleAfterLeave:m},g)},render(){var o,t,r;const{placement:n}=this;return O(Xe,null,(t=(o=this.$slots).default)===null||t===void 0?void 0:t.call(o),this.notificationList.length?O(Je,{to:(r=this.to)!==null&&r!==void 0?r:"body"},O(ke,{class:this.containerClass,style:this.containerStyle,scrollable:this.scrollable&&n!=="top"&&n!=="bottom",placement:n},{default:()=>this.notificationList.map(i=>O(qe,Object.assign({ref:f=>{const h=i.key;f===null?delete this.notificationRefs[h]:this.notificationRefs[h]=f}},ze(i,["destroy","hide","deactivate"]),{internalKey:i.key,onInternalAfterLeave:this.handleAfterLeave,keepAliveOnHover:i.keepAliveOnHover===void 0?this.keepAliveOnHover:i.keepAliveOnHover})))})):null)}});export{Ze as E,tt as X};
