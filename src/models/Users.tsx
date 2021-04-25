export interface User {
    userId: number,
    firstName: string,
    lastName: string,
    email: string,
    workPosition: string,
    workCategory: string,
    password: string,
    onVacation: boolean
}

export type Users = User[];