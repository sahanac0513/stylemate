/**
 * STYLEMATE – PERSONAL FASHION ASSISTANT
 * Core Chatbot Engine & Interactive UI Controller
 */

// ==========================================================================
// 1. KNOWLEDGE BASE & PREDEFINED RESPONSES DATASET
// ==========================================================================

const FASHION_DATA = {
  // A. OUTFIT RECOMMENDATIONS (Organized by aesthetic & rotation)
  outfits: {
    casual: [
      {
        name: "Effortless Parisian Casual",
        vibe: "Chic & Laid-back",
        top: "Crisp white relaxed linen shirt or fitted ribbed tee",
        bottom: "High-waisted straight-leg vintage blue denim jeans",
        footwear: "Minimalist white leather sneakers or woven pointed mules",
        accessories: "Croissant shoulder bag, delicate layered gold chain & tortoiseshell sunnies",
        tip: "French tuck the shirt slightly in the front to accentuate your waistline without looking rigid."
      },
      {
        name: "Clean Girl Aesthetic",
        vibe: "Fresh & Polished",
        top: "Oatmeal knit sleeveless sweater vest or boatneck top",
        bottom: "Tailored wide-leg trousers in beige or sage",
        footwear: "Chunky platform retro sneakers or cream loafers",
        accessories: "Structured baguette bag, sleek claw clip hairstyle & dainty gold huggie earrings",
        tip: "Keep hair and makeup fresh with a sleek hairstyle and dewy blush to elevate casual basics."
      },
      {
        name: "Y2K Retro Streetwear",
        vibe: "Youthful & Cool",
        top: "Cropped graphic baby tee or fitted halter top",
        bottom: "Mid-rise relaxed cargo pants or baggy light-wash jeans",
        footwear: "Retro high-top sneakers (like Dunks or Sambas)",
        accessories: "Puffer nylon crossbody bag, silver chain choker & oval tinted sunglasses",
        tip: "Balance the volume: a fitted top balances loose, relaxed cargo trousers perfectly."
      }
    ],

    college: [
      {
        name: "Campus Chic Comfort",
        vibe: "Smart & Practical",
        top: "Oversized knitted crewneck sweater over a collared button-up",
        bottom: "Flattering mom jeans or pleated A-line mini skirt with tights",
        footwear: "Classic canvas sneakers (Converse/Vans) or chunky Chelsea boots",
        accessories: "Canvas tote bag for laptop & books, minimalist smartwatch & hair scrunchie",
        tip: "Layering is key for classroom temperature changes. Roll up your sweater sleeves slightly!"
      },
      {
        name: "Preppy Academic Fit",
        vibe: "Put-together & Bright",
        top: "Striped Breton long-sleeve tee or soft pastel polo sweater",
        bottom: "Khaki or charcoal relaxed ankle-length chinos",
        footwear: "Tassel penny loafers with white ankle socks or white low-tops",
        accessories: "Corduroy backpack, wire-frame spectacles & a leather-strap watch",
        tip: "Exposed white socks with loafers add an instant editorial, youthful charm."
      },
      {
        name: "Sporty Athleisure Campus Fit",
        vibe: "On-the-Go Vibe",
        top: "Half-zip fleece pullover or cropped athletic hoodie",
        bottom: "High-waist matte black flared leggings or ribbed biker shorts",
        footwear: "Cushioned running trainers with athletic socks",
        accessories: "Belt bag worn diagonally, baseball cap & stainless steel tumbler",
        tip: "Flared leggings elongate the legs much more than traditional ankle-length leggings."
      }
    ],

    summer: [
      {
        name: "Sun-drenched Coastal Linen",
        vibe: "Breezy & Radiant",
        top: "Pastel crop camisole or square-neck puff-sleeve blouse",
        bottom: "Flowy tiered linen midi skirt or breezy high-rise cotton shorts",
        footwear: "Braided leather slide sandals or espadrille wedges",
        accessories: "Woven raffia tote, wide-brim straw hat & pearl-drop earrings",
        tip: "Stick to breathable, natural fibers like linen and cotton to stay stylish and cool."
      }
    ],

    winter: [
      {
        name: "Cozy Cashmere Luxe",
        vibe: "Warm & Elegant",
        top: "Chunky ribbed turtleneck in camel or rich cream",
        bottom: "Straight-cut wool trousers or thermal fleece-lined tights with a skirt",
        footwear: "Knee-high leather riding boots or lug-sole boots",
        accessories: "Houndstooth woolen trench coat, oversized blanket scarf & leather gloves",
        tip: "Monochromatic layering in cream and camel tones makes affordable winter wear look ultra-expensive."
      }
    ],

    ethnic: [
      {
        name: "Royal Heritage Silk Saree",
        vibe: "Timeless & Regal",
        top: "Rich Kanjeevaram / Banarasi silk saree with boat-neck brocade blouse",
        bottom: "Structured cotton petticoat with pleat-lock waist tie",
        footwear: "Metallic gold block-heel sandals or embellished mojaris",
        accessories: "Kundan temple choker, matching jhumkas, fresh jasmine gajra & potli bag",
        tip: "Pin the shoulder pleats securely and leave the pallu gracefully draped to elongate your frame."
      },
      {
        name: "Contemporary Chikankari Grace",
        vibe: "Effortless Ethnic Elegance",
        top: "Pastel (lavender or blush) Lucknowi Chikankari long kurti",
        bottom: "Flared cotton-silk palazzo pants or flowy sharara",
        footwear: "Handcrafted Kolhapuri chappals or pointed juttis",
        accessories: "Oxidized silver statement earrings, bohemian silver bangles & mirror-work clutch",
        tip: "Pastel chikankari paired with oxidized German silver jewelry is the ultimate understated elegance formula."
      },
      {
        name: "Indo-Western Fusion Drape",
        vibe: "Modern Chic Festive",
        top: "Embellished crop top or corset blouse with cape jacket",
        bottom: "High-waist draped dhoti pants or pre-stitched pleated skirt",
        footwear: "Strappy nude block heels",
        accessories: "Geometric ear-cuffs, statement waist belt & micro beaded handbag",
        tip: "A sleek metallic waist belt cinches the drape and gives an ultra-slender modern silhouette."
      }
    ],

    mens: [
      {
        name: "Old Money Smart-Casual",
        vibe: "Quiet Luxury & Sharp",
        top: "Tailored linen button-down or knit polo in oat, navy, or cream",
        bottom: "Slim-straight pleated chinos in beige or olive",
        footwear: "Suede penny loafers or clean white minimalist leather sneakers",
        accessories: "Woven leather belt, classic analog watch & tortoiseshell sunglasses",
        tip: "Roll sleeves to mid-forearm and ensure pants break cleanly right above the shoe tongue."
      },
      {
        name: "Urban Streetwear Minimalist",
        vibe: "Relaxed & Youthful",
        top: "Heavyweight boxy crewneck tee or unbuttoned utility overshirt",
        bottom: "Relaxed-fit carpenter pants or vintage dark-wash straight denim",
        footwear: "Retro basketball sneakers (e.g., Dunks or New Balance 550)",
        accessories: "Crossbody mini messenger pouch & stainless steel chain necklace",
        tip: "Quality heavyweight fabric holds its structure and immediately elevates a basic tee."
      }
    ],

    general: [
      {
        name: "Smart-Casual Power Formula",
        vibe: "Modern Sophisticate",
        top: "Soft silk camisole or fine-knit mock-neck top",
        bottom: "High-waist tailored culottes or ankle-skimming trousers",
        footwear: "Block heel slingback pumps or glossy pointed loafers",
        accessories: "Structured top-handle bag, gold statement signet ring & minimalist belt",
        tip: "A structured blazer instantly bridges the gap between formal and effortless."
      },
      {
        name: "Modern Bohemian Romance",
        vibe: "Whimsical & Free",
        top: "Embroidered smocked peasant blouse with bell sleeves",
        bottom: "Vintage flare jeans or tiered floral maxi skirt",
        footwear: "Suede ankle booties with stacked heel",
        accessories: "Layered beaded necklaces, fringe saddle bag & wide felt fedora",
        tip: "Let one printed or embroidered piece take the spotlight while keeping other items grounded."
      }
    ]
  },

  // B. OCCASION STYLING
  occasions: {
    party: [
      {
        occasion: "Cocktail Party / Glam Night Out",
        vibe: "Sleek, Captivating & Fun",
        top: "Satin cowl-neck halter top OR Little Black Dress (LBD)",
        bottom: "Liquid satin midi skirt or faux-leather tailored pants",
        footwear: "Strappy metallic stiletto sandals or kitten heels",
        accessories: "Glittering crystal clutch, statement drop earrings & bold red or berry lip",
        proTip: "If your top or dress features sequins or high shine, keep jewelry sleek and architectural to avoid visual clutter."
      },
      {
        occasion: "Rooftop Party / Club Night",
        vibe: "Trendy & High Energy",
        top: "Corset-style boned bodice or metallic sheer mesh layered top",
        bottom: "High-waisted coated black denim or metallic wide-leg trousers",
        footwear: "Square-toe block heel mules (comfy for dancing!)",
        accessories: "Chainmail mini bag, chunky silver hoop earrings & winged eyeliner",
        proTip: "Opt for sturdy block heels or platform mules so you can dance all night without pain."
      }
    ],

    wedding: [
      {
        occasion: "Wedding Guest (Day / Cocktail)",
        vibe: "Romantic & Celebration-Ready",
        top: "Floral chiffon wrap dress or romantic pastel slip gown",
        bottom: "Built into dress / or tailored silk co-ord set in rose or lavender",
        footwear: "Nude or metallic ankle-strap block heels (grass-safe!)",
        accessories: "Embellished envelope clutch, floral hair comb & delicate rose gold jewelry",
        proTip: "Never wear solid white, ivory or cream to a Western wedding. Pastels and floral prints are always safe and gorgeous."
      },
      {
        occasion: "Traditional / Festive Wedding Guest",
        vibe: "Royal & Ornate",
        top: "Embroidered silk crop blouse or detailed anarkali tunic",
        bottom: "Flared lehenga skirt or flowy sharara with embroidered borders",
        footwear: "Embroidered juttis or cushioned metallic wedge sandals",
        accessories: "Kundan jhumkas, matching potli bag & sheer embroidered dupatta",
        proTip: "Drape the dupatta over one shoulder and pin securely so you can celebrate hands-free."
      }
    ],

    date: [
      {
        occasion: "Romantic Dinner Date",
        vibe: "Sensual & Enchanting",
        top: "Off-the-shoulder sweetheart knit top or slip midi dress",
        bottom: "Side-slit silk skirt or dark slim-fit jeans with a blazer",
        footwear: "Pointed-toe slingback heels or sleek ankle boots",
        accessories: "Micro crossbody bag, signature floral perfume & delicate pendant necklace",
        proTip: "The off-the-shoulder neckline naturally frames your collarbones and face in intimate candlelight."
      },
      {
        occasion: "Casual Coffee & Museum Date",
        vibe: "Charming & Approachable",
        top: "Fitted pastel cardigan buttoned as a top",
        bottom: "Pleated tennis skirt or high-waisted wide-leg denim",
        footwear: "Clean platform sneakers or ballet flats",
        accessories: "Small shoulder bag, colorful ribbon scrunchie & subtle lip gloss",
        proTip: "Pick footwear you can comfortably walk in for a few hours without hesitation."
      }
    ],

    office: [
      {
        occasion: "Corporate Chic / Business Professional",
        vibe: "Authoritative & Sharp",
        top: "Silk button-down blouse in ivory, French blue, or blush",
        bottom: "Tailored high-waisted cigarette pants or pencil skirt",
        footwear: "Closed-toe 2-inch block heels or pointed leather loafers",
        accessories: "Structured leather tote (laptop size), slim leather belt & pearl studs",
        proTip: "Monochrome dressing (e.g. navy on navy or camel on cream) projects supreme executive presence."
      },
      {
        occasion: "Creative / Business Casual Office",
        vibe: "Modern & Professional",
        top: "Oversized tailored blazer layered over a clean ribbed mock-neck top",
        bottom: "Dark wash non-distressed straight jeans or pleated wide trousers",
        footwear: "Two-tone slingback flats or leather Chelsea boots",
        accessories: "Minimalist geometric earrings & a sleek leather laptop briefcase",
        proTip: "The rule of third: pairing a structured blazer with relaxed jeans hits the sweet spot of creative polish."
      }
    ],

    birthday: [
      {
        occasion: "Birthday Queen Celebration",
        vibe: "Center of Attention & Playful",
        top: "Shimmering sequin mini dress or puff-sleeve statement milkmaid dress",
        bottom: "Built into dress / or satin wide-leg pants with a feather-trim top",
        footwear: "Glittering platform heels or statement lace-up sandals",
        accessories: "Crystal mini bucket bag, sparkly statement earrings & birthday hair clips",
        proTip: "It's your special day! Choose one high-impact detail (feathers, sequins, or bold color) that makes you beam in photos."
      }
    ],

    vacation: [
      {
        occasion: "Resort & Holiday Getaway",
        vibe: "Tropical, Sun-Kissed & Effortless",
        top: "Crochet knit crop halter or open-front linen shirt over swimwear",
        bottom: "High-waist printed palazzo pants or flowy cotton wrap skirt",
        footwear: "Braided slide sandals or platform espadrilles",
        accessories: "Oversized straw sunhat, shell pendant necklace & woven beach basket",
        proTip: "Pack wrinkle-resistant fabrics or embrace relaxed crinkled linen that looks naturally luxurious."
      }
    ],

    college: [
      {
        occasion: "Everyday College Campus",
        vibe: "Effortless, Trendy & Functional",
        top: "Relaxed graphic tee or oversized button-up worn unbuttoned over a white tank",
        bottom: "Straight-leg cargo pants or light-wash relaxed denim",
        footwear: "Durable trendy sneakers (Converse, New Balance, or Nike)",
        accessories: "Spacious tote bag, claw clip & insulated water bottle sleeve",
        proTip: "Comfort is king for long campus walks. Use statement sneakers to make basic tees look styled."
      }
    ]
  },

  // C. COLOUR MATCHING
  colors: [
    {
      pair: "Black + White",
      color1: { name: "Onyx Black", hex: "#1A1A1A" },
      color2: { name: "Soft Ivory White", hex: "#FAF9F6" },
      harmony: "High-Contrast Timeless Classic",
      why: "Black and White create the ultimate high-contrast optical balance. The dark shade absorbs light to sculpt silhouettes, while crisp white reflects brightness toward your face. It embodies Coco Chanel's iconic philosophy: 'Black has it all. White too. Their beauty is absolute.'",
      stylingIdea: "Style a crisp white poplin shirt tucked into tailored black high-waist trousers, finished with black pointed flats and gold button accents."
    },
    {
      pair: "Pink + White",
      color1: { name: "Blush Pink", hex: "#F7DDE5" },
      color2: { name: "Clean Pearl White", hex: "#FFFFFF" },
      harmony: "Soft Romantic & Feminine",
      why: "Blush pink injects warmth, tenderness, and youthfulness, while crisp white keeps the look clean, crisp, and fresh rather than overly sugary. It creates an airy, approachable, and glowing aesthetic suitable for brunch or daytime outings.",
      stylingIdea: "Wear a soft blush pink knit cardigan or blazer paired with an ivory pleated tennis skirt or wide-leg white trousers and rose-gold jewelry."
    },
    {
      pair: "Blue + Beige",
      color1: { name: "French Sky Blue", hex: "#7EAAED" },
      color2: { name: "Warm Oat Beige", hex: "#E7DAC9" },
      harmony: "Coastal Parisian Chic",
      why: "Sky blue is a cool, calming tone, whereas warm beige is an earthy, grounded neutral. Opposing temperatures (cool sky + warm sand) create natural visual harmony inspired by sea and shore. It is effortlessly sophisticated and never clashes.",
      stylingIdea: "Pair an oversized light-blue striped Oxford shirt with high-rise beige pleated trousers and tan leather slides."
    },
    {
      pair: "Brown + Cream",
      color1: { name: "Rich Espresso Brown", hex: "#4A2E1B" },
      color2: { name: "Butter Cream", hex: "#FDF8E7" },
      harmony: "Quiet Luxury & Cozy Warmth",
      why: "Rich chocolate or coffee brown is softer than black, providing depth without severity. Cream softens the contrast with warm undertones, evoking rich coffee and cream. This combination is a staple of the 'Old Money' aesthetic.",
      stylingIdea: "Combine a butter-cream ribbed turtleneck sweater with chocolate brown tailored trousers or a faux-leather brown skirt."
    },
    {
      pair: "Lavender + White",
      color1: { name: "Lilac Lavender", hex: "#D6C7EB" },
      color2: { name: "Pure Linen White", hex: "#FBFBFC" },
      harmony: "Dreamy Whimsical Pastel",
      why: "Lavender carries gentle floral and spiritual undertones that feel serene and creative. White acts as a clean canvas that lets the subtle purple tones pop without overwhelming the eye.",
      stylingIdea: "A lilac slip dress styled with an unbuttoned white linen shirt and silver delicate accessories for spring picnics."
    },
    {
      pair: "Green + Beige",
      color1: { name: "Sage Olive Green", hex: "#7B8E78" },
      color2: { name: "Sand Dune Beige", hex: "#DECDB6" },
      harmony: "Botanical Earthy Harmony",
      why: "Sage green and sand beige are directly borrowed from nature. Since both shades share muted, warm-neutral undertones, they naturally soothe the eye and exude effortless organic elegance.",
      stylingIdea: "An olive linen safari jacket over an oatmeal ribbed tank top and ecru straight-leg denim jeans."
    },
    {
      pair: "Red + Pink",
      color1: { name: "Crimson Cherry Red", hex: "#C81E32" },
      color2: { name: "Dusty Rose Pink", hex: "#E8A3B4" },
      harmony: "High-Fashion Color Blocking",
      why: "Red and pink sit right next to each other on the color wheel (analogous colors). Pairing them creates high fashion editorial excitement, blending romantic sweetness with fiery confidence.",
      stylingIdea: "A tailored crimson blazer draped over a soft pink silk camisole and pink wide-leg trousers for a bold runway moment."
    }
  ],

  // D. FASHION TIPS
  tips: {
    oversized: {
      title: "How to Style Oversized Clothes Like a Pro",
      bullets: [
        {
          heading: "The Rule of Proportions",
          text: "Always balance volume. If you wear an oversized boyfriend blazer or slouchy sweater, pair it with slim or straight-leg bottoms. If you wear voluminous puddle jeans, pair them with a fitted baby tee or bodysuit."
        },
        {
          heading: "The French / Half-Tuck",
          text: "Never let an oversized top hang straight down like a sack. Tucking just the front center into your waistband creates an instant waist focal point and elongates your legs."
        },
        {
          heading: "Cinch with a Belt",
          text: "Add a medium or wide leather belt over an oversized cardigan, trench coat, or shirt dress to reclaim an hourglass silhouette."
        },
        {
          heading: "Expose Delicate Skin Points",
          text: "Roll up oversized shirt sleeves to expose your wrists, or show your ankles and collarbones. Showing these delicate anchor points prevents your frame from being overwhelmed."
        }
      ]
    },

    accessories: {
      title: "The Golden Rules of Accessorizing",
      bullets: [
        {
          heading: "The Rule of Three",
          text: "Limit key accessories to three items (e.g. Earrings + Belt + Handbag, or Necklace + Ring + Sunglasses). It keeps your outfit balanced and intentional rather than cluttered."
        },
        {
          heading: "Matching Metal Undertones",
          text: "Warm-toned outfits (creams, browns, olive) look breathtaking with gold jewelry. Cool-toned outfits (black, grey, icy blue) shine brightest with sterling silver or platinum."
        },
        {
          heading: "The Sandwich Rule",
          text: "Color-match your accessories from top to bottom! For example: wear a beige cap or earrings, a white dress in the middle, and beige sandals at the bottom. It visually 'sandwiches' your look together."
        },
        {
          heading: "Invest in One Hero Statement",
          text: "If you are wearing bold, chunky chandelier earrings, skip the necklace and let your face shine as the centerpiece."
        }
      ]
    },

    jeans: {
      title: "How to Style Different Jeans Cuts",
      bullets: [
        {
          heading: "Wide-Leg Jeans",
          text: "Style with cropped tops, fitted tanks, or ribbed turtlenecks. Pair with pointed-toe boots or platform sneakers so the hem grazes the floor gracefully."
        },
        {
          heading: "Straight-Leg Vintage Jeans",
          text: "The most versatile denim ever! Works with oversized blazers, tucked-in graphic tees, and low-heel slingbacks or classic loafers."
        },
        {
          heading: "High-Waisted Mom Jeans",
          text: "Perfect with cropped sweaters, bodysuits, and retro sneakers. Shows off the waistline and gives an effortless 90s supermodel vibe."
        },
        {
          heading: "Double Denim / Canadian Tuxedo",
          text: "Wear matching denim washes with a crisp white tee underneath, or deliberately contrast dark indigo jeans with a bleached light-wash denim jacket."
        }
      ]
    },

    capsule: {
      title: "How to Build a 10-Piece Capsule Wardrobe",
      bullets: [
        {
          heading: "The Core Philosophy",
          text: "A capsule wardrobe is a curated collection of versatile, interchangeable essentials where every single top matches every single bottom."
        },
        {
          heading: "The Essential 10 Pieces",
          text: "1. Crisp White Button-up, 2. Tailored Black Blazer, 3. Neutral Trench Coat, 4. Perfect Straight Blue Jeans, 5. Black Tailored Trousers, 6. Quality Ribbed White Tank, 7. Black Slip Midi Dress, 8. Cream Cashmere/Knit Sweater, 9. Clean White Sneakers, 10. Classic Black/Nude Loafers or Heels."
        },
        {
          heading: "The 80/20 Color Ratio",
          text: "Build 80% of your wardrobe around cohesive neutrals (black, ivory, beige, navy, camel) and 20% around accent colors you love (blush, burgundy, sage)."
        },
        {
          heading: "The 333 Challenge",
          text: "Select 3 tops, 3 bottoms, and 3 pairs of shoes. By mixing and matching, you can easily create over 20 distinct outfits for a month of effortless dressing!"
        }
      ]
    },

    elegant: {
      title: "How to Look Elegant & Expensive on a Budget",
      bullets: [
        {
          heading: "Embrace Monochrome Dressing",
          text: "Dressing in varying tones of one neutral (like all cream, all beige, or all black) instantly looks elevated, cohesive, and luxurious."
        },
        {
          heading: "Steam & De-wrinkle Everything",
          text: "Even a $1000 designer dress looks cheap if wrinkled. A $15 handheld steamer makes budget fabrics look instantly bespoke and crisp."
        },
        {
          heading: "Carry Structured Bags Over Slouchy Bags",
          text: "Structured handbags with clean geometric lines and minimal metallic hardware look 10x more expensive than unstructured nylon or flimsy totes."
        },
        {
          heading: "Tailor Your Clothes",
          text: "Fit is the true secret of elegance. Hemming pants to the perfect ankle length or taking in a blazer's waist transforms off-the-rack pieces into custom haute couture."
        },
        {
          heading: "Minimalist Dainty Gold Jewelry",
          text: "Simple gold hoops, a subtle herringbone necklace, and a minimalist watch create quiet luxury without spending a fortune."
        }
      ]
    }
  },

  // E. BUDGET FASHION & REUSING PIECES
  budget: {
    title: "Smart Budget Fashion & Wardrobe Rewear Hacks",
    bullets: [
      {
        heading: "The 1-Piece, 3-Ways Styling Rule",
        text: "Before buying anything, ask yourself: 'Can I style this with at least 3 items currently in my closet?' For example, a satin slip dress can be worn alone for date night, layered over a white tee for college, or topped with an oversized knit sweater as a skirt!"
      },
      {
        heading: "High-Low Dressing Formula",
        text: "Pair high-street or thrifted essentials (a $10 white tee or thrifted jeans) with one quality focal piece (a tailored structured blazer or neat leather loafers). Nobody will suspect your outfit is budget-friendly."
      },
      {
        heading: "Master Second-hand & Vintage Thrifting",
        text: "Look for high-quality natural fabrics like 100% wool coats, silk scarves, and genuine leather belts in thrift stores. They age with grace and possess vintage character fast fashion cannot replicate."
      },
      {
        heading: "Fabric Maintenance That Saves Thousands",
        text: "Use a rechargeable fabric shaver to remove pilling from knit sweaters, keep a sticky lint roller by your door, and wash delicate garments in mesh laundry bags inside out with cold water."
      }
    ]
  },

  // F. FALLBACK
  fallback: {
    message: "I'm still learning about that! Try asking me about outfit ideas, colour combinations, occasions or fashion tips. 💗",
    chips: [
      { label: "👗 Suggest an Outfit", prompt: "Suggest an outfit for me today" },
      { label: "🎨 Black + White Match", prompt: "How to style black and white color combination?" },
      { label: "🥂 Date Night Look", prompt: "What should I wear for a romantic dinner date?" },
      { label: "✨ Oversized Clothes Tips", prompt: "How to style oversized clothes?" },
      { label: "💰 Budget Styling", prompt: "How to look stylish on a budget?" }
    ]
  }
};

