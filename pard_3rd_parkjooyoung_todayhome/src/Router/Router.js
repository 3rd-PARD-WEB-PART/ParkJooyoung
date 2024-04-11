import RegisterPage from '../Pages/RegisterPage/RegisterPage'
import ProfilePage from '../Pages/ProfilePage/Profile'
import EditPage from '../Pages/EditPage/Setting'
import { Routes, Route } from 'react-router-dom'

function Router() {
    return (
        <Routes>
            <Route path='/' element={<RegisterPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/edit' element={<EditPage />} />
        </Routes>
    );
}

export default Router;
