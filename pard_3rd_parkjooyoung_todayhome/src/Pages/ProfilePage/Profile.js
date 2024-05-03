import styled from 'styled-components'
import Logo from '../../Assets/Logo.png'
import Nav from '../Common/Nav'
import MenuMain from '../Common/MenuMain'
import MenuSub from '../Common/MenuSub'
import ProfileCard from './ProfileCard'
import Picture from './Picture'
import Homecoming from './Homecoming'
import ViewAll from './ViewAll'

const Profile = () => {


    return (
        // 전체 컨테이너
        <Container>
            <Div flexDirection="column" justifyContent="start">
                <Nav />
                <MenuMain selectedMenu="Profile" />
                <MenuSub selectedMenuMain="Profile" selectedMenuSub="All" />
                <ViewAll />
            </Div>
        </Container>
    )
}

export default Profile


/* 스타일 컴포넌트 선언 */

const Container = styled.div`
display: flex;
width: ${(props) => props.width || '100%'};
height: ${(props) => props.height || ''};

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
font-size: ${(props) => props.fontSize || "15px"};
font-weight: ${(props) => props.fontWeight || "bold"};
margin: ${(props) => props.margin || ""};
padding: ${(props) => props.padding || ""};
/* 크기를 margin, padding, border 등 포함해서로 설정 */
box-sizing: border-box;
`
