#!/usr/bin/env node

const { PrismaClient }=require("@prisma/client");
const prisma=new PrismaClient();

(async ()=>{
    await prisma.article.deleteMany({});
    await prisma.article.createMany({
        data: [
            { name: 'The Importance of Phase in Quantum Mechanics', hyphenatedTitle: 'the-importance-of-phase-in-quantum-mechanics', views: 0 },
            { name: 'A Better Way to Teach Math',                   hyphenatedTitle: 'a-better-way-to-teach-math',                   views: 0 },
            { name: 'Thank You, Fossil Fuel',                       hyphenatedTitle: 'thank-you-fossil-fuels',                       views: 0 },
            { name: 'Climate Change Is an Exponential Problem',     hyphenatedTitle: 'climate-change-is-an-exponential-problem',     views: 0 },
            { name: 'Reflection on Privilege',                      hyphenatedTitle: 'reflection-on-privilege',                      views: 0 },
            { name: 'Mindfully Traveling to School',                hyphenatedTitle: 'mindfully-traveling-to-school',                views: 0 },
            { name: 'Connecting with the Past',                     hyphenatedTitle: 'connecting-with-the-past',                     views: 0 },
            { name: 'Laws of Physics and Life',                     hyphenatedTitle: 'laws-of-physics-and-life',                     views: 0 },
        ]
    });

    await prisma.article.create({
        data: {
            name: 'Why We Need Nuclear Energy',
            hyphenatedTitle: 'why-we-need-nuclear-energy',
            views: 0,
            comments: {
                create: {
                    author: 'mr. p',
                    content: `Thanks, Joel. Nuclear power is an essential component I'm the Earth's sustainable climate future.`,
                    postedAt: new Date('July 25, 2021'),
                    email: 'jgrayson24@riverdale.edu',
                    verified: true,
                    verifyToken: 'aopfijaewpoifjewpfojwoij'
                }
            }
        }
    });
})();

/*
===Wix Views===
Mindfully Traveling to School: 86
Connecting with the Past: 24
My Perspective on the Laws of Physics & Life: 35
Why We Need Nuclear Reactors: 58
*/
