import { useState } from "react";

const Test2 = () => {
  // const courses = [
  //   { name: 'Kursus 1', content: { type: 'gratis' } },
  //   { name: 'Kursus 2', content: { type: 'gratis' } },
  //   { name: 'Kursus 3', content: { type: 'gratis' } },
  //   { name: 'Kursus 4', content: { type: 'premium' } },
  //   { name: 'Kursus 5', content: { type: 'premium' } },
  //   { name: 'Kursus 6', content: { type: 'premium' } },
  //   { name: 'Kursus 7', content: { type: 'premium' } },
  //   { name: 'Kursus 8', content: { type: 'premium' } },
  //   { name: 'Kursus 9', content: { type: 'premium' } },
  //   { name: 'Kursus 10', content: { type: 'premium' } },
  // ];
  const [selectedType, setSelectedType] = useState(''); // State untuk menyimpan jenis kursus yang dipilih
  const [filteredCourses, setFilteredCourses] = useState(course); // State untuk menyimpan hasil filter
  const [course, ] = useState([]);

  // Fungsi untuk melakukan filter berdasarkan jenis kursus
  const handleFilter = (type) => {
    const filteredData = type === '' ? course : course.filter(course => course.content.type === type);
    setFilteredCourses(filteredData);
    setSelectedType(type);
  };

  return (
    <div>
      <h2>Daftar Kursus</h2>
      <div>
        <label>Pilih Jenis Kursus:</label>
        <select
          onChange={(e) => handleFilter(e.target.value)}
          value={selectedType}
        >
          <option value="">Semua</option>
          <option value="gratis">Gratis</option>
          <option value="premium">Premium</option>
        </select>
      </div>
      <ul>
        {filteredCourses.map((course, index) => (
          <li key={index}>{course.name} - {course.content.type}</li>
        ))}
      </ul>
    </div>
  )
}

export default Test2;
