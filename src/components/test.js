// import React, { Component } from 'react';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// class ApplyJob extends Component {
//     constructor() {
//         super();
//         this.state = {
//             name: "",
//             email: "",
//             phone: "",
//             address: "",
//             experience: "",
//             validated: false,
//             errors: {},
//             mist:""
//         }
//     }
//     handleClose = () => {
//         this.props.handleClose();
//     }


//     onchangeHandle = (key, e) => {
//         let value = e.target.value;
//         switch (key) {
//             case "name":
//                 this.setState({ ...this.state, name: value });
//                 console.log(this.state);
//                 break;
//             case "phone":
//                 this.setState({ ...this.state, phone: value });
//                 console.log(this.state);
//                 break;
//             case "email":
//                 this.setState({ ...this.state, email: value });
//                 break;
//             case "address":
//                 this.setState({ ...this.state, address: value });
//                 break;
//             case "experience":
//                 this.setState({ ...this.state, experience: value });
//                 break;
//             default:
//                 break;
//         }
//     }

//     handleSubmit = (e) => {
//         console.log(e)
//         e.preventDefault();
//         this.setState({ ...this.state, validated: true })
//         const form = e.currentTarget;
//         console.log(form)
//         console.log(e.currentTarget)
//         this.setState({...this.state, mist: "hghs"})
//         // if (e.bubbles) {
//         //     e.stopPropagation();
//         // }
//         if (form.checkValidity() === false) {
//             e.preventDefault();
//             console.log(form.checkValidity())
//         }

//         if (this.validate()) {
//             let res = this.validate();
//            this.setState({...this.state, errors: res})
//            this.setState({...this.state, errors: {nae:"afs"}})
//            this.setState({...this.state, mist: "hghs"})
//         }
//         console.log(this.state);
        
//     }

//     render() {
//         return (
//             <div>
//                 <Modal show={this.props.show} onHide={() => this.handleClose()} >
//                     <Modal.Header closeButton>
//                         <Modal.Title>APPLY JOB</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
//                         <Form noValidate onSubmit={this.handleSubmit}>
//                             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                                 <Form.Label>Name</Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     placeholder="Name"
//                                     onChange={(e) => this.onchangeHandle("name", e)}
//                                     isInvalid={this.state.name.length === 0 && this.state.validated ? true : false}

//                                     autoFocus
//                                 />
//                                 <Form.Control.Feedback type="invalid">
//                                     {this.state.errors.name}
//                                 </Form.Control.Feedback>
//                             </Form.Group>
//                             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                                 <Form.Label>Phone Number</Form.Label>
//                                 <Form.Control
//                                     type="phone"
//                                     placeholder="0000000000"
//                                     isInvalid={(this.state.phone.length == 0 || this.state.phone.length < 10) && this.state.validated ? true : false}
//                                     onChange={(e) => this.onchangeHandle("phone", e)}
//                                 />
//                                 <Form.Control.Feedback type="invalid">
//                                     {this.state.errors.phone}
//                                 </Form.Control.Feedback>
//                             </Form.Group>
//                             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                                 <Form.Label>Email address</Form.Label>
//                                 <Form.Control
//                                     type="email"
//                                     placeholder="name@example.com"
//                                     isInvalid={this.state.email.length == 0 && this.state.validated ? true : false}

//                                     onChange={(e) => this.onchangeHandle("email", e)}
//                                 />
//                                 <Form.Control.Feedback type="invalid">
//                                     {this.state.errors.email}
//                                 </Form.Control.Feedback>
//                             </Form.Group>
//                             <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
//                                 <Form.Label>Experience</Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     placeholder="Number of years"
//                                     isInvalid={this.state.experience.length == 0 && this.state.validated ? true : false}
//                                     onChange={(e) => this.onchangeHandle("experience", e)}
//                                 />
//                                 <Form.Control.Feedback type="invalid">
//                                     {this.state.errors.experience}
//                                 </Form.Control.Feedback>
//                             </Form.Group>
//                             <Form.Group
//                                 className="mb-3"
//                                 controlId="exampleForm.ControlTextarea1"
//                             >
//                                 <Form.Label>Address</Form.Label>
//                                 <Form.Control as="textarea" rows={3}

//                                     onChange={(e) => this.onchangeHandle("address", e)} />
//                                 {/* <Form.Control.Feedback type="invalid">
//                                     Please enter address.
//                                 </Form.Control.Feedback> */}
//                             </Form.Group>

//                             <Modal.Footer>
//                                 <Button variant="secondary" onClick={() => this.handleClose()}>
//                                     Close
//                                 </Button>
//                                 <Button type="submit">
//                                     Save Changes
//                                 </Button>
//                             </Modal.Footer>
//                         </Form>
//                     </Modal.Body>

//                 </Modal>
//             </div>
//         );
//     }
// }

// export default ApplyJob;
