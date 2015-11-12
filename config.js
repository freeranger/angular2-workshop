System.config({
    baseURL: "/",
    format: 'es6',
    defaultJSExtensions: true,
    transpiler: "typescript",
    typescriptOptions: {
        "emitDecoratorMetadata": true
    },
    packages: {
        "app": {
            defaultExtension: 'ts',
            format: 'es6'
        },
        "examples": {
            defaultExtension: 'ts',
            format: 'es6'
        },
        "reference-examples": {
            defaultExtension: 'ts',
            format: 'es6'
        }
    }
});
