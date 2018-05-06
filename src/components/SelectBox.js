import React, { Component } from 'react';
import { connect } from 'react-redux';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import { red500, yellow500, blue500 } from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';

import SelectBoxStyle from './SelectBoxStyle.css';

const styles = {
  customWidth: {
    width: 30,
  },
};

class SelectBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      index: this.props.index,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value,
      index: nextProps.index,
    });
  }

  compareValue = () => {
    switch (this.state.value) {
      case 1:
        return '22';
        break;
      case 2:
        return '12';
        break;
      case 3:
        return '4';
        break;
    }
  };

  deleteSelectBox = () => {
    this.props.onDelete(this.state.index);
  };

  handleChange = (event, index, value) => {
    this.setState({ value });
    this.props.onEditArrSelectBox(value, this.state.index);
    console.log('до песле', this.state.value, value);
  };
  render() {
    const iconStyles = {
      marginRight: 24,
    };
    console.log();
    return (
      <div>
        <div id="selectBox" key={new Date().getTime()}>
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={1} primaryText="Twin" />
            <MenuItem value={2} primaryText="Tripple" />
            <MenuItem value={3} primaryText="Quadro" />
          </DropDownMenu>
          <TextField
            autofocus
            value={this.compareValue()}
            hintText="Hint Text"
            style={styles.customWidth}
          />
          <FontIcon
            onClick={this.deleteSelectBox}
            className="material-icons"
            style={iconStyles}
            color={red500}
          >
            clear
          </FontIcon>
        </div>
      </div>
    );
  }
}
export default connect(
  state => ({
    arrSelectbox: state.arrSelectbox,
  }),
  dispatch => ({
    onDelete: index => {
      dispatch({ type: 'DEL_SELECTDOX', index });
    },
    onEditArrSelectBox: (value, index) => {
      const payload = {
        value,
        index,
      };
      dispatch({ type: 'EDIT_SELECTDOX', payload });
    },
  }),
)(SelectBox);
