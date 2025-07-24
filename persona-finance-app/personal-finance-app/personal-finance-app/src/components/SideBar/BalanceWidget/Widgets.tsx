import classes from './Widgets.module.css';
import BalanceWidget from './BalanceWidget';
export default function Widgets(){
    return (
        <div className={classes.widgetsContainer}>
            <BalanceWidget title="Total Balance" amount={4838.00}/>
            <BalanceWidget title="Income" amount={38140.50}/>
            <BalanceWidget title="Expenses" amount={1700.50}/>
        </div>
    )

}