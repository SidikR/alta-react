import { formatNumber } from "src/helper/utils";

export default function Summary({ summaryList = [] }) {
  const getTotal = summaryList.reduce((accumulator, item) => accumulator + item?.price, 0);

  return (
    <section className="py-5">
      <h3>TOTAL: Rp{formatNumber(getTotal)}</h3>

      <p>Items</p>
      <div>
        {summaryList.map((item, i) => (
          <div key={i}>
            <p>
              {item?.title} ({item?.qty}x) Rp{formatNumber(item.price)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
