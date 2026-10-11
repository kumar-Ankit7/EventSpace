# EventSpace

A full-stack event booking platform built with MongoDB, Express.js, React, and Node.js, featuring JWT authentication, OTP verification, event management, booking and cancellation workflows, and email notifications using Nodemailer.

## Install and run

From the repository root, install both applications and start the client and server together:

```sh
npm run install:all
npm run dev
```

The client runs through Vite and the server runs through nodemon. Press `Ctrl+C` to stop both processes.

To install `concurrently` and the root development tooling, run `npm install` from the repository root. The server and client also retain their own package files and can still be managed independently.
