import { useEffect, useState } from "react"
import TransactionDetailRow from "../Components/TransactionDetailRow"
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

import { Container, Row, Col } from "react-bootstrap";

function ViewTransaction(props) {

    const [data, setData] = useState([]);
    const [accNum, setAccNum] = useState("");
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState(0);
    const [sr, setSr] = useState(false);
    const [nsr, setNsr] = useState(false);
    
    let handleSubmit = async (e) => {
        e.preventDefault();
        setSr(false);
        setNsr(false);
        try {
            const url = `http://localhost:5277/api/Transaction/GetTransaction/${accNum}`;
            console.log(url)
            let res = await fetch(`http://localhost:5277/api/Transaction/GetTransaction/`+accNum, {
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



    const fetchInfo = () => {
        console.log("calling fetch now")
        fetch(
            "http://localhost:5277/api/Transaction/GetAllTransactions",
        ).then((res) => res.json())
        .then((d) => setData(d))

        console.log("called fetch")
    }

    useEffect(() => {
        console.log("going to fetch some data")
        fetchInfo();
        console.log("data is:" + data);
    }, [])


    function transferType(i){
        if (i===0){
            return <b>Deposit</b>
        } else if (i===1){
            return <b>Withdrawal</b>
        } else{
            return <b>Transfer</b>
        }
    }
    return ( <Container>
        <Col></Col>
        <Col sm={10}>
            <div>
                Hello from the other side
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
                    return (
                        <tr>
                        {/* <th scope='row'></th> */}
                        <td>{entry.aid}</td>
                        <td>{entry.tid}</td>
                        <td>{entry.amount}</td>
                        <td>{entry.timestamp}</td>
                        <td>{transferType(entry.type)}</td>
                        
                      </tr>
                    )
                    })}
                    </MDBTableBody>
                </MDBTable>
            </div>
            <Form>
                        <Form.Group className="mb-3" controlId="accountId">
                            <Form.Label>Account ID</Form.Label>
                            <Form.Control type="text" placeholder="Enter Account ID" value={accNum} onChange={(e) => setAccNum(e.target.value)}/>

                        </Form.Group>
                           {/* <Link to={`/dashboard`}> */}
                           <Button variant="primary" onClick={(e) => handleSubmit(e)}>
                            Search
                        </Button>
                        {/* </Link> */}
                    </Form>
        </Col>

    </Container>
    )
    
}

export default ViewTransaction;