import { shallow } from "enzyme";
import MarvelApp from "../MarvelApp";

describe('Pruebas en Marvel app', () => {

    test('Debe hacer match con el snapshot', () => {
        const wrapper = shallow(<MarvelApp />)
        expect( wrapper ).toMatchSnapshot();
    })

})