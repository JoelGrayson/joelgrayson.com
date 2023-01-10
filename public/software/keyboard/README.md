# Simple Vanilla JS Keyboard
## Quickstart
1. Add `<script src='https://w.joelgrayson.com/keyboard/v1.min.js'></script>` script tag in HTML document.
2. An element with class `trigger-keyboard` will open the keyboard when clicked.

## Demo
```html
<!DOCTYPE html>
<html lang='en'>
  <head>
    <title>Virtual keyboard</title>
  </head>
  <body>
    <h3>Click below to open the keyboard</h3>
    <textarea class='trigger-keyboard'></textarea>
    <script src='https://w.joelgrayson.com/keyboard/v1.min.js'></script>
  </body>
</html>
```
Check out a demo at https://w.joelgrayson.com/keyboard/demo-v1.html.

### Documentation
* Use `keyboard.enabled=false` to disable and `keyboard.enabled=true` to re-enable the keyboard.


## Attribution
Forked from https://www.cssscript.com/virtual-keyboard-desktop/ with alterations by me.