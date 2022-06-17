import { queryField, nonNull, list } from 'nexus'

export const BookFindCountQuery = queryField('findManyBookCount', {
  type: nonNull('Int'),
  args: {
    where: 'BookWhereInput',
    orderBy: list('BookOrderByWithRelationInput'),
    cursor: 'BookWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('BookScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.book.count(args as any)
  },
})
