import { Link } from 'react-router-dom';
import AuthInput from '../components/AuthInput';
import Button from '../components/Button';
import { LoginContainer } from '../components/common/ContainerStyle';
import logo from './../assets/logos/logo.svg';

const RegisterPage = () => {
  return (
    <LoginContainer>
      <img src={logo} alt='logo' />
      <h3 className='title'>建立你的帳號</h3>
      <AuthInput label='帳號' placeholder='請輸入帳號' />
      <AuthInput label='名稱' placeholder='請輸入使用名稱' />
      <AuthInput label='Email' placeholder='請輸入Email' />
      <AuthInput label='密碼' placeholder='請輸入密碼' />
      <AuthInput label='密碼確認' placeholder='請再次輸入密碼' />
      <Button text='註冊' />
      <div className='linkRegDiv'>
        <Link to='/login' className='link'>
          取消
        </Link>
      </div>
    </LoginContainer>
  );
};

export default RegisterPage;
