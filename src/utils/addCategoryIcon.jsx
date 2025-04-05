import ChilledIcon from "../components/svg/ChilledIcon";
import CoffeeIcon from "../components/svg/CoffeeIcon";
import DairyIcon from "../components/svg/DairyIcon";
import MiscIcon from "../components/svg/MiscIcon";
import PowderIcon from "../components/svg/PowderIcon";
import SauceIcon from "../components/svg/SauceIcon";
import SyrupIcon from "../components/svg/SyrupIcon";
import TeaIcon from "../components/svg/TeaIcon";
import CakeIcon from "../components/svg/CakeIcon"
import PastryIcon from "../components/svg/PastryIcon"

function AddCategoryIcon(props){
    console.log(props.category)
    switch (props.category) {
        case 'chilled':
            return (
            <ChilledIcon />
            )
        case 'coffee':
            return (
            <CoffeeIcon />
            )
        case 'dairy':
            return (
            <DairyIcon />
            )
        case 'misc':
            return (
            <MiscIcon />
            )
        case 'powder':
            return (
            <PowderIcon />
            )
        case 'sauce':
            return (
            <SauceIcon />
            )
        case 'syrup':
            return (
            <SyrupIcon />
            )
        case 'tea':
            return (
            <TeaIcon />
            )
        case 'cake':
            return (
            <CakeIcon />
            )
        case 'pastry':
            return (
            <PastryIcon />
            )
        default:
            return(<></>)
    }
    
}

export default AddCategoryIcon