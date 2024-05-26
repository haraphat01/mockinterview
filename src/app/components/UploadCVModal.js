import { useState } from 'react';

const UploadCVModal = ({ closeModal }) => {
  const [cvFile, setCvFile] = useState(null);

  const handleFileChange = (e) => {
    setCvFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!cvFile) return;

    // Create a FormData object to send the file
    const formData = new FormData();
    formData.append('cv', cvFile);

    try {
      const response = await fetch('/api/upload-cv', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('CV uploaded successfully!');
        closeModal();
      } else {
        alert('Failed to upload CV');
      }
    } catch (error) {
      console.error('Error uploading CV:', error);
      alert('An error occurred while uploading the CV');
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Upload CV</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
            required
          />
          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Submit CV
          </button>
        </form>
        <button
          onClick={closeModal}
          className="mt-4 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UploadCVModal;
