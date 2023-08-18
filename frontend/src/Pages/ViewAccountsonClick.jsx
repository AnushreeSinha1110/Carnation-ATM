import AccountDetailRow from "../Components/AccountDetailRow"

import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

import { Container, Row, Col } from "react-bootstrap";
function ViewAccountsonClick(props){
    return <div>
        <Row>
                <Col>

                    <MDBTable>
                        <MDBTableHead>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>Account Type</th>
                                <th scope='col'>Account Number</th>
                                <th scope='col'>Balance</th>
                                <th scope='col'>Account Owner ID</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {props.data.map((entry) => {
                                return <AccountDetailRow key={entry.id} entry={entry} />
                            })}
                        </MDBTableBody>
                    </MDBTable>
                </Col>
            </Row>
    </div>
}
export default ViewAccountsonClick;