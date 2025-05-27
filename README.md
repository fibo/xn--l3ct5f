# speak พูด

## Development

To get started:

- Install dependencies: `npm install`
- Start development server: `npm start`

To deploy, edit file _.envrc._ with something like:

```
export AWS_ACCESS_KEY_ID=xxx
export AWS_SECRET_ACCESS_KEY=xxx
```

and use [direnv](https://direnv.net/) to load the environment variables.

Then run:

```sh
npm run deploy
```

