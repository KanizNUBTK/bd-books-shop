import React from 'react';
import './Home.css';
import Books from '../Books/Books';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../image/banner1.cms';
import banner2 from '../../image/banner2.jpg';
import banner3 from '../../image/banner3.jpg';
import Author from '../Author/Author';

const Home = () => {
    return (
        <div>
            <div className="first-part">
            <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block banner-img"
                    src={banner1}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                      <h2>bdBooks Shop</h2>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block banner-img"
                    src={banner2}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                  <h2>bdBooks Shop</h2>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block banner-img"
                    src={banner3}
                    alt="First slide"
                  />
                  <Carousel.Caption>
                  <h2>bdBooks Shop</h2>
                  </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
            <div className="middile-part ">
                <h2 className="text-center">Our Books</h2>
                <Books></Books>
            </div>
            <div className="last-part">
              <div><Author></Author></div>
            </div>
        </div>
    );
};

export default Home;