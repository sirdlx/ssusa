import { defer, type LoaderArgs } from "@shopify/remix-oxygen";
import {
  Await,
  Link,
  useLoaderData,
  type V2_MetaFunction,
} from "@remix-run/react";
import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
  Suspense,
} from "react";
import { Image, Money } from "@shopify/hydrogen";
import type {
  CollectionFragment,
  // RecommendedProductsQuery,
} from "storefrontapi.generated";


import { SectionOnline } from "~/components/section.online";
import { SectionBenefits } from "~/components/section.benefits";
import Cover from "~/components/home.cover";
// import { MoneyV2 } from '@shopify/hydrogen-react/storefront-api-types';
// import { PartialObjectDeep } from 'type-fest/source/partial-deep';

// import * as Card from "../../../src/components/card/card.jsx";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Supreme Solutions | Home" }];
};

export async function loader({ context }: LoaderArgs) {
  const { storefront } = context;
  const { collections } = await storefront.query(FEATURED_COLLECTION_QUERY);
  const featuredCollection = collections.nodes[0];
  const recommendedProducts = storefront.query(RECOMMENDED_PRODUCTS_QUERY);

  return defer({ featuredCollection, recommendedProducts });
}

export default function Homepage() {
  const data = useLoaderData<typeof loader>();
  return (
    // <div className="home">
    //   <FeaturedCollection collection={data.featuredCollection} />
    //   <RecommendedProducts products={data.recommendedProducts} />
    // </div>
    <div className="home">
      <Cover />



      <div id="finacing" className=" benefits section bg-gradient">

        <SectionBenefits />
      </div>

      {
        /* <div className='section container'>
        <ContactUs />
      </div> */
      }


      <div className="section whoweare">
        <div className="finacing-header p-3 pb-md-4 mx-auto text-center">
          <h1 className="display-4 fw-normal">Web Design & Development</h1>
          <p className="fs-5 lead text-muted">
            With a user-centric approach, we immerse ourselves in your target
            audience's perspective, ensuring that our efforts genuinely engage
            them. Our holistic approach covers creative design elements, color
            schemes, messaging strategies, layout optimizations, iconography,
            and a seamless user experience (UX). At the core of our services is
            the commitment to enhancing your website's user interface (UI) to
            maximize user engagement. Plus, our team of web design experts
            specializes in integrating 'Buy Now, Pay Later' options to empower
            your clients and boost conversions.
          </p>
        </div>
      </div>

      <div id='online-store' className='section '>
        <SectionOnline />
      </div>

      <div id="packages" className="section packages py-5">
        <div className="container p-6">
          <div className="packages-header p-3 pb-md-4 mx-auto text-center">
            <h1 className="display-4 fw-normal">Packages</h1>
            <p className="fs-5 text-muted">
              Compare the best package that fits your needs.
            </p>

            <div className="card-arrow">
              <div className="card-arrow-top-left"></div>
              <div className="card-arrow-top-right"></div>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
            <div className="col">
              <div className="card mb-4 rounded-0 shadow-sm border-primary price hvr-back-pulse">
                <div className="card-header py-3 text-white bg-primary border-primary">
                  <h4 className="my-0 fw-normal">Pro Max</h4>

                  <div className="card-arrow">
                    <div className="card-arrow-top-left"></div>
                    <div className="card-arrow-top-right"></div>
                  </div>
                </div>
                <div className="card-body">
                  {/* <h1 className="card-title pricing-card-title">$29<small className="text-muted fw-light">/mo</small></h1> */}
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Includes Pro Services plus...</li>
                    <li>30 Products</li>
                    <li>All Financing Options</li>
                    <li>Phone and email support</li>
                    <li>6/mo Supreme Support</li>
                  </ul>

                  <a
                    className="w-100 btn btn-lg btn-primary"
                    href="contact"
                    role="button"
                  >
                    Learn More
                  </a>
                  <div className="card-arrow">
                    <div className="card-arrow-top-left"></div>
                    <div className="card-arrow-top-right"></div>
                    <div className="card-arrow-bottom-left"></div>
                    <div className="card-arrow-bottom-right"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card mb-4 rounded-0 shadow-sm price hvr-back-pulse">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">Pro</h4>

                  <div className="card-arrow">
                    <div className="card-arrow-top-left"></div>
                    <div className="card-arrow-top-right"></div>
                  </div>
                </div>
                <div className="card-body">
                  {/* <h1 className="card-title pricing-card-title">$15<small className="text-muted fw-light">/mo</small></h1> */}
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Includes Starter Services plus...</li>
                    <li>15 Products</li>
                    <li>Select Additional Financing Options</li>
                    <li>Priority email support</li>
                    <li>3/mo Supreme Support</li>
                  </ul>
                  <a
                    className="w-100 btn btn-lg btn-primary"
                    href="#/"
                    role="button"
                  >
                    Learn More
                  </a>
                  <div className="card-arrow">
                    <div className="card-arrow-top-left"></div>
                    <div className="card-arrow-top-right"></div>
                    <div className="card-arrow-bottom-left"></div>
                    <div className="card-arrow-bottom-right"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card mb-4 rounded-0 shadow-sm price hvr-back-pulse">
                <div className="card-header py-3 ">
                  <h4 className="my-0 fw-normal">Starter</h4>
                  <div className="card-arrow">
                    <div className="card-arrow-top-left"></div>
                    <div className="card-arrow-top-right"></div>
                  </div>
                </div>

                <div className="card-body">
                  {/* <h1 className="card-title pricing-card-title">$0<small className="text-muted fw-light">/mo</small></h1> */}
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>5 Products</li>
                    <li>2 Financing Options</li>
                    <li>Financing with Affirm, Klarna</li>
                    <li>Email support</li>
                    <li>3/mo Supreme Support</li>
                  </ul>
                  <a
                    className="w-100 btn btn-lg btn-primary"
                    href="#/"
                    role="button"
                  >
                    Learn More
                  </a>
                  <div className="card-arrow">
                    <div className="card-arrow-top-left"></div>
                    <div className="card-arrow-top-right"></div>
                    <div className="card-arrow-bottom-left"></div>
                    <div className="card-arrow-bottom-right"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container p-6">
          <h2 className="display-6 text-center mb-4">Compare plans</h2>
          <div className="table-responsive">
            <table className="table text-center">
              <thead>
                <tr>
                  <th className="text-start bg-primary ">Online Store</th>
                  <th>Pro Max</th>
                  <th>Pro</th>
                  <th>Starter</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th scope="row" className="text-start">Products/Services</th>
                  <td>30</td>
                  <td>15</td>
                  <td>5</td>
                </tr>

                <tr>
                  <th scope="row" className="text-start">Pages</th>
                  <td>10</td>
                  <td>5</td>
                  <td>5</td>
                </tr>

                <tr>
                  <th scope="row" className="text-start">Financing Partners</th>
                  <td>Affirm, Klarna, PayPal, Afterpay, Sezzle</td>
                  <td>Affirm, Klarna (additional $150 ea)</td>
                  <td>Affirm, Klarna</td>
                </tr>
                <tr>
                  <th scope="row" className="text-start">Online Booking</th>
                  <td>$20/m (no setup fee)</td>
                  <td>$20/m ($80 setup fee)</td>
                  <td>$20/m ($80 setup fee)</td>
                </tr>
                <tr>
                  <th scope="row" className="text-start">
                    Website Service Fee
                  </th>
                  <td>$45/m</td>
                  <td>$45/m</td>
                  <td>$45/m</td>
                </tr>
                <tr>
                  <th scope="row" className="text-start">Supreme Support</th>
                  <td>first 6 months included</td>
                  <td>first 3 months included</td>
                  <td>first 3 months included</td>
                </tr>
              </tbody>

              <thead>
                <tr>
                  <th className="text-start bg-primary ">
                    Features and Integration
                  </th>
                  <th>Pro Max</th>
                  <th>Pro</th>
                  <th>Starter</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th scope="row" className="text-start">
                    Social Media Gallery
                  </th>
                  <td>Included</td>
                  <td>$150</td>
                  <td>-</td>
                </tr>
                <tr>
                  <th scope="row" className="text-start">
                    Youtube Video Gallery
                  </th>
                  <td>Included</td>
                  <td>$150</td>
                  <td>-</td>
                </tr>
                <tr>
                  <th scope="row" className="text-start">In-store Financing</th>
                  <td>Included</td>
                  <td>$150</td>
                  <td>-</td>
                </tr>
                <tr>
                  <th scope="row" className="text-start">QR Code Links</th>
                  <td>Included</td>
                  <td>$150</td>
                  <td>-</td>
                </tr>
              </tbody>

              <thead>
                <tr>
                  <th className="text-start bg-primary ">
                    Professional Assets
                  </th>
                  <th>Pro Max</th>
                  <th>Pro</th>
                  <th>Starter</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="text-start">Logos</th>
                  <td>Included</td>
                  <td>$200</td>
                  <td>$200</td>
                </tr>
                <tr>
                  <th scope="row" className="text-start">Photography</th>
                  <td>Included</td>
                  <td>$200</td>
                  <td>$200</td>
                </tr>
                <tr>
                  <th scope="row" className="text-start">Slogan</th>
                  <td>Included</td>
                  <td>$200</td>
                  <td>$50</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturedCollection({
  collection,
}: {
  collection: CollectionFragment;
}) {
  if (!collection) return null;
  const image = collection?.image;
  return (
    <Link
      className="featured-collection"
      to={`/collections/${collection.handle}`}
    >
      {image && (
        <div className="featured-collection-image">
          <Image data={image} sizes="100vw" />
        </div>
      )}
      <h1>{collection.title}</h1>
    </Link>
  );
}

// function RecommendedProducts({
//   products,
// }: {
//   products: Promise<RecommendedProductsQuery>;
// }) {
//   return (
//     <div className="recommended-products">
//       <h2>Recommended Products</h2>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Await resolve={products}>
//           {({ products }) => (
//             <div className="recommended-products-grid">
//               {products.nodes.map((product: { title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; priceRange: { minVariantPrice: PartialObjectDeep<MoneyV2, { recurseIntoArrays: true; }>; }; }) => (
//                 // <Link
//                 //   key={product.id}
//                 //   className="recommended-product"
//                 //   to={`/products/${product.handle}`}
//                 // >
//                 //   <Image
//                 //     data={product.images.nodes[0]}
//                 //     aspectRatio="1/1"
//                 //     sizes="(min-width: 45em) 20vw, 50vw"
//                 //   />
//                 //   <h4>{product.title}</h4>
//                 //   <small>
//                 //     <Money data={product.priceRange.minVariantPrice} />
//                 //   </small>
//                 // </Link>

//                 <div>
//                   Product
//                   {/* <Card.CardBody /> */}

//                   <div className={'card '} >
//                     <div className="card-body">
//                       <h4>{product.title}</h4>
//                       <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                       <small>
//                         <Money data={product.priceRange.minVariantPrice} />
//                       </small>
//                       <a href="#" className="btn btn-primary">Go somewhere</a>
//                     </div>

//                     <div className="card-arrow">
//                       <div className="card-arrow-top-left"></div>
//                       <div className="card-arrow-top-right"></div>
//                       <div className="card-arrow-bottom-left"></div>
//                       <div className="card-arrow-bottom-right"></div>
//                     </div>
//                   </div>

//                   {/* <Card>
//                     <CardHeader className="fw-bold small">CARD HEADER HERE</CardHeader>
//                     <CardBody>
//                       <h5 className="card-title">Card title</h5>
//                       <h6 className="card-subtitle mb-3 text-white text-opacity-50">Card subtitle</h6>
//                       <p className="card-text mb-3">...</p>
//                       <div>
//                         <a href="#/" className="card-link">Card link</a>
//                         <a href="#/" className="card-link">Another link</a>
//                       </div>
//                     </CardBody>
//                   </Card> */}

//                 </div>
//               ))}
//             </div>
//           )}
//         </Await>
//       </Suspense>
//       <br />
//     </div>
//   );
// }

const FEATURED_COLLECTION_QUERY = `#graphql
          fragment FeaturedCollection on Collection {
            id
    title
          image {
            id
      url
          altText
          width
          height
    }
          handle
  }
          query FeaturedCollection($country: CountryCode, $language: LanguageCode)
          @inContext(country: $country, language: $language) {
            collections(first: 1, sortKey: UPDATED_AT, reverse: true) {
            nodes {
            ...FeaturedCollection
          }
    }
  }
          ` as const;

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
          fragment RecommendedProduct on Product {
            id
    title
          handle
          priceRange {
            minVariantPrice {
            amount
        currencyCode
      }
    }
          images(first: 1) {
            nodes {
            id
        url
          altText
          width
          height
      }
    }
  }
          query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
          @inContext(country: $country, language: $language) {
            products(first: 4, sortKey: UPDATED_AT, reverse: true) {
            nodes {
            ...RecommendedProduct
          }
    }
  }
          ` as const;
