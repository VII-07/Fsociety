import { useState } from "react";
import style from './styles/LofinForm.module.scss'

const LoginForm = () => {

    const [loginData, setLoginData] = useState({ email: '', password: '' });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({
            ...loginData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        // Тут логіка відправки даних на сервер
        // Наприклад, fetch або axios для відправки запиту
    };

    return (
        <>
            <h2 className={style.login__title}>Welcome back!</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    <input type="email" placeholder="Your email" id="email" name="email" required onChange={handleInputChange} />
                </label>
                <label htmlFor="password">
                    <input type="password" placeholder="Your password" id="password" name="password" required onChange={handleInputChange} />
                </label>
                <input type="submit" value="Login" />
                <a className={style.forgot__password} href="forgot-password">Forgot password?</a>
            </form>
        </>
    );
}

export default LoginForm;