import "../App.css";
import "../styles/clients.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const SpellworthClients = () => {
  return (
    <>
      <Header />
      <div className="hogwarts-page-container">
        <div className="hogwarts-row-1">
          <img
            src="https://res.cloudinary.com/dgwvbd9ki/image/upload/v1706874274/spellworth-butterbeer/djambo1990_51954_a_man_dressed_like_in_the_Middle_Ages_shaking__7f9a732f-87bd-4ff4-a7de-e7071c75c63c_tsahna.png"
            alt="Spellworth & Dumbledore"
          />{" "}
          <div className="hogwarts-text-container">
            <p>
              The relationship between Hogwarts and the Spellworth Butterbeer
              Farm goes beyond mere patronage – it is a partnership forged in
              shared values and mutual respect. "As the exclusive supplier of
              Butterbeer to the Hogwarts Express and the Three Broomsticks Inn,
              the Spellworths play a vital role in ensuring that students and
              visitors alike experience the true essence of wizarding
              hospitality," said Albus Dumbledore last year, a honored guest in
              the Spellworth Butterhop Harvest Event.
            </p>
          </div>
        </div>
        <div className="hogwarts-row-2">
          <img
            src="https://res.cloudinary.com/dgwvbd9ki/image/upload/v1709551587/spellworth-butterbeer/djambo1990_51954_Hyperrealisti_colored_photograph_of_a_group_of_e619248d-11ea-4d4c-b972-a5b2e6d7e1cc_da3brg.png"
            alt="hogwarts-students"
          />
          <div className="hogwarts-text-container">
            But beyond the glitz and glamour of the tournament lies a deeper
            connection that binds Hogwarts, Hogsmeade, and the Spellworth
            Butterbeer Farm together. It is a connection forged in shared
            memories and shared experiences – from the laughter of students
            enjoying a cold Butterbeer after a Quidditch match to the quiet
            moments shared between friends in the warmth of the Three
            Broomsticks. In the end, it is this sense of belonging and
            camaraderie that defines the special relationship between Hogwarts,
            Hogsmeade, and the Spellworth Butterbeer Farm. As long as there are
            witches and wizards who call these hallowed halls home, the magic of
            Butterbeer will continue to flow, weaving its way through the
            tapestry of wizarding life for generations to come.
          </div>
        </div>
        <div className="hogwarts-row-3">
          <img
            src="https://res.cloudinary.com/dgwvbd9ki/image/upload/v1709552023/spellworth-butterbeer/djambo1990_51954_the_Three_Wizard_Tournament._Huge_crowds_of_en_8248a28a-9eb1-4bb0-a13e-babec8992d21_toojex.png"
            alt="triwizard-tournament"
          />
          <div className="hogwarts-text-container">
            As the wizarding world's premier sporting event, the Triwizard
            Tournament draws competitors and spectators from far and wide,
            transforming Hogsmeade into a bustling hub of excitement and
            anticipation. For the Spellworth family, the Triwizard Tournament
            represents more than just an opportunity to showcase their wares –
            it is a chance to celebrate the spirit of competition and the
            triumph of the human (and magical) spirit. Each year, they work
            tirelessly to ensure that the Butterbeer flows freely, fueling the
            cheers and applause that echo through the stadium as champions vie
            for glory.
          </div>
        </div>
        <div className="hogwarts-row-4">
          <img
            src="https://res.cloudinary.com/dgwvbd9ki/image/upload/v1706874176/spellworth-butterbeer/djambo1990_51954_a_man_with_a_thick_red_beard_dressed_like_in_t_fe61ec32-43d9-4c6f-960b-6a12598d6290_foladd.png"
            alt="Marcus Scoto Spellworth at Hogwarts"
          />
          <div className="about-text-container">
            Thus, from the ashes of adversity arose a new era of prosperity for
            the Spellworth lineage up to its very last representative, Marcus
            Scoto Spellworth. The fertile land bore witness to the birth of a
            beverage unlike any other – Butterbeer – whose distinctive flavor
            and magical properties would become synonymous with the name
            Spellworth, echoing through generations to come.
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
