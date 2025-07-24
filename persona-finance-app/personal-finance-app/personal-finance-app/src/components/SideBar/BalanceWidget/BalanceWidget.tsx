import classes from './BalanceWidget.module.css';

type Props = {
    title: string;
    amount: number;
}
export default function BalanceWidget({title, amount}: Props){
    return (
        <div className={classes.balanceWidget}>
            <p className={classes.title}>{title}</p>
            {/* format money later */}
            <h1 className={classes.amount}>{`$${amount}`}</h1> 
        </div>
    )

}