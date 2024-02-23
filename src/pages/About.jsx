import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const About = () => {
  return (
    <>
      <Header />
      <div className="about-row-container">
        <h3>St. Alban & the dragon</h3>

        <img
          className="paragraph-break"
          src="https://res.cloudinary.com/dgwvbd9ki/image/upload/v1706785230/spellworth-butterbeer/paragraph-break_wvbzod.png"
          alt="spellworth-logo"
        />

        <div className="about-row-1">
          <img
            className="about-img-1"
            src="https://res.cloudinary.com/dgwvbd9ki/image/upload/v1706864581/spellworth-butterbeer/djambo1990_51954_A_hyperrealistic_black_and_white_photograph_of_b041ef89-5a18-43fb-b17b-5b17054527a8_vbqeno.png"
            alt=""
          />
          <p className="about-paragraph-1">
            For centuries, the shadow of the dragon Zefirakiel loomed large over
            the lands of St. Alban, casting a dark and oppressive cloud over its
            inhabitants. Tales whispered of its fierce reign, its fiery breath
            scorching fields and terrorizing villages. Many brave wizards and
            witches attempted to rid the land of this ancient menace, but all
            efforts proved futile against the dragon's formidable power.
          </p>

          <img
            className="paragraph-break"
            src="https://res.cloudinary.com/dgwvbd9ki/image/upload/v1706785230/spellworth-butterbeer/paragraph-break_wvbzod.png"
            alt="spellworth-logo"
          />

          <div className="about-row-2">
            <img
              className="about-img-2"
              src="https://res.cloudinary.com/dgwvbd9ki/image/upload/v1706864580/spellworth-butterbeer/djambo1990_51954_A_hyperrealistic_black_and_white_photograph_of_fcfc6daf-d3b1-44b9-bcf1-cfc42db94a6d_zvxxr3.png"
              alt=""
            />

            <p className="about-paragraph-2">
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

          <img
            className="paragraph-break"
            src="https://res.cloudinary.com/dgwvbd9ki/image/upload/v1706785230/spellworth-butterbeer/paragraph-break_wvbzod.png"
            alt="spellworth-logo"
          />

          <div className="about-row-3">
            <img
              className="about-img-3"
              src="https://res.cloudinary.com/dgwvbd9ki/image/upload/v1706864178/spellworth-butterbeer/djambo1990_51954_a_huge_structure_from_which_the_body_of_a_humo_2c8c9045-1b72-46ac-91c1-670e665cc19c_p85gyx.png"
              alt=""
            />
            <p className="about-paragraph-3">
              In recognition of his heroic deed, the Ministry of Magic bestowed
              upon Antonius the title to the liberated lands of St. Alban. And
              it was upon this sacred soil, enriched by the blood of the
              defeated dragon, that a remarkable transformation occurred. Where
              once fear and despair had reigned, now thrived fields of lush
              green hops, their aroma filling the air with promise and
              possibility.
            </p>
          </div>

          <img
            className="paragraph-break"
            src="https://res.cloudinary.com/dgwvbd9ki/image/upload/v1706785230/spellworth-butterbeer/paragraph-break_wvbzod.png"
            alt="spellworth-logo"
          />

          <div className="about-row-4">
            <img
              className="about-img-4"
              src="https://res.cloudinary.com/dgwvbd9ki/image/upload/v1706864178/spellworth-butterbeer/djambo1990_51954_a_huge_structure_from_which_the_body_of_a_humo_57ad4ad9-c5d6-46d7-9e09-b1c40888c6e2_fuhdsi.png"
              alt=""
            />

            <p className="about-paragraph-4">
              Thus, from the ashes of adversity arose a new era of prosperity
              for the Spellworth lineage. The fertile land bore witness to the
              birth of a beverage unlike any other – Butterbeer – whose
              distinctive flavor and magical properties would become synonymous
              with the name Spellworth, echoing through generations to come.
            </p>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};
