export type NavItem = {
  label: string;
  href: string;
};

export type Dish = {
  title: string;
  description: string;
  price: string;
  category: string;
};

export type MenuCategory = {
  title: string;
  description: string;
  groups: MenuGroup[];
};

export type MenuGroup = {
  title: string;
  items: Dish[];
};

export type Review = {
  name: string;
  meta: string;
  rating: number;
  quote: string;
};

export const businessInfo = {
  name: "Kabul Jaan Restaurant",
  phoneDisplay: "0336 8156071",
  phoneHref: "tel:+923368156071",
  whatsappHref: "https://wa.me/923368156071",
  address: "6X7W+44G, Hudda, Quetta, Pakistan",
  directionsHref:
    "https://www.google.com/maps/search/?api=1&query=Kabul%20Jaan%20Restaurant%206X7W%2B44G%20Hudda%20Quetta%20Pakistan",
  mapEmbedSrc:
    "https://www.google.com/maps?q=Kabul%20Jaan%20Restaurant%206X7W%2B44G%20Hudda%20Quetta%20Pakistan&output=embed",
  googleRating: "4.0",
  googleReviewCount: "819"
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" }
];

export const featuredDishes: Dish[] = [
  {
    title: "Qabili Palaw",
    description:
      "Long rice, sweet carrot, raisin, almond, and lamb resting under saffron steam.",
    price: "Rs 1,450",
    category: "Rice"
  },
  {
    title: "Chapli Kebab",
    description:
      "Charred edges, crushed coriander, green chilli, and tomato folded into the mince.",
    price: "Rs 1,180",
    category: "Kebabs"
  },
  {
    title: "Mantu",
    description:
      "Hand-folded dumplings with garlic yogurt, lentil sauce, and warm paprika oil.",
    price: "Rs 980",
    category: "Mantu"
  }
];

