// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
// import { Container, Col, Row } from 'react-bootstrap';
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBIcon, MDBInput, MDBRow, MDBTypography } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/CreateCustomer.css";
import { useEffect } from 'react';

function EditCustomer({customer}) {
  const [name, setName] = useState(customer.name);
  const [addr, setAddr] = useState(customer.address);
  const [age, setAge] = useState(customer.age);
  const [phone, setPhone] = useState(customer.phone);
  const [gender, setGender] = useState(customer.gender);
  const [city, setCity] = useState(customer.city);
  const [pincode, setPincode] = useState(customer.pincode);
  const [isError,setIsError]=useState("success");
  const [validated, setValidated] = useState(false);
 

  let handleSubmit = async (e) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      console.log("Not yet validated");
      e.preventDefault();
      e.stopPropagation();
      alert(`Incorrect Details`);
      return;
    }

    setValidated(true);

    try {
      let headertoken = localStorage.getItem("token");
      let res = await fetch(`http://localhost:5277/api/Customer/Update/${customer.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "header": headertoken,
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
      res.status == 200 ? alert(`Successfully updated details for ${name}`) : alert("Enter the correct details");
    } catch (err) {
      console.log(err);
    }
    setValidated(false);
  };
  return (
    <div>
     <MDBRow className="pt-3 mx-3 ">
          
          <MDBCol md="9" className="justify-content-center">
            <MDBCard className="card-custom pb-4">
              <MDBCardBody className="mt-0 mx-5">
                

                <Form noValidate validated={validated} onSubmit={handleSubmit} className="mb-0">
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput required pattern="^[\W\-\S]+" label='Your Name' type='text' value={name} onChange={(e) => setName(e.target.value)} />
                    </MDBCol>
                    <MDBCol>
                      <MDBInput required maxLength={2} pattern="[0-9]*" label='Age' type='text' value={age} onChange={(e) => setAge(e.target.value)} />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="mb-4">
                    <MDBCol>
                      <MDBInput required pattern="[0-9]*" minLength={10} maxLength={10} id ="phn" label='Phone Number' type='text' error={isError} value={phone} onChange={(e) => {setPhone(e.target.value);if(e.target.value.length>10){setIsError(true);}}} className={isError} />
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
                      <MDBInput required pattern="^[\W\-\S]+*" label="Complete Address" type="text" value={addr} onChange={(e) => setAddr(e.target.value)} />
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
   
  );
}

export default EditCustomer;