import { useEffect, useState } from "react"
import AccountDetailRow from "../Components/AccountDetailRow"
import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Container, Col, Row, Button, Modal } from "react-bootstrap";
import AddTransaction from "./AddTransaction";
import CurrencyConversion from "../Components/CurrencyConversion";
import ViewTransaction from "./ViewTransaction";
import CardDetails from "./CardDetails";
import "../styles/ViewAccount.css";
import TransactionDetailRow2 from "../Components/TransactionDetailRow2";



function ApproveCheques(props) {
    const [data, setData] = useState([]);
    const [currencyConversionShow, setCurrencyConversionShow] = useState(false);
    const [entryConversion, setEntryConversion] = useState({});

    const [accountOpertaion, setAccountOperation] = useState(0);
    const operationLabel = ["nothing", "conversion", "transaction", "history", "addcard"];

    const [show, setShow] = useState(false);
    const handleClose = () => {setShow(false); setAccountOperation(0)};
    const handleShow = () => {setShow(true)}

    const fetchInfo = () => {
        console.log("calling fetch now")
        fetch(
            "http://localhost:5277/api/Transaction/GetCheques",
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
                return <ViewTransaction id={entryConversion.id}/>;
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
                    <h4>All Unapproved Cheques</h4>
                    {props.id}
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

                        {data.map((entry) => {
                            return <TransactionDetailRow2 key={entry.aid} entry={entry} />
                        })}
                    </MDBTableBody>
                </MDBTable>

                </div>
            </Col>
            </Container>
    )

}

export default ApproveCheques;