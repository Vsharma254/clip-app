export interface User{
    name:string;
    userName:string;
    email:string;
    type:number;
    id:number;
}
export interface UserState {
    users:User[]
}