import React from "react";
import styles from "./manga.module.css"

function Manga () {
    let pages = Array.from(Array(89).keys());

    const panel = pages.map(page => 
            <img 
                className={styles.panel}
                key={page}
                src={`${process.env.PUBLIC_URL}/images/manga/1stChapter/${page+1}.png`}
                alt={page+1}
            />
        )

    return(
        <div className={styles.main}>
            {panel}
        </div>
    )
}

export default Manga;