import { mutationField, nonNull } from 'nexus'

export const TransactionUpdateOneMutation = mutationField(
  'updateOneTransaction',
  {
    type: nonNull('Transaction'),
    args: {
      data: nonNull('TransactionUpdateInput'),
      where: nonNull('TransactionWhereUniqueInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.transaction.update({
        where,
        data,
        ...select,
      })
    },
  },
)
