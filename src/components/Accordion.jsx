import productsList from "../utils/productsList"
import ProductButton from "./ProductButton"
import CakeIcon from "./svg/CakeIcon";
import ChilledIcon from "./svg/ChilledIcon";
import CoffeeIcon from "./svg/CoffeeIcon";
import DairyIcon from "./svg/DairyIcon";
import MiscIcon from "./svg/MiscIcon";
import PastryIcon from "./svg/PastryIcon";
import PowderIcon from "./svg/PowderIcon";
import SauceIcon from "./svg/SauceIcon";
import SyrupIcon from "./svg/SyrupIcon";
import TeaIcon from "./svg/TeaIcon";


function Accordion(props) {
    let productAccordion = productsList.sort((a, b) => a.name.localeCompare(b.name));
    productAccordion = productAccordion.map(product => (
        <ProductButton key={product.id} product={product} onProductSelect={props.onProductSelect} />
    ));

    const productFiltering = (category) => {
        const filteredList = productsList.filter((item) => item.category === category)   
        console.log(category.toUpperCase())         
        filteredList.map(item=>console.log(item.name))
    }

    return (<ul id="itemList">
        <div id="filter-list">
            <button className="filter cake" onClick={()=>productFiltering("cake")}><CakeIcon /></button>
            <button className="filter chilled" onClick={()=>productFiltering("chilled")}><ChilledIcon /></button>
            <button className="filter coffee" onClick={()=>productFiltering("coffee")}><CoffeeIcon /></button>
            <button className="filter dairy" onClick={()=>productFiltering("dairy")}><DairyIcon /></button>
            <button className="filter misc" onClick={()=>productFiltering("misc")}><MiscIcon /></button>
            <button className="filter pastry" onClick={()=>productFiltering("pastry")}><PastryIcon /></button>
            <button className="filter powder" onClick={()=>productFiltering("powder")}><PowderIcon /></button>
            <button className="filter sauce" onClick={()=>productFiltering("sauce")}><SauceIcon /></button>
            <button className="filter syrup" onClick={()=>productFiltering("syrup")}><SyrupIcon /></button>
            <button className="filter tea" onClick={()=>productFiltering("tea")}><TeaIcon /></button>
        </div>
        <div id="productScroll">
            {productAccordion}
        </div>
    </ul>)
}

export default Accordion