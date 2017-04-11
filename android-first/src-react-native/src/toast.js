'use strict';
/**
 * This exposes the native ToastAndroid module as a JS module. This has a
 * function 'show' which takes the following parameters:
 *
 * 1. String message: A string with the text to toast
 * 2. int duration: The duration of the toast. May be ToastAndroid.SHORT or
 *    ToastAndroid.LONG
 */
import { NativeModules } from 'react-native';

console.log("NativeModules Toast")
console.log(NativeModules)
console.log(NativeModules.ToastAndroid)
console.log(NativeModules.MixiModule)


module.exports = NativeModules.ToastAndroid;
