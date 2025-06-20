"use client";

import { FaFilter } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, startTransition } from "react";

const CompanionFilter = ({
  onChange,
}: {
  onChange?: (value: string) => void;
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedSubject = searchParams.get("subject") || "";

  const topics = useMemo(
    () => [
      { value: "math", label: "Math" },
      { value: "science", label: "Science" },
      { value: "history", label: "History" },
      { value: "code", label: "Code" },
      { value: "english", label: "English" },
      { value: "literature", label: "Literature" },
      { value: "art", label: "Art" },
      { value: "technology", label: "Technology" },
      { value: "music", label: "Music" },
      { value: "sports", label: "Sports" },
      { value: "health", label: "Health" },
      { value: "business", label: "Business" },
      { value: "politics", label: "Politics" },
      { value: "environment", label: "Environment" },
      { value: "education", label: "Education" },
      { value: "psychology", label: "Psychology" },
      { value: "economics", label: "Economics" },
      { value: "law", label: "Law" },
      { value: "engineering", label: "Engineering" },
      { value: "astronomy", label: "Astronomy" },
      { value: "geography", label: "Geography" },
      { value: "biology", label: "Biology" },
      { value: "chemistry", label: "Chemistry" },
      { value: "physics", label: "Physics" },
      { value: "geology", label: "Geology" },
      { value: "archaeology", label: "Archaeology" },
      { value: "mythology", label: "Mythology" },
      { value: "religion", label: "Religion" },
    ],
    []
  );

  useEffect(() => {
    router.prefetch(pathname);
  }, [pathname, router]);

  const handleFilterChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("subject", value);
    } else {
      params.delete("subject");
    }

    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`);
    });

    onChange?.(value);
  };

  return (
    <div className='w-32 flex-shrink-0'>
      <Select defaultValue={selectedSubject} onValueChange={handleFilterChange}>
        <SelectTrigger className='w-full border border-gray-300 rounded-lg px-4 py-2'>
          <FaFilter className='mr-2' />
          <SelectValue placeholder='Filter' />
        </SelectTrigger>
        <SelectContent className='max-h-72 overflow-y-auto'>
          <SelectGroup>
            <SelectLabel className='text-sm text-gray-500 px-2'>
              Subjects
            </SelectLabel>
            {topics.map((topic) => (
              <SelectItem key={topic.value} value={topic.value}>
                {topic.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CompanionFilter;
