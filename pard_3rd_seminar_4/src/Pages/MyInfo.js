import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import { userInfoRecoil } from '../Atom';
import { Link } from 'react-router-dom'

const MyInfo = () => {

    const [userInfo, setUserInfo] = useRecoilState(userInfoRecoil);



    return (
        <Div flexDirection="column">
            <Div>
                <Div>나이 : </Div>
                <Div>{userInfo.name}</Div>
            </Div>
            <Div>
                <Div>이름 : </Div>
                <Div>{userInfo.age}</Div>
            </Div>
            <Div>
                <Div><Link to="/update">수정하기</Link></Div>
            </Div>
        </Div>

    )

}

export default MyInfo


const Div = styled.div`
width: ${(props) => props.width || '100%'};
height: ${(props) => props.height || '100%'};
display: ${(props) => props.display || 'flex'};
/* flex 방향 정하기 */
flex-direction: ${(props) => props.flexDirection || 'row'};
/* flex 수평 정렬 위치 정하기 */
justify-content: ${(props) => props.justifyContent || 'start'};
/* flex 수직 정렬 위치 정하기 */
align-items: ${(props) => props.alignItems || 'start'};
align-content: ${(props) => props.alignContent || ''};
background-color: ${(props) => props.backgroundColor || 'white'};
/* border: ${(props) => props.border || '1px solid black'}; */
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
padding: ${(props) => props.padding || ""};
border-radius: 5px;
/* input 태그 placeholder 스타일 정하기 */
    &::placeholder{
        color: #dbdbdb;
    }
`