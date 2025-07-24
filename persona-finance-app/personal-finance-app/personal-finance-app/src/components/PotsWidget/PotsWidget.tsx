import classes from './PotsWidget.module.css'
import {Link} from 'react-router-dom';
import Pot from './Pot';
export default function PotsWidget() {
    return (
        <div className={classes.potsWidget}>
            <div className={classes.potsWidgetHeader}>
                <h2 className={classes.title}>Pots</h2>
                <p className={classes.potsDetailsLink}><Link to="/pots">See Details</Link></p>
            </div>
 
            <div className={classes.potsWidgetContent}>
                <div className={classes.totalSaved}>
                    <p>Total Saved</p>
                    <h1>$850</h1>
                </div>
                <div className={classes.potsList}>
                    <Pot title="Savings" amount={500}/>
                    <Pot title="Gift" amount={200}/>
                    <Pot title="Concert Ticket" amount={150}/>
                    <Pot title="New Laptop" amount={100}/>
                </div>
            </div>
        </div>
    )
}