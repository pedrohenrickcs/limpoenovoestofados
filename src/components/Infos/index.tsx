import Check from "@/assets/icons/check";
import Title from "../common/Title";
import Button from "../common/Button";
import { ReactElement, JSXElementConstructor, ReactNode, AwaitedReactNode, Key } from "react";

type InfosType = {
  title: string;
  description: string;
}

type ContentType = {
  itemsInfos: any;
  title: string;
  description: string;
}

type Items = {
  items: ContentType[];
}

const Infos = (items: Items) => {
  const title = items.items[0].title
  const description = items.items[0].description
  const itemsInfos = items.items[0]?.itemsInfos

  return ( 
    <div className="container py-6 flex flex-col md:flex-row justify-center md:justify-between text-secondary-text-color">
      <div className="w-full md:w-1/2">
        <Title title={title} />
        <p className="pt-4 text-base md:text-xl">{description}</p>
        <div className="hidden md:flex">
          <Button />
        </div>
      </div>
      <div className="w-full md:w-1/3 mt-4">
        <Title title="Benefícios" />
        <div className="pt-4 bg-secondary-bg-color rounded-3xl p-8 mt-4 text-primary-text-color">
          <ul>
            {itemsInfos?.map((item: InfosType) =>(
              <li className="py-3 flex" key={item.title}>
                <Check />
                <span className="ml-2">{item.title}</span>
              </li>
            ))}
            <li className="py-3 flex text-lg">
              Você, sua casa e sua família merecem esse conforto!
            </li>
          </ul>
        </div>

        <div className="flex md:hidden">
          <Button />
        </div>
      </div>
    </div>
   );
}
 
export default Infos;