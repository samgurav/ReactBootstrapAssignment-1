import React, { Component } from 'react'
import { Container,Form,Row,Col,Card, Button } from 'react-bootstrap'
const regForEmail = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForMobile = RegExp(/^[7-9][0-9]{9}$/);
const regForName = RegExp(/^[A-Za-z]{2,10}$/);
const regForFeed=RegExp(/^[A-Za-z]{2,50}$/)
export class Contact extends Component {
    constructor(props){
        super(props);
        this.state={
           
            name:null,
            email:null,
            mobile:null,
           feedback:null,
   
            errors:{
                name:'',
                email:'',
                mobile:'',
                feedback:''

            }
    
        }
    }
    handler = (events)=>{
        const {name,value}=events.target;
        let errors=this.state.errors;
        switch(name){
            case 'name':
                errors.name= regForName.test(value)?'':'Name should be between 2 and 10 letters';
                break;
            
             case 'mobile':  
             errors.mobile=regForMobile.test(value)?'':'Enter a Vaild Mobile Number ,It should be 10 digit';
                   break; 
            case 'email':
                errors.email=regForEmail.test(value)?'':'Email is not valid';
                break;
            case 'feedback':
               errors.feedback=regForFeed.test(value)?'':'It has some limitations'
               break;
             



        }
        this.setState({errors,[name]:value},()=>{
            console.log(errors);
        })
    }
    formSubmit=(events)=>{
        events.preventDefault();
        if(this.validate(this.state.errors)){
            alert("Valid Form")
        }
        else
           alert("Invalid Form")

         
 }

 validate=(errors)=>{
    let valid = true;
    Object.values(errors).forEach((val)=> 
        val.length>0 && (valid = false));
    return valid;
 }
    render() {
        { console.log(this.values)}
        const {errors}=this.state;
        return (
         
       <>

       
            <Form  className="Form my-3 mx-4">
                <Container>
                    <Row className="row no-gutters">
                        <Col className="col-lg-5">
                        <img src="../Images/trav.jpg"  height="650px" width="450px"/>
                        </Col>
                        <Col className="col-lg-7 px-5 pt-5">
                        <img src="../Images/contact.png" class="img-fluid rounded-circle " width="130px" height="130px"/>
                        <h4>Contact Us</h4>
              
                        <Form  onSubmit={this.formSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter Name" onChange={this.handler} />
                        {errors.name.length>0 &&
                    <span style={{color:"red"}}>{errors.name}</span>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" onChange={this.handler} />
                         {errors.email.length>0 &&
                        <span style={{color:"red"}}>{errors.email}</span>}
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicNumber">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" name="mobile" placeholder="Enter Number" onChange={this.handler} />
                    {errors.mobile.length>0 &&
                    <span style={{color:"red"}}>{errors.mobile}</span>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicFeedback">
                        <Form.Label>Feedback</Form.Label>
                        <Form.Control type="text" placeholder="Enter Feedback" name="feedback" style={{height:'60px'}} onChange={this.handler} />
                         {errors.feedback.length>0 &&
                        <span style={{color:"red"}}>{errors.feedback}</span>}
                       
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <Button variant="success" type="reset">
                        Reset
                    </Button>
                    </Form>
                        </Col>

                    </Row>
                </Container>
            </Form>
     
</>
          
        )
    }
}

export default Contact
