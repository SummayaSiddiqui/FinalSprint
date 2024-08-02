const products = [
  {
    id: 1,
    name: "Sapiens: A Brief History of Humankind",
    description:
      "A book by Yuval Noah Harari that explores the history of humankind from the Stone Age to the present.",
    price: 19.99,
    image: "images/sapiens.png",
  },
  {
    id: 2,
    name: "Guns, Germs, and Steel",
    description:
      "A book by Jared Diamond that examines the factors influencing the development of human societies throughout history.",
    price: 14.99,
    image: "images/gunsandgerms.png",
  },
  {
    id: 3,
    name: "The History of the Ancient World",
    description:
      "A comprehensive book by Susan Wise Bauer that covers the history of ancient civilizations from their origins to the fall of the Roman Empire.",
    price: 22.5,
    image: "images/historyancientworld.png",
  },
  {
    id: 4,
    name: "A People's History of the United States",
    description:
      "A book by Howard Zinn that presents American history through the eyes of ordinary people rather than political leaders.",
    price: 17.99,
    image: "images/peopleshistoryus.png",
  },
  {
    id: 5,
    name: "The Silk Roads: A New History of the World",
    description:
      "A book by Peter Frankopan that provides a history of the world from the perspective of the Silk Roads and the East.",
    price: 18.5,
    image: "images/silkroads.png",
  },
  {
    id: 6,
    name: "The Rise and Fall of the Third Reich",
    description:
      "A book by William L. Shirer that chronicles the history of Nazi Germany from its origins to its downfall.",
    price: 21.0,
    image: "images/riseandfallthirdreich.png",
  },
  {
    id: 7,
    name: "The Histories",
    description:
      "An ancient Greek text by Herodotus, considered the first work of history in Western literature.",
    price: 12.0,
    image: "images/histories.png",
  },
  {
    id: 8,
    name: "The Second World War",
    description:
      "A comprehensive account of World War II by Winston Churchill, covering the global conflict in detail.",
    price: 25.0,
    image: "images/secondworldwar.png",
  },
  {
    id: 9,
    name: "The Making of the Modern World",
    description:
      "A book by Robert B. Marks that examines the transformative changes from the 16th to the 20th century that shaped the modern world.",
    price: 16.75,
    image: "images/makingmodernworld.png",
  },
  {
    id: 10,
    name: "The Cold War: A New History",
    description:
      "A book by John Lewis Gaddis that offers a fresh perspective on the Cold War, detailing the geopolitical struggle between the U.S. and the Soviet Union.",
    price: 19.5,
    image: "images/coldwarnewhistory.png",
  },
  {
    id: 11,
    name: "The Age of Empires",
    description:
      "A comprehensive examination of the rise and fall of empires throughout history, exploring their impact on the world.",
    price: 20.0,
    image: "images/ageofempires.png",
  },
  {
    id: 12,
    name: "The World at War",
    description:
      "A detailed account of the global conflict of World War I, including its causes, major battles, and aftermath.",
    price: 23.0,
    image: "images/worldatwar.png",
  },
];

export const getProducts = () => products;

export const getProductById = (productId) =>
  products.find((product) => product.id === productId);
