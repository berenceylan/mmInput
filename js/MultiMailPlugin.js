(function ($) {
    var result = [];
    var input;
    $.fn.multiMailInput = function () {
        var $this = this;
        $this.addMail = function (mail, elem) {
            var condition = validateMail(mail, result)["condition"];
            var msg = validateMail(mail, result)["msg"];
            if(condition){
                elem.siblings(".mmBoxes").append("<span class='mmBox' style='height: 17px; vertical-align: center; width: 300px;'>" + mail + " <img class='deleteBox' width=16 src='image/delete.png' style='cursor: pointer; float: right;'/></span>");
                $.fn.multiMailInput.arrangeBoxCss(".mmBox");
                result.push(mail);
                input.val("");
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
                
        this.filter(".multiMail").each(function () {
            input = $(this);
            input.css("position", "relative");
            input.css("margin-top", "10px");
            input.css("margin-left", "10px");
            input.parent(".mmOuter").css("margin-top", "20px");
            input.attr("placeholder", "Comma separated emails");
            input.keydown(function (event) {
                if (event.keyCode === 188 || event.keyCode === 13) {
                    event.preventDefault();
                    var raw = input.val();
                    var mail = raw.split(",")[0];
                    $this.addMail(mail, input);
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
            }
        };
    };

    var defaults = {
    };

    function validateMail(mail, array) {
        // returns boolean after validating array of emails
        var msg = "";
        //Regex to test emails
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        condition = true;
        if (!re.test(mail)) {
            condition = false;
            msg = "\""+ mail + "\" is not valid!";
        }
        if (array.indexOf(mail) !== -1) {
            condition = false;
            msg += "\""+ mail + "\" is already exist!";
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
    }

    $.fn.multiMailInput.arrangeBoxCss = function (elem) {
        e = $(elem);
        e.css("margin", "10px");
        e.css("padding", "5px");
        e.css("border", "1px solid #B9B9B9");
        e.css("border-radius", "2px");
        e.css("background-color", "#F5F5F5");
        e.css("color", "black");
        e.css("display", "block");
        e.css("display", "block");
    };

}(jQuery));