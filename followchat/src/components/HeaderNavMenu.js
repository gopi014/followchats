import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import Icon from 'material-ui/Icon';
import List,{ ListItem, ListItemIcon, ListItemText,ListItemAvatar,ListItemSecondaryAction } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import SocialMediaIcons from '../components/SocialMediaIcons'

const drawerWidth = 240;
const primary = '#00bcd4';
 
const styles = theme => ({ 
  appBar: {
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    height: 1000,
    width: drawerWidth,
    backgroundColor:'#10141c',
  },
  drawerHeader: {
    backgroundImage:  'url(' + require('../images/logo.png') + ')',  
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    height: 56,
    cursor: 'pointer',
    fontSize: 22,
    backgroundSize: 'cover',
    [theme.breakpoints.up('sm')]: {
      height: 100,
    },
  },
  drawerDividerColor:{
    backgroundColor:'rgb(103, 100, 100)'
  },
  menuOptiontext:{
    color:'rgb(103, 100, 100)'
  },
  content: {
    width: '100%',
    marginLeft: -drawerWidth,
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      content: {
        height: 'calc(100% - 64px)',
        marginTop: 64,
      },
    },
  },
  contentShift: {
    marginLeft: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  searchField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 400,
    height:35,
    backgroundColor:'white',
    fontSize:14,
    borderRadius: 25,
    borderWidth: 0.5,
    borderStyle:'solid',
    borderColor: '#d6d7da',
    paddingLeft:10,
    paddingRight:10,
    paddingTop:7,

  },

  composeField:{
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
    height:35,
  
     
    paddingBottom:17,
    fontSize:14,
    
    
  },
  flex: {
    flex: 1,
  },
  fieldIcon:
  { 
    fontSize: 33 ,
    position: 'absolute',
    right: 20, 
    top: 24,
    width: 30,
    height: 39
  },
  iconAvatar: {
    margin: 3,
    color: 'white',
    width:25,
    height:25,
  },
 
  row: {
    display: 'flex',
    justifyContent: 'left',
    marginLeft:12
  }
   
});

class HeaderNavMenu extends React.Component {

    state = {
        open: true,
        theme: false,
        socialMedia:false,
        value:'one',
        dense: false,
        secondary: true,
      };
    
      
  handleDrawerOpen = () => {
    this.props.changeDrawerStatus(true);
  };

  handleDrawerClose = () => {
    this.props.changeDrawerStatus(false);
  };

