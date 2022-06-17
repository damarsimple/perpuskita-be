import { queryField, nonNull, list } from 'nexus'

export const BookFindManyQuery = queryField('findManyBook', {
  type: nonNull(list(nonNull('Book'))),
  args: {
    where: 'BookWhereInput',
    orderBy: list('BookOrderByWithRelationInput'),
    cursor: 'BookWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('BookScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.book.findMany({
      ...args,
      ...select,
    })
  },
})
