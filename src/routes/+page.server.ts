import { fail, message, superValidate, withFiles } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { schema } from '$lib/schema';

export async function load() {
    const form = await superValidate(zod(schema));
    return { form };
}

export const actions = {
    default: async ({ request }) => {
        const form = await superValidate(request, zod(schema), {
            allowFiles: true,
        });
        console.dir(form, { depth: 10 });

        if (!form.valid) return fail(400, withFiles({ form }));

        return message(form, 'Posted OK!');
    },
};
