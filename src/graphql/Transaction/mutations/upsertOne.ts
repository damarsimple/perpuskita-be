import { mutationField, nonNull } from 'nexus'

export const TransactionUpsertOneMutation = mutationField(
  'upsertOneTransaction',
  {
    type: nonNull('Transaction'),
    args: {
      where: nonNull('TransactionWhereUniqueInput'),
      create: nonNull('TransactionCreateInput'),
      update: nonNull('TransactionUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.transaction.upsert({
        ...args,
        ...select,
      })
    },
  },
)
