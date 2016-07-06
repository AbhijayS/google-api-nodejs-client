/**
 * Copyright 2015 Google Inc. All Rights Reserved.
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

/* jshint maxlen: false */

'use strict';

var createAPIRequest = require('../../lib/apirequest');

/**
 * Google App Engine Admin API
 *
 * Provisions and manages App Engine applications.
 *
 * @example
 * var google = require('googleapis');
 * var appengine = google.appengine('v1');
 *
 * @namespace appengine
 * @type {Function}
 * @version v1
 * @variation v1
 * @param {object=} options Options for Appengine
 */
function Appengine(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.apps = {

    /**
     * appengine.apps.get
     *
     * @desc Gets information about an application.
     *
     * @alias appengine.apps.get
     * @memberOf! appengine(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.appsId Part of `name`. The name of the Application resource to get. For example: "apps/myapp".
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://appengine.googleapis.com/v1/apps/{appsId}',
          method: 'GET'
        },
        params: params,
        requiredParams: ['appsId'],
        pathParams: ['appsId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * appengine.apps.repair
     *
     * @desc Ensures that all special features required for App Engine, such as the appspot bucket and appengine robot, exist for this project.
     *
     * @alias appengine.apps.repair
     * @memberOf! appengine(v1)
     *
     * @param {object} params Parameters for request
     * @param {string} params.appsId Part of `name`. Name of the application to repair. For example: "apps/myapp".
     * @param {object} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    repair: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://appengine.googleapis.com/v1/apps/{appsId}:repair',
          method: 'POST'
        },
        params: params,
        requiredParams: ['appsId'],
        pathParams: ['appsId'],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    operations: {

      /**
       * appengine.apps.operations.get
       *
       * @desc Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
       *
       * @alias appengine.apps.operations.get
       * @memberOf! appengine(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.appsId Part of `name`. The name of the operation resource.
       * @param {string} params.operationsId Part of `name`. See documentation of `appsId`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://appengine.googleapis.com/v1/apps/{appsId}/operations/{operationsId}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['appsId', 'operationsId'],
          pathParams: ['appsId', 'operationsId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * appengine.apps.operations.list
       *
       * @desc Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding below allows API services to override the binding to use different resource name schemes, such as `users/x/operations`.
       *
       * @alias appengine.apps.operations.list
       * @memberOf! appengine(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.appsId Part of `name`. The name of the operation collection.
       * @param {string=} params.filter The standard list filter.
       * @param {integer=} params.pageSize The standard list page size.
       * @param {string=} params.pageToken The standard list page token.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://appengine.googleapis.com/v1/apps/{appsId}/operations',
            method: 'GET'
          },
          params: params,
          requiredParams: ['appsId'],
          pathParams: ['appsId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    },

    services: {

      /**
       * appengine.apps.services.list
       *
       * @desc Lists all the services in the application.
       *
       * @alias appengine.apps.services.list
       * @memberOf! appengine(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.appsId Part of `parent`. Name of the parent Application resource. For example: "apps/myapp".
       * @param {integer=} params.pageSize Maximum results to return per page.
       * @param {string=} params.pageToken Continuation token for fetching the next page of results.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      list: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://appengine.googleapis.com/v1/apps/{appsId}/services',
            method: 'GET'
          },
          params: params,
          requiredParams: ['appsId'],
          pathParams: ['appsId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * appengine.apps.services.get
       *
       * @desc Gets the current configuration of the specified service.
       *
       * @alias appengine.apps.services.get
       * @memberOf! appengine(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.appsId Part of `name`. Name of the resource requested. For example: "apps/myapp/services/default".
       * @param {string} params.servicesId Part of `name`. See documentation of `appsId`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      get: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://appengine.googleapis.com/v1/apps/{appsId}/services/{servicesId}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['appsId', 'servicesId'],
          pathParams: ['appsId', 'servicesId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * appengine.apps.services.patch
       *
       * @desc Updates the configuration of the specified service.
       *
       * @alias appengine.apps.services.patch
       * @memberOf! appengine(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.appsId Part of `name`. Name of the resource to update. For example: "apps/myapp/services/default".
       * @param {string} params.servicesId Part of `name`. See documentation of `appsId`.
       * @param {string=} params.updateMask Standard field mask for the set of fields to be updated.
       * @param {boolean=} params.migrateTraffic Whether to use traffic migration to shift traffic gradually. Traffic can only be migrated from a single version to another single version. More information is available in the documentation for traffic migration: https://cloud.google.com/appengine/docs/python/migrating-traffic
       * @param {object} params.resource Request body data
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      patch: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://appengine.googleapis.com/v1/apps/{appsId}/services/{servicesId}',
            method: 'PATCH'
          },
          params: params,
          requiredParams: ['appsId', 'servicesId'],
          pathParams: ['appsId', 'servicesId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * appengine.apps.services.delete
       *
       * @desc Deletes the specified service and all enclosed versions.
       *
       * @alias appengine.apps.services.delete
       * @memberOf! appengine(v1)
       *
       * @param {object} params Parameters for request
       * @param {string} params.appsId Part of `name`. Name of the resource requested. For example: "apps/myapp/services/default".
       * @param {string} params.servicesId Part of `name`. See documentation of `appsId`.
       * @param {callback} callback The callback that handles the response.
       * @return {object} Request object
       */
      delete: function (params, callback) {
        var parameters = {
          options: {
            url: 'https://appengine.googleapis.com/v1/apps/{appsId}/services/{servicesId}',
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['appsId', 'servicesId'],
          pathParams: ['appsId', 'servicesId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      versions: {

        /**
         * appengine.apps.services.versions.list
         *
         * @desc Lists the versions of a service.
         *
         * @alias appengine.apps.services.versions.list
         * @memberOf! appengine(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.appsId Part of `parent`. Name of the parent resource to list versions on. For example: "apps/myapp/services/default".
         * @param {string} params.servicesId Part of `parent`. See documentation of `appsId`.
         * @param {string=} params.view Controls the set of fields returned in the `List` response.
         * @param {integer=} params.pageSize Maximum results to return per page.
         * @param {string=} params.pageToken Continuation token for fetching the next page of results.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://appengine.googleapis.com/v1/apps/{appsId}/services/{servicesId}/versions',
              method: 'GET'
            },
            params: params,
            requiredParams: ['appsId', 'servicesId'],
            pathParams: ['appsId', 'servicesId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * appengine.apps.services.versions.get
         *
         * @desc Gets the specified Version resource. By default, only a BASIC_VIEW will be returned. Please specify the FULL_VIEW parameter to get the full resource.
         *
         * @alias appengine.apps.services.versions.get
         * @memberOf! appengine(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.appsId Part of `name`. Name of the resource requested. For example: "apps/myapp/services/default/versions/v1".
         * @param {string} params.servicesId Part of `name`. See documentation of `appsId`.
         * @param {string} params.versionsId Part of `name`. See documentation of `appsId`.
         * @param {string=} params.view Controls the set of fields returned in the `Get` response.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://appengine.googleapis.com/v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}',
              method: 'GET'
            },
            params: params,
            requiredParams: ['appsId', 'servicesId', 'versionsId'],
            pathParams: ['appsId', 'servicesId', 'versionsId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * appengine.apps.services.versions.create
         *
         * @desc Deploys code and resource files to a new version.
         *
         * @alias appengine.apps.services.versions.create
         * @memberOf! appengine(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.appsId Part of `parent`. Name of the parent resource to create this version under. For example: "apps/myapp/services/default".
         * @param {string} params.servicesId Part of `parent`. See documentation of `appsId`.
         * @param {object} params.resource Request body data
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://appengine.googleapis.com/v1/apps/{appsId}/services/{servicesId}/versions',
              method: 'POST'
            },
            params: params,
            requiredParams: ['appsId', 'servicesId'],
            pathParams: ['appsId', 'servicesId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * appengine.apps.services.versions.patch
         *
         * @desc Updates the specified Version resource. You can specify the following fields depending on the App Engine environment and type of scaling that the version resource uses: * [`serving_status`](/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.serving_status): For Version resources that use basic scaling, manual scaling, or run in the App Engine flexible environment. * [`instance_class`](/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.instance_class): For Version resources that run in the App Engine standard environment. * [`automatic_scaling.min_idle_instances`](/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling): For Version resources that use automatic scaling and run in the App Engine standard environment. * [`automatic_scaling.max_idle_instances`](/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling): For Version resources that use automatic scaling and run in the App Engine standard environment.
         *
         * @alias appengine.apps.services.versions.patch
         * @memberOf! appengine(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.appsId Part of `name`. Name of the resource to update. For example: "apps/myapp/services/default/versions/1".
         * @param {string} params.servicesId Part of `name`. See documentation of `appsId`.
         * @param {string} params.versionsId Part of `name`. See documentation of `appsId`.
         * @param {string=} params.updateMask Standard field mask for the set of fields to be updated.
         * @param {object} params.resource Request body data
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://appengine.googleapis.com/v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}',
              method: 'PATCH'
            },
            params: params,
            requiredParams: ['appsId', 'servicesId', 'versionsId'],
            pathParams: ['appsId', 'servicesId', 'versionsId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * appengine.apps.services.versions.delete
         *
         * @desc Deletes an existing Version resource.
         *
         * @alias appengine.apps.services.versions.delete
         * @memberOf! appengine(v1)
         *
         * @param {object} params Parameters for request
         * @param {string} params.appsId Part of `name`. Name of the resource requested. For example: "apps/myapp/services/default/versions/v1".
         * @param {string} params.servicesId Part of `name`. See documentation of `appsId`.
         * @param {string} params.versionsId Part of `name`. See documentation of `appsId`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete: function (params, callback) {
          var parameters = {
            options: {
              url: 'https://appengine.googleapis.com/v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}',
              method: 'DELETE'
            },
            params: params,
            requiredParams: ['appsId', 'servicesId', 'versionsId'],
            pathParams: ['appsId', 'servicesId', 'versionsId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        instances: {

          /**
           * appengine.apps.services.versions.instances.list
           *
           * @desc Lists the instances of a version.
           *
           * @alias appengine.apps.services.versions.instances.list
           * @memberOf! appengine(v1)
           *
           * @param {object} params Parameters for request
           * @param {string} params.appsId Part of `parent`. Name of the parent Version resource to list instances for. For example: "apps/myapp/services/default/versions/v1".
           * @param {string} params.servicesId Part of `parent`. See documentation of `appsId`.
           * @param {string} params.versionsId Part of `parent`. See documentation of `appsId`.
           * @param {integer=} params.pageSize Maximum results to return per page.
           * @param {string=} params.pageToken Continuation token for fetching the next page of results.
           * @param {callback} callback The callback that handles the response.
           * @return {object} Request object
           */
          list: function (params, callback) {
            var parameters = {
              options: {
                url: 'https://appengine.googleapis.com/v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances',
                method: 'GET'
              },
              params: params,
              requiredParams: ['appsId', 'servicesId', 'versionsId'],
              pathParams: ['appsId', 'servicesId', 'versionsId'],
              context: self
            };

            return createAPIRequest(parameters, callback);
          }
        }
      }
    }
  };
}

module.exports = Appengine;