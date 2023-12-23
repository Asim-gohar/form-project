import students from "@/app/page"
import { error } from "console";
 
export type studentsType = {
    name: string ;
    gender: string ;
    physics: number ;
    maths: number ;
    english: number ;
}
export type ButtonProps = {
    title : string;
    onClickHandler: ()=>void;
}
export type formDataType = {
    name: string ;
    email : string ;
    phone: number,
    message: string,
    address: string,
    subject: string,
    company: string,
    jobTitle: string,
    website: string,
    additionalInfo: string,
}
export type handleChangeType = {
    target: {value:string , name:string}
}
export type errorType = {
    error : string[] ,
    
    
}
