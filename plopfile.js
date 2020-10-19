const File = {
    INDEX: 'index.ts',
    TYPES: '{{componentName}}.types.ts',
    COMPONENT: '{{componentName}}.tsx',
    STORIES: '{{componentName}}.stories.tsx',
    STYLES: '{{componentName}}.pcss',
    ENUMS: '{{componentName}}.enums.ts',
};

const TemplateFile = {
    INDEX: 'component.index.ts',
    TYPES: 'component.types.ts',
    COMPONENT: 'component.tsx',
    STORIES: 'component.stories.tsx',
    STYLES: 'component.pcss',
    ENUMS: 'component.enums.ts',
}

const componentPath = 'src/components/{{componentName}}';
const plopTemplatesPath = 'tools/plop-templates';

const getComponentFilePath = (fileName) => `${componentPath}/${fileName}`;
const getTemplateFilePath = (templateName) => `${plopTemplatesPath}/${templateName}.hbs`;

module.exports = function (plop) {
    plop.setGenerator('component', {
        description: 'generate new component',
        prompts: [
            {
                type: 'input',
                name: 'componentName',
                message: 'Enter component name:',
            },
        ],
        actions: [
            {
                type: 'add',
                path: getComponentFilePath(File.INDEX),
                templateFile: getTemplateFilePath(TemplateFile.INDEX),
            },
            {
                type: 'add',
                path: getComponentFilePath(File.COMPONENT),
                templateFile: getTemplateFilePath(TemplateFile.COMPONENT),
            },
            {
                type: 'add',
                path: getComponentFilePath(File.TYPES),
                templateFile: getTemplateFilePath(TemplateFile.TYPES),
            },
            {
                type: 'add',
                path: getComponentFilePath(File.STYLES),
                templateFile: getTemplateFilePath(TemplateFile.STYLES),
            },
            {
                type: 'add',
                path: getComponentFilePath(File.STORIES),
                templateFile: getTemplateFilePath(TemplateFile.STORIES),
            },
            {
                type: 'add',
                path: getComponentFilePath(File.ENUMS),
                templateFile: getTemplateFilePath(TemplateFile.ENUMS),
            },
        ],
    });
};
