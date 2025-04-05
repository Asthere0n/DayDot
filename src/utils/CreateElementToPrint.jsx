import { forwardRef } from 'react';
import calculateExpiringDate from './calculateExpiringDate';
import productsList from "./productsList";

function CreateElementToPrint () {

  const weekday = [
    'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
  const dayColor = [
    'blue', 'yellow', 'red', 'brown', 'green', 'pink', 'black']

  return (
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <tbody>
        {productsList.map((item, index) => {
          const expiringDate = calculateExpiringDate(item);
          console.log(item.name,`${expiringDate.getDay()}/${expiringDate.getMonth()}/${expiringDate.getFullYear()}`)
          return (
            <tr key={index}>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>{item.name}</td>
              <td style={{
                padding: '8px', border: '1px solid #ddd', color: `${expiringDate.getDate() == 1 || expiringDate.getDate() == 5 ? 'black' : 'white'
                  }`, backgroundColor: `${dayColor[expiringDate.getDate()]}`
              }}>
                {weekday[expiringDate.getDate()]}
              </td>
              <td style={{ padding: '8px', border: '1px solid #ddd' }}>
                {expiringDate.toLocaleDateString("en-UK", { day: "2-digit", month: "2-digit" })}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CreateElementToPrint;