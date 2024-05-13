
import { useRecoilState } from 'recoil'
import { userInfoRecoil } from '../Atom/Atom'
import { useNavigate } from 'react-router-dom'
import { getUserData, patchUserData } from '../../API/AxiosAPI'


export const useDataHandler = (curUserInfo) => {

    const [userInfo, setUserInfo] = useRecoilState(userInfoRecoil)

    const navigator = useNavigate();

    console.log(curUserInfo)

    const registerHandler = () => {

        if (!curUserInfo) {
            console.log("userInfo not provided")
            return;
        }

        if (curUserInfo.password === curUserInfo.passwordConfirm) {
            delete curUserInfo.passwordConfirm
            setUserInfo({
                ...userInfo,
                email: curUserInfo.email,
                password: curUserInfo.password,
                nickname: curUserInfo.nickname,
            })
            navigator("/profile")
        }
        else {
            alert("비밀번호 확인 결과가 동일하지 않습니다.")
        }
    }

    const updateHandler = async () => {

        if (!curUserInfo) {
            console.log("userInfo not provided")
            return;
        }
        // setUserInfo(curUserInfo)
        try {
            const userData = await patchUserData(curUserInfo, 1);
            navigator("/profile")
        }
        catch (error) {
            console.log(error)
        }


    }




    return { registerHandler, updateHandler }
}

