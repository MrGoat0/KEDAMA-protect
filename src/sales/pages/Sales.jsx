import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Header from "../Header.jsx";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Footer from "../../shared/Footer.jsx";
import Table from 'react-bootstrap/Table'
import { Link } from "react-router-dom";

const Sales = () => {
return(
    <div className="dark-background-body">

    <Header />
    

   <Container>
   <Row>
    <Col >

    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Listar información de usuario</Form.Label>
    <Form.Control type="email" placeholder="Nombre o ID" />
    
  </Form.Group>

<Button variant="primary" type="submit" className="float-right" >
    Listar
  </Button>

  
  <Link to="/categories/sales/updateinputsales">
  <Button variant="primary" type="submit" className="float-right" >
    Actualizar
  </Button>
    </Link>





  <Button variant="primary" type="submit" className="float-right" >
    Cambiar Rol
  </Button>


  </Form>


    </Col>
   
      
      <Col >
      <Table striped bordered hover variant="dark" >
  <thead >
    <tr>
      <th>#</th>
      <th>ID</th>
      <th>Nombre</th>
      <th>Fecha Ingreso</th>
      <th>Correo</th>
      <th>Procedencia</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>001</td>
      <td>11/02/2005</td>
      <td>mark@gmail.com</td>
      <td>buenaventura</td>
    </tr>
   
  </tbody>
</Table>
</Col>


    

  </Row>

        
  

  

  <Footer />
</Container>
    </div>
)

}
export default Sales