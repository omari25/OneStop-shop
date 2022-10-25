# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
AdminUser.create!(email: 'admin@example.com', password: 'password', 
password_confirmation: 'password')

# 10.times do
#     User.create({
#         first_name: Faker::Name.first_name, 
#         last_name: Faker::Name.last_name, 
#         email: Faker::Internet.email,
 
#         password: "testpassword" })
# end
    Category.create!(name: "Electronics")
    Category.create!(name: "Foods stuffs")
    Category.create!(name: "Fashion")
    Category.create!(name: "Books")
    Category.create!(name: "Health & Beauty")
    Category.create!(name: "Phones & Tablets")
    Category.create!(name: "Sporting Goods     ")
    Category.create!(name: "Baby Products")

    Product.create!(
        product_name: "Fishing gilet 500 grey",
        price: 3950,
        category_id: 7,
        description: "Our designers have developed this gilet to enable you to transport your accessories and have them to hand during your fishing trips.",
        image_url: "https://contents.mediadecathlon.com/p439845/k$7f4966eb1a1256318c6907257d11dcc1/fishing-gilet-500-grey.jpg?format=auto&quality=40&f=800x800"
        )
        Product.create!(
        product_name: "Fitness leggings - print",
        price: 2550,
        category_id: 7,
        description: "These ultra-feminine leggings offer great quality at a great price for everyone who wants to exercise in comfort and style.",
        image_url: "https://contents.mediadecathlon.com/p1851141/k$760d98dff9bf2980ceffe78b93bf8dfb/fitness-leggings-print.jpg?format=auto&quality=40&f=800x800"
    )
    Product.create!(
        product_name: "Folding self-powered smart front flywheel cross trainer 700",
        price: 149000,
        category_id: 7,
        description: "Our passionate designers have developed this cross trainer for regular use of more than 7 hours per week.",
        image_url: "https://contents.mediadecathlon.com/p2147607/k$02456777c8065006cc2365803289e02a/fold-down-connected-cross-trainer-el700.jpg?format=auto&quality=40&f=452x452"
    )
    Product.create!(
        product_name: "Fitness leggings with phone pocket - print",
        price: 2250,
        category_id: 7,
        description: "Available in a plain or a printed version, these leggings are THE go-to option for any sports activity.",
        image_url: "https://contents.mediadecathlon.com/p1851012/k$1cf234acb544f169a18314cfe134799f/120-women-s-fitness-cardio-training-leggings-black.jpg?format=auto&quality=40&f=452x452"
    )
    Product.create!(
        product_name: "Ts 190 women's tennis shoes - turquoise",
        price: 3250,
        category_id: 7,
        description: "Our passionate tennis team developed these tennis shoes for beginning players to wear while training on all surfaces",
        image_url: "https://contents.mediadecathlon.com/p1583940/k$2486337564f22ba7efa2f426416bd17b/ts-190-women-s-tennis-shoes-turquoise.jpg?format=auto&quality=40&f=452x452"
    )
    Product.create!(
        product_name: "Adult beginner mid bow fibreglass field hockey stick fh500 - red",
        price: 7950,
        category_id: 7,
        description: "Designed for adults learning to play field hockey who need control and a little power (100% fibreglass)",
        image_url: "https://contents.mediadecathlon.com/p2057763/k$0b737496c5223785e9e91035986e3c51/adult-beginner-mid-bow-fibreglass-field-hockey-stick-fh500-red.jpg?format=auto&quality=40&f=452x452"
    )
    Product.create!(
        product_name: "Discovery junior kids archery bow - red",
        price: 3150,
        category_id: 7,
        description: "We designed this ambidextrous bow as an introduction to archery from age 6 at a distance between 5 & 10m with a suction cup arrowhead, making it easier to learn",
        image_url: "https://contents.mediadecathlon.com/p757595/k$b36acc211b1d9453078c407dd990c71c/discovery-junior-kids-archery-bow-blue.jpg?format=auto&quality=40&f=452x452"
    )
    Product.create!(
        product_name: "Boxing gloves 100 - red",
        price: 2950,
        category_id: 7,
        description: "Designed for boxers looking for comfortable gloves for low-intensity training while sparring or with the punching bag.",
        image_url: "https://contents.mediadecathlon.com/p2217572/k$c88b830de364031e9f635011c0b5a988/boxing-gloves-100-red.jpg?format=auto&quality=40&f=452x452"
    )
    Product.create!(
        product_name: "Fitness durable size 3 swiss ball (75 cm) - burgundy",
        price: 3950,
        category_id: 7,
        description: "We've designed this Swiss ball to help you tone your body, strengthen your back and stretch out.",
        image_url: "https://contents.mediadecathlon.com/p1988443/k$e0125bf2ce82c24d66590c243145c4b1/durable-fitness-gym-ball-size-3-75-cm-turquoise.jpg?format=auto&quality=40&f=452x452"
    )
    Product.create!(
        product_name: "Mountain biking helmet st 500 - neon yellow",
        price: 6150,
        category_id: 7,
        description: "This well-ventilated, adjustable mountain biking helmet is designed for rides lasting over 2 hours.",
        image_url: "https://contents.mediadecathlon.com/p2228490/k$8cafb39b59bc205082d22f1bdf11b707/mountain-bike-helmet-st-500-red.jpg?format=auto&quality=40&f=452x452"
    )
    Product.create!(
        product_name: "Adult kashmir willow cricket bat kw 100 drb turquoise",
        price: 6950,
        category_id: 7,
        description: "Our cricket passionate team has developed this durable mid profile bat for you to practice leather ball cricket occassionally.",
        image_url: "https://contents.mediadecathlon.com/p1977092/k$db1a78abb2f6b7b8fe4329415493b635/adult-kashmir-willow-cricket-bat-kw-100-drb-turquoise.jpg?format=auto&quality=40&f=452x452"
    )
    Product.create!(
        product_name: "10 to 14 ball bag - black yellow",
        price: 1550,
        category_id: 7,
        description: "This ball net was created to allow trainers to easily store and transport up to 14 size-5 balls.",
        image_url: "https://contents.mediadecathlon.com/p1299794/k$f13a8a283e2b346f21a5e2fa59870dc3/10-to-14-ball-bag-black-yellow.jpg?format=auto&quality=40&f=452x452"
    )
    Product.create!(
        product_name: "Size 7 basketball r500 - black/red/blue",
        price: 1950,
        category_id: 7,
        description: "Official size 7 basketball designed for playing outdoors or indoors.",
        image_url: "https://contents.mediadecathlon.com/p2154516/k$0bd53fae46ee5bcf0737180c004b85ed/men-s-size-7-ages-13-and-up-beginner-basketball-red.jpg?format=auto&quality=40&f=452x452"
    )
    Product.create!(
        product_name: "Official size 7 basketball designed for playing outdoors or indoors.",
        price: 4350,
        category_id: 7,
        description: "Our team of passionate designers created this scrum cap to give you better protection during all training sessions and matches, even for advanced level players.",
        image_url: "https://contents.mediadecathlon.com/p1817406/k$24e65b6f2e82f26bd7644b2f6fd1413d/500-adult-rugby-scrum-cap-blackslashgrey.jpg?format=auto&quality=40&f=452x452"
    )
    Product.create!(
        product_name: "Size 5 rugby ball r500 match - blue",
        price: 3450,
        category_id: 7,
        description: "This ball was designed for regular rugby training and match use.",
        image_url: "https://contents.mediadecathlon.com/p1833819/k$1137356a67195e569f29370930311f97/size-5-rugby-ball-r500-match-blue.jpg?format=auto&quality=40&f=452x452"
    )
    Product.create!(
        product_name: "Kids'/adult size 7 basketball r100 - orange.",
        price: 1250,
        category_id: 7,
        description: "Official size 7 basketball suitable for kids and adults playing basketball indoors or outdoors. Very durable.",
        image_url: "https://contents.mediadecathlon.com/p1914261/k$b8c46165714a1d01ff25f648a6a3a0a3/kids-slashadult-size-7-basketball-r100-orange.jpg?format=auto&quality=40&f=452x452"
    )
    
    





    Product.create!(
        product_name: "Intelligent Automatic Double Electric Breast Pump",
        price: 3000,
        category_id: 8,
        description: "Automatic intelligent double electric breast pump, comfort and convenient, best for busy, on-the-go moms. It is very efficient and affordable. It also has a sleek design that makes it user friendly. The motor buttons are touch and go. Very high with both  massage and express separate buttons. It contains:2 bottles, breast shield body, silicone diaphram, cap, tubes, duckbill valve, nipple, pump motor, usb cable, nipple cover, dual connector",
        image_url: "https://cdn.shopify.com/s/files/1/0052/7967/8579/products/369_Image2_666x666.jpg?v=1665995152"
        )
        Product.create!(
        product_name: "Birthing Ball with Pump 65cm",
        price: 3150,
        category_id: 8,
        description: "Get the exercise you need as you bounce to help the baby decend while helping your posture",
        image_url: "https://cdn.shopify.com/s/files/1/0052/7967/8579/products/MotherandBabyNewProductsCreation_1_461cce9a-ea88-4315-bb68-7e41a9f93557_500x500.png?v=1666004734"
    )
    Product.create!(
        product_name: "Peri Bottle 300 ml- Portable Bidet - Blue",
        price: 3000,
        category_id: 8,
        description: "Relief for you peraneal area after child birth. Good for soothing sensitive areas. Good for Keep the perineal area clean. Reduce the risk of infection.",
        image_url: "https://cdn.shopify.com/s/files/1/0052/7967/8579/products/2_0463dc81-5f2e-4d8a-931e-6a89c5bbf2d8_869x869.png?v=1666004141"
    )
    Product.create!(
        product_name: "Foldable Baby Bath/Changing Station",
        price: 9295,
        category_id: 8,
        description: "This product offers the comfort and practicality of an elevated changing and bath station, it is designed at the proper height of parent to prevent mom’s back aches and pains from kneeling or bending when changing diapers to babies.",
        image_url: "https://cdn.shopify.com/s/files/1/0052/7967/8579/products/324_Image1_300x300.jpg?v=1665995170"
    )
    Product.create!(
        product_name: "Lamaze Classic Discovery Book",
        price: 2158,
        category_id: 8,
        description: "With eight pages of fun, the Lamaze Classic Discovery book features friendly and cute woodland characters. Full of surprises for baby to touch and feel, the book includes soft textures, bright colours, and sounds to encourage baby's exploration. This helps to develop baby's visual, fine motor and auditory skills. ",
        image_url: "https://cdn.shopify.com/s/files/1/0052/7967/8579/products/412_Image1_600x600.jpg?v=1665994980"
    )
    Product.create!(
        product_name: "Dr. Brown's Bunny Lovey with Blue One Piece Pacifier",
        price: 1889,
        category_id: 8,
        description: "Designed to keep baby's pacifiers and teethers close by. Holds any Dr. Brown's pacifiers and teethers and most other brands. Lovey's soft, multi-textured materials are great for exploring fingers. Included Dr. Brown's HappyPaci is 100% silicone with a contoured shield",
        image_url: "https://cdn.shopify.com/s/files/1/0052/7967/8579/products/234_Image1_869x869.jpg?v=1665994785"
    )
    Product.create!(
        product_name: "Dr. Brown's Flexees Friends Octopus Teether - Purple",
        price: 1085,
        category_id: 8,
        description: "Dr. Brown's Flexees Friends Fox Teether - Red. Textured for sore gums and eases pain in every area of baby's mouth like a true pal. Easy-grip and designed to aid in tongue exploration and speech development. Dishwasher (top rack) and sterilizer safe. BPA free. 3m+",
        image_url: "https://cdn.shopify.com/s/files/1/0052/7967/8579/products/244_Image1_869x869.jpg?v=1665994795"
    )
    Product.create!(
        product_name: "Ankara Diaper Bag",
        price: 3575,
        category_id: 8,
        description: "A diaper bag is one of the most important baby essentials. Once you leave the house, you will need to bring a ton of supplies like diapers, baby wipes, changing pads, baby bottles, burping cloths, pacifiers, lotions, diaper rash creams and change of clothes.",
        image_url: "https://cdn.shopify.com/s/files/1/0052/7967/8579/products/24_PriceBreak_27_869x869.jpg?v=1665994912"
    )
    Product.create!(
        product_name: "Vilac Animals Ark Shape Sorter",
        price: 5100,
        category_id: 8,
        description: "This is a wonderful wooden toy that will help your child to learn about the animals included. It will also teach them sorting and fine motor skills as they work out which animal fits into which hole. Each of the nine animals included is beautifully illustrated for better recognition. Your child will love playing and learning with this toy. ",
        image_url: "https://cdn.shopify.com/s/files/1/0605/5572/2999/products/2429-A1_resized_1800x1800.jpg?v=1645774447"
    )
    Product.create!(
        product_name: "Vilac Rainbow Activity Table",
        price: 8700,
        category_id: 8,
        description: "Rainbow Wooden Early Learning Play table, specially designed for toddlers to develop manual coordination. Multi-activity free-standing play table to discover sounds, textures and shape sorting.",
        image_url: "https://cdn.shopify.com/s/files/1/0605/5572/2999/products/2459-A2_resized_1800x1800.jpg?v=1645774466"
    )
    Product.create!(
        product_name: "Doomoo Cocoon",
        price: 13700,
        category_id: 8,
        description: "doomoo cocoon is a cosy, comfortable and safe baby nest which can be used during daytime as well as for sleeptime. It offers a made to measure space to the baby and gives him a safe feeling during the transition of Mom’s cosy belly to his own bed, the playbox, etc",
        image_url: "https://cdn.shopify.com/s/files/1/0605/5572/2999/products/doomoo_webshops_CO07_Cocoon_Classic_grey_01_resized_1800x1800.jpg?v=1645774429"
    )
    Product.create!(
        product_name: "Bear Club 5 Piece Waterproof Nappy Diaper Bag",
        price: 1470,
        category_id: 8,
        description: "Made with top of the range synthetic material, a set of this Diaper bag contains 1 big bag, 1 medium sized bag, 1 oversized thickly padded changing pad and 1 feeding bottle holder. Double-zippered top provides wide opening and easy access. The bag is user friendly with two outside bottle pouches, large envelope pocket, dirty duds bag, three inside storage compartments and clear outside pouch. Adjustable shoulder strap keeps bag from slipping. ",
        image_url: "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/35/890703/1.jpg?0365"
    )
    Product.create!(
        product_name: " Infant Baby Boys Girls Clothes Sets-Cartoon",
        price: 690,
        category_id: 8,
        description: "Make your baby the most beautiful princess that she is.",
        image_url: "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/80/511093/1.jpg?5913"
    )
    Product.create!(
        product_name: "3PCs Most Beautiful Turban Baby Girls Headband",
        price: 450,
        category_id: 8,
        description: "Make your baby the most beautiful princess that she is with the most gorgeous shinny headbands. Designed with Softest lace plus shinny stars deco. Has elastic fabric that is super comfortable on the baby's head and it stretches as the baby grows plus it designed with the softest elastic that is so gentle on her head in that it allows blood to circulate perfectly with No side effect. Your baby is going to love it and so are you. Try it and I promise it won't let you down ",
        image_url: "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/19/638354/1.jpg?9796"
    )
    Product.create!(
        product_name: "Generic Comfortable Warm With a Hood Baby Carrier - Blue .",
        price: 1299,
        category_id: 8,
        description: "It adapts itself to your needs thanks to its many carrying positions ie,off centre,on your hip etc. The sliding pouch enables you to change baby's position without disturbing him.Shoulder strap for the wearer. Reinforced head support for and height adjustable for baby. It is lined with a 3D mesh fabric optimising comfort for all seasons. Recomended for infants from birth to 12Kg.Helps position the baby in a comfortable position and at the same time provide the proper support for the baby's spine and hips this is a must have for all moms out there feel free to choose your desired colour. ",
        image_url: "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/42/406691/1.jpg?3845"
    )
    Product.create!(
        product_name: "Huggies Dry Comfort Diaper 60s Size 4",
        price: 1599,
        category_id: 8,
        description: "Enjoy Shopping Huggies Products at the best price in the kenyan market. Huggies Diapers and Wipes are made with natural ingredients and free of harmful chemicals. Learn about product features, ingredients, and diaper sizes. Shop from a Huge Collection - Enjoy Shopping Best Offers & Deals Online from Jumia Kenya - Receive at your doorstep - Fast Delivery  - Secure mode of Payment",
        image_url: "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/72/189685/1.jpg?6220"
    )