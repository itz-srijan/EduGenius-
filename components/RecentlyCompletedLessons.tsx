import {
  FaFlask,
  FaCalculator,
  FaComments,
  FaCode,
  FaScroll,
} from "react-icons/fa";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const lessons = [
  {
    icon: <FaFlask size={32} />,
    bg: "bg-purple-100",
    name: "Neura the Brainy Explorer",
    topic: "Neural Networks of the Brain",
    subject: "Science",
    duration: "45 mins",
  },
  {
    icon: <FaCalculator size={32} />,
    bg: "bg-yellow-200",
    name: "Algebrina, the Eq Queen",
    topic: "Solving Linear Equations",
    subject: "Maths",
    duration: "20 mins",
  },
  {
    icon: <FaComments size={32} />,
    bg: "bg-blue-100",
    name: "Luna, Your Grammar Guide",
    topic: "Mastering Tenses in English",
    subject: "Language",
    duration: "32 mins",
  },
  {
    icon: <FaCode size={32} />,
    bg: "bg-pink-200",
    name: "Codey, the Logic Hacker",
    topic: "Intro to If-Else Statements",
    subject: "Coding",
    duration: "30 mins",
  },
  {
    icon: <FaScroll size={32} />,
    bg: "bg-yellow-100",
    name: "Memo, the Memory Keeper",
    topic: "World Wars: Causes & Effects",
    subject: "History",
    duration: "15 mins",
  },
];

const subjectColors: Record<string, string> = {
  Science: "bg-purple-600 text-white",
  Maths: "bg-yellow-600 text-white",
  Language: "bg-blue-600 text-white",
  Coding: "bg-pink-600 text-white",
  History: "bg-amber-600 text-white",
};

const RecentlyCompletedLessons = () => (
  <section className='mb-2 rounded-3xl bg-white p-6 sm:p-8 h-full min-h-[600px] w-full shadow-lg flex flex-col border border-gray-200'>
    <h2 className='text-2xl font-bold mb-4'>Recently completed lessons</h2>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='text-lg font-bold'>Lessons</TableHead>
          <TableHead className='text-lg font-bold'>Subject</TableHead>
          <TableHead className='text-lg font-bold text-right'>
            Duration
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {lessons.map((lesson) => (
          <TableRow
            key={lesson.name}
            className='rounded-2xl hover:bg-blue-50 transition-colors'
          >
            <TableCell className='cursor-pointer'>
              <div className='flex items-center gap-4'>
                <span
                  className={`rounded-xl p-3 ${lesson.bg} flex items-center justify-center`}
                  style={{ minWidth: 48, minHeight: 48 }}
                >
                  {lesson.icon}
                </span>
                <div>
                  <div className='font-bold text-base'>{lesson.name}</div>
                  <div className='text-sm text-gray-500'>{lesson.topic}</div>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <span
                className={`rounded-full px-4 py-1 text-sm font-semibold shadow-sm ${
                  subjectColors[lesson.subject]
                }`}
                style={{
                  minWidth: 80,
                  display: "inline-block",
                  textAlign: "center",
                }}
              >
                {lesson.subject}
              </span>
            </TableCell>
            <TableCell className='text-right font-medium text-gray-700'>
              {lesson.duration}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </section>
);

export default RecentlyCompletedLessons;
