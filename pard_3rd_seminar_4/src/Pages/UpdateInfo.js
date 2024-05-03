import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import { userInfoRecoil, myInfoSelector } from '../Atom';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"

const UpdateInfo = () => {

    // const [userInfo, setUserInfo] = useRecoilState(userInfoRecoil);
    // const [userCurrentInfo, setUserCurrentInfo] = useState(userInfo);
    // const [userConfirm, setUserConfirm] = useState(false);

    // const navigator = useNavigate();

    // console.log(userCurrentInfo);

    // const buttonHandler = (e) => {

    //     if (window.confirm("수정하시겠습니까?")) {
    //         setUserInfo(userCurrentInfo);
    //     }
    //     else {
    //         alert("취소되었습니다.")
    //     }

    //     navigator("/");
    // }

    // // useEffect(() => {
    // //     setUserInfo(userCurrentInfo);
    // // }, [userConfirm])



    // return (
    //     <Div flexDirection="column">
    //         <Div width="200px" height="30px">
    //             <Div width="50px">나이 : </Div>
    //             <Div>
    //                 <Input type='text' value={userCurrentInfo.age} onChange={(e) => setUserCurrentInfo((userCurrentInfo) => ({ ...userCurrentInfo, age: e.target.value }))}></Input>
    //             </Div>
    //         </Div>
    //         <Div width="200px" height="30px">
    //             <Div width="50px">이름 : </Div>
    //             <Div>
    //                 <Input type='text' value={userCurrentInfo.name} onChange={(e) => setUserCurrentInfo((userCurrentInfo) => ({ ...userCurrentInfo, name: e.target.value }))}></Input>
    //             </Div>
    //         </Div>
    //         <Div>
    //             <Div width="100px"><Button type='button' onClick={buttonHandler}>수정하기</Button></Div>
    //         </Div>
    //     </Div>

    // )

    const [userInfo, setUserInfo] = useRecoilState(myInfoSelector);

    const navigator = useNavigate();

    console.log(userInfo);

    const buttonHandler = (e) => {

        if (window.confirm("수정하시겠습니까?")) {
            // setUserInfo(userCurrentInfo);
            alert("수장되었습니다.")
        }
        else {
            alert("취소되었습니다.")
        }

        navigator("/");
    }

    // useEffect(() => {
    //     setUserInfo(userCurrentInfo);
    // }, [userConfirm])



    return (
        <Div flexDirection="column">
            <Div width="200px" height="30px">
                <Div width="50px">나이 : </Div>
                <Div>
                    <Input type='text' value={userInfo.age} onChange={(e) => setUserInfo((userInfo) => ({ ...userInfo, userInfo: e.target.value }))}></Input>
                </Div>
            </Div>
            <Div width="200px" height="30px">
                <Div width="50px">이름 : </Div>
                <Div>
                    <Input type='text' value={userInfo.name} onChange={(e) => setUserInfo((userInfo) => ({ ...userInfo, name: e.target.value }))}></Input>
                </Div>
            </Div>
            <Div>
                <Div width="100px"><Button type='button' onClick={buttonHandler}>수정하기</Button></Div>
            </Div>
        </Div>

    )

}

export default UpdateInfo


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