module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[project]/components/layout/CartLink.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartLink",
    ()=>CartLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cart$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cart-store.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function CartLink() {
    const { count } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cart$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCart"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: "/cart",
        className: "relative hover:text-blue-700",
        children: [
            "Carrito",
            count > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-label": `${count} productos en el carrito`,
                className: "ml-1.5 inline-flex min-w-5 items-center justify-center rounded-full bg-blue-700 px-1.5 text-xs font-semibold text-white",
                children: count
            }, void 0, false, {
                fileName: "[project]/components/layout/CartLink.tsx",
                lineNumber: 13,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/CartLink.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/cart-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addToCart",
    ()=>addToCart,
    "clearCart",
    ()=>clearCart,
    "removeFromCart",
    ()=>removeFromCart,
    "setQuantity",
    ()=>setQuantity,
    "useCart",
    ()=>useCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
/**
 * Carrito en estado local (localStorage) expuesto con useSyncExternalStore:
 * sin Context, sin efectos y sin errores de hidratación (el servidor ve siempre []).
 */ const STORAGE_KEY = "ecommerce-cart";
const EMPTY = [];
const listeners = new Set();
let cachedRaw = null;
let cachedItems = EMPTY;
function readItems() {
    let raw = null;
    try {
        raw = localStorage.getItem(STORAGE_KEY);
    } catch  {
        return cachedItems;
    }
    if (raw === cachedRaw) return cachedItems;
    cachedRaw = raw;
    try {
        const parsed = raw ? JSON.parse(raw) : [];
        cachedItems = Array.isArray(parsed) && parsed.length > 0 ? parsed : EMPTY;
    } catch  {
        cachedItems = EMPTY;
    }
    return cachedItems;
}
function writeItems(items) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch  {
    // Sin localStorage (modo privado, cuota llena): el carrito sigue en memoria.
    }
    cachedRaw = JSON.stringify(items);
    cachedItems = items.length > 0 ? items : EMPTY;
    listeners.forEach((listener)=>listener());
}
function subscribe(listener) {
    listeners.add(listener);
    const onStorage = (event)=>{
        if (event.key === STORAGE_KEY) listener(); // cambios desde otra pestaña
    };
    window.addEventListener("storage", onStorage);
    return ()=>{
        listeners.delete(listener);
        window.removeEventListener("storage", onStorage);
    };
}
function addToCart(product, quantity = 1) {
    const items = readItems();
    const existing = items.find((item)=>item.product.id === product.id);
    const current = existing?.quantity ?? 0;
    const next = Math.min(current + quantity, product.stock);
    if (next <= 0) return;
    writeItems(existing ? items.map((item)=>item.product.id === product.id ? {
            product,
            quantity: next
        } : item) : [
        ...items,
        {
            product,
            quantity: next
        }
    ]);
}
function setQuantity(productId, quantity) {
    const items = readItems();
    writeItems(items.map((item)=>item.product.id === productId ? {
            ...item,
            quantity: Math.min(quantity, item.product.stock)
        } : item).filter((item)=>item.quantity > 0));
}
function removeFromCart(productId) {
    writeItems(readItems().filter((item)=>item.product.id !== productId));
}
function clearCart() {
    writeItems([]);
}
function useCart() {
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, readItems, ()=>EMPTY);
    const count = items.reduce((sum, item)=>sum + item.quantity, 0);
    const total = items.reduce((sum, item)=>sum + item.quantity * item.product.price, 0);
    return {
        items,
        count,
        total
    };
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1ebtvbo._.js.map