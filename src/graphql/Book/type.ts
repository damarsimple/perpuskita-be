import { objectType } from 'nexus'

export const Book = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Book',
  definition(t) {
    t.int('id')
    t.string('title')
    t.nullable.string('cover')
    t.int('authorId')
    t.field('author', {
      type: 'Author',
      resolve(root: any) {
        return root.author
      },
    })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.list.field('categories', {
      type: 'Category',
      args: {
        where: 'CategoryWhereInput',
        orderBy: 'CategoryOrderByWithRelationInput',
        cursor: 'CategoryWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'CategoryScalarFieldEnum',
      },
      resolve(root: any) {
        return root.categories
      },
    })
    t.list.field('UserLoan', {
      type: 'UserLoan',
      args: {
        where: 'UserLoanWhereInput',
        orderBy: 'UserLoanOrderByWithRelationInput',
        cursor: 'UserLoanWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'UserLoanScalarFieldEnum',
      },
      resolve(root: any) {
        return root.UserLoan
      },
    })
    t.field('_count', {
      type: 'BookCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
