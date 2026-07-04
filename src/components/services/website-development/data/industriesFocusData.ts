export type IndustryDescriptionPart =
  | string
  | {
      strong: string;
    };

export interface IndustryFocusItem {
  title: string;
  icon: string;
  description: IndustryDescriptionPart[];
}

export const industriesFocusData: IndustryFocusItem[] = [
  {
    title: "Education & E-learning",
    icon: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/67763c0e7844b40361667a58_elearning.svg",
    description: [
      "We build scalable ",
      { strong: "Learning Management Systems (LMS)" },
      " and e-learning platforms that offer interactive, customizable content and data-driven insights. Our platforms are ideal for schools, universities, and corporate training programs, providing personalized learning experiences and real-time progress tracking. Whether you're delivering courses or conducting assessments, we ensure a seamless, engaging, and effective online learning environment.",
    ],
  },
  {
    title: "Retail",
    icon: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/676e51b3315bd8d382afa74a_Artboard%201%20copy%203.svg",
    description: [
      "In the competitive retail landscape, a fast, smooth, and responsive platform is essential for customer retention and increasing sales. We specialize in building custom e-commerce websites, mobile apps, and ",
      { strong: "PWAs" },
      " (Progressive Web Apps) that integrate seamlessly with payment systems, real-time inventory management, and advanced analytics. Our solutions are designed to scale as your business grows, helping you deliver exceptional customer experiences and boost conversions.",
    ],
  },
  {
    title: "Healthcare",
    icon: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/676e53b4a386d1bd8f14c28b_Artboard%201%20copy%203.svg",
    description: [
      "Digital solutions in healthcare must adhere to strict regulations like ",
      { strong: "HIPAA" },
      " and ",
      { strong: "GDPR" },
      ". We develop secure patient portals, telemedicine apps, and healthcare management systems that streamline operations while safeguarding patient data. Our expertise ensures that your healthcare applications not only meet regulatory standards but also enhance the overall user experience for patients and providers alike.",
    ],
  },
  {
    title: "Logistics & Supply Chain",
    icon: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/67763fa6a58d8b1fa0c38bac_Supply%20chain%20-%20Logistics%20-%20transport.svg",
    description: [
      "From real-time tracking systems to warehouse management apps and route optimization software, we create custom digital platforms that provide end-to-end visibility into your supply chain operations. Our solutions improve operational efficiency, accuracy, and decision-making, enabling you to optimize logistics and streamline supply chain processes for maximum performance.",
    ],
  },
  {
    title: "Finance & Fintech",
    icon: "https://cdn.prod.website-files.com/6719ad0ceed6d5aa24a83dcf/676e53a7e23b1b933686b220_Artboard%201.svg",
    description: [
      "In finance, precision and performance are paramount. We build secure web portals and mobile banking apps that allow seamless, 24/7 access to services. Our solutions integrate payment gateways, transaction tracking, and real-time notifications, ensuring your digital banking services are reliable, secure, and scalable. We are committed to providing fintech solutions that foster trust, transparency, and financial growth.",
    ],
  },
];