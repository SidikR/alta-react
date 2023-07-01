import moment from "moment";
import { useSelector } from "react-redux";

export default function CardComments() {
  const { data } = useSelector((state) => state.jokes);
  
  return (
    <div className="d-flex flex-column gap-4">
      {data.map((item, i) => (
        <div
          key={i}
          style={{
            backgroundColor: "#f6f6f6",
            borderRadius: 8,
            boxShadow: "1px 2px 3px rgba(0,0,0,.3)",
            maxWidth: 520,
            width: "100%",
          }}
          className="p-4"
        >
          <p style={{ fontSize: 12 }}>
            Created at: {moment(item?.created_at).format("DD/MMM/YYYY")}
          </p>
          <p>{item?.value}</p>
        </div>
      ))}
    </div>
  );
}
