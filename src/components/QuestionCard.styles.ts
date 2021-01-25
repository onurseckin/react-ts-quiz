import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 1100px;
  background: #ebffeff;
  border-radius: 10px;
  border: 2px solid #0085a3;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;

  p {
    font-size: 1rem;
  }
`
type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;
  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 100%;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct ? 'linear-gradient(90deg, #56ffa4, #59bc86)'
      : !correct && userClicked
      ? 'linear-gradient(90deg, #ff5656, #c16868)'
      : 'linear-gradient(90deg, #56ccff, #6eafb4)'
    };
    border: 3px solid #fff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  }
`