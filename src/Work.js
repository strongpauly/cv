import React, { Component } from 'react';
import propTypes from 'prop-types';
import moment from 'moment';

class Work extends Component {

  static propTypes = {
    work: propTypes.object
  }

  formatDate ( entry ) {
    return moment(entry).format('MMM YY');
  }


  render() {
    const work = this.props.work;
    let company = work.company;
    if(work.website !== undefined) {
      company = <a href={work.website} target="_blank">{company}</a>;
    }
    let highlights;
    if(work.highlights.length > 0) {
      highlights=<ul>{
        work.highlights.map((highlight, index) => <li key={index}>{highlight}</li>)
      }
      </ul>;
    }
    return (
      <div>
        <h6>{company} <small>{this.formatDate(work.startDate)} to {this.formatDate(work.endDate)} <i>{work.position}</i></small></h6>
        <div>{work.summary}</div>
        {highlights}
      </div>
    );
  }
}

export default Work;
