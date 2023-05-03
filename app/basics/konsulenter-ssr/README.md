## Server-Side Rendering (SSR)

1. First, all data for a given page is fetched on the server.
2. The server then renders the HTML for the page.
3. The HTML, CSS, and JavaScript for the page are sent to the client.
4. A non-interactive user interface is shown using the generated HTML, and CSS.
5. Finally, React hydrates the user interface to make it interactive.

[Hydration with react-dom/server](https://react.dev/reference/react-dom/client/hydrateRoot#hydrating-server-rendered-html)

These steps are sequential and blocking, meaning the server can only render the HTML for a page once all the data has been fetched. And, on the client, React can only hydrate the UI once the code for all components in the page has been downloaded.
SSR with React and Next.js helps improve the perceived loading performance by showing a non-interactive page to the user as soon as possible.

