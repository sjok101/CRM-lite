'use client';

import './globals.css';
import React from 'react';
import { Auth0Provider } from '@auth0/nextjs-auth0';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="https://cdn.auth0.com/js/auth0-samples-theme/1.0/css/auth0-theme.min.css" />
      </head>
      <body>
        <Auth0Provider>
          <main id="app" className="d-flex flex-column h-100" data-testid="layout">
            <a href="/auth/login">Login</a>
            <a href="/auth/logout">Logout</a>
          </main>
        </Auth0Provider>
      </body>
    </html>
  );
}
