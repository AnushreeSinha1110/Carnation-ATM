import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
function AccountDetailRow({entry, currencyConversionShow, setCurrencyConversionShow, setEntryConversion}) {

  const handleCurrencyConversion = (e) => {
    e.preventDefault();
    setCurrencyConversionShow(!currencyConversionShow)
    setEntryConversion(entry);
}
    return(
        <tr>
        <th scope='row'>{entry.id}</th>
        <td>{entry.aType}</td>
        <td>{entry.accountNumber}</td>
        <td onClick={handleCurrencyConversion}><a>{entry.balance}</a></td>
        <td>{entry.accountOwnerId}</td>
        <td onClick={handleCurrencyConversion}><a>Perform Account Operations</a></td>

      </tr>
    )
}


export default AccountDetailRow;