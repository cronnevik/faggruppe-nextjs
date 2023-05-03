import BasicNavbar from "./components/navbar/navbar.component";
import 'normalize.css/normalize.css';

interface BasicsLayoutProps {
    children: React.ReactNode
}

const BasicsLayout = ({ children }: BasicsLayoutProps) => {
    return (
        <>
            <BasicNavbar />
            { children }


        </>
    )
}
export default BasicsLayout;