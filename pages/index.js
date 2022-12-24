// import {Link} from "react-router"
import Link from "next/link"

const Home = ()=>{
    return (<div> 
        能直接用React? 
    <Link href="/test">去test页面</Link>    
    <Link href="/user/userList">去userList页面</Link>    
    <Link href={{ pathname: '/user/userInfo', query: { username: "张三" } }}>
        去学生信息页
    </Link>
    </div>)
}
export default Home