import { mutationField, nonNull } from 'nexus'

export const BookCreateOneMutation = mutationField('createOneBook', {
  type: nonNull('Book'),
  args: {
    data: nonNull('BookCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.book.create({
      data,
      ...select,
    })
  },
})
