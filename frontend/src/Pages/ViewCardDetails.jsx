import { useEffect, useState } from "react"
import CardDetailRow from "../Components/CardDetailRow"
import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Container, Col } from "react-bootstrap";
import UpdateCard from "../Components/UpdateCard";

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
               
                <div>
                    <MDBTable>
                        <MDBTableHead>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>Account ID</th>
                                <th scope='col'>Card Pin</th>
                                <th scope='col'>Validity</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                        {data.map((entry) => {
                    return <CardDetailRow key ={entry.accountId} entry={entry} setCardrow={setCardrow} edit={edit} setEdit={setEdit}/>
                       })}
                        </MDBTableBody>
                    </MDBTable>
                </div>

                {edit && <UpdateCard prop={cardrow} />}
            </div>
        </Col>
    </Container>
    )
    
}

export default ViewCardDetails;