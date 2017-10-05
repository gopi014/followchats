import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import Icon from 'material-ui/Icon';
import {SocialIcon} from 'react-social-icons';
const styles = theme => ({
  iconAvatar: {
    margin: 3,
    color: 'white',
    width:25,
    height:25,
  }
});

class SocialMediaIcons extends React.Component {
  handleSocialIcon=(option)=>{
    console.log(option);
  }
  render() {
    const classes = this.props.classes;
    const socialMenuOptions = this.props.socialMedias;
    return (
         <div >
          {socialMenuOptions.map(option =>
          <IconButton key={option.title} style={{ width: 30 }} onClick={() =>{this.handleSocialIcon(option)}}>
            <Avatar className={classes.iconAvatar}>
            <Icon style={{fontSize:18}}>< SocialIcon style={{width:35,height:40}}  network = {option.iconName} /></Icon>
            </Avatar>
          </IconButton>
            )}
        </div>
    );
  }
}

SocialMediaIcons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SocialMediaIcons);