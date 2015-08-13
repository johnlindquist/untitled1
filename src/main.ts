import 'reflect-metadata'
import 'es6-shim'

import {Component, View, bootstrap} from "angular2/angular2";


@Component({
    selector: "app"
})
@View({
    template: `Hello world`
})
class App{}

bootstrap(App);

export default {};