// ==========================================================================
// 2. STATE MANAGEMENT & STORAGE
// ==========================================================================

const AppState = {
  activeSessionId: null,
  isTyping: false,
  soundEnabled: true,
  lookbook: [],
  recentChats: [
    {
      id: "chat-seed-1",
      title: "✨ Saturday Night Outfit",
      topic: "party",
      timestamp: "Yesterday",
      messages: [
        { sender: "user", text: "Suggest an outfit for a Saturday night party with friends!", time: "8:30 PM" },
        { 
          sender: "bot", 
          time: "8:30 PM",
          data: {
            type: "outfit",
            item: FASHION_DATA.occasions.party[0],
            text: "Here is a stunning cocktail look to turn heads this Saturday night! ✨"
          }
        }
      ]
    },
    {
      id: "chat-seed-2",
      title: "🎨 Beige & Pastel Combos",
      topic: "color",
      timestamp: "2 days ago",
      messages: [
        { sender: "user", text: "What colors match well with beige?", time: "3:15 PM" },
        {
          sender: "bot",
          time: "3:15 PM",
          data: {
            type: "color",
            item: FASHION_DATA.colors[2],
            text: "Blue + Beige is an iconic, coastal-inspired harmony! 🌊"
          }
        }
      ]
    },
    {
      id: "chat-seed-3",
      title: "💼 Office Power Dressing",
      topic: "office",
      timestamp: "3 days ago",
      messages: [
        { sender: "user", text: "Give me chic office outfit suggestions", time: "10:00 AM" },
        {
          sender: "bot",
          time: "10:00 AM",
          data: {
            type: "outfit",
            item: FASHION_DATA.occasions.office[0],
            text: "Step into the boardroom with confidence! Here is a sharp corporate chic ensemble: 💼"
          }
        }
      ]
    },
    {
      id: "chat-seed-4",
      title: "🌸 Capsule Wardrobe Guide",
      topic: "tips",
      timestamp: "5 days ago",
      messages: [
        { sender: "user", text: "How to build a capsule wardrobe?", time: "11:20 AM" },
        {
          sender: "bot",
          time: "11:20 AM",
          data: {
            type: "tips",
            item: FASHION_DATA.tips.capsule,
            text: "Building a capsule wardrobe saves time, money, and space! Here are the golden steps: 📦"
          }
        }
      ]
    },
    {
      id: "chat-seed-5",
      title: "🥻 Royal Silk Saree Styling",
      topic: "ethnic",
      timestamp: "Last week",
      messages: [
        { sender: "user", text: "How should I style a traditional silk saree for a wedding?", time: "6:45 PM" },
        {
          sender: "bot",
          time: "6:45 PM",
          data: {
            type: "outfit",
            item: FASHION_DATA.outfits.ethnic[0],
            text: "Silk sarees exude timeless royal sophistication! Here is your complete jewellery and styling formula: 🥻✨"
          }
        }
      ]
    }
  ]
};

