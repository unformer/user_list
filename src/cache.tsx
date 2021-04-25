
import { InMemoryCache, ReactiveVar, makeVar } from "@apollo/client";
import { Users } from "./models/Users";

export const cache: InMemoryCache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                users: {
                    read() {
                        return usersVar();
                    }
                }
            }
        }
    }
});

/**
 * Set initial values when we create cache variables.
 */

const usersInitialValue: Users = [
    {
        userId: 1,
        firstName: 'Jhon',
        lastName: 'Smith',
        email: 'test1@mail.ru',
        workPosition: 'Senior Vice President',
        workCategory: 'Worldwide Marketing',
        password: '12345',
        onVacation: true
    },
    {
        userId: 2,
        firstName: 'Jhony',
        lastName: 'Cage',
        email: 'test2@mail.ru',
        workPosition: 'Senior Vice President',
        workCategory: 'Software Engineering',
        password: '98765',
        onVacation: false
    }
]

export const usersVar: ReactiveVar<Users> = makeVar<Users>(
    usersInitialValue
);