import styles from './Satellite.module.scss'
import {ItemType} from "../App";
import {Animator, Fade, ScrollContainer, ScrollPage} from "react-scroll-motion";

function Satellite({item}: { item: ItemType }) {
    return (
<div className={styles.Satellite}>
            <section>
                <ScrollPage>
                    <div className={styles.bar}>
                        <div>  </div><span>{item.year}</span><div>  </div>
                    </div>
                    <div className={styles.SatelliteInfo}>

                        {Number.isInteger(item.id / 2) ? <img width={500} height={500} src={item.satelPhoto}/> : null}
                        <div>
                            <h1>{item.name}</h1>
                            <span>{item.country}</span>
                            <div>{item.description}</div>
                        </div>
                        {Number.isInteger(item.id / 2) ? null : <img width={500} height={500} src={item.satelPhoto}/>}
                    </div>

                </ScrollPage>
            </section>
</div>
    )
}

export default Satellite