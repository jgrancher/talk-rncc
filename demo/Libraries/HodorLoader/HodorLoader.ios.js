/**
 * @providesModule HodorLoader
 * @flow
 */
'use strict';

var NativeHodorLoader = require('NativeModules').HodorLoader;

/**
 * High-level docs for the HodorLoader iOS API can be written here.
 */

var HodorLoader = {
  test: function() {
    NativeHodorLoader.test();
  },

  play: function(sound) {
    // Checking if sound has been provided, otherwise play the default main theme
    var toPlay = sound || 'got-main-theme';
    NativeHodorLoader.playSound(sound);
  },

  stop: function() {
    NativeHodorLoader.stopSound();
  }
};

module.exports = HodorLoader;
