import gV from "./values";

const l2 = {
    puk : '70193f5af59f8f0d',
    prk : '65231fc4332a7ee4fb4'
}
const gC=(d)=>{ // get constant
    return gV(d)+l2[d];
}

export default gC;