/**
 * @fileoverview Common validate methods
 * @author douzi <liaowei08@gmail.com> 
 */
/**
 * @description
 * word [\w\.-]
 * server [\w\-]+\.
 * suffix [\w]{2, 4}
 */
function isEmail(value) {
  var reg = /^[\w\.-]+@(?:[\w\-]+\.)+\w{2,4}$/;

  return reg.test(value);
}

/**
 * @description
 * 0-255: [01]\d\d?|2[0-4]\d|25[0-5]
 */
function isIP(value) {
  var reg = /^(?:([01]?\d\d?|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d\d?|2[0-4]\d|25[0-5])$/;
  
  return reg.test(value);
}

/**
 * @description
 * protocol (ftp|https?)
 * hostname [-\w]+(\.\w[-\w]*)
 * port :\d+
 * path \/.*
 */
function isUrl(value) {
  var reg = /^(ftp|https?):\/\/[-\w]+(\.\w[-\w]*)+(:\d+)?(\/.*)?$/;

  return reg.test(value);
}

exports.isEmail = isEmail;

exports.isIP = isIP;

exports.isUrl = isUrl;