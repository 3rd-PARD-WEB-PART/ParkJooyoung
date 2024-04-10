import { useState } from 'react';
import styled from 'styled-components'

const MenuMain = (props) => {

    const [selectedMenu, setSelectedMenu] = useState(props.selectedMenu)
    console.log(selectedMenu)

    return (
        // 전체 컨테이너
        <Container>
            <Div flexDirection="column" borderBottom="1px solid #dbdbdb" >
                <Div width="380px" height="23px" justifyContent="space-between" >
                    <AutoWidthDiv ><A selected={selectedMenu === "Profile"}>프로필</A></AutoWidthDiv>
                    <AutoWidthDiv selected={selectedMenu === "MyShopping"}><A>나의 쇼핑</A></AutoWidthDiv>
                    <AutoWidthDiv selected={selectedMenu === "MyReview"}><A>나의 리뷰</A></AutoWidthDiv>
                    <AutoWidthDiv selected={selectedMenu === "Setting"}><A>설정</A></AutoWidthDiv>
                </Div>
            </Div>
        </Container>
    )
}

export default MenuMain


/* 스타일 컴포넌트 선언 */

const Container = styled.div`
display: flex;
width: 100%;
height: 65px;
justify-content: ${(props) => props.justifyContent || 'center'};
align-items: ${(props) => props.alignItems || 'center'};
margin: ${(props) => props.margin || ""};
padding: ${(props) => props.padding || ""};
/* border: ${(props) => props.border || '1px solid black'}; */
box-sizing: border-box;
`

const Div = styled.div`
width: ${(props) => props.width || '100%'};
height: ${(props) => props.height || '100%'};
display: ${(props) => props.display || 'flex'};
/* flex 방향 정하기 */
flex-direction: ${(props) => props.flexDirection || 'row'};
/* flex 수평 정렬 위치 정하기 */
justify-content: ${(props) => props.justifyContent || 'center'};
/* flex 수직 정렬 위치 정하기 */
align-items: ${(props) => props.alignItems || 'center'};
align-content: ${(props) => props.alignContent || ''};
background-color: ${(props) => props.backgroundColor || 'white'};
/* border: ${(props) => props.border || '1px solid black'}; */
border-bottom: ${(props) => props.borderBottom || ''};
font-size: ${(props) => props.fontSize || "15px"};
font-weight: ${(props) => props.fontWeight || "bold"};
margin: ${(props) => props.margin || ""};
padding: ${(props) => props.padding || ""};
/* 크기를 margin, padding, border 등 포함해서로 설정 */
box-sizing: border-box;
`

const AutoWidthDiv = styled.div`
  display: inline-block; 
  white-space: nowrap; 
  width: fit-content; 
`;


const A = styled.a`
font-size: ${(props) => props.fontSize || "18px"};
font-weight: ${(props) => props.fontWeight || "bold"};
color: ${(props) => props.selected ? "#35C5F0" : "black"};
text-decoration: none;
`

