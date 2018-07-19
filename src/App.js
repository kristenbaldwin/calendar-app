import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import TopGrayBar from './components/TopGrayBar';
import Calendar from './components/Calendar';
import './App.css';

class App extends Component {
  render() {
    return (
      <Grid fluid={true}>
        <TopGrayBar />
        <Calendar />
      </Grid>
    );
  }
}

export default App;
