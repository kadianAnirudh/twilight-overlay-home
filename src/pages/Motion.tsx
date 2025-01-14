import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const cardData = {
  column1: [
    { title: "Flatfile", subtitle: "Project Management", logo: "/lovable-uploads/ca304a51-1bb4-4660-a2e5-3f2c6c91466a.png", color: "bg-[#FFF1E6]" },
    { title: "Ariana", subtitle: "We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.", image: "/placeholder.svg", color: "bg-[#2B2347]" },
    { title: "Name Cheap", subtitle: "Project Management", logo: "/placeholder.svg", color: "bg-[#FFE4E1]" },
    { title: "Jack Mark", subtitle: "We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.", image: "/placeholder.svg", color: "bg-[#FFB6C1]" },
  ],
  column2: [
    { title: "ChatGPT", subtitle: "Project Management", logo: "/placeholder.svg", color: "bg-[#00A67E]" },
    { title: "Kate", subtitle: "We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.", image: "/placeholder.svg", color: "bg-[#E6E6FA]" },
    { title: "QB", subtitle: "Project Management", logo: "/placeholder.svg", color: "bg-[#E8F5E9]" },
  ],
  column3: [
    { title: "Notion", subtitle: "Project Management", logo: "/placeholder.svg", color: "bg-[#F5F5F5]" },
    { title: "Andrew", subtitle: "We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.", image: "/placeholder.svg", color: "bg-[#2B2347]" },
    { title: "Skype", subtitle: "Project Management", logo: "/placeholder.svg", color: "bg-[#E3F2FD]" },
    { title: "Jack Mark", subtitle: "We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.", image: "/placeholder.svg", color: "bg-[#FFB6C1]" },
  ],
  column4: [
    { title: "LinkedIn", subtitle: "Project Management", logo: "/placeholder.svg", color: "bg-[#E3F2FD]" },
    { title: "Paul", subtitle: "We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.", image: "/placeholder.svg", color: "bg-[#424242]" },
    { title: "AWS", subtitle: "Project Management", logo: "/placeholder.svg", color: "bg-[#424242]" },
  ],
  column5: [
    { title: "Canva", subtitle: "Project Management", logo: "/placeholder.svg", color: "bg-[#E0F7F6]" },
    { title: "Jane Mary", subtitle: "We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.", image: "/placeholder.svg", color: "bg-[#FFB6C1]" },
    { title: "Chimp Monk", subtitle: "Project Management", logo: "/placeholder.svg", color: "bg-[#FFF9C4]" },
    { title: "Jack Mark", subtitle: "We automatically resolve 25% of customer queries across desktop and mobile using Intercom bots.", image: "/placeholder.svg", color: "bg-[#FFB6C1]" },
  ],
};

const Card = ({ data }: { data: any }) => (
  <motion.div
    className={cn("p-6 rounded-lg shadow-lg w-64 mx-4 my-2", data.color)}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex flex-col gap-2">
      <h3 className="text-lg font-semibold">{data.title}</h3>
      <p className="text-sm text-gray-600">{data.subtitle}</p>
    </div>
  </motion.div>
);

const ScrollingColumn = ({ cards, duration = 20, delay = 0 }: { cards: any[]; duration?: number; delay?: number }) => {
  return (
    <div className="relative h-[800px] overflow-hidden">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay,
        }}
        className="flex flex-col gap-4"
      >
        {/* Double the cards to create seamless loop */}
        {[...cards, ...cards].map((card, index) => (
          <Card key={index} data={card} />
        ))}
      </motion.div>
    </div>
  );
};

const Motion = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between">
          <ScrollingColumn cards={cardData.column1} duration={25} delay={0} />
          <ScrollingColumn cards={cardData.column2} duration={20} delay={1} />
          <ScrollingColumn cards={cardData.column3} duration={22} delay={2} />
          <ScrollingColumn cards={cardData.column4} duration={18} delay={3} />
          <ScrollingColumn cards={cardData.column5} duration={24} delay={4} />
        </div>
      </div>
    </div>
  );
};

export default Motion;