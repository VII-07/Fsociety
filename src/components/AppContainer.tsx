import { BrowserRouter as Router } from "react-router-dom";
import AuthLayout from "./_auth/AuthLayout/AuthLayout";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./_form/LoginForm";
import RegistrationForm from "./_form/RegistrationForm";

const AppContainer = () => {
    return (
        <Router>
            <main>
                <Routes>
                    <Route element={<AuthLayout />}>
                        <Route path="/sing-in" element={<LoginForm />} />
                        <Route path="/sing-up" element={<RegistrationForm />} />
                    </Route>
                </Routes>
            </main>
        </Router>
    );
}

export default AppContainer;