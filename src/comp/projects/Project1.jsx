import { Section, SectionTitle } from "../styles";
import styled from "@emotion/styled";
import ShoppingMallImage from "../../images/shoppingmall.png";

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
export default function Project1() {
    return (
        <>
            {/* <SectionTitle>Project : 쇼핑몰 만들기</SectionTitle> */}
            <ProjectBox>
                <ProjectImage>
                    <img src={ShoppingMallImage} alt="#" className="img-tag" />
                </ProjectImage>
                <ProjectDescription>
                    <ProjectContent>
                        <span>React와 SpringBoot를 이용한 쇼핑몰 프로젝트</span>
                    </ProjectContent>
                    <ProjectTech>
                        <span>React , Vue</span>
                    </ProjectTech>
                </ProjectDescription>
            </ProjectBox>
        </>
    );
}
