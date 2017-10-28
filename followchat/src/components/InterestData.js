import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import red from 'material-ui/colors/red';
import Avatar from 'material-ui/Avatar';
import  { CardHeader, CardMedia, CardContent } from 'material-ui/Card';
import SocialMediaIcons from '../components/SocialMediaIcons';
import Typography from 'material-ui/Typography';
import List,{ListItem } from 'material-ui/List';


const styles = theme => ({

media: {
    height: 195,
  
  },
 avatar: {
   backgroundColor: red[500],
     },
});

class InterestData extends React.Component {
  render() {
    const classes = this.props.classes;

    const interestData = this.props.interestData;
    
    const interestItems = interestData.map((interestItem, index) =>
    <div key={index}>
        
    <CardHeader style={{alignItems:'right'}}
    avatar={
      <Avatar aria-label="Recipe" className={classes.avatar}>
        {interestItem.profileImage}
      </Avatar>
    }
    title= {interestItem.name }
    subheader={<div><span style={{float:'left'}}>{interestItem.place}</span>
    <span style={{float:'left',paddingLeft:94}}>{interestItem.timeofPost}</span>
    <span style={{float:'left'}}>{<List style={{ paddingTop: 0, paddingBottom: 1 }}>
      <ListItem style={{ paddingTop: 0, paddingBottom: 2,paddingLeft:0,paddingRight:0 }}>
        <SocialMediaIcons socialMedias={interestItem.connectedMedia} />
      </ListItem>
    </List>}
    </span>
    </div>}
  />
    
    
    <CardMedia
      className={classes.media}
      image={"'" +interestItem.postData.mediaUrl+ "'"}
    />
     <CardContent>
      <Typography component="p">
      Interstellar, as everyone has noted, is a stupendously ambitious movie. It’s also pretty complicated—and not just because of the science involved. 
      If you’re like us, you probably walked out of the theater with a bunch of questions. We try to answer a number of them below.            
      </Typography>
    </CardContent>
    
         </div>)
    
       return (
        <div>
          
          {interestItems} 
          
      </div>
    );
  }
}

InterestData.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InterestData);