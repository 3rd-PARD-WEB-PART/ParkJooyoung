import styled from 'styled-components'
import Logo from '../../Assets/Logo.png'
import { Link, } from 'react-router-dom'
import { useState } from 'react'
import { useDataHandler } from '../Hooks/useDataHandler'

const RegisterPage = () => {

    const [curUserInfo, setCurUserInfo] = useState({})
    console.log(curUserInfo)

    const { registerHandler } = useDataHandler(curUserInfo)

    const userInputHandler = (e) => {
        setCurUserInfo({
            ...curUserInfo,
            [e.target.name]: e.target.value,
        })
    }


    return (
        // 전체 컨테이너
        <Container>
            <Div backgroundColor="#f5f5f5">
                <Div width="635px" height="728px" flexDirection="column">
                    <Div justifyContent="start" height="10%" >
                        <Div width="90%" justifyContent="start" margin=" 0 0 0 14px" >
                            <Img src={Logo} />
                        </Div>
                    </Div>
                    <Div height="90%">
                        <Div width="360px" flexDirection="column">
                            <Div height="10%">
                                <Div justifyContent="start" fontSize="20px">회원가입</Div>
                            </Div>
                            <Div height="15%" flexDirection="column" justifyContent="start">
                                <Div height="75%" flexDirection="column" >
                                    <Div alignItems="end" height="45%">
                                        <Div justifyContent="start" height="80%" margin="0 0 0.4vh 0">이메일</Div>
                                    </Div>
                                    <Div alignItems="end" height="55%">
                                        <Input height="40px" placeholder='이메일' padding="0 0 0 20px" name='email' onChange={(e) => setCurUserInfo({ ...curUserInfo, email: e.target.value })}></Input>
                                    </Div>
                                </Div>
                            </Div>
                            <Div height="20%" flexDirection="column" justifyContent="start">
                                <Div height="75%" flexDirection="column" >
                                    <Div flexDirection="column" justifyContent="space-between" height="60%">
                                        <Div justifyContent="start" height="40%">비밀번호</Div>
                                        <Div justifyContent="start" height="40%" margin="0 0 0.4vh 0">영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</Div>
                                    </Div>
                                    <Div alignItems="end" height="40%">
                                        <Input height="40px" placeholder='비밀번호' padding="0 0 0 20px" name='password' onChange={userInputHandler}></Input>
                                    </Div>
                                </Div>
                            </Div>
                            <Div height="15%" flexDirection="column" justifyContent="start">
                                <Div height="75%" flexDirection="column" >
                                    <Div alignItems="end" height="45%">
                                        <Div justifyContent="start" height="80%" margin="0 0 0.4vh 0">비밀번호 확인</Div>
                                    </Div>
                                    <Div alignItems="end" height="55%">
                                        <Input height="40px" placeholder='비밀번호 확인' padding="0 0 0 20px" name='passwordConfirm' onChange={userInputHandler}></Input>
                                    </Div>
                                </Div>
                            </Div>
                            <Div height="20%" flexDirection="column" justifyContent="start">
                                <Div height="75%" flexDirection="column" >
                                    <Div flexDirection="column" justifyContent="space-between" height="60%">
                                        <Div justifyContent="start" height="40%" >닉네임</Div>
                                        <Div justifyContent="start" height="40%" margin="0 0 0.4vh 0">다른 유저와 겹치지 않도록 입력해주세요. {'(2~15자)'}</Div>
                                    </Div>
                                    <Div alignItems="end" height="40%">
                                        <Input height="40px" placeholder='별명 (2~15자)' padding="0 0 0 20px" name='nickname' onChange={userInputHandler}></Input>
                                    </Div>
                                </Div>
                            </Div>
                            <Div height="10%" alignItems="start">
                                <Div height="50px" justifyContent="start">
                                    <Input type='button' value='회원가입하기' backgroundColor="#35C5F0" color="white" fontSize="17px" fontWeight="bold" onClick={() => registerHandler(curUserInfo)} ></Input>
                                </Div>
                            </Div>
                            <Div height="10%" >
                                <Div>
                                    <Div alignItems="start">이미 아이디가 있으신가요?<a href='https://we-pard.com/' style={{ color: "black", margin: "0 0 0 3px" }}>로그인</a></Div>
                                </Div>
                            </Div>
                        </Div>
                    </Div>
                </Div>
            </Div>
        </Container>
    )
}

export default RegisterPage


/* 스타일 컴포넌트 선언 */

const Container = styled.div`
display: flex;
height: 100vh;

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

const Img = styled.img`
height: 31px;
`

const LoginLink = styled(Link)`
width: ${(props) => props.width || '100%'};
height: ${(props) => props.height || '100%'};


`