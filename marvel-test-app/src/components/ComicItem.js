import React from 'react'

import './ComicItem.scss';

const ComicItem = (comic) => {

    const urlImg = comic.thumbnail.path;
    const variant = comic.variant;
    const extension = comic.thumbnail.extension;
    const fullUrl = `${urlImg}/${variant}.${extension}`;

    return(
        <div className="card animate__animated animate__fadeIn">
            <img src={fullUrl} alt={comic.title} />
            <div className="titleBox">
                <p className="title">{comic.title}</p>
            </div>
            <p className="price">{comic.id} USD</p>
        </div>
    )

}

export default ComicItem;
