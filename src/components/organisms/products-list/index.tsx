import ProductCard from "../../molecules/product-card";
import { IProductsListProps } from "./interface";

  
  export default function ProductList({products}:IProductsListProps) {
    return (
    <div >

    {products.map((product,index)=>{
        return <ProductCard key={index} {...product} onClick={()=>{}}/>
    })}
    </div>
    );
  }
  