export const site = {
  name: "ArbanSpice",
  address: "1234 Main Street, Suite 100, Springfield, IL 62701, USA",
  fullAddress: ["1234 Main Street, Suite 100, Springfield, IL 62701, USA"],
  phone: "+1 00000000",
  phone2: "+1 00000001",
  email: "info@xyz.com",
  email2: "info@xyz.com",
  hours: "Mon - Sun: 9:00 AM - 11:00 PM",
};

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

export const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Our Chefs", href: "/chefs" },
      { label: "Testimonials", href: "/testimonial" },
      { label: "Book a Table", href: "/book-table" },
    ],
  },
  { label: "Our Menu", href: "/menu" },
  { label: "Gallery", href: "/gallery" },
  {
    label: "Blog",
    href: "/blog",
    children: [
      { label: "Our Blogs", href: "/blog" },
      { label: "Blog Detail", href: "/blog-details" },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

export const openingHours = [
  ["Monday", "10:00 AM – 10:00 PM"],
  ["Tuesday", "10:00 AM – 10:00 PM"],
  ["Wednesday", "10:00 AM – 10:00 PM"],
  ["Thursday", "10:00 AM – 10:00 PM"],
  ["Friday", "10:00 AM – 11:00 PM"],
  ["Saturday", "10:00 AM – 11:00 PM"],
  ["Sunday", "10:00 AM – 10:00 PM"],
] as const;

export const menuCategories = [
  { title: "Breakfast", img: "/home/menu-breakfast.jpg" },
  { title: "Appetizers", img: "/home/menu-appetizers.jpg" },
  { title: "Drinks", img: "/home/menu-drinks.jpg" },
];

export const homeChefs = [
  { name: "Rahul Mehta", role: "Executive Chef", img: "/home/chef-1.jpg" },
  { name: "Priya Sharma", role: "Pastry Chef", img: "/home/chef-2.jpg" },
  { name: "Amit Verma", role: "Sous Chef", img: "/home/chef-3.jpg" },
];

export const chefs = [
  { name: "Rahul Mehta", role: "Executive Chef", img: "/chefs/chef-1.jpg" },
  { name: "Priya Sharma", role: "Pastry Chef", img: "/chefs/chef-2.jpg" },
  { name: "Amit Verma", role: "Sous Chef", img: "/chefs/chef-3.jpg" },
  { name: "Neha Kapoor", role: "Seafood Chef", img: "/chefs/chef-4.jpg" },
  { name: "Karan Singh", role: "Grill Chef", img: "/chefs/chef-5.jpg" },
  { name: "Anjali Rao", role: "Dessert Chef", img: "/chefs/chef-6.jpg" },
  { name: "Vikram Joshi", role: "Italian Cuisine Chef", img: "/chefs/chef-7.jpg" },
  { name: "Simran Kaur", role: "Continental Chef", img: "/chefs/chef-8.jpg" },
  { name: "Rohan Malhotra", role: "Chinese Cuisine Chef", img: "/chefs/chef-9.jpg" },
];

export const gallery = Array.from({ length: 15 }, (_, i) => `/gallery/gallery-${i + 1}.jpg`);

export const testimonials = [
  {
    name: "Priya Sharma",
    city: "New Delhi, India",
    img: "/testimonial/priya.jpg",
    text: "The food was absolutely delicious! Every dish was full of flavour and beautifully presented. The ambience is perfect for a family dinner. Highly recommended!",
  },
  {
    name: "Rahul Mehta",
    city: "Mumbai, India",
    img: "/testimonial/rahul.jpg",
    text: "Amazing dining experience! The staff was very courteous and the service was excellent. The food quality and presentation were outstanding. One of the best restaurants in the city!",
  },
  {
    name: "Sneha Verma",
    city: "Bengaluru, India",
    img: "/testimonial/sneha.jpg",
    text: "A wonderful place with great food and a relaxing ambience. The flavours are authentic and the service is top notch. We had a memorable evening and will definitely visit again!",
  },
  {
    name: "Amit Kumar",
    city: "Chennai, India",
    img: "/testimonial/amit.jpg",
    text: "The seafood here is simply amazing! Fresh ingredients, perfect seasoning and a beautiful presentation. The overall experience was outstanding. Highly recommended!",
  },
  {
    name: "Neha Kapoor",
    city: "Kolkata, India",
    img: "/testimonial/neha.jpg",
    text: "From the warm welcome to the delicious food, everything was perfect. The ambience is cozy and elegant. A great place to celebrate special moments with loved ones.",
  },
  {
    name: "Karan Singh",
    city: "Pune, India",
    img: "/testimonial/karan.jpg",
    text: "Absolutely loved the food and service! Each dish was crafted with care and full of flavour. The staff made our experience even more special. Will visit again soon!",
  },
  {
    name: "Anjali Rao",
    city: "Hyderabad, India",
    img: "/testimonial/anjali.jpg",
    text: "A fantastic dining experience! The menu offers a great variety and everything we tried was delicious. The ambience and hospitality are truly impressive. Highly recommend this restaurant!",
  },
  {
    name: "Vikram Joshi",
    city: "Jaipur, India",
    img: "/testimonial/vikram.jpg",
    text: "The perfect combination of great food, beautiful ambience and excellent service. We enjoyed every moment and the desserts were outstanding. A must-visit place for food lovers!",
  },
  {
    name: "Simran Kaur",
    city: "Chandigarh, India",
    img: "/testimonial/simran.jpg",
    text: "The food, ambience and service were all exceptional. It's a wonderful place to enjoy a relaxed meal with family and friends. We had a truly memorable experience!",
  },
];

export const posts = [
  {
    date: "15 Sep 2024",
    cat: "Food & Flavour",
    title: "5 Delicious Pasta Recipes You Must Try",
    text: "Discover easy and flavourful pasta recipes that bring the taste of Italy to your table.",
    img: "/blog/pasta.jpg",
  },
  {
    date: "08 Sep 2024",
    cat: "Chef's Special",
    title: "Behind the Scenes in Our Kitchen",
    text: "Take a closer look at how our chefs create unforgettable dishes with fresh ingredients.",
    img: "/blog/kitchen.jpg",
  },
  {
    date: "03 Sep 2024",
    cat: "Drinks & Beverages",
    title: "Refreshing Summer Drinks for Every Occasion",
    text: "Beat the heat with our handpicked collection of refreshing drinks and coolers.",
    img: "/gallery/gallery-7.jpg",
  },
  {
    date: "28 Aug 2024",
    cat: "Food Tips",
    title: "How to Cook the Perfect Grilled Steak",
    text: "Follow our expert tips to get a juicy, flavourful and perfectly grilled steak.",
    img: "/blog/steak.jpg",
  },
  {
    date: "22 Aug 2024",
    cat: "Healthy Eating",
    title: "Healthy Salad Ideas for a Balanced Diet",
    text: "Try these nutritious and delicious salad recipes for a healthy and refreshing meal.",
    img: "/blog/salad.jpg",
  },
  {
    date: "18 Aug 2024",
    cat: "Dessert Recipes",
    title: "Decadent Desserts That Everyone Loves",
    text: "Indulge in our handpicked dessert recipes that are rich, delicious and easy to make.",
    img: "/gallery/gallery-6.jpg",
  },
  {
    date: "12 Aug 2024",
    cat: "Italian Cuisine",
    title: "The Secret to an Authentic Italian Pizza",
    text: "Learn the tips and techniques to make a perfect Italian pizza at home.",
    img: "/blog/pizza.jpg",
  },
  {
    date: "05 Aug 2024",
    cat: "Breakfast Ideas",
    title: "Quick & Tasty Breakfast Recipes for Busy Mornings",
    text: "Start your day right with these easy and delicious breakfast ideas.",
    img: "/blog/breakfast.jpg",
  },
  {
    date: "28 Jul 2024",
    cat: "Seafood Lovers",
    title: "Top 5 Seafood Dishes You Should Try",
    text: "Explore our chef's favourite seafood recipes that are full of flavour and freshness.",
    img: "/blog/salmon.jpg",
  },
];

export const specials = [
  { title: "Grilled Steak Platter", text: "Juicy, tender steak served with seasonal vegetables and house special sauce.", img: "/menu/special-1.jpg", icon: "plate" },
  { title: "Italian Bruschetta", text: "Crispy bread topped with fresh tomatoes, basil and a touch of olive oil.", img: "/menu/special-2.jpg", icon: "cloche" },
  { title: "Creamy Mushroom Pasta", text: "A rich and creamy pasta made with fresh mushrooms and aromatic herbs.", img: "/menu/special-3.jpg", icon: "bowl" },
  { title: "Fresh Garden Salad", text: "A perfect mix of seasonal greens, crisp vegetables and our signature dressing.", img: "/menu/special-4.jpg", icon: "leaf" },
] as const;

export type Dish = { name: string; desc: string; price: number; img?: string };

export const mainMenu: Dish[][] = [
  [
    { name: "Tender Octopus and Fennel", desc: "Citrus, wild rocket condiment.", price: 25, img: "/menu/dish-1.jpg" },
    { name: "Purple Corn Tostada", desc: "Ricotta, goat cheese, beetroot and datterini.", price: 36, img: "/menu/dish-2.jpg" },
    { name: "Bruno's Scribble", desc: "Culatello, spalla cotta, mortadella, calacciona.", price: 59, img: "/menu/dish-3.jpg" },
    { name: "Wild Mushroom Arancini", desc: "Porcini purée, parmesan, basil.", price: 18, img: "/menu/dish-4.jpg" },
    { name: "Fish & Chips", desc: "Atlantic cod fillet, chips, salad, tartare, lemon.", price: 39, img: "/menu/dish-5.jpg" },
  ],
  [
    { name: "Wild Mushroom Arancini", desc: "Citrus, wild rocket condiment.", price: 25, img: "/menu/dish-6.jpg" },
    { name: "Crispy Skin Chicken", desc: "Ricotta, goat cheese, beetroot and datterini.", price: 36, img: "/menu/dish-7.jpg" },
    { name: "Tender Octopus and Fennel", desc: "Citrus, wild rocket condiment.", price: 59, img: "/menu/dish-8.jpg" },
    { name: "Tommy's Margarita", desc: "Tequila, fresh lime juice, and orange liqueur.", price: 18, img: "/menu/dish-9.jpg" },
    { name: "Prickly Pear Tonic", desc: "Prickly pear, chartreuse, key lime, and tonic.", price: 18, img: "/menu/dish-10.jpg" },
  ],
];

export const seafood: Dish[] = [
  { name: "Tender Octopus and Fennel", desc: "Citrus, wild rocket condiment.", price: 25 },
  { name: "Purple Corn Tostada", desc: "Ricotta, goat cheese, beetroot and datterini.", price: 36 },
  { name: "Bruno's Scribble", desc: "Culatello, Spalla Cotta, Mortadella, Culacciona.", price: 59 },
  { name: "Wild Mushroom Arancini", desc: "Porcini purée, parmesan, basil.", price: 18 },
  { name: "Fish & Chips", desc: "Atlantic cod fillet, chips, salad, tartare, lemon.", price: 39 },
];

export const desserts: Dish[] = [
  { name: "Wild Mushroom Arancini", desc: "Citrus, wild rocket condiment.", price: 25 },
  { name: "Crispy Skin Chicken", desc: "Ricotta, goat cheese, beetroot and datterini.", price: 36 },
  { name: "Tender Octopus and Fennel", desc: "Citrus, wild rocket condiment.", price: 59 },
  { name: "Tommy's Margarita", desc: "Tequila, fresh lime juice, and orange liqueur", price: 18 },
  { name: "Prickly Pear Tonic", desc: "Prickly Pear, Chancaca, Key Lime, and Tonic", price: 18 },
];
