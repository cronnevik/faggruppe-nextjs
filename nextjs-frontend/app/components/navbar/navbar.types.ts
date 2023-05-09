export interface NavbarLinkItem {
    title: string,
    url: string
}

export interface NavbarProps {
    mainTitle: string,
    items: NavbarLinkItem[]
}