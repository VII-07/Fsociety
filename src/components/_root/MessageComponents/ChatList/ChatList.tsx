import avatar from '../../../../assets/avatar.png'
import style from './chatList.module.scss'

const ChatList = () => {
    return (
        <div className={style.chat__container}>

            <h2 className={style.chat__title}>Chats</h2>

            <div className={style.chat__list}>

                <div className={`${style.chat__item}`}>
                    <div className="row">
                        <div className="col-4">
                            <div className={style.avatar__info}>
                                <img src={avatar} alt="avatar" />
                                <div>
                                    <h4>Mom</h4>
                                    <p>Online</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-8 d-flex align-items-center">
                            <p className={style.chat__message}>Buy milk kurwo...</p>
                        </div>
                    </div>
                </div>
                <div className={`${style.chat__item} ${style.active}`}>
                    <div className="row">
                        <div className="col-4">
                            <div className={style.avatar__info}>
                                <img src={avatar} alt="avatar" />
                                <div>
                                    <h4>Mom</h4>
                                    <p>Online</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-8 d-flex align-items-center">
                            <p className={style.chat__message}>Buy milk kurwo...</p>
                        </div>
                    </div>
                </div>
                <div className={style.chat__item}>
                    <div className="row">
                        <div className="col-4">
                            <div className={style.avatar__info}>
                                <img src={avatar} alt="avatar" />
                                <div>
                                    <h4>Mom</h4>
                                    <p>Online</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-8 d-flex align-items-center">
                            <p className={style.chat__message}>Buy milk kurwo...</p>
                        </div>
                    </div>
                </div>
                <div className={style.chat__item}>
                    <div className="row">
                        <div className="col-4">
                            <div className={style.avatar__info}>
                                <img src={avatar} alt="avatar" />
                                <div>
                                    <h4>Mom</h4>
                                    <p>Online</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-8 d-flex align-items-center">
                            <p className={style.chat__message}>Buy milk kurwo...</p>
                        </div>
                    </div>
                </div>
                <div className={style.chat__item}>
                    <div className="row">
                        <div className="col-4">
                            <div className={style.avatar__info}>
                                <img src={avatar} alt="avatar" />
                                <div>
                                    <h4>Mom</h4>
                                    <p>Online</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-8 d-flex align-items-center">
                            <p className={style.chat__message}>Buy milk kurwo...</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ChatList;