// Load saved data from localStorage if available
function loadPersistedData() {
  try {
    const savedLookbook = localStorage.getItem("stylemate_lookbook");
    if (savedLookbook) {
      AppState.lookbook = JSON.parse(savedLookbook);
    }
    const savedSound = localStorage.getItem("stylemate_sound");
    if (savedSound !== null) {
      AppState.soundEnabled = savedSound === "true";
    }
  } catch (err) {
    console.warn("Storage access restricted, using in-memory state:", err);
  }
}

function persistLookbook() {
  try {
    localStorage.setItem("stylemate_lookbook", JSON.stringify(AppState.lookbook));
  } catch (err) {
    console.warn("Storage save failed:", err);
  }
}

// ==========================================================================
// 3. AUDIO SYNTHESIS (Chic Soft Chime using Web Audio API)
// ==========================================================================

function playChime(isBot = true) {
  if (!AppState.soundEnabled) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    const now = ctx.currentTime;

    if (isBot) {
      // Cheerful ascending double chime
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.12); // A5
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.36);
    } else {
      // Soft gentle tap chime
      osc.frequency.setValueAtTime(440, now);
      gain.gain.setValueAtTime(0.03, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.15);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.16);
    }
  } catch (e) {
    // Ignore autoplay or audio context constraints safely
  }
}

// ==========================================================================
// 4. NATURAL LANGUAGE & KEYWORD MATCHING ENGINE
// ==========================================================================

/**
 * Intelligent Keyword Matcher
 * Normalizes input, checks synonyms, extracts intent, and returns structured response.
 */
