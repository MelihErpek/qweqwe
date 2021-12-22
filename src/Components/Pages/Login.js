import React from 'react'
import '../../App.css';
import { Row, Col, Image, Form, Button } from 'react-bootstrap';
import Photo from "./Images/2.jpg"

/*

yukarısı FD928C
aşağısı  ABD3D4

*/

export default function Login() {
    return (
        <div style={{ maxWidth: '99.35%' }}>

            <Row>
                <Col className=" d-flex align-items-center justify-content-center" xs={12} sm={6} md={6}>
                    <Form>
                        <Row className="mb-3">
                            <p className="first">Create Account</p>
                            <p className="second" >Already have an account? Log in</p>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>Address 2</Form.Label>
                            <Form.Control placeholder="Apartment, studio, or floor" />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Row>



                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                </Col>
                <Col className="d-flex justify-content-center align-items-center " style={{ background: "linear-gradient(#FD928C, #D4D7D7,#ABD3D4)", width: '50%' }} xs={12} sm={6} md={3}>
                    <Image src={Photo} style={{ height: '75%', width: '76.7%', borderRadius: '10px' }} alt="idk.com" />
                </Col>

            </Row>
        </div >
    )
}
