import {useState} from 'react';

const Upload = () => {
  const [file, setFile] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Trying to upload file...');

    console.log('File:', file);
    console.log('Name:', name);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="file"
          onChange={(e) => setFile(e.target.value)}
        />
        <br />
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />

        <button
          className="m-3 mt-0 rounded bg-blue-500 px-4 py-2 font-bold text-stone-100 hover:bg-blue-700"
          type="submit"
        >
          Upload
        </button>
      </form>
    </>
  );
};

export default Upload;
