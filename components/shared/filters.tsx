import { CheckBoxFitersGroup, FilterCheckbox, Title } from ".";
import { Input, Slider } from "../ui";

type Props = {
  className?: string;
};

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text={"Фильтрация"} size="sm" className="mb-5 font-bold" />
      {/* Статус */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      {/* Цена от и до */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={30000}
            defaultValue={0}
          />
          <Input type="number" placeholder="30000" min={100} max={30000} />
        </div>

        <Slider max={5000} step={10} defaultValue={[0, 5000]} />
      </div>

      {/* Ингридиенты */}
      <div className="flex flex-col gap-4">
        <CheckBoxFitersGroup
          className="mt-5"
          limit={5}
          title={"Ингредиенты"}
          items={[
            {
              text: "Сырный соус",
              value: "1",
            },
            {
              text: "Моцарелла",
              value: "2",
            },
            {
              text: "Чеснок",
              value: "3",
            },
            {
              text: "Солёные огурчики",
              value: "4",
            },
            {
              text: "Красный лук",
              value: "5",
            },
            {
              text: "Томаты",
              value: "6",
            },
          ]}
          defaultItems={[
            {
              text: "Сырный соус",
              value: "1",
            },
            {
              text: "Моцарелла",
              value: "2",
            },
            {
              text: "Чеснок",
              value: "3",
            },
            {
              text: "Солёные огурчики",
              value: "4",
            },
            {
              text: "Красный лук",
              value: "5",
            },
            {
              text: "Томаты",
              value: "6",
            },
          ]} />
      </div>

    </div>
  );
};
