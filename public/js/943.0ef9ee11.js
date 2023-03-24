"use strict";(globalThis["webpackChunkquasar_chat"]=globalThis["webpackChunkquasar_chat"]||[]).push([[943],{8478:(e,t,r)=>{r.d(t,{D3:()=>o,MN:()=>a,T8:()=>s,VC:()=>c,e8:()=>l,mb:()=>d});var i=r(8010);const a=i.ZP`
  mutation enrollProds($productId: bigint!) {
    insert_favorites_one(object: { product_id: $productId }) {
      id
      product_id
    }
  }
`,c=i.ZP`
  mutation Cart($productId: bigint!) {
    insert_carts_one(object: { product_id: $productId }) {
      id
      product_id
    }
  }
`,o=i.ZP`
  mutation addProductToCatalog(
    $title: String!
    $description: String!
    $price: Int
    $quantity: Int
    $category: String!
    $image: String!
    $old_price: Int
  ) {
    insert_products_one(
      object: {
        title: $title
        description: $description
        price: $price
        old_price: $old_price
        quantity: $quantity
        category: $category
        image: $image
      }
    ) {
      user_id
      title
      description
      price
      old_price
      quantity
      category
      image
    }
  }
`,l=i.ZP`
  mutation removeProductFromFavorites($id: bigint!) {
    delete_favorites_by_pk(id: $id) {
      id
    }
  }
`,d=i.ZP`
  mutation removeProductFromCarts($id: bigint!) {
    delete_carts_by_pk(id: $id) {
      id
    }
  }
`,s=i.ZP`
  mutation removeProductFromCarts($id: bigint!) {
    delete_products_by_pk(id: $id) {
      id
    }
  }
`},4867:(e,t,r)=>{r.d(t,{A4:()=>c,BY:()=>s,CP:()=>v,F5:()=>_,N5:()=>l,Nj:()=>m,OA:()=>d,Oc:()=>u,Q:()=>n,SZ:()=>a,_l:()=>o,c:()=>p,ff:()=>g});var i=r(8010);const a=i.ZP`
  query checkProduct($productId: bigint!) {
    favorites(where: { product_id: { _eq: $productId } }) {
      id
    }
  }
`,c=i.ZP`
  query checkProduct($productId: bigint!) {
    carts(where: { product_id: { _eq: $productId } }) {
      id
    }
  }
`,o=i.ZP`
  query {
    favorites {
      id
      product {
        id
        description
        created_at
        category
        image
        old_price
        price
        quantity
        title
      }
    }
  }
`,l=i.ZP`
  query {
    carts {
      id
      product {
        id
        description
        created_at
        category
        image
        old_price
        price
        quantity
        title
      }
    }
  }
`,d=i.ZP`
  query ($id: bigint!) {
    products(where: { id: { _eq: $id } }) {
      id
      created_at
      title
      user_id
      description
      price
      old_price
      quantity
      image
      category
    }
  }
`,s=i.ZP`
  query ($id: String!){
    products(where: {user_id: {_eq: $id}}) {
    category
    created_at
    description
    id
    image
    old_price
    price
    quantity
    title
  }
}
`,u=e=>{if("Все"===e){const e=i.ZP`
      query {
        products {
          id
          created_at
          title
          description
          price
          quantity
          image
          category
        }
      }
    `;return e}{const e=i.ZP`
      query ($text: String!) {
        products(where: { category: { _eq: $text } }) {
          id
          created_at
          title
          description
          price
          quantity
          image
          category
        }
      }
    `;return e}},n=e=>{if("Все"===e){const e=i.ZP`
      query {
        products(order_by: { created_at: desc }) {
          id
          category
          created_at
          description
          image
          old_price
          price
          quantity
          title
        }
      }
    `;return e}{const e=i.ZP`
      query ($text: String!) {
        products(
          order_by: { created_at: desc }
          where: { category: { _eq: $text } }
        ) {
          id
          category
          created_at
          description
          image
          old_price
          price
          quantity
          title
        }
      }
    `;return e}},p=e=>{if("Все"===e){const e=i.ZP`
      query {
        products(order_by: { price: desc }) {
          id
          category
          created_at
          description
          image
          old_price
          price
          quantity
          title
        }
      }
    `;return e}{const e=i.ZP`
      query ($text: String!) {
        products(
          order_by: { price: desc }
          where: { category: { _eq: $text } }
        ) {
          id
          category
          created_at
          description
          image
          old_price
          price
          quantity
          title
        }
      }
    `;return e}},_=e=>{if("Все"===e){const e=i.ZP`
      query {
        products(order_by: { price: asc }) {
          id
          category
          created_at
          description
          image
          old_price
          price
          quantity
          title
        }
      }
    `;return e}{const e=i.ZP`
      query ($text: String!) {
        products(
          order_by: { price: asc }
          where: { category: { _eq: $text } }
        ) {
          id
          category
          created_at
          description
          image
          old_price
          price
          quantity
          title
        }
      }
    `;return e}},m=e=>{if("Все"===e){const e=i.ZP`
      query ($searchData: String!) {
        products(where: { title: { _ilike: $searchData } }) {
          id
          category
          created_at
          description
          image
          old_price
          price
          quantity
          title
        }
      }
    `;return e}{const e=i.ZP`
      query ($searchData: String!, $text: String!) {
        products(
          where: {
            title: { _ilike: $searchData }
            _and: { category: { _eq: $text } }
          }
        ) {
          id
          category
          created_at
          description
          image
          old_price
          price
          quantity
          title
        }
      }
    `;return e}},g=i.ZP`
  query ($text: String!) {
    products(where: { category: { _eq: $text } }) {
      id
      created_at
      title
      description
      price
      quantity
      image
      category
    }
  }
`,v=i.ZP`
  query {
    categories {
      category_name
    }
  }
`},826:(e,t,r)=>{r.d(t,{Z:()=>y});var i=r(9835),a=r(6970),c=r(1957),o=r(499);const l={class:"price-area row q-ml-sm"},d={class:"price col-4 text-red"},s={key:0,class:"old-price col-4 text-grey"},u={__name:"MIAMainContent",props:{description:String,price:Number,old_price:Number},setup(e){const{description:t,price:r,old_price:u}=e,n=(0,o.iH)(!1),p=(0,o.iH)(),_=(0,o.iH)(),m=()=>{p.value.classList.remove("overflow-hidden"),_.value.className="absolute z-max bg-white rounded-borders q-pa-xs border-width",n.value=!0},g=()=>{p.value.classList.add("overflow-hidden"),_.value.className="",n.value=!1};return(t,r)=>{const o=(0,i.up)("q-btn"),u=(0,i.up)("q-item-section");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(u,{class:"description block q-my-md"},{default:(0,i.w5)((()=>[(0,i._)("div",{ref_key:"descr_parent",ref:p,class:"description-text relative-position overflow-hidden"},[(0,i._)("p",{ref_key:"descr",ref:_,style:{"z-index":"-1"}},[(0,i.Uk)((0,a.zw)(e.description)+" ",1),(0,i.wy)((0,i.Wm)(o,{onClick:g,class:"text-red float-right",flat:"",icon:"close"},null,512),[[c.F8,n.value]])],512),(0,i.wy)((0,i.Wm)(o,{onClick:m,class:"more-btn absolute-right text-blue",flat:"",icon:"more_horiz"},null,512),[[c.F8,e.description.length>40]])],512)])),_:1}),(0,i._)("div",l,[(0,i._)("div",d,"От "+(0,a.zw)(e.price)+" Р",1),e.old_price?((0,i.wg)(),(0,i.iD)("div",s," От "+(0,a.zw)(e.old_price)+" Р ",1)):(0,i.kq)("",!0)])],64)}}};var n=r(1639),p=r(1233),_=r(9379),m=r(9984),g=r.n(m);const v=(0,n.Z)(u,[["__scopeId","data-v-cbada4e6"]]),y=v;g()(u,"components",{QItemSection:p.Z,QBtn:_.Z})},4943:(e,t,r)=>{r.r(t),r.d(t,{default:()=>te});var i=r(9835),a=(r(6727),r(1957)),c=r(6970),o=r(499),l=r(4886),d=r(4867);const s=["onClick"],u={__name:"MIAProductFilter",emits:["useFilter"],setup(e,{emit:t}){const r=(0,l.aM)(d.CP),a=(0,i.Fl)((()=>r.result.value?.categories??[])),u=(0,i.Fl)((()=>document.querySelectorAll(".btn-group__item"))),n=(e,r)=>{u.value.forEach((e=>{e.classList.remove("active")})),t("useFilter",r),u.value[e].classList.add("active")};return(e,t)=>{const r=(0,i.up)("q-item"),l=(0,i.up)("q-list");return(0,i.wg)(),(0,i.j4)(l,{class:"row wrap justify-center btn-group"},{default:(0,i.w5)((()=>[(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[(0,i._)("button",{onClick:t[0]||(t[0]=e=>n(0,"Все")),class:"active btn-group__item no-border"}," Все ")])),_:1}),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,o.SU)(a),((e,t)=>((0,i.wg)(),(0,i.j4)(r,{key:e.category_name},{default:(0,i.w5)((()=>[(0,i._)("button",{onClick:r=>n(t+1,e.category_name),class:"btn-group__item no-border"},(0,c.zw)(e.category_name),9,s)])),_:2},1024)))),128))])),_:1})}}};var n=r(1639),p=r(3246),_=r(490),m=r(9984),g=r.n(m);const v=(0,n.Z)(u,[["__scopeId","data-v-62a3402e"]]),y=v;g()(u,"components",{QList:p.Z,QItem:_.Z});const w={__name:"MIAHeader",props:{id:Number,image:String,title:String},setup(e){const{id:t,image:r,title:a}=e;return(t,r)=>{const a=(0,i.up)("q-img"),o=(0,i.up)("q-item-section"),l=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("header",null,[(0,i.Wm)(l,{class:"block",to:{name:"Product",params:{id:e.id}}},{default:(0,i.w5)((()=>[(0,i.Wm)(o,{class:"product-image-container"},{default:(0,i.w5)((()=>[(0,i.Wm)(a,{class:"product-image",src:e.image},null,8,["src"])])),_:1})])),_:1},8,["to"]),(0,i.Wm)(o,{class:"q-mt-md text-weight-bold"},{default:(0,i.w5)((()=>[(0,i.Wm)(l,{class:"product__title",to:{name:"Product",params:{id:e.id}}},{default:(0,i.w5)((()=>[(0,i.Uk)((0,c.zw)(e.title),1)])),_:1},8,["to"])])),_:1})])}}};var q=r(1233),b=r(335);const f=(0,n.Z)(w,[["__scopeId","data-v-7d84830d"]]),h=f;g()(w,"components",{QItemSection:q.Z,QImg:b.Z});var Z=r(826),$=r(9302),k=r(8478);const x={class:"buttons-area row q-ml-sm q-my-lg"},P={__name:"MIAFooter",props:{product:Object},setup(e){const t=e,r=(0,$.Z)(),a=(0,o.iH)({isFavorite:!1}),{mutate:s}=(0,l.Db)(k.MN),{mutate:u}=(0,l.Db)(k.VC),{refetch:n}=(0,l.aM)(d.N5),{refetch:p}=(0,l.aM)(d._l),{result:_,loading:m,refetch:g}=(0,l.aM)(d.SZ,{productId:t.product.id}),{result:v,refetch:y}=(0,l.aM)(d.A4,{productId:t.product.id}),w=async()=>{const e=window.Clerk.user;if(e)if(_.value.favorites&&_.value.favorites.length)r.notify({type:"warning",message:"Товар уже есть в избранном!"});else{a.value.isFavorite=!0;try{const{data:e}=await s({productId:t.product.id})}catch(i){console.log(i)}g(),p()}},q=async()=>{const e=window.Clerk.user;if(e)if(v.value.carts&&v.value.carts.length)r.notify({type:"warning",message:"Товар уже есть в корзине!"});else{r.notify({type:"positive",message:"Товар добавлен в корзину!"});try{const{data:e}=await u({productId:t.product.id})}catch(i){console.log(i)}n(),y()}},b=()=>{_.value?.favorites&&_.value?.favorites.length&&(a.value.isFavorite=!0)};return(0,i.YP)(m,b),(e,t)=>{const r=(0,i.up)("q-btn");return(0,i.wg)(),(0,i.iD)("div",x,[(0,i.Wm)(r,{onClick:w,class:(0,c.C_)([a.value,"col-2 text-grey"]),icon:"favorite",flat:""},null,8,["class"]),(0,i.Wm)(r,{onClick:q,flat:"",class:"col-6 offset-4 btn-tocart",label:"В корзину"})])}}};var I=r(9379);const F=(0,n.Z)(P,[["__scopeId","data-v-53aabf38"]]),C=F;g()(P,"components",{QBtn:I.Z});const M={class:"wrapper q-pa-sm"},S={__name:"MIAProductItem",props:{product:Object},setup(e){const{product:t}=e;return(t,r)=>{const a=(0,i.up)("q-item");return(0,i.wg)(),(0,i.j4)(a,{class:"product block col-lg-3 col-md-4 col-sm-6 col-xs-12"},{default:(0,i.w5)((()=>[(0,i._)("div",M,[(0,i.Wm)(h,{id:e.product.id,image:e.product.image,title:e.product.title},null,8,["id","image","title"]),(0,i.Wm)(Z.Z,{description:e.product.description,price:e.product.price,old_price:e.product.old_price},null,8,["description","price","old_price"]),(0,i.Wm)(C,{product:e.product},null,8,["product"])])])),_:1})}}},W=(0,n.Z)(S,[["__scopeId","data-v-7a2206e0"]]),D=W;g()(S,"components",{QItem:_.Z});const j={__name:"MIAProducts",props:{products:Array},setup(e){const{products:t}=e;return(t,r)=>{const a=(0,i.up)("q-list");return(0,i.wg)(),(0,i.j4)(a,{class:"row wrap q-mt-xl products"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.products,(e=>((0,i.wg)(),(0,i.j4)(D,{key:e.id,product:e},null,8,["product"])))),128))])),_:1})}}},Q=j,A=Q;g()(j,"components",{QList:p.Z});var H=r(5545);const N=e=>((0,i.dD)("data-v-1ecd24c8"),e=e(),(0,i.Cn)(),e),U=N((()=>(0,i._)("div",{class:"text-h3 text-center"},"Наш ассортимент",-1))),V={class:"row"},z={class:"col-12 col-sm-6 row"},L={class:"col-12 col-sm-6 relative-position"},K={class:"search-menu absolute"},O={style:{"margin-bottom":"16px"}},Y={__name:"MIAAssortment",setup(e){(0,l.UK)(H.Z);const t=(0,o.iH)({text:"Все"}),r=e=>{t.value.text=e,m.value=""},s=(0,o.iH)(),u=(0,o.iH)(),n=()=>{if("Сначала новое"===s.value){const e=(0,l.aM)((0,i.Fl)((()=>(0,d.Q)(t.value.text))),t);w=(0,i.Fl)((()=>e.result.value?.products??[]))}else{const e=(0,l.aM)((0,i.Fl)((()=>(0,d.Oc)(t.value.text))),t);w=(0,i.Fl)((()=>e.result.value?.products??[]))}u.value=null},p=()=>{if("Сначала дорогое"===u.value){const e=(0,l.aM)((0,i.Fl)((()=>(0,d.c)(t.value.text))),t);w=(0,i.Fl)((()=>e.result.value?.products??[]))}else if("Сначала дешевое"===u.value){const e=(0,l.aM)((0,i.Fl)((()=>(0,d.F5)(t.value.text))),t);w=(0,i.Fl)((()=>e.result.value?.products??[]))}else{const e=(0,l.aM)((0,i.Fl)((()=>(0,d.Oc)(t.value.text))),t);w=(0,i.Fl)((()=>e.result.value?.products??[]))}s.value=null},_=(0,o.iH)(""),m=(0,o.iH)(""),g=()=>w.value.filter((e=>e.title.toLowerCase().includes(_.value.toLowerCase()))),v=()=>{m.value=_.value,w=(0,i.Fl)((()=>(0,l.aM)((0,d.Nj)(t.value.text),{searchData:`%${m.value}%`,text:t.value.text}).result.value?.products??[])),_.value=""};let w=(0,i.Fl)((()=>(0,l.aM)((0,d.Nj)(t.value.text),{searchData:`%${m.value}%`,text:t.value.text}).result.value?.products??[]));return(e,t)=>{const l=(0,i.up)("q-select"),d=(0,i.up)("q-btn"),m=(0,i.up)("q-input"),q=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",null,[U,(0,i.Wm)(y,{onUseFilter:r}),(0,i._)("div",V,[(0,i._)("div",z,[(0,i.Wm)(l,{class:"col-6",filled:"",modelValue:s.value,"onUpdate:modelValue":[t[0]||(t[0]=e=>s.value=e),n],options:["Сначала новое","Сначала старое"],"use-chips":"","stack-label":"",label:"Сортировать по дате:"},null,8,["modelValue"]),(0,i.Wm)(l,{class:"col-6",filled:"",modelValue:u.value,"onUpdate:modelValue":[t[1]||(t[1]=e=>u.value=e),p],options:["Сначала дорогое","Сначала дешевое"],"use-chips":"","stack-label":"",label:"Сортировать цене:"},null,8,["modelValue"])]),(0,i._)("div",L,[(0,i.Wm)(m,{onKeyup:(0,a.D2)(v,["enter"]),filled:"","bottom-slots":"",modelValue:_.value,"onUpdate:modelValue":t[2]||(t[2]=e=>_.value=e),label:"Поиск"},{append:(0,i.w5)((()=>[(0,i.Wm)(d,{onClick:(0,a.iM)(v,["stop"]),icon:"add"},null,8,["onClick"])])),_:1},8,["onKeyup","modelValue"]),(0,i.wy)((0,i._)("div",K,[(0,i.wy)((0,i._)("div",O," Ничего не найдено ",512),[[a.F8,!g().length]]),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(g(),(e=>((0,i.wg)(),(0,i.iD)("div",{key:e.id},[(0,i.Wm)(q,{class:"block",to:{name:"Product",params:{id:e.id}}},{default:(0,i.w5)((()=>[(0,i.Uk)((0,c.zw)(e.title),1)])),_:2},1032,["to"])])))),128))],512),[[a.F8,_.value.length>2]])])]),(0,i.Wm)(A,{products:(0,o.SU)(w)},null,8,["products"])])}}};var B=r(4055),T=r(6611);const E=(0,n.Z)(Y,[["__scopeId","data-v-1ecd24c8"]]),G=E;g()(Y,"components",{QSelect:B.Z,QInput:T.Z,QBtn:I.Z});const J={class:"flex justify-end q-mt-md"},R={__name:"MIAHomePage",setup(e){return(e,t)=>{const r=(0,i.up)("q-btn"),a=(0,i.up)("router-link"),c=(0,i.up)("q-page");return(0,i.wg)(),(0,i.j4)(c,null,{default:(0,i.w5)((()=>[(0,i._)("div",J,[(0,i.Wm)(a,{to:{name:"AddItem"},class:"link link-btn text-black"},{default:(0,i.w5)((()=>[(0,i.Wm)(r,null,{default:(0,i.w5)((()=>[(0,i.Uk)(" Добавить товар ")])),_:1})])),_:1})]),(0,i.Wm)(G)])),_:1})}}};var X=r(9885);const ee=R,te=ee;g()(R,"components",{QPage:X.Z,QBtn:I.Z})}}]);