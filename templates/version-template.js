const keystone = require('acklen-keystone');
const schema = require('./{{properCase name}}Schema');
const { versionSchemaFor } = require('../../helpers/model-common');

const modelName = '{{properCase name}}';

const {{properCase name}}Versions = new keystone.List(`${modelName}Versions`, {});

{{properCase name}}Versions.add(versionSchemaFor(modelName, schema));

{{properCase name}}Versions.schema.pre('save', next => { next(); });

{{properCase name}}Versions.defaultColumn = '{{versionDefaultColumns}}';
{{properCase name}}Versions.register();

module.exports = {{properCase name}}Versions;
