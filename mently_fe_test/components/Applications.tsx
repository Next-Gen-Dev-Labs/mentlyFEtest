import Button from "./Button";
import NigerianFlag from "./NigerianFlag";
import SectionLeftHead from "./SectionLeftHead";
import SectionRightHead from "./SectionRightHead";
import UserCard from "./UserCard";

const users = [
  {
    name: "Maxwell Smith",
    email: "maxwellsmith@gmail.com",
    image: "/profile1.png",
  },
  {
    name: "Adeati Samuel",
    email: "maxwellsmith@gmail.com",
    image: "/profile2.png",
  },
  {
    name: "Maxwell Smith",
    email: "maxwellsmith@gmail.com",
    image: "/profile1.png",
  },
  {
    name: "Adeati Samuel",
    email: "maxwellsmith@gmail.com",
    image: "/profile2.png",
  },
];

export default function Applications() {
  return (
    <section className="applicationContainer">
      <div>
        <div className="app_head">
          <SectionRightHead title="Applications" />
          <SectionLeftHead />
        </div>
        <div className="py-6">
          <p className="app_men">Mentors</p>

          <div className="app_main">
            <div className="app_body">
              <input type="checkbox" />
              <img
                src={users[0].image}
                alt={users[0].name}
                className="app_img"
              />
              <div className="app_card">
                <div className="app_card_app">
                  <h2 className="app_h2">{users[0].name}</h2>
                  <p className="app_p">{users[0].email}</p>
                </div>
                <div className="app_card_btn">
                  <Button variant="outline" size="sm" className="app_btn1">
                    Reject
                  </Button>
                  <Button size="sm" className="app_btn2">
                    Accept
                  </Button>
                </div>
              </div>
            </div>
            <div className="app_tag">
              <p className="app_role">Product Designer</p>
              <p className="app_ex">4years Experience</p>
              <p className="app_loc">
                <NigerianFlag />
                Lagos, Nigeria
              </p>
              <p className="app_time">GMT +1</p>
            </div>
          </div>
        </div>

        <div>
          {users.map((user, index) => (
            <UserCard key={index} {...user} />
          ))}
        </div>
      </div>
    </section>
  );
}
