
import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as AllActions from '../actions'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import classNames from 'classnames';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Icon from 'material-ui/Icon';
import List,{ListItem, ListItemIcon, ListItemText,ListItemAvatar,ListItemSecondaryAction } from 'material-ui/List';
import Menu, { MenuItem } from 'material-ui/Menu';
import SelectMenu from '../components/SelectMenu';
import SocialMediaIcons from '../components/SocialMediaIcons'
import PostData from '../components/PostData'
import Infi from '../components/Infi'
import DashSlider from '../components/DashSlider'

import {socialData} from '../data/data'
import Infinite from '@srph/react-infinite-scroll';

import {
    SocialIcon  
  } from 'react-social-icons';
const styles = theme => ({
  card: {
    maxWidth: 350,
    maxHeight:630,
    overflow: 'auto'
  },
  avatar: {
    backgroundColor: red[500],
  },
  flexGrow: {
    flex: '1 1 auto',
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  hide: {
    display: 'none', 
  },
});

const Loader = () =>
<div className="loader">
  <div />
  <div />
  <div />
</div>

class SocialCard extends React.Component {
  state = { 
   expanded: false, 
   age: '',
   name: 'hai', 
   items: ["test","test1","test2","test4","test","test"],
   loading: false
 };

 
   
  handleClose = (index) => {
    console.log(index);
    this.props.actions.hideSocial(index);
  };


  

  render() {
    const classes = this.props.classes;
    const {page, posts} = this.props;
    const socialData = posts.socialData;
    
    const socialItems = socialData.map((socItem, index) =>
    
    // <Infinite key={index}  callback={this.request1(index)}  disabled={this.state.loading}>
     
       <Card  className={classNames(classes.card, socItem.isHidden && classes.hide)}>
          <CardActions disableActionSpacing style={{ backgroundColor: 'rgb(222, 226, 226)', borderBottom: '1px solid', borderBottomColor: '#888884' }}>
            <List>
              <ListItem >
                <ListItemAvatar>
                  <Icon style={{ fontSize: 12 }}>< SocialIcon style={{ width: 25, height: 25 }} network={socItem.icon} /></Icon>
                </ListItemAvatar>
                <ListItemText
                  primary={<Typography style={{ fontSize: 12 }} >{socItem.itemTitle}</Typography>}
                />
              </ListItem>
             
            </List>
            <div className={classes.flexGrow} />
            <IconButton aria-label="Refresh">
              <Icon>
                autorenew
            </Icon>
            </IconButton>
            <IconButton aria-label="Maximize">
              <Icon>
                fullscreen
            </Icon>
            </IconButton>
            <IconButton aria-label="Show more" onClick={()=>{this.handleClose(socItem.id)}}>
              <Icon>
                close
            </Icon>
            </IconButton>
          </CardActions>

          <CardActions disableActionSpacing style={{ backgroundColor: 'rgb(222, 226, 226)' }}>
            <SelectMenu menuOptions={page.selctMenuOptions} />
            <div className={classes.flexGrow} />
            <IconButton aria-label="Show more">
              <Icon>
                settings
            </Icon>
            </IconButton>
          </CardActions>
          <PostData  postData={socItem.posts}/>
         
        </Card>

       
        // </Infinite>
         
        
    );

    return (
       
      <div  className={classes.row}>
        {socialItems}
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


SocialCard.propTypes = {
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
) (withStyles(styles)(SocialCard));