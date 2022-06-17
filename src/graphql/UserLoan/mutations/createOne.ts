import { mutationField, nonNull } from 'nexus'

export const UserLoanCreateOneMutation = mutationField('createOneUserLoan', {
  type: nonNull('UserLoan'),
  args: {
    data: nonNull('UserLoanCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.userLoan.create({
      data,
      ...select,
    })
  },
})
