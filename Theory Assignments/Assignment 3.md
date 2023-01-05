## JSX

#### JSX is a new way for writing react components. It is syntax extension to javascript, used for better code readability. If you see the JSX, it reminds you of html and thats why in some blogs people used to say JSX as javascript inside the HTML.

## Can we use JSX as expression ?

#### The answer is yes, we can use jsx as expression. After the compilation, JSX expression becomes regular javascript function call and evaluate to JS objects, so in that case we can use jsx as given below in snippet. 

### We can also use attribute in JSX

```javascript
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```
 ```jsx
 // Attribute in JSX
 const element = <a href="https://www.reactjs.org"> link </a>;
 const element = <img src={user.avatarUrl}></img>;
 ```


 ```Java

 Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names.

For example, class becomes className in JSX, and tabindex becomes tabIndex.
 ```

 ## How our browser reads JSX ?
 #### Our browser can't read JSX directly, so for that we need a third party tool babel which helps our to transpile our JSX code to old javascript, so that it will render the things properly.

 #### According to the [babel docs](https://babeljs.io/docs/en/) Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. You can find some ['videos here'](https://babeljs.io/videos.html).

 ## Role of `type` attribute in Script tag? What option can i use there?

 #### The type attribute gives the language of the script or format of the data. If the attribute is present, its value must be a valid MIME type. The charset parameter must not be specified. The default, which is used if the attribute is absent, is "text/javascript".  

**Module**
#### This value causes the code to be treated as a JavaScript module. The processing of the script contents is deferred. The charset and defer attributes have no effect.
```html
<script type="module" src="main.js"></script> 
```
**Importmap**
#### This value indicates that the body of the element contains an import map. The import map is a JSON object that developers can use to control how the browser resolves module specifiers when importing module
```html
<script type="importmap">
  // JSON object defining import
</script
```

``` 
{Titlecomponent} vs {<Titlecomponent/>} vs {<Titlecomponent><Titlecomponent/>} 
```
```
{Titlecomponent} = add JS Expression inside JSX
{<Titlecomponent/>} = add component inside another component (composition of component)
{<Titlecomponent><Titlecomponent/>} = 
```