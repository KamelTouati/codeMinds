
const AnnouncementComponent = ({
  prof_image,
  prof_name,
  description,
  title,
  date,
}:any) => {
  return (
    <div className="bg-[#F8FBFF] flex justify-between items-center p-4 rounded-xl border border-gray-200">
      <div className="flex gap-4">
        <div>
          <img className="w-[100px]" src={prof_image} alt="" />
        </div>
        <div className="flex flex-col">
          <div className="flex gap-4 items-center">
            <h1 className="text-3xl font-bold">{prof_name}</h1>
            <h1 className="text-sm font-normal">{date}</h1>
          </div>
          <span className="font-normal">{description}</span>
          <div className="flex justify-between bg-gray-300 rounded-lg p-4 my-2">
            <h1 className="font-semibold">{title}</h1>
            <div className="flex gap-2 items">
              <img className="w-[20px]" src="/images/pdf.svg" alt="" />
              PV-S1.pdf
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Announcement = () => {
  const announcements = [
    {
      prof_image: "/images/image.png",
      prof_name: "Azzouaou Faical",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ullam rerum sequi quo praesentium vero vitae quod laudantium deleniti! Voluptatem culpa esse distinctio natus aliquid dolorem aperiam, blanditiis autem quia!",
      title: "Law interne",
      date: "15/12/2023",
    },
    {
      prof_image: "/images/image.png",
      prof_name: "Azzouaou Faical",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ullam rerum sequi quo praesentium vero vitae quod laudantium deleniti! Voluptatem culpa esse distinctio natus aliquid dolorem aperiam, blanditiis autem quia!",
      title: "Law interne",
      date: "15/12/2023",
    },
    {
      prof_image: "/images/image.png",
      prof_name: "Azzouaou Faical",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ullam rerum sequi quo praesentium vero vitae quod laudantium deleniti! Voluptatem culpa esse distinctio natus aliquid dolorem aperiam, blanditiis autem quia!",
      title: "Law interne",
      date: "15/12/2023",
    },
    {
      prof_image: "/images/image.png",
      prof_name: "Azzouaou Faical",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ullam rerum sequi quo praesentium vero vitae quod laudantium deleniti! Voluptatem culpa esse distinctio natus aliquid dolorem aperiam, blanditiis autem quia!",
      title: "Law interne",
      date: "15/12/2023",
    },
  ];
  return (
    <>
      <div className="p-4 ">
        <div className="flex flex-col">
          <div>
            <h1 className="text-xl font-semibold my-4">Announcements</h1>
          </div>
          <div className="flex flex-col gap-4">
            {announcements.map((item, index) => (
              <AnnouncementComponent
                key={index}
                prof_image={item.prof_image}
                prof_name={item.prof_name}
                description={item.description}
                title={item.title}
                date={item.date}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

/* eslint-disable no-empty-pattern */


interface IProps {}
const AnnouncementPage = ({}: IProps) => {
  return (
  <Announcement />
  );
};
export default AnnouncementPage;
