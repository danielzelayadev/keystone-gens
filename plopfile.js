require('dotenv').config();

const modelGen = {
  description: 'This generates a chilli-sauce keystone model.',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is the model name?',
      validate: value => (value.length > 0 ? true : `${name} is required.`)
    },
    {
      type: 'input',
      name: 'modelDefaultColumns',
      message: "What are the model's default columns?",
      default: ''
    },
    {
      type: 'input',
      name: 'versionDefaultColumns',
      message: "What are the version's default columns?",
      default: ''
    }
  ],
  actions: data => {
    const actions = [];
    const modelPath = `${process.env.BACKEND || '.'}/models/${data.name}`;

    actions.push({
      type: 'add',
      path: `${modelPath}/${data.name}.js`,
      templateFile: `./templates/model-template.js`
    });

    actions.push({
      type: 'add',
      path: `${modelPath}/${data.name}Versions.js`,
      templateFile: `./templates/version-template.js`
    });

    actions.push({
      type: 'add',
      path: `${modelPath}/${data.name}Schema.js`,
      templateFile: `./templates/schema-template.js`
    });

    return actions;
  }
};

module.exports = plop => {
  plop.setGenerator('Model Generator', modelGen);
};
