import { useTranslation } from 'react-i18next';
import LanguageDropdown from './LanguageDropdown';

function Header() {
    const { t, i18n } = useTranslation();

    return (
        <header className="header">
        <div className="container">
            <nav className="header-nav">
                <div className="header-nav__logo">
                    <a href="#hero">k_94</a>
                </div>

            <div className="header-nav__container">
             <LanguageDropdown />
                    <ul className="header-nav__list">
                            <li className="header-nav__item"><a href="#home" className="header-nav__link">{t('header.home')}</a></li>
                        <li className="header-nav__item"><a href="#about" className="header-nav__link">{t('header.about')}</a></li>
                        <li className="header-nav__item"><a href="#skills" className="header-nav__link">{t('header.skills')}</a></li>
                        <li className="header-nav__item"><a href="#work" className="header-nav__link">{t('header.work')}</a></li>
                        <li className="header-nav__item"><a href="#footer" className="header-nav__link">{t('header.contact')}</a></li>
                    </ul>
                </div>

                {/* <div className="nav__toggle" id="nav-toggle">
                    <i className='bx bx-menu'></i>
                </div> */}
          </nav>
          </div>
</header>
        );
}

export default Header;