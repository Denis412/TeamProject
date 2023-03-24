"use strict";(globalThis["webpackChunkquasar_chat"]=globalThis["webpackChunkquasar_chat"]||[]).push([[633],{8478:(t,e,r)=>{r.d(e,{D3:()=>a,MN:()=>c,T8:()=>n,VC:()=>d,e8:()=>o,mb:()=>s});var i=r(8010);const c=i.ZP`
  mutation enrollProds($productId: bigint!) {
    insert_favorites_one(object: { product_id: $productId }) {
      id
      product_id
    }
  }
`,d=i.ZP`
  mutation Cart($productId: bigint!) {
    insert_carts_one(object: { product_id: $productId }) {
      id
      product_id
    }
  }
`,a=i.ZP`
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
`,o=i.ZP`
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
`,n=i.ZP`
  mutation removeProductFromCarts($id: bigint!) {
    delete_products_by_pk(id: $id) {
      id
    }
  }
`},4867:(t,e,r)=>{r.d(e,{A4:()=>d,BY:()=>n,CP:()=>m,F5:()=>_,N5:()=>o,Nj:()=>g,OA:()=>s,Oc:()=>u,Q:()=>p,SZ:()=>c,_l:()=>a,c:()=>l,ff:()=>y});var i=r(8010);const c=i.ZP`
  query checkProduct($productId: bigint!) {
    favorites(where: { product_id: { _eq: $productId } }) {
      id
    }
  }
`,d=i.ZP`
  query checkProduct($productId: bigint!) {
    carts(where: { product_id: { _eq: $productId } }) {
      id
    }
  }
`,a=i.ZP`
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
`,o=i.ZP`
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
`,n=i.ZP`
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
`,u=t=>{if("Все"===t){const t=i.ZP`
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
    `;return t}},p=t=>{if("Все"===t){const t=i.ZP`
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
    `;return t}},l=t=>{if("Все"===t){const t=i.ZP`
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
`},8633:(t,e,r)=>{r.r(e),r.d(e,{default:()=>S});var i=r(9835),c=r(499),d=r(6970),a=r(4867),o=r(8478),s=r(4886);const n={class:"row"},u={key:0},p={key:1,class:"absolute-center text-h4"},l={class:"col-sm-8 col-xs-12 relative-position q-pl-lg"},_={class:"price-area q-ml-sm"},g={class:"price text-h5 text-red"},y={key:0,class:"cart-information col-sm-4 col-12 q-mt-xl q-px-md"},m={class:"quantity text-h5"},q={class:"text-red text-h6"},$={__name:"MIACart",setup(t){const{result:e,loading:r,error:$,refetch:w}=(0,s.aM)(a.N5),{mutate:b}=(0,s.Db)(o.mb),h=async t=>{const e=window.Clerk.user;if(!e)return;const{data:r}=await b({id:t});w()},P=()=>{let t=0;return e.value?.carts.forEach((e=>{t+=e.product.price})),t};return(t,a)=>{const o=(0,i.up)("q-img"),s=(0,i.up)("q-item-section"),$=(0,i.up)("q-btn"),w=(0,i.up)("q-item"),b=(0,i.up)("q-list");return(0,i.wg)(),(0,i.iD)("div",n,[(0,i.Wm)(b,{class:"q-mt-xl products row col-12 col-sm-8"},{default:(0,i.w5)((()=>[(0,c.SU)(r)?((0,i.wg)(),(0,i.iD)("div",u,"Загрузка...")):(0,c.SU)(r)||(0,c.SU)(e)?.carts.length?((0,i.wg)(!0),(0,i.iD)(i.HY,{key:2},(0,i.Ko)((0,c.SU)(e)?.carts,(t=>((0,i.wg)(),(0,i.j4)(w,{class:"product q-pa-lg q-mb-lg row offset-lg-2 col-lg-8 col-12",key:t.product.id},{default:(0,i.w5)((()=>[(0,i.Wm)(s,{class:"col-sm-4 col-xs-12"},{default:(0,i.w5)((()=>[(0,i.Wm)(o,{src:t.product.image},null,8,["src"])])),_:2},1024),(0,i._)("div",l,[(0,i.Wm)(s,{class:"product__title text-h5 q-mt-md text-weight-bold"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,d.zw)(t.product.title),1)])),_:2},1024),(0,i.Wm)(s,{class:"q-my-md"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,d.zw)(t.product.description),1)])),_:2},1024),(0,i._)("div",_,[(0,i._)("div",g," От "+(0,d.zw)(t.product.price)+" Р ",1)]),(0,i.Wm)($,{onClick:e=>h(t.id),flat:"",class:"btn-tocart bg-primary",label:"Удалить"},null,8,["onClick"])])])),_:2},1024)))),128)):((0,i.wg)(),(0,i.iD)("div",p," Корзина пуста "))])),_:1}),(0,c.SU)(e)?.carts.length?((0,i.wg)(),(0,i.iD)("div",y,[(0,i._)("div",m," Количество товаров: "+(0,d.zw)((0,c.SU)(e)?.carts.length),1),(0,i._)("div",q," Общая цена: "+(0,d.zw)(P())+" Р ",1)])):(0,i.kq)("",!0)])}}};var w=r(1639),b=r(3246),h=r(490),P=r(1233),Z=r(335),f=r(9379),x=r(9984),v=r.n(x);const k=(0,w.Z)($,[["__scopeId","data-v-4db50fa7"]]),S=k;v()($,"components",{QList:b.Z,QItem:h.Z,QItemSection:P.Z,QImg:Z.Z,QBtn:f.Z})}}]);