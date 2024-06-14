import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Jun Luo",
  initials: "BJ",
  location: "Zhenjiang, Jiangsu, China",
  locationLink: "https://www.google.com/maps/place/Zhenjiang,+Jiangsu,+China/",
  about:
    "I am a full-stack engineer with strong curiosity about new technologies.",
  summary:
    "As a full-stack engineer, I have successfully brought several products from zero to one. In previous teams, I served as both the Project Manager (PM) and Team Leader (TL) to ensure that team members could work efficiently. Currently, my main focus is on blockchain backend development, and I have a deep understanding of blockchain, Dapp development, Nginx, Linux, live streaming services, CDN, and QT. I have over two years of remote working experience.",
  avatarUrl: "https://avatars.githubusercontent.com/u/58545665?v=4",
  personalWebsiteUrl: "https://locey.fun",
  contact: {
    email: "locey5201314@gmail.com",
    tel: "+8618052813378",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/locey",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jun-luo-5004a726b/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Zhejiang University",
      degree:
        "Master's Degree in Electrical Engineering, 2018 French Summer School First Prize Scholarship, Graduate School First Class Scholarship(1/38),  Outstanding Graduate Graduate School of Zhejiang University, Third Prize for Outstanding Practical Achievements of Zhejiang University, Outstanding cadre of Zhejiang University College, Intermediate engineer title.",
      start: "2017",
      end: "2020",
    },
    {
      school: "Xi'an Jiaotong University",
      degree:
        "Bachelor's Degree in Electrical Engineering, First -class scholarship, Outstanding cadres of the college.",
      start: "2013",
      end: "2017",
    },
  ],
  work: [
    {
      company: "Roche Limit",
      link: "",
      badges: [],
      title: "TL",
      logo: ParabolLogo,
      start: "2023.08",
      end: "Today",
      description: (
        <>
          1) Core Developer for C2N Exchange: Responsible for developing a
          project crowdfunding and staking platform using Solidity,
          OpenZeppelin, and Hardhat. The platform allows users to stake tokens
          and participate in crowdfunding projects. It has successfully launched
          and supports dozens of projects.
          <br />
          <br />
          2) Technical Manager for NFT Marketplace: Independently developed an
          NFT marketplace with frontend using Next.js, ethers.js, and Wagmi,
          backend using go-ethereum and MongoDB, and smart contracts using
          Solidity, Hardhat, and Moralis. Implemented features such as listing,
          selling, delisting NFTs, and fee withdrawal.
          <br />
          <br />
          3) Lead in Multiple Hackathon Award-Winning Projects: Led teams in
          various hackathons, developed a lottery GameFi project using Chainlink
          off-chain randomness, won the outstanding project award, and received
          a reward of 500 USDC.
          <br />
          <br />
          4) Passionate Open Source Contributor: Developed and open-sourced
          multiple beginner-friendly blockchain Dapp projects, proficient in
          Solidity, Remix, Hardhat, OpenZeppelin, Ethers.js, Rust, JavaScript,
          and go-ethereum, demonstrating strong coding and problem-solving
          skills.
          <br />
          <br />
        </>
      ),
    },
    {
      company: "ZTE",
      link: "https://www.zte.com.cn/china/",
      badges: [],
      title: "PM,TL",
      logo: ParabolLogo,
      start: "2020.05",
      end: "2023.08",
      description: (
        <>
          1)Served as the Head of the Nginx Middle-End Architecture Team,
          responsible for Nginx development and troubleshooting complex issues.
          <br />
          <br />
          2)Conducted in-depth research into the Linux operating systems
          internals and TCP network congestion algorithms, enhancing the
          bandwidth acceleration feature of CDN products (resulting in over 50%
          increase in single-server bandwidth).
          <br />
          <br />
          3)Built the framework for large and medium-sized CDN products from
          scratch using Nginx+Lua mechanisms, achieving business architecture
          decoupling and middleware unification.
          <br />
          <br />
          4)Built a live streaming service for a CDN product from the ground up,
          supporting both RTMP and FLV live streaming.
          <br />
          <br />
          5)During my employment, I excelled in my role and received numerous
          prestigious accolades from various group companies, including titles
          such as Outstanding Graduate, Code Competition Geek Champion, and
          Innovation Pioneer. Additionally, I received commendations from the
          General Manager on multiple occasions.
          <br />
          <br />
          Patents:
          <br />
          <br />
          1)File Aggregation Method, File Aggregation Device, and Server
          <br />
          <br />
          2)Media File Memory Management Method, Apparatus, Computer Device, and
          Readable Medium
          <br />
          <br />
          3)A Lightweight Nginx Cache File Metadata Management Apparatus and
          Method
          <br />
          <br />
          4)A Striped Nginx Cache File Management Apparatus and Method
        </>
      ),
    },
    {
      company: "Nanjing Zhengtu Information Technology Co., Ltd.",
      link: "https://odysec.cn/",
      badges: [],
      title: "C++ Development Engineer",
      logo: ClevertechLogo,
      start: "2019.03",
      end: "2019.09",
      description: (
        <>
          1)Developed camera control software from the ground up, integrating
          sensors to enable real-time environmental monitoring and alarm
          features, with installations on over 1,000 devices.
          <br />
          <br />
          2)Proficiently acquired skills in C++, Qt, IEC 104 protocol, SQLite,
          and more during my tenure.
          <br />
          <br />
        </>
      ),
    },
  ],
  skills: [
    "Solidity",
    "Rust",
    "Dapp",
    "NFT",
    "Hardhat",
    "JavaScript",
    "React",
    "Node.js",
    "Nginx",
    "Linux",
    "Qt",
    "Machine Learning",
    "C/C++",
    "Python",
    "Lua",
    "Shell",
  ],
  projects: [
    {
      title: "C2N-LaunchPad",
      techStack: ["TL", "Solidity", "Contract", "Hardhat"],
      description:
        "A management platform for project party pledge mining and crowdfunding.",
      logo: ConsultlyLogo,
      link: {
        label: "https://c2-n-launchpad.vercel.app/",
        href: "https://c2-n-launchpad.vercel.app/",
      },
    },
    {
      title: "NFT-Marketplace",
      techStack: [
        "TL",
        "Solidity",
        "Next.js",
        "Hardhat",
        "MongoDB",
        "go-ethereum",
      ],
      description:
        "An NFT marketplace with a frontend and backend, and smart contracts, allowing users to list, sell, and delist NFTs, and withdraw fees.",
      logo: ConsultlyLogo,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "chinese-zodiac-nft",
      techStack: ["Hackathon Project", "Solidity", "ethers.js", "Hardhat"],
      description: "A zodiac NFT project based on off-chain random numbers.",
      logo: ConsultlyLogo,
      link: {
        label: "https://chinese-zodiac-nft.vercel.app/",
        href: "https://chinese-zodiac-nft.vercel.app/",
      },
    },
    {
      title: "BuyMeACoffee",
      techStack: ["Side Project", "Solidity", "ethers.js", "Hardhat"],
      description:
        "A donation sponsorship DAPP based on front-end + contract deployment of hardhat+ethers.",
      logo: ConsultlyLogo,
      link: {
        label: "https://github.com/locey/BuyMeACoffee",
        href: "https://github.com/locey/BuyMeACoffee",
      },
    },
    {
      title: "CDN",
      techStack: ["PM,TL", "Nginx", "Linux", "Lua", "TCP"],
      description:
        "Utilized Nginx to establish a CDN, thereby achieving resource acceleration for user access.",
      logo: ConsultlyLogo,
      link: {
        label: "www.zte.com.cn",
        href: "https://www.zte.com.cn/china/solutions_latest/video_service/iCDN.html",
      },
    },
    {
      title: "Pingos",
      techStack: ["PM,TL", "Nginx", "Linux", "RTMP", "FLV", "Lua"],
      description:
        "Utilized Nginx to set up live streaming services, enabling RTMP and FLV live broadcasting similar to TikTok's services.",
      logo: MonitoLogo,
      link: {
        label: "https://github.com/locey/pingos",
        href: "https://github.com/locey/pingos",
      },
    },
    {
      title: "Substation intelligent monitoring platform",
      techStack: ["Lead Frontend Developer", "Qt", "C++"],
      description:
        "A Qt-based multi-camera, multi-sensor environmental monitoring software.",
      logo: JarockiMeLogo,
      link: {
        label: "odysec.cn",
        href: "https://odysec.cn/?list_12/",
      },
    },
    {
      title: "GuQinMall",
      techStack: ["CTO", "Javascript", "Vue"],
      description:
        "A WeChat Mini Program for Guqin commerce, featuring instrument tuning and metronome functions.",
      logo: Minimal,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "Beauty",
      techStack: ["Side Project", "React", "Javascript"],
      description:
        "An app similar to TikTok that allows unlimited viewing of interesting videos.",
      logo: BarepapersLogo,
      link: {
        label: "https://github.com/locey/beauty",
        href: "https://github.com/locey/beauty",
      },
    },
    {
      title: "OptiMotor",
      techStack: ["CTO", "Qt", "Python", "ML"],
      description: "An AI-based motor model optimization software.",
      logo: YearProgressLogo,
      link: {
        label: "",
        href: "",
      },
    },
    {
      title: "AIAudio",
      techStack: ["Side Project", "Node.js", "React", "ML"],
      description: "An audio background music extraction product.",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://github.com/locey/AIAudio",
      },
    },
  ],
} as const;
