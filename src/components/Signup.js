import React, { useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();


  function handleSubmit(e) {
    e.preventDefault()

    
  }

  return (
    <div className="signup-form">
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required></Form.Control>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="email"
                ref={passwordRef}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmaton</Form.Label>
              <Form.Control
                type="email"
                ref={passwordConfirmRef}
                required
              ></Form.Control>
            </Form.Group>
            <button type="submit" className="w-100">
              Sign Up
            </button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? Log In
      </div>
    </div>
  );
}
