import { queryField, nonNull, list } from 'nexus'

export const UserLoanFindManyQuery = queryField('findManyUserLoan', {
  type: nonNull(list(nonNull('UserLoan'))),
  args: {
    where: 'UserLoanWhereInput',
    orderBy: list('UserLoanOrderByWithRelationInput'),
    cursor: 'UserLoanWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('UserLoanScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.userLoan.findMany({
      ...args,
      ...select,
    })
  },
})
