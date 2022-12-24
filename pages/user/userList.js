import { Fragment,useState } from "react"
import { Button } from "antd"

const UserList = ()=>{
    const [userList,setUserList] = useState([])

    return (<Fragment>
        <div>
            {userList?.map(item=><div key={item}>{item}</div>)}
            <Button type="primary" onClick={()=>setUserList([...userList,userList?.length])}>新增</Button>
        </div>
    </Fragment>)
}
export default UserList