# slackr

[![Build status](https://app.wercker.com/status/c61e286eb985c0fe8e104ad969bab4f9/s "wercker status")](https://app.wercker.com/project/bykey/c61e286eb985c0fe8e104ad969bab4f9)
[![Codacy grade](https://img.shields.io/codacy/grade/2c96b5ea938e4fbdbec73842937b1e3e.svg "Codacy")](https://www.codacy.com/app/starefossen/node-slackr)
[![Codacy coverage](https://img.shields.io/codacy/coverage/2c96b5ea938e4fbdbec73842937b1e3e.svg "Codacy")](https://www.codacy.com/app/starefossen/node-slackr)
[![NPM downloads](https://img.shields.io/npm/dm/slackr.svg "NPM downloads")](https://www.npmjs.com/package/slackr)
[![NPM version](https://img.shields.io/npm/v/slackr.svg "NPM version")](https://www.npmjs.com/package/slackr)
[![Node version](https://img.shields.io/node/v/slackr.svg "Node version")](https://www.npmjs.com/package/slackr)
[![Dependency status](https://img.shields.io/david/Starefossen/node-slackr.svg "Dependency status")](https://david-dm.org/Starefossen/node-slackr)

Dependency free Slack notification messaging library for Node.js. Just put the
webhook URI into an environment variable and you are good to go! Send Slack
notifications like a boss 😎

## Install

```
$ npm install slackr --save
```

## Configure

Put your Slack webhook URI into the `SLACK_WEBHOOK_URI` environment variable.

## Usage

```js
const slackr = require('slackr');
```

### Simple

```js
slackr.string('This is my message').then(response => {
  console.log(response.code, response.body);
});
```

### Advanced

```js
const data = {
  title: 'This is my title',
  text: 'This is my message',
  attachments: [...],
};

slackr(data).then(response => {
  console.log(response.code, response.body);
});
```

## Message Formatting

* [Basic Formatting](https://api.slack.com/docs/message-formatting)
* [Message Attachments](https://api.slack.com/docs/message-attachments)

## [MIT Licensed](https://github.com/Starefossen/node-slackr/blob/master/LICENSE)
