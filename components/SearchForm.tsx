import Image from "next/image";

import { Input } from "@/components/ui/input";

const SearchForm = () => {
  return (
    <form>
      <label>
        <Image
          src="/magnifying-glass.svg"
          alt="Search Icon"
          className="absolute left-8"
          width={32}
          height={32}
        />
        <Input className="base-regular h-fit border-0 bg-black-400 py-6 pl-20 pr-8 text-white-800 !ring-0 !ring-offset-0 placeholder:text-white-800" />
      </label>
    </form>
  );
};

export default SearchForm;
