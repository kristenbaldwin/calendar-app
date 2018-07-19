import React, { Component } from 'react';
import { Col, Button, ButtonGroup, FormGroup, FormControl } from 'react-bootstrap';
import '../styles/TopGrayBar.css';

class TopGrayBar extends Component {
    render() {
        return (
            <Col xs={12} className="gray-bar">
                <div>
                    <div className="circle red" />
                    <div className="circle yellow" />
                    <div className="circle green" />
                </div>
                <ButtonGroup className="buttons1">
                    <Button className="calendarButton" bsSize="xsmall">Calendars</Button>
                    <Button bsSize="xsmall">+</Button>
                </ButtonGroup>
                <ButtonGroup bsSize="xsmall" className="buttons2">
                    <Button className="centerButton">Day</Button>
                    <Button className="centerButton">Week</Button>
                    <Button className="centerButton">Month</Button>
                    <Button className="centerButton">Year</Button>
                </ButtonGroup>
                <FormGroup>
                    <FormControl type="text" placeholder="Search" className="search" />
                </FormGroup>
            </Col>
        )
    }
}

export default TopGrayBar;