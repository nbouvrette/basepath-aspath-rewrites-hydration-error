### To Reproduce

```bash
npm install
npm run dev
```

Open [http://localhost:3000/some-path/my-directory/123](http://localhost:3000/some-path/my-directory/123) with your browser to see the result.

### Happy path

When on http://localhost:3000/some-path/my-directory/123, both SSR and client-side `asPath` are identical and do not contain the `basePath`

### Issue with `asPath`

If you navigate to the URL using a rewrite [http://localhost:3000/some-path/mon-dossier/123](http://localhost:3000/some-path/mon-dossier/123), you will see a hydration error.

❗ The focus of this issue is that `asPath` includes `basePath` on the server-side but not on the client-side. Worse than that, when enabling `i18n` the server also includes the `locale` (`i18n` reproduction not included in this repository). I would not expect to have these values returned by the router and a more consistent behavior between the client and server.

To confirm the unexpected behavior, you can see in your browser that the first path segment is `mon-dossier` while if you open a `view page source` and search for `first-path-segment`, the value in the SSR markup is `some-path` (the value of `basePath`).

### Hypothesis

- this issue is probably a child-issue related to https://github.com/vercel/next.js/issues/41741 but the main difference is that it is **only triggered when using dynamic routes**.
- To confirm that this is related to dynamic routes and/or `getStaticPaths`/`getStaticProps`, when going on the non-dynamic route URL http://localhost:3000/some-path/mon-dossier, `basePath` is not returned
