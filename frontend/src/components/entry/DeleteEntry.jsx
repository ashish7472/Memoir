import ModalLayout from "../ModalLayout";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { entriesAPI } from "../../api/entries";
import { toast } from "react-toastify";

const DeleteEntry = ({ id }) => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      const response = await entriesAPI.deleteEntry(id);
      toast.success(response.message);
      // Refresh the page to show the updated entries
      window.location.reload();
    } catch (error) {
      toast.error("Failed to delete the entry!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <p
        onClick={() => setOpen(true)}
        className="text-error hover:cursor-pointer"
      >
        <FaTrashAlt />
      </p>

      <ModalLayout isOpen={open} close={() => setOpen(false)}>
        <h1 className="text-lg">
          Are you sure you want to delete this entry?
        </h1>
        <div className="modal-action">
          <button onClick={() => setOpen(false)} className="btn btn-success">
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="btn btn-error"
            disabled={isLoading}
          >
            {isLoading ? "Deleting..." : "Confirm"}
          </button>
        </div>
      </ModalLayout>
    </div>
  );
};
export default DeleteEntry;
