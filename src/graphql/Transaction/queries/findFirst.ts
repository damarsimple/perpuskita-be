import { queryField, list } from 'nexus'

export const TransactionFindFirstQuery = queryField('findFirstTransaction', {
  type: 'Transaction',
  args: {
    where: 'TransactionWhereInput',
    orderBy: list('TransactionOrderByWithRelationInput'),
    cursor: 'TransactionWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('TransactionScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.transaction.findFirst({
      ...args,
      ...select,
    })
  },
})
