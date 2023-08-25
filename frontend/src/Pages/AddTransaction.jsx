import { useEffect, useState } from "react"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function AddTransaction({account}) {

const transactionTypeLabel = ["DEPOSIT", "WITHDRAW", "TRANSFER","CHEQUE"]

  const [accNum, setAccNum] = useState(account.id);
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState(0);
  const [toAcc, setToAcc] = useState("");
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
      let res = {};
      if (type < 2) {
        res = await fetch("http://localhost:5277/api/Transaction", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({
            "aid": accNum,
            "amount": amount,
            "toAid": null,
            "type": parseInt(type)
          }),
        });
      }
      else {
        res = await fetch("http://localhost:5277/api/Transaction", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({
            "aid": accNum,
            "amount": amount,
            "toAid": toAcc,
            "type": parseInt(type)
          }),
        });
      }
      let resJson = await res.json();
      console.log(resJson);
      res.status == 200 ? alert(`Successfuly performed transaction of amount ${amount}`) : alert("Invalid transaction");
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
    setValidated(false);
  };

  return (
    <Container>
      <Row>
        <h4>Perform a cash deposit/withdrawal/account transfer</h4>
      </Row>
      <Row>
        <Col></Col>
        <Col>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Account Number:</Form.Label>
              <Form.Control required placeholder="Enter Account ID" value={accNum}
                onChange={(e) => setAccNum(accNum)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Amount</Form.Label>
              <Form.Control required placeholder="Enter Amount" value={amount}
                onChange={(e) => setAmount(e.target.value)} />
            </Form.Group>
            {(type == 2||type==3) && <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>To Account ID</Form.Label>
              <Form.Control required placeholder="Enter Destination Account ID" value={toAcc}
                onChange={(e) => setToAcc(e.target.value)} />
            </Form.Group>}
            <Form.Group className="mb-3" controlId="formBasicAddr">
              <Form.Label>Transaction Type</Form.Label>

              <DropdownButton id="dropdown-basic-button" title={transactionTypeLabel[type]} onSelect={setType}>
                {transactionTypeLabel.map((element, index) => {
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
  )

}

export default AddTransaction;