import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function AuthBtns() {
  const navigate = useNavigate();

  const handleLoginBtnClick = () => {
    navigate('/login');
  };

  const handleRegisterBtnClick = () => {
    navigate('/register');
  };

  return (
    <AuthBtnsLayout>
      <AuthBtn>
        <AuthBtnText onClick={handleLoginBtnClick}>
          로그인
        </AuthBtnText>
      </AuthBtn>
      <AuthBtnSubText>
        또는
      </AuthBtnSubText>
      <AuthBtn>
        <AuthBtnText onClick={handleRegisterBtnClick}>
          회원가입
        </AuthBtnText>
      </AuthBtn>
    </AuthBtnsLayout>
  );
}

const AuthBtnsLayout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff980;
`;

const AuthBtn = styled.div`
  height: 68px;
  width: 124px;
  background-image: url(/images/green_btn.png);
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const AuthBtnText = styled.div`
  color: white;
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 20px;
  font-weight: bold;
`;

const AuthBtnSubText = styled.div`
  color: black;
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 20px;
  font-weight: bold;
`;

export default AuthBtns;
