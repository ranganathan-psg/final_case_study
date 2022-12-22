import React, { Component } from 'react';
import { connect } from 'react-redux';
import { contactUs } from '../redux/actions';
import { ToastContainer, toast } from "react-toastify";
import { CircleSpinnerOverlay } from 'react-spinner-overlay';

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
    if (!values.message) {
        errorst.message = "Message is required";
    } else if (values.message.length < 10) {
        errorst.message = "Message must be minimum 10 number";
    } else if (values.message.length > 150) {
        errorst.message = "Message   cannot exceed more than 150 characters";
    }


    return errorst;
}
class ContactsUs extends Component {

    constructor() {
        super();
        this.state = {
            canSubmit: true,
            loading: false,
            name: "",
            phone: "",
            email: "",
            message: "",
            errors: {},
            validated: false
        }
    }

    handleOnchange = (e, key) => {
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
            case "message":
                this.setState({ ...this.state, message: value });
                break;
            default:
                break;
        }
    }

    handleSubmit(e) {
        let res = validating(this.state);
        console.log("errors", res);
        this.setState({ ...this.state, errors: res, validated: true, loading: true })
        if (Object.keys(res).length > 0) {
            console.log(Object.keys(res).length);
            e.stopPropagation();

        }
        else {

            let appdt = {
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                message: this.state.message,
            };
            this.props.contactUs(appdt).then((data) => {
                this.setState({ ...this.state, name: "", phone: "", message: "", email: "" });
                if (this.props.contactMsg=="Thanks for Contacting will get back to soon ☺️") {
                    this.setState({ ...this.state, validated: true, loading: false });
                    toast.success(this.props.contactMsg, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                }else{
                    this.setState({ ...this.state, validated: true, loading: false });
                    toast.error(this.props.contactMsg, {
                        
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                }
            })
        }

    }

    render() {
        return (
            <div>
                <ToastContainer />
                {
                    this.state.loading ? <CircleSpinnerOverlay loading={this.state.loading}
                    overlayColor="rgba(0,153,255,0.2)" color="#8f10b7"
                />:null
                }
                <section className="contact_us">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <div className="contact_inner col">
                                    <div className="row">
                                        <div className="col-md-10">
                                            <div className="contact_form_inner">
                                                <div className="contact_field">
                                                    <h3>Contatc Us</h3>
                                                    <p>Feel Free to contact us any time. We will get back to you as soon as we can!.</p>
                                                    <input type="text" className="form-control form-group" value={this.state.name} placeholder="Name" onChange={(e) => this.handleOnchange(e, "name")} />
                                                    {
                                                        this.state.errors.name ?
                                                            <span className='error'>{this.state.errors.name}</span> : ""
                                                    }
                                                    <input type="text" className="form-control form-group" value={this.state.email} placeholder="Email" onChange={(e) => this.handleOnchange(e, "email")} />
                                                    {
                                                        this.state.errors.email ?
                                                            <span className='error'>{this.state.errors.email}</span> : ""
                                                    }
                                                    <input type="text" className="form-control form-group" value={this.state.phone} placeholder="phone" onChange={(e) => this.handleOnchange(e, "phone")} />
                                                    {
                                                        this.state.errors.phone ?
                                                            <span className='error'>{this.state.errors.phone}</span> : ""
                                                    }
                                                    <textarea className="form-control form-group" placeholder="Message" value={this.state.message} onChange={(e) => this.handleOnchange(e, "message")}></textarea>
                                                    {
                                                        this.state.errors.message ?
                                                            <span className='error'>{this.state.errors.message}</span> : ""
                                                    }
                                                    <button onClick={(e) => this.handleSubmit(e)} className="contact_form_submit"  >Send</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="right_conatct_social_icon d-flex align-items-end">
                                                <div className="socil_item_inner d-flex">
                                                    <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contact_info_sec">
                                        <h4>Contact Info</h4>
                                        <div className="d-flex info_single align-items-center">
                                            <i className="fas fa-headset"></i>
                                            <span>+91 8009 054294</span>
                                        </div>
                                        <div className="d-flex info_single align-items-center">
                                            <i className="fas fa-envelope-open-text"></i>
                                            <span>info@topjobs.com</span>
                                        </div>
                                        <div className="d-flex info_single align-items-center">
                                            <i className="fas fa-map-marked-alt"></i>
                                            <span>We support secure payment methods and 65+ Service city across India, USA, Canada & UAE</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="map_sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <div className="map_inner">
                                    <h4>Find Us on Google Map</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quo beatae quasi assumenda, expedita aliquam minima tenetur maiores neque incidunt repellat aut voluptas hic dolorem sequi ab porro, quia error.</p>
                                    <div className="map_bind">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471220.5631094339!2d88.04952462217592!3d22.6757520733225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1596988408134!5m2!1sen!2sin" width="100%" height="450" aria-hidden="false" ></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        );
    }
}

const mapToProps = (state) => {
    return state;
}

const mapToMethods = (dispatch) => {
    return {
        contactUs: (appData) => {
            return dispatch(contactUs(appData)).then((data) => {
                console.log("after save", data);
            });
        }
    }
}

export default connect(mapToProps, mapToMethods)(ContactsUs);
