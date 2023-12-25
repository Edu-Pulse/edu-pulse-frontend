const KelasAll = ({ courseItem, index }) => {
  return (
    <section key={index} className="text-sm flex gap-5">
          <p>{courseItem.code}</p>
          <p>{courseItem.category}</p>
          <p>{courseItem.name}</p>
          <p>{courseItem.type}</p>
          <p>{courseItem.level}</p>
          <p>{courseItem.price}</p>
        </section>
  )
}

export default KelasAll