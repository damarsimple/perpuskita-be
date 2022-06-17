import { mutationField, nonNull } from 'nexus'

export const UserLoanDeleteOneMutation = mutationField('deleteOneUserLoan', {
  type: 'UserLoan',
  args: {
    where: nonNull('UserLoanWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.userLoan.delete({
      where,
      ...select,
    })
  },
})
