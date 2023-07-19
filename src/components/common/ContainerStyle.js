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

const TweetContainer = styled.div `
  display: flex;
  flex-direction: row;
`

export { LoginContainer, TweetContainer };
