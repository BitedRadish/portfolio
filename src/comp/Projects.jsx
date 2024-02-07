import styled from "@emotion/styled";
import { Section, SectionTitle } from "./styles";
import { useState } from "react";
import "../button.css";
import Project1 from "./projects/Project1";
import Project2 from "./projects/Project2";
import Project3 from "./projects/Project3";
const ProjectSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    white-space: pre-line;
`;

const ProjectButtons = styled.div`
    display: flex;
    justify-content: space-around;
    // border: 1px solid black;
    margin-top: 3vh;
    width: 50%;
    height: 5vh;
`;
const ProjectButton = styled.button`
    width: 15%;
    height: 5vh;
    border-radius: 2rem;
    font-size: 0.8rem;
    font-weight: 900;
    cursor: pointer;
    color: black;
`;
const ProjectContent = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    white-space: pre-line;
`;

const MAIN_DATA = [
    { id: 1, name: "first" },
    { id: 2, name: "second" },
    { id: 3, name: "third" },
];

export default function Projects({ projectRef }) {
    const [content, setContent] = useState("first");
    const handleProjectPage = (e) => {
        setContent(e.target.name);
    };
    // const [first, second, third] = ["쇼핑몰", "사회 복지", "주가 예측"];
    const selectComponent = {
        first: <Project1 />,
        second: <Project2 />,
        third: <Project3 />,
    };
    return (
        <div ref={projectRef}>
            <ProjectSection className="beige-background">
                <Section>
                    <SectionTitle>Project</SectionTitle>
                    <ProjectButtons>
                        {MAIN_DATA.map((data) => {
                            return (
                                <ProjectButton
                                    className="btn-3d yellow"
                                    name={data.name}
                                    key={data.id}
                                    onClick={handleProjectPage}
                                >{`Project ${data.id}`}</ProjectButton>
                            );
                        })}
                    </ProjectButtons>
                    <ProjectContent>{selectComponent[content]}</ProjectContent>
                </Section>
            </ProjectSection>
        </div>
    );
}
