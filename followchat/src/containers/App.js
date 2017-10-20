import React, { Component } from 'react';
import PropTypes, { instanceOf } from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withCookies, Cookies } from 'react-cookie';
import axios from "axios";
import { withStyles } from 'material-ui/styles';
import Interest from '../components/Interest';
import InterestCard from '../components/InterestCard';


// Custom Pages

import WelcomePage from '../pages/WelcomePage'
import classNames from 'classnames';
// Custom components
import HeaderNavMenu from '../components/HeaderNavMenu'
import AppFooter from '../components/AppFooter'
import SocialCard from '../components/SocialCard'
import DashSlider from '../components/DashSlider'

// All registered Actions.
import * as AllActions from '../actions'

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';


import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';
const theme1 = createMuiTheme({
  palette: {
    type:  'light', // Switching the dark mode on is a single property value change.
  },
});
const drawerWidth = 240;

const theme2 = createMuiTheme({
  palette: {
    primary: purple, // Purple and green play nicely together.
    accent: {
      ...green,
      A400: '#00e677',
    },
    error: red,
  },
});

const styles = theme => ({
content: {
  height:600,
  width: '100%',
  marginLeft: 0,
  flexGrow: 1,
  backgroundColor: theme.palette.background.default,
  padding: 0,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
   
  marginTop: 78,
  [theme.breakpoints.up('sm')]: {
    content: { 
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
},
contentShift: {
  marginLeft: drawerWidth,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen,
  }),
},
root: {
  width: '100%',
  zIndex: 1,
  height: 600,
},
appFrame: {
  position: 'relative',
  display: 'flex',
  width: '100%',
  height: '100%',
}
});

class App extends Component {
 

  state = {
    open: true,
    theme: false,
    socialMedia:false,
    value:'one'
  };
  componentWillMount(){
    // perform any preparations for an upcoming update
     const { cookies } = this.props;
    var email = cookies.get('email') || null;
    var token = cookies.get('token') || null;
    if (email || token) {
        this.props.actions.loginRestoreEvent(email,"",token);
    }
  }
  handleUserDetailsChange(email, token) {
    const { cookies } = this.props;
    cookies.set('email', email, { path: '/' });
    cookies.set('token', token, { path: '/' });
  }
 
  render() {
    
    const { cookies } = this.props;
    var email = cookies.get('email') || '';
    var token = cookies.get('token') || '';
    const { classes } = this.props;
    if (token) {
      axios.defaults.headers.common['x-access-token'] = token;
    }

    const { user, posts, page } = this.props;
    var isLoggedIn = user.loggedIn;

    if(isLoggedIn){
      email = user.user.email;
      token = user.user.token;
      this.handleUserDetailsChange(email, token)
    } else {
      if (token.length !== 0) {
        isLoggedIn = true;
      }
    } 

    if (!isLoggedIn) {
        email = user.user.email;
        token = user.user.token;
        this.handleUserDetailsChange(email, token)
        return (
          <MuiThemeProvider theme={theme1}>
            <div>
              <WelcomePage user={user}  loginUser={this.props.actions.loginUser}/>
            </div>
          </MuiThemeProvider >
        );
    }
   
    const changedTheme = page.themeChange ? page.themeChange : localStorage.getItem('theme-change-event');
    var pagename;
 switch(page.selectedMenuItem){
  case 'Dashboard':
  pagename= <SocialCard/>;
  break;
  case 'Interest':
  pagename= <Interest/>;
  break;
  default: 
  pagename= <SocialCard/>;
  break;
};

console.log(pagename)
  
    return (
      <MuiThemeProvider theme={changedTheme ? theme2 : theme1}>
       <div className={classes.root}>
        <div className={classes.appFrame}>
          <HeaderNavMenu  changeDrawerStatus={this.props.actions.changeDrawerStatus}/>
          <main className={classNames(classes.content, page.drawerStatus && classes.contentShift)} >
                {/* <MainContainer page={page} user={user} posts={posts} /> */}
                <DashSlider/>
                
               {pagename}
          </main>
          {/* <AppFooter  user={user} /> */}
        </div>
        </div>
      </MuiThemeProvider >
    );
  }
}

App.propTypes = {
  posts: PropTypes.object.isRequired,
  user:  PropTypes.object.isRequired,
  page:  PropTypes.object.isRequired,
  cookies: instanceOf(Cookies).isRequired,
  actions: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  posts: state.posts,
  user: state.user,
  page:  state.page,
  env: state.env,
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(AllActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (withCookies(withStyles(styles)(App)));
