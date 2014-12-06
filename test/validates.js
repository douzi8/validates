var validates = require('../index');
var assert = require('assert');

describe('validates', function() {
  it('isIP', function() {
    assert.equal(true, validates.isIP('255.32.18.10'));
    assert.equal(true, validates.isIP('01.56.180.1'));
    assert.equal(false, validates.isIP('25.32.18.300'));
    assert.equal(false, validates.isIP('2.32.18.'));
  });

  it('isEmail', function() {
    assert.equal(true, validates.isEmail('liaowei08@gmail.com'));
    assert.equal(true, validates.isEmail('liaowei-08@126.cn.com'));
    assert.equal(true, validates.isEmail('383299975@qq.cn.com'));
    assert.equal(false, validates.isEmail('liaowei08@gmail.c'));
  });

  it('isUrl', function() {
    assert.equal(true, validates.isUrl('http://ctrip.com'));
    assert.equal(true, validates.isUrl('https://accounts.google.com/SignUp?%2Fmail&hl=zh-CN'));
    assert.equal(true, validates.isUrl('ftp://ctrip.com/path'));
  });
});