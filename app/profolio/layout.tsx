import SideMenu from "./component/SideMenu";
const ProfolioLayout = ({children}:{
    children: React.ReactNode
}) => {
    return ( 
    <div className="flex gap-2">
        <div className="w-48">
            <SideMenu/>
        </div>
        <main>{children}</main>
    </div> );
}
 
export default ProfolioLayout;