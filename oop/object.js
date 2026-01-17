import { User } from './class.js'

export class Result {
    run() {
        var user = new User("Nhen Chanrith", "nhenchanrithofficial@gmail.com");
        console.log(user.getInfo());
    }
}
