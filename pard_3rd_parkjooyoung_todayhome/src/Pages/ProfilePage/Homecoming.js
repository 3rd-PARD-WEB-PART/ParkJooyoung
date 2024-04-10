import styled from 'styled-components'

const Homecoming = () => {

    return (
        // 전체 컨테이너
        <Container>
            <Div flexDirection="column" justifyContent="space-between">
                <Div height="22px" justifyContent="start">
                    <AutoWidthDiv margin="0 4px 0 0">집들이</AutoWidthDiv>
                    <AutoWidthDiv color='#35C5F0'>0</AutoWidthDiv>
                </Div>
                <Div height="187px" border="1px dashed #757575">
                    <AutoWidthDiv fontSize="13px" color='#757575'>+ 첫 번째 집들이를 올려보세요.</AutoWidthDiv>
                </Div>
            </Div>
        </Container>
    )
}

export default Homecoming


/* 스타일 컴포넌트 선언 */

const Container = styled.div`
display: flex;
width: 750px;
height: 230px;
/* border: 1px solid #BCBDBF; */
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
border: ${(props) => props.border || 'px solid black'};
font-size: ${(props) => props.fontSize || "13px"};
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
margin: ${(props) => props.margin || ""};
color: ${(props) => props.color || ""};
font-size: ${(props) => props.fontSize || "18px"};
font-weight: ${(props) => props.fontWeight || "bold"};
`;