export const menuCategories: MenuCategory[] = [
  {
    title: "Platters",
    description:
      "Family-sized spreads built for groups, events, and big dinner tables.",
    groups: [
      {
        title: "Special Jumbo Platters",
        items: [
          {
            title: "10-12 Person Platter",
            description:
              "Mutton karahi half, chicken karahi half, 4 sada Kabuli pulao, beef boti, beef qeema kabab, seekh kabab, batair, fish, chicken boti, malai boti, rashmi, achari, cheese kabab, mutton champ, salads, raita, lassi, cold drink, and 12 naan.",
            price: "Rs 12,999",
            category: "Platters"
          },
          {
            title: "5-6 Person Platter",
            description:
              "Chicken karahi half, 2 sada Kabuli pulao, half portions of Afghan beef boti, qeema kabab, seekh, batair, fish, chicken boti, malai, achari, rashmi, cheese kabab, mutton champ, salad, raita, cold drink, and 6 naan.",
            price: "Rs 6,099",
            category: "Platters"
          }
        ]
      },
      {
        title: "Sada Platters",
        items: [
          {
            title: "3 Person Platter",
            description:
              "2 sada Kabuli pulao, half Afghan beef boti, half qeema kabab, chicken tikka, half malai boti, half chicken boti, half mutton chops, salad, raita, 3 naan, and cold drink.",
            price: "Rs 3,199",
            category: "Platters"
          },
          {
            title: "5 Person Platter",
            description:
              "Beef Kabuli pulao, 2 sada Kabuli pulao, Afghan beef boti, beef qeema kabab, chicken malai boti, chicken boti, mutton Sikandari kabab, raita, salad, 5 naan, and cold drink.",
            price: "Rs 4,999",
            category: "Platters"
          },
          {
            title: "10 Person Platter",
            description:
              "Chicken karahi half, 5 sada Kabuli pulao, beef Kabuli pulao, Afghan beef boti, beef qeema kabab, chicken boti, malai boti, rashmi kabab, chicken tikka, Afghani chargha, mutton rosh, salads, raita, 10 naan, and cold drink.",
            price: "Rs 9,999",
            category: "Platters"
          }
        ]
      },
      {
        title: "Special Platters",
        items: [
          {
            title: "3 Person Platter",
            description:
              "Mutton Kabuli pulao, sada Kabuli pulao, Afghani mutton chops, half Afghan beef boti, half beef qeema kabab, chicken tikka, raita, salad, 3 naan, and jug lassi.",
            price: "Rs 4,199",
            category: "Platters"
          },
          {
            title: "5 Person Platter",
            description:
              "Chicken tandoori full, 3 sada Kabuli pulao, mutton champ tikka, Afghan beef boti, beef qeema kabab, chicken boti, malai boti, 5 naan, salad, raita, and jug lassi.",
            price: "Rs 6,499",
            category: "Platters"
          },
          {
            title: "10 Person Platter",
            description:
              "Mutton ribs, mutton leg, mutton chops, mutton Sikandari kabab, Afghan beef boti, beef qeema kabab, mutton rosh, 7 sada Kabuli pulao, dumba rosh, 10 naan, raita, salad, and jug lassi.",
            price: "Rs 14,999",
            category: "Platters"
          }
        ]
      }
    ]
  },
  {
    title: "Main Courses",
    description: "Karahi, rosh, mantu, and rich Afghan-style cooked dishes.",
    groups: [
      {
        title: "Kabul Jaan Karahi",
        items: [
          {
            title: "Kabul Jaan Special Mutton Karahi",
            description: "Half / full.",
            price: "Rs 1,650 / 3,100",
            category: "Main Courses"
          },
          {
            title: "Mutton White Karahi",
            description: "Half / full.",
            price: "Rs 1,750 / 3,300",
            category: "Main Courses"
          },
          {
            title: "Mutton Butter Karahi",
            description: "Half / full.",
            price: "Rs 1,750 / 3,300",
            category: "Main Courses"
          },
          {
            title: "Mutton Brown Onion Karahi",
            description: "Half / full.",
            price: "Rs 1,750 / 3,300",
            category: "Main Courses"
          },
          {
            title: "Kabul Jaan Special Chicken Karahi",
            description: "Half / full.",
            price: "Rs 950 / 1,680",
            category: "Main Courses"
          },
          {
            title: "Chicken White Karahi",
            description: "Half / full.",
            price: "Rs 1,050 / 1,900",
            category: "Main Courses"
          },
          {
            title: "Chicken Butter Karahi",
            description: "Half / full.",
            price: "Rs 1,050 / 1,900",
            category: "Main Courses"
          }
        ]
      },
      {
        title: "Kabul Jaan Special",
        items: [
          {
            title: "Mutton Namkeen Rosh",
            description: "Salt-forward Afghan-style mutton rosh.",
            price: "Rs 960",
            category: "Main Courses"
          },
          {
            title: "Dumba Rosh",
            description: "Rich dumba rosh cooked for deep flavor.",
            price: "Rs 1,280",
            category: "Main Courses"
          },
          {
            title: "Mutton Joint Fried",
            description: "Fried mutton joint.",
            price: "Rs 1,100",
            category: "Main Courses"
          },
          {
            title: "Mantu",
            description: "Steamed Afghan dumplings.",
            price: "Rs 490",
            category: "Main Courses"
          }
        ]
      },
      {
        title: "Kabul Jaan Special Magaz",
        items: [
          {
            title: "Brain Masala",
            description: "Spiced brain masala.",
            price: "Rs 1,180",
            category: "Main Courses"
          },
          {
            title: "Brain Fry",
            description: "Fried brain with house spices.",
            price: "Rs 1,060",
            category: "Main Courses"
          }
        ]
      }
    ]
  },
  {
    title: "Tandoori & BBQ",
    description:
      "Coal-fired meats, tandoori specials, kababs, chops, tikka, and chargha.",
    groups: [
      {
        title: "Kabul Jaan Tandoori",
        items: [
          {
            title: "Mutton Leg Tandoori",
            description: "Whole tandoori-style mutton leg.",
            price: "Rs 3,200",
            category: "Tandoori & BBQ"
          },
          {
            title: "Mutton Leg Namkeen Grill",
            description: "Salt-grilled mutton leg.",
            price: "Rs 3,200",
            category: "Tandoori & BBQ"
          },
          {
            title: "Mutton Ribz Tandoori",
            description: "Tandoori mutton ribs.",
            price: "Rs 3,200",
            category: "Tandoori & BBQ"
          },
          {
            title: "Mutton Ribz Namkeen Grill",
            description: "Salt-grilled mutton ribs.",
            price: "Rs 3,200",
            category: "Tandoori & BBQ"
          },
          {
            title: "Chicken Tandoori",
            description: "Full tandoori chicken.",
            price: "Rs 1,650",
            category: "Tandoori & BBQ"
          },
          {
            title: "Salam Bakra Dampukht",
            description: "Priced per kg.",
            price: "Rs 3,000 / kg",
            category: "Tandoori & BBQ"
          },
          {
            title: "Quail Tandoori",
            description: "4 pieces.",
            price: "Rs 850",
            category: "Tandoori & BBQ"
          }
        ]
      },
      {
        title: "Kabul Jaan BBQ",
        items: [
          {
            title: "Chicken Afghani Chargha",
            description: "Afghani-style whole chicken chargha.",
            price: "Rs 1,450",
            category: "Tandoori & BBQ"
          },
          {
            title: "Afghani Boti Beef",
            description: "Beef boti grilled over coals.",
            price: "Rs 590",
            category: "Tandoori & BBQ"
          },
          {
            title: "Afghani Qeema Kabab Beef",
            description: "Minced beef kabab.",
            price: "Rs 590",
            category: "Tandoori & BBQ"
          },
          {
            title: "Beef Seekh Kabab",
            description: "Classic beef seekh kabab.",
            price: "Rs 680",
            category: "Tandoori & BBQ"
          },
          {
            title: "Afghani Mutton Chops Tikka",
            description: "6 pieces.",
            price: "Rs 1,050",
            category: "Tandoori & BBQ"
          },
          {
            title: "Afghani Lum",
            description: "6 seekh.",
            price: "Rs 750",
            category: "Tandoori & BBQ"
          },
          {
            title: "Afghani Boti Mutton",
            description: "Mutton boti grilled Afghan-style.",
            price: "Rs 1,250",
            category: "Tandoori & BBQ"
          },
          {
            title: "Mutton Sikandari Kabab",
            description: "Mutton kabab with house spices.",
            price: "Rs 750",
            category: "Tandoori & BBQ"
          },
          {
            title: "Chicken Boti With Bone",
            description: "Bone-in chicken boti.",
            price: "Rs 590",
            category: "Tandoori & BBQ"
          },
          {
            title: "Chicken Malai Boti",
            description: "Creamy grilled chicken boti.",
            price: "Rs 620",
            category: "Tandoori & BBQ"
          },
          {
            title: "Chicken Rashmi Kabab",
            description: "Soft chicken rashmi kabab.",
            price: "Rs 650",
            category: "Tandoori & BBQ"
          },
          {
            title: "Chicken Tikka Chest",
            description: "Chest piece.",
            price: "Rs 480",
            category: "Tandoori & BBQ"
          },
          {
            title: "Chicken Tikka Leg",
            description: "Leg piece.",
            price: "Rs 450",
            category: "Tandoori & BBQ"
          },
          {
            title: "Chicken Malai Tikka Chest",
            description: "Creamy chest tikka.",
            price: "Rs 530",
            category: "Tandoori & BBQ"
          },
          {
            title: "Chicken Malai Tikka Leg",
            description: "Creamy leg tikka.",
            price: "Rs 500",
            category: "Tandoori & BBQ"
          },
          {
            title: "Chicken Pickle Boti",
            description: "Achari-style chicken boti.",
            price: "Rs 570",
            category: "Tandoori & BBQ"
          },
          {
            title: "Chicken Kastori Kabab",
            description: "Chicken kabab with rich seasoning.",
            price: "Rs 750",
            category: "Tandoori & BBQ"
          },
          {
            title: "Chicken Cheese Kabab",
            description: "Chicken kabab with cheese.",
            price: "Rs 680",
            category: "Tandoori & BBQ"
          },
          {
            title: "Batair Tikka",
            description: "Quail tikka.",
            price: "Rs 890",
            category: "Tandoori & BBQ"
          },
          {
            title: "Fish Tikka",
            description: "Grilled fish tikka.",
            price: "Rs 920",
            category: "Tandoori & BBQ"
          }
        ]
      }
    ]
  },
  {
    title: "Seafood",
    description: "Tandoori fish, finger fish, and Dhaka fish.",
    groups: [
      {
        title: "Kabul Jaan Special Fish",
        items: [
          {
            title: "Fish Tandoori",
            description: "Half / full.",
            price: "Rs 850 / 1,600",
            category: "Seafood"
          },
          {
            title: "Finger Fish",
            description: "8 pieces.",
            price: "Rs 950",
            category: "Seafood"
          },
          {
            title: "Dhaka Fish",
            description: "8 pieces.",
            price: "Rs 950",
            category: "Seafood"
          }
        ]
      }
    ]
  },
  {
    title: "Rice & Pulao",
    description: "Kabuli pulao in mutton, beef, and sada styles.",
    groups: [
      {
        title: "Kabul Jaan Pulao",
        items: [
          {
            title: "Mutton Kabuli Pulao",
            description: "Mutton served with aromatic Kabuli rice.",
            price: "Rs 920",
            category: "Rice & Pulao"
          },
          {
            title: "Beef Kabuli Pulao",
            description: "Beef served with Kabuli rice.",
            price: "Rs 590",
            category: "Rice & Pulao"
          },
          {
            title: "Sada Kabuli Pulao",
            description: "Classic Kabuli rice.",
            price: "Rs 340",
            category: "Rice & Pulao"
          }
        ]
      }
    ]
  },
  {
    title: "Desserts & Beverages",
    description: "Afghani sheeryakh, faloodah, lassi, tea, water, and drinks.",
    groups: [
      {
        title: "Special Afghani Sheeryakh",
        items: [
          {
            title: "Special Afghani Sheeryakh",
            description: "Single / double.",
            price: "Rs 150 / 280",
            category: "Desserts & Beverages"
          },
          {
            title: "Afghani Sheeryakh Jumbo",
            description: "Single / family pack.",
            price: "Rs 350 / 650",
            category: "Desserts & Beverages"
          },
          {
            title: "Faloodah",
            description: "Single / double.",
            price: "Rs 190 / 280",
            category: "Desserts & Beverages"
          },
          {
            title: "Faloodah Family Pack",
            description: "Family pack.",
            price: "Rs 600",
            category: "Desserts & Beverages"
          }
        ]
      },
      {
        title: "Beverages",
        items: [
          {
            title: "Cold Drink Tin",
            description: "Single tin.",
            price: "Rs 110",
            category: "Desserts & Beverages"
          },
          {
            title: "Cold Drink 1.5ltr",
            description: "Large bottle.",
            price: "Rs 220",
            category: "Desserts & Beverages"
          },
          {
            title: "Mineral Water Small",
            description: "Small bottle.",
            price: "Rs 60",
            category: "Desserts & Beverages"
          },
          {
            title: "Mineral Water Large",
            description: "Large bottle.",
            price: "Rs 100",
            category: "Desserts & Beverages"
          },
          {
            title: "Lassi 500ml",
            description: "Fresh lassi.",
            price: "Rs 100",
            category: "Desserts & Beverages"
          },
          {
            title: "Lassi Jug",
            description: "Jug serving.",
            price: "Rs 280",
            category: "Desserts & Beverages"
          },
          {
            title: "Milk Tea / Green Tea",
            description: "Hot tea options.",
            price: "Rs 100 / 80",
            category: "Desserts & Beverages"
          }
        ]
      }
    ]
  },
  {
    title: "Sides, Breads & Extras",
    description: "Naan, chapati, salad, raita, and table extras.",
    groups: [
      {
        title: "Nan & Salad",
        items: [
          {
            title: "Chapati",
            description: "Fresh chapati.",
            price: "Rs 30",
            category: "Sides"
          },
          {
            title: "Afghani Nan",
            description: "Afghan-style naan.",
            price: "Rs 40",
            category: "Sides"
          },
          {
            title: "Rogni Nan",
            description: "Rich rogni naan.",
            price: "Rs 80",
            category: "Sides"
          },
          {
            title: "Green Salad",
            description: "Fresh side salad.",
            price: "Rs 80",
            category: "Sides"
          },
          {
            title: "Special Salad",
            description: "House special salad.",
            price: "Rs 220",
            category: "Sides"
          },
          {
            title: "Raita",
            description: "Yogurt raita.",
            price: "Rs 120",
            category: "Sides"
          },
          {
            title: "Glass Disposal",
            description: "Disposable glass.",
            price: "Rs 10",
            category: "Sides"
          }
        ]
      }
    ]
  }
];

