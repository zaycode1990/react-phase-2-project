import React from 'react'
import { Button, Card, Form, Row, Col, Container, ListGroup, ListGroupItem } from 'react-bootstrap'

function CheckOutCard({ booksInCart }) {

  const formCardStyle = {
    width: 'auto'
  }

  const cartCardStyle = {
    display: 'flex',
    justifyContent: "space-evenly",
    width: 'auto'
  }


  const itemsInCart = booksInCart.map((book) =>
    <ListGroupItem key={book.id}><img src={book.img} height='100px' /> <br /> Title: {book.title}    ${book.price}</ListGroupItem>

  )
  const total = booksInCart.reduce((prev, next) =>
    prev + next.price

    , 0).toFixed(2)

  console.log(total)

  return (
    <div>

      <Container>

        <Row>
          <Col>
            <Card style={formCardStyle}>

              <Form>

                <h2 className="headingStyle">Customer Info</h2>

                <Row className="mb-3">
                  <Form.Group as={Col} className="mb-3" controlId="formGridFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" />

                  </Form.Group>

                  <Form.Group as={Col} className="mb-3" controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" />

                  </Form.Group>

                  <Form.Group as={Col} className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />

                  </Form.Group>
                </Row>

                <Row className="mb-3" >
                  <Form.Group as={Col} className="mb-3" controlId="formAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="123 Example St" />
                  </Form.Group>

                  <Form.Group as={Col} className="mb-3" controlId="formCountry">
                    <Form.Label>Select Country</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="Mex">Mexico</option>
                    </Form.Select>
                  </Form.Group>

                </Row>

                <Row className="mb-3" >
                  <Form.Group as={Col} className="mb-3" controlId="formCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Los Angeles" />
                  </Form.Group>

                  <Form.Group as={Col} className="mb-3" controlId="formState">
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" placeholder="Ca" />
                  </Form.Group>



                  <Form.Group as={Col} className="mb-3" controlId="formZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type="text" placeholder="00000" />
                  </Form.Group>

                </Row>



                <h2 className="headingStyle">Payment Info</h2>
                <Row className="mb-3" >
                  <Form.Group as={Col} className="mb-3" controlId="formCreditCardNumber">
                    <Form.Label>Credit Card Number</Form.Label>
                    <Form.Control type="text" placeholder="0000010000010011" />
                  </Form.Group>

                  <Form.Group as={Col} className="mb-3" controlId="formBillingZip">
                    <Form.Label>Billing Zip</Form.Label>
                    <Form.Control type="text" placeholder="00000" />
                  </Form.Group>
                </Row>

                <Row className="mb-3" >
                  <Form.Group as={Col} className="mb-3" controlId="formCardMonth">
                    <Form.Label>Country</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option value="01">Jan</option>
                      <option value="02">Feb</option>
                      <option value="03">Mar</option>
                      <option value="04">Apr</option>
                      <option value="05">May</option>
                      <option value="06">Jun</option>
                      <option value="07">Jul</option>
                      <option value="08">Aug</option>
                      <option value="09">Sep</option>
                      <option value="10">Oct</option>
                      <option value="11">Nov</option>
                      <option value="12">Dec</option>
                    </Form.Select>
                  </Form.Group>


                  <Form.Group as={Col} className="mb-3" controlId="formCardYear">
                    <Form.Label>Country</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option value="01">Jan</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                      <option value="2028">2028</option>
                      <option value="2029">2029</option>
                      <option value="2030">2030</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} className="mb-3" controlId="formCVC">
                    <Form.Label>CVC</Form.Label>
                    <Form.Control type="text" placeholder="123" />
                  </Form.Group>
                </Row>



                <h2 className="headingStyle">Billing Info</h2>


                <Row className="mb-3" as={Col}>
                  <Form.Group as={Col} className="mb-3" controlId="formBillingCountry">
                    <Form.Label>Country</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="Mex">Mexico</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} className="mb-3" controlId="formBillingAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="123 Example St" />
                  </Form.Group>
                </Row>

                <Row className="mb-3" >
                  <Form.Group as={Col} className="mb-3" controlId="formBillingCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Los Angeles" />
                  </Form.Group>

                  <Form.Group as={Col} className="mb-3" controlId="formBillingState">
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" placeholder="Ca" />
                  </Form.Group>

                  <Form.Group as={Col} className="mb-3" controlId="formBillingCountry">
                    <Form.Label>Country</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="Mex">Mexico</option>
                    </Form.Select>
                  </Form.Group>
                </Row>



                <Button className="buttonStyle" variant="primary" type="submit">
                 Checkout
                </Button>
              </Form>

            </Card>

          </Col>

          <Col>
            <Card style={cartCardStyle}>

              <Card.Body>
                <Card.Title>Current Cart</Card.Title>

              </Card.Body>
              <ListGroup className="list-group-flush">

                {itemsInCart}
                <ListGroupItem>Total Price: ${total}</ListGroupItem>
              </ListGroup>

            </Card>
          </Col>
        </Row>
      </Container>

    </div >
  )
}

export default CheckOutCard