const GalleryStore = {
  lookTitle: {
    lookOne: 'The Look: Seventies Chic',
    lookTwo: 'The Look: Tonal',
    lookThree: 'The Look: Structured Utility'
  },
  lookInfo: {
    lookOne:
      'There’s been a distinct 70s influence on the runway for a number of seasons now, and maybe that’s because we all want to go back to a time of Flower Power, social revolution, disco and exquisite style? For SS21, designers such as Balenciaga and Chloe nailed that 70s aesthetic, especially in the denim department, which is why Lillian loves these And/Or Belmont jeans. With a high waist and wider fit, they capture that 70s vibe, and when paired with this burnt orange Mango cardigan and John Lewis & Partners aviator shades, you’ve got a look that’s perfectly new retro.',
    lookTwo:
      'If you want to look stylish without having to think too hard about it, the easiest way to go about it is to go monochrome. Pull together some shades of one particular colour and layer them together, as we’ve seen from brands like Fendi and Max Mara. We’ll be taking Lillian’s lead and opting for this light neutral shade from top to toe. We especially love the paperbag waist detail on these Ro&Zo denim trousers.',
    lookThree:
      'After spending much of the last year in sweatpants, you might think that sportswear would be the last thing in our wardrobes that we’d want to wear, but hear us out... We saw amped-up sportswear at the likes of Prada and Celine, hence this look pulled together by Lillian. An oversized les girls les boys hoodie (generous proportions are also a big trend) paired with these Kin Leap strapped shoes and you’ve got a runway-ready look (that’s also super comfy).'
  },
  lookImages: {
    lookOne: [
      {
        id: 'the-look-seventies-chic-1',
        src: '/look1/img1.jpeg',
        hotspots: [
          {
            id: 1,
            position: [0, 0.3, 0],
            title: 'Mango Openwork Round Neck Cardigan',
            imageSrc: '/look1/hotspot/mango.jpeg',
            description:
              'Framed with a simple round neckline, this cardigan by Mango is finished in a textured handle for a delightfully tactile edge and is made from a light and breathable Organic cotton-blend.',
            buttonSrc: 'https://www.johnlewis.com/mango-openwork-round-neck-cardigan/orange/p5381714?source=Athleisure_grazia_BCA_250121'
          },
          {
            id: 2,
            position: [0.1, 0.15, 0.3],
            title: 'AND/OR Belmont Flare Jeans',
            imageSrc: '/look1/hotspot/jeans.jpeg',
            description:
              "Inspired by the iconic bootcut of the 90's, the Belmont Flare jeans feature unusual jet pockets at the front as well as a classic zip fly and button fastening with belt loops. Made from a thoughtful blend of organic cotton and recycled polyester, they are designed to have a slight stretch for a comfortable fit.",
            buttonSrc: 'https://www.johnlewis.com/and-or-belmont-flare-jeans-darkened-sky/p5135032?source=Athleisure_grazia_BCA_250121'
          }
        ]
      },
      {
        id: 'the-look-seventies-chic-2',
        src: '/look1/img2.jpeg',
        hotspots: [
          {
            id: 1,
            position: [0.15, 0.15, 0.3],
            title: 'John Lewis & Partners Aviator shades',
            imageSrc: '/look1/hotspot/shades.jpeg',
            description:
              'This pair of aviator-shaped sunglasses from our in-house brand comes with an eyebrow detail. Visible studs bring more character to the look. The sunglasses offer all-day comfort thanks to their polycarbonate lenses that are lightweight and impact-resistant for your peace of mind.',
            buttonSrc:
              "https://www.johnlewis.com/john-lewis-partners-women's-aviator-sunglasses-gold-brown-gradient/p5401578?source=Athleisure_grazia_BCA_250121"
          },
          {
            id: 2,
            position: [-0.2, 0.04, 0.5],
            title: 'Astrid & Miyu Basic Large Hoop Earrings',
            imageSrc: '/look1/hotspot/earrings.jpeg',
            description:
              'The perfect statement piece of jewellery, these Astrid & Miyu large hoop earrings offer a polished tube shape that will certainly get you noticed. The earrings are for pierced ears only.',
            buttonSrc: 'https://www.johnlewis.com/astrid-miyu-basic-large-hoop-earrings-gold/p5031067?source=Athleisure_grazia_BCA_250121'
          },
          {
            id: 3,
            position: [-0.1, -0.25, 0.3],
            title: 'Monica Vinader Signature Amazonite Bangle',
            imageSrc: '/look1/hotspot/bangle.jpeg',
            description:
              'The signature Monica Vinader bangle design comes with a brilliant, hand-cut Peruvian amazonite. Wear it alone or add to a stack for a more statement look. Every hand-crafted Monica Vinader piece comes with a 5-year warranty and lifetime repairs.',
            buttonSrc:
              'https://www.johnlewis.com/monica-vinader-signature-amazonite-bangle/gold/p5413574?source=Athleisure_grazia_BCA_250121'
          }
        ]
      },
      {
        id: 'the-look-seventies-chic-3',
        src: '/look1/img3.jpeg',
        hotspots: [
          {
            id: 1,
            position: [0, 0, 0],
            title: 'Mulberry Mini Millie Heavy Grain Leather Tote Bag',
            imageSrc: '/look1/hotspot/bag.jpeg',
            description:
              'In a new mini size that fits all your essentials, the beautiful and practical Millie tote from Mulberry is a great addition to your accessory collection. A celebration of British leatherwork, its clean unlined construction offers a modern interpretation of these traditional skills. The drawstring closure is finished with leather tassels, a nod to traditional shoemaking embellishment, and this mini version has been adapted for cross-body wear with an adjustable shoulder strap for hands-free convenience.',
            buttonSrc:
              'https://www.johnlewis.com/mulberry-mini-millie-heavy-grain-leather-tote-bag/rust/p5151597?source=Athleisure_grazia_BCA_250121'
          }
        ]
      }
    ],
    lookTwo: [
      {
        id: 'the-look-tonal-1',
        src: '/look2/img1.jpeg',
        hotspots: [
          {
            id: 1,
            position: [0.1, 0.15, 0.3],
            title: 'Mint Velvet Faux Leather Shacket',
            imageSrc: '/look2/hotspot/leather_jacket.jpeg',
            description:
              "Made from butter-soft faux leather, this overshirt is designed in a relaxed silhouette that falls just below the hip. It's finished with covered poppers across the front which are matched on the flap pockets and a neat collar. Wear over casual ensembles for pared-back appeal.",
            buttonSrc: 'https://www.johnlewis.com/mint-velvet-faux-leather-shacket-beige/p5321892?source=Athleisure_grazia_BCA_250121'
          },
          {
            id: 2,
            position: [0, 0, 0],
            title: 'Ro&Zo Denim Paperbag Trousers, Stone',
            imageSrc: '/look2/hotspot/trouser.jpeg',
            description:
              'Easy wearing in soft denim, these paperbag style trousers have a fitted waist with tie detail and a straight leg. The modern shape creates a flattering, hourglass silhouette, that can be worn day or night. Wear with anything from simple tees to floaty blouses.',
            buttonSrc: 'https://www.johnlewis.com/ro-zo-denim-paperbag-trousers-stone/p5360057?source=Athleisure_grazia_BCA_250121'
          }
        ]
      },
      {
        id: 'the-look-tonal-2',
        src: '/look2/img2.jpeg',
        hotspots: [
          {
            id: 1,
            position: [0, 0, 0],
            title: 'Mango Turtle Neck Sweater',
            imageSrc: '/look2/hotspot/sweater.jpeg',
            description:
              'A great base for smart and casual wear, this sweater from Mango has a slim fit for easy layering. Its cosy turtleneck keeps you warm while the short sleeves make it perfect for transitioning between the seasons.',
            buttonSrc: 'https://www.johnlewis.com/mango-turtle-neck-sweater/light-beige/p5375833?source=Athleisure_grazia_BCA_250121'
          },
          {
            id: 2,
            position: [0.28, 0.25, 0.3],
            title: 'Astrid & Miyu Basic Large Hoop Earrings',
            imageSrc: '/look1/hotspot/earrings.jpeg',
            description:
              'The perfect statement piece of jewellery, these Astrid & Miyu large hoop earrings offer a polished tube shape that will certainly get you noticed. The earrings are for pierced ears only.',
            buttonSrc: 'https://www.johnlewis.com/astrid-miyu-basic-large-hoop-earrings-gold/p5031067?source=Athleisure_grazia_BCA_250121'
          }
        ]
      },
      {
        id: 'the-look-tonal-3',
        src: '/look2/img3.jpeg',
        hotspots: [
          {
            id: 1,
            position: [0, 0, 0],
            title: 'Mango Snake Effect Stiletto Heel Calf Boots',
            imageSrc: '/look2/hotspot/boots.jpeg',
            description:
              'Sophisticated in style, this pair of calf boots from Mango is rendered in a long-lasting fabric for longevity of wear. Set on a stiletto heel, they boast a snakeskin effect and are topped with a sharply pointed toe for a timeless finish.',
            buttonSrc:
              'https://www.johnlewis.com/mango-snake-effect-stiletto-heel-calf-boots-pastel-brown/p5401605?source=Athleisure_grazia_BCA_250121'
          }
        ]
      }
    ],
    lookThree: [
      {
        id: 'the-look-structured-utility-1',
        src: '/look3/img1.jpeg',
        hotspots: [
          {
            id: 1,
            position: [-0.2, 0.2, 0],
            title: 'les girls les boys Loopback Hoodie',
            imageSrc: '/look3/hotspot/hoodie.jpeg',
            description:
              'Designed for sharing, the generous oversized fit hoodie is cut from 100% organic cotton and in a lighter weight soft loopback than the main sweats series. A clean, simple and modern silhouette, finished with white puff printed logo on the sleeve. Coordinate with joggers or mix and match for a true les girls les boys style.',
            buttonSrc: 'https://www.johnlewis.com/les-girls-les-boys-loopback-hoodie-black/p5263826?source=Athleisure_grazia_BCA_250121'
          },
          {
            id: 2,
            position: [-0.1, 0.1, 0.3],
            title: 'les girls les boys Jersey Tight Shorts',
            imageSrc: '/look3/hotspot/shorts.jpeg',
            description:
              'Tight shorts made from soft stretch cotton jersey. A wardrobe staple piece that completes any outfit. The thigh-length slim leg makes it easy to style with hoodies, t-shirts or pyjamas. Finished with a subtle embroidered logo on the leg.',
            buttonSrc: 'https://www.johnlewis.com/les-girls-les-boys-jersey-tight-shorts/black/p5263818?source=Athleisure_grazia_BCA_250121'
          }
        ]
      },
      {
        id: 'the-look-structured-utility-2',
        src: '/look3/img2.jpeg',
        hotspots: [
          {
            id: 1,
            position: [0, 0, 0],
            imageSrc: '/look3/hotspot/hoodie.jpeg',
            description:
              'Designed for sharing, the generous oversized fit hoodie is cut from 100% organic cotton and in a lighter weight soft loopback than the main sweats series. A clean, simple and modern silhouette, finished with white puff printed logo on the sleeve. Coordinate with joggers or mix and match for a true les girls les boys style.',
            buttonSrc: 'https://www.johnlewis.com/les-girls-les-boys-loopback-hoodie-black/p5263826?source=Athleisure_grazia_BCA_250121'
          }
        ]
      },
      {
        id: 'the-look-structured-utility-3',
        src: '/look3/img3.jpeg',
        hotspots: [
          {
            id: 1,
            position: [-0.16, 0.18, 0],
            title: 'Astrid & Miyu Basic Large Hoop Earrings',
            imageSrc: '/look1/hotspot/earrings.jpeg',
            description:
              'The perfect statement piece of jewellery, these Astrid & Miyu large hoop earrings offer a polished tube shape that will certainly get you noticed. The earrings are for pierced ears only.',
            buttonSrc: 'https://www.johnlewis.com/astrid-miyu-basic-large-hoop-earrings-gold/p5031067?source=Athleisure_grazia_BCA_250121'
          }
        ]
      }
    ]
  }
}

export default GalleryStore
