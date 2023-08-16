import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
function CustomerDetailRow({entry}) {
    return(
        <tr>
        <th scope='row'></th>
        <td>{entry.name}</td>
        <td>{entry.phone}</td>
        <td>{entry.age}</td>
        <td>{entry.address}</td>
      </tr>
    )
}


export default CustomerDetailRow;