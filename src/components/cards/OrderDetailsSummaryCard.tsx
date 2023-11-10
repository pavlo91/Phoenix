import classNames from "classnames";
import OrderSummaryDetails from "components/common/OrderSummaryDetails";
import { currencyFormat } from "helpers/utils";
import { Card } from "react-bootstrap";

const OrderDetailsSummaryCard = ({ className }: { className?: string }) => {
  return (
    <Card className={classNames(className)}>
      <Card.Body>
        <Card.Title as="h3" className="mb-4">
          Summary
        </Card.Title>

        <div className="border-bottom mb-4">
          <OrderSummaryDetails />
        </div>
        <div className="d-flex justify-content-between">
          <h4 className="mb-0">Total :</h4>
          <h4 className="mb-">
            {currencyFormat(695.2, { minimumFractionDigits: 2 })}
          </h4>
        </div>
      </Card.Body>
    </Card>
  );
};

export default OrderDetailsSummaryCard;
