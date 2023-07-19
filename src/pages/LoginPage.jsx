import { Link } from 'react-router-dom';
import AuthInput from '../components/AuthInput';
import Button from '../components/Button';
import { LoginContainer } from '../components/common/ContainerStyle';
import logo from './../assets/logos/logo.svg';

const LoginPage = () => {
  const btnStyles = {
    width: '22.25rem',
    height: '2.875rem',
    fontSize: '1.25rem',
  };
  return (
    <LoginContainer>
      <img src={logo} alt='logo' />
      <h3 className='title'>登入 Alphitter</h3>
      <AuthInput label='帳號' placeholder='請輸入帳號' />
      <AuthInput label='密碼' placeholder='請輸入密碼' />
      <Button styles={btnStyles} btnText='登入' />
      <div className='linkDiv'>
        <Link to='/register' className='link'>
          註冊
        </Link>
        ・
        <Link to='/admin' className='link'>
          後台登入
        </Link>
      </div>
    </LoginContainer>
  );
};

export default LoginPage;
