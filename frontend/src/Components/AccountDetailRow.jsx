import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
function AccountDetailRow({entry}) {
    return(
        <tr>
        <th scope='row'></th>
        <td>{entry.aType}</td>
        <td>{entry.accountNumber}</td>
        <td>{entry.balance}</td>
        <td>{entry.accountOwnerId}</td>
      </tr>
    )
}


export default AccountDetailRow;