# PERMIAS SDIA Website
This is the GitHub repo for the PERMIAS SDIA website. Below is some documentation on how to maintain and update it. 

# How to run locally
- After cloning this project, open command prompt and cd to the root folder of the project
- Make sure you have pnpm installed: [https://docs.npmjs.com/downloading-and-installing-node-js-and-npm](https://pnpm.io/installation)
- run `pnpm install` to install all the project dependencies on your computer
- run `pnpm run dev` to host the website locally. Do this to test your changes.

Always do `pnpm run dev` before pushing your changes to ensure everything works correctly.

# Hosting
This website is deployed on Vercel using permias sdia's gmail account.

Back-end is hosted on Neon also on the sdia gmail account. 
The Back-end is only used to host a database of alumni, officers, and events. Currently you can add, remove, edit entries from the Neon console "Tables" menu. In the future, an admin page would be ideal.
Images are hosted on Vercel blob. If it ever runs out of space, we would probably need to look into options:
- Paid: Amazon S3, upgrade

Domain name is from namecheap.com:
- Username  : permiassandiego
- Password  : same as email


