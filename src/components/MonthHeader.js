import React, { Component } from 'react';
import { Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import MonthGrid from './MonthGrid';
import '../styles/Calendar.css';

class MonthHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            month: "July",
        }
    }

    changeBack = () => {
        this.setState({
            month: "July"
        })
    }

    changeForward = () => {
        this.setState({
            month: "August"
        })
    }

    render() {
        return (
            <Row>
                <Row className="month-header">
                    <Col xs={6} className="month">
                        <h1>
                            {this.state.month} <span className="non-bold">2018</span>
                        </h1>
                    </Col>
                    <Col xs={6} className="month-select">
                        <ButtonGroup bsSize="xsmall">
                            <Button onClick={this.changeBack}>&lt;</Button>
                            <Button>Today</Button>
                            <Button onClick={this.changeForward}>&gt;</Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className="day-names">
                        <div className="day weekend">Sun</div>
                        <div className="day">Mon</div>
                        <div className="day">Tue</div>
                        <div className="day">Wed</div>
                        <div className="day">Thu</div>
                        <div className="day">Fri</div>
                        <div className="day weekend">Sat</div>
                    </Col>
                </Row>
                <MonthGrid month={this.state.month} />
            </Row>
        )
    }
}

export default MonthHeader;
