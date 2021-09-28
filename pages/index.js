import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "AAA",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/36/Nuremberg_chronicles_-_BVJA.png",
    address: "Some address 6.3. S",
    description: "This is first meetup",
  },
  {
    id: "m2",
    title: "bbb",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/36/Nuremberg_chronicles_-_BVJA.png",
    address: "Some address 6.3. S",
    description: "This is first meetup",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: { meetups: DUMMY_MEETUPS },
//   };
// }

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}

export default HomePage;
