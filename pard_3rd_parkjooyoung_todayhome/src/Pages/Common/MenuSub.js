import { useState } from 'react';
import styled from 'styled-components'
import { useCheckDeviceWidth } from '../Hooks/useCheckDeviceWidth';

const MenuSub = (props) => {

    const [selectedMenuMain, setSelectedMenuMain] = useState(props.selectedMenuMain)
    const [selectedMenuSub, setSelectedMenuSub] = useState(props.selectedMenuSub)
    const device = useCheckDeviceWidth()

    return (
        // 전체 컨테이너
        <Container device={device} >
            {
                {
                    Profile: (
                        <Div flexDirection="column" borderBottom="1px solid #dbdbdb" >
                            <Div width="550px" height="23px" justifyContent="space-between" >
                                <AutoWidthDiv ><A selected={selectedMenuSub === "All"} device={device}>모두보기</A></AutoWidthDiv>
                                <AutoWidthDiv ><A selected={selectedMenuSub === "Image"} device={device}>사진</A></AutoWidthDiv>
                                <AutoWidthDiv ><A selected={selectedMenuSub === "Homecoming"} device={device}>집들이</A></AutoWidthDiv>
                                <AutoWidthDiv ><A selected={selectedMenuSub === "KnowHow"} device={device}>노하우</A></AutoWidthDiv>
                                <AutoWidthDiv ><A selected={selectedMenuSub === "Q&A"} device={device}>질문과답변</A></AutoWidthDiv>
                                <AutoWidthDiv ><A selected={selectedMenuSub === "Scrap"} device={device}>스크랩북</A></AutoWidthDiv>
                                <AutoWidthDiv ><A selected={selectedMenuSub === "Like"} device={device}>좋아요</A></AutoWidthDiv>
                            </Div>
                        </Div>
                    ),

                    MyShopping: (
                        <Div flexDirection="column" borderBottom="1px solid #dbdbdb" >
                            <Div width="380px" height="23px" justifyContent="space-between" >
                            </Div>
                        </Div>
                    ),

                    MyReview: (
                        <Div flexDirection="column" borderBottom="1px solid #dbdbdb" >
                            <Div width="380px" height="23px" justifyContent="space-between" >
                            </Div>
                        </Div>
                    ),

                    Setting: (
                        <Div flexDirection="column" borderBottom="1px solid #dbdbdb" >
                            <Div width="602px" height="23px" justifyContent="space-between" >
                                <AutoWidthDiv ><A selected={selectedMenuSub === "Edit"} device={device}>회원정보수정</A></AutoWidthDiv>
                                <AutoWidthDiv ><A selected={selectedMenuSub === "Alarm"} device={device}>알림 설정</A></AutoWidthDiv>
                                <AutoWidthDiv ><A selected={selectedMenuSub === "Hide"} device={device}>사용자 숨기기 설정</A></AutoWidthDiv>
                                <AutoWidthDiv ><A selected={selectedMenuSub === "Apply"} device={device}>전문가 신청</A></AutoWidthDiv>
                                <AutoWidthDiv ><A selected={selectedMenuSub === "PW"} device={device}>비밀번호 변경</A></AutoWidthDiv>
                                <AutoWidthDiv ><A selected={selectedMenuSub === "Code"} device={device}>추천 코드</A></AutoWidthDiv>
                            </Div>
                        </Div>
                    )
                }[selectedMenuMain]
            }
        </Container>
    )
}

export default MenuSub


/* 스타일 컴포넌트 선언 */

const Container = styled.div`
display: flex;
width: 100%;
height: ${(props) => props.device == "mobile" ? "55px" : "65px"};
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
font-size: ${(props) => props.device == "mobile" ? "13px" : "15px"};
font-weight: ${(props) => props.fontWeight || "bold"};
color: ${(props) => props.selected ? "#35C5F0" : "black"};
text-decoration: none;
`

