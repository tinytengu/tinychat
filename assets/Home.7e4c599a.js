import{r as S,b as P,o as l,d as $,w as _,a as m,c,e as a,f as C,g as k,h as R,m as j,T as N,_ as T,i as D,u as H,j as U,k as V,l as X,n as g,p as Y,q as F,s as p,t as f,F as q,v as O,x as L,y as G,z as J}from"./index.5992d142.js";import{a as K,A as Q}from"./config.83aa1e66.js";import{s as W,P as ee,p as te,C as ne}from"./portal.esm.ed256bd3.js";import{s as se}from"./avatar.esm.e735a8ba.js";import{Z as y,D as v,R as ie,s as I}from"./button.esm.3357f3a0.js";var B={name:"Sidebar",emits:["update:visible","show","hide"],inheritAttrs:!1,props:{visible:{type:Boolean,default:!1},position:{type:String,default:"left"},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0},dismissable:{type:Boolean,default:!0},showCloseIcon:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},ariaCloseLabel:{type:String,default:"close"}},mask:null,maskClickListener:null,container:null,beforeUnmount(){this.destroyModal(),this.container&&this.autoZIndex&&y.clear(this.container),this.container=null},methods:{hide(){this.$emit("update:visible",!1)},onEnter(e){this.$emit("show"),this.autoZIndex&&y.set("modal",e,this.baseZIndex||this.$primevue.config.zIndex.modal),this.focus(),this.modal&&!this.fullScreen&&this.enableModality()},onLeave(){this.$emit("hide"),this.modal&&!this.fullScreen&&this.disableModality()},onAfterLeave(e){this.autoZIndex&&y.clear(e)},focus(){let e=v.findSingle(this.container,"input,button");e&&e.focus()},enableModality(){this.mask||(this.mask=document.createElement("div"),this.mask.setAttribute("class","p-sidebar-mask p-component-overlay p-component-overlay-enter"),this.mask.style.zIndex=String(parseInt(this.container.style.zIndex,10)-1),this.dismissable&&this.bindMaskClickListener(),document.body.appendChild(this.mask),v.addClass(document.body,"p-overflow-hidden"))},disableModality(){this.mask&&(v.addClass(this.mask,"p-component-overlay-leave"),this.mask.addEventListener("animationend",()=>{this.destroyModal()}))},bindMaskClickListener(){this.maskClickListener||(this.maskClickListener=()=>{this.hide()},this.mask.addEventListener("click",this.maskClickListener))},unbindMaskClickListener(){this.maskClickListener&&(this.mask.removeEventListener("click",this.maskClickListener),this.maskClickListener=null)},destroyModal(){this.mask&&(this.unbindMaskClickListener(),document.body.removeChild(this.mask),v.removeClass(document.body,"p-overflow-hidden"),this.mask=null)},containerRef(e){this.container=e}},computed:{containerClass(){return["p-sidebar p-component p-sidebar-"+this.position,{"p-sidebar-active":this.visible,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},fullScreen(){return this.position==="full"}},directives:{ripple:ie},components:{Portal:W}};const ae=["aria-modal"],re={class:"p-sidebar-header"},oe={key:0,class:"p-sidebar-header-content"},le=["aria-label"],de=a("span",{class:"p-sidebar-close-icon pi pi-times"},null,-1),pe=[de],ce={class:"p-sidebar-content"};function me(e,r,s,o,t,n){const b=S("Portal"),x=P("ripple");return l(),$(b,null,{default:_(()=>[m(N,{name:"p-sidebar",onEnter:n.onEnter,onLeave:n.onLeave,onAfterLeave:n.onAfterLeave,appear:""},{default:_(()=>[s.visible?(l(),c("div",j({key:0,class:n.containerClass,ref:n.containerRef,role:"complementary","aria-modal":s.modal},e.$attrs),[a("div",re,[e.$slots.header?(l(),c("div",oe,[C(e.$slots,"header")])):k("",!0),s.showCloseIcon?R((l(),c("button",{key:1,class:"p-sidebar-close p-sidebar-icon p-link",onClick:r[0]||(r[0]=(...u)=>n.hide&&n.hide(...u)),"aria-label":s.ariaCloseLabel,type:"button"},pe,8,le)),[[x]]):k("",!0)]),a("div",ce,[C(e.$slots,"default")])],16,ae)):k("",!0)]),_:3},8,["onEnter","onLeave","onAfterLeave"])]),_:3})}function be(e,r){r===void 0&&(r={});var s=r.insertAt;if(!(!e||typeof document=="undefined")){var o=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",s==="top"&&o.firstChild?o.insertBefore(t,o.firstChild):o.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}}var ue=`
.p-sidebar {
    position: fixed;
    -webkit-transition: -webkit-transform .3s;
    transition: -webkit-transform .3s;
    transition: transform .3s;
    transition: transform .3s, -webkit-transform .3s;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
}
.p-sidebar-content {
    position: relative;
    overflow-y: auto;
}
.p-sidebar-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
}
.p-sidebar-icon {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    position: relative;
    overflow: hidden;
}
.p-sidebar-left {
    top: 0;
    left: 0;
    width: 20rem;
    height: 100%;
}
.p-sidebar-right {
    top: 0;
    right: 0;
    width: 20rem;
    height: 100%;
}
.p-sidebar-top {
    top: 0;
    left: 0;
    width: 100%;
    height: 10rem;
}
.p-sidebar-bottom {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10rem;
}
.p-sidebar-full {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    -webkit-transition: none;
    transition: none;
}
.p-sidebar-left.p-sidebar-enter-from,
.p-sidebar-left.p-sidebar-leave-to {
    -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
}
.p-sidebar-right.p-sidebar-enter-from,
.p-sidebar-right.p-sidebar-leave-to {
    -webkit-transform: translateX(100%);
            transform: translateX(100%);
}
.p-sidebar-top.p-sidebar-enter-from,
.p-sidebar-top.p-sidebar-leave-to {
    -webkit-transform: translateY(-100%);
            transform: translateY(-100%);
}
.p-sidebar-bottom.p-sidebar-enter-from,
.p-sidebar-bottom.p-sidebar-leave-to {
    -webkit-transform: translateY(100%);
            transform: translateY(100%);
}
.p-sidebar-full.p-sidebar-enter-from,
.p-sidebar-full.p-sidebar-leave-to {
    opacity: 0;
}
.p-sidebar-full.p-sidebar-enter-active,
.p-sidebar-full.p-sidebar-leave-active {
    -webkit-transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.p-sidebar-left.p-sidebar-sm,
.p-sidebar-right.p-sidebar-sm {
    width: 20rem;
}
.p-sidebar-left.p-sidebar-md,
.p-sidebar-right.p-sidebar-md {
    width: 40rem;
}
.p-sidebar-left.p-sidebar-lg,
.p-sidebar-right.p-sidebar-lg {
    width: 60rem;
}
.p-sidebar-top.p-sidebar-sm,
.p-sidebar-bottom.p-sidebar-sm {
    height: 10rem;
}
.p-sidebar-top.p-sidebar-md,
.p-sidebar-bottom.p-sidebar-md {
    height: 20rem;
}
.p-sidebar-top.p-sidebar-lg,
.p-sidebar-bottom.p-sidebar-lg {
    height: 30rem;
}
@media screen and (max-width: 64em) {
.p-sidebar-left.p-sidebar-lg,
    .p-sidebar-left.p-sidebar-md,
    .p-sidebar-right.p-sidebar-lg,
    .p-sidebar-right.p-sidebar-md {
        width: 20rem;
}
}
`;be(ue);B.render=me;const he=e=>(G("data-v-535f519c"),e=e(),J(),e),fe={class:"flex h-screen surface-100"},ve=he(()=>a("h3",null,"Left Sidebar",-1)),ke={class:"flex md:flex-column align-items-center justify-content-between md:align-items-stretch surface-900 p-2 gap-2"},ge={class:"flex align-items-center gap-2"},ye={class:"text-white"},_e={class:"flex flex-column gap-1 mt-2 text-white"},xe={class:"flex justify-content-between align-items-center mx-2"},we=["onClick"],Ce=D({__name:"Home",setup(e){const r=H(),s=U();V();const o=X(()=>r.state.app.name),t=g([]),n=g(0),b=g(!1),u=new ee("14891ded038fc2941540",{cluster:"eu"}).subscribe("chats");u.bind("new",function(i){t.value.push(i),i.owner===o.value&&w(i.id)}),u.bind("deleted",function(i){t.value=t.value.filter(h=>h.id!==i.id),n.value==i.id&&(n.value=0,s.push({name:"app.home"}))});const M=async()=>{const i=await K.get(`${Q}/chats/`);t.value=te(ne,i.data)},w=i=>{s.push({name:"app.chat",params:{id:i}}),n.value=i},E=()=>{r.dispatch("signin/setSigned",!1),s.push({name:"signin.home"})},A=()=>s.push({name:"app.new_chat"}),z=()=>{n.value=0,s.push({name:"app.home"})};return Y(()=>{r.state.signin.signed||s.push({name:"signin.home"})}),F(async()=>M()),(i,h)=>{const Z=S("router-view");return l(),c("div",fe,[m(p(B),{visible:b.value,"onUpdate:visible":h[0]||(h[0]=d=>b.value=d),baseZIndex:1e4},{default:_(()=>[ve]),_:1},8,["visible"]),a("div",{class:L(["flex-column surface-800",n.value===0?"w-screen md:w-16rem":"hidden md:flex md:w-16rem"])},[a("div",ke,[a("div",ge,[m(p(se),{label:p(o).slice(0,2),shape:"circle"},null,8,["label"]),a("p",ye,f(p(o)),1)]),m(p(I),{label:"\u0412\u044B\u0439\u0442\u0438",class:"p-button-danger p-button-sm",onClick:E})]),a("div",_e,[a("div",xe,[a("h3",null,"\u0427\u0430\u0442\u044B ("+f(t.value.length)+")",1),m(p(I),{icon:"pi pi-plus",class:"p-button-rounded p-button-text p-button-sm",onClick:A})]),(l(!0),c(q,null,O(t.value,d=>(l(),c("div",{key:d.id,class:L(["chat-item",{active:n.value==d.id}]),onClick:Le=>w(d.id)}," (#"+f(d.id)+") "+f(d.title),11,we))),128))])],2),(l(),$(Z,{key:i.$route.fullPath,class:"hidden",onClose:z}))])}}});var Ee=T(Ce,[["__scopeId","data-v-535f519c"]]);export{Ee as default};
