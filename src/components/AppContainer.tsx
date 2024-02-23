import { BrowserRouter as Router} from "react-router-dom";
import AuthLayout from "./_auth/AuthLayout/AuthLayout";
import { Routes, Route } from "react-router-dom";

const AppContainer = () => {
    return (
        <Router>
            <main>
                <Routes>
                    <Route path="/" index element={<AuthLayout />} />
                </Routes>
            </main>
        </Router>
    );
}

export default AppContainer;