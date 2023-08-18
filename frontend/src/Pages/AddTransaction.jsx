import { useEffect, useState } from "react"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function AddTransaction(props) {

    const [accNum, setAccNum] = useState("");
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState(0);

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("http://localhost:5277/api/Transaction", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                body: JSON.stringify({
                    "aid": accNum,
                    "amount": amount,
                    "type": type
                  }),
            });
            let resJson = await res.json();
            console.log(resJson);
            alert(`Successfuly performed transaction of amount ${amount}`);
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
      <Col>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Account Number:</Form.Label>
                <Form.Control placeholder = "Enter your card number" value={accNum}
                onChange={(e) => setAccNum(e.target.value)}
                ></Form.Control>
            </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Amount</Form.Label>
            <Form.Control placeholder="Enter Card Pin" value={amount}
                onChange={(e) => setAmount(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAddr">
                <Form.Label>Transaction Type</Form.Label>
      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      <Dropdown.Item onChange={(e)=>{setType(1)}}>Withdraw</Dropdown.Item>
      <Dropdown.Item onChange={(e)=>{setType(0)}}>Deposit</Dropdown.Item>
      
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
    )
    
}

export default AddTransaction;