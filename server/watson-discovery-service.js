/**
 * Copyright 2017 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License'); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

const Promise = require('bluebird');
const DiscoveryV1 = require('watson-developer-cloud/discovery/v1');

var discovery;
const version_date = '2018-03-05';
if (process.env.service_watson_discovery !== undefined) {
  var service_watson_discovery = JSON.parse(process.env.service_watson_discovery);
  discovery = new DiscoveryV1({
    iam_apikey: '<iam_api_key>',
    url: service_watson_discovery['url'],
  //  username: service_watson_discovery['username'],
  //  password: service_watson_discovery['password'],
    version_date: version_date
  });
} else {
  discovery = new DiscoveryV1({
    version_date: version_date
  });
}

discovery.environmentId = 'system';
discovery.collectionId = 'news';

discovery.listEnvironments = Promise.promisify(discovery.listEnvironments);
discovery.query = Promise.promisify(discovery.query);

module.exports = discovery;
