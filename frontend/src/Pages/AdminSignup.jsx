import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";

function AdminSignup() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cid, setCid] = useState("0");
    const [role, setRole] = useState("Admin");
    // const [loggedIn, setLoggedIn] = useState(false);
    // const [loginError, setLoginError] = useState(false);
    // const [token, setToken] = useState();
    // const [isAdmin, setIsAdmin] = useState(false);
    const [signedUp, setSignedUp] = useState(false);

    let handleSubmit = async (e) => {
        e.preventDefault();
        // setLoggedIn(false);
        // setLoginError(false);
        // setIsAdmin(false);
        setSignedUp(false);
        try {
            let res = await fetch(`http://localhost:5277/createUser?userName=${username}&password=${password}&role=${role}&cid=${parseInt(cid)}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                body: JSON.stringify({
                    userName: username,
                    password: password,
                    role: role,
                    cid: parseInt(cid),
                }),
            });
            console.log("This is a checkpoint.");
            let resJson = await res.json();
            console.log(resJson);
            if (res.status === 200) {
                setSignedUp(true);
                // setLoggedIn(true);
                // setToken(resJson.token);
                // if(resJson.role=="Admin")
                // setIsAdmin(true);
                // else
                // setIsAdmin(false);
                // console.log(resJson.cid);
                // localStorage.setItem("cid",resJson.cid);
                
                // console.log(localStorage.getItem("cid"));

            } else {
                console.log("Here");
                // setLoginError(true);
            }
        } catch (err) {
            console.log(err);
        }
    };



    return (
        <Container>
            <Row>
                <Col><h1 className="display-3">Welcome To Carnation Bank.</h1></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col sm={4}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="text" placeholder="Enter email" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange = {(e) => setPassword(e.target.value)} />
                        </Form.Group>

                        {/* <Link to={`/dashboard`}> */}
                            <Button variant="primary" onClick={(e) => handleSubmit(e)}>
                                Signup
                            </Button>
                        {/* </Link> */}
                    </Form>
                </Col>
                <Col></Col>
            </Row>
            {signedUp  && (<Row>
                    <Col>
                Your account has been created!  <Link to ={`/`}>Proceed to Login </Link>
                    </Col>
                    </Row> )
            }
            {/* { loggedIn && !isAdmin && (<Row>
                    <Col>
                Correct Credentials!  <Link to ={`/customerdashboard`}>Proceed to Customer dashboard </Link>
                    </Col>
                    </Row> )
            }
            { loginError && (<Row>
                    <Col>
                Wrong Credentials! 
                    </Col>
                    </Row> )
            } */}
            
            
        </Container>
    )

}

export default AdminSignup;