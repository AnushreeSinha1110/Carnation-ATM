import { useEffect, useState } from "react"
import AccountDetailRow from "../Components/AccountDetailRow"
import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Container, Col, Row } from "react-bootstrap";
import AddTransaction from "./AddTransaction";
import CurrencyConversion from "../Components/CurrencyConversion";


function ViewAccount(props) {
    const [data, setData] = useState([]);
    const [currencyConversionShow, setCurrencyConversionShow] = useState(false);
    const [entryConversion, setEntryConversion] = useState({});

    const fetchInfo = () => {
        console.log("calling fetch now")
        fetch(
            "http://localhost:5277/api/Account",
        ).then((res) => res.json())
            .then((d) => setData(d))

        console.log("called fetch")
    }

    useEffect(() => {
        console.log("going to fetch some data")
        fetchInfo();
        console.log("data is:" + data);
    }, [])
    return (
    <Container>
        <Col xs lg="auto">
            <div>
                Hello from the other side
                {props.id}
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
                    return <AccountDetailRow 
                        key={entry.id} 
                        entry={entry} 
                        currencyConversionShow={currencyConversionShow} 
                        setCurrencyConversionShow={setCurrencyConversionShow}
                        setEntryConversion={setEntryConversion}
                    />
                    })}
                    </MDBTableBody>
                </MDBTable>
            </div>
        </Col>
        <Col xs lg={2}>
        {currencyConversionShow && <CurrencyConversion amount={entryConversion.balance} />}
        </Col>
        <Row>
            <AddTransaction account={entryConversion}/>
        </Row>
    </Container>
    )

}

export default ViewAccount;