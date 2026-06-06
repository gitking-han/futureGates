<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/f68fd915-5091-48e3-a71e-955ea40b7ab6

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Create a `.env` file with your EmailJS keys. See `.env.example` for the required variables.
3. Run the app:
   `npm run dev`

## EmailJS Contact Form Setup

Use a static email provider like EmailJS to keep the site deployable as a static Vite app on Vercel.

Required env vars in `.env`:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

After setting them, rebuild or restart `npm run dev` so the form can send emails.
