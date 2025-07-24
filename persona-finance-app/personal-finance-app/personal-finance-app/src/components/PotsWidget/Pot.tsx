import classes from './Pot.module.css';
type Props = {
    title: string;
    amount: number;
}
export default function Pot({title, amount}: Props){
    return (
        <div className={classes.potContainer}>
            <div className={classes.potColorIndicator}></div>
            <div className={classes.pot}>
                 <p className={classes.potTitle}>{title}</p>
                <p className={classes.potAmount}><strong>{`$${amount}`}</strong></p>
            </div>
        </div>
    )
   
}