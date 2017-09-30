import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';

// Material Styles
import { withStyles } from 'material-ui/styles';


// Components
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import Card, { CardHeader} from 'material-ui/Card';
import Switch from 'material-ui/Switch';
import IconButton from 'material-ui/IconButton';
import Tabs, {Tab} from 'material-ui/Tabs';
import Button from 'material-ui/Button';
import {
  SocialIcon
} from 'react-social-icons';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

import Slide from 'material-ui/transitions/Slide';
import cookie from 'react-cookies';
import AppBar from 'material-ui/AppBar';

// Icons
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';
import StarIcon from 'material-ui-icons/Star';
import SendIcon from 'material-ui-icons/Send';
import SettingsPowerIcon from 'material-ui-icons/SettingsPower';
import InvertColorsIcon from 'material-ui-icons/InvertColors';
import CloseIcon from 'material-ui-icons/Close';


// Local Image
import remyImage from '../images/user.jpg';

function TabContainer(props) {
  return <div style = {
    {
      padding: 20
    }
  } > {
    props.children
  } </div>;
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
// Style constant for Nav menu component
const styles = theme => ({
  list: {
    width: 250,
    flex: 'initial',
  },
  listFull: {
    width: 'auto',
    flex: 'initial',
  },
  avatar: {
    margin: 5,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
  closeIcon:{
    float:'right',
    top:-12,
    left:10,
  }
});

const mainOptions = [
  {
     "iconName": <InboxIcon/>,
     "title": "Inbox"
  },
  {
     "iconName": <StarIcon/>,
     "title": "Starred"
  },
  {
     "iconName": <SendIcon/>,
     "title": "Send mail"
  },
  {
     "iconName": <DraftsIcon/>,
     "title": "Drafts"
  },
];

const subOptions = [
  {
     "iconName": <SettingsPowerIcon/>,
     "title": "Logout"
  }
];

const themeOptions = [
  {
     "iconName": <InvertColorsIcon/>,
     "title": "Theme"
  }
];

class NavMenu extends Component {

  state = {
    open: false,
    theme: false,
    socialMedia:false,
    value:'one'
  };
    handleChange = (event, value) => {
      this.setState({value});
    };
  logoutAction = () => {
        cookie.remove('token', { path: '/' });
        cookie.remove('email', { path: '/' });
        this.props.logOut();
  }

  handleLogoutAction = (status) => {
    this.setState({ open: false, socialMedia:false});
    if (status) {
        setTimeout(function() { 
          this.logoutAction(); 
        }.bind(this), 1000);
    }
  };


  handleLogoutYesAction = () => this.handleLogoutAction(true);
  handleLogoutNoAction = () => this.handleLogoutAction(false);

  handleLogoutState() {  
    this.setState({ open: true });
  }

  toggleDrawer = (side, open) => {
    this.props.changeDrawerStatus(open);
  };

  handleLeftOpen = () => this.toggleDrawer('left', true);
  handleLeftClose = () => this.toggleDrawer('left', false);
  handleThemeChange = name => (event, checked) => {
    this.setState({ [name]: checked });
    this.props.changeThemeStatus(checked);
  };

handleClickListItem =() =>{
  this.setState({ socialMedia: true });
}

  render() {
    const page = this.props.page
    const classes = this.props.classes;

    const logoutPopupBox =  (
      <div>
        <Dialog open={this.state.open} transition={Slide} onRequestClose={this.handleLogoutNoAction}>
          <DialogTitle>
            {"React Skeleton"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure want to logout the app?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleLogoutYesAction} color="primary">
              Yes
            </Button>
            <Button onClick={this.handleLogoutNoAction} color="primary">
              No
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
    const addSocialMediaPopupBox = (
      <div>
        <Dialog
          open={this.state.socialMedia} transition={Slide} onRequestClose={this.handleLogoutNoAction} contentStyle={{ width: 100 }}
        >
          <DialogTitle>Add Social Medias 
                  <IconButton className={classes.closeIcon} aria-label="close" onClick={this.handleLogoutNoAction}>
              <CloseIcon />
            </IconButton>
            </DialogTitle>
          <DialogContent>
               < AppBar position = "static" color = "default" style={{height:'60px'}}>
             < Tabs value = {this.state.value} onChange = {this.handleChange} indicatorColor = "primary" textColor = "default">
               < Tab value = "one" icon = {< SocialIcon network = "twitter" />} style={{minWidth:'75px',marginTop:'2px',marginBottom:'4px',height:'54px'}}/>
               < Tab value = "two" icon = { < SocialIcon network = "facebook"/>} style={{minWidth:'75px',marginTop:'2px',marginBottom:'4px',height:'54px'}}/>
               < Tab value = "three" icon = { < SocialIcon network = "instagram" />} style={{minWidth:'75px',marginTop:'2px',marginBottom:'4px',height:'54px'}}/>
               < Tab value = "four" icon = { < SocialIcon network = "linkedin" />} style={{minWidth:'75px',marginTop:'2px',marginBottom:'4px',height:'54px'}}/>
               < Tab value = "five" icon = { < SocialIcon network = "tumblr" />} style={{minWidth:'75px',marginTop:'2px',marginBottom:'4px',height:'54px'}}/>
               < Tab value = "six" icon = { < SocialIcon network = "pinterest" />} style={{minWidth:'75px',marginTop:'2px',marginBottom:'4px',height:'54px'}}/>
               < Tab value = "seven" icon = { < SocialIcon network = "google" />} style={{minWidth:'75px',marginTop:'2px',marginBottom:'4px',height:'54px'}}/>
               </Tabs>
               </AppBar>
                      {this.state.value === 'one' && <TabContainer > {'Item one'} </TabContainer>} 
                      {this.state.value === 'two' && <TabContainer > {'Item Two'} </TabContainer>} 
                      {this.state.value === 'three' && <TabContainer > {'Item Three'} </TabContainer>}
                      {this.state.value === 'four' && < TabContainer > {'Item four'} </TabContainer>}
                      {this.state.value === 'five' && < TabContainer > {'Item five'} </TabContainer>}
                      {this.state.value === 'six' && < TabContainer > {'Item six'} </TabContainer>}
                      {this.state.value === 'seven' && < TabContainer > {'Item six'} </TabContainer>}
          </DialogContent>
        </Dialog>
      </div>
    );
   // Main menu list
    const mainListItems = (
      <div>
        {mainOptions.map(option =>
          <ListItem button key={option.title} onClick={this.handleClickListItem}>
              <ListItemIcon>
                {option.iconName}
              </ListItemIcon>
              <ListItemText primary={option.title}/>
            </ListItem>
          )}
      </div>
    );

    // Sub menu list
    const subListItems = (
      <div>
        {subOptions.map(option =>
            <ListItem button key={option.title} onClick= {() => this.handleLogoutState()}>
              <ListItemIcon>
                {option.iconName}
              </ListItemIcon>
              <ListItemText primary={option.title}/>
            </ListItem>
          )}
      </div>
    );

    const themeStatus = this.state.theme ? this.state.theme : page.themeChange;

    // Sub menu list
    const themeListItems = (
      <div>
        {themeOptions.map(option =>
            <ListItem button key={option.title} >
              <ListItemIcon>
                {option.iconName}
              </ListItemIcon>
              <ListItemText primary={option.title}/>
              <Switch
                checked={themeStatus}
                onChange={this.handleThemeChange('theme')}
                aria-label="theme"
              />
            </ListItem>
          )}
      </div>
    );

    const user = this.props.user.user
    const userEmail =  user.email
    // Merge list with card.
    const sideList = (
      <div>
       <Card className={classes.card}>
          <CardHeader
            avatar= {
              <Avatar
                alt="Adelle Charles"
                src={remyImage}
                className={classNames(classes.avatar, classes.bigAvatar)}
              />
            }
            title={userEmail}
            subheader={ (new Date()).toDateString()}
          />
        </Card>
        <List className={classes.list} disablePadding>
          {mainListItems}
        </List>
        <Divider />
        <List className={classes.list} disablePadding>
          {subListItems}
        </List>
         <Divider />
        <List className={classes.list} disablePadding>
          {themeListItems}
        </List>
      </div>
    );

    const status = this.state.open ? this.state.open : page.drawerStatus;


    return (
      <Drawer
          open={status}
          onRequestClose={this.handleLeftClose}
          onClick={this.state.open && this.handleLeftClose} >
        {sideList}
        {logoutPopupBox}
        {addSocialMediaPopupBox}
      </Drawer>
    );
  }
}

NavMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  user:  PropTypes.object.isRequired,
  page:  PropTypes.object.isRequired,
  changeDrawerStatus:  PropTypes.func.isRequired,
  changeThemeStatus: PropTypes.func.isRequired,
  logOut: PropTypes.func.isRequired
};


// No need to connect()!
export default withStyles(styles)(NavMenu);

