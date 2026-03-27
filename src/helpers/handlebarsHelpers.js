import Handlebars from "handlebars";

Handlebars.registerHelper('parameter', function (parameter, value, options) {
    if (value) {
        return new Handlebars.SafeString(`${Handlebars.escapeExpression(parameter)}='${Handlebars.escapeExpression(value)}'`);
    }
    return '';
});

Handlebars.registerHelper('default', function (parameter, value, options) {
    if (parameter) {
        return parameter
    }
    return value;
});

Handlebars.registerHelper('ifCond', function(v1, v2, options) {
  if(v1 === v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});

Handlebars.registerHelper('ifArray', function(value, options) {
  if (Array.isArray(value)) {
    return options.fn(this);
  } else {
    return options.inverse(this);
  }
});
