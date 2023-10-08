import { Await, NavLink, useMatches } from '@remix-run/react';
import { Suspense } from 'react';
import type { LayoutProps } from './Layout';

type HeaderProps = Pick<LayoutProps, 'header' | 'cart' | 'isLoggedIn'>;

type Viewport = 'desktop' | 'mobile';

export function Header({ header, isLoggedIn, cart }: HeaderProps) {
  const { shop, menu } = header;
  return (
    // <header className="header nav">
    //   <HeaderMenuMobileToggle />
    //   <NavLink prefetch="intent" to="/"
    //     // style={activeLinkStyle}
    //     end>
    //     <strong>{shop.name}</strong>
    //   </NavLink>

    //   <HeaderMenu menu={menu} viewport="desktop" />

    //   <HeaderCtas isLoggedIn={isLoggedIn} cart={cart} />
    // </header>

    <div id="header" className="app-header navbar navbar-expand-lg">
      <div className="desktop-toggler">
        <button type="button" className="menu-toggler" >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      <div className="mobile-toggler">
        <button type="button" className="menu-toggler" >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      <div className="brand">
        <NavLink to="/" className="brand-logo">
          <span className="brand-img">
            <span className="brand-img-text text-theme">SS</span>
          </span>
          <span className="brand-text">HUD ADMIN</span>
        </NavLink>
      </div>

      <HeaderMenu menu={menu} viewport="desktop" />



      <div className="menu">
        <div className="menu-item dropdown">
          <a href="#/" className="menu-link">
            <div className="menu-icon"><i className="bi bi-search nav-icon"></i></div>
          </a>
        </div>
        <div className="menu-item dropdown dropdown-mobile-full">
          <a href="#/" data-bs-toggle="dropdown" data-bs-display="static" className="menu-link">
            <div className="menu-icon"><i className="bi bi-grid-3x3-gap nav-icon"></i></div>
          </a>
          <div className="dropdown-menu fade dropdown-menu-end w-300px text-center p-0 mt-1">
            <div className="row row-grid gx-0">
              <div className="col-4">
                <NavLink to="/email/inbox" className="dropdown-item text-decoration-none p-3 bg-none">
                  <div className="position-relative">
                    <i className="bi bi-circle-fill position-absolute text-theme top-0 mt-n2 me-n2 fs-6px d-block text-center w-100"></i>
                    <i className="bi bi-envelope h2 opacity-5 d-block my-1"></i>
                  </div>
                  <div className="fw-500 fs-10px text-inverse">INBOX</div>
                </NavLink>
              </div>
              <div className="col-4">
                <NavLink to="/pos/customer-order" className="dropdown-item text-decoration-none p-3 bg-none">
                  <div><i className="bi bi-hdd-network h2 opacity-5 d-block my-1"></i></div>
                  <div className="fw-500 fs-10px text-inverse">POS SYSTEM</div>
                </NavLink>
              </div>
              <div className="col-4">
                <NavLink to="/calendar" className="dropdown-item text-decoration-none p-3 bg-none">
                  <div><i className="bi bi-calendar4 h2 opacity-5 d-block my-1"></i></div>
                  <div className="fw-500 fs-10px text-inverse">CALENDAR</div>
                </NavLink>
              </div>
            </div>
            <div className="row row-grid gx-0">
              <div className="col-4">
                <NavLink to="/helper" className="dropdown-item text-decoration-none p-3 bg-none">
                  <div><i className="bi bi-terminal h2 opacity-5 d-block my-1"></i></div>
                  <div className="fw-500 fs-10px text-inverse">HELPER</div>
                </NavLink>
              </div>
              <div className="col-4">
                <NavLink to="/settings" className="dropdown-item text-decoration-none p-3 bg-none">
                  <div className="position-relative">
                    <i className="bi bi-circle-fill position-absolute text-theme top-0 mt-n2 me-n2 fs-6px d-block text-center w-100"></i>
                    <i className="bi bi-sliders h2 opacity-5 d-block my-1"></i>
                  </div>
                  <div className="fw-500 fs-10px text-inverse">SETTINGS</div>
                </NavLink>
              </div>
              <div className="col-4">
                <NavLink to="/widgets" className="dropdown-item text-decoration-none p-3 bg-none">
                  <div><i className="bi bi-collection-play h2 opacity-5 d-block my-1"></i></div>
                  <div className="fw-500 fs-10px text-inverse">WIDGETS</div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-item dropdown dropdown-mobile-full">
          <a href="#/" data-bs-toggle="dropdown" data-bs-display="static" className="menu-link">
            <div className="menu-icon"><i className="bi bi-bell nav-icon"></i></div>
            <div className="menu-badge bg-theme"></div>
          </a>
          <div className="dropdown-menu dropdown-menu-end mt-1 w-300px fs-11px pt-1">
            <h6 className="dropdown-header fs-10px mb-1">NOTIFICATIONS</h6>
            <div className="dropdown-divider mt-1"></div>
            {/* {notificationData.length > 0 ? (notificationData.map((notification, index) => ((
              <a href="#/" key={index} className="d-flex align-items-center py-10px dropdown-item text-wrap fw-semibold">
                <div className="fs-20px">
                  <i className={notification.icon}></i>
                </div>
                <div className="flex-1 flex-wrap ps-3">
                  <div className="mb-1 text-inverse">{notification.title}</div>
                  <div className="small text-inverse text-opacity-50">{notification.time}</div>
                </div>
                <div className="ps-2 fs-16px">
                  <i className="bi bi-chevron-right"></i>
                </div>
              </a>
            )))) : (
              <div className="dropdown-notification-item p-3 text-center">
                No record found
              </div>
            )} */}
            <hr className="mb-0 mt-2" />
            <div className="py-10px mb-n2 text-center">
              <a href="#/" className="text-decoration-none fw-bold">SEE ALL</a>
            </div>
          </div>
        </div>
        <div className="menu-item dropdown dropdown-mobile-full">
          <a href="#/" data-bs-toggle="dropdown" data-bs-display="static" className="menu-link">
            <div className="menu-img online">
              <img src="/assets/img/user/profile.jpg" alt="Profile" height="60" />
            </div>
            <div className="menu-text d-sm-block d-none w-170px">username@account.com</div>
          </a>
          <div className="dropdown-menu dropdown-menu-end me-lg-3 fs-11px mt-1">
            <NavLink to="/profile" className="dropdown-item d-flex align-items-center">PROFILE <i className="bi bi-person-circle ms-auto text-theme fs-16px my-n1"></i></NavLink>
            <NavLink to="/email/inbox" className="dropdown-item d-flex align-items-center">INBOX <i className="bi bi-envelope ms-auto text-theme fs-16px my-n1"></i></NavLink>
            <NavLink to="/calendar" className="dropdown-item d-flex align-items-center">CALENDAR <i className="bi bi-calendar ms-auto text-theme fs-16px my-n1"></i></NavLink>
            <NavLink to="/settings" className="dropdown-item d-flex align-items-center">SETTINGS <i className="bi bi-gear ms-auto text-theme fs-16px my-n1"></i></NavLink>
            <div className="dropdown-divider"></div>
            <NavLink to="/pages/login" className="dropdown-item d-flex align-items-center">LOGOUT <i className="bi bi-toggle-off ms-auto text-theme fs-16px my-n1"></i></NavLink>
          </div>
        </div>
      </div>

      <form className="menu-search" method="POST" name="header_search_form">
        <div className="menu-search-container">
          <div className="menu-search-icon"><i className="bi bi-search"></i></div>
          <div className="menu-search-input">
            <input type="text" className="form-control form-control-lg" placeholder="Search menu..." />
          </div>
          <div className="menu-search-icon">
            <a href="#/" ><i className="bi bi-x-lg"></i></a>
          </div>
        </div>
      </form>
    </div>
  );
}

