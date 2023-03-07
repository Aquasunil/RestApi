import { v4 as uuidv4 } from 'uuid';
let users = [];

export const getUsers = (req,res)=>{
  res.send(users);
}
export const createUser = (req,res)=>{
  const user = req.body;
  users.push({...user,id:uuidv4()});
  res.send(`User with Name: ${user.name} added to Users`);
}
export const getUserById =(req,res)=>{
  const {id} = req.params;
  const user = users.find((user)=> user.id===id)
  res.send(user)
}
export const deleteUser = (req,res)=>{
  const {id} = req.params;
  users = users.filter((user)=>!(user.id===id)) 
  res.send(`user with id: ${id} is deleted`)
}
export const updateUser =(req,res)=>{
  const {id} = req.params;
  const {name,lastName,age} = req.body;
  const user = users.find((user)=>(user.id===id))
  
  if(name)  user.name=name;
  if(lastName)  user.lastName=lastName;
  if(age) user.age=age;
  
  res.send(`user with id: ${id} is Updated`)
}