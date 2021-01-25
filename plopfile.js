module.exports = function (plop) {
  // controller generator
  plop.setGenerator("fonk", {
    description: "Fonksiyonel Component Use State Olmadan",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component Adı Giriniz.",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{name}}/{{name}}.jsx",
        templateFile: "plop-templates/components/funcComp.hbs",
      },
      {
        type: "add",
        path: "src/components/{{name}}/{{name}}.scss",
        templateFile: "plop-templates/styles/compstyle.hbs",
      },
    ],
  });
  plop.setGenerator("fonkstate", {
    description: "Fonksiyonel Component Use State İle",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component Adı Giriniz.",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{name}}/{{name}}.jsx",
        templateFile: "plop-templates/components/funcCompUseState.hbs",
      },
      {
        type: "add",
        path: "src/components/{{name}}/{{name}}.scss",
        templateFile: "plop-templates/styles/compstyle.hbs",
      },
    ],
  });

  plop.setGenerator("class", {
    description: "Class Component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component Adı Giriniz.",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{name}}/{{name}}.jsx",
        templateFile: "plop-templates/components/ClassComp.hbs",
      },
      {
        type: "add",
        path: "src/components/{{name}}/{{name}}.scss",
        templateFile: "plop-templates/styles/compstyle.hbs",
      },
    ],
  });
};
