import { Hono } from 'hono'
import { sign, verify } from 'hono/jwt'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string,
    JWT_SECRET: string
  }
}>()

app.post('/api/v1/user/signup', (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
  return c.res
})

app.post('/api/v1/user/signin', (c) => {
  return c.res
})

app.post('/api/v1/blog/', (c) => {
  return c.res
})
app.put('/api/v1/blog/', (c) => {
  return c.res
})

app.get('/api/v1/blog/:id', (c) => {
  return c.res
})

app.get('/api/v1/blog/bulk', (c) => {
  return c.res
})


export default app
