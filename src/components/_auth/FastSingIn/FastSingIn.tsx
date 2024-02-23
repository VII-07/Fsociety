import style from './styles/fastSingIn.module.scss'
import GoogleLogo from '../../../assets/google-logo-on-transparent-white-background-free-vector.jpeg';
import MicrosoftLogo from '../../../assets/pngimg.com - microsoft_PNG13.png';
import GitHubLogo from '../../../assets/GitHub-Mark-ea2971cee799.png';

const FastSingIn = () => {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center" >
                <div className={style.line}></div>
                <span className={style.line__text}>Or</span>
                <div className={style.line}></div>
            </div>
            <nav className={style.social__login__list}>
                <ul>
                    <li><a href="https://www.google.com"><img src={GoogleLogo} alt="Google" /></a></li>
                    <li><a href="https://www.microsoft.com"><img src={MicrosoftLogo} alt="Microsoft" /></a></li>
                    <li><a href="https://www.github.com"><img src={GitHubLogo} alt="GitHub" /></a></li>
                </ul>
            </nav>
        </>
    );
}

export default FastSingIn;