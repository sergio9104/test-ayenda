import { useEffect, useState } from 'react';
import getApi from '../helpers/getApi';

const useGetApi = () => {

    const [state, setstate] = useState(
        {
            data: [],
            loading: true
        }
    )

    useEffect( () => {
        getApi()
            .then( comics => {
            setstate({
                data: comics,
                loading: false
            })
        })
    }, []);

    return state;

}

export default useGetApi;
