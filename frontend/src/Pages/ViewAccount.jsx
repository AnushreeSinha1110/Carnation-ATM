import { useEffect, useState } from "react"
import AccountDetailRow from "../Components/AccountDetailRow"
import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Container, Col, Row, Button } from "react-bootstrap";
import AddTransaction from "./AddTransaction";
import CurrencyConversion from "../Components/CurrencyConversion";
import ViewTransaction from "./ViewTransaction";
import CardDetails from "./CardDetails";


function ViewAccount(props) {
    const [data, setData] = useState([]);
    const [currencyConversionShow, setCurrencyConversionShow] = useState(false);
    const [entryConversion, setEntryConversion] = useState({});

    const [accountOpertaion, setAccountOperation] = useState(0);
    const operationLabel = ["nothing", "conversion", "transaction", "history", "addcard"];

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


    const handleAccountOperation = () => {
        switch (accountOpertaion) {
            case 0:
                return <></>
            case 1:
                return <CurrencyConversion amount={entryConversion.balance} />;
            case 2:
                return <AddTransaction account={entryConversion} />;
            case 3:
                return <ViewTransaction />;
            case 4:
                return <CardDetails account={entryConversion} />;
            default:
                return <></>
        }
    }


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
                {/* {currencyConversionShow && <CurrencyConversion  />} */}
            </Col>
            {currencyConversionShow &&
                <Row>
                    <Col>
                        <Button onClick={(e) => setAccountOperation(1)}>
                            Currency Conversion
                        </Button>
                    </Col>
                    <Col>
                        <Button onClick={(e) => setAccountOperation(2)}>
                            Perform a transaction
                        </Button>
                    </Col>
                    <Col>
                        <Button onClick={(e) => setAccountOperation(3)}>
                            Show transaction history
                        </Button>
                    </Col>
                    <Col>
                        <Button onClick={(e) => setAccountOperation(4)}>
                            Add Card
                        </Button>
                    </Col>
                    {/* <AddTransaction account={entryConversion}/> */}
                </Row>
            }

            <Row>
                {currencyConversionShow && handleAccountOperation()}
            </Row>
        </Container>
    )

}

export default ViewAccount;