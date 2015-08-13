//config file for SystemJS stuff
System.config({
    transpiler: 'typescript',
    typescriptOptions: {
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true
    },
    map: {
        typescript: 'typescript.js',
        'angular2/angular2': 'angular2.dev.js',
        rx: 'rx.all.js'
    },
    paths: {
        app: 'src'
    },
    packages: {
        app: {
            main: 'main.ts',
            defaultExtension: 'ts'
        }
    }
})