# MultiMailInput

A JQuery plugin to take multiple mails from the user.

![alt tag](http://image.prntscr.com/image/9a4d78e7d4e44c6cabff704c4524b542.png)

## #Update 1

* Settings can be manipulated via parameters.
* Comma separated mails can be entered at once. 
* A hidden input is added so that send the data in a form component.
* Minor bug fix & CSS issues

## Example Usage

### HTML

```
<div id="outer" class="mmOuter">
	<input id="input" class="form-control multiMail"/>
	<input id="mails" name="mails" class="multiMailResult"/>
	<div id="boxes" class="mmBoxes"></div>
</div>
```

### JS Initialization

* With default settings:
```
var input1 = $(".multiMail").multiMailInput();
var mails = input1.getMails();
```

* With custom settings:
```
var input1 = $(".multiMail").multiMailInput({
	imageDir: "/images",
	validation_error: "is not valid!",
	duplicate_error: "is already exist!",
	placeholder: "Press comma or tab to add e-mails"
});
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

#### Get Mails as CSV

```
// Returns a CSV string

input1.getMailsCSV();
```

## Tips

* You can separate mails by "," or tab button.
* Mails are validated by regex.
* Can be manipulated dynamically.

## P.S.

* If you see any mistake please do not hesitate to open an issue. 
* Any merge request would be appreciated.
