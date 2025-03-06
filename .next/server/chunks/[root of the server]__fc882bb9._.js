module.exports = {

"[project]/.next-internal/server/app/api/trpc/[trpc]/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route.runtime.dev.js [external] (next/dist/compiled/next-server/app-route.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}}),
"[project]/src/server/translate.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
// Store categories and their corresponding Korean text
__turbopack_context__.s({
    "transalte": (()=>transalte)
});
const STORE_CATEGORY = {
    SUSHI: 'sushi',
    UNAGI: 'unagi',
    TEMPURA: 'tempura',
    TONKATSU: 'tonkatsu',
    YAKITORI: 'yakitori',
    SUKIYAKI: 'sukiyaki',
    SOBA: 'soba',
    RAMEN: 'ramen',
    YAKISOBA: 'yakisoba',
    OKONOMIYAKI: 'okonomiyaki',
    DONBURI: 'donburi',
    ODEN: 'oden',
    KAISEKI: 'kaiseki',
    HAMBAGU: 'hambagu',
    TEPPANYAKI: 'teppanyaki',
    CURRY: 'curry',
    YAKINIKU: 'yakiniku',
    NABE: 'nabe',
    CAFE: 'cafe',
    IZAKAYA: 'izakaya',
    OTHER: 'other'
};
const textByStoreCategory = {
    [STORE_CATEGORY.SUSHI]: '스시·해산물',
    [STORE_CATEGORY.UNAGI]: '장어',
    [STORE_CATEGORY.TEMPURA]: '덴푸라',
    [STORE_CATEGORY.TONKATSU]: '돈카츠·쿠시카츠',
    [STORE_CATEGORY.YAKITORI]: '야키토리·꼬치',
    [STORE_CATEGORY.SUKIYAKI]: '스키야키·샤브샤브',
    [STORE_CATEGORY.SOBA]: '소바·우동',
    [STORE_CATEGORY.RAMEN]: '라멘·츠케멘',
    [STORE_CATEGORY.YAKISOBA]: '야키소바',
    [STORE_CATEGORY.OKONOMIYAKI]: '오코노미야키·타코야키',
    [STORE_CATEGORY.DONBURI]: '덮밥',
    [STORE_CATEGORY.ODEN]: '오뎅',
    [STORE_CATEGORY.KAISEKI]: '가이세키·일식',
    [STORE_CATEGORY.HAMBAGU]: '함바그·오므라이스',
    [STORE_CATEGORY.TEPPANYAKI]: '스테이크·철판요리',
    [STORE_CATEGORY.CURRY]: '카레',
    [STORE_CATEGORY.YAKINIKU]: '야키니쿠·호르몬',
    [STORE_CATEGORY.NABE]: '나베',
    [STORE_CATEGORY.CAFE]: '카페·디저트',
    [STORE_CATEGORY.IZAKAYA]: '이자카야·바',
    [STORE_CATEGORY.OTHER]: '기타 일본 음식'
};
const transalte = (categoryName)=>{
    // Normalize the input to lower case
    let normalizedCategoryName = categoryName.toLowerCase();
    // Find the category key that matches the normalized name
    const categoryKey = Object.keys(STORE_CATEGORY).find((key)=>STORE_CATEGORY[key] === normalizedCategoryName);
    // Return the corresponding Korean text or a default message if not found
    return categoryKey ? textByStoreCategory[STORE_CATEGORY[categoryKey]] : 'Category not found';
};
}}),
"[project]/src/server/trpc.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "appRouter": (()=>appRouter),
    "createTRPCContext": (()=>createTRPCContext)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@trpc/server/dist/index.mjs [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@trpc/server/dist/index.mjs [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zod/lib/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$translate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/translate.ts [app-route] (ecmascript)");
;
;
;
;
const prisma = new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]();
const createTRPCContext = ()=>({
        prisma
    });
const t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initTRPC"].context().create();
const appRouter = t.router({
    getRestaurants: t.procedure.query(async ({ ctx })=>{
        const result = await ctx.prisma.restaurant.findMany();
        return result;
    }),
    getCategories: t.procedure.query(async ({ ctx })=>{
        const result = await ctx.prisma.category.findMany();
        for (const category of result){
            category.name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$translate$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["transalte"])(category.name);
        }
        return result;
    }),
    getRestaurantsByCategory: t.procedure.input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        categoryId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string()
    })).query(async ({ ctx, input })=>{
        const result = await ctx.prisma.$queryRaw`
        SELECT r.*, c.name as categoryName 
        FROM "Restaurant" r
        LEFT JOIN "Category" c ON r."categoryId" = c.id
        WHERE r."categoryId" = ${input.categoryId}
      `;
        return result;
    }),
    addFavorite: t.procedure.input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].object({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].string(),
        isFavorite: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["z"].boolean()
    })).mutation(async ({ ctx, input })=>{
        const updatedRestaurant = await ctx.prisma.restaurant.update({
            where: {
                id: input.id
            },
            data: {
                isFavorite: input.isFavorite
            }
        });
        return updatedRestaurant;
    })
});
}}),
"[project]/src/app/api/trpc/[trpc]/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>handler),
    "POST": (()=>handler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/server/trpc.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$adapters$2f$fetch$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@trpc/server/dist/adapters/fetch/index.mjs [app-route] (ecmascript)");
;
;
;
const handler = (req)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$adapters$2f$fetch$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchRequestHandler"])({
        endpoint: '/api/trpc',
        req,
        router: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appRouter"],
        createContext: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$server$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createTRPCContext"]
    });
;
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__fc882bb9._.js.map