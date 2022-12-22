import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faIndianRupee } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import ApplyJob from './applyJob';
import { getAllJobs } from '../redux/actions';
import { connect } from 'react-redux';

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

class JobsListing extends Component {

    constructor() {
        super();
        this.state = { showPop: false, applyId: ""}
    }

    componentDidMount() {
        this.props.getAllJobs();
    }

    handleApplyJob = (id) => {
        this.setState({ showPop: true, applyId: id });
    }

    

    handleApplication = () => {
        this.handleClose()
        // this.setState({ ...this.state, loading: false, showPop: false })
        console.log(this.props)
        if (this.props.appliedMessage == "Applied Successfuly") {
            toast.success(this.props.appliedMessage, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else {
            toast.error(this.props.appliedMessage, {
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
    }
    handleClose = () => {
        this.setState({ showPop: false });

    }
    render() {
        return (

            <div >
                
                <div className='jobListing text-center'>
                    <div>
                        <h3>Recommended Jobs</h3>
                    </div>
                </div>
                <div style={{ padding: "20px" }}>
                    {
                        this.props.jobs.map(job => {
                            return (
                                <div key={job.id} className="card " style={{ width: "100%", marginBottom: "15px" }}>
                                    <div className="card-body">
                                        <h5 className="card-title">{job.role}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted" style={{ paddingTop: "15px" }}>{job.company}</h6>

                                        <div className=" d-flex align-items-end col" style={{ paddingTop: "15px" }}>
                                            <div className="socil_item_inner d-flex col-8" >
                                                <li style={{ color: "black" }}><FontAwesomeIcon icon={faBriefcase} /> {job.experience} </li>
                                                <li style={{ color: "black", paddingLeft: "40px" }}><FontAwesomeIcon icon={faIndianRupee} /> {job.salary}</li>
                                                <li style={{ color: "black", paddingLeft: "40px" }}><FontAwesomeIcon icon={faLocationDot} /> {job.location} </li>
                                            </div>
                                            <div className='col-4'>
                                                <button className="contact_form_submit" style={{ width: "200px", marginTop: "0px", float: "right" }} onClick={() => this.handleApplyJob(job.id)}>Apply Now</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                {
                    this.state.showPop ? <ApplyJob show={this.state.showPop} handleClose={this.handleClose} applyId={this.state.applyId} handleApplication={this.handleApplication} handleLoading={this.handleLoading}></ApplyJob> : null
                }

                <ToastContainer />
            </div>
        );
    }
}

const mapToProps = (state) => {
    return state;
}

const mapToMethods = (dispatch) => {
    return {
        getAllJobs: () => {
            dispatch(getAllJobs());
        }
    }
}


export default connect(mapToProps, mapToMethods)(JobsListing);


