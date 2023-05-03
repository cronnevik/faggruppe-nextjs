## Client Components
Client Components enable you to add client-side interactivity to your application. In Next.js, they are prerendered on the server and hydrated on the client.

The "use client" directive (placed at the top of a file) is a convention to declare a boundary between a Server and Client Component.
Once "use client" is defined in a file, all other modules imported into it, including child components, are considered part of the client bundle.

In Next.js, Server Components are the default. Therefore all React components are part of the Server Component module graph unless defined or imported in a module that starts with the "use client" directive.

[Read more](https://beta.nextjs.org/docs/rendering/server-and-client-components#client-components)