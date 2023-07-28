// import React, { useState } from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import { useHistory, Link } from 'react-router-dom';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import './Signup.css';
// import axios from 'axios';

// function SignUp() {
//   const history = useHistory();

//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [firstNameError, setFirstNameError] = useState('');
//   const [lastNameError, setLastNameError] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const handleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = {
//       firstname:firstName,
//       lastname:lastName,
//       email: email,
//       password: password
//     };
  
//     axios.post('http://127.0.0.1:8080/add', data);

//     // Reset previous error messages
//     setFirstNameError('');
//     setLastNameError('');
//     setEmailError('');
//     setPasswordError('');

//     // Perform form validation
//     let isValid = true;

//     if (!firstName) {
//       setFirstNameError('First name is required');
//       isValid = false;
//     }

//     if (!lastName) {
//       setLastNameError('Last name is required');
//       isValid = false;
//     }

//     if (!email) {
//       setEmailError('Email is required');
//       isValid = false;
//     } else if (!isValidEmail(email)) {
//       setEmailError('Invalid email format');
//       isValid = false;
//     }

//     if (!password) {
//       setPasswordError('Password is required');
//       isValid = false;
//     } else if (!isValidPassword(password)) {
//       setPasswordError(
//         'Password must contain at least one uppercase letter, one lowercase letter, and one number'
//       );
//       isValid = false;
//     }

//     if (isValid) {
//       // Form is valid, proceed with submission
//       console.log('Form submitted:', {
//         firstName,
//         lastName,
//         email,
//         password
//       });

//       // Navigate to the desired route
//       history.push('/Login');
//     }
//   };

//   // Function to check email format using regular expression
//   const isValidEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   // Function to check password format using regular expression
//   const isValidPassword = (password) => {
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
//     return passwordRegex.test(password);
//   };

//   return (
//     <div className='bg'>
//       <ThemeProvider theme={createTheme()}>
//         <Container component="main" maxWidth="xs">
//           <CssBaseline />
//           <Box
//             sx={{
//               marginTop: 8,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//             }}
//           >
//             <Avatar sx={{ m: 1, bgcolor: 'black' }}>
//               <LockOutlinedIcon />
//             </Avatar>
//             <Typography className="tx" component="h1" variant="h5">
//               Sign up
//             </Typography>
//             <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//               <Grid container spacing={2}>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     className="c"
//                     autoComplete="given-name"
//                     name="firstName"
//                     required
//                     fullWidth
//                     id="firstName"
//                     label="First Name"
//                     autoFocus
//                     value={firstName}
//                     onChange={(e) => setFirstName(e.target.value)}
//                     error={!!firstNameError}
//                     helperText={firstNameError}
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     className="c"
//                     required
//                     fullWidth
//                     id="lastName"
//                     label="Last Name"
//                     name="lastName"
//                     autoComplete="family-name"
//                     value={lastName}
//                     onChange={(e) => setLastName(e.target.value)}
//                     error={!!lastNameError}
//                     helperText={lastNameError}
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     className="c"
//                     required
//                     fullWidth
//                     id="email"
//                     label="Email Address"
//                     name="email"
//                     autoComplete="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     error={!!emailError}
//                     helperText={emailError}
//                   />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <TextField
//                     className="c"
//                     required
//                     fullWidth
//                     name="password"
//                     label="Password"
//                     type={showPassword ? 'text' : 'password'}
//                     id="password"
//                     autoComplete="new-password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     error={!!passwordError}
//                     helperText={passwordError}
//                     InputProps={{
//                       endAdornment: (
//                         <Box
//                           sx={{
//                             display: 'flex',
//                             alignItems: 'center',
//                             cursor: 'pointer',
//                           }}
//                           onClick={handleShowPassword}
//                         >
//                           {showPassword ? (
//                             <VisibilityOffIcon color="action" />
//                           ) : (
//                             <VisibilityIcon color="action" />
//                           )}
//                         </Box>
//                       ),
//                     }}
//                   />
//                 </Grid>
//                 <Grid item xs={15}>
//                   <FormControlLabel
//                     className="tx"
//                     control={<Checkbox value="allowExtraEmails" color="primary" />}
//                     label="I want to receive marketing promotions and updates via email."
//                   />
//                 </Grid>
//               </Grid>
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 Sign Up
//               </Button>
//               <Grid container justifyContent="flex-end">
//                 <Grid item>
//                   <Link to="/Login" variant="body2">
//                     Already have an account? Sign in
//                   </Link>
//                 </Grid>
//               </Grid>
//             </Box>
//           </Box>
//         </Container>
//       </ThemeProvider>
//     </div>
//   );
// }

// export default SignUp;













import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useHistory, Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Signup.css';
import axios from 'axios';

function SignUp() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [NameError, setNameError] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [role,setRole]=useState('USER');

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

    const handleSubmit = async (event) => {
      event.preventDefault();
  
      console.log(name, email, password, role);
      let pass = password;
      const registrationData = {
        name,
        email,
        password,
        role
      };
      try {
        const response = await fetch('http://localhost:8081/api/v1/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(registrationData),
        });
        if (response.status === 200) {
          history.push('/Login');
          setName('');
          setEmail('');
          setPassword('');
        }
      } catch (error) {
        console.log('Error:', error);
      }

    // Reset previous error messages
    setNameError('');
    setEmailError('');
    setPasswordError('');

    // Perform form validation
    let isValid = true;

    if (!name) {
      setNameError('Name is required');
      isValid = false;
    }

    

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
      // Form is valid, proceed with submission
      console.log('Form submitted:', {
        name,
        email,
        password
      });

      // Navigate to the desired route
      history.push('/Login');
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
    <div className='bg'>
      <ThemeProvider theme={createTheme()}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'black' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography className="tx" component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} >
                  <TextField
                    className="c"
                    autoComplete="given-name"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoFocus
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    error={!!NameError}
                    helperText={NameError}
                  />
                </Grid>
                
                
                <Grid item xs={12}>
                  <TextField
                    className="c"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={!!emailError}
                    helperText={emailError}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    className="c"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    autoComplete="new-password"
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
                </Grid>
                <Grid item xs={15}>
                  <FormControlLabel
                    className="tx"
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to="/Login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default SignUp;
