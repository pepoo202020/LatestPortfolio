import { CheckBox, LockOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

const defaultFormValues = { email: "", password: "" };

const LoginPage = () => {
  const [formValues, setFormValues] = useState(defaultFormValues);
  const navigate = useNavigate();
  const { email, password } = formValues;
  const [user, setUser] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    const data = { email, password };
    e.preventDefault();
    if (!email && !password) {
      alert("All Fields are required");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:2000/api/admin/login",
        data
      );
      alert(response.data.message);
      navigate("/dashboard/main");
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <div className="w-screen h-screen bg-[#E4E6EB]">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            paddingTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              autoComplete="email"
              name="email"
              autoFocus
              type="email"
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              autoComplete="current-password"
              name="password"
              autoFocus
              type="password"
              onChange={handleChange}
            />
            <FormControlLabel
              control={<CheckBox value="remember" color="primary" />}
              label="Remember Me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default LoginPage;
