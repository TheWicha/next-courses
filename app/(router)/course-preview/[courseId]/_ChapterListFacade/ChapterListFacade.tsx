"use client";
import CoursePreview from "@/components/ui/CoursePreview/CoursePreview";
import { ChapterListFacadeProps } from "./ChapterListFacadeTypes";
import { useGQLMutation } from "@/utils/useGQLMutation";
import { enrollToCourse } from "@/utils/graphqlQueries";
import { useUser } from "@clerk/nextjs";

const ChapterListFacade: React.FC<ChapterListFacadeProps> = ({
  chapters,
  data,
}) => {
  const lessonsChapters = chapters?.chapter;
  const { user } = useUser();
  const userEmail = user?.primaryEmailAddress.emailAddress;
  const createCourseMutation = useGQLMutation(enrollToCourse);

  const handleClick = async (item) => {
    const variables = {
      courseId: item.id,
      userEmail: userEmail,
      id: chapters?.id,
    };

    const mutationData = await createCourseMutation.mutateAsync(variables);
  };

  return (
    <div className="flex flex-col gap-4 col-span-2 ">
      {lessonsChapters?.map((item, index) => (
        <div className="border rounded-lg p-4 cursor-pointer gap-2 hover:bg-violet-100 ">
          <CoursePreview
            item={item}
            index={index}
            data={data}
            handleClick={() => {
              handleClick(item);
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ChapterListFacade;
