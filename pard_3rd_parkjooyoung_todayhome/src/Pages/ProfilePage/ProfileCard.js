import styled from 'styled-components'
import Face from '../../Assets/Profile_Face.png'
import Scrap from '../../Assets/Scrap.png'
import Heart from '../../Assets/Heart.png'
import HeartRed from '../../Assets/HeartRed.png'
import Coupon from '../../Assets/Coupon.png'
import { useState } from 'react'

const ProfileCard = () => {

    const [liked, setLiked] = useState(false)
    const likeHandler = () => {
        setLiked(!liked)
    }

    return (
        // 전체 컨테이너
        <Container>
            <Div flexDirection="column">
                <Div height="38%"><Img src={Face} width="130px" /></Div>
                <Div height="10%" fontSize="26px">박주영</Div>
                <Div height="6%">
                    <Div width="120px" justifyContent="space-between">
                        <Div width="50px" justifyContent="space-between">
                            <AutoWidthDiv>팔로워</AutoWidthDiv>
                            <AutoWidthDiv>0</AutoWidthDiv>
                        </Div>
                        <Div width="50px" justifyContent="space-between">
                            <AutoWidthDiv>팔로잉</AutoWidthDiv>
                            <AutoWidthDiv>0</AutoWidthDiv>
                        </Div>
                    </Div>

                </Div>
                <Div height="16%">
                    <Button type='button' width="60px" height="35px">
                        설정
                    </Button>
                </Div>
                <Div height="30%" >
                    <Div width="231px" borderTop="1px solid #EAEBEF">
                        <Div flexDirection="column" height="77px">
                            <Div height="40%"><Img src={Scrap} width="23px" /></Div>
                            <Div height="35%" alignItems="end">스크랩북</Div>
                            <Div height="25%">0</Div>
                        </Div>
                        <Div flexDirection="column" height="77px">
                            <Div Div height="40%"><Img src={liked === true ? HeartRed : Heart} width="30px" onClick={likeHandler} /></Div>
                            <Div height="35%" alignItems="end">좋아요</Div>
                            <Div height="25%">{liked === true ? "1" : "0"}</Div>
                        </Div>
                        <Div flexDirection="column" height="77px">
                            <Div height="40%"><Img src={Coupon} width="28px" /></Div>
                            <Div height="35%" alignItems="end">내 쿠폰</Div>
                            <Div height="25%">0</Div>
                        </Div>
                    </Div>

                </Div>
            </Div>
        </Container>
    )
}

export default ProfileCard


/* 스타일 컴포넌트 선언 */

const Container = styled.div`
display: flex;
width: 285px;
height: 460px;
border: 1px solid #BCBDBF;
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
border: ${(props) => props.border || '0px solid black'};
border-top: ${(props) => props.borderTop || '0px solid black'};
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
`;

const Img = styled.img`
width: ${(props) => props.width || '100%'};
margin: ${(props) => props.margin || ""};
`

const Button = styled.button`
display: flex;
justify-content: ${(props) => props.justifyContent || 'center'};
align-items: ${(props) => props.alignItems || 'center'};
width: ${(props) => props.width || '100%'};
height: ${(props) => props.height || '100%'};
background-color: ${(props) => props.backgroundColor || 'white'};
color: ${(props) => props.color || "black"};
font-size: ${(props) => props.fontSize || "13px"};
font-weight: ${(props) => props.fontWeight || ""};
box-sizing: border-box;
border: 1px solid #dbdbdb;
margin: ${(props) => props.margin || ""};
padding: ${(props) => props.padding || ""};
border-radius: 5px;

`