import { ThemeButton } from './common/ButtonStyle';

/* eslint-disable react/prop-types */
const Button = ({ text }) => {
  return (
    <ThemeButton>
      <button className='btn xLarge'>{text}</button>
    </ThemeButton>
  );
};

export default Button;
