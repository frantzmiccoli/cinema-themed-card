;(function() {

    if (typeof(window.context) == "undefined") {
        try {
            // we try to load the variable from the url
            window.context = hashVariableManager.loadVariableFromHash();
        } catch(error) {
            // this is what you context variable should look like
            window.context = {
                clap_title: "Cinema greeting card",
                clap_paragraph_1: "HTML5 + CSS3 + three lines of JS" +
                ", the code is not clean but it's clear enough to let you customize.",
                clap_paragraph_2: "",
                clap_label_1: "What",
                clap_value_1: "Greeting card",
                clap_label_2: "HTML",
                clap_value_2: "&CSS3",
                clap_label_3: "JQuery",
                clap_value_3: "&handlebars",

                film_label: 'With real chunk of film inside',
                film_pic_url: 'http://www.atomicarchive.com/Effects/Images/WE12.jpg'
            };
        }
    }

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