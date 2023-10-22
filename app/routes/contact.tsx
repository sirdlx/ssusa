import { ActionArgs, defer, json } from "@shopify/remix-oxygen";
import { ContactUs } from "~/components/Contact";
import { MONDAY_API_TOKEN } from "~/monday";

export async function action({ request }: ActionArgs) {
  const formPayload = Object.fromEntries(await request.formData());
  console.log("\nNew Contact ");
  console.dir(formPayload);

  // let query = "query { boards (ids: 4858232281) { name state id permissions }}";

  let query = `mutation 
  { create_item (board_id: 4858232281, item_name: \"${formPayload.name}\",  
  column_values: 
  \"{\\\"text\\\":\\\"${formPayload.name}\\\", 
  \\\"text3\\\":\\\"${formPayload.email}\\\", 
  \\\"lead_phone\\\":\\\"${formPayload.phone}\\\", 
  \\\"text5\\\":\\\"${formPayload.message}\\\",
  \\\"lead_status\\\":\\\"New Lead\\\" 
  }\"
  ) 
  { id }
}`;

  let query2 = "query {boards (ids: 4858232281) { columns { id title }}}";
  console.log(query);

  const save = await fetch("https://api.monday.com/v2", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      "Authorization": MONDAY_API_TOKEN,
    },
    body: JSON.stringify({
      "query": query,
    }),
  });
  const data = await save.json();
  console.dir(data);

  return json(data);
}

export default function Contact() {
  return (
    <>
      <div className="container contact">
        <div className="d-flex flex-column flex-md-row py-4 justify-content-md-center">
          <div className="col px-4">
            <div className="card">
              <div className="card-body text-center">
                <div className="bot-profile">
                </div>

                <p className="py-4">Contact us for a Supreme Solution</p>
                <div className="card-arrow">
                  <div className="card-arrow-top-left"></div>
                  <div className="card-arrow-top-right"></div>
                  <div className="card-arrow-bottom-left"></div>
                  <div className="card-arrow-bottom-right"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col contact-form ">
            <ContactUs />
          </div>
        </div>
      </div>
    </>
  );
}
