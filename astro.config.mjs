import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({routes: [
    { path: '/', component: '../' }, // Your main page
    { path: '/Sign Up', component: 'SignUpForm.astro' }, // Your sign-up page
  ],});

