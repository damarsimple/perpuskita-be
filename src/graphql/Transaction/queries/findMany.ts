import { queryField, nonNull, list } from 'nexus'

export const TransactionFindManyQuery = queryField('findManyTransaction', {
  type: nonNull(list(nonNull('Transaction'))),
  args: {
    where: 'TransactionWhereInput',
    orderBy: list('TransactionOrderByWithRelationInput'),
    cursor: 'TransactionWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('TransactionScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.transaction.findMany({
      ...args,
      ...select,
    })
  },
})
