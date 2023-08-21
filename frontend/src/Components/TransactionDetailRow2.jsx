import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
function TransactionDetailRow2({entry}) {
    return(
        <tr>
                        {/* <th scope='row'></th> */}
                        <th scope='row'>{entry.aid}</th>
                        <td>{entry.tid}</td>
                        <td>{entry.amount}</td>
                        <td>{entry.timestamp}</td>
                        <td>{entry.type}</td>
                        
                      </tr>
      
    )
}


export default TransactionDetailRow2;