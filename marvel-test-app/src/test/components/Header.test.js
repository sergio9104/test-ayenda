import React from 'react'
import { shallow } from "enzyme";
import Header from '../../components/Header';

describe('Pruebas en el comic item component', () => {

    test('Debe mostrar correctamente el componente', () => {
        const wrapper = shallow(<Header />)
        expect( wrapper ).toMatchSnapshot();
    })

})