import { ThemeButton } from './common/ButtonStyle';

/* eslint-disable react/prop-types */
const Button = ({ styles, btnText }) => {
  return <ThemeButton style={styles}>{btnText}</ThemeButton>;
};

export default Button;
