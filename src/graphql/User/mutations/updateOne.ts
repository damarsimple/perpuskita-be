import { hashSync, genSaltSync } from 'bcrypt'
import { mutationField, nonNull } from 'nexus'

export const UserUpdateOneMutation = mutationField('updateOneUser', {
  type: nonNull('User'),
  args: {
    data: nonNull('UserUpdateInput'),
    where: nonNull('UserWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {

    let password = undefined

    if (data.password?.set) {
      password = hashSync(data.password.set, genSaltSync())
    }

    return prisma.user.update({
      where,
      data: {
        ...data,
        password: password ? password : undefined,
      },
      ...select,
    })
  },
})
