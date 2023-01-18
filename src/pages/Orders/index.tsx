import { useCallback, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Table, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../redux/store";
import { columns } from "./constant";
import { debounce } from "lodash";
import { getFilteredOrders } from "../../redux/actions/orders";

const CustomCard = styled.div`
  padding: 50px 50px 10px;
  margin: 30px auto;
  border-radius: 25px;
  box-shadow: 0 0 20px 0px #a4a4a4;
  width: fit-content;
`;

const SearchBarWrapper = styled.div`
  width: 75%;
  padding: 10px 0;
`;

const ResponsiveWrapper = styled.div`
  overflow-x: scroll;
`;

const Orders = () => {
  const { orders } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const callSearchAPI = useCallback(
    debounce((obj) => dispatch(getFilteredOrders(obj) as any), 500),
    []
  );

  const handleChange = (e: any) => {
    setValue(e.target.value);
    callSearchAPI({ search_text: e.target.value });
  };

  return (
    <ResponsiveWrapper>
      <CustomCard>
        <SearchBarWrapper>
          <Input
            placeholder="Search... (e.g. Order: ID, Customer Name, Company Name)"
            prefix={<SearchOutlined />}
            value={value}
            onChange={(e) => handleChange(e)}
          />
        </SearchBarWrapper>
        <Table dataSource={orders.data} columns={columns} />
      </CustomCard>
    </ResponsiveWrapper>
  );
};

export default Orders;
