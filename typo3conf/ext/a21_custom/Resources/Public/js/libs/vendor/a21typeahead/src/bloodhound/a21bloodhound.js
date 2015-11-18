/**
 * artplan21-typeahead.js
 * @copyright © 2015 @artplan[21] GmbH - webconcepts & solutions
 * @author Stephan Jorek <stephan.jorek@artplan21.de>
 */

var A21Bloodhound = (function($) {
	'use strict';

	var s = window.Bloodhound.prototype;

	function A21Bloodhound(o) {
		window.Bloodhound.apply(this, [].slice.call(arguments, 0));
		this.indexRemote = o.indexRemote;
	}

	$.extend(A21Bloodhound.prototype, s, {

		// overrides
		// ---------

		search: function search(query, sync, async) {
			var that = this, local;

			local = this.sorter(this.index.search(query));

			// return a copy to guarantee no changes within this scope
			// as this array will get used when processing the remote results
			sync(this.remote ? local.slice() : local);

			if (this.remote && local.length < this.sufficient) {
				this.remote.get(query, processRemote);
			}

			else if (this.remote) {
				// #149: prevents outdated rate-limited requests from being sent
				this.remote.cancelLastRequest();
			}

			return this;

			function processRemote(remote) {
				var localNonDuplicates = [], remoteNonDuplicates = [];

				// exclude duplicates
				_each(remote, function(r) {
					!_some(local, function(l) {
						return that.identify(r) === that.identify(l);
					}) && localNonDuplicates.push(r);
				});

				// index remote response
				if (that.indexRemote) {
					that.index.add(localNonDuplicates);
					remoteNonDuplicates = that.index.search(query);
					localNonDuplicates = [];

					// exclude duplicates againts local index again
					_each(remoteNonDuplicates, function(r) {
						!_some(local, function(l) {
							return that.identify(r) === that.identify(l);
						}) && localNonDuplicates.push(r);
					});

				}

				async && async(localNonDuplicates);
			}
		}

	});

	// taken from typeahead.js/src/common/utils.js
	function _each(collection, cb) {
		// stupid argument order for jQuery.each
		$.each(collection, reverseArgs);

		function reverseArgs(index, value) { return cb(value, index); }
	};

	// taken from typeahead.js/src/common/utils.js
	function _some(obj, test) {
		var result = false;

		if (!obj) { return result; }

		$.each(obj, function(key, val) {
			if (result = test.call(null, val, key, obj)) {
				return false;
			}
		});

		return !!result;
	};

	return A21Bloodhound;
})(jQuery);