function analyzeFashionPrompt(rawText) {
  const text = rawText.toLowerCase().replace(/[^\w\s+]/g, " ").replace(/\s+/g, " ").trim();

  // Helper matching functions
  const has = (...words) => words.some(w => text.includes(w));
  const hasAll = (...words) => words.every(w => text.includes(w));

  // --- GREETINGS & INTRO ---
  if (/^(hi|hello|hey|greetings|hola|good morning|good evening|good afternoon)\b/.test(text)) {
    return {
      type: "chat",
      text: "Hello, lovely! ✨ I'm your StyleMate personal fashion assistant. I can recommend outfits, match colours, style you for any occasion, or share secrets to looking effortlessly elegant. What are we styling today? 👗",
      followups: [
        { label: "👗 Suggest an Outfit", prompt: "Suggest an outfit for me today" },
        { label: "🎉 Party Looks", prompt: "Suggest a party outfit" },
        { label: "🎨 Colour Matching", prompt: "What colours go together well?" }
      ]
    };
  }

  if (has("who are you", "what can you do", "help me", "your name")) {
    return {
      type: "chat",
      text: "I'm **StyleMate** — your private AI fashion stylist and wardrobe confidante! 💖 You can ask me:\n\n• **'What should I wear today?'** for curated tops, bottoms, shoes & accessories.\n• **'How should I dress for a wedding/date/college?'** for occasion formulas.\n• **'What matches with pink / black / blue?'** for color harmony swatches.\n• **'How to style oversized shirts or jeans?'** for stylist tips.\n• **'How to look elegant on a budget?'** for smart wardrobe rewears.",
      followups: [
        { label: "👗 Suggest Outfit", prompt: "What should I wear today?" },
        { label: "💼 Office Outfits", prompt: "Suggest an office look" },
        { label: "🎨 Color Swatches", prompt: "Show me aesthetic color combinations" }
      ]
    };
  }

  if (has("thank", "thanks", "awesome", "love it", "great", "cute", "helpful")) {
    return {
      type: "chat",
      text: "You are so very welcome, fashionista! You deserve to look and feel radiant in whatever you wear. Let me know whenever you need another style check or color pairing! 💖✨",
      followups: [
        { label: "👗 Another Look", prompt: "Suggest another outfit for me" },
        { label: "✨ Fashion Tips", prompt: "Give me fashion tips" }
      ]
    };
  }

  // --- A. OUTFIT RECOMMENDATIONS ---
  // Check for specific casual / college / summer / winter / general
  if (has("college", "campus", "university", "school", "collg", "colledge") && has("outfit", "wear", "dress", "look", "idea", "suggest")) {
    const list = FASHION_DATA.outfits.college;
    const item = list[Math.floor(Math.random() * list.length)];
    return {
      type: "outfit",
      title: "College Campus Outfit Idea",
      item: item,
      text: "Here is a chic, comfortable campus look tailored for attending lectures and hanging out with friends! 📚✨",
      followups: [
        { label: "🎒 Another College Look", prompt: "Suggest another college outfit" },
        { label: "👟 What Shoes?", prompt: "What are the best shoes for college?" },
        { label: "🎨 College Colour Combos", prompt: "What colour combination works for college wear?" }
      ]
    };
  }

  if (has("casual", "everyday", "daily", "chill", "hanging out", "brunch") || (has("wear today", "suggest an outfit", "what should i wear", "outfit idea", "outfit suggestion", "style me", "recommend outfit") && !has("party", "wedding", "office", "date", "birthday", "vacation"))) {
    const list = FASHION_DATA.outfits.casual;
    const item = list[Math.floor(Math.random() * list.length)];
    return {
      type: "outfit",
      title: "Curated Daily Outfit Suggestion",
      item: item,
      text: "I curated this effortless, high-style outfit formula for you today! 💫",
      followups: [
        { label: "✨ Try Another Style", prompt: "Suggest a different casual outfit" },
        { label: "🎨 Matching Colours", prompt: "What colour combination matches with this outfit?" },
        { label: "💡 Accessorizing Tips", prompt: "How do I accessorize this outfit?" }
      ]
    };
  }

  if (has("summer", "hot weather", "beach", "sunny", "spring")) {
    const item = FASHION_DATA.outfits.summer[0];
    return {
      type: "outfit",
      title: "Sun-drenched Summer Outfit",
      item: item,
      text: "Beat the heat in breathable elegance with this lightweight summer look! ☀️🌊",
      followups: [
        { label: "👗 Casual Everyday Look", prompt: "Suggest a casual outfit" },
        { label: "🎨 Lavender + White Match", prompt: "Tell me about lavender and white combination" }
      ]
    };
  }

  if (has("winter", "cold weather", "snow", "autumn", "fall", "rainy", "sweater weather")) {
    const item = FASHION_DATA.outfits.winter[0];
    return {
      type: "outfit",
      title: "Cozy Winter Luxe Outfit",
      item: item,
      text: "Stay toasty and ultra-chic with this cozy layered winter formula! ❄️🧣",
      followups: [
        { label: "🧥 How to Layer?", prompt: "How to style oversized clothes and sweaters?" },
        { label: "🎨 Brown + Cream Combos", prompt: "Explain brown and cream colour matching" }
      ]
    };
  }

  // Ethnic & Traditional Wear
  if (has("saree", "sari", "kurti", "kurta", "ethnic", "traditional", "desi", "lehenga", "anarkali", "festive")) {
    const list = FASHION_DATA.outfits.ethnic;
    const item = has("saree", "sari") ? list[0] : (has("fusion", "dhoti", "indo") ? list[2] : list[1]);
    return {
      type: "outfit",
      title: "Traditional & Ethnic Glamour",
      item: item,
      text: "Ethnic fashion carries unparalleled grace and majesty! Here is a breathtaking traditional ensemble: 🥻✨",
      followups: [
        { label: "👑 Royal Silk Saree", prompt: "How to style a silk saree?" },
        { label: "🌸 Chikankari Kurti Look", prompt: "Suggest a chikankari kurti outfit" },
        { label: "🎨 Festive Colour Combos", prompt: "What are some aesthetic colour combinations for clothes?" }
      ]
    };
  }

  // Men's / Guy's Fashion
  if (has("men", "mens", "guy", "guys", "boy", "boyfriend", "male", "husband", "gentleman")) {
    const list = FASHION_DATA.outfits.mens;
    const item = has("streetwear", "casual", "sneaker") ? list[1] : list[0];
    return {
      type: "outfit",
      title: "Men's Sartorial Styling",
      item: item,
      text: "Clean lines, impeccable fit, and understated confidence. Here is a sharp masculine formula: 👔👟",
      followups: [
        { label: "💼 Office Power Fit", prompt: "Give me chic office outfit suggestions" },
        { label: "🎨 Blue + Beige Harmony", prompt: "Blue and beige colour combination" },
        { label: "✨ Styling Basics", prompt: "How to look elegant on a budget?" }
      ]
    };
  }

  // --- B. OCCASION STYLING ---
  // Party
  if (has("party", "club", "night out", "cocktail", "celebration", "drinks")) {
    const list = FASHION_DATA.occasions.party;
    const item = list[Math.floor(Math.random() * list.length)];
    return {
      type: "occasion",
      occasionName: "Party / Night Out",
      item: item,
      text: "Time to turn heads! Here is a glamorous party look crafted to make you shine under the lights! 🪩✨",
      followups: [
        { label: "👠 Different Party Look", prompt: "Give me another party outfit idea" },
        { label: "🎨 Black + White Party Look", prompt: "Black and white outfit combination" },
        { label: "💄 Makeup & Bag Tips", prompt: "How to accessorize for a night out?" }
      ]
    };
  }

  // Wedding
  if (has("wedding", "marriage", "reception", "shaadi", "sangeet", "bridesmaid")) {
    const list = FASHION_DATA.occasions.wedding;
    const item = has("traditional", "lehenga", "saree", "ethnic", "indian", "desi") ? list[1] : list[0];
    return {
      type: "occasion",
      occasionName: "Wedding Guest Styling",
      item: item,
      text: "Weddings are all about celebrating in graceful splendor! Here is your curated wedding guest styling formula: 🥂💍",
      followups: [
        { label: "🥻 Traditional Ethnic Wedding", prompt: "Traditional wedding guest outfit idea" },
        { label: "💐 Day / Outdoor Wedding", prompt: "Day wedding guest outfit idea" },
        { label: "🎨 Pastel Colour Combos", prompt: "What are some aesthetic colour combinations for clothes?" }
      ]
    };
  }

  // Date
  if (has("date", "romantic", "dinner date", "movie date", "boyfriend", "valentine")) {
    const list = FASHION_DATA.occasions.date;
    const item = has("casual", "coffee", "museum", "afternoon") ? list[1] : list[0];
    return {
      type: "occasion",
      occasionName: "Date Night Look",
      item: item,
      text: "How romantic! Here is a dreamy outfit designed to highlight your charm and make you feel captivating: 🌹🕯️",
      followups: [
        { label: "☕ Casual Coffee Date", prompt: "What to wear for a casual coffee date?" },
        { label: "✨ Accessorizing Tips", prompt: "How to accessorize an outfit?" },
        { label: "🎨 Pink + White Combos", prompt: "Tell me about pink and white colour matching" }
      ]
    };
  }

  // Office / Work / Interview
  if (has("office", "work", "job", "interview", "corporate", "professional", "business", "meeting")) {
    const list = FASHION_DATA.occasions.office;
    const item = has("casual", "creative", "startup") ? list[1] : list[0];
    return {
      type: "occasion",
      occasionName: "Office & Workwear",
      item: item,
      text: "Exude authority, confidence, and impeccable taste with this power dressing formula: 💼✨",
      followups: [
        { label: "👟 Creative Business Casual", prompt: "Give me creative business casual office ideas" },
        { label: "🎨 Blue + Beige Workwear", prompt: "Blue and beige colour combination" },
        { label: "👔 Capsule Wardrobe", prompt: "How to create a capsule wardrobe?" }
      ]
    };
  }

  // Birthday
  if (has("birthday", "bday", "my birthday")) {
    const item = FASHION_DATA.occasions.birthday[0];
    return {
      type: "occasion",
      occasionName: "Birthday Celebration",
      item: item,
      text: "Happy Birthday, superstar! 🎂 It's your special spotlight day — here is a look designed for all the birthday photo memories! 👑✨",
      followups: [
        { label: "🎉 Club / Night Out", prompt: "Suggest a party look" },
        { label: "👗 Casual Birthday Brunch", prompt: "Suggest a casual outfit for birthday brunch" }
      ]
    };
  }

  // Vacation
  if (has("vacation", "holiday", "trip", "resort", "travel", "airport", "beach")) {
    const item = FASHION_DATA.occasions.vacation[0];
    return {
      type: "occasion",
      occasionName: "Resort & Vacation Look",
      item: item,
      text: "Pack your bags in style! Here is a breezy, photo-ready holiday look: 🌴🥥",
      followups: [
        { label: "✈️ Airport Travel Outfit", prompt: "Suggest a comfortable travel outfit" },
        { label: "👒 How to Accessorize?", prompt: "How to accessorize outfits?" }
      ]
    };
  }

  // --- C. COLOUR MATCHING ---
  // Specific colour pairs
  if (has("black", "blak") && has("white", "whit")) {
    return {
      type: "color",
      item: FASHION_DATA.colors[0],
      text: "Black + White is the eternal monarch of fashion pairings. Here is why it never fails and how to style it: 🖤🤍",
      followups: [
        { label: "🎨 Pink + White", prompt: "Tell me about pink and white colour combination" },
        { label: "🎨 Blue + Beige", prompt: "What about blue and beige colour matching?" },
        { label: "👗 Style an Outfit", prompt: "Suggest a black and white outfit" }
      ]
    };
  }

  if (has("pink") && has("white")) {
    return {
      type: "color",
      item: FASHION_DATA.colors[1],
      text: "Pink + White is the quintessential romantic aesthetic! Soft, youthful, and luminous: 🌸🤍",
      followups: [
        { label: "🎨 Lavender + White", prompt: "Tell me about lavender and white colour matching" },
        { label: "🎨 Red + Pink", prompt: "Can you wear red and pink together?" },
        { label: "👗 Date Night Look", prompt: "What to wear for a date?" }
      ]
    };
  }

  if (has("blue") && has("beige", "tan", "khaki", "cream")) {
    return {
      type: "color",
      item: FASHION_DATA.colors[2],
      text: "Blue + Beige is French coastal chic at its finest. Here is the palette breakdown: 🌊🌾",
      followups: [
        { label: "🎨 Brown + Cream", prompt: "Tell me about brown and cream colour matching" },
        { label: "💼 Office Styling", prompt: "Suggest office wear outfit" }
      ]
    };
  }

  if (has("brown", "chocolate", "coffee") && has("cream", "ivory", "beige")) {
    return {
      type: "color",
      item: FASHION_DATA.colors[3],
      text: "Brown + Cream is the heart of the luxurious 'Old Money' palette. Warm, rich, and calming: ☕🧈",
      followups: [
        { label: "🎨 Green + Beige", prompt: "Green and beige colour combination" },
        { label: "🧥 How to Look Expensive?", prompt: "How to look elegant on a budget?" }
      ]
    };
  }

  if (has("lavender", "lilac", "purple") && has("white", "cream")) {
    return {
      type: "color",
      item: FASHION_DATA.colors[4],
      text: "Lavender + White is a whimsical, ethereal match made in heaven: 🪻🕊️",
      followups: [
        { label: "🎨 Pink + White", prompt: "Pink and white colour combination" },
        { label: "👗 Summer Outfits", prompt: "Suggest a summer outfit" }
      ]
    };
  }

  if (has("green", "olive", "sage") && has("beige", "tan", "cream")) {
    return {
      type: "color",
      item: FASHION_DATA.colors[5],
      text: "Green + Beige connects you to nature with soothing, organic harmony: 🌿🌾",
      followups: [
        { label: "🎨 Brown + Cream", prompt: "Brown and cream colour combination" },
        { label: "✨ Casual Outfit", prompt: "Suggest an outfit with green and beige" }
      ]
    };
  }

  if (has("red") && has("pink")) {
    return {
      type: "color",
      item: FASHION_DATA.colors[6],
      text: "Red + Pink is an editorial runway favorite! Bold, artistic, and passionately chic: ❤️💖",
      followups: [
        { label: "🎉 Party Looks", prompt: "Suggest a party outfit" },
        { label: "🎨 Black + White", prompt: "Black and white colour combination" }
      ]
    };
  }

  // General colour questions
  if (has("colour", "color", "colours", "colors", "palette", "shade", "hue", "match colours", "combination", "combos")) {
    // Pick a random iconic combo
    const randomCombo = FASHION_DATA.colors[Math.floor(Math.random() * FASHION_DATA.colors.length)];
    return {
      type: "color-overview",
      sample: randomCombo,
      allCombos: FASHION_DATA.colors,
      text: "Here is one of fashion's most universally loved colour pairings, plus the secret formula to matching clothes effortlessly: 🎨✨",
      followups: [
        { label: "🖤 Black + White", prompt: "Tell me about black and white combination" },
        { label: "🌸 Pink + White", prompt: "Tell me about pink and white combination" },
        { label: "🌊 Blue + Beige", prompt: "Tell me about blue and beige combination" },
        { label: "☕ Brown + Cream", prompt: "Tell me about brown and cream combination" },
        { label: "🪻 Lavender + White", prompt: "Tell me about lavender and white combination" },
        { label: "🌿 Green + Beige", prompt: "Tell me about green and beige combination" }
      ]
    };
  }

  // --- D. FASHION TIPS ---
  // Oversized clothes
  if (has("oversized", "baggy", "loose clothes", "slouchy", "boxer", "large shirt")) {
    return {
      type: "tips",
      item: FASHION_DATA.tips.oversized,
      text: "Oversized styling is the hallmark of modern street-chic! Here is how to look intentionally stylish rather than swamped: 🧥✨",
      followups: [
        { label: "👖 How to Style Jeans", prompt: "How to style jeans?" },
        { label: "💎 How to Accessorize", prompt: "How to accessorize outfits?" }
      ]
    };
  }

  // Accessorize
  if (has("accessorize", "accessories", "jewelery", "jewelry", "bag", "belt", "earrings", "necklace")) {
    return {
      type: "tips",
      item: FASHION_DATA.tips.accessories,
      text: "Accessories are the exclamation point of an outfit! Here are the stylist rules to elevate any basic look: 💍👜",
      followups: [
        { label: "✨ Look Elegant on a Budget", prompt: "How to look elegant on a budget?" },
        { label: "👗 Suggest an Outfit", prompt: "Suggest an outfit with accessories" }
      ]
    };
  }

  // Jeans
  if (has("jeans", "denim", "pants", "trousers", "mom jeans", "skinny jeans", "wide leg")) {
    return {
      type: "tips",
      item: FASHION_DATA.tips.jeans,
      text: "Denim is every wardrobe's cornerstone. Here is your definitive guide to styling different denim cuts: 👖💙",
      followups: [
        { label: "🧥 Style Oversized Clothes", prompt: "How to style oversized clothes?" },
        { label: "👟 College Outfits", prompt: "Suggest college outfit with jeans" }
      ]
    };
  }

  // Capsule Wardrobe
  if (has("capsule", "minimalist wardrobe", "wardrobe basics", "closet essentials", "core pieces", "333")) {
    return {
      type: "tips",
      item: FASHION_DATA.tips.capsule,
      text: "A well-planned capsule wardrobe means you will never utter the words *'I have nothing to wear!'* again: 📦✨",
      followups: [
        { label: "💰 Budget Fashion Tips", prompt: "How to build stylish outfits on a budget?" },
        { label: "👗 Daily Outfit Idea", prompt: "Suggest an outfit from capsule essentials" }
      ]
    };
  }

  // Look elegant / rich on budget
  if (has("elegant", "expensive", "rich", "old money", "classy", "luxurious", "chic")) {
    return {
      type: "tips",
      item: FASHION_DATA.tips.elegant,
      text: "Elegance is an attitude and an art form, not a price tag. Here are insider stylist hacks to look effortlessly luxurious: 🥂💎",
      followups: [
        { label: "💰 Budget Fashion Secrets", prompt: "How to style outfits on a budget and reuse clothes?" },
        { label: "📦 Capsule Wardrobe", prompt: "How to create a capsule wardrobe?" }
      ]
    };
  }

  // General tips
  if (has("fashion tips", "style tips", "styling tips", "advice", "fashion advice", "how to dress")) {
    // Pick between elegant or accessories
    return {
      type: "tips",
      item: FASHION_DATA.tips.elegant,
      text: "Here are timeless golden rules from fashion stylists to instantly elevate your everyday aesthetic: ✨👗",
      followups: [
        { label: "🧥 Styling Oversized Clothes", prompt: "How to style oversized clothes?" },
        { label: "💍 Accessorizing Rules", prompt: "How to accessorize outfits?" },
        { label: "👖 Denim Styling Guide", prompt: "How to style jeans?" }
      ]
    };
  }

  // --- E. BUDGET FASHION & REUSING CLOTHES ---
  if (has("budget", "cheap", "reuse", "rewear", "thrifting", "thrift", "save money", "affordable", "existing clothes")) {
    return {
      type: "budget",
      item: FASHION_DATA.budget,
      text: "You don't need a huge budget to dress like a fashion editor! Here is how to stretch your wardrobe and look like a million bucks: 💰✨",
      followups: [
        { label: "💎 Look Elegant on a Budget", prompt: "How to look elegant on a budget?" },
        { label: "📦 Build a Capsule Wardrobe", prompt: "How to create a capsule wardrobe?" },
        { label: "👗 Suggest an Outfit", prompt: "Suggest a stylish budget outfit" }
      ]
    };
  }

  // --- F. FALLBACK RESPONSE ---
  return {
    type: "fallback",
    text: FASHION_DATA.fallback.message,
    chips: FASHION_DATA.fallback.chips
  };
}

