import { useTranslation } from 'react-i18next';

function HomeSection() {
  const { t, i18n } = useTranslation();

    return (
<section className="home-section section" id="home">
          <div className="container">
          <h2 className="hidden">{t('home.title') }</h2>
              <div>
              <div className="home-section__data">
                    <h1 className="home-section__title">{t('home.hi') }<br/>{t('home.me') }<span className="home-section__title--color">{t('home.name') }</span><br/>{t('home.job') }</h1>
                    <a href="#footer" className="contact-button">{t('home.contact') }</a>
                </div>
                <div className="home-section__social">
              <a href="https://github.com/k94-dev" className="home-section__social--icon" target="_blank" rel="noreferrer">
                <svg className="github" height={"34px"} width={"34px"}>
                  <use href={`${process.env.PUBLIC_URL}/img/sprite.svg#icon-github`}></use>
              </svg>
              </a>
                </div>
                </div>
                <div className="home-section__img">
                    <svg className="home-section__blob" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0" mask-type="alpha">
                            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
                        </mask>
                        <g mask="url(#mask0)">
                            <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
                            <image className="home-section__blob--img" x="50" y="20" href={`${process.env.PUBLIC_URL}/img/my-photo-removebg-preview.png`}/>
                        </g>
                    </svg>
            </div>
            </div>
        </section>
        );
}

export default HomeSection;