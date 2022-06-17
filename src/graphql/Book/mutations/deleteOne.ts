import { mutationField, nonNull } from 'nexus'

export const BookDeleteOneMutation = mutationField('deleteOneBook', {
  type: 'Book',
  args: {
    where: nonNull('BookWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.book.delete({
      where,
      ...select,
    })
  },
})
