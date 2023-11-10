import { PageBreadcrumbItem } from 'components/common/PageBreadcrumb';

export const faqBreadcrumbItems: PageBreadcrumbItem[] = [
  {
    label: 'Pages',
    url: '#!'
  },
  {
    label: 'Faq',
    active: true
  }
];
export interface Faq {
  id: number;
  title: string;
  details: string;
}

export const faqs: Faq[] = [
  {
    id: 1,
    title: 'What’s your return policy?',
    details: `At the time of shipment, we assure that your product will be free
	of defects in materials and workmanship and will conform to the
	specifications outlined on the lot-specific datasheet included
	with the product. Please contact our technical support services if
	you have a technical issue with a product :
	<a href="mailto:phoenix@email.com">
		Email: phoenix@support.com.
	</a>
	If the team concludes that the product does not adhere to the
	requirements mentioned on the datasheet, we will provide a free
	replacement or a full refund of the product's invoice price.`
  },
  {
    id: 2,
    title: `I ordered the wrong product. What should I do?`,
    details: `We would consider accepting the return of the merchandise, subject to an 20% restocking fee plus any shipping and handling fees. The customer is liable for shipping costs for both the returned product and the new replacement product, both to and from our facility. All returns require prior authorisation from us and must be mailed back to us within seven business days of receiving the goods. Products must be returned in the same or equivalent packing (i.e., cold and insulated) in which they were shipped (i.e., cold and insulated). Once we get the item, we will ship out the replacement item.`
  },
  {
    id: 3,
    title: `How do I cancel my order?`,
    details: `If you must cancel your order, please call <a href="tel:+871406-7509">(871) 406-7509</a> Please note that we attempt to process and dispatch orders the same day (if received before 1pm PST), and once your product has shipped, our return policy will apply.`
  },
  {
    id: 4,
    title: `What are your shipping & handling charges?`,
    details: `Our handling fee is a flat rate of $20. The shipping costs vary depending on your location and the items you've purchased. For an exact shipping cost estimate, please proceed through the checkout process and enter your items and address.`
  },
  {
    id: 6,
    title: `Do you accept purchase orders?`,
    details: `Yes. Please include your purchase order number at online checkout, or clearly label it on a faxed or emailed purchase order. Please give the relevant email or mailing address for your accounts payable department so that the invoice can be sent to the appropriate location.`
  }
];
