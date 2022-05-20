import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";

import  Dashboard from '../pages/dashboard';
import Erro from '../pages/erro';
import Todo from '../pages/todo';

const routes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard/>} ></Route>
                <Route path="/users/:id" element={<Todo/>} ></Route>

                <Route path="*" element={<Erro/>}/>
            </Routes>
        </Router>
    )
}

export default routes;

// className='p-7 text-2xl font-semibold flex-1 h-screen'