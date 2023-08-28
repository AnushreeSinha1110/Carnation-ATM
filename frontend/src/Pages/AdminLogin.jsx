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
import "../styles/LoginAndSignupUI.css"

import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput
}
    from 'mdb-react-ui-kit';


function AdminLogin() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [loginError, setLoginError] = useState(false);
    const [token, setToken] = useState();
    const [isAdmin, setIsAdmin] = useState(false);

    let handleSubmit = async (e) => {
        e.preventDefault();

        if (username.length <1 || password.length <1){
            alert("Invalid input!");
            return;
        }

        setLoggedIn(false);
        setLoginError(false);
        setIsAdmin(false);
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
                setToken(resJson.token);
                if (resJson.role == "Admin")
                    setIsAdmin(true);
                else
                    setIsAdmin(false);
                console.log(resJson.cid);
                localStorage.setItem("cid",resJson.cid);
                localStorage.setItem("token", resJson.token);
                
                console.log(localStorage.getItem("cid"));
            } else {
                console.log("Here");
                setLoginError(true);
            }
        } catch (err) {
            console.log(err);
        }
    };



    return (
        // <Container>
        //     <Row>
        //         <Col><h1 class="display-3">Welcome To Carnation Bank.</h1></Col>
        //     </Row>
        //     <Row>
        //         <Col></Col>
        //         <Col sm={4}>
        //             <Form>
        //                 <Form.Group className="mb-3" controlId="formBasicEmail">
        //                     <Form.Label>Username</Form.Label>
        //                     <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        //                     <Form.Text className="text-muted">
        //                         We'll never share your details with anyone else.
        //                     </Form.Text>
        //                 </Form.Group>

        //                 <Form.Group className="mb-3" controlId="formBasicPassword">
        //                     <Form.Label>Password</Form.Label>
        //                     <Form.Control type="password" placeholder="Password" value={password} onChange = {(e) => setPassword(e.target.value)} />
        //                 </Form.Group>
        //                 <Form.Group className="mb-3" controlId="formBasicCheckbox">
        //                     <Form.Check type="checkbox" label="I agree to sell my soul to you (Become a banker)" />
        //                 </Form.Group>
        //                 {/* <Link to={`/dashboard`}> */}
        //                     <Button variant="primary" onClick={(e) => handleSubmit(e)}>
        //                         Login
        //                     </Button>
        //                 {/* </Link> */}
        //             </Form>
        //         </Col>
        //         <Col></Col>
        //     </Row>
        //     <Link to ={`/adminsignup`}>Signup</Link>
        //     { loggedIn && isAdmin && (<Row>
        //             <Col>
        //         Correct Credentials!  <Link to ={`/dashboard`}>Proceed to Admin dashboard </Link>
        //             </Col>
        //             </Row> )
        //     }
        //     { loggedIn && !isAdmin && (<Row>
        //             <Col>
        //         Correct Credentials!  <Link to ={`/customerdashboard`}>Proceed to Customer dashboard </Link>
        //             </Col>
        //             </Row> )
        //     }
        //     { loginError && (<Row>
        //             <Col>
        //         Wrong Credentials! 
        //             </Col>
        //             </Row> )
        //     }


        // </Container>

        <MDBContainer className="my-5 gradient-form" style={{backgroundColor: "white",height: "669px" }}>

            <MDBRow>

                <MDBCol col='6' className="mb-5">
                    <div className="d-flex flex-column ms-5">

                        <div className="text-center">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                style={{ width: '185px' }} alt="logo" />
                            <h4 className="mt-1 mb-5 pb-1 SignIn">Welcome to The Carnation Team</h4>
                        </div>

                        <p>Please enter your username and password.</p>


                        <MDBInput wrapperClass='mb-4' required label='Username' id='form1' type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
                        <MDBInput wrapperClass='mb-4' required label='Password' id='form2' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />


                        <div className="text-center pt-1 mb-5 pb-1">
                            <MDBBtn className="mb-4 w-100 bgColor" onClick={(e) => handleSubmit(e)}>Sign in</MDBBtn>
                            <a className="text-muted" href="/">Go Back</a>
                        </div>

                        <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                            <p className="mb-0">Don't have an account?</p>
                            <MDBBtn outline className='mx-2' color='danger' >
                                <Link to ={`/adminsignup`}>Create New</Link>
                            </MDBBtn>
                        </div>

                    </div>

                    {loggedIn && isAdmin && (<Row>
                        <Col>
                            Correct Credentials!  <Link to={`/dashboard`}>Proceed to Admin dashboard </Link>
                        </Col>
                    </Row>)
                    }
                    {loggedIn && !isAdmin && (<Row>
                        <Col>
                            Correct Credentials!  <Link to={`/customerdashboard`}>Proceed to Customer dashboard </Link>
                        </Col>
                    </Row>)
                    }
                    {loginError && (<Row>
                        <Col>
                            Wrong Credentials!
                        </Col>
                    </Row>)
                    }

                </MDBCol>

                <MDBCol col='6' className="mb-5 gradient-custom-2 Image">
                
{/* 
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                        <h4 class="mb-4">We are the Carnation bank</h4>
                        <p class="small mb-0">This is a software that tracks what the customer does in the bank ATM.
                        You have sold your soul to the bank and for clearing your debt you'll have to keep tracking and 
                        updating the customers' data.
                        </p>
                    </div> */}
                          
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          className="img-fluid" alt="Phone image"/>


                </MDBCol>

            </MDBRow>

        </MDBContainer>
    )

}

export default AdminLogin;