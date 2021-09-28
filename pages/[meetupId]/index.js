import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/3/36/Nuremberg_chronicles_-_BVJA.png"
      title="first meetyp"
      description="first meetup desc"
      address="some address"
    />
  );
}

export function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/3/36/Nuremberg_chronicles_-_BVJA.png",
        id: meetupId,
        title: "First Meetup",
        address: "some adress",
        description: "spme desc",
      },
    },
  };
}

export default MeetupDetails;
