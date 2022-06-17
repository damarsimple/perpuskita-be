import { queryField, list } from 'nexus'

export const UserLoanAggregateQuery = queryField('aggregateUserLoan', {
  type: 'AggregateUserLoan',
  args: {
    where: 'UserLoanWhereInput',
    orderBy: list('UserLoanOrderByWithRelationInput'),
    cursor: 'UserLoanWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.userLoan.aggregate({ ...args, ...select }) as any
  },
})
