const { mount } = require("enzyme")
import { types } from './../../../types/types';
const { MemoryRouter, Router } = require("react-router-dom")
const { AuthContext } = require("../../../auth/AuthContext")
const { Navbar } = require("../../../components/ui/Navbar")

describe('Pruebas en <Navbar />', () => {

    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn()
    }

    const valueContext = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Ashley'
        }
    }
    
    const wrapper = mount(
        <AuthContext.Provider value={valueContext}>
            <MemoryRouter>
                <Router
                    history={historyMock}
                >
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    )

    afterEach( () => {
        jest.clearAllMocks();
    })

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Ashley');
    })
    
    test('debe de llamar el logout y el usar history', () => {
        wrapper.find('button').prop('onClick')();
        expect(valueContext.dispatch).toHaveBeenCalledWith({
            type: types.logout
        });
        expect(historyMock.replace).toHaveBeenCalledWith('/login');
    })
    
})
