import { useEffect, useState } from "react"
import TransactionDetailRow from "../Components/TransactionDetailRow"
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import TransactionDetailRow2 from "../Components/TransactionDetailRow2";
import transferType from "../Utilities/TransaferType";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import { Container, Row, Col } from "react-bootstrap";

function ViewTransaction(props) {

    const [num, setNum] = useState(0);
    const usenum = [
        { id: "2", name: "2" },
        { id: "10", name: "10" },
        { id: "100", name: "All" },
    ];
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [accNum, setAccNum] = useState(props.id !== undefined ? props.id : "");
    const [type, setType] = useState(0);
    const [sr, setSr] = useState(false);
    const [nsr, setNsr] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    let handleSubmit = async (e) => {
        e.preventDefault();
        setSr(false);
        setNsr(false);
        try {

            let res = await fetch(`http://localhost:5277/api/Transaction/GetTransaction/` + accNum, {
                method: "GET"
            }).then((res) => res.json())
                .then((d) => setData2(d))
                .then((v) => setIsVisible(true))


            let resJson = await res.json();
            console.log(resJson);
            setData2(resJson);

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




    return (<Container>
        <Col></Col>
        <Col sm={10}>

            <Form>
                <Form.Group className="mb-3" controlId="accountId">
                    <Form.Label>Account ID</Form.Label>
                    <Form.Control type="text" placeholder="Enter Account ID" value={accNum} onChange={(e) => setAccNum(e.target.value)} />

                </Form.Group>
                {/* <Link to={`/dashboard`}> */}
                <Button variant="primary" onClick={(e) => handleSubmit(e)}>
                    Search
                </Button>
                {/* </Link> */}
            </Form>

            <DropdownButton id="dropdown-basic-button" title={usenum[num].name} onSelect={setNum}>
                {usenum.map((element, index) => {
                    return (
                        <Dropdown.Item eventKey={index}>{element.name}</Dropdown.Item>
                    )
                })}</DropdownButton>


            {isVisible && <div>
                <MDBTable>
                    <MDBTableHead>
                        <tr>
                            <th scope='col'>Account number</th>
                            <th scope='col'>Transaction Id</th>
                            <th scope='col'>Amount</th>
                            <th scope='col'>Time Stamp</th>
                            <th scope='col'>Type</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>

                        {data2.slice(0, parseInt(usenum[num].id)).map((entry) => {
                            return <TransactionDetailRow2 key={entry.aid} entry={entry} />
                        })}
                    </MDBTableBody>
                </MDBTable>
            </div>}

        </Col>

    </Container>

    )

}

export default ViewTransaction;