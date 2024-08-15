<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Area</th>
      <th>Price</th>
      <th>District</th>
      <th>Province</th>
      <th>Legal</th>
      <th>image</th>
    </tr>
  </thead>
  <tbody>
    {data.map((item) => (
      <tr key={item.name}>
        <td>{item.name}</td>
        <td>
          <span>{item.area} m2</span>
        </td>
        <td>
          <span>{item.price / 1000000000} tỉ</span>
        </td>
        <td>{item.district}</td>
        <td>{item.province}</td>
        <td>{item.legal}</td>
        <td>
          <ImageShow imageurl={item.image} />
        </td>
      </tr>
    ))}
  </tbody>
</table>;
