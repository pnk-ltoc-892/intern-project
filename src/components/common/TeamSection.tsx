import { teamMembers } from "@/data/About";
import AnimatedTeamSection from "../ui/animated-teamsection";


const TeamSection = () => {
    return (
        <div className="">
            <AnimatedTeamSection testimonials={teamMembers} />
        </div>
    )
}

export default TeamSection;