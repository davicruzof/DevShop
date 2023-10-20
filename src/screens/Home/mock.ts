export interface ProductType {
  id: number;
  name: string;
  quantidade: string;
  description: string;
  price: number;
  image_url: string;
  category: "Beer" | "Drinks" | "Coffee" | "Juices" | "Specials" | "Bottles";
  type: "gelada" | "quente";
}

export const ProductsList: ProductType[] = [
  {
    id: 1,
    name: "Stella Artois",
    quantidade: "330ml",
    description: "Cerveja belga premium",
    price: 5.99,
    image_url:
      "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Fproduc_variant%2F00009876_1e0c01ee-1c4d-431e-b428-dd391cb578bd.jpg%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D540%26h%3D540%26dpr%3D2&w=3840&q=75",
    category: "Beer",
    type: "gelada",
  },
  {
    id: 2,
    name: "Heineken",
    quantidade: "12-pack",
    description: "Cerveja pilsen holandesa",
    price: 12.99,
    image_url:
      "https://www.heineken.com/media-la/01pfxdqq/heineken-original-bottle.png?anchor=center&mode=crop&width=1506&height=2258&quality=85",
    category: "Beer",
    type: "gelada",
  },
  {
    id: 3,
    name: "Pack Bohemia",
    quantidade: "24 * 330ml",
    description: "Cerveja com vasilhame incluso",
    price: 38.99,
    image_url:
      "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Fproduc_variant%2F00017900_895eb2d0-9971-46d7-ad74-6b2713edaca1.jpg%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D540%26h%3D540%26dpr%3D2&w=3840&q=75",
    category: "Beer",
    type: "gelada",
  },
  {
    id: 4,
    name: "Antarctica Pilsen",
    quantidade: "300ml",
    description: "Cerveja brasileira",
    price: 2.99,
    image_url:
      "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Fproduc_variant%2F00008735_d87dfb89-b5e5-4661-b6b4-ea88c983a5fa.jpg%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D540%26h%3D540%26dpr%3D2&w=3840&q=75",
    category: "Beer",
    type: "gelada",
  },
  {
    id: 5,
    name: "Budweiser",
    quantidade: "24-pack",
    description: "Cerveja americana",
    price: 5.99,
    image_url:
      "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Fproduc_variant%2F00009303_a4c8b8ed-b588-4616-9b9a-ec7dbdabf471.jpg%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D540%26h%3D540%26dpr%3D2&w=3840&q=75",
    category: "Beer",
    type: "gelada",
  },
  {
    id: 6,
    name: "Corona Extra",
    quantidade: "330ml",
    description: "Cerveja mexicana",
    price: 4.99,
    image_url:
      "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Fproduc_variant%2F00009870_4e6a06a7-cdd3-4914-a85a-9b11c50ec1e0.jpg%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D540%26h%3D540%26dpr%3D2&w=3840&q=75",
    category: "Beer",
    type: "gelada",
  },
  {
    id: 7,
    name: "Brahma Duplo Malte Tostada",
    quantidade: "350ml",
    description:
      "Brahma Duplo Malte Tostada une os maltes Pilsner e Tostado. O processo de tosta é lento, proporcionando sabor e aroma caramelo. O resultado é uma cerveja de coloração acobreada, espuma cremosa e corpo levemente tostado.",
    price: 3.99,
    image_url:
      "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Fproduc_variant%2F00021182_b0fb50a3-b4f0-49fb-b8d3-2d7b2536b836.jpg%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D540%26h%3D540%26dpr%3D2&w=3840&q=75",
    category: "Beer",
    type: "gelada",
  },
  {
    id: 8,
    name: "Spaten",
    quantidade: "350ml",
    description: "Cerveja escocesa",
    price: 8.99,
    image_url:
      "https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Fproduc_variant%2F00012884_ba3d68e1-2657-47f9-92fa-8265af7ea630.jpg%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D540%26h%3D540%26dpr%3D2&w=3840&q=75",
    category: "Beer",
    type: "gelada",
  },
];
