import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as AllActions from '../actions'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import Icon from 'material-ui/Icon';
import {SocialIcon} from 'react-social-icons';
import HeaderNavMenu from '../components/HeaderNavMenu';
const styles = theme => ({
  iconAvatar: {
    margin: 3,
    color: 'white',
    width:25,
    height:25,
  }
});

class SocialMediaIcons extends React.Component {
  
  showSocial = (index) => {
   console.log(index);
   this.props.actions.showSocial(index);
        };

        
  render() {
    const classes = this.props.classes;
    const socialMenuOptions = this.props.socialMedias;
    
    return (
         <div >
          {socialMenuOptions.map(option =>
            <IconButton 
              key={option.name} 
              style={{width:30,height:30}}  
              onClick={()=>{this.showSocial(option.id)}}
            >
            <Avatar className={classes.iconAvatar}>
            <Icon style={{fontSize:18}}>< SocialIcon style={{width:35,height:40}}  network = {option.icon} /></Icon>
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


const mapStateToProps = state => ({
  posts: state.posts,
  })

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AllActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (withStyles(styles)(SocialMediaIcons));
