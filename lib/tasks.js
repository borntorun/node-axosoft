var api = require('./api');
var utilities = require('./utilities');

var Tasks = {

	/**
	 * Returns a list of items
	 *
	 * @param		integer		task_id			ID of required task
	 * @param		object		options			Filtering and flag options to retrieve tasks
	 * @param		function	callback		Callback function
	 *
	 * @return		void
	 */
	get: function () {
		var params = utilities.processArgs(arguments);

		api.handleRestRequest('get', '/tasks' + params.id, params.options, params.callback);
	},


	/**
	 * Retrieves a list of attachments of an item
	 *
	 * @param		integer		task_id			ID of required task
	 * @param		function	callback		Callback function
	 *
	 * @return		void
	 */
	getAttachments: function (task_id, callback) {
		api.handleRestRequest('get', '/tasks/' + task_id + '/attachments', null, callback);
	},


	/**
	 * Retrieves a list of email messages for an item.
	 *
	 * @param		integer		task_id			ID of required task
	 * @param		function	callback		Callback function
	 *
	 * @return		void
	 */
	getEmails: function (task_id, callback) {
		api.handleRestRequest('get', '/tasks/' + task_id + '/emails', null, callback);
	},


	/**
	 * Adds  an item
	 *
	 * @param		object		task_data		Data for new tasks
	 * @param		function	callback		Callback function
	 *
	 * @return		void
	 */
	add: function (task_data, callback) {
		api.handleRestRequest('postJson', '/tasks', task_data, callback);
	},


	/**
	 * Updates an item
	 *
	 * @param		integer		task_id			ID of required task
	 * @param		object		task_data		Data for updated task
	 * @param		function	callback		Callback function
	 *
	 * @return		void
	 */
	update: function (task_id, task_data, callback) {
		api.handleRestRequest('postJson', '/tasks/' + task_id + '', task_data, callback);
	},


	/**
	 * Adds one or more attachments to an item
	 *
	 * @param		integer		task_id			ID of required task
	 * @param		object		task_data		Data for new attachment
	 * @param		function	callback		Callback function
	 *
	 * @return		void
	 */
	addAttachments: function (task_id, task_data, callback) {
		api.handleRestRequest('postJson', '/tasks/' + task_id + '/attachments', task_data, callback);
	},


	/**
	 * Adds a change notification for the item
	 *
	 * @param		integer		task_id			ID of required task
	 * @param		object		task_data		Data for new notification
	 * @param		function	callback		Callback function
	 *
	 * @return		void
	 */
	addNotifications: function (task_id, task_data, callback) {
		api.handleRestRequest('postJson', '/tasks/' + task_id + '/notifications', task_data, callback);
	},


	/**
	 * Delete a task
	 *
	 * @param		integer		task_id			ID of required task
	 * @param		function	callback		Callback function
	 *
	 * @return		void
	 */
	delete: function (task_id, callback) {
		api.handleRestRequest('delete', '/tasks/' + task_id + '', null, callback);
	}
};

module.exports = Tasks;
