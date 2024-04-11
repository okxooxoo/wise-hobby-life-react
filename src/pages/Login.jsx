import React from 'react';
import styled from 'styled-components';

function Login() {
  return (
    <LoginLayout>
      <LoginFormTitle>
        로그인
      </LoginFormTitle>
      <LoginForm>
        <LoginFormLabel>
          이메일
        </LoginFormLabel>
        <LoginFormInput />
      </LoginForm>
      <LoginForm>
        <LoginFormLabel>
          비밀번호
        </LoginFormLabel>
        <LoginFormInput type="password" />
      </LoginForm>
      <AuthBtn>
        <AuthBtnText>
          로그인
        </AuthBtnText>
      </AuthBtn>
    </LoginLayout>
  );
}

const LoginLayout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginFormTitle = styled.div`
  font-weight: bold;
  font-size: 22px;
  margin: 20px 0px 20px 0px;
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
`;

const LoginFormInput = styled.input`
  display: flex;
  width: 280px;
  border: 1px solid black;
  border-radius: 30px;
  padding: 14px;
  color: white;
  background-color: black;
  &:focus {
    outline: none;
  }
`;

const LoginFormLabel = styled.div`
  width: 80px;
  display: flex;
  align-items: center;
  padding: 0px 10px 0px 10px;
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
  margin: 20px;
`;

const AuthBtnText = styled.div`
  color: white;
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 20px;
  font-weight: bold;
`;

export default Login;
