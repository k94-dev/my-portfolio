import { useTranslation } from 'react-i18next';

function AboutSection() {
    const { t, i18n } = useTranslation();

    return (
<section class="about-section section" id="about">
          <div className="container">
                <h2 className="section__title">{t("about.title")}</h2>
                <div className="about-section__container">
                    <div className="about-section__img">
                        <img src="img/94.jpg" alt="me"/>
                    </div>
                    <div className="about-section__info">
                        <h3 className="about-section__subtitle">{t("about.name")}</h3>
                <p className="about-section__text">
                            {t("about.fstText")}
                             </p> 
                  <p className="about-section__text">
                            {t("about.sText")}
                             </p> 
                  <p className="about-section__text">
                            {t("about.tText")}
                             </p> 
                  <p className="about-section__text">
                  {t("about.fthText")}
                          </p> 
                    </div>                                   
            </div>
            </div>
        </section>
         );
}

export default AboutSection;