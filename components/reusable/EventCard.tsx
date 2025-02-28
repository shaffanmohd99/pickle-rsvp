"use client";
import {Button} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Typography from "@/components/ui/typography";
type EventProps = {
  location: string;
  date: string;
  time: string;
  courtNumber: string;
  maxPeople: string;
  link: string;
};

export default function EventCard({
  location,
  date,
  time,
  courtNumber,
  maxPeople,
  link,
}: EventProps) {
  return (
    <Card className="md:w-[300px] w-full min-w-full md:mb-10 mb-0 ">
      <CardHeader>
        <CardTitle>{location}</CardTitle>
        {/* <CardDescription>
                  <div>
                    <Typography variant="p">
                      Location
                    </Typography>
                  </div>
                </CardDescription> */}
      </CardHeader>
      <CardContent>
        <div className="flex gap-1">
          <Typography variant="p" className="font-bold">
            Date
          </Typography>
          <Typography variant="p">:</Typography>
          <Typography variant="p">{date}</Typography>
        </div>
        <div className="flex gap-1">
          <Typography variant="p" className="font-bold">
            Time
          </Typography>
          <Typography variant="p">:</Typography>
          <Typography variant="p">{time}</Typography>
        </div>
        <div className="flex gap-1">
          <Typography variant="p" className="font-bold">
            No. of court
          </Typography>
          <Typography variant="p">:</Typography>
          <Typography variant="p">{courtNumber}</Typography>
        </div>
        <div className="flex gap-1">
          <Typography variant="p" className="font-bold">
            Max attendees
          </Typography>
          <Typography variant="p">:</Typography>
          <Typography variant="p">{maxPeople}</Typography>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="cursor-pointer" onClick={() => window.open(link)}>
          RSVP here
        </Button>
      </CardFooter>
    </Card>
  );
}
