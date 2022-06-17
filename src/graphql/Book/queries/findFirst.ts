import { queryField, list } from 'nexus'

export const BookFindFirstQuery = queryField('findFirstBook', {
  type: 'Book',
  args: {
    where: 'BookWhereInput',
    orderBy: list('BookOrderByWithRelationInput'),
    cursor: 'BookWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('BookScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.book.findFirst({
      ...args,
      ...select,
    })
  },
})
