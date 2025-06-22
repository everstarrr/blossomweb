import { List } from "@/types/list";

interface ArticleListProps {
  title: string;
  list: List[];
}

export const ArticleListBlock = ({ title, list }: ArticleListProps) => {
  return (
    <div className="flex flex-col xl:gap-6 gap-4">
      <h3 className="xl:text-3xl text-2xl xl:leading-7 xl:h-7 leading-5 font-normal">{title}</h3>
      <div className="flex flex-col gap-3 font-extralight xl:text-2xl text-lg">
        {list.map((item, index) => {
          if (!!item.title)
            return (
              <div key={index} className="flex flex-col">
                {item.title}
                <ul>
                  {item.elements.map((el, index) => (
                    <li key={index}>{el}</li>
                  ))}
                </ul>
              </div>
            );
          else
            return (
              <ul key={index}>
                {item.elements.map((el, index) => (
                  <li key={index}>{el}</li>
                ))}
              </ul>
            );
        })}
      </div>
    </div>
  );
};
