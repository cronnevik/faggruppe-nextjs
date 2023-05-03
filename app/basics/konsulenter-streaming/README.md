## Streaming and Suspense
Server-Side Rendering (SSR) can still be slow as all data fetching on server needs to be completed before the page can be shown to the user.
**Streaming** allows you to break down the page's HTML into smaller chunks and progressively send those chunks from the server to the client. This enables parts of the page to be displayed sooner, without waiting for all the data to load before any UI can be rendered. Streaming works well with React's component model because each component can be considered a chunk. 
You can implement streaming in Next.js using loading.js (for an entire route segment) or with Suspense boundaries (for more granular control).

[Read more](https://beta.nextjs.org/docs/data-fetching/streaming-and-suspense)