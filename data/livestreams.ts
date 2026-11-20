/**
 * Recorded TechThrusters livestreams (newest first). Used by the
 * livestreams page, its structured data and /llms.txt.
 */
export type Livestream = {
  title: string;
  /** Speaker(s), as credited on the session */
  speaker: string;
  /** YouTube URL */
  url: string;
  /** Thumbnail in /public */
  image: string;
  summary: string[];
};

export const livestreams: Livestream[] = [
  {
    title: "Building Developer Communities",
    speaker: "Kevin Blanco",
    url: "https://www.youtube.com/live/629hOd60J9k?si=D6FwwRcRLf6t4AtD",
    image: "/images/events/kevin.png",
    summary: [
      "Join us for an exclusive session with Kevin Blanco, Senior DevRel Advocate at Appsmith, as he shares his incredible 10-year journey in building developer communities across the globe.",
      "In just 30 minutes, Kevin will walk us through real-world experiences, key lessons, and actionable insights on how to create, scale, and sustain thriving tech communities. Whether you're a community enthusiast, aspiring DevRel, or just curious about what it takes—this talk is for you!",
    ],
  },
  {
    title: "Integrating LLMs in Your Applications",
    speaker: "Abhijeet Ingle",
    url: "https://www.youtube.com/live/wRNQ5wFU7WQ?si=pXE3_ahfdCqB5-41",
    image: "/images/events/abhijeet.png",
    summary: [
      "An exciting virtual session with Abhijeet Ingle, Security Researcher, as he dives into Integrating LLMs in Your Applications: A Security-First Approach.",
      "AI-powered applications are the future, but are they secure? This session will uncover the potential security risks of integrating Large Language Models (LLMs) and how to mitigate them with a security-first mindset. Whether you're a developer, researcher, or security enthusiast, this is your chance to learn how to build AI-driven applications without compromising security!",
    ],
  },
  {
    title: "Transitioning to Product Management",
    speaker: "Vinod Thomas",
    url: "https://www.youtube.com/live/kIcvBf5bRyc?feature=shared",
    image: "/images/events/pm2.png",
    summary: [
      "Breaking into Product Management without prior experience can feel like an uphill battle. But what if you had a roadmap to make it happen? Join us for an insightful session with Vinod Thomas, Product Manager at Google, as he shares his journey of gaining product experience and transitioning into Product Management.",
    ],
  },
  {
    title: "Learning Open Source with Hacktoberfest",
    speaker: "Mohd Toukir Khan",
    url: "https://www.youtube.com/live/iphlaYDN3J0?si=WWbIS9l21jikFpcV",
    image: "/images/events/oshack.png",
    summary: [
      "The speaker provides practical guidance on how to get started with Hacktoberfest, beginning with registering on the official Hacktoberfest website to join the event. Once registered, participants can explore repositories on GitHub labeled with Hacktoberfest, focusing on projects that align with their interests or areas of expertise.",
      "Contributions should be meaningful, with pull requests carefully adhering to the project's contribution guidelines to ensure they are accepted. The speaker also emphasizes the importance of respectful engagement, encouraging participants to interact courteously with project maintainers and fellow contributors, as collaboration is a cornerstone of open-source development.",
    ],
  },
  {
    title: "Getting Started in Cyber Stream Security",
    speaker: "Aditya Shende",
    url: "https://www.youtube.com/live/Ol9F-mSUh9A?si=1GWg-9d34w1U7Xqd",
    image: "/images/events/wcan.png",
    summary: [
      "WCAN is an introductory guide designed for aspiring cybersecurity professionals. WCAN, which stands for Web, Cloud, API, and Network security, offers a comprehensive overview of key areas in the cybersecurity landscape. This talk organized by Club TechBrewers covers fundamental concepts, practical techniques, and essential tools needed to exploit as well as secure digital assets in these critical domains.",
      "Ideal for cybersecurity enthusiasts, it provides a solid foundation for anyone looking to embark on a career in cybersecurity and develop the skills required to attack and protect against modern cyber threats.",
    ],
  },
  {
    title: "Navigating a Career in Product Management",
    speaker: "Vik Agarwal (Product Leader at Meta)",
    url: "https://www.youtube.com/live/1J9Y3ERrP9A?si=yYikT6qdTVaCIkZz",
    image: "/images/events/productManagement.png",
    summary: [
      "Entering the world of Product Management can feel like exploring new territory, especially when you're bombarded with so many questions. Maybe you're not sure about the differences between Product and Program Management, or you're wondering how to get ready for a PM job, or any other doubts regarding Product Management in general. 💻",
      "It can all be overwhelming, but don't worry! Think of this session as your guide through the world of Product Management. We'll break things down for you in simple terms, helping you understand the ins and outs of Product Management. 🎉",
    ],
  },
  {
    title: "Getting Started with Angular",
    speaker: "Santosh Yadav (GDE Angular)",
    url: "https://www.youtube.com/live/QL6Zbnf_mi4?si=CdnSVv9pSspQRrW0",
    image: "/images/events/angular.png",
    summary: [
      "Embark on a captivating journey into the realm of Angular development with Club TechBrewers at our event Getting Started with Angular. This session unites tech enthusiasts and professionals alike to delve into the intricacies of Angular, exploring its latest features, best practices, and real-world applications. Whether you're a seasoned developer or just beginning your journey with Angular.",
      "Santosh Yadav brings over 15 years of experience in programming and application development, known for his solution-oriented approach. With expertise in managing projects from concept to completion, he's recognized as an Angular GDE and GitHub Star.",
    ],
  },
  {
    title: "Building Efficient CI/ CD Pipelines on AWS",
    speaker: "Sankalp Paranjpe",
    url: "https://www.youtube.com/live/yW87L0FzqXk?si=SBbm7qyUDzIjK4a6",
    image: "/images/events/cloud.png",
    summary: [
      "Amazon Web Services is one of the world's largest and widely used cloud services platform. With the deployment, cloud storage and automation tools it provides, learning AWS tools and technologies has always driven people toward cloud-based development. This event as the title suggests is a hands-on workshop on building a CI/CD pipeline on AWS for smooth production flow and automating the whole process.",
      "You'll gain insights about AWS cloud computing principles, DevOps, DevSecOps, auto-scaling strategies and prioritize what all constraints while deploying your application on AWS. The session is beginner-friendly too, so simply follow the workshop and implement the same.",
    ],
  },
  {
    title: "Hackathon Chats: Exploring Ideas",
    speaker: "Jatin Pandya, Chhavi Garg and Mrunank Pawar",
    url: "https://www.youtube.com/live/LazVwF18uZU?si=bQBbjwapdYVkcNlM",
    image: "/images/events/hackathonChats.png",
    summary: [
      "Hackathons have always been the perfect kind of kickstart for upskilling self in technology, networking with other tech-enthusiasts and collaborative building in a community. Jatin, Chhavi and Mrunank here shed light on hackathons from an organizer, a mentor and participant and judge's perspective. The insights provided encourage you to participate in various hackathons that are happening globally. Jatin here is himself one of the founding organizers of Hack The League.",
      "We bring to you this session consisting of Do's and Dont's to follow while being a part of a hackathon from any perspective!",
    ],
  },
  {
    title: "TechBrewers x Hacktoberfest'23",
    speaker: "Praveen Kumar Purushothaman",
    url: "https://www.youtube.com/live/ortVf_XxsoM?si=M9dFL5B5-muGZngx",
    image: "/images/events/hacktoberfest.png",
    summary: [
      "In this engaging session, Praveen provides a comprehensive guide on Getting started with Hacktoberfest, an annual celebration of open-source contributions. Tailored for both beginners and seasoned developers, the session covers essential steps for participation, including how to find beginner-friendly issues and navigate the contribution process.",
      "Whether you're new to coding or an experienced professional, this talk offers valuable insights on making meaningful contributions to open-source projects during Hacktoberfest.",
    ],
  },
  {
    title: "Elevate YOU: Personal Branding Workshop",
    speaker: "Jatin Pandya (Organizer of Hack The League)",
    url: "https://www.youtube.com/live/-r7uUwmCZzk?si=86NT48UOKGZ0ovku",
    image: "/images/events/personalBranding.png",
    summary: [
      "In this insightful session, Jatin delves into the essential strategies for building and establishing a personal brand in the technology industry. The discussion covers practical tips on defining your unique value proposition, leveraging online platforms, and creating impactful content to enhance visibility.",
      "Whether you're just starting out or looking to elevate your presence, this session offers valuable guidance on positioning yourself as a thought leader and effectively navigating the dynamic tech landscape. Perfect for professionals aiming to make a lasting impression in the tech world.",
    ],
  },
  {
    title: "Getting started with Android Development",
    speaker: "Divyansh Singh",
    url: "https://www.youtube.com/live/b6U4T6hIlJc?si=KCMnumuNGRP8zcAv",
    image: "/images/events/android.png",
    summary: [
      "Building applications is one of the interesting skills to learn where you can actually implement an idea that once riddled your mind as What if I had XYZ app for XYZ task? Oh! It would've been so convenient., ain't it?",
      "Well to channelize your curiosity about building android applications Divyansh has a hands-on workshop developing a beginner-friendly application and introducing you to some basic and essential terms and concepts to learn as you entitle yourself with android development.",
    ],
  },
  {
    title: "Introduction to UI/ UX Design",
    speaker: "Sowmiya V",
    url: "https://www.youtube.com/live/hqvOYh6h0v8?si=4lDhbuHzzp9hUlYY",
    image: "/images/events/ui-uxbig.png",
    summary: [
      "Visually appealing screens always catch your eye? Wonder if only you could learn to design one of your ideas into existence too? Join us in this insightful session where an Sowmiya delves into the art of building user interface/experience designs.",
      "The session covers essential best practices for creating intuitive and engaging UI designs, focusing on the latest trends, tools, and methodologies that ensure user-centric experiences. Whether you're a seasoned designer or just starting out, this talk provides valuable tips and strategies to elevate your design skills and create interfaces that truly resonate with users.",
    ],
  },
  {
    title: "Getting Started with Git and GitHub",
    speaker: "Mrunank Pawar",
    url: "https://www.youtube.com/live/t9X_PDOJyCI?si=NC2HWRAiQH_K6tHR",
    image: "/images/events/gitgithub.png",
    summary: [
      "In this engaging session, join us as Mrunank takes you through a hands-on introduction to Git and GitHub. Whether you're a complete beginner or looking to sharpen your skills, this workshop will guide you through the essentials of version control and collaboration.",
      "Learn the fundamentals of Git, explore the powerful features of GitHub, and get practical experience with real-world projects. Perfect for anyone eager to start their journey in software development or enhance their workflow!",
    ],
  },
  {
    title: "Fundamentals of Cyber Security",
    speaker: "Vaibhav Kadam",
    url: "https://youtu.be/3YVLJs0g7mU?si=uRSTUicQtsv-GXZP",
    image: "/images/events/vibhavrect.png",
    summary: [
      "Imagine stepping into a digital fortress, where the walls are constructed from complex codes and intricate protocols. In this enlightening session, our expert speaker unveils the crucial building blocks of cyber security, offering a comprehensive introduction to the fundamental principles that safeguard our digital world.",
      "Join us as we delve into the core concepts, strategies, and best practices essential for protecting information in an increasingly interconnected era.",
    ],
  },
];
