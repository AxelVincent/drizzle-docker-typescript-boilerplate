import { serial, char, timestamp, pgTable } from 'drizzle-orm/pg-core'

export const user = pgTable('user', {
  id: serial('id').primaryKey(),
  name: char('name').notNull(),
  created_at: timestamp('created_at').notNull(),
  updated_at: timestamp('created_at').notNull()
})
