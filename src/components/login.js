/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FormControl, InputGroup } from "react-bootstrap";
import "./style.css";
//images
import Images from "../images/logo-dark.png";
import PadLock from "../images/padlock.png";
import User from "../images/user.png";
export default () => {
  //states for inputs
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  //sign up user
  useEffect(() => {
    let payload = {
      user_type_id: "000",
      firstName: "abc",
      lastName: "xyz",
      email: "waqas11721@gmail.com",
      phone: "0315",
      company_name: "test",
    };
    //api call
    axios
      .post(" https://backend.develop.mh.agifly.cloud/user/sign_up", payload)
      .then((res) => {
        window.alert("Account Created Successful");
      });
  }, []);
  //log in user
  const handleSubmit = (e) => {
    console.log("hello");
    e.preventDefault();
    let payload = {
      email: name,
      password: password,
    };
    axios
      .post("https://backend.develop.mh.agifly.cloud/user/login", payload)
      .then((res) => {
        window.alert("Login successful");
      })
      .catch((test) => {
        if (test.message === "Request failed with status code 401") {
          window.alert("Incorrect password");
        }
      });
  };

  return (
    <div className="cotainer-fluid">
      <form
        className="col-"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="content">
          <img src={Images} alt="" />
          <h4 className="mt-5">Welcome Back !</h4>
          <p className="mt-2">Sign in to continue to Nezox.</p>
          <div className="mt-5">
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">
                  <img src={User} al="" />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                required
                value={name}
                type="email"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </InputGroup>
          </div>
          <div className="mt-4">
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">
                  <img src={PadLock} al="" />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                required
                value={password}
                type="password"
                placeholder="password"
                aria-label="password"
                aria-describedby="basic-addon1"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </InputGroup>
          </div>
          <div className="bn-main mt-3">
            <button className="btn-primary" type="submit">
              Log In
            </button>
          </div>
          <p className="mt-4">Forget Your Password?</p>
          <p className="mt-5">
            Don't have an account? <a>Register</a>
          </p>
          <p>2020 Nazox. Crafted with by Themedesigns</p>
        </div>
      </form>
      <div className="main-div">
        <div className="over-lay"></div>
      </div>
    </div>
  );
};
