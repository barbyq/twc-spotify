'use strict';
import React, { Component, PropTypes } from 'react';

class ProfilePicture extends Component {
  constructor(props) {
    super(props);
    this.style = {
      height: '300px',
      backgroundColor: 'gray'
    }
  }

  render() {
    debugger;
    let profile = null;
    if (this.props.src && this.props.src.length) {
      profile = (
        <img
          style={{width: this.props.width}}
          src={this.props.src[1].url} />
      );
    } else {
      profile = (
        <div className="no-pic" style={this.style}></div>
      );
    }
    return profile;
  }
}
export default ProfilePicture;
