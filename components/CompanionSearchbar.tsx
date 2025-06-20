"use client";

import { useState } from "react";
import CompanionFilter from "./CompanionFilter";
import SearchInput from "./SearchInput";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { FiX } from "react-icons/fi";

const CompanionSearchBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [activeTopic, setActiveTopic] = useState(searchParams.get("topic") || "");
  const [activeSubject, setActiveSubject] = useState(searchParams.get("subject") || "");

  const updateQueryParams = (paramKey: string, value?: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(paramKey, value);
    } else {
      params.delete(paramKey);
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleClearTopic = () => {
    setActiveTopic("");
    updateQueryParams("topic");
  };

  const handleClearSubject = () => {
    setActiveSubject("");
    updateQueryParams("subject");
  };

  const handleClearAll = () => {
    setActiveTopic("");
    setActiveSubject("");
    const params = new URLSearchParams(searchParams.toString());
    params.delete("topic");
    params.delete("subject");
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className='flex items-center gap-4 flex-wrap'>
      {/* Active Filter Tags */}
      <div className="flex gap-2 flex-wrap">
        {activeTopic && (
          <div className='flex items-center bg-blue-200 border border-gray-300 px-3 py-1 rounded-full text-sm text-gray-700'>
            <span>{activeTopic}</span>
            <button onClick={handleClearTopic} className='ml-2 hover:text-red-500'>
              <FiX className='w-4 h-4' />
            </button>
          </div>
        )}
        {activeSubject && (
          <div className='flex items-center bg-green-200 border border-gray-300 px-3 py-1 rounded-full text-sm text-gray-700'>
            <span>{activeSubject}</span>
            <button onClick={handleClearSubject} className='ml-2 hover:text-red-500'>
              <FiX className='w-4 h-4' />
            </button>
          </div>
        )}
        {(activeTopic || activeSubject) && (
          <button
            onClick={handleClearAll}
            className='text-sm text-gray-600 hover:text-red-600 underline'
          >
            Clear All
          </button>
        )}
      </div>

      {/* Filter + Search */}
      <SearchInput
        activeQuery={activeTopic}
        setActiveQuery={(value) => {
          setActiveTopic(value);
          updateQueryParams("topic", value);
        }}
        onClear={handleClearTopic}
      />
      <CompanionFilter
        onChange={(value) => {
          setActiveSubject(value);
          updateQueryParams("subject", value);
        }}
      />
    </div>
  );
};

export default CompanionSearchBar;
