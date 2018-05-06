import React, { Component } from 'react';
import { connect } from 'react-redux';

class MainObject extends Component {
  render() {
    const arrMainObjects = this.props.arrMainObject;
    return (
      <div>
        {' '}
        {arrMainObjects.map(item => {
          return (
            <div>
              <p>
                {item.name} : {item.value}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}
export default connect(state => ({
  arrMainObject: state.arrMainObject,
}))(MainObject);
