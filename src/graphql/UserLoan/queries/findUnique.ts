import { queryField, nonNull } from 'nexus'

export const UserLoanFindUniqueQuery = queryField('findUniqueUserLoan', {
  type: 'UserLoan',
  args: {
    where: nonNull('UserLoanWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.userLoan.findUnique({
      where,
      ...select,
    })
  },
})
