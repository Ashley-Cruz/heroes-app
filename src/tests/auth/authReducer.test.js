import { authReducer } from './../../auth/authReducer';
import { types } from './../../types/types';

describe('Pruebas en authReducer', () => {

    const demoUser = {
        name: 'Ashley'
    }
    
    test('debe de retonar el estado por defecto', () => {
        const state = authReducer({logged: false}, {});
        expect(state).toEqual({logged: false});
    })

    test('debe de autenticar y colocar el name del usuario', () => {
        const action = {
            type: types.login,
            payload: demoUser
        }

        const state = authReducer({logged: false}, action);
        expect(state).toEqual({
            ...demoUser, logged: true
        });
    })
    
    test('debe de borrar el name del usuario y logged en false', () => {
        const state = authReducer({...demoUser, logged: true}, {type: types.logout});
        expect(state).toEqual({logged: false});
    })
    
})
