import logo from '../../assets/FSLogo2.png';
import GoogleLogo from '../../assets/google-logo-on-transparent-white-background-free-vector.jpeg';
import MicrosoftLogo from '../../assets/pngimg.com - microsoft_PNG13.png';
import GitHubLogo from '../../assets/GitHub-Mark-ea2971cee799.png';
import { Row, Col } from 'react-bootstrap';
import styles from './styles.module.scss';

const LoginPage = () => {
    return (
        <main className={styles.wrapper}>
            {/* background blur circle */}
            <span className={styles.blur__circle__1}></span>
            <span className={styles.blur__circle__2}></span>
            <span className={styles.blur__circle__3}></span>
            <span className={styles.blur__circle__4}></span>
            <span className={styles.blur__circle__5}></span>

            <Row className='d-flex justify-content-center z-1'>
                <Col lg='6'>

                    <section className={styles.login__container}>
                        <div className={styles.logo__container}>
                            <img src={logo} alt="logo" />
                        </div>

                        <h2 className={styles.login__title}>Welcome back!</h2>

                        <form action="/submit__login" method="post">
                            <label htmlFor="email">
                                <input type="email" placeholder="Your email" id="email" name="email" required />
                            </label>
                            <label htmlFor="password">
                                <input type="password" placeholder="Your password" id="password" name="password" required />
                            </label>
                            <input type="submit" value="Login" />
                        </form>

                        <a className={styles.forgot__password} href="forgot-password">Forgot password?</a>

                        <div className= "d-flex justify-content-between align-items-center" >
                            <div className={styles.line}></div>
                            <span className={styles.line__text}>Or</span>
                            <div className={styles.line}></div>
                        </div>

                        <nav className={styles.social__login__list}>
                            <ul>
                                <li><a href="https://www.google.com"><img src={GoogleLogo} alt="Google" /></a></li>
                                <li><a href="https://www.microsoft.com"><img src={MicrosoftLogo} alt="Microsoft" /></a></li>
                                <li><a href="https://www.github.com"><img src={GitHubLogo} alt="GitHub" /></a></li>
                            </ul>
                        </nav>
                    </section>

                </Col>
            </Row>

        </main>
    );
};

export default LoginPage;
