import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const categories = [
  { name: 'Photographer', image: 'https://example.com/photographer.jpg' },
  { name: 'Makeup Artist', image: 'https://example.com/makeup.jpg' },
  { name: 'Decorator', image: 'https://example.com/decorator.jpg' },
  { name: 'Caterer', image: 'https://example.com/caterer.jpg' },
  { name: 'DJ', image: 'https://example.com/dj.jpg' },
  { name: 'Venue', image: 'https://example.com/venue.jpg' },
  { name: 'Mehendi Artist', image: 'https://example.com/mehendi.jpg' },
  { name: 'Wedding Planner', image: 'https://example.com/planner.jpg' },
];

async function main() {
  for (const category of categories) {
    await prisma.category.upsert({
      where: { name: category.name },
      update: {},
      create: category,
    });
  }
  console.log('✅ Categories seeded!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());