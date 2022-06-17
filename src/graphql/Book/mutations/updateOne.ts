import { mutationField, nonNull } from 'nexus'

export const BookUpdateOneMutation = mutationField('updateOneBook', {
  type: nonNull('Book'),
  args: {
    data: nonNull('BookUpdateInput'),
    where: nonNull('BookWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.book.update({
      where,
      data,
      ...select,
    })
  },
})
