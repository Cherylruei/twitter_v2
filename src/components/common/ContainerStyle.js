import styled from 'styled-components';

const LoginContainer = styled.div`
  .title {
    margin: 1.5rem 0rem 2.5rem;
    font-size: var(--font-size-h3);
  }
  .linkDiv {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 1rem;
    font-weight: 400;
    font-size: 1rem;
    color: var(--color-primary);
  }
  .linkRegDiv {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    font-weight: 400;
    font-size: 1rem;
    color: var(--color-primary);
  }
  .link {
    padding: 0 0.75rem;
  }
`;

const TweetContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  .sidebar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 12rem;
    flex-grow: 1.63;
    text-align: start;
    font-weight: 700;
    color: var(--color-gray-90);
    .box {
      display: flex;
    }
    .logo {
      margin: 0.5rem;
      width: 3.125rem;
      height: 3.125rem;
    }
    .pageLink {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 0.5rem 0;
      padding-left: 1rem;
      width: 11.125rem;
      height: 3.625rem;
      gap: 0.8rem;
      font-size: var(--font-size-h5);
      font-weight: 700;
      line-height: 1.625rem;
      .icon {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
    .active {
      color: var(--color-theme);
    }
  }
  .main {
    width: 40rem;
    flex-grow: 5.86;
  }
  .list {
    width: 17.06rem;
    flex-grow: 2.5;
  }
`;

export { LoginContainer, TweetContainer };
