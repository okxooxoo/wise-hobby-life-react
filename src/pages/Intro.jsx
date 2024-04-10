import React from 'react';
import { SectionsContainer, Section } from 'react-fullpage';
import styled from 'styled-components';
import AuthBtns from '../components/AuthBtns';

function Intro() {
  const options = {
    anchors: ['FirstSection', 'SecondSection', 'ThirdSection', 'AuthSection'],
  };

  return (
    <HomeLayout>
      <SectionsContainer {...options}>
        {/* <Header /> */}
        <Section>
          <IntroSlider
            bgColor="#cae8ff"
          >
            <IntroText>취미를 잃기 쉬운 현대 사회</IntroText>
            <IntroText>여러분은 자신만의 취미를 갖고 계신가요?</IntroText>
          </IntroSlider>
        </Section>
        <Section>
          <IntroSlider
            bgColor="#ffcaea"
          >
            <IntroText>슬기로운 취미생활은 취미를 공유하며</IntroText>
            <IntroText>영감을 얻는 공간입니다.</IntroText>
          </IntroSlider>
        </Section>
        <Section>
          <IntroSlider
            bgColor="#FFF980"
          >
            <IntroText>사람들과 함께 성장하며</IntroText>
            <IntroText>당신의 무한한 가능성을 찾아보세요!</IntroText>
          </IntroSlider>
        </Section>
        <Section>
          <AuthBtns />
        </Section>
      </SectionsContainer>
    </HomeLayout>
  );
}

const HomeLayout = styled.div`
  height: 100%;
`;

const IntroSlider = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff980;
  background-image: url(/images/black_cloud_v2.png);
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
`;

const IntroText = styled.div`
  color: white;
  font-size: 30px;
  font-family: "Nanum Gothic", "Noto Sans KR", sans-serif;
  font-weight: bold;
  padding: 20px;
`;

export default Intro;
