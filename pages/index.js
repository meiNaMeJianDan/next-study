// import {Link} from "react-router"
import Link from "next/link"

const Home = ()=>{
    return (<div>
        能直接用React?
    <Link href="/test">去test页面</Link>    
    </div>)
}
export default Home