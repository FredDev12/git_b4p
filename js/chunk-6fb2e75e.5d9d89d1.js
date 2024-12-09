(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6fb2e75e"],{"5d04":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n("be92"),c=n("3a50");const l=Object(o["b"])({id:"auth",state:()=>({token:localStorage.getItem("token")||null,userProfile:null,users:[],userList:[],listClients:[],listManagers:[],listUtilisateurs:[],isAuthenticated:!!localStorage.getItem("token")}),actions:{async performLogin(e,t){try{const n=await Object(c["d"])(e,t),o=n.token,l=n.role;this.token=o,localStorage.setItem("token",o),localStorage.setItem("role",l),this.isAuthenticated=!0,await this.fetchUserProfile(o),await this.fetchUsers(l,o)}catch(n){throw console.error("Authentication failed:",n),new Error("Login failed")}},async fetchUserProfile(e){if(e)try{const t=await Object(c["a"])(e);this.userProfile=t,this.isAuthenticated=!0}catch(t){console.error("Failed to fetch user profile:",t),this.isAuthenticated=!1}else console.error("No token provided")},async fetchUsers(e,t){if(t)try{const n=await Object(c["c"])(e,t);console.log("storage",n),this.users=n,console.log(this.users)}catch(n){console.error("Failed to fetch user:",n),this.isAuthenticated=!1}else console.error("No token provided")},async fetchUsersBY(e,t){if(t)try{const n=await Object(c["b"])(e,t);console.log("storage",n),this.userList=n,console.log("liste ",this.userList)}catch(n){console.error("Failed to fetch user:",n),this.isAuthenticated=!1}else console.error("No token provided")},async performLogout(){if(this.token)try{await Object(c["e"])(this.token),this.isAuthenticated=!1,this.userProfile=null,localStorage.removeItem("token"),localStorage.removeItem("role")}catch(e){console.error("Failed to logout:",e)}else console.error("No token provided")},async addUser(e){},async fetchUsersByRole(e){if(this.token)try{const t=await Object(c["c"])(e,this.token);"client"===e?this.listClients=t:"manager"===e?this.listManagers=t:this.listUtilisateurs=t}catch(t){console.error(`Failed to fetch ${e}s:`,t)}else console.error("No token provided")}}})},"8c07":function(e,t,n){"use strict";var o=n("7a23");const c={class:"sidebar"},l=["href"];function r(e,t,n,r,a,s){return Object(o["openBlock"])(),Object(o["createElementBlock"])("aside",c,[Object(o["createElementVNode"])("nav",null,[Object(o["createElementVNode"])("ul",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.menuItems,e=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("li",{key:e.name,class:Object(o["normalizeClass"])({active:e.active})},[Object(o["createElementVNode"])("a",{href:e.link},Object(o["toDisplayString"])(e.name),9,l)],2))),128))])])])}var a=Object(o["defineComponent"])({name:"SidebarComponent",props:{menuItems:{type:Array,required:!0}}}),s=(n("9261"),n("6b0d")),i=n.n(s);const d=i()(a,[["render",r],["__scopeId","data-v-74b7da77"]]);t["a"]=d},9261:function(e,t,n){"use strict";n("d558")},d000:function(e,t,n){"use strict";var o=n("7a23");const c={class:"navbar"};function l(e,t,n,l,r,a){const s=Object(o["resolveComponent"])("router-link");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",null,[Object(o["createElementVNode"])("header",c,[t[1]||(t[1]=Object(o["createElementVNode"])("div",{class:"logo"},[Object(o["createElementVNode"])("a",{href:"/"},"MonLogo")],-1)),Object(o["createElementVNode"])("div",{class:Object(o["normalizeClass"])(["menu",{active:e.isMenuOpen}])},[Object(o["createElementVNode"])("ul",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.menuItems,e=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("li",{key:e.name,class:Object(o["normalizeClass"])({active:e.active})},[Object(o["createVNode"])(s,{class:"link",to:e.link},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.name),1)]),_:2},1032,["to"])],2))),128))])],2),Object(o["createElementVNode"])("div",{class:Object(o["normalizeClass"])(["menu",{active:e.isMenuOpen}])},[Object(o["createElementVNode"])("ul",null,[Object(o["createElementVNode"])("li",null,[Object(o["createElementVNode"])("a",{href:"#",onClick:t[0]||(t[0]=Object(o["withModifiers"])((...t)=>e.logout&&e.logout(...t),["prevent"]))},"Déconnexion")])])],2)])])}var r=n("6605"),a=Object(o["defineComponent"])({name:"NavbarComponent",props:{menuItems:{type:Array,required:!0}},setup(){const e=Object(r["c"])(),t=()=>{localStorage.removeItem("token"),localStorage.removeItem("username"),localStorage.removeItem("role"),e.push("/")};return{logout:t}},data(){return{isMenuOpen:!1}},methods:{toggleMenu(){this.isMenuOpen=!this.isMenuOpen}}}),s=n("6b0d"),i=n.n(s);const d=i()(a,[["render",l]]);t["a"]=d},d558:function(e,t,n){},f6e6:function(e,t,n){"use strict";n.r(t);var o=n("7a23");const c={class:"dashboard"},l={class:"client-container"},r={key:0,class:"client-table"},a=["onClick"],s=["onClick"],i={key:1};function d(e,t,n,d,u,b){const m=Object(o["resolveComponent"])("NavBar"),O=Object(o["resolveComponent"])("ButtonComponent"),j=Object(o["resolveComponent"])("router-link");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",c,[Object(o["createVNode"])(m,{menuItems:e.filteredMenuItems},null,8,["menuItems"]),Object(o["createElementVNode"])("main",l,[t[5]||(t[5]=Object(o["createElementVNode"])("h1",null,"Liste des Utilisateurs",-1)),Object(o["createVNode"])(O,{onClick:t[0]||(t[0]=t=>e.addUser())},{default:Object(o["withCtx"])(()=>t[1]||(t[1]=[Object(o["createTextVNode"])("Ajouter")])),_:1}),e.entities.length>0?(Object(o["openBlock"])(),Object(o["createElementBlock"])("table",r,[t[2]||(t[2]=Object(o["createElementVNode"])("thead",null,[Object(o["createElementVNode"])("tr",null,[Object(o["createElementVNode"])("th",null,"Nom complet"),Object(o["createElementVNode"])("th",null,"Email"),Object(o["createElementVNode"])("th",null,"Tache"),Object(o["createElementVNode"])("th",null,"Status"),Object(o["createElementVNode"])("th",null,"Rôle"),Object(o["createElementVNode"])("th",null,"Actions")])],-1)),Object(o["createElementVNode"])("tbody",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.entities,t=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("tr",{key:t.id},[Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(t.name),1),Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(t.email),1),Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(t.task),1),Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(t.status),1),Object(o["createElementVNode"])("td",null,Object(o["toDisplayString"])(t.role),1),Object(o["createElementVNode"])("td",null,[Object(o["createElementVNode"])("button",{onClick:n=>e.editEntity(t.id),class:"edit-button"},"Éditer",8,a),Object(o["createElementVNode"])("button",{onClick:n=>e.deleteEntity(t.id),class:"delete-button"},"Supprimer",8,s)])]))),128))])])):(Object(o["openBlock"])(),Object(o["createElementBlock"])("p",i,[Object(o["createTextVNode"])("Aucun "+Object(o["toDisplayString"])(e.entityTitle.toLowerCase())+" trouvé ",1),Object(o["createVNode"])(j,{to:"/addUser"},{default:Object(o["withCtx"])(()=>t[3]||(t[3]=[Object(o["createTextVNode"])("Ajouter ici")])),_:1}),t[4]||(t[4]=Object(o["createTextVNode"])("."))]))])])}var u=n("e4c3"),b=n("8c07"),m=n("d000"),O=n("6605"),j=n("3a50"),h=n("5d04"),p=Object(o["defineComponent"])({name:"List",components:{ButtonComponent:u["a"],SidebarComponent:b["a"],NavBar:m["a"]},setup(){Object(h["a"])();const e=Object(o["ref"])([]),t=Object(o["ref"])(""),n=localStorage.getItem("role")||"Utilisateur",c=localStorage.getItem("token"),l=Object(o["ref"])([{name:"Tableau de Bord",link:"/dashboard",active:!1,visibleTo:["Admin","Client","Manager","Utilisateur"]},{name:"Liste des Utilisateurs",link:"/liste",active:!1,visibleTo:["Admin","Client","Manager"]},{name:"Mon Profil",link:"/profile",active:!0,visibleTo:["Admin","Client","Manager","Utilisateur"]}]),r=l.value.filter(e=>e.visibleTo.includes(n)),a=Object(O["c"])();Object(o["onMounted"])(async()=>{try{const o=n;switch(o){case"Admin":t.value="Admin";break;case"Client":t.value="Client";break;case"Manager":t.value="Manager";break;case"Utilisateur":t.value="Utilisateur";break;default:return void console.warn("Type d'entité inconnu: "+o)}if(console.log(t.value),c){const t=await Object(j["b"])(n,c);console.log(n),e.value=t}else console.error("authentication token is missing")}catch(o){console.error("Une erreur est survenue lors de la récupération des données.",o)}});const s=e=>{console.log("Edit entity:",e)},i=e=>{console.log("Delete entity with ID:",e)},d=()=>{a.push("/addUser")};return{entities:e,entityTitle:t,menuItems:l,editEntity:s,deleteEntity:i,addUser:d,filteredMenuItems:r,role:n}}}),k=n("6b0d"),f=n.n(k);const g=f()(p,[["render",d]]);t["default"]=g}}]);
//# sourceMappingURL=chunk-6fb2e75e.5d9d89d1.js.map