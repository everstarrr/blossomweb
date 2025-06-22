interface ArticleBlockProps {
  title: string;
  content: string;
}

export const ArticleBlock = ({ title, content }: ArticleBlockProps) => {
  return (
    <div className="flex flex-col xl:gap-6 gap-4">
      <h3 className="xl:text-3xl text-2xl xl:leading-7 xl:h-7 leading-5 h-5 font-normal">{title}</h3>
      <p className="font-extralight xl:text-2xl text-lg">{content}</p>
    </div>
  );
};
