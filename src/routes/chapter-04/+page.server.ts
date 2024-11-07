import { redirect } from '@sveltejs/kit';

export const actions = {
  login: async ({ request }) => {
    const data = await request.formData();
    console.log(data);
    const username = data.get('username');

    if (username) {
      redirect(303, '/chapter-04/success');
    }

    redirect(303, '/chapter-04/fail');
  },
}
