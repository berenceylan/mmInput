# MultiMailInput

A JQuery plugin to take multiple mails from the user.

## Example Usage

### HTML

```
<div id="outer" class="mmOuter">
	<div id="boxes" class="mmBoxes"></div>
	<input id="mails" class="multiMail"/>
</div>
```

### JS Initialization

```
var input1 = $(".multiMail").multiMailInput();
var mails = input1.getMails();
```

### Inner Functions

#### Dynamic add (single)

```
//@param mail - Mail string
//addMail(mail)

input1.addMail("mail1@mail.com");
```

#### Dynamic add (array)

```
//@param mailArray - An array containing mails
//addMailArray(mailArray)

input1.addMailArray(["mail1@mail.com", "mail2@mail.org", "mail3@mail.co", "mail4@mail.co.uk"]);
```

#### Dynamic add (CSV)

```
//@param mailString - CSV string 
//@param delimeter - Comma for csv 
//addMailCSV(mailString, delimeter)

input1.addMailCSV("mail1@mail.com,mail2@mail.org,mail3@mail.co,mail4@mail.co.uk", ",");
```

## Tips

* You can separate mails by "," or enter.
* Mails are validated by regex.
* Can be manipulated dynamically.

##P.S.

* If you see any mistake please do not hesitate to open an issue. 
* Any merge request would be appreciated.

## Result

![alt tag](http://image.prntscr.com/image/d8a9d701fe7d4020b474a2ec376d7158.png)