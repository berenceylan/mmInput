(function ($) {
    var result = [];
    var input;
    var hiddeninput;
    var defaults;
    $.fn.multiMailInput = function (options) {
        var $this = this;
        defaults = {
            imageDir: "",
            validation_error: "is not valid!",
            duplicate_error: "is already exist!",
            placeholder: "Press enter or tab to add e-mails"
        };
        
        //Initializing options
        if(typeof options !== "undefined"){
            if(typeof options.imageDir !== "undefined"){
                defaults.imageDir = options.imageDir;
            }
            if(typeof options.validation_error !== "undefined"){
                defaults.validation_error = options.validation_error;
            }
            if(typeof options.duplicate_error !== "undefined"){
                defaults.duplicate_error = options.duplicate_error;
            }
            if(typeof options.placeholder !== "undefined"){
                defaults.placeholder = options.placeholder;
            }
        }
        
        $this.addMail = function (mail, elem) {
            var condition = validateMail(mail, result)["condition"];
            var msg = validateMail(mail, result)["msg"];
            
            if(condition){
                elem.siblings(".mmBoxes").append("<span class='mmBox' style='height: 35px; vertical-align: center;'>" + mail + " <img class='deleteBox' width=16 src='"+defaults.imageDir+"/js/MultiMail/image/delete.png' style='cursor: pointer; margin: 5px; float: right;'/></span>");
                $.fn.multiMailInput.arrangeBoxCss(".mmBox");
                result.push(mail);
                input.val("");
                hiddeninput.val($this.getMailsCSV());
                $(".deleteBox").click(function () {
                    deleteMMBox(this);
                });
            }else{
               alert(msg)
            }
            
        },
        $this.addMailsArray = function (mailArray, elem) {
            for (var i in mailArray) {
                $this.addMail(mailArray[i],elem);
            }
        },
        $this.addMailsCsv = function (mailString, delimeter, elem) {
            var mailArray = mailString.split(delimeter);
            for (var i in mailArray) {
                $this.addMail(mailArray[i],elem);
            }
        },
        $this.getMailsCSV = function () {
            var CSV = "";
            for (var i in result) {
                CSV += result[i];
                //If it is not the last item add comma
                if(i != result.length-1){
                     CSV += ",";
                }
            }
            return CSV;
        },
        this.filter(".multiMail").each(function () {
            input = $(this);
            hiddeninput = input.siblings("input");
            hiddeninput.css("display", "none");
            input.css("position", "relative");
            input.css("margin-top", "20px");
            input.css("margin-right", "5px");
            input.parent(".mmOuter").css("margin-top", "20px");
            input.attr("placeholder", defaults.placeholder);
            input.keydown(function (event) {
                if (event.keyCode === 188 || event.keyCode === 13 || event.keyCode === 9) {
                    event.preventDefault();
                    var raw = input.val();
                    var mails = raw.split(",");
                    
                    for (var i in mails){
                        if(typeof mails[i] !== "undefined")
                            $this.addMail(mails[i], input);
                    }
                }
            });
        });

        return {
            getMails: function () {
                return result;
            },
            addMail: function(mail){
                $this.addMail(mail, input);
            },
            addMailArray: function(array){
                $this.addMailsArray(array, input);
            },
            addMailCSV: function(mailString, delimeter){
                $this.addMailsCsv(mailString, delimeter, input);
            },
            getMailsCSV: function(){
                return $this.getMailsCSV();
            }
        };
    };

    

    function validateMail(mail, array) {
        // returns boolean and a message after validating array of emails
        var msg = "";
        //Regex to test emails
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        condition = true;
        if (!re.test(mail)) {
            condition = false;
            msg = "\""+ mail + "\"" + defaults.validation_error;
        }
        if (array.indexOf(mail) !== -1) {
            condition = false;
            msg += "\""+ mail + "\"" + defaults.duplicate_error;
        }
        return {
            "condition": condition,
            "msg": msg
        };
    }

    function deleteMMBox(elem) {
        var itemToDel = $(elem).parent(".mmBox").text().replace(/ /g, '');
        while (result.indexOf(itemToDel) !== -1) {
            result.splice(result.indexOf(itemToDel), 1);
        }
        $(elem).parent(".mmBox").remove();
        hiddeninput.val($.fn.multiMailInput().getMailsCSV());
    }

    $.fn.multiMailInput.arrangeBoxCss = function (elem) {
        e = $(elem);
        e.css("padding", "5px");
        e.css("margin-top", "5px");
        e.css("border", "1px solid #B9B9B9");
        e.css("border-radius", "2px");
        e.css("background-color", "#F5F5F5");
        e.css("color", "black");
        e.css("display", "block");
    };

}(jQuery));
