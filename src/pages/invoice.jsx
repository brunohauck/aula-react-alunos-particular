import { useParams } from "react-router-dom";
import { getInvoices } from "../data";
export default function Invoice() {
  let invoices = getInvoices();
  let params = useParams();
  let id = params.invoiceId
  return (
    <>
        <h2 >Invoice name: {invoices[id].name}</h2><br />
        <h2>Invoice number: {invoices[id].number}</h2><br />
        <h2>Invoice amount: {invoices[id].amount}</h2><br />
        <h2>Invoice due: {invoices[id].due}</h2>
    </>
    );
  
}