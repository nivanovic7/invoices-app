import * as yup from "yup";

export function capitalizeWord(word) {
  if (!word) return ""; // Return an empty string if input is falsy
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

const itemSchema = yup.object({
  itemName: yup.string().required("Name is required"),
  quantity: yup.number().required("Required"),
  price: yup.number().required("Price is required"),
});

const validationSchema = yup.object({
  paymentTerms: yup.string().required("Payment terms is required"),
  invoiceDate: yup.date().required("Date is required"),
  sender: yup.object({
    street: yup.string().required("Street address is required"),
    city: yup.string().required("Street address is required"),
    postCode: yup.string().required("Post code is required"),
    country: yup.string().required("Country is required"),
  }),
  client: yup.object({
    name: yup.string().required("Client's name is required"),
    email: yup.string().required("Client's email is required"),
    street: yup.string().required("Street address is required"),
    city: yup.string().required("City is required"),
    postCode: yup.string().required("Post code address is required"),
    country: yup.string().required("Country is required"),
  }),
  projectDescription: yup.string().required("Project description is required"),
  items: yup.array().of(itemSchema).min(1, "At least one item is required!"),
});

function calculateDueDate(startDate, daysToAdd) {
  var dateMiliseconds = new Date(startDate).getTime();
  const dueDateMiliseconds = dateMiliseconds + +daysToAdd * 3600 * 24 * 1000;
  return new Date(dueDateMiliseconds).toLocaleDateString();
}

function calculateInvoiceTotal(items) {
  return items.reduce((sum, item) => sum + item.quantity * item.price, 0);
}

function replaceEditedItem(all, edited) {
  return all.map((invoice) => (invoice.id === edited.id ? edited : invoice));
}

export {
  validationSchema,
  calculateDueDate,
  calculateInvoiceTotal,
  replaceEditedItem,
};
