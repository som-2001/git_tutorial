import React, { useContext } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Grid,
  Paper,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { Navbar } from "../components/Navbar";
import { Link, Navigate, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../Context/Context";



const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

function Signin(){
 
  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const navigate=useNavigate();
  const {name}=useContext(Context);

  console.log(name);

  const routing=()=>{
    navigate('/',{state:{myComponent:"myComponent",name:"someswar gorai"}})
  }
  const onSubmit = (data) => {
    
    axios.post(`${process.env.REACT_APP_BASEURL}/api/login`, data,{
        withCredentials: true  // Allow cookies to be sent
      })
  .then(res => {
    alert(res.data.message); // Handle success
    // navigate('/my-blog');
  })
  .catch(error => {
    if (error.response) {
      alert(error.response.data.message); // Backend error response
    } else if (error.request) {
      alert('Network error or no response from server'); // No response from the server
    } else {
      alert('Error in request setup: ' + error.message); // Request setup issues
    }
  });


  };

  const location=useLocation();
  const pathnames=location.pathname.split('/').filter(Boolean);
  return (
    <Container maxWidth="sm">
      <Navbar/>
      {pathnames.map((segment, index) => {
          const path = `/${pathnames.slice(0, index + 1).join('/')}`;
          console.log(path);
          return (
            <li key={path} style={{ marginLeft: '8px' }}>
              <span> &gt; </span>
              <Link to={path}>{segment}</Link>
            </li>
          );
        })}
      <Paper elevation={3} sx={{ padding: 4, mt: 6 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Box mb={3}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  variant="outlined"
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              )}
            />
          </Box>
          <Box mb={3}>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              )}
            />
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                login
              </Button>
            </Grid>
          </Grid>
        </form>
        <p onClick={routing}>register</p>
      </Paper>
    </Container>
  );

}

export default Signin;