import { useLocation } from 'react-router-dom';
import logo from '@/assets/logos/logo.svg';
import PageLink from '@/components/PageLink';
import homeOutlined from '@/assets/icons/homeOutlined.svg';
import homeFilled from '@/assets/icons/homeFilled.svg';
import userOutlined from '@/assets/icons/userOutlined.svg';
import userFilled from '@/assets/icons/userFilled.svg';
import cogOutlined from '@/assets/icons/cogOutlined.svg';
import cogFilled from '@/assets/icons/cogFilled.svg';
import logout from '@/assets/icons/logout.svg';
import Button from '@/components/Button';

const Sidebar = () => {
  const location = useLocation();
  const path = location.pathname;
  const handleLogout = () => {
    console.log('是否確認要登出?');
  };

  const btnStyles = {
    width: '100%',
    height: '2.875rem',
  };
  return (
    <div className='sidebar'>
      <div>
        <img src={logo} alt='logo' className='logo' />
        <PageLink
          icon={
            path.includes('tweets') && !path.includes('user')
              ? homeFilled
              : homeOutlined
          }
          title='首頁'
          link='/tweets'
        />
        <PageLink
          icon={path.includes('user') ? userFilled : userOutlined}
          title='個人資料'
          link='/users/:userId/tweets'
        />
        <PageLink
          icon={path.includes('setting') ? cogFilled : cogOutlined}
          title='設定'
          link='/setting'
        />
        <Button styles={btnStyles} btnText='推文' />
      </div>
      <PageLink
        icon={logout}
        title='登出'
        link='/login'
        onClick={handleLogout}
      />
    </div>
  );
};

export default Sidebar;
