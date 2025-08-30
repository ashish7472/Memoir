import { useState, useEffect } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import { entriesAPI } from "../api/entries";
import { useUser } from "../context/UserContext";
import EntryCard from "../components/entry/EntryCard";
import AddEntry from "../components/entry/AddEntry";
import Loader from "../components/Loader";

const Entries = () => {
  const { user } = useUser();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchEntries = async () => {
      setIsLoading(true);
      try {
        if (searchQuery.length > 0) {
          const result = await entriesAPI.searchEntries(searchQuery);
          setEntries(result.data || []);
        } else {
          const result = await entriesAPI.getEntries();
          setEntries(result.data || []);
        }
      } catch (error) {
        console.error('Failed to fetch entries:', error);
        setEntries([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEntries();
  }, [searchQuery]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100dvh-64px-52px)]">
        <Loader />
      </div>
    );
  }

  if (entries.length === 0) {
    if (searchQuery.length > 0) {
      return (
        <div className="text-center mt-10 mx-7 min-h-[calc(100dvh-64px-52px-40px)]">
          <p className="text-2xl font-semibold mb-2">
            Sorry {user.firstName}, I couldn't find any entries matching
            your search query!
          </p>
          <p className="text-lg">
            It looks like there are no entries that match your search criteria.
            Try searching with different keywords!
          </p>
          <div className="fixed bottom-20 z-10 left-[calc(100vw-7rem)]">
            <AddEntry />
          </div>
        </div>
      );
    } else {
      return (
        <div className="text-center mt-10 mx-7 min-h-[calc(100dvh-64px-52px-40px)]">
          <p className="text-2xl font-semibold mb-2">
            Welcome, {user.firstName}
          </p>
          <p className="text-lg mb-2">
            It looks like you haven't added any entries yet.
          </p>
          <p className="text-lg">
            Start your journey by creating your very first entry by clicking the
            bottom '+' button!
          </p>
          <div className="fixed bottom-20 z-10 left-[calc(100vw-7rem)]">
            <AddEntry />
          </div>
        </div>
      );
    }
  }

  return (
    <div>
      <div className="fixed bottom-20 z-10 left-[calc(100vw-7rem)]">
        <AddEntry />
      </div>
      <div className="flex flex-wrap gap-10 justify-center my-10 min-h-[calc(100dvh-64px-52px-80px)] mx-7">
        {entries.map((entry) => (
          <EntryCard
            key={entry._id}
            id={entry._id}
            date={entry.date}
            title={entry.title}
            mood={entry.mood}
            content={entry.content}
            updatedAt={entry.updatedAt}
            highlightText={searchQuery}
          />
        ))}
      </div>
    </div>
  );
};
export default Entries;
