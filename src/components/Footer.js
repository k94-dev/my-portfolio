import { useTranslation } from 'react-i18next';

function Footer() {
  const { t, i18n } = useTranslation();

  return (
<footer className="footer" id="footer">
        <div className="container">
          <p className="footer__title">{t("footer.title")}</p>
            <address className="footer__social">
            <a href="https://t.me/kkkkkkk94" className="footer__icon" title="my telegram" target="_blank" rel="noreferrer">
            <svg className="telegram-icon">
                  <use href="/img/sprite.svg#icon-telegram"></use>
              </svg>
            </a>
                <a href="mailto:sergeykom70@gmail.com" className="footer__icon" title="mail me">sergeykom70@gmail.com</a>
                <a href="tel:+380965198347" className="footer__icon" title="call me">+380965198347</a>
            </address>
            <p class="footer__copy">&#169; k_94. {t("footer.copy")}</p>
            </div>
        </footer>
);
}

export default Footer;