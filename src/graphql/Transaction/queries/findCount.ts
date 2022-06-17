import { queryField, nonNull, list } from 'nexus'

export const TransactionFindCountQuery = queryField(
  'findManyTransactionCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'TransactionWhereInput',
      orderBy: list('TransactionOrderByWithRelationInput'),
      cursor: 'TransactionWhereUniqueInput',
      take: 'Int',
      skip: 'Int',
      distinct: list('TransactionScalarFieldEnum'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.transaction.count(args as any)
    },
  },
)
