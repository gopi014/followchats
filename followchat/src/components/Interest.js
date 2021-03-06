import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AllActions from '../actions';
import { withStyles } from 'material-ui/styles';

import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import InterestCard from '../components/InterestCard';


import TextField from 'material-ui/TextField';
var Slider = require('react-slick').default;
const styles = theme => ({
  typo: {
    width: 800,
    maxHeight:630,
    overflow: 'auto'
  },
mainPaper:{
  width:800,
    height:700,
      // marginTop:123,
    marginLeft:200
         },
 flex: {
          flex: 1,
          paddingLeft:'535px',
          marginTop:0
                            },
 dashPaper: {
   backgroundImage: 'url(' + require("../images/soci.jpg") + ')',
   alignItems: 'center',
   borderRadius: 10,
   cursor: 'pointer',
   padding: 27,
   width: 60,
   backgroundPosition: '30% 0',
   backgroundSize: 'cover',
   [theme.breakpoints.up('sm')]: {
     height: 60,
   },
 },
container: {
 margin: `0 auto`,
   width: 700,
     padding:5,
  paddingRight:40,
  paddingLeft:40,
  // backgroundColor:'rgb(230, 179, 179)'
},
image :{
  width:10
},

   searchField: {
    marginLeft: theme.spacing.unit,
    marginRight: 10,
    width: 100,
    height:35,
   fontSize:14,
    },
  fieldIcon:
  { 
    fontSize: 20,
    position: 'absolute',
    right: 95, 
    top: 20,
    width: 30,
    height: 39,
    fontweight:'bold'
     },
     
  });
class interest extends React.Component {
  state = { 
  };
    
  componentDidMount() { setTimeout(() => { window.dispatchEvent(new Event('resize')) }, 0); }
    render() {
      const {classes} = this.props;
      const {posts} = this.props;
      const intData=posts.intData;
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
      const interestItems = posts.dashSlideData.map((interestItem, index) =>
      <div style={{ paddingRight: "20px" }} key={index}>
        <Paper className={classes.dashPaper} style={{}} elevation={4} >
          <Typography type="headline" component="h3" style={{ color: "white", textAlign: "center" }}>
            {interestItem.title}
          </Typography>
          <Typography type="body1" component="p" style={{ color: "white", textAlign: "center" }}>
            {interestItem.content}
          </Typography>
          <Typography type="body1" component="p" style={{ color: "white", textAlign: "left", marginTop: 16 }}>
            {interestItem.name}
          </Typography>
        </Paper>
 </div >
    );
 
        return (
          <div>
                <Paper className={classes.mainPaper} >
        <Typography type="headline" component="h1" style ={{fontSize:20, paddingLeft:'25px',paddingTop:'16px',display:'inline'}}>
        Interest
        </Typography>
        <Typography type="headline" component="h3" style ={{ paddingLeft:'630px',paddingTop:'16px',display:'inline'}}>
          <IconButton aria-label="Refresh">
              <Icon>
                autorenew
            </Icon>
            </IconButton>
        </Typography>
        <Typography type="headline" component="h2" style ={{}}>
        <hr style={{width:'750px'}}/>
        </Typography>
        <Typography type="headline" component="h1" style ={{ fontSize:20, color:'grey', paddingLeft:'25px',paddingTop:'16px',display:'inline'}}>
        Add Interest
        </Typography>
        <Typography className={classes.flex} style={{ display: 'inline', }} component='div'>
        <div  style={{position: 'relative', display: 'inline-block'}}>
        <Icon   style={{zIndex:1}} className={classes.fieldIcon}>
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
        <Typography className={classes.container} component='div'>
        <Slider  {...settings}>
        
          {interestItems}
            </Slider>
         </Typography>
         <Typography className={classes.typo} component='div'> 
           
         <InterestCard inteData ={intData}/>
         
         </Typography>
          </Paper>
                      
             
              </div>
                               
        )
      }};

      interest.propTypes = {
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
        )  (withStyles(styles)(interest));