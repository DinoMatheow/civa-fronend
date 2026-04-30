import { Outlet } from "react-router"
import { CustomMenu } from "../../components/custom/CustomMenu"

export const BusLayouts = () => {
    return(
        <div className="">
        <CustomMenu />


        <Outlet />
        </div>
    )
}
