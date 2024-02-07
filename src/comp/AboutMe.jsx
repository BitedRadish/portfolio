import styled from "@emotion/styled";
import "../aboutme.css";
import { Section, SectionTitle } from "./styles.js";
import {
    faUser,
    faCakeCandles,
    faSchool,
    faEnvelope,
    faBlog,
} from "@fortawesome/free-solid-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutMeBox = styled.div`
    width: 90%;
    margin-top: 13vh;
    height: 40vh;
    display: flex;
    flex-direction: column;
    border: 1px solid white;
    border-radius: 15px;
`;
const AboutMeRow = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
`;
const AboutMeElement = styled.div`
    display: flex;
    width: 33.3%;
    height: 60%;
`;

const AboutMeIcon = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 4.5rem;
`;
const AboutMeInfo = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;

    height: 100%;
`;
const AboutMeTitle = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.8rem;
`;
const AboutMeContent = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.3rem;
`;

export default function AboutMe({ aboutMeRef }) {
    return (
        <div ref={aboutMeRef}>
            <Section>
                <SectionTitle>About Me</SectionTitle>
                <AboutMeBox className="beige-background">
                    <AboutMeRow>
                        <AboutMeElement>
                            <AboutMeIcon>
                                <FontAwesomeIcon icon={faUser} />
                            </AboutMeIcon>
                            <AboutMeInfo>
                                <AboutMeTitle>이름</AboutMeTitle>
                                <AboutMeContent>BitedRadish</AboutMeContent>
                            </AboutMeInfo>
                        </AboutMeElement>
                        <AboutMeElement>
                            <AboutMeIcon>
                                <FontAwesomeIcon icon={faCakeCandles} />
                            </AboutMeIcon>
                            <AboutMeInfo>
                                <AboutMeTitle>생년월일</AboutMeTitle>
                                <AboutMeContent>1998.08.31</AboutMeContent>
                            </AboutMeInfo>
                        </AboutMeElement>
                        <AboutMeElement>
                            <AboutMeIcon>
                                <FontAwesomeIcon icon={faSchool} />
                            </AboutMeIcon>
                            <AboutMeInfo>
                                <AboutMeTitle>전공</AboutMeTitle>
                                <AboutMeContent>컴퓨터공학과</AboutMeContent>
                            </AboutMeInfo>
                        </AboutMeElement>
                    </AboutMeRow>
                    <AboutMeRow>
                        <AboutMeElement>
                            <AboutMeIcon>
                                <FontAwesomeIcon
                                    icon={faSquareGithub}
                                    size="lg"
                                />
                            </AboutMeIcon>
                            <AboutMeInfo>
                                <AboutMeTitle>깃허브</AboutMeTitle>
                                <AboutMeContent>
                                    <a href="https://github.com/bitedradish">
                                        github.com/bitedradish
                                    </a>
                                </AboutMeContent>
                            </AboutMeInfo>
                        </AboutMeElement>
                        <AboutMeElement>
                            <AboutMeIcon>
                                <FontAwesomeIcon icon={faBlog} />
                            </AboutMeIcon>
                            <AboutMeInfo>
                                <AboutMeTitle>블로그</AboutMeTitle>
                                <AboutMeContent>
                                    <a href="https://velog.io/@loiloi621">
                                        velog.io/@loiloi621
                                    </a>
                                </AboutMeContent>
                            </AboutMeInfo>
                        </AboutMeElement>
                        <AboutMeElement>
                            <AboutMeIcon>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </AboutMeIcon>
                            <AboutMeInfo>
                                <AboutMeTitle>이메일</AboutMeTitle>
                                <AboutMeContent>
                                    a980831@naver.com
                                </AboutMeContent>
                            </AboutMeInfo>
                        </AboutMeElement>
                    </AboutMeRow>
                </AboutMeBox>
            </Section>
        </div>
    );
}
