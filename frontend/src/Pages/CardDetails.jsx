import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

function CardDetails({account}) {
    const [cardNum, setcardNum] = useState(account.id);
    const [cardPin, setcardPin] = useState(0);
    const [expDate, setexpDate] = useState();
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
            let res = await fetch("http://localhost:5277/api/Card", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                body: JSON.stringify({
                      accountId: cardNum,
                     cardPin: cardPin,
                    validity: expDate,
                }),
            });
            let resJson = await res.json();
            console.log(resJson);
            res.status == 200 ? alert("The card has been created") : alert("Please enter the correct details");
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
      <Col></Col>
      <Col>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Account Number:</Form.Label>
                <Form.Control required placeholder = "Enter your account number" value={cardNum}
                onChange={(e) => setcardNum(e.target.value)}
                ></Form.Control>
            </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Card Pin</Form.Label>
            <Form.Control required placeholder="Enter Card Pin" value={cardPin}
                onChange={(e) => setcardPin(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAddr">
                <Form.Label>Expiry Date</Form.Label>
                <Form.Control required type="number" placeholder = "Enter Card Expiry Date" value={expDate}
                onChange={(e) => setexpDate(e.target.value)}></Form.Control>
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

export default CardDetails;