import React, { useState } from "react";
import axios from "axios";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Avatar, Button, Grid, TextField } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useNavigate } from "react-router-dom";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Knowledge Base
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

interface LoginProps {
  // props yang diterima
}

const Login = (props: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const history = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleShowPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    if (email === "admin@gmail.com" && password === "admin") {
      history("/dashboard");
    }
    axios
      .post("/api/login", {
        email,
        password,
      })
      .then((response) => {
        // Tampilkan pesan sukses jika login berhasil
      })
      .catch((error) => {
        // Tampilkan pesan kesalahan jika login gagal
      });
  };

  return (
    // <div>
    //   <input type="email" value={email} onChange={handleEmailChange} />
    //   <input type="password" value={password} onChange={handlePasswordChange} />
    //   <button onClick={handleLogin}>Login</button>
    // </div>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleLogin}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={handleEmailChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              type={showPassword ? "text" : "password"}
              id="password"
              label="Password"
              name="password"
              autoComplete="password"
              autoFocus
              value={password}
              onChange={handlePasswordChange}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={showPassword}
                  onChange={handleShowPasswordChange}
                  color="primary"
                />
              }
              label="Show password"
            />
            <br />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleLogin}
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="error404" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="register" variant="body2">
                  {"Dont't have an account? Register"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};
export default Login;
