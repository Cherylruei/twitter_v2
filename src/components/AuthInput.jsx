/* eslint-disable react/prop-types */
import { StyledAuthInput } from './common/AuthStyle';

const AuthInput = ({ label, placeholder }) => {
  return (
    <StyledAuthInput>
      <label className='label'>{label}</label>
      <input className='input' placeholder={placeholder} />
      <div className='helper'></div>
    </StyledAuthInput>
  );
};

export default AuthInput;
