import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ResetStyle, GlobalStyle } from './components/common/globalStyle';
import {
  HomePage,
  LoginPage,
  RegisterPage,
  ReplyPage,
  UsersPage,
  Setting,
  AdminPage,
} from './pages';
import TweetLayout from './layout/TweetLayout';
import AdminLayout from './layout/AdminLayout';
import AdminTweets from './containers/AdminTweets';
import AdminUsers from './containers/AdminUsers';
import UserTweets from './containers/UserTweets';
import UserLikes from './containers/UserLikes';
import UserReplies from './containers/UserReplies';
import UserFollowers from './containers/UserFollowers';
import UserFollowings from './containers/UserFollowings';

function App() {
  return (
    <BrowserRouter>
      <ResetStyle />
      <GlobalStyle />
      <Routes>
        <Route>
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path='/*' element={<Navigate to='/tweets' />} />
        </Route>
        <Route element={<TweetLayout />}>
          <Route path='/tweets'>
            <Route index element={<HomePage />} />
            <Route path=':tweetId' element={<ReplyPage />} />
          </Route>
          <Route element={<UsersPage />}>
            <Route path='/users/:userId'>
              <Route path='tweets' element={<UserTweets />} />
              <Route path='likes' element={<UserLikes />} />
              <Route path='replies' element={<UserReplies />} />
              <Route path='followers' element={<UserFollowers />} />
              <Route path='followings' element={<UserFollowings />} />
            </Route>
          </Route>
          <Route path='setting' element={<Setting />} />
        </Route>

        <Route>
          <Route path='admin' element={<AdminPage />} />
          <Route element={<AdminLayout />}>
            <Route path='tweets' element={<AdminTweets />} />
            <Route path='users' element={<AdminUsers />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
