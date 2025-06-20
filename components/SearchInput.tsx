import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { cn } from "@/lib/utils";

const SearchInput = ({
  activeQuery,
  setActiveQuery,
  onClear,
}: {
  activeQuery: string;
  setActiveQuery: (val: string) => void;
  onClear?: () => void;
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("topic") || "";

  const [query, setQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const blurTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setQuery(initialQuery);
    setActiveQuery(initialQuery);
  }, [initialQuery]);

  const handleSubmit = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (query.trim()) {
      params.set("topic", query);
      setActiveQuery(query);
    } else {
      params.delete("topic");
      setActiveQuery("");
      onClear?.();
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  const handleBlur = () => {
    blurTimeoutRef.current = setTimeout(() => {
      if (!query.trim()) setIsExpanded(false);
    }, 100);
  };

  const handleFocus = () => {
    if (blurTimeoutRef.current) clearTimeout(blurTimeoutRef.current);
    setIsExpanded(true);
  };

  const handleIconClick = () => {
    if (isExpanded) {
      handleSubmit();
    } else {
      setIsExpanded(true);
      inputRef.current?.focus();
    }
  };

  return (
    <div
      className={cn(
        "relative flex items-center transition-all duration-300 py-1",
        isExpanded
          ? "border border-gray-300 rounded-full px-3 w-64"
          : "w-16 px-2 justify-center"
      )}
    >
      <input
        ref={inputRef}
        type='text'
        value={query}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        placeholder='Search topic or name...'
        className={cn(
          "bg-transparent outline-none transition-all duration-300 w-full text-sm",
          isExpanded ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      />
      <FiSearch
        onClick={handleIconClick}
        className={cn(
          "text-gray-600 cursor-pointer font-bold transition-all",
          isExpanded ? "w-6 h-6" : "w-10 h-8"
        )}
      />
    </div>
  );
};

export default SearchInput;
