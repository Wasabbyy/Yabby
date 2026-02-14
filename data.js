/**
 * Our Journey - Dates and memories
 * Edit this file: add your dates and the filenames of the photos you put in assets/
 */

const JOURNEY_DATA = {
  // Photo shown on the start screen (you + girlfriend)
  // Put the file in assets/start-photo.jpg (or .png)
  startPhoto: 'assets/intro.JPG',

  // List your special dates in order (oldest first = top, newest = bottom; snake path)
  // Each door uses the same presentation layout (arrows, full-page, captions)
  dates: [
    {
      id: 'first-date',
      date: 'First date',
      photos: [
        { src: 'assets/strelecak.jpg', text: 'The best first date I have ever been on. Felt so safe and comfortable. We talked for hours about random stuff and it was awesome.' },
        { src: 'assets/neviny_b.jpeg', text: 'The best first date I have ever been on. Felt so safe and comfortable. We talked for hours about random stuff and it was awesome.'}
      ]
    },
    {
      id: 'second-date',
      date: 'Second date',
      photos: [
        { src: 'assets/second.png', text: 'Second time seeing your beatiful smile we were just chilling and talking on a bounch for couple of hours before you left for Slovakia.' }
      ]
    },
    {
      id: 'uprising',
      date: 'Uprising',
      photos: [
        { src: 'assets/uprising.jpg', text: 'Going to Uprising with you was one of the best decisions and I am very glad I asked if you wanted to go there. We were just having fun swimming and enjoying ourselfs. Also we met some awesome people there like Adam, Zuzka, Hodonín and Bořis ' },
        { src: 'assets/uprising1.jpg', text: 'Going to Uprising with you was one of the best decisions and I am very glad I asked if you wanted to go there. We were just having fun swimming and enjoying ourselfs. Also we met some awesome people there like Adam, Zuzka, Hodonín and Bořis ' },
        { src: 'assets/uprising2.jpg', text: 'Going to Uprising with you was one of the best decisions and I am very glad I asked if you wanted to go there. We were just having fun swimming and enjoying ourselfs. Also we met some awesome people there like Adam, Zuzka, Hodonín and Bořis ' },
        { src: 'assets/uprising3.jpg', text: 'Going to Uprising with you was one of the best decisions and I am very glad I asked if you wanted to go there. We were just having fun swimming and enjoying ourselfs. Also we met some awesome people there like Adam, Zuzka, Hodonín and Bořis ' },
        { src: 'assets/uprising4.jpg', text: 'Going to Uprising with you was one of the best decisions and I am very glad I asked if you wanted to go there. We were just having fun swimming and enjoying ourselfs. Also we met some awesome people there like Adam, Zuzka, Hodonín and Bořis ' },
        { src: 'assets/uprising5.jpg', text: 'Going to Uprising with you was one of the best decisions and I am very glad I asked if you wanted to go there. We were just having fun swimming and enjoying ourselfs. Also we met some awesome people there like Adam, Zuzka, Hodonín and Bořis ' },
        { src: 'assets/uprising6.jpg', text: 'Going to Uprising with you was one of the best decisions and I am very glad I asked if you wanted to go there. We were just having fun swimming and enjoying ourselfs. Also we met some awesome people there like Adam, Zuzka, Hodonín and Bořis ' }
      ]
    },
    {
      id: 'fixa',
      date: 'Fixa',
      photos: [
        { src: 'assets/fixa.jpg', text: 'I loved the first time we went to concert together I didnt know much songs but it was great either way I got to meet Majkyy, Kajá and even Jarda even tho he is weird and I am not his biggest fan xd.' },
        { src: 'assets/fixa2.JPG', text: 'I loved the first time we went to concert together I didnt know much songs but it was great either way I got to meet Majkyy, Kajá and even Jarda even tho he is weird and I am not his biggest fan xd.' },
        { src: 'assets/fixa3.JPG', text: 'I loved the first time we went to concert together I didnt know much songs but it was great either way I got to meet Majkyy, Kajá and even Jarda even tho he is weird and I am not his biggest fan xd.' },
        { src: 'assets/fixa4.jpg', text: 'I loved the first time we went to concert together I didnt know much songs but it was great either way I got to meet Majkyy, Kajá and even Jarda even tho he is weird and I am not his biggest fan xd.' }
      ]
    },
    {
      id: 'first-time-in-plzen',
      date: 'First time in Plzen',
      photos: [
        { src: 'assets/plzen.jpg', text: 'This trip was soooo good I enjoyed playing voleyball with you and my friends, seeing Vanda and Šimon strugggle was hilarious ngl. You met some of my friends and got along so well and even told me how safe and good you feel with them, how welcomed you felt and that made me very happy.' },
        { src: 'assets/plzen1.JPG', text: 'This trip was soooo good I enjoyed playing voleyball with you and my friends, seeing Vanda and Šimon strugggle was hilarious ngl. You met some of my friends and got along so well and even told me how safe and good you feel with them, how welcomed you felt and that made me very happy.' }
      ]
    },
    {
      id: 'andrejovo-oslava',
      date: 'Eli oslava',
      photos: [
        { src: 'assets/andrej_oslava.jpg', text: 'idk xd ' },
        { src: 'assets/andrej2.JPG', text: 'idk xd ' }
      ]
    },
    {
      id: 'pregnant-already',
      date: 'Pregnant already?',
      photos: [
        { src: 'assets/pregnanci.png', text: 'Little pranking people bcs why not xd it was extremely funny how some ppl actually fell for it.' }
      ]
    },
    {
      id: 'mamky-oslava',
      date: 'Mamky oslava',
      photos: [
        { src: 'assets/oslava_mamka.jpg', text: 'This was first time meeeting your family(except Danny) and I enjoyed it very much it made me really happy that your mom invited me to her birthday to meet me. It was great meeting your mom Jirka and your grandpa they were all very chill and welcoming.' },
        { src: 'assets/oslava_mamka1.jpg', text: 'This was first time meeeting your family(except Danny) and I enjoyed it very much it made me really happy that your mom invited me to her birthday to meet me. It was great meeting your mom Jirka and your grandpa they were all very chill and welcoming.' }
      ]
    },
    {
      id: 'planetarium',
      date: 'Planetarium',
      photos: [
        { src: 'assets/planetarium.JPG', text: 'Going to planetarium with your was sooo much fun since I havent been there since I was little kid and I knew how much u wanted to go there and seeing you all happy and excited when you discovered where we are going made me sooooo happy.' }
      ]
    },
    {
      id: 'yabbinka-20',
      date: 'Yabbinka 20',
      photos: [
        { src: 'assets/oslava.jpg', text: 'Your 20th birthday and first birthday party together. It was soo much fun. It started with cake and gifts at my place and then we went to your birthday party with all your cool friends. I met some great new people there and talked with the ones I already knew I enjoyed it sooo much and I was so happy when I saw how happy and how much you enjoyed it. ' },
        { src: 'assets/oslava1.jpg', text: 'Your 20th birthday and first birthday party together. It was soo much fun. It started with cake and gifts at my place and then we went to your birthday party with all your cool friends. I met some great new people there and talked with the ones I already knew I enjoyed it sooo much and I was so happy when I saw how happy and how much you enjoyed it.' },
        { src: 'assets/oslava2.jpg', text: 'Your 20th birthday and first birthday party together. It was soo much fun. It started with cake and gifts at my place and then we went to your birthday party with all your cool friends. I met some great new people there and talked with the ones I already knew I enjoyed it sooo much and I was so happy when I saw how happy and how much you enjoyed it.' },
        { src: 'assets/oslava3.jpg', text: 'Your 20th birthday and first birthday party together. It was soo much fun. It started with cake and gifts at my place and then we went to your birthday party with all your cool friends. I met some great new people there and talked with the ones I already knew I enjoyed it sooo much and I was so happy when I saw how happy and how much you enjoyed it.' },
        { src: 'assets/oslava4.jpg', text: 'Your 20th birthday and first birthday party together. It was soo much fun. It started with cake and gifts at my place and then we went to your birthday party with all your cool friends. I met some great new people there and talked with the ones I already knew I enjoyed it sooo much and I was so happy when I saw how happy and how much you enjoyed it.' },
        { src: 'assets/oslava5.jpg', text: 'Your 20th birthday and first birthday party together. It was soo much fun. It started with cake and gifts at my place and then we went to your birthday party with all your cool friends. I met some great new people there and talked with the ones I already knew I enjoyed it sooo much and I was so happy when I saw how happy and how much you enjoyed it.' },
        { src: 'assets/oslava6.jpg', text: 'Your 20th birthday and first birthday party together. It was soo much fun. It started with cake and gifts at my place and then we went to your birthday party with all your cool friends. I met some great new people there and talked with the ones I already knew I enjoyed it sooo much and I was so happy when I saw how happy and how much you enjoyed it.' },
      ] 
    },
    {
      id: 'just-us-being-goofy',
      date: 'Just us being goofy',
      photos: [
        { src: 'assets/goofy1.JPG', text: 'I love youuuu so so much my beatiful babyyy and I am so happy that we can you be ourselfs and goofy together.' },
        { src: 'assets/goofy2.JPG', text: 'I love youuuu so so much my beatiful babyyy and I am so happy that we can you be ourselfs and goofy together.' },
        { src: 'assets/goofy3.JPG', text: 'I love youuuu so so much my beatiful babyyy and I am so happy that we can you be ourselfs and goofy together.' },
        { src: 'assets/goofy4.JPG', text: 'I love youuuu so so much my beatiful babyyy and I am so happy that we can you be ourselfs and goofy together.' },
        { src: 'assets/goofy5.jpg', text: 'I love youuuu so so much my beatiful babyyy and I am so happy that we can you be ourselfs and goofy together.' },
        { src: 'assets/goofy6.jpg', text: 'I love youuuu so so much my beatiful babyyy and I am so happy that we can you be ourselfs and goofy together.' },
        { src: 'assets/goofy7.jpg', text: 'I love youuuu so so much my beatiful babyyy and I am so happy that we can you be ourselfs and goofy together.' },
        { src: 'assets/goofy8.jpg', text: 'I love youuuu so so much my beatiful babyyy and I am so happy that we can you be ourselfs and goofy together.' },
        { src: 'assets/bananova_strecha.jpg', text: 'I love youuuu so so much my beatiful babyyy and I am so happy that we can you be ourselfs and goofy together.' }
      ]
    }
  ]
};
