import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography, Button, Grid, Avatar, Card } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export default function ChangePassword() {
  return (
    <>
      <Box
        sx={{
          marginTop: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "10%",
        }}
      >
        <Avatar sx={{ bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Change Password
        </Typography>
        <Card sx={{ maxWidth: 350 }}>
          <Box component="form" noValidate m={3}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  type="password"
                  fullWidth
                  size="small"
                  label="Old Password"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  type="password"
                  fullWidth
                  size="small"
                  label="New Password"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  type="password"
                  fullWidth
                  size="small"
                  label="Confirm Password"
                  variant="outlined"
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Change
            </Button>
          </Box>
        </Card>
      </Box>
    </>
  );
}
