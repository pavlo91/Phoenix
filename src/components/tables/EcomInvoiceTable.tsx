import Scrollbar from 'components/base/Scrollbar';
import React from 'react';

const EcomInvoiceTable = () => {
  return (
    <Scrollbar autoHeight autoHeightMax="100%">
      <table className="table fs-9 text-900 mb-0">
        <thead className="bg-200">
          <tr>
            <th scope="col" style={{ width: 24 }} />
            <th scope="col" style={{ minWidth: 60 }}>
              SL NO.
            </th>
            <th scope="col" style={{ minWidth: 360 }}>
              Products
            </th>
            <th className="ps-5" scope="col" style={{ minWidth: 150 }}>
              Color
            </th>
            <th scope="col" style={{ width: 60 }}>
              Size
            </th>
            <th className="text-end" scope="col" style={{ width: 80 }}>
              Quantity
            </th>
            <th className="text-end" scope="col" style={{ width: 100 }}>
              Price
            </th>
            <th className="text-end" scope="col" style={{ width: 138 }}>
              Tax Rate
            </th>
            <th className="text-center" scope="col" style={{ width: 80 }}>
              Tax Type
            </th>
            <th className="text-end" scope="col" style={{ minWidth: 92 }}>
              Tax
            </th>
            <th className="text-end" scope="col" style={{ minWidth: 60 }}>
              Total
            </th>
            <th scope="col" style={{ width: 24 }} />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-0" />
            <td className="align-middle">1</td>
            <td className="align-middle">
              <p className="line-clamp-1 mb-0 fw-semi-bold">
                Fitbit Sense Advanced Smartwatch with Tools for Heart Health,
                Stress Management &amp; Skin Temperature Trends,
                Carbon/Graphite, One Size (S &amp; L Bands)
              </p>
            </td>
            <td className="align-middle ps-5">Glossy black</td>
            <td className="align-middle text-700 fw-semi-bold">XL</td>
            <td className="align-middle text-end text-1000 fw-semi-bold">2</td>
            <td className="align-middle text-end fw-semi-bold">$299</td>
            <td className="align-middle text-end">2.5%</td>
            <td className="align-middle text-center fw-semi-bold">VAT</td>
            <td className="align-middle text-end fw-semi-bold">$199</td>
            <td className="align-middle text-end fw-semi-bold">$398</td>
            <td className="border-0" />
          </tr>
          <tr>
            <td className="border-0" />
            <td className="align-middle">2</td>
            <td className="align-middle">
              <p className="line-clamp-1 mb-0 fw-semi-bold">
                2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 128GB) - Space Gray
              </p>
            </td>
            <td className="align-middle ps-5">Black</td>
            <td className="align-middle text-700 fw-semi-bold">Pro</td>
            <td className="align-middle text-end text-1000 fw-semi-bold">1</td>
            <td className="align-middle text-end fw-semi-bold">$199</td>
            <td className="align-middle text-end">2.75%</td>
            <td className="align-middle text-center fw-semi-bold">VAT</td>
            <td className="align-middle text-end fw-semi-bold">$199</td>
            <td className="align-middle text-end fw-semi-bold">$398</td>
            <td className="border-0" />
          </tr>
          <tr>
            <td className="border-0" />
            <td className="align-middle border-0">1</td>
            <td className="align-middle border-0">
              <p className="line-clamp-1 mb-0 fw-semi-bold">
                PlayStation 5 DualSense Wireless Controller
              </p>
            </td>
            <td className="align-middle ps-5 border-0">White</td>
            <td className="align-middle text-700 fw-semi-bold border-0">
              Regular
            </td>
            <td className="align-middle text-end text-1000 fw-semi-bold border-0">
              1
            </td>
            <td className="align-middle text-end fw-semi-bold border-0">
              $185
            </td>
            <td className="align-middle text-end border-0">3.5%</td>
            <td className="align-middle text-center fw-semi-bold border-0">
              VAT
            </td>
            <td className="align-middle text-end fw-semi-bold border-0">
              $199
            </td>
            <td className="align-middle text-end fw-semi-bold border-0">
              $398
            </td>
            <td className="border-0" />
          </tr>
          <tr className="bg-200">
            <td />
            <td className="align-middle fw-semi-bold" colSpan={9}>
              Subtotal
            </td>
            <td className="align-middle text-end fw-bold">$398</td>
            <td />
          </tr>
          <tr>
            <td className="border-0" />
            <td colSpan={6} />
            <td className="align-middle fw-bold ps-15" colSpan={2}>
              Shipping Cost
            </td>
            <td className="align-middle text-end fw-semi-bold" colSpan={2}>
              $50
            </td>
            <td className="border-0" />
          </tr>
          <tr>
            <td />
            <td colSpan={6} />
            <td className="align-middle fw-bold ps-15" colSpan={2}>
              Discount/Voucher
            </td>
            <td
              className="align-middle text-end fw-semi-bold text-danger"
              colSpan={2}
            >
              -$50
            </td>
            <td />
          </tr>
          <tr className="bg-200">
            <td className="align-middle ps-4 fw-bold text-1000" colSpan={3}>
              Grand Total
            </td>
            <td className="align-middle fw-bold text-1000" colSpan={7}>
              Three Hundred and Ninenty Eight USD
            </td>
            <td className="align-middle text-end fw-bold">$398</td>
            <td />
          </tr>
        </tbody>
      </table>
    </Scrollbar>
  );
};

export default EcomInvoiceTable;
