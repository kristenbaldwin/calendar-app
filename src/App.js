import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import TopGrayBar from './components/TopGrayBar';
import Calendar from './components/Calendar';
import './App.css';

class App extends Component {
  render() {
    return (
      <Grid fluid={true}>
        <Row className="row-header">
          <TopGrayBar />
        </Row>
        <Row>
          <Calendar />
        </Row>
      </Grid>
    );
  }
}

export default App;
