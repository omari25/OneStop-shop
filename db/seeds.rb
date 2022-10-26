# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

# Examples:

#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])

#   Character.create(name: "Luke", movie: movies.firs

#   Character.create(name: "Luke", movie: movies.first)
User.create( first_name: "Omar", last_name: "Mahat", email: "j@mail.com", phone_number: 23456789, password: "1234567", password_confirmation: "1234567")


Category.create!(name: "Electronics")
Category.create!(name: "Food stuffs")
Category.create!(name: "Fashion")
Category.create!(name: "Books")
Category.create!(name: "Health and Beauty")
Category.create!(name: "Phones and tablets")
Category.create!(name: "Sporting goods")
Category.create!(name: "Baby products")


Product.create!(product_name: "ActiveMQ in Action", image_url: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/snyder.jpg", description: "ActiveMQ is implemented in Java, but it supports client applications written in many other programming languages including C/C++, .NET, Ruby, Perl, PHP, Python, and more. It can be integrated with other open source frameworks including Tomcat, ServiceMix, JBoss, and can easily bridge to other JMS providers.", price: 546, category_id: 4)
Product.create!(product_name: "Implementing PeopleSoft Financials", image_url: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/stephens.jpg", description: "Implementing PeopleSoft Financials discusses the issues that arise and the pitfalls to avoid. Every member of the implementation team--from entry-level accounting clerk through MIS staff to executive sponsors--will benefit from reading this book.", price: 324, category_id: 4)
Product.create!(product_name: "SQL Server DMVs in Action", image_url: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/stirk.jpg", description: "SQL Server DMVs in Action shows you how to obtain, interpret, and act on the information captured by DMVs to keep your system in top shape. The over 100 code examples help you master DMVs and give you an instantly reusable SQL library. You'll also learn to use Dynamic Management Functions (DMFs), which provide further details that enable you to improve your system's performance and health.", price: 334, category_id: 4)
Product.create!(product_name: "JMX in Action", image_url: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sullins.jpg", description: "With Java Management Extensions (JMX), you can configure, manage and monitor your Java applications at run-time, as well as break your applications into components that can be swapped out. JMX provides a window into an application's state and its behavior, and a protocol-independent way of altering both state and behavior. It lets you expose portions of your application in just a few lines of code.", price: 820, category_id: 4)
Product.create!(product_name: "EJB Cookbook", image_url: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sullins2.jpg", description: "\"This book provides a great reference for the average EJB developer. It provides recipes for most common tasks that an EJB developer would need.\" -- Computing Reviews, Nov. 2003", price: 678, category_id: 4)
Product.create!(product_name: "JUnit in Action, Second Edition", image_url: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/tahchiev.jpg", description: "JUnit in Action, Second Edition is an up-to-date guide to unit testing Java applications (including Java EE applications) using the JUnit framework and its extensions. This book provides techniques for solving real-world problems such as testing AJAX applications, using mocks to achieve testing isolation, in-container testing for Java EE and database applications, and test automation.", price: 567, category_id: 4)
Product.create!(product_name: "Bitter Java", image_url: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/tate.jpg", description: "This book is a systematic account of common server-side Java programming mistakes, their causes and solutions. It covers antipatterns for base Java and J2EE concepts such as Servlets, JSPs, EJBs, enterprise connection models, and scalability. If you are an intermediate Java programmer, analyst or architect eager to avoid the bitter experiences of others, this book is for you.", price: 569, category_id: 4)
Product.create!(product_name: "Bitter EJB", image_url: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/tate2.jpg", description: "\"The book's informal tone offers a refreshing change from the ubiquitous preachiness of other EJB tomes. It's pragmatic and doesn't tap dance around the fact that EJBs are often used incorrectly in enterprise development... it's an effective way to avoid the potholes that have forced developers off track in the past.\" -- Software Development Magazine", price: 765, category_id: 4)
Product.create!(product_name: "JDK 1.4 Tutorial", image_url: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/travis.jpg", description: "Java is a success. It is now used across the programming landscape, from embedded devices to enterprise-class distributed systems. As Java's use increases, the pressure grows for it to expand to meet the diverse needs of the developer communities. The latest edition of Java, JDK 1.4 (or J2SE 1.4), includes new features like a new I/O system, a persistent preferences framework, Java Web Start, and Java regular expressions.    This book lets experienced developers as well as novices learn JDK 1.4's new features quickly. It provides a clear exposition of the important new topics with plenty of well documented code. All the examples are substantial and solve real-world problems but aren't cluttered with unnecessary details. The new features are covered in a comprehensive and matter-of-fact way without digressions into philosophy or theory. After reading this book, a developer will be able to use Java's new features with confidence and skill.", price: 345, category_id: 4)
Product.create!(product_name: "iPhone and iPad in Action", image_url: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/trebitowski.jpg", description: "This hands-on tutorial will help you master iPhone/iPad development using the native iPhone SDK. It guides you from setting up dev tools like Xcode and Interface Builder, through coding your first app, all the way to selling in the App Store.    Using many examples, the book covers core features like accelerometers, GPS, the Address Book, and much more. Along the way, you'll learn to leverage your iPhone skills to build attractive iPad apps. This is a revised and expanded edition of the original iPhone in Action.", price: 765, category_id: 4)
Product.create!(product_name: "SQL Server 2005 Reporting Services in Action", image_url: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/updegraff.jpg", description: "Reports are the lifeline of business, so a good reporting environment is a big deal. With a powerful tool like Microsoft Reporting Services, .NET developers can add reporting to any type of application, regardless of its target platform or development language. Greatly improved for SQL Server 2005, Reporting Services now provides tighter integration with SQL Server, improved developer tools, and an expanded array of options to empower end users.", price: 456, category_id: 4)
Product.create!(product_name: "Graphics Programming with Perl", image_url: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/verbruggen.jpg", description: "An increasing number of tasks in application programming and web design requires creating and manipulating graphics. Perl is a powerful and flexible language that is not commonly associated with graphics programming. The speed of developing in Perl plus the large number of freely available Perl graphics modules, make it an excellent option for the rapid development of graphics applications.    Graphics Programming with Perl is a guide to the graphics and imaging modules and tools available to the Perl programmer. It covers subjects ranging from drawing your own pictures and dynamic graphics for web pages to rendering three-dimensional scenes and manipulating individual image pixels.", price: 634, category_id: 4)
Product.create!(product_name: "XDoclet in Action", image_url: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/walls.jpg", description: "Are you tired of writing the same Java code, over and over again  XDoclet will take the burden of repetitive development tasks off your shoulders by automating them. XDoclet is a metadata-driven, code generation engine for Java. Starting from simple JavaDoc-style comments, it generates deployment descriptors, interfaces, framework classes and other utility classes your project requires.    XDoclet in Action is an easy to read introduction to XDoclet and its uses. It is a resource on code generation with this popular open source tool. With many short code examples and a full-scale J2EE example, the book shows you how to use XDoclet with EJBs, Servlets, JMX, and other technologies. You'll also learn how to customize XDoclet beyond its out-of-the-box capabilities to generate code specific to your application.", price: 342, category_id: 4)
Product.create!(product_name: "Spring in Action", image_url: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/walls2.jpg", description: "Spring in Action introduces you to the ideas behind Spring and then quickly launches into a hands-on exploration of the framework. Combining short code snippets and an ongoing example developed throughout the book, it shows you how to build simple and efficient J2EE applications. You will see how to solve persistence problems using the leading open-source tools, and also how to integrate your application with the most popular web frameworks. You will learn how to use Spring to manage the bulk of your infrastructure code so you can focus on what really matters     your critical business needs.", price: 934, category_id: 4)
Product.create!(product_name: "Spring in Action, Second Edition", image_url: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/walls3.jpg", description: "Spring is a fresh breeze blowing over the Java landscape. Based on the principles of dependency injection, interface-oriented design, and aspect-oriented programming, Spring combines enterprise application power with the simplicity of plain-old Java objects (POJOs).    In this second edition, Spring in Action has been completely updated to cover the exciting new features of Spring 2.0. The book begins by introducing you to the core concepts of Spring and then quickly launches into a hands-on exploration of the framework. Combining short code snippets and an ongoing example developed throughout the book, it shows you how to build simple and efficient J2EE applications.", price: 678, category_id: 4)
Product.create!(product_name: "SharePoint 2010 Web Parts in Action", image_url: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/wilen.jpg", description: "SharePoint 2010 Web Parts in Action is a comprehensive guide to deploying, customizing, and creating Web Parts. Countless examples walk you through everything from design, to development, deployment, troubleshooting, and upgrading. Because Web Parts are ASP.NET controls, you'll learn to use Visual Studio 2010 to extend existing Web Parts and to build custom components from scratch. ", price: 432, category_id: 4)
Product.create!(product_name: "Java Servlets by Example",image_url: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/williamson.jpg",description: "Although CGI scripts provide 80% of today's server side processing, they are slow, inefficient, and memory-hungry. A new species is evolving to take their place, one which is lean, fast, portable, and easy to maintain: Java servlets.    Servlets are not merely an alternative to CGI, for they can do much more. Servlets have opened the door to a world of client/server applications that would have been too difficult or too time-consuming to consider before.    Java Servlets: By Example takes the reader into the world of servlets, moving example by example from the simple to the complex. An early chapter explains the simple HTML form processing through servlets. A later chapter shows how to connect a Java applet to a servlet, which is itself connected to a database.",price: 674, category_id: 4)
Product.create!(product_name: "XML Programming with VB and ASP", image_url: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/wilson.jpg", description: "Here's a book that shows you when and how to use XML from both a programming and business perspective. Laden with source code, XML Programming with VB and ASP helps you build solutions that are flexible, future-proof, and self-describing. It will help you apply XML concepts between the client and the server and the server and data objects or data services.    Finally, you have everything a VB and ASP developer needs to keep up with the explosive growth of XML.", price: 329, category_id: 4)
Product.create!(product_name: "Oracle8i Database Administration", image_url: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/yuhanna.jpg", description: "Databases are growing larger, and the use of distributed databases is on the rise. Oracle8i Database Administration addresses some of the most common yet complex issues that are faced by DBAs around the world.    Oracle has the largest market share in Database Management software and is the world's second largest software company. This book is designed for for Oracle Database administrators and others who are involved in planning, programming, administration, and implementation of Oracle8 Databases.    Although this book targets intermediate and advanced database administrators, it can also be an invaluable resource to entry-level DBAs, designers and developers, project managers, system administrators, data warehousing professionals or anyone interested in Oracle.", price: 487, category_id: 4)
Product.create!(product_name: "The Engaging Web", image_url: "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/zichermann.jpg", description: "The Engaging Web: How Fun and Games Improve Your Site shows web developers how to incorporate games into websites. This book will help you decode the possibilities and provide a series of proven and tangible strategies that any web developer, producer, or product manager can use to implement games in their website. Whether you're looking to make games the centerpiece of your site, an added-value feature, or you just want to engage and excite your users, The Engaging Web will help you develop a strategy that harnesses the power of games.", price: 365, category_id: 4)



Product.create!(product_name: "Tecno Spark 8C", image_url: "https://www.unitedmobile.pk/wp-content/uploads/2022/08/Tecno-Spark-8C-Gray-Main.webp", description: "Tecno Spark 8C, an all-new entry level smartphone, running on Android 11 Go Edition. The handset has basic level features like 3GB RAM. Let's find out Spark 8 is good enough for purchase. Pros Latest Software Good Performance Massive 64GB Storage Long Battery Life . Spark 8C has a Plastic body, and the front panel is coated with Corning Gorilla Glass 3. It has a water-drop notch for the selfie camera. The back has a bump containing vertical-aligned camera setup. Fingerprint Reader is on the rear. The Spark 8 has all physical keys on the right side like the Power button and volume rockers. The left side of the phone has only a dual SIM tray while the bottom offers USB-C port and speaker grille.", price: 12000, category_id: 6)
Product.create!(product_name: "Samsung Galaxy A13", image_url: "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/27/782736/1.jpg?3155", description: "Samsung Galaxy A13 combines streamlined design aesthetics with classic colors. Refined curves make it comfortable to hold and provides easy screen navigation. Expand your view to the 6.6-inch Infinity-V Display of Galaxy A13 and see what you've been missing. Thanks to HD+ technology, your everyday content looks sharp, crisp and clear.  Similar to human eye sight, the 50MP Ultra Wide Camera sees the world with a 123-degree angle of view, adding more perspective to everything you shoot. Comes with 4GB RAM, 128GB ROM, Android 12.0 OS and is powered by a Powerful 2.0 GHz Octa-Core Processor. Order for this Samsung Galaxy A13 online from Jumia Kenya and have it delivered to your doorstep at an amazing price​", price: 12000, category_id: 6)
Product.create!(product_name: "XIAOMI Redmi 9A", image_url: "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/07/178803/1.jpg?8414", description: "The large display allows you to fully immerse yourself in the virtual world. Low blue light for a comfortable viewing experience With blue light protection certification, your eyes will be at ease even after spending long hours on your phone. Massive 5000mAh Battery With 34 days of standby-battery time, this battery provides power that lasts. The battery has a charge cycle count as high as 1000, meaning that the phone can be used daily for more than 2.5 years without any notable degradation to the battery.", price: 17200, category_id: 6)
Product.create!(product_name: "Samsung Galaxy A23", image_url: "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/84/503736/1.jpg?1607", description: "Take in more, all at once. The Samsung Galaxy A23's 6.6-inch V-Cut Display gives you room to see and do more. With FHD+ technology and a 90Hz refresh rate, the content you see every day will look smoother and sharper. An advanced octa-core processor with 4GB of RAM ensures that Galaxy A23 runs seamlessly and without a glitch no matter what you’re doing, whether that’s using multiple apps at the same time, streaming a video or gaming online. Enjoy 64GB of internal storage and add up to 1TB more with MicroSD card. Snap memorable moments in clear detail with Galaxy A23’s unique Quad Camera system including 50MP main, 5MP ultrawide, 2MP macro, 2MP depth and 8MP front selfie camera. Order for this Samsung Galaxy A23 Smartphone online from Jumia Kenya and have it delivered to your doorstep.", price: 19000,  category_id: 6)
Product.create!(product_name: "Infinix Hot 12 Play", image_url: "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/88/827656/1.jpg?2028", description: "This smartphone features a 6.82' LCD Display for uninterrupted viewing, 6000 mAh battery for hassle-free mobile computing. This smartphone is has 4GB of RAM for a smooth and uninterrupted performance. Also, the 64GB of storage space lets you store music, photos, and various other files. Packs 13 MP of AI Rear Camera and a 8 MP AI Selfie Camera with LED Flash. Order for this Infinix Hot 12 Play smartphone online from Jumia Kenya and have it delivered to your doorstep.", price: 17500, category_id: 6)
Product.create!(product_name: "Ulefone Note 6", image_url: "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/43/805335/1.jpg?6046", description: "Super lightweight and compact, Miraculous 6.1-inch HD+ waterdrop display, Note 6 runs smooth and fast based on Android 11 Go OS out of box and is Powered by powerful processor with 1GB of RAM and 32GB of internal storage that can deliver sufficient performance. Order for this Ulefone Note 6 online from Jumia Kenya and have it delivered to your doorstep.", price: 15400, category_id: 6)
Product.create!(product_name: "Tecno CAMON 18 Premier", image_url: "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/13/376884/2.jpg?5808", description: "Tecno Camon 18 Premier comes with 6.7-Inch display, 256GB internal storage, 8GB RAM, 4750mAh battery and runs on Android. Order for this Tecno Camon 18 Premier online from Jumia Kenya and have it delivered to your doorstep.", price: 14999, category_id: 6)
Product.create!(product_name: "Vivo Y15s", image_url: "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/32/279255/1.jpg?3651", description: "To ensure that you have plenty of life every day, Y15s boasts of 5000mAh battery capacity, lithium polymer with 10W fast charge. Y15s also has a 5W reverse charging capability that allows you to charge other devices inclusive of mobile power banks. Vivo Y15s also allows you to play videos on YouTube for a continuous stream time of up to 18.74 hours. Actual stream time may vary depending on specific conditions. vivo Y15s has a stable online gaming time that allows you to play PUBG with default settings for up to 7.89 hours continuously at full power. Actual game time may vary depending on specific conditions. ", price: 18299, category_id: 6)
Product.create!(product_name: "Ulefone S11", image_url: "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/71/423392/1.jpg?5345", description: "Ulefone S11 features a 6.1' display, 1GB RAM, 16GB internal storage, Triple rear camera 8 MP+2 MP+2 MP Camera, 5 MP Selfie Camera, Android 9 Pie, Quad-core 1.3 GHz processor  and 3500 mAh battery. Order for this Ulefone S11  online from Jumia Kenya and have it delivered to your doorstep.", price: 39699, category_id: 6)
Product.create!(product_name: "Nokia C1 2nd Edition", image_url: "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/90/842585/1.jpg?8101", description: "Level up to the new Nokia C1 2nd Edition. Enjoy your entertainment – anytime, anywhere – with the large screen and all-day battery life2. Raise your selfie game with the front-facing flash and 5 MP camera. Do more with Android  11 - watch your favorite videos, view your photos and even find your way home all while offline. The phone is powered by  Quad core 1.3GHz processor.  It has 1 GB RAM and 16GB internal storage. Order for this Nokia C1 2nd Edition online from Jumia Kenya and have it delivered to your doorstep", price: 7100, category_id: 6)
Product.create!(product_name: "Generic Tablet ", image_url: "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/63/744466/1.jpg?8636", description: "The battery capacity is typical of the factory la-boratory, the specific charging speed, the duration of use and other data, the actual situation will be slightly different due to the power cable, the power adapter and the ambient temperature. When the phone is completely off and automatically turned off, you must charge it for more than 10 minutes to boot. It is recommended to charge when the battery has less than 20% charge.", price: 60999, category_id: 6)
Product.create!(product_name: "Smart 2030", image_url: "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/05/319207/1.jpg?9740", description: "The Smart 2030 Kids  tablets Study learning  is a wonderful device that can be used to engage your child’s attention. This Android tablet features large, bright, and colourful icons that make it easy for a child to navigate the menu. A 7-inch touchscreen with a ten-point touch makes it easy to operate for a child. This tablet comes outfitted with a Quad-Core processor supported by 16 GB internal storage and1GB of RAM. This tablet comes equipped with Wi-Fi. Let your child develop an early understanding of computer devices through the use of this tablet.", price: 13200, category_id: 6)
Product.create!(product_name: "Samsung Galaxy Tab", image_url: "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/58/231466/1.jpg?4670", description: "When It Comes To Family, Sharing Is Caring. Bring Home A Quality Tablet  Everyone Can Easily Enjoy With Samsung Galaxy Tab A8, The Awesomely Entertaining Tablet Enhanced By The Galaxy Ecosystem Experience. Enjoy A Sleek New Design And Seamless Connectivity Between Your Galaxy Devices Answer A Phone Call On Your Tablet, Instantly Share Files With Quick Share, And So Much More. The 10.5' Lcd Screen Gives Everyone Plenty Of Room To Do Their Thing, Whether They're Learning, Watching Videos Or Catching Up On Emails. You’Ll Multitask More, Too Stream A Movie And Browse Social Media At The Same Time With Multiple Windows And Apps Open On The Same Screen. Samsung Kids Sparks Interest In Learning With A Library Of Games And Challenges That Help Your Kid Learn Good Digital Habits In A Safe Environment. All Of This  Plus An Upgraded Chipset, A Long-Lasting Battery And Up To 128Gb Of Storage  Makes Galaxy Tab A8 An Affordable Tablet That’S Perfect For Families Who Like To Share. Battery Life May Vary Depending On Network Environment, Usage Patterns And Other Factors. Shop from a Huge Collection - Enjoy Shopping Best Offers & Deals Online from Jumia Kenya - Receive at your doorstep - Fast Delivery  - Secure mode of Payment", price: 10299, category_id: 6)
Product.create!(product_name: "Alldocube Smile", image_url: "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/56/415847/1.jpg?8180", description: "ALLDOCUBE Smile 1 has a 8.0-inch IPS screen with 1280×800 resolution, wide viewing angle and beautiful high definition, providing the perfect picture. It powered Quad-core Unisoc T310 processor combined with a GPU Imagination PowerAR GE8300 that works in unison to handle all the tasks. ALLDOCUBE Smile 1 comes with 32GB ROM and 3GB RAM. You can store all your songs, videos, games, and other stuff with the utmost convenience.   It is equipped with a 5MP auto-focus camera on the rear, to take photos. And the 2MP front-facing camera for video call with friends or ZOOM meetings with colleagues.", price: 17600, category_id: 6)
Product.create!(product_name: "Generic Samsung Galaxy Tab S6", image_url: "https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/36/305922/1.jpg?9562", description: "High-quality PU Leather material very fashionable and generous. With built-in stand design, allows for comfortable and hands-free media viewing. Protect your tablet from scratches ,dust and shock for maximum protection. Provide Comfortable touch feeling While You Are Operating tablet. Exquisite craftsmanship with stylish design, perfect as gifts for your friends and families.", price: 20999, category_id: 6)
Product.create!(product_name: "Lenovo Tab M10 Tablet ", image_url: "https://www.saruk.co.ke/images/86031618485715.jpeg", description: "Surf the web and watch videos on the 10.1 Inches 1280 x 800 display of the Lenovo Tab M10 HD 32GB Tablet. This tablet is powered by a 2.0 GHz MediaTek Helio A22 Quad-Core processor, 4GB of RAM, and 64GB of eMMC storage. You can also expand the storage up to 128GB via the microSD card slot. Connect to the internet via Wi-Fi 5 (802.11ac). You can also connect peripherals and accessories via Bluetooth 5.0. There is also a micro-USB 2.0 port and a 3.5mm combo audio jack. Take selfies with the front 2MP camera and pictures with the rear 5MP camera. The installed operating system is Android 11 OS.", price: 15000, category_id: 6)
Product.create!(product_name: "Lenovo Tab M8 HD Tablet 8", image_url: "https://www.saruk.co.ke/images/72151618485727.jpeg", description: "Surf the web and watch videos on the 8 Inches 1280 x 800 display of the Lenovo 8 Tab M8 HD 32GB Tablet (2nd Gen). This tablet is powered by a 2.0 GHz MediaTek Helio A22 Quad-Core processor, 2GB of RAM, and 32GB of eMMC storage. You can also expand the storage up to 128GB via the microSD card slot. Connect to the internet via Wi-Fi 5 (802.11ac). You can also connect peripherals and accessories via Bluetooth 5.0. There is also a micro-USB 2.0 port and a 3.5mm combo audio jack. Take selfies with the front 2MP camera and pictures with the rear 5MP camera. The installed operating system is Android 9.0 Pie.", price: 16200, category_id: 6)
Product.create!(product_name: "Lenovo M8 TB-8505", image_url: "https://www.saruk.co.ke/images/78171664969902.jpg", description: "The Lenovo Tab M8 (2nd Gen) is an impressive little tablet. Sleek metal construction, a spectacular HD display, and a Dolby Audio™-tuned speaker, come together to bring you enjoyable entertainment with luxury appeal. And with a quad-core processor and up to 18 hours of battery life, this tablet will keep you engaged all day with your favorite apps from the Google Play Store.", price: 15999, category_id: 6)
Product.create!(product_name: "Samsung Galaxy Tab A8", image_url: "https://www.saruk.co.ke/images/23231644485029.jpeg", description: "A Screen Everyone Will Love: Whether your family is streaming or video chatting with friends, the Galaxy Tab A8 tablet brings out the best in every moment on a 10.5 LCD screen Power and Storage for All: Get the power, storage and speed your family needs with an upgraded chipset and plenty of room to keep files — up to 128GB of storage; A long-lasting battery lets you go unplugged for hours to keep the family fun going Charge Fast, Power for Hours: Go for hours on a single charge* and back to 100% with the fast charging USB C port; *Battery life may vary depending on network environment, usage patterns and other factors", price: 7100, category_id: 6)
Product.create!(product_name: "Samsung Galaxy Tab A7", image_url: "https://www.saruk.co.ke/images/52681647121252.jpg", description: "The  Samsung Galaxy Tab A7 32GB Tablet features a 10.4 TFT display, which features a 2000 x 1200 resolution. The quad speakers provide support for Dolby Atmos surround sound. The Galaxy Tab A7 is powered by a Qualcomm Snapdragon 662 eight-core processor, 3GB of RAM, 32GB of storage, and integrated Qualcomm Adreno 610 graphics. If you need more storage, you can expand via the microSD card slot. Stay connected with Wi-Fi and sync wireless accessories via Bluetooth. For cameras, the Galaxy Tab A7 features a 5MP rear camera and an 8MP front-facing camera. The operating system is Android 10.", price: 9299, category_id: 6)



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

Product.create!(product_name: "Samsung Tv", description: "Samsung 50BU8000 50 Crystal UHD 4K TV (2021) - Black",  price: 10000,image_url: "https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/29/198915/1.jpg?9068",category_id:1 )


Product.create!(product_name: "TCl Tv", description: "TCL 55P735 55 Smart UHD 4K With HDR Google TV Frameless  2022",  price: 90000,image_url: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/54/444608/1.jpg?0106",category_id:1 )


Product.create!(product_name: "Hisense 50 TV", description: "Hisense 50 Smart 4k Frameless 50A6HKEN",  price: 50000,image_url: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/13/679317/1.jpg?7157",category_id:1 )


Product.create!(product_name: "Royal 32 TV", description: "Royal 32 HD Ready Digital LED Television - Black",  price: 30000,image_url: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/21/217184/1.jpg?8128",category_id:1 )


Product.create!(product_name: "WEYON 818", description: "WEYON 818 3.1ch Blutooth Speaker Home Threater",  price: 10000,image_url: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/36/860375/1.jpg?5960",category_id:1 )


Product.create!(product_name: "Extension Cable", description: "Power King 6 Way Power Extension Cable, 13A, 3M Long Cable",  price: 700,image_url: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/39/498253/1.jpg?7999",category_id:1 )


Product.create!(product_name: "Dstv Decoder", description: "Dstv 6s HD Decoder + Dish Kit + 1M Compact",  price: 3000,image_url: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/28/751682/1.jpg?6777",category_id:1 )


Product.create!(product_name: "Generic HDMI Cable 1.5M", description: "HDMI (High Definition Multimedia Interface) is a specification that combines video and audio into a single digital interface for use with DVD players",  price: 300,image_url: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/14/372684/1.jpg?9900",category_id:1 )


Product.create!(product_name: "MK Fridge Guard", description: "MK Fridge Guard - Surge Protector + FREE Mobi Gift",  price: 500,image_url: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/844053/1.jpg?0406",category_id:1 )


Product.create!(product_name: "Generic 14-42 TV Flat Panel", description: "This TV Wall Mount mounts in a fixed position. Everything needed for mounting is included in the box . Mount Your TV on the wall with this strong Wall Mount Bracket.",  price:377,image_url: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/99/879423/1.jpg?8231",category_id:1 )



Product.create!(product_name: "Jbl Speaker", description: "Jbl Charge 4 Portable Bluetooth Speaker - Grey Camo",  price:20000,image_url: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/515737/1.jpg?5488",category_id:1 )


Product.create!(product_name: "Anker Speaker", description: "Anker Soundcore Flare Mini Waterproof Bluetooth Speaker",  price:21000,image_url: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/34/066834/1.jpg?2193",category_id:1 )


Product.create!(product_name: "Google CHROME CAST", description: "The devices, designed as small dongles, enable users with a mobile device or personal computer",  price:11000,image_url: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/54/834145/1.jpg?6869",category_id:1 )


Product.create!(product_name: "Vankyo Wireless Wifi Projector", description: "ADVANCED WIRELESS MINI PROJECTOR】 VANKYO Wireless Video Projectors brings accessibility, affordability and wireless freedom to you.",  price:21000,image_url: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/322376/1.jpg?0153",category_id:1 )

Product.create!(product_name: "Bluetooth-compatible Earphone Sticker", description: "Generic Solid Color Adhesive Bluetooth-compatible Earphone Sticker Decal Skin for AirPods - Fluorescent Green",  price:21000,image_url: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/57/446584/2.jpg?5706",category_id:1 )


Product.create!(product_name: "Nunix BLUETOOTH SPEAKER", description: "You definitely want to have this elegant and poised home entertainment speaker unit in your living room. Specially designed for the music lovers",  price:10000,image_url: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/17/126255/1.jpg?0668",category_id:1 )


Product.create!(product_name: "Bluetooth Earphones 2200mAh", description: "F9-5 TWS Bluetooth Earphones 2200mAh Charging Box Wireless Headphone Sports Waterproof Earbuds Headsets - Black",  price:1100,image_url: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/83/727995/1.jpg?5952",category_id:1 )


Product.create!(product_name: "Bluetooth Earphones 2200mAh", description: "F9-5 TWS Bluetooth Earphones 2200mAh Charging Box Wireless Headphone Sports Waterproof Earbuds Headsets - Black",  price:1100,image_url: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/83/727995/1.jpg?5952",category_id:1 )


Product.create!(product_name: "Wireless Headphone", description: "Ausdom Bluetooth Wireless Headphone With TF Card-Black",  price:9100,image_url: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/80/419433/1.jpg?2294",category_id:1 )


Product.create!(product_name: "Hisense 200W Sound Bar", description: "With HDMI OUT (ARC), the Hisense HS218 Sound Bar is easy to install and connect to your TVs through one single HDMI cable, and also connect wirelessly via Bluetooth, you can control both with one remote.",  price:22100,image_url: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/73/702685/1.jpg?9093",category_id:1 )


Product.create!(product_name: "Cute Rabbit Radio FM", description: "White &Green Cute Rabbit Radio FM,USB,TF-Portable",  price:2100,image_url: "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/50/286734/1.jpg?2182",category_id:1 )