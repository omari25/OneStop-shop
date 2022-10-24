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
#     User.create({first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, email: Faker::Internet.email, password: "testpassword" })
# end

    Product.create(
        product_name: "Fishing gilet 500 grey",
        price: 3,950.00,
        category_id: 7,
        description: "Our designers have developed this gilet to enable you to transport your accessories and have them to hand during your fishing trips.",
        image: "https://contents.mediadecathlon.com/p439845/k$7f4966eb1a1256318c6907257d11dcc1/fishing-gilet-500-grey.jpg?format=auto&quality=40&f=800x800"
        )
    Product.create(
        product_name: "Fitness leggings - print",
        price: 2,550.00,
        category_id: 7,
        description: "These ultra-feminine leggings offer great quality at a great price for everyone who wants to exercise in comfort and style.",
        image: "https://contents.mediadecathlon.com/p1851141/k$760d98dff9bf2980ceffe78b93bf8dfb/fitness-leggings-print.jpg?format=auto&quality=40&f=800x800"
    )
    Product.create(
        product_name: "Folding self-powered smart front flywheel cross trainer 700",
        price: 149,000.00,
        category_id: 7,
        description: "Our passionate designers have developed this cross trainer for regular use of more than 7 hours per week.",
        image: "https://contents.mediadecathlon.com/p2147607/k$02456777c8065006cc2365803289e02a/fold-down-connected-cross-trainer-el700.jpg?format=auto&quality=40&f=452x452"
    )
    Product.create(
        product_name: "Fitness leggings with phone pocket - print",
        price: 2,250.00,
        category_id: 7,
        description: "Available in a plain or a printed version, these leggings are THE go-to option for any sports activity.",
        image: "https://contents.mediadecathlon.com/p1851012/k$1cf234acb544f169a18314cfe134799f/120-women-s-fitness-cardio-training-leggings-black.jpg?format=auto&quality=40&f=452x452"
    )
    Product.create(
        product_name: "Ts 190 women's tennis shoes - turquoise",
        price: 3,250.00,
        category_id: 7,
        description: Our passionate tennis team developed these tennis shoes for beginning players to wear while training on all surfaces",
        image: "https://contents.mediadecathlon.com/p1583940/k$2486337564f22ba7efa2f426416bd17b/ts-190-women-s-tennis-shoes-turquoise.jpg?format=auto&quality=40&f=452x452"
    )
    Product.create(
        product_name: "Adult beginner mid bow fibreglass field hockey stick fh500 - red",
        price: 7,950.00,
        category_id: 7,
        description: "Designed for adults learning to play field hockey who need control and a little power (100% fibreglass)",
        image: "https://contents.mediadecathlon.com/p2057763/k$0b737496c5223785e9e91035986e3c51/adult-beginner-mid-bow-fibreglass-field-hockey-stick-fh500-red.jpg?format=auto&quality=40&f=452x452"
    )
    Product.create(
        product_name: "Discovery junior kids archery bow - red",
        price: 3,150.00,
        category_id: 7,
        description: "We designed this ambidextrous bow as an introduction to archery from age 6 at a distance between 5 & 10m with a suction cup arrowhead, making it easier to learn",
        image: "https://contents.mediadecathlon.com/p757595/k$b36acc211b1d9453078c407dd990c71c/discovery-junior-kids-archery-bow-blue.jpg?format=auto&quality=40&f=452x452"
    )
    Product.create(
        product_name: "Boxing gloves 100 - red",
        price: 2,950.00,
        category_id: 7,
        description: "Designed for boxers looking for comfortable gloves for low-intensity training while sparring or with the punching bag.",
        image: "https://contents.mediadecathlon.com/p2217572/k$c88b830de364031e9f635011c0b5a988/boxing-gloves-100-red.jpg?format=auto&quality=40&f=452x452"
    )
    Product.create(
        product_name: "Fitness durable size 3 swiss ball (75 cm) - burgundy",
        price: 3,950.00,
        category_id: 7,
        description: "We've designed this Swiss ball to help you tone your body, strengthen your back and stretch out.",
        image: "https://contents.mediadecathlon.com/p1988443/k$e0125bf2ce82c24d66590c243145c4b1/durable-fitness-gym-ball-size-3-75-cm-turquoise.jpg?format=auto&quality=40&f=452x452"
    )
    Product.create(
        product_name: "Mountain biking helmet st 500 - neon yellow",
        price: 6,150.00,
        category_id: 7,
        description: "This well-ventilated, adjustable mountain biking helmet is designed for rides lasting over 2 hours.",
        image: "https://contents.mediadecathlon.com/p2228490/k$8cafb39b59bc205082d22f1bdf11b707/mountain-bike-helmet-st-500-red.jpg?format=auto&quality=40&f=452x452"
    )
    Product.create(
        product_name: "Adult kashmir willow cricket bat kw 100 drb turquoise",
        price: 6,950.00,
        category_id: 7,
        description: "Our cricket passionate team has developed this durable mid profile bat for you to practice leather ball cricket occassionally.",
        image: "https://contents.mediadecathlon.com/p1977092/k$db1a78abb2f6b7b8fe4329415493b635/adult-kashmir-willow-cricket-bat-kw-100-drb-turquoise.jpg?format=auto&quality=40&f=452x452"
    )
    Product.create(
        product_name: "10 to 14 ball bag - black yellow",
        price: 1,550.00,
        category_id: 7,
        description: "This ball net was created to allow trainers to easily store and transport up to 14 size-5 balls.",
        image: "https://contents.mediadecathlon.com/p1299794/k$f13a8a283e2b346f21a5e2fa59870dc3/10-to-14-ball-bag-black-yellow.jpg?format=auto&quality=40&f=452x452"
    )
    Product.create(
        product_name: "Size 7 basketball r500 - black/red/blue",
        price: 1,950.00,
        category_id: 7,
        description: "Official size 7 basketball designed for playing outdoors or indoors.",
        image: "https://contents.mediadecathlon.com/p2154516/k$0bd53fae46ee5bcf0737180c004b85ed/men-s-size-7-ages-13-and-up-beginner-basketball-red.jpg?format=auto&quality=40&f=452x452"
    )
    Product.create(
        product_name: "Official size 7 basketball designed for playing outdoors or indoors.",
        price: 4,350.00,
        category_id: 7,
        description: "Our team of passionate designers created this scrum cap to give you better protection during all training sessions and matches, even for advanced level players.",
        image: "https://contents.mediadecathlon.com/p1817406/k$24e65b6f2e82f26bd7644b2f6fd1413d/500-adult-rugby-scrum-cap-blackslashgrey.jpg?format=auto&quality=40&f=452x452"
    )
    Product.create(
        product_name: "Size 5 rugby ball r500 match - blue",
        price: 3,450.00,
        category_id: 7,
        description: "This ball was designed for regular rugby training and match use.",
        image: "https://contents.mediadecathlon.com/p1833819/k$1137356a67195e569f29370930311f97/size-5-rugby-ball-r500-match-blue.jpg?format=auto&quality=40&f=452x452"
    )
    Product.create(
        product_name: "Kids'/adult size 7 basketball r100 - orange.",
        price: 1,250.00,
        category_id: 7,
        description: "Official size 7 basketball suitable for kids and adults playing basketball indoors or outdoors. Very durable.",
        image: "https://contents.mediadecathlon.com/p1914261/k$b8c46165714a1d01ff25f648a6a3a0a3/kids-slashadult-size-7-basketball-r100-orange.jpg?format=auto&quality=40&f=452x452"
    )
    