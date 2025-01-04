import SideBar from "../component/sideBar/SideBar";
const ProfolioLayout = ({children}:{
    children: React.ReactNode
}) => {
    return ( 
    <div className="flex gap-2">
        <div className="w-48">
            <SideBar/>
        </div>
        <main>{children}</main>
    </div> );
}
 
export default ProfolioLayout;