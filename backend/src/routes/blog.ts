import { Hono } from "hono"
import { sign } from 'hono/jwt'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>()

blogRouter.post('/api/v1/blog/', (c) => {
    return c.res
})
blogRouter.put('/api/v1/blog/', (c) => {
    return c.res
})

blogRouter.get('/api/v1/blog/:id', (c) => {
    return c.res
})

blogRouter.get('/api/v1/blog/bulk', (c) => {
    return c.res
})