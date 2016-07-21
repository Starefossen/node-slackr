'use strict';

const http = require('https');
const url = require('url');

module.exports = obj => new Promise((resolve, reject) => {
  const uri = module.exports.conf.uri;
  const data = JSON.stringify(obj);

  const opts = Object.assign(url.parse(uri), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(data),
    },
  });

  const req = http.request(opts, (res) => {
    const chunks = [];

    res.on('data', chunks.push.bind(chunks));
    res.on('end', () => {
      resolve({
        code: res.statusCode,
        body: Buffer.concat(chunks).toString('utf8'),
      });
    });
  });

  req.on('error', reject);

  req.write(data);
  req.end();
});

module.exports.conf = {
  uri: process.env.SLACK_WEBHOOK_URI,
};
