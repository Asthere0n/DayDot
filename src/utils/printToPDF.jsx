
import CreateElementToPrint from "./CreateElementToPrint";

async function PrintToPDF () {
    const ContentToPrint = await CreateElementToPrint() 

    return console.log(ContentToPrint);
};

export default PrintToPDF;