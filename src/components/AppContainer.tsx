import { BrowserRouter as Router } from "react-router-dom";
import AuthLayout from "./_auth/AuthLayout/AuthLayout";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./_auth/form/LoginForm";
import RegistrationForm from "./_auth/form/RegistrationForm";
import HomeLayout from "./_root/HomeLayout";

const AppContainer = () => {
    return (
        <Router>
            <main>
                <Routes>
                    <Route element={<AuthLayout />}>
                        <Route path="/sing-in" element={<LoginForm />} />
                        <Route path="/sing-up" element={<RegistrationForm />} />
                    </Route>
                    <Route index element={<HomeLayout/>}/>
                </Routes>
            </main>
        </Router>
    );
}

export default AppContainer;