import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    platform: [
      {
        _id: uuid(),
        categoryName: "PlayStation",
        categoryImage:
          "https://media.gamestop.com/i/gamestop/Homepage_5_Column_BrandLogo_PlayStation_264x150_D.webp",
        description:
          "literature in the form of prose, especially novels, that describes imaginary events and people",
      },
      {
        _id: uuid(),
        categoryName: "Xbox",
        categoryImage:
          "https://media.gamestop.com/i/gamestop/Homepage_5_Column_BrandLogo_Xbox_264x150_D.webp",
        description:
          "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
      },
      {
        _id: uuid(),
        categoryName: "Nintendo",
        categoryImage:
          "https://media.gamestop.com/i/gamestop/Homepage_5_Column_BrandLogo_Nintendo_264x150_D.webp",
        description:
          "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
      },
      {
        _id: uuid(),
        categoryName: "Board Games",
        categoryImage:
          "https://cdn.game.net/image/upload/w_750,f_auto,q_auto/v1/game_img/merch2021/Campaigns/FamilyFun/FamilyFun-E.jpg",
        description:
          "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
      },
      {
        _id: uuid(),
        categoryName: "PC Gaming",
        categoryImage: "https://media.gamestop.com/i/gamestop/pc_3.webp?w=1280",
        description:
          "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
      },
    ],
    genre: [
      {
        _id: uuid(),
        categoryName: "Sandbox",
        description:
          "literature in the form of prose, especially novels, that describes imaginary events and people",
      },
      {
        _id: uuid(),
        categoryName: "Real-time strategy",
        description:
          "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
      },
      {
        _id: uuid(),
        categoryName: "Role-playing",
        description:
          "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
      },
      {
        _id: uuid(),
        categoryName: "Shooter",
        description:
          "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
      },
      {
        _id: uuid(),
        categoryName: "Sports",
        description:
          "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
      },
    ],
    brand: [
      {
        _id: uuid(),
        categoryName: "Sony",
        description:
          "literature in the form of prose, especially novels, that describes imaginary events and people",
      },
      {
        _id: uuid(),
        categoryName: "EA",
        description:
          "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
      },
      {
        _id: uuid(),
        categoryName: "Microsoft",
        description:
          "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
      },
      {
        _id: uuid(),
        categoryName: "Tencent",
        description:
          "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
      },
      {
        _id: uuid(),
        categoryName: "Nintendo",
        description:
          "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
      },
    ],
  },
];
