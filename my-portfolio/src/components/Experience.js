import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
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
          <h4 style={{ marginTop: '0px' }}>{this.props.jobName}</h4>
          <p><b>{this.props.jobTitle}</b></p>
          <p>{this.props.jobDescription}</p>
          
        </Cell>
      </Grid>
    );
  }
}

export default Experience;

