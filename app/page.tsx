import { Container, Filters, ProductCard, ProductsGroupList, Title, TopBar } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-9">
        <Title text={"Все пиццы"} size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-17">
          {/* фильтрация */}
          <div className="w-62.5">
            <Filters />
          </div>

          {/* товары */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList title={"Пиццы"} goods={[
                {
                  id: 1,
                  name: "Чизбургер-пицца",
                  imageUrl: "https://media.dodostatic.net/image/r:584x584/0199b77856ec79a986a2d582c2678fff.avif",
                  price: 500,
                  items: [{ price: 500 }]
                },
                {
                  id: 2,
                  name: "4 сыра",
                  imageUrl: "https://media.dodostatic.net/image/r:584x584/019a109fe01672189d029a725ba99705.avif",
                  price: 800,
                  items: [{ price: 800 }]
                }, {
                  id: 3,
                  name: "4 сыра",
                  imageUrl: "https://media.dodostatic.net/image/r:584x584/019a109fe01672189d029a725ba99705.avif",
                  price: 800,
                  items: [{ price: 800 }]
                },
                {
                  id: 4,
                  name: "4 сыра",
                  imageUrl: "https://media.dodostatic.net/image/r:584x584/019a109fe01672189d029a725ba99705.avif",
                  price: 800,
                  items: [{ price: 800 }]
                },
                {
                  id: 5,
                  name: "4 сыра",
                  imageUrl: "https://media.dodostatic.net/image/r:584x584/019a109fe01672189d029a725ba99705.avif",
                  price: 800,
                  items: [{ price: 800 }]
                },
              ]} categoryId={1} />
              <ProductsGroupList title={"Комбо"} goods={[
                {
                  id: 11,
                  name: "Омлет с ветчиной и грибами",
                  imageUrl: "https://media.dodostatic.net/image/r:584x584/019b12c7353b76d988cab1310b627eb4.avif",
                  price: 200,
                  items: [{ price: 200 }]
                },
              ]} categoryId={2} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
