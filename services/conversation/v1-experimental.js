/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var extend         = require('extend');
var requestFactory = require('../../lib/requestwrapper');

/**
 *
 * @param options
 * @constructor
 */
function Conversation(options) {
    
  // Check if 'version_date' was provided
  if (typeof options.version_date === 'undefined') {
    throw new Error('Argument error: version_date was not specified, use 2016-01-24');
  }

  // Default URL
  var serviceDefaults = {
    url: 'https://gateway.watsonplatform.net/conversation-experimental/api',
    qs: {
      version: options.version_date
    }
  };

  // Replace default options with user provided
  this._options = extend(serviceDefaults, options);
}

Conversation.prototype.workspaces = function(params, callback) {
  params = params || {};

  var parameters = {
    options: {
      url: '/v1/workspaces/',
      method: 'GET',
      json: true,
      qs: pick(params, ['export'])
    },
    defaultOptions: this._options
  };
  return requestFactory(parameters, callback);
};

Conversation.prototype.createWorkspace = function(params, callback) {
  params = params || {};

  var parameters = {
    options: {
      url: '/v1/workspaces/',
      method: 'POST',
      json: true,
      body: pick(params, ['name', 'description', 'language', 'metadata'])
    },
    defaultOptions: this._options
  };
  return requestFactory(parameters, callback);
};


Conversation.prototype.deleteWorkspace;
Conversation.prototype.getWorkspace;
Conversation.prototype.updateWorkspace;
Conversation.prototype.message;

module.exports = Dialog;