// ==========================================================================
// 5. DOM ELEMENTS & INITIALIZATION
// ==========================================================================

const DOM = {
  // Layout
  sidebar: document.getElementById("sidebar"),
  sidebarOverlay: document.getElementById("sidebarOverlay"),
  sidebarCloseBtn: document.getElementById("sidebarCloseBtn"),
  mobileMenuBtn: document.getElementById("mobileMenuBtn"),
  
  // Navigation & Sessions
  newChatBtn: document.getElementById("newChatBtn"),
  quickNav: document.getElementById("quickNav"),
  recentChatsList: document.getElementById("recentChatsList"),
  recentCount: document.getElementById("recentCount"),
  activeChatTopic: document.getElementById("activeChatTopic"),

  // Topbar
  soundToggleBtn: document.getElementById("soundToggleBtn"),
  exportChatBtn: document.getElementById("exportChatBtn"),
  topbarLookbookBtn: document.getElementById("topbarLookbookBtn"),
  topbarLookbookBadge: document.getElementById("topbarLookbookBadge"),
  aboutBtn: document.getElementById("aboutBtn"),
  sidebarLookbookBtn: document.getElementById("sidebarLookbookBtn"),
  lookbookCount: document.getElementById("lookbookCount"),
  clearChatBtn: document.getElementById("clearChatBtn"),

  // Chat Views
  chatBody: document.getElementById("chatBody"),
  welcomeScreen: document.getElementById("welcomeScreen"),
  suggestionsGrid: document.getElementById("suggestionsGrid"),
  messagesContainer: document.getElementById("messagesContainer"),
  typingIndicator: document.getElementById("typingIndicator"),
  quickChipsBar: document.getElementById("quickChipsBar"),

  // Input
  chatForm: document.getElementById("chatForm"),
  chatInput: document.getElementById("chatInput"),
  sendBtn: document.getElementById("sendBtn"),
  voiceBtn: document.getElementById("voiceBtn"),

  // Modals & Toast
  aboutModal: document.getElementById("aboutModal"),
  closeAboutBtn: document.getElementById("closeAboutBtn"),
  closeAboutBtn2: document.getElementById("closeAboutBtn2"),
  lookbookModal: document.getElementById("lookbookModal"),
  lookbookList: document.getElementById("lookbookList"),
  closeLookbookBtn: document.getElementById("closeLookbookBtn"),
  closeLookbookBtn2: document.getElementById("closeLookbookBtn2"),
  clearLookbookBtn: document.getElementById("clearLookbookBtn"),
  
  confirmModal: document.getElementById("confirmModal"),
  closeConfirmBtn: document.getElementById("closeConfirmBtn"),
  cancelClearBtn: document.getElementById("cancelClearBtn"),
  confirmClearBtn: document.getElementById("confirmClearBtn"),

  toast: document.getElementById("toast"),
  toastMessage: document.getElementById("toastMessage")
};

