import { Container, Filters, Title, TopBar } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-9">
        <Title text={"Все пиццы"} size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-15">
          {/* фильтрация */}
          <div className="w-62.5">
            <Filters />
          </div>

          {/* товары */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {/* <ProductGroupList title="Пиццы" items={[1, 2, 3, 4, 5]} />
              <ProductGroupList title="Комбо" items={[1, 2, 3, 4, 5]} /> */}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
