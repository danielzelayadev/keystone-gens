const keystone = require('acklen-keystone');
const schema = require('./{{properCase name}}Schema')();
const { saveVersion } = require('../../helpers/model-common');

const modelName = '{{properCase name}}';

const {{properCase name}} = new keystone.List(modelName, {});

{{properCase name}}.add(schema);

{{properCase name}}.schema.pre('save', function (next) { next(); });

{{properCase name}}.schema.post('save', saveVersion(modelName, schema));

{{properCase name}}.defaultColumns = '{{modelDefaultColumns}}';
{{properCase name}}.register();

module.exports = {{properCase name}};
