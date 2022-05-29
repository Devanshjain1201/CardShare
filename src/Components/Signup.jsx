import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState(
    {
      name: "", contact: "", address: "", companyName: "",designation: "", email: "", password: ""
    });

    let name, value;
    const handleInputs = (e) => {
      name = e.target.name;
      value = e.target.value;

      setUser({...user, [name]:value});
    }

    const postData = async (e) => {
      e.preventDefault();
      const {name, contact, address, companyName,designation, email, password} = user;

      const res = await fetch("/signup", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name, contact, address, companyName, designation, email, password
        })
      });

      if(res.status === 409){
        window.alert("User already exist");
        navigate("/login");
      }
      else if (res.status === 400){
        window.alert("Fill all details correctly");
        navigate("/signup");
      }
      else{
        window.alert("Regestration Successfull");
        navigate("/login");
      }
    }
     
  return (
    <div>
      <div className="col-md-1 mx-auto">
        <h1>signup</h1>
      </div>
      <Form className="col-lg-3 col-md-1 mx-auto" method="POST">
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" required
          name="name"
          value={user.name}
          onChange={handleInputs}
          />
        </Form.Group>
        <Form.Group controlId="Contact">
          <Form.Label>Contact no.</Form.Label>
          <Form.Control type="number" placeholder="Enter your number"required
          name="contact"
          value={user.contact}
          onChange={handleInputs}
          />
        </Form.Group>
        <Form.Group controlId="Address">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter your address" required
          name="address"
          value={user.address}
          onChange={handleInputs}
          />
        </Form.Group>
        <Form.Group controlId="CompName">
          <Form.Label>Company Name</Form.Label>
          <Form.Control type="Text" placeholder="Company name" required
          name="companyName"
          value={user.companyName}
          onChange={handleInputs}
          />
        </Form.Group>

        <Form.Group controlId="designation">
          <Form.Label>designation</Form.Label>
          <Form.Control type="Text" placeholder=" your designation"required
          name="designation"
          value={user.designation}
          onChange={handleInputs}
          />
        </Form.Group>
        <Form.Group controlId="Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" autoComplete="off" required
          name="email"
          value={user.email}
          onChange={handleInputs}
          />
        </Form.Group>
        <Form.Group controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder=" Enter your Password" autoComplete="off" required
          name="password"
          value={user.password}
          onChange={handleInputs}
          />
        </Form.Group>

        <Button
          className="text-center col-md-4 mt-4"
          variant="primary"
          type="submit"
          onClick={postData}
        >
          Signup
        </Button>
      </Form>
    </div>
  );
}

export default Signup;
