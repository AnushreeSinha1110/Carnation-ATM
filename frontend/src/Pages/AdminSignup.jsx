import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "../styles/AdminLogin.css"

import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput
}
    from 'mdb-react-ui-kit';


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
        // <Container>
        //     <Row>
        //         <Col><h1 className="display-3">Welcome To Carnation Bank.</h1></Col>
        //     </Row>
        //     <Row>
        //         <Col></Col>
        //         <Col sm={4}>
        //             <Form>
        //                 <Form.Group className="mb-3" controlId="formBasicEmail">
        //                     <Form.Label>Email address</Form.Label>
        //                     <Form.Control type="text" placeholder="Enter email" value={username} onChange={(e) => setUsername(e.target.value)}/>
        //                 </Form.Group>

        //                 <Form.Group className="mb-3" controlId="formBasicPassword">
        //                     <Form.Label>Password</Form.Label>
        //                     <Form.Control type="password" placeholder="Password" value={password} onChange = {(e) => setPassword(e.target.value)} />
        //                 </Form.Group>

        //                 {/* <Link to={`/dashboard`}> */}
        //                     <Button variant="primary" onClick={(e) => handleSubmit(e)}>
        //                         Signup
        //                     </Button>
        //                 {/* </Link> */}
        //             </Form>
        //         </Col>
        //         <Col></Col>
        //     </Row>
        //     {signedUp  && (<Row>
        //             <Col>
        //         Your account has been created!  <Link to ={`/`}>Proceed to Login </Link>
        //             </Col>
        //             </Row> )
        //     }
        // </Container>

        <MDBContainer className="my-5 gradient-form">

            <MDBRow>

                <MDBCol col='6' className="mb-5">
                    <div className="d-flex flex-column ms-5">

                        <div className="text-center">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                style={{ width: '185px' }} alt="logo" />
                            <h4 className="mt-1 mb-5 pb-1">Sign Up</h4>
                        </div>

                        <p>Please enter new username and password.</p>


                        <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
                        <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />


                        <div className="text-center pt-1 mb-5 pb-1">
                            <MDBBtn className="mb-4 w-100 gradient-custom-2" onClick={(e) => handleSubmit(e)}>Sign up</MDBBtn>
                            {/* <a className="text-muted" href="#!">Forgot password?</a> */}
                        </div>

                        <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                            {/* <p className="mb-0">Don't have an account?</p> */}
                            {signedUp  && (<Row>
                                <Col>
                                Your account has been created!
                                </Col>
                                </Row> )
                            }
                            <MDBBtn outline className='mx-2' color='danger' >
                                <Link to ={`/`}>Proceed to Login</Link>
                            </MDBBtn>
                        </div>

                    </div>

                    {/* {signedUp  && (<Row>
                        <Col>
                        Your account has been created!  <Link to ={`/`}>Proceed to Login </Link>
                        </Col>
                        </Row> )
                    } */}
                    {/* {loginError && (<Row>
                        <Col>
                            Wrong Credentials!
                        </Col>
                    </Row>)
                    } */}

                </MDBCol>

                <MDBCol col='6' className="mb-5">
                    <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                            <h4 class="mb-4">We are the Carnation bank</h4>
                            <p class="small mb-0">This is a software that tracks what the customer does in the bank ATM.
                            You have sold your soul to the bank and for clearing your debt you'll have to keep tracking and 
                            updating the customers' data.
                            </p>
                        </div>

                    </div>

                </MDBCol>

            </MDBRow>

        </MDBContainer>
    )

}

export default AdminSignup;