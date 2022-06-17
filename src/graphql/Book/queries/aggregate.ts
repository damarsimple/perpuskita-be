import { queryField, list } from 'nexus'

export const BookAggregateQuery = queryField('aggregateBook', {
  type: 'AggregateBook',
  args: {
    where: 'BookWhereInput',
    orderBy: list('BookOrderByWithRelationInput'),
    cursor: 'BookWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.book.aggregate({ ...args, ...select }) as any
  },
})
