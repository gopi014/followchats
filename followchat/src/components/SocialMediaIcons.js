import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
  // constructor(props) {
  //   super(props);
  //  this.state={
  //   iconval1:this.props.iconval,
  // };
 
// };
state={iconval:0}
  handleChange = (event,iconval) => {
      this.setState({iconval: event.currentTarget.value});
    console.log(event.currentTarget.value)
  };
 
  render() {
    const classes = this.props.classes;
    const socialMenuOptions = this.props.socialMedias;
    const iconval1 = this.props.iconval;
    // const {iconval} = this.state; 
  
//  const iconval1 =console.log(iconval)
    

    // const iconval1 = this.props.iconval; 
    
    console.log(this.state.iconval1)
    return (
         <div >
          {socialMenuOptions.map(option =>
          <IconButton value={option.id} key={option.title} onClick={this.handleChange} style={{ width: 30 }} >
            <Avatar className={classes.iconAvatar}>
            <Icon style={{fontSize:18}} >< SocialIcon style={{width:35,height:40}}  network = {option.iconName} /></Icon>
            
            </Avatar>
          </IconButton>
            )}
        </div>
    );
   
    ReactDOM.render(<HeaderNavMenu iconval={this.props.iconval} />, document.getElementById('root'));
    
  }
}

SocialMediaIcons.propTypes = {
  classes: PropTypes.object.isRequired,
  iconval:PropTypes.object.isRequired,
};


export default withStyles(styles)(SocialMediaIcons);