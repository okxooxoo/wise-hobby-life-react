import styled from "styled-components";
import Header from "../components/Header";

const Home = () => {
    return (
        <HomeLayout>
            {/* <Header /> */}
            <IntroSection bgColor="#cae8ff">
                <IntroText>
                    취미를 잃기 쉬운 현대 사회
                </IntroText>
                <IntroText>
                    여러분은 자신만의 취미를 갖고 계신가요?
                </IntroText>
            </IntroSection>
            <IntroSection bgColor="#ffcaea">
                <IntroText>
                    슬기로운 취미생활은 취미를 공유하며 영감을 얻는 공간입니다.
                </IntroText>
            </IntroSection>
            <IntroSection>
                <IntroText>
                    사람들과 함께 성장하며 당신의 무한한 가능성을 찾아보세요!
                </IntroText>
            </IntroSection>
        </HomeLayout>
    );
};

const HomeLayout = styled.div`
    height: 100%;
`;

const IntroSection = styled.section`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.bgColor || 'white'};
`;

const IntroText = styled.div`
    color: #323232;
    //font-size: 16px;
    font-family: 'Nanum Gothic', sans-serif;
    font-weight: bold;
    padding: 20px;
`;

export default Home;