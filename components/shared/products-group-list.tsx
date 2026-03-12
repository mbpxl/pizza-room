"use client"

import { cn } from "@/lib/utils";
import { ProductCard, Title } from ".";
import { useIntersection } from "react-use";
import React, { useEffect } from "react";

type Props = {
  title: string;
  goods: any[];
  className?: string;
  listClassName?: string;
  categoryId: number;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  goods,
  className,
  listClassName,
  categoryId,
}) => {
  const intersectionRef = React.useRef<any>(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.4,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      console.log(title, categoryId);
    }
  }, [categoryId, intersection?.isIntersecting, title])

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />

      <div className={cn("grid grid-cols-3 gap-12.5", listClassName)}>
        {goods.map((good, i) => (
          <ProductCard
            key={good.id}
            id={good.id}
            name={good.name}
            imageUrl={good.imageUrl}
            price={good.items[0].price}
          />
        ))}
      </div>
    </div>
  )
};
