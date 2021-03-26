import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products';

const getProductList = () => {
  return products.map((product) => {
    return (
      <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
        <Product product={product} />
      </Col>
    );
  });
};

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>{getProductList()}</Row>
    </>
  );
};

export default HomeScreen;
