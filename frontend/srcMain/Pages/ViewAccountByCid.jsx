import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AccountDetailRow from "../Components/AccountDetailRow"

import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';




import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";

function ViewAccountByCid() {
    const [data, setData] = useState([]);

    const [cId, setCId] = useState(0);
    const [sr, setSr] = useState(false);
    const [nsr, setNsr] = useState(false);

    let handleSubmit = async (e) => {
        e.preventDefault();
        setSr(false);
        setNsr(false);
        try {
            let res = await fetch(`http://localhost:5277/api/Account/GetByCid?cid=${cId}`, {
                method: "GET"
            });


            let resJson = await res.json();
            console.log(resJson);
            setData(resJson);

            console.log(data);
            if (res.status === 200) {
                setSr(true);
            } else {
                console.log("Here");
                setNsr(true);
            }
        } catch (err) {
            console.log(err);
        }
    };



    return (
        <Container>

            <Row>
                <Col></Col>
                <Col sm={4}>
                    <Form>
                        <Form.Group className="mb-3" controlId="customerId">
                            <Form.Label>Customer ID</Form.Label>
                            <Form.Control type="text" placeholder="Enter customer ID" value={cId} onChange={(e) => setCId(e.target.value)} />

                        </Form.Group>

                        {/* <Link to={`/dashboard`}> */}
                        <Button variant="primary" onClick={(e) => handleSubmit(e)}>
                            Search
                        </Button>
                        {/* </Link> */}
                    </Form>
                </Col>
                <Col></Col>
            </Row>
            {sr && (<Row>
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
                            {data.map((entry) => {
                                return <AccountDetailRow key={entry.id} entry={entry} />
                            })}
                        </MDBTableBody>
                    </MDBTable>
                </Col>
            </Row>)
            }


        </Container>
    )

}

export default ViewAccountByCid;