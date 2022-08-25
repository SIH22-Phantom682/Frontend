import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  TextField,
  Box,
  Button,
  Grid,
  Avatar,
  FormControlLabel,
  Checkbox,
  Link,
  Card,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      email,
      password,
    };

    if (!email || !password) {
      alert("fill the proper form");
    } else {
      console.log(body);
    }

    const result = await fetch(process.env.REACT_APP_API_URL + "/auth/login", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await result.json();
    console.log(data);
    localStorage.setItem("Token", data.data);
    Navigate("/vprofile", { replace: true });
  };

  return (
    <div
      style={{ width:'100%',height:'100vh', display: "flex", flexDirection: "column", alignItems: "center",justifyContent:'center',margin: 0,padding:0}}
    >
      <Box
        sx={{display: "flex", flexDirection: "column", alignItems: "center",margin: 0,padding:0}}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Card sx={{ maxWidth: 400 }}>
          <Box component="form" onSubmit={handleSubmit} noValidate m={3}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              size="small"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
              size="small"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                  color="primary"
                />
              }
              label="Show password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/step" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/" variant="body2">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Box>
    </div>
  );
}
