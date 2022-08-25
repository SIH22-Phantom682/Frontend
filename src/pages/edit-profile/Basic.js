import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  TextField,
  Box,
  Button,
  Grid,
  Avatar,
  Card,
  FormControl,
  InputLabel,
  Select,
  Stack,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import MenuItem from "@mui/material/MenuItem";
import { HomeIcon } from "@radix-ui/react-icons";

export default function Basic() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [date, setDate] = useState(null);
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const body = {
      firstName,
      lastName,
      email,
      gender,
      date,
      number,
      userId: localStorage.getItem("userId"),
    };

    const fetchData = async () => {
      const result = await fetch(
        process.env.REACT_APP_API_URL + "/user/profile",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
          },
        }
      );
      const data = await result.json();
      console.log(data);

      setFirstName(data.profileDetails.user.firstName);
      setLastName(data.profileDetails.user.lastName);
      setDate(data.profileDetails.user.birthDate);
      setGender(data.profileDetails.user.gender);
      setEmail(data.profileDetails.user.email);
      setNumber(data.profileDetails.user.number);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { firstName, lastName, email, gender, date, number };
    console.log(body);
    localStorage.setItem("userInfo", JSON.stringify(body));
    const result = await fetch(process.env.REACT_APP_API_URL + "/user/update", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
      body: JSON.stringify(body)
    });
    const data = await result.json();

    // localStorage.setItem("userInfo", JSON.stringify(data));

    console.log(data);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ bgcolor: "secondary.main" }}>
        <HomeIcon />
      </Avatar>

      <Typography component="h1" variant="h5">
        Basic Details
      </Typography>
      <Card sx={{ maxWidth: 450 }}>
        <Box component="form" onSubmit={handleSubmit} noValidate m={3}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                required
                fullWidth
                size="small"
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                size="small"
                label="Last Name"
                autoComplete="family-name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                  <DatePicker
                    label="Date of Birth"
                    value={date}
                    onChange={(newValue) => setDate(newValue)}
                    renderInput={(params) => (
                      <TextField {...params} required size="small" />
                    )}
                  />
                </Stack>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo" size="small">
                  Gender
                </InputLabel>

                <Select
                  labelId="demo"
                  size="small"
                  label="Gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                  <MenuItem value="Transgender">Transgender</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                size="small"
                label="Email Address"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                size="small"
                label="Phone Number"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Update
          </Button>
        </Box>
      </Card>
    </Box>
  );
}