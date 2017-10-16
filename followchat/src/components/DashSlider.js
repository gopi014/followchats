import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as AllActions from '../actions'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';


var Slider = require('react-slick').default;
const styles = theme => ({
    dashPaper:{
        backgroundImage:  'url(' + require("../images/soci.jpg") + ')',  
        alignItems: 'center',
        borderRadius:10,
        cursor: 'pointer',
        padding:15,
        width:120,
        backgroundPosition: '30% 0',
        backgroundSize: 'cover',
        [theme.breakpoints.up('sm')]: {
          height: 100,
        },
    },
    container: {
        margin: `0 auto`,
        width: 950,
        padding:5,
        paddingRight:40,
        paddingLeft:40,
        backgroundColor:'rgb(0, 188, 212)'
      },
      image :{
        width:50
      },
    card: {
      maxWidth: 350,
      maxHeight:630,
      overflow: 'auto'
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
class DashSlider extends React.Component {
    state = { 
    };
      
    componentDidMount() { setTimeout(() => { window.dispatchEvent(new Event('resize')) }, 0); }

 render() {
    const classes = this.props.classes;
    const {page, posts} = this.props;
    const settings = {
        dots: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,

        
        pauseOnHover: true,
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
    };

    const dashItems = posts.dashSlideData.map((dashItem, index) =>
    <div style={{paddingRight:"20px"}} key={index}>
    <Paper className={classes.dashPaper} style={{}} elevation={4} >
        <Typography type="headline" component="h3" style={{color:"white",textAlign:"center"}}>
        {dashItem.title}
        </Typography>
        <Typography type="body1" component="p" style={{color:"white",textAlign:"center"}}>
        {dashItem.content}
        </Typography>
        <Typography type="body1" component="p" style={{color:"white",textAlign:"left",marginTop: 16}}>
        {dashItem.name}
        </Typography>
    </Paper>
 </div>
    );
 
    return (
        <div className={classes.container}  >
             <Slider  {...settings}>
           
             {dashItems}
               </Slider>
           
         {/*  */}
      </div>
    );
  }
}


DashSlider.propTypes = {
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
  ) (withStyles(styles)(DashSlider));