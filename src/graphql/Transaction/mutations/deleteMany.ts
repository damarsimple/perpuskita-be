import { mutationField, nonNull } from 'nexus'

export const TransactionDeleteManyMutation = mutationField(
  'deleteManyTransaction',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'TransactionWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.transaction.deleteMany({ where } as any)
    },
  },
)
