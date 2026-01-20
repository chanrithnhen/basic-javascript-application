import { variable } from './variable.js';
import { datatypes } from './datatypes.js';
import { operators } from './operators.js';
import { conversion } from './conversion.js';
import { comparison } from './comparison.js';
import { logical } from './logical.js';
import { conditional } from './conditional.js';
import { loop } from './loop.js';
import { object } from './object.js';

export function run() {
    variable();
    datatypes();
    operators();
    conversion();
    comparison();
    logical();
    conditional();
    loop();
    object();
}
