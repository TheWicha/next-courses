import CoursePreview from "@/components/ui/CoursePreview/CoursePreview";
import { ChapterListFacadeProps } from "./ChapterListFacadeTypes";

const ChapterListFacade: React.FC<ChapterListFacadeProps> = ({
  chapters,
  data,
}) => {
  const lessonsChapters = chapters?.chapter;

  return (
    <div className="flex flex-col gap-4 col-span-2 ">
      {lessonsChapters?.map((item, index) => (
        <div className="border rounded-lg p-4 cursor-pointer gap-2 hover:bg-violet-100 ">
          <CoursePreview item={item} index={index} data={data} />
        </div>
      ))}
    </div>
  );
};

export default ChapterListFacade;

