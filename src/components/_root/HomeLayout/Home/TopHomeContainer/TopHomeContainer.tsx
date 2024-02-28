import NotificationModalComponent from "../../../../__ui/Dialog/NotificationModalComponent/NotificationModalComponent";
import SearchComponent from "../../../../__ui/SearchComponent/SearchComponent";
import SettingModalComponent from "../../../../__ui/Dialog/SettingModalComponent/SettingModalComponent";
import SaveModalComponent from "../../../../__ui/Dialog/SaveModalComponent/SaveModalComponent";


const TopHomeContainer = () => {
    return (
        <div className="search__container d-flex justify-content-between mt-2">
            <SearchComponent />
            <SettingModalComponent />
            <NotificationModalComponent/>
            <SaveModalComponent/>
        </div>
    );
}

export default TopHomeContainer;