import React, { Component } from 'react'
import {Carousel, Container,Row ,Col,Card,TabContainer,Figure} from 'react-bootstrap'
import Images from '../images.json'
import Img from '../Img.json'
export class Home extends Component {
    render() {
        return (
           <>
              <Carousel>
  <Carousel.Item className='carousel-item'>
    <img
      className="d-block w-100"
      src="https://img5.goodfon.com/wallpaper/nbig/1/8e/forest-backpack-woman-trekking.jpg" height="600px"
      alt="First slide"
    />
    <Carousel.Caption className="carousel-caption d-none d-md-block text-left">
    <h1>The World <br/> Of Extreme Sports</h1>
    <p>SAVE <span class="span ">20%</span> ON ALL APPAREL</p>
            <h2>________________________________________</h2>
            <button class="btn btn-1 btn-dark ">Shop Now<i class="fas fa-angle-right ml-3"></i></button>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://adventures.com/media/9916/happy-hiking-group-people-sunset.jpg" height="600px" 
      alt="Second slide"
    />

    <Carousel.Caption className="carousel-caption d-none d-md-block text-left">
    <h1>The World <br/> Of Extreme Sports</h1>
    <p>SAVE <span class="span ">20%</span> ON ALL APPAREL</p>
            <h2>________________________________________</h2>
            <button class="btn btn-1 btn-dark ">Shop Now<i class="fas fa-angle-right ml-3"></i></button>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.eurekacamping.com/sites/eurekacamping_site/files/tent-camping-at-sunset.jpg" height='600px'
      alt="Third slide"
    />

    <Carousel.Caption className="carousel-caption d-none d-md-block text-left">
    <h1>The World <br/> Of Extreme Sports</h1>
    <p>SAVE <span class="span ">20%</span> ON ALL APPAREL</p>
     <h2>________________________________________</h2>
     <button class="btn btn-1 btn-dark ">Shop Now<i class="fas fa-angle-right ml-3"></i></button>
</Carousel.Caption>
  </Carousel.Item>
</Carousel>
<Container>
    <Row className='py-4 mx-2'>
        <Col className='col-sm-12 col-md-4'>
        <button class="btn btn-info  w-100"  ><i class="fa fa-plane" style={{color:'white'}} aria-hidden="true"></i>FREE SHOPPING WORLDWIDE</button> 

        </Col>
    
    
        <Col className='col-sm-12 col-md-4'>
        <button class="btn w-100"  style={{backgroundColor: 'rgb(243, 66, 66)', color: 'white'}}   ><i class=" fad fa-circle-notch"></i>100% MONEY BACK- 48 HOURS</button>

        </Col>
  
   
        <Col className='col-sm-12 col-md-4'>
        <button class="btn  w-100" style={{backgroundColor: 'rgb(241, 245, 17)',color: 'white'}}><i class=""></i>24/7 ONLINE CUSTOMER SUPPORT</button>

        </Col>
    </Row>
</Container>
<Container className='class="container-justify container-fluid text-center collection"'>
          <h4   className="text-uppercase">Featured Collection</h4>
      <i className="fa fa-arrow-right"></i>
      <i className="fa fa-circle"></i>
      <i className="fa fa-circle"></i>
      <i className="fa fa-circle"></i>
      <i className="fa fa-arrow-left "style={{marginBottom:'40px'}}></i>
    <Row className='links mt-4' style={{marginLeft: '30%', padding: '2px',marginBottom: '20px'}}>
    <a className="mr-2 " href="#">NEW ARRIVAL</a>-
        <a className="mr-2 ml-2" href="#">CLOTHING</a>-
        <a className="mr-2 ml-2" href="#">HATS</a>-
        <a className="mr-2 ml-2" href="#">SHOES</a>-
        <a className="mr-2 ml-2" href="#">BAGS</a>-
        <a className="mr-2 ml-2" href="#">ACCESSORIES</a>
    </Row>
 
    <Row className='row' >
   
    {Images.map(( pro)=>
        <Col className='col-lg-2 col-md-2 col-sm-2 col-10 d-block m-auto' >                   
        <Card classname="card"  key={pro.id} >
        <Card.Img variant="top" src={`${pro.images}`}   className='card-img ' width='350' height='350px'  />
        <Card.Body>
          <Card.Title>
              <p>Name:{`${pro.pname}`}</p>
          </Card.Title>
          <Card.Text>
        
          Price: <span style={{color:"red"}}>$500.00</span>
                                 
          </Card.Text>
         
        </Card.Body>
      </Card>
            
        </Col>
    )}
    </Row> 
    <Row className='row' style={{marginTop:'15px'}}>
   
   {Img.map(( pro)=>
       <Col className='col-lg-2 col-md-2 col-sm-2 col-10 d-block m-auto' >                   
       <Card className="card"  key={pro.id} >
       <Card.Img variant="top" src={`${pro.images}`}   className='card-img ' width='350' height='350px'  />
       <Card.Body>
         <Card.Title>
             <p>Name:{`${pro.pname}`}</p>
         </Card.Title>
         <Card.Text>
       
         Price: <span style={{color:"red"}}>$500.00</span>
                                
         </Card.Text>
        
       </Card.Body>
     </Card>
           
       </Col>
   )}
   </Row> 
   
          </Container>
          <Container>
            <Row className="row">
            <Col className="col-md-6">
                <img className="img img-fluid w-100 " src="../Images/jkt.webp"/>
            </Col>
            <Col className=" info col-md-6" >
               <Row className="row">
                   <h4 className="txt text-uppercase  " style={{marginTop:'80px'}} >Hot Deals </h4>
                   </Row>
                   <Row className="row">
                    <h1 className="head1" style={{paddingleft: '20px' }}>Tulos Dracey Skirts</h1>
                   </Row>
                  <Row className="row">
                    <p style={{color: 'rgb(243, 239, 16)', border: 'rgb(196, 196, 37)', paddingLeft: '20px'}}><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> </p>
                  </Row>
                  <Row class="row">
                      <h2 class="text-danger" style={{paddingleft: '20px'}}>$230.00</h2>
                  </Row>
                  <Row class="row">
                      <Container class="container-fluid" style={{paddingleft: '20px'}}>
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo cum enim quibusdam est pariatur, consequatur tenetur assumenda, magnam nobis totam facilis quos aperiam accusamus eius excepturi eaque amet repellendus deleniti.
                      </Container>

                  </Row>
                  <Row class="row">
                    <p ><i class="fas fa-angle-right ml-3"></i> COLOR: <span style={{color: 'rgb(240, 73, 73)', marginleft: '10px'}}> <i class="fas fa-circle"></i></span><span style={{color:' rgb(75, 75, 236)', marginleft: '10px'}}> <i class="fas fa-circle"></i></span><span style={{color: 'rgb(245, 245, 12)', marginleft: '10px'}}> <i class="fas fa-circle"></i></span></p>
                  </Row>
                  <Row class="row">
                      <p><i class="fas fa-angle-right ml-3"></i> SIZE: <button type="button" class="btn btn-dark " style={{ marginleft: '10px', border: '1px solid black'}}>S</button>  <button type="button" class="btn btn-dark " style={{ marginleft: '10px',border: '1px solid black'}}>M</button>  <button type="button" class="btn btn-dark " style={{marginleft: '10px', border: '1px solid black'}}>L</button> <button type="button" class="btn btn-dark " style={{marginleft: '10px', border: '1px solid black'}}>XL</button></p>
                  </Row>
                  <Row class="row">
                      <h2> <button type="button" className="btn btn-info " style={{ marginleft: '10px',border: '1px solid white', width: '70px', height: '60px', color: 'white', backgroundcolor:' rgb(46, 168, 216);'}}><b>25</b><br/>Days</button> <button type="button" class="btn btn-info "  style={{ marginleft: '10px',border: '1px solid white', width: '70px', height: '60px', color: 'white', backgroundcolor:' rgb(46, 168, 216)'}}><b>14</b><br/>Hours</button> <button type="button" class="btn btn-info " style={{ marginleft: '10px',border: '1px solid white', width: '75px', height: '60px', color: 'white', backgroundcolor:' rgb(46, 168, 216)'}}><b>47</b><br/>Minutes</button> <button type="button" className="btn btn-info "style={{ marginleft: '10px',border: '1px solid white', width: '70px', height: '60px', color: 'white', backgroundcolor:' rgb(46, 168, 216)'}} ><b>24</b><br/>Second</button>  </h2>
                  </Row>
                

               </Col>
            </Row>
            </Container>
            <TabContainer class="instagram  "style={{marginbottom: '40px'}}>
    <Container class="container-fluid text-center">
        <h3 >INSTAGRAM</h3>
        <i class="fa fa-arrow-right"></i>
      <i class="fa fa-circle"></i>
      <i class="fa fa-circle"></i>
      <i class="fa fa-circle"></i>
      <i class="fa fa-arrow-left " style={{marginbottom: '40px'}}></i>
        <Row class="row">
            <Col class=" col-md-2 col-sm-2 col-10 d-block m-auto">
                <Card class="card">
                  <img src="../Images/m1.jpg" className="card-img " width="200px" height="200px" />
              
                </Card>
              </Col> 
              <Col class="col-lg-2 col-md-2 col-sm-2 col-10 d-block m-auto">
                <Card class="card">
                  <img src="../Images/car.jpeg" className="card-img " width="200px" height="200px"/>
              
                </Card>
              </Col> 
              <Col class="col-lg-2 col-md-2 col-sm-2 col-10 d-block m-auto">
                <Card class="card">
                  <img src="../Images/sun.jfif" className="card-img " width="200px" height="200px"/>
              
              
              </Card> 
              </Col>
              <Col class="col-lg-2 col-md-2 col-sm-2 col-10 d-block m-auto">
                <Card class="card">
                  <img src="../Images/h1.jpg" className="card-img " width="200px" height="200px" />
              
                </Card>
              </Col> 
              <Col class="col-lg-2 col-md-2 col-sm-2 col-10 d-block m-auto">
                <Card class="card">
                  <img src="../Images/bird.jfif" className="card-img i" width="200px" height="200px" />
              
                </Card>
              </Col> 
              <Col class="col-lg-2 col-md-2 col-sm-2 col-10 d-block m-auto">
                <Card class="card">
                  <img src="../Images/girl.jpg" className="card-img " width="200px" height="200px" ></img>
              
                </Card>
              </Col> 
        </Row>
        </Container>


        
        </TabContainer>
        <Container  className="container-fluid ml-12 mr-12" >
              <Row className="row" >
              <div class="col-lg-3 col-lg-3 col-lg-3 col-12 m-auto bg-light pt-3 pb-4" >
                  <h6 class="text-center">BEST SELLER</h6>
                  <hr/>
                  <div class="list" style={{borderright: 'rgb(223, 217, 217) solid 2px'}}>
                  <div class="media mt-4">
                      <img class="mr-2" style={{height: '150px', width: '150px',border: '1px solid rgb(128, 126, 126)'}} src="../Images/l1.jpg"/>
                      <div class=" mt-2 media-body">                                      
                        <p style={{fontsize:'small'}}><b>LEATT PRO JACKET</b></p>
                        <p style={{fontsize: 'x-small'}}><i style={{fontsize: 'xx-small'}} class="fas fa-star text-warning"></i><i style={{fontsize: 'xx-small'}} class="fas fa-star text-warning"></i><i style={{fontsize: 'xx-small'}} class="fas fa-star text-warning"></i><i style={{fontsize:' xx-small'}} class="fas fa-star text-warning"></i><i  style={{fontsize: 'xx-small'}} class="fas fa-star text-warning"></i>   
                        </p>
                        <p style={{fontsize: 'small'}} class="text-danger">$99.00</p>
                        <p style={{fontsize: 'small'}}><button style={{border: 'solid 1px', border: 'none'}} class="  btn-small bg-primary text-white"><i class="fas fa-shopping-cart"></i></button>
                          <button class="  btn-small "><i class="fas fa-heart"></i></button>
                          <button class="  btn-small "><i class="fas fa-eye"></i></button></p>
                       
                        </div>
                  </div>
                  <div class="media mt-4">
                      <img class="mr-2" style={{height: '150px', width: '150px',border: '1px solid rgb(128, 126, 126)'}} src="../Images/l2.jfif"/>
                      <div class=" mt-2 media-body">                                      
                          <p style={{fontsize:'small'}}><b>LEATT PRO JACKET</b></p>
                        <p style={{fontsize: 'x-small'}}><i style={{fontsize: 'xx-small'}} class="fas fa-star text-warning"></i><i style={{fontsize: 'xx-small'}} class="fas fa-star text-warning"></i><i style={{fontsize:' xx-small'}} class="fas fa-star text-warning"></i><i style={{fontsize: 'xx-small'}} class="fas fa-star text-warning"></i><i  style={{fontsize: 'xx-small'}} class="fas fa-star text-warning"></i>   
                        </p>
                        <p style={{fontsize: 'small'}} class="text-danger">$99.00</p>
                        <p style={{fontsize: 'small'}}><button class="  btn-small bg-primary text-white"><i class="fas fa-shopping-cart"></i></button>
                          <button class="  btn-small "><i class="fas fa-heart"></i></button>
                          <button class="  btn-small "><i class="fas fa-eye"></i></button></p>
                       
                        </div>
                  </div>
                  <div class="media mt-4">
                      <img class="mr-2" style={{height: "150px",width: '150px',border: '1px solid rgb(128, 126, 126)'}} src="../Images/l3.jpg"/>
                      <div class=" mt-2 media-body">                                      
                          <p style={{fontsize:'small'}}><b>LEATT PRO JACKET</b></p>
                          <p style={{fontsize: 'x-small'}}><i style={{fontsize: 'xx-small'}} class="fas fa-star text-warning"></i><i style={{fontsize: 'xx-small'}} class="fas fa-star text-warning"></i><i style={{fontsize:' xx-small'}} class="fas fa-star text-warning"></i><i style={{fontsize: 'xx-small'}} class="fas fa-star text-warning"></i><i  style={{fontsize: 'xx-small'}} class="fas fa-star text-warning"></i>   
                          </p>
                          <p style={{fontsize: 'small'}} class="text-danger">$99.00</p>
                          <p style={{fontsize: 'small'}}><button class="  btn-small bg-primary text-white"><i class="fas fa-shopping-cart"></i></button>
                            <button class="  btn-small "><i class="fas fa-heart"></i></button>
                            <button class="  btn-small "><i class="fas fa-eye"></i></button></p>
                       
                        </div>
                  </div>
              </div> 
          </div>
          <div class="col-lg-3 col-lg-3 col-lg-3 col-12 m-auto bg-light pt-3 pb-4">
                  <h6 class="text-center">TOP RATE</h6>
                  <hr/>
                  <div class="list" style={{borderright: 'rgb(223, 217, 217) solid 2px'}}>
                  <div class="media mt-4">
                      <img class="mr-2" style={{height: '150px', width: '150px',border: '1px solid rgb(128, 126, 126)'}} src="../Images/l4.jpeg"/>
                      <div class=" mt-2 media-body">                                      
                        <p style={{fontsize:'small'}}><b>LEATT PRO JACKET</b></p>
                        <p style={{fontsize: 'x-small'}}><i style={{fontsize: 'xx-small'}} class="fas fa-star text-warning"></i><i style={{fontsize: 'xx-small'}} class="fas fa-star text-warning"></i><i style={{fontsize: 'xx-small'}} class="fas fa-star text-warning"></i><i style={{fontsize:' xx-small'}} class="fas fa-star text-warning"></i><i  style={{fontsize: 'xx-small'}} class="fas fa-star text-warning"></i>   
                        </p>
                        <p style={{fontsize: 'small'}} class="text-danger">$99.00</p>
                        <p style={{fontsize: 'small'}}><button style={{border: 'solid 1px', border: 'none'}} class="  btn-small bg-primary text-white"><i class="fas fa-shopping-cart"></i></button>
                          <button class="  btn-small "><i class="fas fa-heart"></i></button>
                          <button class="  btn-small "><i class="fas fa-eye"></i></button></p>
                       
                        </div>
                  </div>
                  <div class="media mt-4">
                      <img class="mr-2" style={{height: '150px', width: '150px',border: '1px solid rgb(128, 126, 126)'}} src="../Images/l5.jpg"/>
                      <div class=" mt-2 media-body">                                      
                          <p style={{fontsize:'small'}}><b>LEATT PRO JACKET</b></p>
                        <p style={{fontsize: 'x-small'}}><i style={{fontsize: 'xx-small'}} class="fas fa-star text-warning"></i><i style={{fontsize: 'xx-small'}} class="fas fa-star text-warning"></i><i style={{fontsize:' xx-small'}} class="fas fa-star text-warning"></i><i style={{fontsize: 'xx-small'}} class="fas fa-star text-warning"></i><i  style={{fontsize: 'xx-small'}} class="fas fa-star text-warning"></i>   
                        </p>
                        <p style={{fontsize: 'small'}} class="text-danger">$99.00</p>
                        <p style={{fontsize: 'small'}}><button class="  btn-small bg-primary text-white"><i class="fas fa-shopping-cart"></i></button>
                          <button class="  btn-small "><i class="fas fa-heart"></i></button>
                          <button class="  btn-small "><i class="fas fa-eye"></i></button></p>
                       
                        </div>
                  </div>
                  <div class="media mt-4">
                      <img class="mr-2" style={{height: "150px",width: '150px',border: '1px solid rgb(128, 126, 126)'}} src="../Images/l6.jpeg"/>
                      <div class=" mt-2 media-body">                                      
                          <p style={{fontsize:'small'}}><b>LEATT PRO JACKET</b></p>
                          <p style={{fontsize: 'x-small'}}><i style={{fontsize: 'xx-small'}} class="fas fa-star text-warning"></i><i style={{fontsize: 'xx-small'}} class="fas fa-star text-warning"></i><i style={{fontsize:' xx-small'}} class="fas fa-star text-warning"></i><i style={{fontsize: 'xx-small'}} class="fas fa-star text-warning"></i><i  style={{fontsize: 'xx-small'}} class="fas fa-star text-warning"></i>   
                          </p>
                          <p style={{fontsize: 'small'}} class="text-danger">$99.00</p>
                          <p style={{fontsize: 'small'}}><button class="  btn-small bg-primary text-white"><i class="fas fa-shopping-cart"></i></button>
                            <button class="  btn-small "><i class="fas fa-heart"></i></button>
                            <button class="  btn-small "><i class="fas fa-eye"></i></button></p>
                       
                        </div>
                  </div>
              </div> 
          </div>
          <div class="col-lg-3 col-lg-3 col-lg-3 col-12 m-auto bg-light pt-3 pb-4">
                  <h6 class="text-center">TOP SEPCIAL</h6>
                  <hr/>
                  <div class="list" style={{borderright: 'rgb(223, 217, 217) solid 2px'}}>
                  <div class="media mt-4">
                      <img class="mr-2" style={{height: '150px', width: '150px',border: '1px solid rgb(128, 126, 126)'}} src="../Images/l7y.jpg"/>
                      <div class=" mt-2 media-body">                                      
                        <p style={{fontsize:'small'}}><b>LEATT PRO JACKET</b></p>
                        <p style={{fontsize: 'x-small'}}><i style={{fontsize: 'xx-small'}} class="fas fa-star text-warning"></i><i style={{fontsize: 'xx-small'}} class="fas fa-star text-warning"></i><i style={{fontsize: 'xx-small'}} class="fas fa-star text-warning"></i><i style={{fontsize:' xx-small'}} class="fas fa-star text-warning"></i><i  style={{fontsize: 'xx-small'}} class="fas fa-star text-warning"></i>   
                        </p>
                        <p style={{fontsize: 'small'}} class="text-danger">$99.00</p>
                        <p style={{fontsize: 'small'}}><button style={{border: 'solid 1px', border: 'none'}} class="  btn-small bg-primary text-white"><i class="fas fa-shopping-cart"></i></button>
                          <button class="  btn-small "><i class="fas fa-heart"></i></button>
                          <button class="  btn-small "><i class="fas fa-eye"></i></button></p>
                       
                        </div>
                  </div>
                  <div class="media mt-4">
                      <img class="mr-2" style={{height: '150px', width: '150px',border: '1px solid rgb(128, 126, 126)'}} src="../Images/l8.jpg"/>
                      <div class=" mt-2 media-body">                                      
                          <p style={{fontsize:'small'}}><b>LEATT PRO JACKET</b></p>
                        <p style={{fontsize: 'x-small'}}><i style={{fontsize: 'xx-small'}} class="fas fa-star text-warning"></i><i style={{fontsize: 'xx-small'}} class="fas fa-star text-warning"></i><i style={{fontsize:' xx-small'}} class="fas fa-star text-warning"></i><i style={{fontsize: 'xx-small'}} class="fas fa-star text-warning"></i><i  style={{fontsize: 'xx-small'}} class="fas fa-star text-warning"></i>   
                        </p>
                        <p style={{fontsize: 'small'}} class="text-danger">$99.00</p>
                        <p style={{fontsize: 'small'}}><button class="  btn-small bg-primary text-white"><i class="fas fa-shopping-cart"></i></button>
                          <button class="  btn-small "><i class="fas fa-heart"></i></button>
                          <button class="  btn-small "><i class="fas fa-eye"></i></button></p>
                       
                        </div>
                  </div>
                  <div class="media mt-4">
                      <img class="mr-2" style={{height: "150px",width: '150px',border: '1px solid rgb(128, 126, 126)'}} src="../Images/l9.jpg"/>
                      <div class=" mt-2 media-body">                                      
                          <p style={{fontsize:'small'}}><b>LEATT PRO JACKET</b></p>
                          <p style={{fontsize: 'x-small'}}><i style={{fontsize: 'xx-small'}} class="fas fa-star text-warning"></i><i style={{fontsize: 'xx-small'}} class="fas fa-star text-warning"></i><i style={{fontsize:' xx-small'}} class="fas fa-star text-warning"></i><i style={{fontsize: 'xx-small'}} class="fas fa-star text-warning"></i><i  style={{fontsize: 'xx-small'}} class="fas fa-star text-warning"></i>   
                          </p>
                          <p style={{fontsize: 'small'}} class="text-danger">$99.00</p>
                          <p style={{fontsize: 'small'}}><button class="  btn-small bg-primary text-white"><i class="fas fa-shopping-cart"></i></button>
                            <button class="  btn-small "><i class="fas fa-heart"></i></button>
                            <button class="  btn-small "><i class="fas fa-eye"></i></button></p>
                       
                        </div>
                  </div>
              </div> 
          </div>
              </Row>
          </Container>
          <Card>
           <div className='container-fluid' >
               <div className="lastpage">
               <Row className='row'>
                   <Row className="row text-center text-light">
                   <div class="banner-text">
                 <div class="text-area">
                 <Figure class="figure">
                    <img src="../Images/man.jpg" class="figure-img rounded-circle" height="60" width="60px"/>
                    </Figure>

                    <p class="container-fluid " style={{fontfamily:'Times New Roman, Times ,serif'}}><i style={{fontsize:' xx-large'}} class="fas fa-quote-left "></i><i>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>Neque facere voluptas ex tempora, rerum ad labore eaque dolor recusandae non cum sapiente itaque, dolores libero illum! Libero, veritatis nisi. Error!<br/>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Doloribus corrupti vero beatae optio laboriosam alias atque necessitatibus, iure quae voluptatem quod dolorem earum ab? Eum, enim voluptatem.<br/> Ut, quos ex!
                              Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Ea praesentium architecto dignissimos esse possimus cumque qui natus maiores cum recusandae. Temporibus expedita ullam illo<br/> aut impedit accusantium, excepturi asperiores? Ratione?
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt pariatur error nulla eligendi magni numquam voluptates. Voluptates odit corporis fugiat a at itaque assumenda<br/> dolore ea esse, optio sapiente earum.</i><i style={{fontsize: 'xx-large'}} class="fas fa-quote-right "></i></p>
                              
                            <h3><b>Billy German</b></h3>
                            <p>Great Phylosopher..</p>
                            <i class="fab fa-facebook p-2"></i>
                            <i class="fab fa-instagram p-2"></i> 
                            <i class="fab fa-twitter p-2"></i> <br/>
         
                     </div>
                     </div>
                       </Row>

               </Row>
                 
     </div>
   </div>

    
     </Card>
     <Card  class="container-fluid ">
            <div class="row ml-0 mr-0" style={{height: '50px'}}>
              <div class="col-lg-2 col-12 bg-primary text-center text-white"><i class="fab fa-facebook mr-2 mt-3"></i><b>FACEBOOK</b></div>
              <div style={{background:'rgb(103, 217, 221)'}} class=" col-lg-2 col-12  text-center text-white"><i class="fab fa-twitter mr-2 mt-3"></i><b>TWITTER</b></div>
              <div style={{background: 'rgb(240, 42, 75)'}} class="col-lg-2 col-12  text-center text-white"><i class="fab fa-instagram mr-2 mt-3"></i><b>INSTAGRAM</b></div>
              <div style={{background: 'rgb(218, 136, 149)'}} class="col-lg-2 col-12 text-center text-white"><i class="fas fa-basketball-ball mr-2 mt-3"></i><b>DRIBBLE</b></div>
              <div style={{background: 'blue'}} class="col-lg-2 col-12 text-center text-white"><i class="fab fa-linkedin-in mr-2 mt-3"></i><b>LINKED IN</b></div>
              <div class="col-lg-2 col-12 bg-danger text-center text-white"><i class="fab fa-pinterest mr-2 mt-3"></i><b>PINTREST</b></div>
          </div>
     
           </Card>
           <Card className="container-fluid">
          
          <Row class="row ml-0 mr-0">
            <Col style={{background:' rgb(32, 31, 31)'}} class="col-lg-12  text-white text-center">
                <p> <h3 class="mt-5"><b class="text-primary">B</b>
                    <b class="text-danger">P</b>
                    <b class="text-warning">K</b></h3></p>
                    <p class="mt-4 text-white"><i>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, ad facilis, voluptatem ipsum laboru</i></p>
                    <p class="mt-1 text-white"><i>Lorem ipsum dolor sit, amet consectetur</i></p>
                    <p class="mt-3"><i style={{fontsize:' xx-small'}} class="fas fa-circle text-primary"></i>
                        <i style={{fontsize: 'xx-small'}} class="fas fa-circle text-danger"></i>
                        <i style={{fontsize: 'xx-small'}} class="fas fa-circle text-warning"></i></p>
      
                        <p class="mt-4">
                             <img src="../Images/paypal.png" style={{height: '30px', width: '60px'}}/>
                            <img src="../Images/mc.png" style={{height: '30px',width: '60px'}}/>
                            <img src="../Images/visa.jpg"style={{height: '30px',width: '60px'}}/>
                            <img src="../Images/ebay.png" style={{height: '30px',width: '60px'}}/>
                            <img src="../Images/mclogo.png" style={{height: '30px',width: '60px'}}/>
                            <img src="../Images/paypal.png" style={{height: '30px',width: '60px'}}/></p>
            </Col>
          </Row>
        
          </Card>
      
          <Card className="text-center">
        
        <Card.Footer className="text-muted">  Copyright &copy; 2021 Designed by: Samiksha Gurav  |
              <a class="text-reset fw-bold" href="#" style={{color:'blue'}}>   All Rights Reserved.</a></Card.Footer>
      </Card>
           </>
        )
    }
}

export default Home
