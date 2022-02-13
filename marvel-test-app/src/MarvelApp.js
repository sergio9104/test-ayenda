import React, { useEffect, useState } from 'react';
import ComicItem from './components/ComicItem';
import FilterComic from './components/FilterComic';
import useGetApi from './hooks/useGetApi';

const MarvelApp = () => {

    const { data } = useGetApi()
    const [comics, setComics] = useState(data);

    useEffect( () => {
        setComics(data);
    }, [data])

    const handleButton = () => {
        setComics(data);
    }

    return(
        <>
            <h2>Marvel app</h2>
            <FilterComic setComics={setComics} comics={comics}/>
            <button onClick={handleButton}>Clear filter</button>
            <div>
                {
                    comics.map( comic => (
                        <ComicItem
                            key={comic.id}
                            {...comic}
                        />
                    ))
                }
            </div>
        </>
    )

}

export default MarvelApp;
