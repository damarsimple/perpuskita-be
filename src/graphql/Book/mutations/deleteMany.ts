import { mutationField, nonNull } from 'nexus'

export const BookDeleteManyMutation = mutationField('deleteManyBook', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'BookWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.book.deleteMany({ where } as any)
  },
})
