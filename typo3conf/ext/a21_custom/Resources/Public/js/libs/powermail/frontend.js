Brandung.DeferMainPlugins.then(function () {
	(function ($) {
		$(document).on('brandung.document.ready', function () {

			$.tools.validator.localize('en', {
				'*': Powermail.VALIDATOR_LABEL_PLEASE_CORRECT,
				'[required]': Powermail.VALIDATOR_LABEL_REQUIRED,
				':email': Powermail.VALIDATOR_LABEL_EMAIL,
				':url': Powermail.VALIDATOR_LABEL_URL,
				':number': Powermail.VALIDATOR_LABEL_NUMBER,
				':digits': Powermail.VALIDATOR_LABEL_DIGITS,
				':username': Powermail.VALIDATOR_LABEL_ALPHANUM,
				':date': Powermail.VALIDATOR_LABEL_DATE,
				':datetime': Powermail.VALIDATOR_LABEL_DATETIME,
				':time': Powermail.VALIDATOR_INVALIDTIME,
				'[max]': Powermail.VALIDATOR_LABEL_MAX,
				'[min]': Powermail.VALIDATOR_LABEL_MIN
			});

			$.tools.dateinput.localize('en', {
				'months': Powermail.VALIDATOR_DATEINPUT_MONTH,
				'shortMonths': Powermail.VALIDATOR_DATEINPUT_SHORTMONTH,
				'days': Powermail.VALIDATOR_DATEINPUT_DAYS,
				'shortDays': Powermail.VALIDATOR_DATEINPUT_SHORTDAYS
			});

			// TODO something breaks the input style and function here by removing type="date"
//			$(':date').dateinput({
//				format: Powermail.VALIDATOR_DATEINPUT_FORMAT,
//				firstDay: parseInt(Powermail.VALIDATOR_DATEINPUT_FIRSTDAY),
//				selectors: true,
//				disabled: false,
//				readonly: false,
//				yearRange: [-99, 99],
//				change: function (event, date) {
//					var y = parseInt(this.getValue('yyyy'));
//					var m = parseInt(this.getValue('m')) - 1;
//					var d = parseInt(this.getValue('d'));
//					var timestampOfDate = new Date(y, m, d).getTime() / 1000;
//					var timezoneOffset = new Date(y, m, d).getTimezoneOffset() * 60;
//					timestampOfDate -= timezoneOffset;
//					var oldTimestamp = this.getInput().nextAll('input[type=hidden]').val();
//					if (this.getInput().nextAll('input[type=time]').length > 0 && oldTimestamp != '' && parseInt(oldTimestamp) == oldTimestamp) {
//						var oldDate = new Date(oldTimestamp * 1000);
//						var hours = parseInt(oldDate.getUTCHours());
//						var minutes = parseInt(oldDate.getUTCMinutes());
//						timestampOfDate += parseInt(hours * 3600 + minutes * 60);
//					}
//					this.getInput().next('input[type=hidden]').val(timestampOfDate);
//				}
//			}).each(function (i) {
//				var initTimestamp = $(this).next('input[type=hidden]').val();
//				if (initTimestamp != '' && parseInt(initTimestamp) == initTimestamp) {
//					var initDatetime = new Date(parseInt(initTimestamp) * 1000);
//					var year = initDatetime.getUTCFullYear();
//					var month = initDatetime.getUTCMonth();
//					var day = initDatetime.getUTCDate();
//					$(this).data('dateinput').setValue(year, month, day);
//				}
//			});

			$.tools.validator.fn('input:checkbox',
				function (input, value) {
					checkboxes = input.parent().parent().find('input:checkbox');
					if (checkboxes.filter('.required_one').length > 0) {
						if (checkboxes.filter(':checked').length == 0) {
							return (input.filter('.required_one').length == 0) ? true : Powermail.VALIDATOR_LABEL_ONE_REQUIRED;
						} else {
							powermail_validator.data('validator').reset(checkboxes);
						}
					}
					return true;
				}
			);

			// initialize range input
			$(':range').rangeinput();

			$('.tx_powermail_pi1_form input:checkbox').click(function () {
				$(this).parent().parent().find('input:checkbox').blur();
				var checkid = $(this).attr('id');
				var valueid = checkid.replace(/check_/, 'value_');
				var targetid = checkid.replace(/check_/, '');
				$('#' + targetid).val($(this).is(':checked') ? $('#' + valueid).val() : '');
			});

			// time validation
			$.tools.validator.fn('input[type=time]', Powermail.VALIDATOR_LABEL_REQUIRED,
				function (input, value) {
					if (!/^\d\d:\d\d$/.test(value)) {
						return false;
					} else {
						var time = value.split(':');
						var hour = parseInt(time[0]);
						var minute = parseInt(time[1]);
						if (hour > 23 || hour < 0 || minute > 59 || minute < 0) {
							return false;
						}
						if (input.prevAll('input.powermail_datetime').length > 0) {
							var oldDate = new Date(input.prev('input').val() * 1000);
							var year = oldDate.getUTCFullYear();
							var month = oldDate.getUTCMonth();
							var day = oldDate.getUTCDate();
							var secondsToAdd = hour * 3600 + minute * 60;
							var timestamp = (new Date(year, month, day, hour, minute, 0).getTime() / 1000);
							var timezoneOffset = new Date(year, month, day, hour, minute, 0).getTimezoneOffset() * 60;
							input.prev('input').val(timestamp - timezoneOffset);
						}
						return true;
					}
				}
			);

			// validate time fields
			$('input[type=time]').addClass('powermail_time').each(function (i) {
				// check if part of datetime field
				if ($(this).prevAll('input.powermail_datetime').length > 0) {
					if ($(this).prev('input').val() != '') {
						var newDate = new Date(parseInt($(this).prev('input').val() * 1000));
						var h = parseInt(newDate.getUTCHours());
						var m = parseInt(newDate.getUTCMinutes());
						h = (h < 10) ? '0' + h : h;
						m = (m < 10) ? '0' + m : m;
						$(this).val(h + ':' + m);
					} else {
						$(this).attr('placeholder', '00:00');
					}
				}
			});

			// select validation
			$.tools.validator.fn('select', '',
				function (el, value) {
					if (el.attr('multiple')) {
						return value != null ? true : Powermail.VALIDATOR_LABEL_ONE_REQUIRED;
					} else {
						return value.length > 0 ? true : '';
					}
				}
			);

			if (!Powermail.VALIDATOR_DISABLE) {
				powermail_validator = $('.tx_powermail_pi1_form').validator({
					position: 'top right',
					offset: [-5, -20],
					message: '<div><em/></div>',
					inputEvent: 'blur',
					grouped: true,
					singleError: false,
					formEvent: 'submit',
					onBeforeValidate: function (e, els) {
						clearPlaceholderValue(e, els);
					},
					onBeforeFail: function (e, els, matcher) {
						setPlaceholderValue(e, els, matcher);
					}
				});
			}

			var fakeTextarea = document.createElement('textarea'),
				textareaMaxlengthSupport = ('maxlength' in fakeTextarea);

			if (!textareaMaxlengthSupport) {
				$('textarea[maxlength]').each(function () {
					$(this).bind('keypress blur', function () {
						$(this).val($(this).val().substr(0, $(this).attr('maxlength')));
					});
				});
			}

			// add placeholder attribute behavior in web browsers that don't support it
			var fakeInput = document.createElement('input'),
				placeHolderSupport = ('placeholder' in fakeInput);
			clearPlaceholderValues = function () {
				if (!placeHolderSupport) {
					$('input:text, textarea').each(function (i) {
						if ($(this).val() === $(this).attr('placeholder')) {
							$(this).val('');
						}
					});
				}
			};

			clearPlaceholderValue = function (e, els) {
				if (!placeHolderSupport) {
					$(this).removeClass('placeholder');
					if (els.val() === els.attr('placeholder')) {
						els.val('');
					}
				}
			};

			setPlaceholderValue = function (e, els, matcher) {
				if (!placeHolderSupport) {
					if (els.val().length === 0 && e.keyCode != 9 && els.attr('placeholder') != undefined) {
						els.val(els.attr('placeholder'));
						els.addClass('placeholder');
					}
				}
			};

			if (!placeHolderSupport) {
				$('input:text, textarea').each(function (i) {
					if ($(this).val().length === 0) {
						var originalText = $(this).attr('placeholder');
						$(this).val(originalText);
						$(this).addClass('placeholder');
						$(this).bind('focus', function (i) {
							$(this).removeClass('placeholder');
							if ($(this).val() === $(this).attr('placeholder')) {
								$(this).val('');
							}
						});
					}
				});
				// empties the placeholder text at form submit if it hasn't changed
				$('form').bind('submit', function () {
					clearPlaceholderValues();
				});

				// clear at window reload to avoid it stored in autocomplete
				$(window).bind('unload', function () {
					clearPlaceholderValues();
				});
			}

			// add tabs to fieldsets for multiple page
			$('ul.powermail_multiplejs_tabs li a:first').addClass('act'); // first tab with class "act"
			if ($.ui && typeof($.ui.tabs) == 'function') {
				// Add UI tabs
				$('.powermail_multiple_js .powermail_multiplejs_tabs_item a').each(function (id, item) {
					var temp = item.href.split('#');
					var temp_last = temp[temp.length - 1];
					var search = /^tx\-powermail\-pi1\_fieldset/;
					if (search.test(temp_last)) {
						item.href = '#' + temp_last;
					}
				});
				$('.powermail_multiple_js').tabs(); // enable UI tabs()
			} else {
				// add TOOLS tabs
				$('ul.powermail_multiplejs_tabs').tabs('div.fieldsets > fieldset');
			}
			$('ul.powermail_multiplejs_tabs li a').click(function () { // change "act" on click
				$('ul.powermail_multiplejs_tabs li a').removeClass('act');
				$(this).addClass('act');
				// reset error messages if js validation is enabled
				if (!Powermail.VALIDATOR_DISABLE) {
					$(this).parent().parent().find('a').not('.current').each(function (id, item) {
						var temp = item.href.split('#');
						var resetSelector = $('#' + temp[temp.length - 1] + ' :input');
						powermail_validator.data('validator').reset(resetSelector);
					});
				}
			});
		});
	})(jQuery);
}, Brandung.errorHandler);