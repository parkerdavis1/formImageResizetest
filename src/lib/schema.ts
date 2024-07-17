import { z } from 'zod';

export const schema = z.object({
    image: z
        .instanceof(File, { message: 'Please upload a file.' })
        .refine((f) => f.size < 100000, 'Max 100Kb upload size.')
        .optional(),
});
