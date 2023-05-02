interface BasicsLayoutProps {
    children: React.ReactNode
}

const BasicsLayout = ({ children }: BasicsLayoutProps) => {
    return (
        <>
            { children }
        </>
    )
}
export default BasicsLayout;