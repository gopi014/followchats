
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Icon from 'material-ui/Icon';
import List,{ListItem, ListItemIcon, ListItemText,ListItemAvatar,ListItemSecondaryAction } from 'material-ui/List';
import Menu, { MenuItem } from 'material-ui/Menu';
import SelectMenu from '../components/SelectMenu';
import SocialMediaIcons from '../components/SocialMediaIcons'

import {
    SocialIcon  
  } from 'react-social-icons';
const styles = theme => ({
  card: {
    maxWidth: 350, 
  },
  media: {
    height: 194,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  flexGrow: {
    flex: '1 1 auto',
  },
});

const menuOptions = [
    'Show all posts',
    'Scheduled',
    'Private',
  ];
  
  const socialMenuOptions=[
    {
      "iconName": 'facebook',
      "title": "Facebook"
   },
   {
    "iconName": 'google',
    "title": "Google"
   },  
    {
      "iconName": 'pinterest',
      "title": "Pinterest"
    }];
  

class RecipeReviewCard extends React.Component {
  state = { 
  expanded: false, 
  age: '',
  name: 'hai', 
};



  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const classes = this.props.classes;
    return (
      <div>
        <Card className={classes.card}>
        <CardActions disableActionSpacing style={{backgroundColor:'rgb(222, 226, 226)',borderBottom: '1px solid', borderBottomColor: '#888884'}}>
        <List>
                  <ListItem >
                    <ListItemAvatar>
                    <Icon style={{fontSize:12}}>< SocialIcon style={{ width:25,height:25}} network = "google" /></Icon>
                    </ListItemAvatar>
                    <ListItemText 
                    primary={<Typography style={{fontSize:12}} >My Post</Typography>}
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
            <IconButton aria-label="Show more">
            <Icon>
                close
            </Icon>
            </IconButton>
            
          </CardActions>

          <CardActions disableActionSpacing style={{backgroundColor:'rgb(222, 226, 226)'}}>
        
          <SelectMenu menuOptions={menuOptions}/>

            <div className={classes.flexGrow} />
            <IconButton aria-label="Show more">
            <Icon>
                settings
            </Icon>
            </IconButton>
           
          </CardActions>

          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                S
              </Avatar>
            }
            title="Siddu Mirji"
            subheader="September 14, 2016"
          />
          <List style={{paddingTop:1,paddingBottom:1}}>
            <ListItem style={{paddingTop:2,paddingBottom:2}}>
            <SocialMediaIcons socialMedias={socialMenuOptions}/>
            </ListItem>
        </List>
          <CardMedia
            className={classes.media}
            image={"'" + require('../images/interstellardd.jpg') + "'"}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography component="p">
            Interstellar, as everyone has noted, is a stupendously ambitious movie. It’s also pretty complicated—and not just because of the science involved. 
            If you’re like us, you probably walked out of the theater with a bunch of questions. We try to answer a number of them below.            
            </Typography>
          </CardContent>
          <CardActions disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="Share">
              <ShareIcon />
            </IconButton>
            <div className={classes.flexGrow} />
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} transitionDuration="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph type="body2">
                Who are the mysterious “they” people keep referring to?
              </Typography>
              <Typography paragraph>
              Assuming Cooper (Matthew McConaughey) is right, “they” are our descendants, who have evolved to exist in five dimensions. Because they exist in five dimensions (time being the fourth dimension), their experience of time is not linear in the same way that ours is. They create the wormhole and the tesseract that saves Cooper.
              </Typography>
              <Typography paragraph>
              I don’t understand the ending. If “they” are descended from humans, and Cooper saves humanity, then how could “they” exist in the future if Cooper hasn’t saved humanity yet? Or, as Vulture put it, “you can’t travel back in time and engineer your own salvation.” Right?
              A lot of science fiction, at least, would disagree with you. The ending of Interstellar seems to present a “bootstrap paradox.” In short, this is a type of time paradox in which a chicken sends an egg back in time, which egg then becomes that chicken. A popular example is The Terminator: In the first movie in the series, Kyle Reese is sent back in time by John Connor to protect Sarah Connor, John Connor’s mother. The paradox is that Reese turns out to be the father of John Connor—by sending Reese back in time, John Connor created himself. (Similarly, by going back in time to try to kill John Connor, Skynet leaves behind the advanced robotic parts that lead to the creation of Skynet.)
              </Typography>
              <Typography paragraph>
              Without time travel, whether such a thing is possible remains theoretical, but it’s something theoretical physicists do argue about. (If you’d like to read more, theoretical physicist Kip Thorne has a whole chapter about this in his book The Science of Interstellar.)
              </Typography>
              <Typography>
              Why does Dr. Mann (Matt Damon) try to kill Cooper and escape?
Because it’s only a matter of time before they figure out that he’s been lying about his planet and putting the whole future of the human race at risk just to save himself. By killing Cooper and stealing his ship, he can escape the planet and no one else will ever know what he’s done. (He may also be a little deranged, and they may not have enough resources for everyone to survive.)
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);