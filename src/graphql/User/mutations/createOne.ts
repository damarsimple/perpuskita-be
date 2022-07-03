import { genSaltSync, hashSync } from 'bcrypt'
import { mutationField, nonNull } from 'nexus'

export const UserCreateOneMutation = mutationField('createOneUser', {
  type: nonNull('User'),
  args: {
    data: nonNull('UserCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {

    const password = hashSync(data.password, genSaltSync())

    return prisma.user.create({
      data: {
        ...data,
        password,
      },
      ...select,
    })
  },
})
