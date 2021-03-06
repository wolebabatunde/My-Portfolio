import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = { variable: 0 };
  }

  render() {
    return (
      <Grid>
        <Cell col={4}>
          {this.props.startYear} - {this.props.endYear}
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: '0px' }}>{this.props.schoolName}</h4>
          <p>{this.props.schoolDescription}</p>
          <p><b>{this.props.courseTitle}</b></p>
        </Cell>
      </Grid>
    );
  }
}

export default Education;

