import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0;
  
  p {
    color: #9ca3af;
    text-align: center;
  }

  .menu-title {
    font-size: 1.5rem;
    font-weight: bold;
    padding: 1rem 0rem 2rem 0;
  }

  .menu-options {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    
    button {
      font-size: 1.05rem;
      padding: 0.75rem 0.75rem;
      border-radius: 0.25rem;
      cursor: pointer;
    }
  }
`;