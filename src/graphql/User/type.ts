import { objectType } from 'nexus'

export const User = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'User',
  definition(t) {
    t.int('id')
    t.string('email')
    t.string('name')
    t.string('username')
    t.string('password')
    t.string('address')
    t.boolean('isAdmin')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.float('balance')
    t.list.field('userLoans', {
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
        return root.userLoans
      },
    })
    t.list.field('transactions', {
      type: 'Transaction',
      args: {
        where: 'TransactionWhereInput',
        orderBy: 'TransactionOrderByWithRelationInput',
        cursor: 'TransactionWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'TransactionScalarFieldEnum',
      },
      resolve(root: any) {
        return root.transactions
      },
    })
    t.field('_count', {
      type: 'UserCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
