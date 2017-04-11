'use strict';

import { NativeModules } from 'react-native';

console.log("NativeModules mixi.js")
console.log(NativeModules)
console.log(NativeModules.MixiModule)

module.exports = NativeModules.MixiModule;
