import { useTranslation } from 'react-i18next';

function SkillsSection() {
  const { t, i18n } = useTranslation();
  
  return (
<section className="skills-section section" id="skills">
          <div className="container">
        <h2 className="section__title">{t("skills.title") }</h2>
            <div className="skills-section__container">
              <div className="skills-section__container--item">
                <span>HTML</span>
                <span>CSS/SCSS</span>
                <span>Java Script</span>
                <span>Node.js</span>
                <span>React.js</span>
                <span>Responsive / Adaptive Design</span>
                <span>Figma</span>
                <span>AI</span>
              </div>
              <img className="skills-section__img" src="img/certificate.jpg" alt="my certificate"/>
            </div>
          </div>
        </section>
);
}

export default SkillsSection;