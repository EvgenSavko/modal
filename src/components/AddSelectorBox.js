import React, { Component } from 'react';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';

class AddSelectorBox extends Component {
  addSelector = () => {
    this.props.onAddSelector(1);
  };

  render() {
    const battonStyles = {
      marginTop: 10,
    };
    return (
      <div>
        <RaisedButton
          onClick={this.addSelector}
          style={battonStyles}
          primary={true}
          label="Добавить"
        />
      </div>
    );
  }
}
export default connect(
  state => ({
    arrSelectbox: state.arrSelectbox,
  }),
  dispatch => ({
    onAddSelector: value => {
      dispatch({ type: 'ADD_SELECTOR', value });
    },
  }),
)(AddSelectorBox);
