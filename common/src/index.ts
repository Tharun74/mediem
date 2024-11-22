import z, { optional, string } from "zod"

export const signUpInput = z.object({
    name : z.string().optional(),
    email : z.string().email(),
    password : z.string().min(6)
})

export type SignUpInput = z.infer<typeof signUpInput>

export const signinInput = z.object({
    email: z.string().email(),
    password: z.string(),
});

export type SigninType = z.infer<typeof signinInput>;

export const createPostInput = z.object({
    title: z.string(),
    content: z.string(),
});

export type CreatePostType = z.infer<typeof createPostInput>;

export const updatePostInput = z.object({
    title: z.string().optional(),
    content: z.string().optional(),
    id: z.string()
});

export type UpdatePostType = z.infer<typeof updatePostInput>;
