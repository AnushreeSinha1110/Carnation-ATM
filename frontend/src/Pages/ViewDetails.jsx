import { useEffect, useState } from "react"
import CustomerDetailRow from "../Components/CustomerDetailRow"
import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Container, Col, Modal } from "react-bootstrap";
import ViewAccountByCid from "./ViewAccountByCid";
import ViewAccountsonClick from "./ViewAccountsonClick";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AddAccount from "./AddAccount";
import "../styles/ViewDetails.css";
import EditCustomer from "./EditCustomer";
function ViewDetails(props) {
    const [data, setData] = useState([])
    const [cf, setCf] = useState(false);
    const [data2, setData2] = useState([]);
    const [search, setSearch] = useState("");
    const [sr, setSr] = useState(false);
    const [nsr, setNsr] = useState(false);
    const [y, setY] = useState(0);
    const [cId, setCId] = useState(0);
    const [active, setActive] = useState(true)
    const [cus,setCus]=useState();


    const [show, setShow] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const handleModal = () => { setModalShow(true); };
    const handleShow = () => { setShow(true) }

    // const modalClose = () => {}

    const fetchInfo = () => {
        console.log("calling fetch now")
        fetch(
            "http://localhost:5277/api/Customer/GetAllCustomers",
        ).then((res) => res.json())
            .then((d) => setData(d))

        console.log("called fetch")
    }
    let handleSearch = () => {
        if (search.length != 0) {
            fetch(
                `http://localhost:5277/api/Customer/GetCustomerBySearch?search=${search}`,
            ).then((res) => res.json())
                .then((d) => setData(d))
        }
        else {
            fetch(
                "http://localhost:5277/api/Customer/GetAllCustomers",
            ).then((res) => res.json())
                .then((d) => setData(d))
        }
    }
    let handleClick = (cid,en) => async (e) => {
        e.preventDefault();
        handleShow()
        handleModal()
        setCId(cid);
        setCus(en);
        console.log(en);
        setNsr(false);
        console.log("Will");
        try {
            let res = await fetch(`http://localhost:5277/api/Account/GetByCid?cid=${cid}`, {
                method: "GET"
            });


            let resJson = await res.json();
            console.log(resJson);
            setData2(resJson);

            console.log(resJson.length);
            if (res.status === 200) {
                if (resJson.length == 0)
                    setNsr(true);
                else
                    setSr(true);
            } else {
                console.log("Here");
                setNsr(true);
            }
            setSr(true);
        } catch (err) {
            console.log(err);
        }
    };
    const flipState = async (e) => {
        await fetch(`http://localhost:5277/api/Customer/ChangeActiveStatus/${cId}`, { method: "PUT" });
        fetch(`http://localhost:5277/api/Customer/GetCustomer/${cId}`,)
            .then((res) => res.json())
            .then((d) => setActive(d.isActive))
    };
    let options = () => {
        fetch(`http://localhost:5277/api/Customer/GetCustomer/${cId}`,)
            .then((res) => res.json())
            .then((d) => setActive(d.isActive))
        return <div>
             <Button className="button" variant="primary" onClick={(e)=> setY(4)}>Edit Customer</Button>
            <Button className="button" variant="primary" onClick={(e) => { setY(1); setCf(true); }}>
                View Accounts
            </Button>
            <Button  className="button" variant="primary" onClick={(e) => setY(2)}>
                Add Account
            </Button>

            {active && <Button  className="button" variant="primary" onClick={(e) => flipState()}>
                Deactivate Account
            </Button>}
            {!active && <Button className="button" variant="primary" onClick={(e) => flipState()}>
                Activate Account
            </Button>}
           
        </div>
    }

    let fetchagain = () => {
        fetch(
            `http://localhost:5277/api/Account/GetByCid?cid=${cId}`,
        ).then((res) => res.json())
            .then((d) => setData2(d))
        setCf(false);
    }
    let componentSelected = () => {

        if (y == 1) {

            if (cf == true)
                fetchagain();
            console.log(data2);
            console.log("Here")
            if (nsr == true)
                return <h2>No User Accounts</h2>
            return <ViewAccountsonClick data={data2} handleShow={handleShow} setEntryConversion={setData2} />
        } else if (y == 2) {
            return <AddAccount />
        } else if (y == 3) {

        }
        else if(y==0)
        {}
        else if(y==4)
        {
            return<EditCustomer customer={cus}/>
        }
    }
    useEffect(() => {
        console.log("going to fetch some data")
        fetchInfo();
        console.log("data is:" + data);
    }, [])
    return (
        <div >
            <Container>
                <Col></Col>
                <Col sm={10}>
                    <div>
                        <Form className="Search">
                            <Form.Group className="mb-3" controlId="customerId">
                                <Form.Label>Name or Number</Form.Label>
                                <Form.Control className="searchSpace" type="text" placeholder="Name or Number" value={search} onChange={(e) => {
                                    setSearch(e.target.value);
                                }} />

                            </Form.Group>

                            <Button className="searchButton" variant="primary" onClick={(e) => handleSearch(e)}>
                                Search
                            </Button>
                        </Form>
                        <div>
                            <table class="table table-striped table-responsive tborder ">
                                <thead>
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
                                </thead>
                                <tbody className="tableRow">
                                    {data.map((entry) => {
                                        return (
                                            <tr>
                                                {/* <th scope='row'></th> */}
                                                <td>{entry.id}</td>
                                                <td onClick={handleClick(entry.id,entry)} ><u>{entry.name}</u></td>
                                                <td>{entry.phone}</td>
                                                <td>{entry.age}</td>
                                                <td>{entry.gender}</td>
                                                <td>{entry.address}</td>
                                                <td>{entry.city}</td>
                                                <td>{entry.pincode}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Col>
                <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={modalShow}
        onHide={() => {fetchInfo();setY(0);setModalShow(false);}}>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Customer Options
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {options()}
                        {componentSelected()}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => {fetchInfo();setY(0);setModalShow(false)}}>Close</Button>
                    </Modal.Footer>
                </Modal>

            </Container>
        </div>
    )

}

export default ViewDetails;