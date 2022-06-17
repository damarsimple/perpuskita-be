import { mutationField, nonNull } from 'nexus'

export const UserLoanUpdateManyMutation = mutationField('updateManyUserLoan', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('UserLoanUpdateManyMutationInput'),
    where: 'UserLoanWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.userLoan.updateMany(args as any)
  },
})
