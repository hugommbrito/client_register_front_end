import { z } from 'zod'

export const formSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string().max(11)
})

export type RegisterData = z.infer<typeof formSchema>