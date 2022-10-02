
export const PublicNav = [
  {
    id: 1,
    name: 'cart',
    icon: 'fa-solid fa-house',
    navigate: 'cart',
    cartIcon:'cart'
  },
  {
    id: 2,
    name: 'wishList',
    icon: '', // icon url later,
    navigate: 'wishlist',
    hover: 'wishlist',
  },
  {
    id: 3,
    name: 'login',
    icon: '', // icon url later,
    navigate: 'login',
  },
];
export const AdminNav = [
  {
    id: 111,
    name: 'orders',
    icon: 'fa-solid fa-house',
    navigate: 'orders',
  },
  {
    id: 1112,
    name: 'pending',
    icon: '', // icon url later,
    navigate: 'pending-orders',
  },
  {
    id: 1113,
    name: 'refund',
    icon: '', // icon url later,
    navigate: 'refund'
  },
    {id: 1114,
    name: 'transporting',
    icon: '', // icon url later,
    navigate: 'transport'
  }
];

export const SampleProduct = [
  {
    id: 1,
    title: 'Product 1',
    image: '/images/alexander-andrews-Wzs4-QEmCUQ-unsplash.jpg',
    price: 300,
    description: 'product descriptions'
  },
  {
    id: 2,
    title: 'Product 2',
    image: '/images/alexander-andrews-Wzs4-QEmCUQ-unsplash.jpg',
    price: 300,
    description: 'product descriptions'
  },
  {
    id: 3,
    title: 'Product 3',
    image: '/images/andras-vas-Bd7gNnWJBkU-unsplash.jpg',
    price: 300,
    description: 'product descriptions'
  },
  {
    id: 4,
    title: 'Product 4',
    image: '/images/austin-poon-JO_S6ewBqAk-unsplash.jpg',
    price: 300,
    description: 'product descriptions'
  },
  {
    id: 5,
    title: 'Product 5',
    image: '/images/christin-hume-mfB1B1s4sMc-unsplash.jpg',
    price: 300,
    description: 'product descriptions'
  },
  {
    id: 6,
    title: 'Product 6',
    image: '/images/kari-shea-1SAnrIxw5OY-unsplash.jpg',
    price: 300,
    description: 'product descriptions'
  },
  {
    id: 7,
    title: 'Product 7',
    image: '/images/rahul-chakraborty-xsGxhtAsfSA-unsplash.jpg',
    price: 300,
    description: 'product descriptions'
  },
  {
    id: 8,
    title: 'Product 8',
    image: '/images/v-a-tao-OxvlDO8RwKg-unsplash.jpg',
    price: 300,
    description: 'product descriptions'
  },
  {
    id: 9,
    title: 'Product 9',
    image: '/images/vojtech-bruzek-J82GxqnwKSs-unsplash (1).jpg',
    price: 300,
    description: 'product descriptions'
  },
  {
    id: 10,
    title: 'Product 10',
    image: '/images/ales-nesetril-Im7lZjxeLhg-unsplash.jpg',
    price: 300,
    description: 'product descriptions'
  },
  {
    id: 11,
    title: 'Product 11',
    image: '/images/andras-vas-Bd7gNnWJBkU-unsplash.jpg',
    price: 300,
    description: 'product descriptions'
  },
  {
    id: 12,
    title: 'Product 12',
    image: '/images/kari-shea-1SAnrIxw5OY-unsplash.jpg',
    price: 300,
    description: 'product descriptions'
  }
];
export interface NavbarI {
  children: Array<{ name: string, icon: any, navigate: string, hover?: string, cartIcon?:string }>
}
// export interface ItemI {
//   item: {
//     id: number;
//     title: string;
//     image: string;
//     price: number;
//     desctiption: string;
//   }[];
// }
