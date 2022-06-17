import { objectType } from 'nexus'

export const UserLoan = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'UserLoan',
  definition(t) {
    t.int('id')
    t.int('userId')
    t.field('user', {
      type: 'User',
      resolve(root: any) {
        return root.user
      },
    })
    t.int('bookId')
    t.field('book', {
      type: 'Book',
      resolve(root: any) {
        return root.book
      },
    })
    t.field('loanExpiredAt', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.int('price')
    t.field('status', { type: 'LoanStatus' })
  },
})
