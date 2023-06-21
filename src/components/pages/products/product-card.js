import { formatNumber } from "../../../helper/utils";

export default function ProductCard({ className, data ,onHandleAddCart}) {
  return (
    <div className={className}>
      <div className="w-100">
        <img
          src={data?.img}
          style={{ objectFit: "cover" }}
          className="w-100 h-100"
        />
      </div>
      <div className="pt-3 px-2">
        <h6 className="">{data?.title}</h6>
        <p className="h4 m-0 fw-bold">Rp {formatNumber(data?.price)}</p>
      </div>
      <div className="px-2 w-100 pt-3">
        <button onClick={() => onHandleAddCart(data)} className="btn btn-primary w-100">ADD TO CART</button>
      </div>
    </div>
  );
}
