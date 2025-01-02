import ProductCard from "../../molecules/product-card";
import { IProductsListProps } from "./interface";

  
  export default function ProductList({products}:IProductsListProps) {
    return (
    <div >

    {products.map((product)=>{
        return <ProductCard {...product} onClick={()=>{}}/>
    })}
    </div>
    );
  }
  