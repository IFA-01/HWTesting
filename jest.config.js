export default {
  testEnvironment: 'jsdom',
  transform: {}
};

import { TextEncoder } from 'util';
global.TextEncoder = TextEncoder;