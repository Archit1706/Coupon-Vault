import apple from "assets/products/apple.jpeg";
import banana from "assets/products/banana.jpeg";
import bread from "assets/products/bread.jpeg";
import cheese from "assets/products/cheese.jpeg";
import lentils from "assets/products/lentils.jpeg";
import carrot from "assets/products/carrot.jpeg";
import eggs from "assets/products/eggs.jpeg";
import milk from "assets/products/milk.jpeg";
import potatoes from "assets/products/potatoes.jpeg";
import spinach from "assets/products/spinach.jpeg";
import rice from "assets/products/rice.jpeg";
import salmon from "assets/products/salmon.jpeg";
import tomatoes from "assets/products/tomatoes.jpeg";
import pasta from "assets/products/pasta.jpeg";
import onions from "assets/products/onions.jpeg";
import yogurt from "assets/products/yogurt.jpeg";
import peanutButter from "assets/products/peanutButter.jpeg";
import oranges from "assets/products/oranges.jpeg";
import Product from "@/types/Product";

const name = "Coupon Vault";
const prods: Product[] = [
    {
        skuId: 1,
        name: "Banana",
        category: "Fruits",
        description: "A sweet, yellow fruit with a soft texture.",
        price: 59,
        image: banana,
    },
    {
        skuId: 2,
        name: "Eggs",
        category: "Proteins",
        description:
            "A protein-rich food that is commonly used in many recipes.",
        price: 98,
        image: eggs,
    },
    {
        skuId: 3,
        name: "Milk",
        category: "Dairy",
        description:
            "A white liquid that is rich in calcium and used in many recipes.",
        price: 72,
        image: milk,
    },
    {
        skuId: 4,
        name: "Bread",
        category: "Grains",
        description: "A staple food made from flour, water, and yeast.",
        price: 30,
        image: bread,
    },
    {
        skuId: 5,
        name: "Lentils",
        category: "Grains",
        description: "A common poultry that is a good source of protein.",
        price: 97,
        image: lentils,
    },
    {
        skuId: 6,
        name: "Rice",
        category: "Grains",
        description: "A staple food made from the seeds of the rice plant.",
        price: 248,
        image: rice,
    },
    {
        skuId: 7,
        name: "Potatoes",
        category: "Vegetables",
        description:
            "A starchy root vegetable that is commonly used in many recipes.",
        price: 50,
        image: potatoes,
    },
    {
        skuId: 8,
        name: "Tomatoes",
        category: "Vegetables",
        description:
            "A juicy, red fruit that is commonly used in many recipes.",
        price: 324,
        image: tomatoes,
    },
    {
        skuId: 9,
        name: "Salmon",
        category: "Seafood",
        description:
            "A popular fatty fish that is high in omega-3 fatty acids.",
        price: 38,
        image: salmon,
    },
    {
        skuId: 10,
        name: "Cheese",
        category: "Dairy",
        description:
            "A dairy product made from milk and often used in cooking and as a topping.",
        price: 129,
        image: cheese,
    },
    {
        skuId: 11,
        name: "Apple",
        category: "Fruit",
        description:
            "A round fruit with firm, juicy flesh and typically red, yellow, or green skin. Apples are high in fiber, vitamin C, and various antioxidants.",
        price: 83,
        image: apple,
    },
    {
        skuId: 12,
        name: "Carrots",
        category: "Vegetables",
        description: "A crunchy root vegetable that is high in vitamin A.",
        price: 20,
        image: carrot,
    },
    {
        skuId: 13,
        name: "Yogurt",
        category: "Dairy",
        description:
            "A fermented dairy product that is high in protein and good bacteria.",
        price: 60,
        image: yogurt,
    },
    {
        skuId: 14,
        name: "Spinach",
        category: "Vegetables",
        description:
            "A leafy green vegetable that is high in iron and other nutrients.",
        price: 36,
        image: spinach,
    },
    {
        skuId: 15,
        name: "Chicken Marinate",
        category: "Meat",
        description: "A versatile meat that is often used in many recipes.",
        price: 300,
        image: "https://dummyimage.com/400x400/ffffff/000000&text=Ground+beef",
    },
    {
        skuId: 16,
        name: "Pasta",
        category: "Grains",
        description:
            "A staple food made from wheat flour that is commonly used in many recipes.",
        price: 85,
        image: pasta,
    },
    {
        skuId: 17,
        name: "Onions",
        category: "Vegetables",
        description:
            "A pungent bulb vegetable that is commonly used in many recipes.",
        price: 67,
        image: onions,
    },
    {
        skuId: 18,
        name: "Oranges",
        category: "Fruits",
        description: "A sweet, juicy fruit that is high in vitamin C.",
        price: 67,
        image: oranges,
    },
    {
        skuId: 19,
        name: "Green Peas",
        category: "Vegetables",
        description:
            "A variety of leafy greens that are commonly used in salads.",
        price: 31,
        image: "https://dummyimage.com/400x400/ffffff/000000&text=Salad+greens",
    },
    {
        skuId: 20,
        name: "Peanut butter",
        category: "Spreads",
        description:
            "A spread made from ground peanuts that is high in protein and healthy fats.",
        price: 148,
        image: peanutButter,
    },
    {
        skuId: 21,
        name: "Canned tomatoes",
        category: "Canned goods",
        description:
            "A canned product made from tomatoes that is commonly used in many recipes.",
        price: 38,
        image: tomatoes,
    },
];

export { prods, name };
