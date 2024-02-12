#!/usr/bin/env node

import webRunner from './runners/web.js';

const run = async () => {
  await webRunner();
}

run();