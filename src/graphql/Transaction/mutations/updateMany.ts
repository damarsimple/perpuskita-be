import { mutationField, nonNull } from 'nexus'

export const TransactionUpdateManyMutation = mutationField(
  'updateManyTransaction',
  {
    type: nonNull('BatchPayload'),
    args: {
      data: nonNull('TransactionUpdateManyMutationInput'),
      where: 'TransactionWhereInput',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.transaction.updateMany(args as any)
    },
  },
)
