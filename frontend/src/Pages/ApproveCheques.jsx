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
import transferType from '../Utilities/TransaferType';


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


    const handleActivate = (tid) =>async(e)=> {
        let res=await fetch(`http://localhost:5277/api/Transaction/ApproveCheque?trnscId=${tid}`,{method:"PUT"} );
        


            let resJson = await res.json();
            console.log(resJson);
            if(res.status===200)
            alert("Cheque approved")
            fetch(
                "http://localhost:5277/api/Transaction/GetCheques",
            ).then((res) => res.json())
                .then((d) => setData(d))
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
                            <th scope='col'>To Account ID</th>
                            <th scope='col'>Transaction Id</th>
                            <th scope='col'>Amount</th>
                            <th scope='col'>Time Stamp</th>
                            <th scope='col'>Type</th>
                            <th scope='col'>Activate</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>

                        {data.map((entry) => {
                            return <tr>
                            {/* <th scope='row'></th> */}
                            <th scope='row'>{entry.aid}</th>
                            <td>{entry.toAid}</td>
                            <td>{entry.tid}</td>
                            <td>{entry.amount}</td>
                            <td>{entry.timestamp}</td>
                            <td>{transferType(entry.type)}</td>
                            <td><Button onClick={handleActivate(entry.tid)}>Click</Button></td>
                          </tr>
                        })}
                    </MDBTableBody>
                </MDBTable>

                </div>
            </Col>
            </Container>
    )

}

export default ApproveCheques;