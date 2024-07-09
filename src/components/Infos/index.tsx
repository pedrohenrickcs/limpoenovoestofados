import Check from "@/assets/icons/check";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key } from "react";

const Infos = ({ data }: any) => {
  return ( 
    <div className="container py-6 flex justify-center text-secondary-text-color">
      <div className="w-1/3">
        <h2 className="text-4xl font-semibold py-4 relative">
          {data?.benefits?.titleLeft}
          <span className="w-14 h-1 absolute bg-primary-bg-color bottom-0 left-0"></span>
        </h2>
        <p className="pt-4">{data?.benefits?.description}</p>
      </div>

      <div className="w-1/3">
        <h2 className="text-4xl font-semibold py-4 relative">
          {data?.benefits?.titleRight}
          <span className="w-14 h-1 absolute bg-primary-bg-color bottom-0 left-0"></span>
        </h2>
        <div className="pt-4 bg-secondary-bg-color rounded-3xl p-8 mt-4 text-primary-text-color">
          <ul>
            {data?.benefits?.items.map((item: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined, i: Key | null | undefined) => (
              <li className="py-3 flex" key={i}>
                <Check />
                <span className="ml-2">{item}</span>
              </li>
            ))}
            <li className="py-3 flex text-lg">
              Você, sua casa e sua família merecem esse conforto!
            </li>
          </ul>
        </div>
      </div>
    </div>
   );
}
 
export default Infos;