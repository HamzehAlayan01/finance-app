import classes from './SideBar.module.css';
import {NavLink} from 'react-router-dom';
import {TipJar,ChartDonut, ArrowsDownUp,ArrowFatLinesLeft, Receipt, House, ArrowFatLinesRight } from '@phosphor-icons/react';
export default function SideBar(){
    return (
        <aside className={classes.sidebar}>
            <h1>finance</h1>
            <nav>
                <House><NavLink to="/">Overview</NavLink></House>
                <NavLink to="/">Transactions</NavLink>
                <NavLink to="/">Budgets</NavLink>
                <TipJar><NavLink to="/">Pots</NavLink></TipJar>
                <NavLink to="/">Recurring Bills</NavLink>
            </nav>
            <button>Minimize Menu</button>
        </aside>
    )
}