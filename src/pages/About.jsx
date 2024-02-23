import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "../styles/about.css";

export const About = () => {
  return (
    <>
      <Header />
      <div className="about-page-container">
        <div className="about-row-1">
          <img
            src="https://res.cloudinary.com/dgwvbd9ki/image/upload/v1706864580/spellworth-butterbeer/djambo1990_51954_A_hyperrealistic_black_and_white_photograph_of_fcfc6daf-d3b1-44b9-bcf1-cfc42db94a6d_zvxxr3.png"
            alt=""
          />
          <div className="about-text-container">
            <p>
              For centuries, the shadow of the dragon Zefirakiel loomed large
              over the lands of St. Alban, casting a dark and oppressive cloud
              over its inhabitants. Tales whispered of its fierce reign, its
              fiery breath scorching fields and terrorizing villages. Many brave
              wizards and witches attempted to rid the land of this ancient
              menace, but all efforts proved futile against the dragon's
              formidable power.
            </p>
          </div>
        </div>
        <div className="about-row-2">
          <img
            src="https://res.cloudinary.com/dgwvbd9ki/image/upload/v1706864582/spellworth-butterbeer/djambo1990_51954_A_hyperrealistic_black_and_white_photograph_of_8c0c1ac3-cb5d-4c18-b42e-013127b3d900_u3rnf3.png"
            alt=""
          />
          <div className="about-text-container">
            <p>
              {" "}
              It wasn't until the emergence of our esteemed ancestor, Antonius
              Grenwyck Spellworth, that hope began to dawn on the beleaguered
              land. Through cunning strategy and unwavering determination,
              Antonius embarked on a quest to confront the beast that had
              plagued his ancestors for generations. In a legendary battle that
              would echo through the annals of wizarding history, Antonius
              vanquished Zefirakiel, freeing St. Alban from its centuries-long
              tyranny.
            </p>
          </div>
        </div>
        <div className="about-row-3">
          <img
            src="https://res.cloudinary.com/dgwvbd9ki/image/upload/v1706864577/spellworth-butterbeer/djambo1990_51954_A_hyperrealistic_black_and_white_photograph_of_3d0ccd2f-004a-4128-935d-98c7012262aa_ii4qbd.png"
            alt=""
          />
          <div className="about-text-container">
            <p>
              In recognition of his heroic deed, the Ministry of Magic bestowed
              upon Antonius the title to the liberated lands of St. Alban. And
              it was upon this sacred soil, enriched by the blood of the
              defeated dragon, that a remarkable transformation occurred. Where
              once fear and despair had reigned, now thrived fields of lush
              green hops, their aroma filling the air with promise and
              possibility.
            </p>
          </div>
        </div>
        <div className="about-row-4">
          <img
            src="https://res.cloudinary.com/dgwvbd9ki/image/upload/v1706864178/spellworth-butterbeer/djambo1990_51954_a_huge_structure_from_which_the_body_of_a_humo_57ad4ad9-c5d6-46d7-9e09-b1c40888c6e2_fuhdsi.png"
            alt=""
          />
          <div className="about-text-container">
            <p>
              {" "}
              Thus, from the ashes of adversity arose a new era of prosperity
              for the Spellworth lineage. The fertile land bore witness to the
              birth of a beverage unlike any other – Butterbeer – whose
              distinctive flavor and magical properties would become synonymous
              with the name Spellworth, echoing through generations to come.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
