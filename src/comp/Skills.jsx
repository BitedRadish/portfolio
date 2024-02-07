import styled from "@emotion/styled";
import { Section, SectionTitle } from "./styles.js";

import htmlcssjs from "../images/htmlcssjs.png";
import reactImage from "../images/react.png";
import nextjsImage from "../images/nextJS.png";
import nodeJsImage from "../images/nodejs.png";
import gitImage from "../images/git.png";
import awsImage from "../images/amazon.png";

const SkillBox = styled.div`
    width: 60%;
    height: 60vh;
    border: 1px solid black;
    border-radius: 15px;
    margin-top: 5vh;
    display: flex;
`;

const FeSkillBox = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const FeSkillTitle = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid black;
    font-size: 1.5rem;
    font-weight: 800;
`;
const FeSkillContents = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

const EtcSkillBox = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const EtcSkill = styled.div`
    width: 100%;
    height: 33.3%;
    display: flex;
    flex-direction: column;
    border-left: 1px solid black;
`;
const EtcSkillTitle = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    font-size: 1.5rem;
    font-weight: 800;
`;

const EtcSkillContent = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default function Skills({ skillsRef }) {
    return (
        <div ref={skillsRef}>
            <Section>
                <SectionTitle>Skills</SectionTitle>
                <SkillBox>
                    <FeSkillBox>
                        <FeSkillTitle>FrontEnd</FeSkillTitle>
                        <FeSkillContents>
                            <img src={htmlcssjs} alt="#" className="logo-tag" />
                            <img
                                src={reactImage}
                                className="logo-tag"
                                alt="#"
                            />
                            <img
                                src={nextjsImage}
                                className="logo-tag"
                                alt="#"
                            />
                        </FeSkillContents>
                    </FeSkillBox>
                    <EtcSkillBox>
                        <EtcSkill>
                            <EtcSkillTitle style={{ borderTop: "none " }}>
                                Version Control
                            </EtcSkillTitle>
                            <EtcSkillContent>
                                <img
                                    src={gitImage}
                                    className="logo-tag"
                                    alt="#"
                                />
                            </EtcSkillContent>
                        </EtcSkill>
                        <EtcSkill>
                            <EtcSkillTitle>Deployment</EtcSkillTitle>
                            <EtcSkillContent>
                                <img
                                    src={awsImage}
                                    className="logo-tag"
                                    alt="#"
                                />
                            </EtcSkillContent>
                        </EtcSkill>
                        <EtcSkill>
                            <EtcSkillTitle>BackEnd</EtcSkillTitle>
                            <EtcSkillContent>
                                <img
                                    src={nodeJsImage}
                                    className="logo-tag"
                                    alt="#"
                                />
                            </EtcSkillContent>
                        </EtcSkill>
                    </EtcSkillBox>
                </SkillBox>
            </Section>
        </div>
    );
}
