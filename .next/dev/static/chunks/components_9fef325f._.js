(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/shared/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
;
const variantStyles = {
    primary: 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg shadow-primary-500/50 hover:shadow-xl hover:shadow-primary-500/60 hover:from-primary-700 hover:to-primary-800 active:scale-95',
    secondary: 'bg-gradient-to-r from-secondary-600 to-secondary-700 text-white shadow-lg shadow-secondary-500/50 hover:shadow-xl hover:shadow-secondary-500/60 hover:from-secondary-700 hover:to-secondary-800 active:scale-95',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 hover:border-primary-700 hover:text-primary-700 active:scale-95',
    ghost: 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 active:scale-95'
};
const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
};
function Button(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "038838f292d24ce9052b6d06be80de7064bc35fb3d6c35f64976e934df13c6f1") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "038838f292d24ce9052b6d06be80de7064bc35fb3d6c35f64976e934df13c6f1";
    }
    let children;
    let props;
    let t1;
    let t2;
    let t3;
    if ($[1] !== t0) {
        ({ variant: t1, size: t2, children, className: t3, ...props } = t0);
        $[1] = t0;
        $[2] = children;
        $[3] = props;
        $[4] = t1;
        $[5] = t2;
        $[6] = t3;
    } else {
        children = $[2];
        props = $[3];
        t1 = $[4];
        t2 = $[5];
        t3 = $[6];
    }
    const variant = t1 === undefined ? "primary" : t1;
    const size = t2 === undefined ? "md" : t2;
    const className = t3 === undefined ? "" : t3;
    const combinedClassName = `${"inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
    if ("href" in props && props.href) {
        let t4;
        if ($[7] !== children || $[8] !== combinedClassName || $[9] !== props) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: props.href,
                className: combinedClassName,
                ...props,
                children: children
            }, void 0, false, {
                fileName: "[project]/components/shared/Button.tsx",
                lineNumber: 73,
                columnNumber: 12
            }, this);
            $[7] = children;
            $[8] = combinedClassName;
            $[9] = props;
            $[10] = t4;
        } else {
            t4 = $[10];
        }
        return t4;
    }
    const t4 = props;
    let t5;
    if ($[11] !== children || $[12] !== combinedClassName || $[13] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: combinedClassName,
            ...t4,
            children: children
        }, void 0, false, {
            fileName: "[project]/components/shared/Button.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, this);
        $[11] = children;
        $[12] = combinedClassName;
        $[13] = t4;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    return t5;
}
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/HeroSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/Button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function HeroSection(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(49);
    if ($[0] !== "a0a027450d6ab95e6b46b8e6b2d426e498e65f1cdd7cdd76c9bcafd2d1384b1b") {
        for(let $i = 0; $i < 49; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a0a027450d6ab95e6b46b8e6b2d426e498e65f1cdd7cdd76c9bcafd2d1384b1b";
    }
    const { hero, lang } = t0;
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "HeroSection[useEffect()]": ()=>{
                setIsVisible(true);
            }
        })["HeroSection[useEffect()]"];
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-900",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"
                }, void 0, false, {
                    fileName: "[project]/components/home/HeroSection.tsx",
                    lineNumber: 42,
                    columnNumber: 112
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                }, void 0, false, {
                    fileName: "[project]/components/home/HeroSection.tsx",
                    lineNumber: 42,
                    columnNumber: 191
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/HeroSection.tsx",
            lineNumber: 42,
            columnNumber: 10
        }, this);
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-20 left-10 w-72 h-72 bg-primary-400/30 rounded-full blur-3xl animate-float"
                }, void 0, false, {
                    fileName: "[project]/components/home/HeroSection.tsx",
                    lineNumber: 49,
                    columnNumber: 60
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-20 right-10 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl animate-float-delayed"
                }, void 0, false, {
                    fileName: "[project]/components/home/HeroSection.tsx",
                    lineNumber: 49,
                    columnNumber: 167
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow"
                }, void 0, false, {
                    fileName: "[project]/components/home/HeroSection.tsx",
                    lineNumber: 49,
                    columnNumber: 285
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/HeroSection.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const t5 = `max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`;
    let t6;
    if ($[5] !== hero.title) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "inline-block animate-fade-in-up",
                children: hero.title
            }, void 0, false, {
                fileName: "[project]/components/home/HeroSection.tsx",
                lineNumber: 57,
                columnNumber: 111
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/home/HeroSection.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[5] = hero.title;
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    const t7 = `text-lg sm:text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`;
    let t8;
    if ($[7] !== hero.subtitle || $[8] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: t7,
            children: hero.subtitle
        }, void 0, false, {
            fileName: "[project]/components/home/HeroSection.tsx",
            lineNumber: 66,
            columnNumber: 10
        }, this);
        $[7] = hero.subtitle;
        $[8] = t7;
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    const t9 = `flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`;
    const t10 = `w-5 h-5 transition-transform group-hover:translate-x-1 ${lang === "ar" ? "rotate-180" : ""}`;
    let t11;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M13 7l5 5m0 0l-5 5m5-5H6"
        }, void 0, false, {
            fileName: "[project]/components/home/HeroSection.tsx",
            lineNumber: 77,
            columnNumber: 11
        }, this);
        $[10] = t11;
    } else {
        t11 = $[10];
    }
    let t12;
    if ($[11] !== t10) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: t10,
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: t11
        }, void 0, false, {
            fileName: "[project]/components/home/HeroSection.tsx",
            lineNumber: 84,
            columnNumber: 11
        }, this);
        $[11] = t10;
        $[12] = t12;
    } else {
        t12 = $[12];
    }
    let t13;
    if ($[13] !== hero.ctaText || $[14] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "relative z-10 flex items-center gap-2",
            children: [
                hero.ctaText,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/HeroSection.tsx",
            lineNumber: 92,
            columnNumber: 11
        }, this);
        $[13] = hero.ctaText;
        $[14] = t12;
        $[15] = t13;
    } else {
        t13 = $[15];
    }
    let t14;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
        }, void 0, false, {
            fileName: "[project]/components/home/HeroSection.tsx",
            lineNumber: 101,
            columnNumber: 11
        }, this);
        $[16] = t14;
    } else {
        t14 = $[16];
    }
    let t15;
    if ($[17] !== hero.ctaLink || $[18] !== t13) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: hero.ctaLink,
            size: "lg",
            className: "group relative overflow-hidden",
            children: [
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/HeroSection.tsx",
            lineNumber: 108,
            columnNumber: 11
        }, this);
        $[17] = hero.ctaLink;
        $[18] = t13;
        $[19] = t15;
    } else {
        t15 = $[19];
    }
    const t16 = `/${lang}/services`;
    const t17 = lang === "ar" ? "\u0627\u0633\u062A\u0643\u0634\u0641 \u062E\u062F\u0645\u0627\u062A\u0646\u0627" : "Explore Services";
    let t18;
    if ($[20] !== t16 || $[21] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: t16,
            variant: "outline",
            size: "lg",
            className: "bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20",
            children: t17
        }, void 0, false, {
            fileName: "[project]/components/home/HeroSection.tsx",
            lineNumber: 119,
            columnNumber: 11
        }, this);
        $[20] = t16;
        $[21] = t17;
        $[22] = t18;
    } else {
        t18 = $[22];
    }
    let t19;
    if ($[23] !== t15 || $[24] !== t18 || $[25] !== t9) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t9,
            children: [
                t15,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/HeroSection.tsx",
            lineNumber: 128,
            columnNumber: 11
        }, this);
        $[23] = t15;
        $[24] = t18;
        $[25] = t9;
        $[26] = t19;
    } else {
        t19 = $[26];
    }
    const t20 = `mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`;
    const t21 = lang === "ar" ? "\u0633\u0646\u0648\u0627\u062A \u062E\u0628\u0631\u0629" : "Years Experience";
    let t22;
    if ($[27] !== t21) {
        t22 = {
            number: "15+",
            label: t21
        };
        $[27] = t21;
        $[28] = t22;
    } else {
        t22 = $[28];
    }
    const t23 = lang === "ar" ? "\u0645\u0634\u0631\u0648\u0639 \u0645\u0646\u062C\u0632" : "Projects Completed";
    let t24;
    if ($[29] !== t23) {
        t24 = {
            number: "500+",
            label: t23
        };
        $[29] = t23;
        $[30] = t24;
    } else {
        t24 = $[30];
    }
    const t25 = lang === "ar" ? "\u0639\u0645\u064A\u0644 \u0631\u0627\u0636\u064D" : "Happy Clients";
    let t26;
    if ($[31] !== t25) {
        t26 = {
            number: "100+",
            label: t25
        };
        $[31] = t25;
        $[32] = t26;
    } else {
        t26 = $[32];
    }
    let t27;
    if ($[33] !== t22 || $[34] !== t24 || $[35] !== t26) {
        t27 = [
            t22,
            t24,
            t26
        ].map(_HeroSectionAnonymous);
        $[33] = t22;
        $[34] = t24;
        $[35] = t26;
        $[36] = t27;
    } else {
        t27 = $[36];
    }
    let t28;
    if ($[37] !== t20 || $[38] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t20,
            children: t27
        }, void 0, false, {
            fileName: "[project]/components/home/HeroSection.tsx",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        $[37] = t20;
        $[38] = t27;
        $[39] = t28;
    } else {
        t28 = $[39];
    }
    let t29;
    if ($[40] !== t19 || $[41] !== t28 || $[42] !== t5 || $[43] !== t6 || $[44] !== t8) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10 container mx-auto px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t5,
                children: [
                    t6,
                    t8,
                    t19,
                    t28
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/HeroSection.tsx",
                lineNumber: 194,
                columnNumber: 81
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/home/HeroSection.tsx",
            lineNumber: 194,
            columnNumber: 11
        }, this);
        $[40] = t19;
        $[41] = t28;
        $[42] = t5;
        $[43] = t6;
        $[44] = t8;
        $[45] = t29;
    } else {
        t29 = $[45];
    }
    let t30;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-6 h-6 text-white",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M19 14l-7 7m0 0l-7-7m7 7V3"
                }, void 0, false, {
                    fileName: "[project]/components/home/HeroSection.tsx",
                    lineNumber: 206,
                    columnNumber: 177
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/HeroSection.tsx",
                lineNumber: 206,
                columnNumber: 87
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/home/HeroSection.tsx",
            lineNumber: 206,
            columnNumber: 11
        }, this);
        $[46] = t30;
    } else {
        t30 = $[46];
    }
    let t31;
    if ($[47] !== t29) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative min-h-[90vh] flex items-center justify-center overflow-hidden",
            children: [
                t3,
                t4,
                t29,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/HeroSection.tsx",
            lineNumber: 213,
            columnNumber: 11
        }, this);
        $[47] = t29;
        $[48] = t31;
    } else {
        t31 = $[48];
    }
    return t31;
}
_s(HeroSection, "J3yJOyGdBT4L7hs1p1XQYVGMdrY=");
_c = HeroSection;
function _HeroSectionAnonymous(stat, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-4xl font-bold text-white mb-2",
                children: stat.number
            }, void 0, false, {
                fileName: "[project]/components/home/HeroSection.tsx",
                lineNumber: 222,
                columnNumber: 169
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-gray-200 text-sm",
                children: stat.label
            }, void 0, false, {
                fileName: "[project]/components/home/HeroSection.tsx",
                lineNumber: 222,
                columnNumber: 240
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/components/home/HeroSection.tsx",
        lineNumber: 222,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_9fef325f._.js.map