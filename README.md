### Why this plugin was originaly created
I was building a laravel sass application where an account creator needed to be able to invite his/her team members by easily adding email addresses in a auto-expanding tokeninput field. I didn't feel like other solutions fit my use case, so I built this plugin.

### Why @juandiegoles modify it
This plugin is awesome but i need to separeate emails not only using the enter key, it also needs to separate the emails with the space bar or the comma
Aso, no more autosize ^_^

### Installation
Download the zip and get the files from the `dist` folder

or use bower
```javascript
bower install jquery-email-tokeninput-alt
```
Optionally you can use bower-installer to place the files correctly, just run `bower-installer`
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
This is the (new) format the server receives
```javascript
[
    "user1@faker.com",
    "user2@faker.com",
    "user3@faker.com"
]
```

### Known issues
* Plugin breaks if more than one instance of emailtoken on the page

### Support or Contact
Having trouble with this package? or found a bug? create a [new issue](https://github.com/olde86/jquery.email-tokeninput/issues/new) on Github or [contact me](http://www.oldenborg.nu) through my website and I’ll help you sort it out.
