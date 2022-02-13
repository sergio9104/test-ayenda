import React, { useEffect, useState } from 'react';
import ComicItem from './components/ComicItem';
import FilterComic from './components/FilterComic';
import Header from './components/Header';
import useGetApi from './hooks/useGetApi';

const MarvelApp = () => {

    const { data, loading } = useGetApi()
    const [comics, setComics] = useState(data);

    useEffect( () => {
        setComics(data);
    }, [data])

    const handleButton = () => {
        setComics(data);
    }

    return(
        <div className='main'>
            <Header />
            <FilterComic setComics={setComics} comics={comics}/>
            <button className='clearBtn' onClick={handleButton}><i class="fa-solid fa-broom"></i> Clear filter</button>
            { loading && <p className="animate__animated animate__flash">Cargando datos...</p> }
            <div className='comics'>
                {
                    comics.map( comic => (
                        <ComicItem
                            key={comic.id}
                            {...comic}
                        />
                    ))
                }
            </div>
        </div>
    )

}

export default MarvelApp;
