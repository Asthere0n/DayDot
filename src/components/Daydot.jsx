import calculateExpiringDate from "../utils/calculateExpiringDate"
import productsList from "../utils/productsList"

function Daydot(props){
    // Fetching the info from the productList
    const productToLabel = props.currentProduct || productsList[0]

    // Stablishing the week abbreviation and color code
    const weekday = [   
    'MON',      'TUE',      'WED',      'THU',      'FRI',      'SAT',      'SUN'   ]
    const dayColor = [
    'blue',     'yellow',   'red',      'brown',    'green',    'pink',     'black' ]

    // Calculating the expiring date and formatting it to be displayed
    const expiringDate = calculateExpiringDate(productToLabel)
    const expiringFormatted = `${expiringDate.getDate()}/${expiringDate.getMonth() + 1}`
    const expiringWeekDay = expiringDate.getDay()
    

    return (<>
        <div id="content" >
            <h2>{productToLabel.name}</h2>
            <div id="Daydot" style={{ backgroundColor: dayColor[expiringWeekDay] }}>
                <h3>{weekday[expiringWeekDay]}</h3>
                <p>{expiringFormatted}</p>
            </div>
        </div>
    </>)
}

export default Daydot