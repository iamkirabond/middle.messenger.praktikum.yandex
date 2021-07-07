window.blockTemplate = (function() {
    return `
  <!-- Можно {{}} с пробелами, можно без-->
  <div class="{{ className }}">
      <span onClick="{{ handleClick }}">{{text}}</span>
      <span>{{ user.info.firstName }}</span>
  </div>
  `;
  })(); 
let tmpl = (function() {
    return `
  <div class="{{ className }}">
      <span onClick="{{ handleClick }}">{{text}}</span>
      <span>{{ user.info.firstName }}</span>
  </div>
  `;
  })(); 


function get(obj, path) {
    const keys = path.split('.');

    let result = obj;
    for (let key of keys) {
      const value = result[key];

      if (!value) {
        return undefined;        
      }

      result = value;
    }

    return result;
}; 
