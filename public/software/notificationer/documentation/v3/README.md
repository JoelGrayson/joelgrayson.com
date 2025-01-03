# Notificationer V3 <button><a href='https://joelgrayson.com/software/notificationer'>Select Other Version</a></button>
> Easily notify your users from client-side JavaScript. It's as simple as `nf.notify()`

## Quick Start
Add the following script to your HTML file **before** your own script tag(s):
```html
<script src='https://joelgrayson.com/software/notificationer/notificationer-v3.js'></script>
```
Notificationer is now imported in the object `notificationer` or `nf` for short. To notify, call `nf.notify()` as many times as you want. Check out the full documentation for more functionality.
```html
<script src='https://joelgrayson.com/software/notificationer/notificationer-v3.js'></script>
<script>
	nf.notify('Hello world');
	nf.notify('Success', 'lightgreen');
	nf.notify('Confirmation required <button>confirm</button>', 'red');
</script>
```
Result: <img alt='result' src='https://joelgrayson.com/image/software/notificationer/quick start 2.jpg' height='100px'>

## Full Documentation
### Properties
The following properties can be set using `nf.property=newValue`.

* `nf.direction: string` is the corner notifications show up in ('top-left', 'top-right', 'bottom-left', 'bottom-right'). (default: 'bottom-right')
	```js
	nf.direction='top-left';
	nf.notify('I am in the top left');
	```
* `nf.autoclose: boolean` determines whether or not notifications close on their own. (default: true)
	```js
	nf.autoclose=false;
	nf.notify('I will not close unless someone clicks (x)');
	```
* `nf.autocloseDuration: float` can be set to the duration before notifications autoclose. (default: 6)
	```js
	nf.autocloseDuration=15;
	nf.notify('I will close in 15 seconds');
	```

### Methods
* `nf.notify(contentHTML: string, color?: string)`
	* contentHTML is the notification's content.
	* color: string can be any css color (eg `'red'`, `'#ff0000'`, `'rgba(255, 0, 0)'`, or `'hsl(0, 100%, 50%)'`)
	* returns the notification's id for future referencing
* `nf.close(id: string)` closes the notification with the passed-in id (example in demos section)
	```js
	let errorNotificationId=nf.notify('Error', 'red'); //store notification id
	nf.close(errorNotificationId); //close notification
	```
* `nf.closeAll()` closes all the notifications
* `nf.destroy()` removes notificationer scripts and styles


## Interactive Sandbox
Try the code sandbox at https://joelgrayson.com/software/notificationer/sandbox/v3.html.

<iframe src='https://joelgrayson.com/software/notificationer/sandbox/v3.html' style='width: 80vw; height: 60vh'></iframe>