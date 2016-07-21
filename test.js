'use strict';

const slackr = require('.');
const assert = require('assert');

describe('slackr', () => {
  describe('()', () => {
    it('posts simple text message', done => {
      const obj = { text: 'slackr(): posts simple text message' };

      slackr(obj).then(res => process.nextTick(() => {
        assert.deepEqual(res, { code: 200, body: 'ok' });
        done();
      })).catch(done);
    });

    it('posts message with attachment', done => {
      const obj = {
        text: 'slackr(): posts message with attachment',
        attachments: [{
          fallback: 'ReferenceError - Something: https://foo.com/bar/123/',
          text: '<https://foo.com/bar/123|ReferenceError> - Something',
          fields: [{
            title: 'Project',
            value: 'Awesome Project',
            short: true,
          }, {
            title: 'Environment',
            value: 'production',
            short: true,
          }],
          color: '#F35A00',
        }],
      };

      slackr(obj).then(res => process.nextTick(() => {
        assert.deepEqual(res, { code: 200, body: 'ok' });
        done();
      })).catch(done);
    });

    it('posts message with buttons', done => {
      const obj = {
        text: 'slackr(): posts message with buttons',
        attachments: [{
          fallback: 'Approval request to Foo Bar: https://foo.com/bar',
          title: 'Approval request',
          text: 'Your approval is requested to <https://foo.com/bar|Foo Bar>',
          callback_id: 'foo_1234_xyz',
          color: '#3AA3E3',
          attachment_type: 'default',
          actions: [{
            name: 'approve',
            text: 'Approve',
            type: 'button',
            style: 'primary',
            value: 'approve',
          }, {
            name: 'reject',
            text: 'Reject',
            type: 'button',
            value: 'reject',
          }],
        }],
      };

      slackr(obj).then(res => process.nextTick(() => {
        assert.deepEqual(res, { code: 200, body: 'ok' });
        done();
      })).catch(done);
    });
  });
});
