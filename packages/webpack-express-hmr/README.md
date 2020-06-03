# webpack-express-hmr

Pros:

- Works
- Solving consuming of esm modules
- Can utilise parts of the plugin build setup

Cons:

- Webpacking backend -> additional build steps
- Manual logic for HMR (maybe should be okay for router in the backend, but what's for the plugins)
