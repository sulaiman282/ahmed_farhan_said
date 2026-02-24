module.exports = [
"[next]/internal/font/google/inter_7b064e0d.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "inter_7b064e0d-module__MOT0tq__className",
  "variable": "inter_7b064e0d-module__MOT0tq__variable",
});
}),
"[next]/internal/font/google/inter_7b064e0d.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_7b064e0d$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_7b064e0d.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_7b064e0d$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Inter', 'Inter Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_7b064e0d$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_7b064e0d$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[next]/internal/font/google/cairo_863186ba.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "cairo_863186ba-module__NBnCba__className",
  "variable": "cairo_863186ba-module__NBnCba__variable",
});
}),
"[next]/internal/font/google/cairo_863186ba.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$cairo_863186ba$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/cairo_863186ba.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$cairo_863186ba$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Cairo', 'Cairo Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$cairo_863186ba$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$cairo_863186ba$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/lib/i18n/config.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDirection",
    ()=>getDirection,
    "i18nConfig",
    ()=>i18nConfig,
    "languageNames",
    ()=>languageNames
]);
const i18nConfig = {
    locales: [
        'en',
        'ar'
    ],
    defaultLocale: 'ar',
    localeDetection: true
};
const languageNames = {
    en: 'English',
    ar: 'العربية'
};
function getDirection(lang) {
    return lang === 'ar' ? 'rtl' : 'ltr';
}
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[project]/lib/content/loader.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadAllContent",
    ()=>loadAllContent,
    "loadContent",
    ()=>loadContent
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
async function loadContent(lang, contentType) {
    try {
        const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'content', lang, `${contentType}.json`);
        const fileContent = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["promises"].readFile(filePath, 'utf-8');
        const parsedContent = JSON.parse(fileContent);
        // Validate content structure
        if (!validateContent(contentType, parsedContent)) {
            console.warn(`Invalid content structure for ${contentType} in ${lang}`);
            throw new Error(`Invalid content structure for ${contentType}`);
        }
        return parsedContent;
    } catch (error) {
        console.error(`Error loading ${contentType} content for ${lang}:`, error);
        // Fallback to English if Arabic content fails
        if (lang === 'ar') {
            console.warn(`Falling back to English content for ${contentType}`);
            try {
                return await loadContent('en', contentType);
            } catch (fallbackError) {
                console.error(`English fallback also failed for ${contentType}:`, fallbackError);
            }
        }
        // Return default content if all else fails
        console.warn(`Returning default content for ${contentType}`);
        return getDefaultContent(contentType);
    }
}
async function loadAllContent(lang) {
    return {
        home: await loadContent(lang, 'home'),
        about: await loadContent(lang, 'about'),
        services: await loadContent(lang, 'services'),
        portfolio: await loadContent(lang, 'portfolio'),
        testimonials: await loadContent(lang, 'testimonials'),
        navigation: await loadContent(lang, 'navigation'),
        contact: await loadContent(lang, 'contact'),
        careers: await loadContent(lang, 'careers')
    };
}
/**
 * Validate content structure against expected schema
 * 
 * @param contentType - The type of content being validated
 * @param content - The content object to validate
 * @returns true if content is valid, false otherwise
 */ function validateContent(contentType, content) {
    if (!content || typeof content !== 'object') {
        return false;
    }
    // Basic validation for each content type
    switch(contentType){
        case 'home':
            return !!(content.hero && content.about && content.whyChoose && content.servicesPreview && content.testimonialsPreview && content.galleryPreview && content.cta);
        case 'about':
            return !!(content.pageTitle && content.hero && content.history && content.mission && content.values && content.certifications && content.team && content.statistics);
        case 'services':
            return !!(content.pageTitle && content.pageDescription && content.categories && Array.isArray(content.services) && content.cta);
        case 'portfolio':
            return !!(content.pageTitle && content.pageDescription && Array.isArray(content.categories) && Array.isArray(content.items));
        case 'testimonials':
            return !!(content.pageTitle && content.pageDescription && Array.isArray(content.items));
        case 'navigation':
            return !!(Array.isArray(content.mainMenu) && Array.isArray(content.footerMenu));
        case 'contact':
            return !!(content.pageTitle && content.pageDescription && content.contactInfo && Array.isArray(content.socialLinks) && content.whatsapp && content.form);
        case 'careers':
            return !!(content.pageTitle && content.pageDescription && content.culture && Array.isArray(content.openings) && content.noOpeningsMessage && content.applicationForm);
        default:
            return true;
    }
}
/**
 * Get default content structure for error cases
 * 
 * @param contentType - The type of content to generate defaults for
 * @returns Default content object
 */ function getDefaultContent(contentType) {
    const defaults = {
        home: {
            hero: {
                title: 'Welcome',
                subtitle: 'Your trusted partner',
                ctaText: 'Get Started',
                ctaLink: '/contact',
                backgroundImage: '/images/hero/default.jpg'
            },
            about: {
                title: 'About Us',
                description: 'We provide exceptional services.',
                yearsOfExperience: 0
            },
            whyChoose: {
                title: 'Why Choose Us',
                items: []
            },
            servicesPreview: {
                title: 'Our Services',
                services: [],
                viewAllLink: '/services'
            },
            testimonialsPreview: {
                title: 'Testimonials',
                viewAllLink: '/testimonials'
            },
            galleryPreview: {
                title: 'Our Projects',
                viewAllLink: '/portfolio'
            },
            cta: {
                title: 'Ready to Start?',
                description: 'Contact us today.',
                buttonText: 'Contact Us',
                buttonLink: '/contact'
            }
        },
        about: {
            pageTitle: 'About Us',
            hero: {
                title: 'About Us',
                description: 'Learn more about our company.'
            },
            history: {
                title: 'Our History',
                foundingYear: new Date().getFullYear(),
                description: 'Our company history.'
            },
            mission: {
                title: 'Our Mission',
                statement: 'Our mission statement.'
            },
            values: {
                title: 'Our Values',
                items: []
            },
            certifications: {
                title: 'Certifications',
                items: []
            },
            team: {
                title: 'Our Team',
                members: []
            },
            statistics: {
                projectsCompleted: 0,
                clientsServed: 0,
                workforceSize: 0,
                yearsOfExperience: 0
            }
        },
        services: {
            pageTitle: 'Our Services',
            pageDescription: 'Explore our services.',
            categories: [],
            services: [],
            cta: {
                title: 'Interested in Our Services?',
                description: 'Contact us to learn more.',
                buttonText: 'Contact Us',
                buttonLink: '/contact'
            }
        },
        portfolio: {
            pageTitle: 'Our Portfolio',
            pageDescription: 'View our completed projects.',
            categories: [],
            items: []
        },
        testimonials: {
            pageTitle: 'Client Testimonials',
            pageDescription: 'What our clients say about us.',
            items: []
        },
        navigation: {
            mainMenu: [
                {
                    label: 'Home',
                    href: '/'
                },
                {
                    label: 'About',
                    href: '/about'
                },
                {
                    label: 'Services',
                    href: '/services'
                },
                {
                    label: 'Portfolio',
                    href: '/portfolio'
                },
                {
                    label: 'Contact',
                    href: '/contact'
                }
            ],
            footerMenu: [
                {
                    label: 'Privacy Policy',
                    href: '/privacy'
                },
                {
                    label: 'Terms of Service',
                    href: '/terms'
                }
            ]
        },
        contact: {
            pageTitle: 'Contact Us',
            pageDescription: 'Get in touch with us.',
            contactInfo: {
                phone: '',
                email: '',
                address: '',
                businessHours: '',
                mapEmbedUrl: ''
            },
            socialLinks: [],
            whatsapp: {
                number: '',
                message: ''
            },
            form: {
                title: 'Contact Form',
                fields: {
                    name: {
                        label: 'Name',
                        placeholder: 'Your name'
                    },
                    email: {
                        label: 'Email',
                        placeholder: 'Your email'
                    },
                    phone: {
                        label: 'Phone',
                        placeholder: 'Your phone'
                    },
                    serviceInterest: {
                        label: 'Service Interest',
                        placeholder: 'Select a service',
                        options: []
                    },
                    message: {
                        label: 'Message',
                        placeholder: 'Your message'
                    }
                },
                submitButton: 'Submit',
                successMessage: 'Thank you for contacting us!',
                errorMessage: 'An error occurred. Please try again.'
            }
        },
        careers: {
            pageTitle: 'Careers',
            pageDescription: 'Join our team.',
            culture: {
                title: 'Company Culture',
                description: 'Learn about our culture.',
                benefits: []
            },
            openings: [],
            noOpeningsMessage: 'No openings available at this time.',
            applicationForm: {
                title: 'Apply Now',
                fields: {
                    name: {
                        label: 'Name',
                        placeholder: 'Your name'
                    },
                    email: {
                        label: 'Email',
                        placeholder: 'Your email'
                    },
                    phone: {
                        label: 'Phone',
                        placeholder: 'Your phone'
                    },
                    positionInterest: {
                        label: 'Position',
                        placeholder: 'Position of interest'
                    },
                    resume: {
                        label: 'Resume',
                        acceptedFormats: 'PDF, DOCX',
                        maxSize: '5MB'
                    }
                },
                submitButton: 'Submit Application',
                successMessage: 'Application submitted successfully!',
                errorMessage: 'An error occurred. Please try again.'
            }
        }
    };
    return defaults[contentType] || {};
}
}),
"[project]/components/layout/Header.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/layout/Header.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/layout/Header.tsx <module evaluation>", "default");
}),
"[project]/components/layout/Header.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/layout/Header.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/layout/Header.tsx", "default");
}),
"[project]/components/layout/Header.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/layout/Header.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/layout/Header.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/app/[lang]/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LanguageLayout,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_7b064e0d$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/inter_7b064e0d.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$cairo_863186ba$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/cairo_863186ba.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n/config.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$loader$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/content/loader.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/Header.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function generateStaticParams() {
    return [
        {
            lang: 'en'
        },
        {
            lang: 'ar'
        }
    ];
}
async function LanguageLayout({ children, params }) {
    const { lang } = await params;
    const dir = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2f$config$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDirection"])(lang);
    const fontClass = lang === 'ar' ? __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$cairo_863186ba$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].variable : __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_7b064e0d$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].variable;
    // Load navigation content
    const navigationContent = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$content$2f$loader$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["loadContent"])(lang, 'navigation');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: lang,
        dir: dir,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: `${fontClass} ${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$inter_7b064e0d$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].variable} ${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$cairo_863186ba$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].variable} antialiased font-sans`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    lang: lang,
                    navigation: navigationContent.mainMenu
                }, void 0, false, {
                    fileName: "[project]/app/[lang]/layout.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/app/[lang]/layout.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/[lang]/layout.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__974ac015._.js.map