"use strict";(globalThis["webpackChunkquasar_chat"]=globalThis["webpackChunkquasar_chat"]||[]).push([[259],{8478:(t,e,r)=>{r.d(e,{D3:()=>o,MN:()=>a,T8:()=>l,VC:()=>c,e8:()=>d,mb:()=>s});var i=r(8010);const a=i.ZP`
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
`,d=i.ZP`
  mutation removeProductFromFavorites($id: bigint!) {
    delete_favorites_by_pk(id: $id) {
      id
    }
  }
`,s=i.ZP`
  mutation removeProductFromCarts($id: bigint!) {
    delete_carts_by_pk(id: $id) {
      id
    }
  }
`,l=i.ZP`
  mutation removeProductFromCarts($id: bigint!) {
    delete_products_by_pk(id: $id) {
      id
    }
  }
`},4867:(t,e,r)=>{r.d(e,{A4:()=>c,BY:()=>l,CP:()=>m,F5:()=>_,N5:()=>d,Nj:()=>g,OA:()=>s,Oc:()=>n,Q:()=>u,SZ:()=>a,_l:()=>o,c:()=>p,ff:()=>y});var i=r(8010);const a=i.ZP`
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
`,d=i.ZP`
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
`,s=i.ZP`
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
`,l=i.ZP`
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
`,n=t=>{if("Все"===t){const t=i.ZP`
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
    `;return t}{const t=i.ZP`
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
    `;return t}},u=t=>{if("Все"===t){const t=i.ZP`
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
    `;return t}{const t=i.ZP`
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
    `;return t}},p=t=>{if("Все"===t){const t=i.ZP`
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
    `;return t}{const t=i.ZP`
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
    `;return t}},_=t=>{if("Все"===t){const t=i.ZP`
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
    `;return t}{const t=i.ZP`
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
    `;return t}},g=t=>{if("Все"===t){const t=i.ZP`
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
    `;return t}{const t=i.ZP`
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
    `;return t}},y=i.ZP`
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
`,m=i.ZP`
  query {
    categories {
      category_name
    }
  }
`},3259:(t,e,r)=>{r.r(e),r.d(e,{default:()=>H});r(9665);var i=r(9835),a=r(6970),c=r(499),o=r(8339),d=r(4886),s=r(8478),l=r(4867),n=r(9302);const u=t=>((0,i.dD)("data-v-068a6a8a"),t=t(),(0,i.Cn)(),t),p={class:"text-h3 text-center q-mt-lg"},_={class:"row wrap q-pa-lg"},g={class:"col-sm-3 col-xs-12 q-pa-lg categories-area"},y=u((()=>(0,i._)("div",{class:"q-pa-md",style:{"font-weight":"700"}},"Категории",-1))),m={class:"col-sm-8 col-xs-12 offset-md-1 row wrap product-information"},q={class:"col-md-5 col-sm-12 col-xs-12 q-mb-lg"},w={class:"col-md-6 col-xs-12 offset-md-1 col-sm-12 relative-position text-information"},v={class:"buy-area text-h4 absolute-bottom text-red text-weight-bold"},$=u((()=>(0,i._)("div",{class:"text-center text-h3"}," Похожие товары ",-1))),b={class:"q-pa-lg"},h={class:"row justify-start items-center q-gutter-xs q-col-gutter no-wrap"},f={class:"img-container"},P={class:"q-mt-md text-weight-bold"},Z={class:"price-area row q-ml-sm"},x={class:"price col-4 text-red"},k={key:0,class:"old-price col-4 text-grey"},S={__name:"MIAProduct",setup(t){const e=(0,n.Z)(),r=(0,c.iH)(1),{refetch:u}=(0,d.aM)(l.N5),{mutate:S}=(0,d.Db)(s.VC),I=async t=>{const r=window.Clerk.user;if(!r)return;const{result:i,refetch:a}=(0,d.aM)(l.A4,{productId:t});if(i.value?.carts&&i.value?.carts.length)return void e.notify({type:"warning",message:"Товар уже есть в корзине!"});e.notify({type:"positive",message:"Товар добавлен в корзину!"});const{data:c}=await S({productId:t});u(),a()},C=(0,d.aM)(l.CP),D=(0,i.Fl)((()=>C.result.value?.categories??[])),F=(0,o.yj)(),U=(0,c.iH)({id:+F.params.id}),j=(0,d.aM)((0,i.Fl)((()=>l.OA)),U),z=t=>t===W.value?.category,W=(0,i.Fl)((()=>j.result.value?.products[0]??[])),M=(0,i.Fl)((()=>(0,d.aM)((()=>l.ff),{text:W.value?.category}).result.value?.products??[])),Q=()=>{let t;t=document.body.clientWidth>600?4:2;let e=[],r=[];return M.value.forEach(((i,a)=>{r.push(i),(a+1)%t==0&&(e.push(r),r=[])})),e};return(t,e)=>{const o=(0,i.up)("q-item"),d=(0,i.up)("q-list"),s=(0,i.up)("q-img"),l=(0,i.up)("q-btn"),n=(0,i.up)("router-link"),u=(0,i.up)("q-carousel-slide"),S=(0,i.up)("q-carousel");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",p,(0,a.zw)((0,c.SU)(W).title),1),(0,i._)("div",_,[(0,i._)("div",g,[y,(0,i.Wm)(d,null,{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)((0,c.SU)(D),(t=>((0,i.wg)(),(0,i.j4)(o,{class:(0,a.C_)(["q-pa-md",{"active-category":z(t.category_name)}]),key:t.category_name},{default:(0,i.w5)((()=>[(0,i.Uk)((0,a.zw)(t.category_name),1)])),_:2},1032,["class"])))),128))])),_:1})]),(0,i._)("div",m,[(0,i._)("div",q,[(0,i.Wm)(s,{src:(0,c.SU)(W).image},null,8,["src"])]),(0,i._)("div",w,[(0,i._)("p",null,(0,a.zw)((0,c.SU)(W).description),1),(0,i._)("div",v,[(0,i._)("div",null,(0,a.zw)((0,c.SU)(W).price)+" Р",1),(0,i.Wm)(l,{onClick:e[0]||(e[0]=t=>I((0,c.SU)(W).id)),flat:"",class:"btn-tocart q-mt-xl",label:"В корзину"})])])])]),$,(0,i._)("div",b,[(0,i.Wm)(S,{modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=t=>r.value=t),"transition-prev":"slide-right","transition-next":"slide-left",swipeable:"",animated:"","control-color":"primary",navigation:"",padding:"",arrows:""},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(Q(),((t,e)=>((0,i.wg)(),(0,i.j4)(u,{name:e+1,class:"column no-wrap",key:t[e]},{default:(0,i.w5)((()=>[(0,i._)("div",h,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t,(t=>((0,i.wg)(),(0,i.iD)("div",{class:"col-sm-3 col-6",key:t.id},[(0,i.Wm)(n,{class:"block",to:{name:"Product",params:{id:t.id}}},{default:(0,i.w5)((()=>[(0,i._)("div",f,[(0,i.Wm)(s,{class:"rounded-borders img",src:t.image},null,8,["src"])])])),_:2},1032,["to"]),(0,i._)("div",P,[(0,i.Wm)(n,{class:"product__title",to:{name:"Product",params:{id:t.id}}},{default:(0,i.w5)((()=>[(0,i.Uk)((0,a.zw)(t.title),1)])),_:2},1032,["to"])]),(0,i._)("div",null,(0,a.zw)(t.description),1),(0,i._)("div",Z,[(0,i._)("div",x,"От "+(0,a.zw)(t.price)+" Р",1),t.old_price?((0,i.wg)(),(0,i.iD)("div",k," От "+(0,a.zw)(t.old_price)+" Р ",1)):(0,i.kq)("",!0)])])))),128))])])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"])])],64)}}};var I=r(1639),C=r(3246),D=r(490),F=r(335),U=r(9379),j=r(960),z=r(1694),W=r(9984),M=r.n(W);const Q=(0,I.Z)(S,[["__scopeId","data-v-068a6a8a"]]),H=Q;M()(S,"components",{QList:C.Z,QItem:D.Z,QImg:F.Z,QBtn:U.Z,QCarousel:j.Z,QCarouselSlide:z.Z})}}]);