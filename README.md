[Live demo on JSFiddle](https://jsfiddle.net/1hsz9bnj/4/)

### Why this plugin was originaly created
I was building a laravel sass application where an account creator needed to be able to invite his/her team members by easily adding email addresses in a auto-expanding tokeninput field. I didn't feel like other solutions fit my use case, so I built this plugin.

### Why @juandiegoles modify it
This plugin is awesome but i need to separeate emails not only using the enter key, it also needs to separate the emails with the space bar or the comma

### Dependencies
This plugin relies on [jquery.autosize.input](https://github.com/MartinF/jQuery.Autosize.Input) made by [Github user Martin F](https://github.com/MartinF) so remember to include this (it's included in this repository).

### Installation
Download the zip and get the files from the `dist` folder

or use bower
```javascript
bower install jquery-email-tokeninput_alt
```
Optionally you can use bower-installer to place the files correctly, just run `bower-installer`

 

### Usage
Include `autosize` and `email-tokeninput` and the CSS file in your HTML
```hmtl
<script src="jquery.autosize.min.js" charset="utf-8"></script>
<script src="jquery.email-tokeninput.js" charset="utf-8"></script>
<link rel="stylesheet" href="email-tokeninput.css" charset="utf-8">
```

Add an empty `div` with a class to your HTML  

```html
<div class="mailtoken"></div>
```

Call mailtoken on the empty div
```html
<script type="text/javascript">
    $('.mailtoken').mailToken();
</script>
```

### What gets sent to the server
Getting the value in (php)
```php
$emails = json_decode($_POST['emailtoken']);
```
This is the format the server receives
```javascript
[
    { "email" : "user1@faker.com" },
    { "email" : "user2@faker.com" },
    { "email" : "user3@faker.com" }
]
```

### Known issues
* Plugin breaks if more than one instance of emailtoken on the page

### Support or Contact
Having trouble with this package? or found a bug? create a [new issue](https://github.com/olde86/jquery.email-tokeninput/issues/new) on Github or [contact me](http://www.oldenborg.nu) through my website and I’ll help you sort it out.
