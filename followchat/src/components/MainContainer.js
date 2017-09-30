import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Responsive, WidthProvider} from 'react-grid-layout'
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import  FCPanel from './FCPanel';

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const drawerWidth = 240;
const styles = theme => ({
  root: {
    marginTop: 30,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  cardA : {
    background: 'white',
    borderColor: 'gray',
    borderStyle: 'solid',  
    borderWidth: 1
  },
  cardB : {
    background: 'white',
    borderColor: 'gray',
    borderStyle: 'solid',  
    borderWidth: 1
  },
  cardC : {
    background: 'white',
    borderColor: 'gray',
    borderStyle: 'solid',  
    borderWidth: 1
  },
  
  

});

class MainContainer extends Component {


  render() {
    
    const classes = this.props.classes;
    const page = this.props.page
    const status = page.drawerStatus;
    return (
      <div >
        <h1>{page.path}</h1>
        <ResponsiveReactGridLayout breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
      cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}} rowHeight={30} width={1200} isResizable={true}>

          <div className={classes.cardA} key="a" data-grid={{x: 0, y: 0, w: 4, h: 6, minW: 2, maxW: 4}}><FCPanel title={"Profile"}/></div>
          <div className={classes.cardB} key="b" data-grid={{x: 4, y: 0, w: 4, h: 6, minW: 2, maxW: 4}}><FCPanel title={"Feeds"}/></div>
          <div className={classes.cardC} key="c" data-grid={{x: 8, y: 0, w: 4, h: 6, minW: 2, maxW: 4}}><FCPanel title={"Timeline"}/></div>
        </ResponsiveReactGridLayout>
      </div>

    );
  }
}


MainContainer.propTypes = {
    page:  PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
}

// No need to connect()!
export default withStyles(styles)(MainContainer);