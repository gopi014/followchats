import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Menu, { MenuItem } from 'material-ui/Menu';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';
const styles = theme => ({
  root: {
    maxWidth: 300
  },
});

class SelectMenu extends React.Component {
  state = {
    anchorEl: null,
    open: false,
    selectedIndex: 0,
  };

  button = undefined;

  handleClickListItem = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleMenuItemClick = (event, index) => {
    this.setState({ selectedIndex: index, open: false });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    const classes = this.props.classes;
    const menuOptions = this.props.menuOptions;
    return (
      <div className={classes.root}>
        <List>
          <ListItem
            button
            aria-haspopup="true"
            aria-controls="lock-menu"
            onClick={this.handleClickListItem}
          >
            <ListItemText 
             primary={<Typography  styles={{fontSize:12}}>{menuOptions[this.state.selectedIndex]}</Typography>}
            />
            <Icon>
                expand_more
            </Icon>
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
        >
          {menuOptions.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === this.state.selectedIndex}
              onClick={event => this.handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

SelectMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectMenu);