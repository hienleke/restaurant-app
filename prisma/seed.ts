import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const categories = [
    { id: 1, name: 'SUSHI' },
    { id: 2, name: 'UNAGI' },
    { id: 3, name: 'TEMPURA' },
    { id: 4, name: 'TONKATSU' },
    { id: 5, name: 'YAKITORI' },
    { id: 6, name: 'SUKIYAKI' },
    { id: 7, name: 'SOBA' },
    { id: 8, name: 'RAMEN' },
    { id: 9, name: 'YAKISOBA' },
    { id: 10, name: 'OKONOMIYAKI' },
    { id: 11, name: 'DONBURI' },
    { id: 12, name: 'ODEN' },
    { id: 13, name: 'KAISEKI' },
    { id: 14, name: 'HAMBAGU' },
    { id: 15, name: 'TEPPANYAKI' },
    { id: 16, name: 'CURRY' },
    { id: 17, name: 'YAKINIKU' },
    { id: 18, name: 'NABE' },
    { id: 19, name: 'CAFE' },
    { id: 20, name: 'IZAKAYA' },
    { id: 21, name: 'OTHER' },
];

const restaurants = [
    {
        id: '4dc2e1d1-fe89-4a29-b86a-f8bb0ce1395d',
        name: '카구라자카 이시카와 스시하루 나카노시마 스시야 카구라자카 이시카와 스시하루 나카노시마 스시야',
        description: '최고급 오마카세를 합리적인 가격에 무제한 사케와 함께 즐길 수 있는',
        rating: 4.2,
        ratingCount: 139,
        categoryId: 5, // YAKITORI
        city: 'osaka',
        priceRange: '3~5',
        images: [
            'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        featured: {
            text: '나카노시마×야키토리 상위 맛집',
            icon: 'stars-02',
        },
        isFavorite: true,
    },
    {
        id: '6ac3e2d1-ge98-5a29-c86a-g9cc1de2396d',
        name: '스시 긴자 이시카와',
        description: '신선한 해산물과 정통 스시를 제공하는',
        rating: 4.5,
        ratingCount: 200,
        categoryId: 1, // SUSHI
        city: 'tokyo',
        priceRange: '4~6',
        images: [
            'https://images.unsplash.com/photo-1547592180-2f1a1b3c3b68?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1547592180-2f1a1b3c3b68?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1547592180-2f1a1b3c3b68?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        featured: {
            text: '도쿄의 상위 스시 맛집',
            icon: 'stars-02',
        },
        isFavorite: false,
    },
    {
        id: '7bd4f3e2-hf98-6b39-d87b-h0dd2ee2397e',
        name: '라멘 이치란',
        description: '진한 국물과 다양한 토핑을 자랑하는',
        rating: 4.7,
        ratingCount: 180,
        categoryId: 8, // RAMEN
        city: 'kyoto',
        priceRange: '2~4',
        images: [
            'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        featured: {
            text: '교토의 라멘 명소',
            icon: 'stars-02',
        },
        isFavorite: true,
    },
    {
        id: '8ce5g4f3-jg09-7c40-e98c-i1ee3ff3408f',
        name: '텐푸라 마츠야',
        description: '바삭한 텐푸라를 맛볼 수 있는',
        rating: 4.3,
        ratingCount: 220,
        categoryId: 3, // TEMPURA
        city: 'nagoya',
        priceRange: '3~5',
        images: [
            'https://images.unsplash.com/photo-1604908177732-40aa343c3f2b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1604908177732-40aa343c3f2b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1604908177732-40aa343c3f2b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        featured: {
            text: '나고야 최고의 텐푸라집',
            icon: 'stars-02',
        },
        isFavorite: false,
    },
    {
        id: '9df6h5g4-kh10-8d41-f09d-j2ff4gg4519g',
        name: '우동 타로',
        description: '쫄깃한 면발과 진한 육수를 자랑하는',
        rating: 4.6,
        ratingCount: 190,
        categoryId: 7, // SOBA
        city: 'fukuoka',
        priceRange: '2~4',
        images: [
            'https://images.unsplash.com/photo-1570544826585-8dd0cf1d2aa8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1570544826585-8dd0cf1d2aa8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1570544826585-8dd0cf1d2aa8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        featured: {
            text: '후쿠오카 우동 맛집',
            icon: 'stars-02',
        },
        isFavorite: true,
    },
    {
        id: '0eg7i6h5-lj21-9e52-g10e-k3gg5hh5620h',
        name: '야키토리 하치베',
        description: '맛있고 저렴한 야키토리 전문점',
        rating: 4.1,
        ratingCount: 160,
        categoryId: 5, // YAKITORI
        city: 'osaka',
        priceRange: '1~3',
        images: [
            'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        featured: {
            text: '오사카 야키토리 숨은 맛집',
            icon: 'stars-02',
        },
        isFavorite: false,
    },
    {
        id: '1fh8j7i6-mk32-0f63-h11f-l4hh6ii6731i',
        name: '스시 사토',
        description: '신선한 해산물로 만든 정통 스시를 즐길 수 있는',
        rating: 4.8,
        ratingCount: 250,
        categoryId: 1, // SUSHI
        city: 'sapporo',
        priceRange: '4~6',
        images: [
            'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        featured: {
            text: '삿포로 스시 맛집',
            icon: 'stars-02',
        },
        isFavorite: true,
    },
    {
        id: '2gi9k8j7-nl43-1g74-i22g-m5ii7jj7842j',
        name: '라멘 타츠야',
        description: '깊은 맛의 국물과 탱탱한 면발을 자랑하는',
        rating: 4.4,
        ratingCount: 170,
        categoryId: 8, // RAMEN
        city: 'hiroshima',
        priceRange: '2~4',
        images: [
            'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        featured: {
            text: '히로시마 라멘 추천',
            icon: 'stars-02',
        },
        isFavorite: false,
    },
    {
        id: '3hj0l9k8-om54-2h85-j33h-n6jj8kk8953k',
        name: '텐푸라 야마구치',
        description: '고급스러운 텐푸라를 제공하는',
        rating: 4.9,
        ratingCount: 300,
        categoryId: 3, // TEMPURA
        city: 'yokohama',
        priceRange: '5~7',
        images: [
            'https://images.unsplash.com/photo-1610399220621-38b3599b57c2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1610399220621-38b3599b57c2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1610399220621-38b3599b57c2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        featured: {
            text: '요코하마 텐푸라 추천',
            icon: 'stars-02',
        },
        isFavorite: true,
    },
    {
        id: '4ik1m0l9-pn65-3i96-k44i-o7kk9ll9064l',
        name: '우동 가게야마',
        description: '담백한 국물과 쫄깃한 면발이 일품인',
        rating: 4.0,
        ratingCount: 150,
        categoryId: 7, // SOBA
        city: 'kobe',
        priceRange: '2~4',
        images: [
            'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ],
        featured: {
            text: '고베 우동 맛집',
            icon: 'stars-02',
        },
        isFavorite: false,
    },
];

async function main() {
    // Seed categories
    for (const category of categories) {
        await prisma.category.upsert({
            where: { id: category.id },
            update: {},
            create: {
                id: category.id,
                name: category.name,
                description: null, // Optional field, set to null as per your request to exclude descriptions
            },
        });
    }

    // Seed restaurants
    for (const restaurant of restaurants) {
        await prisma.restaurant.upsert({
            where: { id: restaurant.id },
            update: {},
            create: {
                id: restaurant.id,
                name: restaurant.name,
                description: restaurant.description,
                rating: restaurant.rating,
                ratingCount: restaurant.ratingCount,
                categoryId: restaurant.categoryId,
                city: restaurant.city,
                priceRange: restaurant.priceRange,
                images: restaurant.images,
                featured: restaurant.featured,
                isFavorite: restaurant.isFavorite,
            },
        });
    }

    console.log('Seeding completed successfully!');
}

main()
    .catch((e) => {
        console.error('Error during seeding:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });