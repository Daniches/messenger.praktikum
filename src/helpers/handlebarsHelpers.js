import Handlebars from "handlebars";

Handlebars.registerHelper('parameter', function () {
    const positional = Array.from(arguments).slice(0, -1);
    const parameter = positional[0];
    const value = positional[1];
    const defaultValue = positional.length >= 3 ? positional[2] : undefined;

    let resolvedValue = null;
    if (value) {
      resolvedValue = value;
    }
    else if (defaultValue) {
      resolvedValue = defaultValue;
    }

    if (resolvedValue) {
        return new Handlebars.SafeString(
            `${Handlebars.escapeExpression(parameter)}='${Handlebars.escapeExpression(String(resolvedValue))}'`,
        );
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
