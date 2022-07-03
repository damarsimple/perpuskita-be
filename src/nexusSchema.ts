import { makeSchema } from 'nexus'
import * as types from './graphql'
import { paljs } from '@paljs/nexus'
import { join } from 'path'
import { AuthPayload, AuthMutation } from './custom'
export const schema = makeSchema({
  types: {
    AuthPayload,
    AuthMutation,
    ...types
  },
  plugins: [paljs()],
  outputs: {
    schema: __dirname + '/generated/schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
  contextType: {
    module: join(__dirname, 'context.ts'),
    export: 'Context',
  },
})
