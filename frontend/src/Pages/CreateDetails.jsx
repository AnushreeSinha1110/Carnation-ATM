import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

function CreateDetails() {
    const [name, setName] = useState("");
    const [addr, setAddr] = useState("");
    const [age, setAge] = useState(0);
    const [phone, setPhone] = useState(0);

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("http://localhost:5277/api/Customer", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                body: JSON.stringify({
                    name: name,
                    addr: addr,
                    phone: parseInt(phone),
                    age: parseInt(age)
                }),
            });
            let resJson = await res.json();
            console.log(resJson);
            alert(`Successfuly created account for ${name}`);
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
      <Col>
      </Col>
      <Col sm={4}>
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name:</Form.Label>
            <Form.Control placeholder = "Enter your name" value={name}
            onChange={(e) => setName(e.target.value)}
            ></Form.Control>
        </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control placeholder="Enter Phone Number" value={phone}
            onChange={(e) => setPhone(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your number with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAddr">
            <Form.Label>Address:</Form.Label>
            <Form.Control placeholder = "Enter your Address" value={addr}
            onChange={(e) => setAddr(e.target.value)}></Form.Control>
        </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicAge">
            <Form.Label>Age:</Form.Label>
            <Form.Control placeholder = "Enter your Age" value={age}
            onChange={(e) => setAge(e.target.value)}></Form.Control>
        </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Col>
    <Col>
    </Col>
    </Row>
    </Container>
  );
}

export default CreateDetails;