import styled from "@emotion/styled";
import { useState, useEffect } from "react";

const HeaderBox = styled.div`
    width: 100%;
    height: 10vh;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // border-bottom: 2px solid black;
`;
const MenuHome = styled.div`
    width: 15%;
    text-align: center;
    font-size: 2rem;
    font-weight: 800;
    margin-left: 7rem;
    cursor: pointer;
`;

const MenuBox = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 7rem;
`;
const Menu = styled.span`
    font-size: 1.5rem;
    cursor: pointer;
    font-weight: 800;
`;

export default function Header({ menuList }) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
        console.log(document.documentElement.scrollTop);
    };
    useEffect(() => {
        window.addEventListener("scroll", updateScroll);
    });

    // Header Menu 눌렀을 때 , 스크롤 이동 구현
    const handleScroll = (index) => {
        menuList[index].current.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    //

    return (
        <HeaderBox
            style={
                scrollPosition < 100
                    ? { backgroundColor: "#FFFFFF" }
                    : { backgroundColor: "#EFE7DB" }
            }
        >
            {/* onClick={handleScroll(3)} 으로 하면 click을 기다리지 않고 바로 실행시켜버리기 때문에 undefined로 출력 */}
            <MenuHome onClick={() => handleScroll(0)}>BitedRadish</MenuHome>

            <MenuBox>
                <Menu onClick={() => handleScroll(1)}>About me</Menu>

                <Menu onClick={() => handleScroll(2)}>Skills</Menu>

                <Menu onClick={() => handleScroll(3)}>Projects</Menu>
            </MenuBox>
        </HeaderBox>
    );
}
