# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Product.create!(
  product_name: "Bio whole milk",
  image_url: "https://greenspoon.co.ke/wp-content/uploads/2018/06/Greenspoon-256.jpg.webp",
  description: "When it comes to milk Bio Fresh Milk have the most stringent quality standards in Kenya. 
  They source milk from farmers they know and trust and they test every batch of milk for various quality parameters.
  They also test every batch of the final product to guarantee it is up to the Bio quality. ",
  category_id: 2,
  price: 309
)
Product.create!(
  product_name: "Gelato Street Cookies & Cream Gelato - 500ml",
  image_url: "https://greenspoon.co.ke/wp-content/uploads/2021/12/COOKIES-N-CREAM-GREENSPOON-1400x933-1.png",
  description: "Our gourmet chocolate chip cookies made with award-winning Ugandan organic chocolate makes up the cookies in this creamy, lush gelato.
  Ingredients: milk, cream, sugar, dextrose, flour, skimmed milk powder, dark chocolate, eggs
  Storage Instructions: Store at -18℃
  Shelf life: 4 months",
  category_id: 2,
  price: 1800
)
Product.create!(
  product_name: "Queen Deli Societe Roquefort Cheese",
  image_url: "https://greenspoon.co.ke/wp-content/uploads/2022/08/Greenspoon-Roquefort.jpg",
  description: "Visually reminiscent of the limestone cliff sides in which it is aged, Roquefort illustrates French artisanry like few others.
   A favourite among kings and popes, this classic blue mould cheese is made from sheep’s milk and is easily recognised by its blue veins stretching across its moist and crumbly body. 
  It is creamy and aromatic, complex and intense, with sharp and tangy nuances.",
  category_id: 2,
  price: 1400
)
Product.create!(
  product_name: "Laki Laki Raspberry Greek Yoghurt",
  image_url: "https://greenspoon.co.ke/wp-content/uploads/2022/02/Greenspoon-Raspberry-Greek-Yoghurt-Laki-Laki-.jpg",
  description: " Delicious artisanal greek yoghurt from Laki Laki is not only locally made in Kenya, it is also free of additives, stabilizers or preservatives, and
   made with milk that is tested for aflatoxin levels. 
  It’s a highly nutritional product, with a 6% protein content.",
  category_id: 2,
  price: 543
)
Product.create!(
  product_name: "WHB Rib Eye on Bone",
  image_url: "https://greenspoon.co.ke/wp-content/uploads/1970/01/WHB-Rib-of-Beef-on-Bone-Frozen.jpg",
  description: "Rib of Beef on bone is an outstanding roasting joint with plenty of marbling which caramelizes during the cooking process and left on the bone to ensure maximum flavour.
   It’s cut and shape make it a stunning centre piece for a celebration or special meal.",
  category_id: 2,
  price: 4508
)
Product.create!(
  product_name: "BROOD Sourdough bread",
  image_url: "https://greenspoon.co.ke/wp-content/uploads/2017/07/Rye-50_.jpg",
  description: "Rye is a very healthy and nutritious cereal grain packed full of nutrients and health benefits. It is also rich in fiber and is available in either 50% or 100% rye.",
  category_id: 2,
  price: 378
)
Product.create!(
  product_name: "Le Grenier à Pain Raspberry and White Chocolate Cake (Order 2 days in advance)",
  image_url: "https://onlycrumbsremain.com/wp-content/uploads/2019/03/lemon-and-raspberry-layer-cake-3.jpg",
  description: "Le Grenier à Pain is a genuine French bakery chain that operates in Kenya
  Enjoy an array of fruits, flavors, colors, and textures that have been revised and redesigned to shy away from what the market offers.
  Refresh your palette… Fresh wild raspberries, vanilla sponge, lemon syrup, and white chocolate mousse.
  Allergens: Contains egg, dairy & gluten.",
  category_id: 2,
  price: 4560
)
Product.create!(
  product_name: "Voyager Estate Sauvignon Blanc Semillon",
  image_url: "https://www.designerpeople.com/wp-content/uploads/2022/02/white-color-wine-bottle.jpg",
  description: "The 2018 vintage has produced a classic expression of this quintessential Margaret River blend – showcasing a wonderful purity of fruit from our sustainably farmed coastal vineyards. 
  The wine displays vibrant citrus and tropical fruit flavours with lovely texture and complexity. A perfectly balanced wine with a long, crisp dry finish, made to drink whilst young and fresh.",
  category_id: 2,
  price: 3400
)
Product.create!(
  product_name: "Freshly Box: 4.5Kg - 5Kgs of Export Quality Vegetables",
  image_url: "https://greenspoon.co.ke/wp-content/uploads/2019/01/Greenspoon-Freshly-Box.jpg",
  description: "Our NEW seasonal box of fruit and veg comes from one of Kenya’s top exporters of fruit and vegetables
  You’ll simply receive your veggies, lovingly packed, in a sturdy cardboard box which we hope to be able to use up to 10 times.
  You’ll be getting a mixed box of seasonal vegetables and some soft fruit depending on availability.",
  category_id: 2,
  price: 1800
)
Product.create!(
  product_name: "Chayil Frozen Chicken Spring Rolls - Pack of 10 Pieces",
  image_url: "https://greenspoon.co.ke/wp-content/uploads/2022/05/Greenspoon-Par-cooked-Spring-Rolls-Chayil.jpg",
  description: "A household favorite, these spring rolls go well with a nice chutney. 
  Instructions : Keep frozen if you want to store it for another day. Otherwise just defrost and fry it. Then eat with a nice dip on hand!",
  category_id: 2,
  price: 497
)
Product.create!(
  product_name: "Naara Very Berry Granola - 500g",
  image_url: "https://delictablefoods.com/wp-content/uploads/2018/05/2-Original-Granola-web.jpg",
  description: "Naara Very Berry Granola is just the perfect go-to breakfast meal for the whole family. It’s a perfect mix of whole grain nuts and seeds but with added dried raspberries and strawberries to add that extra goodness.
  Try serving it with Greek yogurt, a few fresh berries and a drizzle of honey. 
  We’re berry excited for you to try it!",
  category_id: 2,
  price: 996
)
Product.create!(
  product_name: "Kalahari Desert Salt Chocolate 54% - 100g",
  image_url: "https://greenspoon.co.ke/wp-content/uploads/2018/06/Greenspoon-205.jpg",
  description: "A combination of dark chocolate and pure Kalahari desert salt.
  Absolute Chocolate was founded with the idea of providing Kenyans with a real artisan chocolate experience. 
  Ingredients: Cocoa Mass (54%), Cocoa Butter, Sugar, Soy Lecithin, Kalahari Desert Salt.",
  category_id: 2,
  price: 1200
)
Product.create!(
  product_name: "Sunrice Basmati Rice - 2Kg",
  image_url: "https://greenspoon.co.ke/wp-content/uploads/2019/01/Greenspoon-Basmati-Rice-Sunrice.jpg.webp",
  description: "Basmati remains at the heart of Sunrice. Basmati literally translated means “Queen of Fragrance” due to its unique aroma. 
  It is a unique rice that is sown and specially nurtured by the Himalayan waters. It is ideal for making pilaus, biryanis and for special occasions.",
  category_id: 2,
  price: 702
)
Product.create!(
  product_name: "Sweet Banana - Bunch ",
  image_url: "https://greenspoon.co.ke/wp-content/uploads/2021/11/Greenspoon-Kwik-Basket-Sweet-Banana.jpg",
  description: "Lady Fingers have a lovely sweet flavour and should be eaten when you see small dark brown spots start to appear on the skin.
   As this variety of banana ripens, the starch in the fruit turns to sugar giving the skin the brown marks and turning the fruit into a sweet eating sensation.",
  category_id: 2,
  price: 187
)
Product.create!(
  product_name: "Kentaste Coconut Milk - 400ml",
  image_url: "https://greenspoon.co.ke/wp-content/uploads/1970/01/Greenspoon-71.jpg.webp",
  description: "100% Kenyan Coconut Milk sourced from the Kenyan coast. This milk is cholesterol and trans fat free, has no flavouring or colouring. It is rich, smooth and made from the finest Kenyan coconuts.
   Use it in your favourite sauces, desserts, drinks, curries and more!",
  category_id: 2,
  price: 279
)
Product.create!(
  product_name: "Fresh Juice - 350ml",
  image_url: "https://domf5oio6qrcr.cloudfront.net/medialibrary/8931/Smoothie-post.jpg",
  description: "100% natural fruit juice available in delicious variants. Each one of these fresh tasting flavours is healthy, nutritious and very well balanced.
  Proudly Kenyan brand made with no preservatives, additives, colourings or artificial flavours.",
  category_id: 2,
  price: 349
)
Product.create!(
  product_name: "Tropical Heat Kenyan Masala Chevda - 340g",
  image_url: "https://greenspoon.co.ke/wp-content/uploads/2022/07/Greenspoon-Kenya-Premium-Kenyan-Chevda-Tropical-Heat.jpg",
  description: "Kenya chevda is a product of cultures mingling. Its origins lie in the South Asian diaspora cuisine of East Africa. Chevdo or chivda is an Indian snack mix of puffed rice, daal(lentils), fried potatoes, nuts and spices. 
   The Kenyan version doesn’t go wild with the spices, but instead draws flavour from a great deal of crispy fried curry leaves, chilli, turmeric, citric acid, salt and sugar. ",
  category_id: 2,
  price: 478
)
Product.create!(
  product_name: "White milk bread",
  image_url: "https://assets.bonappetit.com/photos/5c62e4a3e81bbf522a9579ce/5:4/w_2815,h_2252,c_limit/milk-bread.jpg",
  description: "Bread lovers, rejoice. This gluten free bread is the real deal – with a soft, chewy open crumb and a deliciously crisp caramelised crust. Please enjoy it with some jam and a nice warm cuppa. That’s your breakfast sorted!",
  category_id: 2,
  price: 419
)
Product.create!(
  product_name: "Organic Whole Tilapia - 1Kg ",
  image_url: "https://a-z-animals.com/media/2022/03/shutterstock_275529065-e1662866096559.jpg",
  description: "Tilapia is probably the most popular freshwater fish in much of East Africa. We all know and love this fish for its tastiness, and the hefty nutritional punch that it packs.
  The fish are left to grow naturally with NO hormones and force-feeding to accelerate their growth. ",
  category_id: 2,
  price: 1300
)
Product.create!(
  product_name: "Elianto Corn Cooking Oil - 3L",
  image_url: "https://www.bidcoafrica.com/wp-content/uploads/2018/07/eliantoProduct.png",
  description: "Popularly known for its fine quality. The icing on the cake is that it’s made from locally grown, handpicked corn. The 100% pure corn oil is healthy and can be used for various types of cooking.
   East Africa’s prized, pure and premium corn oil is winterized—it does not solidify in cold weather.",
  category_id: 2,
  price: 1876
)
Product.create!(
  product_name: "Winnie's Pure Health Atta Mark 1 - 2kg",
  image_url: "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/47/600721/1.jpg?1873",
  description: "Winnie’s Pure Health Atta Mark 1 Flour is Whole Grain Wheat Flour with no chemicals, additives, or preservatives!",
  category_id: 2,
  price: 307
)







