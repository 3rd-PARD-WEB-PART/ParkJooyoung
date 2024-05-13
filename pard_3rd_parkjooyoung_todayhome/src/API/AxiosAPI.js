import axios from 'axios'

export const getUserData = async (id) => {
    console.log("getUserData")

    try {
        const response = await axios.get(`http://localhost:3001/users/${id}`);
        console.log(response.data)
        return response.data
    } catch (error) {
        console.error('Error fetching data: ', error);
        alert("유저 정보 로딩에 실패하였습니다.");
    }


};



export const patchUserData = async (data, id) => {
    try {
        const response = await axios.patch(`http://localhost:3001/users/${id}`, data);
        return response;
    } catch (err) {
        console.error(err);
    }
};
