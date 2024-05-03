import { atom, selector } from 'recoil'

export const userInfoRecoil = atom({
    key: "userInfo",
    default: {
        name: "박주영",
        age: 27
    }

});

export const myInfoSelector = selector({
    key: "myInfoSelector",
    get: ({ get }) => {
        const userInfo = get(userInfoRecoil);
        return (userInfo);
    },
    set: ({ set }, newValue) => {
        set(userInfoRecoil, newValue.userInfo);
    }

})