import { atom } from 'recoil'

export const userInfoRecoil = atom({
    key: "userInfo",
    default: {
        email: "",
        password: "",
        nickname: "",
        homepage: "",
        gender: 0,
        date: "",
        profileImage: "",
        introduce: ""
    }
})