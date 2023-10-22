import { Form, useActionData } from '@remix-run/react';
import { action } from '~/routes/contact';

export function ContactUs() {
    const savedData = useActionData<typeof action>();
    console.log('savedData');
    console.log(savedData);

    return (
        <div className={savedData ? 'saved' : 'not-saved'}>

            <Form className={"row g-2 py-4 "} method="post" action="/contact">
                <div className="col-12 py-1">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder=""
                        autoComplete="name"
                        name="name"
                        required={true}

                    />
                </div>

                <div className="col-12 py-1">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input type="email" className="form-control" id="email"
                        autoComplete="email" name="email"
                        required={true}

                    />
                </div>

                <div className="col-12 py-1">
                    <label htmlFor="phone" className="form-label">
                        Phone
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="(000-000-0000)"
                        autoComplete="phone"
                        name="phone"
                        required={true}
                    />
                </div>

                <div className="col-12 py-1">
                    <label htmlFor="message" className="form-label">
                        Message
                    </label>
                    <textarea className="form-control" id="message" name="message" />
                </div>

                <div className="col-12 py-2">

                    <button className="btn btn-theme btn-lg" role="button" type="submit" disabled={savedData ? true : false}>
                        {savedData ? 'Information Sent!' : 'Contact'}
                    </button>



                </div>
            </Form>

        </div>
    );
}
