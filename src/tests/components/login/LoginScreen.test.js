const { mount } = require("enzyme")
import { types } from './../../../types/types';
const { AuthContext } = require("../../../auth/AuthContext")
const { LoginScreen } = require("../../../components/login/LoginScreen")

describe('Pruebas en <LoginScreen />', () => {

    const history = {
        replace: jest.fn()
    }

    const valueContext = {
        dispatch: jest.fn()
    }

    const wrapper = mount(
        <AuthContext.Provider value={valueContext}>
            <LoginScreen history={history} />
        </AuthContext.Provider>
    );

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe de realizar el dispatch y la navegación', () => {
        const handleClick = wrapper.find('button').prop('onClick');
        handleClick();
        expect(valueContext.dispatch).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'Nayelli'
            }
        });
        expect(history.replace).toHaveBeenCalledWith('/');
        localStorage.setItem('lastPath', '/dc');
        handleClick();
        expect(history.replace).toHaveBeenCalledWith('/dc');
    })
    
})
