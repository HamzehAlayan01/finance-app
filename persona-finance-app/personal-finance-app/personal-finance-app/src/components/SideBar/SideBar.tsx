import classes from './SideBar.module.css';
import {NavLink} from 'react-router-dom';
// import {TipJar,ChartDonut, ArrowsDownUp,ArrowFatLinesLeft, Receipt, House, ArrowFatLinesRight } from '@phosphor-icons/react';
export default function SideBar(){
    return (
        <aside className={classes.sidebar}>
            <h1>finance</h1>
            <nav>
                <div className={classes.navItem}><NavLink to="/">Overview</NavLink></div>
                <div className={classes.navItem}><NavLink to="/">Transactions</NavLink></div>
                <div className={classes.navItem}><NavLink to="/">Budgets</NavLink></div>
                <div className={classes.navItem}><NavLink to="/">Pots</NavLink></div>
                <div className={classes.navItem}><NavLink to="/">Recurring Bills</NavLink></div>
            </nav>
            <button className={classes.minimizeButton}>Minimize Menu</button>
        </aside>
    )
}