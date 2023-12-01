import productPreview from "../components/productPreview";
import { useParams } from "react-router-dom";

function SingleProduct() {
    const { id } = useParams()
    return (
       <>
          <h1>single Product {id}</h1>
          <productPreview /> 
       </>
    
    );        
 }
 
 export default SingleProduct;