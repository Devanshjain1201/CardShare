import { React, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const getData = async (e) => {
    e.preventDefault();
    const {email, password} = user;

    const res = await fetch("/login", { 
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email, password
      })
    });
    await res.json().then((data)=>{
      if(res.status === 401){
        window.alert("Login Failed");
        console.log("Login Failed");
        window.location.reload();
      }else{
        window.alert("Login Successfull");
        console.log("Login Successfull");
        sessionStorage.setItem("user", data.user.email);
        navigate("/cards");
      }
    })
  }

  return (
    <div>
      <div className="col-md-1 mx-auto">
        <h1>Login</h1>
      </div>
      <Form className="col-lg-2 col-md-1 mx-auto">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            required
            name="email"
            value={user.email}
            onChange={handleInputs}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder=" Enter your Password"
            required
            name="password"
            value={user.password}
            onChange={handleInputs}
          />
        </Form.Group>
        <Button
          className="text-center col-md-4 mt-4"
          variant="primary"
          type="submit"
          onClick={getData}
        >
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
