import { useEffect, useState } from "react"
import CardDetailRow from "../Components/CardDetailRow"
import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Container, Col } from "react-bootstrap";
import UpdateCard from "../Components/UpdateCard";
import "../styles/ViewAccount.css";

function ViewCardDetails(props) {
    const [data, setData] = useState([])
    const [cardrow, setCardrow] = useState({});
    const [edit, setEdit]  = useState(false);
    const fetchInfo = () => {
        console.log("calling fetch now")
        fetch(
            "http://localhost:5277/api/Card/GetAllCards",
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
        <Col></Col>
        <Col></Col>
        <Col sm={10}>
            <div>
                {props.id}
                {/* <div>Account ID  {data.accountId}</div>
                <div>Card Pin {data.cardPin}</div>
                <div>Validity{data.validity}</div> */}
                 <h4>All Card Details</h4>
                <div>
                    <table class="table table-striped table-responsive tborder">
                        <thead>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col>'>Card Number</th>
                                <th scope='col'>Account ID</th>
                                <th scope='col'>Card Pin</th>
                                <th scope='col'>Validity</th>
                                <th scope='col'>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                        {data.map((entry) => {
                    return <CardDetailRow key ={entry.accountId} entry={entry} setCardrow={setCardrow} edit={edit} setEdit={setEdit}/>
                       })}
                        </tbody>
                    </table>
                </div>

                {edit && <UpdateCard prop={cardrow} />}
            </div>
        </Col>
    </Container>
    )
    
}

export default ViewCardDetails;