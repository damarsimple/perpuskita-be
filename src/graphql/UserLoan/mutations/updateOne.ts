import { mutationField, nonNull } from 'nexus'

export const UserLoanUpdateOneMutation = mutationField('updateOneUserLoan', {
  type: nonNull('UserLoan'),
  args: {
    data: nonNull('UserLoanUpdateInput'),
    where: nonNull('UserLoanWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.userLoan.update({
      where,
      data,
      ...select,
    })
  },
})
