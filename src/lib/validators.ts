import * as z from "zod"

export const singInSchema = z.object({
    email: z.string().email(),
})