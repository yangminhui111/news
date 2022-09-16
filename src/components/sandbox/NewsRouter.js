import { HashRouter,Switch,Route } from "react-router-dom";
import Nopermission from "../../views/sandbox/nopermission/Nopermission";
import Audit from "../../views/sandbox/audit-manage/Audit";
import AuditList from "../../views/sandbox/audit-manage/AuditList";
import Home from '../../views/sandbox/home/Home'
import Published from "../../views/sandbox/publish-manage/Published";
import Sunset from "../../views/sandbox/publish-manage/Sunset";
import Unpublished from "../../views/sandbox/publish-manage/Unpublished";
import RightList from "../../views/sandbox/right-manage/RightList";
import RoleList from "../../views/sandbox/right-manage/RoleList";
import { useEffect,useState } from "react";
import axios from "axios";
const LocalRouterMap = {
    "/home": Home,
    "/right-manage/role/list": RoleList,
    "/right-manage/right/list": RightList,
    "/audit-manage/audit": Audit,
    "/audit-manage/list": AuditList,
    "/publish-manage/unpublished": Unpublished,
    "/publish-manage/published": Published,
    "/publish-manage/sunset": Sunset
}
const NewsRouter = () => {
    const [backRouteList, setBackRouteList] = useState([])
    useEffect(() => {
        Promise.all([
            axios.get("http://localhost:5000/rights"),
            axios.get("http://localhost:5000/children")
        ]).then(res => {
            setBackRouteList([...res[0].data, ...res[1].data])
        })
    }, [])
    return ( 
        <HashRouter>
            <Switch>
                {
                    backRouteList.map(item=>{
                        if(LocalRouterMap[item.key]){
                            return <Route path={item.key} component={LocalRouterMap[item.key]} key={item.key} />
                        }
                    })
                }
                <Route components={Nopermission} />
            </Switch>
        </HashRouter>
     );
}
 
export default NewsRouter;