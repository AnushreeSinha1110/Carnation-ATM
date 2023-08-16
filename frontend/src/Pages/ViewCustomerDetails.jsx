import { useEffect, useState } from "react"
import CustomerDetailRow from "../Components/CustomerDetailRow"
import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Container, Col } from "react-bootstrap";
import AccountDetailRow2 from "../Components/AccountDetailRow2";
function ViewCustomerDetails(props) {
    const [data, setData] = useState([])
    const [accounts,setAccounts]=useState([])
    const fetchInfo = async (e) => {
        console.log("calling fetch now")
        let res= await fetch(
            `http://localhost:5277/api/Customer/GetCustomer/${localStorage.getItem("cid")}`,
        );
        let resJson = await res.json();
            console.log(resJson);
            setData(resJson);
        console.log(data);
        setAccounts(resJson.accounts);
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
                {props.id}
                <div>Name  {data.name}</div>
                <div>Address {data.address}</div>
                <div>Age {data.age}</div>
                <div>Phone {data.phone}</div>
                <div>
                    <MDBTable>
                        <MDBTableHead>
                            <tr>
                                <th scope='col'>#</th>
                                <th scope='col'>Account Type</th>
                                <th scope='col'>Account Number</th>
                                <th scope='col'>Balance</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {accounts.map((entry) => {
                                return <AccountDetailRow2 key={entry.id} entry={entry} />
                            })}
                        </MDBTableBody>
                    </MDBTable>
                </div>
            </div>
        </Col>
    </Container>
    )

}

export default ViewCustomerDetails;