// ==========================================================================
// 6. UI RENDERING FUNCTIONS
// ==========================================================================

function getFormattedTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 hour is 12
  const minStr = minutes < 10 ? '0' + minutes : minutes;
  return `${hours}:${minStr} ${ampm}`;
}

function showToast(message) {
  DOM.toastMessage.textContent = message;
  DOM.toast.classList.add("show");
  setTimeout(() => {
    DOM.toast.classList.remove("show");
  }, 2600);
}

function scrollToBottom() {
  DOM.chatBody.scrollTop = DOM.chatBody.scrollHeight;
}

// Render User Message Bubble
function appendUserMessage(text, time = getFormattedTime()) {
  // Hide welcome screen when conversation starts
  DOM.welcomeScreen.style.display = "none";

  const row = document.createElement("div");
  row.className = "message-row user-message-row";

  row.innerHTML = `
    <div class="message-bubble-wrap">
      <div class="message-bubble user-bubble">
        <p>${escapeHtml(text)}</p>
      </div>
      <div class="message-footer">
        <span class="message-time">${time}</span>
      </div>
    </div>
    <div class="message-avatar user-avatar-bubble">
      <i class="fa-solid fa-user"></i>
    </div>
  `;

  DOM.messagesContainer.appendChild(row);
  scrollToBottom();
}

// Render Bot Message Bubble with Rich Components
function appendBotMessage(result, time = getFormattedTime()) {
  const row = document.createElement("div");
  row.className = "message-row bot-message-row";

  const wrap = document.createElement("div");
  wrap.className = "message-bubble-wrap";

  const bubble = document.createElement("div");
  bubble.className = "message-bubble bot-bubble";

  const content = document.createElement("div");
  content.className = "bot-rich-content";

  // Build content HTML based on response type
  content.innerHTML = renderResponseMarkup(result);

  bubble.appendChild(content);

  // Message Footer: Timestamp and Copy button
  const footer = document.createElement("div");
  footer.className = "message-footer";
  footer.innerHTML = `
    <span class="message-time">${time}</span>
    <div class="message-actions">
      <button class="msg-action-btn copy-msg-btn" title="Copy response">
        <i class="fa-regular fa-copy"></i> <span>Copy</span>
      </button>
    </div>
  `;

  wrap.appendChild(bubble);
  wrap.appendChild(footer);

  const avatar = document.createElement("div");
  avatar.className = "message-avatar bot-avatar";
  avatar.innerHTML = `<i class="fa-solid fa-wand-magic-sparkles"></i>`;

  row.appendChild(avatar);
  row.appendChild(wrap);

  DOM.messagesContainer.appendChild(row);

  // Hook copy button
  const copyBtn = footer.querySelector(".copy-msg-btn");
  copyBtn.addEventListener("click", () => {
    const textToCopy = bubble.innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
      showToast("Styling response copied to clipboard! ✨");
    }).catch(() => {
      showToast("Copied to clipboard!");
    });
  });

  // Hook save / bookmark outfit button if present
  const saveBtn = bubble.querySelector(".outfit-save-btn");
  if (saveBtn) {
    const outfitData = JSON.parse(saveBtn.getAttribute("data-outfit"));
    updateSaveButtonState(saveBtn, outfitData);
    saveBtn.addEventListener("click", () => {
      toggleSaveOutfit(saveBtn, outfitData);
    });
  }

  // Hook follow-up suggestion chips
  const chips = bubble.querySelectorAll(".followup-chip");
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      const prompt = chip.getAttribute("data-prompt");
      handleUserSubmit(prompt);
    });
  });

  scrollToBottom();
  playChime(true);
}

// Generate Rich Markup for Bot Results
function renderResponseMarkup(result) {
  let html = "";

  if (result.type === "chat") {
    html += `<p class="bot-intro">${formatMarkdown(result.text)}</p>`;
    if (result.followups && result.followups.length > 0) {
      html += renderFollowUpChips(result.followups);
    }
    return html;
  }

  if (result.type === "outfit" || result.type === "occasion") {
    const item = result.item;
    const isSaved = isOutfitSaved(item.name || item.occasion);

    html += `<p class="bot-intro">${result.text}</p>`;

    html += `
      <div class="outfit-card">
        <div class="outfit-card-header">
          <div class="outfit-title-wrap">
            <span class="outfit-vibe-tag">${escapeHtml(item.vibe || "Haute Look")}</span>
            <h4 class="outfit-name">${escapeHtml(item.name || item.occasion)}</h4>
          </div>
          <button class="outfit-save-btn ${isSaved ? 'saved' : ''}" 
                  data-outfit='${escapeJsonForAttr(item)}' 
                  title="${isSaved ? 'Saved in Lookbook' : 'Save to Lookbook'}">
            <i class="fa-${isSaved ? 'solid' : 'regular'} fa-heart"></i>
          </button>
        </div>

        <div class="outfit-grid">
          <div class="outfit-item">
            <div class="item-icon-box"><i class="fa-solid fa-shirt"></i></div>
            <div class="item-details">
              <span class="item-label">Top</span>
              <span class="item-desc">${escapeHtml(item.top)}</span>
            </div>
          </div>

          <div class="outfit-item">
            <div class="item-icon-box"><i class="fa-solid fa-socks"></i></div>
            <div class="item-details">
              <span class="item-label">Bottom</span>
              <span class="item-desc">${escapeHtml(item.bottom)}</span>
            </div>
          </div>

          <div class="outfit-item">
            <div class="item-icon-box"><i class="fa-solid fa-shoe-prints"></i></div>
            <div class="item-details">
              <span class="item-label">Footwear</span>
              <span class="item-desc">${escapeHtml(item.footwear)}</span>
            </div>
          </div>

          <div class="outfit-item">
            <div class="item-icon-box"><i class="fa-solid fa-gem"></i></div>
            <div class="item-details">
              <span class="item-label">Accessories</span>
              <span class="item-desc">${escapeHtml(item.accessories)}</span>
            </div>
          </div>
        </div>

        <div class="outfit-stylist-tip">
          <i class="fa-solid fa-wand-magic-sparkles"></i>
          <span><strong>Stylist Secret:</strong> ${escapeHtml(item.tip || item.proTip)}</span>
        </div>
      </div>
    `;

    if (result.followups && result.followups.length > 0) {
      html += renderFollowUpChips(result.followups);
    }
    return html;
  }

  if (result.type === "color") {
    const item = result.item;
    html += `<p class="bot-intro">${result.text}</p>`;

    html += `
      <div class="colour-match-card">
        <div class="colour-match-header">
          <span class="colour-pair-name">${escapeHtml(item.pair)}</span>
          <span class="colour-harmony-badge">${escapeHtml(item.harmony)}</span>
        </div>

        <div class="swatch-display-bar">
          <div class="swatch-item">
            <div class="swatch-color-box" style="background-color: ${item.color1.hex};"></div>
            <div class="swatch-color-info">
              <span class="swatch-color-name">${escapeHtml(item.color1.name)}</span>
              <span class="swatch-hex">${item.color1.hex}</span>
            </div>
          </div>

          <span class="swatch-divider-plus">+</span>

          <div class="swatch-item">
            <div class="swatch-color-box" style="background-color: ${item.color2.hex};"></div>
            <div class="swatch-color-info">
              <span class="swatch-color-name">${escapeHtml(item.color2.name)}</span>
              <span class="swatch-hex">${item.color2.hex}</span>
            </div>
          </div>
        </div>

        <div class="colour-explanation">
          <strong>Why this works:</strong> ${escapeHtml(item.why)}
        </div>

        <div class="colour-styling-idea">
          <i class="fa-solid fa-lightbulb text-burgundy"></i> <strong>Styling Idea:</strong> ${escapeHtml(item.stylingIdea)}
        </div>
      </div>
    `;

    if (result.followups && result.followups.length > 0) {
      html += renderFollowUpChips(result.followups);
    }
    return html;
  }

  if (result.type === "color-overview") {
    html += `<p class="bot-intro">${result.text}</p>`;
    // Render the featured swatch
    const feat = result.sample;
    html += `
      <div class="colour-match-card">
        <div class="colour-match-header">
          <span class="colour-pair-name">Featured: ${escapeHtml(feat.pair)}</span>
          <span class="colour-harmony-badge">${escapeHtml(feat.harmony)}</span>
        </div>

        <div class="swatch-display-bar">
          <div class="swatch-item">
            <div class="swatch-color-box" style="background-color: ${feat.color1.hex};"></div>
            <div class="swatch-color-info">
              <span class="swatch-color-name">${escapeHtml(feat.color1.name)}</span>
              <span class="swatch-hex">${feat.color1.hex}</span>
            </div>
          </div>
          <span class="swatch-divider-plus">+</span>
          <div class="swatch-item">
            <div class="swatch-color-box" style="background-color: ${feat.color2.hex};"></div>
            <div class="swatch-color-info">
              <span class="swatch-color-name">${escapeHtml(feat.color2.name)}</span>
              <span class="swatch-hex">${feat.color2.hex}</span>
            </div>
          </div>
        </div>

        <p class="colour-explanation">${escapeHtml(feat.why)}</p>
      </div>
      <p style="font-size: 0.85rem; margin-top: 10px;">Select any iconic pairing below to explore detailed swatches and outfit ideas:</p>
    `;

    if (result.followups && result.followups.length > 0) {
      html += renderFollowUpChips(result.followups);
    }
    return html;
  }

  if (result.type === "tips" || result.type === "budget") {
    const item = result.item;
    html += `<p class="bot-intro">${result.text}</p>`;

    html += `
      <div class="fashion-tips-box">
        <h4 class="tips-box-title">
          <i class="fa-solid fa-sparkles"></i> ${escapeHtml(item.title)}
        </h4>
        <ul class="tips-list">
    `;

    item.bullets.forEach((b, idx) => {
      html += `
        <li class="tip-item">
          <span class="tip-bullet">${idx + 1}</span>
          <div class="tip-content">
            <strong>${escapeHtml(b.heading)}:</strong> ${escapeHtml(b.text)}
          </div>
        </li>
      `;
    });

    html += `
        </ul>
      </div>
    `;

    if (result.followups && result.followups.length > 0) {
      html += renderFollowUpChips(result.followups);
    }
    return html;
  }

  if (result.type === "fallback") {
    html += `<p class="bot-intro">${result.text}</p>`;
    html += `
      <div style="font-size: 0.85rem; margin-top: 8px; color: var(--color-text-muted);">
        Here are some popular things you can ask me:
      </div>
    `;
    if (result.chips && result.chips.length > 0) {
      html += renderFollowUpChips(result.chips);
    }
    return html;
  }

  return `<p>${escapeHtml(result.text || "I'm ready to style you! ✨")}</p>`;
}