Product.create!(
  product_name: "Renew Nourishing Cleanser",
  image_url: "https://cdn.shopify.com/s/files/1/0087/9021/2659/products/PRODUCTPHOTOTEMPLATES.psd_86_770x.jpg?v=1650004296",
  description: "Gently remove dirt and impurities without stripping your skin with this nourishing hypoallergenic cleanser. An abundance of antioxidants and aloe vera leave your skin feeling soft, clean and refreshed making this cleanser ideal for aging or dry skin.
   Naturally scented with grapefruit, lavender, vetiver and jasmine.",
  category_id: 5,
  price: 4900
)

Product.create!(
  product_name: "Rejuvenating Overnight Facial Mask",
  image_url: "https://cdn.shopify.com/s/files/1/0087/9021/2659/products/NOT-OFM_ecomm_770x.jpg?v=1632264707",
  description: "Awake to a complexion more vibrant, healthy and radiant than the night before. This lightweight mask is designed to be applied before bed to allow its ingredients to penetrate more effectively overnight. ",
  category_id: 5,
  price: 9460
)

Product.create!(
  product_name: "Quinoa Water Foundation",
  image_url: "https://cdn.shopify.com/s/files/1/0087/9021/2659/products/adc7657dd6a342969b3082ee9a748662_770x.jpg?v=1594062594",
  description: "Give skin the look of ethereal refinement in a feather-light formula with Ere Perez Quinoa Water Foundation.
   More than a simple cover-up, this blend is designed to reduce the appearance of redness and inflammation with quinoa water and blackcurrant.",
  category_id: 5,
  price: 3900
)

