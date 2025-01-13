"use client";
import RecentProjects from "./_components/recent-projects";

export default function Home() {
  // const [projects, setProjects] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   // Define the fetch function
  //   const fetchData = async () => {
  //     const url = "https://pmzlmetpnoqiizynjndb.supabase.co/rest/v1/projects";
  //     const headers = new Headers({
  //       apikey:
  //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtemxtZXRwbm9xaWl6eW5qbmRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYyMzQ5MzQsImV4cCI6MjA1MTgxMDkzNH0.fNxC732nZAFJQLkYyHK8TnB7U_rpbJjx6du6EJ5Et0M",
  //       Authorization:
  //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtemxtZXRwbm9xaWl6eW5qbmRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYyMzQ5MzQsImV4cCI6MjA1MTgxMDkzNH0.fNxC732nZAFJQLkYyHK8TnB7U_rpbJjx6du6EJ5Et0M",
  //     });

  //     try {
  //       const response = await fetch(url, { headers });
  //       if (!response.ok) {
  //         throw new Error(
  //           "Network response was not ok: " + response.statusText
  //         );
  //       }
  //       const data = await response.json();
  //       setProjects(data);
  //     } catch (error) {
  //       console.log(error);
  //       console.error("Fetch error:", error);
  //     }
  //     setLoading(false);
  //   };

  //   // Call the fetch function
  //   fetchData();
  // }, [projects]);

  return (
    <div className=" ">
      {/* <AddProject />
        <AddProject /> */}
      <RecentProjects />
    </div>
  );
}