function renderFollowUpChips(chips) {
  let html = `<div class="bot-followup-chips">`;
  chips.forEach(chip => {
    html += `
      <button class="followup-chip" data-prompt="${escapeHtml(chip.prompt)}">
        <i class="fa-solid fa-arrow-turn-down"></i> ${escapeHtml(chip.label)}
      </button>
    `;
  });
  html += `</div>`;
  return html;
}

// Formatting helpers
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeJsonForAttr(obj) {
  return JSON.stringify(obj).replace(/'/g, "&apos;");
}

function formatMarkdown(text) {
  if (!text) return "";
  return escapeHtml(text)
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/\n\n/g, "</p><p>")
    .replace(/\n/g, "<br>");
}

// ==========================================================================
// 7. MESSAGE SENDING & TYPING LIFECYCLE
// ==========================================================================

function handleUserSubmit(overrideText = null) {
  const text = overrideText !== null ? overrideText.trim() : DOM.chatInput.value.trim();
  if (!text || AppState.isTyping) return;

  // Clear input and reset textarea height
  if (overrideText === null) {
    DOM.chatInput.value = "";
    DOM.chatInput.style.height = "auto";
  }

  // 1. Render User message
  appendUserMessage(text);
  playChime(false);

  // 2. Update active chat title in header
  updateActiveChatTitle(text);

  // 3. Show typing indicator
  AppState.isTyping = true;
  DOM.typingIndicator.style.display = "flex";
  scrollToBottom();

  // 4. Simulate realistic thinking & styling delay (750ms - 1100ms)
  const typingDelay = Math.floor(Math.random() * 350) + 750;

  setTimeout(() => {
    // Hide typing indicator
    DOM.typingIndicator.style.display = "none";
    AppState.isTyping = false;

    // Analyze prompt & generate response
    const botResult = analyzeFashionPrompt(text);

    // Render Bot response
    appendBotMessage(botResult);

    // Save current message exchange to active session
    recordActiveChatMessage(text, botResult);
  }, typingDelay);
}

function updateActiveChatTitle(userQuery) {
  // Truncate query for header subtitle
  let cleanTitle = userQuery.slice(0, 36);
  if (userQuery.length > 36) cleanTitle += "...";
  DOM.activeChatTopic.textContent = cleanTitle;
}

// ==========================================================================
// 8. LOOKBOOK (FAVORITE OUTFITS) MANAGEMENT
// ==========================================================================

function isOutfitSaved(name) {
  if (!name) return false;
  return AppState.lookbook.some(o => (o.name || o.occasion) === name);
}

function updateSaveButtonState(btn, outfitData) {
  const name = outfitData.name || outfitData.occasion;
  const saved = isOutfitSaved(name);
  if (saved) {
    btn.classList.add("saved");
    btn.innerHTML = `<i class="fa-solid fa-heart"></i>`;
    btn.title = "Saved in Lookbook";
  } else {
    btn.classList.remove("saved");
    btn.innerHTML = `<i class="fa-regular fa-heart"></i>`;
    btn.title = "Save to Lookbook";
  }
}

function toggleSaveOutfit(btn, outfitData) {
  const name = outfitData.name || outfitData.occasion;
  const existingIdx = AppState.lookbook.findIndex(o => (o.name || o.occasion) === name);

  if (existingIdx >= 0) {
    // Remove
    AppState.lookbook.splice(existingIdx, 1);
    btn.classList.remove("saved");
    btn.innerHTML = `<i class="fa-regular fa-heart"></i>`;
    btn.title = "Save to Lookbook";
    showToast(`Removed "${name}" from Lookbook`);
  } else {
    // Add
    AppState.lookbook.push(outfitData);
    btn.classList.add("saved");
    btn.innerHTML = `<i class="fa-solid fa-heart"></i>`;
    btn.title = "Saved in Lookbook";
    showToast(`Saved "${name}" to Lookbook! 💖`);
  }

  persistLookbook();
  updateLookbookCounters();
  renderLookbookModal();
}

function updateLookbookCounters() {
  const count = AppState.lookbook.length;
  DOM.lookbookCount.textContent = count;
  DOM.topbarLookbookBadge.textContent = count;
}

function renderLookbookModal() {
  if (AppState.lookbook.length === 0) {
    DOM.lookbookList.innerHTML = `
      <div class="lookbook-empty-state">
        <i class="fa-regular fa-heart"></i>
        <h4>Your Lookbook is Empty</h4>
        <p>Tap the heart icon on any outfit suggestion to save your favorite styling formulas here!</p>
      </div>
    `;
    return;
  }

  let html = "";
  AppState.lookbook.forEach((item, index) => {
    html += `
      <div class="lookbook-item">
        <div class="lookbook-item-header">
          <span class="outfit-vibe-tag">${escapeHtml(item.vibe || "Look")}</span>
          <span class="lookbook-item-title">${escapeHtml(item.name || item.occasion)}</span>
          <button class="lookbook-remove-btn" data-index="${index}" title="Remove look">
            <i class="fa-solid fa-trash-can"></i> Remove
          </button>
        </div>
        <div class="outfit-grid" style="margin-top: 10px;">
          <div class="outfit-item">
            <div class="item-icon-box"><i class="fa-solid fa-shirt"></i></div>
            <div class="item-details">
              <span class="item-label">Top</span>
              <span class="item-desc">${escapeHtml(item.top)}</span>
            </div>
          </div>
          <div class="outfit-item">
            <div class="item-icon-box"><i class="fa-solid fa-socks"></i></div>
            <div class="item-details">
              <span class="item-label">Bottom</span>
              <span class="item-desc">${escapeHtml(item.bottom)}</span>
            </div>
          </div>
          <div class="outfit-item">
            <div class="item-icon-box"><i class="fa-solid fa-shoe-prints"></i></div>
            <div class="item-details">
              <span class="item-label">Footwear</span>
              <span class="item-desc">${escapeHtml(item.footwear)}</span>
            </div>
          </div>
          <div class="outfit-item">
            <div class="item-icon-box"><i class="fa-solid fa-gem"></i></div>
            <div class="item-details">
              <span class="item-label">Accessories</span>
              <span class="item-desc">${escapeHtml(item.accessories)}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  DOM.lookbookList.innerHTML = html;

  // Attach delete handlers inside modal
  const delBtns = DOM.lookbookList.querySelectorAll(".lookbook-remove-btn");
  delBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.getAttribute("data-index"), 10);
      const removed = AppState.lookbook.splice(idx, 1)[0];
      persistLookbook();
      updateLookbookCounters();
      renderLookbookModal();
      // Also update any visible buttons on screen
      document.querySelectorAll(".outfit-save-btn").forEach(sBtn => {
        const data = JSON.parse(sBtn.getAttribute("data-outfit"));
        if ((data.name || data.occasion) === (removed.name || removed.occasion)) {
          sBtn.classList.remove("saved");
          sBtn.innerHTML = `<i class="fa-regular fa-heart"></i>`;
        }
      });
      showToast("Look removed from Lookbook.");
    });
  });
}

// ==========================================================================
// 9. CHAT HISTORY & RECENT CHATS MANAGEMENT
// ==========================================================================

function renderRecentChatsList() {
  DOM.recentChatsList.innerHTML = "";
  DOM.recentCount.textContent = AppState.recentChats.length;

  AppState.recentChats.forEach(chat => {
    const item = document.createElement("button");
    item.className = `recent-chat-item ${chat.id === AppState.activeSessionId ? 'active' : ''}`;
    item.setAttribute("data-session-id", chat.id);

    // Pick icon based on topic
    let iconClass = "fa-regular fa-message";
    if (chat.topic === "party") iconClass = "fa-solid fa-champagne-glasses";
    if (chat.topic === "color") iconClass = "fa-solid fa-palette";
    if (chat.topic === "office") iconClass = "fa-solid fa-briefcase";
    if (chat.topic === "tips") iconClass = "fa-solid fa-lightbulb";
    if (chat.topic === "ethnic") iconClass = "fa-solid fa-gem";

    item.innerHTML = `
      <span class="recent-chat-icon"><i class="${iconClass}"></i></span>
      <div class="recent-chat-info">
        <span class="recent-chat-title">${escapeHtml(chat.title)}</span>
        <span class="recent-chat-time">${escapeHtml(chat.timestamp)}</span>
      </div>
      <span class="recent-chat-del" title="Delete chat" data-id="${chat.id}">
        <i class="fa-solid fa-xmark"></i>
      </span>
    `;

    // Click on chat session
    item.addEventListener("click", (e) => {
      if (e.target.closest(".recent-chat-del")) return;
      loadChatSession(chat.id);
      closeMobileSidebar();
    });

    // Delete session
    const delBtn = item.querySelector(".recent-chat-del");
    delBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteChatSession(chat.id);
    });

    DOM.recentChatsList.appendChild(item);
  });
}

function loadChatSession(sessionId) {
  const session = AppState.recentChats.find(s => s.id === sessionId);
  if (!session) return;

  AppState.activeSessionId = sessionId;
  DOM.welcomeScreen.style.display = "none";
  DOM.messagesContainer.innerHTML = "";
  DOM.activeChatTopic.textContent = session.title;

  // Render session messages
  session.messages.forEach(msg => {
    if (msg.sender === "user") {
      appendUserMessage(msg.text, msg.time);
    } else {
      // Bot
      if (msg.data) {
        appendBotMessage(msg.data, msg.time);
      } else {
        appendBotMessage({ type: "chat", text: msg.text }, msg.time);
      }
    }
  });

  renderRecentChatsList();
  scrollToBottom();
}

function deleteChatSession(sessionId) {
  const idx = AppState.recentChats.findIndex(s => s.id === sessionId);
  if (idx >= 0) {
    AppState.recentChats.splice(idx, 1);
    if (AppState.activeSessionId === sessionId) {
      startNewChat();
    } else {
      renderRecentChatsList();
    }
    showToast("Chat session removed.");
  }
}

function recordActiveChatMessage(userText, botResult) {
  let session = AppState.recentChats.find(s => s.id === AppState.activeSessionId);
  const currentTime = getFormattedTime();

  if (!session) {
    // Create new session entry
    const newSessionId = "chat-" + Date.now();
    AppState.activeSessionId = newSessionId;

    let cleanTitle = userText.slice(0, 24);
    if (userText.length > 24) cleanTitle += "...";

    session = {
      id: newSessionId,
      title: `✨ ${cleanTitle}`,
      topic: botResult.type || "outfit",
      timestamp: "Just now",
      messages: []
    };
    AppState.recentChats.unshift(session);
  }

  session.messages.push({ sender: "user", text: userText, time: currentTime });
  session.messages.push({ sender: "bot", data: botResult, time: currentTime });

  renderRecentChatsList();
}

function startNewChat() {
  AppState.activeSessionId = null;
  DOM.messagesContainer.innerHTML = "";
  DOM.welcomeScreen.style.display = "block";
  DOM.activeChatTopic.textContent = "Curating your aesthetic & wardrobe";
  DOM.chatInput.value = "";
  DOM.chatInput.focus();
  renderRecentChatsList();
  closeMobileSidebar();
  showToast("Ready for a fresh styling session! ✨");
}

function clearCurrentChat() {
  DOM.confirmModal.classList.add("open");
}

// Export / Print Conversation Dossier
function exportChatDossier() {
  const messages = DOM.messagesContainer.querySelectorAll(".message-row");
  if (messages.length === 0) {
    showToast("Ask some fashion questions first to export your dossier! ✨");
    return;
  }
  showToast("Opening Style Dossier print & PDF preview... ✨");
  setTimeout(() => {
    window.print();
  }, 350);
}

// ==========================================================================
// 10. VOICE INPUT (Web Speech API Integration)
// ==========================================================================

function initVoiceInput() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    DOM.voiceBtn.style.display = "none";
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = "en-US";

  let isRecording = false;

  DOM.voiceBtn.addEventListener("click", () => {
    if (isRecording) {
      recognition.stop();
      return;
    }

    try {
      recognition.start();
      isRecording = true;
      DOM.voiceBtn.classList.add("recording");
      DOM.chatInput.placeholder = "Listening to you... Speak your fashion question!";
    } catch (err) {
      console.warn("Speech recognition error:", err);
    }
  });

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    DOM.chatInput.value = transcript;
    DOM.chatInput.focus();
    showToast(`Heard: "${transcript}"`);
  };

  recognition.onend = () => {
    isRecording = false;
    DOM.voiceBtn.classList.remove("recording");
    DOM.chatInput.placeholder = "Ask me anything about fashion...";
  };

  recognition.onerror = () => {
    isRecording = false;
    DOM.voiceBtn.classList.remove("recording");
    DOM.chatInput.placeholder = "Ask me anything about fashion...";
  };
}

// ==========================================================================
// 11. SIDEBAR & MOBILE DRAWER INTERACTIONS
// ==========================================================================

function openMobileSidebar() {
  DOM.sidebar.classList.add("open");
  DOM.sidebarOverlay.classList.add("active");
}

function closeMobileSidebar() {
  DOM.sidebar.classList.remove("open");
  DOM.sidebarOverlay.classList.remove("active");
}

// ==========================================================================
// 12. EVENT LISTENERS INITIALIZATION
// ==========================================================================

function initEventListeners() {
  // Chat form submit
  DOM.chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    handleUserSubmit();
  });

  // Enter key handling on input (Enter sends, Shift+Enter makes newline)
  DOM.chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleUserSubmit();
    }
  });

  // Auto-grow textarea height
  DOM.chatInput.addEventListener("input", function() {
    this.style.height = "auto";
    this.style.height = (this.scrollHeight) + "px";
  });

  // New Chat Button
  DOM.newChatBtn.addEventListener("click", () => {
    startNewChat();
  });

  // Clear Chat Button
  DOM.clearChatBtn.addEventListener("click", () => {
    clearCurrentChat();
  });

  // Export Dossier Button
  DOM.exportChatBtn.addEventListener("click", exportChatDossier);

  // About Modal Triggers
  DOM.aboutBtn.addEventListener("click", () => {
    DOM.aboutModal.classList.add("open");
  });
  DOM.closeAboutBtn.addEventListener("click", () => {
    DOM.aboutModal.classList.remove("open");
  });
  DOM.closeAboutBtn2.addEventListener("click", () => {
    DOM.aboutModal.classList.remove("open");
  });

  // Clear Confirm Modal buttons
  DOM.closeConfirmBtn.addEventListener("click", () => DOM.confirmModal.classList.remove("open"));
  DOM.cancelClearBtn.addEventListener("click", () => DOM.confirmModal.classList.remove("open"));
  DOM.confirmClearBtn.addEventListener("click", () => {
    DOM.confirmModal.classList.remove("open");
    startNewChat();
  });

  // Close modals on outside click
  window.addEventListener("click", (e) => {
    if (e.target === DOM.lookbookModal) DOM.lookbookModal.classList.remove("open");
    if (e.target === DOM.confirmModal) DOM.confirmModal.classList.remove("open");
    if (e.target === DOM.aboutModal) DOM.aboutModal.classList.remove("open");
  });

  // Lookbook Modals
  DOM.topbarLookbookBtn.addEventListener("click", () => {
    renderLookbookModal();
    DOM.lookbookModal.classList.add("open");
  });
  DOM.sidebarLookbookBtn.addEventListener("click", () => {
    renderLookbookModal();
    DOM.lookbookModal.classList.add("open");
  });
  DOM.closeLookbookBtn.addEventListener("click", () => DOM.lookbookModal.classList.remove("open"));
  DOM.closeLookbookBtn2.addEventListener("click", () => DOM.lookbookModal.classList.remove("open"));
  DOM.clearLookbookBtn.addEventListener("click", () => {
    if (AppState.lookbook.length === 0) return;
    if (confirm("Are you sure you want to clear all saved looks from your Lookbook?")) {
      AppState.lookbook = [];
      persistLookbook();
      updateLookbookCounters();
      renderLookbookModal();
      showToast("Lookbook cleared.");
    }
  });

  // Sound Toggle Button
  DOM.soundToggleBtn.addEventListener("click", () => {
    AppState.soundEnabled = !AppState.soundEnabled;
    try {
      localStorage.setItem("stylemate_sound", AppState.soundEnabled);
    } catch (e) {}

    if (AppState.soundEnabled) {
      DOM.soundToggleBtn.innerHTML = `<i class="fa-solid fa-volume-high"></i>`;
      DOM.soundToggleBtn.classList.add("active");
      playChime(true);
      showToast("Sound chimes enabled 🔔");
    } else {
      DOM.soundToggleBtn.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`;
      DOM.soundToggleBtn.classList.remove("active");
      showToast("Sound muted 🔇");
    }
  });

  // Mobile menu open / close
  DOM.mobileMenuBtn.addEventListener("click", openMobileSidebar);
  DOM.sidebarCloseBtn.addEventListener("click", closeMobileSidebar);
  DOM.sidebarOverlay.addEventListener("click", closeMobileSidebar);

  // Quick Suggestion Cards in Welcome View
  const suggestionCards = DOM.suggestionsGrid.querySelectorAll(".suggestion-card");
  suggestionCards.forEach(card => {
    card.addEventListener("click", () => {
      const prompt = card.getAttribute("data-prompt");
      handleUserSubmit(prompt);
    });
  });

  // Quick Prompt Chips Bar above Input
  const chipButtons = DOM.quickChipsBar.querySelectorAll(".chip-btn");
  chipButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const prompt = btn.getAttribute("data-prompt");
      handleUserSubmit(prompt);
    });
  });

  // Quick Navigation Sidebar Buttons
  const navItems = DOM.quickNav.querySelectorAll(".nav-item");
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      const action = item.getAttribute("data-action");
      closeMobileSidebar();

      if (action === "outfit") {
        handleUserSubmit("Suggest a stylish outfit for me today with accessories and footwear");
      } else if (action === "color") {
        handleUserSubmit("What are some aesthetic colour combinations for clothes and why do they work?");
      } else if (action === "occasion") {
        handleUserSubmit("What are suitable outfits for different occasions like college, party, and wedding?");
      } else if (action === "tips") {
        handleUserSubmit("Give me pro fashion styling tips to look elegant and style clothes");
      }
    });
  });
}

// ==========================================================================
// 13. DOM CONTENT LOADED - BOOTSTRAP
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  loadPersistedData();
  renderRecentChatsList();
  updateLookbookCounters();
  initEventListeners();
  initVoiceInput();

  // Set sound button state
  if (AppState.soundEnabled) {
    DOM.soundToggleBtn.classList.add("active");
  } else {
    DOM.soundToggleBtn.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`;
  }

  // Focus input automatically
  DOM.chatInput.focus();
});
