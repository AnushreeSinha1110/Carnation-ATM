import { useEffect, useState } from "react"
import CustomerDetailRow from "../Components/CustomerDetailRow"
import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Container, Col } from "react-bootstrap";
import ViewAccountByCid from "./ViewAccountByCid";
import ViewAccountsonClick from "./ViewAccountsonClick";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ViewDetails(props) {
    const [data, setData] = useState([])
    const [data2, setData2] = useState([]);
    const [search,setSearch] = useState("");
    const [sr,setSr]=useState(false);
    const [nsr,setNsr]=useState(false);
    const fetchInfo = () => {
        console.log("calling fetch now")
        fetch(
            "http://localhost:5277/api/Customer/GetAllCustomers",
        ).then((res) => res.json())
            .then((d) => setData(d))

        console.log("called fetch")
    }
   let handleSearch =() =>{
    fetch(
        `http://localhost:5277/api/Customer/GetCustomerBySearch?search=${search}`,
    ).then((res) => res.json())
        .then((d) => setData(d))
   }
    let handleClick = (cid)=>async(e) =>{
        e.preventDefault();
        setSr(false);
        setNsr(false);
        try {
            let res = await fetch(`http://localhost:5277/api/Account/GetByCid?cid=${cid}`, {
                method: "GET"
            });


            let resJson = await res.json();
            console.log(resJson);
            setData2(resJson);

            console.log(resJson.length);
            if (res.status === 200) {
                if(resJson.length==0)
                setNsr(true);
                else
                setSr(true);
            } else {
                console.log("Here");
                setNsr(true);
            }
        } catch (err) {
            console.log(err);
        }
    };
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
            <Form>
                    <Form.Group className="mb-3" controlId="customerId">
                            <Form.Label>Name or Number</Form.Label>
                            <Form.Control type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />

                        </Form.Group>

                        <Button variant="primary" onClick={(e) => handleSearch(e)}>
                            Search
                        </Button>
                    </Form>
                <MDBTable>
                    <MDBTableHead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Phone</th>
                            <th scope='col'>Age</th>
                            <th scope='col'>Gender</th>
                            <th scope='col'>Address</th>
                            <th scope='col'>City</th>
                            <th scope='col'>Pincode</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                    {data.map((entry) => {
                    return (
                        <tr>
                        {/* <th scope='row'></th> */}
                        <td>{entry.id}</td>
                        <td onClick={handleClick(entry.id)}><u>{entry.name}</u></td>
                        <td>{entry.phone}</td>
                        <td>{entry.age}</td>
                        <td>{entry.gender}</td>
                        <td>{entry.address}</td>
                        <td>{entry.city}</td>
                        <td>{entry.pincode}</td>
                      </tr>
                    )
                    })}
                    </MDBTableBody>
                </MDBTable>
            </div>
        </Col>
        <Col>
        {sr && <div>
            <h2>User Accounts
            </h2>
            <ViewAccountsonClick data={data2}/>
            </div>}
        {nsr && <div>
            <h2>No User Accounts</h2>
        </div>}
        </Col>
    </Container>
    )

}

export default ViewDetails;