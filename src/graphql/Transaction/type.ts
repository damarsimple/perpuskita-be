import { objectType } from 'nexus'

export const Transaction = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Transaction',
  definition(t) {
    t.int('id')
    t.float('amount')
    t.string('type')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.int('userId')
    t.field('user', {
      type: 'User',
      resolve(root: any) {
        return root.user
      },
    })
  },
})
