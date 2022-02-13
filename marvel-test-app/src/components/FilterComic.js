import { useState } from "react";

import './FilterComic.scss';

const FilterComic = ({ setComics, comics }) => {

    // console.log(setComics, comics);

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handledSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length >= 2) {
            const dataFilter = comics.filter( comic => {
                const comicData = comic.title.toUpperCase();
                const inputData = inputValue.toUpperCase();
                return comicData.indexOf(inputData) > -1
            });
            setComics(dataFilter);
        }
    }

    return(
        <>
            <form onSubmit={handledSubmit}>
                <label htmlFor="search">Buscar comic</label>
                <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Escribe el nombre del comic"/>
            </form>
        </>
    )

}

export default FilterComic;
