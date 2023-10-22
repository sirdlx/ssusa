import Card from "./Card";
import { LineChart, Stats1, Stats2, StatsConversion } from "./stats1";

export function SectionBenefits() {

    // const observer = new IntersectionObserver(entries => {
    //     // Loop over the entries
    //     entries.forEach(entry => {
    //         // If the element is visible
    //         if (entry.isIntersecting) {
    //             // Add the animation class
    //             entry.target.classList.add('square-animation');
    //         }
    //     });
    // });

    // observer.observe(document.querySelector('.card-body') as Element);



    return (
        <div className="container py-5 section-body">
            <h1 className="display-4 fw-normal text-center">
                Why you should use buy now, pay later (BNPL) payment methods for your
                business
            </h1>

            <p className="display-6 fw-normal text-center">
                Buy now, pay later has emerged as one of the most popular payment
                methods: More than half of US customers have used a buy now, pay later
                service. It was the fastest growing payment method in 2020.
            </p>

            <div className="row row-cols-1 py-4">
                <div className="col">
                    <Card
                        child={undefined}
                        title={"How do buy now, pay later services work?"}
                        text={"Buy now, pay later services are typically presented as an option in the payment flow, alongside credit cards and other payment methods. When customers make a one-time purchase, they simply select a buy now, pay later provider in the payment form, and are redirected to the provider's site or app to create an account or log in. Customers choose whether to accept the terms of the repayment plan—typically selecting bi-weekly or monthly installments—and complete the purchase."}
                    />
                </div>

                <div className="col py-5">
                    <Card
                        child={undefined}
                        title={"Offer a better customer experience"}
                        text={"Buy now, pay later payment services offer customers a faster, more convenient way to access financing. Customers are only subject to a soft credit check (versus a hard check for other financing methods). There are no separate applications, application fees, or additional processing time, and most providers have simple-to-understand repayment plans and terms."}
                    />
                </div>
            </div>

            <div className="finacing-header py-4 pb-md-4 mx-auto text-center">
                <h1 className="display-4 fw-normal">Benefits of Buy Now Pay Later</h1>
                <p className="fs-5 text-muted">
                    Provide your customers with the ability to split Up Payments. The
                    major benefit of BNPL services is that you can break up payments into
                    smaller, more manageable amounts.
                </p>
            </div>

            <div className="row row-cols-1 row-cols-md-2 mb-2  py-5 ">
                <div className="col d-flex  align-items-center">
                    <p className="mx-auto text-center">
                        RBC Capital Markets estimates a BNPL option increases retail
                        conversion rates 20% to 30%, and lifts the average ticket size
                        between 30% and 50%
                    </p>
                </div>
                <div className="col">
                    <div className="card mb-3 hvr-grow hvr-sweep-to-top hvr-back-pulse">
                        <div className="card-body ">
                            <Stats1 />
                        </div>
                        <div className="card-arrow">
                            <div className="card-arrow-top-left"></div>
                            <div className="card-arrow-top-right"></div>
                            <div className="card-arrow-bottom-left"></div>
                            <div className="card-arrow-bottom-right"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-2 mb-2 py-5">
                <div className="card mb-3 hvr-grow hvr-sweep-to-top hvr-back-pulse">
                    <div className="card-body ">
                        <Stats2 />
                    </div>
                    <div className="card-arrow">
                        <div className="card-arrow-top-left"></div>
                        <div className="card-arrow-top-right"></div>
                        <div className="card-arrow-bottom-left"></div>
                        <div className="card-arrow-bottom-right"></div>
                    </div>
                </div>

                <div className="col d-flex  align-items-center">
                    <p className="mx-auto text-center">
                        Affirm boasts that its merchant clients report a 85% increase in
                        average order value when consumers opt to use its BNPL plan over
                        other payment methods. Affirm approves installment payments for
                        purchase totals as high as $17,500.
                    </p>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-2 mb-2 py-5">
                <div className="col d-flex  align-items-center">
                    <p className="mx-auto text-center">
                        Around 93% of Afterpay’s gross merchandise value in the most recent fiscal year comes from repeat users of the installment payment service, with the longest-tenured consumer making 30 more transactions per year.
                    </p>
                </div>
                <div className="card mb-3 hvr-grow hvr-sweep-to-top hvr-back-pulse">
                    <div className="card-body ">
                        <LineChart />
                    </div>
                    <div className="card-arrow">
                        <div className="card-arrow-top-left"></div>
                        <div className="card-arrow-top-right"></div>
                        <div className="card-arrow-bottom-left"></div>
                        <div className="card-arrow-bottom-right"></div>
                    </div>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-2 mb-2 py-5 ">
                <div className="card mb-3 hvr-grow hvr-sweep-to-top hvr-back-pulse">
                    <div className="card-body ">
                        <StatsConversion />
                        <p>
                        </p>
                    </div>
                    <div className="card-arrow">
                        <div className="card-arrow-top-left"></div>
                        <div className="card-arrow-top-right"></div>
                        <div className="card-arrow-bottom-left"></div>
                        <div className="card-arrow-bottom-right"></div>
                    </div>
                </div>

                <div className="col d-flex  align-items-center">
                    <p className="mx-auto text-center">
                        An analysis by Similarweb of the top 100 U.S. fashion and retail websites compared 50 merchants that offer a buy now, pay later option at checkout and 50 that do not. On average, sites with a BNPL option saw a conversion rate of 6% compared with 4% for those that do not.
                    </p>
                </div>
            </div>

            <div className="col text-center py-5">
                <h5>Convinced?</h5>
                <a className=" btn btn-lg btn-primary" href="/contact" role="button">
                    Discuss your project
                </a>
            </div>
        </div>
    );
}
