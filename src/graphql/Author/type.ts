import { objectType } from 'nexus'

export const Author = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Author',
  definition(t) {
    t.int('id')
    t.string('name')
    t.list.field('books', {
      type: 'Book',
      args: {
        where: 'BookWhereInput',
        orderBy: 'BookOrderByWithRelationInput',
        cursor: 'BookWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'BookScalarFieldEnum',
      },
      resolve(root: any) {
        return root.books
      },
    })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('_count', {
      type: 'AuthorCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
