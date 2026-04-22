export const products = [
  {
    id: "nike-jordan-1-retro-high-og-chicago-lost-and-found",
    name: "Jordan 1 Retro High OG",
    brand: "Jordan",
    colorway: "Chicago Lost and Found",
    releaseDate: "2022-11-19",
    sku: "DZ5485-612",
    price: 450,
    condition: "Brand New / Authenticated",
    image: "https://picsum.photos/seed/jordan1chicago/800/800",
    description: "The classic returns with a vintage, aged look simulating a legendary pair lost in storage."
  },
  {
    id: "nike-dunk-low-retro-white-black-panda",
    name: "Nike Dunk Low Retro",
    brand: "Nike",
    colorway: "White/Black Panda",
    releaseDate: "2021-03-10",
    sku: "DD1391-100",
    price: 155,
    condition: "Brand New / Authenticated",
    image: "https://picsum.photos/seed/dunkpanda/800/800",
    description: "A minimalist iteration of the iconic Dunk Low. Striking monochromatic colorway."
  },
  {
    id: "adidas-yeezy-boost-350-v2-onyx",
    name: "Yeezy Boost 350 V2",
    brand: "adidas",
    colorway: "Onyx",
    releaseDate: "2022-06-20",
    sku: "HQ4540",
    price: 280,
    condition: "Brand New / Authenticated",
    image: "https://picsum.photos/seed/yeezyonyx/800/800",
    description: "Complete black-out iteration of the famous 350 V2 silhouette, built upon comfortable Boost cushioning."
  },
  {
    id: "nike-travis-scott-jordan-1-low-reverse-mocha",
    name: "Jordan 1 Retro Low OG SP",
    brand: "Jordan x Travis Scott",
    colorway: "Reverse Mocha",
    releaseDate: "2022-07-21",
    sku: "DM7866-162",
    price: 1250,
    condition: "Brand New / Authenticated",
    image: "https://picsum.photos/seed/travisreverse/800/800",
    description: "One of the most sought after collaborations featuring the signature reverse swoosh."
  },
  {
    id: "new-balance-990v6-action-bronson-lapis-lazuli",
    name: "New Balance 990v6",
    brand: "New Balance",
    colorway: "Action Bronson Lapis Lazuli",
    releaseDate: "2023-06-30",
    sku: "M990AB6",
    price: 310,
    condition: "Brand New / Authenticated",
    image: "https://picsum.photos/seed/nb990action/800/800",
    description: "A premium collaborative release featuring rich blue hues atop an ENCAP midsole."
  },
  {
    id: "nike-kobe-6-protro-grinch-2020",
    name: "Kobe 6 Protro",
    brand: "Nike",
    colorway: "Grinch 2020",
    releaseDate: "2020-12-24",
    sku: "CW2190-300",
    price: 850,
    condition: "Brand New / Authenticated",
    image: "https://picsum.photos/seed/kobegrinch/800/800",
    description: "The beloved Christmas staple returns in Protro form emphasizing performance and vibrant style."
  }
];

export const getProductById = (id: string) => products.find(p => p.id === id);
