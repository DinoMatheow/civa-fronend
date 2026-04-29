import { Outlet } from "react-router"
import { CustomMenu } from "../../components/custom/CustomMenu"

export const BusLayouts = () => {
    return(
        <div>
        <CustomMenu />


        <Outlet />
        </div>
    )
}
