import NavBar from "./components/navbar/navbar.component";
import MuiSetup from "./mui-setup";

interface MuiLayoutProps {
    children: React.ReactNode
}

const MuiLayout = ({children}: MuiLayoutProps) => {
    return (
        <>
            <MuiSetup>
                <NavBar />
                { children }
            </MuiSetup>
        </>
    )
}
export default MuiLayout;