(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),c=a.n(r),i=a(10),l=a(21),s=a(4),u=a(5),h=a(7),d=a(6),m=a(1),p=function(e){var t=e.handleLoadMoreButton;return Object(m.jsx)("button",{className:"Button",type:"button",onClick:t,children:"Load more"})},b=function(e){var t=e.webformatURL,a=e.handleClick,n=e.user;return Object(m.jsx)("li",{className:"ImageGalleryItem",children:Object(m.jsx)("img",{src:t,alt:n,className:"ImageGalleryItem-image",onClick:a})})},j=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return Object(m.jsx)("ul",{className:"ImageGallery",children:this.props.data.map((function(t){return Object(m.jsx)(b,{id:t.id,user:t.user,webformatURL:t.webformatURL,handleClick:function(){return e.props.handleClick(t)}},t.id)}))})}}]),a}(n.PureComponent),g=a(19),f=a.n(g),O=document.querySelector("#modal-root"),y=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={},e.handleKeyDown=function(t){return"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){return t.target===t.currentTarget&&e.props.onClose()},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(r.createPortal)(Object(m.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(m.jsx)("div",{className:"Modal",children:this.props.children})}),O)}}]),a}(n.Component),v=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={value:""},e.handleInput=function(t){var a=t.target.value;e.setState({value:a})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.value)},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(m.jsx)("header",{className:"Searchbar",children:Object(m.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(m.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(m.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(m.jsx)("input",{onChange:this.handleInput,className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),w=a(20),k=a.n(w),S=function(e,t,a){return k.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(a,"&key=").concat("20744853-e6e709f705befc52cb2e1c259","&image_type=photo&orientation=horizontal&per_page=").concat(t)).then((function(e){return e.data.hits}))},x=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).initialState={query:"",data:[],page:1,perPage:12,largeImage:"",showLoader:!1,showModal:!1},e.state=Object(l.a)({},e.initialState),e.fetchImages=function(){var t=e.state,a=t.query,n=t.page,o=t.perPage;e.setState({showLoader:!0}),S(a,o,n).then((function(t){e.setState((function(e){var a=e.data,n=e.page;return{data:[].concat(Object(i.a)(a),Object(i.a)(t)),page:n+1}}))})).catch((function(e){return console.log(e)})).finally((function(){return e.setState({showLoader:!1})}))},e.onSubmit=function(t){e.setState({query:t,page:1,data:[]})},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.handleClick=function(t){e.toggleModal(),e.setState({largeImage:t.largeImageURL})},e}return Object(u.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.query!==this.state.query&&this.fetchImages(),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.showLoader,n=e.showModal;return Object(m.jsxs)("section",{className:"App",children:[Object(m.jsx)(v,{onSubmit:this.onSubmit}),!!t.length&&Object(m.jsx)(j,{toggleModal:this.toggleModal,handleClick:this.handleClick,data:t}),a&&Object(m.jsx)(f.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100,timeout:3e3,style:{marginLeft:"auto",marginRight:"auto"}}),n&&Object(m.jsx)(y,{onClose:this.toggleModal,children:Object(m.jsx)("img",{src:this.state.largeImage,alt:""})}),!!t.length&&!a&&Object(m.jsx)(p,{handleLoadMoreButton:this.fetchImages})]})}}]),a}(n.Component);a(65);c.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(x,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.7a0e8c6d.chunk.js.map