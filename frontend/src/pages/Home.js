import { Fragment, useEffect, useState } from "react";
import ProductCard from "../components/productCard"; 

export default function Home() {
 const [products,setproduct]= useState([]);
 useEffect(()=>{
  fetch(process.env.REACT_APP_API_URL +'/products').then(res => res.json()).then(res=>setproduct(res.products))

 },[])
  return (
    <Fragment>
      <h1 id="products_heading">Latest Products</h1>

      <section id="products" className="container mt-5">
        <div className="row">

          {products.map(product=><ProductCard product={product}/>)}
          
        </div>
      </section>
    </Fragment>
  );
}
