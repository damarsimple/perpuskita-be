import { mutationField, nonNull } from 'nexus'

export const TransactionDeleteOneMutation = mutationField(
  'deleteOneTransaction',
  {
    type: 'Transaction',
    args: {
      where: nonNull('TransactionWhereUniqueInput'),
    },
    resolve: async (_parent, { where }, { prisma, select }) => {
      return prisma.transaction.delete({
        where,
        ...select,
      })
    },
  },
)
