import styled from 'styled-components';

export const Container = styled.div`
  background: #a12515;
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  
  p {
    color: #fff;
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
      background: #fff;
      color: #a12515;
      font-family: Montserrat, Helvetica, Arial, "sans-serif";
      font-weight: bold;
      width: 100%;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
      font-size: .95rem;
      padding: 0.75rem 1rem;
      border-radius: 10px;
      cursor: pointer;
      text-transform: uppercase;
    }

    button:hover {
      background: #e4e4e4;
    }
  }
`;