
const getApi = async() => {

    const urlBase = 'http://gateway.marvel.com';
    const apikey = '0b56a5389d916eac475c06de986bb4c6';
    const hash = '6d440088005ba0c89f0e041ee55fd0ad';
    const url = `${urlBase}/v1/public/comics?ts=1000&apikey=${apikey}&hash=${hash}`
    const resp = await fetch(url);
    const { data } = await resp.json();

    console.log(data);

    const comics = data.results.map( comic => {
        return {
            id: comic.id,
            title: comic.title,
            thumbnail: comic.thumbnail,
            variant: 'portrait_uncanny',
            characters: comic.characters
        }
    });

    return comics;

}

export default getApi;
