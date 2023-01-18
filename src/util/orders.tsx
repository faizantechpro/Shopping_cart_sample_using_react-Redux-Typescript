import { Badge } from "antd";

const getBadge = (text: any, color: any) => {
  return <Badge color={color} text={text} />;
};

export const badgeForOrderTable = (key: any) => {
  switch (key) {
    case "UNVERIFIED":
      return getBadge(key, "#eb742f");
    case "REFUNDED":
      return getBadge(key, "#eb2f96");
    case "CANCELLED":
      return getBadge(key, "#eb2f2f");
    case "VERIFIED":
      return getBadge(key, "#61eb2f");
    case "FULFILLED":
      return getBadge(key, "#2f96eb");
  }
};
