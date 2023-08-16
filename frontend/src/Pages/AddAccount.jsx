import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function AddAccount() {
    const [cid, setCid] = useState("");
    const [actype, setActype] = useState("");
    

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch(`http://localhost:5277/api/Account?customerId=${parseInt(cid)}&accountType=${parseInt(actype)}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                body: JSON.stringify({
                    customerId : parseInt(cid),
                    accountType:parseInt(actype)
                }),
            });
            let resJson = await res.json();
            console.log(resJson);
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
    };
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col sm={4}>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formCid">
            <Form.Label>Customer ID:</Form.Label>
            <Form.Control placeholder = "Enter your Customer Id" value={cid}
            onChange={(e) => setCid(e.target.value)}
            ></Form.Control>
        </Form.Group>
      <Form.Group className="mb-3" controlId="formAccountType">
        <Form.Label>Account Type</Form.Label>
        <Form.Control placeholder="Enter Account Type" value={actype}
            onChange={(e) => setActype(e.target.value)} />
        
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