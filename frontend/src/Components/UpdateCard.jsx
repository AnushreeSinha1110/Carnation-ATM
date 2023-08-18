import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

function UpdateCard({prop}) {
    console.log(`props in updatecard: ${prop}`)
    console.log(prop);
    const [cardNum, setcardNum] = useState(prop.cardNumber);
    const [cardPin, setcardPin] = useState(prop.cardPIN);
    const [expDate, setexpDate] = useState(prop.validity);

    const token = localStorage.getItem("token")

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("http://localhost:5277/api/Card/UpdateCardByNum", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                    "Autorization-Header": `JWT ${token}`
                  },
                body: JSON.stringify({
                      id: prop.id,
                     cardPin: cardPin,
                    validity: expDate,
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
      <Col>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Card Number:</Form.Label>
                <Form.Control placeholder = "Enter your card number" value={cardNum}
                onChange={(e) => setcardNum(e.target.value)}
                readOnly
                ></Form.Control>
            </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Card Pin</Form.Label>
            <Form.Control placeholder="Enter Card Pin" value={cardPin}
                onChange={(e) => setcardPin(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAddr">
                <Form.Label>Expiry Date</Form.Label>
                <Form.Control type="number" placeholder = "Enter Card Expiry Date" value={expDate}
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

export default UpdateCard;