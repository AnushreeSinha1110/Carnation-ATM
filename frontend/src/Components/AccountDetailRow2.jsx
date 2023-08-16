import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
function AccountDetailRow2({entry}) {
    return(
        <tr>
        <th scope='row'>{entry.id}</th>
        <td>{entry.aType}</td>
        <td>{entry.accountNumber}</td>
        <td>{entry.balance}</td>
      </tr>
    )
}


export default AccountDetailRow2;