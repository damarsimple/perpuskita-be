import { queryField, nonNull } from 'nexus'

export const BookFindUniqueQuery = queryField('findUniqueBook', {
  type: 'Book',
  args: {
    where: nonNull('BookWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.book.findUnique({
      where,
      ...select,
    })
  },
})
