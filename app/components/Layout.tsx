import { Await } from '@remix-run/react';
import { Suspense, useState } from 'react';
import type {
  CartApiQueryFragment,
  FooterQuery,
  HeaderQuery,
} from 'storefrontapi.generated';
import { Aside } from '~/components/Aside';
import { Footer } from '~/components/Footer';
import { Header, HeaderMenu } from '~/components/Header';
import { CartMain } from '~/components/Cart';
import {
  PredictiveSearchForm,
  PredictiveSearchResults,
} from '~/components/Search';

// import { SSHEADER } from "../../../src/components/header/ssa_header";
// import { AppSettings } from '../../../src/config/app-settings';
// import * as SSSidebar from "../../../src/components/sidebar/sidebar";
export type LayoutProps = {
  cart: Promise<CartApiQueryFragment | null>;
  children?: React.ReactNode;
  footer: Promise<FooterQuery>;
  header: HeaderQuery;
  isLoggedIn: boolean;
};


export function Layout({
  cart,
  children = null,
  footer,
  header,
  isLoggedIn,
}: LayoutProps) {

  var defaultOptions = {
    appMode: '',
    appTheme: '',
    appCover: '',
    appHeaderNone: false,
    appSidebarNone: false,
    appSidebarCollapsed: false,
    appContentNone: false,
    appContentClass: '',
    appContentFullHeight: false,
    appBoxedLayout: false,
    appFooter: false,
    appTopNav: false,
    hasScroll: false
  };
  const [appHeaderNone, setAppHeaderNone] = useState(defaultOptions.appHeaderNone);
  const [appSidebarNone, setAppSidebarNone] = useState(defaultOptions.appSidebarNone);
  const [appSidebarCollapsed, setAppSidebarCollapsed] = useState(defaultOptions.appSidebarCollapsed);
  const [appContentNone, setAppContentNone] = useState(defaultOptions.appContentNone);
  const [appContentClass, setAppContentClass] = useState(defaultOptions.appContentClass);
  const [appContentFullHeight, setAppContentFullHeight] = useState(defaultOptions.appContentFullHeight);
  const [appBoxedLayout, setAppBoxedLayout] = useState(defaultOptions.appBoxedLayout);
  const [appFooter, setAppFooter] = useState(defaultOptions.appFooter);
  const [appTopNav, setAppTopNav] = useState(defaultOptions.appTopNav);
  const [hasScroll, setHasScroll] = useState(defaultOptions.hasScroll);
  const providerValue = {
    setAppHeaderNone,
    setAppSidebarNone,
    setAppSidebarCollapsed,
    setAppContentNone,
    setAppContentClass,
    setAppContentFullHeight,
    setAppBoxedLayout,
    setAppFooter,
    setAppTopNav
  };
  return (
    <div className='d-flex flex-column '>
      {/* <AppSettings.Provider value={providerValue}> */}

      <CartAside cart={cart} />
      <SearchAside />
      <MobileMenuAside menu={header.menu} />
      <Header header={header} cart={cart} isLoggedIn={isLoggedIn} />
      {/* <SSHEADER /> */}
      <main>{children}</main>
      {/* <Suspense>
        <Await resolve={footer}>
          {(footer) => <Footer menu={footer.menu} />}
        </Await>
      </Suspense> */}

      {/* </AppSettings.Provider> */}
    </div>
  );
}

function CartAside({ cart }: { cart: LayoutProps['cart'] }) {
  return (
    <Aside id="cart-aside" heading="CART">
      <Suspense fallback={<p>Loading cart ...</p>}>
        <Await resolve={cart}>
          {(cart) => {
            return <CartMain cart={cart} layout="aside" />;
          }}
        </Await>
      </Suspense>
    </Aside>
  );
}

function SearchAside() {
  return (
    <Aside id="search-aside" heading="SEARCH">
      <div className="predictive-search">
        <br />
        <PredictiveSearchForm>
          {({ fetchResults, inputRef }) => (
            <div>
              <input
                name="q"
                onChange={fetchResults}
                onFocus={fetchResults}
                placeholder="Search"
                ref={inputRef}
                type="search"
              />
              &nbsp;
              <button type="submit">Search</button>
            </div>
          )}
        </PredictiveSearchForm>
        <PredictiveSearchResults />
      </div>
    </Aside>
  );
}

function MobileMenuAside({ menu }: { menu: HeaderQuery['menu'] }) {
  return (
    <Aside id="mobile-menu-aside" heading="MENU">
      <HeaderMenu menu={menu} viewport="mobile" />
    </Aside>
  );
}
