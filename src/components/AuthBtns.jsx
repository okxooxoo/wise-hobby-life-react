import React from 'react';
import styled from 'styled-components';

function AuthBtns() {
  return (
    <AuthBtnsLayout>
      <AuthBtn>
        <AuthBtnText>
            로그인
        </AuthBtnText>
      </AuthBtn>
      <AuthBtnSubText>
            또는
      </AuthBtnSubText>
      <AuthBtn>
        <AuthBtnText>
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
`;

const AuthBtn = styled.div`
    height: 80px;
    width: 150px;
    background-image: url(/images/black_btn.png);
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
