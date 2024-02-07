import styled from "@emotion/styled";
import { Section } from "./styles";
import "../button.css";

const HomeTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 40vh;
    color: black;
    font-size: 2.7rem;
    font-weight: 900;
    padding-top: 7vh;
`;

const HomeText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: black;
    width: 50%;
    height: 20vh;
    font-size: 1.7rem;
`;

const HomeNextButton = styled.button`
    margin-top: 5vh;
    width: 15%;
    height: 6vh;
    border-radius: 2rem;
    font-size: 1.5rem;
    cursor: pointer;
    color: black;
`;
const BorderLine = styled.div`
    width: 10vh;
    top: -10px;
    height: 2px;
    background-color: black;
`;

export default function Home({ homeRef, aboutMeRef }) {
    const handleNextPage = () => {
        aboutMeRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    return (
        <div ref={homeRef}>
            <Section className="beige-background">
                <HomeTitle>
                    <span>BitedRadish's</span>
                    <span>FE Developer Portfolio</span>
                </HomeTitle>
                <BorderLine></BorderLine>
                <HomeText>
                    <span>안녕하세요.</span>
                    <span>프론트엔드 개발자를 꿈꾸는 주니어 개발자입니다.</span>
                    <span>꾸준함과 책임감이 저의 장점입니다.</span>
                </HomeText>
                <HomeNextButton
                    className="btn-3d yellow"
                    onClick={handleNextPage}
                >
                    더 알아보기
                </HomeNextButton>
            </Section>
        </div>
    );
}
