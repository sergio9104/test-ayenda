import React from 'react'

const ComicItem = (comic) => {

    const urlImg = comic.thumbnail.path;
    const variant = comic.variant;
    const extension = comic.thumbnail.extension;
    const fullUrl = `${urlImg}/${variant}.${extension}`;

    return(
        <div className="card">
            <img src={fullUrl} alt={comic.title} />
            <p>{comic.title}</p>
        </div>
    )

}

export default ComicItem;
