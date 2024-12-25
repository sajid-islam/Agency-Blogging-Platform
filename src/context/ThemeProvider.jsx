"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

const ThemeProvider = ({ children, ...props }) => {
    return (
        <NextThemesProvider {...props}>
            <div className="transition-all duration-1000">{children}</div>
        </NextThemesProvider>
    );
};

export default ThemeProvider;
