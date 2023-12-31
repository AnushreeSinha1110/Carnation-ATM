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


function ViewAccount(props) {
    const [data, setData] = useState([]);
    const [currencyConversionShow, setCurrencyConversionShow] = useState(false);
    const [entryConversion, setEntryConversion] = useState({});

    const [accountOpertaion, setAccountOperation] = useState(0);
    const operationLabel = ["nothing", "conversion", "transaction", "history", "addcard"];

    const [show, setShow] = useState(false);
    const handleClose = () => {setShow(false); setAccountOperation(0)};
    const handleShow = () => {setShow(true)}

    const [modalShow, setModalShow] = useState(false);

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
                    <h4>All Account Details</h4>
                    {props.id}
                    <table class="table table-striped table-responsive tborder">
                        <thead>
                            <tr >
                                <th scope='col'>#</th>
                                <th scope='col'>Account Type</th>
                                <th scope='col'>Account Number</th>
                                <th scope='col'>Balance</th>
                                <th scope='col'>Account Owner ID</th>
                                <th scope='col'>Operations</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((entry) => {
                                return <AccountDetailRow
                                    key={entry.id}
                                    entry={entry}
                                    setCurrencyConversionShow={handleShow}
                                    setEntryConversion={setEntryConversion}
                                />
                            })}
                        </tbody>
                    </table>
                </div>
            </Col>
            <Col xs lg={2}>
                {/* {currencyConversionShow && <CurrencyConversion  />} */}
            </Col>

            <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Account Operations
                        </Modal.Title>
                    </Modal.Header>
                <Modal.Body>
                <Row>
                    <Col>
                        <Button onClick={(e) => setAccountOperation(1)}>
                            Currency Conversion
                        </Button>
                    </Col>
                    <Col>
                        <Button onClick={(e) => setAccountOperation(2)}>
                            Perform A Transaction
                        </Button>
                    </Col>
                    <Col>
                        <Button onClick={(e) => setAccountOperation(3)}>
                            Show Transaction History
                        </Button>
                    </Col>
                    <Col>
                        <Button onClick={(e) => setAccountOperation(4)}>
                            Add Card
                        </Button>
                    </Col>
                    {/* <AddTransaction account={entryConversion}/> */}
                </Row>

                <Row>
                {handleAccountOperation()}
            </Row>
                </Modal.Body>
                <Modal.Footer>
                        <Button onClick={() => setModalShow(false)}>Close</Button>
                    </Modal.Footer>
            </Modal>
        </Container>
    )

}

export default ViewAccount;