(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(69)},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(27),o=a.n(s),c=(a(36),a(4)),l=a(5),r=a(7),m=a(6),d=a(8),p=(a(37),a(3)),u=a(13),g=(a(38),a(1)),h=a.n(g),v=a(28),b=a.n(v),E=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).searchMedicines=function(e){e.preventDefault();var t=e.target.value;a.setState({term:t}),a.state.isLoading||(a.setState({isLoading:!0}),h.a.post("https://medicento-api.herokuapp.com/api/get_medicines_for_key",{term:t,pagno:0,name:a.state.selected_inventory}).then(function(e){console.log(e),a.setState({inventory_medicines:e.data.medicines,pageno_i:1,isLoading:!1,pageno:1,inventory_master:e.data.inventory_master})}).catch(function(e){console.log(e),a.setState({isLoading:!1})}))},a.loadMore=function(){a.setState({isLoading:!0}),h.a.get("https://medicento-api.herokuapp.com/api/get_medicines_of_master/"+a.state.term+"?pagno="+a.state.pageno).then(function(e){a.setState({inventory_master:e.data.medicines,pageno:a.state.pageno+1,isLoading:!1})}).catch(function(e){console.log(e),a.setState({isLoading:!1})})},a.loadMoreInventory=function(){a.setState({isLoading:!0}),h.a.post("https://medicento-api.herokuapp.com/api/get_medicines_of_distributor/",{term:a.state.term,pagno:a.state.pageno_i,name:a.state.selected_inventory}).then(function(e){a.setState({inventory_medicines:e.data.medicines,pageno_i:a.state.pageno_i+1,isLoading:!1})}).catch(function(e){console.log(e),a.setState({isLoading:!1})})},a.submitSearch=function(e){e.preventDefault(),a.setState({isLoading:!0,pageno_i:0,pageno:0}),a.state.isLoading||(a.setState({isLoading:!0}),h.a.post("https://medicento-api.herokuapp.com/api/get_medicines_for_key",{term:a.state.term,pagno:0,name:a.state.selected_inventory}).then(function(e){a.setState({inventory_medicines:e.data.medicines,pageno_i:1,isLoading:!1,pageno:1,inventory_master:e.data.inventory_master})}).catch(function(e){console.log(e),a.setState({isLoading:!1})}))},a.addProductId=function(e,t){a.setState({isLoading:!0}),t.preventDefault(),console.log(a.state.inputValues[e]),h.a.post("https://medicento-api.herokuapp.com/api/updateMedicines",{mapped_id:a.state.inputValues[e],master:a.state.inventory_master[e]._id,name:a.state.selected_inventory}).then(function(e){a.setState({isLoading:!1}),a.setState({isLoading:!0,pageno_i:0}),h.a.post("https://medicento-api.herokuapp.com/api/get_medicines_of_distributor/",{term:a.state.term,pagno:0,name:a.state.selected_inventory}).then(function(e){a.setState({inventory_medicines:e.data.medicines,pageno_i:1}),h.a.post("https://medicento-api.herokuapp.com/api/get_medicines_of_master/",{term:a.state.term,pagno:0}).then(function(e){a.setState({inventory_master:e.data.medicines,pageno:1,isLoading:!1})}).catch(function(e){console.log(e),a.setState({isLoading:!1})})}).catch(function(e){console.log(e),a.setState({isLoading:!1})})}).catch(function(e){console.log(e),a.setState({isLoading:!1})})},a.changeItem=function(e,t){var n=a.state.inputValues;n[e]=t.target.value,a.setState({inputValues:n})},a.mapped=function(e){a.setState({isLoading:!0});var t=e.target.value;console.log(t),h.a.get("https://medicento-api.herokuapp.com/api/get_unmapped/"+t+"/"+a.state.selected_inventory).then(function(e){a.setState({inventory_medicines:e.data.medicines,mapped:t,isLoading:!1,showSnakBar:!0,message:"Mapped"},function(){setTimeout(function(){a.setState({showSnakBar:!1})},3e3)})}).catch(function(e){console.log(e),a.setState({isLoading:!1})})},a.addMedicines=function(e){e.preventDefault();var t=e.target.value;a.setState({add:t})},a.addProd=function(e){a.setState({isLoading:!0,showSnakBar:!1}),e.preventDefault();var t=a.state.add;h.a.post("https://medicento-api.herokuapp.com/api/addMedicines/",{name:t}).then(function(e){a.setState({isLoading:!1,showSnakBar:!0,message:e.data.message},function(){setTimeout(function(){a.setState({showSnakBar:!1})},3e3)})}).catch(function(e){console.log(e),a.setState({isLoading:!1,showSnakBar:!0})})},a.state={selected_inventory:e.match.params.id,inventory_master:[],temp_master:[],inventory_medicines:[],term:"",pageno:0,pageno_i:0,count_of_unmappped:0,mapped:"NotMapped",inputValues:[],isLoading:!0,add:"",showSnakBar:!1,message:""},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=this;h.a.get("https://medicento-api.herokuapp.com/api/total_unmapped/"+this.state.selected_inventory).then(function(t){e.setState({count_of_unmappped:t.data.count}),h.a.get("https://medicento-api.herokuapp.com/api/get_all_master_medicines/").then(function(t){e.setState({inventory_master:t.data.medicines,temp_master:t.data.medicines.slice(0,10),isLoading:!1})}).catch(function(t){console.log(t),e.setState({isLoading:!1})})}).catch(function(t){console.log(t),e.setState({isLoading:!1})})}},{key:"render",value:function(){var e=this,t=this.state.inventory_medicines,a=this.state.inventory_master;return i.a.createElement("div",{className:"inventory_selection"},i.a.createElement(b.a,{show:this.state.showSnakBar,timer:1e3},i.a.createElement("p",null,this.state.message)),i.a.createElement("div",{style:{margin:"20px"}},i.a.createElement("div",{className:"card",style:{padding:"10px",marginBottom:"10px"}},i.a.createElement("div",{className:"row",style:{marginLeft:"0px",marginRight:"0px"}},i.a.createElement("h3",{className:"col-md-10 px-0"},this.state.selected_inventory,i.a.createElement("span",{className:"badge",style:{marginLeft:"20px",fontSize:"16px"}},"Total Unmapped -"," ",i.a.createElement("span",{class:"badge badge-success"},this.state.count_of_unmappped))),i.a.createElement(p.b,{to:"/inventory_selection",className:"col-md-2 px-0"},i.a.createElement("button",{className:"btn btn-primary"},"Change Distributor")))),this.state.isLoading?i.a.createElement("div",{className:"loader"},i.a.createElement("img",{src:"https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif",height:"100",width:"250",alt:""})):null,i.a.createElement("div",{className:"row",style:{marginLeft:"0px",marginRight:"0px"}},i.a.createElement("div",{className:"col-md-12 px-0 row",style:{marginLeft:"0px",marginRight:"0px"}},i.a.createElement("div",{className:"col-md-6  pl-0"},i.a.createElement("form",{onSubmit:this.submitSearch,className:"card",style:{padding:"10px",marginBottom:"10px"}},i.a.createElement("div",{class:"input-group"},i.a.createElement("input",{type:"text",placeholder:"search medicine",class:"form-control",onChange:this.searchMedicines}),i.a.createElement("div",{class:"input-group-append"},i.a.createElement("input",{type:"submit",value:"Search",className:"btn btn-primary"}))))),i.a.createElement("div",{className:"col-md-6 pr-0"},i.a.createElement("form",{onSubmit:this.addProd,className:"card col-md-12",style:{padding:"10px",marginBottom:"10px"}},i.a.createElement("div",{class:"input-group"},i.a.createElement("input",{type:"text",placeholder:"add medicine",class:"form-control",onChange:this.addMedicines}),i.a.createElement("div",{className:"input-group-append"},i.a.createElement("input",{type:"submit",value:"Add New",className:"btn btn-danger"})))))),i.a.createElement("div",{className:"col-md-6"},i.a.createElement("div",{style:{marginBottom:"10px"}},i.a.createElement("button",{className:"btn btn-primary",onClick:this.loadMore},"Next")," ","Page ",this.state.pageno,i.a.createElement("br",null)),i.a.createElement("table",{className:"table table-bordered"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Medicento Name"),i.a.createElement("th",null,"Add"))),i.a.createElement("tbody",null,a.map(function(t,a){return i.a.createElement("tr",null,i.a.createElement("td",{scope:"row"},t.Item_name),i.a.createElement("td",null,i.a.createElement("form",{action:"",onSubmit:function(t){e.addProductId(a,t)}},i.a.createElement("div",{class:"input-group"},i.a.createElement("input",{type:"text",name:"item_code",class:"form-control",onChange:function(t){return e.changeItem(a,t)}}),i.a.createElement("input",{type:"submit",value:"Submit",className:"btn btn-success input-group-append"})))))})))),i.a.createElement("div",{className:"col-md-6"},i.a.createElement("select",{name:"mapping",id:"",onChange:this.mapped},i.a.createElement("option",{value:"Mapped"},"Mapped"),i.a.createElement("option",{value:"NotMapped",selected:!0},"Un Mapped")),i.a.createElement("button",{className:"btn btn-primary",onClick:this.loadMoreInventory,style:{marginLeft:"10px"}},"Next")," ","Page ",this.state.pageno_i,i.a.createElement("table",{className:"table table-bordered",style:{marginTop:"10px"}},0==t.length?i.a.createElement("h4",null,"No Data"):null,i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Item Code"),i.a.createElement("th",null,"Name"),i.a.createElement("th",null,"PTR"),i.a.createElement("th",null,"Manfacturer"),i.a.createElement("th",null,"Status"))),i.a.createElement("tbody",null,t.map(function(e,t){return i.a.createElement("tr",null,i.a.createElement("td",null,e.item_code),i.a.createElement("td",null,e.Item_name),i.a.createElement("td",null,e.mrp),i.a.createElement("td",null,e.manfc_name),i.a.createElement("td",null,e.unmapped))})))))))}}]),t}(n.Component),_=Object(u.d)(E),f=(a(66),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).changeCity=function(e){var t=e.target.value;h.a.get("https://medicento-api.herokuapp.com/api/get_city_by_state?state_id="+t).then(function(e){a.setState({cities:e.data.cities,selected_city:e.data.cities[0]})}).catch(function(e){console.log(e)})},a.changeDistributor=function(e){for(var t=[],n=0;n<a.state.all_inventories.length;n++)a.state.all_inventories[n].city==e&&t.push(a.state.all_inventories[n]);a.setState({inventory:t})},a.state={total_distributor_number:0,upmapped_distributor_number:0,states:[],cities:[],all_inventories:[],inventory:[],selected_city:{}},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://medicento-api.herokuapp.com/api/get_states").then(function(t){e.setState({states:t.data.states,cities:t.data.cities,selected_city:t.data.cities[0]})}).catch(function(e){console.log(e)}),h.a.get("https://medicento-api.herokuapp.com/api/getDistributorbyCity").then(function(t){e.setState({all_inventories:t.data.distributors,total_distributor_number:t.data.distributors.length,upmapped_distributor_number:t.data.distributors.length})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){this.state.total_distributor_number,this.state.upmapped_distributor_number;var e=this.state.states,t=this.state.cities,a=[];return void 0!=this.state.selected_city&&"Banglore"==this.state.selected_city.name&&(a=this.state.all_inventories),i.a.createElement("div",{className:"distributor_selection"},i.a.createElement("h1",{className:"upper_heading"},"Mapping Inventory"),i.a.createElement("div",{class:"container"},i.a.createElement("div",{className:"upper_heading_number"},i.a.createElement("div",{className:"total_distributor d-inline-block"},"Total Distributor = ",a.length),i.a.createElement("div",{className:"upmapped_distributor d-inline-block"},"Distributors With Unmapped Inventory = ",a.length)),i.a.createElement("br",null),i.a.createElement("div",{className:"select_state"},i.a.createElement("select",{name:"state",id:"state",onChange:this.changeCity},i.a.createElement("option",{value:"",disabled:!0},"Select State"),e.map(function(e,t){return i.a.createElement("option",{value:e._id,key:t},e.name)})),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("select",{name:"city",id:"city"},i.a.createElement("option",{value:"",disabled:!0},"Select City"),t.map(function(e,t){return i.a.createElement("option",{value:e._id,key:t},e.name)})),i.a.createElement("div",null,i.a.createElement("table",{className:"table",style:{marginTop:"10px"}},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Distributor Name"),i.a.createElement("th",null,"Edit Inventory"))),i.a.createElement("tbody",null,a.map(function(e){return i.a.createElement("tr",null,i.a.createElement("td",null,e.inventory_name),i.a.createElement("td",null,i.a.createElement(p.b,{to:"/inventory_mapping/"+e.medi_code+"/"},i.a.createElement("button",{className:"btn btn-primary"},"Edit"))))})))))))}}]),t}(n.Component)),y=(a(67),n.Component,function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).state={is_logged_in:e.is_logged_in},a.changeLogin=e.changeLogin,a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.is_logged_in;return i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},i.a.createElement(p.b,{to:"/",className:"navbar-brand"},"Medicento"),i.a.createElement("button",{className:"navbar-toggler"},i.a.createElement("span",{className:"navbar-toggler-icon","data-toggle":"collapse","data-target":"#menu"})),i.a.createElement("div",{className:"collapse navbar-collapse",id:"menu"},t?i.a.createElement("ul",{className:"navbar-nav ml-auto"},i.a.createElement("li",{className:"nav-item"},i.a.createElement(p.b,{to:"/inventory_selection",className:"nav-link"},"Distributor Selection")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(p.b,{to:"/login",className:"nav-link",onClick:function(){return e.changeLogin(!1)}},"Logout"))):i.a.createElement("ul",{className:"navbar-nav ml-auto"},i.a.createElement("li",{className:"nav-item"},i.a.createElement(p.b,{to:"/login",className:"nav-link"},"Login")))))}}]),t}(n.Component)),S=function(e){function t(){return Object(c.a)(this,t),Object(r.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null)}}]),t}(n.Component),N=(a(68),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).setEamilValue=function(e){var t=e.target.value;a.setState({email:t})},a.setPasswordValue=function(e){var t=e.target.value;a.setState({password:t})},a.sendLoginRequest=function(e){e.preventDefault(),a.setState({isLoading:!0});var t=new FormData;t.append("email",a.state.email),t.append("password",a.state.password),console.log(t),h.a.post("https://medicento-api.herokuapp.com/api/login",t).then(function(e){"User Found"===e.data.message&&(a.changeLogin(!0),a.setState({isLoading:!1}),a.props.history.push("/"))}).catch(function(e){console.log(e),a.setState({isLoading:!1})})},a.state={email:"",password:"",isLoading:!1},a.changeLogin=e.changeLogin,a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"login"},i.a.createElement("div",{className:"container"},i.a.createElement("form",{className:"login_form",onSubmit:this.sendLoginRequest},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"exampleInputEmail"},"Email address"),i.a.createElement("input",{type:"email",className:"form-control",onChange:this.setEamilValue,id:"exampleInputEmail",placeholder:"Enter email"})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{htmlFor:"exampleInputPassword"},"Password"),i.a.createElement("input",{type:"password",className:"form-control",id:"exampleInputPassword",onChange:this.setPasswordValue,placeholder:"Password"})),this.state.isLoading?i.a.createElement("div",{className:"loader"},i.a.createElement("img",{src:"https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif",height:"100",width:"250",alt:""})):null,i.a.createElement("div",{className:"form-group-submit"},i.a.createElement("input",{type:"submit",value:"Login",className:"btn btn-primary"})))))}}]),t}(n.Component)),L=Object(u.d)(N),k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).state={is_logged_in:!1},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"changeLogin",value:function(e){this.setState({is_logged_in:e})}},{key:"render",value:function(){var e=this;return i.a.createElement(p.a,null,i.a.createElement("div",{className:"App"},i.a.createElement(y,{is_logged_in:this.state.is_logged_in,changeLogin:this.changeLogin.bind(this)}),i.a.createElement(u.a,{exact:!0,path:"/",component:S}),i.a.createElement(u.a,{path:"/inventory_mapping/:id",component:_}),i.a.createElement(u.a,{path:"/inventory_selection",component:f}),i.a.createElement(u.a,{path:"/login",render:function(){return i.a.createElement(L,{changeLogin:e.changeLogin.bind(e)})}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.42724a8c.chunk.js.map