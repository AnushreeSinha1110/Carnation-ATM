import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// function AdminLogin() {
//     return <>
//     <div>
//         <div>
//             <form id="login-form">
//                 <input id="username" name="username" />
//                 <input id="password" name="password" />
//                 <button><Link to={`/dashboard`}>Login</Link></button>
//             </form>
//         </div>
//         <p>Login to admin portal</p>
//     </div>
//     </>
// }

// export default AdminLogin;



import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";

function AdminLogin() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [loginError, setLoginError] = useState(false);

    let handleSubmit = async (e) => {
        e.preventDefault();
        setLoggedIn(false);
        setLoginError(false);
        try {
            let res = await fetch("http://localhost:5277/api/Auth", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
                body: JSON.stringify({
                    userName: username,
                    password: password,
                }),
            });
            let resJson = await res.json();
            console.log(resJson);
            if (res.status === 200) {
                setLoggedIn(true);
            } else {
                setLoginError(true);
            }
        } catch (err) {
            console.log(err);
        }
    };



    return (
        <Container>
            <Row>
                <Col><h1 class="display-3">Welcome To Carnation Bank.</h1></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col sm={4}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="text" placeholder="Enter email" value={username} onChange={(e) => setUsername(e.target.value)}/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange = {(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="I agree to sell my soul to you (Become a banker)" />
                        </Form.Group>
                        {/* <Link to={`/dashboard`}> */}
                            <Button variant="primary" onClick={(e) => handleSubmit(e)}>
                                Login
                            </Button>
                        {/* </Link> */}
                    </Form>
                </Col>
                <Col></Col>
            </Row>
            { loggedIn && (<Row>
                    <Col>
                Correct Credentials!  <Link to ={`/dashboard`}>Proceed to dashboard </Link>
                    </Col>
                    </Row> )
            }
            { loginError && (<Row>
                    <Col>
                Wrong redentials! 
                    </Col>
                    </Row> )
            }
            
            
        </Container>
    )

}

export default AdminLogin;