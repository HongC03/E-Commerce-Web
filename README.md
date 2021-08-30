## Notes

#### Framework

Footable uses React for building user interfaces.

#### Features

- Products page with several filters (grid/list view, company, price, etc.)
- Shopping cart page which counts the total amount automatically (User can also change the
  the amount of the product)
- User is required to login in order to process to the checkout page

#### Authentication

Footable uses Auth0 React SDK for Single Page Apps for basic authentication. 
The users can also login with their Google account.

#### Payment

Footable uses Stripe for payment process.

#### Site Depolys

Footable uses Netlify to publish the site.

```

"react": "^17.0.2",
"react-dom": "^17.0.2",
"react-router-dom": "^5.2.0",
"@auth0/auth0-react": "^1.6.0",
"stripe": "^8.170.0",
"netlify-cli": "^3.39.4",

```

