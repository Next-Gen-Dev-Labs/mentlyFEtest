interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div>
      <nav role="navigation">Navigation</nav>
      <aside role="complementary" className="hidden md:block">Sidebar</aside>
      <main>{children}</main>
    </div>
  )
} 