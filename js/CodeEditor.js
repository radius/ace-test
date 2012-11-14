var CodeEditor = function() {
	var _editor;
	var _defaults = {
		language: 'javascript',
		theme: 'dawn',
		showPrintMargin: false,
		fadeFoldWidgets: true
	};

	var _init = function(element, options) {
		if(options) {
			$.extend(_defaults, options);
		}

		_editor = ace.edit("editor");
		_editor.setTheme("ace/theme/" + _defaults.theme);
		_editor.getSession().setMode("ace/mode/" + _defaults.language);
		_editor.setShowPrintMargin(_defaults.showPrintMargin);
		_editor.setFadeFoldWidgets(_defaults.fadeFoldWidgets);
		return this;
	};

	var _getCode = function() {
		return _editor.getValue();
	};

	var _setCode = function(code) {
		_editor.setValue(code);
		_editor.clearSelection();
		return this;
	};

	return {
		init: _init,
		getCode: _getCode,
		setCode: _setCode
	}
}();