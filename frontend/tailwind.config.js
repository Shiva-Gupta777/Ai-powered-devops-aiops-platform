module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af"
        },
        accent: {
          100: "#fee2e2",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b"
        },
        success: {
          100: "#dcfce7",
          800: "#166534"
        }
      },
      boxShadow: {
        soft: "0 2px 8px rgba(0,0,0,0.08)",
        medium: "0 8px 20px rgba(0,0,0,0.12)",
        strong: "0 12px 28px rgba(0,0,0,0.16)"
      }
    }
  },
  plugins: []
};
