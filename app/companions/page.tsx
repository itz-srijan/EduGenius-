import { getAllCompanions } from "@/lib/actions/companions.action";
import SearchInput from "@/components/SearchInput";
import CompanionFilter from "@/components/CompanionFilter";
import CompanionCard from "@/components/CompanionCard";
import CompanionSearchBar from "@/components/CompanionSearchbar";

const getSubjectColor = (subject: string) => {
  const firstChar = subject.charAt(0).toLowerCase();
  const colors = [
    "#FF6F61",
    "#6B5B95",
    "#88B04B",
    "#F7CAC9",
    "#92A8D1",
    "#955251",
    "#B565A7",
    "#009B77",
    "#DD4124",
    "#45B8AC",
    "#EFC050",
    "#5B5EA6",
    "#9B2335",
    "#DFCFBE",
    "#55B4B0",
    "#E15D44",
    "#7FCDCD",
    "#BC243C",
    "#C3447A",
    "#98B4D4",
    "#6C4F3D",
    "#C7BCA1",
    "#BFD641",
    "#D65076",
    "#EDEADE",
    "#2A4B7C",
  ];
  const index = (firstChar.charCodeAt(0) - 97) % colors.length;
  return colors[index >= 0 ? index : 0];
};

const CompanionsLibrary = async ({ searchParams }: SearchParams) => {
  const params = await searchParams;
  const subject = params.subject || "";
  const topic = params.topic || "";
  const page = params.page ? parseInt(params.page as string, 10) : 1;

  const companions = await getAllCompanions({ subject, topic, page });
  console.log("Companions:", companions);

  return (
    <main>
      <section className='flex justify-between gap-4 max-sm:flex-col'>
        <h1>Companion Library</h1>
        <CompanionSearchBar />
      </section>
      <section className='flex flex-wrap items-center gap-4 mt-4'>
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>
    </main>
  );
};

export default CompanionsLibrary;
