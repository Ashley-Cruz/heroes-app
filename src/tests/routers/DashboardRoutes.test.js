const { mount } = require("enzyme")
const { MemoryRouter } = require("react-router-dom")
const { AuthContext } = require("../../auth/AuthContext")
const { DashboardRoutes } = require("../../routers/DashboardRoutes")

describe('Pruebas en <DashboardRoutes />', () => {
    
    const valueContext = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Ashley'
        }
    }
    
    test('debe de mostrarse correctamente', () => {
        
        const wrapper = mount(
            <AuthContext.Provider value={valueContext}>
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        // console.log(wrapper.html());
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Ashley')
    })
    
})
