import Slider from 'react-slick';
import SingleSlide from './SingleSlide';
import { useWindowWidth } from '@react-hook/window-size';
import './slider.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const data = [
  {
    filename: '1.jpeg',
    title: (
      <h2>
        Une nouvelle{' '}
        <strong>
          expérience <br /> digitale avec vos projets
        </strong>
      </h2>
    ),
    text: (
      <p>
        Notre expérience technique et méthodologique permet une flexibilité
        accrue dans la gestion des projets.
      </p>
    ),
  },
  {
    filename: '2.jpg',
    title: (
      <h2>
        Something <strong>to say </strong>
      </h2>
    ),
    text: <p> Un bon paragraphe.</p>,
  },
];

const VerticalSlider = () => {
  const width = useWindowWidth();
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 5000,
    dotsClass: 'vertical-dots',
    height: 600, //width > 600 ? 600 : 300,
  };
  return (
    <Slider {...settings} className='slider'>
      {data && data.map((slideData) => <SingleSlide {...slideData} />)}
    </Slider>
  );
};

export default VerticalSlider;
