import { mutationField, nonNull } from 'nexus'

export const BookUpsertOneMutation = mutationField('upsertOneBook', {
  type: nonNull('Book'),
  args: {
    where: nonNull('BookWhereUniqueInput'),
    create: nonNull('BookCreateInput'),
    update: nonNull('BookUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.book.upsert({
      ...args,
      ...select,
    })
  },
})
