export type Rejester={
    username:string,
    email:string,
    password:string,
    isAdmin?:boolean
}
export type login={
  email:string,
  password:string
}
export type logout={
  email:string,
}
export type JWTT={
    id:number
    username:string,
  isAdmin:boolean
}
export type update={
  username:string,
  email:string,
  password:string
}