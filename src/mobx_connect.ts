import {HTMLAttributes} from "./micro_types";
import {Subscribable} from "rxjs";

interface Observable<T> {
    get(): T;
    foo(): string;
}

declare global {
    namespace Micro {

    }
}
