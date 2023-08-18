import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
function CustomerDetailRow({entry}) {
    return(
        <tr>
        {/* <th scope='row'></th> */}
        <td>{entry.id}</td>
        <td onClick={() => alert("HEllo")}>{entry.name}</td>
        <td>{entry.phone}</td>
        <td>{entry.age}</td>
        <td>{entry.gender}</td>
        <td>{entry.address}</td>
        <td>{entry.city}</td>
        <td>{entry.pincode}</td>
        <td><Link  to="#">Edit</Link></td>
      </tr>
    )
}


export default CustomerDetailRow;