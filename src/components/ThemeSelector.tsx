import { useTheme } from "../contexts/ThemeContext";

const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();

  const handleChange = (key: keyof typeof theme, value: string) => {
    setTheme({ ...theme, [key]: value });
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Alterar Tema</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Logo</label>
          <input
            type="color"
            value={theme.primary}
            onChange={(e) => handleChange("primary", e.target.value)}
            className="w-full h-10 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Fundo da Página</label>
          <input
            type="color"
            value={theme.pageBg}
            onChange={(e) => handleChange("pageBg", e.target.value)}
            className="w-full h-10 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Fundo da NavBar</label>
          <input
            type="color"
            value={theme.navbarBg}
            onChange={(e) => handleChange("navbarBg", e.target.value)}
            className="w-full h-10 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Botões Navbar</label>
          <input
            type="color"
            value={theme.navButton}
            onChange={(e) => handleChange("navButton", e.target.value)}
            className="w-full h-10 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Hover</label>
          <input
            type="color"
            value={theme.hover}
            onChange={(e) => handleChange("hover", e.target.value)}
            className="w-full h-10 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Fundo Menu Mobile</label>
          <input
            type="color"
            value={theme.mobileMenuBg}
            onChange={(e) => handleChange("mobileMenuBg", e.target.value)}
            className="w-full h-10 border rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default ThemeSelector;
