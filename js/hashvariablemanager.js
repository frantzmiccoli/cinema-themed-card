;(function() {
    var HashVariableManager = function() {
        this.variableToHash = function(variable, pushToUrl) {
            if (typeof(pushToUrl) == 'undefined') {
                pushToUrl = true;
            }
            var variableAsString = JSON.stringify(variable),
                hashCompatibleString = encodeURIComponent(variableAsString);
            if (variableAsString) {
                window.location.hash = hashCompatibleString;
            }
            return variableAsString;
        };

        this.loadVariableFromHash = function() {
            var hashString = window.location.hash;
            if (hashString.indexOf('#') === 0) {
                hashString = hashString.replace('#', '');
            }
            var variableAsString = decodeURIComponent(hashString),
                variable = $.parseJSON(variableAsString);
            return variable;
        };
    };

    window.hashVariableManager = new HashVariableManager();
})();