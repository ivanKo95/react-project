import './Info.css';
import styles from './info.module.css'

console.log(styles)

function Info() {
    return (
        <div className={styles.info}>
            <h1>Hello from Info component</h1>
            <button className="my-button">Click me!</button>
        </div>
    )
}

export default Info;