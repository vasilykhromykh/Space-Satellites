import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import {
    ScrollContainer,
    ScrollPage,
    Animator,
    Sticky,
    batch,
    Fade,
    MoveOut,
    StickyIn,
    FadeIn,
    ZoomIn,
    MoveIn,
    Zoom,
    ZoomOut,

} from 'react-scroll-motion';
import Satellite from "./Components/Satellite";
import axios from 'axios';

export type ItemType = {

    id: number
    name: string,
    country: string,
    year: string,
    description: string,
    satelPhoto: string

}

function App() {
    const [items, setItems] = React.useState<Array<ItemType>>([])
    React.useEffect(() => {
        axios.get('https://63349415849edb52d6f439e8.mockapi.io/space/asd').then(res => {
            setItems(res.data)
        })
    }, [])
    const Spin = (cycle: any) =>
        ({
            out: {
                style: {
                    transform: (p: number) => `rotate(${p * 180 * cycle}deg)`,
                },
            },
        });
    return (
        <div className={styles.app}>
            <ScrollContainer snap='mandatory'>
                <section>
                    <ScrollPage page={1}>
                        <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -400))}>
                            <div className={styles.firstPage}>
                                <h2>FullScreen</h2>
                                <h2> and</h2>
                                <h2> scroll down</h2>

                                <Animator animation={Spin(1)}> <img src="UI/scroll.png" width={170}/></Animator>
                            </div>
                        </Animator>
                    </ScrollPage>
                </section>
                <section>

                    <ScrollPage page={1}>
                        <Animator animation={batch(StickyIn(), ZoomIn(),)}>
                            <div className={styles.firstPage}>
                                <h1>Space, Space.</h1>
                                <p>Space technology is technology for use in outer space, in travel (astronautics) or
                                    other
                                    activities beyond Earth's atmosphere, for purposes such as spaceflight, space
                                    exploration,
                                    and Earth observation. Space technology includes space vehicles such as spacecraft,
                                    satellites, space stations and orbital launch vehicles; deep-space communication;
                                    in-space
                                    propulsion; and a wide variety of other technologies including support
                                    infrastructure
                                    equipment, and procedures.</p>
                            </div>
                        </Animator>
                    </ScrollPage>

                </section>
                {items.map(item =>
                    <Satellite item={item}/>
                )}
            </ScrollContainer>
        </div>
    );
}

export default App;
