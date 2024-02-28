import logo from '../../../../assets/FS2D2.png'
import style from './style.module.scss';
import { Nav } from 'react-bootstrap';
import { Group, Home, Message, MusicNote, People, Person } from '@mui/icons-material';



const Sidebar = () => {
    return (
        <aside>
            <div className={style.sidebar}>
                <div className={style.logo__container}>
                    <img src={logo} alt="logo" />
                    <figcaption>Fsociety</figcaption>
                </div>
                <Nav defaultActiveKey="/home" className={style.nav__bar}>
                    <Nav.Link href="/home">
                        <Home/>
                        Home
                    </Nav.Link>
                    <Nav.Link eventKey="link-1">
                        <People/>
                        Society
                    </Nav.Link>
                    <Nav.Link eventKey="link-2">
                        <Person/>
                        My Profile
                    </Nav.Link>
                    <Nav.Link eventKey="link-3">
                        <Message/>
                        Message
                        </Nav.Link>
                    <Nav.Link eventKey="link-4">
                        <Group/>
                        Group
                    </Nav.Link>
                    <Nav.Link eventKey="link-5">
                        <MusicNote/>
                        Audio
                    </Nav.Link>
                </Nav>
            </div>
        </aside>
    );
}

export default Sidebar;