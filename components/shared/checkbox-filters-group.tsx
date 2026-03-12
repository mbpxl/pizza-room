"use client"

import { useState } from "react";
import { Input } from "../ui";
import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox";

type Item = FilterChecboxProps;

type Props = {
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  defaultValue?: string[];
  className?: string;
}

export const CheckBoxFitersGroup: React.FC<Props> = (
  {
    title,
    items,
    defaultItems,
    limit = 5,
    searchInputPlaceholder = 'Поиск...',
    className,
    onChange,
    defaultValue,
  }
) => {
  const [showAll, setShowAll] = useState<boolean>(false);

  const [searchValue, setSearchValue] = useState<string>("");
  const onSearchChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target?.value);
  }

  const visibleItems = showAll ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase())) : defaultItems?.slice(0, limit);


  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>

      {showAll && <div className="mb-5">
        <Input onChange={onSearchChangeInput} placeholder={searchInputPlaceholder} className="bg-gray-50 border-none" />
      </div>}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {visibleItems.map((item, index) => (
          <FilterCheckbox
            onCheckedChange={() => console.log(index)}
            checked={false}
            key={String(item.value)}
            value={item.value}
            text={item.text}
            endAdornment={item.endAdornment}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
          <button onClick={() => setShowAll(!showAll)} className="text-primary mt-3">
            {showAll ? "Скрыть" : "Показать ещё"}
          </button>
        </div>
      )}
    </div>
  )
}