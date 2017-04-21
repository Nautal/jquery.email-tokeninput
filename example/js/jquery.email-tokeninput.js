(function($) {
  $.fn.mailToken = function(options) {

    var component = null;
    var textarea = null;
    var input = null;
    var list = null;

    var settings = {
        name : 'emailtoken',
        regex: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    };

    /**
     * Initialize the email token input
     */
    function init(e)
    {
        component = $(e);
        component.addClass('mt-container');
        addTextarea();
        addInput();
        addList();
        component.append('<div style="clear:both;"></div>');
    }

    /**
     * Add a textarea to contain the json data to be sent with the form
     */
    function addTextarea()
    {
        var element = $('<textarea/>',{
            'style': 'display:none;',
            'name': settings.name
        });
        component.append(element);
        textarea = component.find('textarea');
    }

    /**
     * Be a good developer!
     */
    function addList()
    {
        var element = $('<ul/>',{
            'class': 'mt-ul'
        });
        component.prepend(element);
        list = component.find(element);
    }

    /**
     * Be a good developer!
     */
    function addTokenToList()
    {
        if( addTokenGuard() )
        {
            inputError();
            return;
        }

        var element = $('<li/>',{
            'class': 'mt-token',
            html: input.val()
        });
        list.append(element);
        clearInput();
    }

    /**
     * Be a good developer!
     */
    function addTokenGuard()
    {
        if(input.val() == '' || input.val() == undefined)
            return true;

        // If the value already exists in the list then dont add it
        var dirty = false;
        list.children('li').each(function() {
            if($(this).html() == input.val())
                dirty = true;
        });

        return dirty;
    }

    /**
     * Be a good developer!
     */
    function checkRegex() {
        var text = input.val();
        return text.match(settings.regex);
    }

    /**
     * Add a input field to "mock" inputting new tokens
     */
    function addInput()
    {
        var element = $('<input/>', {
            'style' : 'display:none;',
            'name': settings.name + '-input',
            'data-autosize-input': '{ "space" : 0}',
            blur: function() {
                hideIfUndefined($(this));
            }
        });
        component.append(element);
        input = component.find('input');
    }

    /**
     * Hide a given element if its undefined or an empty string
     */
    function hideIfUndefined(e)
    {
        if(e.val() == '' || e.val == undefined)
        {
            e.hide();
        }
    }

    /**
     * Register handlers for clicks and keyboard input
     */
    function registerHandlers()
    {
        component.click(showInput);
        component.click(function(){
            list.children('li').removeClass('mt-selected');
        });
        input.on('keydown',inputKeydown);
        document.getElementById('mailtoken').addEventListener("keydown", documentKeydown);  //or however you are calling your method

    }

    /**
     * Be a good developer!
     */
    function documentKeydown(e)
    {
        // Enter or space bar or comma
        if(e.keyCode == 13 || e.keyCode == 32 || e.keyCode == 188)
        {
            documentKeydownEnter(e);
        }
        // Backspace
        if(e.keyCode == 8)
        {
            if( ! input.is(':visible') )
            {
                list.children('li:last').addClass('mt-selected');
                $('.mt-selected').remove();
            }
        }
        // Escape
        if(e.keyCode == 27)
        {
            input.val('');
            input.hide();
            list.children('li').removeClass('mt-selected');
        }
        // Right arrow
        if(e.keyCode == 39)
        {
            if( ! input.is(':visible') )
            {
                input.show();
                input.focus();
                list.children('li').removeClass('mt-selected');
            }
        }
    }

    function documentKeydownEnter(e)
    {
        if(input.is(':visible'))
        {
            e.preventDefault();
        }

        if(input.is(':visible') && ! input.is(':focus') )
        {
            inputError();
            input.focus();
        }
    }

    /**
     * Be a good developer!
     */
    function inputKeydown(e)
    {
        // Pressing enter or space bar or comma while focused on input
        if(e.keyCode == 13 || e.keyCode == 32 || e.keyCode == 188)
        {
            inputKeydownEnter();
        }

        // Pressing backspace while focused on input
        if(e.keyCode == 8)
        {
            hideIfUndefined(input);
        }
    }

    /**
     * Be a good developer!
     */
    function inputKeydownEnter()
    {
        if(checkRegex())
        {
            inputClearError();
            addTokenToList();
            updateTextarea();
            return;
        }
        inputError();
    }

    /**
     * Be a good developer!
     */
    function inputError()
    {
        input.addClass('mt-error');
    }

    /**
     * Be a good developer!
     */
    function inputClearError()
    {
        input.removeClass('mt-error');
    }

    /**
     * Show an empty token input
     */
    function showInput()
    {
        input.show();
        input.focus();
    }

    /**
     * Be a good developer!
     */
    function clearInput()
    {
        input.val('');
    }

    /**
     * Be a good developer!
     */
    function updateTextarea()
    {
        var JSONstring = JSON.stringify(parseTokens());
        textarea.val(JSONstring);
    }

    /**
     * Be a good developer!
     */
    function parseTokens()
    {
        var arr = [];
        list.children('li').each(function () {
            arr.push( $(this).html() );
        });
        return arr;
    }

    return this.each(function () {
        init(this);
        registerHandlers();
    });

  };
})(jQuery);
