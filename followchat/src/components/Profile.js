import React from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import List,{ ListItem, ListItemIcon, ListItemText,ListItemAvatar,ListItemSecondaryAction,ListHeader,ListSubHeader } from 'material-ui/List';
import * as AllActions from '../actions';
import SocialMediaIcons from '../components/SocialMediaIcons'


// import wrap from 'file-button-react';

const styles = theme => ({
    mainPaper:{
        width:"100%",
          height:1000,
          backgroundColor: "#f2f2f2"
            // marginTop:123,
        //   marginLeft:60
           },
       image:{
        height:250,
        width:"100%",
        marginTop: -10
    },
    profile:{
        height:150,
        width:150,
        marginTop: -100,
        marginLeft:50
    },
    profileName:{
        height:20,
        // width:150,
        marginTop: -70,
        marginLeft:210,
        fontSize:20,
        color:"#ffffff"
    },
    editButton:{
        position: "absoulte",
        height:35,
        width:120,
           },
    edit:{ position: "relative",
    marginLeft:1350,
    marginTop:-50,
    
},

settingButton:{
    position: "absoulte",
       height:35,
    width:120,
  },
setting:{ position: "relative",
marginRight:123,
marginTop:-35,
float:"right"
},
draftButton:{
    position: "absoulte",
       height:35,
    width:120,
  },
draft:{ position: "relative",
marginRight:10,
marginTop:-35,
float:"right"
},
topContainer:{
    display: "flex",
    flex:1,
    flexDirection: "row",
  },
  mainTypo:{
      backgroundColor:"#ffffff",
      height:300
  }
  
    });

class profile extends React.Component {
    openAttachment(e){
        var inputField=this.refs.fileInput;
        inputField.click()
    }
    render() {
        const {page, posts,classes} = this.props;
        const profileMenu = page.profileMenu;
        const socialData = posts.socialData;
        const profileMenuOption=(
            <div>
                 {profileMenu.map(option =>
                    <List className={classes.topContainer}>
                    <ListItem button>
       
     <ListItemText primary={option.primary} secondary={option.secondary}/>
       
    </ListItem>
    </List>
                 )}
                </div>
        )
        return (
        <Paper className={classes.mainPaper} >
                     <Typography>
               <img className={classes.image} src={require('../images/interstellardd.jpg')} alt=""/> 
        </Typography>
        <Typography className={classes.edit}>
        <input type="button" value="Edit Profile" className={classes.editButton}/>
          </Typography>
          <Typography className={classes.setting}>
          <input type="button" value="Settings"  className={classes.settingButton}/>
          </Typography>
          <Typography className={classes.draft}>
          <input type="button" value="Drafts"  className={classes.draftButton}/>
          </Typography>
          <Typography>
               <img className={classes.profile} src={require('../images/user.jpg')} alt=""/> 
        </Typography>
        <Typography className={classes.profileName}>
        arieshgraphics
        </Typography>
        <Typography style={{height:60, width:"100%", backgroundColor:"#ffffff"}} >
            <div style={{marginLeft:400,marginTop:-10}}>
    {profileMenuOption}
    </div>
         </Typography>
          <Typography style={{marginLeft:10, marginTop:10,height:60, width:"20%", backgroundColor:"#ffffff"}}>
              <div style={{color:"#cccccc"}}>
                  Connected medias
                  </div>
                  <div style={{float:"right",marginTop:-17,marginRight:10, color:"#1a75ff",fontWeight:"Bold"}}>
                      View all
                      </div>
                      <div style={{marginTop:2,marginLeft:5}}>
                      <SocialMediaIcons socialMedias={socialData}/>
                          </div>
              </Typography>      
              <Typography style={{marginLeft:10, marginTop:5,height:180, width:"20%", backgroundColor:"#ffffff"}}>
              <div style={{color:"#cccccc"}}>
                About arieshgraphics
                  </div>
                  <div style={{float:"right",marginTop:-17,marginRight:10, color:"#1a75ff",fontWeight:"Bold"}}>
                     Edit
                      </div>
                      <div style={{marginTop:15}}>
                     About: 
                     </div>
                     <div style={{float:"right",width:270,marginTop:-20}}>
                     Hi, I'm a passionate designer with 3+years of experience. My passion towards art drives me towards UX. My recent clients are Godrej,Panasonic,Apple,Google.
                         </div>
                         <div style={{marginTop:65}}>
                     Works at: 
                     </div>
                     <div style={{float:"right",width:270,marginTop:-20}}>
Tata consultancy service Pvt Ltd.
                     </div>
                     <div style={{marginTop:10}}>
                     Current Location:
                     </div>
                     <div style={{float:"right",width:220,marginTop:-20}}>
Chennai,Tamil Nadu
                     </div>
                  </Typography> 
        </Paper>
  
    )
}
}
profile.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  const mapStateToProps = state => ({
    page:  state.page,
    posts:  state.posts
  })
  const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(AllActions, dispatch)
})
export default connect(mapStateToProps,
mapDispatchToProps) (withStyles(styles)(profile));