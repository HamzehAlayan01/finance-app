import SideBar from "../../components/SideBar/SideBar"
import classes from './HomePage.module.css';
import Widgets from "../../components/SideBar/BalanceWidget/Widgets";
import PotsWidget from "../../components/PotsWidget/PotsWidget";
export default function HomePage(){
    return (
        <div className={classes.homePageAll}>
            <SideBar/>
            <div className={classes.homePageContent}>
                <h1>Overview</h1>
                <Widgets/>
                <PotsWidget/>
            </div>
        </div>
    )
}