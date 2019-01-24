import {poll} from "./poll";
export class Petition {

    constructor(
        public id:number ,
        public title : string,
        public description: string,
        public polls: poll[]
    )
    {

    }
}