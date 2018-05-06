import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import { red500, yellow500, blue500 } from 'material-ui/styles/colors';

import SelectBox from './SelectBox.js';
import AddSelectorBox from './AddSelectorBox.js';
import ModalStyle from './ModalStyle.css';

const styles = {
  customWidth: {
    width: 510,
  },
};
class Modal extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSave = () => {
    console.log(this.props.arrSelectbox);
    const newarr = this.props.arrSelectbox.map(item => {
      switch (item) {
        case 1:
          return {
            name: 'Twin',
            value: '22',
          };
          break;
        case 2:
          return {
            name: 'Tripple',
            value: '12',
          };
          break;
        case 3:
          return {
            name: 'Quadro',
            value: '4',
          };
          break;
      }
    });
    this.props.onAddObj(newarr);
    this.setState({ open: false });
  };

  render() {
    const actions = [
      <FlatButton label="Отмена" primary={true} onClick={this.handleClose} />,
      <FlatButton
        label="Сохранить"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleSave}
      />,
    ];

    const iconStyles = {
      marginRight: 24,
    };
    const battonStyles = {
      marginTop: 10,
    };
    return (
      <div>
        <RaisedButton label="Структура номеров" onClick={this.handleOpen} />
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          style={styles.customWidth}
        >
          <div id="modalTitle">
            <h2>Структура номеров</h2>
            <FontIcon onClick={this.handleClose} className="material-icons" style={iconStyles}>
              clear
            </FontIcon>
          </div>
          {this.props.arrSelectbox.map((item, index) => {
            return <SelectBox value={item} index={index} />;
          })}
          <AddSelectorBox />
        </Dialog>
      </div>
    );
  }
}
export default connect(
  state => ({
    arrSelectbox: state.arrSelectbox,
  }),
  dispatch => ({
    onAddObj: arr => {
      dispatch({ type: 'ADD_OBJECT', arr });
    },
  }),
)(Modal);
