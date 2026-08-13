# Akshay Noushar Portfolio — Final Live Build

## Status
Production-ready static build.

## Live backend
Contact/project enquiries submit to the existing Supabase project:
`akshay-noushar-portfolio` (ap-south-1).

The database uses Row Level Security and permits anonymous INSERT only into
`portfolio_enquiries`. Public SELECT/UPDATE/DELETE access is not enabled.

## Deploy to the existing Cloudflare Workers site
Upload/deploy the CONTENTS of this folder as the site root so that `index.html`
remains at `/index.html`.

Target currently used by Akshay:
akshay-noushar-portfolio.akshaynousharfilms.workers.dev

## Important
This package does not contain Supabase service-role credentials.
Only the public/publishable browser key is used.
