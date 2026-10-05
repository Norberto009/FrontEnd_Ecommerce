(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/products/AddToCartButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddToCartButton",
    ()=>AddToCartButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cart$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cart-store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function AddToCartButton({ product }) {
    _s();
    const { items } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cart$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const [justAdded, setJustAdded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const inCart = items.find((item)=>item.product.id === product.id)?.quantity ?? 0;
    const unavailable = !product.is_active; // la API lista inactivos pero rechaza ordenarlos
    const soldOut = product.stock <= 0;
    const maxReached = inCart >= product.stock;
    const handleClick = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cart$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addToCart"])({
            id: product.id,
            name: product.name,
            price: product.price,
            image_url: product.image_url,
            stock: product.stock
        }, 1);
        setJustAdded(true);
        setTimeout(()=>setJustAdded(false), 1200);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: handleClick,
        disabled: unavailable || soldOut || maxReached,
        className: "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-300",
        children: [
            !unavailable && !soldOut && !maxReached && !justAdded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                "aria-hidden": true,
                viewBox: "0 0 20 20",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: 2.5,
                strokeLinecap: "round",
                className: "size-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M10 4v12M4 10h12"
                }, void 0, false, {
                    fileName: "[project]/components/products/AddToCartButton.tsx",
                    lineNumber: 48,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/products/AddToCartButton.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this),
            unavailable ? "No disponible" : soldOut ? "Agotado" : maxReached ? "Máximo en el carrito" : justAdded ? "¡Agregado!" : "Agregar al carrito"
        ]
    }, void 0, true, {
        fileName: "[project]/components/products/AddToCartButton.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(AddToCartButton, "GCAOilyG8HqfJdxDRZe4lQmkstg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cart$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = AddToCartButton;
var _c;
__turbopack_context__.k.register(_c, "AddToCartButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_products_AddToCartButton_tsx_1690oqf._.js.map