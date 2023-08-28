// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
// import { Container, Col, Row } from 'react-bootstrap';
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBIcon, MDBInput, MDBRow, MDBTypography } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/CreateCustomer.css";
import { useEffect } from 'react';

function CreateDetails() {
  const [name, setName] = useState("");
  const [addr, setAddr] = useState("");
  const [age, setAge] = useState();
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [isError,setIsError]=useState("success");
  const [validated, setValidated] = useState(false);
 

  let handleSubmit = async (e) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      console.log("Not yet validated");
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);

    try {
      let res = await fetch("http://localhost:5277/api/Customer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          name: name,
          address: addr,
          phone: phone,
          age: parseInt(age),
          gender: gender,
          city: city,
          pincode: pincode
        }),
      });
      let resJson = await res.json();
      console.log(resJson);
      res.status == 200 ? alert(`Successfully created account for ${name}`) : alert("Enter the correct details");
    } catch (err) {
      console.log(err);
    }
    setValidated(false);
  };
  return (
    // <Container>
    //   <Row>
    //   <Col>
    //   </Col>
    //   <Col sm={4}>
    // <Form onSubmit={handleSubmit}>
    //     <Form.Group className="mb-3" controlId="formBasicName">
    //         <Form.Label>Name:</Form.Label>
    //         <Form.Control placeholder = "Enter your name" value={name}
    //         onChange={(e) => setName(e.target.value)}
    //         ></Form.Control>
    //     </Form.Group>
    //   <Form.Group className="mb-3" controlId="formBasicPhone">
    //     <Form.Label>Phone Number</Form.Label>
    //     <Form.Control placeholder="Enter Phone Number" value={phone}
    //         onChange={(e) => setPhone(e.target.value)} />
    //     <Form.Text className="text-muted">
    //       We'll never share your number with anyone else.
    //     </Form.Text>
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="formBasicAddr">
    //         <Form.Label>Address:</Form.Label>
    //         <Form.Control placeholder = "Enter your Address" value={addr}
    //         onChange={(e) => setAddr(e.target.value)}></Form.Control>
    //     </Form.Group>
    //   <Form.Group className="mb-3" controlId="formBasicAge">
    //         <Form.Label>Age:</Form.Label>
    //         <Form.Control placeholder = "Enter your Age" value={age}
    //         onChange={(e) => setAge(e.target.value)}></Form.Control>
    //     </Form.Group>
    //     <Form.Group className="mb-3" controlId="formBasicGender">
    //         <Form.Label>Gender:</Form.Label>
    //         <Form.Control placeholder = "Enter your Gender" value={gender}
    //         onChange={(e) => setGender(e.target.value)}></Form.Control>
    //     </Form.Group>
    //     <Form.Group className="mb-3" controlId="formBasicCity">
    //         <Form.Label>City:</Form.Label>
    //         <Form.Control placeholder = "Enter your City" value={city}
    //         onChange={(e) => setCity(e.target.value)}></Form.Control>
    //     </Form.Group>
    //     <Form.Group className="mb-3" controlId="formBasicPincode">
    //         <Form.Label>PIN code:</Form.Label>
    //         <Form.Control placeholder = "Enter your Pincode" value={pincode}
    //         onChange={(e) => setPincode(e.target.value)}></Form.Control>
    //     </Form.Group>
    //   <Button variant="primary" type="submit">
    //     Submit
    //   </Button>
    // </Form>
    // </Col>
    // <Col>
    // </Col>
    // </Row>
    // </Container>

    <div className="DashBack">
      <div className="mx-auto gradient-custom" style={{ maxWidth: '800px', height: '565px' }}>
        <MDBRow className="pt-3 mx-3 ">
          <MDBCol md="3" className='mt-5'>
            <div className="text-center" style={{ marginTop: '50px', marginLeft: '10px' }}>
              <MDBIcon fas icon="shipping-fast text-white" size="3x" />
              <MDBTypography tag="h3" className="text-white">Welcome to The Team</MDBTypography>
              <p className="white-text">You are working for The Cartnation Bank</p>
              {/* <p>Lorem ipsum dolor ex sapiente non perspiciatis  voluptatem, velit sit id officia neque accusamus a, quia quibusdam.</p> */}
            </div>
            <div className="text-center">
              <MDBBtn color="white" rounded className="back-button">  <Link to={`/dashboard`}>Go Back</Link></MDBBtn>
            </div>
          </MDBCol>
          <MDBCol md="9" className="justify-content-center">
            <MDBCard className="card-custom pb-4">
              <MDBCardBody className="mt-0 mx-5">
                <div className="text-center mb-3 pb-2 mt-3">
                  <MDBTypography tag="h4" style={{ color: '#495057' }} >Customer Details</MDBTypography>
                </div>

                <Form noValidate validated={validated} onSubmit={handleSubmit} className="mb-0">
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput required pattern="[0-9a-zA-Z]*" label='Your Name' type='text' value={name} onChange={(e) => setName(e.target.value)} />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput required maxLength={2} pattern="[0-9]*" label='Age' type='text' value={age} onChange={(e) => setAge(e.target.value)} />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput required pattern="[0-9]*" id ="phn" label='Phone Number' type='text' error={isError} value={phone} onChange={(e) => {setPhone(e.target.value);if(e.target.value.length>10){setIsError(true);}}} className={isError} />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput required pattern="[M,F,O]" label='Gender(M/F/O)' type='text' value={gender} onChange={(e) => setGender(e.target.value)} />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput required pattern="[a-zA-Z]*" label='City' type='text' value={city} onChange={(e) => setCity(e.target.value)} />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput required maxLength={6} pattern="[0-9]*" label='Pin Code' type='text' value={pincode} onChange={(e) => setPincode(e.target.value)} />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol>
                      <MDBInput required pattern="[a-zA-Z0-9]*" label="Complete Address" type="text" value={addr} onChange={(e) => setAddr(e.target.value)} />
                    </MDBCol>
                  </MDBRow>

                  <div className="float-end">
                    <MDBBtn rounded style={{ backgroundColor: '#0062CC' }}>Submit</MDBBtn>
                  </div>
                </Form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    </div>
  );
}

export default CreateDetails;