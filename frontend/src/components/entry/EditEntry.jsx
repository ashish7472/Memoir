import ModalLayout from "../ModalLayout";
import { FaPencilAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { entriesAPI } from "../../api/entries";
import { toast } from "react-toastify";

const EditEntry = ({ id }) => {
  const [open, setOpen] = useState(false);
  const [entry, setEntry] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    mood: "",
    content: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (open && id) {
      const fetchEntry = async () => {
        try {
          const result = await entriesAPI.getEntry(id);
          setEntry(result.data);
          setFormData({
            title: result.data?.title || "",
            mood: result.data?.mood || "",
            content: result.data?.content || "",
            date: new Date(result.data?.date).toISOString().slice(0, 10) || "",
          });
        } catch (error) {
          console.error('Failed to fetch entry:', error);
        }
      };
      fetchEntry();
    }
  }, [open, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await entriesAPI.updateEntry(id, formData);
      setOpen(false);
      toast.success(response.message);
      // Refresh the page to show the updated entry
      window.location.reload();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <p
        onClick={() => setOpen(true)}
        className="text-success hover:cursor-pointer"
      >
        <FaPencilAlt />
      </p>

      <ModalLayout isOpen={open} close={() => setOpen(false)}>
        <div className="card-body">
          <h2 className="card-title block text-center text-lg mb-2">
            Edit Your Entry
          </h2>

          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor={`title.${id}`}>
                Entry Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="title"
                id={`title.${id}`}
                value={formData.title}
                onChange={handleChange}
                className="input w-full rounded-lg my-3"
                required
                placeholder="Give your entry a title"
              />
            </div>

            <div className="flex gap-5 justify-center items-center">
              <div>
                <label htmlFor={`date.${id}`}>
                  Select Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="date"
                  id={`date.${id}`}
                  value={formData.date}
                  onChange={handleChange}
                  className="input rounded-lg my-3"
                />
              </div>

              <div>
                <label htmlFor={`mood.${id}`}>
                  Your Mood <span className="text-red-500">*</span>
                </label>

                <select
                  name="mood"
                  id={`mood.${id}`}
                  value={formData.mood}
                  onChange={handleChange}
                  className="select rounded-lg my-3"
                >
                  <option value="🙂">🙂 Happy</option>
                  <option value="😔">😔 Sad</option>
                  <option value="😡">😡 Angry</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor={`content.${id}`}>
                Describe Your Day <span className="text-red-500">*</span>
              </label>
              <textarea
                name="content"
                id={`content.${id}`}
                value={formData.content}
                onChange={handleChange}
                className="textarea w-full rounded-lg my-3 h-50"
                required
                placeholder="Write about your day, thoughts, or experiences"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full rounded-lg mt-3"
              disabled={isLoading}
            >
              {isLoading ? "Please wait!.." : "Save Changes"}
            </button>
          </form>
        </div>
      </ModalLayout>
    </>
  );
};
export default EditEntry;
