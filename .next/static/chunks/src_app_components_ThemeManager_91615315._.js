(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/components/ThemeManager/styles.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "themeSwitcher": "styles-module__vMEZVq__themeSwitcher",
});
}}),
"[project]/src/app/components/ThemeManager/index.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src/components/ThemeManager/index.tsx
__turbopack_context__.s({
    "ThemeManager": (()=>ThemeManager)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ThemeManager$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/components/ThemeManager/styles.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const ThemeManager = ()=>{
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("light");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeManager.useEffect": ()=>{
            const storedTheme = localStorage.getItem("theme");
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            const initialTheme = storedTheme || (prefersDark ? "dark" : "light");
            setTheme(initialTheme);
        }
    }["ThemeManager.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeManager.useEffect": ()=>{
            if (theme) {
                document.documentElement.setAttribute("data-color-scheme", theme);
                localStorage.setItem("theme", theme);
                console.log(`Theme set to: ${theme}`);
            }
        }
    }["ThemeManager.useEffect"], [
        theme
    ]);
    const toggleTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ThemeManager.useCallback[toggleTheme]": ()=>{
            setTheme({
                "ThemeManager.useCallback[toggleTheme]": (prevTheme)=>prevTheme === "light" ? "dark" : "light"
            }["ThemeManager.useCallback[toggleTheme]"]);
        }
    }["ThemeManager.useCallback[toggleTheme]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: toggleTheme,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ThemeManager$2f$styles$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].themeSwitcher,
        "aria-label": `Switch to ${theme === "light" ? "dark" : "light"} mode`,
        title: `Switch to ${theme === "light" ? "dark" : "light"} mode`,
        children: theme === "light" ? "🌙" : "☀️"
    }, void 0, false, {
        fileName: "[project]/src/app/components/ThemeManager/index.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
};
_s(ThemeManager, "dhOPFiERDBNYEv0PpquXb53sTbM=");
_c = ThemeManager;
var _c;
__turbopack_context__.k.register(_c, "ThemeManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_components_ThemeManager_91615315._.js.map