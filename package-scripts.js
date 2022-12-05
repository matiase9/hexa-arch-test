
module.exports = {
  scripts: {
    start: {
      script: 'cd dist && node ./src/index.js',
      description: 'Starts the builded app',
    },
    server: {
      script: 'nodemon -L --exec ts-node -- ./src/index.ts',
      description: 'Starts local env',
    },
    lint: {
      script: 'tslint -t stylish --project "tsconfig.json" --fix',
      hiddenFromHelp: true
    },
    test: {
      script: 'jest',
      description: 'Run tests'
    },
    cli: {
      script: 'ts-node -- ./src/Cli.ts',
      description: 'Cli'
    }
  }
}