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
    "I am a blockchain development engineer with a strong curiosity about new technologies.",
  summary:
    "As a senior blockchain development engineer, I graduated with both bachelor's and master's degrees from a C9 university. I have four years of backend development experience and two years of smart contract development experience. I am proficient in Solidity, Go, C/C++, JavaScript, Python, and Lua, and have a deep understanding of smart contract development, blockchain backend development, Nginx, and the Linux kernel.",
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
      company: "PumpBTC",
      link: "https://mainnet.pumpbtc.xyz/",
      badges: [],
      title: "Senior Blockchain Development Engineer",
      logo: ParabolLogo,
      start: "2024.07",
      end: "today",
      description: (
        <>
          1) Core Backend Developer for PumpBTC: Responsible for core backend development of PumpBTC's point system, API services, and Dashboard components using Rust, PostgreSQL, and Redis. Enabled real-time point calculations for 23 blockchain networks, serving over 300,000 users and achieving a TVL exceeding $500 million.
          <br />
          <br />
          2) Security Component Developer for Bridge Cross-chain Platform: Independently developed a cross-chain bridge security monitoring platform based on Go, PostgreSQL, and Redis, specifically for monitoring Meson bridge asset transfers. The platform includes real-time tracking of multi-pool TVL, token pricing, whale activities, user withdrawals, risk control, and alert integrations with Telegram and Lark, maintaining stable operations with zero production bugs.
          <br />
          <br />
          3) Smart Contract Developer for PumpHYPE: Developed a comprehensive set of Proof-of-Stake (POS) staking contracts utilizing Solidity, OpenZeppelin, and HyperLiquid protocols. These contracts enable users to stake HYPE tokens on Hyper EVM and participate in POS staking on Hyper L1 to earn rebase rewards.
          <br />
          <br />
          4) ATTPS Cross-chain Communication Protocol SDK Developer: Independently developed an SDK for the ATTPS cross-chain communication protocol using Rust, facilitating seamless cross-chain interactions.
          <br />
          <br />
          5) Backend Developer for BTCfi Project: Solely responsible for backend development of the BTCfi project using Rust, enabling real-time calculation of TVL and APY for contract pools.
          <br />
          <br />
          6) Blockchain Research and Documentation Specialist: Conducted in-depth technical analyses of dozens of blockchain projects, including LayerZero, DODO, and Lido, independently producing over 100 detailed project documentation articles. Successfully applied insights from this research directly into active development, demonstrating exceptional research and documentation capabilities.
          <br />
          <br />
        </>
      ),
    },
    {
      company: "Bluebit",
      link: "",
      badges: [],
      title: "Senior Blockchain Development Engineer",
      logo: ParabolLogo,
      start: "2023.06",
      end: "2024.07",
      description: (
        <>
          1) Core Developer for Bluebit Exchange: Responsible for developing a
          cross-chain BTC staking and reward project based on EVM, LayerZero,
          and Go-Ethereum. The project allows users to stake BTC and earn points
          as rewards, successfully deployed across multiple blockchain networks
          and DeFi pools. Independently developed a cross-chain data monitoring
          platform based on Go-Ethereum to ensure the security of cross-chain
          interactions.
          <br />
          <br />
          2) Technical Manager for NFT Marketplace: Independently completed the
          development of an NFT marketplace, with the frontend built using
          Next.js, the backend using Go-Ethereum and MongoDB, and smart
          contracts using Solidity and Hardhat. The platform supports features
          like minting, buying, selling, lazy minting, and auctions for any NFT.
          It is currently live on Ethereum, BSC, and Polygon networks.
          <br />
          <br />
          3) Leader in Multiple Hackathon Award-Winning Projects: Led teams to
          participate in several hackathons, developing a lottery GameFi project
          using Chainlink off-chain randomness, which won an outstanding project
          award and a reward of 500 USDC.
          <br />
          <br />
          4) Passionate About Open Source: Developed and open-sourced multiple
          beginner-friendly blockchain DApp projects and actively organized
          documentation. Proficient in technologies like Solidity, Remix,
          Hardhat, OpenZeppelin, Ethers.js, Go, JavaScript, Go-Ethereum, Move,
          Rust, and LayerZero cross-chain solutions, demonstrating strong coding
          and problem-solving abilities.
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
      end: "2023.06",
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
    "Golang",
    "Rust",
    "Move",
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
      title: "PumpBTC",
      techStack: [
        "Senior Blockchain Development Engineer",
        "Solidity",
        "Contract",
        "Hardhat",
        "Rust",
        "Go",
        "PostgreSQL",
        "Redis",
      ],
      description:
        "A point system for PumpBTC, a cross-chain BTC staking and reward project based on EVM, LayerZero, and Go-Ethereum.",
      logo: ConsultlyLogo,
      link: {
        label: "https://mainnet.pumpbtc.xyz/",
        href: "https://mainnet.pumpbtc.xyz/",
      },
    },
    {
      title: "BTCFI",
      techStack: [
        "Senior Blockchain Development Engineer",
        "Solidity",
        "Contract",
        "Hardhat",
        "Rust",
        "Go",
        "PostgreSQL",
        "Redis",
      ],
      description:
        "A BTC lending fund project.",
      logo: ConsultlyLogo,
      link: {
        label: "https://app.btc-fi.ai/market",
        href: "https://app.btc-fi.ai/market",
      },
    },
    {
      title: "Bluebit-LaunchPad",
      techStack: [
        "Senior Blockchain Development Engineer",
        "Solidity",
        "Contract",
        "Hardhat",
      ],
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
      techStack: ["Side Project", "Javascript", "Vue"],
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
      techStack: ["Side Project", "Qt", "Python", "ML"],
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
