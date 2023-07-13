import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { ResetStyle, GlobalStyle } from './components/common/globalStyle';
import {
  HomePage,
  LoginPage,
  RegisterPage,
  ReplyPage,
  FollowPage,
  UsersPage,
} from './pages';
import TweetLayout from './layout/TweetLayout';

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
              <Route path='tweets' />
              <Route path=':userId' element={<FollowPage />} />
            </Route>
          </Route>
        </Route>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
