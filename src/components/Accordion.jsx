import productsList from "../utils/productsList"
import ProductButton from "./ProductButton"

function Accordion(props){
    let productAccordion = productsList.map(product => (
        <ProductButton key={product.id} product={product} onProductSelect={props.onProductSelect} />
    ));

    return(<ul id="itemList">
        {productAccordion}
    </ul>)
}

export default Accordion