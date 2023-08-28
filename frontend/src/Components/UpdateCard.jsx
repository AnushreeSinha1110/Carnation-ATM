import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

function UpdateCard({prop}) {
    console.log(`props in updatecard: ${prop}`)
    console.log(prop);
    const [cardNum, setcardNum] = useState(prop.cardNumber);
    const [cardPin, setcardPin] = useState();
    const [expDate, setexpDate] = useState(prop.validity);
    const [cardOldPin, setcardOldPin] = useState();
    const [validated, setValidated] = useState(false);

    const token = localStorage.getItem("token")

    let handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          console.log("Not yet validated");
          e.preventDefault();
          e.stopPropagation();
          return;
        }

        if (cardPin !== cardOldPin){
            alert("New Pin not matching Old pin");
            e.stopPropagation();
            return;
        }

        setValidated(true);

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
            res.status == 200 ? alert("The card has been updated") : alert("Account locked");
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
                <Form.Label>Card Number:</Form.Label>
                <Form.Control required placeholder = "Enter your card number" value={cardNum}
                onChange={(e) => setcardNum(e.target.value)}
                readOnly
                ></Form.Control>
            </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Old Card Pin</Form.Label>
            <Form.Control required placeholder="Enter Old Card Pin" type="password" value={cardOldPin}
                onChange={(e) => setcardOldPin(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>New Card Pin</Form.Label>
            <Form.Control required placeholder="Enter New Card Pin" value={cardPin}
                onChange={(e) => setcardPin(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAddr">
                <Form.Label>Validation In Years</Form.Label>
                <Form.Control required type="number" placeholder = "Enter Validation In Years" value={expDate}
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