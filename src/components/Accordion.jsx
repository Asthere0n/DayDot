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
    let productAccordion = productsList.map(product => (
        <ProductButton key={product.id} product={product} onProductSelect={props.onProductSelect} />
    ));

    return (<ul id="itemList">
        <div id="filter-list">
            <button className="filter cake"><CakeIcon /></button>
            <button className="filter chilled"><ChilledIcon /></button>
            <button className="filter coffee"><CoffeeIcon /></button>
            <button className="filter dairy"><DairyIcon /></button>
            <button className="filter misc"><MiscIcon /></button>
            <button className="filter pastry"><PastryIcon /></button>
            <button className="filter powder"><PowderIcon /></button>
            <button className="filter sauce"><SauceIcon /></button>
            <button className="filter syrup"><SyrupIcon /></button>
            <button className="filter tea"><TeaIcon /></button>
        </div>
        <div id="productScroll">
            {productAccordion}
        </div>
    </ul>)
}

export default Accordion