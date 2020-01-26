import React from "react";
import { useSelector } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import {Image, Container,Col, Tab,Tabs} from "react-bootstrap";

const HotelDetail = ({ location }) => {
  const hotelList = useSelector(state => state.app.hotels);

  const selectedHotel = hotelList.filter(item => {
      if (item._id === location.state.hotelId) {
          return true;
      }
      return false;
  });

  console.log("selectedHotel :", selectedHotel);
  if (selectedHotel.length <= 0) {
    return <Link to="/">Lutfen anasayfaya gidiniz</Link>;
  }
  return (
    <Container>
      <h2>{selectedHotel[0].name}</h2>
      <Col xs={10} md={6}>
      <Image src={selectedHotel[0].imageUrl} thumbnail alt="Hotel"  />
      </Col>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
      <Tab eventKey="Adres" title="Adres">
      <p>{selectedHotel[0].adress}</p>
      </Tab>
      <Tab eventKey="Aciklama" title="Aciklama">
      <p>{selectedHotel[0].description}</p>
      </Tab>
      <Tab eventKey="Fiyat" title="Fiyat" >
      <p>{selectedHotel[0].price}</p>
      </Tab>
    </Tabs>
      </Container>
  );
}

export default withRouter(HotelDetail);