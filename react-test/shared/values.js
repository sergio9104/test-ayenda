const l2 = {
    kup : '497a546da9a5147d',
    krp : '4c7e2c7ef123ffc93e3b6'
}
const gV=(d)=>{ // get constant
    return l2[d.split("").reverse().join("")];
}

export default gV;