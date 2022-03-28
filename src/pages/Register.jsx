import React, { useState } from "react";
import login from "./../images/features.jpg";
import styled from "styled-components";
import { Box, Button, TextField } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SendRounded from "@mui/icons-material/SendRounded";
import { useNavigate } from "react-router-dom";
const axios = require("axios");

function Register() {
  const [register, setRegister] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:7001/register", {
        username: register.username,
        password: register.password,
      })
      .then(function (response) {
        console.log("ini response", response);
        navigate("/login");
      })
      .catch(function (error) {
        console.log("ini error", error);
      });

    setRegister({
      username: "",
      password: "",
    });
  };

  return (
    <>
      <Wrapper>
        <Card>
          <h1>Register</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="username"
                name="username"
                value={register.username}
                variant="standard"
                onChange={(e) =>
                  setRegister({ ...register, username: e.target.value })
                }
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="password"
                name="password"
                value={register.password}
                variant="standard"
                onChange={(e) =>
                  setRegister({ ...register, password: e.target.value })
                }
              />
            </Box>
            <Button
              variant="contained"
              endIcon={<SendRounded />}
              color="success"
              type="submit"
            >
              Send
            </Button>
          </form>
        </Card>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background: linear-gradient(
      0deg,
      rgba(8, 9, 10, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    url(${login}) no-repeat center center / cover;
  height: 100vh;
  width: 100%;
`;

const Card = styled.div`
  width: 20rem;
  height: 30rem;
  background: linear-gradient(35deg, rgb(177, 130, 48), rgb(249, 174, 62));
  position: absolute;
  bottom: 20vh;
  right: 50vh;
  border-radius: 20px;
`;

export default Register;
