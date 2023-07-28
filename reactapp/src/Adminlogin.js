import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Login.css';
import './Admin.css'
import axios from 'axios';

function SignInSide() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [apiError, setApiError] = useState('');

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Reset previous error messages
    setEmailError('');
    setPasswordError('');
    setApiError('');

    // Perform form validation
    let isValid = true;

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!isValidEmail(email)) {
      setEmailError('Invalid email format');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (!isValidPassword(password)) {
      setPasswordError(
        'Password must contain at least one uppercase letter, one lowercase letter, and one number'
      );
      isValid = false;
    }

    if (isValid) {
      // Form is valid, proceed with API call to backend
      axios.post('http://localhost:8082/api/v1/user/loginadmin', {
        email: email,
        password: password,
      })
      .then((response) => {
        // Successful API call
        console.log('Response from backend:', response.data);

        // Now you can navigate to the desired route, e.g., if login is successfuls
        history.push('/Homenav');
      })
      .catch((error) => {
        // Error occurred during API call
        console.error('Error:', error);
        setApiError('Invalid email or password'); // Set the error message to be displayed
      });
    }
  };

  // Function to check email format using regular expression
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Function to check password format using regular expression
  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    return passwordRegex.test(password);
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid className="img12" item xs={false} sm={4} md={7} />
        <Grid className="color1" md={5}>
          
          <Box
            sx={{
              my: 18,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Link to="/login">
            <IconButton
              sx={{
                position: 'absolute',
                top: 10,
                right: 10,
                color: 'White',
              }}
             
              onClick={() => {
                
                console.log('Admin switch clicked!');
              }}
            >
              <AccountCircleIcon />
              <p className='txx'>User</p>
            </IconButton></Link>
            <Avatar sx={{ m: 1, bgcolor: 'black' }}></Avatar>
            <Typography className="txt" component="h1" variant="h5">
              Admin Login
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1, color: 'black' }}
            >
              <TextField
                className="cl"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!emailError}
                helperText={emailError}
              />
              <TextField
                className="cl"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                id="passwords"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!passwordError}
                helperText={passwordError}
                InputProps={{
                  endAdornment: (
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer',
                      }}
                      onClick={handleShowPassword}
                    >
                      {showPassword ? (
                        <VisibilityOffIcon color="action" />
                      ) : (
                        <VisibilityIcon color="action" />
                      )}
                    </Box>
                  ),
                }}
              />
              <FormControlLabel
                className="txt"
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              {apiError && (
    <Typography variant="body2" color="error" align="center">
      {apiError}
    </Typography>
  )}
              <Button
                className="bo"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: 'brown' }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <a href="#" variant="body2">
                    Forgot password?
                  </a>
                </Grid>
                <Grid item>
                  <Link to="/Signup">
                    <a href="" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </a>
                  </Link>
                </Grid>
              </Grid>
              <Typography
                variant="body2"
                color="white"
                align="center"
                sx={{ mt: 5 }}
              ></Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default SignInSide;
