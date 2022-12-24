import { useState } from "react"
import { Button } from "antd"
const UserInfo = ()=>{
    interface user{
        name?:string,
        age?:number,
    }
    const [currentUser,setCurrentUser] = useState<user>({})
    const a:user = {name:"张三丰",age:1111}
    console.log(a)
    return (<div>
        <div>当前用户：{currentUser.name||"暂无，请设置"}</div>
        <Button type="primary" onClick={()=>setCurrentUser(a)}>设置当前用户</Button>
    </div>)
}

export default UserInfo