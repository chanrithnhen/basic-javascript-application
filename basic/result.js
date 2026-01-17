import { variable } from './variable.js';
import { datatypes } from './datatypes.js';
import { operators } from './operators.js';
import { conversion } from './conversion.js';
import { object } from './object.js';

export function run() {
    variable();
    datatypes();
    operators();
    conversion();
    object();
}
