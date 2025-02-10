export interface NavItem {
  title: string;
  icon: string;
  path: string;
}

export const navItems: NavItem[] = [
  { title: 'Home', icon: '/icons/home.png', path: '/item1' },
  { title: 'Books', icon: '/icons/vector2.png', path: '/item2' },
  { title: 'Explore', icon: '/icons/bubble.png', path: '/item3' },
  { title: 'Docs', icon: '/icons/clipboard-text.png', path: '/item4' },
  { title: 'Wallet', icon: '/icons/empty-wallet.png', path: '/item5' },
  { title: 'Awards', icon: '/icons/award.png', path: '/item6' },
  { title: 'Analytics', icon: '/icons/diagram.png', path: '/item7' },
  { title: 'Settings', icon: '/icons/setting-2.png', path: '/item8' },
  { title: 'Logout', icon: '/icons/logout.png', path: '/item9' },
];
