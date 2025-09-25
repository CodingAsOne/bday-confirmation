import { useTheme } from "../contexts/ThemeContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  return (
    <div style={{ backgroundColor: theme.pageBg, minHeight: '100vh' }}>
      {children}
    </div>
  );
};

export default Layout;
