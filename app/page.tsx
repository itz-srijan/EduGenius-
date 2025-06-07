import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import Cta from "@/components/Cta";
import RecentlyCompletedLessons from "@/components/RecentlyCompletedLessons";

export default function Home() {
  const companionCardsData = [
    {
      id: "123",
      name: "Neura the Brainy",
      topic: "Neural Network of the brain",
      subject: "Science",
      duration: 45,
      color: "#ffda6e",
    },
    {
      id: "456",
      name: "Countsy the Number Wizard",
      topic: "Derivatives and Integrals",
      subject: "Maths",
      duration: 30,
      color: "#e5d0ff",
    },
    {
      id: "699",
      name: "Verba the vocabulary builder",
      topic: "Language",
      subject: "English Literature",
      duration: 30,
      color: "#bde7ff",
    },
  ];
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className='home-section'>
        {companionCardsData.map((item) => (
          <CompanionCard
            key={item.id}
            id={item.id}
            name={item.name}
            topic={item.topic}
            subject={item.subject}
            duration={item.duration}
            color={item.color}
          />
        ))}
      </section>
      <section className='home-section'>
        <RecentlyCompletedLessons />
        <Cta />
      </section>
    </main>
  );
}
