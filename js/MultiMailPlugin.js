(function ($) {
    var result = [];
    $.fn.multiMailInput = function () {
        this.filter(".multiMail").each(function () {
            var input = $(this);
            input.css("position", "relative");
            input.css("margin-top", "20px");
            input.parent(".mmOuter").css("margin-top", "20px");
            input.attr("placeholder","Comma separated emails");
            input.keydown(function (event) {
                if (event.keyCode === 188 || event.keyCode === 13) {
                    event.preventDefault();
                    var raw = input.val();
                    var mail = raw.split(",")[0];
                    var condition = validateMail(mail, result)["condition"];
                    var msg = validateMail(mail, result)["msg"]
                    if (condition) {
                        input.siblings(".mmBoxes").append("<span class='mmBox'>" + mail + " <img class='deleteBox' width=10 src='image/delete.png' style='cursor: pointer; margin-left: 10px;'/></span>");
                        $.fn.multiMailInput.arrangeBoxCss(".mmBox");
                        $(".deleteBox").click(function(){
                            deleteMMBox(this);
                        });
                        
                        result.push(mail);
                        input.val("");
                    } else {
                        alert(msg);
                    }
                }
            });
        });

        return {
            getMails: function () {
                return result;
            }
        }
    };

    var defaults = {
    }

    function validateMail(mail, array) {
        // returns boolean after validating array of emails
        var msg = "";
        //Regex to test emails
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        condition = true;
        if (!re.test(mail)) {
            condition = false;
            msg = "Mail is not valid!";
        }
        if(array.indexOf(mail) !== -1){
            condition = false;
            msg += "Mail is already exist!";
        }
        return {
            "condition": condition,
            "msg": msg
        };
    }

    function deleteMMBox(elem) {
        var itemToDel = $(elem).parent(".mmBox").text().replace(/ /g,'');
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
    };

}(jQuery));