import { CiBookmark, CiClock2 } from "react-icons/ci";
import Link from "next/link";

interface CompanionCardProp {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
}
const CompanionCard = ({
  id,
  name,
  topic,
  subject,
  duration,
  color,
}: CompanionCardProp) => {
  return (
    <article className='companion-card' style={{ backgroundColor: color }}>
      <div className='flex justify-between items-center'>
        <div className='subject-badge'>{subject}</div>
        <button className='companion-bookmark'>
          <CiBookmark />
        </button>
      </div>
      <h2 className='text-2xl font-bold'>{name}</h2>
      <p className='text-sm'>{topic}</p>
      <div className='flex items-center gap-2'>
        <CiClock2 className='font-bold' />
        <p className='text-sm'>{duration} minutes</p>
      </div>
      <Link href={`/components/${id}`} className='w-full'>
        <button className='btn-primary w-full justify-center bg-black'>
          Launch Lesson
        </button>
      </Link>
    </article>
  );
};

export default CompanionCard;
