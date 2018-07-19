import React, { Component } from 'react';
import { Row, Col, Modal, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import '../styles/Calendar.css';

class MonthGrid extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            events: [{}],
            date: []
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow(month, day) {
        this.setState({
            show: true,
            date: [month, day]
        });
        console.log("working", month, day);
    }

    addEvent = (e) => {
        e.preventDefault();
        let newEvent = {
            month: this.state.date[0],
            day: this.state.date[1],
            start_time: this.refs.start_hour.value + ':' + this.refs.start_minute.value + ' ' + this.refs.start_ampm.value,
            end_time: this.refs.end_hour.value + ':' + this.refs.end_minute.value + ' ' + this.refs.end_ampm.value
        }
        this.setState({
            events: [...this.state.events, newEvent]
        })
        console.log("added date", this.state.events);
        this.handleClose();
    }

    render() {
        const hoursArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
        let hours = [];
        hours = hoursArray.map((hour) => {
            return (
                <option value={hour}>{hour}</option>
            )
        })

        const minutesArray = ["00", "10", "15", "20", "30", "40", "45", "50"];
        let minutes = [];
        minutes = minutesArray.map((minute) => {
            return (
                <option value={minute}>{minute}</option>
            )
        })
        if (this.props.month === "July") {
            return (
                <div>
                    <Row>
                        <Col xs={12} className="week1">
                            <div className="Sun day-block weekend-block" onClick={this.handleShow.bind(this, "July", 1)}>1</div>
                            <div className="Mon day-block" onDoubleClick={this.handleShow.bind(this, "July", 2)}>2</div>
                            <div className="Tue day-block" onDoubleClick={this.handleShow.bind(this, "July", 3)}>3</div>
                            <div className="Wed day-block" onDoubleClick={this.handleShow.bind(this, "July", 4)}>4</div>
                            <div className="Thu day-block" onDoubleClick={this.handleShow.bind(this, "July", 5)}>5</div>
                            <div className="Fri day-block" onDoubleClick={this.handleShow.bind(this, "July", 6)}>6</div>
                            <div className="Sat day-block weekend-block" onDoubleClick={this.handleShow.bind(this, "July", 7)}>7</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className="week2">
                            <div className="day-block weekend-block" onDoubleClick={this.handleShow.bind(this, "July", 8)}>8</div>
                            <div className="day-block" onDoubleClick={this.handleShow.bind(this, "July", 9)}>9</div>
                            <div className="day-block" onDoubleClick={this.handleShow.bind(this, "July", 10)}>10</div>
                            <div className="day-block" onDoubleClick={this.handleShow.bind(this, "July", 11)}>11</div>
                            <div className="day-block" onDoubleClick={this.handleShow.bind(this, "July", 12)}>12</div>
                            <div className="day-block" onDoubleClick={this.handleShow.bind(this, "July", 13)}>13</div>
                            <div className="day-block weekend-block" onDoubleClick={this.handleShow.bind(this, "July", 14)}>14</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className="week3">
                            <div className="day-block weekend-block" onDoubleClick={this.handleShow.bind(this, "July", 15)}>15</div>
                            <div className="day-block" onDoubleClick={this.handleShow.bind(this, "July", 16)}>16</div>
                            <div className="day-block" onDoubleClick={this.handleShow.bind(this, "July", 17)}>17</div>
                            <div className="day-block" onDoubleClick={this.handleShow.bind(this, "July", 18)}>18</div>
                            <div className="day-block" onDoubleClick={this.handleShow.bind(this, "July", 19)}>19</div>
                            <div className="day-block" onDoubleClick={this.handleShow.bind(this, "July", 20)}>20</div>
                            <div className="day-block weekend-block" onDoubleClick={this.handleShow.bind(this, "July", 21)}>21</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className="week4">
                            <div className="day-block weekend-block" onDoubleClick={this.handleShow.bind(this, "July", 22)}>22</div>
                            <div className="day-block" onDoubleClick={this.handleShow.bind(this, "July", 23)}>23</div>
                            <div className="day-block" onDoubleClick={this.handleShow.bind(this, "July", 24)}>24</div>
                            <div className="day-block" onDoubleClick={this.handleShow.bind(this, "July", 25)}>25</div>
                            <div className="day-block" onDoubleClick={this.handleShow.bind(this, "July", 26)}>26</div>
                            <div className="day-block" onDoubleClick={this.handleShow.bind(this, "July", 27)}>27</div>
                            <div className="day-block weekend-block" onDoubleClick={this.handleShow.bind(this, "July", 28)}>28</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className="week5">
                            <div className="day-block weekend-block" onDoubleClick={this.handleShow.bind(this, "July", 29)}>29</div>
                            <div className="day-block" onDoubleClick={this.handleShow.bind(this, "July", 30)}>30</div>
                            <div className="day-block" onDoubleClick={this.handleShow.bind(this, "July", 31)}>31</div>
                            <div className="day-block"></div>
                            <div className="day-block"></div>
                            <div className="day-block"></div>
                            <div className="day-block weekend-block"></div>
                        </Col>
                    </Row>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Calendar Event</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Date</h4>
                            <p>{this.state.date[0]} {this.state.date[1]}, 2018</p>
                        <h4>Start Time</h4>
                        <FormGroup controlId="start-hour-select">
                            <ControlLabel>Hour</ControlLabel>
                            <FormControl componentClass="select" placeholder="Select" ref="start_hour" required>
                                {hours}
                            </FormControl>
                        </FormGroup>
                        <FormGroup controlId="start-min-select">
                            <ControlLabel>Minute</ControlLabel>
                            <FormControl componentClass="select" placeholder="Select" ref="start_minute" required>
                                {minutes}
                            </FormControl>
                        </FormGroup>
                        <FormGroup controlId="start-ampm-select">
                            <ControlLabel>AM/PM</ControlLabel>
                            <FormControl componentClass="select" placeholder="Select" ref="start_ampm" required>
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </FormControl>
                        </FormGroup>
                        <h4>End Time</h4>
                        <FormGroup controlId="end-hour-select">
                            <ControlLabel>Hour</ControlLabel>
                            <FormControl componentClass="select" placeholder="Select" ref="end_hour" required>
                                {hours}
                            </FormControl>
                        </FormGroup>
                        <FormGroup controlId="end-min-select">
                            <ControlLabel>Minute</ControlLabel>
                            <FormControl componentClass="select" placeholder="Select" ref="end_minute" required>
                                {minutes}
                            </FormControl>
                        </FormGroup>
                        <FormGroup controlId="end-ampm-select">
                            <ControlLabel>AM/PM</ControlLabel>
                            <FormControl componentClass="select" placeholder="Select" ref="end_ampm" required>
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </FormControl>
                        </FormGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.addEvent}>Add Event</Button>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
                </div>
            );
        } else if (this.props.month === "August") {
            return (
                <div>
                <Row>
                    <Col xs={12} className="week1">
                        <div className="Sun day-block weekend-block"></div>
                        <div className="Mon day-block"></div>
                        <div className="Tue day-block"></div>
                        <div className="Wed day-block" onDoubleClick={this.handleShow.bind(this, "August", 1)}>1</div>
                        <div className="Thu day-block" onDoubleClick={this.handleShow.bind(this, "August", 2)}>2</div>
                        <div className="Fri day-block" onDoubleClick={this.handleShow.bind(this, "August", 3)}>3</div>
                        <div className="Sat day-block weekend-block" onDoubleClick={this.handleShow.bind(this, "August", 4)}>4</div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className="week2">
                        <div className="day-block weekend-block" onDoubleClick={this.handleShow.bind(this, "August", 5)}>5</div>
                        <div className="day-block" onDoubleClick={this.handleShow.bind(this, "August", 6)}>6</div>
                        <div className="day-block" onDoubleClick={this.handleShow.bind(this, "August", 7)}>7</div>
                        <div className="day-block" onDoubleClick={this.handleShow.bind(this, "August", 8)}>8</div>
                        <div className="day-block" onDoubleClick={this.handleShow.bind(this, "August", 9)}>9</div>
                        <div className="day-block" onDoubleClick={this.handleShow.bind(this, "August", 10)}>10</div>
                        <div className="day-block weekend-block" onDoubleClick={this.handleShow.bind(this, "August", 11)}>11</div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className="week3">
                        <div className="day-block weekend-block" onDoubleClick={this.handleShow.bind(this, "August", 12)}>12</div>
                        <div className="day-block" onDoubleClick={this.handleShow.bind(this, "August", 13)}>13</div>
                        <div className="day-block" onDoubleClick={this.handleShow.bind(this, "August", 14)}>14</div>
                        <div className="day-block" onDoubleClick={this.handleShow.bind(this, "August", 15)}>15</div>
                        <div className="day-block" onDoubleClick={this.handleShow.bind(this, "August", 16)}>16</div>
                        <div className="day-block" onDoubleClick={this.handleShow.bind(this, "August", 17)}>17</div>
                        <div className="day-block weekend-block" onDoubleClick={this.handleShow.bind(this, "August", 18)}>18</div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className="week4">
                        <div className="day-block weekend-block" onDoubleClick={this.handleShow.bind(this, "August", 19)}>19</div>
                        <div className="day-block" onDoubleClick={this.handleShow.bind(this, "August", 20)}>20</div>
                        <div className="day-block" onDoubleClick={this.handleShow.bind(this, "August", 21)}>21</div>
                        <div className="day-block" onDoubleClick={this.handleShow.bind(this, "August", 22)}>22</div>
                        <div className="day-block" onDoubleClick={this.handleShow.bind(this, "August", 23)}>23</div>
                        <div className="day-block" onDoubleClick={this.handleShow.bind(this, "August", 24)}>24</div>
                        <div className="day-block weekend-block" onDoubleClick={this.handleShow.bind(this, "August", 25)}>25</div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className="week5">
                        <div className="day-block weekend-block" onDoubleClick={this.handleShow.bind(this, "August", 26)}>26</div>
                        <div className="day-block" onDoubleClick={this.handleShow.bind(this, "August", 27)}>27</div>
                        <div className="day-block" onDoubleClick={this.handleShow.bind(this, "August", 28)}>28</div>
                        <div className="day-block" onDoubleClick={this.handleShow.bind(this, "August", 29)}>29</div>
                        <div className="day-block" onDoubleClick={this.handleShow.bind(this, "August", 30)}>30</div>
                        <div className="day-block" onDoubleClick={this.handleShow.bind(this, "August", 31)}>31</div>
                        <div className="day-block weekend-block"></div>
                    </Col>
                </Row>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Add Calendar Event</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Date</h4>
                            <p>{this.state.date[0]} {this.state.date[1]}, 2018</p>
                        <h4>Start Time</h4>
                        <FormGroup controlId="start-hour-select">
                            <ControlLabel>Hour</ControlLabel>
                            <FormControl componentClass="select" placeholder="Select" ref="start_hour" required>
                                {hours}
                            </FormControl>
                        </FormGroup>
                        <FormGroup controlId="start-min-select">
                            <ControlLabel>Minute</ControlLabel>
                            <FormControl componentClass="select" placeholder="Select" ref="start_minute" required>
                                {minutes}
                            </FormControl>
                        </FormGroup>
                        <FormGroup controlId="start-ampm-select">
                            <ControlLabel>AM/PM</ControlLabel>
                            <FormControl componentClass="select" placeholder="Select" ref="start_ampm" required>
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </FormControl>
                        </FormGroup>
                        <h4>End Time</h4>
                        <FormGroup controlId="end-hour-select">
                            <ControlLabel>Hour</ControlLabel>
                            <FormControl componentClass="select" placeholder="Select" ref="end_hour" required>
                                {hours}
                            </FormControl>
                        </FormGroup>
                        <FormGroup controlId="end-min-select">
                            <ControlLabel>Minute</ControlLabel>
                            <FormControl componentClass="select" placeholder="Select" ref="end_minute" required>
                                {minutes}
                            </FormControl>
                        </FormGroup>
                        <FormGroup controlId="end-ampm-select">
                            <ControlLabel>AM/PM</ControlLabel>
                            <FormControl componentClass="select" placeholder="Select" ref="end_ampm" required>
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </FormControl>
                        </FormGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.addEvent}>Add Event</Button>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            )
        }
    }
}

export default MonthGrid;