Product.create!(
  product_name: "Cinnabar Green Soaps (100g)",
  image_url: "https://greenspoon.co.ke/wp-content/uploads/2020/08/Greenspoon-Kenya-Lavender-and-Citrus-Soap-Cinnabar-Green.jpg.webp",
  description: "All our soaps are handmade in small batches to maintain authenticity and the human touch in every bar. The ingredients are sourced locally, and the oils, waxes, butters as well as essential oils and hydrosols are plant-derived and natural.
   They are not tested on animals, are chemical-fragrance free with no preservative. The ingredients are sourced from eco-friendly suppliers and manufacturers,
   do not contain palm and the soap is totally biodegradable.",
  category_id: 5,
  price: 235
)

Product.create!(
  product_name: "Eco Smiles Kids' Toothbrush",
  image_url: "https://greenspoon.co.ke/wp-content/uploads/2022/09/Greenspoon-Eco-Smiles-Bamboo-Toothbrush-Kids.jpg",
  description: "Encouraging good oral hygiene is important at an early stage. You can do this and still reduce plastic use in the household by getting your little humans a kids toothbrush.
     It obviously looks like a regular toothbrush but is smaller so it can fit better in their cute little hands.
     And it comes with softer bristles so they can get used to brushing without feeling uncomfortable.",
  category_id: 5,
  price: 349
)

