export class Part{

    id!:number; //!face ca id sa fie obligatoriul, il cere ca parametru
    name!:string;
    price!:number;
    tags?:string[];
    favorite:boolean = false;
    stars:number = 0;
    imgUrl!:string;

}