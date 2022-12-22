import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { applyJob } from '../redux/actions';
import { CircleSpinnerOverlay } from 'react-spinner-overlay'

const validating = (val) => {
    let values = val;
    let errorst = {};
    const nameRegx = RegExp(/^[A-Za-z]+$/);
    const phoneRegx = RegExp(/^[0-9]*$/);
    const validEmailRegex = RegExp(
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    if (!values.name) {
        errorst.name = "Name is required!";
    } else if (!nameRegx.test(values.name)) {
        errorst.name = "Only letters alowed in Name";
    }
    if (!values.email) {
        errorst.email = "Email is required!";
    } else if (!validEmailRegex.test(values.email)) {
        errorst.email = "This is not a valid email format!";
    }
    if (!values.phone) {
        errorst.phone = "Phone number is required!";
    }
    else if (!phoneRegx.test(values.phone)) {
        errorst.phone = "Please enter only numbers in Phone number";
    } else if (values.phone.length < 10) {
        errorst.phone = "Phone number must be 10 number";
    } else if (values.phone.length > 10) {
        errorst.phone = "Phone number cannot exceed more than 10 characters";
    }
    if (!values.experience) {
        errorst.experience = "Experience is required";
    } else if (values.experience.length < 10) {
        errorst.experience = "Experience must be minimum 10 number";
    } else if (values.experience.length > 150) {
        errorst.experience = "Experience cannot exceed more than 150 characters";
    }


    return errorst;
}
class ApplyJob extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            phone: "",
            address: "",
            experience: "",
            validated: false,
            errors: {},
            loading: false
        }
    }
    handleClose = () => {
        this.props.handleClose();
    }

    onchangeHandle = (key, e) => {
        let value = e.target.value;
        switch (key) {
            case "name":
                this.setState({ ...this.state, name: value });
                break;
            case "phone":
                this.setState({ ...this.state, phone: value });
                break;
            case "email":
                this.setState({ ...this.state, email: value });
                break;
            case "address":
                this.setState({ ...this.state, address: value });
                break;
            case "experience":
                this.setState({ ...this.state, experience: value });
                break;
            default:
                break;
        }
    }

    handleLoading = () => {
        this.setState({ ...this.state, loading: true })
    }

    handleSubmit = (e) => {
        // this.handleLoading();
        console.log(e)
        e.preventDefault();
        // this.setState({...this.state, validated:true})
        const form = e.currentTarget;
        let res = validating(this.state)
        console.log("errors", res)

        this.setState({ ...this.state, errors: res, validated: true,loading: true })
        console.log("state", this.state)
        if (form.checkValidity() === false) {
            e.preventDefault();

        }
        if (Object.keys(res).length > 0) {
            console.log(Object.keys(res).length)
            e.stopPropagation();
        } else {
            let appdt = {
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                address: this.state.address,
                experience: this.state.experience,
                jobId: this.props.applyId
            };
            // console.log(this.props.saveApplied(appdt))
            this.props.saveApplied(appdt).then((data) => {
                console.log("after",this.state)
                this.setState({ ...this.state, loading: false })
                this.props.handleApplication();

            });

            // if (this.props.saveApplied(appdt) == "saved successfuly") {
            //     console.log("saved successfuly")
            // }
        }



    }


    render() {
        return (
            <div>

                <Modal show={this.props.show} onHide={() => this.handleClose()} >
                    {!this.state.loading ? <Modal.Header closeButton>
                        <Modal.Title>APPLY JOB</Modal.Title>
                    </Modal.Header> : null}
                    {this.state.loading ? <CircleSpinnerOverlay loading={this.state.loading}
                        overlayColor="rgba(0,153,255,0.2)" color="#8f10b7"
                    /> :
                        <Modal.Body>
                            <Form noValidate onSubmit={this.handleSubmit}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Name"
                                        onChange={(e) => this.onchangeHandle("name", e)}
                                        isInvalid={this.state.name.length === 0 && this.state.validated ? true : false}

                                        autoFocus
                                    />
                                    {
                                        this.state.errors.name ?
                                            <span className='error'>{this.state.errors.name}</span> : ""
                                    }

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control
                                        type="phone"
                                        placeholder="0000000000"
                                        isInvalid={((this.state.phone.length == 0 || this.state.phone.length > 10) || this.state.phone.length < 10) && this.state.validated ? true : false}
                                        onChange={(e) => this.onchangeHandle("phone", e)}
                                    />
                                    {
                                        this.state.errors.phone ?
                                            <span className='error'>{this.state.errors.phone}</span> : ""
                                    }

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="name@example.com"
                                        isInvalid={this.state.email.length == 0 && this.state.validated ? true : false}

                                        onChange={(e) => this.onchangeHandle("email", e)}
                                    />
                                    {
                                        this.state.errors.email ?
                                            <span className='error'>{this.state.errors.email}</span> : ""
                                    }

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Experience</Form.Label>
                                    <Form.Control
                                        as="textarea" rows={3}
                                        placeholder="Number of years"
                                        isInvalid={this.state.experience.length == 0 && this.state.validated ? true : false}
                                        onChange={(e) => this.onchangeHandle("experience", e)}
                                    />
                                    {
                                        this.state.errors.experience ?
                                            <span className='error'>{this.state.errors.experience}</span> : ""
                                    }
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlTextarea1"
                                >
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control as="textarea" rows={3}

                                        onChange={(e) => this.onchangeHandle("address", e)} />
                                    {/* <Form.Control.Feedback type="invalid">
                                Please enter address.
                            </Form.Control.Feedback> */}
                                </Form.Group>

                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => this.handleClose()}>
                                        Close
                                    </Button>
                                    <Button type="submit">
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Form>
                        </Modal.Body>}

                </Modal>


            </div>
        );
    }
}
const mapToProps = (state) => {
    return state;
}

const mapToMethods = (dispatch) => {
    return {
        saveApplied: (appData) => {
            return dispatch(applyJob(appData)).then((data) => {
                console.log("after save", data);
            });
        }
    }
}
export default connect(mapToProps, mapToMethods)(ApplyJob);
