import React from "react";

import TeamMemberCard from "../../common/TeamMemberCard";
import { TeamMembers } from "../../utils";

const OurTeam = () => {
  return (
    <section id="#our-team" className="pt-20 pb-10 px-5 md:px-5 md:py-20">
      <div className="max-w-6xl mx-auto h-full">
        <div className="max-w-xl m-auto text-center mb-28">
          <h2 className="text-4xl font-semibold mb-3">Our Team</h2>
          <p className="text-lg text-textAccentMedium">
            orem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos
            quaerat sapiente nam, id vero.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TeamMembers.map((item) => (
            <TeamMemberCard
              profileUrl={item.profileUrl}
              title={item.title}
              designation={item.designation}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
