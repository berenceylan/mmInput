# mmInput
A JQuery plugin to take multiple mails from the user.

#Example

+ HTML

```
<div id="outer" class="mmOuter">
	<div id="boxes" class="mmBoxes"></div>
	<input id="mails" class="mmInput"/>
</div>
```

+ JS Initialization

```
var input1 = $(".mmInput").multiMailInput();
var mails = input1.getMails();
```