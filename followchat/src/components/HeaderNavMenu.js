import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as AllActions from '../actions'
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
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import Tabs, { Tab } from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import NavigationClose from 'material-ui-icons/Close';
import { SocialIcon } from 'react-social-icons';
import SocialMediaIcons from '../components/SocialMediaIcons'
import { mailFolderListItems, otherMailFolderListItems }  from '../data/tileData';
const drawerWidth = 240;
const primary = '#00bcd4'; 
 
function TabContainer(props) {
  return <div style={{ padding: 10 }}>{props.children}</div>;
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({ 
  appBar: {
    position: 'fixed',
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
    position: 'fixed',
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
    socialMedia: false,
    value: 'one',
    dense: false,
    secondary: true,
    settingDrawer : false,
    tabval: 0
  };
  handleDrawerOpen = () => {
    this.props.changeDrawerStatus(true);
  };

  handleChange = (event, tabval) => {
    console.log(event.currentTarget);
    this.setState({ tabval });
  };

  handleDrawerClose = () => {
    this.props.changeDrawerStatus(false);
  };

  toggleDrawer = (open) => () => {
    this.setState({
      settingDrawer: open,
    });
  };
  handleDialogOpen = () => {
    this.setState({ dialogOpen: true });
  };
  handleDialogClose = () => {
    this.setState({ dialogOpen: false });
  };
  render() {
    const {page, posts,classes} = this.props;
    const drawerMenuOptions = page.drawerMenuOptions;
    const socialData = posts.socialData;
    const status = page.drawerStatus;
    const { dense, secondary, tabval } = this.state;     
    const mainMenuListItems = (
        <div>
          {drawerMenuOptions.mainMenuOptions.map(option =>
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
          {drawerMenuOptions.subOptions.map(option =>
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
          {drawerMenuOptions.otherOptions.map(option =>
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

      const sideList = (
        <div>
          <List className={classes.list}>{mailFolderListItems}</List>
          <Divider />
          <List className={classes.list}>{otherMailFolderListItems}</List>
        </div>
      );
  
      const fullList = (
        <div>
          <List className={classes.listFull}>{mailFolderListItems}</List>
          <Divider />
          <List className={classes.listFull}>{otherMailFolderListItems}</List>
        </div>
      );
      const settingDraw = (
        <Drawer
        anchor="right"
        open={this.state.settingDrawer}
        onRequestClose={this.toggleDrawer(false)}
      >
        <div tabIndex={0} role="button" onClick={this.toggleDrawer('right', false)}>
          {sideList}
        </div>
      </Drawer>
      );
     

    return (
      
        <div>
          <AppBar position="fixed" className={classNames(classes.appBar, status && classes.appBarShift)}  color="default">
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
            <IconButton aria-label="Show more" onClick={this.toggleDrawer('right', true)}>
              <Icon style={{fontSize:35,paddingLeft:25,marginTop:12}}>
                settings
            </Icon>
            </IconButton>
        
                 
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
                <SocialMediaIcons socialMedias={socialData}/>
                <ListItemSecondaryAction>
                  <Button fab style={{ backgroundColor: primary, width: 36, height: 35, top: 5 }} onClick={this.handleDialogOpen}>
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
          {settingDraw}
          <Dialog open={this.state.dialogOpen} onRequestClose={this.handleDialogClose}>
            <DialogTitle style={{ padding: '10px 0px 0px 10px', fontSize: '16px' }}><div><h2 style={{ fontSize: '16px', display: "inline" }}>Add Social Medias</h2>
              <IconButton color="default" aria-label="Menu" onClick={this.handleDialogClose.bind(this)} style={{ float: 'right', marginTop: '-15px' }}>
                <NavigationClose />
              </IconButton>
            </div>
            </DialogTitle>
            <Paper style={{ width: 400, backgroundColor: "#f6f6f6" }} color="default">
              <Tabs value={tabval} onChange={this.handleChange} scrollButtons="off">
              {socialData.map(option =>
                <Tab color="default" style={{ minWidth: 50 }} media={option.name} icon={<Icon >< SocialIcon style={{ width: 40, height: 40 }} network={option.icon} /></Icon>} />

                )}
              </Tabs>
            </Paper>
            {<TabContainer><p style={{ fontSize: '20px', color: '#A9A9A9', fontWeight: 500 }}>Connect {socialData[tabval].icon} to your network</p>
              <Button style={{ fontSize: '10px', color: primary, border: '1px solid', borderColor: primary }}>
              <Icon color="#A9A9A9" >add</Icon>
              Add an Account
            </Button>
            </TabContainer>}
          </Dialog>
        </div>
      
    );
  }
} 

HeaderNavMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  changeDrawerStatus:  PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  page:  state.page,
  posts:  state.posts
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(AllActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (withStyles(styles)(HeaderNavMenu));