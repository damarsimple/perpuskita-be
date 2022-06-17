import { mutationField, nonNull } from 'nexus'

export const UserLoanUpsertOneMutation = mutationField('upsertOneUserLoan', {
  type: nonNull('UserLoan'),
  args: {
    where: nonNull('UserLoanWhereUniqueInput'),
    create: nonNull('UserLoanCreateInput'),
    update: nonNull('UserLoanUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.userLoan.upsert({
      ...args,
      ...select,
    })
  },
})
