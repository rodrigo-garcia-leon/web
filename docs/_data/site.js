/* eslint-disable */
const { getRocketValues } = require('@d4kmor/cli');

const defaultValues = getRocketValues();

module.exports = {
  ...defaultValues,
  name: 'Modern Web',
  shortDesc: 'Modern Web offers the fundaments for a close to the browser modern web setup.',
  url: defaultValues.url,
  githubUrl: 'https://github.com/modernweb-dev/web',
  helpUrl: 'https://github.com/modernweb-dev/web/issues',
  logoAlt: 'Modern Web Logo',
};
