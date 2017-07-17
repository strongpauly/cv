import React, { Component } from 'react';
import propTypes from 'prop-types';
import moment from 'moment';

class Education extends Component {

  static propTypes = {
    education: propTypes.object
  }

  formatDate ( entry ) {
    return moment(entry).format('YYYY');
  }


  render() {
    const education = this.props.education;
    return (
      <div>
        <h6>{education.institution} <small>{this.formatDate(education.startDate)} to {this.formatDate(education.endDate)}</small></h6>
        {education.studyType} {education.area}
      </div>
    );
  }
}

export default Education;
