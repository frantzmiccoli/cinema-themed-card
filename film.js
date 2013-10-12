;(function() {

    var FilmController = function() {
        this._init = function() {
            this._fillTemplate();

            this._$lateralBars = $('.film-lateral-bar');
            this._$film = $('#film');
            this._updateSquares();
        };

        this._fillTemplate = function() {
            var body = $("body"),
                source   = body.html(),
                template = Handlebars.compile(source),
                filledBody = template(context);

            body.html(filledBody);
        };

        this._updateSquares = function() {
            var objectRef = this,
                added = undefined;

            this._$lateralBars.each(function() {
                added = objectRef._adaptBarSize($(this), added);
            });
        };

        this._adaptBarSize = function($bar) {
            $bar.empty();
            if (typeof(added) !== 'undefined') {
                for (var i = 0; i < added; i++) {
                    this._addSquare($bar);
                }
                return added;
            }
            added = 0;
            wishedHeight = this._$film.height();
            console.log($bar.height(), wishedHeight);
            while ($bar.height() < wishedHeight) {
                this._addSquare($bar);
                added += 1;
            }
            return added;
        };

        this._addSquare = function($bar) {
            var $square = $('<div></div>');
            $square.addClass('film-small-square');
            $bar.append($square);
        }

        this._init();
    };

    $(document).ready(function() {
        setTimeout(function() {
            new FilmController();
        }, 1000);
    });
})();