import { Link } from "react-router-dom";
import { Style } from "./style";
import { Fragment, useState } from "react";

export default function Menu() {
  const [mainMenu, setMainMenu] = useState<boolean>(false);
  const [active, setActive] = useState<number>(1);
  const [subMenu, setsubMenu] = useState<boolean>(false);
  const categoryItems = () => {
    return (
      <Fragment>
        <li
          onMouseOver={() => {
            setActive(1);
          }}
          className={
            active === 1
              ? "active category-item flex align-center justify-start"
              : "category-item flex align-center justify-start"
          }
        >
          <Link className="flex align-center justify-start" to={"/"}>
            <span>موبایل</span>
          </Link>
        </li>
        <li
          onMouseOver={() => {
            setActive(2);
          }}
          className={
            active === 2
              ? "active category-item flex align-center justify-start"
              : "category-item flex align-center justify-start"
          }
        >
          <Link className="flex align-center justify-start" to={"/"}>
            <span>کالای دیجیتال</span>
          </Link>
        </li>
        <li
          onMouseOver={() => {
            setActive(3);
          }}
          className={
            active === 3
              ? "active category-item flex align-center justify-start"
              : "category-item flex align-center justify-start"
          }
        >
          <Link className="flex align-center justify-start" to={"/"}>
            <span>خانه و آشپزخانه</span>
          </Link>
        </li>
        <li
          onMouseOver={() => {
            setActive(4);
          }}
          className={
            active === 4
              ? "active category-item flex align-center justify-start"
              : "category-item flex align-center justify-start"
          }
        >
          <Link className="flex align-center justify-start" to={"/"}>
            <span>لوازم خانگی برقی</span>
          </Link>
        </li>
        <li
          onMouseOver={() => {
            setActive(5);
          }}
          className={
            active === 5
              ? "active category-item flex align-center justify-start"
              : "category-item flex align-center justify-start"
          }
        >
          <Link className="flex align-center justify-start" to={"/"}>
            <span>مد و پوشاک</span>
          </Link>
        </li>
        <li
          onMouseOver={() => {
            setActive(6);
          }}
          className={
            active === 6
              ? "active category-item flex align-center justify-start"
              : "category-item flex align-center justify-start"
          }
        >
          <Link className="flex align-center justify-start" to={"/"}>
            <span>زیبایی و سلامت</span>
          </Link>
        </li>
        <li
          onMouseOver={() => {
            setActive(7);
          }}
          className={
            active === 7
              ? "active category-item flex align-center justify-start"
              : "category-item flex align-center justify-start"
          }
        >
          <Link className="flex align-center justify-start" to={"/"}>
            <span>کارت هدیه</span>
          </Link>
        </li>
        <li
          onMouseOver={() => {
            setActive(8);
          }}
          className={
            active === 8
              ? "active category-item flex align-center justify-start"
              : "category-item flex align-center justify-start"
          }
        >
          <Link className="flex align-center justify-start" to={"/"}>
            <span>کالاهای سوپرمارکتی</span>
          </Link>
        </li>
        <li
          onMouseOver={() => {
            setActive(9);
          }}
          className={
            active === 9
              ? "active category-item flex align-center justify-start"
              : "category-item flex align-center justify-start"
          }
        >
          <Link className="flex align-center justify-start" to={"/"}>
            <span>کتاب، لوازم التحریر و هنر</span>
          </Link>
        </li>
        <li
          onMouseOver={() => {
            setActive(10);
          }}
          className={
            active === 10
              ? "active category-item flex align-center justify-start"
              : "category-item flex align-center justify-start"
          }
        >
          <Link className="flex align-center justify-start" to={"/"}>
            <span>اسباب بازی، کودک و نوزاد</span>
          </Link>
        </li>
        <li
          onMouseOver={() => {
            setActive(11);
          }}
          className={
            active === 11
              ? "active category-item flex align-center justify-start"
              : "category-item flex align-center justify-start"
          }
        >
          <Link className="flex align-center justify-start" to={"/"}>
            <span>ابزارآلات و تجهیزات</span>
          </Link>
        </li>
        <li
          onMouseOver={() => {
            setActive(12);
          }}
          className={
            active === 12
              ? "active category-item flex align-center justify-start"
              : "category-item flex align-center justify-start"
          }
        >
          <Link className="flex align-center justify-start" to={"/"}>
            <span>خودرو و موتورسیکلت</span>
          </Link>
        </li>
        <li
          onMouseOver={() => {
            setActive(13);
          }}
          className={
            active === 13
              ? "active category-item flex align-center justify-start"
              : "category-item flex align-center justify-start"
          }
        >
          <Link className="flex align-center justify-start" to={"/"}>
            <span>ورزش و سفر</span>
          </Link>
        </li>
        <li
          onMouseOver={() => {
            setActive(14);
          }}
          className={
            active === 14
              ? "active category-item flex align-center justify-start"
              : "category-item flex align-center justify-start"
          }
        >
          <Link className="flex align-center justify-start" to={"/"}>
            <span>محصولات بومی و محلی</span>
          </Link>
        </li>
      </Fragment>
    );
  };
  return (
    <Style>
      <div className="container">
        <div className="menu flex align-center justify-start">
          <div
            onMouseOver={() => {
              setMainMenu(true);
            }}
            onMouseLeave={() => {
              setMainMenu(false);
            }}
            className="category flex align-center justify-center"
          >
            <Link
              className="category-top flex align-center justify-center gap-5"
              to={"/"}
            >
              <i className="fa-solid fa-bars"></i>
              <span>دسته بندی کالاها</span>
            </Link>
            {mainMenu && (
              <div className="category-dropdown">
                <div>
                  <div className="main-menu">
                    <ul className="category-items flex flex-column align-start gap-5">
                      {categoryItems()}
                    </ul>
                  </div>
                  <div className="sub-menu"></div>
                </div>
              </div>
            )}
          </div>
          <ul className="menu-items flex align-center justify-start">
            <li className="item flex align-center justify-center gap-5">
              <Link className="flex align-center justify-center gap-5" to={"/"}>
                <i className="fa-solid fa-percent"></i>
                <span>شگفت انگیزها</span>
              </Link>
            </li>
            <li className="item flex align-center justify-center gap-5">
              <Link className="flex align-center justify-center gap-5" to={"/"}>
                <i className="fa-solid fa-basket-shopping"></i>
                <span>سوپرمارکت</span>
              </Link>
            </li>
            <li className="item flex align-center justify-center gap-5">
              <Link className="flex align-center justify-center gap-5" to={"/"}>
                <i className="fa-solid fa-credit-card"></i>
                <span>کارت هدیه</span>
              </Link>
            </li>
            <li className="item flex align-center justify-center gap-5">
              <Link className="flex align-center justify-center gap-5" to={"/"}>
                <i className="fa-solid fa-fire-flame-curved"></i>
                <span>پر فروش ترین ها</span>
              </Link>
            </li>
            <li className="item flex align-center justify-center gap-5">
              <Link className="flex align-center justify-center gap-5" to={"/"}>
                <i className="fa-solid fa-tags"></i>
                <span>تخفیف ها و پیشنهادها</span>
              </Link>
            </li>
            <li className="item flex align-center justify-center gap-5">
              <Link className="flex align-center justify-center gap-5" to={"/"}>
                <span>سوالی دارید؟</span>
              </Link>
            </li>
            <li className="item flex align-center justify-center gap-5">
              <Link className="flex align-center justify-center gap-5" to={"/"}>
                <span>در دیجیکالا بفروشید!</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Style>
  );
}
