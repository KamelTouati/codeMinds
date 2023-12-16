import { useSelector } from "react-redux";
import { IAnouncement } from "../../utils/types";
import { RootState, useAppDispatch } from "../../redux/store";
import { useEffect } from "react";
import { fetchAnnouncement } from "../../redux/features/announcements.slice";

interface IProps {
  announce: IAnouncement;
}

const AnnouncementComponent = ({
  announce: { announcedby, title, message, createdAt },
}: IProps) => {
  return (
    <div className="bg-[#F8FBFF] flex justify-between items-center p-4 rounded-xl border border-gray-200">
      <div className="flex gap-4">
        <div>
          <img className="w-[100px]" src={announcedby.profileImage} alt="" />
        </div>
        <div className="flex flex-col">
          <div className="flex gap-4 items-center">
            <h1 className="text-3xl font-bold">
              {announcedby.firstName} {announcedby.lastName}
            </h1>
            <h1 className="text-sm font-normal">{createdAt}</h1>
          </div>
          <span className="font-normal">{message}</span>
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
  const { announcements, error, loading } = useSelector(
    (state: RootState) => state.announcement
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAnnouncement());
  }, [dispatch]);

  if (loading) return <h2>Loading Announcements</h2>;

  return (
    <>
      <div className="p-4 ">
        <div className="flex flex-col">
          <div>
            <h1 className="text-xl font-semibold my-4">Announcements</h1>
          </div>
          <div className="flex flex-col gap-4">
            {announcements.map((item, index) => (
              <AnnouncementComponent key={index} announce={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const AnnouncementPage = () => {
  return <Announcement />;
};
export default AnnouncementPage;
