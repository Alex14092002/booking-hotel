import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css'


const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
      
      };
  return (
    <>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://www.sedonavietnam.com/wp-content/uploads/2018/02/Grand-Three-Bedroom-Master-Bedroom.jpg"
              class="d-block w-100"
              height="700px"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://www.sedonavietnam.com/wp-content/uploads/2022/07/Sedona-Web-Banner.jpg"
              class="d-block w-100"
              alt="..."
              height="700px"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://www.sedonavietnam.com/wp-content/uploads/2018/02/Grand-Three-Bedroom-Master-Bedroom.jpg"
              class="d-block w-100"
              alt="..."
              height="700px"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container slick-slider-item">
      <Slider {...settings}>
      <div className="item-slider">
        <img src="https://www.sedonavietnam.com/wp-content/uploads/2017/11/Best-Available-Rates.jpg" alt="" width='100%' />
        <div className="title-serves">
            <h5>GIÁ TỐT NHẤT SẴN CÓ</h5>
        </div>
      </div>
      <div className="item-slider">
        <img src="https://www.sedonavietnam.com/wp-content/uploads/2023/04/bed-breakfast-slider2.jpg" alt="" width='100%' />
        <div className="title-serves">
            <h5>GIƯỜNG & ĂN SÁNG TRÊN SKY</h5>
        </div>
      </div>
      <div className="item-slider">
        <img src="https://www.sedonavietnam.com/wp-content/uploads/2017/11/Best-Available-Rates.jpg" alt="" width='100%' />
        <div className="title-serves">
            <h5>GIÁ TỐT NHẤT SẴN CÓ</h5>
        </div>
      </div>
      <div className="item-slider">
        <img src="https://www.sedonavietnam.com/wp-content/uploads/2023/04/bed-breakfast-slider2.jpg" alt="" width='100%' />
        <div className="title-serves">
            <h5>GIƯỜNG & ĂN SÁNG TRÊN SKY</h5>
        </div>
      </div>
     
     
    </Slider>
      </div>
    </>
  );
};

export default Home;
