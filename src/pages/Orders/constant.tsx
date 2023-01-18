import { CalendarOutlined } from "@ant-design/icons";
import { badgeForOrderTable } from "../../util/orders";

export const columns = [
  {
    title: "I.D",
    dataIndex: "orderID",
    key: "orderID",
  },
  {
    title: "Order status",
    dataIndex: "orderStatus",
    key: "orderStatus",
    render: (text: any, record: any) => <>{badgeForOrderTable(text)}</>,
  },
  {
    title: "customer",
    dataIndex: "companyName",
    key: "companyName",
    render: (text: any, record: any) => (
      <span>
        {record.companyName}
        <div style={{color: "#767676"}}>{record.customerName}</div>
      </span>
    ),
  },
  {
    title: "Purchase date",
    dataIndex: "purDate",
    key: "purDate",
    render: (text: any, record: any) => (
      <>
        <CalendarOutlined style={{ color: "#b92feb" }} /> {text}
      </>
    ),
  },
  {
    title: "fulfilled date",
    dataIndex: "fulfillDate",
    key: "fulfillDate",
    render: (text: any, record: any) => (
      <>
        <CalendarOutlined style={{ color: "#52c41a" }} /> {text}
      </>
    ),
  },
  {
    title: "Invoice status",
    dataIndex: "invoiceStatus",
    key: "invoiceStatus",
    render: (text: any, record: any) => (
      <>
        <span style={{ color: text === "Paid" ? "#39aa3b" : "#f12a2a" }}>
          {text}
        </span>
      </>
    ),
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    render: (text: any, record: any) => (
      <>
        <span style={{ color: "#767676" }}>{record.currency}</span>{" "}
        {record.amount}
      </>
    ),
  },
];
