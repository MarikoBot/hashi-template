
# Hashi-template

> Hashi is a NPM package that wraps and implements features from Discord.js library.
Including a command handler, an event handler, integrated database system, and more.

This project is a template of how to "goodly" use that package.

## Authors

Original package link:
- [marikobot-hashi](https://www.npmjs.com/package/marikobot-hashi)

## Authors

- [@elouannh](https://www.github.com/elouannh)

## License

[MIT](https://choosealicense.com/licenses/mit/)


## Requirements

Node.js and a package manager (Yarn, PNPM, NPM) installed in your environment.

## Contributing

### Creating a new version

First, let's build the package:
```bash
npm run clean; node builder.js; tsc; git add .
```

Secondly, let's box our files into a commit:
```bash
git commit -m "My message!"
```

Then, let's update the version:
```bash
npm version <patch|minor|major|prerelease --preid=devbuild>
```

Finally, let's publish the new version and push it to GitHub:
```bash
git push; git push --tags
```

Well done!

### Run the code

To run the code, just execute:
```bash
node lib/index.js
```

## Used By

This project is used by the following projects:

- [MarikoBot](https://github.com/MarikoBot/mariko)