Product.create!(
  product_name: "Vaaji Organic Tampons Life 16 Regular",
  image_url: "https://greenspoon.co.ke/wp-content/uploads/2022/06/Greenspoon-7752.jpg.webp",
  description: "Made of 100% organic cotton, our super absorbent core is free of fragrances and dyes; and designed to work. It expands to fit your body for maximum leak-proof protection.
   Our BPA-free plastic applicator has a pull and click design that allows for easy application",
  category_id: 5,
  price: 880
)

Product.create!(
  product_name: "Vagus Nerve Bath Oil",
  image_url: "https://cdn.shopify.com/s/files/1/0087/9021/2659/products/Oseavagusnervebathoil_770x.jpg?v=1664574656",
  description: "Soak away signs of stress and leave the day behind. This soothing bath oil helps promote a sense of serenity. Soften and moisturize your skin with this one-of-a- kind bath experience.",
  category_id: 5,
  price: 5200
)

Product.create!(
  product_name: "Femelle Cotton Buds 200S",
  image_url: "https://www.goodlife.co.ke/wp-content/uploads/2021/09/FEMELLE-COTTON-BUDS-100S-scaled-1.jpg",
  description: "The femelle cotton buds are comprised of a small stick with a cotton-wool tip used for cleaning the ears, applying make-up. ",
  category_id: 5,
  price: 297
)

# Product.create!(
#   product_name: "",
#   image_url: "",
#   description: "",
#   category_id: 
#   price:
# )

# Product.create!(
#   product_name: "",
#   image_url: "",
#   description: "",
#   category_id: ,
#   price:
# )

# Product.create!(
#   product_name: "",
#   image_url: "",
#   description: "",
#   category_id: 
#   price:
# )

# Product.create!(
#   product_name: "",
#   image_url: "",
#   description: "",
#   category_id: 
#   price:
# )

# Product.create!(
#   product_name: "",
#   image_url: "",
#   description: "",
#   category_id: 
#   price:
# )

# Product.create!(
#   product_name: "",
#   image_url: "",
#   description: "",
#   category_id: 
#   price:
# )

# Product.create!(
#   product_name: "",
#   image_url: "",
#   description: "",
#   category_id: 
#   price:
# )

# Product.create!(
#   product_name: "",
#   image_url: "",
#   description: "",
#   category_id: 
#   price:
# )

# Product.create!(
#   product_name: "",
#   image_url: "",
#   description: "",
#   category_id: 
#   price:
# )

# Product.create!(
#   product_name: "",
#   image_url: "",
#   description: "",
#   category_id: 
#   price:
# )

# Product.create!(
#   product_name: "",
#   image_url: "",
#   description: "",
#   category_id: 
#   price:
# )

# Product.create!(
#   product_name: "",
#   image_url: "",
#   description: "",
#   category_id: 
#   price:
# )

# Product.create!(
#   product_name: "",
#   image_url: "",
#   description: "",
#   category_id: 
#   price:
# )