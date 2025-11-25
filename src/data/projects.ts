export interface Project {
  readonly id: string;
  readonly name: string;
  readonly tools: readonly string[];
  readonly role: string;
  readonly description: string;
  readonly link: string;
}

export const projects: Project[] = [
  {
    id: "math_adventure",
    name: "Math Adventure Game",
    tools: ["React Native cli", "Play Store"],
    role: "App Creator",
    link: "https://play.google.com/store/apps/details?id=com.mathadvancer",
    description:
      "Math Adventure Game A fun and interactive mobile game built with React Native that transforms basic mathematics into an engaging adventure for children. Players embark on a journey of arithmetic mastery—covering addition, subtraction, multiplication and division—through vibrant mini-games, puzzles and level-based progression.",
  },
  {
    id: "cpukit",
    name: "Cpu Kit App",
    tools: ["React Native", "Play Store"],
    role: "App Creator",
    link: "https://play.google.com/store/apps/details?id=com.cpukit",
    description:
      "CPUKit is a utility app designed to provide users with detailed information about their Android device, such as CPU, GPU, battery, system, sensors, display, memory, and network data. This privacy policy explains how we handle data and permissions.",
  },
  {
    id: "dilkibhakti",
    name: "Dil Ki Bhakti App",
    tools: ["React Native", "Play Store"],
    role: "App Creator",
    link: "https://play.google.com/store/apps/details?id=com.dilkibhaktiapp",
    description:
      "Dil Ki Bhakti is a devotional mobile application designed to bring daily spiritual content to users, including bhajans, aarti, chalisa, and inspirational quotes. The app focuses on providing a clean, distraction-free experience for devotees seeking positivity and peace in their day-to-day lives.",
  },
  {
    id: "learnz",
    name: "Learnz Connect Web",
    tools: ["React", "Tailwind CSS", "TypeScript", "Vercel"],
    role: "Frontend Developer",
    link: "https://learnzconnect.com/",
    description:
      "Learnz Connect represents an innovative educational platform designed to foster continuous learning and knowledge sharing within a collaborative community environment. This digital learning ecosystem serves as a bridge between learners, educators, and industry professionals, creating meaningful connections that enhance the educational experience.",
  },
  {
    id: "meta-blogger",
    name: "Meta Blogger Web",
    tools: ["Mdx", "NextJS", "Tailwind CSS", "TypeScript", "Vercel"],
    role: "Frontend Developer",
    link: "https://www.metablogger.in",
    description:
      "MetaBlogger.in is your go-to platform for insightful, practical content that empowers creators, developers, and lifelong learners. With a clean and user-friendly design, the blog delivers fresh, digestible articles spanning topics such as web development, content strategy, digital tools, recipes, language learning, and cultural traditions. Whether you're exploring VS Code tips or discovering how to transfer files seamlessly between devices, MetaBlogger.in makes complex subjects accessible—so you can learn, grow, and create with confidence.",
  },
  {
    id: "travel-transport",
    name: "Travel Transport Web",
    tools: ["NextJS", "Tailwind CSS", "TypeScript", "Vercel", "Hub spot"],
    role: "Frontend Developer",
    link: "https://www.krishnatransportpackersandmovers.com",
    description:
      "Krishna Transport Packers And Movers (a unit of Singh Roadways) delivers reliable and timely commercial and household relocation services in Noida and Greater Noida. Staffed by skilled professionals, the company specializes in packing, loading, unloading, warehousing, and transportation—tailoring materials (reusable or cardboard) and handling techniques to protect every item with care, including double-quilted furniture padding Krishna Transport Packers and Movers.",
  },
  {
    id: "sahej-Health",
    name: "Sahej Health App",
    tools: ["React native", "Redux", "React native paper", "TypeScript"],
    role: "Frontend Developer",
    link: "https://apps.apple.com/in/app/sahej-health-app/id6469026236",
    description:
      "Sahej Health App is a holistic, tech-enabled companion for individuals managing Type 2 diabetes. Its evidence-backed approach blends traditional medicine, psychological insights, lifestyle interventions, and advanced monitoring to empower users toward better health outcomes",
  },
  {
    id: "dil-ki-bhakti",
    name: "Dil ki Bhakti web",
    tools: [
      "NextJs",
      "MongoDB",
      "Tailwind CSS",
      "TypeScript",
      "Vercel",
      "Hub spot",
    ],
    role: "Full Stack Developer",
    link: "https://www.dilkibhakti.in",
    description:
      "दिल की भक्ति is a heartfelt, digital devotional platform crafted to bring the essence of bhakti—daily aartis, bhajans, mantras, and spiritual quotes—into your everyday life in Hindi. Its core mission is to provide followers with accessible and authentic devotional content, available anytime and anywhere Dil ki Bhakti.",
  },
  {
    id: "learn-ReFill",
    name: "LearnReFill Web",
    tools: [
      "NextJS",
      "Redux",
      "MongoDB",
      "Tailwind CSS",
      "TypeScript",
      "Vercel",
    ],
    role: "Full Stack Developer",
    link: "https://www.learnrefill.com",
    description:
      "LearnReFill is an online education platform offering expert-led classes—from multi-subject academic tutoring to coding bootcamps—delivered directly to students via laptop, ensuring flexible and accessible learning anywhere.",
  },
  {
    id: "image-Convertor",
    name: "ImageConvertor Web",
    tools: ["NextJS", "Tailwind CSS", "TypeScript", "Vercel"],
    role: "Full Stack Developer",
    link: "https://www.imageconvertor.xyz",
    description:
      "ImageConvertor.xyz is a free, browser-based image conversion platform—offering fast, seamless, and secure tools for converting, resizing, compressing, and optimizing images. With no downloads or sign-ups required, it supports formats like JPG, PNG, WebP, BMP, TIFF, ICO, and more. Users can easily resize photos for social media or documents while maintaining high quality; compress images to reduce file size without visible loss; generate passport photos compliant with guidelines; convert images to favicon format for branding; and leverage modern formats like WebP for faster web performance. Privacy is prioritized—uploaded files are automatically deleted after processing—making it a reliable, universal solution for students, bloggers, designers, and professionals alike",
  },
  {
    id: "Wintej",
    name: "Wintej Web",
    tools: ["ReactJs", "Redux", "Material UI", "TypeScript"],
    role: "Frontend Developer",
    link: "https://www.wintej.com",
    description:
      "Wintej is a gaming app built for enthusiasts of classic games—offering a seamless and nostalgic experience where vintage titles help players achieve quick wins. It delivers fast-paced, retro-style gameplay designed to captivate both new gamers and nostalgia-driven audiences",
  },
  {
    id: "dhanu-Coin",
    name: "Dhanu Coin Web",
    tools: ["ReactJS", "Redux", "TypeScript"],
    role: "Frontend Developer",
    link: "https://dhanucoin.in",
    description:
      "Dhanu Coin is a forward-looking cryptocurrency tailored for seamless integration into everyday life, offering secure, transparent, and efficient solutions for payments and rewards. With a growing community of over 10,000 members and a strong client retention rate of 95%, it underscores its commitment to reliability and user trust. The platform envisions bridging digital assets with real-world applications, supported by utility partnerships (such as Pro EFX and upcoming ventures in diamond jewelry, cosmetics, and gaming). The brand is also anticipating the launch of “Dhanu 2.0,” signaling ongoing innovation and growth.",
  },
  {
    id: "eco-charger",
    name: "Eco Charger App",
    tools: ["React Native", "Redux", "React Native Paper", "TypeScript"],
    role: "Frontend Developer",
    link: "https://mega.nz/file/N7ZRiS6I#ovrUdYNSLZOSPnhS2zh1k-YxYX3YCujz39Tf6jgOOkc",
    description:
      "Eco Charger is a smart battery health companion that notifies you when your phone reaches 75% charge, reminding you to unplug the charger. By preventing overcharging, the app helps extend battery lifespan, improve performance, and promote eco-friendly energy use.",
  },
  {
    id: "goal-app",
    name: "Goal App",
    tools: ["React Native", "Javascript"],
    role: "Frontend Developer",
    link: "https://mega.nz/file/4iYlUCBa#1Zcoj5fT7PNJx-TZDclbNCLit0fzD5v8QrCzsmmefpY",
    description:
      "Goal App helps you set, track, and achieve your personal or professional goals with ease. Whether it’s daily habits, fitness milestones, study targets, or career objectives, the app keeps you motivated through reminders, progress tracking, and simple visualization tools—so you stay consistent and reach your goals faster.",
  },
  {
    id: "panorama-app",
    name: "Panorama App",
    tools: ["React Native", "Javascript"],
    role: "Frontend Developer",
    link: "https://mega.nz/file/QvQE2IrA#rACkZysEv7LUA426zokUW77OD6w4SKxAWsxGQChFwsU",
    description:
      "Panorama App is your all-in-one lifestyle companion—bringing together everyday tools and information in one place. From exploring baby names, recipes, and inspirational quotes to checking weather updates, plant and dog info, exercise tips, and more—it’s designed to make life simpler. The app also includes practical utilities like calculators, mortgage tools, and even a logo finder with download support. With Panorama, you get knowledge, convenience, and daily essentials all inside one app.",
  },
  {
    id: "beans-app",
    name: "Beans App",
    tools: ["React Native", "Javascript"],
    role: "Frontend Developer",
    link: "https://mega.nz/file/R6oyFYxL#bEmPbYoaZFpZjVnWMdcDMQvc1koqTDG2yMDYZPc33CI",
    description:
      "Beans App is a multi-utility lifestyle hub packed with knowledge, fun, and smart tools—all in one place. From practical calculators like mortgage and interest rate tools to everyday helpers such as a dictionary, password generator, weather updates, and air quality checks, Beans makes life easier. Explore a wide range of topics including crypto prices, bikes, cars, animals, plants, dogs, exercise, recipes, cocktails, calories burned, random images, stars, celebrities, history events, and even helicopters and railways. Plus, enjoy lighthearted content like jokes, fun facts, and inspiring quotes. Whether you’re curious, learning, or just passing time, Beans App has something for everyone.",
  },
] as const;
