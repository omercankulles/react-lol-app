import React from 'react';
import { Container, Col, Row } from "reactstrap";
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';


function App() {
  let productInfo = {title:"Product List"}
  let categoryInfo = {title:"Category List"}
  return (
    <div>
       <Container>
          <Row>
            <Navi></Navi>
          </Row>

          <Row>
            <Col xs="3">
              <CategoryList info={categoryInfo}></CategoryList>
            </Col>

            <Col xs="9">
              <ProductList info={productInfo}></ProductList>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;
