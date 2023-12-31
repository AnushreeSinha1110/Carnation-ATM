import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function AddAccount() {
  const accountTypeLabel = ["Savings", "Current", "Loan"]
  const [cid, setCid] = useState();
  const [actype, setActype] = useState(0);
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
      var tokenheader = localStorage.getItem("token")
      let res = await fetch(`http://localhost:5277/api/Account?customerId=${parseInt(cid)}&accountType=${parseInt(actype)}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "header": tokenheader,
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
          accountOwnerId: parseInt(cid),
          aType: parseInt(actype)
        }),
      });
      let resJson = await res.json();
      console.log(resJson);

      res.status == 200 ? alert(`Account for user id ${cid} created.`) : alert("Can't add Account");
      // if (res.status === 200) {
      //     setName("");
      //     setEmail("");
      //     setMessage("User created successfully");
      // } else {
      //     setMessage("Some error occured");
      // }
    } catch (err) {
      console.log(err);
    }
    setValidated(true);
  };
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col sm={4}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <h3>Add Account</h3>
            <Form.Group className="mb-3" controlId="formCid">
              <Form.Label>Customer ID:</Form.Label>
              <Form.Control required pattern="[0-9]*"placeholder="Enter your Customer Id" value={cid}
                onChange={(e) => setCid(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAccountType">
              <Form.Label>Account Type</Form.Label>


              <DropdownButton id="dropdown-basic-button" title={accountTypeLabel[actype]} onSelect={setActype}>

                {accountTypeLabel.map((element, index) => {
                  return (
                    <Dropdown.Item eventKey={index}>{element}</Dropdown.Item>
                  )
                })}

              </DropdownButton>

            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>

        </Col>
        <Col></Col>
      </Row>
    </Container>

  );
}

export default AddAccount;