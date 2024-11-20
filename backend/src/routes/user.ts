import { Hono } from "hono";
import { sign } from 'hono/jwt'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>()

userRouter.post('/api/v1/user/signup', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const body = await c.req.json();

    const user = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
            password: body.password
        }
    })

    if (!user) {
        c.status(403)
        return c.json({ error: 'User already exists' })
    }
    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({
        jwt
    })

})

userRouter.post('/api/v1/user/signin', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();

    const responce = await prisma.user.findFirst({
        where: {
            email: body.email,
            password: body.password
        }
    });

    if (!responce) {
        c.status(403)
        return c.json({ error: 'User does not exists' })
    }

    const jwt = await sign({ id: responce.id }, c.env.JWT_SECRET);
    return c.json({
        jwt
    })

})