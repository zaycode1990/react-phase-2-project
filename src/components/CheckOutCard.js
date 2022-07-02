import React from 'react'
import { Button, Card, Form, Row, Col, Container, ListGroup, ListGroupItem } from 'react-bootstrap'

function CheckOutCard({ booksInCart }) {

  
  const total = booksInCart.reduce((prev, next) =>{next.price + prev.price,0} )

  const itemsInCart = booksInCart.map((book) => 
   <ListGroupItem>Title:{book.title}:   ${book.price}</ListGroupItem>
  )

console.log(itemsInCart, total)

  return (
    <div>
      
      <Card text="">
        <Form>
          <Form.Group className="mb-3" controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="123 Example St" />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formCity">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Los Angeles" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formState">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="Ca" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCountry">
            <Form.Label>Country</Form.Label>
            <Form.Select aria-label="Default select example">
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="Mex">Mexico</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="00000" />
          </Form.Group>

          <h2>Payment Info</h2>
          
          <Form.Group className="mb-3" controlId="formCreditCardNumber">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="00000" />
          </Form.Group>




          <Button variant="primary" type="submit">
            Checkout
          </Button>
        </Form>

      </Card>


      <Card style={{ width: '18rem' }}>

        <Card.Body>
          <Card.Title>Current Cart</Card.Title>

        </Card.Body>
        <ListGroup className="list-group-flush">
          
          {itemsInCart}
        </ListGroup>

      </Card>
      

    </div>
  )
}

export default CheckOutCard