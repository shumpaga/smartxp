import YellowBtn from './YellowBtn';
import './singleSlide.scss';
import { useWindowWidth } from '@react-hook/window-size';

const SingleSlide = ({ filename, title, text }) => {
  const width = useWindowWidth();
  return (
    <div className={`slide ${width > 600 ? '' : 'small-width'}`}>
      <img
        className='img'
        alt={'Slide1'}
        src={`${process.env.PUBLIC_URL}/slider/${filename}`}
      />
      <img
        className='mask'
        alt={'Slide Mask'}
        src={`${process.env.PUBLIC_URL}/slider/mask.svg`}
      />
      <div className='title'>{title}</div>
      <div className='text'>{text}</div>
      <YellowBtn text='Parlez nous de vos projets' link='#contact' />
    </div>
  );
};

export default SingleSlide;
