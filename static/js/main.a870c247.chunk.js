(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],{25:function(e,a,t){e.exports=t(40)},30:function(e,a,t){},35:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(21),i=t.n(r),l=(t(30),t(9)),s=t(10),o=t(12),u=t(11),m=t(13),p=t(2),h=t(7);var d=function(e){return n.a.createElement("div",{className:"o-recep"},n.a.createElement("h1",null," ",e.recepe.label," "),n.a.createElement("img",{src:e.recepe.image,alt:"what the recepie would look like"}),n.a.createElement("div",{className:"more"},n.a.createElement("h3",null,"To see more Details"),n.a.createElement(h.b,{to:"/recipe/".concat(e.recepe.uri.split("recipe_")[1]),className:"Link"},"HERE")))},f=function(e){function a(){return Object(l.a)(this,a),Object(o.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"recepies-container"},0===this.props.data1.length?n.a.createElement("h1",{className:"replacingHeader"},'Please Search for a food for Example: "chicken"'):n.a.createElement("div",{className:"wrapper"},this.props.data1.map((function(e,a){return n.a.createElement(d,{recepe:e.recipe,key:a})}))))}}]),a}(c.Component),E=(t(35),function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(u.a)(a).call(this,e))).state={detailedData:{}},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,a="http://www.edamam.com/ontologies/edamam.owl#recipe_".concat(this.props.id);0===this.props.data1.length?fetch("https://api.edamam.com/search?q=".concat(this.props.id,"&app_id=d9f74858&app_key=6810f9ebfe70f3fb9cc51c6382cf7c29")).then((function(e){return e.json()})).then((function(a){return e.setState({detailedData:a.hits[0]})})):this.setState({detailedData:this.props.data1.find((function(e){return e.recipe.uri===a}))})}},{key:"render",value:function(){var e=this.state.detailedData;return console.log(e),n.a.createElement("div",null,n.a.createElement("div",{className:"header"},n.a.createElement(h.b,{to:"/"},n.a.createElement("button",{className:"bb"},"GO Back"))),n.a.createElement("div",{className:"detailedData"},0!==Object.keys(e).length&&n.a.createElement("div",{className:"contain"},n.a.createElement("h1",{className:"rTitle"}," ",e.recipe.label," "),n.a.createElement("div",{className:"rec-container"},n.a.createElement("img",{src:e.recipe.image,alt:"the coocked food",className:"dfoopic"}),n.a.createElement("div",{className:"rec-info"},n.a.createElement("p",null,"this recepi contains ",Math.round(e.recipe.calories),"calories"),n.a.createElement("div",null,n.a.createElement("p",null,"To coock this beatiful recipe all you need is:"),n.a.createElement("ul",{className:"list-ing"},e.recipe.ingredientLines.map((function(e,a){return n.a.createElement("li",{key:a}," ",e," ")}))),n.a.createElement("h3",null,"TO see full recepie"," ",n.a.createElement("a",{target:"_blank",href:e.recipe.url,rel:"noopener noreferrer"},"Click Here!"))))))))}}]),a}(c.Component)),b=t(23),v=t(24);var g=function(e){return n.a.createElement("div",{className:"nav"},n.a.createElement("div",{className:"nav-items"},n.a.createElement("h1",null,"Receipe APP"),n.a.createElement("form",{onSubmit:function(a){e.searchReceipe(a)},className:"search"},n.a.createElement("input",{type:"text",onChange:function(a){e.changeQuery(a.target.value)},placeholder:"Search..",className:"text-area"}),n.a.createElement("button",{className:"submit"},n.a.createElement(b.a,{icon:v.a})))))},y=(t(39),function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(o.a)(this,Object(u.a)(a).call(this,e))).changeQuery=function(e){t.setState({query:e})},t.searchReceipe=function(e){e.preventDefault(),fetch("https://api.edamam.com/search?q=".concat(t.state.query,"&app_id=d9f74858&app_key=6810f9ebfe70f3fb9cc51c6382cf7c29")).then((function(e){return e.json()})).then((function(e){return t.setState({data1:e.hits,data2:e})}))},t.state={query:"",data1:[],data2:{}},t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App"},n.a.createElement(g,{changeQuery:this.changeQuery,searchReceipe:this.searchReceipe}),n.a.createElement(p.c,null,n.a.createElement(p.a,{exact:!0,path:"/",render:function(){return n.a.createElement(f,{changeQuery:e.changeQuery,searchReceipe:e.searchReceipe,data1:e.state.data1})}}),n.a.createElement(p.a,{exact:!0,path:"/recipe/:uri",render:function(a){return n.a.createElement(E,{id:a.match.params.uri,data1:e.state.data1})}}),n.a.createElement(p.a,{render:function(){return n.a.createElement(f,{changeQuery:e.changeQuery,searchReceipe:e.searchReceipe,data1:e.state.data1})}})))}}]),a}(n.a.Component));i.a.render(n.a.createElement(h.a,null,n.a.createElement(y,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.a870c247.chunk.js.map