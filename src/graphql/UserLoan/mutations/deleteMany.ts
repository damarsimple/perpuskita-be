import { mutationField, nonNull } from 'nexus'

export const UserLoanDeleteManyMutation = mutationField('deleteManyUserLoan', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'UserLoanWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.userLoan.deleteMany({ where } as any)
  },
})
