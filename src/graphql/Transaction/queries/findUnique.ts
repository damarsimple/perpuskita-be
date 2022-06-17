import { queryField, nonNull } from 'nexus'

export const TransactionFindUniqueQuery = queryField('findUniqueTransaction', {
  type: 'Transaction',
  args: {
    where: nonNull('TransactionWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.transaction.findUnique({
      where,
      ...select,
    })
  },
})
