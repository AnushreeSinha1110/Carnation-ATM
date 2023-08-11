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

async function AdminLogin() {


    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                <Link to={`/dashboard`}>Login</Link>
            </Button>
        </Form>
    )

}

export default AdminLogin;