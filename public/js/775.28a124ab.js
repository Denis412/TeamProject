"use strict";(globalThis["webpackChunkquasar_chat"]=globalThis["webpackChunkquasar_chat"]||[]).push([[775],{8478:(t,e,r)=>{r.d(e,{D3:()=>a,MN:()=>c,T8:()=>n,VC:()=>o,e8:()=>d,mb:()=>s});var i=r(8010);const c=i.ZP`
  mutation enrollProds($productId: bigint!) {
    insert_favorites_one(object: { product_id: $productId }) {
      id
      product_id
    }
  }
`,o=i.ZP`
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
`,n=i.ZP`
  mutation removeProductFromCarts($id: bigint!) {
    delete_products_by_pk(id: $id) {
      id
    }
  }
`},4867:(t,e,r)=>{r.d(e,{A4:()=>o,BY:()=>n,CP:()=>m,F5:()=>_,N5:()=>d,Nj:()=>g,OA:()=>s,Oc:()=>u,Q:()=>p,SZ:()=>c,_l:()=>a,c:()=>l,ff:()=>y});var i=r(8010);const c=i.ZP`
  query checkProduct($productId: bigint!) {
    favorites(where: { product_id: { _eq: $productId } }) {
      id
    }
  }
`,o=i.ZP`
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
`},4775:(t,e,r)=>{r.r(e),r.d(e,{default:()=>S});var i=r(9835),c=r(499),o=r(6970),a=r(4867),d=r(4886),s=r(8478),n=r(5545),u=r(9302);const p={key:0},l={key:1,style:{margin:"0 auto"},class:"text-center text-h4"},_={class:"col-sm-8 col-xs-12 relative-position q-pl-lg"},g={class:"price-area row q-ml-sm"},y={class:"price col-4 text-h5 text-red"},m={key:0,class:"old-price text-h6 col-4 text-grey"},q={class:"absolute-bottom flex justify-end row q-ml-lg"},$={__name:"MIAFavorites",setup(t){(0,d.UK)(n.Z);const e=(0,u.Z)(),{result:r,loading:$,error:w,refetch:b}=(0,d.aM)(a._l),{refetch:f}=(0,d.aM)(a.N5),{mutate:h}=(0,d.Db)(s.VC),{mutate:Z}=(0,d.Db)(s.e8),P=async t=>{const e=window.Clerk.user;if(!e)return;const{data:r}=await Z({id:t});b()},v=async t=>{const r=window.Clerk.user;if(!r)return;const{result:i}=(0,d.aM)(a.A4,{productId:t});if(i.value?.carts&&i.value?.carts.length)return void e.notify({type:"warning",message:"Товар уже есть в корзине!"});e.notify({type:"positive",message:"Товар добавлен в корзину!"});const{data:c}=await h({productId:t});f()};return(t,e)=>{const a=(0,i.up)("q-img"),d=(0,i.up)("q-item-section"),s=(0,i.up)("q-btn"),n=(0,i.up)("q-item"),u=(0,i.up)("q-list");return(0,i.wg)(),(0,i.j4)(u,{class:"q-mt-xl products row"},{default:(0,i.w5)((()=>[(0,c.SU)($)?((0,i.wg)(),(0,i.iD)("div",p,"Загрузка...")):(0,c.SU)($)||(0,c.SU)(r)?.favorites.length?((0,i.wg)(!0),(0,i.iD)(i.HY,{key:2},(0,i.Ko)((0,c.SU)(r)?.favorites,(t=>((0,i.wg)(),(0,i.j4)(n,{class:"product q-pa-lg q-mb-lg row offset-lg-2 col-lg-8 col-12",key:t.product.id},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{class:"col-sm-4 col-xs-12"},{default:(0,i.w5)((()=>[(0,i.Wm)(a,{src:t.product.image},null,8,["src"])])),_:2},1024),(0,i._)("div",_,[(0,i.Wm)(d,{class:"product__title text-h5 q-mt-md text-weight-bold"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(t.product.title),1)])),_:2},1024),(0,i.Wm)(d,{class:"q-my-md"},{default:(0,i.w5)((()=>[(0,i.Uk)((0,o.zw)(t.product.description),1)])),_:2},1024),(0,i._)("div",g,[(0,i._)("div",y," От "+(0,o.zw)(t.product.price)+" Р ",1),t.product.old_price?((0,i.wg)(),(0,i.iD)("div",m," От "+(0,o.zw)(t.product.old_price)+" Р ",1)):(0,i.kq)("",!0)]),(0,i._)("div",q,[(0,i.Wm)(s,{onClick:e=>v(t.product.id),flat:"",class:"col-5 offset-1 btn-tocart bg-primary",label:"В корзину"},null,8,["onClick"]),(0,i.Wm)(s,{onClick:e=>P(t.id),flat:"",class:"col-5 offset-1 btn-tocart bg-primary",label:"Удалить"},null,8,["onClick"])])])])),_:2},1024)))),128)):((0,i.wg)(),(0,i.iD)("div",l," Список избранного пуст "))])),_:1})}}};var w=r(1639),b=r(3246),f=r(490),h=r(1233),Z=r(335),P=r(9379),v=r(9984),k=r.n(v);const x=(0,w.Z)($,[["__scopeId","data-v-7c25e1c0"]]),S=x;k()($,"components",{QList:b.Z,QItem:f.Z,QItemSection:h.Z,QImg:Z.Z,QBtn:P.Z})}}]);