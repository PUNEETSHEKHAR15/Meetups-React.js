import classes from './MeetupItem.module.css'



function Meetupitem(props) {
    return (

        <li className={classes.item}>

            <div className={classes.image}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button>Add to Favourite</button>
            </div>

        </li>

    )
}

export default Meetupitem
