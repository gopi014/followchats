
import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as AllActions from '../actions';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import classNames from 'classnames';
import Icon from 'material-ui/Icon';
import List,{ListItem, ListItemIcon, ListItemText,ListItemAvatar,ListItemSecondaryAction } from 'material-ui/List';
import Menu, { MenuItem } from 'material-ui/Menu';
import SelectMenu from '../components/SelectMenu';
import SocialMediaIcons from '../components/SocialMediaIcons'
import PostData from '../components/PostData'
import InterestData from '../components/InterestData';
import Infi from '../components/Infi'
import {intData} from '../data/data'
import Infinite from '@srph/react-infinite-scroll';
import DashSlider from '../components/DashSlider';
import red from 'material-ui/colors/red';
import {
    SocialIcon  
  } from 'react-social-icons';
  var Slider = require('react-slick').default;
const styles = theme => ({
  card: {
    width:800,
    maxHeight:430,
    overflow: 'auto',
    paddingLeft:3
  
  },
  hide: {
    display: 'none', 
  },
  row: {
    display: 'flex',
    justifyContent: 'left',
    width:800
  },
});

const Loader = () =>
<div className="loader">
  <div />
  <div />
  <div />
</div>

class InterestCard extends React.Component {
  
  render() {
    const classes = this.props.classes;
    const {page, posts} = this.props;
    const intData = posts.intData;
    const inteData=this.props.inteData;
    
   const intItems = intData.map((intItem, index) =>
   
          <Card  className={classes.card}>
          {/* socItem.isHidden && classes.hide */}
         <InterestData  interestData ={intItem.posts}/>
         
        </Card>
         
             );

    return (
       
      <div  className={classes.row}>
        {intItems}
     </div>
      
  
    );
  }

  request1 = (index) => {
    console.log("calling req "+index);
    setTimeout(() => {
     this.props.actions.fetchPosts(index);
    }, 1000);
  }

  request = () => {
    this.setState({ loading: true });
    console.log("calling req");
    setTimeout(() => {
      this.setState({
        loading: false,
        items: this.state.items.concat("this.state.items")
      });
    }, 500);
  }
} 


InterestCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  posts: state.posts,
  page:  state.page
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(AllActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (withStyles(styles)(InterestCard));