const { shallow, mount } = require("enzyme");
const { AuthContext } = require("../../auth/AuthContext");
const { AppRouter } = require("../../routers/AppRouter");

describe('Pruebas en <AppRouter />', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }
    
    test('debe de mostrar login si no está autenticado', () => {
        
        const wrapper = mount(
            <AuthContext.Provider
                value={contextValue}
            >
                <AppRouter />
            </AuthContext.Provider>
        );

        // console.log(wrapper.html());
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar el componente de marvel si está autenticado', () => {
        
        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'Ashley'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider
                value={contextValue}
            >
                <AppRouter />
            </AuthContext.Provider>
        );

        // console.log(wrapper.html());
        expect(wrapper.find('.navbar').exists()).toBe(true)
    })
    
    
})
