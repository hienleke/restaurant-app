
// Store categories and their corresponding Korean text
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
    OTHER: 'other',
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
    [STORE_CATEGORY.OTHER]: '기타 일본 음식',
};

export const transalte = (categoryName: string) => {
    // Normalize the input to lower case
    let normalizedCategoryName = categoryName.toLowerCase();

    // Find the category key that matches the normalized name
    const categoryKey = Object.keys(STORE_CATEGORY).find(key => 
        STORE_CATEGORY[key as keyof typeof STORE_CATEGORY] === normalizedCategoryName
    );

    // Return the corresponding Korean text or a default message if not found
    return categoryKey ? textByStoreCategory[STORE_CATEGORY[categoryKey as keyof typeof STORE_CATEGORY]] : 'Category not found';
}