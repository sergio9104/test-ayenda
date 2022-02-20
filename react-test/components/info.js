import Link from 'next/link'
const links = [
    {h:'https://github.com/amendocol',a:'Github',i:'github-square'},
    {h:'https://insasas.com.co',a:'Insasas.com.co',i:'internet-explorer'},
    {h:'https://www.linkedin.com/in/arnulfo-mendoza-huertas-659ab099/',a:'Perfil',i:'linkedin-square'}
]
const Info = () => {
    return (
        <ul className='row text-center align-items-center justify-content-center' style={{  listStyle:'none',height:'90vh' }}>
            {links.map(function (e,i){
                return (
                <li key={'link'+i} className="col-12 col-md-4">
                <Link href={e.h} passHref >
                    <a target="_blank" rel="noopener noreferrer"><i className={"fa fa-"+e.i} aria-hidden="true"></i>&nbsp;{e.a}</a>
                </Link>
            </li>)
            })
            }
</ul>
    )
  }
  export default Info;