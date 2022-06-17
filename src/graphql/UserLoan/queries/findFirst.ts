import { queryField, list } from 'nexus'

export const UserLoanFindFirstQuery = queryField('findFirstUserLoan', {
  type: 'UserLoan',
  args: {
    where: 'UserLoanWhereInput',
    orderBy: list('UserLoanOrderByWithRelationInput'),
    cursor: 'UserLoanWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('UserLoanScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.userLoan.findFirst({
      ...args,
      ...select,
    })
  },
})