export function HeaderMenu({
  menu,
  viewport,
}: {
  menu: HeaderProps['header']['menu'];
  viewport: Viewport;
}) {
  const [root] = useMatches();
  const publicStoreDomain = root?.data?.publicStoreDomain;
  const className = `header-menu-${viewport} nav`;

  function closeAside(event: React.MouseEvent<HTMLAnchorElement>) {
    if (viewport === 'mobile') {
      event.preventDefault();
      window.location.href = event.currentTarget.href;
    }
  }

  return (
    <nav className={className} role="navigation">
      {viewport === 'mobile' && (
        <NavLink
          end
          onClick={closeAside}
          prefetch="intent"
          style={activeLinkStyle}
          to="/"
        >
          Home
        </NavLink>
      )}
      {(menu || FALLBACK_HEADER_MENU).items.map((item) => {
        if (!item.url) return null;

        // if the url is internal, we strip the domain
        const url =
          item.url.includes('myshopify.com') ||
            item.url.includes(publicStoreDomain)
            ? new URL(item.url).pathname
            : item.url;
        return (
          <NavLink
            className="header-menu-item nav-link"
            end
            key={item.id}
            onClick={closeAside}
            prefetch="intent"
            style={activeLinkStyle}
            to={url}
          >
            {item.title}
          </NavLink>
        );
      })}
    </nav>
  );
}

function HeaderCtas({
  isLoggedIn,
  cart,
}: Pick<HeaderProps, 'isLoggedIn' | 'cart'>) {
  return (
    <nav className="header-ctas" role="navigation">

      <NavLink prefetch="intent" to="/account" style={activeLinkStyle}>
        {isLoggedIn ? 'Account' : 'Sign in'}
      </NavLink>
      <SearchToggle />
      <CartToggle cart={cart} />
    </nav>
  );
}

function HeaderMenuMobileToggle() {
  return (
    <a className="header-menu-mobile-toggle" href="#mobile-menu-aside">
      <h3>☰</h3>
    </a>
  );
}

function SearchToggle() {
  return <a href="#search-aside">Search</a>;
}

function CartBadge({ count }: { count: number }) {
  return <a href="#cart-aside">Cart {count}</a>;
}

function CartToggle({ cart }: Pick<HeaderProps, 'cart'>) {
  return (
    <Suspense fallback={<CartBadge count={0} />}>
      <Await resolve={cart}>
        {(cart) => {
          if (!cart) return <CartBadge count={0} />;
          return <CartBadge count={cart.totalQuantity || 0} />;
        }}
      </Await>
    </Suspense>
  );
}

const FALLBACK_HEADER_MENU = {
  id: 'gid://shopify/Menu/199655587896',
  items: [
    {
      id: 'gid://shopify/MenuItem/461609500728',
      resourceId: null,
      tags: [],
      title: 'Collections',
      type: 'HTTP',
      url: '/collections',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609533496',
      resourceId: null,
      tags: [],
      title: 'Blog',
      type: 'HTTP',
      url: '/blogs/journal',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609566264',
      resourceId: null,
      tags: [],
      title: 'Policies',
      type: 'HTTP',
      url: '/policies',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609599032',
      resourceId: 'gid://shopify/Page/92591030328',
      tags: [],
      title: 'About',
      type: 'PAGE',
      url: '/pages/about',
      items: [],
    },
  ],
};

function activeLinkStyle({
  isActive,
  isPending,
}: {
  isActive: boolean;
  isPending: boolean;
}) {
  return {
    // fontWeight: isActive ? 'bold' : undefined,
    // color: isPending ? 'grey' : 'black',
    color: isActive ? 'white' : 'white',
  };
}