export const galleryImages = [
  {
    src: "/images/img7.PNG",
    alt: "Kabul Jaan dining room atmosphere",
    title: "The dining floor"
  },
  {
    src: "/images/img8.PNG",
    alt: "Kabul Jaan interior detail",
    title: "Warm corners"
  },
  {
    src: "/images/img9.PNG",
    alt: "Kabul Jaan seating with signature glow",
    title: "Tungsten glow"
  },
  {
    src: "/images/food1.PNG",
    alt: "Kabul Jaan signature Afghan dish",
    title: "From the kitchen"
  },
  {
    src: "/images/img10.PNG",
    alt: "Kabul Jaan staircase and brass accents",
    title: "Brass and light"
  },
  {
    src: "/images/food2.PNG",
    alt: "Kabul Jaan plated kebab",
    title: "Coal and smoke"
  }
];

export const contactDetails = [
  {
    label: "Phone",
    value: businessInfo.phoneDisplay,
    href: businessInfo.phoneHref
  },
  {
    label: "WhatsApp",
    value: businessInfo.phoneDisplay,
    href: businessInfo.whatsappHref
  },
  {
    label: "Instagram",
    value: "@kabul_jaan31",
    href: "https://www.instagram.com/kabul_jaan31/"
  },
  {
    label: "Address",
    value: businessInfo.address,
    href: businessInfo.directionsHref
  }
];

export const hours = [
  ["Monday - Thursday", "12:00 PM - 11:00 PM"],
  ["Friday", "2:00 PM - 12:00 AM"],
  ["Saturday - Sunday", "12:00 PM - 12:00 AM"]
];

export const reviews: Review[] = [
  {
    name: "Usama Khawar Ghumman",
    meta: "Local Guide",
    rating: 5,
    quote:
      "Kabul Jaan Restaurant truly delivers on authentic Afghan flavors. A strong pick for dinner in Quetta."
  },
  {
    name: "Ahad Baluch",
    meta: "Local Guide",
    rating: 4,
    quote:
      "If you're looking for a place where flavor truly speaks, Kabul Jaan Restaurant is a must-visit."
  },
  {
    name: "Google reviewer",
    meta: "Dine in",
    rating: 4,
    quote:
      "A very good food serving restaurant. Their rosh, kabli pulao, lassi, and afghani boti are awesome."
  }
];
