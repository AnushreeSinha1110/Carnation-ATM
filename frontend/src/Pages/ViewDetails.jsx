import { useEffect, useState } from "react"
import CustomerDetailRow from "../Components/CustomerDetailRow"
import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Container, Col } from "react-bootstrap";

function ViewDetails(props) {
    const [data, setData] = useState([])
    const fetchInfo = () => {
        console.log("calling fetch now")
        fetch(
            "http://localhost:5277/api/Customer/GetAllCustomers",
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
        <Col sm={10}>
            <div>
                Hello from the other side
                {props.id}
                <MDBTable>
                    <MDBTableHead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Phone</th>
                            <th scope='col'>Age</th>
                            <th scope='col'>Address</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                    {data.map((entry) => {
                    return <CustomerDetailRow key={entry.cid} entry={entry} />
                    })}
                    </MDBTableBody>
                </MDBTable>
            </div>
        </Col>
        <Col></Col>
    </Container>
    )

}

export default ViewDetails;