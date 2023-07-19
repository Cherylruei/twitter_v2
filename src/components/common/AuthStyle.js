import styled from 'styled-components';

export const StyledAuthInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 22.25rem;
  height: 4.875rem;
  padding: 0.19rem 0rem;
  text-align: start;
  border-radius: 2px;
  .label {
    width: 100%;
    height: 1.375rem;
    font-size: 0.875rem;
    padding: 0 0.65rem;
    font-weight: 400;
    background-color: var(--color-form);
    color: var(--color-gray-80);
    line-height: 1.375rem;
  }
  .input {
    width: 100%;
    height: 1.625rem;
    font-size: 1rem;
    padding: 0 0.65rem;
    background-color: var(--color-form);
    border: transparent;
    border-bottom: 2px solid #657786;
    color: var(--color-gray-60);
    line-height: 1.625rem;
  }

  .helper {
    width: 100%;
    height: 1.5rem;
    background-color: var(--color-white);
  }

  input:focus,
  input:hover {
    outline: none;
    border-bottom: 2px solid var(--color-secondary-blue);
  }
`;
