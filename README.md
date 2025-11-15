# PERMIAS SDIA Website
This is the GitHub repo for the PERMIAS SDIA website at https://www.permiassdia.com. Below is some documentation on how to maintain and update it. 

# How to run locally
- After cloning this project, open terminal and cd to the root folder of the project
- Make sure you have pnpm installed: [https://docs.npmjs.com/downloading-and-installing-node-js-and-npm](https://pnpm.io/installation)
- Make a file `.env.local` in the root of your project. And then write this into the file: `DATABASE_URL=[insert private Neon SQL connection url here]`. This is to connect to the database from your localhost.
- You can get the SQL connection URL from the Neon console (read the Hosting section of this README.md). It's important that this is kept **private** so don't push it anywhere.
- run `pnpm install` to install all the project dependencies on your computer
- run `pnpm run dev` to host the website locally. Do this to test your changes.


And that's it. Remember to always do `pnpm run dev` before pushing your changes to ensure everything works correctly.

# Hosting
This website is deployed on Vercel using PERMIAS SDIA's gmail account.

Back-end is hosted on Neon also on the sdia gmail account. 
- The Back-end is only used to host a database of alumni, officers, and events. 
- Currently you can add, remove, edit entries in the db from the Neon console "Tables" menu, using the "Production" branch. Or you can use the SQL editor directly. In the future, an admin page might be ideal so non-technical people can update it. 
  
Images are hosted on Vercel blob. For future maintainers, if it ever runs out of space, here are some ideas:
- Paid: Amazon S3; upgrade Vercel plan;
- Free: Google Drive and then reference imgs to drive link; remove images for alumni, old events, old officers;

Domain name is from namecheap.com:
- Username  : permiassandiego
- Password  : same as email password

# Project structure
- Every page is located in the folder with the corresponding name (i.e. the Team page is located in app/team/page.tsx).
- UI components that are only used in one page should be placed in that page's folder.
- UI components that are reused in multiple pages should be placed in the /components/ folder.
- The footer.tsx component should be inserted in almost every page.
- All APIs to the Back-End should be written in /app/api/ folder.

