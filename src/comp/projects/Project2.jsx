import { Section, SectionTitle } from "../styles";
import WelfareImage from "../../images/welfare.jpg";
import styled from "@emotion/styled";

const ProjectBox = styled.div`
    width: 70%;
    height: 55vh;
    margin-top: 5vh;

    // border: 1px solid black;
    border-radius: 1rem;
    display: flex;
    background-color: white;
`;

const ProjectImage = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ProjectDescription = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-left: 2px solid #efe7db;
`;

const ProjectContent = styled.div`
    width: 100%;
    height: 70%;
    font-size: 1.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProjectTech = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    flex-direction: column;

    justify-content: center;
    border-top: 2px solid #efe7db;
    font-size: 1.3rem;
`;
export default function Project2() {
    return (
        <>
            <ProjectBox>
                <ProjectImage>
                    <img src={WelfareImage} alt="#" className="img-tag" />
                </ProjectImage>
                <ProjectDescription>
                    <ProjectContent>
                        <span>행정구 별 데이터를 이용하여</span>
                        <span>사회 취약 계층에게 맞춤 복지 서비스 제공</span>
                    </ProjectContent>
                    <ProjectTech>
                        <span>Python , React</span>
                    </ProjectTech>
                </ProjectDescription>
            </ProjectBox>
        </>
    );
}
