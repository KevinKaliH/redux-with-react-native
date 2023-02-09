export interface AuthStateModel {
    isLogged: boolean;
    name: string
}

export const initialValue: AuthStateModel = {
    isLogged: false,
    name: ''
}