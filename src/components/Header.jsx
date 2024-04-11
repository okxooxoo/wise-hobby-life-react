import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <HeaderLayout>
      <HeaderTitle>
        슬기로운 취미생활
      </HeaderTitle>
      <HeaderNav>
        <HeaderNavItem>
          둘러보기
        </HeaderNavItem>
        <HeaderNavItem>
          공유하기
        </HeaderNavItem>
        <HeaderNavItem>
          나의 취미생활
        </HeaderNavItem>
      </HeaderNav>
    </HeaderLayout>
  );
}

const HeaderLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeaderTitle = styled.div`
  font-family: 'Moirai One', sans-serif;
  font-size: 34px;
  font-weight: bold;
  color: white;
  margin: 68px;
`;

const HeaderNav = styled.div`
  height: 22px;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #cae8ff;
  border-radius: 20px;
`;

const HeaderNavItem = styled.div`
  color: #323232;
  font-family: 'Nanum Gothic', sans-serif;
  font-size: 14px;
  font-weight: bold;
`;

export default Header;
