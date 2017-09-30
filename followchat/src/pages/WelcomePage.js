import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Material Styles
import { withStyles } from 'material-ui/styles';

// Material design components
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import LoginPanel from '../components/LoginPanel'

import Grid from 'material-ui/Grid';

// Meteraial Icons
import CakeIcon from 'material-ui-icons/Cake';

const styles = theme => ({
  root: {
    marginTop: 30,
    width: '100%',
  },
  body: {
    marginTop: 65,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
   grid:{
    minWidth: 200,
    maxWidth: 200,
    minHeight: 50,
  },
    google: {
    background: '#d14836',
    color: '#fff',
    minWidth: 88,
    height: 36,
    borderRadius: 2,
    border: '1px solid transparent',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  facebook: {
    background: '#4c69ba',
    color: '#fff',
    minWidth: 88,
    height: 36,
    borderRadius: 2,
    border: '1px solid transparent',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

class WelcomePage extends Component {

   handleGoogleLogin = (googleUser) => {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

  handleFacebookLogin = (response) => {
     console.log(response);
  }


  render() {
    const classes = this.props.classes;
    return (
        <div className={classes.root}>
        <AppBar>
          <Toolbar>
            <IconButton color="contrast" aria-label="Menu">
              <CakeIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              Login
            </Typography>
                <Grid container spacing={24}  className={classes.grid}>
                  <Grid item xs={6}>
                  <GoogleLogin
                    clientId="168987634758-4bbbrte0tvckkhssuomihokknh9cr644.apps.googleusercontent.com"
                    buttonText="Google+"
                    className={classes.google}
                    onSuccess={this.handleGoogleLogin.bind(this)}
                    onFailure={this.handleGoogleLogin.bind(this)}
                  >
                  </GoogleLogin>
                  </Grid>
                  <Grid item xs={6}>
                    <FacebookLogin
                      textButton = "Facebook"
                      cssClass={classes.facebook}
                      appId="393386634340907"
                      autoLoad={true}
                      fields="name,email,picture"
                      callback={this.handleFacebookLogin.bind(this)} />
                  </Grid>
                </Grid>    
              </Toolbar>
        </AppBar>
        <div className={classes.body}>
        <LoginPanel user={this.props.user}  loginUser={this.props.loginUser}/>
        </div>
      </div>
    );
  }
}


WelcomePage.propTypes = {
  classes: PropTypes.object.isRequired,
  user:  PropTypes.object.isRequired,
  loginUser:  PropTypes.func.isRequired,
};



// No need to connect()!
export default withStyles(styles)(WelcomePage);
