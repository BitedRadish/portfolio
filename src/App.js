import Header from "./comp/Header.jsx";
import Home from "./comp/Home.jsx";
import AboutMe from "./comp/AboutMe.jsx";
import Projects from "./comp/Projects.jsx";
import Skills from "./comp/Skills.jsx";
import "./App.css";
import styled from "@emotion/styled";

import { useRef } from "react";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-text-size-adjust: none; /*Chrome, Safari, newer versions of Opera*/
    -moz-text-size-adjust: none; /*Firefox*/
    -ms-text-size-adjust: none; /*Ie*/
    -o-text-size-adjust: none; /*old versions of Opera*/
`;

function App() {
    const homeRef = useRef();
    const aboutMeRef = useRef();
    const skillsRef = useRef();
    const projectRef = useRef();

    const menu = [homeRef, aboutMeRef, skillsRef, projectRef];

    return (
        <Container>
            <Header menuList={menu}></Header>
            <Home homeRef={homeRef} aboutMeRef={aboutMeRef}></Home>
            <AboutMe aboutMeRef={aboutMeRef}></AboutMe>
            <Skills skillsRef={skillsRef}></Skills>
            <Projects projectRef={projectRef}></Projects>
        </Container>
    );
}

export default App;
