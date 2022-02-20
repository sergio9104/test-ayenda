import Head from 'next/head';

const Card = (props)=>{
    return props.card.length==0 ? (
        <div className="text-center">
            <br/>
            <div className="alert alert-secondary" role="alert">
                digite un nombre o seleccione un personaje
            </div>
        </div>
        ):(
        <div className='row'>
            <Head> <title>Ayenda | {props.card.copyright}</title> </Head>
           {
            props.card.data.map(function (e){
                    return (
                        <div className="col-12 col-md-6 col-lg-4" key={e.id}>
                        <div className="card" style={{width: '18rem'}}>
                            <img src={e.thumbnail.path+'.'+e.thumbnail.extension} className="card-img-top" alt={e.id} />
                            <div className="card-body">
                            <h5 className="card-title">{e.name}</h5>
                            <p className="card-text">{e.description}</p>
                            <a href="#" className="btn float-right btn btn-dark">$ 9,99</a>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    );
}
export default Card;