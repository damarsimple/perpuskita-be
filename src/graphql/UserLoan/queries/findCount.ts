import { queryField, nonNull, list } from 'nexus'

export const UserLoanFindCountQuery = queryField('findManyUserLoanCount', {
  type: nonNull('Int'),
  args: {
    where: 'UserLoanWhereInput',
    orderBy: list('UserLoanOrderByWithRelationInput'),
    cursor: 'UserLoanWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('UserLoanScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.userLoan.count(args as any)
  },
})
