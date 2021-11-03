import React from "react";
import "./home.scss";
import { Container, Row, Col } from "react-bootstrap";
import MainNavbar from '../../organism/navbar/navbar'

const Home = () => {
  return (
    <div className="p-home">
      <Container fluid className="p-login__container">
      <MainNavbar/>
        <Row className="justify-content-md-center ">
          <Col lg="auto">
            <h2>PAGINA HOME</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A provident
            beatae, maiores omnis ratione recusandae, delectus iste ipsum
            obcaecati cum deserunt nemo eius. Cupiditate ipsa necessitatibus vel
            suscipit possimus expedita voluptatem ea, harum, debitis doloremque
            atque similique architecto laborum molestiae veritatis eum. Sunt
            exercitationem esse sit veritatis? Dolorem blanditiis reiciendis
            vel, eaque numquam eligendi atque. Nam voluptatibus enim architecto
            asperiores ab nisi reiciendis illum qui similique! Soluta maiores
            est quasi ab pariatur assumenda magnam sapiente laboriosam aut
            aspernatur. Alias cum saepe quas ducimus dolorum, harum eos magnam
            incidunt tenetur quos voluptas nihil quibusdam mollitia quod ut
            consequuntur commodi ipsam enim fuga repudiandae vitae nam. Eum
            deleniti harum, voluptatum cupiditate non sed nostrum quae illo iure
            nesciunt eveniet voluptas aperiam cumque saepe. Rerum nulla ipsam
            quidem quasi illo fugit debitis tenetur, veniam dicta adipisci?
            Minima in cupiditate, reprehenderit atque delectus quis. Tempora
            dolor et numquam odit voluptatibus minus, aut, sapiente cum quae non
            optio illum minima magnam quidem. Facere nisi voluptatibus non
            laboriosam quos libero autem iste, officia beatae, rerum debitis
            odio numquam! Error aspernatur suscipit possimus minus laborum! Fuga
            quis voluptatum asperiores quaerat ab cumque, illum blanditiis
            architecto consectetur ratione magnam expedita atque fugit dolor
            omnis illo? Laboriosam, pariatur nesciunt.
          </Col>
        </Row>
      </Container>
    </div>);
};

export default Home;
