import React from 'react';
import { Container, Typography, FormControlLabel, Checkbox, Box, Divider, Button, styled, FormControl, FormLabel, RadioGroup, Radio, Grid } from '@mui/material';
import { green, grey, orange, teal } from '@mui/material/colors';

const SettingsPage = () => {
  // State for the settings options
  const [showNotifications, setShowNotifications] = React.useState(true);
  const [showPromotions, setShowPromotions] = React.useState(true);
  const [theme, setTheme] = React.useState('light');
  const [fontSize, setFontSize] = React.useState('medium');

  // Handler for toggling the notifications option
  const handleNotificationsChange = (event) => {
    setShowNotifications(event.target.checked);
  };

  // Handler for toggling the promotions option
  const handlePromotionsChange = (event) => {
    setShowPromotions(event.target.checked);
  };

  // Handler for changing the theme
  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  // Handler for changing the font size
  const handleFontSizeChange = (event) => {
    setFontSize(event.target.value);
  };

  const StyledContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
    borderRadius: theme.spacing(2),
  }));

  const StyledTypography = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: 'bold',
    fontFamily: 'Arial',
  }));

  const StyledDivider = styled(Divider)(({ theme }) => ({
    margin: theme.spacing(3, 0),
    backgroundColor: theme.palette.primary.main,
  }));

  const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    color: theme.palette.text.primary,
  }));

  const StyledButton = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(4),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
    fontFamily: 'Arial',
    fontSize: '1rem',
    fontWeight: 'bold',
    letterSpacing: '1px',
  }));

  return (
    <div style={{backgroundColor:"teal"}}>
    <StyledContainer style={{backgroundColor:"lightgreen"}} maxWidth="sm">
      <Box>
        <StyledTypography variant="h4" component="h1" align="center" gutterBottom>
          Settings
        </StyledTypography>

        <StyledDivider />

        <Typography variant="h6" gutterBottom>
          Notifications
        </Typography>
        <StyledFormControlLabel
          control={
            <Checkbox
              checked={showNotifications}
              onChange={handleNotificationsChange}
              color="primary"
            />
          }
          label="Show notifications"
        />

        <StyledDivider />

        <Typography variant="h6" gutterBottom>
          Promotions
        </Typography>
        <StyledFormControlLabel
          control={
            <Checkbox
              checked={showPromotions}
              onChange={handlePromotionsChange}
              color="primary"
            />
          }
          label="Show promotional offers"
        />

        <StyledDivider />

        <Typography variant="h6" gutterBottom>
          Theme
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup row aria-label="theme" name="theme" value={theme} onChange={handleThemeChange}>
            <Grid container spacing={2}>
              <Grid item>
                <FormControlLabel value="light" control={<Radio />} label="Light" />
              </Grid>
              <Grid item>
                <FormControlLabel value="dark" control={<Radio />} label="Dark" />
              </Grid>
            </Grid>
          </RadioGroup>
        </FormControl>

        <StyledDivider />

        <Typography variant="h6" gutterBottom>
          Font Size
        </Typography>
        <FormControl component="fieldset">
          <RadioGroup row aria-label="font-size" name="font-size" value={fontSize} onChange={handleFontSizeChange}>
            <Grid container spacing={2}>
              <Grid item>
                <FormControlLabel value="small" control={<Radio />} label="Small" />
              </Grid>
              <Grid item>
                <FormControlLabel value="medium" control={<Radio />} label="Medium" />
              </Grid>
              <Grid item>
                <FormControlLabel value="large" control={<Radio />} label="Large" />
              </Grid>
            </Grid>
          </RadioGroup>
        </FormControl>

        {/* Add more settings options as needed */}

        <StyledButton variant="contained" fullWidth>
          Save Settings
        </StyledButton>
      </Box>
    </StyledContainer>
    </div>
  );
};

export default SettingsPage;
