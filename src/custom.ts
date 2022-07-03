import { compareSync, hash, hashSync } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { extendType, mutationField, nonNull, objectType, stringArg } from 'nexus'
import { User } from './graphql'

export const AuthPayload = objectType({
    name: 'AuthPayload',
    definition(t) {
        t.nullable.string('token')
        t.boolean('status')
        t.nullable.string('message')
        t.nullable.field('user', {
            type: User
        })
    }

})

const SECRET = 'sector'

export const AuthMutation = extendType({
    type: 'Mutation',
    definition(t) {
        t.field('login', {
            type: 'AuthPayload',
            args: {
                email: nonNull(stringArg()),
                password: nonNull(stringArg()),
            },
            resolve: async (_parent, { email, password }, { prisma, }) => {
                const user = await prisma.user.findFirst({
                    where: {
                        email
                    }
                })
                if (!user) {
                    return {
                        status: false,
                        message: 'User not found'
                    }
                }



                if (!compareSync(password, user.password)) {

                    return {
                        status: false,
                        message: 'Password incorrect'
                    }



                }
                const token = sign(user, SECRET);

                return {
                    status: true,
                    token,
                    user
                }
            }
        })

        t.field('register', {
            type: 'AuthPayload',
            args: {
                name: nonNull(stringArg()),
                username: nonNull(stringArg()),
                address: nonNull(stringArg()),
                email: nonNull(stringArg()),
                password: nonNull(stringArg()),
            },
            resolve: async (_parent, { name, username, address, email, password }, { prisma, }) => {
                const user = await prisma.user.findFirst({
                    where: {
                        email
                    }
                })
                if (user) {
                    return {
                        status: false,
                        message: 'User already exists'
                    }
                }
                const hashedPassword = await hashSync(password, 10)
                const newUser = await prisma.user.create({
                    data: {
                        name,
                        username,
                        address,
                        email,
                        password: hashedPassword
                    }
                })

                const token = sign(newUser, SECRET);

                return {
                    status: true,
                    user: newUser,
                    token

                }
            }

        })
    }
})