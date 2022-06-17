import { mutationField, nonNull } from 'nexus'

export const TransactionCreateOneMutation = mutationField(
  'createOneTransaction',
  {
    type: nonNull('Transaction'),
    args: {
      data: nonNull('TransactionCreateInput'),
    },
    resolve(_parent, { data }, { prisma, select }) {
      return prisma.transaction.create({
        data,
        ...select,
      })
    },
  },
)
