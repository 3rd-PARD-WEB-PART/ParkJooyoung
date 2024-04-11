import styled from 'styled-components'
import Profile from '../../Assets/Profile_Face.png'
import { Link } from 'react-router-dom'

const EditProfile = () => {

    return (
        // 전체 컨테이너
        <Container>
            <Div padding="50px">
                <Div flexDirection="column">
                    <Div height="10%" justifyContent="space-between" alignItems="start">
                        <AutoWidthDiv fontSize="24px" fontWeight="bold">회원정보수정</AutoWidthDiv>
                        <AutoWidthDiv color='red' fontSize="14px">탈퇴하기</AutoWidthDiv>
                    </Div>
                    <Div height="10%">
                        <Div flexDirection="column" width="10%" alignItems="start">
                            <AutoWidthDiv color='#292929'>이메일</AutoWidthDiv>
                            <AutoWidthDiv fontSize="13px" color='#757575'>*필수항목</AutoWidthDiv>
                        </Div>
                        <Div flexDirection="column" width="90%" alignItems="start">
                            <Div justifyContent="start" height="40px">
                                <Input width="190px" placeholder='webpart'></Input>
                                <AutoWidthDiv color='#DBDBDB'> @ </AutoWidthDiv>
                                <Input width="190px" placeholder='pard.com'></Input>
                            </Div>
                            <Div justifyContent="start" height="17px" margin="10px 0 0 0">
                                <AutoWidthDiv fontSize="13px" fontWeight="bold" color='#9e9e9e'>이메일을 변경하시려면 운영자에게 이메일을 보내주세요.</AutoWidthDiv>
                            </Div>
                        </Div>
                    </Div>
                    <Div height="10%" >
                        <Div flexDirection="column" width="10%" alignItems="start">
                            <AutoWidthDiv color='#292929'>별명</AutoWidthDiv>
                            <AutoWidthDiv fontSize="13px" color='#757575'>*필수항목</AutoWidthDiv>
                        </Div>
                        <Div flexDirection="column" width="90%" alignItems="start">
                            <Div justifyContent="start" height="40px">
                                <Input width="400px" placeholder='박우찰' ></Input>
                            </Div>
                        </Div>
                    </Div>
                    <Div height="10%" >
                        <Div flexDirection="column" width="10%" alignItems="start">
                            <AutoWidthDiv color='#292929'>홈페이지</AutoWidthDiv>
                        </Div>
                        <Div flexDirection="column" width="90%" alignItems="start">
                            <Div justifyContent="start" height="40px">
                                <Input width="400px" placeholder='we-pard.com' ></Input>
                            </Div>
                        </Div>
                    </Div>
                    <Div height="10%" >
                        <Div flexDirection="column" width="10%" alignItems="start">
                            <AutoWidthDiv color='#292929'>성별</AutoWidthDiv>
                        </Div>
                        <Div flexDirection="column" width="90%" alignItems="start">
                            <Div justifyContent="start" height="40px">
                                <Label width="60px">
                                    <Radio type='radio' name='gender' width="22px" height="22px" ></Radio>
                                    <AutoWidthDiv>남성</AutoWidthDiv>
                                </Label>
                                <Label width="60px">
                                    <Radio type='radio' name='gender' checked="checked" width="22px" height="22px" ></Radio>
                                    <AutoWidthDiv >여성</AutoWidthDiv>
                                </Label>
                            </Div>
                        </Div>
                    </Div>
                    <Div height="10%" >
                        <Div flexDirection="column" width="10%" alignItems="start">
                            <AutoWidthDiv color='#292929'>생년월일</AutoWidthDiv>
                        </Div>
                        <Div flexDirection="column" width="90%" alignItems="start">
                            <Div justifyContent="start" height="40px">
                                <Input width="400px" placeholder='1998.04.07' ></Input>
                            </Div>
                        </Div>
                    </Div>
                    <Div height="25%" >
                        <Div flexDirection="column" width="10%" alignItems="start" justifyContent="start" padding="10px 0 0 0">
                            <AutoWidthDiv color='#292929'>프로필 이미지</AutoWidthDiv>
                        </Div>
                        <Div flexDirection="column" width="90%" alignItems="start">
                            <Div justifyContent="start">
                                <Img src={Profile} />
                            </Div>
                        </Div>
                    </Div>
                    <Div height="10%">
                        <Div flexDirection="column" width="10%" alignItems="start">
                            <AutoWidthDiv color='#292929'>한줄 소개</AutoWidthDiv>
                        </Div>
                        <Div flexDirection="column" width="90%" alignItems="start">
                            <Div justifyContent="start" height="40px">
                                <Input width="400px" placeholder='치킨 피자 햄버거'></Input>
                            </Div>
                        </Div>
                    </Div>
                    <Div justifyContent="end" height="5%">
                        <Button type='button' width="100px" height="43px" backgroundColor="#35C5F0" >
                            <Link to="/profile" style={{ textDecoration: "none", color: 'white' }}>
                                수정하기
                            </Link>
                        </Button>
                    </Div>

                </Div>

            </Div>
        </Container>
    )
}

export default EditProfile


/* 스타일 컴포넌트 선언 */

const Container = styled.div`
display: flex;
height: 900px;
width: 1136px;
margin: 60px 0 0 0;
border: ${(props) => props.border || '1px solid black'};
box-sizing: border-box;
`

const Div = styled.div`
width: ${(props) => props.width || '100%'};
height: ${(props) => props.height || '100%'};
display: ${(props) => props.display || 'flex'};
flex-direction: ${(props) => props.flexDirection || 'row'};
justify-content: ${(props) => props.justifyContent || 'center'};
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

const AutoWidthDiv = styled.div`
display: inline-block; 
white-space: nowrap; 
width: fit-content; 
margin: ${(props) => props.margin || ""};
color: ${(props) => props.color || ""};
font-size: ${(props) => props.fontSize || "15px"};
font-weight: ${(props) => props.fontWeight || "normal"};
`;

const Input = styled.input`
width: ${(props) => props.width || '100%'};
height: ${(props) => props.height || '100%'};
background-color: ${(props) => props.backgroundColor || 'white'};
color: ${(props) => props.color || "black"};
font-size: ${(props) => props.fontSize || "15px"};
font-weight: ${(props) => props.fontWeight || ""};
box-sizing: border-box;
border: 1px solid #dbdbdb;
margin: ${(props) => props.margin || ""};
padding: ${(props) => props.padding || "0 0 0 10px"};
border-radius: 5px;
/* input 태그 placeholder 스타일 정하기 */
    &::placeholder{
        /* color: #dbdbdb; */
        color: ${(props) => props.color || "black"};
    }
`


const Radio = styled.input.attrs(props => ({
    type: 'radio',
}))`
width: ${(props) => props.width || '100%'};
height: ${(props) => props.height || '100%'};
background-color: ${(props) => props.backgroundColor || 'white'};
appearance: none;
border: 1px solid #dbdbdb;
border-radius: 50%;
&:checked{
        border: 6px solid #35C5F0;
        background-color: white;
    }
`
const Label = styled.label`
width: ${(props) => props.width || '100%'};
height: ${(props) => props.height || '100%'};
display: ${(props) => props.display || 'flex'};
justify-content: ${(props) => props.justifyContent || 'space-between'};
align-items: ${(props) => props.alignItems || 'center'};

`

const Img = styled.img`
width: ${(props) => props.width || '180px'};
margin: ${(props) => props.margin || ""};
background-color: ${(props) => props.backgroundColor || '#e6e6e6'};
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