import AddCategoryIcon from "../utils/addCategoryIcon"
import productsList from "../utils/productsList"

function ProductButton(props){
    const product = props.product
    
    const handleClick = (event)=>{
        const newProductName = event.currentTarget.dataset.productname
        const newProduct = productsList.find((item) => item.name === newProductName)

        props.onProductSelect(newProduct)
    }


    return <li><button key={product.name} className={`productButton ${product.category}`} data-productname={product.name} onClick={handleClick}>{product.name}</button></li>
}

export default ProductButton