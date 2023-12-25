import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/lib/baseUrl";
import toast from "react-hot-toast";
import app from "@/lib/axiosConfig";

// const data = [
//   { nama: 'kucing', type: 'jantan' },
//   { nama: 'mobil', type: 'kendaraan' },
//   { nama: 'anjing', type: 'betina' },
//   { nama: 'kucing', type: 'betina' },
//   { nama: 'sepeda', type: 'kendaraan' },
//   { nama: 'burung', type: 'jantan' },
//   { nama: 'mobil', type: 'listrik' },
//   { nama: 'kucing', type: 'jantan' },
//   { nama: 'mobil', type: 'bensin' },
//   { nama: 'anjing', type: 'jantan' },
// ];


const Test6 = () => {
  const [course, setCourse] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  // console.log(course);
  

  useEffect(() => {
    const getAllCourse = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/course/all`);
        const data = response.data.data.content;
        setCourse(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getAllCourse();
  }, []);

  const filteredData = course.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const typeOptions = [...new Set(course.map((item) => item.type))];
  typeOptions.unshift('all');

  const [formData, setFormData] = useState({
    courseCode: '',
    courseName: '',
    category: '',
    description: '',
    intended: '',
    lecturer: '',
    type: '',
    level: '',
    price: '',
    discount: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddData = async (e) => {
    e.preventDefault();
    try {
      const response = await app.post("course", formData, {
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
        },
      });

      if (response.status === 200) {
        toast.success(response.data.message);
        setTimeout(() => {
          // Jangan refresh halaman, cukup reset form data
          setFormData({
            courseCode: '',
            courseName: '',
            category: '',
            description: '',
            intended: '',
            lecturer: '',
            type: '',
            level: '',
            price: '',
            discount: '',
          });
        }, 2000);
      }

      // handleCloseModal();

    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Cari berdasarkan nama"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
        {typeOptions.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>

      <ul>
        {filteredData
          .filter((item) => selectedType === 'all' || item.type === selectedType)
          .map((item, index) => (
            <li key={index}>{`${item.name} - ${item.type}`}</li>
          ))}
      </ul>

      <form onSubmit={handleAddData}>
        <label htmlFor="courseCode">Course Code:</label>
        <input
          type="text"
          id="courseCode"
          name="courseCode"
          value={formData.courseCode}
          onChange={handleInputChange}
        />

        <label htmlFor="courseName">Course Name:</label>
        <input
          type="text"
          id="courseName"
          name="courseName"
          value={formData.courseName}
          onChange={handleInputChange}
        />

        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
        />

        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />

        <label htmlFor="intended">Intended:</label>
        <input
          type="text"
          id="intended"
          name="intended"
          value={formData.intended}
          onChange={handleInputChange}
        />

        <label htmlFor="lecturer">Lecturer:</label>
        <input
          type="text"
          id="lecturer"
          name="lecturer"
          value={formData.lecturer}
          onChange={handleInputChange}
        />

        <label htmlFor="type">Type:</label>
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleInputChange}
        >
          <option value="GRATIS">GRATIS</option>
          <option value="PREMIUM">PREMIUM</option>
        </select>

        <label htmlFor="level">Level:</label>
        <input
          type="text"
          id="level"
          name="level"
          value={formData.level}
          onChange={handleInputChange}
        />

        <label htmlFor="price">Price:</label>
        <input
          type="text"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
        />

        <label htmlFor="discount">Discount:</label>
        <input
          type="text"
          id="discount"
          name="discount"
          value={formData.discount}
          onChange={handleInputChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Test6