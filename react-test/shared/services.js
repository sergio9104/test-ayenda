import axios from 'axios';
import MD5 from "crypto-js/md5";
import gC from "./constants";

const ts = new Date().getTime();
const heads = {
    'Content-Type':'application/json'
}
 const Http =async (uri1,uri2,verb='get',body=undefined) =>{
    return await axios({
        method:verb,
        url:'https://gateway.marvel.com/v1/public/'+uri1+'ts='+ts+'&apikey='+gC('puk')+'&hash='+MD5(ts+gC('prk')+gC('puk')).toString()+uri2,
        headers:heads,
    data:body});
}
export default Http;