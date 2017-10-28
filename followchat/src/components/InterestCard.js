
import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as AllActions from '../actions';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card  from 'material-ui/Card';
import InterestData from '../components/InterestData';

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


class InterestCard extends React.Component {
  
  render() {
    const classes = this.props.classes;
    const {posts} = this.props;
    const intData = posts.intData;

    
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