  render() {
    const { classes } = this.props;
    const page = this.props.page
    const user = this.props.user
    const posts = this.props.post
    const status = page.drawerStatus;
    const { dense, secondary } = this.state;    
    console.log("status "+status);
    const mainMenuOptions = [
        {
           "iconName": 'chat',
           "title": "Follow Chats"
        },
        {
           "iconName": 'poll',
           "title": "Competetors"
        },
        {
           "iconName": 'star',
           "title": "Interest"
        },
        {
           "iconName": 'public',
           "title": "Connected Medias"
        },
        {
            "iconName": 'volume_up',
            "title": "Campaign"
        },
        {
            "iconName": 'free_breakfast',
            "title": "Foodie Group"
        },
      ];
     
      const otherOptions = [
        {
           "iconName": 'group_add',
           "title": "Add another group"
        }
      ];

      const subOptions = [
        {
           "iconName": 'settings_power',
           "title": "Logout"
        }
      ];
      
      const themeOptions = [
        {
           "iconName": 'invertc_olors',
           "title": "Theme"
        }
      ];

      const socialMenuOptions=[
        {
          "iconName": 'facebook',
          "title": "Facebook"
       },
       {
        "iconName": 'twitter',
        "title": "Twitter"
       },
        {
          "iconName": 'pinterest',
          "title": "Pinterest"
        },
      {
        "iconName": 'google',
        "title": "Google"
      }
      ]

    const mainMenuListItems = (
        <div>
          {mainMenuOptions.map(option =>
            <ListItem  button key={option.title} onClick={this.handleClickListItem}>
                <ListItemIcon>
                <Icon className={classes.menuOptiontext}>
                   {option.iconName}
                </Icon>
                </ListItemIcon>
                <ListItemText  primary={<Typography  className={classes.menuOptiontext}>{option.title}</Typography>}/>
            </ListItem>
            )}
        </div>
      );


    const subMenuOptions = (
        <div>
          {subOptions.map(option =>
          <ListItem  button key={option.title} onClick={this.handleClickListItem}>
            <ListItemIcon>
            <Icon className={classes.menuOptiontext}>
               {option.iconName}
            </Icon>
            </ListItemIcon>
            <ListItemText  primary={<Typography  className={classes.menuOptiontext}>{option.title}</Typography>}/>
        </ListItem>
            )}
        </div>
      );

      const otherMenuOptions = (
        <div>
          {otherOptions.map(option =>
            <ListItem  button key={option.title} onClick={this.handleClickListItem}>
                <ListItemIcon>
                <Icon className={classes.menuOptiontext}>
                   {option.iconName}
                </Icon>
                </ListItemIcon>
                <ListItemText  primary={<Typography  className={classes.menuOptiontext}>{option.title}</Typography>}/>
            </ListItem>
            )}
        </div>
      );

     

    return (
      
        <div>
          <AppBar className={classNames(classes.appBar, status && classes.appBarShift)}  color="default">
            <Toolbar disableGutters={!status}>
              <IconButton
                aria-label="open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, status && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography className={classes.flex}>
               <div className="searchTextclass" style={{position: 'relative', display: 'inline-block'}}>
               <Icon color="disabled"  style={{zIndex:1}} className={classes.fieldIcon}>
                search
              </Icon> 
                
                    <TextField
                    className={classes.searchField}
                    id="search"
                    placeholder="Search here"
                    margin="normal"
                      />
              </div>
              </Typography>
              
              <div style={{position: 'relative', display: 'inline-block'}}>
                  <Icon color="disabled" className={classes.fieldIcon} style={{  right: 8,top:30,fontSize:30,}}>
                          sms
                  </Icon>
                
                      <TextField
                      id="name"
                      label="Compose message..."
                      className={classes.composeField}
                      margin="normal"/>
            </div>
        
                 
            </Toolbar>
          </AppBar>
          <Drawer
            type="persistent"
            classes={{
              paper: classes.drawerPaper,
            }}
            open={status}
          >
            <div className={classes.drawerInner}>
              <div className={classes.drawerHeader}>
                <IconButton color="contrast" onClick={this.handleDrawerClose}>
                  <ChevronLeftIcon />
                </IconButton>
              </div>
              
              <List dense={dense}>
                  <ListItem >
                    <ListItemAvatar>
                        <Avatar className={classNames(classes.avatar, classes.bigAvatar)} src={require('../images/profile.png')} size={80}/>
                    </ListItemAvatar>
                    <ListItemText 
                    primary={<Typography  className={classes.menuOptiontext}>Siddappa Mirji</Typography>}
                      secondary={<Typography  className={classes.menuOptiontext}>smirji97@gmail.com</Typography>}
                    />
                  </ListItem>
              </List>
              <Divider className={classes.drawerDividerColor} />
              <List className={classes.list} style={{paddingTop:1,paddingBottom:1}}>
                <ListItem style={{paddingTop:2,paddingBottom:2}}>
                  <SocialMediaIcons socialMedias={socialMenuOptions}/>
                <ListItemSecondaryAction>
                      <Button fab style={{backgroundColor:primary,    width: 36,height: 35,top: 5}}>
                      <Icon color="contrast" >add</Icon>
                      </Button>
                    </ListItemSecondaryAction>
              </ListItem>
              </List>
              <Divider className={classes.drawerDividerColor} />
              <List className={classes.list}>{mainMenuListItems}</List>
              <Divider className={classes.drawerDividerColor} />
              <List className={classes.list}>{otherMenuOptions}
              </List>
              
              <Divider className={classes.drawerDividerColor} />
              <List className={classes.list}>{subMenuOptions}

              </List>
            </div>
          </Drawer>
        </div>
      
    );
  }
}

HeaderNavMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  user:  PropTypes.object.isRequired,
  page:  PropTypes.object.isRequired,
  changeDrawerStatus:  PropTypes.func.isRequired,
};

export default withStyles(styles)(HeaderNavMenu);
