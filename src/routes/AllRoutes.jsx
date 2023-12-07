import { Route, Routes } from "react-router-dom";
import Library from "../features/library/Library";
import Main from "../layout/Main";
const AllRoutes = () => {
    return (
       <Routes>
        <Route path="/" element={<Main />}>
            <Route path='library' element={<Library />} />
        </Route>

       </Routes>
    );
};

export default AllRoutes;