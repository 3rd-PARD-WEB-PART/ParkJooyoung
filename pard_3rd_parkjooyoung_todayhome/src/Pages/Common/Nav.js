import styled from 'styled-components'
import Title from '../../Assets/Title.png'
import Search from '../../Assets/Search.png'
import Scrap from '../../Assets/Scrap.png'
import Alarm from '../../Assets/Alarm.png'
import Cart from '../../Assets/Cart.png'
import Face from '../../Assets/Profile_Face.png'
import Arrow from '../../Assets/Arrow_Down.png'

const Nav = () => {

    return (
        // 전체 컨테이너
        <Container>
            <Div flexDirection="column" borderBottom="1px solid #dbdbdb">
                <Div width="1136px" height="43px" >
                    <Div justifyContent="start" width="10%"><Img src={Title} width="85px" /></Div>
                    <Div width="23%">
                        <Div width="30%"><A href=''>커뮤니티</A></Div>
                        <Div width="30%"><A href=''>쇼핑</A></Div>
                        <Div width="40%"><A href=''>인테리어/생활</A></Div>
                    </Div>
                    <Div justifyContent="end" width="40%">
                        <Input width="365px" height="43px" margin="0 25px 0 0" image={Search} padding="0 0 0 55px" placeholder='통합검색' backgroundPosition="18px center" backgroundSize="20px" />
                    </Div>
                    <Div width="11%">
                        <Div><Img src={Scrap} width="18px" /></Div>
                        <Div><Img src={Alarm} width="20px" /></Div>
                        <Div><Img src={Cart} width="23px" /></Div>
                    </Div>
                    <Div width="6%">
                        <Img src={Face} width="43px" />
                    </Div>
                    <Div width="10%">
                        <Button type='button' width="100px" height="43px" backgroundColor="#35C5F0" color='white'>
                            글쓰기
                            <Img src={Arrow} width="12px" margin="0 0 0 8px" />
                        </Button>
                    </Div>
                </Div>
            </Div>
        </Container>
    )
}

export default Nav


/* 스타일 컴포넌트 선언 */

const Container = styled.div`
display: flex;
width: 100%;
height: 85px;
justify-content: ${(props) => props.justifyContent || 'center'};
align-items: ${(props) => props.alignItems || 'center'};
margin: ${(props) => props.margin || ""};
padding: ${(props) => props.padding || ""};
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

const Input = styled.input`
width: ${(props) => props.width || '100%'};
height: ${(props) => props.height || '100%'};
background-color: ${(props) => props.backgroundColor || 'white'};
color: ${(props) => props.color || "black"};
font-size: ${(props) => props.fontSize || "15px"};
font-weight: ${(props) => props.fontWeight || ""};
box-sizing: border-box;
border: 0.5px solid #dbdbdb;
margin: ${(props) => props.margin || ""};
padding: ${(props) => props.padding || ""};
border-radius: 5px;
background-image: url(${props => props.image || ""});
background: url(${props => props.image || ""}) 10px 10px no-repeat;
background-position: ${(props) => props.backgroundPosition || ""};
background-size: ${(props) => props.backgroundSize || ""};
/* input 태그 placeholder 스타일 정하기 */
    &::placeholder{
        color: #dbdbdb;
    }
`


const Img = styled.img`
width: ${(props) => props.width || '100%'};
margin: ${(props) => props.margin || ""};
`

const A = styled.a`
font-size: ${(props) => props.fontSize || "18px"};
font-weight: ${(props) => props.fontWeight || "bold"};
color: black;
text-decoration: none;
`

const Button = styled.button`
display: flex;
justify-content: ${(props) => props.justifyContent || 'center'};
align-items: ${(props) => props.alignItems || 'center'};
width: ${(props) => props.width || '100%'};
height: ${(props) => props.height || '100%'};
background-color: ${(props) => props.backgroundColor || 'white'};
color: ${(props) => props.color || "black"};
font-size: ${(props) => props.fontSize || "15px"};
font-weight: ${(props) => props.fontWeight || ""};
box-sizing: border-box;
border: 0.5px solid #dbdbdb;
margin: ${(props) => props.margin || ""};
padding: ${(props) => props.padding || ""};
border-radius: 5px;

`