import React, { useState } from "react";
import background from "./../images/sg.jpg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Box } from "@mui/system";
import { AccountCircle, SendRounded } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";

function Login() {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:7001/api/v1/auth/login", {
        username: login.username,
        password: login.password,
      })
      .then(function (response) {
        if (!response.data) {
          alert("data tidak tersedia");
        } else {
          console.log("ini response", response);
          navigate("/");
          localStorage.setItem("token", response.data.accessToken);
        }
      })
      .catch(function (error) {
        console.log("ini error", error);
      });

    setLogin({
      username: "",
      password: "",
    });
  };

  return (
    <Wrapper>
      <Card>
        <h1>Login</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="username"
              name="username"
              value={login.username}
              variant="standard"
              onChange={(e) => setLogin({ ...login, username: e.target.value })}
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="password"
              name="password"
              value={login.password}
              variant="standard"
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
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
  );
}

const Wrapper = styled.div`
  background: linear-gradient(
      0deg,
      rgba(8, 9, 10, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    url(${background}) no-repeat center center / cover;
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

export default Login;
