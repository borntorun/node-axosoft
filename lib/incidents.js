var api = require('./api');
var utilities = require('./utilities');

var Incidents = {

		/**
		 * Returns a list of items
		 *
		 * @param		integer		incident_id			ID of required incident
		 * @param		object		options				Filtering and flag options to retrieve incidents
		 * @param		function	callback			Callback function
		 *
		 * @return		void
		 */
		get: function () {
			var params = utilities.processArgs(arguments);

			api.handleRestRequest('get', '/incidents' + params.id, params.options, params.callback);
		},


		/**
		 * Retrieves a list of attachments of an item
		 *
		 * @param		integer		incident_id			ID of required incident
		 * @param		function	callback			Callback function
		 *
		 * @return		void
		 */
		getAttachments: function (incident_id, callback) {
			api.handleRestRequest('get', '/incidents/' + incident_id + '/attachments', null, callback);
		},


		/**
		 * Retrieves a list of email messages for an item.
		 *
		 * @param		integer		incident_id			ID of required incident
		 * @param		function	callback			Callback function
		 *
		 * @return		void
		 */
		getEmails: function (incident_id, callback) {
			api.handleRestRequest('get', '/incidents/' + incident_id + '/emails', null, callback);
		},




		/**
		 * Adds  an item
		 *
		 * @param		object		incident_data		Data for new incident
		 * @param		function	callback			Callback function
		 *
		 * @return		void
		 */
		add: function (incident_data, callback) {
			api.handleRestRequest('postJson', '/incidents', incident_data, callback);
		},


		/**
		 * Updates an item
		 *
		 * @param		integer		incident_id			ID of required incident
		 * @param		object		incident_data		New data for an incident
		 * @param		function	callback			Callback function
		 *
		 * @return		void
		 */
		update: function (incident_id, incident_data, callback) {
			api.handleRestRequest('postJson', '/incidents/' + incident_id + '', incident_data, callback);
		},


		/**
		 * Adds one or more attachments to an item
		 *
		 * @param		integer		incident_id			ID of required incident
		 * @param		object		incident_data		Data for new attachement
		 * @param		function	callback			Callback function
		 *
		 * @return		void
		 */
		addAttachments: function (incident_id, incident_data, callback) {
			api.handleRestRequest('postJson', '/incidents/' + incident_id + '/attachments', incident_data, callback);
		},


		/**
		 * Adds a change notification for the item
		 *
		 * @param		integer		incident_id			ID of required incident
		 * @param		object		incident_data		Data for new Notification
		 * @param		function	callback			Callback function
		 *
		 * @return		void
		 */
		addNotifications: function (incident_id, incident_data, callback) {
			api.handleRestRequest('postJson', '/incidents/' + incident_id + '/notifications', incident_data, callback);
		},


		/**
		 * {Custom comment here}
		 *
		 * @param		integer		incident_id			ID of required incident
		 * @param		function	callback			Callback function
		 *
		 * @return		void
		 */
		delete: function (incident_id, callback) {
			api.handleRestRequest('delete', '/incidents/' + incident_id + '', null, callback);
		}

};

module.exports = Incidents;
