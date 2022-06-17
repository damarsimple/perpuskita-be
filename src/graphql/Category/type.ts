import { objectType } from 'nexus'

export const Category = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Category',
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
    t.field('_count', {
      type: 'CategoryCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
