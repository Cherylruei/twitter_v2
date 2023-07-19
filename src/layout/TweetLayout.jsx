import { Outlet } from 'react-router-dom';
import Sidebar from '../containers/Sidebar';
import PopularList from '../containers/PopularList';
import { TweetContainer } from '../components/common/ContainerStyle';

const TweetLayout = () => {
  return (
    <TweetContainer>
      <Sidebar />
      <Outlet />
      <PopularList />
    </TweetContainer>
  );
};

export default TweetLayout;
