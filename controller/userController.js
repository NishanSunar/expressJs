import { usersList } from "../model/userModel.js";

export function handleUsers(req, resp){
    const userData = usersList();
    resp.render('user',{users:userData});
}