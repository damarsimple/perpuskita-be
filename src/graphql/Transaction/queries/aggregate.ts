import { queryField, list } from 'nexus'

export const TransactionAggregateQuery = queryField('aggregateTransaction', {
  type: 'AggregateTransaction',
  args: {
    where: 'TransactionWhereInput',
    orderBy: list('TransactionOrderByWithRelationInput'),
    cursor: 'TransactionWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.transaction.aggregate({ ...args, ...select }) as any
  },
})
