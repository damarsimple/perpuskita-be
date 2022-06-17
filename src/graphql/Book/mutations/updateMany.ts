import { mutationField, nonNull } from 'nexus'

export const BookUpdateManyMutation = mutationField('updateManyBook', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('BookUpdateManyMutationInput'),
    where: 'BookWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.book.updateMany(args as any)
  },
})
