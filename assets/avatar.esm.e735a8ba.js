import{o as l,c as s,f as d,x as o,t as p,g as m}from"./index.5992d142.js";var u={name:"Avatar",props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"}},methods:{onError(){this.$emit("error")}},computed:{containerClass(){return["p-avatar p-component",{"p-avatar-image":this.image!=null,"p-avatar-circle":this.shape==="circle","p-avatar-lg":this.size==="large","p-avatar-xl":this.size==="xlarge"}]},iconClass(){return["p-avatar-icon",this.icon]}}};const g={key:0,class:"p-avatar-text"},h=["src"];function f(r,t,a,n,e,i){return l(),s("div",{class:o(i.containerClass)},[d(r.$slots,"default",{},()=>[a.label?(l(),s("span",g,p(a.label),1)):a.icon?(l(),s("span",{key:1,class:o(i.iconClass)},null,2)):a.image?(l(),s("img",{key:2,src:a.image,onError:t[0]||(t[0]=(...c)=>i.onError&&i.onError(...c))},null,40,h)):m("",!0)])],2)}function v(r,t){t===void 0&&(t={});var a=t.insertAt;if(!(!r||typeof document=="undefined")){var n=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",a==="top"&&n.firstChild?n.insertBefore(e,n.firstChild):n.appendChild(e),e.styleSheet?e.styleSheet.cssText=r:e.appendChild(document.createTextNode(r))}}var y=`
.p-avatar {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    width: 2rem;
    height: 2rem;
    font-size: 1rem;
}
.p-avatar.p-avatar-image {
    background-color: transparent;
}
.p-avatar.p-avatar-circle {
    border-radius: 50%;
}
.p-avatar-circle img {
    border-radius: 50%;
}
.p-avatar .p-avatar-icon {
    font-size: 1rem;
}
.p-avatar img {
    width: 100%;
    height: 100%;
}
`;v(y);u.render=f;export{u as s};
