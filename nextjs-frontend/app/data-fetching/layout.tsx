import 'normalize.css/normalize.css';
import BasicNavbar from '../components/navbar/navbar.component';
import { dataFetchNavItems } from './navbar.data';

interface BasicsLayoutProps {
    children: React.ReactNode
}

const BasicsLayout = ({ children }: BasicsLayoutProps) => {
    return (
        <>
            <BasicNavbar mainTitle='Data Fetching' items={dataFetchNavItems} />
            { children }


        </>
    )
}
export default BasicsLayout;