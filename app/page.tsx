import EventCard from "@/components/reusable/EventCard";
import Typography from "@/components/ui/typography";

export default function Home() {
  const evenData = [
    {
      location: "Grand Pickleball Arena, USJ",
      date: "Fri, 28 Feb 2025",
      time: "2300 hrs - 0100 hrs",
      courtNumber: "1",
      maxPeople: "8",
      link: "https://calendar.app.google/yGvUzzXTP3qLauSq8",
    },
    {
      location: "Playa Racquet Club @ TREC",
      date: "Tue, 4 Mar 2025",
      time: "2200 hrs - 0000 hrs",
      courtNumber: "1",
      maxPeople: "8",
      link: "https://calendar.app.google/r96rjD8XdHvsXzSb6",
    },
    {
      location: "P3 @ Jalan Kuchai Lama",
      date: "Fri, 14 Mar 2025",
      time: "2300 hrs - 0100 hrs",
      courtNumber: "2",
      maxPeople: "16",
      link: "https://calendar.app.google/61SZDGa6b7K3cQWm9",
    },
    // {
    //   location: "locatiopn 3",
    //   date: "Mon, 31 Jan 2025",
    //   time: "2300 hrs - 0100 hrs",
    //   courtNumber: "2",
    //   maxPeople: "2",
    //   link: "https://calendar.app.google/61SZDGa6b7K3cQWm9",
    // },
    // {
    //   location: "locatiopn 3",
    //   date: "Mon, 31 Jan 2025",
    //   time: "2300 hrs - 0100 hrs",
    //   courtNumber: "2",
    //   maxPeople: "2",
    //   link: "https://calendar.app.google/61SZDGa6b7K3cQWm9",
    // },
  ];
  return (
    <div className="flex items-center justify-center w-full ">
      <div className="w-full max-w-5xl min-h-screen px-4 lg:px-0  flex-col pt-16 pb-8">
        <>
          <Typography variant="title" className="mb-10">
            Upcoming
          </Typography>
          <div className="w-full flex md:flex-row flex-col  gap-4 md:flex-wrap flex-nowrap  md:justify-normal justify-center ">
            {evenData.map((item, index) => (
              <div key={index}>
                <EventCard
                  location={item.location}
                  date={item.date}
                  time={item.time}
                  courtNumber={item.courtNumber}
                  maxPeople={item.maxPeople}
                  link={item.link}
                />
              </div>
            ))}
          </div>
        </>
      </div>
    </div>
  );
}
