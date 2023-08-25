import AccountDetailRow from "../Components/AccountDetailRow"

import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

import { Container, Row, Col } from "react-bootstrap";
import "../styles/ViewAccount.css";

function ViewAccountsonClick({data, handleShow, setEntryConversion}){
    return <div>
        <Row>
                <Col>
                    <h3>All Accounts</h3>
                    <table class="table table-striped table-responsive tborder">
                        <thead>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>Account Type</th>
                                <th scope='col'>Account Number</th>
                                <th scope='col'>Balance</th>
                                <th scope='col'>Account Owner ID</th>
                                <th scope='col'>Account Operations</th>

                            </tr>
                        </thead>
                        <tbody>
                            {data.map((entry) => {
                                return <AccountDetailRow key={entry.id} entry={entry} setCurrencyConversionShow={handleShow} setEntryConversion={setEntryConversion}/>
                            })}
                        </tbody>
                    </table>
                </Col>
            </Row>
    </div>
}
export default ViewAccountsonClick;