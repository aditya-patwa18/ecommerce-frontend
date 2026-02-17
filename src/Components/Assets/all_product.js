import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";

let all_product = [
  // WOMEN
  { id: 1, title: "Striped Flutter Sleeve Blouse", category: "women", image: p1_img, new_price: "$50.00", old_price: "$80.00" },
  { id: 2, title: "Casual V-Neck Summer Dress", category: "women", image: p2_img, new_price: "$65.00", old_price: "$95.00" },
  { id: 3, title: "Elegant White Lace Top", category: "women", image: p3_img, new_price: "$72.00", old_price: "$110.00" },
  { id: 4, title: "Blue Denim Jacket", category: "women", image: p4_img, new_price: "$90.00", old_price: "$130.00" },
  { id: 5, title: "Black Skinny Jeans", category: "women", image: p5_img, new_price: "$60.00", old_price: "$100.00" },
  { id: 6, title: "Red Off-Shoulder Maxi Dress", category: "women", image: p6_img, new_price: "$95.00", old_price: "$140.00" },
  { id: 7, title: "Classic White Shirt", category: "women", image: p7_img, new_price: "$40.00", old_price: "$70.00" },
  { id: 8, title: "Beige Knitted Cardigan", category: "women", image: p8_img, new_price: "$55.00", old_price: "$85.00" },
  { id: 9, title: "Floral Wrap Midi Dress", category: "women", image: p9_img, new_price: "$88.00", old_price: "$125.00" },
  { id: 10, title: "Black Leather Jacket", category: "women", image: p10_img, new_price: "$120.00", old_price: "$180.00" },
  { id: 11, title: "Yellow Summer Crop Top", category: "women", image: p11_img, new_price: "$35.00", old_price: "$60.00" },
  { id: 12, title: "Grey Wool Winter Coat", category: "women", image: p12_img, new_price: "$140.00", old_price: "$200.00" },

  // MEN
  { id: 13, title: "Green Slim Fit Bomber Jacket", category: "men", image: p13_img, new_price: "$85.00", old_price: "$120.00" },
  { id: 14, title: "Classic White Polo Shirt", category: "men", image: p14_img, new_price: "$45.00", old_price: "$75.00" },
  { id: 15, title: "Blue Checked Formal Shirt", category: "men", image: p15_img, new_price: "$55.00", old_price: "$90.00" },
  { id: 16, title: "Black Formal Trousers", category: "men", image: p16_img, new_price: "$70.00", old_price: "$110.00" },
  { id: 17, title: "Grey Hoodie Sweatshirt", category: "men", image: p17_img, new_price: "$50.00", old_price: "$85.00" },
  { id: 18, title: "Navy Blue Blazer", category: "men", image: p18_img, new_price: "$130.00", old_price: "$190.00" },
  { id: 19, title: "Casual Cargo Pants", category: "men", image: p19_img, new_price: "$65.00", old_price: "$100.00" },
  { id: 20, title: "Black Round Neck T-Shirt", category: "men", image: p20_img, new_price: "$35.00", old_price: "$55.00" },
  { id: 21, title: "Denim Slim Fit Jeans", category: "men", image: p21_img, new_price: "$75.00", old_price: "$115.00" },
  { id: 22, title: "Grey Wool Pullover", category: "men", image: p22_img, new_price: "$60.00", old_price: "$95.00" },
  { id: 23, title: "Brown Leather Jacket", category: "men", image: p23_img, new_price: "$150.00", old_price: "$210.00" },
  { id: 24, title: "Sports Running Sneakers", category: "men", image: p24_img, new_price: "$90.00", old_price: "$140.00" },

  // KIDS
  { id: 25, title: "Boys Orange Colourblocked Hoodie", category: "kids", image: p25_img, new_price: "$45.00", old_price: "$70.00" },
  { id: 26, title: "Girls Pink Floral Print Frock", category: "kids", image: p26_img, new_price: "$55.00", old_price: "$90.00" },
  { id: 27, title: "Kids Blue Denim Jacket", category: "kids", image: p27_img, new_price: "$65.00", old_price: "$100.00" },
  { id: 28, title: "Girls White Cotton Summer Dress", category: "kids", image: p28_img, new_price: "$40.00", old_price: "$65.00" },
  { id: 29, title: "Boys Red Checked Casual Shirt", category: "kids", image: p29_img, new_price: "$50.00", old_price: "$85.00" },
  { id: 30, title: "Girls Yellow Polka Dot Skirt", category: "kids", image: p30_img, new_price: "$35.00", old_price: "$60.00" },
  { id: 31, title: "Kids Black Graphic Hoodie", category: "kids", image: p31_img, new_price: "$60.00", old_price: "$95.00" },
  { id: 32, title: "Girls Purple Winter Coat", category: "kids", image: p32_img, new_price: "$75.00", old_price: "$110.00" },
  { id: 33, title: "Boys Navy Blue Track Pants", category: "kids", image: p33_img, new_price: "$42.00", old_price: "$70.00" },
  { id: 34, title: "Girls Green Party Dress", category: "kids", image: p34_img, new_price: "$68.00", old_price: "$105.00" },
  { id: 35, title: "Boys Grey Zip-up Sweatshirt", category: "kids", image: p35_img, new_price: "$52.00", old_price: "$80.00" },
  { id: 36, title: "Girls Red Bow-Tie Dress", category: "kids", image: p36_img, new_price: "$58.00", old_price: "$95.00" },
];

export default all_product;
