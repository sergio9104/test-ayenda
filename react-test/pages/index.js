import Head from 'next/head';
import Navigation from "../components/navigation";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Ayenda</title>
        <meta charSet="utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"/>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8"/>
        <meta name="google" content="notranslate"/>
        <meta name="description" content="Amazing comics challenge"/>
        <meta name="keywords" content="Next.js Marvel's API"/>
        <meta name="author" content="https://github.com/amendocol"/>
        <meta httpEquiv="Cache-Control" content="public, no-transform"/>
        <meta httpEquiv="expires" content="1d"/>
        <meta httpEquiv="cache_methods" content="GET"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossOrigin="anonymous"></link>
      </Head>
      <Navigation/>
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossOrigin="anonymous"></script>
      <script src="https://use.fontawesome.com/8d154b2141.js"></script>
    </div>
  )
}
export default Index;